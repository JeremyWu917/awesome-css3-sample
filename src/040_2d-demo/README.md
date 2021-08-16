# CSS 2D 转换
> CSS 转换（`transforms`）允许您移动、旋转、缩放和倾斜元素

## CSS 2D 转换方法
- `translate()`
- `rotate()`
- `scaleX()`
- `scaleY()`
- `scale()`
- `skewX()`
- `skewY()`
- `skew()`
- `matrix()`

### `translate()` 方法
`translate()` 方法从其当前位置移动元素（根据为 `X` 轴和 `Y` 轴指定的参数）。
下面的例子把 `<div>` 元素从其当前位置向右移动 `50` 个像素，并向下移动 `100` 个像素：
```css
div {
  transform: translate(50px, 100px);
}
```

### `rotate()` 方法
`rotate()` 方法根据给定的角度顺时针或逆时针旋转元素（使用负值将逆时针旋转元素）。
下面的例子把 `<div>` 元素顺时针旋转 `20` 度：
```css
div {
  transform: rotate(20deg);
}
```

### `scale()` 方法
`scale()` 方法增加或减少元素的大小（根据给定的宽度和高度参数）。
下面的例子把 `<div>` 元素增大为其原始宽度的两倍和其原始高度的三倍：
```css
div {
  transform: scale(2, 3);
}
```

### `scaleX()` 方法
`scaleX()` 方法增加或减少元素的宽度

### `scaleY()` 方法
`scaleY()` 方法增加或减少元素的高度。

### `skew()` 方法
`skew()` 方法使元素沿 `X` 和 `Y` 轴倾斜给定角度。
下面的例子使 `<div>` 元素沿 `X` 轴倾斜 `20` 度，同时沿 `Y` 轴倾斜 `10` 度：
```css
div {
  transform: skew(20deg, 10deg);
}
```

### `skewX()` 方法
`skewX()` 方法使元素沿 `X` 轴倾斜给定角度。

### `skewY()` 方法
`skewY()` 方法使元素沿 `Y` 轴倾斜给定角度。

### `matrix()` 方法
> matrix() 方法把所有 2D 变换方法组合为一个。

`matrix()` 方法可接受六个参数，其中包括数学函数，这些参数使您可以旋转、缩放、移动（平移）和倾斜元素。
参数如下：`matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())`

## CSS 转换属性
属性|描述
-|-
`transform`|向元素应用 `2D` 或 `3D` 转换。
`transform-origin`|允许你改变被转换元素的位置。

## CSS 2D 转换方法
函数|描述
-|-
`matrix(n,n,n,n,n,n)`|定义 `2D` 转换，使用六个值的矩阵。
`translate(x,y)`|定义 `2D` 转换，沿着 `X` 和 `Y` 轴移动元素。
`translateX(n)`|定义 `2D` 转换，沿着 `X` 轴移动元素。
`translateY(n)`|定义 `2D` 转换，沿着 `Y` 轴移动元素。
`scale(x,y)`|定义 `2D` 缩放转换，改变元素的宽度和高度。
`scaleX(n)`|定义 `2D` 缩放转换，改变元素的宽度。
`scaleY(n)`|定义 `2D` 缩放转换，改变元素的高度。
`rotate(angle)`|定义 `2D` 旋转，在参数中规定角度。
`skew(x-angle,y-angle)`|定义 `2D` 倾斜转换，沿着 `X` 和 `Y` 轴。
`skewX(angle)`|定义 `2D` 倾斜转换，沿着 `X` 轴。
`skewY(angle)`|定义 `2D` 倾斜转换，沿着 `Y` 轴。
