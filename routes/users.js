// 引入express
const express = require('express');
// 引入连接池
const pool = require('../util/pool.js');
// 创建路由对象
const router = express.Router();

/*
DATE: 2021/08/14;
AUTHOER: ZD;
ADDRESS: (GET, /post);
TABLE: post_info;
RETURN: 全部岗位信息清单
*/
router.get('/post', (req,res,next)=>{
    // 向数据库请求数据 
    let strSql = 'SELECT* FROM post_info';
    pool.query(strSql, (err, data) => {
        // 处理错误
        if(err){
            next(err);
            console.log('error');
            return;
        }
        console.log('岗位数据返回成功');
        res.send({code:1, msg:'返回所有数据', data:data});
    });
});

/*
DATE: 2021/08/14;
AUTHOR: ZD;
ADDRESS: (POST, /login);
TABLE: '';
RETURN: 返回查询结果true或者false，即登录是成功还是失败
*/
router.post('/login', (req,res,next)=>{
    reqObj = req.body;
    // console.log(reqObj);
    var strSql = '';
    var json = {};
    // 判断登录方式
    if('pwd' == reqObj.model){
        // 将从前端获取的用户名和密码，和数据库中的进行匹配
        strSql = `SELECT* FROM user_info WHERE u_name=? AND u_pwd=?`;
        pool.query(strSql,[reqObj.uname, reqObj.upwd],(err, result)=>{
            if(err){
                next(err);
                return;
            }
            if(1 == result.length){
                json = {
                    'code': 200,
                    'msg': '登录成功',
                }
            }else {
                json = {
                    'code': 201,
                    'msg': '登录失败',
                }
            }
            res.send(json);
        });
    }else if('code' == reqObj.model){
        // 让手机号和数据库中进行匹配，返回结果
        console.log(reqObj.phone);
        // strSql = `SELECT*FROM user_info WHERE u_phone=?`;
        // pool.query(strSql,[reqObj.phone]);
    }

    // 通过sql语句的指定查询
    // 返回结果进行判断
    // 有匹配值的时候，返回成功
    // 没有返回值的时候，返回失败

});




module.exports = router;