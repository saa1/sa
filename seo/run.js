var sec=0;
var min=0;
var hou=0;
var u =",blog.kk-a.com,www.kk-a.com,ww.kk-a.com,file.kk-a.com";
var url=location.search?location.search.substr(1):'www.kk-a.com';
u.indexOf(url)?u=u.replace(','+url,''):url='www.kk-a.com';u=u.split(',');
var uid=0;
var step=20;
var steptime=20;
var str='';
var start=0;
var end=step;
var len=lnk.length-1;
idt=window.setTimeout("qian_li();",1000);
function qian_li()
{
if(sec%steptime==0){
	for(i=start;i<end;i++)str+= '<iframe src="seo.html?'+lnk[i]+'"></iframe>';
	if(url!='blog.kk-a.com')str = str.replace(/blog\.kk-a\.com/ig, url);
	document.querySelector("#lnk").innerHTML=str;str='';
	document.querySelector("#qi").innerHTML='SEO: '+url+' ； 正在处理第 '+start+' ~ '+end+' 个URL,  还剩下 '+len+'-'+end+'='+(len-end);
	start+=step;
	if(start>len){start=0;end=0;uid+=1;if(uid<u.length){url=u[uid];}else{alert('end');clearTimeout(idt);}}
	end+=step;
	if(end>len){end=len;}
}
sec++;
if(sec==60){sec=0;min+=1;}
if(min==60){min=0;hou+=1;}
document.getElementById("qian_li_v").innerHTML=hou+"小时"+min+"分"+sec+"秒";
idt=window.setTimeout("qian_li();",1000);
}
