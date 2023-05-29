/*
 * @Author: 李银河
 * @Date: 2023-03-11 15:23:20
 * @LastEditTime: 2023-03-11 15:35:45
 * @FilePath: /typescript/promise/02.js
 * @Description:
 */
const foo1 = () => {
  setTimeout(() => {
    return "foo1";
  }, 3000);
};
const foo2 = () => {
  setTimeout(() => {
    return "foo2";
  }, 1000);
};

const p1 = new Promise((resolve, err) => {
  setTimeout(() => {
    resolve("p1p1pp1");
  }, 5000);
});
const p2 = new Promise((resolve, err) => {
  setTimeout(() => {
    resolve("p2p2pp2");
  }, 300);
});

const p0 = new Promise((resolve, err) => {
  setTimeout(() => {
    resolve("p0p0p0p0");
  }, 8000);
});

const p3 = new Promise((resolve, err) => {
  setTimeout(() => {
    err("p3p3p3p3p3p3p3p3p3p3p3p3p3");
  }, 100);
});

// 和加入顺序有关系,和promise耗时时间没关系
// 如果其中一个promise有错误,结果全部错误
Promise.all([p0, p1, p2, p3])
  .then((res, _) => {
    console.log(`all res:${res}`);
  })
  .catch((err) => {
    console.log(`all err:${err}`);
  });

// 会捕捉最先执行的函数,即使是reject
Promise.race([p0, p1, p2, p3])
  .then((res) => {
    console.log(`race:${res}`);
  })
  .catch((err) => {
    console.log(`race err:${err}`);
  });
