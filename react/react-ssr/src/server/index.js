import express from 'express'
import React from 'react'
import  { renderToString } from 'react-dom/server'
import Header from '../components/Header.jsx'
const app = express()
// static 目录资源做了静态资源的一个映射
app.use( express.static('static'))
app.get('*', (req, res) => {
  const App = (<Header />)
const htmlStr = renderToString(App)
console.log(htmlStr)
  res.send(`<h2>h2</h2>`)
})


app.listen(3000, () => {
  console.log('server is running at port 3000')
})