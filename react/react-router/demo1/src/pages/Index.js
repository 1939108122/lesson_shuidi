import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {cid: 123, title: '果冻上篮'},
        {cid: 456, title: '干拔跳投'},
        {cid: 789, title: '三分绝杀'}
      ]
    }
    this.props.history.push('/home')
  }
  render() { 
    return (
      <div>
        {/* <Redirect to='/home' /> */}
        <h2>
          凯里欧文
        </h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
              <li key={index}>
                <Link to={'/list/'+ item.cid}>{ item.title }</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
 
export default Index;