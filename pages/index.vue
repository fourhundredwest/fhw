<script setup lang="ts">
useHead({
	title: "Home",
});

const features = ref([
	{
		heading: "Collaborative",
		subheading:
			"We work beyond a list of requirements, exploring how to improve your current processes.",
	},
	{
		heading: "Feedback-driven",
		subheading:
			"Together, we'll design, build, and implement software that's tailored for your business's unique requirements.",
	},
	{
		heading: "Incrementally delivered",
		subheading:
			"We believe in delivering value early and often, allowing for continuous improvement and adaptation.",
	},
	{
		heading: "Incrementally delivered",
		subheading:
			"We believe in delivering value early and often, allowing for continuous improvement and adaptation.",
	},
	{
		heading: "Incrementally delivered",
		subheading:
			"We believe in delivering value early and often, allowing for continuous improvement and adaptation.",
	},
]);
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
							href="#contact"
							class="animate-enter flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-primary px-6 pb-px font-medium text-on-primary [--stagger:3]"
							>Let's talk&nbsp;&rarr;</a
						>
						<a
							href="#services"
							class="animate-enter flex size-12 items-center justify-center whitespace-nowrap rounded-full border-2 border-primary font-medium [--stagger:3.25]"
							>&darr;</a
						>
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
					class="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/3 opacity-30"
				/>
			</aside>
		</section>

		<app-section id="services" heading="Working Together" class="bg-surface-1">
			<div class="grid grid-cols-1 gap-gap-sm sm:grid-cols-2 md:grid-cols-3">
				<app-card
					v-for="feature in features"
					:key="feature.heading"
					:heading="feature.heading"
					:subheading="feature.subheading"
				></app-card>
				<div class="flex items-center justify-center p-6">
					<a
						href="#contact"
						class="flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-primary px-6 pb-px font-medium text-on-primary"
						>Let's talk&nbsp;&rarr;</a
					>
				</div>
			</div>
		</app-section>

		<app-split-section id="" class="bg-surface-0">
			<div>
				<div class="overflow-hidden rounded-3xl bg-surface-1 shadow-xl">
					<img
						src="https://images.unsplash.com/photo-1602536100338-c7762727ddb7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						class="aspect-video object-cover"
					/>
				</div>
			</div>
			<div>
				<h2 class="text-2xl font-bold tracking-tight">
					Computerised, systematised, and automated
				</h2>
				<br />
				<p class="leading-relaxed text-subtle">
					No more working with pencil and paper. Now, you'll use a tailored
					software application&mdash;organising your activities into an optimal
					workflow.
				</p>
				<br />
				<p class="leading-relaxed text-subtle">
					Wherever possible, we'll let the computer do the work for you by
					automating tasks.
				</p>
			</div>
		</app-split-section>

		<app-split-section id="" reverse class="bg-surface-1">
			<div>
				<h2 class="text-2xl font-bold tracking-tight">
					Replenishing drained resources
				</h2>
				<br />
				<p class="leading-relaxed text-subtle">
					A flawed business process leads to work that is complicated,
					disorganized, repetitive, or error-prone. This means higher costs,
					lower revenue, and diminished profitability. Intangibly, it can lead
					to frustration, stress, and burnout for you and your team.
				</p>
				<br />
				<p class="text-subtle">
					We'll collaborate to pinpoint and eradicate these inefficiencies,
					crafting a system that operates smoothly, performs optimally, and is a
					pleasure to utilise.
				</p>
			</div>
			<div>
				<div class="overflow-hidden rounded-3xl bg-surface-1 shadow-xl">
					<img
						src="https://images.unsplash.com/photo-1602536052359-ef94c21c5948?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						class="aspect-video object-cover"
					/>
				</div>
			</div>
		</app-split-section>

		<app-split-section id="" class="bg-surface-0">
			<div>
				<div class="overflow-hidden rounded-3xl bg-surface-1 shadow-xl">
					<img
						src="https://images.unsplash.com/photo-1601925059835-3c6655cdb1f3?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						class="aspect-video object-cover"
					/>
				</div>
			</div>
			<div>
				<h2 class="text-2xl font-bold tracking-tight">Heading</h2>
				<br />
				<p class="leading-relaxed text-subtle">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
					repudiandae nobis placeat ducimus repellat vero voluptate illum nam
					ullam atque doloribus non unde magni, quod blanditiis quam nesciunt
					inventore itaque?
				</p>
				<br />
				<p class="leading-relaxed text-subtle">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
					repudiandae nobis placeat ducimus repellat vero voluptate illum nam
					ullam atque doloribus non unde magni, quod blanditiis quam nesciunt
					inventore itaque?
				</p>
			</div>
		</app-split-section>

		<app-section id="contact" class="bg-primary text-on-primary">
			<h2 class="font-semibold">Get in touch</h2>
			<div class="h-3"></div>
			<div class="grid">
				<a href="tel:+12194912228" class="text-lg">+1 (219) 491-2228</a>
				<a href="mailto:hello@fourhundredwest.com" class="text-lg"
					>hello@fourhundredwest.com</a
				>
			</div>
		</app-section>
	</div>
</template>

<style scoped lang="postcss">
.chip {
	@apply inline-block rounded-md border bg-surface-1 px-3 py-1 text-sm font-medium;
}
</style>
