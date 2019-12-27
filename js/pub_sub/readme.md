事件监听   执行逻辑 
浏览器  chrome.exe 启发一个进程
js是chrome里的语言编译器 来执行的 
html +css DOM树  树 数据结构 
js 执行 脚本 
事件 异步 
- 注册事件 ？   micro event 
回调函数 
事件发生怎么执行？ 
js 单线程语言  onload 
轮循注册事件的地方 
订阅  发布者模式 
房  楼盘 发布者（有房卖的信息）
买房者  订阅者  
建模 
- listen  加订阅者  
saleoffices.clientList.push(fn);形成订阅关系 
saleoffices 发布者 
trigger 有事通知  
把所有的订阅者都执行一次 
apply  函数除运行外  指定其this 指向 
arguments document.body.addEventListener('click',fn);
document.body  发布者  有订阅者 fn
document.body.events = []
click 
trigger 
event.each(fn);

