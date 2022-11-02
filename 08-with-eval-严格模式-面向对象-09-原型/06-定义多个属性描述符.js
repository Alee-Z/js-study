var obj={
    //私有属性 (ja里面没有严格意义上的私有属性) 约定的规定 下划线开头的为私有属性、私有方法
    _age :18,
    _eating: function(){},
    get age(){
        return this._age
    },
    set age(value){
        this._age = value
    }
}
Object.defineProperties(obj,{
    name: {
        configurable: true,
        enumerable : true,
        writable: true,
        value: "why"
    },
    // age: {
    //     configurable: true,
    //     enumerable:true,
    //     get: function() {
    //         return this._age
    //     },
    //     set: function(value) {
    //         this._age = value
    //     }

    // }
})

obj.age = 19
console.log(obj.age);
console.log(obj);


//获取属性的属性描述符
console.log(Object.getOwnPropertyDescriptor(obj,"_age"));
console.log(Object.getOwnPropertyDescriptor(obj,"name"));

console.log(Object.getOwnPropertyDescriptors(obj));