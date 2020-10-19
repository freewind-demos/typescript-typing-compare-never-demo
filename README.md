TypeScript Typing Compare "never" Demo
===================================================

typescript中的type `never`似乎有一些特殊行为，比如：

- `string`与`string|never`相等
- `string[]`与`string[]|never`相等
- `string[]`与`string[]|never[]`相等

但

- `string`与`string|never[]`不相等

```
npm install
npm test
```
