// 防止toast的css冲突....
import '!!vue-style!css?sourceMap!replace?regex=toast&flags=g&sub=material-toast!materialize-css/bin/materialize.css'
import '!!vue-style!css?sourceMap!./vendor/whirl/whirl.css'
import 'materialize-css/dist/js/materialize.js'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue = require('vue')
import VerticalPager from './components/vertical-pager'
import BindPage from './components/bind-page'
import DashBoard from './components/dash-board'
import VueRouter = require('vue-router')
import './style.css'

Vue.use(VueRouter)

let router = new VueRouter({ 
  mode: 'history',
  routes: [
    {
      path: '/bind',
      component: BindPage
    },
    { 
      path: '/childs/:id',
      component: VerticalPager 
    },
    { 
      path: '*',
      component: DashBoard // fallback 
    }]
})

let app = new Vue({
  router
}).$mount("#app")

if (module.hot) {
    
}