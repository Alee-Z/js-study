var name = window
function Person(name){
    this.name = name
    this.foo1 = function(){
        console.log(this.name);
    }
    this.foo2 = ()=>{
        console.log(this.name);
    }
    this.foo3 = function(){
        return function(){
            console.log(this.name);
        }
    }
    this.foo4 = function(){
        return ()=>{
            console.log(this.name);
        }
    }
}

var person1 = new Person("person1")
var person2 = new Person("person2")

// person1.foo1()  //person1
// person1.foo1.call(person2)  //person2

// person1.foo2()  //上层作用域为构造函数  person1
// person1.foo2.call(person2)  //person1

// person1.foo3()()  //独立函数  window
// person1.foo3.call(person2)()    //window
// person1.foo3().call(person2)   //person2


person1.foo4()()   //外层作用域为构造函数  person1
person1.foo4.call(person2)()    //独立函数  person2
person1.foo4().call(person2)   //外层是person1