define(["jquery"],function($){
	function login(){
		$(".mobile-Msg").click(function(ev){
			ev.preventDefault();
			$(".username").css("display","block");
			$(".mobile-Msg").css("display","none");
			$("#account").css("display","none");
			$("#mobile").css("display","block");
		})
		$(".username").click(function(ev){
			ev.preventDefault();
			$(".username").css("display","none");
			$(".mobile-Msg").css("display","block");
			$("#account").css("display","block");
			$("#mobile").css("display","none");
			
		})

		$(".code").click(function(ev){
			ev.preventDefault();	
			$(".login-Area").hide();
			$(".Sweep_code").show();

		})


		//点击 立即登陆注册
		$("#land-immediately").click(function(){
			if($(!".mobile_Number")){
				$(".hint").html("请输入手机号");
			}
		})

		//登陆
		$("#denglu").click(function(){
			var str = `username=${$("#mailbox").val()}&password=${$("#psw").val()}`;
					$.ajax({
						method:"post",
						url:"../php/login.php",
						data:str,
						success:function(data){
							alert(data);
						},
						error:function(msg){
							alert(msg);
						}
					})
		})

		
	}


	return{
		login:login
	}
})