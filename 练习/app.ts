const obj = {
  name: "zs",
  age: 18,
};

const getObj = () => {
  return {
    name: "ls",
    age: 20,
  };
};

const o1 = { ...getObj(), ...{ color: "red" } };
console.log(o1);
