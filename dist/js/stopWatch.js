	define(["jquery"],function($){
	function stopWatch(){
		var starttime = new Date("2018/12/05 18:00:00");
		setInterval(function(){
			var nowtime = new Date();
			var time = starttime - nowtime;
			 var hour = doubleNum(parseInt(time / 1000 / 60 / 60 % 24));
  			 var minute = doubleNum(parseInt(time / 1000 / 60 % 60));
   			 var seconds = doubleNum(parseInt(time / 1000 % 60));
   			 $(".hour").html(hour);
   			 $(".min").html(minute);
   			 $(".sec").html(seconds);

   		
		},1000)
		
		function doubleNum(num){
			if(num < 10){
				return "0" + num ;
			}else{
				return num;
			}
		}
		
	}
	return{
		stopWatch:stopWatch
	}
})
 