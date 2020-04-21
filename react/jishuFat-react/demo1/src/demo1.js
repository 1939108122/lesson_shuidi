import React, { Component } from 'react';

class Demo1 extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() { 
    return ( 
    <li onClick={this.handleClick}>{this.props.son}</li>
     );
  }
  handleClick() {
    this.props.deleteItem(this.props.index)
  }
}
 
export default Demo1;