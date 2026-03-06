import { Component } from "@angular/core";
import { HeroComponent } from "../../components/hero/hero.component";
import { PricingComponent } from "../../components/pricing/pricing.component";
import { ReviewsComponent } from "../../components/reviews/reviews.component";
import { AboutComponent } from "../../components/about/about.component";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [HeroComponent, PricingComponent, ReviewsComponent, AboutComponent],
	template: `
		<main class="min-h-screen bg-base-100">
			<app-hero id="hero"></app-hero>
			<app-pricing id="prezzi"></app-pricing>
			<app-reviews id="recensioni"></app-reviews>
			<app-about id="chi-sono"></app-about>
		</main>
	`
})
export class HomeComponent {}
