import { Component } from "@angular/core";

@Component({
	selector: "app-privacy-policy",
	standalone: true,
	template: `
		<div class="container mx-auto px-4 py-24 max-w-4xl">
			<h1 class="text-4xl font-bold mb-8">Informativa sulla Privacy</h1>
			<p class="opacity-70">Ultimo aggiornamento: 06/03/2026</p>

			<section class="mt-8">
				<h2 class="text-2xl font-semibold mb-4">1. Titolare del Trattamento</h2>
				<p class="mb-2">Il titolare del trattamento dei dati raccolti tramite questo sito web &egrave;:</p>
				<ul class="list-disc pl-6 mb-4 space-y-1">
					<li><strong>Nome/Ragione Sociale:</strong> Francesco Veneziano</li>
					<li><strong>Indirizzo:</strong> Traversa Aleardo Aleardi, 36, 00042 Anzio (RM)</li>
					<li><strong>Email di contatto:</strong> francesco.veneziano.1995&#64;gmail.com</li>
				</ul>
			</section>

			<section class="mt-8">
				<h2 class="text-2xl font-semibold mb-4">2. Quali dati raccogliamo</h2>
				<p class="mb-2">Raccogliamo i seguenti tipi di informazioni:</p>
				<ul class="list-disc pl-6 mb-4 space-y-1">
					<li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, orario di accesso.</li>
					<li>
						<strong>Dati forniti volontariamente dall'utente:</strong> se ci contatti tramite email o modulo di contatto, memorizzeremo il tuo indirizzo email e le informazioni incluse nel messaggio.
					</li>
				</ul>
			</section>

			<section class="mt-8">
				<h2 class="text-2xl font-semibold mb-4">3. Finalit&agrave; del Trattamento</h2>
				<p class="mb-2">I dati raccolti vengono utilizzati esclusivamente per le seguenti finalit&agrave;:</p>
				<ul class="list-disc pl-6 mb-4 space-y-1">
					<li>Rispondere alle richieste di informazioni degli utenti.</li>
					<li>Migliorare l'esperienza di navigazione sul nostro sito web elaborando statistiche (previa accettazione esplicita).</li>
				</ul>
			</section>

			<section class="mt-10 p-6 bg-base-200 rounded-lg">
				<h2 class="text-2xl font-semibold mb-4">4. I Diritti dell'Utente</h2>
				<p class="mb-2">In conformit&agrave; al GDPR, l'utente ha sempre il diritto di:</p>
				<ul class="list-disc pl-6 mb-4 space-y-1">
					<li>Accedere ai propri dati personali.</li>
					<li>Chiederne la rettifica o la cancellazione (diritto all'oblio).</li>
					<li>Revocare il consenso fornito in qualsiasi momento tramite il pannello di gestione cookie.</li>
				</ul>
				<p class="mt-4 font-semibold">
					Per esercitare questi diritti, scrivi a:
					<a
						href="mailto:tua@email.com"
						class="link link-primary"
						>[La tua email]</a
					>
				</p>
			</section>
		</div>
	`
})
export class PrivacyPolicyComponent {}
