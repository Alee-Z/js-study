//JS只能单继承 怎么实现继承多个类？
class Person {

}

class Runner {
    running() {

    }
}


class Student extends Person {

}


function mixinRunner(BaseClass){
    class NewClass extends BaseClass{
        running() {
            console.log("running");
        }
    }
    return NewClass
}



function mixinEater(BaseClass){
    return class extends BaseClass{
        eating() {
            console.log("eating");
        }
    }
}

var newStudent = mixinEater(mixinRunner(Student))
var stu = new newStudent()
stu.running()
stu.eating()

