"use strict";

function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function _regeneratorRuntime() {
    _regeneratorRuntime = function() {
        return a
    };
    var s, a = {},
        t = Object.prototype,
        u = t.hasOwnProperty,
        l = Object.defineProperty || function(t, e, r) {
            t[e] = r.value
        },
        e = "function" == typeof Symbol ? Symbol : {},
        n = e.iterator || "@@iterator",
        r = e.asyncIterator || "@@asyncIterator",
        o = e.toStringTag || "@@toStringTag";

    function i(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e]
    }
    try {
        i({}, "")
    } catch (s) {
        i = function(t, e, r) {
            return t[e] = r
        }
    }

    function c(t, e, r, n) {
        var o, i, a, c, e = e && e.prototype instanceof g ? e : g,
            e = Object.create(e.prototype),
            n = new E(n || []);
        return l(e, "_invoke", {
            value: (o = t, i = r, a = n, c = h, function(t, e) {
                if (c === y) throw new Error("Generator is already running");
                if (c === d) {
                    if ("throw" === t) throw e;
                    return {
                        value: s,
                        done: !0
                    }
                }
                for (a.method = t, a.arg = e;;) {
                    var r = a.delegate;
                    if (r) {
                        r = function t(e, r) {
                            var n = r.method,
                                o = e.iterator[n];
                            if (o === s) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = s, t(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), v;
                            n = f(o, e.iterator, r.arg);
                            if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, v;
                            o = n.arg;
                            return o ? o.done ? (r[e.resultName] = o.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = s), r.delegate = null, v) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
                        }(r, a);
                        if (r) {
                            if (r === v) continue;
                            return r
                        }
                    }
                    if ("next" === a.method) a.sent = a._sent = a.arg;
                    else if ("throw" === a.method) {
                        if (c === h) throw c = d, a.arg;
                        a.dispatchException(a.arg)
                    } else "return" === a.method && a.abrupt("return", a.arg);
                    c = y;
                    r = f(o, i, a);
                    if ("normal" === r.type) {
                        if (c = a.done ? d : p, r.arg === v) continue;
                        return {
                            value: r.arg,
                            done: a.done
                        }
                    }
                    "throw" === r.type && (c = d, a.method = "throw", a.arg = r.arg)
                }
            })
        }), e
    }

    function f(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            }
        } catch (t) {
            return {
                type: "throw",
                arg: t
            }
        }
    }
    a.wrap = c;
    var h = "suspendedStart",
        p = "suspendedYield",
        y = "executing",
        d = "completed",
        v = {};

    function g() {}

    function m() {}

    function _() {}
    var e = {},
        w = (i(e, n, function() {
            return this
        }), Object.getPrototypeOf),
        w = w && w(w(S([]))),
        b = (w && w !== t && u.call(w, n) && (e = w), _.prototype = g.prototype = Object.create(e));

    function L(t) {
        ["next", "throw", "return"].forEach(function(e) {
            i(t, e, function(t) {
                return this._invoke(e, t)
            })
        })
    }

    function k(a, c) {
        var e;
        l(this, "_invoke", {
            value: function(r, n) {
                function t() {
                    return new c(function(t, e) {
                        ! function e(t, r, n, o) {
                            var i, t = f(a[t], a, r);
                            if ("throw" !== t.type) return (r = (i = t.arg).value) && "object" == _typeof(r) && u.call(r, "__await") ? c.resolve(r.__await).then(function(t) {
                                e("next", t, n, o)
                            }, function(t) {
                                e("throw", t, n, o)
                            }) : c.resolve(r).then(function(t) {
                                i.value = t, n(i)
                            }, function(t) {
                                return e("throw", t, n, o)
                            });
                            o(t.arg)
                        }(r, n, t, e)
                    })
                }
                return e = e ? e.then(t, t) : t()
            }
        })
    }

    function x(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
    }

    function O(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e
    }

    function E(t) {
        this.tryEntries = [{
            tryLoc: "root"
        }], t.forEach(x, this), this.reset(!0)
    }

    function S(e) {
        if (e || "" === e) {
            var r, t = e[n];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) return r = -1, (t = function t() {
                for (; ++r < e.length;)
                    if (u.call(e, r)) return t.value = e[r], t.done = !1, t;
                return t.value = s, t.done = !0, t
            }).next = t
        }
        throw new TypeError(_typeof(e) + " is not iterable")
    }
    return l(b, "constructor", {
        value: m.prototype = _,
        configurable: !0
    }), l(_, "constructor", {
        value: m,
        configurable: !0
    }), m.displayName = i(_, o, "GeneratorFunction"), a.isGeneratorFunction = function(t) {
        t = "function" == typeof t && t.constructor;
        return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
    }, a.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, _) : (t.__proto__ = _, i(t, o, "GeneratorFunction")), t.prototype = Object.create(b), t
    }, a.awrap = function(t) {
        return {
            __await: t
        }
    }, L(k.prototype), i(k.prototype, r, function() {
        return this
    }), a.AsyncIterator = k, a.async = function(t, e, r, n, o) {
        void 0 === o && (o = Promise);
        var i = new k(c(t, e, r, n), o);
        return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
            return t.done ? t.value : i.next()
        })
    }, L(b), i(b, o, "Generator"), i(b, n, function() {
        return this
    }), i(b, "toString", function() {
        return "[object Generator]"
    }), a.keys = function(t) {
        var e, r = Object(t),
            n = [];
        for (e in r) n.push(e);
        return n.reverse(),
            function t() {
                for (; n.length;) {
                    var e = n.pop();
                    if (e in r) return t.value = e, t.done = !1, t
                }
                return t.done = !0, t
            }
    }, a.values = S, E.prototype = {
        constructor: E,
        reset: function(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = s, this.done = !1, this.delegate = null, this.method = "next", this.arg = s, this.tryEntries.forEach(O), !t)
                for (var e in this) "t" === e.charAt(0) && u.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = s)
        },
        stop: function() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval
        },
        dispatchException: function(r) {
            if (this.done) throw r;
            var n = this;

            function t(t, e) {
                return i.type = "throw", i.arg = r, n.next = t, e && (n.method = "next", n.arg = s), !!e
            }
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var o = this.tryEntries[e],
                    i = o.completion;
                if ("root" === o.tryLoc) return t("end");
                if (o.tryLoc <= this.prev) {
                    var a = u.call(o, "catchLoc"),
                        c = u.call(o, "finallyLoc");
                    if (a && c) {
                        if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                    } else if (a) {
                        if (this.prev < o.catchLoc) return t(o.catchLoc, !0)
                    } else {
                        if (!c) throw new Error("try statement without catch or finally");
                        if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(t, e) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                var n = this.tryEntries[r];
                if (n.tryLoc <= this.prev && u.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                    var o = n;
                    break
                }
            }
            var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
            return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(i)
        },
        complete: function(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
        },
        finish: function(t) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), v
            }
        },
        catch: function(t) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var r, n, o = this.tryEntries[e];
                if (o.tryLoc === t) return "throw" === (r = o.completion).type && (n = r.arg, O(o)), n
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(t, e, r) {
            return this.delegate = {
                iterator: S(t),
                resultName: e,
                nextLoc: r
            }, "next" === this.method && (this.arg = s), v
        }
    }, a
}

function asyncGeneratorStep(t, e, r, n, o, i, a) {
    try {
        var c = t[i](a),
            s = c.value
    } catch (t) {
        return void r(t)
    }
    c.done ? e(s) : Promise.resolve(s).then(n, o)
}

function _asyncToGenerator(c) {
    return function() {
        var t = this,
            a = arguments;
        return new Promise(function(e, r) {
            var n = c.apply(t, a);

            function o(t) {
                asyncGeneratorStep(n, e, r, o, i, "next", t)
            }

            function i(t) {
                asyncGeneratorStep(n, e, r, o, i, "throw", t)
            }
            o(void 0)
        })
    }
}
var WP_Statistics_CheckTime = 6e4,
    WP_Statistics_Dnd_Active = parseInt(navigator.msDoNotTrack || window.doNotTrack || navigator.doNotTrack, 10),
    wpStatisticsUserOnline = {
        init: function() {
            "undefined" == typeof WP_Statistics_Tracker_Object ? console.log("Variable WP_Statistics_Tracker_Object not found on the page source. Please ensure that you have excluded the /wp-content/plugins/wp-statistics/assets/js/tracker.js file from your cache and then clear your cache.") : (this.checkHitRequestConditions(), this.keepUserOnline())
        },
        checkHitRequestConditions: function() {
            !WP_Statistics_Tracker_Object.option.cacheCompatibility || WP_Statistics_Tracker_Object.option.dntEnabled && 1 === WP_Statistics_Dnd_Active || this.sendHitRequest()
        },
        sendHitRequest: function() {
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function t() {
                var e, r;
                return _regeneratorRuntime().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, r = encodeURIComponent(document.referrer), e = Date.now(), r = "".concat(WP_Statistics_Tracker_Object.hitRequestUrl, "&referred=").concat(r, "&_=").concat(e), t.next = 6, fetch(r, {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json;charset=UTF-8"
                                }
                            });
                        case 6:
                            t.sent.ok || console.error("Hit request failed!"), t.next = 13;
                            break;
                        case 10:
                            t.prev = 10, t.t0 = t.catch(0), console.error("An error occurred on sending hit request:", t.t0);
                        case 13:
                        case "end":
                            return t.stop()
                    }
                }, t, null, [
                    [0, 10]
                ])
            }));
            return function() {
                return t.apply(this, arguments)
            }
        }(),
        sendOnlineUserRequest: function() {
            var t = new XMLHttpRequest;
            t.open("GET", WP_Statistics_Tracker_Object.keepOnlineRequestUrl), t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), t.send(null)
        },
        keepUserOnline: function() {
            setInterval(function() {
                document.hidden || WP_Statistics_Tracker_Object.option.dntEnabled && 1 === WP_Statistics_Dnd_Active || this.sendOnlineUserRequest()
            }.bind(this), WP_Statistics_CheckTime)
        }
    };
document.addEventListener("DOMContentLoaded", function() {
    wpStatisticsUserOnline.init()
});