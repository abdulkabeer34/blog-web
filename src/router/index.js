import { createRouter, createWebHistory } from "vue-router";
import PostBlog from "../components/PostBlog.vue";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import ContactPage from "../components/ContactPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/post",
    name: "Post",
    component: PostBlog,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
