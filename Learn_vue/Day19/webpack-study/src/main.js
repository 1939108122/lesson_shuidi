//main.js 是我们项目的js入口文件
//1.导入jquery importES6 导入模块的方式 
import $ from 'jquery'
$(function() {
    $('li:odd').css('backgroudColor', 'lightblue')
    $('li:even').css('backgroudColor', function(){
        return '#' + 'D97634'
    })
})