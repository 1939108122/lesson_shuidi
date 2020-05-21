import { GET_MY_LIST, CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addInputItem = () => ({
  type: ADD_ITEM
})

export const deleteInputItem = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getList = (data) => ({
  type: GET_LIST,
  data
})
export const getTodoList = () => {
  return (dispatch) => {
  axios.get('http://rap2.taobao.org:38080/app/mock/252084/get/redux')
  .then((res) => {
    const data = res.data
    const action = getList(data)
    dispatch(action)
  })
  }
}

export const getMyListAction = () => ({
  type: GET_MY_LIST
})