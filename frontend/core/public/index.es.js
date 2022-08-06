function vt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let s = 0; s < o.length; s++)
    n[o[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const $r = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ir = /* @__PURE__ */ vt($r);
function ds(e) {
  return !!e || e === "";
}
function io(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = Q(o) ? Mr(o) : io(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else {
    if (Q(e))
      return e;
    if (X(e))
      return e;
  }
}
const Pr = /;(?![^(]*\))/g, Ar = /:(.+)/;
function Mr(e) {
  const t = {};
  return e.split(Pr).forEach((n) => {
    if (n) {
      const o = n.split(Ar);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function co(e) {
  let t = "";
  if (Q(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const o = co(e[n]);
      o && (t += o + " ");
    }
  else if (X(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ps = (e) => Q(e) ? e : e == null ? "" : C(e) || X(e) && (e.toString === gs || !$(e.toString)) ? JSON.stringify(e, hs, 2) : String(e), hs = (e, t) => t && t.__v_isRef ? hs(e, t.value) : tt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, s]) => (n[`${o} =>`] = s, n), {})
} : ms(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : X(t) && !C(t) && !Es(t) ? String(t) : t, U = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Et = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ne = () => {
}, _s = () => !1, Fr = /^on[^a-z]/, jt = (e) => Fr.test(e), sn = (e) => e.startsWith("onUpdate:"), Z = Object.assign, lo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Rr = Object.prototype.hasOwnProperty, M = (e, t) => Rr.call(e, t), C = Array.isArray, tt = (e) => dn(e) === "[object Map]", ms = (e) => dn(e) === "[object Set]", $ = (e) => typeof e == "function", Q = (e) => typeof e == "string", fo = (e) => typeof e == "symbol", X = (e) => e !== null && typeof e == "object", uo = (e) => X(e) && $(e.then) && $(e.catch), gs = Object.prototype.toString, dn = (e) => gs.call(e), ao = (e) => dn(e).slice(8, -1), Es = (e) => dn(e) === "[object Object]", po = (e) => Q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zt = /* @__PURE__ */ vt(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Sr = /* @__PURE__ */ vt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), pn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, jr = /-(\w)/g, Be = pn((e) => e.replace(jr, (t, n) => n ? n.toUpperCase() : "")), Lr = /\B([A-Z])/g, be = pn((e) => e.replace(Lr, "-$1").toLowerCase()), hn = pn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Je = pn((e) => e ? `on${hn(e)}` : ""), Pt = (e, t) => !Object.is(e, t), wt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, rn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Rn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Mo;
const Ns = () => Mo || (Mo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Sn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let De;
class Hr {
  constructor(t = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !t && De && (this.parent = De, this.index = (De.scopes || (De.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = De;
      try {
        return De = this, t();
      } finally {
        De = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Sn("cannot run an inactive effect scope.");
  }
  on() {
    De = this;
  }
  off() {
    De = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.active = !1;
    }
  }
}
function Ur(e, t = De) {
  t && t.active && t.effects.push(e);
}
const At = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, bs = (e) => (e.w & Ke) > 0, vs = (e) => (e.n & Ke) > 0, kr = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Ke;
}, Br = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      bs(s) && !vs(s) ? s.delete(e) : t[n++] = s, s.w &= ~Ke, s.n &= ~Ke;
    }
    t.length = n;
  }
}, jn = /* @__PURE__ */ new WeakMap();
let xt = 0, Ke = 1;
const Ln = 30;
let ie;
const nt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Hn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class ho {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ur(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ie, n = Ue;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ie, ie = this, Ue = !0, Ke = 1 << ++xt, xt <= Ln ? kr(this) : Fo(this), this.fn();
    } finally {
      xt <= Ln && Br(this), Ke = 1 << --xt, ie = this.parent, Ue = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ie === this ? this.deferStop = !0 : this.active && (Fo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Fo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ue = !0;
const Os = [];
function ft() {
  Os.push(Ue), Ue = !1;
}
function ut() {
  const e = Os.pop();
  Ue = e === void 0 ? !0 : e;
}
function ae(e, t, n) {
  if (Ue && ie) {
    let o = jn.get(e);
    o || jn.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = At());
    const r = process.env.NODE_ENV !== "production" ? { effect: ie, target: e, type: t, key: n } : void 0;
    Un(s, r);
  }
}
function Un(e, t) {
  let n = !1;
  xt <= Ln ? vs(e) || (e.n |= Ke, n = !bs(e)) : n = !e.has(ie), n && (e.add(ie), ie.deps.push(e), process.env.NODE_ENV !== "production" && ie.onTrack && ie.onTrack(Object.assign({ effect: ie }, t)));
}
function Fe(e, t, n, o, s, r) {
  const i = jn.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && C(e))
    i.forEach((a, h) => {
      (h === "length" || h >= o) && l.push(a);
    });
  else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        C(e) ? po(n) && l.push(i.get("length")) : (l.push(i.get(nt)), tt(e) && l.push(i.get(Hn)));
        break;
      case "delete":
        C(e) || (l.push(i.get(nt)), tt(e) && l.push(i.get(Hn)));
        break;
      case "set":
        tt(e) && l.push(i.get(nt));
        break;
    }
  const f = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: s, oldTarget: r } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? _t(l[0], f) : _t(l[0]));
  else {
    const a = [];
    for (const h of l)
      h && a.push(...h);
    process.env.NODE_ENV !== "production" ? _t(At(a), f) : _t(At(a));
  }
}
function _t(e, t) {
  const n = C(e) ? e : [...e];
  for (const o of n)
    o.computed && Ro(o, t);
  for (const o of n)
    o.computed || Ro(o, t);
}
function Ro(e, t) {
  (e !== ie || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Z({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Kr = /* @__PURE__ */ vt("__proto__,__v_isRef,__isVue"), ys = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(fo)
), Wr = /* @__PURE__ */ _n(), qr = /* @__PURE__ */ _n(!1, !0), zr = /* @__PURE__ */ _n(!0), Jr = /* @__PURE__ */ _n(!0, !0), So = /* @__PURE__ */ Yr();
function Yr() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = I(this);
      for (let r = 0, i = this.length; r < i; r++)
        ae(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(I)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ft();
      const o = I(this)[t].apply(this, n);
      return ut(), o;
    };
  }), e;
}
function _n(e = !1, t = !1) {
  return function(o, s, r) {
    if (s === "__v_isReactive")
      return !e;
    if (s === "__v_isReadonly")
      return e;
    if (s === "__v_isShallow")
      return t;
    if (s === "__v_raw" && r === (e ? t ? Is : $s : t ? Ts : Cs).get(o))
      return o;
    const i = C(o);
    if (!e && i && M(So, s))
      return Reflect.get(So, s, r);
    const l = Reflect.get(o, s, r);
    return (fo(s) ? ys.has(s) : Kr(s)) || (e || ae(o, "get", s), t) ? l : te(l) ? i && po(s) ? l : l.value : X(l) ? e ? Ps(l) : mo(l) : l;
  };
}
const Xr = /* @__PURE__ */ ws(), Zr = /* @__PURE__ */ ws(!0);
function ws(e = !1) {
  return function(n, o, s, r) {
    let i = n[o];
    if (ct(i) && te(i) && !te(s))
      return !1;
    if (!e && !ct(s) && (kn(s) || (s = I(s), i = I(i)), !C(n) && te(i) && !te(s)))
      return i.value = s, !0;
    const l = C(n) && po(o) ? Number(o) < n.length : M(n, o), f = Reflect.set(n, o, s, r);
    return n === I(r) && (l ? Pt(s, i) && Fe(n, "set", o, s, i) : Fe(n, "add", o, s)), f;
  };
}
function Qr(e, t) {
  const n = M(e, t), o = e[t], s = Reflect.deleteProperty(e, t);
  return s && n && Fe(e, "delete", t, void 0, o), s;
}
function Gr(e, t) {
  const n = Reflect.has(e, t);
  return (!fo(t) || !ys.has(t)) && ae(e, "has", t), n;
}
function ei(e) {
  return ae(e, "iterate", C(e) ? "length" : nt), Reflect.ownKeys(e);
}
const Ds = {
  get: Wr,
  set: Xr,
  deleteProperty: Qr,
  has: Gr,
  ownKeys: ei
}, xs = {
  get: zr,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Sn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Sn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, ti = /* @__PURE__ */ Z({}, Ds, {
  get: qr,
  set: Zr
}), ni = /* @__PURE__ */ Z({}, xs, {
  get: Jr
}), _o = (e) => e, mn = (e) => Reflect.getPrototypeOf(e);
function qt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = I(e), r = I(t);
  n || (t !== r && ae(s, "get", t), ae(s, "get", r));
  const { has: i } = mn(s), l = o ? _o : n ? go : Mt;
  if (i.call(s, t))
    return l(e.get(t));
  if (i.call(s, r))
    return l(e.get(r));
  e !== s && e.get(t);
}
function zt(e, t = !1) {
  const n = this.__v_raw, o = I(n), s = I(e);
  return t || (e !== s && ae(o, "has", e), ae(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Jt(e, t = !1) {
  return e = e.__v_raw, !t && ae(I(e), "iterate", nt), Reflect.get(e, "size", e);
}
function jo(e) {
  e = I(e);
  const t = I(this);
  return mn(t).has.call(t, e) || (t.add(e), Fe(t, "add", e, e)), this;
}
function Lo(e, t) {
  t = I(t);
  const n = I(this), { has: o, get: s } = mn(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && Vs(n, o, e) : (e = I(e), r = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), r ? Pt(t, i) && Fe(n, "set", e, t, i) : Fe(n, "add", e, t), this;
}
function Ho(e) {
  const t = I(this), { has: n, get: o } = mn(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && Vs(t, n, e) : (e = I(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && Fe(t, "delete", e, void 0, r), i;
}
function Uo() {
  const e = I(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? tt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Fe(e, "clear", void 0, void 0, n), o;
}
function Yt(e, t) {
  return function(o, s) {
    const r = this, i = r.__v_raw, l = I(i), f = t ? _o : e ? go : Mt;
    return !e && ae(l, "iterate", nt), i.forEach((a, h) => o.call(s, f(a), f(h), r));
  };
}
function Xt(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = I(s), i = tt(r), l = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, a = s[e](...o), h = n ? _o : t ? go : Mt;
    return !t && ae(r, "iterate", f ? Hn : nt), {
      next() {
        const { value: d, done: g } = a.next();
        return g ? { value: d, done: g } : {
          value: l ? [h(d[0]), h(d[1])] : h(d),
          done: g
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function je(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${hn(e)} operation ${n}failed: target is readonly.`, I(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function oi() {
  const e = {
    get(r) {
      return qt(this, r);
    },
    get size() {
      return Jt(this);
    },
    has: zt,
    add: jo,
    set: Lo,
    delete: Ho,
    clear: Uo,
    forEach: Yt(!1, !1)
  }, t = {
    get(r) {
      return qt(this, r, !1, !0);
    },
    get size() {
      return Jt(this);
    },
    has: zt,
    add: jo,
    set: Lo,
    delete: Ho,
    clear: Uo,
    forEach: Yt(!1, !0)
  }, n = {
    get(r) {
      return qt(this, r, !0);
    },
    get size() {
      return Jt(this, !0);
    },
    has(r) {
      return zt.call(this, r, !0);
    },
    add: je("add"),
    set: je("set"),
    delete: je("delete"),
    clear: je("clear"),
    forEach: Yt(!0, !1)
  }, o = {
    get(r) {
      return qt(this, r, !0, !0);
    },
    get size() {
      return Jt(this, !0);
    },
    has(r) {
      return zt.call(this, r, !0);
    },
    add: je("add"),
    set: je("set"),
    delete: je("delete"),
    clear: je("clear"),
    forEach: Yt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = Xt(r, !1, !1), n[r] = Xt(r, !0, !1), t[r] = Xt(r, !1, !0), o[r] = Xt(r, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [si, ri, ii, ci] = /* @__PURE__ */ oi();
function gn(e, t) {
  const n = t ? e ? ci : ii : e ? ri : si;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(M(n, s) && s in o ? n : o, s, r);
}
const li = {
  get: /* @__PURE__ */ gn(!1, !1)
}, fi = {
  get: /* @__PURE__ */ gn(!1, !0)
}, ui = {
  get: /* @__PURE__ */ gn(!0, !1)
}, ai = {
  get: /* @__PURE__ */ gn(!0, !0)
};
function Vs(e, t, n) {
  const o = I(n);
  if (o !== n && t.call(e, o)) {
    const s = ao(e);
    console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Cs = /* @__PURE__ */ new WeakMap(), Ts = /* @__PURE__ */ new WeakMap(), $s = /* @__PURE__ */ new WeakMap(), Is = /* @__PURE__ */ new WeakMap();
function di(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function pi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : di(ao(e));
}
function mo(e) {
  return ct(e) ? e : En(e, !1, Ds, li, Cs);
}
function hi(e) {
  return En(e, !1, ti, fi, Ts);
}
function Ps(e) {
  return En(e, !0, xs, ui, $s);
}
function mt(e) {
  return En(e, !0, ni, ai, Is);
}
function En(e, t, n, o, s) {
  if (!X(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = pi(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? o : n);
  return s.set(e, l), l;
}
function ot(e) {
  return ct(e) ? ot(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ct(e) {
  return !!(e && e.__v_isReadonly);
}
function kn(e) {
  return !!(e && e.__v_isShallow);
}
function Bn(e) {
  return ot(e) || ct(e);
}
function I(e) {
  const t = e && e.__v_raw;
  return t ? I(t) : e;
}
function As(e) {
  return rn(e, "__v_skip", !0), e;
}
const Mt = (e) => X(e) ? mo(e) : e, go = (e) => X(e) ? Ps(e) : e;
function Ms(e) {
  Ue && ie && (e = I(e), process.env.NODE_ENV !== "production" ? Un(e.dep || (e.dep = At()), {
    target: e,
    type: "get",
    key: "value"
  }) : Un(e.dep || (e.dep = At())));
}
function Fs(e, t) {
  e = I(e), e.dep && (process.env.NODE_ENV !== "production" ? _t(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : _t(e.dep));
}
function te(e) {
  return !!(e && e.__v_isRef === !0);
}
function _i(e) {
  return mi(e, !1);
}
function mi(e, t) {
  return te(e) ? e : new gi(e, t);
}
class gi {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : I(t), this._value = n ? t : Mt(t);
  }
  get value() {
    return Ms(this), this._value;
  }
  set value(t) {
    t = this.__v_isShallow ? t : I(t), Pt(t, this._rawValue) && (this._rawValue = t, this._value = this.__v_isShallow ? t : Mt(t), Fs(this, t));
  }
}
function Rs(e) {
  return te(e) ? e.value : e;
}
const Ei = {
  get: (e, t, n) => Rs(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return te(s) && !te(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ss(e) {
  return ot(e) ? e : new Proxy(e, Ei);
}
class Ni {
  constructor(t, n, o, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this._dirty = !0, this.effect = new ho(t, () => {
      this._dirty || (this._dirty = !0, Fs(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o;
  }
  get value() {
    const t = I(this);
    return Ms(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function bi(e, t, n = !1) {
  let o, s;
  const r = $(e);
  r ? (o = e, s = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ne) : (o = e.get, s = e.set);
  const i = new Ni(o, s, r || !s, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const st = [];
function Qt(e) {
  st.push(e);
}
function Gt() {
  st.pop();
}
function O(e, ...t) {
  ft();
  const n = st.length ? st[st.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = vi();
  if (o)
    Me(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      s.map(({ vnode: r }) => `at <${Dn(n, r.type)}>`).join(`
`),
      s
    ]);
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Oi(s)), console.warn(...r);
  }
  ut();
}
function vi() {
  let e = st[st.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Oi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...yi(n));
  }), t;
}
function yi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Dn(e.component, e.type, o)}`, r = ">" + n;
  return e.props ? [s, ...wi(e.props), r] : [s + r];
}
function wi(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...js(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function js(e, t, n) {
  return Q(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : te(t) ? (t = js(e, I(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = I(t), n ? t : [`${e}=`, t]);
}
const Eo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Me(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (r) {
    Nn(r, t, n);
  }
  return s;
}
function _e(e, t, n, o) {
  if ($(e)) {
    const r = Me(e, t, n, o);
    return r && uo(r) && r.catch((i) => {
      Nn(i, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(_e(e[r], t, n, o));
  return s;
}
function Nn(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? Eo[n] : n;
    for (; r; ) {
      const a = r.ec;
      if (a) {
        for (let h = 0; h < a.length; h++)
          if (a[h](e, i, l) === !1)
            return;
      }
      r = r.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      Me(f, null, 10, [e, i, l]);
      return;
    }
  }
  Di(e, n, s, o);
}
function Di(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Eo[t];
    if (n && Qt(n), O(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Gt(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let cn = !1, Kn = !1;
const de = [];
let Ae = 0;
const Ct = [];
let pt = null, Ye = 0;
const Tt = [];
let $e = null, Xe = 0;
const Ls = /* @__PURE__ */ Promise.resolve();
let No = null, Wn = null;
const xi = 100;
function Hs(e) {
  const t = No || Ls;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vi(e) {
  let t = Ae + 1, n = de.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Ft(de[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function bo(e) {
  (!de.length || !de.includes(e, cn && e.allowRecurse ? Ae + 1 : Ae)) && e !== Wn && (e.id == null ? de.push(e) : de.splice(Vi(e.id), 0, e), Us());
}
function Us() {
  !cn && !Kn && (Kn = !0, No = Ls.then(Ws));
}
function Ci(e) {
  const t = de.indexOf(e);
  t > Ae && de.splice(t, 1);
}
function ks(e, t, n, o) {
  C(e) ? n.push(...e) : (!t || !t.includes(e, e.allowRecurse ? o + 1 : o)) && n.push(e), Us();
}
function Ti(e) {
  ks(e, pt, Ct, Ye);
}
function Bs(e) {
  ks(e, $e, Tt, Xe);
}
function bn(e, t = null) {
  if (Ct.length) {
    for (Wn = t, pt = [...new Set(Ct)], Ct.length = 0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ye = 0; Ye < pt.length; Ye++)
      process.env.NODE_ENV !== "production" && vo(e, pt[Ye]) || pt[Ye]();
    pt = null, Ye = 0, Wn = null, bn(e, t);
  }
}
function Ks(e) {
  if (bn(), Tt.length) {
    const t = [...new Set(Tt)];
    if (Tt.length = 0, $e) {
      $e.push(...t);
      return;
    }
    for ($e = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), $e.sort((n, o) => Ft(n) - Ft(o)), Xe = 0; Xe < $e.length; Xe++)
      process.env.NODE_ENV !== "production" && vo(e, $e[Xe]) || $e[Xe]();
    $e = null, Xe = 0;
  }
}
const Ft = (e) => e.id == null ? 1 / 0 : e.id;
function Ws(e) {
  Kn = !1, cn = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), bn(e), de.sort((n, o) => Ft(n) - Ft(o));
  const t = process.env.NODE_ENV !== "production" ? (n) => vo(e, n) : ne;
  try {
    for (Ae = 0; Ae < de.length; Ae++) {
      const n = de[Ae];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Me(n, null, 14);
      }
    }
  } finally {
    Ae = 0, de.length = 0, Ks(e), cn = !1, No = null, (de.length || Ct.length || Tt.length) && Ws(e);
  }
}
function vo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > xi) {
      const o = t.ownerInstance, s = o && wr(o.type);
      return O(`Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let rt = !1;
const ht = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Ns().__VUE_HMR_RUNTIME__ = {
  createRecord: Tn(qs),
  rerender: Tn(Pi),
  reload: Tn(Ai)
});
const lt = /* @__PURE__ */ new Map();
function $i(e) {
  const t = e.type.__hmrId;
  let n = lt.get(t);
  n || (qs(t, e.type), n = lt.get(t)), n.instances.add(e);
}
function Ii(e) {
  lt.get(e.type.__hmrId).instances.delete(e);
}
function qs(e, t) {
  return lt.has(e) ? !1 : (lt.set(e, {
    initialDef: $t(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function $t(e) {
  return Dr(e) ? e.__vccOpts : e;
}
function Pi(e, t) {
  const n = lt.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, $t(o.type).render = t), o.renderCache = [], rt = !0, o.update(), rt = !1;
  }));
}
function Ai(e, t) {
  const n = lt.get(e);
  if (!n)
    return;
  t = $t(t), ko(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = $t(s.type);
    ht.has(r) || (r !== n.initialDef && ko(r, t), ht.add(r)), s.appContext.optionsCache.delete(s.type), s.ceReload ? (ht.add(r), s.ceReload(t.styles), ht.delete(r)) : s.parent ? (bo(s.parent.update), s.parent.type.__asyncLoader && s.parent.ceReload && s.parent.ceReload(t.styles)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Bs(() => {
    for (const s of o)
      ht.delete($t(s.type));
  });
}
function ko(e, t) {
  Z(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Tn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Qe, Vt = [], qn = !1;
function Lt(e, ...t) {
  Qe ? Qe.emit(e, ...t) : qn || Vt.push({ event: e, args: t });
}
function zs(e, t) {
  var n, o;
  Qe = e, Qe ? (Qe.enabled = !0, Vt.forEach(({ event: s, args: r }) => Qe.emit(s, ...r)), Vt = []) : typeof window < "u" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    zs(r, t);
  }), setTimeout(() => {
    Qe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, qn = !0, Vt = []);
  }, 3e3)) : (qn = !0, Vt = []);
}
function Mi(e, t) {
  Lt("app:init", e, t, {
    Fragment: ge,
    Text: yn,
    Comment: ce,
    Static: nn
  });
}
function Fi(e) {
  Lt("app:unmount", e);
}
const Ri = /* @__PURE__ */ Oo("component:added"), Js = /* @__PURE__ */ Oo("component:updated"), Si = /* @__PURE__ */ Oo("component:removed");
function Oo(e) {
  return (t) => {
    Lt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const ji = /* @__PURE__ */ Ys("perf:start"), Li = /* @__PURE__ */ Ys("perf:end");
function Ys(e) {
  return (t, n, o) => {
    Lt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Hi(e, t, n) {
  Lt("component:emit", e.appContext.app, e, t, n);
}
function Ui(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || U;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: h, propsOptions: [d] } = e;
    if (h)
      if (!(t in h))
        (!d || !(Je(t) in d)) && O(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Je(t)}" prop.`);
      else {
        const g = h[t];
        $(g) && (g(...n) || O(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && t.slice(7);
  if (i && i in o) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: g } = o[h] || U;
    g && (s = n.map((x) => x.trim())), d && (s = n.map(Rn));
  }
  if (process.env.NODE_ENV !== "production" && Hi(e, t, s), process.env.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && o[Je(h)] && O(`Event "${h}" is emitted in component ${Dn(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${be(t)}" instead of "${t}".`);
  }
  let l, f = o[l = Je(t)] || o[l = Je(Be(t))];
  !f && r && (f = o[l = Je(be(t))]), f && _e(f, e, 6, s);
  const a = o[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, _e(a, e, 6, s);
  }
}
function Xs(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, l = !1;
  if (!$(e)) {
    const f = (a) => {
      const h = Xs(a, t, !0);
      h && (l = !0, Z(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !l ? (o.set(e, null), null) : (C(r) ? r.forEach((f) => i[f] = null) : Z(i, r), o.set(e, i), i);
}
function vn(e, t) {
  return !e || !jt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), M(e, t[0].toLowerCase() + t.slice(1)) || M(e, be(t)) || M(e, t));
}
let he = null, Zs = null;
function ln(e) {
  const t = he;
  return he = e, Zs = e && e.type.__scopeId || null, t;
}
function ki(e, t = he, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && es(-1);
    const r = ln(t), i = e(...s);
    return ln(r), o._d && es(1), process.env.NODE_ENV !== "production" && Js(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let zn = !1;
function fn() {
  zn = !0;
}
function $n(e) {
  const { type: t, vnode: n, proxy: o, withProxy: s, props: r, propsOptions: [i], slots: l, attrs: f, emit: a, render: h, renderCache: d, data: g, setupState: x, ctx: P, inheritAttrs: A } = e;
  let F, K;
  const H = ln(e);
  process.env.NODE_ENV !== "production" && (zn = !1);
  try {
    if (n.shapeFlag & 4) {
      const J = s || o;
      F = Ee(h.call(J, J, d, r, x, g, P)), K = f;
    } else {
      const J = t;
      process.env.NODE_ENV !== "production" && f === r && fn(), F = Ee(J.length > 1 ? J(r, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return fn(), f;
        },
        slots: l,
        emit: a
      } : { attrs: f, slots: l, emit: a }) : J(r, null)), K = t.props ? f : Ki(f);
    }
  } catch (J) {
    It.length = 0, Nn(J, e, 1), F = ke(ce);
  }
  let z = F, le;
  if (process.env.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && ([z, le] = Bi(F)), K && A !== !1) {
    const J = Object.keys(K), { shapeFlag: Ve } = z;
    if (J.length) {
      if (Ve & 7)
        i && J.some(sn) && (K = Wi(K, i)), z = xe(z, K);
      else if (process.env.NODE_ENV !== "production" && !zn && z.type !== ce) {
        const ve = Object.keys(f), R = [], Y = [];
        for (let k = 0, fe = ve.length; k < fe; k++) {
          const G = ve[k];
          jt(G) ? sn(G) || R.push(G[2].toLowerCase() + G.slice(3)) : Y.push(G);
        }
        Y.length && O(`Extraneous non-props attributes (${Y.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), R.length && O(`Extraneous non-emits event listeners (${R.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Bo(z) && O("Runtime directive used on component with non-element root node. The directives will not function as intended."), z = xe(z), z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Bo(z) && O("Component inside <Transition> renders non-element root node that cannot be animated."), z.transition = n.transition), process.env.NODE_ENV !== "production" && le ? le(z) : F = z, ln(H), F;
}
const Bi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Qs(t);
  if (!o)
    return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ee(o), i];
};
function Qs(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (xo(o)) {
      if (o.type !== ce || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Ki = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || jt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Wi = (e, t) => {
  const n = {};
  for (const o in e)
    (!sn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Bo = (e) => e.shapeFlag & 7 || e.type === ce;
function qi(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: l, patchFlag: f } = t, a = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && rt || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? Ko(o, i, a) : !!i;
    if (f & 8) {
      const h = t.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        const g = h[d];
        if (i[g] !== o[g] && !vn(a, g))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Ko(o, i, a) : !0 : !!i;
  return !1;
}
function Ko(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !vn(n, r))
      return !0;
  }
  return !1;
}
function zi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ji = (e) => e.__isSuspense;
function Yi(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : Bs(e);
}
function Xi(e, t) {
  if (!ee)
    process.env.NODE_ENV !== "production" && O("provide() can only be used inside setup().");
  else {
    let n = ee.provides;
    const o = ee.parent && ee.parent.provides;
    o === n && (n = ee.provides = Object.create(o)), n[e] = t;
  }
}
function In(e, t, n = !1) {
  const o = ee || he;
  if (o) {
    const s = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
const Wo = {};
function Pn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !$(t) && O("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Gs(e, t, n);
}
function Gs(e, t, { immediate: n, deep: o, flush: s, onTrack: r, onTrigger: i } = U) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && O('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && O('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (H) => {
    O("Invalid watch source: ", H, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, f = ee;
  let a, h = !1, d = !1;
  if (te(e) ? (a = () => e.value, h = kn(e)) : ot(e) ? (a = () => e, o = !0) : C(e) ? (d = !0, h = e.some((H) => ot(H) || kn(H)), a = () => e.map((H) => {
    if (te(H))
      return H.value;
    if (ot(H))
      return gt(H);
    if ($(H))
      return Me(H, f, 2);
    process.env.NODE_ENV !== "production" && l(H);
  })) : $(e) ? t ? a = () => Me(e, f, 2) : a = () => {
    if (!(f && f.isUnmounted))
      return g && g(), _e(e, f, 3, [x]);
  } : (a = ne, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const H = a;
    a = () => gt(H());
  }
  let g, x = (H) => {
    g = K.onStop = () => {
      Me(H, f, 4);
    };
  };
  if (St)
    return x = ne, t ? n && _e(t, f, 3, [
      a(),
      d ? [] : void 0,
      x
    ]) : a(), ne;
  let P = d ? [] : Wo;
  const A = () => {
    if (!!K.active)
      if (t) {
        const H = K.run();
        (o || h || (d ? H.some((z, le) => Pt(z, P[le])) : Pt(H, P))) && (g && g(), _e(t, f, 3, [
          H,
          P === Wo ? void 0 : P,
          x
        ]), P = H);
      } else
        K.run();
  };
  A.allowRecurse = !!t;
  let F;
  s === "sync" ? F = A : s === "post" ? F = () => ue(A, f && f.suspense) : F = () => Ti(A);
  const K = new ho(a, F);
  return process.env.NODE_ENV !== "production" && (K.onTrack = r, K.onTrigger = i), t ? n ? A() : P = K.run() : s === "post" ? ue(K.run.bind(K), f && f.suspense) : K.run(), () => {
    K.stop(), f && f.scope && lo(f.scope.effects, K);
  };
}
function Zi(e, t, n) {
  const o = this.proxy, s = Q(e) ? e.includes(".") ? er(o, e) : () => o[e] : e.bind(o, o);
  let r;
  $(t) ? r = t : (r = t.handler, n = t);
  const i = ee;
  bt(this);
  const l = Gs(s, r.bind(o), n);
  return i ? bt(i) : it(), l;
}
function er(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function gt(e, t) {
  if (!X(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), te(e))
    gt(e.value, t);
  else if (C(e))
    for (let n = 0; n < e.length; n++)
      gt(e[n], t);
  else if (ms(e) || tt(e))
    e.forEach((n) => {
      gt(n, t);
    });
  else if (Es(e))
    for (const n in e)
      gt(e[n], t);
  return e;
}
function Qi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return sr(() => {
    e.isMounted = !0;
  }), rr(() => {
    e.isUnmounting = !0;
  }), e;
}
const pe = [Function, Array], Gi = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: pe,
    onEnter: pe,
    onAfterEnter: pe,
    onEnterCancelled: pe,
    onBeforeLeave: pe,
    onLeave: pe,
    onAfterLeave: pe,
    onLeaveCancelled: pe,
    onBeforeAppear: pe,
    onAppear: pe,
    onAfterAppear: pe,
    onAppearCancelled: pe
  },
  setup(e, { slots: t }) {
    const n = Yc(), o = Qi();
    let s;
    return () => {
      const r = t.default && nr(t.default(), !0);
      if (!r || !r.length)
        return;
      let i = r[0];
      if (r.length > 1) {
        let A = !1;
        for (const F of r)
          if (F.type !== ce) {
            if (process.env.NODE_ENV !== "production" && A) {
              O("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = F, A = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const l = I(e), { mode: f } = l;
      if (process.env.NODE_ENV !== "production" && f && f !== "in-out" && f !== "out-in" && f !== "default" && O(`invalid <transition> mode: ${f}`), o.isLeaving)
        return An(i);
      const a = qo(i);
      if (!a)
        return An(i);
      const h = Jn(a, l, o, n);
      Yn(a, h);
      const d = n.subTree, g = d && qo(d);
      let x = !1;
      const { getTransitionKey: P } = a.type;
      if (P) {
        const A = P();
        s === void 0 ? s = A : A !== s && (s = A, x = !0);
      }
      if (g && g.type !== ce && (!Ge(a, g) || x)) {
        const A = Jn(g, l, o, n);
        if (Yn(g, A), f === "out-in")
          return o.isLeaving = !0, A.afterLeave = () => {
            o.isLeaving = !1, n.update();
          }, An(i);
        f === "in-out" && a.type !== ce && (A.delayLeave = (F, K, H) => {
          const z = tr(o, g);
          z[String(g.key)] = g, F._leaveCb = () => {
            K(), F._leaveCb = void 0, delete h.delayedLeave;
          }, h.delayedLeave = H;
        });
      }
      return i;
    };
  }
}, ec = Gi;
function tr(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function Jn(e, t, n, o) {
  const { appear: s, mode: r, persisted: i = !1, onBeforeEnter: l, onEnter: f, onAfterEnter: a, onEnterCancelled: h, onBeforeLeave: d, onLeave: g, onAfterLeave: x, onLeaveCancelled: P, onBeforeAppear: A, onAppear: F, onAfterAppear: K, onAppearCancelled: H } = t, z = String(e.key), le = tr(n, e), J = (R, Y) => {
    R && _e(R, o, 9, Y);
  }, Ve = (R, Y) => {
    const k = Y[1];
    J(R, Y), C(R) ? R.every((fe) => fe.length <= 1) && k() : R.length <= 1 && k();
  }, ve = {
    mode: r,
    persisted: i,
    beforeEnter(R) {
      let Y = l;
      if (!n.isMounted)
        if (s)
          Y = A || l;
        else
          return;
      R._leaveCb && R._leaveCb(!0);
      const k = le[z];
      k && Ge(e, k) && k.el._leaveCb && k.el._leaveCb(), J(Y, [R]);
    },
    enter(R) {
      let Y = f, k = a, fe = h;
      if (!n.isMounted)
        if (s)
          Y = F || f, k = K || a, fe = H || h;
        else
          return;
      let G = !1;
      const Oe = R._enterCb = (Ut) => {
        G || (G = !0, Ut ? J(fe, [R]) : J(k, [R]), ve.delayedLeave && ve.delayedLeave(), R._enterCb = void 0);
      };
      Y ? Ve(Y, [R, Oe]) : Oe();
    },
    leave(R, Y) {
      const k = String(e.key);
      if (R._enterCb && R._enterCb(!0), n.isUnmounting)
        return Y();
      J(d, [R]);
      let fe = !1;
      const G = R._leaveCb = (Oe) => {
        fe || (fe = !0, Y(), Oe ? J(P, [R]) : J(x, [R]), R._leaveCb = void 0, le[k] === e && delete le[k]);
      };
      le[k] = e, g ? Ve(g, [R, G]) : G();
    },
    clone(R) {
      return Jn(R, t, n, o);
    }
  };
  return ve;
}
function An(e) {
  if (Ht(e))
    return e = xe(e), e.children = null, e;
}
function qo(e) {
  return Ht(e) ? e.children ? e.children[0] : void 0 : e;
}
function Yn(e, t) {
  e.shapeFlag & 6 && e.component ? Yn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function nr(e, t = !1, n) {
  let o = [], s = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === ge ? (i.patchFlag & 128 && s++, o = o.concat(nr(i.children, t, l))) : (t || i.type !== ce) && o.push(l != null ? xe(i, { key: l }) : i);
  }
  if (s > 1)
    for (let r = 0; r < o.length; r++)
      o[r].patchFlag = -2;
  return o;
}
function yo(e) {
  return $(e) ? { setup: e, name: e.name } : e;
}
const en = (e) => !!e.type.__asyncLoader, Ht = (e) => e.type.__isKeepAlive;
function tc(e, t) {
  or(e, "a", t);
}
function nc(e, t) {
  or(e, "da", t);
}
function or(e, t, n = ee) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (On(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Ht(s.parent.vnode) && oc(o, t, n, s), s = s.parent;
  }
}
function oc(e, t, n, o) {
  const s = On(t, e, o, !0);
  ir(() => {
    lo(o[t], s);
  }, n);
}
function On(e, t, n = ee, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      ft(), bt(n);
      const l = _e(t, n, e, i);
      return it(), ut(), l;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Je(Eo[e].replace(/ hook$/, ""));
    O(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Re = (e) => (t, n = ee) => (!St || e === "sp") && On(e, t, n), sc = Re("bm"), sr = Re("m"), rc = Re("bu"), ic = Re("u"), rr = Re("bum"), ir = Re("um"), cc = Re("sp"), lc = Re("rtg"), fc = Re("rtc");
function uc(e, t = ee) {
  On("ec", e, t);
}
function cr(e) {
  Sr(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function qe(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    r && (l.oldValue = r[i].value);
    let f = l.dir[o];
    f && (ft(), _e(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ut());
  }
}
const ac = Symbol(), Xn = (e) => e ? Or(e) ? Co(e) || e.proxy : Xn(e.parent) : null, Nt = /* @__PURE__ */ Z(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? mt(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? mt(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? mt(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? mt(e.refs) : e.refs,
  $parent: (e) => Xn(e.parent),
  $root: (e) => Xn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => ur(e),
  $forceUpdate: (e) => e.f || (e.f = () => bo(e.update)),
  $nextTick: (e) => e.n || (e.n = Hs.bind(e.proxy)),
  $watch: (e) => Zi.bind(e)
}), wo = (e) => e === "_" || e === "$", lr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: l, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (process.env.NODE_ENV !== "production" && o !== U && o.__isScriptSetup && M(o, t))
      return o[t];
    let a;
    if (t[0] !== "$") {
      const x = i[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (o !== U && M(o, t))
          return i[t] = 1, o[t];
        if (s !== U && M(s, t))
          return i[t] = 2, s[t];
        if ((a = e.propsOptions[0]) && M(a, t))
          return i[t] = 3, r[t];
        if (n !== U && M(n, t))
          return i[t] = 4, n[t];
        Zn && (i[t] = 0);
      }
    }
    const h = Nt[t];
    let d, g;
    if (h)
      return t === "$attrs" && (ae(e, "get", t), process.env.NODE_ENV !== "production" && fn()), h(e);
    if ((d = l.__cssModules) && (d = d[t]))
      return d;
    if (n !== U && M(n, t))
      return i[t] = 4, n[t];
    if (g = f.config.globalProperties, M(g, t))
      return g[t];
    process.env.NODE_ENV !== "production" && he && (!Q(t) || t.indexOf("__v") !== 0) && (s !== U && wo(t[0]) && M(s, t) ? O(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === he && O(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return s !== U && M(s, t) ? (s[t] = n, !0) : o !== U && M(o, t) ? (o[t] = n, !0) : M(e.props, t) ? (process.env.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`, e), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && O(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`, e), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r } }, i) {
    let l;
    return !!n[i] || e !== U && M(e, i) || t !== U && M(t, i) || (l = r[0]) && M(l, i) || M(o, i) || M(Nt, i) || M(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : M(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (lr.ownKeys = (e) => (O("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function dc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Nt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Nt[n](e),
      set: ne
    });
  }), t;
}
function pc(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ne
    });
  });
}
function hc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(I(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (wo(o[0])) {
        O(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ne
      });
    }
  });
}
function _c() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? O(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Zn = !0;
function mc(e) {
  const t = ur(e), n = e.proxy, o = e.ctx;
  Zn = !1, t.beforeCreate && zo(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: r,
    methods: i,
    watch: l,
    provide: f,
    inject: a,
    created: h,
    beforeMount: d,
    mounted: g,
    beforeUpdate: x,
    updated: P,
    activated: A,
    deactivated: F,
    beforeDestroy: K,
    beforeUnmount: H,
    destroyed: z,
    unmounted: le,
    render: J,
    renderTracked: Ve,
    renderTriggered: ve,
    errorCaptured: R,
    serverPrefetch: Y,
    expose: k,
    inheritAttrs: fe,
    components: G,
    directives: Oe,
    filters: Ut
  } = t, We = process.env.NODE_ENV !== "production" ? _c() : null;
  if (process.env.NODE_ENV !== "production") {
    const [j] = e.propsOptions;
    if (j)
      for (const S in j)
        We("Props", S);
  }
  if (a && gc(a, o, We, e.appContext.config.unwrapInjectedRef), i)
    for (const j in i) {
      const S = i[j];
      $(S) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, j, {
        value: S.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[j] = S.bind(n), process.env.NODE_ENV !== "production" && We("Methods", j)) : process.env.NODE_ENV !== "production" && O(`Method "${j}" has type "${typeof S}" in the component definition. Did you reference the function correctly?`);
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !$(s) && O("The data option must be a function. Plain object usage is no longer supported.");
    const j = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && uo(j) && O("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !X(j))
      process.env.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = mo(j), process.env.NODE_ENV !== "production")
      for (const S in j)
        We("Data", S), wo(S[0]) || Object.defineProperty(o, S, {
          configurable: !0,
          enumerable: !0,
          get: () => j[S],
          set: ne
        });
  }
  if (Zn = !0, r)
    for (const j in r) {
      const S = r[j], Ce = $(S) ? S.bind(n, n) : $(S.get) ? S.get.bind(n, n) : ne;
      process.env.NODE_ENV !== "production" && Ce === ne && O(`Computed property "${j}" has no getter.`);
      const Ot = !$(S) && $(S.set) ? S.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        O(`Write operation failed: computed property "${j}" is readonly.`);
      } : ne, kt = ol({
        get: Ce,
        set: Ot
      });
      Object.defineProperty(o, j, {
        enumerable: !0,
        configurable: !0,
        get: () => kt.value,
        set: (Bt) => kt.value = Bt
      }), process.env.NODE_ENV !== "production" && We("Computed", j);
    }
  if (l)
    for (const j in l)
      fr(l[j], o, n, j);
  if (f) {
    const j = $(f) ? f.call(n) : f;
    Reflect.ownKeys(j).forEach((S) => {
      Xi(S, j[S]);
    });
  }
  h && zo(h, e, "c");
  function oe(j, S) {
    C(S) ? S.forEach((Ce) => j(Ce.bind(n))) : S && j(S.bind(n));
  }
  if (oe(sc, d), oe(sr, g), oe(rc, x), oe(ic, P), oe(tc, A), oe(nc, F), oe(uc, R), oe(fc, Ve), oe(lc, ve), oe(rr, H), oe(ir, le), oe(cc, Y), C(k))
    if (k.length) {
      const j = e.exposed || (e.exposed = {});
      k.forEach((S) => {
        Object.defineProperty(j, S, {
          get: () => n[S],
          set: (Ce) => n[S] = Ce
        });
      });
    } else
      e.exposed || (e.exposed = {});
  J && e.render === ne && (e.render = J), fe != null && (e.inheritAttrs = fe), G && (e.components = G), Oe && (e.directives = Oe);
}
function gc(e, t, n = ne, o = !1) {
  C(e) && (e = Qn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    X(r) ? "default" in r ? i = In(r.from || s, r.default, !0) : i = In(r.from || s) : i = In(r), te(i) ? o ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : (process.env.NODE_ENV !== "production" && O(`injected property "${s}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[s] = i) : t[s] = i, process.env.NODE_ENV !== "production" && n("Inject", s);
  }
}
function zo(e, t, n) {
  _e(C(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function fr(e, t, n, o) {
  const s = o.includes(".") ? er(n, o) : () => n[o];
  if (Q(e)) {
    const r = t[e];
    $(r) ? Pn(s, r) : process.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, r);
  } else if ($(e))
    Pn(s, e.bind(n));
  else if (X(e))
    if (C(e))
      e.forEach((r) => fr(r, t, n, o));
    else {
      const r = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(r) ? Pn(s, r, e) : process.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    process.env.NODE_ENV !== "production" && O(`Invalid watch option: "${o}"`, e);
}
function ur(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: s, optionsCache: r, config: { optionMergeStrategies: i } } = e.appContext, l = r.get(t);
  let f;
  return l ? f = l : !s.length && !n && !o ? f = t : (f = {}, s.length && s.forEach((a) => un(f, a, i, !0)), un(f, t, i)), r.set(t, f), f;
}
function un(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && un(e, r, n, !0), s && s.forEach((i) => un(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && O('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = Ec[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ec = {
  data: Jo,
  props: Ze,
  emits: Ze,
  methods: Ze,
  computed: Ze,
  beforeCreate: re,
  created: re,
  beforeMount: re,
  mounted: re,
  beforeUpdate: re,
  updated: re,
  beforeDestroy: re,
  beforeUnmount: re,
  destroyed: re,
  unmounted: re,
  activated: re,
  deactivated: re,
  errorCaptured: re,
  serverPrefetch: re,
  components: Ze,
  directives: Ze,
  watch: bc,
  provide: Jo,
  inject: Nc
};
function Jo(e, t) {
  return t ? e ? function() {
    return Z($(e) ? e.call(this, this) : e, $(t) ? t.call(this, this) : t);
  } : t : e;
}
function Nc(e, t) {
  return Ze(Qn(e), Qn(t));
}
function Qn(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function re(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ze(e, t) {
  return e ? Z(Z(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function bc(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Z(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = re(e[o], t[o]);
  return n;
}
function vc(e, t, n, o = !1) {
  const s = {}, r = {};
  rn(r, wn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ar(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && pr(t || {}, s, e), n ? e.props = o ? s : hi(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function Oc(e, t, n, o) {
  const { props: s, attrs: r, vnode: { patchFlag: i } } = e, l = I(s), [f] = e.propsOptions;
  let a = !1;
  if (!(process.env.NODE_ENV !== "production" && (e.type.__hmrId || e.parent && e.parent.type.__hmrId)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        let g = h[d];
        if (vn(e.emitsOptions, g))
          continue;
        const x = t[g];
        if (f)
          if (M(r, g))
            x !== r[g] && (r[g] = x, a = !0);
          else {
            const P = Be(g);
            s[P] = Gn(f, l, P, x, e, !1);
          }
        else
          x !== r[g] && (r[g] = x, a = !0);
      }
    }
  } else {
    ar(e, t, s, r) && (a = !0);
    let h;
    for (const d in l)
      (!t || !M(t, d) && ((h = be(d)) === d || !M(t, h))) && (f ? n && (n[d] !== void 0 || n[h] !== void 0) && (s[d] = Gn(f, l, d, void 0, e, !0)) : delete s[d]);
    if (r !== l)
      for (const d in r)
        (!t || !M(t, d) && !0) && (delete r[d], a = !0);
  }
  a && Fe(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && pr(t || {}, s, e);
}
function ar(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let f in t) {
      if (Zt(f))
        continue;
      const a = t[f];
      let h;
      s && M(s, h = Be(f)) ? !r || !r.includes(h) ? n[h] = a : (l || (l = {}))[h] = a : vn(e.emitsOptions, f) || (!(f in o) || a !== o[f]) && (o[f] = a, i = !0);
    }
  if (r) {
    const f = I(n), a = l || U;
    for (let h = 0; h < r.length; h++) {
      const d = r[h];
      n[d] = Gn(s, f, d, a[d], e, !M(a, d));
    }
  }
  return i;
}
function Gn(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const l = M(i, "default");
    if (l && o === void 0) {
      const f = i.default;
      if (i.type !== Function && $(f)) {
        const { propsDefaults: a } = s;
        n in a ? o = a[n] : (bt(s), o = a[n] = f.call(null, t), it());
      } else
        o = f;
    }
    i[0] && (r && !l ? o = !1 : i[1] && (o === "" || o === be(n)) && (o = !0));
  }
  return o;
}
function dr(e, t, n = !1) {
  const o = t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, l = [];
  let f = !1;
  if (!$(e)) {
    const h = (d) => {
      f = !0;
      const [g, x] = dr(d, t, !0);
      Z(i, g), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!r && !f)
    return o.set(e, Et), Et;
  if (C(r))
    for (let h = 0; h < r.length; h++) {
      process.env.NODE_ENV !== "production" && !Q(r[h]) && O("props must be strings when using array syntax.", r[h]);
      const d = Be(r[h]);
      Yo(d) && (i[d] = U);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !X(r) && O("invalid props options", r);
    for (const h in r) {
      const d = Be(h);
      if (Yo(d)) {
        const g = r[h], x = i[d] = C(g) || $(g) ? { type: g } : g;
        if (x) {
          const P = Zo(Boolean, x.type), A = Zo(String, x.type);
          x[0] = P > -1, x[1] = A < 0 || P < A, (P > -1 || M(x, "default")) && l.push(d);
        }
      }
    }
  }
  const a = [i, l];
  return o.set(e, a), a;
}
function Yo(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function eo(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Xo(e, t) {
  return eo(e) === eo(t);
}
function Zo(e, t) {
  return C(t) ? t.findIndex((n) => Xo(n, e)) : $(t) && Xo(t, e) ? 0 : -1;
}
function pr(e, t, n) {
  const o = I(t), s = n.propsOptions[0];
  for (const r in s) {
    let i = s[r];
    i != null && yc(r, o[r], i, !M(e, r) && !M(e, be(r)));
  }
}
function yc(e, t, n, o) {
  const { type: s, required: r, validator: i } = n;
  if (r && o) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (s != null && s !== !0) {
      let l = !1;
      const f = C(s) ? s : [s], a = [];
      for (let h = 0; h < f.length && !l; h++) {
        const { valid: d, expectedType: g } = Dc(t, f[h]);
        a.push(g || ""), l = d;
      }
      if (!l) {
        O(xc(e, t, a));
        return;
      }
    }
    i && !i(t) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const wc = /* @__PURE__ */ vt("String,Number,Boolean,Function,Symbol,BigInt");
function Dc(e, t) {
  let n;
  const o = eo(t);
  if (wc(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = X(e) : o === "Array" ? n = C(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function xc(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(hn).join(" | ")}`;
  const s = n[0], r = ao(t), i = Qo(t, s), l = Qo(t, r);
  return n.length === 1 && Go(s) && !Vc(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, Go(r) && (o += `with value ${l}.`), o;
}
function Qo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Go(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Vc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const hr = (e) => e[0] === "_" || e === "$stable", Do = (e) => C(e) ? e.map(Ee) : [Ee(e)], Cc = (e, t, n) => {
  if (t._n)
    return t;
  const o = ki((...s) => (process.env.NODE_ENV !== "production" && ee && O(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Do(t(...s))), n);
  return o._c = !1, o;
}, _r = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (hr(s))
      continue;
    const r = e[s];
    if ($(r))
      t[s] = Cc(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && O(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);
      const i = Do(r);
      t[s] = () => i;
    }
  }
}, mr = (e, t) => {
  process.env.NODE_ENV !== "production" && !Ht(e.vnode) && O("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Do(t);
  e.slots.default = () => n;
}, Tc = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = I(t), rn(t, "_", n)) : _r(t, e.slots = {});
  } else
    e.slots = {}, t && mr(e, t);
  rn(e.slots, wn, 1);
}, $c = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = U;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && rt ? Z(s, t) : n && l === 1 ? r = !1 : (Z(s, t), !n && l === 1 && delete s._) : (r = !t.$stable, _r(t, s)), i = t;
  } else
    t && (mr(e, t), i = { default: 1 });
  if (r)
    for (const l in s)
      !hr(l) && !(l in i) && delete s[l];
};
function gr() {
  return {
    app: null,
    config: {
      isNativeTag: _s,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ic = 0;
function Pc(e, t) {
  return function(o, s = null) {
    $(o) || (o = Object.assign({}, o)), s != null && !X(s) && (process.env.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), s = null);
    const r = gr(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const f = r.app = {
      _uid: Ic++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: os,
      get config() {
        return r.config;
      },
      set config(a) {
        process.env.NODE_ENV !== "production" && O("app.config cannot be replaced. Modify individual options instead.");
      },
      use(a, ...h) {
        return i.has(a) ? process.env.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : a && $(a.install) ? (i.add(a), a.install(f, ...h)) : $(a) ? (i.add(a), a(f, ...h)) : process.env.NODE_ENV !== "production" && O('A plugin must either be a function or an object with an "install" function.'), f;
      },
      mixin(a) {
        return r.mixins.includes(a) ? process.env.NODE_ENV !== "production" && O("Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")) : r.mixins.push(a), f;
      },
      component(a, h) {
        return process.env.NODE_ENV !== "production" && no(a, r.config), h ? (process.env.NODE_ENV !== "production" && r.components[a] && O(`Component "${a}" has already been registered in target app.`), r.components[a] = h, f) : r.components[a];
      },
      directive(a, h) {
        return process.env.NODE_ENV !== "production" && cr(a), h ? (process.env.NODE_ENV !== "production" && r.directives[a] && O(`Directive "${a}" has already been registered in target app.`), r.directives[a] = h, f) : r.directives[a];
      },
      mount(a, h, d) {
        if (l)
          process.env.NODE_ENV !== "production" && O("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && O("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const g = ke(o, s);
          return g.appContext = r, process.env.NODE_ENV !== "production" && (r.reload = () => {
            e(xe(g), a, d);
          }), h && t ? t(g, a) : e(g, a, d), l = !0, f._container = a, a.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = g.component, Mi(f, os)), Co(g.component) || g.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, Fi(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(a, h) {
        return process.env.NODE_ENV !== "production" && a in r.provides && O(`App already provides property with key "${String(a)}". It will be overwritten with the new value.`), r.provides[a] = h, f;
      }
    };
    return f;
  };
}
function to(e, t, n, o, s = !1) {
  if (C(e)) {
    e.forEach((g, x) => to(g, t && (C(t) ? t[x] : t), n, o, s));
    return;
  }
  if (en(o) && !s)
    return;
  const r = o.shapeFlag & 4 ? Co(o.component) || o.component.proxy : o.el, i = s ? null : r, { i: l, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    O("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const a = t && t.r, h = l.refs === U ? l.refs = {} : l.refs, d = l.setupState;
  if (a != null && a !== f && (Q(a) ? (h[a] = null, M(d, a) && (d[a] = null)) : te(a) && (a.value = null)), $(f))
    Me(f, l, 12, [i, h]);
  else {
    const g = Q(f), x = te(f);
    if (g || x) {
      const P = () => {
        if (e.f) {
          const A = g ? h[f] : f.value;
          s ? C(A) && lo(A, r) : C(A) ? A.includes(r) || A.push(r) : g ? (h[f] = [r], M(d, f) && (d[f] = h[f])) : (f.value = [r], e.k && (h[e.k] = f.value));
        } else
          g ? (h[f] = i, M(d, f) && (d[f] = i)) : x ? (f.value = i, e.k && (h[e.k] = i)) : process.env.NODE_ENV !== "production" && O("Invalid template ref type:", f, `(${typeof f})`);
      };
      i ? (P.id = -1, ue(P, n)) : P();
    } else
      process.env.NODE_ENV !== "production" && O("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let Dt, He;
function Ie(e, t) {
  e.appContext.config.performance && an() && He.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && ji(e, t, an() ? He.now() : Date.now());
}
function Pe(e, t) {
  if (e.appContext.config.performance && an()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    He.mark(o), He.measure(`<${Dn(e, e.type)}> ${t}`, n, o), He.clearMarks(n), He.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Li(e, t, an() ? He.now() : Date.now());
}
function an() {
  return Dt !== void 0 || (typeof window < "u" && window.performance ? (Dt = !0, He = window.performance) : Dt = !1), Dt;
}
function Ac() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const ue = Yi;
function Mc(e) {
  return Fc(e);
}
function Fc(e, t) {
  Ac();
  const n = Ns();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && zs(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: s, patchProp: r, createElement: i, createText: l, createComment: f, setText: a, setElementText: h, parentNode: d, nextSibling: g, setScopeId: x = ne, cloneNode: P, insertStaticContent: A } = e, F = (c, u, p, m = null, _ = null, b = null, y = !1, N = null, v = process.env.NODE_ENV !== "production" && rt ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Ge(c, u) && (m = Wt(c), Se(c, _, b, !0), c = null), u.patchFlag === -2 && (v = !1, u.dynamicChildren = null);
    const { type: E, ref: D, shapeFlag: w } = u;
    switch (E) {
      case yn:
        K(c, u, p, m);
        break;
      case ce:
        H(c, u, p, m);
        break;
      case nn:
        c == null ? z(u, p, m, y) : process.env.NODE_ENV !== "production" && le(c, u, p, y);
        break;
      case ge:
        Ut(c, u, p, m, _, b, y, N, v);
        break;
      default:
        w & 1 ? ve(c, u, p, m, _, b, y, N, v) : w & 6 ? We(c, u, p, m, _, b, y, N, v) : w & 64 || w & 128 ? E.process(c, u, p, m, _, b, y, N, v, at) : process.env.NODE_ENV !== "production" && O("Invalid VNode type:", E, `(${typeof E})`);
    }
    D != null && _ && to(D, c && c.ref, b, u || c, !u);
  }, K = (c, u, p, m) => {
    if (c == null)
      o(u.el = l(u.children), p, m);
    else {
      const _ = u.el = c.el;
      u.children !== c.children && a(_, u.children);
    }
  }, H = (c, u, p, m) => {
    c == null ? o(u.el = f(u.children || ""), p, m) : u.el = c.el;
  }, z = (c, u, p, m) => {
    [c.el, c.anchor] = A(c.children, u, p, m, c.el, c.anchor);
  }, le = (c, u, p, m) => {
    if (u.children !== c.children) {
      const _ = g(c.anchor);
      Ve(c), [u.el, u.anchor] = A(u.children, p, _, m);
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, J = ({ el: c, anchor: u }, p, m) => {
    let _;
    for (; c && c !== u; )
      _ = g(c), o(c, p, m), c = _;
    o(u, p, m);
  }, Ve = ({ el: c, anchor: u }) => {
    let p;
    for (; c && c !== u; )
      p = g(c), s(c), c = p;
    s(u);
  }, ve = (c, u, p, m, _, b, y, N, v) => {
    y = y || u.type === "svg", c == null ? R(u, p, m, _, b, y, N, v) : fe(c, u, _, b, y, N, v);
  }, R = (c, u, p, m, _, b, y, N) => {
    let v, E;
    const { type: D, props: w, shapeFlag: V, transition: T, patchFlag: L, dirs: B } = c;
    if (process.env.NODE_ENV === "production" && c.el && P !== void 0 && L === -1)
      v = c.el = P(c.el);
    else {
      if (v = c.el = i(c.type, b, w && w.is, w), V & 8 ? h(v, c.children) : V & 16 && k(c.children, v, null, m, _, b && D !== "foreignObject", y, N), B && qe(c, null, m, "created"), w) {
        for (const q in w)
          q !== "value" && !Zt(q) && r(v, q, null, w[q], b, c.children, m, _, Te);
        "value" in w && r(v, "value", null, w.value), (E = w.onVnodeBeforeMount) && we(E, m, c);
      }
      Y(v, c, c.scopeId, y, m);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(v, "__vnode", {
      value: c,
      enumerable: !1
    }), Object.defineProperty(v, "__vueParentComponent", {
      value: m,
      enumerable: !1
    })), B && qe(c, null, m, "beforeMount");
    const W = (!_ || _ && !_.pendingBranch) && T && !T.persisted;
    W && T.beforeEnter(v), o(v, u, p), ((E = w && w.onVnodeMounted) || W || B) && ue(() => {
      E && we(E, m, c), W && T.enter(v), B && qe(c, null, m, "mounted");
    }, _);
  }, Y = (c, u, p, m, _) => {
    if (p && x(c, p), m)
      for (let b = 0; b < m.length; b++)
        x(c, m[b]);
    if (_) {
      let b = _.subTree;
      if (process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = Qs(b.children) || b), u === b) {
        const y = _.vnode;
        Y(c, y, y.scopeId, y.slotScopeIds, _.parent);
      }
    }
  }, k = (c, u, p, m, _, b, y, N, v = 0) => {
    for (let E = v; E < c.length; E++) {
      const D = c[E] = N ? Le(c[E]) : Ee(c[E]);
      F(null, D, u, p, m, _, b, y, N);
    }
  }, fe = (c, u, p, m, _, b, y) => {
    const N = u.el = c.el;
    let { patchFlag: v, dynamicChildren: E, dirs: D } = u;
    v |= c.patchFlag & 16;
    const w = c.props || U, V = u.props || U;
    let T;
    p && ze(p, !1), (T = V.onVnodeBeforeUpdate) && we(T, p, u, c), D && qe(u, c, p, "beforeUpdate"), p && ze(p, !0), process.env.NODE_ENV !== "production" && rt && (v = 0, y = !1, E = null);
    const L = _ && u.type !== "foreignObject";
    if (E ? (G(c.dynamicChildren, E, N, p, m, L, b), process.env.NODE_ENV !== "production" && p && p.type.__hmrId && tn(c, u)) : y || Ot(c, u, N, null, p, m, L, b, !1), v > 0) {
      if (v & 16)
        Oe(N, u, w, V, p, m, _);
      else if (v & 2 && w.class !== V.class && r(N, "class", null, V.class, _), v & 4 && r(N, "style", w.style, V.style, _), v & 8) {
        const B = u.dynamicProps;
        for (let W = 0; W < B.length; W++) {
          const q = B[W], me = w[q], dt = V[q];
          (dt !== me || q === "value") && r(N, q, me, dt, _, c.children, p, m, Te);
        }
      }
      v & 1 && c.children !== u.children && h(N, u.children);
    } else
      !y && E == null && Oe(N, u, w, V, p, m, _);
    ((T = V.onVnodeUpdated) || D) && ue(() => {
      T && we(T, p, u, c), D && qe(u, c, p, "updated");
    }, m);
  }, G = (c, u, p, m, _, b, y) => {
    for (let N = 0; N < u.length; N++) {
      const v = c[N], E = u[N], D = v.el && (v.type === ge || !Ge(v, E) || v.shapeFlag & 70) ? d(v.el) : p;
      F(v, E, D, null, m, _, b, y, !0);
    }
  }, Oe = (c, u, p, m, _, b, y) => {
    if (p !== m) {
      for (const N in m) {
        if (Zt(N))
          continue;
        const v = m[N], E = p[N];
        v !== E && N !== "value" && r(c, N, E, v, y, u.children, _, b, Te);
      }
      if (p !== U)
        for (const N in p)
          !Zt(N) && !(N in m) && r(c, N, p[N], null, y, u.children, _, b, Te);
      "value" in m && r(c, "value", p.value, m.value);
    }
  }, Ut = (c, u, p, m, _, b, y, N, v) => {
    const E = u.el = c ? c.el : l(""), D = u.anchor = c ? c.anchor : l("");
    let { patchFlag: w, dynamicChildren: V, slotScopeIds: T } = u;
    process.env.NODE_ENV !== "production" && (rt || w & 2048) && (w = 0, v = !1, V = null), T && (N = N ? N.concat(T) : T), c == null ? (o(E, p, m), o(D, p, m), k(u.children, p, D, _, b, y, N, v)) : w > 0 && w & 64 && V && c.dynamicChildren ? (G(c.dynamicChildren, V, p, _, b, y, N), process.env.NODE_ENV !== "production" && _ && _.type.__hmrId ? tn(c, u) : (u.key != null || _ && u === _.subTree) && tn(c, u, !0)) : Ot(c, u, p, D, _, b, y, N, v);
  }, We = (c, u, p, m, _, b, y, N, v) => {
    u.slotScopeIds = N, c == null ? u.shapeFlag & 512 ? _.ctx.activate(u, p, m, y, v) : oe(u, p, m, _, b, y, v) : j(c, u, v);
  }, oe = (c, u, p, m, _, b, y) => {
    const N = c.component = Jc(c, m, _);
    if (process.env.NODE_ENV !== "production" && N.type.__hmrId && $i(N), process.env.NODE_ENV !== "production" && (Qt(c), Ie(N, "mount")), Ht(c) && (N.ctx.renderer = at), process.env.NODE_ENV !== "production" && Ie(N, "init"), Zc(N), process.env.NODE_ENV !== "production" && Pe(N, "init"), N.asyncDep) {
      if (_ && _.registerDep(N, S), !c.el) {
        const v = N.subTree = ke(ce);
        H(null, v, u, p);
      }
      return;
    }
    S(N, c, u, p, _, b, y), process.env.NODE_ENV !== "production" && (Gt(), Pe(N, "mount"));
  }, j = (c, u, p) => {
    const m = u.component = c.component;
    if (qi(c, u, p))
      if (m.asyncDep && !m.asyncResolved) {
        process.env.NODE_ENV !== "production" && Qt(u), Ce(m, u, p), process.env.NODE_ENV !== "production" && Gt();
        return;
      } else
        m.next = u, Ci(m.update), m.update();
    else
      u.el = c.el, m.vnode = u;
  }, S = (c, u, p, m, _, b, y) => {
    const N = () => {
      if (c.isMounted) {
        let { next: D, bu: w, u: V, parent: T, vnode: L } = c, B = D, W;
        process.env.NODE_ENV !== "production" && Qt(D || c.vnode), ze(c, !1), D ? (D.el = L.el, Ce(c, D, y)) : D = L, w && wt(w), (W = D.props && D.props.onVnodeBeforeUpdate) && we(W, T, D, L), ze(c, !0), process.env.NODE_ENV !== "production" && Ie(c, "render");
        const q = $n(c);
        process.env.NODE_ENV !== "production" && Pe(c, "render");
        const me = c.subTree;
        c.subTree = q, process.env.NODE_ENV !== "production" && Ie(c, "patch"), F(
          me,
          q,
          d(me.el),
          Wt(me),
          c,
          _,
          b
        ), process.env.NODE_ENV !== "production" && Pe(c, "patch"), D.el = q.el, B === null && zi(c, q.el), V && ue(V, _), (W = D.props && D.props.onVnodeUpdated) && ue(() => we(W, T, D, L), _), process.env.NODE_ENV !== "production" && Js(c), process.env.NODE_ENV !== "production" && Gt();
      } else {
        let D;
        const { el: w, props: V } = u, { bm: T, m: L, parent: B } = c, W = en(u);
        if (ze(c, !1), T && wt(T), !W && (D = V && V.onVnodeBeforeMount) && we(D, B, u), ze(c, !0), w && Cn) {
          const q = () => {
            process.env.NODE_ENV !== "production" && Ie(c, "render"), c.subTree = $n(c), process.env.NODE_ENV !== "production" && Pe(c, "render"), process.env.NODE_ENV !== "production" && Ie(c, "hydrate"), Cn(w, c.subTree, c, _, null), process.env.NODE_ENV !== "production" && Pe(c, "hydrate");
          };
          W ? u.type.__asyncLoader().then(
            () => !c.isUnmounted && q()
          ) : q();
        } else {
          process.env.NODE_ENV !== "production" && Ie(c, "render");
          const q = c.subTree = $n(c);
          process.env.NODE_ENV !== "production" && Pe(c, "render"), process.env.NODE_ENV !== "production" && Ie(c, "patch"), F(null, q, p, m, c, _, b), process.env.NODE_ENV !== "production" && Pe(c, "patch"), u.el = q.el;
        }
        if (L && ue(L, _), !W && (D = V && V.onVnodeMounted)) {
          const q = u;
          ue(() => we(D, B, q), _);
        }
        (u.shapeFlag & 256 || B && en(B.vnode) && B.vnode.shapeFlag & 256) && c.a && ue(c.a, _), c.isMounted = !0, process.env.NODE_ENV !== "production" && Ri(c), u = p = m = null;
      }
    }, v = c.effect = new ho(
      N,
      () => bo(E),
      c.scope
    ), E = c.update = () => v.run();
    E.id = c.uid, ze(c, !0), process.env.NODE_ENV !== "production" && (v.onTrack = c.rtc ? (D) => wt(c.rtc, D) : void 0, v.onTrigger = c.rtg ? (D) => wt(c.rtg, D) : void 0, E.ownerInstance = c), E();
  }, Ce = (c, u, p) => {
    u.component = c;
    const m = c.vnode.props;
    c.vnode = u, c.next = null, Oc(c, u.props, m, p), $c(c, u.children, p), ft(), bn(void 0, c.update), ut();
  }, Ot = (c, u, p, m, _, b, y, N, v = !1) => {
    const E = c && c.children, D = c ? c.shapeFlag : 0, w = u.children, { patchFlag: V, shapeFlag: T } = u;
    if (V > 0) {
      if (V & 128) {
        Bt(E, w, p, m, _, b, y, N, v);
        return;
      } else if (V & 256) {
        kt(E, w, p, m, _, b, y, N, v);
        return;
      }
    }
    T & 8 ? (D & 16 && Te(E, _, b), w !== E && h(p, w)) : D & 16 ? T & 16 ? Bt(E, w, p, m, _, b, y, N, v) : Te(E, _, b, !0) : (D & 8 && h(p, ""), T & 16 && k(w, p, m, _, b, y, N, v));
  }, kt = (c, u, p, m, _, b, y, N, v) => {
    c = c || Et, u = u || Et;
    const E = c.length, D = u.length, w = Math.min(E, D);
    let V;
    for (V = 0; V < w; V++) {
      const T = u[V] = v ? Le(u[V]) : Ee(u[V]);
      F(c[V], T, p, null, _, b, y, N, v);
    }
    E > D ? Te(c, _, b, !0, !1, w) : k(u, p, m, _, b, y, N, v, w);
  }, Bt = (c, u, p, m, _, b, y, N, v) => {
    let E = 0;
    const D = u.length;
    let w = c.length - 1, V = D - 1;
    for (; E <= w && E <= V; ) {
      const T = c[E], L = u[E] = v ? Le(u[E]) : Ee(u[E]);
      if (Ge(T, L))
        F(T, L, p, null, _, b, y, N, v);
      else
        break;
      E++;
    }
    for (; E <= w && E <= V; ) {
      const T = c[w], L = u[V] = v ? Le(u[V]) : Ee(u[V]);
      if (Ge(T, L))
        F(T, L, p, null, _, b, y, N, v);
      else
        break;
      w--, V--;
    }
    if (E > w) {
      if (E <= V) {
        const T = V + 1, L = T < D ? u[T].el : m;
        for (; E <= V; )
          F(null, u[E] = v ? Le(u[E]) : Ee(u[E]), p, L, _, b, y, N, v), E++;
      }
    } else if (E > V)
      for (; E <= w; )
        Se(c[E], _, b, !0), E++;
    else {
      const T = E, L = E, B = /* @__PURE__ */ new Map();
      for (E = L; E <= V; E++) {
        const se = u[E] = v ? Le(u[E]) : Ee(u[E]);
        se.key != null && (process.env.NODE_ENV !== "production" && B.has(se.key) && O("Duplicate keys found during update:", JSON.stringify(se.key), "Make sure keys are unique."), B.set(se.key, E));
      }
      let W, q = 0;
      const me = V - L + 1;
      let dt = !1, Io = 0;
      const yt = new Array(me);
      for (E = 0; E < me; E++)
        yt[E] = 0;
      for (E = T; E <= w; E++) {
        const se = c[E];
        if (q >= me) {
          Se(se, _, b, !0);
          continue;
        }
        let ye;
        if (se.key != null)
          ye = B.get(se.key);
        else
          for (W = L; W <= V; W++)
            if (yt[W - L] === 0 && Ge(se, u[W])) {
              ye = W;
              break;
            }
        ye === void 0 ? Se(se, _, b, !0) : (yt[ye - L] = E + 1, ye >= Io ? Io = ye : dt = !0, F(se, u[ye], p, null, _, b, y, N, v), q++);
      }
      const Po = dt ? Rc(yt) : Et;
      for (W = Po.length - 1, E = me - 1; E >= 0; E--) {
        const se = L + E, ye = u[se], Ao = se + 1 < D ? u[se + 1].el : m;
        yt[E] === 0 ? F(null, ye, p, Ao, _, b, y, N, v) : dt && (W < 0 || E !== Po[W] ? Kt(ye, p, Ao, 2) : W--);
      }
    }
  }, Kt = (c, u, p, m, _ = null) => {
    const { el: b, type: y, transition: N, children: v, shapeFlag: E } = c;
    if (E & 6) {
      Kt(c.component.subTree, u, p, m);
      return;
    }
    if (E & 128) {
      c.suspense.move(u, p, m);
      return;
    }
    if (E & 64) {
      y.move(c, u, p, at);
      return;
    }
    if (y === ge) {
      o(b, u, p);
      for (let w = 0; w < v.length; w++)
        Kt(v[w], u, p, m);
      o(c.anchor, u, p);
      return;
    }
    if (y === nn) {
      J(c, u, p);
      return;
    }
    if (m !== 2 && E & 1 && N)
      if (m === 0)
        N.beforeEnter(b), o(b, u, p), ue(() => N.enter(b), _);
      else {
        const { leave: w, delayLeave: V, afterLeave: T } = N, L = () => o(b, u, p), B = () => {
          w(b, () => {
            L(), T && T();
          });
        };
        V ? V(b, L, B) : B();
      }
    else
      o(b, u, p);
  }, Se = (c, u, p, m = !1, _ = !1) => {
    const { type: b, props: y, ref: N, children: v, dynamicChildren: E, shapeFlag: D, patchFlag: w, dirs: V } = c;
    if (N != null && to(N, null, p, c, !0), D & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const T = D & 1 && V, L = !en(c);
    let B;
    if (L && (B = y && y.onVnodeBeforeUnmount) && we(B, u, c), D & 6)
      Tr(c.component, p, m);
    else {
      if (D & 128) {
        c.suspense.unmount(p, m);
        return;
      }
      T && qe(c, null, u, "beforeUnmount"), D & 64 ? c.type.remove(c, u, p, _, at, m) : E && (b !== ge || w > 0 && w & 64) ? Te(E, u, p, !1, !0) : (b === ge && w & 384 || !_ && D & 16) && Te(v, u, p), m && xn(c);
    }
    (L && (B = y && y.onVnodeUnmounted) || T) && ue(() => {
      B && we(B, u, c), T && qe(c, null, u, "unmounted");
    }, p);
  }, xn = (c) => {
    const { type: u, el: p, anchor: m, transition: _ } = c;
    if (u === ge) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && _ && !_.persisted ? c.children.forEach((y) => {
        y.type === ce ? s(y.el) : xn(y);
      }) : Cr(p, m);
      return;
    }
    if (u === nn) {
      Ve(c);
      return;
    }
    const b = () => {
      s(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: y, delayLeave: N } = _, v = () => y(p, b);
      N ? N(c.el, b, v) : v();
    } else
      b();
  }, Cr = (c, u) => {
    let p;
    for (; c !== u; )
      p = g(c), s(c), c = p;
    s(u);
  }, Tr = (c, u, p) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && Ii(c);
    const { bum: m, scope: _, update: b, subTree: y, um: N } = c;
    m && wt(m), _.stop(), b && (b.active = !1, Se(y, c, u, p)), N && ue(N, u), ue(() => {
      c.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), process.env.NODE_ENV !== "production" && Si(c);
  }, Te = (c, u, p, m = !1, _ = !1, b = 0) => {
    for (let y = b; y < c.length; y++)
      Se(c[y], u, p, m, _);
  }, Wt = (c) => c.shapeFlag & 6 ? Wt(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : g(c.anchor || c.el), $o = (c, u, p) => {
    c == null ? u._vnode && Se(u._vnode, null, null, !0) : F(u._vnode || null, c, u, null, null, null, p), Ks(), u._vnode = c;
  }, at = {
    p: F,
    um: Se,
    m: Kt,
    r: xn,
    mt: oe,
    mc: k,
    pc: Ot,
    pbc: G,
    n: Wt,
    o: e
  };
  let Vn, Cn;
  return t && ([Vn, Cn] = t(at)), {
    render: $o,
    hydrate: Vn,
    createApp: Pc($o, Vn)
  };
}
function ze({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function tn(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (C(o) && C(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = Le(s[r]), l.el = i.el), n || tn(i, l)), process.env.NODE_ENV !== "production" && l.type === ce && !l.el && (l.el = i.el);
    }
}
function Rc(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, l;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const a = e[o];
    if (a !== 0) {
      if (s = n[n.length - 1], e[s] < a) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < a ? r = l + 1 : i = l;
      a < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
const Sc = (e) => e.__isTeleport, ge = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), yn = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), ce = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), nn = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), It = [];
let Ne = null;
function jc(e = !1) {
  It.push(Ne = e ? null : []);
}
function Lc() {
  It.pop(), Ne = It[It.length - 1] || null;
}
let Rt = 1;
function es(e) {
  Rt += e;
}
function Hc(e) {
  return e.dynamicChildren = Rt > 0 ? Ne || Et : null, Lc(), Rt > 0 && Ne && Ne.push(e), e;
}
function Uc(e, t, n, o, s, r) {
  return Hc(Nr(e, t, n, o, s, r, !0));
}
function xo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ge(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && ht.has(t.type) ? !1 : e.type === t.type && e.key === t.key;
}
const kc = (...e) => br(...e), wn = "__vInternal", Er = ({ key: e }) => e != null ? e : null, on = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? Q(e) || te(e) || $(e) ? { i: he, r: e, k: t, f: !!n } : e : null;
function Nr(e, t = null, n = null, o = 0, s = null, r = e === ge ? 0 : 1, i = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Er(t),
    ref: t && on(t),
    scopeId: Zs,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null
  };
  return l ? (Vo(f, n), r & 128 && e.normalize(f)) : n && (f.shapeFlag |= Q(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && O("VNode created with invalid key (NaN). VNode type:", f.type), Rt > 0 && !i && Ne && (f.patchFlag > 0 || r & 6) && f.patchFlag !== 32 && Ne.push(f), f;
}
const ke = process.env.NODE_ENV !== "production" ? kc : br;
function br(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === ac) && (process.env.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = ce), xo(e)) {
    const l = xe(e, t, !0);
    return n && Vo(l, n), Rt > 0 && !r && Ne && (l.shapeFlag & 6 ? Ne[Ne.indexOf(e)] = l : Ne.push(l)), l.patchFlag |= -2, l;
  }
  if (Dr(e) && (e = e.__vccOpts), t) {
    t = Bc(t);
    let { class: l, style: f } = t;
    l && !Q(l) && (t.class = co(l)), X(f) && (Bn(f) && !C(f) && (f = Z({}, f)), t.style = io(f));
  }
  const i = Q(e) ? 1 : Ji(e) ? 128 : Sc(e) ? 64 : X(e) ? 4 : $(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Bn(e) && (e = I(e), O("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Nr(e, t, n, o, s, i, r, !0);
}
function Bc(e) {
  return e ? Bn(e) || wn in e ? Z({}, e) : e : null;
}
function xe(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: i } = e, l = t ? Wc(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Er(l),
    ref: t && t.ref ? n && s ? C(s) ? s.concat(on(t)) : [s, on(t)] : on(t) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && C(i) ? i.map(vr) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ge ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && xe(e.ssContent),
    ssFallback: e.ssFallback && xe(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function vr(e) {
  const t = xe(e);
  return C(e.children) && (t.children = e.children.map(vr)), t;
}
function Kc(e = " ", t = 0) {
  return ke(yn, null, e, t);
}
function Ee(e) {
  return e == null || typeof e == "boolean" ? ke(ce) : C(e) ? ke(
    ge,
    null,
    e.slice()
  ) : typeof e == "object" ? Le(e) : ke(yn, null, String(e));
}
function Le(e) {
  return e.el === null || e.memo ? e : xe(e);
}
function Vo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Vo(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(wn in t) ? t._ctx = he : s === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    $(t) ? (t = { default: t, _ctx: he }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Kc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Wc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = co([t.class, o.class]));
      else if (s === "style")
        t.style = io([t.style, o.style]);
      else if (jt(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(C(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
function we(e, t, n, o = null) {
  _e(e, t, 7, [
    n,
    o
  ]);
}
const qc = gr();
let zc = 0;
function Jc(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || qc, r = {
    uid: zc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Hr(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: dr(o, s),
    emitsOptions: Xs(o, s),
    emit: null,
    emitted: null,
    propsDefaults: U,
    inheritAttrs: o.inheritAttrs,
    ctx: U,
    data: U,
    props: U,
    attrs: U,
    slots: U,
    refs: U,
    setupState: U,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = dc(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Ui.bind(null, r), e.ce && e.ce(r), r;
}
let ee = null;
const Yc = () => ee || he, bt = (e) => {
  ee = e, e.scope.on();
}, it = () => {
  ee && ee.scope.off(), ee = null;
}, Xc = /* @__PURE__ */ vt("slot,component");
function no(e, t) {
  const n = t.isNativeTag || _s;
  (Xc(e) || n(e)) && O("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Or(e) {
  return e.vnode.shapeFlag & 4;
}
let St = !1;
function Zc(e, t = !1) {
  St = t;
  const { props: n, children: o } = e.vnode, s = Or(e);
  vc(e, n, s, t), Tc(e, o);
  const r = s ? Qc(e, t) : void 0;
  return St = !1, r;
}
function Qc(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && no(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        no(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        cr(r[i]);
    }
    o.compilerOptions && Gc() && O('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = As(new Proxy(e.ctx, lr)), process.env.NODE_ENV !== "production" && pc(e);
  const { setup: s } = o;
  if (s) {
    const r = e.setupContext = s.length > 1 ? el(e) : null;
    bt(e), ft();
    const i = Me(s, e, 0, [process.env.NODE_ENV !== "production" ? mt(e.props) : e.props, r]);
    if (ut(), it(), uo(i)) {
      if (i.then(it, it), t)
        return i.then((l) => {
          ts(e, l, t);
        }).catch((l) => {
          Nn(l, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        O(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      ts(e, i, t);
  } else
    yr(e, t);
}
function ts(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : X(t) ? (process.env.NODE_ENV !== "production" && xo(t) && O("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ss(t), process.env.NODE_ENV !== "production" && hc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && O(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), yr(e, n);
}
let oo;
const Gc = () => !oo;
function yr(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && oo && !o.render) {
      const s = o.template;
      if (s) {
        process.env.NODE_ENV !== "production" && Ie(e, "compile");
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: f } = o, a = Z(Z({
          isCustomElement: r,
          delimiters: l
        }, i), f);
        o.render = oo(s, a), process.env.NODE_ENV !== "production" && Pe(e, "compile");
      }
    }
    e.render = o.render || ne;
  }
  bt(e), ft(), mc(e), ut(), it(), process.env.NODE_ENV !== "production" && !o.render && e.render === ne && !t && (o.template ? O('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : O("Component is missing template or render function."));
}
function ns(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return fn(), ae(e, "get", "$attrs"), t[n];
    },
    set() {
      return O("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return O("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return ae(e, "get", "$attrs"), t[n];
    }
  });
}
function el(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && O("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = ns(e));
    },
    get slots() {
      return mt(e.slots);
    },
    get emit() {
      return (o, ...s) => e.emit(o, ...s);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = ns(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Co(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ss(As(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Nt)
          return Nt[n](e);
      }
    }));
}
const tl = /(?:^|[-_])(\w)/g, nl = (e) => e.replace(tl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function wr(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Dn(e, t, n = !1) {
  let o = wr(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(e.components || e.parent.type.components) || s(e.appContext.components);
  }
  return o ? nl(o) : n ? "App" : "Anonymous";
}
function Dr(e) {
  return $(e) && "__vccOpts" in e;
}
const ol = (e, t) => bi(e, t, St);
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function Mn(e) {
  return !!(e && e.__v_isShallow);
}
function sl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, s = {
    header(d) {
      return X(d) ? d.__isVue ? ["div", e, "VueInstance"] : te(d) ? [
        "div",
        {},
        ["span", e, h(d)],
        "<",
        l(d.value),
        ">"
      ] : ot(d) ? [
        "div",
        {},
        ["span", e, Mn(d) ? "ShallowReactive" : "Reactive"],
        "<",
        l(d),
        `>${ct(d) ? " (readonly)" : ""}`
      ] : ct(d) ? [
        "div",
        {},
        ["span", e, Mn(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...r(d.$)
        ];
    }
  };
  function r(d) {
    const g = [];
    d.type.props && d.props && g.push(i("props", I(d.props))), d.setupState !== U && g.push(i("setup", d.setupState)), d.data !== U && g.push(i("data", I(d.data)));
    const x = f(d, "computed");
    x && g.push(i("computed", x));
    const P = f(d, "inject");
    return P && g.push(i("injected", P)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), g;
  }
  function i(d, g) {
    return g = Z({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((x) => [
          "div",
          {},
          ["span", o, x + ": "],
          l(g[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, g = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : X(d) ? ["object", { object: g ? I(d) : d }] : ["span", n, String(d)];
  }
  function f(d, g) {
    const x = d.type;
    if ($(x))
      return;
    const P = {};
    for (const A in d.ctx)
      a(x, A, g) && (P[A] = d.ctx[A]);
    return P;
  }
  function a(d, g, x) {
    const P = d[x];
    if (C(P) && P.includes(g) || X(P) && g in P || d.extends && a(d.extends, g, x) || d.mixins && d.mixins.some((A) => a(A, g, x)))
      return !0;
  }
  function h(d) {
    return Mn(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const os = "3.2.37", rl = "http://www.w3.org/2000/svg", et = typeof document < "u" ? document : null, ss = et && /* @__PURE__ */ et.createElement("template"), il = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t ? et.createElementNS(rl, e) : et.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => et.createTextNode(e),
  createComment: (e) => et.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => et.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  cloneNode(e) {
    const t = e.cloneNode(!0);
    return "_value" in e && (t._value = e._value), t;
  },
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      ss.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = ss.content;
      if (o) {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      i ? i.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function cl(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function ll(e, t, n) {
  const o = e.style, s = Q(n);
  if (n && !s) {
    for (const r in n)
      so(o, r, n[r]);
    if (t && !Q(t))
      for (const r in t)
        n[r] == null && so(o, r, "");
  } else {
    const r = o.display;
    s ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = r);
  }
}
const rs = /\s*!important$/;
function so(e, t, n) {
  if (C(n))
    n.forEach((o) => so(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = fl(e, t);
    rs.test(n) ? e.setProperty(be(o), n.replace(rs, ""), "important") : e[o] = n;
  }
}
const is = ["Webkit", "Moz", "ms"], Fn = {};
function fl(e, t) {
  const n = Fn[t];
  if (n)
    return n;
  let o = Be(t);
  if (o !== "filter" && o in e)
    return Fn[t] = o;
  o = hn(o);
  for (let s = 0; s < is.length; s++) {
    const r = is[s] + o;
    if (r in e)
      return Fn[t] = r;
  }
  return t;
}
const cs = "http://www.w3.org/1999/xlink";
function ul(e, t, n, o, s) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(cs, t.slice(6, t.length)) : e.setAttributeNS(cs, t, n);
  else {
    const r = Ir(t);
    n == null || r && !ds(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function al(e, t, n, o, s, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, s, r), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const f = n == null ? "" : n;
    (e.value !== f || e.tagName === "OPTION") && (e.value = f), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = ds(n) : n == null && f === "string" ? (n = "", l = !0) : f === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (f) {
    process.env.NODE_ENV !== "production" && O(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, f);
  }
  l && e.removeAttribute(t);
}
const [xr, dl] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let ro = 0;
const pl = /* @__PURE__ */ Promise.resolve(), hl = () => {
  ro = 0;
}, _l = () => ro || (pl.then(hl), ro = xr());
function ml(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function gl(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function El(e, t, n, o, s = null) {
  const r = e._vei || (e._vei = {}), i = r[t];
  if (o && i)
    i.value = o;
  else {
    const [l, f] = Nl(t);
    if (o) {
      const a = r[t] = bl(o, s);
      ml(e, l, a, f);
    } else
      i && (gl(e, l, i, f), r[t] = void 0);
  }
}
const ls = /(?:Once|Passive|Capture)$/;
function Nl(e) {
  let t;
  if (ls.test(e)) {
    t = {};
    let n;
    for (; n = e.match(ls); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [be(e.slice(2)), t];
}
function bl(e, t) {
  const n = (o) => {
    const s = o.timeStamp || xr();
    (dl || s >= n.attached - 1) && _e(vl(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = _l(), n;
}
function vl(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (s) => !s._stopped && o && o(s));
  } else
    return t;
}
const fs = /^on[a-z]/, Ol = (e, t, n, o, s = !1, r, i, l, f) => {
  t === "class" ? cl(e, o, s) : t === "style" ? ll(e, n, o) : jt(t) ? sn(t) || El(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : yl(e, t, o, s)) ? al(e, t, o, r, i, l, f) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ul(e, t, o, s));
};
function yl(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && fs.test(t) && $(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || fs.test(t) && Q(n) ? !1 : t in e;
}
function Vr(e, t) {
  const n = yo(e);
  class o extends To {
    constructor(r) {
      super(n, r, t);
    }
  }
  return o.def = n, o;
}
const wl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class To extends wl {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && O("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), this.attachShadow({ mode: "open" }));
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, Hs(() => {
      this._connected || (as(null, this.shadowRoot), this._instance = null);
    });
  }
  _resolveDef() {
    if (this._resolved)
      return;
    this._resolved = !0;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    new MutationObserver((o) => {
      for (const s of o)
        this._setAttr(s.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (o) => {
      const { props: s, styles: r } = o, i = !C(s), l = s ? i ? Object.keys(s) : s : [];
      let f;
      if (i)
        for (const a in this._props) {
          const h = s[a];
          (h === Number || h && h.type === Number) && (this._props[a] = Rn(this._props[a]), (f || (f = /* @__PURE__ */ Object.create(null)))[a] = !0);
        }
      this._numberProps = f;
      for (const a of Object.keys(this))
        a[0] !== "_" && this._setProp(a, this[a], !0, !1);
      for (const a of l.map(Be))
        Object.defineProperty(this, a, {
          get() {
            return this._getProp(a);
          },
          set(h) {
            this._setProp(a, h);
          }
        });
      this._applyStyles(r), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then(t) : t(this._def);
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    this._numberProps && this._numberProps[t] && (n = Rn(n)), this._setProp(Be(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, o = !0, s = !0) {
    n !== this._props[t] && (this._props[t] = n, s && this._instance && this._update(), o && (n === !0 ? this.setAttribute(be(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(be(t), n + "") : n || this.removeAttribute(be(t))));
  }
  _update() {
    as(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = ke(this._def, Z({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, process.env.NODE_ENV !== "production" && (n.ceReload = (s) => {
        this._styles && (this._styles.forEach((r) => this.shadowRoot.removeChild(r)), this._styles.length = 0), this._applyStyles(s), this._def.__asyncLoader || (this._instance = null, this._update());
      }), n.emit = (s, ...r) => {
        this.dispatchEvent(new CustomEvent(s, {
          detail: r
        }));
      };
      let o = this;
      for (; o = o && (o.parentNode || o.host); )
        if (o instanceof To) {
          n.parent = o._instance;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const o = document.createElement("style");
      o.textContent = n, this.shadowRoot.appendChild(o), process.env.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(o);
    });
  }
}
const Dl = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
ec.props;
const xl = /* @__PURE__ */ Z({ patchProp: Ol }, il);
let us;
function Vl() {
  return us || (us = Mc(xl));
}
const as = (...e) => {
  Vl().render(...e);
};
function Cl() {
  sl();
}
process.env.NODE_ENV !== "production" && Cl();
const Tl = /* @__PURE__ */ yo({
  __name: "Clock",
  setup(e) {
    let t = _i(new Date());
    return setInterval(() => {
      t.value = new Date();
    }), (n, o) => ps(Rs(t));
  }
}), $l = /* @__PURE__ */ yo({
  __name: "Message",
  props: {
    msg: {
      type: String,
      default: "Hello World"
    }
  },
  setup(e) {
    return (t, n) => (jc(), Uc("div", null, ps(e.msg), 1));
  }
}), Il = Vr(Tl), Pl = Vr($l);
customElements.define("wc-clock", Il);
customElements.define("wc-message", Pl);
