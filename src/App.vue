<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
</script>

<template>
	<Navbar />
	<main class="main-content">
		<Hero />
	</main>
</template>

<style scoped>
.main-content {
	min-height: 100vh;
	display: grid;
	place-items: center;
}
</style>
