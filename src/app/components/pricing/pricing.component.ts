import { Component, signal, computed } from "@angular/core";
import { environment } from "../../../environments/environment";

declare const Cal: any;

interface PricePlan {
	duration: string;
	price: number;
	label: string;
	desc: string;
	badge?: string;
	featured?: boolean;
	calSlug: string;
}

@Component({
	selector: "app-pricing",
	standalone: true,
	imports: [],
	template: `
		<section
			class="py-16 md:py-24 px-5 md:px-8 bg-dark-700"
			id="prenota"
		>
			<div class="max-w-5xl mx-auto">
				<p class="text-xs font-bold tracking-widest uppercase text-brand-violet text-center mb-4">Prezzi</p>
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center leading-tight tracking-tight mb-3">Investi sul tuo futuro.</h2>
				<p class="text-white/55 text-center px-4 text-base md:text-lg mb-2">Scegli la durata e la tariffa* più adatte a te, nessun vincolo.</p>
				<p class="text-white/45 text-center px-4 text-base md:text-sm mb-8 md:mb-10">*Le tariffe per percorsi continuativi e sessioni di gruppo sono agevolate (da concordare privatamente).</p>

				<div class="flex items-center justify-center mb-10 md:mb-12 px-4">
					<div class="bg-white/5 p-1.5 rounded-xl flex items-center border border-white/10 backdrop-blur-sm relative cursor-pointer w-full max-w-[340px]">
						<div
							class="absolute left-[6px] top-[6px] bottom-[6px] w-[calc(50%-6px)] rounded-lg bg-white/15 transition-transform duration-300 ease-out z-0 border border-white/10"
							[class.translate-x-full]="isHighSchool()"
							[class.translate-x-0]="!isHighSchool()"
						></div>

						<button
							(click)="isHighSchool.set(false)"
							[class]="middleSchoolTabClass()"
						>
							Scuole Medie
						</button>

						<button
							(click)="isHighSchool.set(true)"
							[class]="highSchoolTabClass()"
						>
							Scuole Superiori
						</button>
					</div>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
					@for (plan of currentPlans(); track plan.duration) {
						<div
							class="relative rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:-translate-y-1"
							[class]="plan.featured ? 'bg-brand-purple/12 border-brand-purple/40 hover:shadow-2xl hover:shadow-brand-purple/20' : 'liquid-glass hover:border-brand-violet/25 hover:shadow-xl'"
						>
							@if (plan.badge) {
								<div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-br from-brand-purple to-brand-indigo text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
									{{ plan.badge }}
								</div>
							}

							<div class="text-xs font-bold tracking-widest uppercase text-white/60 mb-5">{{ plan.label }}</div>
							<div class="flex items-baseline gap-1 mb-1">
								<span class="text-xl font-bold text-white/65">€</span>
								<span class="text-5xl font-extrabold text-white leading-none">{{ plan.price }}</span>
							</div>
							<div class="text-sm text-white/40 mb-5">/ {{ plan.duration }}</div>
							<p class="text-sm text-white/60 leading-relaxed mb-8">{{ plan.desc }}</p>

							<button
								(click)="bookSession(plan)"
								class="w-full block text-center font-bold text-sm py-2.5 rounded-xl no-underline transition-all cursor-pointer"
								[class]="
									plan.featured
										? 'bg-gradient-to-br from-brand-purple to-brand-indigo text-white shadow-lg shadow-brand-purple/40 hover:shadow-brand-purple/55'
										: 'bg-white/[0.07] border border-white/12 text-white hover:bg-white/12'
								"
							>
								Prenota questa lezione
							</button>
						</div>
					}
				</div>

				<div class="mt-10 md:mt-12 space-y-3 px-4">
					<p class="text-center text-white/40 text-sm md:text-base">
						<strong class="text-white/65">Prima ora di lezione gratuita</strong> — prenotando una sessione da 1.5 ore o 2 ore. Vieni a conoscermi senza impegno.
					</p>
					<p class="text-center text-white/40 text-sm md:text-base">
						Il pagamento avviene comodamente di persona in <strong class="text-white/65">contanti</strong> o, se preferite, tramite <strong class="text-white/65">PayPal</strong> o
						<strong class="text-white/65">Revolut</strong>.<br class="hidden sm:block" />
					</p>
				</div>
			</div>
		</section>
	`
})
export class PricingComponent {
	isHighSchool = signal(true);

	baseTabClass = "relative z-10 flex-1 py-2.5 text-xs sm:text-sm font-semibold transition-colors duration-300 text-center rounded-lg bg-transparent border-none outline-none cursor-pointer";

	middleSchoolTabClass = computed(() => {
		const active = !this.isHighSchool();
		return `${this.baseTabClass} ${active ? "text-white" : "text-white/50 hover:text-white/80"}`;
	});

	highSchoolTabClass = computed(() => {
		const active = this.isHighSchool();
		return `${this.baseTabClass} ${active ? "text-white" : "text-white/50 hover:text-white/80"}`;
	});

	toggleSchoolLevel() {
		this.isHighSchool.update(v => !v);
	}

	bookSession(plan: PricePlan) {
		const namespace = environment["calComNamespace"] || "undefined";
		const link = `${namespace}/${plan.calSlug}`;

		Cal("modal", {
			calLink: link,
			config: {
				layout: "month_view",
				theme: "dark"
			}
		});
	}

	highSchoolPlans: PricePlan[] = [
		{
			duration: "1 ora",
			price: 18,
			label: "Essenziale",
			desc: "Ideale per chiarire un dubbio specifico o prepararsi a un'interrogazione.",
			calSlug: "ripetizioni?duration=60"
		},
		{
			duration: "1.5 ore",
			price: 25,
			label: "Approfondimento",
			desc: "Il tempo giusto per spiegare un argomento completo con esercizi guidati.",
			calSlug: "ripetizioni?duration=90"
		},
		{
			duration: "2 ore",
			price: 30,
			label: "Completo",
			desc: "La scelta più efficace: teoria, esercizi e domande. Il tempo per capire davvero.",
			badge: "Più scelto",
			featured: true,
			calSlug: "ripetizioni?duration=120"
		}
	];

	middleSchoolPlans: PricePlan[] = [
		{
			duration: "1 ora",
			price: 14,
			label: "Essenziale",
			desc: "Perfetto per ripassare un argomento o prepararsi a una verifica.",
			calSlug: "ripetizioni?duration=60"
		},
		{
			duration: "1.5 ore",
			price: 20,
			label: "Approfondimento",
			desc: "Il tempo giusto per spiegare un argomento completo con esercizi guidati.",
			calSlug: "ripetizioni?duration=90"
		},
		{
			duration: "2 ore",
			price: 25,
			label: "Completo",
			desc: "Spiegazione completa con esercizi: il modo migliore per consolidare le basi.",
			badge: "Più scelto",
			featured: true,
			calSlug: "ripetizioni?duration=120"
		}
	];

	currentPlans = computed(() => (this.isHighSchool() ? this.highSchoolPlans : this.middleSchoolPlans));
}
