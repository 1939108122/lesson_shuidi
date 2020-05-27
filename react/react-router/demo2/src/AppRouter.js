import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import './index.css'
import Video from './Pages/Video'
import WorkSpace from './Pages/Workplace'

  function AppRouter() {
    let routeConfig = [
      { path:'/', title: '博客首页', exact: true, component: Index },
      { path:'/video', title: '视频教程', exact: false, component: Video },
      { path:'/workplace', title: '职场技能', exact: false, component: WorkSpace }
    ]
    return (
      <Router>
      <div className="mainDiv">
        <div className= "leftNav">
          <h3>一级导航</h3>
          <ul>
            {
              routeConfig.map((item, index)=> {
                return (
                <li key={index}><Link to={item.path}>{item.title}</Link></li>
                )
              })
            }
          </ul>
        </div>
        <div className= "rightMain">
          {
            routeConfig.map((item, index)=> {
              return (
              <Route key={index} path={item.path} exact= {item.exact} component={item.component} />
              )
            })
          }
        </div>
      </div>
    </Router>
    )
}

export default AppRouter