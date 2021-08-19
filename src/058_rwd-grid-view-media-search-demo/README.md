# 响应式网页设计 - 媒体查询
## 什么是媒体查询？
媒体查询是 `CSS3` 中引入的一种 `CSS` 技术。
仅在满足特定条件时，它才会使用 `@media` 规则来引用 `CSS` 属性块。

##### 实例
如果浏览器窗口是 `600px` 或更小，则背景颜色为浅蓝色：
```css
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

## 添加断点
使用媒体查询在 `768px` 处添加断点：
##### 实例
当屏幕（浏览器窗口）小于 `768px` 时，每列的宽度应为 `100％`：
```css
/* 针对桌面设备： */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

@media only screen and (max-width: 768px) {
  /* 针对手机： */
  [class*="col-"] {
    width: 100%;
  }
}
```

## 始终移动优先设计
> 移动优先（`Mobile First`）指的是在对台式机或任何其他设备进行设计之前，优先针对移动设备进行设计（这将使页面在较小的设备上显示得更快）。

这意味着我们必须在 `CSS` 中做一些改进。
当宽度小于 `768px` 时，我们应该修改设计，而不是更改宽度。我们就这样进行了“移动优先”的设计：
##### 实例
```css
/* 针对手机： */
[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  /* 针对桌面： */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}
```

## 典型的设备断点
高度和宽度不同的屏幕和设备不计其数，因此很难为每个设备创建精确的断点。为了简单起见，您可以瞄准这五组：
```css
/* 超小型设备（电话，600px 及以下） */
@media only screen and (max-width: 600px) {...} 

/* 小型设备（纵向平板电脑和大型手机，600 像素及以上） */
@media only screen and (min-width: 600px) {...} 

/* 中型设备（横向平板电脑，768 像素及以上） */
@media only screen and (min-width: 768px) {...} 

/* 大型设备（笔记本电脑/台式机，992px 及以上） */
@media only screen and (min-width: 992px) {...} 

/* 超大型设备（大型笔记本电脑和台式机，1200px 及以上） */
@media only screen and (min-width: 1200px) {...}
```

## 方向：人像 / 风景
媒体查询还可用于根据浏览器的方向来更改页面的布局。
您可以设置一组 `CSS` 属性，这些属性仅在浏览器窗口的宽度大于其高度时才适用，即所谓的“横屏”方向：

##### 实例
如果方向为横向模式（`landscape mode`），则网页背景为浅蓝色：
```css
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

## 用媒体查询隐藏元素
媒体查询的另一种常见用法是在不同屏幕尺寸上对元素进行隐藏：

##### 实例
```css
/* 如果屏幕尺寸为 600 像素或更小，请隐藏该元素 */
@media only screen and (max-width: 600px) {
  div.example {
    display: none;
  }
}
```

## 用媒体查询修改字体
您还可以使用媒体查询来更改不同屏幕尺寸上的元素的字体大小：

##### 实例
```css
/* 如果屏幕尺寸为 601px 或更大，请将 <div> 的 font-size 设置为 80px */
@media only screen and (min-width: 601px) {
  div.example {
    font-size: 80px;
  }
}

/* 如果屏幕尺寸为 600px 或更小，请将 <div> 的 font-size 设置为 30px */
@media only screen and (max-width: 600px) {
  div.example {
    font-size: 30px;
  }
}
```
