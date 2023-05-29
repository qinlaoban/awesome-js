function foo(num: any): boolean {
  return num as boolean;
}
const isFlag = foo(10);
console.log(isFlag);
console.log(typeof isFlag);

type fn = number | string;
type fn2 = number;

let num: fn = 1234;
let num2: fn2 = num;

type MAP = { [key: fn]: any };

let dict: MAP = {};
dict["age"] = 10;
dict.name = "zs";
dict[3] = "你好哇,李银河";

console.log(dict);

console.log(JSON.stringify(dict));
