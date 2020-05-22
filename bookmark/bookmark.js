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
                        htm += '<a href="' + url + '">' + name + ' <u>' + url + '</u></a>';
                    }
                 });

            }
            $('div').html(htm || '<a href="../s/?' + $('#kw').val() + '">Search</a>');
        }, 'text');
    }

    function nav() {
        var htm = '';
        $.each(['api','app','bbs','doc','code','gov','job','site','tool','ued'], function (k, v) {
                        htm += '<b title="' + v + '">' +v + '</b>';
                });
        $('#navB').html(htm || '<a href="../s/?' + $('#kw').val() + '">Search</a>');
        list('job');
    }

    nav();
    $("b").click(function () {
        list($(this).attr('title'));
    });
});
