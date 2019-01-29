(function(t) {
  function e(e) {
    for (
      var n, i, s = e[0], c = e[1], l = e[2], u = 0, p = [];
      u < s.length;
      u++
    )
      (i = s[u]), a[i] && p.push(a[i][0]), (a[i] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
    d && d(e);
    while (p.length) p.shift()();
    return o.push.apply(o, l || []), r();
  }
  function r() {
    for (var t, e = 0; e < o.length; e++) {
      for (var r = o[e], n = !0, i = 1; i < r.length; i++) {
        var c = r[i];
        0 !== a[c] && (n = !1);
      }
      n && (o.splice(e--, 1), (t = s((s.s = r[0]))));
    }
    return t;
  }
  var n = {},
    a = { app: 0 },
    o = [];
  function i(t) {
    return (
      s.p +
      "js/" +
      ({ about: "about" }[t] || t) +
      "." +
      { about: "0ba7a350" }[t] +
      ".js"
    );
  }
  function s(e) {
    if (n[e]) return n[e].exports;
    var r = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(r.exports, r, r.exports, s), (r.l = !0), r.exports;
  }
  (s.e = function(t) {
    var e = [],
      r = a[t];
    if (0 !== r)
      if (r) e.push(r[2]);
      else {
        var n = new Promise(function(e, n) {
          r = a[t] = [e, n];
        });
        e.push((r[2] = n));
        var o,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          s.nc && c.setAttribute("nonce", s.nc),
          (c.src = i(t)),
          (o = function(e) {
            (c.onerror = c.onload = null), clearTimeout(l);
            var r = a[t];
            if (0 !== r) {
              if (r) {
                var n = e && ("load" === e.type ? "missing" : e.type),
                  o = e && e.target && e.target.src,
                  i = new Error(
                    "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")"
                  );
                (i.type = n), (i.request = o), r[1](i);
              }
              a[t] = void 0;
            }
          });
        var l = setTimeout(function() {
          o({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = o), document.head.appendChild(c);
      }
    return Promise.all(e);
  }),
    (s.m = t),
    (s.c = n),
    (s.d = function(t, e, r) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (s.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (s.t = function(t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (s.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          s.d(
            r,
            n,
            function(e) {
              return t[e];
            }.bind(null, n)
          );
      return r;
    }),
    (s.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return s.d(e, "a", e), e;
    }),
    (s.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = "/homepage-sangfor/"),
    (s.oe = function(t) {
      throw (console.error(t), t);
    });
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = c.push.bind(c);
  (c.push = e), (c = c.slice());
  for (var u = 0; u < c.length; u++) e(c[u]);
  var d = l;
  o.push([0, "chunk-vendors"]), r();
})({
  0: function(t, e, r) {
    t.exports = r("56d7");
  },
  "03c1": function(t, e, r) {},
  1417: function(t, e, r) {
    "use strict";
    var n = r("03c1"),
      a = r.n(n);
    a.a;
  },
  5259: function(t, e, r) {},
  "56d7": function(t, e, r) {
    "use strict";
    r.r(e);
    r("cadf"), r("551c"), r("097d");
    var n = r("2b0e"),
      a = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r("div", { attrs: { id: "app" } }, [r("router-view")], 1);
      },
      o = [],
      i = r("2877"),
      s = {},
      c = Object(i["a"])(s, a, o, !1, null, null, null);
    c.options.__file = "App.vue";
    var l = c.exports,
      u = r("8c4f"),
      d = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r("div", { staticClass: "home" }, [r("s-first-screen")], 1);
      },
      p = [],
      f = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          { staticClass: "first-screen", style: { height: t.height + "px" } },
          [
            r("s-navbar", { attrs: { theme: "white" } }),
            r("video", {
              staticClass: "first-screen__bg",
              attrs: { src: t.bgVideo, autoplay: "", loop: "", muted: "" },
              domProps: { muted: !0 }
            }),
            r("img", {
              staticClass: "first-screen__bg-people",
              attrs: { src: t.bgPeople, alt: "" }
            }),
            r("img", {
              staticClass: "first-screen__bg-slogan",
              attrs: { src: t.bgSlogan, alt: "" }
            }),
            r(
              "div",
              { staticClass: "first-screen__bottom" },
              t._l(t.cardList, function(t) {
                return r(
                  "div",
                  { key: t.key, staticClass: "first-screen__card" },
                  [r("s-introduce-card", { attrs: { card: t, type: t.type } })],
                  1
                );
              }),
              0
            )
          ],
          1
        );
      },
      _ = [],
      m = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r("div", { staticClass: "navbar", class: [t.themeClass] }, [
          r("img", {
            staticClass: "navbar__logo",
            attrs: { src: t.logo, alt: "" }
          }),
          t._m(0)
        ]);
      },
      v = [
        function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("ul", { staticClass: "navbar__list" }, [
            r("li", { staticClass: "navbar__item" }, [t._v("产品与解决方案")]),
            r("li", { staticClass: "navbar__item" }, [t._v("如何购买")]),
            r("li", { staticClass: "navbar__item" }, [t._v("服务支持")]),
            r("li", { staticClass: "navbar__item" }, [t._v("合作发展")]),
            r("li", { staticClass: "navbar__item" }, [t._v("关于我们")]),
            r("li", { staticClass: "navbar__item" }, [t._v("互动社区")]),
            r("li", { staticClass: "navbar__item" }, [t._v("中文")])
          ]);
        }
      ],
      h = {
        props: {
          theme: {
            type: String,
            default: "black",
            validator: function(t) {
              return ["black", "white"].indexOf(t) > -1;
            }
          }
        },
        computed: {
          themeClass: function() {
            return "navbar--" + this.theme;
          },
          logo: function() {
            return "black" === this.theme
              ? "http://download.sangfor.com.cn/Source/default/20181212/home//image/logo1.png"
              : "http://download.sangfor.com.cn/Source/default/20181212/home//image/logo2.png";
          }
        }
      },
      g = h,
      b = (r("5ad8"), Object(i["a"])(g, m, v, !1, null, "a89e64ea", null));
    b.options.__file = "SNavbar.vue";
    var y = b.exports,
      C = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          { staticClass: "intro-card", class: ["intro-card--" + t.type] },
          [
            t.card.icon
              ? r("img", {
                  staticClass: "intro-card__icon",
                  attrs: { src: t.card.icon, alt: "" }
                })
              : t._e(),
            r(
              "div",
              {
                staticClass: "intro-card__top",
                style: { backgroundImage: "url(" + t.card.poster + ")" }
              },
              [
                "simple" === t.type
                  ? [
                      r("div", { staticClass: "intro-card__title" }, [
                        t._v(t._s(t.card.title))
                      ]),
                      r("div", { staticClass: "intro-card__desc" }, [
                        t._v(t._s(t.card.desc))
                      ])
                    ]
                  : t._e()
              ],
              2
            ),
            "rich" === t.type
              ? r("div", { staticClass: "intro-card__bottom" }, [
                  r("div", { staticClass: "intro-card__title" }, [
                    t._v(t._s(t.card.title))
                  ]),
                  r("div", { staticClass: "intro-card__desc" }, [
                    t._v(t._s(t.card.desc))
                  ])
                ])
              : t._e(),
            t._m(0)
          ]
        );
      },
      w = [
        function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "a",
            { staticClass: "intro-card__mask", attrs: { href: "#" } },
            [
              r("div", { staticClass: "intro-card__button" }, [
                t._v("查看详情")
              ])
            ]
          );
        }
      ],
      S = {
        props: {
          type: {
            type: String,
            default: "simple",
            validator: function(t) {
              return ["simple", "rich"].indexOf(t) > -1;
            }
          },
          card: Object
        }
      },
      j = S,
      O = (r("1417"), Object(i["a"])(j, C, w, !1, null, "0f4822f8", null));
    O.options.__file = "SIntroduceCard.vue";
    var k = O.exports,
      x = {
        components: { SNavbar: y, SIntroduceCard: k },
        data: function() {
          return {
            height: 0,
            bgVideo:
              "http://download.sangfor.com.cn/Source/default/20181212/home/bg.mov?t=5a",
            bgPeople:
              "http://download.sangfor.com.cn/Source/default/20181212/home/image/banner-p.png",
            bgSlogan:
              "http://download.sangfor.com.cn/Source/default/20181212/home/image/slogan-12.jpg",
            cardList: [
              {
                key: 1,
                type: "rich",
                poster:
                  "http://download.sangfor.com.cn/Source/default/20181212/home/image/edr.jpg",
                icon: "",
                title: "终端检测响应平台EDR",
                desc: "洞察威胁本质，迅捷灵动处置"
              },
              {
                key: 2,
                type: "simple",
                poster: "",
                icon:
                  "http://download.sangfor.com.cn/Source/default/20181212/home/image/cloud-icon.png",
                title: "深信服云IT成功故事",
                desc: "以业务为中心，关注关键应用上云的过程，让IT云化更简单"
              },
              {
                key: 3,
                type: "simple",
                poster: "",
                icon:
                  "http://download.sangfor.com.cn/Source/default/20181212/home/image/safety-icon.png",
                title: "新型智慧城市解决方案",
                desc:
                  "立体融合、安全服务、智能可视 — 守护新型智慧城市安全稳运行"
              },
              {
                key: 4,
                type: "rich",
                poster:
                  "http://download.sangfor.com.cn/Source/default/20181212/home/image/sis.jpg?t=181225",
                icon: "",
                title: "安全感知平台解决方案",
                desc: "让IT更简单、更安全、更有价值"
              }
            ]
          };
        },
        created: function() {
          this.height = window.innerHeight;
        }
      },
      P = x,
      E = (r("7c0c"), Object(i["a"])(P, f, _, !1, null, "e3fa4f38", null));
    E.options.__file = "SFirstScreen.vue";
    var T = E.exports,
      $ = {
        name: "home",
        components: { SFirstScreen: T },
        mounted: function() {}
      },
      I = $,
      M = Object(i["a"])(I, d, p, !1, null, null, null);
    M.options.__file = "Home.vue";
    var L = M.exports;
    n["a"].use(u["a"]);
    var A = new u["a"]({
      routes: [
        { path: "/", name: "home", component: L },
        {
          path: "/about",
          name: "about",
          component: function() {
            return r.e("about").then(r.bind(null, "f820"));
          }
        }
      ]
    });
    (n["a"].config.productionTip = !1),
      new n["a"]({
        router: A,
        render: function(t) {
          return t(l);
        }
      }).$mount("#app");
  },
  "5ad8": function(t, e, r) {
    "use strict";
    var n = r("b401"),
      a = r.n(n);
    a.a;
  },
  "7c0c": function(t, e, r) {
    "use strict";
    var n = r("5259"),
      a = r.n(n);
    a.a;
  },
  b401: function(t, e, r) {}
});
//# sourceMappingURL=app.63133fb2.js.map
