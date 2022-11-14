//传统的面向对象多态有三个前提：
//1.必须有继承(式多态的前提)
//2.必须有重写（子类重写父类的方法）
//3.父类的引用指向子类的对象

class Shape{
    getArea() {

    }
}

class Rectangle extends Shape{
    getArea() {
        return 100
    }
}

class Cicle extends Shape{
    getArea() {
        return 200
    }
}

var r = new Rectangle()
var c = new Cicle()
/* TS写法 */
function calcArea(shape: Shape){
    console.log(shape.getArea);
}

calcArea(r)
calcArea(c)