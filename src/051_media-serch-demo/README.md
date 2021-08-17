# CSS 在媒体查询中使用变量
> 现在，我们希望在媒体查询中修改变量值。

在这里，我们首先为 `.container` 类声明一个名为 `--fontsize` 的新局部变量。我们将其值设置为 `25` 像素。然后我们在 `.container` 类中进一步使用它。然后，我们创建一个 `@media` 规则，内容为“当浏览器的宽度为 `450px` 或更宽时，将 `.container` 类的 `--fontsize` 变量值更改为 `50px`。

_实例如下：_
```css
/* 变量声明 */
:root {
  --blue: #1e90ff;
  --white: #ffffff;
}

.container {
  --fontsize: 25px;
}

/* 样式 */
body {
  background-color: var(--blue);
}

h2 {
  border-bottom: 2px solid var(--blue);
}

.container {
  color: var(--blue);
  background-color: var(--white);
  padding: 15px;
  font-size: var(--fontsize);
}

@media screen and (min-width: 450px) {
  .container {
    --fontsize: 50px;
  }
}
```