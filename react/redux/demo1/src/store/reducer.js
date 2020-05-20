import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

const defaultState = {
  inputValue: '今天只做一件事',
  list: [
    '代码',
    'coding',
    '什么叫惊喜啊'
  ]
}
export default (state = defaultState, action) => {
  // console.log(state, action)
  // reducer只能接收state 不能改变state
  if (action.type === CHANGE_INPUT)
  {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    // console.log(state.inputValue)
    return newState
  }
  if (action.type === ADD_ITEM)
  {
   let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_ITEM)
  {
   let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  return state
}