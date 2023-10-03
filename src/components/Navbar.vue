<script setup>
import { onMounted, ref } from "vue";

// Components
import NavbarLink from "./NavbarLink.vue";
import Submenu from "./Submenu.vue";

// Outside data
import sublinks from "../data/data";

// Reactive data
const selectedNavbarOption = ref(sublinks[0]);

// Obtain the navbar's height to fix the submenu's position
const navbarRef = ref(null);
const navbarHeight = ref(0);
onMounted(() => {
	navbarHeight.value = navbarRef.value.offsetHeight;
	console.log(navbarHeight.value);
});
</script>

<template>
	<nav class="navbar" ref="navbarRef">
		<span class="navbar__logo">strapi</span>
		<ul class="navbar__links-list">
			<NavbarLink v-for="{ pageId, page } in sublinks" :key="pageId" :url="page" :text="page" />
		</ul>
		<Submenu :selected-option="selectedNavbarOption" :navbar-height="navbarHeight" />
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
