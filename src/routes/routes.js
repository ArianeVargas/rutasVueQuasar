import Login from "../components/Login.vue"
import Compras from "../components/Compras.vue"
import Acount from "../components/Acount.vue"

import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path: "/", component:Login},
    {path: "/compras", component:Compras},
    {path: "/acount", component:Acount}
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes  
})