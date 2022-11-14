var names = ["abs","anb","aop"]
var [item1,item2,item3] = names
console.log(item1,item2,item3);

var [item,...namess] = names
console.log(item,namess);

var [itema,itemb,itemc,itemd="aaaa"] = names
console.log(itema,itemb,itemc,itemd);