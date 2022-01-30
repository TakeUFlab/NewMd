import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import Vuex from './store/index'

createApp(App).use(Router).use(Vuex).mount('#app')
