function foo( m,n,x,y){
    return m +n+x+y
}
let num1 = foo( 10,20,30,40)
console.log(num1);

//柯里化的过程
function bar(m) 
{
    return function(n) {
        return function(x){
            return function(y) {
                return m +n+x+y
            }
        }
    }
}
let num2 = bar(10)(20)(30)(40)
console.log(num2);


//简化柯里化函数  省去了大括号和return
var sum3 = x => y => z =>{
    return x + y + z
}

var sum4 = x => y => z => x + y + z

console.log(sum3(10)(20)(30));