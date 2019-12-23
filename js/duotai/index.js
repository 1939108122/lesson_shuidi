function Person(name, age) {
    this.name = name;
    this.age = age;
}
// 覆盖了Object原有的toString方法
Person.prototype.toString = function () {
    return 'I am a Person , my name is ' + this.name;
}
function Man(name,age) {
    // Person 构造函数  把父类的构造函数执行一下
    console.log(arguments, '----');
    Person.apply(this, arguments);//继承父类的东西
}
Man.prototype = Object.create(Person.prototype);
Man.prototype.toString = function () {
    return 'i am a 007, my name is '+ this.name;

}
var cxc = new Man("陈新初", 19);
console.log(cxc +"");
//toString 覆盖

console.log(cxc.name);
var person = new Person('菜虚困', 21.5);
console.log(person + "");  // 类型转化 
const arr = ['陈新初','陈方闻'];
console.log(Object.prototype.toString.call(arr));//{ }
// [object Array] 
