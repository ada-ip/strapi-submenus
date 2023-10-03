<script setup>
// Components
import NavbarLink from "./NavbarLink.vue";

// Outside data
import sublinks from "../data/data";
</script>

<template>
	<nav class="navbar">
		<span class="navbar__logo">strapi</span>
		<ul class="navbar__links-list">
			<NavbarLink v-for="{ pageId, page } in sublinks" :key="pageId" :url="page" :text="page" />
		</ul>
	</nav>
</template>

<style scoped>
.navbar {
	padding-block: 1.4rem;
	position: absolute;
	inset: 0 0 auto 0;
	display: flex;
	align-items: center;
}

.navbar__logo {
	font-size: 1.8rem;
	font-weight: 700;
}

.navbar__links-list {
	flex-grow: 1;
	display: flex;
	justify-content: center;
	list-style: none;
	gap: 1.2rem;
}
</style>
