import GlobalHeader from './globalHeader'
import '../public/global.css'
import { Button } from 'antd'
function Header () {
  return (
    <>
      <GlobalHeader />
      <div>Head</div>
      <div><Button>我是按钮</Button></div>
    </>
  )
}

export default Header