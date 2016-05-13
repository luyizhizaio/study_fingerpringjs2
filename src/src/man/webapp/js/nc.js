/* v1.0.15,1.1.1,0.5 2016-05-05 13:48:55 */
!
function() {
    function cond() {
        return Math.random()
    }
    function chkQuerySet() {
        var e, t = window[QUERY_KEY];
        return isNaN(t) ? (e = location.href.split(QUERY_KEY + "=")[1], t = parseFloat(e), void(isNaN(t) || (GREY_RATIO = t))) : void(GREY_RATIO = t)
    }
    var GREY_RATIO = .5,
    QUERY_KEY = "aq-nc-grey-ratio",
    STABLE_ACTION = function() { !
        function e(t, n, a) {
            function o(r, c) {
                if (!n[r]) {
                    if (!t[r]) {
                        var s = "function" == typeof require && require;
                        if (!c && s) return s(r, !0);
                        if (i) return i(r, !0);
                        throw new Error("Cannot find module '" + r + "'")
                    }
                    var l = n[r] = {
                        exports: {}
                    };
                    t[r][0].call(l.exports,
                    function(e) {
                        var n = t[r][1][e];
                        return o(n ? n: e)
                    },
                    l, l.exports, e, t, n, a)
                }
                return n[r].exports
            }
            for (var i = "function" == typeof require && require,
            r = 0; r < a.length; r++) o(a[r]);
            return o
        } ({
            1 : [function(e, t, n) { !
                function() {
                    var t = window,
                    n = document,
                    a = "_nc_initialized";
                    if (!t[a]) {
                        t[a] = 1;
                        var o = e("./v").v;
                        e("./pclib/onerror");
                        var i = {},
                        r = {},
                        c = {
                            has_pointman: t.pointman && "19" == pointman._z,
                            render_to: "",
                            el_render_to: null,
                            v: o
                        };
                        t.UA_Opt = t.UA_Opt || {};
                        var s = {},
                        l = e("./pclib/noCaptcha").makeNoCaptcha(r, s, c, i);
                        l.v = o,
                        r.init = function(e) {
                            if (e.cssUrl) if (n.createStyleSheet) n.createStyleSheet(e.cssUrl);
                            else {
                                var t = n.createElement("link");
                                t.type = "text/css",
                                t.rel = "stylesheet",
                                t.href = c.has_pointman ? pointman.addHourStamp(e.cssUrl) : e.cssUrl;
                                var a = n.getElementsByTagName("script")[0];
                                a.parentNode.insertBefore(t, a)
                            }
                        },
                        r.on = function(e, t) {
                            i[e] = i[e] || [],
                            i[e].push(t)
                        },
                        c.has_pointman && (r.noCaptcha = l, pointman.define("nc",
                        function() {
                            return r
                        })),
                        t.noCaptcha = l
                    }
                } ()
            },
            {
                "./pclib/noCaptcha": 12,
                "./pclib/onerror": 13,
                "./v": 20
            }],
            2 : [function(e, t, n) {
                "use strict";
                function a(e) {
                    var t, n = "",
                    a = _.getElementById("umFlash");
                    if (a && !n) try {
                        t = a.getCookie(e) || "",
                        n = t
                    } catch(o) {}
                    try {
                        g.localStorage && !n && (t = localStorage[e] || "", n = t)
                    } catch(o) {}
                    if (g.navigator.cookieEnabled && !n) {
                        var i = _.cookie.indexOf(e + "=");
                        if ( - 1 != i) {
                            i += e.length + 1;
                            var r = _.cookie.indexOf(";", i); - 1 == r && (r = _.cookie.length),
                            t = decodeURIComponent(_.cookie.substring(i, r)) || "",
                            n = t
                        }
                    }
                    return n
                }
                function o(e, t, n) {
                    n = n || 7;
                    var a = new Date;
                    a.setTime(a.getTime() + 864e5 * n),
                    _.cookie = [encodeURIComponent(e), "=", encodeURIComponent("" + t), ";expires=", a.toGMTString()].join("")
                }
                function i() {
                    var e = a(f);
                    return e || (e = h + r(11), o(f, e, 3650)),
                    e
                }
                function r(e) {
                    for (var t = ""; t.length < e;) t += Math.random().toString().substr(2);
                    return t.substring(t.length - e)
                }
                function c() {
                    var e = g._sec_module = g._sec_module || {};
                    if (d = e.token) return d;
                    var t = i();
                    return d = t + h + r(3),
                    e.token = d,
                    d
                }
                function s() {
                    if (p) return p;
                    var e = "_umdata";
                    try {
                        g.localStorage && (p = localStorage.getItem(e))
                    } catch(t) {}
                    return p ? p: (p = a(e), p || "")
                }
                function l() {
                    return u ? u: u = s() || c()
                }
                var d, p, u, g = window,
                _ = document,
                f = "_uab_collina",
                h = g.pointman && pointman._now ? pointman._now: (new Date).getTime();
                n.getSecToken = c,
                n.getNCToken = l
            },
            {}],
            3 : [function(e, t, n) {
                function a(e, t) {
                    this.id = function(e) {
                        return 0 == e.indexOf("#") ? i.getElementById(e.slice(1)) : i.getElementById(e)
                    },
                    this.tag = function(e) {
                        var t = e.split(" ");
                        return this.id(t[0]).getElementsByTagName(t[1])
                    },
                    this.toggle = function(e) {
                        var t = this.id(e);
                        "none" == t.style.display || "" === t.style.display ? t.style.display = "block": t.style.display = "none"
                    },
                    this.clone = function(e) {
                        var t, n, a = e;
                        if (e && ((n = e instanceof Array) || e instanceof Object)) {
                            a = n ? [] : {};
                            for (t in e) e.hasOwnProperty(t) && (a[t] = this.clone(e[t]))
                        }
                        return a
                    },
                    this.extend = function(e, t, n) {
                        var a, o;
                        if (t instanceof Array) for (a = 0, o = t.length; o > a; a++) this.extend(e, t[a], n);
                        for (a in t) a in e && t.hasOwnProperty(a) && (e[a] = t[a]);
                        return e
                    },
                    this.objUpdate = function(e, t) {
                        var n;
                        for (n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    },
                    this.loadjs = function(e, t) {
                        function n() {
                            clearTimeout(r),
                            o || (o = 1, t())
                        }
                        var a = i.createElement("script");
                        a.type = "text/javascript";
                        var o;
                        a.onreadystatechange = function() { ("loaded" == a.readyState || "complete" == a.readyState) && (a.onreadystatechange = null, n())
                        },
                        a.onload = n,
                        a.onerror = function() {
                            t("err")
                        },
                        a.src = e;
                        var r = setTimeout(function() {
                            a.onerror()
                        },
                        5e3),
                        c = i.getElementsByTagName("script")[0];
                        c.parentNode.insertBefore(a, c)
                    },
                    this.jsonp = function(n) {
                        var a = 0;
                        n.time = e.timeout || 3e3;
                        var r;
                        if (n = n || {},
                        !n.url || !n.callback) throw new Error("\u53c2\u6570\u4e0d\u5408\u6cd5");
                        var c = ("jsonp_" + Math.random()).replace(".", ""),
                        s = i.getElementsByTagName("script")[0],
                        l = "";
                        n.data ? (n.data[n.callback] = c, l += t(n.data)) : l += n.callback + "=" + c;
                        var d = i.createElement("script");
                        s.parentNode.insertBefore(d, s),
                        o[c] = function(e) {
                            try {
                                d.parentNode && d.parentNode.removeChild(d)
                            } catch(t) {}
                            clearInterval(r),
                            o[c] = null,
                            n.success && n.success(e)
                        },
                        d.src = n.url + ( - 1 == n.url.indexOf("?") ? "?": "&") + l,
                        n.time && (r = setInterval(function() {
                            a++;
                            var t;
                            if (a >= e.times) {
                                o[c] = function() {},
                                clearInterval(r);
                                try {
                                    d.parentNode && d.parentNode.removeChild(d)
                                } catch(s) {}
                                n.fail(1)
                            } else try {
                                d.parentNode && d.parentNode.removeChild(d),
                                d = i.createElement("script"),
                                t = i.getElementsByTagName("script")[0],
                                t.parentNode.insertBefore(d, t),
                                d.src = n.url + ( - 1 == n.url.indexOf("?") ? "?": "&") + l + "&t=" + Math.random()
                            } catch(s) {}
                        },
                        n.time))
                    },
                    this.obj2str = function(e) {
                        var t, n = [],
                        a = arguments.callee;
                        if ("string" == typeof e) return '"' + e.replace(/(['"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + '"';
                        if ("undefined" == typeof e) return "undefined";
                        if ("object" == typeof e) {
                            if (null === e) return "null";
                            if (e.sort) {
                                for (t = 0; t < e.length; t++) n.push(a(e[t]));
                                n = "[" + n.join() + "]"
                            } else {
                                for (t in e) e.hasOwnProperty(t) && n.push('"' + t + '":' + a(e[t]));
                                n = "{" + n.join() + "}"
                            }
                            return n
                        }
                        return e.toString()
                    },
                    this.addHandler = function(e, t, n) {
                        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
                    },
                    this.removeEvt = function(e, t, n) {
                        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
                    }
                }
                var o = window,
                i = document;
                n.BaseFun = a
            },
            {}],
            4 : [function(e, t, n) {
                function a() {
                    "use strict";
                    var e = 1,
                    t = navigator && navigator.userAgent || "",
                    n = /Firefox\/([\d.]*)/.test(t),
                    a = -1 !== t.indexOf("Windows"),
                    c = (new Date).getTime(),
                    s = (new Date).getTime(),
                    l = i.head || i.getElementsByTagName("head")[0] || i.documentElement,
                    d = function(e) {
                        return i.getElementById(e)
                    },
                    p = {
                        "default": 4,
                        number: 6,
                        "150_40": 4,
                        login_wan3: 4,
                        login_wan10: 6
                    },
                    u = function(e) {
                        this.lang = e.lang,
                        this.config = {
                            apiserver: e.apiserver || "//pin2.aliyun.com",
                            type: e.type || "default",
                            codeLength: e.checkCodeLength || p[e.type || "default"],
                            identity: e.identity || "",
                            sessionid: e.sessionid || "",
                            element: e.element || null
                        },
                        this.tipText = {};
                        var t, n = r[e.lang] || r.en;
                        for (t in n) n.hasOwnProperty(t) && (this.tipText[t] = e[t] || n[t]);
                        this.service = {
                            imgURL: "{apiserver}/get_img?sessionid={sessionid}&identity={identity}&type={type}",
                            checkImgURL: "{apiserver}/check_img?sessionid={sessionid}&identity={identity}&type={type}",
                            audioURL: "{apiserver}/get_audio?identity={identity}&sessionid={sessionid}",
                            checkAudioURL: "{apiserver}/check_audio?sessionid={sessionid}&identity={identity}"
                        },
                        this.cache = {
                            codeType: "img",
                            oldCode: null,
                            lastCheckCode: "",
                            checkedCode: null,
                            checkState: "notstart",
                            audio: null,
                            audioPlayer: null,
                            callback: null
                        }
                    };
                    return u.prototype = {
                        render: function() {
                            var e = this,
                            t = e.config;
                            if (!t.element) return ! 1;
                            "[object String]" == Object.prototype.toString.call(t.element) && (t.element = d(t.element));
                            for (var n in this.service) if (this.service.hasOwnProperty(n)) {
                                var a = this.service[n];
                                a = a.replace("{apiserver}", t.apiserver).replace("{identity}", t.identity).replace("{sessionid}", t.sessionid).replace("{type}", t.type),
                                this.service[n] = a
                            }
                            return e.renderCode(),
                            this
                        },
                        renderCode: function() {
                            function e() {
                                var e = c || d("omeo-code-key");
                                e.value = e.value.replace(/[^\w\d]/g, "")
                            }
                            var t = this,
                            n = t.tipText,
                            a = t.config,
                            o = i.createElement("div"),
                            r = a.element;
                            o.className = "omeo-box",
                            o.innerHTML = '<div class="omeo-code omeo-img-active" id="omeo-code"><div class="omeo-code-img"><img id="omeo-code-imgwrap" data-action="refreshImg" src="' + t.service.imgURL + '" onmousedown="return false;"/><a data-action="refreshImg" href="javascript:;" onmousedown="return false;" title="' + n.refresh + '" class="omeo-code-refresh"></a><a data-action="switchToAudio" href="javascript:;" onmousedown="return false;" title="' + n.audioText + '" class="omeo-switch"></a></div><div class="omeo-code-audio"><div class="omeo-code-audiobox omeo-code-audiobox-playing"><a data-action="replayAudio" href="javascript:;">' + n.clickPlay + '</a><span id="omeo-audio-process"></span><b>' + n.audioTips + '</b></div><a id="omeo-refresh-audio" data-action="refreshAudio" href="javascript:;" onmousedown="return false;" title="' + n.refresh + '" class="omeo-code-refresh"></a><a data-action="switchToImg" href="javascript:;" onmousedown="return false;" title="' + n.imgText + '" class="omeo-switch"></a></div></div><div class="omeo-code-echo"><input id="omeo-code-key" type="text" name="code" maxlength="6" placeholder="' + n.placeholder + '" /><span class="omeo-code-state" id="omeo-code-state"></span></div><img id="_voice_close" src="//g.alicdn.com/sd/ncpc/images/voice_close.png" onclick="document.getElementById(\'_voicebtn\').click()" />',
                            r.appendChild(o);
                            var c = d("omeo-code-key");
                            r.addEventListener ? (r.addEventListener("click",
                            function(e) {
                                t.triggerEvent(e)
                            },
                            !1), d("omeo-code-imgwrap").addEventListener("error",
                            function() {
                                t.log({
                                    e: "IMGERROR"
                                }),
                                "img" == t.cache.codeType && t.refreshCode()
                            },
                            !1), c.addEventListener("blur",
                            function() {
                                e(),
                                t.validateCode({
                                    code: d("omeo-code-key").value.replace(/^\s|\s$/g, "")
                                })
                            },
                            !1), c.addEventListener("keyup",
                            function() {
                                e(),
                                t.listenerCodeType(this.value.replace(/^\s|\s$/g, ""))
                            },
                            !1), c.addEventListener("paste",
                            function(e) {
                                e.preventDefault()
                            },
                            !0)) : (r.attachEvent("onclick",
                            function(e) {
                                return t.triggerEvent(e),
                                !1
                            }), d("omeo-code-imgwrap").attachEvent("onerror",
                            function() {
                                t.log({
                                    e: "IMGERROR"
                                }),
                                "img" == t.cache.codeType && t.refreshCode()
                            }), c.attachEvent("onblur",
                            function() {
                                e(),
                                t.validateCode({
                                    code: d("omeo-code-key").value.replace(/^\s|\s$/g, "")
                                })
                            }), c.attachEvent("onkeyup",
                            function() {
                                e(),
                                t.listenerCodeType(d("omeo-code-key").value.replace(/^\s|\s$/g, ""))
                            }), c.attachEvent("onpaste",
                            function() {
                                return ! 1
                            }))
                        },
                        listenerCodeType: function(e) {
                            this.cache.oldCode && this.cache.oldCode.length !== this.config.codeLength || 1 !== e.length || (s = (new Date).getTime()),
                            this.cache.oldCode = e,
                            e.length == this.config.codeLength && this.validateCode({
                                code: e
                            })
                        },
                        triggerEvent: function(e) {
                            var t = e.target || e.srcElement,
                            n = t.getAttribute("data-action");
                            try {
                                d("omeo-code-key").focus()
                            } catch(e) {}
                            "refreshAudio" === n && this.refreshCode(),
                            "switchToAudio" === n && (this.cache.codeType = "audio", this.switchCode({
                                type: "audio"
                            })),
                            "replayAudio" == n && this.playAudio()
                        },
                        resetPlayer: function(e) {
                            var t = d("omeo-audio-process");
                            t.style.width = 0,
                            "playing" == e.state ? t.parentNode.className = "omeo-code-audiobox omeo-code-audiobox-playing": t.parentNode.className = "omeo-code-audiobox"
                        },
                        refreshCode: function() {
                            var e = d("omeo-code-state");
                            e.className = "omeo-code-state",
                            e.innerHTML = "",
                            o.__progtid && clearInterval(o.__progtid),
                            d("omeo-code-key").value = "",
                            this.resetPlayer({
                                state: "playing"
                            }),
                            this.playAudio(),
                            c = s = (new Date).getTime()
                        },
                        switchCode: function(e) {
                            "img" == e.type ? (this.stopAudio(), d("omeo-code").className = "omeo-code omeo-img-active") : (d("omeo-code").className = "omeo-code omeo-audio-active", this.resetPlayer({
                                state: "playing"
                            }), !this.audioSupport || n || (d("omeo-refresh-audio").style.display = ""), this.playAudio()),
                            this.cache.checkState = "notstart",
                            this.cache.checkedCode = null;
                            var t;
                            t = d("omeo-code-state"),
                            t.className = "omeo-code-state",
                            t.innerHTML = "",
                            t = d("omeo-code-key"),
                            t.value = "",
                            t.focus(),
                            this.cache.oldCode && this.refreshCode(),
                            c = s = (new Date).getTime()
                        },
                        playErrAudio: function() {
                            var e = "//g.alicdn.com/sd/ncpc/images/",
                            t = e + "error.wav",
                            n = e + "error_en.mp3",
                            a = "cn" == this.lang || "zh_CN" == this.lang;
                            this.playAudio(a ? t: n)
                        },
                        playAudio: function(t) {
                            t || (t = this.service.audioURL + (this.service.audioURL.indexOf("?") >= 0 ? "&t=": "?t=") + (new Date).getTime()),
                            this.stopAudio();
                            var n;
                            n = t.indexOf(".mp3") > -1 ? "audio/mpeg": "audio/x-wav";
                            var r;
                            if (this.audioSupport) this.cache.audio = new Audio,
                            r = i.createElement("source"),
                            r.type = n,
                            r.src = t,
                            this.cache.audio.appendChild(r),
                            this.cache.audio.load(),
                            this.cache.audio.play(),
                            this.bindAudioProgress();
                            else if (this.isIE) {
                                var c = i.createElement("bgsound");
                                c.setAttribute("id", "omeo-bgsound-audio" + e),
                                c.setAttribute("autostart", "true"),
                                c.setAttribute("src", t),
                                l.appendChild(c),
                                this.cache.audioPlayer = d("omeo-bgsound-audio" + e),
                                this.resetPlayer({
                                    state: "playing"
                                });
                                var s = 0,
                                p = this;
                                o.__progtid && clearInterval(o.__progtid),
                                o.__progtid = setInterval(function() {
                                    s += 10,
                                    s > 100 && (s = 100),
                                    p.updateProgress(s),
                                    s >= 100 && clearInterval(o.__progtid)
                                },
                                1e3)
                            } else l.appendChild('<embed src="' + t + '" id="omeo-flash-audio' + e + '" ' + (a ? 'type="application/x-mplayer2"': 'type="' + n + '"') + " autostart hidden />"),
                            this.cache.audioPlayer = d("omeo-flash-audio" + e),
                            this.updateProgress("NOPROGRESS")
                        },
                        bindAudioProgress: function() {
                            var e = this,
                            t = e.cache;
                            t.audio.addEventListener("timeupdate",
                            function() { ! n || this.duration && this.duration !== 1 / 0 ? e.updateProgress(parseInt(100 * this.currentTime / this.duration)) : e.updateProgress(100)
                            },
                            t.audio),
                            t.audio.addEventListener("ended",
                            function() {
                                e.updateProgress(100)
                            },
                            t.audio)
                        },
                        updateProgress: function(e) {
                            switch (e) {
                            case - 1 : break;
                            case 100:
                                this.resetPlayer({
                                    state:
                                    "end"
                                });
                                break;
                            case "NOPROGRESS":
                                this.resetPlayer({
                                    state:
                                    "end"
                                });
                                break;
                            default:
                                d("omeo-audio-process").style.width = e + "%"
                            }
                        },
                        stopAudio: function() {
                            var e = this.cache;
                            this.audioSupport ? e.audio && e.audio.pause() : e.audioPlayer && (e.audioPlayer.src = "", e.audioPlayer.parentNode.removeChild(this.cache.audioPlayer), e.audioPlayer = null)
                        },
                        replayAudio: function() {
                            this.audioSupport && this.cache.audio && (this.resetPlayer({
                                state: "playing"
                            }), this.cache.audio.currentTime = 0, this.cache.audio.pause(), this.cache.audio.play())
                        },
                        loadResource: function(e, t) {
                            var n = null;
                            /\.css/g.test(e) ? (i.createStyleSheet && i.createStyleSheet(e), n = i.createElement("link"), n.rel = "stylesheet", n.href = e) : (n = i.createElement("script"), n.src = e),
                            "onload" in n ? n.onload = function() {
                                t && t()
                            }: n.onreadystatechange = function() { / loaded | complete / .test(n.readyState) && t && t()
                            },
                            l.appendChild(n)
                        },
                        isIE: function() {
                            return !! /MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/.test(t)
                        } (),
                        audioSupport: function() {
                            try {
                                return "Audio" in o && (new Audio).canPlayType("audio/x-wav")
                            } catch(e) {
                                return ! 1
                            }
                        } (),
                        validateCode: function(t) {
                            var n = this,
                            a = d("omeo-code-state"),
                            i = "omeocode" + e + ( + new Date).toString().substr( - 6, 6),
                            r = n.service.checkAudioURL;
                            return n.cache.checkedCode && n.cache.checkedCode === n.cache.oldCode ? !1 : n.cache.lastCheckCode == t.code ? !1 : (n.cache.lastCheckCode = t.code, n.cache.checkedCode = null, "checking" == n.cache.checkState ? !1 : (n.cache.checkState = "checking", void(/^[a-z0-9]{4,6}$/gi.test(t.code) ? (r += "&code=" + t.code + "&callback=" + i, o[i] = function(e) {
                                var o = {};
                                if ("SUCCESS." == e.message) {
                                    n.cache.checkedCode = t.code,
                                    a.className = "omeo-code-state omeo-code-state-success",
                                    a.innerHTML = "",
                                    n.cache.checkState = "success",
                                    o = {
                                        message: "success"
                                    };
                                    var i = (new Date).getTime();
                                    n.log({
                                        t1: i - s,
                                        t2: i - c,
                                        s: e && "SUCCESS." === e.message,
                                        t: n.cache.codeType
                                    })
                                }
                                "ERROR." == e.message && (a.className = "omeo-code-state omeo-code-state-error", a.innerHTML = n.tipText.codeError, setTimeout(function() {
                                    var e = d("omeo-code-state");
                                    e.className = "",
                                    e.innerHTML = "",
                                    d("omeo-code-key").value = ""
                                },
                                3e3), n.cache.checkState = "codeError", o = {
                                    message: "error"
                                },
                                d("omeo-code-key").select(), "true" == e.refresh && n.refreshCode()),
                                n.cache.callback && n.cache.callback(o)
                            },
                            n.loadResource(r)) : (n.cache.checkState = "codeError", a.className = "omeo-code-state omeo-code-state-error", a.innerHTML = "\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165", n.playErrAudio(), setTimeout(function() {
                                var e = d("omeo-code-state");
                                e.className = "",
                                e.innerHTML = "",
                                e = d("omeo-code-key"),
                                e.value = "",
                                e.focus(),
                                n.resetPlayer({
                                    state: "playing"
                                }),
                                n.playAudio()
                            },
                            5e3)))))
                        },
                        check: function(e) {
                            "success" == this.cache.checkState && e && e({
                                message: "success"
                            }),
                            "codeError" == this.cache.checkState && e && e({
                                message: "error"
                            }),
                            this.cache.callback = e
                        },
                        log: function() {}
                    },
                    u
                }
                var o = window,
                i = document,
                r = e("./language-checkcode").language;
                n.init = a
            },
            {
                "./language-checkcode": 10
            }],
            5 : [function(e, t, n) {
                "use strict";
                function a() {
                    var e = r.createElement("style");
                    e.appendChild(r.createTextNode(""));
                    var t = r.getElementsByTagName("script"),
                    n = t[t.length - 1];
                    return n.parentNode.insertBefore(e, n),
                    e.sheet
                }
                function o(e, t, n, a) {
                    "number" != typeof a && (a = 1),
                    "insertRule" in e ? e.insertRule(t + "{" + n + "}", a) : "addRule" in e && e.addRule(t, n, a)
                }
                function i(e) {
                    var t = r.createElement("style");
                    t.type = "text/css",
                    t.className = "nc-style",
                    t.styleSheet ? t.styleSheet.cssText = e: (t.innerHTML = e, t.appendChild(r.createTextNode(e)));
                    var n = r.getElementsByTagName("script"),
                    a = n[n.length - 1];
                    a.parentNode.insertBefore(t, a)
                }
                var r = document;
                t.exports = {
                    createSheet: a,
                    addCSSRule: o,
                    insertCSS: i
                }
            },
            {}],
            6 : [function(e, t, n) {
                var a = e("../lib/tk"),
                o = {
                    renderTo: "",
                    isEnabled: !0,
                    foreign: 0,
                    cssUrl: !1,
                    uaUrl: "",
                    appkey: "",
                    trans: {},
                    token: a.getNCToken(),
                    elementID: "",
                    audio: !1,
                    timeout: 3e3,
                    times: 1,
                    is_Opt: 0,
                    language: "cn",
                    umidServer: "h",
                    scene: "",
                    is_tbLogin: 0,
                    tb_errMsg: "",
                    glog: .05,
                    callback: function() {},
                    error: function() {},
                    verifycallback: function() {}
                };
                n.default_opt = o
            },
            {
                "../lib/tk": 2
            }],
            7 : [function(e, t, n) {
                "use strict";
                t.exports = {
                    init: "init",
                    ready: "ready",
                    slide_start: "slide_start",
                    slide_end: "slide_end",
                    before_code: "before_code",
                    after_code: "after_code",
                    error300: "error300",
                    fail: "fail",
                    success: "success"
                }
            },
            {}],
            8 : [function(e, t, n) {
                "use strict";
                function a(e, t, n) {
                    var a = o.obj2param({
                        appkey: encodeURIComponent(e),
                        token: encodeURIComponent(t),
                        flag: n
                    });
                    o.send(i + "?cache=" + Math.random() + "&gmkey=evt&gokey=" + encodeURIComponent(a))
                }
                var o = e("./util"),
                i = "//gm.mmstat.com/aq.1.1.3";
                n.log = a
            },
            {
                "./util": 19
            }],
            9 : [function(e, t, n) {
                function a(e, t, n, a) {
                    var i;
                    for (i in a) a.hasOwnProperty(i) && (n[i] = a[i]);
                    var c = n[t];
                    if (c) {
                        e.opt.language = t;
                        var l, d = e.opt.renderTo;
                        d && (l = r.getElementById(d)) && (s.addClass(l, "nc-lang-" + t), o(l, c))
                    }
                }
                function o(e, t) {
                    var n, a, o, i, r = e.getElementsByTagName("*"),
                    c = "data-nc-lang";
                    for (n = 0; n < r.length; n++) a = r[n],
                    o = a.getAttribute(c),
                    o && (i = t[o]) && i && !
                    function(e, t) {
                        setTimeout(function() {
                            e.innerHTML = t.replace(/^\s*<span[^>]*?>|<\/span>\s*$/g, "")
                        },
                        1)
                    } (a, i)
                }
                function i(e, t, n) {
                    window.nc_ex_lang = function(o) {
                        a(e, t, n, o)
                    };
                    var o = "script",
                    i = r.createElement(o);
                    i.charset = "utf-8",
                    i.src = c;
                    var s = r.getElementsByTagName(o)[0];
                    s.parentNode.insertBefore(i, s)
                }
                var r = document,
                c = "//g.alicdn.com/sd/ncpc/lang-ex.js?t=" + Math.floor((new Date).getTime() / 846e5),
                s = e("./util");
                n.loadExLang = i
            },
            {
                "./util": 19
            }],
            10 : [function(e, t, n) {
                var a = {
                    cn: {
                        placeholder: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
                        audioText: "\u83b7\u53d6\u8bed\u97f3\u9a8c\u8bc1\u7801",
                        imgText: "\u83b7\u53d6\u56fe\u7247\u9a8c\u8bc1\u7801",
                        refresh: "\u91cd\u65b0\u83b7\u53d6\u9a8c\u8bc1\u7801",
                        codeError: "\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u5373\u5c06\u64ad\u653e\u4e0b\u4e00\u6bb5",
                        clickPlay: "\u70b9\u51fb\u64ad\u653e\u8bed\u97f3",
                        audioTips: "\u8bf7\u4ed4\u7ec6\u6536\u542c"
                    },
                    en: {
                        placeholder: "enter the code",
                        audioText: "retrieve pass code from the audio",
                        imgText: "retrieve pass code from the image",
                        refresh: "retrieve pass code again",
                        codeError: "Incorrect pass code, please try again",
                        clickPlay: "click to play the audio",
                        audioTips: "please listen carefully"
                    }
                };
                n.language = a
            },
            {}],
            11 : [function(e, t, n) {
                function a(e, t) {
                    var n, a, i = t ? {}: e;
                    for (n in e) e.hasOwnProperty(n) && (a = e[n], "string" == typeof a && (a = [a]), i[n] = '<span class="nc-lang-cnt" data-nc-lang="' + n + '">' + o(u[n], a) + "</span>");
                    return i
                }
                function o(e, t) {
                    return (e + "").replace(/\\?\{\s*([^{}\s]+)\s*\}/g,
                    function(e, n) {
                        return "\\" === e.charAt(0) ? e.slice(1) : t[n] || ""
                    })
                }
                function i(e, t) {
                    var n, o = g[e] = g[e] || {};
                    t = a(t, !0);
                    for (n in t) t.hasOwnProperty(n) && (o[n] = t[n])
                }
                var r, c = "javascript:__nc.reset()",
                s = "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN",
                l = "http://survey.taobao.com/survey/40BtED_K?token=%TOKEN",
                d = "http://survey.taobao.com/survey/Q0dcgfAv?token=%TOKEN",
                p = "{0}",
                u = {
                    _startTEXT: p,
                    _yesTEXT: "<b>{0}</b>",
                    _noTEXT: p,
                    _errorTEXT: p,
                    _errorClickTEXT: p,
                    _errorLOADING: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _errorTooMuch: '{0}<a target="_blank" href="{1}">{2}</a>',
                    _errorTooMuchClick: '{0}<a target="_blank" href="{1}">{2}</a>',
                    _Loading: "<b>{0}</b>",
                    _errorServer: p,
                    _error300: '{0}<a href="{1}">{2}</a>{3}',
                    _errorNetwork: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _infoTEXT: p,
                    _submit: p,
                    _learning: p,
                    _closeHelp: p,
                    _slideToVerify: p,
                    _notVerified: p,
                    _captcha: p,
                    _OK: p,
                    _sthWrong: p,
                    _reload: p,
                    _feedback: p
                },
                g = {
                    cn: {
                        _startTEXT: "\u8bf7\u6309\u4f4f\u6ed1\u5757\uff0c\u62d6\u52a8\u5230\u6700\u53f3\u8fb9",
                        _yesTEXT: "\u9a8c\u8bc1\u901a\u8fc7",
                        _noTEXT: "\u8bf7\u5728\u4e0b\u65b9\u8f93\u5165\u9a8c\u8bc1\u7801",
                        _errorTEXT: "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",
                        _errorClickTEXT: "\u9a8c\u8bc1\u7801\u70b9\u51fb\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5",
                        _errorLOADING: ["\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7", c, "\u70b9\u51fb\u5237\u65b0", "\uff0c\u6216", s, "\u63d0\u4ea4\u53cd\u9988"],
                        _errorTooMuch: ["\u8f93\u5165\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff0c\u6216", s, "\u63d0\u4ea4\u53cd\u9988"],
                        _errorTooMuchClick: ["\u70b9\u51fb\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff0c\u6216", s, "\u63d0\u4ea4\u53cd\u9988"],
                        _Loading: "\u52a0\u8f7d\u4e2d",
                        _errorServer: "\u670d\u52a1\u5668\u9519\u8bef\u6216\u8005\u8d85\u65f6",
                        _error300: ["\u54ce\u5440\uff0c\u51fa\u9519\u4e86\uff0c\u70b9\u51fb", c, "\u5237\u65b0", "\u518d\u6765\u4e00\u6b21"],
                        _errorNetwork: ["\u7f51\u7edc\u4e0d\u7ed9\u529b\uff0c\u8bf7", c, "\u70b9\u51fb\u5237\u65b0", "\uff0c\u6216", s, "\u63d0\u4ea4\u53cd\u9988"],
                        _infoTEXT: "",
                        _submit: "\u63d0\u4ea4",
                        _learning: "\u4e86\u89e3\u65b0\u529f\u80fd",
                        _closeHelp: "\u5173\u95ed\u5e2e\u52a9",
                        _slideToVerify: "\u5411\u53f3\u6ed1\u52a8\u9a8c\u8bc1",
                        _notVerified: "\u9a8c\u8bc1\u672a\u901a\u8fc7",
                        _captcha: "\u9a8c\u8bc1\u7801",
                        _OK: "\u786e\u5b9a",
                        _sthWrong: "\u975e\u5e38\u62b1\u6b49\uff0c\u8fd9\u51fa\u9519\u4e86...",
                        _reload: "\u5237\u65b0",
                        _feedback: "\u53cd\u9988"
                    },
                    tw: {
                        _startTEXT: "\u8acb\u6309\u4f4f\u6ed1\u584a\uff0c\u62d6\u52d5\u5230\u6700\u53f3\u908a",
                        _yesTEXT: "\u9a57\u8b49\u901a\u904e",
                        _noTEXT: "\u8acb\u5728\u4e0b\u65b9\u8f38\u5165\u9a57\u8b49\u78bc",
                        _errorTEXT: "\u9a57\u8b49\u78bc\u8f38\u5165\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165",
                        _errorClickTEXT: "\u9a57\u8b49\u78bc\u9ede\u64ca\u932f\u8aa4\uff0c\u8acb\u91cd\u8a66",
                        _errorLOADING: ["\u52a0\u8f09\u5931\u6557\uff0c\u8acb", c, "\u9ede\u64ca\u5237\u65b0", "\uff0c\u6216", s, "\u63d0\u4ea4\u53cd\u994b"],
                        _errorTooMuch: ["\u8f38\u5165\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165\uff0c\u6216", l, "\u63d0\u4ea4\u53cd\u994b"],
                        _errorTooMuchClick: ["\u9ede\u64ca\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165\uff0c\u6216", l, "\u63d0\u4ea4\u53cd\u994b"],
                        _Loading: "\u52a0\u8f09\u4e2d",
                        _errorServer: "\u670d\u52d9\u5668\u932f\u8aa4\u6216\u8005\u8d85\u6642",
                        _error300: ["\u54ce\u5440\uff0c\u51fa\u932f\u4e86\uff0c\u9ede\u64ca", c, "\u5237\u65b0", "\u518d\u4f86\u58f9\u6b21"],
                        _errorNetwork: ["\u7db2\u7d61\u4e0d\u7d66\u529b\uff0c\u8acb", c, "\u9ede\u64ca\u5237\u65b0", "\uff0c\u6216", l, "\u63d0\u4ea4\u53cd\u994b"],
                        _infoTEXT: "",
                        _submit: "\u63d0\u4ea4",
                        _learning: "\u4e86\u89e3\u65b0\u529f\u80fd",
                        _closeHelp: "\u5173\u95ed\u5e2e\u52a9",
                        _slideToVerify: "\u5411\u53f3\u6ed1\u52d5\u9a57\u8b49",
                        _notVerified: "\u9a57\u8b49\u672a\u901a\u904e",
                        _captcha: "\u9a57\u8b49\u78bc",
                        _OK: "\u78ba\u5b9a",
                        _sthWrong: "\u975e\u5e38\u62b1\u6b49\uff0c\u9019\u51fa\u932f\u4e86...",
                        _reload: "\u5237\u65b0",
                        _feedback: "\u53cd\u994b"
                    },
                    en: {
                        _startTEXT: "Please slide to verify",
                        _yesTEXT: "Verified",
                        _noTEXT: "Please input verification code",
                        _errorTEXT: "Please try again",
                        _errorClickTEXT: "Please try again",
                        _errorLOADING: ["Loading failed, ", c, "refresh", " or ", d, "provide feedback"],
                        _errorTooMuch: ["Please try again or ", d, "provide feedback"],
                        _errorTooMuchClick: ["Please try again or ", d, "provide feedback"],
                        _errorServer: "Server Error",
                        _Loading: "Loading",
                        _error300: ["Oops... something's wrong. Please ", c, "refresh", " and try again."],
                        _errorNetwork: ["Net Err. Please ", c, "refresh", ", or ", d, "feedback"],
                        _infoTEXT: "",
                        _submit: "Submit",
                        _learning: "help",
                        _closeHelp: "Close",
                        _slideToVerify: "slide to verify",
                        _notVerified: "Not Verified",
                        _captcha: "Captcha",
                        _OK: "OK",
                        _sthWrong: "Sorry, something wrong....",
                        _reload: "Reload",
                        _feedback: "Feedback"
                    }
                };
                for (r in g) g.hasOwnProperty(r) && a(g[r]);
                g.zh_CN = g.cn,
                g.zh_TW = g.tw,
                g.en_US = g.en,
                n.language = g,
                n.upLang = i
            },
            {}],
            12 : [function(require, module, exports) {
                function report(e) {
                    win.console && void 0;
                    var t = "//gm.mmstat.com/jstracker.2",
                    n = util.obj2param({
                        type: "9",
                        id: "jstracker",
                        v: "1",
                        nick: "",
                        islogin: "",
                        msg: e,
                        file: "",
                        ua: "",
                        line: "",
                        scrolltop: "",
                        screen: "",
                        t: +new Date
                    });
                    util.send(t + "?" + n)
                }
                function makeNoCaptcha(module_nc, opt, inn_vars, nc_events) {
                    function showError(e) {
                        var t;
                        t = e ? language[opt.language]._errorNetwork: language[opt.language]._errorLOADING,
                        t = t.replace("%TOKEN", opt.token),
                        _.id(opt.renderTo).innerHTML = '<div class="errloading">' + t + "</div>",
                        inn_vars.el_render_to && util.removeClass(inn_vars.el_render_to, "show-click-captcha")
                    }
                    function getOffset(e) {
                        var t = e.target;
                        void 0 === t.offsetLeft && (t = t.parentNode);
                        var n = getPageCoord(t),
                        a = {
                            x: win.pageXOffset + e.clientX,
                            y: win.pageYOffset + e.clientY
                        };
                        return {
                            offsetX: a.x - n.x,
                            offsetY: a.y - n.y
                        }
                    }
                    function getPageCoord(e) {
                        for (var t = {
                            x: 0,
                            y: 0
                        }; e;) t.x += e.offsetLeft,
                        t.y += e.offsetTop,
                        e = e.offsetParent;
                        return t
                    }
                    function onNCEvent(e) {
                        var t = {};
                        t[event_names.init] = 1,
                        t[event_names.ready] = 1,
                        t[event_names.slide_start] = 1,
                        t[event_names.slide_end] = 1,
                        t[event_names.fail] = 1;
                        var n = opt.glog;
                        "boolean" != typeof _b_glog && (_b_glog = n && "number" == typeof n && Math.random() < n),
                        _b_glog && t[e] && glog.log(opt.appkey, opt.token, e);
                        var a = nc_events[e];
                        if (a && a.length) {
                            var o, i = [];
                            for (o = 1; o < arguments.length; o++) i.push(arguments[o]);
                            for (o = 0; o < a.length; o++) a[o].apply(null, i)
                        }
                    }
                    function NoCaptcha() {}
                    var _ = new BaseFun(opt, util.obj2param),
                    showHelp = makeShowHelp(opt, _),
                    Scale = makeScale(opt, _, inn_vars, onNCEvent);
                    return NoCaptcha.prototype = {
                        init: function(e) {
                            win.__nc = this,
                            module_nc.nc = this,
                            this.on = module_nc.on;
                            var t = "en";
                            e.foreign && (default_opt.language = t),
                            _.objUpdate(opt, default_opt),
                            _.objUpdate(opt, e),
                            this.opt = opt,
                            language[opt.language] || (loadExLang(this, opt.language, language), opt.language = t),
                            inn_vars.render_to = opt.renderTo,
                            inn_vars.render_to && (inn_vars.el_render_to = _.id(inn_vars.render_to)),
                            inn_vars.el_render_to && util.addClass(inn_vars.el_render_to, "nc-container"),
                            this.updateWidth(opt.customWidth),
                            opt.is_tbLogin && (tb_login = require("./tb_login")),
                            ajaxURL = URL_MAP[opt.foreign] || URL_MAP[0],
                            ajaxURL.uab_Url = opt.uaUrl || ajaxURL.uab_Url;
                            var n;
                            opt.renderTo && opt.appkey && opt.token && (n = _.id(opt.renderTo), n && (n.innerHTML = '<div id="nocaptcha"><div id="_n1t_loading" class="nc_scale"><div id="_bg" class=" " style="width: 0;"></div><div id="_scale_text_loading" class="scale_text">' + language[opt.language]._Loading + "</div></div></div>"), "undefined" == typeof win.acjs ? this.inituab() : (UA_Opt.LogVal = "_n", this.initUaParam(), UA_Opt.Token = (new Date).getTime() + ":" + opt.token, UA_Opt.reload && UA_Opt.reload()), this.afterUA()),
                            onNCEvent(event_names.init)
                        },
                        updateWidth: function(e, t) {
                            if (e) {
                                var n, a, o = typeof e;
                                "number" == o ? n = e: a = "string" == o ? _.id(e) : e,
                                a && (n = a.offsetWidth),
                                n && (this.c_width = n, this.__is_c_width_setted = 1, this.try2setWidth("_n1t"), this.updateCSS(n, t))
                            }
                        },
                        updateCSS: function(e, t) {
                            var n = util.isIEX(6),
                            a = util.isIEX(7),
                            o = n || a ? " !important": "";
                            css.insertCSS((t ? "": ".nc-container .nc_scale,.nc-container.tb-login .nc_scale{width:" + e + "px}\n") + [".nc-container #imgCaptcha", ".nc-container #clickCaptcha"].join(",") + "{width:" + (e - 2) + "px" + o + ";}\n" + [".nc-container.tb-login #imgCaptcha", ".nc-container.tb-login #clickCaptcha"].join(",") + "{width:" + e + "px" + o + ";}\n" + [".nc-container.tb-login #imgCaptcha .captcha-error", ".nc-container.tb-login #clickCaptcha .captcha-error"].join(",") + "{width:" + (e - 8) + "px" + o + ";}\n.nc-container.tb-login .errloading, .nc-container .errloading {width:" + (e - 10) + "px;}")
                        },
                        try2setWidth: function(e, t) {
                            "string" == typeof e && (e = _.id(e)),
                            t = t || this.c_width || (inn_vars.el_render_to ? inn_vars.el_render_to.offsetWidth: 0),
                            t && e && e.style && (e.style.width = t + "px")
                        },
                        inituab: function() {
                            UA_Opt.LogVal = "_n",
                            this.initUaParam(),
                            UA_Opt.Token = (new Date).getTime() + ":" + opt.token,
                            _.loadjs(util.addHourStamp(ajaxURL.uab_Url),
                            function() {
                                try {
                                    UA_Opt.reload()
                                } catch(e) {
                                    report("uab die")
                                }
                            })
                        },
                        initUaParam: function() {
                            function e(e, t) {
                                UA_Opt[e] = "undefined" != typeof UA_Opt[e] && UA_Opt[e] > 0 ? UA_Opt[e] : t
                            }
                            opt.is_Opt ? (e("MPInterval", 4), e("MaxMCLog", 12), e("MaxKSLog", 14), e("MaxMPLog", 5), e("MaxFocusLog", 6), e("SendInterval", 5), e("SendMethod", 8), e("GPInterval", 50), e("MaxGPLog", 1), e("MaxTCLog", 12), e("Flag", 882894)) : (UA_Opt.SendInterval = 5, UA_Opt.SendMethod = 8, UA_Opt.MaxMCLog = 12, UA_Opt.MaxKSLog = 14, UA_Opt.MaxMPLog = 5, UA_Opt.MaxGPLog = 1, UA_Opt.MaxTCLog = 12, UA_Opt.GPInterval = 50, UA_Opt.MPInterval = 4, UA_Opt.MaxFocusLog = 6, UA_Opt.isSendError = 1, UA_Opt.Flag = 882894)
                        },
                        afterUA: function() {
                            "undefined" == typeof umx ? this.initUM() : this.afterUM()
                        },
                        initUM: function() {
                            var e = this;
                            _.loadjs(ajaxURL.umid_Url,
                            function(t) {
                                try {
                                    if (t) {
                                        if (--default_opt.times > 0) return void setTimeout(function() {
                                            e.initUM()
                                        },
                                        500);
                                        report("initUM")
                                    }
                                    var n = document.getElementById("_umfp"),
                                    a = (new Date).getTime();
                                    umx.init({
                                        timeout: opt.timeout,
                                        timestamp: a,
                                        token: opt.token,
                                        serviceUrl: ajaxURL.umid_serUrl,
                                        appName: opt.appkey,
                                        containers: {
                                            flash: n,
                                            dcp: n
                                        }
                                    })
                                } catch(o) {
                                    report("umx die")
                                }
                                e.afterUM()
                            })
                        },
                        afterUM: function() {
                            function e() { (umx.getStatus() && win.__acjs || n++>50) && (t.reload(), clearInterval(a))
                            }
                            if (!win.__nc_afterUM) {
                                win.__nc_afterUM = !0;
                                var t = this;
                                if ("undefined" == typeof umx) return report("afterUM"),
                                void t.reload();
                                var n = 0,
                                a = setInterval(e, 100);
                                e(),
                                onNCEvent(event_names.ready)
                            }
                        },
                        __reload_voicebtn: function() {
                            var e, t = _.id("_voicebtn");
                            t.onclick = function() {
                                var t = _.id("_nc_voice");
                                return _.id("imgCaptcha").style.display = "none",
                                e ? (e = !1, t.style.display = "none", void(objCheckCode && objCheckCode.stopAudio())) : (e = !0, t.style.display = "block", objCheckCode && (objCheckCode.resetPlayer({
                                    state: "end"
                                }), objCheckCode.switchCode({
                                    type: "audio"
                                })), void _.jsonp({
                                    url: ajaxURL.analyze,
                                    callback: "callback",
                                    data: {
                                        a: opt.appkey,
                                        t: opt.token,
                                        n: win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                        _a: "audio",
                                        p: "{}",
                                        lang: opt.language,
                                        v: inn_vars.v
                                    },
                                    success: function(n) {
                                        if (e) {
                                            var a = n.result;
                                            a && (objCheckCode || (objCheckCode = new clsCheckCode({
                                                type: "150_40",
                                                identity: "REGISTER",
                                                sessionid: a.csessionid,
                                                element: t,
                                                codeType: "audio",
                                                lang: opt.language
                                            }), objCheckCode.check(function(e) {
                                                "success" != e.message && (objCheckCode.playErrAudio(), setTimeout(function() {
                                                    _.id("omeo-refresh-audio").click()
                                                },
                                                5e3)),
                                                "success" == e.message && _.jsonp({
                                                    url: ajaxURL.checkcode,
                                                    callback: "callback",
                                                    data: {
                                                        csessionid: a.csessionid,
                                                        checkcode: function() {
                                                            var e = {};
                                                            return e.code = objCheckCode.cache.lastCheckCode,
                                                            _.obj2str(e)
                                                        } (),
                                                        a: opt.appkey,
                                                        t: opt.token,
                                                        n: win._n || "",
                                                        p: "{}",
                                                        r: Math.random(),
                                                        lang: opt.language,
                                                        v: inn_vars.v
                                                    },
                                                    success: function(e) {
                                                        if (e.success) if (100 == e.result.code) __nc.userCallback(objCheckCode.config.sessionid, e.result.value, e.result.sig);
                                                        else if (900 == e.result.code) {
                                                            UA_Opt.reload && UA_Opt.reload();
                                                            var t = _.id("_captcha_text"),
                                                            n = language[opt.language]._errorClickTEXT; ++gErrTimes > MAX_ERR_TIME && (n = language[opt.language]._errorTooMuch.replace("%TOKEN", opt.token)),
                                                            t.innerHTML = n,
                                                            t.style.visibility = "visible"
                                                        } else(300 == e.result.code || 69634 == e.result.code) && (report("block"), _.id(opt.renderTo).innerHTML = '<div class="errloading">' + language[opt.language]._error300 + "</div>", onNCEvent(event_names.error300));
                                                        else __nc.errorCallback()
                                                    },
                                                    fail: function(e) {
                                                        __nc.errorCallback(e)
                                                    }
                                                })
                                            }), objCheckCode.render(), objCheckCode.switchCode({
                                                type: "audio"
                                            })))
                                        }
                                    },
                                    fail: function() {
                                        e && report("audio fail")
                                    }
                                }))
                            }
                        },
                        reload: function() {
                            var e = _.id(opt.renderTo);
                            e && (e.innerHTML = tpl),
                            opt.audio && (_.id("_voicebtn").style.display = "block"),
                            tb_login && tb_login.init(inn_vars.render_to, inn_vars.el_render_to, opt.customFloatHeight),
                            this.__reload_voicebtn();
                            var t = _.id("_helpbtn");
                            t && (navigator.userAgent.indexOf("MSIE 6.0") >= 0 && (t.style.display = "none"), t.innerHTML = language[opt.language]._learning, t.onclick = function() {
                                setTimeout(showHelp, 100)
                            }),
                            TEXTELEM = _.tag(scale_bar + " div")[1],
                            inn_vars.TEXTELEM = TEXTELEM,
                            opt.isEnabled && new Scale(scale_btn, scale_bar, this)
                        },
                        reset: function() {
                            win.__nc_afterUM = !1,
                            win.UA_Opt && (UA_Opt.Token = (new Date).getTime() + ":" + opt.token),
                            opt.renderTo && opt.appkey && opt.token && (_.id(opt.renderTo).innerHTML = '<div id="nocaptcha"><div id="_n1t_loading" class="nc_scale"><div id="_bg" class=" " style="width: 0;"></div><div id="_scale_text_loading" class="scale_text">' + language[opt.language]._Loading + "</div></div></div>", "undefined" == typeof win.acjs ? this.loaduab() : (UA_Opt.LogVal = "_n", this.initUaParam(), UA_Opt.Token = (new Date).getTime() + ":" + opt.token, UA_Opt.reload && UA_Opt.reload()), this.afterUA())
                        },
                        show: function() {
                            inn_vars.el_render_to && (inn_vars.el_render_to.style.display = "block", tb_login && tb_login.adjustPosition(opt.customFloatHeight), __nc.is_show = !0)
                        },
                        hide: function() {
                            inn_vars.el_render_to && (inn_vars.el_render_to.style.display = "none", __nc.is_show = !1)
                        },
                        loaduab: function() {
                            UA_Opt.LogVal = "_n",
                            this.initUaParam(),
                            UA_Opt.Token = (new Date).getTime() + ":" + opt.token,
                            _.loadjs(util.addHourStamp(ajaxURL.uab_Url),
                            function(e) {
                                e && report("loaduab"),
                                UA_Opt.reload && UA_Opt.reload()
                            })
                        },
                        enabled: function() {
                            return new Scale(scale_btn, scale_bar, this)
                        },
                        errorCallback: function(e) {
                            var t = _.id(scale_bar),
                            n = this,
                            a = t.getElementsByTagName("span"),
                            o = t.getElementsByTagName("div");
                            if (onNCEvent(event_names.fail), 0 !== a.length && 0 !== o.length) {
                                var i = a[0],
                                r = o[0];
                                showError(e),
                                util.addClass(r, "orange"),
                                util.addClass(i, "reload"),
                                _.addHandler(t, "click",
                                function() {
                                    UA_Opt.Token = (new Date).getTime() + ":" + opt.token,
                                    UA_Opt.reload && UA_Opt.reload(),
                                    n.reload(),
                                    _.removeEvt(t, "click")
                                }),
                                e && opt.error && opt.error(language[opt.language]._errorServer)
                            }
                        },
                        onScaleReady: function(elem) {
                            var trans = opt.trans || {};
                            "string" == typeof trans && (trans = eval("0," + trans));
                            for (var arr = opt.elementID || [], i = 0; i < arr.length; i++) {
                                var id = arr[i],
                                el = doc.getElementById(id);
                                el && (trans[id] = el.value)
                            }
                            var me = this;
                            TEXTELEM.innerHTML = language[opt.language]._Loading,
                            util.addClass(TEXTELEM, "scale_text2"),
                            _.jsonp({
                                url: ajaxURL.analyze,
                                callback: "callback",
                                data: {
                                    a: opt.appkey,
                                    t: opt.token,
                                    n: win[UA_Opt.LogVal || "_n"] || "",
                                    p: _.obj2str(trans),
                                    scene: opt.scene || (inn_vars.has_pointman ? pointman.config.common.scene: "") || "",
                                    asyn: 0,
                                    lang: opt.language,
                                    v: inn_vars.v
                                },
                                success: function(e) {
                                    me.onScaleReadyCallback(e, elem)
                                },
                                fail: function(e) {
                                    report("onScaleReady"),
                                    me.errorCallback(e)
                                }
                            })
                        },
                        onScaleReadyCallback: function(e, t) {
                            if (e.success) {
                                var n = e.result,
                                a = n.code;
                                0 === a ? (_.id(scale_btn).className = "btnok", TEXTELEM.innerHTML = language[opt.language]._yesTEXT, util.removeClass(t.btn.parentNode, "nc_err"), this.userCallback(n.csessionid, "pass", n.value)) : (UA_Opt.reload && (UA_Opt.Token = (new Date).getTime() + ":" + opt.token, UA_Opt.reload && UA_Opt.reload()), util.addClass(t.btn, "btnok2"), util.addClass(t.btn.parentNode, "nc_err"), t.bar = _.tag(scale_bar + " div")[0], TEXTELEM.innerHTML = language[opt.language]._Loading, "function" == typeof opt.verifycallback && 300 != a && opt.verifycallback(n), 100 == a ? this.onScale100(n.csessionid, n.value) : 200 == a ? this.onScale200(n.csessionid, n.value) : (300 == a || 69634 == a) && (report("block"), _.id(opt.renderTo).innerHTML = '<div class="errloading">' + language[opt.language]._error300 + "</div>", onNCEvent(event_names.error300)))
                            } else this.errorCallback()
                        },
                        onScale100: function(e, t, n) {
                            var a = arguments.callee,
                            o = n || this,
                            i = _.tag("clickCaptcha div");
                            a.caller == this.onScaleReadyCallback && _.addHandler(_.id("_btn_2"), "click",
                            function() {
                                a.call(o, e, t)
                            });
                            var r, c = setTimeout(function() {
                                c = -1,
                                r || (showError(!0), report("captcha timeout"))
                            },
                            5e3);
                            onNCEvent(event_names.before_code),
                            _.jsonp({
                                url: ajaxURL.get_captcha,
                                callback: "callback",
                                data: {
                                    sessionid: e,
                                    identity: opt.appkey,
                                    style: t,
                                    lang: opt.language,
                                    v: inn_vars.v
                                },
                                success: function(n) {
                                    if (n.questiontext && (n.questiontext = n.questiontext.replace(/<span[^>]+?>/g, "<i>"), n.questiontext = n.questiontext.replace(/<\/span[^>]*?>/g, "</i>")), r = !0, -1 != c) {
                                        if (clearTimeout(c), !n.tag) return report("no tag"),
                                        void showError(!0);
                                        var s = _.id("clickCaptcha");
                                        s && (s.style.display = "block", o.__is_c_width_setted || o.updateWidth(_.id("_n1t"), 1)),
                                        n.imgurl = n.imgurl.replace("pin.aliyun.com", "pin2.aliyun.com"),
                                        inn_vars.el_render_to && util.addClass(inn_vars.el_render_to, "show-click-captcha");
                                        var l = n.imgurl.split("?")[1].split("=")[1],
                                        d = n.questiontext.split(n.tag[0]),
                                        p = d.shift();
                                        _.id("_scale_text") && ( - 1 == n.questiontext.indexOf("<i>") ? _.id("_scale_text").innerHTML = p + "<i>\u201c" + n.tag[0] + "\u201d</i>" + d.join(n.tag[0]) : _.id("_scale_text").innerHTML = n.questiontext),
                                        tb_login && tb_login.getInform(_.id("clickCaptcha"), module_nc.nc),
                                        i[1].innerHTML = '<img src="' + n.imgurl + '" >';
                                        var u, g = i[1].getElementsByTagName("img")[0];
                                        g.onload = function() {
                                            u = !0,
                                            -1 != f && clearTimeout(f)
                                        },
                                        g.onerror = function() {
                                            report("captcha onerror"),
                                            showError()
                                        };
                                        var f = setTimeout(function() {
                                            f = -1,
                                            u || (showError(!0), report("captcha timeout"))
                                        },
                                        5e3);
                                        _.addHandler(g, "click",
                                        function(n) {
                                            TEXTELEM.innerHTML = language[opt.language]._Loading,
                                            _.jsonp({
                                                url: ajaxURL.checkcode,
                                                callback: "callback",
                                                data: {
                                                    csessionid: e,
                                                    checkcode: function() {
                                                        var e = {};
                                                        return e.imgid = l,
                                                        e.w = g.width.toString(),
                                                        e.h = g.height.toString(),
                                                        e.x = void 0 === n.offsetX ? getOffset(n).offsetX: n.offsetX,
                                                        e.y = void 0 === n.offsetY ? getOffset(n).offsetY: n.offsetY,
                                                        e.x = parseInt(e.x).toString(),
                                                        e.y = parseInt(e.y).toString(),
                                                        _.obj2str(e)
                                                    } (),
                                                    a: opt.appkey,
                                                    t: opt.token,
                                                    n: win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                                    p: "{}",
                                                    r: Math.random(),
                                                    lang: opt.language,
                                                    v: inn_vars.v
                                                },
                                                success: function(n) {
                                                    var i = _.id(scale_btn);
                                                    if (n.success) if (100 == n.result.code) i.className = "btnok",
                                                    _.tag(scale_bar + " div")[0].className = "",
                                                    TEXTELEM.innerHTML = language[opt.language]._yesTEXT,
                                                    util.removeClass(i.parentNode, "nc_err"),
                                                    _.toggle("clickCaptcha"),
                                                    inn_vars.el_render_to && util.removeClass(inn_vars.el_render_to, "show-click-captcha"),
                                                    o.userCallback && o.userCallback(e, t, n.result.sig);
                                                    else if (900 == n.result.code) {
                                                        UA_Opt.reload && UA_Opt.reload(),
                                                        a(e, t, o);
                                                        var r = _.id("_captcha_text"),
                                                        c = language[opt.language]._errorClickTEXT; ++gErrTimes > MAX_ERR_TIME && (c = language[opt.language]._errorTooMuchClick.replace("%TOKEN", opt.token)),
                                                        r.innerHTML = c,
                                                        r.style.visibility = "visible"
                                                    } else(300 == n.result.code || 69634 == n.result.code) && (report("block"), _.id(opt.renderTo).innerHTML = '<div class="errloading">' + language[opt.language]._error300 + "</div>", onNCEvent(event_names.error300));
                                                    else o.errorCallback()
                                                },
                                                fail: function(e) {
                                                    o.errorCallback(e)
                                                }
                                            })
                                        }),
                                        onNCEvent(event_names.after_code)
                                    }
                                },
                                fail: function() {
                                    _.id(opt.renderTo).innerHTML = '<div class="errloading">' + language[opt.language]._errorLOADING + "</div>",
                                    o.errorCallback(!0)
                                }
                            })
                        },
                        onScale200: function(e, t) {
                            function n() {
                                var n = _.tag("imgCaptcha input")[0].value;
                                n && _.jsonp({
                                    url: ajaxURL.checkcode,
                                    callback: "callback",
                                    data: {
                                        csessionid: e,
                                        checkcode: function() {
                                            var e = {};
                                            return e.code = n,
                                            _.obj2str(e)
                                        } (),
                                        a: opt.appkey,
                                        t: opt.token,
                                        n: win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                        p: "{}",
                                        lang: opt.language,
                                        v: inn_vars.v
                                    },
                                    success: function(n) {
                                        if (n.success) {
                                            var a = _.id(scale_btn),
                                            r = _.tag("imgCaptcha div")[2];
                                            if (100 == n.result.code) a.className = "btnok",
                                            _.tag(scale_bar + " div")[0].className = "",
                                            TEXTELEM.innerHTML = language[opt.language]._yesTEXT,
                                            util.removeClass(a.parentNode, "nc_err"),
                                            r.style.borderTopColor = "#e5e5e5",
                                            _.toggle("imgCaptcha"),
                                            i.userCallback.call(this, e, t, n.result.sig);
                                            else if (900 == n.result.code) {
                                                UA_Opt.reload && UA_Opt.reload(),
                                                o.call(i, e, t);
                                                var c = language[opt.language]._errorTEXT; ++gErrTimes > MAX_ERR_TIME && (c = language[opt.language]._errorTooMuch.replace("%TOKEN", opt.token));
                                                var s = _.id("_captcha_img_text");
                                                s.innerHTML = c,
                                                s.style.display = "block",
                                                r.style.borderTopColor = "red"
                                            } else(300 == n.result.code || 69634 == n.result.code) && (report("block"), _.id(opt.renderTo).innerHTML = '<div class="errloading">' + language[opt.language]._error300 + "</div>", onNCEvent(event_names.error300))
                                        } else i.errorCallback()
                                    },
                                    fail: function(e) {
                                        i.errorCallback(e)
                                    }
                                })
                            }
                            onNCEvent(event_names.before_code);
                            var a = _.id("imgCaptcha");
                            a && (a.style.display = "block", this.__is_c_width_setted || this.updateWidth(_.id("_n1t"), 1));
                            var o = arguments.callee,
                            i = this,
                            r = _.tag("imgCaptcha div"),
                            c = ajaxURL.get_img + "?type=" + t + "&identity=" + opt.appkey + "&sessionid=" + e + "&r=" + Math.random();
                            r[1].innerHTML = '<img src="' + c + '" >';
                            var s = r[1].getElementsByTagName("img")[0];
                            _.addHandler(s, "click",
                            function() {
                                o.call(i, e, t)
                            }),
                            TEXTELEM.innerHTML = language[opt.language]._noTEXT,
                            tb_login && tb_login.getInform(_.id("imgCaptcha"), module_nc.nc),
                            _.id("scale_submit").innerHTML = language[opt.language]._submit;
                            var l;
                            arguments.callee.caller === this.onScaleReadyCallback && (_.addHandler(_.id("scale_submit"), "click", n), _.addHandler(_.id("_btn_2"), "click",
                            function() {
                                o.call(this, e, t)
                            }), l = _.id("imgCaptcha"), l && (l = l.getElementsByTagName("input")[0]) && _.addHandler(l, "keydown",
                            function(e) {
                                return e = e || window.event,
                                13 == e.keyCode || 13 == e.which ? (n(), e.preventDefault ? e.preventDefault() : window.event.returnValue = !1, !1) : void 0
                            })),
                            onNCEvent(event_names.after_code)
                        },
                        userCallback: function(e, t, n) {
                            var a = {
                                csessionid: e || null,
                                value: t || null,
                                sig: n || null,
                                token: opt.token || ""
                            };
                            opt.callback.call(this, a),
                            onNCEvent(event_names.success, a)
                        },
                        upLang: function(e, t) {
                            return upLang(e, t)
                        }
                    },
                    NoCaptcha
                }
                var win = window,
                doc = document,
                tb_login, util = require("./util"),
                URL_MAP = require("./url_map").URL_MAP,
                language = require("./language-core").language,
                upLang = require("./language-core").upLang,
                loadExLang = require("./lang_util").loadExLang,
                tpl = require("./tpl").tpl,
                m_checkcode = require("./checkcode"),
                clsCheckCode = m_checkcode.init(),
                makeShowHelp = require("./show_help").makeShowHelp,
                makeScale = require("./scale").makeScale,
                default_opt = require("./default_opt").default_opt,
                BaseFun = require("./base_fn").BaseFun,
                css = require("./css"),
                glog = require("./glog"),
                objCheckCode,
                MAX_ERR_TIME = 3,
                gErrTimes = 0,
                scale_btn = "_n1z",
                scale_bar = "_n1t",
                TEXTELEM,
                ajaxURL,
                _b_glog,
                event_names = require("./event_name");
                exports.makeNoCaptcha = makeNoCaptcha
            },
            {
                "./base_fn": 3,
                "./checkcode": 4,
                "./css": 5,
                "./default_opt": 6,
                "./event_name": 7,
                "./glog": 8,
                "./lang_util": 9,
                "./language-core": 11,
                "./scale": 14,
                "./show_help": 15,
                "./tb_login": 16,
                "./tpl": 17,
                "./url_map": 18,
                "./util": 19
            }],
            13 : [function(e, t, n) {
                function a(e) {
                    var t;
                    e && (t = e.filename + "") && (t = t.split("?")[0], t.match(/(\/ncpc\/nc\.js$)|(\/uab\.js$)|(umscript.*\/um\.js$)/) && (i.console && void 0, o()))
                }
                function o(e) {
                    "function" == typeof ncDowngrade ? (ncDowngrade(), e && i.__nc && i.__nc.show()) : e || setTimeout(function() {
                        o(1)
                    },
                    100)
                }
                var i = window;
                i.addEventListener ? i.addEventListener("error", a, !0) : i.attachEvent && i.attachEvent("onerror", a)
            },
            {}],
            14 : [function(e, t, n) {
                function a() {
                    var e = navigator.userAgent;
                    return /Firefox|MSIE/.test(e) ? !1 : !0
                }
                function o(e, t, n, o) {
                    function d(t, o, i) {
                        n.TEXTELEM && (n.TEXTELEM.innerHTML = s[e.language]._startTEXT, a() && c.addClass(n.TEXTELEM, "slidetounlock")),
                        this.btn = r.getElementById(t),
                        this.bar = r.getElementById(o),
                        this.txt = r.getElementById("_scale_text"),
                        this.step = this.bar.getElementsByTagName("DIV")[0],
                        this.init(i)
                    }
                    return d.prototype = {
                        init: function(e) {
                            function n(n) {
                                function i() {
                                    s.btn.onmousedown = null,
                                    s.txt.onmousedown = null,
                                    t.removeEvt(d, "mousemove", r),
                                    t.removeEvt(d, "mouseup", g),
                                    t.removeEvt(d, "touchmove", f),
                                    t.removeEvt(d, "touchend", _),
                                    t.removeEvt(s.btn, "touchstart", a),
                                    t.removeEvt(s.txt, "touchstart", a);
                                    var n = {};
                                    n.btn = s.btn,
                                    n.bar = s.bar.childNodes[1],
                                    e.onScaleReady(n),
                                    o(l.slide_end)
                                }
                                function r(e) {
                                    h || (o(l.slide_start), h = !0);
                                    var t = (e || p.event).clientX,
                                    n = u.min(b, u.max( - 2, y + (t - m)));
                                    s.btn.style.left = n + "px",
                                    s.ondrag(u.round(100 * u.max(0, n / b)), n);
                                    var a = k + s.bar.offsetWidth;
                                    if (t >= a && (b > n || b > t - y)) return void g.call(this);
                                    var r = c.getClientRect(s.btn).left; (n == b || t - r - v == b) && i()
                                }
                                function g() {
                                    var e = parseInt(s.btn.style.left);
                                    b > e && (c.addClass(s.btn, "button_move"), c.addClass(t.id("_bg"), "bg_move"), s.btn.style.left = "0px", s.ondrag(0, 0), setTimeout(function() {
                                        c.removeClass(s.btn, "button_move"),
                                        c.removeClass(t.id("_bg"), "bg_move")
                                    },
                                    500)),
                                    t.removeEvt(this, "touchmove", f),
                                    t.removeEvt(d, "touchmove", f),
                                    t.removeEvt(d, "mousemove", r),
                                    t.removeEvt(d, "mouseup", g)
                                }
                                function _(e) {
                                    g.call(this, e.touches[0])
                                }
                                function f(e) {
                                    e.preventDefault(),
                                    r.call(this, e.touches[0])
                                }
                                var h = !1,
                                m = (n || p.event).clientX,
                                v = s.btn.offsetWidth,
                                b = s.bar.offsetWidth - v,
                                y = s.btn.offsetLeft,
                                k = c.getClientRect(s.bar).left;
                                t.addHandler(d, "mousemove", r),
                                t.addHandler(d, "mouseup", g),
                                t.addHandler(d, "touchmove", f),
                                t.addHandler(d, "touchend", _)
                            }
                            function a(e) {
                                e.preventDefault(),
                                n.call(this, e.touches[0])
                            }
                            var s = this,
                            d = r,
                            p = i,
                            u = Math;
                            s.btn.onmousedown = n,
                            s.txt.onmousedown = n,
                            t.addHandler(s.btn, "touchstart", a),
                            t.addHandler(s.txt, "touchstart", a),
                            s.bar.onselectstart = function() {
                                return ! 1
                            }
                        },
                        ondrag: function(e, t) {
                            this.step.style.width = Math.max(0, t) + "px"
                        },
                        text: function() {}
                    },
                    d
                }
                var i = window,
                r = document,
                c = e("./util"),
                s = e("./language-core").language,
                l = e("./event_name");
                n.makeScale = o
            },
            {
                "./event_name": 7,
                "./language-core": 11,
                "./util": 19
            }],
            15 : [function(e, t, n) {
                function a(e, t) {
                    function n() {
                        r || (r = a()),
                        r()
                    }
                    function a() {
                        function n() {
                            var e = o.createElement("div");
                            return e.innerHTML = r,
                            e.firstChild
                        }
                        function a() {
                            function n() {
                                var t = 0,
                                n = 260,
                                a = setInterval(function() {
                                    t += 5,
                                    t > n ? (p.innerHTML = i[e.language]._Loading, t > n + 100 && (p.innerHTML = i[e.language]._yesTEXT, clearInterval(a), setTimeout(function() {
                                        u.click()
                                    },
                                    2e3))) : (g.style.left = s + 20 + t + "px", d.style.left = t + "px", p.style.width = t + "px")
                                },
                                16)
                            }
                            p.innerHTML = "",
                            c.style.display = "block";
                            var a = t.id(e.renderTo),
                            r = a.getBoundingClientRect(),
                            s = r.left,
                            _ = r.top + 20 + o.body.scrollTop;
                            l.style.left = s + "px",
                            l.style.top = _ + "px",
                            d.style.left = s - 10 + "px",
                            g.style.left = s + 20 + "px",
                            g.style.top = _ + 20 + "px",
                            u.style.left = s + 200 + "px",
                            u.style.top = _ + 90 + "px",
                            n()
                        }
                        var r = '<div id="nc_help"><div class="mask"></div><div id="_slide_box" class="nc_scale"><div id="_slide_button"></div><div id="_slide_text" class="scale_text"></div><div id="_slide_bg"></div></div><div id="_btn_close"></div><div id="_hand"></div>',
                        c = n(r);
                        o.body.appendChild(c),
                        c.style.display = "none",
                        c.style.width = o.body.scrollWidth + "px",
                        c.style.height = o.body.scrollHeight + "px";
                        var s = t.id("_slide_text");
                        s.innerHTML = i[e.language]._startTEXT;
                        var l = t.id("_slide_box"),
                        d = t.id("_slide_button"),
                        p = t.id("_slide_bg"),
                        u = t.id("_btn_close"),
                        g = t.id("_hand");
                        return u.innerHTML = i[e.language]._closeHelp,
                        u.onclick = function() {
                            c.style.display = "none"
                        },
                        a
                    }
                    var r;
                    return n
                }
                var o = document,
                i = e("./language-core").language;
                n.makeShowHelp = a
            },
            {
                "./language-core": 11
            }],
            16 : [function(e, t, n) {
                function a(e) {
                    return f.getElementById(e)
                }
                function o(e) {
                    if (!e) return 0;
                    for (var t = e.offsetTop,
                    n = e.offsetParent; n;) t += n.offsetTop,
                    n = n.offsetParent;
                    return t
                }
                function i(e, t) {
                    var n, a, o, i = e.getElementsByTagName("div");
                    for (n = 0; n < i.length; n++) if (a = i[n], o = a.className, o && o.indexOf(t) > -1) return a;
                    return null
                }
                function r(e) {
                    var t = a("_scale_text"),
                    n = i(e, "captcha-error");
                    n || (n = f.createElement("div"), n.className = "captcha-error login-msg error", e.appendChild(n)),
                    n.innerHTML = ["<i class='nc-iconfont'>&#xe601;</i>", "<p class='error'>", t.innerHTML, "</p>"].join("")
                }
                function c(e, t) {
                    var n = e.className;
                    n.match(new RegExp("(^|\\s)" + t + "(\\s|$)")) || (e.className = (e.className + " " + t).replace(/^\s+|\s+$/g, ""))
                }
                function s() {
                    var e = 0,
                    t = a("J_Message");
                    return t && (e = t.offsetHeight),
                    e
                }
                function l() {
                    s() > 0 && _ && c(_, "nc-tm-min-fix")
                }
                function d(e) {
                    if (_) {
                        var t;
                        m && (t = a("_btn_1")) && (t.style.position = "absolute", t.style.top = "77px", t.style.right = "0");
                        var n = _.className || "",
                        i = "tb-login"; - 1 == n.indexOf(i) && (_.className = (n + " " + i).replace(/^\s+|\s+$/g, "")),
                        _.className.match(/\bnc-old-login\b/) && (u = !0);
                        var r;
                        if (r = a("J_LoginBox") || a("J_Login") || h.getElementsByClassName("nc-outer-box")[0]) {
                            var c = u ? 0 : 2,
                            d = o(_),
                            p = arguments.callee;
                            if (0 >= d) {
                                if (p._count > 100) return;
                                return p._count = (p._count || 0) + 1,
                                void setTimeout(p, 100)
                            }
                            var g, f, v = o(r) - d,
                            b = r.getBoundingClientRect();
                            "number" == typeof e ? (g = e, f = 1) : g = b.height ? b.height: b.bottom - b.top;
                            var y, k;
                            k = a("imgCaptcha"),
                            k && (k.style.top = v + c + "px", y = g - c - 66, f && (y -= 13), f || 0 !== s() || (k.style.minHeight = "290px", y -= 10), k.style.height = y + "px", f && (k.style.minHeight = 0)),
                            k = a("clickCaptcha"),
                            k && (k.style.top = v + c + "px", u ? (l(), y = g + 30, 255 > y && (y = 255), k.style.height = y + "px") : (l(), y = g - c - 30, f && (y -= 8), k.style.height = y + "px"), f && (k.style.minHeight = 0))
                        }
                    }
                }
                function p(e, t, n) {
                    g = e,
                    _ = t,
                    d(n)
                }
                var u, g, _, f = document,
                h = e("./util"),
                m = h.isIEX(6);
                n.init = p,
                n.adjustPosition = d,
                n.getInform = r
            },
            {
                "./util": 19
            }],
            17 : [function(e, t, n) {
                var a = '<div id="_n1t" class="nc_scale"><div id="_bg"></div><span id="_n1z"></span><div id="_scale_text" class="scale_text"></div><div id="clickCaptcha"><div class="clickCaptcha_text"><b id="_captcha_text"></b><img id="_btn_2" src="//g.alicdn.com/sd/ncpc/images/btn2.png"></div><div class="clickCaptcha_img"></div><div class="clickCaptcha_btn"></div></div><div id="imgCaptcha"><div class="imgCaptcha_text"><input type="text" style="ime-mode:inactive"></div><div class="imgCaptcha_img" id="_imgCaptcha_img"></div><img id="_btn_1" src="//g.alicdn.com/sd/ncpc/images/btn2.png" onclick="document.getElementById(\'_imgCaptcha_img\').children[0].click()"><div class="imgCaptcha_btn"><div id="_captcha_img_text"></div><div id="scale_submit"></div></div></div><img id="_voicebtn" style="display:none" src="//g.alicdn.com/sd/ncpc/images/voice.png"><b id="_helpbtn"></b></div><div id="_nc_voice"></div>';
                n.tpl = a
            },
            {}],
            18 : [function(e, t, n) {
                var a = {
                    0 : {
                        analyze: "//cf.aliyun.com/nocaptcha/analyze.jsonp",
                        get_captcha: "//pin2.aliyun.com/get_captcha/ver3",
                        get_img: "//pin2.aliyun.com/get_img",
                        checkcode: "//cf.aliyun.com/captcha/checkcode.jsonp",
                        umid_Url: "//g.alicdn.com/security/umscript/3.2.1/um.js",
                        uab_Url: "//af.alicdn.com/js/uac.js",
                        umid_serUrl: "https://ynuf.alipay.com/service/um.json"
                    },
                    1 : {
                        analyze: "//cfus.aliyun.com/nocaptcha/analyze.jsonp",
                        get_captcha: "//captcha.alibaba.com/get_captcha/ver3",
                        get_img: "//captcha.alibaba.com/get_img",
                        checkcode: "//cfus.aliyun.com/captcha/checkcode.jsonp",
                        umid_Url: "//g.alicdn.com/security/umscript/3.2.1/um.js",
                        uab_Url: "//aeu.alicdn.com/js/uab.js",
                        umid_serUrl: "https://us.ynuf.alipay.com/service/um.json"
                    },
                    2 : {
                        analyze: "//cfun.aliyun.com/nocaptcha/analyze.jsonp",
                        get_captcha: "//pin2.aliyun.com/get_captcha/ver3",
                        get_img: "//pin2.aliyun.com/get_img",
                        checkcode: "//cfun.aliyun.com/captcha/checkcode.jsonp",
                        umid_Url: "//g.alicdn.com/security/umscript/3.2.1/um.js",
                        uab_Url: "//aeu.alicdn.com/js/uab.js",
                        umid_serUrl: "https://ynuf.alipay.com/service/um.json"
                    }
                };
                n.URL_MAP = a
            },
            {}],
            19 : [function(e, t, n) {
                function a(e) {
                    return ((e || "") + Math.random()).replace(".", "")
                }
                function o(e, t) {
                    var n = e.className || "";
                    n.match(new RegExp("(^|\\s)" + t + "(\\s|$)")) || (e.className = (n + " " + t).replace(/^\s+|\s+$/g, ""))
                }
                function i(e, t) {
                    var n = e.className || "",
                    a = n.replace(new RegExp("(^|\\s)" + t + "(\\s|$)"), " ").replace(/^\s+|\s+$/g, "");
                    a != n && (e.className = a)
                }
                function r(e, t, n) {
                    if (f.getElementsByClassName) return f.getElementsByClassName(e);
                    t = t || f,
                    n = n || "*";
                    var a = [],
                    o = "*" === n && t.all ? t.all: t.getElementsByTagName(n),
                    i = o.length;
                    e = e.replace(/\-/g, "\\-");
                    for (var r = new RegExp("(^|\\s)" + e + "(\\s|$)"); --i >= 0;) r.test(o[i].className) && a.push(o[i]);
                    return a
                }
                function c(e, t, n) {
                    n = n || 7;
                    var a = new Date;
                    a.setTime(a.getTime() + 864e5 * n),
                    document.cookie = [encodeURIComponent(e), "=", encodeURIComponent("" + t), ";expires=", a.toGMTString()].join("")
                }
                function s(e) {
                    var t = window,
                    n = a("_nc_r_"),
                    o = t[n] = new Image;
                    o.onload = o.onerror = function() {
                        t[n] = null
                    },
                    o.src = e
                }
                function l(e) {
                    var t = [];
                    for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                    return t.join("&")
                }
                function d(e, t) {
                    var n = Math.floor((new Date).getTime() / (36e5 * (t || 2))),
                    a = -1 === e.indexOf("?") ? "?": "&";
                    return e + a + "_t=" + n
                }
                function p(e) {
                    if (e in h) return h[e];
                    var t = f.createElement("b");
                    return t.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->",
                    h[e] = 1 === t.getElementsByTagName("i").length
                }
                function u(e) {
                    for (var t = e.offsetLeft,
                    n = e.offsetParent; null !== n;) t += n.offsetLeft,
                    n = n.offsetParent;
                    return t
                }
                function g(e) {
                    for (var t = e.offsetTop,
                    n = e.offsetParent; null !== n;) t += n.offsetTop,
                    n = n.offsetParent;
                    return t
                }
                function _(e) {
                    var t = f.documentElement.scrollTop,
                    n = f.documentElement.scrollLeft;
                    if (e.getBoundingClientRect) {
                        var a = e.getBoundingClientRect();
                        return {
                            left: a.left - n,
                            right: a.right - n,
                            top: a.top - t,
                            bottom: a.bottom - t
                        }
                    }
                    var o = u(e),
                    i = g(e);
                    return {
                        left: o,
                        right: o + e.offsetWidth,
                        top: i,
                        bottom: i + e.offsetHeight
                    }
                }
                var f = document,
                h = {};
                t.exports = {
                    rndId: a,
                    addClass: o,
                    removeClass: i,
                    getElementsByClassName: r,
                    send: s,
                    obj2param: l,
                    isIEX: p,
                    addHourStamp: d,
                    setCookie: c,
                    getClientRect: _
                }
            },
            {}],
            20 : [function(e, t, n) {
                n.v = 12
            },
            {}]
        },
        {},
        [1])
    },
    NEW_ACTION = function() { !
        function e(t, n, a) {
            function o(r, c) {
                if (!n[r]) {
                    if (!t[r]) {
                        var s = "function" == typeof require && require;
                        if (!c && s) return s(r, !0);
                        if (i) return i(r, !0);
                        throw new Error("Cannot find module '" + r + "'")
                    }
                    var l = n[r] = {
                        exports: {}
                    };
                    t[r][0].call(l.exports,
                    function(e) {
                        var n = t[r][1][e];
                        return o(n ? n: e)
                    },
                    l, l.exports, e, t, n, a)
                }
                return n[r].exports
            }
            for (var i = "function" == typeof require && require,
            r = 0; r < a.length; r++) o(a[r]);
            return o
        } ({
            1 : [function(e, t, n) {
                "use strict"; !
                function(e, t) {
                    var n = e.createElement("style");
                    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
                    else try {
                        n.innerHTML = t
                    } catch(a) {
                        n.innerText = t
                    }
                } (document, '@charset "utf-8";\n@font-face{font-family:\'nc_iconfont\';src:url("//at.alicdn.com/t/font_1456729943_261152.eot");src:url("//at.alicdn.com/t/font_1456729943_261152.eot?#iefix") format(\'embedded-opentype\'),url("//at.alicdn.com/t/font_1456729943_261152.woff") format(\'woff\'),url("//at.alicdn.com/t/font_1456729943_261152.ttf") format(\'truetype\'),url("//at.alicdn.com/t/font_1456729943_261152.svg#iconfont") format(\'svg\')}.nc-container div#nc-loading-circle{background:transparent;width:20px;height:20px;display:inline-block;position:relative;vertical-align:middle}.nc-container div#nc-loading-circle .sk-circle{background:transparent;width:100%;height:100%;position:absolute;left:0;top:0}.nc-container #nc-loading-circle .sk-circle:before{content:\'\';display:block;margin:0 auto;width:15%;height:15%;background-color:#818181;border-radius:100%;-webkit-animation:sk-circleFadeDelay 1.2s infinite ease-in-out both;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}.nc-container #nc-loading-circle .sk-circle2{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.nc-container #nc-loading-circle .sk-circle3{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.nc-container #nc-loading-circle .sk-circle4{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.nc-container #nc-loading-circle .sk-circle5{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.nc-container #nc-loading-circle .sk-circle6{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.nc-container #nc-loading-circle .sk-circle7{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.nc-container #nc-loading-circle .sk-circle8{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.nc-container #nc-loading-circle .sk-circle9{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.nc-container #nc-loading-circle .sk-circle10{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.nc-container #nc-loading-circle .sk-circle11{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.nc-container #nc-loading-circle .sk-circle12{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.nc-container #nc-loading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.nc-container #nc-loading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.nc-container #nc-loading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.nc-container #nc-loading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.nc-container #nc-loading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.nc-container #nc-loading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.nc-container #nc-loading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.nc-container #nc-loading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.nc-container #nc-loading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.nc-container #nc-loading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.nc-container #nc-loading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}@-moz-keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}@-webkit-keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}@-o-keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}.nc-container .scale_text2 #nc-loading-circle .sk-circle:before{background-color:#fff}.nc_iconfont{font-family:"nc_iconfont";color:#ff3f08;font-size:16px;font-style:normal}.captcha-error .icon_ban{float:left;font-size:16px;padding-right:5px;line-height:14px}.clickCaptcha_text .btn_refresh{font-style:normal;cursor:pointer;background:#fff;color:#737383}.imgCaptcha .btn_refresh{font-size:20px;cursor:pointer;background:#fff;color:#737383}.nc_voice{display:none;position:relative;margin-top:-34px;z-index:99;width:auto;height:34px;background:#fff}.omeo-code-img,.omeo-code-audio{font-size:0;text-align:left}.omeo-code-audiobox,.omeo-code-img a,.omeo-code-audio a,.omeo-code-state{display:inline-block;*display:inline;zoom:1;height:32px;vertical-align:top;font-size:12px}.omeo-code .omeo-code-refresh{background:transparent;width:32px;height:32px;font-size:20px;color:#888;text-align:center;text-decoration:none;padding-left:4px;line-height:32px}.omeo-code .omeo-switch{display:none;width:32px;height:32px;border-left:1px solid #e1e1e1;background-image:url("//g.alicdn.com/sd/ncpc/images/checkcode.png");background-repeat:no-repeat}.omeo-img-active .omeo-code-img{display:block}.omeo-img-active .omeo-code-audio{display:none}.omeo-code-img img{border:1px solid #cdcdcd;cursor:pointer}.omeo-code-img .omeo-switch{background-position:9px -41px}.omeo-audio-active .omeo-code-audio{display:block}.omeo-audio-active .omeo-code-img{display:none}.omeo-code-refresh{position:relative;left:95px}.omeo-code-audiobox{position:relative;height:30px;line-height:32px;border:1px solid #e1e1e1;text-align:center;overflow:hidden;left:100px;top:1px;width:45%;min-width:80px;background-color:#eee}.omeo-code-audiobox a{display:block;text-decoration:none;color:#06c}.omeo-code-audiobox-playing a{visibility:hidden}.omeo-code-audiobox span,.omeo-code-audiobox b{visibility:hidden;position:absolute;top:0;left:0;height:30px;font-weight:100;overflow:hidden}.omeo-code-audiobox-playing span,.omeo-code-audiobox-playing b{visibility:visible}.omeo-code-audiobox span{z-index:0;width:0;background:#186bca}.omeo-code-audiobox b{width:100%;z-index:1;text-align:left;text-indent:30px;color:#999;background:url("//g.alicdn.com/sd/ncpc/images/checkcode.png") no-repeat 14px -89px}.omeo-code-audio .omeo-switch{background-position:5px 10px}input[type=text]::-ms-clear{display:none}.omeo-box{position:relative;background-color:#fff}.omeo-code-echo{position:absolute;top:2px;left:2px}.omeo-code-echo input{padding:5px;height:18px;line-height:18px;border:1px solid #ddd;width:80px;outline:0}.omeo-code-state{height:30px;line-height:30px;text-indent:25px;white-space:nowrap;background-image:url("//g.alicdn.com/sd/ncpc/images/checkcode.png");background-repeat:no-repeat;background-position:100px 100px}.omeo-code-echo .omeo-code-state-error{width:auto;background-position:7px -193px}.omeo-code-echo .omeo-code-state-success{position:absolute;width:30px;background-position:7px -243px}.omeo-code-state{position:absolute;left:0;top:28px}.nc_voice_close{display:inline-block;position:relative;cursor:pointer;left:95px;top:0;border-left:#ddd 2px solid;padding:0 0 0 7px;background-color:#fff;font-size:20px;color:#888;line-height:32px}.nc_help{position:absolute;width:100%;height:100%;left:0;top:0;z-index:99999}.nc_help .mask{background-color:#000;opacity:.5;filter:alpha(opacity=50);width:100%;height:100%;top:0;left:0}.nc_btn_close{position:absolute;height:20px;left:500px;border-radius:20px;padding:10px 30px;background-color:#aaa;color:#fff;cursor:pointer;z-index:10}.nc_btn_close:hover{background-color:#afafaf}.nc_hand{position:absolute;width:68px;height:53px;background-image:url("//g.alicdn.com/sd/ncpc/images/hand.png");z-index:3}.nc_slide_bg{z-index:3;font-size:12px;text-align:center;color:#fff;line-height:34px}.nc_voicebtn{position:absolute;padding:0;right:-25px;font-size:23px;color:#888;cursor:pointer;line-height:34px}.nc_helpbtn{position:absolute;cursor:pointer;right:-95px;top:4px;font-size:12px;background-color:#ffb668;color:#fff;padding:4px;border-radius:2px;line-height:18px;display:none}.nc_helpbtn:before{width:0;height:0;content:"";position:absolute;left:-2px;top:6px;border-top:4px solid transparent;border-bottom:4px solid transparent;border-right:4px solid #ffb668}.nc-container .errloading{border:#faf1d5 1px solid;text-indent:3px;background-image:none;font-size:12px;width:290px;line-height:20px;padding:7px 5px 8px 5px;color:#ef9f06;}.nc-container .errloading a{color:#30a7fc}.nc_captcha_text .nc_err{float:left;text-indent:0}.button_move{transition:left .5s;-moz-transition:left .5s;-webkit-transition:left .5s;-o-transition:left .5s}.bg_move{transition:width .5s;-moz-transition:width .5s;-webkit-transition:width .5s;-o-transition:width .5s}.nc_slide_box{position:absolute}.nc_captcha_text{height:auto;line-height:20px;visibility:hidden;font-size:12px;color:#999;font-weight:normal}.nc-container .nc_captcha_img_text{width:auto;height:auto;line-height:20px;visibility:hidden;font-size:12px;color:#999;font-weight:normal;display:none;padding:0 0 10px 0;background-position:0 0;}.nc-container .nc_captcha_img_text span.nc-lang-cnt{line-height:inherit}.nc-container .imgCaptcha .nc_captcha_img_text{width:auto}.nc_captcha_img_text{height:auto;line-height:20px;visibility:hidden;font-size:12px;color:#999;font-weight:normal;display:none;padding:0 0 10px 3px;background-position:0 0}.nc-container .nc_wrapper{width:auto}.nc_scale{width:auto;height:34px;background:#e8e8e8;position:relative;margin:0;padding:0}.nc_scale.is_audio{margin-right:25px}.nc-container .nc_scale div{height:auto}.nc-container .nc_scale ul{list-style:none}.nc-container .nc_scale .btn_slide{color:#737383;background-image:none}.nc-container .nc_scale span{text-align:center;width:40px;height:32px;line-height:32px;border:1px solid #ccc;position:absolute;left:0;cursor:move;background:#fff;z-index:2}.nc-container .nc_scale span.nc-lang-cnt{*line-height:34px;float:none;width:auto;height:auto;*height:34px;border:none;position:static;cursor:inherit;background:none;z-index:0;display:inline}.nc_slide_button{width:40px;height:32px;border:1px solid #ccc;position:absolute;left:0;cursor:move;background:#fff url("//g.alicdn.com/sd/ncpc/images/rt.png") no-repeat center;z-index:2}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.nc_scale span{height:32px}}.nc-container .nc_scale .btnok{cursor:default;background:#fff url("//g.alicdn.com/sd/ncpc/images/yes.png") no-repeat center;z-index:3}.nc-container .nc_scale .btnok2{cursor:default;font-size:20px;background:#fff url("//g.alicdn.com/sd/ncpc/images/no.png") no-repeat center;z-index:3}.nc-container .nc_scale .btn_warn{cursor:default;color:#ff3f08;line-height:34px;text-align:center;font-size:20px;background:#fff;z-index:3}.nc-container .clickCaptcha_text .btn_refresh{font-size:20px}.nc-container .clickCaptcha_text .icon_close{line-height:30px;margin-left:8px;cursor:default;color:#ff3f08;font-size:16px;float:left;margin-right:2px;background:transparent;z-index:3}.nc-container .nc_captcha_img_text .icon_close{cursor:default;color:#ff3f08;font-size:16px;float:left;margin-right:4px;background:transparent;z-index:3;line-height:18px}.nc-container .errloading .icon_warn{cursor:default;color:#ff3f08;font-size:18px;float:left;background:transparent;z-index:3}.nc-container .nc_scale .btn_ok{cursor:default;line-height:34px;text-align:center;font-size:20px;background:#fff;z-index:3;color:#76c61d}.nc-container .nc_scale .nc_ok,.nc-container .nc_scale .nc_bg{background:#7ac23c}.nc-container .nc_scale .nc_bg{position:absolute;height:100%;_height:34px;left:0;width:10px}.nc-container .nc_scale div.redbar{background:#fc461e;opacity:.5;filter:alpha(opacity=50)}.nc-container .nc_scale div.orange{background:#f00}.nc-container .nc_scale .scale_text{width:100%;height:100%;text-align:center;position:absolute;z-index:1;background:transparent;color:#9c9c9c;line-height:34px;font-size:12px;cursor:pointer}.nc-container .nc_scale .scale_text2{text-align:left;color:#fff;font-size:12px;text-indent:10px}.nc-container .nc_scale .scale_text2 b{padding-left:0;font-weight:normal}.nc-container .nc_scale .scale_text.scale_loading_text{text-align:center}.nc-container .nc_scale .imgCaptcha,.nc-container .nc_scale .clickCaptcha{display:none;overflow:hidden;border:1px solid #ccc;background:#fff;z-index:20000;}.nc-container .nc_scale .imgCaptcha p.error span,.nc-container .nc_scale .clickCaptcha p.error span{line-height:normal}.nc-container .nc_scale .imgCaptcha{height:auto}.nc-container .nc_scale .clickCaptcha{position:absolute;left:0;top:35px;height:270px;background:#fff;display:none;}.nc-container .nc_scale .clickCaptcha p.error i{color:#ff3f08;font-style:normal}.nc-container .nc_scale .clickCaptcha div{position:static;clear:both;width:100%;background:#fff;height:auto}.nc-container .nc_scale .clickCaptcha .clickCaptcha_text{height:30px;line-height:30px;font-size:12px;color:#999;}.nc-container .nc_scale .clickCaptcha .clickCaptcha_text b{font-weight:normal}.nc_btn_2{position:absolute;right:0;top:0;cursor:pointer;margin:2px 9px 0 0}.nc_iconfont.nc_btn_2{position:absolute;right:0;top:0;cursor:pointer}.nc_iconfont.nc_btn_1{position:absolute;top:10px;right:5px}.nc_btn_1{top:10px;right:10px}.scale_text i{font-style:normal;border:none;position:static;cursor:default;color:#fffc00;background:none;display:inline;width:100%}.nc-container .clickCaptcha .clickCaptcha_img{margin:0 auto;clear:both;position:relative;}.nc-container .clickCaptcha .clickCaptcha_img img{width:230px;height:230px;margin-left:10px;margin-top:5px}.nc-container .clickCaptcha .clickCaptcha_btn{margin:10px 0 0 15px;position:relative;text-align:left;}.nc-container .clickCaptcha .clickCaptcha_btn img{cursor:pointer}.nc-container .imgCaptcha{position:absolute;left:0;top:35px;height:auto;padding-bottom:15px;border:1px solid #ccc;background:#fff;}.nc-container .imgCaptcha div{position:static;width:90%;background-color:#fff}.nc-container .imgCaptcha,.nc-container .clickCaptcha{text-align:left;}.nc-container .imgCaptcha a,.nc-container .clickCaptcha a{color:#ff3f08}.nc-container .imgCaptcha .imgCaptcha_text{height:42px;line-height:42px;width:120px;background:#fff;font-size:14px;text-align:left;color:#747474;float:left;margin-left:10px;}.nc-container .imgCaptcha .imgCaptcha_text input{margin-top:5px;height:30px;line-height:30px;font-size:14px;width:90px;background:#fff}.nc-container .imgCaptcha .imgCaptcha_text input:focus{outline:none;color:#bbb}.nc-container .imgCaptcha .imgCaptcha_btn{margin:0 0 0 12px;*margin-left:0;clear:both;padding-top:5px;width:90%;}.nc-container .imgCaptcha .imgCaptcha_btn img{cursor:pointer}.nc-container .imgCaptcha .nc_scale_submit{margin:0 auto;cursor:pointer;background-color:#fc461e;width:120px;height:32px;line-height:32px;color:#fff;text-align:center}.nc-container .imgCaptcha .imgCaptcha_img{margin:4px 0 0 100px;height:40px;width:130px;overflow:hidden;cursor:pointer;}.nc-container .imgCaptcha .imgCaptcha_img img{width:130px}.nc-container .imgCaptcha .imgCaptcha_img input{border:solid 1px #ccc}.nc-lang-ar_MA,.nc-lang-ar_SA,.nc-lang-iw_HE,.nc-lang-iw_IL{text-align:right;*text-align:left;}.nc-lang-ar_MA .nc_scale .scale_text2,.nc-lang-ar_SA .nc_scale .scale_text2,.nc-lang-iw_HE .nc_scale .scale_text2,.nc-lang-iw_IL .nc_scale .scale_text2{text-align:right;}.nc-lang-ar_MA .nc_scale .scale_text2 span,.nc-lang-ar_SA .nc_scale .scale_text2 span,.nc-lang-iw_HE .nc_scale .scale_text2 span,.nc-lang-iw_IL .nc_scale .scale_text2 span{*display:inline-block;padding:0 56px 0 0}.nc-lang-ar_MA .nc_captcha_img_text,.nc-lang-ar_SA .nc_captcha_img_text,.nc-lang-iw_HE .nc_captcha_img_text,.nc-lang-iw_IL .nc_captcha_img_text{*text-align:right}.nc-lang-ar_MA span.nc-lang-cnt,.nc-lang-ar_SA span.nc-lang-cnt,.nc-lang-iw_HE span.nc-lang-cnt,.nc-lang-iw_IL span.nc-lang-cnt{text-align:right;direction:rtl}.nocaptcha span.nc-lang-cnt{float:none;height:auto;line-height:30px}.nc-container{font-size:12px;touch-action:none;}.nc-container p{margin:0;padding:0;display:inline}.nc-container .scale_text.scale_text span[data-nc-lang="_startTEXT"]{display:inline-block;width:100%}.nc-container .scale_text.scale_text.slidetounlock span[data-nc-lang="_startTEXT"]{background:-webkit-gradient(linear,left top,right top,color-stop(0,#4d4d4d),color-stop(.4,#4d4d4d),color-stop(.5,#fff),color-stop(.6,#4d4d4d),color-stop(1,#4d4d4d));-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:slidetounlock 3s infinite;-webkit-text-size-adjust:none}.nc-container .nc_scale .nc-align-center.scale_text2{text-align:center;text-indent:-42px}@-webkit-keyframes slidetounlock{0%{background-position:-200px 0}100%{background-position:200px 0}}.nc-container.tb-login .clickCaptcha_text .icon_close{line-height:30px;margin-left:0;cursor:default;color:#ff3f08;font-size:16px;float:left;margin-right:0;background:transparent;z-index:3}.nc-container.tb-login{position:relative;margin-top:20px;display:none;}.nc-container.tb-login .nc_scale{width:auto;}.nc-container.tb-login .nc_scale .scale_text2{text-indent:-42px;text-align:center;}.nc-container.tb-login .nc_scale .scale_text2 b{padding:0}.nc-container.tb-login .nc_scale.nc_err div.scale_text{background:#f79977}.nc-container.tb-login .errloading{width:auto}.nc-container.tb-login .imgCaptcha,.nc-container.tb-login .clickCaptcha{width:252px;*width:256px;border:0;*height:300px;min-height:300px;max-height:inherit !important;}.nc-container.tb-login .imgCaptcha div.login-msg.error,.nc-container.tb-login .clickCaptcha div.login-msg.error{background:#fff2f2}.nc-container.tb-login .imgCaptcha .captcha-error,.nc-container.tb-login .clickCaptcha .captcha-error{position:absolute;top:0;width:244px;height:auto;margin-bottom:15px;padding:3px;border:solid 1px #ff8e8e;line-height:18px}.nc-container.tb-login .imgCaptcha .captcha-inform,.nc-container.tb-login .clickCaptcha .captcha-inform{font-size:110%;margin-left:20px}.nc-container.tb-login .imgCaptcha{padding-top:66px;}.nc-container.tb-login .imgCaptcha .imgCaptcha_text{width:100px;margin-left:0;}.nc-container.tb-login .imgCaptcha .imgCaptcha_text input:focus{color:#000}.nc-container.tb-login .imgCaptcha .imgCaptcha_img{width:120px;_width:100px}.nc-container.tb-login .imgCaptcha .imgCaptcha_btn{width:100%;margin-left:0}.nc-container.tb-login .imgCaptcha .nc_scale_submit{width:100%;height:36px;line-height:36px;margin-top:20px;margin-left:0;border-radius:3px;font-size:16px;font-family:Tahoma,Helvetica,Arial,sans-serif;background:#ff3f08}.nc-container.tb-login .clickCaptcha{padding-top:40px;}.nc-container.tb-login .clickCaptcha .clickCaptcha_text{text-indent:4px}.nc-container.tb-login .clickCaptcha .clickCaptcha_img img{margin-left:10px}.nc-container.tb-login .nc_btn_1{top:77px;_top:57px}.nc-container.tb-login .nc_btn_2{top:36px}.login .nc-container.tb-login .login-msg p,.login-box .nc-container.tb-login .login-msg p{width:auto;float:left}.nc-container.tb-login.nc-old-login{margin:20px 0 10px 0;width:250px;}.nc-container.tb-login.nc-old-login .nc_wrapper{width:250px}.nc-container.tb-login.nc-old-login .imgCaptcha,.nc-container.tb-login.nc-old-login .clickCaptcha{width:250px;min-height:auto;}.nc-container.tb-login.nc-old-login .imgCaptcha .captcha-error,.nc-container.tb-login.nc-old-login .clickCaptcha .captcha-error{line-height:16px}.nc-container.tb-login.nc-old-login .clickCaptcha{padding-top:28px;}.nc-container.tb-login.nc-old-login .clickCaptcha .clickCaptcha_img img{width:200px;height:200px}.nc-container.nc-old-login.show-click-captcha{padding-bottom:60px}.nc-container.nc-old-login.show-click-captcha.nc-tm-min-fix{padding-bottom:40px}.nc-container.tb-login.nc-tm-min-fix .clickCaptcha{max-height:340px !important}#content .login-box .bd .nc-container.tb-login .login-msg{margin:10px auto 15px auto}#content .login-box .bd .nc-container.tb-login.nc-old-login.show-click-captcha .login-msg{margin:2px 0 0 0}');
            },
            {}],
            2 : [function(e, t, n) {
                "use strict"; !
                function() {
                    var t = window,
                    n = "_nc_initialized";
                    if (!t[n]) {
                        t[n] = 1;
                        var a = e("./v").v;
                        e("./pclib/rm_old_css"),
                        e("./_styl/nc"),
                        e("./pclib/onerror");
                        var o = t.pointman && "19" == pointman._z,
                        i = {},
                        r = {
                            has_pointman: o,
                            index: 0,
                            v: a
                        };
                        t.UA_Opt = t.UA_Opt || {};
                        var c = e("./pclib/multiton").makeNC(i, r);
                        c.v = a,
                        i.init = function() {},
                        r.has_pointman && (i.noCaptcha = c, pointman.define("nc",
                        function() {
                            return i
                        })),
                        t.noCaptcha = c
                    }
                } ()
            },
            {
                "./_styl/nc": 1,
                "./pclib/multiton": 13,
                "./pclib/onerror": 15,
                "./pclib/rm_old_css": 17,
                "./v": 24
            }],
            3 : [function(e, t, n) {
                "use strict";
                function a(e) {
                    var t, n = "",
                    a = _.getElementById("umFlash");
                    if (a && !n) try {
                        t = a.getCookie(e) || "",
                        n = t
                    } catch(o) {}
                    try {
                        g.localStorage && !n && (t = localStorage[e] || "", n = t)
                    } catch(o) {}
                    if (g.navigator.cookieEnabled && !n) {
                        var i = _.cookie.indexOf(e + "=");
                        if ( - 1 != i) {
                            i += e.length + 1;
                            var r = _.cookie.indexOf(";", i); - 1 == r && (r = _.cookie.length),
                            t = decodeURIComponent(_.cookie.substring(i, r)) || "",
                            n = t
                        }
                    }
                    return n
                }
                function o(e, t, n) {
                    n = n || 7;
                    var a = new Date;
                    a.setTime(a.getTime() + 864e5 * n),
                    _.cookie = [encodeURIComponent(e), "=", encodeURIComponent("" + t), ";expires=", a.toGMTString()].join("")
                }
                function i() {
                    var e = a(f);
                    return e || (e = h + r(11), o(f, e, 3650)),
                    e
                }
                function r(e) {
                    for (var t = ""; t.length < e;) t += Math.random().toString().substr(2);
                    return t.substring(t.length - e)
                }
                function c() {
                    var e = g._sec_module = g._sec_module || {};
                    if (d = e.token) return d;
                    var t = i();
                    return d = t + h + r(3),
                    e.token = d,
                    d
                }
                function s() {
                    if (p) return p;
                    var e = "_umdata";
                    try {
                        g.localStorage && (p = localStorage.getItem(e))
                    } catch(t) {}
                    return p ? p: (p = a(e), p || "")
                }
                function l() {
                    return u ? u: u = s() || c()
                }
                var d, p, u, g = window,
                _ = document,
                f = "_uab_collina",
                h = g.pointman && pointman._now ? pointman._now: (new Date).getTime();
                n.getSecToken = c,
                n.getNCToken = l
            },
            {}],
            4 : [function(e, t, n) {
                "use strict";
                function a(e, t) {
                    this.id = function(e) {
                        return 0 === e.indexOf("#") ? r.getElementById(e.slice(1)) : r.getElementById(e)
                    },
                    this.tag = function(e) {
                        var t = e.split(" ");
                        return this.id(t[0]).getElementsByTagName(t[1])
                    },
                    this.toggle = function(e) {
                        var t = this.id(e);
                        "none" == t.style.display || "" === t.style.display ? t.style.display = "block": t.style.display = "none"
                    },
                    this.clone = function(e) {
                        var t, n, a = e;
                        if (e && ((n = e instanceof Array) || e instanceof Object)) {
                            a = n ? [] : {};
                            for (t in e) e.hasOwnProperty(t) && (a[t] = this.clone(e[t]))
                        }
                        return a
                    },
                    this.extend = function(e, t, n) {
                        var a, o;
                        if (t instanceof Array) for (a = 0, o = t.length; o > a; a++) this.extend(e, t[a], n);
                        for (a in t) a in e && t.hasOwnProperty(a) && (e[a] = t[a]);
                        return e
                    },
                    this.objUpdate = function(e, t) {
                        var n;
                        for (n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    },
                    this.loadjs = function(e, t) {
                        function n() {
                            clearTimeout(i),
                            o || (o = !0, t())
                        }
                        var a = r.createElement("script");
                        a.type = "text/javascript";
                        var o;
                        a.onreadystatechange = function() {
                            "loaded" != a.readyState && "complete" != a.readyState || (a.onreadystatechange = null, n())
                        },
                        a.onload = n,
                        a.src = e,
                        a.onerror = function(e) {
                            t(e),
                            a.onload = null
                        };
                        var i = setTimeout(function() {
                            a.onerror("timeout")
                        },
                        5e3),
                        c = r.getElementsByTagName("script")[0];
                        c.parentNode.insertBefore(a, c)
                    },
                    this.jsonp = function(n) {
                        var a = 0;
                        n.timeout = e.timeout || 3e3,
                        n.times = e.times || 3;
                        var o;
                        if (n = n || {},
                        !n.url || !n.callback) throw new Error("\u53c2\u6570\u4e0d\u5408\u6cd5");
                        var c = ("jsonp_" + Math.random()).replace(".", ""),
                        s = r.getElementsByTagName("script")[0],
                        l = "";
                        n.data ? (n.data[n.callback] = c, l += t(n.data)) : l += n.callback + "=" + c;
                        var d = r.createElement("script");
                        s.parentNode.insertBefore(d, s),
                        i[c] = function(e) {
                            i[c] = function() {
                                report("\u56de\u8c03\u5df2\u6267\u884c\u8fc7,\u4e0d\u518d\u6267\u884c"),
                                i[c] = null
                            };
                            try {
                                d.parentNode && d.parentNode.removeChild(d)
                            } catch(t) {}
                            clearInterval(o),
                            n.success && n.success(e)
                        },
                        d.src = n.url + ( - 1 == n.url.indexOf("?") ? "?": "&") + l,
                        n.timeout && (o = setInterval(function() {
                            a++;
                            var e;
                            if (a >= n.times) {
                                i[c] = function() {},
                                clearInterval(o);
                                try {
                                    d.parentNode && d.parentNode.removeChild(d)
                                } catch(t) {}
                                n.fail(1)
                            } else try {
                                d.parentNode && d.parentNode.removeChild(d),
                                d = r.createElement("script"),
                                e = r.getElementsByTagName("script")[0],
                                e.parentNode.insertBefore(d, e),
                                d.src = n.url + ( - 1 == n.url.indexOf("?") ? "?": "&") + l + "&t=" + Math.random()
                            } catch(t) {}
                        },
                        n.timeout))
                    },
                    this.obj2str = function n(e) {
                        var t, a = [],
                        i = n;
                        if ("string" == typeof e) return '"' + e.replace(/(['"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + '"';
                        if ("undefined" == typeof e) return "undefined";
                        if ("object" == ("undefined" == typeof e ? "undefined": o(e))) {
                            if (null === e) return "null";
                            if (e.sort) {
                                for (t = 0; t < e.length; t++) a.push(i(e[t]));
                                a = "[" + a.join() + "]"
                            } else {
                                for (t in e) e.hasOwnProperty(t) && a.push('"' + t + '":' + i(e[t]));
                                a = "{" + a.join() + "}"
                            }
                            return a
                        }
                        return e.toString()
                    },
                    this.addHandler = function(e, t, n) {
                        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
                    },
                    this.removeEvt = function(e, t, n) {
                        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
                    }
                }
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                }: function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol": typeof e
                },
                i = window,
                r = document;
                n.BaseFun = a
            },
            {}],
            5 : [function(e, t, n) {
                "use strict";
                function a(e, t, n) {
                    var a = e.prefix,
                    r = 1,
                    l = navigator && navigator.userAgent || "",
                    d = /Firefox\/([\d.]*)/.test(l),
                    p = -1 !== l.indexOf("Windows"),
                    u = (new Date).getTime(),
                    g = (new Date).getTime(),
                    _ = i.head || i.getElementsByTagName("head")[0] || i.documentElement,
                    f = function(e) {
                        return i.getElementById(e)
                    },
                    h = {
                        "default": 4,
                        number: 6,
                        "150_40": 4,
                        login_wan3: 4,
                        login_wan10: 6
                    },
                    m = function(e) {
                        this.lang = e.lang;
                        var t = "cn" == this.lang || "zh_CN" == this.lang ? "//pin2.aliyun.com": "//captcha.alibaba.com";
                        this.config = {
                            apiserver: e.apiserver || t,
                            type: e.type || "default",
                            codeLength: e.checkCodeLength || h[e.type || "default"],
                            identity: e.identity || "",
                            sessionid: e.sessionid || "",
                            element: e.element || null
                        },
                        this.tipText = {};
                        var n, a = s[e.lang] || s.en;
                        for (n in a) a.hasOwnProperty(n) && (this.tipText[n] = e[n] || a[n]);
                        this.service = {
                            imgURL: "{apiserver}/get_img?sessionid={sessionid}&identity={identity}&type={type}",
                            checkImgURL: "{apiserver}/check_img?sessionid={sessionid}&identity={identity}&type={type}",
                            audioURL: "{apiserver}/get_audio?identity={identity}&sessionid={sessionid}",
                            checkAudioURL: "{apiserver}/check_audio?sessionid={sessionid}&identity={identity}"
                        },
                        this.cache = {
                            codeType: "img",
                            oldCode: null,
                            lastCheckCode: "",
                            checkedCode: null,
                            checkState: "notstart",
                            audio: null,
                            audioPlayer: null,
                            callback: null
                        }
                    };
                    return m.prototype = {
                        render: function() {
                            var e = this,
                            t = e.config;
                            if (!t.element) return ! 1;
                            "[object String]" == Object.prototype.toString.call(t.element) && (t.element = f(t.element));
                            for (var n in this.service) if (this.service.hasOwnProperty(n)) {
                                var a = this.service[n];
                                a = a.replace("{apiserver}", t.apiserver).replace("{identity}", t.identity).replace("{sessionid}", t.sessionid).replace("{type}", t.type),
                                this.service[n] = a
                            }
                            return e.renderCode(),
                            this
                        },
                        renderCode: function() {
                            function e() {
                                var e = u || f(a + "omeo-code-key");
                                e.value = e.value.replace(/[^\w\d]/g, "")
                            }
                            function o() {
                                var e, t = g,
                                a = -1;
                                for (_.stopAudio();
                                "body" !== t.tagName.toLowerCase();) {
                                    if (e = t.getAttribute("data-nc-idx"), null !== e) {
                                        a = e;
                                        break
                                    }
                                    t = t.parentNode
                                }
                                try {
                                    noCaptcha.getByIndex(parseInt(a)).reload(),
                                    n(c.switchevent, {
                                        from: "audio",
                                        to: "scale"
                                    })
                                } catch(o) {
                                    report("reload failed")
                                }
                                return ! 1
                            }
                            var r = this,
                            s = r.tipText,
                            l = r.config,
                            d = i.createElement("div"),
                            p = l.element;
                            d.className = "omeo-box",
                            d.innerHTML = '<div class="omeo-code omeo-img-active" id="' + a + 'omeo-code"><div class="omeo-code-img"><img id="' + a + 'omeo-code-imgwrap" data-action="refreshImg" src="' + r.service.imgURL + '" onmousedown="return false;"/><a data-action="refreshImg" href="javascript:;" onmousedown="return false;" title="' + s.refresh + '" class="nc_iconfont btn_refresh omeo-code-refresh">&#xe607;</a><a data-action="switchToAudio" href="javascript:;" onmousedown="return false;" title="' + s.audioText + '" class="omeo-switch"></a></div><div class="omeo-code-audio"><div id="' + a + 'omeo-code-audiobox" class="omeo-code-audiobox omeo-code-audiobox-playing"><a data-action="replayAudio" href="javascript:;">' + s.clickPlay + '</a><span id="' + a + 'omeo-audio-process" class="omeo-audio-process"></span><b>' + s.audioTips + '</b></div><a id="' + a + 'omeo-refresh-audio" data-action="refreshAudio" href="javascript:;" onmousedown="return false;" title="' + s.refresh + '" class="nc_iconfont omeo-code-refresh">&#xe607;</a><i id="' + a + '_voice_close" class="nc_voice_close nc_iconfont" >&#xe600;</i><a data-action="switchToImg" href="javascript:;" onmousedown="return false;" title="' + s.imgText + '" class="omeo-switch"></a></div></div><div class="omeo-code-echo"><input id="' + a + 'omeo-code-key" type="text" name="code" maxlength="6" placeholder="' + s.placeholder + '" /><span class="omeo-code-state" id="' + a + 'omeo-code-state"></span></div>',
                            p.appendChild(d);
                            var u = f(a + "omeo-code-key");
                            p.addEventListener ? (p.addEventListener("click",
                            function(e) {
                                r.triggerEvent(e)
                            },
                            !1), f(a + "omeo-code-imgwrap").addEventListener("error",
                            function() {
                                r.log({
                                    e: "IMGERROR"
                                }),
                                "img" == r.cache.codeType && r.refreshCode()
                            },
                            !1), u.addEventListener("blur",
                            function() {
                                e(),
                                r.validateCode({
                                    code: f(a + "omeo-code-key").value.replace(/^\s|\s$/g, "")
                                })
                            },
                            !1), u.addEventListener("keyup",
                            function() {
                                e(),
                                r.listenerCodeType(this.value.replace(/^\s|\s$/g, ""))
                            },
                            !1), u.addEventListener("paste",
                            function(e) {
                                e.preventDefault()
                            },
                            !0)) : (p.attachEvent("onclick",
                            function(e) {
                                return r.triggerEvent(e),
                                !1
                            }), f(a + "omeo-code-imgwrap").attachEvent("onerror",
                            function() {
                                r.log({
                                    e: "IMGERROR"
                                }),
                                "img" == r.cache.codeType && r.refreshCode()
                            }), u.attachEvent("onblur",
                            function() {
                                e(),
                                r.validateCode({
                                    code: f(a + "omeo-code-key").value.replace(/^\s|\s$/g, "")
                                })
                            }), u.attachEvent("onkeyup",
                            function() {
                                e(),
                                r.listenerCodeType(f(a + "omeo-code-key").value.replace(/^\s|\s$/g, ""))
                            }), u.attachEvent("onpaste",
                            function() {
                                return ! 1
                            }));
                            var g = t.id(a + "_voice_close"),
                            _ = this;
                            t.addHandler(g, "click", o)
                        },
                        listenerCodeType: function(e) {
                            this.cache.oldCode && this.cache.oldCode.length !== this.config.codeLength || 1 !== e.length || (g = (new Date).getTime()),
                            this.cache.oldCode = e,
                            e.length == this.config.codeLength && this.validateCode({
                                code: e
                            })
                        },
                        updateAudioBoxWidth: function() {
                            var e = 7,
                            t = f(a + "wrapper").offsetWidth,
                            n = f(a + "omeo-refresh-audio").offsetWidth,
                            o = f(a + "_voice_close").offsetWidth,
                            i = f(a + "omeo-code-key").offsetWidth,
                            r = t - n - o - i - e;
                            f(a + "omeo-code-audiobox").style.width = r + "px"
                        },
                        triggerEvent: function(e) {
                            var t = e.target || e.srcElement,
                            n = t.getAttribute("data-action");
                            try {
                                f(a + "omeo-code-key").focus()
                            } catch(e) {}
                            "refreshAudio" === n && this.refreshCode(),
                            "switchToAudio" === n && (this.cache.codeType = "audio", this.switchCode({
                                type: "audio"
                            })),
                            "replayAudio" == n && this.playAudio()
                        },
                        resetPlayer: function(e) {
                            var t = f(a + "omeo-audio-process");
                            t.style.width = 0,
                            "playing" == e.state ? t.parentNode.className = "omeo-code-audiobox omeo-code-audiobox-playing": t.parentNode.className = "omeo-code-audiobox",
                            this.updateAudioBoxWidth()
                        },
                        refreshCode: function() {
                            var e = f(a + "omeo-code-state");
                            e.className = "omeo-code-state",
                            e.innerHTML = "",
                            o.__progtid && clearInterval(o.__progtid),
                            f(a + "omeo-code-key").value = "",
                            this.resetPlayer({
                                state: "playing"
                            }),
                            this.playAudio(),
                            u = g = (new Date).getTime()
                        },
                        switchCode: function(e) {
                            "img" == e.type ? (this.stopAudio(), f(a + "omeo-code").className = "omeo-code omeo-img-active") : (f(a + "omeo-code").className = "omeo-code omeo-audio-active", this.resetPlayer({
                                state: "playing"
                            }), !this.audioSupport || d || (f(a + "omeo-refresh-audio").style.display = ""), this.playAudio()),
                            this.cache.checkState = "notstart",
                            this.cache.checkedCode = null;
                            var t;
                            t = f(a + "omeo-code-state"),
                            t.className = "omeo-code-state",
                            t.innerHTML = "",
                            t = f(a + "omeo-code-key"),
                            t.value = "",
                            t.focus(),
                            this.cache.oldCode && this.refreshCode(),
                            u = g = (new Date).getTime()
                        },
                        playErrAudio: function() {
                            var e = "//g.alicdn.com/sd/ncpc/images/",
                            t = e + "error.wav",
                            n = e + "error_en.mp3",
                            a = "cn" == this.lang || "zh_CN" == this.lang;
                            this.playAudio(a ? t: n)
                        },
                        playAudio: function(e) {
                            e || (e = this.service.audioURL + (this.service.audioURL.indexOf("?") >= 0 ? "&t=": "?t=") + (new Date).getTime()),
                            this.stopAudio();
                            var t;
                            t = e.indexOf(".mp3") > -1 ? "audio/mpeg": "audio/x-wav";
                            var n;
                            if (this.audioSupport) this.cache.audio = new Audio,
                            n = i.createElement("source"),
                            n.type = t,
                            n.src = e,
                            this.cache.audio.appendChild(n),
                            this.cache.audio.load(),
                            this.cache.audio.play(),
                            this.bindAudioProgress();
                            else if (this.isIE) {
                                var c = i.createElement("bgsound");
                                c.setAttribute("id", "omeo-bgsound-audio" + r),
                                c.setAttribute("autostart", "true"),
                                c.setAttribute("src", e),
                                _.appendChild(c),
                                this.cache.audioPlayer = f(a + "omeo-bgsound-audio" + r),
                                this.resetPlayer({
                                    state: "playing"
                                });
                                var s = 0,
                                l = this;
                                o.__progtid && clearInterval(o.__progtid),
                                o.__progtid = setInterval(function() {
                                    s += 10,
                                    s > 100 && (s = 100),
                                    l.updateProgress(s),
                                    s >= 100 && clearInterval(o.__progtid)
                                },
                                1e3)
                            } else _.appendChild('<embed src="' + e + '" id="' + a + "omeo-flash-audio" + r + '" ' + (p ? 'type="application/x-mplayer2"': 'type="' + t + '"') + " autostart hidden />"),
                            this.cache.audioPlayer = f(a + "omeo-flash-audio" + r),
                            this.updateProgress("NOPROGRESS")
                        },
                        bindAudioProgress: function() {
                            var e = this,
                            t = e.cache;
                            t.audio.addEventListener("timeupdate",
                            function() {
                                null !== f(a + "omeo-audio-process") && (!d || this.duration && this.duration !== 1 / 0 ? e.updateProgress(parseInt(100 * this.currentTime / this.duration)) : e.updateProgress(100))
                            },
                            t.audio),
                            t.audio.addEventListener("ended",
                            function() {
                                e.updateProgress(100)
                            },
                            t.audio)
                        },
                        updateProgress: function(e) {
                            switch (e) {
                            case - 1 : break;
                            case 100:
                                this.resetPlayer({
                                    state:
                                    "end"
                                });
                                break;
                            case "NOPROGRESS":
                                this.resetPlayer({
                                    state:
                                    "end"
                                });
                                break;
                            default:
                                f(a + "omeo-audio-process").style.width = e + "%"
                            }
                        },
                        stopAudio: function() {
                            var e = this.cache;
                            this.audioSupport ? e.audio && e.audio.pause() : e.audioPlayer && (e.audioPlayer.src = "", e.audioPlayer.parentNode.removeChild(this.cache.audioPlayer), e.audioPlayer = null)
                        },
                        replayAudio: function() {
                            this.audioSupport && this.cache.audio && (this.resetPlayer({
                                state: "playing"
                            }), this.cache.audio.currentTime = 0, this.cache.audio.pause(), this.cache.audio.play())
                        },
                        loadResource: function(e, t) {
                            var n = null;
                            /\.css/g.test(e) ? (i.createStyleSheet && i.createStyleSheet(e), n = i.createElement("link"), n.rel = "stylesheet", n.href = e) : (n = i.createElement("script"), n.src = e),
                            "onload" in n ? n.onload = function() {
                                t && t()
                            }: n.onreadystatechange = function() { / loaded | complete / .test(n.readyState) && t && t()
                            },
                            _.appendChild(n)
                        },
                        isIE: function() {
                            return !! /MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/.test(l)
                        } (),
                        audioSupport: function() {
                            try {
                                return "Audio" in o && (new Audio).canPlayType("audio/x-wav")
                            } catch(e) {
                                return ! 1
                            }
                        } (),
                        validateCode: function(e) {
                            var t = this,
                            n = f(a + "omeo-code-state"),
                            i = "omeocode" + r + ( + new Date).toString().substr( - 6, 6),
                            c = t.service.checkAudioURL;
                            return t.cache.checkedCode && t.cache.checkedCode === t.cache.oldCode ? !1 : t.cache.lastCheckCode == e.code ? !1 : (t.cache.lastCheckCode = e.code, t.cache.checkedCode = null, "checking" == t.cache.checkState ? !1 : (t.cache.checkState = "checking", void(/^[a-z0-9]{4,6}$/gi.test(e.code) ? (c += "&code=" + e.code + "&callback=" + i, o[i] = function(o) {
                                var i = {};
                                if ("SUCCESS." == o.message) {
                                    t.cache.checkedCode = e.code,
                                    n.className = "omeo-code-state omeo-code-state-success",
                                    n.innerHTML = "",
                                    t.cache.checkState = "success",
                                    i = {
                                        message: "success"
                                    };
                                    var r = (new Date).getTime();
                                    t.log({
                                        t1: r - g,
                                        t2: r - u,
                                        s: o && "SUCCESS." === o.message,
                                        t: t.cache.codeType
                                    })
                                }
                                "ERROR." == o.message && (n.className = "omeo-code-state omeo-code-state-error", n.innerHTML = t.tipText.codeError, setTimeout(function() {
                                    var e = f(a + "omeo-code-state");
                                    e && (e.className = "", e.innerHTML = "", f(a + "omeo-code-key").value = "")
                                },
                                3e3), t.cache.checkState = "codeError", i = {
                                    message: "error"
                                },
                                f(a + "omeo-code-key").select(), "true" == o.refresh && t.refreshCode()),
                                t.cache.callback && t.cache.callback(i)
                            },
                            t.loadResource(c)) : (t.cache.checkState = "codeError", n.className = "omeo-code-state omeo-code-state-error", n.innerHTML = "\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165", t.playErrAudio(), setTimeout(function() {
                                var e = f(a + "omeo-code-state");
                                e && (e.className = "", e.innerHTML = "", e = f(a + "omeo-code-key"), e.value = "", e.focus(), t.resetPlayer({
                                    state: "playing"
                                }), t.playAudio())
                            },
                            5e3)))))
                        },
                        check: function(e) {
                            "success" == this.cache.checkState && e && e({
                                message: "success"
                            }),
                            "codeError" == this.cache.checkState && e && e({
                                message: "error"
                            }),
                            this.cache.callback = e
                        },
                        log: function() {}
                    },
                    m
                }
                var o = window,
                i = document,
                r = e("./event"),
                c = r.names,
                s = e("./language-checkcode").language;
                n.init = a
            },
            {
                "./event": 8,
                "./language-checkcode": 11
            }],
            6 : [function(e, t, n) {
                "use strict";
                function a() {
                    var e = r.createElement("style");
                    e.appendChild(r.createTextNode(""));
                    var t = r.getElementsByTagName("script"),
                    n = t[t.length - 1];
                    return n.parentNode.insertBefore(e, n),
                    e.sheet
                }
                function o(e, t, n, a) {
                    "number" != typeof a && (a = 1),
                    "insertRule" in e ? e.insertRule(t + "{" + n + "}", a) : "addRule" in e && e.addRule(t, n, a)
                }
                function i(e) {
                    var t = r.createElement("style");
                    t.type = "text/css",
                    t.className = "nc-style",
                    t.styleSheet ? t.styleSheet.cssText = e: (t.innerHTML = e, t.appendChild(r.createTextNode(e)));
                    var n = r.getElementsByTagName("script"),
                    a = n[n.length - 1];
                    a.parentNode.insertBefore(t, a)
                }
                var r = document;
                t.exports = {
                    createSheet: a,
                    addCSSRule: o,
                    insertCSS: i
                }
            },
            {}],
            7 : [function(e, t, n) {
                "use strict";
                var a = e("../lib/tk"),
                o = {
                    renderTo: "",
                    isEnabled: !0,
                    foreign: 0,
                    cssUrl: !1,
                    uaUrl: "",
                    appkey: "",
                    trans: {},
                    token: a.getNCToken(),
                    elementID: "",
                    audio: !1,
                    timeout: 3e3,
                    times: 3,
                    is_Opt: 0,
                    language: "cn",
                    umidServer: "h",
                    scene: "",
                    is_tbLogin: 0,
                    tb_errMsg: "",
                    glog: .05,
                    callback: function() {},
                    error: function() {},
                    verifycallback: function() {}
                };
                n.default_opt = o
            },
            {
                "../lib/tk": 3
            }],
            8 : [function(e, t, n) {
                "use strict";
                n.names = {
                    init: "init",
                    ready: "ready",
                    actionstart: "actionstart",
                    actionend: "actionend",
                    beforeverify: "beforeverify",
                    afterverify: "afterverify",
                    error: "error",
                    fail: "fail",
                    success: "success",
                    switchevent: "switch",
                    slide_start: "slide_start",
                    slide_end: "slide_end",
                    before_code: "before_code",
                    after_code: "after_code",
                    error300: "error300"
                },
                n.deprecated = {
                    slide_start: "actionstart",
                    slide_end: "actionend",
                    before_code: "beforeverify",
                    after_code: "afterverify",
                    error300: "error"
                }
            },
            {}],
            9 : [function(e, t, n) {
                "use strict";
                var a = window,
                o = e("./util");
                n.makeLog = function(e) {
                    function t(e, t, n) {
                        var a = o.obj2param({
                            appkey: encodeURIComponent(e),
                            token: encodeURIComponent(t),
                            flag: n
                        });
                        o.send(i + "?cache=" + Math.random() + "&gmkey=evt&gokey=" + encodeURIComponent(a))
                    }
                    function n(t) {
                        a.console && void 0;
                        var n = e + "jstracker.2",
                        i = o.obj2param({
                            type: "9",
                            id: "jstracker",
                            v: "1",
                            nick: "",
                            islogin: "",
                            msg: t,
                            file: "",
                            ua: "",
                            line: "",
                            scrolltop: "",
                            screen: "",
                            t: +new Date
                        });
                        o.send(n + "?" + i)
                    }
                    e = e || "//gm.mmstat.com/";
                    var i = e + "aq.1.1.3",
                    r = {};
                    return r.log = t,
                    r.report = n,
                    r
                }
            },
            {
                "./util": 23
            }],
            10 : [function(e, t, n) {
                "use strict";
                function a(e, t, n, a) {
                    var i;
                    for (i in a) a.hasOwnProperty(i) && (n[i] = a[i]);
                    var c = n[t];
                    if (c) {
                        e.opt.language = t;
                        var l, d = e.opt.renderTo;
                        d && (l = r.getElementById(d)) && (s.addClass(l, "nc-lang-" + t), o(l, c))
                    }
                }
                function o(e, t) {
                    var n, a, o, i, r = e.getElementsByTagName("*"),
                    c = "data-nc-lang";
                    for (n = 0; n < r.length; n++) a = r[n],
                    o = a.getAttribute(c),
                    o && (i = t[o]) && i && !
                    function(e, t) {
                        setTimeout(function() {
                            e.innerHTML = t.replace(/^\s*<span[^>]*?>|<\/span>\s*$/g, "")
                        },
                        1)
                    } (a, i)
                }
                function i(e, t, n) {
                    window.nc_ex_lang = function(o) {
                        a(e, t, n, o)
                    };
                    var o = "script",
                    i = r.createElement(o);
                    i.charset = "utf-8",
                    i.src = c;
                    var s = r.getElementsByTagName(o)[0];
                    s.parentNode.insertBefore(i, s)
                }
                var r = document,
                c = "//g.alicdn.com/sd/ncpc/lang-ex.js?t=" + Math.floor((new Date).getTime() / 846e5),
                s = e("./util");
                n.loadExLang = i
            },
            {
                "./util": 23
            }],
            11 : [function(e, t, n) {
                "use strict";
                var a = {
                    cn: {
                        placeholder: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
                        audioText: "\u83b7\u53d6\u8bed\u97f3\u9a8c\u8bc1\u7801",
                        imgText: "\u83b7\u53d6\u56fe\u7247\u9a8c\u8bc1\u7801",
                        refresh: "\u91cd\u65b0\u83b7\u53d6\u9a8c\u8bc1\u7801",
                        codeError: "\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u5373\u5c06\u64ad\u653e\u4e0b\u4e00\u6bb5",
                        clickPlay: "\u70b9\u51fb\u64ad\u653e\u8bed\u97f3",
                        audioTips: "\u8bf7\u4ed4\u7ec6\u6536\u542c"
                    },
                    en: {
                        placeholder: "enter the code",
                        audioText: "retrieve pass code from the audio",
                        imgText: "retrieve pass code from the image",
                        refresh: "retrieve pass code again",
                        codeError: "Incorrect pass code, please try again",
                        clickPlay: "click to play the audio",
                        audioTips: "please listen carefully"
                    }
                };
                a.zh_CN = a.cn,
                a.en_US = a.en,
                n.language = a
            },
            {}],
            12 : [function(e, t, n) {
                "use strict";
                function a(e, t) {
                    var n, a, i = t ? {}: e;
                    for (n in e) e.hasOwnProperty(n) && (a = e[n], "string" == typeof a && (a = [a]), i[n] = '<span class="nc-lang-cnt" data-nc-lang="' + n + '">' + o(g[n], a) + "</span>");
                    return i
                }
                function o(e, t) {
                    return (e + "").replace(/\\?\{\s*([^{}\s]+)\s*\}/g,
                    function(e, n) {
                        return "\\" === e.charAt(0) ? e.slice(1) : t[n] || ""
                    })
                }
                function i(e, t) {
                    var n, o = _[e] = _[e] || {};
                    t = a(t, !0);
                    for (n in t) t.hasOwnProperty(n) && (o[n] = t[n])
                }
                function r(e, t) {
                    return e.replace(/(javascript:noCaptcha.reset\()(\))/gi, "$1" + t + "$2")
                }
                var c, s = "javascript:noCaptcha.reset()",
                l = "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN",
                d = "http://survey.taobao.com/survey/40BtED_K?token=%TOKEN",
                p = "http://survey.taobao.com/survey/Q0dcgfAv?token=%TOKEN",
                u = "{0}",
                g = {
                    _startTEXT: u,
                    _yesTEXT: "<b>{0}</b>",
                    _noTEXT: u,
                    _errorTEXT: u,
                    _errorClickTEXT: u,
                    _errorLOADING: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _errorTooMuch: '{0}<a target="_blank" href="{1}">{2}</a>',
                    _errorTooMuchClick: '{0}<a target="_blank" href="{1}">{2}</a>',
                    _Loading: "<b>{0}</b>",
                    _errorServer: u,
                    _error300: '{0}<a href="{1}">{2}</a>{3}',
                    _errorNetwork: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _infoTEXT: u,
                    _submit: u,
                    _learning: u,
                    _closeHelp: u,
                    _slideToVerify: u,
                    _notVerified: u,
                    _captcha: u,
                    _OK: u,
                    _sthWrong: u,
                    _reload: u,
                    _feedback: u
                },
                _ = {
                    cn: {
                        _startTEXT: "\u8bf7\u6309\u4f4f\u6ed1\u5757\uff0c\u62d6\u52a8\u5230\u6700\u53f3\u8fb9",
                        _yesTEXT: "\u9a8c\u8bc1\u901a\u8fc7",
                        _noTEXT: "\u8bf7\u5728\u4e0b\u65b9\u8f93\u5165\u9a8c\u8bc1\u7801",
                        _errorTEXT: "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",
                        _errorClickTEXT: "\u9a8c\u8bc1\u7801\u70b9\u51fb\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5",
                        _errorLOADING: ["\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7", s, "\u70b9\u51fb\u5237\u65b0", "\uff0c\u6216", l, "\u63d0\u4ea4\u53cd\u9988"],
                        _errorTooMuch: ["\u8f93\u5165\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff0c\u6216", l, "\u63d0\u4ea4\u53cd\u9988"],
                        _errorTooMuchClick: ["\u70b9\u51fb\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff0c\u6216", l, "\u63d0\u4ea4\u53cd\u9988"],
                        _Loading: "\u52a0\u8f7d\u4e2d",
                        _errorServer: "\u670d\u52a1\u5668\u9519\u8bef\u6216\u8005\u8d85\u65f6",
                        _error300: ["\u54ce\u5440\uff0c\u51fa\u9519\u4e86\uff0c\u70b9\u51fb", s, "\u5237\u65b0", "\u518d\u6765\u4e00\u6b21"],
                        _errorNetwork: ["\u7f51\u7edc\u4e0d\u7ed9\u529b\uff0c\u8bf7", s, "\u70b9\u51fb\u5237\u65b0", "\uff0c\u6216", l, "\u63d0\u4ea4\u53cd\u9988"],
                        _infoTEXT: "",
                        _submit: "\u63d0\u4ea4",
                        _learning: "\u4e86\u89e3\u65b0\u529f\u80fd",
                        _closeHelp: "\u5173\u95ed\u5e2e\u52a9",
                        _slideToVerify: "\u5411\u53f3\u6ed1\u52a8\u9a8c\u8bc1",
                        _notVerified: "\u9a8c\u8bc1\u672a\u901a\u8fc7",
                        _captcha: "\u9a8c\u8bc1\u7801",
                        _OK: "\u786e\u5b9a",
                        _sthWrong: "\u975e\u5e38\u62b1\u6b49\uff0c\u8fd9\u51fa\u9519\u4e86...",
                        _reload: "\u5237\u65b0",
                        _feedback: "\u53cd\u9988"
                    },
                    tw: {
                        _startTEXT: "\u8acb\u6309\u4f4f\u6ed1\u584a\uff0c\u62d6\u52d5\u5230\u6700\u53f3\u908a",
                        _yesTEXT: "\u9a57\u8b49\u901a\u904e",
                        _noTEXT: "\u8acb\u5728\u4e0b\u65b9\u8f38\u5165\u9a57\u8b49\u78bc",
                        _errorTEXT: "\u9a57\u8b49\u78bc\u8f38\u5165\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165",
                        _errorClickTEXT: "\u9a57\u8b49\u78bc\u9ede\u64ca\u932f\u8aa4\uff0c\u8acb\u91cd\u8a66",
                        _errorLOADING: ["\u52a0\u8f09\u5931\u6557\uff0c\u8acb", s, "\u9ede\u64ca\u5237\u65b0", "\uff0c\u6216", l, "\u63d0\u4ea4\u53cd\u994b"],
                        _errorTooMuch: ["\u8f38\u5165\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165\uff0c\u6216", d, "\u63d0\u4ea4\u53cd\u994b"],
                        _errorTooMuchClick: ["\u9ede\u64ca\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165\uff0c\u6216", d, "\u63d0\u4ea4\u53cd\u994b"],
                        _Loading: "\u52a0\u8f09\u4e2d",
                        _errorServer: "\u670d\u52d9\u5668\u932f\u8aa4\u6216\u8005\u8d85\u6642",
                        _error300: ["\u54ce\u5440\uff0c\u51fa\u932f\u4e86\uff0c\u9ede\u64ca", s, "\u5237\u65b0", "\u518d\u4f86\u58f9\u6b21"],
                        _errorNetwork: ["\u7db2\u7d61\u4e0d\u7d66\u529b\uff0c\u8acb", s, "\u9ede\u64ca\u5237\u65b0", "\uff0c\u6216", d, "\u63d0\u4ea4\u53cd\u994b"],
                        _infoTEXT: "",
                        _submit: "\u63d0\u4ea4",
                        _learning: "\u4e86\u89e3\u65b0\u529f\u80fd",
                        _closeHelp: "\u5173\u95ed\u5e2e\u52a9",
                        _slideToVerify: "\u5411\u53f3\u6ed1\u52d5\u9a57\u8b49",
                        _notVerified: "\u9a57\u8b49\u672a\u901a\u904e",
                        _captcha: "\u9a57\u8b49\u78bc",
                        _OK: "\u78ba\u5b9a",
                        _sthWrong: "\u975e\u5e38\u62b1\u6b49\uff0c\u9019\u51fa\u932f\u4e86...",
                        _reload: "\u5237\u65b0",
                        _feedback: "\u53cd\u994b"
                    },
                    en: {
                        _startTEXT: "Please slide to verify",
                        _yesTEXT: "Verified",
                        _noTEXT: "Please input verification code",
                        _errorTEXT: "Please try again",
                        _errorClickTEXT: "Please try again",
                        _errorLOADING: ["Loading failed, ", s, "refresh", " or ", p, "provide feedback"],
                        _errorTooMuch: ["Please try again or ", p, "provide feedback"],
                        _errorTooMuchClick: ["Please try again or ", p, "provide feedback"],
                        _errorServer: "Server Error",
                        _Loading: "Loading",
                        _error300: ["Oops... something's wrong. Please ", s, "refresh", " and try again."],
                        _errorNetwork: ["Net Err. Please ", s, "refresh", ", or ", p, "feedback"],
                        _infoTEXT: "",
                        _submit: "Submit",
                        _learning: "help",
                        _closeHelp: "Close",
                        _slideToVerify: "slide to verify",
                        _notVerified: "Not Verified",
                        _captcha: "Captcha",
                        _OK: "OK",
                        _sthWrong: "Sorry, something wrong....",
                        _reload: "Reload",
                        _feedback: "Feedback"
                    }
                };
                for (c in _) _.hasOwnProperty(c) && a(_[c]);
                _.zh_CN = _.cn,
                _.zh_TW = _.tw,
                _.en_US = _.en,
                n.language = _,
                n.upLang = i,
                n.upResetIndex = r
            },
            {}],
            13 : [function(e, t, n) {
                "use strict";
                var a = e("./noCaptcha"),
                o = e("./scale").makeScale,
                i = e("./event"),
                r = e("./util"),
                c = e("./base_fn").BaseFun,
                s = e("./url_map").mmstat_base;
                n.makeNC = function(t, n) {
                    function l(t, a, i, c) {
                        var l = e("./glog").makeLog(a.foreign ? s.gj: s.gm),
                        d = a.glog;
                        "boolean" != typeof n._b_glog && (n._b_glog = d && "number" == typeof d && Math.random() < d);
                        var p = function(e) {
                            n._b_glog && !h[e] && l.log(a.appkey, UA_Opt.Token || a.token, e);
                            var t = i[e];
                            if (t && t.length) {
                                var o, r = [];
                                for (o = 1; o < arguments.length; o++) r.push(arguments[o]);
                                for (o = 0; o < t.length; o++) if (t[o].apply(null, r) === !1) return ! 1
                            }
                        };
                        return p = r.decorator.after(p,
                        function(e) {
                            e === !1 && setTimeout(function() {
                                var e = _[t];
                                e && e.reload()
                            },
                            1)
                        }),
                        [o(c, n, p), p]
                    }
                    function d(o) {
                        o = r.mix(r.clone(f), o),
                        n.index++,
                        n.prefix = o.prefix || "nc_" + n.index + "_",
                        e("./patch/alipay").reg(o);
                        var i = {},
                        s = {},
                        d = new c(o, r.obj2param),
                        p = l(n.index, o, i, d),
                        u = p[0],
                        g = p[1],
                        _ = a.makeNoCaptcha(t, s, n, i, u, g, d),
                        h = new _;
                        return h._index = n.index,
                        h.init(o),
                        h
                    }
                    function p(e) {
                        e && this.init(e)
                    }
                    function u(e) {
                        p.prototype[e] = function() {
                            if (this.is_destroyed) return this;
                            var t = g[this.index],
                            n = t[e].apply(t, arguments);
                            return "destroy" === e && (this.is_destroyed = !0),
                            "getToken" === e ? n: this
                        }
                    }
                    var g = [],
                    _ = [],
                    f = {},
                    h = i.deprecated;
                    p.reset = function(e) {
                        var t = g[e];
                        t && t.reset && t.reset()
                    },
                    p.config = function(e) {
                        r.mix(f, e)
                    },
                    p.getByIndex = function(e) {
                        return _[e]
                    },
                    p.prototype = {
                        init: function(e) {
                            var t = d(e);
                            return this.index = n.index,
                            g[this.index] = t,
                            _[this.index] = this,
                            this
                        }
                    };
                    var m, v = ["on", "reset", "reload", "show", "hide", "upLang", "getToken", "destroy"];
                    for (m = 0; m < v.length; m++) u(v[m]);
                    return p
                }
            },
            {
                "./base_fn": 4,
                "./event": 8,
                "./glog": 9,
                "./noCaptcha": 14,
                "./patch/alipay": 16,
                "./scale": 18,
                "./url_map": 22,
                "./util": 23
            }],
            14 : [function(require, module, exports) {
                "use strict";
                function makeNoCaptcha(module_nc, opt, inn_vars, nc_events, Scale, onNCEvent, _) {
                    function _upResetIndex(e) {
                        return upResetIndex(e, nc_index)
                    }
                    function _getToken() {
                        return opt.token || UA_Opt.Token || umx.getToken()
                    }
                    function showError(e) {
                        var t;
                        t = e ? language[opt.language]._errorNetwork: language[opt.language]._errorLOADING,
                        t = t.replace("%TOKEN", opt.token),
                        t = _upResetIndex(t),
                        _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + t + "</div>",
                        el_render_to && util.removeClass(el_render_to, "show-click-captcha")
                    }
                    function NoCaptcha() {}
                    var nc_index = inn_vars.index,
                    nc_prefix = inn_vars.prefix,
                    scale_btn = nc_prefix + "n1z",
                    scale_bar = nc_prefix + "n1t",
                    TEXTELEM, gErrTimes = 0,
                    ajaxURL, clsCheckCode = m_checkcode.init(inn_vars, _, onNCEvent),
                    objCheckCode,
                    tpl = makeTemplate({
                        idx: nc_index,
                        prefix: nc_prefix
                    }),
                    glog = require("./glog").makeLog(opt.foreign ? mmstat_base.gj: mmstat_base.gm),
                    report = glog.report,
                    el_render_to,
                    showHelp = makeShowHelp(opt, _, inn_vars),
                    loading_circle_html = '\n        <div id="nc-loading-circle" class="nc-loading-circle">\n          <div class="sk-circle1 sk-circle"></div>\n          <div class="sk-circle2 sk-circle"></div>\n          <div class="sk-circle3 sk-circle"></div>\n          <div class="sk-circle4 sk-circle"></div>\n          <div class="sk-circle5 sk-circle"></div>\n          <div class="sk-circle6 sk-circle"></div>\n          <div class="sk-circle7 sk-circle"></div>\n          <div class="sk-circle8 sk-circle"></div>\n          <div class="sk-circle9 sk-circle"></div>\n          <div class="sk-circle10 sk-circle"></div>\n          <div class="sk-circle11 sk-circle"></div>\n          <div class="sk-circle12 sk-circle"></div>\n        </div>\n    ',
                    isIE8 = util.isIEX(8),
                    isIE9 = util.isIEX(9);
                    return (isIE8 || isIE9) && (loading_circle_html = ""),
                    NoCaptcha.prototype = {
                        init: function(e) {
                            win.__nc = this,
                            module_nc.nc = this;
                            var t = default_opt.language;
                            e.foreign && (t = "en", default_opt.language = t),
                            _.objUpdate(opt, default_opt),
                            _.objUpdate(opt, e),
                            this.opt = opt,
                            language[opt.language] || (loadExLang(this, opt.language, language), opt.language = t),
                            this.render_to = opt.renderTo,
                            this.render_to && (el_render_to = _.id(this.render_to)),
                            el_render_to && util.addClass(el_render_to, "nc-container"),
                            opt.is_tbLogin && (tb_login = require("./tb_login").makeTBLogin(inn_vars)),
                            ajaxURL = URL_MAP[opt.foreign] || URL_MAP[0],
                            ajaxURL.uab_Url = opt.uaUrl || ajaxURL.uab_Url;
                            var n;
                            if (opt.renderTo && opt.appkey && opt.token) {
                                n = _.id(opt.renderTo);
                                var a = Math.min(n.offsetWidth, n.parentNode.offsetWidth); ! opt.customWidth && a > 300 && (opt.customWidth = 300),
                                this.updateWidth(opt.customWidth),
                                n.setAttribute("data-nc-idx", inn_vars.index.toString()),
                                n && (n.innerHTML = '<div id="' + nc_prefix + 'nocaptcha"><div id="' + nc_prefix + 'wrapper" class="nc_wrapper"><div id="' + nc_prefix + '_n1t_loading" class="nc_scale"><div id="' + nc_prefix + '_bg" class="nc_bg" style="width: 0;"></div><div id="' + nc_prefix + '_scale_text_loading" class="scale_text">' + language[opt.language]._Loading + loading_circle_html + "</div></div></div></div>"),
                                UA_Opt.LogVal = "_n",
                                "undefined" == typeof win.acjs ? this.inituab() : (this.initUaParam(), UA_Opt.Token = (new Date).getTime() + ":" + opt.token, UA_Opt.reload && UA_Opt.reload()),
                                this.afterUA()
                            }
                            if (opt.cssUrl) if (doc.createStyleSheet) doc.createStyleSheet(opt.cssUrl);
                            else {
                                var o = doc.createElement("link");
                                o.type = "text/css",
                                o.rel = "stylesheet",
                                o.href = inn_vars.has_pointman ? util.addHourStamp(opt.cssUrl) : opt.cssUrl;
                                var i = doc.getElementsByTagName("script")[0];
                                i.parentNode.insertBefore(o, i)
                            }
                            onNCEvent(event_names.init)
                        },
                        on: function(e, t) {
                            var n = window.console,
                            a = event_deprecated[e];
                            a && n && n.warn("NC: Event '" + e + "' will be deprecated, use '" + a + "' instead."),
                            nc_events[e] = nc_events[e] || [],
                            nc_events[e].push(t)
                        },
                        updateWidth: function(e, t) {
                            if (e) {
                                var n, a, o = "undefined" == typeof e ? "undefined": _typeof(e);
                                "number" == o ? n = e: a = "string" == o ? _.id(e) : e,
                                a && (n = a.offsetWidth),
                                n && (this.c_width = n, this.__is_c_width_setted = 1, this.try2setWidth(nc_prefix + "wrapper"), this.updateCSS(nc_prefix, n, t))
                            }
                        },
                        updateCSS: function(e, t, n) {
                            var a = util.isIEX(6),
                            o = util.isIEX(7),
                            i = a || o ? " !important": "";
                            css.insertCSS((n ? "": ".nc-container #" + e + "wrapper,.nc-container.tb-login #" + e + "wrapper{width:" + t + "px}\n") + [".nc-container .imgCaptcha", ".nc-container .clickCaptcha"].join(",") + "{width:" + (t - 2) + "px" + i + ";}\n" + [".nc-container.tb-login .imgCaptcha", ".nc-container.tb-login .clickCaptcha"].join(",") + "{width:" + t + "px" + i + ";}\n" + [".nc-container.tb-login .imgCaptcha .captcha-error", ".nc-container.tb-login .clickCaptcha .captcha-error"].join(",") + "{width:" + (t - 8) + "px" + i + ";}\n.nc-container.tb-login .errloading, .nc-container .errloading {width:" + (t - 10) + "px;}")
                        },
                        updateAudioBoxWidth: function(e, t, n) {
                            var a = _.id(e + "omeo-refresh-audio").offsetWidth,
                            o = _.id(e + "_voice_close").offsetWidth,
                            i = _.id(e + "omeo-code-key").offsetWidth,
                            r = t - a - o - i - n;
                            _.id(e + "omeo-code-audiobox").style.width = r + "px"
                        },
                        try2setWidth: function(e, t) {
                            "string" == typeof e && (e = _.id(e)),
                            t = t || this.c_width || (el_render_to ? el_render_to.offsetWidth: 0),
                            t && e && e.style && (e.style.width = t + "px")
                        },
                        inituab: function() {
                            this.initUaParam(),
                            UA_Opt.Token = (new Date).getTime() + ":" + opt.token,
                            _.loadjs(util.addHourStamp(ajaxURL.uab_Url),
                            function(e) {
                                if ("timeout" === e) showError(!0),
                                report("loaduab failed");
                                else try {
                                    UA_Opt.reload()
                                } catch(t) {
                                    report("uab die")
                                }
                            })
                        },
                        initUaParam: function() {
                            function e(e, t) {
                                UA_Opt[e] = "undefined" != typeof UA_Opt[e] && UA_Opt[e] > 0 ? UA_Opt[e] : t
                            }
                            opt.is_Opt ? (e("MPInterval", 4), e("MaxMCLog", 12), e("MaxKSLog", 14), e("MaxMPLog", 5), e("MaxFocusLog", 6), e("SendInterval", 5), e("SendMethod", 8), e("GPInterval", 50), e("MaxGPLog", 1), e("MaxTCLog", 12), e("Flag", 882894)) : (UA_Opt.SendInterval = 5, UA_Opt.SendMethod = 8, UA_Opt.MaxMCLog = 12, UA_Opt.MaxKSLog = 14, UA_Opt.MaxMPLog = 5, UA_Opt.MaxGPLog = 1, UA_Opt.MaxTCLog = 12, UA_Opt.GPInterval = 50, UA_Opt.MPInterval = 4, UA_Opt.MaxFocusLog = 6, UA_Opt.isSendError = 1, UA_Opt.Flag = 882894)
                        },
                        afterUA: function() {
                            "undefined" == typeof umx ? this.initUM() : this.afterUM()
                        },
                        initUM: function() {
                            var e = this;
                            _.loadjs(ajaxURL.umid_Url,
                            function(t) {
                                if ("timeout" === t) showError(!0);
                                else {
                                    try {
                                        if (t) {
                                            if (--default_opt.times > 0) return void setTimeout(function() {
                                                e.initUM()
                                            },
                                            500);
                                            report("initUM")
                                        }
                                        var n = document.getElementById("_umfp"),
                                        a = (new Date).getTime();
                                        umx.init({
                                            timeout: opt.timeout,
                                            timestamp: a,
                                            token: opt.token,
                                            serviceUrl: ajaxURL.umid_serUrl,
                                            appName: opt.appkey,
                                            containers: {
                                                flash: n,
                                                dcp: n
                                            }
                                        })
                                    } catch(t) {
                                        report("umx die")
                                    }
                                    e.afterUM()
                                }
                            })
                        },
                        afterUM: function() {
                            function e() { (umx.getStatus() && win.__acjs || n++>50) && (t.reload(), clearInterval(a), onNCEvent(event_names.ready))
                            }
                            if (!this.__nc_afterUM) {
                                this.__nc_afterUM = !0;
                                var t = this;
                                if ("undefined" == typeof umx) return report("afterUM"),
                                void showError(!0);
                                var n = 0,
                                a = setInterval(e, 100);
                                e()
                            }
                        },
                        __reload_voicebtn: function() {
                            var e, t = _.id(nc_prefix + "_voicebtn"),
                            n = this;
                            t.onclick = function() {
                                function t(t) {
                                    function o(e) {
                                        if (e.success) if (100 == e.result.code) n.userCallback(objCheckCode.config.sessionid, e.result.value, e.result.sig);
                                        else if (900 == e.result.code) {
                                            UA_Opt.reload && UA_Opt.reload();
                                            var t = _.id(nc_prefix + "_captcha_text"),
                                            a = language[opt.language]._errorClickTEXT; ++gErrTimes > MAX_ERR_TIME && (a = language[opt.language]._errorTooMuch.replace("%TOKEN", opt.token)),
                                            t.innerHTML = '<i class="nc_iconfont icon_close">' + icon_close + "</i>" + a,
                                            t.style.visibility = "visible"
                                        } else 300 != e.result.code && 69634 != e.result.code || (report("block"), _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "</div>", onNCEvent(event_names.error), onNCEvent(event_names.error300));
                                        else n.errorCallback()
                                    }
                                    if (e) {
                                        var i = t.result;
                                        i && (objCheckCode || (objCheckCode = new clsCheckCode({
                                            type: "150_40",
                                            identity: "REGISTER",
                                            sessionid: i.csessionid,
                                            element: a,
                                            codeType: "audio",
                                            lang: opt.language
                                        }), objCheckCode.check(function(e) {
                                            "success" != e.message && (objCheckCode.playErrAudio(), setTimeout(function() {
                                                var e = _.id(nc_prefix + "omeo-refresh-audio");
                                                e && e.click()
                                            },
                                            5e3)),
                                            "success" == e.message && _.jsonp({
                                                url: ajaxURL.checkcode,
                                                callback: "callback",
                                                data: {
                                                    csessionid: i.csessionid,
                                                    checkcode: function() {
                                                        var e = {};
                                                        return e.code = objCheckCode.cache.lastCheckCode,
                                                        _.obj2str(e)
                                                    } (),
                                                    a: opt.appkey,
                                                    t: opt.token,
                                                    n: win._n || "",
                                                    p: "{}",
                                                    r: Math.random(),
                                                    lang: opt.language,
                                                    v: inn_vars.v
                                                },
                                                success: o,
                                                fail: function(e) {
                                                    n.errorCallback(e)
                                                }
                                            })
                                        }), objCheckCode.render(), onNCEvent(event_names.switchevent, {
                                            from: "scale",
                                            to: "audio"
                                        }), objCheckCode.switchCode({
                                            type: "audio"
                                        })))
                                    }
                                }
                                var a = _.id(nc_prefix + "_voice");
                                return _.id(nc_prefix + "imgCaptcha").style.display = "none",
                                _.id(nc_prefix + "clickCaptcha").style.display = "none",
                                e ? (e = !1, a.style.display = "none", objCheckCode && objCheckCode.stopAudio(), clearInterval(win.__progtid), n.reset(), !1) : (e = !0, a.style.display = "block", objCheckCode && (objCheckCode.resetPlayer({
                                    state: "end"
                                }), objCheckCode.switchCode({
                                    type: "audio"
                                })), void _.jsonp({
                                    url: ajaxURL.analyze,
                                    callback: "callback",
                                    data: {
                                        a: opt.appkey,
                                        t: opt.token,
                                        n: win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                        _a: "audio",
                                        p: "{}",
                                        lang: opt.language,
                                        v: inn_vars.v
                                    },
                                    success: t,
                                    fail: function() {
                                        e && report("audio fail")
                                    }
                                }))
                            }
                        },
                        reload: function() {
                            objCheckCode = null,
                            clearInterval(win.__progtid);
                            var e = _.id(opt.renderTo);
                            e && (e.innerHTML = tpl),
                            opt.audio && (_.id(nc_prefix + "_voicebtn").style.display = "block", util.addClass(_.id(nc_prefix + "n1t"), "is_audio")),
                            tb_login && tb_login.init(this.render_to, el_render_to, opt.customFloatHeight),
                            this.__reload_voicebtn();
                            var t = _.id(nc_prefix + "_helpbtn");
                            t && (navigator.userAgent.indexOf("MSIE 6.0") >= 0 && (t.style.display = "none"), t.innerHTML = language[opt.language]._learning, t.onclick = function() {
                                setTimeout(showHelp, 100)
                            }),
                            TEXTELEM = _.tag(scale_bar + " div")[1],
                            inn_vars.TEXTELEM = TEXTELEM,
                            opt.isEnabled && new Scale(scale_btn, scale_bar, this)
                        },
                        reset: function() {
                            this.__nc_afterUM = !1,
                            win.UA_Opt && (UA_Opt.Token = (new Date).getTime() + ":" + opt.token),
                            opt.renderTo && opt.appkey && opt.token && (_.id(opt.renderTo).innerHTML = '<div id="' + nc_prefix + 'nocaptcha"><div id="' + nc_prefix + 'wrapper" class="nc_wrapper"><div id="' + nc_prefix + '_n1t_loading" class="nc_scale"><div id="' + nc_prefix + '_bg" class="nc_bg" style="width: 0;"></div><div id="' + nc_prefix + '_scale_text_loading" class="scale_text">' + language[opt.language]._Loading + loading_circle_html + "</div></div></div></div>", "undefined" == typeof win.acjs ? this.loaduab() : (UA_Opt.LogVal = "_n", this.initUaParam(), UA_Opt.Token = (new Date).getTime() + ":" + opt.token, UA_Opt.reload && UA_Opt.reload()), this.afterUA())
                        },
                        show: function() {
                            el_render_to && (el_render_to.style.display = "block", tb_login && tb_login.adjustPosition(opt.customFloatHeight), this.is_show = !0)
                        },
                        hide: function() {
                            el_render_to && (el_render_to.style.display = "none", this.is_show = !1)
                        },
                        loaduab: function() {
                            UA_Opt.LogVal = "_n",
                            this.initUaParam(),
                            UA_Opt.Token = (new Date).getTime() + ":" + opt.token,
                            _.loadjs(util.addHourStamp(ajaxURL.uab_Url),
                            function(e) {
                                "timeout" === e && (showError(!0), report("loaduab failed"));
                                try {
                                    UA_Opt.reload()
                                } catch(t) {
                                    report("uab die")
                                }
                            })
                        },
                        enabled: function() {
                            return new Scale(scale_btn, scale_bar, this)
                        },
                        errorCallback: function(e) {
                            var t = _.id(scale_bar),
                            n = this,
                            a = t.getElementsByTagName("span"),
                            o = t.getElementsByTagName("div");
                            if (onNCEvent(event_names.fail), 0 !== a.length && 0 !== o.length) {
                                var i = a[0],
                                r = o[0];
                                showError(e),
                                util.addClass(r, "orange"),
                                util.addClass(i, "reload"),
                                _.addHandler(t, "click",
                                function() {
                                    UA_Opt.Token = (new Date).getTime() + ":" + opt.token,
                                    UA_Opt.reload && UA_Opt.reload(),
                                    n.reload(),
                                    _.removeEvt(t, "click")
                                }),
                                e && opt.error && opt.error(language[opt.language]._errorServer)
                            }
                        },
                        onScaleReady: function onScaleReady(elem) {
                            var trans = opt.trans || {};
                            "string" == typeof trans && (trans = eval("0," + trans));
                            for (var arr = opt.elementID || [], i = 0; i < arr.length; i++) {
                                var id = arr[i],
                                el = doc.getElementById(id);
                                el && (trans[id] = el.value)
                            }
                            var me = this;
                            TEXTELEM.innerHTML = language[opt.language]._Loading + loading_circle_html,
                            util.addClass(inn_vars.TEXTELEM, "nc-align-center"),
                            util.addClass(TEXTELEM, "scale_text2"),
                            _.jsonp({
                                url: ajaxURL.analyze,
                                callback: "callback",
                                data: {
                                    a: opt.appkey,
                                    t: opt.token,
                                    n: win[UA_Opt.LogVal || "_n"] || "",
                                    p: _.obj2str(trans),
                                    scene: opt.scene || (inn_vars.has_pointman ? pointman.config.common.scene: "") || "",
                                    asyn: 0,
                                    lang: opt.language,
                                    v: inn_vars.v
                                },
                                success: function(e) {
                                    me.onScaleReadyCallback(e, elem)
                                },
                                fail: function(e) {
                                    report("onScaleReady"),
                                    me.errorCallback(e)
                                }
                            })
                        },
                        onScaleReadyCallback: function(e, t) {
                            if (e.success) {
                                var n = e.result,
                                a = n.code;
                                0 === a ? (_.id(scale_btn).className = "nc_iconfont btn_ok", _.id(scale_btn).innerHTML = icon_ok_sign, TEXTELEM.innerHTML = language[opt.language]._yesTEXT, util.removeClass(t.btn.parentNode, "nc_err"), this.userCallback(n.csessionid, "pass", n.value)) : (UA_Opt.reload && (UA_Opt.Token = (new Date).getTime() + ":" + opt.token, UA_Opt.reload && UA_Opt.reload()), util.addClass(t.btn, "nc_iconfont btn_warn"), util.addClass(t.btn.parentNode, "nc_err"), t.btn.innerHTML = icon_warn, t.bar = _.tag(scale_bar + " div")[0], TEXTELEM.innerHTML = language[opt.language]._Loading + loading_circle_html, "function" == typeof opt.verifycallback && 300 != a && opt.verifycallback(n), 100 == a ? (this.__inn = 1, this.onScale100(n.csessionid, n.value)) : 200 == a ? (this.__inn = 1, this.onScale200(n.csessionid, n.value)) : 300 != a && 69634 != a || (report("block"), util.removeClass(inn_vars.TEXTELEM, "nc-align-center"), _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "</div>", onNCEvent(event_names.error), onNCEvent(event_names.error300)))
                            } else this.errorCallback()
                        },
                        onScale100: function e(t, n, a) {
                            var o = e,
                            i = a || this,
                            r = _.tag(nc_prefix + "clickCaptcha div");
                            this.__inn && (this.__inn = 0, _.addHandler(_.id(nc_prefix + "_btn_2"), "click",
                            function() {
                                o.call(i, t, n)
                            }));
                            var c, s = setTimeout(function() {
                                s = -1,
                                c || (showError(!0), report("captcha timeout"))
                            },
                            5e3);
                            onNCEvent(event_names.beforeverify),
                            onNCEvent(event_names.before_code),
                            _.jsonp({
                                url: ajaxURL.get_captcha,
                                callback: "callback",
                                data: {
                                    sessionid: t,
                                    identity: opt.appkey,
                                    style: n,
                                    lang: opt.language,
                                    v: inn_vars.v
                                },
                                success: function(e) {
                                    if (e.questiontext && (e.questiontext = e.questiontext.replace(/<span[^>]+?>/g, "<i>"), e.questiontext = e.questiontext.replace(/<\/span[^>]*?>/g, "</i>")), c = !0, -1 != s) {
                                        if (clearTimeout(s), !e.tag) return report("no tag"),
                                        void showError(!0);
                                        var a = _.id(nc_prefix + "clickCaptcha");
                                        a && (a.style.display = "block", i.__is_c_width_setted || i.updateWidth(_.id(nc_prefix + "wrapper"), 1)),
                                        e.imgurl = e.imgurl.replace("pin.aliyun.com", "pin2.aliyun.com"),
                                        el_render_to && util.addClass(el_render_to, "show-click-captcha");
                                        var l = e.imgurl.split("?")[1].split("=")[1],
                                        d = e.questiontext.split(e.tag[0]),
                                        p = d.shift();
                                        util.removeClass(inn_vars.TEXTELEM, "nc-align-center"),
                                        _.id(nc_prefix + "_scale_text") && ( - 1 == e.questiontext.indexOf("<i>") ? _.id(nc_prefix + "_scale_text").innerHTML = p + "<i>\u201c" + e.tag[0] + "\u201d</i>" + d.join(e.tag[0]) : _.id(nc_prefix + "_scale_text").innerHTML = e.questiontext),
                                        tb_login && tb_login.getInform(_.id(nc_prefix + "clickCaptcha"), module_nc.nc),
                                        r[1].innerHTML = '<img src="' + e.imgurl + '" >';
                                        var u, g = r[1].getElementsByTagName("img")[0];
                                        g.onload = function() {
                                            u = !0,
                                            -1 != f && clearTimeout(f)
                                        },
                                        g.onerror = function() {
                                            report("captcha onerror"),
                                            showError()
                                        };
                                        var f = setTimeout(function() {
                                            f = -1,
                                            u || (showError(!0), report("captcha timeout"))
                                        },
                                        5e3);
                                        _.addHandler(g, "click",
                                        function(e) {
                                            util.addClass(inn_vars.TEXTELEM, "nc-align-center"),
                                            TEXTELEM.innerHTML = language[opt.language]._Loading + loading_circle_html,
                                            _.jsonp({
                                                url: ajaxURL.checkcode,
                                                callback: "callback",
                                                data: {
                                                    csessionid: t,
                                                    checkcode: function() {
                                                        var t = {};
                                                        return t.imgid = l,
                                                        t.w = g.width.toString(),
                                                        t.h = g.height.toString(),
                                                        t.x = void 0 === e.offsetX ? util.getOffset(e).offsetX: e.offsetX,
                                                        t.y = void 0 === e.offsetY ? util.getOffset(e).offsetY: e.offsetY,
                                                        t.x = parseInt(t.x).toString(),
                                                        t.y = parseInt(t.y).toString(),
                                                        _.obj2str(t)
                                                    } (),
                                                    a: opt.appkey,
                                                    t: opt.token,
                                                    n: win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                                    p: "{}",
                                                    r: Math.random(),
                                                    lang: opt.language,
                                                    v: inn_vars.v
                                                },
                                                success: function(e) {
                                                    var a = _.id(scale_btn);
                                                    if (e.success) if (100 == e.result.code) a.className = "nc_iconfont btn_ok",
                                                    a.innerHTML = icon_ok_sign,
                                                    util.addClass(inn_vars.TEXTELEM, "nc-align-center"),
                                                    _.tag(scale_bar + " div")[0].className = "nc_bg",
                                                    TEXTELEM.innerHTML = language[opt.language]._yesTEXT,
                                                    util.removeClass(a.parentNode, "nc_err"),
                                                    _.toggle(nc_prefix + "clickCaptcha"),
                                                    el_render_to && util.removeClass(el_render_to, "show-click-captcha"),
                                                    i.userCallback && i.userCallback(t, n, e.result.sig);
                                                    else if (900 == e.result.code) {
                                                        UA_Opt.reload && UA_Opt.reload(),
                                                        o.call(i, t, n, i);
                                                        var r = _.id(nc_prefix + "_captcha_text"),
                                                        c = language[opt.language]._errorClickTEXT; ++gErrTimes > MAX_ERR_TIME && (c = language[opt.language]._errorTooMuchClick.replace("%TOKEN", opt.token)),
                                                        r.innerHTML = '<i class="nc_iconfont icon_close">' + icon_close + "</i>" + c,
                                                        r.style.visibility = "visible"
                                                    } else 300 != e.result.code && 69634 != e.result.code || (report("block"), _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "</div>", onNCEvent(event_names.error), onNCEvent(event_names.error300));
                                                    else i.errorCallback()
                                                },
                                                fail: function(e) {
                                                    i.errorCallback(e)
                                                }
                                            })
                                        }),
                                        onNCEvent(event_names.afterverify),
                                        onNCEvent(event_names.after_code)
                                    }
                                },
                                fail: function() {
                                    _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._errorLOADING) + "</div>",
                                    i.errorCallback(!0)
                                }
                            })
                        },
                        onScale200: function t(e, n) {
                            function a() {
                                var t = _.tag(nc_prefix + "imgCaptcha input")[0].value;
                                t && _.jsonp({
                                    url: ajaxURL.checkcode,
                                    callback: "callback",
                                    data: {
                                        csessionid: e,
                                        checkcode: function() {
                                            var e = {};
                                            return e.code = t,
                                            _.obj2str(e)
                                        } (),
                                        a: opt.appkey,
                                        t: opt.token,
                                        n: win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                        p: "{}",
                                        lang: opt.language,
                                        v: inn_vars.v
                                    },
                                    success: function(t) {
                                        if (t.success) {
                                            var a = _.id(scale_btn),
                                            o = _.tag(nc_prefix + "imgCaptcha div")[2];
                                            if (100 == t.result.code) a.className = "nc_iconfont btn_ok",
                                            a.innerHTML = icon_ok_sign,
                                            _.tag(scale_bar + " div")[0].className = "nc_bg",
                                            TEXTELEM.innerHTML = language[opt.language]._yesTEXT,
                                            util.addClass(inn_vars.TEXTELEM, "nc-align-center"),
                                            util.removeClass(a.parentNode, "nc_err"),
                                            o.style.borderTopColor = "#e5e5e5",
                                            _.toggle(nc_prefix + "imgCaptcha"),
                                            r.userCallback.call(this, e, n, t.result.sig);
                                            else if (900 == t.result.code) {
                                                UA_Opt.reload && UA_Opt.reload(),
                                                i.call(r, e, n);
                                                var c = language[opt.language]._errorTEXT; ++gErrTimes > MAX_ERR_TIME && (c = language[opt.language]._errorTooMuch.replace("%TOKEN", opt.token));
                                                var s = _.id(nc_prefix + "_captcha_img_text");
                                                s.innerHTML = '<i class="nc_iconfont icon_close">' + icon_close + "</i>" + c,
                                                s.style.display = "block",
                                                s.style.visibility = "visible",
                                                o.style.borderTopColor = "red"
                                            } else 300 != t.result.code && 69634 != t.result.code || (report("block"), _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "</div>", onNCEvent(event_names.error), onNCEvent(event_names.error300))
                                        } else r.errorCallback()
                                    },
                                    fail: function(e) {
                                        r.errorCallback(e)
                                    }
                                })
                            }
                            onNCEvent(event_names.beforeverify),
                            onNCEvent(event_names.before_code);
                            var o = _.id(nc_prefix + "imgCaptcha");
                            o && (o.style.display = "block", this.__is_c_width_setted || this.updateWidth(_.id(nc_prefix + "wrapper"), 1));
                            var i = t,
                            r = this,
                            c = _.tag(nc_prefix + "imgCaptcha div"),
                            s = ajaxURL.get_img + "?type=" + n + "&identity=" + opt.appkey + "&sessionid=" + e + "&r=" + Math.random();
                            c[1].innerHTML = '<img src="' + s + '" >';
                            var l = c[1].getElementsByTagName("img")[0];
                            _.addHandler(l, "click",
                            function() {
                                i.call(r, e, n)
                            }),
                            TEXTELEM.innerHTML = language[opt.language]._noTEXT,
                            tb_login && tb_login.getInform(_.id(nc_prefix + "imgCaptcha"), module_nc.nc),
                            util.removeClass(inn_vars.TEXTELEM, "nc-align-center"),
                            _.id(nc_prefix + "scale_submit").innerHTML = language[opt.language]._submit;
                            var d;
                            this.__inn && (this.__inn = 0, _.addHandler(_.id(nc_prefix + "scale_submit"), "click", a), _.addHandler(_.id(nc_prefix + "_btn_2"), "click",
                            function() {
                                i.call(this, e, n)
                            }), d = _.id(nc_prefix + "imgCaptcha"), d && (d = d.getElementsByTagName("input")[0]) && _.addHandler(d, "keydown",
                            function(e) {
                                return e = e || window.event,
                                13 == e.keyCode || 13 == e.which ? (a(), e.preventDefault ? e.preventDefault() : window.event.returnValue = !1, !1) : void 0
                            })),
                            onNCEvent(event_names.afterverify),
                            onNCEvent(event_names.after_code)
                        },
                        userCallback: function(e, t, n) {
                            var a = {
                                csessionid: e || null,
                                value: t || null,
                                sig: n || null,
                                token: _getToken()
                            };
                            opt.callback && opt.callback.call(this, a),
                            onNCEvent(event_names.success, a)
                        },
                        upLang: function(e, t) {
                            return _upLang(e, t)
                        },
                        getToken: function() {
                            return _getToken()
                        },
                        destroy: function() {
                            el_render_to.innerHTML = ""
                        }
                    },
                    NoCaptcha
                }
                var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                }: function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol": typeof e
                },
                win = window,
                doc = document,
                tb_login,
                util = require("./util"),
                mmstat_base = require("./url_map").mmstat_base,
                URL_MAP = require("./url_map").URL_MAP,
                language = require("./language-core").language,
                _upLang = require("./language-core").upLang,
                upResetIndex = require("./language-core").upResetIndex,
                loadExLang = require("./lang_util").loadExLang,
                makeTemplate = require("./tpl").makeTemplate,
                m_checkcode = require("./checkcode"),
                makeShowHelp = require("./show_help").makeShowHelp,
                default_opt = require("./default_opt").default_opt,
                css = require("./css"),
                MAX_ERR_TIME = 3,
                icon_warn = "&#xe60a;",
                icon_ok_sign = "&#xe60b;",
                icon_close = "&#xe609;",
                m_event = require("./event"),
                event_names = m_event.names,
                event_deprecated = m_event.deprecated;
                exports.makeNoCaptcha = makeNoCaptcha
            },
            {
                "./checkcode": 5,
                "./css": 6,
                "./default_opt": 7,
                "./event": 8,
                "./glog": 9,
                "./lang_util": 10,
                "./language-core": 12,
                "./show_help": 19,
                "./tb_login": 20,
                "./tpl": 21,
                "./url_map": 22,
                "./util": 23
            }],
            15 : [function(e, t, n) {
                "use strict";
                function a(e) {
                    var t;
                    e && (t = e.filename + "") && (t = t.split("?")[0], t.match(/(\/ncpc\/nc\.js$)|(\/uab\.js$)|(umscript.*\/um\.js$)/) && (i.console && void 0, o()))
                }
                function o(e) {
                    "function" == typeof ncDowngrade ? (ncDowngrade(), e && i.__nc && i.__nc.show()) : e || setTimeout(function() {
                        o(1)
                    },
                    100)
                }
                var i = window;
                i.addEventListener ? i.addEventListener("error", a, !0) : i.attachEvent && i.attachEvent("onerror", a)
            },
            {}],
            16 : [function(e, t, n) {
                "use strict";
                n.reg = function(e) {
                    if ( - 1 !== location.hostname.indexOf("alipay.com")) {
                        var t = e.renderTo;
                        if (t && "string" == typeof t) {
                            t = t.replace("#", "");
                            var n = document.getElementById(t);
                            if (n) {
                                var a = n.parentNode;
                                a && "_umfp" == a.id && (e.customWidth = e.customWidth || 300)
                            }
                        }
                    }
                }
            },
            {}],
            17 : [function(e, t, n) {
                "use strict";
                var a, o, i = "//g.alicdn.com/sd/ncpc/nc.css",
                r = document.getElementsByTagName("link"),
                c = r.length;
                try {
                    for (a = 0; c > a; a++) o = r[a],
                    o.href && -1 != o.href.indexOf(i) && (o.disabled = !0)
                } catch(s) {}
            },
            {}],
            18 : [function(e, t, n) {
                "use strict";
                function a() {
                    var e = navigator.userAgent;
                    return ! /Firefox|MSIE/.test(e)
                }
                function o(e, t, n) {
                    function o(e, n, o) {
                        t.TEXTELEM && (t.TEXTELEM.innerHTML = s[o.opt.language || l.language]._startTEXT, a() && c.addClass(t.TEXTELEM, "slidetounlock")),
                        this.btn = r.getElementById(e),
                        this.bar = r.getElementById(n),
                        this.txt = r.getElementById(p + "_scale_text"),
                        this.step = this.bar.getElementsByTagName("DIV")[0],
                        this.init(o)
                    }
                    var p = t.prefix;
                    return o.prototype = {
                        init: function(t) {
                            function a(a) {
                                function i() {
                                    s.btn.onmousedown = null,
                                    s.txt.onmousedown = null,
                                    e.removeEvt(l, "mousemove", r),
                                    e.removeEvt(l, "mouseup", _),
                                    e.removeEvt(l, "touchmove", h),
                                    e.removeEvt(l, "touchend", f),
                                    e.removeEvt(s.btn, "touchstart", o),
                                    e.removeEvt(s.txt, "touchstart", o);
                                    var a = {};
                                    a.btn = s.btn,
                                    a.bar = s.bar.childNodes[1],
                                    t.onScaleReady(a),
                                    n(d.actionend),
                                    n(d.slide_end)
                                }
                                function r(e) {
                                    m || (n(d.actionstart), n(d.slide_start), m = !0);
                                    var t = (e || u.event).clientX,
                                    a = g.min(y, g.max( - 2, k + (t - v)));
                                    s.btn.style.left = a + "px",
                                    s.ondrag(g.round(100 * g.max(0, a / y)), a);
                                    var o = x + s.bar.offsetWidth;
                                    if (t >= o && (y > a || y > t - k)) return void _.call(this);
                                    var r = c.getClientRect(s.btn).left;
                                    a != y && t - r - b != y || i()
                                }
                                function _() {
                                    var t = parseInt(s.btn.style.left);
                                    y > t && (c.addClass(s.btn, "button_move"), c.addClass(e.id(p + "_bg"), "bg_move"), s.btn.style.left = "0px", s.ondrag(0, 0), setTimeout(function() {
                                        c.removeClass(s.btn, "button_move"),
                                        c.removeClass(e.id(p + "_bg"), "bg_move")
                                    },
                                    500)),
                                    e.removeEvt(this, "touchmove", h),
                                    e.removeEvt(l, "touchmove", h),
                                    e.removeEvt(l, "mousemove", r),
                                    e.removeEvt(l, "mouseup", _)
                                }
                                function f(e) {
                                    _.call(this, e.touches[0])
                                }
                                function h(e) {
                                    e.preventDefault(),
                                    r.call(this, e.touches[0])
                                }
                                var m = !1,
                                v = (a || u.event).clientX,
                                b = s.btn.offsetWidth,
                                y = s.bar.offsetWidth - b,
                                k = s.btn.offsetLeft,
                                x = c.getClientRect(s.bar).left;
                                e.addHandler(l, "mousemove", r),
                                e.addHandler(l, "mouseup", _),
                                e.addHandler(l, "touchmove", h),
                                e.addHandler(l, "touchend", f)
                            }
                            function o(e) {
                                e.preventDefault(),
                                a.call(this, e.touches[0])
                            }
                            var s = this,
                            l = r,
                            u = i,
                            g = Math;
                            s.btn.onmousedown = a,
                            s.txt.onmousedown = a,
                            e.addHandler(s.btn, "touchstart", o),
                            e.addHandler(s.txt, "touchstart", o),
                            s.bar.onselectstart = function() {
                                return ! 1
                            }
                        },
                        ondrag: function(e, t) {
                            this.step.style.width = Math.max(0, t) + "px"
                        },
                        text: function() {}
                    },
                    o
                }
                var i = window,
                r = document,
                c = e("./util"),
                s = e("./language-core").language,
                l = e("./default_opt").default_opt,
                d = e("./event").names;
                n.makeScale = o
            },
            {
                "./default_opt": 7,
                "./event": 8,
                "./language-core": 12,
                "./util": 23
            }],
            19 : [function(e, t, n) {
                "use strict";
                function a(e, t, n) {
                    function a() {
                        c || (c = r()),
                        c()
                    }
                    function r() {
                        function n() {
                            var e = o.createElement("div");
                            return e.innerHTML = r,
                            e.firstChild
                        }
                        function a() {
                            function n() {
                                var t = 0,
                                n = 260,
                                a = setInterval(function() {
                                    t += 5,
                                    t > n ? (u.innerHTML = i[e.language]._Loading, t > n + 100 && (u.innerHTML = i[e.language]._yesTEXT, clearInterval(a), setTimeout(function() {
                                        g.click()
                                    },
                                    2e3))) : (_.style.left = s + 20 + t + "px", p.style.left = t + "px", u.style.width = t + "px")
                                },
                                16)
                            }
                            u.innerHTML = "",
                            c.style.display = "block";
                            var a = t.id(e.renderTo),
                            r = a.getBoundingClientRect(),
                            s = r.left,
                            l = r.top + 20 + o.body.scrollTop;
                            d.style.left = s + "px",
                            d.style.top = l + "px",
                            p.style.left = s - 10 + "px",
                            _.style.left = s + 20 + "px",
                            _.style.top = l + 20 + "px",
                            g.style.left = s + 200 + "px",
                            g.style.top = l + 90 + "px",
                            n()
                        }
                        var r = '<div id="' + s + '_help" class="nc_help"><div class="mask"></div><div id="' + s + '_slide_box" class="nc_scale"><div id="' + s + '_slide_button"></div><div id="' + s + '_slide_text" class="scale_text"></div><div id="' + s + '_slide_bg"></div></div><div id="' + s + '_btn_close"></div><div id="' + s + '_hand"></div>',
                        c = n(r);
                        o.body.appendChild(c),
                        c.style.display = "none",
                        c.style.width = o.body.scrollWidth + "px",
                        c.style.height = o.body.scrollHeight + "px";
                        var l = t.id(s + "_slide_text");
                        l.innerHTML = i[e.language]._startTEXT;
                        var d = t.id(s + "_slide_box"),
                        p = t.id(s + "_slide_button"),
                        u = t.id(s + "_slide_bg"),
                        g = t.id(s + "_btn_close"),
                        _ = t.id(s + "_hand");
                        return g.innerHTML = i[e.language]._closeHelp,
                        g.onclick = function() {
                            c.style.display = "none"
                        },
                        a
                    }
                    var c, s = n.prefix;
                    return a
                }
                var o = document,
                i = e("./language-core").language;
                n.makeShowHelp = a
            },
            {
                "./language-core": 12
            }],
            20 : [function(e, t, n) {
                "use strict";
                function a(t) {
                    function n(e) {
                        return o.getElementById(e)
                    }
                    function a(e) {
                        if (!e) return 0;
                        for (var t = e.offsetTop,
                        n = e.offsetParent; n;) t += n.offsetTop,
                        n = n.offsetParent;
                        return t
                    }
                    function i(e, t) {
                        var n, a, o, i = e.getElementsByTagName("div");
                        for (n = 0; n < i.length; n++) if (a = i[n], o = a.className, o && o.indexOf(t) > -1) return a;
                        return null
                    }
                    function r(e) {
                        var t = n(f + "_scale_text"),
                        a = i(e, "captcha-error");
                        a || (a = o.createElement("div"), a.className = "captcha-error login-msg error", e.appendChild(a)),
                        a.innerHTML = ["<i class='nc_iconfont icon_ban'>&#xe603;</i>", "<p class='error'>", t.innerHTML, "</p>"].join("")
                    }
                    function c(e, t) {
                        var n = e.className;
                        n.match(new RegExp("(^|\\s)" + t + "(\\s|$)")) || (e.className = (e.className + " " + t).replace(/^\s+|\s+$/g, ""))
                    }
                    function s() {
                        var e = 0,
                        t = n("J_Message");
                        return t && (e = t.offsetHeight),
                        e
                    }
                    function l() {
                        s() > 0 && _ && c(_, "nc-tm-min-fix")
                    }
                    function d(e) {
                        if (_) {
                            var t;
                            m && (t = n(f + "_btn_1")) && (t.style.position = "absolute", t.style.top = "77px", t.style.right = "0");
                            var o = _.className || "",
                            i = "tb-login"; - 1 == o.indexOf(i) && (_.className = (o + " " + i).replace(/^\s+|\s+$/g, "")),
                            _.className.match(/\bnc-old-login\b/) && (u = !0);
                            var r;
                            if (r = n("J_LoginBox") || n("J_Login") || h.getElementsByClassName("nc-outer-box")[0]) {
                                var c = u ? 0 : 2,
                                p = a(_),
                                g = d;
                                if (0 >= p) {
                                    if (g._count > 100) return;
                                    return g._count = (g._count || 0) + 1,
                                    void setTimeout(g, 100)
                                }
                                var v, b, y = a(r) - p,
                                k = r.getBoundingClientRect();
                                "number" == typeof e ? (v = e, b = 1) : v = k.height ? k.height: k.bottom - k.top;
                                var x, T;
                                T = n(f + "imgCaptcha"),
                                T && (T.style.top = y + c + "px", x = v - c - 66, b && (x -= 13), b || 0 !== s() || (T.style.minHeight = "290px", x -= 10), T.style.height = x + "px", b && (T.style.minHeight = 0)),
                                T = n(f + "clickCaptcha"),
                                T && (T.style.top = y + c + "px", u ? (l(), x = v + 30, 255 > x && (x = 255), T.style.height = x + "px") : (l(), x = v - c - 30, b && (x -= 8), T.style.height = x + "px"), b && (T.style.minHeight = 0))
                            }
                        }
                    }
                    function p(e, t, n) {
                        g = e,
                        _ = t,
                        d(n)
                    }
                    var u, g, _, f = t.prefix,
                    h = e("./util"),
                    m = h.isIEX(6);
                    return {
                        init: p,
                        adjustPosition: d,
                        getInform: r
                    }
                }
                var o = document;
                n.makeTBLogin = a
            },
            {
                "./util": 23
            }],
            21 : [function(e, t, n) {
                "use strict";
                function a(e) {
                    var t = e.prefix,
                    n = '\n<div id="' + t + 'wrapper" class="nc_wrapper">\n<div id="' + t + 'n1t" class="nc_scale">\n<div id="' + t + '_bg" class="nc_bg"></div>\n<span id="' + t + 'n1z" class="nc_iconfont btn_slide">&#xe601;</span>\n<div id="' + t + '_scale_text" class="scale_text"></div>\n<div id="' + t + 'clickCaptcha" class="clickCaptcha">\n<div class="clickCaptcha_text">\n<b id="' + t + '_captcha_text" class="nc_captch_text"></b>\n<i id="' + t + '_btn_2" class="nc_iconfont nc_btn_2 btn_refresh">&#xe607;</i>\n</div>\n<div class="clickCaptcha_img"></div>\n<div class="clickCaptcha_btn"></div>\n</div>\n<div id="' + t + 'imgCaptcha" class="imgCaptcha">\n<div class="imgCaptcha_text"><input type="text" style="ime-mode:inactive"></div>\n<div class="imgCaptcha_img" id="' + t + '_imgCaptcha_img"></div>\n<i id="' + t + '_btn_1" class="nc_iconfont nc_btn_1 btn_refresh"\n    onclick="document.getElementById(\'' + t + '_imgCaptcha_img\').children[0].click()">&#xe607;</i>\n<div class="imgCaptcha_btn">\n<div id="' + t + '_captcha_img_text" class="nc_captcha_img_text"></div>\n<div id="' + t + 'scale_submit" class="nc_scale_submit"></div>\n</div>\n</div>\n<i id="' + t + '_voicebtn" class="nc_voicebtn nc_iconfont" style="display:none" >&#xe604;</i>\n<b id="' + t + '_helpbtn" class="nc_helpbtn"></b>\n</div>\n<div id="' + t + '_voice" class="nc_voice"></div>\n</div>\n';
                    return n
                }
                n.makeTemplate = a
            },
            {}],
            22 : [function(e, t, n) {
                "use strict";
                var a = {
                    log: "//log.mmstat.com/",
                    gm: "//gm.mmstat.com/",
                    gj: "//gj.mmstat.com/"
                };
                n.mmstat_base = a;
                var o = {
                    0 : {
                        analyze: "//cf.aliyun.com/nocaptcha/analyze.jsonp",
                        get_captcha: "//pin2.aliyun.com/get_captcha/ver3",
                        get_img: "//pin2.aliyun.com/get_img",
                        checkcode: "//cf.aliyun.com/captcha/checkcode.jsonp",
                        umid_Url: "//g.alicdn.com/security/umscript/3.2.1/um.js",
                        uab_Url: "//af.alicdn.com/js/uac.js",
                        umid_serUrl: "https://ynuf.alipay.com/service/um.json"
                    },
                    1 : {
                        analyze: "//cfus.aliyun.com/nocaptcha/analyze.jsonp",
                        get_captcha: "//captcha.alibaba.com/get_captcha/ver3",
                        get_img: "//captcha.alibaba.com/get_img",
                        checkcode: "//cfus.aliyun.com/captcha/checkcode.jsonp",
                        umid_Url: "//g.alicdn.com/security/umscript/3.2.1/um.js",
                        uab_Url: "//aeu.alicdn.com/js/uab.js",
                        umid_serUrl: "https://us.ynuf.alipay.com/service/um.json"
                    },
                    2 : {
                        analyze: "//cfun.aliyun.com/nocaptcha/analyze.jsonp",
                        get_captcha: "//pin2.aliyun.com/get_captcha/ver3",
                        get_img: "//pin2.aliyun.com/get_img",
                        checkcode: "//cfun.aliyun.com/captcha/checkcode.jsonp",
                        umid_Url: "//g.alicdn.com/security/umscript/3.2.1/um.js",
                        uab_Url: "//aeu.alicdn.com/js/uab.js",
                        umid_serUrl: "https://ynuf.alipay.com/service/um.json"
                    }
                };
                n.URL_MAP = o
            },
            {}],
            23 : [function(e, t, n) {
                "use strict";
                var a = window,
                o = document,
                i = n.rndId = function(e) {
                    return ((e || "") + Math.random()).replace(".", "")
                };
                n.addClass = function(e, t) {
                    var n = e.className || "";
                    n.match(new RegExp("(^|\\s)" + t + "(\\s|$)")) || (e.className = (n + " " + t).replace(/^\s+|\s+$/g, ""))
                },
                n.removeClass = function(e, t) {
                    var n = e.className || "",
                    a = n.replace(new RegExp("(^|\\s)" + t + "(\\s|$)"), " ").replace(/^\s+|\s+$/g, "");
                    a != n && (e.className = a)
                },
                n.getElementsByClassName = function(e, t, n) {
                    if (o.getElementsByClassName) return o.getElementsByClassName(e);
                    t = t || o,
                    n = n || "*";
                    var a = [],
                    i = "*" === n && t.all ? t.all: t.getElementsByTagName(n),
                    r = i.length;
                    e = e.replace(/\-/g, "\\-");
                    for (var c = new RegExp("(^|\\s)" + e + "(\\s|$)"); --r >= 0;) c.test(i[r].className) && a.push(i[r]);
                    return a
                },
                n.setCookie = function(e, t, n) {
                    n = n || 7;
                    var a = new Date;
                    a.setTime(a.getTime() + 864e5 * n),
                    document.cookie = [encodeURIComponent(e), "=", encodeURIComponent("" + t), ";expires=", a.toGMTString()].join("")
                },
                n.send = function(e) {
                    var t = i("_nc_r_"),
                    n = a[t] = new Image;
                    n.onload = n.onerror = function() {
                        a[t] = null
                    },
                    n.src = e
                },
                n.obj2param = function(e) {
                    var t = [];
                    for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                    return t.join("&")
                },
                n.addHourStamp = function(e, t) {
                    var n = Math.floor((new Date).getTime() / (36e5 * (t || 2))),
                    a = -1 === e.indexOf("?") ? "?": "&";
                    return e + a + "_t=" + n
                };
                var r = {};
                n.isIEX = function(e) {
                    if (e in r) return r[e];
                    var t = o.createElement("b");
                    return t.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->",
                    r[e] = 1 === t.getElementsByTagName("i").length
                };
                var c = n.getElementLeft = function(e) {
                    for (var t = e.offsetLeft,
                    n = e.offsetParent; null !== n;) t += n.offsetLeft,
                    n = n.offsetParent;
                    return t
                },
                s = n.getElementTop = function(e) {
                    for (var t = e.offsetTop,
                    n = e.offsetParent; null !== n;) t += n.offsetTop,
                    n = n.offsetParent;
                    return t
                };
                n.getClientRect = function(e) {
                    var t = o.documentElement.scrollTop,
                    n = o.documentElement.scrollLeft;
                    if (e.getBoundingClientRect) {
                        var a = e.getBoundingClientRect();
                        return {
                            left: a.left - n,
                            right: a.right - n,
                            top: a.top - t,
                            bottom: a.bottom - t
                        }
                    }
                    var i = c(e),
                    r = s(e);
                    return {
                        left: i,
                        right: i + e.offsetWidth,
                        top: r,
                        bottom: r + e.offsetHeight
                    }
                },
                n.getOffset = function(e) {
                    var t = e.target;
                    void 0 === t.offsetLeft && (t = t.parentNode);
                    var n = l(t),
                    o = {
                        x: a.pageXOffset + e.clientX,
                        y: a.pageYOffset + e.clientY
                    };
                    return {
                        offsetX: o.x - n.x,
                        offsetY: o.y - n.y
                    }
                };
                var l = n.getPageCoord = function(e) {
                    for (var t = {
                        x: 0,
                        y: 0
                    }; e;) t.x += e.offsetLeft,
                    t.y += e.offsetTop,
                    e = e.offsetParent;
                    return t
                },
                d = {
                    before: function(e, t) {
                        return function() {
                            return e.call(this),
                            t.apply(this, arguments)
                        }
                    },
                    after: function(e, t) {
                        return function() {
                            var n = e.apply(this, arguments);
                            return t.call(this, n, arguments),
                            n
                        }
                    }
                };
                n.decorator = d,
                n.mix = function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                },
                n.clone = function(e) {
                    var t = {};
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    return t
                }
            },
            {}],
            24 : [function(e, t, n) {
                "use strict";
                n.v = 493
            },
            {}]
        },
        {},
        [2])
    };
    chkQuerySet(),
    cond() > GREY_RATIO ? STABLE_ACTION() : NEW_ACTION()
} ();