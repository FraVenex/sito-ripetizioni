import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CookieConsentService } from "../../services/cookie-consent.service";

@Component({
	selector: "app-cookie-consent",
	standalone: true,
	imports: [CommonModule],
	template: `
		@if (cookieService.hasConsented() === null) {
			<div class="fixed bottom-0 left-0 w-full bg-base-300/90 backdrop-blur-md border-t border-primary/20 p-6 shadow-2xl z-[100] flex flex-col sm:flex-row justify-between items-center gap-6">
				<div class="text-base text-base-content leading-relaxed max-w-4xl">
					Utilizziamo i cookie per migliorare la navigazione e per scopi statistici. Puoi scegliere di accettare tutti i cookie o rifiutare quelli non essenziali. Leggi la nostra
					<a
						href="/privacy-policy"
						class="link link-primary font-semibold hover:text-primary-focus transition-colors"
						>Privacy Policy</a
					>
					e
					<a
						href="/cookie-policy"
						class="link link-primary font-semibold hover:text-primary-focus transition-colors"
						>Cookie Policy</a
					>.
				</div>
				<div class="flex gap-3 shrink-0">
					<button
						class="btn btn-outline btn-sm sm:btn-md min-w-[120px]"
						(click)="cookieService.rejectAll()"
					>
						Rifiuta Tutto
					</button>
					<button
						class="btn btn-primary btn-sm sm:btn-md min-w-[120px]"
						(click)="cookieService.acceptAll()"
					>
						Accetta Tutti
					</button>
				</div>
			</div>
		}
	`
})
export class CookieConsentComponent {
	protected readonly cookieService = inject(CookieConsentService);
}
