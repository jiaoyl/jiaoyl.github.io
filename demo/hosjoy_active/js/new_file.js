!
function(t) {
    function a(r) {
        if (i[r]) return i[r].exports;
        var e = i[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return t[r].call(e.exports, e, e.exports, a),
        e.loaded = !0,
        e.exports
    }
    var i = {};
    return a.m = t,
    a.c = i,
    a.p = "",
    a(0)
} ([function(t, a, i) {
    t.exports = i(1)
},
function(t, a, i) {
    i(2),
    i(6),
    $(document).ready(function() {
        var t = {
            zoom: function() {
                var t = $("#J_indexBody");
                t.css({
                    "font-size": t.width() / 2560 * 100
                }),
                $(window).on("resize.zoom",
                function() {
                    t.css({
                        "font-size": t.width() / 2560 * 100
                    })
                })
            },
            lazyload: function() {
                var t = $(".mix2").find(".section");
                t.visibleWatcher({
                    onVisible: function(a, i) {
                        t.filter(function(t) {
                            return i + 1 >= t
                        }).addClass("preload")
                    }
                })
            },
            verChange: function() {
                var t = $("#J_verPanel"),
                a = $("#J_verTab .tab");
                a.on("click",
                function() {
                    var i = $(this);
                    i.hasClass("current") || (a.filter(".current").removeClass("current"), i.addClass("current"), t.removeClass("ver-b ver-pb ver-pw").addClass("ver-" + i.data("ver")))
                })
            }
        };
        t.zoom(),
        t.lazyload(),
        t.verChange(),
        $(window).on("resize.lazyload",
        function() {
            t.lazyload()
        })
    })
},
function(t, a, i) {
    i(3),
    $(function() {
        MI.proNav();
        var t = $("#J_modalVideo");
        $(".J_playBtn").on("click",
        function(a) {
            a.preventDefault();
            var i = $(this).attr("data-video"),
            r = $(window).width(),
            e = $(window).height();
            t.one("show.bs.modal",
            function() {
                t.find(".modal-bd").html('<iframe id="miPlayerIframe" width="100%" height="100%" src="//hd.mi.com/f/zt/hd/miplayer2/index.html?vurl=' + i + "&width=" + r + "&height=" + e + '&auto=1" frameborder="0" allowfullscreen="" scrolling="no"></iframe>')
            }).modal("show").one("hidden.bs.modal",
            function() {
                t.find(".modal-bd").empty()
            })
        })
    })
},
function(t, a, i) {
    MI.proNav = function(t) {
        if (0 !== $("#J_proHeader").length) {
            var a = i(4),
            r = $("#J_proHeader").find("h2").text();
            $("#J_proHeader").html(a(r)),
            window.tarList = [];
            var e = window.tarList,
            n = function() {
                var t = $(window).scrollTop();
                for (var a in e) if (e.hasOwnProperty(a)) {
                    var i = e[a],
                    r = i.top;
                    t > r ? i.callback(i, t) : i.reverse && i.reverse(i, t)
                }
            };
            $(window).on("scroll",
            function() {
                n()
            }),
            0 === $(".J_miOneScroller").length && $("html,body").animate({
                scrollTop: 1 === $("#J_proHeader").length ? $("#J_proHeader").offset().top: 140
            },
            1e3),
            t = t || {};
            var o = {
                id: t.id ? t.id: "",
                target: t.target ? t.target: ""
            },
            s = function() {
                var t = 140;
                1 === $("#J_proHeader").length && (t = $("#J_proHeader").offset().top + $("#J_proHeader").height());
                var a = t;
                e.push({
                    top: a,
                    callback: function() {
                        $("#J_fixNarBar").addClass("nav_fix")
                    },
                    reverse: function() {
                        $("#J_fixNarBar").removeClass("nav_fix")
                    }
                })
            },
            l = {};
            o.id ? l.product_id = o.id: l.url = "http://" + window.location.host + window.location.pathname,
            $.ajax({
                type: "GET",
                url: MI.GLOBAL_CONFIG.orderSite + "/product/gettabinfo",
                data: l,
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                timeout: 1e4,
                success: function(t) {
                    if (1 === t.code && (t = t.data, t.link)) {
                        t.link.id = o.id || t.link.product_id,
                        t.link.target = o.target,
                        t.link.domain = MI.GLOBAL_CONFIG.itemSite,
                        t.link.url = "//" + window.location.host + window.location.pathname;
                        var a = i(5);
                        $(".J_navSwitch").find(".con").html(a(t.link)),
                        $(".J_buyBtn").attr("href", MI.GLOBAL_CONFIG.itemSite + "/product/" + t.link.id + ".html"),
                        s()
                    }
                }
            })
        }
    }
},
function(t, a) {
    t.exports = function(t) {
        var a = '<div class="xm-product-box"> <div class="nav-bar" id="J_headNav"> <div class="container J_navSwitch"> <h2 class="J_proName">' + t + '</h2> <div class="con"></div> </div> </div></div><div class="xm-product-box nav-bar-hidden" id="J_fixNarBar"> <div class="nav-bar" > <div class="container J_navSwitch"> <h2 class="J_proName">' + t + '</h2> <div class="con"></div> </div> </div></div>';
        return a
    }
},
function(t, a) {
    t.exports = function(t) {
        var a = "";
        if (t.left && t.left.length > 0) {
            a += '<div class="left"> ';
            var i = t.left;
            if (i) for (var r, e = -1,
            n = i.length - 1; n > e;) {
                r = i[e += 1],
                a += " ";
                var o = r.url.replace(/^http:\/\/|^https:\/\//g, "//");
                a += ' <span class="separator">|</span> ',
                o === t.url ? a += ' <a  href="javascript:void(0);" class="cur" >' + r.title + "</a> ": (a += ' <a  href="' + o + '" ', r.is_new_page && (a += 'target="_blank"'), a += ">" + r.title + "</a> "),
                a += " "
            }
            a += "</div>"
        }
        if (a += '<div class="right">', t.right && t.right.length > 0) {
            a += " ";
            var s = t.right;
            if (s) for (var r, e = -1,
            l = s.length - 1; l > e;) {
                r = s[e += 1],
                a += " ";
                var o = r.url.replace(/^http:\/\/|^https:\/\//g, "//");
                a += " ",
                o === t.url ? a += ' <a  href="javascript:void(0);" class="cur" >' + r.title + "</a> ": (a += ' <a  href="' + o + '" ', r.is_new_page && (a += 'target="_blank"'), a += ">" + r.title + "</a> "),
                a += ' <span class="separator">|</span> '
            }
        }
        return t.id && (a += " ", "buy" === t.target && (a += ' <a href="' + t.domain + "/comment/" + t.id + '.html">用户评价</a> '), a += " ", "comment" === t.target && (a += ' <a href="javascript:void(0);" class="cur">用户评价</a> <a href="' + t.domain + "/product/" + t.id + '.html" class="btn btn-small btn-primary" >立即购买</a> '), a += " ", "buy" !== t.target && "comment" !== t.target && (a += ' <a href="' + t.domain + "/comment/" + t.id + '.html" >用户评价</a> <a href="' + t.domain + "/product/" + t.id + '.html" class="btn btn-small btn-primary" >立即购买</a> ')),
        a += "</div>"
    }
},
function(t, a) { !
    function(t) {
        function a(a) {
            function i() {
                for (var a = -1,
                i = t(document).scrollTop(), r = 0, e = d.length; e > r && i + o.viewport.height() > d[r]; r += 1) a += 1;
                return a
            }
            function r() {
                var a = i();
                l !== a && (l = a, s.filter(function(a) {
                    return l >= a && !t(this).hasClass(o.visibleClass)
                }).addClass(o.visibleClass).trigger("visible.visibleWatcher"), o.onVisible(s.eq(l), l))
            }
            function e() {
                s.each(function() {
                    var a = t(this).attr("data-offset") ? Number(t(this).attr("data-offset")) : o.offset,
                    i = a % 1 === 0 ? a: a * o.viewport.height();
                    d.push(t(this).offset().top + i)
                }),
                r(),
                o.onLoad()
            }
            var n, o, s = t(this),
            l = -1,
            d = [];
            n = {
                viewport: t(window),
                visibleClass: "is-visible",
                offset: 300,
                onLoad: t.noop,
                onVisible: t.noop
            },
            o = t.extend({},
            n, a),
            e(),
            o.viewport.on({
                "scroll.visibleWatcher": r,
                "resize.visibleWatcher": e
            })
        }
        t.fn.visibleWatcher = function(t) {
            return a.call(this, t),
            this
        }
    } (jQuery)
}]);