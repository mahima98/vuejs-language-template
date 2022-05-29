import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Homepage from "../src/components/Homepage.vue";
import About from "./components/About.vue";
import Work from "./components/Work.vue";
import "./input.css";
import i18n from "../i18n";

const routes = [
  {
    path: "/",
    name: "index",
    component: Homepage,
  },
  {
    path: "/About",
    component: About,
  },
  {
    path: "/Work",
    component: Work,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
