import React from 'react';
import { connect } from 'react-redux'

const TodoList = (props) =>{
    let { inputValue, inputChange, clickButton,list } = props
    return (
      <div>
        <div>
          <input  value = { inputValue }
          onChange={ inputChange }/>
          <button onClick={ clickButton }>增加</button>
        </div>
        <ul>
        {
            list.map((item, index)=> {
            return (<li key={index}> {item} </li>)
          })
        }
        </ul>
      </div>
    )
}



 
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      const action = {
        type: 'change_input',
        value: e.target.value
      }
      dispatch(action)
    },

    clickButton(e) {
      const action = {
        type: 'click_button'
      }
      dispatch(action)
    }
  }

}
export default connect(stateToProps, dispatchToProps)(TodoList);