# Position CSS5

> `position` to set element position type

## Position Props
- `static`
- `relative`
- `fixed`
- `absolute`
- `sticky`

**Note**: You can use key words `top` `bottom` `left` `right` to set it's position, but you must set `position` prop first, or it will be not worked.

### Static
`HTML` 元素默认情况下的定位方式为 `static`（静态）。

静态定位的元素不受 `top`、`bottom`、`left` 和 `right` 属性的影响。`position: static;` 的元素不会以任何特殊方式定位；
```css
div.static {
  position: static;
  border: 3px solid #73AD21;
}
```
### Relative
`position: relative;` 的元素相对于其正常位置进行定位。

设置相对定位的元素的 `top`、`right`、`bottom` 和 `left` 属性将导致其偏离其正常位置进行调整。不会对其余内容进行调整来适应元素留下的任何空间。
```css
div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}
```
### Fixed
`position: fixed;` 的元素是相对于视口定位的，这意味着即使滚动页面，它也始终位于同一位置。 `top`、`right`、`bottom` 和 `left` 属性用于定位此元素。

固定定位的元素不会在页面中通常应放置的位置上留出空隙。
```css
div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}
```
### Absolute
`position: absolute;` 的元素相对于最近的定位祖先元素进行定位（而不是相对于视口定位，如 `fixed`）。

然而，如果绝对定位的元素没有祖先，它将使用文档主体（`body`），并随页面滚动一起移动。
```css
div.relative {
  position: relative;
  width: 400px;
  height: 200px;
  border: 3px solid #73AD21;
} 

div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  height: 100px;
  border: 3px solid #73AD21;
}
```
**注意**：“被定位的”元素是其位置除 `static` 以外的任何元素。

### Sticky
`position: sticky;` 的元素根据用户的滚动位置进行定位。

粘性元素根据滚动位置在相对（`relative`）和固定（`fixed`）之间切换。起先它会被相对定位，直到在视口中遇到给定的偏移位置为止 - 然后将其“粘贴”在适当的位置（比如 `position:fixed;`）。
```css
div.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: green;
  border: 2px solid #4CAF50;
}
```
**注意**：`Internet Explorer`、`Edge 15` 以及更早的版本不支持粘性定位。 `Safari` 需要 `-webkit-` 前缀。您还必须至少指定 `top`、`right`、`bottom` 或 `left` 之一，以便粘性定位起作用。

## Z-Index
> 在对元素进行定位时，它们可以与其他元素重叠。`z-index` 属性指定元素的堆栈顺序（哪个元素应放置在其他元素的前面或后面）。元素可以设置正或负的堆叠顺序。
```css
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```
具有较高堆叠顺序的元素始终位于具有较低堆叠顺序的元素之前。

**注意**：如果两个定位的元素重叠而未指定 `z-index`，则位于 `HTML` 代码中最后的元素将显示在顶部。
