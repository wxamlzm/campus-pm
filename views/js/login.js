// 数据传输需求：
// 将前端用户输入的两个input里的值获取
// 如果用户选择的是密码登录，则向服务器发送请求从数据库匹配用户名密码是否符合
// 如果用户选择的是短信验证码登录，我也不知道怎么做，先发送post请求到服务器路由，然后console一下吧
// 2.判断由触发事件绑定函数中的
var ajax = function(){
  // 1.创建XHLHttpRequest
  var xhr = new XMLHttpRequest;

  // 4.添加传输过程中的事件监听
  xhr.onreadystatechange = function(){
    // 由于监听的过程会包括从open()开始的各环节，因此需要在请求创建前就设置a
    if(4 == xhr.readyState){
      if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
        let result = JSON.parse(xhr.responseText);
        // 服务器状态码返回正常
        // 判断，并执行对应的业务逻辑
      }else{
        // 服务器状态码返回错误
        // 执行对应的报错操作
      }
    }
  }
  // 2.创建http请求，设置请求的形式，路径，同步异步
  xhr.open('');
  // 3.设置请求头
  xhr.setRequestHeader('');
  // 3.将需要post到后端的数据，作为实参传入send()方法中
  xhr.send('');
}

// 交互效果需求，
// 需要在login-title触发点击事件的时候，切换面板
// 其中login-input中的input分别为
// 1.
// <input type="text" data-id='byPwd' placeholder="请输入手机号/邮箱/用户名">
// <input type="password" data-id='byPwd' placeholder="请输入密码"></input>
// 2.
// <input type="text" data-id='byMsg' placeholder="请输入手机号">
// <input type="text" data-id='byMsg' placeholder="请输入验证码">


var divTabBox = document.querySelector('[data-tabBox]');
// 当title的a标签被点击的时候，绑定以下事件处理函数
divTabBox.onclick = e => {
  var aPwd = divTabBox.querySelector(':first-child');
  var aPhone = divTabBox.querySelector(':last-child');
  var divInput = document.querySelector('.login-input');
  var aLogin = document.querySelector('.login-btn>[data-model]')

  // 如果点击的是A
  var tabs = document.querySelectorAll('[data-tab]');
  if ('A' === e.target.nodeName){
    // 设置样式
    for (let tab of tabs){
      tab.dataset.status = false;
    }

    e.target.dataset.status = true;

    // 根据点击情况更换面板
    // 1.innerHTML方法
    if ( aPwd == e.target){
      // 当点击的是pwd的时候
      divInput.innerHTML = `
        <input type="text" data-id='byPwd' placeholder="请输入手机号/邮箱/用户名">
        <input type="password" data-id='byPwd' placeholder="请输入密码"></input>
      `;
      // 同时设置data-model= 'pwd'
      aLogin.dataset.model = 'pwd';
    }else if (aPhone == e.target){
      // 当点击的是phone的时候
      divInput.innerHTML = `
        <input type="text" data-id='byMsg' placeholder="请输入手机号">
        <input type="text" data-id='byMsg' placeholder="请输入验证码">
      ` 
      // 同时设置data-btnModel= 'phone'
      aLogin.dataset.model = 'phone';
    }
  }
}

// 获取
var btnLogin = document.getElementById('[data-btn]');
// 当登录按钮被点击的时候，绑定以下事件处理函数
btnLogin.onclick = function(){
  // 先判断目前的模式是哪一种
}
