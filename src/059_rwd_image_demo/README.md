# 响应式网页设计 - 图像

## 使用 `width` 属性
如果 `width` 属性设置为百分比，且高度设置为 `"auto"`，则图像将进行响应来放大或缩小
##### 实例
```css
img {
  width: 100%;
  height: auto;
}
```
请注意，在上面的例子中，图像可以放大到大于其原始大小。在多数情况下，更好的解决方案是改为使用 `max-width` 属性。

## 使用 `max-width` 属性
如果将 `max-width` 属性设置为 `100％`，则图像将按需缩小，但绝不会放大到大于其原始大小：
```css
img {
  max-width: 100%;
  height: auto;
}
```

## 向实例网页添加图像
##### 实例
```css
img {
  width: 100%;
  height: auto;
}
```

## 背景图像
背景图像也可以响应调整大小和缩放比例。
这是我们展示的三种不同方法：
- 如果将 `background-size` 属性设置为 `"contain"`，则背景图像将缩放，并尝试匹配内容区域。不过图像将保持其长宽比（图像宽度与高度之间的比例关系）
- 如果将 `background-size` 属性设置为 `"100% 100%"`，则背景图像将拉伸以覆盖整个内容区域
- 如果 `background-size` 属性设置为 `"cover"`，则背景图像将缩放以覆盖整个内容区域。请注意，`"cover"` 值保持长宽比，且可能会裁剪背景图像的某部分

## 为不同设备准备不同图像
大幅的图像在大型计算机屏幕上可以完美显示，但在小型设备上就没用了。为什么在不得不缩小图像时又加载大图像呢？为了减少负载或出于任何其他原因，您可以使用媒体查询在不同的设备上显示不同的图像。
这是一幅大图像和一幅小图像，会在不同的设备上显示：

##### 实例
```css
/* 针对小于 400 像素的宽度： */
body {
  background-image: url('img_smallflower.jpg'); 
}

/* 针对 400 像素或更大的宽度： */
@media only screen and (min-width: 400px) {
  body { 
    background-image: url('img_flowers.jpg'); 
  }
}
```
可以使用媒体查询 `min-device-width` 而不是 `min-width` 来检查设备宽度，而不是浏览器宽度。然后，当您调整浏览器窗口的大小时，图像将不会变化

##### 实例
```css
/* 针对小于 400 像素的设备： */
body {
  background-image: url('img_smallflower.jpg'); 
}

/* 针对 400 像素及更大的设备： */
@media only screen and (min-device-width: 400px) {
  body { 
    background-image: url('img_flowers.jpg'); 
  }
}
```

## `HTML5 <picture>` 元素
> `HTML5` 引入了 `<picture>` 元素，该元素使您可以定义多幅图像

`<picture>` 元素的作用类似于 `<video>` 和 `<audio>` 元素。我们设置了不同的来源，而匹配优先权的第一个来源是正在使用的来源
```css
<picture>
  <source srcset="img_smallflower.jpg" media="(max-width: 400px)">
  <source srcset="img_flowers.jpg">
  <img src="img_flowers.jpg" alt="Flowers">
</picture>
```
`srcset` 属性是必需的，它定义图像的来源。`media` 属性是可选的。

**提示**：您还应该为不支持 `<picture>` 元素的浏览器定义 `<img>` 元素。










