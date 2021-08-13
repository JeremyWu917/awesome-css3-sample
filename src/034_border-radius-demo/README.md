# CSS 圆角
> 通过 CSS `border-radius` 属性，可以实现任何元素的“圆角”样式

## `border-radius` 属性
- `border-top-left-radius`
- `border-top-right-radius`
- `border-bottom-right-radius`
- `border-bottom-left-radius`

## CSS border-radius - 指定每个角
`border-radius` 属性可以接受一到四个值。规则如下：

- 四个值 - `border-radius: 15px 50px 30px 5px;`（依次分别用于：左上角、右上角、右下角、左下角）：
- 三个值 - `border-radius: 15px 50px 30px;`（第一个值用于左上角，第二个值用于右上角和左下角，第三个用于右下角）：
- 两个值 - `border-radius: 15px 50px;`（第一个值用于左上角和右下角，第二个值用于右上角和左下角）：
- 一个值 - `border-radius: 15px;`（该值用于所有四个角，圆角都是一样的）：

## CSS 圆角属性
属性|描述
-|-
`border-radius`|用于设置所有四个 `border-*-*-radius` 属性的简写属性。
`border-top-left-radius`|定义左上角边框的形状。
`border-top-right-radius`|定义右上角边框的形状。
`border-bottom-right-radius`|定义右下角边框的形状。
`border-bottom-left-radius`|定义左下角边框的形状。
