import { Component } from "@angular/core";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [],
	template: `
		<footer class="bg-dark-900 border-t border-white/[0.06] pt-16 pb-8 px-6">
			<div class="max-w-6xl mx-auto">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
					<div>
						<div class="text-xl font-extrabold tracking-tight gradient-text mb-3">Francesco Veneziano</div>
						<p class="text-white/45 text-sm leading-relaxed max-w-xs">
							Ripetizioni di Matematica e Fisica per scuole medie e superiori. Spiego le cose nel modo in cui avrei voluto che qualcuno le spiegasse a me.
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
									href="mailto:info@francescovenezia.no"
									class="text-white/55 hover:text-white text-sm no-underline transition-colors"
									>Email</a
								>
							</li>
						</ul>
					</div>
				</div>

				<div class="border-t border-white/[0.06] pt-6 flex flex-wrap items-center justify-between gap-4">
					<span class="text-white/30 text-xs">© {{ year }} Francesco Veneziano · P.IVA 00000000000</span>
					<a
						href="https://wa.me/393889898382"
						target="_blank"
						class="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-xs font-semibold no-underline transition-colors"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
							/>
						</svg>
						Scrivimi su WhatsApp
					</a>
				</div>
			</div>
		</footer>
	`
})
export class FooterComponent {
	year = new Date().getFullYear();
}
