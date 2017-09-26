$(function () {
    $.fn.extend({
        addhover: function () {
            var _this = $(this);
            var active = "hover";
            _this.hover(function () {
                $(this).addClass(active);
            },
                function () {
                    $(this).removeClass(active);
                });
        },
        jtabs: function (e,f) {//切换效果
            var _this = $(this);
            var _hd = _this.find(e);
            var _cont = _this.find(f);

            _hd.each(function (i) {
                _hd.eq(0).addClass("active").siblings(e).removeClass("active");
                _cont.eq(0).show().siblings(f).hide();
                _hd.eq(i).click(function () {
                    $(this).addClass("active").siblings(e).removeClass("active");
                    _cont.eq(i).show().siblings(f).hide();
                });
            });
        },
        shoufq: function (o) {//手风琴效果
            o = $.extend({
                aniBeforeWidth: '0',
                aniAfterWidth: '0'
            },
            o);
            var _this = this;
            var aBW = o.aniBeforeWidth;
            var aAW = o.aniAfterWidth;
            $(this).eq(0).addClass("hover").css({width: aAW }).siblings().removeClass("hover").css({width: aBW});
            return _this.each(function () {
                $(this).mouseover(function () {
                    $(this).addClass("hover").stop().animate({
                        width: aAW
                    },
                    500).siblings().removeClass("hover").stop().animate({
						width: aBW
                    },
                    500);
                });
            });
        }


    });

    $('.boxlist').jtabs(".boxlist_hd li", ".boxlist_con");

//	$('.section09 ul li').shoufq({ aniBeforeWidth: '7%', aniAfterWidth: '45%' });

	$('.banner').addClass('jsshow');
	var winWidth=$(window).width();
	if(winWidth>420){
		Carousel.init($('.carousel'));
	}else{
		$('.carousel').attr('data-setting','{"width":700,"height":251,"posterWidth":110,"posterHeight":210, "verticalAlign":"bottom","autoPlay":false,"speed":1000,				             "delay":2500,"scale":0.9}');
		Carousel.init($('.carousel'));
	}
	if(winWidth>768){
		$(window).scroll(function () {
	        var e = $(window).scrollTop();
	        var oftop01=$('.section01').offset().top,
	        	oftop02=$('.section02').offset().top,
	        	oftop03=$('.section03').offset().top,
	        	oftop04=$('.section04').offset().top,
	        	oftop05=$('.section05').offset().top,
	        	oftop06=$('.section06').offset().top,
	        	oftop07=$('.section07').offset().top,
	        	oftop08=$('.section08').offset().top;
			//console.log(e);
				if(e>(oftop01-350)&&e<(oftop01+350)){
					$('.section01').addClass('jsshow');
				}else if(e>(oftop02-350)&&e<(oftop02+350)){
					$('.section02').addClass('jsshow');
				}else if(e>(oftop03-350)&&e<(oftop03+350)){
					$('.section03').addClass('jsshow');
				}else if(e>(oftop04-350)&&e<(oftop04+350)){
					$('.section04').addClass('jsshow');
				}else if(e>(oftop05-350)&&e<(oftop05+350)){
					$('.section05').addClass('jsshow');
				}else if(e>(oftop07-350)&&e<(oftop07+350)){
					$('.section07').addClass('jsshow');
				}else if(e>(oftop08-350)&&e<(oftop08+350)){
					$('.section08').addClass('jsshow');
				}

	    });
	}else{
		$('.section').addClass('jsshow');
		$('#fix_leftfloat').hide();
	}




//	$('.input_btn').click(function(){
//		var checkruslut=valider.Name()&&valider.Tel()&&valider.Address();
//		if(checkruslut==true){
//			alert('success')
//		}
//	})

});

//侧边浮动窗
$(document).ready(function(e) {
    $('.close').click(function() {
        $('#fix_leftfloat').css('display','none')
    });
    var $fixedLayer = $(".fixed-layer");
    var $toTop = $(".to-top");
    var $fixedLayerPopItem = $(".fixed-layer li:has(.fixed-layer-pop)");
    $(window).scroll(function(){
        if($(this).scrollTop() < 200){
            $fixedLayer.stop().fadeOut(400);
        }else{
            $fixedLayer.stop().fadeTo(400,1);
        }
    });
    $toTop.click(function(){
        $("html,body").animate({"scrollTop":0},400);
    });
    $fixedLayerPopItem.hover(function(){
        $(this).find(".fixed-layer-pop").stop().fadeTo(400,1);
    },function(){
        $(this).find(".fixed-layer-pop").stop().fadeOut(400);
    });
});

