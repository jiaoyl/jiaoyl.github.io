 /*
 *获取url中参数值
 *name:参数名称
 */
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}


//loading
function shouloading() {
    var html = '<div id="loading-anim" style="width:100%; height:100%; position:fixed; top:0; left:0;z-index:999; text-align:center; background-color:#000; opacity:0.5">' +
        '<img width="40" height="40" id="loading-anim-img" src="/resources/img/loader.gif" style="margin-top:40%;" />' +
        '</div>';
    $("body").append(html);
}
function hidloading() {
    $("#loading-anim").remove();
}

/*
 *转换成浮点数
 *
 * */
function toFloat(obj) {
	var res = parseFloat(obj);
	if (isNaN(res) == true) {
		return 0.0;
	} else {
		return parseFloat(res.toFixed(2));
	}
}
//保留小数点后两位
function decimaltwo(number) {
	var decimaltwo = number;
	if (decimaltwo === null || decimaltwo === "" || decimaltwo === undefined) {
		decimaltwo = 0.00;
	} else {
		decimaltwo = toFloat(number);
		decimaltwo = decimaltwo.toString();
		var length = decimaltwo.toString().length;
		var dian = decimaltwo.toString().indexOf('.');
		if (dian == -1) {
			decimaltwo = decimaltwo + '.00';
		} else {
			var float = parseInt(length) - parseInt(dian) - 1;
			if (float > 2) {
				decimaltwo = parseFloat(Math.round(decimaltwo * 100) / 100);
			} else if (float < 2) {
				decimaltwo = decimaltwo + "0";
			} else {
				decimaltwo = decimaltwo;
			}
		}
	}
	return decimaltwo;
}
function decimaltwo2(number) {
    var decimaltwo = number;
    if (decimaltwo === null || decimaltwo === "" || decimaltwo === undefined) {
        decimaltwo=0.00;
    } else {
    	decimaltwo =toFloat(number);
        var length = decimaltwo.toString().length;
        var dian = decimaltwo.toString().indexOf('.');
        if (dian == -1) {
            decimaltwo = decimaltwo + '.00';
        } else {
            var float = parseInt(length) - parseInt(dian) - 1;
            if (float > 2) {
                decimaltwo = parseFloat(Math.round(decimaltwo * 100) / 100);
            } else if (float < 2) {
                decimaltwo = decimaltwo + "0";
            } else {
                decimaltwo = decimaltwo;
            }
        }
    }
    return num3dou(decimaltwo);
}
function decimaltwo5(number) {	//格式化数字（如果带小数则显示两位否则不显示小数）00,000,00.01
	var decimaltwo = number,twodian='';
	if (decimaltwo === null || decimaltwo === "" || decimaltwo === undefined) {
		decimaltwo = 0.00;
	} else {
		decimaltwo = toFloat(number);
		var length = decimaltwo.toString().length;
		var dian = decimaltwo.toString().indexOf('.');
		if (dian != -1) {
			var float = parseInt(length) - parseInt(dian) - 1;
			if (float > 2) {
				decimaltwo = parseFloat(Math.round(decimaltwo * 100) / 100);
			} else if (float < 2) {
				decimaltwo = decimaltwo + "0";
			}
		}
		decimaltwo=num3dou(decimaltwo);

	}
    return decimaltwo;
}

function num3dou(num) {
	if (num === null || num === "" || num === undefined || num === "NaN.00") {
		num = "0";
	} else {
		num = num.toString();
		num=num.split('').reverse().join('').replace(/(\d{3})/g, '$1,').replace(/\,$/, '').split('').reverse().join('');
	}
	return num;
}


function dataTime(value) {
    if (value == "null" || value == null || value == undefined) {
        return " ";
    } else {
        return value.substring(0,value.length-2);
    }
}
function dataTime2(value) {
    if (value == "null" || value == null || value == undefined) {
        return " ";
    } else {
        return value.split(' ')[0];
    }
}
// Chinese ID card validation function
// @author https://gist.github.com/foxwoods/1817822
var validChineseIDCard=function (id) {
	// 18位身份证号
	// 国家标准《GB 11643-1999》
	function rid18(id) {
		if (!/^\d{17}[\dxX]$/.test(id)) {
			return false;
		}
		var modcmpl = function(m, i, n) {
				return (i + n - m % i) % i;
			},
			f = function(v, i) {
				return v * (Math.pow(2, i - 1) % 11);
			},
			s = 0;
		for (var i = 0; i < 17; i++) {
			s += f(+id.charAt(i), 18 - i);
		}
		var c0 = id.charAt(17),
			c1 = modcmpl(s, 11, 1);
		return c0 - c1 === 0 || (c0.toLowerCase() === 'x' && c1 === 10);
	}

	// 15位身份证号
	// 2013年1月1日起将停止使用
	// http://www.gov.cn/flfg/2011-10/29/content_1981408.htm
	function rid15(id) {
		var pattern = /^[1-9]\d{5}(\d{2})(\d{2})(\d{2})\d{2}[\dxX]$/,
			matches, y, m, d, date;
		matches = id.match(pattern);
		if (matches == null)
			return false;
		y = +('19' + matches[1]);
		m = +matches[2];
		d = +matches[3];
		date = new Date(y, m - 1, d);
		return (date.getFullYear() === y && date.getMonth() === m - 1 && date.getDate() === d);
	}

	return rid18(id); // || rid15(id); // We will only allow 18 digits ID cards
}

var actionNotice=function (msg, a, color) {
	var msg,
		a=a?a:3000,
		color=color?a:'#D9EDF7';
	if (msg == null || msg == undefined || msg == "") {
		msg = H5.Config.ERROR_MSG_ALL;
	}
	$('#succ_msg').clearQueue().remove();
	var screen_width = $(window).width() / 2 - 300 / 2,
		screen_height = 140;
	var html = '<div id="succ_msg" style="_position:absolute;display:none;padding: 8px;position:fixed;top:' + screen_height + 'px;z-index:9999999999;width:300px;left:'+screen_width+'px;border-radius:4px;background-color:'+ color + ';border-color:#BCE8F1;color:#3A87AD;font-size:12px;line-height:20px;text-align:center;">' + msg + '</div>';

	$('body').append(html);
	$("#succ_msg").fadeIn(500);
	setTimeout(function() {
		$("#succ_msg").fadeOut(500);
	}, a);
}

var actionNoticeDf=function (id,msg, a) {
	var msg,
		a=a?a:10000;
	if (msg == null || msg == undefined || msg == "") {
		msg = H5.Config.ERROR_MSG_ALL;
	}
	$(id).clearQueue().remove();
	$('#mark_min').clearQueue().remove();
	var screen_width = $(window).width(),
		screen_height = $(window).height();
	var html = '<div id="mark_min" style="width:'+screen_width+';height:'+screen_height+'"></div>' + msg;

	$('body').append(html);
	$(id).fadeIn(500);
	$('#mark_min').fadeIn(500);
	setTimeout(function() {
		$(id).fadeOut(500);
		$('#mark_min').fadeOut(500);
	}, a);
}


var getDomainName =function() {
	var url;
	var se = window.location.href.match(H5.Config.REGEX_URL_HOST);
	try {
		url = se && se.length > 0 ? se[0] : H5.Config.URL_PREFIX;
	} catch (e) {}
	return url;
}

var AjaxRequest = function (url,data,success,beforeSend,errorfun) {	
    Ajax('POST',url,data,success,beforeSend,errorfun);
};
var AjaxRequestWithGet = function (url,data,success,beforeSend,errorfun) {	
    Ajax('GET',url,data,success,beforeSend,errorfun);
};

var Ajax = function (type,url,data,success,beforeSend,errorfun) {
	if(errorfun==undefined||errorfun==null){
		errorfun=function (xhr, text, errorThrown) {
			hidloading()////取消旋转图片
            if(xhr.status < 500){
                actionNotice(xhr);
            }else{
                actionNotice("网络异常，请稍候重试");
            }
        }
	}
	if(beforeSend=='hasLoad'){
		beforeSend=function () {
           shouloading()//显示旋转图片
        }
	}

    $.ajax({
        url:url,
        data:data,
        type:type,
        dataType:'json',
        beforeSend:beforeSend,
        success:success,
        error:errorfun
    });
};

/*
 *获取手机系统信息
 */
function getMobileSystem() {
	var sys = "";
	var u = navigator.userAgent;

	if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1||u.indexOf('Safari') > -1) { //安卓手机
		sys = "Android";
	} else if (u.indexOf('iPhone') > -1||u.indexOf('Mac') > -1) { //苹果手机
		sys = "IOS";
	} else if (u.indexOf('Windows Phone') > -1) { //winphone手机
		sys = "WinPhone";
	}

	return sys;
}
/*
 *获取手机浏览器信息
 */
function getMobileBrowser(){
	var userAgent = navigator.userAgent;
	var isOpera = userAgent.indexOf("Opera") > -1;
	if(userAgent.indexOf("micromessenger") > -1){
		return "Weixin"
	}else if (isOpera) {
	     return "Opera"
	}else if (userAgent.indexOf("Firefox") > -1) {
		 return "FF";
	}else if (userAgent.indexOf("Chrome") > -1){
	   return "Chrome";
	}else if (userAgent.indexOf("Safari") > -1) {
		return "Safari";
	}else if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
	 	return "IE";
	};
}

function jtabs(obj,e,f){//切换效果
	var _this = $(obj);
    var _hd = _this.find(e);
    var _cont = _this.find(f);

    _hd.each(function (i) {
        _hd.eq(0).addClass("active").siblings(e).removeClass("active");
        _cont.eq(0).addClass("active").show().siblings(f).hide().removeClass("active");
        _hd.eq(i).click(function () {
            $(this).addClass("active").siblings(e).removeClass("active");
            _cont.eq(i).addClass("active").show().siblings(f).hide().removeClass("active");
        });
    });

}

function limit(){   //截取字数：
    var self = $(".limit");
	self.each(function(){
	   var objString = $(this).text();
	   var objLength = $(this).text().length;
	   var num = $(this).attr("limit");
	   if(objLength > num){           
	       $(this).text(objString.substring(0,num) + "...");
	   }else{
	       $(this).text(objString);
	   }
	})
}

function truncateString(str, length) { //截取字数2
    if (str && str.length > length)
        return str.substring(0, length - 3) + '...';
    else
        return str;
}


function filterHTMLTag (msg) { //	去除html标签
    var msg = msg.replace(/<\/?[^>]*>/g, ''); 
    msg = msg.replace(/[|]*\n/, '');
    msg = msg.replace(/&nbsp;/g, '');
    return msg;
}

function regJsLinkAndHref(s,type) {   
	var type=type||'script';
	var str=s.toLowerCase();
	var result={
		msg:'',
		issuc:false,
		html:str
	};
	var reg={
		script:/<script.*?>.*?<\/script>/ig,//类似<script sss> ssss <script>
		scriptStart:/<script.*?>/ig,//类似<script sss>
		scriptEnd:/<\/script>/ig,//类似<\/script>
		link:/<link.*?/ig,
		href:/<a.*?>.*?<\/a>/ig,//类似<a href="/assets/stylesheets/account/loandetail.css">aaa</a>
		hrefStart:/<a.*?>/ig,
		hrefEnd:/<\/a>/ig,
	}
	
	switch (type){
		case 'script':
			if(reg.script.test(str)){
				result.msg='不能提交js代码';
				result.issuc=false;
				result.html=str.replace(reg.script, '');
			}else if(reg.scriptStart.test(str)){
				result.msg='不能提交含script标签的代码';
				result.issuc=false;
				result.html=str.replace(reg.scriptStart, '');
			}else if(reg.scriptEnd.test(str)){
				result.msg='不能提交含script标签的代码.';
				result.issuc=false;
				result.html=str.replace(reg.scriptEnd, '');
			}else{
				result.issuc=true;
			}
			break;
		case 'link':
			if(reg.link.test(str)){
				result.msg='不能提交含link标签的代码';
				result.issuc=false;
				result.html=str.replace(reg.link, '');
			}else{
				result.issuc=true;
			}
			break;
		case 'href':
			if(reg.href.test(str)){
				result.msg='不能提交含a标签的代码';
				result.issuc=false;
				result.html=str.replace(reg.href, '');
			}else if(reg.hrefStart.test(str)){
				result.msg='不能提交含a标签的代码。';
				result.issuc=false;
				result.html=str.replace(reg.hrefStart, '');
			}else if(reg.hrefEnd.test(str)){
				result.msg='不能提交含a标签的代码.';
				result.issuc=false;
				result.html=str.replace(reg.hrefEnd, '');
			}else{
				result.issuc=true;
			}
			break;
	}
	return result;  
}

/*
 *Storage
 */
var Storage = {
    setSessionStorage: function(key, val) {
        sessionStorage.setItem(key, val);
    },

    setLocalStorage: function(key, val) {
        localStorage.setItem(key, val);
    },

    setCookie: function(key, val, da) {
        value = val.toString();
	    if(da==null){
	        da=30* 24 * 60 * 60 * 1000;
	    }
	    var exp = new Date();
	    exp.setTime(exp.getTime() + da);
	    document.cookie = key + "=" + escape(value) + ";expires=" + exp.toGMTString();
    },

    getFromSessionStorage: function(key) {
        return sessionStorage.getItem(key);
    },

    getFromLocalStorage: function(key) {
        return localStorage.getItem(key);
    },

    getCookie: function(key) {
         var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
	    if (arr = document.cookie.match(reg))
	        return unescape(arr[2]);
	    else
	        return null;
    },

    removeSessionStorage: function(key) {
        sessionStorage.removeItem(key);
    },

    removeLocalStorage: function(key) {
        localStorage.removeItem(key);
    },

    removeCookie: function(key) {
        var exp = new Date();
	    exp.setTime(exp.getTime() - 1);
	    var cval = Storage.getCookie(key);
	    if (cval != null)
	        document.cookie = key + "=" + cval + ";expires=" + exp.toGMTString();
    }
}

/**
 *获取验证码读秒倒计时
 * @param objId :DOM对象
 * @param maxvalue:读秒起始值
 * @param defaultText ：默认字符串
 **/
var djsxh;
function timer(objId, maxvalue,adclass, defaultText) {//input倒计时

	maxvalue = maxvalue - 1;
	defaultText=defaultText||'发送验证码'
    if (maxvalue >= 1) {
        var html =+ maxvalue + "s";

        if ($(objId) && $(objId).length > 0) {
            $(objId).val(html);
            $(objId).attr("disabled", "true");
            $(objId).addClass(adclass);
            objId = $(objId).attr("id");
        } else {
            $("#" + objId).val(html);
            $("#" + objId).attr("disabled", "true");
            $("#" + objId).addClass(adclass);
        }

        djsxh = setTimeout(function(){
            timer(objId, maxvalue,adclass, defaultText)
        }, 1000);
    } else {
        djsxh = setTimeout(function() {
            if ($(objId) && $(objId).length > 0) {
                $(objId).val(defaultText);
                $(objId).removeAttr("disabled");
                $(objId).removeClass(adclass);
            } else {
                $("#" + objId).val(defaultText);
                $("#" + objId).removeAttr("disabled");
                $("#" + objId).removeClass(adclass);
            }

        }, 1000);
    }
}

function clearTimer(objId, defaultText, adclass) {
    clearTimeout(djsxh);
    if ($(objId) && $(objId).length > 0) {
        $(objId).val(defaultText);
        $(objId).removeAttr("disabled");
        $(objId).removeClass(adclass);
    } else {
        $("#" + objId).val(defaultText);
        $("#" + objId).removeAttr("disabled");
        $("#" + objId).removeClass(adclass);
    }
}


//上下左右touch滑动
function touchCartItem(obj,callback){
    var startPos,endPos,isScrolling=0;
    var $this;
    //手指按下的处理事件
    var startHandler = function(event){
        $this=$(this);
        var touch = event.originalEvent.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
        startPos = {x:touch.pageX,y:touch.pageY}; //取第一个touch的坐标值
        $(obj).on('touchmove', moverHandler);
    };
    var moverHandler=function (event) {
        var touch = event.originalEvent.targetTouches[0];
        endPos = {x:touch.pageX - startPos.x,y:touch.pageY - startPos.y};
        isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1:0;
        if(typeof callback == "function"){
            //console.log(endPos.x)
            callback(endPos,$this,isScrolling);
        }
        $(obj).on('touchend', endHandler);
    }
    //手指抬起的处理事件
    var endHandler = function(event){
        //$(obj).off('touchstart', startHandler);
        $(obj).off('touchmove', moverHandler);
        $(obj).off('touchend', endHandler);
    };

    $(obj).on('touchstart', startHandler);
    //$(obj).on('touchmove', moverHandler);
    // $(obj).on('touchend', endHandler);

}

