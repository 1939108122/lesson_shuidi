import React, {Component} from 'react'
// 上面代码相当于
// import React from 'react'
// const Component = React.Component
class App extends Component{
  render() {
    return (
        // JSX  javascript 和 XML
        <ul className="my-list">
          <li>{false? 'abc':132}</li>
          <li>def</li>
        </ul>
     )
  }
}
  // 上面代码不用jsx为如下写法
  // var child1 = React.createElement('li','null', 'abc')
  // var child2 = React.createElement('li','null', 'def')
  // var root = React.createElement('ul', {className: 'my-list'}, child1, child2)
export default App