class Person{
    //类的构造方法  一个类中只能有一个构造函数
    /*
    new一个函数 得到一个对象
    1.在内存中创建一个新对象(空对象)
    2.将类的原型prototype赋值给新对象的__proto__
    3.将新对象赋值给构造函数的this
    4.执行函数体中的代码
    5.自动返回创建出来的对象
    */
    constructor(name,age){
        this.name = name
        this.age = age
        this._address = "北京"
    }

    running(){
        console.log("running");
    }

    personMethod(){
        console.log("处理逻辑1");
        console.log("处理逻辑2");
    }

    static staticMethod(){
        console.log("personStaticMethod");
    }
    //类的访问器方法
    get address(){
        console.log("拦截访问操作");
        return this._address
    }
    set address(newValue){
        console.log("拦截设置操作");
        this._address = newValue
    }

}

//Student称之为子类（派生类）

/*
//在子类的构造函数中使用this或者返回默认对象之前 必须先通过super调用父类的构造函数
super的使用位置有三个 子类的构造函数 实例方法 静态方法
 */
class Student extends Person{
    
    constructor(name,age,sno){
        //super使用1
        super(name,age)
        // this.name = name
        // this.age = age
        this.sno = sno
    }

    studying(){
        console.log("studying");
    }
    //重写方法
    running(){
        console.log(this.name + "running");
    }

    personMethod(){
        //复用父类代码
        //super使用2
        super.personMethod()
        console.log("处理逻辑3");
        console.log("处理逻辑4");
    }

    //重写静态方法
    static staticMethod(){
        //super使用3
        super.staticMethod()
        console.log("StudentStaticMethod");
    }
}

var stu = new Student("why",19,201801090148)
console.log(stu);
// console.log(Object.getOwnPropertyDescriptors(stu.__proto__.__proto__));
console.log(Object.getOwnPropertyDescriptors(stu.__proto__));
stu.personMethod()
Student.staticMethod()

//静态方法(类方法) 放在类里面
console.log(Object.getOwnPropertyDescriptors(Person));

// stu.address
console.log(stu.address);