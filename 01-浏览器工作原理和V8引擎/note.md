# typescript
typescript只是给javascript带来类型的思维
致力于为javascript提供类型检查 而不是取代JS
最终typescript要转换成JS才能真正的运行

JS是高级语言
机器语言  汇编语言  高级语言(编译型语言(可执行文件) 解释型语言)
代码最终都会转换机器指令


# 浏览器工作原理
url  dns解析  IP地址(服务器地址)  服务器返回html文件   浏览器对HTML CSS文件、JS文件进行解析下载

浏览器内核解析文件、
浏览器内核指的是浏览器的排版引擎layout engine
也叫浏览器引擎browser engine 页面渲染引擎rendering engine或样版引擎

## 浏览器渲染过程

HTML ——> DOM-Tree  + Css  ——>Render-Tree + layout(不同浏览器下的布局) ——>painting ——>展示

当遇到javascript标签时HTML就会停止解析并去加载和执行JS代码  Js代码由JS引擎去解析执行

JS引擎将JS代码转化为CPU指令

常见的JS引擎
SpiderMonkey
Chakra
JavascriptCore
V8  Google JS引擎

浏览器内核和JS引擎
以webkit为例
webkit = webCore+JSCore
webCore：负责Html解析 布局 渲染等工作
JSCore：负责解析执行JS代码

小程序JS代码也是由JSCore来解析执行的


## V8引擎
1.V8是用C++编写的Google开源的高性能的Javascript和睦WebAssembly引擎 用于Chrome和Node.js等
2.V8可以在很多平台中使用
他实现ECMAScript和WebAssembly 并在Windows7或更高版本 macOS10.12+或使用X64 IA-32、ARM或MIPS处理器的Linux系统上运行
3.V8可以独立运行 也可以嵌入到任何C++应用程序中

1. diamagnetic被解析 V8引擎内部会创建一个GlobalObject(go)对象{有window属性 指向this}
var globalObject = {
    String : "类",
    Date: "类",
    serTimeout: "类",
    window: globalObject,
    变量：undefined
}
2. 运行代码
- V8为了执行代码 V8引擎内部会有一个执行上下文栈(Execution Context Stock)(函数调用栈)
- 全局代码需要被执行时 创建全局执行上下文GEC(VO变量对象 指向GO + 开始执行代码(这个时候给变量赋值))