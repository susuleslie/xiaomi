<?php 
	header('content-type:text/html;charset="utf-8"');
	//1 链接数据库
	$link = mysql_connect("localhost","root","123456");

	if(!$link){
		echo "数据库链接失败";
		exit;
	}
	//3 设计字符集
	mysql_set_charset("utf8");

	//4 选择数据库
	mysql_select_db("xiaomi");

	//5 准备sql语句
	$sql = "select * from appliance";

	//6 发送sql语句
	$res = mysql_query($sql);

	$arr = array();

	//7 处理结果
	while($row = mysql_fetch_assoc($res)){
		array_push($arr, $row);
	}

	echo json_encode($arr);

	//8 关闭数据
	mysql_close($link);
 ?>