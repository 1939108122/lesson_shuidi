import React, { useState, createContext, useContext } from 'react';

const countContext = createContext()

function Counter () {
  let count = useContext(countContext)
return (<h2>{count}</h2>)
}
function Example () {
  const [ count, setCount ] = useState(0)  //数组解构

  return (
    <div>
      <p>Click me { count }times</p>
      <button onClick={ ()=> { setCount(count+1) }}>Click me</button>
      <countContext.Provider value= {count}>
        <Counter />
      </countContext.Provider>
    </div>
  )
}
 
export default Example;