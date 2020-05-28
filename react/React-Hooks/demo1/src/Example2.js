import React, { useState } from 'react';

function Example2 () {
  const [ age, setAge ] = useState(18)  //数组解构
  const [ sex, setSex ] = useState('男')
  const [ work, setWork ] = useState('coding')
  return (
    <div>
      <p>年龄：{age}</p>
      <p>性别：{sex}</p>
      <p>工作：{work}</p>
    </div>
  )
}
 
export default Example2;