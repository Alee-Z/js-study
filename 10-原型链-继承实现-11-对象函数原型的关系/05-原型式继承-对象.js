 var obj = {
     name:"why",
     age:20
 }

 function createObject1(o){
     var newObj = {}
     Object.setPrototypeOf(newObj,o)
     return newObj
 }

 function createObject2(o){
     function fn(){}
     fn.prototype = o
     var newObj = new fn()
     return newObj
 }

 var info = createObject1(obj)
 var info2 = createObject1(obj)
 var info3 = Object.create(obj)
 console.log(info);
 console.log(info.__proto__);