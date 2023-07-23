import './assets/scss/Main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import $ from 'jquery'
// import router from './router'

const app = createApp(App)
window.$ = $
// app.use(router)

app.mount('#app')
