npm init -y 项目的初始化
java 一样来做后端 企业级开发框架
npm init egg --type=simple 
- app
node 应用程序  主要代码 
config 配置文件夹
test  测试目录 

-egg 架构 
脚手架快速构建项目结构 
web http协议 
rounter.js  配置路由
->controller (ctx.request body)
-> model 

npm i sequelize-cli -D 
-D ?  devDependencies
开发阶段的依赖  MySQL 的处理 
创建表 
执行SQL 
sequelize-cli (sequelize-cli用于支持数据迁移和项目引导)command-line 命令行 

- sequelize 命令行集锦 
sequelize init 初始化MySQL的工作目录
- config.json 
sequelize db:create 
创建一个表 
