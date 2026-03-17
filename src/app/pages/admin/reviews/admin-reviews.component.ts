import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReviewsService } from "../../../services/reviews.service";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-admin-reviews",
	standalone: true,
	imports: [CommonModule, RouterLink],
	template: `
		<div class="min-h-screen bg-[#0f172a] text-white p-8">
			<div class="max-w-6xl mx-auto">
				<div class="flex justify-between items-center mb-8">
					<div class="flex items-center gap-4">
						<a routerLink="/" class="p-2 hover:bg-white/10 rounded-full transition-colors text-blue-400 flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
						</a>
						<h1 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
							Gestione Recensioni (Admin)
						</h1>
					</div>
					<div class="text-white/60 text-sm font-medium px-4 py-2 bg-white/5 rounded-full border border-white/10">
						Database Locale: <span class="text-blue-400">{{ reviews().length }}</span> recensioni
					</div>
				</div>

				<div class="bg-slate-800/40 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl overflow-x-auto">
					<table class="w-full text-left border-collapse">
						<thead>
							<tr class="border-b border-white/10 bg-white/5">
								<th class="p-5 font-semibold text-blue-400 text-sm uppercase tracking-wider">Autore</th>
								<th class="p-5 font-semibold text-blue-400 text-sm uppercase tracking-wider">Ruolo</th>
								<th class="p-5 font-semibold text-blue-400 text-sm uppercase tracking-wider">Testo</th>
								<th class="p-5 font-semibold text-blue-400 text-sm uppercase tracking-wider text-center">Stelle</th>
								<th class="p-5 font-semibold text-red-400 text-sm uppercase tracking-wider text-center">Azioni</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-white/5">
							@for (review of reviews(); track review.id) {
								<tr class="hover:bg-white/[0.03] transition-colors group">
									<td class="p-5">
										<div class="font-bold text-white">{{ review.author }}</div>
										<div class="text-[10px] text-white/30 uppercase tracking-tighter mt-1">ID: #{{ review.id }}</div>
									</td>
									<td class="p-5 text-white/60 text-sm font-medium">{{ review.role }}</td>
									<td class="p-5">
										<p class="line-clamp-2 text-sm text-white/70 max-w-md" [title]="review.text">
											{{ review.text }}
										</p>
									</td>
									<td class="p-5 text-center">
										<div class="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/10 text-amber-400 rounded-full text-xs font-bold border border-amber-400/20">
											{{ review.stars }}
											<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 1.7L15 8.3L22.2 9.4L17 14.5L18.2 21.7L12 18.3L5.8 21.7L7 14.5L1.8 9.4L9 8.3L12 1.7Z"/></svg>
										</div>
									</td>
									<td class="p-5 text-center">
										<button 
											(click)="deleteReview(review.id!)"
											class="p-2.5 text-red-500 hover:bg-red-500/20 rounded-xl transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center mx-auto border border-transparent hover:border-red-500/30"
											title="Elimina recensione"
										>
											<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
										</button>
									</td>
								</tr>
							} @empty {
								<tr>
									<td colspan="5" class="p-20 text-center">
										<div class="flex flex-col items-center gap-4 text-white/30">
											<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="opacity-20"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 12h10"/><path d="M12 7v10"/></svg>
											<p class="italic text-lg">Nessuna recensione trovata nel database locale.</p>
										</div>
									</td>
								</tr>
							}
						</tbody>
					</table>
				</div>
				
				<div class="mt-8 text-white/30 text-xs text-center border-t border-white/5 pt-6">
					&copy; 2026 Admin Panel - Sistema di gestione locale SQLite
				</div>
			</div>
		</div>
	`
})
export class AdminReviewsComponent implements OnInit {
	private reviewsService = inject(ReviewsService);
	public reviews = this.reviewsService.reviews;

	ngOnInit() {
		this.reviewsService.loadReviews();
	}

	async deleteReview(id: number) {
		if (confirm("Sei sicuro di voler eliminare questa recensione? L'azione è irreversibile.")) {
			await this.reviewsService.deleteReview(id);
		}
	}
}
