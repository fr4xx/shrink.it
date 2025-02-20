import { createRouter, createWebHashHistory } from "vue-router";
import DashboardView from "./views/DashboardView.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";
import MainView from "./views/MainView.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: MainView,
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
	history: createWebHashHistory(),
	routes,
});

export default router;
