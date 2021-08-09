# a CSS5

## Status
- `a:link` - 正常的，未访问的链接
- `a:visited` - 用户访问过的链接
- `a:hover` - 用户将鼠标悬停在链接上时
- `a:active` - 链接被点击时

## Sample
```css
/* 未被访问的链接 */
a:link {
  color: red;
}

/* 已被访问的链接 */
a:visited {
  color: green;
}

/* 将鼠标悬停在链接上 */
a:hover {
  color: hotpink;
}

/* 被选择的链接 */
a:active {
  color: blue;
}
```

## Note :warning:
如果为多个链接状态设置样式，请遵循如下顺序规则：
- `a:hover` 必须 `a:link` 和 `a:visited` 之后
- `a:active` 必须在 `a:hover` 之后