## call apply bind函数实现
### call
```
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
```

### apply
```
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
```
### bind
```
Function.prototype.hybind = function(thisArg,...argArr){
    //1.获取当前函数this
    var fn = this
    //2.绑定this
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) :window

    return function proxyFn(...args){
        thisArg.fn = fn
        let result = thisArg.fn([...argArr,...args])
        delete thisArg.fn
        return result
    }
}

```
## arguments

arguments是一个传递给函数的参数的类数组对象

函数执行前 arguments放在对应函数的AO中

1. 获取参数的长度
   arguments.length
2. 根据索引获取参数
   arguments[2]
3. 获取arguments所在的函数
   arguments.callee

没有数组中的方法 如forEach map

## arguments转数组
```
// 1.自己for遍历进一个新的空数组
    //2.arguments转数组  slice里面的实现也是遍历
    let arr = Array.prototype.slice.call(arguments)
    let arr2 = [].slice.call(arguments)
    //3.
    let arr3 = Array.from(arguments)
    //4
    let arr4 = [...arguments]
```

## 箭头函数中没有arguments

//node里面的arguments是全局中的  浏览器运行会报错
//箭头函数中没有arguments  会在上层作用域中找
