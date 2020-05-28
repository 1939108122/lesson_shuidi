import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index () {
  useEffect(()=> {
    console.log('来咯，Index页面')
    return ()=> {
      console.log('走啦？ Index页面')
    }
  },[])
  return (
    <h2>维斯布鲁克</h2>
  )
}
function List () {
  useEffect(()=> {
    console.log('来咯，list页面')
    return ()=> {
      console.log('走啦？ List页面')
    }
  })
  return (
    <h2>凯文杜兰特</h2>
  )
}

function Example () {
  const [ count, setCount ] = useState(0)  //数组解构

  // 上面这一行相当于下面这份代码
  // const _useState = useState(0)
  // const count = useState[0]
  // const setCount = useState[1]
  useEffect(()=> {
    console.log(`useEffect => you clicked ${ count } times`)
    return () => {
      console.log('---------------')
    }
  },[count])
  return (
    <div>
      <p>Click me { count }times</p>
      <button onClick={ ()=> { setCount(count+1) }}>Click me</button>

      <Router>
        <ul>
            <li><Link to='/'>二弟</Link></li>
            <li><Link to='/list/'>大哥</Link></li>
        </ul>
        <Route path='/' exact component={Index}/>
        <Route path='/list/'component={List}/>
      </Router>
    </div>
  )
}
 
export default Example;