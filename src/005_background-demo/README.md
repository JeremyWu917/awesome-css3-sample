# Background CSS5
## Key Words
- Background Color
- Background Image
- Background Repeat
- Background Attachment (Background img is fixed or scrollable)

## Note
Background props can be wrote like this
```css
body {
  background-color: #ffffff;
  background-image: url("tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}
// Equals to below code
body {
  background: #ffffff url("tree.png") no-repeat right top;
}
```
But, props' sequence should be followed
1. `background-color`
2. `background-image`
3. `background-repeat`
4. `backgroud-attachment`
5. `background-position`

## All CSS Background Props
Property|Descreption
-|-
background|brief write, to set all props in one line
background-attachment|to set background image as fixed or scroll
background-clip|to set background cavas area
background-color|to set background color
background-image|to set background image
background-origin|to set rules where to put the image
background-position|to set image position where to start from
background-repeat|to set image repeat style(repeat-x repeat-y no-repeat)
background-size|to set rules of image size
