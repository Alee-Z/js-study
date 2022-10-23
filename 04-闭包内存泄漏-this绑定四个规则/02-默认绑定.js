//1
// var obj = {
//     name:"why",
//     foo:function(){
//         console.log(this);
//     }
// }
// var bar = obj.foo
// bar() //window

//2
// function foo(){
//     console.log(this);
// }
// const obj = {
//     name:"why",
//     foo:foo
// }

// var bar = obj.foo
// bar() //window

//3
var obj = {
    name:"why",
    eating:function(){
        console.log(`${this.name}在吃东西 ${this}`);  
    }
}
var fn = obj.eating
fn()