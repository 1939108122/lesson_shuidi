var cloud=require('wx-server-sdk');//云服务器
var rp=require('request-promise');//npm 各api发出请求
cloud.init();

exports.main=async(event,context)=>{
  console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=d1db20454f65a447f11acf30a54f4587`)
  var res=rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=d1db20454f65a447f11acf30a54f4587`)
  .then(html=>{
    return html;
  })
  return res;
}