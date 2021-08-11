// 登录部分与注册部分切换
// 默认显示登录按钮，点击注册按钮后触发
// 尝试通过冒泡来进行实现
var tabBox = document.querySelector('[data-tabBox]');
// 利用事件冒泡绑定两个a元素的事件处理函数
// 同时通过识别获取的元素对象情况，来决定切换
tabBox.onclick = e => {
    var div = document.querySelector('.login-panel');

    // 设置两个面板的对象
    // 获取目标元素对象
    // 获取需要调整的整个dom对象的
    var loginPanelByPwd = {
        'login-title': {
            aByPwd: tabBox.querySelector(':first-child'),
            aByPhone: tabBox.querySelector(':last-child')
        },
        'login-input': {
            inputTXT: div.querySelector('.login-input > :first-child'),
            inputPwd: div.querySelector('.login-input > :last-child')
        },
    }

    // 设置需要修改的元素对象属性
    // 两个面板永远设置相反的状态,用来控制
    var loginByPwd = {
        text: '请输入手机号/邮箱/用户名',
        pwd: '请输入密码',
        status: 'true',
        link1: '忘记密码',
        link2: '免费注册'
    }
    
    var loginByMsg = {
        text:'请输入手机号',
        msg: '请输入短信验证码',
        btn: '获取验证码',
        status: 'false',
        link2: '免费注册'
    }
    // 点击目标元素后，首先设置当前目标元素状态为true，同时设置另一个目标元素状态为false

    // 选中两个title中的两个a标签
    var titles = document.querySelectorAll('[data-tab]');

    if ('A' === e.target.nodeName){
        // 先重置两个a标签的状态为false，再设置目标元素状态为true
        // 遍历类数组对象设置false重置
        for (let title of titles){
            title.dataset.status = false;
        }
        e.target.dataset.status = true;
        // 通过判断a标签的值，设置对应的业务需求
        if (loginPanel.aByPwd === e.target){
            // 获取修改元素所需的dom对象
            var input
        }else if (loginPanel.aByPhone === e.target){

        }
    }
}
// 登录部分
// 获取用户输入的用户名和密码的值

// 注册部分