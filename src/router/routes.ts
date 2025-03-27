import { createRouter, createWebHistory } from "vue-router";

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/", name: "layout", component: () => import("@/components/bodyPage.vue"),
            meta: {}
        }
    ]
});

export default routes;