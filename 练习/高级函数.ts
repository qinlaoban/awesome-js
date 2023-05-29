let list = [100, 20, 10, 40, 50];

const arr = list.map((val) => {
  return val * 2;
});
console.log(arr);

// 过滤
const filterArr = list.filter((val) => {
  return val % 2 === 0;
});
console.log(filterArr);

//
list.forEach((val) => {
  console.log(`forEach:${val}`);
});

// sort 如何不传值,会默认按照 ASCII进行排序
const sortList = [4, 2, 7, 3, 1].sort();
console.log(`sortList:${sortList}`);

const sortList2 = [4, 2, 7, 3, 1].sort((a, b) => b - a);
console.log(`sortList:${sortList2}`);

// some

// every,判断数组中,每个元素是否符合条件

function foo() {
  let index = -1;
  const isFlag = list.every((v, i) => {
    console.log(`every i :${i}`);
    index = i;
    return v >= 20;
  });
  console.log(`isFlag:${isFlag}`);
  console.log(`index:${index}`);
}
foo();

/// reduce 它可以将数组所有元素,通过累加/累乘操作
const reduceList = list.reduce((prev, val) => {
  return prev - val;
}, 1000);
console.log(`reduce-list:${reduceList}`);
