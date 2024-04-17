<script setup lang="ts">
useHead({
	title: "Home",
});
</script>

<template>
	<section
		class="flex min-h-content-height flex-col justify-center space-y-gap"
	>
		<h1
			class="animate-enter max-w-xl text-4xl tracking-tight [--stagger:2] sm:max-w-2xl sm:text-7xl lg:max-w-4xl lg:text-8xl"
		>
			Building
			<span class="underline decoration-accent underline-offset-8"
				>custom applications</span
			>
			to tame your business operations.
		</h1>
		<div class="flex items-center gap-3">
			<a
				href="#contact"
				class="animate-enter flex h-12 items-center justify-center whitespace-nowrap rounded-full border bg-primary px-6 pb-px font-medium text-on-primary [--stagger:3]"
				>Let's talk&nbsp&rarr;</a
			>
		</div>
	</section>

	<div class="h-gap"></div>

	<section id="contact">
		<h2 class="font-semibold">Contact</h2>
		<div class="h-3"></div>
		<div class="grid">
			<a href="tel:8444447638" class="text-lg">+1 (844) 444-7638</a>
			<a href="mailto:hello@fourhundredwest.com" class="text-lg"
				>hello@fourhundredwest.com</a
			>
		</div>
	</section>

	<aside class="absolute inset-0 -z-10 overflow-hidden">
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
					<path d="M150 300V.5M.5 .5H300" fill="none"></path>
				</pattern>
			</defs>
			<rect
				width="100%"
				height="100%"
				stroke-width="0"
				fill="url(#pattern8)"
			></rect>
		</svg>
		<svg
			viewBox="0 0 880 836"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			class="absolute right-0 top-0 h-[836px] w-[880px] -translate-y-1/4 translate-x-1/3 sm:translate-y-0"
		>
			<g filter="url(#filter2_f_1_7)">
				<path
					d="M409.986 440.643C469.472 378.695 566.98 375.573 623.426 440.643C658.795 481.415 671.832 524.024 658.423 577.59C652.87 599.776 636.594 617.317 616.954 630.929C557.402 672.201 474.252 704.805 409.986 671.342V671.342C333.754 631.648 349.384 503.753 409.986 440.643Z"
					fill="#5E35FF"
					fill-opacity="0.2"
				></path>
			</g>
			<g filter="url(#filter2_f_1_7)">
				<path
					d="M428.053 247.186C494.627 191.829 587.609 227.805 639.06 299.033C679.79 355.419 695.776 419.011 660.654 479.493C613.006 561.543 490.316 549.664 428.053 479.493C369.441 413.436 360.751 303.15 428.053 247.186Z"
					fill="#FF35C6"
					fill-opacity="0.6"
				></path>
			</g>
			<g filter="url(#filter2_f_1_7)">
				<path
					d="M229.147 297.434C290.419 201.649 394.477 149.201 492.811 199.367C618.14 263.304 604.575 489.371 492.811 577.167C410.059 642.173 301.956 654.413 229.147 577.167C156.338 499.921 171.325 387.825 229.147 297.434Z"
					fill="#35DBFF"
					fill-opacity="0.4"
				></path>
			</g>
			<defs>
				<filter
					id="filter2_f_1_7"
					x="0"
					y="0"
					width="761.794"
					height="810.61"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					></feBlend>
					<feGaussianBlur
						stdDeviation="90"
						result="effect1_foregroundBlur_1_7"
					></feGaussianBlur>
				</filter>
			</defs>
		</svg>
	</aside>
</template>
