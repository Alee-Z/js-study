// function printLog(date,type,name){
//     console.log(`[${date}]:[${type}]:[${name}]`);
// }

// printLog(new Date(),"DEBUG","轮播图的bug")
// printLog(new Date(),"DEBUG","轮播图的bug")
// printLog(new Date(),"DEBUG","更新迭代错误")
// printLog(new Date(),"ERROR","轮播图的bug")


let printLog = date => type => name =>{
    console.log(`[${date}]:[${type}]:[${name}]`);
}



let nowLog = printLog(new Date())
nowLog("DEBUG")("轮播图的bug")

let nowAndDebugLog = printLog(new Date())("DEBUG")
nowAndDebugLog("更新错误")


