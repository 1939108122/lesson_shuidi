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
getFilePath('./files/1.txt')
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