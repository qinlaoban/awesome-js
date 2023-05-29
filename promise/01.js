/*
 * @Author: 李银河
 * @Date: 2023-03-11 15:12:20
 * @LastEditTime: 2023-03-11 15:22:05
 * @FilePath: /typescript/promise/01.js
 * @Description:
 */
function foo() {
  setTimeout(() => {
    return "我是成功的数据";
  }, 2000);
}

function bar(callhandler) {
  setTimeout(() => {
    callhandler("00000");
  }, 3000);
}

bar((res) => {
  console.log("123123123123123:" + res);
});

let flag = false;

const p = new Promise((resolve, reject) => {
  if (flag) {
    resolve(foo());
  } else {
    bar((err) => {
      reject(err);
    });
  }
});

console.log("====");
p.then((res) => console.log(`结果:${res}`)).catch((err) =>
  console.log(`结果:${err}`)
);
