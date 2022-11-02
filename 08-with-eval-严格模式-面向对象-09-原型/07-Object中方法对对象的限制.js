var obj = {
    name: "why",
    age: 20
}
//1.禁止对象继续添加新的属性
Object.preventExtensions(obj)

obj.address = "广州"
console.log(obj);

//2.禁止对象配置/删除里面的属性

// for(var key in obj){
//     Object.defineProperty(obj,key,{
//         configurable: false,
//         enumerable: true,
//         writable: true,
//         value: obj[key]
//     })
// }
Object.seal(obj)
delete obj.name
console.log(obj);

//3.让属性不可修改
Object.freeze(obj)
obj.name = "改le"
console.log(obj.name);