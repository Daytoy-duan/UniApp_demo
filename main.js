import App from './App'
import Vue from 'vue'

Vue.config.productionTip = false

import uView from 'uview-ui'
Vue.use(uView)

App.mpType = 'app'
const app = new Vue({
    ...App
})

require('@/common/http.interceptor.js')(app)


app.$mount()