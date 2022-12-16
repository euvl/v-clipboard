var g = Object.defineProperty;
var m = (t, e, r) => e in t ? g(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var d = (t, e, r) => (m(t, typeof e != "symbol" ? e + "" : e, r), r);
class f {
  constructor() {
    d(this, "seed", 0);
    d(this, "data", /* @__PURE__ */ new Map());
  }
  id() {
    return Date.now().toString(26) + this.seed++;
  }
  add(e, r = this.id()) {
    return this.data.set(r, e), r;
  }
  get(e) {
    return this.data.get(e);
  }
  delete(e) {
    this.delete(e);
  }
}
const y = "Failed to copy value to clipboard. Unknown type.", C = {
  asString(t) {
    if (t == null)
      return console.warn("Clipboard input is empty"), "";
    if (typeof t != "string")
      try {
        return JSON.stringify(t);
      } catch (e) {
        return console.warn(y, e), "";
      }
    return t;
  }
}, w = "position:fixed; pointer-events:none; z-index:-9999; opacity:0;", x = {
  createTextarea(t) {
    const e = document.createElement("textarea");
    return e.addEventListener("focusin", (r) => {
      r.stopPropagation();
    }), e.value = t, e.setAttribute("readonly", ""), e.style.cssText = w, e;
  }
}, c = {
  async requestClipboardPermission() {
    return navigator.permissions.query({
      name: "clipboard-write"
    });
  },
  async writeClipboard(t) {
    return (await c.requestClipboardPermission()).state === "granted" ? (await navigator.clipboard.writeText(t), !0) : !1;
  },
  writeClipboardExecCommand(t) {
    const e = x.createTextarea(t);
    if (document.body.appendChild(e), navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      e.contentEditable = "true", e.readOnly = !0;
      const n = document.createRange();
      n.selectNodeContents(e);
      const o = window.getSelection();
      o && (o.removeAllRanges(), o.addRange(n), e.setSelectionRange(0, 999999));
    } else
      e.select();
    const r = document.execCommand("copy");
    return document.body.removeChild(e), r;
  },
  async copy(t) {
    const e = typeof t == "function" ? t() : t, r = C.asString(e);
    if (c.writeClipboardExecCommand(r))
      return !0;
    await c.writeClipboard(r);
  }
}, i = new f(), E = {
  install(t) {
    const e = t.version[0] === "3" ? t.config.globalProperties : t.prototype;
    e.$clipboard = c.copy, t.directive("clipboard", {
      beforeMount(r, n) {
        const o = n.arg, a = n.value, s = typeof a == "function";
        if (o === "error" && s) {
          r.dataset.clipboardError = i.add(a);
          return;
        }
        if (o === "error" && s) {
          r.dataset.clipboardSuccess = i.add(a);
          return;
        }
        const l = async (p) => {
          var u;
          const b = await c.copy(a) ? r.dataset.clipboardSuccess : r.dataset.clipboardError;
          (u = i.get(b)) == null || u({ value: a, event: p });
        };
        r.dataset.clipboardClick = i.add(l), r.addEventListener("click", l);
      },
      unmounted(r) {
        const {
          clipboardSuccessHandler: n,
          clipboardErrorHandler: o,
          clipboardClickHandler: a
        } = r.dataset;
        if (n && i.delete(n), o && i.delete(o), a) {
          const s = i.get(a);
          s && (r.removeEventListener("click", s), i.delete(a));
        }
      },
      get bind() {
        return this.beforeMount;
      },
      get unbind() {
        return this.unmounted;
      }
    });
  }
};
export {
  c as Clipboard,
  E as default
};
//# sourceMappingURL=v-clipboard.es.js.map
