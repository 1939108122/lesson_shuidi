NOSQL
MYSQL 关系型数据库 
database->table->fields
NOSQL 不需要写SQL 
JSON object {} .save ()
find({}) 
碎片化的， 结构性并不是很良好的数据存储
Mongodb  云开发数据库就是线上版的 
MYSQL              MONGODB 
关系型数据库        NOSQL  Facebook  文档型 
show databases；     show dbs;
               use db;
tables;              collections 
SQL                  js语法的面向对象API 
- 连接mongodb
URL  mongodb：// 
- db.createCollections('site',function(err,res) {
    //err 出错 
    //异步的，耗时的，
    js 里执行的代码不会堵塞， 
    db.close();
})
代码顺序 
1. createCollections 
2. db.close() 在外面
执行顺序 
1. create -> 去到mongodb -> create-> 回来跟我说 
2. 接着往后执行  
- 数据库  后端开发框架
express 
node,  后端就是app
app.get('/',(req,res) =>
res.send('hello,world'))
app.listen(3000,)