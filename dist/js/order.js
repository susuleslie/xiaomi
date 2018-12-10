define(["jquery","jquery-cookie"],function($){
	function order(){
		
		sc_msg();
		

		//加载已经加入购物车的商品
		function sc_msg(){
			$.ajax({
				url:"../data/shoppingCar.json",
				type:"GET",
				success:function(res){
					if($.cookie("goods")){
						var sc_arr = eval($.cookie("goods"));
						var container = '';
						if(sc_arr){
							for(var i in sc_arr){
								container +=  `<li>
								<input type="checkbox" name="">
								<div class = 'sc_goodsPic'>
									<img src="${res[sc_arr[i].id].img}" alt="">
								</div>
								<div class = 'sc_goodsTitle'>
									<p>${res[sc_arr[i].id].title}</p>
								</div>
								
								<div class = 'sc_goodsPirce'>${res[sc_arr[i].id].price}元 </div>
								<div class = "sc_goodsNum">
									<span class="num">${sc_arr[i].num}</span>
									<p class="subtract">-</p>
									<p class="add">+</p>
								</div>
								<span class="total">${res[sc_arr[i].id].price * sc_arr[i].num *1.0}</span>
								<span class="close" id=${i}> X </span>
							</li>`
							}
							$(".shopGoods ul").html(container);
							

						}
						//点击-
						$(".subtract").click(function(){
							let num = $(this).siblings('span').html();
							num--;
							$(this).siblings('span').html(num);
							let sum = num * parseInt($(this).closest('li').find('.sc_goodsPirce').html());
							
							$(this).closest('li').find('.total').html(sum);
						});
						//点击+
						$(".add").click(function(){
							let num = $(this).siblings('span').html();
							num++;
							$(this).siblings('span').html(num);
							let sum = num * parseInt($(this).closest('li').find('.sc_goodsPirce').html());
							$(this).closest('li').find('.total').html(sum);
						})		
					}	

					$(".checkAll").click(function(){
						// console.log($(this).is(':checked'));
						// console.log($(".shopGoods").find("input[type='checkbox']").length);

						if($(this).is(':checked')){
							$(".shopGoods").find("input[type='checkbox']").prop("checked", true);
						}else{
							$(".shopGoods").find("input[type='checkbox']").prop("checked", false);
						}
					



					})

					$("input[type='checkbox'], p.subtract, p.add").click(function(){
						let num = 0;
						let price = 0;

						for(var i = 0; i < $(".shopGoods").find("input[type='checkbox']").length; i++){
							if($(".shopGoods").find("input[type='checkbox']").eq(i).is(':checked')){
								// $(".shopGoods").find("input[type='checkbox']").eq(i).closest("li").find(".num");
								// alert($(".shopGoods").find("input[type='checkbox']").eq(i).closest("li").find(".num").html());
								num += parseInt($(".shopGoods").find("input[type='checkbox']").eq(i).closest("li").find(".num").html());
								// let qty = parseInt($(".shopGoods").find("input[type='checkbox']").eq(i).closest("li").find(".num").html());
								price +=  parseInt($(".shopGoods").find("input[type='checkbox']").eq(i).closest("li").find(".total").html())
							}
						}
						$(".totalPrice i").html(price);
						$(".totalNum i").html(num);

					})

				}

			})
			
		};
		//全选
		

	}


	return{
		order:order
	}
})