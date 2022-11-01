//纯函数
function foo(n1,n2){
    return n1+n2+n1*n2
}

//不是纯函数
var name = "abc"
function bar(){
    console.log("bar执行");
    name = "ggg"
}

//不是纯函数
function baz(info){
    info.age = 100
}
let obj = {name:"why",age:19}

//纯函数  纯函数修改变量 不动原始对象并返回一个吻新对象
function test(info){
    return {
        ...info,
        age:100
    }
}