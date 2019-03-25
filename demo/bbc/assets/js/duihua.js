$(function () {
	//对话完成弹窗
	$('#duihua_over').click(function () {
		$('#poptanchuang').show();
	})


	$('.btn_boxfix #ipt_duihua').focus(function (e) { 
		$('.dhbottom_con').show();
	})
	$('.btn_boxfix #ipt_duihua').blur(function (e) { 
		$('.dhbottom_con').hide();
	})

	$('.fix_dhpop .before').click(function (e) { 
		e.preventDefault();
		$(this).hide();
		$('.fix_dhpop .after').show();
	})

})