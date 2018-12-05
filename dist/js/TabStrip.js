define(["jquery"],function($){
	function tab(){
		$.ajax({
			url:"../php/appliance.php",
			type:"GET",
		
			success:function(res){
				var cound = "";
				for(var i = 0; i < 8; i++){
					cound += `<li>
										<div>
											<a href="">
												<img src="${res[i].img}" alt="">
											</a>
										</div>
										<h3 class="title">
											<a href="">${res[i].title}</a></h3>
										<p class="desc">${res[i].desc}</p>
										<p class="price">
											${res[i].price}
											<del>${res[i].del}</del>

										</p>
										<div class="flag">${res[i].flag}</div>
										<div class="review-wrapper" style="display:none">	
											<a href="">
												<span class="review">${res[i].review}</span><br>
												<span class="author">${res[i].author}</span>
											</a>
										</div>
									</li>`;
									
				}
				$(".ul1").html(cound);

				var cound2 = "";
				for(var j = 9; j < 10; j++){
					cound2 += `<li>
										<div>
											<a href="">
												<img src="${res[j].img}" alt="">
											</a>
										</div>
										<h3 class="title">
											<a href="">${res[j].title}</a></h3>
										<p class="desc">${res[j].desc}</p>
										<p class="price">
											${res[j].price}
											<del>${res[j].del}</del>

										</p>
										<div class="flag">${res[j].flag}</div>
										<div class="review-wrapper" style="display:none">	
											<a href="">
												<span class="review">${res[j].review}</span><br>
												<span class="author">${res[j].author}</span>
											</a>
										</div>
									</li>`;
									
				}
				$(".ul2").html(cound2);
				var cound3 = "";
				for(var k = 10; k < 11; k++){
					cound3 += `<li>
										<div>
											<a href="">
												<img src="${res[k].img}" alt="">
											</a>
										</div>
										<h3 class="title">
											<a href="">${res[k].title}</a></h3>
										<p class="desc">${res[k].desc}</p>
										<p class="price">
											${res[k].price}
											<del>${res[k].del}</del>

										</p>
										<div class="flag">${res[k].flag}</div>
										<div class="review-wrapper" style="display:none">	
											<a href="">
												<span class="review">${res[k].review}</span><br>
												<span class="author">${res[k].author}</span>
											</a>
										</div>
									</li>`;
									
				}
				$(".ul3").html(cound3);
				var cound4 = "";
				for(var t = 6; t < 8; t++){
					cound4 += `<li>
										<div>
											<a href="">
												<img src="${res[t].img}" alt="">
											</a>
										</div>
										<h3 class="title">
											<a href="">${res[t].title}</a></h3>
										<p class="desc">${res[t].desc}</p>
										<p class="price">
											${res[t].price}
											<del>${res[t].del}</del>

										</p>
									
										<div class="review-wrapper" style="display:none">	
											<a href="">
												<span class="review">${res[t].review}</span><br>
												<span class="author">${res[t].author}</span>
											</a>
										</div>
									</li>`;
									
				}
				$(".ul4").html(cound4);
				
				
			},
			dataType:"json"

		});
	}

	function show(){
		$(".hd_right ul").on("mouseenter","li",function(){
			$(this).find($(".review-wrapper")).fadeIn(400);
		})
		$(".hd_right ul").on("mouseleave","li",function(){
			$(this).find($(".review-wrapper")).fadeOut(400);
		})
	}

	//选项卡 点击按钮出现对应图片

	function strip(){
		$(".J_brickNav ul").on("click","li",function(){
			$(".J_brickNav ul").find("li").attr("class","");
			$(this).attr("class","active");


		});
		$("#hot").click(function(){
			$(".hd_right ul").css("display","none")
			$(".ul1").css("display","block");
		})
		$("#TV").click(function(){
			$(".hd_right ul").css("display","none")
			$(".ul2").css("display","block");
		})
		$("#computer").click(function(){
			$(".hd_right ul").css("display","none")
			$(".ul3").css("display","block");
		})
		$("#home").click(function(){
			$(".hd_right ul").css("display","none")
			$(".ul4").css("display","block");
		})

	}


	return{
		tab:tab,
		show:show,
		strip:strip
	}
})