define(["jquery"],function($){
	function register(){
		//注册前后端交互
		$(".register").click(function(){
			var str = `username=${$("#phone_1").val()}&password=${$("#psw_1").val()}`;
			$.ajax({
				method:"post",
				url:"../php/register.php",
				data:str,
				success:function(data){
					alert(data);
				},
				error:function(msg){
					alert(msg);
				}
			})
		})


		//判断手机号
		$(".register").click(function(){
			if($("#phone_1").val() == ""){
				alert("手机号不能为空");
				location.reload();
			}else if(!(/^1[34578]\d{9}$/.test($("#phone_1")))){
				alert("手机格式不正确");
			}
	})

}



	return{
		register:register
	}
})