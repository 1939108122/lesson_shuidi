import { withRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'


const Team = ({router, list}) => {
  return (
    <>
      <div><Link href='/'><a>返回首页</a></Link></div>
      <div>{list}</div>
      <div> { router.query.name } 加入您的队伍</div>
    </>
  )
}
  Team.getInitialProps = async () => {
    // const promise = new Promise((resolve)=> {
    //   axios.get('http://rap2.taobao.org:38080/app/mock/252084/get/redux').then(
    //     (res)=> {
    //       console.log(res)
    //       resolve(res.data.data)
    //     }
    //   )
    // })
    // return await promise
    const {data: res} = await axios.get('http://rap2.taobao.org:38080/app/mock/252084/get/redux')
    console.log(res)
    return res.data
   
  }

export default withRouter(Team)