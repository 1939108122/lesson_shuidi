import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'


$(function() {
  $('li:odd').css('backgroundColor', 'yellow')
  $('li:even').css('backgroundColor', 'lightblue')
})

class Person {
  static name = '小白'
}
console.log(Person.name)


import Vue from 'vue'
import App from './components/app.vue'

const vm = new Vue({
  el:'#app',
  render: h=>h(App)
})