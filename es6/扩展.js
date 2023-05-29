const list = [1, 2, 3, 4, 5];

const isArray = list instanceof Array;

console.log(`list: ${typeof list}`);

console.log(`list是否是数组: ${isArray ? "是" : "不是"}`);

const obj = { ...list };

console.log(`type:${typeof obj}`);

console.log(list instanceof Object);

for (let item in obj) {
  console.log(`item:${item}`);
}
