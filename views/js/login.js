// 交互效果需求，
// 需要在login-title触发点击事件的时候，切换面板
// 其中login-input中的input分别为
// 1.
// <input type="text" data-id='byPwd' placeholder="请输入手机号/邮箱/用户名">
// <input type="password" data-id='byPwd' placeholder="请输入密码"></input>
// 2.
// <input type="text" data-id='byMsg' placeholder="请输入手机号">
// <input type="text" data-id='byMsg' placeholder="请输入验证码">

// 封装 byPwd 和 byMsg两个状态的DOM
// 因为有两个可以考虑用class尝试
class Input {
  constructor(a,b){

  }
  fun(){

  }
}

var byPwdDom = new Input(1, 2);
var byMsgDom = new Input(2, 3);

var loginInput = document.querySelector('.login-input');

var tabBox = document.querySelector('[data-tabBox]');
// 对父级绑定事件处理函数
tabBox.onclick = e => {
  var aPwd = tabBox.querySelector(':first-child');
  var aPhone = tabBox.querySelector(':last-child');
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
    // if ( aPwd == e.target){
    //   // 当点击的是pwd的时候
    //   loginInput.innerHTML = `
    //   <input type="text" data-id='byPwd' placeholder="请输入手机号/邮箱/用户名">
    //   <input type="password" data-id='byPwd' placeholder="请输入密码"></input>
    //   `;
    // }else if (aPhone == e.target){
    //   // 当点击的是phone的时候
    //   loginInput.innerHTML = `
    //   <input type="text" data-id='byMsg' placeholder="请输入手机号">
    //   <input type="text" data-id='byMsg' placeholder="请输入验证码">
    //   `      
    // }

    // 2.通过dom方法添加两个新input
    // 3.新增一个文档片段对象
    // 3.1 将子元素添加到文档片段对象中
    // 3.2 将文档片段对象一次性添加到页面上

    // 1.创建一个新的空元素对象
    var input1 = document.createElement('input');
    var input2 = document.createElement('input');

    // 2.为新元素添加必要属性
    input1.setAttribute('placeholder','请输入手机号/邮箱/用户名');
    input1.setAttribute('type', 'text');
    input2.setAttribute('placeholder', '请输入密码');
    input2.setAttribute('type', 'password');
    // 3.新增一个文档片段对象
    var frag = document.createDocumentFragment();
    frag.appendChild(input1);
    frag.appendChild(input2);

    if (aPwd == e.target){
      
    }else if (aPhone == e.target){

    }
  }
}













// 数据传输需求：
// 1.在点击login-btn按钮后，获取两个input中的值