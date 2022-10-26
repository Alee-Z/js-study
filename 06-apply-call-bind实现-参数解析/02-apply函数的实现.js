Function.prototype.hyapply = function(thisArg,arg){
    //1.获取需要被执行的函数
    let fn = this
    // 3.对thisArg转成对象类型(防止它传入的是非对象类型)
    thisArg = thisArg ? Object(thisArg):window
    //5.对传入参数做处理
    // arg = arg ? arg : []
    arg = arg || []
    //2.为thisArg隐式绑定this
    thisArg.fn = fn  //4.传入数组参数(第二个参数只能有一个(只能是传一个数组))
    let result = thisArg.fn(...arg)
    delete thisArg.fn
    //6.返回结果
    return result
}


function foo(num1,num2){
    console.log("foo执行",this,num1,num2);
    return num1 +num2
}

foo.apply("abc")

let res = foo.hyapply("abc",[10,20])
console.log(res);
