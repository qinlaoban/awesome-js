const myObj = JSON.parse(`{"name":"zs","age":18}`);
console.log(myObj);

console.log(myObj.age);

declare function debug(value: any): void {
  console.log(value);
};

debug("life is wonderful");
debug("123456");
debug({ color: "red" });

const addNum = (n1: number): number => {
  return n1 * 2;
};
