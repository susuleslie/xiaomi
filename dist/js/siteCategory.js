define(["jquery"],function($){
	function category(){
		$.ajax({
			url:"../data/siteCategory.json",
			type:"GET",
			success:function(arr){
				for(var i = 0; i < arr.length; i++){
					$(`<li>
							<a href="#">${arr[i].title}</a>
						</li>`).appendTo($(".category"));
					var oDiv = $("<div></div>");
					oDiv.appendTo($('.category'));
					var arr2 = arr[i].child;
							var oUl = $("<ul></ul>");
							for(var k = 0;k < arr2.length;k++){
								$(`<li>
									<a href="" id=${arr2[k].id}">	
									<img src="${arr2[k].img}" alt="">
									<span>${arr2[k].name}</span>
								</a></li>`).appendTo(oUl);
							}
							oUl.appendTo(oDiv);
					
				}

					$(".category > li").mouseenter(function(){
						$(this).css("background","#ff6702");
						var index = $(this).index() / 2;
		 				// console.log($(this).index());
		 				$(".category> div").css("display","none").eq(index).css("display","block");
					}).mouseleave(function() {
			 			$(this).css("background","#585858");
			 			$(".category> div").css("display","none");
		 		});
					$(".category> div").hover(function(){
			 			$(this).css("display","block");
			 		},function(){
			 			$(this).css("display","none");
		 		});

					// $(".category > div > ul > a").hover(function(){
			 	// 		$(this).find(css("color","#f86d28");
			 	// 	},function(){
			 	// 		$(this).css("color","#182c23");
		 		// });

			},
			error:function(msg){
				alert(msg);
			}
		})

	
	}




	return{
		category:category
	}
})