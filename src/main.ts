import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//引入路由
import router from './router'
//引入仓库
import pinia from './store'

//获取应用实例对象
const app = createApp(App)
//安装仓库
app.use(pinia)
//注册模板路由
app.use(router)

//将应用挂载到挂载点上
app.mount('#app')
