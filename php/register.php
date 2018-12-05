<?php 
	header('content-type:text/html;charset="utf-8"');

	$username = $_POST["username"];
	$password = $_POST["password"];

	//做md5处理
	$password = md5(md5($password).'qianfeng');

	//	1链接数据库
	$link = mysql_connect("localhost","root","123456");

	// 2 判断数据库是否链接成功
	if(!$link){
		echo "数据库连接失败";
		exit;
	}
	// 3 设计字符集
	mysql_set_charset("utf8");

	// 4 选择数据库
	mysql_select_db("xiaomi");

	//5 准备sql语句
	//判断之前是否添加过
	$sql = "select * from login where username = '{$username}'";

	//6 发送sql语句
	$res = mysql_query($sql);

	//7 处理结果
	$row = mysql_fetch_assoc($res);
	// if($row){
	// 	echo "号码已存在";
	// }else{
	// 	$sql = "insert into login(username,password) values('{$username}','{$password}');";
	// 	$res = mysql_query($sql);
	// 	if($res){
	// 		echo "注册成功";
	// 	}else{
	// 		echo "注册失败";
	// 	}

	// }




 ?>