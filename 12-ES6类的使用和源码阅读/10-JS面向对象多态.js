function calcArea(foo){
    console.log(foo.getArea());
}

var obj1 = {
    name: "hwy",
    getArea : function(){
        return 1000
    }
}

class Person{
    getArea(){
        return 100
    }
}

var p = new Person()
//也符合多态的定义
calcArea(p)
calcArea(obj1)

//这个sum也是多态
function sum(a,b){
    return a+b
}
sum(1,2)
sum("abc","klp")