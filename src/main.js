import { createApp } from 'vue'
import { Quasar } from 'quasar'
/* import './style.css' */
import {router} from "./routes/routes.js"

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'

const app = createApp(App)

app.use(Quasar, {
    Plugins: {

    }
})

app.use(router)

app.mount('#app')
