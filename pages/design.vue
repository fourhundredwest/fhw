<script setup lang="ts">
const activities = ref([
	"Accept, process, and track orders or requests from customers",
	"Track prospective and existing clients, deals, or projects",
	"Manage the logistics of crews, equipment, and materials",
	"Collect information from customers, vendors, or employees",
	"Analyze data and report insights to stakeholders",
	"Migrate information from one system to another",
]);

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

const steps = ref([
	{
		heading: "Meet",
		description:
			"Reach out to us to schedule a meeting, face-to-face or over video call, to discuss your business situation, needs, and whether we're a good fit for each other.",
	},
	{
		heading: "Present",
		description:
			"We'll prepare and present a proposal that outlines the project scope, timeline, and cost. You'll be able to suggest revisions before we commit.",
	},
	{
		heading: "Implement",
		description:
			"After signing the agreement, we'll start working: designing, building, and deploying your software. Each step will be clearly communicated and feedback will be encouraged.",
	},
]);
</script>

<template>
	<div>
		<section id="activities" class="bg-surface-0 px-gap py-gap-lg">
			<app-container class="grid grid-cols-1 gap-gap-sm md:grid-cols-3">
				<div
					class="col-span-1 flex w-full flex-col divide-y overflow-hidden rounded-xl border shadow-inner"
				>
					<div
						v-for="(activity, index) in activities"
						:key="activity"
						class="flex shrink-0 px-5 py-2.5 text-sm first:-mt-1.5 first:pt-0 last:-mb-1.5 last:pb-0"
						:class="
							index === 1
								? 'bg-accent/10 font-semibold text-accent'
								: 'font-medium text-subtle'
						"
					>
						<div
							class="pr-3 font-mono"
							:class="index === 1 ? '' : 'text-subtle/60'"
						>
							{{ index + 3 }}
						</div>
						{{ activity }}
					</div>
				</div>

				<div
					class="flex w-full flex-col divide-y divide-accent/20 overflow-hidden rounded-xl border border-accent/20 md:col-span-2"
				>
					<div
						v-for="(step, index) in steps"
						:key="step.heading"
						class="flex shrink-0 px-5 py-2.5"
						:class="
							index === 0
								? 'bg-accent/5 text-accent'
								: 'font-medium text-accent/90'
						"
					>
						<div
							class="pr-3 pt-px font-mono text-sm"
							:class="index === 0 ? '' : 'text-accent/70'"
						>
							{{ index + 1 }}
						</div>
						<div>
							<h3 class="text-sm font-semibold tracking-tight">
								{{ step.heading }}
							</h3>
							<p class="text-sm font-medium">{{ step.description }}</p>
						</div>
					</div>
				</div>
			</app-container>
		</section>

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
	</div>
</template>
