// 登录部分与注册部分切换
// 默认显示登录按钮，点击注册按钮后触发
// 尝试通过冒泡来进行实现
var div = document.querySelector('[data-tab]');
var aLogin = div.querySelector(':first-child');
var aReg = div.querySelector(':last-child');
// console.log(aLogin, aReg);
// 利用事件冒泡绑定两个a元素的事件处理函数
// 同时通过识别获取的元素对象情况，来决定切换
var login = {
    text: '请输入手机号码/邮箱/用户名',
    pwd: '请输入密码',
    btn: '登录'
}

var reg = {
    text:'请输入常用的手机号码/邮箱',
    pwd: '8位以上包含数字和字母',
    btn: '注册'
}

div.onclick = e => {
    var panel = e.target.parentElement.parentElement;
    var inputTXT = e.target.parentElement.nextElementSibling.querySelector(':first-child');
    var inputPWD = e.target.parentElement.nextElementSibling.querySelector(':last-child');
    var aBtn = inputPWD.parentElement.nextElementSibling.children[0];

    if ('A' === e.target.nodeName){
        if (aLogin === e.target){
            inputTXT.placeholder = login.text;
            inputPWD.placeholder = login.pwd;
            aBtn.innerHTML = login.btn;
        }else if (aReg === e.target){
            inputTXT.placeholder = reg.text;
            inputPWD.placeholder = reg.pwd;
            aBtn.innerHTML = reg.btn;
        }
    }
}
// 登录部分
// 获取用户输入的用户名和密码的值

// 注册部分