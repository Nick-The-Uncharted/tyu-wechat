import Vue = require('Vue')
import Component from 'vue-class-component'
import VerticalPager from './components/vertical-pager'
import BindPage from './components/bind-page'

var logo = require("./assets/logo.png");

// <vertical-pager></vertical-pager>
@Component({
  template: `
    <div id="app">
      <bind-page :backgroundColor="{background: 'linear-gradient(#b2ff59, #ef6c00)'}"></bind-page>
    </div>
   `,
   components: {BindPage}
})
export default class App extends Vue {
}


// <style>
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
// </style>
