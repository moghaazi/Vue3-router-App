import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Router
import './main.scss' // SCSS

// Creat App
createApp(App)
  .use(router)
  .mount('#app')
