let a1: Object = 123;
let a2: Object = "123";
let a3: Object = { name: "zs" };
let a33 = { name: "zs" };
// a33["age"] = "zs";  报错
// a3.age = "123";
let a4: Object = [];
let a5: Object = () => {};

// let o1: object = "12"; // 错误
// let o2: object = 12;  // 错误
// let o3: object = false; // 错误
let o3: object = [];
let o4: object = {};
let o5: object = () => {};

// 字面量模式{} = new Object(); 但是不能赋值
let aa1: {} = 123;
let aa2: {} = "123";
let aa3: {} = { name: "zs" };
// aa3["age"] = 20;
let aa4: {} = [];
let aa5: {} = () => {};
console.log(aa3);
