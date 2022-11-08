var obj = {
    name:"why",
    age: 19
}

//[[get]]操作
//1。在当前的对象查找属性
//2.没有找到 就在原型对象（__proto__）中去查找
//3.原型对象也是对象 也有原型对象 继续往原型的原型对象中去找
//4.一直找到Object的原型为{}  //每个对象都是Object的子类 都是Object new出来的 new的操作中会把obj.__proto__ = Object.prototype
//所以顶层原型就是Object.prototype
console.log(obj.address);

//但是Object中不是真正的{} 只是不可枚举
//获取Object原型所有属性
console.log(Object.getOwnPropertyDescriptors(Object.prototype));

//5.一直到Object.prototype.__proto__ 为null  找不到则返回undefined