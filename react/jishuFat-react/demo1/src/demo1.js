import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class Demo1 extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() { 
    return ( 
    <li onClick={this.handleClick}>{this.props.name}为你服务{this.props.son}</li>
     );
  }
  handleClick() {
    this.props.deleteItem(this.props.index)
  }
}

Demo1.propTypes = {
  name: PropTypes.string.isRequired,
  son: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
 Demo1.defaultProps={
   name:'程潇'
 }
export default Demo1;