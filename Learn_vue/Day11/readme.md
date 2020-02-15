Vue 实例的生命周期 
什么是生命周期 ： 从 Vue创建 运行 销毁期间， 总是伴随着各种各样的事件 这些事件 统称为生命周期（又叫生命周期钩子）
beforeCreate  beforeCreate生命周期函数执行的时候 data和method中的数据都还没有初始化
created        在created函数中  data和methods 都已经被初始化好了 想调用methods 或者操作 data 里面的数据 最早可以在created函数中使用
beforeMount     在beforeMount 执行的时候 页面中的元素 还没有被真正替换过来 只是之前的 写的一些模板字符串(还未挂载到页面)
Mounted        实例已经被完全创建好了
beforeUpdate  这时候  表示我们的界面还没有更新【 数据被更新了只是没有渲染到界面上】当执行beforeUpdate函数时 页面上显示的数据 还是旧的 此时data 数据是最新的
updated  函数执行后 页面和data数据已经保持同步了 都是最新的
