/* eink-dashboard-cards — built by esbuild */

// node_modules/@lit/reactive-element/css-tag.js
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = /* @__PURE__ */ Symbol();
var o = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t3, e4, o5) {
    if (this._$cssResult$ = true, o5 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t3, this.t = e4;
  }
  get styleSheet() {
    let t3 = this.o;
    const s4 = this.t;
    if (e && void 0 === t3) {
      const e4 = void 0 !== s4 && 1 === s4.length;
      e4 && (t3 = o.get(s4)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && o.set(s4, t3));
    }
    return t3;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
var i = (t3, ...e4) => {
  const o5 = 1 === t3.length ? t3[0] : e4.reduce((e5, s4, o6) => e5 + ((t4) => {
    if (true === t4._$cssResult$) return t4.cssText;
    if ("number" == typeof t4) return t4;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s4) + t3[o6 + 1], t3[0]);
  return new n(o5, t3, s);
};
var S = (s4, o5) => {
  if (e) s4.adoptedStyleSheets = o5.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
  else for (const e4 of o5) {
    const o6 = document.createElement("style"), n4 = t.litNonce;
    void 0 !== n4 && o6.setAttribute("nonce", n4), o6.textContent = e4.cssText, s4.appendChild(o6);
  }
};
var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
  let e4 = "";
  for (const s4 of t4.cssRules) e4 += s4.cssText;
  return r(e4);
})(t3) : t3;

// node_modules/@lit/reactive-element/reactive-element.js
var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t3, s4) => t3;
var u = { toAttribute(t3, s4) {
  switch (s4) {
    case Boolean:
      t3 = t3 ? l : null;
      break;
    case Object:
    case Array:
      t3 = null == t3 ? t3 : JSON.stringify(t3);
  }
  return t3;
}, fromAttribute(t3, s4) {
  let i5 = t3;
  switch (s4) {
    case Boolean:
      i5 = null !== t3;
      break;
    case Number:
      i5 = null === t3 ? null : Number(t3);
      break;
    case Object:
    case Array:
      try {
        i5 = JSON.parse(t3);
      } catch (t4) {
        i5 = null;
      }
  }
  return i5;
} };
var f = (t3, s4) => !i2(t3, s4);
var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
Symbol.metadata ?? (Symbol.metadata = /* @__PURE__ */ Symbol("metadata")), a.litPropertyMetadata ?? (a.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var y = class extends HTMLElement {
  static addInitializer(t3) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t3);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t3, s4 = b) {
    if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t3, s4), !s4.noAccessor) {
      const i5 = /* @__PURE__ */ Symbol(), h3 = this.getPropertyDescriptor(t3, i5, s4);
      void 0 !== h3 && e2(this.prototype, t3, h3);
    }
  }
  static getPropertyDescriptor(t3, s4, i5) {
    const { get: e4, set: r4 } = h(this.prototype, t3) ?? { get() {
      return this[s4];
    }, set(t4) {
      this[s4] = t4;
    } };
    return { get: e4, set(s5) {
      const h3 = e4?.call(this);
      r4?.call(this, s5), this.requestUpdate(t3, h3, i5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t3) {
    return this.elementProperties.get(t3) ?? b;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t3 = n2(this);
    t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t4 = this.properties, s4 = [...r2(t4), ...o2(t4)];
      for (const i5 of s4) this.createProperty(i5, t4[i5]);
    }
    const t3 = this[Symbol.metadata];
    if (null !== t3) {
      const s4 = litPropertyMetadata.get(t3);
      if (void 0 !== s4) for (const [t4, i5] of s4) this.elementProperties.set(t4, i5);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t4, s4] of this.elementProperties) {
      const i5 = this._$Eu(t4, s4);
      void 0 !== i5 && this._$Eh.set(i5, t4);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s4) {
    const i5 = [];
    if (Array.isArray(s4)) {
      const e4 = new Set(s4.flat(1 / 0).reverse());
      for (const s5 of e4) i5.unshift(c(s5));
    } else void 0 !== s4 && i5.push(c(s4));
    return i5;
  }
  static _$Eu(t3, s4) {
    const i5 = s4.attribute;
    return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
  }
  addController(t3) {
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
  }
  removeController(t3) {
    this._$EO?.delete(t3);
  }
  _$E_() {
    const t3 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
    for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
    t3.size > 0 && (this._$Ep = t3);
  }
  createRenderRoot() {
    const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t3, this.constructor.elementStyles), t3;
  }
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
  }
  enableUpdating(t3) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t3) => t3.hostDisconnected?.());
  }
  attributeChangedCallback(t3, s4, i5) {
    this._$AK(t3, i5);
  }
  _$ET(t3, s4) {
    const i5 = this.constructor.elementProperties.get(t3), e4 = this.constructor._$Eu(t3, i5);
    if (void 0 !== e4 && true === i5.reflect) {
      const h3 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
      this._$Em = t3, null == h3 ? this.removeAttribute(e4) : this.setAttribute(e4, h3), this._$Em = null;
    }
  }
  _$AK(t3, s4) {
    const i5 = this.constructor, e4 = i5._$Eh.get(t3);
    if (void 0 !== e4 && this._$Em !== e4) {
      const t4 = i5.getPropertyOptions(e4), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
      this._$Em = e4;
      const r4 = h3.fromAttribute(s4, t4.type);
      this[e4] = r4 ?? this._$Ej?.get(e4) ?? r4, this._$Em = null;
    }
  }
  requestUpdate(t3, s4, i5, e4 = false, h3) {
    if (void 0 !== t3) {
      const r4 = this.constructor;
      if (false === e4 && (h3 = this[t3]), i5 ?? (i5 = r4.getPropertyOptions(t3)), !((i5.hasChanged ?? f)(h3, s4) || i5.useDefault && i5.reflect && h3 === this._$Ej?.get(t3) && !this.hasAttribute(r4._$Eu(t3, i5)))) return;
      this.C(t3, s4, i5);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t3, s4, { useDefault: i5, reflect: e4, wrapped: h3 }, r4) {
    i5 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t3) && (this._$Ej.set(t3, r4 ?? s4 ?? this[t3]), true !== h3 || void 0 !== r4) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t3, s4)), true === e4 && this._$Em !== t3 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t3));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t4) {
      Promise.reject(t4);
    }
    const t3 = this.scheduleUpdate();
    return null != t3 && await t3, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [t5, s5] of this._$Ep) this[t5] = s5;
        this._$Ep = void 0;
      }
      const t4 = this.constructor.elementProperties;
      if (t4.size > 0) for (const [s5, i5] of t4) {
        const { wrapped: t5 } = i5, e4 = this[s5];
        true !== t5 || this._$AL.has(s5) || void 0 === e4 || this.C(s5, void 0, i5, e4);
      }
    }
    let t3 = false;
    const s4 = this._$AL;
    try {
      t3 = this.shouldUpdate(s4), t3 ? (this.willUpdate(s4), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s4)) : this._$EM();
    } catch (s5) {
      throw t3 = false, this._$EM(), s5;
    }
    t3 && this._$AE(s4);
  }
  willUpdate(t3) {
  }
  _$AE(t3) {
    this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t3) {
    return true;
  }
  update(t3) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t4) => this._$ET(t4, this[t4]))), this._$EM();
  }
  updated(t3) {
  }
  firstUpdated(t3) {
  }
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ?? (a.reactiveElementVersions = [])).push("2.1.2");

// node_modules/lit-html/lit-html.js
var t2 = globalThis;
var i3 = (t3) => t3;
var s2 = t2.trustedTypes;
var e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
var h2 = "$lit$";
var o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var n3 = "?" + o3;
var r3 = `<${n3}>`;
var l2 = document;
var c3 = () => l2.createComment("");
var a2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
var u2 = Array.isArray;
var d2 = (t3) => u2(t3) || "function" == typeof t3?.[Symbol.iterator];
var f2 = "[ 	\n\f\r]";
var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y2 = /^(?:script|style|textarea|title)$/i;
var x = (t3) => (i5, ...s4) => ({ _$litType$: t3, strings: i5, values: s4 });
var b2 = x(1);
var w = x(2);
var T = x(3);
var E = /* @__PURE__ */ Symbol.for("lit-noChange");
var A = /* @__PURE__ */ Symbol.for("lit-nothing");
var C = /* @__PURE__ */ new WeakMap();
var P = l2.createTreeWalker(l2, 129);
function V(t3, i5) {
  if (!u2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i5) : i5;
}
var N = (t3, i5) => {
  const s4 = t3.length - 1, e4 = [];
  let n4, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = v;
  for (let i6 = 0; i6 < s4; i6++) {
    const s5 = t3[i6];
    let a3, u3, d3 = -1, f3 = 0;
    for (; f3 < s5.length && (c4.lastIndex = f3, u3 = c4.exec(s5), null !== u3); ) f3 = c4.lastIndex, c4 === v ? "!--" === u3[1] ? c4 = _ : void 0 !== u3[1] ? c4 = m : void 0 !== u3[2] ? (y2.test(u3[2]) && (n4 = RegExp("</" + u3[2], "g")), c4 = p2) : void 0 !== u3[3] && (c4 = p2) : c4 === p2 ? ">" === u3[0] ? (c4 = n4 ?? v, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? p2 : '"' === u3[3] ? $ : g) : c4 === $ || c4 === g ? c4 = p2 : c4 === _ || c4 === m ? c4 = v : (c4 = p2, n4 = void 0);
    const x2 = c4 === p2 && t3[i6 + 1].startsWith("/>") ? " " : "";
    l3 += c4 === v ? s5 + r3 : d3 >= 0 ? (e4.push(a3), s5.slice(0, d3) + h2 + s5.slice(d3) + o3 + x2) : s5 + o3 + (-2 === d3 ? i6 : x2);
  }
  return [V(t3, l3 + (t3[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e4];
};
var S2 = class _S {
  constructor({ strings: t3, _$litType$: i5 }, e4) {
    let r4;
    this.parts = [];
    let l3 = 0, a3 = 0;
    const u3 = t3.length - 1, d3 = this.parts, [f3, v2] = N(t3, i5);
    if (this.el = _S.createElement(f3, e4), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
      const t4 = this.el.content.firstChild;
      t4.replaceWith(...t4.childNodes);
    }
    for (; null !== (r4 = P.nextNode()) && d3.length < u3; ) {
      if (1 === r4.nodeType) {
        if (r4.hasAttributes()) for (const t4 of r4.getAttributeNames()) if (t4.endsWith(h2)) {
          const i6 = v2[a3++], s4 = r4.getAttribute(t4).split(o3), e5 = /([.?@])?(.*)/.exec(i6);
          d3.push({ type: 1, index: l3, name: e5[2], strings: s4, ctor: "." === e5[1] ? I : "?" === e5[1] ? L : "@" === e5[1] ? z : H }), r4.removeAttribute(t4);
        } else t4.startsWith(o3) && (d3.push({ type: 6, index: l3 }), r4.removeAttribute(t4));
        if (y2.test(r4.tagName)) {
          const t4 = r4.textContent.split(o3), i6 = t4.length - 1;
          if (i6 > 0) {
            r4.textContent = s2 ? s2.emptyScript : "";
            for (let s4 = 0; s4 < i6; s4++) r4.append(t4[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l3 });
            r4.append(t4[i6], c3());
          }
        }
      } else if (8 === r4.nodeType) if (r4.data === n3) d3.push({ type: 2, index: l3 });
      else {
        let t4 = -1;
        for (; -1 !== (t4 = r4.data.indexOf(o3, t4 + 1)); ) d3.push({ type: 7, index: l3 }), t4 += o3.length - 1;
      }
      l3++;
    }
  }
  static createElement(t3, i5) {
    const s4 = l2.createElement("template");
    return s4.innerHTML = t3, s4;
  }
};
function M(t3, i5, s4 = t3, e4) {
  if (i5 === E) return i5;
  let h3 = void 0 !== e4 ? s4._$Co?.[e4] : s4._$Cl;
  const o5 = a2(i5) ? void 0 : i5._$litDirective$;
  return h3?.constructor !== o5 && (h3?._$AO?.(false), void 0 === o5 ? h3 = void 0 : (h3 = new o5(t3), h3._$AT(t3, s4, e4)), void 0 !== e4 ? (s4._$Co ?? (s4._$Co = []))[e4] = h3 : s4._$Cl = h3), void 0 !== h3 && (i5 = M(t3, h3._$AS(t3, i5.values), h3, e4)), i5;
}
var R = class {
  constructor(t3, i5) {
    this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t3) {
    const { el: { content: i5 }, parts: s4 } = this._$AD, e4 = (t3?.creationScope ?? l2).importNode(i5, true);
    P.currentNode = e4;
    let h3 = P.nextNode(), o5 = 0, n4 = 0, r4 = s4[0];
    for (; void 0 !== r4; ) {
      if (o5 === r4.index) {
        let i6;
        2 === r4.type ? i6 = new k(h3, h3.nextSibling, this, t3) : 1 === r4.type ? i6 = new r4.ctor(h3, r4.name, r4.strings, this, t3) : 6 === r4.type && (i6 = new Z(h3, this, t3)), this._$AV.push(i6), r4 = s4[++n4];
      }
      o5 !== r4?.index && (h3 = P.nextNode(), o5++);
    }
    return P.currentNode = l2, e4;
  }
  p(t3) {
    let i5 = 0;
    for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t3, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t3[i5])), i5++;
  }
};
var k = class _k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t3, i5, s4, e4) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s4, this.options = e4, this._$Cv = e4?.isConnected ?? true;
  }
  get parentNode() {
    let t3 = this._$AA.parentNode;
    const i5 = this._$AM;
    return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t3, i5 = this) {
    t3 = M(this, t3, i5), a2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== E && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : d2(t3) ? this.k(t3) : this._(t3);
  }
  O(t3) {
    return this._$AA.parentNode.insertBefore(t3, this._$AB);
  }
  T(t3) {
    this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
  }
  _(t3) {
    this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(l2.createTextNode(t3)), this._$AH = t3;
  }
  $(t3) {
    const { values: i5, _$litType$: s4 } = t3, e4 = "number" == typeof s4 ? this._$AC(t3) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
    if (this._$AH?._$AD === e4) this._$AH.p(i5);
    else {
      const t4 = new R(e4, this), s5 = t4.u(this.options);
      t4.p(i5), this.T(s5), this._$AH = t4;
    }
  }
  _$AC(t3) {
    let i5 = C.get(t3.strings);
    return void 0 === i5 && C.set(t3.strings, i5 = new S2(t3)), i5;
  }
  k(t3) {
    u2(this._$AH) || (this._$AH = [], this._$AR());
    const i5 = this._$AH;
    let s4, e4 = 0;
    for (const h3 of t3) e4 === i5.length ? i5.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i5[e4], s4._$AI(h3), e4++;
    e4 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e4), i5.length = e4);
  }
  _$AR(t3 = this._$AA.nextSibling, s4) {
    for (this._$AP?.(false, true, s4); t3 !== this._$AB; ) {
      const s5 = i3(t3).nextSibling;
      i3(t3).remove(), t3 = s5;
    }
  }
  setConnected(t3) {
    void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
  }
};
var H = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t3, i5, s4, e4, h3) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e4, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
  }
  _$AI(t3, i5 = this, s4, e4) {
    const h3 = this.strings;
    let o5 = false;
    if (void 0 === h3) t3 = M(this, t3, i5, 0), o5 = !a2(t3) || t3 !== this._$AH && t3 !== E, o5 && (this._$AH = t3);
    else {
      const e5 = t3;
      let n4, r4;
      for (t3 = h3[0], n4 = 0; n4 < h3.length - 1; n4++) r4 = M(this, e5[s4 + n4], i5, n4), r4 === E && (r4 = this._$AH[n4]), o5 || (o5 = !a2(r4) || r4 !== this._$AH[n4]), r4 === A ? t3 = A : t3 !== A && (t3 += (r4 ?? "") + h3[n4 + 1]), this._$AH[n4] = r4;
    }
    o5 && !e4 && this.j(t3);
  }
  j(t3) {
    t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
  }
};
var I = class extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t3) {
    this.element[this.name] = t3 === A ? void 0 : t3;
  }
};
var L = class extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t3) {
    this.element.toggleAttribute(this.name, !!t3 && t3 !== A);
  }
};
var z = class extends H {
  constructor(t3, i5, s4, e4, h3) {
    super(t3, i5, s4, e4, h3), this.type = 5;
  }
  _$AI(t3, i5 = this) {
    if ((t3 = M(this, t3, i5, 0) ?? A) === E) return;
    const s4 = this._$AH, e4 = t3 === A && s4 !== A || t3.capture !== s4.capture || t3.once !== s4.once || t3.passive !== s4.passive, h3 = t3 !== A && (s4 === A || e4);
    e4 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
  }
  handleEvent(t3) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
  }
};
var Z = class {
  constructor(t3, i5, s4) {
    this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3) {
    M(this, t3);
  }
};
var B = t2.litHtmlPolyfillSupport;
B?.(S2, k), (t2.litHtmlVersions ?? (t2.litHtmlVersions = [])).push("3.3.3");
var D = (t3, i5, s4) => {
  const e4 = s4?.renderBefore ?? i5;
  let h3 = e4._$litPart$;
  if (void 0 === h3) {
    const t4 = s4?.renderBefore ?? null;
    e4._$litPart$ = h3 = new k(i5.insertBefore(c3(), t4), t4, void 0, s4 ?? {});
  }
  return h3._$AI(t3), h3;
};

// node_modules/lit-element/lit-element.js
var s3 = globalThis;
var i4 = class extends y {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a;
    const t3 = super.createRenderRoot();
    return (_a = this.renderOptions).renderBefore ?? (_a.renderBefore = t3.firstChild), t3;
  }
  update(t3) {
    const r4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(r4, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return E;
  }
};
i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
var o4 = s3.litElementPolyfillSupport;
o4?.({ LitElement: i4 });
(s3.litElementVersions ?? (s3.litElementVersions = [])).push("4.2.2");

// src/shared/hass.ts
function registerCard(card) {
  window.customCards = window.customCards ?? [];
  window.customCards.push({ preview: true, ...card });
}

// src/shared/palette.ts
var INK = {
  black: "#000000",
  white: "#ffffff",
  red: "#ff0000",
  yellow: "#ffd400",
  // slightly deepened so it survives dithering as "yellow", not near-white
  blue: "#0000ff",
  green: "#008000"
};
var LEVEL_INK = {
  low: INK.green,
  mid: INK.yellow,
  high: INK.red
};

// src/cards/price-chart-card.ts
var BARS_PX = 96;
var isoOf = (p3) => (p3.start ? new Date(p3.start) : /* @__PURE__ */ new Date(`${p3.date} ${p3.time}`)).getTime();
var weekday = (date) => new Date(date).toLocaleDateString("en-GB", { weekday: "short" });
var EinkPriceCard = class extends i4 {
  constructor() {
    super(...arguments);
    this._config = {};
  }
  setConfig(config) {
    if (!config?.entity) throw new Error("eink-price-card: 'entity' is required");
    this._config = { title: "Electricity", low_threshold: 50, high_threshold: 200, ...config };
  }
  getCardSize() {
    return 3;
  }
  series() {
    const ent = this.hass?.states[this._config.entity];
    if (!ent) return null;
    const pick = (q, h3) => {
      const quarterly = ent.attributes[q];
      const hourly = ent.attributes[h3];
      return quarterly?.length ? quarterly : hourly ?? [];
    };
    const today = pick("current_day_quarterly", "current_day");
    const tomorrow = pick("next_day_quarterly", "next_day");
    if (!today.length) return null;
    const lowT = this._config.low_threshold;
    const highT = this._config.high_threshold;
    const toPoint = (p3, day) => {
      const d3 = new Date(isoOf(p3));
      const ore = Math.round(Number(p3.price) * 100);
      return {
        ms: d3.getTime(),
        hour: d3.getHours(),
        minute: d3.getMinutes(),
        date: p3.date,
        ore,
        day,
        level: ore < lowT ? "low" : ore > highT ? "high" : "mid"
      };
    };
    const points = [
      ...today.map((p3) => toPoint(p3, 0)),
      ...tomorrow.map((p3) => toPoint(p3, 1))
    ];
    return { points, todayCount: today.length, max: Math.max(...points.map((p3) => p3.ore)) };
  }
  /** Start index of the cheapest contiguous window of length w (or -1). */
  cheapestWindow(points, w2) {
    if (w2 <= 0 || w2 > points.length) return -1;
    let sum = points.slice(0, w2).reduce((a3, p3) => a3 + p3.ore, 0);
    let best = sum;
    let bestAt = 0;
    for (let i5 = w2; i5 < points.length; i5++) {
      sum += points[i5].ore - points[i5 - w2].ore;
      if (sum < best) {
        best = sum;
        bestAt = i5 - w2 + 1;
      }
    }
    return bestAt;
  }
  render() {
    const data = this.series();
    if (!data) {
      return b2`<div class="card empty">No price data (${this._config.entity})</div>`;
    }
    const { points, todayCount, max } = data;
    const n4 = points.length;
    const quarter = todayCount >= 96;
    const pct = (i5) => i5 / (n4 - 1) * 100;
    const step = max <= 200 ? 50 : 100;
    const yticks = [];
    for (let v2 = 0; v2 < max; v2 += step) yticks.push(v2);
    const now = Date.now();
    let nowIdx = 0;
    points.forEach((p3, i5) => {
      if (p3.day === 0 && p3.ms <= now) nowIdx = i5;
    });
    const w2 = this._config.cheapest_window ?? (quarter ? 8 : 2);
    const cheapAt = this.cheapestWindow(points, w2);
    const xticks = points.map((p3, i5) => ({ i: i5, p: p3 })).filter(({ p: p3 }) => p3.minute === 0 && p3.hour % 6 === 0);
    const nowBarPx = Math.max(2, points[nowIdx].ore / max * 100) / 100 * BARS_PX;
    const nowLineH = Math.max(0, BARS_PX - nowBarPx - 5);
    return b2`
      <div class="card">
        <div class="head">
          <span class="title">${this._config.title}</span>
          <span class="now">
            <span class="now-label">Now</span>${points[nowIdx].ore}
            <small>öre/kWh</small>
          </span>
        </div>
        <div class="chart">
          <div class="row">
            <div class="plot">
              <div class="bars">
                ${points.map(
      (p3) => b2`<div class="bar ${p3.level}" style="height:${Math.max(2, p3.ore / max * 100)}%"></div>`
    )}
              </div>
              <div class="now-line" style="left:${pct(nowIdx)}%;height:${nowLineH}px"></div>
              ${todayCount < n4 ? b2`<div class="divider" style="left:${pct(todayCount - 0.5)}%"></div>` : A}
            </div>
            <div class="yaxis">
              ${yticks.map(
      (v2) => b2`<span class="ylabel" style="bottom:${v2 / max * 100}%">${v2}</span>`
    )}
            </div>
          </div>
          <div class="marks">
            ${cheapAt >= 0 ? b2`<div
                  class="window"
                  style="left:${pct(cheapAt)}%;width:${(w2 - 1) / (n4 - 1) * 100}%"
                ></div>` : A}
          </div>
          <div class="axis">
            ${xticks.map(
      ({ i: i5, p: p3 }, idx) => b2`<span
                  class="${p3.hour === 0 ? "day" : ""} ${idx === 0 ? "edge-left" : ""}"
                  style="left:${pct(i5)}%"
                  >${p3.hour === 0 ? weekday(p3.date) : String(p3.hour).padStart(2, "0")}</span
                >`
    )}
          </div>
        </div>
      </div>
    `;
  }
};
EinkPriceCard.properties = {
  hass: { attribute: false },
  _config: { state: true }
};
EinkPriceCard.styles = i`
    :host {
      --ink: ${r(INK.black)};
      --paper: ${r(INK.white)};
      --low: ${r(LEVEL_INK.low)};
      --mid: ${r(LEVEL_INK.mid)};
      --high: ${r(LEVEL_INK.high)};
      --accent: ${r(INK.blue)};
      display: block;
    }
    .card {
      background: var(--paper);
      color: var(--ink);
      font-family: Helvetica, Arial, sans-serif;
      padding: 10px 14px 6px;
    }
    .empty {
      padding: 24px;
      font-weight: 700;
    }
    .head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 8px;
    }
    .title,
    .now-label {
      font-size: 15px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .now {
      font-size: 26px;
      font-weight: 800;
      line-height: 1;
    }
    .now-label {
      margin-right: 8px;
    }
    .now small {
      font-size: 12px;
      font-weight: 700;
    }
    .chart {
      position: relative;
    }
    .row {
      display: flex;
      align-items: stretch;
    }
    .plot {
      position: relative;
      flex: 1 1 auto;
      height: ${BARS_PX}px;
      border-bottom: 2px solid var(--ink);
    }
    .bars {
      display: flex;
      align-items: flex-end;
      gap: 1px;
      height: 100%;
    }
    .bar {
      flex: 1 1 0;
      min-width: 0;
      border-radius: 2px 2px 0 0;
    }
    .bar.low {
      background: var(--low);
    }
    .bar.mid {
      background: var(--mid);
    }
    .bar.high {
      background: var(--high);
    }
    /* "Now" marker: a downward arrow above the current bar. */
    .now-line {
      position: absolute;
      top: 0;
      width: 0;
      border-left: 2px solid var(--ink);
      transform: translateX(-50%);
    }
    .now-line::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -1px;
      transform: translateX(-50%);
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 8px solid var(--ink); /* downward-pointing arrowhead */
    }
    /* Today | tomorrow split. */
    .divider {
      position: absolute;
      top: 0;
      height: 100%;
      border-left: 2px dashed var(--ink);
    }
    /* Cheapest-window marker, in its own strip just below the bars. */
    .marks {
      position: relative;
      height: 6px;
      margin-top: 3px;
      margin-right: 32px; /* align 0–100% with .plot, not .yaxis */
    }
    .window {
      position: absolute;
      top: 0;
      height: 5px;
      background: var(--accent);
      border-radius: 3px;
    }
    .yaxis {
      position: relative;
      width: 32px;
      flex: 0 0 32px;
    }
    .ylabel {
      position: absolute;
      left: 5px;
      transform: translateY(50%);
      font-size: 12px;
      font-weight: 700;
      color: var(--ink);
    }
    .axis {
      position: relative;
      height: 16px;
      margin-top: 2px;
      margin-right: 32px; /* align the 0–100% range with .plot, not .yaxis */
    }
    .axis span {
      position: absolute;
      transform: translateX(-50%);
      font-size: 12px;
      font-weight: 700;
      color: var(--ink);
    }
    .axis span.day {
      font-weight: 800;
      text-transform: uppercase;
    }
    /* Keep the first label from running off the left edge. */
    .axis span.edge-left {
      transform: translateX(0);
    }
  `;
registerCard({
  type: "eink-price-card",
  name: "E-ink Price Card",
  description: "Electricity price bars (\xF6re/kWh) coloured by fixed thresholds, for the e-ink panel."
});

// src/shared/weather-icons.ts
var cloud = (fill = "var(--ink)") => w`
  <g fill=${fill}>
    <circle cx="24" cy="32" r="11" />
    <circle cx="37" cy="24" r="14" />
    <circle cx="49" cy="32" r="10" />
    <rect x="22" y="30" width="29" height="12" rx="3" />
  </g>`;
var sun = (cx = 32, cy = 22, r4 = 11) => w`
  <g stroke="var(--sun)" stroke-width="3" stroke-linecap="round">
    ${[0, 45, 90, 135, 180, 225, 270, 315].map((a3) => {
  const rad = a3 * Math.PI / 180;
  return w`<line
        x1=${cx + Math.cos(rad) * (r4 + 4)} y1=${cy + Math.sin(rad) * (r4 + 4)}
        x2=${cx + Math.cos(rad) * (r4 + 9)} y2=${cy + Math.sin(rad) * (r4 + 9)} />`;
})}
  </g>
  <circle cx=${cx} cy=${cy} r=${r4} fill="var(--sun)" />`;
var rainLines = w`
  <g stroke="var(--rain)" stroke-width="3" stroke-linecap="round">
    <line x1="24" y1="42" x2="20" y2="48" />
    <line x1="34" y1="42" x2="30" y2="48" />
    <line x1="44" y1="42" x2="40" y2="48" />
  </g>`;
var snowDots = w`
  <g fill="var(--rain)">
    <circle cx="24" cy="45" r="2.5" />
    <circle cx="34" cy="46" r="2.5" />
    <circle cx="44" cy="45" r="2.5" />
  </g>`;
var ICONS = {
  sunny: () => sun(32, 24, 13),
  "clear-night": () => w`<path
      d="M44 24a16 16 0 1 1-16-16 13 13 0 0 0 16 16z" fill="var(--ink)" />`,
  partlycloudy: () => w`${sun(22, 16, 9)}${cloud()}`,
  cloudy: () => cloud(),
  fog: () => w`
    ${cloud("var(--ink)")}
    <g stroke="var(--paper)" stroke-width="2.5">
      <line x1="26" y1="30" x2="48" y2="30" /><line x1="26" y1="36" x2="48" y2="36" />
    </g>`,
  rainy: () => w`${cloud()}${rainLines}`,
  pouring: () => w`${cloud()}${rainLines}`,
  snowy: () => w`${cloud()}${snowDots}`,
  "snowy-rainy": () => w`${cloud()}${snowDots}`,
  lightning: () => w`${cloud()}<path d="M34 40l-8 0 6-10-2 0 4-8 8 0-6 9 4 0z" fill="var(--sun)" />`,
  "lightning-rainy": () => w`${cloud()}<path d="M34 40l-8 0 6-10-2 0 4-8 8 0-6 9 4 0z" fill="var(--sun)" />`,
  windy: () => w`
    <g stroke="var(--ink)" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M10 20h30a6 6 0 1 0-6-6" /><path d="M10 30h40a6 6 0 1 1-6 6" />
    </g>`
};
function weatherIcon(condition) {
  return (ICONS[condition] ?? cloud)();
}

// src/cards/weather-card.ts
var weekday2 = (iso) => new Date(iso).toLocaleDateString("en-GB", { weekday: "short" });
var humanize = (condition) => condition.replace(/-/g, " ").replace(/^\w/, (c4) => c4.toUpperCase());
var EinkWeatherCard = class extends i4 {
  constructor() {
    super(...arguments);
    this._config = {};
    this._forecast = [];
    this._loaded = false;
  }
  setConfig(config) {
    if (!config?.entity) throw new Error("eink-weather-card: 'entity' is required");
    this._config = { days: 4, ...config };
  }
  getCardSize() {
    return 4;
  }
  willUpdate(changed) {
    if (changed.has("hass") && this.hass && !this._loaded) {
      this._loaded = true;
      void this._loadForecast();
    }
  }
  async _loadForecast() {
    const entity = this._config.entity;
    try {
      const resp = await this.hass.callApi(
        "POST",
        "services/weather/get_forecasts?return_response=true",
        { entity_id: entity, type: "daily" }
      );
      const raw = resp?.service_response?.[entity]?.forecast ?? [];
      this._forecast = raw.map((f3) => ({
        date: f3.datetime,
        condition: f3.condition,
        tempHigh: f3.temperature,
        tempLow: f3.templow,
        precipitation: f3.precipitation,
        precipProbability: f3.precipitation_probability
      }));
    } catch {
    }
  }
  render() {
    const ent = this.hass?.states[this._config.entity];
    if (!ent) return b2`<div class="card empty">No weather (${this._config.entity})</div>`;
    const days = this._forecast.slice(0, this._config.days);
    const lows = days.map((d3) => d3.tempLow);
    const highs = days.map((d3) => d3.tempHigh);
    const lo = Math.min(...lows, ent.attributes["temperature"] ?? Infinity);
    const hi = Math.max(...highs, ent.attributes["temperature"] ?? -Infinity);
    const span = Math.max(1, hi - lo);
    const frac = (t3) => (t3 - lo) / span * 100;
    return b2`
      <div class="card">
        <div class="current">
          <div class="icon-lg">
            <svg viewBox="0 0 64 48">${weatherIcon(ent.state)}</svg>
          </div>
          <div class="cur-text">
            <div class="cond">${humanize(ent.state)}</div>
            <div class="temp">${Math.round(ent.attributes["temperature"])}°</div>
          </div>
        </div>
        <div class="forecast">
          ${days.map(
      (d3) => b2`
              <div class="row">
                <span class="dow">${weekday2(d3.date)}</span>
                <svg class="icon-sm" viewBox="0 0 64 48">${weatherIcon(d3.condition)}</svg>
                <span class="lo">${Math.round(d3.tempLow)}°</span>
                <span class="bar">
                  <span
                    class="fill"
                    style="left:${frac(d3.tempLow)}%;right:${100 - frac(d3.tempHigh)}%"
                  ></span>
                </span>
                <span class="hi">${Math.round(d3.tempHigh)}°</span>
              </div>
            `
    )}
        </div>
      </div>
    `;
  }
};
EinkWeatherCard.properties = {
  hass: { attribute: false },
  _config: { state: true },
  _forecast: { state: true }
};
EinkWeatherCard.styles = i`
    :host {
      --ink: ${r(INK.black)};
      --paper: ${r(INK.white)};
      --sun: ${r(INK.yellow)};
      --rain: ${r(INK.blue)};
      --track: #c8c8c8;
      display: block;
    }
    .card {
      background: var(--paper);
      color: var(--ink);
      font-family: Helvetica, Arial, sans-serif;
      padding: 12px 16px;
    }
    .empty {
      padding: 24px;
      font-weight: 700;
    }
    .current {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }
    .icon-lg svg {
      width: 96px;
      height: 72px;
      display: block;
    }
    .cur-text {
      margin-left: auto;
      text-align: right;
    }
    .cond {
      font-size: 16px;
      font-weight: 700;
    }
    .temp {
      font-size: 54px;
      font-weight: 800;
      line-height: 1;
    }
    .forecast {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 18px;
      font-weight: 700;
    }
    .dow {
      width: 42px;
    }
    .icon-sm {
      width: 30px;
      height: 24px;
      flex: 0 0 auto;
    }
    .lo {
      width: 38px;
      text-align: right;
    }
    .hi {
      width: 38px;
      text-align: right;
    }
    .bar {
      position: relative;
      flex: 1 1 auto;
      height: 10px;
      background: var(--track);
      border-radius: 5px;
    }
    .fill {
      position: absolute;
      top: 0;
      bottom: 0;
      background: var(--ink);
      border-radius: 5px;
    }
  `;
registerCard({
  type: "eink-weather-card",
  name: "E-ink Weather Card",
  description: "Current conditions + daily forecast with temperature range bars, for the e-ink panel."
});

// src/cards/calendar-card.ts
var startOfDay = (d3) => {
  const x2 = new Date(d3);
  x2.setHours(0, 0, 0, 0);
  return x2;
};
var fmtTime = (iso) => new Date(iso).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
var EinkCalendarCard = class extends i4 {
  constructor() {
    super(...arguments);
    this._config = {};
    this._events = [];
    this._loaded = false;
  }
  setConfig(config) {
    this._config = { title: "Calendar", days: 3, entities: [], ...config };
  }
  getCardSize() {
    return 6;
  }
  sources() {
    return (this._config.entities ?? []).map(
      (e4) => typeof e4 === "string" ? { entity: e4 } : e4
    );
  }
  willUpdate(changed) {
    if (changed.has("hass") && this.hass && !this._loaded) {
      this._loaded = true;
      void this._loadEvents();
    }
  }
  async _loadEvents() {
    const start = startOfDay(/* @__PURE__ */ new Date());
    const end = new Date(start.getTime() + (this._config.days ?? 3) * 864e5);
    const qs = `start=${encodeURIComponent(start.toISOString())}&end=${encodeURIComponent(end.toISOString())}`;
    try {
      const lists = await Promise.all(
        this.sources().map(async (src) => {
          const raw = await this.hass.callApi("GET", `calendars/${src.entity}?${qs}`) ?? [];
          return raw.map((e4) => ({
            start: e4.start?.dateTime ?? e4.start?.date,
            end: e4.end?.dateTime ?? e4.end?.date,
            title: e4.summary ?? "(busy)",
            location: e4.location,
            allDay: Boolean(e4.start?.date),
            color: src.color ?? "var(--ink)"
          }));
        })
      );
      this._events = lists.flat().sort((a3, b3) => a3.start.localeCompare(b3.start));
    } catch {
    }
  }
  render() {
    const days = this._config.days ?? 3;
    const today = startOfDay(/* @__PURE__ */ new Date());
    return b2`
      <div class="card">
        <div class="title">${this._config.title}</div>
        <div class="days">
          ${Array.from({ length: days }, (_2, i5) => {
      const day = new Date(today.getTime() + i5 * 864e5);
      const dayEvents = this._events.filter(
        (e4) => startOfDay(new Date(e4.start)).getTime() === day.getTime()
      );
      return this.renderDay(day, dayEvents);
    })}
        </div>
      </div>
    `;
  }
  renderDay(day, events) {
    return b2`
      <div class="day">
        <div class="date">
          <span class="dow">${day.toLocaleDateString("en-GB", { weekday: "short" })}</span>
          <span class="num">${day.getDate()}</span>
          <span class="mon">${day.toLocaleDateString("en-GB", { month: "short" })}</span>
        </div>
        <div class="events">
          ${events.length === 0 ? b2`<div class="event empty"><span class="txt muted">No events</span></div>` : events.map(
      (e4) => b2`
                  <div class="event">
                    <span class="rail" style="background:${e4.color}"></span>
                    <span class="txt">
                      <span class="etitle">${e4.title}</span>
                      ${e4.allDay ? A : b2`<span class="etime">${fmtTime(e4.start)}</span>`}
                      ${e4.location ? b2`<span class="eloc">${e4.location}</span>` : A}
                    </span>
                  </div>
                `
    )}
        </div>
      </div>
    `;
  }
};
EinkCalendarCard.properties = {
  hass: { attribute: false },
  _config: { state: true },
  _events: { state: true }
};
EinkCalendarCard.styles = i`
    :host {
      --ink: ${r(INK.black)};
      --paper: ${r(INK.white)};
      display: block;
    }
    .card {
      background: var(--paper);
      color: var(--ink);
      font-family: Helvetica, Arial, sans-serif;
      padding: 12px 16px;
    }
    .title {
      font-size: 15px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 10px;
    }
    .days {
      display: flex;
      flex-direction: column;
    }
    .day {
      display: flex;
      gap: 14px;
      padding: 10px 0;
      border-top: 2px solid var(--ink);
    }
    .day:first-child {
      border-top: none;
    }
    .date {
      width: 46px;
      flex: 0 0 46px;
      text-align: center;
      line-height: 1.05;
    }
    .date .dow {
      display: block;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
    }
    .date .num {
      display: block;
      font-size: 30px;
      font-weight: 800;
    }
    .date .mon {
      display: block;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
    }
    .events {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      gap: 7px;
      justify-content: center;
    }
    .event {
      display: flex;
      gap: 9px;
      align-items: stretch;
    }
    .rail {
      flex: 0 0 4px;
      border-radius: 2px;
    }
    .event.empty .rail {
      display: none;
    }
    .txt {
      display: flex;
      flex-direction: column;
    }
    .etitle {
      font-size: 18px;
      font-weight: 700;
    }
    .etime,
    .eloc {
      font-size: 13px;
      font-weight: 700;
    }
    .eloc {
      color: var(--ink);
      opacity: 0.85;
    }
    .muted {
      font-size: 16px;
      font-style: italic;
    }
  `;
registerCard({
  type: "eink-calendar-card",
  name: "E-ink Calendar Card",
  description: "Day-grouped calendar agenda with colour-coded events, for the e-ink panel."
});

// src/cards/conditions-card.ts
var EinkConditionsCard = class extends i4 {
  constructor() {
    super(...arguments);
    this._config = {};
  }
  setConfig(config) {
    this._config = { items: [], ...config };
  }
  getCardSize() {
    return 1;
  }
  value(item) {
    const ent = this.hass?.states[item.entity];
    if (!ent || ent.state === "unavailable" || ent.state === "unknown") {
      return { value: "\u2014", unit: "" };
    }
    const num = Number(ent.state);
    const value = Number.isFinite(num) ? num.toFixed(item.decimals ?? 0) : ent.state;
    return { value, unit: ent.attributes["unit_of_measurement"] ?? "" };
  }
  render() {
    const items = this._config.items ?? [];
    return b2`
      <div class="card">
        ${items.map((item) => {
      const { value, unit } = this.value(item);
      return b2`
            <div class="tile">
              <div class="val">${value}<span class="unit">${unit}</span></div>
              <div class="lbl">${item.label}</div>
            </div>
          `;
    })}
      </div>
    `;
  }
};
EinkConditionsCard.properties = {
  hass: { attribute: false },
  _config: { state: true }
};
EinkConditionsCard.styles = i`
    :host {
      --ink: ${r(INK.black)};
      --paper: ${r(INK.white)};
      display: block;
    }
    .card {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      background: var(--paper);
      color: var(--ink);
      font-family: Helvetica, Arial, sans-serif;
      padding: 7px 16px;
    }
    .tile {
      flex: 1 1 0;
      min-width: 0;
    }
    .val {
      font-size: 25px;
      font-weight: 800;
      line-height: 1;
    }
    .unit {
      font-size: 13px;
      font-weight: 700;
      margin-left: 2px;
    }
    .lbl {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-top: 3px;
    }
  `;
registerCard({
  type: "eink-conditions-card",
  name: "E-ink Conditions Card",
  description: "Compact strip of sensor tiles (temperature, CO\u2082, \u2026) for the e-ink panel."
});

// src/cards/panel-card.ts
var EinkPanelCard = class extends i4 {
  constructor() {
    super(...arguments);
    this._config = {};
    this._children = [];
    this._buildToken = 0;
  }
  setConfig(config) {
    this._config = config ?? {};
  }
  getCardSize() {
    return 10;
  }
  updated(changed) {
    if (changed.has("_config")) {
      this._buildToken += 1;
      void this._build(this._buildToken);
    } else if (changed.has("hass")) {
      this._forwardHass();
    }
  }
  async _build(token) {
    const specs = [
      { slot: "weather", cfg: this._config.weather, defaultType: "custom:eink-weather-card" },
      { slot: "price", cfg: this._config.price, defaultType: "custom:eink-price-card" },
      { slot: "calendar", cfg: this._config.calendar, defaultType: "custom:eink-calendar-card" }
    ];
    if (this._config.conditions) {
      specs.splice(1, 0, {
        slot: "conditions",
        cfg: this._config.conditions,
        defaultType: "custom:eink-conditions-card"
      });
    }
    const helpers = window.loadCardHelpers ? await window.loadCardHelpers() : null;
    if (token !== this._buildToken) return;
    this._children = [];
    for (const { slot, cfg, defaultType } of specs) {
      const host = this.renderRoot.querySelector(`.${slot}`);
      if (!host) continue;
      const config = { type: defaultType, ...cfg ?? {} };
      const el = helpers ? helpers.createCardElement(config) : this._fallbackCard(config);
      host.replaceChildren(el);
      this._children.push(el);
    }
    this._forwardHass();
  }
  /** Used only if loadCardHelpers is unavailable (it always is in HA). */
  _fallbackCard(config) {
    const el = document.createElement(String(config.type).replace(/^custom:/, ""));
    el.setConfig?.(config);
    return el;
  }
  _forwardHass() {
    if (!this.hass) return;
    for (const child of this._children) child.hass = this.hass;
  }
  render() {
    return b2`
      <div class="panel">
        <div class="top">
          <div class="left">
            <div class="slot weather"></div>
            <div class="slot conditions"></div>
          </div>
          <div class="right">
            <div class="slot calendar"></div>
          </div>
        </div>
        <div class="slot price"></div>
      </div>
    `;
  }
};
EinkPanelCard.properties = {
  hass: { attribute: false },
  _config: { state: true }
};
EinkPanelCard.styles = i`
    :host {
      --ink: ${r(INK.black)};
      --paper: ${r(INK.white)};
      /* Force a light theme so embedded HA-themed cards (e.g. clock-weather-card)
         render on white regardless of the frontend theme Puppet screenshots. */
      --ha-card-background: #ffffff;
      --card-background-color: #ffffff;
      --ha-card-box-shadow: none;
      --ha-card-border-width: 0px;
      --primary-text-color: #000000;
      --secondary-text-color: #000000;
      --primary-background-color: #ffffff;
      --divider-color: #000000;
      display: block;
    }
    .panel {
      width: 800px;
      height: 480px;
      background: var(--paper);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .top {
      flex: 1 1 auto;
      display: flex;
      min-height: 0;
    }
    .top .left {
      flex: 0 0 57%;
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 0;
    }
    .top .right {
      flex: 1 1 auto;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
    }
    /* Weather may be a tall card (clock-weather-card); let it shrink/clip rather
       than overflow its column. */
    .left .weather {
      flex: 0 1 auto;
      min-height: 0;
      overflow: hidden;
    }
    .left .conditions {
      flex: 0 0 auto;
    }
    /* Price chart spans the full width along the bottom. */
    .price {
      flex: 0 0 auto;
    }
    .slot {
      min-width: 0;
    }
    .slot.conditions:empty {
      display: none;
    }
  `;
registerCard({
  type: "eink-panel-card",
  name: "E-ink Panel",
  description: "Composes the weather, price and calendar cards into the 800\xD7480 e-ink layout."
});

// src/index.ts
var CARDS = [
  ["eink-price-card", EinkPriceCard],
  ["eink-weather-card", EinkWeatherCard],
  ["eink-calendar-card", EinkCalendarCard],
  ["eink-conditions-card", EinkConditionsCard],
  ["eink-panel-card", EinkPanelCard]
];
for (const [tag, ctor] of CARDS) {
  if (!customElements.get(tag)) customElements.define(tag, ctor);
}
console.info(
  "%c eink-dashboard-cards %c 0.1.0 ",
  "background:#0000ff;color:#fff;font-weight:700",
  "background:#008000;color:#fff"
);
//# sourceMappingURL=eink-dashboard-cards.js.map
