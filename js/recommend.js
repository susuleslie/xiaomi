define(["jquery"],function($){
	function recommend(){
		$.ajax({
			url:"../data/recommend.json",
			type:"GET",
			success:function(arr){
				var content = "";
				for(var i = 0; i < arr.length; i++){
					content += `<li>
								<a href="">
									<img src="${arr[i].img}" alt="">
								</a>
								<h3>
									<a href="">${arr[i].desc}</a>
								</h3>
								
								<p class="price">
									<span>${arr[i].price}</span>
								</p>
								<div class="praise">${arr[i].praise}</div>
							</li>`

				}
				$(".box_content ul").html(content);

				//点击左右滑动
				 var index = 0;
				$(".btn_left").click(function(){
					index--;
					if(index == -1){
						index = 0;
					}

					show()

				
				});
				$(".btn_right").click(function(){
					index++;
					if(index == 5){
						index = 4;
					}
					show()
				})
				function show(){
					var move = index * -248;
					$(".box_content ul").stop().animate({"left":move},function(){
						if(index == $(".box_content ul li").size()){
							index = 0;
							$(".box_content ul").css("left","0px");
						}
					})
				}

			},
			error:function(msg){
				alert(msg);
			}
		})
	}


	return{
		recommend:recommend
	}
})