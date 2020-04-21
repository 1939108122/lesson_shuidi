import React, { Component, Fragment } from 'react'
import Demo1 from './demo1'
import './style.css'

class Xiaojiejie extends Component {
  constructor(props) {
    super(props)
    this.state={
      inputValue: '',
      list:['精油推背', '足底按摩']
    }
  }
  render() {
    return (
     <Fragment>
        <div>
          <label htmlFor="focus">增加服务</label>
          <input  id="focus" value={ this.state.inputValue } onChange={ this.inputChange.bind(this) }/>
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) =>{
            return <li>
                    <div>
                      <Demo1/>
                    </div>
                   </li>
            })
          }
        </ul>
        </Fragment>
    )
  }
  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  // 增加列表服务
  addList() {
    this.setState({
      list:[...this.state.list, this.state.inputValue],
      inputValue:''
    })
  }
  // 删除列表项
  deleteItem(index) {
    var list = this.state.list
    list.splice(index,1)
    this.setState({
     list:list
    })
    
  }
}
export default Xiaojiejie