# 响应式网页设计 -视口

## 什么是视口
> 视口（`viewport`）是用户在网页上的可见区域。

视口随设备而异，在移动电话上会比在计算机屏幕上更小。
在平板电脑和手机之前，网页仅设计为用于计算机屏幕，并且网页拥有静态设计和固定大小是很常见的。
然后，当我们开始使用平板电脑和手机上网时，固定大小的网页太大了，无法适应视口。为了解决这个问题，这些设备上的浏览器会按比例缩小整个网页以适合屏幕大小。
这并不是完美的！勉强是一种快速的修正。

## 设置视口
> `HTML` 引入了一种方法，使 `Web` 设计者可以通过 `meta` 标签来控制视口。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
它为浏览器提供了关于如何控制页面尺寸和缩放比例的指令。
`width=device-width` 部分将页面的宽度设置为跟随设备的屏幕宽度（视设备而定）。
当浏览器首次加载页面时，`initial-scale=1.0` 部分设置初始缩放级别。

## 把内容调整到视口的大小
> 用户习惯在台式机和移动设备上垂直滚动网站，而不是水平滚动！
>  因此，如果迫使用户水平滚动或缩小以查看整个网页，则会导致不佳的用户体验。

还需要遵循的一些附加规则：

1. 请勿使用较大的固定宽度元素 
   - 例如，如果图像的宽度大于视口的宽度，则可能导致视口水平滚动。请务必调整此内容以适合视口的宽度。

2. 不要让内容依赖于特定的视口宽度来呈现好的效果 
   - 由于以 `CSS` 像素计的屏幕尺寸和宽度在设备之间变化很大，因此内容不应依赖于特定的视口宽度来呈现良好的效果。

3. 使用 `CSS` 媒体查询为小屏幕和大屏幕应用不同的样式 
   - 为页面元素设置较大的 `CSS` 绝对宽度将导致该元素对于较小设备上的视口太宽。而是应该考虑使用相对宽度值，
   - 例如 `width: 100%`。另外，要小心使用较大的绝对定位值，这可能会导致元素滑落到小型设备的视口之外。
