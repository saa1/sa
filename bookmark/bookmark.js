$(function () {
    function list(kw) {
        $.get("url.js", function (data) {
            var lists = data.split("\n");
            var htm = '';
            if (lists.length) {
                $.each(lists, function (k, v) {
                    var v1 = kw ? (v.indexOf(kw) > 0 ? v : '') : v;
                    if (v1) {
                        var path = v1.split('/');
                        var name = path.pop();
                        var url = path.join('/');
                        htm += '<a style="background-image: url(\'' + path[0] + '//' + path[2] + '/favicon.ico\')" href="' + url + '">' + name + ' <u>' + url + '</u></a>';
                    }
                });

            }
            $('div').html(htm || '<a href="http://kk-a.com/s/?' + $('#kw').val() + '">Search</a>');
        }, 'text');
    }

    function kw() {
        var kw = $('#kw').val();
        if (!kw) return 0;
        list(kw);
    }

    list();
    $("#find").click(function () {
        kw();
    });

    $("#kw").keydown(function (e) {
        if (e.keyCode == 13) {
            kw();
        }
    });
});
