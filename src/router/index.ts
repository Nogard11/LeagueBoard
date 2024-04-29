import { createRouter, createWebHistory } from 'vue-router';

const routers = [
    { path: '', name: 'home', component: () => import('@/views/Home.vue') },
    { path: '/about', name: 'about', component: () => import('@/views/About.vue') },
    { path: '/download', name: 'download', component: () => import('@/views/Download.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers
})
export default router;