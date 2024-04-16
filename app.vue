<script setup lang="ts">
useHead({
	htmlAttrs: {
		lang: "en",
	},
});
useSeoMeta({
	titleTemplate: "FourHundredWest - %s",
	description:
		"FourHundredWest is a development agency that specializes in building websites and web applications.",
	ogImage: "/og-image.png",
	ogImageAlt: "FourHundredWest",
});
</script>

<template>
	<a href="#content" class="sr-only focus:not-sr-only">Skip to main content</a>

	<header>
		<nav aria-label="Primary">
			<NuxtLink to="/">FourHundredWest</NuxtLink>
		</nav>
	</header>

	<main id="content">
		<NuxtPage />
	</main>
</template>
