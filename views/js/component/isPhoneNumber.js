/*
DATE:2021/08/15;
AUTHOR:ZD;
EFFECT:校验传入的是否是正规的手机号码，返回布尔值
*/
var isPhoneNumber = phone => {
  var reg = /^1[3-9]\d{9}$/;
  var res = reg.test(phone);
  return res;
}

// var code = isPhoneNumber(12557141002);
// console.log(code);
