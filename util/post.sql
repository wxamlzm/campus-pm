-- 创建测试用的岗位列表数据库campus ,并建立岗位列表数据库表单post_info
SET NAMES utf8;

CREATE DATABASE IF NOT EXISTS campus CHARSET=utf8;

USE campus;

/*
DATE: 2021/08/07;
AUHORR: ZD;
对象：用于存储岗位列表
*/
CREATE TABLE IF NOT EXISTS post_info(
  p_id INT AUTO_INCREMENT PRIMARY KEY,
  p_titles VARCHAR(255) NOT NULL,
  p_types VARCHAR(255) NOT NULL,
  p_location VARCHAR(255) NOT NULL
); 
-- 后期这里的数据要通过另一个后台管理系统输入，这里是临时数据
-- 数据格式也要重置
INSERT INTO post_info VALUES (NULL, '软件开发', '技术类', '北京');
INSERT INTO post_info VALUES (NULL, '销售岗位', '营销类', '杭州');
INSERT INTO post_info VALUES (NULL, '人事专员', '职能类', '萧山');
INSERT INTO post_info VALUES (NULL, '客服专员', '职能类', '杭州');


/*
DATE: 2021/08/14;
AUTHOR: ZD;
对象：用于存储已经注册的学生的登录信息
*/
CREATE TABLE IF NOT EXISTS user_info(
  u_id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
  u_name VARCHAR(255) UNIQUE,
  u_pwd VARCHAR(255),
  u_phone VARCHAR(255) UNIQUE,
  u_email VARCHAR(255)
);
-- 用户的学生数据库
INSERT INTO user_info VALUES (NULL, 'lilei', '123456', '15558142002', 'lilei@163.com');
INSERT INTO user_info (u_phone) VALUES ('15557141002');