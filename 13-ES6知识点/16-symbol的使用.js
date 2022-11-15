//ES6之前 对象的属性名都是字符串
//很容易在添加新属性和值时 产生属性名的冲突 从而覆盖掉内部的某个属性
//通过symbol生成独一无二的值 然后作为属性名
//ES6中可以用字符串作为属性名 也可以用symbol作为属性名

const obj = {
    name : "why",
    age: 20
}

console.log(Object.keys(obj));

const s1 = Symbol()
const s2 = Symbol()
//aa是symbol值s3的描述
const s3 = Symbol("aa")

//Symbol值作为key
const obj2 = {
    [s1]: "ajh",
    [s2]: "ghs"
}

obj2[s3] = "kkk"


const s4 = Symbol()
Object.defineProperty(obj2,s4,{
    enumerable: true,
    configurable: true,
    writable: true,
    value: "nba"
})

console.log(obj2[s1]);
console.log(obj2);
console.log(Object.keys(obj2));
console.log(Object.getOwnPropertyNames(obj2));
console.log(Object.getOwnPropertySymbols(obj2));
const keys = Object.getOwnPropertySymbols(obj2)
for(const skey of keys){
    console.log(obj2[skey]);
}

//
const sa = Symbol.for("aaa")
const sb = Symbol.for("aaa")
console.log(sa===sb);

const keyF = Symbol.keyFor(sa)
console.log(keyF);
const sc = Symbol.for(keyF)
console.log(sb===sc);