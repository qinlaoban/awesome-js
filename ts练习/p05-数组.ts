export {};

let arr: Array<number> = [1, 2, 3, 4, 5, 6];
let numbers: number[] = [1, 2, 3, 4];

// 奇怪的语法
interface X {
  name: string;
}

let arr2: X[] = [{ name: "zs" }, { name: "ls" }];

// 定义二维数组

let list: number[][] = [[1, 2, 3], [44]];
let list2: Array<Array<number>> = [
  [1, 2],
  [2, 3],
];

//
function add(...args: string[]) {
  let arr: IArguments = arguments;
  for (let i = 0; i < arr.length; i++) {}

  console.log(args);
}
add("1,", "2");

//

let foo: number[] = [];
let bar: number[] = [];

type A = number | string;

let as: A[] = [];

console.log(as instanceof Array);

as.push(10);
as.push(20);
as.push("31");

console.log(as);

/// 执行类型的数组
let list1: (number | boolean)[] = [];
list1.push(1);
list1.push(!!1);

// 只读

const list3 = [1, 2, 3, 4];
