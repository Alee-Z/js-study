var name = window

const person1 = {
    name:"person1",
    foo1 :function(){
        console.log(this.name);
    },
    foo2 : ()=>{
        console.log(this.name);
    },
    foo3 : function(){
        return function(){
            console.log(this.name);
        }
    },
    foo4 : function(){
        return ()=>{
            console.log(this.name);
        }
    }
}

var person2 = {
    name:"person2"
}

// person1.foo1()
// person1.foo1.call(person2)

// person1.foo2()  //上级作用域是全局作用域 对象不算作用域  打印window
// person1.foo2.call(person2) //打印window

// person1.foo3()() //独立函数  window
// person1.foo3.call(person2)()   //独立函数 window
// person1.foo3().call(person2)  //显示调用 person2


person1.foo4()()  //person1
person1.foo4.call(person2)()   //person2
person1.foo4().call(person2)   //person1