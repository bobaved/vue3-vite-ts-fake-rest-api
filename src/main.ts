import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

import App from './App.vue'

import {store, key} from './store/store'

const app = createApp(App)
app.use(store, key)

const vuetify = createVuetify()
app.use(vuetify)

app.mount('#app')
