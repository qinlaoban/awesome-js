class Dog {
  // 静态变量
  static className = '爬行动物'

  // 声明属性
  info = {
    address: '北京市...',
    id: `123456789`,
  }

  constructor(name, age, color) {
    this.name = name
    this.age = age
    this.color = color
  }
  run() {
    console.log(`${this.name} 在跑...`)
  }

  eat = () => {
    console.log(`${this.name} 在吃饭...`)
  }
}

const dog = new Dog(`毛毛`, 18, `白色`)
dog.run()
dog.eat()
console.log(`dog:${JSON.stringify(dog)}`)
console.log(`${Dog.className}`)
