import { setupRouter } from '@/router'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

const app = createApp(App)

// 配置路由
setupRouter(app)

app.mount('#app').$nextTick(() => {
  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, _message) => {

  })
})
