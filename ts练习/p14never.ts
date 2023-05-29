export {};

type NumString = number & string;

function fo(): never {
  throw new Error("错误了");
}

fo();
