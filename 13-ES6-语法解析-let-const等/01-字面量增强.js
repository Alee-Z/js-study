var name1="why"
var age = 10
var obj = {
    //属性简写
    name1,
    age,
    //方法简写
    run(){
        console.log("running");
    },
    //计算属性
    [name1+"名字后缀"]: "hahaha"
}

console.log(obj);