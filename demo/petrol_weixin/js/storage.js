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
	    var cval = getCookie(key);
	    if (cval != null)
	        document.cookie = key + "=" + cval + ";expires=" + exp.toGMTString();
    }
}