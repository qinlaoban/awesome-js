import { type } from "os";

export {};

class Dog {
  name: string = "1";
  age: number = 0;
  constructor(name: string, age: number) {}
}

const dog = new Dog("ww", 18);

interface Person {
  run(type: boolean): boolean;

  callMe?(desc: string): string;
}

class Man implements Person {
  run(type112: boolean): boolean {
    return !!type;
  }
}

const man = new Man();
console.log(man.run(true));
