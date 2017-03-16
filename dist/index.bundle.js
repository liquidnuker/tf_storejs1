/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(1);

var customStorage = {
  get: function get(key) {
    return store.get(key);
  },

  set: function set(key, value) {
    return store.set(key, { name: value });
  },

  showAll: function showAll(key, value) {
    store.each(function (key, value) {
      console.log(key, '==', value);
    });
  },

  remove: function remove(key) {
    store.remove(key);
  },

  clearAll: function clearAll() {
    store.clearAll();
  }
};

customStorage.set("user1", { name: "markus" });
console.dir(customStorage.get("user1"));

document.body.innerHTML = customStorage.get("user1");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* store.js - Copyright (c) 2010-2017 Marcus Westin */
!function (e) {
  if ("object" == ( false ? "undefined" : _typeof2(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.store = e();
  }
}(function () {
  var define, module, exports;return function e(t, n, r) {
    function o(u, a) {
      if (!n[u]) {
        if (!t[u]) {
          var s = "function" == typeof require && require;if (!a && s) return require(u, !0);if (i) return i(u, !0);var c = new Error("Cannot find module '" + u + "'");throw c.code = "MODULE_NOT_FOUND", c;
        }var f = n[u] = { exports: {} };t[u][0].call(f.exports, function (e) {
          var n = t[u][1][e];return o(n ? n : e);
        }, f, f.exports, e, t, n, r);
      }return n[u].exports;
    }for (var i = "function" == typeof require && require, u = 0; u < r.length; u++) {
      o(r[u]);
    }return o;
  }({ 1: [function (e, t, n) {
      "use strict";
      var r = e("../src/store-engine"),
          o = e("../storages/all"),
          i = e("../plugins/all");t.exports = r.createStore(o, i);
    }, { "../plugins/all": 2, "../src/store-engine": 13, "../storages/all": 15 }], 2: [function (e, t, n) {
      "use strict";
      t.exports = { defaults: e("./defaults"), dump: e("./dump"), events: e("./events"), observe: e("./observe"), expire: e("./expire"), json2: e("./json2"), operations: e("./operations"), update: e("./update"), "v1-backcompat": e("./v1-backcompat") };
    }, { "./defaults": 3, "./dump": 4, "./events": 5, "./expire": 6, "./json2": 7, "./observe": 9, "./operations": 10, "./update": 11, "./v1-backcompat": 12 }], 3: [function (e, t, n) {
      "use strict";
      function r() {
        function e(e, t) {
          n = t;
        }function t(e, t) {
          var r = e();return void 0 !== r ? r : n[t];
        }var n = {};return { defaults: e, get: t };
      }t.exports = r;
    }, {}], 4: [function (e, t, n) {
      "use strict";
      function r() {
        function e(e) {
          var t = {};return this.each(function (e, n) {
            t[n] = e;
          }), t;
        }return { dump: e };
      }t.exports = r;
    }, {}], 5: [function (e, t, n) {
      "use strict";
      function r() {
        function e(e, t, n) {
          return c.on(t, u(this, n));
        }function t(e, t) {
          c.off(t);
        }function n(e, t, n) {
          c.once(t, u(this, n));
        }function r(e, t, n) {
          var r = this.get(t);e(), c.fire(t, n, r);
        }function i(e, t) {
          var n = this.get(t);e(), c.fire(t, void 0, n);
        }function s(e) {
          var t = {};this.each(function (e, n) {
            t[n] = e;
          }), e(), a(t, function (e, t) {
            c.fire(t, void 0, e);
          });
        }var c = o();return { watch: e, unwatch: t, once: n, set: r, remove: i, clearAll: s };
      }function o() {
        return s(f, { _id: 0, _subSignals: {}, _subCallbacks: {} });
      }var i = e("../src/util"),
          u = i.bind,
          a = i.each,
          s = i.create,
          c = i.slice;t.exports = r;var f = { _id: null, _subCallbacks: null, _subSignals: null, on: function on(e, t) {
          return this._subCallbacks[e] || (this._subCallbacks[e] = {}), this._id += 1, this._subCallbacks[e][this._id] = t, this._subSignals[this._id] = e, this._id;
        }, off: function off(e) {
          var t = this._subSignals[e];delete this._subCallbacks[t][e], delete this._subSignals[e];
        }, once: function once(e, t) {
          var n = this.on(e, u(this, function () {
            t.apply(this, arguments), this.off(n);
          }));
        }, fire: function fire(e) {
          var t = c(arguments, 1);a(this._subCallbacks[e], function (e) {
            e.apply(this, t);
          });
        } };
    }, { "../src/util": 14 }], 6: [function (e, t, n) {
      "use strict";
      function r() {
        function e(e, t, n, i) {
          return this.hasNamespace(o) || r.set(t, i), e();
        }function t(e, t) {
          if (!this.hasNamespace(o)) {
            var n = r.get(t, Number.MAX_VALUE);n <= new Date().getTime() && this.remove(t);
          }return e();
        }function n(e, t) {
          return this.hasNamespace(o) || r.remove(t), e();
        }var r = this.namespace(o);return { set: e, get: t, remove: n };
      }var o = "expire_mixin";t.exports = r;
    }, {}], 7: [function (e, t, n) {
      "use strict";
      function r() {
        return e("./lib/json2"), {};
      }t.exports = r;
    }, { "./lib/json2": 8 }], 8: [function (require, module, exports) {
      "use strict";
      var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
      };"object" !== ("undefined" == typeof JSON ? "undefined" : _typeof(JSON)) && (JSON = {}), function () {
        function f(e) {
          return e < 10 ? "0" + e : e;
        }function this_value() {
          return this.valueOf();
        }function quote(e) {
          return rx_escapable.lastIndex = 0, rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function (e) {
            var t = meta[e];return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
          }) + '"' : '"' + e + '"';
        }function str(e, t) {
          var n,
              r,
              o,
              i,
              u,
              a = gap,
              s = t[e];switch (s && "object" === ("undefined" == typeof s ? "undefined" : _typeof(s)) && "function" == typeof s.toJSON && (s = s.toJSON(e)), "function" == typeof rep && (s = rep.call(t, e, s)), "undefined" == typeof s ? "undefined" : _typeof(s)) {case "string":
              return quote(s);case "number":
              return isFinite(s) ? String(s) : "null";case "boolean":case "null":
              return String(s);case "object":
              if (!s) return "null";if (gap += indent, u = [], "[object Array]" === Object.prototype.toString.apply(s)) {
                for (i = s.length, n = 0; n < i; n += 1) {
                  u[n] = str(n, s) || "null";
                }return o = 0 === u.length ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + a + "]" : "[" + u.join(",") + "]", gap = a, o;
              }if (rep && "object" === ("undefined" == typeof rep ? "undefined" : _typeof(rep))) for (i = rep.length, n = 0; n < i; n += 1) {
                "string" == typeof rep[n] && (r = rep[n], o = str(r, s), o && u.push(quote(r) + (gap ? ": " : ":") + o));
              } else for (r in s) {
                Object.prototype.hasOwnProperty.call(s, r) && (o = str(r, s), o && u.push(quote(r) + (gap ? ": " : ":") + o));
              }return o = 0 === u.length ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + a + "}" : "{" + u.join(",") + "}", gap = a, o;}
        }var rx_one = /^[\],:{}\s]*$/,
            rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            rx_four = /(?:^|:|,)(?:\s*\[)+/g,
            rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
          return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
        }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);var gap, indent, meta, rep;"function" != typeof JSON.stringify && (meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (e, t, n) {
          var r;if (gap = "", indent = "", "number" == typeof n) for (r = 0; r < n; r += 1) {
            indent += " ";
          } else "string" == typeof n && (indent = n);if (rep = t, t && "function" != typeof t && ("object" !== ("undefined" == typeof t ? "undefined" : _typeof(t)) || "number" != typeof t.length)) throw new Error("JSON.stringify");return str("", { "": e });
        }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
          function walk(e, t) {
            var n,
                r,
                o = e[t];if (o && "object" === ("undefined" == typeof o ? "undefined" : _typeof(o))) for (n in o) {
              Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n), void 0 !== r ? o[n] = r : delete o[n]);
            }return reviver.call(e, t, o);
          }var j;if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
          })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j;throw new SyntaxError("JSON.parse");
        });
      }();
    }, {}], 9: [function (e, t, n) {
      "use strict";
      function r() {
        function e(e, t, n) {
          var r = this.watch(t, n);return n(this.get(t)), r;
        }function t(e, t) {
          this.unwatch(t);
        }return { observe: e, unobserve: t };
      }var o = e("./events");t.exports = [o, r];
    }, { "./events": 5 }], 10: [function (e, t, n) {
      "use strict";
      function r() {
        function e(e, t, n, r, o, i) {
          return s.call(this, "push", arguments);
        }function t(e, t) {
          return s.call(this, "pop", arguments);
        }function n(e, t) {
          return s.call(this, "shift", arguments);
        }function r(e, t, n, r, o, i) {
          return s.call(this, "unshift", arguments);
        }function i(e, t, n, r, i, s) {
          var c = u(arguments, 2);return this.update(t, {}, function (e) {
            if ("object" != ("undefined" == typeof e ? "undefined" : o(e))) throw new Error('store.assign called for non-object value with key "' + t + '"');return c.unshift(e), a.apply(Object, c);
          });
        }function s(e, t) {
          var n,
              r = t[1],
              o = u(t, 2);return this.update(r, [], function (t) {
            n = Array.prototype[e].apply(t, o);
          }), n;
        }return { push: e, pop: t, shift: n, unshift: r, assign: i };
      }var o = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
      },
          i = e("../src/util"),
          u = i.slice,
          a = i.assign,
          s = e("./update");t.exports = [s, r];
    }, { "../src/util": 14, "./update": 11 }], 11: [function (e, t, n) {
      "use strict";
      function r() {
        function e(e, t, n, r) {
          3 == arguments.length && (r = n, n = void 0);var o = this.get(t, n),
              i = r(o);this.set(t, void 0 != i ? i : o);
        }return { update: e };
      }t.exports = r;
    }, {}], 12: [function (e, t, n) {
      "use strict";
      function r() {
        return this.disabled = !this.enabled, { has: o, transact: i, clear: u, forEach: a, getAll: s, serialize: c, deserialize: f };
      }function o(e, t) {
        return void 0 !== this.get(t);
      }function i(e, t, n, r) {
        null == r && (r = n, n = null), null == n && (n = {});var o = this.get(t, n),
            i = r(o);this.set(t, void 0 === i ? o : i);
      }function u(e) {
        return this.clearAll.call(this);
      }function a(e, t) {
        return this.each.call(this, function (e, n) {
          t(n, e);
        });
      }function s(e) {
        return this.dump.call(this);
      }function c(e, t) {
        return JSON.stringify(t);
      }function f(e, t) {
        if ("string" == typeof t) try {
          return JSON.parse(t);
        } catch (n) {
          return t || void 0;
        }
      }var l = e("./dump"),
          p = e("./json2");t.exports = [l, p, r];
    }, { "./dump": 4, "./json2": 7 }], 13: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n = { _seenPlugins: [], _namespacePrefix: "", _namespaceRegexp: null, _legalNamespace: /^[a-zA-Z0-9_\-]+$/, _storage: function _storage() {
            if (!this.enabled) throw new Error("store.js: No supported storage has been added! Add one (e.g store.addStorage(require('store/storages/cookieStorage')) or use a build with more built-in storages (e.g https://github.com/marcuswestin/store.js/tree/master/dist/store.legacy.min.js)");return this._storage.resolved;
          }, _testStorage: function _testStorage(e) {
            try {
              var t = "__storejs__test__";e.write(t, t);var n = e.read(t) === t;return e.remove(t), n;
            } catch (r) {
              return !1;
            }
          }, _assignPluginFnProp: function _assignPluginFnProp(e, t) {
            var n = this[t];this[t] = function () {
              function t() {
                if (n) {
                  var e = n.apply(o, t.args);return delete t.args, e;
                }
              }var r = Array.prototype.slice.call(arguments, 0),
                  o = this,
                  i = [t].concat(r);return t.args = r, e.apply(o, i);
            };
          }, _serialize: function _serialize(e) {
            return JSON.stringify(e);
          }, _deserialize: function _deserialize(e, t) {
            if (!e) return t;var n = "";try {
              n = JSON.parse(e);
            } catch (r) {
              n = e;
            }return void 0 !== n ? n : t;
          } },
            r = a(n, l);return u(e, function (e) {
          r.addStorage(e);
        }), u(t, function (e) {
          r.addPlugin(e);
        }), r;
      }var o = e("./util"),
          i = o.pluck,
          u = o.each,
          a = o.create,
          s = o.isList,
          c = o.isFunction,
          f = o.isObject;t.exports = { createStore: r };var l = { version: "2.0.3", enabled: !1, storage: null, addStorage: function addStorage(e) {
          this.enabled || this._testStorage(e) && (this._storage.resolved = e, this.enabled = !0, this.storage = e.name);
        }, addPlugin: function addPlugin(e) {
          var t = this;if (s(e)) return void u(e, function (e) {
            t.addPlugin(e);
          });var n = i(this._seenPlugins, function (t) {
            return e === t;
          });if (!n) {
            if (this._seenPlugins.push(e), !c(e)) throw new Error("Plugins must be function values that return objects");var r = e.call(this);if (!f(r)) throw new Error("Plugins must return an object of function properties");u(r, function (n, r) {
              if (!c(n)) throw new Error("Bad plugin property: " + r + " from plugin " + e.name + ". Plugins should only return functions.");t._assignPluginFnProp(n, r);
            });
          }
        }, get: function get(e, t) {
          var n = this._storage().read(this._namespacePrefix + e);return this._deserialize(n, t);
        }, set: function set(e, t) {
          return void 0 === t ? this.remove(e) : (this._storage().write(this._namespacePrefix + e, this._serialize(t)), t);
        }, remove: function remove(e) {
          this._storage().remove(this._namespacePrefix + e);
        }, each: function each(e) {
          var t = this;this._storage().each(function (n, r) {
            e(t._deserialize(n), r.replace(t._namespaceRegexp, ""));
          });
        }, clearAll: function clearAll() {
          this._storage().clearAll();
        }, hasNamespace: function hasNamespace(e) {
          return this._namespacePrefix == "__storejs_" + e + "_";
        }, namespace: function namespace(e) {
          if (!this._legalNamespace.test(e)) throw new Error("store.js namespaces can only have alhpanumerics + underscores and dashes");var t = "__storejs_" + e + "_";return a(this, { _namespacePrefix: t, _namespaceRegexp: t ? new RegExp("^" + t) : null });
        }, createStore: function createStore(e, t) {
          return r(e, t);
        } };
    }, { "./util": 14 }], 14: [function (e, t, n) {
      (function (e) {
        "use strict";
        function n() {
          return Object.assign ? Object.assign : function (e, t, n, r) {
            for (var o = 1; o < arguments.length; o++) {
              a(Object(arguments[o]), function (t, n) {
                e[n] = t;
              });
            }return e;
          };
        }function r() {
          if (Object.create) return function (e, t, n, r) {
            var o = u(arguments, 1);return d.apply(this, [Object.create(e)].concat(o));
          };var e = function e() {};return function (t, n, r, o) {
            var i = u(arguments, 1);return e.prototype = t, d.apply(this, [new e()].concat(i));
          };
        }function o() {
          return String.prototype.trim ? function (e) {
            return String.prototype.trim.call(e);
          } : function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          };
        }function i(e, t) {
          return function () {
            return t.apply(e, Array.prototype.slice.call(arguments, 0));
          };
        }function u(e, t) {
          return Array.prototype.slice.call(e, t || 0);
        }function a(e, t) {
          c(e, function (e, n) {
            return t(e, n), !1;
          });
        }function s(e, t) {
          var n = f(e) ? [] : {};return c(e, function (e, r) {
            return n[r] = t(e, r), !1;
          }), n;
        }function c(e, t) {
          if (f(e)) {
            for (var n = 0; n < e.length; n++) {
              if (t(e[n], n)) return e[n];
            }
          } else for (var r in e) {
            if (e.hasOwnProperty(r) && t(e[r], r)) return e[r];
          }
        }function f(e) {
          return null != e && "function" != typeof e && "number" == typeof e.length;
        }function l(e) {
          return e && "[object Function]" === {}.toString.call(e);
        }function p(e) {
          return e && "[object Object]" === {}.toString.call(e);
        }var d = n(),
            g = r(),
            h = o(),
            v = "undefined" != typeof window ? window : e;t.exports = { assign: d, create: g, trim: h, bind: i, slice: u, each: a, map: s, pluck: c, isList: f, isFunction: l, isObject: p, Global: v };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}], 15: [function (e, t, n) {
      "use strict";
      t.exports = { localStorage: e("./localStorage"), "oldFF-globalStorage": e("./oldFF-globalStorage"), "oldIE-userDataStorage": e("./oldIE-userDataStorage"), cookieStorage: e("./cookieStorage"), sessionStorage: e("./sessionStorage"), memoryStorage: e("./memoryStorage") };
    }, { "./cookieStorage": 16, "./localStorage": 17, "./memoryStorage": 18, "./oldFF-globalStorage": 19, "./oldIE-userDataStorage": 20, "./sessionStorage": 21 }], 16: [function (e, t, n) {
      "use strict";
      function r(e) {
        if (!e || !s(e)) return null;var t = "(?:^|.*;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(p.cookie.replace(new RegExp(t), "$1"));
      }function o(e) {
        for (var t = p.cookie.split(/; ?/g), n = t.length - 1; n >= 0; n--) {
          if (l(t[n])) {
            var r = t[n].split("="),
                o = unescape(r[0]),
                i = unescape(r[1]);e(i, o);
          }
        }
      }function i(e, t) {
        e && (p.cookie = escape(e) + "=" + escape(t) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/");
      }function u(e) {
        e && s(e) && (p.cookie = escape(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/");
      }function a() {
        o(function (e, t) {
          u(t);
        });
      }function s(e) {
        return new RegExp("(?:^|;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(p.cookie);
      }var c = e("../src/util"),
          f = c.Global,
          l = c.trim;t.exports = { name: "cookieStorage", read: r, write: i, each: o, remove: u, clearAll: a };var p = f.document;
    }, { "../src/util": 14 }], 17: [function (e, t, n) {
      "use strict";
      function r() {
        return f.localStorage;
      }function o(e) {
        return r().getItem(e);
      }function i(e, t) {
        return r().setItem(e, t);
      }function u(e) {
        for (var t = r().length - 1; t >= 0; t--) {
          var n = r().key(t);e(o(n), n);
        }
      }function a(e) {
        return r().removeItem(e);
      }function s() {
        return r().clear();
      }var c = e("../src/util"),
          f = c.Global;t.exports = { name: "localStorage", read: o, write: i, each: u, remove: a, clearAll: s };
    }, { "../src/util": 14 }], 18: [function (e, t, n) {
      "use strict";
      function r(e) {
        return s[e];
      }function o(e, t) {
        s[e] = t;
      }function i(e) {
        for (var t in s) {
          s.hasOwnProperty(t) && e(s[t], t);
        }
      }function u(e) {
        delete s[e];
      }function a(e) {
        s = {};
      }t.exports = { name: "memoryStorage", read: r, write: o, each: i, remove: u, clearAll: a };var s = {};
    }, {}], 19: [function (e, t, n) {
      "use strict";
      function r(e) {
        return f[e];
      }function o(e, t) {
        f[e] = t;
      }function i(e) {
        for (var t = f.length - 1; t >= 0; t--) {
          var n = f.key(t);e(f[n], n);
        }
      }function u(e) {
        return f.removeItem(e);
      }function a() {
        i(function (e, t) {
          delete f[e];
        });
      }var s = e("../src/util"),
          c = s.Global;t.exports = { name: "oldFF-globalStorage", read: r, write: o, each: i, remove: u, clearAll: a };var f = c.globalStorage;
    }, { "../src/util": 14 }], 20: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!h) {
          var n = s(e);g(function (e) {
            e.setAttribute(n, t), e.save(p);
          });
        }
      }function o(e) {
        if (!h) {
          var t = s(e),
              n = null;return g(function (e) {
            n = e.getAttribute(t);
          }), n;
        }
      }function i(e) {
        g(function (t) {
          for (var n = t.XMLDocument.documentElement.attributes, r = n.length - 1; r >= 0; r--) {
            var o = n[r];e(t.getAttribute(o.name), o.name);
          }
        });
      }function u(e) {
        var t = s(e);g(function (e) {
          e.removeAttribute(t), e.save(p);
        });
      }function a() {
        g(function (e) {
          var t = e.XMLDocument.documentElement.attributes;e.load(p);for (var n = t.length - 1; n >= 0; n--) {
            e.removeAttribute(t[n].name);
          }e.save(p);
        });
      }function s(e) {
        return e.replace(/^d/, "___$&").replace(v, "___");
      }function c() {
        if (!d || !d.documentElement || !d.documentElement.addBehavior) return null;var e,
            t,
            n,
            r = "script";try {
          t = new ActiveXObject("htmlfile"), t.open(), t.write("<" + r + ">document.w=window</" + r + '><iframe src="/favicon.ico"></iframe>'), t.close(), e = t.w.frames[0].document, n = e.createElement("div");
        } catch (o) {
          n = d.createElement("div"), e = d.body;
        }return function (t) {
          var r = [].slice.call(arguments, 0);r.unshift(n), e.appendChild(n), n.addBehavior("#default#userData"), n.load(p), t.apply(this, r), e.removeChild(n);
        };
      }var f = e("../src/util"),
          l = f.Global;t.exports = { name: "oldIE-userDataStorage", write: r, read: o, each: i, remove: u, clearAll: a };var p = "storejs",
          d = l.document,
          g = c(),
          h = (l.navigator ? l.navigator.userAgent : "").match(/ (MSIE 8|MSIE 9|MSIE 10)\./),
          v = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
    }, { "../src/util": 14 }], 21: [function (e, t, n) {
      "use strict";
      function r() {
        return f.sessionStorage;
      }function o(e) {
        return r().getItem(e);
      }function i(e, t) {
        return r().setItem(e, t);
      }function u(e) {
        for (var t = r().length - 1; t >= 0; t--) {
          var n = r().key(t);e(o(n), n);
        }
      }function a(e) {
        return r().removeItem(e);
      }function s() {
        return r().clear();
      }var c = e("../src/util"),
          f = c.Global;t.exports = { name: "sessionStorage", read: o, write: i, each: u, remove: a, clearAll: s };
    }, { "../src/util": 14 }] }, {}, [1])(1);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);