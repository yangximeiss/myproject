import { createApp } from 'vue'
//import { createApp } from './router'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import router from './router'

//axios.defaults.baseURL = '/proxy_url'


const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
