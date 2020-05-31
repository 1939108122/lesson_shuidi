import { useState } from 'react'


function demo3() {
  const [color, setColor ] = useState('blue')

  const changeColor = () => {
    setColor(color === 'blue'? 'red': 'blue')
  }
  return (
    <>
      <div>demo3</div>
      <div><button onClick={changeColor}>变色</button></div>
      <style jsx>
        {`
          div{color: ${color}}
          
        `}
      </style>
    </>
  )
}
export default demo3