# CSS 伪类
## 什么是伪类？
伪类用于定义元素的特殊状态。
例如，它可以用于：
- 设置鼠标悬停在元素上时的样式
- 为已访问和未访问链接设置不同的样式
- 设置元素获得焦点时的样式

## 语法
伪类的语法：
```css
selector:pseudo-class {
  property: value;
}
```

## 锚伪类
链接能够以不同的方式显示
```css
/* 未访问的链接 */
a:link {
  color: #FF0000;
}

/* 已访问的链接 */
a:visited {
  color: #00FF00;
}

/* 鼠标悬停链接 */
a:hover {
  color: #FF00FF;
}

/* 已选择的链接 */
a:active {
  color: #0000FF;
}
```
**注意**：
1. `a:hover` 必须在 `CSS` 定义中的 `a:link` 和 `a:visited` 之后，才能生效！
2. `a:active` 必须在 `CSS` 定义中的 `a:hover` 之后才能生效！
3. 伪类名称对大小写不敏感。

## CSS - `:first-child` 伪类
`:first-child` 伪类与指定的元素匹配：该元素是另一个元素的第一个子元素。
匹配首个 `<p>` 元素
```css
p:first-child {
  color: blue;
}
```
选择器匹配所有 `<p>` 元素中的第一个 `<i>` 元素
```css
p i:first-child {
  color: blue;
}
```
择器匹配作为另一个元素的第一个子元素的 `<p>` 元素中的所有 `<i>` 元素
```css
p:first-child i {
  color: blue;
}
```
## CSS - `:lang` 伪类
`:lang` 伪类允许您为不同的语言定义特殊的规则。

在下面的例子中，`:lang` 为属性为 `lang="en"` 的 `<q>` 元素定义引号
```html
<html>
  <head>
    <style>
      q:lang(en) {
        quotes: "~" "~";
      }
    </style>
  </head>
  <body>
    <p>Some text <q lang="no">A quote in a paragraph</q> Some text.</p>
  </body>
</html>
```

## 所有 CSS 伪类
选择器|例子|例子描述
-|-|-
`:active`|`a:active`|选择活动的链接。
`:checked`|`input:checked`|选择每个被选中的 `<input>` 元素。
`:disabled`|`input:disabled`|选择每个被禁用的 `<input>` 元素。
`:empty`|`p:empty`|选择没有子元素的每个 `<p>` 元素。
`:enabled`|`input:enabled`|选择每个已启用的 `<input>` 元素。
`:first-child`|`p:first-child`|选择作为其父的首个子元素的每个 `<p>` 元素。
`:first-of-type`|`p:first-of-type`|选择作为其父的首个 `<p>` 元素的每个 `<p>` 元素。
`:focus`|`input:focus`|选择获得焦点的 `<input>` 元素。
`:hover`|`a:hover`|选择鼠标悬停其上的链接。
`:in-range`|`input:in-range`|选择具有指定范围内的值的 `<input>` 元素。
`:invalid`|`input:invalid`|选择所有具有无效值的 `<input>` 元素。
`:lang(language)`|`p:lang(it)`|选择每个 `lang` 属性值以 `"it"` 开头的 `<p>` 元素。
`:last-child`|`p:last-child`|选择作为其父的最后一个子元素的每个 `<p>` 元素。
`:last-of-type`|`p:last-of-type`|选择作为其父的最后一个 `<p>` 元素的每个 `<p>` 元素。
`:link`|`a:link`|选择所有未被访问的链接。
`:not(selector)`|`:not(p)`|选择每个非 `<p>` 元素的元素。
`:nth-child(n)`|`p:nth-child(2)`|选择作为其父的第二个子元素的每个 `<p>` 元素。
`:nth-last-child(n)`|`p:nth-last-child(2)`|选择作为父的第二个子元素的每个 `<p>` 元素，从最后一个子元素计数。
`:nth-last-of-type(n)`|`p:nth-last-of-type(2)`|选择作为父的第二个 `<p>` 元素的每个 `<p>` 元素，从最后一个子元素计数
`:nth-of-type(n)`|`p:nth-of-type(2)`|选择作为其父的第二个 `<p>` 元素的每个 `<p>` 元素。
`:only-of-type`|`p:only-of-type`|选择作为其父的唯一 `<p>` 元素的每个 `<p>` 元素。
`:only-child`|`p:only-child`|选择作为其父的唯一子元素的 `<p>` 元素。
`:optional`|`input:optional`|选择不带 `"required"` 属性的 `<input>` 元素。
`:out-of-range`|`input:out-of-range`|选择值在指定范围之外的 `<input>` 元素。
`:read-only`|`input:read-only`|选择指定了 `"readonly"` 属性的 `<input>` 元素。
`:read-write`|`input:read-write`|选择不带 `"readonly"` 属性的 `<input>` 元素。
`:required`|`input:required`|选择指定了 `"required"` 属性的 `<input>` 元素。
`:root`|`root`|选择元素的根元素。
`:target`|`#news:target`|选择当前活动的 `#news` 元素（单击包含该锚名称的 `URL`）。
`:valid`|`input:valid`|选择所有具有有效值的 `<input>` 元素。
`:visited`|`a:visited`|选择所有已访问的链接。

## 所有 CSS 伪元素
选择器|例子|例子描述
-|-|-
`::after`|`p::after`|在每个 `<p>` 元素之后插入内容。
`::before`|`p::before`|在每个 `<p>` 元素之前插入内容。
`::first-letter`|`p::first-letter`|选择每个 `<p>` 元素的首字母。
`::first-line`|`p::first-line`|选择每个 `<p>` 元素的首行。
`::selection`|`	p::selection`|选择用户选择的元素部分。
