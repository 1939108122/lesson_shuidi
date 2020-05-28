import React, { useState, useEffect, useCallback } from 'react';

function useWinSize() {
  const [ size, setSize ] = useState(
    {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  )
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])

  useEffect(()=> {
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return size
}

function Example9() {
  const size = useWinSize()
  return (
    <div>
      <h3>页面大小： {size.width}*{size.height}</h3>
    </div>
  )

}

export default Example9