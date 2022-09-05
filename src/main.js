import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/styles/animate.css'

import VImg from '@/components/VImg.vue'
import VText from '@/components/VText.vue'
import VButton from '@/components/VButton.vue'
import VRect from '@/components/VRect.vue'


const app = createApp(App)

app.use(store)
app.use(router)
app.use(Antd)


app.component('VImg', VImg)
app.component('VText', VText)
app.component('VButton', VButton)
app.component('VRect', VRect)




app.mount('#app')
