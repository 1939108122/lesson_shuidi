// console.log('ok')
import './css/index.css'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'



// class 关键字 是es6的新语法 是用来实现ES6 面向对象编程的方式 
class Person {
    static info = {name: '小红', age: 20}  //static 可以定义静态属性 
    // 所谓静态属性 是可以直接通过类名 直接访问属性 eg：Person.name 
    //对立面为 实例属性 ： 只能通过类的实例来访问的属性 
}

console.log(Person.info)
// var p1 = new Person() 


// function Animal(name) {
// this.name = name
// }

// Animal.info = 123

// var a1= new Animal('小花')
// // console.log(Animal.info)  此为静态属性

// console.log(a1.name)  此为实例属性