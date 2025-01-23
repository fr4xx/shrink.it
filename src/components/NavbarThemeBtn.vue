<template>
	<button
		class="btn btn-primary"
		@click.prevent="changeTheme()"
	>
		<i
			class="bi"
			:class="theme.class"
		>
		</i>
	</button>
</template>

<script setup>
import { reactive } from "vue";

const theme = reactive({ class: "bi-moon-stars-fill", darkmode: false });

function changeTheme() {
	if (!theme.darkmode) {
		theme.darkmode = true;
		theme.class = "bi-sun-fill";
	} else {
		theme.darkmode = false;
		theme.class = "bi-moon-stars-fill";
	}
	console.log("Darkmode: " + theme.darkmode);
}
</script>
