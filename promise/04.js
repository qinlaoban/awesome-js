/*
 * @Author: 李银河
 * @Date: 2023-03-11 17:18:56
 * @LastEditTime: 2023-03-11 17:19:35
 * @FilePath: /typescript/promise/04.js
 * @Description:
 */
const p1 = Promise.reject("你好哇,李银河");

const foo = async () => {
  try {
    let result = await p1;
  } catch (err) {
    console.log(`err:${err}`);
  }
};

foo();
