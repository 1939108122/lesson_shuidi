const fs = require('fs')

function getFilePath (fpath) {
    return promise = new Promise (function (resolve, reject) {
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            // if(err) throw err
            // console.log(dataStr)
            if(err)  return reject (err)
            resolve(dataStr)
        })
    })
    return promise
}
// .then 指定回调函数的时候  成功的回调函数必须传 失败的回调可以不传 
// 在上一个.then 返回了新的 promise 可以继续用下一个 ，then来处理
// 如果前面的promise执行失败 为了不影响后面的操作不被终止 需要为每个失败的 promise 指定失败的回调
// getFilePath('./files/12.txt')
// .then(function( data ){
//     console.log(data)
//     return getFilePath('./files/2.txt')
// }, function ( err ) {
//     console.log('这是失败的结果：' + err.message )
//     // 返回一个新的promise
//     return getFilePath('./files/2.txt')
// })
// .then(function (data) {
//     console.log(data)
//     return getFilePath('./files/3.txt')
// })
// .then( function (data) {
//     console.log(data)
// })
// console.log('okokok')

getFilePath('./files/12.txt')
.then(function( data ){
    console.log(data)
    return getFilePath('./files/2.txt')
})
    
.then(function (data) {
    console.log(data)
    return getFilePath('./files/3.txt')
})
.then( function (data) {
    console.log(data)
})
.catch( function (err) {  //catch 的作用 如果前面有任何的Promise执行失败 则立即终止 并报出错误不进行后续操作
    console.log(err.message)
})