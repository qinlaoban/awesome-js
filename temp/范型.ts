/*
 * @Author: 三人禾 78482021@163.com
 * @Date: 2023-02-26 08:44:29
 * @LastEditors: 三人禾 78482021@163.com
 * @LastEditTime: 2023-03-08 16:35:12
 * @FilePath: /typescript/temp/范型.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function createArray<T>(len: number, val: T): T[] {
  const array = new Array<T>(len).fill(val);

  return array;
}

// console.log(createArray(10, "123"));

class Dog {
  aName = "zs";
  constructor() {}
}
const dog = new Dog();
console.log(dog.aName);

// 1.new 的问题,什么用new,区别
// 2.const为什么还能push
// 3
const array = Array();
for (let index = 0; index < 10; index++) {
  const num = 10 + index;
  array.push(num);
}
console.log(array);

let obj = {
  name: "zs",
};

console.log("====");
let obj2 = { ...obj, age: "18" };
console.log(obj2);
