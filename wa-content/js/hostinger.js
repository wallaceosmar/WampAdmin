function is_touch_device() {
    return "ontouchstart" in window || "onmsgesturechange" in window
}! function(a, b) {
    function c(a) {
        var b = a.length,
            c = ka.type(a);
        return ka.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function d(a) {
        var b = za[a] = {};
        return ka.each(a.match(ma) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function e(a, c, d, e) {
        if (ka.acceptData(a)) {
            var f, g, h = ka.expando,
                i = a.nodeType,
                j = i ? ka.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || d !== b || "string" != typeof c) return k || (k = i ? a[h] = ba.pop() || ka.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: ka.noop
            }), ("object" == typeof c || "function" == typeof c) && (e ? j[k] = ka.extend(j[k], c) : j[k].data = ka.extend(j[k].data, c)), g = j[k], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[ka.camelCase(c)] = d), "string" == typeof c ? (f = g[c], null == f && (f = g[ka.camelCase(c)])) : f = g, f
        }
    }

    function f(a, b, c) {
        if (ka.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? ka.cache : a,
                i = f ? a[ka.expando] : ka.expando;
            if (g[i]) {
                if (b && (d = c ? g[i] : g[i].data)) {
                    ka.isArray(b) ? b = b.concat(ka.map(b, ka.camelCase)) : b in d ? b = [b] : (b = ka.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    for (; e--;) delete d[b[e]];
                    if (c ? !h(d) : !ka.isEmptyObject(d)) return
                }(c || (delete g[i].data, h(g[i]))) && (f ? ka.cleanData([a], !0) : ka.support.deleteExpando || g != g.window ? delete g[i] : g[i] = null)
            }
        }
    }

    function g(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(Ba, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : Aa.test(d) ? ka.parseJSON(d) : d
                } catch (f) {}
                ka.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b;
        for (b in a)
            if (("data" !== b || !ka.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function i() {
        return !0
    }

    function j() {
        return !1
    }

    function k() {
        try {
            return Y.activeElement
        } catch (a) {}
    }

    function l(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function m(a, b, c) {
        if (ka.isFunction(b)) return ka.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return ka.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (Qa.test(b)) return ka.filter(b, a, c);
            b = ka.filter(b, a)
        }
        return ka.grep(a, function(a) {
            return ka.inArray(a, b) >= 0 !== c
        })
    }

    function n(a) {
        var b = Ua.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function o(a, b) {
        return ka.nodeName(a, "table") && ka.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function p(a) {
        return a.type = (null !== ka.find.attr(a, "type")) + "/" + a.type, a
    }

    function q(a) {
        var b = eb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function r(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) ka._data(c, "globalEval", !b || ka._data(b[d], "globalEval"))
    }

    function s(a, b) {
        if (1 === b.nodeType && ka.hasData(a)) {
            var c, d, e, f = ka._data(a),
                g = ka._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) ka.event.add(b, c, h[c][d])
            }
            g.data && (g.data = ka.extend({}, g.data))
        }
    }

    function t(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !ka.support.noCloneEvent && b[ka.expando]) {
                e = ka._data(b);
                for (d in e.events) ka.removeEvent(b, d, e.handle);
                b.removeAttribute(ka.expando)
            }
            "script" === c && b.text !== a.text ? (p(b).text = a.text, q(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ka.support.html5Clone && a.innerHTML && !ka.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    function u(a, c) {
        var d, e, f = 0,
            g = typeof a.getElementsByTagName !== W ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== W ? a.querySelectorAll(c || "*") : b;
        if (!g)
            for (g = [], d = a.childNodes || a; null != (e = d[f]); f++) !c || ka.nodeName(e, c) ? g.push(e) : ka.merge(g, u(e, c));
        return c === b || c && ka.nodeName(a, c) ? ka.merge([a], g) : g
    }

    function v(a) {
        bb.test(a.type) && (a.defaultChecked = a.checked)
    }

    function w(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yb.length; e--;)
            if (b = yb[e] + c, b in a) return b;
        return d
    }

    function x(a, b) {
        return a = b || a, "none" === ka.css(a, "display") || !ka.contains(a.ownerDocument, a)
    }

    function y(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ka._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && x(d) && (f[g] = ka._data(d, "olddisplay", C(d.nodeName)))) : f[g] || (e = x(d), (c && "none" !== c || !e) && ka._data(d, "olddisplay", e ? c : ka.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function z(a, b, c) {
        var d = rb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function A(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ka.css(a, c + xb[f], !0, e)), d ? ("content" === c && (g -= ka.css(a, "padding" + xb[f], !0, e)), "margin" !== c && (g -= ka.css(a, "border" + xb[f] + "Width", !0, e))) : (g += ka.css(a, "padding" + xb[f], !0, e), "padding" !== c && (g += ka.css(a, "border" + xb[f] + "Width", !0, e)));
        return g
    }

    function B(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = kb(a),
            g = ka.support.boxSizing && "border-box" === ka.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = lb(a, b, f), (0 > e || null == e) && (e = a.style[b]), sb.test(e)) return e;
            d = g && (ka.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + A(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function C(a) {
        var b = Y,
            c = ub[a];
        return c || (c = D(a, b), "none" !== c && c || (jb = (jb || ka("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (jb[0].contentWindow || jb[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = D(a, b), jb.detach()), ub[a] = c), c
    }

    function D(a, b) {
        var c = ka(b.createElement(a)).appendTo(b.body),
            d = ka.css(c[0], "display");
        return c.remove(), d
    }

    function E(a, b, c, d) {
        var e;
        if (ka.isArray(b)) ka.each(b, function(b, e) {
            c || Ab.test(a) ? d(a, e) : E(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== ka.type(b)) d(a, b);
        else
            for (e in b) E(a + "[" + e + "]", b[e], c, d)
    }

    function F(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(ma) || [];
            if (ka.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function G(a, c, d, e) {
        function f(i) {
            var j;
            return g[i] = !0, ka.each(a[i] || [], function(a, i) {
                var k = i(c, d, e);
                return "string" != typeof k || h || g[k] ? h ? !(j = k) : b : (c.dataTypes.unshift(k), f(k), !1)
            }), j
        }
        var g = {},
            h = a === Rb;
        return f(c.dataTypes[0]) || !g["*"] && f("*")
    }

    function H(a, c) {
        var d, e, f = ka.ajaxSettings.flatOptions || {};
        for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
        return d && ka.extend(!0, a, d), a
    }

    function I(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes;
            "*" === j[0];) j.shift(), f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
        if (f)
            for (h in i)
                if (i[h] && i[h].test(f)) {
                    j.unshift(h);
                    break
                }
        if (j[0] in d) g = j[0];
        else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) {
                    g = h;
                    break
                }
                e || (e = h)
            }
            g = g || e
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : b
    }

    function J(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function K() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function L() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function M() {
        return setTimeout(function() {
            $b = b
        }), $b = ka.now()
    }

    function N(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function O(a, b, c) {
        var d, e, f = 0,
            g = dc.length,
            h = ka.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = $b || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: ka.extend({}, b),
                opts: ka.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || M(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = ka.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (P(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts)) return d;
        return ka.map(k, N, j), ka.isFunction(j.opts.start) && j.opts.start.call(a, j), ka.fx.timer(ka.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function P(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = ka.camelCase(c), e = b[d], f = a[c], ka.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ka.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function Q(a, b, c) {
        var d, e, f, g, h, i, j = this,
            k = {},
            l = a.style,
            m = a.nodeType && x(a),
            n = ka._data(a, "fxshow");
        c.queue || (h = ka._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, j.always(function() {
            j.always(function() {
                h.unqueued--, ka.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [l.overflow, l.overflowX, l.overflowY], "inline" === ka.css(a, "display") && "none" === ka.css(a, "float") && (ka.support.inlineBlockNeedsLayout && "inline" !== C(a.nodeName) ? l.zoom = 1 : l.display = "inline-block")), c.overflow && (l.overflow = "hidden", ka.support.shrinkWrapBlocks || j.always(function() {
            l.overflow = c.overflow[0], l.overflowX = c.overflow[1], l.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (m ? "hide" : "show")) continue;
                k[d] = n && n[d] || ka.style(a, d)
            }
        if (!ka.isEmptyObject(k)) {
            n ? "hidden" in n && (m = n.hidden) : n = ka._data(a, "fxshow", {}), f && (n.hidden = !m), m ? ka(a).show() : j.done(function() {
                ka(a).hide()
            }), j.done(function() {
                var b;
                ka._removeData(a, "fxshow");
                for (b in k) ka.style(a, b, k[b])
            });
            for (d in k) g = N(m ? n[d] : 0, d, j), d in n || (n[d] = g.start, m && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function R(a, b, c, d, e) {
        return new R.prototype.init(a, b, c, d, e)
    }

    function S(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xb[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function T(a) {
        return ka.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var U, V, W = typeof b,
        X = a.location,
        Y = a.document,
        Z = Y.documentElement,
        $ = a.jQuery,
        _ = a.$,
        aa = {},
        ba = [],
        ca = "1.10.1",
        da = ba.concat,
        ea = ba.push,
        fa = ba.slice,
        ga = ba.indexOf,
        ha = aa.toString,
        ia = aa.hasOwnProperty,
        ja = ca.trim,
        ka = function(a, b) {
            return new ka.fn.init(a, b, V)
        },
        la = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ma = /\S+/g,
        na = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        oa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        pa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        qa = /^[\],:{}\s]*$/,
        ra = /(?:^|:|,)(?:\s*\[)+/g,
        sa = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ta = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        ua = /^-ms-/,
        va = /-([\da-z])/gi,
        wa = function(a, b) {
            return b.toUpperCase()
        },
        xa = function(a) {
            (Y.addEventListener || "load" === a.type || "complete" === Y.readyState) && (ya(), ka.ready())
        },
        ya = function() {
            Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", xa, !1), a.removeEventListener("load", xa, !1)) : (Y.detachEvent("onreadystatechange", xa), a.detachEvent("onload", xa))
        };
    ka.fn = ka.prototype = {
            jquery: ca,
            constructor: ka,
            init: function(a, c, d) {
                var e, f;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : oa.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                    if (e[1]) {
                        if (c = c instanceof ka ? c[0] : c, ka.merge(this, ka.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : Y, !0)), pa.test(e[1]) && ka.isPlainObject(c))
                            for (e in c) ka.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                        return this
                    }
                    if (f = Y.getElementById(e[2]), f && f.parentNode) {
                        if (f.id !== e[2]) return d.find(a);
                        this.length = 1, this[0] = f
                    }
                    return this.context = Y, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ka.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), ka.makeArray(a, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return fa.call(this)
            },
            get: function(a) {
                return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
            },
            pushStack: function(a) {
                var b = ka.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a, b) {
                return ka.each(this, a, b)
            },
            ready: function(a) {
                return ka.ready.promise().done(a), this
            },
            slice: function() {
                return this.pushStack(fa.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            map: function(a) {
                return this.pushStack(ka.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: ea,
            sort: [].sort,
            splice: [].splice
        }, ka.fn.init.prototype = ka.fn, ka.extend = ka.fn.extend = function() {
            var a, c, d, e, f, g, h = arguments[0] || {},
                i = 1,
                j = arguments.length,
                k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || ka.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
                if (null != (f = arguments[i]))
                    for (e in f) a = h[e], d = f[e], h !== d && (k && d && (ka.isPlainObject(d) || (c = ka.isArray(d))) ? (c ? (c = !1, g = a && ka.isArray(a) ? a : []) : g = a && ka.isPlainObject(a) ? a : {}, h[e] = ka.extend(k, g, d)) : d !== b && (h[e] = d));
            return h
        }, ka.extend({
            expando: "jQuery" + (ca + Math.random()).replace(/\D/g, ""),
            noConflict: function(b) {
                return a.$ === ka && (a.$ = _), b && a.jQuery === ka && (a.jQuery = $), ka
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? ka.readyWait++ : ka.ready(!0)
            },
            ready: function(a) {
                if (a === !0 ? !--ka.readyWait : !ka.isReady) {
                    if (!Y.body) return setTimeout(ka.ready);
                    ka.isReady = !0, a !== !0 && --ka.readyWait > 0 || (U.resolveWith(Y, [ka]), ka.fn.trigger && ka(Y).trigger("ready").off("ready"))
                }
            },
            isFunction: function(a) {
                return "function" === ka.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === ka.type(a)
            },
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? aa[ha.call(a)] || "object" : typeof a
            },
            isPlainObject: function(a) {
                var c;
                if (!a || "object" !== ka.type(a) || a.nodeType || ka.isWindow(a)) return !1;
                try {
                    if (a.constructor && !ia.call(a, "constructor") && !ia.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (d) {
                    return !1
                }
                if (ka.support.ownLast)
                    for (c in a) return ia.call(a, c);
                for (c in a);
                return c === b || ia.call(a, c)
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            error: function(a) {
                throw Error(a)
            },
            parseHTML: function(a, b, c) {
                if (!a || "string" != typeof a) return null;
                "boolean" == typeof b && (c = b, b = !1), b = b || Y;
                var d = pa.exec(a),
                    e = !c && [];
                return d ? [b.createElement(d[1])] : (d = ka.buildFragment([a], b, e), e && ka(e).remove(), ka.merge([], d.childNodes))
            },
            parseJSON: function(c) {
                return a.JSON && a.JSON.parse ? a.JSON.parse(c) : null === c ? c : "string" == typeof c && (c = ka.trim(c), c && qa.test(c.replace(sa, "@").replace(ta, "]").replace(ra, ""))) ? Function("return " + c)() : (ka.error("Invalid JSON: " + c), b)
            },
            parseXML: function(c) {
                var d, e;
                if (!c || "string" != typeof c) return null;
                try {
                    a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch (f) {
                    d = b
                }
                return d && d.documentElement && !d.getElementsByTagName("parsererror").length || ka.error("Invalid XML: " + c), d
            },
            noop: function() {},
            globalEval: function(b) {
                b && ka.trim(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(ua, "ms-").replace(va, wa)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d), e === !1) break
                } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]), e === !1) break; return a
            },
            trim: ja && !ja.call("\ufeffÂ ") ? function(a) {
                return null == a ? "" : ja.call(a)
            } : function(a) {
                return null == a ? "" : (a + "").replace(na, "")
            },
            makeArray: function(a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? ka.merge(d, "string" == typeof a ? [a] : a) : ea.call(d, a)), d
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (ga) return ga.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                        if (c in b && b[c] === a) return c
                }
                return -1
            },
            merge: function(a, c) {
                var d = c.length,
                    e = a.length,
                    f = 0;
                if ("number" == typeof d)
                    for (; d > f; f++) a[e++] = c[f];
                else
                    for (; c[f] !== b;) a[e++] = c[f++];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                var d, e = [],
                    f = 0,
                    g = a.length;
                for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
                return e
            },
            map: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h)
                    for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
                else
                    for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
                return da.apply([], i)
            },
            guid: 1,
            proxy: function(a, c) {
                var d, e, f;
                return "string" == typeof c && (f = a[c], c = a, a = f), ka.isFunction(a) ? (d = fa.call(arguments, 2), e = function() {
                    return a.apply(c || this, d.concat(fa.call(arguments)))
                }, e.guid = a.guid = a.guid || ka.guid++, e) : b
            },
            access: function(a, c, d, e, f, g, h) {
                var i = 0,
                    j = a.length,
                    k = null == d;
                if ("object" === ka.type(d)) {
                    f = !0;
                    for (i in d) ka.access(a, c, i, d[i], !0, g, h)
                } else if (e !== b && (f = !0, ka.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                        return k.call(ka(a), c)
                    })), c))
                    for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
                return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            }
        }), ka.ready.promise = function(b) {
            if (!U)
                if (U = ka.Deferred(), "complete" === Y.readyState) setTimeout(ka.ready);
                else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", xa, !1), a.addEventListener("load", xa, !1);
            else {
                Y.attachEvent("onreadystatechange", xa), a.attachEvent("onload", xa);
                var c = !1;
                try {
                    c = null == a.frameElement && Y.documentElement
                } catch (d) {}
                c && c.doScroll && function e() {
                    if (!ka.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        ya(), ka.ready()
                    }
                }()
            }
            return U.promise(b)
        }, ka.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            aa["[object " + b + "]"] = b.toLowerCase()
        }), V = ka(Y),
        function(a, b) {
            function c(a, b, c, d) {
                var e, f, g, h, i, j, k, l, m, n;
                if ((b ? b.ownerDocument || b : S) !== K && J(b), b = b || K, c = c || [], !a || "string" != typeof a) return c;
                if (1 !== (h = b.nodeType) && 9 !== h) return [];
                if (M && !d) {
                    if (e = xa.exec(a))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                if (f.id === g) return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && Q(b, f) && f.id === g) return c.push(f), c
                        } else {
                            if (e[2]) return ea.apply(c, b.getElementsByTagName(a)), c;
                            if ((g = e[3]) && B.getElementsByClassName && b.getElementsByClassName) return ea.apply(c, b.getElementsByClassName(g)), c
                        }
                    if (B.qsa && (!N || !N.test(a))) {
                        if (l = k = R, m = b, n = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = p(a), (k = b.getAttribute("id")) ? l = k.replace(Aa, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;) j[i] = l + q(j[i]);
                            m = ra.test(a) && b.parentNode || b, n = j.join(",")
                        }
                        if (n) try {
                            return ea.apply(c, m.querySelectorAll(n)), c
                        } catch (o) {} finally {
                            k || b.removeAttribute("id")
                        }
                    }
                }
                return y(a.replace(oa, "$1"), b, c, d)
            }

            function d(a) {
                return wa.test(a + "")
            }

            function e() {
                function a(c, d) {
                    return b.push(c += " ") > D.cacheLength && delete a[b.shift()], a[c] = d
                }
                var b = [];
                return a
            }

            function f(a) {
                return a[R] = !0, a
            }

            function g(a) {
                var b = K.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function h(a, b, c) {
                a = a.split("|");
                for (var d, e = a.length, f = c ? null : b; e--;)(d = D.attrHandle[a[e]]) && d !== b || (D.attrHandle[a[e]] = f)
            }

            function i(a, b) {
                var c = a.getAttributeNode(b);
                return c && c.specified ? c.value : a[b] === !0 ? b.toLowerCase() : null
            }

            function j(a, b) {
                return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }

            function k(a) {
                return "input" === a.nodeName.toLowerCase() ? a.defaultValue : b
            }

            function l(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || _) - (~a.sourceIndex || _);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function m(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function n(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function o(a) {
                return f(function(b) {
                    return b = +b, f(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function p(a, b) {
                var d, e, f, g, h, i, j, k = W[a + " "];
                if (k) return b ? 0 : k.slice(0);
                for (h = a, i = [], j = D.preFilter; h;) {
                    (!d || (e = pa.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = qa.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(oa, " ")
                    }), h = h.slice(d.length));
                    for (g in D.filter) !(e = va[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d) break
                }
                return b ? h.length : h ? c.error(a) : W(a, i).slice(0)
            }

            function q(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function r(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = U++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j, k = T + " " + f;
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e)
                                if (j = b[R] || (b[R] = {}), (i = j[d]) && i[0] === k) {
                                    if ((h = i[1]) === !0 || h === C) return h === !0
                                } else if (i = j[d] = [k], i[1] = a(b, c, g) || C, i[1] === !0) return !0
                }
            }

            function s(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function t(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function u(a, b, c, d, e, g) {
                return d && !d[R] && (d = u(d)), e && !e[R] && (e = u(e, g)), f(function(f, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = f || x(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || !f && b ? p : t(p, m, a, h, i),
                        r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i), d)
                        for (j = t(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    if (f) {
                        if (e || a) {
                            if (e) {
                                for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
                                e(null, r = [], j, i)
                            }
                            for (k = r.length; k--;)(l = r[k]) && (j = e ? ga.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    } else r = t(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : ea.apply(g, r)
                })
            }

            function v(a) {
                for (var b, c, d, e = a.length, f = D.relative[a[0].type], g = f || D.relative[" "], h = f ? 1 : 0, i = r(function(a) {
                        return a === b
                    }, g, !0), j = r(function(a) {
                        return ga.call(b, a) > -1
                    }, g, !0), k = [function(a, c, d) {
                        return !f && (d || c !== H) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                    }]; e > h; h++)
                    if (c = D.relative[a[h].type]) k = [r(s(k), c)];
                    else {
                        if (c = D.filter[a[h].type].apply(null, a[h].matches), c[R]) {
                            for (d = ++h; e > d && !D.relative[a[d].type]; d++);
                            return u(h > 1 && s(k), h > 1 && q(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(oa, "$1"), c, d > h && v(a.slice(h, d)), e > d && v(a = a.slice(d)), e > d && q(a))
                        }
                        k.push(c)
                    }
                return s(k)
            }

            function w(a, b) {
                var d = 0,
                    e = b.length > 0,
                    g = a.length > 0,
                    h = function(f, h, i, j, k) {
                        var l, m, n, o = [],
                            p = 0,
                            q = "0",
                            r = f && [],
                            s = null != k,
                            u = H,
                            v = f || g && D.find.TAG("*", k && h.parentNode || h),
                            w = T += null == u ? 1 : Math.random() || .1;
                        for (s && (H = h !== K && h, C = d); null != (l = v[q]); q++) {
                            if (g && l) {
                                for (m = 0; n = a[m++];)
                                    if (n(l, h, i)) {
                                        j.push(l);
                                        break
                                    }
                                s && (T = w, C = ++d)
                            }
                            e && ((l = !n && l) && p--, f && r.push(l))
                        }
                        if (p += q, e && q !== p) {
                            for (m = 0; n = b[m++];) n(r, o, h, i);
                            if (f) {
                                if (p > 0)
                                    for (; q--;) r[q] || o[q] || (o[q] = ca.call(j));
                                o = t(o)
                            }
                            ea.apply(j, o), s && !f && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                        }
                        return s && (T = w, H = u), r
                    };
                return e ? f(h) : h
            }

            function x(a, b, d) {
                for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
                return d
            }

            function y(a, b, c, d) {
                var e, f, g, h, i, j = p(a);
                if (!d && 1 === j.length) {
                    if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && B.getById && 9 === b.nodeType && M && D.relative[f[1].type]) {
                        if (b = (D.find.ID(g.matches[0].replace(Ba, Ca), b) || [])[0], !b) return c;
                        a = a.slice(f.shift().value.length)
                    }
                    for (e = va.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !D.relative[h = g.type]);)
                        if ((i = D.find[h]) && (d = i(g.matches[0].replace(Ba, Ca), ra.test(f[0].type) && b.parentNode || b))) {
                            if (f.splice(e, 1), a = d.length && q(f), !a) return ea.apply(c, d), c;
                            break
                        }
                }
                return G(a, j)(d, b, !M, c, ra.test(a)), c
            }

            function z() {}
            var A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R = "sizzle" + -new Date,
                S = a.document,
                T = 0,
                U = 0,
                V = e(),
                W = e(),
                X = e(),
                Y = !1,
                Z = function() {
                    return 0
                },
                $ = typeof b,
                _ = 1 << 31,
                aa = {}.hasOwnProperty,
                ba = [],
                ca = ba.pop,
                da = ba.push,
                ea = ba.push,
                fa = ba.slice,
                ga = ba.indexOf || function(a) {
                    for (var b = 0, c = this.length; c > b; b++)
                        if (this[b] === a) return b;
                    return -1
                },
                ha = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ia = "[\\x20\\t\\r\\n\\f]",
                ja = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                la = ja.replace("w", "w#"),
                ma = "\\[" + ia + "*(" + ja + ")" + ia + "*(?:([*^$|!~]?=)" + ia + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + la + ")|)|)" + ia + "*\\]",
                na = ":(" + ja + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ma.replace(3, 8) + ")*)|.*)\\)|)",
                oa = RegExp("^" + ia + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ia + "+$", "g"),
                pa = RegExp("^" + ia + "*," + ia + "*"),
                qa = RegExp("^" + ia + "*([>+~]|" + ia + ")" + ia + "*"),
                ra = RegExp(ia + "*[+~]"),
                sa = RegExp("=" + ia + "*([^\\]'\"]*)" + ia + "*\\]", "g"),
                ta = RegExp(na),
                ua = RegExp("^" + la + "$"),
                va = {
                    ID: RegExp("^#(" + ja + ")"),
                    CLASS: RegExp("^\\.(" + ja + ")"),
                    TAG: RegExp("^(" + ja.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + ma),
                    PSEUDO: RegExp("^" + na),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ia + "*(even|odd|(([+-]|)(\\d*)n|)" + ia + "*(?:([+-]|)" + ia + "*(\\d+)|))" + ia + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + ha + ")$", "i"),
                    needsContext: RegExp("^" + ia + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ia + "*((?:-\\d)?\\d*)" + ia + "*\\)|)(?=[^-]|$)", "i")
                },
                wa = /^[^{]+\{\s*\[native \w/,
                xa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ya = /^(?:input|select|textarea|button)$/i,
                za = /^h\d$/i,
                Aa = /'|\\/g,
                Ba = RegExp("\\\\([\\da-f]{1,6}" + ia + "?|(" + ia + ")|.)", "ig"),
                Ca = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(55296 | d >> 10, 56320 | 1023 & d)
                };
            try {
                ea.apply(ba = fa.call(S.childNodes), S.childNodes), ba[S.childNodes.length].nodeType
            } catch (Da) {
                ea = {
                    apply: ba.length ? function(a, b) {
                        da.apply(a, fa.call(b))
                    } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            F = c.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, B = c.support = {}, J = c.setDocument = function(a) {
                var c = a ? a.ownerDocument || a : S,
                    e = c.parentWindow;
                return c !== K && 9 === c.nodeType && c.documentElement ? (K = c, L = c.documentElement, M = !F(c), e && e.frameElement && e.attachEvent("onbeforeunload", function() {
                    J()
                }), B.attributes = g(function(a) {
                    return a.innerHTML = "<a href='#'></a>", h("type|href|height|width", j, "#" === a.firstChild.getAttribute("href")), h(ha, i, null == a.getAttribute("disabled")), a.className = "i", !a.getAttribute("className")
                }), B.input = g(function(a) {
                    return a.innerHTML = "<input>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
                }), h("value", k, B.attributes && B.input), B.getElementsByTagName = g(function(a) {
                    return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
                }), B.getElementsByClassName = g(function(a) {
                    return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                }), B.getById = g(function(a) {
                    return L.appendChild(a).id = R, !c.getElementsByName || !c.getElementsByName(R).length
                }), B.getById ? (D.find.ID = function(a, b) {
                    if (typeof b.getElementById !== $ && M) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, D.filter.ID = function(a) {
                    var b = a.replace(Ba, Ca);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete D.find.ID, D.filter.ID = function(a) {
                    var b = a.replace(Ba, Ca);
                    return function(a) {
                        var c = typeof a.getAttributeNode !== $ && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), D.find.TAG = B.getElementsByTagName ? function(a, c) {
                    return typeof c.getElementsByTagName !== $ ? c.getElementsByTagName(a) : b
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, D.find.CLASS = B.getElementsByClassName && function(a, c) {
                    return typeof c.getElementsByClassName !== $ && M ? c.getElementsByClassName(a) : b
                }, O = [], N = [], (B.qsa = d(c.querySelectorAll)) && (g(function(a) {
                    a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || N.push("\\[" + ia + "*(?:value|" + ha + ")"), a.querySelectorAll(":checked").length || N.push(":checked")
                }), g(function(a) {
                    var b = c.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && N.push("[*^$]=" + ia + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), N.push(",.*:")
                })), (B.matchesSelector = d(P = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && g(function(a) {
                    B.disconnectedMatch = P.call(a, "div"), P.call(a, "[s!='']:x"), O.push("!=", na)
                }), N = N.length && RegExp(N.join("|")), O = O.length && RegExp(O.join("|")), Q = d(L.contains) || L.compareDocumentPosition ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, B.sortDetached = g(function(a) {
                    return 1 & a.compareDocumentPosition(c.createElement("div"))
                }), Z = L.compareDocumentPosition ? function(a, b) {
                    if (a === b) return Y = !0, 0;
                    var d = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                    return d ? 1 & d || !B.sortDetached && b.compareDocumentPosition(a) === d ? a === c || Q(S, a) ? -1 : b === c || Q(S, b) ? 1 : I ? ga.call(I, a) - ga.call(I, b) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                } : function(a, b) {
                    var d, e = 0,
                        f = a.parentNode,
                        g = b.parentNode,
                        h = [a],
                        i = [b];
                    if (a === b) return Y = !0, 0;
                    if (!f || !g) return a === c ? -1 : b === c ? 1 : f ? -1 : g ? 1 : I ? ga.call(I, a) - ga.call(I, b) : 0;
                    if (f === g) return l(a, b);
                    for (d = a; d = d.parentNode;) h.unshift(d);
                    for (d = b; d = d.parentNode;) i.unshift(d);
                    for (; h[e] === i[e];) e++;
                    return e ? l(h[e], i[e]) : h[e] === S ? -1 : i[e] === S ? 1 : 0
                }, c) : K
            }, c.matches = function(a, b) {
                return c(a, null, null, b)
            }, c.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== K && J(a), b = b.replace(sa, "='$1']"), !(!B.matchesSelector || !M || O && O.test(b) || N && N.test(b))) try {
                    var d = P.call(a, b);
                    if (d || B.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return c(b, K, null, [a]).length > 0
            }, c.contains = function(a, b) {
                return (a.ownerDocument || a) !== K && J(a), Q(a, b)
            }, c.attr = function(a, c) {
                (a.ownerDocument || a) !== K && J(a);
                var d = D.attrHandle[c.toLowerCase()],
                    e = d && aa.call(D.attrHandle, c.toLowerCase()) ? d(a, c, !M) : b;
                return e === b ? B.attributes || !M ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
            }, c.error = function(a) {
                throw Error("Syntax error, unrecognized expression: " + a)
            }, c.uniqueSort = function(a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (Y = !B.detectDuplicates, I = !B.sortStable && a.slice(0), a.sort(Z), Y) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return a
            }, E = c.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += E(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d]; d++) c += E(b);
                return c
            }, D = c.selectors = {
                cacheLength: 50,
                createPseudo: f,
                match: va,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(Ba, Ca), a[3] = (a[4] || a[5] || "").replace(Ba, Ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var c, d = !a[5] && a[2];
                        return va.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && ta.test(d) && (c = p(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(Ba, Ca).toLowerCase();
                        return "*" === a ? function() {
                            return !0;
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = V[a + " "];
                        return b || (b = RegExp("(^|" + ia + ")" + a + "(" + ia + "|$)")) && V(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== $ && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, b, d) {
                        return function(e) {
                            var f = c.attr(e, a);
                            return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[R] || (q[R] = {}), j = k[a] || [], n = j[0] === T && j[1], m = j[0] === T && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [T, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[R] || (b[R] = {}))[a]) && j[0] === T) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[R] || (l[R] = {}))[a] = [T, m]), l !== b)););
                                return m -= e, m === d || 0 === m % d && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var d, e = D.pseudos[a] || D.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                        return e[R] ? e(b) : e.length > 1 ? (d = [a, a, "", b], D.setFilters.hasOwnProperty(a.toLowerCase()) ? f(function(a, c) {
                            for (var d, f = e(a, b), g = f.length; g--;) d = ga.call(a, f[g]), a[d] = !(c[d] = f[g])
                        }) : function(a) {
                            return e(a, 0, d)
                        }) : e
                    }
                },
                pseudos: {
                    not: f(function(a) {
                        var b = [],
                            c = [],
                            d = G(a.replace(oa, "$1"));
                        return d[R] ? f(function(a, b, c, e) {
                            for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), !c.pop()
                        }
                    }),
                    has: f(function(a) {
                        return function(b) {
                            return c(a, b).length > 0
                        }
                    }),
                    contains: f(function(a) {
                        return function(b) {
                            return (b.textContent || b.innerText || E(b)).indexOf(a) > -1
                        }
                    }),
                    lang: f(function(a) {
                        return ua.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(Ba, Ca).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = M ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === L
                    },
                    focus: function(a) {
                        return a === K.activeElement && (!K.hasFocus || K.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !D.pseudos.empty(a)
                    },
                    header: function(a) {
                        return za.test(a.nodeName)
                    },
                    input: function(a) {
                        return ya.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                    },
                    first: o(function() {
                        return [0]
                    }),
                    last: o(function(a, b) {
                        return [b - 1]
                    }),
                    eq: o(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: o(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: o(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: o(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: o(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; b > ++d;) a.push(d);
                        return a
                    })
                }
            };
            for (A in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) D.pseudos[A] = m(A);
            for (A in {
                    submit: !0,
                    reset: !0
                }) D.pseudos[A] = n(A);
            G = c.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = X[a + " "];
                if (!f) {
                    for (b || (b = p(a)), c = b.length; c--;) f = v(b[c]), f[R] ? d.push(f) : e.push(f);
                    f = X(a, w(e, d))
                }
                return f
            }, D.pseudos.nth = D.pseudos.eq, z.prototype = D.filters = D.pseudos, D.setFilters = new z, B.sortStable = R.split("").sort(Z).join("") === R, J(), [0, 0].sort(Z), B.detectDuplicates = Y, ka.find = c, ka.expr = c.selectors, ka.expr[":"] = ka.expr.pseudos, ka.unique = c.uniqueSort, ka.text = c.getText, ka.isXMLDoc = c.isXML, ka.contains = c.contains
        }(a);
    var za = {};
    ka.Callbacks = function(a) {
        a = "string" == typeof a ? za[a] || d(a) : ka.extend({}, a);
        var c, e, f, g, h, i, j = [],
            k = !a.once && [],
            l = function(b) {
                for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++)
                    if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                        e = !1;
                        break
                    }
                c = !1, j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable())
            },
            m = {
                add: function() {
                    if (j) {
                        var b = j.length;
                        ! function d(b) {
                            ka.each(b, function(b, c) {
                                var e = ka.type(c);
                                "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                            })
                        }(arguments), c ? g = j.length : e && (i = b, l(e))
                    }
                    return this
                },
                remove: function() {
                    return j && ka.each(arguments, function(a, b) {
                        for (var d;
                            (d = ka.inArray(b, j, d)) > -1;) j.splice(d, 1), c && (g >= d && g--, h >= d && h--)
                    }), this
                },
                has: function(a) {
                    return a ? ka.inArray(a, j) > -1 : !(!j || !j.length)
                },
                empty: function() {
                    return j = [], g = 0, this
                },
                disable: function() {
                    return j = k = e = b, this
                },
                disabled: function() {
                    return !j
                },
                lock: function() {
                    return k = b, e || m.disable(), this
                },
                locked: function() {
                    return !k
                },
                fireWith: function(a, b) {
                    return b = b || [], b = [a, b.slice ? b.slice() : b], !j || f && !k || (c ? k.push(b) : l(b)), this
                },
                fire: function() {
                    return m.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!f
                }
            };
        return m
    }, ka.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", ka.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ka.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ka.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return ka.Deferred(function(c) {
                            ka.each(b, function(b, f) {
                                var g = f[0],
                                    h = ka.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = h && h.apply(this, arguments);
                                    a && ka.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? ka.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, ka.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = fa.call(arguments),
                g = f.length,
                h = 1 !== g || a && ka.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : ka.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? fa.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = Array(g), c = Array(g), d = Array(g); g > e; e++) f[e] && ka.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    }), ka.support = function(b) {
        var c, d, e, f, g, h, i, j, k, l = Y.createElement("div");
        if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = l.getElementsByTagName("*") || [], d = l.getElementsByTagName("a")[0], !d || !d.style || !c.length) return b;
        f = Y.createElement("select"), h = f.appendChild(Y.createElement("option")), e = l.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b.getSetAttribute = "t" !== l.className, b.leadingWhitespace = 3 === l.firstChild.nodeType, b.tbody = !l.getElementsByTagName("tbody").length, b.htmlSerialize = !!l.getElementsByTagName("link").length, b.style = /top/.test(d.getAttribute("style")), b.hrefNormalized = "/a" === d.getAttribute("href"), b.opacity = /^0.5/.test(d.style.opacity), b.cssFloat = !!d.style.cssFloat, b.checkOn = !!e.value, b.optSelected = h.selected, b.enctype = !!Y.createElement("form").enctype, b.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, b.inlineBlockNeedsLayout = !1, b.shrinkWrapBlocks = !1, b.pixelPosition = !1, b.deleteExpando = !0, b.noCloneEvent = !0, b.reliableMarginRight = !0, b.boxSizingReliable = !0, e.checked = !0, b.noCloneChecked = e.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete l.test
        } catch (m) {
            b.deleteExpando = !1
        }
        e = Y.createElement("input"), e.setAttribute("value", ""), b.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), b.radioValue = "t" === e.value, e.setAttribute("checked", "t"), e.setAttribute("name", "t"), g = Y.createDocumentFragment(), g.appendChild(e), b.appendChecked = e.checked, b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, l.attachEvent && (l.attachEvent("onclick", function() {
            b.noCloneEvent = !1
        }), l.cloneNode(!0).click());
        for (k in {
                submit: !0,
                change: !0,
                focusin: !0
            }) l.setAttribute(i = "on" + k, "t"), b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
        l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === l.style.backgroundClip;
        for (k in ka(b)) break;
        return b.ownLast = "0" !== k, ka(function() {
            var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                g = Y.getElementsByTagName("body")[0];
            g && (c = Y.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ka.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                b.boxSizing = 4 === l.offsetWidth
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
                width: "4px"
            }).width, d = l.appendChild(Y.createElement("div")), d.style.cssText = l.style.cssText = f, d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), typeof l.style.zoom !== W && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), g.removeChild(c), c = l = e = d = null)
        }), c = f = g = h = d = e = null, b
    }({});
    var Aa = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Ba = /([A-Z])/g;
    ka.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? ka.cache[a[ka.expando]] : a[ka.expando], !!a && !h(a)
        },
        data: function(a, b, c) {
            return e(a, b, c)
        },
        removeData: function(a, b) {
            return f(a, b)
        },
        _data: function(a, b, c) {
            return e(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return f(a, b, !0)
        },
        acceptData: function(a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
            var b = a.nodeName && ka.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), ka.fn.extend({
        data: function(a, c) {
            var d, e, f = null,
                h = 0,
                i = this[0];
            if (a === b) {
                if (this.length && (f = ka.data(i), 1 === i.nodeType && !ka._data(i, "parsedAttrs"))) {
                    for (d = i.attributes; d.length > h; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = ka.camelCase(e.slice(5)), g(i, e, f[e]));
                    ka._data(i, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof a ? this.each(function() {
                ka.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                ka.data(this, a, c)
            }) : i ? g(i, a, ka.data(i, a)) : null
        },
        removeData: function(a) {
            return this.each(function() {
                ka.removeData(this, a)
            })
        }
    }), ka.extend({
        queue: function(a, c, d) {
            var e;
            return a ? (c = (c || "fx") + "queue", e = ka._data(a, c), d && (!e || ka.isArray(d) ? e = ka._data(a, c, ka.makeArray(d)) : e.push(d)), e || []) : b
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = ka.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = ka._queueHooks(a, b),
                g = function() {
                    ka.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ka._data(a, c) || ka._data(a, c, {
                empty: ka.Callbacks("once memory").add(function() {
                    ka._removeData(a, b + "queue"), ka._removeData(a, c)
                })
            })
        }
    }), ka.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), d > arguments.length ? ka.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = ka.queue(this, a, c);
                ka._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && ka.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                ka.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = ka.fx ? ka.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1,
                f = ka.Deferred(),
                g = this,
                h = this.length,
                i = function() {
                    --e || f.resolveWith(g, [g])
                };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = ka._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var Ca, Da, Ea = /[\t\r\n\f]/g,
        Fa = /\r/g,
        Ga = /^(?:input|select|textarea|button|object)$/i,
        Ha = /^(?:a|area)$/i,
        Ia = /^(?:checked|selected)$/i,
        Ja = ka.support.getSetAttribute,
        Ka = ka.support.input;
    ka.fn.extend({
        attr: function(a, b) {
            return ka.access(this, ka.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                ka.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return ka.access(this, ka.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = ka.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = "string" == typeof a && a;
            if (ka.isFunction(a)) return this.each(function(b) {
                ka(this).addClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(ma) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ea, " ") : " ")) {
                        for (f = 0; e = b[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                        c.className = ka.trim(d)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = 0 === arguments.length || "string" == typeof a && a;
            if (ka.isFunction(a)) return this.each(function(b) {
                ka(this).removeClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(ma) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ea, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        c.className = a ? ka.trim(d) : ""
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return this.each(ka.isFunction(a) ? function(c) {
                ka(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var e, f = 0, g = ka(this), h = b, i = a.match(ma) || []; e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                else(c === W || "boolean" === c) && (this.className && ka._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ka._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Ea, " ").indexOf(b) >= 0) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            return arguments.length ? (e = ka.isFunction(a), this.each(function(c) {
                var f;
                1 === this.nodeType && (f = e ? a.call(this, c, ka(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : ka.isArray(f) && (f = ka.map(f, function(a) {
                    return null == a ? "" : a + ""
                })), d = ka.valHooks[this.type] || ka.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f))
            })) : f ? (d = ka.valHooks[f.type] || ka.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, "string" == typeof c ? c.replace(Fa, "") : null == c ? "" : c)) : void 0
        }
    }), ka.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = ka.find.attr(a, "value");
                    return null != b ? b : a.text
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (ka.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ka.nodeName(c.parentNode, "optgroup"))) {
                            if (b = ka(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = ka.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = ka.inArray(ka(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        },
        attr: function(a, c, d) {
            var e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? typeof a.getAttribute === W ? ka.prop(a, c, d) : (1 === g && ka.isXMLDoc(a) || (c = c.toLowerCase(), e = ka.attrHooks[c] || (ka.expr.match.bool.test(c) ? Da : Ca)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = ka.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : (ka.removeAttr(a, c), b)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(ma);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = ka.propFix[c] || c, ka.expr.match.bool.test(c) ? Ka && Ja || !Ia.test(c) ? a[d] = !1 : a[ka.camelCase("default-" + c)] = a[d] = !1 : ka.attr(a, c, ""), a.removeAttribute(Ja ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!ka.support.radioValue && "radio" === b && ka.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !ka.isXMLDoc(a), g && (c = ka.propFix[c] || c, f = ka.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = ka.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Ga.test(a.nodeName) || Ha.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), Da = {
        set: function(a, b, c) {
            return b === !1 ? ka.removeAttr(a, c) : Ka && Ja || !Ia.test(c) ? a.setAttribute(!Ja && ka.propFix[c] || c, c) : a[ka.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, ka.each(ka.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = ka.expr.attrHandle[c] || ka.find.attr;
        ka.expr.attrHandle[c] = Ka && Ja || !Ia.test(c) ? function(a, c, e) {
            var f = ka.expr.attrHandle[c],
                g = e ? b : (ka.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return ka.expr.attrHandle[c] = f, g
        } : function(a, c, d) {
            return d ? b : a[ka.camelCase("default-" + c)] ? c.toLowerCase() : null
        }
    }), Ka && Ja || (ka.attrHooks.value = {
        set: function(a, c, d) {
            return ka.nodeName(a, "input") ? (a.defaultValue = c, b) : Ca && Ca.set(a, c, d)
        }
    }), Ja || (Ca = {
        set: function(a, c, d) {
            var e = a.getAttributeNode(d);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", "value" === d || c === a.getAttribute(d) ? c : b
        }
    }, ka.expr.attrHandle.id = ka.expr.attrHandle.name = ka.expr.attrHandle.coords = function(a, c, d) {
        var e;
        return d ? b : (e = a.getAttributeNode(c)) && "" !== e.value ? e.value : null
    }, ka.valHooks.button = {
        get: function(a, c) {
            var d = a.getAttributeNode(c);
            return d && d.specified ? d.value : b
        },
        set: Ca.set
    }, ka.attrHooks.contenteditable = {
        set: function(a, b, c) {
            Ca.set(a, "" === b ? !1 : b, c)
        }
    }, ka.each(["width", "height"], function(a, c) {
        ka.attrHooks[c] = {
            set: function(a, d) {
                return "" === d ? (a.setAttribute(c, "auto"), d) : b
            }
        }
    })), ka.support.hrefNormalized || ka.each(["href", "src"], function(a, b) {
        ka.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), ka.support.style || (ka.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    }), ka.support.optSelected || (ka.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), ka.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ka.propFix[this.toLowerCase()] = this
    }), ka.support.enctype || (ka.propFix.enctype = "encoding"), ka.each(["radio", "checkbox"], function() {
        ka.valHooks[this] = {
            set: function(a, c) {
                return ka.isArray(c) ? a.checked = ka.inArray(ka(a).val(), c) >= 0 : b
            }
        }, ka.support.checkOn || (ka.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var La = /^(?:input|select|textarea)$/i,
        Ma = /^key/,
        Na = /^(?:mouse|contextmenu)|click/,
        Oa = /^(?:focusinfocus|focusoutblur)$/,
        Pa = /^([^.]*)(?:\.(.+)|)$/;
    ka.event = {
        global: {},
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = ka._data(a);
            if (r) {
                for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = ka.guid++), (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function(a) {
                        return typeof ka === W || a && ka.event.triggered === a.type ? b : ka.event.dispatch.apply(l.elem, arguments)
                    }, l.elem = a), c = (c || "").match(ma) || [""], i = c.length; i--;) g = Pa.exec(c[i]) || [], o = q = g[1], p = (g[2] || "").split(".").sort(), o && (k = ka.event.special[o] || {}, o = (f ? k.delegateType : k.bindType) || o, k = ka.event.special[o] || {}, m = ka.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && ka.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), ka.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ka.hasData(a) && ka._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(ma) || [""], j = b.length; j--;)
                    if (h = Pa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = ka.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ka.removeEvent(a, n, q.handle), delete k[n])
                    } else
                        for (n in k) ka.event.remove(a, n + b[j], c, d, !0);
                ka.isEmptyObject(k) && (delete q.handle, ka._removeData(a, "events"))
            }
        },
        trigger: function(c, d, e, f) {
            var g, h, i, j, k, l, m, n = [e || Y],
                o = ia.call(c, "type") ? c.type : c,
                p = ia.call(c, "namespace") ? c.namespace.split(".") : [];
            if (i = l = e = e || Y, 3 !== e.nodeType && 8 !== e.nodeType && !Oa.test(o + ka.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), h = 0 > o.indexOf(":") && "on" + o, c = c[ka.expando] ? c : new ka.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : ka.makeArray(d, [c]), k = ka.event.special[o] || {}, f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                if (!f && !k.noBubble && !ka.isWindow(e)) {
                    for (j = k.delegateType || o, Oa.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i), l = i;
                    l === (e.ownerDocument || Y) && n.push(l.defaultView || l.parentWindow || a)
                }
                for (m = 0;
                    (i = n[m++]) && !c.isPropagationStopped();) c.type = m > 1 ? j : k.bindType || o, g = (ka._data(i, "events") || {})[c.type] && ka._data(i, "handle"), g && g.apply(i, d), g = h && i[h], g && ka.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                if (c.type = o, !f && !c.isDefaultPrevented() && (!k._default || k._default.apply(n.pop(), d) === !1) && ka.acceptData(e) && h && e[o] && !ka.isWindow(e)) {
                    l = e[h], l && (e[h] = null), ka.event.triggered = o;
                    try {
                        e[o]()
                    } catch (q) {}
                    ka.event.triggered = b, l && (e[h] = l)
                }
                return c.result
            }
        },
        dispatch: function(a) {
            a = ka.event.fix(a);
            var c, d, e, f, g, h = [],
                i = fa.call(arguments),
                j = (ka._data(this, "events") || {})[a.type] || [],
                k = ka.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = ka.event.handlers.call(this, a, j), c = 0;
                    (f = h[c++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = f.elem, g = 0;
                        (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, d = ((ka.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [],
                i = c.delegateCount,
                j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type))
                for (; j != this; j = j.parentNode || this)
                    if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                        for (f = [], g = 0; i > g; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? ka(d, this).index(j) >= 0 : ka.find(d, this, null, [j]).length), f[d] && f.push(e);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    }
            return c.length > i && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h
        },
        fix: function(a) {
            if (a[ka.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ka.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || Y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button,
                    h = c.fromElement;
                return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || Y, f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== k() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === k() && this.blur ? (this.blur(), !1) : b
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ka.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : b
                },
                _default: function(a) {
                    return ka.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = ka.extend(new ka.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? ka.event.trigger(e, null, b) : ka.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, ka.removeEvent = Y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === W && (a[d] = null), a.detachEvent(d, c))
    }, ka.Event = function(a, c) {
        return this instanceof ka.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, c && ka.extend(this, c), this.timeStamp = a && a.timeStamp || ka.now(), this[ka.expando] = !0, b) : new ka.Event(a, c)
    }, ka.Event.prototype = {
        isDefaultPrevented: j,
        isPropagationStopped: j,
        isImmediatePropagationStopped: j,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = i, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = i, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = i, this.stopPropagation()
        }
    }, ka.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        ka.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !ka.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), ka.support.submitBubbles || (ka.event.special.submit = {
        setup: function() {
            return ka.nodeName(this, "form") ? !1 : (ka.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target,
                    d = ka.nodeName(c, "input") || ka.nodeName(c, "button") ? c.form : b;
                d && !ka._data(d, "submitBubbles") && (ka.event.add(d, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), ka._data(d, "submitBubbles", !0))
            }), b)
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ka.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return ka.nodeName(this, "form") ? !1 : (ka.event.remove(this, "._submit"), b)
        }
    }), ka.support.changeBubbles || (ka.event.special.change = {
        setup: function() {
            return La.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ka.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), ka.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), ka.event.simulate("change", this, a, !0)
            })), !1) : (ka.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                La.test(b.nodeName) && !ka._data(b, "changeBubbles") && (ka.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || ka.event.simulate("change", this.parentNode, a, !0)
                }), ka._data(b, "changeBubbles", !0))
            }), b)
        },
        handle: function(a) {
            var c = a.target;
            return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : b
        },
        teardown: function() {
            return ka.event.remove(this, "._change"), !La.test(this.nodeName)
        }
    }), ka.support.focusinBubbles || ka.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0,
            d = function(a) {
                ka.event.simulate(b, a.target, ka.event.fix(a), !0)
            };
        ka.event.special[b] = {
            setup: function() {
                0 === c++ && Y.addEventListener(a, d, !0)
            },
            teardown: function() {
                0 === --c && Y.removeEventListener(a, d, !0)
            }
        }
    }), ka.fn.extend({
        on: function(a, c, d, e, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (g in a) this.on(g, c, d, a[g], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = j;
            else if (!e) return this;
            return 1 === f && (h = e, e = function(a) {
                return ka().off(a), h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = ka.guid++)), this.each(function() {
                ka.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, ka(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = j), this.each(function() {
                ka.event.remove(this, a, d, c)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                ka.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, c) {
            var d = this[0];
            return d ? ka.event.trigger(a, c, d, !0) : b
        }
    });
    var Qa = /^.[^:#\[\.,]*$/,
        Ra = /^(?:parents|prev(?:Until|All))/,
        Sa = ka.expr.match.needsContext,
        Ta = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ka.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(ka(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (ka.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) ka.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? ka.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        has: function(a) {
            var b, c = ka(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (ka.contains(this, c[b])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(m(this, a || [], !0))
        },
        filter: function(a) {
            return this.pushStack(m(this, a || [], !1))
        },
        is: function(a) {
            return !!m(this, "string" == typeof a && Sa.test(a) ? ka(a) : a || [], !1).length
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Sa.test(a) || "string" != typeof a ? ka(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (11 > c.nodeType && (g ? g.index(c) > -1 : 1 === c.nodeType && ka.find.matchesSelector(c, a))) {
                        c = f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? ka.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? ka.inArray(this[0], ka(a)) : ka.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? ka(a, b) : ka.makeArray(a && a.nodeType ? [a] : a),
                d = ka.merge(this.get(), c);
            return this.pushStack(ka.unique(d))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), ka.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return ka.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return ka.dir(a, "parentNode", c);
        },
        next: function(a) {
            return l(a, "nextSibling")
        },
        prev: function(a) {
            return l(a, "previousSibling")
        },
        nextAll: function(a) {
            return ka.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return ka.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return ka.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return ka.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return ka.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return ka.sibling(a.firstChild)
        },
        contents: function(a) {
            return ka.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ka.merge([], a.childNodes)
        }
    }, function(a, b) {
        ka.fn[a] = function(c, d) {
            var e = ka.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ka.filter(d, e)), this.length > 1 && (Ta[a] || (e = ka.unique(e)), Ra.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    }), ka.extend({
        filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ka.find.matchesSelector(d, a) ? [d] : [] : ka.find.matches(a, ka.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !ka(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Ua = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Va = / jQuery\d+="(?:null|\d+)"/g,
        Wa = RegExp("<(?:" + Ua + ")[\\s/>]", "i"),
        Xa = /^\s+/,
        Ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Za = /<([\w:]+)/,
        $a = /<tbody/i,
        _a = /<|&#?\w+;/,
        ab = /<(?:script|style|link)/i,
        bb = /^(?:checkbox|radio)$/i,
        cb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        db = /^$|\/(?:java|ecma)script/i,
        eb = /^true\/(.*)/,
        fb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        gb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ka.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        hb = n(Y),
        ib = hb.appendChild(Y.createElement("div"));
    gb.optgroup = gb.option, gb.tbody = gb.tfoot = gb.colgroup = gb.caption = gb.thead, gb.th = gb.td, ka.fn.extend({
        text: function(a) {
            return ka.access(this, function(a) {
                return a === b ? ka.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? ka.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ka.cleanData(u(c)), c.parentNode && (b && ka.contains(c.ownerDocument, c) && r(u(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && ka.cleanData(u(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && ka.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return ka.clone(this, a, b)
            })
        },
        html: function(a) {
            return ka.access(this, function(a) {
                var c = this[0] || {},
                    d = 0,
                    e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Va, "") : b;
                if (!("string" != typeof a || ab.test(a) || !ka.support.htmlSerialize && Wa.test(a) || !ka.support.leadingWhitespace && Xa.test(a) || gb[(Za.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Ya, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (ka.cleanData(u(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = ka.map(this, function(a) {
                    return [a.nextSibling, a.parentNode]
                }),
                b = 0;
            return this.domManip(arguments, function(c) {
                var d = a[b++],
                    e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), ka(this).remove(), e.insertBefore(c, d))
            }, !0), b ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b, c) {
            a = da.apply([], a);
            var d, e, f, g, h, i, j = 0,
                k = this.length,
                l = this,
                m = k - 1,
                n = a[0],
                o = ka.isFunction(n);
            if (o || !(1 >= k || "string" != typeof n || ka.support.checkClone) && cb.test(n)) return this.each(function(d) {
                var e = l.eq(d);
                o && (a[0] = n.call(this, d, e.html())), e.domManip(a, b, c)
            });
            if (k && (i = ka.buildFragment(a, this[0].ownerDocument, !1, !c && this), d = i.firstChild, 1 === i.childNodes.length && (i = d), d)) {
                for (g = ka.map(u(i, "script"), p), f = g.length; k > j; j++) e = i, j !== m && (e = ka.clone(e, !0, !0), f && ka.merge(g, u(e, "script"))), b.call(this[j], e, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, ka.map(g, q), j = 0; f > j; j++) e = g[j], db.test(e.type || "") && !ka._data(e, "globalEval") && ka.contains(h, e) && (e.src ? ka._evalUrl(e.src) : ka.globalEval((e.text || e.textContent || e.innerHTML || "").replace(fb, "")));
                i = d = null
            }
            return this
        }
    }), ka.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        ka.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = ka(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ka(f[d])[b](c), ea.apply(e, c.get());
            return this.pushStack(e)
        }
    }), ka.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = ka.contains(a.ownerDocument, a);
            if (ka.support.html5Clone || ka.isXMLDoc(a) || !Wa.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ib.innerHTML = a.outerHTML, ib.removeChild(f = ib.firstChild)), !(ka.support.noCloneEvent && ka.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ka.isXMLDoc(a)))
                for (d = u(f), h = u(a), g = 0; null != (e = h[g]); ++g) d[g] && t(e, d[g]);
            if (b)
                if (c)
                    for (h = h || u(a), d = d || u(f), g = 0; null != (e = h[g]); g++) s(e, d[g]);
                else s(a, f);
            return d = u(f, "script"), d.length > 0 && r(d, !i && u(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = n(b), o = [], p = 0; l > p; p++)
                if (f = a[p], f || 0 === f)
                    if ("object" === ka.type(f)) ka.merge(o, f.nodeType ? [f] : f);
                    else if (_a.test(f)) {
                for (h = h || m.appendChild(b.createElement("div")), i = (Za.exec(f) || ["", ""])[1].toLowerCase(), k = gb[i] || gb._default, h.innerHTML = k[1] + f.replace(Ya, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                if (!ka.support.leadingWhitespace && Xa.test(f) && o.push(b.createTextNode(Xa.exec(f)[0])), !ka.support.tbody)
                    for (f = "table" !== i || $a.test(f) ? "<table>" !== k[1] || $a.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ka.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (ka.merge(o, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = m.lastChild
            } else o.push(b.createTextNode(f));
            for (h && m.removeChild(h), ka.support.appendChecked || ka.grep(u(o, "input"), v), p = 0; f = o[p++];)
                if ((!d || -1 === ka.inArray(f, d)) && (g = ka.contains(f.ownerDocument, f), h = u(m.appendChild(f), "script"), g && r(h), c))
                    for (e = 0; f = h[e++];) db.test(f.type || "") && c.push(f);
            return h = null, m
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = ka.expando, i = ka.cache, j = ka.support.deleteExpando, k = ka.event.special; null != (c = a[g]); g++)
                if ((b || ka.acceptData(c)) && (e = c[h], f = e && i[e])) {
                    if (f.events)
                        for (d in f.events) k[d] ? ka.event.remove(c, d) : ka.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== W ? c.removeAttribute(h) : c[h] = null, ba.push(e))
                }
        },
        _evalUrl: function(a) {
            return ka.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), ka.fn.extend({
        wrapAll: function(a) {
            if (ka.isFunction(a)) return this.each(function(b) {
                ka(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = ka(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(ka.isFunction(a) ? function(b) {
                ka(this).wrapInner(a.call(this, b))
            } : function() {
                var b = ka(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = ka.isFunction(a);
            return this.each(function(c) {
                ka(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ka.nodeName(this, "body") || ka(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var jb, kb, lb, mb = /alpha\([^)]*\)/i,
        nb = /opacity\s*=\s*([^)]*)/,
        ob = /^(top|right|bottom|left)$/,
        pb = /^(none|table(?!-c[ea]).+)/,
        qb = /^margin/,
        rb = RegExp("^(" + la + ")(.*)$", "i"),
        sb = RegExp("^(" + la + ")(?!px)[a-z%]+$", "i"),
        tb = RegExp("^([+-])=(" + la + ")", "i"),
        ub = {
            BODY: "block"
        },
        vb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        wb = {
            letterSpacing: 0,
            fontWeight: 400
        },
        xb = ["Top", "Right", "Bottom", "Left"],
        yb = ["Webkit", "O", "Moz", "ms"];
    ka.fn.extend({
        css: function(a, c) {
            return ka.access(this, function(a, c, d) {
                var e, f, g = {},
                    h = 0;
                if (ka.isArray(c)) {
                    for (f = kb(a), e = c.length; e > h; h++) g[c[h]] = ka.css(a, c[h], !1, f);
                    return g
                }
                return d !== b ? ka.style(a, c, d) : ka.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function() {
            return y(this, !0)
        },
        hide: function() {
            return y(this)
        },
        toggle: function(a) {
            var b = "boolean" == typeof a;
            return this.each(function() {
                (b ? a : x(this)) ? ka(this).show(): ka(this).hide()
            })
        }
    }), ka.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = lb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ka.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = ka.camelCase(c),
                    j = a.style;
                if (c = ka.cssProps[i] || (ka.cssProps[i] = w(j, i)), h = ka.cssHooks[c] || ka.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = tb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(ka.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || ka.cssNumber[i] || (d += "px"), ka.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d
                } catch (k) {}
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = ka.camelCase(c);
            return c = ka.cssProps[i] || (ka.cssProps[i] = w(a.style, i)), h = ka.cssHooks[c] || ka.cssHooks[i], h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = lb(a, c, e)), "normal" === g && c in wb && (g = wb[c]), "" === d || d ? (f = parseFloat(g), d === !0 || ka.isNumeric(f) ? f || 0 : g) : g
        }
    }), a.getComputedStyle ? (kb = function(b) {
        return a.getComputedStyle(b, null)
    }, lb = function(a, c, d) {
        var e, f, g, h = d || kb(a),
            i = h ? h.getPropertyValue(c) || h[c] : b,
            j = a.style;
        return h && ("" !== i || ka.contains(a.ownerDocument, a) || (i = ka.style(a, c)), sb.test(i) && qb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
    }) : Y.documentElement.currentStyle && (kb = function(a) {
        return a.currentStyle
    }, lb = function(a, c, d) {
        var e, f, g, h = d || kb(a),
            i = h ? h[c] : b,
            j = a.style;
        return null == i && j && j[c] && (i = j[c]), sb.test(i) && !ob.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i
    }), ka.each(["height", "width"], function(a, c) {
        ka.cssHooks[c] = {
            get: function(a, d, e) {
                return d ? 0 === a.offsetWidth && pb.test(ka.css(a, "display")) ? ka.swap(a, vb, function() {
                    return B(a, c, e)
                }) : B(a, c, e) : b
            },
            set: function(a, b, d) {
                var e = d && kb(a);
                return z(a, b, d ? A(a, c, d, ka.support.boxSizing && "border-box" === ka.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), ka.support.opacity || (ka.cssHooks.opacity = {
        get: function(a, b) {
            return nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = ka.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === ka.trim(f.replace(mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = mb.test(f) ? f.replace(mb, e) : f + " " + e)
        }
    }), ka(function() {
        ka.support.reliableMarginRight || (ka.cssHooks.marginRight = {
            get: function(a, c) {
                return c ? ka.swap(a, {
                    display: "inline-block"
                }, lb, [a, "marginRight"]) : b
            }
        }), !ka.support.pixelPosition && ka.fn.position && ka.each(["top", "left"], function(a, c) {
            ka.cssHooks[c] = {
                get: function(a, d) {
                    return d ? (d = lb(a, c), sb.test(d) ? ka(a).position()[c] + "px" : d) : b
                }
            }
        })
    }), ka.expr && ka.expr.filters && (ka.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !ka.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || ka.css(a, "display"))
    }, ka.expr.filters.visible = function(a) {
        return !ka.expr.filters.hidden(a)
    }), ka.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        ka.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + xb[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, qb.test(a) || (ka.cssHooks[a + b].set = z)
    });
    var zb = /%20/g,
        Ab = /\[\]$/,
        Bb = /\r?\n/g,
        Cb = /^(?:submit|button|image|reset|file)$/i,
        Db = /^(?:input|select|textarea|keygen)/i;
    ka.fn.extend({
        serialize: function() {
            return ka.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = ka.prop(this, "elements");
                return a ? ka.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !ka(this).is(":disabled") && Db.test(this.nodeName) && !Cb.test(a) && (this.checked || !bb.test(a))
            }).map(function(a, b) {
                var c = ka(this).val();
                return null == c ? null : ka.isArray(c) ? ka.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Bb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Bb, "\r\n")
                }
            }).get()
        }
    }), ka.param = function(a, c) {
        var d, e = [],
            f = function(a, b) {
                b = ka.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (c === b && (c = ka.ajaxSettings && ka.ajaxSettings.traditional), ka.isArray(a) || a.jquery && !ka.isPlainObject(a)) ka.each(a, function() {
            f(this.name, this.value)
        });
        else
            for (d in a) E(d, a[d], c, f);
        return e.join("&").replace(zb, "+")
    }, ka.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        ka.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), ka.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Eb, Fb, Gb = ka.now(),
        Hb = /\?/,
        Ib = /#.*$/,
        Jb = /([?&])_=[^&]*/,
        Kb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Lb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mb = /^(?:GET|HEAD)$/,
        Nb = /^\/\//,
        Ob = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Pb = ka.fn.load,
        Qb = {},
        Rb = {},
        Sb = "*/".concat("*");
    try {
        Fb = X.href
    } catch (Tb) {
        Fb = Y.createElement("a"), Fb.href = "", Fb = Fb.href
    }
    Eb = Ob.exec(Fb.toLowerCase()) || [], ka.fn.load = function(a, c, d) {
        if ("string" != typeof a && Pb) return Pb.apply(this, arguments);
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), ka.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && ka.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: c
        }).done(function(a) {
            f = arguments, h.html(e ? ka("<div>").append(ka.parseHTML(a)).find(e) : a)
        }).complete(d && function(a, b) {
            h.each(d, f || [a.responseText, b, a])
        }), this
    }, ka.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        ka.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), ka.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Fb,
            type: "GET",
            isLocal: Lb.test(Eb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ka.parseJSON,
                "text xml": ka.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? H(H(a, ka.ajaxSettings), b) : H(ka.ajaxSettings, a)
        },
        ajaxPrefilter: F(Qb),
        ajaxTransport: F(Rb),
        ajax: function(a, c) {
            function d(a, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, f = a >= 200 && 300 > a || 304 === a, d && (t = I(m, w, d)), t = J(m, t, w, f), f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (ka.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (ka.etag[g] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --ka.active || ka.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = ka.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? ka(n) : ka.event,
                p = ka.Deferred(),
                q = ka.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!l)
                                for (l = {}; b = Kb.exec(h);) l[b[1].toLowerCase()] = b[2];
                            b = l[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? h : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return k && k.abort(b), d(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fb) + "").replace(Ib, "").replace(Nb, Eb[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = ka.trim(m.dataType || "*").toLowerCase().match(ma) || [""], null == m.crossDomain && (e = Ob.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Eb[1] && e[2] === Eb[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (Eb[3] || ("http:" === Eb[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = ka.param(m.data, m.traditional)), G(Qb, m, c, w), 2 === u) return w;
            j = m.global, j && 0 === ka.active++ && ka.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Mb.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Hb.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Jb.test(g) ? g.replace(Jb, "$1_=" + Gb++) : g + (Hb.test(g) ? "&" : "?") + "_=" + Gb++)), m.ifModified && (ka.lastModified[g] && w.setRequestHeader("If-Modified-Since", ka.lastModified[g]), ka.etag[g] && w.setRequestHeader("If-None-Match", ka.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[f](m[f]);
            if (k = G(Rb, m, c, w)) {
                w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, k.send(s, d)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x)
                }
            } else d(-1, "No Transport");
            return w
        },
        getJSON: function(a, b, c) {
            return ka.get(a, b, c, "json")
        },
        getScript: function(a, c) {
            return ka.get(a, b, c, "script")
        }
    }), ka.each(["get", "post"], function(a, c) {
        ka[c] = function(a, d, e, f) {
            return ka.isFunction(d) && (f = f || e, e = d, d = b), ka.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            })
        }
    }), ka.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return ka.globalEval(a), a
            }
        }
    }), ka.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), ka.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = Y.head || ka("head")[0] || Y.documentElement;
            return {
                send: function(b, e) {
                    c = Y.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, b) {
                        (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(b, !0)
                }
            }
        }
    });
    var Ub = [],
        Vb = /(=)\?(?=&|$)|\?\?/;
    ka.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Ub.pop() || ka.expando + "_" + Gb++;
            return this[a] = !0, a
        }
    }), ka.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (Vb.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vb.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = ka.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Vb, "$1" + f) : c.jsonp !== !1 && (c.url += (Hb.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || ka.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Ub.push(f)), h && ka.isFunction(g) && g(h[0]), h = g = b
        }), "script") : b
    });
    var Wb, Xb, Yb = 0,
        Zb = a.ActiveXObject && function() {
            var a;
            for (a in Wb) Wb[a](b, !0)
        };
    ka.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && K() || L()
    } : K, Xb = ka.ajaxSettings.xhr(), ka.support.cors = !!Xb && "withCredentials" in Xb, Xb = ka.support.ajax = !!Xb, Xb && ka.ajaxTransport(function(c) {
        if (!c.crossDomain || ka.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                        for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null), d = function(a, e) {
                        var h, j, k, l;
                        try {
                            if (d && (e || 4 === i.readyState))
                                if (d = b, g && (i.onreadystatechange = ka.noop, Zb && delete Wb[g]), e) 4 !== i.readyState && i.abort();
                                else {
                                    l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
                                    try {
                                        k = i.statusText
                                    } catch (m) {
                                        k = ""
                                    }
                                    h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                }
                        } catch (n) {
                            e || f(-1, n)
                        }
                        l && f(h, k, l, j)
                    }, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yb, Zb && (Wb || (Wb = {}, ka(a).unload(Zb)), Wb[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(b, !0)
                }
            }
        }
    });
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = RegExp("^(?:([+-])=|)(" + la + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [Q],
        ec = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (ka.cssNumber[a] ? "" : "px"),
                    g = (ka.cssNumber[a] || "px" !== f && +d) && bc.exec(ka.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, ka.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    ka.Animation = ka.extend(O, {
        tweener: function(a, b) {
            ka.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? dc.unshift(a) : dc.push(a)
        }
    }), ka.Tween = R, R.prototype = {
        constructor: R,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ka.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = R.propHooks[this.prop];
            return a && a.get ? a.get(this) : R.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = R.propHooks[this.prop];
            return this.pos = b = this.options.duration ? ka.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : R.propHooks._default.set(this), this
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ka.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                ka.fx.step[a.prop] ? ka.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ka.cssProps[a.prop]] || ka.cssHooks[a.prop]) ? ka.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, ka.each(["toggle", "show", "hide"], function(a, b) {
        var c = ka.fn[b];
        ka.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(S(b, !0), a, d, e)
        }
    }), ka.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = ka.isEmptyObject(a),
                f = ka.speed(b, c, d),
                g = function() {
                    var b = O(this, ka.extend({}, a), f);
                    (e || ka._data(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    f = ka.timers,
                    g = ka._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g) g[c] && g[c].stop && cc.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && ka.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = ka._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = ka.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, ka.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), ka.each({
        slideDown: S("show"),
        slideUp: S("hide"),
        slideToggle: S("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        ka.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), ka.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? ka.extend({}, a) : {
            complete: c || !c && b || ka.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !ka.isFunction(b) && b
        };
        return d.duration = ka.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ka.fx.speeds ? ka.fx.speeds[d.duration] : ka.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            ka.isFunction(d.old) && d.old.call(this), d.queue && ka.dequeue(this, d.queue)
        }, d
    }, ka.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, ka.timers = [], ka.fx = R.prototype.init, ka.fx.tick = function() {
        var a, c = ka.timers,
            d = 0;
        for ($b = ka.now(); c.length > d; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || ka.fx.stop(), $b = b
    }, ka.fx.timer = function(a) {
        a() && ka.timers.push(a) && ka.fx.start()
    }, ka.fx.interval = 13, ka.fx.start = function() {
        _b || (_b = setInterval(ka.fx.tick, ka.fx.interval))
    }, ka.fx.stop = function() {
        clearInterval(_b), _b = null
    }, ka.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ka.fx.step = {}, ka.expr && ka.expr.filters && (ka.expr.filters.animated = function(a) {
        return ka.grep(ka.timers, function(b) {
            return a === b.elem
        }).length
    }), ka.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            ka.offset.setOffset(this, a, b)
        });
        var c, d, e = {
                top: 0,
                left: 0
            },
            f = this[0],
            g = f && f.ownerDocument;
        return g ? (c = g.documentElement, ka.contains(c, f) ? (typeof f.getBoundingClientRect !== W && (e = f.getBoundingClientRect()), d = T(g), {
            top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        }) : e) : void 0
    }, ka.offset = {
        setOffset: function(a, b, c) {
            var d = ka.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = ka(a),
                h = g.offset(),
                i = ka.css(a, "top"),
                j = ka.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && ka.inArray("auto", [i, j]) > -1,
                l = {},
                m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), ka.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
        }
    }, ka.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === ka.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ka.nodeName(a[0], "html") || (c = a.offset()), c.top += ka.css(a[0], "borderTopWidth", !0), c.left += ka.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - ka.css(d, "marginTop", !0),
                    left: b.left - c.left - ka.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Z; a && !ka.nodeName(a, "html") && "static" === ka.css(a, "position");) a = a.offsetParent;
                return a || Z
            })
        }
    }), ka.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        ka.fn[a] = function(e) {
            return ka.access(this, function(a, e, f) {
                var g = T(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? ka(g).scrollLeft() : f, d ? f : ka(g).scrollTop()) : a[e] = f, b)
            }, a, e, arguments.length, null)
        }
    }), ka.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        ka.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            ka.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return ka.access(this, function(c, d, e) {
                    var f;
                    return ka.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? ka.css(c, d, h) : ka.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), ka.fn.size = function() {
        return this.length
    }, ka.fn.andSelf = ka.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ka : (a.jQuery = a.$ = ka, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ka
    }))
}(window), void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, e, f, g) {
            if (Object.defineProperty) try {
                return Object.defineProperty(b, e, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(g), f
                    },
                    set: function(a) {
                        d(g), f = a
                    }
                }), c
            } catch (h) {}
            a._definePropertyBroken = !0, b[e] = f
        }
        var f = {};
        a.migrateWarnings = [], !a.migrateMute && b.console && b.console.log && b.console.log("JQMIGRATE: Logging is active"), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (4 > h.length && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') may use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var e = (a.nodeName || "").toLowerCase();
                return "button" === e ? j.apply(this, arguments) : ("input" !== e && "option" !== e && d("jQuery.fn.attr('value', val) no longer sets properties"), a.value = b, c)
            }
        };
        var o, p, q = a.fn.init,
            r = a.parseJSON,
            s = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, c, e) {
            var f;
            return b && "string" == typeof b && !a.isPlainObject(c) && (f = s.exec(a.trim(b))) && f[0] && ("<" !== b.charAt(0) && d("$(html) HTML strings must start with '<' character"), f[3] && d("$(html) HTML text after last tag is ignored"), "#" === f[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), c && c.context && (c = c.context), a.parseHTML) ? q.call(this, a.parseHTML(f[2], c, !0), c, e) : q.apply(this, arguments)
        }, a.fn.init.prototype = a.fn, a.parseJSON = function(a) {
            return a || null === a ? r.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                return e && e instanceof a && !(e instanceof b) && (e = b(e)), a.fn.init.call(this, d, e, c)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var t = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? t.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var u = /\/(java|ecma)script/i,
            v = a.fn.andSelf || a.fn.addBack;
        a.fn.andSelf = function() {
            return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), v.apply(this, arguments)
        }, a.clean || (a.clean = function(b, e, f, g) {
            e = e || document, e = !e.nodeType && e[0] || e, e = e.ownerDocument || e, d("jQuery.clean() is deprecated");
            var h, i, j, k, l = [];
            if (a.merge(l, a.buildFragment(b, e).childNodes), f)
                for (j = function(a) {
                        return !a.type || u.test(a.type) ? g ? g.push(a.parentNode ? a.parentNode.removeChild(a) : a) : f.appendChild(a) : c
                    }, h = 0; null != (i = l[h]); h++) a.nodeName(i, "script") && j(i) || (f.appendChild(i), i.getElementsByTagName !== c && (k = a.grep(a.merge([], i.getElementsByTagName("script")), j), l.splice.apply(l, [h + 1, 0].concat(k)), h += k.length));
            return l
        });
        var w = a.event.add,
            x = a.event.remove,
            y = a.event.trigger,
            z = a.fn.toggle,
            A = a.fn.live,
            B = a.fn.die,
            C = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            D = RegExp("\\b(?:" + C + ")\\b"),
            E = /(?:^|\s)hover(\.\S+|)\b/,
            F = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (E.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(E, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && D.test(b) && d("AJAX events should be attached to document: " + b), w.call(this, a, F(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            x.call(this, a, F(b) || "", c, d, e)
        }, a.fn.error = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return d("jQuery.fn.error() is deprecated"), a.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this)
        }, a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return z.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; e.length > g;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), A ? A.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), B ? B.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || D.test(a) || d("Global events are undocumented and deprecated"), y.call(this, a, b, c || document, e)
        }, a.each(C.split("|"), function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, null, b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        })
    }(jQuery, window),
    function(a, b) {
        function c(b, c) {
            var e, f, g, h = b.nodeName.toLowerCase();
            return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], !!g && d(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && d(b)
        }

        function d(b) {
            return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
                return "hidden" === a.css(this, "visibility")
            }).length
        }
        var e = 0,
            f = /^ui-id-\d+$/;
        a.ui = a.ui || {}, a.ui.version || (a.extend(a.ui, {
            version: "1.10.1",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), a.fn.extend({
            _focus: a.fn.focus,
            focus: function(b, c) {
                return "number" == typeof b ? this.each(function() {
                    var d = this;
                    setTimeout(function() {
                        a(d).focus(), c && c.call(d)
                    }, b)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function() {
                var b;
                return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
            },
            zIndex: function(c) {
                if (c !== b) return this.css("zIndex", c);
                if (this.length)
                    for (var d, e, f = a(this[0]); f.length && f[0] !== document;) {
                        if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), !isNaN(e) && 0 !== e)) return e;
                        f = f.parent()
                    }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    f.test(this.id) && a(this).removeAttr("id")
                })
            }
        }), a.extend(a.expr[":"], {
            data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
                return function(c) {
                    return !!a.data(c, b)
                }
            }) : function(b, c, d) {
                return !!a.data(b, d[3])
            },
            focusable: function(b) {
                return c(b, !isNaN(a.attr(b, "tabindex")))
            },
            tabbable: function(b) {
                var d = a.attr(b, "tabindex"),
                    e = isNaN(d);
                return (e || d >= 0) && c(b, !e)
            }
        }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(c, d) {
            function e(b, c, d, e) {
                return a.each(f, function() {
                    c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
                }), c
            }
            var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"],
                g = d.toLowerCase(),
                h = {
                    innerWidth: a.fn.innerWidth,
                    innerHeight: a.fn.innerHeight,
                    outerWidth: a.fn.outerWidth,
                    outerHeight: a.fn.outerHeight
                };
            a.fn["inner" + d] = function(c) {
                return c === b ? h["inner" + d].call(this) : this.each(function() {
                    a(this).css(g, e(this, c) + "px")
                })
            }, a.fn["outer" + d] = function(b, c) {
                return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function() {
                    a(this).css(g, e(this, b, !0, c) + "px")
                })
            }
        }), a.fn.addBack || (a.fn.addBack = function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
            return function(c) {
                return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
            }
        }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.support.selectstart = "onselectstart" in document.createElement("div"), a.fn.extend({
            disableSelection: function() {
                return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), a.extend(a.ui, {
            plugin: {
                add: function(b, c, d) {
                    var e, f = a.ui[b].prototype;
                    for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
                },
                call: function(a, b, c) {
                    var d, e = a.plugins[b];
                    if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)
                        for (d = 0; d < e.length; d++) a.options[e[d][0]] && e[d][1].apply(a.element, c)
                }
            },
            hasScroll: function(b, c) {
                if ("hidden" === a(b).css("overflow")) return !1;
                var d = c && "left" === c ? "scrollLeft" : "scrollTop",
                    e = !1;
                return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
            }
        }))
    }(jQuery),
    function(a, b) {
        var c = 0,
            d = Array.prototype.slice,
            e = a.cleanData;
        a.cleanData = function(b) {
            for (var c, d = 0; null != (c = b[d]); d++) try {
                a(c).triggerHandler("remove")
            } catch (f) {}
            e(b)
        }, a.widget = function(b, c, d) {
            var e, f, g, h, i = {},
                j = b.split(".")[0];
            b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
                return !!a.data(b, e)
            }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
                return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
            }, a.extend(g, f, {
                version: d.version,
                _proto: a.extend({}, d),
                _childConstructors: []
            }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
                return a.isFunction(d) ? void(i[b] = function() {
                    var a = function() {
                            return c.prototype[b].apply(this, arguments)
                        },
                        e = function(a) {
                            return c.prototype[b].apply(this, a)
                        };
                    return function() {
                        var b, c = this._super,
                            f = this._superApply;
                        return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                    }
                }()) : void(i[b] = d)
            }), g.prototype = a.widget.extend(h, {
                widgetEventPrefix: f ? h.widgetEventPrefix : b
            }, i, {
                constructor: g,
                namespace: j,
                widgetName: b,
                widgetFullName: e
            }), f ? (a.each(f._childConstructors, function(b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, g, c._proto)
            }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g)
        }, a.widget.extend = function(c) {
            for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++)
                for (e in g[h]) f = g[h][e], g[h].hasOwnProperty(e) && f !== b && (a.isPlainObject(f) ? c[e] = a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : c[e] = f);
            return c
        }, a.widget.bridge = function(c, e) {
            var f = e.prototype.widgetFullName || c;
            a.fn[c] = function(g) {
                var h = "string" == typeof g,
                    i = d.call(arguments, 1),
                    j = this;
                return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, this.each(h ? function() {
                    var d, e = a.data(this, f);
                    return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : void 0) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'")
                } : function() {
                    var b = a.data(this, f);
                    b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
                }), j
            }
        }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(b, d) {
                d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(a) {
                        a.target === d && this.destroy()
                    }
                }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function() {
                return this.element
            },
            option: function(c, d) {
                var e, f, g, h = c;
                if (0 === arguments.length) return a.widget.extend({}, this.options);
                if ("string" == typeof c)
                    if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                        for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; g < e.length - 1; g++) f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                        if (c = e.pop(), d === b) return f[c] === b ? null : f[c];
                        f[c] = d
                    } else {
                        if (d === b) return this.options[c] === b ? null : this.options[c];
                        h[c] = d
                    }
                return this._setOptions(h), this
            },
            _setOptions: function(a) {
                var b;
                for (b in a) this._setOption(b, a[b]);
                return this
            },
            _setOption: function(a, b) {
                return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _on: function(b, c, d) {
                var e, f = this;
                "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
                    function h() {
                        return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                    }
                    "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                    var i = d.match(/^(\w+)\s*(.*)$/),
                        j = i[1] + f.eventNamespace,
                        k = i[2];
                    k ? e.delegate(k, j, h) : c.bind(j, h)
                })
            },
            _off: function(a, b) {
                b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
            },
            _delay: function(a, b) {
                function c() {
                    return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                }
                var d = this;
                return setTimeout(c, b || 0)
            },
            _hoverable: function(b) {
                this.hoverable = this.hoverable.add(b), this._on(b, {
                    mouseenter: function(b) {
                        a(b.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(b) {
                        a(b.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(b) {
                this.focusable = this.focusable.add(b), this._on(b, {
                    focusin: function(b) {
                        a(b.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(b) {
                        a(b.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(b, c, d) {
                var e, f, g = this.options[b];
                if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent, f)
                    for (e in f) e in c || (c[e] = f[e]);
                return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
            }
        }, a.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(b, c) {
            a.Widget.prototype["_" + b] = function(d, e, f) {
                "string" == typeof e && (e = {
                    effect: e
                });
                var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
                e = e || {}, "number" == typeof e && (e = {
                    duration: e
                }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                    a(this)[b](), f && f.call(d[0]), c()
                })
            }
        })
    }(jQuery),
    function(a, b) {
        var c = !1;
        a(document).mouseup(function() {
            c = !1
        }), a.widget("ui.mouse", {
            version: "1.10.1",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var b = this;
                this.element.bind("mousedown." + this.widgetName, function(a) {
                    return b._mouseDown(a)
                }).bind("click." + this.widgetName, function(c) {
                    return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(b) {
                if (!c) {
                    this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
                    var d = this,
                        e = 1 === b.which,
                        f = "string" == typeof this.options.cancel && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
                    return e && !f && this._mouseCapture(b) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        d.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(b) !== !1, !this._mouseStarted) ? (b.preventDefault(), !0) : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                        return d._mouseMove(a)
                    }, this._mouseUpDelegate = function(a) {
                        return d._mouseUp(a)
                    }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), c = !0, !0)) : !0
                }
            },
            _mouseMove: function(b) {
                return a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button ? this._mouseUp(b) : this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
            },
            _mouseUp: function(b) {
                return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1
            },
            _mouseDistanceMet: function(a) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        })
    }(jQuery),
    function(a, b) {
        function c(a, b, c) {
            return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)]
        }

        function d(b, c) {
            return parseInt(a.css(b, c), 10) || 0
        }

        function e(b) {
            var c = b[0];
            return 9 === c.nodeType ? {
                width: b.width(),
                height: b.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : a.isWindow(c) ? {
                width: b.width(),
                height: b.height(),
                offset: {
                    top: b.scrollTop(),
                    left: b.scrollLeft()
                }
            } : c.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: c.pageY,
                    left: c.pageX
                }
            } : {
                width: b.outerWidth(),
                height: b.outerHeight(),
                offset: b.offset()
            }
        }
        a.ui = a.ui || {};
        var f, g = Math.max,
            h = Math.abs,
            i = Math.round,
            j = /left|center|right/,
            k = /top|center|bottom/,
            l = /[\+\-]\d+(\.[\d]+)?%?/,
            m = /^\w+/,
            n = /%$/,
            o = a.fn.position;
        a.position = {
                scrollbarWidth: function() {
                    if (f !== b) return f;
                    var c, d, e = a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        g = e.children()[0];
                    return a("body").append(e), c = g.offsetWidth, e.css("overflow", "scroll"), d = g.offsetWidth, c === d && (d = e[0].clientWidth), e.remove(), f = c - d
                },
                getScrollInfo: function(b) {
                    var c = b.isWindow ? "" : b.element.css("overflow-x"),
                        d = b.isWindow ? "" : b.element.css("overflow-y"),
                        e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth,
                        f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
                    return {
                        width: e ? a.position.scrollbarWidth() : 0,
                        height: f ? a.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(b) {
                    var c = a(b || window),
                        d = a.isWindow(c[0]);
                    return {
                        element: c,
                        isWindow: d,
                        offset: c.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: c.scrollLeft(),
                        scrollTop: c.scrollTop(),
                        width: d ? c.width() : c.outerWidth(),
                        height: d ? c.height() : c.outerHeight()
                    }
                }
            }, a.fn.position = function(b) {
                if (!b || !b.of) return o.apply(this, arguments);
                b = a.extend({}, b);
                var f, n, p, q, r, s, t = a(b.of),
                    u = a.position.getWithinInfo(b.within),
                    v = a.position.getScrollInfo(u),
                    w = (b.collision || "flip").split(" "),
                    x = {};
                return s = e(t), t[0].preventDefault && (b.at = "left top"), n = s.width, p = s.height, q = s.offset, r = a.extend({}, q), a.each(["my", "at"], function() {
                    var a, c, d = (b[this] || "").split(" ");
                    1 === d.length && (d = j.test(d[0]) ? d.concat(["center"]) : k.test(d[0]) ? ["center"].concat(d) : ["center", "center"]), d[0] = j.test(d[0]) ? d[0] : "center", d[1] = k.test(d[1]) ? d[1] : "center", a = l.exec(d[0]), c = l.exec(d[1]), x[this] = [a ? a[0] : 0, c ? c[0] : 0], b[this] = [m.exec(d[0])[0], m.exec(d[1])[0]]
                }), 1 === w.length && (w[1] = w[0]), "right" === b.at[0] ? r.left += n : "center" === b.at[0] && (r.left += n / 2), "bottom" === b.at[1] ? r.top += p : "center" === b.at[1] && (r.top += p / 2), f = c(x.at, n, p), r.left += f[0], r.top += f[1], this.each(function() {
                    var e, j, k = a(this),
                        l = k.outerWidth(),
                        m = k.outerHeight(),
                        o = d(this, "marginLeft"),
                        s = d(this, "marginTop"),
                        y = l + o + d(this, "marginRight") + v.width,
                        z = m + s + d(this, "marginBottom") + v.height,
                        A = a.extend({}, r),
                        B = c(x.my, k.outerWidth(), k.outerHeight());
                    "right" === b.my[0] ? A.left -= l : "center" === b.my[0] && (A.left -= l / 2), "bottom" === b.my[1] ? A.top -= m : "center" === b.my[1] && (A.top -= m / 2), A.left += B[0], A.top += B[1], a.support.offsetFractions || (A.left = i(A.left), A.top = i(A.top)), e = {
                        marginLeft: o,
                        marginTop: s
                    }, a.each(["left", "top"], function(c, d) {
                        a.ui.position[w[c]] && a.ui.position[w[c]][d](A, {
                            targetWidth: n,
                            targetHeight: p,
                            elemWidth: l,
                            elemHeight: m,
                            collisionPosition: e,
                            collisionWidth: y,
                            collisionHeight: z,
                            offset: [f[0] + B[0], f[1] + B[1]],
                            my: b.my,
                            at: b.at,
                            within: u,
                            elem: k
                        })
                    }), b.using && (j = function(a) {
                        var c = q.left - A.left,
                            d = c + n - l,
                            e = q.top - A.top,
                            f = e + p - m,
                            i = {
                                target: {
                                    element: t,
                                    left: q.left,
                                    top: q.top,
                                    width: n,
                                    height: p
                                },
                                element: {
                                    element: k,
                                    left: A.left,
                                    top: A.top,
                                    width: l,
                                    height: m
                                },
                                horizontal: 0 > d ? "left" : c > 0 ? "right" : "center",
                                vertical: 0 > f ? "top" : e > 0 ? "bottom" : "middle"
                            };
                        l > n && h(c + d) < n && (i.horizontal = "center"), m > p && h(e + f) < p && (i.vertical = "middle"), g(h(c), h(d)) > g(h(e), h(f)) ? i.important = "horizontal" : i.important = "vertical", b.using.call(this, a, i)
                    }), k.offset(a.extend(A, {
                        using: j
                    }))
                })
            }, a.ui.position = {
                fit: {
                    left: function(a, b) {
                        var c, d = b.within,
                            e = d.isWindow ? d.scrollLeft : d.offset.left,
                            f = d.width,
                            h = a.left - b.collisionPosition.marginLeft,
                            i = e - h,
                            j = h + b.collisionWidth - f - e;
                        b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c) : j > 0 && 0 >= i ? a.left = e : i > j ? a.left = e + f - b.collisionWidth : a.left = e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left)
                    },
                    top: function(a, b) {
                        var c, d = b.within,
                            e = d.isWindow ? d.scrollTop : d.offset.top,
                            f = b.within.height,
                            h = a.top - b.collisionPosition.marginTop,
                            i = e - h,
                            j = h + b.collisionHeight - f - e;
                        b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c) : j > 0 && 0 >= i ? a.top = e : i > j ? a.top = e + f - b.collisionHeight : a.top = e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top)
                    }
                },
                flip: {
                    left: function(a, b) {
                        var c, d, e = b.within,
                            f = e.offset.left + e.scrollLeft,
                            g = e.width,
                            i = e.isWindow ? e.scrollLeft : e.offset.left,
                            j = a.left - b.collisionPosition.marginLeft,
                            k = j - i,
                            l = j + b.collisionWidth - g - i,
                            m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                            n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                            o = -2 * b.offset[0];
                        0 > k ? (c = a.left + m + n + o + b.collisionWidth - g - f, (0 > c || c < h(k)) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || h(d) < l) && (a.left += m + n + o))
                    },
                    top: function(a, b) {
                        var c, d, e = b.within,
                            f = e.offset.top + e.scrollTop,
                            g = e.height,
                            i = e.isWindow ? e.scrollTop : e.offset.top,
                            j = a.top - b.collisionPosition.marginTop,
                            k = j - i,
                            l = j + b.collisionHeight - g - i,
                            m = "top" === b.my[1],
                            n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                            o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                            p = -2 * b.offset[1];
                        0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f, a.top + n + o + p > k && (0 > d || d < h(k)) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, a.top + n + o + p > l && (c > 0 || h(c) < l) && (a.top += n + o + p))
                    }
                },
                flipfit: {
                    left: function() {
                        a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var b, c, d, e, f, g = document.getElementsByTagName("body")[0],
                    h = document.createElement("div");
                b = document.createElement(g ? "div" : "body"), d = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, g && a.extend(d, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (f in d) b.style[f] = d[f];
                b.appendChild(h), c = g || document.documentElement, c.insertBefore(b, c.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", e = a(h).offset().left, a.support.offsetFractions = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b)
            }()
    }(jQuery),
    function(a, b) {
        a.widget("ui.draggable", a.ui.mouse, {
            version: "1.10.1",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" === this.options.helper && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
            },
            _destroy: function() {
                this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
            },
            _mouseCapture: function(b) {
                var c = this.options;
                return this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b), this.handle ? (a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function() {
                    a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css(a(this).offset()).appendTo("body")
                }), !0) : !1)
            },
            _mouseStart: function(b) {
                var c = this.options;
                return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, a.extend(this.offset, {
                    click: {
                        left: b.pageX - this.offset.left,
                        top: b.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), c.containment && this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
            },
            _mouseDrag: function(b, c) {
                if (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                    var d = this._uiHash();
                    if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
                    this.position = d.position
                }
                return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
            },
            _mouseStop: function(b) {
                var c, d = this,
                    e = !1,
                    f = !1;
                for (a.ui.ddmanager && !this.options.dropBehaviour && (f = a.ui.ddmanager.drop(this, b)), this.dropped && (f = this.dropped, this.dropped = !1), c = this.element[0]; c && (c = c.parentNode);) c === document && (e = !0);
                return e || "original" !== this.options.helper ? ("invalid" === this.options.revert && !f || "valid" === this.options.revert && f || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, f) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    d._trigger("stop", b) !== !1 && d._clear()
                }) : this._trigger("stop", b) !== !1 && this._clear(), !1) : !1
            },
            _mouseUp: function(b) {
                return a("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(b) {
                var c = this.options.handle && a(this.options.handle, this.element).length ? !1 : !0;
                return a(this.options.handle, this.element).find("*").addBack().each(function() {
                    this === b.target && (c = !0)
                }), c
            },
            _createHelper: function(b) {
                var c = this.options,
                    d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
                return d.parents("body").length || d.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d[0] !== this.element[0] && !/(fixed|absolute)/.test(d.css("position")) && d.css("position", "absolute"), d
            },
            _adjustOffsetFromHelper: function(b) {
                "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                    left: +b[0],
                    top: +b[1] || 0
                }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var b = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                    top: 0,
                    left: 0
                }), {
                    top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var a = this.element.position();
                    return {
                        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var b, c, d, e = this.options;
                if ("parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = ["document" === e.containment ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" === e.containment ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" === e.containment ? 0 : a(window).scrollLeft()) + a("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" === e.containment ? 0 : a(window).scrollTop()) + (a("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || e.containment.constructor === Array) e.containment.constructor === Array && (this.containment = e.containment);
                else {
                    if (c = a(e.containment), d = c[0], !d) return;
                    b = "hidden" !== a(d).css("overflow"), this.containment = [(parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0), (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c
                }
            },
            _convertPositionTo: function(b, c) {
                c || (c = this.position);
                var d = "absolute" === b ? 1 : -1,
                    e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    f = /(html|body)/i.test(e[0].tagName);
                return {
                    top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                    left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
                }
            },
            _generatePosition: function(b) {
                var c, d, e, f, g = this.options,
                    h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    i = /(html|body)/i.test(h[0].tagName),
                    j = b.pageX,
                    k = b.pageY;
                return this.originalPosition && (this.containment && (this.relative_container ? (d = this.relative_container.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, b.pageX - this.offset.click.left < c[0] && (j = c[0] + this.offset.click.left), b.pageY - this.offset.click.top < c[1] && (k = c[1] + this.offset.click.top), b.pageX - this.offset.click.left > c[2] && (j = c[2] + this.offset.click.left), b.pageY - this.offset.click.top > c[3] && (k = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((k - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, k = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((j - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, j = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f)), {
                    top: k - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
                    left: j - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
            },
            _trigger: function(b, c, d) {
                return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), "drag" === b && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, d)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), a.ui.plugin.add("draggable", "connectToSortable", {
            start: function(b, c) {
                var d = a(this).data("ui-draggable"),
                    e = d.options,
                    f = a.extend({}, c, {
                        item: d.element
                    });
                d.sortables = [], a(e.connectToSortable).each(function() {
                    var c = a.data(this, "ui-sortable");
                    c && !c.options.disabled && (d.sortables.push({
                        instance: c,
                        shouldRevert: c.options.revert
                    }), c.refreshPositions(), c._trigger("activate", b, f))
                })
            },
            stop: function(b, c) {
                var d = a(this).data("ui-draggable"),
                    e = a.extend({}, c, {
                        item: d.element
                    });
                a.each(d.sortables, function() {
                    this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, "original" === d.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e))
                })
            },
            drag: function(b, c) {
                var d = a(this).data("ui-draggable"),
                    e = this;
                a.each(d.sortables, function() {
                    var f = !1,
                        g = this;
                    this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (f = !0, a.each(d.sortables, function() {
                        return this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this !== g && this.instance._intersectsWith(this.instance.containerCache) && a.contains(g.instance.element[0], this.instance.element[0]) && (f = !1), f
                    })), f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                        return c.helper[0]
                    }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", b), d.dropped = !1)
                })
            }
        }), a.ui.plugin.add("draggable", "cursor", {
            start: function() {
                var b = a("body"),
                    c = a(this).data("ui-draggable").options;
                b.css("cursor") && (c._cursor = b.css("cursor")), b.css("cursor", c.cursor)
            },
            stop: function() {
                var b = a(this).data("ui-draggable").options;
                b._cursor && a("body").css("cursor", b._cursor)
            }
        }), a.ui.plugin.add("draggable", "opacity", {
            start: function(b, c) {
                var d = a(c.helper),
                    e = a(this).data("ui-draggable").options;
                d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity)
            },
            stop: function(b, c) {
                var d = a(this).data("ui-draggable").options;
                d._opacity && a(c.helper).css("opacity", d._opacity)
            }
        }), a.ui.plugin.add("draggable", "scroll", {
            start: function() {
                var b = a(this).data("ui-draggable");
                b.scrollParent[0] !== document && "HTML" !== b.scrollParent[0].tagName && (b.overflowOffset = b.scrollParent.offset())
            },
            drag: function(b) {
                var c = a(this).data("ui-draggable"),
                    d = c.options,
                    e = !1;
                c.scrollParent[0] !== document && "HTML" !== c.scrollParent[0].tagName ? (d.axis && "x" === d.axis || (c.overflowOffset.top + c.scrollParent[0].offsetHeight - b.pageY < d.scrollSensitivity ? c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop + d.scrollSpeed : b.pageY - c.overflowOffset.top < d.scrollSensitivity && (c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop - d.scrollSpeed)), d.axis && "y" === d.axis || (c.overflowOffset.left + c.scrollParent[0].offsetWidth - b.pageX < d.scrollSensitivity ? c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft + d.scrollSpeed : b.pageX - c.overflowOffset.left < d.scrollSensitivity && (c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft - d.scrollSpeed))) : (d.axis && "x" === d.axis || (b.pageY - a(document).scrollTop() < d.scrollSensitivity ? e = a(document).scrollTop(a(document).scrollTop() - d.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < d.scrollSensitivity && (e = a(document).scrollTop(a(document).scrollTop() + d.scrollSpeed))), d.axis && "y" === d.axis || (b.pageX - a(document).scrollLeft() < d.scrollSensitivity ? e = a(document).scrollLeft(a(document).scrollLeft() - d.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < d.scrollSensitivity && (e = a(document).scrollLeft(a(document).scrollLeft() + d.scrollSpeed)))), e !== !1 && a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(c, b)
            }
        }), a.ui.plugin.add("draggable", "snap", {
            start: function() {
                var b = a(this).data("ui-draggable"),
                    c = b.options;
                b.snapElements = [], a(c.snap.constructor !== String ? c.snap.items || ":data(ui-draggable)" : c.snap).each(function() {
                    var c = a(this),
                        d = c.offset();
                    this !== b.element[0] && b.snapElements.push({
                        item: this,
                        width: c.outerWidth(),
                        height: c.outerHeight(),
                        top: d.top,
                        left: d.left
                    })
                })
            },
            drag: function(b, c) {
                var d, e, f, g, h, i, j, k, l, m, n = a(this).data("ui-draggable"),
                    o = n.options,
                    p = o.snapTolerance,
                    q = c.offset.left,
                    r = q + n.helperProportions.width,
                    s = c.offset.top,
                    t = s + n.helperProportions.height;
                for (l = n.snapElements.length - 1; l >= 0; l--) h = n.snapElements[l].left, i = h + n.snapElements[l].width, j = n.snapElements[l].top, k = j + n.snapElements[l].height, q > h - p && i + p > q && s > j - p && k + p > s || q > h - p && i + p > q && t > j - p && k + p > t || r > h - p && i + p > r && s > j - p && k + p > s || r > h - p && i + p > r && t > j - p && k + p > t ? ("inner" !== o.snapMode && (d = Math.abs(j - t) <= p, e = Math.abs(k - s) <= p, f = Math.abs(h - r) <= p, g = Math.abs(i - q) <= p, d && (c.position.top = n._convertPositionTo("relative", {
                    top: j - n.helperProportions.height,
                    left: 0
                }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                    top: k,
                    left: 0
                }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h - n.helperProportions.width
                }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: i
                }).left - n.margins.left)), m = d || e || f || g, "outer" !== o.snapMode && (d = Math.abs(j - s) <= p, e = Math.abs(k - t) <= p, f = Math.abs(h - q) <= p, g = Math.abs(i - r) <= p, d && (c.position.top = n._convertPositionTo("relative", {
                    top: j,
                    left: 0
                }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                    top: k - n.helperProportions.height,
                    left: 0
                }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: i - n.helperProportions.width
                }).left - n.margins.left)), !n.snapElements[l].snapping && (d || e || f || g || m) && n.options.snap.snap && n.options.snap.snap.call(n.element, b, a.extend(n._uiHash(), {
                    snapItem: n.snapElements[l].item
                })), n.snapElements[l].snapping = d || e || f || g || m) : (n.snapElements[l].snapping && n.options.snap.release && n.options.snap.release.call(n.element, b, a.extend(n._uiHash(), {
                    snapItem: n.snapElements[l].item
                })), n.snapElements[l].snapping = !1)
            }
        }), a.ui.plugin.add("draggable", "stack", {
            start: function() {
                var b, c = this.data("ui-draggable").options,
                    d = a.makeArray(a(c.stack)).sort(function(b, c) {
                        return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
                    });
                d.length && (b = parseInt(a(d[0]).css("zIndex"), 10) || 0, a(d).each(function(c) {
                    a(this).css("zIndex", b + c)
                }), this.css("zIndex", b + d.length))
            }
        }), a.ui.plugin.add("draggable", "zIndex", {
            start: function(b, c) {
                var d = a(c.helper),
                    e = a(this).data("ui-draggable").options;
                d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex)
            },
            stop: function(b, c) {
                var d = a(this).data("ui-draggable").options;
                d._zIndex && a(c.helper).css("zIndex", d._zIndex)
            }
        })
    }(jQuery),
    function(a, b) {
        function c(a, b, c) {
            return a > b && b + c > a
        }
        a.widget("ui.droppable", {
            version: "1.10.1",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var b = this.options,
                    c = b.accept;
                this.isover = !1, this.isout = !0, this.accept = a.isFunction(c) ? c : function(a) {
                    return a.is(c)
                }, this.proportions = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }, a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || [], a.ui.ddmanager.droppables[b.scope].push(this), b.addClasses && this.element.addClass("ui-droppable")
            },
            _destroy: function() {
                for (var b = 0, c = a.ui.ddmanager.droppables[this.options.scope]; b < c.length; b++) c[b] === this && c.splice(b, 1);
                this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function(b, c) {
                "accept" === b && (this.accept = a.isFunction(c) ? c : function(a) {
                    return a.is(c)
                }), a.Widget.prototype._setOption.apply(this, arguments)
            },
            _activate: function(b) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c))
            },
            _deactivate: function(b) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c))
            },
            _over: function(b) {
                var c = a.ui.ddmanager.current;
                c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
            },
            _out: function(b) {
                var c = a.ui.ddmanager.current;
                c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
            },
            _drop: function(b, c) {
                var d = c || a.ui.ddmanager.current,
                    e = !1;
                return d && (d.currentItem || d.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var b = a.data(this, "ui-droppable");
                    return b.options.greedy && !b.options.disabled && b.options.scope === d.options.scope && b.accept.call(b.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(b, {
                        offset: b.element.offset()
                    }), b.options.tolerance) ? (e = !0, !1) : void 0
                }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1) : !1
            },
            ui: function(a) {
                return {
                    draggable: a.currentItem || a.element,
                    helper: a.helper,
                    position: a.position,
                    offset: a.positionAbs
                }
            }
        }), a.ui.intersect = function(a, b, d) {
            if (!b.offset) return !1;
            var e, f, g = (a.positionAbs || a.position.absolute).left,
                h = g + a.helperProportions.width,
                i = (a.positionAbs || a.position.absolute).top,
                j = i + a.helperProportions.height,
                k = b.offset.left,
                l = k + b.proportions.width,
                m = b.offset.top,
                n = m + b.proportions.height;
            switch (d) {
                case "fit":
                    return g >= k && l >= h && i >= m && n >= j;
                case "intersect":
                    return k < g + a.helperProportions.width / 2 && h - a.helperProportions.width / 2 < l && m < i + a.helperProportions.height / 2 && j - a.helperProportions.height / 2 < n;
                case "pointer":
                    return e = (a.positionAbs || a.position.absolute).left + (a.clickOffset || a.offset.click).left, f = (a.positionAbs || a.position.absolute).top + (a.clickOffset || a.offset.click).top, c(f, m, b.proportions.height) && c(e, k, b.proportions.width);
                case "touch":
                    return (i >= m && n >= i || j >= m && n >= j || m > i && j > n) && (g >= k && l >= g || h >= k && l >= h || k > g && h > l);
                default:
                    return !1
            }
        }, a.ui.ddmanager = {
            current: null,
            droppables: {
                "default": []
            },
            prepareOffsets: function(b, c) {
                var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [],
                    g = c ? c.type : null,
                    h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
                a: for (d = 0; d < f.length; d++)
                    if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
                        for (e = 0; e < h.length; e++)
                            if (h[e] === f[d].element[0]) {
                                f[d].proportions.height = 0;
                                continue a
                            }
                        f[d].visible = "none" !== f[d].element.css("display"), f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), f[d].offset = f[d].element.offset(), f[d].proportions = {
                            width: f[d].element[0].offsetWidth,
                            height: f[d].element[0].offsetHeight
                        })
                    }
            },
            drop: function(b, c) {
                var d = !1;
                return a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                    this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)))
                }), d
            },
            dragStart: function(b, c) {
                b.element.parentsUntil("body").bind("scroll.droppable", function() {
                    b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
                })
            },
            drag: function(b, c) {
                b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var d, e, f, g = a.ui.intersect(b, this, this.options.tolerance),
                            h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                        h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                            return a.data(this, "ui-droppable").options.scope === e
                        }), f.length && (d = a.data(f[0], "ui-droppable"), d.greedyChild = "isover" === h)), d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c)))
                    }
                })
            },
            dragStop: function(b, c) {
                b.element.parentsUntil("body").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
            }
        }
    }(jQuery),
    function(a, b) {
        function c(a) {
            return parseInt(a, 10) || 0
        }

        function d(a) {
            return !isNaN(parseInt(a, 10))
        }
        a.widget("ui.resizable", a.ui.mouse, {
            version: "1.10.1",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _create: function() {
                var b, c, d, e, f, g = this,
                    h = this.options;
                if (this.element.addClass("ui-resizable"), a.extend(this, {
                        _aspectRatio: !!h.aspectRatio,
                        aspectRatio: h.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = h.handles || (a(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), b = this.handles.split(","), this.handles = {}, c = 0; c < b.length; c++) d = a.trim(b[c]), f = "ui-resizable-" + d, e = a("<div class='ui-resizable-handle " + f + "'></div>"), e.css({
                        zIndex: h.zIndex
                    }), "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, this.element.append(e);
                this._renderAxis = function(b) {
                    var c, d, e, f;
                    b = b || this.element;
                    for (c in this.handles) this.handles[c].constructor === String && (this.handles[c] = a(this.handles[c], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (d = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(e, f), this._proportionallyResize()), a(this.handles[c]).length
                }, this._renderAxis(this.element), this._handles = a(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                    g.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), g.axis = e && e[1] ? e[1] : "se")
                }), h.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    h.disabled || (a(this).removeClass("ui-resizable-autohide"), g._handles.show())
                }).mouseleave(function() {
                    h.disabled || g.resizing || (a(this).addClass("ui-resizable-autohide"), g._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var b, c = function(b) {
                    a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
                    position: b.css("position"),
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: b.css("top"),
                    left: b.css("left")
                }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this
            },
            _mouseCapture: function(b) {
                var c, d, e = !1;
                for (c in this.handles) d = a(this.handles[c])[0], (d === b.target || a.contains(d, b.target)) && (e = !0);
                return !this.options.disabled && e
            },
            _mouseStart: function(b) {
                var d, e, f, g = this.options,
                    h = this.element.position(),
                    i = this.element;
                return this.resizing = !0, /absolute/.test(i.css("position")) ? i.css({
                    position: "absolute",
                    top: i.css("top"),
                    left: i.css("left")
                }) : i.is(".ui-draggable") && i.css({
                    position: "absolute",
                    top: h.top,
                    left: h.left
                }), this._renderProxy(), d = c(this.helper.css("left")), e = c(this.helper.css("top")), g.containment && (d += a(g.containment).scrollLeft() || 0, e += a(g.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: d,
                    top: e
                }, this.size = this._helper ? {
                    width: i.outerWidth(),
                    height: i.outerHeight()
                } : {
                    width: i.width(),
                    height: i.height()
                }, this.originalSize = this._helper ? {
                    width: i.outerWidth(),
                    height: i.outerHeight()
                } : {
                    width: i.width(),
                    height: i.height()
                }, this.originalPosition = {
                    left: d,
                    top: e
                }, this.sizeDiff = {
                    width: i.outerWidth() - i.width(),
                    height: i.outerHeight() - i.height()
                }, this.originalMousePosition = {
                    left: b.pageX,
                    top: b.pageY
                }, this.aspectRatio = "number" == typeof g.aspectRatio ? g.aspectRatio : this.originalSize.width / this.originalSize.height || 1, f = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === f ? this.axis + "-resize" : f), i.addClass("ui-resizable-resizing"), this._propagate("start", b), !0
            },
            _mouseDrag: function(b) {
                var c, d = this.helper,
                    e = {},
                    f = this.originalMousePosition,
                    g = this.axis,
                    h = this.position.top,
                    i = this.position.left,
                    j = this.size.width,
                    k = this.size.height,
                    l = b.pageX - f.left || 0,
                    m = b.pageY - f.top || 0,
                    n = this._change[g];
                return n ? (c = n.apply(this, [b, l, m]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), this.position.top !== h && (e.top = this.position.top + "px"), this.position.left !== i && (e.left = this.position.left + "px"), this.size.width !== j && (e.width = this.size.width + "px"), this.size.height !== k && (e.height = this.size.height + "px"), d.css(e), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(e) || this._trigger("resize", b, this.ui()), !1) : !1
            },
            _mouseStop: function(b) {
                this.resizing = !1;
                var c, d, e, f, g, h, i, j = this.options,
                    k = this;
                return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && a.ui.hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, g = {
                    width: k.helper.width() - f,
                    height: k.helper.height() - e
                }, h = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null, i = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null, j.animate || this.element.css(a.extend(g, {
                    top: i,
                    left: h
                })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
            },
            _updateVirtualBoundaries: function(a) {
                var b, c, e, f, g, h = this.options;
                g = {
                    minWidth: d(h.minWidth) ? h.minWidth : 0,
                    maxWidth: d(h.maxWidth) ? h.maxWidth : 1 / 0,
                    minHeight: d(h.minHeight) ? h.minHeight : 0,
                    maxHeight: d(h.maxHeight) ? h.maxHeight : 1 / 0
                }, (this._aspectRatio || a) && (b = g.minHeight * this.aspectRatio, e = g.minWidth / this.aspectRatio, c = g.maxHeight * this.aspectRatio, f = g.maxWidth / this.aspectRatio, b > g.minWidth && (g.minWidth = b), e > g.minHeight && (g.minHeight = e), c < g.maxWidth && (g.maxWidth = c), f < g.maxHeight && (g.maxHeight = f)), this._vBoundaries = g
            },
            _updateCache: function(a) {
                this.offset = this.helper.offset(), d(a.left) && (this.position.left = a.left), d(a.top) && (this.position.top = a.top), d(a.height) && (this.size.height = a.height), d(a.width) && (this.size.width = a.width)
            },
            _updateRatio: function(a) {
                var b = this.position,
                    c = this.size,
                    e = this.axis;
                return d(a.height) ? a.width = a.height * this.aspectRatio : d(a.width) && (a.height = a.width / this.aspectRatio), "sw" === e && (a.left = b.left + (c.width - a.width), a.top = null), "nw" === e && (a.top = b.top + (c.height - a.height), a.left = b.left + (c.width - a.width)), a
            },
            _respectSize: function(a) {
                var b = this._vBoundaries,
                    c = this.axis,
                    e = d(a.width) && b.maxWidth && b.maxWidth < a.width,
                    f = d(a.height) && b.maxHeight && b.maxHeight < a.height,
                    g = d(a.width) && b.minWidth && b.minWidth > a.width,
                    h = d(a.height) && b.minHeight && b.minHeight > a.height,
                    i = this.originalPosition.left + this.originalSize.width,
                    j = this.position.top + this.size.height,
                    k = /sw|nw|w/.test(c),
                    l = /nw|ne|n/.test(c);
                return g && (a.width = b.minWidth), h && (a.height = b.minHeight), e && (a.width = b.maxWidth), f && (a.height = b.maxHeight), g && k && (a.left = i - b.minWidth), e && k && (a.left = i - b.maxWidth), h && l && (a.top = j - b.minHeight), f && l && (a.top = j - b.maxHeight), a.width || a.height || a.left || !a.top ? !a.width && !a.height && !a.top && a.left && (a.left = null) : a.top = null, a
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length) {
                    var a, b, c, d, e, f = this.helper || this.element;
                    for (a = 0; a < this._proportionallyResizeElements.length; a++) {
                        if (e = this._proportionallyResizeElements[a], !this.borderDif)
                            for (this.borderDif = [], c = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], d = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")], b = 0; b < c.length; b++) this.borderDif[b] = (parseInt(c[b], 10) || 0) + (parseInt(d[b], 10) || 0);
                        e.css({
                            height: f.height() - this.borderDif[0] - this.borderDif[2] || 0,
                            width: f.width() - this.borderDif[1] - this.borderDif[3] || 0
                        })
                    }
                }
            },
            _renderProxy: function() {
                var b = this.element,
                    c = this.options;
                this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++c.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(a, b) {
                    return {
                        width: this.originalSize.width + b
                    }
                },
                w: function(a, b) {
                    var c = this.originalSize,
                        d = this.originalPosition;
                    return {
                        left: d.left + b,
                        width: c.width - b
                    }
                },
                n: function(a, b, c) {
                    var d = this.originalSize,
                        e = this.originalPosition;
                    return {
                        top: e.top + c,
                        height: d.height - c
                    }
                },
                s: function(a, b, c) {
                    return {
                        height: this.originalSize.height + c
                    }
                },
                se: function(b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                },
                sw: function(b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                },
                ne: function(b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                },
                nw: function(b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                }
            },
            _propagate: function(b, c) {
                a.ui.plugin.call(this, b, [c, this.ui()]), "resize" !== b && this._trigger(b, c, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), a.ui.plugin.add("resizable", "animate", {
            stop: function(b) {
                var c = a(this).data("ui-resizable"),
                    d = c.options,
                    e = c._proportionallyResizeElements,
                    f = e.length && /textarea/i.test(e[0].nodeName),
                    g = f && a.ui.hasScroll(e[0], "left") ? 0 : c.sizeDiff.height,
                    h = f ? 0 : c.sizeDiff.width,
                    i = {
                        width: c.size.width - h,
                        height: c.size.height - g
                    },
                    j = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null,
                    k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
                c.element.animate(a.extend(i, k && j ? {
                    top: k,
                    left: j
                } : {}), {
                    duration: d.animateDuration,
                    easing: d.animateEasing,
                    step: function() {
                        var d = {
                            width: parseInt(c.element.css("width"), 10),
                            height: parseInt(c.element.css("height"), 10),
                            top: parseInt(c.element.css("top"), 10),
                            left: parseInt(c.element.css("left"), 10)
                        };
                        e && e.length && a(e[0]).css({
                            width: d.width,
                            height: d.height
                        }), c._updateCache(d), c._propagate("resize", b)
                    }
                })
            }
        }), a.ui.plugin.add("resizable", "containment", {
            start: function() {
                var b, d, e, f, g, h, i, j = a(this).data("ui-resizable"),
                    k = j.options,
                    l = j.element,
                    m = k.containment,
                    n = m instanceof a ? m.get(0) : /parent/.test(m) ? l.parent().get(0) : m;
                n && (j.containerElement = a(n), /document/.test(m) || m === document ? (j.containerOffset = {
                    left: 0,
                    top: 0
                }, j.containerPosition = {
                    left: 0,
                    top: 0
                }, j.parentData = {
                    element: a(document),
                    left: 0,
                    top: 0,
                    width: a(document).width(),
                    height: a(document).height() || document.body.parentNode.scrollHeight
                }) : (b = a(n), d = [], a(["Top", "Right", "Left", "Bottom"]).each(function(a, e) {
                    d[a] = c(b.css("padding" + e))
                }), j.containerOffset = b.offset(), j.containerPosition = b.position(), j.containerSize = {
                    height: b.innerHeight() - d[3],
                    width: b.innerWidth() - d[1]
                }, e = j.containerOffset, f = j.containerSize.height, g = j.containerSize.width, h = a.ui.hasScroll(n, "left") ? n.scrollWidth : g, i = a.ui.hasScroll(n) ? n.scrollHeight : f, j.parentData = {
                    element: n,
                    left: e.left,
                    top: e.top,
                    width: h,
                    height: i
                }))
            },
            resize: function(b) {
                var c, d, e, f, g = a(this).data("ui-resizable"),
                    h = g.options,
                    i = g.containerOffset,
                    j = g.position,
                    k = g._aspectRatio || b.shiftKey,
                    l = {
                        top: 0,
                        left: 0
                    },
                    m = g.containerElement;
                m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), k && (g.size.height = g.size.width / g.aspectRatio), g.position.left = h.helper ? i.left : 0), j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), k && (g.size.width = g.size.height * g.aspectRatio), g.position.top = g._helper ? i.top : 0), g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top, c = Math.abs((g._helper ? g.offset.left - l.left : g.offset.left - l.left) + g.sizeDiff.width), d = Math.abs((g._helper ? g.offset.top - l.top : g.offset.top - i.top) + g.sizeDiff.height), e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), e && f && (c -= g.parentData.left), c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, k && (g.size.height = g.size.width / g.aspectRatio)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, k && (g.size.width = g.size.height * g.aspectRatio))
            },
            stop: function() {
                var b = a(this).data("ui-resizable"),
                    c = b.options,
                    d = b.containerOffset,
                    e = b.containerPosition,
                    f = b.containerElement,
                    g = a(b.helper),
                    h = g.offset(),
                    i = g.outerWidth() - b.sizeDiff.width,
                    j = g.outerHeight() - b.sizeDiff.height;
                b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
                    left: h.left - e.left - d.left,
                    width: i,
                    height: j
                }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
                    left: h.left - e.left - d.left,
                    width: i,
                    height: j
                })
            }
        }), a.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var b = a(this).data("ui-resizable"),
                    c = b.options,
                    d = function(b) {
                        a(b).each(function() {
                            var b = a(this);
                            b.data("ui-resizable-alsoresize", {
                                width: parseInt(b.width(), 10),
                                height: parseInt(b.height(), 10),
                                left: parseInt(b.css("left"), 10),
                                top: parseInt(b.css("top"), 10)
                            })
                        })
                    };
                "object" != typeof c.alsoResize || c.alsoResize.parentNode ? d(c.alsoResize) : c.alsoResize.length ? (c.alsoResize = c.alsoResize[0], d(c.alsoResize)) : a.each(c.alsoResize, function(a) {
                    d(a)
                })
            },
            resize: function(b, c) {
                var d = a(this).data("ui-resizable"),
                    e = d.options,
                    f = d.originalSize,
                    g = d.originalPosition,
                    h = {
                        height: d.size.height - f.height || 0,
                        width: d.size.width - f.width || 0,
                        top: d.position.top - g.top || 0,
                        left: d.position.left - g.left || 0
                    },
                    i = function(b, d) {
                        a(b).each(function() {
                            var b = a(this),
                                e = a(this).data("ui-resizable-alsoresize"),
                                f = {},
                                g = d && d.length ? d : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            a.each(g, function(a, b) {
                                var c = (e[b] || 0) + (h[b] || 0);
                                c && c >= 0 && (f[b] = c || null)
                            }), b.css(f)
                        })
                    };
                "object" != typeof e.alsoResize || e.alsoResize.nodeType ? i(e.alsoResize) : a.each(e.alsoResize, function(a, b) {
                    i(a, b)
                })
            },
            stop: function() {
                a(this).removeData("resizable-alsoresize")
            }
        }), a.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var b = a(this).data("ui-resizable"),
                    c = b.options,
                    d = b.size;
                b.ghost = b.originalElement.clone(), b.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: d.height,
                    width: d.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : ""), b.ghost.appendTo(b.helper)
            },
            resize: function() {
                var b = a(this).data("ui-resizable");
                b.ghost && b.ghost.css({
                    position: "relative",
                    height: b.size.height,
                    width: b.size.width
                })
            },
            stop: function() {
                var b = a(this).data("ui-resizable");
                b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
            }
        }), a.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var b = a(this).data("ui-resizable"),
                    c = b.options,
                    d = b.size,
                    e = b.originalSize,
                    f = b.originalPosition,
                    g = b.axis,
                    h = "number" == typeof c.grid ? [c.grid, c.grid] : c.grid,
                    i = h[0] || 1,
                    j = h[1] || 1,
                    k = Math.round((d.width - e.width) / i) * i,
                    l = Math.round((d.height - e.height) / j) * j,
                    m = e.width + k,
                    n = e.height + l,
                    o = c.maxWidth && c.maxWidth < m,
                    p = c.maxHeight && c.maxHeight < n,
                    q = c.minWidth && c.minWidth > m,
                    r = c.minHeight && c.minHeight > n;
                c.grid = h, q && (m += i), r && (n += j), o && (m -= i), p && (n -= j), /^(se|s|e)$/.test(g) ? (b.size.width = m, b.size.height = n) : /^(ne)$/.test(g) ? (b.size.width = m, b.size.height = n, b.position.top = f.top - l) : /^(sw)$/.test(g) ? (b.size.width = m, b.size.height = n, b.position.left = f.left - k) : (b.size.width = m, b.size.height = n, b.position.top = f.top - l, b.position.left = f.left - k)
            }
        })
    }(jQuery),
    function(a, b) {
        a.widget("ui.selectable", a.ui.mouse, {
            version: "1.10.1",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var b, c = this;
                this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    b = a(c.options.filter, c.element[0]), b.addClass("ui-selectee"), b.each(function() {
                        var b = a(this),
                            c = b.offset();
                        a.data(this, "selectable-item", {
                            element: this,
                            $element: b,
                            left: c.left,
                            top: c.top,
                            right: c.left + b.outerWidth(),
                            bottom: c.top + b.outerHeight(),
                            startselected: !1,
                            selected: b.hasClass("ui-selected"),
                            selecting: b.hasClass("ui-selecting"),
                            unselecting: b.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this.selectees = b.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function() {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
            },
            _mouseStart: function(b) {
                var c = this,
                    d = this.options;
                this.opos = [b.pageX, b.pageY], this.options.disabled || (this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({
                    left: b.pageX,
                    top: b.pageY,
                    width: 0,
                    height: 0
                }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var d = a.data(this, "selectable-item");
                    d.startselected = !0, !b.metaKey && !b.ctrlKey && (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {
                        unselecting: d.element
                    }))
                }), a(b.target).parents().addBack().each(function() {
                    var d, e = a.data(this, "selectable-item");
                    return e ? (d = !b.metaKey && !b.ctrlKey || !e.$element.hasClass("ui-selected"), e.$element.removeClass(d ? "ui-unselecting" : "ui-selected").addClass(d ? "ui-selecting" : "ui-unselecting"), e.unselecting = !d, e.selecting = d, e.selected = d, d ? c._trigger("selecting", b, {
                        selecting: e.element
                    }) : c._trigger("unselecting", b, {
                        unselecting: e.element
                    }), !1) : void 0
                }))
            },
            _mouseDrag: function(b) {
                if (this.dragged = !0, !this.options.disabled) {
                    var c, d = this,
                        e = this.options,
                        f = this.opos[0],
                        g = this.opos[1],
                        h = b.pageX,
                        i = b.pageY;
                    return f > h && (c = h, h = f, f = c), g > i && (c = i, i = g, g = c), this.helper.css({
                        left: f,
                        top: g,
                        width: h - f,
                        height: i - g
                    }), this.selectees.each(function() {
                        var c = a.data(this, "selectable-item"),
                            j = !1;
                        c && c.element !== d.element[0] && ("touch" === e.tolerance ? j = !(c.left > h || c.right < f || c.top > i || c.bottom < g) : "fit" === e.tolerance && (j = c.left > f && c.right < h && c.top > g && c.bottom < i), j ? (c.selected && (c.$element.removeClass("ui-selected"), c.selected = !1), c.unselecting && (c.$element.removeClass("ui-unselecting"), c.unselecting = !1), c.selecting || (c.$element.addClass("ui-selecting"), c.selecting = !0, d._trigger("selecting", b, {
                            selecting: c.element
                        }))) : (c.selecting && ((b.metaKey || b.ctrlKey) && c.startselected ? (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.$element.addClass("ui-selected"), c.selected = !0) : (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.startselected && (c.$element.addClass("ui-unselecting"), c.unselecting = !0), d._trigger("unselecting", b, {
                            unselecting: c.element
                        }))), c.selected && !b.metaKey && !b.ctrlKey && !c.startselected && (c.$element.removeClass("ui-selected"), c.selected = !1, c.$element.addClass("ui-unselecting"), c.unselecting = !0, d._trigger("unselecting", b, {
                            unselecting: c.element
                        }))))
                    }), !1
                }
            },
            _mouseStop: function(b) {
                var c = this;
                return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function() {
                    var d = a.data(this, "selectable-item");
                    d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {
                        unselected: d.element
                    })
                }), a(".ui-selecting", this.element[0]).each(function() {
                    var d = a.data(this, "selectable-item");
                    d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {
                        selected: d.element
                    })
                }), this._trigger("stop", b), this.helper.remove(), !1
            }
        })
    }(jQuery),
    function(a, b) {
        function c(a, b, c) {
            return a > b && b + c > a
        }
        a.widget("ui.sortable", a.ui.mouse, {
            version: "1.10.1",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _create: function() {
                var a = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === a.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
                for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData(this.widgetName + "-item");
                return this
            },
            _setOption: function(b, c) {
                "disabled" === b ? (this.options[b] = c, this.widget().toggleClass("ui-sortable-disabled", !!c)) : a.Widget.prototype._setOption.apply(this, arguments)
            },
            _mouseCapture: function(b, c) {
                var d = null,
                    e = !1,
                    f = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(b), a(b.target).parents().each(function() {
                    return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0
                }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), d && (!this.options.handle || c || (a(this.options.handle, d).find("*").addBack().each(function() {
                    this === b.target && (e = !0)
                }), e)) ? (this.currentItem = d, this._removeCurrentsFromItems(), !0) : !1)
            },
            _mouseStart: function(b, c, d) {
                var e, f = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, a.extend(this.offset, {
                        click: {
                            left: b.pageX - this.offset.left,
                            top: b.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, f.cursorAt && this._adjustOffsetFromHelper(f.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), f.containment && this._setContainment(), f.cursor && (a("body").css("cursor") && (this._storedCursor = a("body").css("cursor")), a("body").css("cursor", f.cursor)), f.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", f.opacity)), f.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", f.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)
                    for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", b, this._uiHash(this));
                return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !f.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
            },
            _mouseDrag: function(b) {
                var c, d, e, f, g = this.options,
                    h = !1;
                for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - a(document).scrollTop() < g.scrollSensitivity ? h = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < g.scrollSensitivity && (h = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed)), b.pageX - a(document).scrollLeft() < g.scrollSensitivity ? h = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < g.scrollSensitivity && (h = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed))), h !== !1 && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), c = this.items.length - 1; c >= 0; c--)
                    if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), f && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" === this.options.type ? !a.contains(this.element[0], e) : !0)) {
                        if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
                        this._rearrange(b, d), this._trigger("change", b, this._uiHash());
                        break
                    }
                return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(b, c) {
                if (b) {
                    if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
                        var d = this,
                            e = this.placeholder.offset();
                        this.reverting = !0, a(this.helper).animate({
                            left: e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft),
                            top: e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
                        }, parseInt(this.options.revert, 10) || 500, function() {
                            d._clear(b)
                        })
                    } else this._clear(b, c);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var b = this.containers.length - 1; b >= 0; b--) this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(b) {
                var c = this._getItemsAsjQuery(b && b.connected),
                    d = [];
                return b = b || {}, a(c).each(function() {
                    var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
                    c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
                }), !d.length && b.key && d.push(b.key + "="), d.join("&")
            },
            toArray: function(b) {
                var c = this._getItemsAsjQuery(b && b.connected),
                    d = [];
                return b = b || {}, c.each(function() {
                    d.push(a(b.item || this).attr(b.attribute || "id") || "")
                }), d
            },
            _intersectsWith: function(a) {
                var b = this.positionAbs.left,
                    c = b + this.helperProportions.width,
                    d = this.positionAbs.top,
                    e = d + this.helperProportions.height,
                    f = a.left,
                    g = f + a.width,
                    h = a.top,
                    i = h + a.height,
                    j = this.offset.click.top,
                    k = this.offset.click.left,
                    l = d + j > h && i > d + j && b + k > f && g > b + k;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? l : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i
            },
            _intersectsWithPointer: function(a) {
                var b = "x" === this.options.axis || c(this.positionAbs.top + this.offset.click.top, a.top, a.height),
                    d = "y" === this.options.axis || c(this.positionAbs.left + this.offset.click.left, a.left, a.width),
                    e = b && d,
                    f = this._getDragVerticalDirection(),
                    g = this._getDragHorizontalDirection();
                return e ? this.floating ? g && "right" === g || "down" === f ? 2 : 1 : f && ("down" === f ? 2 : 1) : !1
            },
            _intersectsWithSides: function(a) {
                var b = c(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height),
                    d = c(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width),
                    e = this._getDragVerticalDirection(),
                    f = this._getDragHorizontalDirection();
                return this.floating && f ? "right" === f && d || "left" === f && !d : e && ("down" === e && b || "up" === e && !b)
            },
            _getDragVerticalDirection: function() {
                var a = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== a && (a > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var a = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== a && (a > 0 ? "right" : "left")
            },
            refresh: function(a) {
                return this._refreshItems(a), this.refreshPositions(), this
            },
            _connectWith: function() {
                var a = this.options;
                return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
            },
            _getItemsAsjQuery: function(b) {
                var c, d, e, f, g = [],
                    h = [],
                    i = this._connectWith();
                if (i && b)
                    for (c = i.length - 1; c >= 0; c--)
                        for (e = a(i[c]), d = e.length - 1; d >= 0; d--) f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && h.push([a.isFunction(f.options.items) ? f.options.items.call(f.element) : a(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f]);
                for (h.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), c = h.length - 1; c >= 0; c--) h[c][0].each(function() {
                    g.push(this)
                });
                return a(g)
            },
            _removeCurrentsFromItems: function() {
                var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = a.grep(this.items, function(a) {
                    for (var c = 0; c < b.length; c++)
                        if (b[c] === a.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(b) {
                this.items = [], this.containers = [this];
                var c, d, e, f, g, h, i, j, k = this.items,
                    l = [
                        [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                            item: this.currentItem
                        }) : a(this.options.items, this.element), this]
                    ],
                    m = this._connectWith();
                if (m && this.ready)
                    for (c = m.length - 1; c >= 0; c--)
                        for (e = a(m[c]), d = e.length - 1; d >= 0; d--) f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {
                            item: this.currentItem
                        }) : a(f.options.items, f.element), f]), this.containers.push(f));
                for (c = l.length - 1; c >= 0; c--)
                    for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++) i = a(h[d]), i.data(this.widgetName + "-item", g), k.push({
                        item: i,
                        instance: g,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(b) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var c, d, e, f;
                for (c = this.items.length - 1; c >= 0; c--) d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (c = this.containers.length - 1; c >= 0; c--) f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
                return this
            },
            _createPlaceholder: function(b) {
                b = b || this;
                var c, d = b.options;
                d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
                    element: function() {
                        var d = a(document.createElement(b.currentItem[0].nodeName)).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return c || (d.style.visibility = "hidden"), d
                    },
                    update: function(a, e) {
                        (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), d.placeholder.update(b, b.placeholder)
            },
            _contactContainers: function(b) {
                var c, d, e, f, g, h, i, j, k, l = null,
                    m = null;
                for (c = this.containers.length - 1; c >= 0; c--)
                    if (!a.contains(this.currentItem[0], this.containers[c].element[0]))
                        if (this._intersectsWith(this.containers[c].containerCache)) {
                            if (l && a.contains(this.containers[c].element[0], l.element[0])) continue;
                            l = this.containers[c], m = c
                        } else this.containers[c].containerCache.over && (this.containers[c]._trigger("out", b, this._uiHash(this)), this.containers[c].containerCache.over = 0);
                if (l)
                    if (1 === this.containers.length) this.containers[m]._trigger("over", b, this._uiHash(this)), this.containers[m].containerCache.over = 1;
                    else {
                        for (e = 1e4, f = null, g = this.containers[m].floating ? "left" : "top", h = this.containers[m].floating ? "width" : "height", i = this.positionAbs[g] + this.offset.click[g], d = this.items.length - 1; d >= 0; d--) a.contains(this.containers[m].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (j = this.items[d].item.offset()[g], k = !1, Math.abs(j - i) > Math.abs(j + this.items[d][h] - i) && (k = !0, j += this.items[d][h]), Math.abs(j - i) < e && (e = Math.abs(j - i), f = this.items[d], this.direction = k ? "up" : "down"));
                        if (!f && !this.options.dropOnEmpty) return;
                        this.currentContainer = this.containers[m], f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[m].element, !0), this._trigger("change", b, this._uiHash()), this.containers[m]._trigger("change", b, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", b, this._uiHash(this)), this.containers[m].containerCache.over = 1
                    }
            },
            _createHelper: function(b) {
                var c = this.options,
                    d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
                return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), (!d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), d
            },
            _adjustOffsetFromHelper: function(b) {
                "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                    left: +b[0],
                    top: +b[1] || 0
                }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var b = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                    top: 0,
                    left: 0
                }), {
                    top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var a = this.currentItem.position();
                    return {
                        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var b, c, d, e = this.options;
                "parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(b, c) {
                c || (c = this.position);
                var d = "absolute" === b ? 1 : -1,
                    e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    f = /(html|body)/i.test(e[0].tagName);
                return {
                    top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                    left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
                }
            },
            _generatePosition: function(b) {
                var c, d, e = this.options,
                    f = b.pageX,
                    g = b.pageY,
                    h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    i = /(html|body)/i.test(h[0].tagName);
                return "relative" === this.cssPosition && (this.scrollParent[0] === document || this.scrollParent[0] === this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {
                    top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
                    left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
                }
            },
            _rearrange: function(a, b, c, d) {
                c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var e = this.counter;
                this._delay(function() {
                    e === this.counter && this.refreshPositions(!d)
                })
            },
            _clear: function(b, c) {
                this.reverting = !1;
                var d, e = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (d in this._storedCSS)("auto" === this._storedCSS[d] || "static" === this._storedCSS[d]) && (this._storedCSS[d] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !c && e.push(function(a) {
                        this._trigger("receive", a, this._uiHash(this.fromOutside))
                    }), (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !c && e.push(function(a) {
                        this._trigger("update", a, this._uiHash())
                    }), this !== this.currentContainer && (c || (e.push(function(a) {
                        this._trigger("remove", a, this._uiHash())
                    }), e.push(function(a) {
                        return function(b) {
                            a._trigger("receive", b, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), e.push(function(a) {
                        return function(b) {
                            a._trigger("update", b, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), d = this.containers.length - 1; d >= 0; d--) c || e.push(function(a) {
                    return function(b) {
                        a._trigger("deactivate", b, this._uiHash(this))
                    }
                }.call(this, this.containers[d])), this.containers[d].containerCache.over && (e.push(function(a) {
                    return function(b) {
                        a._trigger("out", b, this._uiHash(this))
                    }
                }.call(this, this.containers[d])), this.containers[d].containerCache.over = 0);
                if (this._storedCursor && a("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                    if (!c) {
                        for (this._trigger("beforeStop", b, this._uiHash()), d = 0; d < e.length; d++) e[d].call(this, b);
                        this._trigger("stop", b, this._uiHash())
                    }
                    return this.fromOutside = !1, !1
                }
                if (c || this._trigger("beforeStop", b, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !c) {
                    for (d = 0; d < e.length; d++) e[d].call(this, b);
                    this._trigger("stop", b, this._uiHash())
                }
                return this.fromOutside = !1, !0
            },
            _trigger: function() {
                a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function(b) {
                var c = b || this;
                return {
                    helper: c.helper,
                    placeholder: c.placeholder || a([]),
                    position: c.position,
                    originalPosition: c.originalPosition,
                    offset: c.positionAbs,
                    item: c.currentItem,
                    sender: b ? b.element : null
                }
            }
        })
    }(jQuery),
    function(a, b) {
        var c = 0,
            d = {},
            e = {};
        d.height = d.paddingTop = d.paddingBottom = d.borderTopWidth = d.borderBottomWidth = "hide", e.height = e.paddingTop = e.paddingBottom = e.borderTopWidth = e.borderBottomWidth = "show", a.widget("ui.accordion", {
            version: "1.10.1",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            _create: function() {
                var b = this.options;
                this.prevShow = this.prevHide = a(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), !b.collapsible && (b.active === !1 || null == b.active) && (b.active = 0), this._processPanels(), b.active < 0 && (b.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : a(),
                    content: this.active.length ? this.active.next() : a()
                }
            },
            _createIcons: function() {
                var b = this.options.icons;
                b && (a("<span>").addClass("ui-accordion-header-icon ui-icon " + b.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var a;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), this._destroyIcons(), a = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), "content" !== this.options.heightStyle && a.css("height", "")
            },
            _setOption: function(a, b) {
                return "active" === a ? void this._activate(b) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(b)), this._super(a, b), "collapsible" === a && !b && this.options.active === !1 && this._activate(0), "icons" === a && (this._destroyIcons(), b && this._createIcons()), "disabled" === a && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!b), void 0)
            },
            _keydown: function(b) {
                if (!b.altKey && !b.ctrlKey) {
                    var c = a.ui.keyCode,
                        d = this.headers.length,
                        e = this.headers.index(b.target),
                        f = !1;
                    switch (b.keyCode) {
                        case c.RIGHT:
                        case c.DOWN:
                            f = this.headers[(e + 1) % d];
                            break;
                        case c.LEFT:
                        case c.UP:
                            f = this.headers[(e - 1 + d) % d];
                            break;
                        case c.SPACE:
                        case c.ENTER:
                            this._eventHandler(b);
                            break;
                        case c.HOME:
                            f = this.headers[0];
                            break;
                        case c.END:
                            f = this.headers[d - 1]
                    }
                    f && (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus(), b.preventDefault())
                }
            },
            _panelKeyDown: function(b) {
                b.keyCode === a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().focus()
            },
            refresh: function() {
                var b = this.options;
                this._processPanels(), (b.active === !1 && b.collapsible === !0 || !this.headers.length) && (b.active = !1, this.active = a()), b.active === !1 ? this._activate(0) : this.active.length && !a.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, this.active = a()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active),
                    this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
            },
            _refresh: function() {
                var b, d = this.options,
                    e = d.heightStyle,
                    f = this.element.parent(),
                    g = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++c);
                this.active = this._findActive(d.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(b) {
                    var c = a(this),
                        d = c.attr("id"),
                        e = c.next(),
                        f = e.attr("id");
                    d || (d = g + "-header-" + b, c.attr("id", d)), f || (f = g + "-panel-" + b, e.attr("id", f)), c.attr("aria-controls", f), e.attr("aria-labelledby", d)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(d.event), "fill" === e ? (b = f.height(), this.element.siblings(":visible").each(function() {
                    var c = a(this),
                        d = c.css("position");
                    "absolute" !== d && "fixed" !== d && (b -= c.outerHeight(!0))
                }), this.headers.each(function() {
                    b -= a(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    a(this).height(Math.max(0, b - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (b = 0, this.headers.next().each(function() {
                    b = Math.max(b, a(this).css("height", "").height())
                }).height(b))
            },
            _activate: function(b) {
                var c = this._findActive(b)[0];
                c !== this.active[0] && (c = c || this.active[0], this._eventHandler({
                    target: c,
                    currentTarget: c,
                    preventDefault: a.noop
                }))
            },
            _findActive: function(b) {
                return "number" == typeof b ? this.headers.eq(b) : a()
            },
            _setupEvents: function(b) {
                var c = {
                    keydown: "_keydown"
                };
                b && a.each(b.split(" "), function(a, b) {
                    c[b] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, c), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function(b) {
                var c = this.options,
                    d = this.active,
                    e = a(b.currentTarget),
                    f = e[0] === d[0],
                    g = f && c.collapsible,
                    h = g ? a() : e.next(),
                    i = d.next(),
                    j = {
                        oldHeader: d,
                        oldPanel: i,
                        newHeader: g ? a() : e,
                        newPanel: h
                    };
                b.preventDefault(), f && !c.collapsible || this._trigger("beforeActivate", b, j) === !1 || (c.active = g ? !1 : this.headers.index(e), this.active = f ? a() : e, this._toggle(j), d.removeClass("ui-accordion-header-active ui-state-active"), c.icons && d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), f || (e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), c.icons && e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), e.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function(b) {
                var c = b.newPanel,
                    d = this.prevShow.length ? this.prevShow : b.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = c, this.prevHide = d, this.options.animate ? this._animate(c, d, b) : (d.hide(), c.show(), this._toggleComplete(b)), d.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), d.prev().attr("aria-selected", "false"), c.length && d.length ? d.prev().attr("tabIndex", -1) : c.length && this.headers.filter(function() {
                    return 0 === a(this).attr("tabIndex")
                }).attr("tabIndex", -1), c.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }).prev().attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _animate: function(a, b, c) {
                var f, g, h, i = this,
                    j = 0,
                    k = a.length && (!b.length || a.index() < b.index()),
                    l = this.options.animate || {},
                    m = k && l.down || l,
                    n = function() {
                        i._toggleComplete(c)
                    };
                return "number" == typeof m && (h = m), "string" == typeof m && (g = m), g = g || m.easing || l.easing, h = h || m.duration || l.duration, b.length ? a.length ? (f = a.show().outerHeight(), b.animate(d, {
                    duration: h,
                    easing: g,
                    step: function(a, b) {
                        b.now = Math.round(a)
                    }
                }), a.hide().animate(e, {
                    duration: h,
                    easing: g,
                    complete: n,
                    step: function(a, c) {
                        c.now = Math.round(a), "height" !== c.prop ? j += c.now : "content" !== i.options.heightStyle && (c.now = Math.round(f - b.outerHeight() - j), j = 0)
                    }
                }), void 0) : b.animate(d, h, g, n) : a.animate(e, h, g, n)
            },
            _toggleComplete: function(a) {
                var b = a.oldPanel;
                b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), b.length && (b.parent()[0].className = b.parent()[0].className), this._trigger("activate", null, a)
            }
        })
    }(jQuery),
    function(a, b) {
        var c = 0;
        a.widget("ui.autocomplete", {
            version: "1.10.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            pending: 0,
            _create: function() {
                var b, c, d, e = this.element[0].nodeName.toLowerCase(),
                    f = "textarea" === e,
                    g = "input" === e;
                this.isMultiLine = f ? !0 : g ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[f || g ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(e) {
                        if (this.element.prop("readOnly")) return b = !0, d = !0, c = !0, void 0;
                        b = !1, d = !1, c = !1;
                        var f = a.ui.keyCode;
                        switch (e.keyCode) {
                            case f.PAGE_UP:
                                b = !0, this._move("previousPage", e);
                                break;
                            case f.PAGE_DOWN:
                                b = !0, this._move("nextPage", e);
                                break;
                            case f.UP:
                                b = !0, this._keyEvent("previous", e);
                                break;
                            case f.DOWN:
                                b = !0, this._keyEvent("next", e);
                                break;
                            case f.ENTER:
                            case f.NUMPAD_ENTER:
                                this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                                break;
                            case f.TAB:
                                this.menu.active && this.menu.select(e);
                                break;
                            case f.ESCAPE:
                                this.menu.element.is(":visible") && (this._value(this.term), this.close(e), e.preventDefault());
                                break;
                            default:
                                c = !0, this._searchTimeout(e)
                        }
                    },
                    keypress: function(d) {
                        if (b) return b = !1, void d.preventDefault();
                        if (!c) {
                            var e = a.ui.keyCode;
                            switch (d.keyCode) {
                                case e.PAGE_UP:
                                    this._move("previousPage", d);
                                    break;
                                case e.PAGE_DOWN:
                                    this._move("nextPage", d);
                                    break;
                                case e.UP:
                                    this._keyEvent("previous", d);
                                    break;
                                case e.DOWN:
                                    this._keyEvent("next", d)
                            }
                        }
                    },
                    input: function(a) {
                        return d ? (d = !1, void a.preventDefault()) : void this._searchTimeout(a)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(a) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), this._change(a), void 0)
                    }
                }), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    input: a(),
                    role: null
                }).hide().data("ui-menu"), this._on(this.menu.element, {
                    mousedown: function(b) {
                        b.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur
                        });
                        var c = this.menu.element[0];
                        a(b.target).closest(".ui-menu-item").length || this._delay(function() {
                            var b = this;
                            this.document.one("mousedown", function(d) {
                                d.target !== b.element[0] && d.target !== c && !a.contains(c, d.target) && b.close()
                            })
                        })
                    },
                    menufocus: function(b, c) {
                        if (this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                            a(b.target).trigger(b.originalEvent)
                        });
                        var d = c.item.data("ui-autocomplete-item");
                        !1 !== this._trigger("focus", b, {
                            item: d
                        }) ? b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(d.value) : this.liveRegion.text(d.value)
                    },
                    menuselect: function(a, b) {
                        var c = b.item.data("ui-autocomplete-item"),
                            d = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
                            this.previous = d, this.selectedItem = c
                        })), !1 !== this._trigger("select", a, {
                            item: c
                        }) && this._value(c.value), this.term = this._value(), this.close(a), this.selectedItem = c
                    }
                }), this.liveRegion = a("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(a, b) {
                this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), "disabled" === a && b && this.xhr && this.xhr.abort()
            },
            _appendTo: function() {
                var b = this.options.appendTo;
                return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b || (b = this.element.closest(".ui-front")), b.length || (b = this.document[0].body), b
            },
            _initSource: function() {
                var b, c, d = this;
                a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
                    d(a.ui.autocomplete.filter(b, c.term))
                }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
                    d.xhr && d.xhr.abort(), d.xhr = a.ajax({
                        url: c,
                        data: b,
                        dataType: "json",
                        success: function(a) {
                            e(a)
                        },
                        error: function() {
                            e([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(a) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    this.term !== this._value() && (this.selectedItem = null, this.search(null, a))
                }, this.options.delay)
            },
            search: function(a, b) {
                return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(a) : void 0
            },
            _search: function(a) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: a
                }, this._response())
            },
            _response: function() {
                var a = this,
                    b = ++c;
                return function(d) {
                    b === c && a.__response(d), a.pending--, a.pending || a.element.removeClass("ui-autocomplete-loading")
                }
            },
            __response: function(a) {
                a && (a = this._normalize(a)), this._trigger("response", null, {
                    content: a
                }), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
            },
            close: function(a) {
                this.cancelSearch = !0, this._close(a)
            },
            _close: function(a) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
            },
            _change: function(a) {
                this.previous !== this._value() && this._trigger("change", a, {
                    item: this.selectedItem
                })
            },
            _normalize: function(b) {
                return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
                    return "string" == typeof b ? {
                        label: b,
                        value: b
                    } : a.extend({
                        label: b.label || b.value,
                        value: b.value || b.label
                    }, b)
                })
            },
            _suggest: function(b) {
                var c = this.menu.element.empty();
                this._renderMenu(c, b), this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var a = this.menu.element;
                a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(b, c) {
                var d = this;
                a.each(c, function(a, c) {
                    d._renderItemData(b, c)
                })
            },
            _renderItemData: function(a, b) {
                return this._renderItem(a, b).data("ui-autocomplete-item", b)
            },
            _renderItem: function(b, c) {
                return a("<li>").append(a("<a>").text(c.label)).appendTo(b)
            },
            _move: function(a, b) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this._value(this.term), void this.menu.blur()) : void this.menu[a](b) : void this.search(null, b)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(a, b) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, b), b.preventDefault())
            }
        }), a.extend(a.ui.autocomplete, {
            escapeRegex: function(a) {
                return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(b, c) {
                var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
                return a.grep(b, function(a) {
                    return d.test(a.label || a.value || a)
                })
            }
        }), a.widget("ui.autocomplete", a.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(a) {
                        return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(a) {
                var b;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (b = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, this.liveRegion.text(b))
            }
        })
    }(jQuery),
    function(a, b) {
        var c, d, e, f, g = "ui-button ui-widget ui-state-default ui-corner-all",
            h = "ui-state-hover ui-state-active ",
            i = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            j = function() {
                var b = a(this).find(":ui-button");
                setTimeout(function() {
                    b.button("refresh")
                }, 1)
            },
            k = function(b) {
                var c = b.name,
                    d = b.form,
                    e = a([]);
                return c && (c = c.replace(/'/g, "\\'"), e = d ? a(d).find("[name='" + c + "']") : a("[name='" + c + "']", b.ownerDocument).filter(function() {
                    return !this.form
                })), e
            };
        a.widget("ui.button", {
            version: "1.10.1",
            defaultElement: "<button>",
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, j), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var b = this,
                    h = this.options,
                    i = "checkbox" === this.type || "radio" === this.type,
                    l = i ? "" : "ui-state-active",
                    m = "ui-state-focus";
                null === h.label && (h.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(g).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                    h.disabled || this === c && a(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function() {
                    h.disabled || a(this).removeClass(l)
                }).bind("click" + this.eventNamespace, function(a) {
                    h.disabled && (a.preventDefault(), a.stopImmediatePropagation())
                }), this.element.bind("focus" + this.eventNamespace, function() {
                    b.buttonElement.addClass(m)
                }).bind("blur" + this.eventNamespace, function() {
                    b.buttonElement.removeClass(m)
                }), i && (this.element.bind("change" + this.eventNamespace, function() {
                    f || b.refresh()
                }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(a) {
                    h.disabled || (f = !1, d = a.pageX, e = a.pageY)
                }).bind("mouseup" + this.eventNamespace, function(a) {
                    h.disabled || (d !== a.pageX || e !== a.pageY) && (f = !0)
                })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    return h.disabled || f ? !1 : void 0
                }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (h.disabled || f) return !1;
                    a(this).addClass("ui-state-active"), b.buttonElement.attr("aria-pressed", "true");
                    var c = b.element[0];
                    k(c).not(c).map(function() {
                        return a(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                    return h.disabled ? !1 : (a(this).addClass("ui-state-active"), c = this, b.document.one("mouseup", function() {
                        c = null
                    }), void 0)
                }).bind("mouseup" + this.eventNamespace, function() {
                    return h.disabled ? !1 : void a(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace, function(b) {
                    return h.disabled ? !1 : void((b.keyCode === a.ui.keyCode.SPACE || b.keyCode === a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active"))
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                    a(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(b) {
                    b.keyCode === a.ui.keyCode.SPACE && a(this).click()
                })), this._setOption("disabled", h.disabled), this._resetButton()
            },
            _determineButtonType: function() {
                var a, b, c;
                this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible"), c = this.element.is(":checked"), c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", c)) : this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            _destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(g + " " + h + " " + i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function(a, b) {
                return this._super(a, b), "disabled" === a ? void(b ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)) : void this._resetButton()
            },
            refresh: function() {
                var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                b !== this.options.disabled && this._setOption("disabled", b), "radio" === this.type ? k(this.element[0]).each(function() {
                    a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
                var b = this.buttonElement.removeClass(i),
                    c = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),
                    d = this.options.icons,
                    e = d.primary && d.secondary,
                    f = [];
                d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", a.trim(c)))) : f.push("ui-button-text-only"), b.addClass(f.join(" "))
            }
        }), a.widget("ui.buttonset", {
            version: "1.10.1",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(a, b) {
                "disabled" === a && this.buttons.button("option", a, b), this._super(a, b)
            },
            refresh: function() {
                var b = "rtl" === this.element.css("direction");
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function() {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        })
    }(jQuery),
    function(a, b) {
        function c() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, a.extend(this._defaults, this.regional[""]), this.dpDiv = d(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function d(b) {
            var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return b.delegate(c, "mouseout", function() {
                a(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover")
            }).delegate(c, "mouseover", function() {
                a.datepicker._isDisabledDatepicker(f.inline ? b.parent()[0] : f.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover"))
            })
        }

        function e(b, c) {
            a.extend(b, c);
            for (var d in c) null == c[d] && (b[d] = c[d]);
            return b
        }
        a.extend(a.ui, {
            datepicker: {
                version: "1.10.1"
            }
        });
        var f, g = "datepicker",
            h = (new Date).getTime();
        a.extend(c.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(a) {
                return e(this._defaults, a || {}), this
            },
            _attachDatepicker: function(b, c) {
                var d, e, f;
                d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f)
            },
            _newInst: function(b, c) {
                var e = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: e,
                    input: b,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: c,
                    dpDiv: c ? d(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(b, c) {
                var d = a(b);
                c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, g, c), c.settings.disabled && this._disableDatepicker(b))
            },
            _attachments: function(b, c) {
                var d, e, f, g = this._get(c, "appendText"),
                    h = this._get(c, "isRTL");
                c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[h ? "before" : "after"](c.append)), b.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.focus(this._showDatepicker), ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: e,
                    title: e
                }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
                    src: f,
                    alt: e,
                    title: e
                }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.click(function() {
                    return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1
                }))
            },
            _autoSize: function(a) {
                if (this._get(a, "autoSize") && !a.inline) {
                    var b, c, d, e, f = new Date(2009, 11, 20),
                        g = this._get(a, "dateFormat");
                    g.match(/[DM]/) && (b = function(a) {
                        for (c = 0, d = 0, e = 0; e < a.length; e++) a[e].length > c && (c = a[e].length, d = e);
                        return d
                    }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length)
                }
            },
            _inlineDatepicker: function(b, c) {
                var d = a(b);
                d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, g, c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(b, c, d, f, h) {
                var i, j, k, l, m, n = this._dialogInst;
                return n || (this.uuid += 1, i = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + i + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), n = this._dialogInst = this._newInst(this._dialogInput, !1), n.settings = {}, a.data(this._dialogInput[0], g, n)), e(n.settings, f || {}), c = c && c.constructor === Date ? this._formatDate(n, c) : c, this._dialogInput.val(c), this._pos = h ? h.length ? h : [h.pageX, h.pageY] : null, this._pos || (j = document.documentElement.clientWidth, k = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, m = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [j / 2 - 100 + l, k / 2 - 150 + m]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), n.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], g, n), this
            },
            _destroyDatepicker: function(b) {
                var c, d = a(b),
                    e = a.data(b, g);
                d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, g), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty())
            },
            _enableDatepicker: function(b) {
                var c, d, e = a(b),
                    f = a.data(b, g);
                e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
                    return a === b ? null : a
                }))
            },
            _disableDatepicker: function(b) {
                var c, d, e = a(b),
                    f = a.data(b, g);
                e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
                    return a === b ? null : a
                }), this._disabledInputs[this._disabledInputs.length] = b)
            },
            _isDisabledDatepicker: function(a) {
                if (!a) return !1;
                for (var b = 0; b < this._disabledInputs.length; b++)
                    if (this._disabledInputs[b] === a) return !0;
                return !1
            },
            _getInst: function(b) {
                try {
                    return a.data(b, g)
                } catch (c) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(c, d, f) {
                var g, h, i, j, k = this._getInst(c);
                return 2 === arguments.length && "string" == typeof d ? "defaults" === d ? a.extend({}, a.datepicker._defaults) : k ? "all" === d ? a.extend({}, k.settings) : this._get(k, d) : null : (g = d || {}, "string" == typeof d && (g = {}, g[d] = f), k && (this._curInst === k && this._hideDatepicker(), h = this._getDateDatepicker(c, !0), i = this._getMinMaxDate(k, "min"), j = this._getMinMaxDate(k, "max"), e(k.settings, g), null !== i && g.dateFormat !== b && g.minDate === b && (k.settings.minDate = this._formatDate(k, i)), null !== j && g.dateFormat !== b && g.maxDate === b && (k.settings.maxDate = this._formatDate(k, j)), "disabled" in g && (g.disabled ? this._disableDatepicker(c) : this._enableDatepicker(c)), this._attachments(a(c), k), this._autoSize(k), this._setDate(k, h), this._updateAlternate(k), this._updateDatepicker(k)), void 0)
            },
            _changeDatepicker: function(a, b, c) {
                this._optionDatepicker(a, b, c)
            },
            _refreshDatepicker: function(a) {
                var b = this._getInst(a);
                b && this._updateDatepicker(b)
            },
            _setDateDatepicker: function(a, b) {
                var c = this._getInst(a);
                c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
            },
            _getDateDatepicker: function(a, b) {
                var c = this._getInst(a);
                return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
            },
            _doKeyDown: function(b) {
                var c, d, e, f = a.datepicker._getInst(b.target),
                    g = !0,
                    h = f.dpDiv.is(".ui-datepicker-rtl");
                if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
                    case 9:
                        a.datepicker._hideDatepicker(), g = !1;
                        break;
                    case 13:
                        return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
                    case 27:
                        a.datepicker._hideDatepicker();
                        break;
                    case 33:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 34:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 35:
                        (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
                        break;
                    case 36:
                        (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
                        break;
                    case 37:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 38:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
                        break;
                    case 39:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 40:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
                        break;
                    default:
                        g = !1
                } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
                g && (b.preventDefault(), b.stopPropagation())
            },
            _doKeyPress: function(b) {
                var c, d, e = a.datepicker._getInst(b.target);
                return a.datepicker._get(e, "constrainInput") ? (c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || c.indexOf(d) > -1) : void 0
            },
            _doKeyUp: function(b) {
                var c, d = a.datepicker._getInst(b.target);
                if (d.input.val() !== d.lastVal) try {
                    c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d))
                } catch (e) {}
                return !0
            },
            _showDatepicker: function(b) {
                if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
                    var c, d, f, g, h, i, j;
                    c = a.datepicker._getInst(b), a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), d = a.datepicker._get(c, "beforeShow"), f = d ? d.apply(b, [b, c]) : {}, f !== !1 && (e(c.settings, f), c.lastVal = null, a.datepicker._lastInput = b,
                        a.datepicker._setDateFromField(c), a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight), g = !1, a(b).parents().each(function() {
                            return g |= "fixed" === a(this).css("position"), !g
                        }), h = {
                            left: a.datepicker._pos[0],
                            top: a.datepicker._pos[1]
                        }, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
                            position: "absolute",
                            display: "block",
                            top: "-1000px"
                        }), a.datepicker._updateDatepicker(c), h = a.datepicker._checkOffset(c, h, g), c.dpDiv.css({
                            position: a.datepicker._inDialog && a.blockUI ? "static" : g ? "fixed" : "absolute",
                            display: "none",
                            left: h.left + "px",
                            top: h.top + "px"
                        }), c.inline || (i = a.datepicker._get(c, "showAnim"), j = a.datepicker._get(c, "duration"), c.dpDiv.zIndex(a(b).zIndex() + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[i] ? c.dpDiv.show(i, a.datepicker._get(c, "showOptions"), j) : c.dpDiv[i || "show"](i ? j : null), c.input.is(":visible") && !c.input.is(":disabled") && c.input.focus(), a.datepicker._curInst = c))
                }
            },
            _updateDatepicker: function(b) {
                this.maxRows = 4, f = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b), b.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var c, d = this._getNumberOfMonths(b),
                    e = d[1],
                    g = 17;
                b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", g * e + "em"), b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), b === a.datepicker._curInst && a.datepicker._datepickerShowing && b.input && b.input.is(":visible") && !b.input.is(":disabled") && b.input[0] !== document.activeElement && b.input.focus(), b.yearshtml && (c = b.yearshtml, setTimeout(function() {
                    c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), c = b.yearshtml = null
                }, 0))
            },
            _getBorders: function(a) {
                var b = function(a) {
                    return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }[a] || a
                };
                return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
            },
            _checkOffset: function(b, c, d) {
                var e = b.dpDiv.outerWidth(),
                    f = b.dpDiv.outerHeight(),
                    g = b.input ? b.input.outerWidth() : 0,
                    h = b.input ? b.input.outerHeight() : 0,
                    i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()),
                    j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
                return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c
            },
            _findPos: function(b) {
                for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) b = b[e ? "previousSibling" : "nextSibling"];
                return c = a(b).offset(), [c.left, c.top]
            },
            _hideDatepicker: function(b) {
                var c, d, e, f, h = this._curInst;
                !h || b && h !== a.data(b, g) || this._datepickerShowing && (c = this._get(h, "showAnim"), d = this._get(h, "duration"), e = function() {
                    a.datepicker._tidyDialog(h)
                }, a.effects && (a.effects.effect[c] || a.effects[c]) ? h.dpDiv.hide(c, a.datepicker._get(h, "showOptions"), d, e) : h.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(h, "onClose"), f && f.apply(h.input ? h.input[0] : null, [h.input ? h.input.val() : "", h]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(a) {
                a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(b) {
                if (a.datepicker._curInst) {
                    var c = a(b.target),
                        d = a.datepicker._getInst(c[0]);
                    (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(b, c, d) {
                var e = a(b),
                    f = this._getInst(e[0]);
                this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f))
            },
            _gotoToday: function(b) {
                var c, d = a(b),
                    e = this._getInst(d[0]);
                this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), this._notifyChange(e), this._adjustDate(d)
            },
            _selectMonthYear: function(b, c, d) {
                var e = a(b),
                    f = this._getInst(e[0]);
                f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(f), this._adjustDate(e)
            },
            _selectDay: function(b, c, d, e) {
                var f, g = a(b);
                a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
            },
            _clearDate: function(b) {
                var c = a(b);
                this._selectDate(c, "")
            },
            _selectDate: function(b, c) {
                var d, e = a(b),
                    f = this._getInst(e[0]);
                c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [c, f]) : f.input && f.input.trigger("change"), f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(b) {
                var c, d, e, f = this._get(b, "altField");
                f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function() {
                    a(this).val(e)
                }))
            },
            noWeekends: function(a) {
                var b = a.getDay();
                return [b > 0 && 6 > b, ""]
            },
            iso8601Week: function(a) {
                var b, c = new Date(a.getTime());
                return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1
            },
            parseDate: function(b, c, d) {
                if (null == b || null == c) throw "Invalid arguments";
                if (c = "object" == typeof c ? c.toString() : c + "", "" === c) return null;
                var e, f, g, h, i = 0,
                    j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    k = "string" != typeof j ? j : (new Date).getFullYear() % 100 + parseInt(j, 10),
                    l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort,
                    m = (d ? d.dayNames : null) || this._defaults.dayNames,
                    n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort,
                    o = (d ? d.monthNames : null) || this._defaults.monthNames,
                    p = -1,
                    q = -1,
                    r = -1,
                    s = -1,
                    t = !1,
                    u = function(a) {
                        var c = e + 1 < b.length && b.charAt(e + 1) === a;
                        return c && e++, c
                    },
                    v = function(a) {
                        var b = u(a),
                            d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2,
                            e = new RegExp("^\\d{1," + d + "}"),
                            f = c.substring(i).match(e);
                        if (!f) throw "Missing number at position " + i;
                        return i += f[0].length, parseInt(f[0], 10)
                    },
                    w = function(b, d, e) {
                        var f = -1,
                            g = a.map(u(b) ? e : d, function(a, b) {
                                return [
                                    [b, a]
                                ]
                            }).sort(function(a, b) {
                                return -(a[1].length - b[1].length)
                            });
                        if (a.each(g, function(a, b) {
                                var d = b[1];
                                return c.substr(i, d.length).toLowerCase() === d.toLowerCase() ? (f = b[0], i += d.length, !1) : void 0
                            }), -1 !== f) return f + 1;
                        throw "Unknown name at position " + i
                    },
                    x = function() {
                        if (c.charAt(i) !== b.charAt(e)) throw "Unexpected literal at position " + i;
                        i++
                    };
                for (e = 0; e < b.length; e++)
                    if (t) "'" !== b.charAt(e) || u("'") ? x() : t = !1;
                    else switch (b.charAt(e)) {
                        case "d":
                            r = v("d");
                            break;
                        case "D":
                            w("D", l, m);
                            break;
                        case "o":
                            s = v("o");
                            break;
                        case "m":
                            q = v("m");
                            break;
                        case "M":
                            q = w("M", n, o);
                            break;
                        case "y":
                            p = v("y");
                            break;
                        case "@":
                            h = new Date(v("@")), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
                            break;
                        case "!":
                            h = new Date((v("!") - this._ticksTo1970) / 1e4), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
                            break;
                        case "'":
                            u("'") ? x() : t = !0;
                            break;
                        default:
                            x()
                    }
                    if (i < c.length && (g = c.substr(i), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g;
                if (-1 === p ? p = (new Date).getFullYear() : 100 > p && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (k >= p ? 0 : -100)), s > -1)
                    for (q = 1, r = s;;) {
                        if (f = this._getDaysInMonth(p, q - 1), f >= r) break;
                        q++, r -= f
                    }
                if (h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r) throw "Invalid date";
                return h
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(a, b, c) {
                if (!b) return "";
                var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                    f = (c ? c.dayNames : null) || this._defaults.dayNames,
                    g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                    h = (c ? c.monthNames : null) || this._defaults.monthNames,
                    i = function(b) {
                        var c = d + 1 < a.length && a.charAt(d + 1) === b;
                        return c && d++, c
                    },
                    j = function(a, b, c) {
                        var d = "" + b;
                        if (i(a))
                            for (; d.length < c;) d = "0" + d;
                        return d
                    },
                    k = function(a, b, c, d) {
                        return i(a) ? d[b] : c[b]
                    },
                    l = "",
                    m = !1;
                if (b)
                    for (d = 0; d < a.length; d++)
                        if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1;
                        else switch (a.charAt(d)) {
                            case "d":
                                l += j("d", b.getDate(), 2);
                                break;
                            case "D":
                                l += k("D", b.getDay(), e, f);
                                break;
                            case "o":
                                l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                l += j("m", b.getMonth() + 1, 2);
                                break;
                            case "M":
                                l += k("M", b.getMonth(), g, h);
                                break;
                            case "y":
                                l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
                                break;
                            case "@":
                                l += b.getTime();
                                break;
                            case "!":
                                l += 1e4 * b.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                i("'") ? l += "'" : m = !0;
                                break;
                            default:
                                l += a.charAt(d)
                        }
                        return l
            },
            _possibleChars: function(a) {
                var b, c = "",
                    d = !1,
                    e = function(c) {
                        var d = b + 1 < a.length && a.charAt(b + 1) === c;
                        return d && b++, d
                    };
                for (b = 0; b < a.length; b++)
                    if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1;
                    else switch (a.charAt(b)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            c += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            e("'") ? c += "'" : d = !0;
                            break;
                        default:
                            c += a.charAt(b)
                    }
                    return c
            },
            _get: function(a, c) {
                return a.settings[c] !== b ? a.settings[c] : this._defaults[c]
            },
            _setDateFromField: function(a, b) {
                if (a.input.val() !== a.lastVal) {
                    var c = this._get(a, "dateFormat"),
                        d = a.lastVal = a.input ? a.input.val() : null,
                        e = this._getDefaultDate(a),
                        f = e,
                        g = this._getFormatConfig(a);
                    try {
                        f = this.parseDate(c, d, g) || e
                    } catch (h) {
                        d = b ? "" : d
                    }
                    a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a)
                }
            },
            _getDefaultDate: function(a) {
                return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
            },
            _determineDate: function(b, c, d) {
                var e = function(a) {
                        var b = new Date;
                        return b.setDate(b.getDate() + a), b
                    },
                    f = function(c) {
                        try {
                            return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b))
                        } catch (d) {}
                        for (var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c); j;) {
                            switch (j[2] || "d") {
                                case "d":
                                case "D":
                                    h += parseInt(j[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    h += 7 * parseInt(j[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    g += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                                    break;
                                case "y":
                                case "Y":
                                    f += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g))
                            }
                            j = i.exec(c)
                        }
                        return new Date(f, g, h)
                    },
                    g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
                return g = g && "Invalid Date" === g.toString() ? d : g, g && (g.setHours(0), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g)
            },
            _daylightSavingAdjust: function(a) {
                return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
            },
            _setDate: function(a, b, c) {
                var d = !b,
                    e = a.selectedMonth,
                    f = a.selectedYear,
                    g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
                a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), (e !== a.selectedMonth || f !== a.selectedYear) && !c && this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
            },
            _getDate: function(a) {
                var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                return b
            },
            _attachHandlers: function(b) {
                var c = this._get(b, "stepMonths"),
                    d = "#" + b.id.replace(/\\\\/g, "\\");
                b.dpDiv.find("[data-handler]").map(function() {
                    var b = {
                        prev: function() {
                            window["DP_jQuery_" + h].datepicker._adjustDate(d, -c, "M")
                        },
                        next: function() {
                            window["DP_jQuery_" + h].datepicker._adjustDate(d, +c, "M")
                        },
                        hide: function() {
                            window["DP_jQuery_" + h].datepicker._hideDatepicker()
                        },
                        today: function() {
                            window["DP_jQuery_" + h].datepicker._gotoToday(d)
                        },
                        selectDay: function() {
                            return window["DP_jQuery_" + h].datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return window["DP_jQuery_" + h].datepicker._selectMonthYear(d, this, "M"), !1
                        },
                        selectYear: function() {
                            return window["DP_jQuery_" + h].datepicker._selectMonthYear(d, this, "Y"), !1
                        }
                    };
                    a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(a) {
                var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date,
                    P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
                    Q = this._get(a, "isRTL"),
                    R = this._get(a, "showButtonPanel"),
                    S = this._get(a, "hideIfNoPrevNext"),
                    T = this._get(a, "navigationAsDateFormat"),
                    U = this._getNumberOfMonths(a),
                    V = this._get(a, "showCurrentAtPos"),
                    W = this._get(a, "stepMonths"),
                    X = 1 !== U[0] || 1 !== U[1],
                    Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
                    Z = this._getMinMaxDate(a, "min"),
                    $ = this._getMinMaxDate(a, "max"),
                    _ = a.drawMonth - V,
                    aa = a.drawYear;
                if (0 > _ && (_ += 12, aa--), $)
                    for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(aa, _, 1)) > b;) _--, 0 > _ && (_ = 11, aa--);
                for (a.drawMonth = _, a.drawYear = aa, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(aa, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, aa, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(aa, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, aa, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", v, w = 0; w < U[0]; w++) {
                    for (x = "", this.maxRows = 4, y = 0; y < U[1]; y++) {
                        if (z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay)), A = " ui-corner-all", B = "", X) {
                            if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
                                case 0:
                                    B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
                                    break;
                                case U[1] - 1:
                                    B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
                                    break;
                                default:
                                    B += " ui-datepicker-group-middle", A = ""
                            }
                            B += "'>"
                        }
                        for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, aa, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; 7 > v; v++) D = (v + k) % 7, C += "<th" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
                        for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(aa, _), aa === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)), J = 0; H > J; J++) {
                            for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; 7 > v; v++) L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                            B += K + "</tr>"
                        }
                        _++, _ > 11 && (_ = 0, aa++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B
                    }
                    u += x
                }
                return u += j, a._keyEvent = !1, u
            },
            _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
                var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"),
                    r = this._get(a, "changeYear"),
                    s = this._get(a, "showMonthAfterYear"),
                    t = "<div class='ui-datepicker-title'>",
                    u = "";
                if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
                else {
                    for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; 12 > k; k++)(!i || k >= d.getMonth()) && (!j || k <= e.getMonth()) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
                    u += "</select>"
                }
                if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)
                    if (a.yearshtml = "", f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>";
                    else {
                        for (l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function(a) {
                                var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
                                return isNaN(b) ? m : b
                            }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
                        a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null
                    }
                return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>"
            },
            _adjustInstDate: function(a, b, c) {
                var d = a.drawYear + ("Y" === c ? b : 0),
                    e = a.drawMonth + ("M" === c ? b : 0),
                    f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0),
                    g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
                a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), ("M" === c || "Y" === c) && this._notifyChange(a)
            },
            _restrictMinMax: function(a, b) {
                var c = this._getMinMaxDate(a, "min"),
                    d = this._getMinMaxDate(a, "max"),
                    e = c && c > b ? c : b;
                return d && e > d ? d : e
            },
            _notifyChange: function(a) {
                var b = this._get(a, "onChangeMonthYear");
                b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
            },
            _getNumberOfMonths: function(a) {
                var b = this._get(a, "numberOfMonths");
                return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
            },
            _getMinMaxDate: function(a, b) {
                return this._determineDate(a, this._get(a, b + "Date"), null)
            },
            _getDaysInMonth: function(a, b) {
                return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
            },
            _getFirstDayOfMonth: function(a, b) {
                return new Date(a, b, 1).getDay()
            },
            _canAdjustMonth: function(a, b, c, d) {
                var e = this._getNumberOfMonths(a),
                    f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
                return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
            },
            _isInRange: function(a, b) {
                var c, d, e = this._getMinMaxDate(a, "min"),
                    f = this._getMinMaxDate(a, "max"),
                    g = null,
                    h = null,
                    i = this._get(a, "yearRange");
                return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || b.getFullYear() <= h)
            },
            _getFormatConfig: function(a) {
                var b = this._get(a, "shortYearCutoff");
                return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
                    shortYearCutoff: b,
                    dayNamesShort: this._get(a, "dayNamesShort"),
                    dayNames: this._get(a, "dayNames"),
                    monthNamesShort: this._get(a, "monthNamesShort"),
                    monthNames: this._get(a, "monthNames")
                }
            },
            _formatDate: function(a, b, c, d) {
                b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
                var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
            }
        }), a.fn.datepicker = function(b) {
            if (!this.length) return this;
            a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
            var c = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function() {
                "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
            }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c))
        }, a.datepicker = new c, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.10.1", window["DP_jQuery_" + h] = a
    }(jQuery),
    function(a, b) {
        var c = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            d = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            };
        a.widget("ui.dialog", {
            version: "1.10.1",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(b) {
                        var c = a(this).css(b).offset().top;
                        0 > c && a(this).css("top", b.top - c)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            _create: function() {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && a.fn.draggable && this._makeDraggable(), this.options.resizable && a.fn.resizable && this._makeResizable(), this._isOpen = !1
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var b = this.options.appendTo;
                return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0)
            },
            _destroy: function() {
                var a, b = this.originalPosition;
                this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), a = b.parent.children().eq(b.index), a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: a.noop,
            enable: a.noop,
            close: function(b) {
                var c = this;
                this._isOpen && this._trigger("beforeClose", b) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || a(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function() {
                    c._trigger("close", b)
                }))
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(a, b) {
                var c = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
                return c && !b && this._trigger("focus", a), c
            },
            open: function() {
                var b = this;
                return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = a(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                    b._focusTabbable(), b._trigger("focus")
                }), this._trigger("open"), void 0)
            },
            _focusTabbable: function() {
                var a = this.element.find("[autofocus]");
                a.length || (a = this.element.find(":tabbable")), a.length || (a = this.uiDialogButtonPane.find(":tabbable")), a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable")), a.length || (a = this.uiDialog), a.eq(0).focus()
            },
            _keepFocus: function(b) {
                function c() {
                    var b = this.document[0].activeElement,
                        c = this.uiDialog[0] === b || a.contains(this.uiDialog[0], b);
                    c || this._focusTabbable()
                }
                b.preventDefault(), c.call(this), this._delay(c)
            },
            _createWrapper: function() {
                this.uiDialog = a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                    keydown: function(b) {
                        if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE) return b.preventDefault(), void this.close(b);
                        if (b.keyCode === a.ui.keyCode.TAB) {
                            var c = this.uiDialog.find(":tabbable"),
                                d = c.filter(":first"),
                                e = c.filter(":last");
                            b.target !== e[0] && b.target !== this.uiDialog[0] || b.shiftKey ? (b.target === d[0] || b.target === this.uiDialog[0]) && b.shiftKey && (e.focus(1), b.preventDefault()) : (d.focus(1), b.preventDefault())
                        }
                    },
                    mousedown: function(a) {
                        this._moveToTop(a) && this._focusTabbable()
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function() {
                var b;
                this.uiDialogTitlebar = a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                    mousedown: function(b) {
                        a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                    }
                }), this.uiDialogTitlebarClose = a("<button></button>").button({
                    label: this.options.closeText,
                    icons: {
                        primary: "ui-icon-closethick"
                    },
                    text: !1
                }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                    click: function(a) {
                        a.preventDefault(), this.close(a)
                    }
                }), b = a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(b), this.uiDialog.attr({
                    "aria-labelledby": b.attr("id")
                })
            },
            _title: function(a) {
                this.options.title || a.html("&#160;"), a.text(this.options.title)
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
            },
            _createButtons: function() {
                var b = this,
                    c = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), a.isEmptyObject(c) || a.isArray(c) && !c.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (a.each(c, function(c, d) {
                    var e, f;
                    d = a.isFunction(d) ? {
                        click: d,
                        text: c
                    } : d, d = a.extend({
                        type: "button"
                    }, d), e = d.click, d.click = function() {
                        e.apply(b.element[0], arguments)
                    }, f = {
                        icons: d.icons,
                        text: d.showText
                    }, delete d.icons, delete d.showText, a("<button></button>", d).button(f).appendTo(b.uiButtonSet)
                }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
            },
            _makeDraggable: function() {
                function b(a) {
                    return {
                        position: a.position,
                        offset: a.offset
                    }
                }
                var c = this,
                    d = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(d, e) {
                        a(this).addClass("ui-dialog-dragging"), c._blockFrames(), c._trigger("dragStart", d, b(e))
                    },
                    drag: function(a, d) {
                        c._trigger("drag", a, b(d))
                    },
                    stop: function(e, f) {
                        d.position = [f.position.left - c.document.scrollLeft(), f.position.top - c.document.scrollTop()], a(this).removeClass("ui-dialog-dragging"), c._unblockFrames(), c._trigger("dragStop", e, b(f))
                    }
                })
            },
            _makeResizable: function() {
                function b(a) {
                    return {
                        originalPosition: a.originalPosition,
                        originalSize: a.originalSize,
                        position: a.position,
                        size: a.size
                    }
                }
                var c = this,
                    d = this.options,
                    e = d.resizable,
                    f = this.uiDialog.css("position"),
                    g = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: d.maxWidth,
                    maxHeight: d.maxHeight,
                    minWidth: d.minWidth,
                    minHeight: this._minHeight(),
                    handles: g,
                    start: function(d, e) {
                        a(this).addClass("ui-dialog-resizing"), c._blockFrames(), c._trigger("resizeStart", d, b(e))
                    },
                    resize: function(a, d) {
                        c._trigger("resize", a, b(d))
                    },
                    stop: function(e, f) {
                        d.height = a(this).height(), d.width = a(this).width(), a(this).removeClass("ui-dialog-resizing"), c._unblockFrames(), c._trigger("resizeStop", e, b(f))
                    }
                }).css("position", f)
            },
            _minHeight: function() {
                var a = this.options;
                return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
            },
            _position: function() {
                var a = this.uiDialog.is(":visible");
                a || this.uiDialog.show(), this.uiDialog.position(this.options.position), a || this.uiDialog.hide()
            },
            _setOptions: function(b) {
                var e = this,
                    f = !1,
                    g = {};
                a.each(b, function(a, b) {
                    e._setOption(a, b), a in c && (f = !0), a in d && (g[a] = b)
                }), f && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", g)
            },
            _setOption: function(a, b) {
                var c, d, e = this.uiDialog;
                "dialogClass" === a && e.removeClass(this.options.dialogClass).addClass(b), "disabled" !== a && (this._super(a, b), "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), "closeText" === a && this.uiDialogTitlebarClose.button({
                    label: "" + b
                }), "draggable" === a && (c = e.is(":data(ui-draggable)"), c && !b && e.draggable("destroy"), !c && b && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && (d = e.is(":data(ui-resizable)"), d && !b && e.resizable("destroy"), d && "string" == typeof b && e.resizable("option", "handles", b), !d && b !== !1 && this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var a, b, c, d = this.options;
                this.element.show().css({
                        width: "auto",
                        minHeight: 0,
                        maxHeight: "none",
                        height: 0
                    }), d.minWidth > d.width && (d.width = d.minWidth), a = this.uiDialog.css({
                        height: "auto",
                        width: d.width
                    }).outerHeight(), b = Math.max(0, d.minHeight - a),
                    c = "number" == typeof d.maxHeight ? Math.max(0, d.maxHeight - a) : "none", "auto" === d.height ? this.element.css({
                        minHeight: b,
                        maxHeight: c,
                        height: "auto"
                    }) : this.element.height(Math.max(0, d.height - a)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var b = a(this);
                    return a("<div>").css({
                        position: "absolute",
                        width: b.outerWidth(),
                        height: b.outerHeight()
                    }).appendTo(b.parent()).offset(b.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _createOverlay: function() {
                this.options.modal && (a.ui.dialog.overlayInstances || this._delay(function() {
                    a.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(b) {
                        !a(b.target).closest(".ui-dialog").length && !a(b.target).closest(".ui-datepicker").length && (b.preventDefault(), a(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable())
                    })
                }), this.overlay = a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), a.ui.dialog.overlayInstances++)
            },
            _destroyOverlay: function() {
                this.options.modal && this.overlay && (a.ui.dialog.overlayInstances--, a.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
            }
        }), a.ui.dialog.overlayInstances = 0, a.uiBackCompat !== !1 && a.widget("ui.dialog", a.ui.dialog, {
            _position: function() {
                var b, c = this.options.position,
                    d = [],
                    e = [0, 0];
                c ? (("string" == typeof c || "object" == typeof c && "0" in c) && (d = c.split ? c.split(" ") : [c[0], c[1]], 1 === d.length && (d[1] = d[0]), a.each(["left", "top"], function(a, b) {
                    +d[a] === d[a] && (e[a] = d[a], d[a] = b)
                }), c = {
                    my: d[0] + (e[0] < 0 ? e[0] : "+" + e[0]) + " " + d[1] + (e[1] < 0 ? e[1] : "+" + e[1]),
                    at: d.join(" ")
                }), c = a.extend({}, a.ui.dialog.prototype.options.position, c)) : c = a.ui.dialog.prototype.options.position, b = this.uiDialog.is(":visible"), b || this.uiDialog.show(), this.uiDialog.position(c), b || this.uiDialog.hide()
            }
        })
    }(jQuery),
    function(a, b) {
        a.widget("ui.menu", {
            version: "1.10.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }).bind("click" + this.eventNamespace, a.proxy(function(a) {
                    this.options.disabled && a.preventDefault()
                }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item > a": function(a) {
                        a.preventDefault()
                    },
                    "click .ui-state-disabled > a": function(a) {
                        a.preventDefault()
                    },
                    "click .ui-menu-item:has(a)": function(b) {
                        var c = a(b.target).closest(".ui-menu-item");
                        !this.mouseHandled && c.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(b), c.has(".ui-menu").length ? this.expand(b) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(b) {
                        var c = a(b.currentTarget);
                        c.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c)
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(a, b) {
                        var c = this.active || this.element.children(".ui-menu-item").eq(0);
                        b || this.focus(a, c)
                    },
                    blur: function(b) {
                        this._delay(function() {
                            a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(b) {
                        a(b.target).closest(".ui-menu").length || this.collapseAll(b), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var b = a(this);
                    b.data("ui-menu-submenu-carat") && b.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(b) {
                function c(a) {
                    return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }
                var d, e, f, g, h, i = !0;
                switch (b.keyCode) {
                    case a.ui.keyCode.PAGE_UP:
                        this.previousPage(b);
                        break;
                    case a.ui.keyCode.PAGE_DOWN:
                        this.nextPage(b);
                        break;
                    case a.ui.keyCode.HOME:
                        this._move("first", "first", b);
                        break;
                    case a.ui.keyCode.END:
                        this._move("last", "last", b);
                        break;
                    case a.ui.keyCode.UP:
                        this.previous(b);
                        break;
                    case a.ui.keyCode.DOWN:
                        this.next(b);
                        break;
                    case a.ui.keyCode.LEFT:
                        this.collapse(b);
                        break;
                    case a.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                        break;
                    case a.ui.keyCode.ENTER:
                    case a.ui.keyCode.SPACE:
                        this._activate(b);
                        break;
                    case a.ui.keyCode.ESCAPE:
                        this.collapse(b);
                        break;
                    default:
                        i = !1, e = this.previousFilter || "", f = String.fromCharCode(b.keyCode), g = !1, clearTimeout(this.filterTimer), f === e ? g = !0 : f = e + f, h = new RegExp("^" + c(f), "i"), d = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return h.test(a(this).children("a").text())
                        }), d = g && -1 !== d.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : d, d.length || (f = String.fromCharCode(b.keyCode), h = new RegExp("^" + c(f), "i"), d = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return h.test(a(this).children("a").text())
                        })), d.length ? (this.focus(b, d), d.length > 1 ? (this.previousFilter = f, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                }
                i && b.preventDefault()
            },
            _activate: function(a) {
                this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(a) : this.select(a))
            },
            refresh: function() {
                var b, c = this.options.icons.submenu,
                    d = this.element.find(this.options.menus);
                d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var b = a(this),
                        d = b.prev("a"),
                        e = a("<span>").addClass("ui-menu-icon ui-icon " + c).data("ui-menu-submenu-carat", !0);
                    d.attr("aria-haspopup", "true").prepend(e), b.attr("aria-labelledby", d.attr("id"))
                }), b = d.add(this.element), b.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), b.children(":not(.ui-menu-item)").each(function() {
                    var b = a(this);
                    /[^\-\u2014\u2013\s]/.test(b.text()) || b.addClass("ui-widget-content ui-menu-divider")
                }), b.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(a, b) {
                "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu), this._super(a, b)
            },
            focus: function(a, b) {
                var c, d;
                this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), d = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), c = b.children(".ui-menu"), c.length && /^mouse/.test(a.type) && this._startOpening(c), this.activeMenu = b.parent(), this._trigger("focus", a, {
                    item: b
                })
            },
            _scrollIntoView: function(b) {
                var c, d, e, f, g, h;
                this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.height(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h))
            },
            blur: function(a, b) {
                b || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {
                    item: this.active
                }))
            },
            _startOpening: function(a) {
                clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(a)
                }, this.delay))
            },
            _open: function(b) {
                var c = a.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
            },
            collapseAll: function(b, c) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
                    d.length || (d = this.element), this._close(d), this.blur(b), this.activeMenu = d
                }, this.delay)
            },
            _close: function(a) {
                a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
            },
            collapse: function(a) {
                var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                b && b.length && (this._close(), this.focus(a, b))
            },
            expand: function(a) {
                var b = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                b && b.length && (this._open(b.parent()), this._delay(function() {
                    this.focus(a, b)
                }))
            },
            next: function(a) {
                this._move("next", "first", a)
            },
            previous: function(a) {
                this._move("prev", "last", a)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(a, b, c) {
                var d;
                this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.children(".ui-menu-item")[b]()), this.focus(c, d)
            },
            nextPage: function(b) {
                var c, d, e;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return c = a(this), c.offset().top - d - e < 0
                }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(b)
            },
            previousPage: function(b) {
                var c, d, e;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return c = a(this), c.offset().top - d + e > 0
                }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(b)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(b) {
                this.active = this.active || a(b.target).closest(".ui-menu-item");
                var c = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c)
            }
        })
    }(jQuery),
    function(a, b) {
        a.widget("ui.progressbar", {
            version: "1.10.1",
            options: {
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
            },
            _destroy: function() {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
            },
            value: function(a) {
                return a === b ? this.options.value : (this.options.value = this._constrainedValue(a), void this._refreshValue())
            },
            _constrainedValue: function(a) {
                return a === b && (a = this.options.value), this.indeterminate = a === !1, "number" != typeof a && (a = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, a))
            },
            _setOptions: function(a) {
                var b = a.value;
                delete a.value, this._super(a), this.options.value = this._constrainedValue(b), this._refreshValue()
            },
            _setOption: function(a, b) {
                "max" === a && (b = Math.max(this.min, b)), this._super(a, b)
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function() {
                var b = this.options.value,
                    c = this._percentage();
                this.valueDiv.toggle(this.indeterminate || b > this.min).toggleClass("ui-corner-right", b === this.options.max).width(c.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": b
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== b && (this.oldValue = b, this._trigger("change")), b === this.options.max && this._trigger("complete")
            }
        })
    }(jQuery),
    function(a, b) {
        var c = 5;
        a.widget("ui.slider", a.ui.mouse, {
            version: "1.10.1",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var b, c, d = this.options,
                    e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    f = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                    g = [];
                for (c = d.values && d.values.length || 1, e.length > c && (e.slice(c).remove(), e = e.slice(0, c)), b = e.length; c > b; b++) g.push(f);
                this.handles = e.add(a(g.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(b) {
                    a(this).data("ui-slider-handle-index", b)
                })
            },
            _createRange: function() {
                var b = this.options,
                    c = "";
                b.range ? (b.range === !0 && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [b.values[0], b.values[0]] : a.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                    left: "",
                    bottom: ""
                }) : (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(c + ("min" === b.range || "max" === b.range ? " ui-slider-range-" + b.range : ""))) : this.range = a([])
            },
            _setupEvents: function() {
                var a = this.handles.add(this.range).filter("a");
                this._off(a), this._on(a, this._handleEvents), this._hoverable(a), this._focusable(a)
            },
            _destroy: function() {
                this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
            },
            _mouseCapture: function(b) {
                var c, d, e, f, g, h, i, j, k = this,
                    l = this.options;
                return l.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), c = {
                    x: b.pageX,
                    y: b.pageY
                }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, this.handles.each(function(b) {
                    var c = Math.abs(d - k.values(b));
                    (e > c || e === c && (b === k._lastChangedValue || k.values(b) === l.min)) && (e = c, f = a(this), g = b)
                }), h = this._start(b, g), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = g, f.addClass("ui-state-active").focus(), i = f.offset(), j = !a(b.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = j ? {
                    left: 0,
                    top: 0
                } : {
                    left: b.pageX - i.left - f.width() / 2,
                    top: b.pageY - i.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, d), this._animateOff = !0, !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(a) {
                var b = {
                        x: a.pageX,
                        y: a.pageY
                    },
                    c = this._normValueFromMouse(b);
                return this._slide(a, this._handleIndex, c), !1
            },
            _mouseStop: function(a) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(a) {
                var b, c, d, e, f;
                return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), 0 > d && (d = 0), "vertical" === this.orientation && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f)
            },
            _start: function(a, b) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c)
            },
            _slide: function(a, b, c) {
                var d, e, f;
                this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === b && c > d || 1 === b && d > c) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: c,
                    values: e
                }), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c, !0))) : c !== this.value() && (f = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: c
                }), f !== !1 && this.value(c))
            },
            _stop: function(a, b) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c)
            },
            _change: function(a, b) {
                if (!this._keySliding && !this._mouseSliding) {
                    var c = {
                        handle: this.handles[b],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._lastChangedValue = b, this._trigger("change", a, c)
                }
            },
            value: function(a) {
                return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), this._change(null, 0), void 0) : this._value()
            },
            values: function(b, c) {
                var d, e, f;
                if (arguments.length > 1) return this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), this._change(null, b), void 0;
                if (!arguments.length) return this._values();
                if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value();
                for (d = this.options.values, e = arguments[0], f = 0; f < d.length; f += 1) d[f] = this._trimAlignValue(e[f]), this._change(null, f);
                this._refreshValue()
            },
            _setOption: function(b, c) {
                var d, e = 0;
                switch ("range" === b && this.options.range === !0 && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), a.isArray(this.options.values) && (e = this.options.values.length), a.Widget.prototype._setOption.apply(this, arguments), b) {
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), d = 0; e > d; d += 1) this._change(null, d);
                        this._animateOff = !1;
                        break;
                    case "min":
                    case "max":
                        this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _value: function() {
                var a = this.options.value;
                return a = this._trimAlignValue(a)
            },
            _values: function(a) {
                var b, c, d;
                if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b);
                if (this.options.values && this.options.values.length) {
                    for (c = this.options.values.slice(), d = 0; d < c.length; d += 1) c[d] = this._trimAlignValue(c[d]);
                    return c
                }
                return []
            },
            _trimAlignValue: function(a) {
                if (a <= this._valueMin()) return this._valueMin();
                if (a >= this._valueMax()) return this._valueMax();
                var b = this.options.step > 0 ? this.options.step : 1,
                    c = (a - this._valueMin()) % b,
                    d = a - c;
                return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var b, c, d, e, f, g = this.options.range,
                    h = this.options,
                    i = this,
                    j = this._animateOff ? !1 : h.animate,
                    k = {};
                this.options.values && this.options.values.length ? this.handles.each(function(d) {
                    c = (i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100, k["horizontal" === i.orientation ? "left" : "bottom"] = c + "%", a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), i.options.range === !0 && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                        left: c + "%"
                    }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                        width: c - b + "%"
                    }, {
                        queue: !1,
                        duration: h.animate
                    })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                        bottom: c + "%"
                    }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                        height: c - b + "%"
                    }, {
                        queue: !1,
                        duration: h.animate
                    }))), b = c
                }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? (d - e) / (f - e) * 100 : 0, k["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                    width: c + "%"
                }, h.animate), "max" === g && "horizontal" === this.orientation && this.range[j ? "animate" : "css"]({
                    width: 100 - c + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                }), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                    height: c + "%"
                }, h.animate), "max" === g && "vertical" === this.orientation && this.range[j ? "animate" : "css"]({
                    height: 100 - c + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                }))
            },
            _handleEvents: {
                keydown: function(b) {
                    var d, e, f, g, h = a(b.target).data("ui-slider-handle-index");
                    switch (b.keyCode) {
                        case a.ui.keyCode.HOME:
                        case a.ui.keyCode.END:
                        case a.ui.keyCode.PAGE_UP:
                        case a.ui.keyCode.PAGE_DOWN:
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (b.preventDefault(), !this._keySliding && (this._keySliding = !0, a(b.target).addClass("ui-state-active"), d = this._start(b, h), d === !1)) return
                    }
                    switch (g = this.options.step, e = f = this.options.values && this.options.values.length ? this.values(h) : this.value(), b.keyCode) {
                        case a.ui.keyCode.HOME:
                            f = this._valueMin();
                            break;
                        case a.ui.keyCode.END:
                            f = this._valueMax();
                            break;
                        case a.ui.keyCode.PAGE_UP:
                            f = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / c);
                            break;
                        case a.ui.keyCode.PAGE_DOWN:
                            f = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / c);
                            break;
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                            if (e === this._valueMax()) return;
                            f = this._trimAlignValue(e + g);
                            break;
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (e === this._valueMin()) return;
                            f = this._trimAlignValue(e - g)
                    }
                    this._slide(b, h, f)
                },
                click: function(a) {
                    a.preventDefault()
                },
                keyup: function(b) {
                    var c = a(b.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), a(b.target).removeClass("ui-state-active"))
                }
            }
        })
    }(jQuery),
    function(a) {
        function b(a) {
            return function() {
                var b = this.element.val();
                a.apply(this, arguments), this._refresh(), b !== this.element.val() && this._trigger("change")
            }
        }
        a.widget("ui.spinner", {
            version: "1.10.1",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function() {
                var b = {},
                    c = this.element;
                return a.each(["min", "max", "step"], function(a, d) {
                    var e = c.attr(d);
                    void 0 !== e && e.length && (b[d] = e)
                }), b
            },
            _events: {
                keydown: function(a) {
                    this._start(a) && this._keydown(a) && a.preventDefault()
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val()
                },
                blur: function(a) {
                    return this.cancelBlur ? void delete this.cancelBlur : (this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", a)))
                },
                mousewheel: function(a, b) {
                    return b ? this.spinning || this._start(a) ? (this._spin((b > 0 ? 1 : -1) * this.options.step, a), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(a)
                    }, 100), a.preventDefault(), void 0) : !1 : void 0
                },
                "mousedown .ui-spinner-button": function(b) {
                    function c() {
                        var a = this.element[0] === this.document[0].activeElement;
                        a || (this.element.focus(), this.previous = d, this._delay(function() {
                            this.previous = d
                        }))
                    }
                    var d;
                    d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), b.preventDefault(), c.call(this), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, c.call(this)
                    }), this._start(b) !== !1 && this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(b) {
                    return a(b.currentTarget).hasClass("ui-state-active") ? this._start(b) === !1 ? !1 : void this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b) : void 0
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function() {
                var a = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton"), this.buttons = a.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * a.height()) && a.height() > 0 && a.height(a.height()), this.options.disabled && this.disable()
            },
            _keydown: function(b) {
                var c = this.options,
                    d = a.ui.keyCode;
                switch (b.keyCode) {
                    case d.UP:
                        return this._repeat(null, 1, b), !0;
                    case d.DOWN:
                        return this._repeat(null, -1, b), !0;
                    case d.PAGE_UP:
                        return this._repeat(null, c.page, b), !0;
                    case d.PAGE_DOWN:
                        return this._repeat(null, -c.page, b), !0
                }
                return !1
            },
            _uiSpinnerHtml: function() {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
            },
            _buttonHtml: function() {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
            },
            _start: function(a) {
                return this.spinning || this._trigger("start", a) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
            },
            _repeat: function(a, b, c) {
                a = a || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                    this._repeat(40, b, c)
                }, a), this._spin(b * this.options.step, c)
            },
            _spin: function(a, b) {
                var c = this.value() || 0;
                this.counter || (this.counter = 1), c = this._adjustValue(c + a * this._increment(this.counter)), this.spinning && this._trigger("spin", b, {
                    value: c
                }) === !1 || (this._value(c), this.counter++)
            },
            _increment: function(b) {
                var c = this.options.incremental;
                return c ? a.isFunction(c) ? c(b) : Math.floor(b * b * b / 5e4 - b * b / 500 + 17 * b / 200 + 1) : 1
            },
            _precision: function() {
                var a = this._precisionOf(this.options.step);
                return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a
            },
            _precisionOf: function(a) {
                var b = a.toString(),
                    c = b.indexOf(".");
                return -1 === c ? 0 : b.length - c - 1
            },
            _adjustValue: function(a) {
                var b, c, d = this.options;
                return b = null !== d.min ? d.min : 0, c = a - b, c = Math.round(c / d.step) * d.step, a = b + c, a = parseFloat(a.toFixed(this._precision())), null !== d.max && a > d.max ? d.max : null !== d.min && a < d.min ? d.min : a
            },
            _stop: function(a) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", a))
            },
            _setOption: function(a, b) {
                if ("culture" === a || "numberFormat" === a) {
                    var c = this._parse(this.element.val());
                    return this.options[a] = b, void this.element.val(this._format(c))
                }("max" === a || "min" === a || "step" === a) && "string" == typeof b && (b = this._parse(b)), "icons" === a && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down)), this._super(a, b), "disabled" === a && (b ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
            },
            _setOptions: b(function(a) {
                this._super(a), this._value(this.element.val())
            }),
            _parse: function(a) {
                return "string" == typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a), "" === a || isNaN(a) ? null : a
            },
            _format: function(a) {
                return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            _value: function(a, b) {
                var c;
                "" !== a && (c = this._parse(a), null !== c && (b || (c = this._adjustValue(c)), a = this._format(c))), this.element.val(a), this._refresh()
            },
            _destroy: function() {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: b(function(a) {
                this._stepUp(a)
            }),
            _stepUp: function(a) {
                this._start() && (this._spin((a || 1) * this.options.step), this._stop())
            },
            stepDown: b(function(a) {
                this._stepDown(a)
            }),
            _stepDown: function(a) {
                this._start() && (this._spin((a || 1) * -this.options.step), this._stop())
            },
            pageUp: b(function(a) {
                this._stepUp((a || 1) * this.options.page)
            }),
            pageDown: b(function(a) {
                this._stepDown((a || 1) * this.options.page)
            }),
            value: function(a) {
                return arguments.length ? void b(this._value).call(this, a) : this._parse(this.element.val())
            },
            widget: function() {
                return this.uiSpinner
            }
        })
    }(jQuery),
    function(a, b) {
        function c() {
            return ++e
        }

        function d(a) {
            return a.hash.length > 1 && decodeURIComponent(a.href.replace(f, "")) === decodeURIComponent(location.href.replace(f, ""))
        }
        var e = 0,
            f = /#.*$/;
        a.widget("ui.tabs", {
            version: "1.10.1",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _create: function() {
                var b = this,
                    c = this.options;
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(b) {
                    a(this).is(".ui-state-disabled") && b.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    a(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this._processTabs(), c.active = this._initialActive(), a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
                    return b.tabs.index(a)
                }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(c.active) : this.active = a(), this._refresh(), this.active.length && this.load(c.active)
            },
            _initialActive: function() {
                var b = this.options.active,
                    c = this.options.collapsible,
                    d = location.hash.substring(1);
                return null === b && (d && this.tabs.each(function(c, e) {
                    return a(e).attr("aria-controls") === d ? (b = c, !1) : void 0
                }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === b || -1 === b) && (b = this.tabs.length ? 0 : !1)), b !== !1 && (b = this.tabs.index(this.tabs.eq(b)), -1 === b && (b = c ? !1 : 0)), !c && b === !1 && this.anchors.length && (b = 0), b
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : a()
                }
            },
            _tabKeydown: function(b) {
                var c = a(this.document[0].activeElement).closest("li"),
                    d = this.tabs.index(c),
                    e = !0;
                if (!this._handlePageNav(b)) {
                    switch (b.keyCode) {
                        case a.ui.keyCode.RIGHT:
                        case a.ui.keyCode.DOWN:
                            d++;
                            break;
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.LEFT:
                            e = !1, d--;
                            break;
                        case a.ui.keyCode.END:
                            d = this.anchors.length - 1;
                            break;
                        case a.ui.keyCode.HOME:
                            d = 0;
                            break;
                        case a.ui.keyCode.SPACE:
                            return b.preventDefault(), clearTimeout(this.activating), this._activate(d), void 0;
                        case a.ui.keyCode.ENTER:
                            return b.preventDefault(), clearTimeout(this.activating), this._activate(d === this.options.active ? !1 : d), void 0;
                        default:
                            return
                    }
                    b.preventDefault(), clearTimeout(this.activating), d = this._focusNextTab(d, e), b.ctrlKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", d)
                    }, this.delay))
                }
            },
            _panelKeydown: function(b) {
                this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(), this.active.focus())
            },
            _handlePageNav: function(b) {
                return b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function(b, c) {
                function d() {
                    return b > e && (b = 0), 0 > b && (b = e), b
                }
                for (var e = this.tabs.length - 1; - 1 !== a.inArray(d(), this.options.disabled);) b = c ? b + 1 : b - 1;
                return b
            },
            _focusNextTab: function(a, b) {
                return a = this._findNextTab(a, b), this.tabs.eq(a).focus(), a
            },
            _setOption: function(a, b) {
                return "active" === a ? void this._activate(b) : "disabled" === a ? void this._setupDisabled(b) : (this._super(a, b), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), !b && this.options.active === !1 && this._activate(0)), "event" === a && this._setupEvents(b), "heightStyle" === a && this._setupHeightStyle(b), void 0)
            },
            _tabId: function(a) {
                return a.attr("aria-controls") || "ui-tabs-" + c()
            },
            _sanitizeSelector: function(a) {
                return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var b = this.options,
                    c = this.tablist.children(":has(a[href])");
                b.disabled = a.map(c.filter(".ui-state-disabled"), function(a) {
                    return c.index(a)
                }), this._processTabs(), b.active !== !1 && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, this.active = a()), this._refresh()
            },
            _refresh: function() {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var b = this;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }), this.anchors = this.tabs.map(function() {
                    return a("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }), this.panels = a(), this.anchors.each(function(c, e) {
                    var f, g, h, i = a(e).uniqueId().attr("id"),
                        j = a(e).closest("li"),
                        k = j.attr("aria-controls");
                    d(e) ? (f = e.hash, g = b.element.find(b._sanitizeSelector(f))) : (h = b._tabId(j), f = "#" + h, g = b.element.find(f), g.length || (g = b._createPanel(h), g.insertAfter(b.panels[c - 1] || b.tablist)), g.attr("aria-live", "polite")), g.length && (b.panels = b.panels.add(g)), k && j.data("ui-tabs-aria-controls", k), j.attr({
                        "aria-controls": f.substring(1),
                        "aria-labelledby": i
                    }), g.attr("aria-labelledby", i)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
            },
            _getList: function() {
                return this.element.find("ol,ul").eq(0)
            },
            _createPanel: function(b) {
                return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function(b) {
                a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
                for (var c, d = 0; c = this.tabs[d]; d++) b === !0 || -1 !== a.inArray(d, b) ? a(c).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = b
            },
            _setupEvents: function(b) {
                var c = {
                    click: function(a) {
                        a.preventDefault()
                    }
                };
                b && a.each(b.split(" "), function(a, b) {
                    c[b] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, c), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(b) {
                var c, d = this.element.parent();
                "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                    var b = a(this),
                        d = b.css("position");
                    "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function() {
                    c -= a(this).outerHeight(!0)
                }), this.panels.each(function() {
                    a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function() {
                    c = Math.max(c, a(this).height("").height())
                }).height(c))
            },
            _eventHandler: function(b) {
                var c = this.options,
                    d = this.active,
                    e = a(b.currentTarget),
                    f = e.closest("li"),
                    g = f[0] === d[0],
                    h = g && c.collapsible,
                    i = h ? a() : this._getPanelForTab(f),
                    j = d.length ? this._getPanelForTab(d) : a(),
                    k = {
                        oldTab: d,
                        oldPanel: j,
                        newTab: h ? a() : f,
                        newPanel: i
                    };
                b.preventDefault(), f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !c.collapsible || this._trigger("beforeActivate", b, k) === !1 || (c.active = h ? !1 : this.tabs.index(f), this.active = g ? a() : f, this.xhr && this.xhr.abort(), !j.length && !i.length && a.error("jQuery UI Tabs: Mismatching fragment identifier."), i.length && this.load(this.tabs.index(f), b), this._toggle(b, k))
            },
            _toggle: function(b, c) {
                function d() {
                    f.running = !1, f._trigger("activate", b, c)
                }

                function e() {
                    c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), d())
                }
                var f = this,
                    g = c.newPanel,
                    h = c.oldPanel;
                this.running = !0, h.length && this.options.hide ? this._hide(h, this.options.hide, function() {
                    c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), e()
                }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h.hide(), e()), h.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), c.oldTab.attr("aria-selected", "false"), g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function() {
                    return 0 === a(this).attr("tabIndex")
                }).attr("tabIndex", -1), g.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }), c.newTab.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _activate: function(b) {
                var c, d = this._findActive(b);
                d[0] !== this.active[0] && (d.length || (d = this.active), c = d.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: c,
                    currentTarget: c,
                    preventDefault: a.noop
                }))
            },
            _findActive: function(b) {
                return b === !1 ? a() : this.tabs.eq(b)
            },
            _getIndex: function(a) {
                return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                    a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function() {
                    var b = a(this),
                        c = b.data("ui-tabs-aria-controls");
                    c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(c) {
                var d = this.options.disabled;
                d !== !1 && (c === b ? d = !1 : (c = this._getIndex(c), d = a.isArray(d) ? a.map(d, function(a) {
                    return a !== c ? a : null
                }) : a.map(this.tabs, function(a, b) {
                    return b !== c ? b : null
                })), this._setupDisabled(d))
            },
            disable: function(c) {
                var d = this.options.disabled;
                if (d !== !0) {
                    if (c === b) d = !0;
                    else {
                        if (c = this._getIndex(c), -1 !== a.inArray(c, d)) return;
                        d = a.isArray(d) ? a.merge([c], d).sort() : [c]
                    }
                    this._setupDisabled(d)
                }
            },
            load: function(b, c) {
                b = this._getIndex(b);
                var e = this,
                    f = this.tabs.eq(b),
                    g = f.find(".ui-tabs-anchor"),
                    h = this._getPanelForTab(f),
                    i = {
                        tab: f,
                        panel: h
                    };
                d(g[0]) || (this.xhr = a.ajax(this._ajaxSettings(g, c, i)), this.xhr && "canceled" !== this.xhr.statusText && (f.addClass("ui-tabs-loading"), h.attr("aria-busy", "true"), this.xhr.success(function(a) {
                    setTimeout(function() {
                        h.html(a), e._trigger("load", c, i)
                    }, 1)
                }).complete(function(a, b) {
                    setTimeout(function() {
                        "abort" === b && e.panels.stop(!1, !0), f.removeClass("ui-tabs-loading"), h.removeAttr("aria-busy"), a === e.xhr && delete e.xhr
                    }, 1)
                })))
            },
            _ajaxSettings: function(b, c, d) {
                var e = this;
                return {
                    url: b.attr("href"),
                    beforeSend: function(b, f) {
                        return e._trigger("beforeLoad", c, a.extend({
                            jqXHR: b,
                            ajaxSettings: f
                        }, d))
                    }
                }
            },
            _getPanelForTab: function(b) {
                var c = a(b).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + c))
            }
        })
    }(jQuery),
    function(a) {
        function b(b, c) {
            var d = (b.attr("aria-describedby") || "").split(/\s+/);
            d.push(c), b.data("ui-tooltip-id", c).attr("aria-describedby", a.trim(d.join(" ")))
        }

        function c(b) {
            var c = b.data("ui-tooltip-id"),
                d = (b.attr("aria-describedby") || "").split(/\s+/),
                e = a.inArray(c, d); - 1 !== e && d.splice(e, 1), b.removeData("ui-tooltip-id"), d = a.trim(d.join(" ")), d ? b.attr("aria-describedby", d) : b.removeAttr("aria-describedby")
        }
        var d = 0;
        a.widget("ui.tooltip", {
            version: "1.10.1",
            options: {
                content: function() {
                    var b = a(this).attr("title") || "";
                    return a("<a>").text(b).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
            },
            _setOption: function(b, c) {
                var d = this;
                return "disabled" === b ? (this[c ? "_disable" : "_enable"](), void(this.options[b] = c)) : (this._super(b, c), void("content" === b && a.each(this.tooltips, function(a, b) {
                    d._updateContent(b)
                })))
            },
            _disable: function() {
                var b = this;
                a.each(this.tooltips, function(c, d) {
                    var e = a.Event("blur");
                    e.target = e.currentTarget = d[0], b.close(e, !0)
                }), this.element.find(this.options.items).addBack().each(function() {
                    var b = a(this);
                    b.is("[title]") && b.data("ui-tooltip-title", b.attr("title")).attr("title", "")
                })
            },
            _enable: function() {
                this.element.find(this.options.items).addBack().each(function() {
                    var b = a(this);
                    b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title"))
                })
            },
            open: function(b) {
                var c = this,
                    d = a(b ? b.target : this.element).closest(this.options.items);
                d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function() {
                    var b, d = a(this);
                    d.data("ui-tooltip-open") && (b = a.Event("blur"), b.target = b.currentTarget = this, c.close(b, !0)), d.attr("title") && (d.uniqueId(), c.parents[this.id] = {
                        element: this,
                        title: d.attr("title")
                    }, d.attr("title", ""))
                }), this._updateContent(d, b))
            },
            _updateContent: function(a, b) {
                var c, d = this.options.content,
                    e = this,
                    f = b ? b.type : null;
                return "string" == typeof d ? this._open(b, a, d) : (c = d.call(a[0], function(c) {
                    a.data("ui-tooltip-open") && e._delay(function() {
                        b && (b.type = f), this._open(b, a, c)
                    })
                }), void(c && this._open(b, a, c)))
            },
            _open: function(c, d, e) {
                function f(a) {
                    j.of = a, g.is(":hidden") || g.position(j)
                }
                var g, h, i, j = a.extend({}, this.options.position);
                if (e) {
                    if (g = this._find(d), g.length) return void g.find(".ui-tooltip-content").html(e);
                    d.is("[title]") && (c && "mouseover" === c.type ? d.attr("title", "") : d.removeAttr("title")), g = this._tooltip(d), b(d, g.attr("id")), g.find(".ui-tooltip-content").html(e), this.options.track && c && /^mouse/.test(c.type) ? (this._on(this.document, {
                        mousemove: f
                    }), f(c)) : g.position(a.extend({
                        of: d
                    }, this.options.position)), g.hide(), this._show(g, this.options.show), this.options.show && this.options.show.delay && (i = this.delayedShow = setInterval(function() {
                        g.is(":visible") && (f(j.of), clearInterval(i))
                    }, a.fx.interval)), this._trigger("open", c, {
                        tooltip: g
                    }), h = {
                        keyup: function(b) {
                            if (b.keyCode === a.ui.keyCode.ESCAPE) {
                                var c = a.Event(b);
                                c.currentTarget = d[0], this.close(c, !0)
                            }
                        },
                        remove: function() {
                            this._removeTooltip(g)
                        }
                    }, c && "mouseover" !== c.type || (h.mouseleave = "close"), c && "focusin" !== c.type || (h.focusout = "close"), this._on(!0, d, h)
                }
            },
            close: function(b) {
                var d = this,
                    e = a(b ? b.currentTarget : this.element),
                    f = this._find(e);
                this.closing || (clearInterval(this.delayedShow), e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title")), c(e), f.stop(!0), this._hide(f, this.options.hide, function() {
                    d._removeTooltip(a(this))
                }), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), b && "mouseleave" === b.type && a.each(this.parents, function(b, c) {
                    a(c.element).attr("title", c.title), delete d.parents[b]
                }), this.closing = !0, this._trigger("close", b, {
                    tooltip: f
                }), this.closing = !1)
            },
            _tooltip: function(b) {
                var c = "ui-tooltip-" + d++,
                    e = a("<div>").attr({
                        id: c,
                        role: "tooltip"
                    }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
                return a("<div>").addClass("ui-tooltip-content").appendTo(e), e.appendTo(this.document[0].body), this.tooltips[c] = b, e
            },
            _find: function(b) {
                var c = b.data("ui-tooltip-id");
                return c ? a("#" + c) : a()
            },
            _removeTooltip: function(a) {
                a.remove(), delete this.tooltips[a.attr("id")]
            },
            _destroy: function() {
                var b = this;
                a.each(this.tooltips, function(c, d) {
                    var e = a.Event("blur");
                    e.target = e.currentTarget = d[0], b.close(e, !0), a("#" + c).remove(), d.data("ui-tooltip-title") && (d.attr("title", d.data("ui-tooltip-title")), d.removeData("ui-tooltip-title"))
                })
            }
        })
    }(jQuery), jQuery.effects || function(a, b) {
        var c = "ui-effects-";
        a.effects = {
                effect: {}
            },
            function(a, b) {
                function c(a, b, c) {
                    var d = l[b.type] || {};
                    return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a)
                }

                function d(b) {
                    var c = j(),
                        d = c._rgba = [];
                    return b = b.toLowerCase(), o(i, function(a, e) {
                        var f, g = e.re.exec(b),
                            h = g && e.parse(g),
                            i = e.space || "rgba";
                        return h ? (f = c[i](h), c[k[i].cache] = f[k[i].cache], d = c._rgba = f._rgba, !1) : void 0
                    }), d.length ? ("0,0,0,0" === d.join() && a.extend(d, f.transparent), c) : f[b]
                }

                function e(a, b, c) {
                    return c = (c + 1) % 1, 1 > 6 * c ? a + (b - a) * c * 6 : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
                }
                var f, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    h = /^([\-+])=\s*(\d+\.?\d*)/,
                    i = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(a) {
                            return [a[1], a[2], a[3], a[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(a) {
                            return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(a) {
                            return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(a) {
                            return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(a) {
                            return [a[1], a[2] / 100, a[3] / 100, a[4]]
                        }
                    }],
                    j = a.Color = function(b, c, d, e) {
                        return new a.Color.fn.parse(b, c, d, e)
                    },
                    k = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    l = {
                        "byte": {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    m = j.support = {},
                    n = a("<p>")[0],
                    o = a.each;
                n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, o(k, function(a, b) {
                    b.cache = "_" + a, b.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), j.fn = a.extend(j.prototype, {
                    parse: function(e, g, h, i) {
                        if (e === b) return this._rgba = [null, null, null, null], this;
                        (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
                        var l = this,
                            m = a.type(e),
                            n = this._rgba = [];
                        return g !== b && (e = [e, g, h, i], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function(a, b) {
                            n[b.idx] = c(e[b.idx], b)
                        }), this) : "object" === m ? (e instanceof j ? o(k, function(a, b) {
                            e[b.cache] && (l[b.cache] = e[b.cache].slice())
                        }) : o(k, function(b, d) {
                            var f = d.cache;
                            o(d.props, function(a, b) {
                                if (!l[f] && d.to) {
                                    if ("alpha" === a || null == e[a]) return;
                                    l[f] = d.to(l._rgba)
                                }
                                l[f][b.idx] = c(e[a], b, !0)
                            }), l[f] && a.inArray(null, l[f].slice(0, 3)) < 0 && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])))
                        }), this) : void 0
                    },
                    is: function(a) {
                        var b = j(a),
                            c = !0,
                            d = this;
                        return o(k, function(a, e) {
                            var f, g = b[e.cache];
                            return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], o(e.props, function(a, b) {
                                return null != g[b.idx] ? c = g[b.idx] === f[b.idx] : void 0
                            })), c
                        }), c
                    },
                    _space: function() {
                        var a = [],
                            b = this;
                        return o(k, function(c, d) {
                            b[d.cache] && a.push(c)
                        }), a.pop()
                    },
                    transition: function(a, b) {
                        var d = j(a),
                            e = d._space(),
                            f = k[e],
                            g = 0 === this.alpha() ? j("transparent") : this,
                            h = g[f.cache] || f.to(g._rgba),
                            i = h.slice();
                        return d = d[f.cache], o(f.props, function(a, e) {
                            var f = e.idx,
                                g = h[f],
                                j = d[f],
                                k = l[e.type] || {};
                            null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = c((j - g) * b + g, e)))
                        }), this[e](i)
                    },
                    blend: function(b) {
                        if (1 === this._rgba[3]) return this;
                        var c = this._rgba.slice(),
                            d = c.pop(),
                            e = j(b)._rgba;
                        return j(a.map(c, function(a, b) {
                            return (1 - d) * e[b] + d * a
                        }))
                    },
                    toRgbaString: function() {
                        var b = "rgba(",
                            c = a.map(this._rgba, function(a, b) {
                                return null == a ? b > 2 ? 1 : 0 : a
                            });
                        return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")"
                    },
                    toHslaString: function() {
                        var b = "hsla(",
                            c = a.map(this.hsla(), function(a, b) {
                                return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
                            });
                        return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")"
                    },
                    toHexString: function(b) {
                        var c = this._rgba.slice(),
                            d = c.pop();
                        return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) {
                            return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), j.fn.parse.prototype = j.fn, k.hsla.to = function(a) {
                    if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                    var b, c, d = a[0] / 255,
                        e = a[1] / 255,
                        f = a[2] / 255,
                        g = a[3],
                        h = Math.max(d, e, f),
                        i = Math.min(d, e, f),
                        j = h - i,
                        k = h + i,
                        l = .5 * k;
                    return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
                }, k.hsla.from = function(a) {
                    if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                    var b = a[0] / 360,
                        c = a[1],
                        d = a[2],
                        f = a[3],
                        g = .5 >= d ? d * (1 + c) : d + c - d * c,
                        h = 2 * d - g;
                    return [Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f]
                }, o(k, function(d, e) {
                    var f = e.props,
                        g = e.cache,
                        i = e.to,
                        k = e.from;
                    j.fn[d] = function(d) {
                        if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice();
                        var e, h = a.type(d),
                            l = "array" === h || "object" === h ? d : arguments,
                            m = this[g].slice();
                        return o(f, function(a, b) {
                            var d = l["object" === h ? a : b.idx];
                            null == d && (d = m[b.idx]), m[b.idx] = c(d, b)
                        }), k ? (e = j(k(m)), e[g] = m, e) : j(m)
                    }, o(f, function(b, c) {
                        j.fn[b] || (j.fn[b] = function(e) {
                            var f, g = a.type(e),
                                i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d,
                                j = this[i](),
                                k = j[c.idx];
                            return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[c.idx] = e, this[i](j)))
                        })
                    })
                }), j.hook = function(b) {
                    var c = b.split(" ");
                    o(c, function(b, c) {
                        a.cssHooks[c] = {
                            set: function(b, e) {
                                var f, g, h = "";
                                if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                                    if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
                                        for (g = "backgroundColor" === c ? b.parentNode : b;
                                            ("" === h || "transparent" === h) && g && g.style;) try {
                                            h = a.css(g, "backgroundColor"), g = g.parentNode
                                        } catch (i) {}
                                        e = e.blend(h && "transparent" !== h ? h : "_default")
                                    }
                                    e = e.toRgbaString()
                                }
                                try {
                                    b.style[c] = e
                                } catch (i) {}
                            }
                        }, a.fx.step[c] = function(b) {
                            b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
                        }
                    })
                }, j.hook(g), a.cssHooks.borderColor = {
                    expand: function(a) {
                        var b = {};
                        return o(["Top", "Right", "Bottom", "Left"], function(c, d) {
                            b["border" + d + "Color"] = a
                        }), b
                    }
                }, f = a.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(jQuery),
            function() {
                function c(b) {
                    var c, d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle,
                        f = {};
                    if (e && e.length && e[0] && e[e[0]])
                        for (d = e.length; d--;) c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]);
                    else
                        for (c in e) "string" == typeof e[c] && (f[c] = e[c]);
                    return f
                }

                function d(b, c) {
                    var d, e, g = {};
                    for (d in c) e = c[d], b[d] !== e && !f[d] && (a.fx.step[d] || !isNaN(parseFloat(e))) && (g[d] = e);
                    return g
                }
                var e = ["add", "remove", "toggle"],
                    f = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(b, c) {
                    a.fx.step[c] = function(a) {
                        ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (jQuery.style(a.elem, c, a.end), a.setAttr = !0)
                    }
                }), a.fn.addBack || (a.fn.addBack = function(a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                }), a.effects.animateClass = function(b, f, g, h) {
                    var i = a.speed(f, g, h);
                    return this.queue(function() {
                        var f, g = a(this),
                            h = g.attr("class") || "",
                            j = i.children ? g.find("*").addBack() : g;
                        j = j.map(function() {
                            var b = a(this);
                            return {
                                el: b,
                                start: c(this)
                            }
                        }), f = function() {
                            a.each(e, function(a, c) {
                                b[c] && g[c + "Class"](b[c])
                            })
                        }, f(), j = j.map(function() {
                            return this.end = c(this.el[0]), this.diff = d(this.start, this.end), this
                        }), g.attr("class", h), j = j.map(function() {
                            var b = this,
                                c = a.Deferred(),
                                d = a.extend({}, i, {
                                    queue: !1,
                                    complete: function() {
                                        c.resolve(b)
                                    }
                                });
                            return this.el.animate(this.diff, d), c.promise()
                        }), a.when.apply(a, j.get()).done(function() {
                            f(), a.each(arguments, function() {
                                var b = this.el;
                                a.each(this.diff, function(a) {
                                    b.css(a, "")
                                })
                            }), i.complete.call(g[0])
                        })
                    })
                }, a.fn.extend({
                    _addClass: a.fn.addClass,
                    addClass: function(b, c, d, e) {
                        return c ? a.effects.animateClass.call(this, {
                            add: b
                        }, c, d, e) : this._addClass(b)
                    },
                    _removeClass: a.fn.removeClass,
                    removeClass: function(b, c, d, e) {
                        return arguments.length > 1 ? a.effects.animateClass.call(this, {
                            remove: b
                        }, c, d, e) : this._removeClass.apply(this, arguments)
                    },
                    _toggleClass: a.fn.toggleClass,
                    toggleClass: function(c, d, e, f, g) {
                        return "boolean" == typeof d || d === b ? e ? a.effects.animateClass.call(this, d ? {
                            add: c
                        } : {
                            remove: c
                        }, e, f, g) : this._toggleClass(c, d) : a.effects.animateClass.call(this, {
                            toggle: c
                        }, d, e, f)
                    },
                    switchClass: function(b, c, d, e, f) {
                        return a.effects.animateClass.call(this, {
                            add: c,
                            remove: b
                        }, d, e, f)
                    }
                })
            }(),
            function() {
                function d(b, c, d, e) {
                    return a.isPlainObject(b) && (c = b, b = b.effect), b = {
                        effect: b
                    }, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
                }

                function e(b) {
                    return !b || "number" == typeof b || a.fx.speeds[b] ? !0 : "string" == typeof b && !a.effects.effect[b]
                }
                a.extend(a.effects, {
                    version: "1.10.1",
                    save: function(a, b) {
                        for (var d = 0; d < b.length; d++) null !== b[d] && a.data(c + b[d], a[0].style[b[d]])
                    },
                    restore: function(a, d) {
                        var e, f;
                        for (f = 0; f < d.length; f++) null !== d[f] && (e = a.data(c + d[f]), e === b && (e = ""), a.css(d[f], e))
                    },
                    setMode: function(a, b) {
                        return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
                    },
                    getBaseline: function(a, b) {
                        var c, d;
                        switch (a[0]) {
                            case "top":
                                c = 0;
                                break;
                            case "middle":
                                c = .5;
                                break;
                            case "bottom":
                                c = 1;
                                break;
                            default:
                                c = a[0] / b.height
                        }
                        switch (a[1]) {
                            case "left":
                                d = 0;
                                break;
                            case "center":
                                d = .5;
                                break;
                            case "right":
                                d = 1;
                                break;
                            default:
                                d = a[1] / b.width
                        }
                        return {
                            x: d,
                            y: c
                        }
                    },
                    createWrapper: function(b) {
                        if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                        var c = {
                                width: b.outerWidth(!0),
                                height: b.outerHeight(!0),
                                "float": b.css("float")
                            },
                            d = a("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            e = {
                                width: b.width(),
                                height: b.height()
                            },
                            f = document.activeElement;
                        try {
                            f.id
                        } catch (g) {
                            f = document.body
                        }
                        return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), "static" === b.css("position") ? (d.css({
                            position: "relative"
                        }), b.css({
                            position: "relative"
                        })) : (a.extend(c, {
                            position: b.css("position"),
                            zIndex: b.css("z-index")
                        }), a.each(["top", "left", "bottom", "right"], function(a, d) {
                            c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                        }), b.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), b.css(e), d.css(c).show()
                    },
                    removeWrapper: function(b) {
                        var c = document.activeElement;
                        return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), b
                    },
                    setTransition: function(b, c, d, e) {
                        return e = e || {}, a.each(c, function(a, c) {
                            var f = b.cssUnit(c);
                            f[0] > 0 && (e[c] = f[0] * d + f[1])
                        }), e
                    }
                }), a.fn.extend({
                    effect: function() {
                        function b(b) {
                            function d() {
                                a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b()
                            }
                            var e = a(this),
                                f = c.complete,
                                h = c.mode;
                            (e.is(":hidden") ? "hide" === h : "show" === h) ? d(): g.call(e[0], c, d)
                        }
                        var c = d.apply(this, arguments),
                            e = c.mode,
                            f = c.queue,
                            g = a.effects.effect[c.effect];
                        return a.fx.off || !g ? e ? this[e](c.duration, c.complete) : this.each(function() {
                            c.complete && c.complete.call(this)
                        }) : f === !1 ? this.each(b) : this.queue(f || "fx", b)
                    },
                    _show: a.fn.show,
                    show: function(a) {
                        if (e(a)) return this._show.apply(this, arguments);
                        var b = d.apply(this, arguments);
                        return b.mode = "show", this.effect.call(this, b)
                    },
                    _hide: a.fn.hide,
                    hide: function(a) {
                        if (e(a)) return this._hide.apply(this, arguments);
                        var b = d.apply(this, arguments);
                        return b.mode = "hide", this.effect.call(this, b)
                    },
                    __toggle: a.fn.toggle,
                    toggle: function(b) {
                        if (e(b) || "boolean" == typeof b || a.isFunction(b)) return this.__toggle.apply(this, arguments);
                        var c = d.apply(this, arguments);
                        return c.mode = "toggle", this.effect.call(this, c)
                    },
                    cssUnit: function(b) {
                        var c = this.css(b),
                            d = [];
                        return a.each(["em", "px", "%", "pt"], function(a, b) {
                            c.indexOf(b) > 0 && (d = [parseFloat(c), b])
                        }), d
                    }
                })
            }(),
            function() {
                var b = {};
                a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, c) {
                    b[c] = function(b) {
                        return Math.pow(b, a + 2)
                    }
                }), a.extend(b, {
                    Sine: function(a) {
                        return 1 - Math.cos(a * Math.PI / 2)
                    },
                    Circ: function(a) {
                        return 1 - Math.sqrt(1 - a * a)
                    },
                    Elastic: function(a) {
                        return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(a) {
                        return a * a * (3 * a - 2)
                    },
                    Bounce: function(a) {
                        for (var b, c = 4; a < ((b = Math.pow(2, --c)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
                    }
                }), a.each(b, function(b, c) {
                    a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) {
                        return 1 - c(1 - a)
                    }, a.easing["easeInOut" + b] = function(a) {
                        return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
                    }
                })
            }()
    }(jQuery),
    function(a, b) {
        var c = /up|down|vertical/,
            d = /up|left|vertical|horizontal/;
        a.effects.effect.blind = function(b, e) {
            var f, g, h, i = a(this),
                j = ["position", "top", "bottom", "left", "right", "height", "width"],
                k = a.effects.setMode(i, b.mode || "hide"),
                l = b.direction || "up",
                m = c.test(l),
                n = m ? "height" : "width",
                o = m ? "top" : "left",
                p = d.test(l),
                q = {},
                r = "show" === k;
            i.parent().is(".ui-effects-wrapper") ? a.effects.save(i.parent(), j) : a.effects.save(i, j), i.show(), f = a.effects.createWrapper(i).css({
                overflow: "hidden"
            }), g = f[n](), h = parseFloat(f.css(o)) || 0, q[n] = r ? g : 0, p || (i.css(m ? "bottom" : "right", 0).css(m ? "top" : "left", "auto").css({
                position: "absolute"
            }), q[o] = r ? h : g + h), r && (f.css(n, 0), p || f.css(o, h + g)), f.animate(q, {
                duration: b.duration,
                easing: b.easing,
                queue: !1,
                complete: function() {
                    "hide" === k && i.hide(), a.effects.restore(i, j), a.effects.removeWrapper(i), e()
                }
            })
        }
    }(jQuery),
    function(a, b) {
        a.effects.effect.bounce = function(b, c) {
            var d, e, f, g = a(this),
                h = ["position", "top", "bottom", "left", "right", "height", "width"],
                i = a.effects.setMode(g, b.mode || "effect"),
                j = "hide" === i,
                k = "show" === i,
                l = b.direction || "up",
                m = b.distance,
                n = b.times || 5,
                o = 2 * n + (k || j ? 1 : 0),
                p = b.duration / o,
                q = b.easing,
                r = "up" === l || "down" === l ? "top" : "left",
                s = "up" === l || "left" === l,
                t = g.queue(),
                u = t.length;
            for ((k || j) && h.push("opacity"), a.effects.save(g, h), g.show(), a.effects.createWrapper(g), m || (m = g["top" === r ? "outerHeight" : "outerWidth"]() / 3), k && (f = {
                    opacity: 1
                }, f[r] = 0, g.css("opacity", 0).css(r, s ? 2 * -m : 2 * m).animate(f, p, q)), j && (m /= Math.pow(2, n - 1)), f = {}, f[r] = 0, d = 0; n > d; d++) e = {}, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q).animate(f, p, q), m = j ? 2 * m : m / 2;
            j && (e = {
                opacity: 0
            }, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q)), g.queue(function() {
                j && g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c()
            }), u > 1 && t.splice.apply(t, [1, 0].concat(t.splice(u, o + 1))), g.dequeue()
        }
    }(jQuery),
    function(a, b) {
        a.effects.effect.clip = function(b, c) {
            var d, e, f, g = a(this),
                h = ["position", "top", "bottom", "left", "right", "height", "width"],
                i = a.effects.setMode(g, b.mode || "hide"),
                j = "show" === i,
                k = b.direction || "vertical",
                l = "vertical" === k,
                m = l ? "height" : "width",
                n = l ? "top" : "left",
                o = {};
            a.effects.save(g, h), g.show(), d = a.effects.createWrapper(g).css({
                overflow: "hidden"
            }), e = "IMG" === g[0].tagName ? d : g, f = e[m](), j && (e.css(m, 0), e.css(n, f / 2)), o[m] = j ? f : 0, o[n] = j ? 0 : f / 2, e.animate(o, {
                queue: !1,
                duration: b.duration,
                easing: b.easing,
                complete: function() {
                    j || g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c()
                }
            })
        }
    }(jQuery),
    function(a, b) {
        a.effects.effect.drop = function(b, c) {
            var d, e = a(this),
                f = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                g = a.effects.setMode(e, b.mode || "hide"),
                h = "show" === g,
                i = b.direction || "left",
                j = "up" === i || "down" === i ? "top" : "left",
                k = "up" === i || "left" === i ? "pos" : "neg",
                l = {
                    opacity: h ? 1 : 0
                };
            a.effects.save(e, f), e.show(), a.effects.createWrapper(e), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0) / 2, h && e.css("opacity", 0).css(j, "pos" === k ? -d : d), l[j] = (h ? "pos" === k ? "+=" : "-=" : "pos" === k ? "-=" : "+=") + d, e.animate(l, {
                queue: !1,
                duration: b.duration,
                easing: b.easing,
                complete: function() {
                    "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
                }
            })
        }
    }(jQuery),
    function(a, b) {
        a.effects.effect.explode = function(b, c) {
            function d() {
                t.push(this), t.length === l * m && e()
            }

            function e() {
                n.css({
                    visibility: "visible"
                }), a(t).remove(), p || n.hide(), c()
            }
            var f, g, h, i, j, k, l = b.pieces ? Math.round(Math.sqrt(b.pieces)) : 3,
                m = l,
                n = a(this),
                o = a.effects.setMode(n, b.mode || "hide"),
                p = "show" === o,
                q = n.show().css("visibility", "hidden").offset(),
                r = Math.ceil(n.outerWidth() / m),
                s = Math.ceil(n.outerHeight() / l),
                t = [];
            for (f = 0; l > f; f++)
                for (i = q.top + f * s, k = f - (l - 1) / 2, g = 0; m > g; g++) h = q.left + g * r, j = g - (m - 1) / 2, n.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -g * r,
                    top: -f * s
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: r,
                    height: s,
                    left: h + (p ? j * r : 0),
                    top: i + (p ? k * s : 0),
                    opacity: p ? 0 : 1
                }).animate({
                    left: h + (p ? 0 : j * r),
                    top: i + (p ? 0 : k * s),
                    opacity: p ? 1 : 0
                }, b.duration || 500, b.easing, d)
        }
    }(jQuery),
    function(a, b) {
        a.effects.effect.fade = function(b, c) {
            var d = a(this),
                e = a.effects.setMode(d, b.mode || "toggle");
            d.animate({
                opacity: e
            }, {
                queue: !1,
                duration: b.duration,
                easing: b.easing,
                complete: c
            })
        }
    }(jQuery),
    function(a, b) {
        a.effects.effect.fold = function(b, c) {
            var d, e, f = a(this),
                g = ["position", "top", "bottom", "left", "right", "height", "width"],
                h = a.effects.setMode(f, b.mode || "hide"),
                i = "show" === h,
                j = "hide" === h,
                k = b.size || 15,
                l = /([0-9]+)%/.exec(k),
                m = !!b.horizFirst,
                n = i !== m,
                o = n ? ["width", "height"] : ["height", "width"],
                p = b.duration / 2,
                q = {},
                r = {};
            a.effects.save(f, g), f.show(), d = a.effects.createWrapper(f).css({
                overflow: "hidden"
            }), e = n ? [d.width(), d.height()] : [d.height(), d.width()], l && (k = parseInt(l[1], 10) / 100 * e[j ? 0 : 1]), i && d.css(m ? {
                height: 0,
                width: k
            } : {
                height: k,
                width: 0
            }), q[o[0]] = i ? e[0] : k, r[o[1]] = i ? e[1] : 0, d.animate(q, p, b.easing).animate(r, p, b.easing, function() {
                j && f.hide(), a.effects.restore(f, g), a.effects.removeWrapper(f), c()
            })
        }
    }(jQuery),
    function(a, b) {
        a.effects.effect.highlight = function(b, c) {
            var d = a(this),
                e = ["backgroundImage", "backgroundColor", "opacity"],
                f = a.effects.setMode(d, b.mode || "show"),
                g = {
                    backgroundColor: d.css("backgroundColor")
                };
            "hide" === f && (g.opacity = 0), a.effects.save(d, e),
                d.show().css({
                    backgroundImage: "none",
                    backgroundColor: b.color || "#ffff99"
                }).animate(g, {
                    queue: !1,
                    duration: b.duration,
                    easing: b.easing,
                    complete: function() {
                        "hide" === f && d.hide(), a.effects.restore(d, e), c()
                    }
                })
        }
    }(jQuery),
    function(a, b) {
        a.effects.effect.pulsate = function(b, c) {
            var d, e = a(this),
                f = a.effects.setMode(e, b.mode || "show"),
                g = "show" === f,
                h = "hide" === f,
                i = g || "hide" === f,
                j = 2 * (b.times || 5) + (i ? 1 : 0),
                k = b.duration / j,
                l = 0,
                m = e.queue(),
                n = m.length;
            for ((g || !e.is(":visible")) && (e.css("opacity", 0).show(), l = 1), d = 1; j > d; d++) e.animate({
                opacity: l
            }, k, b.easing), l = 1 - l;
            e.animate({
                opacity: l
            }, k, b.easing), e.queue(function() {
                h && e.hide(), c()
            }), n > 1 && m.splice.apply(m, [1, 0].concat(m.splice(n, j + 1))), e.dequeue()
        }
    }(jQuery),
    function(a, b) {
        a.effects.effect.puff = function(b, c) {
            var d = a(this),
                e = a.effects.setMode(d, b.mode || "hide"),
                f = "hide" === e,
                g = parseInt(b.percent, 10) || 150,
                h = g / 100,
                i = {
                    height: d.height(),
                    width: d.width(),
                    outerHeight: d.outerHeight(),
                    outerWidth: d.outerWidth()
                };
            a.extend(b, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: e,
                complete: c,
                percent: f ? g : 100,
                from: f ? i : {
                    height: i.height * h,
                    width: i.width * h,
                    outerHeight: i.outerHeight * h,
                    outerWidth: i.outerWidth * h
                }
            }), d.effect(b)
        }, a.effects.effect.scale = function(b, c) {
            var d = a(this),
                e = a.extend(!0, {}, b),
                f = a.effects.setMode(d, b.mode || "effect"),
                g = parseInt(b.percent, 10) || (0 === parseInt(b.percent, 10) ? 0 : "hide" === f ? 0 : 100),
                h = b.direction || "both",
                i = b.origin,
                j = {
                    height: d.height(),
                    width: d.width(),
                    outerHeight: d.outerHeight(),
                    outerWidth: d.outerWidth()
                },
                k = {
                    y: "horizontal" !== h ? g / 100 : 1,
                    x: "vertical" !== h ? g / 100 : 1
                };
            e.effect = "size", e.queue = !1, e.complete = c, "effect" !== f && (e.origin = i || ["middle", "center"], e.restore = !0), e.from = b.from || ("show" === f ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : j), e.to = {
                height: j.height * k.y,
                width: j.width * k.x,
                outerHeight: j.outerHeight * k.y,
                outerWidth: j.outerWidth * k.x
            }, e.fade && ("show" === f && (e.from.opacity = 0, e.to.opacity = 1), "hide" === f && (e.from.opacity = 1, e.to.opacity = 0)), d.effect(e)
        }, a.effects.effect.size = function(b, c) {
            var d, e, f, g = a(this),
                h = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                i = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                j = ["width", "height", "overflow"],
                k = ["fontSize"],
                l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                m = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                n = a.effects.setMode(g, b.mode || "effect"),
                o = b.restore || "effect" !== n,
                p = b.scale || "both",
                q = b.origin || ["middle", "center"],
                r = g.css("position"),
                s = o ? h : i,
                t = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            "show" === n && g.show(), d = {
                height: g.height(),
                width: g.width(),
                outerHeight: g.outerHeight(),
                outerWidth: g.outerWidth()
            }, "toggle" === b.mode && "show" === n ? (g.from = b.to || t, g.to = b.from || d) : (g.from = b.from || ("show" === n ? t : d), g.to = b.to || ("hide" === n ? t : d)), f = {
                from: {
                    y: g.from.height / d.height,
                    x: g.from.width / d.width
                },
                to: {
                    y: g.to.height / d.height,
                    x: g.to.width / d.width
                }
            }, ("box" === p || "both" === p) && (f.from.y !== f.to.y && (s = s.concat(l), g.from = a.effects.setTransition(g, l, f.from.y, g.from), g.to = a.effects.setTransition(g, l, f.to.y, g.to)), f.from.x !== f.to.x && (s = s.concat(m), g.from = a.effects.setTransition(g, m, f.from.x, g.from), g.to = a.effects.setTransition(g, m, f.to.x, g.to))), ("content" === p || "both" === p) && f.from.y !== f.to.y && (s = s.concat(k).concat(j), g.from = a.effects.setTransition(g, k, f.from.y, g.from), g.to = a.effects.setTransition(g, k, f.to.y, g.to)), a.effects.save(g, s), g.show(), a.effects.createWrapper(g), g.css("overflow", "hidden").css(g.from), q && (e = a.effects.getBaseline(q, d), g.from.top = (d.outerHeight - g.outerHeight()) * e.y, g.from.left = (d.outerWidth - g.outerWidth()) * e.x, g.to.top = (d.outerHeight - g.to.outerHeight) * e.y, g.to.left = (d.outerWidth - g.to.outerWidth) * e.x), g.css(g.from), ("content" === p || "both" === p) && (l = l.concat(["marginTop", "marginBottom"]).concat(k), m = m.concat(["marginLeft", "marginRight"]), j = h.concat(l).concat(m), g.find("*[width]").each(function() {
                var c = a(this),
                    d = {
                        height: c.height(),
                        width: c.width(),
                        outerHeight: c.outerHeight(),
                        outerWidth: c.outerWidth()
                    };
                o && a.effects.save(c, j), c.from = {
                    height: d.height * f.from.y,
                    width: d.width * f.from.x,
                    outerHeight: d.outerHeight * f.from.y,
                    outerWidth: d.outerWidth * f.from.x
                }, c.to = {
                    height: d.height * f.to.y,
                    width: d.width * f.to.x,
                    outerHeight: d.height * f.to.y,
                    outerWidth: d.width * f.to.x
                }, f.from.y !== f.to.y && (c.from = a.effects.setTransition(c, l, f.from.y, c.from), c.to = a.effects.setTransition(c, l, f.to.y, c.to)), f.from.x !== f.to.x && (c.from = a.effects.setTransition(c, m, f.from.x, c.from), c.to = a.effects.setTransition(c, m, f.to.x, c.to)), c.css(c.from), c.animate(c.to, b.duration, b.easing, function() {
                    o && a.effects.restore(c, j)
                })
            })), g.animate(g.to, {
                queue: !1,
                duration: b.duration,
                easing: b.easing,
                complete: function() {
                    0 === g.to.opacity && g.css("opacity", g.from.opacity), "hide" === n && g.hide(), a.effects.restore(g, s), o || ("static" === r ? g.css({
                        position: "relative",
                        top: g.to.top,
                        left: g.to.left
                    }) : a.each(["top", "left"], function(a, b) {
                        g.css(b, function(b, c) {
                            var d = parseInt(c, 10),
                                e = a ? g.to.left : g.to.top;
                            return "auto" === c ? e + "px" : d + e + "px"
                        })
                    })), a.effects.removeWrapper(g), c()
                }
            })
        }
    }(jQuery),
    function(a, b) {
        a.effects.effect.shake = function(b, c) {
            var d, e = a(this),
                f = ["position", "top", "bottom", "left", "right", "height", "width"],
                g = a.effects.setMode(e, b.mode || "effect"),
                h = b.direction || "left",
                i = b.distance || 20,
                j = b.times || 3,
                k = 2 * j + 1,
                l = Math.round(b.duration / k),
                m = "up" === h || "down" === h ? "top" : "left",
                n = "up" === h || "left" === h,
                o = {},
                p = {},
                q = {},
                r = e.queue(),
                s = r.length;
            for (a.effects.save(e, f), e.show(), a.effects.createWrapper(e), o[m] = (n ? "-=" : "+=") + i, p[m] = (n ? "+=" : "-=") + 2 * i, q[m] = (n ? "-=" : "+=") + 2 * i, e.animate(o, l, b.easing), d = 1; j > d; d++) e.animate(p, l, b.easing).animate(q, l, b.easing);
            e.animate(p, l, b.easing).animate(o, l / 2, b.easing).queue(function() {
                "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
            }), s > 1 && r.splice.apply(r, [1, 0].concat(r.splice(s, k + 1))), e.dequeue()
        }
    }(jQuery),
    function(a, b) {
        a.effects.effect.slide = function(b, c) {
            var d, e = a(this),
                f = ["position", "top", "bottom", "left", "right", "width", "height"],
                g = a.effects.setMode(e, b.mode || "show"),
                h = "show" === g,
                i = b.direction || "left",
                j = "up" === i || "down" === i ? "top" : "left",
                k = "up" === i || "left" === i,
                l = {};
            a.effects.save(e, f), e.show(), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0), a.effects.createWrapper(e).css({
                overflow: "hidden"
            }), h && e.css(j, k ? isNaN(d) ? "-" + d : -d : d), l[j] = (h ? k ? "+=" : "-=" : k ? "-=" : "+=") + d, e.animate(l, {
                queue: !1,
                duration: b.duration,
                easing: b.easing,
                complete: function() {
                    "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
                }
            })
        }
    }(jQuery),
    function(a, b) {
        a.effects.effect.transfer = function(b, c) {
            var d = a(this),
                e = a(b.to),
                f = "fixed" === e.css("position"),
                g = a("body"),
                h = f ? g.scrollTop() : 0,
                i = f ? g.scrollLeft() : 0,
                j = e.offset(),
                k = {
                    top: j.top - h,
                    left: j.left - i,
                    height: e.innerHeight(),
                    width: e.innerWidth()
                },
                l = d.offset(),
                m = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(b.className).css({
                    top: l.top - h,
                    left: l.left - i,
                    height: d.innerHeight(),
                    width: d.innerWidth(),
                    position: f ? "fixed" : "absolute"
                }).animate(k, b.duration, b.easing, function() {
                    m.remove(), c()
                })
        }
    }(jQuery), ! function(a) {
        "use strict";
        a(function() {
            a.support.transition = function() {
                var a = function() {
                    var a, b = document.createElement("bootstrap"),
                        c = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        };
                    for (a in c)
                        if (void 0 !== b.style[a]) return c[a]
                }();
                return a && {
                    end: a
                }
            }()
        })
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = '[data-dismiss="alert"]',
            c = function(c) {
                a(c).on("click", b, this.close)
            };
        c.prototype.close = function(b) {
            function c() {
                d.trigger("closed").remove()
            }
            var d, e = a(this),
                f = e.attr("data-target");
            f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")), d = a(f), b && b.preventDefault(), d.length || (d = e.hasClass("alert") ? e : e.parent()), d.trigger(b = a.Event("close")), b.isDefaultPrevented() || (d.removeClass("in"), a.support.transition && d.hasClass("fade") ? d.on(a.support.transition.end, c) : c())
        };
        var d = a.fn.alert;
        a.fn.alert = function(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("alert");
                e || d.data("alert", e = new c(this)), "string" == typeof b && e[b].call(d)
            })
        }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
            return a.fn.alert = d, this
        }, a(document).on("click.alert.data-api", b, c.prototype.close)
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.$element = a(b), this.options = a.extend({}, a.fn.button.defaults, c)
        };
        b.prototype.setState = function(a) {
            var b = "disabled",
                c = this.$element,
                d = c.data(),
                e = c.is("input") ? "val" : "html";
            a += "Text", d.resetText || c.data("resetText", c[e]()), c[e](d[a] || this.options[a]), setTimeout(function() {
                "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
            }, 0)
        }, b.prototype.toggle = function() {
            var a = this.$element.closest('[data-toggle="buttons-radio"]');
            a && a.find(".active").removeClass("active"), this.$element.toggleClass("active")
        };
        var c = a.fn.button;
        a.fn.button = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("button"),
                    f = "object" == typeof c && c;
                e || d.data("button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
            })
        }, a.fn.button.defaults = {
            loadingText: "loading..."
        }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
            return a.fn.button = c, this
        }, a(document).on("click.button.data-api", "[data-toggle^=button]", function(b) {
            var c = a(b.target);
            c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle")
        })
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
        };
        b.prototype = {
            cycle: function(b) {
                return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
            },
            getActiveIndex: function() {
                return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
            },
            to: function(b) {
                var c = this.getActiveIndex(),
                    d = this;
                if (!(b > this.$items.length - 1 || 0 > b)) return this.sliding ? this.$element.one("slid", function() {
                    d.to(b)
                }) : c == b ? this.pause().cycle() : this.slide(b > c ? "next" : "prev", a(this.$items[b]))
            },
            pause: function(b) {
                return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
            },
            next: function() {
                return this.sliding ? void 0 : this.slide("next")
            },
            prev: function() {
                return this.sliding ? void 0 : this.slide("prev")
            },
            slide: function(b, c) {
                var d, e = this.$element.find(".item.active"),
                    f = c || e[b](),
                    g = this.interval,
                    h = "next" == b ? "left" : "right",
                    i = "next" == b ? "first" : "last",
                    j = this;
                if (this.sliding = !0, g && this.pause(), f = f.length ? f : this.$element.find(".item")[i](), d = a.Event("slide", {
                        relatedTarget: f[0],
                        direction: h
                    }), !f.hasClass("active")) {
                    if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                            var b = a(j.$indicators.children()[j.getActiveIndex()]);
                            b && b.addClass("active")
                        })), a.support.transition && this.$element.hasClass("slide")) {
                        if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                        f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), this.$element.one(a.support.transition.end, function() {
                            f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), j.sliding = !1, setTimeout(function() {
                                j.$element.trigger("slid")
                            }, 0)
                        })
                    } else {
                        if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                        e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                    }
                    return g && this.cycle(), this
                }
            }
        };
        var c = a.fn.carousel;
        a.fn.carousel = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("carousel"),
                    f = a.extend({}, a.fn.carousel.defaults, "object" == typeof c && c),
                    g = "string" == typeof c ? c : f.slide;
                e || d.data("carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
            })
        }, a.fn.carousel.defaults = {
            interval: 5e3,
            pause: "hover"
        }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
            return a.fn.carousel = c, this
        }, a(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
            var c, d, e = a(this),
                f = a(e.attr("data-target") || (c = e.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
                g = a.extend({}, f.data(), e.data());
            f.carousel(g), (d = e.attr("data-slide-to")) && f.data("carousel").pause().to(d).cycle(), b.preventDefault()
        })
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.$element = a(b), this.options = a.extend({}, a.fn.collapse.defaults, c), this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
        };
        b.prototype = {
            constructor: b,
            dimension: function() {
                var a = this.$element.hasClass("width");
                return a ? "width" : "height"
            },
            show: function() {
                var b, c, d, e;
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    if (b = this.dimension(), c = a.camelCase(["scroll", b].join("-")), d = this.$parent && this.$parent.find("> .accordion-group > .in"), d && d.length) {
                        if (e = d.data("collapse"), e && e.transitioning) return;
                        d.collapse("hide"), e || d.data("collapse", null)
                    }
                    this.$element[b](0), this.transition("addClass", a.Event("show"), "shown"), a.support.transition && this.$element[b](this.$element[0][c])
                }
            },
            hide: function() {
                var b;
                !this.transitioning && this.$element.hasClass("in") && (b = this.dimension(), this.reset(this.$element[b]()), this.transition("removeClass", a.Event("hide"), "hidden"), this.$element[b](0))
            },
            reset: function(a) {
                var b = this.dimension();
                return this.$element.removeClass("collapse")[b](a || "auto")[0].offsetWidth, this.$element[null !== a ? "addClass" : "removeClass"]("collapse"), this
            },
            transition: function(b, c, d) {
                var e = this,
                    f = function() {
                        "show" == c.type && e.reset(), e.transitioning = 0, e.$element.trigger(d)
                    };
                this.$element.trigger(c), c.isDefaultPrevented() || (this.transitioning = 1, this.$element[b]("in"), a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, f) : f())
            },
            toggle: function() {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }
        };
        var c = a.fn.collapse;
        a.fn.collapse = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("collapse"),
                    f = a.extend({}, a.fn.collapse.defaults, d.data(), "object" == typeof c && c);
                e || d.data("collapse", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.collapse.defaults = {
            toggle: !0
        }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
            return a.fn.collapse = c, this
        }, a(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(b) {
            var c, d = a(this),
                e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
                f = a(e).data("collapse") ? "toggle" : d.data();
            d[a(e).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), a(e).collapse(f)
        })
    }(window.jQuery), ! function(a) {
        "use strict";

        function b() {
            a(d).each(function() {
                c(a(this)).removeClass("open")
            })
        }

        function c(b) {
            var c, d = b.attr("data-target");
            return d || (d = b.attr("href"), d = d && /#/.test(d) && d.replace(/.*(?=#[^\s]*$)/, "")), c = d && a(d), c && c.length || (c = b.parent()), c
        }
        var d = "[data-toggle=dropdown]",
            e = function(b) {
                var c = a(b).on("click.dropdown.data-api", this.toggle);
                a("html").on("click.dropdown.data-api", function() {
                    c.parent().removeClass("open")
                })
            };
        e.prototype = {
            constructor: e,
            toggle: function(d) {
                var e, f, g = a(this);
                if (!g.is(".disabled, :disabled")) return e = c(g), f = e.hasClass("open"), b(), f || e.toggleClass("open"), g.focus(), !1
            },
            keydown: function(b) {
                var e, f, g, h, i;
                if (/(38|40|27)/.test(b.keyCode) && (e = a(this), b.preventDefault(), b.stopPropagation(), !e.is(".disabled, :disabled"))) {
                    if (g = c(e), h = g.hasClass("open"), !h || h && 27 == b.keyCode) return 27 == b.which && g.find(d).focus(), e.click();
                    f = a("[role=menu] li:not(.divider):visible a", g), f.length && (i = f.index(f.filter(":focus")), 38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < f.length - 1 && i++, ~i || (i = 0), f.eq(i).focus())
                }
            }
        };
        var f = a.fn.dropdown;
        a.fn.dropdown = function(b) {
            return this.each(function() {
                var c = a(this),
                    d = c.data("dropdown");
                d || c.data("dropdown", d = new e(this)), "string" == typeof b && d[b].call(c)
            })
        }, a.fn.dropdown.Constructor = e, a.fn.dropdown.noConflict = function() {
            return a.fn.dropdown = f, this
        }, a(document).on("click.dropdown.data-api", b).on("click.dropdown.data-api", ".dropdown form", function(a) {
            a.stopPropagation()
        }).on("click.dropdown-menu", function(a) {
            a.stopPropagation()
        }).on("click.dropdown.data-api", d, e.prototype.toggle).on("keydown.dropdown.data-api", d + ", [role=menu]", e.prototype.keydown)
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.options = c, this.$element = a(b).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
        };
        b.prototype = {
            constructor: b,
            toggle: function() {
                return this[this.isShown ? "hide" : "show"]()
            },
            show: function() {
                var b = this,
                    c = a.Event("show");
                this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
                    var c = a.support.transition && b.$element.hasClass("fade");
                    b.$element.parent().length || b.$element.appendTo(document.body), b.$element.show(), c && b.$element[0].offsetWidth, b.$element.addClass("in").attr("aria-hidden", !1), b.enforceFocus(), c ? b.$element.one(a.support.transition.end, function() {
                        b.$element.focus().trigger("shown")
                    }) : b.$element.focus().trigger("shown")
                }))
            },
            hide: function(b) {
                b && b.preventDefault();
                b = a.Event("hide"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), a.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
            },
            enforceFocus: function() {
                var b = this;
                a(document).on("focusin.modal", function(a) {
                    b.$element[0] !== a.target && !b.$element.has(a.target).length && b.$element.focus()
                })
            },
            escape: function() {
                var a = this;
                this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(b) {
                    27 == b.which && a.hide()
                }) : this.isShown || this.$element.off("keyup.dismiss.modal")
            },
            hideWithTransition: function() {
                var b = this,
                    c = setTimeout(function() {
                        b.$element.off(a.support.transition.end), b.hideModal()
                    }, 500);
                this.$element.one(a.support.transition.end, function() {
                    clearTimeout(c), b.hideModal()
                })
            },
            hideModal: function() {
                var a = this;
                this.$element.hide(), this.backdrop(function() {
                    a.removeBackdrop(), a.$element.trigger("hidden")
                })
            },
            removeBackdrop: function() {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            },
            backdrop: function(b) {
                var c = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var d = a.support.transition && c;
                    if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? a.proxy(this.$element[0].focus, this.$element[0]) : a.proxy(this.hide, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
                    d ? this.$backdrop.one(a.support.transition.end, b) : b()
                } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b) : b()) : b && b()
            }
        };
        var c = a.fn.modal;
        a.fn.modal = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("modal"),
                    f = a.extend({}, a.fn.modal.defaults, d.data(), "object" == typeof c && c);
                e || d.data("modal", e = new b(this, f)), "string" == typeof c ? e[c]() : f.show && e.show()
            })
        }, a.fn.modal.defaults = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
            return a.fn.modal = c, this
        }, a(document).on("click.modal.data-api", '[data-toggle="modal"]', function(b) {
            var c = a(this),
                d = c.attr("href"),
                e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
                f = e.data("modal") ? "toggle" : a.extend({
                    remote: !/#/.test(d) && d
                }, e.data(), c.data());
            b.preventDefault(), e.modal(f).one("hide", function() {
                c.focus()
            })
        })
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(a, b) {
            this.init("tooltip", a, b)
        };
        b.prototype = {
            constructor: b,
            init: function(b, c, d) {
                var e, f, g, h, i;
                for (this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, g = this.options.trigger.split(" "), i = g.length; i--;) h = g[i], "click" == h ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : "manual" != h && (e = "hover" == h ? "mouseenter" : "focus", f = "hover" == h ? "mouseleave" : "blur", this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this)));
                this.options.selector ? this._options = a.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            getOptions: function(b) {
                return b = a.extend({}, a.fn[this.type].defaults, this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                    show: b.delay,
                    hide: b.delay
                }), b
            },
            enter: function(b) {
                var c, d = a.fn[this.type].defaults,
                    e = {};
                return this._options && a.each(this._options, function(a, b) {
                    d[a] != b && (e[a] = b)
                }, this), c = a(b.currentTarget)[this.type](e).data(this.type), c.options.delay && c.options.delay.show ? (clearTimeout(this.timeout), c.hoverState = "in", this.timeout = setTimeout(function() {
                    "in" == c.hoverState && c.show()
                }, c.options.delay.show), void 0) : c.show()
            },
            leave: function(b) {
                var c = a(b.currentTarget)[this.type](this._options).data(this.type);
                return this.timeout && clearTimeout(this.timeout), c.options.delay && c.options.delay.hide ? (c.hoverState = "out", void(this.timeout = setTimeout(function() {
                    "out" == c.hoverState && c.hide()
                }, c.options.delay.hide))) : c.hide()
            },
            show: function() {
                var b, c, d, e, f, g, h = a.Event("show");
                if (this.hasContent() && this.enabled) {
                    if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                    switch (b = this.tip(), this.setContent(), this.options.animation && b.addClass("fade"), f = "function" == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement, b.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }), this.options.container ? b.appendTo(this.options.container) : b.insertAfter(this.$element), c = this.getPosition(), d = b[0].offsetWidth, e = b[0].offsetHeight, f) {
                        case "bottom":
                            g = {
                                top: c.top + c.height,
                                left: c.left + c.width / 2 - d / 2
                            };
                            break;
                        case "top":
                            g = {
                                top: c.top - e,
                                left: c.left + c.width / 2 - d / 2
                            };
                            break;
                        case "left":
                            g = {
                                top: c.top + c.height / 2 - e / 2,
                                left: c.left - d
                            };
                            break;
                        case "right":
                            g = {
                                top: c.top + c.height / 2 - e / 2,
                                left: c.left + c.width
                            }
                    }
                    this.applyPlacement(g, f), this.$element.trigger("shown")
                }
            },
            applyPlacement: function(a, b) {
                var c, d, e, f, g = this.tip(),
                    h = g[0].offsetWidth,
                    i = g[0].offsetHeight;
                g.offset(a).addClass(b).addClass("in"), c = g[0].offsetWidth, d = g[0].offsetHeight, "top" == b && d != i && (a.top = a.top + i - d, f = !0), "bottom" == b || "top" == b ? (e = 0, a.left < 0 && (e = -2 * a.left, a.left = 0, g.offset(a), c = g[0].offsetWidth, d = g[0].offsetHeight), this.replaceArrow(e - h + c, c, "left")) : this.replaceArrow(d - i, d, "top"), f && g.offset(a)
            },
            replaceArrow: function(a, b, c) {
                this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
            },
            setContent: function() {
                var a = this.tip(),
                    b = this.getTitle();
                a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
            },
            hide: function() {
                function b() {
                    var b = setTimeout(function() {
                        c.off(a.support.transition.end).detach()
                    }, 500);
                    c.one(a.support.transition.end, function() {
                        clearTimeout(b), c.detach()
                    })
                }
                var c = this.tip(),
                    d = a.Event("hide");
                return this.$element.trigger(d), d.isDefaultPrevented() ? void 0 : (c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? b() : c.detach(), this.$element.trigger("hidden"), this)
            },
            fixTitle: function() {
                var a = this.$element;
                (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
            },
            hasContent: function() {
                return this.getTitle()
            },
            getPosition: function() {
                var b = this.$element[0];
                return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
                    width: b.offsetWidth,
                    height: b.offsetHeight
                }, this.$element.offset())
            },
            getTitle: function() {
                var a, b = this.$element,
                    c = this.options;
                return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
            },
            tip: function() {
                return this.$tip = this.$tip || a(this.options.template)
            },
            arrow: function() {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            },
            validate: function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            toggleEnabled: function() {
                this.enabled = !this.enabled
            },
            toggle: function(b) {
                var c = b ? a(b.currentTarget)[this.type](this._options).data(this.type) : this;
                c.tip().hasClass("in") ? c.hide() : c.show()
            },
            destroy: function() {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }
        };
        var c = a.fn.tooltip;
        a.fn.tooltip = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("tooltip"),
                    f = "object" == typeof c && c;
                e || d.data("tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1
        }, a.fn.tooltip.noConflict = function() {
            return a.fn.tooltip = c, this
        }
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(a, b) {
            this.init("popover", a, b)
        };
        b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
            constructor: b,
            setContent: function() {
                var a = this.tip(),
                    b = this.getTitle(),
                    c = this.getContent();
                a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in")
            },
            hasContent: function() {
                return this.getTitle() || this.getContent()
            },
            getContent: function() {
                var a, b = this.$element,
                    c = this.options;
                return a = ("function" == typeof c.content ? c.content.call(b[0]) : c.content) || b.attr("data-content")
            },
            tip: function() {
                return this.$tip || (this.$tip = a(this.options.template)), this.$tip
            },
            destroy: function() {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }
        });
        var c = a.fn.popover;
        a.fn.popover = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("popover"),
                    f = "object" == typeof c && c;
                e || d.data("popover", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.popover.Constructor = b, a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), a.fn.popover.noConflict = function() {
            return a.fn.popover = c, this
        }
    }(window.jQuery), ! function(a) {
        "use strict";

        function b(b, c) {
            var d, e = a.proxy(this.process, this),
                f = a(a(b).is("body") ? window : b);
            this.options = a.extend({}, a.fn.scrollspy.defaults, c), this.$scrollElement = f.on("scroll.scroll-spy.data-api", e), this.selector = (this.options.target || (d = a(b).attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = a("body"), this.refresh(), this.process()
        }
        b.prototype = {
            constructor: b,
            refresh: function() {
                var b, c = this;
                this.offsets = a([]), this.targets = a([]), b = this.$body.find(this.selector).map(function() {
                    var b = a(this),
                        d = b.data("target") || b.attr("href"),
                        e = /^#\w/.test(d) && a(d);
                    return e && e.length && [
                        [e.position().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), d]
                    ] || null
                }).sort(function(a, b) {
                    return a[0] - b[0]
                }).each(function() {
                    c.offsets.push(this[0]), c.targets.push(this[1])
                })
            },
            process: function() {
                var a, b = this.$scrollElement.scrollTop() + this.options.offset,
                    c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                    d = c - this.$scrollElement.height(),
                    e = this.offsets,
                    f = this.targets,
                    g = this.activeTarget;
                if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
                for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
            },
            activate: function(b) {
                var c, d;
                this.activeTarget = b, a(this.selector).parent(".active").removeClass("active"), d = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', c = a(d).parent("li").addClass("active"), c.parent(".dropdown-menu").length && (c = c.closest("li.dropdown").addClass("active")), c.trigger("activate")
            }
        };
        var c = a.fn.scrollspy;
        a.fn.scrollspy = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("scrollspy"),
                    f = "object" == typeof c && c;
                e || d.data("scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.defaults = {
            offset: 10
        }, a.fn.scrollspy.noConflict = function() {
            return a.fn.scrollspy = c, this
        }, a(window).on("load", function() {
            a('[data-spy="scroll"]').each(function() {
                var b = a(this);
                b.scrollspy(b.data())
            })
        })
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(b) {
            this.element = a(b)
        };
        b.prototype = {
            constructor: b,
            show: function() {
                var b, c, d, e = this.element,
                    f = e.closest("ul:not(.dropdown-menu)"),
                    g = e.attr("data-target");
                g || (g = e.attr("href"), g = g && g.replace(/.*(?=#[^\s]*$)/, "")), e.parent("li").hasClass("active") || (b = f.find(".active:last a")[0], d = a.Event("show", {
                    relatedTarget: b
                }), e.trigger(d), d.isDefaultPrevented() || (c = a(g), this.activate(e.parent("li"), f), this.activate(c, c.parent(), function() {
                    e.trigger({
                        type: "shown",
                        relatedTarget: b
                    })
                })))
            },
            activate: function(b, c, d) {
                function e() {
                    f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
                }
                var f = c.find("> .active"),
                    g = d && a.support.transition && f.hasClass("fade");
                g ? f.one(a.support.transition.end, e) : e(), f.removeClass("in")
            }
        };
        var c = a.fn.tab;
        a.fn.tab = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("tab");
                e || d.data("tab", e = new b(this)), "string" == typeof c && e[c]()
            })
        }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
            return a.fn.tab = c, this
        }, a(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
            b.preventDefault(), a(this).tab("show")
        })
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.$element = a(b), this.options = a.extend({}, a.fn.typeahead.defaults, c), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = a(this.options.menu), this.shown = !1, this.listen()
        };
        b.prototype = {
            constructor: b,
            select: function() {
                var a = this.$menu.find(".active").attr("data-value");
                return this.$element.val(this.updater(a)).change(), this.hide()
            },
            updater: function(a) {
                return a
            },
            show: function() {
                var b = a.extend({}, this.$element.position(), {
                    height: this.$element[0].offsetHeight
                });
                return this.$menu.insertAfter(this.$element).css({
                    top: b.top + b.height,
                    left: b.left
                }).show(), this.shown = !0, this
            },
            hide: function() {
                return this.$menu.hide(), this.shown = !1, this
            },
            lookup: function(b) {
                var c;
                return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (c = a.isFunction(this.source) ? this.source(this.query, a.proxy(this.process, this)) : this.source, c ? this.process(c) : this)
            },
            process: function(b) {
                var c = this;
                return b = a.grep(b, function(a) {
                    return c.matcher(a)
                }), b = this.sorter(b), b.length ? this.render(b.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
            },
            matcher: function(a) {
                return ~a.toLowerCase().indexOf(this.query.toLowerCase())
            },
            sorter: function(a) {
                for (var b, c = [], d = [], e = []; b = a.shift();) b.toLowerCase().indexOf(this.query.toLowerCase()) ? ~b.indexOf(this.query) ? d.push(b) : e.push(b) : c.push(b);
                return c.concat(d, e)
            },
            highlighter: function(a) {
                var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                return a.replace(new RegExp("(" + b + ")", "ig"), function(a, b) {
                    return "<strong>" + b + "</strong>"
                })
            },
            render: function(b) {
                var c = this;
                return b = a(b).map(function(b, d) {
                    return b = a(c.options.item).attr("data-value", d), b.find("a").html(c.highlighter(d)), b[0]
                }), b.first().addClass("active"), this.$menu.html(b), this
            },
            next: function(b) {
                var c = this.$menu.find(".active").removeClass("active"),
                    d = c.next();
                d.length || (d = a(this.$menu.find("li")[0])), d.addClass("active")
            },
            prev: function(a) {
                var b = this.$menu.find(".active").removeClass("active"),
                    c = b.prev();
                c.length || (c = this.$menu.find("li").last()), c.addClass("active")
            },
            listen: function() {
                this.$element.on("focus", a.proxy(this.focus, this)).on("blur", a.proxy(this.blur, this)).on("keypress", a.proxy(this.keypress, this)).on("keyup", a.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", a.proxy(this.keydown, this)), this.$menu.on("click", a.proxy(this.click, this)).on("mouseenter", "li", a.proxy(this.mouseenter, this)).on("mouseleave", "li", a.proxy(this.mouseleave, this))
            },
            eventSupported: function(a) {
                var b = a in this.$element;
                return b || (this.$element.setAttribute(a, "return;"),
                    b = "function" == typeof this.$element[a]), b
            },
            move: function(a) {
                if (this.shown) {
                    switch (a.keyCode) {
                        case 9:
                        case 13:
                        case 27:
                            a.preventDefault();
                            break;
                        case 38:
                            a.preventDefault(), this.prev();
                            break;
                        case 40:
                            a.preventDefault(), this.next()
                    }
                    a.stopPropagation()
                }
            },
            keydown: function(b) {
                this.suppressKeyPressRepeat = ~a.inArray(b.keyCode, [40, 38, 9, 13, 27]), this.move(b)
            },
            keypress: function(a) {
                this.suppressKeyPressRepeat || this.move(a)
            },
            keyup: function(a) {
                switch (a.keyCode) {
                    case 40:
                    case 38:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    case 9:
                    case 13:
                        if (!this.shown) return;
                        this.select();
                        break;
                    case 27:
                        if (!this.shown) return;
                        this.hide();
                        break;
                    default:
                        this.lookup()
                }
                a.stopPropagation(), a.preventDefault()
            },
            focus: function(a) {
                this.focused = !0
            },
            blur: function(a) {
                this.focused = !1, !this.mousedover && this.shown && this.hide()
            },
            click: function(a) {
                a.stopPropagation(), a.preventDefault(), this.select(), this.$element.focus()
            },
            mouseenter: function(b) {
                this.mousedover = !0, this.$menu.find(".active").removeClass("active"), a(b.currentTarget).addClass("active")
            },
            mouseleave: function(a) {
                this.mousedover = !1, !this.focused && this.shown && this.hide()
            }
        };
        var c = a.fn.typeahead;
        a.fn.typeahead = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("typeahead"),
                    f = "object" == typeof c && c;
                e || d.data("typeahead", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.typeahead.defaults = {
            source: [],
            items: 8,
            menu: '<ul class="typeahead dropdown-menu"></ul>',
            item: '<li><a href="#"></a></li>',
            minLength: 1
        }, a.fn.typeahead.Constructor = b, a.fn.typeahead.noConflict = function() {
            return a.fn.typeahead = c, this
        }, a(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(b) {
            var c = a(this);
            c.data("typeahead") || c.typeahead(c.data())
        })
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.options = a.extend({}, a.fn.affix.defaults, c), this.$window = a(window).on("scroll.affix.data-api", a.proxy(this.checkPosition, this)).on("click.affix.data-api", a.proxy(function() {
                setTimeout(a.proxy(this.checkPosition, this), 1)
            }, this)), this.$element = a(b), this.checkPosition()
        };
        b.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var b, c = a(document).height(),
                    d = this.$window.scrollTop(),
                    e = this.$element.offset(),
                    f = this.options.offset,
                    g = f.bottom,
                    h = f.top,
                    i = "affix affix-top affix-bottom";
                "object" != typeof f && (g = h = f), "function" == typeof h && (h = f.top()), "function" == typeof g && (g = f.bottom()), b = null != this.unpin && d + this.unpin <= e.top ? !1 : null != g && e.top + this.$element.height() >= c - g ? "bottom" : null != h && h >= d ? "top" : !1, this.affixed !== b && (this.affixed = b, this.unpin = "bottom" == b ? e.top - d : null, this.$element.removeClass(i).addClass("affix" + (b ? "-" + b : "")))
            }
        };
        var c = a.fn.affix;
        a.fn.affix = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("affix"),
                    f = "object" == typeof c && c;
                e || d.data("affix", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.affix.Constructor = b, a.fn.affix.defaults = {
            offset: 0
        }, a.fn.affix.noConflict = function() {
            return a.fn.affix = c, this
        }, a(window).on("load", function() {
            a('[data-spy="affix"]').each(function() {
                var b = a(this),
                    c = b.data();
                c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
            })
        })
    }(window.jQuery),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a) {
        function b(a) {
            return a
        }

        function c(a) {
            return decodeURIComponent(a.replace(e, " "))
        }

        function d(a) {
            0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return f.json ? JSON.parse(a) : a
            } catch (b) {}
        }
        var e = /\+/g,
            f = a.cookie = function(e, g, h) {
                if (void 0 !== g) {
                    if (h = a.extend({}, f.defaults, h), "number" == typeof h.expires) {
                        var i = h.expires,
                            j = h.expires = new Date;
                        j.setDate(j.getDate() + i)
                    }
                    return g = f.json ? JSON.stringify(g) : String(g), document.cookie = [f.raw ? e : encodeURIComponent(e), "=", f.raw ? g : encodeURIComponent(g), h.expires ? "; expires=" + h.expires.toUTCString() : "", h.path ? "; path=" + h.path : "", h.domain ? "; domain=" + h.domain : "", h.secure ? "; secure" : ""].join("")
                }
                for (var k = f.raw ? b : c, l = document.cookie.split("; "), m = e ? void 0 : {}, n = 0, o = l.length; o > n; n++) {
                    var p = l[n].split("="),
                        q = k(p.shift()),
                        r = k(p.join("="));
                    if (e && e === q) {
                        m = d(r);
                        break
                    }
                    e || (m[q] = d(r))
                }
                return m
            };
        f.defaults = {}, a.removeCookie = function(b, c) {
            return void 0 !== a.cookie(b) ? (a.cookie(b, "", a.extend({}, c, {
                expires: -1
            })), !0) : !1
        }
    }),
    function(a, b) {
        "use strict";

        function c(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return a.prop ? a.prop.apply(a, b) : a.attr.apply(a, b)
        }

        function d(a, b, c) {
            var d, e;
            for (d in c) c.hasOwnProperty(d) && (e = d.replace(/ |$/g, b.eventNamespace), a.bind(e, c[d]))
        }

        function e(a, b, c) {
            d(a, c, {
                focus: function() {
                    b.addClass(c.focusClass)
                },
                blur: function() {
                    b.removeClass(c.focusClass), b.removeClass(c.activeClass)
                },
                mouseenter: function() {
                    b.addClass(c.hoverClass)
                },
                mouseleave: function() {
                    b.removeClass(c.hoverClass), b.removeClass(c.activeClass)
                },
                "mousedown touchbegin": function() {
                    a.is(":disabled") || b.addClass(c.activeClass)
                },
                "mouseup touchend": function() {
                    b.removeClass(c.activeClass)
                }
            })
        }

        function f(a, b) {
            a.removeClass(b.hoverClass + " " + b.focusClass + " " + b.activeClass)
        }

        function g(a, b, c) {
            c ? a.addClass(b) : a.removeClass(b)
        }

        function h(a, b, c) {
            var d = "checked",
                e = b.is(":" + d);
            b.prop ? b.prop(d, e) : e ? b.attr(d, d) : b.removeAttr(d), g(a, c.checkedClass, e)
        }

        function i(a, b, c) {
            g(a, c.disabledClass, b.is(":disabled"))
        }

        function j(a, b, c) {
            switch (c) {
                case "after":
                    return a.after(b), a.next();
                case "before":
                    return a.before(b), a.prev();
                case "wrap":
                    return a.wrap(b), a.parent()
            }
            return null
        }

        function k(b, d, e) {
            var f, g, h;
            return e || (e = {}), e = a.extend({
                bind: {},
                divClass: null,
                divWrap: "wrap",
                spanClass: null,
                spanHtml: null,
                spanWrap: "wrap"
            }, e), f = a("<div />"), g = a("<span />"), d.autoHide && b.is(":hidden") && "none" === b.css("display") && f.hide(), e.divClass && f.addClass(e.divClass), d.wrapperClass && f.addClass(d.wrapperClass), e.spanClass && g.addClass(e.spanClass), h = c(b, "id"), d.useID && h && c(f, "id", d.idPrefix + "-" + h), e.spanHtml && g.html(e.spanHtml), f = j(b, f, e.divWrap), g = j(b, g, e.spanWrap), i(f, b, d), {
                div: f,
                span: g
            }
        }

        function l(b, c) {
            var d;
            return c.wrapperClass ? (d = a("<span />").addClass(c.wrapperClass), d = j(b, d, "wrap")) : null
        }

        function m() {
            var b, c, d, e;
            return e = "rgb(120,2,153)", c = a('<div style="width:0;height:0;color:' + e + '">'), a("body").append(c), d = c.get(0), b = window.getComputedStyle ? window.getComputedStyle(d, "").color : (d.currentStyle || d.style || {}).color, c.remove(), b.replace(/ /g, "") !== e
        }

        function n(b) {
            return b ? a("<span />").text(b).html() : ""
        }

        function o() {
            return navigator.cpuClass && !navigator.product
        }

        function p() {
            return void 0 !== window.XMLHttpRequest ? !0 : !1
        }

        function q(a) {
            var b;
            return a[0].multiple ? !0 : (b = c(a, "size"), !b || 1 >= b ? !1 : !0)
        }

        function r() {
            return !1
        }

        function s(a, b) {
            var c = "none";
            d(a, b, {
                "selectstart dragstart mousedown": r
            }), a.css({
                MozUserSelect: c,
                msUserSelect: c,
                webkitUserSelect: c,
                userSelect: c
            })
        }

        function t(a, b, c) {
            var d = a.val();
            "" === d ? d = c.fileDefaultHtml : (d = d.split(/[\/\\]+/), d = d[d.length - 1]), b.text(d)
        }

        function u(a, b, c) {
            var d, e;
            for (d = [], a.each(function() {
                    var a;
                    for (a in b) Object.prototype.hasOwnProperty.call(b, a) && (d.push({
                        el: this,
                        name: a,
                        old: this.style[a]
                    }), this.style[a] = b[a])
                }), c(); d.length;) e = d.pop(), e.el.style[e.name] = e.old
        }

        function v(a, b) {
            var c;
            c = a.parents(), c.push(a[0]), c = c.not(":visible"), u(c, {
                visibility: "hidden",
                display: "block",
                position: "absolute"
            }, b)
        }

        function w(a, b) {
            return function() {
                a.unwrap().unwrap().unbind(b.eventNamespace)
            }
        }
        var x = !0,
            y = !1,
            z = [{
                match: function(a) {
                    return a.is("a, button, :submit, :reset, input[type='button']")
                },
                apply: function(a, b) {
                    var g, h, j, l, m;
                    return h = b.submitDefaultHtml, a.is(":reset") && (h = b.resetDefaultHtml), l = a.is("a, button") ? function() {
                        return a.html() || h
                    } : function() {
                        return n(c(a, "value")) || h
                    }, j = k(a, b, {
                        divClass: b.buttonClass,
                        spanHtml: l()
                    }), g = j.div, e(a, g, b), m = !1, d(g, b, {
                        "click touchend": function() {
                            var b, d, e, f;
                            m || a.is(":disabled") || (m = !0, a[0].dispatchEvent ? (b = document.createEvent("MouseEvents"), b.initEvent("click", !0, !0), d = a[0].dispatchEvent(b), a.is("a") && d && (e = c(a, "target"), f = c(a, "href"), e && "_self" !== e ? window.open(f, e) : document.location.href = f)) : a.click(), m = !1)
                        }
                    }), s(g, b), {
                        remove: function() {
                            return g.after(a), g.remove(), a.unbind(b.eventNamespace), a
                        },
                        update: function() {
                            f(g, b), i(g, a, b), a.detach(), j.span.html(l()).append(a)
                        }
                    }
                }
            }, {
                match: function(a) {
                    return a.is(":checkbox")
                },
                apply: function(a, b) {
                    var c, g, j;
                    return c = k(a, b, {
                        divClass: b.checkboxClass
                    }), g = c.div, j = c.span, e(a, g, b), d(a, b, {
                        "click touchend": function() {
                            h(j, a, b)
                        }
                    }), h(j, a, b), {
                        remove: w(a, b),
                        update: function() {
                            f(g, b), j.removeClass(b.checkedClass), h(j, a, b), i(g, a, b)
                        }
                    }
                }
            }, {
                match: function(a) {
                    return a.is(":file")
                },
                apply: function(b, g) {
                    function h() {
                        t(b, n, g)
                    }
                    var l, m, n, p;
                    return l = k(b, g, {
                        divClass: g.fileClass,
                        spanClass: g.fileButtonClass,
                        spanHtml: g.fileButtonHtml,
                        spanWrap: "after"
                    }), m = l.div, p = l.span, n = a("<span />").html(g.fileDefaultHtml), n.addClass(g.filenameClass), n = j(b, n, "after"), c(b, "size") || c(b, "size", m.width() / 10), e(b, m, g), h(), o() ? d(b, g, {
                        click: function() {
                            b.trigger("change"), setTimeout(h, 0)
                        }
                    }) : d(b, g, {
                        change: h
                    }), s(n, g), s(p, g), {
                        remove: function() {
                            return n.remove(), p.remove(), b.unwrap().unbind(g.eventNamespace)
                        },
                        update: function() {
                            f(m, g), t(b, n, g), i(m, b, g)
                        }
                    }
                }
            }, {
                match: function(a) {
                    if (a.is("input")) {
                        var b = (" " + c(a, "type") + " ").toLowerCase(),
                            d = " color date datetime datetime-local email month number password search tel text time url week ";
                        return d.indexOf(b) >= 0
                    }
                    return !1
                },
                apply: function(a, b) {
                    var d, f;
                    return d = c(a, "type"), a.addClass(b.inputClass), f = l(a, b), e(a, a, b), b.inputAddTypeAsClass && a.addClass(d), {
                        remove: function() {
                            a.removeClass(b.inputClass), b.inputAddTypeAsClass && a.removeClass(d), f && a.unwrap()
                        },
                        update: r
                    }
                }
            }, {
                match: function(a) {
                    return a.is(":radio")
                },
                apply: function(b, g) {
                    var j, l, m;
                    return j = k(b, g, {
                        divClass: g.radioClass
                    }), l = j.div, m = j.span, e(b, l, g), d(b, g, {
                        "click touchend": function() {
                            a.uniform.update(a(':radio[name="' + c(b, "name") + '"]'))
                        }
                    }), h(m, b, g), {
                        remove: w(b, g),
                        update: function() {
                            f(l, g), h(m, b, g), i(l, b, g)
                        }
                    }
                }
            }, {
                match: function(a) {
                    return a.is("select") && !q(a) ? !0 : !1
                },
                apply: function(b, c) {
                    var g, h, j, l;
                    return c.selectAutoWidth && v(b, function() {
                        l = b.width()
                    }), g = k(b, c, {
                        divClass: c.selectClass,
                        spanHtml: (b.find(":selected:first") || b.find("option:first")).html(),
                        spanWrap: "before"
                    }), h = g.div, j = g.span, c.selectAutoWidth ? v(b, function() {
                        u(a([j[0], h[0]]), {
                            display: "block"
                        }, function() {
                            var a;
                            a = j.outerWidth() - j.width(), h.width(l + a), j.width(l)
                        })
                    }) : h.addClass("fixedWidth"), e(b, h, c), d(b, c, {
                        change: function() {
                            j.html(b.find(":selected").html()), h.removeClass(c.activeClass)
                        },
                        "click touchend": function() {
                            var a = b.find(":selected").html();
                            j.html() !== a && b.trigger("change")
                        },
                        keyup: function() {
                            j.html(b.find(":selected").html())
                        }
                    }), s(j, c), {
                        remove: function() {
                            return j.remove(), b.unwrap().unbind(c.eventNamespace), b
                        },
                        update: function() {
                            c.selectAutoWidth ? (a.uniform.restore(b), b.uniform(c)) : (f(h, c), j.html(b.find(":selected").html()), i(h, b, c))
                        }
                    }
                }
            }, {
                match: function(a) {
                    return a.is("select") && q(a) ? !0 : !1
                },
                apply: function(a, b) {
                    var c;
                    return a.addClass(b.selectMultiClass), c = l(a, b), e(a, a, b), {
                        remove: function() {
                            a.removeClass(b.selectMultiClass), c && a.unwrap()
                        },
                        update: r
                    }
                }
            }, {
                match: function(a) {
                    return a.is("textarea")
                },
                apply: function(a, b) {
                    var c;
                    return a.addClass(b.textareaClass), c = l(a, b), e(a, a, b), {
                        remove: function() {
                            a.removeClass(b.textareaClass), c && a.unwrap()
                        },
                        update: r
                    }
                }
            }];
        o() && !p() && (x = !1), a.uniform = {
            defaults: {
                activeClass: "active",
                autoHide: !0,
                buttonClass: "button",
                checkboxClass: "checker",
                checkedClass: "checked",
                disabledClass: "disabled",
                eventNamespace: ".uniform",
                fileButtonClass: "action",
                fileButtonHtml: "Choose File",
                fileClass: "uploader",
                fileDefaultHtml: "No file selected",
                filenameClass: "filename",
                focusClass: "focus",
                hoverClass: "hover",
                idPrefix: "uniform",
                inputAddTypeAsClass: !0,
                inputClass: "uniform-input",
                radioClass: "radio",
                resetDefaultHtml: "Reset",
                resetSelector: !1,
                selectAutoWidth: !0,
                selectClass: "selector",
                selectMultiClass: "uniform-multiselect",
                submitDefaultHtml: "Submit",
                textareaClass: "uniform",
                useID: !0,
                wrapperClass: null
            },
            elements: []
        }, a.fn.uniform = function(b) {
            var c = this;
            return b = a.extend({}, a.uniform.defaults, b), y || (y = !0, m() && (x = !1)), x ? (b.resetSelector && a(b.resetSelector).mouseup(function() {
                window.setTimeout(function() {
                    a.uniform.update(c)
                }, 10)
            }), this.each(function() {
                var c, d, e, f = a(this);
                if (f.data("uniformed")) return void a.uniform.update(f);
                for (c = 0; z.length > c; c += 1)
                    if (d = z[c], d.match(f, b)) return e = d.apply(f, b), f.data("uniformed", e), void a.uniform.elements.push(f.get(0))
            })) : this
        }, a.uniform.restore = a.fn.uniform.restore = function(c) {
            c === b && (c = a.uniform.elements), a(c).each(function() {
                var b, c, d = a(this);
                c = d.data("uniformed"), c && (c.remove(), b = a.inArray(this, a.uniform.elements), b >= 0 && a.uniform.elements.splice(b, 1), d.removeData("uniformed"))
            })
        }, a.uniform.update = a.fn.uniform.update = function(c) {
            c === b && (c = a.uniform.elements), a(c).each(function() {
                var b, c = a(this);
                b = c.data("uniformed"), b && b.update(c, b.options)
            })
        }
    }(jQuery),
    function(a) {
        void 0 === a.fn.each2 && a.fn.extend({
            each2: function(b) {
                for (var c = a([0]), d = -1, e = this.length; e > ++d && (c.context = c[0] = this[d]) && b.call(c[0], d, c) !== !1;);
                return this
            }
        })
    }(jQuery),
    function(a, b) {
        "use strict";

        function c(a, b) {
            for (var c = 0, d = b.length; d > c; c += 1)
                if (e(a, b[c])) return c;
            return -1
        }

        function d() {
            var b = a(L);
            b.appendTo("body");
            var c = {
                width: b.width() - b[0].clientWidth,
                height: b.height() - b[0].clientHeight
            };
            return b.remove(), c
        }

        function e(a, c) {
            return a === c ? !0 : a === b || c === b ? !1 : null === a || null === c ? !1 : a.constructor === String ? a + "" == c + "" : c.constructor === String ? c + "" == a + "" : !1
        }

        function f(b, c) {
            var d, e, f;
            if (null === b || 1 > b.length) return [];
            for (d = b.split(c), e = 0, f = d.length; f > e; e += 1) d[e] = a.trim(d[e]);
            return d
        }

        function g(a) {
            return a.outerWidth(!1) - a.width()
        }

        function h(c) {
            var d = "keyup-change-value";
            c.on("keydown", function() {
                a.data(c, d) === b && a.data(c, d, c.val())
            }), c.on("keyup", function() {
                var e = a.data(c, d);
                e !== b && c.val() !== e && (a.removeData(c, d), c.trigger("keyup-change"))
            })
        }

        function i(c) {
            c.on("mousemove", function(c) {
                var d = K;
                (d === b || d.x !== c.pageX || d.y !== c.pageY) && a(c.target).trigger("mousemove-filtered", c)
            })
        }

        function j(a, c, d) {
            d = d || b;
            var e;
            return function() {
                var b = arguments;
                window.clearTimeout(e), e = window.setTimeout(function() {
                    c.apply(d, b)
                }, a)
            }
        }

        function k(a) {
            var b, c = !1;
            return function() {
                return c === !1 && (b = a(), c = !0), b
            }
        }

        function l(a, b) {
            var d = j(a, function(a) {
                b.trigger("scroll-debounced", a)
            });
            b.on("scroll", function(a) {
                c(a.target, b.get()) >= 0 && d(a)
            })
        }

        function m(a) {
            a[0] !== document.activeElement && window.setTimeout(function() {
                var b, c = a[0],
                    d = a.val().length;
                a.focus(), a.is(":visible") && c === document.activeElement && (c.setSelectionRange ? c.setSelectionRange(d, d) : c.createTextRange && (b = c.createTextRange(), b.collapse(!1), b.select()))
            }, 0)
        }

        function n(b) {
            b = a(b)[0];
            var c = 0,
                d = 0;
            if ("selectionStart" in b) c = b.selectionStart, d = b.selectionEnd - c;
            else if ("selection" in document) {
                b.focus();
                var e = document.selection.createRange();
                d = document.selection.createRange().text.length, e.moveStart("character", -b.value.length), c = e.text.length - d
            }
            return {
                offset: c,
                length: d
            }
        }

        function o(a) {
            a.preventDefault(), a.stopPropagation()
        }

        function p(a) {
            a.preventDefault(), a.stopImmediatePropagation()
        }

        function q(b) {
            if (!H) {
                var c = b[0].currentStyle || window.getComputedStyle(b[0], null);
                H = a(document.createElement("div")).css({
                    position: "absolute",
                    left: "-10000px",
                    top: "-10000px",
                    display: "none",
                    fontSize: c.fontSize,
                    fontFamily: c.fontFamily,
                    fontStyle: c.fontStyle,
                    fontWeight: c.fontWeight,
                    letterSpacing: c.letterSpacing,
                    textTransform: c.textTransform,
                    whiteSpace: "nowrap"
                }), H.attr("class", "select2-sizer"), a("body").append(H)
            }
            return H.text(b.val()), H.width()
        }

        function r(b, c, d) {
            var e, f, g = [];
            e = b.attr("class"), e && (e = "" + e, a(e.split(" ")).each2(function() {
                0 === this.indexOf("select2-") && g.push(this)
            })), e = c.attr("class"), e && (e = "" + e, a(e.split(" ")).each2(function() {
                0 !== this.indexOf("select2-") && (f = d(this), f && g.push(this))
            })), b.attr("class", g.join(" "))
        }

        function s(a, c, d, e) {
            var f = a.toUpperCase().indexOf(c.toUpperCase()),
                g = c.length;
            return 0 > f ? (d.push(e(a)), b) : (d.push(e(a.substring(0, f))), d.push("<span class='select2-match'>"), d.push(e(a.substring(f, f + g))), d.push("</span>"), d.push(e(a.substring(f + g, a.length))), b)
        }

        function t(a) {
            var b = {
                "\\": "&#92;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;"
            };
            return (a + "").replace(/[&<>"'\/\\]/g, function(a) {
                return b[a]
            })
        }

        function u(c) {
            var d, e = 0,
                f = null,
                g = c.quietMillis || 100,
                h = c.url,
                i = this;
            return function(j) {
                window.clearTimeout(d), d = window.setTimeout(function() {
                    e += 1;
                    var d = e,
                        g = c.data,
                        k = h,
                        l = c.transport || a.fn.select2.ajaxDefaults.transport,
                        m = {
                            type: c.type || "GET",
                            cache: c.cache || !1,
                            jsonpCallback: c.jsonpCallback || b,
                            dataType: c.dataType || "json"
                        },
                        n = a.extend({}, a.fn.select2.ajaxDefaults.params, m);
                    g = g ? g.call(i, j.term, j.page, j.context) : null, k = "function" == typeof k ? k.call(i, j.term, j.page, j.context) : k, f && f.abort(), c.params && (a.isFunction(c.params) ? a.extend(n, c.params.call(i)) : a.extend(n, c.params)), a.extend(n, {
                        url: k,
                        dataType: c.dataType,
                        data: g,
                        success: function(a) {
                            if (!(e > d)) {
                                var b = c.results(a, j.page);
                                j.callback(b)
                            }
                        }
                    }), f = l.call(i, n)
                }, g)
            }
        }

        function v(c) {
            var d, e, f = c,
                g = function(a) {
                    return "" + a.text
                };
            a.isArray(f) && (e = f, f = {
                results: e
            }), a.isFunction(f) === !1 && (e = f, f = function() {
                return e
            });
            var h = f();
            return h.text && (g = h.text, a.isFunction(g) || (d = h.text, g = function(a) {
                    return a[d]
                })),
                function(c) {
                    var d, e = c.term,
                        h = {
                            results: []
                        };
                    return "" === e ? (c.callback(f()), b) : (d = function(b, f) {
                        var h, i;
                        if (b = b[0], b.children) {
                            h = {};
                            for (i in b) b.hasOwnProperty(i) && (h[i] = b[i]);
                            h.children = [], a(b.children).each2(function(a, b) {
                                d(b, h.children)
                            }), (h.children.length || c.matcher(e, g(h), b)) && f.push(h)
                        } else c.matcher(e, g(b), b) && f.push(b)
                    }, a(f().results).each2(function(a, b) {
                        d(b, h.results)
                    }), c.callback(h), b)
                }
        }

        function w(c) {
            var d = a.isFunction(c);
            return function(e) {
                var f = e.term,
                    g = {
                        results: []
                    };
                a(d ? c() : c).each(function() {
                    var a = this.text !== b,
                        c = a ? this.text : this;
                    ("" === f || e.matcher(f, c)) && g.results.push(a ? this : {
                        id: this,
                        text: this
                    })
                }), e.callback(g)
            }
        }

        function x(b, c) {
            if (a.isFunction(b)) return !0;
            if (!b) return !1;
            throw Error(c + " must be a function or a falsy value")
        }

        function y(b) {
            return a.isFunction(b) ? b() : b
        }

        function z(b) {
            var c = 0;
            return a.each(b, function(a, b) {
                b.children ? c += z(b.children) : c++
            }), c
        }

        function A(a, c, d, f) {
            var g, h, i, j, k, l = a,
                m = !1;
            if (!f.createSearchChoice || !f.tokenSeparators || 1 > f.tokenSeparators.length) return b;
            for (;;) {
                for (h = -1, i = 0, j = f.tokenSeparators.length; j > i && (k = f.tokenSeparators[i], h = a.indexOf(k), !(h >= 0)); i++);
                if (0 > h) break;
                if (g = a.substring(0, h), a = a.substring(h + k.length), g.length > 0 && (g = f.createSearchChoice.call(this, g, c), g !== b && null !== g && f.id(g) !== b && null !== f.id(g))) {
                    for (m = !1, i = 0, j = c.length; j > i; i++)
                        if (e(f.id(g), f.id(c[i]))) {
                            m = !0;
                            break
                        }
                    m || d(g)
                }
            }
            return l !== a ? a : b
        }

        function B(b, c) {
            var d = function() {};
            return d.prototype = new b, d.prototype.constructor = d, d.prototype.parent = b.prototype, d.prototype = a.extend(d.prototype, c), d
        }
        if (window.Select2 === b) {
            var C, D, E, F, G, H, I, J, K = {
                    x: 0,
                    y: 0
                },
                C = {
                    TAB: 9,
                    ENTER: 13,
                    ESC: 27,
                    SPACE: 32,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    HOME: 36,
                    END: 35,
                    BACKSPACE: 8,
                    DELETE: 46,
                    isArrow: function(a) {
                        switch (a = a.which ? a.which : a) {
                            case C.LEFT:
                            case C.RIGHT:
                            case C.UP:
                            case C.DOWN:
                                return !0
                        }
                        return !1
                    },
                    isControl: function(a) {
                        var b = a.which;
                        switch (b) {
                            case C.SHIFT:
                            case C.CTRL:
                            case C.ALT:
                                return !0
                        }
                        return a.metaKey ? !0 : !1
                    },
                    isFunctionKey: function(a) {
                        return a = a.which ? a.which : a, a >= 112 && 123 >= a
                    }
                },
                L = "<div class='select2-measure-scrollbar'></div>";
            I = a(document), G = function() {
                var a = 1;
                return function() {
                    return a++
                }
            }(), I.on("mousemove", function(a) {
                K.x = a.pageX, K.y = a.pageY
            }), D = B(Object, {
                bind: function(a) {
                    var b = this;
                    return function() {
                        a.apply(b, arguments)
                    }
                },
                init: function(c) {
                    var e, f, g, j, m = ".select2-results";
                    this.opts = c = this.prepareOpts(c), this.id = c.id, c.element.data("select2") !== b && null !== c.element.data("select2") && c.element.data("select2").destroy(), this.container = this.createContainer(), this.containerId = "s2id_" + (c.element.attr("id") || "autogen" + G()), this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.body = k(function() {
                        return c.element.closest("body")
                    }), r(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.css(y(c.containerCss)), this.container.addClass(y(c.containerCssClass)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), this.dropdown.addClass(y(c.dropdownCssClass)), this.dropdown.data("select2", this), this.results = e = this.container.find(m), this.search = f = this.container.find("input.select2-input"), this.resultsPage = 0, this.context = null, this.initContainer(), i(this.results), this.dropdown.on("mousemove-filtered touchstart touchmove touchend", m, this.bind(this.highlightUnderEvent)), l(80, this.results), this.dropdown.on("scroll-debounced", m, this.bind(this.loadMoreIfNeeded)), a(this.container).on("change", ".select2-input", function(a) {
                        a.stopPropagation()
                    }), a(this.dropdown).on("change", ".select2-input", function(a) {
                        a.stopPropagation()
                    }), a.fn.mousewheel && e.mousewheel(function(a, b, c, d) {
                        var f = e.scrollTop();
                        d > 0 && 0 >= f - d ? (e.scrollTop(0), o(a)) : 0 > d && e.get(0).scrollHeight - e.scrollTop() + d <= e.height() && (e.scrollTop(e.get(0).scrollHeight - e.height()), o(a))
                    }), h(f), f.on("keyup-change input paste", this.bind(this.updateResults)), f.on("focus", function() {
                        f.addClass("select2-focused")
                    }), f.on("blur", function() {
                        f.removeClass("select2-focused")
                    }), this.dropdown.on("mouseup", m, this.bind(function(b) {
                        a(b.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(b), this.selectHighlighted(b))
                    })), this.dropdown.on("click mouseup mousedown", function(a) {
                        a.stopPropagation()
                    }), a.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== c.maximumInputLength && this.search.attr("maxlength", c.maximumInputLength);
                    var g = c.element.prop("disabled");
                    g === b && (g = !1), this.enable(!g);
                    var j = c.element.prop("readonly");
                    j === b && (j = !1), this.readonly(j), J = J || d(), this.autofocus = c.element.prop("autofocus"), c.element.prop("autofocus", !1), this.autofocus && this.focus()
                },
                destroy: function() {
                    var a = this.opts.element,
                        c = a.data("select2");
                    this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), c !== b && (c.container.remove(), c.dropdown.remove(), a.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? a.attr({
                        tabindex: this.elementTabIndex
                    }) : a.removeAttr("tabindex"), a.show())
                },
                optionToData: function(a) {
                    return a.is("option") ? {
                        id: a.prop("value"),
                        text: a.text(),
                        element: a.get(),
                        css: a.attr("class"),
                        disabled: a.prop("disabled"),
                        locked: e(a.attr("locked"), "locked") || e(a.data("locked"), !0)
                    } : a.is("optgroup") ? {
                        text: a.attr("label"),
                        children: [],
                        element: a.get(),
                        css: a.attr("class")
                    } : b
                },
                prepareOpts: function(c) {
                    var d, g, h, i, j = this;
                    if (d = c.element, "select" === d.get(0).tagName.toLowerCase() && (this.select = g = c.element), g && a.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                            if (this in c) throw Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                        }), c = a.extend({}, {
                            populateResults: function(d, e, f) {
                                var g, h = this.opts.id;
                                (g = function(d, e, i) {
                                    var k, l, m, n, o, p, q, r, s, t;
                                    for (d = c.sortResults(d, e, f), k = 0, l = d.length; l > k; k += 1) m = d[k], o = m.disabled === !0, n = !o && h(m) !== b, p = m.children && m.children.length > 0, q = a("<li></li>"), q.addClass("select2-results-dept-" + i), q.addClass("select2-result"), q.addClass(n ? "select2-result-selectable" : "select2-result-unselectable"), o && q.addClass("select2-disabled"), p && q.addClass("select2-result-with-children"), q.addClass(j.opts.formatResultCssClass(m)), r = a(document.createElement("div")), r.addClass("select2-result-label"), t = c.formatResult(m, r, f, j.opts.escapeMarkup), t !== b && r.html(t), q.append(r), p && (s = a("<ul></ul>"), s.addClass("select2-result-sub"), g(m.children, s, i + 1), q.append(s)), q.data("select2-data", m), e.append(q)
                                })(e, d, 0)
                            }
                        }, a.fn.select2.defaults, c), "function" != typeof c.id && (h = c.id, c.id = function(a) {
                            return a[h]
                        }), a.isArray(c.element.data("select2Tags"))) {
                        if ("tags" in c) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + c.element.attr("id");
                        c.tags = c.element.data("select2Tags")
                    }
                    if (g ? (c.query = this.bind(function(a) {
                            var c, e, f, g = {
                                    results: [],
                                    more: !1
                                },
                                h = a.term;
                            f = function(b, c) {
                                var d;
                                b.is("option") ? a.matcher(h, b.text(), b) && c.push(j.optionToData(b)) : b.is("optgroup") && (d = j.optionToData(b), b.children().each2(function(a, b) {
                                    f(b, d.children)
                                }), d.children.length > 0 && c.push(d))
                            }, c = d.children(), this.getPlaceholder() !== b && c.length > 0 && (e = this.getPlaceholderOption(), e && (c = c.not(e))), c.each2(function(a, b) {
                                f(b, g.results)
                            }), a.callback(g)
                        }), c.id = function(a) {
                            return a.id
                        }, c.formatResultCssClass = function(a) {
                            return a.css
                        }) : "query" in c || ("ajax" in c ? (i = c.element.data("ajax-url"), i && i.length > 0 && (c.ajax.url = i), c.query = u.call(c.element, c.ajax)) : "data" in c ? c.query = v(c.data) : "tags" in c && (c.query = w(c.tags), c.createSearchChoice === b && (c.createSearchChoice = function(a) {
                            return {
                                id: a,
                                text: a
                            }
                        }), c.initSelection === b && (c.initSelection = function(d, g) {
                            var h = [];
                            a(f(d.val(), c.separator)).each(function() {
                                var d = this,
                                    f = this,
                                    g = c.tags;
                                a.isFunction(g) && (g = g()), a(g).each(function() {
                                    return e(this.id, d) ? (f = this.text, !1) : b
                                }), h.push({
                                    id: d,
                                    text: f
                                })
                            }), g(h)
                        }))), "function" != typeof c.query) throw "query function not defined for Select2 " + c.element.attr("id");
                    return c
                },
                monitorSource: function() {
                    var a, c = this.opts.element;
                    c.on("change.select2", this.bind(function() {
                        this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                    })), a = this.bind(function() {
                        var a, d = c.prop("disabled");
                        d === b && (d = !1), this.enable(!d);
                        var a = c.prop("readonly");
                        a === b && (a = !1), this.readonly(a), r(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(y(this.opts.containerCssClass)), r(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(y(this.opts.dropdownCssClass))
                    }), c.on("propertychange.select2 DOMAttrModified.select2", a), this.mutationCallback === b && (this.mutationCallback = function(b) {
                        b.forEach(a)
                    }), "undefined" != typeof WebKitMutationObserver && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new WebKitMutationObserver(this.mutationCallback), this.propertyObserver.observe(c.get(0), {
                        attributes: !0,
                        subtree: !1
                    }))
                },
                triggerSelect: function(b) {
                    var c = a.Event("select2-selecting", {
                        val: this.id(b),
                        object: b
                    });
                    return this.opts.element.trigger(c), !c.isDefaultPrevented()
                },
                triggerChange: function(b) {
                    b = b || {}, b = a.extend({}, b, {
                        type: "change",
                        val: this.val()
                    }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(b), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
                },
                isInterfaceEnabled: function() {
                    return this.enabledInterface === !0
                },
                enableInterface: function() {
                    var a = this._enabled && !this._readonly,
                        b = !a;
                    return a === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", b), this.close(), this.enabledInterface = a, !0)
                },
                enable: function(a) {
                    return a === b && (a = !0), this._enabled === a ? !1 : (this._enabled = a, this.opts.element.prop("disabled", !a), this.enableInterface(), !0)
                },
                readonly: function(a) {
                    return a === b && (a = !1), this._readonly === a ? !1 : (this._readonly = a, this.opts.element.prop("readonly", a), this.enableInterface(), !0)
                },
                opened: function() {
                    return this.container.hasClass("select2-dropdown-open")
                },
                positionDropdown: function() {
                    var b, c, d, e, f = this.dropdown,
                        g = this.container.offset(),
                        h = this.container.outerHeight(!1),
                        i = this.container.outerWidth(!1),
                        j = f.outerHeight(!1),
                        k = a(window).scrollLeft() + a(window).width(),
                        l = a(window).scrollTop() + a(window).height(),
                        m = g.top + h,
                        n = g.left,
                        o = l >= m + j,
                        p = g.top - j >= this.body().scrollTop(),
                        q = f.outerWidth(!1),
                        r = k >= n + q,
                        s = f.hasClass("select2-drop-above");
                    this.opts.dropdownAutoWidth ? (e = a(".select2-results", f)[0], f.addClass("select2-drop-auto-width"), f.css("width", ""), q = f.outerWidth(!1) + (e.scrollHeight === e.clientHeight ? 0 : J.width), q > i ? i = q : q = i, r = k >= n + q) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body().css("position") && (b = this.body().offset(), m -= b.top, n -= b.left), s ? (c = !0, !p && o && (c = !1)) : (c = !1, !o && p && (c = !0)), r || (n = g.left + i - q), c ? (m = g.top - j, this.container.addClass("select2-drop-above"), f.addClass("select2-drop-above")) : (this.container.removeClass("select2-drop-above"), f.removeClass("select2-drop-above")), d = a.extend({
                        top: m,
                        left: n,
                        width: i
                    }, y(this.opts.dropdownCss)), f.css(d)
                },
                shouldOpen: function() {
                    var b;
                    return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (b = a.Event("select2-opening"), this.opts.element.trigger(b), !b.isDefaultPrevented())
                },
                clearDropdownAlignmentPreference: function() {
                    this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
                },
                open: function() {
                    return this.shouldOpen() ? (this.opening(), !0) : !1
                },
                opening: function() {
                    function b() {
                        return {
                            width: Math.max(document.documentElement.scrollWidth, a(window).width()),
                            height: Math.max(document.documentElement.scrollHeight, a(window).height())
                        }
                    }
                    var c, d, e = this.containerId,
                        f = "scroll." + e,
                        g = "resize." + e,
                        h = "orientationchange." + e;
                    this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body().children().last()[0] && this.dropdown.detach().appendTo(this.body()), c = a("#select2-drop-mask"), 0 == c.length && (c = a(document.createElement("div")), c.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), c.hide(), c.appendTo(this.body()), c.on("mousedown touchstart click", function(b) {
                        var c, d = a("#select2-drop");
                        d.length > 0 && (c = d.data("select2"), c.opts.selectOnBlur && c.selectHighlighted({
                            noFocus: !0
                        }), c.close(), b.preventDefault(), b.stopPropagation())
                    })), this.dropdown.prev()[0] !== c[0] && this.dropdown.before(c), a("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), d = b(), c.css(d).show(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
                    var i = this;
                    this.container.parents().add(window).each(function() {
                        a(this).on(g + " " + f + " " + h, function() {
                            var c = b();
                            a("#select2-drop-mask").css(c), i.positionDropdown()
                        })
                    })
                },
                close: function() {
                    if (this.opened()) {
                        var b = this.containerId,
                            c = "scroll." + b,
                            d = "resize." + b,
                            e = "orientationchange." + b;
                        this.container.parents().add(window).each(function() {
                            a(this).off(c).off(d).off(e)
                        }), this.clearDropdownAlignmentPreference(), a("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open"), this.results.empty(), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(a.Event("select2-close"))
                    }
                },
                externalSearch: function(a) {
                    this.open(), this.search.val(a), this.updateResults(!1)
                },
                clearSearch: function() {},
                getMaximumSelectionSize: function() {
                    return y(this.opts.maximumSelectionSize)
                },
                ensureHighlightVisible: function() {
                    var c, d, e, f, g, h, i, j = this.results;
                    if (d = this.highlight(), !(0 > d)) {
                        if (0 == d) return j.scrollTop(0), b;
                        c = this.findHighlightableChoices().find(".select2-result-label"), e = a(c[d]), f = e.offset().top + e.outerHeight(!0), d === c.length - 1 && (i = j.find("li.select2-more-results"), i.length > 0 && (f = i.offset().top + i.outerHeight(!0))), g = j.offset().top + j.outerHeight(!0), f > g && j.scrollTop(j.scrollTop() + (f - g)), h = e.offset().top - j.offset().top, 0 > h && "none" != e.css("display") && j.scrollTop(j.scrollTop() + h)
                    }
                },
                findHighlightableChoices: function() {
                    return this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)")
                },
                moveHighlight: function(b) {
                    for (var c = this.findHighlightableChoices(), d = this.highlight(); d > -1 && c.length > d;) {
                        d += b;
                        var e = a(c[d]);
                        if (e.hasClass("select2-result-selectable") && !e.hasClass("select2-disabled") && !e.hasClass("select2-selected")) {
                            this.highlight(d);
                            break
                        }
                    }
                },
                highlight: function(d) {
                    var e, f, g = this.findHighlightableChoices();
                    return 0 === arguments.length ? c(g.filter(".select2-highlighted")[0], g.get()) : (d >= g.length && (d = g.length - 1), 0 > d && (d = 0), this.results.find(".select2-highlighted").removeClass("select2-highlighted"), e = a(g[d]), e.addClass("select2-highlighted"), this.ensureHighlightVisible(), f = e.data("select2-data"), f && this.opts.element.trigger({
                        type: "select2-highlight",
                        val: this.id(f),
                        choice: f
                    }), b)
                },
                countSelectableResults: function() {
                    return this.findHighlightableChoices().length
                },
                highlightUnderEvent: function(b) {
                    var c = a(b.target).closest(".select2-result-selectable");
                    if (c.length > 0 && !c.is(".select2-highlighted")) {
                        var d = this.findHighlightableChoices();
                        this.highlight(d.index(c))
                    } else 0 == c.length && this.results.find(".select2-highlighted").removeClass("select2-highlighted")
                },
                loadMoreIfNeeded: function() {
                    var a, b = this.results,
                        c = b.find("li.select2-more-results"),
                        d = this.resultsPage + 1,
                        e = this,
                        f = this.search.val(),
                        g = this.context;
                    0 !== c.length && (a = c.offset().top - b.offset().top - b.height(), this.opts.loadMorePadding >= a && (c.addClass("select2-active"), this.opts.query({
                        element: this.opts.element,
                        term: f,
                        page: d,
                        context: g,
                        matcher: this.opts.matcher,
                        callback: this.bind(function(a) {
                            e.opened() && (e.opts.populateResults.call(this, b, a.results, {
                                term: f,
                                page: d,
                                context: g
                            }), e.postprocessResults(a, !1, !1), a.more === !0 ? (c.detach().appendTo(b).text(e.opts.formatLoadMore(d + 1)), window.setTimeout(function() {
                                e.loadMoreIfNeeded()
                            }, 10)) : c.remove(), e.positionDropdown(), e.resultsPage = d, e.context = a.context)
                        })
                    })))
                },
                tokenize: function() {},
                updateResults: function(c) {
                    function d() {
                        i.removeClass("select2-active"), l.positionDropdown()
                    }

                    function f(a) {
                        j.html(a), d()
                    }
                    var g, h, i = this.search,
                        j = this.results,
                        k = this.opts,
                        l = this,
                        m = i.val(),
                        n = a.data(this.container, "select2-last-term");
                    if ((c === !0 || !n || !e(m, n)) && (a.data(this.container, "select2-last-term", m), c === !0 || this.showSearchInput !== !1 && this.opened())) {
                        var o = this.getMaximumSelectionSize();
                        if (o >= 1 && (g = this.data(), a.isArray(g) && g.length >= o && x(k.formatSelectionTooBig, "formatSelectionTooBig"))) return f("<li class='select2-selection-limit'>" + k.formatSelectionTooBig(o) + "</li>"), b;
                        if (i.val().length < k.minimumInputLength) return f(x(k.formatInputTooShort, "formatInputTooShort") ? "<li class='select2-no-results'>" + k.formatInputTooShort(i.val(), k.minimumInputLength) + "</li>" : ""), c && this.showSearch && this.showSearch(!0), b;
                        if (k.maximumInputLength && i.val().length > k.maximumInputLength) return f(x(k.formatInputTooLong, "formatInputTooLong") ? "<li class='select2-no-results'>" + k.formatInputTooLong(i.val(), k.maximumInputLength) + "</li>" : ""), b;
                        k.formatSearching && 0 === this.findHighlightableChoices().length && f("<li class='select2-searching'>" + k.formatSearching() + "</li>"), i.addClass("select2-active"), h = this.tokenize(), h != b && null != h && i.val(h), this.resultsPage = 1, k.query({
                            element: k.element,
                            term: i.val(),
                            page: this.resultsPage,
                            context: null,
                            matcher: k.matcher,
                            callback: this.bind(function(g) {
                                var h;
                                return this.opened() ? (this.context = g.context === b ? null : g.context, this.opts.createSearchChoice && "" !== i.val() && (h = this.opts.createSearchChoice.call(l, i.val(), g.results), h !== b && null !== h && l.id(h) !== b && null !== l.id(h) && 0 === a(g.results).filter(function() {
                                    return e(l.id(this), l.id(h))
                                }).length && g.results.unshift(h)), 0 === g.results.length && x(k.formatNoMatches, "formatNoMatches") ? (f("<li class='select2-no-results'>" + k.formatNoMatches(i.val()) + "</li>"), b) : (j.empty(), l.opts.populateResults.call(this, j, g.results, {
                                    term: i.val(),
                                    page: this.resultsPage,
                                    context: null
                                }), g.more === !0 && x(k.formatLoadMore, "formatLoadMore") && (j.append("<li class='select2-more-results'>" + l.opts.escapeMarkup(k.formatLoadMore(this.resultsPage)) + "</li>"), window.setTimeout(function() {
                                    l.loadMoreIfNeeded()
                                }, 10)), this.postprocessResults(g, c), d(), this.opts.element.trigger({
                                    type: "select2-loaded",
                                    items: g
                                }), b)) : (this.search.removeClass("select2-active"), b)
                            })
                        })
                    }
                },
                cancel: function() {
                    this.close()
                },
                blur: function() {
                    this.opts.selectOnBlur && this.selectHighlighted({
                        noFocus: !0
                    }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
                },
                focusSearch: function() {
                    m(this.search)
                },
                selectHighlighted: function(a) {
                    var b = this.highlight(),
                        c = this.results.find(".select2-highlighted"),
                        d = c.closest(".select2-result").data("select2-data");
                    d ? (this.highlight(b), this.onSelect(d, a)) : a && a.noFocus && this.close()
                },
                getPlaceholder: function() {
                    var a;
                    return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((a = this.getPlaceholderOption()) !== b ? a.text() : b)
                },
                getPlaceholderOption: function() {
                    if (this.select) {
                        var a = this.select.children().first();
                        if (this.opts.placeholderOption !== b) return "first" === this.opts.placeholderOption && a || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                        if ("" === a.text() && "" === a.val()) return a
                    }
                },
                initContainerWidth: function() {
                    function c() {
                        var c, d, e, f, g;
                        if ("off" === this.opts.width) return null;
                        if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                        if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                            if (c = this.opts.element.attr("style"), c !== b)
                                for (d = c.split(";"), f = 0, g = d.length; g > f; f += 1)
                                    if (e = d[f].replace(/\s/g, "").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== e && e.length >= 1) return e[1];
                            return "resolve" === this.opts.width ? (c = this.opts.element.css("width"), c.indexOf("%") > 0 ? c : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                        }
                        return a.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                    }
                    var d = c.call(this);
                    null !== d && this.container.css("width", d)
                }
            }), E = B(D, {
                createContainer: function() {
                    var b = a(document.createElement("div")).attr({
                        "class": "select2-container"
                    }).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow'><b></b></span>", "</a>", "<input class='select2-focusser select2-offscreen' type='text'/>", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>", "   </div>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                    return b
                },
                enableInterface: function() {
                    this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
                },
                opening: function() {
                    var b, c, d;
                    this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.search.focus(), b = this.search.get(0), b.createTextRange ? (c = b.createTextRange(), c.collapse(!1), c.select()) : b.setSelectionRange && (d = this.search.val().length, b.setSelectionRange(d, d)), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(a.Event("select2-open"))
                },
                close: function() {
                    this.opened() && (this.parent.close.apply(this, arguments), this.focusser.removeAttr("disabled"), this.focusser.focus())
                },
                focus: function() {
                    this.opened() ? this.close() : (this.focusser.removeAttr("disabled"), this.focusser.focus())
                },
                isFocused: function() {
                    return this.container.hasClass("select2-container-active")
                },
                cancel: function() {
                    this.parent.cancel.apply(this, arguments), this.focusser.removeAttr("disabled"), this.focusser.focus()
                },
                initContainer: function() {
                    var c, d = this.container,
                        e = this.dropdown;
                    this.showSearch(0 > this.opts.minimumResultsForSearch ? !1 : !0), this.selection = c = d.find(".select2-choice"), this.focusser = d.find(".select2-focusser"), this.focusser.attr("id", "s2id_autogen" + G()), a("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.focusser.attr("id")), this.focusser.attr("tabindex", this.elementTabIndex), this.search.on("keydown", this.bind(function(a) {
                        if (this.isInterfaceEnabled()) {
                            if (a.which === C.PAGE_UP || a.which === C.PAGE_DOWN) return o(a), b;
                            switch (a.which) {
                                case C.UP:
                                case C.DOWN:
                                    return this.moveHighlight(a.which === C.UP ? -1 : 1), o(a), b;
                                case C.ENTER:
                                    return this.selectHighlighted(), o(a), b;
                                case C.TAB:
                                    return this.selectHighlighted({
                                        noFocus: !0
                                    }), b;
                                case C.ESC:
                                    return this.cancel(a), o(a), b
                            }
                        }
                    })), this.search.on("blur", this.bind(function() {
                        document.activeElement === this.body().get(0) && window.setTimeout(this.bind(function() {
                            this.search.focus()
                        }), 0)
                    })), this.focusser.on("keydown", this.bind(function(a) {
                        if (this.isInterfaceEnabled() && a.which !== C.TAB && !C.isControl(a) && !C.isFunctionKey(a) && a.which !== C.ESC) {
                            if (this.opts.openOnEnter === !1 && a.which === C.ENTER) return o(a), b;
                            if (a.which == C.DOWN || a.which == C.UP || a.which == C.ENTER && this.opts.openOnEnter) {
                                if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return;
                                return this.open(), o(a), b
                            }
                            return a.which == C.DELETE || a.which == C.BACKSPACE ? (this.opts.allowClear && this.clear(), o(a), b) : b
                        }
                    })), h(this.focusser), this.focusser.on("keyup-change input", this.bind(function(a) {
                        if (this.opts.minimumResultsForSearch >= 0) {
                            if (a.stopPropagation(), this.opened()) return;
                            this.open()
                        }
                    })), c.on("mousedown", "abbr", this.bind(function(a) {
                        this.isInterfaceEnabled() && (this.clear(), p(a), this.close(), this.selection.focus())
                    })), c.on("mousedown", this.bind(function(b) {
                        this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), o(b)
                    })), e.on("mousedown", this.bind(function() {
                        this.search.focus()
                    })), c.on("focus", this.bind(function(a) {
                        o(a)
                    })), this.focusser.on("focus", this.bind(function() {
                        this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active")
                    })).on("blur", this.bind(function() {
                        this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(a.Event("select2-blur")))
                    })), this.search.on("focus", this.bind(function() {
                        this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active")
                    })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.setPlaceholder()
                },
                clear: function(a) {
                    var b = this.selection.data("select2-data");
                    if (b) {
                        var c = this.getPlaceholderOption();
                        this.opts.element.val(c ? c.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), a !== !1 && (this.opts.element.trigger({
                            type: "select2-removed",
                            val: this.id(b),
                            choice: b
                        }), this.triggerChange({
                            removed: b
                        }))
                    }
                },
                initSelection: function() {
                    if (this.isPlaceholderOptionSelected()) this.updateSelection([]), this.close(), this.setPlaceholder();
                    else {
                        var a = this;
                        this.opts.initSelection.call(null, this.opts.element, function(c) {
                            c !== b && null !== c && (a.updateSelection(c), a.close(), a.setPlaceholder())
                        })
                    }
                },
                isPlaceholderOptionSelected: function() {
                    var a;
                    return (a = this.getPlaceholderOption()) !== b && a.is(":selected") || "" === this.opts.element.val() || this.opts.element.val() === b || null === this.opts.element.val()
                },
                prepareOpts: function() {
                    var b = this.parent.prepareOpts.apply(this, arguments),
                        c = this;
                    return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                        var d = a.find(":selected");
                        b(c.optionToData(d))
                    } : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
                        var f = c.val(),
                            g = null;
                        b.query({
                            matcher: function(a, c, d) {
                                var h = e(f, b.id(d));
                                return h && (g = d), h
                            },
                            callback: a.isFunction(d) ? function() {
                                d(g)
                            } : a.noop
                        })
                    }), b
                },
                getPlaceholder: function() {
                    return this.select && this.getPlaceholderOption() === b ? b : this.parent.getPlaceholder.apply(this, arguments)
                },
                setPlaceholder: function() {
                    var a = this.getPlaceholder();
                    if (this.isPlaceholderOptionSelected() && a !== b) {
                        if (this.select && this.getPlaceholderOption() === b) return;
                        this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
                    }
                },
                postprocessResults: function(a, c, d) {
                    var f = 0,
                        g = this;
                    if (this.findHighlightableChoices().each2(function(a, c) {
                            return e(g.id(c.data("select2-data")), g.opts.element.val()) ? (f = a, !1) : b
                        }), d !== !1 && this.highlight(c === !0 && f >= 0 ? f : 0), c === !0) {
                        var h = this.opts.minimumResultsForSearch;
                        h >= 0 && this.showSearch(z(a.results) >= h)
                    }
                },
                showSearch: function(b) {
                    this.showSearchInput !== b && (this.showSearchInput = b, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !b), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !b), a(this.dropdown, this.container).toggleClass("select2-with-searchbox", b))
                },
                onSelect: function(a, b) {
                    if (this.triggerSelect(a)) {
                        var c = this.opts.element.val(),
                            d = this.data();
                        this.opts.element.val(this.id(a)), this.updateSelection(a), this.opts.element.trigger({
                            type: "select2-selected",
                            val: this.id(a),
                            choice: a
                        }), this.close(), b && b.noFocus || this.selection.focus(), e(c, this.id(a)) || this.triggerChange({
                            added: a,
                            removed: d
                        })
                    }
                },
                updateSelection: function(a) {
                    var c, d, e = this.selection.find(".select2-chosen");
                    this.selection.data("select2-data", a), e.empty(), c = this.opts.formatSelection(a, e, this.opts.escapeMarkup), c !== b && e.append(c), d = this.opts.formatSelectionCssClass(a, e), d !== b && e.addClass(d), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== b && this.container.addClass("select2-allowclear")
                },
                val: function() {
                    var a, c = !1,
                        d = null,
                        e = this,
                        f = this.data();
                    if (0 === arguments.length) return this.opts.element.val();
                    if (a = arguments[0], arguments.length > 1 && (c = arguments[1]), this.select) this.select.val(a).find(":selected").each2(function(a, b) {
                        return d = e.optionToData(b), !1
                    }), this.updateSelection(d), this.setPlaceholder(), c && this.triggerChange({
                        added: d,
                        removed: f
                    });
                    else {
                        if (!a && 0 !== a) return this.clear(c), b;
                        if (this.opts.initSelection === b) throw Error("cannot call val() if initSelection() is not defined");
                        this.opts.element.val(a), this.opts.initSelection(this.opts.element, function(a) {
                            e.opts.element.val(a ? e.id(a) : ""), e.updateSelection(a), e.setPlaceholder(), c && e.triggerChange({
                                added: a,
                                removed: f
                            })
                        })
                    }
                },
                clearSearch: function() {
                    this.search.val(""), this.focusser.val("")
                },
                data: function(a, c) {
                    var d;
                    return 0 === arguments.length ? (d = this.selection.data("select2-data"), d == b && (d = null), d) : (a && "" !== a ? (d = this.data(), this.opts.element.val(a ? this.id(a) : ""), this.updateSelection(a), c && this.triggerChange({
                        added: a,
                        removed: d
                    })) : this.clear(c), b)
                }
            }), F = B(D, {
                createContainer: function() {
                    var b = a(document.createElement("div")).attr({
                        "class": "select2-container select2-container-multi"
                    }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitilize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                    return b
                },
                prepareOpts: function() {
                    var b = this.parent.prepareOpts.apply(this, arguments),
                        c = this;
                    return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                        var d = [];
                        a.find(":selected").each2(function(a, b) {
                            d.push(c.optionToData(b))
                        }), b(d)
                    } : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
                        var g = f(c.val(), b.separator),
                            h = [];
                        b.query({
                            matcher: function(c, d, f) {
                                var i = a.grep(g, function(a) {
                                    return e(a, b.id(f))
                                }).length;
                                return i && h.push(f), i
                            },
                            callback: a.isFunction(d) ? function() {
                                for (var a = [], c = 0; g.length > c; c++)
                                    for (var f = g[c], i = 0; h.length > i; i++) {
                                        var j = h[i];
                                        if (e(f, b.id(j))) {
                                            a.push(j), h.splice(i, 1);
                                            break
                                        }
                                    }
                                d(a)
                            } : a.noop
                        })
                    }), b
                },
                selectChoice: function(a) {
                    var b = this.container.find(".select2-search-choice-focus");
                    b.length && a && a[0] == b[0] || (b.length && this.opts.element.trigger("choice-deselected", b), b.removeClass("select2-search-choice-focus"), a && a.length && (this.close(), a.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", a)))
                },
                initContainer: function() {
                    var c, d = ".select2-choices";
                    this.searchContainer = this.container.find(".select2-search-field"), this.selection = c = this.container.find(d);
                    var e = this;
                    this.selection.on("mousedown", ".select2-search-choice", function() {
                        e.search[0].focus(), e.selectChoice(a(this))
                    }), this.search.attr("id", "s2id_autogen" + G()), a("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.search.attr("id")), this.search.on("input paste", this.bind(function() {
                        this.isInterfaceEnabled() && (this.opened() || this.open())
                    })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(a) {
                        if (this.isInterfaceEnabled()) {
                            ++this.keydowns;
                            var d = c.find(".select2-search-choice-focus"),
                                e = d.prev(".select2-search-choice:not(.select2-locked)"),
                                f = d.next(".select2-search-choice:not(.select2-locked)"),
                                g = n(this.search);
                            if (d.length && (a.which == C.LEFT || a.which == C.RIGHT || a.which == C.BACKSPACE || a.which == C.DELETE || a.which == C.ENTER)) {
                                var h = d;
                                return a.which == C.LEFT && e.length ? h = e : a.which == C.RIGHT ? h = f.length ? f : null : a.which === C.BACKSPACE ? (this.unselect(d.first()), this.search.width(10), h = e.length ? e : f) : a.which == C.DELETE ? (this.unselect(d.first()), this.search.width(10), h = f.length ? f : null) : a.which == C.ENTER && (h = null), this.selectChoice(h), o(a), h && h.length || this.open(), b
                            }
                            if ((a.which === C.BACKSPACE && 1 == this.keydowns || a.which == C.LEFT) && 0 == g.offset && !g.length) return this.selectChoice(c.find(".select2-search-choice:not(.select2-locked)").last()), o(a), b;
                            if (this.selectChoice(null), this.opened()) switch (a.which) {
                                case C.UP:
                                case C.DOWN:
                                    return this.moveHighlight(a.which === C.UP ? -1 : 1), o(a), b;
                                case C.ENTER:
                                    return this.selectHighlighted(), o(a), b;
                                case C.TAB:
                                    return this.selectHighlighted({
                                        noFocus: !0
                                    }), this.close(), b;
                                case C.ESC:
                                    return this.cancel(a), o(a), b
                            }
                            if (a.which !== C.TAB && !C.isControl(a) && !C.isFunctionKey(a) && a.which !== C.BACKSPACE && a.which !== C.ESC) {
                                if (a.which === C.ENTER) {
                                    if (this.opts.openOnEnter === !1) return;
                                    if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return
                                }
                                this.open(), (a.which === C.PAGE_UP || a.which === C.PAGE_DOWN) && o(a), a.which === C.ENTER && o(a)
                            }
                        }
                    })), this.search.on("keyup", this.bind(function() {
                        this.keydowns = 0, this.resizeSearch()
                    })), this.search.on("blur", this.bind(function(b) {
                        this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), b.stopImmediatePropagation(), this.opts.element.trigger(a.Event("select2-blur"))
                    })), this.container.on("click", d, this.bind(function(b) {
                        this.isInterfaceEnabled() && (a(b.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.open(), this.focusSearch(), b.preventDefault()))
                    })), this.container.on("focus", d, this.bind(function() {
                        this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
                    })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.clearSearch()
                },
                enableInterface: function() {
                    this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
                },
                initSelection: function() {
                    if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                        var a = this;
                        this.opts.initSelection.call(null, this.opts.element, function(c) {
                            c !== b && null !== c && (a.updateSelection(c), a.close(), a.clearSearch())
                        })
                    }
                },
                clearSearch: function() {
                    var a = this.getPlaceholder(),
                        c = this.getMaxSearchWidth();
                    a !== b && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(a).addClass("select2-default"), this.search.width(c > 0 ? c : this.container.css("width"))) : this.search.val("").width(10)
                },
                clearPlaceholder: function() {
                    this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
                },
                opening: function() {
                    this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), this.updateResults(!0), this.search.focus(), this.opts.element.trigger(a.Event("select2-open"))
                },
                close: function() {
                    this.opened() && this.parent.close.apply(this, arguments)
                },
                focus: function() {
                    this.close(), this.search.focus()
                },
                isFocused: function() {
                    return this.search.hasClass("select2-focused")
                },
                updateSelection: function(b) {
                    var d = [],
                        e = [],
                        f = this;
                    a(b).each(function() {
                        0 > c(f.id(this), d) && (d.push(f.id(this)), e.push(this))
                    }), b = e, this.selection.find(".select2-search-choice").remove(), a(b).each(function() {
                        f.addSelectedChoice(this)
                    }), f.postprocessResults()
                },
                tokenize: function() {
                    var a = this.search.val();
                    a = this.opts.tokenizer.call(this, a, this.data(), this.bind(this.onSelect), this.opts), null != a && a != b && (this.search.val(a), a.length > 0 && this.open())
                },
                onSelect: function(a, b) {
                    this.triggerSelect(a) && (this.addSelectedChoice(a), this.opts.element.trigger({
                        type: "selected",
                        val: this.id(a),
                        choice: a
                    }), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() && this.updateResults(!0), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
                        added: a
                    }), b && b.noFocus || this.focusSearch())
                },
                cancel: function() {
                    this.close(), this.focusSearch()
                },
                addSelectedChoice: function(c) {
                    var d, e, f = !c.locked,
                        g = a("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),
                        h = a("<li class='select2-search-choice select2-locked'><div></div></li>"),
                        i = f ? g : h,
                        j = this.id(c),
                        k = this.getVal();
                    d = this.opts.formatSelection(c, i.find("div"), this.opts.escapeMarkup), d != b && i.find("div").replaceWith("<div>" + d + "</div>"), e = this.opts.formatSelectionCssClass(c, i.find("div")), e != b && i.addClass(e), f && i.find(".select2-search-choice-close").on("mousedown", o).on("click dblclick", this.bind(function(b) {
                        this.isInterfaceEnabled() && (a(b.target).closest(".select2-search-choice").fadeOut("fast", this.bind(function() {
                            this.unselect(a(b.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), this.close(), this.focusSearch()
                        })).dequeue(), o(b))
                    })).on("focus", this.bind(function() {
                        this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
                    })), i.data("select2-data", c), i.insertBefore(this.searchContainer), k.push(j), this.setVal(k)
                },
                unselect: function(a) {
                    var b, d, e = this.getVal();
                    if (a = a.closest(".select2-search-choice"), 0 === a.length) throw "Invalid argument: " + a + ". Must be .select2-search-choice";
                    b = a.data("select2-data"), b && (d = c(this.id(b), e), d >= 0 && (e.splice(d, 1), this.setVal(e), this.select && this.postprocessResults()), a.remove(), this.opts.element.trigger({
                        type: "removed",
                        val: this.id(b),
                        choice: b
                    }), this.triggerChange({
                        removed: b
                    }))
                },
                postprocessResults: function(a, b, d) {
                    var e = this.getVal(),
                        f = this.results.find(".select2-result"),
                        g = this.results.find(".select2-result-with-children"),
                        h = this;
                    f.each2(function(a, b) {
                        var d = h.id(b.data("select2-data"));
                        c(d, e) >= 0 && (b.addClass("select2-selected"), b.find(".select2-result-selectable").addClass("select2-selected"))
                    }), g.each2(function(a, b) {
                        b.is(".select2-result-selectable") || 0 !== b.find(".select2-result-selectable:not(.select2-selected)").length || b.addClass("select2-selected")
                    }), -1 == this.highlight() && d !== !1 && h.highlight(0), !this.opts.createSearchChoice && !f.filter(".select2-result:not(.select2-selected)").length > 0 && (!a || a && !a.more && 0 === this.results.find(".select2-no-results").length) && x(h.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + h.opts.formatNoMatches(h.search.val()) + "</li>")
                },
                getMaxSearchWidth: function() {
                    return this.selection.width() - g(this.search)
                },
                resizeSearch: function() {
                    var a, b, c, d, e, f = g(this.search);
                    a = q(this.search) + 10, b = this.search.offset().left, c = this.selection.width(), d = this.selection.offset().left, e = c - (b - d) - f, a > e && (e = c - f), 40 > e && (e = c - f), 0 >= e && (e = a), this.search.width(e)
                },
                getVal: function() {
                    var a;
                    return this.select ? (a = this.select.val(), null === a ? [] : a) : (a = this.opts.element.val(), f(a, this.opts.separator))
                },
                setVal: function(b) {
                    var d;
                    this.select ? this.select.val(b) : (d = [], a(b).each(function() {
                        0 > c(this, d) && d.push(this)
                    }), this.opts.element.val(0 === d.length ? "" : d.join(this.opts.separator)))
                },
                buildChangeDetails: function(a, b) {
                    for (var b = b.slice(0), a = a.slice(0), c = 0; b.length > c; c++)
                        for (var d = 0; a.length > d; d++) e(this.opts.id(b[c]), this.opts.id(a[d])) && (b.splice(c, 1), c--, a.splice(d, 1), d--);
                    return {
                        added: b,
                        removed: a
                    }
                },
                val: function(c, d) {
                    var e, f = this;
                    if (0 === arguments.length) return this.getVal();
                    if (e = this.data(), e.length || (e = []), !c && 0 !== c) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), d && this.triggerChange({
                        added: this.data(),
                        removed: e
                    }), b;
                    if (this.setVal(c), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), d && this.triggerChange(this.buildChangeDetails(e, this.data()));
                    else {
                        if (this.opts.initSelection === b) throw Error("val() cannot be called if initSelection() is not defined");
                        this.opts.initSelection(this.opts.element, function(b) {
                            var c = a.map(b, f.id);
                            f.setVal(c), f.updateSelection(b), f.clearSearch(), d && f.triggerChange(this.buildChangeDetails(e, this.data()))
                        })
                    }
                    this.clearSearch()
                },
                onSortStart: function() {
                    if (this.select) throw Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                    this.search.width(0), this.searchContainer.hide()
                },
                onSortEnd: function() {
                    var b = [],
                        c = this;
                    this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() {
                        b.push(c.opts.id(a(this).data("select2-data")))
                    }), this.setVal(b), this.triggerChange()
                },
                data: function(c, d) {
                    var e, f, g = this;
                    return 0 === arguments.length ? this.selection.find(".select2-search-choice").map(function() {
                        return a(this).data("select2-data")
                    }).get() : (f = this.data(), c || (c = []), e = a.map(c, function(a) {
                        return g.opts.id(a)
                    }), this.setVal(e), this.updateSelection(c), this.clearSearch(), d && this.triggerChange(this.buildChangeDetails(f, this.data())), b)
                }
            }), a.fn.select2 = function() {
                var d, e, f, g, h, i = Array.prototype.slice.call(arguments, 0),
                    j = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "readonly", "positionDropdown", "data", "search"],
                    k = ["val", "opened", "isFocused", "container", "data"],
                    l = {
                        search: "externalSearch"
                    };
                return this.each(function() {
                    if (0 === i.length || "object" == typeof i[0]) d = 0 === i.length ? {} : a.extend({}, i[0]), d.element = a(this), "select" === d.element.get(0).tagName.toLowerCase() ? h = d.element.prop("multiple") : (h = d.multiple || !1, "tags" in d && (d.multiple = h = !0)), e = h ? new F : new E, e.init(d);
                    else {
                        if ("string" != typeof i[0]) throw "Invalid arguments to select2 plugin: " + i;
                        if (0 > c(i[0], j)) throw "Unknown method: " + i[0];
                        if (g = b, e = a(this).data("select2"), e === b) return;
                        if (f = i[0], "container" === f ? g = e.container : "dropdown" === f ? g = e.dropdown : (l[f] && (f = l[f]), g = e[f].apply(e, i.slice(1))), c(i[0], k) >= 0) return !1
                    }
                }), g === b ? this : g
            }, a.fn.select2.defaults = {
                width: "copy",
                loadMorePadding: 0,
                closeOnSelect: !0,
                openOnEnter: !0,
                containerCss: {},
                dropdownCss: {},
                containerCssClass: "",
                dropdownCssClass: "",
                formatResult: function(a, b, c, d) {
                    var e = [];
                    return s(a.text, c.term, e, d), e.join("")
                },
                formatSelection: function(a, c, d) {
                    return a ? d(a.text) : b
                },
                sortResults: function(a) {
                    return a
                },
                formatResultCssClass: function() {
                    return b
                },
                formatSelectionCssClass: function() {
                    return b
                },
                formatNoMatches: function() {
                    return "No matches found"
                },
                formatInputTooShort: function(a, b) {
                    var c = b - a.length;
                    return "Please enter " + c + " more character" + (1 == c ? "" : "s")
                },
                formatInputTooLong: function(a, b) {
                    var c = a.length - b;
                    return "Please delete " + c + " character" + (1 == c ? "" : "s")
                },
                formatSelectionTooBig: function(a) {
                    return "You can only select " + a + " item" + (1 == a ? "" : "s")
                },
                formatLoadMore: function() {
                    return "Loading more results..."
                },
                formatSearching: function() {
                    return "Searching..."
                },
                minimumResultsForSearch: 0,
                minimumInputLength: 0,
                maximumInputLength: null,
                maximumSelectionSize: 0,
                id: function(a) {
                    return a.id
                },
                matcher: function(a, b) {
                    return ("" + b).toUpperCase().indexOf(("" + a).toUpperCase()) >= 0
                },
                separator: ",",
                tokenSeparators: [],
                tokenizer: A,
                escapeMarkup: t,
                blurOnChange: !1,
                selectOnBlur: !1,
                adaptContainerCssClass: function(a) {
                    return a
                },
                adaptDropdownCssClass: function() {
                    return null
                }
            }, a.fn.select2.ajaxDefaults = {
                transport: a.ajax,
                params: {
                    type: "GET",
                    cache: !1,
                    dataType: "json"
                }
            }, window.Select2 = {
                query: {
                    ajax: u,
                    local: v,
                    tags: w
                },
                util: {
                    debounce: j,
                    markMatch: s,
                    escapeMarkup: t
                },
                "class": {
                    "abstract": D,
                    single: E,
                    multi: F
                }
            }
        }
    }(jQuery),
    function(X, l, n) {
        var L = function(h) {
            var j = function(e) {
                function o(a, b) {
                    var c = j.defaults.columns,
                        d = a.aoColumns.length,
                        c = h.extend({}, j.models.oColumn, c, {
                            sSortingClass: a.oClasses.sSortable,
                            sSortingClassJUI: a.oClasses.sSortJUI,
                            nTh: b ? b : l.createElement("th"),
                            sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
                            aDataSort: c.aDataSort ? c.aDataSort : [d],
                            mData: c.mData ? c.oDefaults : d
                        });
                    a.aoColumns.push(c), a.aoPreSearchCols[d] === n || null === a.aoPreSearchCols[d] ? a.aoPreSearchCols[d] = h.extend({}, j.models.oSearch) : (c = a.aoPreSearchCols[d], c.bRegex === n && (c.bRegex = !0), c.bSmart === n && (c.bSmart = !0), c.bCaseInsensitive === n && (c.bCaseInsensitive = !0)), m(a, d, null)
                }

                function m(a, b, c) {
                    var d = a.aoColumns[b];
                    c !== n && null !== c && (c.mDataProp && !c.mData && (c.mData = c.mDataProp), c.sType !== n && (d.sType = c.sType, d._bAutoType = !1), h.extend(d, c), p(d, c, "sWidth", "sWidthOrig"), c.iDataSort !== n && (d.aDataSort = [c.iDataSort]), p(d, c, "aDataSort"));
                    var e = d.mRender ? Q(d.mRender) : null,
                        f = Q(d.mData);
                    d.fnGetData = function(a, b) {
                        var c = f(a, b);
                        return d.mRender && b && "" !== b ? e(c, b, a) : c
                    }, d.fnSetData = L(d.mData), a.oFeatures.bSort || (d.bSortable = !1), !d.bSortable || -1 == h.inArray("asc", d.asSorting) && -1 == h.inArray("desc", d.asSorting) ? (d.sSortingClass = a.oClasses.sSortableNone, d.sSortingClassJUI = "") : -1 == h.inArray("asc", d.asSorting) && -1 == h.inArray("desc", d.asSorting) ? (d.sSortingClass = a.oClasses.sSortable, d.sSortingClassJUI = a.oClasses.sSortJUI) : -1 != h.inArray("asc", d.asSorting) && -1 == h.inArray("desc", d.asSorting) ? (d.sSortingClass = a.oClasses.sSortableAsc, d.sSortingClassJUI = a.oClasses.sSortJUIAscAllowed) : -1 == h.inArray("asc", d.asSorting) && -1 != h.inArray("desc", d.asSorting) && (d.sSortingClass = a.oClasses.sSortableDesc, d.sSortingClassJUI = a.oClasses.sSortJUIDescAllowed)
                }

                function k(a) {
                    if (!1 === a.oFeatures.bAutoWidth) return !1;
                    da(a);
                    for (var b = 0, c = a.aoColumns.length; c > b; b++) a.aoColumns[b].nTh.style.width = a.aoColumns[b].sWidth
                }

                function G(a, b) {
                    var c = r(a, "bVisible");
                    return "number" == typeof c[b] ? c[b] : null
                }

                function R(a, b) {
                    var c = r(a, "bVisible"),
                        c = h.inArray(b, c);
                    return -1 !== c ? c : null
                }

                function t(a) {
                    return r(a, "bVisible").length
                }

                function r(a, b) {
                    var c = [];
                    return h.map(a.aoColumns, function(a, d) {
                        a[b] && c.push(d)
                    }), c
                }

                function B(a) {
                    for (var b = j.ext.aTypes, c = b.length, d = 0; c > d; d++) {
                        var e = b[d](a);
                        if (null !== e) return e
                    }
                    return "string"
                }

                function u(a, b) {
                    for (var c = b.split(","), d = [], e = 0, f = a.aoColumns.length; f > e; e++)
                        for (var g = 0; f > g; g++)
                            if (a.aoColumns[e].sName == c[g]) {
                                d.push(g);
                                break
                            }
                    return d
                }

                function M(a) {
                    for (var b = "", c = 0, d = a.aoColumns.length; d > c; c++) b += a.aoColumns[c].sName + ",";
                    return b.length == d ? "" : b.slice(0, -1)
                }

                function ta(a, b, c, d) {
                    var e, f, g, i, j;
                    if (b)
                        for (e = b.length - 1; e >= 0; e--) {
                            var k = b[e].aTargets;
                            for (h.isArray(k) || D(a, 1, "aTargets must be an array of targets, not a " + typeof k), f = 0, g = k.length; g > f; f++)
                                if ("number" == typeof k[f] && 0 <= k[f]) {
                                    for (; a.aoColumns.length <= k[f];) o(a);
                                    d(k[f], b[e])
                                } else if ("number" == typeof k[f] && 0 > k[f]) d(a.aoColumns.length + k[f], b[e]);
                            else if ("string" == typeof k[f])
                                for (i = 0, j = a.aoColumns.length; j > i; i++)("_all" == k[f] || h(a.aoColumns[i].nTh).hasClass(k[f])) && d(i, b[e])
                        }
                    if (c)
                        for (e = 0, a = c.length; a > e; e++) d(e, c[e])
                }

                function H(a, b) {
                    var c;
                    c = h.isArray(b) ? b.slice() : h.extend(!0, {}, b);
                    var d = a.aoData.length,
                        e = h.extend(!0, {}, j.models.oRow);
                    e._aData = c, a.aoData.push(e);
                    for (var f, e = 0, g = a.aoColumns.length; g > e; e++) c = a.aoColumns[e], "function" == typeof c.fnRender && c.bUseRendered && null !== c.mData ? F(a, d, e, S(a, d, e)) : F(a, d, e, v(a, d, e)), c._bAutoType && "string" != c.sType && (f = v(a, d, e, "type"), null !== f && "" !== f && (f = B(f), null === c.sType ? c.sType = f : c.sType != f && "html" != c.sType && (c.sType = "string")));
                    return a.aiDisplayMaster.push(d), a.oFeatures.bDeferRender || ea(a, d), d
                }

                function ua(a) {
                    var b, c, d, e, f, g, i;
                    if (a.bDeferLoading || null === a.sAjaxSource)
                        for (b = a.nTBody.firstChild; b;) {
                            if ("TR" == b.nodeName.toUpperCase())
                                for (c = a.aoData.length, b._DT_RowIndex = c, a.aoData.push(h.extend(!0, {}, j.models.oRow, {
                                        nTr: b
                                    })), a.aiDisplayMaster.push(c), f = b.firstChild, d = 0; f;) g = f.nodeName.toUpperCase(), ("TD" == g || "TH" == g) && (F(a, c, d, h.trim(f.innerHTML)), d++), f = f.nextSibling;
                            b = b.nextSibling
                        }
                    for (e = T(a), d = [], b = 0, c = e.length; c > b; b++)
                        for (f = e[b].firstChild; f;) g = f.nodeName.toUpperCase(), ("TD" == g || "TH" == g) && d.push(f), f = f.nextSibling;
                    for (c = 0, e = a.aoColumns.length; e > c; c++) {
                        i = a.aoColumns[c], null === i.sTitle && (i.sTitle = i.nTh.innerHTML);
                        var k, l, m = i._bAutoType,
                            n = "function" == typeof i.fnRender,
                            o = null !== i.sClass,
                            p = i.bVisible;
                        if (m || n || o || !p)
                            for (g = 0, b = a.aoData.length; b > g; g++) f = a.aoData[g], k = d[g * e + c], m && "string" != i.sType && (l = v(a, g, c, "type"),
                                "" !== l && (l = B(l), null === i.sType ? i.sType = l : i.sType != l && "html" != i.sType && (i.sType = "string"))), i.mRender ? k.innerHTML = v(a, g, c, "display") : i.mData !== c && (k.innerHTML = v(a, g, c, "display")), n && (l = S(a, g, c), k.innerHTML = l, i.bUseRendered && F(a, g, c, l)), o && (k.className += " " + i.sClass), p ? f._anHidden[c] = null : (f._anHidden[c] = k, k.parentNode.removeChild(k)), i.fnCreatedCell && i.fnCreatedCell.call(a.oInstance, k, v(a, g, c, "display"), f._aData, g, c)
                    }
                    if (0 !== a.aoRowCreatedCallback.length)
                        for (b = 0, c = a.aoData.length; c > b; b++) f = a.aoData[b], A(a, "aoRowCreatedCallback", null, [f.nTr, f._aData, b])
                }

                function I(a, b) {
                    return b._DT_RowIndex !== n ? b._DT_RowIndex : null
                }

                function fa(a, b, c) {
                    for (var b = J(a, b), d = 0, a = a.aoColumns.length; a > d; d++)
                        if (b[d] === c) return d;
                    return -1
                }

                function Y(a, b, c, d) {
                    for (var e = [], f = 0, g = d.length; g > f; f++) e.push(v(a, b, d[f], c));
                    return e
                }

                function v(a, b, c, d) {
                    var e = a.aoColumns[c];
                    if ((c = e.fnGetData(a.aoData[b]._aData, d)) === n) return a.iDrawError != a.iDraw && null === e.sDefaultContent && (D(a, 0, "Requested unknown parameter " + ("function" == typeof e.mData ? "{mData function}" : "'" + e.mData + "'") + " from the data source for row " + b), a.iDrawError = a.iDraw), e.sDefaultContent;
                    if (null === c && null !== e.sDefaultContent) c = e.sDefaultContent;
                    else if ("function" == typeof c) return c();
                    return "display" == d && null === c ? "" : c
                }

                function F(a, b, c, d) {
                    a.aoColumns[c].fnSetData(a.aoData[b]._aData, d)
                }

                function Q(a) {
                    if (null === a) return function() {
                        return null
                    };
                    if ("function" == typeof a) return function(b, c, d) {
                        return a(b, c, d)
                    };
                    if ("string" == typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("["))) {
                        var b = function(a, c, d) {
                            var e, f = d.split(".");
                            if ("" !== d) {
                                var g = 0;
                                for (e = f.length; e > g; g++) {
                                    if (d = f[g].match(U)) {
                                        f[g] = f[g].replace(U, ""), "" !== f[g] && (a = a[f[g]]), e = [], f.splice(0, g + 1);
                                        for (var f = f.join("."), g = 0, h = a.length; h > g; g++) e.push(b(a[g], c, f));
                                        a = d[0].substring(1, d[0].length - 1), a = "" === a ? e : e.join(a);
                                        break
                                    }
                                    if (null === a || a[f[g]] === n) return n;
                                    a = a[f[g]]
                                }
                            }
                            return a
                        };
                        return function(c, d) {
                            return b(c, d, a)
                        }
                    }
                    return function(b) {
                        return b[a]
                    }
                }

                function L(a) {
                    if (null === a) return function() {};
                    if ("function" == typeof a) return function(b, c) {
                        a(b, "set", c)
                    };
                    if ("string" == typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("["))) {
                        var b = function(a, c, d) {
                            var e, f, d = d.split("."),
                                g = 0;
                            for (f = d.length - 1; f > g; g++) {
                                if (e = d[g].match(U)) {
                                    d[g] = d[g].replace(U, ""), a[d[g]] = [], e = d.slice(), e.splice(0, g + 1), f = e.join(".");
                                    for (var h = 0, i = c.length; i > h; h++) e = {}, b(e, c[h], f), a[d[g]].push(e);
                                    return
                                }(null === a[d[g]] || a[d[g]] === n) && (a[d[g]] = {}), a = a[d[g]]
                            }
                            a[d[d.length - 1].replace(U, "")] = c
                        };
                        return function(c, d) {
                            return b(c, d, a)
                        }
                    }
                    return function(b, c) {
                        b[a] = c
                    }
                }

                function Z(a) {
                    for (var b = [], c = a.aoData.length, d = 0; c > d; d++) b.push(a.aoData[d]._aData);
                    return b
                }

                function ga(a) {
                    a.aoData.splice(0, a.aoData.length), a.aiDisplayMaster.splice(0, a.aiDisplayMaster.length), a.aiDisplay.splice(0, a.aiDisplay.length), y(a)
                }

                function ha(a, b) {
                    for (var c = -1, d = 0, e = a.length; e > d; d++) a[d] == b ? c = d : a[d] > b && a[d]--; - 1 != c && a.splice(c, 1)
                }

                function S(a, b, c) {
                    var d = a.aoColumns[c];
                    return d.fnRender({
                        iDataRow: b,
                        iDataColumn: c,
                        oSettings: a,
                        aData: a.aoData[b]._aData,
                        mDataProp: d.mData
                    }, v(a, b, c, "display"))
                }

                function ea(a, b) {
                    var c, d = a.aoData[b];
                    if (null === d.nTr) {
                        d.nTr = l.createElement("tr"), d.nTr._DT_RowIndex = b, d._aData.DT_RowId && (d.nTr.id = d._aData.DT_RowId), d._aData.DT_RowClass && (d.nTr.className = d._aData.DT_RowClass);
                        for (var e = 0, f = a.aoColumns.length; f > e; e++) {
                            var g = a.aoColumns[e];
                            c = l.createElement(g.sCellType), c.innerHTML = "function" != typeof g.fnRender || g.bUseRendered && null !== g.mData ? v(a, b, e, "display") : S(a, b, e), null !== g.sClass && (c.className = g.sClass), g.bVisible ? (d.nTr.appendChild(c), d._anHidden[e] = null) : d._anHidden[e] = c, g.fnCreatedCell && g.fnCreatedCell.call(a.oInstance, c, v(a, b, e, "display"), d._aData, b, e)
                        }
                        A(a, "aoRowCreatedCallback", null, [d.nTr, d._aData, b])
                    }
                }

                function va(a) {
                    var b, c, d;
                    if (0 !== h("th, td", a.nTHead).length)
                        for (b = 0, d = a.aoColumns.length; d > b; b++) c = a.aoColumns[b].nTh, c.setAttribute("role", "columnheader"), a.aoColumns[b].bSortable && (c.setAttribute("tabindex", a.iTabIndex), c.setAttribute("aria-controls", a.sTableId)), null !== a.aoColumns[b].sClass && h(c).addClass(a.aoColumns[b].sClass), a.aoColumns[b].sTitle != c.innerHTML && (c.innerHTML = a.aoColumns[b].sTitle);
                    else {
                        var e = l.createElement("tr");
                        for (b = 0, d = a.aoColumns.length; d > b; b++) c = a.aoColumns[b].nTh, c.innerHTML = a.aoColumns[b].sTitle, c.setAttribute("tabindex", "0"), null !== a.aoColumns[b].sClass && h(c).addClass(a.aoColumns[b].sClass), e.appendChild(c);
                        h(a.nTHead).html("")[0].appendChild(e), V(a.aoHeader, a.nTHead)
                    }
                    if (h(a.nTHead).children("tr").attr("role", "row"), a.bJUI)
                        for (b = 0, d = a.aoColumns.length; d > b; b++) {
                            c = a.aoColumns[b].nTh, e = l.createElement("div"), e.className = a.oClasses.sSortJUIWrapper, h(c).contents().appendTo(e);
                            var f = l.createElement("span");
                            f.className = a.oClasses.sSortIcon, e.appendChild(f), c.appendChild(e)
                        }
                    if (a.oFeatures.bSort)
                        for (b = 0; b < a.aoColumns.length; b++) !1 !== a.aoColumns[b].bSortable ? ia(a, a.aoColumns[b].nTh, b) : h(a.aoColumns[b].nTh).addClass(a.oClasses.sSortableNone);
                    if ("" !== a.oClasses.sFooterTH && h(a.nTFoot).children("tr").children("th").addClass(a.oClasses.sFooterTH), null !== a.nTFoot)
                        for (c = N(a, null, a.aoFooter), b = 0, d = a.aoColumns.length; d > b; b++) c[b] && (a.aoColumns[b].nTf = c[b], a.aoColumns[b].sClass && h(c[b]).addClass(a.aoColumns[b].sClass))
                }

                function W(a, b, c) {
                    var d, e, f, g, h = [],
                        i = [],
                        j = a.aoColumns.length;
                    for (c === n && (c = !1), d = 0, e = b.length; e > d; d++) {
                        for (h[d] = b[d].slice(), h[d].nTr = b[d].nTr, f = j - 1; f >= 0; f--) !a.aoColumns[f].bVisible && !c && h[d].splice(f, 1);
                        i.push([])
                    }
                    for (d = 0, e = h.length; e > d; d++) {
                        if (a = h[d].nTr)
                            for (; f = a.firstChild;) a.removeChild(f);
                        for (f = 0, b = h[d].length; b > f; f++)
                            if (g = j = 1, i[d][f] === n) {
                                for (a.appendChild(h[d][f].cell), i[d][f] = 1; h[d + j] !== n && h[d][f].cell == h[d + j][f].cell;) i[d + j][f] = 1, j++;
                                for (; h[d][f + g] !== n && h[d][f].cell == h[d][f + g].cell;) {
                                    for (c = 0; j > c; c++) i[d + c][f + g] = 1;
                                    g++
                                }
                                h[d][f].cell.rowSpan = j, h[d][f].cell.colSpan = g
                            }
                    }
                }

                function x(a) {
                    var b = A(a, "aoPreDrawCallback", "preDraw", [a]);
                    if (-1 !== h.inArray(!1, b)) E(a, !1);
                    else {
                        var c, d, b = [],
                            e = 0,
                            f = a.asStripeClasses.length;
                        if (c = a.aoOpenRows.length, a.bDrawing = !0, a.iInitDisplayStart !== n && -1 != a.iInitDisplayStart && (a._iDisplayStart = a.oFeatures.bServerSide ? a.iInitDisplayStart : a.iInitDisplayStart >= a.fnRecordsDisplay() ? 0 : a.iInitDisplayStart, a.iInitDisplayStart = -1, y(a)), a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++;
                        else if (a.oFeatures.bServerSide) {
                            if (!a.bDestroying && !wa(a)) return
                        } else a.iDraw++;
                        if (0 !== a.aiDisplay.length) {
                            var g = a._iDisplayStart;
                            for (d = a._iDisplayEnd, a.oFeatures.bServerSide && (g = 0, d = a.aoData.length); d > g; g++) {
                                var i = a.aoData[a.aiDisplay[g]];
                                null === i.nTr && ea(a, a.aiDisplay[g]);
                                var j = i.nTr;
                                if (0 !== f) {
                                    var k = a.asStripeClasses[e % f];
                                    i._sRowStripe != k && (h(j).removeClass(i._sRowStripe).addClass(k), i._sRowStripe = k)
                                }
                                if (A(a, "aoRowCallback", null, [j, a.aoData[a.aiDisplay[g]]._aData, e, g]), b.push(j), e++, 0 !== c)
                                    for (i = 0; c > i; i++)
                                        if (j == a.aoOpenRows[i].nParent) {
                                            b.push(a.aoOpenRows[i].nTr);
                                            break
                                        }
                            }
                        } else b[0] = l.createElement("tr"), a.asStripeClasses[0] && (b[0].className = a.asStripeClasses[0]), c = a.oLanguage, f = c.sZeroRecords, 1 != a.iDraw || null === a.sAjaxSource || a.oFeatures.bServerSide ? c.sEmptyTable && 0 === a.fnRecordsTotal() && (f = c.sEmptyTable) : f = c.sLoadingRecords, c = l.createElement("td"), c.setAttribute("valign", "top"), c.colSpan = t(a), c.className = a.oClasses.sRowEmpty, c.innerHTML = ja(a, f), b[e].appendChild(c);
                        if (A(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Z(a), a._iDisplayStart, a.fnDisplayEnd(), a.aiDisplay]), A(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Z(a), a._iDisplayStart, a.fnDisplayEnd(), a.aiDisplay]), e = l.createDocumentFragment(), c = l.createDocumentFragment(), a.nTBody) {
                            if (f = a.nTBody.parentNode, c.appendChild(a.nTBody), !a.oScroll.bInfinite || !a._bInitComplete || a.bSorted || a.bFiltered)
                                for (; c = a.nTBody.firstChild;) a.nTBody.removeChild(c);
                            for (c = 0, d = b.length; d > c; c++) e.appendChild(b[c]);
                            a.nTBody.appendChild(e), null !== f && f.appendChild(a.nTBody)
                        }
                        A(a, "aoDrawCallback", "draw", [a]), a.bSorted = !1, a.bFiltered = !1, a.bDrawing = !1, a.oFeatures.bServerSide && (E(a, !1), a._bInitComplete || $(a))
                    }
                }

                function aa(a) {
                    a.oFeatures.bSort ? O(a, a.oPreviousSearch) : a.oFeatures.bFilter ? K(a, a.oPreviousSearch) : (y(a), x(a))
                }

                function xa(a) {
                    var b = h("<div></div>")[0];
                    a.nTable.parentNode.insertBefore(b, a.nTable), a.nTableWrapper = h('<div id="' + a.sTableId + '_wrapper" class="' + a.oClasses.sWrapper + '" role="grid"></div>')[0], a.nTableReinsertBefore = a.nTable.nextSibling;
                    for (var c, d, e, f, g, i, k, l = a.nTableWrapper, m = a.sDom.split(""), n = 0; n < m.length; n++) {
                        if (d = 0, e = m[n], "<" == e) {
                            if (f = h("<div></div>")[0], g = m[n + 1], "'" == g || '"' == g) {
                                for (i = "", k = 2; m[n + k] != g;) i += m[n + k], k++;
                                "H" == i ? i = a.oClasses.sJUIHeader : "F" == i && (i = a.oClasses.sJUIFooter), -1 != i.indexOf(".") ? (g = i.split("."), f.id = g[0].substr(1, g[0].length - 1), f.className = g[1]) : "#" == i.charAt(0) ? f.id = i.substr(1, i.length - 1) : f.className = i, n += k
                            }
                            l.appendChild(f), l = f
                        } else if (">" == e) l = l.parentNode;
                        else if ("l" == e && a.oFeatures.bPaginate && a.oFeatures.bLengthChange) c = ya(a), d = 1;
                        else if ("f" == e && a.oFeatures.bFilter) c = za(a), d = 1;
                        else if ("r" == e && a.oFeatures.bProcessing) c = Aa(a), d = 1;
                        else if ("t" == e) c = Ba(a), d = 1;
                        else if ("i" == e && a.oFeatures.bInfo) c = Ca(a), d = 1;
                        else if ("p" == e && a.oFeatures.bPaginate) c = Da(a), d = 1;
                        else if (0 !== j.ext.aoFeatures.length)
                            for (f = j.ext.aoFeatures, k = 0, g = f.length; g > k; k++)
                                if (e == f[k].cFeature) {
                                    (c = f[k].fnInit(a)) && (d = 1);
                                    break
                                }
                        1 == d && null !== c && ("object" != typeof a.aanFeatures[e] && (a.aanFeatures[e] = []), a.aanFeatures[e].push(c), l.appendChild(c))
                    }
                    b.parentNode.replaceChild(a.nTableWrapper, b)
                }

                function V(a, b) {
                    var c, d, e, f, g, i, j, k, l, m, n = h(b).children("tr");
                    for (a.splice(0, a.length), e = 0, i = n.length; i > e; e++) a.push([]);
                    for (e = 0, i = n.length; i > e; e++)
                        for (c = n[e], d = c.firstChild; d;) {
                            if ("TD" == d.nodeName.toUpperCase() || "TH" == d.nodeName.toUpperCase()) {
                                for (k = 1 * d.getAttribute("colspan"), l = 1 * d.getAttribute("rowspan"), k = k && 0 !== k && 1 !== k ? k : 1, l = l && 0 !== l && 1 !== l ? l : 1, f = 0, g = a[e]; g[f];) f++;
                                for (j = f, m = 1 === k ? !0 : !1, g = 0; k > g; g++)
                                    for (f = 0; l > f; f++) a[e + f][j + g] = {
                                        cell: d,
                                        unique: m
                                    }, a[e + f].nTr = c
                            }
                            d = d.nextSibling
                        }
                }

                function N(a, b, c) {
                    var d = [];
                    c || (c = a.aoHeader, b && (c = [], V(c, b)));
                    for (var b = 0, e = c.length; e > b; b++)
                        for (var f = 0, g = c[b].length; g > f; f++) !c[b][f].unique || d[f] && a.bSortCellsTop || (d[f] = c[b][f].cell);
                    return d
                }

                function wa(a) {
                    if (a.bAjaxDataGet) {
                        a.iDraw++, E(a, !0);
                        var b = Ea(a);
                        return ka(a, b), a.fnServerData.call(a.oInstance, a.sAjaxSource, b, function(b) {
                            Fa(a, b)
                        }, a), !1
                    }
                    return !0
                }

                function Ea(a) {
                    var b, c, d, e, f = a.aoColumns.length,
                        g = [];
                    for (g.push({
                            name: "sEcho",
                            value: a.iDraw
                        }), g.push({
                            name: "iColumns",
                            value: f
                        }), g.push({
                            name: "sColumns",
                            value: M(a)
                        }), g.push({
                            name: "iDisplayStart",
                            value: a._iDisplayStart
                        }), g.push({
                            name: "iDisplayLength",
                            value: !1 !== a.oFeatures.bPaginate ? a._iDisplayLength : -1
                        }), d = 0; f > d; d++) b = a.aoColumns[d].mData, g.push({
                        name: "mDataProp_" + d,
                        value: "function" == typeof b ? "function" : b
                    });
                    if (!1 !== a.oFeatures.bFilter)
                        for (g.push({
                                name: "sSearch",
                                value: a.oPreviousSearch.sSearch
                            }), g.push({
                                name: "bRegex",
                                value: a.oPreviousSearch.bRegex
                            }), d = 0; f > d; d++) g.push({
                            name: "sSearch_" + d,
                            value: a.aoPreSearchCols[d].sSearch
                        }), g.push({
                            name: "bRegex_" + d,
                            value: a.aoPreSearchCols[d].bRegex
                        }), g.push({
                            name: "bSearchable_" + d,
                            value: a.aoColumns[d].bSearchable
                        });
                    if (!1 !== a.oFeatures.bSort) {
                        var h = 0;
                        for (b = null !== a.aaSortingFixed ? a.aaSortingFixed.concat(a.aaSorting) : a.aaSorting.slice(), d = 0; d < b.length; d++)
                            for (c = a.aoColumns[b[d][0]].aDataSort, e = 0; e < c.length; e++) g.push({
                                name: "iSortCol_" + h,
                                value: c[e]
                            }), g.push({
                                name: "sSortDir_" + h,
                                value: b[d][1]
                            }), h++;
                        for (g.push({
                                name: "iSortingCols",
                                value: h
                            }), d = 0; f > d; d++) g.push({
                            name: "bSortable_" + d,
                            value: a.aoColumns[d].bSortable
                        })
                    }
                    return g
                }

                function ka(a, b) {
                    A(a, "aoServerParams", "serverParams", [b])
                }

                function Fa(a, b) {
                    if (b.sEcho !== n) {
                        if (1 * b.sEcho < a.iDraw) return;
                        a.iDraw = 1 * b.sEcho
                    }(!a.oScroll.bInfinite || a.oScroll.bInfinite && (a.bSorted || a.bFiltered)) && ga(a), a._iRecordsTotal = parseInt(b.iTotalRecords, 10), a._iRecordsDisplay = parseInt(b.iTotalDisplayRecords, 10);
                    var c, d = M(a),
                        d = b.sColumns !== n && "" !== d && b.sColumns != d;
                    d && (c = u(a, b.sColumns));
                    for (var e = Q(a.sAjaxDataProp)(b), f = 0, g = e.length; g > f; f++)
                        if (d) {
                            for (var h = [], i = 0, j = a.aoColumns.length; j > i; i++) h.push(e[f][c[i]]);
                            H(a, h)
                        } else H(a, e[f]);
                    a.aiDisplay = a.aiDisplayMaster.slice(), a.bAjaxDataGet = !1, x(a), a.bAjaxDataGet = !0, E(a, !1)
                }

                function za(a) {
                    var b = a.oPreviousSearch,
                        c = a.oLanguage.sSearch,
                        c = -1 !== c.indexOf("_INPUT_") ? c.replace("_INPUT_", '<input type="text" />') : "" === c ? '<input type="text" />' : c + ' <input type="text" />',
                        d = l.createElement("div");
                    return d.className = a.oClasses.sFilter, d.innerHTML = "<label>" + c + "</label>", a.aanFeatures.f || (d.id = a.sTableId + "_filter"), c = h('input[type="text"]', d), d._DT_Input = c[0], c.val(b.sSearch.replace('"', "&quot;")), c.bind("keyup.DT", function() {
                        for (var c = a.aanFeatures.f, d = "" === this.value ? "" : this.value, e = 0, f = c.length; f > e; e++) c[e] != h(this).parents("div.dataTables_filter")[0] && h(c[e]._DT_Input).val(d);
                        d != b.sSearch && K(a, {
                            sSearch: d,
                            bRegex: b.bRegex,
                            bSmart: b.bSmart,
                            bCaseInsensitive: b.bCaseInsensitive
                        })
                    }), c.attr("aria-controls", a.sTableId).bind("keypress.DT", function(a) {
                        return 13 == a.keyCode ? !1 : void 0
                    }), d
                }

                function K(a, b, c) {
                    var d = a.oPreviousSearch,
                        e = a.aoPreSearchCols,
                        f = function(a) {
                            d.sSearch = a.sSearch, d.bRegex = a.bRegex, d.bSmart = a.bSmart, d.bCaseInsensitive = a.bCaseInsensitive
                        };
                    if (a.oFeatures.bServerSide) f(b);
                    else {
                        for (Ga(a, b.sSearch, c, b.bRegex, b.bSmart, b.bCaseInsensitive), f(b), b = 0; b < a.aoPreSearchCols.length; b++) Ha(a, e[b].sSearch, b, e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
                        Ia(a)
                    }
                    a.bFiltered = !0, h(a.oInstance).trigger("filter", a), a._iDisplayStart = 0, y(a), x(a), la(a, 0)
                }

                function Ia(a) {
                    for (var b = j.ext.afnFiltering, c = r(a, "bSearchable"), d = 0, e = b.length; e > d; d++)
                        for (var f = 0, g = 0, h = a.aiDisplay.length; h > g; g++) {
                            var i = a.aiDisplay[g - f];
                            b[d](a, Y(a, i, "filter", c), i) || (a.aiDisplay.splice(g - f, 1), f++)
                        }
                }

                function Ha(a, b, c, d, e, f) {
                    if ("" !== b)
                        for (var g = 0, b = ma(b, d, e, f), d = a.aiDisplay.length - 1; d >= 0; d--) e = Ja(v(a, a.aiDisplay[d], c, "filter"), a.aoColumns[c].sType), b.test(e) || (a.aiDisplay.splice(d, 1), g++)
                }

                function Ga(a, b, c, d, e, f) {
                    if (d = ma(b, d, e, f), e = a.oPreviousSearch, c || (c = 0), 0 !== j.ext.afnFiltering.length && (c = 1), 0 >= b.length) a.aiDisplay.splice(0, a.aiDisplay.length), a.aiDisplay = a.aiDisplayMaster.slice();
                    else if (a.aiDisplay.length == a.aiDisplayMaster.length || e.sSearch.length > b.length || 1 == c || 0 !== b.indexOf(e.sSearch))
                        for (a.aiDisplay.splice(0, a.aiDisplay.length), la(a, 1), b = 0; b < a.aiDisplayMaster.length; b++) d.test(a.asDataSearch[b]) && a.aiDisplay.push(a.aiDisplayMaster[b]);
                    else
                        for (b = c = 0; b < a.asDataSearch.length; b++) d.test(a.asDataSearch[b]) || (a.aiDisplay.splice(b - c, 1), c++)
                }

                function la(a, b) {
                    if (!a.oFeatures.bServerSide) {
                        a.asDataSearch = [];
                        for (var c = r(a, "bSearchable"), d = 1 === b ? a.aiDisplayMaster : a.aiDisplay, e = 0, f = d.length; f > e; e++) a.asDataSearch[e] = na(a, Y(a, d[e], "filter", c))
                    }
                }

                function na(a, b) {
                    var c = b.join("  ");
                    return -1 !== c.indexOf("&") && (c = h("<div>").html(c).text()), c.replace(/[\n\r]/g, " ")
                }

                function ma(a, b, c, d) {
                    return c ? (a = b ? a.split(" ") : oa(a).split(" "), a = "^(?=.*?" + a.join(")(?=.*?") + ").*$", RegExp(a, d ? "i" : "")) : (a = b ? a : oa(a), RegExp(a, d ? "i" : ""))
                }

                function Ja(a, b) {
                    return "function" == typeof j.ext.ofnSearch[b] ? j.ext.ofnSearch[b](a) : null === a ? "" : "html" == b ? a.replace(/[\r\n]/g, " ").replace(/<.*?>/g, "") : "string" == typeof a ? a.replace(/[\r\n]/g, " ") : a
                }

                function oa(a) {
                    return a.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"), "\\$1")
                }

                function Ca(a) {
                    var b = l.createElement("div");
                    return b.className = a.oClasses.sInfo, a.aanFeatures.i || (a.aoDrawCallback.push({
                        fn: Ka,
                        sName: "information"
                    }), b.id = a.sTableId + "_info"), a.nTable.setAttribute("aria-describedby", a.sTableId + "_info"), b
                }

                function Ka(a) {
                    if (a.oFeatures.bInfo && 0 !== a.aanFeatures.i.length) {
                        var b, c = a.oLanguage,
                            d = a._iDisplayStart + 1,
                            e = a.fnDisplayEnd(),
                            f = a.fnRecordsTotal(),
                            g = a.fnRecordsDisplay();
                        for (b = 0 === g ? c.sInfoEmpty : c.sInfo, g != f && (b += " " + c.sInfoFiltered), b += c.sInfoPostFix, b = ja(a, b), null !== c.fnInfoCallback && (b = c.fnInfoCallback.call(a.oInstance, a, d, e, f, g, b)), a = a.aanFeatures.i, c = 0, d = a.length; d > c; c++) h(a[c]).html(b)
                    }
                }

                function ja(a, b) {
                    var c = a.fnFormatNumber(a._iDisplayStart + 1),
                        d = a.fnDisplayEnd(),
                        d = a.fnFormatNumber(d),
                        e = a.fnRecordsDisplay(),
                        e = a.fnFormatNumber(e),
                        f = a.fnRecordsTotal(),
                        f = a.fnFormatNumber(f);
                    return a.oScroll.bInfinite && (c = a.fnFormatNumber(1)), b.replace(/_START_/g, c).replace(/_END_/g, d).replace(/_TOTAL_/g, e).replace(/_MAX_/g, f)
                }

                function ba(a) {
                    var b, c, d = a.iInitDisplayStart;
                    if (!1 === a.bInitialised) setTimeout(function() {
                        ba(a)
                    }, 200);
                    else {
                        for (xa(a), va(a), W(a, a.aoHeader), a.nTFoot && W(a, a.aoFooter), E(a, !0), a.oFeatures.bAutoWidth && da(a), b = 0, c = a.aoColumns.length; c > b; b++) null !== a.aoColumns[b].sWidth && (a.aoColumns[b].nTh.style.width = q(a.aoColumns[b].sWidth));
                        a.oFeatures.bSort ? O(a) : a.oFeatures.bFilter ? K(a, a.oPreviousSearch) : (a.aiDisplay = a.aiDisplayMaster.slice(), y(a), x(a)), null === a.sAjaxSource || a.oFeatures.bServerSide ? a.oFeatures.bServerSide || (E(a, !1), $(a)) : (c = [], ka(a, c), a.fnServerData.call(a.oInstance, a.sAjaxSource, c, function(c) {
                            var e = "" !== a.sAjaxDataProp ? Q(a.sAjaxDataProp)(c) : c;
                            for (b = 0; b < e.length; b++) H(a, e[b]);
                            a.iInitDisplayStart = d, a.oFeatures.bSort ? O(a) : (a.aiDisplay = a.aiDisplayMaster.slice(), y(a), x(a)), E(a, !1), $(a, c)
                        }, a))
                    }
                }

                function $(a, b) {
                    a._bInitComplete = !0, A(a, "aoInitComplete", "init", [a, b])
                }

                function pa(a) {
                    var b = j.defaults.oLanguage;
                    !a.sEmptyTable && a.sZeroRecords && "No data available in table" === b.sEmptyTable && p(a, a, "sZeroRecords", "sEmptyTable"), !a.sLoadingRecords && a.sZeroRecords && "Loading..." === b.sLoadingRecords && p(a, a, "sZeroRecords", "sLoadingRecords")
                }

                function ya(a) {
                    if (a.oScroll.bInfinite) return null;
                    var b, c, d = '<select size="1" ' + ('name="' + a.sTableId + '_length"') + ">",
                        e = a.aLengthMenu;
                    if (2 == e.length && "object" == typeof e[0] && "object" == typeof e[1])
                        for (b = 0, c = e[0].length; c > b; b++) d += '<option value="' + e[0][b] + '">' + e[1][b] + "</option>";
                    else
                        for (b = 0, c = e.length; c > b; b++) d += '<option value="' + e[b] + '">' + e[b] + "</option>";
                    return d += "</select>", e = l.createElement("div"), a.aanFeatures.l || (e.id = a.sTableId + "_length"), e.className = a.oClasses.sLength, e.innerHTML = "<label>" + a.oLanguage.sLengthMenu.replace("_MENU_", d) + "</label>", h('select option[value="' + a._iDisplayLength + '"]', e).attr("selected", !0), h("select", e).bind("change.DT", function() {
                        var d = h(this).val(),
                            e = a.aanFeatures.l;
                        for (b = 0, c = e.length; c > b; b++) e[b] != this.parentNode && h("select", e[b]).val(d);
                        a._iDisplayLength = parseInt(d, 10), y(a), a.fnDisplayEnd() == a.fnRecordsDisplay() && (a._iDisplayStart = a.fnDisplayEnd() - a._iDisplayLength, a._iDisplayStart < 0 && (a._iDisplayStart = 0)), -1 == a._iDisplayLength && (a._iDisplayStart = 0), x(a)
                    }), h("select", e).attr("aria-controls", a.sTableId), e
                }

                function y(a) {
                    a._iDisplayEnd = !1 === a.oFeatures.bPaginate ? a.aiDisplay.length : a._iDisplayStart + a._iDisplayLength > a.aiDisplay.length || -1 == a._iDisplayLength ? a.aiDisplay.length : a._iDisplayStart + a._iDisplayLength
                }

                function Da(a) {
                    if (a.oScroll.bInfinite) return null;
                    var b = l.createElement("div");
                    return b.className = a.oClasses.sPaging + a.sPaginationType, j.ext.oPagination[a.sPaginationType].fnInit(a, b, function(a) {
                        y(a), x(a)
                    }), a.aanFeatures.p || a.aoDrawCallback.push({
                        fn: function(a) {
                            j.ext.oPagination[a.sPaginationType].fnUpdate(a, function(a) {
                                y(a), x(a)
                            })
                        },
                        sName: "pagination"
                    }), b
                }

                function qa(a, b) {
                    var c = a._iDisplayStart;
                    if ("number" == typeof b) a._iDisplayStart = b * a._iDisplayLength, a._iDisplayStart > a.fnRecordsDisplay() && (a._iDisplayStart = 0);
                    else if ("first" == b) a._iDisplayStart = 0;
                    else if ("previous" == b) a._iDisplayStart = 0 <= a._iDisplayLength ? a._iDisplayStart - a._iDisplayLength : 0, 0 > a._iDisplayStart && (a._iDisplayStart = 0);
                    else if ("next" == b) 0 <= a._iDisplayLength ? a._iDisplayStart + a._iDisplayLength < a.fnRecordsDisplay() && (a._iDisplayStart += a._iDisplayLength) : a._iDisplayStart = 0;
                    else if ("last" == b)
                        if (0 <= a._iDisplayLength) {
                            var d = parseInt((a.fnRecordsDisplay() - 1) / a._iDisplayLength, 10) + 1;
                            a._iDisplayStart = (d - 1) * a._iDisplayLength
                        } else a._iDisplayStart = 0;
                    else D(a, 0, "Unknown paging action: " + b);
                    return h(a.oInstance).trigger("page", a), c != a._iDisplayStart
                }

                function Aa(a) {
                    var b = l.createElement("div");
                    return a.aanFeatures.r || (b.id = a.sTableId + "_processing"), b.innerHTML = a.oLanguage.sProcessing, b.className = a.oClasses.sProcessing, a.nTable.parentNode.insertBefore(b, a.nTable), b
                }

                function E(a, b) {
                    if (a.oFeatures.bProcessing)
                        for (var c = a.aanFeatures.r, d = 0, e = c.length; e > d; d++) c[d].style.visibility = b ? "visible" : "hidden";
                    h(a.oInstance).trigger("processing", [a, b])
                }

                function Ba(a) {
                    if ("" === a.oScroll.sX && "" === a.oScroll.sY) return a.nTable;
                    var b = l.createElement("div"),
                        c = l.createElement("div"),
                        d = l.createElement("div"),
                        e = l.createElement("div"),
                        f = l.createElement("div"),
                        g = l.createElement("div"),
                        i = a.nTable.cloneNode(!1),
                        j = a.nTable.cloneNode(!1),
                        k = a.nTable.getElementsByTagName("thead")[0],
                        m = 0 === a.nTable.getElementsByTagName("tfoot").length ? null : a.nTable.getElementsByTagName("tfoot")[0],
                        n = a.oClasses;
                    return c.appendChild(d), f.appendChild(g), e.appendChild(a.nTable), b.appendChild(c), b.appendChild(e), d.appendChild(i), i.appendChild(k), null !== m && (b.appendChild(f), g.appendChild(j), j.appendChild(m)), b.className = n.sScrollWrapper, c.className = n.sScrollHead, d.className = n.sScrollHeadInner, e.className = n.sScrollBody, f.className = n.sScrollFoot, g.className = n.sScrollFootInner, a.oScroll.bAutoCss && (c.style.overflow = "hidden", c.style.position = "relative", f.style.overflow = "hidden", e.style.overflow = "auto"), c.style.border = "0", c.style.width = "100%", f.style.border = "0", d.style.width = "" !== a.oScroll.sXInner ? a.oScroll.sXInner : "100%", i.removeAttribute("id"), i.style.marginLeft = "0", a.nTable.style.marginLeft = "0", null !== m && (j.removeAttribute("id"), j.style.marginLeft = "0"), d = h(a.nTable).children("caption"), 0 < d.length && (d = d[0], "top" === d._captionSide ? i.appendChild(d) : "bottom" === d._captionSide && m && j.appendChild(d)), "" !== a.oScroll.sX && (c.style.width = q(a.oScroll.sX), e.style.width = q(a.oScroll.sX), null !== m && (f.style.width = q(a.oScroll.sX)), h(e).scroll(function() {
                        c.scrollLeft = this.scrollLeft, null !== m && (f.scrollLeft = this.scrollLeft)
                    })), "" !== a.oScroll.sY && (e.style.height = q(a.oScroll.sY)), a.aoDrawCallback.push({
                        fn: La,
                        sName: "scrolling"
                    }), a.oScroll.bInfinite && h(e).scroll(function() {
                        !a.bDrawing && 0 !== h(this).scrollTop() && h(this).scrollTop() + h(this).height() > h(a.nTable).height() - a.oScroll.iLoadGap && a.fnDisplayEnd() < a.fnRecordsDisplay() && (qa(a, "next"), y(a), x(a))
                    }), a.nScrollHead = c, a.nScrollFoot = f, b
                }

                function La(a) {
                    var b, c, d, e, f, g, i, j, k = a.nScrollHead.getElementsByTagName("div")[0],
                        l = k.getElementsByTagName("table")[0],
                        m = a.nTable.parentNode,
                        n = [],
                        o = [],
                        p = null !== a.nTFoot ? a.nScrollFoot.getElementsByTagName("div")[0] : null,
                        r = null !== a.nTFoot ? p.getElementsByTagName("table")[0] : null,
                        s = a.oBrowser.bScrollOversize,
                        t = function(a) {
                            i = a.style, i.paddingTop = "0", i.paddingBottom = "0", i.borderTopWidth = "0", i.borderBottomWidth = "0", i.height = 0
                        };
                    h(a.nTable).children("thead, tfoot").remove(), b = h(a.nTHead).clone()[0], a.nTable.insertBefore(b, a.nTable.childNodes[0]), d = a.nTHead.getElementsByTagName("tr"), e = b.getElementsByTagName("tr"), null !== a.nTFoot && (f = h(a.nTFoot).clone()[0], a.nTable.insertBefore(f, a.nTable.childNodes[1]), g = a.nTFoot.getElementsByTagName("tr"), f = f.getElementsByTagName("tr")), "" === a.oScroll.sX && (m.style.width = "100%", k.parentNode.style.width = "100%");
                    var u = N(a, b);
                    for (b = 0, c = u.length; c > b; b++) j = G(a, b), u[b].style.width = a.aoColumns[j].sWidth;
                    null !== a.nTFoot && C(function(a) {
                        a.style.width = ""
                    }, f), a.oScroll.bCollapse && "" !== a.oScroll.sY && (m.style.height = m.offsetHeight + a.nTHead.offsetHeight + "px"), b = h(a.nTable).outerWidth(), "" === a.oScroll.sX ? (a.nTable.style.width = "100%", s && (h("tbody", m).height() > m.offsetHeight || "scroll" == h(m).css("overflow-y")) && (a.nTable.style.width = q(h(a.nTable).outerWidth() - a.oScroll.iBarWidth))) : "" !== a.oScroll.sXInner ? a.nTable.style.width = q(a.oScroll.sXInner) : b == h(m).width() && h(m).height() < h(a.nTable).height() ? (a.nTable.style.width = q(b - a.oScroll.iBarWidth), h(a.nTable).outerWidth() > b - a.oScroll.iBarWidth && (a.nTable.style.width = q(b))) : a.nTable.style.width = q(b), b = h(a.nTable).outerWidth(), C(t, e), C(function(a) {
                        n.push(q(h(a).width()))
                    }, e), C(function(a, b) {
                        a.style.width = n[b]
                    }, d), h(e).height(0), null !== a.nTFoot && (C(t, f), C(function(a) {
                        o.push(q(h(a).width()))
                    }, f), C(function(a, b) {
                        a.style.width = o[b]
                    }, g), h(f).height(0)), C(function(a, b) {
                        a.innerHTML = "", a.style.width = n[b]
                    }, e), null !== a.nTFoot && C(function(a, b) {
                        a.innerHTML = "", a.style.width = o[b]
                    }, f), h(a.nTable).outerWidth() < b ? (d = m.scrollHeight > m.offsetHeight || "scroll" == h(m).css("overflow-y") ? b + a.oScroll.iBarWidth : b, s && (m.scrollHeight > m.offsetHeight || "scroll" == h(m).css("overflow-y")) && (a.nTable.style.width = q(d - a.oScroll.iBarWidth)), m.style.width = q(d), a.nScrollHead.style.width = q(d), null !== a.nTFoot && (a.nScrollFoot.style.width = q(d)), "" === a.oScroll.sX ? D(a, 1, "The table cannot fit into the current element which will cause column misalignment. The table has been drawn at its minimum possible width.") : "" !== a.oScroll.sXInner && D(a, 1, "The table cannot fit into the current element which will cause column misalignment. Increase the sScrollXInner value or remove it to allow automatic calculation")) : (m.style.width = q("100%"), a.nScrollHead.style.width = q("100%"), null !== a.nTFoot && (a.nScrollFoot.style.width = q("100%"))), "" === a.oScroll.sY && s && (m.style.height = q(a.nTable.offsetHeight + a.oScroll.iBarWidth)), "" !== a.oScroll.sY && a.oScroll.bCollapse && (m.style.height = q(a.oScroll.sY), s = "" !== a.oScroll.sX && a.nTable.offsetWidth > m.offsetWidth ? a.oScroll.iBarWidth : 0, a.nTable.offsetHeight < m.offsetHeight && (m.style.height = q(a.nTable.offsetHeight + s))), s = h(a.nTable).outerWidth(), l.style.width = q(s), k.style.width = q(s), l = h(a.nTable).height() > m.clientHeight || "scroll" == h(m).css("overflow-y"), k.style.paddingRight = l ? a.oScroll.iBarWidth + "px" : "0px", null !== a.nTFoot && (r.style.width = q(s), p.style.width = q(s), p.style.paddingRight = l ? a.oScroll.iBarWidth + "px" : "0px"), h(m).scroll(), (a.bSorted || a.bFiltered) && (m.scrollTop = 0)
                }

                function C(a, b, c) {
                    for (var d, e, f = 0, g = 0, h = b.length; h > g;) {
                        for (d = b[g].firstChild, e = c ? c[g].firstChild : null; d;) 1 === d.nodeType && (c ? a(d, e, f) : a(d, f), f++), d = d.nextSibling, e = c ? e.nextSibling : null;
                        g++
                    }
                }

                function Ma(a, b) {
                    if (!a || null === a || "" === a) return 0;
                    b || (b = l.body);
                    var c, d = l.createElement("div");
                    return d.style.width = q(a), b.appendChild(d), c = d.offsetWidth, b.removeChild(d), c
                }

                function da(a) {
                    var b, c, d, e = 0,
                        f = 0,
                        g = a.aoColumns.length,
                        i = h("th", a.nTHead),
                        j = a.nTable.getAttribute("width");
                    for (d = a.nTable.parentNode, c = 0; g > c; c++) a.aoColumns[c].bVisible && (f++, null !== a.aoColumns[c].sWidth && (b = Ma(a.aoColumns[c].sWidthOrig, d), null !== b && (a.aoColumns[c].sWidth = q(b)), e++));
                    if (g == i.length && 0 === e && f == g && "" === a.oScroll.sX && "" === a.oScroll.sY)
                        for (c = 0; c < a.aoColumns.length; c++) b = h(i[c]).width(), null !== b && (a.aoColumns[c].sWidth = q(b));
                    else {
                        for (e = a.nTable.cloneNode(!1), c = a.nTHead.cloneNode(!0), f = l.createElement("tbody"), b = l.createElement("tr"), e.removeAttribute("id"), e.appendChild(c), null !== a.nTFoot && (e.appendChild(a.nTFoot.cloneNode(!0)), C(function(a) {
                                a.style.width = ""
                            }, e.getElementsByTagName("tr"))), e.appendChild(f), f.appendChild(b), f = h("thead th", e), 0 === f.length && (f = h("tbody tr:eq(0)>td", e)), i = N(a, c), c = f = 0; g > c; c++) {
                            var k = a.aoColumns[c];
                            k.bVisible && null !== k.sWidthOrig && "" !== k.sWidthOrig ? i[c - f].style.width = q(k.sWidthOrig) : k.bVisible ? i[c - f].style.width = "" : f++
                        }
                        for (c = 0; g > c; c++) a.aoColumns[c].bVisible && (f = Na(a, c), null !== f && (f = f.cloneNode(!0), "" !== a.aoColumns[c].sContentPadding && (f.innerHTML += a.aoColumns[c].sContentPadding), b.appendChild(f)));
                        if (d.appendChild(e), "" !== a.oScroll.sX && "" !== a.oScroll.sXInner ? e.style.width = q(a.oScroll.sXInner) : "" !== a.oScroll.sX ? (e.style.width = "", h(e).width() < d.offsetWidth && (e.style.width = q(d.offsetWidth))) : "" !== a.oScroll.sY ? e.style.width = q(d.offsetWidth) : j && (e.style.width = q(j)), e.style.visibility = "hidden", Oa(a, e), g = h("tbody tr:eq(0)", e).children(), 0 === g.length && (g = N(a, h("thead", e)[0])), "" !== a.oScroll.sX) {
                            for (c = f = d = 0; c < a.aoColumns.length; c++) a.aoColumns[c].bVisible && (d = null === a.aoColumns[c].sWidthOrig ? d + h(g[f]).outerWidth() : d + (parseInt(a.aoColumns[c].sWidth.replace("px", ""), 10) + (h(g[f]).outerWidth() - h(g[f]).width())), f++);
                            e.style.width = q(d), a.nTable.style.width = q(d)
                        }
                        for (c = f = 0; c < a.aoColumns.length; c++) a.aoColumns[c].bVisible && (d = h(g[f]).width(), null !== d && d > 0 && (a.aoColumns[c].sWidth = q(d)), f++);
                        g = h(e).css("width"), a.nTable.style.width = -1 !== g.indexOf("%") ? g : q(h(e).outerWidth()), e.parentNode.removeChild(e)
                    }
                    j && (a.nTable.style.width = q(j))
                }

                function Oa(a, b) {
                    "" === a.oScroll.sX && "" !== a.oScroll.sY ? (h(b).width(), b.style.width = q(h(b).outerWidth() - a.oScroll.iBarWidth)) : "" !== a.oScroll.sX && (b.style.width = q(h(b).outerWidth()))
                }

                function Na(a, b) {
                    var c = Pa(a, b);
                    if (0 > c) return null;
                    if (null === a.aoData[c].nTr) {
                        var d = l.createElement("td");
                        return d.innerHTML = v(a, c, b, ""), d
                    }
                    return J(a, c)[b]
                }

                function Pa(a, b) {
                    for (var c = -1, d = -1, e = 0; e < a.aoData.length; e++) {
                        var f = v(a, e, b, "display") + "",
                            f = f.replace(/<.*?>/g, "");
                        f.length > c && (c = f.length, d = e)
                    }
                    return d
                }

                function q(a) {
                    if (null === a) return "0px";
                    if ("number" == typeof a) return 0 > a ? "0px" : a + "px";
                    var b = a.charCodeAt(a.length - 1);
                    return 48 > b || b > 57 ? a : a + "px"
                }

                function Qa() {
                    var a = l.createElement("p"),
                        b = a.style;
                    b.width = "100%", b.height = "200px", b.padding = "0px";
                    var c = l.createElement("div"),
                        b = c.style;
                    return b.position = "absolute", b.top = "0px", b.left = "0px", b.visibility = "hidden", b.width = "200px", b.height = "150px", b.padding = "0px", b.overflow = "hidden", c.appendChild(a), l.body.appendChild(c), b = a.offsetWidth, c.style.overflow = "scroll", a = a.offsetWidth, b == a && (a = c.clientWidth), l.body.removeChild(c), b - a
                }

                function O(a, b) {
                    var c, d, e, f, g, i, k = [],
                        l = [],
                        m = j.ext.oSort,
                        o = a.aoData,
                        p = a.aoColumns,
                        q = a.oLanguage.oAria;
                    if (!a.oFeatures.bServerSide && (0 !== a.aaSorting.length || null !== a.aaSortingFixed)) {
                        for (k = null !== a.aaSortingFixed ? a.aaSortingFixed.concat(a.aaSorting) : a.aaSorting.slice(), c = 0; c < k.length; c++)
                            if (d = k[c][0], e = R(a, d), f = a.aoColumns[d].sSortDataType, j.ext.afnSortData[f])
                                if (g = j.ext.afnSortData[f].call(a.oInstance, a, d, e), g.length === o.length)
                                    for (e = 0, f = o.length; f > e; e++) F(a, e, d, g[e]);
                                else D(a, 0, "Returned data sort array (col " + d + ") is the wrong length");
                        for (c = 0, d = a.aiDisplayMaster.length; d > c; c++) l[a.aiDisplayMaster[c]] = c;
                        var r, s = k.length;
                        for (c = 0, d = o.length; d > c; c++)
                            for (e = 0; s > e; e++)
                                for (r = p[k[e][0]].aDataSort, g = 0, i = r.length; i > g; g++) f = p[r[g]].sType, f = m[(f ? f : "string") + "-pre"], o[c]._aSortData[r[g]] = f ? f(v(a, c, r[g], "sort")) : v(a, c, r[g], "sort");
                        a.aiDisplayMaster.sort(function(a, b) {
                            var c, d, e, f, g;
                            for (c = 0; s > c; c++)
                                for (g = p[k[c][0]].aDataSort, d = 0, e = g.length; e > d; d++)
                                    if (f = p[g[d]].sType, f = m[(f ? f : "string") + "-" + k[c][1]](o[a]._aSortData[g[d]], o[b]._aSortData[g[d]]), 0 !== f) return f;
                            return m["numeric-asc"](l[a], l[b])
                        })
                    }
                    for ((b === n || b) && !a.oFeatures.bDeferRender && P(a), c = 0, d = a.aoColumns.length; d > c; c++) f = p[c].sTitle.replace(/<.*?>/g, ""), e = p[c].nTh, e.removeAttribute("aria-sort"), e.removeAttribute("aria-label"), p[c].bSortable ? 0 < k.length && k[0][0] == c ? (e.setAttribute("aria-sort", "asc" == k[0][1] ? "ascending" : "descending"), e.setAttribute("aria-label", f + ("asc" == (p[c].asSorting[k[0][2] + 1] ? p[c].asSorting[k[0][2] + 1] : p[c].asSorting[0]) ? q.sSortAscending : q.sSortDescending))) : e.setAttribute("aria-label", f + ("asc" == p[c].asSorting[0] ? q.sSortAscending : q.sSortDescending)) : e.setAttribute("aria-label", f);
                    a.bSorted = !0, h(a.oInstance).trigger("sort", a), a.oFeatures.bFilter ? K(a, a.oPreviousSearch, 1) : (a.aiDisplay = a.aiDisplayMaster.slice(), a._iDisplayStart = 0, y(a), x(a))
                }

                function ia(a, b, c, d) {
                    Ra(b, {}, function(b) {
                        if (!1 !== a.aoColumns[c].bSortable) {
                            var e = function() {
                                var d, e;
                                if (b.shiftKey) {
                                    for (var f = !1, g = 0; g < a.aaSorting.length; g++)
                                        if (a.aaSorting[g][0] == c) {
                                            f = !0, d = a.aaSorting[g][0], e = a.aaSorting[g][2] + 1, a.aoColumns[d].asSorting[e] ? (a.aaSorting[g][1] = a.aoColumns[d].asSorting[e], a.aaSorting[g][2] = e) : a.aaSorting.splice(g, 1);
                                            break
                                        }!1 === f && a.aaSorting.push([c, a.aoColumns[c].asSorting[0], 0])
                                } else 1 == a.aaSorting.length && a.aaSorting[0][0] == c ? (d = a.aaSorting[0][0], e = a.aaSorting[0][2] + 1, a.aoColumns[d].asSorting[e] || (e = 0), a.aaSorting[0][1] = a.aoColumns[d].asSorting[e], a.aaSorting[0][2] = e) : (a.aaSorting.splice(0, a.aaSorting.length), a.aaSorting.push([c, a.aoColumns[c].asSorting[0], 0]));
                                O(a)
                            };
                            a.oFeatures.bProcessing ? (E(a, !0), setTimeout(function() {
                                e(), a.oFeatures.bServerSide || E(a, !1)
                            }, 0)) : e(), "function" == typeof d && d(a)
                        }
                    })
                }

                function P(a) {
                    var b, c, d, e, f, g = a.aoColumns.length,
                        i = a.oClasses;
                    for (b = 0; g > b; b++) a.aoColumns[b].bSortable && h(a.aoColumns[b].nTh).removeClass(i.sSortAsc + " " + i.sSortDesc + " " + a.aoColumns[b].sSortingClass);
                    for (c = null !== a.aaSortingFixed ? a.aaSortingFixed.concat(a.aaSorting) : a.aaSorting.slice(), b = 0; b < a.aoColumns.length; b++)
                        if (a.aoColumns[b].bSortable) {
                            for (f = a.aoColumns[b].sSortingClass, e = -1, d = 0; d < c.length; d++)
                                if (c[d][0] == b) {
                                    f = "asc" == c[d][1] ? i.sSortAsc : i.sSortDesc, e = d;
                                    break
                                }
                            h(a.aoColumns[b].nTh).addClass(f), a.bJUI && (f = h("span." + i.sSortIcon, a.aoColumns[b].nTh), f.removeClass(i.sSortJUIAsc + " " + i.sSortJUIDesc + " " + i.sSortJUI + " " + i.sSortJUIAscAllowed + " " + i.sSortJUIDescAllowed), f.addClass(-1 == e ? a.aoColumns[b].sSortingClassJUI : "asc" == c[e][1] ? i.sSortJUIAsc : i.sSortJUIDesc));
                        } else h(a.aoColumns[b].nTh).addClass(a.aoColumns[b].sSortingClass);
                    if (f = i.sSortColumn, a.oFeatures.bSort && a.oFeatures.bSortClasses) {
                        for (a = J(a), e = [], b = 0; g > b; b++) e.push("");
                        for (b = 0, d = 1; b < c.length; b++) i = parseInt(c[b][0], 10), e[i] = f + d, 3 > d && d++;
                        f = RegExp(f + "[123]");
                        var j;
                        for (b = 0, c = a.length; c > b; b++) i = b % g, d = a[b].className, j = e[i], i = d.replace(f, j), i != d ? a[b].className = h.trim(i) : 0 < j.length && -1 == d.indexOf(j) && (a[b].className = d + " " + j)
                    }
                }

                function ra(a) {
                    if (a.oFeatures.bStateSave && !a.bDestroying) {
                        var b, c;
                        b = a.oScroll.bInfinite;
                        var d = {
                            iCreate: (new Date).getTime(),
                            iStart: b ? 0 : a._iDisplayStart,
                            iEnd: b ? a._iDisplayLength : a._iDisplayEnd,
                            iLength: a._iDisplayLength,
                            aaSorting: h.extend(!0, [], a.aaSorting),
                            oSearch: h.extend(!0, {}, a.oPreviousSearch),
                            aoSearchCols: h.extend(!0, [], a.aoPreSearchCols),
                            abVisCols: []
                        };
                        for (b = 0, c = a.aoColumns.length; c > b; b++) d.abVisCols.push(a.aoColumns[b].bVisible);
                        A(a, "aoStateSaveParams", "stateSaveParams", [a, d]), a.fnStateSave.call(a.oInstance, a, d)
                    }
                }

                function Sa(a, b) {
                    if (a.oFeatures.bStateSave) {
                        var c = a.fnStateLoad.call(a.oInstance, a);
                        if (c) {
                            var d = A(a, "aoStateLoadParams", "stateLoadParams", [a, c]);
                            if (-1 === h.inArray(!1, d)) {
                                for (a.oLoadedState = h.extend(!0, {}, c), a._iDisplayStart = c.iStart, a.iInitDisplayStart = c.iStart, a._iDisplayEnd = c.iEnd, a._iDisplayLength = c.iLength, a.aaSorting = c.aaSorting.slice(), a.saved_aaSorting = c.aaSorting.slice(), h.extend(a.oPreviousSearch, c.oSearch), h.extend(!0, a.aoPreSearchCols, c.aoSearchCols), b.saved_aoColumns = [], d = 0; d < c.abVisCols.length; d++) b.saved_aoColumns[d] = {}, b.saved_aoColumns[d].bVisible = c.abVisCols[d];
                                A(a, "aoStateLoaded", "stateLoaded", [a, c])
                            }
                        }
                    }
                }

                function s(a) {
                    for (var b = 0; b < j.settings.length; b++)
                        if (j.settings[b].nTable === a) return j.settings[b];
                    return null
                }

                function T(a) {
                    for (var b = [], a = a.aoData, c = 0, d = a.length; d > c; c++) null !== a[c].nTr && b.push(a[c].nTr);
                    return b
                }

                function J(a, b) {
                    var c, d, e, f, g, h, i = [];
                    d = 0;
                    var j = a.aoData.length;
                    for (b !== n && (d = b, j = b + 1), e = d; j > e; e++)
                        if (h = a.aoData[e], null !== h.nTr) {
                            for (d = [], c = h.nTr.firstChild; c;) f = c.nodeName.toLowerCase(), ("td" == f || "th" == f) && d.push(c), c = c.nextSibling;
                            for (f = c = 0, g = a.aoColumns.length; g > f; f++) a.aoColumns[f].bVisible ? i.push(d[f - c]) : (i.push(h._anHidden[f]), c++)
                        }
                    return i
                }

                function D(a, b, c) {
                    if (a = null === a ? "DataTables warning: " + c : "DataTables warning (table id = '" + a.sTableId + "'): " + c, 0 === b) {
                        if ("alert" != j.ext.sErrMode) throw Error(a);
                        alert(a)
                    } else X.console && console.log && console.log(a)
                }

                function p(a, b, c, d) {
                    d === n && (d = c), b[c] !== n && (a[d] = b[c])
                }

                function Ta(a, b) {
                    var c, d;
                    for (d in b) b.hasOwnProperty(d) && (c = b[d], "object" == typeof e[d] && null !== c && !1 === h.isArray(c) ? h.extend(!0, a[d], c) : a[d] = c);
                    return a
                }

                function Ra(a, b, c) {
                    h(a).bind("click.DT", b, function(b) {
                        a.blur(), c(b)
                    }).bind("keypress.DT", b, function(a) {
                        13 === a.which && c(a)
                    }).bind("selectstart.DT", function() {
                        return !1
                    })
                }

                function z(a, b, c, d) {
                    c && a[b].push({
                        fn: c,
                        sName: d
                    })
                }

                function A(a, b, c, d) {
                    for (var b = a[b], e = [], f = b.length - 1; f >= 0; f--) e.push(b[f].fn.apply(a.oInstance, d));
                    return null !== c && h(a.oInstance).trigger(c, d), e
                }

                function Ua(a) {
                    var b = h('<div style="position:absolute; top:0; left:0; height:1px; width:1px; overflow:hidden"><div style="position:absolute; top:1px; left:1px; width:100px; overflow:scroll;"><div id="DT_BrowserTest" style="width:100%; height:10px;"></div></div></div>')[0];
                    l.body.appendChild(b), a.oBrowser.bScrollOversize = 100 === h("#DT_BrowserTest", b)[0].offsetWidth ? !0 : !1, l.body.removeChild(b)
                }

                function Va(a) {
                    return function() {
                        var b = [s(this[j.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                        return j.ext.oApi[a].apply(this, b)
                    }
                }
                var U = /\[.*?\]$/,
                    Wa = X.JSON ? JSON.stringify : function(a) {
                        var b = typeof a;
                        if ("object" !== b || null === a) return "string" === b && (a = '"' + a + '"'), a + "";
                        var c, d, e = [],
                            f = h.isArray(a);
                        for (c in a) d = a[c], b = typeof d, "string" === b ? d = '"' + d + '"' : "object" === b && null !== d && (d = Wa(d)), e.push((f ? "" : '"' + c + '":') + d);
                        return (f ? "[" : "{") + e + (f ? "]" : "}")
                    };
                this.$ = function(a, b) {
                    var c, d, e, f = [];
                    d = s(this[j.ext.iApiIndex]);
                    var g = d.aoData,
                        i = d.aiDisplay,
                        k = d.aiDisplayMaster;
                    if (b || (b = {}), b = h.extend({}, {
                            filter: "none",
                            order: "current",
                            page: "all"
                        }, b), "current" == b.page)
                        for (c = d._iDisplayStart, d = d.fnDisplayEnd(); d > c; c++)(e = g[i[c]].nTr) && f.push(e);
                    else if ("current" == b.order && "none" == b.filter)
                        for (c = 0, d = k.length; d > c; c++)(e = g[k[c]].nTr) && f.push(e);
                    else if ("current" == b.order && "applied" == b.filter)
                        for (c = 0, d = i.length; d > c; c++)(e = g[i[c]].nTr) && f.push(e);
                    else if ("original" == b.order && "none" == b.filter)
                        for (c = 0, d = g.length; d > c; c++)(e = g[c].nTr) && f.push(e);
                    else if ("original" == b.order && "applied" == b.filter)
                        for (c = 0, d = g.length; d > c; c++) e = g[c].nTr, -1 !== h.inArray(c, i) && e && f.push(e);
                    else D(d, 1, "Unknown selection options");
                    return f = h(f), c = f.filter(a), f = f.find(a), h([].concat(h.makeArray(c), h.makeArray(f)))
                }, this._ = function(a, b) {
                    var c, d, e = [],
                        f = this.$(a, b);
                    for (c = 0, d = f.length; d > c; c++) e.push(this.fnGetData(f[c]));
                    return e
                }, this.fnAddData = function(a, b) {
                    if (0 === a.length) return [];
                    var c, d = [],
                        e = s(this[j.ext.iApiIndex]);
                    if ("object" == typeof a[0] && null !== a[0])
                        for (var f = 0; f < a.length; f++) {
                            if (c = H(e, a[f]), -1 == c) return d;
                            d.push(c)
                        } else {
                            if (c = H(e, a), -1 == c) return d;
                            d.push(c)
                        }
                    return e.aiDisplay = e.aiDisplayMaster.slice(), (b === n || b) && aa(e), d
                }, this.fnAdjustColumnSizing = function(a) {
                    var b = s(this[j.ext.iApiIndex]);
                    k(b), a === n || a ? this.fnDraw(!1) : ("" !== b.oScroll.sX || "" !== b.oScroll.sY) && this.oApi._fnScrollDraw(b)
                }, this.fnClearTable = function(a) {
                    var b = s(this[j.ext.iApiIndex]);
                    ga(b), (a === n || a) && x(b)
                }, this.fnClose = function(a) {
                    for (var b = s(this[j.ext.iApiIndex]), c = 0; c < b.aoOpenRows.length; c++)
                        if (b.aoOpenRows[c].nParent == a) return (a = b.aoOpenRows[c].nTr.parentNode) && a.removeChild(b.aoOpenRows[c].nTr), b.aoOpenRows.splice(c, 1), 0;
                    return 1
                }, this.fnDeleteRow = function(a, b, c) {
                    var d, e, f = s(this[j.ext.iApiIndex]),
                        a = "object" == typeof a ? I(f, a) : a,
                        g = f.aoData.splice(a, 1);
                    for (d = 0, e = f.aoData.length; e > d; d++) null !== f.aoData[d].nTr && (f.aoData[d].nTr._DT_RowIndex = d);
                    return d = h.inArray(a, f.aiDisplay), f.asDataSearch.splice(d, 1), ha(f.aiDisplayMaster, a), ha(f.aiDisplay, a), "function" == typeof b && b.call(this, f, g), f._iDisplayStart >= f.fnRecordsDisplay() && (f._iDisplayStart -= f._iDisplayLength, 0 > f._iDisplayStart && (f._iDisplayStart = 0)), (c === n || c) && (y(f), x(f)), g
                }, this.fnDestroy = function(a) {
                    var b, c, d = s(this[j.ext.iApiIndex]),
                        f = d.nTableWrapper.parentNode,
                        g = d.nTBody,
                        a = a === n ? !1 : a;
                    if (d.bDestroying = !0, A(d, "aoDestroyCallback", "destroy", [d]), !a)
                        for (b = 0, c = d.aoColumns.length; c > b; b++) !1 === d.aoColumns[b].bVisible && this.fnSetColumnVis(b, !0);
                    for (h(d.nTableWrapper).find("*").andSelf().unbind(".DT"), h("tbody>tr>td." + d.oClasses.sRowEmpty, d.nTable).parent().remove(), d.nTable != d.nTHead.parentNode && (h(d.nTable).children("thead").remove(), d.nTable.appendChild(d.nTHead)), d.nTFoot && d.nTable != d.nTFoot.parentNode && (h(d.nTable).children("tfoot").remove(), d.nTable.appendChild(d.nTFoot)), d.nTable.parentNode.removeChild(d.nTable), h(d.nTableWrapper).remove(), d.aaSorting = [], d.aaSortingFixed = [], P(d), h(T(d)).removeClass(d.asStripeClasses.join(" ")), h("th, td", d.nTHead).removeClass([d.oClasses.sSortable, d.oClasses.sSortableAsc, d.oClasses.sSortableDesc, d.oClasses.sSortableNone].join(" ")), d.bJUI && (h("th span." + d.oClasses.sSortIcon + ", td span." + d.oClasses.sSortIcon, d.nTHead).remove(), h("th, td", d.nTHead).each(function() {
                            var a = h("div." + d.oClasses.sSortJUIWrapper, this),
                                b = a.contents();
                            h(this).append(b), a.remove()
                        })), !a && d.nTableReinsertBefore ? f.insertBefore(d.nTable, d.nTableReinsertBefore) : a || f.appendChild(d.nTable), b = 0, c = d.aoData.length; c > b; b++) null !== d.aoData[b].nTr && g.appendChild(d.aoData[b].nTr);
                    if (!0 === d.oFeatures.bAutoWidth && (d.nTable.style.width = q(d.sDestroyWidth)), c = d.asDestroyStripes.length)
                        for (a = h(g).children("tr"), b = 0; c > b; b++) a.filter(":nth-child(" + c + "n + " + b + ")").addClass(d.asDestroyStripes[b]);
                    for (b = 0, c = j.settings.length; c > b; b++) j.settings[b] == d && j.settings.splice(b, 1);
                    e = d = null
                }, this.fnDraw = function(a) {
                    var b = s(this[j.ext.iApiIndex]);
                    !1 === a ? (y(b), x(b)) : aa(b)
                }, this.fnFilter = function(a, b, c, d, e, f) {
                    var g = s(this[j.ext.iApiIndex]);
                    if (g.oFeatures.bFilter)
                        if ((c === n || null === c) && (c = !1), (d === n || null === d) && (d = !0), (e === n || null === e) && (e = !0), (f === n || null === f) && (f = !0), b === n || null === b) {
                            if (K(g, {
                                    sSearch: a + "",
                                    bRegex: c,
                                    bSmart: d,
                                    bCaseInsensitive: f
                                }, 1), e && g.aanFeatures.f)
                                for (b = g.aanFeatures.f, c = 0, d = b.length; d > c; c++) try {
                                    b[c]._DT_Input != l.activeElement && h(b[c]._DT_Input).val(a)
                                } catch (i) {
                                    h(b[c]._DT_Input).val(a)
                                }
                        } else h.extend(g.aoPreSearchCols[b], {
                            sSearch: a + "",
                            bRegex: c,
                            bSmart: d,
                            bCaseInsensitive: f
                        }), K(g, g.oPreviousSearch, 1)
                }, this.fnGetData = function(a, b) {
                    var c = s(this[j.ext.iApiIndex]);
                    if (a !== n) {
                        var d = a;
                        if ("object" == typeof a) {
                            var e = a.nodeName.toLowerCase();
                            "tr" === e ? d = I(c, a) : "td" === e && (d = I(c, a.parentNode), b = fa(c, d, a))
                        }
                        return b !== n ? v(c, d, b, "") : c.aoData[d] !== n ? c.aoData[d]._aData : null
                    }
                    return Z(c)
                }, this.fnGetNodes = function(a) {
                    var b = s(this[j.ext.iApiIndex]);
                    return a !== n ? b.aoData[a] !== n ? b.aoData[a].nTr : null : T(b)
                }, this.fnGetPosition = function(a) {
                    var b = s(this[j.ext.iApiIndex]),
                        c = a.nodeName.toUpperCase();
                    return "TR" == c ? I(b, a) : "TD" == c || "TH" == c ? (c = I(b, a.parentNode), a = fa(b, c, a), [c, R(b, a), a]) : null
                }, this.fnIsOpen = function(a) {
                    for (var b = s(this[j.ext.iApiIndex]), c = 0; c < b.aoOpenRows.length; c++)
                        if (b.aoOpenRows[c].nParent == a) return !0;
                    return !1
                }, this.fnOpen = function(a, b, c) {
                    var d = s(this[j.ext.iApiIndex]),
                        e = T(d);
                    if (-1 !== h.inArray(a, e)) {
                        this.fnClose(a);
                        var e = l.createElement("tr"),
                            f = l.createElement("td");
                        return e.appendChild(f), f.className = c, f.colSpan = t(d), "string" == typeof b ? f.innerHTML = b : h(f).html(b), b = h("tr", d.nTBody), -1 != h.inArray(a, b) && h(e).insertAfter(a), d.aoOpenRows.push({
                            nTr: e,
                            nParent: a
                        }), e
                    }
                }, this.fnPageChange = function(a, b) {
                    var c = s(this[j.ext.iApiIndex]);
                    qa(c, a), y(c), (b === n || b) && x(c)
                }, this.fnSetColumnVis = function(a, b, c) {
                    var d, e, f, g, h = s(this[j.ext.iApiIndex]),
                        i = h.aoColumns,
                        l = h.aoData;
                    if (i[a].bVisible != b) {
                        if (b) {
                            for (d = e = 0; a > d; d++) i[d].bVisible && e++;
                            if (g = e >= t(h), !g)
                                for (d = a; d < i.length; d++)
                                    if (i[d].bVisible) {
                                        f = d;
                                        break
                                    }
                            for (d = 0, e = l.length; e > d; d++) null !== l[d].nTr && (g ? l[d].nTr.appendChild(l[d]._anHidden[a]) : l[d].nTr.insertBefore(l[d]._anHidden[a], J(h, d)[f]))
                        } else
                            for (d = 0, e = l.length; e > d; d++) null !== l[d].nTr && (f = J(h, d)[a], l[d]._anHidden[a] = f, f.parentNode.removeChild(f));
                        for (i[a].bVisible = b, W(h, h.aoHeader), h.nTFoot && W(h, h.aoFooter), d = 0, e = h.aoOpenRows.length; e > d; d++) h.aoOpenRows[d].nTr.colSpan = t(h);
                        (c === n || c) && (k(h), x(h)), ra(h)
                    }
                }, this.fnSettings = function() {
                    return s(this[j.ext.iApiIndex])
                }, this.fnSort = function(a) {
                    var b = s(this[j.ext.iApiIndex]);
                    b.aaSorting = a, O(b)
                }, this.fnSortListener = function(a, b, c) {
                    ia(s(this[j.ext.iApiIndex]), a, b, c)
                }, this.fnUpdate = function(a, b, c, d, e) {
                    var f = s(this[j.ext.iApiIndex]),
                        b = "object" == typeof b ? I(f, b) : b;
                    if (h.isArray(a) && c === n)
                        for (f.aoData[b]._aData = a.slice(), c = 0; c < f.aoColumns.length; c++) this.fnUpdate(v(f, b, c), b, c, !1, !1);
                    else if (h.isPlainObject(a) && c === n)
                        for (f.aoData[b]._aData = h.extend(!0, {}, a), c = 0; c < f.aoColumns.length; c++) this.fnUpdate(v(f, b, c), b, c, !1, !1);
                    else {
                        F(f, b, c, a);
                        var a = v(f, b, c, "display"),
                            g = f.aoColumns[c];
                        null !== g.fnRender && (a = S(f, b, c), g.bUseRendered && F(f, b, c, a)), null !== f.aoData[b].nTr && (J(f, b)[c].innerHTML = a)
                    }
                    return c = h.inArray(b, f.aiDisplay), f.asDataSearch[c] = na(f, Y(f, b, "filter", r(f, "bSearchable"))), (e === n || e) && k(f), (d === n || d) && aa(f), 0
                }, this.fnVersionCheck = j.ext.fnVersionCheck, this.oApi = {
                    _fnExternApiFunc: Va,
                    _fnInitialise: ba,
                    _fnInitComplete: $,
                    _fnLanguageCompat: pa,
                    _fnAddColumn: o,
                    _fnColumnOptions: m,
                    _fnAddData: H,
                    _fnCreateTr: ea,
                    _fnGatherData: ua,
                    _fnBuildHead: va,
                    _fnDrawHead: W,
                    _fnDraw: x,
                    _fnReDraw: aa,
                    _fnAjaxUpdate: wa,
                    _fnAjaxParameters: Ea,
                    _fnAjaxUpdateDraw: Fa,
                    _fnServerParams: ka,
                    _fnAddOptionsHtml: xa,
                    _fnFeatureHtmlTable: Ba,
                    _fnScrollDraw: La,
                    _fnAdjustColumnSizing: k,
                    _fnFeatureHtmlFilter: za,
                    _fnFilterComplete: K,
                    _fnFilterCustom: Ia,
                    _fnFilterColumn: Ha,
                    _fnFilter: Ga,
                    _fnBuildSearchArray: la,
                    _fnBuildSearchRow: na,
                    _fnFilterCreateSearch: ma,
                    _fnDataToSearch: Ja,
                    _fnSort: O,
                    _fnSortAttachListener: ia,
                    _fnSortingClasses: P,
                    _fnFeatureHtmlPaginate: Da,
                    _fnPageChange: qa,
                    _fnFeatureHtmlInfo: Ca,
                    _fnUpdateInfo: Ka,
                    _fnFeatureHtmlLength: ya,
                    _fnFeatureHtmlProcessing: Aa,
                    _fnProcessingDisplay: E,
                    _fnVisibleToColumnIndex: G,
                    _fnColumnIndexToVisible: R,
                    _fnNodeToDataIndex: I,
                    _fnVisbleColumns: t,
                    _fnCalculateEnd: y,
                    _fnConvertToWidth: Ma,
                    _fnCalculateColumnWidths: da,
                    _fnScrollingWidthAdjust: Oa,
                    _fnGetWidestNode: Na,
                    _fnGetMaxLenString: Pa,
                    _fnStringToCss: q,
                    _fnDetectType: B,
                    _fnSettingsFromNode: s,
                    _fnGetDataMaster: Z,
                    _fnGetTrNodes: T,
                    _fnGetTdNodes: J,
                    _fnEscapeRegex: oa,
                    _fnDeleteIndex: ha,
                    _fnReOrderIndex: u,
                    _fnColumnOrdering: M,
                    _fnLog: D,
                    _fnClearTable: ga,
                    _fnSaveState: ra,
                    _fnLoadState: Sa,
                    _fnCreateCookie: function(a, b, c, d, e) {
                        var f = new Date;
                        f.setTime(f.getTime() + 1e3 * c);
                        var c = X.location.pathname.split("/"),
                            a = a + "_" + c.pop().replace(/[\/:]/g, "").toLowerCase(),
                            g;
                        if (null !== e ? (g = "function" == typeof h.parseJSON ? h.parseJSON(b) : eval("(" + b + ")"), b = e(a, g, f.toGMTString(), c.join("/") + "/")) : b = a + "=" + encodeURIComponent(b) + "; expires=" + f.toGMTString() + "; path=" + c.join("/") + "/", a = l.cookie.split(";"), e = b.split(";")[0].length, f = [], 4096 < e + l.cookie.length + 10) {
                            for (var j = 0, o = a.length; o > j; j++)
                                if (-1 != a[j].indexOf(d)) {
                                    var k = a[j].split("=");
                                    try {
                                        (g = eval("(" + decodeURIComponent(k[1]) + ")")) && g.iCreate && f.push({
                                            name: k[0],
                                            time: g.iCreate
                                        })
                                    } catch (m) {}
                                }
                            for (f.sort(function(a, b) {
                                    return b.time - a.time
                                }); 4096 < e + l.cookie.length + 10;) {
                                if (0 === f.length) return;
                                d = f.pop(), l.cookie = d.name + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + c.join("/") + "/"
                            }
                        }
                        l.cookie = b
                    },
                    _fnReadCookie: function(a) {
                        for (var b = X.location.pathname.split("/"), a = a + "_" + b[b.length - 1].replace(/[\/:]/g, "").toLowerCase() + "=", b = l.cookie.split(";"), c = 0; c < b.length; c++) {
                            for (var d = b[c];
                                " " == d.charAt(0);) d = d.substring(1, d.length);
                            if (0 === d.indexOf(a)) return decodeURIComponent(d.substring(a.length, d.length))
                        }
                        return null
                    },
                    _fnDetectHeader: V,
                    _fnGetUniqueThs: N,
                    _fnScrollBarWidth: Qa,
                    _fnApplyToChildren: C,
                    _fnMap: p,
                    _fnGetRowData: Y,
                    _fnGetCellData: v,
                    _fnSetCellData: F,
                    _fnGetObjectDataFn: Q,
                    _fnSetObjectDataFn: L,
                    _fnApplyColumnDefs: ta,
                    _fnBindAction: Ra,
                    _fnExtend: Ta,
                    _fnCallbackReg: z,
                    _fnCallbackFire: A,
                    _fnJsonString: Wa,
                    _fnRender: S,
                    _fnNodeToColumnIndex: fa,
                    _fnInfoMacros: ja,
                    _fnBrowserDetect: Ua,
                    _fnGetColumns: r
                }, h.extend(j.ext.oApi, this.oApi);
                for (var sa in j.ext.oApi) sa && (this[sa] = Va(sa));
                var ca = this;
                return this.each(function() {
                    var a, b, c, d = 0;
                    b = this.getAttribute("id");
                    var f = !1,
                        g = !1;
                    if ("table" != this.nodeName.toLowerCase()) D(null, 0, "Attempted to initialise DataTables on a node which is not a table: " + this.nodeName);
                    else {
                        for (d = 0, a = j.settings.length; a > d; d++) {
                            if (j.settings[d].nTable == this) {
                                if (e === n || e.bRetrieve) return j.settings[d].oInstance;
                                if (e.bDestroy) {
                                    j.settings[d].oInstance.fnDestroy();
                                    break
                                }
                                return void D(j.settings[d], 0, "Cannot reinitialise DataTable.\n\nTo retrieve the DataTables object for this table, pass no arguments or see the docs for bRetrieve and bDestroy")
                            }
                            if (j.settings[d].sTableId == this.id) {
                                j.settings.splice(d, 1);
                                break
                            }
                        }(null === b || "" === b) && (this.id = b = "DataTables_Table_" + j.ext._oExternConfig.iNextUnique++);
                        var i = h.extend(!0, {}, j.models.oSettings, {
                            nTable: this,
                            oApi: ca.oApi,
                            oInit: e,
                            sDestroyWidth: h(this).width(),
                            sInstance: b,
                            sTableId: b
                        });
                        if (j.settings.push(i), i.oInstance = 1 === ca.length ? ca : h(this).dataTable(), e || (e = {}), e.oLanguage && pa(e.oLanguage), e = Ta(h.extend(!0, {}, j.defaults), e), p(i.oFeatures, e, "bPaginate"), p(i.oFeatures, e, "bLengthChange"), p(i.oFeatures, e, "bFilter"), p(i.oFeatures, e, "bSort"), p(i.oFeatures, e, "bInfo"), p(i.oFeatures, e, "bProcessing"), p(i.oFeatures, e, "bAutoWidth"), p(i.oFeatures, e, "bSortClasses"), p(i.oFeatures, e, "bServerSide"), p(i.oFeatures, e, "bDeferRender"), p(i.oScroll, e, "sScrollX", "sX"), p(i.oScroll, e, "sScrollXInner", "sXInner"), p(i.oScroll, e, "sScrollY", "sY"), p(i.oScroll, e, "bScrollCollapse", "bCollapse"), p(i.oScroll, e, "bScrollInfinite", "bInfinite"), p(i.oScroll, e, "iScrollLoadGap", "iLoadGap"), p(i.oScroll, e, "bScrollAutoCss", "bAutoCss"), p(i, e, "asStripeClasses"), p(i, e, "asStripClasses", "asStripeClasses"), p(i, e, "fnServerData"), p(i, e, "fnFormatNumber"), p(i, e, "sServerMethod"), p(i, e, "aaSorting"), p(i, e, "aaSortingFixed"), p(i, e, "aLengthMenu"), p(i, e, "sPaginationType"), p(i, e, "sAjaxSource"), p(i, e, "sAjaxDataProp"), p(i, e, "iCookieDuration"), p(i, e, "sCookiePrefix"), p(i, e, "sDom"), p(i, e, "bSortCellsTop"), p(i, e, "iTabIndex"), p(i, e, "oSearch", "oPreviousSearch"), p(i, e, "aoSearchCols", "aoPreSearchCols"), p(i, e, "iDisplayLength", "_iDisplayLength"), p(i, e, "bJQueryUI", "bJUI"), p(i, e, "fnCookieCallback"), p(i, e, "fnStateLoad"), p(i, e, "fnStateSave"), p(i.oLanguage, e, "fnInfoCallback"), z(i, "aoDrawCallback", e.fnDrawCallback, "user"), z(i, "aoServerParams", e.fnServerParams, "user"), z(i, "aoStateSaveParams", e.fnStateSaveParams, "user"), z(i, "aoStateLoadParams", e.fnStateLoadParams, "user"), z(i, "aoStateLoaded", e.fnStateLoaded, "user"), z(i, "aoRowCallback", e.fnRowCallback, "user"), z(i, "aoRowCreatedCallback", e.fnCreatedRow, "user"), z(i, "aoHeaderCallback", e.fnHeaderCallback, "user"), z(i, "aoFooterCallback", e.fnFooterCallback, "user"), z(i, "aoInitComplete", e.fnInitComplete, "user"), z(i, "aoPreDrawCallback", e.fnPreDrawCallback, "user"), i.oFeatures.bServerSide && i.oFeatures.bSort && i.oFeatures.bSortClasses ? z(i, "aoDrawCallback", P, "server_side_sort_classes") : i.oFeatures.bDeferRender && z(i, "aoDrawCallback", P, "defer_sort_classes"), e.bJQueryUI ? (h.extend(i.oClasses, j.ext.oJUIClasses), e.sDom === j.defaults.sDom && "lfrtip" === j.defaults.sDom && (i.sDom = '<"H"lfr>t<"F"ip>')) : h.extend(i.oClasses, j.ext.oStdClasses), h(this).addClass(i.oClasses.sTable), ("" !== i.oScroll.sX || "" !== i.oScroll.sY) && (i.oScroll.iBarWidth = Qa()), i.iInitDisplayStart === n && (i.iInitDisplayStart = e.iDisplayStart, i._iDisplayStart = e.iDisplayStart), e.bStateSave && (i.oFeatures.bStateSave = !0, Sa(i, e), z(i, "aoDrawCallback", ra, "state_save")), null !== e.iDeferLoading && (i.bDeferLoading = !0, d = h.isArray(e.iDeferLoading), i._iRecordsDisplay = d ? e.iDeferLoading[0] : e.iDeferLoading, i._iRecordsTotal = d ? e.iDeferLoading[1] : e.iDeferLoading), null !== e.aaData && (g = !0), "" !== e.oLanguage.sUrl ? (i.oLanguage.sUrl = e.oLanguage.sUrl, h.getJSON(i.oLanguage.sUrl, null, function(a) {
                                pa(a), h.extend(!0, i.oLanguage, e.oLanguage, a), ba(i)
                            }), f = !0) : h.extend(!0, i.oLanguage, e.oLanguage), null === e.asStripeClasses && (i.asStripeClasses = [i.oClasses.sStripeOdd, i.oClasses.sStripeEven]), a = i.asStripeClasses.length, i.asDestroyStripes = [], a) {
                            for (b = !1, c = h(this).children("tbody").children("tr:lt(" + a + ")"), d = 0; a > d; d++) c.hasClass(i.asStripeClasses[d]) && (b = !0, i.asDestroyStripes.push(i.asStripeClasses[d]));
                            b && c.removeClass(i.asStripeClasses.join(" "))
                        }
                        if (b = [], d = this.getElementsByTagName("thead"), 0 !== d.length && (V(i.aoHeader, d[0]), b = N(i)), null === e.aoColumns)
                            for (c = [], d = 0, a = b.length; a > d; d++) c.push(null);
                        else c = e.aoColumns;
                        for (d = 0, a = c.length; a > d; d++) e.saved_aoColumns !== n && e.saved_aoColumns.length == a && (null === c[d] && (c[d] = {}), c[d].bVisible = e.saved_aoColumns[d].bVisible), o(i, b ? b[d] : null);
                        for (ta(i, e.aoColumnDefs, c, function(a, b) {
                                m(i, a, b)
                            }), d = 0, a = i.aaSorting.length; a > d; d++) {
                            i.aaSorting[d][0] >= i.aoColumns.length && (i.aaSorting[d][0] = 0);
                            var k = i.aoColumns[i.aaSorting[d][0]];
                            for (i.aaSorting[d][2] === n && (i.aaSorting[d][2] = 0), e.aaSorting === n && i.saved_aaSorting === n && (i.aaSorting[d][1] = k.asSorting[0]), b = 0, c = k.asSorting.length; c > b; b++)
                                if (i.aaSorting[d][1] == k.asSorting[b]) {
                                    i.aaSorting[d][2] = b;
                                    break
                                }
                        }
                        if (P(i), Ua(i), d = h(this).children("caption").each(function() {
                                this._captionSide = h(this).css("caption-side")
                            }), a = h(this).children("thead"), 0 === a.length && (a = [l.createElement("thead")], this.appendChild(a[0])), i.nTHead = a[0], a = h(this).children("tbody"), 0 === a.length && (a = [l.createElement("tbody")], this.appendChild(a[0])), i.nTBody = a[0], i.nTBody.setAttribute("role", "alert"), i.nTBody.setAttribute("aria-live", "polite"), i.nTBody.setAttribute("aria-relevant", "all"), a = h(this).children("tfoot"), 0 === a.length && 0 < d.length && ("" !== i.oScroll.sX || "" !== i.oScroll.sY) && (a = [l.createElement("tfoot")], this.appendChild(a[0])), 0 < a.length && (i.nTFoot = a[0], V(i.aoFooter, i.nTFoot)), g)
                            for (d = 0; d < e.aaData.length; d++) H(i, e.aaData[d]);
                        else ua(i);
                        i.aiDisplay = i.aiDisplayMaster.slice(), i.bInitialised = !0, !1 === f && ba(i)
                    }
                }), ca = null, this
            };
            j.fnVersionCheck = function(a) {
                for (var b = function(a, b) {
                        for (; a.length < b;) a += "0";
                        return a
                    }, c = j.ext.sVersion.split("."), a = a.split("."), d = "", e = "", f = 0, g = a.length; g > f; f++) d += b(c[f], 3), e += b(a[f], 3);
                return parseInt(d, 10) >= parseInt(e, 10)
            }, j.fnIsDataTable = function(a) {
                for (var b = j.settings, c = 0; c < b.length; c++)
                    if (b[c].nTable === a || b[c].nScrollHead === a || b[c].nScrollFoot === a) return !0;
                return !1
            }, j.fnTables = function(a) {
                var b = [];
                return jQuery.each(j.settings, function(c, d) {
                    (!a || !0 === a && h(d.nTable).is(":visible")) && b.push(d.nTable)
                }), b
            }, j.version = "1.9.4", j.settings = [], j.models = {}, j.models.ext = {
                afnFiltering: [],
                afnSortData: [],
                aoFeatures: [],
                aTypes: [],
                fnVersionCheck: j.fnVersionCheck,
                iApiIndex: 0,
                ofnSearch: {},
                oApi: {},
                oStdClasses: {},
                oJUIClasses: {},
                oPagination: {},
                oSort: {},
                sVersion: j.version,
                sErrMode: "alert",
                _oExternConfig: {
                    iNextUnique: 0
                }
            }, j.models.oSearch = {
                bCaseInsensitive: !0,
                sSearch: "",
                bRegex: !1,
                bSmart: !0
            }, j.models.oRow = {
                nTr: null,
                _aData: [],
                _aSortData: [],
                _anHidden: [],
                _sRowStripe: ""
            }, j.models.oColumn = {
                aDataSort: null,
                asSorting: null,
                bSearchable: null,
                bSortable: null,
                bUseRendered: null,
                bVisible: null,
                _bAutoType: !0,
                fnCreatedCell: null,
                fnGetData: null,
                fnRender: null,
                fnSetData: null,
                mData: null,
                mRender: null,
                nTh: null,
                nTf: null,
                sClass: null,
                sContentPadding: null,
                sDefaultContent: null,
                sName: null,
                sSortDataType: "std",
                sSortingClass: null,
                sSortingClassJUI: null,
                sTitle: null,
                sType: null,
                sWidth: null,
                sWidthOrig: null
            }, j.defaults = {
                aaData: null,
                aaSorting: [
                    [0, "asc"]
                ],
                aaSortingFixed: null,
                aLengthMenu: [10, 25, 50, 100],
                aoColumns: null,
                aoColumnDefs: null,
                aoSearchCols: [],
                asStripeClasses: null,
                bAutoWidth: !0,
                bDeferRender: !1,
                bDestroy: !1,
                bFilter: !0,
                bInfo: !0,
                bJQueryUI: !1,
                bLengthChange: !0,
                bPaginate: !0,
                bProcessing: !1,
                bRetrieve: !1,
                bScrollAutoCss: !0,
                bScrollCollapse: !1,
                bScrollInfinite: !1,
                bServerSide: !1,
                bSort: !0,
                bSortCellsTop: !1,
                bSortClasses: !0,
                bStateSave: !1,
                fnCookieCallback: null,
                fnCreatedRow: null,
                fnDrawCallback: null,
                fnFooterCallback: null,
                fnFormatNumber: function(a) {
                    if (1e3 > a) return a;
                    for (var b = a + "", a = b.split(""), c = "", b = b.length, d = 0; b > d; d++) 0 === d % 3 && 0 !== d && (c = this.oLanguage.sInfoThousands + c), c = a[b - d - 1] + c;
                    return c
                },
                fnHeaderCallback: null,
                fnInfoCallback: null,
                fnInitComplete: null,
                fnPreDrawCallback: null,
                fnRowCallback: null,
                fnServerData: function(a, b, c, d) {
                    d.jqXHR = h.ajax({
                        url: a,
                        data: b,
                        success: function(a) {
                            a.sError && d.oApi._fnLog(d, 0, a.sError), h(d.oInstance).trigger("xhr", [d, a]), c(a)
                        },
                        dataType: "json",
                        cache: !1,
                        type: d.sServerMethod,
                        error: function(a, b) {
                            "parsererror" == b && d.oApi._fnLog(d, 0, "DataTables warning: JSON data from server could not be parsed. This is caused by a JSON formatting error.")
                        }
                    })
                },
                fnServerParams: null,
                fnStateLoad: function(e) {
                    var e = this.oApi._fnReadCookie(e.sCookiePrefix + e.sInstance),
                        j;
                    try {
                        j = "function" == typeof h.parseJSON ? h.parseJSON(e) : eval("(" + e + ")")
                    } catch (m) {
                        j = null
                    }
                    return j
                },
                fnStateLoadParams: null,
                fnStateLoaded: null,
                fnStateSave: function(a, b) {
                    this.oApi._fnCreateCookie(a.sCookiePrefix + a.sInstance, this.oApi._fnJsonString(b), a.iCookieDuration, a.sCookiePrefix, a.fnCookieCallback)
                },
                fnStateSaveParams: null,
                iCookieDuration: 7200,
                iDeferLoading: null,
                iDisplayLength: 10,
                iDisplayStart: 0,
                iScrollLoadGap: 100,
                iTabIndex: 0,
                oLanguage: {
                    oAria: {
                        sSortAscending: ": activate to sort column ascending",
                        sSortDescending: ": activate to sort column descending"
                    },
                    oPaginate: {
                        sFirst: "First",
                        sLast: "Last",
                        sNext: "Next",
                        sPrevious: "Previous"
                    },
                    sEmptyTable: "No data available in table",
                    sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                    sInfoEmpty: "Showing 0 to 0 of 0 entries",
                    sInfoFiltered: "(filtered from _MAX_ total entries)",
                    sInfoPostFix: "",
                    sInfoThousands: ",",
                    sLengthMenu: "Show _MENU_ entries",
                    sLoadingRecords: "Loading...",
                    sProcessing: "Processing...",
                    sSearch: "Search:",
                    sUrl: "",
                    sZeroRecords: "No matching records found"
                },
                oSearch: h.extend({}, j.models.oSearch),
                sAjaxDataProp: "aaData",
                sAjaxSource: null,
                sCookiePrefix: "SpryMedia_DataTables_",
                sDom: "lfrtip",
                sPaginationType: "two_button",
                sScrollX: "",
                sScrollXInner: "",
                sScrollY: "",
                sServerMethod: "GET"
            }, j.defaults.columns = {
                aDataSort: null,
                asSorting: ["asc", "desc"],
                bSearchable: !0,
                bSortable: !0,
                bUseRendered: !0,
                bVisible: !0,
                fnCreatedCell: null,
                fnRender: null,
                iDataSort: -1,
                mData: null,
                mRender: null,
                sCellType: "td",
                sClass: "",
                sContentPadding: "",
                sDefaultContent: null,
                sName: "",
                sSortDataType: "std",
                sTitle: null,
                sType: null,
                sWidth: null
            }, j.models.oSettings = {
                oFeatures: {
                    bAutoWidth: null,
                    bDeferRender: null,
                    bFilter: null,
                    bInfo: null,
                    bLengthChange: null,
                    bPaginate: null,
                    bProcessing: null,
                    bServerSide: null,
                    bSort: null,
                    bSortClasses: null,
                    bStateSave: null
                },
                oScroll: {
                    bAutoCss: null,
                    bCollapse: null,
                    bInfinite: null,
                    iBarWidth: 0,
                    iLoadGap: null,
                    sX: null,
                    sXInner: null,
                    sY: null
                },
                oLanguage: {
                    fnInfoCallback: null
                },
                oBrowser: {
                    bScrollOversize: !1
                },
                aanFeatures: [],
                aoData: [],
                aiDisplay: [],
                aiDisplayMaster: [],
                aoColumns: [],
                aoHeader: [],
                aoFooter: [],
                asDataSearch: [],
                oPreviousSearch: {},
                aoPreSearchCols: [],
                aaSorting: null,
                aaSortingFixed: null,
                asStripeClasses: null,
                asDestroyStripes: [],
                sDestroyWidth: 0,
                aoRowCallback: [],
                aoHeaderCallback: [],
                aoFooterCallback: [],
                aoDrawCallback: [],
                aoRowCreatedCallback: [],
                aoPreDrawCallback: [],
                aoInitComplete: [],
                aoStateSaveParams: [],
                aoStateLoadParams: [],
                aoStateLoaded: [],
                sTableId: "",
                nTable: null,
                nTHead: null,
                nTFoot: null,
                nTBody: null,
                nTableWrapper: null,
                bDeferLoading: !1,
                bInitialised: !1,
                aoOpenRows: [],
                sDom: null,
                sPaginationType: "two_button",
                iCookieDuration: 0,
                sCookiePrefix: "",
                fnCookieCallback: null,
                aoStateSave: [],
                aoStateLoad: [],
                oLoadedState: null,
                sAjaxSource: null,
                sAjaxDataProp: null,
                bAjaxDataGet: !0,
                jqXHR: null,
                fnServerData: null,
                aoServerParams: [],
                sServerMethod: null,
                fnFormatNumber: null,
                aLengthMenu: null,
                iDraw: 0,
                bDrawing: !1,
                iDrawError: -1,
                _iDisplayLength: 10,
                _iDisplayStart: 0,
                _iDisplayEnd: 10,
                _iRecordsTotal: 0,
                _iRecordsDisplay: 0,
                bJUI: null,
                oClasses: {},
                bFiltered: !1,
                bSorted: !1,
                bSortCellsTop: null,
                oInit: null,
                aoDestroyCallback: [],
                fnRecordsTotal: function() {
                    return this.oFeatures.bServerSide ? parseInt(this._iRecordsTotal, 10) : this.aiDisplayMaster.length
                },
                fnRecordsDisplay: function() {
                    return this.oFeatures.bServerSide ? parseInt(this._iRecordsDisplay, 10) : this.aiDisplay.length
                },
                fnDisplayEnd: function() {
                    return this.oFeatures.bServerSide ? !1 === this.oFeatures.bPaginate || -1 == this._iDisplayLength ? this._iDisplayStart + this.aiDisplay.length : Math.min(this._iDisplayStart + this._iDisplayLength, this._iRecordsDisplay) : this._iDisplayEnd
                },
                oInstance: null,
                sInstance: null,
                iTabIndex: 0,
                nScrollHead: null,
                nScrollFoot: null
            }, j.ext = h.extend(!0, {}, j.models.ext), h.extend(j.ext.oStdClasses, {
                sTable: "dataTable",
                sPagePrevEnabled: "paginate_enabled_previous",
                sPagePrevDisabled: "paginate_disabled_previous",
                sPageNextEnabled: "paginate_enabled_next",
                sPageNextDisabled: "paginate_disabled_next",
                sPageJUINext: "",
                sPageJUIPrev: "",
                sPageButton: "paginate_button",
                sPageButtonActive: "paginate_active",
                sPageButtonStaticDisabled: "paginate_button paginate_button_disabled",
                sPageFirst: "first",
                sPagePrevious: "previous",
                sPageNext: "next",
                sPageLast: "last",
                sStripeOdd: "odd",
                sStripeEven: "even",
                sRowEmpty: "dataTables_empty",
                sWrapper: "dataTables_wrapper",
                sFilter: "dataTables_filter",
                sInfo: "dataTables_info",
                sPaging: "dataTables_paginate paging_",
                sLength: "dataTables_length",
                sProcessing: "dataTables_processing",
                sSortAsc: "sorting_asc",
                sSortDesc: "sorting_desc",
                sSortable: "sorting",
                sSortableAsc: "sorting_asc_disabled",
                sSortableDesc: "sorting_desc_disabled",
                sSortableNone: "sorting_disabled",
                sSortColumn: "sorting_",
                sSortJUIAsc: "",
                sSortJUIDesc: "",
                sSortJUI: "",
                sSortJUIAscAllowed: "",
                sSortJUIDescAllowed: "",
                sSortJUIWrapper: "",
                sSortIcon: "",
                sScrollWrapper: "dataTables_scroll",
                sScrollHead: "dataTables_scrollHead",
                sScrollHeadInner: "dataTables_scrollHeadInner",
                sScrollBody: "dataTables_scrollBody",
                sScrollFoot: "dataTables_scrollFoot",
                sScrollFootInner: "dataTables_scrollFootInner",
                sFooterTH: "",
                sJUIHeader: "",
                sJUIFooter: ""
            }), h.extend(j.ext.oJUIClasses, j.ext.oStdClasses, {
                sPagePrevEnabled: "fg-button ui-button ui-state-default ui-corner-left",
                sPagePrevDisabled: "fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",
                sPageNextEnabled: "fg-button ui-button ui-state-default ui-corner-right",
                sPageNextDisabled: "fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",
                sPageJUINext: "ui-icon ui-icon-circle-arrow-e",
                sPageJUIPrev: "ui-icon ui-icon-circle-arrow-w",
                sPageButton: "fg-button ui-button ui-state-default",
                sPageButtonActive: "fg-button ui-button ui-state-default ui-state-disabled",
                sPageButtonStaticDisabled: "fg-button ui-button ui-state-default ui-state-disabled",
                sPageFirst: "first ui-corner-tl ui-corner-bl",
                sPageLast: "last ui-corner-tr ui-corner-br",
                sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
                sSortAsc: "ui-state-default",
                sSortDesc: "ui-state-default",
                sSortable: "ui-state-default",
                sSortableAsc: "ui-state-default",
                sSortableDesc: "ui-state-default",
                sSortableNone: "ui-state-default",
                sSortJUIAsc: "css_right ui-icon ui-icon-triangle-1-n",
                sSortJUIDesc: "css_right ui-icon ui-icon-triangle-1-s",
                sSortJUI: "css_right ui-icon ui-icon-carat-2-n-s",
                sSortJUIAscAllowed: "css_right ui-icon ui-icon-carat-1-n",
                sSortJUIDescAllowed: "css_right ui-icon ui-icon-carat-1-s",
                sSortJUIWrapper: "DataTables_sort_wrapper",
                sSortIcon: "DataTables_sort_icon",
                sScrollHead: "dataTables_scrollHead ui-state-default",
                sScrollFoot: "dataTables_scrollFoot ui-state-default",
                sFooterTH: "ui-state-default",
                sJUIHeader: "fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix",
                sJUIFooter: "fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"
            }), h.extend(j.ext.oPagination, {
                two_button: {
                    fnInit: function(a, b, c) {
                        var d = a.oLanguage.oPaginate,
                            e = function(b) {
                                a.oApi._fnPageChange(a, b.data.action) && c(a)
                            },
                            d = a.bJUI ? '<a class="' + a.oClasses.sPagePrevDisabled + '" tabindex="' + a.iTabIndex + '" role="button"><span class="' + a.oClasses.sPageJUIPrev + '"></span></a><a class="' + a.oClasses.sPageNextDisabled + '" tabindex="' + a.iTabIndex + '" role="button"><span class="' + a.oClasses.sPageJUINext + '"></span></a>' : '<a class="' + a.oClasses.sPagePrevDisabled + '" tabindex="' + a.iTabIndex + '" role="button">' + d.sPrevious + '</a><a class="' + a.oClasses.sPageNextDisabled + '" tabindex="' + a.iTabIndex + '" role="button">' + d.sNext + "</a>";
                        h(b).append(d);
                        var f = h("a", b),
                            d = f[0],
                            f = f[1];
                        a.oApi._fnBindAction(d, {
                            action: "previous"
                        }, e), a.oApi._fnBindAction(f, {
                            action: "next"
                        }, e), a.aanFeatures.p || (b.id = a.sTableId + "_paginate", d.id = a.sTableId + "_previous", f.id = a.sTableId + "_next", d.setAttribute("aria-controls", a.sTableId), f.setAttribute("aria-controls", a.sTableId))
                    },
                    fnUpdate: function(a) {
                        if (a.aanFeatures.p)
                            for (var b, c = a.oClasses, d = a.aanFeatures.p, e = 0, f = d.length; f > e; e++)(b = d[e].firstChild) && (b.className = 0 === a._iDisplayStart ? c.sPagePrevDisabled : c.sPagePrevEnabled, b = b.nextSibling, b.className = a.fnDisplayEnd() == a.fnRecordsDisplay() ? c.sPageNextDisabled : c.sPageNextEnabled)
                    }
                },
                iFullNumbersShowPages: 5,
                full_numbers: {
                    fnInit: function(a, b, c) {
                        var d = a.oLanguage.oPaginate,
                            e = a.oClasses,
                            f = function(b) {
                                a.oApi._fnPageChange(a, b.data.action) && c(a)
                            };
                        h(b).append('<a  tabindex="' + a.iTabIndex + '" class="' + e.sPageButton + " " + e.sPageFirst + '">' + d.sFirst + '</a><a  tabindex="' + a.iTabIndex + '" class="' + e.sPageButton + " " + e.sPagePrevious + '">' + d.sPrevious + '</a><span></span><a tabindex="' + a.iTabIndex + '" class="' + e.sPageButton + " " + e.sPageNext + '">' + d.sNext + '</a><a tabindex="' + a.iTabIndex + '" class="' + e.sPageButton + " " + e.sPageLast + '">' + d.sLast + "</a>");
                        var g = h("a", b),
                            d = g[0],
                            e = g[1],
                            i = g[2],
                            g = g[3];
                        a.oApi._fnBindAction(d, {
                            action: "first"
                        }, f), a.oApi._fnBindAction(e, {
                            action: "previous"
                        }, f), a.oApi._fnBindAction(i, {
                            action: "next"
                        }, f), a.oApi._fnBindAction(g, {
                            action: "last"
                        }, f), a.aanFeatures.p || (b.id = a.sTableId + "_paginate", d.id = a.sTableId + "_first", e.id = a.sTableId + "_previous", i.id = a.sTableId + "_next", g.id = a.sTableId + "_last")
                    },
                    fnUpdate: function(a, b) {
                        if (a.aanFeatures.p) {
                            var c, d, e = j.ext.oPagination.iFullNumbersShowPages,
                                f = Math.floor(e / 2),
                                g = Math.ceil(a.fnRecordsDisplay() / a._iDisplayLength),
                                i = Math.ceil(a._iDisplayStart / a._iDisplayLength) + 1,
                                k = "",
                                l = a.oClasses,
                                m = a.aanFeatures.p,
                                n = function(d) {
                                    a.oApi._fnBindAction(this, {
                                        page: d + c - 1
                                    }, function(c) {
                                        a.oApi._fnPageChange(a, c.data.page), b(a), c.preventDefault()
                                    })
                                };
                            for (-1 === a._iDisplayLength ? i = f = c = 1 : e > g ? (c = 1, f = g) : f >= i ? (c = 1, f = e) : i >= g - f ? (c = g - e + 1, f = g) : (c = i - Math.ceil(e / 2) + 1, f = c + e - 1), e = c; f >= e; e++) k += i !== e ? '<a tabindex="' + a.iTabIndex + '" class="' + l.sPageButton + '">' + a.fnFormatNumber(e) + "</a>" : '<a tabindex="' + a.iTabIndex + '" class="' + l.sPageButtonActive + '">' + a.fnFormatNumber(e) + "</a>";
                            for (e = 0, f = m.length; f > e; e++) d = m[e], d.hasChildNodes() && (h("span:eq(0)", d).html(k).children("a").each(n), d = d.getElementsByTagName("a"), d = [d[0], d[1], d[d.length - 2], d[d.length - 1]], h(d).removeClass(l.sPageButton + " " + l.sPageButtonActive + " " + l.sPageButtonStaticDisabled), h([d[0], d[1]]).addClass(1 == i ? l.sPageButtonStaticDisabled : l.sPageButton), h([d[2], d[3]]).addClass(0 === g || i === g || -1 === a._iDisplayLength ? l.sPageButtonStaticDisabled : l.sPageButton));
                        }
                    }
                }
            }), h.extend(j.ext.oSort, {
                "string-pre": function(a) {
                    return "string" != typeof a && (a = null !== a && a.toString ? a.toString() : ""), a.toLowerCase()
                },
                "string-asc": function(a, b) {
                    return b > a ? -1 : a > b ? 1 : 0
                },
                "string-desc": function(a, b) {
                    return b > a ? 1 : a > b ? -1 : 0
                },
                "html-pre": function(a) {
                    return a.replace(/<.*?>/g, "").toLowerCase()
                },
                "html-asc": function(a, b) {
                    return b > a ? -1 : a > b ? 1 : 0
                },
                "html-desc": function(a, b) {
                    return b > a ? 1 : a > b ? -1 : 0
                },
                "date-pre": function(a) {
                    return a = Date.parse(a), (isNaN(a) || "" === a) && (a = Date.parse("01/01/1970 00:00:00")), a
                },
                "date-asc": function(a, b) {
                    return a - b
                },
                "date-desc": function(a, b) {
                    return b - a
                },
                "numeric-pre": function(a) {
                    return "-" == a || "" === a ? 0 : 1 * a
                },
                "numeric-asc": function(a, b) {
                    return a - b
                },
                "numeric-desc": function(a, b) {
                    return b - a
                }
            }), h.extend(j.ext.aTypes, [function(a) {
                if ("number" == typeof a) return "numeric";
                if ("string" != typeof a) return null;
                var b, c = !1;
                if (b = a.charAt(0), -1 == "0123456789-".indexOf(b)) return null;
                for (var d = 1; d < a.length; d++) {
                    if (b = a.charAt(d), -1 == "0123456789.".indexOf(b)) return null;
                    if ("." == b) {
                        if (c) return null;
                        c = !0
                    }
                }
                return "numeric"
            }, function(a) {
                var b = Date.parse(a);
                return null !== b && !isNaN(b) || "string" == typeof a && 0 === a.length ? "date" : null
            }, function(a) {
                return "string" == typeof a && -1 != a.indexOf("<") && -1 != a.indexOf(">") ? "html" : null
            }]), h.fn.DataTable = j, h.fn.dataTable = j, h.fn.dataTableSettings = j.settings, h.fn.dataTableExt = j.ext
        };
        "function" == typeof define && define.amd ? define(["jquery"], L) : jQuery && !jQuery.fn.dataTable && L(jQuery)
    }(window, document), $.extend(!0, $.fn.dataTable.defaults, {
        sDom: "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
        sPaginationType: "bootstrap",
        oLanguage: {
            sLengthMenu: "_MENU_ records per page"
        }
    }), $.extend($.fn.dataTableExt.oStdClasses, {
        sWrapper: "dataTables_wrapper form-inline"
    }), $.fn.dataTableExt.oApi.fnPagingInfo = function(a) {
        return {
            iStart: a._iDisplayStart,
            iEnd: a.fnDisplayEnd(),
            iLength: a._iDisplayLength,
            iTotal: a.fnRecordsTotal(),
            iFilteredTotal: a.fnRecordsDisplay(),
            iPage: Math.ceil(a._iDisplayStart / a._iDisplayLength),
            iTotalPages: Math.ceil(a.fnRecordsDisplay() / a._iDisplayLength)
        }
    }, $.extend($.fn.dataTableExt.oPagination, {
        bootstrap: {
            fnInit: function(a, b, c) {
                var d = a.oLanguage.oPaginate,
                    e = function(b) {
                        b.preventDefault(), a.oApi._fnPageChange(a, b.data.action) && c(a)
                    };
                $(b).addClass("pagination").append('<ul><li class="prev disabled"><a href="#">&larr; <span class="hidden-480">' + d.sPrevious + '</span></a></li><li class="next disabled"><a href="#"><span class="hidden-480">' + d.sNext + "</span> &rarr; </a></li></ul>");
                var f = $("a", b);
                $(f[0]).bind("click.DT", {
                    action: "previous"
                }, e), $(f[1]).bind("click.DT", {
                    action: "next"
                }, e)
            },
            fnUpdate: function(a, b) {
                var c, d, e, f, g, h = 5,
                    i = a.oInstance.fnPagingInfo(),
                    j = a.aanFeatures.p,
                    k = Math.floor(h / 2);
                for (i.iTotalPages < h ? (f = 1, g = i.iTotalPages) : i.iPage <= k ? (f = 1, g = h) : i.iPage >= i.iTotalPages - k ? (f = i.iTotalPages - h + 1, g = i.iTotalPages) : (f = i.iPage - k + 1, g = f + h - 1), c = 0, iLen = j.length; c < iLen; c++) {
                    for ($("li:gt(0)", j[c]).filter(":not(:last)").remove(), d = f; g >= d; d++) e = d == i.iPage + 1 ? 'class="active"' : "", $("<li " + e + '><a href="#">' + d + "</a></li>").insertBefore($("li:last", j[c])[0]).bind("click", function(c) {
                        c.preventDefault(), a._iDisplayStart = (parseInt($("a", this).text(), 10) - 1) * i.iLength, b(a)
                    });
                    0 === i.iPage ? $("li:first", j[c]).addClass("disabled") : $("li:first", j[c]).removeClass("disabled"), i.iPage === i.iTotalPages - 1 || 0 === i.iTotalPages ? $("li:last", j[c]).addClass("disabled") : $("li:last", j[c]).removeClass("disabled")
                }
            }
        }
    }), $.fn.DataTable.TableTools && ($.extend(!0, $.fn.DataTable.TableTools.classes, {
        container: "DTTT btn-group",
        buttons: {
            normal: "btn",
            disabled: "disabled"
        },
        collection: {
            container: "DTTT_dropdown dropdown-menu",
            buttons: {
                normal: "",
                disabled: "disabled"
            }
        },
        print: {
            info: "DTTT_print_info modal"
        },
        select: {
            row: "active"
        }
    }), $.extend(!0, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
        collection: {
            container: "ul",
            button: "li",
            liner: "a"
        }
    })), eval(function(a, b, c, d, e, f) {
        if (e = function(a) {
                return (b > a ? "" : e(parseInt(a / b))) + ((a %= b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
            }, !"".replace(/^/, String)) {
            for (; c--;) f[e(c)] = d[c] || e(c);
            d = [function(a) {
                return f[a]
            }], e = function() {
                return "\\w+"
            }, c = 1
        }
        for (; c--;) d[c] && (a = a.replace(new RegExp("\\b" + e(c) + "\\b", "g"), d[c]));
        return a
    }("(l($){Q.1o.1t=l(){E=/\\b(?:(?:25[0-5]|2[0-4][0-9]|[1m]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[1m]?[0-9][0-9]?)\\b/;h E.1a(p.1i())};Q.1o.1S=l(){E=/\\b([A-16-9]{1,4}:){7}([A-16-9]{1,4})\\b/i;h E.1a(p.1i())};$.1X.1h({y:l(u,c){f(p.z==0)h;f(1k u=='1f'){c=(1k c=='1f')?c:u;h p.1d(l(){f(p.18){p.1s();p.18(u,c)}w f(p.1e){t C=p.1e();C.1L(S);C.1z('10',c);C.1b('10',u);C.1w()}})}w{f(p[0].18){u=p[0].1u;c=p[0].1C}w f(14.12&&14.12.19){t C=14.12.19();u=0-C.1D().1b('10',-1E);c=u+C.1H.z}h{u:u,c:c}}},1B:l(s){s=$.1h({v:4},s);f(s.v==4){s.W=M I('[0-9]','g');s.r='R.R.R.R'}f(s.v==6){s.W=M I('[A-16-9]','1x');s.r='x:x:x:x:x:x:x:x'}s.D=s.r.K('').Y();s.q=s.r.X(M I(s.D,'g'),'').K('').Y();s.O=s.r.K(s.q).Y();h $(p).1d(l(){t a={k:T,n:T,o:T,d:T};a.d=$(p);f(a.d.m()==''||!J(a.d.m()))a.d.m(s.r);a.d.1j('1Z',(s.v==4?15:1c)).1j('1W',(s.v==4?15:1c));l J(o){h 24(\"o.21\"+s.v+\"()\")};l P(){a.k=a.d.y();a.o=J(L(a.d.m()))?L(a.d.m()):a.o;a.n=a.d.m().K('')};l 1n(o){t G=o.K(s.q);1p(t j=0;j<G.z;j++){1M((s.O.z-G[j].z)>0)G[j]+=s.D}h G.H(s.q)};l L(o){t E=M I(s.O,'g');t 1g=M I(s.D,'g');h o.X(E,'0').X(1g,'')};l 11(e){1R(e.1Q){U 8:f(a.n[a.k.c-1]!=s.q){a.n[a.k.c-1]=s.D;a.d.m(a.n.H(\"\")).m()}a.d.y(a.k.c-1);h B;V;U 13:U 1T:a.d.17();V;U 1P:f(a.n[a.k.c]!=s.q&&a.k.c<s.r.z){a.n[a.k.c]=s.D;a.d.m(a.n.H(\"\"))}f(a.k.c<s.r.z)a.d.y(a.k.c+1);h B;V}h S};a.d.N('1O',l(e){P();f($.1l.1K||$.1l.1V){h 11(e)}}).N('1U',l(e){P();f(e.23||e.22||e.1Y)h S;w f((e.F>=20&&e.F<=1N)||e.F>1J){f(Q.1q(e.F).1y(s.W)){a.n[a.k.c]=Q.1q(e.F);f(!J(L(a.n.H('')))){f((a.k.c==0||a.n[a.k.c-1]==s.q)){1p(t i=a.k.c+1;i<a.k.c+s.O.z;i++){a.n[i]=s.D}}w h B}a.d.m(a.n.H(''));f(a.n[a.k.c+1]==s.q){a.d.y(a.k.c+2)}w{a.d.y(a.k.c+1)}h B}w f(s.q.1v(0)==e.F){t Z=a.d.m().1A(s.q,a.k.c);f(Z==-1)h B;f(a.n[a.k.c-1]==s.q)h B;a.k.c=Z;a.d.y(a.k.c+1);h B}w h B}h 11(e)}).N('17',l(){f(a.d.m()==s.r)h S;t o=L($.1G(a.d.m()));f(J(o))a.d.m(o);w a.d.m(a.o)}).N('1s',l(){1r(l(){P();f(a.d.m()!=s.r)a.d.m(1n(a.o));a.d.y(0)},0)}).N('1I',l(e){a.d.m('');1r(l(){a.d.17()},0)})})}})})(1F);", 62, 130, "||||||||||ctx||end|input||if||return|||cursor|function|val|buffer|ip|this|separator|label||var|begin||else|____|caret|length||false|range|place|rgx|which|part|join|RegExp|isIp|split|unmask|new|bind|partplace|loadCtx|String|___|true|null|case|break|rgxcase|replace|pop|pos|character|entryNoCharacter|selection||document||F0|blur|setSelectionRange|createRange|test|moveStart|39|each|createTextRange|number|rgx2|extend|toString|attr|typeof|browser|01|mask|prototype|for|fromCharCode|setTimeout|focus|isIpv4|selectionStart|charCodeAt|select|gi|match|moveEnd|indexOf|ipAddress|selectionEnd|duplicate|100000|jQuery|trim|text|paste|186|webkit|collapse|while|125|keydown|46|keyCode|switch|isIpv6|27|keypress|msie|size|fn|metaKey|maxlength|32|isIpv|altKey|ctrlKey|eval|".split("|"), 0, {}));
var UIGeneral = function() {
        var a = function() {
                jQuery().pulsate && 1 != App.isIE8() && jQuery().pulsate && (jQuery("#pulsate-regular").pulsate({
                    color: "#bf1c56"
                }), jQuery(".pulsate-once").pulsate({
                    color: "#bf1c56",
                    repeat: !1
                }), jQuery("#pulsate-hover").pulsate({
                    color: "#5ebf5e",
                    repeat: !1,
                    onHover: !0
                }), jQuery("#pulsate-crazy").click(function() {
                    $(this).pulsate({
                        color: "#fdbe41",
                        reach: 50,
                        repeat: 10,
                        speed: 100,
                        glow: !0
                    })
                }))
            },
            b = function() {
                jQuery.gritter && ($("#gritter-sticky").click(function() {
                    $.gritter.add({
                        title: "This is a sticky notice!",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">some link sample</a> montes, nascetur ridiculus mus.',
                        image: "./assets/img/avatar1.jpg",
                        sticky: !0,
                        time: "",
                        class_name: "my-sticky-class"
                    });
                    return !1
                }), $("#gritter-regular").click(function() {
                    return $.gritter.add({
                        title: "This is a regular notice!",
                        text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">some link sample</a> montes, nascetur ridiculus mus.',
                        image: "./assets/img/avatar1.jpg",
                        sticky: !1,
                        time: ""
                    }), !1
                }), $("#gritter-max").click(function() {
                    return $.gritter.add({
                        title: "This is a notice with a max of 3 on screen at one time!",
                        text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">some link sample</a> montes, nascetur ridiculus mus.',
                        image: "./assets/img/avatar1.jpg",
                        sticky: !1,
                        before_open: function() {
                            return 3 == $(".gritter-item-wrapper").length ? !1 : void 0
                        }
                    }), !1
                }), $("#gritter-without-image").click(function() {
                    return $.gritter.add({
                        title: "This is a notice without an image!",
                        text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">some link sample</a> montes, nascetur ridiculus mus.'
                    }), !1
                }), $("#gritter-light").click(function() {
                    return $.gritter.add({
                        title: "This is a light notification",
                        text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
                        class_name: "gritter-light"
                    }), !1
                }), $("#gritter-remove-all").click(function() {
                    return $.gritter.removeAll(), !1
                }))
            };
        return {
            init: function() {
                a(), b()
            }
        }
    }(),
    App = function() {
        var a = !1,
            b = !1,
            c = !1,
            d = !1,
            e = 225,
            f = 35,
            g = [],
            h = {
                blue: "#4b8df8",
                red: "#e02222",
                green: "#35aa47",
                purple: "#852b99",
                grey: "#555555",
                "light-grey": "#fafafa",
                yellow: "#ffb848"
            },
            i = function() {
                "rtl" === $("body").css("direction") && (a = !0), b = !!navigator.userAgent.match(/MSIE 8.0/), c = !!navigator.userAgent.match(/MSIE 9.0/), d = !!navigator.userAgent.match(/MSIE 10/), d && jQuery("html").addClass("ie10")
            },
            j = function() {
                ($(window).width() <= 1280 || $("body").hasClass("page-boxed")) && $(".responsive").each(function() {
                    var a = $(this).attr("data-tablet"),
                        b = $(this).attr("data-desktop");
                    a && ($(this).removeClass(b), $(this).addClass(a))
                }), $(window).width() > 1280 && $("body").hasClass("page-boxed") === !1 && $(".responsive").each(function() {
                    var a = $(this).attr("data-tablet"),
                        b = $(this).attr("data-desktop");
                    a && ($(this).removeClass(a), $(this).addClass(b))
                })
            },
            k = function() {
                $(window).width() < 980 && $("body").removeClass("page-sidebar-closed")
            },
            l = function() {
                for (var a in g) {
                    var b = g[a];
                    b.call()
                }
            },
            m = function() {
                C(), k(), j(), p(), s(), l()
            },
            n = function() {
                k(), j(), p()
            },
            o = function() {
                var a;
                if (b) {
                    var c;
                    $(window).resize(function() {
                        c != document.documentElement.clientHeight && (a && clearTimeout(a), a = setTimeout(function() {
                            m()
                        }, 50), c = document.documentElement.clientHeight)
                    })
                } else $(window).resize(function() {
                    a && clearTimeout(a), a = setTimeout(function() {
                        m()
                    }, 50)
                })
            },
            p = function() {
                var a, b = $(".page-content"),
                    c = $(".page-sidebar"),
                    d = $("body");
                if (d.hasClass("page-footer-fixed") === !0 && d.hasClass("page-sidebar-fixed") === !1) {
                    var e = $(window).height() - $(".footer").height();
                    b.height() < e && b.attr("style", "min-height:" + e + "px !important")
                } else a = d.hasClass("page-sidebar-fixed") ? r() : c.height() + 20, a >= b.height() && b.attr("style", "min-height:" + a + "px !important")
            },
            q = function() {
                jQuery(".page-sidebar").on("click", "li > a", function(a) {
                    if (0 == $(this).next().hasClass("sub-menu")) return void(0 == $(".btn-navbar").hasClass("collapsed") && $(".btn-navbar").click());
                    var b = $(this).parent().parent();
                    b.children("li.open").children("a").children(".arrow").removeClass("open"), b.children("li.open").children(".sub-menu").slideUp(200), b.children("li.open").removeClass("open");
                    var c = jQuery(this).next();
                    c.is(":visible") ? (jQuery(".arrow", jQuery(this)).removeClass("open"), jQuery(this).parent().removeClass("open"), c.slideUp(200, function() {
                        p()
                    })) : (jQuery(".arrow", jQuery(this)).addClass("open"), jQuery(this).parent().addClass("open"), c.slideDown(200, function() {
                        p()
                    })), a.preventDefault()
                }), jQuery(".page-sidebar").on("click", " li > a.ajaxify", function(a) {
                    a.preventDefault(), App.scrollTop();
                    var b = $(this).attr("href"),
                        c = jQuery(".page-sidebar ul"),
                        d = $(".page-content"),
                        e = $(".page-content .page-content-body");
                    c.children("li.active").removeClass("active"), c.children("arrow.open").removeClass("open"), $(this).parents("li").each(function() {
                        $(this).addClass("active"), $(this).children("a > span.arrow").addClass("open")
                    }), $(this).parents("li").addClass("active"), App.blockUI(d, !1), $.post(b, {}, function(a) {
                        App.unblockUI(d), e.html(a), App.fixContentHeight(), App.initUniform()
                    })
                })
            },
            r = function() {
                var a = $(window).height() - $(".header").height() + 1;
                return $("body").hasClass("page-footer-fixed") && (a -= $(".footer").height()), a
            },
            s = function() {
                var b = $(".page-sidebar-menu");
                if (1 === b.parent(".slimScrollDiv").size() && (b.slimScroll({
                        destroy: !0
                    }), b.removeAttr("style"), $(".page-sidebar").removeAttr("style")), 0 === $(".page-sidebar-fixed").size()) return void p();
                if ($(window).width() >= 980) {
                    var c = r();
                    b.slimScroll({
                        size: "7px",
                        color: "#a1b2bd",
                        opacity: .3,
                        position: a ? "left" : 1 === $(".page-sidebar-on-right").size() ? "left" : "right",
                        height: c,
                        allowPageScroll: !1,
                        disableFadeOut: !1
                    }), p()
                }
            },
            t = function() {
                $("body").hasClass("page-sidebar-fixed") !== !1 && ($(".page-sidebar").off("mouseenter").on("mouseenter", function() {
                    var a = $("body");
                    a.hasClass("page-sidebar-closed") === !1 || a.hasClass("page-sidebar-fixed") === !1 || $(this).hasClass("page-sidebar-hovering") || (a.removeClass("page-sidebar-closed").addClass("page-sidebar-hover-on"), $(this).addClass("page-sidebar-hovering"), $(this).animate({
                        width: e
                    }, 400, "", function() {
                        $(this).removeClass("page-sidebar-hovering")
                    }))
                }), $(".page-sidebar").off("mouseleave").on("mouseleave", function() {
                    var a = $("body");
                    a.hasClass("page-sidebar-hover-on") === !1 || a.hasClass("page-sidebar-fixed") === !1 || $(this).hasClass("page-sidebar-hovering") || ($(this).addClass("page-sidebar-hovering"), $(this).animate({
                        width: f
                    }, 400, "", function() {
                        $("body").addClass("page-sidebar-closed").removeClass("page-sidebar-hover-on"), $(this).removeClass("page-sidebar-hovering")
                    }))
                }))
            },
            u = function() {
                $(".page-sidebar").on("click", ".sidebar-toggler", function(a) {
                    var b = $("body"),
                        c = $(".page-sidebar");
                    return b.hasClass("page-sidebar-hover-on") && b.hasClass("page-sidebar-fixed") || c.hasClass("page-sidebar-hovering") ? (b.removeClass("page-sidebar-hover-on"), c.css("width", "").hide().show(), a.stopPropagation(), void l()) : ($(".sidebar-search", c).removeClass("open"), b.hasClass("page-sidebar-closed") ? (b.removeClass("page-sidebar-closed"), b.hasClass("page-sidebar-fixed") && c.css("width", "")) : b.addClass("page-sidebar-closed"), void l())
                }), $(".page-sidebar").on("click", ".sidebar-search .remove", function(a) {
                    a.preventDefault(), $(".sidebar-search").removeClass("open")
                }), $(".page-sidebar").on("keypress", ".sidebar-search input", function(a) {
                    return 13 == a.which ? !1 : void 0
                }), $(".sidebar-search .submit").on("click", function(a) {
                    a.preventDefault(), $("body").hasClass("page-sidebar-closed") && 0 == $(".sidebar-search").hasClass("open") && (1 === $(".page-sidebar-fixed").size() && $(".page-sidebar .sidebar-toggler").click(), $(".sidebar-search").addClass("open"))
                })
            },
            v = function() {
                $(".header").on("click", ".hor-menu .hor-menu-search-form-toggler", function(a) {
                    $(this).hasClass("hide") ? ($(this).removeClass("hide"), $(".header .hor-menu .search-form").hide()) : ($(this).addClass("hide"), $(".header .hor-menu .search-form").show(), $("#search_site").focus())
                })
            };
        $(document).bind("click", function(a) {
            1 == $("#search_site").is(":visible") && (0 === $(a.target).closest(".header .hor-menu .search-form").length && 0 === $(a.target).closest(".hor-menu .hor-menu-search-form-toggler").length ? ($(".header .hor-menu .search-form").hide(), $(".hor-menu .hor-menu-search-form-toggler").removeClass("hide")) : ($(".header .hor-menu .search-form").show(), $(".hor-menu .hor-menu-search-form-toggler").addClass("hide")), a.stopPropagation())
        });
        var w = function() {
                jQuery(".footer").on("click", ".go-top", function(a) {
                    App.scrollTo(), a.preventDefault()
                })
            },
            x = function() {
                jQuery("body").on("click", ".portlet .tools a.remove", function(a) {
                    a.preventDefault();
                    var b = jQuery(this).parents(".portlet");
                    b.next().hasClass("portlet") || b.prev().hasClass("portlet") ? jQuery(this).parents(".portlet").remove() : jQuery(this).parents(".portlet").parent().remove()
                }), jQuery("body").on("click", ".portlet .tools a.reload", function(a) {
                    a.preventDefault();
                    var b = jQuery(this).parents(".portlet");
                    App.blockUI(b), window.setTimeout(function() {
                        App.unblockUI(b)
                    }, 1e3)
                }), jQuery("body").on("click", ".portlet .tools .collapse, .portlet .tools .expand", function(a) {
                    a.preventDefault();
                    var b = jQuery(this).closest(".portlet").children(".portlet-body");
                    jQuery(this).hasClass("collapse") ? (jQuery(this).removeClass("collapse").addClass("expand"), b.slideUp(200)) : (jQuery(this).removeClass("expand").addClass("collapse"), b.slideDown(200))
                })
            },
            y = function() {
                if (jQuery().uniform) {
                    var a = $("input[type=checkbox]:not(.toggle), input[type=radio]:not(.toggle, .star)");
                    a.size() > 0 && a.each(function() {
                        0 == $(this).parents(".checker").size() && ($(this).show(), $(this).uniform())
                    })
                }
            },
            z = function() {
                $(".accordion").collapse().height("auto");
                var a;
                jQuery("body").on("click", ".accordion.scrollable .accordion-toggle", function() {
                    a = jQuery(this)
                }), jQuery("body").on("shown", ".accordion.scrollable", function() {
                    jQuery("html,body").animate({
                        scrollTop: a.offset().top - 150
                    }, "slow")
                })
            },
            A = function() {
                var a = function(a) {
                    $(a).each(function() {
                        var a = $($($(this).attr("href"))),
                            b = $(this).parent().parent();
                        b.height() > a.height() && a.css("min-height", b.height())
                    })
                };
                $("body").on("shown", '.nav.nav-tabs.tabs-left a[data-toggle="tab"], .nav.nav-tabs.tabs-right a[data-toggle="tab"]', function() {
                    a($(this))
                }), $("body").on("shown", ".nav.nav-tabs", function() {
                    p()
                }), a('.nav.nav-tabs.tabs-left > li.active > a[data-toggle="tab"], .nav.nav-tabs.tabs-right > li.active > a[data-toggle="tab"]');
                try {
                    if (document.querySelectorAll(location.hash) && location.hash) {
                        var b = location.hash.substr(1);
                        $('a[href="#' + b + '"]').click()
                    }
                } catch (c) {}
            },
            B = function() {
                $(".scroller").each(function() {
                    $(this).slimScroll({
                        size: "7px",
                        color: "#a1b2bd",
                        position: a ? "left" : "right",
                        height: $(this).attr("data-height"),
                        alwaysVisible: "1" == $(this).attr("data-always-visible") ? !0 : !1,
                        railVisible: "1" == $(this).attr("data-rail-visible") ? !0 : !1,
                        disableFadeOut: !0
                    })
                })
            },
            C = function() {
                App.isTouchDevice() ? jQuery(".tooltips:not(.no-tooltip-on-touch-device)").tooltip() : jQuery(".tooltips").tooltip()
            },
            D = function() {
                $("body").on("click", ".dropdown-menu.hold-on-click", function(a) {
                    a.stopPropagation()
                })
            },
            E = function() {
                jQuery(".popovers").popover()
            },
            F = function() {
                !jQuery.fancybox
            },
            G = function() {
                var a = $(".color-panel");
                0 == $("body").hasClass("page-boxed") && $(".layout-option", a).val("fluid"), $(".sidebar-option", a).val("default"), $(".header-option", a).val("fixed"), $(".footer-option", a).val("default");
                var b = function() {
                        $("body").removeClass("page-boxed").removeClass("page-footer-fixed").removeClass("page-sidebar-fixed").removeClass("page-header-fixed"), $(".header > .navbar-inner > .container").removeClass("container").addClass("container-fluid"), 1 === $(".page-container").parent(".container").size() && $(".page-container").insertAfter(".header"), 1 === $(".footer > .container").size() ? $(".footer").html($(".footer > .container").html()) : 1 === $(".footer").parent(".container").size() && $(".footer").insertAfter(".page-container"), $("body > .container").remove()
                    },
                    c = "",
                    d = function() {
                        var d = $(".layout-option", a).val(),
                            e = $(".sidebar-option", a).val(),
                            f = $(".header-option", a).val(),
                            g = $(".footer-option", a).val();
                        if ("fixed" == e && "default" == f && (alert("Default Header with Fixed Sidebar option is not supported. Proceed with Default Header with Default Sidebar."), $(".sidebar-option", a).val("default"), e = "default"), b(), "boxed" === d) {
                            $("body").addClass("page-boxed"), $(".header > .navbar-inner > .container-fluid").removeClass("container-fluid").addClass("container");
                            $(".header").after('<div class="container"></div>');
                            $(".page-container").appendTo("body > .container"), "fixed" === g || "default" === e ? $(".footer").html('<div class="container">' + $(".footer").html() + "</div>") : $(".footer").appendTo("body > .container")
                        }
                        c != d && l(), c = d, "fixed" === f ? ($("body").addClass("page-header-fixed"), $(".header").removeClass("navbar-static-top").addClass("navbar-fixed-top")) : ($("body").removeClass("page-header-fixed"), $(".header").removeClass("navbar-fixed-top").addClass("navbar-static-top")), "fixed" === e ? $("body").addClass("page-sidebar-fixed") : $("body").removeClass("page-sidebar-fixed"), s(), t(), "fixed" === g ? $("body").addClass("page-footer-fixed") : $("body").removeClass("page-footer-fixed"), p()
                    },
                    e = function(a) {
                        $("#style_color").attr("href", "css/themes/" + a + ".css"), $.cookie("style_color", a, {
                            path: "/"
                        })
                    };
                $(".icon-color", a).click(function() {
                    $(".color-mode").show(), $(".icon-color-close").show()
                }), $(".icon-color-close", a).click(function() {
                    $(".color-mode").hide(), $(".icon-color-close").hide()
                }), $("li", a).click(function() {
                    var b = $(this).attr("data-style");
                    e(b), $(".inline li", a).removeClass("current"), $(this).addClass("current")
                }), $(".layout-option, .header-option, .sidebar-option, .footer-option", a).change(d)
            },
            H = function() {
                (b || c) && jQuery("input[placeholder]:not(.placeholder-no-fix), textarea[placeholder]:not(.placeholder-no-fix)").each(function() {
                    var a = jQuery(this);
                    "" == a.val() && "" != a.attr("placeholder") && a.addClass("placeholder").val(a.attr("placeholder")), a.focus(function() {
                        a.val() == a.attr("placeholder") && a.val("")
                    }), a.blur(function() {
                        ("" == a.val() || a.val() == a.attr("placeholder")) && a.val(a.attr("placeholder"))
                    })
                })
            };
        return {
            init: function() {
                i(), o(), y(), B(), n(), s(), t(), q(), v(), u(), H(), w(), G(), x(), D(), A(), C(), E(), z()
            },
            fixContentHeight: function() {
                p()
            },
            addResponsiveHandler: function(a) {
                g.push(a)
            },
            setEqualHeight: function(a) {
                var b = 0;
                a = jQuery(a), a.each(function() {
                    var a = $(this).height();
                    a > b && (tallestColumn = a)
                }), a.height(b)
            },
            scrollTo: function(a, b) {
                pos = a ? a.offset().top : 0, jQuery("html,body").animate({
                    scrollTop: pos + (b ? b : 0)
                }, "slow")
            },
            scrollTop: function() {
                App.scrollTo()
            },
            blockUI: function(a, b) {
                var a = jQuery(a);
                a.block({
                    message: '<img src="./assets/img/ajax-loading.gif" align="">',
                    centerY: void 0 != b ? b : !0,
                    css: {
                        top: "10%",
                        border: "none",
                        padding: "2px",
                        backgroundColor: "none"
                    },
                    overlayCSS: {
                        backgroundColor: "#000",
                        opacity: .05,
                        cursor: "wait"
                    }
                })
            },
            unblockUI: function(a) {
                jQuery(a).unblock({
                    onUnblock: function() {
                        jQuery(a).removeAttr("style")
                    }
                })
            },
            initUniform: function(a) {
                a ? jQuery(a).each(function() {
                    0 == $(this).parents(".checker").size() && ($(this).show(), $(this).uniform())
                }) : y()
            },
            initFancybox: function() {
                F()
            },
            getActualVal: function(a) {
                var a = jQuery(a);
                return a.val() === a.attr("placeholder") ? "" : a.val()
            },
            getURLParameter: function(a) {
                var b, c, d = window.location.search.substring(1),
                    e = d.split("&");
                for (b = 0; b < e.length; b++)
                    if (c = e[b].split("="), c[0] == a) return unescape(c[1]);
                return null
            },
            isTouchDevice: function() {
                try {
                    return document.createEvent("TouchEvent"), !0
                } catch (a) {
                    return !1
                }
            },
            isIE8: function() {
                return b
            },
            isRTL: function() {
                return a
            },
            getLayoutColorCode: function(a) {
                return h[a] ? h[a] : ""
            }
        }
    }();
! function(a) {
    jQuery.fn.extend({
        slimScroll: function(b) {
            var c = {
                    width: "auto",
                    height: "250px",
                    size: "7px",
                    color: "#000",
                    position: "right",
                    distance: "1px",
                    start: "top",
                    opacity: .4,
                    alwaysVisible: !1,
                    disableFadeOut: !1,
                    railVisible: !1,
                    railColor: "#333",
                    railOpacity: .2,
                    railDraggable: !0,
                    railClass: "slimScrollRail",
                    barClass: "slimScrollBar",
                    wrapperClass: "slimScrollDiv",
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200
                },
                d = a.extend(c, b);
            return this.each(function() {
                function c(b) {
                    if (j) {
                        var b = b || window.event,
                            c = 0;
                        b.wheelDelta && (c = -b.wheelDelta / 120), b.detail && (c = b.detail / 3);
                        var f = b.target || b.srcTarget || b.srcElement;
                        a(f).closest("." + d.wrapperClass).is(u.parent()) && e(c, !0), b.preventDefault && !t && b.preventDefault(), t || (b.returnValue = !1)
                    }
                }

                function e(a, b, c) {
                    var e = a,
                        f = u.outerHeight() - z.outerHeight();
                    if (b && (e = parseInt(z.css("top")) + a * parseInt(d.wheelStep) / 100 * z.outerHeight(), e = Math.min(Math.max(e, 0), f), e = a > 0 ? Math.ceil(e) : Math.floor(e), z.css({
                            top: e + "px"
                        })), p = parseInt(z.css("top")) / (u.outerHeight() - z.outerHeight()), e = p * (u[0].scrollHeight - u.outerHeight()), c) {
                        e = a;
                        var g = e / u[0].scrollHeight * u.outerHeight();
                        g = Math.min(Math.max(g, 0), f), z.css({
                            top: g + "px"
                        })
                    }
                    u.scrollTop(e), u.trigger("slimscrolling", ~~e), h(), i()
                }

                function f() {
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", c, !1), this.addEventListener("mousewheel", c, !1)) : document.attachEvent("onmousewheel", c)
                }

                function g() {
                    o = Math.max(u.outerHeight() / u[0].scrollHeight * u.outerHeight(), s), z.css({
                        height: o + "px"
                    });
                    var a = o == u.outerHeight() ? "none" : "block";
                    z.css({
                        display: a
                    })
                }

                function h() {
                    if (g(), clearTimeout(m), p == ~~p && (t = d.allowPageScroll, q != p)) {
                        var a = 0 == ~~p ? "top" : "bottom";
                        u.trigger("slimscroll", a)
                    }
                    return q = p, o >= u.outerHeight() ? void(t = !0) : (z.stop(!0, !0).fadeIn("fast"), void(d.railVisible && y.stop(!0, !0).fadeIn("fast")))
                }

                function i() {
                    d.alwaysVisible || (m = setTimeout(function() {
                        d.disableFadeOut && j || k || l || (z.fadeOut("slow"), y.fadeOut("slow"))
                    }, 1e3))
                }
                var j, k, l, m, n, o, p, q, r = "<div></div>",
                    s = 30,
                    t = !1,
                    u = a(this);
                if (u.parent().hasClass(d.wrapperClass)) {
                    var v = u.scrollTop();
                    if (z = u.parent().find("." + d.barClass), y = u.parent().find("." + d.railClass), g(), a.isPlainObject(b)) {
                        if ("height" in b && "auto" == b.height) {
                            u.parent().css("height", "auto"), u.css("height", "auto");
                            var w = u.parent().parent().innerHeight();
                            u.parent().css("height", w), u.css("height", w)
                        }
                        if ("scrollTo" in b) v = parseInt(d.scrollTo);
                        else if ("scrollBy" in b) v += parseInt(d.scrollBy);
                        else if ("destroy" in b) return z.remove(), y.remove(), void u.unwrap();
                        e(v, !1, !0)
                    }
                } else {
                    d.height = "auto" == d.height ? u.parent().innerHeight() : d.height;
                    var x = a(r).addClass(d.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: d.width,
                        height: d.height
                    });
                    u.css({
                        overflow: "hidden",
                        width: d.width,
                        height: d.height
                    });
                    var y = a(r).addClass(d.railClass).css({
                            width: d.size,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: d.alwaysVisible && d.railVisible ? "block" : "none",
                            "border-radius": d.size,
                            background: d.railColor,
                            opacity: d.railOpacity,
                            zIndex: 90
                        }),
                        z = a(r).addClass(d.barClass).css({
                            background: d.color,
                            width: d.size,
                            position: "absolute",
                            top: 0,
                            opacity: d.opacity,
                            display: d.alwaysVisible ? "block" : "none",
                            "border-radius": d.size,
                            BorderRadius: d.size,
                            MozBorderRadius: d.size,
                            WebkitBorderRadius: d.size,
                            zIndex: 99
                        }),
                        A = "right" == d.position ? {
                            right: d.distance
                        } : {
                            left: d.distance
                        };
                    y.css(A), z.css(A), u.wrap(x), u.parent().append(z), u.parent().append(y), d.railDraggable && z.draggable({
                        axis: "y",
                        containment: "parent",
                        start: function() {
                            l = !0
                        },
                        stop: function() {
                            l = !1, i()
                        },
                        drag: function(b) {
                            e(0, a(this).position().top, !1)
                        }
                    }), y.hover(function() {
                        h()
                    }, function() {
                        i()
                    }), z.hover(function() {
                        k = !0
                    }, function() {
                        k = !1
                    }), u.hover(function() {
                        j = !0, h(), i()
                    }, function() {
                        j = !1, i()
                    }), u.bind("touchstart", function(a, b) {
                        a.originalEvent.touches.length && (n = a.originalEvent.touches[0].pageY)
                    }), u.bind("touchmove", function(a) {
                        if (a.originalEvent.preventDefault(), a.originalEvent.touches.length) {
                            var b = (n - a.originalEvent.touches[0].pageY) / d.touchScrollStep;
                            n = a.originalEvent.touches[0].pageY, e(b, !0)
                        }
                    }), "bottom" === d.start ? (z.css({
                        top: u.outerHeight() - z.outerHeight()
                    }), e(0, !0)) : "top" !== d.start && (e(a(d.start).position().top, null, !0), d.alwaysVisible || z.hide()), f(), g()
                }
            }), this
        }
    }), jQuery.fn.extend({
        slimscroll: jQuery.fn.slimScroll
    })
}(jQuery),
function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.submit(function(b) {
                function d() {
                    var d;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function() {
            if (a(this[0]).is("form")) return this.validate().form();
            var b = !0,
                c = a(this[0].form).validate();
            return this.each(function() {
                b = b && c.element(this)
            }), b
        },
        removeAttrs: function(b) {
            var c = {},
                d = this;
            return a.each(b.split(/\s/), function(a, b) {
                c[b] = d.attr(b), d.removeAttr(b)
            }), c
        },
        rules: function(b, c) {
            var d = this[0];
            if (b) {
                var e = a.data(d.form, "validator").settings,
                    f = e.rules,
                    g = a.validator.staticRules(d);
                switch (b) {
                    case "add":
                        a.extend(g, a.validator.normalizeRule(c)), delete g.messages, f[d.name] = g, c.messages && (e.messages[d.name] = a.extend(e.messages[d.name], c.messages));
                        break;
                    case "remove":
                        if (!c) return delete f[d.name], g;
                        var h = {};
                        return a.each(c.split(/\s/), function(a, b) {
                            h[b] = g[b], delete g[b]
                        }), h
                }
            }
            var i = a.validator.normalizeRules(a.extend({}, a.validator.classRules(d), a.validator.attributeRules(d), a.validator.dataRules(d), a.validator.staticRules(d)), d);
            if (i.required) {
                var j = i.required;
                delete i.required, i = a.extend({
                    required: j
                }, i)
            }
            return i
        }
    }), a.extend(a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val())
        },
        filled: function(b) {
            return !!a.trim("" + a(b).val())
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a, b) {
                this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
            },
            onfocusout: function(a, b) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(a, b) {
                (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
            },
            onclick: function(a, b) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = a.data(this[0].form, "validator"),
                        d = "on" + b.type.replace(/^validate/, "");
                    c.settings[d] && c.settings[d].call(c, this[0], b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c = this.groups = {};
                a.each(this.settings.groups, function(b, d) {
                    "string" == typeof d && (d = d.split(/\s/)), a.each(d, function(a, d) {
                        c[d] = b
                    })
                });
                var d = this.settings.rules;
                a.each(d, function(b, c) {
                        d[b] = a.validator.normalizeRule(c)
                    }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b),
                    this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                b = this.validationTargetFor(this.clean(b)), this.lastElement = b, this.prepareElement(b), this.currentElements = a(b);
                var c = this.check(b) !== !1;
                return c ? delete this.invalid[b.name] : this.invalid[b.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), c
            },
            showErrors: function(b) {
                if (b) {
                    a.extend(this.errorMap, b), this.errorList = [];
                    for (var c in b) this.errorList.push({
                        message: b[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b = 0;
                for (var c in a) b++;
                return b
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.replace(" ", ".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c = a(b).attr("type"),
                    d = a(b).val();
                return "radio" === c || "checkbox" === c ? a("input[name='" + a(b).attr("name") + "']:checked").val() : "string" == typeof d ? d.replace(/\r/g, "") : d
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d = a(b).rules(),
                    e = !1,
                    f = this.elementValue(b);
                for (var g in d) {
                    var h = {
                        method: g,
                        parameters: d[g]
                    };
                    try {
                        if (c = a.validator.methods[g].call(this, f, b, h.parameters), "dependency-mismatch" === c) {
                            e = !0;
                            continue
                        }
                        if (e = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, h), !1
                    } catch (i) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + h.method + "' method.", i), i
                    }
                }
                return e ? void 0 : (this.objectLength(d) && this.successList.push(b), !0)
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg-" + c.toLowerCase()) || b.attributes && a(b).attr("data-msg-" + c.toLowerCase())
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a];
                return void 0
            },
            defaultMessage: function(b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },
            formatAndAdd: function(b, c) {
                var d = this.defaultMessage(b, c.method),
                    e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                    message: d,
                    element: b
                }), this.errorMap[b.name] = d, this.submitted[b.name] = d
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function() {
                var a, b;
                for (a = 0; this.errorList[a]; a++) {
                    var c = this.errorList[a];
                    this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), 1 == this.settings.doNotHideMessage || this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d = this.errorsFor(b);
                d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.html(c)) : (d = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)), this.toShow = this.toShow.add(d)
            },
            errorsFor: function(b) {
                var c = this.idOrName(b);
                return this.errors().filter(function() {
                    return a(this).attr("for") === c
                })
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(a) {
                return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + b + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            },
            dependTypes: {
                "boolean": function(a, b) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {},
                d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        attributeRules: function(b) {
            var c = {},
                d = a(b),
                e = d[0].getAttribute("type");
            for (var f in a.validator.methods) {
                var g;
                "required" === f ? (g = d.get(0).getAttribute(f), "" === g && (g = !0), g = !!g) : g = d.attr(f), /min|max/.test(f) && (null === e || /number|range|text/.test(e)) && (g = Number(g)), g ? c[f] = g : e === f && "range" !== e && (c[f] = !0)
            }
            return c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength, c
        },
        dataRules: function(b) {
            var c, d, e = {},
                f = a(b);
            for (c in a.validator.methods) d = f.data("rule-" + c.toLowerCase()), void 0 !== d && (e[c] = d);
            return e
        },
        staticRules: function(b) {
            var c = {},
                d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                }
            }), a.each(b, function(d, e) {
                b[d] = a.isFunction(e) ? e(c) : e
            }), a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            creditcard: function(a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a)) return !1;
                var c = 0,
                    d = 0,
                    e = !1;
                a = a.replace(/\D/g, "");
                for (var f = a.length - 1; f >= 0; f--) {
                    var g = a.charAt(f);
                    d = parseInt(g, 10), e && (d *= 2) > 9 && (d -= 9), c += d, e = !e
                }
                return c % 10 === 0
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || d >= e
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || c >= a
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    a(c).valid()
                }), b === e.val()
            },
            remote: function(b, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e = this.previousValue(c);
                if (this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), e.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = e.message, d = "string" == typeof d && {
                        url: d
                    } || d, e.old === b) return e.valid;
                e.old = b;
                var f = this;
                this.startRequest(c);
                var g = {};
                return g[c.name] = b, a.ajax(a.extend(!0, {
                    url: d,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    success: function(d) {
                        f.settings.messages[c.name].remote = e.originalMessage;
                        var g = d === !0 || "true" === d;
                        if (g) {
                            var h = f.formSubmitted;
                            f.prepareElement(c), f.formSubmitted = h, f.successList.push(c), delete f.invalid[c.name], f.showErrors()
                        } else {
                            var i = {},
                                j = d || f.defaultMessage(c, "remote");
                            i[c.name] = e.message = a.isFunction(j) ? j(b) : j, f.invalid[c.name] = !0, f.showErrors(i)
                        }
                        e.valid = g, f.stopRequest(c, g)
                    }
                }, d)), "pending"
            }
        }
    }), a.format = a.validator.format
}(jQuery),
function(a) {
    var b = {};
    if (a.ajaxPrefilter) a.ajaxPrefilter(function(a, c, d) {
        var e = a.port;
        "abort" === a.mode && (b[e] && b[e].abort(), b[e] = d)
    });
    else {
        var c = a.ajax;
        a.ajax = function(d) {
            var e = ("mode" in d ? d : a.ajaxSettings).mode,
                f = ("port" in d ? d : a.ajaxSettings).port;
            return "abort" === e ? (b[f] && b[f].abort(), b[f] = c.apply(this, arguments), b[f]) : c.apply(this, arguments)
        }
    }
}(jQuery),
function(a) {
    a.extend(a.fn, {
        validateDelegate: function(b, c, d) {
            return this.bind(c, function(c) {
                var e = a(c.target);
                return e.is(b) ? d.apply(e, arguments) : void 0
            })
        }
    })
}(jQuery),
function() {
    function a(a) {
        return a.replace(/<.[^<>]*?>/g, " ").replace(/Â |Â /gi, " ").replace(/[.(),;:!?%#$'"_+=\/\-]*/g, "")
    }
    jQuery.validator.addMethod("maxWords", function(b, c, d) {
        return this.optional(c) || a(b).match(/\b\w+\b/g).length <= d
    }, jQuery.validator.format("Please enter {0} words or less.")), jQuery.validator.addMethod("minWords", function(b, c, d) {
        return this.optional(c) || a(b).match(/\b\w+\b/g).length >= d
    }, jQuery.validator.format("Please enter at least {0} words.")), jQuery.validator.addMethod("rangeWords", function(b, c, d) {
        var e = a(b),
            f = /\b\w+\b/g;
        return this.optional(c) || e.match(f).length >= d[0] && e.match(f).length <= d[1]
    }, jQuery.validator.format("Please enter between {0} and {1} words."))
}(), jQuery.validator.addMethod("letterswithbasicpunc", function(a, b) {
        return this.optional(b) || /^[a-z\-.,()'"\s]+$/i.test(a)
    }, "Letters or punctuation only please"), jQuery.validator.addMethod("alphanumeric", function(a, b) {
        return this.optional(b) || /^\w+$/i.test(a)
    }, "Letters, numbers, and underscores only please"), jQuery.validator.addMethod("lettersonly", function(a, b) {
        return this.optional(b) || /^[a-z]+$/i.test(a)
    }, "Letters only please"), jQuery.validator.addMethod("nowhitespace", function(a, b) {
        return this.optional(b) || /^\S+$/i.test(a)
    }, "No white space please"), jQuery.validator.addMethod("ziprange", function(a, b) {
        return this.optional(b) || /^90[2-5]\d\{2\}-\d{4}$/.test(a)
    }, "Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx"), jQuery.validator.addMethod("zipcodeUS", function(a, b) {
        return this.optional(b) || /\d{5}-\d{4}$|^\d{5}$/.test(a)
    }, "The specified US ZIP Code is invalid"), jQuery.validator.addMethod("integer", function(a, b) {
        return this.optional(b) || /^-?\d+$/.test(a)
    }, "A positive or negative non-decimal number please"), jQuery.validator.addMethod("vinUS", function(a) {
        if (17 !== a.length) return !1;
        var b, c, d, e, f, g, h = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            i = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
            j = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
            k = 0;
        for (b = 0; 17 > b; b++) {
            if (e = j[b], d = a.slice(b, b + 1), 8 === b && (g = d), isNaN(d)) {
                for (c = 0; c < h.length; c++)
                    if (d.toUpperCase() === h[c]) {
                        d = i[c], d *= e, isNaN(g) && 8 === c && (g = h[c]);
                        break
                    }
            } else d *= e;
            k += d
        }
        return f = k % 11, 10 === f && (f = "X"), f === g ? !0 : !1
    }, "The specified vehicle identification number (VIN) is invalid."), jQuery.validator.addMethod("dateITA", function(a, b) {
        var c = !1,
            d = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        if (d.test(a)) {
            var e = a.split("/"),
                f = parseInt(e[0], 10),
                g = parseInt(e[1], 10),
                h = parseInt(e[2], 10),
                i = new Date(h, g - 1, f);
            c = i.getFullYear() === h && i.getMonth() === g - 1 && i.getDate() === f ? !0 : !1
        } else c = !1;
        return this.optional(b) || c
    }, "Please enter a correct date"), jQuery.validator.addMethod("iban", function(a, b) {
        if (this.optional(b)) return !0;
        if (!/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(a)) return !1;
        var c = a.replace(/ /g, "").toUpperCase(),
            d = c.substring(0, 2),
            e = {
                AL: "\\d{8}[\\dA-Z]{16}",
                AD: "\\d{8}[\\dA-Z]{12}",
                AT: "\\d{16}",
                AZ: "[\\dA-Z]{4}\\d{20}",
                BE: "\\d{12}",
                BH: "[A-Z]{4}[\\dA-Z]{14}",
                BA: "\\d{16}",
                BR: "\\d{23}[A-Z][\\dA-Z]",
                BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
                CR: "\\d{17}",
                HR: "\\d{17}",
                CY: "\\d{8}[\\dA-Z]{16}",
                CZ: "\\d{20}",
                DK: "\\d{14}",
                DO: "[A-Z]{4}\\d{20}",
                EE: "\\d{16}",
                FO: "\\d{14}",
                FI: "\\d{14}",
                FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
                GE: "[\\dA-Z]{2}\\d{16}",
                DE: "\\d{18}",
                GI: "[A-Z]{4}[\\dA-Z]{15}",
                GR: "\\d{7}[\\dA-Z]{16}",
                GL: "\\d{14}",
                GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
                HU: "\\d{24}",
                IS: "\\d{22}",
                IE: "[\\dA-Z]{4}\\d{14}",
                IL: "\\d{19}",
                IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
                KZ: "\\d{3}[\\dA-Z]{13}",
                KW: "[A-Z]{4}[\\dA-Z]{22}",
                LV: "[A-Z]{4}[\\dA-Z]{13}",
                LB: "\\d{4}[\\dA-Z]{20}",
                LI: "\\d{5}[\\dA-Z]{12}",
                LT: "\\d{16}",
                LU: "\\d{3}[\\dA-Z]{13}",
                MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
                MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
                MR: "\\d{23}",
                MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
                MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
                MD: "[\\dA-Z]{2}\\d{18}",
                ME: "\\d{18}",
                NL: "[A-Z]{4}\\d{10}",
                NO: "\\d{11}",
                PK: "[\\dA-Z]{4}\\d{16}",
                PS: "[\\dA-Z]{4}\\d{21}",
                PL: "\\d{24}",
                PT: "\\d{21}",
                RO: "[A-Z]{4}[\\dA-Z]{16}",
                SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
                SA: "\\d{2}[\\dA-Z]{18}",
                RS: "\\d{18}",
                SK: "\\d{20}",
                SI: "\\d{15}",
                ES: "\\d{20}",
                SE: "\\d{20}",
                CH: "\\d{5}[\\dA-Z]{12}",
                TN: "\\d{20}",
                TR: "\\d{5}[\\dA-Z]{17}",
                AE: "\\d{3}\\d{16}",
                GB: "[A-Z]{4}\\d{14}",
                VG: "[\\dA-Z]{4}\\d{16}"
            },
            f = e[d];
        if ("undefined" != typeof f) {
            var g = new RegExp("^[A-Z]{2}\\d{2}" + f + "$", "");
            if (!g.test(c)) return !1
        }
        for (var h, i = c.substring(4, c.length) + c.substring(0, 4), j = "", k = !0, l = 0; l < i.length; l++) h = i.charAt(l), "0" !== h && (k = !1), k || (j += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(h));
        for (var m = "", n = "", o = 0; o < j.length; o++) {
            var p = j.charAt(o);
            n = "" + m + p, m = n % 97
        }
        return 1 === m
    }, "Please specify a valid IBAN"), jQuery.validator.addMethod("dateNL", function(a, b) {
        return this.optional(b) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(a)
    }, "Please enter a correct date"), jQuery.validator.addMethod("phoneNL", function(a, b) {
        return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(a)
    }, "Please specify a valid phone number."), jQuery.validator.addMethod("mobileNL", function(a, b) {
        return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(a)
    }, "Please specify a valid mobile number"), jQuery.validator.addMethod("postalcodeNL", function(a, b) {
        return this.optional(b) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a)
    }, "Please specify a valid postal code"), jQuery.validator.addMethod("bankaccountNL", function(a, b) {
        if (this.optional(b)) return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a)) return !1;
        for (var c = a.replace(/ /g, ""), d = 0, e = c.length, f = 0; e > f; f++) {
            var g = e - f,
                h = c.substring(f, f + 1);
            d += g * h
        }
        return d % 11 === 0
    }, "Please specify a valid bank account number"), jQuery.validator.addMethod("giroaccountNL", function(a, b) {
        return this.optional(b) || /^[0-9]{1,7}$/.test(a)
    }, "Please specify a valid giro account number"), jQuery.validator.addMethod("bankorgiroaccountNL", function(a, b) {
        return this.optional(b) || $.validator.methods.bankaccountNL.call(this, a, b) || $.validator.methods.giroaccountNL.call(this, a, b)
    }, "Please specify a valid bank or giro account number"), jQuery.validator.addMethod("time", function(a, b) {
        return this.optional(b) || /^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(a)
    }, "Please enter a valid time, between 00:00 and 23:59"), jQuery.validator.addMethod("time12h", function(a, b) {
        return this.optional(b) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a)
    }, "Please enter a valid time in 12-hour am/pm format"), jQuery.validator.addMethod("phoneUS", function(a, b) {
        return a = a.replace(/\s+/g, ""), this.optional(b) || a.length > 9 && a.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)
    }, "Please specify a valid phone number"), jQuery.validator.addMethod("phoneUK", function(a, b) {
        return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
    }, "Please specify a valid phone number"), jQuery.validator.addMethod("mobileUK", function(a, b) {
        return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
    }, "Please specify a valid mobile number"), jQuery.validator.addMethod("phonesUK", function(a, b) {
        return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/)
    }, "Please specify a valid uk phone number"), jQuery.validator.addMethod("postcodeUK", function(a, b) {
        return this.optional(b) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(a)
    }, "Please specify a valid UK postcode"), jQuery.validator.addMethod("strippedminlength", function(a, b, c) {
        return jQuery(a).text().length >= c
    }, jQuery.validator.format("Please enter at least {0} characters")), jQuery.validator.addMethod("email2", function(a, b, c) {
        return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(a)
    }, jQuery.validator.messages.email), jQuery.validator.addMethod("url2", function(a, b, c) {
        return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
    }, jQuery.validator.messages.url), jQuery.validator.addMethod("creditcardtypes", function(a, b, c) {
        if (/[^0-9\-]+/.test(a)) return !1;
        a = a.replace(/\D/g, "");
        var d = 0;
        return c.mastercard && (d |= 1), c.visa && (d |= 2), c.amex && (d |= 4), c.dinersclub && (d |= 8), c.enroute && (d |= 16), c.discover && (d |= 32), c.jcb && (d |= 64), c.unknown && (d |= 128), c.all && (d = 255), 1 & d && /^(5[12345])/.test(a) ? 16 === a.length : 2 & d && /^(4)/.test(a) ? 16 === a.length : 4 & d && /^(3[47])/.test(a) ? 15 === a.length : 8 & d && /^(3(0[012345]|[68]))/.test(a) ? 14 === a.length : 16 & d && /^(2(014|149))/.test(a) ? 15 === a.length : 32 & d && /^(6011)/.test(a) ? 16 === a.length : 64 & d && /^(3)/.test(a) ? 16 === a.length : 64 & d && /^(2131|1800)/.test(a) ? 15 === a.length : 128 & d ? !0 : !1
    }, "Please enter a valid credit card number."), jQuery.validator.addMethod("ipv4", function(a, b, c) {
        return this.optional(b) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(a)
    }, "Please enter a valid IP v4 address."), jQuery.validator.addMethod("ipv6", function(a, b, c) {
        return this.optional(b) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a)
    }, "Please enter a valid IP v6 address."), jQuery.validator.addMethod("pattern", function(a, b, c) {
        return this.optional(b) ? !0 : ("string" == typeof c && (c = new RegExp("^(?:" + c + ")$")), c.test(a))
    }, "Invalid format."), jQuery.validator.addMethod("require_from_group", function(a, b, c) {
        var d = this,
            e = c[1],
            f = $(e, b.form).filter(function() {
                return d.elementValue(this)
            }).length >= c[0];
        if (!$(b).data("being_validated")) {
            var g = $(e, b.form);
            g.data("being_validated", !0), g.valid(), g.data("being_validated", !1)
        }
        return f
    }, jQuery.format("Please fill at least {0} of these fields.")), jQuery.validator.addMethod("skip_or_fill_minimum", function(a, b, c) {
        var d = this,
            e = c[0],
            f = c[1],
            g = $(f, b.form).filter(function() {
                return d.elementValue(this)
            }).length,
            h = g >= e || 0 === g;
        if (!$(b).data("being_validated")) {
            var i = $(f, b.form);
            i.data("being_validated", !0), i.valid(), i.data("being_validated", !1)
        }
        return h
    }, jQuery.format("Please either skip these fields or fill at least {0} of them.")), jQuery.validator.addMethod("accept", function(a, b, c) {
        var d, e, f = "string" == typeof c ? c.replace(/\s/g, "").replace(/,/g, "|") : "image/*",
            g = this.optional(b);
        if (g) return g;
        if ("file" === $(b).attr("type") && (f = f.replace(/\*/g, ".*"), b.files && b.files.length))
            for (d = 0; d < b.files.length; d++)
                if (e = b.files[d], !e.type.match(new RegExp(".?(" + f + ")$", "i"))) return !1;
        return !0
    }, jQuery.format("Please enter a value with a valid mimetype.")), jQuery.validator.addMethod("extension", function(a, b, c) {
        return c = "string" == typeof c ? c.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(b) || a.match(new RegExp(".(" + c + ")$", "i"))
    }, jQuery.format("Please enter a value with a valid extension.")),
    function(a) {
        var b = {
                init: function(b) {
                    var d = {
                        color: a(this).css("background-color"),
                        reach: 20,
                        speed: 1e3,
                        pause: 0,
                        glow: !0,
                        repeat: !0,
                        onHover: !1
                    };
                    return a(this).css({
                        "-moz-outline-radius": a(this).css("border-top-left-radius"),
                        "-webkit-outline-radius": a(this).css("border-top-left-radius"),
                        "outline-radius": a(this).css("border-top-left-radius")
                    }), b && a.extend(d, b), d.color = a("<div style='background:" + d.color + "'></div>").css("background-color"), d.repeat !== !0 && !isNaN(d.repeat) && d.repeat > 0 && (d.repeat -= 1), this.each(function() {
                        d.onHover ? a(this).bind("mouseover", function() {
                            c(d, this, 0)
                        }).bind("mouseout", function() {
                            a(this).pulsate("destroy")
                        }) : c(d, this, 0)
                    })
                },
                destroy: function() {
                    return this.each(function() {
                        clearTimeout(this.timer), a(this).css("outline", 0)
                    })
                }
            },
            c = function(b, e, f) {
                var g = b.reach;
                f = f > g ? 0 : f;
                var h = (g - f) / g,
                    i = b.color.split(",");
                h = "rgba(" + i[0].split("(")[1] + "," + i[1] + "," + i[2].split(")")[0] + "," + h + ")", i = {
                    outline: "2px solid " + h
                }, b.glow ? (i["box-shadow"] = "0px 0px " + parseInt(f / 1.5) + "px " + h, a.browser.webkit && (i["outline-offset"] = f + "px", i["outline-radius"] = "100 px")) : i["outline-offset"] = f + "px", a(e).css(i), e.timer = setTimeout(function() {
                    if (f >= g && !b.repeat) return a(e).pulsate("destroy"), !1;
                    if (f >= g && b.repeat !== !0 && !isNaN(b.repeat) && b.repeat > 0) b.repeat -= 1;
                    else if (b.pause && f >= g) return d(b, e, f + 1), !1;
                    c(b, e, f + 1)
                }, b.speed / g)
            },
            d = function(a, b, d) {
                innerfunc = function() {
                    c(a, b, d)
                }, setTimeout(innerfunc, a.pause)
            };
        a.fn.pulsate = function(c) {
            return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.pulsate") : b.init.apply(this, arguments)
        }
    }(jQuery),
    function() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice,
            Y = {}.hasOwnProperty,
            Z = function(a, b) {
                function c() {
                    this.constructor = a
                }
                for (var d in b) Y.call(b, d) && (a[d] = b[d]);
                return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
            },
            $ = [].indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            };
        for (u = {
                catchupTime: 100,
                initialRate: .03,
                minTime: 250,
                ghostTime: 100,
                maxProgressPerFrame: 20,
                easeFactor: 1.25,
                startOnPageLoad: !0,
                restartOnPushState: !0,
                restartOnRequestAfter: 500,
                target: "body",
                elements: {
                    checkInterval: 100,
                    selectors: ["body"]
                },
                eventLag: {
                    minSamples: 10,
                    sampleCount: 3,
                    lagThreshold: 3
                },
                ajax: {
                    trackMethods: ["GET"],
                    trackWebSockets: !0,
                    ignoreURLs: []
                }
            }, C = function() {
                var a;
                return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date
            }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function(a) {
                return setTimeout(a, 50)
            }, t = function(a) {
                return clearTimeout(a)
            }), G = function(a) {
                var b, c;
                return b = C(), (c = function() {
                    var d;
                    return d = C() - b, d >= 33 ? (b = C(), a(d, function() {
                        return E(c)
                    })) : setTimeout(c, 33 - d)
                })()
            }, F = function() {
                var a, b, c;
                return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
            }, v = function() {
                var a, b, c, d, e, f, g;
                for (b = arguments[0],
                    d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)
                    if (c = d[f])
                        for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
                return b
            }, q = function(a) {
                var b, c, d, e, f;
                for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
                return c / b
            }, x = function(a, b) {
                var c, d, e;
                if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
                    if (c = e.getAttribute("data-pace-" + a), !b) return c;
                    try {
                        return JSON.parse(c)
                    } catch (f) {
                        return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0
                    }
                }
            }, g = function() {
                function a() {}
                return a.prototype.on = function(a, b, c, d) {
                    var e;
                    return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
                        handler: b,
                        ctx: c,
                        once: d
                    })
                }, a.prototype.once = function(a, b, c) {
                    return this.on(a, b, c, !0)
                }, a.prototype.off = function(a, b) {
                    var c, d, e;
                    if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                        if (null == b) return delete this.bindings[a];
                        for (c = 0, e = []; c < this.bindings[a].length;) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
                        return e
                    }
                }, a.prototype.trigger = function() {
                    var a, b, c, d, e, f, g, h, i;
                    if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
                        for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
                        return i
                    }
                }, a
            }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) K = U[Q], D[K] === !0 && (D[K] = u[K]);
        i = function(a) {
            function b() {
                return V = b.__super__.constructor.apply(this, arguments)
            }
            return Z(b, a), b
        }(Error), b = function() {
            function a() {
                this.progress = 0
            }
            return a.prototype.getElement = function() {
                var a;
                if (null == this.el) {
                    if (a = document.querySelector(D.target), !a) throw new i;
                    this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el)
                }
                return this.el
            }, a.prototype.finish = function() {
                var a;
                return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
            }, a.prototype.update = function(a) {
                return this.progress = a, this.render()
            }, a.prototype.destroy = function() {
                try {
                    this.getElement().parentNode.removeChild(this.getElement())
                } catch (a) {
                    i = a
                }
                return this.el = void 0
            }, a.prototype.render = function() {
                var a, b, c, d, e, f, g;
                if (null == document.querySelector(D.target)) return !1;
                for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) b = g[e], a.children[0].style[b] = d;
                return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress
            }, a.prototype.done = function() {
                return this.progress >= 100
            }, a
        }(), h = function() {
            function a() {
                this.bindings = {}
            }
            return a.prototype.trigger = function(a, b) {
                var c, d, e, f, g;
                if (null != this.bindings[a]) {
                    for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
                    return g
                }
            }, a.prototype.on = function(a, b) {
                var c;
                return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b)
            }, a
        }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function(a, b) {
            var c, d, e;
            e = [];
            for (d in b.prototype) try {
                e.push(null == a[d] && "function" != typeof b[d] ? "function" == typeof Object.defineProperty ? Object.defineProperty(a, d, {
                    get: function() {
                        return b.prototype[d]
                    },
                    configurable: !0,
                    enumerable: !0
                }) : a[d] = b.prototype[d] : void 0)
            } catch (f) {
                c = f
            }
            return e
        }, A = [], j.ignore = function() {
            var a, b, c;
            return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c
        }, j.track = function() {
            var a, b, c;
            return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c
        }, J = function(a) {
            var b;
            if (null == a && (a = "GET"), "track" === A[0]) return "force";
            if (!A.length && D.ajax) {
                if ("socket" === a && D.ajax.trackWebSockets) return !0;
                if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0
            }
            return !1
        }, k = function(a) {
            function b() {
                var a, c = this;
                b.__super__.constructor.apply(this, arguments), a = function(a) {
                    var b;
                    return b = a.open, a.open = function(d, e, f) {
                        return J(d) && c.trigger("request", {
                            type: d,
                            url: e,
                            request: a
                        }), b.apply(a, arguments)
                    }
                }, window.XMLHttpRequest = function(b) {
                    var c;
                    return c = new P(b), a(c), c
                };
                try {
                    w(window.XMLHttpRequest, P)
                } catch (d) {}
                if (null != O) {
                    window.XDomainRequest = function() {
                        var b;
                        return b = new O, a(b), b
                    };
                    try {
                        w(window.XDomainRequest, O)
                    } catch (d) {}
                }
                if (null != N && D.ajax.trackWebSockets) {
                    window.WebSocket = function(a, b) {
                        var d;
                        return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
                            type: "socket",
                            url: a,
                            protocols: b,
                            request: d
                        }), d
                    };
                    try {
                        w(window.WebSocket, N)
                    } catch (d) {}
                }
            }
            return Z(b, a), b
        }(h), R = null, y = function() {
            return null == R && (R = new k), R
        }, I = function(a) {
            var b, c, d, e;
            for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
                if (b = e[c], "string" == typeof b) {
                    if (-1 !== a.indexOf(b)) return !0
                } else if (b.test(a)) return !0;
            return !1
        }, y().on("request", function(b) {
            var c, d, e, f, g;
            return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function() {
                var b, c, g, h, i, k;
                if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
                    for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
                        if (K = i[c], K instanceof a) {
                            K.watch.apply(K, d);
                            break
                        }
                        k.push(void 0)
                    }
                    return k
                }
            }, c))
        }), a = function() {
            function a() {
                var a = this;
                this.elements = [], y().on("request", function() {
                    return a.watch.apply(a, arguments)
                })
            }
            return a.prototype.watch = function(a) {
                var b, c, d, e;
                return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c))
            }, a
        }(), o = function() {
            function a(a) {
                var b, c, d, e, f, g, h = this;
                if (this.progress = 0, null != window.ProgressEvent)
                    for (c = null, a.addEventListener("progress", function(a) {
                            return a.lengthComputable ? h.progress = 100 * a.loaded / a.total : h.progress = h.progress + (100 - h.progress) / 2
                        }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function() {
                        return h.progress = 100
                    }, !1);
                else f = a.onreadystatechange, a.onreadystatechange = function() {
                    var b;
                    return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0
                }
            }
            return a
        }(), n = function() {
            function a(a) {
                var b, c, d, e, f = this;
                for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function() {
                    return f.progress = 100
                }, !1)
            }
            return a
        }(), d = function() {
            function a(a) {
                var b, c, d, f;
                for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b))
            }
            return a
        }(), e = function() {
            function a(a) {
                this.selector = a, this.progress = 0, this.check()
            }
            return a.prototype.check = function() {
                var a = this;
                return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                    return a.check()
                }, D.elements.checkInterval)
            }, a.prototype.done = function() {
                return this.progress = 100
            }, a
        }(), c = function() {
            function a() {
                var a, b, c = this;
                this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function() {
                    return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
                }
            }
            return a.prototype.states = {
                loading: 0,
                interactive: 50,
                complete: 100
            }, a
        }(), f = function() {
            function a() {
                var a, b, c, d, e, f = this;
                this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function() {
                    var g;
                    return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3))
                }, 50)
            }
            return a
        }(), m = function() {
            function a(a) {
                this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"))
            }
            return a.prototype.tick = function(a, b) {
                var c;
                return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
            }, a
        }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function() {
            return D.restartOnPushState ? j.restart() : void 0
        }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function() {
            return z(), T.apply(window.history, arguments)
        }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function() {
            return z(), W.apply(window.history, arguments)
        }), l = {
            ajax: a,
            elements: d,
            document: c,
            eventLag: f
        }, (B = function() {
            var a, c, d, e, f, g, h, i;
            for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
            for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) K = i[d], L.push(new K(D));
            return j.bar = r = new b, H = [], M = new m
        })(), j.stop = function() {
            return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B()
        }, j.restart = function() {
            return j.trigger("restart"), j.stop(), j.start()
        }, j.go = function() {
            var a;
            return j.running = !0, r.render(), a = C(), s = !1, p = G(function(b, c) {
                var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
                for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)
                    for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
                return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function() {
                    return r.finish(), j.running = !1, j.trigger("hide")
                }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c()
            })
        }, j.start = function(a) {
            v(D, a), j.running = !0;
            try {
                r.render()
            } catch (b) {
                i = b
            }
            return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50)
        }, "function" == typeof define && define.amd ? define(["pace"], function() {
            return j
        }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start()
    }.call(this), jQuery(document).ready(function() {
        if ($("body").on("show", ".modal-vertical-centered", function() {
                $("body").scrollTop(0)
            }), "undefined" != typeof form_errors_array)
            for (var a in form_errors_array)
                if (form_errors_array.hasOwnProperty(a)) {
                    var b = form_errors_array[a];
                    for (var c in b)
                        if (b.hasOwnProperty(c)) {
                            var d = $('[name="' + a + '"]');
                            d.closest(".controls").append('<div><span class="help-inline" style="color: #b94a48 !important">' + b[c] + "</span></div>"), d.closest(".control-group").addClass("error")
                        }
                }
        App.init();
        try {
            UIGeneral.init()
        } catch (e) {}
        $("#page_loader").fadeOut(), $(".bookmark_li").fadeIn(1e3), $("#email-bounce-error-btn").click(function(a) {
            request = $.ajax({
                url: "/switcher/ajax-email-bounce-reason/"
            }), request.done(function(a, b, c) {
                "undefined" != typeof a && null != a && ($("#email-bounce-error-note").text(a.reason), $("#email-bounce-error-modal").modal("show"))
            }), request.fail(function(a, b, c) {})
        }), $("#change-email-btn").click(function() {
            "/profile" != window.location.pathname ? window.location.replace("/profile#tab_1-2") : ($("#tabs_top li").removeClass("active"), $(".tab-pane").removeClass("active"), $("#profile-menu-tabs li").removeClass("active"), $("#tab_1_1_top").addClass("active"), $("#tab_1_1").addClass("active"), $("#tab_1-2").addClass("active"), $("#profile-menu-tabs .edit-profile").addClass("active"))
        });
        var f = {
            lock: function(a) {
                $("body").lock(a)
            },
            unlock: function() {
                $("body").unlock()
            }
        };
        $.prototype.lock = function(a) {
            if ("[object HTMLDocument]" == this.get(0).toString()) return f.lock(a);
            var b = "";
            if ("[object HTMLBodyElement]" == this.get(0).toString()) {
                this.offset();
                b = "position: fixed; top:" + ($(window).height() / 2 - 64) + "px; left: " + ($(window).width() / 2 - 64) + "px;"
            } else b = "position: absolute; top:" + (this.offset().top + this.height() / 2 - 64) + "px; left: " + (this.offset().left + this.width() / 2 - 64) + "px;";
            this.append($('<div id="preloader" class="' + (a ? a : "black") + '" style="' + b + '"/>')), this.prepend($('<div id="locker" style="background-color: rgb(100,100,100); position:absolute;width:' + this.width() + "px;height:" + this.height() + 'px;z-index:99999;opacity:0.5">')), this.addClass("locked")
        }, $.prototype.unlock = function() {
            return "[object HTMLDocument]" == this.get(0).toString() ? f.unlock() : ($("#locker").remove(), $("#preloader").remove(), void this.removeClass("locked"))
        }, $(".header .hor-menu ul.nav, ul.nav.pull-right").on("mouseenter", "li", function() {
            return is_touch_device() ? !1 : void $(this).not("#header_notification_bar, #header_inbox_bar").addClass("open")
        }).on("mouseleave", "li", function() {
            return is_touch_device() ? !1 : void $(this).not(".header #header_notification_bar, #header_inbox_bar").removeClass("open")
        }), $(".close").click(function(a) {
            a.preventDefault(), $(this).closest(".note").fadeOut("slow", function() {
                $(this).remove()
            })
        }), $("#global_coupon_bar").size() > 0 && $("#main_container").addClass("global-coupon"), "undefined" != typeof ga && $(".ga-event").click(function() {
            ga("send", "event", "cpanel", $(this).attr("data-ga-event-name"))
        })
    });