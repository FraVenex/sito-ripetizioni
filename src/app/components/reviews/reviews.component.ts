import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

interface Review {
	text: string;
	author: string;
	role: string;
	stars: number;
}

@Component({
	selector: "app-reviews",
	standalone: true,
	imports: [CommonModule, FormsModule],
	template: `
		<section
			class="py-16 md:py-24 px-5 md:px-8 bg-dark-800"
			id="recensioni"
		>
			<div class="max-w-6xl mx-auto">
				<p class="text-xs font-bold tracking-widest uppercase text-brand-violet text-center mb-4">Recensioni</p>
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center leading-tight tracking-tight mb-3">Parole loro, non mie.</h2>
				<p class="text-white/50 text-center text-sm md:text-base mb-10 md:mb-12 px-4">Quello che dicono gli studenti (e i genitori) dopo le lezioni.</p>

				<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
					@for (review of reviews(); track $index) {
						<div class="liquid-glass rounded-2xl p-6 md:p-7 hover:-translate-y-0.5 hover:border-brand-violet/20 transition-all duration-300">
							<div class="text-5xl leading-none text-brand-violet/25 font-serif mb-2">"</div>
							<p class="text-white/78 text-base leading-relaxed italic mb-6">{{ review.text }}</p>
							<div class="flex items-center gap-3">
								<div class="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-indigo flex items-center justify-center text-white font-extrabold text-base shrink-0">
									{{ review.author.charAt(0).toUpperCase() }}
								</div>
								<div>
									<div class="text-white font-bold text-sm">{{ review.author }}</div>
									<div class="text-white/45 text-xs">{{ review.role }}</div>
								</div>
								<div class="ml-auto flex gap-0.5">
									@for (s of starsArray(review.stars); track s) {
										<span class="text-amber-400 text-sm">★</span>
									}
								</div>
							</div>
						</div>
					}

					<div
						class="bg-white/[0.02] border-2 border-dashed border-white/15 rounded-2xl p-7 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-brand-violet/40 hover:bg-white/[0.04] transition-all duration-300 min-h-[180px]"
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
export class ReviewsComponent {
	reviews = signal<Review[]>([]);
	dialogOpen = signal(false);

	form: Review = { author: "", role: "", text: "", stars: 5 };

	openDialog() {
		this.dialogOpen.set(true);
	}

	closeDialog() {
		this.dialogOpen.set(false);
	}

	starsArray(n: number): number[] {
		return Array.from({ length: n }, (_, i) => i);
	}

	submitReview() {
		if (!this.form.author.trim() || !this.form.text.trim()) return;
		this.reviews.update(r => [...r, { ...this.form }]);
		this.form = { author: "", role: "", text: "", stars: 5 };
		this.closeDialog();
	}
}
