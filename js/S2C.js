var S2Cps, S2C = {
    key: function (o) {
        /*let dkey = Date.parse((new Date()).toDateString());
        if (o) return S2C.dec(o,dkey);
        let ps;
        if (!sessionStorage.pXmgQXPjvQX) {
            ps = prompt("S2C", "");
            sessionStorage.pXmgQXPjvQX = S2C.enc(ps,dkey);
        }
        ps = S2C.key(sessionStorage.pXmgQXPjvQX);*/
        if (!S2Cps) {
            S2Cps = prompt("S2C", "");
        }
        return S2Cps;
    },
    r2s: function () {
        var s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ.;[]-=~!@#$%^&*()_+{}|:?', s2 = '';
        var n = parseInt(Math.random() * 2 + 1);//3-1+1
        for (var i = 0; i < n; i++) s2 += s.charAt(parseInt(Math.random() * s.length + 1));
        return s2;
    },
    rvs: function (str) {
        return str.split("").reverse().join("");
    },
    enc: function (s, k) {
        if (!k) k = S2C.key();
        var a = S2C.r2s(), n = s.length;
        for (var i = 0; i < n; i++) {
            let t = s.codePointAt(i) + (i + 1928374605) % k;
            a += t.toString(36) + S2C.r2s();
        }
        return S2C.rvs(a);
    },
    dec: function (s, k) {
        if (!k) k = S2C.key();
        var a = S2C.rvs(s).match(/[a-z\d]+/g), n = a.length, s2 = '';
        for (var i = 0; i < n; i++) {
            s2 += String.fromCodePoint(parseInt(a[i], 36) - (i + 1928374605) % k);
        }
        return s2;
    }
};