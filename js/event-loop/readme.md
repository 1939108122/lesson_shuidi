what
为了协调事件、用户交互、脚本、渲染、网络等等事件。

浏览器包含了哪些进程
主进程
协调控制其他子进程（创建、销毁）
浏览器界面显示，用户交互，前进、后退、收藏
将渲染进程得到的内存中的Bitmap，绘制到用户界面上
处理不可见操作，网络请求，文件访问等
第三方插件进程
每种类型的插件对应一个进程，仅当使用该插件时才创建
GPU进程
用于3D绘制等
渲染进程，就是我们说的浏览器内核
负责页面渲染，脚本执行，事件处理等
每个tab页一个渲染进程
有哪些 event loop
同源窗口：window event loop
service worker：worker event loop
worklet： worklet event loop
每个事件循环都有一个当前正在运行的 task，
每个事件循环都有一个 microtask queue，
每个事件循环都有一个 performing a microtask checkpoint 布尔值(最初为 false)。

task分类
这部分主要分散在各个标准里面：

microtask:

process.nextTick
MutationObserver
Promise.then
task:

主代码块
setTimeout
setInterval
setImmediate
这里我只找了 mutation-observer
运行
事件循环只要存在，就必须不断地执行以下步骤：
执行 taskQueue 中的第一个可运行任务
Perform a microtask checkpoint，
如果 performing a microtask checkpoint 为 true，return
Set performing a microtask checkpoint to true.
只要 微任务队列不是空 一直执行 microtask
Set the event loop's performing a microtask checkpoint to false.
rendering