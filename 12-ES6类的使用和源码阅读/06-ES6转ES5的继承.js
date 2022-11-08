class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    running(){
        console.log(this.name + "running");
    }
}

class Student extends Person {
    constructor(name,age,sno){
        super(name,age)
        this.sno = sno
    }

    studying(){
        console.log(this.name + "studying");
    }
}