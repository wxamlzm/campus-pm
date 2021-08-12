// 获取外层父级作为事件委托对象
var tabBox = document.querySelector('[data-tabBox]');
// 对父级绑定事件处理函数
tabBox.onclick = e => {
    var div = document.querySelector('.login-panel');
    // 创建整个panel的虚拟dom对象
    var loginPanelDom = {
        'login-title': {
            aByPwd: tabBox.querySelector(':first-child'),
            aByPhone: tabBox.querySelector(':last-child')
        },
        'login-input': {
            inputTXT: div.querySelector('.login-input > :first-child'),
            inputPwd: div.querySelector('.login-input > :last-child')
        },
    }
    // 设置需要修改的元素对象属性的值
    var loginByPwd = {
        text: '请输入手机号/邮箱/用户名',
        pwd: '请输入密码',
        link1: '忘记密码',
        link2: '免费注册'
    }
    
    var loginByMsg = {
        text:'请输入手机号',
        msg: '请输入短信验证码',
        btn: '获取验证码',
        link2: '免费注册'
    }
    // 选中两个tab中的两个a标签
    var tabs = document.querySelectorAll('[data-tab]');
    // 点击目标元素后，首先设置当前目标元素状态为true，同时设置另一个目标元素状态为false
    if ('A' === e.target.nodeName){
        for (let tab of tabs){
            tab.dataset.status = false;
        }
        e.target.dataset.status = true;
        // 通过判断a标签的值，设置对应的业务需求
        if (loginPanelDom['login-title'].aByPwd == e.target){
            loginPanelDom['login-input'].inputTXT.placeholder = loginByPwd.text;
            loginPanelDom['login-input'].inputPwd.placeholder = loginByPwd.pwd;
        }else if (loginPanelDom['login-title'].aByPhone == e.target){
            loginPanelDom['login-input'].inputTXT.placeholder = loginByMsg.text;
            loginPanelDom['login-input'].inputPwd.placeholder = loginByMsg.msg;
        }
    }
}
// 以密码形式登录
// 获取input-

// 以验证码形式登录
