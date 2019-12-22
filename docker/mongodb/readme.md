mongodb  nosql里的第一数据库
docker  集装箱 （相当于虚拟机）  一家公司的开发环境迅速上线的核武器  解决开发环境问题
docker pull image (拉取镜像)  
镜像 
- docker run -p 27017:27017 --name mongo -d 18400f87db91 
  运行镜像  -p 端口  --name 运行容器名字    -d (目的地） 
  docker ps -a 查看正在运行的容器 
  docker exec（执行） -it（命令行的交互） mongo（镜像） mongo （it想给她交互的脚本） 
  docker 都是简版的linux 

## mongodb
-use tutorial; 新建一个
- db.users.find({  $or:[ {username:"rose"}, {username:"jones"} ]}) 组合or查询
- db.users.find({  $and:[  {_id:ObjectId("5df9d6ee4f831360bd1f52a7")}, {username:"rose"} ]})    组合and查询
- db.users.update( {"country":"Canada"}, {  $unset:{country:1}})    unset删除一行数据
 db.numbers.createIndex({num:1}); 建立索引利于查询
 db.numbers.getIndexes(); 得到索引
 