<script setup>
// Components
import SubmenuLink from "./SubmenuLink.vue";

// Props
defineProps({
	selectedOption: {
		type: Object,
		required: true
	},
	navbarHeight: {
		type: Number,
		required: true
	},
	isHidden: {
		type: Boolean,
		default: true
	}
});
</script>

<template>
	<div class="navbar-submenu" :class="{ 'navbar-submenu_hidden': isHidden }" :style="{ top: `${navbarHeight}px` }">
		<p class="navbar-submenu__header">Products</p>
		<ul class="navbar-submenu__links-list">
			<SubmenuLink v-for="link in selectedOption.links" :key="link.id" :submenu-option="link" />
		</ul>
	</div>
</template>

<style scoped>
.navbar-submenu {
	position: absolute;
	inset: 0 0 auto 0;
	padding: 2.5rem 3rem;
	background-color: var(--white-color);
	border-radius: 10px;
}

.navbar-submenu_hidden {
	display: none;
}

.navbar-submenu__header {
	color: var(--darker-text);
	text-transform: uppercase;
	font-size: 0.8rem;
	font-weight: 700;
}

.navbar-submenu__links-list {
	margin-block: 1.2rem;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0.6rem;
}
</style>
