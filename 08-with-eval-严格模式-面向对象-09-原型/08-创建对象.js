//字面量形式
var person = {
    name:"haha",
    age:20
}

//工厂模式
//获取不到对象最真实的类型
function personCreate(name,age){
    var per = {}
    per.name = name
    per.age = age
    per.eat = function(){
        console.log(this.name + "在吃");
    }
    return per
}

var p1 = personCreate("张三",20)
var p2 = personCreate("李四",12)

console.log(p1,p2);

//构造函数形式