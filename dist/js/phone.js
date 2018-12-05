define(["jquery"],function($){
	function phone(){
		$.ajax({
			url:"../data/phone.json",
			type:"GET",
			success:function(res){
				var contain = "";
				for(var i = 0; i < res.length; i++){
					contain += `<li>
									<div class="figure-img">
										<a href="">
											<img src="${res[i].img}" alt="">
										</a>
									</div>
									<h3 class=""><a href="">${res[i].content}</a></h3>
									<p class="desc">${res[i].desc}</p>
									<p class="price"> <span class="num">${res[i].price}</span>元  </p>
									<div class="flag-new">${res[i].flag}</div>
								</li>`
							$(".hd_second ul:nth-of-type(1)").html(contain);	
				}
			},
			error:function(msg){
				alert(msg)
			}

		})
	}
	return{
		phone:phone
	}
})