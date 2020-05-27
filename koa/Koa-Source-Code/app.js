let Koa = require('./application')

let app = new Koa()



app.use((crx, next) => {
  console.log(1)
  next()
  console.log(2)
})
app.use((crx, next) => {
  console.log(3)
  next()
  console.log(4)
})
app.use((crx, next) => {
  console.log(5)
  next()
  console.log(6)
})

// app.use((ctx) => {
//   ctx.body = 'hello world'
//   console.log(ctx.body)
// })
app.listen(3000,()=> {
  console.log('server is running at port 3000')
})