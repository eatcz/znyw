import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        name: 'layout',
        redirect:'/group',
        component: () => import('../layout/index.vue'),
        children: [
            // {
            //     path: '',
            //     name:'home',
            //     component:() =>import('../views/Home/index.vue')
            // },
            // 系统管理
            {
                path: '/system',
                name:'system',
                component: () => import('../views/System/index.vue'),
                children: [
                    {
                        path: 'user',
                        name: 'user',
                        component:() => import('../views/User/index.vue')
                    },
                    {
                        path: 'department',
                        name: 'department',
                        component:() =>import('../views/Department/index.vue')
                    }
                ]
            },
            {
                path: '/group',
                name: 'group',
                component:() =>import('../views/Group/index.vue')
            },
            // 人力资源管理
            // {
            //     path: '/humanresource',
            //     name: 'humanresource',
            //     component:() =>import('../views/HumanResource/index.vue')
            // },
            // // 物资设备
            // {
            //     path: '/equipment',
            //     name: 'equipment',
            //     component:() =>import('../views/Equipment/index.vue')
            // },
            // // 生产计划
            // {
            //     path: '/productplan',
            //     name: 'productplan',
            //     component:() =>import('../views/ProductPlan/index.vue')
            // },
            // // 安全质量
            // {
            //     path: '/safemass',
            //     name: 'safemass',
            //     component:() =>import('../views/SafeMass/index.vue')
            // },
            // // 故障管理
            // {
            //     path: '/breakdown',
            //     name: 'breakdown',
            //     component:() =>import('../views/BreakDown/index.vue')
            // },
            // // 应急管理
            // {
            //     path: '/emergency',
            //     name: 'emergency',
            //     component:() =>import('../views/Emergency/index.vue')
            // },
            // // 资料管理
            // {
            //     path: '/document',
            //     name: 'document',
            //     component:() =>import('../views/Document/index.vue')
            // }
        
        ]
    },

    {
        path: '/login',
        name: 'login',
        component:() =>import('../views/Login/index.vue')
    }
 
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router