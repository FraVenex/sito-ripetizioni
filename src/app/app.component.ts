import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CookieConsentComponent } from "./components/cookie-consent/cookie-consent.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, CookieConsentComponent],
	template: `
		<app-navbar></app-navbar>

		<router-outlet></router-outlet>

		<app-footer></app-footer>

		<app-cookie-consent></app-cookie-consent>
	`
})
export class AppComponent {
	title = "aura-math";
}
