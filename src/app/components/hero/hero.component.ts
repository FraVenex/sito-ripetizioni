import { Component } from "@angular/core";

@Component({
	selector: "app-hero",
	standalone: true,
	imports: [],
	template: `
		<section
			class="min-h-[92vh] flex items-center justify-center relative overflow-hidden px-4 py-8"
			style="background: linear-gradient(135deg, #0a1f14 0%, #1a3a2a 50%, #0f2a1e 100%)"
		>
			<div class="absolute inset-0 overflow-hidden pointer-events-none">
				<div
					class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
					style="background: #4a7c59"
				></div>
				<div
					class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
					style="background: #2d6a4f"
				></div>
			</div>

			<div class="relative z-10 text-center max-w-3xl mx-auto">
				<div class="inline-flex items-center gap-2 liquid-glass text-white/70 text-sm font-medium px-4 py-2 rounded-full mb-8">
					<span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
					Disponibile per nuovi studenti
				</div>

				<h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
					Non sei tu il problema.<br />
					<span class="gradient-text">Ti manca solo qualcuno<br />che sa spiegarti.</span>
				</h1>

				<p class="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mx-auto mb-10">
					Matematica e Fisica per medie e superiori. <strong class="text-white/90">Spiego come avrei voluto che qualcuno spiegasse a me</strong> — con pazienza, esempi concreti e zero giudizi.
				</p>

				<div class="flex flex-wrap gap-6 justify-center">
					<div class="text-center">
						<div class="text-2xl font-extrabold gradient-text">50+</div>
						<div class="text-xs text-white/45 mt-0.5">Studenti sbloccati</div>
					</div>
					<div class="w-px bg-white/10"></div>
					<div class="text-center">
						<div class="text-2xl font-extrabold gradient-text">5★</div>
						<div class="text-xs text-white/45 mt-0.5">Valutazione media</div>
					</div>
					<div class="w-px bg-white/10"></div>
					<div class="text-center">
						<div class="text-2xl font-extrabold gradient-text">100%</div>
						<div class="text-xs text-white/45 mt-0.5">Prima lezione gratis</div>
					</div>
				</div>
			</div>
		</section>
	`
})
export class HeroComponent {}
