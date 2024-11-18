/*! name: vanilla-calendar-pro v2.9.9 | url: https://github.com/uvarov-frontend/vanilla-calendar-pro */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).VanillaCalendar = t());
})(this, function () {
  "use strict";
  var e = Object.defineProperty,
    t = Object.getOwnPropertySymbols,
    n = Object.prototype.hasOwnProperty,
    a = Object.prototype.propertyIsEnumerable,
    s = (t, n, a) =>
      n in t
        ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: a })
        : (t[n] = a),
    l = (e, l) => {
      for (var i in l || (l = {})) n.call(l, i) && s(e, i, l[i]);
      if (t) for (var i of t(l)) a.call(l, i) && s(e, i, l[i]);
      return e;
    },
    i = (e, t, n) => (s(e, "symbol" != typeof t ? t + "" : t, n), n);
  const r = {
      calendar: "vanilla-calendar",
      calendarDefault: "vanilla-calendar_default",
      calendarMultiple: "vanilla-calendar_multiple",
      calendarMonth: "vanilla-calendar_month",
      calendarYear: "vanilla-calendar_year",
      calendarHidden: "vanilla-calendar_hidden",
      calendarToInput: "vanilla-calendar_to-input",
      calendarToInputTop: "vanilla-calendar_to-input_top",
      calendarToInputBottom: "vanilla-calendar_to-input_bottom",
      controls: "vanilla-calendar-controls",
      grid: "vanilla-calendar-grid",
      gridDisabled: "vanilla-calendar-grid_disabled",
      column: "vanilla-calendar-column",
      columnMonth: "vanilla-calendar-column_month",
      columnYear: "vanilla-calendar-column_year",
      header: "vanilla-calendar-header",
      headerContent: "vanilla-calendar-header__content",
      month: "vanilla-calendar-month",
      monthDisabled: "vanilla-calendar-month_disabled",
      year: "vanilla-calendar-year",
      yearDisabled: "vanilla-calendar-year_disabled",
      arrow: "vanilla-calendar-arrow",
      arrowPrev: "vanilla-calendar-arrow_prev",
      arrowNext: "vanilla-calendar-arrow_next",
      wrapper: "vanilla-calendar-wrapper",
      content: "vanilla-calendar-content",
      week: "vanilla-calendar-week",
      weekDay: "vanilla-calendar-week__day",
      weekDayWeekend: "vanilla-calendar-week__day_weekend",
      days: "vanilla-calendar-days",
      daysSelecting: "vanilla-calendar-days_selecting",
      months: "vanilla-calendar-months",
      monthsSelecting: "vanilla-calendar-months_selecting",
      monthsMonth: "vanilla-calendar-months__month",
      monthsMonthSelected: "vanilla-calendar-months__month_selected",
      monthsMonthDisabled: "vanilla-calendar-months__month_disabled",
      years: "vanilla-calendar-years",
      yearsSelecting: "vanilla-calendar-years_selecting",
      yearsYear: "vanilla-calendar-years__year",
      yearsYearSelected: "vanilla-calendar-years__year_selected",
      yearsYearDisabled: "vanilla-calendar-years__year_disabled",
      time: "vanilla-calendar-time",
      timeContent: "vanilla-calendar-time__content",
      timeHours: "vanilla-calendar-time__hours",
      timeMinutes: "vanilla-calendar-time__minutes",
      timeKeeping: "vanilla-calendar-time__keeping",
      timeRanges: "vanilla-calendar-time__ranges",
      timeRange: "vanilla-calendar-time__range",
      day: "vanilla-calendar-day",
      dayHoverFirst: "vanilla-calendar-day_hover-first",
      dayHoverLast: "vanilla-calendar-day_hover-last",
      dayHoverIntermediate: "vanilla-calendar-day_hover-intermediate",
      daySelectedFirst: "vanilla-calendar-day_selected-first",
      daySelectedLast: "vanilla-calendar-day_selected-last",
      daySelectedIntermediate: "vanilla-calendar-day_selected-intermediate",
      dayPopup: "vanilla-calendar-day__popup",
      dayBtn: "vanilla-calendar-day__btn",
      dayBtnPrev: "vanilla-calendar-day__btn_prev",
      dayBtnNext: "vanilla-calendar-day__btn_next",
      dayBtnToday: "vanilla-calendar-day__btn_today",
      dayBtnSelected: "vanilla-calendar-day__btn_selected",
      dayBtnHover: "vanilla-calendar-day__btn_hover",
      dayBtnDisabled: "vanilla-calendar-day__btn_disabled",
      dayBtnWeekend: "vanilla-calendar-day__btn_weekend",
      dayBtnHoliday: "vanilla-calendar-day__btn_holiday",
      weekNumbers: "vanilla-calendar-week-numbers",
      weekNumbersTitle: "vanilla-calendar-week-numbers__title",
      weekNumbersContent: "vanilla-calendar-week-numbers__content",
      weekNumber: "vanilla-calendar-week-number",
      isFocus: "vanilla-calendar-is-focus",
    },
    d = (e) =>
      `<div class="${e.controls}"><#ArrowPrev /><#ArrowNext /></div><div class="${e.grid}"><#Multiple><div class="${e.column}"><div class="${e.header}"><div class="${e.headerContent}"><#Month /><#Year /></div></div><div class="${e.wrapper}"><#WeekNumbers /><div class="${e.content}"><#Week /><#Days /></div></div></div><#/Multiple></div><#ControlTime />`,
    o = (e) =>
      `<div class="${e.header}"><div class="${e.headerContent}"><#Month /><#Year /></div></div><div class="${e.wrapper}"><div class="${e.content}"><#Months /></div></div>`,
    c = (e) =>
      `<div class="${e.header}"><#ArrowPrev /><div class="${e.headerContent}"><#Month /><#Year /></div><#ArrowNext /></div><div class="${e.wrapper}"><div class="${e.content}"><#Years /></div></div>`;
  class u {
    constructor() {
      var e;
      i(this, "isInit", !1),
        i(this, "isInputInit", !1),
        i(this, "input", !1),
        i(this, "type", "default"),
        i(this, "months", 2),
        i(this, "jumpMonths", 1),
        i(this, "jumpToSelectedDate", !1),
        i(this, "toggleSelected", !0),
        i(this, "date", {
          min: "1970-01-01",
          max: "2470-12-31",
          today: new Date(),
        }),
        i(this, "settings", {
          lang: "en",
          iso8601: !0,
          range: {
            min: void 0,
            max: void 0,
            disablePast: !1,
            disableGaps: !1,
            edgesOnly: !1,
            disableAllDays: !1,
            disableWeekday: void 0,
            disabled: void 0,
            enabled: void 0,
          },
          selection: {
            day: "single",
            month: !0,
            year: !0,
            time: !1,
            controlTime: "all",
            stepHours: 1,
            stepMinutes: 1,
            cancelableDay: !0,
          },
          selected: {
            dates: void 0,
            month: void 0,
            year: void 0,
            holidays: void 0,
            time: void 0,
          },
          visibility: {
            theme: "system",
            themeDetect: "html[data-theme]",
            monthShort: !0,
            weekNumbers: !1,
            weekend: !0,
            today: !0,
            disabled: !1,
            daysOutside: !0,
            positionToInput: "left",
          },
        }),
        i(this, "locale", { months: [], weekday: [] }),
        i(this, "sanitizer", (e) => e),
        i(this, "actions", {
          clickDay: null,
          clickWeekNumber: null,
          clickMonth: null,
          clickYear: null,
          clickArrow: null,
          changeTime: null,
          changeToInput: null,
          getDays: null,
          getMonths: null,
          getYears: null,
          initCalendar: null,
          updateCalendar: null,
          destroyCalendar: null,
          showCalendar: null,
          hideCalendar: null,
        }),
        i(this, "popups", {}),
        i(this, "CSSClasses", l({}, r)),
        i(this, "DOMTemplates", {
          default:
            ((e = this.CSSClasses),
            `<div class="${e.header}"><#ArrowPrev /><div class="${e.headerContent}"><#Month /><#Year /></div><#ArrowNext /></div><div class="${e.wrapper}"><#WeekNumbers /><div class="${e.content}"><#Week /><#Days /></div></div><#ControlTime />`),
          multiple: d(this.CSSClasses),
          month: o(this.CSSClasses),
          year: c(this.CSSClasses),
        }),
        i(this, "HTMLElement"),
        i(this, "HTMLOriginalElement"),
        i(this, "HTMLInputElement"),
        i(this, "rangeMin"),
        i(this, "rangeMax"),
        i(this, "rangeDisabled"),
        i(this, "rangeEnabled"),
        i(this, "selectedDates"),
        i(this, "selectedHolidays"),
        i(this, "selectedMonth"),
        i(this, "selectedYear"),
        i(this, "selectedHours"),
        i(this, "selectedMinutes"),
        i(this, "selectedKeeping"),
        i(this, "selectedTime"),
        i(this, "currentType"),
        i(this, "correctMonths"),
        i(this, "viewYear"),
        i(this, "dateMin"),
        i(this, "dateMax");
    }
  }
  const m = (e) =>
      `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(
        e.getDate()
      ).padStart(2, "0")}`,
    g = (e) => new Date(`${e}T00:00:00`),
    h = (e) =>
      e.reduce((e, t) => {
        if (t instanceof Date || "number" == typeof t) {
          const n = t instanceof Date ? t : new Date(t);
          e.push(n.toISOString().substring(0, 10));
        } else
          t.match(/^(\d{4}-\d{2}-\d{2})$/g)
            ? e.push(t)
            : t.replace(
                /(\d{4}-\d{2}-\d{2}).*?(\d{4}-\d{2}-\d{2})/g,
                (t, n, a) => {
                  const s = g(n),
                    l = g(a),
                    i = new Date(s.getTime());
                  for (; i <= l; i.setDate(i.getDate() + 1)) e.push(m(i));
                  return t;
                }
              );
        return e;
      }, []),
    y = () => {
      const e = new Date();
      return new Date(e.getTime() - 6e4 * e.getTimezoneOffset())
        .toISOString()
        .substring(0, 10);
    },
    v = (e) =>
      e
        ? {
            0: "12",
            13: "01",
            14: "02",
            15: "03",
            16: "04",
            17: "05",
            18: "06",
            19: "07",
            20: "08",
            21: "09",
            22: "10",
            23: "11",
          }[Number(e)] || String(e)
        : "",
    p = (e) =>
      `${e} is not found, check the first argument passed to new VanillaCalendar.`,
    S =
      'The calendar has not been initialized, please initialize it using the "init()" method first.',
    M =
      'You specified "define" for "settings.lang" but did not provide the required values for "locale.weekday" or "locale.months".',
    C = 'Incorrect name of theme in "settings.visibility.theme".',
    b = "The value of the time property can be: false, true, 12 or 24.",
    f = (e) => {
      (e.currentType = e.type),
        ((e) => {
          var t;
          if (
            e.jumpToSelectedDate &&
            (null == (t = e.settings.selected.dates) ? void 0 : t.length) &&
            void 0 === e.settings.selected.month &&
            void 0 === e.settings.selected.year
          ) {
            const t = g(h(e.settings.selected.dates)[0]);
            (e.settings.selected.month = t.getMonth()),
              (e.settings.selected.year = t.getFullYear());
          }
          const n =
              void 0 !== e.settings.selected.month &&
              Number(e.settings.selected.month) >= 0 &&
              Number(e.settings.selected.month) < 12,
            a =
              void 0 !== e.settings.selected.year &&
              Number(e.settings.selected.year) >= 0 &&
              Number(e.settings.selected.year) <= 9999;
          (e.selectedMonth = n
            ? Number(e.settings.selected.month)
            : e.date.today.getMonth()),
            (e.selectedYear = a
              ? Number(e.settings.selected.year)
              : e.date.today.getFullYear()),
            (e.viewYear = e.selectedYear);
        })(e),
        ((e) => {
          var t, n, a;
          "today" === e.date.min && (e.date.min = y()),
            "today" === e.date.max && (e.date.max = y()),
            "today" === e.settings.range.min && (e.settings.range.min = y()),
            "today" === e.settings.range.max && (e.settings.range.max = y()),
            (e.settings.range.min = e.settings.range.min
              ? g(e.date.min) >= g(e.settings.range.min)
                ? e.date.min
                : e.settings.range.min
              : e.date.min),
            (e.settings.range.max = e.settings.range.max
              ? g(e.date.max) <= g(e.settings.range.max)
                ? e.date.max
                : e.settings.range.max
              : e.date.max);
          const s =
            e.settings.range.disablePast &&
            !e.settings.range.disableAllDays &&
            g(e.settings.range.min) < e.date.today;
          (e.rangeMin =
            s || e.settings.range.disableAllDays
              ? m(e.date.today)
              : e.settings.range.min),
            (e.rangeMax = e.settings.range.disableAllDays
              ? m(e.date.today)
              : e.settings.range.max),
            (e.rangeDisabled =
              e.settings.range.disabled && !e.settings.range.disableAllDays
                ? h(e.settings.range.disabled)
                : e.settings.range.disableAllDays
                ? [e.rangeMin]
                : []),
            e.rangeDisabled.length > 1 &&
              e.rangeDisabled.sort((e, t) => +new Date(e) - +new Date(t)),
            (e.rangeEnabled = e.settings.range.enabled
              ? h(e.settings.range.enabled)
              : []),
            (null == (t = e.rangeEnabled) ? void 0 : t[0]) &&
              (null == (n = e.rangeDisabled) ? void 0 : n[0]) &&
              (e.rangeDisabled = e.rangeDisabled.filter(
                (t) => !e.rangeEnabled.includes(t)
              )),
            e.rangeEnabled.length > 1 &&
              e.rangeEnabled.sort((e, t) => +new Date(e) - +new Date(t)),
            (null == (a = e.rangeEnabled) ? void 0 : a[0]) &&
              e.settings.range.disableAllDays &&
              ((e.rangeMin = e.rangeEnabled[0]),
              (e.rangeMax = e.rangeEnabled[e.rangeEnabled.length - 1]));
        })(e),
        ((e) => {
          var t, n;
          (e.selectedDates = (
            null == (t = e.settings.selected.dates) ? void 0 : t[0]
          )
            ? h(e.settings.selected.dates)
            : []),
            (e.selectedHolidays = (
              null == (n = e.settings.selected.holidays) ? void 0 : n[0]
            )
              ? h(e.settings.selected.holidays)
              : []);
        })(e),
        ((e) => {
          (e.dateMin = e.settings.visibility.disabled
            ? g(e.date.min)
            : g(e.rangeMin)),
            (e.dateMax = e.settings.visibility.disabled
              ? g(e.date.max)
              : g(e.rangeMax));
        })(e),
        ((e) => {
          const t =
            !0 === e.settings.selection.time ||
            12 === e.settings.selection.time;
          if (t || 24 === e.settings.selection.time) {
            let n = !1;
            if ("string" == typeof e.settings.selected.time) {
              const a = t
                ? /^([0-9]|0[1-9]|1[0-2]):([0-5][0-9])|(AM|PM)/g
                : /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])/g;
              e.settings.selected.time.replace(
                a,
                (a, s, l, i) => (
                  s &&
                    l &&
                    ((n = !0), (e.selectedHours = s), (e.selectedMinutes = l)),
                  i && t
                    ? (e.selectedKeeping = i)
                    : t && (e.selectedKeeping = "AM"),
                  ""
                )
              );
            }
            !n && t
              ? ((e.selectedHours = v(String(e.date.today.getHours()))),
                (e.selectedMinutes = String(e.date.today.getMinutes())),
                (e.selectedKeeping =
                  Number(e.date.today.getHours()) >= 12 ? "PM" : "AM"))
              : n ||
                ((e.selectedHours = String(e.date.today.getHours())),
                (e.selectedMinutes = String(e.date.today.getMinutes()))),
              (e.selectedHours =
                Number(e.selectedHours) < 10
                  ? `0${Number(e.selectedHours)}`
                  : `${e.selectedHours}`),
              (e.selectedMinutes =
                Number(e.selectedMinutes) < 10
                  ? `0${Number(e.selectedMinutes)}`
                  : `${e.selectedMinutes}`),
              (e.selectedTime = `${e.selectedHours}:${e.selectedMinutes}${
                e.selectedKeeping ? ` ${e.selectedKeeping}` : ""
              }`);
          } else if (e.settings.selection.time) throw new Error(b);
        })(e),
        ((e) => {
          e.correctMonths =
            "multiple" === e.type
              ? 1 === e.months
                ? 2
                : e.months > 12
                ? 12
                : e.months
              : 1;
        })(e);
    },
    w = ({ arrowPrev: e, arrowNext: t, isPrevHidden: n, isNextHidden: a }) => {
      (e.style.visibility = n ? "hidden" : ""),
        (t.style.visibility = a ? "hidden" : "");
    },
    D = (e) => {
      var t, n;
      if ("month" === e.currentType) return;
      const a =
          null == (t = e.HTMLElement)
            ? void 0
            : t.querySelector(`.${e.CSSClasses.arrowPrev}`),
        s =
          null == (n = e.HTMLElement)
            ? void 0
            : n.querySelector(`.${e.CSSClasses.arrowNext}`);
      if (!a || !s) return;
      ({
        default: () => {
          const t = g(m(new Date(e.selectedYear, e.selectedMonth, 1))),
            n = new Date(t.getTime()),
            l = new Date(t.getTime());
          n.setMonth(n.getMonth() - e.jumpMonths),
            l.setMonth(l.getMonth() + e.jumpMonths),
            e.settings.selection.year ||
              (e.dateMin.setFullYear(t.getFullYear()),
              e.dateMax.setFullYear(t.getFullYear()));
          const i =
              !e.settings.selection.month ||
              n.getFullYear() < e.dateMin.getFullYear() ||
              (n.getFullYear() === e.dateMin.getFullYear() &&
                n.getMonth() < e.dateMin.getMonth()),
            r =
              !e.settings.selection.month ||
              l.getFullYear() > e.dateMax.getFullYear() ||
              (l.getFullYear() === e.dateMax.getFullYear() &&
                l.getMonth() > e.dateMax.getMonth());
          w({ arrowPrev: a, arrowNext: s, isPrevHidden: i, isNextHidden: r });
        },
        year: () => {
          w({
            arrowPrev: a,
            arrowNext: s,
            isPrevHidden:
              e.dateMin.getFullYear() &&
              e.viewYear - 7 <= e.dateMin.getFullYear(),
            isNextHidden:
              e.dateMax.getFullYear() &&
              e.viewYear + 7 >= e.dateMax.getFullYear(),
          });
        },
      })["multiple" === e.currentType ? "default" : e.currentType]();
    },
    T = (e, t) => {
      if (!e) return null;
      const n = g(e),
        a = t ? n.getDay() || 7 : n.getDay();
      n.setDate(n.getDate() + 4 - a);
      const s = new Date(n.getFullYear(), 0, 1),
        l = Math.ceil(((+n - +s) / 864e5 + 1) / 7);
      return { year: n.getFullYear(), week: l };
    };
  function L(e) {
    if (!e || !e.getBoundingClientRect)
      return { top: 0, bottom: 0, left: 0, right: 0 };
    const t = e.getBoundingClientRect(),
      n = document.documentElement;
    return {
      bottom: t.bottom,
      right: t.right,
      top: t.top + window.scrollY - n.clientTop,
      left: t.left + window.scrollX - n.clientLeft,
    };
  }
  function E() {
    return {
      vw: Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      ),
      vh: Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      ),
    };
  }
  function $(e) {
    const { top: t, left: n } = {
        left: window.scrollX || document.documentElement.scrollLeft || 0,
        top: window.scrollY || document.documentElement.scrollTop || 0,
      },
      { top: a, left: s } = L(e),
      { vh: l, vw: i } = E(),
      r = a - t,
      d = s - n;
    return {
      top: r,
      bottom: l - (r + e.clientHeight),
      left: d,
      right: i - (d + e.clientWidth),
    };
  }
  function H(e, t, n = 5) {
    const a = { top: !0, bottom: !0, left: !0, right: !0 },
      s = [];
    if (!t || !e) return { canShow: a, parentPositions: s };
    const { bottom: l, top: i } = $(e),
      { top: r, left: d } = L(e),
      { height: o, width: c } = t.getBoundingClientRect(),
      { vh: u, vw: m } = E(),
      g = m / 2,
      h = u / 2;
    return (
      [
        { condition: r < h, position: "top" },
        { condition: r > h, position: "bottom" },
        { condition: d < g, position: "left" },
        { condition: d > g, position: "right" },
      ].forEach(({ condition: e, position: t }) => {
        e && s.push(t);
      }),
      Object.assign(a, {
        top: o <= i - n,
        bottom: o <= l - n,
        left: c <= d,
        right: c <= m - d,
      }),
      { canShow: a, parentPositions: s }
    );
  }
  const k = (e, t, n, a) => {
      if (e) {
        const s =
            "auto" === n
              ? (function (e, t) {
                  const n = "left";
                  if (!t || !e) return n;
                  const { canShow: a, parentPositions: s } = H(e, t),
                    l = a.left && a.right;
                  return (
                    (l && a.bottom
                      ? "center"
                      : l && a.top
                      ? ["top", "center"]
                      : Array.isArray(s)
                      ? ["bottom" === s[0] ? "top" : "bottom", ...s.slice(1)]
                      : s) || n
                  );
                })(e, t)
              : n,
          l = {
            top: -t.offsetHeight,
            bottom: e.offsetHeight,
            left: 0,
            center: e.offsetWidth / 2 - t.offsetWidth / 2,
            right: e.offsetWidth - t.offsetWidth,
          },
          i = Array.isArray(s) ? s[0] : "bottom",
          r = Array.isArray(s) ? s[1] : s;
        "bottom" === i
          ? (t.classList.remove(a.calendarToInputTop),
            t.classList.add(a.calendarToInputBottom))
          : (t.classList.remove(a.calendarToInputBottom),
            t.classList.add(a.calendarToInputTop));
        const { top: d, left: o } = L(e),
          c = d + l[i],
          u = o + l[r];
        Object.assign(t.style, { left: `${u}px`, top: `${c}px` });
      }
    },
    x = (e, t) => {
      var n;
      e.popups &&
        (null == (n = Object.entries(e.popups)) ||
          n.forEach(([n, a]) =>
            ((e, t, n, a) => {
              const s = e.CSSClasses.dayPopup,
                l = a.querySelector(`[data-calendar-day="${t}"]`);
              if (
                l &&
                ((null == n ? void 0 : n.modifier) &&
                  l.classList.add(...n.modifier.trim().split(" ")),
                null == n ? void 0 : n.html)
              ) {
                const t = l.parentElement,
                  a = document.createElement("div");
                (a.className = s),
                  (a.innerHTML = e.sanitizer(n.html)),
                  t.appendChild(a),
                  setTimeout(() => {
                    if (a) {
                      const { canShow: e } = H(t, a),
                        n = 5;
                      let s = t.offsetHeight,
                        l = 0;
                      e.bottom || (s = -a.offsetHeight - n),
                        e.left &&
                          !e.right &&
                          (l = t.offsetWidth - a.offsetWidth / 2),
                        !e.left && e.right && (l = a.offsetWidth / 2),
                        Object.assign(a.style, {
                          left: `${l}px`,
                          top: `${s}px`,
                        });
                    }
                  });
              }
            })(e, n, a, t)
          ));
    },
    Y = (e, t, n, a, s) => {
      const l = t[n].querySelector(`.${e.CSSClasses.dayBtn}`),
        i = T(null == l ? void 0 : l.dataset.calendarDay, e.settings.iso8601);
      if (!i) return;
      const r = a.cloneNode(!0);
      (r.innerText = String(i.week)),
        (r.dataset.calendarYearWeek = String(i.year)),
        s.appendChild(r);
    },
    _ = (e, t, n, a, s, l, i, r) => {
      const d = document.createElement("div");
      d.className = e.CSSClasses.day;
      const o = document.createElement("button");
      (o.className = `${e.CSSClasses.dayBtn}${r ? ` ${r}` : ""}`),
        (o.type = "button"),
        (o.innerText = String(a)),
        (o.dataset.calendarDay = l);
      e.settings.visibility.weekNumbers &&
        (() => {
          const t = T(l, e.settings.iso8601);
          t && (o.dataset.calendarWeekNumber = String(t.week));
        })(),
        i
          ? e.settings.visibility.daysOutside && d.appendChild(o)
          : d.appendChild(o),
        ((e, t, n) => {
          var a, s, l, i, r;
          const d =
              null == (a = e.settings.range.disableWeekday)
                ? void 0
                : a.includes(n),
            o =
              e.settings.range.disableAllDays &&
              !!(null == (s = e.rangeEnabled) ? void 0 : s[0]);
          (!d && !o) ||
            (null == (l = e.rangeEnabled) ? void 0 : l.includes(t)) ||
            (null == (i = e.rangeDisabled) ? void 0 : i.includes(t)) ||
            (e.rangeDisabled.push(t),
            null == (r = e.rangeDisabled) ||
              r.sort((e, t) => +new Date(e) - +new Date(t)));
        })(e, l, s),
        ((e, t, n, a, s, l, i) => {
          var r, d, o;
          if (
            ((g(e.rangeMin) > g(l) ||
              g(e.rangeMax) < g(l) ||
              (null == (r = e.rangeDisabled) ? void 0 : r.includes(l)) ||
              (!e.settings.selection.month && i) ||
              (!e.settings.selection.year && g(l).getFullYear() !== t)) &&
              (a.classList.add(e.CSSClasses.dayBtnDisabled), (a.tabIndex = -1)),
            e.settings.visibility.today &&
              m(e.date.today) === l &&
              a.classList.add(e.CSSClasses.dayBtnToday),
            !e.settings.visibility.weekend ||
              (0 !== s && 7 !== s) ||
              a.classList.add(e.CSSClasses.dayBtnWeekend),
            (null == (d = e.selectedHolidays) ? void 0 : d.includes(l)) &&
              a.classList.add(e.CSSClasses.dayBtnHoliday),
            (null == (o = e.selectedDates) ? void 0 : o.includes(l)) &&
              (a.classList.add(e.CSSClasses.dayBtnSelected),
              e.selectedDates.length > 1 &&
                "multiple-ranged" === e.settings.selection.day &&
                (e.selectedDates[0] === l &&
                  n.classList.add(e.CSSClasses.daySelectedFirst),
                e.selectedDates[e.selectedDates.length - 1] === l &&
                  n.classList.add(e.CSSClasses.daySelectedLast),
                e.selectedDates[0] !== l &&
                  e.selectedDates[e.selectedDates.length - 1] !== l &&
                  n.classList.add(e.CSSClasses.daySelectedIntermediate))),
            e.settings.range.edgesOnly &&
              e.selectedDates.length > 1 &&
              "multiple-ranged" === e.settings.selection.day)
          ) {
            const t = +new Date(e.selectedDates[0]),
              s = +new Date(e.selectedDates[e.selectedDates.length - 1]),
              i = +new Date(l);
            i > t &&
              i < s &&
              (a.classList.add(e.CSSClasses.dayBtnSelected),
              n.classList.add(e.CSSClasses.daySelectedIntermediate));
          }
        })(e, t, d, o, s, l, i),
        n.appendChild(d),
        e.actions.getDays && e.actions.getDays(a, l, d, o, e);
    },
    N = (e) => {
      const t = e.HTMLElement.querySelectorAll(`.${e.CSSClasses.days}`),
        n = e.HTMLElement.querySelectorAll(`.${e.CSSClasses.weekNumbers}`),
        a = new Date(e.selectedYear, e.selectedMonth, 1);
      t.forEach((t, s) => {
        const l = new Date(a);
        l.setMonth(l.getMonth() + s);
        const i = l.getMonth(),
          r = l.getFullYear(),
          d = new Date(r, i, 1),
          o = new Date(r, i + 1, 0).getDate(),
          c = e.settings.iso8601
            ? (0 !== d.getDay() ? d.getDay() : 7) - 1
            : d.getDay();
        e.settings.selection.day && t.classList.add(e.CSSClasses.daysSelecting),
          (t.textContent = ""),
          ((e, t, n, a, s) => {
            let l = new Date(n, a, 0).getDate() - (s - 1);
            const i = 0 === a ? n - 1 : n,
              r = 0 === a ? 12 : a < 10 ? `0${a}` : a;
            for (let a = s; a > 0; a--, l++) {
              const a = `${i}-${r}-${l}`,
                s = g(a).getDay();
              _(e, n, t, l, s, a, !0, e.CSSClasses.dayBtnPrev);
            }
          })(e, t, r, i, c),
          ((e, t, n, a, s) => {
            for (let l = 1; l <= n; l++) {
              const n = new Date(a, s, l),
                i = m(n),
                r = n.getDay();
              _(e, a, t, l, r, i, !1, null);
            }
          })(e, t, o, r, i),
          ((e, t, n, a, s, l) => {
            const i = l + n,
              r = 7 * Math.ceil(i / 7) - i,
              d = s + 1 === 12 ? a + 1 : a,
              o = s + 1 === 12 ? "01" : s + 2 < 10 ? `0${s + 2}` : s + 2;
            for (let n = 1; n <= r; n++) {
              const s = `${d}-${o}-${n < 10 ? `0${n}` : String(n)}`,
                l = g(s).getDay();
              _(e, a, t, n, l, s, !0, e.CSSClasses.dayBtnNext);
            }
          })(e, t, o, r, i, c),
          ((e, t, n, a, s) => {
            if (!e.settings.visibility.weekNumbers) return;
            a.textContent = "";
            const l = document.createElement("b");
            (l.className = e.CSSClasses.weekNumbersTitle),
              (l.innerText = "#"),
              a.appendChild(l);
            const i = document.createElement("div");
            (i.className = e.CSSClasses.weekNumbersContent), a.appendChild(i);
            const r = document.createElement("button");
            (r.type = "button"), (r.className = e.CSSClasses.weekNumber);
            const d = s.querySelectorAll(`.${e.CSSClasses.day}`),
              o = Math.ceil((t + n) / 7);
            for (let t = 0; t < o; t++) Y(e, d, 0 === t ? 6 : 7 * t, r, i);
          })(e, c, o, n[s], t),
          x(e, t);
      });
    },
    A = (e) => {
      var t, n;
      const a =
          null == (t = e.HTMLElement)
            ? void 0
            : t.querySelectorAll("[data-calendar-selected-month]"),
        s =
          null == (n = e.HTMLElement)
            ? void 0
            : n.querySelectorAll("[data-calendar-selected-year]");
      if (!(null == a ? void 0 : a[0]) && (null == s ? void 0 : s[0])) return;
      const l = new Date(e.selectedYear, e.selectedMonth, 1);
      null == a ||
        a.forEach((t, n) =>
          ((e, t, n, a) => {
            const s = new Date(a.setMonth(e.selectedMonth + n)).getMonth(),
              l =
                !1 === e.settings.selection.month ||
                "only-arrows" === e.settings.selection.month;
            (t.tabIndex = l ? -1 : 0),
              t.classList.toggle(e.CSSClasses.monthDisabled, l),
              t.setAttribute("data-calendar-selected-month", String(s)),
              (t.innerText = e.locale.months[s]);
          })(e, t, n, l)
        ),
        null == s ||
          s.forEach((t, n) =>
            ((e, t, n, a) => {
              const s = new Date(
                  a.setFullYear(e.selectedYear, e.selectedMonth + n)
                ).getFullYear(),
                l =
                  !1 === e.settings.selection.year ||
                  "only-arrows" === e.settings.selection.year;
              (t.tabIndex = l ? -1 : 0),
                t.classList.toggle(e.CSSClasses.yearDisabled, l),
                t.setAttribute("data-calendar-selected-year", String(s)),
                (t.innerText = String(s));
            })(e, t, n, l)
          );
    },
    I = (e, t) => {
      const n = g(m(new Date(e.selectedYear, e.selectedMonth, 1)));
      ({
        prev: () => n.setMonth(n.getMonth() - e.jumpMonths),
        next: () => n.setMonth(n.getMonth() + e.jumpMonths),
      })[t](),
        ([e.selectedMonth, e.selectedYear] = [n.getMonth(), n.getFullYear()]),
        A(e),
        D(e),
        N(e);
    },
    P = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          ArrowNext: (e) =>
            `<button type="button"class="${e.CSSClasses.arrow} ${e.CSSClasses.arrowNext}"data-calendar-arrow="next"></button>`,
          ArrowPrev: (e) =>
            `<button type="button"class="${e.CSSClasses.arrow} ${e.CSSClasses.arrowPrev}"data-calendar-arrow="prev"></button>`,
          ControlTime: (e) =>
            e.settings.selection.time
              ? `<div class="${e.CSSClasses.time}"></div>`
              : "",
          Days: (e) => `<div class="${e.CSSClasses.days}"></div>`,
          Month: (e) =>
            `<button type="button"class="${e.CSSClasses.month}"data-calendar-selected-month></button>`,
          Months: (e) => `<div class="${e.CSSClasses.months}"></div>`,
          Week: (e) => `<div class="${e.CSSClasses.week}"></div>`,
          WeekNumbers: (e) =>
            e.settings.visibility.weekNumbers
              ? `<div class="${e.CSSClasses.weekNumbers}"></div>`
              : "",
          Year: (e) =>
            `<button type="button"class="${e.CSSClasses.year}"data-calendar-selected-year></button>`,
          Years: (e) => `<div class="${e.CSSClasses.years}"></div>`,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    F = (e, t) =>
      t
        .replace(/[\n\t]/g, "")
        .replace(/<#(?!\/?Multiple)(.*?)>/g, (t, n) => {
          const a = ((s = n.replace(/[/\s\n\t]/g, "")), P[s]);
          var s;
          const l = a ? a(e) : "";
          return e.sanitizer(l);
        })
        .replace(/[\n\t]/g, ""),
    q = (e, t) => {
      const {
          HTMLElement: n,
          CSSClasses: a,
          DOMTemplates: s,
          type: l,
          currentType: i,
          correctMonths: r,
        } = e,
        d = (s, l) => {
          if (!t) return;
          const i = n.querySelector(`.${a.controls}`);
          i && n.removeChild(i);
          n.querySelector(`.${a.grid}`).classList.add(a.gridDisabled);
          const r = t.closest(`.${a.column}`);
          r.classList.add(s), (r.innerHTML = F(e, l));
        },
        o = {
          default: () => {
            n.classList.add(a.calendarDefault),
              n.classList.remove(a.calendarMonth, a.calendarYear),
              (n.innerHTML = F(e, s.default));
          },
          multiple: () => {
            r &&
              (n.classList.add(a.calendarMultiple),
              n.classList.remove(a.calendarMonth, a.calendarYear),
              (n.innerHTML = ((e, t) =>
                t
                  .replace(/<#Multiple>(.*?)<#\/Multiple>/g, (t, n) => {
                    let a = "";
                    for (let t = 0; t < e.correctMonths; t++) a += n;
                    return e.sanitizer(a);
                  })
                  .replace(/[\n\t]/g, ""))(e, F(e, s.multiple))));
          },
          month: () => {
            "multiple" !== l
              ? (n.classList.add(a.calendarMonth),
                n.classList.remove(a.calendarDefault, a.calendarYear),
                (n.innerHTML = F(e, s.month)))
              : d(a.columnMonth, s.month);
          },
          year: () => {
            "multiple" !== l
              ? (n.classList.add(a.calendarYear),
                n.classList.remove(a.calendarDefault, a.calendarMonth),
                (n.innerHTML = F(e, s.year)))
              : d(a.columnYear, s.year);
          },
        };
      n.classList.add(a.calendar), o[i]();
    },
    B = (e, t, n, a, s) => {
      const l = t.cloneNode(!1);
      return (
        (l.className = `${e.CSSClasses.yearsYear}${
          n === s
            ? ` ${e.CSSClasses.yearsYearSelected}`
            : a
            ? ` ${e.CSSClasses.yearsYearDisabled}`
            : ""
        }`),
        (l.dataset.calendarYear = String(s)),
        (l.title = String(s)),
        (l.innerText = String(s)),
        a && (l.tabIndex = -1),
        l
      );
    },
    W = (e, t) => {
      const n = (null == t ? void 0 : t.dataset.calendarSelectedYear)
        ? Number(null == t ? void 0 : t.dataset.calendarSelectedYear)
        : e.selectedYear;
      (e.currentType = "year"), q(e, t), A(e), D(e);
      const a = e.HTMLElement.querySelector(`.${e.CSSClasses.years}`);
      if (!e.settings.selection.year || !a) return;
      a.classList.add(e.CSSClasses.yearsSelecting);
      const s = "multiple" !== e.type || e.selectedYear === n ? 0 : 1,
        l = document.createElement("button");
      l.type = "button";
      for (let t = e.viewYear - 7; t < e.viewYear + 8; t++) {
        const i =
            t < e.dateMin.getFullYear() + s || t > e.dateMax.getFullYear(),
          r = B(e, l, n, i, t);
        a.appendChild(r), e.actions.getYears && e.actions.getYears(t, r, e);
      }
    },
    O = (e) =>
      `${e.charAt(0).toUpperCase()}${e.substring(1, e.length)}`.replace(
        /\./,
        ""
      ),
    j = (e, t) => {
      const n = new Date(`1978-01-0${t + 1}T00:00:00.000Z`).toLocaleString(
        e.settings.lang,
        { weekday: "short", timeZone: "UTC" }
      );
      e.locale.weekday.push(O(n));
    },
    K = (e, t) => {
      const n = new Date(
        `1978-${t + 1 <= 9 ? `0${t + 1}` : t + 1}-01T00:00:00.000Z`
      ).toLocaleString(e.settings.lang, { month: "long", timeZone: "UTC" });
      e.locale.months.push(O(n));
    },
    z = (e) => {
      if ("multiple" !== e.type) return 0;
      const t = e.HTMLElement.querySelectorAll(`.${e.CSSClasses.column}`),
        n = Array.from(t).findIndex((t) =>
          t.classList.contains(`${e.CSSClasses.columnMonth}`)
        );
      return n > 0 ? n : 0;
    },
    R = (e, t, n, a, s, l) => {
      const i = t.cloneNode(!1);
      return (
        (i.className = `${e.CSSClasses.monthsMonth}${
          n === l
            ? ` ${e.CSSClasses.monthsMonthSelected}`
            : s
            ? ` ${e.CSSClasses.monthsMonthDisabled}`
            : ""
        }`),
        (i.title = a),
        (i.innerText = `${
          e.settings.visibility.monthShort ? a.substring(0, 3) : a
        }`),
        (i.dataset.calendarMonth = String(l)),
        s && (i.tabIndex = -1),
        i
      );
    },
    G = (e, t) => {
      var n, a;
      const s = (null == t ? void 0 : t.dataset.calendarSelectedMonth)
          ? Number(t.dataset.calendarSelectedMonth)
          : e.selectedMonth,
        l =
          null ==
          (n = null == t ? void 0 : t.closest(`.${e.CSSClasses.column}`))
            ? void 0
            : n.querySelector(`.${e.CSSClasses.year}`),
        i = l ? Number(l.dataset.calendarSelectedYear) : e.selectedYear;
      (e.currentType = "month"), q(e, t), A(e);
      const r =
        null == (a = e.HTMLElement)
          ? void 0
          : a.querySelector(`.${e.CSSClasses.months}`);
      if (!e.settings.selection.month || !r) return;
      r.classList.add(e.CSSClasses.monthsSelecting);
      const d =
          e.jumpMonths > 1
            ? e.locale.months
                .map((t, n) => s - e.jumpMonths * n)
                .concat(e.locale.months.map((t, n) => s + e.jumpMonths * n))
                .filter((e) => e >= 0 && e <= 12)
            : Array.from(Array(12).keys()),
        o = document.createElement("button");
      o.type = "button";
      for (let t = 0; t < 12; t++) {
        const n = e.locale.months[t],
          a =
            (t < e.dateMin.getMonth() + z(e) && i <= e.dateMin.getFullYear()) ||
            (t > e.dateMax.getMonth() + z(e) && i >= e.dateMax.getFullYear()) ||
            (t !== s && !d.includes(t)),
          l = R(e, o, s, n, a, t);
        r.appendChild(l), e.actions.getMonths && e.actions.getMonths(t, l, e);
      }
    },
    Z = (e, t) =>
      e && t
        ? {
            0: { AM: "00", PM: "12" },
            1: { AM: "01", PM: "13" },
            2: { AM: "02", PM: "14" },
            3: { AM: "03", PM: "15" },
            4: { AM: "04", PM: "16" },
            5: { AM: "05", PM: "17" },
            6: { AM: "06", PM: "18" },
            7: { AM: "07", PM: "19" },
            8: { AM: "08", PM: "20" },
            9: { AM: "09", PM: "21" },
            10: { AM: "10", PM: "22" },
            11: { AM: "11", PM: "23" },
            12: { AM: "12", PM: "12" },
          }[Number(e)][t]
        : "",
    U = (e, t, n) => e.querySelector(`.${t}${n ? ` input[name="${n}"]` : ""}`),
    V = (e, t, n) => {
      e.addEventListener("mouseover", () => t.classList.add(n)),
        e.addEventListener("mouseout", () => t.classList.remove(n));
    },
    X = (e, t, n, a) => {
      ({
        hours: () => {
          e.selectedHours = n;
        },
        minutes: () => {
          e.selectedMinutes = n;
        },
      })[a](),
        (e.selectedTime = `${e.selectedHours}:${e.selectedMinutes}${
          e.selectedKeeping ? ` ${e.selectedKeeping}` : ""
        }`),
        e.actions.changeTime && e.actions.changeTime(t, e),
        e.input &&
          e.HTMLInputElement &&
          e.actions.changeToInput &&
          e.actions.changeToInput(t, e);
    },
    J = (e, t, n, a, s, l) => {
      t.addEventListener("input", (t) => {
        const i = t.target,
          r = Number(i.value),
          d = r < 10 ? `0${r}` : `${r}`;
        if ("hours" !== s || 12 !== l) return (n.value = d), void X(e, t, d, s);
        r < l && r > 0
          ? ((n.value = d),
            (e.selectedKeeping = "AM"),
            (a.innerText = e.selectedKeeping),
            X(e, t, d, s))
          : (0 === r
              ? ((e.selectedKeeping = "AM"), (a.innerText = "AM"))
              : ((e.selectedKeeping = "PM"), (a.innerText = "PM")),
            (n.value = v(i.value)),
            X(e, t, v(i.value), s));
      });
    },
    Q = (e, t, n, a, s, l) => {
      n.addEventListener("change", (n) => {
        const i = n.target,
          r = Number(i.value),
          d = r < 10 ? `0${r}` : `${r}`;
        "hours" === s && 12 === l
          ? i.value && r <= l && r > 0
            ? ((i.value = d),
              (t.value = Z(d, e.selectedKeeping)),
              X(e, n, d, s))
            : i.value && r < 24 && (r > l || 0 === r)
            ? (0 === r
                ? ((e.selectedKeeping = "AM"), (a.innerText = "AM"))
                : ((e.selectedKeeping = "PM"), (a.innerText = "PM")),
              (i.value = v(i.value)),
              (t.value = d),
              X(e, n, v(i.value), s))
            : (i.value = e.selectedHours)
          : i.value && r <= l && r >= 0
          ? ((i.value = d), (t.value = d), X(e, n, d, s))
          : "hours" === s
          ? (i.value = e.selectedHours)
          : "minutes" === s && (i.value = e.selectedMinutes);
      });
    },
    ee = (e, t, n) => {
      const a = 24 === n ? 23 : n || 12,
        s = U(t, e.CSSClasses.timeRange, "hours"),
        l = U(t, e.CSSClasses.timeRange, "minutes"),
        i = U(t, e.CSSClasses.timeHours, "hours"),
        r = U(t, e.CSSClasses.timeMinutes, "minutes"),
        d = t.querySelector(`.${e.CSSClasses.timeKeeping}`);
      V(s, i, e.CSSClasses.isFocus),
        V(l, r, e.CSSClasses.isFocus),
        J(e, s, i, d, "hours", a),
        J(e, l, r, d, "minutes", 0),
        Q(e, s, i, d, "hours", a),
        Q(e, l, r, d, "minutes", 59),
        d &&
          ((e, t, n) => {
            t.addEventListener("click", (a) => {
              (e.selectedKeeping = t.innerText.includes("AM") ? "PM" : "AM"),
                (t.innerText = e.selectedKeeping),
                (n.value = Z(e.selectedHours, e.selectedKeeping)),
                X(e, a, e.selectedHours, "hours");
            });
          })(e, d, s);
    },
    te = (e, t, n, a) =>
      `<label class="${t}"><input type="text"name="${e}"maxlength="2"value="${n}"${
        a ? "disabled" : ""
      }></label>`,
    ne = (e, t, n, a, s, l) =>
      `<label class="${t}"><input type="range"name="${e}"min="${n}"max="${a}"step="${s}"value="${l}"></label>`,
    ae = (e) => {
      const t = [...e.locale.weekday];
      if (!t[0]) return;
      e.settings.iso8601 && t.push(t.shift());
      e.HTMLElement.querySelectorAll(`.${e.CSSClasses.week}`).forEach((n) =>
        ((e, t, n) => {
          const a = document.createElement("b");
          t.textContent = "";
          for (let s = 0; s < n.length; s++) {
            const l = n[s],
              i = a.cloneNode(!0);
            (i.className = `${e.CSSClasses.weekDay}`),
              (i.className = `${e.CSSClasses.weekDay}${
                e.settings.visibility.weekend && e.settings.iso8601
                  ? 6 === s
                    ? ` ${e.CSSClasses.weekDayWeekend}`
                    : ""
                  : !e.settings.visibility.weekend ||
                    e.settings.iso8601 ||
                    (0 !== s && 6 !== s)
                  ? ""
                  : ` ${e.CSSClasses.weekDayWeekend}`
              }`),
              (i.innerText = `${l}`),
              t.appendChild(i);
          }
        })(e, n, t)
      );
    },
    se = ["light", "dark", "system"],
    le = {
      value: !1,
      set: () => {
        le.value = !0;
      },
      check: () => le.value,
    },
    ie = (e, t) =>
      se.find((n) => {
        var a;
        return (
          "system" !== n &&
          (null == (a = e.getAttribute(t)) ? void 0 : a.includes(n))
        );
      }),
    re = (e, t) => {
      e.dataset.calendarTheme = t;
    },
    de = (e, t) => {
      var n;
      if (
        ((n = t),
        re(e.HTMLElement, n.matches ? "dark" : "light"),
        "system" !== e.settings.visibility.theme || le.check())
      )
        return;
      const a = (t) => {
        const n = document.querySelectorAll(`.${e.CSSClasses.calendar}`);
        null == n || n.forEach((e) => re(e, t.matches ? "dark" : "light"));
      };
      t.addEventListener ? t.addEventListener("change", a) : t.addListener(a),
        le.set();
    },
    oe = (e, t) => {
      const n = e.settings.visibility.themeDetect
        ? document.querySelector(e.settings.visibility.themeDetect)
        : null;
      if (!n) return void de(e, t);
      const a = e.settings.visibility.themeDetect.replace(
          /^.*\[(.+)\]/g,
          (e, t) => t
        ),
        s = ie(n, a);
      s
        ? (re(e.HTMLElement, s),
          ((e, t, n) => {
            new MutationObserver((a) => {
              for (let s = 0; s < a.length; s++)
                if (a[s].attributeName === n) {
                  const a = ie(t, n);
                  a && re(e.HTMLElement, a);
                  break;
                }
            }).observe(t, { attributes: !0 });
          })(e, n, a))
        : de(e, t);
    },
    ce = (e) => {
      const t = {
        default: () => {
          ae(e), N(e);
        },
        multiple: () => {
          ae(e), N(e);
        },
        month: () => G(e),
        year: () => W(e),
      };
      ((e) => {
        if (!se.includes(e.settings.visibility.theme)) throw new Error(C);
        if ("not all" === window.matchMedia("(prefers-color-scheme)").media)
          return void re(e.HTMLElement, "light");
        ({
          light: () => re(e.HTMLElement, "light"),
          dark: () => re(e.HTMLElement, "dark"),
          system: () =>
            oe(e, window.matchMedia("(prefers-color-scheme: dark)")),
        })[e.settings.visibility.theme]();
      })(e),
        ((e) => {
          if (
            "define" !== e.settings.lang ||
            !e.locale.weekday[6] ||
            !e.locale.months[11]
          ) {
            if ("define" === e.settings.lang) throw new Error(M);
            (e.locale.weekday = []), (e.locale.months = []);
            for (let t = 0; t < 7; t++) j(e, t);
            for (let t = 0; t < 12; t++) K(e, t);
          }
        })(e),
        q(e),
        A(e),
        D(e),
        ((e) => {
          const t = e.HTMLElement.querySelector(`.${e.CSSClasses.time}`);
          if (!t) return;
          const n =
              !0 === e.settings.selection.time ? 12 : e.settings.selection.time,
            a = "range" === e.settings.selection.controlTime,
            [s, l] = [0, 23],
            [i, r] = [0, 59];
          (t.innerHTML = e.sanitizer(
            `<div class="${e.CSSClasses.timeContent}">${te(
              "hours",
              e.CSSClasses.timeHours,
              e.selectedHours,
              a
            )}${te("minutes", e.CSSClasses.timeMinutes, e.selectedMinutes, a)}${
              12 === n
                ? `<button type="button" class="${e.CSSClasses.timeKeeping}"${
                    a ? "disabled" : ""
                  }>${e.selectedKeeping}</button>`
                : ""
            }</div><div class="${e.CSSClasses.timeRanges}">${ne(
              "hours",
              e.CSSClasses.timeRange,
              s,
              l,
              e.settings.selection.stepHours,
              e.selectedKeeping
                ? Z(e.selectedHours, e.selectedKeeping)
                : e.selectedHours
            )}${ne(
              "minutes",
              e.CSSClasses.timeRange,
              i,
              r,
              e.settings.selection.stepMinutes,
              e.selectedMinutes
            )}</div>`
          )),
            ee(e, t, n);
        })(e),
        t[e.currentType]();
    },
    ue = { self: null, rangeMin: void 0, rangeMax: void 0 },
    me = () => {
      var e;
      if (!(null == (e = ue.self) ? void 0 : e.HTMLElement)) return;
      const { CSSClasses: t } = ue.self;
      ue.self.HTMLElement.querySelectorAll(
        `.${ue.self.CSSClasses.dayBtnHover}`
      ).forEach((e) => {
        var n;
        e.classList.remove(ue.self.CSSClasses.dayBtnHover),
          null == (n = e.parentElement) ||
            n.classList.remove(
              t.dayHoverIntermediate,
              t.dayHoverFirst,
              t.dayHoverLast
            );
      });
    },
    ge = (e, t, n) => {
      var a, s, l;
      if (!(null == (a = ue.self) ? void 0 : a.selectedDates)) return;
      const i = m(e),
        { CSSClasses: r } = ue.self;
      if (null == (s = ue.self.rangeDisabled) ? void 0 : s.includes(i)) return;
      const d =
        null == (l = ue.self.HTMLElement)
          ? void 0
          : l.querySelectorAll(`[data-calendar-day="${i}"]`);
      null == d ||
        d.forEach((e) => {
          var t;
          e.classList.add(r.dayBtnHover),
            null == (t = e.parentElement) ||
              t.classList.add(r.dayHoverIntermediate);
        }),
        null == t ||
          t.forEach((e) => {
            var t;
            return null == (t = e.parentElement)
              ? void 0
              : t.classList.add(r.dayHoverFirst);
          }),
        null == n ||
          n.forEach((e) => {
            var t;
            return null == (t = e.parentElement)
              ? void 0
              : t.classList.add(r.dayHoverLast);
          });
    },
    he = (e) => {
      var t;
      if (!e.target || !(null == (t = ue.self) ? void 0 : t.selectedDates))
        return;
      if (!e.target.closest(`.${ue.self.CSSClasses.days}`)) return void me();
      const n = e.target.closest("[data-calendar-day]");
      if (!n) return;
      const a = n.dataset.calendarDay,
        s = g(ue.self.selectedDates[0]),
        l = g(a),
        i = ue.self.HTMLElement.querySelectorAll(
          `[data-calendar-day="${ue.self.selectedDates[0]}"]`
        ),
        r = ue.self.HTMLElement.querySelectorAll(`[data-calendar-day="${a}"]`),
        [d, o] = s < l ? [i, r] : [r, i],
        [c, u] = s < l ? [s, l] : [l, s];
      me();
      for (let e = new Date(c); e <= u; e.setDate(e.getDate() + 1)) ge(e, d, o);
    },
    ye = (e) => {
      ue.self &&
        "Escape" === e.key &&
        ((ue.self.selectedDates = []),
        ue.self.HTMLElement.removeEventListener("mousemove", he),
        document.removeEventListener("keydown", ye),
        ce(ue.self));
    },
    ve = (e, t) => {
      var n;
      if (t) {
        const a =
          1 === e.selectedDates.length && e.selectedDates[0].includes(t);
        (e.selectedDates =
          a && !e.settings.selection.cancelableDay
            ? [t, t]
            : a && e.settings.selection.cancelableDay
            ? []
            : e.selectedDates.length > 1
            ? [t]
            : [...e.selectedDates, t]),
          null == (n = e.selectedDates) ||
            n.sort((e, t) => +new Date(e) - +new Date(t));
      }
      e.settings.range.disableGaps &&
        ((ue.rangeMin = ue.rangeMin ? ue.rangeMin : e.rangeMin),
        (ue.rangeMax = ue.rangeMax ? ue.rangeMax : e.rangeMax)),
        (ue.self = e);
      const a = {
        set: () => {
          e.HTMLElement.addEventListener("mousemove", he),
            document.addEventListener("keydown", ye),
            e.settings.range.disableGaps &&
              (() => {
                var e, t, n;
                if (
                  !(null ==
                  (t = null == (e = ue.self) ? void 0 : e.selectedDates)
                    ? void 0
                    : t[0]) ||
                  !(null == (n = ue.self.rangeDisabled) ? void 0 : n[0])
                )
                  return;
                const a = g(ue.self.selectedDates[0]),
                  [s, l] = ue.self.rangeDisabled
                    .map((e) => g(e))
                    .reduce(
                      ([e, t], n) => [
                        a >= n ? n : e,
                        a < n && null === t ? n : t,
                      ],
                      [null, null]
                    );
                s &&
                  (ue.self.rangeMin = m(new Date(s.setDate(s.getDate() + 1)))),
                  l &&
                    (ue.self.rangeMax = m(
                      new Date(l.setDate(l.getDate() - 1))
                    ));
              })();
        },
        reset: () => {
          const [t, n] = [
            e.selectedDates[0],
            e.selectedDates[e.selectedDates.length - 1],
          ];
          (e.selectedDates =
            e.selectedDates[0] !== e.selectedDates[e.selectedDates.length - 1]
              ? e.settings.range.edgesOnly
                ? [t, n]
                : h([`${t}:${n}`])
              : [e.selectedDates[0], e.selectedDates[0]]),
            e.HTMLElement.removeEventListener("mousemove", he),
            document.removeEventListener("keydown", ye),
            e.settings.range.disableGaps &&
              ue.self &&
              ((ue.self.rangeMin = ue.rangeMin),
              (ue.self.rangeMax = ue.rangeMax));
        },
      };
      a[1 === e.selectedDates.length ? "set" : "reset"]();
    },
    pe = (e, t, n) => {
      if (!t.dataset.calendarDay) return;
      const a = t.dataset.calendarDay,
        s = t.classList.contains(e.CSSClasses.dayBtnSelected);
      if (s && !e.settings.selection.cancelableDay) return;
      let l = !0;
      void 0 !== e.toggleSelected &&
        (l =
          "function" == typeof e.toggleSelected
            ? e.toggleSelected(e)
            : e.toggleSelected),
        (s && !l) ||
          (e.selectedDates = s
            ? e.selectedDates.filter((e) => e !== a)
            : n
            ? [...e.selectedDates, a]
            : [a]);
    },
    Se = (e, t, n, a, s) => {
      const l = e.HTMLElement.querySelectorAll(`.${e.CSSClasses.column}`),
        i = Array.from(l).findIndex((e) => e.classList.contains(t)),
        r = Number(l[i].querySelector(`.${n}`).getAttribute(s));
      return "month" === e.currentType && i >= 0
        ? a - i
        : "year" === e.currentType && e.selectedYear !== r
        ? a - 1
        : a;
    },
    Me = (e, t, n, a) => {
      if (!e.settings.selection[n]) return;
      const s = t.target,
        l = (e) => s.closest(`.${e}`),
        i = l(a.header),
        r = l(a.item),
        d = l(e.CSSClasses.grid),
        o = l(e.CSSClasses.column);
      if (e.currentType !== n && i) {
        ({ year: () => W(e, s), month: () => G(e, s) })[n]();
      } else
        r
          ? ((e, t, n, a, s) => {
              const l = {
                year: () => {
                  var n, a;
                  return null == (a = (n = e.actions).clickYear)
                    ? void 0
                    : a.call(n, t, e);
                },
                month: () => {
                  var n, a;
                  return null == (a = (n = e.actions).clickMonth)
                    ? void 0
                    : a.call(n, t, e);
                },
              };
              ({
                year: () => {
                  if ("multiple" === e.type) {
                    const t = Se(
                        e,
                        e.CSSClasses.columnYear,
                        e.CSSClasses.year,
                        Number(s.dataset.calendarYear),
                        "data-calendar-selected-year"
                      ),
                      n =
                        e.selectedMonth < e.dateMin.getMonth() &&
                        t <= e.dateMin.getFullYear(),
                      a =
                        e.selectedMonth > e.dateMax.getMonth() &&
                        t >= e.dateMax.getFullYear(),
                      l = t < e.dateMin.getFullYear(),
                      i = t > e.dateMax.getFullYear();
                    n || l
                      ? ((e.selectedYear = e.dateMin.getFullYear()),
                        (e.selectedMonth = e.dateMin.getMonth()))
                      : a || i
                      ? ((e.selectedYear = e.dateMax.getFullYear()),
                        (e.selectedMonth = e.dateMax.getMonth()))
                      : (e.selectedYear = t);
                  } else e.selectedYear = Number(s.dataset.calendarYear);
                },
                month: () => {
                  if ("multiple" === e.type) {
                    const t = Se(
                        e,
                        e.CSSClasses.columnMonth,
                        e.CSSClasses.month,
                        Number(s.dataset.calendarMonth),
                        "data-calendar-selected-month"
                      ),
                      n = s
                        .closest(`.${a.column}`)
                        .querySelector(`.${e.CSSClasses.year}`);
                    e.selectedYear = Number(n.dataset.calendarSelectedYear);
                    const l =
                        t < e.dateMin.getMonth() &&
                        e.selectedYear <= e.dateMin.getFullYear(),
                      i =
                        t > e.dateMax.getMonth() &&
                        e.selectedYear >= e.dateMax.getFullYear();
                    e.selectedMonth = l
                      ? e.dateMin.getMonth()
                      : i
                      ? e.dateMax.getMonth()
                      : t;
                  } else e.selectedMonth = Number(s.dataset.calendarMonth);
                },
              })[n](),
                l[n](),
                (e.currentType = e.type),
                ce(e);
            })(e, t, n, a, r)
          : ((e.currentType === n && i) ||
              ("multiple" === e.type && e.currentType === n && d && !o)) &&
            ((e.currentType = e.type), ce(e));
    },
    Ce = (e) => {
      const t = (t) => {
        ((e, t) => {
          const n = t.target.closest(`.${e.CSSClasses.arrow}`);
          n &&
            (["default", "multiple"].includes(e.currentType)
              ? I(e, n.dataset.calendarArrow)
              : "year" === e.currentType &&
                void 0 !== e.viewYear &&
                ((e.viewYear += { prev: -15, next: 15 }[
                  n.dataset.calendarArrow
                ]),
                W(e, t.target)),
            e.actions.clickArrow && e.actions.clickArrow(t, e));
        })(e, t),
          ((e, t) => {
            var n;
            if (
              !e.settings.visibility.weekNumbers ||
              !e.actions.clickWeekNumber
            )
              return;
            const a = t.target.closest(`.${e.CSSClasses.weekNumber}`),
              s =
                null == (n = e.HTMLElement)
                  ? void 0
                  : n.querySelectorAll("[data-calendar-week-number]");
            if (!a || !s) return;
            const l = Number(a.innerText),
              i = Number(a.dataset.calendarYearWeek),
              r = Array.from(s).filter(
                (e) => Number(e.dataset.calendarWeekNumber) === l
              );
            e.actions.clickWeekNumber(t, l, r, i, e);
          })(e, t),
          ((e, t) => {
            var n;
            const a = t.target,
              s = (e) => a.closest(`.${e}`),
              l = s(e.CSSClasses.dayBtn);
            if (
              !e.settings.selection.day ||
              !["single", "multiple", "multiple-ranged"].includes(
                e.settings.selection.day
              ) ||
              !l
            )
              return;
            ({
              single: () => pe(e, l, !1),
              multiple: () => pe(e, l, !0),
              "multiple-ranged": () => ve(e, l.dataset.calendarDay),
            })[e.settings.selection.day](),
              null == (n = e.selectedDates) ||
                n.sort((e, t) => +new Date(e) - +new Date(t)),
              e.actions.clickDay && e.actions.clickDay(t, e),
              e.input &&
                e.HTMLInputElement &&
                e.HTMLElement &&
                e.actions.changeToInput &&
                e.actions.changeToInput(t, e);
            const i = s(e.CSSClasses.dayBtnPrev),
              r = s(e.CSSClasses.dayBtnNext);
            ({
              prev: () => I(e, "prev"),
              next: () => I(e, "next"),
              default: () => N(e),
            })[i ? "prev" : r ? "next" : "default"]();
          })(e, t),
          Me(e, t, "month", {
            header: e.CSSClasses.month,
            item: e.CSSClasses.monthsMonth,
            column: e.CSSClasses.columnMonth,
          }),
          Me(e, t, "year", {
            header: e.CSSClasses.year,
            item: e.CSSClasses.yearsYear,
            column: e.CSSClasses.columnYear,
          });
      };
      return (
        e.HTMLElement.addEventListener("click", t),
        () => e.HTMLElement.removeEventListener("click", t)
      );
    },
    be = (e, { year: t, month: n, dates: a, holidays: s, time: i } = {}) => {
      var r;
      const d = l({}, e.settings.selected);
      (e.settings.selected.year = t ? d.year : e.selectedYear),
        (e.settings.selected.month = n ? d.month : e.selectedMonth),
        (e.settings.selected.holidays = s ? d.holidays : e.selectedHolidays),
        (e.settings.selected.time = i ? d.time : e.selectedTime),
        (e.settings.selected.dates =
          "only-first" === a && (null == (r = e.selectedDates) ? void 0 : r[0])
            ? [e.selectedDates[0]]
            : !0 === a
            ? d.dates
            : e.selectedDates),
        f(e),
        ce(e),
        (e.settings.selected = d),
        "multiple-ranged" === e.settings.selection.day && a && ve(e);
    },
    fe = (e, t = !0) => {
      e.isInputInit = !0;
      const n = document.createElement("div");
      return (
        (n.className = `${e.CSSClasses.calendar} ${e.CSSClasses.calendarToInput} ${e.CSSClasses.calendarHidden}`),
        (e.HTMLElement = n),
        document.body.appendChild(e.HTMLElement),
        (e.HTMLElement.style.visibility = "hidden"),
        t &&
          queueMicrotask(() => {
            k(
              e.HTMLInputElement,
              n,
              e.settings.visibility.positionToInput,
              e.CSSClasses
            ),
              (e.HTMLElement.style.visibility = "visible"),
              e.show();
          }),
        be(e, { year: !0, month: !0, dates: !0, holidays: !0, time: !0 }),
        e.actions.initCalendar && e.actions.initCalendar(e),
        Ce(e)
      );
    },
    we = (e) => (
      (e.HTMLOriginalElement = e.HTMLElement.cloneNode(!0)),
      (e.isInit = !0),
      e.input
        ? ((e) => {
            const t = [];
            e.HTMLInputElement = e.HTMLElement;
            const n = () =>
                k(
                  e.HTMLInputElement,
                  e.HTMLElement,
                  e.settings.visibility.positionToInput,
                  e.CSSClasses
                ),
              a = (t) => {
                "Escape" === t.key &&
                  ((null == e ? void 0 : e.HTMLInputElement) &&
                    (null == e ? void 0 : e.HTMLElement) &&
                    e.hide(),
                  document.removeEventListener("keydown", a));
              },
              s = (t) => {
                var a;
                e &&
                  t.target !== e.HTMLInputElement &&
                  !(null == (a = e.HTMLElement)
                    ? void 0
                    : a.contains(t.target)) &&
                  (e.HTMLInputElement && e.HTMLElement && e.hide(),
                  window.removeEventListener("resize", n),
                  document.removeEventListener("click", s, { capture: !0 }));
              },
              l = () => {
                e.isInputInit
                  ? (k(
                      e.HTMLInputElement,
                      e.HTMLElement,
                      e.settings.visibility.positionToInput,
                      e.CSSClasses
                    ),
                    (e.HTMLElement.style.visibility = "visible"),
                    e.show())
                  : t.push(fe(e)),
                  window.addEventListener("resize", n),
                  document.addEventListener("click", s, { capture: !0 }),
                  document.addEventListener("keydown", a);
              };
            return (
              e.HTMLInputElement.addEventListener("click", l),
              e.HTMLInputElement.addEventListener("focus", l),
              () => {
                t.forEach((e) => e());
              }
            );
          })(e)
        : (f(e),
          ce(e),
          e.actions.initCalendar && e.actions.initCalendar(e),
          Ce(e))
    );
  return class extends u {
    constructor(e, t) {
      if (
        (super(),
        i(this, "init", () => we(this)),
        i(this, "update", (e) =>
          ((e, { year: t, month: n, dates: a, holidays: s, time: l } = {}) => {
            if (!e.isInit) throw new Error(S);
            e.input && !e.isInputInit && fe(e, !1),
              be(e, { year: t, month: n, dates: a, holidays: s, time: l }),
              e.actions.updateCalendar && e.actions.updateCalendar(e);
          })(this, e)
        ),
        i(this, "destroy", () =>
          ((e) => {
            var t, n, a, s, l, i;
            if (!e.isInit) throw new Error(S);
            e.input
              ? (null ==
                  (n =
                    null == (t = e.HTMLElement) ? void 0 : t.parentElement) ||
                  n.removeChild(e.HTMLElement),
                null ==
                  (s =
                    null == (a = e.HTMLInputElement)
                      ? void 0
                      : a.replaceWith) || s.call(a, e.HTMLOriginalElement),
                (e.HTMLInputElement = void 0))
              : null ==
                  (i = null == (l = e.HTMLElement) ? void 0 : l.replaceWith) ||
                i.call(l, e.HTMLOriginalElement),
              (e.HTMLElement = e.HTMLOriginalElement),
              e.actions.destroyCalendar && e.actions.destroyCalendar(e);
          })(this)
        ),
        i(this, "show", () => {
          var e;
          (e = this).currentType
            ? (e.HTMLElement.classList.remove(e.CSSClasses.calendarHidden),
              e.actions.showCalendar && e.actions.showCalendar(e))
            : e.HTMLElement.click();
        }),
        i(this, "hide", () => {
          var e;
          (e = this).currentType &&
            (e.HTMLElement.classList.add(e.CSSClasses.calendarHidden),
            e.actions.hideCalendar && e.actions.hideCalendar(e));
        }),
        (this.HTMLElement =
          "string" == typeof e ? document.querySelector(e) : e),
        !this.HTMLElement)
      )
        throw new Error(p(e));
      if (!t) return;
      const n = (e, t) => {
        Object.keys(t).forEach((a) => {
          "object" != typeof e[a] ||
          "object" != typeof t[a] ||
          t[a] instanceof Date
            ? (e[a] = t[a])
            : n(e[a], t[a]);
        });
      };
      n(this, t);
    }
  };
});
