//main.js 是我们项目的js入口文件
//1.导入jquery importES6 导入模块的方式 
import $ from 'jquery'
import './css/index.css' //使用import导入 css样式表 要用第三方loader加载器这个才可以使用 处理css需要下载style-loader & css-loader插件
import './css/index.less'
import './css/index.scss'
$(function () {
    $('li:odd').css('backgroundColor', 'black')
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
        
    })
})
//webpack 做的事情
//  1 webpack可以处理js文件的互相依赖关系 
//  2 webpack 可以 处理JS的兼容问题  把高级的不适用浏览器的语法 转换为浏览器可以使用的语法