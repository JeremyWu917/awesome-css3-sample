# CSS 多重背景
> CSS 允许您通过 `background-image` 属性为一个元素添加多幅背景图像，不同的背景图像用逗号隔开，并且图像会彼此堆叠，其中的第一幅图像最靠近观看者

## CSS 背景尺寸
CSS `background-size` 属性允许您指定背景图像的大小。
可以通过长度、百分比或使用以下两个关键字之一来指定背景图像的大小：`contain` 或 `cover`。

`background-size` 的其他两个可能的值是 `contain` 和 `cover`。
`contain` 关键字将背景图像缩放为尽可能大的尺寸（但其宽度和高度都必须适合内容区域）。这样，取决于背景图像和背景定位区域的比例，可能存在一些未被背景图像覆盖的背景区域。
`cover` 关键字会缩放背景图像，以使内容区域完全被背景图像覆盖（其宽度和高度均等于或超过内容区域）。这样，背景图像的某些部分可能在背景定位区域中不可见。

## 定义多个背景图像的尺寸
在处理多重背景时，`background-size` 属性还可以接受多个设置背景尺寸的值（使用逗号分隔的列表）。
```css
#example1 {
  background: url(tree.png) left top no-repeat, url(flower.gif) right bottom no-repeat, 
  	url(paper.gif) left top repeat;
  background-size: 50px, 130px, auto;
}
```
## 全尺寸背景图像
现在，我们希望网站上的背景图像始终覆盖整个浏览器窗口。

### 具体要求如下：

- 用图像填充整个页面（无空白）
- 根据需要缩放图像
- 在页面上居中图像
- 不引发滚动条
- 下面的例子显示了如何实现它：使用 `<html>` 元素（`<html>` 元素始终至少是浏览器窗口的高度）。然后在其上设置固定且居中的背景。最后使用 `background-size` 属性调整其大小：
```css
html {
  background: url(img_man.jpg) no-repeat center fixed; 
  background-size: cover;
}
```
## Hero Image
您还可以在 `<div>` 上使用不同的背景属性来创建 `Hero Image`（带有文本的大图像），并将其放置在您希望的位置上。
```css
.hero-image {
  background: url(img_man.jpg) no-repeat center; 
  background-size: cover;
  height: 500px;
  position: relative;
}
```

## CSS `background-origin` 属性
> CSS `background-origin` 属性指定背景图像的位置。

该属性接受三个不同的值：

- `border-box` - 背景图片从边框的左上角开始
- `padding-box` -背景图像从内边距边缘的左上角开始（默认）
- `content-box` - 背景图片从内容的左上角开始

下面的示例展示了 `background-origin` 属性：
```css
#example1 {
  border: 10px solid black;
  padding: 35px;
  background: url(flower.gif);
  background-repeat: no-repeat;
  background-origin: content-box;
}
```

## CSS `background-clip` 属性
> CSS `background-clip` 属性指定背景的绘制区域。

该属性接受三个不同的值：

- `border-box` - 背景绘制到边框的外部边缘（默认）
- `padding-box` - 背景绘制到内边距的外边缘
- `content-box` - 在内容框中绘制背景

下面的例子展示了 `background-clip` 属性：
```css
#example1 {
  border: 10px dotted black;
  padding: 35px;
  background: yellow;
  background-clip: content-box;
}
```

## CSS 高级背景属性
属性|描述
-|-
`background`|用于在一条声明中设置所有背景属性的简写属性。
`background-clip`|规定背景的绘制区域。
`background-image`|为一个元素指定一幅或多幅背景图像。
`background-origin`|规定背景图像的放置位置。
`background-size`|规定背景图像的大小。
