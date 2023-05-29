// 验证接口参数依赖,
// 只是等待,不是依赖

let num = -999;

const foo100 = (callhandler) => {
  setTimeout(() => {
    callhandler(num);
  }, 3000);
};
const foo200 = (callhandler) => {
  setTimeout(() => {
    num = 1000;
    callhandler();
  }, 5000);
};

const p1 = new Promise((resolve, reject) => {
  foo100((result) => {
    console.log("p1p1p1p1");
    resolve(result);
  });
});
const p2 = new Promise((resolve, reject) => {
  foo200(() => {
    console.log("p2p2p2p");
    resolve();
  });
});

Promise.all([p2, p1]).then((res) => {
  console.log(`all:${res}`);
});
