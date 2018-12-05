define(["parabola","jquery","jquery-cookie"],function(parabola, $){
	function shoppingCar(){

		sc_car();

		$.ajax({
			url:"../data/shoppingCar.json",
			"type":"GET",
			success:function(res){
				var content = " ";
				for(var i = 0; i < res.length; i++){
					content += `
							<li>
						<a href="">
							<img src="${res[i].img}" alt="">
						</a>
						<h2><a href="#">${res[i].title}</a></h2>
						<p class="price">${res[i].price}</p>
						<img src="${res[i].img2}" alt="小米净水器（厨下式） 白色" width="34" height="34">
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
					
					<div class = 'sc_goodsNum'>商品数量:${sc_arr[i].num}</div>
					<span class="close"> x </span>
				</li>`;
						}
						$(".header-car ul").html(container);
						
					}

				}

			})


			
		}

		//购物车内商品数量
		function sc_car(){
			var sc_str = $.cookie("goods");
			if(sc_str){
				var sc_arr = eval(sc_str);
				var sum = 0;
				for(var i = 0; i < sc_arr.length; i++){
					sum += sc_arr[i].num;
				}
				$(".sc_top").html("购物车"+ "(" + sum + ")" );
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
			$(".header-car ul").css("display","block")
			
			sc_msg();
		});
		$(".header-car").mouseleave(function(){
			$(".header-car ul").css("display","none")
				
		});





	}




	return{
		shoppingCar:shoppingCar
	}
})