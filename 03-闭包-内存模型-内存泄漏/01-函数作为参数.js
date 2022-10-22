function calc(num1,num2,calcfn){
    console.log(calcfn(num1,num2));
}

function add(num1,num2){
    return num1+num2
}

function sub(num1,num2){
    return num1*num2
}

var n = 10
var m = 20
calc(n,m,add)
calc(n,m,sub)