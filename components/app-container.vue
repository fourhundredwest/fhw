<script setup lang="ts">
defineProps<{
	is?: string;
}>();
</script>

<template>
	<component :is="is ?? 'div'" class="mx-auto max-w-content-width">
		<slot />
	</component>
</template>
