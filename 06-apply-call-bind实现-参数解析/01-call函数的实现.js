//给所有的函数添加一个hycall()函数

Function.prototype.hycall = function(thisArg,...arg){
    //1.call可以执行调用的函数(foo)
    let fn = this
    //fn()
    //3.指定的this不止对象 还有其他的类型或(null undefined)
    // thisArg = thisArg ? Object(thisArg) : window
    //当传入第一个参数为0时要做判断
    thisArg = (thisArg !== null && thisArg !==undefined) ? Object(thisArg) :window
    //2.系统call可以绑定调用函数this的指定 传参
    thisArg.fn = fn
    let result = thisArg.fn(...arg) //给this来个隐式指定 4.传入参数 5.返回结果
    delete thisArg.fn //指定后删除fn属性
    return result
}

function foo(){
    console.log("foo函数被执行",this);
}

function sum(num1,num2){
    return num2+num1
}

//系统的call
// foo.call("abc")
// sum.call("abc",20,30)

//自己实现的call
foo.hycall({name:"why"})
foo.hycall("abc")
console.log(sum.hycall("abc",20,30)); 