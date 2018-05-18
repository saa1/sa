$(document).ready(function () {
	function titleCreate(d) {
		var A = '';
		L = d.length;
		for (var i = 0; i < L; i++) {
			A += '<a rel="showNav(' + i + ')">' + d[i].title + '</a>'
		}
		$("#titleMenu").html(A);
		showNav(0)
	}
	function showNav(j) {
		var A = '';
		d = Search['cn'][j].items;
		L2 = d.length;
		for (var i = 0; i < L2; i++) {
			A += '<a rel="keyword(' + j + ',' + i + ')">' + d[i].title + '</a>'
		}
		$("#searches").html(A);
		keyword(j, 0)
	}
	function keyword(j, i) {
		var B = $("#keyword").val();
		if (B) {
			iframeLoad('&nbsp;&nbsp;loading...');
			var H = Search['cn'][j].items[i].url;
			if (H.indexOf("{keyword:gbk}") > -1) {
				H = H.replace("{keyword:gbk}", $GB2312.encodeURIComponent(B))
			} else if (H.indexOf("{keyword}") > -1) {
				H = H.replace("{keyword}", encodeURIComponent(B))
			} else if (H.indexOf("{keyword:escape}") > -1) {
				H = H.replace("{keyword:escape}", escape(B))/*
					}else if (H.indexOf("{nokeyword}") > -1) { H = H.replace("{nokeyword}", "")
					}else if (H.indexOf("{noEncode}") > -1) { H = H.replace("{noEncode}", B)*/
			} else if (H.indexOf("{open}") > -1) {
				window.open(H.replace("{open}", encodeURIComponent(B)), '');
				H = 'about:blank';
			} else if (H.indexOf("{open:gbk}") > -1) {
				window.open(H.replace("{open:gbk}", $GB2312.encodeURIComponent(B)), '');
				H = 'about:blank';
			} else {
				H = H + encodeURIComponent(B)
			}
			document.title = B + ' - 多重搜索';
			window.setTimeout(function () {
				$("#iframeDom").attr('src', H)
			}, 50);
		}
		$("#searchBut").attr('title', 'keyword(' + j + ',' + i + ')');
		$("#searchBut").html(Search['cn'][j].items[i].title + Search['cn'][j].title);
		$("a[rel]").off().click(function () {
			eval($(this).attr('rel'));
		});
	}
	function iframeLoad(B,u) {
		var A = $("#iframeDom");
		if(u||B.substr(0,4)=='http'){
			A.attr('src', B);
			return;
		}
		A.attr('src', "about:blank");
		try {
			A.contents().find('body').html(B);
		} catch (C) {
			A.attr('src',"l/help.htm?" + escape(B));
		}
	}
	function setIframeUI() {
		$("#iframeDom").css({
			'width' : '100%',
			'height' : ($(document).outerHeight() - $("#header").outerHeight() - $("#headerNav").outerHeight() - 5) + 'px'
		})
	}
	function v(){$("#hisDom").hide(); return $('#keyword').val();}
	function p(s){
	if(s.substr(0,7)=='http://'){window.open(s,"");}
	else if(s.length>30){  
		  pr=window.open("","Preview");
		  pr.document.write(s);  
		  }  
	  else iframeLoad("<TEXTAREA style=\"width:100%;height:200px;display:block\" onblur=\"document.getElementById(\'l\').value=this.value.length;document.getElementById(\'l2\').value=this.value.replace(\/[^\\x00-\\xff]\/gi,\'--\').length;\">"+s+"<\/TEXTAREA>字符数<input id=l>字节数<input id=l2>");
	}
	$("#searchBut").off().click(function () {
		eval($(this).attr('title'));
	});
	$("#searchImgTop").off().click(function () {
		$("#hisDom").toggle();
	});
	$("#keyword").dblclick(function () {
		$(this).val('');
	});
	$("#keyword").keydown(function (e) {
		if(e.keyCode==13){
			eval($("#searchBut").attr('title'));
			return false;
		}
	});
	$(window).resize(function() {
	  setIframeUI();
	});
	$(window).keydown(function(event){
	  switch(event.keyCode) {
		  case 13:
			if (!$("#keyword").val()) {
				return false
			}
			eval($("#searchBut").attr('title'));
			break;
		// ...
		// 不同的按键可以做不同的事情
		// 不同的浏览器的keycode不同
		// 更多详细信息:     http://unixpapa.com/js/key.html
		// 常用keyCode： 空格 32   Enter 13   ESC 27
	  }
	});
	if (location.search)
		$("#keyword").val(decodeURIComponent(location.search.substr(1)));
	titleCreate(Search['cn']);
	setIframeUI();

});
