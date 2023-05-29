//

const foo = (val, time = 1000, callback) => {
  setTimeout(() => {
    callback(val);
  }, time);
};

async function api1() {
  return new Promise((resolve, reject) => {
    foo('info1', 2000, resolve);
  });
}

const task1 = async () => {
  // 异步请求
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

const result = await task1();
console.log(`result:${result}`);
