# CSS 布局 - 水平和垂直对齐
## 居中对齐元素
要使块元素（例如 `<div>` ）水平居中，请使用 `margin: auto;`。
设置元素的宽度将防止其延伸到容器的边缘。
然后，元素将占用指定的宽度，剩余空间将在两个外边距之间平均分配。
```css
/* 
div 居中显示
注意：如果未设置 width 属性（或将其设置为 100％），则居中对齐无效。
*/
.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 20px;
}
```
## 居中对齐文本
如果仅需在元素内居中文本，请使用 `text-align: center;`
```css
.center {
  text-align: center;
  border: 3px solid green;
}
```

## 居中对齐图像
如需居中图像，请将左右外边距设置为 `auto`，并将其设置为块元素。
```css
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
```

## 左和右对齐 - 使用 `position`
对齐元素的一种方法是使用 `position: absolute;`
```css
/*
右对齐
*/
.right {
  position: absolute;
  right: 0px;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 20px;
}
/*
左对齐
*/
.right {
  position: absolute;
  left: 0px;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 20px;
}
```

## 左和右对齐 - 使用 `float`
对齐元素的另一种方法是使用 `float` 属性
```css
/*
右对齐
注意：如果一个元素比包含它的元素高，并且它是浮动的，它将溢出其容器。您可以使用 clearfix hack 来解决此问题
*/
.right {
  float: right;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 10px;
}
.clearfix {
  overflow: auto;
}
```

## 垂直对齐 - 使用 `padding`
有很多方法可以在 `CSS` 中垂直对齐元素。一个简单的解决方案是使用上下内边距
```css
.center {
  padding: 70px 0;
  border: 3px solid green;
}
```
如需同时垂直和水平对齐，请使用 `padding` 和 `text-align: center;`
```css
.center {
  padding: 70px 0;
  border: 3px solid green;
  text-align: center;
}
/* 
如果有多行文本，请添加如下代码
*/
.center p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
}
```

## 垂直对齐 - 使用 `position` 和 `transform`
如果您的选择不是 `padding` 和 `line-height`，则另一种解决方案是使用 `position` 和 `transform` 属性
```css
.center { 
  height: 200px;
  position: relative;
  border: 3px solid green; 
}
.center p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
## 垂直对齐 - 使用 `Flexbox`
您还可以使用 `flexbox` 将内容居中。请注意，`IE10` 以及更早的版本不支持 `flexbox`
```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 3px solid green; 
}
```




