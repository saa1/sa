var browser = {
	versions : function () {
		var u = navigator.userAgent,
		app = navigator.appVersion;
		return { //移动终端浏览器版本信息
			trident : u.indexOf('Trident') > -1, //IE内核
			presto : u.indexOf('Presto') > -1, //opera内核
			webKit : u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko : u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile : !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/), //是否为移动终端
			ios : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android : u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
			iPhone : u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
			iPad : u.indexOf('iPad') > -1, //是否iPad
			webApp : u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
		};
	}
	(),
	language : (navigator.browserLanguage || navigator.language).toLowerCase()
}
var Cookie = {
	get : function (name) {
		var value = '',
		matchs;
		if (matchs = document.cookie.match("(?:^| )" + name + "(?:(?:=([^;]*))|;|$)"))
			value = matchs[1] ? unescape(matchs[1]) : "";
		return value
	},
	set : function (name, value, expire, domain) {
		expire = expire || 30 * 24 * 3600 * 1000;
		var date = new Date(),
		cookie = "";
		date.setTime(date.getTime() + expire);
		cookie = name + "=" + escape(value) + ";expires=" + date.toGMTString() + ";path=/;";
		domain && (cookie += "domain=" + domain + ";");
		document.cookie = cookie
	},
	del : function (name, domain) {
		Cookie.set(name, '', -1, domain)
	}
};
