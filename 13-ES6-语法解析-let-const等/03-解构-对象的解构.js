var obj = {
    name: "why",
    age: 18,
    height: 190
}

var {height,name:newName,age,address:c="广州市"} = obj

console.log(newName);
console.log(c);

function bar({name,age}){
    console.log(name,age);
}