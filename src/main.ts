// 防止toast的css冲突....
import '!!vue-style!css?sourceMap!replace?regex=toast&flags=g&sub=material-toast!materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue = require('vue')
import VerticalPager from './components/vertical-pager'
import BindPage from './components/bind-page'
import VueRouter = require('vue-router')
import './style.css'

Vue.use(VueRouter)

const router = new VueRouter({ 
  // mode: 'history',
  routes: [
    {
      path: '/bind',
      component: BindPage
    },
    { 
      path: '/*',
      component: VerticalPager 
    }]
})

const app = new Vue({
  router
}).$mount("#app")