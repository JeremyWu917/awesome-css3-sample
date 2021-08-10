# Inline-block CSS5

## display: inline-block
- 与 `display: inline` 相比，主要区别在于 `display: inline-block` 允许在元素上设置宽度和高度。
- 同样，如果设置了 `display: inline-block`，将保留上下外边距/内边距，而 `display: inline` 则不会。
- 与 `display: block` 相比，主要区别在于 `display：inline-block` 在元素之后不添加换行符，因此该元素可以位于其他元素旁边。

## Sample
```css
span.a {
  display: inline; /* span 的默认值 */
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue; 
  background-color: yellow; 
}

span.b {
  display: inline-block;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue; 
  background-color: yellow; 
}

span.c {
  display: block;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue; 
  background-color: yellow; 
}
```
### 使用 inline-block 来创建导航链接
`display` 的一种常见用法：`inline-block` 用于水平而不是垂直地显示列表项。下例创建了一个水平导航链接：
```css
.nav {
  background-color: yellow; 
  list-style-type: none;
  text-align: center; 
  padding: 0;
  margin: 0;
}

.nav li {
  display: inline-block;
  font-size: 20px;
  padding: 20px;
}
```
