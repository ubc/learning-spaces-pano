var m = !0,
    n = null,
    u = !1;

function da(g, x, o) {
    var l = this;
    l.x = g;
    l.y = x;
    l.a = o;
    l.o = function (g, o, s) {
        l.x = g;
        l.y = o;
        l.a = s
    };
    l.toString = function () {
        return "(" + l.x + "," + l.y + "," + l.a + ")"
    };
    l.i = function (g) {
        var o = Math.sin(g),
            g = Math.cos(g),
            s = l.y,
            x = l.a;
        l.y = g * s - o * x;
        l.a = o * s + g * x
    };
    l.j = function (g) {
        var o = Math.sin(g),
            g = Math.cos(g),
            s = l.x,
            x = l.a;
        l.x = g * s + o * x;
        l.a = -o * s + g * x
    };
    l.F = function (g) {
        var o = Math.sin(g),
            g = Math.cos(g),
            s = l.x,
            x = l.y;
        l.x = g * s - o * x;
        l.y = o * s + g * x
    };
    l.ha = function () {
        return new da(l.x, l.y, l.a)
    };
    l.length = function () {
        return Math.sqrt(l.x * l.x + l.y * l.y + l.a *
            l.a)
    };
    l.M = function (g) {
        return l.x * g.x + l.y * g.y + l.a * g.a
    };
    l.X = function (g, o) {
        var s;
        s = Math.cos(o * Math.PI / 180);
        l.x = s * Math.sin(g * Math.PI / 180);
        l.y = Math.sin(o * Math.PI / 180);
        l.a = s * Math.cos(g * Math.PI / 180)
    };
    l.na = function (g, o, s) {
        l.x = g.x * s + o.x * (1 - s);
        l.y = g.y * s + o.y * (1 - s);
        l.a = g.a * s + o.a * (1 - s)
    }
}
glMatrixArrayType = "undefined" != typeof Float32Array ? Float32Array : "undefined" != typeof WebGLFloatArray ? WebGLFloatArray : Array;

function ob(g) {
    g[0] = 1;
    g[1] = 0;
    g[2] = 0;
    g[3] = 0;
    g[4] = 0;
    g[5] = 1;
    g[6] = 0;
    g[7] = 0;
    g[8] = 0;
    g[9] = 0;
    g[10] = 1;
    g[11] = 0;
    g[12] = 0;
    g[13] = 0;
    g[14] = 0;
    g[15] = 1
}

function kc(g, x, o) {
    var l, L = o[0],
        M = o[1],
        o = o[2],
        s = Math.sqrt(L * L + M * M + o * o);
    if (s) {
        1 != s && (s = 1 / s, L *= s, M *= s, o *= s);
        var na = Math.sin(x),
            Da = Math.cos(x),
            U = 1 - Da,
            x = g[0],
            s = g[1],
            Ea = g[2],
            Fa = g[3],
            wa = g[4],
            Ga = g[5],
            Ha = g[6],
            Ia = g[7],
            bb = g[8],
            cb = g[9],
            db = g[10],
            eb = g[11],
            Ja = L * L * U + Da,
            Ka = M * L * U + o * na,
            La = o * L * U - M * na,
            oa = L * M * U - o * na,
            xa = M * M * U + Da,
            ya = o * M * U + L * na,
            za = L * o * U + M * na,
            L = M * o * U - L * na,
            M = o * o * U + Da;
        l ? g != l && (l[12] = g[12], l[13] = g[13], l[14] = g[14], l[15] = g[15]) : l = g;
        l[0] = x * Ja + wa * Ka + bb * La;
        l[1] = s * Ja + Ga * Ka + cb * La;
        l[2] = Ea * Ja + Ha * Ka + db * La;
        l[3] = Fa * Ja +
            Ia * Ka + eb * La;
        l[4] = x * oa + wa * xa + bb * ya;
        l[5] = s * oa + Ga * xa + cb * ya;
        l[6] = Ea * oa + Ha * xa + db * ya;
        l[7] = Fa * oa + Ia * xa + eb * ya;
        l[8] = x * za + wa * L + bb * M;
        l[9] = s * za + Ga * L + cb * M;
        l[10] = Ea * za + Ha * L + db * M;
        l[11] = Fa * za + Ia * L + eb * M
    }
}

function lc() {
    var g = "perspective",
        x = ["Webkit", "Moz", "O", "ms", "Ms"],
        o;
    o = u;
    for (o = 0; o < x.length; o++) "undefined" !== typeof document.documentElement.style[x[o] + "Perspective"] && (g = x[o] + "Perspective");
    "undefined" !== typeof document.documentElement.style[g] ? "webkitPerspective" in document.documentElement.style ? (g = document.createElement("style"), x = document.createElement("div"), o = document.head || document.getElementsByTagName("head")[0], g.textContent = "@media (-webkit-transform-3d) {#ggswhtml5{height:5px}}", o.appendChild(g),
        x.id = "ggswhtml5", document.documentElement.appendChild(x), o = 5 === x.offsetHeight, g.parentNode.removeChild(g), x.parentNode.removeChild(x)) : o = m : o = u;
    return o
}

function mc() {
    var g;
    if (g = !! window.WebGLRenderingContext) try {
        var x = document.createElement("canvas");
        x.width = 100;
        x.height = 100;
        var o = x.getContext("webgl");
        o || (o = x.getContext("experimental-webgl"));
        g = o ? m : u
    } catch (l) {
        g = u
    }
    return g
}

function html5player(g) {
    function x(a) {
        var c, b;
        b = [];
        c = a.getAttributeNode("title");
        b.title = c ? c.nodeValue.toString() : "";
        c = a.getAttributeNode("description");
        b.description = c ? c.nodeValue.toString() : "";
        c = a.getAttributeNode("author");
        b.author = c ? c.nodeValue.toString() : "";
        c = a.getAttributeNode("datetime");
        b.datetime = c ? c.nodeValue.toString() : "";
        c = a.getAttributeNode("copyright");
        b.copyright = c ? c.nodeValue.toString() : "";
        c = a.getAttributeNode("source");
        b.source = c ? c.nodeValue.toString() : "";
        c = a.getAttributeNode("info");
        b.information = c ? c.nodeValue.toString() : "";
        c = a.getAttributeNode("comment");
        b.comment = c ? c.nodeValue.toString() : "";
        c = a.getAttributeNode("latitude");
        b.latitude = c ? 1 * c.nodeValue : "0.0";
        c = a.getAttributeNode("longitude");
        b.longitude = c ? 1 * c.nodeValue : "0.0";
        if (c = a.getAttributeNode("tags")) {
            a = c.nodeValue.toString().split("|");
            for (c = 0; c < a.length; c++) "" == a[c] && (a.splice(c, 1), c--);
            b.tags = a
        } else b.tags = [];
        return b
    }

    function o(a) {
        nc = "{" == a.charAt(0) ? a.substr(1, a.length - 2) : "";
        d.skinObj && d.skinObj.changeActiveNode && d.skinObj.changeActiveNode(a)
    }

    function l(a) {
        for (var c = 0; c < r.length; c++)
            if (r[c].id == a) return r[c];
        for (c = 0; c < y.length; c++)
            if (y[c].id == a) return y[c];
        return n
    }

    function L(a) {
        try {
            a.obj = document.createElement("img");
            if (1 == a.g || 4 == a.g) a.obj.onclick = function () {
                a.l = !a.l;
                a.obj.style.zIndex = a.l ? 80 : 0;
                a.obj.style[fa] = "all 1s ease 0s";
                a.I = m;
                a.obj.addEventListener(s(), function () {
                    a.I = u;
                    a.obj.style[fa] = "none"
                }, u);
                Eb()
            };
            a.obj.setAttribute("src", Z(a.url));
            a.n && (a.obj.width = a.n);
            a.m && (a.obj.height = a.m);
            Ma.push(a);
            a.obj.style.position = "absolute";
            var c =
                D.firstChild;
            c ? D.insertBefore(a.obj, c) : D.appendChild(a.obj)
        } catch (b) {
            $("Error addimage:" + b)
        }
    }

    function M(a) {
        try {
            a.obj = document.createElement("video");
            if (1 == a.g || 4 == a.g) a.obj.onclick = function () {
                a.l = !a.l;
                a.l ? (a.obj.style.zIndex = 80, a.obj.style[fa] = "all 1s ease 0s", d.playSound(a.id)) : (a.obj.style.zIndex = 0, a.obj.style[fa] = "all 1s ease 0s");
                a.I = m;
                a.obj.addEventListener(s(), function () {
                    a.I = u;
                    a.obj.style[fa] = "none"
                }, u);
                Eb()
            };
            2 == a.g && (a.obj.onclick = function () {
                d.playPauseSound(a.id)
            });
            var c;
            for (c = 0; c < a.url.length; c++) {
                var b;
                b = document.createElement("source");
                b.setAttribute("src", Z(a.url[c]));
                a.obj.appendChild(b)
            }
            a.obj.volume = a.b * Q;
            0 == a.loop && (a.obj.e = 1E7);
            1 <= a.loop && (a.obj.e = a.loop - 1);
            if ((1 == a.mode || 2 == a.mode || 3 == a.mode || 5 == a.mode) && 0 <= a.loop) a.obj.autoplay = m;
            y.push(a);
            a.obj.style.position = "absolute";
            a.n && (a.obj.width = a.n);
            a.m && (a.obj.height = a.m);
            var h = D.firstChild;
            h ? D.insertBefore(a.obj, h) : D.appendChild(a.obj);
            a.$ = m;
            a.obj.addEventListener("ended", function () {
                if (0 < this.e) return this.e--, this.currentTime = 0, this.play(),
                m;
                this.$ = u
            }, u)
        } catch (e) {
            $(e)
        }
    }

    function s() {
        var a, c = document.createElement("fakeelement"),
            b = {
                OTransition: "oTransitionEnd",
                MSTransition: "msTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionEnd"
            };
        for (a in b)
            if (void 0 !== c.style[a]) return b[a]
    }

    function na(a) {
        var c = -1;
        try {
            for (var b = 0; b < r.length; b++) r[b].id == a.id && r[b].obj != n && r[b].url.join() == a.url.join() && r[b].loop == a.loop && r[b].mode == a.mode && (c = b);
            if (-1 == c) {
                for (b = 0; b < r.length; b++)
                    if (r[b].id == a.id &&
                        r[b].obj != n) {
                        try {
                            r[b].obj.pause()
                        } catch (d) {
                            $(d)
                        }
                        try {
                            r[b].obj.parentElement.removeChild(r[b].obj), delete r[b].obj, r[b].obj = n
                        } catch (e) {
                            $(e)
                        }
                        c = b
                    }
                a.obj = document.createElement("audio");
                for (b = 0; b < a.url.length; b++) {
                    var f;
                    f = document.createElement("source");
                    "" != a.url[b] && "#" != a.url[b] && (f.setAttribute("src", Z(a.url[b])), a.obj.appendChild(f))
                }
                a.obj.volume = a.b * Q;
                0 == a.loop && (a.obj.e = 1E7);
                1 <= a.loop && (a.obj.e = a.loop - 1);
                if ((1 == a.mode || 2 == a.mode || 3 == a.mode || 5 == a.mode) && 0 <= a.loop) a.obj.autoplay = m;
                0 <= c ? r[c] = a : r.push(a);
                0 < a.obj.childNodes.length && (C.appendChild(a.obj), a.obj.addEventListener("ended", function () {
                    if (0 < this.e) return this.e--, this.currentTime = 0, this.play(), m
                }, u))
            }
        } catch (k) {
            $(k)
        }
    }

    function Da() {
        var a;
        a = document.createElement("div");
        a.innerHTML = Nc("PGRpdiBzdHlsZT0icG9zaXRpb246IHJlbGF0aXZlOyBsZWZ0OiAwcHg7IHJpZ2h0OiAwcHg7IHRvcDogNDAlOyBib3R0b206IDYwJTsgbWFyZ2luOiBhdXRvOyB3aWR0aDogMThlbTsgaGVpZ2h0OiA0ZW07IGJvcmRlcjogM3B4IHNvbGlkICM1NTU7IGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjMzMzOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgZGlzcGxheTogdGFibGU7IGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBmb250LXNpemU6IDEwcHQ7IG9wYWNpdHk6IDAuOTU7IGJvcmRlci1yYWRpdXM6IDE1cHg7Ij48cCBzdHlsZT0idGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiB0YWJsZS1jZWxsOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAiPkNyZWF0ZWQgd2l0aCA8YSBocmVmPSJodHRwOi8vcGFubzJ2ci5jb20vIiB0YXJnZXQ9Il9ibGFuayI+UGFubzJWUjwvYT48L3A+PC9kaXY+JzsNCgkJ");
        a.setAttribute("style", "top:  0px;left: 0px;width: 100px;height: 100px;overflow: hidden;z-index: 5000;position:relative;");
        C.replaceChild(a, D);
        a.style.width = 0 + ga + Fb + A + "px";
        a.style.height = 0 + ha + Gb + z + "px";
        a.onclick = function () {
            C.replaceChild(D, a)
        };
        a.oncontextmenu = function () {
            C.replaceChild(D, a)
        }
    }

    function U() {
        setTimeout(function () {
            d.setFullscreen(u)
        }, 10);
        setTimeout(function () {
            d.setFullscreen(u)
        }, 100)
    }

    function Ea() {
        Oc(Ea);
        var a = new Date;
        0 <= O && (Aa ? (aa = 0.4 * (pa - fb), ba = 0.4 * (qa - gb), fb += aa, gb += ba, Hb(aa, ba)) : (aa =
            0.1 * -Na, ba = 0.1 * -Oa, Hb(0.1 * -Na, 0.1 * -Oa)), d.dirty = m);
        pb && (d.changeFov(0.4 * (V - t)), 0.0010 > Math.abs(V - t) / t && (pb = u), d.dirty = m);
        if (Ib && (0 != aa || 0 != ba) && 0 > O) aa *= 0.9, ba *= 0.9, 0.1 > aa * aa + ba * ba ? ba = aa = 0 : (Hb(aa, ba), d.dirty = m);
        if (0 != Pa) {
            switch (Pa) {
            case 37:
                d.changePan(1, m);
                break;
            case 38:
                d.changeTilt(1, m);
                break;
            case 39:
                d.changePan(-1, m);
                break;
            case 40:
                d.changeTilt(-1, m);
                break;
            case 43:
            case 107:
            case 16:
                d.changeFovLog(-1, m);
                break;
            case 17:
            case 18:
            case 109:
            case 45:
            case 91:
                d.changeFovLog(1, m)
            }
            d.dirty = m
        }
        if (!d.isLoaded && d.hasConfig) {
            var c,
                b = 0;
            Qa && (d.finalPanorama(), Qa = u);
            for (c = 0; c < d.checkLoaded.length; c++) d.checkLoaded[c].complete && "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYBgeACDAAADIAAE3iTbkAAAAAElFTkSuQmCC" != d.checkLoaded[c].src && b++;
            b == d.checkLoaded.length ? (qb = 1, d.isLoaded = m, d.divSkin && d.divSkin.ggLoaded && d.divSkin.ggLoaded()) : qb = b / (1 * d.checkLoaded.length)
        }
        for (; 360 < q;) q -= 360;
        for (; - 360 > q;) q += 360;
        if (hb) {
            B = Jb - q;
            if (360 == Ra - Sa) {
                for (; - 180 > B;) B +=
                    360;
                for (; 180 < B;) B -= 360
            }
            K = Kb - p;
            H = Lb - t;
            c = Math.sqrt(B * B + K * K + H * H);
            if (10 * c < rb) {
                if (hb = u, H = K = B = 0, d.onMoveComplete) d.onMoveComplete()
            } else c = c > 5 * rb ? rb / c : 0.2, B *= c, K *= c, H *= c;
            q += B;
            p += K;
            t += H;
            Mb = a.getTime();
            d.dirty = m
        } else if (ca)
            if (c = a.getTime() - Ta, 0 < Nb && d.S && c >= 1E3 * Nb) {
                if (1 < Ua.length) {
                    c = 1E3;
                    do b = Ua[Math.floor(Math.random() * Ua.length)]; while (c-- && b == nc);
                    Ta = a.getTime();
                    d.openNext("{" + b + "}")
                }
            } else K = sb * (0 - p) / 100, H = sb * (tb - t) / 100, B = 0.95 * B + 0.05 * -ra, q += B, p += K, t += H, d.dirty = m;
            else if (ib && 0 > O && a.getTime() - Mb > 1E3 * Ob && (ca =
            m, Ta = a.getTime(), H = K = B = 0), Ib && 0 == Pa && 0 > O && (0 != B || 0 != K || 0 != H)) B *= 0.9, K *= 0.9, H *= 0.9, q += B, p += K, d.changeFovLog(H), 1.0E-4 > B * B + K * K + H * H && (H = K = B = 0), d.dirty = m;
        oc && (ub ? a.getTime() - Pb >= 1E3 * pc && (ub = u) : (Ba += Va, 0 > Ba && (Ba = 0, Va = -Va, ub = m, Pb = a.getTime()), 1 < Ba && (Ba = 1, Va = -Va, ub = m, Pb = a.getTime()), d.setOverlayOpacity(Ba)));
        if (0 < y.length)
            for (c = 0; c < y.length; c++) y[c].$ && y[c].la != y[c].obj.currentTime && (y[c].la = y[c].obj.currentTime, !y[c].fa && 0 < y[c].obj.videoHeight && (y[c].fa = y[c].obj.videoWidth / y[c].obj.videoHeight));
        if (0 < R) {
            if (2 ==
                R)
                for (c = 0; c < G.length; c++) a = G[c], "poly" == a.type && a.k != a.c && (a.k > a.c ? (a.c += 0.05, a.k < a.c && (a.c = a.k)) : (a.c -= 0.05, a.k > a.c && (a.c = a.k)), d.dirty = m);
            3 == R && ia != W && (ia > W ? (W += 0.05, ia < W && (W = ia)) : (W -= 0.05, ia > W && (W = ia)), d.dirty = m)
        }
        a = new da;
        a.X(q, p);
        for (c = 0; c < r.length + y.length; c++)
            if (b = c < r.length ? r[c] : y[c - r.length], b.obj) {
                var h;
                h = b.pan - q;
                for (var e = b.tilt - p; - 180 > h;) h += 360;
                for (; 180 < h;) h -= 360;
                var f = b.z,
                    k = b.field;
                0 == k && (k = 0.01);
                0 > k && (k = t);
                b.N || (b.N = new da, b.N.X(b.pan, b.tilt));
                if (3 == b.mode) {
                    h = Math.abs(h);
                    h = h < b.f ? 0 : h -
                        b.f;
                    var g = b.b,
                        e = Math.abs(e),
                        e = e < b.r ? 0 : e - b.r,
                        l = 1 - e / k;
                    if (Math.abs(h) > k || 0 > l) b.obj.volume = g * f * Q;
                    else {
                        var o = 1 - Math.abs(h / k);
                        b.obj.volume = g * (f + (1 - f) * l * o) * Q
                    }
                }
                4 == b.mode && b.sa == n && (Math.abs(h) < b.f && Math.abs(e) < b.r ? b.G || (b.G = m, b.obj.play()) : b.G = u);
                5 == b.mode && (h = 180 * Math.acos(a.M(b.N)) / Math.PI, h < b.f ? b.obj.volume = b.b * Q : (h -= b.f, h < k && 0 < k ? (o = 1 - Math.abs(h / k), b.obj.volume = b.b * (f + (1 - f) * o) * Q) : b.obj.volume = f * Q));
                6 == b.mode && (h = 180 * Math.acos(a.M(b.N)) / Math.PI, Math.abs(h) < b.f ? b.G || (b.G = m, b.obj.play()) : b.G = u)
            }
        d.dirty &&
            (d.dirty = u, d.updatePanorama())
    }

    function Fa(a) {
        d.skinObj && d.skinObj.hotspotProxyClick && d.skinObj.hotspotProxyClick(a.id);
        "" != a.url && (d.openUrl(a.url, a.target), za(-1, -1))
    }

    function wa() {
        d.isFullscreen && !document.webkitIsFullScreen && !document.mozFullScreen && !document.fullScreen && d.exitFullscreen()
    }

    function Ga() {
        Pa = 0
    }

    function Ha() {
        Pa = 0;
        I()
    }

    function Ia(a) {
        vb || (Pa = a.keyCode, I())
    }

    function bb(a) {
        S || (a.preventDefault(), I())
    }

    function cb(a) {
        S || (a.preventDefault(), pb = m, V = wb / Math.sqrt(event.scale), V > ja && (V = ja),
            V < ka && (V = ka), d.dirty = m, I())
    }

    function db(a) {
        Qb = m;
        S || (a.preventDefault(), wb = t, I())
    }

    function eb(a) {
        S || (a.preventDefault(), O = -2)
    }

    function Ja(a) {
        if (!S) {
            a.preventDefault();
            0 <= O && I();
            var c = (new Date).getTime(),
                a = -1,
                b, h, e = m,
                a = Math.abs(qc - jb) + Math.abs(rc - kb);
            if (0 <= a && 20 > a) {
                b = Rb(d.mouse.x, d.mouse.y);
                if (d.d) {
                    a = d.d;
                    for (h = u; a && a != d.control;) a.onclick && !h && (a.onclick(), h = m, e = u), a = a.parentNode
                }
                a = Math.abs(sc - jb) + Math.abs(tc - kb);
                if (700 > c - d.C && 0 <= a && 20 > a) {
                    d.d == d.control && Sb && setTimeout(function () {
                            d.toggleFullscreen()
                        },
                        1);
                    if (d.d) {
                        a = d.d;
                        for (h = u; a && a != d.control;) a.ondblclick && !h && (a.ondblclick(), h = m, e = u), a = a.parentNode
                    }
                    d.C = 0
                } else d.C = c;
                sc = jb;
                tc = kb
            }
            if (d.d) {
                a = d.d;
                for (h = u; a && a != d.control;) {
                    if (a.onmouseout) a.onmouseout();
                    a.onmouseup && !h && (a.onmouseup(), h = m);
                    a = a.parentNode
                }
            }
            d.d = n;
            O = -11;
            b && e && Fa(b)
        }
    }

    function Ka(a) {
        a || (a = window.event);
        var c = a.touches,
            b = xb();
        d.mouse.x = c[0].pageX - b.x;
        d.mouse.y = c[0].pageY - b.y;
        if (!S) {
            a.preventDefault();
            c[0] && (jb = c[0].pageX, kb = c[0].pageY);
            if (0 <= O) {
                a.preventDefault();
                for (a = 0; a < c.length; a++)
                    if (c[a].identifier ==
                        O) {
                        uc(c[a].pageX, c[a].pageY);
                        break
                    }
                I()
            }
            2 == c.length && c[0] && c[1] && (O = -6, Qb || (vc = Math.sqrt((c[0].pageX - c[1].pageX) * (c[0].pageX - c[1].pageX) + (c[0].pageY - c[1].pageY) * (c[0].pageY - c[1].pageY)), pb = m, V = wb * Math.sqrt(wc / vc), V > ja && (V = ja), V < ka && (V = ka), I()))
        }
    }

    function La(a) {
        a || (a = window.event);
        var c = a.touches,
            b = xb();
        d.mouse.x = c[0].pageX - b.x;
        d.mouse.y = c[0].pageY - b.y;
        if (!S) {
            a.preventDefault();
            if (0 > O && c[0] && (Tb = (new Date).getTime(), qc = c[0].pageX, rc = c[0].pageY, jb = c[0].pageX, kb = c[0].pageY, d.d = c[0].target, c[0].target ==
                d.control && (a = c[0].pageX, b = c[0].pageY, Ub = a, Vb = b, pa = a, qa = b, fb = a, gb = b, O = c[0].identifier, I()), d.d)) {
                a = d.d;
                for (flag = u; a && a != d.control;) {
                    if (a.onmouseover) a.onmouseover();
                    a.onmousedown && !flag && (a.onmousedown(), flag = m);
                    a = a.parentNode
                }
            }
            1 < c.length && (O = -5);
            !Qb && 2 == c.length && c[0] && c[1] && (wc = Math.sqrt((c[0].pageX - c[1].pageX) * (c[0].pageX - c[1].pageX) + (c[0].pageY - c[1].pageY) * (c[0].pageY - c[1].pageY)), wb = t);
            Oa = Na = 0
        }
    }

    function oa(a) {
        if (!Wb) {
            var a = a ? a : window.event,
                c = a.detail ? -1 * a.detail : a.wheelDelta / 40;
            xc && (c = -c);
            d.changeFovLog((0 <
                c ? 1 : -1) * yc, m);
            d.dirty = m;
            a.preventDefault();
            I()
        }
    }

    function xa(a) {
        a = a ? a : window.event;
        if (!S && (a.preventDefault(), 0 <= O)) {
            O = -3;
            Oa = Na = 0;
            var a = (new Date).getTime(),
                c = -1,
                c = Math.abs(Ub - pa) + Math.abs(Vb - qa);
            400 > a - Tb && 0 <= c && 20 > c && ((c = Rb(d.mouse.x, d.mouse.y)) && Fa(c), c = Math.abs(zc - pa) + Math.abs(Ac - qa), 700 > a - d.C && 0 <= c && 20 > c ? (Sb && setTimeout(function () {
                d.toggleFullscreen()
            }, 10), d.C = 0) : d.C = a, zc = pa, Ac = qa);
            I()
        }
    }

    function ya(a) {
        var a = a ? a : window.event,
            c = xb();
        d.mouse.x = a.pageX - c.x;
        d.mouse.y = a.pageY - c.y;
        if (!S && (a.preventDefault(),
            0 <= O && ((a.which || 0 == a.which || 1 == a.which) && uc(a.pageX, a.pageY), I()), d.hotspot == d.emptyHotspot || "poly" == d.hotspot.type)) {
            var b = Rb(d.mouse.x, d.mouse.y);
            d.hotspot != b && (d.hotspot != d.emptyHotspot && (0 < R && (d.hotspot.k = 0), d.skinObj && d.skinObj.hotspotProxyOut && d.skinObj.hotspotProxyOut(d.hotspot.id)), b ? (d.hotspot = b, d.skinObj && d.skinObj.hotspotProxyOver && d.skinObj.hotspotProxyOver(d.hotspot.id), D.style.cursor = "pointer", 0 < R && (ia = 1, d.hotspot.k = 1)) : (d.hotspot = d.emptyHotspot, D.style.cursor = "auto", 0 < R && (ia = 0)));
            za(a.pageX - c.x, a.pageY - c.y)
        }
    }

    function za(a, c) {
        var b = yb;
        b.enabled && (d.hotspot != d.emptyHotspot && 0 <= a && 0 <= c && "" != d.hotspot.title ? (J.innerHTML = d.hotspot.title, J.style.color = sa(b.W, b.V), J.style.backgroundColor = b.background ? sa(b.t, b.s) : "transparent", J.style.border = "solid " + sa(b.v, b.u) + " " + b.P + "px", J.style.borderRadius = b.O + "px", J.style.textAlign = "center", 0 < b.width ? (J.style.left = a - b.width / 2 + "px", J.style.width = b.width + "px") : (J.style.width = "auto", J.style.left = a - J.offsetWidth / 2 + "px"), J.style.height = 0 < b.height ?
            b.height + "px" : "auto", J.style.top = c + 25 + "px", J.style.visibility = "inherit", J.style.overflow = "hidden") : (J.style.visibility = "hidden", J.innerHTML = ""))
    }

    function Bc(a) {
        if (!S) {
            a = a ? a : window.event;
            a.preventDefault();
            if ((a.which || 0 == a.which || 1 == a.which) && a.target == d.control) {
                var c = a.pageX,
                    a = a.pageY;
                Ub = c;
                Vb = a;
                pa = c;
                qa = a;
                fb = c;
                gb = a;
                O = 1;
                Tb = (new Date).getTime();
                I()
            }
            Oa = Na = 0
        }
    }

    function I() {
        ca && (ca = u, H = K = B = 0);
        hb && (hb = u, H = K = B = 0);
        Mb = (new Date).getTime()
    }

    function uc(a, c) {
        Xb = a;
        Yb = c;
        Na = Xb - pa;
        Oa = Yb - qa;
        Aa && (pa = Xb, qa = Yb)
    }

    function Hb(a,
        c) {
        var b = d.getVFov();
        q += a * b / z;
        p += c * b / z;
        zb()
    }

    function Cc(a) {
        Zb = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, Zb);
        vertices = [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1];
        for (i = 0; 12 > i; i++) 2 > i % 3 && (vertices[i] *= a);
        e.bufferData(e.ARRAY_BUFFER, new Float32Array(vertices), e.STATIC_DRAW);
        $b = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, $b);
        e.bufferData(e.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 0, 1, 1, 1]), e.STATIC_DRAW);
        ac = e.createBuffer();
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, ac);
        e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array([0,
            1, 2, 0, 2, 3
        ]), e.STATIC_DRAW)
    }

    function Dc() {
        var a, c;
        if (X)
            for (; 0 < X.length;) e.deleteTexture(X.pop());
        X = [];
        for (var b = 0; 6 > b; b++) c = e.createTexture(), c.L = n, c.K = n, c.Z = u, a = new Image, a.crossOrigin = "anonymous", a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYBgeACDAAADIAAE3iTbkAAAAAElFTkSuQmCC", c.ta = a, a.addEventListener && a.addEventListener("load", Ab(c), u), ta[b] && (a = new Image, a.crossOrigin = "anonymous", a.src = Z(ta[b]), c.L = a,
            a.addEventListener && a.addEventListener("load", Ab(c), u), d.checkLoaded.push(a)), X.push(c);
        for (b = 0; 6 > b; b++) Wa[b] && (a = new Image, a.crossOrigin = "anonymous", a.src = Z(Wa[b]), a.addEventListener ? a.addEventListener("load", Ab(X[b]), u) : a.onload = Ab(X[b]), X[b].K = a, d.checkLoaded.push(a));
        for (b = 0; b < y.length; b++) y[b].va = e.createTexture()
    }

    function Z(a) {
        return a ? "/" == a.charAt(0) || 0 < a.indexOf("://") ? a : Xa + a : Xa
    }

    function Ab(a) {
        return function () {
            try {
                e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, m);
                var c = u;
                a.K != n && a.K.complete ? (e.bindTexture(e.TEXTURE_2D,
                    a), a.Z || (e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, a.K), c = a.Z = m)) : a.L != n && a.L.complete && (e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, a.L), c = m);
                c && (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE));
                e.bindTexture(e.TEXTURE_2D, n)
            } catch (b) {}
            d.dirty = m
        }
    }

    function Eb() {
        var a = Math.round(d.Q()),
            c;
        for (c = 0; c < y.length + Ma.length; c++) {
            var b;
            b = c < y.length ? y[c] : Ma[c - y.length];
            Ec(a);
            var h = "",
                h = h + ("translate3d(0px,0px," + a + "px) "),
                h = h + ("rotateX(" + p + "deg) "),
                h = h + ("rotateY(" + -q + "deg) "),
                h = h + ("rotateY(" + b.pan + "deg) "),
                h = h + ("rotateX(" + -b.tilt + "deg) "),
                e = 1E4,
                f = b.obj.videoWidth,
                k = b.obj.videoHeight;
            if (0 == f || 0 == k) f = 640, k = 480;
            0 < b.n && (f = b.n);
            0 < b.m && (k = b.m);
            0 < f && 0 < k && (b.obj.width = f + "px", b.obj.ma = k + "px", b.obj.style.width = f + "px", b.obj.style.ma = k + "px");
            0 < b.B && (e = f / (2 * Math.tan(b.B / 2 * Math.PI / 180)));
            h += "translate3d(0px,0px," + -e + "px) ";
            h += "rotateZ(" + b.F + "deg) ";
            h += "rotateY(" + -b.j + "deg) ";
            h += "rotateX(" + b.i + "deg) ";
            b.J && 1 != b.J && (h += "scaleY(" + b.J + ") ");
            h += "translate3d(" + -f / 2 + "px," + -k / 2 + "px,0px) ";
            b.obj.style[T + "Origin"] = "0% 0%";
            b.l && (h = "", 1 == b.g && (e = Math.min(A / f, z / k), h += "scale(" + e + ") "), h += "translate3d(" + -f / 2 + "px," + -k / 2 + "px,0px) ");
            b.ka != h && (b.ka = h, b.obj.style[T] = h, b.obj.style.left = ga + A / 2 + "px", b.obj.style.top = ha + z / 2 + "px", b.obj.style.visibility = "visible", b.I && b.ja == b.l && (b.obj.style[fa] = "all 0.05s linear 0s"), b.ja = b.l)
        }
    }

    function zb() {
        var a,
            c;
        t < ka && (t = ka);
        t > ja && (t = ja);
        c = d.getVFov() / 2;
        a = 180 * Math.atan(A / z * Math.tan(c * Math.PI / 180)) / Math.PI;
        2 * c > ua - va && (c = (ua - va) / 2);
        d.setVFov(2 * c);
        90 > ua ? p + c > ua && (p = ua - c) : p > ua && (p = ua); - 90 < va ? p - c < va && (p = va + c) : p < va && (p = va);
        if (359.99 > Ra - Sa) {
            var b = 0;
            if (0 != p) {
                var h, e = z / 2;
                h = e * Math.tan(c * Math.PI / 180);
                e /= Math.tan(Math.abs(p) * Math.PI / 180);
                e -= h;
                0 < e && (b = 180 * Math.atan(1 / (e / h)) / Math.PI, b = b * (Ra - Sa) / 360)
            }
            q + (a + b) > Ra && (q = Ra - (a + b), ca && (ra = -ra, B = 0));
            q - (a + b) < Sa && (q = Sa + (a + b), ca && (ra = -ra, B = 0));
            90 < p + c && (p = 90 - c); - 90 > p - c && (p = -90 + c)
        }
    }

    function Rb(a, c) {
        for (var b = -1, d = 0; d < G.length; d++) {
            var e = G[d];
            if ("poly" == e.type && e.p && 0 < e.p.length) {
                var f, k, g = u;
                for (f = 0, k = e.p.length - 1; f < e.p.length; k = f++) {
                    var l = e.p[f];
                    k = e.p[k];
                    l.q > c != k.q > c && a < (k.D - l.D) * (c - l.q) / (k.q - l.q) + l.D && (g = !g)
                }
                g && (b = d)
            }
        }
        return 0 <= b ? G[b] : u
    }

    function sa(a, c) {
        a = Number(a);
        return "rgba(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + "," + c + ")"
    }

    function Ec(a) {
        d.oa != a && (d.oa = a, D.style[lb] = a + "px", D.style[lb + "Origin"] = ga + A / 2 + "px " + (ha + z / 2) + "px ")
    }

    function mb(a, c) {
        if (0 == a.length) return a;
        var b,
            d, e, f, k, g, l, o = [];
        b = c.M(a[0]) - 0;
        for (f = 0; f < a.length; f++) {
            g = f;
            l = f + 1;
            l == a.length && (l = 0);
            d = c.M(a[l]) - 0;
            if (0 <= b && 0 <= d) o.push(a[g]);
            else if (0 <= b || 0 <= d) e = d / (d - b), 0 > e && (e = 0), 1 < e && (e = 1), k = new da, k.na(a[g], a[l], e), 0 > b || o.push(a[g]), o.push(k);
            b = d
        }
        return o
    }

    function xb() {
        var a = {
            x: 0,
            y: 0
        }, c = F;
        if (c.offsetParent) {
            do a.x += c.offsetLeft, a.y += c.offsetTop; while (c = c.offsetParent)
        }
        return a
    }

    function Ca() {
        d.setViewerSize(d.A.offsetWidth, d.A.offsetHeight)
    }

    function $(a) {
        if (debug = document.getElementById("debug")) debug.innerHTML =
            a + "<br />";
        window.console && window.console.log(a)
    }
    var yb, R, W, ia, bc, cc, dc, ec, fc;

    function Nc(a) {
        var c = "",
            b, d, e = "",
            f, k = "",
            g = 0,
            a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(g++)), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(g++)), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(g++)), k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(g++)),
        b = b << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | k, c += String.fromCharCode(b), 64 != f && (c += String.fromCharCode(d)), 64 != k && (c += String.fromCharCode(e));
        while (g < a.length);
        return c
    }

    function Pc(a, c) {
        var b = this;
        b.qa = a;
        b.hotspot = c;
        b.__div = document.createElement("div");
        b.R = document.createElement("img");
        var d;
        b.R.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5xJREFUeNqclmlIVFEUx997TjrplFQW2WKBBSYtRFlpWUILSSsRZRQIBdGHCFqIoKIvQRsUFRJC9LEgaSFbMMpcWi1pLzOLsjItKms0U5t5/c/wH7nc5o2jF374xrv87z33nHOPaRsRtbFgDpgJxoD+wATfwDNQDK6CyrCr5OcbhgiGIRsUAZt4QTWoIFXgp9JfAhY7rgdBl8NeBoLDYBloA+dBOagFTcDHcVEgDgwBGWA+OAcugvXgvb5wKMGJoAAMp9BpUA96EBf/Btsf8BI8AWfAErAcpHHDZeriliY2AVwDg8AucAQ0Ag+I4XhTm2Oxz8PT46KMbTx5EZjuJDgAnAVusJUm9DhYwalFcc59sIXXIaceFkowDySBPTRPL20xm+b7zYXa+N3CPrWJ6GuwGySA40HLBHc/GywFhbS5R1lEBrZy7FQwiSaX9pmnqeAYt+KUcew7BVZw/QKTq0ocpYPVvDOXItZCk2xgDIZqL8BR8Ab0VDbr4yZOgLeIwzQx6WiQxcCt1+6sld66L4yYtFSwF4yg2dU7/cEwGW9YVkAwmycp1dzdpvgm0DcCh4kHmxWzBls0uBX4qqmZJ4KzePm1IeJLgjmlC16aDKZpp5Q168B3o6wsSwTHgU+MIUs74RSj6y1d+212HKimJlUE+tFRfJpYtOKNXWmJTASqWf2Bu/R6+4TKHOrOzG4IhptjWgHbGkZvepQ6SQK7oRuCXzjX1DJavBEX1ygfT8FgBqpfm1zRDcEKbR2bsZlkJCdXieB1ZhZ5YtqVgXIPN+m9kbY6hpdb+d9fPncJRmZmqQheZkemJmgxyxykl3XWJEkcAl7N21s7PDcl5ZJ0PAa3wVwmWtVbZafPwQ7wLozYB7ATPNJO56d/LAikP9u+66KNJS1d4IOZp7wU0hfLukUyzgwm70T2N/DOxIy/eFdqawa5DL2NEGwP5k15Ja4woz9glvcomd9NzyvkFcQo5gomaLfm5c0svnKZ2k7q7+FauvR2MJKZR3+sY5WgtvkdG6JyELGhNHMTXyGfLviRJ5Tcd4Dlhle7086Sgp8CqVxDkn4OqHaqacr5ekjy3Q/W0FRNNGmoMtamdzdxsytZC0lqXKhEgWPVVgImg2NgFT1MHOoOk3yLEtgWN5TEOYvoIFI1rGM19//2wpAD7imF7lfwENwAxaASNCj90pcLLKdC2Iyw1M9gnEplMEp5kOU1f8WwKGJm8oUr9f8JMAAVMDM6HSDa9QAAAABJRU5ErkJggg%3D%3D");
        b.R.setAttribute("style", "position: absolute;top: -14px;left: -14px;");
        b.__div.appendChild(b.R);
        d = "position:absolute;" + (N + "user-select: none;");
        b.__div.setAttribute("style", d);
        b.__div.onclick = function () {
            b.qa.openUrl(c.url, c.target)
        };
        var e = yb;
        e.enabled && (b.text = document.createElement("div"), d = "position:absolute;" + ("left: -" + c.w / 2 + "px;"), d = d + "top:  20px;" + ("width: " + c.w + "px;"), d = 0 == c.h ? d + "height: auto;" : d + ("height: " + c.h + "px;"), c.wordwrap ? d = d + "white-space: pre-wrap;" + ("width: " + c.w + "px;") : (d = 0 == c.h ?
                d + "width: auto;" : d + ("width: " + c.w + "px;"), d += "white-space: nowrap;"), d += N + "transform-origin: 50% 50%;", b.text.setAttribute("style", d + "visibility: hidden;border: 1px solid #000000;background-color: #ffffff;text-align: center;overflow: hidden;padding: 0px 1px 0px 1px;"), b.text.style.color = sa(e.W, e.V), b.text.style.backgroundColor = e.background ? sa(e.t, e.s) : "transparent", b.text.style.border = "solid " + sa(e.v, e.u) + " " + e.P + "px", b.text.style.borderRadius = e.O + "px", b.text.style.textAlign = "center", b.text.style.width =
            0 < e.width ? e.width + "px" : "auto", b.text.style.height = 0 < e.height ? e.height + "px" : "auto", b.text.style.overflow = "hidden", b.text.innerHTML = c.title, b.__div.onmouseover = function () {
                0 == c.h && (w = b.text.offsetWidth, b.text.style.left = -w / 2 + "px");
                b.text.style.visibility = "inherit"
            }, b.__div.onmouseout = function () {
                b.text.style.visibility = "hidden"
            }, b.__div.appendChild(b.text))
    }
    var d = this;
    d.transitionsDisabled = u;
    var q = 0,
        gc = 0,
        Sa = 0,
        Ra = 360,
        B = 0,
        Fc = 0,
        p = 0,
        hc = 0,
        va = -90,
        ua = 90,
        K = 0,
        t = 90,
        tb = 90,
        ka = 1,
        ja = 170,
        wb = 0,
        H = 0,
        ic = 0,
        wc, vc, A = 320,
        z =
            480,
        Ub = 0,
        Vb = 0,
        pa = 0,
        qa = 0,
        zc = 0,
        Ac = 0,
        Xb = 0,
        Yb = 0,
        Na = 0,
        Oa = 0,
        O = -1,
        qc = 0,
        rc = 0,
        jb = 0,
        kb = 0,
        sc = 0,
        tc = 0,
        Tb, Ib = m,
        fb = 0,
        gb = 0,
        aa = 0,
        ba = 0,
        pb = u,
        V = 0,
        Pa = 0,
        F = n,
        la = n,
        C = n,
        ma = n,
        ea = n,
        D = n,
        Y = n;
    d.control = n;
    d.cubeFaces = [];
    d.cubeFacesOverlay = [];
    d.checkLoaded = [];
    d.isFullscreen = u;
    d.dirty = u;
    d.divSkin = n;
    d.isLoaded = u;
    d.hasConfig = u;
    d.startNode = "";
    d.onMoveComplete = n;
    var qb = 0,
        Wa = [],
        jc = [],
        ta = [],
        nb = 1,
        Ya = 1,
        Qa = u,
        ib = u,
        Ob = 5,
        ca = u,
        ra = 0.4,
        sb = 0,
        Nb = 0,
        Ta, hb = u,
        rb = 0.1,
        Jb = 0,
        Kb = 0,
        Lb, Mb;
    d.skinObj = n;
    d.userdata = {};
    d.userdata.title = "";
    d.userdata.description =
        "";
    d.userdata.author = "";
    d.userdata.datetime = "";
    d.userdata.copyright = "";
    d.userdata.source = "";
    d.userdata.information = "";
    d.userdata.comment = "";
    d.userdata.tags = [];
    var G = [];
    d.emptyHotspot = {
        pan: 0,
        tilt: 0,
        title: "",
        url: "",
        target: "",
        id: "",
        skinid: "",
        w: 100,
        h: 20,
        wordwrap: u,
        obj: n,
        type: "empty"
    };
    var r = [],
        y = [],
        Ma = [],
        Za = [],
        Ua = [],
        Q = 1,
        Ba = 0,
        Va = 0.01,
        pc = 2,
        Pb = 0,
        ub = u,
        oc = u,
        ga = 0,
        ha = 0,
        Fb = 0,
        Gb = 0,
        vb = u,
        S = u,
        Wb = u,
        Aa = m,
        xc = u,
        yc = 1,
        Sb = m;
    R = 1;
    W = 0;
    ia = 0;
    bc = 255;
    cc = 1;
    dc = 255;
    ec = 0.3;
    yb = {
        enabled: m,
        width: 180,
        height: 20,
        W: 0,
        V: 1,
        background: m,
        t: 16777215,
        s: 1,
        v: 0,
        u: 1,
        O: 3,
        P: 1,
        wordwrap: m
    };
    fc = void 0;
    d.hotspot = d.emptyHotspot;
    var J = n;
    d.mouse = {
        x: 0,
        y: 0
    };
    var $a = u,
        Bb = u,
        Gc = u,
        Hc = m,
        Qb = u,
        Xa = "",
        N = "",
        fa = "transition",
        T = "transform",
        lb = "perspective",
        e, Ic = new da,
        Jc = new da,
        Kc = new da,
        Lc = new da,
        Mc = new da;
    d.S = u;
    var nc = "",
        Oc = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
                window.setTimeout(a, 10)
            }
        }();
    d.detectBrowser = function () {
        var a = ["Webkit", "Moz", "O", "ms", "Ms"],
            c;
        N = "";
        fa = "transition";
        T = "transform";
        lb = "perspective";
        for (c = 0; c < a.length; c++) "undefined" !== typeof document.documentElement.style[a[c] + "Transform"] && (N = "-" + a[c].toLowerCase() + "-", fa = a[c] + "Transition", T = a[c] + "Transform", lb = a[c] + "Perspective");
        Gc = lc();
        $a = mc();
        $((Gc ? "CSS 3D available" : "CSS 3D not available") + ", " + ($a ? "WebGL available" : "WebGL not available"))
    };
    d.getPercentLoaded = function () {
        return qb
    };
    d.setBasePath = function (a) {
        Xa = a
    };
    d.Q = function () {
        return 1 * z / (2 * Math.tan(Math.PI /
            180 * (d.getVFov() / 2)))
    };
    d.setViewerSize = function (a, c) {
        d.isFullscreen && (a = window.innerWidth, c = window.innerHeight);
        var b = a - ga - Fb,
            h = c - ha - Gb;
        F.style.width = b + "px";
        F.style.height = h + "px";
        F.style.left = ga + "px";
        F.style.top = ha + "px";
        if ($a) try {
            la && (la.width = b, la.height = h), e && (e.ea = b, e.da = h, e.viewport(0, 0, b, h))
        } catch (g) {
            alert(g)
        }
        D.style.width = a + "px";
        D.style.height = c + "px";
        Y.style.width = a + "px";
        Y.style.height = c + "px";
        Y.width = a;
        Y.height = c;
        d.updatePanorama();
        d.divSkin && d.divSkin.ggUpdateSize && d.divSkin.ggUpdateSize(a,
            c)
    };
    d.setMargins = function (a, c, b, d) {
        ga = a;
        ha = c;
        Fb = b;
        Gb = d;
        Ca()
    };
    d.changeViewMode = function (a) {
        0 == a && (Aa = u);
        1 == a && (Aa = m);
        2 == a && (Aa = Aa ? u : m)
    };
    var P;
    d.getVFov = function () {
        var a;
        switch (ic) {
        case 0:
            a = t / 2;
            break;
        case 1:
            a = 180 * Math.atan(z / A * Math.tan(t / 2 * Math.PI / 180)) / Math.PI;
            break;
        case 2:
            a = 180 * Math.atan(z / Math.sqrt(A * A + z * z) * Math.tan(t / 2 * Math.PI / 180)) / Math.PI;
            break;
        case 3:
            a = 4 * z / 3 > A ? t / 2 : 180 * Math.atan(4 * z / (3 * A) * Math.tan(t / 2 * Math.PI / 180)) / Math.PI
        }
        return 2 * a
    };
    d.setVFov = function (a) {
        var a = a / 2,
            c;
        switch (ic) {
        case 0:
            t = 2 * a;
            break;
        case 1:
            a = 180 * Math.atan(A / z * Math.tan(a * Math.PI / 180)) / Math.PI;
            t = 2 * a;
            break;
        case 2:
            c = Math.sqrt(A * A + z * z);
            a = 180 * Math.atan(c / z * Math.tan(a * Math.PI / 180)) / Math.PI;
            t = 2 * a;
            break;
        case 3:
            4 * z / 3 > A || (a = 180 * Math.atan(3 * A / (4 * z) * Math.tan(a * Math.PI / 180)) / Math.PI), t = 2 * a
        }
    };
    d.updatePanorama = function () {
        var a = new da(0, 0, -100),
            c = d.Q(),
            b = Math.atan2(A / 2 + 1, c),
            h = Math.atan2(z / 2 + 1, c),
            g = Math.sin(b),
            f = Math.sin(h),
            b = Math.cos(b),
            h = Math.cos(h);
        Ic.o(0, 0, -1);
        Jc.o(b, 0, -g);
        Kc.o(-b, 0, -g);
        Lc.o(0, h, -f);
        Mc.o(0, -h, -f);
        for (g = 0; g < G.length; g++) {
            var f =
                G[g],
                k;
            "point" == f.type && (a.o(0, 0, -100), a.i(-f.tilt * Math.PI / 180), a.j(f.pan * Math.PI / 180), a.j(-q * Math.PI / 180), a.i(p * Math.PI / 180), b = u, 0.1 > a.a ? (k = -c / a.a, h = a.x * k, k *= a.y, Math.abs(h) < A / 2 + 500 && Math.abs(k) < z / 2 + 500 && (b = m)) : k = h = 0, f.obj && f.obj.__div && (f.obj.__div.style[fa] = "none", f.obj.ggUse3d ? b ? (Ec(c), f.obj.__div.style.width = "1px", f.obj.__div.style.height = "1px", hs = "", hs += "translate3d(0px,0px," + c + "px) ", hs += "rotateX(" + p + "deg) ", hs += "rotateY(" + -q + "deg) ", hs += "rotateY(" + f.pan + "deg) ", hs += "rotateX(" + -f.tilt + "deg) ",
                hs += "translate3d(0px,0px," + -1 * f.obj.gg3dDistance + "px) ", f.obj.__div.style[T + "Origin"] = "0% 0%", f.obj.__div.style[T] = hs, f.obj.__div.style.left = ga + A / 2 + "px", f.obj.__div.style.top = ha + z / 2 + "px", f.obj.__div.style.visibility = "visible") : (f.obj.__div.style[T] = "", f.obj.__div.style.visibility = "hidden") : b ? (f.obj.__div.style.left = ga + h + A / 2 + "px", f.obj.__div.style.top = ha + k + z / 2 + "px", f.obj.__div.style[T] = "") : (f.obj.__div.style.left = "-100px", f.obj.__div.style.top = "-100px", f.obj.__div.style[T] = "scale(0,0)")));
            if ("poly" ==
                f.type) {
                for (var l = [], b = 0; b < f.H.length; b++) h = f.H[b], a.o(0, 0, -100), a.i(-h.tilt * Math.PI / 180), a.j(h.pan * Math.PI / 180), a.j(-q * Math.PI / 180), a.i(p * Math.PI / 180), l.push(a.ha());
                h = l;
                h = mb(h, Ic);
                h = mb(h, Jc);
                h = mb(h, Kc);
                h = mb(h, Lc);
                l = h = mb(h, Mc);
                if (0 < l.length)
                    for (b = 0; b < l.length; b++) a = l[b], 0.1 > a.a ? (k = -c / a.a, h = A / 2 + a.x * k, k = z / 2 + a.y * k) : k = h = 0, a.D = h, a.q = k;
                f.p = l
            }
        }
        if (Y && (fc != R && (fc = R, Y.style.visibility = 0 < R ? "inherit" : "hidden"), 0 < R)) {
            P || (P = Y.getContext("2d"));
            if (P.width != A || P.height != z) P.width = A, P.height = z;
            P.clear ? P.clear() :
                P.clearRect(0, 0, Y.width, Y.height);
            a = 1;
            3 == R && (a = W);
            for (c = 0; c < G.length; c++)
                if (g = G[c], "poly" == g.type && (f = g.p, 2 == R && (a = g.c), P.fillStyle = sa(g.t, g.s * a), P.strokeStyle = sa(g.v, g.u * a), 0 < f.length)) {
                    P.beginPath();
                    for (j = 0; j < f.length; j++) v = f[j], 0 == j ? P.moveTo(v.D, v.q) : P.lineTo(v.D, v.q);
                    P.closePath();
                    P.stroke();
                    P.fill()
                }
        }
        if ($a) {
            zb();
            if (A != F.offsetWidth || z != F.offsetHeight) A = parseInt(F.offsetWidth), z = parseInt(F.offsetHeight);
            Hc && (d.initWebGL(0), Ca());
            if (e) {
                e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
                ob(Cb);
                f = d.getVFov();
                c = e.ea / e.da;
                f = 0.1 * Math.tan(f * Math.PI / 360);
                c *= f;
                a = -c;
                g = -f;
                (h = Cb) || (h = new glMatrixArrayType(16));
                b = c - a;
                l = f - g;
                h[0] = 0.2 / b;
                h[1] = 0;
                h[2] = 0;
                h[3] = 0;
                h[4] = 0;
                h[5] = 0.2 / l;
                h[6] = 0;
                h[7] = 0;
                h[8] = (c + a) / b;
                h[9] = (f + g) / l;
                h[10] = -100.1 / 99.9;
                h[11] = -1;
                h[12] = 0;
                h[13] = 0;
                h[14] = -20 / 99.9;
                h[15] = 0;
                e.uniformMatrix4fv(E.aa, u, Cb);
                for (v = 0; 6 > v; v++) ob(ab), kc(ab, -p * Math.PI / 180, [1, 0, 0]), kc(ab, (180 - q) * Math.PI / 180, [0, 1, 0]), 4 > v ? kc(ab, -Math.PI / 2 * v, [0, 1, 0]) : kc(ab, Math.PI / 2 * (5 == v ? 1 : -1), [1, 0, 0]), e.bindBuffer(e.ARRAY_BUFFER, Zb), e.vertexAttribPointer(E.ca,
                    3, e.FLOAT, u, 0, 0), e.bindBuffer(e.ARRAY_BUFFER, $b), e.vertexAttribPointer(E.ba, 2, e.FLOAT, u, 0, 0), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, X[v]), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, ac), e.uniform1i(E.ra, 0), e.uniformMatrix4fv(E.pa, u, ab), e.uniformMatrix4fv(E.aa, u, Cb), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0)
            }
        } else {
            zb();
            c = u;
            if (A != F.offsetWidth || z != F.offsetHeight) A = parseInt(F.offsetWidth), z = parseInt(F.offsetHeight), F.style[T + "OriginX"] = A / 2 + "px", F.style[T + "OriginY"] = z / 2 + "px", c = m;
            a = Math.round(d.Q());
            if (d.T != a || c) d.T = a, F.style[lb] = a + "px";
            if (ea && ma) ea.style[T] = "translate3d(" + A / 2 + "px," + z / 2 + "px," + a + "px)", ma.style[T] = "rotateX(" + Number(p).toFixed(10) + "deg)  rotateY(" + Number(-q).toFixed(10) + "deg)";
            else
                for (c = 0; 6 > c; c++)
                    if (g = d.cubeFaces[c]) f = "translate3d(" + A / 2 + "px," + z / 2 + "px," + a + "px) ", f += "rotateX(" + Number(p).toFixed(10) + "deg)  rotateY(" + Number(-q).toFixed(10) + "deg) ", g.Y && (f += g.Y, g.style.transform = f)
        }
        Eb()
    };
    var E;
    d.initWebGL = function (a) {
        Hc = u;
        try {
            if (la = a ? a : document.createElement("canvas"), la.width = 100,
                la.height = 100, F.appendChild(la), (e = la.getContext("webgl")) || (e = la.getContext("experimental-webgl")), e) {
                e.ea = 500;
                e.da = 500;
                e.clearColor(0, 0, 0, 0);
                e.enable(e.DEPTH_TEST);
                e.viewport(0, 0, 500, 500);
                e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
                e.enable(e.TEXTURE_2D);
                var c = e.createShader(e.FRAGMENT_SHADER);
                hs = "#ifdef GL_ES\n";
                hs += "precision highp float;\n";
                hs += "#endif\n";
                hs += "varying vec2 vTextureCoord;\n";
                hs += "uniform sampler2D uSampler;\n";
                hs += "void main(void) {\n";
                hs += "    gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n";
                hs += "}\n";
                e.shaderSource(c, hs);
                e.compileShader(c);
                e.getShaderParameter(c, e.COMPILE_STATUS) || (alert(e.getShaderInfoLog(c)), c = n);
                var b = e.createShader(e.VERTEX_SHADER);
                hs = "attribute vec3 aVertexPosition;\n";
                hs += "attribute vec2 aTextureCoord;\n";
                hs += "uniform mat4 uMVMatrix;\n";
                hs += "uniform mat4 uPMatrix;\n";
                hs += "varying vec2 vTextureCoord;\n";
                hs += "void main(void) {\n";
                hs += "    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n";
                hs += "    vTextureCoord = aTextureCoord;\n";
                hs += "}\n";
                e.shaderSource(b,
                    hs);
                e.compileShader(b);
                e.getShaderParameter(b, e.COMPILE_STATUS) || (alert(e.getShaderInfoLog(b)), b = n);
                E = e.createProgram();
                e.attachShader(E, b);
                e.attachShader(E, c);
                e.linkProgram(E);
                e.getProgramParameter(E, e.LINK_STATUS) || alert("Could not initialise shaders");
                e.useProgram(E);
                E.ca = e.getAttribLocation(E, "aVertexPosition");
                e.enableVertexAttribArray(E.ca);
                E.ba = e.getAttribLocation(E, "aTextureCoord");
                e.enableVertexAttribArray(E.ba);
                E.aa = e.getUniformLocation(E, "uPMatrix");
                E.pa = e.getUniformLocation(E, "uMVMatrix");
                E.ra = e.getUniformLocation(E, "uSampler");
                Cc(Ya);
                Dc()
            }
        } catch (d) {
            $(d)
        }
        e ? $a = m : alert("Could not initialise WebGL!")
    };
    var X = [],
        ab = new glMatrixArrayType(16),
        Cb = new glMatrixArrayType(16),
        Zb, $b, ac;
    d.getPan = function () {
        return q
    };
    d.getPanDest = function () {
        return Jb
    };
    d.getPanN = function () {
        for (var a = q; - 180 > a;) a += 360;
        for (; 180 < a;) a -= 360;
        return a
    };
    d.getPanNorth = function () {
        for (var a = q - Fc; - 180 > a;) a += 360;
        for (; 180 < a;) a -= 360;
        return a
    };
    d.setPan = function (a) {
        I();
        isNaN(a) || (q = Number(a));
        d.dirty = m
    };
    d.changePan = function (a, c) {
        d.setPan(d.getPan() +
            a);
        c && (B = a)
    };
    d.getTilt = function () {
        return p
    };
    d.getTiltDest = function () {
        return Kb
    };
    d.setTilt = function (a) {
        I();
        isNaN(a) || (p = Number(a));
        d.dirty = m
    };
    d.changeTilt = function (a, c) {
        d.setTilt(d.getTilt() + a);
        c && (K = a)
    };
    d.getFov = function () {
        return t
    };
    d.getFovDest = function () {
        return Lb
    };
    d.setFov = function (a) {
        I();
        if (!isNaN(a) && 0 < a && 180 > a) {
            var c = t;
            t = Number(a);
            zb();
            d.dirty |= c != t
        }
    };
    d.changeFov = function (a, c) {
        d.setFov(d.getFov() + a);
        c && (H = a)
    };
    d.changeFovLog = function (a, c) {
        if (!isNaN(a)) {
            var b;
            b = a / 90 * Math.cos(t * Math.PI / 360);
            b =
                t * Math.exp(b);
            d.setFov(b);
            c && (H = a)
        }
    };
    d.setPanTilt = function (a, c) {
        I();
        isNaN(a) || (q = a);
        isNaN(c) || (p = c);
        d.dirty = m
    };
    d.setPanTiltFov = function (a, c, b) {
        I();
        isNaN(a) || (q = a);
        isNaN(c) || (p = c);
        !isNaN(b) && 0 < b && 180 > b && (t = b);
        d.dirty = m
    };
    d.setDefaultView = function () {
        d.setPanTiltFov(gc, hc, tb)
    };
    d.setLocked = function (a) {
        d.setLockedMouse(a);
        d.setLockedWheel(a);
        d.setLockedKeyboard(a)
    };
    d.setLockedMouse = function (a) {
        S = a
    };
    d.setLockedKeyboard = function (a) {
        vb = a
    };
    d.setLockedWheel = function (a) {
        Wb = a
    };
    d.moveTo = function (a, c, b, d) {
        I();
        hb =
            m;
        var e = a.toString().split("/");
        1 < e.length && (a = Number(e[0]), d = c, c = Number(e[1]), 2 < e.length && (b = Number(e[2])));
        Jb = isNaN(a) ? q : a;
        Kb = isNaN(c) ? p : c;
        Lb = !isNaN(b) && 0 < b && 180 > b ? b : t;
        rb = !isNaN(d) && 0 < d ? d : 1
    };
    d.moveToDefaultView = function (a) {
        d.moveTo(gc, hc, tb, a)
    };
    d.isTouching = function () {
        return d.d != n
    };
    I();
    d.ga = function () {
        var a;
        a = D;
        d.control = a;
        U();
        setTimeout(function () {
            Ea()
        }, 10);
        setTimeout(function () {
            Ca();
            d.updatePanorama()
        }, 10);
        a.addEventListener ? (a.addEventListener("touchstart", La, u), a.addEventListener("touchmove",
            Ka, u), a.addEventListener("touchend", Ja, u), a.addEventListener("touchcancel", eb, u), a.addEventListener("gesturestart", db, u), a.addEventListener("gesturechange", cb, u), a.addEventListener("gestureend", bb, u), a.addEventListener("mousedown", Bc, u), a.addEventListener("mousemove", ya, u), document.addEventListener("mouseup", xa, u), a.addEventListener("mousedblclick", d.toggleFullscreen, u), a.addEventListener("mousewheel", oa, u), a.addEventListener("DOMMouseScroll", oa, u), document.addEventListener("keydown", Ia, u), document.addEventListener("keyup",
            Ha, u), window.addEventListener("orientationchange", U, u), window.addEventListener("resize", Ca, u), window.addEventListener("blur", Ga, u), C.addEventListener("webkitfullscreenchange", wa, u), document.addEventListener("mozfullscreenchange", wa, u), window.addEventListener("webkitfullscreenchange", wa, u)) : a.attachEvent && (a.attachEvent("onmousedown", Bc), a.attachEvent("onmousemove", ya), document.attachEvent("onmouseup", xa), a.attachEvent("onmousedblclick", d.toggleFullscreen), a.attachEvent("onmousewheel", oa), document.attachEvent("onkeydown",
            Ia), document.attachEvent("onkeyup", Ha), window.attachEvent("onresize", Ca), window.attachEvent("onblur", Ga));
        a.oncontextmenu = function (a) {
            void 0 === a && (a = window.event);
            return !a.ctrlKey && (a = "<<U>>", "U" != a.charAt(2)) ? (Da(), u) : m
        }
    };
    d.addHotspotElements = function () {
        for (var a = 0; a < G.length; a++)
            if ("point" == G[a].type && (G[a].obj = d.skinObj && d.skinObj.addSkinHotspot ? new d.skinObj.addSkinHotspot(G[a]) : new Pc(this, G[a]), G[a].obj && G[a].obj.__div)) {
                var c = D.firstChild;
                c ? D.insertBefore(G[a].obj.__div, c) : D.appendChild(G[a].obj.__div)
            }
    };
    d.isPlaying = function (a) {
        return "_main" == a ? m : (a = l(a)) ? !a.obj.ended && !a.obj.paused : u
    };
    d.playSound = function (a, c) {
        var b = l(a);
        b && (b.obj.e = c && !isNaN(Number(c)) ? Number(c) - 1 : b.loop - 1, -1 == b.obj.e && (b.obj.e = 1E7), b.obj.play())
    };
    d.playPauseSound = function (a) {
        d.isPlaying(a) ? d.pauseSound(a) : d.playSound(a)
    };
    d.pauseSound = function (a) {
        if ("_main" == a) {
            for (a = 0; a < r.length; a++) r[a].obj.pause();
            for (a = 0; a < y.length; a++) y[a].obj.pause()
        } else(a = l(a)) && a.obj.pause()
    };
    d.stopSound = function (a) {
        if ("_main" == a) {
            for (a = 0; a < r.length; a++) r[a].obj.pause(),
            r[a].obj.currentTime = 0;
            for (a = 0; a < y.length; a++) y[a].obj.pause(), y[a].obj.currentTime = 0
        } else if (a = l(a)) a.obj.pause(), a.obj.currentTime = 0
    };
    d.setVolume = function (a, c) {
        var b = Number(c);
        1 < b && (b = 1);
        0 > b && (b = 0);
        if ("_main" == a) {
            Q = b;
            for (b = 0; b < r.length; b++) r[b].obj.volume = r[b].b * Q;
            for (b = 0; b < y.length; b++) y[b].obj.volume = y[b].b * Q
        } else {
            var d = l(a);
            d && (d.b = b, d.obj.volume = b * Q)
        }
    };
    d.changeVolume = function (a, c) {
        if ("_main" == a) {
            var b = Q,
                b = b + Number(c);
            1 < b && (b = 1);
            0 > b && (b = 0);
            Q = b;
            for (b = 0; b < r.length; b++) r[b].obj.volume = r[b].b * Q
        } else {
            var d =
                l(a);
            d && (b = d.b, b += Number(c), 1 < b && (b = 1), 0 > b && (b = 0), d.b = b, d.obj.volume = b * Q)
        }
    };
    d.removeHotspots = function () {
        for (var a; 0 < G.length;) a = G.pop(), a.obj && (D.removeChild(a.obj.__div), delete a.obj), a.obj = n
    };
    d.setFullscreen = function (a) {
        d.isFullscreen != a && (d.isFullscreen = a, d.dirty = m);
        if (d.isFullscreen) {
            try {
                C.webkitRequestFullScreen ? C.webkitRequestFullScreen() : C.mozRequestFullScreen ? C.mozRequestFullScreen() : C.requestFullScreen ? C.requestFullScreen() : C.requestFullscreen && C.requestFullscreen()
            } catch (c) {
                $(c)
            }
            C.style.position =
                "absolute";
            a = xb();
            C.style.left = window.pageXOffset - a.x + ga + "px";
            C.style.top = window.pageYOffset - a.y + ha + "px";
            document.body.style.overflow = "hidden";
            d.divSkin && d.divSkin.ggEnterFullscreen && d.divSkin.ggEnterFullscreen()
        } else {
            try {
                document.webkitIsFullScreen ? document.webkitCancelFullScreen() : document.mozFullScreen ? document.mozCancelFullScreen() : document.fullScreen && (document.cancelFullScreen ? document.cancelFullScreen() : document.exitFullscreen && document.exitFullscreen())
            } catch (b) {
                $(b)
            }
            C.style.position = "relative";
            C.style.left = "0px";
            C.style.top = "0px";
            document.body.style.overflow = "";
            d.divSkin && d.divSkin.ggExitFullscreen && d.divSkin.ggExitFullscreen()
        }
        Ca()
    };
    d.toggleFullscreen = function () {
        d.setFullscreen(!d.isFullscreen)
    };
    d.enterFullscreen = function () {
        d.setFullscreen(m)
    };
    d.exitFullscreen = function () {
        d.setFullscreen(u)
    };
    d.startAutorotate = function (a, c, b) {
        ca = ib = m;
        Ta = (new Date).getTime();
        a && 0 != a && (ra = a);
        c && (Ob = c);
        b && (sb = b)
    };
    d.stopAutorotate = function () {
        ib = ca = u
    };
    d.toggleAutorotate = function () {
        (ca = ib = !ca) && (Ta = (new Date).getTime())
    };
    d.createLayers = function (a) {
        d.A = document.getElementById(a);
        d.A ? (d.A.innerHTML = "", C = document.createElement("div"), C.setAttribute("style", "top:  0px;left: 0px;position:relative;"), d.A.appendChild(C), F = document.createElement("div"), a = "top:  0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;z-index: 0;" + (N + "user-select: none;"), F.setAttribute("style", a), C.appendChild(F), D = document.createElement("div"), a = "top:  0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;z-index: 1000;",
            0 <= navigator.userAgent.indexOf("MSIE") && (a += "background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);"), a += N + "user-select: none;", D.setAttribute("style", a), C.appendChild(D), Y = document.createElement("canvas"), a = "top:  0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;z-index: 900;" + (N + "user-select: none;"), Y.setAttribute("style", a), C.appendChild(Y), J = document.createElement("div"), J.setAttribute("style", "top:  0px;left: 0px;position:absolute;padding: 3px;visibility: hidden;z-index: 1100;"),
            J.innerHTML = " Hotspot text!", C.appendChild(J), d.divSkin = D) : alert("container not found!")
    };
    d.createCube = function () {
        var a;
        ea = document.createElement("div");
        a = "position:absolute;" + (N + "user-select: none;");
        a += N + "transform-style: preserve-3d;";
        ea.setAttribute("style", a + "z-Index: 100;");
        F.appendChild(ea);
        ma = document.createElement("div");
        a = N + "transform-style: preserve-3d;";
        a += N + "transform-origin: 0 0;";
        a = a + "position:absolute;" + (N + "user-select: none;");
        ma.setAttribute("style", a + "z-Index: 100;");
        ea.appendChild(ma);
        var c, b;
        Qa = m;
        var e = 128;
        nb > e && (e = nb);
        for (b = 0; 6 > b; b++) c = document.createElement("img"), Qa ? "" != ta[b] && c.setAttribute("src", Z(ta[b])) : c.setAttribute("src", Z(Wa[b])), a = "position:absolute;", a += "left: 0px;", a += "top: 0px;", a += "width: " + e + "px;", a += "height: " + e + "px;", a += "z-index: 100;", a += N + "transform-origin: 0 0;", a += N + "transform: ", a = 4 > b ? a + ("rotateY(" + -90 * b + "deg)") : a + ("rotateX(" + (4 == b ? -90 : 90) + "deg)"), a += " scale(" + Ya + ") translate3d(" + -e / 2 + "px," + -e / 2 + "px," + -e / 2 + "px);", c.setAttribute("style", a), ma.appendChild(c),
        d.cubeFaces.push(c), d.checkLoaded.push(c), "" != jc[b] && (c = document.createElement("img"), c.setAttribute("src", Z(jc[b])), a = "position:absolute;", a += "left: 0px;", a += "top: 0px;", a += "width: " + e / 1.1 + "px;", a += "height: " + e / 1.1 + "px;", a += "z-index: 100;", a += N + "transform-origin: 0 0;", a += N + "transform: ", a = 4 > b ? a + ("rotateY(" + -90 * b + "deg)") : a + ("rotateX(" + (4 == b ? -90 : 90) + "deg)"), a += " scale(" + Ya + ") translate3d(" + -e / 2.2 + "px," + -e / 2.2 + "px," + -e / 2.2 + "px);", c.setAttribute("style", a), c.style.opacity = 0, ma.appendChild(c), d.cubeFacesOverlay.push(c),
            d.checkLoaded.push(c))
    };
    d.ia = function () {
        var a;
        ma = ea = n;
        var c, b;
        Qa = m;
        var e = 128;
        nb > e && (e = nb);
        for (b = 0; 6 > b; b++) {
            c = document.createElement("img");
            Qa ? "" != ta[b] && c.setAttribute("src", Z(ta[b])) : c.setAttribute("src", Z(Wa[b]));
            a = "position:absolute;";
            a += "left: 0px;";
            a += "top: 0px;";
            a += "width: " + e + "px;";
            a += "height: " + e + "px;";
            a += "z-index: 100;";
            a += N + "-transform-style: preserve-3d;";
            a += N + "transform-origin: 0 0;";
            a += N + "transform: ";
            var g;
            g = "";
            g = 4 > b ? g + ("rotateY(" + -90 * b + "deg)") : g + ("rotateX(" + (4 == b ? -90 : 90) + "deg)");
            g +=
                " scale(" + Ya + ") translate3d(" + -e / 2 + "px," + -e / 2 + "px," + -e / 2 + "px)";
            a += g + ";";
            c.Y = g;
            c.setAttribute("style", a);
            F.appendChild(c);
            d.cubeFaces.push(c);
            d.checkLoaded.push(c)
        }
    };
    d.finalPanorama = function () {
        var a;
        if (Bb)
            for (a = 0; 6 > a; a++) d.cubeFaces[a].setAttribute("src", Z(Wa[a]))
    };
    d.setOverlayOpacity = function (a) {
        var c;
        if (Bb)
            for (c = 0; 6 > c; c++) d.cubeFacesOverlay[c] && d.cubeFacesOverlay[c].style && (d.cubeFacesOverlay[c].style.opacity = a)
    };
    d.removePanorama = function () {
        var a;
        if (Bb) {
            for (a = 0; a < d.cubeFaces.length; a++) d.cubeFaces[a].setAttribute("src",
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYBgeACDAAADIAAE3iTbkAAAAAElFTkSuQmCC"), d.cubeFacesOverlay[a] && d.cubeFacesOverlay[a].setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYBgeACDAAADIAAE3iTbkAAAAAElFTkSuQmCC");
            ea && F.removeChild(ea);
            ea = ma = n;
            d.cubeFaces = [];
            d.cubeFacesOverlay = []
        }
        if (e && X)
            for (; 0 < X.length;) e.deleteTexture(X.pop());
        for (a = 0; a < y.length; a++) D.removeChild(y[a].obj);
        for (a = 0; a < Ma.length; a++) D.removeChild(Ma[a].obj);
        var c = [];
        for (a = 0; a < r.length; a++) {
            var b = r[a];
            if (0 == b.mode || 1 == b.mode || b.ua) c.push(b);
            else {
                try {
                    b.obj.pause()
                } catch (h) {
                    $(h)
                }
                C.removeChild(b.obj)
            }
        }
        r = c;
        y = [];
        Ma = []
    };
    d.getScreenResolution = function () {
        var a = 1,
            c = -1 != navigator.userAgent.indexOf("Mac");
        window.devicePixelRatio && c && (a = window.devicePixelRatio);
        return {
            w: screen.width * a,
            h: screen.height * a
        }
    };
    d.getMaxScreenResolution = function () {
        var a = d.getScreenResolution();
        return a.w > a.h ? a.w : a.h
    };
    d.readConfigString = function (a) {
        window.DOMParser ? (parser = new DOMParser, xmlDoc = parser.parseFromString(a, "text/xml")) : (xmlDoc = new ActiveXObject("Microsoft.XMLDOM"), xmlDoc.async = "false", xmlDoc.loadXML(a));
        d.readConfigXml(xmlDoc)
    };
    d.readConfigUrl = function (a, c) {
        try {
            var b;
            b = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            b.open("GET", a, u);
            b.send(n);
            if (b.responseXML) {
                var e = a.lastIndexOf("/");
                0 <= e && (Xa = a.substr(0, e + 1));
                2 <= arguments.length && (Xa = c);
                d.readConfigString(b.responseText)
            } else alert("Error loading panorama XML")
        } catch (g) {
            alert("Error:" +
                g)
        }
    };
    var Db = m;
    d.readConfigXml = function (a) {
        var c = a.firstChild;
        Za = [];
        Ua = [];
        if ("tour" == c.nodeName) {
            var a = "",
                b;
            (b = c.getAttributeNode("start")) && (a = b.nodeValue.toString());
            "" != d.startNode && (a = d.startNode, d.startNode = "");
            for (c = c.firstChild; c;) {
                b = "";
                if ("panorama" == c.nodeName && (b = c.getAttributeNode("id"))) b = b.nodeValue.toString(), "" == a && (a = b), Za[b] = c, Ua.push(b);
                c = c.nextSibling
            }
            d.U(Za[a]);
            o("{" + a + "}");
            d.S = m
        } else d.S = u, d.U(c), o("")
    };
    d.U = function (a) {
        d.removeHotspots();
        d.removePanorama();
        d.T = 0;
        for (var a = a.firstChild,
                c, b, h, g = 1E6; a;) {
            if ("view" == a.nodeName) {
                (b = a.getAttributeNode("fovmode")) && (ic = Number(b.nodeValue));
                b = a.getAttributeNode("pannorth");
                Fc = 1 * (b ? b.nodeValue : 0);
                for (c = a.firstChild; c;) "start" == c.nodeName && (b = c.getAttributeNode("pan"), gc = q = Number(b ? b.nodeValue : 0), b = c.getAttributeNode("tilt"), hc = p = Number(b ? b.nodeValue : 0), b = c.getAttributeNode("fov"), tb = t = Number(b ? b.nodeValue : 70)), "min" == c.nodeName && (b = c.getAttributeNode("pan"), Sa = 1 * (b ? b.nodeValue : 0), b = c.getAttributeNode("tilt"), va = 1 * (b ? b.nodeValue : -90), b = c.getAttributeNode("fov"),
                    ka = 1 * (b ? b.nodeValue : 5), 1.0E-8 > ka && (ka = 1.0E-8)), "max" == c.nodeName && (b = c.getAttributeNode("pan"), Ra = 1 * (b ? b.nodeValue : 0), b = c.getAttributeNode("tilt"), ua = 1 * (b ? b.nodeValue : 90), b = c.getAttributeNode("fov"), ja = 1 * (b ? b.nodeValue : 120), 180 <= ja && (ja = 179.9)), c = c.nextSibling
            }
            "autorotate" == a.nodeName && ((b = a.getAttributeNode("speed")) && (ra = 1 * b.nodeValue), (b = a.getAttributeNode("delay")) && (Ob = 1 * b.nodeValue), (b = a.getAttributeNode("returntohorizon")) && (sb = 1 * b.nodeValue), (b = a.getAttributeNode("nodedelay")) && (Nb = 1 * b.nodeValue),
                Db && 0 != ra && (ca = ib = m, Ta = (new Date).getTime()));
            "input" == a.nodeName && (h || (h = a));
            if (h)
                for (c = 0; 6 > c; c++) b = h.getAttributeNode("prev" + c + "url"), ta[c] = b ? new String(b.nodeValue) : "";
            "altinput" == a.nodeName && (c = 0, (b = a.getAttributeNode("screensize")) && (c = 1 * b.nodeValue), 0 < c && c >= d.getMaxScreenResolution() && c < g && (g = c, h = a));
            "control" == a.nodeName && Db && ((b = a.getAttributeNode("simulatemass")) && (Ib = 1 == b.nodeValue), (b = a.getAttributeNode("locked")) && (S = 1 == b.nodeValue), b && (vb = 1 == b.nodeValue), (b = a.getAttributeNode("lockedmouse")) &&
                (S = 1 == b.nodeValue), (b = a.getAttributeNode("lockedkeyboard")) && (vb = 1 == b.nodeValue), (b = a.getAttributeNode("lockedwheel")) && (Wb = 1 == b.nodeValue), (b = a.getAttributeNode("invertwheel")) && (xc = 1 == b.nodeValue), (b = a.getAttributeNode("speedwheel")) && (yc = 1 * b.nodeValue), (b = a.getAttributeNode("invertcontrol")) && (Aa = 1 == b.nodeValue), (b = a.getAttributeNode("dblclickfullscreen")) && (Sb = 1 == b.nodeValue));
            "overlay" == a.nodeName && ((b = a.getAttributeNode("blendspeed")) && (Va = 1 * b.nodeValue), (b = a.getAttributeNode("auto")) && (oc =
                1 == b.nodeValue), (b = a.getAttributeNode("delay")) && (pc = 1 * b.nodeValue));
            "userdata" == a.nodeName && (d.userdata = x(a));
            if ("hotspots" == a.nodeName)
                for (c = a.firstChild; c;) {
                    if ("label" == c.nodeName) {
                        var f = yb;
                        if (b = c.getAttributeNode("enabled")) f.enabled = 1 == b.nodeValue;
                        if (b = c.getAttributeNode("width")) f.width = 1 * b.nodeValue;
                        if (b = c.getAttributeNode("height")) f.height = 1 * b.nodeValue;
                        if (b = c.getAttributeNode("textcolor")) f.W = 1 * b.nodeValue;
                        if (b = c.getAttributeNode("textalpha")) f.V = 1 * b.nodeValue;
                        if (b = c.getAttributeNode("background")) f.background =
                            1 == b.nodeValue;
                        if (b = c.getAttributeNode("backgroundalpha")) f.s = 1 * b.nodeValue;
                        if (b = c.getAttributeNode("backgroundcolor")) f.t = 1 * b.nodeValue;
                        if (b = c.getAttributeNode("border")) f.P = 1 * b.nodeValue;
                        if (b = c.getAttributeNode("bordercolor")) f.v = 1 * b.nodeValue;
                        if (b = c.getAttributeNode("borderalpha")) f.u = 1 * b.nodeValue;
                        if (b = c.getAttributeNode("borderradius")) f.O = 1 * b.nodeValue;
                        if (b = c.getAttributeNode("wordwrap")) f.wordwrap = 1 == b.nodeValue
                    }
                    "polystyle" == c.nodeName && ((b = c.getAttributeNode("mode")) && (R = 1 * b.nodeValue), (b =
                        c.getAttributeNode("bordercolor")) && (bc = 1 * b.nodeValue), (b = c.getAttributeNode("backgroundcolor")) && (dc = 1 * b.nodeValue), (b = c.getAttributeNode("borderalpha")) && (cc = 1 * b.nodeValue), (b = c.getAttributeNode("backgroundalpha")) && (ec = 1 * b.nodeValue));
                    "hotspot" == c.nodeName && (f = {
                        type: "point",
                        pan: 0,
                        tilt: 0,
                        url: "",
                        target: "",
                        id: "",
                        skinid: "",
                        w: 100,
                        h: 20,
                        wordwrap: u,
                        obj: n,
                        H: n
                    }, b = c.getAttributeNode("pan"), f.pan = 1 * (b ? b.nodeValue : 0), b = c.getAttributeNode("tilt"), f.tilt = 1 * (b ? b.nodeValue : 0), (b = c.getAttributeNode("url")) && (f.url =
                        b.nodeValue.toString()), (b = c.getAttributeNode("target")) && (f.target = b.nodeValue.toString()), (b = c.getAttributeNode("title")) && (f.title = b.nodeValue.toString()), (b = c.getAttributeNode("id")) && (f.id = b.nodeValue.toString()), (b = c.getAttributeNode("skinid")) && (f.skinid = b.nodeValue.toString()), (b = a.getAttributeNode("width")) && (f.w = b.nodeValue.toString()), (b = a.getAttributeNode("height")) && (f.h = b.nodeValue.toString()), (b = a.getAttributeNode("wordwrap")) && (f.wordwrap = 1 == b.nodeValue), G.push(f));
                    if ("polyhotspot" ==
                        c.nodeName) {
                        f = {
                            type: "poly",
                            url: "",
                            target: "",
                            id: "",
                            skinid: "",
                            w: 100,
                            h: 20,
                            wordwrap: u,
                            obj: n,
                            H: n,
                            c: 0,
                            k: 0
                        };
                        (b = c.getAttributeNode("url")) && (f.url = b.nodeValue.toString());
                        (b = c.getAttributeNode("target")) && (f.target = b.nodeValue.toString());
                        (b = c.getAttributeNode("title")) && (f.title = b.nodeValue.toString());
                        (b = c.getAttributeNode("id")) && (f.id = b.nodeValue.toString());
                        f.v = bc;
                        f.t = dc;
                        f.u = cc;
                        f.s = ec;
                        if (b = c.getAttributeNode("bordercolor")) f.v = 1 * b.nodeValue;
                        if (b = c.getAttributeNode("backgroundcolor")) f.t = 1 * b.nodeValue;
                        if (b = c.getAttributeNode("borderalpha")) f.u = 1 * b.nodeValue;
                        if (b = c.getAttributeNode("backgroundalpha")) f.s = 1 * b.nodeValue;
                        f.H = [];
                        for (var k = c.firstChild; k;) {
                            if ("vertex" == k.nodeName) {
                                var l = {
                                    pan: 0,
                                    tilt: 0
                                };
                                b = k.getAttributeNode("pan");
                                l.pan = 1 * (b ? b.nodeValue : 0);
                                b = k.getAttributeNode("tilt");
                                l.tilt = 1 * (b ? b.nodeValue : 0);
                                f.H.push(l)
                            }
                            k = k.nextSibling
                        }
                        G.push(f)
                    }
                    c = c.nextSibling
                }
            if ("sounds" == a.nodeName || "media" == a.nodeName)
                for (c = a.firstChild; c;) {
                    if ("sound" == c.nodeName) {
                        k = {
                            id: "",
                            url: "",
                            loop: 0,
                            b: 1,
                            z: 0,
                            mode: 1,
                            field: 10,
                            pan: 0,
                            tilt: 0,
                            f: 0,
                            r: 0,
                            url: []
                        };
                        if (b = c.getAttributeNode("id")) k.id = b.nodeValue.toString();
                        (b = c.getAttributeNode("url")) && k.url.push(b.nodeValue.toString());
                        if (b = c.getAttributeNode("level")) k.b = Number(b.nodeValue);
                        if (b = c.getAttributeNode("loop")) k.loop = Number(b.nodeValue);
                        if (b = c.getAttributeNode("mode")) k.mode = Number(b.nodeValue);
                        if (b = c.getAttributeNode("field")) k.field = Number(b.nodeValue);
                        if (b = c.getAttributeNode("ambientlevel")) k.z = Number(b.nodeValue);
                        if (b = c.getAttributeNode("pan")) k.pan = Number(b.nodeValue);
                        if (b = c.getAttributeNode("tilt")) k.tilt = Number(b.nodeValue);
                        if (b = c.getAttributeNode("pansize")) k.f = Number(b.nodeValue);
                        if (b = c.getAttributeNode("tiltsize")) k.r = Number(b.nodeValue);
                        for (f = c.firstChild; f;) "source" == f.nodeName && (b = f.getAttributeNode("url")) && k.url.push(b.nodeValue.toString()), f = f.nextSibling;
                        na(k)
                    }
                    if ("video" == c.nodeName) {
                        k = {
                            id: "",
                            url: "",
                            loop: 0,
                            b: 1,
                            z: 0,
                            mode: 1,
                            field: 10,
                            pan: 0,
                            tilt: 0,
                            f: 0,
                            r: 0,
                            i: 0,
                            j: 0,
                            F: 0,
                            B: 50,
                            g: 0,
                            url: []
                        };
                        if (b = c.getAttributeNode("id")) k.id = b.nodeValue.toString();
                        (b = c.getAttributeNode("url")) &&
                            k.url.push(b.nodeValue.toString());
                        if (b = c.getAttributeNode("level")) k.b = Number(b.nodeValue);
                        if (b = c.getAttributeNode("loop")) k.loop = Number(b.nodeValue);
                        if (b = c.getAttributeNode("mode")) k.mode = Number(b.nodeValue);
                        if (b = c.getAttributeNode("field")) k.field = Number(b.nodeValue);
                        if (b = c.getAttributeNode("ambientlevel")) k.z = Number(b.nodeValue);
                        if (b = c.getAttributeNode("pan")) k.pan = Number(b.nodeValue);
                        if (b = c.getAttributeNode("tilt")) k.tilt = Number(b.nodeValue);
                        if (b = c.getAttributeNode("pansize")) k.f = Number(b.nodeValue);
                        if (b = c.getAttributeNode("tiltsize")) k.r = Number(b.nodeValue);
                        if (b = c.getAttributeNode("rotx")) k.i = Number(b.nodeValue);
                        if (b = c.getAttributeNode("roty")) k.j = Number(b.nodeValue);
                        if (b = c.getAttributeNode("rotz")) k.F = Number(b.nodeValue);
                        if (b = c.getAttributeNode("fov")) k.B = Number(b.nodeValue);
                        if (b = c.getAttributeNode("width")) k.n = Number(b.nodeValue);
                        if (b = c.getAttributeNode("height")) k.m = Number(b.nodeValue);
                        b = c.getAttributeNode("stretch");
                        k.J = b ? Number(b.nodeValue) : 1;
                        if (b = c.getAttributeNode("clickmode")) k.g = Number(b.nodeValue);
                        for (f = c.firstChild; f;) "source" == f.nodeName && (b = f.getAttributeNode("url")) && k.url.push(b.nodeValue.toString()), f = f.nextSibling;
                        M(k)
                    }
                    if ("image" == c.nodeName) {
                        k = {
                            id: "",
                            url: "",
                            loop: 0,
                            b: 1,
                            z: 0,
                            mode: 1,
                            field: 10,
                            pan: 0,
                            tilt: 0,
                            f: 0,
                            r: 0,
                            i: 0,
                            j: 0,
                            F: 0,
                            B: 50,
                            g: 0
                        };
                        if (b = c.getAttributeNode("id")) k.id = b.nodeValue.toString();
                        if (b = c.getAttributeNode("url")) k.url = b.nodeValue.toString();
                        if (b = c.getAttributeNode("pan")) k.pan = Number(b.nodeValue);
                        if (b = c.getAttributeNode("tilt")) k.tilt = Number(b.nodeValue);
                        if (b = c.getAttributeNode("rotx")) k.i =
                            Number(b.nodeValue);
                        if (b = c.getAttributeNode("roty")) k.j = Number(b.nodeValue);
                        if (b = c.getAttributeNode("rotz")) k.F = Number(b.nodeValue);
                        if (b = c.getAttributeNode("fov")) k.B = Number(b.nodeValue);
                        if (b = c.getAttributeNode("width")) k.n = Number(b.nodeValue);
                        if (b = c.getAttributeNode("height")) k.m = Number(b.nodeValue);
                        b = c.getAttributeNode("stretch");
                        k.J = b ? Number(b.nodeValue) : 1;
                        if (b = c.getAttributeNode("clickmode")) k.g = Number(b.nodeValue);
                        for (f = c.firstChild; f;) {
                            if ("source" == f.nodeName && (b = f.getAttributeNode("url"))) k.url =
                                b.nodeValue.toString();
                            f = f.nextSibling
                        }
                        L(k)
                    }
                    c = c.nextSibling
                }
            a = a.nextSibling
        }
        if (h) {
            for (c = 0; 6 > c; c++)(b = h.getAttributeNode("tile" + c + "url")) && (Wa[c] = new String(b.nodeValue)), b = h.getAttributeNode("tile" + c + "url1"), jc[c] = b ? new String(b.nodeValue) : "";
            for (c = 0; 6 > c; c++)(b = h.getAttributeNode("prev" + c + "url")) && (ta[c] = new String(b.nodeValue));
            (b = h.getAttributeNode("tilesize")) && (nb = 1 * b.nodeValue);
            (b = h.getAttributeNode("tilescale")) && (Ya = 1 * b.nodeValue)
        }
        $a ? e && (Cc(Ya), Dc()) : (Bb = m, 0 <= navigator.userAgent.indexOf("MSIE") ?
            d.ia() : d.createCube(), d.T = 0);
        d.addHotspotElements();
        d.dirty = m;
        Db && d.divSkin && d.divSkin.ggViewerInit && d.divSkin.ggViewerInit();
        Db = u;
        d.hasConfig = m;
        Ca()
    };
    d.openUrl = function (a, c) {
        0 < a.length && (-1 == a.indexOf("://") && "/" != a.substr(0, 1) && (a = Xa + a), ".xml" == a.substr(a.length - 4) || ".swf" == a.substr(a.length - 4) || "{" == a.charAt(0) ? d.openNext(a, c) : window.open(a, c))
    };
    d.openNext = function (a, c) {
        d.isLoaded = u;
        d.hasConfig = u;
        d.checkLoaded = [];
        d.divSkin && d.divSkin.ggReLoaded && d.divSkin.ggReLoaded();
        qb = 0;
        d.skinObj && d.skinObj.hotspotProxyOut &&
            d.skinObj.hotspotProxyOut(d.hotspot.id);
        ".swf" == a.substr(a.length - 4) && (a = a.substr(0, a.length - 4) + ".xml");
        var b = "";
        c && (b = c.toString());
        b = b.replace("$cur", q + "/" + p + "/" + t);
        b = b.replace("$ap", q);
        b = b.replace("$an", d.getPanNorth());
        b = b.replace("$at", p);
        b = b.replace("$af", t);
        if ("" != b) {
            var e = b.split("/");
            3 < e.length && "" != e[3] && (d.startNode = e[3])
        }
        if ("{" == a.charAt(0))
            if (e = a.substr(1, a.length - 2), Za[e]) d.U(Za[e]), o(a);
            else {
                $("invalid node id: " + e);
                return
            } else d.readConfigUrl(a);
            "" != b && (e = b.split("/"), 0 < e.length &&
            d.setPan(Number(e[0])), 1 < e.length && d.setTilt(Number(e[1])), 2 < e.length && d.setFov(Number(e[2])));
        I()
    };
    d.getNodeIds = function () {
        return Ua.slice(0)
    };
    d.getNodeUserdata = function (a) {
        if (!a) return d.userdata;
        if (a = Za[a])
            for (a = a.firstChild; a;) {
                if ("userdata" == a.nodeName) return x(a);
                a = a.nextSibling
            }
        return []
    };
    d.getNodeLatLng = function (a) {
        var a = d.getNodeUserdata(a),
            c = [];
        c.push(a.latitude);
        c.push(a.longitude);
        return c
    };
    d.getNodeTitle = function (a) {
        return d.getNodeUserdata(a).title
    };
    d.detectBrowser();
    d.createLayers(g);
    d.ga()
}
window.ggHasHtml5Css3D = lc;
window.ggHasWebGL = mc;
window.html5player = pano2vrPlayer;