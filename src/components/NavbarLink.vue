<template>
	<li
		v-for="(link, index) in navbarLinks"
		class="nav-item"
	>
		<router-link
			class="nav-link"
			:class="isActive"
			href="#"
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
