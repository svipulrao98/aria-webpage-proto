import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Router from './routes'
import vueSmoothScroll from 'vue-smoothscroll'
import Embed from 'v-video-embed'
import VueTypedJs from 'vue-typed-js'
// import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(vueSmoothScroll)
Vue.use(Embed)
Vue.use(VueTypedJs)
Vue.config.productionTip=false

const router = new VueRouter({
  routes: Router,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
