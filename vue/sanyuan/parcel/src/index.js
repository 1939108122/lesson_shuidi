import { template } from "lodash";


const MyComponent = props => {
  const compiler = MyComponent.cache || (MyComponent.cache = template('<h1><%= title %></h1>'))
  return compiler(props)
}
MyComponent.cache = null

document.getElementById('app').innerHTML = MyComponent({ title: 'MyComponent' })