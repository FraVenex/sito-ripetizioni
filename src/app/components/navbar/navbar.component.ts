import { Component, signal, HostListener } from "@angular/core";
import { LogoComponent } from "../ui/logo.component";

@Component({
	selector: "app-navbar",
	standalone: true,
	imports: [LogoComponent],
	template: `
		<nav
			class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
			[style]="scrolled() ? navScrolledStyle : navTopStyle"
		>
			<div
				class="transition-all duration-500 flex items-center justify-between"
				[style]="scrolled() ? innerScrolledStyle : innerTopStyle"
			>
				<a
					href="#"
					class="flex items-center shrink-0 no-underline"
				>
					<app-logo [size]="scrolled() ? 32 : 40"></app-logo>
				</a>

				@if (!scrolled()) {
					<ul class="hidden md:flex items-center gap-1 list-none m-0 p-0">
						<li>
							<a
								href="#chi-sono"
								class="text-white/65 hover:text-white hover:bg-white/[0.07] text-sm font-medium px-3.5 py-1.5 rounded-lg transition-all no-underline"
								>Chi sono</a
							>
						</li>
						<li>
							<a
								href="#prezzi"
								class="text-white/65 hover:text-white hover:bg-white/[0.07] text-sm font-medium px-3.5 py-1.5 rounded-lg transition-all no-underline"
								>Prezzi</a
							>
						</li>
						<li>
							<a
								href="#recensioni"
								class="text-white/65 hover:text-white hover:bg-white/[0.07] text-sm font-medium px-3.5 py-1.5 rounded-lg transition-all no-underline"
								>Recensioni</a
							>
						</li>
						<li>
							<a
								href="#prenota"
								class="text-white/65 hover:text-white hover:bg-white/[0.07] text-sm font-medium px-3.5 py-1.5 rounded-lg transition-all no-underline"
								>Prenota</a
							>
						</li>
					</ul>
				}

				<div
					class="flex items-center"
					[style.gap]="scrolled() ? '8px' : '8px'"
				>
					<a
						href="#prenota"
						class="inline-flex items-center justify-center transition-all no-underline"
						[class]="
							scrolled()
								? 'w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white'
								: 'hidden md:inline-flex gap-1.5 bg-gradient-to-br from-brand-purple to-brand-indigo text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg shadow-brand-purple/35 hover:-translate-y-px hover:shadow-brand-purple/50'
						"
					>
						@if (scrolled()) {
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
						} @else {
							📅 Prenota
						}
					</a>

					<a
						href="https://wa.me/393889898382"
						target="_blank"
						class="inline-flex items-center justify-center transition-all no-underline"
						[class]="
							scrolled()
								? 'w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white'
								: 'hidden md:inline-flex gap-1.5 bg-white/[0.07] border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-white/[0.13] hover:-translate-y-px'
						"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							[attr.width]="scrolled() ? '16' : '15'"
							[attr.height]="scrolled() ? '16' : '15'"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
							/>
						</svg>
						@if (!scrolled()) {
							<span class="hidden md:inline">WhatsApp</span>
						}
					</a>

					<button
						class="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-none cursor-pointer"
						(click)="toggleMenu()"
					>
						<span class="block w-5 h-0.5 bg-white/80 rounded"></span>
						<span class="block w-5 h-0.5 bg-white/80 rounded"></span>
						<span class="block w-5 h-0.5 bg-white/80 rounded"></span>
					</button>
				</div>
			</div>
		</nav>

		<div
			class="fixed z-40 flex-col gap-2 px-6 py-4 bg-dark-800/97 backdrop-blur-xl border-b border-white/[0.07] transition-all duration-300"
			[style.top]="'64px'"
			[style.left]="'0'"
			[style.right]="'0'"
			[class.flex]="menuOpen()"
			[class.hidden]="!menuOpen()"
		>
			<a
				href="#chi-sono"
				class="text-white/75 text-base font-medium py-2.5 border-b border-white/[0.06] no-underline"
				(click)="toggleMenu()"
				>Chi sono</a
			>
			<a
				href="#prezzi"
				class="text-white/75 text-base font-medium py-2.5 border-b border-white/[0.06] no-underline"
				(click)="toggleMenu()"
				>Prezzi</a
			>
			<a
				href="#recensioni"
				class="text-white/75 text-base font-medium py-2.5 border-b border-white/[0.06] no-underline"
				(click)="toggleMenu()"
				>Recensioni</a
			>
			<a
				href="#prenota"
				class="text-white/75 text-base font-medium py-2.5 border-b border-white/[0.06] no-underline"
				(click)="toggleMenu()"
				>Prenota</a
			>
			<div class="flex gap-3 mt-2">
				<a
					href="#prezzi"
					class="flex-1 text-center bg-gradient-to-br from-brand-purple to-brand-indigo text-white font-bold py-3 rounded-xl no-underline text-sm"
					(click)="toggleMenu()"
					>📅 Prenota</a
				>
				<a
					href="https://wa.me/393889898382"
					target="_blank"
					class="flex-1 text-center bg-white/[0.07] border border-white/20 text-white font-semibold py-3 rounded-xl no-underline text-sm flex items-center justify-center gap-1.5"
					(click)="toggleMenu()"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
						/>
					</svg>
					WhatsApp
				</a>
			</div>
		</div>

		@if (scrolled()) {
			<div class="h-[60px]"></div>
		} @else {
			<div class="h-16"></div>
		}
	`
})
export class NavbarComponent {
	menuOpen = signal(false);
	scrolled = signal(false);

	navTopStyle = `
		height: 64px;
		padding: 0 16px;
		background: rgba(13,13,26,0.85);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-bottom: 1px solid rgba(255,255,255,0.07);
	`;

	navScrolledStyle = `
		top: 12px;
		left: 50%;
		transform: translateX(-50%);
		width: calc(100% - 32px);
		max-width: 1000px;
		height: auto;
		padding: 6px 16px;
		border-radius: 9999px;
		background: rgba(255,255,255,0.08);
		backdrop-filter: blur(40px) saturate(180%);
		-webkit-backdrop-filter: blur(40px) saturate(180%);
		border: 1px solid rgba(255,255,255,0.18);
		box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
	`;

	innerTopStyle = `
		width: 100%;
		height: 100%;
	`;

	innerScrolledStyle = `
		gap: 12px;
		align-items: center;
	`;

	@HostListener("window:scroll")
	onScroll() {
		this.scrolled.set(window.scrollY > 60);
	}

	toggleMenu() {
		this.menuOpen.update(v => !v);
	}
}
