# CSS 动画
> CSS 可实现 `HTML` 元素的动画效果,而不使用 `JavaScript` 或 `Flash`

## CSS 动画属性
- `@keyframes`
- `animation-name`
- `animation-duration`
- `animation-delay`
- `animation-iteration-count`
- `animation-direction`
- `animation-timing-function`
- `animation-fill-mode`
- `animation`

## 什么是 CSS 动画？
动画使元素逐渐从一种样式变为另一种样式。
您可以随意更改任意数量的 `CSS` 属性。
如需使用 `CSS` 动画，您必须首先为动画指定一些关键帧。
关键帧包含元素在特定时间所拥有的样式。

## `@keyframes` 规则
如果您在 `@keyframes` 规则中指定了 `CSS` 样式，动画将在特定时间逐渐从当前样式更改为新样式。

要使动画生效，必须将动画绑定到某个元素。

下面的例子将 `"example"` 动画绑定到 `<div>` 元素。动画将持续 `4` 秒钟，同时将 `<div>` 元素的背景颜色从 `"red"` 逐渐改为 `"yellow"`：
```css
/* 动画代码 */
@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}

/* 向此元素应用动画效果 */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```
**注意**：`animation-duration` 属性定义需要多长时间才能完成动画。如果未指定 `animation-duration` 属性，则动画不会发生，因为默认值是 `0s`（0秒）。
在上面的例子中，通过使用关键字 `"from"` 和 `"to"`（代表 `0％`（开始）和 `100％`（完成）），我们设置了样式何时改变。
您也可以使用百分比值。通过使用百分比，您可以根据需要添加任意多个样式更改。
下面的例子将在动画完成 `25％`，完成 `50％` 以及动画完成 `100％` 时更改 `<div>` 元素的背景颜色：

## 延迟动画
`animation-delay` 属性规定动画开始的延迟时间。
下面的例子在开始动画前有 `2` 秒的延迟：
```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: 2s;
}
```
**注意**:负值也是允许的。如果使用负值，则动画将开始播放，如同已播放 `N` 秒。

## 设置动画应运行多少次
`animation-iteration-count` 属性指定动画应运行的次数。
下面的例子在停止前把动画运行 `3` 次：
```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 3;
}
```
**注意**:使用值 `"infinite"` 使动画永远持续下去

## 反向或交替运行动画
> `animation-direction` 属性指定是向前播放、向后播放还是交替播放动画。

`animation-direction` 属性可接受以下值：
- `normal` - 动画正常播放（向前）。默认值
- `reverse` - 动画以反方向播放（向后）
- `alternate` - 动画先向前播放，然后向后
- `alternate-reverse` - 动画先向后播放，然后向前
下例将以相反的方向（向后）运行动画：
```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-direction: reverse;
}
```

## 指定动画的速度曲线
> `animation-timing-function` 属性规定动画的速度曲线。

`animation-timing-function` 属性可接受以下值：
- ease` - 指定从慢速开始，然后加快，然后缓慢结束的动画（默认）
- linear` - 规定从开始到结束的速度相同的动画
- ease-in` - 规定慢速开始的动画
- ease-out` - 规定慢速结束的动画
- ease-in-out` - 指定开始和结束较慢的动画
- cubic-bezier(n,n,n,n)` - 运行您在三次贝塞尔函数中定义自己的值
下面这些例子展示了可以使用的一些不同速度曲线：
```css
#div1 {animation-timing-function: linear;}
#div2 {animation-timing-function: ease;}
#div3 {animation-timing-function: ease-in;}
#div4 {animation-timing-function: ease-out;}
#div5 {animation-timing-function: ease-in-out;}
```

## 指定动画的填充模式
> `CSS` 动画不会在第一个关键帧播放之前或在最后一个关键帧播放之后影响元素。`animation-fill-mode` 属性能够覆盖这种行为。

在不播放动画时（在开始之前，结束之后，或两者都结束时），`animation-fill-mode` 属性规定目标元素的样式。
`animation-fill-mode` 属性可接受以下值：
- `none` - 默认值。动画在执行之前或之后不会对元素应用任何样式。
- `forwards` - 元素将保留由最后一个关键帧设置的样式值（依赖 `animation-direction` 和 `animation-iteration-count`）。
- `backwards` - 元素将获取由第一个关键帧设置的样式值（取决于 `animation-direction`），并在动画延迟期间保留该值。
- `both` - 动画会同时遵循向前和向后的规则，从而在两个方向上扩展动画属性。

下面的例子让 `<div>` 元素在动画结束时保留来自最后一个关键帧的样式值：
```css
div {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  animation-name: example;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
```

## CSS 动画属性
下表列出了 `@keyframes` 规则和所有 `CSS` 动画属性：
属性|描述
-|-
`@keyframes`|规定动画模式。
`animation`|设置所有动画属性的简写属性。
`animation-delay`|规定动画开始的延迟。
`animation-direction`|定动画是向前播放、向后播放还是交替播放。
`animation-duration`|规定动画完成一个周期应花费的时间。
`animation-fill-mode`|规定元素在不播放动画时的样式（在开始前、结束后，或两者同时）。
`animation-iteration-count`|规定动画应播放的次数。
`animation-name`|规定 `@keyframes` 动画的名称。
`animation-play-state`|规定动画是运行还是暂停。
`animation-timing-function`|规定动画的速度曲线。

