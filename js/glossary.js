$("#nextButt").click(function(){
	var id = $(".active").attr("id");
	var num = id.charAt(1);
	if (num == 4){
		$("#nextButt").addClass("hidden");
	}
	$("#"+id).removeClass("active");
	if(num < 5){
		var newId = "#p" + (parseInt(num) + 1);
		$(newId).addClass("active");
		$("#prevButt").removeClass("hidden");
	}
});

$("#prevButt").click(function(){
	var id = $(".active").attr("id");
	var num = id.charAt(1);
	if((num-1) == 0){
		$("#prevButt").addClass("hidden");
	}
	if(num == 5){
		$("#nextButt").removeClass("hidden");
	}
	$("#"+id).removeClass("active");
	if((num > 0) && (num < 6)){
		var newId = "#p" + (parseInt(num) - 1);
		$(newId).addClass("active");
	}
});