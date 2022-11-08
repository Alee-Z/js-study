function createObject(o){
    function Fn(){}
    Fn.prototype = o
    return new Fn()
}

function inheritPrototype(SubType, SuperType){
    // SubType.prototype = Object.create(SuperType.prototype)
    SubType.prototype = createObject(SuperType.prototype)
    Object.defineProperty(SubType.prototype,"constructor",{
    configurable: true,
    enumerable: false,
    writable: true,
    value: SubType
});
}

function Person(name,age,friend){
    this.name = name
    this.age = age
    this.friend = friend
}

Person.prototype.eating = function(){
    console.log("eating");
}

function Student(name,age,friend,sno,score){
    Person.call(this,name,age,friend)
    this.sno = sno
    this.score = score
}

//继承父类的方法  新创建对象 衔接在父子之间
// Student.prototype = Object.create(Person.prototype)
// Object.defineProperty(Student.prototype,"constructor",{
//     configurable: true,
//     enumerable: false,
//     writable: true,
//     value: Student
// })
inheritPrototype(Student, Person);

Student.prototype.studying = function(){
    console.log("studying");
}



var stu = new Student("why",20,["kebo,steven"],201801090148,90)
console.log(stu);
stu.eating()
stu.studying()
//当前类型还是Person 
console.log(stu.constructor.name);