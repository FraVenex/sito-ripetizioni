import { Injectable, inject, signal } from "@angular/core";
import { DatabaseService } from "./database.service";

export interface Review {
	id?: number;
	text: string;
	author: string;
	role: string;
	stars: number;
	created_at?: string;
}

@Injectable({
	providedIn: "root"
})
export class ReviewsService {
	private dbService = inject(DatabaseService);
	private _reviews = signal<Review[]>([]);
	public reviews = this._reviews.asReadonly();

	async loadReviews() {
		const query = "SELECT id, text, author, role, stars, created_at FROM reviews ORDER BY id DESC";
		const results = await this.dbService.executeQuery(query);
		this._reviews.set(results);
	}

	async addReview(review: Review) {
		const query = `
			INSERT INTO reviews (text, author, role, stars)
			VALUES (?, ?, ?, ?)
		`;
		await this.dbService.executeQuery(query, [
			review.text,
			review.author,
			review.role,
			review.stars
		]);
		await this.loadReviews();
	}

	async deleteReview(id: number) {
		const query = "DELETE FROM reviews WHERE id = ?";
		await this.dbService.executeQuery(query, [id]);
		await this.loadReviews();
	}
}
