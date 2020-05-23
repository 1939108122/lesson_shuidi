const defaultState = {
  inputValue: 'stupid computer',
  list: []

}

export default (state = defaultState, action) => {

  if (action.type === 'change_input')
  {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === 'click_button')
  {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  return state
}