//通过new构造函数来创建对象
/*
new构造函数
1.创建一个新对象(空对象)
2.新对象(空对象)的隐式原型__proto__赋值为构造函数的显示原型prototype
3.构造函数的this指向新对象(空对象)
4.执行构造函数中的内部代码
5.构造函数没有返回非空对象 则会自动返回创建出来的新对象
*/ 

// 函数写在构造函数里面 每创建一个对象就会创建一个函数对象 会浪费内存

function Person(name,age){
    this.name = name
    this.age = age
    eat = function(){
        console.log(this.name + "在吃");
    }
    run = function(){
        console.log(this.name + "在跑");
    }
}

//所有构造函数创建出来的对象的隐式原型都指向构造函数的显式原型
let p1 = new Person("why",10)
let p2 = new Person("yes",20)
console.log(p1.__proto__ === Person.prototype);
console.log(p2.__proto__ === Person.prototype);

//改善

Person.prototype.eating = function(){
    console.log(this.name + "正在吃东西");
}

p1.eating()