import { Component, signal, inject, OnInit, computed, HostListener } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReviewsService, Review } from "../../services/reviews.service";

@Component({
	selector: "app-reviews",
	standalone: true,
	imports: [FormsModule],
	template: `
		<section
			class="py-16 md:py-24 px-5 md:px-8 bg-dark-800 overflow-hidden"
			id="recensioni"
		>
			<div class="max-w-6xl mx-auto">
				<p class="text-xs font-bold tracking-widest uppercase text-brand-violet text-center mb-4">Recensioni</p>
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center leading-tight tracking-tight mb-3">Parole loro, non mie.</h2>
				<p class="text-white/50 text-center text-sm md:text-base mb-10 md:mb-12 px-4">Quello che dicono gli studenti (e i genitori) dopo le lezioni.</p>

				<div class="relative group">
					<div 
						class="flex transition-transform duration-500 ease-out gap-6"
						[style.transform]="'translateX(' + translateX() + 'px)'"
					>
						@for (review of reviews(); track review.id) {
							<div 
								class="shrink-0 transition-opacity duration-300"
								[style.width.px]="cardWidth()"
								[class.opacity-40]="!isCardVisible($index)"
							>
								<div class="liquid-glass rounded-2xl p-6 md:p-7 h-full flex flex-col hover:border-brand-violet/20 transition-all duration-300">
									<div class="text-5xl leading-none text-brand-violet/25 font-serif mb-2">"</div>
									<p class="text-white/78 text-sm md:text-base leading-relaxed italic mb-6 flex-grow">{{ review.text }}</p>
									<div class="flex items-center gap-3">
										<div class="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-indigo flex items-center justify-center text-white font-extrabold text-sm shrink-0">
											{{ review.author.charAt(0).toUpperCase() }}
										</div>
										<div class="min-w-0">
											<div class="text-white font-bold text-sm truncate">{{ review.author }}</div>
											<div class="text-white/45 text-xs truncate">{{ review.role }}</div>
										</div>
										<div class="ml-auto flex gap-0.5 shrink-0">
											@for (s of [1,2,3,4,5]; track s) {
												<span class="text-sm" [class.text-amber-400]="s <= review.stars" [style.color]="s > review.stars ? 'rgba(255,255,255,0.1)' : null">★</span>
											}
										</div>
									</div>
								</div>
							</div>
						}

						<div 
							class="shrink-0"
							[style.width.px]="cardWidth()"
						>
							<div
								class="bg-white/[0.02] border-2 border-dashed border-white/15 rounded-2xl p-7 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-brand-violet/40 hover:bg-white/[0.04] transition-all duration-300 h-full min-h-[220px]"
								(click)="openDialog()"
							>
								<div class="w-12 h-12 rounded-full border-2 border-dashed border-brand-violet/50 flex items-center justify-center text-brand-violet text-2xl font-light">+</div>
								<p class="text-white/50 text-sm text-center leading-relaxed">
									Hai fatto lezione con me?<br />
									<span class="text-brand-violet font-semibold">Lascia la tua recensione</span>
								</p>
							</div>
						</div>
					</div>

					<button 
						(click)="prev()"
						[disabled]="currentIndex() === 0"
						class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-12 h-12 rounded-full bg-dark-700 border border-white/10 text-white flex items-center justify-center hover:bg-brand-violet hover:border-brand-violet transition-all z-10 disabled:opacity-0 disabled:pointer-events-none group-hover:translate-x-0"
					>
						←
					</button>
					<button 
						(click)="next()"
						[disabled]="currentIndex() >= totalItems() - visibleCards()"
						class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-12 h-12 rounded-full bg-dark-700 border border-white/10 text-white flex items-center justify-center hover:bg-brand-violet hover:border-brand-violet transition-all z-10 disabled:opacity-0 disabled:pointer-events-none group-hover:translate-x-0"
					>
						→
					</button>
				</div>
			</div>
		</section>

		@if (dialogOpen()) {
			<div
				class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
				(click)="closeDialog()"
			>
				<div
					class="bg-dark-700 border border-white/10 rounded-2xl p-8 w-full max-w-md shadow-2xl"
					(click)="$event.stopPropagation()"
				>
					<h3 class="text-xl font-bold text-white mb-1">Lascia la tua recensione</h3>
					<p class="text-white/40 text-sm mb-6">La tua esperienza aiuta altri studenti a scegliere.</p>

					<div class="flex flex-col gap-4">
						<input
							[(ngModel)]="form.author"
							placeholder="Il tuo nome"
							class="bg-white/[0.06] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 outline-none focus:border-brand-violet/50 transition-colors"
						/>
						<input
							[(ngModel)]="form.role"
							placeholder="Es: Liceo Scientifico, 3ª"
							class="bg-white/[0.06] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 outline-none focus:border-brand-violet/50 transition-colors"
						/>
						<textarea
							[(ngModel)]="form.text"
							rows="4"
							placeholder="Racconta la tua esperienza..."
							class="bg-white/[0.06] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 outline-none focus:border-brand-violet/50 transition-colors resize-none"
						></textarea>

						<div class="flex items-center gap-2">
							<span class="text-white/50 text-sm">Voto:</span>
							@for (s of [1, 2, 3, 4, 5]; track s) {
								<span
									class="text-2xl cursor-pointer transition-all hover:scale-110"
									[class]="s <= form.stars ? 'text-amber-400' : 'text-white/20'"
									(click)="form.stars = s"
									>★</span
								>
							}
						</div>
					</div>

					<div class="flex gap-3 mt-6">
						<button
							class="flex-1 py-2.5 rounded-xl border border-white/10 text-white/60 text-sm hover:bg-white/[0.05] transition-all cursor-pointer bg-transparent"
							(click)="closeDialog()"
						>
							Annulla
						</button>
						<button
							class="flex-1 py-2.5 rounded-xl bg-gradient-to-br from-brand-purple to-brand-indigo text-white font-bold text-sm hover:-translate-y-px transition-all cursor-pointer border-none"
							(click)="submitReview()"
						>
							Pubblica
						</button>
					</div>
				</div>
			</div>
		}
	`
})
export class ReviewsComponent implements OnInit {
	private reviewsService = inject(ReviewsService);
	
	reviews = this.reviewsService.reviews;
	dialogOpen = signal(false);
	currentIndex = signal(0);
	containerWidth = signal(0);
	
	form: Review = { author: "", role: "", text: "", stars: 5 };

	visibleCards = computed(() => {
		const width = this.containerWidth();
		if (width < 640) return 1;
		if (width < 1024) return 2;
		return 3;
	});

	cardWidth = computed(() => {
		const gap = 24;
		const visible = this.visibleCards();
		return (this.containerWidth() - (gap * (visible - 1))) / visible;
	});

	translateX = computed(() => {
		const gap = 24;
		return -(this.currentIndex() * (this.cardWidth() + gap));
	});

	totalItems = computed(() => this.reviews().length + 1);

	ngOnInit() {
		this.reviewsService.loadReviews();
		this.updateWidth();
	}

	@HostListener("window:resize")
	updateWidth() {
		const container = document.getElementById("recensioni")?.querySelector(".max-w-6xl");
		if (container) {
			this.containerWidth.set(container.clientWidth);
		}
	}

	isCardVisible(index: number): boolean {
		return index >= this.currentIndex() && index < this.currentIndex() + this.visibleCards();
	}

	next() {
		if (this.currentIndex() < this.totalItems() - this.visibleCards()) {
			this.currentIndex.update(i => i + 1);
		}
	}

	prev() {
		if (this.currentIndex() > 0) {
			this.currentIndex.update(i => i - 1);
		}
	}

	openDialog() {
		this.dialogOpen.set(true);
	}

	closeDialog() {
		this.dialogOpen.set(false);
	}

	async submitReview() {
		console.log("ReviewsComponent: Tentativo di pubblicazione recensione...", this.form);
		if (!this.form.author.trim() || !this.form.text.trim()) {
			console.warn("ReviewsComponent: Validazione fallita. Nome e testo sono obbligatori.");
			return;
		}
		
		try {
			await this.reviewsService.addReview({ ...this.form });
			console.log("ReviewsComponent: Recensione pubblicata con successo");
			this.form = { author: "", role: "", text: "", stars: 5 };
			this.closeDialog();
		} catch (error) {
			console.error("ReviewsComponent: Errore durante la pubblicazione:", error);
			alert("Si è verificato un errore durante il salvataggio della recensione. Controlla la console del browser.");
		}
	}
}

