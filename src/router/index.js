import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/test",
            // alias:'/',
            component: ()=>import('../views/Home.vue')
        },
        {
            path:'/home',
            alias:'/',
            component: ()=>import('../components/AllFriends.vue')
        },
        {
            path:'/:patchMatch(.*)',
            component: ()=>import('../views/NotFound.vue')
        },
        {
            path:'/pokemon',
            component:()=>import('../components/PokeApi.vue')
        },
        {
            path:'/meteo',
            component:()=>import('../components/MeteoApi.vue')
        }
    ]
});
export default router