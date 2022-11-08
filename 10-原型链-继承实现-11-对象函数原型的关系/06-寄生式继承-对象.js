//寄生式继承 原型式继承+工厂继承

var personObj = {
    running: function(){
        console.log("running");
    }
}

function createStudent(name){
    var stu = Object.create(personObj)
    stu.name = name
    stu.studying = function(){
        console.log("studying");
    } 
    return stu
}

var stuObj = createStudent("why")
var stuObj1 = createStudent("kebo")
console.log(stuObj);
console.log(stuObj1);