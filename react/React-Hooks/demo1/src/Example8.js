import React, { useRef, useState, useEffect } from 'react';

function Example8 () {
  const inputEL = useRef(null)
  const buttonClick = () => {
    inputEL.current.value = 'hello, world'
    console.log(inputEL)
  }

  const [ text, setText ] = useState('666')
  const textRef = useRef()
  useEffect(() => {
    textRef.current = text
    console.log('textRef.current', textRef.current)
  })
  return (
    <>
      <input ref= {inputEL} type="text" />
      <button onClick={buttonClick}>在input上展示文字</button>

      <br/>
      <br/>
      <input value= {text} onChange={(e)=> {setText(e.target.value)}} />
    </>
   
  )
}

export default Example8