import { Injectable, signal } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class CookieConsentService {
	readonly hasConsented = signal<boolean | null>(null);

	constructor() {
		const savedConsent = localStorage.getItem("cookieConsent");
		if (savedConsent !== null) {
			this.hasConsented.set(savedConsent === "true");
		}
	}

	acceptAll(): void {
		localStorage.setItem("cookieConsent", "true");
		this.hasConsented.set(true);
		this.enableMarketingAndAnalytics();
	}

	rejectAll(): void {
		localStorage.setItem("cookieConsent", "false");
		this.hasConsented.set(false);
	}

	private enableMarketingAndAnalytics(): void {}
}
