# CSS 计数器
> `CSS` 计数器是由 `CSS` 保持的“变量”，其值可以通过 `CSS` 规则递增（以跟踪其使用次数）。计数器使您可以根据内容在文档中的位置来调整其外观。

## 带计数器的自动编号
`CSS` 计数器就像“变量”。变量值可以通过 `CSS` 规则递增（将跟踪它们的使用次数）。
如需使用 `CSS` 计数器，我们将使用以下属性：
- `counter-reset` - 创建或重置计数器
- `counter-increment` - 递增计数器值
- `content` - 插入生成的内容
- `counter()` 或 `counters()` 函数 - 将计数器的值添加到元素

如需使用 `CSS` 计数器，必须首先使用 `counter-reset` 创建它。
下面的例子为页面（在 `body` 选择器中）创建一个计数器，然后为每个 `<h2>` 元素增加计数器值，并在每个 `<h2>` 元素的开头添加 `"Section <value of the counter>:"`：
```css
body {
  counter-reset: section;
}

h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}
```
## 嵌套计数器
下面的例子为页面`（section）`创建一个计数器，为每个 `<h1>` 元素（subsection）创建一个计数器。

`"section"` 计数器为每个 `<h1>` 元素计数，同时写入 `"Section"` 以及 `section` 计数器的值，`"subsection"` 计数器为每个 `<h2>` 元素计数，同时写入 `section` 计数器的值以及 `subsection` 计数器的值：
```css
body {
  counter-reset: section;
}

h1 {
  counter-reset: subsection;
}

h1::before {
  counter-increment: section;
  content: "Section " counter(section) ". ";
}

h2::before {
  counter-increment: subsection;
  content: counter(section) "." counter(subsection) " ";
}
```

# CSS 计数器属性
属性|描述
-|-
`content`|与 `::before` 和 `::after` 伪元素一同使用，来插入生成的内容。
`counter-increment`|递增一个或多个计数器值。
`counter-reset`|创建或重置一个或多个计数器。
