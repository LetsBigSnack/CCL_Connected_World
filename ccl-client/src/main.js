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
import UserPage from "./pages/User.vue";
import ChampionPage from "./pages/Champion.vue";
import SettingsPage from "./pages/Settings.vue";
import WalletPage from "./pages/Wallet.vue";


const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage},
    { path: '/shop', component: ShopPage },
    { path: '/social', component: SocialPage},
    { path: '/champion', component: ChampionPage},
    { path: '/setting', component: SettingsPage},
    { path: '/wallet', component: WalletPage},
    { path: '/users/:userID', component: UserPage},
]

const webRouter = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})


const app = createApp(App);
app.use(webRouter)
app.mount('#app');