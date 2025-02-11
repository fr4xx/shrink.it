<template>
	<li
		v-for="link in links"
		class="nav-item"
	>
		<router-link
			class="nav-link"
			active-class="active"
			:to="link.path"
		>
			{{ link.title }}
		</router-link>
	</li>
</template>

<script setup>
import { ref, reactive } from "vue";

defineProps({
	links: Array,
});
</script>

<style scoped>
router-link.nav-link {
	cursor: pointer;
}
</style>
