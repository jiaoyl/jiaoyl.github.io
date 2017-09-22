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
        }

    });

    $('.boxlist').jtabs(".boxlist_hd li", ".boxlist_con");
	Carousel.init($('.carousel'));




	$('.banner').addClass('jsshow');
	var winWidth=$(window).width();
	if(winWidth>768){
		$(window).scroll(function () {
	        var e = $(window).scrollTop();
			console.log(e);
				if(e>200&&e<1000){
					$('.section01').addClass('jsshow');
				}else if(e>1000&&e<1500){
					$('.section02').addClass('jsshow');
				}else if(e>1500&&e<2500){
					$('.section03').addClass('jsshow');
				}else if(e>2500&&e<3500){
					$('.section04').addClass('jsshow');
				}else if(e>3500&&e<4800){
					$('.section05').addClass('jsshow');
				}else if(e>4800&&e<6300){
					$('.section07').addClass('jsshow');
				}else if(e>6300){
					$('.section08').addClass('jsshow');
				}

	    });
    }else if(winWidth>420&&winWidth<=769){
    	$('.section01').addClass('jsshow');
    	$(window).scroll(function () {
	        var e = $(window).scrollTop();
			console.log(e);
			if(e>300&&e<500){
				$('.section02').addClass('jsshow');
			}else if(e>500&&e<700){
				$('.section03').addClass('jsshow');
			}else if(e>700&&e<900){
				$('.section04').addClass('jsshow');
			}else if(e>900&&e<2000){
				$('.section05').addClass('jsshow');
			}else if(e>2700&&e<3000){
				$('.section07').addClass('jsshow');
			}else if(e>3000){
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

