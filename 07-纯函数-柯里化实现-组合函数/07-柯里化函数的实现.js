//传入一个函数 自动帮我们转为柯里化函数

// function foo(n1,n2,n3,n4){

// }
// console.log(foo.length);  //4

function currying(fn){//接收一个函数作为柯里化对象
    return function curried(...args){//返回已经柯里化完成的函数
        //1.判断当前已经接收的参数个数和原函数的参数个数是否一致
        //当传入参数 大于等于 原函数参数个数 就直接执行函数
        if(args.length >= fn.length){
            //fn(...args)
            //fn.call(this,...args)
            return fn.apply(this,args)  //确保this的指向？
        }else{
            //没有达到个数的时候 返回新的函数继续接收参数
            return function curried2(...args2){
                //接收参数后 需要递归调用curried函数来检查函数个数是否达到
                return curried.apply(this,[...args,...args2])
            }
        }

    }

}

function printLog(date,type,name){
    console.log(`[${date}]:[${type}]:[${name}]`);
}

let curryLog = currying(printLog)

curryLog(new Date())("DEBUG")("轮播图的bug")


function add(n1,n2,n3){
    return n1+n2+n3
}
let addCurry = currying(add)
console.log(addCurry(10)(20)(30));


//this解释
//当原函数是通过call apply来调用函数的时候 
//柯里化不能把用户想要显示指向的this改成window
function foo(n1,n2,n3){
    return n1+n2+n3
}

foo.call("why",1,2,3)
var curryfoo = currying(foo)
curryfoo.call("why",1)//柯里化的实现需要把"why"作为this 而不是window