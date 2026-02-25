import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-logo",
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="flex items-center gap-2 select-none group">
			<div
				class="relative flex items-center justify-center transition-all duration-500 group-hover:scale-110"
				[style.width]="size + 'px'"
				[style.height]="size + 'px'"
			>
				<!-- Glassy background container -->
				<div class="absolute inset-0 bg-gradient-to-tr from-brand-purple to-brand-indigo rounded-xl opacity-20 blur-md group-hover:opacity-40 transition-opacity"></div>

				<!-- Logo Icon (Infinity/Wave mathematical concept) -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 100"
					fill="none"
					class="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]"
				>
					<defs>
						<linearGradient
							id="logoGradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%"
						>
							<stop
								offset="0%"
								style="stop-color:#a78bfa;stop-opacity:1"
							/>
							<stop
								offset="100%"
								style="stop-color:#818cf8;stop-opacity:1"
							/>
						</linearGradient>
					</defs>

					<!-- Mathematical Infinity-like shape constructed from sine waves -->
					<path
						d="M20,50 C20,20 50,20 50,50 C50,80 80,80 80,50"
						stroke="url(#logoGradient)"
						stroke-width="12"
						stroke-linecap="round"
						fill="none"
						class="opacity-80"
					/>
					<circle
						cx="20"
						cy="50"
						r="6"
						fill="#fff"
					/>
					<circle
						cx="80"
						cy="50"
						r="6"
						fill="#fff"
					/>
				</svg>
			</div>

			<div
				class="flex flex-col justify-center"
				[class.hidden]="hideText"
			>
				<span
					class="text-white font-extrabold tracking-tight leading-none"
					[style.fontSize]="size * 0.5 + 'px'"
				>
					Aura<span class="text-brand-violet">Math</span>
				</span>
			</div>
		</div>
	`
})
export class LogoComponent {
	@Input() size: number = 40;
	@Input() hideText: boolean = false;
}
