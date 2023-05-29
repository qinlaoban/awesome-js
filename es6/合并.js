// https://zhuanlan.zhihu.com/p/77204083

/**
 *  合并对象1：
 *  1. 不会new 一个新的对象
 *  2. 重复的key键，后者覆盖前者
 * */
function foo1() {
  const obj1 = {
    name: "zs",
    age: 18,
  };
  const obj2 = {
    age: 20,
    score: 100,
  };
  const obj3 = {
    target: `年纪第一`,
  };
  Object.assign(obj1, obj2, obj3);
  console.log(obj1);
}
foo1();

/**
 *  合并对象1：
 *  1. 会new一个新的对象
 *  2. 重复的key键，后者覆盖前者
 * */
function foo2() {
  const obj1 = {
    name: "zs",
    age: 18,
  };
  const obj2 = {
    age: 20,
    score: 100,
  };
  const obj3 = {
    target: `年纪第一`,
  };

  const obj4 = { ...obj1, ...obj2, ...obj3 };
  console.log(`obj4: ${JSON.stringify(obj4)}`);
}
