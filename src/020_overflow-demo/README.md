# Overflow CSS5

`overflow` 属性指定在元素的内容太大而无法放入指定区域时是剪裁内容还是添加滚动条。

`overflow` 属性可设置以下值：

- `visible` - 默认。溢出没有被剪裁。内容在元素框外渲染
- `hidden` - 溢出被剪裁，其余内容将不可见
- `scroll` - 溢出被剪裁，同时添加滚动条以查看其余内容
- `auto` - 与 `scroll` 类似，但仅在必要时添加滚动条


**注释**：
- `overflow` 属性仅适用于具有指定高度的块元素。
- 在 `OS X Lion`（在 `Mac` 上）中，滚动条默认情况下是隐藏的，并且仅在使用时显示（即使设置了 `"overflow:scroll"`）。

## All Overflow Props

Property|Description
-|-
`overflow`|规定如果内容溢出元素框会发生什么情况。
`overflow-x`|规定在元素的内容区域溢出时如何处理内容的左/右边缘。
`overflow-y`|指定在元素的内容区域溢出时如何处理内容的上/下边缘。