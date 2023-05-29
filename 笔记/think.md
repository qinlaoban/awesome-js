###思考

- css 什么时候用行内些样式({}形式),什么时候写公共样式
- render 和 didMount 的区别
- createContext 的机制?是单利吗?创建多个 context 会影响性能吗?
- 开发时候子组件事件需要放到父组件回调吗?(统一回调，mvc 分层)
- HashRouter 与 BrowseRouter 的历史、区别

### 案例

```js
let obj = {
  name: `zs`,
  age: null,
};
const { age: Age = Age === null ? 0 : 99 } = obj;

const { age: Age1 = Age1 ?? 99 } = obj;

console.log(Age ?? "123"); // 123

console.log(`Age:${Age}`); // null

console.log(`Age1:${Age1}`); // null
```
