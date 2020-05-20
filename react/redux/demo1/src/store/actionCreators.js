import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

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