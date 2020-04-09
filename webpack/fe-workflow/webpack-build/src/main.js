require('./style/index.css')  //引入css 文件 

const h2 = document.createElement('h2')
h2.innerText = "testaaa"
h2.className = 'test'
// 挂载点
document.body.append('h2')