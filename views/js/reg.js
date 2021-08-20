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
/*
DATE: 2021/08/14;
AUTHOR: ZD;
EFFECT: 辅助ajax解析对象；数组参数；将传入的对象，或关联数组打散，拼接成符合要求的url,只适用'GET'类方式
*/
var jsonToStr = dataJson => {
  var arr = [];
  for(var key in dataJson){
    arr.push(`${key}=${dataJson[key]}`)
  }
  var strUrlParams = arr.join('&');
  return strUrlParams;
}
/*
DATE: 2021/08/14;
AUTHOR: ZD;
EFFECT: AJAX传输功能;
PARAMS: objAjax{
  data{para1:val,para2:val}, 对象中放入需要传入后台的参数
  type:'method', 选择HTTP请求方法
  success(),  回调函数，在成功的时候指定执行
  error(),    回调函数，在异常的时候指定执行
}
*/
var ajax = objAjax => {
  var xhr = new XMLHttpRequest;
  xhr.onreadystatechange = function(){
    // 由于监听的过程会包括从open()开始的各环节，因此需要在请求创建前就设置a
    if(4 == xhr.readyState){
      if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
        let result = JSON.parse(xhr.responseText);
        // 服务器状态码返回正常
        // 判断，并执行对应的业务逻辑
        objAjax.success(result);
      }else{
        // 待修改
        let result = JSON.parse(xhr.responseText);
        // 服务器状态码返回错误
        // 执行对应的报错操作
        objAjax.fail(result);
      }
    }
  }
  // 将objAjax中的data属性解析为我们需要传入的参数格式
  var strUrlParams = jsonToStr(objAjax.data);
  // 以objAjax中的type属性的值来判断参数的处理方式，进行拼接并发送请求
  if('GET' == objAjax.type){
    // GET方式
    xhr.open('GET', `${objAjax.route}?${strUrlParams}`, true);
    xhr.send();
  }else if ('POST' == objAjax.type){
    // POST方式
    xhr.open('POST', `${objAjax.route}`, true);
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded;charset=utf-8');
    xhr.send(strUrlParams);
  }//待完善
}
/*
DATE: 2021/08/20
AUTHOR: ZD
EFFECT:当点击reg-btn按钮，发送输入数据验证请求到后端
涉及过程中的数据验证和处理，待封装
*/
var aReg = document.querySelector('[data-reg]');
aReg.onclick = function(){
  // checkbox未选中，不能点击,并给到提示
  var inputCheck = document.querySelector('.check:checked');
  if (!inputCheck){
    var span = document.querySelector('[data-msg=rule]');
    span.innerHTML = '请阅读用户协议';
    return
  }
  // 手机号不正规拦截，并给到提示
  var phoneNumber = document.querySelector('[data-input=phone]').value;
  if (!isPhoneNumber(phoneNumber)){
    var span = document.querySelector('[data-msg=phone]');
    span.innerHTML = '请输入正确手机号';
    return;
  }
  // 除以上两种情况发送请求到后台
  var objAjax = {
    data: {
      phone:phoneNumber,
    },
    type: 'POST',
    route:'/users/reg',
    success(result){
      // 对后台返回的状态码进行判断
      // 如果是登录成功，那就执行页面跳转
      var code = result.code;
      // 如果是登录失败，那就给与提示，要求重新输入
      if('201' == code){
        alert('注册失败')
      }else if('200' == code){
        // 无法后退到
        location.replace('/index.html');
      }
    },
    fail(result){
      var span = document.querySelector('[data-msg=phone]');
      span.innerHTML = '手机号已存在';
      // test
      console.log(result);
    }
  }
  ajax(objAjax);
}
/*
DATE: 2021/08/20;
AUTHOR: ZD;
EFFECT:当触发任意input事件的时候，清空span中的提示信息
*/
var inputs = document.querySelector('.reg-input');
inputs.oninput = function(e){
  if('INPUT' == e.target.tagName){
    var spans = document.getElementsByTagName('span');
    for(let span of spans){
      span.innerHTML='';
    }
  }
/*
DATE: 2021/08/16;
AUTHOR: ZD;
EFFECT: 文本框内只能输入数字
*/
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