import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/AdminLayout.vue";
import Auth from "@/layouts/AuthLayout.vue";

// views for Admin layout

import DashboardScreen from "@/views/admin/DashboardScreen.vue";
import SettingsScreen from "@/views/admin/SettingsScreen.vue";
import TablesScreen from "@/views/admin/TablesScreen.vue";
import Maps from "@/views/admin/MapsScreen.vue";

// views for Auth layout

import LoginScreen from "@/views/auth/LoginScreen.vue";
import RegisterScreen from "@/views/auth/RegisterScreen.vue";

// views without layouts

import LandingScreen from "@/views/LandingScreen.vue";
import ProfileScreen from "@/views/ProfileScreen.vue";
import Index from "@/views/IndexScreen.vue";

// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: DashboardScreen,
      },
      {
        path: "/admin/settings",
        component: SettingsScreen,
      },
      {
        path: "/admin/tables",
        component: TablesScreen,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: LoginScreen,
      },
      {
        path: "/auth/register",
        component: RegisterScreen,
      },
    ],
  },
  {
    path: "/landing",
    component: LandingScreen,
  },
  {
    path: "/profile",
    component: ProfileScreen,
  },
  {
    path: "/",
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
