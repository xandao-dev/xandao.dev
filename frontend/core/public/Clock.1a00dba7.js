import{S as l,i as c,a as u,b as i,s as d,e as f,t as m,n as o,c as p,d as g,f as h,o as b,g as v}from"./index.ed5e0a54.js";function _(r){let t,a=(r[0]||"")+"",n;return{c(){t=f("span"),n=m(a),this.c=o},m(e,s){i(e,t,s),p(t,n)},p(e,[s]){s&1&&a!==(a=(e[0]||"")+"")&&g(n,a)},i:o,o,d(e){e&&h(t)}}}function w(r,t,a){let n=new Date().toLocaleTimeString(),e;return b(()=>{e=setInterval(()=>{a(0,n=new Date().toLocaleTimeString())},1e3)}),v(()=>{clearInterval(e)}),[n]}class k extends l{constructor(t){super(),this.shadowRoot.innerHTML="<style>span{font-family:inherit;font-size:inherit;padding:1em 2em;color:#ff3e00;background-color:rgba(255, 62, 0, 0.1);border-radius:2em;border:2px solid rgba(255, 62, 0, 0);outline:none;width:200px;font-variant-numeric:tabular-nums;cursor:pointer}span:active{background-color:rgba(255, 62, 0, 0.2)}</style>",c(this,{target:this.shadowRoot,props:u(this.attributes),customElement:!0},w,_,d,{},null),t&&t.target&&i(t.target,this,t.anchor)}}customElements.define("wc-clock",k);