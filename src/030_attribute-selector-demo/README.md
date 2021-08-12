# CSS Attribute Selector
> 为带有特定属性的 `HTML` 元素设置样式，我们可以设置带有特定属性或属性值的 `HTML` 元素的样式

## CSS `[attribute]` 选择器
[attribute] 选择器用于选取带有指定属性的元素。
下例选择所有带有 target 属性的 `<a>` 元素；
```css
a[target] {
  background-color: yellow;
}
```

## CSS `[attribute="value"]` 选择器
`[attribute="value"]` 选择器用于选取带有指定属性和值的元素。
下例选取所有带有 target="_blank" 属性的 `<a>` 元素：
```css
a[target="_blank"] { 
  background-color: yellow;
}
```

## CSS `[attribute~="value"]` 选择器
`[attribute~="value"]` 选择器选取属性值包含指定词的元素。
下例选取 `title` 属性包含 `"flower"` 单词的所有元素：
```css
[title~="flower"] {
  border: 5px solid yellow;
}
```
**注释**：上面的例子会匹配以下属性的元素：`title="flower"`、`title="summer flower"` 以及 `title="flower new"`，但不匹配：`title="my-flower"` 或 `title="flowers"`

## CSS `[attribute|="value"]` 选择器
`[attribute|="value"]` 选择器用于选取指定属性以指定值开头的元素。
下例选取 `class` 属性以 `"top"` 开头的所有元素：
**注释**：值必须是完整或单独的单词，比如 `class="top"` 或者后跟连字符的，比如 `class="top-text"`。
```css
[class|="top"] {
  background: yellow;
}
```

## CSS `[attribute^="value"]` 选择器
`[attribute^="value"]` 选择器用于选取指定属性以指定值开头的元素。
下例选取 `class` 属性以 `"top"` 开头的所有元素：
**提示**：值不必是完整单词！
```css
[class^="top"] {
  background: yellow;
}
```

## `CSS [attribute$="value"]` 选择器
`[attribute$="value"]` 选择器用于选取指定属性以指定值结尾的元素。
下例选取 `class` 属性以 `"test"` 结尾的所有元素：
**提示**：值不必是完整单词！
```css
[class*="te"] {
  background: yellow;
}
```

## 所有 CSS 属性选择器
选择器|例子|例子描述
-|-|-
`[attribute]`|`[target]`|选择带有 `target` 属性的所有元素。
`[attribute=value]`|`[target=_blank]`|选择带有 `target="_blank"` 属性的所有元素。
`[attribute~=value]`|`[title~=flower]`|选择带有包含 `"flower"` 一词的 `title` 属性的所有元素。
`[attribute|=value]`|`[lang|=en]`|选择带有以 `"en"` 开头的 `lang` 属性的所有元素。
`[attribute^=value]`|`a[href^="https"]`|选择其 `href` 属性值以 `"https"` 开头的每个 `<a>` 元素。
`[attribute$=value]`|`a[href$=".pdf"]`|选择其 `href` 属性值以 `".pdf"` 结尾的每个 `<a>` 元素。
`[attribute*=value]`|`a[href*="school"]`|选择其 `href` 属性值包含子串 `"school"` 的每个 `<a>` 元素。
