import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import welcome from '../views/welcome.vue'

const Router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: welcome
        },
        {
            path: '/login',
            name: 'Login',
            component: login
        }
    ]
})

export default Router