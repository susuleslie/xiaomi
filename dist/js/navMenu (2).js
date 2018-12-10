define(["jquery"],function($){
	function menu(){
		$.ajax({
			url:"../data/navMenu.json",
			type:"GET",
			success:function(res){
				var detail = "";
				for(var i = 0; i < 6; i++){
					detail +=`<li>
							<div class="thumb">
								<a href="../html/shoppingCar.html">
									<img src="${res[i].img}" alt="">
								</a>
							</div>
							
							<div class="type">
								<a href="">${res[i].type}</a>
							</div>
							<p class="price">${res[i].price}</p>
							<div class="flags">
								<div class="flag">${res[i].flag}</div>
							</div>
						</li>`
					$(".sweep1").html(detail);
				}
				var detail2 = "";
				for(var i = 6; i < 11; i++){
					detail2 +=`<li>
							<div class="thumb">
								<a href="">
									<img src="${res[i].img}" alt="">
								</a>
							</div>
							
							<div class="type">
								<a href="">${res[i].type}</a>
							</div>
							<p class="price">${res[i].price}</p>
							<div class="flags">
								<div class="flag">${res[i].flag}</div>
							</div>
						</li>`
					$(".sweep2").html(detail2);
				}
				var detail3 = "";
				for(var i = 11; i < 14; i++){
					detail3 +=`<li>
							<div class="thumb">
								<a href="">
									<img src="${res[i].img}" alt="">
								</a>
							</div>
							
							<div class="type">
								<a href="">${res[i].type}</a>
							</div>
							<p class="price">${res[i].price}</p>
							<div class="flags">
								<div class="flag">${res[i].flag}</div>
							</div>
						</li>`
					$(".sweep3").html(detail3);
				}
				var detail4 = "";
				for(var i = 15; i < 17; i++){
					detail4 +=`<li>
							<div class="thumb">
								<a href="">
									<img src="${res[i].img}" alt="">
								</a>
							</div>
							
							<div class="type">
								<a href="">${res[i].type}</a>
							</div>
							<p class="price">${res[i].price}</p>
							<div class="flags">
								<div class="flag">${res[i].flag}</div>
							</div>
						</li>`
					$(".sweep4").html(detail4);
				}
				var detail5 = "";
				for(var i = 17; i < 18; i++){
					detail5 +=`<li>
							<div class="thumb">
								<a href="">
									<img src="${res[i].img}" alt="">
								</a>
							</div>
							
							<div class="type">
								<a href="">${res[i].type}</a>
							</div>
							<p class="price">${res[i].price}</p>
							<div class="flags">
								<div class="flag">${res[i].flag}</div>
							</div>
						</li>`
					$(".sweep5").html(detail5);
				}
				var detail6 = "";
				for(var i = 18; i < 19; i++){
					detail6 +=`<li>
							<div class="thumb">
								<a href="">
									<img src="${res[i].img}" alt="">
								</a>
							</div>
							
							<div class="type">
								<a href="">${res[i].type}</a>
							</div>
							<p class="price">${res[i].price}</p>
							<div class="flags">
								<div class="flag">${res[i].flag}</div>
							</div>
						</li>`
					$(".sweep6").html(detail6);
				}
				var detail7 = "";
				for(var i = 19; i < 20; i++){
					detail7 +=`<li>
							<div class="thumb">
								<a href="">
									<img src="${res[i].img}" alt="">
								</a>
							</div>
							
							<div class="type">
								<a href="">${res[i].type}</a>
							</div>
							<p class="price">${res[i].price}</p>
							<div class="flags">
								<div class="flag">${res[i].flag}</div>
							</div>
						</li>`
					$(".sweep7").html(detail7);
				}
				var detail8 = "";
				for(var i = 20; i < 21; i++){
					detail8 +=`<li>
							<div class="thumb">
								<a href="">
									<img src="${res[i].img}" alt="">
								</a>
							</div>
							
							<div class="type">
								<a href="">${res[i].type}</a>
							</div>
							<p class="price">${res[i].price}</p>
							<div class="flags">
								<div class="flag">${res[i].flag}</div>
							</div>
						</li>`
					$(".sweep8").html(detail8);
				}
			},
			error:function(msg){
				alert(msg);
			}
			
		})
	}
	//划过切换
	function tab(){
		$("#top_nav_ul").find("li").mouseenter(function(){
			$("#navMenu").slideDown();
			$(".xiaomi").hover(function(){
				
				$("#navMenu ul").css("display","none");
				$(".sweep1").css("display","block");
			})
			$(".hongmi").hover(function(){
				
				$("#navMenu ul").css("display","none");
				$(".sweep2").css("display","block");
			})
			$(".tv").hover(function(){
				
				$("#navMenu ul").css("display","none");
				$(".sweep3").css("display","block");
			})
			$(".nptebook").hover(function(){
				
				$("#navMenu ul").css("display","none");
				$(".sweep4").css("display","block");
			})
			$(".air").hover(function(){
				
				$("#navMenu ul").css("display","none");
				$(".sweep5").css("display","block");
			})
			$(".new product").hover(function(){
				
				$("#navMenu ul").css("display","none");
				$(".sweep6").css("display","block");
			})
			$(".router").hover(function(){
				
				$("#navMenu ul").css("display","none");
				$(".sweep7").css("display","block");
			})
			$(".intelligent").hover(function(){
				
				$("#navMenu ul").css("display","none");
				$(".sweep8").css("display","block");
			})
			
		})
		$("#navMenu").mouseleave(function(){
			$("#navMenu").slideUp();
		})
	}

	return{
		menu:menu,
		tab:tab
	}
})