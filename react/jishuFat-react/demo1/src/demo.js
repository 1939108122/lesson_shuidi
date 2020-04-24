import React, { Component, Fragment } from 'react'
import Demo1 from './demo1'
import axios from 'axios'
import Boss from './boss'
import './style.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group' 
class Xiaojiejie extends Component {
  constructor(props) {
    super(props)
    this.state={
      inputValue: '',
      list:['精油推背', '足底按摩']
    }
  }
  componentDidMount() {
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
    .then((res)=> {console.log('axios获取数据成功！'+ JSON.stringify(res))})
    .catch((error)=> {
      console.log('获取数据失败' + error)
    })
  }
  // UNSAFE_componentWillMount() {
  //   console.log('compomentwillmount -----')
  // }
  // componentDidMount() {
  //   console.log('compomentdidmount -----')
  // }
  // shouldComponentUpdate() {
  //   console.log('1-shouldComponentUpdate')
  //   return true
  // }
  // UNSAFE_componentWillUpdate() {
  //   console.log('2-componentWillUpdate')
  // }
  // componentDidUpdate() {
  //   console.log('4-componentDidUpdate')
  // }
  render() {
    // console.log('3-render')
    return (
     <Fragment>
        <div>
          <label htmlFor="focus">增加服务</label>
          <input  id="focus" 
          value={ this.state.inputValue } 
          onChange={ this.inputChange.bind(this) }
          ref = {(input) => { this.input = input }}/>
          <button onClick={this.addList}>增加服务</button>
        </div>
        <ul ref={(ul) =>{this.ul = ul}}>
          <TransitionGroup>
          {
            this.state.list.map((item, index) =>{
            return (
              <CSSTransition
              timeout={2000}
              classNames='boss=text'
              unmountOnExit
              appear={true}>
              <Demo1 key={index+item}
              son={item} index={index}
              deleteItem={this.deleteItem.bind(this)}/>
              </CSSTransition>
            )
            })
          }
         </TransitionGroup>
        </ul>
        <Boss/>
        </Fragment>
    )
  }
  inputChange() {
    this.setState({
      inputValue: this.input.value
    })
  }
  // 增加列表服务
  addList=() => {
    this.setState({
      list:[...this.state.list, this.state.inputValue],
      inputValue:''
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
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