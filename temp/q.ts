export {};

interface LETA {
  // aName: string;
  (): string;
}

type LETB = () => {};

let outlet_a: LETA = () => {
  return "outlet_a";
};

let outlet_b: LETB = () => {
  return "outlet_b";
};

let outlet_c: LETB = outlet_a;

console.log(outlet_c === outlet_a);
console.log(outlet_c === outlet_a);
