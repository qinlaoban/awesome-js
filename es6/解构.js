// 匹配模式写法
// 如果等号右边不是可遍历的结构
// 只有解构的的值为undefined,才可以默认赋值（null 不可以）

function foo() {
    let [a, b, c] = [1, 2, 3]
    console.log(`a:${a}`)
    console.log(`a:${b}`)
    console.log(`a:${c}`)
}

function foo2() {
    let obj = {
        name: 'zs',
        // age: null
    }
    const { name, age: aName = 18 } = obj
    console.log(`name:${name}`)
    console.log(`age:${aName}`)
}
foo2()

let num = null
console.log(num)

console.log(`=========wdf===`)
let obj = {
    name: `zs`,
    age: null, // 修改undefined
}

const { age: Age = Age === undefined ? 0 : 99 } = obj // 报错

// const {age:Age  = (Age === null ? 0 : 99) } = obj;

const { age: Age1 = Age1 ?? 99 } = obj

console.log(Age ?? '123') // 123

console.log(`Age:${Age}`) // null

console.log(`Age1:${Age1}`) // null
