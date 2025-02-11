<template>
	<div class="nav-mobile btn-group">
		<button
			type="button"
			class="btn btn-primary dropdown-toggle"
			data-bs-toggle="dropdown"
			aria-expanded="false"
		>
			{{ activePageTitle }}
		</button>
		<ul class="dropdown-menu">
			<li>
				<router-link
					class="dropdown-item"
					active-class="active"
					:to="'/'"
				>
					Home
				</router-link>
			</li>
			<li><hr class="dropdown-divider" /></li>
			<li
				v-for="link in links"
				:key="link.path"
				class="nav-item"
			>
				<router-link
					class="dropdown-item"
					active-class="active"
					:to="link.path"
				>
					{{ link.title }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
	links: Array,
});

const route = useRoute();

// Compute the active page title based on the current route (e.g. "/dashboard")
const activePageTitle = computed(() => {
	const activeLink = props.links.find((link) => link.path === route.path);
	return activeLink ? activeLink.title : "Home";
});
</script>
