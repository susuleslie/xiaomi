define(["parabola","jquery","jquery-cookie"],function(parabola, $){
	function shoppingCar(){

		//导航栏部分
		$.ajax({
			url:"../data/navMenu.json",
			type:"GET",
			success:function(arr){
				for(var i = 0 ; i < arr.length; i++){
					var oLi = $(`<li></li>`);
					oLi.appendTo($(".top_nav_ul"));
					$(`<a href="#">${arr[i].title}</a>`).attr("id",i).appendTo(oLi);

					var arr2 = arr[i].child;
					var length1 = arr2.length;
					if(length1){
						var oDiv = $(`<div class="navMenu"></div>`);
						oDiv.appendTo($("#top #container"));
						
						for(var j = 0; j < length1; j++){
							
	
							var oUl = $(`<ul></ul>`);
							$(`<li>
								<div class="thumb">
									<a href="" id=${arr2[j].id}>
										<img src="${arr2[j].img}" alt="">
									</a>
								</div>
							
								<div class="type">
									<a href="">${arr2[j].type}</a>
								</div>
								<p class="price">${arr2[j].price}</p>
								<div class="flags">
									<div class="flag">${arr2[j].flag}</div>
								</div>
							</li>`).appendTo(oUl);
							if($(".flag").length == 0){
								$(".flag").css("display","none");
							}
							
							oUl.appendTo(oDiv);

						}
					}
				}

			},
			error:function(msg){
				console.log(msg);
			}
		})

		$(".top_nav_ul").on("mouseenter","a",function(){
			index = this.id;
		 	$(".navMenu").eq(index).css("display","block").stop().animate({"height":"228px"},300);		
		 }).on("mouseleave","a",function(){
		 	$(this).css("color","#4c4c4c");
		 	$(".navMenu").eq(index).css("display","none").stop().animate({"height":"0"},300);
});








		sc_car();

		$.ajax({
			url:"../data/shoppingCar.json",
			"type":"GET",
			success:function(res){
				var content = " ";
				for(var i = 0; i < res.length; i++){
					content += `
							<li>
						<a href="../html/Magnifying_glass.html">
							<img src="${res[i].img}" alt="">
						</a>
						<h2><a href="#">${res[i].title}</a></h2>
						<p class="price">${res[i].price}</p>
						<img src="${res[i].img2}" alt="">
						<p class="add" id="${res[i].id}">加入购物车</p>
					</li>`
				}
				$(".goods_box ul").html(content);

				// 划过显示 加入购物车
				$(".goods_box ul > li").hover(function(){
					$(this).find($(".add")).css("display","block");
				},function(){
					$(this).find($(".add")).css("display","none");
				})

			},
			error:function(msg){
				alert(msg);
			}
		})




		//事件委托，给异步加载的控件添加事件
		$(".goods_box").on("click",".add",function(){
			ballMove(this);
			var id = this.id;
			//加入购物车 约定 goods=[{id:1,num:2},{id:2,num:1}]
			//1、判断是否是第一次添加
			var first = $.cookie("goods") == null ? true : false;
			if(first){
				//第一次添加，直接将cookie存储进去
				$.cookie("goods",`[{id:${id},num:1}]`,{
					expires:7,
					raw:true
				});
			}else{
				//2、判断之前是否添加过商品
				var cookieStr = $.cookie("goods");
				var arr = eval(cookieStr);//eval(必须是外层是数组，元素是对象) 和 JSON.parse()
				var same = false; //假设没有添加过	
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id == id){
						//3、之前存储过数量+1
						arr[i].num++;
						same = true;
						break;
					}
				}
				if(!same){	
					//4、没有相同的
					var obj = {id: id,num:1};
					arr.push(obj);
				}
				$.cookie("goods",JSON.stringify(arr),{
					expires:7,
					raw:true
				});
			}
			sc_car();

		})

		//加载已经加入购物车的商品
		function sc_msg(){
			$.ajax({
				url:"../data/shoppingCar.json",
				type:"GET",
				success:function(res){
					var sc_arr = eval($.cookie("goods"));
					var container = '';
					if(sc_arr){
						for(var i = 0; i < sc_arr.length; i++){
							container +=  `<li>
						<div class = 'sc_goodsPic'>
							<img src="${res[sc_arr[i].id].img}" alt="">
						</div>
						<div class = 'sc_goodsTitle'>
							<p>${res[sc_arr[i].id].title}</p>
						</div>
						
						<div class = 'sc_goodsNum'>${res[sc_arr[i].id].price}元 x ${sc_arr[i].num}</div>
						<span class="close" id=${i}> X </span>
					</li>`			
				
				}
						$(".header-car ul").html(container);
						
					}
					//点击x删除当前商品信息
					$(".close").click(function(){
						
						var index = $(".close").index(this);
		 				$(".header-car ul li").eq(index).remove();

		 			
		 				var cookieStr = $.cookie("goods");
						var arr = eval(cookieStr);
						arr.splice($(this).attr("id"),1)
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods",cookieStr,{expires:7});

		 				
						sc_car();

					});

					
				}
				


			})


			
		}
			

		//购物车内商品数量
		function sc_car(){
			var sc_str = $.cookie("goods");
			if(sc_str){
				var sc_arr = eval(sc_str);
				var sum = 0;
				var price = $(".price")

				for(var i = 0; i < sc_arr.length; i++){
					sum += sc_arr[i].num;
				}
				$(".sc_top").html("购物车"+ "(" + sum + ")" );
				$(".total b").html(sum);
				
			}

		}

		//抛物线运动
		function ballMove(sc_btn){
			$(".ball").css({
				display:"block",
				left:$(sc_btn).offset().left,
				top:$(sc_btn).offset().top
			})

			var offX = $(".header-car").offset().left - $(".ball").offset().left;
			var offY = $(".header-car").offset().top - $(".ball").offset().top;

			//做抛物线运动
			//1.抛物线运动 设置参数
			var bool = new Parabola({
				el:".ball",
				targetEl:null,
				offset:[offX,offY],
				curvature:0.0005,
				duration:400,
				callback:function(){
					$(".ball").hide();
				}
			})

			//2.开始运动
			bool.start();

		}


		//购物车内容移入移出
		$(".sc_top").mouseenter(function(){
			$(".header-car .sushabi").css("display","block")
			
			sc_msg();
		});
		$(".header-car").mouseleave(function(){
			$(".header-car .sushabi").css("display","none")
				
		});






	}




	return{
		shoppingCar:shoppingCar
	}
})