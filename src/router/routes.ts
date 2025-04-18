import { createRouter, createWebHistory } from "vue-router";

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/", name: "layout", component: () => import("@/components/bodyPage.vue"),
            meta: {}
        },
        {
            path: "/suscribe", name: "suscribe", component: () => import("@/components/registersCard.vue"),
            meta: {}
        }
    ],
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            };
        }
        return { top: 0 };
    }
});

export default routes;