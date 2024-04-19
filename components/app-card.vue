<script setup lang="ts">
defineProps<{
	heading?: string;
	subheading?: string;
}>();
</script>

<template>
	<div class="space-y-3 rounded-xl border bg-surface-0 p-6">
		<h3 v-if="heading" class="text-xl font-semibold tracking-tight">
			{{ heading }}
		</h3>
		<p v-if="subheading">{{ subheading }}</p>
		<slot></slot>
	</div>
</template>
