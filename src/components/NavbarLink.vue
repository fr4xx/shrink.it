<template>
	<li
		v-for="(link, index) in navbarLinks"
		class="nav-item"
	>
		<router-link
			class="nav-link"
			:to="link.path"
			:class="isActive"
			:index="index"
		>
			{{ link.title }}
		</router-link>
	</li>
</template>

<script setup>
import { ref, reactive } from "vue";

const navbarLinks = [
	{ title: "Dashboard", path: "/dashboard" },
	{ title: "About", path: "/about" },
	{ title: "Contact", path: "/contact" },
];
</script>

<style scoped>
router-link.nav-link {
	cursor: pointer;
}
</style>
