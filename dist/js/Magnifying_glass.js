define(["jquery"],function($){
	function glass(){
		$(".small").mouseenter(function(){
			$(".slider").css("display","block");
			$(".big").css("display","block");
		});
		$(".small").mouseleave(function(){
			$(".slider").css("display","none");
			$(".big").css("display","none")
		});

		$(".small").mousemove(function(e){
			var l = e.pageX - $(".small").offset().left - ($(".slider").width() / 2);
			var t = e.pageY - $(".small").offset().top - ($(".slider").height() / 2 );
			if(l < 0){
				l = 0
			}
			if(l > $(this).width() - $(".slider").width()){
				l = $(this).width() - $(".slider").width()
			}

			if(t < 0){
				t = 0
			}

			if(t > $(this).height() - $(".slider").height()){
				t = $(this).height() - $(".slider").height()
			}

			$(".slider").css({
				"left":l,
				"top": t
			})

			var pX = l / ($(".small").width() - $(".slider").width())
			var pY = t / ($(".small").height() - $(".slider").height())

			$(".bigImg").css({
				"left":-pX * ($(".bigImg").width() - $(".big").width()),
				"top": -pY * ($(".bigImg").height() - $(".big").height())
			})

		});

}	

	return{
		glass:glass
	}


});



 