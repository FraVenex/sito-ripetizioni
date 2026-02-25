import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { AboutComponent } from "./components/about/about.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PricingComponent } from "./components/pricing/pricing.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, NavbarComponent, HeroComponent, PricingComponent, ReviewsComponent, AboutComponent, FooterComponent],
	template: `
		<app-navbar></app-navbar>

		<main class="min-h-screen bg-base-100">
			<app-hero id="hero"></app-hero>
			<app-pricing id="prezzi"></app-pricing>
			<app-reviews id="recensioni"></app-reviews>
			<app-about id="chi-sono"></app-about>
		</main>

		<app-footer></app-footer>
	`
})
export class AppComponent {
	title = "aura-math";
}
