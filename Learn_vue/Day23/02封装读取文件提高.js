const fs = require('fs')
const path = require('path')
function getFileByPath(fpath, succCb, errCb) {
fs.readFile(fpath, 'utf-8', (err, dataStr) => {
    if(err) return errCb(err)
    succCb(dataStr)
    })
}

// getFileByPath(path.join(__dirname, './files/1.txt'), function(data){
//     console.log(data)
// }, function(err) {
//     console.log(err.message)
// }
// )
// 需求 先读取文件1 在读取文件2 最后读取文件3

// 此为回调地狱 
// 使用 ES6 中的 promise来解决回调地狱
// promise本质就是单纯的为了解决回调地狱  并不能帮我们减少代码量
getFileByPath(path.join(__dirname, './files/1.txt'),function(data){
    console.log(data)

    getFileByPath(path.join(__dirname, './files/2.txt'),function(data){
        console.log(data)

        getFileByPath(path.join(__dirname, './files/3.txt'),function(data){
            console.log(data)
        })
    })
})