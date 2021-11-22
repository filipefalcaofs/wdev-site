import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        component: () =>
            import ('../pages/Home.vue'),
    },
    {
        path: '/Video',
        component: () =>
            import ('../pages/Video.vue'),
    },
    {
        path: '/Sobre',
        component: () =>
            import ('../pages/Sobre.vue'),
    },
    {
        path: '/Contato',
        component: () =>
            import ('../pages/Contato.vue'),
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;