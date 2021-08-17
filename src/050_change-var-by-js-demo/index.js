// 获取根元素
var r = document.querySelector(':root');

// 创建获取变量值的函数
function myFunction_get() {
  // 获取根的样式（属性和值）
  var rs = getComputedStyle(r);
  // 弹出 --blue 变量的值
  alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
}

// 创建设置变量值的函数
function myFunction_set() {
  // 把变量 --blue 的值设置为另一个值（在这里是 "lightblue"）
  r.style.setProperty('--blue', 'lightblue');
}