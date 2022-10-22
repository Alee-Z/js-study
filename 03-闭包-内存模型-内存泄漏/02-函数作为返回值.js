// function foo(){
//     console.log("foo");
//     function bar(){
//         console.log("bar");
//     }
//     return bar
// }

// var fn = foo()
// fn()

function makeAdder(count){
    function add(num){
        console.log(count+num);
    }
    return add
}
var add5 = makeAdder(5)
add5(10) //使用完5后没有被销毁
add5(1)

var add100 = makeAdder(100)
add100(1)