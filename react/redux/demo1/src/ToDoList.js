import React, { Component } from 'react';
import store from './store'
import { getMyListAction, changeInputAction, addInputItem, deleteInputItem, getTodoList } from './store/actionCreators'
import ToDoListUI from './TodoListUI'

class ToDoList extends Component {
  constructor(props) {
    super(props)
    // console.log(store.getState())
    this.state = store.getState()
    this.changeInputValue  = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.addInputValue = this.addInputValue.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)  //订阅的意思是 store的inputValue改变了，但是组件的input没有改变，需要进行同步
  }
  render() {
    return ( 
      <ToDoListUI
      inputValue={ this.state.inputValue }
      changeInputValue={ this.changeInputValue }
      addInputValue={ this.addInputValue }
      list={ this.state.list }
      deleteItem={ this.deleteItem }
      />
     );
  }
  componentDidMount() {
    // const action = getTodoList()
    // store.dispatch(action)
    const action = getMyListAction()
    store.dispatch(action)
    console.log(action)
  }

  changeInputValue(e) {
    let action = changeInputAction(e.target.value)
    store.dispatch(action)
    // console.log(this.state) 
  }
  storeChange() {
    this.setState(store.getState())
  }
  addInputValue() {
    let action = addInputItem()

    store.dispatch(action)
  }
  deleteItem( index )
  {
    let action = deleteInputItem(index)
    store.dispatch(action)
  }
 }
 
export default ToDoList;