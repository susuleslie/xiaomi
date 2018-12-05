define(["jquery"],function($){
	function slide(){
		var aBtns = $(".circle").find("ol").find("li");
		var oUl = $(".slide");
		var aLis = oUl.find("li");

		var iNow = 0; //记录当前是第几张
		var timer = null;
		timer = setInterval(timerInner,3000);

		function timerInner(){
			iNow++;
			tab();
		}

		function tab(){
			if(iNow == aBtns.size()){
				aBtns.attr("class","");
				aBtns.eq(0).attr("class","active");
			}else{
				aBtns.attr("class","");
				aBtns.eq(iNow).attr("class","active");
			}

			oUl.stop().animate({left:iNow * -1226},function(){
				if(iNow == aBtns.size()){
					iNow = 0;
					oUl.css("left","0px");
				}
			});
		}
		aBtns.click(function(){
			iNow = $(this).index();
			tab();
		})

		$(".sowing-Map").hover(function(){
			clearInterval(timer);
		})

		//点击按钮实现轮播
		$(".next").click(function(ev){
			ev.preventDefault();
			document.title = iNow;
			iNow++;
			if(iNow == 6){
				iNow = 0;
			}
			tab();			
		})

		$(".prev").click(function(ev){
			ev.preventDefault();
			document.title = iNow;
			iNow--;
			if(iNow == -1){
				iNow = 4;
				oUl.css("left","-4504px");
			}
			tab();			
		})
	
	

	}

	return{
		slide:slide
	}
})