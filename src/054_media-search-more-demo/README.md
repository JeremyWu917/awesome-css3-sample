# CSS 媒体查询

## `CSS2` 引入了媒体类型
> `CSS2` 中引入了 `@media` 规则，它让为不同媒体类型定义不同样式规则成为可能。

例如：您可能有一组用于计算机屏幕的样式规则、一组用于打印机、一组用于手持设备，甚至还有一组用于电视，等等。
不幸的是，除了打印媒体类型之外，这些媒体类型从未得到过设备的大规模支持。

## `CSS3` 引入了媒体查询
> `CSS3` 中的媒体查询扩展了 `CSS2` 媒体类型的概念：它们并不查找设备类型，而是关注设备的能力。

媒体查询可用于检查许多事情，例如：
- 视口的宽度和高度
- 设备的宽度和高度
- 方向（平板电脑/手机处于横向还是纵向模式）
- 分辨率
  
使用媒体查询是一种流行的技术，可以向台式机、笔记本电脑、平板电脑和手机（例如 `iPhone` 和 `Android` 手机）提供定制的样式表。

## 媒体查询语法
> 媒体查询由一种媒体类型组成，并可包含一个或多个表达式，这些表达式可以解析为 `true` 或 `false`。
```css
@media not|only mediatype and (expressions) {
  CSS-Code;
}
```
如果指定的媒体类型与正在显示文档的设备类型匹配，并且媒体查询中的所有表达式均为 `true`，则查询结果为 `true`。当媒体查询为 `true` 时，将应用相应的样式表或样式规则，并遵循正常的级联规则。

除非您使用 `not` 或 `only` 运算符，否则媒体类型是可选的，且隐含 `all`类型。

您还可以针对不同的媒体使用不同的样式表：
```css
<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">
```

## `CSS3` 媒体类型
值|描述
-|-
`all`|用于所有媒体类型设备。
`print`|用于打印机。
`screen`|用于计算机屏幕、平板电脑、智能手机等等。
`speech`|用于大声“读出”页面的屏幕阅读器。

## 媒体查询的简单实例
> 使用媒体查询的一种方法是在样式表内有一个备用的 CSS 部分。

### 实例
- 在视口宽度为 `480` 像素或更宽时将背景颜色更改为浅绿色（如果视口小于 `480` 像素，则背景颜色会是粉色）
```css
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```
- 视口的宽度为 `480` 像素或更宽，则该菜单会浮动到页面的左侧（如果视口小于 `480` 像素，则该菜单将位于内容的顶部）
```css
@media screen and (min-width: 480px) {
  #leftsidebar {width: 200px; float: left;}
  #main {margin-left: 216px;}
}
```








