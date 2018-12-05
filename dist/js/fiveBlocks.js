define(["jquery"],function($){
	function fiveBlocks(){
		$.ajax({
			// url:"../data/fiveBlocks.json",
			type:"GET",
			success:function(arr){
				
				

			},
			error:function(msg){
				alert(msg);
			}
		})
	}


	return{
		fiveBlocks:fiveBlocks
	}
})