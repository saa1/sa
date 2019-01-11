$(function () {
    function list(kw) {
        var url = kw ? 'url_'+kw+'.txt':'url.js';
        $.get(url, function (data) {
            var lists = data.split("\n");
            var htm = '';
            if (lists.length) {
                $.each(lists, function (k, v) {
                    if(v){
                        var path = v.split('/');
                        var name = path.pop();
                        var url = path.join('/');
                        htm += '<a style="background-image: url(\'' + path[0] + '//' + path[2] + '/favicon.ico\')" href="' + url + '">' + name + ' <u>' + url + '</u></a>';
                    }
                 });

            }
            $('div').html(htm || '<a href="http://kk-a.com/s/?' + $('#kw').val() + '">Search</a>');
        }, 'text');
    }

    function nav() {
        var htm = '';
        $.each(['api','bbs','doc','code','git','gov','site','top','ued'], function (k, v) {
                        htm += '<b title="' + v + '">' +v + '</b>';
                });
        $('#navB').html(htm || '<a href="http://kk-a.com/s/?' + $('#kw').val() + '">Search</a>');
        list('doc');
    }

    nav();
    $("b").click(function () {
        list($(this).attr('title'));
    });
});
