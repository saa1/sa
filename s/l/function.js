function $(A) {
  if (A == null) {
    return null
  }
  if (typeof(A) == "string") {
    return document.getElementById(A)
  } else {
    if (typeof(A) == "object") {
      return A
    }
  }
}
function titleCreate(d) {
  var A = ''; L=d.length;
  for (var i = 0; i < L; i++) {
    A+='<a onclick="showNav('+i+')" href="javascript:void(0);">'+d[i].title+'</a>'    
  }
 $("titleMenu").innerHTML = A;
 showNav(0)
}
function showNav(j) {
  var A = ''; d=Search['cn'][j].items;L2=d.length;
  for (var i = 0; i < L2; i++) {
    A+='<a onclick="keyword('+j+','+i+')" href="javascript:void(0);">'+d[i].title+'</a>'    
  }
 $("searches").innerHTML = A;
keyword(j,0)
}
function keyword(j,i) {
var B = $("keyword").value.replace(/\xb7/g, " ");
if (B) {
      iframeLoad('&nbsp;&nbsp;loading...');
      var H = Search['cn'][j].items[i].url;
      if (H.indexOf("{keyword:gbk}") > -1) { H = H.replace("{keyword:gbk}", $GB2312.encodeURIComponent(B))
      }else if (H.indexOf("{keyword}") > -1) { H = H.replace("{keyword}", encodeURIComponent(B))
      }else if (H.indexOf("{keyword:escape}") > -1) { H = H.replace("{keyword:escape}", escape(B))/*
      }else if (H.indexOf("{nokeyword}") > -1) { H = H.replace("{nokeyword}", "")
      }else if (H.indexOf("{noEncode}") > -1) { H = H.replace("{noEncode}", B)*/
      }else if (H.indexOf("{open}") > -1) { window.open(H.replace("{open}", encodeURIComponent(B)),'');H='about:blank';
      }else if (H.indexOf("{open:gbk}") > -1) { window.open(H.replace("{open:gbk}", $GB2312.encodeURIComponent(B)),'');H='about:blank';
      }else { H = H + encodeURIComponent(B)
      }
document.title = B + ' - ENOOK多重搜索';
window.setTimeout(function() {$("iframeDom").src = H},50);
   }
$("searchBut").title = 'keyword('+j+','+i+')';
$("searchBut").innerHTML = Search['cn'][j].items[i].title+Search['cn'][j].title;
}
function iframeLoad(B) {
    var A = $("iframeDom");
    A.src = "about:blank";
    try {
      var D = A.contentWindow.document;
      D.open();
      D.write(B);
      D.close()
    } catch(C) {A.src="l/help.htm?"+escape(B);}
  }
function setIframeUI() {
    $("iframeDom").width = Base.getView().w + "px";
    $("iframeDom").height = (Base.getView().h - Base.getDomWH("header").h - Base.getDomWH("headerNav").h) + "px"
  }
var Base = {
  Browser: {
    IE: !!(window.attachEvent && !window.opera),
    Opera: !!window.opera,
    WebKit: navigator.userAgent.indexOf("AppleWebKit/") > -1,
    Gecko: navigator.userAgent.indexOf("Gecko") > -1 && navigator.userAgent.indexOf("KHTML") == -1
  },
  getView: function() {
    var A = self.innerHeight;
    var B = self.innerWidth;
    var C = document.compatMode;
    if ((C || Base.Browser.IE) && !Base.Browser.Opera) {
      A = (C == "CSS1Compat") ? document.documentElement.clientHeight: document.body.clientHeight
    }
    if (C || Base.Browser.IE) {
      B = (C == "CSS1Compat") ? document.documentElement.clientWidth: document.body.clientWidth
    }
    return {
      w: B,
      h: A
    }
  },
  getDomWH: function(C) {
    var B = $(C).offsetWidth;
    var A = $(C).offsetHeight;
    return {
      w: B,
      h: A
    }
  }
};
window.onresize = function() {
 setIframeUI();
};
document.onkeydown = function(A) {
  var A = A ? A: window.event;
  if (A.keyCode == "13") {
    if ($("keyword").value == "") {
      return false
    }
    eval($("searchBut").title)
  }
};
function init() {
if(location.search) $("keyword").value = decodeURIComponent(location.search.substring(1,location.search.length).replace(/\+/g, "%20"));
    titleCreate(Search['cn']);
    setIframeUI();
}