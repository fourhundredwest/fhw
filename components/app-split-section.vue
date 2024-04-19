<script setup lang="ts">
defineProps<{
	heading?: string;
	reverse?: boolean;
}>();
</script>
<template>
	<app-section :heading="heading">
		<div
			class="grid grid-cols-1 gap-gap-lg md:grid-cols-2"
			:class="
				reverse ? '[&>:first-child]:order-1 [&>:first-child]:md:order-none' : ''
			"
		>
			<slot></slot>
		</div>
	</app-section>
</template>
