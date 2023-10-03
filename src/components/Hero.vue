<template>
	<div class="hero-container">
		<h1 class="hero-container__header">
			<span class="hero-container__header-span">Manage Any Content.</span
			><span class="hero-container__header-span">Anywhere.</span>
		</h1>
		<p class="hero-container__description">The leading open-source headless CMS.</p>
		<p class="hero-container__description">100% JavaScript / TypeScript and fully customizable.</p>
	</div>
</template>

<style scoped>
.hero-container__header {
	margin-bottom: 1rem;
	line-height: 1.2em;
}
.hero-container__header-span {
	display: block;
}

.hero-container__description {
	color: var(--light-text);
	font-size: 1.1rem;
}

@media screen and (min-width: 870px) {
	.hero-container {
		text-align: center;
	}
}
</style>
