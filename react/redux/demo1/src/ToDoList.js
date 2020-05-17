import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List} from 'antd'
const data =[
  '早八点',
  '早九点',
  '早十点'
]
class ToDoList extends Component {
  state = {  }
  render() { 
    return ( 
      <div style={{ margin:'10px'}}>
        <div>
          <Input placeholder="请输入内容" style={{ width: '250px', marginRight:"10px"}}/>
          <Button type="primary">增加</Button>
        </div>
        <div  style={{margin: '10px', width:'300px'}}>
          <List bordered dataSource={data} 
          renderItem={item=>(<List.Item>{ item }</List.Item>)} />
        </div>
      </div>
     );
  }
}
 
export default ToDoList;