import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 引入 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入 echarts
import * as echarts from 'echarts'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$Echarts = echarts

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
