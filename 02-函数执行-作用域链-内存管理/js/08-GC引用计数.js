var obj = {name:"why"}

var obj2 = {name:"kk",friend:obj}

var obj3 = {name:"pp",friend:obj}

//引用计数存在一个很大的弊端 :循环引用
var obj1 = {friend:obj2}
var obj2 = {friend:obj1}

//永远不会释放 造成内存泄漏