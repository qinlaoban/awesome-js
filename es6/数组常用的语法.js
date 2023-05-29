const obj = {
  name: 'zs',
  age: null, //
};

const { age = 1000 } = obj;

const { age: AGE = AGE ?? 1000 } = obj;

console.log(age); // null

console.log(AGE); // null

console.log(age ?? 99); // 99
