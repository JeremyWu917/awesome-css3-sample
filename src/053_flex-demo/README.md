# CSS Flexbox

## CSS Flexbox 布局模块
在 Flexbox 布局模块（问世）之前，可用的布局模式有以下四种：

- 块（`Block`），用于网页中的部分（节）
- 行内（`Inline`），用于文本
- 表，用于二维表数据
- 定位，用于元素的明确位置
- 弹性框布局模块，可以更轻松地设计灵活的响应式布局结构，而无需使用浮动或定位。

## Flexbox 元素
如需开始使用 `Flexbox` 模型，您需要首先定义 `Flex` 容器。

## `flex` 容器属性
- `flex-direction`
- `flex-wrap`
- `flex-flow`
- `justify-content`
- `align-items`
- `align-content`

### `flex-direction` 属性
- `column` - 设置垂直堆叠 `flex` 项目（从上到下）
- `column-reverse` - 垂直堆叠 `flex` 项目（但从下到上）
- `row` - 默认值，水平堆叠 flex 项目（从左到右）
- `row-reverse` - 水平堆叠 flex 项目（从右到左）

### `flex-wrap` 属性
`flex-wrap` 属性规定是否应对 `flex` 项目换行
- `wrap` - 规定 `flex` 项目将在必要时进行换行
- `nowrap` - 规定将不对 `flex` 项目换行（默认）
- `wrap-reverse` - 规定如有必要，弹性项目将以相反的顺序换行

## `flex-flow` 属性
> `flex-flow` 属性是用于同时设置 `flex-direction` 和 `flex-wrap` 属性的简写属性。

实例：
```css
.flex-container {
  display: flex;
  flex-flow: row wrap;
}
```

## `justify-content` 属性
> `justify-content` 属性用于对齐 `flex` 项目
- `center` - 将 `flex` 项目在容器的中心对齐
- `flex-start` - 将 `flex` 项目在容器的开头对齐（默认）
- `flex-end` - 将 `flex` 项目在容器的末端对齐
- `space-around` - 显示行之前、之间和之后带有空格的 `flex` 项目
- `space-between` - 显示行之间有空格的 `flex` 项目

## `align-items` 属性
> `align-items` 属性用于垂直对齐 `flex` 项目。
- `center` - 将 `flex` 项目在容器中间对齐
- `flex-start` - 将 `flex` 项目在容器顶部对齐
- `flex-end` - 将弹性项目在容器底部对齐
- `stretch` - 拉伸 `flex` 项目以填充容器（默认）
- `baseline` - 使 `flex` 项目基线对齐

## `align-content` 属性
> `align-content` 属性用于对齐弹性线
- `space-between` - 显示的弹性线之间有相等的间距
- `space-around` - 显示弹性线在其之前、之间和之后带有空格
- `stretch` - 值拉伸弹性线以占据剩余空间（默认）
- `center` - 值在容器中间显示弹性线
- `flex-start` - 值在容器开头显示弹性线
- `flex-end` - 值在容器的末尾显示弹性线

## 完美的居中
将 `justify-content` 和 `align-items` 属性设置为居中，然后 `flex` 项目将完美居中.

## 子元素（项目）
> `flex` 容器的直接子元素会自动成为弹性（`flex`）项目

用于弹性项目的属性有：
- `order`
- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `flex`
- `align-self`

### `order` 属性
`order` 属性规定 `flex` 项目的顺序。
代码中的首个 `flex` 项目不必在布局中显示为第一项。
`order` 值必须是数字，默认值是 `0`。

#### 实例
`order` 属性可以改变 `flex` 项目的顺序
```css
<div class="flex-container">
  <div style="order: 3">1</div>
  <div style="order: 2">2</div>
  <div style="order: 4">3</div> 
  <div style="order: 1">4</div>
</div>
```

### `flex-grow` 属性
`flex-grow` 属性规定某个 `flex` 项目相对于其余 `flex` 项目将增长多少。
该值必须是数字，默认值是 `0`。

#### 实例
使第三个弹性项目的增长速度比其他弹性项目快八倍：
```css
<div class="flex-container">
  <div style="flex-grow: 1">1</div>
  <div style="flex-grow: 1">2</div>
  <div style="flex-grow: 8">3</div> 
</div>
```

### `flex-shrink` 属性
`flex-shrink` 属性规定某个 `flex` 项目相对于其余 `flex` 项目将收缩多少。
该值必须是数字，默认值是 `0`。

#### 实例
不要让第三个弹性项目收缩得与其他弹性项目一样多：
```css
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex-shrink: 0">3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
```

### `flex-basis` 属性
`flex-basis` 属性规定 `flex` 项目的初始长度。

#### 实例
将第三个弹性项目的初始长度设置为 `200` 像素：
```css
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex-basis: 200px">3</div>
  <div>4</div>
</div>
```
### `flex` 属性
> `flex` 属性是 `flex-grow`、`flex-shrink` 和 `flex-basis` 属性的简写属性。

### `align-self` 属性
> `align-self` 属性规定弹性容器内所选项目的对齐方式。

`align-self` 属性将覆盖容器的 `align-items` 属性所设置的默认对齐方式。

## CSS `Flexbox` 属性
> 下表列出了与 `flexbox` 一起使用的 `CSS` 属性：

属性|描述
-|-
`display`|规定用于 `HTML` 元素的盒类型。
`flex-direction`|规定弹性容器内的弹性项目的方向。
`justify-content`|当弹性项目没有用到主轴上的所有可用空间时，水平对齐这些项目。
`align-items`|当弹性项目没有用到主轴上的所有可用空间时，垂直对齐这些项。
`flex-wrap`|规定弹性项目是否应该换行，若一条 `flex` 线上没有足够的空间容纳它们。
`align-content`|修改 `flex-wrap` 属性的行为。与 `align-items` 相似，但它不对齐弹性项目，而是对齐 `flex` 线。
`flex-flow`|`flex-direction` 和 `flex-wrap` 的简写属性。
`order`|规定弹性项目相对于同一容器内其余弹性项目的顺序。
`align-self`|用于弹性项目。覆盖容器的 `align-items` 属性。
`flex`|`flex-grow`、`flex-shrink` 以及 `flex-basis` 属性的简写属性。
