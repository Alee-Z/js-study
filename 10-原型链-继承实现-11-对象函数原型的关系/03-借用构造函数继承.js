function Person(name,friend){
    //这里this指向新创建的student对象 //相当于给student自己的对象中添加新属性
    this.name = name,
    this.friend = friend
}
Person.prototype.eating = function(){
    console.log(this.name + "在吃东西");
}


function Student(name,friend,sno){
    //借用构造函数继承    this指向新创建的student对象 并且把参数传递给person
    Person.call(this,name,friend)
    this.sno = sno
}
//在给studying赋值之前就要确定好Student的原型对象 不然会找不到studying
//原型链的继承                             
var p = new Person()
Student.prototype = p

Student.prototype.studying = function(){
    console.log(this.name + "在学习");
}

var stu1 = new Student("1111",["111的朋友"],11)
console.log(stu1);

var stu2 = new Student("2222",["222的朋友"],22)
console.log(stu2);

//借用构造函数弊端
//1.person构造函数被调用了两次
//2.stu的原型对象上多出一些undefined的属性 这些属性是不必要的

