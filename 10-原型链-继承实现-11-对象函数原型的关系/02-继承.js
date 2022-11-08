//父类 公共属性和方法
function Person(name){
    this.name = "name",
    this.friend = []
}
Person.prototype.eating = function(){
    console.log(this.name + "在吃东西");
}


function Student(){
    this.sno = 111
}
//在给studying赋值之前就要确定好Student的原型对象 不然会找不到studying
//原型链的继承                             
var p = new Person()
Student.prototype = p

Student.prototype.studying = function(){
    console.log(this.name + "在学习");
}

var stu = new Student()

// console.log(stu.name);
// stu.eating()
// stu.studying()

//原型链继承的弊端
//1.打印stu对象 继承属性时看不到的(不可枚举)
// console.log(stu);
// console.log(stu.name);

//2.创建出来的两个对象  //往person中添加新属性friend
var stu2 = new Student()
//直接修改对象上的属性 给本对象添加一个新属性
stu.name = "stu1"
console.log(stu.name);
console.log(stu2.name);

//获取引用 修改引用中的值 会互相影响  【数组】
// stu.friend = []   //这种就是直接赋值
stu.friend.push("kobe")   //这个是先查找 查找到之后i在push进去
console.log(stu.friend);
console.log(stu2.friend);

//3.实现类的时候还不能传递参数