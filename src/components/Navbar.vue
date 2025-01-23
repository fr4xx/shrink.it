<template>
	<nav class="navbar navbar-dark navbar-expand-lg bg-primary">
		<div class="container-fluid">
			<a
				href="#"
				class="navbar-brand"
			>
				shrink.it
			</a>
			<div class="collapse navbar-collapse">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<NavbarLink></NavbarLink>
				</ul>
			</div>
			<form class="d-flex">
				<NavbarThemeBtn></NavbarThemeBtn>
			</form>
		</div>
	</nav>
</template>

<script setup>
import NavbarLink from "./NavbarLink.vue";
import NavbarThemeBtn from "./NavbarThemeBtn.vue";
</script>
