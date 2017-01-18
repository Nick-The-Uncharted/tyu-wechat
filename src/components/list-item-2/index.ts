import Vue = require('vue')
import Component from 'vue-class-component'
const template: string = require('raw!./list-item-2.html')
const map = require('./list-item-2.css')

@Component({
    template: template,
    props: {
        'index': Number,
        'title': String,
        'content': String
    }
})
export default class ListItem2 extends Vue {
    m = map
    examples = {"aaa": "bbb", "ccc": "ddd"}
    colors = ["#b71c1c", "#f57f17", "#1b5e20", "#3e2723"]
}