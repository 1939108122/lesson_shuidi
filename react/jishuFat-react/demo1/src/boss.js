import React, { Component } from 'react'

class Boss extends Component {
  constructor(props) {
    super(props)
    this.state ={
      isShow: true
    }
    this.addBoss = this.addBoss.bind(this)
  }
  render() { 
    return (
      <div>
        <p className={this.state.isShow?'show':'hide'}>Boss级人物: spider man</p>
        <button onClick={this.addBoss}>增加Boss</button>
      </div>
    );
  }
  addBoss() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
 
export default Boss;