// const http = require('http')
// const port = 3000
// const hostname = 'localhost'
// const server = http.createServer((req,res) =>{
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World\n');
// })

// server.listen(port, () => {
//   console.log(`server on http://${hostname}:${port}/`)
// })
const express = require('express')
const hostname = 'localhost';
const port = 3000;
const app = express()
app.set('views', 'views')  //指定模板存放目录
app.set('view engine', 'hbs');          // 指定模板引擎为handlebars


function loggingMiddleware(req, res, next) {
  const time = new Date()
  console.log(`[${time.toLocaleString()}] ${req.method} ${req.url}`);
  next();
}
app.use(loggingMiddleware)

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact');
})

app.get('/', (req, res) => {
  res.send("hello, world!")
})
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});