import { createApp } from 'vue'
import App from './App.vue'
import OnButton from './components/button.vue'
import './assets/fonts/iconfont.css'

createApp(App).component(OnButton.name, OnButton).mount('#app')
