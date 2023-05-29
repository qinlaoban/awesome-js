//
// 1.top type 顶级类 any unknow
// 2.object
// 3.Number、String、Array、Boolean
// 4.number、string、boolean
// 5.1 ‘李银河’ false
// 6 never

// any可以赋值给任意类型

let num: any = "你好哇";
num = {};
num = null;
num = undefined;

// unknow 只能赋值给unknow或any
// 无法调用属性、方法
// unknow 比any 更加安全
let libai: unknown = { name: "李白" };
let k: any = {};
libai = k;
