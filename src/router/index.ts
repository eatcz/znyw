import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        name: 'layout',
        redirect:'',
        component: () => import('../layout/index.vue'),
        children: [
            {
                path: '',
                name:'home',
                component:() =>import('../views/Home/index.vue')
            },
            {
                path: '/system',
                name:'system',
                component:() =>import('../views/System/index.vue')
            }
        ]
    }
 
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router