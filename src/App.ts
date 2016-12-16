import Vue = require('Vue')
import Component from 'vue-class-component'
import VerticalPager from './components/vertical-pager'

var logo = require("./assets/logo.png");

@Component({
  template: `
    <div id="app">
      <vertical-pager></vertical-pager>
    </div>
   `,
   components: {VerticalPager}
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
