/* 2016-03-08 12:32:36 */
!
function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var a = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(a.exports, a, a.exports, t),
        a.loaded = !0,
        a.exports
    }
    var n = {};
    return t.m = e,
    t.c = n,
    t.p = "",
    t(0)
} ([function(e, t, n) {
    e.exports = n(1)
},
function(e, t, n) {
    n(2),
    n(10)
},
function(e, t, n) { (function(e) {
        function t(e) {
            if (0 === e.length) return "";
            var t, n, r = [],
            a = {};
            for (n = 0; n < e.length; n++) t = e[n].charAt(0).toUpperCase(),
            t >= "A" && "Z" >= t || (t = "zh"),
            a[t] = a[t] || [],
            a[t].push(e[n]);
            for (n in a) a.hasOwnProperty(n) && r.push(("zh" === n ? "#": n) + o.hash(a[n].join(",")));
            return r.join(",")
        }
        function r(e) {
            var t = m.getElementById("umDcp");
            try {
                t && "undefined" != typeof t.getHardVersion && (e = parseInt(t.getHardVersion().replace(/\./g, ""), 10) || 1)
            } catch(n) {}
            return e
        }
        var a, i = n(3),
        o = n(4),
        s = n(5),
        c = n(6),
        l = n(8),
        u = n(9),
        f = u.support,
        g = c.each,
        h = c.extend,
        d = c.singleton,
        p = e,
        m = p.document,
        T = p.navigator,
        v = s.defer();
        v.promise.then(function() {
            a = m.getElementById("umFlash")
        });
        var S = function(e) {
            var t = c.poll(function() {
                var e = m.getElementById("umFlash");
                return e && e.md5 && e.getCapabilities
            },
            100, e > 2e3 ? 2e3: e);
            t.then(v.resolve, v.reject)
        },
        M = d(function(e) {
            var t = '<embed height="1" width="1" id="umDcp" type="application/alidcp" class="umidWrapper" tabindex="-1" />';
            return c.append(e, t),
            1
        }),
        E = d(function(e, t, n) {
            var r = '<object type="application/x-shockwave-flash" data="' + t + '" width="1" height="1" id="umFlash" class="umidWrapper" tabindex="-1"><param name="movie" value="' + t + '" /><param name="allowScriptAccess" value="always" /></object>';
            return c.append(e, r),
            S(n),
            1
        });
        i.on("UM.run",
        function(e) {
            function t() {
                return c.poll(function() {
                    return C.length >= a.maxIPNum
                },
                50, 1e3)
            }
            var n = e.instance,
            a = n.options;
            p.__flash__removeCallback = function(e, t) {
                e && (e[t] = null)
            };
            var i = a.enableMod ? u.getModVersion() : 0;
            if (i && !u.isIE && (M(a.containers.dcp), i = r(i)), i) try {
                var o = f.ActiveXObject ? new ActiveXObject("Alim.webmod") : m.getElementById("umDcp");
                i >= 2001 && (o.timestamp = a.timestamp || "-"),
                n.set("xh", o.ciraw())
            } catch(s) {}
            var l = u.getFlashVersion();
            a.enableFlash && l >= 9 && (E(a.containers.flash, a.flashUrl, a.timeout), n.asyncCollect.push(v.promise)),
            f.RTCPeerConnection && n.asyncCollect.push(t())
        });
        var C = [];
        i.one("info.load",
        function(e) {
            function t(e) {
                function t(t) {
                    var n = t.match(o);
                    if (n) {
                        var r = n[1];
                        i[r] || (e(r), i[r] = !0)
                    }
                }
                if (n) {
                    try {
                        var r = new n({
                            iceServers: [{
                                url: "stun:stun.services.mozilla.com"
                            }]
                        },
                        {
                            optional: [{
                                RtpDataChannels: !0
                            }]
                        })
                    } catch(a) {
                        return
                    }
                    var i = {},
                    o = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
                    r.onicecandidate = function(e) {
                        e.candidate && t(e.candidate.candidate)
                    },
                    r.createDataChannel(""),
                    r.createOffer(function(e) {
                        if (r.setLocalDescription(e,
                        function() {},
                        function() {}), e.sdp) {
                            var n = e.sdp.split("\n");
                            n.forEach(function(e) {
                                0 === e.indexOf("a=candidate:") && t(e)
                            })
                        }
                    },
                    function() {}),
                    c.poll(function() {
                        if (r.localDescription && r.localDescription.sdp) {
                            var e = r.localDescription.sdp.split("\n");
                            return e.forEach(function(e) {
                                0 === e.indexOf("a=candidate:") && t(e)
                            }),
                            C.length >= 2
                        }
                    },
                    50, 1500)
                }
            }
            e = e.data;
            var n = f.RTCPeerConnection;
            t(function(t) {
            	console.log(t);
                t && (C.push(t), e.ips = C.join(","))
            })
        }),
        i.on("UM.getData",
        function(e) {
            function n() {
                var e = ["monospace", "sans-serif", "serif"],
                t = "mmmmmmmmmmlli",
                n = "72px",
                r = m.getElementsByTagName("body")[0],
                a = document.createElement("span");
                a.style.fontSize = n,
                a.innerHTML = t;
                var i = {},
                o = {};
                for (var s in e) a.style.fontFamily = e[s],
                r.appendChild(a),
                i[e[s]] = a.offsetWidth,
                o[e[s]] = a.offsetHeight,
                r.removeChild(a);
                var c = function(t) {
                    var n = !1;
                    for (var s in e) {
                        a.style.fontFamily = t + "," + e[s],
                        r.appendChild(a);
                        var c = a.offsetWidth !== i[e[s]] || a.offsetHeight !== o[e[s]];
                        r.removeChild(a),
                        n = n || c
                    }
                    return n
                },
                l = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
                u = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
                l = l.concat(u);
                for (var f = [], g = 0, h = l.length; h > g; g++) c(l[g]) && f.push(l[g]);
                return f
            }
            var r, a = e.instance;
            e = e.data,
            f.CORS && a.options.enableJSFonts && (r = n(), e.jfonts = o.hash(r.join(",")), e.fonts || (e.efcn = r.length, e.fonts = e.jfonts, e.efts = t(r), e.efty = 1))
        }),
        i.one("info.init",
        function(e) {
            function n() {
                e.fp = a.getCapabilities("playerType"),
                e.fm = a.getCapabilities("manufacturer"),
                e.fv = a.getCapabilities("version"),
                e.fsc = a.getCapabilities("screenColor"),
                e.fsx = a.getCapabilities("screenResolutionX"),
                e.fsy = a.getCapabilities("screenResolutionY"),
                e.flgs = a.getCapabilities("languages"),
                e.flg = a.getCapabilities("language"),
                e.fos = a.getCapabilities("os"),
                f.CORS && (e.fonts = a.getFontsMd5(), e.efts = a.getFontsByGroupMd5().join(","), e.efty = 0, e.efcn = a.getFontCount())
            }
            function r() {
                var e = 0;
                return f.plugin ? !!T.plugins["Silverlight Plug-In"] : f.ActiveXObject ? !!new ActiveXObject("AgControl.AgControl") : e
            }
            function i() {
                var e = [];
                return g(T.plugins || [],
                function(t) {
                    try {
                        if (t) {
                            var n, r = [];
                            for (n = 0; n < t.length; n++) t.item(n) && r.push(t.item(n).type);
                            var a = t.name + "";
                            t.version && (a += t.version + ""),
                            a += t.filename + "",
                            a += r.join(""),
                            e.push(a)
                        }
                    } catch(i) {}
                }),
                e
            }
            function s() {
                var e = [],
                t = function(t) {
                    if (t) {
                        for (var n = 0,
                        r = null; null === r && n < t.ids.length;) {
                            try {
                                r = new ActiveXObject(t.ids[n])
                            } catch(a) {}
                            n++
                        }
                        if (r) try {
                            e.push(t.name + "==" + t.getVersion(r, t.ids[n]))
                        } catch(a) {}
                    }
                },
                n = [{
                    name: "Quicktime",
                    ids: ["QuickTimeCheckObject.QuickTimeCheck", "QuickTime.QuickTime"],
                    getVersion: function(e) {
                        return e.QuickTimeVersion.toString(16).replace(/^(.)(.)(.).*/, "$1.$2.$3")
                    }
                },
                {
                    name: "Acrobat",
                    ids: ["AcroPDF.PDF", "PDF.PdfCtrl"],
                    getVersion: function(e) {
                        var t;
                        return t = e.GetVersions().split(","),
                        t = t[0].split("="),
                        t = parseFloat(t[1])
                    }
                },
                {
                    name: "RealPlayer",
                    ids: ["RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "rmocx.RealPlayer G2 Control"],
                    getVersion: function(e, t) {
                        return parseFloat(e.GetVersionInfo())
                    }
                },
                {
                    name: "Flash",
                    ids: ["ShockwaveFlash.ShockwaveFlash"],
                    getVersion: function(e, t) {
                        return e.GetVariable("$version").replace(/[a-zA-Z ]*([0-9,]+)/, "$1").replace(/,/g, ".")
                    }
                },
                {
                    name: "Adobe SVG",
                    ids: ["Adobe.SVGCtl"],
                    getVersion: function(e, t) {
                        return e.getSVGViewerVersion().replace(/[a-zA-Z ]*([0-9.]+)/, "$1")
                    }
                },
                {
                    name: "Windows Media Player",
                    ids: ["WMPlayer.OCX", "MediaPlayer.MediaPlayer.1"],
                    getVersion: function(e, t) {
                        return e.versionInfo
                    }
                },
                {
                    name: "DivX",
                    ids: ["npdivx.DivXBrowserPlugin.1", "npdivx.DivXBrowserPlugin"],
                    getVersion: function(e, t) {
                        return e.GetVersion()
                    }
                },
                {
                    name: "WPFe (Silverlight)",
                    ids: ["AgControl.AgControl"],
                    getVersion: function(e, t) {
                        for (var n = "1",
                        r = "0",
                        a = "0"; e.IsVersionSupported(n + "." + r + "." + a);) n++;
                        for (n--; e.IsVersionSupported(n + "." + r + "." + a);) r++;
                        for (r--; e.IsVersionSupported(n + "." + r + "." + a);) a++;
                        return a--,
                        n + "." + r + "." + a
                    }
                },
                {
                    name: "MSXML",
                    ids: ["MSXML2.DOMDocument.6.0", "MSXML2.DOMDocument.5.0", "MSXML2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0"],
                    getVersion: function(e, t) {
                        return t.replace(/^[a-zA-Z.2]+\.([0-9]+\.[0-9.]+)/, "$1")
                    }
                }];
                return g(n, t),
                e
            }
            function c() {
                var e, t = function(t) {
                    return e.clearColor(0, 0, 0, 1),
                    e.enable(e.DEPTH_TEST),
                    e.depthFunc(e.LEQUAL),
                    e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
                    "[" + t[0] + ", " + t[1] + "]"
                },
                n = function(e) {
                    var t, n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return n ? (t = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === t && (t = 2), t) : null
                };
                if (e = l(), !e) return null;
                var r = [],
                a = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",
                i = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",
                s = e.createBuffer();
                e.bindBuffer(e.ARRAY_BUFFER, s);
                var c = new Float32Array([ - .2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                e.bufferData(e.ARRAY_BUFFER, c, e.STATIC_DRAW),
                s.itemSize = 3,
                s.numItems = 3;
                var u = e.createProgram(),
                f = e.createShader(e.VERTEX_SHADER);
                e.shaderSource(f, a),
                e.compileShader(f);
                var g = e.createShader(e.FRAGMENT_SHADER);
                return e.shaderSource(g, i),
                e.compileShader(g),
                e.attachShader(u, f),
                e.attachShader(u, g),
                e.linkProgram(u),
                e.useProgram(u),
                u.vertexPosAttrib = e.getAttribLocation(u, "attrVertex"),
                u.offsetUniform = e.getUniformLocation(u, "uniformOffset"),
                e.enableVertexAttribArray(u.vertexPosArray),
                e.vertexAttribPointer(u.vertexPosAttrib, s.itemSize, e.FLOAT, !1, 0, 0),
                e.uniform2f(u.offsetUniform, 1, 1),
                e.drawArrays(e.TRIANGLE_STRIP, 0, s.numItems),
                null != e.canvas && r.push(e.canvas.toDataURL()),
                r.push("extensions:" + e.getSupportedExtensions().join(";")),
                r.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),
                r.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),
                r.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
                r.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes": "no")),
                r.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
                r.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
                r.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
                r.push("webgl max anisotropy:" + n(e)),
                r.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
                r.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),
                r.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),
                r.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)),
                r.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),
                r.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)),
                r.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)),
                r.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)),
                r.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
                r.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),
                r.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))),
                r.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
                r.push("webgl renderer:" + e.getParameter(e.RENDERER)),
                r.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)),
                r.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)),
                r.push("webgl vendor:" + e.getParameter(e.VENDOR)),
                r.push("webgl version:" + e.getParameter(e.VERSION)),
                e.getShaderPrecisionFormat ? (r.push("webgl vertex shader high float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision), r.push("webgl vertex shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin), r.push("webgl vertex shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax), r.push("webgl vertex shader medium float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision), r.push("webgl vertex shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin), r.push("webgl vertex shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax), r.push("webgl vertex shader low float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision), r.push("webgl vertex shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin), r.push("webgl vertex shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax), r.push("webgl fragment shader high float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision), r.push("webgl fragment shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin), r.push("webgl fragment shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax), r.push("webgl fragment shader medium float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision), r.push("webgl fragment shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin), r.push("webgl fragment shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax), r.push("webgl fragment shader low float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision), r.push("webgl fragment shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin), r.push("webgl fragment shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax), r.push("webgl vertex shader high int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision), r.push("webgl vertex shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin), r.push("webgl vertex shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax), r.push("webgl vertex shader medium int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision), r.push("webgl vertex shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin), r.push("webgl vertex shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax), r.push("webgl vertex shader low int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision), r.push("webgl vertex shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin), r.push("webgl vertex shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax), r.push("webgl fragment shader high int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision), r.push("webgl fragment shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin), r.push("webgl fragment shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax), r.push("webgl fragment shader medium int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision), r.push("webgl fragment shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin), r.push("webgl fragment shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax), r.push("webgl fragment shader low int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision), r.push("webgl fragment shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin), r.push("webgl fragment shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax), o.hash(r.join("~"))) : o.hash(r.join("~"))
            }
            function l() {
                var e = m.createElement("canvas"),
                t = null;
                try {
                    t = e.getContext("webgl") || e.getContext("experimental-webgl")
                } catch(n) {}
                return t || (t = null),
                t
            }
            function u() {
                var n = [];
                f.plugin ? n = i() : f.ActiveXObject && (n = s()),
                e.epl = n.length,
                0 != e.epl && (e.ep = o.hash(n.join(",")), e.epls = t(n)),
                e.esl = r()
            }
            if (e = e.data, e.type = "pc", a) try {
                n()
            } catch(h) {}
            if (f.CORS && u(), f.webgl) try {
                e.ewgl = c()
            } catch(h) {}
        }),
        i.on("store.set",
        function(e) {
            try {
                a.setCookie(e.name, e.value)
            } catch(t) {}
        }),
        i.on("store.remove",
        function(e) {
            try {
                a.setCookie(e.name, "")
            } catch(t) {}
        }),
        i.on("store.get",
        function(e) {
            try {
                value = a.getCookie(e.name) || "",
                value && (l.storageType = 1, e.value = value)
            } catch(t) {}
        }),
        i.one("main.load",
        function(e) {
            var t = e.defaultOptions;
            h(t, {
                clientType: "P",
                maxIPNum: 2,
                enableJSFonts: !1,
                timeout: 3e3,
                timestamp: "-",
                flashUrl: "https://g.alicdn.com/security/umflash/fp.swf?v1=1&f=umx",
                enableMod: !0,
                enableFlash: !0,
                containers: {
                    flash: null,
                    dcp: null
                }
            })
        }),
        i.one("main.loaded",
        function(e) {
            var t = e.um;
            t.flashLoaded = function() {
                v.resolve()
            }
        })
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t) {
    var n = [].slice,
    r = {},
    a = function(e, t) {
        var n = r[e] || (r[e] = []);
        n.push(t)
    },
    i = function(e, t) {
        var n = function() {
            o(e, n),
            t.apply(null, arguments)
        };
        a(e, n)
    },
    o = function(e, t) {
        if (!e && !t) return void(r = {});
        var n = r[e];
        if (n) if (t) for (var a = n.length - 1; a >= 0; a--) n[a] === t && n.splice(a, 1);
        else delete r[e]
    },
    s = function(e) {
        var t = r[e],
        a = n.call(arguments, 1);
        if (t) {
            t = t.slice();
            for (var i = 0,
            o = t.length; o > i; i++) t[i].apply(null, a)
        }
    };
    e.exports = {
        on: a,
        one: i,
        off: o,
        trigger: s,
        __events: r
    }
},
function(e, t) {
    var n = {};
    n.encode = function(e) {
        var t = e.replace(/[\u0080-\u07ff]/g,
        function(e) {
            var t = e.charCodeAt(0);
            return String.fromCharCode(192 | t >> 6, 128 | 63 & t)
        });
        return t = t.replace(/[\u0800-\uffff]/g,
        function(e) {
            var t = e.charCodeAt(0);
            return String.fromCharCode(224 | t >> 12, 128 | t >> 6 & 63, 128 | 63 & t)
        })
    },
    n.ROTL = function(e, t) {
        return e << t | e >>> 32 - t
    },
    n.toHexStr = function(e) {
        for (var t, n = "",
        r = 7; r >= 0; r--) t = e >>> 4 * r & 15,
        n += t.toString(16);
        return n
    },
    n.f = function(e, t, n, r) {
        switch (e) {
        case 0:
            return t & n ^ ~t & r;
        case 1:
            return t ^ n ^ r;
        case 2:
            return t & n ^ t & r ^ n & r;
        case 3:
            return t ^ n ^ r
        }
    },
    n.hash = function(e, t) {
        t = "undefined" == typeof t ? !0 : t,
        t && (e = n.encode(e));
        var r = [1518500249, 1859775393, 2400959708, 3395469782];
        e += String.fromCharCode(128);
        var a, i, o, s = e.length / 4 + 2,
        c = Math.ceil(s / 16),
        l = new Array(c);
        for (a = 0; c > a; a++) for (l[a] = new Array(16), o = 0; 16 > o; o++) l[a][o] = e.charCodeAt(64 * a + 4 * o) << 24 | e.charCodeAt(64 * a + 4 * o + 1) << 16 | e.charCodeAt(64 * a + 4 * o + 2) << 8 | e.charCodeAt(64 * a + 4 * o + 3);
        l[c - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32),
        l[c - 1][14] = Math.floor(l[c - 1][14]),
        l[c - 1][15] = 8 * (e.length - 1) & 4294967295;
        var u, f, g, h, d, p = 1732584193,
        m = 4023233417,
        T = 2562383102,
        v = 271733878,
        S = 3285377520,
        M = new Array(80);
        for (a = 0; c > a; a++) {
            for (i = 0; 16 > i; i++) M[i] = l[a][i];
            for (i = 16; 80 > i; i++) M[i] = n.ROTL(M[i - 3] ^ M[i - 8] ^ M[i - 14] ^ M[i - 16], 1);
            for (u = p, f = m, g = T, h = v, d = S, i = 0; 80 > i; i++) {
                var E = Math.floor(i / 20),
                C = n.ROTL(u, 5) + n.f(E, f, g, h) + d + r[E] + M[i] & 4294967295;
                d = h,
                h = g,
                g = n.ROTL(f, 30),
                f = u,
                u = C
            }
            p = p + u & 4294967295,
            m = m + f & 4294967295,
            T = T + g & 4294967295,
            v = v + h & 4294967295,
            S = S + d & 4294967295
        }
        return n.toHexStr(p) + n.toHexStr(m) + n.toHexStr(T) + n.toHexStr(v) + n.toHexStr(S)
    },
    e.exports = n
},
function(e, t) {
    function n(e) {
        return this instanceof n ? (this._state = c, this._onFulfilled = [], this._onRejected = [], this._value = null, this._reason = null, void(f(e) && e(i(this.resolve, this), i(this.reject, this)))) : new n(e)
    }
    function r(e, t, n) {
        return function(r) {
            if (f(t)) try {
                var i = t(r);
                a(i) ? i.then(function(t) {
                    e.resolve(t)
                },
                function(t) {
                    e.reject(t)
                }) : e.resolve(i)
            } catch(o) {
                e.reject(o)
            } else e[n](r)
        }
    }
    function a(e) {
        return e && f(e.then)
    }
    function i(e, t) {
        var n = [].slice,
        r = n.call(arguments, 2),
        a = function() {},
        i = function() {
            return e.apply(this instanceof a ? this: t, r.concat(n.call(arguments)))
        };
        return a.prototype = e.prototype,
        i.prototype = new a,
        i
    }
    function o(e) {
        return function(t) {
            return {}.toString.call(t) == "[object " + e + "]"
        }
    }
    function s(e, t) {
        for (var n = 0,
        r = e.length; r > n; n++) t(e[n], n)
    }
    var c = 0,
    l = 1,
    u = 2;
    n.prototype = {
        constructor: n,
        then: function(e, t) {
            var a = new n,
            i = r(a, e, "resolve"),
            o = r(a, t, "reject");
            return this._state === l ? i(this._value) : this._state === u ? o(this._reason) : (this._onFulfilled.push(i), this._onRejected.push(o)),
            a
        },
        resolve: function(e) {
            this._state === c && (this._state = l, this._value = e, s(this._onFulfilled,
            function(t) {
                t(e)
            }), this._onFulfilled = [])
        },
        reject: function(e) {
            this._state === c && (this._state = u, this._reason = e, s(this._onRejected,
            function(t) {
                t(e)
            }), this._onRejected = [])
        },
        "catch": function(e) {
            return this.then(null, e)
        },
        always: function(e) {
            return this.then(e, e)
        }
    },
    n.defer = function() {
        var e = {};
        return e.promise = new n(function(t, n) {
            e.resolve = t,
            e.reject = n
        }),
        e
    },
    n.race = function(e) {
        var t = n.defer();
        e.length;
        return s(e,
        function(e) {
            e.then(function(e) {
                t.resolve(e)
            },
            function(e) {
                t.reject(e)
            })
        }),
        t.promise
    },
    n.all = function(e) {
        var t = n.defer(),
        r = e.length,
        a = [];
        return s(e,
        function(e, n) {
            e.then(function(e) {
                a[n] = e,
                r--,
                0 === r && t.resolve(a)
            },
            function(e) {
                t.reject(e)
            })
        }),
        t.promise
    },
    n.resolve = function(e) {
        return new n(function(t) {
            t(e)
        })
    },
    n.reject = function(e) {
        return new n(function(t, n) {
            n(e)
        })
    };
    var f = o("Function");
    e.exports = n
},
function(e, t, n) { (function(t) {
        var r = t,
        a = r.document,
        i = n(7),
        o = n(5),
        s = (r.JSON || i).stringify,
        c = (r.JSON || i).parse,
        l = a.getElementsByTagName("script")[0].parentNode,
        u = function(e, t, n) {
            if (e) {
                var r = 0,
                a = e.length;
                if (a === +a) for (; a > r && t.call(n, e[r], r, e) !== !1; r++);
                else for (r in e) if (e.hasOwnProperty(r) && t.call(n, e[r], r, e) === !1) break
            }
        },
        f = {
            wait: function(e) {
                return new o(function(t, n) {
                    setTimeout(n, e)
                })
            },
            allSettled: function(e) {
                var t = o.defer(),
                n = e.length;
                return u(e,
                function(e, r) {
                    e.always(function() {
                        n--,
                        0 === n && t.resolve()
                    })
                }),
                t.promise
            },
            each: u,
            singleton: function(e, t) {
                var n;
                return function() {
                    return "undefined" != typeof n ? n: n = e.apply(t, arguments)
                }
            },
            extend: function(e) {
                for (var t, n, r = [].slice.call(arguments), a = r.length, i = 1; a > i; i++) {
                    t = r[i];
                    for (n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                }
                return e
            },
            poll: function(e, t, n) {
                n = n || 1e4,
                t = t || 500;
                var r = null,
                a = o.race([f.wait(n), new o(function(n, a) {
                    function i() {
                        var t = e();
                        return t ? (n(t), 1) : 0
                    }
                    i() || (r = setInterval(i, t))
                })]);
                return a.always(function() {
                    clearInterval(r)
                }),
                a
            },
            append: function(e, t) {
                e || (e = a.body);
                var n = a.createElement("span");
                n.innerHTML = t,
                e.insertBefore(n.firstChild, e.firstChild),
                n = null
            },
            post: function(e, t) {
                var n = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
                return n ? new o(function(n, r) {
                    var a, i = "POST",
                    o = function() {
                        var e = a && a.responseText;
                        n(c(e || "{}"))
                    },
                    s = function(e) {
                        r(e)
                    };
                    try {
                        a = new XMLHttpRequest,
                        a.open(i, e, !0),
                        a.withCredentials = !0,
                        a.setRequestHeader && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                        a.onload = o,
                        a.onerror = s,
                        a.send("data=" + encodeURIComponent(t))
                    } catch(l) {}
                }) : f.jsonp(e, t)
            },
            jsonp: function(e, t) {
                return new o(function(n, i) {
                    var o = a.createElement("script"),
                    s = "_" + parseInt(1e4 * Math.random(), 10) + "_" + (new Date).getTime(),
                    c = [];
                    c.push("data=" + encodeURIComponent(t)),
                    c.push("_callback=" + s),
                    e += e.indexOf("?") > 0 ? "&": "?",
                    e += c.join("&"),
                    o.src = e,
                    r[s] = function(e) {
                        n(e);
                        try {
                            l.removeChild(o),
                            delete r[s]
                        } catch(t) {}
                    },
                    l.appendChild(o)
                })
            },
            parseJson: c,
            toJson: s,
            log: function(e) {
                var t = new Image,
                n = "_um_img_" + Math.random();
                r[n] = t,
                t.onload = t.onerror = function() {
                    r[n] = null
                },
                t.src = e
            }
        };
        e.exports = f
    }).call(t,
    function() {
        return this
    } ())
},
function(module, exports) {
    var JSON = {}; !
    function() {
        "use strict";
        function f(e) {
            return 10 > e ? "0" + e: e
        }
        function this_value() {
            return this.valueOf()
        }
        function quote(e) {
            return rx_escapable.lastIndex = 0,
            rx_escapable.test(e) ? '"' + e.replace(rx_escapable,
            function(e) {
                var t = meta[e];
                return "string" == typeof t ? t: "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
            }) + '"': '"' + e + '"'
        }
        function str(e, t) {
            var n, r, a, i, o, s = gap,
            c = t[e];
            switch (c && "object" == typeof c && "function" == typeof c.toJSON && (c = c.toJSON(e)), "function" == typeof rep && (c = rep.call(t, e, c)), typeof c) {
            case "string":
                return quote(c);
            case "number":
                return isFinite(c) ? String(c) : "null";
            case "boolean":
            case "null":
                return String(c);
            case "object":
                if (!c) return "null";
                if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                    for (i = c.length, n = 0; i > n; n += 1) o[n] = str(n, c) || "null";
                    return a = 0 === o.length ? "[]": gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + s + "]": "[" + o.join(",") + "]",
                    gap = s,
                    a
                }
                if (rep && "object" == typeof rep) for (i = rep.length, n = 0; i > n; n += 1)"string" == typeof rep[n] && (r = rep[n], a = str(r, c), a && o.push(quote(r) + (gap ? ": ": ":") + a));
                else for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (a = str(r, c), a && o.push(quote(r) + (gap ? ": ": ":") + a));
                return a = 0 === o.length ? "{}": gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + s + "}": "{" + o.join(",") + "}",
                gap = s,
                a
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
        JSON.stringify = function(e, t, n) {
            var r;
            if (gap = "", indent = "", "number" == typeof n) for (r = 0; n > r; r += 1) indent += " ";
            else "string" == typeof n && (indent = n);
            if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
            return str("", {
                "": e
            })
        }),
        "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var n, r, a = e[t];
                if (a && "object" == typeof a) for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (r = walk(a, n), void 0 !== r ? a[n] = r: delete a[n]);
                return reviver.call(e, t, a)
            }
            var j;
            if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous,
            function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
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
function(e, t) {
    e.exports = {
        storageType: 0,
        asyncCollect: [],
        storeKey: "_umdata",
        storeTimeKey: "_umcost",
        tkCache: "_umtk"
    }
},
function(e, t, n) { (function(t) {
        function r(e, t) {
            return s.plugins && s.plugins[e] && s.mimeTypes && s.mimeTypes[t] && s.mimeTypes[t].enabledPlugin ? s.plugins[e] : !1
        }
        function a(e) {
            var t = !1;
            try {
                t = new ActiveXObject(e);
            } catch(n) {}
            return t
        }
        var i = (n(3), t),
        o = i.document,
        s = navigator,
        c = /iPhone|iPad|iPod/i.test(s.userAgent),
        l = o.createElement("canvas"),
        u = {
            canvas: !(!l.getContext || !l.getContext("2d")),
            plugin: "undefined" != typeof s.plugins,
            ActiveXObject: "undefined" != typeof i.ActiveXObject,
            RTCPeerConnection: i.RTCPeerConnection || i.mozRTCPeerConnection || i.webkitRTCPeerConnection,
            CORS: !!("undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest)
        };
        c || (u.webgl = function() {
            if (!u.canvas) return ! 1;
            var e, t = o.createElement("canvas");
            try {
                e = t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
            } catch(n) {
                e = !1
            }
            return !! i.WebGLRenderingContext && !!e
        } ());
        var f = {
            support: u,
            detectPlugin: r,
            detectActiveXObject: a,
            isIE: "Microsoft Internet Explorer" === s.appName,
            getFlashVersion: function() {
                var e, t = 0,
                n = "";
                if (u.plugin && (obj = r("Shockwave Flash", "application/x-shockwave-flash"), n = obj.description), u.ActiveXObject && (obj = a("ShockwaveFlash.ShockwaveFlash"), obj)) try {
                    n = obj.GetVariable("$version")
                } catch(i) {}
                return n && (e = /(\d+)[\.,]\d+/.exec(n), e && (t = parseInt(e[1], 10))),
                t
            },
            getModVersion: function() {
                var e, t = 0;
                if (u.plugin && (e = r("Alipay webmod control", "application/alidcp"), e && (t = 1)), u.ActiveXObject && (e = a("Alim.webmod"))) try {
                    t = 1,
                    "undefined" != typeof e.getHardVersion && (t = parseInt(e.getHardVersion().replace(/\./g, ""), 10) || 1)
                } catch(n) {}
                return t
            }
        };
        e.exports = f
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t, n) { (function(t) {
        function r(e) {
            return c.poll(function() {
                return d.getElementById(e)
            },
            200, 1500)
        }
        function a(e, t) {
            var n, r, a = e.getElementsByTagName("input");
            for (n = 0; n < a.length; n++) if ("um_token" == a[n].getAttribute("name")) {
                r = a[n];
                break
            }
            return r ? r.value = t: (r = d.createElement("input"), r.type = "hidden", r.name = "um_token", r.value = t, e.appendChild(r)),
            r
        }
        var i = n(3),
        o = (n(4), n(11)),
        s = n(12),
        c = (n(5), n(6)),
        l = n(13),
        u = n(14),
        f = n(8),
        g = n(15),
        h = t,
        d = h.document,
        p = "3.2.1",
        m = {
            debug: !1,
            enabled: !0,
            cache: !0,
            closeImage: !0,
            token: "",
            appName: "",
            sessionId: "",
            userId: s.get("tracknick") || "",
            model: "AA",
            traceId: "",
            formId: "",
            serviceLocation: "cn",
            noRequest: !1,
            clientType: "M"
        },
        T = {
            cn: "http://localhost/um.htm",
            us: "http://localhost/um.htm",
            daily: "http://localhost/um.htm"
        };
        i.trigger("main.load", {
            defaultOptions: m
        });
        var v = function() {
            function e(e) {
                for (var t = ""; t.length < e;) t += Math.random().toString().substr(2);
                return t.substring(t.length - e)
            }
            var t = h._sec_module = h._sec_module || {};
            if (t.token) return "C" + t.token;
            var n = +new Date,
            r = "_uab_collina",
            a = s.get(r);
            a || (a = n + e(11), s.set(r, a, null, 3650, "/"));
            var i = a + n + e(3);
            return t.token = i,
            "C" + i
        },
        S = function(e) {
            e = e || {},
            e.serviceUrl = e.serviceUrl || T[e.serviceLocation],
            this.options = e,
            this.status = 0,
            this.clientToken = v(),
            this.asyncCollect = [],
            this.data = {}
        };
        S.prototype = {
            getToken: function() {
                return this.options.token || this.serverToken || this.clientToken
            },
            getTokenType: function() {
                return this.serverToken ? 2 : 1
            },
            init: function() {
                var e = this.options;
                this.status = 1,
                this.startTime = new Date,
                e.closeImage || c.log(e.serviceUrl.replace("um.json", "clear.png") + "?xt=" + this.getToken() + "&xa=" + e.appName),
                this.run()
            },
            run: function() {
                var e = this,
                t = e.options;
                e.status = 2,
                i.trigger("UM.run", {
                    instance: e
                }),
                t.formId && r(t.formId).then(function(t) {
                    a(t, e.getToken())
                }),
                e.setOptionsData();
                var n = e.asyncCollect.concat(f.asyncCollect);
                0 === n.length ? e.send() : c.allSettled(n).then(function() {
                    e.send()
                })
            },
            set: function(e, t) {
                return this.data[e] = t,
                this
            },
            getData: function() {
                var e = c.extend({},
                this.data, u.getData());
                return i.trigger("UM.getData", {
                    instance: C,
                    data: e
                }),
                c.toJson(e)
            },
            setOptionsData: function() {
                var e = this,
                t = e.options;
                e.set("xv", p),
                e.set("xt", e.getToken()),
                e.set("etf", t.token ? "b": "u"),
                e.set("xa", t.appName),
                e.set("uid", t.userId),
                e.set("eml", t.model),
                e.set("etid", t.traceId),
                e.set("esid", t.sessionId)
            },
            send: function() {
                var e = this,
                t = e.options;
                if (t.noRequest) try {
                    t.callback()
                } catch(n) {} else {
                    e.status = 4;
                    var s = "ENCODE~~V01~~" + o.encode(e.getData());
                    i.trigger("UM.send", {
                        data: s
                    }),
                    c.post(t.serviceUrl, s).then(function(n) {
                        n && "id" in n ? (e.status = 255, n.id && g.set(f.storeKey, n.id)) : e.status = 200;
                        try {
                            t.callback(n)
                        } catch(i) {}
                        e.endTime = new Date,
                        l.set(f.storeTimeKey, e.endTime - e.startTime),
                        n.tn && (e.serverToken = n.tn, l.set(f.tkCache, c.toJson({
                            t: +new Date,
                            tk: n.tn
                        })), t.formId && r(t.formId).then(function(e) {
                            a(e, n.tn)
                        }))
                    })["catch"](function() {})
                }
            }
        };
        var M, E = {},
        C = new S,
        A = C.clientToken,
        y = {
            version: p,
            getStatus: function(e) {
                return e ? C.status: C.status >= 200
            },
            getData: function() {
                return C.getData()
            },
            getToken: function() {
                var e = M && M.tk;
                return e || C.getToken()
            },
            init: function(e) {
                e = e || {};
                var t = e.token || A,
                n = c.extend({},
                m, e),
                i = n.cache;
                if (n.enabled) {
                    if (i && !e.token) try {
                        if (M) return;
                        if (M = c.parseJson(l.get(f.tkCache) || "{}"), M.t && new Date - M.t < 144e5) return void(e.formId && r(e.formId).then(function(e) {
                            a(e, M.tk)
                        }))
                    } catch(o) {}
                    E[t] || (E[t] = !0, C = new S(n), C.init())
                }
            }
        };
        i.trigger("main.loaded", {
            um: y
        });
        var b = h.umx && h.umx.version >= "3.1.0";
        h.pointmanx && pointmanx.define("um",
        function() {
            return b ? h.umx: y
        }),
        b || (h.umx = y),
        e.exports = {
            getForm: r,
            renderInput: a
        }
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t) {
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    r = function(e) {
        if (!e) return "";
        for (var t, r, a, i, o, s, c, l = "",
        u = 0; u < e.length;) t = e.charCodeAt(u++),
        r = e.charCodeAt(u++),
        a = e.charCodeAt(u++),
        i = t >> 2,
        o = (3 & t) << 4 | r >> 4,
        s = (15 & r) << 2 | a >> 6,
        c = 63 & a,
        isNaN(r) ? s = c = 64 : isNaN(a) && (c = 64),
        l = l + n.charAt(i) + n.charAt(o) + n.charAt(s) + n.charAt(c);
        return l
    };
    e.exports = {
        encode: r
    }
},
function(e, t) {
    var n = 864e5,
    r = encodeURIComponent,
    a = function(e) {
        return decodeURIComponent((e + "").replace(/\+/g, " "))
    },
    i = function(e) {
        return "string" == typeof e && "" !== e
    };
    e.exports = {
        get: function(e) {
            var t, n;
            return i(e) && (n = String(document.cookie).match(new RegExp("(?:^| )" + e + "(?:(?:=([^;]*))|;|$)"))) && (t = n[1] ? a(n[1]) : ""),
            t
        },
        set: function(e, t, a, o, s, c) {
            var l = String(r(t)),
            u = o;
            return "number" == typeof u && (u = new Date, u.setTime(u.getTime() + o * n)),
            u instanceof Date && (l += "; expires=" + u.toUTCString()),
            i(a) && (l += "; domain=" + a),
            i(s) && (l += "; path=" + s),
            c && (l += "; secure"),
            document.cookie = e + "=" + l,
            this
        },
        remove: function(e, t, n, r) {
            return this.set(e, "", t, -1, n, r),
            this
        }
    }
},
function(e, t) {
    e.exports = {
        set: function(e, t) {
            try {
                localStorage.setItem(e, t)
            } catch(n) {}
        },
        get: function(e) {
            try {
                return localStorage.getItem(e)
            } catch(t) {}
        },
        remove: function(e) {
            try {
                localStorage.removeItem(e)
            } catch(t) {}
        }
    }
},
function(e, t, n) { (function(t) {
        function r() {
            var e = u.defer();
            return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices().then(function(t) {
                var n = t.map(function(e) {
                    return e.deviceId
                });
                p.erd = n.join(","),
                e.resolve()
            },
            function() {
                e.reject()
            }) : e.reject(),
            e.promise
        }
        var a = t,
        i = a.document,
        o = a.navigator,
        s = n(4),
        c = n(12),
        l = n(3),
        u = n(5),
        f = n(6),
        g = n(8),
        h = n(15),
        d = n(13),
        p = (f.each, {});
        l.trigger("info.load", {
            data: p
        });
        try {
            g.asyncCollect.push(r())
        } catch(m) {}
        var T = {
            init: function() {
                p.type = "wap",
                this.getDataFromDaily(),
                l.trigger("info.init", {
                    data: p
                }),
                this.init = function() {}
            },
            set: function(e, t) {
                p[e] = t
            },
            getData: function() {
                return this.init(),
                p
            },
            getDataFromDaily: function() {
                p.nce = o.cookieEnabled;
                var e = o.platform;
                e && (p.npf = e.split(" ").shift()),
                p.nacn = o.appCodeName,
                p.nan = o.appName,
                p.nlg = o.language,
                p.sw = a.screen.width,
                p.sh = a.screen.height,
                p.saw = a.screen.availWidth,
                p.sah = a.screen.availHeight,
                p.bsw = i.body.clientWidth,
                p.bsh = i.body.clientHeight,
                p.eloc = encodeURIComponent(a.location.href.slice(0, 255)),
                p.etz = function() {
                    var e = new Date;
                    e.setDate(1),
                    e.setMonth(5);
                    var t = -e.getTimezoneOffset();
                    e.setMonth(11);
                    var n = -e.getTimezoneOffset();
                    return Math.min(t, n)
                } (),
                p.ett = (new Date).getTime();
                var t = this.getDataFromCanvas();
                "" != t && (p.ecn = s.hash(t)),
                p.eca = c.get("cna"),
                p.est = g.storageType,
                p.ms = d.get(g.storeTimeKey);
                try {
                    p.xs = h.get(g.storeKey)
                } catch(n) {}
            },
            getDataFromCanvas: function() {
                try {
                    var e = i.createElement("canvas");
                    e.height = 60,
                    e.width = 400;
                    var t = e.getContext("2d");
                    return e.style.display = "inline",
                    t.textBaseline = "alphabetic",
                    t.fillStyle = "#f60",
                    t.fillRect(125, 1, 62, 20),
                    t.fillStyle = "#069",
                    t.font = "11pt no-real-font-123",
                    t.fillText("Cwm fjordbank glyphs vext quiz, 馃槂", 2, 15),
                    t.fillStyle = "rgba(102, 204, 0, 0.7)",
                    t.font = "18pt Arial",
                    t.fillText("Cwm fjordbank glyphs vext quiz, 馃槂", 4, 45),
                    e.toDataURL()
                } catch(n) {
                    return ""
                }
            }
        };
        e.exports = T
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t, n) { (function(t) {
        var r = n(12),
        a = n(13),
        i = n(3),
        o = n(8);
        e.exports = {
            set: function(e, t) {
                i.trigger("store.set", {
                    name: e,
                    value: t
                }),
                a.set(e, t);
                try {
                    r.set(e, t, null, 365, "/")
                } catch(n) {}
            },
            get: function(e) {
                var t = {
                    name: e
                };
                i.trigger("store.get", t);
                var n;
                if (n = t.value) return n;
                if (n = a.get(e)) return o.storageType = 2,
                n;
                try {
                    if (n = r.get(e)) return o.storageType = 16,
                    n
                } catch(s) {}
            },
            remove: function(e) {
                try {
                    r.remove(e),
                    a.remove(e),
                    i.trigger("store.remove", {
                        name: e
                    })
                } catch(t) {}
            }
        }
    }).call(t,
    function() {
        return this
    } ())
}]);