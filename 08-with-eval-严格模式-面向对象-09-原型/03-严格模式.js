//1.禁止意外创建全局变量

"use strict";
//msg = "hello"

// function foo(){
//     name = "why"
// }

// foo()
//console.log(name);

//2.不允许函数有相同参数名称
// function foo(x,y,x){
//     console.log(x,y,x);
// }
// foo(10,20,30)

//3.静默错误抛出错误
// true.name = "abc"
// Nan = 123
// var obj = {}
// Object.defineProperty(obj,"name",{
//     configurable:false,
//     writable: false,
//     value: "why"
// })
// console.log(obj.name);

// //4.不允许使用原先的八进制 0123
// console.log(0123);

//5.with语句不允许使用


//6.eval函数不会向上引用变量
var jsString = 'var msg = "hello world";console.log(msg);'
eval(jsString)
console.log(msg); //严格模式下 不能打印msg