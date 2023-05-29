// console.log("a");
// console.log("b");
// console.log("c");
// setTimeout(() => {
//   console.log("d");
// }, 2000);
// console.log("e");

var isFlag = false;

var p = new Promise(function (resolve, reject) {
  if (isFlag) {
    setTimeout(() => {
      resolve("成功了");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("失败了");
    }, 1000);
  }
});

const p2 = p
  .then((result) => {
    console.log(`结果是:${result}`);
  })
  .catch((err) => console.log(`结果是:${err}`));

console.log("p2 " + p2);

async function getValue() {
  let val = await p2;
  console.log(typeof val);
  return val;
}

console.log(getValue());

console.log("我执行了");
