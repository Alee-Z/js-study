function double(num){
    return num * 2
}

function square(num) {
    return num ** 2
}

console.log(square(double(2)));

function composeFn(fn1,fn2){
    return function(count){
        return fn1(fn2(count))
    }
}

let doubleSquare = composeFn(square,double)
console.log(doubleSquare(10));