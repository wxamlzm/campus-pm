// 引入框架
const express = require('express');
// 引入path模块用于解析地址路径
const path = require('path');
// 引入用户路由器
const userRouter = require('./routes/users.js');
// 

// 创建web服务器
const app = express();
app.listen(8080, () => {
    console.log('linkStart');
});

// 将post请求的数据解析为对象
app.use(express.urlencoded({extended:false}));

// 托管静态资源
app.use(express.static(path.join(__dirname, 'views')));

// 挂载路由器 ./users
app.use('/users', userRouter);

// 挂载错误处理中间件
app.use( (err, req, res, next) => {
    // 后台输出得到的错误信息
    console.log(err);
    // 同时响应500，返回给前台告知错误情况
    res.status(500).send({
        code:500,
        msg:'服务器端错误'
    });
})