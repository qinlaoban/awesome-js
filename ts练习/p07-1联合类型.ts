export {};

// 联合类型
let mobile: number | string = 13910101010;

mobile = "010-10101001";

let foo = function (type: number | boolean): boolean {
  return !!type;
};
console.log(foo(1));
console.log(foo(true));
