移动端组件的概念
tabs> tab{n}  + listview
1: 小程序的文档
2 vant  UI框架  70%  常用的功能是不需要造轮子的
想用它  但是改造一下 
敢于玩源代码 
components  组件 
页面收组件构成  绝对不是由标签构成
（view ....） 组件化封装 可以被复用
tabs vant  组成页面的tabs 功能
vant 里的组件成为本身项目的一部分  不再整体出现了  定制化框架 



Page({
  commitAccount(e) {
    let values = e.detail.value;
    // console.log(values);
    let  {username, password} = values//检测表单完整性  排除空格键 \s 是空格  +/g全局配置
    if(!username){
      wx.showToast({
        title :'请输入用户名',
        icon: 'none'
      })
      return;
    }
    if(!password){
      wx.showToast({
        title :'请输入密码',
        icon: 'none'
      })
      return;
    }

  }
})










<view class="wrapper page">
  <view class="main">
    <view class="log">
    <image src="../../images/mark-github.svg" />
    </view>
       <tabs>
        <tab title ="账号密码">
            <form bindsubmit="commitAccount"report-submit= '{{true}}' class="form">
          <view >
             <input name = " username" placeholder="输入账号" focus/>
             <input  name = "password" placeholder="输入密码" password='true' value='{{ password}}'/>
             <button class="login" formType='submit'>登录</button>
          </view>
          
        </form>
        </tab>
           <tab title ="Token"></tab>
       </tabs>
  </view>
</view>