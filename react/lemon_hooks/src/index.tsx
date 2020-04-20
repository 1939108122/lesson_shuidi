// import "./app.css"
// console.log('welcome')
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HelloComponent } from './hello'
import { App } from './app'  //根组件的概念 
ReactDOM.render(
  // defaultUserName  可以被组件共享状态
  <HelloComponent userName={name}/>,
  document.getElementById('root')
)