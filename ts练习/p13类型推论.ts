/*
 * @Author: 三人禾 78482021@163.com
 * @Date: 2023-03-06 21:46:20
 * @LastEditors: 三人禾 78482021@163.com
 * @LastEditTime: 2023-03-10 14:44:56
 * @FilePath: /typescript/p13类型推论.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export {};

let name = "zs";

type str = "123";

let s: str = "456";

console.log(s);

type N = 1 extends number ? 1 : 0;

let n1: N = 1;
console.log(n1);
