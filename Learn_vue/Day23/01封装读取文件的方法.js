const fs = require('fs')
const path = require('path')
// 普通读取文件的方式
// fs.readFile(path.join(__dirname, './files/1.txt'), 'utf-8', (err, dataStr) => {
//     if(err) throw err
//     console.log(dataStr)
// })
function getFileByPath(fpath, callback ) {
fs.readFile(fpath, 'utf-8', (err, dataStr) => {
    if(err) return callback(err)
    // console.log(dataStr)
    callback(null,dataStr)
    })
}
getFileByPath(path.join(__dirname, './files/1.txt'), (err,dataStr) =>{
    // console.log(dataStr)
    if(err) return console.log(err.message)
    console.log(dataStr)

})