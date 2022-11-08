//判断方法

var obj = {
    name: "why",
    age: 19
}

var bar = Object.create(obj)

var info = Object.create(obj,{
    address: {
        value: "北京",
        enumerable: true
    }
})

console.log(info.hasOwnProperty("address"));
console.log(info.hasOwnProperty("name"));
console.log("address" in info);
console.log("name" in info);

//2.instanceof  判断构造函数的prototype是否出现在对象的原型链上
console.log(obj instanceof Object);
console.log(Object.prototype.isPrototypeOf(obj));
console.log(obj.isPrototypeOf(bar));

