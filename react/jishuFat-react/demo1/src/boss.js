import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
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
        <CSSTransition classNames = "boss-text"
        in={this.state.isShow}
        timeout={2000}>
        <p>Boss级人物: spider man</p>
        </CSSTransition>
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