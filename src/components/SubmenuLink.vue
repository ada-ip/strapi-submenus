<script setup>
// Props
const { submenuOption } = defineProps({
	submenuOption: {
		type: Object,
		required: true
	}
});
// submenuOption properties
const { url, icon, label } = submenuOption;
</script>

<template>
	<li class="navbar-submenu__option">
		<a :href="url" class="navbar-submenu__link"
			><i :class="icon"></i> <span class="navbar-submenu__link-label">{{ label }}</span></a
		>
	</li>
</template>

<style scoped>
.navbar-submenu__link {
	color: var(--darkest-text);
	text-decoration: none;
	text-transform: capitalize;
	font-weight: 500;
	display: flex;
	align-items: center;
	gap: 0.7rem;
	padding: 0.7rem;
	border-radius: 5px;
}

.navbar-submenu__link:focus,
.navbar-submenu__link:hover {
	background-color: var(--lighter-bground);
}

.navbar-submenu__link i {
	font-size: 1.3rem;
	width: 24px;
}

.navbar-submenu__link:hover .navbar-submenu__link-label {
	color: var(--primary-color-light);
	position: relative;
}

.navbar-submenu__link:hover .navbar-submenu__link-label::after {
	content: "→";
	position: absolute;
	right: -25px;
}
</style>
