import React, { useState } from 'react';

function Example () {
  const [ count, setCount ] = useState(0)

  return (
    <div>
      <p>Click me { count }times</p>
      <button onClick={ ()=> { setCount(count+1) }}>Click me</button>
    </div>
  )
}
 
export default Example;