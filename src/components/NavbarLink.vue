<script setup>
// Props
defineProps({
	url: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	id: {
		type: String,
		required: true
	}
});
</script>

<template>
	<li class="navbar-option">
		<a :href="url" class="navbar-option__link">{{ text }} <i class="fa-solid fa-angle-down"></i></a>
	</li>
</template>

<style scoped>
.navbar-option__link {
	padding: 0.4em 0.7em;
	border-radius: 5px;
	color: var(--white-color);
	text-decoration: none;
	text-transform: capitalize;
}

.navbar-option__link:hover,
.navbar-option__link:focus {
	background-color: var(--darker-bground);
}

.fa-angle-down {
	font-size: 0.6rem;
	position: relative;
	top: -1px;
	left: 2px;
}
</style>
