define(["jquery"],function($){
	function flashBuy(){
		$.ajax({
			url:"../data/flashBuy.json",
			type:"GET",
			success:function(res){
				var detail = "";
				for(var i = 0; i < res.length; i++){
					 detail += `<li>
							<a href="">
								<img src="${res[i].img}" alt="">
							</a>
							<h3>
								<a href="">${res[i].contain}</a>
							</h3>
							<p class="desc">${res[i].desc}</p>
							<p class="price">
								<span>${res[i].span}</span>
								<del>${res[i].del}</del>
							</p>
							<div class="saleOff">${res[i].saleOff}</div>
						</li>`

						$(".box_right_bd ul:nth-of-type(1)").html(detail);
				}

			},
			error:function(msg){
				alert(msg);
			}

		})


		//点击箭头实现轮播

		var index = 0;
		$(".btn_left").click(function(){
			index --;
			if(index == -1){
				index = 0;
			}
			showLi(index);
		})
		

		$(".btn_right").click(function(){
			index ++;
			if(index == 5){
				index = 4;
			}
			showLi(index);
		})
			
		

		function showLi(index){
			var move = -index * 254
			$(".box_right_bd ul").stop().animate({"left":move},function(){
				if(index == $(".box_right_bd ul li").size()){
					index = 0;
					$(".box_right_bd ul").css("left","0px")
				}
			});
		}
		
	}

	return{
		flashBuy:flashBuy
	}
})
