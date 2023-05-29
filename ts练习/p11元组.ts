export {};
// ts得到元组也属性数组的一种
// arr.1 arr.2
//
let arr: readonly [number, boolean] = [1, false];

console.log(typeof arr);

console.log(arr instanceof Array);

console.log(arr);

console.log(arr[0]);
console.log(arr[1]);
