// var obj = {
//     //在对象中定义的属性 数据属性默认都为true  value就为对象中赋予的值
//     name: "why",
//     age: 20
// }

// Object.defineProperty(obj,"address",{
//     //默认undefined
//     value: "上海",
//     //默认false 该属性不可删除 也不可以重新定义 属性符
//     configurable : false,
//     //默认false 是否可以枚举
//     enumerable : true,
//     //默认false 是否可以赋值
//     writable: true
// })

// console.log(obj);
// obj.address = "长沙"
// console.log(obj.address);
// delete obj.address
// console.log(obj.address);


//存取属性描述符
//1.隐藏某个私有属性被外界使用和赋值
//2.获取某一个属性它访问和设置值的过程
var obj = {
    name: "why",
    age: 20,
    _address: "上海市"
}

Object.defineProperty(obj,"_address",{
    enumerable: true,//在浏览器中可以看见但是颜色较浅  浏览器为了我们方便调试显示了一下 实质上还是不可枚举的
    configurable: true,
    get: function(){
        foo()
        return this._address
    },
    set: function(value){
        bar()
        this._address = value
    }
})

function foo(){
    console.log("获取一次address的值");
}

function bar(){
    console.log("设置了一次address的值");
}
console.log(obj._address);
obj._address = "北京市"
console.log(obj._address);