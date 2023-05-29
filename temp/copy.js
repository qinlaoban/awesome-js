// 复杂对象
// ...语法,对于

let cat1 = {
  aName: "huahua", // 深

  dog: {
    // 浅
    age: 19,
  },
};

//
let cat2 = { ...cat1 };
cat2.aName = "wangwang";
cat2.dog.age = 100;

console.log(`cat1:${JSON.stringify(cat1)}}`);
console.log(`cat2:${JSON.stringify(cat2)}}`);
