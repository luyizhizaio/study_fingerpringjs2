/* 2016-04-20 11:26:13 */
!
    function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(o.exports, o, o.exports, e),
                o.loaded = !0,
                o.exports
        }
        var n = {};
        return e.m = t,
            e.c = n,
            e.p = "",
            e(0)
    } ([function(t, e, n) {
        t.exports = n(16)
    },
        , ,
        function(t, e) {
            var n = [].slice,
                r = {},
                o = function(t, e) {
                    var n = r[t] || (r[t] = []);
                    n.push(e)
                },
                a = function(t, e) {
                    var n = function() {
                        i(t, n),
                            e.apply(null, arguments)
                    };
                    o(t, n)
                },
                i = function(t, e) {
                    if (!t && !e) return void(r = {});
                    var n = r[t];
                    if (n) if (e) for (var o = n.length - 1; o >= 0; o--) n[o] === e && n.splice(o, 1);
                    else delete r[t]
                },
                u = function(t) {
                    var e = r[t],
                        o = n.call(arguments, 1);
                    if (e) {
                        e = e.slice();
                        for (var a = 0,
                                 i = e.length; i > a; a++) e[a].apply(null, o)
                    }
                };
            t.exports = {
                on: o,
                one: a,
                off: i,
                trigger: u,
                __events: r
            }
        },
        function(t, e) {
            var n = {};
            n.encode = function(t) {
                var e = t.replace(/[\u0080-\u07ff]/g,
                    function(t) {
                        var e = t.charCodeAt(0);
                        return String.fromCharCode(192 | e >> 6, 128 | 63 & e)
                    });
                return e = e.replace(/[\u0800-\uffff]/g,
                    function(t) {
                        var e = t.charCodeAt(0);
                        return String.fromCharCode(224 | e >> 12, 128 | e >> 6 & 63, 128 | 63 & e)
                    })
            },
                n.ROTL = function(t, e) {
                    return t << e | t >>> 32 - e
                },
                n.toHexStr = function(t) {
                    for (var e, n = "",
                             r = 7; r >= 0; r--) e = t >>> 4 * r & 15,
                        n += e.toString(16);
                    return n
                },
                n.f = function(t, e, n, r) {
                    switch (t) {
                        case 0:
                            return e & n ^ ~e & r;
                        case 1:
                            return e ^ n ^ r;
                        case 2:
                            return e & n ^ e & r ^ n & r;
                        case 3:
                            return e ^ n ^ r
                    }
                },
                n.hash = function(t, e) {
                    e = "undefined" == typeof e ? !0 : e,
                    e && (t = n.encode(t));
                    var r = [1518500249, 1859775393, 2400959708, 3395469782];
                    t += String.fromCharCode(128);
                    var o, a, i, u = t.length / 4 + 2,
                        c = Math.ceil(u / 16),
                        s = new Array(c);
                    for (o = 0; c > o; o++) for (s[o] = new Array(16), i = 0; 16 > i; i++) s[o][i] = t.charCodeAt(64 * o + 4 * i) << 24 | t.charCodeAt(64 * o + 4 * i + 1) << 16 | t.charCodeAt(64 * o + 4 * i + 2) << 8 | t.charCodeAt(64 * o + 4 * i + 3);
                    s[c - 1][14] = 8 * (t.length - 1) / Math.pow(2, 32),
                        s[c - 1][14] = Math.floor(s[c - 1][14]),
                        s[c - 1][15] = 8 * (t.length - 1) & 4294967295;
                    var f, l, p, h, d, g = 1732584193,
                        v = 4023233417,
                        m = 2562383102,
                        y = 271733878,
                        x = 3285377520,
                        w = new Array(80);
                    for (o = 0; c > o; o++) {
                        for (a = 0; 16 > a; a++) w[a] = s[o][a];
                        for (a = 16; 80 > a; a++) w[a] = n.ROTL(w[a - 3] ^ w[a - 8] ^ w[a - 14] ^ w[a - 16], 1);
                        for (f = g, l = v, p = m, h = y, d = x, a = 0; 80 > a; a++) {
                            var b = Math.floor(a / 20),
                                _ = n.ROTL(f, 5) + n.f(b, l, p, h) + d + r[b] + w[a] & 4294967295;
                            d = h,
                                h = p,
                                p = n.ROTL(l, 30),
                                l = f,
                                f = _
                        }
                        g = g + f & 4294967295,
                            v = v + l & 4294967295,
                            m = m + p & 4294967295,
                            y = y + h & 4294967295,
                            x = x + d & 4294967295
                    }
                    return n.toHexStr(g) + n.toHexStr(v) + n.toHexStr(m) + n.toHexStr(y) + n.toHexStr(x)
                },
                t.exports = n
        },
        function(t, e) {
            function n(t) {
                return this instanceof n ? (this._state = c, this._onFulfilled = [], this._onRejected = [], this._value = null, this._reason = null, void(l(t) && t(a(this.resolve, this), a(this.reject, this)))) : new n(t)
            }
            function r(t, e, n) {
                return function(r) {
                    if (l(e)) try {
                        var a = e(r);
                        o(a) ? a.then(function(e) {
                                t.resolve(e)
                            },
                            function(e) {
                                t.reject(e)
                            }) : t.resolve(a)
                    } catch(i) {
                        t.reject(i)
                    } else t[n](r)
                }
            }
            function o(t) {
                return t && l(t.then)
            }
            function a(t, e) {
                var n = [].slice,
                    r = n.call(arguments, 2),
                    o = function() {},
                    a = function() {
                        return t.apply(this instanceof o ? this: e, r.concat(n.call(arguments)))
                    };
                return o.prototype = t.prototype,
                    a.prototype = new o,
                    a
            }
            function i(t) {
                return function(e) {
                    return {}.toString.call(e) == "[object " + t + "]"
                }
            }
            function u(t, e) {
                for (var n = 0,
                         r = t.length; r > n; n++) e(t[n], n)
            }
            var c = 0,
                s = 1,
                f = 2;
            n.prototype = {
                constructor: n,
                then: function(t, e) {
                    var o = new n,
                        a = r(o, t, "resolve"),
                        i = r(o, e, "reject");
                    return this._state === s ? a(this._value) : this._state === f ? i(this._reason) : (this._onFulfilled.push(a), this._onRejected.push(i)),
                        o
                },
                resolve: function(t) {
                    this._state === c && (this._state = s, this._value = t, u(this._onFulfilled,
                        function(e) {
                            e(t)
                        }), this._onFulfilled = [])
                },
                reject: function(t) {
                    this._state === c && (this._state = f, this._reason = t, u(this._onRejected,
                        function(e) {
                            e(t)
                        }), this._onRejected = [])
                },
                "catch": function(t) {
                    return this.then(null, t)
                },
                always: function(t) {
                    return this.then(t, t)
                }
            },
                n.defer = function() {
                    var t = {};
                    return t.promise = new n(function(e, n) {
                        t.resolve = e,
                            t.reject = n
                    }),
                        t
                },
                n.race = function(t) {
                    var e = n.defer();
                    t.length;
                    return u(t,
                        function(t) {
                            t.then(function(t) {
                                    e.resolve(t)
                                },
                                function(t) {
                                    e.reject(t)
                                })
                        }),
                        e.promise
                },
                n.all = function(t) {
                    var e = n.defer(),
                        r = t.length,
                        o = [];
                    return u(t,
                        function(t, n) {
                            t.then(function(t) {
                                    o[n] = t,
                                        r--,
                                    0 === r && e.resolve(o)
                                },
                                function(t) {
                                    e.reject(t)
                                })
                        }),
                        e.promise
                },
                n.resolve = function(t) {
                    return new n(function(e) {
                        e(t)
                    })
                },
                n.reject = function(t) {
                    return new n(function(e, n) {
                        n(t)
                    })
                };
            var l = i("Function");
            t.exports = n
        },
        function(t, e, n) { (function(e) {
            var r = e,
                o = r.document,
                a = n(7),
                i = n(5),
                u = (r.JSON || a).stringify,
                c = (r.JSON || a).parse,
                s = o.getElementsByTagName("script")[0].parentNode,
                f = function(t, e, n) {
                    if (t) {
                        var r = 0,
                            o = t.length;
                        if (o === +o) for (; o > r && e.call(n, t[r], r, t) !== !1; r++);
                        else for (r in t) if (t.hasOwnProperty(r) && e.call(n, t[r], r, t) === !1) break
                    }
                },
                l = {
                    wait: function(t) {
                        return new i(function(e, n) {
                            setTimeout(n, t)
                        })
                    },
                    allSettled: function(t) {
                        var e = i.defer(),
                            n = t.length;
                        return f(t,
                            function(t, r) {
                                t.always(function() {
                                    n--,
                                    0 === n && e.resolve()
                                })
                            }),
                            e.promise
                    },
                    each: f,
                    singleton: function(t, e) {
                        var n;
                        return function() {
                            return "undefined" != typeof n ? n: n = t.apply(e, arguments)
                        }
                    },
                    extend: function(t) {
                        for (var e, n, r = [].slice.call(arguments), o = r.length, a = 1; o > a; a++) {
                            e = r[a];
                            for (n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        }
                        return t
                    },
                    poll: function(t, e, n) {
                        n = n || 1e4,
                            e = e || 500;
                        var r = null,
                            o = i.race([l.wait(n), new i(function(n, o) {
                                function a() {
                                    var e = t();
                                    return e ? (n(e), 1) : 0
                                }
                                a() || (r = setInterval(a, e))
                            })]);
                        return o.always(function() {
                            clearInterval(r)
                        }),
                            o
                    },
                    append: function(t, e) {
                        t || (t = o.body);
                        var n = o.createElement("span");
                        n.innerHTML = e,
                            t.insertBefore(n.firstChild, t.firstChild),
                            n = null
                    },
                    post: function(t, e) {
                        var n = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
                        return n ? new i(function(n, r) {
                            var o, a = "POST",
                                i = function() {
                                    var t = o && o.responseText;
                                    n(c(t || "{}"))
                                },
                                u = function(t) {
                                    r(t)
                                };
                            try {
                                o = new XMLHttpRequest,
                                    o.open(a, t, !0),
                                    o.withCredentials = !0,
                                o.setRequestHeader && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                                    o.onload = i,
                                    o.onerror = u,
                                    o.send("data=" + encodeURIComponent(e))
                            } catch(s) {}
                        }) : l.jsonp(t, e)
                    },
                    jsonp: function(t, e) {
                        return new i(function(n, a) {
                            var i = o.createElement("script"),
                                u = "_" + parseInt(1e4 * Math.random(), 10) + "_" + (new Date).getTime(),
                                c = [];
                            c.push("data=" + encodeURIComponent(e)),
                                c.push("_callback=" + u),
                                t += t.indexOf("?") > 0 ? "&": "?",
                                t += c.join("&"),
                                i.src = t,
                                r[u] = function(t) {
                                    n(t);
                                    try {
                                        s.removeChild(i),
                                            delete r[u]
                                    } catch(e) {}
                                },
                                s.appendChild(i)
                        })
                    },
                    parseJson: c,
                    toJson: u,
                    log: function(t) {
                        var e = new Image,
                            n = "_um_img_" + Math.random();
                        r[n] = e,
                            e.onload = e.onerror = function() {
                                r[n] = null
                            },
                            e.src = t
                    }
                };
            t.exports = l
        }).call(e,
            function() {
                return this
            } ())
        },
        function(module, exports) {
            var JSON = {}; !
                function() {
                    "use strict";
                    function f(t) {
                        return 10 > t ? "0" + t: t
                    }
                    function this_value() {
                        return this.valueOf()
                    }
                    function quote(t) {
                        return rx_escapable.lastIndex = 0,
                            rx_escapable.test(t) ? '"' + t.replace(rx_escapable,
                                function(t) {
                                    var e = meta[t];
                                    return "string" == typeof e ? e: "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice( - 4)
                                }) + '"': '"' + t + '"'
                    }
                    function str(t, e) {
                        var n, r, o, a, i, u = gap,
                            c = e[t];
                        switch (c && "object" == typeof c && "function" == typeof c.toJSON && (c = c.toJSON(t)), "function" == typeof rep && (c = rep.call(e, t, c)), typeof c) {
                            case "string":
                                return quote(c);
                            case "number":
                                return isFinite(c) ? String(c) : "null";
                            case "boolean":
                            case "null":
                                return String(c);
                            case "object":
                                if (!c) return "null";
                                if (gap += indent, i = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                                    for (a = c.length, n = 0; a > n; n += 1) i[n] = str(n, c) || "null";
                                    return o = 0 === i.length ? "[]": gap ? "[\n" + gap + i.join(",\n" + gap) + "\n" + u + "]": "[" + i.join(",") + "]",
                                        gap = u,
                                        o
                                }
                                if (rep && "object" == typeof rep) for (a = rep.length, n = 0; a > n; n += 1)"string" == typeof rep[n] && (r = rep[n], o = str(r, c), o && i.push(quote(r) + (gap ? ": ": ":") + o));
                                else for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (o = str(r, c), o && i.push(quote(r) + (gap ? ": ": ":") + o));
                                return o = 0 === i.length ? "{}": gap ? "{\n" + gap + i.join(",\n" + gap) + "\n" + u + "}": "{" + i.join(",") + "}",
                                    gap = u,
                                    o
                        }
                    }
                    var rx_one = /^[\],:{}\s]*$/,
                        rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                        rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                        rx_four = /(?:^|:|,)(?:\s*\[)+/g,
                        rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null
                    },
                        Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);
                    var gap, indent, meta, rep;
                    "function" != typeof JSON.stringify && (meta = {
                        "\b": "\\b",
                        "	": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                        JSON.stringify = function(t, e, n) {
                            var r;
                            if (gap = "", indent = "", "number" == typeof n) for (r = 0; n > r; r += 1) indent += " ";
                            else "string" == typeof n && (indent = n);
                            if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
                            return str("", {
                                "": t
                            })
                        }),
                    "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                        function walk(t, e) {
                            var n, r, o = t[e];
                            if (o && "object" == typeof o) for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n), void 0 !== r ? o[n] = r: delete o[n]);
                            return reviver.call(t, e, o)
                        }
                        var j;
                        if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous,
                                function(t) {
                                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice( - 4)
                                })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"),
                            "function" == typeof reviver ? walk({
                                    "": j
                                },
                                "") : j;
                        throw new SyntaxError("JSON.parse")
                    })
                } (),
                module.exports = JSON
        },
        function(t, e) {
            t.exports = {
                storageType: 0,
                asyncCollect: [],
                storeKey: "_umdata",
                storeTimeKey: "_umcost",
                tkCache: "_umtk"
            }
        },
        ,
        function(t, e, n) { (function(e) {
            function r() {
                var t;
                return s.each(m,
                    function(e) {
                        try {
                            t = e()
                        } catch(n) {}
                        return t ? !1 : void 0
                    }),
                    t
            }
            function o(t) {
                return s.poll(function() {
                        return g.getElementById(t)
                    },
                    200, 1500)
            }
            function a(t, e) {
                var n, r, o = t.getElementsByTagName("input");
                for (n = 0; n < o.length; n++) if ("um_token" == o[n].getAttribute("name")) {
                    r = o[n];
                    break
                }
                return r ? r.value = e: (r = g.createElement("input"), r.type = "hidden", r.name = "um_token", r.value = e, t.appendChild(r)),
                    r
            }
            var i = n(3),
                u = (n(4), n(11)),
                c = n(12),
                s = (n(5), n(6)),
                f = n(13),
                l = n(14),
                p = n(8),
                h = n(15),
                d = e,
                g = d.document,
                v = s.parseJson,
                m = {
                    taobao: function() {
                        return c.get("tracknick")
                    },
                    alipay: function() {
                        var t, e = f.get("home-username");
                        return e && (e = v(e), t = e.match(/^(\d+?)\|/), t && 2 === t.length) ? v(e.replace(t[0], "")).value: void 0
                    },
                    alibaba: function() {
                        var t, e, n = g.getElementById("alibaba-login-box");
                        return n && (t = n.src, e = /loginId=(?:([^&#]*)|&|#|$)/.exec(t)) ? decodeURIComponent(e[1]) : void 0
                    }
                },
                y = "3.2.2",
                x = {
                    debug: !1,
                    enabled: !0,
                    cache: !0,
                    closeImage: !0,
                    token: "",
                    appName: "",
                    sessionId: "",
                    userId: r() || "",
                    model: "AA",
                    traceId: "",
                    formId: "",
                    serviceLocation: "cn",
                    noRequest: !1,
                    clientType: "M"
                },
                w = {
                    cn: "https://ynuf.alipay.com/service/um.json",
                    us: "https://us.ynuf.alipay.com/service/um.json",
                    daily: "https://umidstable.alibaba-inc.com/service/um.json"
                };
            i.trigger("main.load", {
                defaultOptions: x
            });
            var b = function() {
                    function t(t) {
                        for (var e = ""; e.length < t;) e += Math.random().toString().substr(2);
                        return e.substring(e.length - t)
                    }
                    var e = d._sec_module = d._sec_module || {};
                    if (e.token) return "C" + e.token;
                    var n = +new Date,
                        r = "_uab_collina",
                        o = c.get(r);
                    o || (o = n + t(11), c.set(r, o, null, 3650, "/"));
                    var a = o + n + t(3);
                    return e.token = a,
                    "C" + a
                },
                _ = function(t) {
                    t = t || {},
                        t.serviceUrl = t.serviceUrl || w[t.serviceLocation],
                        this.options = t,
                        this.status = 0,
                        this.clientToken = b(),
                        this.asyncCollect = [],
                        this.data = {}
                };
            _.prototype = {
                getToken: function() {
                    return this.options.token || this.serverToken || this.clientToken
                },
                getTokenType: function() {
                    return this.serverToken ? 2 : 1
                },
                init: function() {
                    var t = this.options;
                    this.status = 1,
                        this.startTime = new Date,
                    t.closeImage || s.log(t.serviceUrl.replace("um.json", "clear.png") + "?xt=" + this.getToken() + "&xa=" + t.appName),
                        this.run()
                },
                run: function() {
                    var t = this,
                        e = t.options;
                    t.status = 2,
                        i.trigger("UM.run", {
                            instance: t
                        }),
                    e.formId && o(e.formId).then(function(e) {
                        a(e, t.getToken())
                    }),
                        t.setOptionsData();
                    var n = t.asyncCollect.concat(p.asyncCollect);
                    0 === n.length ? t.send() : s.allSettled(n).then(function() {
                        t.send()
                    })
                },
                set: function(t, e) {
                    return this.data[t] = e,
                        this
                },
                getData: function() {
                    var t = s.extend({},
                        this.data, l.getData());
                    return i.trigger("UM.getData", {
                        instance: S,
                        data: t
                    }),
                        s.toJson(t)
                },
                setOptionsData: function() {
                    var t = this,
                        e = t.options;
                    t.set("xv", y),
                        t.set("xt", t.getToken()),
                        t.set("etf", e.token ? "b": "u"),
                        t.set("xa", e.appName),
                        t.set("uid", e.userId),
                        t.set("eml", e.model),
                        t.set("etid", e.traceId),
                        t.set("esid", e.sessionId)
                },
                send: function() {
                    var t = this,
                        e = t.options;
                    if (e.noRequest) try {
                        e.callback()
                    } catch(n) {} else {
                        t.status = 4;
                        var r = "ENCODE~~V01~~" + u.encode(t.getData());
                        i.trigger("UM.send", {
                            data: r
                        }),
                            s.post(e.serviceUrl, r).then(function(n) {
                                n && "id" in n ? (t.status = 255, n.id && h.set(p.storeKey, n.id)) : t.status = 200;
                                try {
                                    e.callback(n)
                                } catch(r) {}
                                t.endTime = new Date,
                                    f.set(p.storeTimeKey, t.endTime - t.startTime),
                                n.tn && (t.serverToken = n.tn, f.set(p.tkCache, s.toJson({
                                    t: +new Date,
                                    tk: n.tn
                                })), e.formId && o(e.formId).then(function(t) {
                                    a(t, n.tn)
                                }))
                            })["catch"](function(t) {
                                e.errorCallback && e.errorCallback(t)
                            })
                    }
                }
            };
            var C, T = {},
                S = new _,
                k = S.clientToken,
                j = {
                    version: y,
                    getStatus: function(t) {
                        return t ? S.status: S.status >= 200
                    },
                    getData: function() {
                        return S.getData()
                    },
                    getToken: function() {
                        var t = C && C.tk;
                        return t || S.getToken()
                    },
                    init: function(t) {
                        t = t || {};
                        var e = t.token || k,
                            n = s.extend({},
                                x, t),
                            r = n.cache;
                        if (n.enabled) {
                            if (r && !t.token) try {
                                if (C) return;
                                if (C = v(f.get(p.tkCache) || "{}"), C.t && new Date - C.t < 144e5) return void(t.formId && o(t.formId).then(function(t) {
                                    a(t, C.tk)
                                }))
                            } catch(i) {}
                            T[e] || (T[e] = !0, S = new _(n), S.init())
                        }
                    }
                };
            i.trigger("main.loaded", {
                um: j
            });
            var O = d.umx && d.umx.version >= "3.1.0"; (d.pointmanx || d.pointman) && (d.pointmanx || d.pointman).define("um",
                function() {
                    return O ? d.umx: j
                }),
            O || (d.umx = j),
                t.exports = {
                    getForm: o,
                    renderInput: a
                }
        }).call(e,
            function() {
                return this
            } ())
        },
        function(t, e) {
            var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                r = function(t) {
                    if (!t) return "";
                    for (var e, r, o, a, i, u, c, s = "",
                             f = 0; f < t.length;) e = t.charCodeAt(f++),
                        r = t.charCodeAt(f++),
                        o = t.charCodeAt(f++),
                        a = e >> 2,
                        i = (3 & e) << 4 | r >> 4,
                        u = (15 & r) << 2 | o >> 6,
                        c = 63 & o,
                        isNaN(r) ? u = c = 64 : isNaN(o) && (c = 64),
                        s = s + n.charAt(a) + n.charAt(i) + n.charAt(u) + n.charAt(c);
                    return s
                };
            t.exports = {
                encode: r
            }
        },
        function(t, e) {
            var n = 864e5,
                r = encodeURIComponent,
                o = function(t) {
                    return decodeURIComponent((t + "").replace(/\+/g, " "))
                },
                a = function(t) {
                    return "string" == typeof t && "" !== t
                };
            t.exports = {
                get: function(t) {
                    var e, n;
                    return a(t) && (n = String(document.cookie).match(new RegExp("(?:^| )" + t + "(?:(?:=([^;]*))|;|$)"))) && (e = n[1] ? o(n[1]) : ""),
                        e
                },
                set: function(t, e, o, i, u, c) {
                    var s = String(r(e)),
                        f = i;
                    return "number" == typeof f && (f = new Date, f.setTime(f.getTime() + i * n)),
                    f instanceof Date && (s += "; expires=" + f.toUTCString()),
                    a(o) && (s += "; domain=" + o),
                    a(u) && (s += "; path=" + u),
                    c && (s += "; secure"),
                        document.cookie = t + "=" + s,
                        this
                },
                remove: function(t, e, n, r) {
                    return this.set(t, "", e, -1, n, r),
                        this
                }
            }
        },
        function(t, e) {
            t.exports = {
                set: function(t, e) {
                    try {
                        localStorage.setItem(t, e)
                    } catch(n) {}
                },
                get: function(t) {
                    try {
                        return localStorage.getItem(t)
                    } catch(e) {}
                },
                remove: function(t) {
                    try {
                        localStorage.removeItem(t)
                    } catch(e) {}
                }
            }
        },
        function(t, e, n) { (function(e) {
            function r() {
                var t = top && top.location;
                if (!t) return "";
                var e = t.pathname;
                return "/" !== e.charAt(0) && (e = "/" + e),
                t.protocol + "//" + t.host + e
            }
            function o() {
                var t = l.defer();
                return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices().then(function(e) {
                        var n = e.map(function(t) {
                            return t.deviceId
                        });
                        v.erd = n.join(","),
                            t.resolve()
                    },
                    function() {
                        t.reject()
                    }) : t.reject(),
                    t.promise
            }
            var a = e,
                i = a.document,
                u = a.navigator,
                c = n(4),
                s = n(12),
                f = n(3),
                l = n(5),
                p = n(6),
                h = n(8),
                d = n(15),
                g = n(13),
                v = (p.each, {});
            f.trigger("info.load", {
                data: v
            });
            try {
                h.asyncCollect.push(o())
            } catch(m) {}
            var y = {
                init: function() {
                    v.type = "wap",
                        this.getDataFromDaily(),
                        f.trigger("info.init", {
                            data: v
                        }),
                        this.init = function() {}
                },
                set: function(t, e) {
                    v[t] = e
                },
                getData: function() {
                    return this.init(),
                        v
                },
                getDataFromDaily: function() {
                    v.nce = u.cookieEnabled;
                    var t = u.platform;
                    t && (v.npf = t.split(" ").shift()),
                        v.nacn = u.appCodeName,
                        v.nan = u.appName,
                        v.nlg = u.language,
                        v.sw = a.screen.width,
                        v.sh = a.screen.height,
                        v.saw = a.screen.availWidth,
                        v.sah = a.screen.availHeight,
                        v.bsw = i.body.clientWidth,
                        v.bsh = i.body.clientHeight,
                        v.eloc = encodeURIComponent(r()),
                        v.etz = function() {
                            var t = new Date;
                            t.setDate(1),
                                t.setMonth(5);
                            var e = -t.getTimezoneOffset();
                            t.setMonth(11);
                            var n = -t.getTimezoneOffset();
                            return Math.min(e, n)
                        } (),
                        v.ett = (new Date).getTime();
                    var e = this.getDataFromCanvas();
                    "" != e && (v.ecn = c.hash(e)),
                        v.eca = s.get("cna"),
                        v.est = h.storageType,
                        v.ms = g.get(h.storeTimeKey);
                    try {
                        v.xs = d.get(h.storeKey)
                    } catch(n) {}
                },
                getDataFromCanvas: function() {
                    try {
                        var t = i.createElement("canvas");
                        t.height = 60,
                            t.width = 400;
                        var e = t.getContext("2d");
                        return t.style.display = "inline",
                            e.textBaseline = "alphabetic",
                            e.fillStyle = "#f60",
                            e.fillRect(125, 1, 62, 20),
                            e.fillStyle = "#069",
                            e.font = "11pt no-real-font-123",
                            e.fillText("Cwm fjordbank glyphs vext quiz, 馃槂", 2, 15),
                            e.fillStyle = "rgba(102, 204, 0, 0.7)",
                            e.font = "18pt Arial",
                            e.fillText("Cwm fjordbank glyphs vext quiz, 馃槂", 4, 45),
                            t.toDataURL()
                    } catch(n) {
                        return ""
                    }
                }
            };
            t.exports = y
        }).call(e,
            function() {
                return this
            } ())
        },
        function(t, e, n) { (function(e) {
            var r = n(12),
                o = n(13),
                a = n(3),
                i = n(8);
            t.exports = {
                set: function(t, e) {
                    a.trigger("store.set", {
                        name: t,
                        value: e
                    }),
                        o.set(t, e),
                        r.set(t, e, null, 365, "/")
                },
                get: function(t) {
                    var e = {
                        name: t
                    };
                    a.trigger("store.get", e);
                    var n;
                    return (n = e.value) ? n: (n = o.get(t)) ? (i.storageType = 2, n) : (n = r.get(t), n ? (i.storageType = 16, n) : void 0)
                },
                remove: function(t) {
                    r.remove(t),
                        o.remove(t),
                        a.trigger("store.remove", {
                            name: t
                        })
                }
            }
        }).call(e,
            function() {
                return this
            } ())
        },
        function(t, e, n) {
            n(10)
        }]);