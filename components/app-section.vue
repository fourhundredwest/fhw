<script setup lang="ts">
defineProps<{
	heading?: string;
}>();
</script>

<template>
	<section class="px-gap py-gap-lg">
		<app-container>
			<h2
				v-if="heading"
				class="pb-gap-lg text-center text-3xl font-semibold tracking-tight"
			>
				{{ heading }}
			</h2>
			<slot></slot>
		</app-container>
	</section>
</template>
