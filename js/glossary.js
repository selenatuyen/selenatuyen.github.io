$("#nextButt").click(function(){
	var id = $(".active").attr("id");
	var num = id.charAt(1);
	$("#"+id).removeClass("active");
	if(num < 6){
		var newId = "#p" + (parseInt(num) + 1);
		console.log(newId);		
		$(newId).addClass("active");
	}
});

$("#prevButt").click(function(){
	var id = $(".active").attr("id");
	var num = id.charAt(1);
	$("#"+id).removeClass("active");
	if(num > 0 && num < 6){
		var newId = "#p" + (parseInt(num) - 1);
		console.log(newId);		
		$(newId).addClass("active");
	}
});