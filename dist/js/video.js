define(["jquery"],function($){
	function video(){
		$(".video li").click(function(){
			$(".mark div").css("display","block");
			$(".mark span").css("display","block");
		})
		$(".play-icon").click(function(){
			$(".mark div").css("display","none");
			$(".play-video").css("display","block");
		})
		$("h5").click(function(){
			$(".mark div").css("display","none");
			$(".play-video").css("display","none");
			$(".mark span").css("display","none");

		})
	}


	return{
		video:video
	}
})