# CSS 变量
> var() 函数用于插入 CSS 变量的值。

`CSS` 变量可以访问 `DOM`，这意味着您可以创建具有局部或全局范围的变量，使用 `JavaScript` 来修改变量，以及基于媒体查询来修改变量。使用 `CSS` 变量的一种好方法涉及设计的颜色。您可以将它们放在变量中，而不必一遍又一遍地复制和粘贴相同的颜色。

## 传统方式
以下例子显示了在样式表中定义一些颜色的传统方式（通过为每个特定元素定义要使用的颜色）：
<details>
  <summary> Click to view </summary>
  <pre>
    <codeblock>
      body { background-color: #1e90ff; }
      h2 { border-bottom: 2px solid #1e90ff; }
      .container {
        color: #1e90ff;
        background-color: #ffffff;
        padding: 15px;
      }
      button {
        background-color: #ffffff;
        color: #1e90ff;
        border: 1px solid #1e90ff;
        padding: 5px;
      }
    </codeblock>
  </pre>
</details>

## var() 函数的语法
> `var()` 函数用于插入 `CSS` 变量的值。

`var()` 函数的语法如下：
```css
var(name, value)
```
Value|Description
-|-
`name`|必需。变量名（以两条破折号开头）。
`value`|可选。回退值（在未找到变量时使用）。
**注释：** 变量名称必须以两个破折号（--）开头，且区分大小写！

## `var()` 如何工作
首先：`CSS` 变量可以有全局或局部作用域。
全局变量可以在整个文档中进行访问/使用，而局部变量只能在声明它的选择器内部使用。
如需创建具有全局作用域的变量，请在 `:root` 选择器中声明它。 `:root` 选择器匹配文档的根元素。
如需创建具有局部作用域的变量，请在将要使用它的选择器中声明它。
下面的例子与上面的例子相同，但是在这里我们使用 `var()` 函数。
首先，我们声明两个全局变量（`--blue` 和 `--white`）。然后，我们使用 `var()` 函数稍后在样式表中插入变量的值：
```css
:root {
  --blue: #1e90ff;
  --white: #ffffff;
}

body { background-color: var(--blue); }

h2 { border-bottom: 2px solid var(--blue); }

.container {
  color: var(--blue);
  background-color: var(--white);
  padding: 15px;
}

button {
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  padding: 5px;
}
```
使用 `var()` 有如下优势：

- [x] 使代码更易于阅读（更容易理解）
- [x] 使修改颜色值更加容易















