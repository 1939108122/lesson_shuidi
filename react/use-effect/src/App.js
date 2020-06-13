import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';



function Counter() {
  const [count, setCount] = useState(0)
  function handleShow() {
    setTimeout(() => {
      console.log(count);
    }, 3000);
  }
  function handleAdd() {
    setCount(count + 1);
  }
  return (
    <div>
      count: { count }
      <button onClick={handleAdd}> + </button>
      <button onClick={handleShow}>show count</button>
    </div>
  )
}


function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
