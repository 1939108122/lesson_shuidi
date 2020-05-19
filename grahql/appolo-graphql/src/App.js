import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import { ApolloProvider }from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { Card } from 'antd'
import ToDoList from './components/TodoList'
// <ApolloProvider>是graphql框架

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql' //来自服务端
})
function App() {
  return (
    <ApolloProvider client={client}>
      <Card style={{ width: "600px", margin: "100px anto"}}>
        <h1>Graphql</h1>
        <ToDoList />
      </Card>
    </ApolloProvider>
  );
}

export default App;
