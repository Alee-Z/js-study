function composeFn (...fns){
    let length = fns.length;
    for(let i=0;i<length;i++){
        if(typeof fns[i] !== "function"){
            throw new TypeError("Expected arguments are functions")
        }
    }
    return function compose(...args){
        let index = 0
        let result = length ? fns[index].apply(this,args) : args
        while(++index < length){
            result = fns[index].call(this,result)
        }
        return result
    }
}

function double(num){
    return num * 2
}

function square(num) {
    return num ** 2
}
 

let fn = composeFn(double,square)
console.log(fn(10));