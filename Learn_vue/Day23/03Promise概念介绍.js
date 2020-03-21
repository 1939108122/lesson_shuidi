// 1. Promise是一个构造函数 既然是构造函数 那就可以new Promise 得到一个Promise的实例 
// 2. Promise上有两个函数  resolve（成功之后的回调函数）， reject（失败之后的回调函数）
// 3 在Promise的构造函数 Prototype 属性上， 有一个.then 方法 也就是说 Promise构造函数出来的实例 都可以访问到.then方法
// 4. Promise表示一个异步操作 每当我们new一个  Promise 实例 这个实例 就表示一个具体的异步操作 

// var promise = new Promise () //使用


// var promise = new Promise (function() {
//     // function 内部是具体的异步操作 
// })
const fs = require ('fs')
// 每当new 这么一个Promise实例时， 就会立即执行这个一步操作的代码
// var promise = new Promise (function () {
//     fs.readFile('./files/1.txt', 'utf-8', (err, dataStr) => {
//         if(err) throw err
//         console.log(dataStr)
//     })
// })

    function getFilePath (fpath) {
        var promise = new Promise (function () {
            fs.readFile(fpath, 'utf-8', (err, dataStr) => {
                if(err) throw err
                console.log(dataStr)
            })
        })
    }
    getFilePath('./files/1.txt')