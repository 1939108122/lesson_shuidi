import React from 'react';
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  // routeChangeStart
  // routeChangeComplete
  // beforeHistoryChange
  // routeChangeError
  // hashChangeStart
  // hashChangeComplete

  Router.events.on('routeChangeStart',(...args)=> {
    console.log('1-routeChangeStart-> 路由开始变化', ...args)
  })

  Router.events.on('routeChangeComplete',(...args)=> {
    console.log('2-routeChangeComplete-> 路由变化完成', ...args)
  })
  Router.events.on('beforeHistoryChange',(...args)=> {
    console.log('3-beforeHistoryChange-> history', ...args)
  })

  Router.events.on('routeChangeError',(...args)=> {
    console.log('4-routeChangeError-> error', ...args)
  })

  Router.events.on('hashChangeStart',(...args)=> {
    console.log('5-hashChangeStart-> hashStart', ...args)
  })
  Router.events.on('hashChangeComplete',(...args)=> {
    console.log('6-hashChangeComplete-> hashComplete', ...args)
  })

  function chooseKyrie () {
    Router.push({
      pathname: '/team',
      query: {
        name: 'kyrie'
      }
    })
  }
  return (
    <>
    <div>我是首页</div>
    <div><Link href={{pathname: '/team', query: {name: 'kyrie'}}}><a>选择11号欧文</a></Link></div>
    <div><Link href="/team?name=durant"><a>选择7号杜兰特</a></Link></div>
    <div><button onClick={chooseKyrie}>选择kyrie</button></div>
    <div><Link href="/#hashdemo"><a>hash路由</a></Link></div>
  </>
  )
}
  

export default Home