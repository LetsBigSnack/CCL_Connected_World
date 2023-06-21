import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
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
import InventoryPage from "./pages/Inventory.vue";
import NotFoundPage from "./pages/NotFound.vue";
import GamePage from "./pages/GamePage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage},
    { path: '/shop', component: ShopPage },
    { path: '/game', component: GamePage },
    { path: '/social', component: SocialPage},
    { path: '/settings', component: SettingsPage},
    { path: '/wallet', component: WalletPage},
    { path: '/inventory', component: InventoryPage},
    { path: '/users/:userID', component: UserPage},
    { path: '/champions/:championID', component: ChampionPage},
    { path: '/:pathMatch(.*)*', component: NotFoundPage},
]

const webRouter = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})


const app = createApp(App);
app.use(webRouter)
app.mount('#app');