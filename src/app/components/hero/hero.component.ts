import { Component } from "@angular/core";

@Component({
	selector: "app-hero",
	standalone: true,
	imports: [],
	template: `
		<section
			class="min-h-[92vh] flex items-center justify-center relative overflow-hidden px-5 md:px-6 py-12 md:py-20"
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

			<div class="absolute inset-0 pointer-events-none hidden lg:block">
				@for (card of frustrationCards; track card.text) {
					<div
						[class]="
							'absolute liquid-glass p-4 rounded-2xl max-w-[240px] border border-white/10 shadow-2xl animate-float opacity-40 hover:opacity-100 transition-opacity duration-500 pointer-events-auto cursor-default ' +
							card.position
						"
						[style.animation-delay]="card.delay"
					>
						<p class="text-white/80 text-sm italic leading-relaxed">"{{ card.text }}"</p>
						<div class="mt-2 flex items-center gap-2">
							<div class="w-1.5 h-1.5 rounded-full bg-brand-violet"></div>
							<span class="text-[10px] uppercase tracking-wider text-white/40 font-bold">{{ card.author }}</span>
						</div>
					</div>
				}
			</div>

			<div class="relative z-10 text-center max-w-4xl mx-auto">
				<div class="inline-flex items-center gap-2 liquid-glass text-white/70 text-sm font-medium px-4 py-2 rounded-full mb-8">
					<span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
					Disponibile per nuovi studenti
				</div>

				<h1 class="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
					La scienza non è difficile.<br />
					<span class="gradient-text">È solo spiegata male.</span>
				</h1>

				<div class="max-w-3xl mx-auto">
					<p class="text-lg md:text-2xl text-white font-medium mb-6 leading-relaxed">Capisco la frustrazione perché ci sono passato anche io.</p>

					<p class="text-base md:text-lg text-white/70 leading-relaxed mb-10">
						Ho vissuto il blocco davanti ai compiti, il senso di essere "negati", la demotivazione. Poi, grazie a chi ha saputo <strong class="text-white/90">sbloccarmi</strong>, ho scoperto che
						Matematica e Fisica sono <strong class="text-white/90">semplici ed affascinanti</strong>. Oggi metto quell'empatia al servizio di ragazzi e genitori, trasformando la paura in comprensione
						e i brutti voti in una carriera.
					</p>
				</div>

				<div class="flex flex-wrap gap-8 justify-center opacity-70">
					<div class="text-center">
						<div class="text-xl font-bold text-white tracking-tight">STUDENTE</div>
						<div class="text-xs text-brand-violet font-black uppercase">Sbloccato</div>
					</div>
					<div class="text-center">
						<div class="text-xl font-bold text-white tracking-tight">GENITORE</div>
						<div class="text-xs text-brand-violet font-black uppercase">Rassicurato</div>
					</div>
					<div class="text-center">
						<div class="text-xl font-bold text-white tracking-tight">FUTURO</div>
						<div class="text-xs text-brand-violet font-black uppercase">Costruito</div>
					</div>
				</div>
			</div>

			<div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
				<svg
					class="w-6 h-6 text-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</div>
		</section>
	`,
	styles: [
		`
			@keyframes float {
				0%,
				100% {
					transform: translateY(0px) rotate(0deg);
				}
				50% {
					transform: translateY(-20px) rotate(1deg);
				}
			}
			.animate-float {
				animation: float 6s ease-in-out infinite;
			}
		`
	]
})
export class HeroComponent {
	frustrationCards = [
		{
			text: "Mio figlio ha perso la motivazione, non so più come aiutarlo.",
			author: "Un Genitore",
			position: "top-[15%] left-[5%]",
			delay: "0s"
		},
		{
			text: "Studio ore, ma davanti al compito in classe mi blocco sempre.",
			author: "Uno Studente",
			position: "bottom-[20%] left-[8%]",
			delay: "1.5s"
		},
		{
			text: "Matematica è un muro, non sarò mai portato.",
			author: "Uno Studente",
			position: "top-[20%] right-[6%]",
			delay: "0.8s"
		},
		{
			text: "Abbiamo provato tanti tutor, ma nessuno riesce a coinvolgerlo.",
			author: "Un Genitore",
			position: "bottom-[25%] right-[9%]",
			delay: "2.2s"
		}
	];
}
