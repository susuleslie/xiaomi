<?php 
	header('content-type:text/html;charset="utf-8"');

	//用户名和密码全部取出
	$username = $_POST['username'];
	$password = $_POST['password'];

	//做MD5加密处理
	$password = md5(md5($password).'qianfeng');

	//1 链接数据库
	$link = mysql_connect("localhost","root","123456");

	//2 判断是否链接成功
	if(!$link){
		echo "数据库链接失败";
		exit;
	}
	//3 设计字符集
	mysql_set_charset("utf8");

	//4 选择数据库
	mysql_select_db("xiaomi");

	//5 准备sql语句
	$sql = "select * from login where username = '{$username}'";

	//6 发送sql语句
	$res = mysql_query($sql);

	//7 处理结果
	$row = mysql_fetch_assoc($res);
	if(!$row){
		echo "用户名不存在";
	} else{
		$sql = "select * from login where username = '{$username}' AND
		password = '{$password}'";

		$res = mysql_query($sql);
		$row = mysql_fetch_assoc($res);
		if($row){
			echo "登陆成功";
		}else{
			echo "用户名或密码不正确";
		}
	}
	//8 关闭数据
	mysql_close($link);

 ?>