var name = "window"

const obj = {
    name:"person",
    sayName:function(){
        console.log(this.name);
    }
}

function sayName(){
    var sss = obj.sayName
    sss()  //独立函数调用
    obj.sayName() //隐式调用
    ;(obj.sayName)() //隐式调用 
    ;(b = obj.sayName)()  //赋值表达式 独立函数调用
}

sayName()