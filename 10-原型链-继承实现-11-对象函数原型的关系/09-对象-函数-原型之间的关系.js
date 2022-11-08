var obj = {
    name: "why"
}

function Function(){}

function Object(){}


//对象中存在__proto__对象 隐式原型对象

//Foo是一个函数 他就会有一个显式原型对象
//Foo.prototype来自哪里？
//答案：创建一个函数 Foo.prototype = {constructor: Foo}


//同时 Foo也是一个对象 会有隐式原型__proto__
//Foo.__proto__来自哪里
//答案：new Function()  Foo.__proto__ = Function.prototype
//Foo.prototype = {constructor: Foo}

// Foo = new Function()
function Foo(){

}
console.log(Function.prototype === Function.__proto__);

var foo = new Foo()