//程序中多次出现一个数字 + 5 的计算逻辑
//add(5,12)  add(5,19)  add(5+799)
function makeAdder(count){
    return function(num){
        return count + num
    }
}

let adder  = makeAdder(5)
console.log(adder(12));
console.log(adder(19));