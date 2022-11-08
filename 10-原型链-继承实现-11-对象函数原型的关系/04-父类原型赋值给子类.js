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

//直接将父类原型赋值为子类原型 
//当子类向原型中添加特性方法时直接添加到父类原型中了 这是不行的
Student.prototype = Person.prototype

Student.prototype.studying = function(){
    console.log(this.name + "在学习");
}