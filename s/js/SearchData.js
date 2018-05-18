var Search = {
cn:[
{
  title: "网页",
  items: [
    {title: "百度",url: "http://www.baidu.com/s?tn=enook.cn&ch=2&ie=utf-8&wd="},
    {title: "360",url: "http://so.360.cn/s?q="},
    {title: "搜狗",url: "http://www.sogou.com/web?query={keyword:gbk}"},
    {title: "Bing",url: "http://cn.bing.com/search?form=QBLH&filt=all&q="},
    {title: "WAP",url: "https://m.baidu.com/s?word="}
    ]
},
{
  title: "新闻",
  items: [
    {title: "百度",url: "http://news.baidu.com/ns?word={keyword:gbk}"},
    {title: "搜狗",url: "http://news.sogou.com/news?query={keyword:gbk}"},
    {title: "凤凰",url: "http://search.ifeng.com/sofeng/search.action?q="},
    {title: "和讯",url: "http://so.hexun.com/default.do?type=all&key="},
  ]
},
{
  title: "社圈",
  items: [
    {title: "帖吧",url: "http://tieba.baidu.com/f/search/res?ie=utf-8&qw="},
    {title: "知乎",url: "http://zhihu.sogou.com/zhihu?ie=utf8&query="},
    {title: "微信",url: "http://weixin.sogou.com/weixin?type=2&ie=utf8&tsn=1&ft=&et=&interation=&wxid=&usip=&query="},
    {title: "微博",url: "http://s.weibo.com/weibo/{open}"},
    {title: "和讯",url: "http://so.hexun.com/default.do?type=all&key="},
    {title: "CSDN",url: "http://so.csdn.net/search?t=blog&q="}
  ]
},
{
  title: "应用",
  items: [
    {title: "百度",url: "http://shouji.baidu.com/s/{keyword}/"},
    {title: "搜狗",url: "http://as.sogou.com/so?query="},
    {title: "应用宝",url: "http://android.myapp.com/myapp/search.htm?kw="}
    ]
},
{
  title: "图片",
  items: [
    {title: "百度",url: "http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&f=3&oq=df&rsp=0&word="},
    {title: "搜狗",url: "http://pic.sogou.com/pics?ie=utf8&query="},
    {title: "有道",url: "http://image.youdao.com/search?q={keyword}"},
    {title: "谷歌",url: "http://www.google.com.hk/search?tbm=isch&q="},
    {title: "Bing",url: "http://cn.bing.com/images/search?FORM=BIFD&q="}
  ]
},
{
  title: "音乐",
  items: [
    {title: "搜狗",url: "http://mp3.sogou.com/music.so?query={keyword:gbk}&p=99040205"},
    {title: "百度",url: "http://music.baidu.com/search?key="},
    {title: "中搜",url: "http://mp3.zhongsou.com/m?w={keyword:gbk}"}
  ]
},
{
  title: "视频",
  items: [
    {title: "百度",url: "http://v.baidu.com/v?ie=utf-8&word="},
    {title: "优酷",url: "http://www.soku.com/search_video/q_"},
    {title: "搜狗",url: "http://v.sogou.com/v?ie=utf8&p=76330600&query="},
    {title: "CNTV",url: "http://search.cctv.com/search.php?qtext={keyword}&sid=0000"}
  ]
},
{
  title: "下载",
  items: [
    {title: "文库",url: "http://wendang.baidu.com/search?word={keyword:gbk}&lm=0&od=0&fr=top_home"},
    {title: "豆丁",url: "http://www.docin.com/search.do?searchcat=2&nkey="},
    {title: "电驴",url: "http://www.verycd.com/search/folders/{open}"},
    {title: "360doc",url: "http://www.360doc.com/search.html?type=0&word={keyword:escape}"},
    {title: "多特",url: "http://www.duote.com/search.php?so={keyword:gbk}"},
    {title: "百度盘",url: "http://www.sobaidupan.com/search.asp?wd="},
    {title: "爱问",url: "http://ishare.iask.sina.com.cn/search/0-0-all-1?cond="},
    {title: "ED2000",url: "http://www.baidu.com/s?q1={keyword}&rn=100&lm=0&ct=0&q6=ed2000.com&tn=baiduadv"},
    {title: "xuexi1",url: "http://www.baidu.com/s?q1={keyword}&rn=100&lm=0&ct=0&q6=xuexi111.com&tn=baiduadv"},
  ]
},
{
  title: "知道",
  items: [
	  {title: "经验",url: "https://jingyan.baidu.com/search?word="},
    {title: "爱问",url: "http://iask.sina.com.cn/search?record=1&searchWord="},
    {title: "知道",url: "https://zhidao.baidu.com/search?word="},
    {title: "生意经",url: "http://search.china.alibaba.com/wiki/wiki_search.htm?n=y&keywords={keyword:gbk}"},
	  {title:"宝宝",url:"https://baobao.baidu.com/mybaby/search/index?p=0&rn=10&q="},
    {title: "问问",url: "http://wenwen.sogou.com/s/?w="}
  ]
},
{
  title: "百科",
  items: [
    {title: "百科",url: "https://baike.baidu.com/search?enc=utf8&word="},
    {title: "互动",url: "http://so.hudong.com/s/doc/"},
    {title: "搜狗",url: "http://baike.sogou.com/Search.e?sp=S"}
  ]
},
{
	"title": "求职",
	"items": [
        {title: "51job",url: "http://search.51job.com/jobsearch/search_result.php?keyword={keyword:gbk}" },				
        {title: "CJOL", url: "http://www.cjol.com/main/jobseeker/SearchResult_new.asp?KeyWord={keyword:gbk}" },		
        {title: "职友", url: "http://www.jobui.com/jobs?jobKw={keyword}" },
        {title: "英才",url: "http://searchjob.chinahr.com/SearchResult.aspx?indIDList=&myLocIDList=125,40&myLocParentIDList=-1,-1&isInterView=1&positionName={keyword:gbk}" },	
        {title: "智联", url: "http://search.zhaopin.com/jobs/request.asp?JobLocation=489&KeyWord={keyword}" },
        {title: "HR33", url: "http://search.hr33.com/JobResult.aspx?keyWord={keyword}&keyWordType=0&searchType=advSearch" },
        {title: "俊才", url: "http://job.goodjob.cn/JobList.aspx?postDate=7&keyWordType=0&keyWord={keyword}"}
	]
},
{
  title: "地图",
  items: [
     {title: "百度",url: "http://map.baidu.com/?newmap=1&s=con%26wd%3D{keyword}%26c%3D340&fr=alae0&ext=1&from=alamap"},
    {title: "谷歌",url: "http://maps.google.com/maps?q="},
    {title: "搜狗",url: "http://map.sogou.com/#c=11944000,4152000,4&city=%u5168%u56FD&lq={keyword}&page=1"}
  ]
},
{
  title: "词典",
  items: [
    {title: "有道",url: "http://dict.yodao.com/search?q={keyword}"},
    {title: "必应",url: "http://cn.bing.com/dict/search?q={keyword}&mkt=zh-CN&setlang=ZH"},
    {title: "海词",url: "http://dict.cn/"},
    {title: "词霸",url: "http://www.iciba.com/"},
    {title: "词酷",url: "http://www.nciku.com/search/all/"},
    {title: "百度翻译",url: "http://fanyi.baidu.com/translate#auto2auto|"},
    {title: "谷歌翻译",url: "http://translate.google.cn/?sl=auto&tl=zh-CN&js=n&prev=_t&hl=zh-CN&ie=UTF-8&layout=2&eotf=1&text={open}"},
    {title: "汉典",url: "http://www.zdic.net/zd/search/?q={keyword}"}
  ]
},
{
  title: "电商",
  items: [
    {title: "淘宝",url: "https://s.taobao.com/search?q="},
    {title: "一淘",url: "https://www.etao.com/search.htm?nq="},
    {title: "京东",url: "http://search.360buy.com/Search?keyword={keyword:gbk}"},
    {title: "1688",url: "http://search.china.alibaba.com/search/offer_search.htm?tracelog=chinaindex_searchsale&do=true&doSearchNews=true&catcount=10&keywords={keyword:gbk}"},
    {title: "阿里",url: "http://www.alibaba.com/trade/search?SearchText={keyword}"},
    {title: "aliex",url: "http://www.aliexpress.com/wholesale?SearchText={open}"},
    {title: "Amazon",url: "https://www.amazon.com/s/ref=nb_ss_gw/002-0555077-8828815?url=search-alias%3Daps&field-keywords={open}"},
    {title: "eBay",url: "http://www.ebay.com/sch/i.html?_sacat=0&_nkw={open}"}
  ]
},
{
  "title": "英文",
  "items": [
    {title: "搜狗",url: "http://english.sogou.com/english?b_o_e=1&ie=utf8&query="},
    {title: "Aol",url: "http://search.aol.com/aol/search?invocationType=searchbox.webhome&query={keyword}"},
    {title: "Gigablast",url: "http://www.gigablast.com/search?q={keyword}"}
  ]
},
{
  "title": "code",
  "items": [
    {title: "github",url: "https://github.com/search?utf8=%E2%9C%93&ref=simplesearch&q={open}"},
    {title: "sourceforge",url: "https://sourceforge.net/directory/?q={open}"},
    {title: "oschina",url: "https://www.oschina.net/search?scope=project&q="},
    {title: "cnblogs",url: "http://zzk.cnblogs.com/s/kb?Keywords="},
    {title: "csdn",url: "http://so.csdn.net/so/search/s.do?q="},
    {title: "stackoverflow",url: "http://stackoverflow.com/questions/tagged/{open}"},
    {title: "segmentfault",url: "https://segmentfault.com/search?q="}
  ]
}
]
}
