/*
 * @Author: 三人禾 78482021@163.com
 * @Date: 2023-02-28 14:58:15
 * @LastEditors: 三人禾 78482021@163.com
 * @LastEditTime: 2023-03-09 18:03:49
 * @FilePath: /typescript/temp/q123.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

interface MAP {
  name: string;
}

let obj: MAP = {
  name: "zs",
};

type NUMS = 1 | 2 | 3 | 4;

enum TYPES {
  none,
  haha,
}

let type: TYPES = TYPES.none;
