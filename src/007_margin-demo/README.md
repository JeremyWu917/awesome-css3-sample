# Margin CSS5

## Margin
- margin-top
- margin-right
- margin-bottom
- mergin-left
> Note

You can set value as below
- auto
- length
- %
- inherit

> Sample

```css
// margin-top\margin-right\margin-bottom\margin-left
p {
  margin: 25px 50px 75px 100px;
}
```
## Outer Margin Merge

![outer-margin-merge](https://gitee.com/jeremywuiot/img-res-all/raw/master/src/iie_shop/outer-margin-merge.png)
![inner-margin-merge](https://gitee.com/jeremywuiot/img-res-all/raw/master/src/iie_shop/inner-margin-merge.png)

## All Mergin Props
Propperty|Description
-|-
margin|用于在一条声明中设置外边距属性的简写属性。
margin-bottom|设置元素的下外边距。
margin-left|设置元素的左外边距。
margin-right|设置元素的右外边距。
margin-top|设置元素的上外边距。

## Padding
- padding-top
- padding-right
- padding-bottom
- padding-left
> Note

You can set value as below
- length
- %
- inherit

:warning: Parameter's value must bigger then zero
> Sample

```css
// padding-top\padding-right\padding-bottom\padding-left
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
// Equals as below
div {
  padding: 50px 30px 50px 80px;
}
```

## All Padding Props
Property|Description
-|-
padding|用于在一条声明中设置所有内边距属性的简写属性。
padding-bottom|设置元素的下内边距。
padding-left|设置元素的左内边距。
padding-right|设置元素的右内边距。
padding-top|设置元素的上内边距。
