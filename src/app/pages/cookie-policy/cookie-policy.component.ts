import { Component } from "@angular/core";

@Component({
	selector: "app-cookie-policy",
	standalone: true,
	template: `
		<div class="container mx-auto px-4 py-24 max-w-4xl">
			<h1 class="text-4xl font-bold mb-8">Cookie Policy</h1>
			<p class="opacity-70">Ultimo aggiornamento: [Inserire Data]</p>

			<section class="mt-8">
				<h2 class="text-2xl font-semibold mb-4">1. Cosa sono i Cookie</h2>
				<p class="mb-2">
					I cookie sono piccoli file di testo che i siti visitati inviano al browser dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
				</p>
				<p>
					Nel nostro sito utilizziamo tecnologie simili come il <em>Local Storage</em> per memorizzare in modo permanente le tue preferenze sulla privacy ed evitare di riproporti il banner a ogni
					caricamento pagina.
				</p>
			</section>

			<section class="mt-8">
				<h2 class="text-2xl font-semibold mb-6">2. Quali Cookie utilizziamo</h2>
				<div class="overflow-x-auto bg-base-200 rounded-lg p-2">
					<table class="table w-full">
						<thead>
							<tr>
								<th class="text-left font-semibold">Nome / Strumento</th>
								<th class="text-left font-semibold">Tipologia</th>
								<th class="text-left font-semibold">Scopo</th>
								<th class="text-left font-semibold">Durata</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><strong>cookieConsent</strong> <br /><span class="text-xs opacity-70">(Local Storage)</span></td>
								<td><span class="badge badge-success badge-sm">Tecnico (Necessario)</span></td>
								<td>Memorizzare l'accettazione o il rifiuto dei cookie non essenziali da parte dell'utente.</td>
								<td>Permanente (fino a reset manuale cache browser)</td>
							</tr>
							<!-- Aggiungere altre righe se presenti script come Google Analytics, Meta Pixel, ecc. -->
							<tr>
								<td
									colspan="4"
									class="text-center py-6 opacity-60 text-sm italic"
								>
									Nessun cookie di profilazione o tracciamento viene installato preventivamente. (Inserire qui futuri script analytics/marketing)
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<section class="mt-8 p-6 bg-base-200 rounded-lg">
				<h2 class="text-2xl font-semibold mb-4">3. Gestione e Revoca del Consenso</h2>
				<p class="mb-4">
					Puoi modificare o revocare le tue scelte sui cookie in qualsiasi momento cliccando sul link apposito spesso presente nel footer del sito. Inoltre, puoi cancellare i cookie o impostare
					restrizioni all'installazione di nuovi tracker direttamente dalle preferenze del tuo browser Web utilizzato (Chrome, Safari, Firefox, Edge, ecc.).
				</p>
			</section>
		</div>
	`
})
export class CookiePolicyComponent {}
