export {};
interface Person {
  name: string;
  age: number;
}

interface Man {
  sex: number;
}

const obj = (m: Man & Person): void => {};

obj({
  name: "zs",
  age: 19,
  sex: 10,
});

// as 类型断言
const foo = (val: number | string): void => {
  console.log((val as string).length);

  if (val as string) {
    console.log(`字符串:${val}}`);
  } else {
    console.log(`数字是:${val}`);
  }
};

foo("abc");
foo(123);

const bar = (): string => {
  return "123";
};
