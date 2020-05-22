import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodoList extends Component {
  render() { 
    return (
      <div>
        <div>
          <input  value = { this.props.inputValue }
          onChange={this.props.inputChange}/>
          <button>增加</button>
        </div>
        <ul>
          <li> abc </li>
        </ul>
      </div>
    );
  }
  inputChange(e) {

  }
}
 
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue
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
    }
  }

}
export default connect(stateToProps, dispatchToProps)(TodoList);