/*
 * @Description: 
 * @Autor: Zhongyu
 * @Date: 2021-03-08 15:46:29
 * @LastEditors: Zhongyu
 * @LastEditTime: 2021-08-11 14:28:08
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const routes = [
    {
        path: '/flow-list',
        name: 'FlowList',
        component: () => import("../views/flowList")
    },
    {
        path: '/flow/endit',
        name: 'CreateFlow',
        component: () => import("../views/flow")
    }
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
