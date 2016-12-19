$().ready(function(){
	$("span#to_re").click(function(){
		$("#lo_div").animate({
			left: '-100%'
		}, 800);
		$("#re_div").animate({
			left: '0'
		}, 800);
	});

	$("span#to_lo").click(function(){
		$("#re_div").animate({
			left: '100%'
		}, 800);
		$("#lo_div").animate({
			left: '0'
		}, 800);
	});
})