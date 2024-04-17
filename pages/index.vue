<script setup lang="ts">
useHead({
	title: "Home",
});
</script>

<template>
	<div>
		<section class="relative p-gap">
			<app-container>
				<div
					class="flex min-h-[calc(100vh-var(--header-height)-(var(--gap)*2))] flex-col justify-center space-y-gap"
				>
					<h1
						class="animate-enter max-w-xl text-4xl font-light tracking-tight [--stagger:2] sm:max-w-2xl sm:text-7xl lg:max-w-4xl lg:text-8xl"
					>
						Building
						<span class="text-accent">custom applications</span>
						to tame your business operations.
					</h1>
					<div class="flex items-center gap-6">
						<a
							href="mailto:hello@fourhundredwest.com"
							class="animate-enter flex h-12 shrink-0 select-none items-center justify-center whitespace-nowrap rounded-full bg-primary px-6 pb-px font-medium text-on-primary [--stagger:3]"
						>
							Send us an email
						</a>
						<a
							href="tel:+12194912228"
							class="animate-enter flex h-12 shrink-0 select-none items-center justify-center whitespace-nowrap rounded-full border-2 border-primary px-6 pb-px font-medium text-primary [--stagger:3.25]"
						>
							Give us a call
						</a>
					</div>
				</div>
			</app-container>

			<aside
				class="absolute inset-0 -top-header-height -z-10 min-h-content-height overflow-hidden"
			>
				<svg
					class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-surface-3 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
					aria-hidden="true"
				>
					<defs>
						<pattern
							id="pattern8"
							width="300"
							height="300"
							x="50%"
							y="-1"
							patternUnits="userSpaceOnUse"
						>
							<path d="M150 300V.5M.5 .5H300" fill="none" />
						</pattern>
					</defs>
					<rect
						width="100%"
						height="100%"
						stroke-width="0"
						fill="url(#pattern8)"
					/>
				</svg>
				<img
					src="/6.png"
					aria-hidden="true"
					width="1500"
					class="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/3 select-none opacity-30"
				/>
			</aside>
		</section>
	</div>
</template>
