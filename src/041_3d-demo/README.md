# CSS 3D 转换
> CSS 还支持 `3D` 转换

## CSS 3D 转换方法
- `rotateX()`
- `rotateY()`
- `rotateZ()`

### `rotateX()` 方法
`rotateX()` 方法使元素绕其 `X` 轴旋转给定角度
```css
#myDiv {
  transform: rotateX(150deg);
}
```

### `rotateY()` 方法
`rotateY()` 方法使元素绕 `Y` 旋转给定角度
```css
#myDiv {
  transform: rotateY(130deg);
}
```

### `rotateZ()` 方法
`rotateZ()` 方法使元素绕 `Z` 旋转给定角度
```css
#myDiv {
  transform: rotateZ(130deg);
}
```

## CSS 转换属性
属性|描述
-|-
`transform`|向元素应用 `2D` 或 `3D` 转换。
`transform-origin`|允许你改变被转换元素的位置。
`transform-style`|规定被嵌套元素如何在 `3D` 空间中显示。
`perspective`|规定 `3D` 元素的透视效果。
`perspective-origin`|规定 `3D` 元素的底部位置。
`backface-visibility`|定义元素在不面对屏幕时是否可见。

## CSS 3D 转换方法
函数|	描述
-|-
`matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)`|定义 `3D` 转换，使用 `16` 个值的 `4x4` 矩阵。
`translate3d(x,y,z)`|定义 `3D` 转化。
`translateX(x)`|定义 `3D` 转化，仅使用用于 `X` 轴的值。
`translateY(y)`|定义 `3D` 转化，仅使用用于 `Y` 轴的值。
`translateZ(z)`|定义 `3D` 转化，仅使用用于 `Z` 轴的值。
`scale3d(x,y,z)`|定义 `3D` 缩放转换。
`scaleX(x)`|定义 `3D` 缩放转换，通过给定一个 `X` 轴的值。
`scaleY(y)`|定义 `3D` 缩放转换，通过给定一个 `Y` 轴的值。
`scaleZ(z)`|定义 `3D` 缩放转换，通过给定一个 `Z` 轴的值。
`rotate3d(x,y,z,angle)`|定义 `3D` 旋转。
`rotateX(angle)`|定义沿 `X` 轴的 `3D` 旋转。
`rotateY(angle)`|定义沿 `Y` 轴的 `3D` 旋转。
`rotateZ(angle)`|定义沿 `Z` 轴的 `3D` 旋转。
`perspective(n)`|定义 `3D` 转换元素的透视视图。