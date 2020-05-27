import React from 'react'
import {Route, Link } from 'react-router-dom'

import Money from './workplace/Money'
import Getup from './workplace/Getup'


function WorkSpace () {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workplace/money">Money</Link></li>
          <li><Link to="/workplace/getup">Getup</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>职场秘籍</h3></div>
        <Route path="/workplace/money" component={Money} />
        <Route path="/workplace/getup" component={Getup} />
      </div>
    </div>
  )
}

export default WorkSpace