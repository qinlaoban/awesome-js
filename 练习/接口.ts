import { type } from "os";

interface OutLet {
  type: string;
  name?: string;
  run: (n1: number, n2: number) => {};
}

let xmLet: OutLet = {
  type: "out",
  run: (n1, n2) => {
    return n1 + n2;
  },
};

console.log(xmLet);
console.log(xmLet.name ?? "没名字");
console.log(xmLet.run);

const app = {
  version: "1.0.0",
  name: "信美",
};
