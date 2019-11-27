const http = require ('http');
const redis = require('redis');
const client = redis.createClient(6379,'192.168.31.128');
let api_limit = 10;

client.set("hwk_key",10,function(err,obj){
console.log(obj);
})
http.createServer((req,res) => {
if (/^\/api/.test(req.url))
{
    //响应头 ？
    // api_limit--;
    client.get("hwk_key",function(err,count) {
       
        if(count>0)
       {
           client.decrby('hwk_key',1)
        res.end(JSON.stringify({
            name:'蔡徐坤',
            count: `您拥有${count}次调用权`
        }))
       }
       else{
        res.end(JSON.stringify({
            msg:'已到达调用上限，请充值'
          }))
       }
    })
    res.writeHead(200, {
        'Content-Type': 'text/json; charset=utf-8'
    })
    // 状态码 StatusCode 
    // 1xx  请求进行中...  
    // 2xx  成功 
    // 3xx 跳转
    // 4xx  用户端发生错误  
    // 5xx  服务器 
    
    // if(api_limit>=0)
    // {
    //     res.end(JSON.stringify({
    //         name:'蔡徐坤',
    //         count: `您拥有${api_limit}次调用权`
    //     }))
    // }
    // else{
    //     //res 用户访问的响应  响应体  
    //     res.end(JSON.stringify({
    //       msg:'已到达调用上限，请充值'
    //     }))
    // }
}

})
.listen(7001);
