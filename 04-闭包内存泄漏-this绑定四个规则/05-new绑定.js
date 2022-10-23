/*
使用new关键字调用函数  this = 新创建出来的对象
1.创建一个全新的对象
2.新对象被执行prototype连接
3.这个新对象被绑定到函数调用的this上(this绑定在这里完成
4.如果函数没有返回其他对象 表达式会返回这个新对象
*/

function Person(name,age){
    this.name = name
    this.age = age
}

var p1 = new Person("why",18)
var p2 = new Person("no why",20)
console.log(p1);
console.log(p2);