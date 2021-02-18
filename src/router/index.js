import Vue from 'vue'
import VueRouter from 'vue-router'
import Flow from '../views/flow/flow.vue'
import FlowList from '../views/flowList/FlowList.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: FlowList
    },
    {
        path: '/flow',
        name: 'Flow',
        component: Flow
    },
    {
        path: '/flow/list',
        name: 'FlowList',
        component: FlowList
    },
    {
        path: '/create/flow/:id',
        name: 'CreateFlow',
        component: Flow
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
