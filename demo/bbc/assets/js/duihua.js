$(function () {
	//对话完成弹窗
	$('#duihua_over').click(function () {
		$('#poptanchuang').show();
	})


	$('.btn_boxfix #ipt_duihua').focus(function (e) { 
		e.preventDefault();
		$('.dhbottom_con').show();
	})
	$('.btn_boxfix #ipt_duihua').blur(function (e) { 
		e.preventDefault();
		$('.dhbottom_con').hide();
	})


	
})