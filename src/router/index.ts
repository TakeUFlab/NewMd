import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import dashHome from '../views/dashboard/views/home.vue'
import welcome from '../views/welcome.vue'
import dashboard from '../views/dashboard/dashboard.vue'
import timetable from '../views/dashboard/views/timetable.vue'
import information from '../views/dashboard/views/information.vue';

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
        },
        {
            path: '/~',
            name: 'Home',
            component: dashboard,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: dashHome
                },
                {
                    path: 'timetable',
                    name: 'Timetable',
                    component: timetable
                },
                {
                    path: 'Infos',
                    name: 'Information',
                    component: information
                }
            ]
        }
    ]
})

export default Router