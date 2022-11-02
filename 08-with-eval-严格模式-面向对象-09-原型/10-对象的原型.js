//prototype

function Person() {

}


// 原型上的属性
console.log(Person.prototype);
console.log(Object.getOwnPropertyDescriptors(Person.prototype));
//不可枚举

//prototype.constructor指向构造函数本身
console.log(Person.prototype.constructor);

console.log(Person.prototype.constructor.name);


//可以自行在原型中添加属性
Person.prototype.age = 10
Person.prototype.address = "北京市"

//可以直接修改prototype对象
//意味着在内存中创建新的对象 
Person.prototype = {
    name:"why",
    age: 20,
    address: "北京"
}

var p1 = new Person()
console.log(p1.__proto__);

//真实开发中 通过Object.defineProperty添加构造器
Object.defineProperty(Person.prototype,"constructor",{
    configurable: false,
    enumerable: true,
    writable: true,
    value: Person
})