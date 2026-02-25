import { Component, signal, computed } from "@angular/core";
import { CommonModule, NgClass } from "@angular/common";
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
	imports: [CommonModule, NgClass],
	template: `
		<section
			class="py-24 px-6 bg-dark-700"
			id="prenota"
		>
			<div class="max-w-5xl mx-auto">
				<p class="text-xs font-bold tracking-widest uppercase text-brand-violet text-center mb-4">Prezzi</p>
				<h2 class="text-4xl md:text-5xl font-extrabold text-white text-center leading-tight tracking-tight mb-3">Un investimento su te stesso.</h2>
				<p class="text-white/55 text-center text-lg mb-10">Scegli la durata più adatta. Nessun abbonamento, nessun vincolo.</p>

				<div class="flex items-center justify-center mb-12">
					<div class="bg-white/5 p-1.5 rounded-2xl flex items-center border border-white/10 backdrop-blur-sm relative cursor-pointer">
						<div
							class="absolute left-[6px] top-[6px] bottom-[6px] w-[160px] rounded-xl bg-white/15 transition-transform duration-300 ease-out z-0 border border-white/10"
							[ngClass]="isHighSchool() ? 'translate-x-full' : 'translate-x-0'"
						></div>

						<button
							(click)="isHighSchool.set(false)"
							class="relative z-10 w-[160px] py-2.5 text-sm font-semibold transition-colors duration-300 text-center rounded-xl"
							[ngClass]="!isHighSchool() ? 'text-white' : 'text-white/50 hover:text-white/80'"
						>
							Scuole Medie
						</button>

						<button
							(click)="isHighSchool.set(true)"
							class="relative z-10 w-[160px] py-2.5 text-sm font-semibold transition-colors duration-300 text-center rounded-xl"
							[ngClass]="isHighSchool() ? 'text-white' : 'text-white/50 hover:text-white/80'"
						>
							Scuole Superiori
						</button>
					</div>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div
						*ngFor="let plan of currentPlans()"
						class="relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1"
						[ngClass]="plan.featured ? 'bg-brand-purple/12 border-brand-purple/40 hover:shadow-2xl hover:shadow-brand-purple/20' : 'liquid-glass hover:border-brand-violet/25 hover:shadow-xl'"
					>
						<div
							*ngIf="plan.badge"
							class="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-br from-brand-purple to-brand-indigo text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap"
						>
							{{ plan.badge }}
						</div>

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
							[ngClass]="
								plan.featured
									? 'bg-gradient-to-br from-brand-purple to-brand-indigo text-white shadow-lg shadow-brand-purple/40 hover:shadow-brand-purple/55'
									: 'bg-white/[0.07] border border-white/12 text-white hover:bg-white/12'
							"
						>
							Prenota questa lezione
						</button>
					</div>
				</div>

				<div class="mt-10 space-y-3">
					<p class="text-center text-white/40 text-sm"><strong class="text-white/65">Prima lezione gratuita</strong> — prenotando una sessione da 1.5 ore o 2 ore. Vieni a conoscermi senza impegno.</p>
					<p class="text-center text-white/40 text-sm">
						Il pagamento avviene comodamente di persona in <strong class="text-white/65">contanti</strong> o tramite <strong class="text-white/65">PayPal</strong>.<br class="hidden sm:block" />
						Sono inoltre previste tariffe agevolate per <strong class="text-white/65">percorsi continuativi</strong> o <strong class="text-white/65">sessioni di gruppo</strong>.
					</p>
				</div>
			</div>
		</section>
	`
})
export class PricingComponent {
	isHighSchool = signal(true);

	toggleSchoolLevel() {
		this.isHighSchool.update(v => !v);
	}

	bookSession(plan: PricePlan) {
		const namespace = environment["calComNamespace"] || "undefined";
		const link = `${namespace}/${plan.calSlug}`;

		// Un modal Cal.com per una UX migliore, o un semplice link
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
