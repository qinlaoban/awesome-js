export {};

abstract class Animal {
  aName: string;
  constructor() {
    this.aName = "zs";
  }

  // 抽象类可以实现
  setName(name: string) {
    this.aName = name;
  }

  // 必须返回void
  abstract getName(): string;
}

class Cat extends Animal {
  constructor() {
    super();
  }
  getName() {
    return `名字是:${this.aName}`;
  }
}

const cat = new Cat();
console.log(cat);
cat.setName("ww");
console.log(cat.getName());
