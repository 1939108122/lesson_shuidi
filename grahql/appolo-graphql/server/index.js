const Koa = require('koa')
const { ApolloServer, gql } = require('apollo-server-koa')
const cors = require('@koa/cors')
const { readFile } = require('./utils')
const typeDefs = gql`
type TodoItem {
  id: ID
  content: String
  checked: Boolean
}
type Query {
  TodoList: [TodoItem!]
}
`
const resolvers = {
  Query: {
    TodoList: async () => {
      const data = await readFile('./mock/index.json')
      const todoList = JSON.parse(data)
      return todoList
    }
  }
}
const server = new ApolloServer({
  typeDefs,
  resolvers
})
const app = new Koa()
server.applyMiddleware({ app })
app.use(cors())
app.listen(3001)