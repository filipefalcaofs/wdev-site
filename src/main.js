import Vue from 'vue'
import App from './App.vue'
import VueRouter from '../src/routes/router.js'

Vue.config.productionTip = false


new Vue({
    router: VueRouter,
    render: h => h(App),
}).$mount('#app')