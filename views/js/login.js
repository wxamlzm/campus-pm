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
        // 服务器状态码返回错误
        // 执行对应的报错操作
      }
    }
  }
  // 将objAjax中的data属性解析为我们需要传入的参数格式
  var strUrlParams = jsonToStr(objAjax.data);
  // 以objAjax中的type属性的值来判断参数的处理方式，进行拼接并发送请求
  if('GET' == objAjax.type){
    // GET方式
    xhr.open('GET', `/users/login?${strUrlParams}`, true);
    xhr.send();
  }else if ('POST' == objAjax.type){
    // POST方式
    xhr.open('POST', `/users/login`, true);
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded;charset=utf-8');
    xhr.send(strUrlParams);
  }//待完善
}
/*
DATE: 2021/08/14;
AUTHOR: ZD;
EFFECT: 需要在login-title触发点击事件的时候，切换面板
*/
var divTabBox = document.querySelector('[data-tabBox]');
divTabBox.onclick = function(e){
  let aPwd = divTabBox.querySelector(':first-child');
  let aPhone = divTabBox.querySelector(':last-child');
  let divInput = document.querySelector('.login-input');
  let aLogin = document.querySelector('.login-btn>[data-model]')

  // 判断点击区域
  let tabs = document.querySelectorAll('[data-tab]');
  if ('A' === e.target.nodeName){
    // 设置样式
    for (let tab of tabs){
      tab.dataset.status = false;
    }
    e.target.dataset.status = true;

    // 根据点击情况更换面板
    // 1.innerHTML方法
    if (aPwd == e.target){
      // 当点击的是pwd的时候
      divInput.innerHTML = `
        <input type="text" data-type='txt' placeholder="请输入手机号/邮箱/用户名">
        <input type="password" data-type='pwd' placeholder="请输入密码"></input>
      `;
      // 同时设置data-model= 'pwd'
      aLogin.dataset.model = 'pwd';
    }else if (aPhone == e.target){
      // 当点击的是phone的时候
      divInput.innerHTML = `
        <input type="text" data-type='phone' placeholder="请输入手机号">
        <div>
          <input type="text" data-type='code' placeholder="请输入验证码">
          <a href="javascript:;" data-type='getCode'>获取验证码</a>
        </div>
      ` 
      // 同时设置data-btnModel= 'phone'
      aLogin.dataset.model = 'code';
    }
  }
}
/*
DATE:2021/08/14;
AUTHOR:ZD;
EFFECT:获取页面上data-model为pwd和code模式的数据传输，及数据传递后的业务处理
*/
var aLogin = document.querySelector('[data-btn]');
// 当登录按钮被点击的时候，绑定以下事件处理函数
aLogin.onclick = function(){
  // 获取目前用户键入的数据，并判断是否符合正规的用户名和密码要求

  // 判断目前的模式是哪一种
  let model = this.dataset.model
  if ('pwd' == model){
    console.log(1);
    var objAjax = {
      
      data: {
        uname: document.querySelector('[data-type=txt]').value,
        upwd: document.querySelector('[data-type=pwd]').value,
        model: `${model}`,
      },
      type: 'POST',
      success: function(result){
        // 对后台返回的状态码进行判断
        // 如果是登录成功，那就执行页面跳转
        var code = result.code;
        // 如果是登录失败，那就给与提示，要求重新输入
        if('201' == code){
          alert('用户名或密码错误')
        }else if('200' == code){
          // 无法后退到
          location.replace('/index.html');
        }
      },
    }
    
    ajax(objAjax);
  }else if('code' == model){
    var objAjax = {
      data: {
        phone: document.querySelector('[data-type=phone]').value,
        model: `${model}`,
      },
      type: 'POST',
      success: function(result){
        // 对后台返回的状态码进行判断
        // 如果是登录成功，那就执行页面跳转
        var code = result.code;
        // 如果是登录失败，那就给与提示，要求重新输入
        if('201' == code){
          alert('用户名或密码错误')
        }else if('200' == code){
          // 无法后退到
          location.replace('/index.html');
        }
      },
    }

    // 先校验电话号码是否合法
    var isPhone = isPhoneNumber(objAjax.data.phone);
    if(true == isPhone){
      ajax(objAjax);
    }else{
      // 测试占位
      console.log('请输入正确的手机号');
    }
  }
}
/*
DATE: 2021/08/14;
AUTHOR:ZD;
EFFECT:在按enter的时候模拟触发onclick功能
*/
var inputs = document.querySelectorAll('[data-type]');
for (let input of inputs){
  input.onkeyup = function(e){
    if(13 == e.keyCode){
      aLogin.onclick();
    }
  }
}
/*
DATE: 2021/08/16;
AUTHOR: ZD;
EFFECT: 文本框内只能输入数字
*/
var divInput = document.querySelector('.login-input');
divInput.oninput = function(e){
  // 判断e.target是否是phone
  if('phone' == e.target.dataset.type ||
     'code' == e.target.dataset.type){
    // 每输入一个字符，就用正则判断是不是都是数字（\d+）
    var reg = /^\d+$/;
    var num = e.target.value;
    var result = reg.test(num);
    // 如果不是，就slice，截取从开头到倒数第一个字符的字符串
    if(false == result){
      num = e.target.value.slice(0,-1);
    }
    
    // // 放入文本框内容中
    e.target.value = num;
  }
}


// this视频再看一遍
// arr的6个新函数