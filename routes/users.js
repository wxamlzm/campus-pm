// 引入express
const express = require('express');
// 引入连接池
const pool = require('../util/pool.js');
// 创建路由对象
const router = express.Router();

// 挂载给用户显示的岗位列表接口(GET, /post)
// 地址（/users/post);
router.get('/post', (req,res,next)=>{
    // 接收并转换请求为对象
    console.log('getmsg');
    // 向数据库请求数据 
    let strSql = 'SELECT* FROM post_info';
    pool.query(strSql, (err, data) => {
        // 处理错误
        if(err){
            next(err);
            console.log('error');
            return;
        }
        console.log('success');
        res.send({code:1, msg:'返回所有数据', data:data});
    });
});

module.exports = router;