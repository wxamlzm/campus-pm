-- 创建测试用的岗位列表数据库campus ,并建立岗位列表数据库表单post_info

SET NAMES utf8;

CREATE DATABASE IF NOT EXISTS campus CHARSET=utf8;

USE campus;

CREATE TABLE IF NOT EXISTS post_info(
  p_id INT AUTO_INCREMENT PRIMARY KEY,
  p_titles VARCHAR(255) NOT NULL,
  p_types VARCHAR(255) NOT NULL,
  p_location VARCHAR(255) NOT NULL
); 

INSERT INTO post_info VALUES (NULL, '软件开发', '技术类', '北京');
INSERT INTO post_info VALUES (NULL, '软件开发', '技术类', '北京');
INSERT INTO post_info VALUES (NULL, '软件开发', '技术类', '北京');
INSERT INTO post_info VALUES (NULL, '软件开发', '技术类', '北京');
INSERT INTO post_info VALUES (NULL, '软件开发', '技术类', '北京');
INSERT INTO post_info VALUES (NULL, '软件开发', '技术类', '北京');
INSERT INTO post_info VALUES (NULL, '软件开发', '技术类', '北京');
INSERT INTO post_info VALUES (NULL, '软件开发', '技术类', '北京');
INSERT INTO post_info VALUES (NULL, '软件开发', '技术类', '北京');
INSERT INTO post_info VALUES (NULL, '软件开发', '技术类', '北京');

SELECT*FROM post_info;