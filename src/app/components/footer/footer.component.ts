import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [RouterLink],
	template: `
		<footer class="bg-dark-900 border-t border-white/[0.06] pt-12 md:pt-16 pb-6 md:pb-8 px-5 md:px-8">
			<div class="max-w-6xl mx-auto">
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-10 md:mb-12">
					<div>
						<div class="text-xl font-extrabold tracking-tight gradient-text mb-3">Francesco Veneziano</div>
						<p class="text-white/45 text-sm md:text-base leading-relaxed max-w-xs">
							Ripetizioni di Matematica e Fisica per scuole medie e superiori. Rendo semplici ed affascinanti le materie che da molti sono ritenute ostiche.
						</p>
					</div>
					<div>
						<div class="text-xs font-bold tracking-widest uppercase text-white/35 mb-4">Navigazione</div>
						<ul class="flex flex-col gap-2.5 list-none p-0 m-0">
							<li>
								<a
									href="#chi-sono"
									class="text-white/55 hover:text-white text-sm no-underline transition-colors"
									>Chi sono</a
								>
							</li>
							<li>
								<a
									href="#prezzi"
									class="text-white/55 hover:text-white text-sm no-underline transition-colors"
									>Prezzi</a
								>
							</li>
							<li>
								<a
									href="#recensioni"
									class="text-white/55 hover:text-white text-sm no-underline transition-colors"
									>Recensioni</a
								>
							</li>
							<li>
								<a
									href="#prenota"
									class="text-white/55 hover:text-white text-sm no-underline transition-colors"
									>Prenota</a
								>
							</li>
						</ul>
					</div>
					<div>
						<div class="text-xs font-bold tracking-widest uppercase text-white/35 mb-4">Contatti</div>
						<ul class="flex flex-col gap-2.5 list-none p-0 m-0">
							<li>
								<a
									href="https://wa.me/393889898382"
									target="_blank"
									class="text-white/55 hover:text-white text-sm no-underline transition-colors"
									>WhatsApp</a
								>
							</li>
							<li>
								<a
									href="mailto:francesco.veneziano.1995@gmail.com"
									class="text-white/55 hover:text-white text-sm no-underline transition-colors"
									>Email</a
								>
							</li>
						</ul>
					</div>
				</div>

				<div class="border-t border-white/[0.06] pt-6 flex flex-wrap items-center justify-between gap-4">
					<span class="text-white/30 text-xs">© {{ year }} Francesco Veneziano · Aura Math</span>
					<div class="flex gap-4">
						<a
							routerLink="/privacy-policy"
							class="text-white/30 hover:text-white/55 text-xs no-underline transition-colors"
							>Privacy Policy</a
						>
						<a
							routerLink="/cookie-policy"
							class="text-white/30 hover:text-white/55 text-xs no-underline transition-colors"
							>Cookie Policy</a
						>
					</div>
				</div>
			</div>
		</footer>
	`
})
export class FooterComponent {
	year = new Date().getFullYear();
}
