<template>
	<nav class="navbar navbar-dark navbar-expand-lg bg-primary">
		<div class="container">
			<router-link
				class="navbar-brand"
				active-class="active"
				:to="'/'"
			>
				shrink.it
			</router-link>
			<div class="collapse navbar-collapse">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<NavbarLink :links="navbarLinks"></NavbarLink>
				</ul>
			</div>
			<NavbarDropdown :links="navbarLinks"></NavbarDropdown>
			<form class="d-flex">
				<NavbarThemeBtn></NavbarThemeBtn>
			</form>
		</div>
	</nav>
</template>

<script setup>
import NavbarLink from "./NavbarLink.vue";
import NavbarThemeBtn from "./NavbarThemeBtn.vue";
import NavbarDropdown from "./NavbarDropdown.vue";

const navbarLinks = [
	{ title: "Dashboard", path: "/dashboard" },
	{ title: "About", path: "/about" },
	{ title: "Contact", path: "/contact" },
];
</script>

<style scoped>
.nav-mobile {
	display: none;
}

@media only screen and (max-width: 991px) {
	.nav-mobile {
		display: block;
	}
}
</style>
