import React, { useState, useMemo } from 'react';

function Example7 () {
  const [ kyrie, setKyrie ] = useState('果冻上篮')
  const [ durant, setDurant ] = useState('无解中投')

  return (
    <>
    <button onClick={ () => {
      setKyrie(new Date().getTime())
    }}>凯里</button>

    <button onClick={ () => {
      setDurant(new Date().getTime() + '死神')
    }}>杜兰特</button>
    <ChildComponent name={kyrie}>{durant}</ChildComponent>
    </>
  )
}

function ChildComponent ({name, children}) {
  function changeKyrie() {
    console.log('他来了')
    return name+'他来了'
  }
  const actionKyrie = useMemo(() => changeKyrie(name), [name] )

  return (
    <>
      <div>{actionKyrie}</div>
      <div>{children}</div>
    </>
  )
}

export default Example7