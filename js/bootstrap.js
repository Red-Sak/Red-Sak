/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) {
  throw new Error("Bootstrap's JavaScript requires jQuery");
}
+(function (d) {
  var c = d.fn.jquery.split(" ")[0].split(".");
  if ((c[0] < 2 && c[1] < 9) || (1 == c[0] && 9 == c[1] && c[2] < 1)) {
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
  }
})(jQuery),
  +(function (d) {
    function c() {
      var b = document.createElement("bootstrap"),
        a = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var e in a) {
        if (void 0 !== b.style[e]) {
          return { end: a[e] };
        }
      }
      return !1;
    }
    (d.fn.emulateTransitionEnd = function (g) {
      var f = !1,
        b = this;
      d(this).one("bsTransitionEnd", function () {
        f = !0;
      });
      var a = function () {
        f || d(b).trigger(d.support.transition.end);
      };
      return setTimeout(a, g), this;
    }),
      d(function () {
        (d.support.transition = c()),
          d.support.transition &&
            (d.event.special.bsTransitionEnd = {
              bindType: d.support.transition.end,
              delegateType: d.support.transition.end,
              handle: function (a) {
                return d(a.target).is(this)
                  ? a.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  +(function (i) {
    function h(a) {
      return this.each(function () {
        var b = i(this),
          c = b.data("bs.alert");
        c || b.data("bs.alert", (c = new f(this))),
          "string" == typeof a && c[a].call(b);
      });
    }
    var g = '[data-dismiss="alert"]',
      f = function (a) {
        i(a).on("click", g, this.close);
      };
    (f.VERSION = "3.3.5"),
      (f.TRANSITION_DURATION = 150),
      (f.prototype.close = function (c) {
        function e() {
          a.detach().trigger("closed.bs.alert").remove();
        }
        var d = i(this),
          b = d.attr("data-target");
        b || ((b = d.attr("href")), (b = b && b.replace(/.*(?=#[^\s]*$)/, "")));
        var a = i(b);
        c && c.preventDefault(),
          a.length || (a = d.closest(".alert")),
          a.trigger((c = i.Event("close.bs.alert"))),
          c.isDefaultPrevented() ||
            (a.removeClass("in"),
            i.support.transition && a.hasClass("fade")
              ? a
                  .one("bsTransitionEnd", e)
                  .emulateTransitionEnd(f.TRANSITION_DURATION)
              : e());
      });
    var j = i.fn.alert;
    (i.fn.alert = h),
      (i.fn.alert.Constructor = f),
      (i.fn.alert.noConflict = function () {
        return (i.fn.alert = j), this;
      }),
      i(document).on("click.bs.alert.data-api", g, f.prototype.close);
  })(jQuery),
  +(function (h) {
    function g(a) {
      return this.each(function () {
        var c = h(this),
          b = c.data("bs.button"),
          d = "object" == typeof a && a;
        b || c.data("bs.button", (b = new f(this, d))),
          "toggle" == a ? b.toggle() : a && b.setState(a);
      });
    }
    var f = function (b, a) {
      (this.$element = h(b)),
        (this.options = h.extend({}, f.DEFAULTS, a)),
        (this.isLoading = !1);
    };
    (f.VERSION = "3.3.5"),
      (f.DEFAULTS = { loadingText: "loading..." }),
      (f.prototype.setState = function (d) {
        var i = "disabled",
          c = this.$element,
          b = c.is("input") ? "val" : "html",
          a = c.data();
        (d += "Text"),
          null == a.resetText && c.data("resetText", c[b]()),
          setTimeout(
            h.proxy(function () {
              c[b](null == a[d] ? this.options[d] : a[d]),
                "loadingText" == d
                  ? ((this.isLoading = !0), c.addClass(i).attr(i, i))
                  : this.isLoading &&
                    ((this.isLoading = !1), c.removeClass(i).removeAttr(i));
            }, this),
            0
          );
      }),
      (f.prototype.toggle = function () {
        var b = !0,
          a = this.$element.closest('[data-toggle="buttons"]');
        if (a.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type")
            ? (c.prop("checked") && (b = !1),
              a.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == c.prop("type") &&
              (c.prop("checked") !== this.$element.hasClass("active") &&
                (b = !1),
              this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            b && c.trigger("change");
        } else {
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
        }
      });
    var e = h.fn.button;
    (h.fn.button = g),
      (h.fn.button.Constructor = f),
      (h.fn.button.noConflict = function () {
        return (h.fn.button = e), this;
      }),
      h(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            var a = h(b.target);
            a.hasClass("btn") || (a = a.closest(".btn")),
              g.call(a, "toggle"),
              h(b.target).is('input[type="radio"]') ||
                h(b.target).is('input[type="checkbox"]') ||
                b.preventDefault();
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (a) {
            h(a.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(a.type));
          }
        );
  })(jQuery),
  +(function (i) {
    function h(a) {
      return this.each(function () {
        var d = i(this),
          c = d.data("bs.carousel"),
          b = i.extend({}, g.DEFAULTS, d.data(), "object" == typeof a && a),
          e = "string" == typeof a ? a : b.slide;
        c || d.data("bs.carousel", (c = new g(this, b))),
          "number" == typeof a
            ? c.to(a)
            : e
            ? c[e]()
            : b.interval && c.pause().cycle();
      });
    }
    var g = function (b, a) {
      (this.$element = i(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = a),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", i.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", i.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", i.proxy(this.cycle, this));
    };
    (g.VERSION = "3.3.5"),
      (g.TRANSITION_DURATION = 600),
      (g.DEFAULTS = { interval: 5000, pause: "hover", wrap: !0, keyboard: !0 }),
      (g.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (g.prototype.cycle = function (a) {
        return (
          a || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              i.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (g.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (g.prototype.getItemForDirection = function (d, c) {
        var b = this.getItemIndex(c),
          a =
            ("prev" == d && 0 === b) ||
            ("next" == d && b == this.$items.length - 1);
        if (a && !this.options.wrap) {
          return c;
        }
        var k = "prev" == d ? -1 : 1,
          e = (b + k) % this.$items.length;
        return this.$items.eq(e);
      }),
      (g.prototype.to = function (b) {
        var a = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return b > this.$items.length - 1 || 0 > b
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              a.to(b);
            })
          : c == b
          ? this.pause().cycle()
          : this.slide(b > c ? "next" : "prev", this.$items.eq(b));
      }),
      (g.prototype.pause = function (a) {
        return (
          a || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            i.support.transition &&
            (this.$element.trigger(i.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (g.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (g.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (g.prototype.slide = function (a, s) {
        var r = this.$element.find(".item.active"),
          q = s || this.getItemForDirection(a, r),
          p = this.interval,
          o = "next" == a ? "left" : "right",
          n = this;
        if (q.hasClass("active")) {
          return (this.sliding = !1);
        }
        var e = q[0],
          d = i.Event("slide.bs.carousel", { relatedTarget: e, direction: o });
        if ((this.$element.trigger(d), !d.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), p && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var c = i(this.$indicators.children()[this.getItemIndex(q)]);
            c && c.addClass("active");
          }
          var b = i.Event("slid.bs.carousel", {
            relatedTarget: e,
            direction: o,
          });
          return (
            i.support.transition && this.$element.hasClass("slide")
              ? (q.addClass(a),
                q[0].offsetWidth,
                r.addClass(o),
                q.addClass(o),
                r
                  .one("bsTransitionEnd", function () {
                    q.removeClass([a, o].join(" ")).addClass("active"),
                      r.removeClass(["active", o].join(" ")),
                      (n.sliding = !1),
                      setTimeout(function () {
                        n.$element.trigger(b);
                      }, 0);
                  })
                  .emulateTransitionEnd(g.TRANSITION_DURATION))
              : (r.removeClass("active"),
                q.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(b)),
            p && this.cycle(),
            this
          );
        }
      });
    var f = i.fn.carousel;
    (i.fn.carousel = h),
      (i.fn.carousel.Constructor = g),
      (i.fn.carousel.noConflict = function () {
        return (i.fn.carousel = f), this;
      });
    var j = function (k) {
      var d,
        b = i(this),
        a = i(
          b.attr("data-target") ||
            ((d = b.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (a.hasClass("carousel")) {
        var e = i.extend({}, a.data(), b.data()),
          c = b.attr("data-slide-to");
        c && (e.interval = !1),
          h.call(a, e),
          c && a.data("bs.carousel").to(c),
          k.preventDefault();
      }
    };
    i(document)
      .on("click.bs.carousel.data-api", "[data-slide]", j)
      .on("click.bs.carousel.data-api", "[data-slide-to]", j),
      i(window).on("load", function () {
        i('[data-ride="carousel"]').each(function () {
          var a = i(this);
          h.call(a, a.data());
        });
      });
  })(jQuery),
  +(function (i) {
    function h(c) {
      var b,
        a =
          c.attr("data-target") ||
          ((b = c.attr("href")) && b.replace(/.*(?=#[^\s]+$)/, ""));
      return i(a);
    }
    function g(a) {
      return this.each(function () {
        var c = i(this),
          b = c.data("bs.collapse"),
          d = i.extend({}, f.DEFAULTS, c.data(), "object" == typeof a && a);
        !b && d.toggle && /show|hide/.test(a) && (d.toggle = !1),
          b || c.data("bs.collapse", (b = new f(this, d))),
          "string" == typeof a && b[a]();
      });
    }
    var f = function (b, a) {
      (this.$element = i(b)),
        (this.options = i.extend({}, f.DEFAULTS, a)),
        (this.$trigger = i(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (f.VERSION = "3.3.5"),
      (f.TRANSITION_DURATION = 350),
      (f.DEFAULTS = { toggle: !0 }),
      (f.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (f.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var c,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((c = e.data("bs.collapse")), c && c.transitioning)
            )
          ) {
            var d = i.Event("show.bs.collapse");
            if ((this.$element.trigger(d), !d.isDefaultPrevented())) {
              e &&
                e.length &&
                (g.call(e, "hide"), c || e.data("bs.collapse", null));
              var b = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [b](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var a = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [b](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!i.support.transition) {
                return a.call(this);
              }
              var k = i.camelCase(["scroll", b].join("-"));
              this.$element
                .one("bsTransitionEnd", i.proxy(a, this))
                .emulateTransitionEnd(f.TRANSITION_DURATION)
                [b](this.$element[0][k]);
            }
          }
        }
      }),
      (f.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var c = i.Event("hide.bs.collapse");
          if ((this.$element.trigger(c), !c.isDefaultPrevented())) {
            var b = this.dimension();
            this.$element[b](this.$element[b]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var a = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return i.support.transition
              ? void this.$element[b](0)
                  .one("bsTransitionEnd", i.proxy(a, this))
                  .emulateTransitionEnd(f.TRANSITION_DURATION)
              : a.call(this);
          }
        }
      }),
      (f.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (f.prototype.getParent = function () {
        return i(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            i.proxy(function (a, c) {
              var b = i(c);
              this.addAriaAndCollapsedClass(h(b), b);
            }, this)
          )
          .end();
      }),
      (f.prototype.addAriaAndCollapsedClass = function (b, a) {
        var c = b.hasClass("in");
        b.attr("aria-expanded", c),
          a.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var j = i.fn.collapse;
    (i.fn.collapse = g),
      (i.fn.collapse.Constructor = f),
      (i.fn.collapse.noConflict = function () {
        return (i.fn.collapse = j), this;
      }),
      i(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (c) {
          var b = i(this);
          b.attr("data-target") || c.preventDefault();
          var a = h(b),
            e = a.data("bs.collapse"),
            d = e ? "toggle" : b.data();
          g.call(a, d);
        }
      );
  })(jQuery),
  +(function (o) {
    function n(c) {
      var b = c.attr("data-target");
      b ||
        ((b = c.attr("href")),
        (b = b && /#[A-Za-z]/.test(b) && b.replace(/.*(?=#[^\s]*$)/, "")));
      var a = b && o(b);
      return a && a.length ? a : c.parent();
    }
    function m(a) {
      (a && 3 === a.which) ||
        (o(k).remove(),
        o(j).each(function () {
          var c = o(this),
            b = n(c),
            d = { relatedTarget: this };
          b.hasClass("open") &&
            ((a &&
              "click" == a.type &&
              /input|textarea/i.test(a.target.tagName) &&
              o.contains(b[0], a.target)) ||
              (b.trigger((a = o.Event("hide.bs.dropdown", d))),
              a.isDefaultPrevented() ||
                (c.attr("aria-expanded", "false"),
                b.removeClass("open").trigger("hidden.bs.dropdown", d))));
        }));
    }
    function l(a) {
      return this.each(function () {
        var b = o(this),
          c = b.data("bs.dropdown");
        c || b.data("bs.dropdown", (c = new i(this))),
          "string" == typeof a && c[a].call(b);
      });
    }
    var k = ".dropdown-backdrop",
      j = '[data-toggle="dropdown"]',
      i = function (a) {
        o(a).on("click.bs.dropdown", this.toggle);
      };
    (i.VERSION = "3.3.5"),
      (i.prototype.toggle = function (c) {
        var b = o(this);
        if (!b.is(".disabled, :disabled")) {
          var a = n(b),
            e = a.hasClass("open");
          if ((m(), !e)) {
            "ontouchstart" in document.documentElement &&
              !a.closest(".navbar-nav").length &&
              o(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(o(this))
                .on("click", m);
            var d = { relatedTarget: this };
            if (
              (a.trigger((c = o.Event("show.bs.dropdown", d))),
              c.isDefaultPrevented())
            ) {
              return;
            }
            b.trigger("focus").attr("aria-expanded", "true"),
              a.toggleClass("open").trigger("shown.bs.dropdown", d);
          }
          return !1;
        }
      }),
      (i.prototype.keydown = function (c) {
        if (
          /(38|40|27|32)/.test(c.which) &&
          !/input|textarea/i.test(c.target.tagName)
        ) {
          var b = o(this);
          if (
            (c.preventDefault(),
            c.stopPropagation(),
            !b.is(".disabled, :disabled"))
          ) {
            var a = n(b),
              f = a.hasClass("open");
            if ((!f && 27 != c.which) || (f && 27 == c.which)) {
              return (
                27 == c.which && a.find(j).trigger("focus"), b.trigger("click")
              );
            }
            var g = " li:not(.disabled):visible a",
              e = a.find(".dropdown-menu" + g);
            if (e.length) {
              var d = e.index(c.target);
              38 == c.which && d > 0 && d--,
                40 == c.which && d < e.length - 1 && d++,
                ~d || (d = 0),
                e.eq(d).trigger("focus");
            }
          }
        }
      });
    var p = o.fn.dropdown;
    (o.fn.dropdown = l),
      (o.fn.dropdown.Constructor = i),
      (o.fn.dropdown.noConflict = function () {
        return (o.fn.dropdown = p), this;
      }),
      o(document)
        .on("click.bs.dropdown.data-api", m)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", j, i.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", j, i.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          i.prototype.keydown
        );
  })(jQuery),
  +(function (h) {
    function g(b, a) {
      return this.each(function () {
        var d = h(this),
          c = d.data("bs.modal"),
          i = h.extend({}, f.DEFAULTS, d.data(), "object" == typeof b && b);
        c || d.data("bs.modal", (c = new f(this, i))),
          "string" == typeof b ? c[b](a) : i.show && c.show(a);
      });
    }
    var f = function (b, a) {
      (this.options = a),
        (this.$body = h(document.body)),
        (this.$element = h(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            h.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (f.VERSION = "3.3.5"),
      (f.TRANSITION_DURATION = 300),
      (f.BACKDROP_TRANSITION_DURATION = 150),
      (f.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (f.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (f.prototype.show = function (c) {
        var b = this,
          a = h.Event("show.bs.modal", { relatedTarget: c });
        this.$element.trigger(a),
          this.isShown ||
            a.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              h.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              b.$element.one("mouseup.dismiss.bs.modal", function (d) {
                h(d.target).is(b.$element) && (b.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var d = h.support.transition && b.$element.hasClass("fade");
              b.$element.parent().length || b.$element.appendTo(b.$body),
                b.$element.show().scrollTop(0),
                b.adjustDialog(),
                d && b.$element[0].offsetWidth,
                b.$element.addClass("in"),
                b.enforceFocus();
              var j = h.Event("shown.bs.modal", { relatedTarget: c });
              d
                ? b.$dialog
                    .one("bsTransitionEnd", function () {
                      b.$element.trigger("focus").trigger(j);
                    })
                    .emulateTransitionEnd(f.TRANSITION_DURATION)
                : b.$element.trigger("focus").trigger(j);
            }));
      }),
      (f.prototype.hide = function (a) {
        a && a.preventDefault(),
          (a = h.Event("hide.bs.modal")),
          this.$element.trigger(a),
          this.isShown &&
            !a.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            h(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            h.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", h.proxy(this.hideModal, this))
                  .emulateTransitionEnd(f.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (f.prototype.enforceFocus = function () {
        h(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            h.proxy(function (a) {
              this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (f.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              h.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (f.prototype.resize = function () {
        this.isShown
          ? h(window).on("resize.bs.modal", h.proxy(this.handleUpdate, this))
          : h(window).off("resize.bs.modal");
      }),
      (f.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (f.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (f.prototype.backdrop = function (i) {
        var d = this,
          c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var b = h.support.transition && c;
          if (
            ((this.$backdrop = h(document.createElement("div"))
              .addClass("modal-backdrop " + c)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              h.proxy(function (j) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      j.target === j.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            b && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !i)
          ) {
            return;
          }
          b
            ? this.$backdrop
                .one("bsTransitionEnd", i)
                .emulateTransitionEnd(f.BACKDROP_TRANSITION_DURATION)
            : i();
        } else {
          if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
              d.removeBackdrop(), i && i();
            };
            h.support.transition && this.$element.hasClass("fade")
              ? this.$backdrop
                  .one("bsTransitionEnd", a)
                  .emulateTransitionEnd(f.BACKDROP_TRANSITION_DURATION)
              : a();
          } else {
            i && i();
          }
        }
      }),
      (f.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (f.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (f.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (f.prototype.checkScrollbar = function () {
        var b = window.innerWidth;
        if (!b) {
          var a = document.documentElement.getBoundingClientRect();
          b = a.right - Math.abs(a.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < b),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (f.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (f.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (f.prototype.measureScrollbar = function () {
        var b = document.createElement("div");
        (b.className = "modal-scrollbar-measure"), this.$body.append(b);
        var a = b.offsetWidth - b.clientWidth;
        return this.$body[0].removeChild(b), a;
      });
    var e = h.fn.modal;
    (h.fn.modal = g),
      (h.fn.modal.Constructor = f),
      (h.fn.modal.noConflict = function () {
        return (h.fn.modal = e), this;
      }),
      h(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var b = h(this),
            a = b.attr("href"),
            i = h(
              b.attr("data-target") || (a && a.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            d = i.data("bs.modal")
              ? "toggle"
              : h.extend({ remote: !/#/.test(a) && a }, i.data(), b.data());
          b.is("a") && c.preventDefault(),
            i.one("show.bs.modal", function (j) {
              j.isDefaultPrevented() ||
                i.one("hidden.bs.modal", function () {
                  b.is(":visible") && b.trigger("focus");
                });
            }),
            g.call(i, d, this);
        }
      );
  })(jQuery),
  +(function (h) {
    function g(a) {
      return this.each(function () {
        var c = h(this),
          b = c.data("bs.tooltip"),
          d = "object" == typeof a && a;
        (b || !/destroy|hide/.test(a)) &&
          (b || c.data("bs.tooltip", (b = new f(this, d))),
          "string" == typeof a && b[a]());
      });
    }
    var f = function (b, a) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", b, a);
    };
    (f.VERSION = "3.3.5"),
      (f.TRANSITION_DURATION = 150),
      (f.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (f.prototype.init = function (j, l, d) {
        if (
          ((this.enabled = !0),
          (this.type = j),
          (this.$element = h(l)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            h(
              h.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        ) {
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        }
        for (var c = this.options.trigger.split(" "), m = c.length; m--; ) {
          var k = c[m];
          if ("click" == k) {
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              h.proxy(this.toggle, this)
            );
          } else {
            if ("manual" != k) {
              var b = "hover" == k ? "mouseenter" : "focusin",
                a = "hover" == k ? "mouseleave" : "focusout";
              this.$element.on(
                b + "." + this.type,
                this.options.selector,
                h.proxy(this.enter, this)
              ),
                this.$element.on(
                  a + "." + this.type,
                  this.options.selector,
                  h.proxy(this.leave, this)
                );
            }
          }
        }
        this.options.selector
          ? (this._options = h.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (f.prototype.getDefaults = function () {
        return f.DEFAULTS;
      }),
      (f.prototype.getOptions = function (a) {
        return (
          (a = h.extend({}, this.getDefaults(), this.$element.data(), a)),
          a.delay &&
            "number" == typeof a.delay &&
            (a.delay = { show: a.delay, hide: a.delay }),
          a
        );
      }),
      (f.prototype.getDelegateOptions = function () {
        var b = {},
          a = this.getDefaults();
        return (
          this._options &&
            h.each(this._options, function (d, c) {
              a[d] != c && (b[d] = c);
            }),
          b
        );
      }),
      (f.prototype.enter = function (b) {
        var a =
          b instanceof this.constructor
            ? b
            : h(b.currentTarget).data("bs." + this.type);
        return (
          a ||
            ((a = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            h(b.currentTarget).data("bs." + this.type, a)),
          b instanceof h.Event &&
            (a.inState["focusin" == b.type ? "focus" : "hover"] = !0),
          a.tip().hasClass("in") || "in" == a.hoverState
            ? void (a.hoverState = "in")
            : (clearTimeout(a.timeout),
              (a.hoverState = "in"),
              a.options.delay && a.options.delay.show
                ? void (a.timeout = setTimeout(function () {
                    "in" == a.hoverState && a.show();
                  }, a.options.delay.show))
                : a.show())
        );
      }),
      (f.prototype.isInStateTrue = function () {
        for (var a in this.inState) {
          if (this.inState[a]) {
            return !0;
          }
        }
        return !1;
      }),
      (f.prototype.leave = function (b) {
        var a =
          b instanceof this.constructor
            ? b
            : h(b.currentTarget).data("bs." + this.type);
        return (
          a ||
            ((a = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            h(b.currentTarget).data("bs." + this.type, a)),
          b instanceof h.Event &&
            (a.inState["focusout" == b.type ? "focus" : "hover"] = !1),
          a.isInStateTrue()
            ? void 0
            : (clearTimeout(a.timeout),
              (a.hoverState = "out"),
              a.options.delay && a.options.delay.hide
                ? void (a.timeout = setTimeout(function () {
                    "out" == a.hoverState && a.hide();
                  }, a.options.delay.hide))
                : a.hide())
        );
      }),
      (f.prototype.show = function () {
        var y = h.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(y);
          var x = h.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (y.isDefaultPrevented() || !x) {
            return;
          }
          var w = this,
            v = this.tip(),
            t = this.getUID(this.type);
          this.setContent(),
            v.attr("id", t),
            this.$element.attr("aria-describedby", t),
            this.options.animation && v.addClass("fade");
          var s =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, v[0], this.$element[0])
                : this.options.placement,
            d = /\s?auto?\s?/i,
            c = d.test(s);
          c && (s = s.replace(d, "") || "top"),
            v
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(s)
              .data("bs." + this.type, this),
            this.options.container
              ? v.appendTo(this.options.container)
              : v.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var b = this.getPosition(),
            a = v[0].offsetWidth,
            B = v[0].offsetHeight;
          if (c) {
            var A = s,
              z = this.getPosition(this.$viewport);
            (s =
              "bottom" == s && b.bottom + B > z.bottom
                ? "top"
                : "top" == s && b.top - B < z.top
                ? "bottom"
                : "right" == s && b.right + a > z.width
                ? "left"
                : "left" == s && b.left - a < z.left
                ? "right"
                : s),
              v.removeClass(A).addClass(s);
          }
          var u = this.getCalculatedOffset(s, b, a, B);
          this.applyPlacement(u, s);
          var r = function () {
            var i = w.hoverState;
            w.$element.trigger("shown.bs." + w.type),
              (w.hoverState = null),
              "out" == i && w.leave(w);
          };
          h.support.transition && this.$tip.hasClass("fade")
            ? v
                .one("bsTransitionEnd", r)
                .emulateTransitionEnd(f.TRANSITION_DURATION)
            : r();
        }
      }),
      (f.prototype.applyPlacement = function (s, r) {
        var p = this.tip(),
          o = p[0].offsetWidth,
          d = p[0].offsetHeight,
          c = parseInt(p.css("margin-top"), 10),
          b = parseInt(p.css("margin-left"), 10);
        isNaN(c) && (c = 0),
          isNaN(b) && (b = 0),
          (s.top += c),
          (s.left += b),
          h.offset.setOffset(
            p[0],
            h.extend(
              {
                using: function (i) {
                  p.css({ top: Math.round(i.top), left: Math.round(i.left) });
                },
              },
              s
            ),
            0
          ),
          p.addClass("in");
        var a = p[0].offsetWidth,
          w = p[0].offsetHeight;
        "top" == r && w != d && (s.top = s.top + d - w);
        var v = this.getViewportAdjustedDelta(r, s, a, w);
        v.left ? (s.left += v.left) : (s.top += v.top);
        var u = /top|bottom/.test(r),
          t = u ? 2 * v.left - o + a : 2 * v.top - d + w,
          q = u ? "offsetWidth" : "offsetHeight";
        p.offset(s), this.replaceArrow(t, p[0][q], u);
      }),
      (f.prototype.replaceArrow = function (b, a, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - b / a) + "%")
          .css(c ? "top" : "left", "");
      }),
      (f.prototype.setContent = function () {
        var b = this.tip(),
          a = this.getTitle();
        b.find(".tooltip-inner")[this.options.html ? "html" : "text"](a),
          b.removeClass("fade in top bottom left right");
      }),
      (f.prototype.hide = function (i) {
        function d() {
          "in" != c.hoverState && b.detach(),
            c.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + c.type),
            i && i();
        }
        var c = this,
          b = h(this.$tip),
          a = h.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(a),
          a.isDefaultPrevented()
            ? void 0
            : (b.removeClass("in"),
              h.support.transition && b.hasClass("fade")
                ? b
                    .one("bsTransitionEnd", d)
                    .emulateTransitionEnd(f.TRANSITION_DURATION)
                : d(),
              (this.hoverState = null),
              this)
        );
      }),
      (f.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (f.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (f.prototype.getPosition = function (b) {
        b = b || this.$element;
        var d = b[0],
          j = "BODY" == d.tagName,
          c = d.getBoundingClientRect();
        null == c.width &&
          (c = h.extend({}, c, {
            width: c.right - c.left,
            height: c.bottom - c.top,
          }));
        var a = j ? { top: 0, left: 0 } : b.offset(),
          k = {
            scroll: j
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          i = j
            ? { width: h(window).width(), height: h(window).height() }
            : null;
        return h.extend({}, c, k, i, a);
      }),
      (f.prototype.getCalculatedOffset = function (b, a, d, c) {
        return "bottom" == b
          ? { top: a.top + a.height, left: a.left + a.width / 2 - d / 2 }
          : "top" == b
          ? { top: a.top - c, left: a.left + a.width / 2 - d / 2 }
          : "left" == b
          ? { top: a.top + a.height / 2 - c / 2, left: a.left - d }
          : { top: a.top + a.height / 2 - c / 2, left: a.left + a.width };
      }),
      (f.prototype.getViewportAdjustedDelta = function (r, q, p, o) {
        var n = { top: 0, left: 0 };
        if (!this.$viewport) {
          return n;
        }
        var m = (this.options.viewport && this.options.viewport.padding) || 0,
          l = this.getPosition(this.$viewport);
        if (/right|left/.test(r)) {
          var d = q.top - m - l.scroll,
            c = q.top + m - l.scroll + o;
          d < l.top
            ? (n.top = l.top - d)
            : c > l.top + l.height && (n.top = l.top + l.height - c);
        } else {
          var b = q.left - m,
            a = q.left + m + p;
          b < l.left
            ? (n.left = l.left - b)
            : a > l.right && (n.left = l.left + l.width - a);
        }
        return n;
      }),
      (f.prototype.getTitle = function () {
        var b,
          a = this.$element,
          c = this.options;
        return (b =
          a.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(a[0]) : c.title));
      }),
      (f.prototype.getUID = function (a) {
        do {
          a += ~~(1000000 * Math.random());
        } while (document.getElementById(a));
        return a;
      }),
      (f.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = h(this.options.template)), 1 != this.$tip.length)
        ) {
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        }
        return this.$tip;
      }),
      (f.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (f.prototype.enable = function () {
        this.enabled = !0;
      }),
      (f.prototype.disable = function () {
        this.enabled = !1;
      }),
      (f.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (f.prototype.toggle = function (b) {
        var a = this;
        b &&
          ((a = h(b.currentTarget).data("bs." + this.type)),
          a ||
            ((a = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            h(b.currentTarget).data("bs." + this.type, a))),
          b
            ? ((a.inState.click = !a.inState.click),
              a.isInStateTrue() ? a.enter(a) : a.leave(a))
            : a.tip().hasClass("in")
            ? a.leave(a)
            : a.enter(a);
      }),
      (f.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type),
              a.$tip && a.$tip.detach(),
              (a.$tip = null),
              (a.$arrow = null),
              (a.$viewport = null);
          });
      });
    var e = h.fn.tooltip;
    (h.fn.tooltip = g),
      (h.fn.tooltip.Constructor = f),
      (h.fn.tooltip.noConflict = function () {
        return (h.fn.tooltip = e), this;
      });
  })(jQuery),
  +(function (h) {
    function g(a) {
      return this.each(function () {
        var c = h(this),
          b = c.data("bs.popover"),
          d = "object" == typeof a && a;
        (b || !/destroy|hide/.test(a)) &&
          (b || c.data("bs.popover", (b = new f(this, d))),
          "string" == typeof a && b[a]());
      });
    }
    var f = function (b, a) {
      this.init("popover", b, a);
    };
    if (!h.fn.tooltip) {
      throw new Error("Popover requires tooltip.js");
    }
    (f.VERSION = "3.3.5"),
      (f.DEFAULTS = h.extend({}, h.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (f.prototype = h.extend({}, h.fn.tooltip.Constructor.prototype)),
      (f.prototype.constructor = f),
      (f.prototype.getDefaults = function () {
        return f.DEFAULTS;
      }),
      (f.prototype.setContent = function () {
        var b = this.tip(),
          a = this.getTitle(),
          c = this.getContent();
        b.find(".popover-title")[this.options.html ? "html" : "text"](a),
          b
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          b.removeClass("fade top bottom left right in"),
          b.find(".popover-title").html() || b.find(".popover-title").hide();
      }),
      (f.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (f.prototype.getContent = function () {
        var b = this.$element,
          a = this.options;
        return (
          b.attr("data-content") ||
          ("function" == typeof a.content ? a.content.call(b[0]) : a.content)
        );
      }),
      (f.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var e = h.fn.popover;
    (h.fn.popover = g),
      (h.fn.popover.Constructor = f),
      (h.fn.popover.noConflict = function () {
        return (h.fn.popover = e), this;
      });
  })(jQuery),
  +(function (h) {
    function g(b, a) {
      (this.$body = h(document.body)),
        (this.$scrollElement = h(h(b).is(document.body) ? window : b)),
        (this.options = h.extend({}, g.DEFAULTS, a)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          h.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function f(a) {
      return this.each(function () {
        var c = h(this),
          b = c.data("bs.scrollspy"),
          d = "object" == typeof a && a;
        b || c.data("bs.scrollspy", (b = new g(this, d))),
          "string" == typeof a && b[a]();
      });
    }
    (g.VERSION = "3.3.5"),
      (g.DEFAULTS = { offset: 10 }),
      (g.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (g.prototype.refresh = function () {
        var c = this,
          b = "offset",
          a = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          h.isWindow(this.$scrollElement[0]) ||
            ((b = "position"), (a = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var d = h(this),
                l = d.data("target") || d.attr("href"),
                k = /^#./.test(l) && h(l);
              return (
                (k && k.length && k.is(":visible") && [[k[b]().top + a, l]]) ||
                null
              );
            })
            .sort(function (j, d) {
              return j[0] - d[0];
            })
            .each(function () {
              c.offsets.push(this[0]), c.targets.push(this[1]);
            });
      }),
      (g.prototype.process = function () {
        var a,
          k = this.$scrollElement.scrollTop() + this.options.offset,
          i = this.getScrollHeight(),
          c = this.options.offset + i - this.$scrollElement.height(),
          j = this.offsets,
          d = this.targets,
          b = this.activeTarget;
        if ((this.scrollHeight != i && this.refresh(), k >= c)) {
          return b != (a = d[d.length - 1]) && this.activate(a);
        }
        if (b && k < j[0]) {
          return (this.activeTarget = null), this.clear();
        }
        for (a = j.length; a--; ) {
          b != d[a] &&
            k >= j[a] &&
            (void 0 === j[a + 1] || k < j[a + 1]) &&
            this.activate(d[a]);
        }
      }),
      (g.prototype.activate = function (c) {
        (this.activeTarget = c), this.clear();
        var b =
            this.selector +
            '[data-target="' +
            c +
            '"],' +
            this.selector +
            '[href="' +
            c +
            '"]',
          a = h(b).parents("li").addClass("active");
        a.parent(".dropdown-menu").length &&
          (a = a.closest("li.dropdown").addClass("active")),
          a.trigger("activate.bs.scrollspy");
      }),
      (g.prototype.clear = function () {
        h(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var e = h.fn.scrollspy;
    (h.fn.scrollspy = f),
      (h.fn.scrollspy.Constructor = g),
      (h.fn.scrollspy.noConflict = function () {
        return (h.fn.scrollspy = e), this;
      }),
      h(window).on("load.bs.scrollspy.data-api", function () {
        h('[data-spy="scroll"]').each(function () {
          var a = h(this);
          f.call(a, a.data());
        });
      });
  })(jQuery),
  +(function (i) {
    function h(a) {
      return this.each(function () {
        var b = i(this),
          c = b.data("bs.tab");
        c || b.data("bs.tab", (c = new g(this))),
          "string" == typeof a && c[a]();
      });
    }
    var g = function (a) {
      this.element = i(a);
    };
    (g.VERSION = "3.3.5"),
      (g.TRANSITION_DURATION = 150),
      (g.prototype.show = function () {
        var c = this.element,
          a = c.closest("ul:not(.dropdown-menu)"),
          l = c.data("target");
        if (
          (l ||
            ((l = c.attr("href")), (l = l && l.replace(/.*(?=#[^\s]*$)/, ""))),
          !c.parent("li").hasClass("active"))
        ) {
          var e = a.find(".active:last a"),
            k = i.Event("hide.bs.tab", { relatedTarget: c[0] }),
            d = i.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(k),
            c.trigger(d),
            !d.isDefaultPrevented() && !k.isDefaultPrevented())
          ) {
            var b = i(l);
            this.activate(c.closest("li"), a),
              this.activate(b, b.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: c[0] }),
                  c.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (g.prototype.activate = function (c, k, e) {
        function d() {
          b
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            c
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            a ? (c[0].offsetWidth, c.addClass("in")) : c.removeClass("fade"),
            c.parent(".dropdown-menu").length &&
              c
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var b = k.find("> .active"),
          a =
            e &&
            i.support.transition &&
            ((b.length && b.hasClass("fade")) || !!k.find("> .fade").length);
        b.length && a
          ? b
              .one("bsTransitionEnd", d)
              .emulateTransitionEnd(g.TRANSITION_DURATION)
          : d(),
          b.removeClass("in");
      });
    var f = i.fn.tab;
    (i.fn.tab = h),
      (i.fn.tab.Constructor = g),
      (i.fn.tab.noConflict = function () {
        return (i.fn.tab = f), this;
      });
    var j = function (a) {
      a.preventDefault(), h.call(i(this), "show");
    };
    i(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', j)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', j);
  })(jQuery),
  +(function (h) {
    function g(a) {
      return this.each(function () {
        var c = h(this),
          b = c.data("bs.affix"),
          d = "object" == typeof a && a;
        b || c.data("bs.affix", (b = new f(this, d))),
          "string" == typeof a && b[a]();
      });
    }
    var f = function (b, a) {
      (this.options = h.extend({}, f.DEFAULTS, a)),
        (this.$target = h(this.options.target)
          .on("scroll.bs.affix.data-api", h.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            h.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = h(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (f.VERSION = "3.3.5"),
      (f.RESET = "affix affix-top affix-bottom"),
      (f.DEFAULTS = { offset: 0, target: window }),
      (f.prototype.getState = function (n, m, l, k) {
        var d = this.$target.scrollTop(),
          c = this.$element.offset(),
          b = this.$target.height();
        if (null != l && "top" == this.affixed) {
          return l > d ? "top" : !1;
        }
        if ("bottom" == this.affixed) {
          return null != l
            ? d + this.unpin <= c.top
              ? !1
              : "bottom"
            : n - k >= d + b
            ? !1
            : "bottom";
        }
        var a = null == this.affixed,
          p = a ? d : c.top,
          o = a ? b : m;
        return null != l && l >= d
          ? "top"
          : null != k && p + o >= n - k
          ? "bottom"
          : !1;
      }),
      (f.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) {
          return this.pinnedOffset;
        }
        this.$element.removeClass(f.RESET).addClass("affix");
        var b = this.$target.scrollTop(),
          a = this.$element.offset();
        return (this.pinnedOffset = a.top - b);
      }),
      (f.prototype.checkPositionWithEventLoop = function () {
        setTimeout(h.proxy(this.checkPosition, this), 1);
      }),
      (f.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var k = this.$element.height(),
            b = this.options.offset,
            a = b.top,
            d = b.bottom,
            n = Math.max(h(document).height(), h(document.body).height());
          "object" != typeof b && (d = a = b),
            "function" == typeof a && (a = b.top(this.$element)),
            "function" == typeof d && (d = b.bottom(this.$element));
          var m = this.getState(n, k, a, d);
          if (this.affixed != m) {
            null != this.unpin && this.$element.css("top", "");
            var c = "affix" + (m ? "-" + m : ""),
              l = h.Event(c + ".bs.affix");
            if ((this.$element.trigger(l), l.isDefaultPrevented())) {
              return;
            }
            (this.affixed = m),
              (this.unpin = "bottom" == m ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(f.RESET)
                .addClass(c)
                .trigger(c.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == m && this.$element.offset({ top: n - k - d });
        }
      });
    var e = h.fn.affix;
    (h.fn.affix = g),
      (h.fn.affix.Constructor = f),
      (h.fn.affix.noConflict = function () {
        return (h.fn.affix = e), this;
      }),
      h(window).on("load", function () {
        h('[data-spy="affix"]').each(function () {
          var b = h(this),
            a = b.data();
          (a.offset = a.offset || {}),
            null != a.offsetBottom && (a.offset.bottom = a.offsetBottom),
            null != a.offsetTop && (a.offset.top = a.offsetTop),
            g.call(b, a);
        });
      });
  })(jQuery);
