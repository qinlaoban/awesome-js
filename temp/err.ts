// object、Object、{} 都报错
export {}; // 防止重复

// let obj: { [… string]:number } = {
//   name: "zs",
//   age: 30,
// };
// obj.age = 19;
// console.log(obj);
// console.log(typeof obj);

interface ADD {
  //定义方法
  (n1: number, n2: number): number;
  // key: string;
}
// 定义方法
type ADD2 = (n1: number, n2: number) => number;

let aa1: ADD = (n1, n2) => {
  return n1 + n2;
};
let aa2: ADD2 = (n1, n2) => {
  return n1 + n2;
};

aa1 = aa2;

console.log(aa1 === aa2);

// string String;
console.log("=======");

const nums = [1, 2, 3, 4, 5];
nums.push(6);
console.log(nums);
