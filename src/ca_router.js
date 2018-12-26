import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/cba',
            component: () => import('./ca_views/CaBusinessAdmin.vue')
        },
        {
            path: '/csa',
            component: () => import('./ca_views/CaSupAdmin.vue')
        },
        {
            path: '/ko',
            component: () => import('./ca_views/KmcOperator.vue')
        },
        {
            path: '/rba',
            component: () => import('./ca_views/RaBusinessAdmin.vue')
        },
        {
            path: '/ro',
            component: () => import('./ca_views/RaOperator.vue')
        },
        {
            path: '/',
            redirect: '/ro'
        }
    ]
})
