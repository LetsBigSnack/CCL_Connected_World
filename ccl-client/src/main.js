import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import {createWebHashHistory} from "vue-router";
import './style.css'
import App from './App.vue'

import LoginPage from "./pages/Login.vue";
import HomePage from "./pages/Home.vue";
import RegisterPage from "./pages/Register.vue";
import ShopPage from "./pages/Shop.vue";
import SocialPage from "./pages/Social.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage},
    { path: '/shop', component: ShopPage },
    { path: '/social', component: SocialPage},
]

const webRouter = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})


const app = createApp(App);
app.use(webRouter)
app.mount('#app');