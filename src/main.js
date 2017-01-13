// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import routes from './routes'

/* eslint-disable no-new */
// router
const router = new VueRouter({
  routes
})
Vue.use(VueRouter)

// theme
Vue.use(ElementUI)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  render: h => h(App)
})

