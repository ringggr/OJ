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


	$(".get_id").focus(function(){
		if ($(this).val() == "请输入您的学号")
		{
			$(this).css({'color':'black'});
			$(this).val("");
		}
	}).blur(function(){
		 if ($(this).val() == "")
		 {
		 	$(this).css({'color':'#c0c0c0'});
		 	$(this).val("请输入您的学号");
		 }
	});
	$(".get_password").focus(function(){
		if ($(this).val() == "请输入您的密码")
		{
			$(this).val("");
			$(this).css({'color':'black'});
			$(this).attr('type', 'password');
		}
	}).blur(function(){
		 if ($(this).val() == "")
		 {
		 	$(this).css({'color':'#c0c0c0'});
		 	$(this).attr('type', 'text');
		 	$(this).val("请输入您的密码");
		 }
	});

	var oldname = $("#user_nick").val();
	$("#user_nick").focus(function(){
		/*if ($(this).val() == "请输入您的密码")
		{*/
			$(this).val("");
			$(this).css({'color':'black'});
		/*}*/
	}).blur(function(){
		 if ($(this).val() == "")
		 {
		 	$(this).css({'color':'#c0c0c0'});
		 	$(this).val(oldname);
		 }
	});

	var oldtext = $("#user_text").val();
	$("#user_text").focus(function(){
		/*if ($(this).val() == "请输入您的密码")
		{*/
			$(this).val("");
			$(this).css({'color':'black'});
		/*}*/
	}).blur(function(){
		 if ($(this).val() == "")
		 {
		 	$(this).css({'color':'#c0c0c0'});
		 	$(this).val(oldtext);
		 }
	});

	$("#pager").pager({ pagenumber: 1, pagecount: 15, buttonClickCallback: PageClick });
})



PageClick = function(pageclickednumber) {
    $("#pager").pager({ pagenumber: pageclickednumber, pagecount: 15, buttonClickCallback: PageClick });
    $("#result").html("Clicked Page " + pageclickednumber);
}


show_codearea = function(){
	$("#codearea_link").hide();
	$("#codearea").show();
}