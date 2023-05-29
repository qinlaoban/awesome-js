export {};
const fn = function (name: string, age: number): string {
  return name + age;
};

let a = fn("zs", 100);

console.log(a);

const f2 = (n1: number, n2: string = "zs"): string => {
  return n1 + n2;
};

const f3 = (n1: number, n2?: string) => {
  console.log(n2!); //undefined
  return n1 + n2!;
};

console.log(f3(10));

//  函数重载,只有一个实现体

function bar(n1: string): void;
function bar(n1: string, n2: any): void;
function bar(n1: string, n2: any): any {
  n1 + n2;
}
