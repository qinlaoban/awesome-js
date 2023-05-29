// 接口可继承

interface SupperB {
  s?: string;
}

interface A extends SupperB {
  name: string; // 必须要有
  readonly color: string; // 只读
  id?: number;
  cd?: () => boolean;
  [propName: string]: any;
}

// 属性要和interface一样==
let a: A = {
  name: "李银河",
  color: "123",

  a1: 0,
  a2: [],
  a3: {},
};

//

interface ADD {
  (n1: number, n2: number): number;
}

type ADD2 = (n1: number, n2: number) => number;

let add: ADD = (n1, n2) => {
  return n1 + n2;
};
console.log(add(1, 2));

let add2: ADD2 = (n1, n2) => {
  return n1 + n2;
};
let add3: ADD2 = add;
// 都是func
console.log(add);
console.log(add === add);
