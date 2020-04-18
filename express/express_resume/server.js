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
app.set('views', 'views')               //指定模板存放目录
app.set('view engine', 'hbs');          // 指定模板引擎为handlebars


function loggingMiddleware(req, res, next) {
  const time = new Date()
  console.log(`[${time.toLocaleString()}] ${req.method} ${req.url}`);
  next();
}
app.use(loggingMiddleware)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact');
})

app.get('/', (req, res) => {
  res.send("hello, world!")
})
app.get('/broken', (req, res) => {
  throw new Error('Broken!');
});

app.get('/api', (req, res) => {
  res.json({ name: '图雀社区', website: 'https://tuture.co' });
});

app.use('*', (req, res) => {
  res.status(404).render('404', { url: req.originalUrl });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500');
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});