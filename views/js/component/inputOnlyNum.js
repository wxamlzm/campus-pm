/*
DATE: 2021/08/16;
AUTHOR: ZD;
EFFECT: 文本框内只能输入数字
*/
// 获取触发事件的dom对象
var input = document.getElementById('input');

// 绑定事件触发处理函数
input.oninput = function(e){
  // 判断e.target是否是phone
  if('phone' == e.target.dataset.type ||
     'code' == e.target.dataset.type){
    // 每输入一个字符，就用正则判断是不是都是数字（\d+）
    var reg = /^\d+$/;
    var phone = e.target.value;
    var result = reg.test(phone);
    // 如果不是，就slice，截取从开头到倒数第一个字符的字符串
    if(false == result){
      phone = e.target.value.slice(0,-1);
    }
    
    // // 放入文本框内容中
    e.target.value = phone;
  }
}