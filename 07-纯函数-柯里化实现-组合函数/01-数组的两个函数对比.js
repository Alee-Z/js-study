var names = ["abd","ggg","kkk","jjjj"]


//slice只要给他传入一个start/end 会给我们返回一个确定的值
//slice本身不会修改原数组的值
//slice函数就是一个纯函数
// var name1 = names.slice(0,2)
// console.log(name1);
// console.log(names);


//splice函数在执行时 会修改原数组对象 即产生了副作用 start：从什么位置开始截取
//splice不是一个纯函数 
var name2  = names.splice(2)
console.log(name2);
console.log(names);