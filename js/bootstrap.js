/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) {
  throw new Error("Bootstrap's JavaScript requires jQuery");
}
+(function (a) {
  var b = a.fn.jquery.split(" ")[0].split(".");
  if ((b[0] < 2 && b[1] < 9) || (1 == b[0] && 9 == b[1] && b[2] < 1)) {
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
  }
})(jQuery),
  +(function (a) {
    function b() {
      var d = document.createElement("bootstrap"),
        h = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in h) {
        if (void 0 !== d.style[c]) {
          return { end: h[c] };
        }
      }
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (c) {
      var d = !1,
        e = this;
      a(this).one("bsTransitionEnd", function () {
        d = !0;
      });
      var i = function () {
        d || a(e).trigger(a.support.transition.end);
      };
      return setTimeout(i, c), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (c) {
                return a(c.target).is(this)
                  ? c.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  +(function (d) {
    function e(f) {
      return this.each(function () {
        var h = d(this),
          g = h.data("bs.alert");
        g || h.data("bs.alert", (g = new b(this))),
          "string" == typeof f && g[f].call(h);
      });
    }
    var a = '[data-dismiss="alert"]',
      b = function (f) {
        d(f).on("click", a, this.close);
      };
    (b.VERSION = "3.3.5"),
      (b.TRANSITION_DURATION = 150),
      (b.prototype.close = function (h) {
        function f() {
          j.detach().trigger("closed.bs.alert").remove();
        }
        var g = d(this),
          i = g.attr("data-target");
        i || ((i = g.attr("href")), (i = i && i.replace(/.*(?=#[^\s]*$)/, "")));
        var j = d(i);
        h && h.preventDefault(),
          j.length || (j = g.closest(".alert")),
          j.trigger((h = d.Event("close.bs.alert"))),
          h.isDefaultPrevented() ||
            (j.removeClass("in"),
            d.support.transition && j.hasClass("fade")
              ? j
                  .one("bsTransitionEnd", f)
                  .emulateTransitionEnd(b.TRANSITION_DURATION)
              : f());
      });
    var c = d.fn.alert;
    (d.fn.alert = e),
      (d.fn.alert.Constructor = b),
      (d.fn.alert.noConflict = function () {
        return (d.fn.alert = c), this;
      }),
      d(document).on("click.bs.alert.data-api", a, b.prototype.close);
  })(jQuery),
  +(function (c) {
    function d(e) {
      return this.each(function () {
        var g = c(this),
          h = g.data("bs.button"),
          f = "object" == typeof e && e;
        h || g.data("bs.button", (h = new a(this, f))),
          "toggle" == e ? h.toggle() : e && h.setState(e);
      });
    }
    var a = function (e, f) {
      (this.$element = c(e)),
        (this.options = c.extend({}, a.DEFAULTS, f)),
        (this.isLoading = !1);
    };
    (a.VERSION = "3.3.5"),
      (a.DEFAULTS = { loadingText: "loading..." }),
      (a.prototype.setState = function (f) {
        var e = "disabled",
          g = this.$element,
          h = g.is("input") ? "val" : "html",
          m = g.data();
        (f += "Text"),
          null == m.resetText && g.data("resetText", g[h]()),
          setTimeout(
            c.proxy(function () {
              g[h](null == m[f] ? this.options[f] : m[f]),
                "loadingText" == f
                  ? ((this.isLoading = !0), g.addClass(e).attr(e, e))
                  : this.isLoading &&
                    ((this.isLoading = !1), g.removeClass(e).removeAttr(e));
            }, this),
            0
          );
      }),
      (a.prototype.toggle = function () {
        var f = !0,
          g = this.$element.closest('[data-toggle="buttons"]');
        if (g.length) {
          var e = this.$element.find("input");
          "radio" == e.prop("type")
            ? (e.prop("checked") && (f = !1),
              g.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == e.prop("type") &&
              (e.prop("checked") !== this.$element.hasClass("active") &&
                (f = !1),
              this.$element.toggleClass("active")),
            e.prop("checked", this.$element.hasClass("active")),
            f && e.trigger("change");
        } else {
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
        }
      });
    var b = c.fn.button;
    (c.fn.button = d),
      (c.fn.button.Constructor = a),
      (c.fn.button.noConflict = function () {
        return (c.fn.button = b), this;
      }),
      c(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (e) {
            var f = c(e.target);
            f.hasClass("btn") || (f = f.closest(".btn")),
              d.call(f, "toggle"),
              c(e.target).is('input[type="radio"]') ||
                c(e.target).is('input[type="checkbox"]') ||
                e.preventDefault();
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (e) {
            c(e.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(e.type));
          }
        );
  })(jQuery),
  +(function (d) {
    function e(f) {
      return this.each(function () {
        var h = d(this),
          i = h.data("bs.carousel"),
          j = d.extend({}, a.DEFAULTS, h.data(), "object" == typeof f && f),
          g = "string" == typeof f ? f : j.slide;
        i || h.data("bs.carousel", (i = new a(this, j))),
          "number" == typeof f
            ? i.to(f)
            : g
            ? i[g]()
            : j.interval && i.pause().cycle();
      });
    }
    var a = function (f, g) {
      (this.$element = d(f)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = g),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", d.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", d.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", d.proxy(this.cycle, this));
    };
    (a.VERSION = "3.3.5"),
      (a.TRANSITION_DURATION = 600),
      (a.DEFAULTS = { interval: 5000, pause: "hover", wrap: !0, keyboard: !0 }),
      (a.prototype.keydown = function (f) {
        if (!/input|textarea/i.test(f.target.tagName)) {
          switch (f.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          f.preventDefault();
        }
      }),
      (a.prototype.cycle = function (f) {
        return (
          f || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              d.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (a.prototype.getItemIndex = function (f) {
        return (
          (this.$items = f.parent().children(".item")),
          this.$items.index(f || this.$active)
        );
      }),
      (a.prototype.getItemForDirection = function (g, h) {
        var i = this.getItemIndex(h),
          j =
            ("prev" == g && 0 === i) ||
            ("next" == g && i == this.$items.length - 1);
        if (j && !this.options.wrap) {
          return h;
        }
        var q = "prev" == g ? -1 : 1,
          f = (i + q) % this.$items.length;
        return this.$items.eq(f);
      }),
      (a.prototype.to = function (g) {
        var h = this,
          f = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return g > this.$items.length - 1 || 0 > g
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              h.to(g);
            })
          : f == g
          ? this.pause().cycle()
          : this.slide(g > f ? "next" : "prev", this.$items.eq(g));
      }),
      (a.prototype.pause = function (f) {
        return (
          f || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            d.support.transition &&
            (this.$element.trigger(d.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (a.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (a.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (a.prototype.slide = function (m, w) {
        var x = this.$element.find(".item.active"),
          y = w || this.getItemForDirection(m, x),
          f = this.interval,
          g = "next" == m ? "left" : "right",
          h = this;
        if (y.hasClass("active")) {
          return (this.sliding = !1);
        }
        var i = y[0],
          j = d.Event("slide.bs.carousel", { relatedTarget: i, direction: g });
        if ((this.$element.trigger(j), !j.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), f && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var k = d(this.$indicators.children()[this.getItemIndex(y)]);
            k && k.addClass("active");
          }
          var l = d.Event("slid.bs.carousel", {
            relatedTarget: i,
            direction: g,
          });
          return (
            d.support.transition && this.$element.hasClass("slide")
              ? (y.addClass(m),
                y[0].offsetWidth,
                x.addClass(g),
                y.addClass(g),
                x
                  .one("bsTransitionEnd", function () {
                    y.removeClass([m, g].join(" ")).addClass("active"),
                      x.removeClass(["active", g].join(" ")),
                      (h.sliding = !1),
                      setTimeout(function () {
                        h.$element.trigger(l);
                      }, 0);
                  })
                  .emulateTransitionEnd(a.TRANSITION_DURATION))
              : (x.removeClass("active"),
                y.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(l)),
            f && this.cycle(),
            this
          );
        }
      });
    var b = d.fn.carousel;
    (d.fn.carousel = e),
      (d.fn.carousel.Constructor = a),
      (d.fn.carousel.noConflict = function () {
        return (d.fn.carousel = b), this;
      });
    var c = function (o) {
      var g,
        i = d(this),
        j = d(
          i.attr("data-target") ||
            ((g = i.attr("href")) && g.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (j.hasClass("carousel")) {
        var f = d.extend({}, j.data(), i.data()),
          h = i.attr("data-slide-to");
        h && (f.interval = !1),
          e.call(j, f),
          h && j.data("bs.carousel").to(h),
          o.preventDefault();
      }
    };
    d(document)
      .on("click.bs.carousel.data-api", "[data-slide]", c)
      .on("click.bs.carousel.data-api", "[data-slide-to]", c),
      d(window).on("load", function () {
        d('[data-ride="carousel"]').each(function () {
          var f = d(this);
          e.call(f, f.data());
        });
      });
  })(jQuery),
  +(function (d) {
    function e(f) {
      var g,
        h =
          f.attr("data-target") ||
          ((g = f.attr("href")) && g.replace(/.*(?=#[^\s]+$)/, ""));
      return d(h);
    }
    function a(f) {
      return this.each(function () {
        var h = d(this),
          i = h.data("bs.collapse"),
          g = d.extend({}, b.DEFAULTS, h.data(), "object" == typeof f && f);
        !i && g.toggle && /show|hide/.test(f) && (g.toggle = !1),
          i || h.data("bs.collapse", (i = new b(this, g))),
          "string" == typeof f && i[f]();
      });
    }
    var b = function (f, g) {
      (this.$element = d(f)),
        (this.options = d.extend({}, b.DEFAULTS, g)),
        (this.$trigger = d(
          '[data-toggle="collapse"][href="#' +
            f.id +
            '"],[data-toggle="collapse"][data-target="#' +
            f.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (b.VERSION = "3.3.5"),
      (b.TRANSITION_DURATION = 350),
      (b.DEFAULTS = { toggle: !0 }),
      (b.prototype.dimension = function () {
        var f = this.$element.hasClass("width");
        return f ? "width" : "height";
      }),
      (b.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var h,
            f =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              f &&
              f.length &&
              ((h = f.data("bs.collapse")), h && h.transitioning)
            )
          ) {
            var g = d.Event("show.bs.collapse");
            if ((this.$element.trigger(g), !g.isDefaultPrevented())) {
              f &&
                f.length &&
                (a.call(f, "hide"), h || f.data("bs.collapse", null));
              var i = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [i](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var j = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [i](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!d.support.transition) {
                return j.call(this);
              }
              var n = d.camelCase(["scroll", i].join("-"));
              this.$element
                .one("bsTransitionEnd", d.proxy(j, this))
                .emulateTransitionEnd(b.TRANSITION_DURATION)
                [i](this.$element[0][n]);
            }
          }
        }
      }),
      (b.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var f = d.Event("hide.bs.collapse");
          if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
            var g = this.dimension();
            this.$element[g](this.$element[g]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var h = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return d.support.transition
              ? void this.$element[g](0)
                  .one("bsTransitionEnd", d.proxy(h, this))
                  .emulateTransitionEnd(b.TRANSITION_DURATION)
              : h.call(this);
          }
        }
      }),
      (b.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (b.prototype.getParent = function () {
        return d(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            d.proxy(function (h, f) {
              var g = d(f);
              this.addAriaAndCollapsedClass(e(g), g);
            }, this)
          )
          .end();
      }),
      (b.prototype.addAriaAndCollapsedClass = function (g, h) {
        var f = g.hasClass("in");
        g.attr("aria-expanded", f),
          h.toggleClass("collapsed", !f).attr("aria-expanded", f);
      });
    var c = d.fn.collapse;
    (d.fn.collapse = a),
      (d.fn.collapse.Constructor = b),
      (d.fn.collapse.noConflict = function () {
        return (d.fn.collapse = c), this;
      }),
      d(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (h) {
          var i = d(this);
          i.attr("data-target") || h.preventDefault();
          var j = e(i),
            f = j.data("bs.collapse"),
            g = f ? "toggle" : i.data();
          a.call(j, g);
        }
      );
  })(jQuery),
  +(function (d) {
    function e(i) {
      var j = i.attr("data-target");
      j ||
        ((j = i.attr("href")),
        (j = j && /#[A-Za-z]/.test(j) && j.replace(/.*(?=#[^\s]*$)/, "")));
      var k = j && d(j);
      return k && k.length ? k : i.parent();
    }
    function f(i) {
      (i && 3 === i.which) ||
        (d(h).remove(),
        d(a).each(function () {
          var k = d(this),
            l = e(k),
            j = { relatedTarget: this };
          l.hasClass("open") &&
            ((i &&
              "click" == i.type &&
              /input|textarea/i.test(i.target.tagName) &&
              d.contains(l[0], i.target)) ||
              (l.trigger((i = d.Event("hide.bs.dropdown", j))),
              i.isDefaultPrevented() ||
                (k.attr("aria-expanded", "false"),
                l.removeClass("open").trigger("hidden.bs.dropdown", j))));
        }));
    }
    function g(i) {
      return this.each(function () {
        var k = d(this),
          j = k.data("bs.dropdown");
        j || k.data("bs.dropdown", (j = new b(this))),
          "string" == typeof i && j[i].call(k);
      });
    }
    var h = ".dropdown-backdrop",
      a = '[data-toggle="dropdown"]',
      b = function (i) {
        d(i).on("click.bs.dropdown", this.toggle);
      };
    (b.VERSION = "3.3.5"),
      (b.prototype.toggle = function (k) {
        var l = d(this);
        if (!l.is(".disabled, :disabled")) {
          var m = e(l),
            i = m.hasClass("open");
          if ((f(), !i)) {
            "ontouchstart" in document.documentElement &&
              !m.closest(".navbar-nav").length &&
              d(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(d(this))
                .on("click", f);
            var j = { relatedTarget: this };
            if (
              (m.trigger((k = d.Event("show.bs.dropdown", j))),
              k.isDefaultPrevented())
            ) {
              return;
            }
            l.trigger("focus").attr("aria-expanded", "true"),
              m.toggleClass("open").trigger("shown.bs.dropdown", j);
          }
          return !1;
        }
      }),
      (b.prototype.keydown = function (k) {
        if (
          /(38|40|27|32)/.test(k.which) &&
          !/input|textarea/i.test(k.target.tagName)
        ) {
          var l = d(this);
          if (
            (k.preventDefault(),
            k.stopPropagation(),
            !l.is(".disabled, :disabled"))
          ) {
            var m = e(l),
              o = m.hasClass("open");
            if ((!o && 27 != k.which) || (o && 27 == k.which)) {
              return (
                27 == k.which && m.find(a).trigger("focus"), l.trigger("click")
              );
            }
            var n = " li:not(.disabled):visible a",
              i = m.find(".dropdown-menu" + n);
            if (i.length) {
              var j = i.index(k.target);
              38 == k.which && j > 0 && j--,
                40 == k.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var c = d.fn.dropdown;
    (d.fn.dropdown = g),
      (d.fn.dropdown.Constructor = b),
      (d.fn.dropdown.noConflict = function () {
        return (d.fn.dropdown = c), this;
      }),
      d(document)
        .on("click.bs.dropdown.data-api", f)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (i) {
          i.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", a, b.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", a, b.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          b.prototype.keydown
        );
  })(jQuery),
  +(function (c) {
    function d(e, f) {
      return this.each(function () {
        var h = c(this),
          j = h.data("bs.modal"),
          g = c.extend({}, a.DEFAULTS, h.data(), "object" == typeof e && e);
        j || h.data("bs.modal", (j = new a(this, g))),
          "string" == typeof e ? j[e](f) : g.show && j.show(f);
      });
    }
    var a = function (e, f) {
      (this.options = f),
        (this.$body = c(document.body)),
        (this.$element = c(e)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            c.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (a.VERSION = "3.3.5"),
      (a.TRANSITION_DURATION = 300),
      (a.BACKDROP_TRANSITION_DURATION = 150),
      (a.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (a.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e);
      }),
      (a.prototype.show = function (e) {
        var f = this,
          g = c.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(g),
          this.isShown ||
            g.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              c.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              f.$element.one("mouseup.dismiss.bs.modal", function (h) {
                c(h.target).is(f.$element) && (f.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var i = c.support.transition && f.$element.hasClass("fade");
              f.$element.parent().length || f.$element.appendTo(f.$body),
                f.$element.show().scrollTop(0),
                f.adjustDialog(),
                i && f.$element[0].offsetWidth,
                f.$element.addClass("in"),
                f.enforceFocus();
              var h = c.Event("shown.bs.modal", { relatedTarget: e });
              i
                ? f.$dialog
                    .one("bsTransitionEnd", function () {
                      f.$element.trigger("focus").trigger(h);
                    })
                    .emulateTransitionEnd(a.TRANSITION_DURATION)
                : f.$element.trigger("focus").trigger(h);
            }));
      }),
      (a.prototype.hide = function (e) {
        e && e.preventDefault(),
          (e = c.Event("hide.bs.modal")),
          this.$element.trigger(e),
          this.isShown &&
            !e.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            c(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            c.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", c.proxy(this.hideModal, this))
                  .emulateTransitionEnd(a.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (a.prototype.enforceFocus = function () {
        c(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            c.proxy(function (e) {
              this.$element[0] === e.target ||
                this.$element.has(e.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (a.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              c.proxy(function (e) {
                27 == e.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (a.prototype.resize = function () {
        this.isShown
          ? c(window).on("resize.bs.modal", c.proxy(this.handleUpdate, this))
          : c(window).off("resize.bs.modal");
      }),
      (a.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(),
          this.backdrop(function () {
            e.$body.removeClass("modal-open"),
              e.resetAdjustments(),
              e.resetScrollbar(),
              e.$element.trigger("hidden.bs.modal");
          });
      }),
      (a.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (a.prototype.backdrop = function (e) {
        var f = this,
          g = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var h = c.support.transition && g;
          if (
            ((this.$backdrop = c(document.createElement("div"))
              .addClass("modal-backdrop " + g)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              c.proxy(function (i) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      i.target === i.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            h && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
          ) {
            return;
          }
          h
            ? this.$backdrop
                .one("bsTransitionEnd", e)
                .emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION)
            : e();
        } else {
          if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var l = function () {
              f.removeBackdrop(), e && e();
            };
            c.support.transition && this.$element.hasClass("fade")
              ? this.$backdrop
                  .one("bsTransitionEnd", l)
                  .emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION)
              : l();
          } else {
            e && e();
          }
        }
      }),
      (a.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (a.prototype.adjustDialog = function () {
        var e =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : "",
        });
      }),
      (a.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (a.prototype.checkScrollbar = function () {
        var e = window.innerWidth;
        if (!e) {
          var f = document.documentElement.getBoundingClientRect();
          e = f.right - Math.abs(f.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < e),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (a.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", e + this.scrollbarWidth);
      }),
      (a.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (a.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        (e.className = "modal-scrollbar-measure"), this.$body.append(e);
        var f = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), f;
      });
    var b = c.fn.modal;
    (c.fn.modal = d),
      (c.fn.modal.Constructor = a),
      (c.fn.modal.noConflict = function () {
        return (c.fn.modal = b), this;
      }),
      c(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (g) {
          var h = c(this),
            l = h.attr("href"),
            e = c(
              h.attr("data-target") || (l && l.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            f = e.data("bs.modal")
              ? "toggle"
              : c.extend({ remote: !/#/.test(l) && l }, e.data(), h.data());
          h.is("a") && g.preventDefault(),
            e.one("show.bs.modal", function (i) {
              i.isDefaultPrevented() ||
                e.one("hidden.bs.modal", function () {
                  h.is(":visible") && h.trigger("focus");
                });
            }),
            d.call(e, f, this);
        }
      );
  })(jQuery),
  +(function (c) {
    function d(e) {
      return this.each(function () {
        var g = c(this),
          h = g.data("bs.tooltip"),
          f = "object" == typeof e && e;
        (h || !/destroy|hide/.test(e)) &&
          (h || g.data("bs.tooltip", (h = new a(this, f))),
          "string" == typeof e && h[e]());
      });
    }
    var a = function (e, f) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", e, f);
    };
    (a.VERSION = "3.3.5"),
      (a.TRANSITION_DURATION = 150),
      (a.DEFAULTS = {
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
      (a.prototype.init = function (g, q, r) {
        if (
          ((this.enabled = !0),
          (this.type = g),
          (this.$element = c(q)),
          (this.options = this.getOptions(r)),
          (this.$viewport =
            this.options.viewport &&
            c(
              c.isFunction(this.options.viewport)
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
        for (var s = this.options.trigger.split(" "), e = s.length; e--; ) {
          var f = s[e];
          if ("click" == f) {
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              c.proxy(this.toggle, this)
            );
          } else {
            if ("manual" != f) {
              var h = "hover" == f ? "mouseenter" : "focusin",
                i = "hover" == f ? "mouseleave" : "focusout";
              this.$element.on(
                h + "." + this.type,
                this.options.selector,
                c.proxy(this.enter, this)
              ),
                this.$element.on(
                  i + "." + this.type,
                  this.options.selector,
                  c.proxy(this.leave, this)
                );
            }
          }
        }
        this.options.selector
          ? (this._options = c.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (a.prototype.getDefaults = function () {
        return a.DEFAULTS;
      }),
      (a.prototype.getOptions = function (e) {
        return (
          (e = c.extend({}, this.getDefaults(), this.$element.data(), e)),
          e.delay &&
            "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          e
        );
      }),
      (a.prototype.getDelegateOptions = function () {
        var e = {},
          f = this.getDefaults();
        return (
          this._options &&
            c.each(this._options, function (g, h) {
              f[g] != h && (e[g] = h);
            }),
          e
        );
      }),
      (a.prototype.enter = function (e) {
        var f =
          e instanceof this.constructor
            ? e
            : c(e.currentTarget).data("bs." + this.type);
        return (
          f ||
            ((f = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            c(e.currentTarget).data("bs." + this.type, f)),
          e instanceof c.Event &&
            (f.inState["focusin" == e.type ? "focus" : "hover"] = !0),
          f.tip().hasClass("in") || "in" == f.hoverState
            ? void (f.hoverState = "in")
            : (clearTimeout(f.timeout),
              (f.hoverState = "in"),
              f.options.delay && f.options.delay.show
                ? void (f.timeout = setTimeout(function () {
                    "in" == f.hoverState && f.show();
                  }, f.options.delay.show))
                : f.show())
        );
      }),
      (a.prototype.isInStateTrue = function () {
        for (var e in this.inState) {
          if (this.inState[e]) {
            return !0;
          }
        }
        return !1;
      }),
      (a.prototype.leave = function (e) {
        var f =
          e instanceof this.constructor
            ? e
            : c(e.currentTarget).data("bs." + this.type);
        return (
          f ||
            ((f = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            c(e.currentTarget).data("bs." + this.type, f)),
          e instanceof c.Event &&
            (f.inState["focusout" == e.type ? "focus" : "hover"] = !1),
          f.isInStateTrue()
            ? void 0
            : (clearTimeout(f.timeout),
              (f.hoverState = "out"),
              f.options.delay && f.options.delay.hide
                ? void (f.timeout = setTimeout(function () {
                    "out" == f.hoverState && f.hide();
                  }, f.options.delay.hide))
                : f.hide())
        );
      }),
      (a.prototype.show = function () {
        var f = c.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(f);
          var g = c.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (f.isDefaultPrevented() || !g) {
            return;
          }
          var h = this,
            i = this.tip(),
            k = this.getUID(this.type);
          this.setContent(),
            i.attr("id", k),
            this.$element.attr("aria-describedby", k),
            this.options.animation && i.addClass("fade");
          var l =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, i[0], this.$element[0])
                : this.options.placement,
            n = /\s?auto?\s?/i,
            o = n.test(l);
          o && (l = l.replace(n, "") || "top"),
            i
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(l)
              .data("bs." + this.type, this),
            this.options.container
              ? i.appendTo(this.options.container)
              : i.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var p = this.getPosition(),
            q = i[0].offsetWidth,
            E = i[0].offsetHeight;
          if (o) {
            var F = l,
              e = this.getPosition(this.$viewport);
            (l =
              "bottom" == l && p.bottom + E > e.bottom
                ? "top"
                : "top" == l && p.top - E < e.top
                ? "bottom"
                : "right" == l && p.right + q > e.width
                ? "left"
                : "left" == l && p.left - q < e.left
                ? "right"
                : l),
              i.removeClass(F).addClass(l);
          }
          var j = this.getCalculatedOffset(l, p, q, E);
          this.applyPlacement(j, l);
          var m = function () {
            var r = h.hoverState;
            h.$element.trigger("shown.bs." + h.type),
              (h.hoverState = null),
              "out" == r && h.leave(h);
          };
          c.support.transition && this.$tip.hasClass("fade")
            ? i
                .one("bsTransitionEnd", m)
                .emulateTransitionEnd(a.TRANSITION_DURATION)
            : m();
        }
      }),
      (a.prototype.applyPlacement = function (i, j) {
        var l = this.tip(),
          m = l[0].offsetWidth,
          n = l[0].offsetHeight,
          A = parseInt(l.css("margin-top"), 10),
          B = parseInt(l.css("margin-left"), 10);
        isNaN(A) && (A = 0),
          isNaN(B) && (B = 0),
          (i.top += A),
          (i.left += B),
          c.offset.setOffset(
            l[0],
            c.extend(
              {
                using: function (o) {
                  l.css({ top: Math.round(o.top), left: Math.round(o.left) });
                },
              },
              i
            ),
            0
          ),
          l.addClass("in");
        var C = l[0].offsetWidth,
          e = l[0].offsetHeight;
        "top" == j && e != n && (i.top = i.top + n - e);
        var f = this.getViewportAdjustedDelta(j, i, C, e);
        f.left ? (i.left += f.left) : (i.top += f.top);
        var g = /top|bottom/.test(j),
          h = g ? 2 * f.left - m + C : 2 * f.top - n + e,
          k = g ? "offsetWidth" : "offsetHeight";
        l.offset(i), this.replaceArrow(h, l[0][k], g);
      }),
      (a.prototype.replaceArrow = function (f, g, e) {
        this.arrow()
          .css(e ? "left" : "top", 50 * (1 - f / g) + "%")
          .css(e ? "top" : "left", "");
      }),
      (a.prototype.setContent = function () {
        var e = this.tip(),
          f = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](f),
          e.removeClass("fade in top bottom left right");
      }),
      (a.prototype.hide = function (e) {
        function f() {
          "in" != g.hoverState && h.detach(),
            g.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + g.type),
            e && e();
        }
        var g = this,
          h = c(this.$tip),
          l = c.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(l),
          l.isDefaultPrevented()
            ? void 0
            : (h.removeClass("in"),
              c.support.transition && h.hasClass("fade")
                ? h
                    .one("bsTransitionEnd", f)
                    .emulateTransitionEnd(a.TRANSITION_DURATION)
                : f(),
              (this.hoverState = null),
              this)
        );
      }),
      (a.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) &&
          e
            .attr("data-original-title", e.attr("title") || "")
            .attr("title", "");
      }),
      (a.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (a.prototype.getPosition = function (g) {
        g = g || this.$element;
        var q = g[0],
          e = "BODY" == q.tagName,
          f = q.getBoundingClientRect();
        null == f.width &&
          (f = c.extend({}, f, {
            width: f.right - f.left,
            height: f.bottom - f.top,
          }));
        var h = e ? { top: 0, left: 0 } : g.offset(),
          o = {
            scroll: e
              ? document.documentElement.scrollTop || document.body.scrollTop
              : g.scrollTop(),
          },
          p = e
            ? { width: c(window).width(), height: c(window).height() }
            : null;
        return c.extend({}, f, o, p, h);
      }),
      (a.prototype.getCalculatedOffset = function (g, h, e, f) {
        return "bottom" == g
          ? { top: h.top + h.height, left: h.left + h.width / 2 - e / 2 }
          : "top" == g
          ? { top: h.top - f, left: h.left + h.width / 2 - e / 2 }
          : "left" == g
          ? { top: h.top + h.height / 2 - f / 2, left: h.left - e }
          : { top: h.top + h.height / 2 - f / 2, left: h.left + h.width };
      }),
      (a.prototype.getViewportAdjustedDelta = function (w, x, y, z) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) {
          return e;
        }
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(w)) {
          var h = x.top - f - g.scroll,
            i = x.top + f - g.scroll + z;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = x.left - f,
            k = x.left + f + y;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (a.prototype.getTitle = function () {
        var f,
          g = this.$element,
          e = this.options;
        return (f =
          g.attr("data-original-title") ||
          ("function" == typeof e.title ? e.title.call(g[0]) : e.title));
      }),
      (a.prototype.getUID = function (e) {
        do {
          e += ~~(1000000 * Math.random());
        } while (document.getElementById(e));
        return e;
      }),
      (a.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = c(this.options.template)), 1 != this.$tip.length)
        ) {
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        }
        return this.$tip;
      }),
      (a.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (a.prototype.enable = function () {
        this.enabled = !0;
      }),
      (a.prototype.disable = function () {
        this.enabled = !1;
      }),
      (a.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (a.prototype.toggle = function (e) {
        var f = this;
        e &&
          ((f = c(e.currentTarget).data("bs." + this.type)),
          f ||
            ((f = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            c(e.currentTarget).data("bs." + this.type, f))),
          e
            ? ((f.inState.click = !f.inState.click),
              f.isInStateTrue() ? f.enter(f) : f.leave(f))
            : f.tip().hasClass("in")
            ? f.leave(f)
            : f.enter(f);
      }),
      (a.prototype.destroy = function () {
        var e = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            e.$element.off("." + e.type).removeData("bs." + e.type),
              e.$tip && e.$tip.detach(),
              (e.$tip = null),
              (e.$arrow = null),
              (e.$viewport = null);
          });
      });
    var b = c.fn.tooltip;
    (c.fn.tooltip = d),
      (c.fn.tooltip.Constructor = a),
      (c.fn.tooltip.noConflict = function () {
        return (c.fn.tooltip = b), this;
      });
  })(jQuery),
  +(function (c) {
    function d(e) {
      return this.each(function () {
        var g = c(this),
          h = g.data("bs.popover"),
          f = "object" == typeof e && e;
        (h || !/destroy|hide/.test(e)) &&
          (h || g.data("bs.popover", (h = new a(this, f))),
          "string" == typeof e && h[e]());
      });
    }
    var a = function (e, f) {
      this.init("popover", e, f);
    };
    if (!c.fn.tooltip) {
      throw new Error("Popover requires tooltip.js");
    }
    (a.VERSION = "3.3.5"),
      (a.DEFAULTS = c.extend({}, c.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (a.prototype = c.extend({}, c.fn.tooltip.Constructor.prototype)),
      (a.prototype.constructor = a),
      (a.prototype.getDefaults = function () {
        return a.DEFAULTS;
      }),
      (a.prototype.setContent = function () {
        var f = this.tip(),
          g = this.getTitle(),
          e = this.getContent();
        f.find(".popover-title")[this.options.html ? "html" : "text"](g),
          f
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof e
                  ? "html"
                  : "append"
                : "text"
            ](e),
          f.removeClass("fade top bottom left right in"),
          f.find(".popover-title").html() || f.find(".popover-title").hide();
      }),
      (a.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (a.prototype.getContent = function () {
        var e = this.$element,
          f = this.options;
        return (
          e.attr("data-content") ||
          ("function" == typeof f.content ? f.content.call(e[0]) : f.content)
        );
      }),
      (a.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var b = c.fn.popover;
    (c.fn.popover = d),
      (c.fn.popover.Constructor = a),
      (c.fn.popover.noConflict = function () {
        return (c.fn.popover = b), this;
      });
  })(jQuery),
  +(function (c) {
    function d(e, f) {
      (this.$body = c(document.body)),
        (this.$scrollElement = c(c(e).is(document.body) ? window : e)),
        (this.options = c.extend({}, d.DEFAULTS, f)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          c.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function a(e) {
      return this.each(function () {
        var g = c(this),
          h = g.data("bs.scrollspy"),
          f = "object" == typeof e && e;
        h || g.data("bs.scrollspy", (h = new d(this, f))),
          "string" == typeof e && h[e]();
      });
    }
    (d.VERSION = "3.3.5"),
      (d.DEFAULTS = { offset: 10 }),
      (d.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (d.prototype.refresh = function () {
        var e = this,
          f = "offset",
          g = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          c.isWindow(this.$scrollElement[0]) ||
            ((f = "position"), (g = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var j = c(this),
                h = j.data("target") || j.attr("href"),
                i = /^#./.test(h) && c(h);
              return (
                (i && i.length && i.is(":visible") && [[i[f]().top + g, h]]) ||
                null
              );
            })
            .sort(function (h, i) {
              return h[0] - i[0];
            })
            .each(function () {
              e.offsets.push(this[0]), e.targets.push(this[1]);
            });
      }),
      (d.prototype.process = function () {
        var h,
          p = this.$scrollElement.scrollTop() + this.options.offset,
          q = this.getScrollHeight(),
          r = this.options.offset + q - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != q && this.refresh(), p >= r)) {
          return g != (h = f[f.length - 1]) && this.activate(h);
        }
        if (g && p < e[0]) {
          return (this.activeTarget = null), this.clear();
        }
        for (h = e.length; h--; ) {
          g != f[h] &&
            p >= e[h] &&
            (void 0 === e[h + 1] || p < e[h + 1]) &&
            this.activate(f[h]);
        }
      }),
      (d.prototype.activate = function (e) {
        (this.activeTarget = e), this.clear();
        var f =
            this.selector +
            '[data-target="' +
            e +
            '"],' +
            this.selector +
            '[href="' +
            e +
            '"]',
          g = c(f).parents("li").addClass("active");
        g.parent(".dropdown-menu").length &&
          (g = g.closest("li.dropdown").addClass("active")),
          g.trigger("activate.bs.scrollspy");
      }),
      (d.prototype.clear = function () {
        c(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var b = c.fn.scrollspy;
    (c.fn.scrollspy = a),
      (c.fn.scrollspy.Constructor = d),
      (c.fn.scrollspy.noConflict = function () {
        return (c.fn.scrollspy = b), this;
      }),
      c(window).on("load.bs.scrollspy.data-api", function () {
        c('[data-spy="scroll"]').each(function () {
          var e = c(this);
          a.call(e, e.data());
        });
      });
  })(jQuery),
  +(function (d) {
    function e(f) {
      return this.each(function () {
        var h = d(this),
          g = h.data("bs.tab");
        g || h.data("bs.tab", (g = new a(this))),
          "string" == typeof f && g[f]();
      });
    }
    var a = function (f) {
      this.element = d(f);
    };
    (a.VERSION = "3.3.5"),
      (a.TRANSITION_DURATION = 150),
      (a.prototype.show = function () {
        var h = this.element,
          j = h.closest("ul:not(.dropdown-menu)"),
          q = h.data("target");
        if (
          (q ||
            ((q = h.attr("href")), (q = q && q.replace(/.*(?=#[^\s]*$)/, ""))),
          !h.parent("li").hasClass("active"))
        ) {
          var r = j.find(".active:last a"),
            f = d.Event("hide.bs.tab", { relatedTarget: h[0] }),
            g = d.Event("show.bs.tab", { relatedTarget: r[0] });
          if (
            (r.trigger(f),
            h.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var i = d(q);
            this.activate(h.closest("li"), j),
              this.activate(i, i.parent(), function () {
                r.trigger({ type: "hidden.bs.tab", relatedTarget: h[0] }),
                  h.trigger({ type: "shown.bs.tab", relatedTarget: r[0] });
              });
          }
        }
      }),
      (a.prototype.activate = function (h, o, f) {
        function g() {
          i
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            h
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            j ? (h[0].offsetWidth, h.addClass("in")) : h.removeClass("fade"),
            h.parent(".dropdown-menu").length &&
              h
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            f && f();
        }
        var i = o.find("> .active"),
          j =
            f &&
            d.support.transition &&
            ((i.length && i.hasClass("fade")) || !!o.find("> .fade").length);
        i.length && j
          ? i
              .one("bsTransitionEnd", g)
              .emulateTransitionEnd(a.TRANSITION_DURATION)
          : g(),
          i.removeClass("in");
      });
    var b = d.fn.tab;
    (d.fn.tab = e),
      (d.fn.tab.Constructor = a),
      (d.fn.tab.noConflict = function () {
        return (d.fn.tab = b), this;
      });
    var c = function (f) {
      f.preventDefault(), e.call(d(this), "show");
    };
    d(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', c)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', c);
  })(jQuery),
  +(function (c) {
    function d(e) {
      return this.each(function () {
        var g = c(this),
          h = g.data("bs.affix"),
          f = "object" == typeof e && e;
        h || g.data("bs.affix", (h = new a(this, f))),
          "string" == typeof e && h[e]();
      });
    }
    var a = function (e, f) {
      (this.options = c.extend({}, a.DEFAULTS, f)),
        (this.$target = c(this.options.target)
          .on("scroll.bs.affix.data-api", c.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            c.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = c(e)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (a.VERSION = "3.3.5"),
      (a.RESET = "affix affix-top affix-bottom"),
      (a.DEFAULTS = { offset: 0, target: window }),
      (a.prototype.getState = function (w, x, e, f) {
        var g = this.$target.scrollTop(),
          h = this.$element.offset(),
          i = this.$target.height();
        if (null != e && "top" == this.affixed) {
          return e > g ? "top" : !1;
        }
        if ("bottom" == this.affixed) {
          return null != e
            ? g + this.unpin <= h.top
              ? !1
              : "bottom"
            : w - f >= g + i
            ? !1
            : "bottom";
        }
        var j = null == this.affixed,
          u = j ? g : h.top,
          v = j ? i : x;
        return null != e && e >= g
          ? "top"
          : null != f && u + v >= w - f
          ? "bottom"
          : !1;
      }),
      (a.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) {
          return this.pinnedOffset;
        }
        this.$element.removeClass(a.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
          f = this.$element.offset();
        return (this.pinnedOffset = f.top - e);
      }),
      (a.prototype.checkPositionWithEventLoop = function () {
        setTimeout(c.proxy(this.checkPosition, this), 1);
      }),
      (a.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var g = this.$element.height(),
            i = this.options.offset,
            j = i.top,
            r = i.bottom,
            e = Math.max(c(document).height(), c(document.body).height());
          "object" != typeof i && (r = j = i),
            "function" == typeof j && (j = i.top(this.$element)),
            "function" == typeof r && (r = i.bottom(this.$element));
          var f = this.getState(e, g, j, r);
          if (this.affixed != f) {
            null != this.unpin && this.$element.css("top", "");
            var h = "affix" + (f ? "-" + f : ""),
              q = c.Event(h + ".bs.affix");
            if ((this.$element.trigger(q), q.isDefaultPrevented())) {
              return;
            }
            (this.affixed = f),
              (this.unpin = "bottom" == f ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(a.RESET)
                .addClass(h)
                .trigger(h.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == f && this.$element.offset({ top: e - g - r });
        }
      });
    var b = c.fn.affix;
    (c.fn.affix = d),
      (c.fn.affix.Constructor = a),
      (c.fn.affix.noConflict = function () {
        return (c.fn.affix = b), this;
      }),
      c(window).on("load", function () {
        c('[data-spy="affix"]').each(function () {
          var e = c(this),
            f = e.data();
          (f.offset = f.offset || {}),
            null != f.offsetBottom && (f.offset.bottom = f.offsetBottom),
            null != f.offsetTop && (f.offset.top = f.offsetTop),
            d.call(e, f);
        });
      });
  })(jQuery);
