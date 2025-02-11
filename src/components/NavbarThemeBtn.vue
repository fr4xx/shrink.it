<template>
	<button
		class="btn btn-primary"
		@click.prevent="changeTheme"
	>
		<i
			class="bi"
			:class="theme.class"
		></i>
	</button>
</template>

<script setup>
import { reactive, watch, onMounted } from "vue";

const theme = reactive({ class: "bi-moon-stars-fill", darkmode: false });

// Load dark mode state from localStorage on mount
onMounted(() => {
	const savedTheme = localStorage.getItem("darkmode");
	if (savedTheme === "true") {
		theme.darkmode = true;
		theme.class = "bi-sun-fill";
		document.body.classList.add("dark-mode");
	}
});

function changeTheme() {
	theme.darkmode = !theme.darkmode;
	theme.class = theme.darkmode ? "bi-sun-fill" : "bi-moon-stars-fill";
	console.log("Darkmode:", theme.darkmode);
	localStorage.setItem("darkmode", theme.darkmode);
}

// Watch for changes in darkmode and update <body> class
watch(
	() => theme.darkmode,
	(newVal) => {
		if (newVal) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
	}
);
</script>

<style>
/* Dark Mode Styles */
.dark-mode {
	background-color: #2c2b2b;
	color: white;
}
</style>
