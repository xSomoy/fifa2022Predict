/*! For license information please see main.caa1c670.js.LICENSE.txt */ ! function () {
    var e = {
        757: function (e, t, n) {
            e.exports = n(727)
        },
        383: function (e) {
            var t = {
                utf8: {
                    stringToBytes: function (e) {
                        return t.bin.stringToBytes(unescape(encodeURIComponent(e)))
                    },
                    bytesToString: function (e) {
                        return decodeURIComponent(escape(t.bin.bytesToString(e)))
                    }
                },
                bin: {
                    stringToBytes: function (e) {
                        for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                        return t
                    },
                    bytesToString: function (e) {
                        for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                        return t.join("")
                    }
                }
            };
            e.exports = t
        },
        358: function (e) {
            ! function () {
                var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    n = {
                        rotl: function (e, t) {
                            return e << t | e >>> 32 - t
                        },
                        rotr: function (e, t) {
                            return e << 32 - t | e >>> t
                        },
                        endian: function (e) {
                            if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                            for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                            return e
                        },
                        randomBytes: function (e) {
                            for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                            return t
                        },
                        bytesToWords: function (e) {
                            for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                            return t
                        },
                        wordsToBytes: function (e) {
                            for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                            return t
                        },
                        bytesToHex: function (e) {
                            for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                            return t.join("")
                        },
                        hexToBytes: function (e) {
                            for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                            return t
                        },
                        bytesToBase64: function (e) {
                            for (var n = [], r = 0; r < e.length; r += 3)
                                for (var o = e[r] << 16 | e[r + 1] << 8 | e[r + 2], a = 0; a < 4; a++) 8 * r + 6 * a <= 8 * e.length ? n.push(t.charAt(o >>> 6 * (3 - a) & 63)) : n.push("=");
                            return n.join("")
                        },
                        base64ToBytes: function (e) {
                            e = e.replace(/[^A-Z0-9+\/]/gi, "");
                            for (var n = [], r = 0, o = 0; r < e.length; o = ++r % 4) 0 != o && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | t.indexOf(e.charAt(r)) >>> 6 - 2 * o);
                            return n
                        }
                    };
                e.exports = n
            }()
        },
        110: function (e, t, n) {
            "use strict";
            var r = n(309),
                o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                i = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                l = {};

            function u(e) {
                return r.isMemo(e) ? i : l[e.$$typeof] || o
            }
            l[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, l[r.Memo] = i;
            var c = Object.defineProperty,
                s = Object.getOwnPropertyNames,
                d = Object.getOwnPropertySymbols,
                f = Object.getOwnPropertyDescriptor,
                p = Object.getPrototypeOf,
                g = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" !== typeof n) {
                    if (g) {
                        var o = p(n);
                        o && o !== g && e(t, o, r)
                    }
                    var i = s(n);
                    d && (i = i.concat(d(n)));
                    for (var l = u(t), m = u(n), h = 0; h < i.length; ++h) {
                        var v = i[h];
                        if (!a[v] && (!r || !r[v]) && (!m || !m[v]) && (!l || !l[v])) {
                            var b = f(n, v);
                            try {
                                c(t, v, b)
                            } catch (y) { }
                        }
                    }
                }
                return t
            }
        },
        746: function (e, t) {
            "use strict";
            var n = "function" === typeof Symbol && Symbol.for,
                r = n ? Symbol.for("react.element") : 60103,
                o = n ? Symbol.for("react.portal") : 60106,
                a = n ? Symbol.for("react.fragment") : 60107,
                i = n ? Symbol.for("react.strict_mode") : 60108,
                l = n ? Symbol.for("react.profiler") : 60114,
                u = n ? Symbol.for("react.provider") : 60109,
                c = n ? Symbol.for("react.context") : 60110,
                s = n ? Symbol.for("react.async_mode") : 60111,
                d = n ? Symbol.for("react.concurrent_mode") : 60111,
                f = n ? Symbol.for("react.forward_ref") : 60112,
                p = n ? Symbol.for("react.suspense") : 60113,
                g = n ? Symbol.for("react.suspense_list") : 60120,
                m = n ? Symbol.for("react.memo") : 60115,
                h = n ? Symbol.for("react.lazy") : 60116,
                v = n ? Symbol.for("react.block") : 60121,
                b = n ? Symbol.for("react.fundamental") : 60117,
                y = n ? Symbol.for("react.responder") : 60118,
                w = n ? Symbol.for("react.scope") : 60119;

            function x(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case r:
                            switch (e = e.type) {
                                case s:
                                case d:
                                case a:
                                case l:
                                case i:
                                case p:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case c:
                                        case f:
                                        case h:
                                        case m:
                                        case u:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case o:
                            return t
                    }
                }
            }

            function C(e) {
                return x(e) === d
            }
            t.AsyncMode = s, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = u, t.Element = r, t.ForwardRef = f, t.Fragment = a, t.Lazy = h, t.Memo = m, t.Portal = o, t.Profiler = l, t.StrictMode = i, t.Suspense = p, t.isAsyncMode = function (e) {
                return C(e) || x(e) === s
            }, t.isConcurrentMode = C, t.isContextConsumer = function (e) {
                return x(e) === c
            }, t.isContextProvider = function (e) {
                return x(e) === u
            }, t.isElement = function (e) {
                return "object" === typeof e && null !== e && e.$$typeof === r
            }, t.isForwardRef = function (e) {
                return x(e) === f
            }, t.isFragment = function (e) {
                return x(e) === a
            }, t.isLazy = function (e) {
                return x(e) === h
            }, t.isMemo = function (e) {
                return x(e) === m
            }, t.isPortal = function (e) {
                return x(e) === o
            }, t.isProfiler = function (e) {
                return x(e) === l
            }, t.isStrictMode = function (e) {
                return x(e) === i
            }, t.isSuspense = function (e) {
                return x(e) === p
            }, t.isValidElementType = function (e) {
                return "string" === typeof e || "function" === typeof e || e === a || e === d || e === l || e === i || e === p || e === g || "object" === typeof e && null !== e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === u || e.$$typeof === c || e.$$typeof === f || e.$$typeof === b || e.$$typeof === y || e.$$typeof === w || e.$$typeof === v)
            }, t.typeOf = x
        },
        309: function (e, t, n) {
            "use strict";
            e.exports = n(746)
        },
        725: function (e) {
            "use strict";
            var t = Object.getOwnPropertySymbols,
                n = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;

            function o(e) {
                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function () {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) {
                        return t[e]
                    })).join("")) return !1;
                    var r = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                        r[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (o) {
                    return !1
                }
            }() ? Object.assign : function (e, a) {
                for (var i, l, u = o(e), c = 1; c < arguments.length; c++) {
                    for (var s in i = Object(arguments[c])) n.call(i, s) && (u[s] = i[s]);
                    if (t) {
                        l = t(i);
                        for (var d = 0; d < l.length; d++) r.call(i, l[d]) && (u[l[d]] = i[l[d]])
                    }
                }
                return u
            }
        },
        463: function (e, t, n) {
            "use strict";
            var r = n(791),
                o = n(725),
                a = n(296);

            function i(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            if (!r) throw Error(i(227));
            var l = new Set,
                u = {};

            function c(e, t) {
                s(e, t), s(e + "Capture", t)
            }

            function s(e, t) {
                for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e])
            }
            var d = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                p = Object.prototype.hasOwnProperty,
                g = {},
                m = {};

            function h(e, t, n, r, o, a, i) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i
            }
            var v = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
                v[e] = new h(e, 0, !1, e, null, !1, !1)
            })), [
                ["acceptCharset", "accept-charset"],
                ["className", "class"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"]
            ].forEach((function (e) {
                var t = e[0];
                v[t] = new h(t, 1, !1, e[1], null, !1, !1)
            })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
                v[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1)
            })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
                v[e] = new h(e, 2, !1, e, null, !1, !1)
            })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
                v[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1)
            })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
                v[e] = new h(e, 3, !0, e, null, !1, !1)
            })), ["capture", "download"].forEach((function (e) {
                v[e] = new h(e, 4, !1, e, null, !1, !1)
            })), ["cols", "rows", "size", "span"].forEach((function (e) {
                v[e] = new h(e, 6, !1, e, null, !1, !1)
            })), ["rowSpan", "start"].forEach((function (e) {
                v[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1)
            }));
            var b = /[\-:]([a-z])/g;

            function y(e) {
                return e[1].toUpperCase()
            }

            function w(e, t, n, r) {
                var o = v.hasOwnProperty(t) ? v[t] : null;
                (null !== o ? 0 === o.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function (e, t, n, r) {
                    if (null === t || "undefined" === typeof t || function (e, t, n, r) {
                        if (null !== n && 0 === n.type) return !1;
                        switch (typeof t) {
                            case "function":
                            case "symbol":
                                return !0;
                            case "boolean":
                                return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                            default:
                                return !1
                        }
                    }(e, t, n, r)) return !0;
                    if (r) return !1;
                    if (null !== n) switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                    }
                    return !1
                }(t, n, o, r) && (n = null), r || null === o ? function (e) {
                    return !!p.call(m, e) || !p.call(g, e) && (f.test(e) ? m[e] = !0 : (g[e] = !0, !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
                var t = e.replace(b, y);
                v[t] = new h(t, 1, !1, e, null, !1, !1)
            })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
                var t = e.replace(b, y);
                v[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
            })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
                var t = e.replace(b, y);
                v[t] = new h(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
            })), ["tabIndex", "crossOrigin"].forEach((function (e) {
                v[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1)
            })), v.xlinkHref = new h("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) {
                v[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0)
            }));
            var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                C = 60103,
                S = 60106,
                k = 60107,
                E = 60108,
                _ = 60114,
                N = 60109,
                I = 60110,
                P = 60112,
                O = 60113,
                D = 60120,
                R = 60115,
                T = 60116,
                A = 60121,
                j = 60128,
                L = 60129,
                M = 60130,
                B = 60131;
            if ("function" === typeof Symbol && Symbol.for) {
                var F = Symbol.for;
                C = F("react.element"), S = F("react.portal"), k = F("react.fragment"), E = F("react.strict_mode"), _ = F("react.profiler"), N = F("react.provider"), I = F("react.context"), P = F("react.forward_ref"), O = F("react.suspense"), D = F("react.suspense_list"), R = F("react.memo"), T = F("react.lazy"), A = F("react.block"), F("react.scope"), j = F("react.opaque.id"), L = F("react.debug_trace_mode"), M = F("react.offscreen"), B = F("react.legacy_hidden")
            }
            var z, U = "function" === typeof Symbol && Symbol.iterator;

            function G(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = U && e[U] || e["@@iterator"]) ? e : null
            }

            function W(e) {
                if (void 0 === z) try {
                    throw Error()
                } catch (n) {
                    var t = n.stack.trim().match(/\n( *(at )?)/);
                    z = t && t[1] || ""
                }
                return "\n" + z + e
            }
            var H = !1;

            function V(e, t) {
                if (!e || H) return "";
                H = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t)
                        if (t = function () {
                            throw Error()
                        }, Object.defineProperty(t.prototype, "props", {
                            set: function () {
                                throw Error()
                            }
                        }), "object" === typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(t, [])
                            } catch (u) {
                                var r = u
                            }
                            Reflect.construct(e, [], t)
                        } else {
                            try {
                                t.call()
                            } catch (u) {
                                r = u
                            }
                            e.call(t.prototype)
                        }
                    else {
                        try {
                            throw Error()
                        } catch (u) {
                            r = u
                        }
                        e()
                    }
                } catch (u) {
                    if (u && r && "string" === typeof u.stack) {
                        for (var o = u.stack.split("\n"), a = r.stack.split("\n"), i = o.length - 1, l = a.length - 1; 1 <= i && 0 <= l && o[i] !== a[l];) l--;
                        for (; 1 <= i && 0 <= l; i--, l--)
                            if (o[i] !== a[l]) {
                                if (1 !== i || 1 !== l)
                                    do {
                                        if (i--, 0 > --l || o[i] !== a[l]) return "\n" + o[i].replace(" at new ", " at ")
                                    } while (1 <= i && 0 <= l);
                                break
                            }
                    }
                } finally {
                    H = !1, Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? W(e) : ""
            }

            function K(e) {
                switch (e.tag) {
                    case 5:
                        return W(e.type);
                    case 16:
                        return W("Lazy");
                    case 13:
                        return W("Suspense");
                    case 19:
                        return W("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return e = V(e.type, !1);
                    case 11:
                        return e = V(e.type.render, !1);
                    case 22:
                        return e = V(e.type._render, !1);
                    case 1:
                        return e = V(e.type, !0);
                    default:
                        return ""
                }
            }

            function $(e) {
                if (null == e) return null;
                if ("function" === typeof e) return e.displayName || e.name || null;
                if ("string" === typeof e) return e;
                switch (e) {
                    case k:
                        return "Fragment";
                    case S:
                        return "Portal";
                    case _:
                        return "Profiler";
                    case E:
                        return "StrictMode";
                    case O:
                        return "Suspense";
                    case D:
                        return "SuspenseList"
                }
                if ("object" === typeof e) switch (e.$$typeof) {
                    case I:
                        return (e.displayName || "Context") + ".Consumer";
                    case N:
                        return (e._context.displayName || "Context") + ".Provider";
                    case P:
                        var t = e.render;
                        return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                    case R:
                        return $(e.type);
                    case A:
                        return $(e._render);
                    case T:
                        t = e._payload, e = e._init;
                        try {
                            return $(e(t))
                        } catch (n) { }
                }
                return null
            }

            function q(e) {
                switch (typeof e) {
                    case "boolean":
                    case "number":
                    case "object":
                    case "string":
                    case "undefined":
                        return e;
                    default:
                        return ""
                }
            }

            function Y(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }

            function Q(e) {
                e._valueTracker || (e._valueTracker = function (e) {
                    var t = Y(e) ? "checked" : "value",
                        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                        r = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var o = n.get,
                            a = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function () {
                                return o.call(this)
                            },
                            set: function (e) {
                                r = "" + e, a.call(this, e)
                            }
                        }), Object.defineProperty(e, t, {
                            enumerable: n.enumerable
                        }), {
                            getValue: function () {
                                return r
                            },
                            setValue: function (e) {
                                r = "" + e
                            },
                            stopTracking: function () {
                                e._valueTracker = null, delete e[t]
                            }
                        }
                    }
                }(e))
            }

            function Z(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(),
                    r = "";
                return e && (r = Y(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
            }

            function X(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }

            function J(e, t) {
                var n = t.checked;
                return o({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }

            function ee(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue,
                    r = null != t.checked ? t.checked : t.defaultChecked;
                n = q(null != t.value ? t.value : n), e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }

            function te(e, t) {
                null != (t = t.checked) && w(e, "checked", t, !1)
            }

            function ne(e, t) {
                te(e, t);
                var n = q(t.value),
                    r = t.type;
                if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? oe(e, t.type, n) : t.hasOwnProperty("defaultValue") && oe(e, t.type, q(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }

            function re(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
            }

            function oe(e, t, n) {
                "number" === t && X(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }

            function ae(e, t) {
                return e = o({
                    children: void 0
                }, t), (t = function (e) {
                    var t = "";
                    return r.Children.forEach(e, (function (e) {
                        null != e && (t += e)
                    })), t
                }(t.children)) && (e.children = t), e
            }

            function ie(e, t, n, r) {
                if (e = e.options, t) {
                    t = {};
                    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
                    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + q(n), t = null, o = 0; o < e.length; o++) {
                        if (e[o].value === n) return e[o].selected = !0, void (r && (e[o].defaultSelected = !0));
                        null !== t || e[o].disabled || (t = e[o])
                    }
                    null !== t && (t.selected = !0)
                }
            }

            function le(e, t) {
                if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
                return o({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }

            function ue(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children, t = t.defaultValue, null != n) {
                        if (null != t) throw Error(i(92));
                        if (Array.isArray(n)) {
                            if (!(1 >= n.length)) throw Error(i(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""), n = t
                }
                e._wrapperState = {
                    initialValue: q(n)
                }
            }

            function ce(e, t) {
                var n = q(t.value),
                    r = q(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
            }

            function se(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }
            var de = "http://www.w3.org/1999/xhtml",
                fe = "http://www.w3.org/2000/svg";

            function pe(e) {
                switch (e) {
                    case "svg":
                        return "http://www.w3.org/2000/svg";
                    case "math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }

            function ge(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? pe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
            var me, he, ve = (he = function (e, t) {
                if (e.namespaceURI !== fe || "innerHTML" in e) e.innerHTML = t;
                else {
                    for ((me = me || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = me.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                    for (; t.firstChild;) e.appendChild(t.firstChild)
                }
            }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function () {
                    return he(e, t)
                }))
            } : he);

            function be(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
                }
                e.textContent = t
            }
            var ye = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            },
                we = ["Webkit", "ms", "Moz", "O"];

            function xe(e, t, n) {
                return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || ye.hasOwnProperty(e) && ye[e] ? ("" + t).trim() : t + "px"
            }

            function Ce(e, t) {
                for (var n in e = e.style, t)
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--"),
                            o = xe(n, t[n], r);
                        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
                    }
            }
            Object.keys(ye).forEach((function (e) {
                we.forEach((function (t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1), ye[t] = ye[e]
                }))
            }));
            var Se = o({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });

            function ke(e, t) {
                if (t) {
                    if (Se[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(i(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw Error(i(60));
                        if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61))
                    }
                    if (null != t.style && "object" !== typeof t.style) throw Error(i(62))
                }
            }

            function Ee(e, t) {
                if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                switch (e) {
                    case "annotation-xml":
                    case "color-profile":
                    case "font-face":
                    case "font-face-src":
                    case "font-face-uri":
                    case "font-face-format":
                    case "font-face-name":
                    case "missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }

            function _e(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
            }
            var Ne = null,
                Ie = null,
                Pe = null;

            function Oe(e) {
                if (e = ro(e)) {
                    if ("function" !== typeof Ne) throw Error(i(280));
                    var t = e.stateNode;
                    t && (t = ao(t), Ne(e.stateNode, e.type, t))
                }
            }

            function De(e) {
                Ie ? Pe ? Pe.push(e) : Pe = [e] : Ie = e
            }

            function Re() {
                if (Ie) {
                    var e = Ie,
                        t = Pe;
                    if (Pe = Ie = null, Oe(e), t)
                        for (e = 0; e < t.length; e++) Oe(t[e])
                }
            }

            function Te(e, t) {
                return e(t)
            }

            function Ae(e, t, n, r, o) {
                return e(t, n, r, o)
            }

            function je() { }
            var Le = Te,
                Me = !1,
                Be = !1;

            function Fe() {
                null === Ie && null === Pe || (je(), Re())
            }

            function ze(e, t) {
                var n = e.stateNode;
                if (null === n) return null;
                var r = ao(n);
                if (null === r) return null;
                n = r[t];
                e: switch (t) {
                    case "onClick":
                    case "onClickCapture":
                    case "onDoubleClick":
                    case "onDoubleClickCapture":
                    case "onMouseDown":
                    case "onMouseDownCapture":
                    case "onMouseMove":
                    case "onMouseMoveCapture":
                    case "onMouseUp":
                    case "onMouseUpCapture":
                    case "onMouseEnter":
                        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                        break e;
                    default:
                        e = !1
                }
                if (e) return null;
                if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
                return n
            }
            var Ue = !1;
            if (d) try {
                var Ge = {};
                Object.defineProperty(Ge, "passive", {
                    get: function () {
                        Ue = !0
                    }
                }), window.addEventListener("test", Ge, Ge), window.removeEventListener("test", Ge, Ge)
            } catch (he) {
                Ue = !1
            }

            function We(e, t, n, r, o, a, i, l, u) {
                var c = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, c)
                } catch (s) {
                    this.onError(s)
                }
            }
            var He = !1,
                Ve = null,
                Ke = !1,
                $e = null,
                qe = {
                    onError: function (e) {
                        He = !0, Ve = e
                    }
                };

            function Ye(e, t, n, r, o, a, i, l, u) {
                He = !1, Ve = null, We.apply(qe, arguments)
            }

            function Qe(e) {
                var t = e,
                    n = e;
                if (e.alternate)
                    for (; t.return;) t = t.return;
                else {
                    e = t;
                    do {
                        0 !== (1026 & (t = e).flags) && (n = t.return), e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }

            function Ze(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                }
                return null
            }

            function Xe(e) {
                if (Qe(e) !== e) throw Error(i(188))
            }

            function Je(e) {
                if (e = function (e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = Qe(e))) throw Error(i(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ;) {
                        var o = n.return;
                        if (null === o) break;
                        var a = o.alternate;
                        if (null === a) {
                            if (null !== (r = o.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (o.child === a.child) {
                            for (a = o.child; a;) {
                                if (a === n) return Xe(o), e;
                                if (a === r) return Xe(o), t;
                                a = a.sibling
                            }
                            throw Error(i(188))
                        }
                        if (n.return !== r.return) n = o, r = a;
                        else {
                            for (var l = !1, u = o.child; u;) {
                                if (u === n) {
                                    l = !0, n = o, r = a;
                                    break
                                }
                                if (u === r) {
                                    l = !0, r = o, n = a;
                                    break
                                }
                                u = u.sibling
                            }
                            if (!l) {
                                for (u = a.child; u;) {
                                    if (u === n) {
                                        l = !0, n = a, r = o;
                                        break
                                    }
                                    if (u === r) {
                                        l = !0, r = a, n = o;
                                        break
                                    }
                                    u = u.sibling
                                }
                                if (!l) throw Error(i(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(i(190))
                    }
                    if (3 !== n.tag) throw Error(i(188));
                    return n.stateNode.current === n ? e : t
                }(e), !e) return null;
                for (var t = e; ;) {
                    if (5 === t.tag || 6 === t.tag) return t;
                    if (t.child) t.child.return = t, t = t.child;
                    else {
                        if (t === e) break;
                        for (; !t.sibling;) {
                            if (!t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }
                return null
            }

            function et(e, t) {
                for (var n = e.alternate; null !== t;) {
                    if (t === e || t === n) return !0;
                    t = t.return
                }
                return !1
            }
            var tt, nt, rt, ot, at = !1,
                it = [],
                lt = null,
                ut = null,
                ct = null,
                st = new Map,
                dt = new Map,
                ft = [],
                pt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

            function gt(e, t, n, r, o) {
                return {
                    blockedOn: e,
                    domEventName: t,
                    eventSystemFlags: 16 | n,
                    nativeEvent: o,
                    targetContainers: [r]
                }
            }

            function mt(e, t) {
                switch (e) {
                    case "focusin":
                    case "focusout":
                        lt = null;
                        break;
                    case "dragenter":
                    case "dragleave":
                        ut = null;
                        break;
                    case "mouseover":
                    case "mouseout":
                        ct = null;
                        break;
                    case "pointerover":
                    case "pointerout":
                        st.delete(t.pointerId);
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                        dt.delete(t.pointerId)
                }
            }

            function ht(e, t, n, r, o, a) {
                return null === e || e.nativeEvent !== a ? (e = gt(t, n, r, o, a), null !== t && (null !== (t = ro(t)) && nt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
            }

            function vt(e) {
                var t = no(e.target);
                if (null !== t) {
                    var n = Qe(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = Ze(n))) return e.blockedOn = t, void ot(e.lanePriority, (function () {
                                a.unstable_runWithPriority(e.priority, (function () {
                                    rt(n)
                                }))
                            }))
                        } else if (3 === t && n.stateNode.hydrate) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }

            function bt(e) {
                if (null !== e.blockedOn) return !1;
                for (var t = e.targetContainers; 0 < t.length;) {
                    var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n) return null !== (t = ro(n)) && nt(t), e.blockedOn = n, !1;
                    t.shift()
                }
                return !0
            }

            function yt(e, t, n) {
                bt(e) && n.delete(t)
            }

            function wt() {
                for (at = !1; 0 < it.length;) {
                    var e = it[0];
                    if (null !== e.blockedOn) {
                        null !== (e = ro(e.blockedOn)) && tt(e);
                        break
                    }
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) {
                            e.blockedOn = n;
                            break
                        }
                        t.shift()
                    }
                    null === e.blockedOn && it.shift()
                }
                null !== lt && bt(lt) && (lt = null), null !== ut && bt(ut) && (ut = null), null !== ct && bt(ct) && (ct = null), st.forEach(yt), dt.forEach(yt)
            }

            function xt(e, t) {
                e.blockedOn === t && (e.blockedOn = null, at || (at = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, wt)))
            }

            function Ct(e) {
                function t(t) {
                    return xt(t, e)
                }
                if (0 < it.length) {
                    xt(it[0], e);
                    for (var n = 1; n < it.length; n++) {
                        var r = it[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== lt && xt(lt, e), null !== ut && xt(ut, e), null !== ct && xt(ct, e), st.forEach(t), dt.forEach(t), n = 0; n < ft.length; n++)(r = ft[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < ft.length && null === (n = ft[0]).blockedOn;) vt(n), null === n.blockedOn && ft.shift()
            }

            function St(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
            }
            var kt = {
                animationend: St("Animation", "AnimationEnd"),
                animationiteration: St("Animation", "AnimationIteration"),
                animationstart: St("Animation", "AnimationStart"),
                transitionend: St("Transition", "TransitionEnd")
            },
                Et = {},
                _t = {};

            function Nt(e) {
                if (Et[e]) return Et[e];
                if (!kt[e]) return e;
                var t, n = kt[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in _t) return Et[e] = n[t];
                return e
            }
            d && (_t = document.createElement("div").style, "AnimationEvent" in window || (delete kt.animationend.animation, delete kt.animationiteration.animation, delete kt.animationstart.animation), "TransitionEvent" in window || delete kt.transitionend.transition);
            var It = Nt("animationend"),
                Pt = Nt("animationiteration"),
                Ot = Nt("animationstart"),
                Dt = Nt("transitionend"),
                Rt = new Map,
                Tt = new Map,
                At = ["abort", "abort", It, "animationEnd", Pt, "animationIteration", Ot, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Dt, "transitionEnd", "waiting", "waiting"];

            function jt(e, t) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n],
                        o = e[n + 1];
                    o = "on" + (o[0].toUpperCase() + o.slice(1)), Tt.set(r, t), Rt.set(r, o), c(o, [r])
                }
            } (0, a.unstable_now)();
            var Lt = 8;

            function Mt(e) {
                if (0 !== (1 & e)) return Lt = 15, 1;
                if (0 !== (2 & e)) return Lt = 14, 2;
                if (0 !== (4 & e)) return Lt = 13, 4;
                var t = 24 & e;
                return 0 !== t ? (Lt = 12, t) : 0 !== (32 & e) ? (Lt = 11, 32) : 0 !== (t = 192 & e) ? (Lt = 10, t) : 0 !== (256 & e) ? (Lt = 9, 256) : 0 !== (t = 3584 & e) ? (Lt = 8, t) : 0 !== (4096 & e) ? (Lt = 7, 4096) : 0 !== (t = 4186112 & e) ? (Lt = 6, t) : 0 !== (t = 62914560 & e) ? (Lt = 5, t) : 67108864 & e ? (Lt = 4, 67108864) : 0 !== (134217728 & e) ? (Lt = 3, 134217728) : 0 !== (t = 805306368 & e) ? (Lt = 2, t) : 0 !== (1073741824 & e) ? (Lt = 1, 1073741824) : (Lt = 8, e)
            }

            function Bt(e, t) {
                var n = e.pendingLanes;
                if (0 === n) return Lt = 0;
                var r = 0,
                    o = 0,
                    a = e.expiredLanes,
                    i = e.suspendedLanes,
                    l = e.pingedLanes;
                if (0 !== a) r = a, o = Lt = 15;
                else if (0 !== (a = 134217727 & n)) {
                    var u = a & ~i;
                    0 !== u ? (r = Mt(u), o = Lt) : 0 !== (l &= a) && (r = Mt(l), o = Lt)
                } else 0 !== (a = n & ~i) ? (r = Mt(a), o = Lt) : 0 !== l && (r = Mt(l), o = Lt);
                if (0 === r) return 0;
                if (r = n & ((0 > (r = 31 - Ht(r)) ? 0 : 1 << r) << 1) - 1, 0 !== t && t !== r && 0 === (t & i)) {
                    if (Mt(t), o <= Lt) return t;
                    Lt = o
                }
                if (0 !== (t = e.entangledLanes))
                    for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - Ht(t)), r |= e[n], t &= ~o;
                return r
            }

            function Ft(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }

            function zt(e, t) {
                switch (e) {
                    case 15:
                        return 1;
                    case 14:
                        return 2;
                    case 12:
                        return 0 === (e = Ut(24 & ~t)) ? zt(10, t) : e;
                    case 10:
                        return 0 === (e = Ut(192 & ~t)) ? zt(8, t) : e;
                    case 8:
                        return 0 === (e = Ut(3584 & ~t)) && (0 === (e = Ut(4186112 & ~t)) && (e = 512)), e;
                    case 2:
                        return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456), t
                }
                throw Error(i(358, e))
            }

            function Ut(e) {
                return e & -e
            }

            function Gt(e) {
                for (var t = [], n = 0; 31 > n; n++) t.push(e);
                return t
            }

            function Wt(e, t, n) {
                e.pendingLanes |= t;
                var r = t - 1;
                e.suspendedLanes &= r, e.pingedLanes &= r, (e = e.eventTimes)[t = 31 - Ht(t)] = n
            }
            var Ht = Math.clz32 ? Math.clz32 : function (e) {
                return 0 === e ? 32 : 31 - (Vt(e) / Kt | 0) | 0
            },
                Vt = Math.log,
                Kt = Math.LN2;
            var $t = a.unstable_UserBlockingPriority,
                qt = a.unstable_runWithPriority,
                Yt = !0;

            function Qt(e, t, n, r) {
                Me || je();
                var o = Xt,
                    a = Me;
                Me = !0;
                try {
                    Ae(o, e, t, n, r)
                } finally {
                    (Me = a) || Fe()
                }
            }

            function Zt(e, t, n, r) {
                qt($t, Xt.bind(null, e, t, n, r))
            }

            function Xt(e, t, n, r) {
                var o;
                if (Yt)
                    if ((o = 0 === (4 & t)) && 0 < it.length && -1 < pt.indexOf(e)) e = gt(null, e, t, n, r), it.push(e);
                    else {
                        var a = Jt(e, t, n, r);
                        if (null === a) o && mt(e, r);
                        else {
                            if (o) {
                                if (-1 < pt.indexOf(e)) return e = gt(a, e, t, n, r), void it.push(e);
                                if (function (e, t, n, r, o) {
                                    switch (t) {
                                        case "focusin":
                                            return lt = ht(lt, e, t, n, r, o), !0;
                                        case "dragenter":
                                            return ut = ht(ut, e, t, n, r, o), !0;
                                        case "mouseover":
                                            return ct = ht(ct, e, t, n, r, o), !0;
                                        case "pointerover":
                                            var a = o.pointerId;
                                            return st.set(a, ht(st.get(a) || null, e, t, n, r, o)), !0;
                                        case "gotpointercapture":
                                            return a = o.pointerId, dt.set(a, ht(dt.get(a) || null, e, t, n, r, o)), !0
                                    }
                                    return !1
                                }(a, e, t, n, r)) return;
                                mt(e, r)
                            }
                            jr(e, t, r, null, n)
                        }
                    }
            }

            function Jt(e, t, n, r) {
                var o = _e(r);
                if (null !== (o = no(o))) {
                    var a = Qe(o);
                    if (null === a) o = null;
                    else {
                        var i = a.tag;
                        if (13 === i) {
                            if (null !== (o = Ze(a))) return o;
                            o = null
                        } else if (3 === i) {
                            if (a.stateNode.hydrate) return 3 === a.tag ? a.stateNode.containerInfo : null;
                            o = null
                        } else a !== o && (o = null)
                    }
                }
                return jr(e, t, r, o, n), null
            }
            var en = null,
                tn = null,
                nn = null;

            function rn() {
                if (nn) return nn;
                var e, t, n = tn,
                    r = n.length,
                    o = "value" in en ? en.value : en.textContent,
                    a = o.length;
                for (e = 0; e < r && n[e] === o[e]; e++);
                var i = r - e;
                for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
                return nn = o.slice(e, 1 < t ? 1 - t : void 0)
            }

            function on(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
            }

            function an() {
                return !0
            }

            function ln() {
                return !1
            }

            function un(e) {
                function t(t, n, r, o, a) {
                    for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
                    return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? an : ln, this.isPropagationStopped = ln, this
                }
                return o(t.prototype, {
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = an)
                    },
                    stopPropagation: function () {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = an)
                    },
                    persist: function () { },
                    isPersistent: an
                }), t
            }
            var cn, sn, dn, fn = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function (e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            },
                pn = un(fn),
                gn = o({}, fn, {
                    view: 0,
                    detail: 0
                }),
                mn = un(gn),
                hn = o({}, gn, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: In,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function (e) {
                        return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                    },
                    movementX: function (e) {
                        return "movementX" in e ? e.movementX : (e !== dn && (dn && "mousemove" === e.type ? (cn = e.screenX - dn.screenX, sn = e.screenY - dn.screenY) : sn = cn = 0, dn = e), cn)
                    },
                    movementY: function (e) {
                        return "movementY" in e ? e.movementY : sn
                    }
                }),
                vn = un(hn),
                bn = un(o({}, hn, {
                    dataTransfer: 0
                })),
                yn = un(o({}, gn, {
                    relatedTarget: 0
                })),
                wn = un(o({}, fn, {
                    animationName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0
                })),
                xn = o({}, fn, {
                    clipboardData: function (e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData
                    }
                }),
                Cn = un(xn),
                Sn = un(o({}, fn, {
                    data: 0
                })),
                kn = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified"
                },
                En = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta"
                },
                _n = {
                    Alt: "altKey",
                    Control: "ctrlKey",
                    Meta: "metaKey",
                    Shift: "shiftKey"
                };

            function Nn(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = _n[e]) && !!t[e]
            }

            function In() {
                return Nn
            }
            var Pn = o({}, gn, {
                key: function (e) {
                    if (e.key) {
                        var t = kn[e.key] || e.key;
                        if ("Unidentified" !== t) return t
                    }
                    return "keypress" === e.type ? 13 === (e = on(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? En[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: In,
                charCode: function (e) {
                    return "keypress" === e.type ? on(e) : 0
                },
                keyCode: function (e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function (e) {
                    return "keypress" === e.type ? on(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            }),
                On = un(Pn),
                Dn = un(o({}, hn, {
                    pointerId: 0,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    pointerType: 0,
                    isPrimary: 0
                })),
                Rn = un(o({}, gn, {
                    touches: 0,
                    targetTouches: 0,
                    changedTouches: 0,
                    altKey: 0,
                    metaKey: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    getModifierState: In
                })),
                Tn = un(o({}, fn, {
                    propertyName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0
                })),
                An = o({}, hn, {
                    deltaX: function (e) {
                        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                    },
                    deltaY: function (e) {
                        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                    },
                    deltaZ: 0,
                    deltaMode: 0
                }),
                jn = un(An),
                Ln = [9, 13, 27, 32],
                Mn = d && "CompositionEvent" in window,
                Bn = null;
            d && "documentMode" in document && (Bn = document.documentMode);
            var Fn = d && "TextEvent" in window && !Bn,
                zn = d && (!Mn || Bn && 8 < Bn && 11 >= Bn),
                Un = String.fromCharCode(32),
                Gn = !1;

            function Wn(e, t) {
                switch (e) {
                    case "keyup":
                        return -1 !== Ln.indexOf(t.keyCode);
                    case "keydown":
                        return 229 !== t.keyCode;
                    case "keypress":
                    case "mousedown":
                    case "focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function Hn(e) {
                return "object" === typeof (e = e.detail) && "data" in e ? e.data : null
            }
            var Vn = !1;
            var Kn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };

            function $n(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Kn[e.type] : "textarea" === t
            }

            function qn(e, t, n, r) {
                De(r), 0 < (t = Mr(t, "onChange")).length && (n = new pn("onChange", "change", null, n, r), e.push({
                    event: n,
                    listeners: t
                }))
            }
            var Yn = null,
                Qn = null;

            function Zn(e) {
                Pr(e, 0)
            }

            function Xn(e) {
                if (Z(oo(e))) return e
            }

            function Jn(e, t) {
                if ("change" === e) return t
            }
            var er = !1;
            if (d) {
                var tr;
                if (d) {
                    var nr = "oninput" in document;
                    if (!nr) {
                        var rr = document.createElement("div");
                        rr.setAttribute("oninput", "return;"), nr = "function" === typeof rr.oninput
                    }
                    tr = nr
                } else tr = !1;
                er = tr && (!document.documentMode || 9 < document.documentMode)
            }

            function or() {
                Yn && (Yn.detachEvent("onpropertychange", ar), Qn = Yn = null)
            }

            function ar(e) {
                if ("value" === e.propertyName && Xn(Qn)) {
                    var t = [];
                    if (qn(t, Qn, e, _e(e)), e = Zn, Me) e(t);
                    else {
                        Me = !0;
                        try {
                            Te(e, t)
                        } finally {
                            Me = !1, Fe()
                        }
                    }
                }
            }

            function ir(e, t, n) {
                "focusin" === e ? (or(), Qn = n, (Yn = t).attachEvent("onpropertychange", ar)) : "focusout" === e && or()
            }

            function lr(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Xn(Qn)
            }

            function ur(e, t) {
                if ("click" === e) return Xn(t)
            }

            function cr(e, t) {
                if ("input" === e || "change" === e) return Xn(t)
            }
            var sr = "function" === typeof Object.is ? Object.is : function (e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            },
                dr = Object.prototype.hasOwnProperty;

            function fr(e, t) {
                if (sr(e, t)) return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++)
                    if (!dr.call(t, n[r]) || !sr(e[n[r]], t[n[r]])) return !1;
                return !0
            }

            function pr(e) {
                for (; e && e.firstChild;) e = e.firstChild;
                return e
            }

            function gr(e, t) {
                var n, r = pr(e);
                for (e = 0; r;) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length, e <= t && n >= t) return {
                            node: r,
                            offset: t - e
                        };
                        e = n
                    }
                    e: {
                        for (; r;) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = pr(r)
                }
            }

            function mr(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? mr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }

            function hr() {
                for (var e = window, t = X(); t instanceof e.HTMLIFrameElement;) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href
                    } catch (r) {
                        n = !1
                    }
                    if (!n) break;
                    t = X((e = t.contentWindow).document)
                }
                return t
            }

            function vr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }
            var br = d && "documentMode" in document && 11 >= document.documentMode,
                yr = null,
                wr = null,
                xr = null,
                Cr = !1;

            function Sr(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                Cr || null == yr || yr !== X(r) || ("selectionStart" in (r = yr) && vr(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                }, xr && fr(xr, r) || (xr = r, 0 < (r = Mr(wr, "onSelect")).length && (t = new pn("onSelect", "select", null, t, n), e.push({
                    event: t,
                    listeners: r
                }), t.target = yr)))
            }
            jt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), jt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), jt(At, 2);
            for (var kr = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Er = 0; Er < kr.length; Er++) Tt.set(kr[Er], 0);
            s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var _r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                Nr = new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));

            function Ir(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n,
                    function (e, t, n, r, o, a, l, u, c) {
                        if (Ye.apply(this, arguments), He) {
                            if (!He) throw Error(i(198));
                            var s = Ve;
                            He = !1, Ve = null, Ke || (Ke = !0, $e = s)
                        }
                    }(r, t, void 0, e), e.currentTarget = null
            }

            function Pr(e, t) {
                t = 0 !== (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        o = r.event;
                    r = r.listeners;
                    e: {
                        var a = void 0;
                        if (t)
                            for (var i = r.length - 1; 0 <= i; i--) {
                                var l = r[i],
                                    u = l.instance,
                                    c = l.currentTarget;
                                if (l = l.listener, u !== a && o.isPropagationStopped()) break e;
                                Ir(o, l, c), a = u
                            } else
                            for (i = 0; i < r.length; i++) {
                                if (u = (l = r[i]).instance, c = l.currentTarget, l = l.listener, u !== a && o.isPropagationStopped()) break e;
                                Ir(o, l, c), a = u
                            }
                    }
                }
                if (Ke) throw e = $e, Ke = !1, $e = null, e
            }

            function Or(e, t) {
                var n = io(t),
                    r = e + "__bubble";
                n.has(r) || (Ar(t, e, 2, !1), n.add(r))
            }
            var Dr = "_reactListening" + Math.random().toString(36).slice(2);

            function Rr(e) {
                e[Dr] || (e[Dr] = !0, l.forEach((function (t) {
                    Nr.has(t) || Tr(t, !1, e, null), Tr(t, !0, e, null)
                })))
            }

            function Tr(e, t, n, r) {
                var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                    a = n;
                if ("selectionchange" === e && 9 !== n.nodeType && (a = n.ownerDocument), null !== r && !t && Nr.has(e)) {
                    if ("scroll" !== e) return;
                    o |= 2, a = r
                }
                var i = io(a),
                    l = e + "__" + (t ? "capture" : "bubble");
                i.has(l) || (t && (o |= 4), Ar(a, e, o, t), i.add(l))
            }

            function Ar(e, t, n, r) {
                var o = Tt.get(t);
                switch (void 0 === o ? 2 : o) {
                    case 0:
                        o = Qt;
                        break;
                    case 1:
                        o = Zt;
                        break;
                    default:
                        o = Xt
                }
                n = o.bind(null, t, n, e), o = void 0, !Ue || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: o
                }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
                    passive: o
                }) : e.addEventListener(t, n, !1)
            }

            function jr(e, t, n, r, o) {
                var a = r;
                if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (; ;) {
                    if (null === r) return;
                    var i = r.tag;
                    if (3 === i || 4 === i) {
                        var l = r.stateNode.containerInfo;
                        if (l === o || 8 === l.nodeType && l.parentNode === o) break;
                        if (4 === i)
                            for (i = r.return; null !== i;) {
                                var u = i.tag;
                                if ((3 === u || 4 === u) && ((u = i.stateNode.containerInfo) === o || 8 === u.nodeType && u.parentNode === o)) return;
                                i = i.return
                            }
                        for (; null !== l;) {
                            if (null === (i = no(l))) return;
                            if (5 === (u = i.tag) || 6 === u) {
                                r = a = i;
                                continue e
                            }
                            l = l.parentNode
                        }
                    }
                    r = r.return
                } ! function (e, t, n) {
                    if (Be) return e(t, n);
                    Be = !0;
                    try {
                        Le(e, t, n)
                    } finally {
                        Be = !1, Fe()
                    }
                }((function () {
                    var r = a,
                        o = _e(n),
                        i = [];
                    e: {
                        var l = Rt.get(e);
                        if (void 0 !== l) {
                            var u = pn,
                                c = e;
                            switch (e) {
                                case "keypress":
                                    if (0 === on(n)) break e;
                                case "keydown":
                                case "keyup":
                                    u = On;
                                    break;
                                case "focusin":
                                    c = "focus", u = yn;
                                    break;
                                case "focusout":
                                    c = "blur", u = yn;
                                    break;
                                case "beforeblur":
                                case "afterblur":
                                    u = yn;
                                    break;
                                case "click":
                                    if (2 === n.button) break e;
                                case "auxclick":
                                case "dblclick":
                                case "mousedown":
                                case "mousemove":
                                case "mouseup":
                                case "mouseout":
                                case "mouseover":
                                case "contextmenu":
                                    u = vn;
                                    break;
                                case "drag":
                                case "dragend":
                                case "dragenter":
                                case "dragexit":
                                case "dragleave":
                                case "dragover":
                                case "dragstart":
                                case "drop":
                                    u = bn;
                                    break;
                                case "touchcancel":
                                case "touchend":
                                case "touchmove":
                                case "touchstart":
                                    u = Rn;
                                    break;
                                case It:
                                case Pt:
                                case Ot:
                                    u = wn;
                                    break;
                                case Dt:
                                    u = Tn;
                                    break;
                                case "scroll":
                                    u = mn;
                                    break;
                                case "wheel":
                                    u = jn;
                                    break;
                                case "copy":
                                case "cut":
                                case "paste":
                                    u = Cn;
                                    break;
                                case "gotpointercapture":
                                case "lostpointercapture":
                                case "pointercancel":
                                case "pointerdown":
                                case "pointermove":
                                case "pointerout":
                                case "pointerover":
                                case "pointerup":
                                    u = Dn
                            }
                            var s = 0 !== (4 & t),
                                d = !s && "scroll" === e,
                                f = s ? null !== l ? l + "Capture" : null : l;
                            s = [];
                            for (var p, g = r; null !== g;) {
                                var m = (p = g).stateNode;
                                if (5 === p.tag && null !== m && (p = m, null !== f && (null != (m = ze(g, f)) && s.push(Lr(g, m, p)))), d) break;
                                g = g.return
                            }
                            0 < s.length && (l = new u(l, c, null, n, o), i.push({
                                event: l,
                                listeners: s
                            }))
                        }
                    }
                    if (0 === (7 & t)) {
                        if (u = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || 0 !== (16 & t) || !(c = n.relatedTarget || n.fromElement) || !no(c) && !c[eo]) && (u || l) && (l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window, u ? (u = r, null !== (c = (c = n.relatedTarget || n.toElement) ? no(c) : null) && (c !== (d = Qe(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (u = null, c = r), u !== c)) {
                            if (s = vn, m = "onMouseLeave", f = "onMouseEnter", g = "mouse", "pointerout" !== e && "pointerover" !== e || (s = Dn, m = "onPointerLeave", f = "onPointerEnter", g = "pointer"), d = null == u ? l : oo(u), p = null == c ? l : oo(c), (l = new s(m, g + "leave", u, n, o)).target = d, l.relatedTarget = p, m = null, no(o) === r && ((s = new s(f, g + "enter", c, n, o)).target = p, s.relatedTarget = d, m = s), d = m, u && c) e: {
                                for (f = c, g = 0, p = s = u; p; p = Br(p)) g++;
                                for (p = 0, m = f; m; m = Br(m)) p++;
                                for (; 0 < g - p;) s = Br(s),
                                    g--;
                                for (; 0 < p - g;) f = Br(f),
                                    p--;
                                for (; g--;) {
                                    if (s === f || null !== f && s === f.alternate) break e;
                                    s = Br(s), f = Br(f)
                                }
                                s = null
                            }
                            else s = null;
                            null !== u && Fr(i, l, u, s, !1), null !== c && null !== d && Fr(i, d, c, s, !0)
                        }
                        if ("select" === (u = (l = r ? oo(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === u && "file" === l.type) var h = Jn;
                        else if ($n(l))
                            if (er) h = cr;
                            else {
                                h = lr;
                                var v = ir
                            }
                        else (u = l.nodeName) && "input" === u.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (h = ur);
                        switch (h && (h = h(e, r)) ? qn(i, h, n, o) : (v && v(e, l, r), "focusout" === e && (v = l._wrapperState) && v.controlled && "number" === l.type && oe(l, "number", l.value)), v = r ? oo(r) : window, e) {
                            case "focusin":
                                ($n(v) || "true" === v.contentEditable) && (yr = v, wr = r, xr = null);
                                break;
                            case "focusout":
                                xr = wr = yr = null;
                                break;
                            case "mousedown":
                                Cr = !0;
                                break;
                            case "contextmenu":
                            case "mouseup":
                            case "dragend":
                                Cr = !1, Sr(i, n, o);
                                break;
                            case "selectionchange":
                                if (br) break;
                            case "keydown":
                            case "keyup":
                                Sr(i, n, o)
                        }
                        var b;
                        if (Mn) e: {
                            switch (e) {
                                case "compositionstart":
                                    var y = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    y = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    y = "onCompositionUpdate";
                                    break e
                            }
                            y = void 0
                        }
                        else Vn ? Wn(e, n) && (y = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (y = "onCompositionStart");
                        y && (zn && "ko" !== n.locale && (Vn || "onCompositionStart" !== y ? "onCompositionEnd" === y && Vn && (b = rn()) : (tn = "value" in (en = o) ? en.value : en.textContent, Vn = !0)), 0 < (v = Mr(r, y)).length && (y = new Sn(y, e, null, n, o), i.push({
                            event: y,
                            listeners: v
                        }), b ? y.data = b : null !== (b = Hn(n)) && (y.data = b))), (b = Fn ? function (e, t) {
                            switch (e) {
                                case "compositionend":
                                    return Hn(t);
                                case "keypress":
                                    return 32 !== t.which ? null : (Gn = !0, Un);
                                case "textInput":
                                    return (e = t.data) === Un && Gn ? null : e;
                                default:
                                    return null
                            }
                        }(e, n) : function (e, t) {
                            if (Vn) return "compositionend" === e || !Mn && Wn(e, t) ? (e = rn(), nn = tn = en = null, Vn = !1, e) : null;
                            switch (e) {
                                case "paste":
                                default:
                                    return null;
                                case "keypress":
                                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                        if (t.char && 1 < t.char.length) return t.char;
                                        if (t.which) return String.fromCharCode(t.which)
                                    }
                                    return null;
                                case "compositionend":
                                    return zn && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && (0 < (r = Mr(r, "onBeforeInput")).length && (o = new Sn("onBeforeInput", "beforeinput", null, n, o), i.push({
                            event: o,
                            listeners: r
                        }), o.data = b))
                    }
                    Pr(i, t)
                }))
            }

            function Lr(e, t, n) {
                return {
                    instance: e,
                    listener: t,
                    currentTarget: n
                }
            }

            function Mr(e, t) {
                for (var n = t + "Capture", r = []; null !== e;) {
                    var o = e,
                        a = o.stateNode;
                    5 === o.tag && null !== a && (o = a, null != (a = ze(e, n)) && r.unshift(Lr(e, a, o)), null != (a = ze(e, t)) && r.push(Lr(e, a, o))), e = e.return
                }
                return r
            }

            function Br(e) {
                if (null === e) return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }

            function Fr(e, t, n, r, o) {
                for (var a = t._reactName, i = []; null !== n && n !== r;) {
                    var l = n,
                        u = l.alternate,
                        c = l.stateNode;
                    if (null !== u && u === r) break;
                    5 === l.tag && null !== c && (l = c, o ? null != (u = ze(n, a)) && i.unshift(Lr(n, u, l)) : o || null != (u = ze(n, a)) && i.push(Lr(n, u, l))), n = n.return
                }
                0 !== i.length && e.push({
                    event: t,
                    listeners: i
                })
            }

            function zr() { }
            var Ur = null,
                Gr = null;

            function Wr(e, t) {
                switch (e) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        return !!t.autoFocus
                }
                return !1
            }

            function Hr(e, t) {
                return "textarea" === e || "option" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var Vr = "function" === typeof setTimeout ? setTimeout : void 0,
                Kr = "function" === typeof clearTimeout ? clearTimeout : void 0;

            function $r(e) {
                1 === e.nodeType ? e.textContent = "" : 9 === e.nodeType && (null != (e = e.body) && (e.textContent = ""))
            }

            function qr(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break
                }
                return e
            }

            function Yr(e) {
                e = e.previousSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t) return e;
                            t--
                        } else "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var Qr = 0;
            var Zr = Math.random().toString(36).slice(2),
                Xr = "__reactFiber$" + Zr,
                Jr = "__reactProps$" + Zr,
                eo = "__reactContainer$" + Zr,
                to = "__reactEvents$" + Zr;

            function no(e) {
                var t = e[Xr];
                if (t) return t;
                for (var n = e.parentNode; n;) {
                    if (t = n[eo] || n[Xr]) {
                        if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                            for (e = Yr(e); null !== e;) {
                                if (n = e[Xr]) return n;
                                e = Yr(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }

            function ro(e) {
                return !(e = e[Xr] || e[eo]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }

            function oo(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw Error(i(33))
            }

            function ao(e) {
                return e[Jr] || null
            }

            function io(e) {
                var t = e[to];
                return void 0 === t && (t = e[to] = new Set), t
            }
            var lo = [],
                uo = -1;

            function co(e) {
                return {
                    current: e
                }
            }

            function so(e) {
                0 > uo || (e.current = lo[uo], lo[uo] = null, uo--)
            }

            function fo(e, t) {
                uo++, lo[uo] = e.current, e.current = t
            }
            var po = {},
                go = co(po),
                mo = co(!1),
                ho = po;

            function vo(e, t) {
                var n = e.type.contextTypes;
                if (!n) return po;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                var o, a = {};
                for (o in n) a[o] = t[o];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
            }

            function bo(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e
            }

            function yo() {
                so(mo), so(go)
            }

            function wo(e, t, n) {
                if (go.current !== po) throw Error(i(168));
                fo(go, t), fo(mo, n)
            }

            function xo(e, t, n) {
                var r = e.stateNode;
                if (e = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                for (var a in r = r.getChildContext())
                    if (!(a in e)) throw Error(i(108, $(t) || "Unknown", a));
                return o({}, n, r)
            }

            function Co(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || po, ho = go.current, fo(go, e), fo(mo, mo.current), !0
            }

            function So(e, t, n) {
                var r = e.stateNode;
                if (!r) throw Error(i(169));
                n ? (e = xo(e, t, ho), r.__reactInternalMemoizedMergedChildContext = e, so(mo), so(go), fo(go, e)) : so(mo), fo(mo, n)
            }
            var ko = null,
                Eo = null,
                _o = a.unstable_runWithPriority,
                No = a.unstable_scheduleCallback,
                Io = a.unstable_cancelCallback,
                Po = a.unstable_shouldYield,
                Oo = a.unstable_requestPaint,
                Do = a.unstable_now,
                Ro = a.unstable_getCurrentPriorityLevel,
                To = a.unstable_ImmediatePriority,
                Ao = a.unstable_UserBlockingPriority,
                jo = a.unstable_NormalPriority,
                Lo = a.unstable_LowPriority,
                Mo = a.unstable_IdlePriority,
                Bo = {},
                Fo = void 0 !== Oo ? Oo : function () { },
                zo = null,
                Uo = null,
                Go = !1,
                Wo = Do(),
                Ho = 1e4 > Wo ? Do : function () {
                    return Do() - Wo
                };

            function Vo() {
                switch (Ro()) {
                    case To:
                        return 99;
                    case Ao:
                        return 98;
                    case jo:
                        return 97;
                    case Lo:
                        return 96;
                    case Mo:
                        return 95;
                    default:
                        throw Error(i(332))
                }
            }

            function Ko(e) {
                switch (e) {
                    case 99:
                        return To;
                    case 98:
                        return Ao;
                    case 97:
                        return jo;
                    case 96:
                        return Lo;
                    case 95:
                        return Mo;
                    default:
                        throw Error(i(332))
                }
            }

            function $o(e, t) {
                return e = Ko(e), _o(e, t)
            }

            function qo(e, t, n) {
                return e = Ko(e), No(e, t, n)
            }

            function Yo() {
                if (null !== Uo) {
                    var e = Uo;
                    Uo = null, Io(e)
                }
                Qo()
            }

            function Qo() {
                if (!Go && null !== zo) {
                    Go = !0;
                    var e = 0;
                    try {
                        var t = zo;
                        $o(99, (function () {
                            for (; e < t.length; e++) {
                                var n = t[e];
                                do {
                                    n = n(!0)
                                } while (null !== n)
                            }
                        })), zo = null
                    } catch (n) {
                        throw null !== zo && (zo = zo.slice(e + 1)), No(To, Yo), n
                    } finally {
                        Go = !1
                    }
                }
            }
            var Zo = x.ReactCurrentBatchConfig;

            function Xo(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = o({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }
            var Jo = co(null),
                ea = null,
                ta = null,
                na = null;

            function ra() {
                na = ta = ea = null
            }

            function oa(e) {
                var t = Jo.current;
                so(Jo), e.type._context._currentValue = t
            }

            function aa(e, t) {
                for (; null !== e;) {
                    var n = e.alternate;
                    if ((e.childLanes & t) === t) {
                        if (null === n || (n.childLanes & t) === t) break;
                        n.childLanes |= t
                    } else e.childLanes |= t, null !== n && (n.childLanes |= t);
                    e = e.return
                }
            }

            function ia(e, t) {
                ea = e, na = ta = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (Mi = !0), e.firstContext = null)
            }

            function la(e, t) {
                if (na !== e && !1 !== t && 0 !== t)
                    if ("number" === typeof t && 1073741823 !== t || (na = e, t = 1073741823), t = {
                        context: e,
                        observedBits: t,
                        next: null
                    }, null === ta) {
                        if (null === ea) throw Error(i(308));
                        ta = t, ea.dependencies = {
                            lanes: 0,
                            firstContext: t,
                            responders: null
                        }
                    } else ta = ta.next = t;
                return e._currentValue
            }
            var ua = !1;

            function ca(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null
                    },
                    effects: null
                }
            }

            function sa(e, t) {
                e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }

            function da(e, t) {
                return {
                    eventTime: e,
                    lane: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }

            function fa(e, t) {
                if (null !== (e = e.updateQueue)) {
                    var n = (e = e.shared).pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }
            }

            function pa(e, t) {
                var n = e.updateQueue,
                    r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var o = null,
                        a = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var i = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === a ? o = a = i : a = a.next = i, n = n.next
                        } while (null !== n);
                        null === a ? o = a = t : a = a.next = t
                    } else o = a = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: o,
                        lastBaseUpdate: a,
                        shared: r.shared,
                        effects: r.effects
                    }, void (e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
            }

            function ga(e, t, n, r) {
                var a = e.updateQueue;
                ua = !1;
                var i = a.firstBaseUpdate,
                    l = a.lastBaseUpdate,
                    u = a.shared.pending;
                if (null !== u) {
                    a.shared.pending = null;
                    var c = u,
                        s = c.next;
                    c.next = null, null === l ? i = s : l.next = s, l = c;
                    var d = e.alternate;
                    if (null !== d) {
                        var f = (d = d.updateQueue).lastBaseUpdate;
                        f !== l && (null === f ? d.firstBaseUpdate = s : f.next = s, d.lastBaseUpdate = c)
                    }
                }
                if (null !== i) {
                    for (f = a.baseState, l = 0, d = s = c = null; ;) {
                        u = i.lane;
                        var p = i.eventTime;
                        if ((r & u) === u) {
                            null !== d && (d = d.next = {
                                eventTime: p,
                                lane: 0,
                                tag: i.tag,
                                payload: i.payload,
                                callback: i.callback,
                                next: null
                            });
                            e: {
                                var g = e,
                                    m = i;
                                switch (u = t, p = n, m.tag) {
                                    case 1:
                                        if ("function" === typeof (g = m.payload)) {
                                            f = g.call(p, f, u);
                                            break e
                                        }
                                        f = g;
                                        break e;
                                    case 3:
                                        g.flags = -4097 & g.flags | 64;
                                    case 0:
                                        if (null === (u = "function" === typeof (g = m.payload) ? g.call(p, f, u) : g) || void 0 === u) break e;
                                        f = o({}, f, u);
                                        break e;
                                    case 2:
                                        ua = !0
                                }
                            }
                            null !== i.callback && (e.flags |= 32, null === (u = a.effects) ? a.effects = [i] : u.push(i))
                        } else p = {
                            eventTime: p,
                            lane: u,
                            tag: i.tag,
                            payload: i.payload,
                            callback: i.callback,
                            next: null
                        }, null === d ? (s = d = p, c = f) : d = d.next = p, l |= u;
                        if (null === (i = i.next)) {
                            if (null === (u = a.shared.pending)) break;
                            i = u.next, u.next = null, a.lastBaseUpdate = u, a.shared.pending = null
                        }
                    }
                    null === d && (c = f), a.baseState = c, a.firstBaseUpdate = s, a.lastBaseUpdate = d, Ul |= l, e.lanes = l, e.memoizedState = f
                }
            }

            function ma(e, t, n) {
                if (e = t.effects, t.effects = null, null !== e)
                    for (t = 0; t < e.length; t++) {
                        var r = e[t],
                            o = r.callback;
                        if (null !== o) {
                            if (r.callback = null, r = n, "function" !== typeof o) throw Error(i(191, o));
                            o.call(r)
                        }
                    }
            }
            var ha = (new r.Component).refs;

            function va(e, t, n, r) {
                n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : o({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
            }
            var ba = {
                isMounted: function (e) {
                    return !!(e = e._reactInternals) && Qe(e) === e
                },
                enqueueSetState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = fu(),
                        o = pu(e),
                        a = da(r, o);
                    a.payload = t, void 0 !== n && null !== n && (a.callback = n), fa(e, a), gu(e, o, r)
                },
                enqueueReplaceState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = fu(),
                        o = pu(e),
                        a = da(r, o);
                    a.tag = 1, a.payload = t, void 0 !== n && null !== n && (a.callback = n), fa(e, a), gu(e, o, r)
                },
                enqueueForceUpdate: function (e, t) {
                    e = e._reactInternals;
                    var n = fu(),
                        r = pu(e),
                        o = da(n, r);
                    o.tag = 2, void 0 !== t && null !== t && (o.callback = t), fa(e, o), gu(e, r, n)
                }
            };

            function ya(e, t, n, r, o, a, i) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !t.prototype || !t.prototype.isPureReactComponent || (!fr(n, r) || !fr(o, a))
            }

            function wa(e, t, n) {
                var r = !1,
                    o = po,
                    a = t.contextType;
                return "object" === typeof a && null !== a ? a = la(a) : (o = bo(t) ? ho : go.current, a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? vo(e, o) : po), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = ba, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), t
            }

            function xa(e, t, n, r) {
                e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ba.enqueueReplaceState(t, t.state, null)
            }

            function Ca(e, t, n, r) {
                var o = e.stateNode;
                o.props = n, o.state = e.memoizedState, o.refs = ha, ca(e);
                var a = t.contextType;
                "object" === typeof a && null !== a ? o.context = la(a) : (a = bo(t) ? ho : go.current, o.context = vo(e, a)), ga(e, n, o, r), o.state = e.memoizedState, "function" === typeof (a = t.getDerivedStateFromProps) && (va(e, t, a, n), o.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof o.getSnapshotBeforeUpdate || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || (t = o.state, "function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && ba.enqueueReplaceState(o, o.state, null), ga(e, n, o, r), o.state = e.memoizedState), "function" === typeof o.componentDidMount && (e.flags |= 4)
            }
            var Sa = Array.isArray;

            function ka(e, t, n) {
                if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag) throw Error(i(309));
                            var r = n.stateNode
                        }
                        if (!r) throw Error(i(147, e));
                        var o = "" + e;
                        return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function (e) {
                            var t = r.refs;
                            t === ha && (t = r.refs = {}), null === e ? delete t[o] : t[o] = e
                        }, t._stringRef = o, t)
                    }
                    if ("string" !== typeof e) throw Error(i(284));
                    if (!n._owner) throw Error(i(290, e))
                }
                return e
            }

            function Ea(e, t) {
                if ("textarea" !== e.type) throw Error(i(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
            }

            function _a(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.lastEffect;
                        null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.flags = 8
                    }
                }

                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r;) t(n, r), r = r.sibling;
                    return null
                }

                function r(e, t) {
                    for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                    return e
                }

                function o(e, t) {
                    return (e = Ku(e, t)).index = 0, e.sibling = null, e
                }

                function a(t, n, r) {
                    return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags = 2, n) : r : (t.flags = 2, n) : n
                }

                function l(t) {
                    return e && null === t.alternate && (t.flags = 2), t
                }

                function u(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = Qu(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
                }

                function c(e, t, n, r) {
                    return null !== t && t.elementType === n.type ? ((r = o(t, n.props)).ref = ka(e, t, n), r.return = e, r) : ((r = $u(n.type, n.key, n.props, null, e.mode, r)).ref = ka(e, t, n), r.return = e, r)
                }

                function s(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Zu(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
                }

                function d(e, t, n, r, a) {
                    return null === t || 7 !== t.tag ? ((t = qu(n, e.mode, r, a)).return = e, t) : ((t = o(t, n)).return = e, t)
                }

                function f(e, t, n) {
                    if ("string" === typeof t || "number" === typeof t) return (t = Qu("" + t, e.mode, n)).return = e, t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case C:
                                return (n = $u(t.type, t.key, t.props, null, e.mode, n)).ref = ka(e, null, t), n.return = e, n;
                            case S:
                                return (t = Zu(t, e.mode, n)).return = e, t
                        }
                        if (Sa(t) || G(t)) return (t = qu(t, e.mode, n, null)).return = e, t;
                        Ea(e, t)
                    }
                    return null
                }

                function p(e, t, n, r) {
                    var o = null !== t ? t.key : null;
                    if ("string" === typeof n || "number" === typeof n) return null !== o ? null : u(e, t, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case C:
                                return n.key === o ? n.type === k ? d(e, t, n.props.children, r, o) : c(e, t, n, r) : null;
                            case S:
                                return n.key === o ? s(e, t, n, r) : null
                        }
                        if (Sa(n) || G(n)) return null !== o ? null : d(e, t, n, r, null);
                        Ea(e, n)
                    }
                    return null
                }

                function g(e, t, n, r, o) {
                    if ("string" === typeof r || "number" === typeof r) return u(t, e = e.get(n) || null, "" + r, o);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case C:
                                return e = e.get(null === r.key ? n : r.key) || null, r.type === k ? d(t, e, r.props.children, o, r.key) : c(t, e, r, o);
                            case S:
                                return s(t, e = e.get(null === r.key ? n : r.key) || null, r, o)
                        }
                        if (Sa(r) || G(r)) return d(t, e = e.get(n) || null, r, o, null);
                        Ea(t, r)
                    }
                    return null
                }

                function m(o, i, l, u) {
                    for (var c = null, s = null, d = i, m = i = 0, h = null; null !== d && m < l.length; m++) {
                        d.index > m ? (h = d, d = null) : h = d.sibling;
                        var v = p(o, d, l[m], u);
                        if (null === v) {
                            null === d && (d = h);
                            break
                        }
                        e && d && null === v.alternate && t(o, d), i = a(v, i, m), null === s ? c = v : s.sibling = v, s = v, d = h
                    }
                    if (m === l.length) return n(o, d), c;
                    if (null === d) {
                        for (; m < l.length; m++) null !== (d = f(o, l[m], u)) && (i = a(d, i, m), null === s ? c = d : s.sibling = d, s = d);
                        return c
                    }
                    for (d = r(o, d); m < l.length; m++) null !== (h = g(d, o, m, l[m], u)) && (e && null !== h.alternate && d.delete(null === h.key ? m : h.key), i = a(h, i, m), null === s ? c = h : s.sibling = h, s = h);
                    return e && d.forEach((function (e) {
                        return t(o, e)
                    })), c
                }

                function h(o, l, u, c) {
                    var s = G(u);
                    if ("function" !== typeof s) throw Error(i(150));
                    if (null == (u = s.call(u))) throw Error(i(151));
                    for (var d = s = null, m = l, h = l = 0, v = null, b = u.next(); null !== m && !b.done; h++, b = u.next()) {
                        m.index > h ? (v = m, m = null) : v = m.sibling;
                        var y = p(o, m, b.value, c);
                        if (null === y) {
                            null === m && (m = v);
                            break
                        }
                        e && m && null === y.alternate && t(o, m), l = a(y, l, h), null === d ? s = y : d.sibling = y, d = y, m = v
                    }
                    if (b.done) return n(o, m), s;
                    if (null === m) {
                        for (; !b.done; h++, b = u.next()) null !== (b = f(o, b.value, c)) && (l = a(b, l, h), null === d ? s = b : d.sibling = b, d = b);
                        return s
                    }
                    for (m = r(o, m); !b.done; h++, b = u.next()) null !== (b = g(m, o, h, b.value, c)) && (e && null !== b.alternate && m.delete(null === b.key ? h : b.key), l = a(b, l, h), null === d ? s = b : d.sibling = b, d = b);
                    return e && m.forEach((function (e) {
                        return t(o, e)
                    })), s
                }
                return function (e, r, a, u) {
                    var c = "object" === typeof a && null !== a && a.type === k && null === a.key;
                    c && (a = a.props.children);
                    var s = "object" === typeof a && null !== a;
                    if (s) switch (a.$$typeof) {
                        case C:
                            e: {
                                for (s = a.key, c = r; null !== c;) {
                                    if (c.key === s) {
                                        if (7 === c.tag) {
                                            if (a.type === k) {
                                                n(e, c.sibling), (r = o(c, a.props.children)).return = e, e = r;
                                                break e
                                            }
                                        } else if (c.elementType === a.type) {
                                            n(e, c.sibling), (r = o(c, a.props)).ref = ka(e, c, a), r.return = e, e = r;
                                            break e
                                        }
                                        n(e, c);
                                        break
                                    }
                                    t(e, c), c = c.sibling
                                }
                                a.type === k ? ((r = qu(a.props.children, e.mode, u, a.key)).return = e, e = r) : ((u = $u(a.type, a.key, a.props, null, e.mode, u)).ref = ka(e, r, a), u.return = e, e = u)
                            }
                            return l(e);
                        case S:
                            e: {
                                for (c = a.key; null !== r;) {
                                    if (r.key === c) {
                                        if (4 === r.tag && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
                                            n(e, r.sibling), (r = o(r, a.children || [])).return = e, e = r;
                                            break e
                                        }
                                        n(e, r);
                                        break
                                    }
                                    t(e, r), r = r.sibling
                                } (r = Zu(a, e.mode, u)).return = e,
                                    e = r
                            }
                            return l(e)
                    }
                    if ("string" === typeof a || "number" === typeof a) return a = "" + a, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = o(r, a)).return = e, e = r) : (n(e, r), (r = Qu(a, e.mode, u)).return = e, e = r), l(e);
                    if (Sa(a)) return m(e, r, a, u);
                    if (G(a)) return h(e, r, a, u);
                    if (s && Ea(e, a), "undefined" === typeof a && !c) switch (e.tag) {
                        case 1:
                        case 22:
                        case 0:
                        case 11:
                        case 15:
                            throw Error(i(152, $(e.type) || "Component"))
                    }
                    return n(e, r)
                }
            }
            var Na = _a(!0),
                Ia = _a(!1),
                Pa = {},
                Oa = co(Pa),
                Da = co(Pa),
                Ra = co(Pa);

            function Ta(e) {
                if (e === Pa) throw Error(i(174));
                return e
            }

            function Aa(e, t) {
                switch (fo(Ra, t), fo(Da, e), fo(Oa, Pa), e = t.nodeType) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : ge(null, "");
                        break;
                    default:
                        t = ge(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                so(Oa), fo(Oa, t)
            }

            function ja() {
                so(Oa), so(Da), so(Ra)
            }

            function La(e) {
                Ta(Ra.current);
                var t = Ta(Oa.current),
                    n = ge(t, e.type);
                t !== n && (fo(Da, e), fo(Oa, n))
            }

            function Ma(e) {
                Da.current === e && (so(Oa), so(Da))
            }
            var Ba = co(0);

            function Fa(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (64 & t.flags)) return t
                    } else if (null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return null
            }
            var za = null,
                Ua = null,
                Ga = !1;

            function Wa(e, t) {
                var n = Hu(5, null, null, 0);
                n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
            }

            function Ha(e, t) {
                switch (e.tag) {
                    case 5:
                        var n = e.type;
                        return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
                    case 6:
                        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
                    default:
                        return !1
                }
            }

            function Va(e) {
                if (Ga) {
                    var t = Ua;
                    if (t) {
                        var n = t;
                        if (!Ha(e, t)) {
                            if (!(t = qr(n.nextSibling)) || !Ha(e, t)) return e.flags = -1025 & e.flags | 2, Ga = !1, void (za = e);
                            Wa(za, n)
                        }
                        za = e, Ua = qr(t.firstChild)
                    } else e.flags = -1025 & e.flags | 2, Ga = !1, za = e
                }
            }

            function Ka(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                za = e
            }

            function $a(e) {
                if (e !== za) return !1;
                if (!Ga) return Ka(e), Ga = !0, !1;
                var t = e.type;
                if (5 !== e.tag || "head" !== t && "body" !== t && !Hr(t, e.memoizedProps))
                    for (t = Ua; t;) Wa(e, t), t = qr(t.nextSibling);
                if (Ka(e), 13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                    e: {
                        for (e = e.nextSibling, t = 0; e;) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        Ua = qr(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        Ua = null
                    }
                } else Ua = za ? qr(e.stateNode.nextSibling) : null;
                return !0
            }

            function qa() {
                Ua = za = null, Ga = !1
            }
            var Ya = [];

            function Qa() {
                for (var e = 0; e < Ya.length; e++) Ya[e]._workInProgressVersionPrimary = null;
                Ya.length = 0
            }
            var Za = x.ReactCurrentDispatcher,
                Xa = x.ReactCurrentBatchConfig,
                Ja = 0,
                ei = null,
                ti = null,
                ni = null,
                ri = !1,
                oi = !1;

            function ai() {
                throw Error(i(321))
            }

            function ii(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!sr(e[n], t[n])) return !1;
                return !0
            }

            function li(e, t, n, r, o, a) {
                if (Ja = a, ei = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Za.current = null === e || null === e.memoizedState ? Ti : Ai, e = n(r, o), oi) {
                    a = 0;
                    do {
                        if (oi = !1, !(25 > a)) throw Error(i(301));
                        a += 1, ni = ti = null, t.updateQueue = null, Za.current = ji, e = n(r, o)
                    } while (oi)
                }
                if (Za.current = Ri, t = null !== ti && null !== ti.next, Ja = 0, ni = ti = ei = null, ri = !1, t) throw Error(i(300));
                return e
            }

            function ui() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === ni ? ei.memoizedState = ni = e : ni = ni.next = e, ni
            }

            function ci() {
                if (null === ti) {
                    var e = ei.alternate;
                    e = null !== e ? e.memoizedState : null
                } else e = ti.next;
                var t = null === ni ? ei.memoizedState : ni.next;
                if (null !== t) ni = t, ti = e;
                else {
                    if (null === e) throw Error(i(310));
                    e = {
                        memoizedState: (ti = e).memoizedState,
                        baseState: ti.baseState,
                        baseQueue: ti.baseQueue,
                        queue: ti.queue,
                        next: null
                    }, null === ni ? ei.memoizedState = ni = e : ni = ni.next = e
                }
                return ni
            }

            function si(e, t) {
                return "function" === typeof t ? t(e) : t
            }

            function di(e) {
                var t = ci(),
                    n = t.queue;
                if (null === n) throw Error(i(311));
                n.lastRenderedReducer = e;
                var r = ti,
                    o = r.baseQueue,
                    a = n.pending;
                if (null !== a) {
                    if (null !== o) {
                        var l = o.next;
                        o.next = a.next, a.next = l
                    }
                    r.baseQueue = o = a, n.pending = null
                }
                if (null !== o) {
                    o = o.next, r = r.baseState;
                    var u = l = a = null,
                        c = o;
                    do {
                        var s = c.lane;
                        if ((Ja & s) === s) null !== u && (u = u.next = {
                            lane: 0,
                            action: c.action,
                            eagerReducer: c.eagerReducer,
                            eagerState: c.eagerState,
                            next: null
                        }), r = c.eagerReducer === e ? c.eagerState : e(r, c.action);
                        else {
                            var d = {
                                lane: s,
                                action: c.action,
                                eagerReducer: c.eagerReducer,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === u ? (l = u = d, a = r) : u = u.next = d, ei.lanes |= s, Ul |= s
                        }
                        c = c.next
                    } while (null !== c && c !== o);
                    null === u ? a = r : u.next = l, sr(r, t.memoizedState) || (Mi = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r
                }
                return [t.memoizedState, n.dispatch]
            }

            function fi(e) {
                var t = ci(),
                    n = t.queue;
                if (null === n) throw Error(i(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch,
                    o = n.pending,
                    a = t.memoizedState;
                if (null !== o) {
                    n.pending = null;
                    var l = o = o.next;
                    do {
                        a = e(a, l.action), l = l.next
                    } while (l !== o);
                    sr(a, t.memoizedState) || (Mi = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
                }
                return [a, r]
            }

            function pi(e, t, n) {
                var r = t._getVersion;
                r = r(t._source);
                var o = t._workInProgressVersionPrimary;
                if (null !== o ? e = o === r : (e = e.mutableReadLanes, (e = (Ja & e) === e) && (t._workInProgressVersionPrimary = r, Ya.push(t))), e) return n(t._source);
                throw Ya.push(t), Error(i(350))
            }

            function gi(e, t, n, r) {
                var o = Tl;
                if (null === o) throw Error(i(349));
                var a = t._getVersion,
                    l = a(t._source),
                    u = Za.current,
                    c = u.useState((function () {
                        return pi(o, t, n)
                    })),
                    s = c[1],
                    d = c[0];
                c = ni;
                var f = e.memoizedState,
                    p = f.refs,
                    g = p.getSnapshot,
                    m = f.source;
                f = f.subscribe;
                var h = ei;
                return e.memoizedState = {
                    refs: p,
                    source: t,
                    subscribe: r
                }, u.useEffect((function () {
                    p.getSnapshot = n, p.setSnapshot = s;
                    var e = a(t._source);
                    if (!sr(l, e)) {
                        e = n(t._source), sr(d, e) || (s(e), e = pu(h), o.mutableReadLanes |= e & o.pendingLanes), e = o.mutableReadLanes, o.entangledLanes |= e;
                        for (var r = o.entanglements, i = e; 0 < i;) {
                            var u = 31 - Ht(i),
                                c = 1 << u;
                            r[u] |= e, i &= ~c
                        }
                    }
                }), [n, t, r]), u.useEffect((function () {
                    return r(t._source, (function () {
                        var e = p.getSnapshot,
                            n = p.setSnapshot;
                        try {
                            n(e(t._source));
                            var r = pu(h);
                            o.mutableReadLanes |= r & o.pendingLanes
                        } catch (a) {
                            n((function () {
                                throw a
                            }))
                        }
                    }))
                }), [t, r]), sr(g, n) && sr(m, t) && sr(f, r) || ((e = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: si,
                    lastRenderedState: d
                }).dispatch = s = Di.bind(null, ei, e), c.queue = e, c.baseQueue = null, d = pi(o, t, n), c.memoizedState = c.baseState = d), d
            }

            function mi(e, t, n) {
                return gi(ci(), e, t, n)
            }

            function hi(e) {
                var t = ui();
                return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: si,
                    lastRenderedState: e
                }).dispatch = Di.bind(null, ei, e), [t.memoizedState, e]
            }

            function vi(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                }, null === (t = ei.updateQueue) ? (t = {
                    lastEffect: null
                }, ei.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
            }

            function bi(e) {
                return e = {
                    current: e
                }, ui().memoizedState = e
            }

            function yi() {
                return ci().memoizedState
            }

            function wi(e, t, n, r) {
                var o = ui();
                ei.flags |= e, o.memoizedState = vi(1 | t, n, void 0, void 0 === r ? null : r)
            }

            function xi(e, t, n, r) {
                var o = ci();
                r = void 0 === r ? null : r;
                var a = void 0;
                if (null !== ti) {
                    var i = ti.memoizedState;
                    if (a = i.destroy, null !== r && ii(r, i.deps)) return void vi(t, n, a, r)
                }
                ei.flags |= e, o.memoizedState = vi(1 | t, n, a, r)
            }

            function Ci(e, t) {
                return wi(516, 4, e, t)
            }

            function Si(e, t) {
                return xi(516, 4, e, t)
            }

            function ki(e, t) {
                return xi(4, 2, e, t)
            }

            function Ei(e, t) {
                return "function" === typeof t ? (e = e(), t(e), function () {
                    t(null)
                }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function () {
                    t.current = null
                }) : void 0
            }

            function _i(e, t, n) {
                return n = null !== n && void 0 !== n ? n.concat([e]) : null, xi(4, 2, Ei.bind(null, t, e), n)
            }

            function Ni() { }

            function Ii(e, t) {
                var n = ci();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && ii(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
            }

            function Pi(e, t) {
                var n = ci();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && ii(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
            }

            function Oi(e, t) {
                var n = Vo();
                $o(98 > n ? 98 : n, (function () {
                    e(!0)
                })), $o(97 < n ? 97 : n, (function () {
                    var n = Xa.transition;
                    Xa.transition = 1;
                    try {
                        e(!1), t()
                    } finally {
                        Xa.transition = n
                    }
                }))
            }

            function Di(e, t, n) {
                var r = fu(),
                    o = pu(e),
                    a = {
                        lane: o,
                        action: n,
                        eagerReducer: null,
                        eagerState: null,
                        next: null
                    },
                    i = t.pending;
                if (null === i ? a.next = a : (a.next = i.next, i.next = a), t.pending = a, i = e.alternate, e === ei || null !== i && i === ei) oi = ri = !0;
                else {
                    if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                        var l = t.lastRenderedState,
                            u = i(l, n);
                        if (a.eagerReducer = i, a.eagerState = u, sr(u, l)) return
                    } catch (c) { }
                    gu(e, o, r)
                }
            }
            var Ri = {
                readContext: la,
                useCallback: ai,
                useContext: ai,
                useEffect: ai,
                useImperativeHandle: ai,
                useLayoutEffect: ai,
                useMemo: ai,
                useReducer: ai,
                useRef: ai,
                useState: ai,
                useDebugValue: ai,
                useDeferredValue: ai,
                useTransition: ai,
                useMutableSource: ai,
                useOpaqueIdentifier: ai,
                unstable_isNewReconciler: !1
            },
                Ti = {
                    readContext: la,
                    useCallback: function (e, t) {
                        return ui().memoizedState = [e, void 0 === t ? null : t], e
                    },
                    useContext: la,
                    useEffect: Ci,
                    useImperativeHandle: function (e, t, n) {
                        return n = null !== n && void 0 !== n ? n.concat([e]) : null, wi(4, 2, Ei.bind(null, t, e), n)
                    },
                    useLayoutEffect: function (e, t) {
                        return wi(4, 2, e, t)
                    },
                    useMemo: function (e, t) {
                        var n = ui();
                        return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                    },
                    useReducer: function (e, t, n) {
                        var r = ui();
                        return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                            pending: null,
                            dispatch: null,
                            lastRenderedReducer: e,
                            lastRenderedState: t
                        }).dispatch = Di.bind(null, ei, e), [r.memoizedState, e]
                    },
                    useRef: bi,
                    useState: hi,
                    useDebugValue: Ni,
                    useDeferredValue: function (e) {
                        var t = hi(e),
                            n = t[0],
                            r = t[1];
                        return Ci((function () {
                            var t = Xa.transition;
                            Xa.transition = 1;
                            try {
                                r(e)
                            } finally {
                                Xa.transition = t
                            }
                        }), [e]), n
                    },
                    useTransition: function () {
                        var e = hi(!1),
                            t = e[0];
                        return bi(e = Oi.bind(null, e[1])), [e, t]
                    },
                    useMutableSource: function (e, t, n) {
                        var r = ui();
                        return r.memoizedState = {
                            refs: {
                                getSnapshot: t,
                                setSnapshot: null
                            },
                            source: e,
                            subscribe: n
                        }, gi(r, e, t, n)
                    },
                    useOpaqueIdentifier: function () {
                        if (Ga) {
                            var e = !1,
                                t = function (e) {
                                    return {
                                        $$typeof: j,
                                        toString: e,
                                        valueOf: e
                                    }
                                }((function () {
                                    throw e || (e = !0, n("r:" + (Qr++).toString(36))), Error(i(355))
                                })),
                                n = hi(t)[1];
                            return 0 === (2 & ei.mode) && (ei.flags |= 516, vi(5, (function () {
                                n("r:" + (Qr++).toString(36))
                            }), void 0, null)), t
                        }
                        return hi(t = "r:" + (Qr++).toString(36)), t
                    },
                    unstable_isNewReconciler: !1
                },
                Ai = {
                    readContext: la,
                    useCallback: Ii,
                    useContext: la,
                    useEffect: Si,
                    useImperativeHandle: _i,
                    useLayoutEffect: ki,
                    useMemo: Pi,
                    useReducer: di,
                    useRef: yi,
                    useState: function () {
                        return di(si)
                    },
                    useDebugValue: Ni,
                    useDeferredValue: function (e) {
                        var t = di(si),
                            n = t[0],
                            r = t[1];
                        return Si((function () {
                            var t = Xa.transition;
                            Xa.transition = 1;
                            try {
                                r(e)
                            } finally {
                                Xa.transition = t
                            }
                        }), [e]), n
                    },
                    useTransition: function () {
                        var e = di(si)[0];
                        return [yi().current, e]
                    },
                    useMutableSource: mi,
                    useOpaqueIdentifier: function () {
                        return di(si)[0]
                    },
                    unstable_isNewReconciler: !1
                },
                ji = {
                    readContext: la,
                    useCallback: Ii,
                    useContext: la,
                    useEffect: Si,
                    useImperativeHandle: _i,
                    useLayoutEffect: ki,
                    useMemo: Pi,
                    useReducer: fi,
                    useRef: yi,
                    useState: function () {
                        return fi(si)
                    },
                    useDebugValue: Ni,
                    useDeferredValue: function (e) {
                        var t = fi(si),
                            n = t[0],
                            r = t[1];
                        return Si((function () {
                            var t = Xa.transition;
                            Xa.transition = 1;
                            try {
                                r(e)
                            } finally {
                                Xa.transition = t
                            }
                        }), [e]), n
                    },
                    useTransition: function () {
                        var e = fi(si)[0];
                        return [yi().current, e]
                    },
                    useMutableSource: mi,
                    useOpaqueIdentifier: function () {
                        return fi(si)[0]
                    },
                    unstable_isNewReconciler: !1
                },
                Li = x.ReactCurrentOwner,
                Mi = !1;

            function Bi(e, t, n, r) {
                t.child = null === e ? Ia(t, null, n, r) : Na(t, e.child, n, r)
            }

            function Fi(e, t, n, r, o) {
                n = n.render;
                var a = t.ref;
                return ia(t, o), r = li(e, t, n, r, a, o), null === e || Mi ? (t.flags |= 1, Bi(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, al(e, t, o))
            }

            function zi(e, t, n, r, o, a) {
                if (null === e) {
                    var i = n.type;
                    return "function" !== typeof i || Vu(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = $u(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, Ui(e, t, i, r, o, a))
                }
                return i = e.child, 0 === (o & a) && (o = i.memoizedProps, (n = null !== (n = n.compare) ? n : fr)(o, r) && e.ref === t.ref) ? al(e, t, a) : (t.flags |= 1, (e = Ku(i, r)).ref = t.ref, e.return = t, t.child = e)
            }

            function Ui(e, t, n, r, o, a) {
                if (null !== e && fr(e.memoizedProps, r) && e.ref === t.ref) {
                    if (Mi = !1, 0 === (a & o)) return t.lanes = e.lanes, al(e, t, a);
                    0 !== (16384 & e.flags) && (Mi = !0)
                }
                return Hi(e, t, n, r, a)
            }

            function Gi(e, t, n) {
                var r = t.pendingProps,
                    o = r.children,
                    a = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
                    if (0 === (4 & t.mode)) t.memoizedState = {
                        baseLanes: 0
                    }, Cu(t, n);
                    else {
                        if (0 === (1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                            baseLanes: e
                        }, Cu(t, e), null;
                        t.memoizedState = {
                            baseLanes: 0
                        }, Cu(t, null !== a ? a.baseLanes : n)
                    }
                else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Cu(t, r);
                return Bi(e, t, o, n), t.child
            }

            function Wi(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 128)
            }

            function Hi(e, t, n, r, o) {
                var a = bo(n) ? ho : go.current;
                return a = vo(t, a), ia(t, o), n = li(e, t, n, r, a, o), null === e || Mi ? (t.flags |= 1, Bi(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, al(e, t, o))
            }

            function Vi(e, t, n, r, o) {
                if (bo(n)) {
                    var a = !0;
                    Co(t)
                } else a = !1;
                if (ia(t, o), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), wa(t, n, r), Ca(t, n, r, o), r = !0;
                else if (null === e) {
                    var i = t.stateNode,
                        l = t.memoizedProps;
                    i.props = l;
                    var u = i.context,
                        c = n.contextType;
                    "object" === typeof c && null !== c ? c = la(c) : c = vo(t, c = bo(n) ? ho : go.current);
                    var s = n.getDerivedStateFromProps,
                        d = "function" === typeof s || "function" === typeof i.getSnapshotBeforeUpdate;
                    d || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== r || u !== c) && xa(t, i, r, c), ua = !1;
                    var f = t.memoizedState;
                    i.state = f, ga(t, r, i, o), u = t.memoizedState, l !== r || f !== u || mo.current || ua ? ("function" === typeof s && (va(t, n, s, r), u = t.memoizedState), (l = ua || ya(t, n, l, r, f, u, c)) ? (d || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4)) : ("function" === typeof i.componentDidMount && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = c, r = l) : ("function" === typeof i.componentDidMount && (t.flags |= 4), r = !1)
                } else {
                    i = t.stateNode, sa(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : Xo(t.type, l), i.props = c, d = t.pendingProps, f = i.context, "object" === typeof (u = n.contextType) && null !== u ? u = la(u) : u = vo(t, u = bo(n) ? ho : go.current);
                    var p = n.getDerivedStateFromProps;
                    (s = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== d || f !== u) && xa(t, i, r, u), ua = !1, f = t.memoizedState, i.state = f, ga(t, r, i, o);
                    var g = t.memoizedState;
                    l !== d || f !== g || mo.current || ua ? ("function" === typeof p && (va(t, n, p, r), g = t.memoizedState), (c = ua || ya(t, n, c, r, f, g, u)) ? (s || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, g, u), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, g, u)), "function" === typeof i.componentDidUpdate && (t.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 256)) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = u, r = c) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 256), r = !1)
                }
                return Ki(e, t, n, r, a, o)
            }

            function Ki(e, t, n, r, o, a) {
                Wi(e, t);
                var i = 0 !== (64 & t.flags);
                if (!r && !i) return o && So(t, n, !1), al(e, t, a);
                r = t.stateNode, Li.current = t;
                var l = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1, null !== e && i ? (t.child = Na(t, e.child, null, a), t.child = Na(t, null, l, a)) : Bi(e, t, l, a), t.memoizedState = r.state, o && So(t, n, !0), t.child
            }

            function $i(e) {
                var t = e.stateNode;
                t.pendingContext ? wo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && wo(0, t.context, !1), Aa(e, t.containerInfo)
            }
            var qi, Yi, Qi, Zi = {
                dehydrated: null,
                retryLane: 0
            };

            function Xi(e, t, n) {
                var r, o = t.pendingProps,
                    a = Ba.current,
                    i = !1;
                return (r = 0 !== (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)), r ? (i = !0, t.flags &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (a |= 1), fo(Ba, 1 & a), null === e ? (void 0 !== o.fallback && Va(t), e = o.children, a = o.fallback, i ? (e = Ji(t, e, a, n), t.child.memoizedState = {
                    baseLanes: n
                }, t.memoizedState = Zi, e) : "number" === typeof o.unstable_expectedLoadTime ? (e = Ji(t, e, a, n), t.child.memoizedState = {
                    baseLanes: n
                }, t.memoizedState = Zi, t.lanes = 33554432, e) : ((n = Yu({
                    mode: "visible",
                    children: e
                }, t.mode, n, null)).return = t, t.child = n)) : (e.memoizedState, i ? (o = tl(e, t, o.children, o.fallback, n), i = t.child, a = e.child.memoizedState, i.memoizedState = null === a ? {
                    baseLanes: n
                } : {
                    baseLanes: a.baseLanes | n
                }, i.childLanes = e.childLanes & ~n, t.memoizedState = Zi, o) : (n = el(e, t, o.children, n), t.memoizedState = null, n))
            }

            function Ji(e, t, n, r) {
                var o = e.mode,
                    a = e.child;
                return t = {
                    mode: "hidden",
                    children: t
                }, 0 === (2 & o) && null !== a ? (a.childLanes = 0, a.pendingProps = t) : a = Yu(t, o, 0, null), n = qu(n, o, r, null), a.return = e, n.return = e, a.sibling = n, e.child = a, n
            }

            function el(e, t, n, r) {
                var o = e.child;
                return e = o.sibling, n = Ku(o, {
                    mode: "visible",
                    children: n
                }), 0 === (2 & t.mode) && (n.lanes = r), n.return = t, n.sibling = null, null !== e && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n
            }

            function tl(e, t, n, r, o) {
                var a = t.mode,
                    i = e.child;
                e = i.sibling;
                var l = {
                    mode: "hidden",
                    children: n
                };
                return 0 === (2 & a) && t.child !== i ? ((n = t.child).childLanes = 0, n.pendingProps = l, null !== (i = n.lastEffect) ? (t.firstEffect = n.firstEffect, t.lastEffect = i, i.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = Ku(i, l), null !== e ? r = Ku(e, r) : (r = qu(r, a, o, null)).flags |= 2, r.return = t, n.return = t, n.sibling = r, t.child = n, r
            }

            function nl(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                null !== n && (n.lanes |= t), aa(e.return, t)
            }

            function rl(e, t, n, r, o, a) {
                var i = e.memoizedState;
                null === i ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: o,
                    lastEffect: a
                } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o, i.lastEffect = a)
            }

            function ol(e, t, n) {
                var r = t.pendingProps,
                    o = r.revealOrder,
                    a = r.tail;
                if (Bi(e, t, r.children, n), 0 !== (2 & (r = Ba.current))) r = 1 & r | 2, t.flags |= 64;
                else {
                    if (null !== e && 0 !== (64 & e.flags)) e: for (e = t.child; null !== e;) {
                        if (13 === e.tag) null !== e.memoizedState && nl(e, n);
                        else if (19 === e.tag) nl(e, n);
                        else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    r &= 1
                }
                if (fo(Ba, r), 0 === (2 & t.mode)) t.memoizedState = null;
                else switch (o) {
                    case "forwards":
                        for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === Fa(e) && (o = n), n = n.sibling;
                        null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), rl(t, !1, o, n, a, t.lastEffect);
                        break;
                    case "backwards":
                        for (n = null, o = t.child, t.child = null; null !== o;) {
                            if (null !== (e = o.alternate) && null === Fa(e)) {
                                t.child = o;
                                break
                            }
                            e = o.sibling, o.sibling = n, n = o, o = e
                        }
                        rl(t, !0, n, null, a, t.lastEffect);
                        break;
                    case "together":
                        rl(t, !1, null, null, void 0, t.lastEffect);
                        break;
                    default:
                        t.memoizedState = null
                }
                return t.child
            }

            function al(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies), Ul |= t.lanes, 0 !== (n & t.childLanes)) {
                    if (null !== e && t.child !== e.child) throw Error(i(153));
                    if (null !== t.child) {
                        for (n = Ku(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ku(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }
                return null
            }

            function il(e, t) {
                if (!Ga) switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
            }

            function ll(e, t, n) {
                var r = t.pendingProps;
                switch (t.tag) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                        return null;
                    case 1:
                    case 17:
                        return bo(t.type) && yo(), null;
                    case 3:
                        return ja(), so(mo), so(go), Qa(), (r = t.stateNode).pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || ($a(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), null;
                    case 5:
                        Ma(t);
                        var a = Ta(Ra.current);
                        if (n = t.type, null !== e && null != t.stateNode) Yi(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
                        else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(i(166));
                                return null
                            }
                            if (e = Ta(Oa.current), $a(t)) {
                                r = t.stateNode, n = t.type;
                                var l = t.memoizedProps;
                                switch (r[Xr] = t, r[Jr] = l, n) {
                                    case "dialog":
                                        Or("cancel", r), Or("close", r);
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        Or("load", r);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (e = 0; e < _r.length; e++) Or(_r[e], r);
                                        break;
                                    case "source":
                                        Or("error", r);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        Or("error", r), Or("load", r);
                                        break;
                                    case "details":
                                        Or("toggle", r);
                                        break;
                                    case "input":
                                        ee(r, l), Or("invalid", r);
                                        break;
                                    case "select":
                                        r._wrapperState = {
                                            wasMultiple: !!l.multiple
                                        }, Or("invalid", r);
                                        break;
                                    case "textarea":
                                        ue(r, l), Or("invalid", r)
                                }
                                for (var c in ke(n, l), e = null, l) l.hasOwnProperty(c) && (a = l[c], "children" === c ? "string" === typeof a ? r.textContent !== a && (e = ["children", a]) : "number" === typeof a && r.textContent !== "" + a && (e = ["children", "" + a]) : u.hasOwnProperty(c) && null != a && "onScroll" === c && Or("scroll", r));
                                switch (n) {
                                    case "input":
                                        Q(r), re(r, l, !0);
                                        break;
                                    case "textarea":
                                        Q(r), se(r);
                                        break;
                                    case "select":
                                    case "option":
                                        break;
                                    default:
                                        "function" === typeof l.onClick && (r.onclick = zr)
                                }
                                r = e, t.updateQueue = r, null !== r && (t.flags |= 4)
                            } else {
                                switch (c = 9 === a.nodeType ? a : a.ownerDocument, e === de && (e = pe(n)), e === de ? "script" === n ? ((e = c.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = c.createElement(n, {
                                    is: r.is
                                }) : (e = c.createElement(n), "select" === n && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[Xr] = t, e[Jr] = r, qi(e, t), t.stateNode = e, c = Ee(n, r), n) {
                                    case "dialog":
                                        Or("cancel", e), Or("close", e), a = r;
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        Or("load", e), a = r;
                                        break;
                                    case "video":
                                    case "audio":
                                        for (a = 0; a < _r.length; a++) Or(_r[a], e);
                                        a = r;
                                        break;
                                    case "source":
                                        Or("error", e), a = r;
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        Or("error", e), Or("load", e), a = r;
                                        break;
                                    case "details":
                                        Or("toggle", e), a = r;
                                        break;
                                    case "input":
                                        ee(e, r), a = J(e, r), Or("invalid", e);
                                        break;
                                    case "option":
                                        a = ae(e, r);
                                        break;
                                    case "select":
                                        e._wrapperState = {
                                            wasMultiple: !!r.multiple
                                        }, a = o({}, r, {
                                            value: void 0
                                        }), Or("invalid", e);
                                        break;
                                    case "textarea":
                                        ue(e, r), a = le(e, r), Or("invalid", e);
                                        break;
                                    default:
                                        a = r
                                }
                                ke(n, a);
                                var s = a;
                                for (l in s)
                                    if (s.hasOwnProperty(l)) {
                                        var d = s[l];
                                        "style" === l ? Ce(e, d) : "dangerouslySetInnerHTML" === l ? null != (d = d ? d.__html : void 0) && ve(e, d) : "children" === l ? "string" === typeof d ? ("textarea" !== n || "" !== d) && be(e, d) : "number" === typeof d && be(e, "" + d) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (u.hasOwnProperty(l) ? null != d && "onScroll" === l && Or("scroll", e) : null != d && w(e, l, d, c))
                                    }
                                switch (n) {
                                    case "input":
                                        Q(e), re(e, r, !1);
                                        break;
                                    case "textarea":
                                        Q(e), se(e);
                                        break;
                                    case "option":
                                        null != r.value && e.setAttribute("value", "" + q(r.value));
                                        break;
                                    case "select":
                                        e.multiple = !!r.multiple, null != (l = r.value) ? ie(e, !!r.multiple, l, !1) : null != r.defaultValue && ie(e, !!r.multiple, r.defaultValue, !0);
                                        break;
                                    default:
                                        "function" === typeof a.onClick && (e.onclick = zr)
                                }
                                Wr(n, r) && (t.flags |= 4)
                            }
                            null !== t.ref && (t.flags |= 128)
                        }
                        return null;
                    case 6:
                        if (e && null != t.stateNode) Qi(0, t, e.memoizedProps, r);
                        else {
                            if ("string" !== typeof r && null === t.stateNode) throw Error(i(166));
                            n = Ta(Ra.current), Ta(Oa.current), $a(t) ? (r = t.stateNode, n = t.memoizedProps, r[Xr] = t, r.nodeValue !== n && (t.flags |= 4)) : ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Xr] = t, t.stateNode = r)
                        }
                        return null;
                    case 13:
                        return so(Ba), r = t.memoizedState, 0 !== (64 & t.flags) ? (t.lanes = n, t) : (r = null !== r, n = !1, null === e ? void 0 !== t.memoizedProps.fallback && $a(t) : n = null !== e.memoizedState, r && !n && 0 !== (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & Ba.current) ? 0 === Bl && (Bl = 3) : (0 !== Bl && 3 !== Bl || (Bl = 4), null === Tl || 0 === (134217727 & Ul) && 0 === (134217727 & Gl) || bu(Tl, jl))), (r || n) && (t.flags |= 4), null);
                    case 4:
                        return ja(), null === e && Rr(t.stateNode.containerInfo), null;
                    case 10:
                        return oa(t), null;
                    case 19:
                        if (so(Ba), null === (r = t.memoizedState)) return null;
                        if (l = 0 !== (64 & t.flags), null === (c = r.rendering))
                            if (l) il(r, !1);
                            else {
                                if (0 !== Bl || null !== e && 0 !== (64 & e.flags))
                                    for (e = t.child; null !== e;) {
                                        if (null !== (c = Fa(e))) {
                                            for (t.flags |= 64, il(r, !1), null !== (l = c.updateQueue) && (t.updateQueue = l, t.flags |= 4), null === r.lastEffect && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; null !== n;) e = r, (l = n).flags &= 2, l.nextEffect = null, l.firstEffect = null, l.lastEffect = null, null === (c = l.alternate) ? (l.childLanes = 0, l.lanes = e, l.child = null, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = c.childLanes, l.lanes = c.lanes, l.child = c.child, l.memoizedProps = c.memoizedProps, l.memoizedState = c.memoizedState, l.updateQueue = c.updateQueue, l.type = c.type, e = c.dependencies, l.dependencies = null === e ? null : {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext
                                            }), n = n.sibling;
                                            return fo(Ba, 1 & Ba.current | 2), t.child
                                        }
                                        e = e.sibling
                                    }
                                null !== r.tail && Ho() > Kl && (t.flags |= 64, l = !0, il(r, !1), t.lanes = 33554432)
                            }
                        else {
                            if (!l)
                                if (null !== (e = Fa(c))) {
                                    if (t.flags |= 64, l = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), il(r, !0), null === r.tail && "hidden" === r.tailMode && !c.alternate && !Ga) return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null
                                } else 2 * Ho() - r.renderingStartTime > Kl && 1073741824 !== n && (t.flags |= 64, l = !0, il(r, !1), t.lanes = 33554432);
                            r.isBackwards ? (c.sibling = t.child, t.child = c) : (null !== (n = r.last) ? n.sibling = c : t.child = c, r.last = c)
                        }
                        return null !== r.tail ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = Ho(), n.sibling = null, t = Ba.current, fo(Ba, l ? 1 & t | 2 : 1 & t), n) : null;
                    case 23:
                    case 24:
                        return Su(), null !== e && null !== e.memoizedState !== (null !== t.memoizedState) && "unstable-defer-without-hiding" !== r.mode && (t.flags |= 4), null
                }
                throw Error(i(156, t.tag))
            }

            function ul(e) {
                switch (e.tag) {
                    case 1:
                        bo(e.type) && yo();
                        var t = e.flags;
                        return 4096 & t ? (e.flags = -4097 & t | 64, e) : null;
                    case 3:
                        if (ja(), so(mo), so(go), Qa(), 0 !== (64 & (t = e.flags))) throw Error(i(285));
                        return e.flags = -4097 & t | 64, e;
                    case 5:
                        return Ma(e), null;
                    case 13:
                        return so(Ba), 4096 & (t = e.flags) ? (e.flags = -4097 & t | 64, e) : null;
                    case 19:
                        return so(Ba), null;
                    case 4:
                        return ja(), null;
                    case 10:
                        return oa(e), null;
                    case 23:
                    case 24:
                        return Su(), null;
                    default:
                        return null
                }
            }

            function cl(e, t) {
                try {
                    var n = "",
                        r = t;
                    do {
                        n += K(r), r = r.return
                    } while (r);
                    var o = n
                } catch (a) {
                    o = "\nError generating stack: " + a.message + "\n" + a.stack
                }
                return {
                    value: e,
                    source: t,
                    stack: o
                }
            }

            function sl(e, t) {
                try {
                    console.error(t.value)
                } catch (n) {
                    setTimeout((function () {
                        throw n
                    }))
                }
            }
            qi = function (e, t) {
                for (var n = t.child; null !== n;) {
                    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === t) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }, Yi = function (e, t, n, r) {
                var a = e.memoizedProps;
                if (a !== r) {
                    e = t.stateNode, Ta(Oa.current);
                    var i, l = null;
                    switch (n) {
                        case "input":
                            a = J(e, a), r = J(e, r), l = [];
                            break;
                        case "option":
                            a = ae(e, a), r = ae(e, r), l = [];
                            break;
                        case "select":
                            a = o({}, a, {
                                value: void 0
                            }), r = o({}, r, {
                                value: void 0
                            }), l = [];
                            break;
                        case "textarea":
                            a = le(e, a), r = le(e, r), l = [];
                            break;
                        default:
                            "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = zr)
                    }
                    for (d in ke(n, r), n = null, a)
                        if (!r.hasOwnProperty(d) && a.hasOwnProperty(d) && null != a[d])
                            if ("style" === d) {
                                var c = a[d];
                                for (i in c) c.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                            } else "dangerouslySetInnerHTML" !== d && "children" !== d && "suppressContentEditableWarning" !== d && "suppressHydrationWarning" !== d && "autoFocus" !== d && (u.hasOwnProperty(d) ? l || (l = []) : (l = l || []).push(d, null));
                    for (d in r) {
                        var s = r[d];
                        if (c = null != a ? a[d] : void 0, r.hasOwnProperty(d) && s !== c && (null != s || null != c))
                            if ("style" === d)
                                if (c) {
                                    for (i in c) !c.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                                    for (i in s) s.hasOwnProperty(i) && c[i] !== s[i] && (n || (n = {}), n[i] = s[i])
                                } else n || (l || (l = []), l.push(d, n)), n = s;
                            else "dangerouslySetInnerHTML" === d ? (s = s ? s.__html : void 0, c = c ? c.__html : void 0, null != s && c !== s && (l = l || []).push(d, s)) : "children" === d ? "string" !== typeof s && "number" !== typeof s || (l = l || []).push(d, "" + s) : "suppressContentEditableWarning" !== d && "suppressHydrationWarning" !== d && (u.hasOwnProperty(d) ? (null != s && "onScroll" === d && Or("scroll", e), l || c === s || (l = [])) : "object" === typeof s && null !== s && s.$$typeof === j ? s.toString() : (l = l || []).push(d, s))
                    }
                    n && (l = l || []).push("style", n);
                    var d = l;
                    (t.updateQueue = d) && (t.flags |= 4)
                }
            }, Qi = function (e, t, n, r) {
                n !== r && (t.flags |= 4)
            };
            var dl = "function" === typeof WeakMap ? WeakMap : Map;

            function fl(e, t, n) {
                (n = da(-1, n)).tag = 3, n.payload = {
                    element: null
                };
                var r = t.value;
                return n.callback = function () {
                    Ql || (Ql = !0, Zl = r), sl(0, t)
                }, n
            }

            function pl(e, t, n) {
                (n = da(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" === typeof r) {
                    var o = t.value;
                    n.payload = function () {
                        return sl(0, t), r(o)
                    }
                }
                var a = e.stateNode;
                return null !== a && "function" === typeof a.componentDidCatch && (n.callback = function () {
                    "function" !== typeof r && (null === Xl ? Xl = new Set([this]) : Xl.add(this), sl(0, t));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: null !== e ? e : ""
                    })
                }), n
            }
            var gl = "function" === typeof WeakSet ? WeakSet : Set;

            function ml(e) {
                var t = e.ref;
                if (null !== t)
                    if ("function" === typeof t) try {
                        t(null)
                    } catch (n) {
                        zu(e, n)
                    } else t.current = null
            }

            function hl(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        return;
                    case 1:
                        if (256 & t.flags && null !== e) {
                            var n = e.memoizedProps,
                                r = e.memoizedState;
                            t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Xo(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
                        }
                        return;
                    case 3:
                        return void (256 & t.flags && $r(t.stateNode.containerInfo))
                }
                throw Error(i(163))
            }

            function vl(e, t, n) {
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                            e = t = t.next;
                            do {
                                if (3 === (3 & e.tag)) {
                                    var r = e.create;
                                    e.destroy = r()
                                }
                                e = e.next
                            } while (e !== t)
                        }
                        if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                            e = t = t.next;
                            do {
                                var o = e;
                                r = o.next, 0 !== (4 & (o = o.tag)) && 0 !== (1 & o) && (Mu(n, e), Lu(n, e)), e = r
                            } while (e !== t)
                        }
                        return;
                    case 1:
                        return e = n.stateNode, 4 & n.flags && (null === t ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Xo(n.type, t.memoizedProps), e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), void (null !== (t = n.updateQueue) && ma(n, t, e));
                    case 3:
                        if (null !== (t = n.updateQueue)) {
                            if (e = null, null !== n.child) switch (n.child.tag) {
                                case 5:
                                case 1:
                                    e = n.child.stateNode
                            }
                            ma(n, t, e)
                        }
                        return;
                    case 5:
                        return e = n.stateNode, void (null === t && 4 & n.flags && Wr(n.type, n.memoizedProps) && e.focus());
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 20:
                    case 21:
                    case 23:
                    case 24:
                        return;
                    case 13:
                        return void (null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && Ct(n)))))
                }
                throw Error(i(163))
            }

            function bl(e, t) {
                for (var n = e; ;) {
                    if (5 === n.tag) {
                        var r = n.stateNode;
                        if (t) "function" === typeof (r = r.style).setProperty ? r.setProperty("display", "none", "important") : r.display = "none";
                        else {
                            r = n.stateNode;
                            var o = n.memoizedProps.style;
                            o = void 0 !== o && null !== o && o.hasOwnProperty("display") ? o.display : null, r.style.display = xe("display", o)
                        }
                    } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                    else if ((23 !== n.tag && 24 !== n.tag || null === n.memoizedState || n === e) && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === e) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === e) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }

            function yl(e, t) {
                if (Eo && "function" === typeof Eo.onCommitFiberUnmount) try {
                    Eo.onCommitFiberUnmount(ko, t)
                } catch (a) { }
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                            var n = e = e.next;
                            do {
                                var r = n,
                                    o = r.destroy;
                                if (r = r.tag, void 0 !== o)
                                    if (0 !== (4 & r)) Mu(t, n);
                                    else {
                                        r = t;
                                        try {
                                            o()
                                        } catch (a) {
                                            zu(r, a)
                                        }
                                    }
                                n = n.next
                            } while (n !== e)
                        }
                        break;
                    case 1:
                        if (ml(t), "function" === typeof (e = t.stateNode).componentWillUnmount) try {
                            e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                        } catch (a) {
                            zu(t, a)
                        }
                        break;
                    case 5:
                        ml(t);
                        break;
                    case 4:
                        El(e, t)
                }
            }

            function wl(e) {
                e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null
            }

            function xl(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }

            function Cl(e) {
                e: {
                    for (var t = e.return; null !== t;) {
                        if (xl(t)) break e;
                        t = t.return
                    }
                    throw Error(i(160))
                }
                var n = t;
                switch (t = n.stateNode, n.tag) {
                    case 5:
                        var r = !1;
                        break;
                    case 3:
                    case 4:
                        t = t.containerInfo, r = !0;
                        break;
                    default:
                        throw Error(i(161))
                }
                16 & n.flags && (be(t, ""), n.flags &= -17); e: t: for (n = e; ;) {
                    for (; null === n.sibling;) {
                        if (null === n.return || xl(n.return)) {
                            n = null;
                            break e
                        }
                        n = n.return
                    }
                    for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                        if (2 & n.flags) continue t;
                        if (null === n.child || 4 === n.tag) continue t;
                        n.child.return = n, n = n.child
                    }
                    if (!(2 & n.flags)) {
                        n = n.stateNode;
                        break e
                    }
                }
                r ? Sl(e, n, t) : kl(e, n, t)
            }

            function Sl(e, t, n) {
                var r = e.tag,
                    o = 5 === r || 6 === r;
                if (o) e = o ? e.stateNode : e.stateNode.instance, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = zr));
                else if (4 !== r && null !== (e = e.child))
                    for (Sl(e, t, n), e = e.sibling; null !== e;) Sl(e, t, n), e = e.sibling
            }

            function kl(e, t, n) {
                var r = e.tag,
                    o = 5 === r || 6 === r;
                if (o) e = o ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (kl(e, t, n), e = e.sibling; null !== e;) kl(e, t, n), e = e.sibling
            }

            function El(e, t) {
                for (var n, r, o = t, a = !1; ;) {
                    if (!a) {
                        a = o.return;
                        e: for (; ;) {
                            if (null === a) throw Error(i(160));
                            switch (n = a.stateNode, a.tag) {
                                case 5:
                                    r = !1;
                                    break e;
                                case 3:
                                case 4:
                                    n = n.containerInfo, r = !0;
                                    break e
                            }
                            a = a.return
                        }
                        a = !0
                    }
                    if (5 === o.tag || 6 === o.tag) {
                        e: for (var l = e, u = o, c = u; ;)
                            if (yl(l, c), null !== c.child && 4 !== c.tag) c.child.return = c, c = c.child;
                            else {
                                if (c === u) break e;
                                for (; null === c.sibling;) {
                                    if (null === c.return || c.return === u) break e;
                                    c = c.return
                                }
                                c.sibling.return = c.return, c = c.sibling
                            } r ? (l = n, u = o.stateNode, 8 === l.nodeType ? l.parentNode.removeChild(u) : l.removeChild(u)) : n.removeChild(o.stateNode)
                    }
                    else if (4 === o.tag) {
                        if (null !== o.child) {
                            n = o.stateNode.containerInfo, r = !0, o.child.return = o, o = o.child;
                            continue
                        }
                    } else if (yl(e, o), null !== o.child) {
                        o.child.return = o, o = o.child;
                        continue
                    }
                    if (o === t) break;
                    for (; null === o.sibling;) {
                        if (null === o.return || o.return === t) return;
                        4 === (o = o.return).tag && (a = !1)
                    }
                    o.sibling.return = o.return, o = o.sibling
                }
            }

            function _l(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        var n = t.updateQueue;
                        if (null !== (n = null !== n ? n.lastEffect : null)) {
                            var r = n = n.next;
                            do {
                                3 === (3 & r.tag) && (e = r.destroy, r.destroy = void 0, void 0 !== e && e()), r = r.next
                            } while (r !== n)
                        }
                        return;
                    case 1:
                    case 12:
                    case 17:
                        return;
                    case 5:
                        if (null != (n = t.stateNode)) {
                            r = t.memoizedProps;
                            var o = null !== e ? e.memoizedProps : r;
                            e = t.type;
                            var a = t.updateQueue;
                            if (t.updateQueue = null, null !== a) {
                                for (n[Jr] = r, "input" === e && "radio" === r.type && null != r.name && te(n, r), Ee(e, o), t = Ee(e, r), o = 0; o < a.length; o += 2) {
                                    var l = a[o],
                                        u = a[o + 1];
                                    "style" === l ? Ce(n, u) : "dangerouslySetInnerHTML" === l ? ve(n, u) : "children" === l ? be(n, u) : w(n, l, u, t)
                                }
                                switch (e) {
                                    case "input":
                                        ne(n, r);
                                        break;
                                    case "textarea":
                                        ce(n, r);
                                        break;
                                    case "select":
                                        e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (a = r.value) ? ie(n, !!r.multiple, a, !1) : e !== !!r.multiple && (null != r.defaultValue ? ie(n, !!r.multiple, r.defaultValue, !0) : ie(n, !!r.multiple, r.multiple ? [] : "", !1))
                                }
                            }
                        }
                        return;
                    case 6:
                        if (null === t.stateNode) throw Error(i(162));
                        return void (t.stateNode.nodeValue = t.memoizedProps);
                    case 3:
                        return void ((n = t.stateNode).hydrate && (n.hydrate = !1, Ct(n.containerInfo)));
                    case 13:
                        return null !== t.memoizedState && (Vl = Ho(), bl(t.child, !0)), void Nl(t);
                    case 19:
                        return void Nl(t);
                    case 23:
                    case 24:
                        return void bl(t, null !== t.memoizedState)
                }
                throw Error(i(163))
            }

            function Nl(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new gl), t.forEach((function (t) {
                        var r = Gu.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r))
                    }))
                }
            }

            function Il(e, t) {
                return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && (null !== (t = t.memoizedState) && null === t.dehydrated)
            }
            var Pl = Math.ceil,
                Ol = x.ReactCurrentDispatcher,
                Dl = x.ReactCurrentOwner,
                Rl = 0,
                Tl = null,
                Al = null,
                jl = 0,
                Ll = 0,
                Ml = co(0),
                Bl = 0,
                Fl = null,
                zl = 0,
                Ul = 0,
                Gl = 0,
                Wl = 0,
                Hl = null,
                Vl = 0,
                Kl = 1 / 0;

            function $l() {
                Kl = Ho() + 500
            }
            var ql, Yl = null,
                Ql = !1,
                Zl = null,
                Xl = null,
                Jl = !1,
                eu = null,
                tu = 90,
                nu = [],
                ru = [],
                ou = null,
                au = 0,
                iu = null,
                lu = -1,
                uu = 0,
                cu = 0,
                su = null,
                du = !1;

            function fu() {
                return 0 !== (48 & Rl) ? Ho() : -1 !== lu ? lu : lu = Ho()
            }

            function pu(e) {
                if (0 === (2 & (e = e.mode))) return 1;
                if (0 === (4 & e)) return 99 === Vo() ? 1 : 2;
                if (0 === uu && (uu = zl), 0 !== Zo.transition) {
                    0 !== cu && (cu = null !== Hl ? Hl.pendingLanes : 0), e = uu;
                    var t = 4186112 & ~cu;
                    return 0 === (t &= -t) && (0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192)), t
                }
                return e = Vo(), 0 !== (4 & Rl) && 98 === e ? e = zt(12, uu) : e = zt(e = function (e) {
                    switch (e) {
                        case 99:
                            return 15;
                        case 98:
                            return 10;
                        case 97:
                        case 96:
                            return 8;
                        case 95:
                            return 2;
                        default:
                            return 0
                    }
                }(e), uu), e
            }

            function gu(e, t, n) {
                if (50 < au) throw au = 0, iu = null, Error(i(185));
                if (null === (e = mu(e, t))) return null;
                Wt(e, t, n), e === Tl && (Gl |= t, 4 === Bl && bu(e, jl));
                var r = Vo();
                1 === t ? 0 !== (8 & Rl) && 0 === (48 & Rl) ? yu(e) : (hu(e, n), 0 === Rl && ($l(), Yo())) : (0 === (4 & Rl) || 98 !== r && 99 !== r || (null === ou ? ou = new Set([e]) : ou.add(e)), hu(e, n)), Hl = e
            }

            function mu(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }

            function hu(e, t) {
                for (var n = e.callbackNode, r = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
                    var u = 31 - Ht(l),
                        c = 1 << u,
                        s = a[u];
                    if (-1 === s) {
                        if (0 === (c & r) || 0 !== (c & o)) {
                            s = t, Mt(c);
                            var d = Lt;
                            a[u] = 10 <= d ? s + 250 : 6 <= d ? s + 5e3 : -1
                        }
                    } else s <= t && (e.expiredLanes |= c);
                    l &= ~c
                }
                if (r = Bt(e, e === Tl ? jl : 0), t = Lt, 0 === r) null !== n && (n !== Bo && Io(n), e.callbackNode = null, e.callbackPriority = 0);
                else {
                    if (null !== n) {
                        if (e.callbackPriority === t) return;
                        n !== Bo && Io(n)
                    }
                    15 === t ? (n = yu.bind(null, e), null === zo ? (zo = [n], Uo = No(To, Qo)) : zo.push(n), n = Bo) : 14 === t ? n = qo(99, yu.bind(null, e)) : (n = function (e) {
                        switch (e) {
                            case 15:
                            case 14:
                                return 99;
                            case 13:
                            case 12:
                            case 11:
                            case 10:
                                return 98;
                            case 9:
                            case 8:
                            case 7:
                            case 6:
                            case 4:
                            case 5:
                                return 97;
                            case 3:
                            case 2:
                            case 1:
                                return 95;
                            case 0:
                                return 90;
                            default:
                                throw Error(i(358, e))
                        }
                    }(t), n = qo(n, vu.bind(null, e))), e.callbackPriority = t, e.callbackNode = n
                }
            }

            function vu(e) {
                if (lu = -1, cu = uu = 0, 0 !== (48 & Rl)) throw Error(i(327));
                var t = e.callbackNode;
                if (ju() && e.callbackNode !== t) return null;
                var n = Bt(e, e === Tl ? jl : 0);
                if (0 === n) return null;
                var r = n,
                    o = Rl;
                Rl |= 16;
                var a = _u();
                for (Tl === e && jl === r || ($l(), ku(e, r)); ;) try {
                    Pu();
                    break
                } catch (u) {
                    Eu(e, u)
                }
                if (ra(), Ol.current = a, Rl = o, null !== Al ? r = 0 : (Tl = null, jl = 0, r = Bl), 0 !== (zl & Gl)) ku(e, 0);
                else if (0 !== r) {
                    if (2 === r && (Rl |= 64, e.hydrate && (e.hydrate = !1, $r(e.containerInfo)), 0 !== (n = Ft(e)) && (r = Nu(e, n))), 1 === r) throw t = Fl, ku(e, 0), bu(e, n), hu(e, Ho()), t;
                    switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
                        case 0:
                        case 1:
                            throw Error(i(345));
                        case 2:
                        case 5:
                            Ru(e);
                            break;
                        case 3:
                            if (bu(e, n), (62914560 & n) === n && 10 < (r = Vl + 500 - Ho())) {
                                if (0 !== Bt(e, 0)) break;
                                if (((o = e.suspendedLanes) & n) !== n) {
                                    fu(), e.pingedLanes |= e.suspendedLanes & o;
                                    break
                                }
                                e.timeoutHandle = Vr(Ru.bind(null, e), r);
                                break
                            }
                            Ru(e);
                            break;
                        case 4:
                            if (bu(e, n), (4186112 & n) === n) break;
                            for (r = e.eventTimes, o = -1; 0 < n;) {
                                var l = 31 - Ht(n);
                                a = 1 << l, (l = r[l]) > o && (o = l), n &= ~a
                            }
                            if (n = o, 10 < (n = (120 > (n = Ho() - n) ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Pl(n / 1960)) - n)) {
                                e.timeoutHandle = Vr(Ru.bind(null, e), n);
                                break
                            }
                            Ru(e);
                            break;
                        default:
                            throw Error(i(329))
                    }
                }
                return hu(e, Ho()), e.callbackNode === t ? vu.bind(null, e) : null
            }

            function bu(e, t) {
                for (t &= ~Wl, t &= ~Gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                    var n = 31 - Ht(t),
                        r = 1 << n;
                    e[n] = -1, t &= ~r
                }
            }

            function yu(e) {
                if (0 !== (48 & Rl)) throw Error(i(327));
                if (ju(), e === Tl && 0 !== (e.expiredLanes & jl)) {
                    var t = jl,
                        n = Nu(e, t);
                    0 !== (zl & Gl) && (n = Nu(e, t = Bt(e, t)))
                } else n = Nu(e, t = Bt(e, 0));
                if (0 !== e.tag && 2 === n && (Rl |= 64, e.hydrate && (e.hydrate = !1, $r(e.containerInfo)), 0 !== (t = Ft(e)) && (n = Nu(e, t))), 1 === n) throw n = Fl, ku(e, 0), bu(e, t), hu(e, Ho()), n;
                return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ru(e), hu(e, Ho()), null
            }

            function wu(e, t) {
                var n = Rl;
                Rl |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (Rl = n) && ($l(), Yo())
                }
            }

            function xu(e, t) {
                var n = Rl;
                Rl &= -2, Rl |= 8;
                try {
                    return e(t)
                } finally {
                    0 === (Rl = n) && ($l(), Yo())
                }
            }

            function Cu(e, t) {
                fo(Ml, Ll), Ll |= t, zl |= t
            }

            function Su() {
                Ll = Ml.current, so(Ml)
            }

            function ku(e, t) {
                e.finishedWork = null, e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1, Kr(n)), null !== Al)
                    for (n = Al.return; null !== n;) {
                        var r = n;
                        switch (r.tag) {
                            case 1:
                                null !== (r = r.type.childContextTypes) && void 0 !== r && yo();
                                break;
                            case 3:
                                ja(), so(mo), so(go), Qa();
                                break;
                            case 5:
                                Ma(r);
                                break;
                            case 4:
                                ja();
                                break;
                            case 13:
                            case 19:
                                so(Ba);
                                break;
                            case 10:
                                oa(r);
                                break;
                            case 23:
                            case 24:
                                Su()
                        }
                        n = n.return
                    }
                Tl = e, Al = Ku(e.current, null), jl = Ll = zl = t, Bl = 0, Fl = null, Wl = Gl = Ul = 0
            }

            function Eu(e, t) {
                for (; ;) {
                    var n = Al;
                    try {
                        if (ra(), Za.current = Ri, ri) {
                            for (var r = ei.memoizedState; null !== r;) {
                                var o = r.queue;
                                null !== o && (o.pending = null), r = r.next
                            }
                            ri = !1
                        }
                        if (Ja = 0, ni = ti = ei = null, oi = !1, Dl.current = null, null === n || null === n.return) {
                            Bl = 1, Fl = t, Al = null;
                            break
                        }
                        e: {
                            var a = e,
                                i = n.return,
                                l = n,
                                u = t;
                            if (t = jl, l.flags |= 2048, l.firstEffect = l.lastEffect = null, null !== u && "object" === typeof u && "function" === typeof u.then) {
                                var c = u;
                                if (0 === (2 & l.mode)) {
                                    var s = l.alternate;
                                    s ? (l.updateQueue = s.updateQueue, l.memoizedState = s.memoizedState, l.lanes = s.lanes) : (l.updateQueue = null, l.memoizedState = null)
                                }
                                var d = 0 !== (1 & Ba.current),
                                    f = i;
                                do {
                                    var p;
                                    if (p = 13 === f.tag) {
                                        var g = f.memoizedState;
                                        if (null !== g) p = null !== g.dehydrated;
                                        else {
                                            var m = f.memoizedProps;
                                            p = void 0 !== m.fallback && (!0 !== m.unstable_avoidThisFallback || !d)
                                        }
                                    }
                                    if (p) {
                                        var h = f.updateQueue;
                                        if (null === h) {
                                            var v = new Set;
                                            v.add(c), f.updateQueue = v
                                        } else h.add(c);
                                        if (0 === (2 & f.mode)) {
                                            if (f.flags |= 64, l.flags |= 16384, l.flags &= -2981, 1 === l.tag)
                                                if (null === l.alternate) l.tag = 17;
                                                else {
                                                    var b = da(-1, 1);
                                                    b.tag = 2, fa(l, b)
                                                }
                                            l.lanes |= 1;
                                            break e
                                        }
                                        u = void 0, l = t;
                                        var y = a.pingCache;
                                        if (null === y ? (y = a.pingCache = new dl, u = new Set, y.set(c, u)) : void 0 === (u = y.get(c)) && (u = new Set, y.set(c, u)), !u.has(l)) {
                                            u.add(l);
                                            var w = Uu.bind(null, a, c, l);
                                            c.then(w, w)
                                        }
                                        f.flags |= 4096, f.lanes = t;
                                        break e
                                    }
                                    f = f.return
                                } while (null !== f);
                                u = Error(($(l.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                            }
                            5 !== Bl && (Bl = 2),
                                u = cl(u, l),
                                f = i; do {
                                    switch (f.tag) {
                                        case 3:
                                            a = u, f.flags |= 4096, t &= -t, f.lanes |= t, pa(f, fl(0, a, t));
                                            break e;
                                        case 1:
                                            a = u;
                                            var x = f.type,
                                                C = f.stateNode;
                                            if (0 === (64 & f.flags) && ("function" === typeof x.getDerivedStateFromError || null !== C && "function" === typeof C.componentDidCatch && (null === Xl || !Xl.has(C)))) {
                                                f.flags |= 4096, t &= -t, f.lanes |= t, pa(f, pl(f, a, t));
                                                break e
                                            }
                                    }
                                    f = f.return
                                } while (null !== f)
                        }
                        Du(n)
                    } catch (S) {
                        t = S, Al === n && null !== n && (Al = n = n.return);
                        continue
                    }
                    break
                }
            }

            function _u() {
                var e = Ol.current;
                return Ol.current = Ri, null === e ? Ri : e
            }

            function Nu(e, t) {
                var n = Rl;
                Rl |= 16;
                var r = _u();
                for (Tl === e && jl === t || ku(e, t); ;) try {
                    Iu();
                    break
                } catch (o) {
                    Eu(e, o)
                }
                if (ra(), Rl = n, Ol.current = r, null !== Al) throw Error(i(261));
                return Tl = null, jl = 0, Bl
            }

            function Iu() {
                for (; null !== Al;) Ou(Al)
            }

            function Pu() {
                for (; null !== Al && !Po();) Ou(Al)
            }

            function Ou(e) {
                var t = ql(e.alternate, e, Ll);
                e.memoizedProps = e.pendingProps, null === t ? Du(e) : Al = t, Dl.current = null
            }

            function Du(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return, 0 === (2048 & t.flags)) {
                        if (null !== (n = ll(n, t, Ll))) return void (Al = n);
                        if (24 !== (n = t).tag && 23 !== n.tag || null === n.memoizedState || 0 !== (1073741824 & Ll) || 0 === (4 & n.mode)) {
                            for (var r = 0, o = n.child; null !== o;) r |= o.lanes | o.childLanes, o = o.sibling;
                            n.childLanes = r
                        }
                        null !== e && 0 === (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = t.firstEffect), null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t))
                    } else {
                        if (null !== (n = ul(t))) return n.flags &= 2047, void (Al = n);
                        null !== e && (e.firstEffect = e.lastEffect = null, e.flags |= 2048)
                    }
                    if (null !== (t = t.sibling)) return void (Al = t);
                    Al = t = e
                } while (null !== t);
                0 === Bl && (Bl = 5)
            }

            function Ru(e) {
                var t = Vo();
                return $o(99, Tu.bind(null, e, t)), null
            }

            function Tu(e, t) {
                do {
                    ju()
                } while (null !== eu);
                if (0 !== (48 & Rl)) throw Error(i(327));
                var n = e.finishedWork;
                if (null === n) return null;
                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
                e.callbackNode = null;
                var r = n.lanes | n.childLanes,
                    o = r,
                    a = e.pendingLanes & ~o;
                e.pendingLanes = o, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= o, e.mutableReadLanes &= o, e.entangledLanes &= o, o = e.entanglements;
                for (var l = e.eventTimes, u = e.expirationTimes; 0 < a;) {
                    var c = 31 - Ht(a),
                        s = 1 << c;
                    o[c] = 0, l[c] = -1, u[c] = -1, a &= ~s
                }
                if (null !== ou && 0 === (24 & r) && ou.has(e) && ou.delete(e), e === Tl && (Al = Tl = null, jl = 0), 1 < n.flags ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, null !== r) {
                    if (o = Rl, Rl |= 32, Dl.current = null, Ur = Yt, vr(l = hr())) {
                        if ("selectionStart" in l) u = {
                            start: l.selectionStart,
                            end: l.selectionEnd
                        };
                        else e: if (u = (u = l.ownerDocument) && u.defaultView || window, (s = u.getSelection && u.getSelection()) && 0 !== s.rangeCount) {
                            u = s.anchorNode, a = s.anchorOffset, c = s.focusNode, s = s.focusOffset;
                            try {
                                u.nodeType, c.nodeType
                            } catch (_) {
                                u = null;
                                break e
                            }
                            var d = 0,
                                f = -1,
                                p = -1,
                                g = 0,
                                m = 0,
                                h = l,
                                v = null;
                            t: for (; ;) {
                                for (var b; h !== u || 0 !== a && 3 !== h.nodeType || (f = d + a), h !== c || 0 !== s && 3 !== h.nodeType || (p = d + s), 3 === h.nodeType && (d += h.nodeValue.length), null !== (b = h.firstChild);) v = h, h = b;
                                for (; ;) {
                                    if (h === l) break t;
                                    if (v === u && ++g === a && (f = d), v === c && ++m === s && (p = d), null !== (b = h.nextSibling)) break;
                                    v = (h = v).parentNode
                                }
                                h = b
                            }
                            u = -1 === f || -1 === p ? null : {
                                start: f,
                                end: p
                            }
                        } else u = null;
                        u = u || {
                            start: 0,
                            end: 0
                        }
                    } else u = null;
                    Gr = {
                        focusedElem: l,
                        selectionRange: u
                    }, Yt = !1, su = null, du = !1, Yl = r;
                    do {
                        try {
                            Au()
                        } catch (_) {
                            if (null === Yl) throw Error(i(330));
                            zu(Yl, _), Yl = Yl.nextEffect
                        }
                    } while (null !== Yl);
                    su = null, Yl = r;
                    do {
                        try {
                            for (l = e; null !== Yl;) {
                                var y = Yl.flags;
                                if (16 & y && be(Yl.stateNode, ""), 128 & y) {
                                    var w = Yl.alternate;
                                    if (null !== w) {
                                        var x = w.ref;
                                        null !== x && ("function" === typeof x ? x(null) : x.current = null)
                                    }
                                }
                                switch (1038 & y) {
                                    case 2:
                                        Cl(Yl), Yl.flags &= -3;
                                        break;
                                    case 6:
                                        Cl(Yl), Yl.flags &= -3, _l(Yl.alternate, Yl);
                                        break;
                                    case 1024:
                                        Yl.flags &= -1025;
                                        break;
                                    case 1028:
                                        Yl.flags &= -1025, _l(Yl.alternate, Yl);
                                        break;
                                    case 4:
                                        _l(Yl.alternate, Yl);
                                        break;
                                    case 8:
                                        El(l, u = Yl);
                                        var C = u.alternate;
                                        wl(u), null !== C && wl(C)
                                }
                                Yl = Yl.nextEffect
                            }
                        } catch (_) {
                            if (null === Yl) throw Error(i(330));
                            zu(Yl, _), Yl = Yl.nextEffect
                        }
                    } while (null !== Yl);
                    if (x = Gr, w = hr(), y = x.focusedElem, l = x.selectionRange, w !== y && y && y.ownerDocument && mr(y.ownerDocument.documentElement, y)) {
                        null !== l && vr(y) && (w = l.start, void 0 === (x = l.end) && (x = w), "selectionStart" in y ? (y.selectionStart = w, y.selectionEnd = Math.min(x, y.value.length)) : (x = (w = y.ownerDocument || document) && w.defaultView || window).getSelection && (x = x.getSelection(), u = y.textContent.length, C = Math.min(l.start, u), l = void 0 === l.end ? C : Math.min(l.end, u), !x.extend && C > l && (u = l, l = C, C = u), u = gr(y, C), a = gr(y, l), u && a && (1 !== x.rangeCount || x.anchorNode !== u.node || x.anchorOffset !== u.offset || x.focusNode !== a.node || x.focusOffset !== a.offset) && ((w = w.createRange()).setStart(u.node, u.offset), x.removeAllRanges(), C > l ? (x.addRange(w), x.extend(a.node, a.offset)) : (w.setEnd(a.node, a.offset), x.addRange(w))))), w = [];
                        for (x = y; x = x.parentNode;) 1 === x.nodeType && w.push({
                            element: x,
                            left: x.scrollLeft,
                            top: x.scrollTop
                        });
                        for ("function" === typeof y.focus && y.focus(), y = 0; y < w.length; y++)(x = w[y]).element.scrollLeft = x.left, x.element.scrollTop = x.top
                    }
                    Yt = !!Ur, Gr = Ur = null, e.current = n, Yl = r;
                    do {
                        try {
                            for (y = e; null !== Yl;) {
                                var S = Yl.flags;
                                if (36 & S && vl(y, Yl.alternate, Yl), 128 & S) {
                                    w = void 0;
                                    var k = Yl.ref;
                                    if (null !== k) {
                                        var E = Yl.stateNode;
                                        Yl.tag, w = E, "function" === typeof k ? k(w) : k.current = w
                                    }
                                }
                                Yl = Yl.nextEffect
                            }
                        } catch (_) {
                            if (null === Yl) throw Error(i(330));
                            zu(Yl, _), Yl = Yl.nextEffect
                        }
                    } while (null !== Yl);
                    Yl = null, Fo(), Rl = o
                } else e.current = n;
                if (Jl) Jl = !1, eu = e, tu = t;
                else
                    for (Yl = r; null !== Yl;) t = Yl.nextEffect, Yl.nextEffect = null, 8 & Yl.flags && ((S = Yl).sibling = null, S.stateNode = null), Yl = t;
                if (0 === (r = e.pendingLanes) && (Xl = null), 1 === r ? e === iu ? au++ : (au = 0, iu = e) : au = 0, n = n.stateNode, Eo && "function" === typeof Eo.onCommitFiberRoot) try {
                    Eo.onCommitFiberRoot(ko, n, void 0, 64 === (64 & n.current.flags))
                } catch (_) { }
                if (hu(e, Ho()), Ql) throw Ql = !1, e = Zl, Zl = null, e;
                return 0 !== (8 & Rl) || Yo(), null
            }

            function Au() {
                for (; null !== Yl;) {
                    var e = Yl.alternate;
                    du || null === su || (0 !== (8 & Yl.flags) ? et(Yl, su) && (du = !0) : 13 === Yl.tag && Il(e, Yl) && et(Yl, su) && (du = !0));
                    var t = Yl.flags;
                    0 !== (256 & t) && hl(e, Yl), 0 === (512 & t) || Jl || (Jl = !0, qo(97, (function () {
                        return ju(), null
                    }))), Yl = Yl.nextEffect
                }
            }

            function ju() {
                if (90 !== tu) {
                    var e = 97 < tu ? 97 : tu;
                    return tu = 90, $o(e, Bu)
                }
                return !1
            }

            function Lu(e, t) {
                nu.push(t, e), Jl || (Jl = !0, qo(97, (function () {
                    return ju(), null
                })))
            }

            function Mu(e, t) {
                ru.push(t, e), Jl || (Jl = !0, qo(97, (function () {
                    return ju(), null
                })))
            }

            function Bu() {
                if (null === eu) return !1;
                var e = eu;
                if (eu = null, 0 !== (48 & Rl)) throw Error(i(331));
                var t = Rl;
                Rl |= 32;
                var n = ru;
                ru = [];
                for (var r = 0; r < n.length; r += 2) {
                    var o = n[r],
                        a = n[r + 1],
                        l = o.destroy;
                    if (o.destroy = void 0, "function" === typeof l) try {
                        l()
                    } catch (c) {
                        if (null === a) throw Error(i(330));
                        zu(a, c)
                    }
                }
                for (n = nu, nu = [], r = 0; r < n.length; r += 2) {
                    o = n[r], a = n[r + 1];
                    try {
                        var u = o.create;
                        o.destroy = u()
                    } catch (c) {
                        if (null === a) throw Error(i(330));
                        zu(a, c)
                    }
                }
                for (u = e.current.firstEffect; null !== u;) e = u.nextEffect, u.nextEffect = null, 8 & u.flags && (u.sibling = null, u.stateNode = null), u = e;
                return Rl = t, Yo(), !0
            }

            function Fu(e, t, n) {
                fa(e, t = fl(0, t = cl(n, t), 1)), t = fu(), null !== (e = mu(e, 1)) && (Wt(e, 1, t), hu(e, t))
            }

            function zu(e, t) {
                if (3 === e.tag) Fu(e, e, t);
                else
                    for (var n = e.return; null !== n;) {
                        if (3 === n.tag) {
                            Fu(n, e, t);
                            break
                        }
                        if (1 === n.tag) {
                            var r = n.stateNode;
                            if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Xl || !Xl.has(r))) {
                                var o = pl(n, e = cl(t, e), 1);
                                if (fa(n, o), o = fu(), null !== (n = mu(n, 1))) Wt(n, 1, o), hu(n, o);
                                else if ("function" === typeof r.componentDidCatch && (null === Xl || !Xl.has(r))) try {
                                    r.componentDidCatch(t, e)
                                } catch (a) { }
                                break
                            }
                        }
                        n = n.return
                    }
            }

            function Uu(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t), t = fu(), e.pingedLanes |= e.suspendedLanes & n, Tl === e && (jl & n) === n && (4 === Bl || 3 === Bl && (62914560 & jl) === jl && 500 > Ho() - Vl ? ku(e, 0) : Wl |= n), hu(e, t)
            }

            function Gu(e, t) {
                var n = e.stateNode;
                null !== n && n.delete(t), 0 === (t = 0) && (0 === (2 & (t = e.mode)) ? t = 1 : 0 === (4 & t) ? t = 99 === Vo() ? 1 : 2 : (0 === uu && (uu = zl), 0 === (t = Ut(62914560 & ~uu)) && (t = 4194304))), n = fu(), null !== (e = mu(e, t)) && (Wt(e, t, n), hu(e, n))
            }

            function Wu(e, t, n, r) {
                this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function Hu(e, t, n, r) {
                return new Wu(e, t, n, r)
            }

            function Vu(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }

            function Ku(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Hu(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
            }

            function $u(e, t, n, r, o, a) {
                var l = 2;
                if (r = e, "function" === typeof e) Vu(e) && (l = 1);
                else if ("string" === typeof e) l = 5;
                else e: switch (e) {
                    case k:
                        return qu(n.children, o, a, t);
                    case L:
                        l = 8, o |= 16;
                        break;
                    case E:
                        l = 8, o |= 1;
                        break;
                    case _:
                        return (e = Hu(12, n, t, 8 | o)).elementType = _, e.type = _, e.lanes = a, e;
                    case O:
                        return (e = Hu(13, n, t, o)).type = O, e.elementType = O, e.lanes = a, e;
                    case D:
                        return (e = Hu(19, n, t, o)).elementType = D, e.lanes = a, e;
                    case M:
                        return Yu(n, o, a, t);
                    case B:
                        return (e = Hu(24, n, t, o)).elementType = B, e.lanes = a, e;
                    default:
                        if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                            case N:
                                l = 10;
                                break e;
                            case I:
                                l = 9;
                                break e;
                            case P:
                                l = 11;
                                break e;
                            case R:
                                l = 14;
                                break e;
                            case T:
                                l = 16, r = null;
                                break e;
                            case A:
                                l = 22;
                                break e
                        }
                        throw Error(i(130, null == e ? e : typeof e, ""))
                }
                return (t = Hu(l, n, t, o)).elementType = e, t.type = r, t.lanes = a, t
            }

            function qu(e, t, n, r) {
                return (e = Hu(7, e, r, t)).lanes = n, e
            }

            function Yu(e, t, n, r) {
                return (e = Hu(23, e, r, t)).elementType = M, e.lanes = n, e
            }

            function Qu(e, t, n) {
                return (e = Hu(6, e, null, t)).lanes = n, e
            }

            function Zu(e, t, n) {
                return (t = Hu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }, t
            }

            function Xu(e, t, n) {
                this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Gt(0), this.expirationTimes = Gt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gt(0), this.mutableSourceEagerHydrationData = null
            }

            function Ju(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: S,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: t,
                    implementation: n
                }
            }

            function ec(e, t, n, r) {
                var o = t.current,
                    a = fu(),
                    l = pu(o);
                e: if (n) {
                    t: {
                        if (Qe(n = n._reactInternals) !== n || 1 !== n.tag) throw Error(i(170));
                        var u = n; do {
                            switch (u.tag) {
                                case 3:
                                    u = u.stateNode.context;
                                    break t;
                                case 1:
                                    if (bo(u.type)) {
                                        u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break t
                                    }
                            }
                            u = u.return
                        } while (null !== u);
                        throw Error(i(171))
                    }
                    if (1 === n.tag) {
                        var c = n.type;
                        if (bo(c)) {
                            n = xo(n, c, u);
                            break e
                        }
                    }
                    n = u
                }
                else n = po;
                return null === t.context ? t.context = n : t.pendingContext = n, (t = da(a, l)).payload = {
                    element: e
                }, null !== (r = void 0 === r ? null : r) && (t.callback = r), fa(o, t), gu(o, l, a), l
            }

            function tc(e) {
                return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
            }

            function nc(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }

            function rc(e, t) {
                nc(e, t), (e = e.alternate) && nc(e, t)
            }

            function oc(e, t, n) {
                var r = null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources || null;
                if (n = new Xu(e, t, null != n && !0 === n.hydrate), t = Hu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0), n.current = t, t.stateNode = n, ca(t), e[eo] = n.current, Rr(8 === e.nodeType ? e.parentNode : e), r)
                    for (e = 0; e < r.length; e++) {
                        var o = (t = r[e])._getVersion;
                        o = o(t._source), null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, o] : n.mutableSourceEagerHydrationData.push(t, o)
                    }
                this._internalRoot = n
            }

            function ac(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }

            function ic(e, t, n, r, o) {
                var a = n._reactRootContainer;
                if (a) {
                    var i = a._internalRoot;
                    if ("function" === typeof o) {
                        var l = o;
                        o = function () {
                            var e = tc(i);
                            l.call(e)
                        }
                    }
                    ec(t, i, e, o)
                } else {
                    if (a = n._reactRootContainer = function (e, t) {
                        if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                            for (var n; n = e.lastChild;) e.removeChild(n);
                        return new oc(e, 0, t ? {
                            hydrate: !0
                        } : void 0)
                    }(n, r), i = a._internalRoot, "function" === typeof o) {
                        var u = o;
                        o = function () {
                            var e = tc(i);
                            u.call(e)
                        }
                    }
                    xu((function () {
                        ec(t, i, e, o)
                    }))
                }
                return tc(i)
            }

            function lc(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!ac(t)) throw Error(i(200));
                return Ju(e, t, null, n)
            }
            ql = function (e, t, n) {
                var r = t.lanes;
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps || mo.current) Mi = !0;
                    else {
                        if (0 === (n & r)) {
                            switch (Mi = !1, t.tag) {
                                case 3:
                                    $i(t), qa();
                                    break;
                                case 5:
                                    La(t);
                                    break;
                                case 1:
                                    bo(t.type) && Co(t);
                                    break;
                                case 4:
                                    Aa(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    r = t.memoizedProps.value;
                                    var o = t.type._context;
                                    fo(Jo, o._currentValue), o._currentValue = r;
                                    break;
                                case 13:
                                    if (null !== t.memoizedState) return 0 !== (n & t.child.childLanes) ? Xi(e, t, n) : (fo(Ba, 1 & Ba.current), null !== (t = al(e, t, n)) ? t.sibling : null);
                                    fo(Ba, 1 & Ba.current);
                                    break;
                                case 19:
                                    if (r = 0 !== (n & t.childLanes), 0 !== (64 & e.flags)) {
                                        if (r) return ol(e, t, n);
                                        t.flags |= 64
                                    }
                                    if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), fo(Ba, Ba.current), r) break;
                                    return null;
                                case 23:
                                case 24:
                                    return t.lanes = 0, Gi(e, t, n)
                            }
                            return al(e, t, n)
                        }
                        Mi = 0 !== (16384 & e.flags)
                    }
                else Mi = !1;
                switch (t.lanes = 0, t.tag) {
                    case 2:
                        if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = vo(t, go.current), ia(t, n), o = li(null, t, r, e, o, n), t.flags |= 1, "object" === typeof o && null !== o && "function" === typeof o.render && void 0 === o.$$typeof) {
                            if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, bo(r)) {
                                var a = !0;
                                Co(t)
                            } else a = !1;
                            t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, ca(t);
                            var l = r.getDerivedStateFromProps;
                            "function" === typeof l && va(t, r, l, e), o.updater = ba, t.stateNode = o, o._reactInternals = t, Ca(t, r, e, n), t = Ki(null, t, r, !0, a, n)
                        } else t.tag = 0, Bi(null, t, o, n), t = t.child;
                        return t;
                    case 16:
                        o = t.elementType;
                        e: {
                            switch (null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = (a = o._init)(o._payload), t.type = o, a = t.tag = function (e) {
                                if ("function" === typeof e) return Vu(e) ? 1 : 0;
                                if (void 0 !== e && null !== e) {
                                    if ((e = e.$$typeof) === P) return 11;
                                    if (e === R) return 14
                                }
                                return 2
                            }(o), e = Xo(o, e), a) {
                                case 0:
                                    t = Hi(null, t, o, e, n);
                                    break e;
                                case 1:
                                    t = Vi(null, t, o, e, n);
                                    break e;
                                case 11:
                                    t = Fi(null, t, o, e, n);
                                    break e;
                                case 14:
                                    t = zi(null, t, o, Xo(o.type, e), r, n);
                                    break e
                            }
                            throw Error(i(306, o, ""))
                        }
                        return t;
                    case 0:
                        return r = t.type, o = t.pendingProps, Hi(e, t, r, o = t.elementType === r ? o : Xo(r, o), n);
                    case 1:
                        return r = t.type, o = t.pendingProps, Vi(e, t, r, o = t.elementType === r ? o : Xo(r, o), n);
                    case 3:
                        if ($i(t), r = t.updateQueue, null === e || null === r) throw Error(i(282));
                        if (r = t.pendingProps, o = null !== (o = t.memoizedState) ? o.element : null, sa(e, t), ga(t, r, null, n), (r = t.memoizedState.element) === o) qa(), t = al(e, t, n);
                        else {
                            if ((a = (o = t.stateNode).hydrate) && (Ua = qr(t.stateNode.containerInfo.firstChild), za = t, a = Ga = !0), a) {
                                if (null != (e = o.mutableSourceEagerHydrationData))
                                    for (o = 0; o < e.length; o += 2)(a = e[o])._workInProgressVersionPrimary = e[o + 1], Ya.push(a);
                                for (n = Ia(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 1024, n = n.sibling
                            } else Bi(e, t, r, n), qa();
                            t = t.child
                        }
                        return t;
                    case 5:
                        return La(t), null === e && Va(t), r = t.type, o = t.pendingProps, a = null !== e ? e.memoizedProps : null, l = o.children, Hr(r, o) ? l = null : null !== a && Hr(r, a) && (t.flags |= 16), Wi(e, t), Bi(e, t, l, n), t.child;
                    case 6:
                        return null === e && Va(t), null;
                    case 13:
                        return Xi(e, t, n);
                    case 4:
                        return Aa(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Na(t, null, r, n) : Bi(e, t, r, n), t.child;
                    case 11:
                        return r = t.type, o = t.pendingProps, Fi(e, t, r, o = t.elementType === r ? o : Xo(r, o), n);
                    case 7:
                        return Bi(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return Bi(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        e: {
                            r = t.type._context,
                                o = t.pendingProps,
                                l = t.memoizedProps,
                                a = o.value;
                            var u = t.type._context;
                            if (fo(Jo, u._currentValue), u._currentValue = a, null !== l)
                                if (u = l.value, 0 === (a = sr(u, a) ? 0 : 0 | ("function" === typeof r._calculateChangedBits ? r._calculateChangedBits(u, a) : 1073741823))) {
                                    if (l.children === o.children && !mo.current) {
                                        t = al(e, t, n);
                                        break e
                                    }
                                } else
                                    for (null !== (u = t.child) && (u.return = t); null !== u;) {
                                        var c = u.dependencies;
                                        if (null !== c) {
                                            l = u.child;
                                            for (var s = c.firstContext; null !== s;) {
                                                if (s.context === r && 0 !== (s.observedBits & a)) {
                                                    1 === u.tag && ((s = da(-1, n & -n)).tag = 2, fa(u, s)), u.lanes |= n, null !== (s = u.alternate) && (s.lanes |= n), aa(u.return, n), c.lanes |= n;
                                                    break
                                                }
                                                s = s.next
                                            }
                                        } else l = 10 === u.tag && u.type === t.type ? null : u.child;
                                        if (null !== l) l.return = u;
                                        else
                                            for (l = u; null !== l;) {
                                                if (l === t) {
                                                    l = null;
                                                    break
                                                }
                                                if (null !== (u = l.sibling)) {
                                                    u.return = l.return, l = u;
                                                    break
                                                }
                                                l = l.return
                                            }
                                        u = l
                                    }
                            Bi(e, t, o.children, n),
                                t = t.child
                        }
                        return t;
                    case 9:
                        return o = t.type, r = (a = t.pendingProps).children, ia(t, n), r = r(o = la(o, a.unstable_observedBits)), t.flags |= 1, Bi(e, t, r, n), t.child;
                    case 14:
                        return a = Xo(o = t.type, t.pendingProps), zi(e, t, o, a = Xo(o.type, a), r, n);
                    case 15:
                        return Ui(e, t, t.type, t.pendingProps, r, n);
                    case 17:
                        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xo(r, o), null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, bo(r) ? (e = !0, Co(t)) : e = !1, ia(t, n), wa(t, r, o), Ca(t, r, o, n), Ki(null, t, r, !0, e, n);
                    case 19:
                        return ol(e, t, n);
                    case 23:
                    case 24:
                        return Gi(e, t, n)
                }
                throw Error(i(156, t.tag))
            }, oc.prototype.render = function (e) {
                ec(e, this._internalRoot, null, null)
            }, oc.prototype.unmount = function () {
                var e = this._internalRoot,
                    t = e.containerInfo;
                ec(null, e, null, (function () {
                    t[eo] = null
                }))
            }, tt = function (e) {
                13 === e.tag && (gu(e, 4, fu()), rc(e, 4))
            }, nt = function (e) {
                13 === e.tag && (gu(e, 67108864, fu()), rc(e, 67108864))
            }, rt = function (e) {
                if (13 === e.tag) {
                    var t = fu(),
                        n = pu(e);
                    gu(e, n, t), rc(e, n)
                }
            }, ot = function (e, t) {
                return t()
            }, Ne = function (e, t, n) {
                switch (t) {
                    case "input":
                        if (ne(e, n), t = n.name, "radio" === n.type && null != t) {
                            for (n = e; n.parentNode;) n = n.parentNode;
                            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var o = ao(r);
                                    if (!o) throw Error(i(90));
                                    Z(r), ne(r, o)
                                }
                            }
                        }
                        break;
                    case "textarea":
                        ce(e, n);
                        break;
                    case "select":
                        null != (t = n.value) && ie(e, !!n.multiple, t, !1)
                }
            }, Te = wu, Ae = function (e, t, n, r, o) {
                var a = Rl;
                Rl |= 4;
                try {
                    return $o(98, e.bind(null, t, n, r, o))
                } finally {
                    0 === (Rl = a) && ($l(), Yo())
                }
            }, je = function () {
                0 === (49 & Rl) && (function () {
                    if (null !== ou) {
                        var e = ou;
                        ou = null, e.forEach((function (e) {
                            e.expiredLanes |= 24 & e.pendingLanes, hu(e, Ho())
                        }))
                    }
                    Yo()
                }(), ju())
            }, Le = function (e, t) {
                var n = Rl;
                Rl |= 2;
                try {
                    return e(t)
                } finally {
                    0 === (Rl = n) && ($l(), Yo())
                }
            };
            var uc = {
                Events: [ro, oo, ao, De, Re, ju, {
                    current: !1
                }]
            },
                cc = {
                    findFiberByHostInstance: no,
                    bundleType: 0,
                    version: "17.0.2",
                    rendererPackageName: "react-dom"
                },
                sc = {
                    bundleType: cc.bundleType,
                    version: cc.version,
                    rendererPackageName: cc.rendererPackageName,
                    rendererConfig: cc.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: x.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function (e) {
                        return null === (e = Je(e)) ? null : e.stateNode
                    },
                    findFiberByHostInstance: cc.findFiberByHostInstance || function () {
                        return null
                    },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null
                };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var dc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!dc.isDisabled && dc.supportsFiber) try {
                    ko = dc.inject(sc), Eo = dc
                } catch (he) { }
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uc, t.createPortal = lc, t.findDOMNode = function (e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render) throw Error(i(188));
                    throw Error(i(268, Object.keys(e)))
                }
                return e = null === (e = Je(t)) ? null : e.stateNode
            }, t.flushSync = function (e, t) {
                var n = Rl;
                if (0 !== (48 & n)) return e(t);
                Rl |= 1;
                try {
                    if (e) return $o(99, e.bind(null, t))
                } finally {
                    Rl = n, Yo()
                }
            }, t.hydrate = function (e, t, n) {
                if (!ac(t)) throw Error(i(200));
                return ic(null, e, t, !0, n)
            }, t.render = function (e, t, n) {
                if (!ac(t)) throw Error(i(200));
                return ic(null, e, t, !1, n)
            }, t.unmountComponentAtNode = function (e) {
                if (!ac(e)) throw Error(i(40));
                return !!e._reactRootContainer && (xu((function () {
                    ic(null, null, e, !1, (function () {
                        e._reactRootContainer = null, e[eo] = null
                    }))
                })), !0)
            }, t.unstable_batchedUpdates = wu, t.unstable_createPortal = function (e, t) {
                return lc(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
            }, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
                if (!ac(n)) throw Error(i(200));
                if (null == e || void 0 === e._reactInternals) throw Error(i(38));
                return ic(e, t, n, !1, r)
            }, t.version = "17.0.2"
        },
        164: function (e, t, n) {
            "use strict";
            ! function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (t) {
                    console.error(t)
                }
            }(), e.exports = n(463)
        },
        372: function (e, t) {
            "use strict";
            var n = 60103,
                r = 60106,
                o = 60107,
                a = 60108,
                i = 60114,
                l = 60109,
                u = 60110,
                c = 60112,
                s = 60113,
                d = 60120,
                f = 60115,
                p = 60116,
                g = 60121,
                m = 60122,
                h = 60117,
                v = 60129,
                b = 60131;
            if ("function" === typeof Symbol && Symbol.for) {
                var y = Symbol.for;
                n = y("react.element"), r = y("react.portal"), o = y("react.fragment"), a = y("react.strict_mode"), i = y("react.profiler"), l = y("react.provider"), u = y("react.context"), c = y("react.forward_ref"), s = y("react.suspense"), d = y("react.suspense_list"), f = y("react.memo"), p = y("react.lazy"), g = y("react.block"), m = y("react.server.block"), h = y("react.fundamental"), v = y("react.debug_trace_mode"), b = y("react.legacy_hidden")
            }

            function w(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch (e = e.type) {
                                case o:
                                case i:
                                case a:
                                case s:
                                case d:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case u:
                                        case c:
                                        case p:
                                        case f:
                                        case l:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case r:
                            return t
                    }
                }
            }
            t.isContextConsumer = function (e) {
                return w(e) === u
            }, t.isValidElementType = function (e) {
                return "string" === typeof e || "function" === typeof e || e === o || e === i || e === v || e === a || e === s || e === d || e === b || "object" === typeof e && null !== e && (e.$$typeof === p || e.$$typeof === f || e.$$typeof === l || e.$$typeof === u || e.$$typeof === c || e.$$typeof === h || e.$$typeof === g || e[0] === m)
            }, t.typeOf = w
        },
        441: function (e, t, n) {
            "use strict";
            e.exports = n(372)
        },
        374: function (e, t, n) {
            "use strict";
            n(725);
            var r = n(791),
                o = 60103;
            if (t.Fragment = 60107, "function" === typeof Symbol && Symbol.for) {
                var a = Symbol.for;
                o = a("react.element"), t.Fragment = a("react.fragment")
            }
            var i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                l = Object.prototype.hasOwnProperty,
                u = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function c(e, t, n) {
                var r, a = {},
                    c = null,
                    s = null;
                for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (s = t.ref), t) l.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
                return {
                    $$typeof: o,
                    type: e,
                    key: c,
                    ref: s,
                    props: a,
                    _owner: i.current
                }
            }
            t.jsx = c, t.jsxs = c
        },
        117: function (e, t, n) {
            "use strict";
            var r = n(725),
                o = 60103,
                a = 60106;
            t.Fragment = 60107, t.StrictMode = 60108, t.Profiler = 60114;
            var i = 60109,
                l = 60110,
                u = 60112;
            t.Suspense = 60113;
            var c = 60115,
                s = 60116;
            if ("function" === typeof Symbol && Symbol.for) {
                var d = Symbol.for;
                o = d("react.element"), a = d("react.portal"), t.Fragment = d("react.fragment"), t.StrictMode = d("react.strict_mode"), t.Profiler = d("react.profiler"), i = d("react.provider"), l = d("react.context"), u = d("react.forward_ref"), t.Suspense = d("react.suspense"), c = d("react.memo"), s = d("react.lazy")
            }
            var f = "function" === typeof Symbol && Symbol.iterator;

            function p(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var g = {
                isMounted: function () {
                    return !1
                },
                enqueueForceUpdate: function () { },
                enqueueReplaceState: function () { },
                enqueueSetState: function () { }
            },
                m = {};

            function h(e, t, n) {
                this.props = e, this.context = t, this.refs = m, this.updater = n || g
            }

            function v() { }

            function b(e, t, n) {
                this.props = e, this.context = t, this.refs = m, this.updater = n || g
            }
            h.prototype.isReactComponent = {}, h.prototype.setState = function (e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(p(85));
                this.updater.enqueueSetState(this, e, t, "setState")
            }, h.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, v.prototype = h.prototype;
            var y = b.prototype = new v;
            y.constructor = b, r(y, h.prototype), y.isPureReactComponent = !0;
            var w = {
                current: null
            },
                x = Object.prototype.hasOwnProperty,
                C = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function S(e, t, n) {
                var r, a = {},
                    i = null,
                    l = null;
                if (null != t)
                    for (r in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) x.call(t, r) && !C.hasOwnProperty(r) && (a[r] = t[r]);
                var u = arguments.length - 2;
                if (1 === u) a.children = n;
                else if (1 < u) {
                    for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
                    a.children = c
                }
                if (e && e.defaultProps)
                    for (r in u = e.defaultProps) void 0 === a[r] && (a[r] = u[r]);
                return {
                    $$typeof: o,
                    type: e,
                    key: i,
                    ref: l,
                    props: a,
                    _owner: w.current
                }
            }

            function k(e) {
                return "object" === typeof e && null !== e && e.$$typeof === o
            }
            var E = /\/+/g;

            function _(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function (e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function (e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function N(e, t, n, r, i) {
                var l = typeof e;
                "undefined" !== l && "boolean" !== l || (e = null);
                var u = !1;
                if (null === e) u = !0;
                else switch (l) {
                    case "string":
                    case "number":
                        u = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case o:
                            case a:
                                u = !0
                        }
                }
                if (u) return i = i(u = e), e = "" === r ? "." + _(u, 0) : r, Array.isArray(i) ? (n = "", null != e && (n = e.replace(E, "$&/") + "/"), N(i, t, n, "", (function (e) {
                    return e
                }))) : null != i && (k(i) && (i = function (e, t) {
                    return {
                        $$typeof: o,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(i, n + (!i.key || u && u.key === i.key ? "" : ("" + i.key).replace(E, "$&/") + "/") + e)), t.push(i)), 1;
                if (u = 0, r = "" === r ? "." : r + ":", Array.isArray(e))
                    for (var c = 0; c < e.length; c++) {
                        var s = r + _(l = e[c], c);
                        u += N(l, t, n, s, i)
                    } else if (s = function (e) {
                        return null === e || "object" !== typeof e ? null : "function" === typeof (e = f && e[f] || e["@@iterator"]) ? e : null
                    }(e), "function" === typeof s)
                    for (e = s.call(e), c = 0; !(l = e.next()).done;) u += N(l = l.value, t, n, s = r + _(l, c++), i);
                else if ("object" === l) throw t = "" + e, Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
                return u
            }

            function I(e, t, n) {
                if (null == e) return e;
                var r = [],
                    o = 0;
                return N(e, r, "", "", (function (e) {
                    return t.call(n, e, o++)
                })), r
            }

            function P(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    t = t(), e._status = 0, e._result = t, t.then((function (t) {
                        0 === e._status && (t = t.default, e._status = 1, e._result = t)
                    }), (function (t) {
                        0 === e._status && (e._status = 2, e._result = t)
                    }))
                }
                if (1 === e._status) return e._result;
                throw e._result
            }
            var O = {
                current: null
            };

            function D() {
                var e = O.current;
                if (null === e) throw Error(p(321));
                return e
            }
            var R = {
                ReactCurrentDispatcher: O,
                ReactCurrentBatchConfig: {
                    transition: 0
                },
                ReactCurrentOwner: w,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: r
            };
            t.Children = {
                map: I,
                forEach: function (e, t, n) {
                    I(e, (function () {
                        t.apply(this, arguments)
                    }), n)
                },
                count: function (e) {
                    var t = 0;
                    return I(e, (function () {
                        t++
                    })), t
                },
                toArray: function (e) {
                    return I(e, (function (e) {
                        return e
                    })) || []
                },
                only: function (e) {
                    if (!k(e)) throw Error(p(143));
                    return e
                }
            }, t.Component = h, t.PureComponent = b, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R, t.cloneElement = function (e, t, n) {
                if (null === e || void 0 === e) throw Error(p(267, e));
                var a = r({}, e.props),
                    i = e.key,
                    l = e.ref,
                    u = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (l = t.ref, u = w.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
                    for (s in t) x.call(t, s) && !C.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s])
                }
                var s = arguments.length - 2;
                if (1 === s) a.children = n;
                else if (1 < s) {
                    c = Array(s);
                    for (var d = 0; d < s; d++) c[d] = arguments[d + 2];
                    a.children = c
                }
                return {
                    $$typeof: o,
                    type: e.type,
                    key: i,
                    ref: l,
                    props: a,
                    _owner: u
                }
            }, t.createContext = function (e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: l,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: i,
                    _context: e
                }, e.Consumer = e
            }, t.createElement = S, t.createFactory = function (e) {
                var t = S.bind(null, e);
                return t.type = e, t
            }, t.createRef = function () {
                return {
                    current: null
                }
            }, t.forwardRef = function (e) {
                return {
                    $$typeof: u,
                    render: e
                }
            }, t.isValidElement = k, t.lazy = function (e) {
                return {
                    $$typeof: s,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: P
                }
            }, t.memo = function (e, t) {
                return {
                    $$typeof: c,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, t.useCallback = function (e, t) {
                return D().useCallback(e, t)
            }, t.useContext = function (e, t) {
                return D().useContext(e, t)
            }, t.useDebugValue = function () { }, t.useEffect = function (e, t) {
                return D().useEffect(e, t)
            }, t.useImperativeHandle = function (e, t, n) {
                return D().useImperativeHandle(e, t, n)
            }, t.useLayoutEffect = function (e, t) {
                return D().useLayoutEffect(e, t)
            }, t.useMemo = function (e, t) {
                return D().useMemo(e, t)
            }, t.useReducer = function (e, t, n) {
                return D().useReducer(e, t, n)
            }, t.useRef = function (e) {
                return D().useRef(e)
            }, t.useState = function (e) {
                return D().useState(e)
            }, t.version = "17.0.2"
        },
        791: function (e, t, n) {
            "use strict";
            e.exports = n(117)
        },
        184: function (e, t, n) {
            "use strict";
            e.exports = n(374)
        },
        727: function (e) {
            var t = function (e) {
                "use strict";
                var t, n = Object.prototype,
                    r = n.hasOwnProperty,
                    o = "function" === typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    i = o.asyncIterator || "@@asyncIterator",
                    l = o.toStringTag || "@@toStringTag";

                function u(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    u({}, "")
                } catch (D) {
                    u = function (e, t, n) {
                        return e[t] = n
                    }
                }

                function c(e, t, n, r) {
                    var o = t && t.prototype instanceof h ? t : h,
                        a = Object.create(o.prototype),
                        i = new I(r || []);
                    return a._invoke = function (e, t, n) {
                        var r = d;
                        return function (o, a) {
                            if (r === p) throw new Error("Generator is already running");
                            if (r === g) {
                                if ("throw" === o) throw a;
                                return O()
                            }
                            for (n.method = o, n.arg = a; ;) {
                                var i = n.delegate;
                                if (i) {
                                    var l = E(i, n);
                                    if (l) {
                                        if (l === m) continue;
                                        return l
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (r === d) throw r = g, n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = p;
                                var u = s(e, t, n);
                                if ("normal" === u.type) {
                                    if (r = n.done ? g : f, u.arg === m) continue;
                                    return {
                                        value: u.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === u.type && (r = g, n.method = "throw", n.arg = u.arg)
                            }
                        }
                    }(e, n, i), a
                }

                function s(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (D) {
                        return {
                            type: "throw",
                            arg: D
                        }
                    }
                }
                e.wrap = c;
                var d = "suspendedStart",
                    f = "suspendedYield",
                    p = "executing",
                    g = "completed",
                    m = {};

                function h() { }

                function v() { }

                function b() { }
                var y = {};
                u(y, a, (function () {
                    return this
                }));
                var w = Object.getPrototypeOf,
                    x = w && w(w(P([])));
                x && x !== n && r.call(x, a) && (y = x);
                var C = b.prototype = h.prototype = Object.create(y);

                function S(e) {
                    ["next", "throw", "return"].forEach((function (t) {
                        u(e, t, (function (e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function k(e, t) {
                    function n(o, a, i, l) {
                        var u = s(e[o], e, a);
                        if ("throw" !== u.type) {
                            var c = u.arg,
                                d = c.value;
                            return d && "object" === typeof d && r.call(d, "__await") ? t.resolve(d.__await).then((function (e) {
                                n("next", e, i, l)
                            }), (function (e) {
                                n("throw", e, i, l)
                            })) : t.resolve(d).then((function (e) {
                                c.value = e, i(c)
                            }), (function (e) {
                                return n("throw", e, i, l)
                            }))
                        }
                        l(u.arg)
                    }
                    var o;
                    this._invoke = function (e, r) {
                        function a() {
                            return new t((function (t, o) {
                                n(e, r, t, o)
                            }))
                        }
                        return o = o ? o.then(a, a) : a()
                    }
                }

                function E(e, n) {
                    var r = e.iterator[n.method];
                    if (r === t) {
                        if (n.delegate = null, "throw" === n.method) {
                            if (e.iterator.return && (n.method = "return", n.arg = t, E(e, n), "throw" === n.method)) return m;
                            n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return m
                    }
                    var o = s(r, e.iterator, n.arg);
                    if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, m;
                    var a = o.arg;
                    return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, m) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, m)
                }

                function _(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function N(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function I(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(_, this), this.reset(!0)
                }

                function P(e) {
                    if (e) {
                        var n = e[a];
                        if (n) return n.call(e);
                        if ("function" === typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                i = function n() {
                                    for (; ++o < e.length;)
                                        if (r.call(e, o)) return n.value = e[o], n.done = !1, n;
                                    return n.value = t, n.done = !0, n
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: t,
                        done: !0
                    }
                }
                return v.prototype = b, u(C, "constructor", b), u(b, "constructor", v), v.displayName = u(b, l, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                    var t = "function" === typeof e && e.constructor;
                    return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, u(e, l, "GeneratorFunction")), e.prototype = Object.create(C), e
                }, e.awrap = function (e) {
                    return {
                        __await: e
                    }
                }, S(k.prototype), u(k.prototype, i, (function () {
                    return this
                })), e.AsyncIterator = k, e.async = function (t, n, r, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new k(c(t, n, r, o), a);
                    return e.isGeneratorFunction(n) ? i : i.next().then((function (e) {
                        return e.done ? e.value : i.next()
                    }))
                }, S(C), u(C, l, "Generator"), u(C, a, (function () {
                    return this
                })), u(C, "toString", (function () {
                    return "[object Generator]"
                })), e.keys = function (e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = P, I.prototype = {
                    constructor: I,
                    reset: function (e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(N), !e)
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function (e) {
                        if (this.done) throw e;
                        var n = this;

                        function o(r, o) {
                            return l.type = "throw", l.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var i = this.tryEntries[a],
                                l = i.completion;
                            if ("root" === i.tryLoc) return o("end");
                            if (i.tryLoc <= this.prev) {
                                var u = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, m) : this.complete(i)
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), N(n), m
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    N(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (e, n, r) {
                        return this.delegate = {
                            iterator: P(e),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = t), m
                    }
                }, e
            }(e.exports);
            try {
                regeneratorRuntime = t
            } catch (n) {
                "object" === typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
            }
        },
        813: function (e, t) {
            "use strict";
            var n, r, o, a;
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var i = performance;
                t.unstable_now = function () {
                    return i.now()
                }
            } else {
                var l = Date,
                    u = l.now();
                t.unstable_now = function () {
                    return l.now() - u
                }
            }
            if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                var c = null,
                    s = null,
                    d = function e() {
                        if (null !== c) try {
                            var n = t.unstable_now();
                            c(!0, n), c = null
                        } catch (r) {
                            throw setTimeout(e, 0), r
                        }
                    };
                n = function (e) {
                    null !== c ? setTimeout(n, 0, e) : (c = e, setTimeout(d, 0))
                }, r = function (e, t) {
                    s = setTimeout(e, t)
                }, o = function () {
                    clearTimeout(s)
                }, t.unstable_shouldYield = function () {
                    return !1
                }, a = t.unstable_forceFrameRate = function () { }
            } else {
                var f = window.setTimeout,
                    p = window.clearTimeout;
                if ("undefined" !== typeof console) {
                    var g = window.cancelAnimationFrame;
                    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), "function" !== typeof g && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
                }
                var m = !1,
                    h = null,
                    v = -1,
                    b = 5,
                    y = 0;
                t.unstable_shouldYield = function () {
                    return t.unstable_now() >= y
                }, a = function () { }, t.unstable_forceFrameRate = function (e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < e ? Math.floor(1e3 / e) : 5
                };
                var w = new MessageChannel,
                    x = w.port2;
                w.port1.onmessage = function () {
                    if (null !== h) {
                        var e = t.unstable_now();
                        y = e + b;
                        try {
                            h(!0, e) ? x.postMessage(null) : (m = !1, h = null)
                        } catch (n) {
                            throw x.postMessage(null), n
                        }
                    } else m = !1
                }, n = function (e) {
                    h = e, m || (m = !0, x.postMessage(null))
                }, r = function (e, n) {
                    v = f((function () {
                        e(t.unstable_now())
                    }), n)
                }, o = function () {
                    p(v), v = -1
                }
            }

            function C(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; ;) {
                    var r = n - 1 >>> 1,
                        o = e[r];
                    if (!(void 0 !== o && 0 < E(o, t))) break e;
                    e[r] = t, e[n] = o, n = r
                }
            }

            function S(e) {
                return void 0 === (e = e[0]) ? null : e
            }

            function k(e) {
                var t = e[0];
                if (void 0 !== t) {
                    var n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, o = e.length; r < o;) {
                            var a = 2 * (r + 1) - 1,
                                i = e[a],
                                l = a + 1,
                                u = e[l];
                            if (void 0 !== i && 0 > E(i, n)) void 0 !== u && 0 > E(u, i) ? (e[r] = u, e[l] = n, r = l) : (e[r] = i, e[a] = n, r = a);
                            else {
                                if (!(void 0 !== u && 0 > E(u, n))) break e;
                                e[r] = u, e[l] = n, r = l
                            }
                        }
                    }
                    return t
                }
                return null
            }

            function E(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            var _ = [],
                N = [],
                I = 1,
                P = null,
                O = 3,
                D = !1,
                R = !1,
                T = !1;

            function A(e) {
                for (var t = S(N); null !== t;) {
                    if (null === t.callback) k(N);
                    else {
                        if (!(t.startTime <= e)) break;
                        k(N), t.sortIndex = t.expirationTime, C(_, t)
                    }
                    t = S(N)
                }
            }

            function j(e) {
                if (T = !1, A(e), !R)
                    if (null !== S(_)) R = !0, n(L);
                    else {
                        var t = S(N);
                        null !== t && r(j, t.startTime - e)
                    }
            }

            function L(e, n) {
                R = !1, T && (T = !1, o()), D = !0;
                var a = O;
                try {
                    for (A(n), P = S(_); null !== P && (!(P.expirationTime > n) || e && !t.unstable_shouldYield());) {
                        var i = P.callback;
                        if ("function" === typeof i) {
                            P.callback = null, O = P.priorityLevel;
                            var l = i(P.expirationTime <= n);
                            n = t.unstable_now(), "function" === typeof l ? P.callback = l : P === S(_) && k(_), A(n)
                        } else k(_);
                        P = S(_)
                    }
                    if (null !== P) var u = !0;
                    else {
                        var c = S(N);
                        null !== c && r(j, c.startTime - n), u = !1
                    }
                    return u
                } finally {
                    P = null, O = a, D = !1
                }
            }
            var M = a;
            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
                e.callback = null
            }, t.unstable_continueExecution = function () {
                R || D || (R = !0, n(L))
            }, t.unstable_getCurrentPriorityLevel = function () {
                return O
            }, t.unstable_getFirstCallbackNode = function () {
                return S(_)
            }, t.unstable_next = function (e) {
                switch (O) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = O
                }
                var n = O;
                O = t;
                try {
                    return e()
                } finally {
                    O = n
                }
            }, t.unstable_pauseExecution = function () { }, t.unstable_requestPaint = M, t.unstable_runWithPriority = function (e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = O;
                O = e;
                try {
                    return t()
                } finally {
                    O = n
                }
            }, t.unstable_scheduleCallback = function (e, a, i) {
                var l = t.unstable_now();
                switch ("object" === typeof i && null !== i ? i = "number" === typeof (i = i.delay) && 0 < i ? l + i : l : i = l, e) {
                    case 1:
                        var u = -1;
                        break;
                    case 2:
                        u = 250;
                        break;
                    case 5:
                        u = 1073741823;
                        break;
                    case 4:
                        u = 1e4;
                        break;
                    default:
                        u = 5e3
                }
                return e = {
                    id: I++,
                    callback: a,
                    priorityLevel: e,
                    startTime: i,
                    expirationTime: u = i + u,
                    sortIndex: -1
                }, i > l ? (e.sortIndex = i, C(N, e), null === S(_) && e === S(N) && (T ? o() : T = !0, r(j, i - l))) : (e.sortIndex = u, C(_, e), R || D || (R = !0, n(L))), e
            }, t.unstable_wrapCallback = function (e) {
                var t = O;
                return function () {
                    var n = O;
                    O = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        O = n
                    }
                }
            }
        },
        296: function (e, t, n) {
            "use strict";
            e.exports = n(813)
        },
        520: function (e, t, n) {
            ! function () {
                var t = n(358),
                    r = n(383).utf8,
                    o = n(383).bin,
                    a = function (e, n) {
                        var a = t.wordsToBytes(function (e) {
                            e.constructor == String ? e = r.stringToBytes(e) : "undefined" !== typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                            var n = t.bytesToWords(e),
                                o = 8 * e.length,
                                a = [],
                                i = 1732584193,
                                l = -271733879,
                                u = -1732584194,
                                c = 271733878,
                                s = -1009589776;
                            n[o >> 5] |= 128 << 24 - o % 32, n[15 + (o + 64 >>> 9 << 4)] = o;
                            for (var d = 0; d < n.length; d += 16) {
                                for (var f = i, p = l, g = u, m = c, h = s, v = 0; v < 80; v++) {
                                    if (v < 16) a[v] = n[d + v];
                                    else {
                                        var b = a[v - 3] ^ a[v - 8] ^ a[v - 14] ^ a[v - 16];
                                        a[v] = b << 1 | b >>> 31
                                    }
                                    var y = (i << 5 | i >>> 27) + s + (a[v] >>> 0) + (v < 20 ? 1518500249 + (l & u | ~l & c) : v < 40 ? 1859775393 + (l ^ u ^ c) : v < 60 ? (l & u | l & c | u & c) - 1894007588 : (l ^ u ^ c) - 899497514);
                                    s = c, c = u, u = l << 30 | l >>> 2, l = i, i = y
                                }
                                i += f, l += p, u += g, c += m, s += h
                            }
                            return [i, l, u, c, s]
                        }(e));
                        return n && n.asBytes ? a : n && n.asString ? o.bytesToString(a) : t.bytesToHex(a)
                    };
                a._blocksize = 16, a._digestsize = 20, e.exports = a
            }()
        },
        613: function (e) {
            e.exports = function (e, t, n, r) {
                var o = n ? n.call(r, e, t) : void 0;
                if (void 0 !== o) return !!o;
                if (e === t) return !0;
                if ("object" !== typeof e || !e || "object" !== typeof t || !t) return !1;
                var a = Object.keys(e),
                    i = Object.keys(t);
                if (a.length !== i.length) return !1;
                for (var l = Object.prototype.hasOwnProperty.bind(t), u = 0; u < a.length; u++) {
                    var c = a[u];
                    if (!l(c)) return !1;
                    var s = e[c],
                        d = t[c];
                    if (!1 === (o = n ? n.call(r, s, d, c) : void 0) || void 0 === o && s !== d) return !1
                }
                return !0
            }
        }
    },
        t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var a = t[r] = {
            exports: {}
        };
        return e[r](a, a.exports, n), a.exports
    }
    n.m = e, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, {
            a: t
        }), t
    }, n.d = function (e, t) {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.f = {}, n.e = function (e) {
        return Promise.all(Object.keys(n.f).reduce((function (t, r) {
            return n.f[r](e, t), t
        }), []))
    }, n.u = function (e) {
        return "static/js/" + e + ".0a419d92.chunk.js"
    }, n.miniCssF = function (e) { }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
        function () {
            var e = {},
                t = "22__worldcup-predictor:";
            n.l = function (r, o, a, i) {
                if (e[r]) e[r].push(o);
                else {
                    var l, u;
                    if (void 0 !== a)
                        for (var c = document.getElementsByTagName("script"), s = 0; s < c.length; s++) {
                            var d = c[s];
                            if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == t + a) {
                                l = d;
                                break
                            }
                        }
                    l || (u = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, n.nc && l.setAttribute("nonce", n.nc), l.setAttribute("data-webpack", t + a), l.src = r), e[r] = [o];
                    var f = function (t, n) {
                        l.onerror = l.onload = null, clearTimeout(p);
                        var o = e[r];
                        if (delete e[r], l.parentNode && l.parentNode.removeChild(l), o && o.forEach((function (e) {
                            return e(n)
                        })), t) return t(n)
                    },
                        p = setTimeout(f.bind(null, void 0, {
                            type: "timeout",
                            target: l
                        }), 12e4);
                    l.onerror = f.bind(null, l.onerror), l.onload = f.bind(null, l.onload), u && document.head.appendChild(l)
                }
            }
        }(), n.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.p = "https://cf.eip.telegraph.co.uk/embeds/22__worldcup-predictor/",
        function () {
            var e = {
                179: 0
            };
            n.f.j = function (t, r) {
                var o = n.o(e, t) ? e[t] : void 0;
                if (0 !== o)
                    if (o) r.push(o[2]);
                    else {
                        var a = new Promise((function (n, r) {
                            o = e[t] = [n, r]
                        }));
                        r.push(o[2] = a);
                        var i = n.p + n.u(t),
                            l = new Error;
                        n.l(i, (function (r) {
                            if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                                var a = r && ("load" === r.type ? "missing" : r.type),
                                    i = r && r.target && r.target.src;
                                l.message = "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")", l.name = "ChunkLoadError", l.type = a, l.request = i, o[1](l)
                            }
                        }), "chunk-" + t, t)
                    }
            };
            var t = function (t, r) {
                var o, a, i = r[0],
                    l = r[1],
                    u = r[2],
                    c = 0;
                if (i.some((function (t) {
                    return 0 !== e[t]
                }))) {
                    for (o in l) n.o(l, o) && (n.m[o] = l[o]);
                    if (u) u(n)
                }
                for (t && t(r); c < i.length; c++) a = i[c], n.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
                r = self.webpackChunk_22_worldcup_predictor = self.webpackChunk_22_worldcup_predictor || [];
            r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        }(),
        function () {
            "use strict";
            var e = n(791),
                t = n(164);

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                if (e) {
                    if ("string" === typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                }
            }

            function i(e) {
                return function (e) {
                    if (Array.isArray(e)) return o(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || a(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function (t) {
                        r(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function c(e, t, n, r, o, a, i) {
                try {
                    var l = e[a](i),
                        u = l.value
                } catch (c) {
                    return void n(c)
                }
                l.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function s(e) {
                return function () {
                    var t = this,
                        n = arguments;
                    return new Promise((function (r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            c(a, r, o, i, l, "next", e)
                        }

                        function l(e) {
                            c(a, r, o, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function d(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
                        } catch (u) {
                            l = !0, o = u
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || a(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = n(757),
                p = n.n(f);

            function g(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function m(e, t) {
                return m = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, m(e, t)
            }

            function h(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, m(e, t)
            }

            function v() {
                return v = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, v.apply(this, arguments)
            }

            function b(e) {
                return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
            }
            var y = "function" === typeof Symbol && Symbol.observable || "@@observable",
                w = function () {
                    return Math.random().toString(36).substring(7).split("").join(".")
                },
                x = {
                    INIT: "@@redux/INIT" + w(),
                    REPLACE: "@@redux/REPLACE" + w(),
                    PROBE_UNKNOWN_ACTION: function () {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + w()
                    }
                };

            function C(e) {
                if ("object" !== typeof e || null === e) return !1;
                for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            }

            function S(e, t, n) {
                var r;
                if ("function" === typeof t && "function" === typeof n || "function" === typeof n && "function" === typeof arguments[3]) throw new Error(b(0));
                if ("function" === typeof t && "undefined" === typeof n && (n = t, t = void 0), "undefined" !== typeof n) {
                    if ("function" !== typeof n) throw new Error(b(1));
                    return n(S)(e, t)
                }
                if ("function" !== typeof e) throw new Error(b(2));
                var o = e,
                    a = t,
                    i = [],
                    l = i,
                    u = !1;

                function c() {
                    l === i && (l = i.slice())
                }

                function s() {
                    if (u) throw new Error(b(3));
                    return a
                }

                function d(e) {
                    if ("function" !== typeof e) throw new Error(b(4));
                    if (u) throw new Error(b(5));
                    var t = !0;
                    return c(), l.push(e),
                        function () {
                            if (t) {
                                if (u) throw new Error(b(6));
                                t = !1, c();
                                var n = l.indexOf(e);
                                l.splice(n, 1), i = null
                            }
                        }
                }

                function f(e) {
                    if (!C(e)) throw new Error(b(7));
                    if ("undefined" === typeof e.type) throw new Error(b(8));
                    if (u) throw new Error(b(9));
                    try {
                        u = !0, a = o(a, e)
                    } finally {
                        u = !1
                    }
                    for (var t = i = l, n = 0; n < t.length; n++) {
                        (0, t[n])()
                    }
                    return e
                }

                function p(e) {
                    if ("function" !== typeof e) throw new Error(b(10));
                    o = e, f({
                        type: x.REPLACE
                    })
                }

                function g() {
                    var e, t = d;
                    return (e = {
                        subscribe: function (e) {
                            if ("object" !== typeof e || null === e) throw new Error(b(11));

                            function n() {
                                e.next && e.next(s())
                            }
                            return n(), {
                                unsubscribe: t(n)
                            }
                        }
                    })[y] = function () {
                        return this
                    }, e
                }
                return f({
                    type: x.INIT
                }), (r = {
                    dispatch: f,
                    subscribe: d,
                    getState: s,
                    replaceReducer: p
                })[y] = g, r
            }

            function k(e, t) {
                return function () {
                    return t(e.apply(this, arguments))
                }
            }

            function E(e, t) {
                if ("function" === typeof e) return k(e, t);
                if ("object" !== typeof e || null === e) throw new Error(b(16));
                var n = {};
                for (var r in e) {
                    var o = e[r];
                    "function" === typeof o && (n[r] = k(o, t))
                }
                return n
            }

            function _() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return 0 === t.length ? function (e) {
                    return e
                } : 1 === t.length ? t[0] : t.reduce((function (e, t) {
                    return function () {
                        return e(t.apply(void 0, arguments))
                    }
                }))
            }
            var N = e.createContext(null);
            var I = function (e) {
                e()
            },
                P = function () {
                    return I
                };
            var O = {
                notify: function () { },
                get: function () {
                    return []
                }
            };

            function D(e, t) {
                var n, r = O;

                function o() {
                    i.onStateChange && i.onStateChange()
                }

                function a() {
                    n || (n = t ? t.addNestedSub(o) : e.subscribe(o), r = function () {
                        var e = P(),
                            t = null,
                            n = null;
                        return {
                            clear: function () {
                                t = null, n = null
                            },
                            notify: function () {
                                e((function () {
                                    for (var e = t; e;) e.callback(), e = e.next
                                }))
                            },
                            get: function () {
                                for (var e = [], n = t; n;) e.push(n), n = n.next;
                                return e
                            },
                            subscribe: function (e) {
                                var r = !0,
                                    o = n = {
                                        callback: e,
                                        next: null,
                                        prev: n
                                    };
                                return o.prev ? o.prev.next = o : t = o,
                                    function () {
                                        r && null !== t && (r = !1, o.next ? o.next.prev = o.prev : n = o.prev, o.prev ? o.prev.next = o.next : t = o.next)
                                    }
                            }
                        }
                    }())
                }
                var i = {
                    addNestedSub: function (e) {
                        return a(), r.subscribe(e)
                    },
                    notifyNestedSubs: function () {
                        r.notify()
                    },
                    handleChangeWrapper: o,
                    isSubscribed: function () {
                        return Boolean(n)
                    },
                    trySubscribe: a,
                    tryUnsubscribe: function () {
                        n && (n(), n = void 0, r.clear(), r = O)
                    },
                    getListeners: function () {
                        return r
                    }
                };
                return i
            }
            var R = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? e.useLayoutEffect : e.useEffect;
            var T = function (t) {
                var n = t.store,
                    r = t.context,
                    o = t.children,
                    a = (0, e.useMemo)((function () {
                        var e = D(n);
                        return e.onStateChange = e.notifyNestedSubs, {
                            store: n,
                            subscription: e
                        }
                    }), [n]),
                    i = (0, e.useMemo)((function () {
                        return n.getState()
                    }), [n]);
                R((function () {
                    var e = a.subscription;
                    return e.trySubscribe(), i !== n.getState() && e.notifyNestedSubs(),
                        function () {
                            e.tryUnsubscribe(), e.onStateChange = null
                        }
                }), [a, i]);
                var l = r || N;
                return e.createElement(l.Provider, {
                    value: a
                }, o)
            };

            function A(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }
            var j = n(110),
                L = n.n(j),
                M = n(441),
                B = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"],
                F = ["reactReduxForwardedRef"],
                z = [],
                U = [null, null];

            function G(e, t) {
                var n = e[1];
                return [t.payload, n + 1]
            }

            function W(e, t, n) {
                R((function () {
                    return e.apply(void 0, t)
                }), n)
            }

            function H(e, t, n, r, o, a, i) {
                e.current = r, t.current = o, n.current = !1, a.current && (a.current = null, i())
            }

            function V(e, t, n, r, o, a, i, l, u, c) {
                if (e) {
                    var s = !1,
                        d = null,
                        f = function () {
                            if (!s) {
                                var e, n, f = t.getState();
                                try {
                                    e = r(f, o.current)
                                } catch (p) {
                                    n = p, d = p
                                }
                                n || (d = null), e === a.current ? i.current || u() : (a.current = e, l.current = e, i.current = !0, c({
                                    type: "STORE_UPDATED",
                                    payload: {
                                        error: n
                                    }
                                }))
                            }
                        };
                    n.onStateChange = f, n.trySubscribe(), f();
                    return function () {
                        if (s = !0, n.tryUnsubscribe(), n.onStateChange = null, d) throw d
                    }
                }
            }
            var K = function () {
                return [null, 0]
            };

            function $(t, n) {
                void 0 === n && (n = {});
                var r = n,
                    o = r.getDisplayName,
                    a = void 0 === o ? function (e) {
                        return "ConnectAdvanced(" + e + ")"
                    } : o,
                    i = r.methodName,
                    l = void 0 === i ? "connectAdvanced" : i,
                    u = r.renderCountProp,
                    c = void 0 === u ? void 0 : u,
                    s = r.shouldHandleStateChanges,
                    d = void 0 === s || s,
                    f = r.storeKey,
                    p = void 0 === f ? "store" : f,
                    g = (r.withRef, r.forwardRef),
                    m = void 0 !== g && g,
                    h = r.context,
                    b = void 0 === h ? N : h,
                    y = A(r, B),
                    w = b;
                return function (n) {
                    var r = n.displayName || n.name || "Component",
                        o = a(r),
                        i = v({}, y, {
                            getDisplayName: a,
                            methodName: l,
                            renderCountProp: c,
                            shouldHandleStateChanges: d,
                            storeKey: p,
                            displayName: o,
                            wrappedComponentName: r,
                            WrappedComponent: n
                        }),
                        u = y.pure;
                    var s = u ? e.useMemo : function (e) {
                        return e()
                    };

                    function f(r) {
                        var o = (0, e.useMemo)((function () {
                            var e = r.reactReduxForwardedRef,
                                t = A(r, F);
                            return [r.context, e, t]
                        }), [r]),
                            a = o[0],
                            l = o[1],
                            u = o[2],
                            c = (0, e.useMemo)((function () {
                                return a && a.Consumer && (0, M.isContextConsumer)(e.createElement(a.Consumer, null)) ? a : w
                            }), [a, w]),
                            f = (0, e.useContext)(c),
                            p = Boolean(r.store) && Boolean(r.store.getState) && Boolean(r.store.dispatch);
                        Boolean(f) && Boolean(f.store);
                        var g = p ? r.store : f.store,
                            m = (0, e.useMemo)((function () {
                                return function (e) {
                                    return t(e.dispatch, i)
                                }(g)
                            }), [g]),
                            h = (0, e.useMemo)((function () {
                                if (!d) return U;
                                var e = D(g, p ? null : f.subscription),
                                    t = e.notifyNestedSubs.bind(e);
                                return [e, t]
                            }), [g, p, f]),
                            b = h[0],
                            y = h[1],
                            x = (0, e.useMemo)((function () {
                                return p ? f : v({}, f, {
                                    subscription: b
                                })
                            }), [p, f, b]),
                            C = (0, e.useReducer)(G, z, K),
                            S = C[0][0],
                            k = C[1];
                        if (S && S.error) throw S.error;
                        var E = (0, e.useRef)(),
                            _ = (0, e.useRef)(u),
                            N = (0, e.useRef)(),
                            I = (0, e.useRef)(!1),
                            P = s((function () {
                                return N.current && u === _.current ? N.current : m(g.getState(), u)
                            }), [g, S, u]);
                        W(H, [_, E, I, u, P, N, y]), W(V, [d, g, b, m, _, E, I, N, y, k], [g, b, m]);
                        var O = (0, e.useMemo)((function () {
                            return e.createElement(n, v({}, P, {
                                ref: l
                            }))
                        }), [l, n, P]);
                        return (0, e.useMemo)((function () {
                            return d ? e.createElement(c.Provider, {
                                value: x
                            }, O) : O
                        }), [c, O, x])
                    }
                    var g = u ? e.memo(f) : f;
                    if (g.WrappedComponent = n, g.displayName = f.displayName = o, m) {
                        var h = e.forwardRef((function (t, n) {
                            return e.createElement(g, v({}, t, {
                                reactReduxForwardedRef: n
                            }))
                        }));
                        return h.displayName = o, h.WrappedComponent = n, L()(h, n)
                    }
                    return L()(g, n)
                }
            }

            function q(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t
            }

            function Y(e, t) {
                if (q(e, t)) return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (var o = 0; o < n.length; o++)
                    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !q(e[n[o]], t[n[o]])) return !1;
                return !0
            }

            function Q(e) {
                return function (t, n) {
                    var r = e(t, n);

                    function o() {
                        return r
                    }
                    return o.dependsOnOwnProps = !1, o
                }
            }

            function Z(e) {
                return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length
            }

            function X(e, t) {
                return function (t, n) {
                    n.displayName;
                    var r = function (e, t) {
                        return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e)
                    };
                    return r.dependsOnOwnProps = !0, r.mapToProps = function (t, n) {
                        r.mapToProps = e, r.dependsOnOwnProps = Z(e);
                        var o = r(t, n);
                        return "function" === typeof o && (r.mapToProps = o, r.dependsOnOwnProps = Z(o), o = r(t, n)), o
                    }, r
                }
            }
            var J = [function (e) {
                return "function" === typeof e ? X(e) : void 0
            }, function (e) {
                return e ? void 0 : Q((function (e) {
                    return {
                        dispatch: e
                    }
                }))
            }, function (e) {
                return e && "object" === typeof e ? Q((function (t) {
                    return function (e, t) {
                        var n = {},
                            r = function (r) {
                                var o = e[r];
                                "function" === typeof o && (n[r] = function () {
                                    return t(o.apply(void 0, arguments))
                                })
                            };
                        for (var o in e) r(o);
                        return n
                    }(e, t)
                })) : void 0
            }];
            var ee = [function (e) {
                return "function" === typeof e ? X(e) : void 0
            }, function (e) {
                return e ? void 0 : Q((function () {
                    return {}
                }))
            }];

            function te(e, t, n) {
                return v({}, n, e, t)
            }
            var ne = [function (e) {
                return "function" === typeof e ? function (e) {
                    return function (t, n) {
                        n.displayName;
                        var r, o = n.pure,
                            a = n.areMergedPropsEqual,
                            i = !1;
                        return function (t, n, l) {
                            var u = e(t, n, l);
                            return i ? o && a(u, r) || (r = u) : (i = !0, r = u), r
                        }
                    }
                }(e) : void 0
            }, function (e) {
                return e ? void 0 : function () {
                    return te
                }
            }],
                re = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

            function oe(e, t, n, r) {
                return function (o, a) {
                    return n(e(o, a), t(r, a), a)
                }
            }

            function ae(e, t, n, r, o) {
                var a, i, l, u, c, s = o.areStatesEqual,
                    d = o.areOwnPropsEqual,
                    f = o.areStatePropsEqual,
                    p = !1;

                function g(o, p) {
                    var g = !d(p, i),
                        m = !s(o, a);
                    return a = o, i = p, g && m ? (l = e(a, i), t.dependsOnOwnProps && (u = t(r, i)), c = n(l, u, i)) : g ? (e.dependsOnOwnProps && (l = e(a, i)), t.dependsOnOwnProps && (u = t(r, i)), c = n(l, u, i)) : m ? function () {
                        var t = e(a, i),
                            r = !f(t, l);
                        return l = t, r && (c = n(l, u, i)), c
                    }() : c
                }
                return function (o, s) {
                    return p ? g(o, s) : (l = e(a = o, i = s), u = t(r, i), c = n(l, u, i), p = !0, c)
                }
            }

            function ie(e, t) {
                var n = t.initMapStateToProps,
                    r = t.initMapDispatchToProps,
                    o = t.initMergeProps,
                    a = A(t, re),
                    i = n(e, a),
                    l = r(e, a),
                    u = o(e, a);
                return (a.pure ? ae : oe)(i, l, u, e, a)
            }
            var le = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];

            function ue(e, t, n) {
                for (var r = t.length - 1; r >= 0; r--) {
                    var o = t[r](e);
                    if (o) return o
                }
                return function (t, r) {
                    throw new Error("Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
                }
            }

            function ce(e, t) {
                return e === t
            }

            function se(e) {
                var t = void 0 === e ? {} : e,
                    n = t.connectHOC,
                    r = void 0 === n ? $ : n,
                    o = t.mapStateToPropsFactories,
                    a = void 0 === o ? ee : o,
                    i = t.mapDispatchToPropsFactories,
                    l = void 0 === i ? J : i,
                    u = t.mergePropsFactories,
                    c = void 0 === u ? ne : u,
                    s = t.selectorFactory,
                    d = void 0 === s ? ie : s;
                return function (e, t, n, o) {
                    void 0 === o && (o = {});
                    var i = o,
                        u = i.pure,
                        s = void 0 === u || u,
                        f = i.areStatesEqual,
                        p = void 0 === f ? ce : f,
                        g = i.areOwnPropsEqual,
                        m = void 0 === g ? Y : g,
                        h = i.areStatePropsEqual,
                        b = void 0 === h ? Y : h,
                        y = i.areMergedPropsEqual,
                        w = void 0 === y ? Y : y,
                        x = A(i, le),
                        C = ue(e, a, "mapStateToProps"),
                        S = ue(t, l, "mapDispatchToProps"),
                        k = ue(n, c, "mergeProps");
                    return r(d, v({
                        methodName: "connect",
                        getDisplayName: function (e) {
                            return "Connect(" + e + ")"
                        },
                        shouldHandleStateChanges: Boolean(e),
                        initMapStateToProps: C,
                        initMapDispatchToProps: S,
                        initMergeProps: k,
                        pure: s,
                        areStatesEqual: p,
                        areOwnPropsEqual: m,
                        areStatePropsEqual: b,
                        areMergedPropsEqual: w
                    }, x))
                }
            }
            var de = se();
            var fe;

            function pe(t, n) {
                var r = (0, e.useState)((function () {
                    return {
                        inputs: n,
                        result: t()
                    }
                }))[0],
                    o = (0, e.useRef)(!0),
                    a = (0, e.useRef)(r),
                    i = o.current || Boolean(n && a.current.inputs && function (e, t) {
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < e.length; n++)
                            if (e[n] !== t[n]) return !1;
                        return !0
                    }(n, a.current.inputs)) ? a.current : {
                        inputs: n,
                        result: t()
                    };
                return (0, e.useEffect)((function () {
                    o.current = !1, a.current = i
                }), [i]), i.result
            }
            fe = t.unstable_batchedUpdates, I = fe;
            var ge = pe,
                me = function (e, t) {
                    return pe((function () {
                        return e
                    }), t)
                },
                he = "Invariant failed";
            var ve = function (e) {
                var t = e.top,
                    n = e.right,
                    r = e.bottom,
                    o = e.left;
                return {
                    top: t,
                    right: n,
                    bottom: r,
                    left: o,
                    width: n - o,
                    height: r - t,
                    x: o,
                    y: t,
                    center: {
                        x: (n + o) / 2,
                        y: (r + t) / 2
                    }
                }
            },
                be = function (e, t) {
                    return {
                        top: e.top - t.top,
                        left: e.left - t.left,
                        bottom: e.bottom + t.bottom,
                        right: e.right + t.right
                    }
                },
                ye = function (e, t) {
                    return {
                        top: e.top + t.top,
                        left: e.left + t.left,
                        bottom: e.bottom - t.bottom,
                        right: e.right - t.right
                    }
                },
                we = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                xe = function (e) {
                    var t = e.borderBox,
                        n = e.margin,
                        r = void 0 === n ? we : n,
                        o = e.border,
                        a = void 0 === o ? we : o,
                        i = e.padding,
                        l = void 0 === i ? we : i,
                        u = ve(be(t, r)),
                        c = ve(ye(t, a)),
                        s = ve(ye(c, l));
                    return {
                        marginBox: u,
                        borderBox: ve(t),
                        paddingBox: c,
                        contentBox: s,
                        margin: r,
                        border: a,
                        padding: l
                    }
                },
                Ce = function (e) {
                    var t = e.slice(0, -2);
                    if ("px" !== e.slice(-2)) return 0;
                    var n = Number(t);
                    return isNaN(n) && function (e, t) {
                        if (!e) throw new Error(he)
                    }(!1), n
                },
                Se = function (e, t) {
                    var n, r, o = e.borderBox,
                        a = e.border,
                        i = e.margin,
                        l = e.padding,
                        u = (r = t, {
                            top: (n = o).top + r.y,
                            left: n.left + r.x,
                            bottom: n.bottom + r.y,
                            right: n.right + r.x
                        });
                    return xe({
                        borderBox: u,
                        border: a,
                        margin: i,
                        padding: l
                    })
                },
                ke = function (e, t) {
                    return void 0 === t && (t = {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    }), Se(e, t)
                },
                Ee = function (e, t) {
                    var n = {
                        top: Ce(t.marginTop),
                        right: Ce(t.marginRight),
                        bottom: Ce(t.marginBottom),
                        left: Ce(t.marginLeft)
                    },
                        r = {
                            top: Ce(t.paddingTop),
                            right: Ce(t.paddingRight),
                            bottom: Ce(t.paddingBottom),
                            left: Ce(t.paddingLeft)
                        },
                        o = {
                            top: Ce(t.borderTopWidth),
                            right: Ce(t.borderRightWidth),
                            bottom: Ce(t.borderBottomWidth),
                            left: Ce(t.borderLeftWidth)
                        };
                    return xe({
                        borderBox: e,
                        margin: n,
                        padding: r,
                        border: o
                    })
                },
                _e = function (e) {
                    var t = e.getBoundingClientRect(),
                        n = window.getComputedStyle(e);
                    return Ee(t, n)
                },
                Ne = Number.isNaN || function (e) {
                    return "number" === typeof e && e !== e
                };

            function Ie(e, t) {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++)
                    if (r = e[n], o = t[n], !(r === o || Ne(r) && Ne(o))) return !1;
                var r, o;
                return !0
            }
            var Pe = function (e, t) {
                var n;
                void 0 === t && (t = Ie);
                var r, o = [],
                    a = !1;
                return function () {
                    for (var i = [], l = 0; l < arguments.length; l++) i[l] = arguments[l];
                    return a && n === this && t(i, o) || (r = e.apply(this, i), a = !0, n = this, o = i), r
                }
            },
                Oe = function (e) {
                    var t = [],
                        n = null,
                        r = function () {
                            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                            t = o, n || (n = requestAnimationFrame((function () {
                                n = null, e.apply(void 0, t)
                            })))
                        };
                    return r.cancel = function () {
                        n && (cancelAnimationFrame(n), n = null)
                    }, r
                };

            function De(e, t) { }
            De.bind(null, "warn"), De.bind(null, "error");

            function Re() { }

            function Te(e, t, n) {
                var r = t.map((function (t) {
                    var r = function (e, t) {
                        return v({}, e, {}, t)
                    }(n, t.options);
                    return e.addEventListener(t.eventName, t.fn, r),
                        function () {
                            e.removeEventListener(t.eventName, t.fn, r)
                        }
                }));
                return function () {
                    r.forEach((function (e) {
                        e()
                    }))
                }
            }
            var Ae = "Invariant failed";

            function je(e) {
                this.message = e
            }

            function Le(e, t) {
                if (!e) throw new je(Ae)
            }
            je.prototype.toString = function () {
                return this.message
            };
            var Me = function (e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (t = e.call.apply(e, [this].concat(r)) || this).callbacks = null, t.unbind = Re, t.onWindowError = function (e) {
                        var n = t.getCallbacks();
                        n.isDragging() && n.tryAbort(), e.error instanceof je && e.preventDefault()
                    }, t.getCallbacks = function () {
                        if (!t.callbacks) throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
                        return t.callbacks
                    }, t.setCallbacks = function (e) {
                        t.callbacks = e
                    }, t
                }
                h(t, e);
                var n = t.prototype;
                return n.componentDidMount = function () {
                    this.unbind = Te(window, [{
                        eventName: "error",
                        fn: this.onWindowError
                    }])
                }, n.componentDidCatch = function (e) {
                    if (!(e instanceof je)) throw e;
                    this.setState({})
                }, n.componentWillUnmount = function () {
                    this.unbind()
                }, n.render = function () {
                    return this.props.children(this.setCallbacks)
                }, t
            }(e.Component),
                Be = function (e) {
                    return e + 1
                },
                Fe = function (e, t) {
                    var n = e.droppableId === t.droppableId,
                        r = Be(e.index),
                        o = Be(t.index);
                    return n ? "\n      You have moved the item from position " + r + "\n      to position " + o + "\n    " : "\n    You have moved the item from position " + r + "\n    in list " + e.droppableId + "\n    to list " + t.droppableId + "\n    in position " + o + "\n  "
                },
                ze = function (e, t, n) {
                    return t.droppableId === n.droppableId ? "\n      The item " + e + "\n      has been combined with " + n.draggableId : "\n      The item " + e + "\n      in list " + t.droppableId + "\n      has been combined with " + n.draggableId + "\n      in list " + n.droppableId + "\n    "
                },
                Ue = function (e) {
                    return "\n  The item has returned to its starting position\n  of " + Be(e.index) + "\n"
                },
                Ge = "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n",
                We = function (e) {
                    return "\n  You have lifted an item in position " + Be(e.source.index) + "\n"
                },
                He = function (e) {
                    var t = e.destination;
                    if (t) return Fe(e.source, t);
                    var n = e.combine;
                    return n ? ze(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on"
                },
                Ve = function (e) {
                    if ("CANCEL" === e.reason) return "\n      Movement cancelled.\n      " + Ue(e.source) + "\n    ";
                    var t = e.destination,
                        n = e.combine;
                    return t ? "\n      You have dropped the item.\n      " + Fe(e.source, t) + "\n    " : n ? "\n      You have dropped the item.\n      " + ze(e.draggableId, e.source, n) + "\n    " : "\n    The item has been dropped while not over a drop area.\n    " + Ue(e.source) + "\n  "
                },
                Ke = {
                    x: 0,
                    y: 0
                },
                $e = function (e, t) {
                    return {
                        x: e.x + t.x,
                        y: e.y + t.y
                    }
                },
                qe = function (e, t) {
                    return {
                        x: e.x - t.x,
                        y: e.y - t.y
                    }
                },
                Ye = function (e, t) {
                    return e.x === t.x && e.y === t.y
                },
                Qe = function (e) {
                    return {
                        x: 0 !== e.x ? -e.x : 0,
                        y: 0 !== e.y ? -e.y : 0
                    }
                },
                Ze = function (e, t, n) {
                    var r;
                    return void 0 === n && (n = 0), (r = {})[e] = t, r["x" === e ? "y" : "x"] = n, r
                },
                Xe = function (e, t) {
                    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                },
                Je = function (e, t) {
                    return Math.min.apply(Math, t.map((function (t) {
                        return Xe(e, t)
                    })))
                },
                et = function (e) {
                    return function (t) {
                        return {
                            x: e(t.x),
                            y: e(t.y)
                        }
                    }
                },
                tt = function (e, t) {
                    return {
                        top: e.top + t.y,
                        left: e.left + t.x,
                        bottom: e.bottom + t.y,
                        right: e.right + t.x
                    }
                },
                nt = function (e) {
                    return [{
                        x: e.left,
                        y: e.top
                    }, {
                        x: e.right,
                        y: e.top
                    }, {
                        x: e.left,
                        y: e.bottom
                    }, {
                        x: e.right,
                        y: e.bottom
                    }]
                },
                rt = function (e, t) {
                    return t && t.shouldClipSubject ? function (e, t) {
                        var n = ve({
                            top: Math.max(t.top, e.top),
                            right: Math.min(t.right, e.right),
                            bottom: Math.min(t.bottom, e.bottom),
                            left: Math.max(t.left, e.left)
                        });
                        return n.width <= 0 || n.height <= 0 ? null : n
                    }(t.pageMarginBox, e) : ve(e)
                },
                ot = function (e) {
                    var t = e.page,
                        n = e.withPlaceholder,
                        r = e.axis,
                        o = e.frame,
                        a = function (e, t) {
                            return t ? tt(e, t.scroll.diff.displacement) : e
                        }(t.marginBox, o),
                        i = function (e, t, n) {
                            var r;
                            return n && n.increasedBy ? v({}, e, ((r = {})[t.end] = e[t.end] + n.increasedBy[t.line], r)) : e
                        }(a, r, n);
                    return {
                        page: t,
                        withPlaceholder: n,
                        active: rt(i, o)
                    }
                },
                at = function (e, t) {
                    e.frame || Le(!1);
                    var n = e.frame,
                        r = qe(t, n.scroll.initial),
                        o = Qe(r),
                        a = v({}, n, {
                            scroll: {
                                initial: n.scroll.initial,
                                current: t,
                                diff: {
                                    value: r,
                                    displacement: o
                                },
                                max: n.scroll.max
                            }
                        });
                    return v({}, e, {
                        frame: a,
                        subject: ot({
                            page: e.subject.page,
                            withPlaceholder: e.subject.withPlaceholder,
                            axis: e.axis,
                            frame: a
                        })
                    })
                };

            function it(e) {
                return Object.values ? Object.values(e) : Object.keys(e).map((function (t) {
                    return e[t]
                }))
            }

            function lt(e, t) {
                if (e.findIndex) return e.findIndex(t);
                for (var n = 0; n < e.length; n++)
                    if (t(e[n])) return n;
                return -1
            }

            function ut(e, t) {
                if (e.find) return e.find(t);
                var n = lt(e, t);
                return -1 !== n ? e[n] : void 0
            }

            function ct(e) {
                return Array.prototype.slice.call(e)
            }
            var st = Pe((function (e) {
                return e.reduce((function (e, t) {
                    return e[t.descriptor.id] = t, e
                }), {})
            })),
                dt = Pe((function (e) {
                    return e.reduce((function (e, t) {
                        return e[t.descriptor.id] = t, e
                    }), {})
                })),
                ft = Pe((function (e) {
                    return it(e)
                })),
                pt = Pe((function (e) {
                    return it(e)
                })),
                gt = Pe((function (e, t) {
                    var n = pt(t).filter((function (t) {
                        return e === t.descriptor.droppableId
                    })).sort((function (e, t) {
                        return e.descriptor.index - t.descriptor.index
                    }));
                    return n
                }));

            function mt(e) {
                return e.at && "REORDER" === e.at.type ? e.at.destination : null
            }

            function ht(e) {
                return e.at && "COMBINE" === e.at.type ? e.at.combine : null
            }
            var vt = Pe((function (e, t) {
                return t.filter((function (t) {
                    return t.descriptor.id !== e.descriptor.id
                }))
            })),
                bt = function (e, t) {
                    return e.descriptor.droppableId === t.descriptor.id
                },
                yt = {
                    point: Ke,
                    value: 0
                },
                wt = {
                    invisible: {},
                    visible: {},
                    all: []
                },
                xt = {
                    displaced: wt,
                    displacedBy: yt,
                    at: null
                },
                Ct = function (e, t) {
                    return function (n) {
                        return e <= n && n <= t
                    }
                },
                St = function (e) {
                    var t = Ct(e.top, e.bottom),
                        n = Ct(e.left, e.right);
                    return function (r) {
                        if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right)) return !0;
                        var o = t(r.top) || t(r.bottom),
                            a = n(r.left) || n(r.right);
                        if (o && a) return !0;
                        var i = r.top < e.top && r.bottom > e.bottom,
                            l = r.left < e.left && r.right > e.right;
                        return !(!i || !l) || (i && a || l && o)
                    }
                },
                kt = function (e) {
                    var t = Ct(e.top, e.bottom),
                        n = Ct(e.left, e.right);
                    return function (e) {
                        return t(e.top) && t(e.bottom) && n(e.left) && n(e.right)
                    }
                },
                Et = {
                    direction: "vertical",
                    line: "y",
                    crossAxisLine: "x",
                    start: "top",
                    end: "bottom",
                    size: "height",
                    crossAxisStart: "left",
                    crossAxisEnd: "right",
                    crossAxisSize: "width"
                },
                _t = {
                    direction: "horizontal",
                    line: "x",
                    crossAxisLine: "y",
                    start: "left",
                    end: "right",
                    size: "width",
                    crossAxisStart: "top",
                    crossAxisEnd: "bottom",
                    crossAxisSize: "height"
                },
                Nt = function (e) {
                    var t = e.target,
                        n = e.destination,
                        r = e.viewport,
                        o = e.withDroppableDisplacement,
                        a = e.isVisibleThroughFrameFn,
                        i = o ? function (e, t) {
                            var n = t.frame ? t.frame.scroll.diff.displacement : Ke;
                            return tt(e, n)
                        }(t, n) : t;
                    return function (e, t, n) {
                        return !!t.subject.active && n(t.subject.active)(e)
                    }(i, n, a) && function (e, t, n) {
                        return n(t)(e)
                    }(i, r, a)
                },
                It = function (e) {
                    return Nt(v({}, e, {
                        isVisibleThroughFrameFn: St
                    }))
                },
                Pt = function (e) {
                    return Nt(v({}, e, {
                        isVisibleThroughFrameFn: kt
                    }))
                };

            function Ot(e) {
                var t = e.afterDragging,
                    n = e.destination,
                    r = e.displacedBy,
                    o = e.viewport,
                    a = e.forceShouldAnimate,
                    i = e.last;
                return t.reduce((function (e, t) {
                    var l = function (e, t) {
                        var n = e.page.marginBox,
                            r = {
                                top: t.point.y,
                                right: 0,
                                bottom: 0,
                                left: t.point.x
                            };
                        return ve(be(n, r))
                    }(t, r),
                        u = t.descriptor.id;
                    if (e.all.push(u), !It({
                        target: l,
                        destination: n,
                        viewport: o,
                        withDroppableDisplacement: !0
                    })) return e.invisible[t.descriptor.id] = !0, e;
                    var c = function (e, t, n) {
                        if ("boolean" === typeof n) return n;
                        if (!t) return !0;
                        var r = t.invisible,
                            o = t.visible;
                        if (r[e]) return !1;
                        var a = o[e];
                        return !a || a.shouldAnimate
                    }(u, i, a),
                        s = {
                            draggableId: u,
                            shouldAnimate: c
                        };
                    return e.visible[u] = s, e
                }), {
                    all: [],
                    visible: {},
                    invisible: {}
                })
            }

            function Dt(e) {
                var t = e.insideDestination,
                    n = e.inHomeList,
                    r = e.displacedBy,
                    o = e.destination,
                    a = function (e, t) {
                        if (!e.length) return 0;
                        var n = e[e.length - 1].descriptor.index;
                        return t.inHomeList ? n : n + 1
                    }(t, {
                        inHomeList: n
                    });
                return {
                    displaced: wt,
                    displacedBy: r,
                    at: {
                        type: "REORDER",
                        destination: {
                            droppableId: o.descriptor.id,
                            index: a
                        }
                    }
                }
            }

            function Rt(e) {
                var t = e.draggable,
                    n = e.insideDestination,
                    r = e.destination,
                    o = e.viewport,
                    a = e.displacedBy,
                    i = e.last,
                    l = e.index,
                    u = e.forceShouldAnimate,
                    c = bt(t, r);
                if (null == l) return Dt({
                    insideDestination: n,
                    inHomeList: c,
                    displacedBy: a,
                    destination: r
                });
                var s = ut(n, (function (e) {
                    return e.descriptor.index === l
                }));
                if (!s) return Dt({
                    insideDestination: n,
                    inHomeList: c,
                    displacedBy: a,
                    destination: r
                });
                var d = vt(t, n),
                    f = n.indexOf(s);
                return {
                    displaced: Ot({
                        afterDragging: d.slice(f),
                        destination: r,
                        displacedBy: a,
                        last: i,
                        viewport: o.frame,
                        forceShouldAnimate: u
                    }),
                    displacedBy: a,
                    at: {
                        type: "REORDER",
                        destination: {
                            droppableId: r.descriptor.id,
                            index: l
                        }
                    }
                }
            }

            function Tt(e, t) {
                return Boolean(t.effected[e])
            }
            var At = function (e) {
                var t = e.isMovingForward,
                    n = e.isInHomeList,
                    r = e.draggable,
                    o = e.draggables,
                    a = e.destination,
                    i = e.insideDestination,
                    l = e.previousImpact,
                    u = e.viewport,
                    c = e.afterCritical,
                    s = l.at;
                if (s || Le(!1), "REORDER" === s.type) {
                    var d = function (e) {
                        var t = e.isMovingForward,
                            n = e.isInHomeList,
                            r = e.insideDestination,
                            o = e.location;
                        if (!r.length) return null;
                        var a = o.index,
                            i = t ? a + 1 : a - 1,
                            l = r[0].descriptor.index,
                            u = r[r.length - 1].descriptor.index;
                        return i < l || i > (n ? u : u + 1) ? null : i
                    }({
                        isMovingForward: t,
                        isInHomeList: n,
                        location: s.destination,
                        insideDestination: i
                    });
                    return null == d ? null : Rt({
                        draggable: r,
                        insideDestination: i,
                        destination: a,
                        viewport: u,
                        last: l.displaced,
                        displacedBy: l.displacedBy,
                        index: d
                    })
                }
                var f = function (e) {
                    var t = e.isMovingForward,
                        n = e.destination,
                        r = e.draggables,
                        o = e.combine,
                        a = e.afterCritical;
                    if (!n.isCombineEnabled) return null;
                    var i = o.draggableId,
                        l = r[i].descriptor.index;
                    return Tt(i, a) ? t ? l : l - 1 : t ? l + 1 : l
                }({
                    isMovingForward: t,
                    destination: a,
                    displaced: l.displaced,
                    draggables: o,
                    combine: s.combine,
                    afterCritical: c
                });
                return null == f ? null : Rt({
                    draggable: r,
                    insideDestination: i,
                    destination: a,
                    viewport: u,
                    last: l.displaced,
                    displacedBy: l.displacedBy,
                    index: f
                })
            },
                jt = function (e) {
                    var t = e.afterCritical,
                        n = e.impact,
                        r = e.draggables,
                        o = ht(n);
                    o || Le(!1);
                    var a = o.draggableId,
                        i = r[a].page.borderBox.center,
                        l = function (e) {
                            var t = e.displaced,
                                n = e.afterCritical,
                                r = e.combineWith,
                                o = e.displacedBy,
                                a = Boolean(t.visible[r] || t.invisible[r]);
                            return Tt(r, n) ? a ? Ke : Qe(o.point) : a ? o.point : Ke
                        }({
                            displaced: n.displaced,
                            afterCritical: t,
                            combineWith: a,
                            displacedBy: n.displacedBy
                        });
                    return $e(i, l)
                },
                Lt = function (e, t) {
                    return t.margin[e.start] + t.borderBox[e.size] / 2
                },
                Mt = function (e, t, n) {
                    return t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2
                },
                Bt = function (e) {
                    var t = e.axis,
                        n = e.moveRelativeTo,
                        r = e.isMoving;
                    return Ze(t.line, n.marginBox[t.end] + Lt(t, r), Mt(t, n.marginBox, r))
                },
                Ft = function (e) {
                    var t = e.axis,
                        n = e.moveRelativeTo,
                        r = e.isMoving;
                    return Ze(t.line, n.marginBox[t.start] - function (e, t) {
                        return t.margin[e.end] + t.borderBox[e.size] / 2
                    }(t, r), Mt(t, n.marginBox, r))
                },
                zt = function (e) {
                    var t = e.impact,
                        n = e.draggable,
                        r = e.draggables,
                        o = e.droppable,
                        a = e.afterCritical,
                        i = gt(o.descriptor.id, r),
                        l = n.page,
                        u = o.axis;
                    if (!i.length) return function (e) {
                        var t = e.axis,
                            n = e.moveInto,
                            r = e.isMoving;
                        return Ze(t.line, n.contentBox[t.start] + Lt(t, r), Mt(t, n.contentBox, r))
                    }({
                        axis: u,
                        moveInto: o.page,
                        isMoving: l
                    });
                    var c = t.displaced,
                        s = t.displacedBy,
                        d = c.all[0];
                    if (d) {
                        var f = r[d];
                        if (Tt(d, a)) return Ft({
                            axis: u,
                            moveRelativeTo: f.page,
                            isMoving: l
                        });
                        var p = Se(f.page, s.point);
                        return Ft({
                            axis: u,
                            moveRelativeTo: p,
                            isMoving: l
                        })
                    }
                    var g = i[i.length - 1];
                    if (g.descriptor.id === n.descriptor.id) return l.borderBox.center;
                    if (Tt(g.descriptor.id, a)) {
                        var m = Se(g.page, Qe(a.displacedBy.point));
                        return Bt({
                            axis: u,
                            moveRelativeTo: m,
                            isMoving: l
                        })
                    }
                    return Bt({
                        axis: u,
                        moveRelativeTo: g.page,
                        isMoving: l
                    })
                },
                Ut = function (e, t) {
                    var n = e.frame;
                    return n ? $e(t, n.scroll.diff.displacement) : t
                },
                Gt = function (e) {
                    var t = function (e) {
                        var t = e.impact,
                            n = e.draggable,
                            r = e.droppable,
                            o = e.draggables,
                            a = e.afterCritical,
                            i = n.page.borderBox.center,
                            l = t.at;
                        return r && l ? "REORDER" === l.type ? zt({
                            impact: t,
                            draggable: n,
                            draggables: o,
                            droppable: r,
                            afterCritical: a
                        }) : jt({
                            impact: t,
                            draggables: o,
                            afterCritical: a
                        }) : i
                    }(e),
                        n = e.droppable;
                    return n ? Ut(n, t) : t
                },
                Wt = function (e, t) {
                    var n = qe(t, e.scroll.initial),
                        r = Qe(n);
                    return {
                        frame: ve({
                            top: t.y,
                            bottom: t.y + e.frame.height,
                            left: t.x,
                            right: t.x + e.frame.width
                        }),
                        scroll: {
                            initial: e.scroll.initial,
                            max: e.scroll.max,
                            current: t,
                            diff: {
                                value: n,
                                displacement: r
                            }
                        }
                    }
                };

            function Ht(e, t) {
                return e.map((function (e) {
                    return t[e]
                }))
            }
            var Vt = function (e) {
                var t = e.pageBorderBoxCenter,
                    n = e.draggable,
                    r = function (e, t) {
                        return $e(e.scroll.diff.displacement, t)
                    }(e.viewport, t),
                    o = qe(r, n.page.borderBox.center);
                return $e(n.client.borderBox.center, o)
            },
                Kt = function (e) {
                    var t = e.draggable,
                        n = e.destination,
                        r = e.newPageBorderBoxCenter,
                        o = e.viewport,
                        a = e.withDroppableDisplacement,
                        i = e.onlyOnMainAxis,
                        l = void 0 !== i && i,
                        u = qe(r, t.page.borderBox.center),
                        c = {
                            target: tt(t.page.borderBox, u),
                            destination: n,
                            withDroppableDisplacement: a,
                            viewport: o
                        };
                    return l ? function (e) {
                        return Nt(v({}, e, {
                            isVisibleThroughFrameFn: (t = e.destination.axis, function (e) {
                                var n = Ct(e.top, e.bottom),
                                    r = Ct(e.left, e.right);
                                return function (e) {
                                    return t === Et ? n(e.top) && n(e.bottom) : r(e.left) && r(e.right)
                                }
                            })
                        }));
                        var t
                    }(c) : Pt(c)
                },
                $t = function (e) {
                    var t = e.isMovingForward,
                        n = e.draggable,
                        r = e.destination,
                        o = e.draggables,
                        a = e.previousImpact,
                        i = e.viewport,
                        l = e.previousPageBorderBoxCenter,
                        u = e.previousClientSelection,
                        c = e.afterCritical;
                    if (!r.isEnabled) return null;
                    var s = gt(r.descriptor.id, o),
                        d = bt(n, r),
                        f = function (e) {
                            var t = e.isMovingForward,
                                n = e.draggable,
                                r = e.destination,
                                o = e.insideDestination,
                                a = e.previousImpact;
                            if (!r.isCombineEnabled) return null;
                            if (!mt(a)) return null;

                            function i(e) {
                                var t = {
                                    type: "COMBINE",
                                    combine: {
                                        draggableId: e,
                                        droppableId: r.descriptor.id
                                    }
                                };
                                return v({}, a, {
                                    at: t
                                })
                            }
                            var l = a.displaced.all,
                                u = l.length ? l[0] : null;
                            if (t) return u ? i(u) : null;
                            var c = vt(n, o);
                            if (!u) return c.length ? i(c[c.length - 1].descriptor.id) : null;
                            var s = lt(c, (function (e) {
                                return e.descriptor.id === u
                            })); - 1 === s && Le(!1);
                            var d = s - 1;
                            return d < 0 ? null : i(c[d].descriptor.id)
                        }({
                            isMovingForward: t,
                            draggable: n,
                            destination: r,
                            insideDestination: s,
                            previousImpact: a
                        }) || At({
                            isMovingForward: t,
                            isInHomeList: d,
                            draggable: n,
                            draggables: o,
                            destination: r,
                            insideDestination: s,
                            previousImpact: a,
                            viewport: i,
                            afterCritical: c
                        });
                    if (!f) return null;
                    var p = Gt({
                        impact: f,
                        draggable: n,
                        droppable: r,
                        draggables: o,
                        afterCritical: c
                    });
                    if (Kt({
                        draggable: n,
                        destination: r,
                        newPageBorderBoxCenter: p,
                        viewport: i.frame,
                        withDroppableDisplacement: !1,
                        onlyOnMainAxis: !0
                    })) return {
                        clientSelection: Vt({
                            pageBorderBoxCenter: p,
                            draggable: n,
                            viewport: i
                        }),
                        impact: f,
                        scrollJumpRequest: null
                    };
                    var g = qe(p, l),
                        m = function (e) {
                            var t = e.impact,
                                n = e.viewport,
                                r = e.destination,
                                o = e.draggables,
                                a = e.maxScrollChange,
                                i = Wt(n, $e(n.scroll.current, a)),
                                l = r.frame ? at(r, $e(r.frame.scroll.current, a)) : r,
                                u = t.displaced,
                                c = Ot({
                                    afterDragging: Ht(u.all, o),
                                    destination: r,
                                    displacedBy: t.displacedBy,
                                    viewport: i.frame,
                                    last: u,
                                    forceShouldAnimate: !1
                                }),
                                s = Ot({
                                    afterDragging: Ht(u.all, o),
                                    destination: l,
                                    displacedBy: t.displacedBy,
                                    viewport: n.frame,
                                    last: u,
                                    forceShouldAnimate: !1
                                }),
                                d = {},
                                f = {},
                                p = [u, c, s];
                            return u.all.forEach((function (e) {
                                var t = function (e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n].visible[e];
                                        if (r) return r
                                    }
                                    return null
                                }(e, p);
                                t ? f[e] = t : d[e] = !0
                            })), v({}, t, {
                                displaced: {
                                    all: u.all,
                                    invisible: d,
                                    visible: f
                                }
                            })
                        }({
                            impact: f,
                            viewport: i,
                            destination: r,
                            draggables: o,
                            maxScrollChange: g
                        });
                    return {
                        clientSelection: u,
                        impact: m,
                        scrollJumpRequest: g
                    }
                },
                qt = function (e) {
                    var t = e.subject.active;
                    return t || Le(!1), t
                },
                Yt = function (e, t) {
                    var n = e.page.borderBox.center;
                    return Tt(e.descriptor.id, t) ? qe(n, t.displacedBy.point) : n
                },
                Qt = function (e, t) {
                    var n = e.page.borderBox;
                    return Tt(e.descriptor.id, t) ? tt(n, Qe(t.displacedBy.point)) : n
                },
                Zt = Pe((function (e, t) {
                    var n = t[e.line];
                    return {
                        value: n,
                        point: Ze(e.line, n)
                    }
                })),
                Xt = function (e, t) {
                    return v({}, e, {
                        scroll: v({}, e.scroll, {
                            max: t
                        })
                    })
                },
                Jt = function (e, t, n) {
                    var r = e.frame;
                    bt(t, e) && Le(!1), e.subject.withPlaceholder && Le(!1);
                    var o = Zt(e.axis, t.displaceBy).point,
                        a = function (e, t, n) {
                            var r = e.axis;
                            if ("virtual" === e.descriptor.mode) return Ze(r.line, t[r.line]);
                            var o = e.subject.page.contentBox[r.size],
                                a = gt(e.descriptor.id, n).reduce((function (e, t) {
                                    return e + t.client.marginBox[r.size]
                                }), 0) + t[r.line] - o;
                            return a <= 0 ? null : Ze(r.line, a)
                        }(e, o, n),
                        i = {
                            placeholderSize: o,
                            increasedBy: a,
                            oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
                        };
                    if (!r) return v({}, e, {
                        subject: ot({
                            page: e.subject.page,
                            withPlaceholder: i,
                            axis: e.axis,
                            frame: e.frame
                        })
                    });
                    var l = a ? $e(r.scroll.max, a) : r.scroll.max,
                        u = Xt(r, l);
                    return v({}, e, {
                        subject: ot({
                            page: e.subject.page,
                            withPlaceholder: i,
                            axis: e.axis,
                            frame: u
                        }),
                        frame: u
                    })
                },
                en = function (e) {
                    var t = e.isMovingForward,
                        n = e.previousPageBorderBoxCenter,
                        r = e.draggable,
                        o = e.isOver,
                        a = e.draggables,
                        i = e.droppables,
                        l = e.viewport,
                        u = e.afterCritical,
                        c = function (e) {
                            var t = e.isMovingForward,
                                n = e.pageBorderBoxCenter,
                                r = e.source,
                                o = e.droppables,
                                a = e.viewport,
                                i = r.subject.active;
                            if (!i) return null;
                            var l = r.axis,
                                u = Ct(i[l.start], i[l.end]),
                                c = ft(o).filter((function (e) {
                                    return e !== r
                                })).filter((function (e) {
                                    return e.isEnabled
                                })).filter((function (e) {
                                    return Boolean(e.subject.active)
                                })).filter((function (e) {
                                    return St(a.frame)(qt(e))
                                })).filter((function (e) {
                                    var n = qt(e);
                                    return t ? i[l.crossAxisEnd] < n[l.crossAxisEnd] : n[l.crossAxisStart] < i[l.crossAxisStart]
                                })).filter((function (e) {
                                    var t = qt(e),
                                        n = Ct(t[l.start], t[l.end]);
                                    return u(t[l.start]) || u(t[l.end]) || n(i[l.start]) || n(i[l.end])
                                })).sort((function (e, n) {
                                    var r = qt(e)[l.crossAxisStart],
                                        o = qt(n)[l.crossAxisStart];
                                    return t ? r - o : o - r
                                })).filter((function (e, t, n) {
                                    return qt(e)[l.crossAxisStart] === qt(n[0])[l.crossAxisStart]
                                }));
                            if (!c.length) return null;
                            if (1 === c.length) return c[0];
                            var s = c.filter((function (e) {
                                return Ct(qt(e)[l.start], qt(e)[l.end])(n[l.line])
                            }));
                            return 1 === s.length ? s[0] : s.length > 1 ? s.sort((function (e, t) {
                                return qt(e)[l.start] - qt(t)[l.start]
                            }))[0] : c.sort((function (e, t) {
                                var r = Je(n, nt(qt(e))),
                                    o = Je(n, nt(qt(t)));
                                return r !== o ? r - o : qt(e)[l.start] - qt(t)[l.start]
                            }))[0]
                        }({
                            isMovingForward: t,
                            pageBorderBoxCenter: n,
                            source: o,
                            droppables: i,
                            viewport: l
                        });
                    if (!c) return null;
                    var s = gt(c.descriptor.id, a),
                        d = function (e) {
                            var t = e.pageBorderBoxCenter,
                                n = e.viewport,
                                r = e.destination,
                                o = e.insideDestination,
                                a = e.afterCritical,
                                i = o.filter((function (e) {
                                    return Pt({
                                        target: Qt(e, a),
                                        destination: r,
                                        viewport: n.frame,
                                        withDroppableDisplacement: !0
                                    })
                                })).sort((function (e, n) {
                                    var o = Xe(t, Ut(r, Yt(e, a))),
                                        i = Xe(t, Ut(r, Yt(n, a)));
                                    return o < i ? -1 : i < o ? 1 : e.descriptor.index - n.descriptor.index
                                }));
                            return i[0] || null
                        }({
                            pageBorderBoxCenter: n,
                            viewport: l,
                            destination: c,
                            insideDestination: s,
                            afterCritical: u
                        }),
                        f = function (e) {
                            var t = e.previousPageBorderBoxCenter,
                                n = e.moveRelativeTo,
                                r = e.insideDestination,
                                o = e.draggable,
                                a = e.draggables,
                                i = e.destination,
                                l = e.viewport,
                                u = e.afterCritical;
                            if (!n) {
                                if (r.length) return null;
                                var c = {
                                    displaced: wt,
                                    displacedBy: yt,
                                    at: {
                                        type: "REORDER",
                                        destination: {
                                            droppableId: i.descriptor.id,
                                            index: 0
                                        }
                                    }
                                },
                                    s = Gt({
                                        impact: c,
                                        draggable: o,
                                        droppable: i,
                                        draggables: a,
                                        afterCritical: u
                                    }),
                                    d = bt(o, i) ? i : Jt(i, o, a);
                                return Kt({
                                    draggable: o,
                                    destination: d,
                                    newPageBorderBoxCenter: s,
                                    viewport: l.frame,
                                    withDroppableDisplacement: !1,
                                    onlyOnMainAxis: !0
                                }) ? c : null
                            }
                            var f = Boolean(t[i.axis.line] <= n.page.borderBox.center[i.axis.line]),
                                p = function () {
                                    var e = n.descriptor.index;
                                    return n.descriptor.id === o.descriptor.id || f ? e : e + 1
                                }(),
                                g = Zt(i.axis, o.displaceBy);
                            return Rt({
                                draggable: o,
                                insideDestination: r,
                                destination: i,
                                viewport: l,
                                displacedBy: g,
                                last: wt,
                                index: p
                            })
                        }({
                            previousPageBorderBoxCenter: n,
                            destination: c,
                            draggable: r,
                            draggables: a,
                            moveRelativeTo: d,
                            insideDestination: s,
                            viewport: l,
                            afterCritical: u
                        });
                    if (!f) return null;
                    var p = Gt({
                        impact: f,
                        draggable: r,
                        droppable: c,
                        draggables: a,
                        afterCritical: u
                    });
                    return {
                        clientSelection: Vt({
                            pageBorderBoxCenter: p,
                            draggable: r,
                            viewport: l
                        }),
                        impact: f,
                        scrollJumpRequest: null
                    }
                },
                tn = function (e) {
                    var t = e.at;
                    return t ? "REORDER" === t.type ? t.destination.droppableId : t.combine.droppableId : null
                },
                nn = function (e) {
                    var t = e.state,
                        n = e.type,
                        r = function (e, t) {
                            var n = tn(e);
                            return n ? t[n] : null
                        }(t.impact, t.dimensions.droppables),
                        o = Boolean(r),
                        a = t.dimensions.droppables[t.critical.droppable.id],
                        i = r || a,
                        l = i.axis.direction,
                        u = "vertical" === l && ("MOVE_UP" === n || "MOVE_DOWN" === n) || "horizontal" === l && ("MOVE_LEFT" === n || "MOVE_RIGHT" === n);
                    if (u && !o) return null;
                    var c = "MOVE_DOWN" === n || "MOVE_RIGHT" === n,
                        s = t.dimensions.draggables[t.critical.draggable.id],
                        d = t.current.page.borderBoxCenter,
                        f = t.dimensions,
                        p = f.draggables,
                        g = f.droppables;
                    return u ? $t({
                        isMovingForward: c,
                        previousPageBorderBoxCenter: d,
                        draggable: s,
                        destination: i,
                        draggables: p,
                        viewport: t.viewport,
                        previousClientSelection: t.current.client.selection,
                        previousImpact: t.impact,
                        afterCritical: t.afterCritical
                    }) : en({
                        isMovingForward: c,
                        previousPageBorderBoxCenter: d,
                        draggable: s,
                        isOver: i,
                        draggables: p,
                        droppables: g,
                        viewport: t.viewport,
                        afterCritical: t.afterCritical
                    })
                };

            function rn(e) {
                return "DRAGGING" === e.phase || "COLLECTING" === e.phase
            }

            function on(e) {
                var t = Ct(e.top, e.bottom),
                    n = Ct(e.left, e.right);
                return function (e) {
                    return t(e.y) && n(e.x)
                }
            }

            function an(e) {
                var t = e.pageBorderBox,
                    n = e.draggable,
                    r = e.droppables,
                    o = ft(r).filter((function (e) {
                        if (!e.isEnabled) return !1;
                        var n, r, o = e.subject.active;
                        if (!o) return !1;
                        if (r = o, !((n = t).left < r.right && n.right > r.left && n.top < r.bottom && n.bottom > r.top)) return !1;
                        if (on(o)(t.center)) return !0;
                        var a = e.axis,
                            i = o.center[a.crossAxisLine],
                            l = t[a.crossAxisStart],
                            u = t[a.crossAxisEnd],
                            c = Ct(o[a.crossAxisStart], o[a.crossAxisEnd]),
                            s = c(l),
                            d = c(u);
                        return !s && !d || (s ? l < i : u > i)
                    }));
                return o.length ? 1 === o.length ? o[0].descriptor.id : function (e) {
                    var t = e.pageBorderBox,
                        n = e.draggable,
                        r = e.candidates,
                        o = n.page.borderBox.center,
                        a = r.map((function (e) {
                            var n = e.axis,
                                r = Ze(e.axis.line, t.center[n.line], e.page.borderBox.center[n.crossAxisLine]);
                            return {
                                id: e.descriptor.id,
                                distance: Xe(o, r)
                            }
                        })).sort((function (e, t) {
                            return t.distance - e.distance
                        }));
                    return a[0] ? a[0].id : null
                }({
                    pageBorderBox: t,
                    draggable: n,
                    candidates: o
                }) : null
            }
            var ln = function (e, t) {
                return ve(tt(e, t))
            };

            function un(e) {
                var t = e.displaced,
                    n = e.id;
                return Boolean(t.visible[n] || t.invisible[n])
            }
            var cn = function (e) {
                var t = e.pageOffset,
                    n = e.draggable,
                    r = e.draggables,
                    o = e.droppables,
                    a = e.previousImpact,
                    i = e.viewport,
                    l = e.afterCritical,
                    u = ln(n.page.borderBox, t),
                    c = an({
                        pageBorderBox: u,
                        draggable: n,
                        droppables: o
                    });
                if (!c) return xt;
                var s = o[c],
                    d = gt(s.descriptor.id, r),
                    f = function (e, t) {
                        var n = e.frame;
                        return n ? ln(t, n.scroll.diff.value) : t
                    }(s, u);
                return function (e) {
                    var t = e.draggable,
                        n = e.pageBorderBoxWithDroppableScroll,
                        r = e.previousImpact,
                        o = e.destination,
                        a = e.insideDestination,
                        i = e.afterCritical;
                    if (!o.isCombineEnabled) return null;
                    var l = o.axis,
                        u = Zt(o.axis, t.displaceBy),
                        c = u.value,
                        s = n[l.start],
                        d = n[l.end],
                        f = ut(vt(t, a), (function (e) {
                            var t = e.descriptor.id,
                                n = e.page.borderBox,
                                o = n[l.size] / 4,
                                a = Tt(t, i),
                                u = un({
                                    displaced: r.displaced,
                                    id: t
                                });
                            return a ? u ? d > n[l.start] + o && d < n[l.end] - o : s > n[l.start] - c + o && s < n[l.end] - c - o : u ? d > n[l.start] + c + o && d < n[l.end] + c - o : s > n[l.start] + o && s < n[l.end] - o
                        }));
                    return f ? {
                        displacedBy: u,
                        displaced: r.displaced,
                        at: {
                            type: "COMBINE",
                            combine: {
                                draggableId: f.descriptor.id,
                                droppableId: o.descriptor.id
                            }
                        }
                    } : null
                }({
                    pageBorderBoxWithDroppableScroll: f,
                    draggable: n,
                    previousImpact: a,
                    destination: s,
                    insideDestination: d,
                    afterCritical: l
                }) || function (e) {
                    var t = e.pageBorderBoxWithDroppableScroll,
                        n = e.draggable,
                        r = e.destination,
                        o = e.insideDestination,
                        a = e.last,
                        i = e.viewport,
                        l = e.afterCritical,
                        u = r.axis,
                        c = Zt(r.axis, n.displaceBy),
                        s = c.value,
                        d = t[u.start],
                        f = t[u.end],
                        p = function (e) {
                            var t = e.draggable,
                                n = e.closest,
                                r = e.inHomeList;
                            return n ? r && n.descriptor.index > t.descriptor.index ? n.descriptor.index - 1 : n.descriptor.index : null
                        }({
                            draggable: n,
                            closest: ut(vt(n, o), (function (e) {
                                var t = e.descriptor.id,
                                    n = e.page.borderBox.center[u.line],
                                    r = Tt(t, l),
                                    o = un({
                                        displaced: a,
                                        id: t
                                    });
                                return r ? o ? f <= n : d < n - s : o ? f <= n + s : d < n
                            })),
                            inHomeList: bt(n, r)
                        });
                    return Rt({
                        draggable: n,
                        insideDestination: o,
                        destination: r,
                        viewport: i,
                        last: a,
                        displacedBy: c,
                        index: p
                    })
                }({
                    pageBorderBoxWithDroppableScroll: f,
                    draggable: n,
                    destination: s,
                    insideDestination: d,
                    last: a.displaced,
                    viewport: i,
                    afterCritical: l
                })
            },
                sn = function (e, t) {
                    var n;
                    return v({}, e, ((n = {})[t.descriptor.id] = t, n))
                },
                dn = function (e) {
                    var t = e.previousImpact,
                        n = e.impact,
                        r = e.droppables,
                        o = tn(t),
                        a = tn(n);
                    if (!o) return r;
                    if (o === a) return r;
                    var i = r[o];
                    if (!i.subject.withPlaceholder) return r;
                    var l = function (e) {
                        var t = e.subject.withPlaceholder;
                        t || Le(!1);
                        var n = e.frame;
                        if (!n) return v({}, e, {
                            subject: ot({
                                page: e.subject.page,
                                axis: e.axis,
                                frame: null,
                                withPlaceholder: null
                            })
                        });
                        var r = t.oldFrameMaxScroll;
                        r || Le(!1);
                        var o = Xt(n, r);
                        return v({}, e, {
                            subject: ot({
                                page: e.subject.page,
                                axis: e.axis,
                                frame: o,
                                withPlaceholder: null
                            }),
                            frame: o
                        })
                    }(i);
                    return sn(r, l)
                },
                fn = function (e) {
                    var t = e.state,
                        n = e.clientSelection,
                        r = e.dimensions,
                        o = e.viewport,
                        a = e.impact,
                        i = e.scrollJumpRequest,
                        l = o || t.viewport,
                        u = r || t.dimensions,
                        c = n || t.current.client.selection,
                        s = qe(c, t.initial.client.selection),
                        d = {
                            offset: s,
                            selection: c,
                            borderBoxCenter: $e(t.initial.client.borderBoxCenter, s)
                        },
                        f = {
                            selection: $e(d.selection, l.scroll.current),
                            borderBoxCenter: $e(d.borderBoxCenter, l.scroll.current),
                            offset: $e(d.offset, l.scroll.diff.value)
                        },
                        p = {
                            client: d,
                            page: f
                        };
                    if ("COLLECTING" === t.phase) return v({
                        phase: "COLLECTING"
                    }, t, {
                        dimensions: u,
                        viewport: l,
                        current: p
                    });
                    var g = u.draggables[t.critical.draggable.id],
                        m = a || cn({
                            pageOffset: f.offset,
                            draggable: g,
                            draggables: u.draggables,
                            droppables: u.droppables,
                            previousImpact: t.impact,
                            viewport: l,
                            afterCritical: t.afterCritical
                        }),
                        h = function (e) {
                            var t = e.draggable,
                                n = e.draggables,
                                r = e.droppables,
                                o = e.previousImpact,
                                a = e.impact,
                                i = dn({
                                    previousImpact: o,
                                    impact: a,
                                    droppables: r
                                }),
                                l = tn(a);
                            if (!l) return i;
                            var u = r[l];
                            if (bt(t, u)) return i;
                            if (u.subject.withPlaceholder) return i;
                            var c = Jt(u, t, n);
                            return sn(i, c)
                        }({
                            draggable: g,
                            impact: m,
                            previousImpact: t.impact,
                            draggables: u.draggables,
                            droppables: u.droppables
                        });
                    return v({}, t, {
                        current: p,
                        dimensions: {
                            draggables: u.draggables,
                            droppables: h
                        },
                        impact: m,
                        viewport: l,
                        scrollJumpRequest: i || null,
                        forceShouldAnimate: !i && null
                    })
                };
            var pn = function (e) {
                var t = e.impact,
                    n = e.viewport,
                    r = e.draggables,
                    o = e.destination,
                    a = e.forceShouldAnimate,
                    i = t.displaced,
                    l = function (e, t) {
                        return e.map((function (e) {
                            return t[e]
                        }))
                    }(i.all, r);
                return v({}, t, {
                    displaced: Ot({
                        afterDragging: l,
                        destination: o,
                        displacedBy: t.displacedBy,
                        viewport: n.frame,
                        forceShouldAnimate: a,
                        last: i
                    })
                })
            },
                gn = function (e) {
                    var t = e.impact,
                        n = e.draggable,
                        r = e.droppable,
                        o = e.draggables,
                        a = e.viewport,
                        i = e.afterCritical,
                        l = Gt({
                            impact: t,
                            draggable: n,
                            draggables: o,
                            droppable: r,
                            afterCritical: i
                        });
                    return Vt({
                        pageBorderBoxCenter: l,
                        draggable: n,
                        viewport: a
                    })
                },
                mn = function (e) {
                    var t = e.state,
                        n = e.dimensions,
                        r = e.viewport;
                    "SNAP" !== t.movementMode && Le(!1);
                    var o = t.impact,
                        a = r || t.viewport,
                        i = n || t.dimensions,
                        l = i.draggables,
                        u = i.droppables,
                        c = l[t.critical.draggable.id],
                        s = tn(o);
                    s || Le(!1);
                    var d = u[s],
                        f = pn({
                            impact: o,
                            viewport: a,
                            destination: d,
                            draggables: l
                        }),
                        p = gn({
                            impact: f,
                            draggable: c,
                            droppable: d,
                            draggables: l,
                            viewport: a,
                            afterCritical: t.afterCritical
                        });
                    return fn({
                        impact: f,
                        clientSelection: p,
                        state: t,
                        dimensions: i,
                        viewport: a
                    })
                },
                hn = function (e) {
                    var t = e.draggable,
                        n = e.home,
                        r = e.draggables,
                        o = e.viewport,
                        a = Zt(n.axis, t.displaceBy),
                        i = gt(n.descriptor.id, r),
                        l = i.indexOf(t); - 1 === l && Le(!1);
                    var u, c = i.slice(l + 1),
                        s = c.reduce((function (e, t) {
                            return e[t.descriptor.id] = !0, e
                        }), {}),
                        d = {
                            inVirtualList: "virtual" === n.descriptor.mode,
                            displacedBy: a,
                            effected: s
                        };
                    return {
                        impact: {
                            displaced: Ot({
                                afterDragging: c,
                                destination: n,
                                displacedBy: a,
                                last: null,
                                viewport: o.frame,
                                forceShouldAnimate: !1
                            }),
                            displacedBy: a,
                            at: {
                                type: "REORDER",
                                destination: (u = t.descriptor, {
                                    index: u.index,
                                    droppableId: u.droppableId
                                })
                            }
                        },
                        afterCritical: d
                    }
                },
                vn = function (e) {
                    0
                },
                bn = function (e) {
                    0
                },
                yn = function (e) {
                    var t = e.additions,
                        n = e.updatedDroppables,
                        r = e.viewport,
                        o = r.scroll.diff.value;
                    return t.map((function (e) {
                        var t = e.descriptor.droppableId,
                            a = function (e) {
                                var t = e.frame;
                                return t || Le(!1), t
                            }(n[t]),
                            i = a.scroll.diff.value,
                            l = function (e) {
                                var t = e.draggable,
                                    n = e.offset,
                                    r = e.initialWindowScroll,
                                    o = Se(t.client, n),
                                    a = ke(o, r);
                                return v({}, t, {
                                    placeholder: v({}, t.placeholder, {
                                        client: o
                                    }),
                                    client: o,
                                    page: a
                                })
                            }({
                                draggable: e,
                                offset: $e(o, i),
                                initialWindowScroll: r.scroll.initial
                            });
                        return l
                    }))
                },
                wn = function (e) {
                    return "SNAP" === e.movementMode
                },
                xn = function (e, t, n) {
                    var r = function (e, t) {
                        return {
                            draggables: e.draggables,
                            droppables: sn(e.droppables, t)
                        }
                    }(e.dimensions, t);
                    return !wn(e) || n ? fn({
                        state: e,
                        dimensions: r
                    }) : mn({
                        state: e,
                        dimensions: r
                    })
                };

            function Cn(e) {
                return e.isDragging && "SNAP" === e.movementMode ? v({
                    phase: "DRAGGING"
                }, e, {
                    scrollJumpRequest: null
                }) : e
            }
            var Sn = {
                phase: "IDLE",
                completed: null,
                shouldFlush: !1
            },
                kn = function (e, t) {
                    if (void 0 === e && (e = Sn), "FLUSH" === t.type) return v({}, Sn, {
                        shouldFlush: !0
                    });
                    if ("INITIAL_PUBLISH" === t.type) {
                        "IDLE" !== e.phase && Le(!1);
                        var n = t.payload,
                            r = n.critical,
                            o = n.clientSelection,
                            a = n.viewport,
                            i = n.dimensions,
                            l = n.movementMode,
                            u = i.draggables[r.draggable.id],
                            c = i.droppables[r.droppable.id],
                            s = {
                                selection: o,
                                borderBoxCenter: u.client.borderBox.center,
                                offset: Ke
                            },
                            d = {
                                client: s,
                                page: {
                                    selection: $e(s.selection, a.scroll.initial),
                                    borderBoxCenter: $e(s.selection, a.scroll.initial),
                                    offset: $e(s.selection, a.scroll.diff.value)
                                }
                            },
                            f = ft(i.droppables).every((function (e) {
                                return !e.isFixedOnPage
                            })),
                            p = hn({
                                draggable: u,
                                home: c,
                                draggables: i.draggables,
                                viewport: a
                            }),
                            g = p.impact;
                        return {
                            phase: "DRAGGING",
                            isDragging: !0,
                            critical: r,
                            movementMode: l,
                            dimensions: i,
                            initial: d,
                            current: d,
                            isWindowScrollAllowed: f,
                            impact: g,
                            afterCritical: p.afterCritical,
                            onLiftImpact: g,
                            viewport: a,
                            scrollJumpRequest: null,
                            forceShouldAnimate: null
                        }
                    }
                    if ("COLLECTION_STARTING" === t.type) return "COLLECTING" === e.phase || "DROP_PENDING" === e.phase ? e : ("DRAGGING" !== e.phase && Le(!1), v({
                        phase: "COLLECTING"
                    }, e, {
                        phase: "COLLECTING"
                    }));
                    if ("PUBLISH_WHILE_DRAGGING" === t.type) return "COLLECTING" !== e.phase && "DROP_PENDING" !== e.phase && Le(!1),
                        function (e) {
                            var t = e.state,
                                n = e.published;
                            vn();
                            var r = n.modified.map((function (e) {
                                var n = t.dimensions.droppables[e.droppableId];
                                return at(n, e.scroll)
                            })),
                                o = v({}, t.dimensions.droppables, {}, st(r)),
                                a = dt(yn({
                                    additions: n.additions,
                                    updatedDroppables: o,
                                    viewport: t.viewport
                                })),
                                i = v({}, t.dimensions.draggables, {}, a);
                            n.removals.forEach((function (e) {
                                delete i[e]
                            }));
                            var l = {
                                droppables: o,
                                draggables: i
                            },
                                u = tn(t.impact),
                                c = u ? l.droppables[u] : null,
                                s = l.draggables[t.critical.draggable.id],
                                d = l.droppables[t.critical.droppable.id],
                                f = hn({
                                    draggable: s,
                                    home: d,
                                    draggables: i,
                                    viewport: t.viewport
                                }),
                                p = f.impact,
                                g = f.afterCritical,
                                m = c && c.isCombineEnabled ? t.impact : p,
                                h = cn({
                                    pageOffset: t.current.page.offset,
                                    draggable: l.draggables[t.critical.draggable.id],
                                    draggables: l.draggables,
                                    droppables: l.droppables,
                                    previousImpact: m,
                                    viewport: t.viewport,
                                    afterCritical: g
                                });
                            bn();
                            var b = v({
                                phase: "DRAGGING"
                            }, t, {
                                phase: "DRAGGING",
                                impact: h,
                                onLiftImpact: p,
                                dimensions: l,
                                afterCritical: g,
                                forceShouldAnimate: !1
                            });
                            return "COLLECTING" === t.phase ? b : v({
                                phase: "DROP_PENDING"
                            }, b, {
                                phase: "DROP_PENDING",
                                reason: t.reason,
                                isWaiting: !1
                            })
                        }({
                            state: e,
                            published: t.payload
                        });
                    if ("MOVE" === t.type) {
                        if ("DROP_PENDING" === e.phase) return e;
                        rn(e) || Le(!1);
                        var m = t.payload.client;
                        return Ye(m, e.current.client.selection) ? e : fn({
                            state: e,
                            clientSelection: m,
                            impact: wn(e) ? e.impact : null
                        })
                    }
                    if ("UPDATE_DROPPABLE_SCROLL" === t.type) {
                        if ("DROP_PENDING" === e.phase) return Cn(e);
                        if ("COLLECTING" === e.phase) return Cn(e);
                        rn(e) || Le(!1);
                        var h = t.payload,
                            b = h.id,
                            y = h.newScroll,
                            w = e.dimensions.droppables[b];
                        if (!w) return e;
                        var x = at(w, y);
                        return xn(e, x, !1)
                    }
                    if ("UPDATE_DROPPABLE_IS_ENABLED" === t.type) {
                        if ("DROP_PENDING" === e.phase) return e;
                        rn(e) || Le(!1);
                        var C = t.payload,
                            S = C.id,
                            k = C.isEnabled,
                            E = e.dimensions.droppables[S];
                        E || Le(!1), E.isEnabled === k && Le(!1);
                        var _ = v({}, E, {
                            isEnabled: k
                        });
                        return xn(e, _, !0)
                    }
                    if ("UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === t.type) {
                        if ("DROP_PENDING" === e.phase) return e;
                        rn(e) || Le(!1);
                        var N = t.payload,
                            I = N.id,
                            P = N.isCombineEnabled,
                            O = e.dimensions.droppables[I];
                        O || Le(!1), O.isCombineEnabled === P && Le(!1);
                        var D = v({}, O, {
                            isCombineEnabled: P
                        });
                        return xn(e, D, !0)
                    }
                    if ("MOVE_BY_WINDOW_SCROLL" === t.type) {
                        if ("DROP_PENDING" === e.phase || "DROP_ANIMATING" === e.phase) return e;
                        rn(e) || Le(!1), e.isWindowScrollAllowed || Le(!1);
                        var R = t.payload.newScroll;
                        if (Ye(e.viewport.scroll.current, R)) return Cn(e);
                        var T = Wt(e.viewport, R);
                        return wn(e) ? mn({
                            state: e,
                            viewport: T
                        }) : fn({
                            state: e,
                            viewport: T
                        })
                    }
                    if ("UPDATE_VIEWPORT_MAX_SCROLL" === t.type) {
                        if (!rn(e)) return e;
                        var A = t.payload.maxScroll;
                        if (Ye(A, e.viewport.scroll.max)) return e;
                        var j = v({}, e.viewport, {
                            scroll: v({}, e.viewport.scroll, {
                                max: A
                            })
                        });
                        return v({
                            phase: "DRAGGING"
                        }, e, {
                            viewport: j
                        })
                    }
                    if ("MOVE_UP" === t.type || "MOVE_DOWN" === t.type || "MOVE_LEFT" === t.type || "MOVE_RIGHT" === t.type) {
                        if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase) return e;
                        "DRAGGING" !== e.phase && Le(!1);
                        var L = nn({
                            state: e,
                            type: t.type
                        });
                        return L ? fn({
                            state: e,
                            impact: L.impact,
                            clientSelection: L.clientSelection,
                            scrollJumpRequest: L.scrollJumpRequest
                        }) : e
                    }
                    if ("DROP_PENDING" === t.type) {
                        var M = t.payload.reason;
                        return "COLLECTING" !== e.phase && Le(!1), v({
                            phase: "DROP_PENDING"
                        }, e, {
                            phase: "DROP_PENDING",
                            isWaiting: !0,
                            reason: M
                        })
                    }
                    if ("DROP_ANIMATE" === t.type) {
                        var B = t.payload,
                            F = B.completed,
                            z = B.dropDuration,
                            U = B.newHomeClientOffset;
                        return "DRAGGING" !== e.phase && "DROP_PENDING" !== e.phase && Le(!1), {
                            phase: "DROP_ANIMATING",
                            completed: F,
                            dropDuration: z,
                            newHomeClientOffset: U,
                            dimensions: e.dimensions
                        }
                    }
                    return "DROP_COMPLETE" === t.type ? {
                        phase: "IDLE",
                        completed: t.payload.completed,
                        shouldFlush: !1
                    } : e
                },
                En = function (e) {
                    return {
                        type: "PUBLISH_WHILE_DRAGGING",
                        payload: e
                    }
                },
                _n = function () {
                    return {
                        type: "COLLECTION_STARTING",
                        payload: null
                    }
                },
                Nn = function (e) {
                    return {
                        type: "UPDATE_DROPPABLE_SCROLL",
                        payload: e
                    }
                },
                In = function (e) {
                    return {
                        type: "UPDATE_DROPPABLE_IS_ENABLED",
                        payload: e
                    }
                },
                Pn = function (e) {
                    return {
                        type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
                        payload: e
                    }
                },
                On = function (e) {
                    return {
                        type: "MOVE",
                        payload: e
                    }
                },
                Dn = function () {
                    return {
                        type: "MOVE_UP",
                        payload: null
                    }
                },
                Rn = function () {
                    return {
                        type: "MOVE_DOWN",
                        payload: null
                    }
                },
                Tn = function () {
                    return {
                        type: "MOVE_RIGHT",
                        payload: null
                    }
                },
                An = function () {
                    return {
                        type: "MOVE_LEFT",
                        payload: null
                    }
                },
                jn = function (e) {
                    return {
                        type: "DROP_COMPLETE",
                        payload: e
                    }
                },
                Ln = function (e) {
                    return {
                        type: "DROP",
                        payload: e
                    }
                },
                Mn = function () {
                    return {
                        type: "DROP_ANIMATION_FINISHED",
                        payload: null
                    }
                };
            var Bn = "cubic-bezier(.2,1,.1,1)",
                Fn = {
                    drop: 0,
                    combining: .7
                },
                zn = {
                    drop: .75
                },
                Un = .2 + "s " + "cubic-bezier(0.2, 0, 0, 1)",
                Gn = {
                    fluid: "opacity " + Un,
                    snap: "transform " + Un + ", opacity " + Un,
                    drop: function (e) {
                        var t = e + "s " + Bn;
                        return "transform " + t + ", opacity " + t
                    },
                    outOfTheWay: "transform " + Un,
                    placeholder: "height " + Un + ", width " + Un + ", margin " + Un
                },
                Wn = function (e) {
                    return Ye(e, Ke) ? null : "translate(" + e.x + "px, " + e.y + "px)"
                },
                Hn = Wn,
                Vn = function (e, t) {
                    var n = Wn(e);
                    return n ? t ? n + " scale(" + zn.drop + ")" : n : null
                },
                Kn = .33,
                $n = .55,
                qn = $n - Kn,
                Yn = function (e) {
                    var t = e.getState,
                        n = e.dispatch;
                    return function (e) {
                        return function (r) {
                            if ("DROP" === r.type) {
                                var o = t(),
                                    a = r.payload.reason;
                                if ("COLLECTING" !== o.phase) {
                                    if ("IDLE" !== o.phase) {
                                        "DROP_PENDING" === o.phase && o.isWaiting && Le(!1), "DRAGGING" !== o.phase && "DROP_PENDING" !== o.phase && Le(!1);
                                        var i = o.critical,
                                            l = o.dimensions,
                                            u = l.draggables[o.critical.draggable.id],
                                            c = function (e) {
                                                var t = e.draggables,
                                                    n = e.reason,
                                                    r = e.lastImpact,
                                                    o = e.home,
                                                    a = e.viewport,
                                                    i = e.onLiftImpact;
                                                return r.at && "DROP" === n ? "REORDER" === r.at.type ? {
                                                    impact: r,
                                                    didDropInsideDroppable: !0
                                                } : {
                                                    impact: v({}, r, {
                                                        displaced: wt
                                                    }),
                                                    didDropInsideDroppable: !0
                                                } : {
                                                    impact: pn({
                                                        draggables: t,
                                                        impact: i,
                                                        destination: o,
                                                        viewport: a,
                                                        forceShouldAnimate: !0
                                                    }),
                                                    didDropInsideDroppable: !1
                                                }
                                            }({
                                                reason: a,
                                                lastImpact: o.impact,
                                                afterCritical: o.afterCritical,
                                                onLiftImpact: o.onLiftImpact,
                                                home: o.dimensions.droppables[o.critical.droppable.id],
                                                viewport: o.viewport,
                                                draggables: o.dimensions.draggables
                                            }),
                                            s = c.impact,
                                            d = c.didDropInsideDroppable,
                                            f = d ? mt(s) : null,
                                            p = d ? ht(s) : null,
                                            g = {
                                                index: i.draggable.index,
                                                droppableId: i.droppable.id
                                            },
                                            m = {
                                                draggableId: u.descriptor.id,
                                                type: u.descriptor.type,
                                                source: g,
                                                reason: a,
                                                mode: o.movementMode,
                                                destination: f,
                                                combine: p
                                            },
                                            h = function (e) {
                                                var t = e.impact,
                                                    n = e.draggable,
                                                    r = e.dimensions,
                                                    o = e.viewport,
                                                    a = e.afterCritical,
                                                    i = r.draggables,
                                                    l = r.droppables,
                                                    u = tn(t),
                                                    c = u ? l[u] : null,
                                                    s = l[n.descriptor.droppableId],
                                                    d = gn({
                                                        impact: t,
                                                        draggable: n,
                                                        draggables: i,
                                                        afterCritical: a,
                                                        droppable: c || s,
                                                        viewport: o
                                                    });
                                                return qe(d, n.client.borderBox.center)
                                            }({
                                                impact: s,
                                                draggable: u,
                                                dimensions: l,
                                                viewport: o.viewport,
                                                afterCritical: o.afterCritical
                                            }),
                                            b = {
                                                critical: o.critical,
                                                afterCritical: o.afterCritical,
                                                result: m,
                                                impact: s
                                            };
                                        if (!Ye(o.current.client.offset, h) || Boolean(m.combine)) {
                                            var y = function (e) {
                                                var t = e.current,
                                                    n = e.destination,
                                                    r = e.reason,
                                                    o = Xe(t, n);
                                                if (o <= 0) return Kn;
                                                if (o >= 1500) return $n;
                                                var a = Kn + qn * (o / 1500);
                                                return Number(("CANCEL" === r ? .6 * a : a).toFixed(2))
                                            }({
                                                current: o.current.client.offset,
                                                destination: h,
                                                reason: a
                                            });
                                            n(function (e) {
                                                return {
                                                    type: "DROP_ANIMATE",
                                                    payload: e
                                                }
                                            }({
                                                newHomeClientOffset: h,
                                                dropDuration: y,
                                                completed: b
                                            }))
                                        } else n(jn({
                                            completed: b
                                        }))
                                    }
                                } else n(function (e) {
                                    return {
                                        type: "DROP_PENDING",
                                        payload: e
                                    }
                                }({
                                    reason: a
                                }))
                            } else e(r)
                        }
                    }
                },
                Qn = function () {
                    return {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    }
                };

            function Zn(e) {
                var t = e.onWindowScroll;
                var n = Oe((function () {
                    t(Qn())
                })),
                    r = function (e) {
                        return {
                            eventName: "scroll",
                            options: {
                                passive: !0,
                                capture: !1
                            },
                            fn: function (t) {
                                t.target !== window && t.target !== window.document || e()
                            }
                        }
                    }(n),
                    o = Re;

                function a() {
                    return o !== Re
                }
                return {
                    start: function () {
                        a() && Le(!1), o = Te(window, [r])
                    },
                    stop: function () {
                        a() || Le(!1), n.cancel(), o(), o = Re
                    },
                    isActive: a
                }
            }
            var Xn = function (e) {
                var t = Zn({
                    onWindowScroll: function (t) {
                        e.dispatch({
                            type: "MOVE_BY_WINDOW_SCROLL",
                            payload: {
                                newScroll: t
                            }
                        })
                    }
                });
                return function (e) {
                    return function (n) {
                        t.isActive() || "INITIAL_PUBLISH" !== n.type || t.start(), t.isActive() && function (e) {
                            return "DROP_COMPLETE" === e.type || "DROP_ANIMATE" === e.type || "FLUSH" === e.type
                        }(n) && t.stop(), e(n)
                    }
                }
            },
                Jn = function () {
                    var e = [];
                    return {
                        add: function (t) {
                            var n = setTimeout((function () {
                                return function (t) {
                                    var n = lt(e, (function (e) {
                                        return e.timerId === t
                                    })); - 1 === n && Le(!1), e.splice(n, 1)[0].callback()
                                }(n)
                            })),
                                r = {
                                    timerId: n,
                                    callback: t
                                };
                            e.push(r)
                        },
                        flush: function () {
                            if (e.length) {
                                var t = [].concat(e);
                                e.length = 0, t.forEach((function (e) {
                                    clearTimeout(e.timerId), e.callback()
                                }))
                            }
                        }
                    }
                },
                er = function (e, t) {
                    vn(), t(), bn()
                },
                tr = function (e, t) {
                    return {
                        draggableId: e.draggable.id,
                        type: e.droppable.type,
                        source: {
                            droppableId: e.droppable.id,
                            index: e.draggable.index
                        },
                        mode: t
                    }
                },
                nr = function (e, t, n, r) {
                    if (e) {
                        var o = function (e) {
                            var t = !1,
                                n = !1,
                                r = setTimeout((function () {
                                    n = !0
                                })),
                                o = function (o) {
                                    t || n || (t = !0, e(o), clearTimeout(r))
                                };
                            return o.wasCalled = function () {
                                return t
                            }, o
                        }(n);
                        e(t, {
                            announce: o
                        }), o.wasCalled() || n(r(t))
                    } else n(r(t))
                },
                rr = function (e, t) {
                    var n = function (e, t) {
                        var n = Jn(),
                            r = null,
                            o = function (n) {
                                r || Le(!1), r = null, er(0, (function () {
                                    return nr(e().onDragEnd, n, t, Ve)
                                }))
                            };
                        return {
                            beforeCapture: function (t, n) {
                                r && Le(!1), er(0, (function () {
                                    var r = e().onBeforeCapture;
                                    r && r({
                                        draggableId: t,
                                        mode: n
                                    })
                                }))
                            },
                            beforeStart: function (t, n) {
                                r && Le(!1), er(0, (function () {
                                    var r = e().onBeforeDragStart;
                                    r && r(tr(t, n))
                                }))
                            },
                            start: function (o, a) {
                                r && Le(!1);
                                var i = tr(o, a);
                                r = {
                                    mode: a,
                                    lastCritical: o,
                                    lastLocation: i.source,
                                    lastCombine: null
                                }, n.add((function () {
                                    er(0, (function () {
                                        return nr(e().onDragStart, i, t, We)
                                    }))
                                }))
                            },
                            update: function (o, a) {
                                var i = mt(a),
                                    l = ht(a);
                                r || Le(!1);
                                var u = ! function (e, t) {
                                    if (e === t) return !0;
                                    var n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index,
                                        r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
                                    return n && r
                                }(o, r.lastCritical);
                                u && (r.lastCritical = o);
                                var c, s, d = (s = i, !(null == (c = r.lastLocation) && null == s || null != c && null != s && c.droppableId === s.droppableId && c.index === s.index));
                                d && (r.lastLocation = i);
                                var f = ! function (e, t) {
                                    return null == e && null == t || null != e && null != t && e.draggableId === t.draggableId && e.droppableId === t.droppableId
                                }(r.lastCombine, l);
                                if (f && (r.lastCombine = l), u || d || f) {
                                    var p = v({}, tr(o, r.mode), {
                                        combine: l,
                                        destination: i
                                    });
                                    n.add((function () {
                                        er(0, (function () {
                                            return nr(e().onDragUpdate, p, t, He)
                                        }))
                                    }))
                                }
                            },
                            flush: function () {
                                r || Le(!1), n.flush()
                            },
                            drop: o,
                            abort: function () {
                                if (r) {
                                    var e = v({}, tr(r.lastCritical, r.mode), {
                                        combine: null,
                                        destination: null,
                                        reason: "CANCEL"
                                    });
                                    o(e)
                                }
                            }
                        }
                    }(e, t);
                    return function (e) {
                        return function (t) {
                            return function (r) {
                                if ("BEFORE_INITIAL_CAPTURE" !== r.type) {
                                    if ("INITIAL_PUBLISH" === r.type) {
                                        var o = r.payload.critical;
                                        return n.beforeStart(o, r.payload.movementMode), t(r), void n.start(o, r.payload.movementMode)
                                    }
                                    if ("DROP_COMPLETE" === r.type) {
                                        var a = r.payload.completed.result;
                                        return n.flush(), t(r), void n.drop(a)
                                    }
                                    if (t(r), "FLUSH" !== r.type) {
                                        var i = e.getState();
                                        "DRAGGING" === i.phase && n.update(i.critical, i.impact)
                                    } else n.abort()
                                } else n.beforeCapture(r.payload.draggableId, r.payload.movementMode)
                            }
                        }
                    }
                },
                or = function (e) {
                    return function (t) {
                        return function (n) {
                            if ("DROP_ANIMATION_FINISHED" === n.type) {
                                var r = e.getState();
                                "DROP_ANIMATING" !== r.phase && Le(!1), e.dispatch(jn({
                                    completed: r.completed
                                }))
                            } else t(n)
                        }
                    }
                },
                ar = function (e) {
                    var t = null,
                        n = null;
                    return function (r) {
                        return function (o) {
                            if ("FLUSH" !== o.type && "DROP_COMPLETE" !== o.type && "DROP_ANIMATION_FINISHED" !== o.type || (n && (cancelAnimationFrame(n), n = null), t && (t(), t = null)), r(o), "DROP_ANIMATE" === o.type) {
                                var a = {
                                    eventName: "scroll",
                                    options: {
                                        capture: !0,
                                        passive: !1,
                                        once: !0
                                    },
                                    fn: function () {
                                        "DROP_ANIMATING" === e.getState().phase && e.dispatch({
                                            type: "DROP_ANIMATION_FINISHED",
                                            payload: null
                                        })
                                    }
                                };
                                n = requestAnimationFrame((function () {
                                    n = null, t = Te(window, [a])
                                }))
                            }
                        }
                    }
                },
                ir = function (e) {
                    return function (t) {
                        return function (n) {
                            if (t(n), "PUBLISH_WHILE_DRAGGING" === n.type) {
                                var r = e.getState();
                                "DROP_PENDING" === r.phase && (r.isWaiting || e.dispatch(Ln({
                                    reason: r.reason
                                })))
                            }
                        }
                    }
                },
                lr = _,
                ur = function (e) {
                    var t, n = e.dimensionMarshal,
                        r = e.focusMarshal,
                        o = e.styleMarshal,
                        a = e.getResponders,
                        i = e.announce,
                        l = e.autoScroller;
                    return S(kn, lr(function () {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function (e) {
                            return function () {
                                var n = e.apply(void 0, arguments),
                                    r = function () {
                                        throw new Error(b(15))
                                    },
                                    o = {
                                        getState: n.getState,
                                        dispatch: function () {
                                            return r.apply(void 0, arguments)
                                        }
                                    },
                                    a = t.map((function (e) {
                                        return e(o)
                                    }));
                                return r = _.apply(void 0, a)(n.dispatch), u(u({}, n), {}, {
                                    dispatch: r
                                })
                            }
                        }
                    }((t = o, function () {
                        return function (e) {
                            return function (n) {
                                "INITIAL_PUBLISH" === n.type && t.dragging(), "DROP_ANIMATE" === n.type && t.dropping(n.payload.completed.result.reason), "FLUSH" !== n.type && "DROP_COMPLETE" !== n.type || t.resting(), e(n)
                            }
                        }
                    }), function (e) {
                        return function () {
                            return function (t) {
                                return function (n) {
                                    "DROP_COMPLETE" !== n.type && "FLUSH" !== n.type && "DROP_ANIMATE" !== n.type || e.stopPublishing(), t(n)
                                }
                            }
                        }
                    }(n), function (e) {
                        return function (t) {
                            var n = t.getState,
                                r = t.dispatch;
                            return function (t) {
                                return function (o) {
                                    if ("LIFT" === o.type) {
                                        var a = o.payload,
                                            i = a.id,
                                            l = a.clientSelection,
                                            u = a.movementMode,
                                            c = n();
                                        "DROP_ANIMATING" === c.phase && r(jn({
                                            completed: c.completed
                                        })), "IDLE" !== n().phase && Le(!1), r({
                                            type: "FLUSH",
                                            payload: null
                                        }), r({
                                            type: "BEFORE_INITIAL_CAPTURE",
                                            payload: {
                                                draggableId: i,
                                                movementMode: u
                                            }
                                        });
                                        var s = {
                                            draggableId: i,
                                            scrollOptions: {
                                                shouldPublishImmediately: "SNAP" === u
                                            }
                                        },
                                            d = e.startPublishing(s),
                                            f = d.critical,
                                            p = d.dimensions,
                                            g = d.viewport;
                                        r({
                                            type: "INITIAL_PUBLISH",
                                            payload: {
                                                critical: f,
                                                dimensions: p,
                                                clientSelection: l,
                                                movementMode: u,
                                                viewport: g
                                            }
                                        })
                                    } else t(o)
                                }
                            }
                        }
                    }(n), Yn, or, ar, ir, function (e) {
                        return function (t) {
                            return function (n) {
                                return function (r) {
                                    if (function (e) {
                                        return "DROP_COMPLETE" === e.type || "DROP_ANIMATE" === e.type || "FLUSH" === e.type
                                    }(r)) return e.stop(), void n(r);
                                    if ("INITIAL_PUBLISH" === r.type) {
                                        n(r);
                                        var o = t.getState();
                                        return "DRAGGING" !== o.phase && Le(!1), void e.start(o)
                                    }
                                    n(r), e.scroll(t.getState())
                                }
                            }
                        }
                    }(l), Xn, function (e) {
                        var t = !1;
                        return function () {
                            return function (n) {
                                return function (r) {
                                    if ("INITIAL_PUBLISH" === r.type) return t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), void e.tryRestoreFocusRecorded();
                                    if (n(r), t) {
                                        if ("FLUSH" === r.type) return t = !1, void e.tryRestoreFocusRecorded();
                                        if ("DROP_COMPLETE" === r.type) {
                                            t = !1;
                                            var o = r.payload.completed.result;
                                            o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded()
                                        }
                                    }
                                }
                            }
                        }
                    }(r), rr(a, i))))
                };
            var cr = function (e) {
                var t = e.scrollHeight,
                    n = e.scrollWidth,
                    r = e.height,
                    o = e.width,
                    a = qe({
                        x: n,
                        y: t
                    }, {
                        x: o,
                        y: r
                    });
                return {
                    x: Math.max(0, a.x),
                    y: Math.max(0, a.y)
                }
            },
                sr = function () {
                    var e = document.documentElement;
                    return e || Le(!1), e
                },
                dr = function () {
                    var e = sr();
                    return cr({
                        scrollHeight: e.scrollHeight,
                        scrollWidth: e.scrollWidth,
                        width: e.clientWidth,
                        height: e.clientHeight
                    })
                },
                fr = function (e) {
                    var t = e.critical,
                        n = e.scrollOptions,
                        r = e.registry;
                    vn();
                    var o = function () {
                        var e = Qn(),
                            t = dr(),
                            n = e.y,
                            r = e.x,
                            o = sr(),
                            a = o.clientWidth,
                            i = o.clientHeight;
                        return {
                            frame: ve({
                                top: n,
                                left: r,
                                right: r + a,
                                bottom: n + i
                            }),
                            scroll: {
                                initial: e,
                                current: e,
                                max: t,
                                diff: {
                                    value: Ke,
                                    displacement: Ke
                                }
                            }
                        }
                    }(),
                        a = o.scroll.current,
                        i = t.droppable,
                        l = r.droppable.getAllByType(i.type).map((function (e) {
                            return e.callbacks.getDimensionAndWatchScroll(a, n)
                        })),
                        u = r.draggable.getAllByType(t.draggable.type).map((function (e) {
                            return e.getDimension(a)
                        })),
                        c = {
                            draggables: dt(u),
                            droppables: st(l)
                        };
                    return bn(), {
                        dimensions: c,
                        critical: t,
                        viewport: o
                    }
                };

            function pr(e, t, n) {
                return n.descriptor.id !== t.id && (n.descriptor.type === t.type && "virtual" === e.droppable.getById(n.descriptor.droppableId).descriptor.mode)
            }
            var gr = function (e, t) {
                var n = null,
                    r = function (e) {
                        var t = e.registry,
                            n = e.callbacks,
                            r = {
                                additions: {},
                                removals: {},
                                modified: {}
                            },
                            o = null,
                            a = function () {
                                o || (n.collectionStarting(), o = requestAnimationFrame((function () {
                                    o = null, vn();
                                    var e = r,
                                        a = e.additions,
                                        i = e.removals,
                                        l = e.modified,
                                        u = Object.keys(a).map((function (e) {
                                            return t.draggable.getById(e).getDimension(Ke)
                                        })).sort((function (e, t) {
                                            return e.descriptor.index - t.descriptor.index
                                        })),
                                        c = Object.keys(l).map((function (e) {
                                            return {
                                                droppableId: e,
                                                scroll: t.droppable.getById(e).callbacks.getScrollWhileDragging()
                                            }
                                        })),
                                        s = {
                                            additions: u,
                                            removals: Object.keys(i),
                                            modified: c
                                        };
                                    r = {
                                        additions: {},
                                        removals: {},
                                        modified: {}
                                    }, bn(), n.publish(s)
                                })))
                            };
                        return {
                            add: function (e) {
                                var t = e.descriptor.id;
                                r.additions[t] = e, r.modified[e.descriptor.droppableId] = !0, r.removals[t] && delete r.removals[t], a()
                            },
                            remove: function (e) {
                                var t = e.descriptor;
                                r.removals[t.id] = !0, r.modified[t.droppableId] = !0, r.additions[t.id] && delete r.additions[t.id], a()
                            },
                            stop: function () {
                                o && (cancelAnimationFrame(o), o = null, r = {
                                    additions: {},
                                    removals: {},
                                    modified: {}
                                })
                            }
                        }
                    }({
                        callbacks: {
                            publish: t.publishWhileDragging,
                            collectionStarting: t.collectionStarting
                        },
                        registry: e
                    }),
                    o = function (t) {
                        n || Le(!1);
                        var o = n.critical.draggable;
                        "ADDITION" === t.type && pr(e, o, t.value) && r.add(t.value), "REMOVAL" === t.type && pr(e, o, t.value) && r.remove(t.value)
                    },
                    a = {
                        updateDroppableIsEnabled: function (r, o) {
                            e.droppable.exists(r) || Le(!1), n && t.updateDroppableIsEnabled({
                                id: r,
                                isEnabled: o
                            })
                        },
                        updateDroppableIsCombineEnabled: function (r, o) {
                            n && (e.droppable.exists(r) || Le(!1), t.updateDroppableIsCombineEnabled({
                                id: r,
                                isCombineEnabled: o
                            }))
                        },
                        scrollDroppable: function (t, r) {
                            n && e.droppable.getById(t).callbacks.scroll(r)
                        },
                        updateDroppableScroll: function (r, o) {
                            n && (e.droppable.exists(r) || Le(!1), t.updateDroppableScroll({
                                id: r,
                                newScroll: o
                            }))
                        },
                        startPublishing: function (t) {
                            n && Le(!1);
                            var r = e.draggable.getById(t.draggableId),
                                a = e.droppable.getById(r.descriptor.droppableId),
                                i = {
                                    draggable: r.descriptor,
                                    droppable: a.descriptor
                                },
                                l = e.subscribe(o);
                            return n = {
                                critical: i,
                                unsubscribe: l
                            }, fr({
                                critical: i,
                                registry: e,
                                scrollOptions: t.scrollOptions
                            })
                        },
                        stopPublishing: function () {
                            if (n) {
                                r.stop();
                                var t = n.critical.droppable;
                                e.droppable.getAllByType(t.type).forEach((function (e) {
                                    return e.callbacks.dragStopped()
                                })), n.unsubscribe(), n = null
                            }
                        }
                    };
                return a
            },
                mr = function (e, t) {
                    return "IDLE" === e.phase || "DROP_ANIMATING" === e.phase && (e.completed.result.draggableId !== t && "DROP" === e.completed.result.reason)
                },
                hr = function (e) {
                    window.scrollBy(e.x, e.y)
                },
                vr = Pe((function (e) {
                    return ft(e).filter((function (e) {
                        return !!e.isEnabled && !!e.frame
                    }))
                })),
                br = function (e) {
                    var t = e.center,
                        n = e.destination,
                        r = e.droppables;
                    if (n) {
                        var o = r[n];
                        return o.frame ? o : null
                    }
                    var a = function (e, t) {
                        var n = ut(vr(t), (function (t) {
                            return t.frame || Le(!1), on(t.frame.pageMarginBox)(e)
                        }));
                        return n
                    }(t, r);
                    return a
                },
                yr = .25,
                wr = .05,
                xr = 28,
                Cr = function (e) {
                    return Math.pow(e, 2)
                },
                Sr = {
                    stopDampeningAt: 1200,
                    accelerateAt: 360
                },
                kr = function (e) {
                    var t = e.startOfRange,
                        n = e.endOfRange,
                        r = e.current,
                        o = n - t;
                    return 0 === o ? 0 : (r - t) / o
                },
                Er = Sr.accelerateAt,
                _r = Sr.stopDampeningAt,
                Nr = function (e) {
                    var t = e.distanceToEdge,
                        n = e.thresholds,
                        r = e.dragStartTime,
                        o = e.shouldUseTimeDampening,
                        a = function (e, t) {
                            if (e > t.startScrollingFrom) return 0;
                            if (e <= t.maxScrollValueAt) return xr;
                            if (e === t.startScrollingFrom) return 1;
                            var n = kr({
                                startOfRange: t.maxScrollValueAt,
                                endOfRange: t.startScrollingFrom,
                                current: e
                            }),
                                r = xr * Cr(1 - n);
                            return Math.ceil(r)
                        }(t, n);
                    return 0 === a ? 0 : o ? Math.max(function (e, t) {
                        var n = t,
                            r = _r,
                            o = Date.now() - n;
                        if (o >= _r) return e;
                        if (o < Er) return 1;
                        var a = kr({
                            startOfRange: Er,
                            endOfRange: r,
                            current: o
                        }),
                            i = e * Cr(a);
                        return Math.ceil(i)
                    }(a, r), 1) : a
                },
                Ir = function (e) {
                    var t = e.container,
                        n = e.distanceToEdges,
                        r = e.dragStartTime,
                        o = e.axis,
                        a = e.shouldUseTimeDampening,
                        i = function (e, t) {
                            return {
                                startScrollingFrom: e[t.size] * yr,
                                maxScrollValueAt: e[t.size] * wr
                            }
                        }(t, o);
                    return n[o.end] < n[o.start] ? Nr({
                        distanceToEdge: n[o.end],
                        thresholds: i,
                        dragStartTime: r,
                        shouldUseTimeDampening: a
                    }) : -1 * Nr({
                        distanceToEdge: n[o.start],
                        thresholds: i,
                        dragStartTime: r,
                        shouldUseTimeDampening: a
                    })
                },
                Pr = et((function (e) {
                    return 0 === e ? 0 : e
                })),
                Or = function (e) {
                    var t = e.dragStartTime,
                        n = e.container,
                        r = e.subject,
                        o = e.center,
                        a = e.shouldUseTimeDampening,
                        i = {
                            top: o.y - n.top,
                            right: n.right - o.x,
                            bottom: n.bottom - o.y,
                            left: o.x - n.left
                        },
                        l = Ir({
                            container: n,
                            distanceToEdges: i,
                            dragStartTime: t,
                            axis: Et,
                            shouldUseTimeDampening: a
                        }),
                        u = Ir({
                            container: n,
                            distanceToEdges: i,
                            dragStartTime: t,
                            axis: _t,
                            shouldUseTimeDampening: a
                        }),
                        c = Pr({
                            x: u,
                            y: l
                        });
                    if (Ye(c, Ke)) return null;
                    var s = function (e) {
                        var t = e.container,
                            n = e.subject,
                            r = e.proposedScroll,
                            o = n.height > t.height,
                            a = n.width > t.width;
                        return a || o ? a && o ? null : {
                            x: a ? 0 : r.x,
                            y: o ? 0 : r.y
                        } : r
                    }({
                        container: n,
                        subject: r,
                        proposedScroll: c
                    });
                    return s ? Ye(s, Ke) ? null : s : null
                },
                Dr = et((function (e) {
                    return 0 === e ? 0 : e > 0 ? 1 : -1
                })),
                Rr = function () {
                    var e = function (e, t) {
                        return e < 0 ? e : e > t ? e - t : 0
                    };
                    return function (t) {
                        var n = t.current,
                            r = t.max,
                            o = t.change,
                            a = $e(n, o),
                            i = {
                                x: e(a.x, r.x),
                                y: e(a.y, r.y)
                            };
                        return Ye(i, Ke) ? null : i
                    }
                }(),
                Tr = function (e) {
                    var t = e.max,
                        n = e.current,
                        r = e.change,
                        o = {
                            x: Math.max(n.x, t.x),
                            y: Math.max(n.y, t.y)
                        },
                        a = Dr(r),
                        i = Rr({
                            max: o,
                            current: n,
                            change: a
                        });
                    return !i || (0 !== a.x && 0 === i.x || 0 !== a.y && 0 === i.y)
                },
                Ar = function (e, t) {
                    return Tr({
                        current: e.scroll.current,
                        max: e.scroll.max,
                        change: t
                    })
                },
                jr = function (e, t) {
                    var n = e.frame;
                    return !!n && Tr({
                        current: n.scroll.current,
                        max: n.scroll.max,
                        change: t
                    })
                },
                Lr = function (e) {
                    var t = e.state,
                        n = e.dragStartTime,
                        r = e.shouldUseTimeDampening,
                        o = e.scrollWindow,
                        a = e.scrollDroppable,
                        i = t.current.page.borderBoxCenter,
                        l = t.dimensions.draggables[t.critical.draggable.id].page.marginBox;
                    if (t.isWindowScrollAllowed) {
                        var u = function (e) {
                            var t = e.viewport,
                                n = e.subject,
                                r = e.center,
                                o = e.dragStartTime,
                                a = e.shouldUseTimeDampening,
                                i = Or({
                                    dragStartTime: o,
                                    container: t.frame,
                                    subject: n,
                                    center: r,
                                    shouldUseTimeDampening: a
                                });
                            return i && Ar(t, i) ? i : null
                        }({
                            dragStartTime: n,
                            viewport: t.viewport,
                            subject: l,
                            center: i,
                            shouldUseTimeDampening: r
                        });
                        if (u) return void o(u)
                    }
                    var c = br({
                        center: i,
                        destination: tn(t.impact),
                        droppables: t.dimensions.droppables
                    });
                    if (c) {
                        var s = function (e) {
                            var t = e.droppable,
                                n = e.subject,
                                r = e.center,
                                o = e.dragStartTime,
                                a = e.shouldUseTimeDampening,
                                i = t.frame;
                            if (!i) return null;
                            var l = Or({
                                dragStartTime: o,
                                container: i.pageMarginBox,
                                subject: n,
                                center: r,
                                shouldUseTimeDampening: a
                            });
                            return l && jr(t, l) ? l : null
                        }({
                            dragStartTime: n,
                            droppable: c,
                            subject: l,
                            center: i,
                            shouldUseTimeDampening: r
                        });
                        s && a(c.descriptor.id, s)
                    }
                },
                Mr = function (e) {
                    var t = e.move,
                        n = e.scrollDroppable,
                        r = e.scrollWindow,
                        o = function (e, t) {
                            if (!jr(e, t)) return t;
                            var r = function (e, t) {
                                var n = e.frame;
                                return n && jr(e, t) ? Rr({
                                    current: n.scroll.current,
                                    max: n.scroll.max,
                                    change: t
                                }) : null
                            }(e, t);
                            if (!r) return n(e.descriptor.id, t), null;
                            var o = qe(t, r);
                            return n(e.descriptor.id, o), qe(t, o)
                        },
                        a = function (e, t, n) {
                            if (!e) return n;
                            if (!Ar(t, n)) return n;
                            var o = function (e, t) {
                                if (!Ar(e, t)) return null;
                                var n = e.scroll.max,
                                    r = e.scroll.current;
                                return Rr({
                                    current: r,
                                    max: n,
                                    change: t
                                })
                            }(t, n);
                            if (!o) return r(n), null;
                            var a = qe(n, o);
                            return r(a), qe(n, a)
                        };
                    return function (e) {
                        var n = e.scrollJumpRequest;
                        if (n) {
                            var r = tn(e.impact);
                            r || Le(!1);
                            var i = o(e.dimensions.droppables[r], n);
                            if (i) {
                                var l = e.viewport,
                                    u = a(e.isWindowScrollAllowed, l, i);
                                u && function (e, n) {
                                    var r = $e(e.current.client.selection, n);
                                    t({
                                        client: r
                                    })
                                }(e, u)
                            }
                        }
                    }
                },
                Br = function (e) {
                    var t = e.scrollDroppable,
                        n = e.scrollWindow,
                        r = e.move,
                        o = function (e) {
                            var t = e.scrollWindow,
                                n = e.scrollDroppable,
                                r = Oe(t),
                                o = Oe(n),
                                a = null,
                                i = function (e) {
                                    a || Le(!1);
                                    var t = a,
                                        n = t.shouldUseTimeDampening,
                                        i = t.dragStartTime;
                                    Lr({
                                        state: e,
                                        scrollWindow: r,
                                        scrollDroppable: o,
                                        dragStartTime: i,
                                        shouldUseTimeDampening: n
                                    })
                                };
                            return {
                                start: function (e) {
                                    vn(), a && Le(!1);
                                    var t = Date.now(),
                                        n = !1,
                                        r = function () {
                                            n = !0
                                        };
                                    Lr({
                                        state: e,
                                        dragStartTime: 0,
                                        shouldUseTimeDampening: !1,
                                        scrollWindow: r,
                                        scrollDroppable: r
                                    }), a = {
                                        dragStartTime: t,
                                        shouldUseTimeDampening: n
                                    }, bn(), n && i(e)
                                },
                                stop: function () {
                                    a && (r.cancel(), o.cancel(), a = null)
                                },
                                scroll: i
                            }
                        }({
                            scrollWindow: n,
                            scrollDroppable: t
                        }),
                        a = Mr({
                            move: r,
                            scrollWindow: n,
                            scrollDroppable: t
                        });
                    return {
                        scroll: function (e) {
                            "DRAGGING" === e.phase && ("FLUID" !== e.movementMode ? e.scrollJumpRequest && a(e) : o.scroll(e))
                        },
                        start: o.start,
                        stop: o.stop
                    }
                },
                Fr = function () {
                    var e = "data-rbd-drag-handle";
                    return {
                        base: e,
                        draggableId: e + "-draggable-id",
                        contextId: e + "-context-id"
                    }
                }(),
                zr = function () {
                    var e = "data-rbd-draggable";
                    return {
                        base: e,
                        contextId: e + "-context-id",
                        id: e + "-id"
                    }
                }(),
                Ur = function () {
                    var e = "data-rbd-droppable";
                    return {
                        base: e,
                        contextId: e + "-context-id",
                        id: e + "-id"
                    }
                }(),
                Gr = {
                    contextId: "data-rbd-scroll-container-context-id"
                },
                Wr = function (e, t) {
                    return e.map((function (e) {
                        var n = e.styles[t];
                        return n ? e.selector + " { " + n + " }" : ""
                    })).join(" ")
                },
                Hr = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? e.useLayoutEffect : e.useEffect,
                Vr = function () {
                    var e = document.querySelector("head");
                    return e || Le(!1), e
                },
                Kr = function (e) {
                    var t = document.createElement("style");
                    return e && t.setAttribute("nonce", e), t.type = "text/css", t
                };

            function $r(t, n) {
                var r = ge((function () {
                    return function (e) {
                        var t, n = (t = e, function (e) {
                            return "[" + e + '="' + t + '"]'
                        }),
                            r = function () {
                                var e = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
                                return {
                                    selector: n(Fr.contextId),
                                    styles: {
                                        always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
                                        resting: e,
                                        dragging: "pointer-events: none;",
                                        dropAnimating: e
                                    }
                                }
                            }(),
                            o = [function () {
                                var e = "\n      transition: " + Gn.outOfTheWay + ";\n    ";
                                return {
                                    selector: n(zr.contextId),
                                    styles: {
                                        dragging: e,
                                        dropAnimating: e,
                                        userCancel: e
                                    }
                                }
                            }(), r, {
                                selector: n(Ur.contextId),
                                styles: {
                                    always: "overflow-anchor: none;"
                                }
                            }, {
                                selector: "body",
                                styles: {
                                    dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
                                }
                            }];
                        return {
                            always: Wr(o, "always"),
                            resting: Wr(o, "resting"),
                            dragging: Wr(o, "dragging"),
                            dropAnimating: Wr(o, "dropAnimating"),
                            userCancel: Wr(o, "userCancel")
                        }
                    }(t)
                }), [t]),
                    o = (0, e.useRef)(null),
                    a = (0, e.useRef)(null),
                    i = me(Pe((function (e) {
                        var t = a.current;
                        t || Le(!1), t.textContent = e
                    })), []),
                    l = me((function (e) {
                        var t = o.current;
                        t || Le(!1), t.textContent = e
                    }), []);
                Hr((function () {
                    (o.current || a.current) && Le(!1);
                    var e = Kr(n),
                        u = Kr(n);
                    return o.current = e, a.current = u, e.setAttribute("data-rbd-always", t), u.setAttribute("data-rbd-dynamic", t), Vr().appendChild(e), Vr().appendChild(u), l(r.always), i(r.resting),
                        function () {
                            var e = function (e) {
                                var t = e.current;
                                t || Le(!1), Vr().removeChild(t), e.current = null
                            };
                            e(o), e(a)
                        }
                }), [n, l, i, r.always, r.resting, t]);
                var u = me((function () {
                    return i(r.dragging)
                }), [i, r.dragging]),
                    c = me((function (e) {
                        i("DROP" !== e ? r.userCancel : r.dropAnimating)
                    }), [i, r.dropAnimating, r.userCancel]),
                    s = me((function () {
                        a.current && i(r.resting)
                    }), [i, r.resting]);
                return ge((function () {
                    return {
                        dragging: u,
                        dropping: c,
                        resting: s
                    }
                }), [u, c, s])
            }
            var qr = function (e) {
                return e && e.ownerDocument ? e.ownerDocument.defaultView : window
            };

            function Yr(e) {
                return e instanceof qr(e).HTMLElement
            }

            function Qr(e, t) {
                var n = "[" + Fr.contextId + '="' + e + '"]',
                    r = ct(document.querySelectorAll(n));
                if (!r.length) return null;
                var o = ut(r, (function (e) {
                    return e.getAttribute(Fr.draggableId) === t
                }));
                return o && Yr(o) ? o : null
            }

            function Zr() {
                var e = {
                    draggables: {},
                    droppables: {}
                },
                    t = [];

                function n(e) {
                    t.length && t.forEach((function (t) {
                        return t(e)
                    }))
                }

                function r(t) {
                    return e.draggables[t] || null
                }

                function o(t) {
                    return e.droppables[t] || null
                }
                return {
                    draggable: {
                        register: function (t) {
                            e.draggables[t.descriptor.id] = t, n({
                                type: "ADDITION",
                                value: t
                            })
                        },
                        update: function (t, n) {
                            var r = e.draggables[n.descriptor.id];
                            r && r.uniqueId === t.uniqueId && (delete e.draggables[n.descriptor.id], e.draggables[t.descriptor.id] = t)
                        },
                        unregister: function (t) {
                            var o = t.descriptor.id,
                                a = r(o);
                            a && t.uniqueId === a.uniqueId && (delete e.draggables[o], n({
                                type: "REMOVAL",
                                value: t
                            }))
                        },
                        getById: function (e) {
                            var t = r(e);
                            return t || Le(!1), t
                        },
                        findById: r,
                        exists: function (e) {
                            return Boolean(r(e))
                        },
                        getAllByType: function (t) {
                            return it(e.draggables).filter((function (e) {
                                return e.descriptor.type === t
                            }))
                        }
                    },
                    droppable: {
                        register: function (t) {
                            e.droppables[t.descriptor.id] = t
                        },
                        unregister: function (t) {
                            var n = o(t.descriptor.id);
                            n && t.uniqueId === n.uniqueId && delete e.droppables[t.descriptor.id]
                        },
                        getById: function (e) {
                            var t = o(e);
                            return t || Le(!1), t
                        },
                        findById: o,
                        exists: function (e) {
                            return Boolean(o(e))
                        },
                        getAllByType: function (t) {
                            return it(e.droppables).filter((function (e) {
                                return e.descriptor.type === t
                            }))
                        }
                    },
                    subscribe: function (e) {
                        return t.push(e),
                            function () {
                                var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
                            }
                    },
                    clean: function () {
                        e.draggables = {}, e.droppables = {}, t.length = 0
                    }
                }
            }
            var Xr = e.createContext(null),
                Jr = function () {
                    var e = document.body;
                    return e || Le(!1), e
                },
                eo = {
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                    margin: "-1px",
                    border: "0",
                    padding: "0",
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                    "clip-path": "inset(100%)"
                };
            var to = 0,
                no = {
                    separator: "::"
                };

            function ro(e, t) {
                return void 0 === t && (t = no), ge((function () {
                    return "" + e + t.separator + to++
                }), [t.separator, e])
            }
            var oo = e.createContext(null);

            function ao(e) {
                0
            }

            function io(e, t) {
                ao()
            }

            function lo() {
                io()
            }

            function uo(t) {
                var n = (0, e.useRef)(t);
                return (0, e.useEffect)((function () {
                    n.current = t
                })), n
            }
            var co, so = ((co = {})[13] = !0, co[9] = !0, co),
                fo = function (e) {
                    so[e.keyCode] && e.preventDefault()
                },
                po = function () {
                    var e = "visibilitychange";
                    return "undefined" === typeof document ? e : ut([e, "ms" + e, "webkit" + e, "moz" + e, "o" + e], (function (e) {
                        return "on" + e in document
                    })) || e
                }();
            var go, mo = {
                type: "IDLE"
            };

            function ho(e) {
                var t = e.cancel,
                    n = e.completed,
                    r = e.getPhase,
                    o = e.setPhase;
                return [{
                    eventName: "mousemove",
                    fn: function (e) {
                        var t = e.button,
                            n = e.clientX,
                            a = e.clientY;
                        if (0 === t) {
                            var i = {
                                x: n,
                                y: a
                            },
                                l = r();
                            if ("DRAGGING" === l.type) return e.preventDefault(), void l.actions.move(i);
                            "PENDING" !== l.type && Le(!1);
                            var u = l.point;
                            if (c = u, s = i, Math.abs(s.x - c.x) >= 5 || Math.abs(s.y - c.y) >= 5) {
                                var c, s;
                                e.preventDefault();
                                var d = l.actions.fluidLift(i);
                                o({
                                    type: "DRAGGING",
                                    actions: d
                                })
                            }
                        }
                    }
                }, {
                    eventName: "mouseup",
                    fn: function (e) {
                        var o = r();
                        "DRAGGING" === o.type ? (e.preventDefault(), o.actions.drop({
                            shouldBlockNextClick: !0
                        }), n()) : t()
                    }
                }, {
                    eventName: "mousedown",
                    fn: function (e) {
                        "DRAGGING" === r().type && e.preventDefault(), t()
                    }
                }, {
                    eventName: "keydown",
                    fn: function (e) {
                        if ("PENDING" !== r().type) return 27 === e.keyCode ? (e.preventDefault(), void t()) : void fo(e);
                        t()
                    }
                }, {
                    eventName: "resize",
                    fn: t
                }, {
                    eventName: "scroll",
                    options: {
                        passive: !0,
                        capture: !1
                    },
                    fn: function () {
                        "PENDING" === r().type && t()
                    }
                }, {
                    eventName: "webkitmouseforcedown",
                    fn: function (e) {
                        var n = r();
                        "IDLE" === n.type && Le(!1), n.actions.shouldRespectForcePress() ? t() : e.preventDefault()
                    }
                }, {
                    eventName: po,
                    fn: t
                }]
            }

            function vo() { }
            var bo = ((go = {})[34] = !0, go[33] = !0, go[36] = !0, go[35] = !0, go);

            function yo(e, t) {
                function n() {
                    t(), e.cancel()
                }
                return [{
                    eventName: "keydown",
                    fn: function (r) {
                        return 27 === r.keyCode ? (r.preventDefault(), void n()) : 32 === r.keyCode ? (r.preventDefault(), t(), void e.drop()) : 40 === r.keyCode ? (r.preventDefault(), void e.moveDown()) : 38 === r.keyCode ? (r.preventDefault(), void e.moveUp()) : 39 === r.keyCode ? (r.preventDefault(), void e.moveRight()) : 37 === r.keyCode ? (r.preventDefault(), void e.moveLeft()) : void (bo[r.keyCode] ? r.preventDefault() : fo(r))
                    }
                }, {
                    eventName: "mousedown",
                    fn: n
                }, {
                    eventName: "mouseup",
                    fn: n
                }, {
                    eventName: "click",
                    fn: n
                }, {
                    eventName: "touchstart",
                    fn: n
                }, {
                    eventName: "resize",
                    fn: n
                }, {
                    eventName: "wheel",
                    fn: n,
                    options: {
                        passive: !0
                    }
                }, {
                    eventName: po,
                    fn: n
                }]
            }
            var wo = {
                type: "IDLE"
            };
            var xo = {
                input: !0,
                button: !0,
                textarea: !0,
                select: !0,
                option: !0,
                optgroup: !0,
                video: !0,
                audio: !0
            };

            function Co(e, t) {
                if (null == t) return !1;
                if (Boolean(xo[t.tagName.toLowerCase()])) return !0;
                var n = t.getAttribute("contenteditable");
                return "true" === n || "" === n || t !== e && Co(e, t.parentElement)
            }

            function So(e, t) {
                var n = t.target;
                return !!Yr(n) && Co(e, n)
            }
            var ko = function (e) {
                return ve(e.getBoundingClientRect()).center
            };
            var Eo = function () {
                var e = "matches";
                return "undefined" === typeof document ? e : ut([e, "msMatchesSelector", "webkitMatchesSelector"], (function (e) {
                    return e in Element.prototype
                })) || e
            }();

            function _o(e, t) {
                return null == e ? null : e[Eo](t) ? e : _o(e.parentElement, t)
            }

            function No(e, t) {
                return e.closest ? e.closest(t) : _o(e, t)
            }

            function Io(e, t) {
                var n, r = t.target;
                if (!((n = r) instanceof qr(n).Element)) return null;
                var o = function (e) {
                    return "[" + Fr.contextId + '="' + e + '"]'
                }(e),
                    a = No(r, o);
                return a && Yr(a) ? a : null
            }

            function Po(e) {
                e.preventDefault()
            }

            function Oo(e) {
                var t = e.expected,
                    n = e.phase,
                    r = e.isLockActive;
                e.shouldWarn;
                return !!r() && t === n
            }

            function Do(e) {
                var t = e.lockAPI,
                    n = e.store,
                    r = e.registry,
                    o = e.draggableId;
                if (t.isClaimed()) return !1;
                var a = r.draggable.findById(o);
                return !!a && (!!a.options.isEnabled && !!mr(n.getState(), o))
            }

            function Ro(e) {
                var t = e.lockAPI,
                    n = e.contextId,
                    r = e.store,
                    o = e.registry,
                    a = e.draggableId,
                    i = e.forceSensorStop,
                    l = e.sourceEvent;
                if (!Do({
                    lockAPI: t,
                    store: r,
                    registry: o,
                    draggableId: a
                })) return null;
                var u = o.draggable.getById(a),
                    c = function (e, t) {
                        var n = "[" + zr.contextId + '="' + e + '"]',
                            r = ut(ct(document.querySelectorAll(n)), (function (e) {
                                return e.getAttribute(zr.id) === t
                            }));
                        return r && Yr(r) ? r : null
                    }(n, u.descriptor.id);
                if (!c) return null;
                if (l && !u.options.canDragInteractiveElements && So(c, l)) return null;
                var s = t.claim(i || Re),
                    d = "PRE_DRAG";

                function f() {
                    return u.options.shouldRespectForcePress
                }

                function p() {
                    return t.isActive(s)
                }
                var g = function (e, t) {
                    Oo({
                        expected: e,
                        phase: d,
                        isLockActive: p,
                        shouldWarn: !0
                    }) && r.dispatch(t())
                }.bind(null, "DRAGGING");

                function m(e) {
                    function n() {
                        t.release(), d = "COMPLETED"
                    }

                    function o(t, o) {
                        if (void 0 === o && (o = {
                            shouldBlockNextClick: !1
                        }), e.cleanup(), o.shouldBlockNextClick) {
                            var a = Te(window, [{
                                eventName: "click",
                                fn: Po,
                                options: {
                                    once: !0,
                                    passive: !1,
                                    capture: !0
                                }
                            }]);
                            setTimeout(a)
                        }
                        n(), r.dispatch(Ln({
                            reason: t
                        }))
                    }
                    return "PRE_DRAG" !== d && (n(), "PRE_DRAG" !== d && Le(!1)), r.dispatch(function (e) {
                        return {
                            type: "LIFT",
                            payload: e
                        }
                    }(e.liftActionArgs)), d = "DRAGGING", v({
                        isActive: function () {
                            return Oo({
                                expected: "DRAGGING",
                                phase: d,
                                isLockActive: p,
                                shouldWarn: !1
                            })
                        },
                        shouldRespectForcePress: f,
                        drop: function (e) {
                            return o("DROP", e)
                        },
                        cancel: function (e) {
                            return o("CANCEL", e)
                        }
                    }, e.actions)
                }
                return {
                    isActive: function () {
                        return Oo({
                            expected: "PRE_DRAG",
                            phase: d,
                            isLockActive: p,
                            shouldWarn: !1
                        })
                    },
                    shouldRespectForcePress: f,
                    fluidLift: function (e) {
                        var t = Oe((function (e) {
                            g((function () {
                                return On({
                                    client: e
                                })
                            }))
                        }));
                        return v({}, m({
                            liftActionArgs: {
                                id: a,
                                clientSelection: e,
                                movementMode: "FLUID"
                            },
                            cleanup: function () {
                                return t.cancel()
                            },
                            actions: {
                                move: t
                            }
                        }), {
                            move: t
                        })
                    },
                    snapLift: function () {
                        var e = {
                            moveUp: function () {
                                return g(Dn)
                            },
                            moveRight: function () {
                                return g(Tn)
                            },
                            moveDown: function () {
                                return g(Rn)
                            },
                            moveLeft: function () {
                                return g(An)
                            }
                        };
                        return m({
                            liftActionArgs: {
                                id: a,
                                clientSelection: ko(c),
                                movementMode: "SNAP"
                            },
                            cleanup: Re,
                            actions: e
                        })
                    },
                    abort: function () {
                        Oo({
                            expected: "PRE_DRAG",
                            phase: d,
                            isLockActive: p,
                            shouldWarn: !0
                        }) && t.release()
                    }
                }
            }
            var To = [function (t) {
                var n = (0, e.useRef)(mo),
                    r = (0, e.useRef)(Re),
                    o = ge((function () {
                        return {
                            eventName: "mousedown",
                            fn: function (e) {
                                if (!e.defaultPrevented && 0 === e.button && !(e.ctrlKey || e.metaKey || e.shiftKey || e.altKey)) {
                                    var n = t.findClosestDraggableId(e);
                                    if (n) {
                                        var o = t.tryGetLock(n, l, {
                                            sourceEvent: e
                                        });
                                        if (o) {
                                            e.preventDefault();
                                            var a = {
                                                x: e.clientX,
                                                y: e.clientY
                                            };
                                            r.current(), s(o, a)
                                        }
                                    }
                                }
                            }
                        }
                    }), [t]),
                    a = ge((function () {
                        return {
                            eventName: "webkitmouseforcewillbegin",
                            fn: function (e) {
                                if (!e.defaultPrevented) {
                                    var n = t.findClosestDraggableId(e);
                                    if (n) {
                                        var r = t.findOptionsForDraggable(n);
                                        r && (r.shouldRespectForcePress || t.canGetLock(n) && e.preventDefault())
                                    }
                                }
                            }
                        }
                    }), [t]),
                    i = me((function () {
                        r.current = Te(window, [a, o], {
                            passive: !1,
                            capture: !0
                        })
                    }), [a, o]),
                    l = me((function () {
                        "IDLE" !== n.current.type && (n.current = mo, r.current(), i())
                    }), [i]),
                    u = me((function () {
                        var e = n.current;
                        l(), "DRAGGING" === e.type && e.actions.cancel({
                            shouldBlockNextClick: !0
                        }), "PENDING" === e.type && e.actions.abort()
                    }), [l]),
                    c = me((function () {
                        var e = ho({
                            cancel: u,
                            completed: l,
                            getPhase: function () {
                                return n.current
                            },
                            setPhase: function (e) {
                                n.current = e
                            }
                        });
                        r.current = Te(window, e, {
                            capture: !0,
                            passive: !1
                        })
                    }), [u, l]),
                    s = me((function (e, t) {
                        "IDLE" !== n.current.type && Le(!1), n.current = {
                            type: "PENDING",
                            point: t,
                            actions: e
                        }, c()
                    }), [c]);
                Hr((function () {
                    return i(),
                        function () {
                            r.current()
                        }
                }), [i])
            }, function (t) {
                var n = (0, e.useRef)(vo),
                    r = ge((function () {
                        return {
                            eventName: "keydown",
                            fn: function (e) {
                                if (!e.defaultPrevented && 32 === e.keyCode) {
                                    var r = t.findClosestDraggableId(e);
                                    if (r) {
                                        var a = t.tryGetLock(r, u, {
                                            sourceEvent: e
                                        });
                                        if (a) {
                                            e.preventDefault();
                                            var i = !0,
                                                l = a.snapLift();
                                            n.current(), n.current = Te(window, yo(l, u), {
                                                capture: !0,
                                                passive: !1
                                            })
                                        }
                                    }
                                }

                                function u() {
                                    i || Le(!1), i = !1, n.current(), o()
                                }
                            }
                        }
                    }), [t]),
                    o = me((function () {
                        n.current = Te(window, [r], {
                            passive: !1,
                            capture: !0
                        })
                    }), [r]);
                Hr((function () {
                    return o(),
                        function () {
                            n.current()
                        }
                }), [o])
            }, function (t) {
                var n = (0, e.useRef)(wo),
                    r = (0, e.useRef)(Re),
                    o = me((function () {
                        return n.current
                    }), []),
                    a = me((function (e) {
                        n.current = e
                    }), []),
                    i = ge((function () {
                        return {
                            eventName: "touchstart",
                            fn: function (e) {
                                if (!e.defaultPrevented) {
                                    var n = t.findClosestDraggableId(e);
                                    if (n) {
                                        var o = t.tryGetLock(n, u, {
                                            sourceEvent: e
                                        });
                                        if (o) {
                                            var a = e.touches[0],
                                                i = {
                                                    x: a.clientX,
                                                    y: a.clientY
                                                };
                                            r.current(), f(o, i)
                                        }
                                    }
                                }
                            }
                        }
                    }), [t]),
                    l = me((function () {
                        r.current = Te(window, [i], {
                            capture: !0,
                            passive: !1
                        })
                    }), [i]),
                    u = me((function () {
                        var e = n.current;
                        "IDLE" !== e.type && ("PENDING" === e.type && clearTimeout(e.longPressTimerId), a(wo), r.current(), l())
                    }), [l, a]),
                    c = me((function () {
                        var e = n.current;
                        u(), "DRAGGING" === e.type && e.actions.cancel({
                            shouldBlockNextClick: !0
                        }), "PENDING" === e.type && e.actions.abort()
                    }), [u]),
                    s = me((function () {
                        var e = {
                            capture: !0,
                            passive: !1
                        },
                            t = {
                                cancel: c,
                                completed: u,
                                getPhase: o
                            },
                            n = Te(window, function (e) {
                                var t = e.cancel,
                                    n = e.completed,
                                    r = e.getPhase;
                                return [{
                                    eventName: "touchmove",
                                    options: {
                                        capture: !1
                                    },
                                    fn: function (e) {
                                        var n = r();
                                        if ("DRAGGING" === n.type) {
                                            n.hasMoved = !0;
                                            var o = e.touches[0],
                                                a = {
                                                    x: o.clientX,
                                                    y: o.clientY
                                                };
                                            e.preventDefault(), n.actions.move(a)
                                        } else t()
                                    }
                                }, {
                                    eventName: "touchend",
                                    fn: function (e) {
                                        var o = r();
                                        "DRAGGING" === o.type ? (e.preventDefault(), o.actions.drop({
                                            shouldBlockNextClick: !0
                                        }), n()) : t()
                                    }
                                }, {
                                    eventName: "touchcancel",
                                    fn: function (e) {
                                        "DRAGGING" === r().type ? (e.preventDefault(), t()) : t()
                                    }
                                }, {
                                    eventName: "touchforcechange",
                                    fn: function (e) {
                                        var n = r();
                                        "IDLE" === n.type && Le(!1);
                                        var o = e.touches[0];
                                        if (o && o.force >= .15) {
                                            var a = n.actions.shouldRespectForcePress();
                                            if ("PENDING" !== n.type) return a ? n.hasMoved ? void e.preventDefault() : void t() : void e.preventDefault();
                                            a && t()
                                        }
                                    }
                                }, {
                                    eventName: po,
                                    fn: t
                                }]
                            }(t), e),
                            a = Te(window, function (e) {
                                var t = e.cancel,
                                    n = e.getPhase;
                                return [{
                                    eventName: "orientationchange",
                                    fn: t
                                }, {
                                    eventName: "contextmenu",
                                    fn: function (e) {
                                        e.preventDefault()
                                    }
                                }, {
                                    eventName: "keydown",
                                    fn: function (e) {
                                        "DRAGGING" === n().type ? (27 === e.keyCode && e.preventDefault(), t()) : t()
                                    }
                                }, {
                                    eventName: po,
                                    fn: t
                                }]
                            }(t), e);
                        r.current = function () {
                            n(), a()
                        }
                    }), [c, o, u]),
                    d = me((function () {
                        var e = o();
                        "PENDING" !== e.type && Le(!1);
                        var t = e.actions.fluidLift(e.point);
                        a({
                            type: "DRAGGING",
                            actions: t,
                            hasMoved: !1
                        })
                    }), [o, a]),
                    f = me((function (e, t) {
                        "IDLE" !== o().type && Le(!1);
                        var n = setTimeout(d, 0);
                        a({
                            type: "PENDING",
                            point: t,
                            actions: e,
                            longPressTimerId: n
                        }), s()
                    }), [s, o, a, d]);
                Hr((function () {
                    return l(),
                        function () {
                            r.current();
                            var e = o();
                            "PENDING" === e.type && (clearTimeout(e.longPressTimerId), a(wo))
                        }
                }), [o, l, a]), Hr((function () {
                    return Te(window, [{
                        eventName: "touchmove",
                        fn: function () { },
                        options: {
                            capture: !1,
                            passive: !1
                        }
                    }])
                }), [])
            }];

            function Ao(t) {
                var n = t.contextId,
                    r = t.store,
                    o = t.registry,
                    a = t.customSensors,
                    i = t.enableDefaultSensors,
                    l = [].concat(i ? To : [], a || []),
                    u = (0, e.useState)((function () {
                        return function () {
                            var e = null;

                            function t() {
                                e || Le(!1), e = null
                            }
                            return {
                                isClaimed: function () {
                                    return Boolean(e)
                                },
                                isActive: function (t) {
                                    return t === e
                                },
                                claim: function (t) {
                                    e && Le(!1);
                                    var n = {
                                        abandon: t
                                    };
                                    return e = n, n
                                },
                                release: t,
                                tryAbandon: function () {
                                    e && (e.abandon(), t())
                                }
                            }
                        }()
                    }))[0],
                    c = me((function (e, t) {
                        e.isDragging && !t.isDragging && u.tryAbandon()
                    }), [u]);
                Hr((function () {
                    var e = r.getState();
                    return r.subscribe((function () {
                        var t = r.getState();
                        c(e, t), e = t
                    }))
                }), [u, r, c]), Hr((function () {
                    return u.tryAbandon
                }), [u.tryAbandon]);
                var s = me((function (e) {
                    return Do({
                        lockAPI: u,
                        registry: o,
                        store: r,
                        draggableId: e
                    })
                }), [u, o, r]),
                    d = me((function (e, t, a) {
                        return Ro({
                            lockAPI: u,
                            registry: o,
                            contextId: n,
                            store: r,
                            draggableId: e,
                            forceSensorStop: t,
                            sourceEvent: a && a.sourceEvent ? a.sourceEvent : null
                        })
                    }), [n, u, o, r]),
                    f = me((function (e) {
                        return function (e, t) {
                            var n = Io(e, t);
                            return n ? n.getAttribute(Fr.draggableId) : null
                        }(n, e)
                    }), [n]),
                    p = me((function (e) {
                        var t = o.draggable.findById(e);
                        return t ? t.options : null
                    }), [o.draggable]),
                    g = me((function () {
                        u.isClaimed() && (u.tryAbandon(), "IDLE" !== r.getState().phase && r.dispatch({
                            type: "FLUSH",
                            payload: null
                        }))
                    }), [u, r]),
                    m = me(u.isClaimed, [u]),
                    h = ge((function () {
                        return {
                            canGetLock: s,
                            tryGetLock: d,
                            findClosestDraggableId: f,
                            findOptionsForDraggable: p,
                            tryReleaseLock: g,
                            isLockClaimed: m
                        }
                    }), [s, d, f, p, g, m]);
                ao();
                for (var v = 0; v < l.length; v++) l[v](h)
            }

            function jo(e) {
                return e.current || Le(!1), e.current
            }

            function Lo(t) {
                var n = t.contextId,
                    r = t.setCallbacks,
                    o = t.sensors,
                    a = t.nonce,
                    i = t.dragHandleUsageInstructions,
                    l = (0, e.useRef)(null);
                lo();
                var u = uo(t),
                    c = me((function () {
                        return function (e) {
                            return {
                                onBeforeCapture: e.onBeforeCapture,
                                onBeforeDragStart: e.onBeforeDragStart,
                                onDragStart: e.onDragStart,
                                onDragEnd: e.onDragEnd,
                                onDragUpdate: e.onDragUpdate
                            }
                        }(u.current)
                    }), [u]),
                    s = function (t) {
                        var n = ge((function () {
                            return function (e) {
                                return "rbd-announcement-" + e
                            }(t)
                        }), [t]),
                            r = (0, e.useRef)(null);
                        return (0, e.useEffect)((function () {
                            var e = document.createElement("div");
                            return r.current = e, e.id = n, e.setAttribute("aria-live", "assertive"), e.setAttribute("aria-atomic", "true"), v(e.style, eo), Jr().appendChild(e),
                                function () {
                                    setTimeout((function () {
                                        var t = Jr();
                                        t.contains(e) && t.removeChild(e), e === r.current && (r.current = null)
                                    }))
                                }
                        }), [n]), me((function (e) {
                            var t = r.current;
                            t && (t.textContent = e)
                        }), [])
                    }(n),
                    d = function (t) {
                        var n = t.contextId,
                            r = t.text,
                            o = ro("hidden-text", {
                                separator: "-"
                            }),
                            a = ge((function () {
                                return "rbd-hidden-text-" + (e = {
                                    contextId: n,
                                    uniqueId: o
                                }).contextId + "-" + e.uniqueId;
                                var e
                            }), [o, n]);
                        return (0, e.useEffect)((function () {
                            var e = document.createElement("div");
                            return e.id = a, e.textContent = r, e.style.display = "none", Jr().appendChild(e),
                                function () {
                                    var t = Jr();
                                    t.contains(e) && t.removeChild(e)
                                }
                        }), [a, r]), a
                    }({
                        contextId: n,
                        text: i
                    }),
                    f = $r(n, a),
                    p = me((function (e) {
                        jo(l).dispatch(e)
                    }), []),
                    g = ge((function () {
                        return E({
                            publishWhileDragging: En,
                            updateDroppableScroll: Nn,
                            updateDroppableIsEnabled: In,
                            updateDroppableIsCombineEnabled: Pn,
                            collectionStarting: _n
                        }, p)
                    }), [p]),
                    m = function () {
                        var t = ge(Zr, []);
                        return (0, e.useEffect)((function () {
                            return function () {
                                requestAnimationFrame(t.clean)
                            }
                        }), [t]), t
                    }(),
                    h = ge((function () {
                        return gr(m, g)
                    }), [m, g]),
                    b = ge((function () {
                        return Br(v({
                            scrollWindow: hr,
                            scrollDroppable: h.scrollDroppable
                        }, E({
                            move: On
                        }, p)))
                    }), [h.scrollDroppable, p]),
                    y = function (t) {
                        var n = (0, e.useRef)({}),
                            r = (0, e.useRef)(null),
                            o = (0, e.useRef)(null),
                            a = (0, e.useRef)(!1),
                            i = me((function (e, t) {
                                var r = {
                                    id: e,
                                    focus: t
                                };
                                return n.current[e] = r,
                                    function () {
                                        var t = n.current;
                                        t[e] !== r && delete t[e]
                                    }
                            }), []),
                            l = me((function (e) {
                                var n = Qr(t, e);
                                n && n !== document.activeElement && n.focus()
                            }), [t]),
                            u = me((function (e, t) {
                                r.current === e && (r.current = t)
                            }), []),
                            c = me((function () {
                                o.current || a.current && (o.current = requestAnimationFrame((function () {
                                    o.current = null;
                                    var e = r.current;
                                    e && l(e)
                                })))
                            }), [l]),
                            s = me((function (e) {
                                r.current = null;
                                var t = document.activeElement;
                                t && t.getAttribute(Fr.draggableId) === e && (r.current = e)
                            }), []);
                        return Hr((function () {
                            return a.current = !0,
                                function () {
                                    a.current = !1;
                                    var e = o.current;
                                    e && cancelAnimationFrame(e)
                                }
                        }), []), ge((function () {
                            return {
                                register: i,
                                tryRecordFocus: s,
                                tryRestoreFocusRecorded: c,
                                tryShiftRecord: u
                            }
                        }), [i, s, c, u])
                    }(n),
                    w = ge((function () {
                        return ur({
                            announce: s,
                            autoScroller: b,
                            dimensionMarshal: h,
                            focusMarshal: y,
                            getResponders: c,
                            styleMarshal: f
                        })
                    }), [s, b, h, y, c, f]);
                l.current = w;
                var x = me((function () {
                    var e = jo(l);
                    "IDLE" !== e.getState().phase && e.dispatch({
                        type: "FLUSH",
                        payload: null
                    })
                }), []),
                    C = me((function () {
                        var e = jo(l).getState();
                        return e.isDragging || "DROP_ANIMATING" === e.phase
                    }), []);
                r(ge((function () {
                    return {
                        isDragging: C,
                        tryAbort: x
                    }
                }), [C, x]));
                var S = me((function (e) {
                    return mr(jo(l).getState(), e)
                }), []),
                    k = me((function () {
                        return rn(jo(l).getState())
                    }), []),
                    _ = ge((function () {
                        return {
                            marshal: h,
                            focus: y,
                            contextId: n,
                            canLift: S,
                            isMovementAllowed: k,
                            dragHandleUsageInstructionsId: d,
                            registry: m
                        }
                    }), [n, h, d, y, S, k, m]);
                return Ao({
                    contextId: n,
                    store: w,
                    registry: m,
                    customSensors: o,
                    enableDefaultSensors: !1 !== t.enableDefaultSensors
                }), (0, e.useEffect)((function () {
                    return x
                }), [x]), e.createElement(oo.Provider, {
                    value: _
                }, e.createElement(T, {
                    context: Xr,
                    store: w
                }, t.children))
            }
            var Mo = 0;

            function Bo(t) {
                var n = ge((function () {
                    return "" + Mo++
                }), []),
                    r = t.dragHandleUsageInstructions || Ge;
                return e.createElement(Me, null, (function (o) {
                    return e.createElement(Lo, {
                        nonce: t.nonce,
                        contextId: n,
                        setCallbacks: o,
                        dragHandleUsageInstructions: r,
                        enableDefaultSensors: t.enableDefaultSensors,
                        sensors: t.sensors,
                        onBeforeCapture: t.onBeforeCapture,
                        onBeforeDragStart: t.onBeforeDragStart,
                        onDragStart: t.onDragStart,
                        onDragUpdate: t.onDragUpdate,
                        onDragEnd: t.onDragEnd
                    }, t.children)
                }))
            }
            var Fo = function (e) {
                return function (t) {
                    return e === t
                }
            },
                zo = Fo("scroll"),
                Uo = Fo("auto"),
                Go = (Fo("visible"), function (e, t) {
                    return t(e.overflowX) || t(e.overflowY)
                }),
                Wo = function (e) {
                    var t = window.getComputedStyle(e),
                        n = {
                            overflowX: t.overflowX,
                            overflowY: t.overflowY
                        };
                    return Go(n, zo) || Go(n, Uo)
                },
                Ho = function e(t) {
                    return null == t || t === document.body || t === document.documentElement ? null : Wo(t) ? t : e(t.parentElement)
                },
                Vo = function (e) {
                    return {
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }
                },
                Ko = function e(t) {
                    return !!t && ("fixed" === window.getComputedStyle(t).position || e(t.parentElement))
                },
                $o = function (e) {
                    return {
                        closestScrollable: Ho(e),
                        isFixedOnPage: Ko(e)
                    }
                },
                qo = function (e) {
                    var t = e.ref,
                        n = e.descriptor,
                        r = e.env,
                        o = e.windowScroll,
                        a = e.direction,
                        i = e.isDropDisabled,
                        l = e.isCombineEnabled,
                        u = e.shouldClipSubject,
                        c = r.closestScrollable,
                        s = function (e, t) {
                            var n = _e(e);
                            if (!t) return n;
                            if (e !== t) return n;
                            var r = n.paddingBox.top - t.scrollTop,
                                o = n.paddingBox.left - t.scrollLeft,
                                a = r + t.scrollHeight,
                                i = o + t.scrollWidth,
                                l = be({
                                    top: r,
                                    right: i,
                                    bottom: a,
                                    left: o
                                }, n.border);
                            return xe({
                                borderBox: l,
                                margin: n.margin,
                                border: n.border,
                                padding: n.padding
                            })
                        }(t, c),
                        d = ke(s, o),
                        f = function () {
                            if (!c) return null;
                            var e = _e(c),
                                t = {
                                    scrollHeight: c.scrollHeight,
                                    scrollWidth: c.scrollWidth
                                };
                            return {
                                client: e,
                                page: ke(e, o),
                                scroll: Vo(c),
                                scrollSize: t,
                                shouldClipSubject: u
                            }
                        }(),
                        p = function (e) {
                            var t = e.descriptor,
                                n = e.isEnabled,
                                r = e.isCombineEnabled,
                                o = e.isFixedOnPage,
                                a = e.direction,
                                i = e.client,
                                l = e.page,
                                u = e.closest,
                                c = function () {
                                    if (!u) return null;
                                    var e = u.scrollSize,
                                        t = u.client,
                                        n = cr({
                                            scrollHeight: e.scrollHeight,
                                            scrollWidth: e.scrollWidth,
                                            height: t.paddingBox.height,
                                            width: t.paddingBox.width
                                        });
                                    return {
                                        pageMarginBox: u.page.marginBox,
                                        frameClient: t,
                                        scrollSize: e,
                                        shouldClipSubject: u.shouldClipSubject,
                                        scroll: {
                                            initial: u.scroll,
                                            current: u.scroll,
                                            max: n,
                                            diff: {
                                                value: Ke,
                                                displacement: Ke
                                            }
                                        }
                                    }
                                }(),
                                s = "vertical" === a ? Et : _t;
                            return {
                                descriptor: t,
                                isCombineEnabled: r,
                                isFixedOnPage: o,
                                axis: s,
                                isEnabled: n,
                                client: i,
                                page: l,
                                frame: c,
                                subject: ot({
                                    page: l,
                                    withPlaceholder: null,
                                    axis: s,
                                    frame: c
                                })
                            }
                        }({
                            descriptor: n,
                            isEnabled: !i,
                            isCombineEnabled: l,
                            isFixedOnPage: r.isFixedOnPage,
                            direction: a,
                            client: s,
                            page: d,
                            closest: f
                        });
                    return p
                },
                Yo = {
                    passive: !1
                },
                Qo = {
                    passive: !0
                },
                Zo = function (e) {
                    return e.shouldPublishImmediately ? Yo : Qo
                };

            function Xo(t) {
                var n = (0, e.useContext)(t);
                return n || Le(!1), n
            }
            var Jo = function (e) {
                return e && e.env.closestScrollable || null
            };

            function ea() { }
            var ta = {
                width: 0,
                height: 0,
                margin: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            },
                na = function (e) {
                    var t = e.isAnimatingOpenOnMount,
                        n = e.placeholder,
                        r = e.animate,
                        o = function (e) {
                            var t = e.isAnimatingOpenOnMount,
                                n = e.placeholder,
                                r = e.animate;
                            return t || "close" === r ? ta : {
                                height: n.client.borderBox.height,
                                width: n.client.borderBox.width,
                                margin: n.client.margin
                            }
                        }({
                            isAnimatingOpenOnMount: t,
                            placeholder: n,
                            animate: r
                        });
                    return {
                        display: n.display,
                        boxSizing: "border-box",
                        width: o.width,
                        height: o.height,
                        marginTop: o.margin.top,
                        marginRight: o.margin.right,
                        marginBottom: o.margin.bottom,
                        marginLeft: o.margin.left,
                        flexShrink: "0",
                        flexGrow: "0",
                        pointerEvents: "none",
                        transition: "none" !== r ? Gn.placeholder : null
                    }
                };
            var ra = e.memo((function (t) {
                var n = (0, e.useRef)(null),
                    r = me((function () {
                        n.current && (clearTimeout(n.current), n.current = null)
                    }), []),
                    o = t.animate,
                    a = t.onTransitionEnd,
                    i = t.onClose,
                    l = t.contextId,
                    u = (0, e.useState)("open" === t.animate),
                    c = u[0],
                    s = u[1];
                (0, e.useEffect)((function () {
                    return c ? "open" !== o ? (r(), s(!1), ea) : n.current ? ea : (n.current = setTimeout((function () {
                        n.current = null, s(!1)
                    })), r) : ea
                }), [o, c, r]);
                var d = me((function (e) {
                    "height" === e.propertyName && (a(), "close" === o && i())
                }), [o, i, a]),
                    f = na({
                        isAnimatingOpenOnMount: c,
                        animate: t.animate,
                        placeholder: t.placeholder
                    });
                return e.createElement(t.placeholder.tagName, {
                    style: f,
                    "data-rbd-placeholder-context-id": l,
                    onTransitionEnd: d,
                    ref: t.innerRef
                })
            })),
                oa = e.createContext(null);
            var aa = function (e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                        isVisible: Boolean(t.props.on),
                        data: t.props.on,
                        animate: t.props.shouldAnimate && t.props.on ? "open" : "none"
                    }, t.onClose = function () {
                        "close" === t.state.animate && t.setState({
                            isVisible: !1
                        })
                    }, t
                }
                return h(t, e), t.getDerivedStateFromProps = function (e, t) {
                    return e.shouldAnimate ? e.on ? {
                        isVisible: !0,
                        data: e.on,
                        animate: "open"
                    } : t.isVisible ? {
                        isVisible: !0,
                        data: t.data,
                        animate: "close"
                    } : {
                        isVisible: !1,
                        animate: "close",
                        data: null
                    } : {
                        isVisible: Boolean(e.on),
                        data: e.on,
                        animate: "none"
                    }
                }, t.prototype.render = function () {
                    if (!this.state.isVisible) return null;
                    var e = {
                        onClose: this.onClose,
                        data: this.state.data,
                        animate: this.state.animate
                    };
                    return this.props.children(e)
                }, t
            }(e.PureComponent),
                ia = 5e3,
                la = 4500,
                ua = function (e, t) {
                    return t ? Gn.drop(t.duration) : e ? Gn.snap : Gn.fluid
                },
                ca = function (e, t) {
                    return e ? t ? Fn.drop : Fn.combining : null
                };

            function sa(e) {
                return "DRAGGING" === e.type ? function (e) {
                    var t = e.dimension.client,
                        n = e.offset,
                        r = e.combineWith,
                        o = e.dropping,
                        a = Boolean(r),
                        i = function (e) {
                            return null != e.forceShouldAnimate ? e.forceShouldAnimate : "SNAP" === e.mode
                        }(e),
                        l = Boolean(o),
                        u = l ? Vn(n, a) : Hn(n);
                    return {
                        position: "fixed",
                        top: t.marginBox.top,
                        left: t.marginBox.left,
                        boxSizing: "border-box",
                        width: t.borderBox.width,
                        height: t.borderBox.height,
                        transition: ua(i, o),
                        transform: u,
                        opacity: ca(a, l),
                        zIndex: l ? la : ia,
                        pointerEvents: "none"
                    }
                }(e) : {
                    transform: Hn((t = e).offset),
                    transition: t.shouldAnimateDisplacement ? null : "none"
                };
                var t
            }

            function da(t) {
                var n = ro("draggable"),
                    r = t.descriptor,
                    o = t.registry,
                    a = t.getDraggableRef,
                    i = t.canDragInteractiveElements,
                    l = t.shouldRespectForcePress,
                    u = t.isEnabled,
                    c = ge((function () {
                        return {
                            canDragInteractiveElements: i,
                            shouldRespectForcePress: l,
                            isEnabled: u
                        }
                    }), [i, u, l]),
                    s = me((function (e) {
                        var t = a();
                        return t || Le(!1),
                            function (e, t, n) {
                                void 0 === n && (n = Ke);
                                var r = window.getComputedStyle(t),
                                    o = t.getBoundingClientRect(),
                                    a = Ee(o, r),
                                    i = ke(a, n);
                                return {
                                    descriptor: e,
                                    placeholder: {
                                        client: a,
                                        tagName: t.tagName.toLowerCase(),
                                        display: r.display
                                    },
                                    displaceBy: {
                                        x: a.marginBox.width,
                                        y: a.marginBox.height
                                    },
                                    client: a,
                                    page: i
                                }
                            }(r, t, e)
                    }), [r, a]),
                    d = ge((function () {
                        return {
                            uniqueId: n,
                            descriptor: r,
                            options: c,
                            getDimension: s
                        }
                    }), [r, s, c, n]),
                    f = (0, e.useRef)(d),
                    p = (0, e.useRef)(!0);
                Hr((function () {
                    return o.draggable.register(f.current),
                        function () {
                            return o.draggable.unregister(f.current)
                        }
                }), [o.draggable]), Hr((function () {
                    if (p.current) p.current = !1;
                    else {
                        var e = f.current;
                        f.current = d, o.draggable.update(d, e)
                    }
                }), [d, o.draggable])
            }

            function fa(e, t, n) {
                io()
            }

            function pa(e) {
                e.preventDefault()
            }
            var ga = function (e, t) {
                return e === t
            },
                ma = function (e) {
                    var t = e.combine,
                        n = e.destination;
                    return n ? n.droppableId : t ? t.droppableId : null
                };

            function ha(e) {
                return {
                    isDragging: !1,
                    isDropAnimating: !1,
                    isClone: !1,
                    dropAnimation: null,
                    mode: null,
                    draggingOver: null,
                    combineTargetFor: e,
                    combineWith: null
                }
            }
            var va = {
                mapped: {
                    type: "SECONDARY",
                    offset: Ke,
                    combineTargetFor: null,
                    shouldAnimateDisplacement: !0,
                    snapshot: ha(null)
                }
            };
            var ba = de((function () {
                var e = function () {
                    var e = Pe((function (e, t) {
                        return {
                            x: e,
                            y: t
                        }
                    })),
                        t = Pe((function (e, t, n, r, o) {
                            return {
                                isDragging: !0,
                                isClone: t,
                                isDropAnimating: Boolean(o),
                                dropAnimation: o,
                                mode: e,
                                draggingOver: n,
                                combineWith: r,
                                combineTargetFor: null
                            }
                        })),
                        n = Pe((function (e, n, r, o, a, i, l) {
                            return {
                                mapped: {
                                    type: "DRAGGING",
                                    dropping: null,
                                    draggingOver: a,
                                    combineWith: i,
                                    mode: n,
                                    offset: e,
                                    dimension: r,
                                    forceShouldAnimate: l,
                                    snapshot: t(n, o, a, i, null)
                                }
                            }
                        }));
                    return function (r, o) {
                        if (r.isDragging) {
                            if (r.critical.draggable.id !== o.draggableId) return null;
                            var a = r.current.client.offset,
                                i = r.dimensions.draggables[o.draggableId],
                                l = tn(r.impact),
                                u = (s = r.impact).at && "COMBINE" === s.at.type ? s.at.combine.draggableId : null,
                                c = r.forceShouldAnimate;
                            return n(e(a.x, a.y), r.movementMode, i, o.isClone, l, u, c)
                        }
                        var s;
                        if ("DROP_ANIMATING" === r.phase) {
                            var d = r.completed;
                            if (d.result.draggableId !== o.draggableId) return null;
                            var f = o.isClone,
                                p = r.dimensions.draggables[o.draggableId],
                                g = d.result,
                                m = g.mode,
                                h = ma(g),
                                v = function (e) {
                                    return e.combine ? e.combine.draggableId : null
                                }(g),
                                b = {
                                    duration: r.dropDuration,
                                    curve: Bn,
                                    moveTo: r.newHomeClientOffset,
                                    opacity: v ? Fn.drop : null,
                                    scale: v ? zn.drop : null
                                };
                            return {
                                mapped: {
                                    type: "DRAGGING",
                                    offset: r.newHomeClientOffset,
                                    dimension: p,
                                    dropping: b,
                                    draggingOver: h,
                                    combineWith: v,
                                    mode: m,
                                    forceShouldAnimate: null,
                                    snapshot: t(m, f, h, v, b)
                                }
                            }
                        }
                        return null
                    }
                }(),
                    t = function () {
                        var e = Pe((function (e, t) {
                            return {
                                x: e,
                                y: t
                            }
                        })),
                            t = Pe(ha),
                            n = Pe((function (e, n, r) {
                                return void 0 === n && (n = null), {
                                    mapped: {
                                        type: "SECONDARY",
                                        offset: e,
                                        combineTargetFor: n,
                                        shouldAnimateDisplacement: r,
                                        snapshot: t(n)
                                    }
                                }
                            })),
                            r = function (e) {
                                return e ? n(Ke, e, !0) : null
                            },
                            o = function (t, o, a, i) {
                                var l = a.displaced.visible[t],
                                    u = Boolean(i.inVirtualList && i.effected[t]),
                                    c = ht(a),
                                    s = c && c.draggableId === t ? o : null;
                                if (!l) {
                                    if (!u) return r(s);
                                    if (a.displaced.invisible[t]) return null;
                                    var d = Qe(i.displacedBy.point),
                                        f = e(d.x, d.y);
                                    return n(f, s, !0)
                                }
                                if (u) return r(s);
                                var p = a.displacedBy.point,
                                    g = e(p.x, p.y);
                                return n(g, s, l.shouldAnimate)
                            };
                        return function (e, t) {
                            if (e.isDragging) return e.critical.draggable.id === t.draggableId ? null : o(t.draggableId, e.critical.draggable.id, e.impact, e.afterCritical);
                            if ("DROP_ANIMATING" === e.phase) {
                                var n = e.completed;
                                return n.result.draggableId === t.draggableId ? null : o(t.draggableId, n.result.draggableId, n.impact, n.afterCritical)
                            }
                            return null
                        }
                    }();
                return function (n, r) {
                    return e(n, r) || t(n, r) || va
                }
            }), {
                dropAnimationFinished: Mn
            }, null, {
                context: Xr,
                pure: !0,
                areStatePropsEqual: ga
            })((function (t) {
                var n = (0, e.useRef)(null),
                    r = me((function (e) {
                        n.current = e
                    }), []),
                    o = me((function () {
                        return n.current
                    }), []),
                    a = Xo(oo),
                    i = a.contextId,
                    l = a.dragHandleUsageInstructionsId,
                    u = a.registry,
                    c = Xo(oa),
                    s = c.type,
                    d = c.droppableId,
                    f = ge((function () {
                        return {
                            id: t.draggableId,
                            index: t.index,
                            type: s,
                            droppableId: d
                        }
                    }), [t.draggableId, t.index, s, d]),
                    p = t.children,
                    g = t.draggableId,
                    m = t.isEnabled,
                    h = t.shouldRespectForcePress,
                    v = t.canDragInteractiveElements,
                    b = t.isClone,
                    y = t.mapped,
                    w = t.dropAnimationFinished;
                fa(), ao(), b || da(ge((function () {
                    return {
                        descriptor: f,
                        registry: u,
                        getDraggableRef: o,
                        canDragInteractiveElements: v,
                        shouldRespectForcePress: h,
                        isEnabled: m
                    }
                }), [f, u, o, v, h, m]));
                var x = ge((function () {
                    return m ? {
                        tabIndex: 0,
                        role: "button",
                        "aria-describedby": l,
                        "data-rbd-drag-handle-draggable-id": g,
                        "data-rbd-drag-handle-context-id": i,
                        draggable: !1,
                        onDragStart: pa
                    } : null
                }), [i, l, g, m]),
                    C = me((function (e) {
                        "DRAGGING" === y.type && y.dropping && "transform" === e.propertyName && w()
                    }), [w, y]),
                    S = ge((function () {
                        var e = sa(y),
                            t = "DRAGGING" === y.type && y.dropping ? C : null;
                        return {
                            innerRef: r,
                            draggableProps: {
                                "data-rbd-draggable-context-id": i,
                                "data-rbd-draggable-id": g,
                                style: e,
                                onTransitionEnd: t
                            },
                            dragHandleProps: x
                        }
                    }), [i, x, g, y, C, r]),
                    k = ge((function () {
                        return {
                            draggableId: f.id,
                            type: f.type,
                            source: {
                                index: f.index,
                                droppableId: f.droppableId
                            }
                        }
                    }), [f.droppableId, f.id, f.index, f.type]);
                return p(S, y.snapshot, k)
            }));

            function ya(t) {
                return Xo(oa).isUsingCloneFor !== t.draggableId || t.isClone ? e.createElement(ba, t) : null
            }

            function wa(t) {
                var n = "boolean" !== typeof t.isDragDisabled || !t.isDragDisabled,
                    r = Boolean(t.disableInteractiveElementBlocking),
                    o = Boolean(t.shouldRespectForcePress);
                return e.createElement(ya, v({}, t, {
                    isClone: !1,
                    isEnabled: n,
                    canDragInteractiveElements: r,
                    shouldRespectForcePress: o
                }))
            }
            var xa = function (e, t) {
                return e === t.droppable.type
            },
                Ca = function (e, t) {
                    return t.draggables[e.draggable.id]
                };
            var Sa = {
                mode: "standard",
                type: "DEFAULT",
                direction: "vertical",
                isDropDisabled: !1,
                isCombineEnabled: !1,
                ignoreContainerClipping: !1,
                renderClone: null,
                getContainerForClone: function () {
                    return document.body || Le(!1), document.body
                }
            },
                ka = de((function () {
                    var e = {
                        placeholder: null,
                        shouldAnimatePlaceholder: !0,
                        snapshot: {
                            isDraggingOver: !1,
                            draggingOverWith: null,
                            draggingFromThisWith: null,
                            isUsingPlaceholder: !1
                        },
                        useClone: null
                    },
                        t = v({}, e, {
                            shouldAnimatePlaceholder: !1
                        }),
                        n = Pe((function (e) {
                            return {
                                draggableId: e.id,
                                type: e.type,
                                source: {
                                    index: e.index,
                                    droppableId: e.droppableId
                                }
                            }
                        })),
                        r = Pe((function (r, o, a, i, l, u) {
                            var c = l.descriptor.id;
                            if (l.descriptor.droppableId === r) {
                                var s = u ? {
                                    render: u,
                                    dragging: n(l.descriptor)
                                } : null,
                                    d = {
                                        isDraggingOver: a,
                                        draggingOverWith: a ? c : null,
                                        draggingFromThisWith: c,
                                        isUsingPlaceholder: !0
                                    };
                                return {
                                    placeholder: l.placeholder,
                                    shouldAnimatePlaceholder: !1,
                                    snapshot: d,
                                    useClone: s
                                }
                            }
                            if (!o) return t;
                            if (!i) return e;
                            var f = {
                                isDraggingOver: a,
                                draggingOverWith: c,
                                draggingFromThisWith: null,
                                isUsingPlaceholder: !0
                            };
                            return {
                                placeholder: l.placeholder,
                                shouldAnimatePlaceholder: !0,
                                snapshot: f,
                                useClone: null
                            }
                        }));
                    return function (n, o) {
                        var a = o.droppableId,
                            i = o.type,
                            l = !o.isDropDisabled,
                            u = o.renderClone;
                        if (n.isDragging) {
                            var c = n.critical;
                            if (!xa(i, c)) return t;
                            var s = Ca(c, n.dimensions),
                                d = tn(n.impact) === a;
                            return r(a, l, d, d, s, u)
                        }
                        if ("DROP_ANIMATING" === n.phase) {
                            var f = n.completed;
                            if (!xa(i, f.critical)) return t;
                            var p = Ca(f.critical, n.dimensions);
                            return r(a, l, ma(f.result) === a, tn(f.impact) === a, p, u)
                        }
                        if ("IDLE" === n.phase && n.completed && !n.shouldFlush) {
                            var g = n.completed;
                            if (!xa(i, g.critical)) return t;
                            var m = tn(g.impact) === a,
                                h = Boolean(g.impact.at && "COMBINE" === g.impact.at.type),
                                v = g.critical.droppable.id === a;
                            return m ? h ? e : t : v ? e : t
                        }
                        return t
                    }
                }), {
                    updateViewportMaxScroll: function (e) {
                        return {
                            type: "UPDATE_VIEWPORT_MAX_SCROLL",
                            payload: e
                        }
                    }
                }, null, {
                    context: Xr,
                    pure: !0,
                    areStatePropsEqual: ga
                })((function (n) {
                    var r = (0, e.useContext)(oo);
                    r || Le(!1);
                    var o = r.contextId,
                        a = r.isMovementAllowed,
                        i = (0, e.useRef)(null),
                        l = (0, e.useRef)(null),
                        u = n.children,
                        c = n.droppableId,
                        s = n.type,
                        d = n.mode,
                        f = n.direction,
                        p = n.ignoreContainerClipping,
                        g = n.isDropDisabled,
                        m = n.isCombineEnabled,
                        h = n.snapshot,
                        v = n.useClone,
                        b = n.updateViewportMaxScroll,
                        y = n.getContainerForClone,
                        w = me((function () {
                            return i.current
                        }), []),
                        x = me((function (e) {
                            i.current = e
                        }), []),
                        C = (me((function () {
                            return l.current
                        }), []), me((function (e) {
                            l.current = e
                        }), []));
                    io();
                    var S = me((function () {
                        a() && b({
                            maxScroll: dr()
                        })
                    }), [a, b]);
                    ! function (t) {
                        var n = (0, e.useRef)(null),
                            r = Xo(oo),
                            o = ro("droppable"),
                            a = r.registry,
                            i = r.marshal,
                            l = uo(t),
                            u = ge((function () {
                                return {
                                    id: t.droppableId,
                                    type: t.type,
                                    mode: t.mode
                                }
                            }), [t.droppableId, t.mode, t.type]),
                            c = (0, e.useRef)(u),
                            s = ge((function () {
                                return Pe((function (e, t) {
                                    n.current || Le(!1);
                                    var r = {
                                        x: e,
                                        y: t
                                    };
                                    i.updateDroppableScroll(u.id, r)
                                }))
                            }), [u.id, i]),
                            d = me((function () {
                                var e = n.current;
                                return e && e.env.closestScrollable ? Vo(e.env.closestScrollable) : Ke
                            }), []),
                            f = me((function () {
                                var e = d();
                                s(e.x, e.y)
                            }), [d, s]),
                            p = ge((function () {
                                return Oe(f)
                            }), [f]),
                            g = me((function () {
                                var e = n.current,
                                    t = Jo(e);
                                e && t || Le(!1), e.scrollOptions.shouldPublishImmediately ? f() : p()
                            }), [p, f]),
                            m = me((function (e, t) {
                                n.current && Le(!1);
                                var o = l.current,
                                    a = o.getDroppableRef();
                                a || Le(!1);
                                var i = $o(a),
                                    c = {
                                        ref: a,
                                        descriptor: u,
                                        env: i,
                                        scrollOptions: t
                                    };
                                n.current = c;
                                var s = qo({
                                    ref: a,
                                    descriptor: u,
                                    env: i,
                                    windowScroll: e,
                                    direction: o.direction,
                                    isDropDisabled: o.isDropDisabled,
                                    isCombineEnabled: o.isCombineEnabled,
                                    shouldClipSubject: !o.ignoreContainerClipping
                                }),
                                    d = i.closestScrollable;
                                return d && (d.setAttribute(Gr.contextId, r.contextId), d.addEventListener("scroll", g, Zo(c.scrollOptions))), s
                            }), [r.contextId, u, g, l]),
                            h = me((function () {
                                var e = n.current,
                                    t = Jo(e);
                                return e && t || Le(!1), Vo(t)
                            }), []),
                            v = me((function () {
                                var e = n.current;
                                e || Le(!1);
                                var t = Jo(e);
                                n.current = null, t && (p.cancel(), t.removeAttribute(Gr.contextId), t.removeEventListener("scroll", g, Zo(e.scrollOptions)))
                            }), [g, p]),
                            b = me((function (e) {
                                var t = n.current;
                                t || Le(!1);
                                var r = Jo(t);
                                r || Le(!1), r.scrollTop += e.y, r.scrollLeft += e.x
                            }), []),
                            y = ge((function () {
                                return {
                                    getDimensionAndWatchScroll: m,
                                    getScrollWhileDragging: h,
                                    dragStopped: v,
                                    scroll: b
                                }
                            }), [v, m, h, b]),
                            w = ge((function () {
                                return {
                                    uniqueId: o,
                                    descriptor: u,
                                    callbacks: y
                                }
                            }), [y, u, o]);
                        Hr((function () {
                            return c.current = w.descriptor, a.droppable.register(w),
                                function () {
                                    n.current && v(), a.droppable.unregister(w)
                                }
                        }), [y, u, v, w, i, a.droppable]), Hr((function () {
                            n.current && i.updateDroppableIsEnabled(c.current.id, !t.isDropDisabled)
                        }), [t.isDropDisabled, i]), Hr((function () {
                            n.current && i.updateDroppableIsCombineEnabled(c.current.id, t.isCombineEnabled)
                        }), [t.isCombineEnabled, i])
                    }({
                        droppableId: c,
                        type: s,
                        mode: d,
                        direction: f,
                        isDropDisabled: g,
                        isCombineEnabled: m,
                        ignoreContainerClipping: p,
                        getDroppableRef: w
                    });
                    var k = e.createElement(aa, {
                        on: n.placeholder,
                        shouldAnimate: n.shouldAnimatePlaceholder
                    }, (function (t) {
                        var n = t.onClose,
                            r = t.data,
                            a = t.animate;
                        return e.createElement(ra, {
                            placeholder: r,
                            onClose: n,
                            innerRef: C,
                            animate: a,
                            contextId: o,
                            onTransitionEnd: S
                        })
                    })),
                        E = ge((function () {
                            return {
                                innerRef: x,
                                placeholder: k,
                                droppableProps: {
                                    "data-rbd-droppable-id": c,
                                    "data-rbd-droppable-context-id": o
                                }
                            }
                        }), [o, c, k, x]),
                        _ = v ? v.dragging.draggableId : null,
                        N = ge((function () {
                            return {
                                droppableId: c,
                                type: s,
                                isUsingCloneFor: _
                            }
                        }), [c, _, s]);
                    return e.createElement(oa.Provider, {
                        value: N
                    }, u(E, h), function () {
                        if (!v) return null;
                        var n = v.dragging,
                            r = v.render,
                            o = e.createElement(ya, {
                                draggableId: n.draggableId,
                                index: n.source.index,
                                isClone: !0,
                                isEnabled: !0,
                                shouldRespectForcePress: !1,
                                canDragInteractiveElements: !0
                            }, (function (e, t) {
                                return r(e, t, n)
                            }));
                        return t.createPortal(o, y())
                    }())
                }));
            ka.defaultProps = Sa;
            var Ea = n(613),
                _a = n.n(Ea);
            var Na = function (e) {
                function t(e, r, u, c, f) {
                    for (var p, g, m, h, w, C = 0, S = 0, k = 0, E = 0, _ = 0, R = 0, A = m = p = 0, L = 0, M = 0, B = 0, F = 0, z = u.length, U = z - 1, G = "", W = "", H = "", V = ""; L < z;) {
                        if (g = u.charCodeAt(L), L === U && 0 !== S + E + k + C && (0 !== S && (g = 47 === S ? 10 : 47), E = k = C = 0, z++, U++), 0 === S + E + k + C) {
                            if (L === U && (0 < M && (G = G.replace(d, "")), 0 < G.trim().length)) {
                                switch (g) {
                                    case 32:
                                    case 9:
                                    case 59:
                                    case 13:
                                    case 10:
                                        break;
                                    default:
                                        G += u.charAt(L)
                                }
                                g = 59
                            }
                            switch (g) {
                                case 123:
                                    for (p = (G = G.trim()).charCodeAt(0), m = 1, F = ++L; L < z;) {
                                        switch (g = u.charCodeAt(L)) {
                                            case 123:
                                                m++;
                                                break;
                                            case 125:
                                                m--;
                                                break;
                                            case 47:
                                                switch (g = u.charCodeAt(L + 1)) {
                                                    case 42:
                                                    case 47:
                                                        e: {
                                                            for (A = L + 1; A < U; ++A) switch (u.charCodeAt(A)) {
                                                                case 47:
                                                                    if (42 === g && 42 === u.charCodeAt(A - 1) && L + 2 !== A) {
                                                                        L = A + 1;
                                                                        break e
                                                                    }
                                                                    break;
                                                                case 10:
                                                                    if (47 === g) {
                                                                        L = A + 1;
                                                                        break e
                                                                    }
                                                            }
                                                            L = A
                                                        }
                                                }
                                                break;
                                            case 91:
                                                g++;
                                            case 40:
                                                g++;
                                            case 34:
                                            case 39:
                                                for (; L++ < U && u.charCodeAt(L) !== g;);
                                        }
                                        if (0 === m) break;
                                        L++
                                    }
                                    if (m = u.substring(F, L), 0 === p && (p = (G = G.replace(s, "").trim()).charCodeAt(0)), 64 === p) {
                                        switch (0 < M && (G = G.replace(d, "")), g = G.charCodeAt(1)) {
                                            case 100:
                                            case 109:
                                            case 115:
                                            case 45:
                                                M = r;
                                                break;
                                            default:
                                                M = D
                                        }
                                        if (F = (m = t(r, M, m, g, f + 1)).length, 0 < T && (w = l(3, m, M = n(D, G, B), r, I, N, F, g, f, c), G = M.join(""), void 0 !== w && 0 === (F = (m = w.trim()).length) && (g = 0, m = "")), 0 < F) switch (g) {
                                            case 115:
                                                G = G.replace(x, i);
                                            case 100:
                                            case 109:
                                            case 45:
                                                m = G + "{" + m + "}";
                                                break;
                                            case 107:
                                                m = (G = G.replace(v, "$1 $2")) + "{" + m + "}", m = 1 === O || 2 === O && a("@" + m, 3) ? "@-webkit-" + m + "@" + m : "@" + m;
                                                break;
                                            default:
                                                m = G + m, 112 === c && (W += m, m = "")
                                        } else m = ""
                                    } else m = t(r, n(r, G, B), m, c, f + 1);
                                    H += m, m = B = M = A = p = 0, G = "", g = u.charCodeAt(++L);
                                    break;
                                case 125:
                                case 59:
                                    if (1 < (F = (G = (0 < M ? G.replace(d, "") : G).trim()).length)) switch (0 === A && (p = G.charCodeAt(0), 45 === p || 96 < p && 123 > p) && (F = (G = G.replace(" ", ":")).length), 0 < T && void 0 !== (w = l(1, G, r, e, I, N, W.length, c, f, c)) && 0 === (F = (G = w.trim()).length) && (G = "\0\0"), p = G.charCodeAt(0), g = G.charCodeAt(1), p) {
                                        case 0:
                                            break;
                                        case 64:
                                            if (105 === g || 99 === g) {
                                                V += G + u.charAt(L);
                                                break
                                            }
                                        default:
                                            58 !== G.charCodeAt(F - 1) && (W += o(G, p, g, G.charCodeAt(2)))
                                    }
                                    B = M = A = p = 0, G = "", g = u.charCodeAt(++L)
                            }
                        }
                        switch (g) {
                            case 13:
                            case 10:
                                47 === S ? S = 0 : 0 === 1 + p && 107 !== c && 0 < G.length && (M = 1, G += "\0"), 0 < T * j && l(0, G, r, e, I, N, W.length, c, f, c), N = 1, I++;
                                break;
                            case 59:
                            case 125:
                                if (0 === S + E + k + C) {
                                    N++;
                                    break
                                }
                            default:
                                switch (N++, h = u.charAt(L), g) {
                                    case 9:
                                    case 32:
                                        if (0 === E + C + S) switch (_) {
                                            case 44:
                                            case 58:
                                            case 9:
                                            case 32:
                                                h = "";
                                                break;
                                            default:
                                                32 !== g && (h = " ")
                                        }
                                        break;
                                    case 0:
                                        h = "\\0";
                                        break;
                                    case 12:
                                        h = "\\f";
                                        break;
                                    case 11:
                                        h = "\\v";
                                        break;
                                    case 38:
                                        0 === E + S + C && (M = B = 1, h = "\f" + h);
                                        break;
                                    case 108:
                                        if (0 === E + S + C + P && 0 < A) switch (L - A) {
                                            case 2:
                                                112 === _ && 58 === u.charCodeAt(L - 3) && (P = _);
                                            case 8:
                                                111 === R && (P = R)
                                        }
                                        break;
                                    case 58:
                                        0 === E + S + C && (A = L);
                                        break;
                                    case 44:
                                        0 === S + k + E + C && (M = 1, h += "\r");
                                        break;
                                    case 34:
                                    case 39:
                                        0 === S && (E = E === g ? 0 : 0 === E ? g : E);
                                        break;
                                    case 91:
                                        0 === E + S + k && C++;
                                        break;
                                    case 93:
                                        0 === E + S + k && C--;
                                        break;
                                    case 41:
                                        0 === E + S + C && k--;
                                        break;
                                    case 40:
                                        if (0 === E + S + C) {
                                            if (0 === p)
                                                if (2 * _ + 3 * R === 533);
                                                else p = 1;
                                            k++
                                        }
                                        break;
                                    case 64:
                                        0 === S + k + E + C + A + m && (m = 1);
                                        break;
                                    case 42:
                                    case 47:
                                        if (!(0 < E + C + k)) switch (S) {
                                            case 0:
                                                switch (2 * g + 3 * u.charCodeAt(L + 1)) {
                                                    case 235:
                                                        S = 47;
                                                        break;
                                                    case 220:
                                                        F = L, S = 42
                                                }
                                                break;
                                            case 42:
                                                47 === g && 42 === _ && F + 2 !== L && (33 === u.charCodeAt(F + 2) && (W += u.substring(F, L + 1)), h = "", S = 0)
                                        }
                                }
                                0 === S && (G += h)
                        }
                        R = _, _ = g, L++
                    }
                    if (0 < (F = W.length)) {
                        if (M = r, 0 < T && (void 0 !== (w = l(2, W, M, e, I, N, F, c, f, c)) && 0 === (W = w).length)) return V + W + H;
                        if (W = M.join(",") + "{" + W + "}", 0 !== O * P) {
                            switch (2 !== O || a(W, 2) || (P = 0), P) {
                                case 111:
                                    W = W.replace(y, ":-moz-$1") + W;
                                    break;
                                case 112:
                                    W = W.replace(b, "::-webkit-input-$1") + W.replace(b, "::-moz-$1") + W.replace(b, ":-ms-input-$1") + W
                            }
                            P = 0
                        }
                    }
                    return V + W + H
                }

                function n(e, t, n) {
                    var o = t.trim().split(m);
                    t = o;
                    var a = o.length,
                        i = e.length;
                    switch (i) {
                        case 0:
                        case 1:
                            var l = 0;
                            for (e = 0 === i ? "" : e[0] + " "; l < a; ++l) t[l] = r(e, t[l], n).trim();
                            break;
                        default:
                            var u = l = 0;
                            for (t = []; l < a; ++l)
                                for (var c = 0; c < i; ++c) t[u++] = r(e[c] + " ", o[l], n).trim()
                    }
                    return t
                }

                function r(e, t, n) {
                    var r = t.charCodeAt(0);
                    switch (33 > r && (r = (t = t.trim()).charCodeAt(0)), r) {
                        case 38:
                            return t.replace(h, "$1" + e.trim());
                        case 58:
                            return e.trim() + t.replace(h, "$1" + e.trim());
                        default:
                            if (0 < 1 * n && 0 < t.indexOf("\f")) return t.replace(h, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
                    }
                    return e + t
                }

                function o(e, t, n, r) {
                    var i = e + ";",
                        l = 2 * t + 3 * n + 4 * r;
                    if (944 === l) {
                        e = i.indexOf(":", 9) + 1;
                        var u = i.substring(e, i.length - 1).trim();
                        return u = i.substring(0, e).trim() + u + ";", 1 === O || 2 === O && a(u, 1) ? "-webkit-" + u + u : u
                    }
                    if (0 === O || 2 === O && !a(i, 1)) return i;
                    switch (l) {
                        case 1015:
                            return 97 === i.charCodeAt(10) ? "-webkit-" + i + i : i;
                        case 951:
                            return 116 === i.charCodeAt(3) ? "-webkit-" + i + i : i;
                        case 963:
                            return 110 === i.charCodeAt(5) ? "-webkit-" + i + i : i;
                        case 1009:
                            if (100 !== i.charCodeAt(4)) break;
                        case 969:
                        case 942:
                            return "-webkit-" + i + i;
                        case 978:
                            return "-webkit-" + i + "-moz-" + i + i;
                        case 1019:
                        case 983:
                            return "-webkit-" + i + "-moz-" + i + "-ms-" + i + i;
                        case 883:
                            if (45 === i.charCodeAt(8)) return "-webkit-" + i + i;
                            if (0 < i.indexOf("image-set(", 11)) return i.replace(_, "$1-webkit-$2") + i;
                            break;
                        case 932:
                            if (45 === i.charCodeAt(4)) switch (i.charCodeAt(5)) {
                                case 103:
                                    return "-webkit-box-" + i.replace("-grow", "") + "-webkit-" + i + "-ms-" + i.replace("grow", "positive") + i;
                                case 115:
                                    return "-webkit-" + i + "-ms-" + i.replace("shrink", "negative") + i;
                                case 98:
                                    return "-webkit-" + i + "-ms-" + i.replace("basis", "preferred-size") + i
                            }
                            return "-webkit-" + i + "-ms-" + i + i;
                        case 964:
                            return "-webkit-" + i + "-ms-flex-" + i + i;
                        case 1023:
                            if (99 !== i.charCodeAt(8)) break;
                            return "-webkit-box-pack" + (u = i.substring(i.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + i + "-ms-flex-pack" + u + i;
                        case 1005:
                            return p.test(i) ? i.replace(f, ":-webkit-") + i.replace(f, ":-moz-") + i : i;
                        case 1e3:
                            switch (t = (u = i.substring(13).trim()).indexOf("-") + 1, u.charCodeAt(0) + u.charCodeAt(t)) {
                                case 226:
                                    u = i.replace(w, "tb");
                                    break;
                                case 232:
                                    u = i.replace(w, "tb-rl");
                                    break;
                                case 220:
                                    u = i.replace(w, "lr");
                                    break;
                                default:
                                    return i
                            }
                            return "-webkit-" + i + "-ms-" + u + i;
                        case 1017:
                            if (-1 === i.indexOf("sticky", 9)) break;
                        case 975:
                            switch (t = (i = e).length - 10, l = (u = (33 === i.charCodeAt(t) ? i.substring(0, t) : i).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | u.charCodeAt(7))) {
                                case 203:
                                    if (111 > u.charCodeAt(8)) break;
                                case 115:
                                    i = i.replace(u, "-webkit-" + u) + ";" + i;
                                    break;
                                case 207:
                                case 102:
                                    i = i.replace(u, "-webkit-" + (102 < l ? "inline-" : "") + "box") + ";" + i.replace(u, "-webkit-" + u) + ";" + i.replace(u, "-ms-" + u + "box") + ";" + i
                            }
                            return i + ";";
                        case 938:
                            if (45 === i.charCodeAt(5)) switch (i.charCodeAt(6)) {
                                case 105:
                                    return u = i.replace("-items", ""), "-webkit-" + i + "-webkit-box-" + u + "-ms-flex-" + u + i;
                                case 115:
                                    return "-webkit-" + i + "-ms-flex-item-" + i.replace(S, "") + i;
                                default:
                                    return "-webkit-" + i + "-ms-flex-line-pack" + i.replace("align-content", "").replace(S, "") + i
                            }
                            break;
                        case 973:
                        case 989:
                            if (45 !== i.charCodeAt(3) || 122 === i.charCodeAt(4)) break;
                        case 931:
                        case 953:
                            if (!0 === E.test(e)) return 115 === (u = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? o(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch") : i.replace(u, "-webkit-" + u) + i.replace(u, "-moz-" + u.replace("fill-", "")) + i;
                            break;
                        case 962:
                            if (i = "-webkit-" + i + (102 === i.charCodeAt(5) ? "-ms-" + i : "") + i, 211 === n + r && 105 === i.charCodeAt(13) && 0 < i.indexOf("transform", 10)) return i.substring(0, i.indexOf(";", 27) + 1).replace(g, "$1-webkit-$2") + i
                    }
                    return i
                }

                function a(e, t) {
                    var n = e.indexOf(1 === t ? ":" : "{"),
                        r = e.substring(0, 3 !== t ? n : 10);
                    return n = e.substring(n + 1, e.length - 1), A(2 !== t ? r : r.replace(k, "$1"), n, t)
                }

                function i(e, t) {
                    var n = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                    return n !== t + ";" ? n.replace(C, " or ($1)").substring(4) : "(" + t + ")"
                }

                function l(e, t, n, r, o, a, i, l, u, s) {
                    for (var d, f = 0, p = t; f < T; ++f) switch (d = R[f].call(c, e, p, n, r, o, a, i, l, u, s)) {
                        case void 0:
                        case !1:
                        case !0:
                        case null:
                            break;
                        default:
                            p = d
                    }
                    if (p !== t) return p
                }

                function u(e) {
                    return void 0 !== (e = e.prefix) && (A = null, e ? "function" !== typeof e ? O = 1 : (O = 2, A = e) : O = 0), u
                }

                function c(e, n) {
                    var r = e;
                    if (33 > r.charCodeAt(0) && (r = r.trim()), r = [r], 0 < T) {
                        var o = l(-1, n, r, r, I, N, 0, 0, 0, 0);
                        void 0 !== o && "string" === typeof o && (n = o)
                    }
                    var a = t(D, r, n, 0, 0);
                    return 0 < T && (void 0 !== (o = l(-2, a, r, r, I, N, a.length, 0, 0, 0)) && (a = o)), "", P = 0, N = I = 1, a
                }
                var s = /^\0+/g,
                    d = /[\0\r\f]/g,
                    f = /: */g,
                    p = /zoo|gra/,
                    g = /([,: ])(transform)/g,
                    m = /,\r+?/g,
                    h = /([\t\r\n ])*\f?&/g,
                    v = /@(k\w+)\s*(\S*)\s*/,
                    b = /::(place)/g,
                    y = /:(read-only)/g,
                    w = /[svh]\w+-[tblr]{2}/,
                    x = /\(\s*(.*)\s*\)/g,
                    C = /([\s\S]*?);/g,
                    S = /-self|flex-/g,
                    k = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                    E = /stretch|:\s*\w+\-(?:conte|avail)/,
                    _ = /([^-])(image-set\()/,
                    N = 1,
                    I = 1,
                    P = 0,
                    O = 1,
                    D = [],
                    R = [],
                    T = 0,
                    A = null,
                    j = 0;
                return c.use = function e(t) {
                    switch (t) {
                        case void 0:
                        case null:
                            T = R.length = 0;
                            break;
                        default:
                            if ("function" === typeof t) R[T++] = t;
                            else if ("object" === typeof t)
                                for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                            else j = 0 | !!t
                    }
                    return e
                }, c.set = u, void 0 !== e && u(e), c
            },
                Ia = {
                    animationIterationCount: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                };
            var Pa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                Oa = function (e) {
                    var t = Object.create(null);
                    return function (n) {
                        return void 0 === t[n] && (t[n] = e(n)), t[n]
                    }
                }((function (e) {
                    return Pa.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
                }));

            function Da() {
                return (Da = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Ra = function (e, t) {
                for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
                return n
            },
                Ta = function (e) {
                    return null !== e && "object" == typeof e && "[object Object]" === (e.toString ? e.toString() : Object.prototype.toString.call(e)) && !(0, M.typeOf)(e)
                },
                Aa = Object.freeze([]),
                ja = Object.freeze({});

            function La(e) {
                return "function" == typeof e
            }

            function Ma(e) {
                return e.displayName || e.name || "Component"
            }

            function Ba(e) {
                return e && "string" == typeof e.styledComponentId
            }
            var Fa = "undefined" != typeof process && ({
                NODE_ENV: "production",
                PUBLIC_URL: "https://cf.eip.telegraph.co.uk/embeds/22__worldcup-predictor",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            }.REACT_APP_SC_ATTR || {
                NODE_ENV: "production",
                PUBLIC_URL: "https://cf.eip.telegraph.co.uk/embeds/22__worldcup-predictor",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            }.SC_ATTR) || "data-styled",
                za = "undefined" != typeof window && "HTMLElement" in window,
                Ua = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== {
                    NODE_ENV: "production",
                    PUBLIC_URL: "https://cf.eip.telegraph.co.uk/embeds/22__worldcup-predictor",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0
                }.REACT_APP_SC_DISABLE_SPEEDY && "" !== {
                    NODE_ENV: "production",
                    PUBLIC_URL: "https://cf.eip.telegraph.co.uk/embeds/22__worldcup-predictor",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0
                }.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== {
                    NODE_ENV: "production",
                    PUBLIC_URL: "https://cf.eip.telegraph.co.uk/embeds/22__worldcup-predictor",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0
                }.REACT_APP_SC_DISABLE_SPEEDY && {
                    NODE_ENV: "production",
                    PUBLIC_URL: "https://cf.eip.telegraph.co.uk/embeds/22__worldcup-predictor",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0
                }.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== {
                    NODE_ENV: "production",
                    PUBLIC_URL: "https://cf.eip.telegraph.co.uk/embeds/22__worldcup-predictor",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0
                }.SC_DISABLE_SPEEDY && "" !== {
                    NODE_ENV: "production",
                    PUBLIC_URL: "https://cf.eip.telegraph.co.uk/embeds/22__worldcup-predictor",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0
                }.SC_DISABLE_SPEEDY && ("false" !== {
                    NODE_ENV: "production",
                    PUBLIC_URL: "https://cf.eip.telegraph.co.uk/embeds/22__worldcup-predictor",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0
                }.SC_DISABLE_SPEEDY && {
                    NODE_ENV: "production",
                    PUBLIC_URL: "https://cf.eip.telegraph.co.uk/embeds/22__worldcup-predictor",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0
                }.SC_DISABLE_SPEEDY));

            function Ga(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""))
            }
            var Wa = function () {
                function e(e) {
                    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
                }
                var t = e.prototype;
                return t.indexOfGroup = function (e) {
                    for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                    return t
                }, t.insertRules = function (e, t) {
                    if (e >= this.groupSizes.length) {
                        for (var n = this.groupSizes, r = n.length, o = r; e >= o;)(o <<= 1) < 0 && Ga(16, "" + e);
                        this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
                        for (var a = r; a < o; a++) this.groupSizes[a] = 0
                    }
                    for (var i = this.indexOfGroup(e + 1), l = 0, u = t.length; l < u; l++) this.tag.insertRule(i, t[l]) && (this.groupSizes[e]++, i++)
                }, t.clearGroup = function (e) {
                    if (e < this.length) {
                        var t = this.groupSizes[e],
                            n = this.indexOfGroup(e),
                            r = n + t;
                        this.groupSizes[e] = 0;
                        for (var o = n; o < r; o++) this.tag.deleteRule(n)
                    }
                }, t.getGroup = function (e) {
                    var t = "";
                    if (e >= this.length || 0 === this.groupSizes[e]) return t;
                    for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, a = r; a < o; a++) t += this.tag.getRule(a) + "/*!sc*/\n";
                    return t
                }, e
            }(),
                Ha = new Map,
                Va = new Map,
                Ka = 1,
                $a = function (e) {
                    if (Ha.has(e)) return Ha.get(e);
                    for (; Va.has(Ka);) Ka++;
                    var t = Ka++;
                    return Ha.set(e, t), Va.set(t, e), t
                },
                qa = function (e) {
                    return Va.get(e)
                },
                Ya = function (e, t) {
                    t >= Ka && (Ka = t + 1), Ha.set(e, t), Va.set(t, e)
                },
                Qa = "style[" + Fa + '][data-styled-version="5.3.5"]',
                Za = new RegExp("^" + Fa + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
                Xa = function (e, t, n) {
                    for (var r, o = n.split(","), a = 0, i = o.length; a < i; a++)(r = o[a]) && e.registerName(t, r)
                },
                Ja = function (e, t) {
                    for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, a = n.length; o < a; o++) {
                        var i = n[o].trim();
                        if (i) {
                            var l = i.match(Za);
                            if (l) {
                                var u = 0 | parseInt(l[1], 10),
                                    c = l[2];
                                0 !== u && (Ya(c, u), Xa(e, c, l[3]), e.getTag().insertRules(u, r)), r.length = 0
                            } else r.push(i)
                        }
                    }
                },
                ei = function () {
                    return "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null
                },
                ti = function (e) {
                    var t = document.head,
                        n = e || t,
                        r = document.createElement("style"),
                        o = function (e) {
                            for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                                var r = t[n];
                                if (r && 1 === r.nodeType && r.hasAttribute(Fa)) return r
                            }
                        }(n),
                        a = void 0 !== o ? o.nextSibling : null;
                    r.setAttribute(Fa, "active"), r.setAttribute("data-styled-version", "5.3.5");
                    var i = ei();
                    return i && r.setAttribute("nonce", i), n.insertBefore(r, a), r
                },
                ni = function () {
                    function e(e) {
                        var t = this.element = ti(e);
                        t.appendChild(document.createTextNode("")), this.sheet = function (e) {
                            if (e.sheet) return e.sheet;
                            for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                                var o = t[n];
                                if (o.ownerNode === e) return o
                            }
                            Ga(17)
                        }(t), this.length = 0
                    }
                    var t = e.prototype;
                    return t.insertRule = function (e, t) {
                        try {
                            return this.sheet.insertRule(t, e), this.length++, !0
                        } catch (e) {
                            return !1
                        }
                    }, t.deleteRule = function (e) {
                        this.sheet.deleteRule(e), this.length--
                    }, t.getRule = function (e) {
                        var t = this.sheet.cssRules[e];
                        return void 0 !== t && "string" == typeof t.cssText ? t.cssText : ""
                    }, e
                }(),
                ri = function () {
                    function e(e) {
                        var t = this.element = ti(e);
                        this.nodes = t.childNodes, this.length = 0
                    }
                    var t = e.prototype;
                    return t.insertRule = function (e, t) {
                        if (e <= this.length && e >= 0) {
                            var n = document.createTextNode(t),
                                r = this.nodes[e];
                            return this.element.insertBefore(n, r || null), this.length++, !0
                        }
                        return !1
                    }, t.deleteRule = function (e) {
                        this.element.removeChild(this.nodes[e]), this.length--
                    }, t.getRule = function (e) {
                        return e < this.length ? this.nodes[e].textContent : ""
                    }, e
                }(),
                oi = function () {
                    function e(e) {
                        this.rules = [], this.length = 0
                    }
                    var t = e.prototype;
                    return t.insertRule = function (e, t) {
                        return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
                    }, t.deleteRule = function (e) {
                        this.rules.splice(e, 1), this.length--
                    }, t.getRule = function (e) {
                        return e < this.length ? this.rules[e] : ""
                    }, e
                }(),
                ai = za,
                ii = {
                    isServer: !za,
                    useCSSOMInjection: !Ua
                },
                li = function () {
                    function e(e, t, n) {
                        void 0 === e && (e = ja), void 0 === t && (t = {}), this.options = Da({}, ii, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && za && ai && (ai = !1, function (e) {
                            for (var t = document.querySelectorAll(Qa), n = 0, r = t.length; n < r; n++) {
                                var o = t[n];
                                o && "active" !== o.getAttribute(Fa) && (Ja(e, o), o.parentNode && o.parentNode.removeChild(o))
                            }
                        }(this))
                    }
                    e.registerId = function (e) {
                        return $a(e)
                    };
                    var t = e.prototype;
                    return t.reconstructWithOptions = function (t, n) {
                        return void 0 === n && (n = !0), new e(Da({}, this.options, {}, t), this.gs, n && this.names || void 0)
                    }, t.allocateGSInstance = function (e) {
                        return this.gs[e] = (this.gs[e] || 0) + 1
                    }, t.getTag = function () {
                        return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new oi(o) : r ? new ni(o) : new ri(o), new Wa(e)));
                        var e, t, n, r, o
                    }, t.hasNameForId = function (e, t) {
                        return this.names.has(e) && this.names.get(e).has(t)
                    }, t.registerName = function (e, t) {
                        if ($a(e), this.names.has(e)) this.names.get(e).add(t);
                        else {
                            var n = new Set;
                            n.add(t), this.names.set(e, n)
                        }
                    }, t.insertRules = function (e, t, n) {
                        this.registerName(e, t), this.getTag().insertRules($a(e), n)
                    }, t.clearNames = function (e) {
                        this.names.has(e) && this.names.get(e).clear()
                    }, t.clearRules = function (e) {
                        this.getTag().clearGroup($a(e)), this.clearNames(e)
                    }, t.clearTag = function () {
                        this.tag = void 0
                    }, t.toString = function () {
                        return function (e) {
                            for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
                                var a = qa(o);
                                if (void 0 !== a) {
                                    var i = e.names.get(a),
                                        l = t.getGroup(o);
                                    if (i && l && i.size) {
                                        var u = Fa + ".g" + o + '[id="' + a + '"]',
                                            c = "";
                                        void 0 !== i && i.forEach((function (e) {
                                            e.length > 0 && (c += e + ",")
                                        })), r += "" + l + u + '{content:"' + c + '"}/*!sc*/\n'
                                    }
                                }
                            }
                            return r
                        }(this)
                    }, e
                }(),
                ui = /(a)(d)/gi,
                ci = function (e) {
                    return String.fromCharCode(e + (e > 25 ? 39 : 97))
                };

            function si(e) {
                var t, n = "";
                for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = ci(t % 52) + n;
                return (ci(t % 52) + n).replace(ui, "$1-$2")
            }
            var di = function (e, t) {
                for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
                return e
            },
                fi = function (e) {
                    return di(5381, e)
                };

            function pi(e) {
                for (var t = 0; t < e.length; t += 1) {
                    var n = e[t];
                    if (La(n) && !Ba(n)) return !1
                }
                return !0
            }
            var gi = fi("5.3.5"),
                mi = function () {
                    function e(e, t, n) {
                        this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && pi(e), this.componentId = t, this.baseHash = di(gi, t), this.baseStyle = n, li.registerId(t)
                    }
                    return e.prototype.generateAndInjectStyles = function (e, t, n) {
                        var r = this.componentId,
                            o = [];
                        if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash)
                            if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);
                            else {
                                var a = Ti(this.rules, e, t, n).join(""),
                                    i = si(di(this.baseHash, a) >>> 0);
                                if (!t.hasNameForId(r, i)) {
                                    var l = n(a, "." + i, void 0, r);
                                    t.insertRules(r, i, l)
                                }
                                o.push(i), this.staticRulesId = i
                            }
                        else {
                            for (var u = this.rules.length, c = di(this.baseHash, n.hash), s = "", d = 0; d < u; d++) {
                                var f = this.rules[d];
                                if ("string" == typeof f) s += f;
                                else if (f) {
                                    var p = Ti(f, e, t, n),
                                        g = Array.isArray(p) ? p.join("") : p;
                                    c = di(c, g + d), s += g
                                }
                            }
                            if (s) {
                                var m = si(c >>> 0);
                                if (!t.hasNameForId(r, m)) {
                                    var h = n(s, "." + m, void 0, r);
                                    t.insertRules(r, m, h)
                                }
                                o.push(m)
                            }
                        }
                        return o.join(" ")
                    }, e
                }(),
                hi = /^\s*\/\/.*$/gm,
                vi = [":", "[", ".", "#"];

            function bi(e) {
                var t, n, r, o, a = void 0 === e ? ja : e,
                    i = a.options,
                    l = void 0 === i ? ja : i,
                    u = a.plugins,
                    c = void 0 === u ? Aa : u,
                    s = new Na(l),
                    d = [],
                    f = function (e) {
                        function t(t) {
                            if (t) try {
                                e(t + "}")
                            } catch (e) { }
                        }
                        return function (n, r, o, a, i, l, u, c, s, d) {
                            switch (n) {
                                case 1:
                                    if (0 === s && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                                    break;
                                case 2:
                                    if (0 === c) return r + "/*|*/";
                                    break;
                                case 3:
                                    switch (c) {
                                        case 102:
                                        case 112:
                                            return e(o[0] + r), "";
                                        default:
                                            return r + (0 === d ? "/*|*/" : "")
                                    }
                                case -2:
                                    r.split("/*|*/}").forEach(t)
                            }
                        }
                    }((function (e) {
                        d.push(e)
                    })),
                    p = function (e, r, a) {
                        return 0 === r && -1 !== vi.indexOf(a[n.length]) || a.match(o) ? e : "." + t
                    };

                function g(e, a, i, l) {
                    void 0 === l && (l = "&");
                    var u = e.replace(hi, ""),
                        c = a && i ? i + " " + a + " { " + u + " }" : u;
                    return t = l, n = a, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), s(i || !a ? "" : a, c)
                }
                return s.use([].concat(c, [function (e, t, o) {
                    2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, p))
                }, f, function (e) {
                    if (-2 === e) {
                        var t = d;
                        return d = [], t
                    }
                }])), g.hash = c.length ? c.reduce((function (e, t) {
                    return t.name || Ga(15), di(e, t.name)
                }), 5381).toString() : "", g
            }
            var yi = e.createContext(),
                wi = (yi.Consumer, e.createContext()),
                xi = (wi.Consumer, new li),
                Ci = bi();

            function Si() {
                return (0, e.useContext)(yi) || xi
            }

            function ki() {
                return (0, e.useContext)(wi) || Ci
            }

            function Ei(t) {
                var n = (0, e.useState)(t.stylisPlugins),
                    r = n[0],
                    o = n[1],
                    a = Si(),
                    i = (0, e.useMemo)((function () {
                        var e = a;
                        return t.sheet ? e = t.sheet : t.target && (e = e.reconstructWithOptions({
                            target: t.target
                        }, !1)), t.disableCSSOMInjection && (e = e.reconstructWithOptions({
                            useCSSOMInjection: !1
                        })), e
                    }), [t.disableCSSOMInjection, t.sheet, t.target]),
                    l = (0, e.useMemo)((function () {
                        return bi({
                            options: {
                                prefix: !t.disableVendorPrefixes
                            },
                            plugins: r
                        })
                    }), [t.disableVendorPrefixes, r]);
                return (0, e.useEffect)((function () {
                    _a()(r, t.stylisPlugins) || o(t.stylisPlugins)
                }), [t.stylisPlugins]), e.createElement(yi.Provider, {
                    value: i
                }, e.createElement(wi.Provider, {
                    value: l
                }, t.children))
            }
            var _i = function () {
                function e(e, t) {
                    var n = this;
                    this.inject = function (e, t) {
                        void 0 === t && (t = Ci);
                        var r = n.name + t.hash;
                        e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"))
                    }, this.toString = function () {
                        return Ga(12, String(n.name))
                    }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t
                }
                return e.prototype.getName = function (e) {
                    return void 0 === e && (e = Ci), this.name + e.hash
                }, e
            }(),
                Ni = /([A-Z])/,
                Ii = /([A-Z])/g,
                Pi = /^ms-/,
                Oi = function (e) {
                    return "-" + e.toLowerCase()
                };

            function Di(e) {
                return Ni.test(e) ? e.replace(Ii, Oi).replace(Pi, "-ms-") : e
            }
            var Ri = function (e) {
                return null == e || !1 === e || "" === e
            };

            function Ti(e, t, n, r) {
                if (Array.isArray(e)) {
                    for (var o, a = [], i = 0, l = e.length; i < l; i += 1) "" !== (o = Ti(e[i], t, n, r)) && (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
                    return a
                }
                return Ri(e) ? "" : Ba(e) ? "." + e.styledComponentId : La(e) ? "function" != typeof (u = e) || u.prototype && u.prototype.isReactComponent || !t ? e : Ti(e(t), t, n, r) : e instanceof _i ? n ? (e.inject(n, r), e.getName(r)) : e : Ta(e) ? function e(t, n) {
                    var r, o, a = [];
                    for (var i in t) t.hasOwnProperty(i) && !Ri(t[i]) && (Array.isArray(t[i]) && t[i].isCss || La(t[i]) ? a.push(Di(i) + ":", t[i], ";") : Ta(t[i]) ? a.push.apply(a, e(t[i], i)) : a.push(Di(i) + ": " + (r = i, (null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in Ia ? String(o).trim() : o + "px") + ";")));
                    return n ? [n + " {"].concat(a, ["}"]) : a
                }(e) : e.toString();
                var u
            }
            var Ai = function (e) {
                return Array.isArray(e) && (e.isCss = !0), e
            };

            function ji(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return La(e) || Ta(e) ? Ai(Ti(Ra(Aa, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : Ai(Ti(Ra(e, n)))
            }
            new Set;
            var Li = function (e, t, n) {
                return void 0 === n && (n = ja), e.theme !== n.theme && e.theme || t || n.theme
            },
                Mi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
                Bi = /(^-|-$)/g;

            function Fi(e) {
                return e.replace(Mi, "-").replace(Bi, "")
            }
            var zi = function (e) {
                return si(fi(e) >>> 0)
            };

            function Ui(e) {
                return "string" == typeof e && !0
            }
            var Gi = function (e) {
                return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e)
            },
                Wi = function (e) {
                    return "__proto__" !== e && "constructor" !== e && "prototype" !== e
                };

            function Hi(e, t, n) {
                var r = e[n];
                Gi(t) && Gi(r) ? Vi(r, t) : e[n] = t
            }

            function Vi(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                for (var o = 0, a = n; o < a.length; o++) {
                    var i = a[o];
                    if (Gi(i))
                        for (var l in i) Wi(l) && Hi(e, i[l], l)
                }
                return e
            }
            var Ki = e.createContext();
            Ki.Consumer;
            var $i = {};

            function qi(t, n, r) {
                var o = Ba(t),
                    a = !Ui(t),
                    i = n.attrs,
                    l = void 0 === i ? Aa : i,
                    u = n.componentId,
                    c = void 0 === u ? function (e, t) {
                        var n = "string" != typeof e ? "sc" : Fi(e);
                        $i[n] = ($i[n] || 0) + 1;
                        var r = n + "-" + zi("5.3.5" + n + $i[n]);
                        return t ? t + "-" + r : r
                    }(n.displayName, n.parentComponentId) : u,
                    s = n.displayName,
                    d = void 0 === s ? function (e) {
                        return Ui(e) ? "styled." + e : "Styled(" + Ma(e) + ")"
                    }(t) : s,
                    f = n.displayName && n.componentId ? Fi(n.displayName) + "-" + n.componentId : n.componentId || c,
                    p = o && t.attrs ? Array.prototype.concat(t.attrs, l).filter(Boolean) : l,
                    g = n.shouldForwardProp;
                o && t.shouldForwardProp && (g = n.shouldForwardProp ? function (e, r, o) {
                    return t.shouldForwardProp(e, r, o) && n.shouldForwardProp(e, r, o)
                } : t.shouldForwardProp);
                var m, h = new mi(r, f, o ? t.componentStyle : void 0),
                    v = h.isStatic && 0 === l.length,
                    b = function (t, n) {
                        return function (t, n, r, o) {
                            var a = t.attrs,
                                i = t.componentStyle,
                                l = t.defaultProps,
                                u = t.foldedComponentIds,
                                c = t.shouldForwardProp,
                                s = t.styledComponentId,
                                d = t.target,
                                f = function (e, t, n) {
                                    void 0 === e && (e = ja);
                                    var r = Da({}, t, {
                                        theme: e
                                    }),
                                        o = {};
                                    return n.forEach((function (e) {
                                        var t, n, a, i = e;
                                        for (t in La(i) && (i = i(r)), i) r[t] = o[t] = "className" === t ? (n = o[t], a = i[t], n && a ? n + " " + a : n || a) : i[t]
                                    })), [r, o]
                                }(Li(n, (0, e.useContext)(Ki), l) || ja, n, a),
                                p = f[0],
                                g = f[1],
                                m = function (e, t, n, r) {
                                    var o = Si(),
                                        a = ki();
                                    return t ? e.generateAndInjectStyles(ja, o, a) : e.generateAndInjectStyles(n, o, a)
                                }(i, o, p),
                                h = r,
                                v = g.$as || n.$as || g.as || n.as || d,
                                b = Ui(v),
                                y = g !== n ? Da({}, n, {}, g) : n,
                                w = {};
                            for (var x in y) "$" !== x[0] && "as" !== x && ("forwardedAs" === x ? w.as = y[x] : (c ? c(x, Oa, v) : !b || Oa(x)) && (w[x] = y[x]));
                            return n.style && g.style !== n.style && (w.style = Da({}, n.style, {}, g.style)), w.className = Array.prototype.concat(u, s, m !== s ? m : null, n.className, g.className).filter(Boolean).join(" "), w.ref = h, (0, e.createElement)(v, w)
                        }(m, t, n, v)
                    };
                return b.displayName = d, (m = e.forwardRef(b)).attrs = p, m.componentStyle = h, m.displayName = d, m.shouldForwardProp = g, m.foldedComponentIds = o ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId) : Aa, m.styledComponentId = f, m.target = o ? t.target : t, m.withComponent = function (e) {
                    var t = n.componentId,
                        o = function (e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(n, ["componentId"]),
                        a = t && t + "-" + (Ui(e) ? e : Fi(Ma(e)));
                    return qi(e, Da({}, o, {
                        attrs: p,
                        componentId: a
                    }), r)
                }, Object.defineProperty(m, "defaultProps", {
                    get: function () {
                        return this._foldedDefaultProps
                    },
                    set: function (e) {
                        this._foldedDefaultProps = o ? Vi({}, t.defaultProps, e) : e
                    }
                }), m.toString = function () {
                    return "." + m.styledComponentId
                }, a && L()(m, t, {
                    attrs: !0,
                    componentStyle: !0,
                    displayName: !0,
                    foldedComponentIds: !0,
                    shouldForwardProp: !0,
                    styledComponentId: !0,
                    target: !0,
                    withComponent: !0
                }), m
            }
            var Yi = function (e) {
                return function e(t, n, r) {
                    if (void 0 === r && (r = ja), !(0, M.isValidElementType)(n)) return Ga(1, String(n));
                    var o = function () {
                        return t(n, r, ji.apply(void 0, arguments))
                    };
                    return o.withConfig = function (o) {
                        return e(t, n, Da({}, r, {}, o))
                    }, o.attrs = function (o) {
                        return e(t, n, Da({}, r, {
                            attrs: Array.prototype.concat(r.attrs, o).filter(Boolean)
                        }))
                    }, o
                }(qi, e)
            };
            ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function (e) {
                Yi[e] = Yi(e)
            }));
            ! function () {
                function e(e, t) {
                    this.rules = e, this.componentId = t, this.isStatic = pi(e), li.registerId(this.componentId + 1)
                }
                var t = e.prototype;
                t.createStyles = function (e, t, n, r) {
                    var o = r(Ti(this.rules, t, n, r).join(""), ""),
                        a = this.componentId + e;
                    n.insertRules(a, a, o)
                }, t.removeStyles = function (e, t) {
                    t.clearRules(this.componentId + e)
                }, t.renderStyles = function (e, t, n, r) {
                    e > 2 && li.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r)
                }
            }();
            ! function () {
                function t() {
                    var t = this;
                    this._emitSheetCSS = function () {
                        var e = t.instance.toString();
                        if (!e) return "";
                        var n = ei();
                        return "<style " + [n && 'nonce="' + n + '"', Fa + '="true"', 'data-styled-version="5.3.5"'].filter(Boolean).join(" ") + ">" + e + "</style>"
                    }, this.getStyleTags = function () {
                        return t.sealed ? Ga(2) : t._emitSheetCSS()
                    }, this.getStyleElement = function () {
                        var n;
                        if (t.sealed) return Ga(2);
                        var r = ((n = {})[Fa] = "", n["data-styled-version"] = "5.3.5", n.dangerouslySetInnerHTML = {
                            __html: t.instance.toString()
                        }, n),
                            o = ei();
                        return o && (r.nonce = o), [e.createElement("style", Da({}, r, {
                            key: "sc-0-0"
                        }))]
                    }, this.seal = function () {
                        t.sealed = !0
                    }, this.instance = new li({
                        isServer: !0
                    }), this.sealed = !1
                }
                var n = t.prototype;
                n.collectStyles = function (t) {
                    return this.sealed ? Ga(2) : e.createElement(Ei, {
                        sheet: this.instance
                    }, t)
                }, n.interleaveWithNodeStream = function (e) {
                    return Ga(3)
                }
            }();
            var Qi, Zi, Xi = Yi,
                Ji = n(184),
                el = function (e) {
                    return e.stars ? (0, Ji.jsx)("div", {
                        className: "Stars",
                        children: new Array(parseInt(e.stars)).fill(!0).map((function (e, t) {
                            return (0, Ji.jsx)("svg", {
                                width: "16",
                                height: "15",
                                viewBox: "0 0 16 15",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, Ji.jsx)("path", {
                                    d: "M8 2.11803L9.32058 6.18237L9.43284 6.52786H9.79611H14.0696L10.6123 9.03976L10.3184 9.25329L10.4306 9.59878L11.7512 13.6631L8.29389 11.1512L8 10.9377L7.70611 11.1512L4.24877 13.6631L5.56936 9.59878L5.68162 9.25329L5.38772 9.03976L1.93039 6.52786H6.20389H6.56716L6.67942 6.18237L8 2.11803Z",
                                    fill: "#FEE43A",
                                    stroke: "#767676"
                                })
                            }, "star".concat(t))
                        }))
                    }) : null
                },
                tl = void 0,
                nl = function (e) {
                    return (0, Ji.jsx)("img", {
                        alt: e.countrycode,
                        className: "Flag",
                        width: e.width,
                        height: e.height,
                        src: e.countrycode ? "https://cf.eip.telegraph.co.uk/flags/4x3/".concat(e.countrycode, ".svg") : "https://cf.eip.telegraph.co.uk/flags/4x3/placeholder.svg",
                        onError: function () {
                            return tl.src = "https://cf.eip.telegraph.co.uk/flags/4x3/placeholder.svg"
                        }
                    })
                },
                rl = Xi.div(Qi || (Qi = g([""]))),
                ol = function (e) {
                    var t = e.team,
                        n = e.position,
                        r = e.isActive,
                        o = e.dragPresent,
                        a = e.frozen,
                        i = n.toString(),
                        l = function (e) {
                            return 0 === e ? "first" : 1 === e ? "second" : 2 === e ? "third" : "fourth"
                        };
                    return o ? (0, Ji.jsx)(wa, {
                        draggableId: i,
                        index: n,
                        isDragDisabled: a,
                        children: function (e, o) {
                            return (0, Ji.jsx)(rl, u(u({
                                ref: e.innerRef
                            }, e.draggableProps), {}, {
                                isDragging: o.isDragging,
                                style: u(u({}, e.draggableProps.style), {}, {
                                    boxShadow: o.isDragging ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : ""
                                }),
                                children: (0, Ji.jsxs)("div", {
                                    className: "group-stage-team",
                                    style: u({}, r && !t ? {
                                        borderBottom: "4px solid #222222"
                                    } : null),
                                    children: [(0, Ji.jsx)("div", {
                                        className: "group-stage-team-position",
                                        style: {
                                            background: n < 2 ? "#FDF4F1" : "#FFFFFF",
                                            opacity: a && n > 1 ? .5 : 1
                                        },
                                        children: n + 1
                                    }), (0, Ji.jsxs)("div", {
                                        className: "group-stage-team-name-container",
                                        style: {
                                            background: n < 2 ? "#FDF4F1" : "#FFFFFF",
                                            filter: a && n > 1 ? "grayscale(100%)" : null,
                                            opacity: a && n > 1 ? .5 : 1
                                        },
                                        children: [t ? (0, Ji.jsx)("div", {
                                            className: "group-stage-team-flag",
                                            children: (0, Ji.jsx)(nl, {
                                                countrycode: t.twolettercode
                                            })
                                        }) : null, r && !t ? (0, Ji.jsxs)(Ji.Fragment, {
                                            children: [(0, Ji.jsxs)("span", {
                                                className: "group-stage-placeholder-text-desktop",
                                                children: ["Click the country you think will be", " ", l(n)]
                                            }), (0, Ji.jsxs)("span", {
                                                className: "group-stage-placeholder-text-mobile",
                                                children: ["Tap the country you think will be", " ", l(n)]
                                            })]
                                        }) : (0, Ji.jsxs)(Ji.Fragment, {
                                            children: [(0, Ji.jsx)("div", {
                                                className: "group-stage-team-name",
                                                children: t ? t.countryname : null
                                            }), (0, Ji.jsx)("div", {
                                                className: "group-stage-team-worldcups",
                                                style: a ? {
                                                    marginRight: "8px"
                                                } : null,
                                                children: t ? (0, Ji.jsx)(el, {
                                                    stars: t.previouswins
                                                }) : null
                                            })]
                                        }), (0, Ji.jsx)("div", u(u({
                                            className: "group-stage-team-drag"
                                        }, e.dragHandleProps), {}, {
                                            style: a ? {
                                                display: "none"
                                            } : null,
                                            children: (0, Ji.jsx)("svg", {
                                                width: "8",
                                                height: "13",
                                                viewBox: "0 0 8 13",
                                                fill: "none",
                                                children: (0, Ji.jsx)("path", {
                                                    d: "M3 11C3 11.825 2.325 12.5 1.5 12.5C0.675 12.5 0 11.825 0 11C0 10.175 0.675 9.5 1.5 9.5C2.325 9.5 3 10.175 3 11ZM1.5 5C0.675 5 0 5.675 0 6.5C0 7.325 0.675 8 1.5 8C2.325 8 3 7.325 3 6.5C3 5.675 2.325 5 1.5 5ZM1.5 0.5C0.675 0.5 0 1.175 0 2C0 2.825 0.675 3.5 1.5 3.5C2.325 3.5 3 2.825 3 2C3 1.175 2.325 0.5 1.5 0.5ZM6 3.5C6.825 3.5 7.5 2.825 7.5 2C7.5 1.175 6.825 0.5 6 0.5C5.175 0.5 4.5 1.175 4.5 2C4.5 2.825 5.175 3.5 6 3.5ZM6 5C5.175 5 4.5 5.675 4.5 6.5C4.5 7.325 5.175 8 6 8C6.825 8 7.5 7.325 7.5 6.5C7.5 5.675 6.825 5 6 5ZM6 9.5C5.175 9.5 4.5 10.175 4.5 11C4.5 11.825 5.175 12.5 6 12.5C6.825 12.5 7.5 11.825 7.5 11C7.5 10.175 6.825 9.5 6 9.5Z",
                                                    fill: "#767676"
                                                })
                                            })
                                        }))]
                                    })]
                                })
                            }))
                        }
                    }) : (0, Ji.jsx)("p", {
                        children: "Loading"
                    })
                },
                al = function (t) {
                    var n = d((0, e.useState)(!1), 2),
                        r = n[0],
                        o = n[1];
                    return (0, e.useEffect)((function () {
                        var e = window.matchMedia(t);
                        e.matches !== r && o(e.matches);
                        var n = function () {
                            return o(e.matches)
                        };
                        return window.addEventListener("resize", n),
                            function () {
                                return window.removeEventListener("resize", n)
                            }
                    }), [r, t]), r
                },
                il = function (e) {
                    var t = e.text,
                        n = e.frozen,
                        r = al("(min-width: 768px)"),
                        o = r ? "28.16" : "20",
                        a = r ? "15" : "16";
                    return (0, Ji.jsxs)("div", {
                        className: "group-stage-title-container",
                        children: [(0, Ji.jsx)("div", {
                            className: "group-stage-title-text",
                            children: t
                        }), (0, Ji.jsx)("div", {
                            className: "group-stage-title-whistle",
                            style: {
                                marginLeft: "auto"
                            },
                            children: n ? (0, Ji.jsxs)("svg", {
                                width: o,
                                height: a,
                                viewBox: "0 0 29 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, Ji.jsx)("path", {
                                    d: "M0.836914 13.5383C0.836914 13.5604 1.2562 14.3605 1.77492 15.3206L2.70747 17.0641L7.15495 18.5484C9.60485 19.3594 11.6133 20.0161 11.63 19.9997C11.6576 19.9721 9.91407 16.7828 9.80918 16.6615C9.75947 16.6118 0.958475 13.5052 0.85933 13.5052C0.847834 13.5052 0.836914 13.5219 0.836914 13.5383Z",
                                    fill: "#494949"
                                }), (0, Ji.jsx)("path", {
                                    d: "M22.4119 4.59387C23.1953 4.06969 23.885 3.78835 24.6411 3.68346C26.2907 3.45729 27.869 4.46139 28.5863 6.18883C28.9064 6.95556 29.0001 7.47428 29.0001 8.42895C29.0001 9.54887 28.807 10.465 28.2994 11.7671C27.4609 13.9415 25.9654 15.514 24.1169 16.1595C23.6479 16.325 22.4671 16.3416 21.9153 16.187C20.7897 15.8781 19.9068 15.1223 19.3605 14.0021L19.1177 13.511L15.9559 16.7112C14.0963 18.593 12.7775 19.8951 12.7445 19.862C12.7169 19.8345 12.2367 18.9956 11.6794 17.997L10.6641 16.1816L16.2761 10.5642C21.1926 5.64223 21.9538 4.90281 22.4119 4.59387Z",
                                    fill: "#494949"
                                }), (0, Ji.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M18.5492 0.64327C18.8197 0.389228 19.3438 0.119089 19.7134 0.0472444C20.2819 -0.0631083 21.115 0.0251173 21.6555 0.257033C21.959 0.389514 22.3674 0.79242 22.5274 1.12894C22.6487 1.37724 22.6763 1.74135 22.6211 2.18822C22.6047 2.31495 22.6545 2.33708 23.46 2.60751L24.3152 2.89431L24.0393 2.93857C23.2505 3.04892 22.4944 3.35786 21.7826 3.84899C21.3909 4.11941 19.8623 5.63677 11.9277 13.6322C10.7581 14.8073 9.93591 15.5965 9.88074 15.591C9.67095 15.5522 0.836914 12.5451 0.836914 12.512C0.836914 12.4623 11.4918 1.6695 11.8231 1.3827C12.9928 0.372847 14.4164 -0.107076 15.6801 0.0915019C15.9065 0.130011 16.5741 0.317669 17.1589 0.510789C17.7492 0.709367 18.2458 0.869438 18.2679 0.869438C18.2897 0.869438 18.4168 0.764545 18.5492 0.64327ZM21.3357 1.75227C21.3909 1.57582 21.2032 1.26114 20.9716 1.14532C20.8282 1.06802 20.6572 1.03497 20.4416 1.04043C20.0775 1.04589 20.0224 1.06227 19.7962 1.21688L19.6361 1.33269L20.4307 1.59766C20.8667 1.74135 21.2417 1.86262 21.2638 1.86262C21.2805 1.86262 21.3135 1.8129 21.3357 1.75227ZM17.8156 5.82989C17.7825 5.80776 16.3476 5.31663 14.6317 4.73728C12.9209 4.15792 11.4918 3.68345 11.4587 3.68317C11.4312 3.68317 10.8848 4.18551 10.2448 4.80337L9.08614 5.92358L10.438 6.38166C11.0772 6.59942 12.2489 6.99198 13.2344 7.32217L13.2349 7.32234L13.2352 7.32244L15.6249 8.12519L16.756 6.99406C17.4845 6.26585 17.8598 5.85202 17.8156 5.82989Z",
                                    fill: "#494949"
                                }), (0, Ji.jsx)("path", {
                                    d: "M18.1961 14.9786L18.599 14.6033L19.0016 14.2225L19.1616 14.5424C19.2499 14.7191 19.4651 15.0226 19.6361 15.2157C19.8128 15.4088 19.9177 15.5522 19.8735 15.5358C19.8292 15.5192 19.4321 15.3867 18.9907 15.2433L18.1961 14.9786Z",
                                    fill: "#494949"
                                })]
                            }) : null
                        })]
                    })
                },
                ll = 3e5,
                ul = new Date(Math.round(Date.now() / ll) * ll).getTime(),
                cl = Xi.div(Zi || (Zi = g([""]))),
                sl = function (t) {
                    var n = t.teams,
                        r = t.groupName,
                        o = t.handleGroupResults,
                        a = t.storedPositions,
                        l = t.storageReset,
                        c = t.setStorageReset,
                        s = (t.frozenGroups, t.setTurnOnEffect),
                        f = d((0, e.useState)([]), 2),
                        p = f[0],
                        g = f[1],
                        m = d((0, e.useState)(!1), 2),
                        h = m[0],
                        v = m[1],
                        b = d((0, e.useState)(0), 2),
                        y = b[0],
                        w = b[1],
                        x = d((0, e.useState)(!1), 2),
                        C = x[0],
                        S = x[1],
                        k = (0, e.useRef)(!0);
                    (0, e.useEffect)((function () {
                        E(p)
                    }), [p]), (0, e.useEffect)((function () {
                        a && (a[0].frozen && S(!0), g(a))
                    }), [a, l]), (0, e.useEffect)((function () {
                        !1 === k.current && (o && o(p), E(p))
                    }), [p]);
                    var E = function (e) {
                        if (k.current = !1, l) return w(0), void c(!1);
                        if (e) {
                            for (var t = !1, n = !1, r = 0; r < e.length; r++) {
                                var o = e[r];
                                !1 === o && !1 === n && (n = r), !1 === o && r >= y && !1 === t && (t = r)
                            }
                            Number.isInteger(t) && t > -1 ? w(t) : n > -1 && w(n)
                        }
                    };
                    return (0, e.useEffect)((function () {
                        h ? function () {
                            var e = window.scrollX,
                                t = window.scrollY;
                            window.onscroll = function () {
                                window.scrollTo(e, t)
                            }
                        }() : window.onscroll = function () { }
                    }), [h]), n ? (0, Ji.jsxs)("div", {
                        className: "group-stage-container",
                        children: [(0, Ji.jsx)(il, {
                            text: "GROUP ".concat(r).concat(C ? ": Final table" : ""),
                            frozen: C
                        }), (0, Ji.jsx)("div", {
                            className: "group-stage-team-countries-container",
                            children: n.map((function (e, t) {
                                return (0, Ji.jsxs)("div", {
                                    className: "group-stage-team-country",
                                    id: e.countryname,
                                    onClick: function () {
                                        return function (e) {
                                            var t = i(p);
                                            if (!t[y] && !t.find((function (t) {
                                                return t.countrycode === e.countrycode
                                            }))) {
                                                if (t[y] = e, 1 === t.filter((function (e) {
                                                    return !1 === e
                                                })).length) {
                                                    var r = n.filter((function (e) {
                                                        return !t.find((function (t) {
                                                            return t.countrycode === e.countrycode
                                                        }))
                                                    }))[0];
                                                    t[t.findIndex((function (e) {
                                                        return !1 === e
                                                    }))] = r
                                                } else E(p);
                                                g(t)
                                            }
                                        }(e)
                                    },
                                    children: [(0, Ji.jsx)("div", {
                                        className: "group-stage-team-country-flag",
                                        style: C ? {
                                            filter: "grayscale(100%)",
                                            opacity: "0.5"
                                        } : p.find((function (t) {
                                            return t.countrycode === e.countrycode
                                        })) ? {
                                            opacity: "0.5"
                                        } : null,
                                        children: (0, Ji.jsx)(nl, {
                                            countrycode: e.twolettercode
                                        })
                                    }), (0, Ji.jsx)("div", {
                                        className: "group-stage-team-country-acronym",
                                        children: e.countrycode
                                    })]
                                }, e.countryname)
                            }))
                        }), (0, Ji.jsx)(Bo, {
                            onDragStart: function () {
                                s(!0), v(!0)
                            },
                            onDragEnd: function (e) {
                                var t = e.destination,
                                    n = e.source,
                                    r = e.draggableId;
                                if (v(!1), t && (t.droppableId !== n.droppableId || t.index !== n.index)) {
                                    var o = i(p),
                                        a = Array.from(o);
                                    a.splice(n.index, 1), a.splice(t.index, 0, o[r]), g(a), E(a)
                                }
                            },
                            children: (0, Ji.jsx)(ka, {
                                droppableId: r,
                                children: function (e, t) {
                                    return (0, Ji.jsxs)(cl, u(u({
                                        ref: e.innerRef
                                    }, e.droppableProps), {}, {
                                        isDraggingOver: t.isDraggingOver,
                                        children: [p.map((function (e, t) {
                                            return (0, Ji.jsx)("div", {
                                                className: "group-stage-team-wrapper",
                                                onClick: function () {
                                                    return function (e) {
                                                        C || p[e] || (k.current = !1, w(e), s(!0))
                                                    }(t)
                                                },
                                                children: (0, Ji.jsx)(ol, {
                                                    dragPresent: !0,
                                                    team: e,
                                                    position: t,
                                                    isActive: t === y,
                                                    frozen: C
                                                })
                                            }, "".concat(r).concat(t))
                                        })), e.placeholder]
                                    }))
                                }
                            })
                        })]
                    }) : (0, Ji.jsxs)("div", {
                        className: "group-stage-container",
                        children: [(0, Ji.jsx)(il, {
                            text: "GROUP X"
                        }), (0, Ji.jsx)("div", {
                            className: "group-stage-team-countries-container",
                            children: (0, Ji.jsx)("div", {
                                children: (0, Ji.jsxs)("div", {
                                    className: "group-stage-team-country",
                                    children: [(0, Ji.jsx)("div", {
                                        className: "group-stage-team-country-flag",
                                        style: {
                                            mixBlendMode: "luminosity"
                                        },
                                        children: (0, Ji.jsx)(nl, {
                                            countrycode: null,
                                            width: 16,
                                            height: 12
                                        })
                                    }), (0, Ji.jsx)("div", {
                                        className: "group-stage-team-country-acronym",
                                        children: "ABC"
                                    })]
                                })
                            }, "a")
                        }), (0, Ji.jsx)("div", {
                            className: "group-stage-team-wrapper",
                            children: (0, Ji.jsx)(ol, {
                                position: 1,
                                team: null,
                                dragPresent: !1
                            })
                        }), (0, Ji.jsx)("div", {
                            className: "group-stage-team-wrapper",
                            children: (0, Ji.jsx)(ol, {
                                position: 2,
                                team: null,
                                dragPresent: !1
                            })
                        }), (0, Ji.jsx)("div", {
                            className: "group-stage-team-wrapper",
                            children: (0, Ji.jsx)(ol, {
                                position: 3,
                                team: null,
                                dragPresent: !1
                            })
                        }), (0, Ji.jsx)("div", {
                            className: "group-stage-team-wrapper",
                            children: (0, Ji.jsx)(ol, {
                                position: 4,
                                team: null,
                                dragPresent: !1
                            })
                        })]
                    })
                },
                dl = function (t) {
                    var n = t.match,
                        r = t.handleKnockoutResult,
                        o = t.setChangesMade,
                        a = t.storageReset,
                        i = t.knockoutMatches,
                        l = t.frozenKnockoutGames,
                        c = t.winner,
                        s = t.turnOnEffect,
                        f = t.ro16,
                        p = d((0, e.useState)(!1), 2),
                        g = p[0],
                        m = p[1],
                        h = d((0, e.useState)(!1), 2),
                        v = h[0],
                        b = h[1],
                        y = d((0, e.useState)(!1), 2),
                        w = y[0],
                        x = y[1],
                        C = d((0, e.useState)(!1), 2),
                        S = C[0],
                        k = C[1],
                        E = al("(min-width: 768px)");
                    (0, e.useEffect)((function () {
                        a && k(!1)
                    }), [a]), (0, e.useEffect)((function () {
                        if (n.teams.includes(void 0)) n.teams = [!1, !1], n.winner = !1;
                        else if (n.winner && !n.teams.includes(!1)) {
                            var e = n.teams.find((function (e) {
                                return e.countrycode === n.winner.countrycode
                            }));
                            m(e), n.frozen && k(!0)
                        } else m(!1), k(!1)
                    }), [n, i]), (0, e.useEffect)((function () {
                        s && (c && "64" === n.matchno ? r(u(u({}, n), {}, {
                            winner: c
                        })) : r(u(u({}, n), {}, {
                            winner: !1
                        })))
                    }), [JSON.stringify(n.teams)], s);
                    var _, N, I = function (e) {
                        return /\d/.test(e[0]) ? (0, Ji.jsxs)(Ji.Fragment, {
                            children: [(0, Ji.jsx)("span", {
                                children: "Match ".concat(e)
                            }), (0, Ji.jsx)("span", {
                                children: "Winner"
                            })]
                        }) : "0" === e[1] ? (0, Ji.jsxs)(Ji.Fragment, {
                            children: [(0, Ji.jsx)("span", {
                                children: "Group ".concat(e[0])
                            }), (0, Ji.jsx)("span", {
                                children: "Winner"
                            })]
                        }) : (0, Ji.jsxs)(Ji.Fragment, {
                            children: [(0, Ji.jsx)("span", {
                                children: "Group ".concat(e[0])
                            }), (0, Ji.jsx)("span", {
                                children: "Runner Up"
                            })]
                        })
                    },
                        P = function (e) {
                            S || 2 !== n.teams.filter((function (e) {
                                return e
                            })).length || (r(u(u({}, n), {}, {
                                winner: n.teams[e]
                            })), m(n.teams[e]), o(!0))
                        },
                        O = (0, e.useRef)(),
                        D = !(!g || !n.teams[0] || g.countrycode !== n.teams[0].countrycode),
                        R = !(!g || !n.teams[1] || g.countrycode !== n.teams[1].countrycode),
                        T = function (e) {
                            return e.pageX < O.current.getBoundingClientRect().width / 2 + 7
                        };
                    return t.match ? (0, Ji.jsxs)("div", {
                        className: "Knockout ".concat("64" === n.matchno ? "Knockout--final" : ""),
                        children: [(0, Ji.jsxs)("div", {
                            className: "Knockout__title",
                            children: ["MATCH ", n.matchno]
                        }), "49" === n.matchno && 15 !== l.length ? (0, Ji.jsxs)("div", {
                            className: "Knockout__teams-mobileinstructions",
                            children: [(0, Ji.jsxs)("div", {
                                className: "Knockout__teams-mobileinstructions-pad",
                                children: [(0, Ji.jsx)("div", {
                                    className: "Knockout__teams-mobileinstructions-pad-box Knockout__teams-mobileinstructions-pad-box--left",
                                    style: {
                                        background: n.teams[0] && v || n.teams[0] && g && n.teams[0].countrycode === g.countrycode ? "#fdf4f1" : n.teams[0] && !v ? "#f8f8f8" : null,
                                        borderLeft: D ? "2px solid black" : "",
                                        borderTop: D ? "2px solid black" : "",
                                        borderRight: D ? "2px solid black" : "",
                                        pointerEvents: S ? "none" : null
                                    },
                                    onMouseOver: n.teams[0] && n.teams[1] ? function () {
                                        return b(!0)
                                    } : null,
                                    onMouseOut: function () {
                                        return b(!1)
                                    }
                                }), (0, Ji.jsx)("div", {
                                    className: "Knockout__teams-mobileinstructions-pad-box Knockout__teams-mobileinstructions-pad-box--right",
                                    style: {
                                        background: n.teams[1] && w || n.teams[1] && g && n.teams[1].countrycode === g.countrycode ? "#fdf4f1" : n.teams[1] && !w ? "#f8f8f8" : null,
                                        borderLeft: R ? "2px solid black" : "",
                                        borderTop: R ? "2px solid black" : "",
                                        borderRight: R ? "2px solid black" : "",
                                        pointerEvents: S ? "none" : null
                                    },
                                    onMouseOver: function () {
                                        return x(!0)
                                    },
                                    onMouseOut: function () {
                                        return x(!1)
                                    }
                                })]
                            }), (0, Ji.jsx)("span", {
                                ref: O,
                                style: {
                                    background: function (e, t) {
                                        var n = "linear-gradient(90deg, rgba(253, 244, 241, 1) 0%, rgba(253, 244, 241, 1) 50%, rgba(248, 248, 248, 1) 50%, rgba(248, 248, 248, 1) 100%)",
                                            r = "linear-gradient(90deg, rgba(248, 248, 248, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(253, 244, 241, 1) 50%, rgba(253, 244, 241, 1) 100%)";
                                        return g && e && e.countrycode === g.countrycode && !w ? n : g && t && t.countrycode === g.countrycode && !v ? r : (g && e && e.countrycode === g.countrycode || g && t && t.countrycode === g.countrycode) && (v || w) ? "linear-gradient(90deg, rgba(253, 244, 241, 1) 50%, rgba(253, 244, 241, 1) 50%, rgba(253, 244, 241, 1) 50%, rgba(253, 244, 241, 1) 100%)" : e && t && !v && !w ? "#f8f8f8" : e && t && v && !w ? n : e && t && !v && w ? r : e || t ? !e || t || v ? e || !t || w ? e && !t ? "linear-gradient(90deg, rgba(253, 244, 241, 1) 0%, rgba(253, 244, 241, 1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)" : t && !e ? "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(253, 244, 241, 1) 50%, rgba(253, 244, 241, 1) 100%)" : void 0 : "linear-gradient(270deg, rgba(248,248,248,1) 0%, rgba(248,248,248,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgba(248,248,248,1) 0%, rgba(248,248,248,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)" : "white"
                                    }(n.teams[0], n.teams[1]),
                                    borderLeft: D ? "2px solid black" : n.teams[0] ? "2px solid #F8F8F8" : null,
                                    borderRight: R ? "2px solid black" : n.teams[1] ? "2px solid #F8F8F8" : null,
                                    cursor: (_ = n.teams[0], N = n.teams[1], _ && N ? "pointer" : "default"),
                                    pointerEvents: S ? "none" : null
                                },
                                onMouseMove: function (e) {
                                    T(e) ? (x(!1), b(!0)) : (b(!1), x(!0))
                                },
                                onClick: function (e) {
                                    T(e) ? P(0) : P(1)
                                },
                                children: f.every((function (e) {
                                    return l.includes(e)
                                })) ? "" : "Choose your winners for each match"
                            })]
                        }) : "", (0, Ji.jsxs)("div", {
                            className: "Knockout__teams ".concat("49" === n.matchno && 15 !== l.length ? "Knockout__teams--49" : ""),
                            style: S ? {
                                pointerEvents: "none"
                            } : null,
                            children: [(0, Ji.jsx)("div", {
                                onClick: function () {
                                    return P(0)
                                },
                                className: "Knockout__teams-box ".concat(S ? "Knockout__teams-box--frozen" : n.teams[0] ? "Knockout__teams-box--loaded" : "", " ").concat(g && n.teams[0] && n.teams[0].countrycode === g.countrycode && "49" === n.matchno && 15 !== l.length ? "Knockout__teams-box--winner--49" : g && n.teams[0] && n.teams[0].countrycode === g.countrycode ? "Knockout__teams-box--winner" : "", " ").concat(2 === n.teams.filter((function (e) {
                                    return e
                                })).length ? "Knockout__teams-box--bothloaded" : "", " Knockout__teams-box--left"),
                                onMouseOver: function () {
                                    return b(!0)
                                },
                                onMouseOut: function () {
                                    return b(!1)
                                },
                                style: {
                                    background: v && n.teams[0] || g && n.teams[0] && n.teams[0].countrycode === g.countrycode ? "#fdf4f1" : n.teams[0] ? "#f8f8f8" : null
                                },
                                children: n.teams[0] ? (0, Ji.jsxs)(Ji.Fragment, {
                                    children: [(0, Ji.jsx)("div", {
                                        className: "Knockout__teams-box-flag",
                                        style: g && n.teams[1] && n.teams[1].countrycode === g.countrycode ? {
                                            WebkitFilter: "grayscale(100%)",
                                            filter: "grayscale(100%)",
                                            opacity: "50%"
                                        } : null,
                                        children: (0, Ji.jsx)(nl, {
                                            countrycode: n.teams[0].twolettercode
                                        })
                                    }), (0, Ji.jsx)("span", {
                                        className: "Knockout__teams-box-name",
                                        children: n.teams[0].countryname
                                    }), parseInt(n.teams[0].previouswins) > 0 ? (0, Ji.jsx)("span", {
                                        style: g && n.teams[0] && n.teams[0].countrycode === g.countrycode ? {
                                            WebkitFilter: "grayscale(100%)",
                                            filter: "grayscale(100%)",
                                            opacity: "50%"
                                        } : null,
                                        children: (0, Ji.jsx)(el, {
                                            stars: n.teams[0].previouswins
                                        })
                                    }) : null, (0, Ji.jsxs)("div", {
                                        className: "Knockout__teams-box-name-score-wrapper",
                                        style: S ? "49" !== n.matchno || E || 15 === l.length ? "64" === n.matchno ? {
                                            left: "0%"
                                        } : null : {
                                            top: "74%",
                                            minHeight: "40px"
                                        } : {
                                            display: "none"
                                        },
                                        children: [(0, Ji.jsx)("div", {
                                            className: g && n.teams[0] && n.teams[0].countrycode === g.countrycode ? "Knockout__teams-box-name-score-winner-text" : "Knockout__teams-box-name-score-loser-text",
                                            children: g && n.teams[0] && n.teams[0].countrycode === g.countrycode ? "Winner" : "Out"
                                        }), (0, Ji.jsx)("div", {
                                            className: g && n.teams[0] && n.teams[0].countrycode === g.countrycode ? "Knockout__teams-box-name-score-winner-number" : "Knockout__teams-box-name-score-loser-number",
                                            children: g && n.teams[0] && n.teams[0].countrycode === g.countrycode ? n.winnergoals : n.losergoals
                                        })]
                                    })]
                                }) : I(n.competitor0source)
                            }), (0, Ji.jsx)("div", {
                                onClick: function () {
                                    return P(1)
                                },
                                className: "Knockout__teams-box ".concat(S ? "Knockout__teams-box--frozen" : n.teams[1] ? "Knockout__teams-box--loaded" : "", " ").concat(g && n.teams[1] && n.teams[1].countrycode === g.countrycode && "49" === n.matchno && 15 !== l.length ? "Knockout__teams-box--winner--49" : g && n.teams[1] && n.teams[1].countrycode === g.countrycode ? "Knockout__teams-box--winner" : "", " ").concat(2 === n.teams.filter((function (e) {
                                    return e
                                })).length ? "Knockout__teams-box--bothloaded" : "", " Knockout__teams-box--right"),
                                onMouseOver: function () {
                                    return x(!0)
                                },
                                onMouseOut: function () {
                                    return x(!1)
                                },
                                style: {
                                    background: w && n.teams[1] || g && n.teams[1] && n.teams[1].countrycode === g.countrycode ? "#fdf4f1" : n.teams[1] ? "#f8f8f8" : null
                                },
                                children: n.teams[1] ? (0, Ji.jsxs)(Ji.Fragment, {
                                    children: [(0, Ji.jsx)("div", {
                                        className: "Knockout__teams-box-flag",
                                        style: g && n.teams[0] && n.teams[0].countrycode === g.countrycode ? {
                                            WebkitFilter: "grayscale(100%)",
                                            filter: "grayscale(100%)",
                                            opacity: "50%"
                                        } : null,
                                        children: (0, Ji.jsx)(nl, {
                                            countrycode: n.teams[1].twolettercode
                                        })
                                    }), (0, Ji.jsx)("span", {
                                        className: "Knockout__teams-box-name",
                                        children: n.teams[1].countryname
                                    }), parseInt(n.teams[1].previouswins) > 0 ? (0, Ji.jsx)("span", {
                                        style: g && n.teams[0] && n.teams[0].countrycode === g.countrycode ? {
                                            WebkitFilter: "grayscale(100%)",
                                            filter: "grayscale(100%)",
                                            opacity: "50%"
                                        } : null,
                                        children: (0, Ji.jsx)(el, {
                                            stars: n.teams[1].previouswins
                                        })
                                    }) : null, (0, Ji.jsxs)("div", {
                                        className: "Knockout__teams-box-name-score-wrapper",
                                        style: S ? "49" !== n.matchno || E || 15 === l.length ? "64" === n.matchno ? {
                                            left: "50%"
                                        } : null : {
                                            top: "74%",
                                            minHeight: "40px"
                                        } : {
                                            display: "none"
                                        },
                                        children: [(0, Ji.jsx)("div", {
                                            className: g && n.teams[1] && n.teams[1].countrycode === g.countrycode ? "Knockout__teams-box-name-score-winner-number" : "Knockout__teams-box-name-score-loser-number",
                                            children: g && n.teams[1] && n.teams[1].countrycode === g.countrycode ? n.winnergoals : n.losergoals
                                        }), (0, Ji.jsx)("div", {
                                            className: g && n.teams[1] && n.teams[1].countrycode === g.countrycode ? "Knockout__teams-box-name-score-winner-text" : "Knockout__teams-box-name-score-loser-text",
                                            children: g && n.teams[1] && n.teams[1].countrycode === g.countrycode ? "Winner" : "Out"
                                        })]
                                    })]
                                }) : I(n.competitor1source)
                            }), (0, Ji.jsx)("div", {
                                className: "Knockout__teams-vs ".concat(g && n.teams[0] === g ? "Knockout__teams-vs--leftwinner" : "", " ").concat(g && n.teams[1] === g ? "Knockout__teams-vs--rightwinner" : "")
                            }), (0, Ji.jsx)("span", {
                                className: "Knockout__teams-vs-text",
                                children: "vs"
                            })]
                        })]
                    }) : (0, Ji.jsxs)("div", {
                        className: "Knockout",
                        children: [(0, Ji.jsx)("div", {
                            className: "Knockout__title",
                            children: "MATCH "
                        }), (0, Ji.jsxs)("div", {
                            className: "Knockout__teams",
                            children: [(0, Ji.jsxs)("div", {
                                className: "Knockout__teams-box Knockout__teams-box--left",
                                children: [(0, Ji.jsx)("div", {
                                    className: "Knockout__teams-box-flag",
                                    children: (0, Ji.jsx)(nl, {
                                        countrycode: n.teams[0].twolettercode
                                    })
                                }), (0, Ji.jsx)("span", {
                                    className: "Knockout__teams-box-name",
                                    children: "Group Winner"
                                })]
                            }), (0, Ji.jsxs)("div", {
                                className: "Knockout__teams-box Knockout__teams-box--right",
                                children: [(0, Ji.jsx)("div", {
                                    className: "Knockout__teams-box-flag",
                                    children: (0, Ji.jsx)(nl, {
                                        countrycode: n.teams[0].twolettercode
                                    })
                                }), (0, Ji.jsx)("span", {
                                    className: "Knockout__teams-box-name",
                                    children: "Group Runner Up"
                                })]
                            }), (0, Ji.jsx)("div", {
                                className: "Knockout__teams-vs"
                            }), (0, Ji.jsx)("span", {
                                className: "Knockout__teams-vs-text",
                                children: "vs"
                            })]
                        })]
                    })
                },
                fl = function (e) {
                    var t = e.text,
                        n = e.mobileText,
                        r = e.buttonText,
                        o = e.handleResetButtonClick;
                    return (0, Ji.jsx)("div", {
                        className: "reset-container",
                        children: (0, Ji.jsx)("main", {
                            className: "container",
                            children: (0, Ji.jsx)("section", {
                                className: "grid",
                                children: (0, Ji.jsxs)("div", {
                                    className: "reset-wrapper grid-col grid-col-12",
                                    children: [(0, Ji.jsx)("div", {
                                        className: "reset-text",
                                        children: t
                                    }), (0, Ji.jsx)("div", {
                                        className: "reset-mobile-text",
                                        children: n
                                    }), (0, Ji.jsx)("button", {
                                        className: "reset-button",
                                        onClick: function () {
                                            return o()
                                        },
                                        children: r
                                    })]
                                })
                            })
                        })
                    })
                },
                pl = function (e) {
                    var t = e.handleResetButtonClick,
                        n = e.groupsRef;
                    return (0, Ji.jsxs)("div", {
                        className: "BottomReset",
                        children: [(0, Ji.jsx)("span", {
                            className: "BottomReset__text",
                            children: "Reset to clear your choices and start again"
                        }), (0, Ji.jsx)("button", {
                            className: "BottomReset__button",
                            onClick: function () {
                                return t(), void n.current.scrollIntoView({
                                    behavior: "smooth"
                                })
                            },
                            children: "Reset predictor"
                        })]
                    })
                },
                gl = function (e) {
                    var t = {
                        width: (0, e.calcPercentage)(e.team.countrycode).toString() + "%"
                    },
                        n = {
                            width: 100 - Number(t.width.slice(0, -1)).toString() + "%"
                        };
                    return (0, Ji.jsxs)("div", {
                        className: "percentage-wrapper",
                        children: [(0, Ji.jsx)("div", {
                            className: "percentage-black",
                            style: Number(t.width.slice(0, -1)) <= 100 && Number(t.width.slice(0, -1)) >= 0 ? t : null
                        }), (0, Ji.jsx)("div", {
                            className: "percentage-white",
                            style: Number(n.width.slice(0, -1)) <= 100 && Number(n.width.slice(0, -1)) >= 0 ? n : null
                        })]
                    })
                },
                ml = n(520),
                hl = function (e) {
                    return "placeholder" === e ? "" : "gb-eng" === e ? "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f" : "gb-sco" === e ? "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f" : "gb-wal" === e ? "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f" : String.fromCodePoint.apply(String, i(i(e.toUpperCase()).map((function (e) {
                        return 127397 + e.charCodeAt()
                    }))))
                },
                vl = function (t) {
                    var n = t.winner,
                        r = t.teams,
                        o = t.secondPlace,
                        a = t.scrollToWinner,
                        i = t.setScrollToWinner,
                        l = d((0, e.useState)(!1), 2),
                        u = l[0],
                        c = l[1],
                        f = d((0, e.useState)(!1), 2),
                        g = f[0],
                        m = f[1],
                        h = d((0, e.useState)(!1), 2),
                        v = h[0],
                        b = h[1],
                        y = d((0, e.useState)(!1), 2),
                        w = y[0],
                        x = y[1],
                        C = d((0, e.useState)(""), 2),
                        S = C[0],
                        k = C[1],
                        E = d((0, e.useState)(""), 2),
                        _ = E[0],
                        N = E[1];
                    (0, e.useEffect)((function () {
                        var e = "",
                            t = "";
                        n && o && (e += "\r\nI've predicted ".concat(n.countryname, " ").concat(hl(n.twolettercode), " will beat ").concat(o.countryname, " ").concat(hl(o.twolettercode), " in the 2022 World Cup final. "), t += "\r\nI've predicted ".concat(n.countryname, " will beat ").concat(o.countryname, " in the 2022 World Cup final. ")), g && (e += "".concat(O(n.countrycode), "% of players also predicted ").concat(n.countryname, " ").concat(hl(n.twolettercode), " to win."), t += "".concat(O(n.countrycode), "% of players also predicted ").concat(n.countryname, " to win.")), t += "\r\n\r\n Play the predictor to find your winner", k(e += "\r\n\r\nPlay the predictor to find your winner"), N(t)
                    }), [t, g]), (0, e.useEffect)((function () {
                        if (r) {
                            var e = r.map((function (e) {
                                return {
                                    index: Number(e.teamindex),
                                    twolettercode: e.countrycode
                                }
                            }));
                            b(e)
                        }
                    }), [r]), (0, e.useEffect)((function () {
                        v && n && I(n);
                        var e = function () {
                            var e = s(p().mark((function e() {
                                var t, n, o, a, i, l, u, s;
                                return p().wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!v) {
                                                e.next = 17;
                                                break
                                            }
                                            return "GET", e.next = 4, fetch("https://sets.eip.telegraph.co.uk/wc22/", {
                                                method: "GET"
                                            });
                                        case 4:
                                            return t = e.sent, e.next = 7, t.json();
                                        case 7:
                                            (n = e.sent) || x(!0), o = n.wc22.winner.sort((function (e, t) {
                                                return t.share - e.share
                                            })), a = o.slice(0, 3).map((function (e) {
                                                return v[e.answer]
                                            })), i = r.filter((function (e) {
                                                return e.countrycode === a[0].twolettercode
                                            }))[0], l = r.filter((function (e) {
                                                return e.countrycode === a[1].twolettercode
                                            }))[0], u = r.filter((function (e) {
                                                return e.countrycode === a[2].twolettercode
                                            }))[0], s = [i, l, u], m(o), c(s);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [n, v]);
                    var I = function () {
                        var e = s(p().mark((function e(t) {
                            var n, r, o, a, i, l;
                            return p().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = function (e) {
                                            return [Number(e.teamindex)]
                                        }, r = ml('{"answers":['.concat(n(t), "]}")), o = {
                                            answers: n(t),
                                            sig: r
                                        }, "POST", a = JSON.stringify(o), e.next = 7, fetch("https://sets.eip.telegraph.co.uk/wc22/winner", {
                                            method: "POST",
                                            body: a
                                        });
                                    case 7:
                                        return i = e.sent, e.next = 10, i.json();
                                    case 10:
                                        if (!(l = e.sent).status) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.abrupt("return", l.data);
                                    case 15:
                                        return e.abrupt("return", l);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                        P = (0, e.useRef)();
                    (0, e.useEffect)((function () {
                        u && a && (P.current.scrollIntoView({
                            behavior: "smooth"
                        }), i(!1))
                    }), [n, u]);
                    var O = function (e) {
                        if (v && g) {
                            var t, n = v.find((function (t) {
                                return t.twolettercode === e
                            })).index,
                                r = null === (t = g.find((function (e) {
                                    return e.answer === n
                                }))) || void 0 === t ? void 0 : t.share;
                            return r ? Math.round(100 * r) : 0
                        }
                    },
                        D = O(n.countrycode) >= 0 && O(n.countrycode) <= 100,
                        R = function (e) {
                            return e.includes("localhost") ? "https://telegraph.co.uk" : e
                        };
                    return w ? null : (0, Ji.jsxs)("div", {
                        className: "winner-wrapper",
                        children: [(0, Ji.jsx)("div", {
                            className: "winner-black-bar"
                        }), (0, Ji.jsx)("div", {
                            className: "winner-text-banner",
                            ref: P,
                            children: "YOUR WINNER"
                        }), (0, Ji.jsxs)("div", {
                            className: "winning-team-wrapper",
                            children: [(0, Ji.jsx)("div", {
                                className: "winning-team-flag",
                                children: (0, Ji.jsx)(nl, {
                                    countrycode: n.twolettercode
                                })
                            }), (0, Ji.jsx)("div", {
                                className: "winning-team-name",
                                children: n.countryname
                            }), D ? (0, Ji.jsxs)(Ji.Fragment, {
                                children: [(0, Ji.jsx)("div", {
                                    className: "winning-team-percentage-bar",
                                    children: (0, Ji.jsx)(gl, {
                                        calcPercentage: O,
                                        team: n
                                    })
                                }), (0, Ji.jsxs)("div", {
                                    className: "winning-team-percentage-text",
                                    children: [O(n.countrycode), "% of players also predicted", " ", n.countryname, " to win"]
                                }), " "]
                            }) : null, (0, Ji.jsx)("div", {
                                className: "winner-share",
                                children: navigator && navigator.share ? (0, Ji.jsxs)("div", {
                                    className: "mobile-share",
                                    onClick: function () {
                                        return navigator.share({
                                            url: "https://www.telegraph.co.uk/world-cup/2022-predictor-wallchart-football-qatar/",
                                            text: S
                                        })
                                    },
                                    children: [(0, Ji.jsx)("span", {
                                        children: "SHARE YOUR WINNER"
                                    }), (0, Ji.jsxs)("svg", {
                                        className: "share-svg",
                                        width: "33",
                                        height: "33",
                                        viewBox: "0 0 33 33",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0, Ji.jsx)("path", {
                                            d: "M10 23.3528V10.3528H13.8333V8.85278H9.5C8.94772 8.85278 8.5 9.3005 8.5 9.85278V23.8528C8.5 24.4051 8.94772 24.8528 9.5 24.8528H23.5C24.0523 24.8528 24.5 24.4051 24.5 23.8528V9.85278L24.5 9.84966V19.5195H23V23.3528H10Z",
                                            fill: "#767676"
                                        }), (0, Ji.jsx)("path", {
                                            d: "M16.5 8.85278H24.5L24.5 16.8528H23.1667L22.7354 11.678L17.0303 17.3832L15.9697 16.3225L21.6748 10.6173L16.5 10.1861V8.85278Z",
                                            fill: "#767676"
                                        }), (0, Ji.jsx)("rect", {
                                            x: "1",
                                            y: "1.35278",
                                            width: "31",
                                            height: "31",
                                            rx: "15.5",
                                            stroke: "#767676"
                                        })]
                                    })]
                                }) : (0, Ji.jsxs)("div", {
                                    className: "desktop-share",
                                    children: [(0, Ji.jsx)("span", {
                                        children: "SHARE YOUR WINNER"
                                    }), (0, Ji.jsxs)("div", {
                                        className: "share-icons",
                                        children: [(0, Ji.jsx)("a", {
                                            href: "https://twitter.com/intent/tweet?url=".concat(R("https://www.telegraph.co.uk/world-cup/2022-predictor-wallchart-football-qatar/"), "&text=").concat(encodeURI(S)),
                                            children: (0, Ji.jsxs)("svg", {
                                                className: "share-svg",
                                                width: "32",
                                                height: "33",
                                                viewBox: "0 0 32 33",
                                                fill: "white",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0, Ji.jsx)("rect", {
                                                    x: "0.5",
                                                    y: "1.43408",
                                                    width: "31",
                                                    height: "31",
                                                    rx: "15.5",
                                                    stroke: "black"
                                                }), " ", (0, Ji.jsx)("path", {
                                                    d: "M13.0304 22.3627C19.0656 22.3627 22.368 17.9623 22.368 14.1527C22.368 14.0289 22.368 13.9051 22.3616 13.7813C23.0016 13.3706 23.5584 12.8641 24 12.2901C23.3984 12.5209 22.7648 12.6784 22.112 12.7459C22.7968 12.3858 23.3088 11.8175 23.552 11.1478C22.9056 11.4855 22.2016 11.7218 21.4656 11.8456C20.224 10.6808 18.144 10.6245 16.8192 11.7218C15.968 12.4252 15.6032 13.4775 15.872 14.4791C13.2416 14.3609 10.7776 13.2636 9.1136 11.463C8.2432 12.7797 8.6848 14.4678 10.1312 15.3119C9.6064 15.3006 9.1008 15.1769 8.64 14.9518C8.64 14.963 8.64 14.9743 8.64 14.9855C8.64 16.3585 9.7408 17.5402 11.2768 17.816C10.7904 17.9341 10.2848 17.951 9.792 17.8666C10.2208 19.0427 11.456 19.8473 12.8576 19.8698C11.6928 20.6745 10.2592 21.1078 8.7808 21.1078C8.5184 21.1078 8.256 21.0909 8 21.0684C9.504 21.9181 11.2448 22.3627 13.0304 22.3627Z",
                                                    fill: "#222222"
                                                })]
                                            })
                                        }), (0, Ji.jsx)("a", {
                                            href: "https://www.facebook.com/sharer.php?u=".concat(R("https://www.telegraph.co.uk/world-cup/2022-predictor-wallchart-football-qatar/"), "&quote=").concat(encodeURI(_)),
                                            children: (0, Ji.jsxs)("svg", {
                                                className: "share-svg",
                                                width: "32",
                                                height: "33",
                                                viewBox: "0 0 32 33",
                                                fill: "white",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0, Ji.jsx)("rect", {
                                                    x: "0.5",
                                                    y: "1.43408",
                                                    width: "31",
                                                    height: "31",
                                                    rx: "15.5",
                                                    stroke: "black"
                                                }), (0, Ji.jsx)("path", {
                                                    d: "M17.1973 24.9341V17.6463H19.5654L19.9202 14.7938H17.1973V12.9773C17.1973 12.1529 17.4173 11.5915 18.5561 11.5915H20V9.04634C19.7481 9.01138 18.8878 8.93408 17.8856 8.93408C15.7925 8.93408 14.3592 10.2591 14.3592 12.6939V14.7938H12V17.6463H14.3592V24.9341H17.1973Z",
                                                    fill: "black"
                                                })]
                                            })
                                        }), (0, Ji.jsx)("a", {
                                            href: "https://wa.me?text=".concat(R("https://www.telegraph.co.uk/world-cup/2022-predictor-wallchart-football-qatar/"), " ").concat(_),
                                            children: (0, Ji.jsxs)("svg", {
                                                className: "share-svg",
                                                width: "32",
                                                height: "33",
                                                viewBox: "0 0 32 33",
                                                fill: "white",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0, Ji.jsx)("rect", {
                                                    x: "0.5",
                                                    y: "1.43408",
                                                    width: "31",
                                                    height: "31",
                                                    rx: "15.5",
                                                    stroke: "black"
                                                }), " ", (0, Ji.jsx)("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M21.6687 11.2591C20.1648 9.76054 18.1647 8.93484 16.0336 8.93408C11.6423 8.93408 8.06838 12.4904 8.06685 16.8619C8.06608 18.2593 8.43318 19.6233 9.13031 20.8254L8 24.9341L12.2233 23.8316C13.3868 24.4634 14.697 24.7961 16.0302 24.7965H16.0336C16.0332 24.7965 16.034 24.7965 16.0336 24.7965C20.4242 24.7965 23.9985 21.2397 24 16.8683C24.0008 14.7497 23.173 12.7577 21.6687 11.2591ZM16.0336 23.4576H16.0309C14.843 23.4572 13.6775 23.1394 12.6607 22.5391L12.4189 22.3962L9.91262 23.0504L10.5815 20.6186L10.4241 20.3692C9.76135 19.3199 9.41107 18.1072 9.41183 16.8622C9.41336 13.2291 12.3837 10.273 16.0363 10.273C17.8049 10.2738 19.4673 10.9599 20.7176 12.2057C21.9678 13.4511 22.6558 15.1071 22.655 16.8676C22.6535 20.5011 19.6831 23.4576 16.0336 23.4576ZM19.6656 18.522C19.4666 18.4228 18.4879 17.9438 18.3053 17.8776C18.1227 17.8115 17.9902 17.7784 17.8576 17.9768C17.7251 18.1753 17.3435 18.6216 17.2273 18.7535C17.1112 18.8858 16.9951 18.9021 16.7961 18.8029C16.597 18.7037 15.9557 18.4946 15.1951 17.8198C14.6034 17.2945 14.2039 16.6459 14.0878 16.4475C13.9716 16.249 14.0755 16.1418 14.1749 16.0434C14.2642 15.9544 14.3739 15.8119 14.4736 15.6963C14.5733 15.5807 14.6061 15.4979 14.6726 15.3659C14.7391 15.2336 14.7058 15.1181 14.6562 15.0189C14.6065 14.9196 14.2085 13.9445 14.0423 13.548C13.8807 13.1618 13.7165 13.2143 13.5946 13.2078C13.4785 13.2021 13.3459 13.201 13.213 13.201C13.0805 13.201 12.8646 13.2504 12.682 13.4488C12.4995 13.6473 11.9853 14.1266 11.9853 15.1014C11.9853 16.0765 12.6985 17.0185 12.7982 17.1508C12.8979 17.2831 14.202 19.2838 16.1986 20.1422C16.6734 20.3464 17.0444 20.4684 17.3335 20.5596C17.8102 20.7106 18.2442 20.6893 18.5872 20.6383C18.9696 20.5813 19.7649 20.1589 19.9307 19.6963C20.0965 19.2336 20.0965 18.8368 20.0468 18.7543C19.9971 18.671 19.8646 18.6212 19.6656 18.522Z",
                                                    fill: "#222222"
                                                })]
                                            })
                                        }), (0, Ji.jsx)("a", {
                                            href: "mailto:?to=&subject=My+prediction+for+the+2022+World+Cup&body=".concat(encodeURI(S)).concat(encodeURI("\r\n\r\n")).concat(R("https://www.telegraph.co.uk/world-cup/2022-predictor-wallchart-football-qatar/")),
                                            children: (0, Ji.jsxs)("svg", {
                                                className: "share-svg",
                                                width: "32",
                                                height: "33",
                                                viewBox: "0 0 32 33",
                                                fill: "white",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0, Ji.jsx)("rect", {
                                                    x: "0.5",
                                                    y: "1.43408",
                                                    width: "31",
                                                    height: "31",
                                                    rx: "15.5",
                                                    stroke: "black"
                                                }), " ", (0, Ji.jsx)("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M7 10.9341C7 10.3818 7.44772 9.93408 8 9.93408H24C24.5523 9.93408 25 10.3818 25 10.9341V22.9341C25 23.4864 24.5523 23.9341 24 23.9341H8C7.44772 23.9341 7 23.4864 7 22.9341V10.9341ZM8.5 12.4947V21.1821L12.4817 16.4764L8.5 12.4947ZM9.40554 22.4341H22.5944L18.454 17.5408L17.3107 18.6841L14.6893 18.6841L13.546 17.5408L9.40554 22.4341ZM23.5 21.1821V12.4948L19.5183 16.4764L23.5 21.1821ZM22.4394 11.4341H9.56067L15.3107 17.1841L16.6894 17.1841L22.4394 11.4341Z",
                                                    fill: "black"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), (0, Ji.jsx)("div", {
                                className: "winning-team-fans-graphic",
                                children: (0, Ji.jsx)("img", {
                                    src: "https://cf.eip.telegraph.co.uk/worldcupassets/Celebration-856px.gif",
                                    alt: "World Cup 2022 winners"
                                })
                            })]
                        }), (0, Ji.jsxs)("div", {
                            className: "winner-footer-wrapper",
                            children: [(0, Ji.jsxs)("div", {
                                className: "winner-most-predicted-wrapper",
                                children: [(0, Ji.jsx)("div", {
                                    className: "winner-most-predicted-header",
                                    children: "MOST PREDICTED TO WIN BY READERS"
                                }), u ? u.map((function (e, t) {
                                    return (0, Ji.jsxs)("div", {
                                        className: "winner-most-predicted-team-wrapper",
                                        children: [(0, Ji.jsx)("div", {
                                            className: "winner-most-predicted-team-position",
                                            children: t + 1
                                        }), (0, Ji.jsx)("div", {
                                            className: "winner-most-predicted-team-flag",
                                            children: (0, Ji.jsx)(nl, {
                                                countrycode: e.twolettercode
                                            })
                                        }), (0, Ji.jsx)("div", {
                                            className: "winner-most-predicted-team-name",
                                            children: e.countryname
                                        }), (0, Ji.jsx)("div", {
                                            className: "winner-most-predicted-team-percentage-number",
                                            children: O(e.countrycode) + "%"
                                        }), (0, Ji.jsx)("div", {
                                            className: "winner-most-predicted-team-percentage",
                                            children: (0, Ji.jsx)(gl, {
                                                calcPercentage: O,
                                                team: e
                                            })
                                        })]
                                    }, e + t)
                                })) : null]
                            }), (0, Ji.jsx)("div", {
                                className: "winner-newsletter"
                            })]
                        })]
                    })
                },
                bl = function (e) {
                    var t = e.largeText,
                        n = e.smallText;
                    return (0, Ji.jsxs)("div", {
                        className: "world-cup-large-header-wrapper",
                        children: [(0, Ji.jsx)("div", {
                            className: "world-cup-large-header-black-bar"
                        }), (0, Ji.jsxs)("div", {
                            className: "world-cup-large-header",
                            children: [(0, Ji.jsx)("div", {
                                className: "large-text",
                                children: t
                            }), (0, Ji.jsx)("div", {
                                className: "small-text",
                                children: n
                            })]
                        })]
                    })
                },
                yl = function (e) {
                    return (0, Ji.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        className: "site-footer__social-icon",
                        children: [(0, Ji.jsx)("title", {
                            children: "Facebook icon"
                        }), (0, Ji.jsx)("path", {
                            d: "M11.1973 18V10.7122H13.5654L13.9202 7.85967H11.1973V6.04325C11.1973 5.21877 11.4173 4.65746 12.5561 4.65746H14V2.11226C13.7481 2.07729 12.8878 2 11.8856 2C9.79246 2 8.3592 3.32505 8.3592 5.75983V7.85967H6V10.7122H8.3592V18H11.1973Z"
                        })]
                    })
                },
                wl = function (e) {
                    return (0, Ji.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 32 32",
                        className: "site-footer__social-icon",
                        children: [(0, Ji.jsx)("title", {
                            children: "Instagram icon"
                        }), (0, Ji.jsx)("path", {
                            d: "M10.7,16A5.27,5.27,0,0,1,16,10.7,5.34,5.34,0,0,1,21.3,16,5.27,5.27,0,0,1,16,21.3,5.21,5.21,0,0,1,10.7,16M7.8,16A8.2,8.2,0,1,0,16,7.8,8.17,8.17,0,0,0,7.8,16M22.6,7.5a1.9,1.9,0,1,0,3.8,0,1.84,1.84,0,0,0-1.9-1.9,1.9,1.9,0,0,0-1.9,1.9M9.5,29a12,12,0,0,1-3-.5,3.82,3.82,0,0,1-1.8-1.2,5.67,5.67,0,0,1-1.2-1.8,8.6,8.6,0,0,1-.5-3c-.1-1.7-.1-2.2-.1-6.5s0-4.8.1-6.5a7.48,7.48,0,0,1,.5-2.9A3.82,3.82,0,0,1,4.7,4.8,5.67,5.67,0,0,1,6.5,3.6a6.45,6.45,0,0,1,3-.6c1.7-.1,2.2-.1,6.5-.1s4.8,0,6.5.1a12,12,0,0,1,3,.5,3.82,3.82,0,0,1,1.8,1.2,5.67,5.67,0,0,1,1.2,1.8,8.6,8.6,0,0,1,.5,3c.1,1.7.1,2.2.1,6.5s0,4.8-.1,6.5a12,12,0,0,1-.5,3,3.82,3.82,0,0,1-1.2,1.8,5.67,5.67,0,0,1-1.8,1.2,7.69,7.69,0,0,1-3,.5c-1.7.1-2.2.1-6.5.1s-4.8,0-6.5-.1M9.4.1A16.14,16.14,0,0,0,5.5.8,7.5,7.5,0,0,0,2.7,2.6,8.54,8.54,0,0,0,.8,5.5,12.07,12.07,0,0,0,0,9.4V16c0,4.3,0,4.9.1,6.6a12.07,12.07,0,0,0,.8,3.9,7.5,7.5,0,0,0,1.8,2.8,7.86,7.86,0,0,0,2.8,1.8,12.07,12.07,0,0,0,3.9.8c1.7.1,2.3.1,6.6.1s4.9,0,6.6-.1a12.07,12.07,0,0,0,3.9-.8,7.5,7.5,0,0,0,2.8-1.8,7.86,7.86,0,0,0,1.8-2.8,12.07,12.07,0,0,0,.8-3.9c.1-1.6.1-2.3.1-6.6s0-4.9-.1-6.6a12.07,12.07,0,0,0-.8-3.9,7.5,7.5,0,0,0-1.8-2.8A7.86,7.86,0,0,0,26.5.9,12.07,12.07,0,0,0,22.6.1C20.9,0,20.3,0,16,0S11.1,0,9.4.1"
                        })]
                    })
                },
                xl = function (e) {
                    return (0, Ji.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 32 32",
                        className: "site-footer__social-icon",
                        children: [(0, Ji.jsx)("title", {
                            children: "Twitter icon"
                        }), (0, Ji.jsx)("path", {
                            d: "M10.2,29.6c12,0,18.5-9.9,18.5-18.5v-0.8C30,9.4,31.1,8.2,32,6.9c-1.2,0.5-2.4,0.9-3.7,1.1c1.4-0.8,2.4-2.1,2.9-3.6 C29.9,5.2,28.5,5.7,27,6c-1.2-1.3-3-2-4.8-2c-3.6,0-6.5,2.9-6.5,6.5c0,0.5,0.1,1,0.2,1.5C10.7,11.6,5.8,9.2,2.4,5.1 c-0.6,1-0.9,2.1-0.9,3.3c0,2.2,1.1,4.2,2.9,5.5c-1.1,0-2.1-0.3-3-0.8v0.1c0,3.1,2.2,5.7,5.2,6.4c-0.5,0.2-1.1,0.2-1.7,0.2 c-0.4,0-0.8-0.1-1.2-0.2C4.5,22.2,7,24,9.8,24c-2.4,1.7-5.2,2.7-8.1,2.7H0C3.1,28.6,6.6,29.6,10.2,29.6"
                        })]
                    })
                },
                Cl = function (e) {
                    return (0, Ji.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 32 32",
                        className: "site-footer__social-icon",
                        children: [(0, Ji.jsx)("title", {
                            children: "LinkedIn icon"
                        }), (0, Ji.jsx)("path", {
                            d: "M7,32H1V10.8h6V32z M3.8,7.9C1.7,7.9,0,6.2,0,4.1s1.7-3.8,3.8-3.8S7.6,2,7.6,4.1c0.1,2-1.5,3.7-3.5,3.8 C4,7.9,3.9,7.9,3.8,7.9z M31.8,32h-6.6V21.7c0-2.5,0-5.7-3.5-5.7s-4,2.7-4,5.5V32h-6.6V10.8h6.4v2.9h0.2c1.3-2.2,3.7-3.6,6.2-3.5 c6.7,0,8,4.4,8,10.2L31.8,32z"
                        })]
                    })
                },
                Sl = function (e) {
                    return (0, Ji.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        className: "site-footer__social-icon",
                        children: [(0, Ji.jsx)("title", {
                            children: "Snapchat icon"
                        }), (0, Ji.jsx)("path", {
                            d: "M17.9422 13.7043C17.8318 13.3971 17.6194 13.2311 17.3783 13.0983C17.3334 13.0734 17.2925 13.0485 17.2558 13.0319C17.1822 12.9946 17.1087 12.9572 17.0351 12.9198C16.2834 12.5131 15.695 12.0067 15.2905 11.4008C15.1761 11.2306 15.074 11.048 14.9923 10.8612C14.9555 10.7616 14.9596 10.7035 14.9841 10.6495C15.0086 10.608 15.0413 10.5748 15.0821 10.5458C15.2129 10.4586 15.3436 10.3715 15.4335 10.3134C15.5929 10.2054 15.7236 10.1224 15.8053 10.0643C16.1118 9.84436 16.3283 9.61193 16.4631 9.35045C16.6552 8.98521 16.6797 8.55772 16.5326 8.17172C16.3283 7.62386 15.8217 7.28768 15.2047 7.28768C15.074 7.28768 14.9473 7.30013 14.8166 7.32918C14.7839 7.33748 14.7471 7.34578 14.7144 7.35409C14.7185 6.98054 14.7103 6.58625 14.6777 6.19611C14.5633 4.83061 14.0893 4.11673 13.599 3.54812C13.2844 3.19118 12.9167 2.8882 12.5041 2.65162C11.7605 2.21997 10.9147 2 9.99542 2C9.07613 2 8.23447 2.21997 7.49087 2.65162C7.07821 2.8882 6.7105 3.19118 6.39589 3.54812C5.90561 4.11673 5.43575 4.83476 5.31726 6.19611C5.28458 6.58625 5.27641 6.98054 5.28049 7.35409C5.24781 7.34578 5.21512 7.33748 5.17835 7.32918C5.05169 7.30013 4.92095 7.28768 4.79429 7.28768C4.17735 7.28768 3.67072 7.62802 3.46643 8.17172C3.31934 8.55772 3.34386 8.98521 3.53589 9.35045C3.67072 9.61193 3.88726 9.84436 4.19369 10.0643C4.2754 10.1224 4.40206 10.2054 4.56549 10.3134C4.65129 10.3715 4.77795 10.4545 4.90461 10.5375C4.94955 10.5665 4.98632 10.6039 5.01492 10.6495C5.03943 10.7035 5.04352 10.7616 5.00266 10.8695C4.92095 11.0521 4.82289 11.2306 4.70849 11.3966C4.31218 11.986 3.74017 12.4882 3.01291 12.8908C2.62886 13.0983 2.22846 13.2353 2.05685 13.7043C1.9302 14.0571 2.01191 14.4555 2.33468 14.7959C2.45317 14.9204 2.59208 15.0283 2.74326 15.1113C3.05786 15.2856 3.39289 15.4226 3.74426 15.518C3.8178 15.5388 3.88317 15.5678 3.94446 15.6093C4.06295 15.7131 4.0466 15.8708 4.20186 16.1032C4.27949 16.2236 4.38163 16.3274 4.49603 16.4104C4.82698 16.6428 5.19878 16.6553 5.59101 16.6719C5.94647 16.6843 6.34687 16.7009 6.80855 16.8545C7.00058 16.9167 7.1967 17.0412 7.4255 17.1865C7.97707 17.531 8.72884 18 9.99133 18C11.2538 18 12.0097 17.5268 12.5653 17.1824C12.7941 17.0412 12.9903 16.9167 13.1741 16.8545C13.6317 16.7009 14.0362 16.6843 14.3917 16.6719C14.7839 16.6553 15.1557 16.6428 15.4866 16.4104C15.6255 16.3108 15.7399 16.1863 15.8217 16.0368C15.9361 15.8418 15.932 15.7048 16.0382 15.6093C16.0954 15.5678 16.1608 15.5388 16.2262 15.5222C16.5775 15.4267 16.9207 15.2898 17.2394 15.1113C17.3988 15.0241 17.5458 14.9079 17.6684 14.7709L17.6725 14.7668C17.9912 14.4348 18.0688 14.0446 17.9422 13.7043ZM16.8227 14.3144C16.1404 14.6962 15.6827 14.6547 15.3314 14.8872C15.029 15.0822 15.2088 15.5056 14.9923 15.6591C14.7226 15.8459 13.93 15.6467 12.9085 15.9912C12.0628 16.2734 11.5276 17.0911 10.0077 17.0911C8.48779 17.0911 7.96481 16.2776 7.10681 15.9912C6.08538 15.6467 5.29275 15.8501 5.02309 15.6591C4.80655 15.5056 4.98223 15.0822 4.68398 14.8872C4.32852 14.6547 3.875 14.6962 3.19269 14.3144C2.75551 14.0695 3.00474 13.9201 3.14774 13.8495C5.62369 12.6335 6.02001 10.7533 6.03635 10.6122C6.05678 10.442 6.08129 10.3092 5.89744 10.139C5.72175 9.97302 4.93729 9.47912 4.71666 9.32555C4.35712 9.06822 4.19777 8.81505 4.31626 8.49961C4.39798 8.28379 4.59818 8.20078 4.80655 8.20078C4.87192 8.20078 4.93729 8.20908 5.00266 8.22153C5.39898 8.30869 5.78304 8.50791 6.00367 8.56602C6.03227 8.57432 6.05678 8.57847 6.08538 8.57847C6.20387 8.57847 6.24472 8.51621 6.23655 8.37925C6.21204 7.9393 6.15075 7.08431 6.22021 6.28327C6.31418 5.1834 6.66147 4.63554 7.07821 4.15409C7.27841 3.92166 8.21404 2.91725 10.0077 2.91725C11.8013 2.91725 12.7369 3.91751 12.9371 4.14994C13.3539 4.63139 13.7012 5.17925 13.7951 6.27912C13.8646 7.08016 13.8033 7.93515 13.7747 8.3751C13.7665 8.52036 13.8074 8.57432 13.9259 8.57432C13.9545 8.57432 13.979 8.57017 14.0076 8.56187C14.2282 8.50791 14.6123 8.30454 15.0086 8.21738C15.074 8.20078 15.1393 8.19663 15.2047 8.19663C15.4131 8.19663 15.6133 8.27964 15.695 8.49546C15.8135 8.81089 15.6541 9.06407 15.2946 9.3214C15.0781 9.47497 14.2936 9.96887 14.1138 10.1349C13.93 10.3051 13.9545 10.4379 13.9749 10.608C13.9913 10.7492 14.3876 12.6293 16.8635 13.8454C17.0106 13.916 17.2558 14.0695 16.8227 14.3144Z"
                        })]
                    })
                },
                kl = function (e) {
                    return (0, Ji.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        className: "site-footer__social-icon",
                        children: [(0, Ji.jsx)("title", {
                            children: "YouTube icon"
                        }), (0, Ji.jsx)("path", {
                            d: "M17.6636 6.07372C17.4818 5.37326 16.9364 4.82027 16.2455 4.62672C15 4.28571 10 4.28571 10 4.28571C10 4.28571 5 4.28571 3.74545 4.62672C3.05455 4.81105 2.51818 5.36405 2.32727 6.07372C2 7.34561 2 9.99999 2 9.99999C2 9.99999 2 12.6544 2.33636 13.9263C2.51818 14.6267 3.06364 15.1797 3.75455 15.3733C5 15.7143 10 15.7143 10 15.7143C10 15.7143 15 15.7143 16.2545 15.3733C16.9455 15.1889 17.4818 14.6359 17.6727 13.9263C18 12.6544 18 9.99999 18 9.99999C18 9.99999 18 7.34561 17.6636 6.07372Z"
                        }), (0, Ji.jsx)("path", {
                            className: "youtube-arrow",
                            d: "M8.36353 12.4141L12.5454 9.99937L8.36353 7.58463V12.4141Z"
                        })]
                    })
                },
                El = function (e) {
                    return {
                        facebook: yl,
                        instagram: wl,
                        twitter: xl,
                        linkedIn: Cl,
                        snapchat: Sl,
                        youtube: kl
                    }[e.icon](e.style)
                },
                _l = {
                    data: [],
                    isFetching: !0
                },
                Nl = function () {
                    var t = d((0, e.useState)(_l), 2),
                        n = t[0],
                        r = t[1];
                    (0, e.useEffect)((function () {
                        var e = new AbortController,
                            t = e.signal,
                            n = function () {
                                var e = s(p().mark((function e() {
                                    var n, o;
                                    return p().wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, fetch("https://cf-particle-html.eip.telegraph.co.uk/data-source/41428776-131b-41bf-a7df-694cadd060eb.json", {
                                                    signal: t
                                                });
                                            case 2:
                                                return n = e.sent, e.next = 5, n.json();
                                            case 5:
                                                o = e.sent, r((function (e) {
                                                    return u(u({}, e), {}, {
                                                        data: o,
                                                        isFetching: !1
                                                    })
                                                }));
                                            case 7:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function () {
                                    return e.apply(this, arguments)
                                }
                            }();
                        return n(),
                            function () {
                                return e.abort()
                            }
                    }), []);
                    return (0, Ji.jsx)(Ji.Fragment, {
                        children: (0, Ji.jsxs)("footer", {
                            className: "site-footer",
                            children: [(0, Ji.jsx)("div", {
                                className: "site-footer__container",
                                children: (0, Ji.jsxs)("div", {
                                    className: "site-footer__masthead",
                                    "data-track-wrapper": "bottom_logo",
                                    children: [(0, Ji.jsx)("div", {
                                        className: "site-footer__logo-wrapper",
                                        children: (0, Ji.jsx)("a", {
                                            href: "/",
                                            className: "site-footer__logo-link",
                                            "data-track-img": "",
                                            children: (0, Ji.jsxs)("svg", {
                                                className: "site-footer__logo",
                                                viewBox: "0 0 430 70",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0, Ji.jsx)("title", {
                                                    id: "site-footer-logo-title",
                                                    children: "The Telegraph"
                                                }), (0, Ji.jsx)("use", {
                                                    xlinkHref: "#site-logo"
                                                }), (0, Ji.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    "aria-labelledby": "site-logo-title",
                                                    className: "e-site-logo__image",
                                                    id: "site-logo",
                                                    viewBox: "0 0 430 70",
                                                    children: (0, Ji.jsx)("title", {
                                                        id: "site-logo-title",
                                                        children: "The Telegraph"
                                                    })
                                                })]
                                            })
                                        })
                                    }), (0, Ji.jsx)("div", {
                                        className: "site-footer__back-to-top",
                                        children: (0, Ji.jsxs)("a", {
                                            href: "#",
                                            className: "site-footer__back-to-top-link",
                                            "data-back-to-top-event": "",
                                            children: [(0, Ji.jsx)("span", {
                                                className: "site-footer__back-to-top-text",
                                                children: "Back to top"
                                            }), (0, Ji.jsx)("svg", {
                                                className: "site-footer__back-to-top-icon tmg-svg-icon",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 10 5",
                                                children: (0, Ji.jsx)("path", {
                                                    d: "M.312 0L5 2.353 9.687 0 10 .294 5 5 0 .294.312 0z"
                                                })
                                            })]
                                        })
                                    }), (0, Ji.jsxs)("div", {
                                        className: "site-footer__social",
                                        children: [(0, Ji.jsx)("span", {
                                            className: "site-footer__social-description",
                                            children: "Follow us on:"
                                        }), (0, Ji.jsx)("ul", {
                                            className: "site-footer__social-links",
                                            "data-track-wrapper": "social_list",
                                            children: !n.isFetching && n.data.social && n.data.social.length > 1 && n.data.social.map((function (e) {
                                                return (0, Ji.jsx)("li", {
                                                    className: "site-footer__social-item",
                                                    children: (0, Ji.jsx)("a", {
                                                        href: e.url,
                                                        className: "site-footer__social-link",
                                                        "aria-label": "Visit our ".concat(e.id, " page"),
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: (0, Ji.jsx)(El, {
                                                            icon: e.id
                                                        })
                                                    })
                                                }, e.url)
                                            }))
                                        })]
                                    })]
                                })
                            }), (0, Ji.jsx)("div", {
                                className: "site-footer__primary-content",
                                children: (0, Ji.jsx)("div", {
                                    className: "site-footer__container",
                                    children: (0, Ji.jsxs)("nav", {
                                        className: "site-footer__navigation",
                                        children: [(0, Ji.jsx)("ul", {
                                            className: "site-footer__navigation-list grid",
                                            "data-track-wrapper": "footer_nav",
                                            children: !n.isFetching && n.data.nav && n.data.nav.length > 1 && n.data.nav.map((function (e) {
                                                return (0, Ji.jsx)("li", {
                                                    className: "site-footer__navigation-item grid-col grid-col-6 grid-col-sm-4 grid-col-lg-3",
                                                    children: "sourcepoint_manage_cookies_link" === e.id && "" !== e.onclick ? (0, Ji.jsx)("button", {
                                                        className: "site-footer__navigation-link",
                                                        id: e.id,
                                                        onClick: function () {
                                                            return e.onclick, void (window._sp_ && window._sp_.loadPrivacyManagerModal(211524))
                                                        },
                                                        "data-track-txt": "",
                                                        children: e.title
                                                    }) : (0, Ji.jsx)("a", {
                                                        className: "site-footer__navigation-link",
                                                        href: e.url,
                                                        "data-track-txt": "",
                                                        children: e.title
                                                    })
                                                }, e.url + e.title)
                                            }))
                                        }), (0, Ji.jsx)("div", {
                                            className: "site-footer__navigation-text",
                                            children: "\xa9 Telegraph Media Group Limited 2020"
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                },
                Il = function (e) {
                    var t = new Date(e);
                    return "".concat(t.getDate(), " ").concat(t.toLocaleString("default", {
                        month: "short"
                    }), " ").concat(t.getFullYear(), ", ").concat(t.getHours(), ":").concat(t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes())
                },
                Pl = function () {
                    var t = d((0, e.useState)({
                        onwardJourneys: [],
                        onwardOptions: [],
                        isFetching: !0
                    }), 2),
                        n = t[0],
                        r = t[1];
                    return (0, e.useEffect)((function () {
                        var e = new AbortController,
                            t = e.signal,
                            n = function () {
                                var e = s(p().mark((function e() {
                                    var n, o;
                                    return p().wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, fetch("https://search.eip.telegraph.co.uk?query=world%20cup%202022&business_segment=sport", {
                                                    signal: t
                                                });
                                            case 2:
                                                return n = e.sent, e.next = 5, n.json();
                                            case 5:
                                                (o = e.sent).data.length > 4 && r((function (e) {
                                                    return u(u({}, e), {}, {
                                                        onwardJourneys: o.data.slice(0, 6),
                                                        onwardOptions: o.option,
                                                        isFetching: !1
                                                    })
                                                }));
                                            case 7:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function () {
                                    return e.apply(this, arguments)
                                }
                            }();
                        return n(),
                            function () {
                                return e.abort()
                            }
                    }), []), (0, Ji.jsxs)(Ji.Fragment, {
                        children: [(0, Ji.jsx)("section", {
                            className: "onward",
                            children: (0, Ji.jsx)("div", {
                                className: "container article",
                                children: (0, Ji.jsx)("div", {
                                    className: "grid",
                                    children: (0, Ji.jsxs)("div", {
                                        className: "grid-col grid-col-12 article__layout",
                                        children: [(0, Ji.jsx)("span", {
                                            className: "separator separator--double"
                                        }), (0, Ji.jsxs)("div", {
                                            children: [(0, Ji.jsx)("p", {
                                                className: "onward__title",
                                                children: "More on World Cup"
                                            }), (0, Ji.jsx)("ul", {
                                                children: !n.isFetching && n.onwardJourneys.map((function (e, t) {
                                                    return null !== e && (0, Ji.jsx)("li", {
                                                        className: "listing",
                                                        children: (0, Ji.jsxs)("a", {
                                                            className: "listing__link-wrapper",
                                                            href: e.url,
                                                            alt: e.headline,
                                                            rel: "noopener noreferrer",
                                                            children: [(0, Ji.jsx)("div", {
                                                                className: "listing__image-wrapper",
                                                                children: (0, Ji.jsxs)("div", {
                                                                    className: "listing__image",
                                                                    children: [(0, Ji.jsx)("img", {
                                                                        src: "".concat(e.image.split("?imwidth=")[0].split("?impolicy=")[0], "?imwidth=350"),
                                                                        alt: e.headline
                                                                    }), -1 !== e.image.indexOf("youtube") && (0, Ji.jsx)("div", {
                                                                        className: "e-icon-overlay",
                                                                        children: (0, Ji.jsx)("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            viewBox: "0 0 9 12",
                                                                            className: "e-icon-overlay__image",
                                                                            children: (0, Ji.jsx)("path", {
                                                                                d: "M9 6L-4.89399e-07 11.1962L-3.51373e-08 0.803847L9 6Z"
                                                                            })
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, Ji.jsxs)("div", {
                                                                className: "listing__content",
                                                                children: [(0, Ji.jsx)("p", {
                                                                    className: "listing__title",
                                                                    children: e.headline
                                                                }), (0, Ji.jsx)("div", {
                                                                    className: "listing__meta",
                                                                    children: (0, Ji.jsxs)("div", {
                                                                        className: "listing__meta-wrapper",
                                                                        children: [(0, Ji.jsxs)("p", {
                                                                            className: "listing__byline",
                                                                            children: [(0, Ji.jsxs)("span", {
                                                                                className: "listing__bytext",
                                                                                children: ["By", " "]
                                                                            }), (0, Ji.jsx)("span", {
                                                                                className: "listing__author",
                                                                                children: e.author
                                                                            })]
                                                                        }), (0, Ji.jsx)("p", {
                                                                            className: "listing__date",
                                                                            children: Il(e.date_published)
                                                                        })]
                                                                    })
                                                                })]
                                                            })]
                                                        })
                                                    }, "".concat(t, "listing__").concat(e.headline))
                                                }))
                                            })]
                                        }, "onwardJourneys")]
                                    })
                                })
                            })
                        }), !n.isFetching && (0, Ji.jsx)(Nl, {})]
                    })
                };
            var Ol = function () {
                var t = d((0, e.useState)(!1), 2),
                    n = t[0],
                    o = t[1],
                    a = d((0, e.useState)(!1), 2),
                    l = a[0],
                    c = a[1],
                    f = d((0, e.useState)({
                        A: [!1, !1, !1, !1],
                        B: [!1, !1, !1, !1],
                        C: [!1, !1, !1, !1],
                        D: [!1, !1, !1, !1],
                        E: [!1, !1, !1, !1],
                        F: [!1, !1, !1, !1],
                        G: [!1, !1, !1, !1],
                        H: [!1, !1, !1, !1]
                    }), 2),
                    g = f[0],
                    m = f[1],
                    h = d((0, e.useState)([]), 2),
                    v = h[0],
                    b = h[1],
                    y = d((0, e.useState)(!1), 2),
                    w = y[0],
                    x = y[1],
                    C = d((0, e.useState)([]), 2),
                    S = C[0],
                    k = C[1],
                    E = d((0, e.useState)(!1), 2),
                    _ = E[0],
                    N = E[1],
                    I = d((0, e.useState)(!1), 2),
                    P = I[0],
                    O = I[1],
                    D = d((0, e.useState)(!1), 2),
                    R = D[0],
                    T = D[1],
                    A = d((0, e.useState)([]), 2),
                    j = (A[0], A[1]),
                    L = d((0, e.useState)(!1), 2),
                    M = (L[0], L[1]),
                    B = d((0, e.useState)(!1), 2),
                    F = B[0],
                    z = B[1],
                    U = d((0, e.useState)([]), 2),
                    G = U[0],
                    W = U[1],
                    H = d((0, e.useState)([]), 2),
                    V = H[0],
                    K = H[1],
                    $ = d((0, e.useState)(!1), 2),
                    q = $[0],
                    Y = $[1],
                    Q = d((0, e.useState)({}), 2),
                    Z = Q[0],
                    X = Q[1],
                    J = d((0, e.useState)({}), 2),
                    ee = J[0],
                    te = J[1],
                    ne = ["49", "50", "51", "52", "53", "54", "55", "56"],
                    re = (0, e.useRef)(),
                    oe = (0, e.useRef)();
                (0, e.useEffect)((function () {
                    var e, t, n, r = null === (e = window) || void 0 === e ? void 0 : e.martech;
                    if (!(null === (t = window.tmg) || void 0 === t || null === (n = t.page) || void 0 === n ? void 0 : n.isApp())) {
                        var o = 0;
                        Object.keys(g).forEach((function (e) {
                            g[e].includes(!1) || o++
                        })), 4 === o && r && r.tools.audience("tgt1494WorldCupPredictor")
                    }
                }), [g]), (0, e.useEffect)((function () {
                    var e = function () {
                        var e = s(p().mark((function e() {
                            var t;
                            return p().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, fetch("https://cf-particle-html.eip.telegraph.co.uk/data-source/a69dc25b-bf11-4488-8928-06e7a8f0c550.json?cb=".concat(ul)).then((function (e) {
                                            return e.json()
                                        })).catch((function (e) {
                                            return console.log(e)
                                        }));
                                    case 2:
                                        t = e.sent, X(t), o(t.knockoutMatchMetadata), k(t.updateKnockoutWinners), c(t.teams), le(t.knockoutMatchMetadata);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }), []), (0, e.useEffect)((function () {
                    Object.keys(Z).length > 0 && ae(Z.teams)
                }), [Z]), (0, e.useEffect)((function () {
                    var e = {
                        sheetGroup: function (e) {
                            var t = {};
                            if (e.teams) {
                                var n = [];
                                e.teams.forEach((function (e, r) {
                                    n.push(e), (r + 1) % 4 === 0 && (n.sort((function (e, t) {
                                        return e.groupposition - t.groupposition
                                    })), t[e.groupname] = n, n = [])
                                }))
                            }
                            return t
                        }(Z),
                        sheetKnockout: Z.updateKnockoutWinners
                    };
                    ! function (e, t) {
                        var r = {};
                        if (function (e, t) {
                            var n = [];
                            Object.keys(e.sheetGroup).forEach((function (o) {
                                var a = Object.values(e.sheetGroup[o]),
                                    i = [];
                                if (a.forEach((function (e) {
                                    e.groupposition && (e.frozen = !0, i.push(e), n.includes(o) || n.push(o))
                                })), 4 === i.length) r[o] = i, i = [];
                                else {
                                    var l = Object.keys(t).length > 0 && t.storedGroup[o];
                                    l && !l[0].frozen ? r[o] = l : r[o] = [!1, !1, !1, !1]
                                }
                            })), W(n), m(r)
                        }(e, t), n && l) {
                            var o = n.map((function (e) {
                                return u(u({}, e), {}, {
                                    teams: [!1, !1]
                                })
                            })),
                                a = [],
                                i = [];
                            ["ro16", "qf", "sf", "f"].forEach((function (c) {
                                var s = o.filter((function (e) {
                                    return e.round === c
                                })).map((function (e) {
                                    if ("ro16" === e.round) {
                                        var t = [],
                                            n = e.competitor0source.split("")[0],
                                            o = e.competitor0source.split("")[1],
                                            i = e.competitor1source.split("")[0],
                                            l = e.competitor1source.split("")[1];
                                        return t.push(r[n][o]), t.push(r[i][l]), u(u({}, e), {}, {
                                            teams: t
                                        })
                                    }
                                    var c = a[a.length - 1],
                                        s = !!c.find((function (t) {
                                            return t.matchno === e.competitor0source
                                        })).winner && c.find((function (t) {
                                            return t.matchno === e.competitor0source
                                        })).winner,
                                        d = !!c.find((function (t) {
                                            return t.matchno === e.competitor1source
                                        })).winner && c.find((function (t) {
                                            return t.matchno === e.competitor1source
                                        })).winner;
                                    return u(u({}, e), {}, {
                                        teams: [s, d]
                                    })
                                })),
                                    d = function (r) {
                                        var o = e.sheetKnockout.filter((function (e) {
                                            return e.round === r
                                        })),
                                            a = Object.keys(t).length > 1 ? t.storedKnockout.filter((function (e) {
                                                return e.round === r
                                            })) : [],
                                            c = o.map((function (e, t) {
                                                return e.matchwinner && e.matchwinner === s[t].teams[0].countrycode || e.matchwinner && e.matchwinner === s[t].teams[1].countrycode ? (i.push(e.matchno), u(u({}, e), {}, {
                                                    frozen: !0,
                                                    winner: l.find((function (t) {
                                                        return t.countrycode === e.matchwinner
                                                    }))
                                                })) : a.length > 0 ? a[t].frozen ? u(u({}, a[t]), {}, {
                                                    frozen: !1,
                                                    matchwinner: !1,
                                                    winner: !1
                                                }) : a[t] : n.filter((function (e) {
                                                    return e.round === r
                                                }))[t]
                                            }));
                                        return c
                                    }(c),
                                    f = d.map((function (e, t) {
                                        return e.matchwinner ? u(u({}, e), {}, {
                                            teams: [s[t].teams[0], s[t].teams[1]]
                                        }) : e.teams && e.teams[0].countrycode === s[t].teams[0].countrycode && e.teams[1].countrycode === s[t].teams[1].countrycode ? e : s[t]
                                    }));
                                a.push(f)
                            })), K(i);
                            var c = a.flatMap((function (e) {
                                return e
                            }));
                            b(c)
                        }
                    }(e, ee)
                }), [ee, Z, n, l, R]);
                var ae = function (e) {
                    var t = function () {
                        var t = s(p().mark((function t() {
                            return p().wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, new Promise((function (e, t) {
                                            e([JSON.parse(localStorage.getItem("teams")), JSON.parse(localStorage.getItem("groupStandings")), JSON.parse(localStorage.getItem("knockoutMatches")), JSON.parse(localStorage.getItem("winner"))])
                                        })).then((function (t) {
                                            var n = d(t, 4),
                                                r = n[0],
                                                o = n[1],
                                                a = n[2],
                                                i = n[3];
                                            if (r && JSON.stringify(r.map((function (e) {
                                                return e.countrycode
                                            })).sort()) === JSON.stringify(e.map((function (e) {
                                                return e.countrycode
                                            })).sort())) {
                                                if (o) {
                                                    var l = function () {
                                                        for (var e = Object.values(o), t = 0; t < e.length; t++)
                                                            for (var n = 0; n < e[t].length; n++)
                                                                if (!1 !== e[t][n]) return !1;
                                                        return !0
                                                    }();
                                                    if (l) return te((function (e) {
                                                        return u(u({}, e), {}, {
                                                            storedGroup: o
                                                        })
                                                    })), void N(!0);
                                                    te((function (e) {
                                                        return u(u({}, e), {}, {
                                                            storedGroup: o
                                                        })
                                                    })), m(o), O(!0)
                                                }
                                                if (a) {
                                                    if (0 === a.length) return te((function (e) {
                                                        return u(u({}, e), {}, {
                                                            storedKnockout: a
                                                        })
                                                    })), void N(!0);
                                                    te((function (e) {
                                                        return u(u({}, e), {}, {
                                                            storedKnockout: a
                                                        })
                                                    })), j(a)
                                                }
                                                i && x(i)
                                            }
                                            N(!0)
                                        })).catch((function (e) {
                                            console.log(e), N(!0)
                                        }));
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }();
                    t()
                },
                    ie = function () {
                        var t = (0, e.useRef)(!0);
                        return (0, e.useEffect)((function () {
                            t.current = !1
                        }), []), t.current
                    }();
                (0, e.useEffect)((function () {
                    w || z(!1)
                }), [w]), (0, e.useEffect)((function () {
                    P && (F || re.current && re.current.scrollIntoView({
                        behavior: "smooth"
                    }))
                }), [_, re]), (0, e.useEffect)((function () {
                    l && ae(l)
                }), [l]), (0, e.useEffect)((function () {
                    if (_ || R) {
                        var e = function () {
                            var e = s(p().mark((function e() {
                                return p().wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, new Promise((function (e, t) {
                                                localStorage.setItem("teams", JSON.stringify(l)), localStorage.setItem("groupStandings", JSON.stringify(g)), localStorage.setItem("knockoutMatches", JSON.stringify(v)), localStorage.setItem("winner", JSON.stringify(w))
                                            }));
                                        case 2:
                                            T(!1);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }
                }), [v, g, w, l, _, R]);
                var le = function (e) {
                    b(e.map((function (e) {
                        return u(u({}, e), {}, {
                            teams: [!1, !1]
                        })
                    })))
                },
                    ue = function (e) {
                        "64" === e.matchno && (x(e.winner), e.winner && z(!0));
                        var t = i(v);
                        t.find((function (t) {
                            return t.matchno === e.matchno
                        })) && (t.find((function (t) {
                            return t.matchno === e.matchno
                        })).winner = e.winner), e.frozen && (t.find((function (t) {
                            return t.matchno === e.matchno
                        })).frozen = !0), t.find((function (t) {
                            return t.matchno === e.matchno
                        })).winnergoals && (t.find((function (t) {
                            return t.matchno === e.matchno
                        })).winnergoals = e.winnergoals), t.find((function (t) {
                            return t.matchno === e.matchno
                        })).losergoals && (t.find((function (t) {
                            return t.matchno === e.matchno
                        })).losergoals = e.losergoals);
                        var n = t.find((function (t) {
                            return parseInt(t.competitor0source) === parseInt(e.matchno) || parseInt(t.competitor1source) === parseInt(e.matchno)
                        }));
                        if (n) {
                            "64" === n.matchno && x(!1);
                            var r = parseInt(n.competitor0source) === parseInt(e.matchno) ? 0 : 1;
                            n.teams[r] = e.winner, b(t)
                        }
                    },
                    ce = function (e) {
                        var t;
                        if (!(e.length > 0 && e[0].frozen)) {
                            var n = i(v),
                                o = !1,
                                a = null === (t = e.find((function (e) {
                                    return e.groupname
                                }))) || void 0 === t ? void 0 : t.groupname;
                            a && (e.slice(0, 2).forEach((function (t, r) {
                                if (e[r].countrycode !== g[a][r].countrycode) {
                                    var i = n.find((function (e) {
                                        return e.competitor0source === "".concat(a).concat(r) || e.competitor1source === "".concat(a).concat(r)
                                    })),
                                        l = i.competitor0source === "".concat(a).concat(r) ? 0 : 1;
                                    i.teams[l] = t, i.winner = !1, o = !0
                                }
                            })), m((function (t) {
                                return u(u({}, t), {}, r({}, a, e))
                            })), o && b(n))
                        }
                    },
                    se = function () {
                        var e = v.map((function (e) {
                            return e.frozen ? e : u(u({}, e), {}, {
                                winner: !1,
                                teams: [!1, !1]
                            })
                        }));
                        b(e);
                        var t = {};
                        Object.keys(g).forEach((function (e) {
                            g[e][0].frozen ? t[e] = g[e] : t[e] = [!1, !1, !1, !1]
                        })), m(t), te({}), x(!1), O(!1), j([]), T(!0)
                    };
                return (0, Ji.jsxs)(Ji.Fragment, {
                    children: [P ? (0, Ji.jsx)("div", {
                        ref: re,
                        children: (0, Ji.jsx)(fl, {
                            text: "You are seeing your previous predictions. Reset to clear your choices and start again",
                            mobileText: "You are seeing your previous predictions. Reset to clear your choices and start again",
                            buttonText: "Reset predictor",
                            handleResetButtonClick: se
                        })
                    }) : null, (0, Ji.jsx)("main", {
                        className: "container",
                        children: (0, Ji.jsxs)("section", {
                            className: "grid",
                            children: [" ", (0, Ji.jsx)("div", {
                                ref: oe,
                                className: "grid-col grid-col-12",
                                children: (0, Ji.jsx)(bl, {
                                    largeText: "Group Stage",
                                    smallText: 8 !== G.length ? "Select the final group positions" : ""
                                })
                            }), l ? (0, Ji.jsx)(Ji.Fragment, {
                                children: i(new Set(l.map((function (e) {
                                    return e.groupname
                                })))).map((function (e) {
                                    return (0, Ji.jsx)("div", {
                                        className: "grid-col grid-col-12 grid-col-sm-6 grid-col-lg-3",
                                        children: (0, Ji.jsx)(sl, {
                                            groupName: e,
                                            teams: l.filter((function (t) {
                                                return t.groupname === e
                                            })),
                                            handleGroupResults: ce,
                                            storedPositions: g[e],
                                            storageReset: R,
                                            setStorageReset: T,
                                            frozenGroups: G,
                                            setFrozenGroups: W,
                                            setTurnOnEffect: Y
                                        })
                                    }, "group".concat(e))
                                }))
                            }) : new Array(8).fill(null).map((function (e, t) {
                                return (0, Ji.jsxs)("div", {
                                    className: "grid-col grid-col-12 grid-col-sm-6 grid-col-lg-3",
                                    children: [" ", (0, Ji.jsx)(sl, {
                                        setTurnOnEffect: Y
                                    }, t), " "]
                                }, "group".concat(t, "Empty"))
                            })), (0, Ji.jsx)("div", {
                                className: "grid-col grid-col-12",
                                children: (0, Ji.jsx)(bl, {
                                    largeText: "Round of 16",
                                    smallText: ne.every((function (e) {
                                        return V.includes(e)
                                    })) ? "" : "Choose your winners for each match"
                                })
                            }), v.filter((function (e) {
                                return "ro16" === e.round
                            })) && v.filter((function (e) {
                                return "ro16" === e.round
                            })).length > 0 ? v.filter((function (e) {
                                return "ro16" === e.round
                            })).map((function (e, t) {
                                return (0, Ji.jsx)("div", {
                                    className: "grid-col grid-col-12 grid-col-sm-6 grid-col-lg-3",
                                    children: (0, Ji.jsx)(dl, {
                                        match: e,
                                        handleKnockoutResult: ue,
                                        firstRender: ie,
                                        storageReset: R,
                                        setStorageReset: T,
                                        setChangesMade: M,
                                        knockoutMatches: v,
                                        frozenKnockoutGames: V,
                                        winner: w,
                                        turnOnEffect: q,
                                        ro16: ne
                                    })
                                }, "ro16".concat(t))
                            })) : null, (0, Ji.jsx)("div", {
                                className: "grid-col grid-col-12",
                                children: (0, Ji.jsx)(bl, {
                                    largeText: "Quarter-finals",
                                    smallText: ["57", "58", "59", "60"].every((function (e) {
                                        return V.includes(e)
                                    })) ? "" : "Choose your winners for each match"
                                })
                            }), v.filter((function (e) {
                                return "qf" === e.round
                            })) && v.filter((function (e) {
                                return "qf" === e.round
                            })).length > 0 ? v.filter((function (e) {
                                return "qf" === e.round
                            })).map((function (e, t) {
                                return (0, Ji.jsx)("div", {
                                    className: "grid-col grid-col-12 grid-col-sm-6 grid-col-lg-3",
                                    children: (0, Ji.jsx)(dl, {
                                        match: e,
                                        handleKnockoutResult: ue,
                                        firstRender: ie,
                                        storageReset: R,
                                        setStorageReset: T,
                                        setChangesMade: M,
                                        knockoutMatches: v,
                                        frozenKnockoutGames: V,
                                        winner: w,
                                        turnOnEffect: q,
                                        ro16: ne
                                    })
                                }, "qf".concat(t))
                            })) : null, (0, Ji.jsx)("div", {
                                className: "grid-col grid-col-12",
                                children: (0, Ji.jsx)(bl, {
                                    largeText: "Semi-finals",
                                    smallText: ["61", "62"].every((function (e) {
                                        return V.includes(e)
                                    })) ? "" : "Choose your winners for each match"
                                })
                            }), v.filter((function (e) {
                                return "sf" === e.round
                            })) && v.filter((function (e) {
                                return "sf" === e.round
                            })).length > 0 ? v.filter((function (e) {
                                return "sf" === e.round
                            })).map((function (e, t) {
                                return (0, Ji.jsx)("div", {
                                    className: "grid-col grid-col-12 grid-col-sm-6",
                                    children: (0, Ji.jsx)(dl, {
                                        match: e,
                                        handleKnockoutResult: ue,
                                        firstRender: ie,
                                        storageReset: R,
                                        setStorageReset: T,
                                        setChangesMade: M,
                                        knockoutMatches: v,
                                        frozenKnockoutGames: V,
                                        winner: w,
                                        turnOnEffect: q,
                                        ro16: ne
                                    })
                                }, "sf".concat(t))
                            })) : null, (0, Ji.jsx)("div", {
                                className: "grid-col grid-col-12",
                                children: (0, Ji.jsx)(bl, {
                                    largeText: "Final",
                                    smallText: ["64"].every((function (e) {
                                        return V.includes(e)
                                    })) ? "" : "Choose your winner"
                                })
                            }), v.filter((function (e) {
                                return "f" === e.round
                            })) && 1 === v.filter((function (e) {
                                return "f" === e.round
                            })).length ? v.filter((function (e) {
                                return "f" === e.round
                            })).map((function (e, t) {
                                return (0, Ji.jsx)("div", {
                                    className: "grid-col grid-col-12",
                                    children: (0, Ji.jsx)(dl, {
                                        match: e,
                                        handleKnockoutResult: ue,
                                        firstRender: ie,
                                        storageReset: R,
                                        setStorageReset: T,
                                        setChangesMade: M,
                                        knockoutMatches: v,
                                        frozenKnockoutGames: V,
                                        winner: w,
                                        turnOnEffect: q,
                                        ro16: ne
                                    })
                                }, "final".concat(t))
                            })) : null, w ? (0, Ji.jsx)("div", {
                                className: "grid-col grid-col-12",
                                children: (0, Ji.jsx)(vl, {
                                    winner: w,
                                    teams: l,
                                    secondPlace: v.find((function (e) {
                                        return "64" === e.matchno
                                    })).teams.find((function (e) {
                                        return e.countrycode !== w.countrycode
                                    })),
                                    scrollToWinner: F,
                                    setScrollToWinner: z,
                                    isTournamentOver: S.map((function (e) {
                                        return e.matchwinner.length > 0
                                    })).every((function (e) {
                                        return !0 === e
                                    }))
                                })
                            }) : null, (0, Ji.jsx)("div", {
                                className: "grid-col grid-col-12",
                                children: S.map((function (e) {
                                    return e.matchwinner.length > 0
                                })).every((function (e) {
                                    return !0 === e
                                })) ? null : (0, Ji.jsx)(pl, {
                                    groupsRef: oe,
                                    handleResetButtonClick: se
                                })
                            })]
                        })
                    }), (0, Ji.jsx)(Pl, {})]
                })
            },
                Dl = function (e) {
                    e && e instanceof Function && n.e(787).then(n.bind(n, 787)).then((function (t) {
                        var n = t.getCLS,
                            r = t.getFID,
                            o = t.getFCP,
                            a = t.getLCP,
                            i = t.getTTFB;
                        n(e), r(e), o(e), a(e), i(e)
                    }))
                };
            t.render((0, Ji.jsx)(e.StrictMode, {
                children: (0, Ji.jsx)(Ol, {})
            }), document.getElementById("root")), Dl()
        }()
}();
//# sourceMappingURL=main.caa1c670.js.map