import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/MainView.vue";
import DashboardView from "./views/DashboardView.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomeView,
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: DashboardView,
	},
	{
		path: "/about",
		name: "About",
		component: AboutView,
	},
	{
		path: "/contact",
		name: "Contact",
		component: ContactView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
