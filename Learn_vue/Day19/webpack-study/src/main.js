//main.js 是我们项目的js入口文件
//1.导入jquery importES6 导入模块的方式 
import $ from 'jquery'

$(function () {
    $('li:odd').css('backgroundColor', 'yellow')
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
    })
})
//webpack 做的事情
//  1 webpack可以处理js文件的互相依赖关系 
//  2 webpack 可以 处理JS的兼容问题  把高级的不适用浏览器的语法 转换为浏览器可以使用的语法