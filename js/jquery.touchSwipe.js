/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!(function (a) {
  "function" == typeof define && define.amd && define.amd.jQuery
    ? define(["jquery"], a)
    : a(
        "undefined" != typeof module && module.exports
          ? require("jquery")
          : jQuery
      );
})(function (f) {
  function w(E) {
    return (
      !E ||
        void 0 !== E.allowPageScroll ||
        (void 0 === E.swipe && void 0 === E.swipeStatus) ||
        (E.allowPageScroll = m),
      void 0 !== E.click && void 0 === E.tap && (E.tap = E.click),
      E || (E = {}),
      (E = f.extend({}, f.fn.swipe.defaults, E)),
      this.each(function () {
        var G = f(this),
          F = G.data(B);
        F || ((F = new D(this, E)), G.data(B, F));
      })
    );
  }
  function D(a5, at) {
    function aK(be) {
      if (!(aA() || f(be.target).closest(at.excludedElements, aQ).length > 0)) {
        var bf = be.originalEvent ? be.originalEvent : be;
        if (
          !bf.pointerType ||
          "mouse" != bf.pointerType ||
          0 != at.fallbackToMouseEvents
        ) {
          var bd,
            bg = bf.touches,
            bc = bg ? bg[0] : bf;
          return (
            (Z = g),
            bg
              ? (W = bg.length)
              : at.preventDefaultEvents !== !1 && be.preventDefault(),
            (af = 0),
            (aO = null),
            (a2 = null),
            (aI = null),
            (ab = 0),
            (a1 = 0),
            (aZ = 0),
            (G = 1),
            (ao = 0),
            (M = aa()),
            R(),
            ah(0, bc),
            !bg || W === at.fingers || at.fingers === i || aX()
              ? ((T = aq()),
                2 == W &&
                  (ah(1, bg[1]), (a1 = aZ = ar(aP[0].start, aP[1].start))),
                (at.swipeStatus || at.pinchStatus) && (bd = O(bf, Z)))
              : (bd = !1),
            bd === !1
              ? ((Z = q), O(bf, Z), bd)
              : (at.hold &&
                  (ae = setTimeout(
                    f.proxy(function () {
                      aQ.trigger("hold", [bf.target]),
                        at.hold && (bd = at.hold.call(aQ, bf, bf.target));
                    }, this),
                    at.longTapThreshold
                  )),
                am(!0),
                null)
          );
        }
      }
    }
    function a4(bf) {
      var bi = bf.originalEvent ? bf.originalEvent : bf;
      if (Z !== h && Z !== q && !ak()) {
        var be,
          bj = bi.touches,
          bd = bj ? bj[0] : bi,
          bg = aG(bd);
        if (
          ((a3 = aq()),
          bj && (W = bj.length),
          at.hold && clearTimeout(ae),
          (Z = k),
          2 == W &&
            (0 == a1
              ? (ah(1, bj[1]), (a1 = aZ = ar(aP[0].start, aP[1].start)))
              : (aG(bj[1]),
                (aZ = ar(aP[0].end, aP[1].end)),
                (aI = ap(aP[0].end, aP[1].end))),
            (G = ba(a1, aZ)),
            (ao = Math.abs(a1 - aZ))),
          W === at.fingers || at.fingers === i || !bj || aX())
        ) {
          if (
            ((aO = aL(bg.start, bg.end)),
            (a2 = aL(bg.last, bg.end)),
            aj(bf, a2),
            (af = aR(bg.start, bg.end)),
            (ab = aM()),
            aH(aO, af),
            (be = O(bi, Z)),
            !at.triggerOnTouchEnd || at.triggerOnTouchLeave)
          ) {
            var bc = !0;
            if (at.triggerOnTouchLeave) {
              var bh = aY(this);
              bc = E(bg.end, bh);
            }
            !at.triggerOnTouchEnd && bc
              ? (Z = aB(k))
              : at.triggerOnTouchLeave && !bc && (Z = aB(h)),
              (Z != q && Z != h) || O(bi, Z);
          }
        } else {
          (Z = q), O(bi, Z);
        }
        be === !1 && ((Z = q), O(bi, Z));
      }
    }
    function L(bc) {
      var bd = bc.originalEvent ? bc.originalEvent : bc,
        be = bd.touches;
      if (be) {
        if (be.length && !ak()) {
          return F(bd), !0;
        }
        if (be.length && ak()) {
          return !0;
        }
      }
      return (
        ak() && (W = ax),
        (a3 = aq()),
        (ab = aM()),
        bb() || !al()
          ? ((Z = q), O(bd, Z))
          : at.triggerOnTouchEnd || (at.triggerOnTouchEnd === !1 && Z === k)
          ? (at.preventDefaultEvents !== !1 &&
              bc.cancelable !== !1 &&
              bc.preventDefault(),
            (Z = h),
            O(bd, Z))
          : !at.triggerOnTouchEnd && a7()
          ? ((Z = h), aD(bd, Z, A))
          : Z === k && ((Z = q), O(bd, Z)),
        am(!1),
        null
      );
    }
    function a9() {
      (W = 0), (a3 = 0), (T = 0), (a1 = 0), (aZ = 0), (G = 1), R(), am(!1);
    }
    function K(bc) {
      var bd = bc.originalEvent ? bc.originalEvent : bc;
      at.triggerOnTouchLeave && ((Z = aB(h)), O(bd, Z));
    }
    function aJ() {
      aQ.unbind(J, aK),
        aQ.unbind(aC, a9),
        aQ.unbind(aw, a4),
        aQ.unbind(U, L),
        S && aQ.unbind(S, K),
        am(!1);
    }
    function aB(bg) {
      var bf = bg,
        be = az(),
        bd = al(),
        bc = bb();
      return (
        !be || bc
          ? (bf = q)
          : !bd || bg != k || (at.triggerOnTouchEnd && !at.triggerOnTouchLeave)
          ? !bd && bg == h && at.triggerOnTouchLeave && (bf = q)
          : (bf = h),
        bf
      );
    }
    function O(be, bc) {
      var bd,
        bf = be.touches;
      return (
        (I() || V()) && (bd = aD(be, bc, l)),
        (P() || aX()) && bd !== !1 && (bd = aD(be, bc, t)),
        aE() && bd !== !1
          ? (bd = aD(be, bc, j))
          : an() && bd !== !1
          ? (bd = aD(be, bc, b))
          : ag() && bd !== !1 && (bd = aD(be, bc, A)),
        bc === q && a9(be),
        bc === h && (bf ? bf.length || a9(be) : a9(be)),
        bd
      );
    }
    function aD(bf, bc, be) {
      var bd;
      if (be == l) {
        if (
          (aQ.trigger("swipeStatus", [
            bc,
            aO || null,
            af || 0,
            ab || 0,
            W,
            aP,
            a2,
          ]),
          at.swipeStatus &&
            ((bd = at.swipeStatus.call(
              aQ,
              bf,
              bc,
              aO || null,
              af || 0,
              ab || 0,
              W,
              aP,
              a2
            )),
            bd === !1))
        ) {
          return !1;
        }
        if (bc == h && aW()) {
          if (
            (clearTimeout(aV),
            clearTimeout(ae),
            aQ.trigger("swipe", [aO, af, ab, W, aP, a2]),
            at.swipe &&
              ((bd = at.swipe.call(aQ, bf, aO, af, ab, W, aP, a2)), bd === !1))
          ) {
            return !1;
          }
          switch (aO) {
            case p:
              aQ.trigger("swipeLeft", [aO, af, ab, W, aP, a2]),
                at.swipeLeft &&
                  (bd = at.swipeLeft.call(aQ, bf, aO, af, ab, W, aP, a2));
              break;
            case o:
              aQ.trigger("swipeRight", [aO, af, ab, W, aP, a2]),
                at.swipeRight &&
                  (bd = at.swipeRight.call(aQ, bf, aO, af, ab, W, aP, a2));
              break;
            case e:
              aQ.trigger("swipeUp", [aO, af, ab, W, aP, a2]),
                at.swipeUp &&
                  (bd = at.swipeUp.call(aQ, bf, aO, af, ab, W, aP, a2));
              break;
            case x:
              aQ.trigger("swipeDown", [aO, af, ab, W, aP, a2]),
                at.swipeDown &&
                  (bd = at.swipeDown.call(aQ, bf, aO, af, ab, W, aP, a2));
          }
        }
      }
      if (be == t) {
        if (
          (aQ.trigger("pinchStatus", [
            bc,
            aI || null,
            ao || 0,
            ab || 0,
            W,
            G,
            aP,
          ]),
          at.pinchStatus &&
            ((bd = at.pinchStatus.call(
              aQ,
              bf,
              bc,
              aI || null,
              ao || 0,
              ab || 0,
              W,
              G,
              aP
            )),
            bd === !1))
        ) {
          return !1;
        }
        if (bc == h && a8()) {
          switch (aI) {
            case c:
              aQ.trigger("pinchIn", [aI || null, ao || 0, ab || 0, W, G, aP]),
                at.pinchIn &&
                  (bd = at.pinchIn.call(
                    aQ,
                    bf,
                    aI || null,
                    ao || 0,
                    ab || 0,
                    W,
                    G,
                    aP
                  ));
              break;
            case z:
              aQ.trigger("pinchOut", [aI || null, ao || 0, ab || 0, W, G, aP]),
                at.pinchOut &&
                  (bd = at.pinchOut.call(
                    aQ,
                    bf,
                    aI || null,
                    ao || 0,
                    ab || 0,
                    W,
                    G,
                    aP
                  ));
          }
        }
      }
      return (
        be == A
          ? (bc !== q && bc !== h) ||
            (clearTimeout(aV),
            clearTimeout(ae),
            Y() && !H()
              ? ((N = aq()),
                (aV = setTimeout(
                  f.proxy(function () {
                    (N = null),
                      aQ.trigger("tap", [bf.target]),
                      at.tap && (bd = at.tap.call(aQ, bf, bf.target));
                  }, this),
                  at.doubleTapThreshold
                )))
              : ((N = null),
                aQ.trigger("tap", [bf.target]),
                at.tap && (bd = at.tap.call(aQ, bf, bf.target))))
          : be == j
          ? (bc !== q && bc !== h) ||
            (clearTimeout(aV),
            clearTimeout(ae),
            (N = null),
            aQ.trigger("doubletap", [bf.target]),
            at.doubleTap && (bd = at.doubleTap.call(aQ, bf, bf.target)))
          : be == b &&
            ((bc !== q && bc !== h) ||
              (clearTimeout(aV),
              (N = null),
              aQ.trigger("longtap", [bf.target]),
              at.longTap && (bd = at.longTap.call(aQ, bf, bf.target)))),
        bd
      );
    }
    function al() {
      var bc = !0;
      return null !== at.threshold && (bc = af >= at.threshold), bc;
    }
    function bb() {
      var bc = !1;
      return (
        null !== at.cancelThreshold &&
          null !== aO &&
          (bc = aS(aO) - af >= at.cancelThreshold),
        bc
      );
    }
    function ad() {
      return null === at.pinchThreshold || ao >= at.pinchThreshold;
    }
    function az() {
      var bc;
      return (bc = !at.maxTimeThreshold || !(ab >= at.maxTimeThreshold));
    }
    function aj(bc, bd) {
      if (at.preventDefaultEvents !== !1) {
        if (at.allowPageScroll === m) {
          bc.preventDefault();
        } else {
          var be = at.allowPageScroll === s;
          switch (bd) {
            case p:
              ((at.swipeLeft && be) || (!be && at.allowPageScroll != C)) &&
                bc.preventDefault();
              break;
            case o:
              ((at.swipeRight && be) || (!be && at.allowPageScroll != C)) &&
                bc.preventDefault();
              break;
            case e:
              ((at.swipeUp && be) || (!be && at.allowPageScroll != u)) &&
                bc.preventDefault();
              break;
            case x:
              ((at.swipeDown && be) || (!be && at.allowPageScroll != u)) &&
                bc.preventDefault();
              break;
            case m:
          }
        }
      }
    }
    function a8() {
      var bd = aN(),
        bc = X(),
        be = ad();
      return bd && bc && be;
    }
    function aX() {
      return !!(at.pinchStatus || at.pinchIn || at.pinchOut);
    }
    function P() {
      return !(!a8() || !aX());
    }
    function aW() {
      var bf = az(),
        bh = al(),
        be = aN(),
        bc = X(),
        bd = bb(),
        bg = !bd && bc && be && bh && bf;
      return bg;
    }
    function V() {
      return !!(
        at.swipe ||
        at.swipeStatus ||
        at.swipeLeft ||
        at.swipeRight ||
        at.swipeUp ||
        at.swipeDown
      );
    }
    function I() {
      return !(!aW() || !V());
    }
    function aN() {
      return W === at.fingers || at.fingers === i || !a;
    }
    function X() {
      return 0 !== aP[0].end.x;
    }
    function a7() {
      return !!at.tap;
    }
    function Y() {
      return !!at.doubleTap;
    }
    function aU() {
      return !!at.longTap;
    }
    function Q() {
      if (null == N) {
        return !1;
      }
      var bc = aq();
      return Y() && bc - N <= at.doubleTapThreshold;
    }
    function H() {
      return Q();
    }
    function av() {
      return (1 === W || !a) && (isNaN(af) || af < at.threshold);
    }
    function a0() {
      return ab > at.longTapThreshold && af < r;
    }
    function ag() {
      return !(!av() || !a7());
    }
    function aE() {
      return !(!Q() || !Y());
    }
    function an() {
      return !(!a0() || !aU());
    }
    function F(bc) {
      (a6 = aq()), (ax = bc.touches.length + 1);
    }
    function R() {
      (a6 = 0), (ax = 0);
    }
    function ak() {
      var bc = !1;
      if (a6) {
        var bd = aq() - a6;
        bd <= at.fingerReleaseThreshold && (bc = !0);
      }
      return bc;
    }
    function aA() {
      return !(aQ.data(B + "_intouch") !== !0);
    }
    function am(bc) {
      aQ &&
        (bc === !0
          ? (aQ.bind(aw, a4), aQ.bind(U, L), S && aQ.bind(S, K))
          : (aQ.unbind(aw, a4, !1),
            aQ.unbind(U, L, !1),
            S && aQ.unbind(S, K, !1)),
        aQ.data(B + "_intouch", bc === !0));
    }
    function ah(be, bc) {
      var bd = {
        start: { x: 0, y: 0 },
        last: { x: 0, y: 0 },
        end: { x: 0, y: 0 },
      };
      return (
        (bd.start.x = bd.last.x = bd.end.x = bc.pageX || bc.clientX),
        (bd.start.y = bd.last.y = bd.end.y = bc.pageY || bc.clientY),
        (aP[be] = bd),
        bd
      );
    }
    function aG(bc) {
      var be = void 0 !== bc.identifier ? bc.identifier : 0,
        bd = ac(be);
      return (
        null === bd && (bd = ah(be, bc)),
        (bd.last.x = bd.end.x),
        (bd.last.y = bd.end.y),
        (bd.end.x = bc.pageX || bc.clientX),
        (bd.end.y = bc.pageY || bc.clientY),
        bd
      );
    }
    function ac(bc) {
      return aP[bc] || null;
    }
    function aH(bc, bd) {
      bc != m && ((bd = Math.max(bd, aS(bc))), (M[bc].distance = bd));
    }
    function aS(bc) {
      if (M[bc]) {
        return M[bc].distance;
      }
    }
    function aa() {
      var bc = {};
      return (
        (bc[p] = au(p)), (bc[o] = au(o)), (bc[e] = au(e)), (bc[x] = au(x)), bc
      );
    }
    function au(bc) {
      return { direction: bc, distance: 0 };
    }
    function aM() {
      return a3 - T;
    }
    function ar(bf, be) {
      var bd = Math.abs(bf.x - be.x),
        bc = Math.abs(bf.y - be.y);
      return Math.round(Math.sqrt(bd * bd + bc * bc));
    }
    function ba(bc, bd) {
      var be = (bd / bc) * 1;
      return be.toFixed(2);
    }
    function ap() {
      return G < 1 ? z : c;
    }
    function aR(bd, bc) {
      return Math.round(
        Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2))
      );
    }
    function aF(bf, bd) {
      var bc = bf.x - bd.x,
        bh = bd.y - bf.y,
        be = Math.atan2(bh, bc),
        bg = Math.round((180 * be) / Math.PI);
      return bg < 0 && (bg = 360 - Math.abs(bg)), bg;
    }
    function aL(bd, bc) {
      if (aT(bd, bc)) {
        return m;
      }
      var be = aF(bd, bc);
      return be <= 45 && be >= 0
        ? p
        : be <= 360 && be >= 315
        ? p
        : be >= 135 && be <= 225
        ? o
        : be > 45 && be < 135
        ? x
        : e;
    }
    function aq() {
      var bc = new Date();
      return bc.getTime();
    }
    function aY(bc) {
      bc = f(bc);
      var be = bc.offset(),
        bd = {
          left: be.left,
          right: be.left + bc.outerWidth(),
          top: be.top,
          bottom: be.top + bc.outerHeight(),
        };
      return bd;
    }
    function E(bc, bd) {
      return (
        bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom
      );
    }
    function aT(bc, bd) {
      return bc.x == bd.x && bc.y == bd.y;
    }
    var at = f.extend({}, at),
      ay = a || d || !at.fallbackToMouseEvents,
      J = ay
        ? d
          ? v
            ? "MSPointerDown"
            : "pointerdown"
          : "touchstart"
        : "mousedown",
      aw = ay
        ? d
          ? v
            ? "MSPointerMove"
            : "pointermove"
          : "touchmove"
        : "mousemove",
      U = ay ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
      S = ay ? (d ? "mouseleave" : null) : "mouseleave",
      aC = d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel",
      af = 0,
      aO = null,
      a2 = null,
      ab = 0,
      a1 = 0,
      aZ = 0,
      G = 1,
      ao = 0,
      aI = 0,
      M = null,
      aQ = f(a5),
      Z = "start",
      W = 0,
      aP = {},
      T = 0,
      a3 = 0,
      a6 = 0,
      ax = 0,
      N = 0,
      aV = null,
      ae = null;
    try {
      aQ.bind(J, aK), aQ.bind(aC, a9);
    } catch (ai) {
      f.error("events not supported " + J + "," + aC + " on jQuery.swipe");
    }
    (this.enable = function () {
      return this.disable(), aQ.bind(J, aK), aQ.bind(aC, a9), aQ;
    }),
      (this.disable = function () {
        return aJ(), aQ;
      }),
      (this.destroy = function () {
        aJ(), aQ.data(B, null), (aQ = null);
      }),
      (this.option = function (bd, bc) {
        if ("object" == typeof bd) {
          at = f.extend(at, bd);
        } else {
          if (void 0 !== at[bd]) {
            if (void 0 === bc) {
              return at[bd];
            }
            at[bd] = bc;
          } else {
            if (!bd) {
              return at;
            }
            f.error("Option " + bd + " does not exist on jQuery.swipe.options");
          }
        }
        return null;
      });
  }
  var y = "1.6.18",
    p = "left",
    o = "right",
    e = "up",
    x = "down",
    c = "in",
    z = "out",
    m = "none",
    s = "auto",
    l = "swipe",
    t = "pinch",
    A = "tap",
    j = "doubletap",
    b = "longtap",
    C = "horizontal",
    u = "vertical",
    i = "all",
    r = 10,
    g = "start",
    k = "move",
    h = "end",
    q = "cancel",
    a = "ontouchstart" in window,
    v =
      window.navigator.msPointerEnabled &&
      !window.navigator.pointerEnabled &&
      !a,
    d =
      (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) &&
      !a,
    B = "TouchSwipe",
    n = {
      fingers: 1,
      threshold: 75,
      cancelThreshold: null,
      pinchThreshold: 20,
      maxTimeThreshold: null,
      fingerReleaseThreshold: 250,
      longTapThreshold: 500,
      doubleTapThreshold: 200,
      swipe: null,
      swipeLeft: null,
      swipeRight: null,
      swipeUp: null,
      swipeDown: null,
      swipeStatus: null,
      pinchIn: null,
      pinchOut: null,
      pinchStatus: null,
      click: null,
      tap: null,
      doubleTap: null,
      longTap: null,
      hold: null,
      triggerOnTouchEnd: !0,
      triggerOnTouchLeave: !1,
      allowPageScroll: "auto",
      fallbackToMouseEvents: !0,
      excludedElements: ".noSwipe",
      preventDefaultEvents: !0,
    };
  (f.fn.swipe = function (G) {
    var F = f(this),
      E = F.data(B);
    if (E && "string" == typeof G) {
      if (E[G]) {
        return E[G].apply(E, Array.prototype.slice.call(arguments, 1));
      }
      f.error("Method " + G + " does not exist on jQuery.swipe");
    } else {
      if (E && "object" == typeof G) {
        E.option.apply(E, arguments);
      } else {
        if (!(E || ("object" != typeof G && G))) {
          return w.apply(this, arguments);
        }
      }
    }
    return F;
  }),
    (f.fn.swipe.version = y),
    (f.fn.swipe.defaults = n),
    (f.fn.swipe.phases = {
      PHASE_START: g,
      PHASE_MOVE: k,
      PHASE_END: h,
      PHASE_CANCEL: q,
    }),
    (f.fn.swipe.directions = {
      LEFT: p,
      RIGHT: o,
      UP: e,
      DOWN: x,
      IN: c,
      OUT: z,
    }),
    (f.fn.swipe.pageScroll = { NONE: m, HORIZONTAL: C, VERTICAL: u, AUTO: s }),
    (f.fn.swipe.fingers = {
      ONE: 1,
      TWO: 2,
      THREE: 3,
      FOUR: 4,
      FIVE: 5,
      ALL: i,
    });
});
