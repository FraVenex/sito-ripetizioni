import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
	selector: "app-about",
	standalone: true,
	imports: [NgOptimizedImage],
	template: `
		<section
			class="py-16 md:py-24 px-5 md:px-8 bg-dark-800"
			id="chi-sono"
		>
			<div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
				<div>
					<h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-violet leading-tight tracking-tight mb-6">Chi sono</h2>

					<p class="text-white/65 leading-relaxed text-sm md:text-base mb-4">
						Mi chiamo <strong class="text-white/90">Francesco Veneziano</strong>, classe '95, una laurea magistrale in Fisica e lavoro come Full Stack Software Developer.
					</p>
					<p class="text-white/65 leading-relaxed text-sm md:text-base mb-4">
						Aiuto ragazzi tramite le ripetizioni dal 2014 perché ricordo perfettamente com'è uscire da una lezione senza le idee chiare a causa di spiegazioni poco chiare, frettolose e spesso
						superficiali. Inoltre mi sono reso conto che non tutti coloro che danno ripetizioni riescono a trasmettere i concetti in modo semplice ed adatto ai ragazzi, per cui mi sono messo in gioco
						per offrire il miglior servizio possibile.
					</p>
					<p class="text-white/65 leading-relaxed text-sm md:text-base mb-8">
						In me non troverai un professore (anche perché non lo sono), ma una figura che farà di tutto per aiutarti a capire quanto queste materie in fondo siano semplici ed affascinanti.
					</p>

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
						<div class="flex items-start gap-3 liquid-glass rounded-xl p-3.5">
							<div class="w-9 h-9 rounded-lg bg-brand-purple/20 flex items-center justify-center text-brand-violet shrink-0">🎯</div>
							<div>
								<div class="text-white text-sm font-semibold">Metodo pratico</div>
								<div class="text-white/55 text-xs leading-snug mt-0.5">Esempi reali, non teoria astratta</div>
							</div>
						</div>
						<div class="flex items-start gap-3 liquid-glass rounded-xl p-3.5">
							<div class="w-9 h-9 rounded-lg bg-brand-purple/20 flex items-center justify-center text-brand-violet shrink-0">💬</div>
							<div>
								<div class="text-white text-sm font-semibold">Zero giudizi</div>
								<div class="text-white/55 text-xs leading-snug mt-0.5">Puoi chiedere tutto, anche 10 volte</div>
							</div>
						</div>
						<div class="flex items-start gap-3 liquid-glass rounded-xl p-3.5">
							<div class="w-9 h-9 rounded-lg bg-brand-purple/20 flex items-center justify-center text-brand-violet shrink-0">📱</div>
							<div>
								<div class="text-white text-sm font-semibold">Sempre disponibile</div>
								<div class="text-white/55 text-xs leading-snug mt-0.5">WhatsApp tra una lezione e l'altra</div>
							</div>
						</div>
						<div class="flex items-start gap-3 liquid-glass rounded-xl p-3.5">
							<div class="w-9 h-9 rounded-lg bg-brand-purple/20 flex items-center justify-center text-brand-violet shrink-0">🖊️</div>
							<div>
								<div class="text-white text-sm font-semibold">iPad</div>
								<div class="text-white/55 text-xs leading-snug mt-0.5">Spiegazioni visive e interattive + condivisione rapida</div>
							</div>
						</div>
					</div>
				</div>

				<div class="liquid-glass p-6 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden">
					<div class="absolute -top-24 -right-24 w-48 h-48 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none"></div>
					<div class="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-indigo/20 rounded-full blur-3xl pointer-events-none"></div>
					<img
						ngSrc="assets/images/ProfilePic_512.png"
						width="512"
						height="512"
						priority
						alt="Francesco Veneziano"
						class="w-44 h-44 rounded-full object-cover mb-4 md:mb-6 border-2 border-white/10 shadow-2xl shadow-brand-purple/20"
					/>
					<div class="text-xl font-extrabold text-white mb-1">Francesco Veneziano</div>

					<div class="flex flex-wrap gap-2 mb-6 md:mb-8">
						<span class="inline-flex items-center gap-1.5 bg-brand-purple/15 border border-brand-purple/30 text-brand-violet text-xs font-semibold px-3 py-1 rounded-full"
							>🎓 Laurea Magistrale in Fisica</span
						>
						<span class="inline-flex items-center gap-1.5 bg-brand-purple/15 border border-brand-purple/30 text-brand-violet text-xs font-semibold px-3 py-1 rounded-full"
							>💻 Full Stack Software Developer</span
						>
						<a
							href="https://www.linkedin.com/in/francesco-veneziano"
							target="_blank"
							class="inline-flex items-center gap-1.5 bg-blue-600/15 border border-blue-600/30 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full hover:bg-blue-600/25 transition-colors no-underline"
						>
							<span class="w-2 h-2 rounded-full bg-blue-500"></span>
							LinkedIn
						</a>
					</div>

					<div class="pt-5 border-t border-white/[0.08]">
						<div class="text-xs font-bold tracking-widest uppercase text-white/35 mb-3">Zone disponibili</div>
						<div class="flex flex-wrap gap-1.5">
							<span class="bg-white/[0.06] border border-white/10 text-white/65 text-xs px-3 py-1 rounded-full">Nettuno</span>
							<span class="bg-white/[0.06] border border-white/10 text-white/65 text-xs px-3 py-1 rounded-full">Anzio</span>
							<span class="bg-white/[0.06] border border-white/10 text-white/65 text-xs px-3 py-1 rounded-full">Online</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	`
})
export class AboutComponent {}
