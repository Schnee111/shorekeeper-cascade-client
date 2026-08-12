var Jv=Object.defineProperty;var sc=e=>{throw TypeError(e)};var ew=(e,t,r)=>t in e?Jv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var pt=(e,t,r)=>ew(e,typeof t!="symbol"?t+"":t,r),Ws=(e,t,r)=>t.has(e)||sc("Cannot "+r);var O=(e,t,r)=>(Ws(e,t,"read from private field"),r?r.call(e):t.get(e)),ge=(e,t,r)=>t.has(e)?sc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),fe=(e,t,r,i)=>(Ws(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),Ie=(e,t,r)=>(Ws(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const mm=!1;var Tu=Array.isArray,tw=Array.prototype.indexOf,Xa=Array.prototype.includes,hs=Array.from,rw=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,gm=Object.getOwnPropertyDescriptors,iw=Object.prototype,nw=Array.prototype,Eu=Object.getPrototypeOf,oc=Object.isExtensible;function yn(e){return typeof e=="function"}const aw=()=>{};function sw(e){return e()}function Ko(e){for(var t=0;t<e.length;t++)e[t]()}function _m(){var e,t,r=new Promise((i,n)=>{e=i,t=n});return{promise:r,resolve:e,reject:t}}function ow(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const i of e)if(r.push(i),r.length===t)break;return r}const Ye=2,Zi=4,ra=8,Cu=1<<24,Kt=16,Bt=32,Sr=64,Zo=128,Ot=512,Fe=1024,Ve=2048,Xt=4096,dt=8192,kt=16384,an=32768,uc=1<<25,yi=65536,Ya=1<<17,uw=1<<18,sn=1<<19,ym=1<<20,ur=1<<25,bi=65536,Qa=1<<21,Li=1<<22,Lr=1<<23,$r=Symbol("$state"),bm=Symbol("legacy props"),lw=Symbol(""),Ua=Symbol("attributes"),Xo=Symbol("class"),Yo=Symbol("style"),Rn=Symbol("text"),La=Symbol("form reset"),ia=new class extends Error{constructor(){super(...arguments);pt(this,"name","StaleReactionError");pt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var pm;const zu=!!((pm=globalThis.document)!=null&&pm.contentType)&&globalThis.document.contentType.includes("xml");function dw(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function cw(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function pw(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function fw(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function hw(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function mw(e){throw new Error("https://svelte.dev/e/effect_orphan")}function gw(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function _w(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function yw(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function bw(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function vw(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ww(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const $w=1,xw=2,vm=4,Sw=8,kw=16,Iw=1,Tw=2,wm=4,Ew=8,Cw=16,zw=1,Aw=2,qe=Symbol("uninitialized"),$m="http://www.w3.org/1999/xhtml",Ow="http://www.w3.org/2000/svg",Bw="@attach";function Rw(){console.warn("https://svelte.dev/e/derived_inert")}function Nw(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Mw(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function xm(e){return e===this.v}function Dw(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Sm(e){return!Dw(e,this.v)}let on=!1,Pw=!1;function Uw(){on=!0}let Ue=null;function Xi(e){Ue=e}function Au(e,t=!1,r){Ue={p:Ue,i:!1,c:null,e:null,s:e,x:null,r:be,l:on&&!t?{s:null,u:null,$:[]}:null}}function Ou(e){var t=Ue,r=t.e;if(r!==null){t.e=null;for(var i of r)Fm(i)}return t.i=!0,Ue=t.p,{}}function na(){return!on||Ue!==null&&Ue.l===null}let Mi=[];function Lw(){var e=Mi;Mi=[],Ko(e)}function lr(e){if(Mi.length===0){var t=Mi;queueMicrotask(()=>{t===Mi&&Lw()})}Mi.push(e)}function km(e){var t=be;if(t===null)return we.f|=Lr,e;if((t.f&an)===0&&(t.f&Zi)===0)throw e;Pr(e,t)}function Pr(e,t){if(!(t!==null&&(t.f&kt)!==0)){for(;t!==null;){if((t.f&Zo)!==0){if((t.f&an)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}const Ww=-7169;function We(e,t){e.f=e.f&Ww|t}function Bu(e){(e.f&Ot)!==0||e.deps===null?We(e,Fe):We(e,Xt)}function Im(e){if(e!==null)for(const t of e)(t.f&Ye)===0||(t.f&bi)===0||(t.f^=bi,Im(t.deps))}function Tm(e,t,r){(e.f&Ve)!==0?t.add(e):(e.f&Xt)!==0&&r.add(e),Im(e.deps),We(e,Fe)}let xa=!1;function Gw(e){var t=xa;try{return xa=!1,[e(),xa]}finally{xa=t}}function qw(e,t){if(t){const r=document.body;e.autofocus=!0,lr(()=>{document.activeElement===r&&e.focus()})}}let lc=!1;function Vw(){lc||(lc=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r[La])==null||t.call(r)})},{capture:!0}))}function un(e){var t=we,r=be;Rt(null),Nt(null);try{return e()}finally{Rt(t),Nt(r)}}function Fw(e,t,r,i=r){e.addEventListener(t,()=>un(r));const n=e[La];n?e[La]=()=>{n(),i(!0)}:e[La]=()=>i(!0),Vw()}function Hw(e){let t=0,r=Wr(0),i;return()=>{Pu()&&(q(r),g$(()=>(t===0&&(i=tn(()=>e(()=>Vn(r)))),t+=1,()=>{lr(()=>{t-=1,t===0&&(i==null||i(),i=void 0,Vn(r))})})))}}var jw=yi|sn;function Kw(e,t,r,i){new Zw(e,t,r,i)}var Ct,Iu,zt,ui,ht,At,lt,$t,gr,li,Mr,Gi,Yn,Qn,_r,cs,Me,Xw,Yw,Qo,Qw,Jo,Wa,Ga,eu,tu;class Zw{constructor(t,r,i,n){ge(this,Me);pt(this,"parent");pt(this,"is_pending",!1);pt(this,"transform_error");ge(this,Ct);ge(this,Iu,null);ge(this,zt);ge(this,ui);ge(this,ht);ge(this,At,null);ge(this,lt,null);ge(this,$t,null);ge(this,gr,null);ge(this,li,0);ge(this,Mr,0);ge(this,Gi,!1);ge(this,Yn,new Set);ge(this,Qn,new Set);ge(this,_r,null);ge(this,cs,Hw(()=>(fe(this,_r,Wr(O(this,li))),()=>{fe(this,_r,null)})));var a;fe(this,Ct,t),fe(this,zt,r),fe(this,ui,s=>{var o=be;o.b=this,o.f|=Zo,i(s)}),this.parent=be.b,this.transform_error=n??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),fe(this,ht,ms(()=>{Ie(this,Me,Jo).call(this)},jw))}defer_effect(t){Tm(t,O(this,Yn),O(this,Qn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!O(this,zt).pending}update_pending_count(t,r){Ie(this,Me,eu).call(this,t,r),fe(this,li,O(this,li)+t),!(!O(this,_r)||O(this,Gi))&&(fe(this,Gi,!0),lr(()=>{fe(this,Gi,!1),O(this,_r)&&Qi(O(this,_r),O(this,li))}))}get_effect_pending(){return O(this,cs).call(this),q(O(this,_r))}error(t){if(!O(this,zt).onerror&&!O(this,zt).failed)throw t;ue!=null&&ue.is_fork?(O(this,At)&&ue.skip_effect(O(this,At)),O(this,lt)&&ue.skip_effect(O(this,lt)),O(this,$t)&&ue.skip_effect(O(this,$t)),ue.oncommit(()=>{Ie(this,Me,tu).call(this,t)})):Ie(this,Me,tu).call(this,t)}}Ct=new WeakMap,Iu=new WeakMap,zt=new WeakMap,ui=new WeakMap,ht=new WeakMap,At=new WeakMap,lt=new WeakMap,$t=new WeakMap,gr=new WeakMap,li=new WeakMap,Mr=new WeakMap,Gi=new WeakMap,Yn=new WeakMap,Qn=new WeakMap,_r=new WeakMap,cs=new WeakMap,Me=new WeakSet,Xw=function(){try{fe(this,At,_t(()=>O(this,ui).call(this,O(this,Ct))))}catch(t){this.error(t)}},Yw=function(t){const r=O(this,zt).failed,{reset:i,invoke_onerror:n}=Ie(this,Me,Qo).call(this,t);lr(n),r&&fe(this,$t,_t(()=>{r(O(this,Ct),()=>t,()=>i)}))},Qo=function(t){var r=!1,i=!1;const n=()=>{if(r){Mw();return}r=!0,i&&ww(),O(this,$t)!==null&&hi(O(this,$t),()=>{fe(this,$t,null)}),Ie(this,Me,Ga).call(this,()=>{Ie(this,Me,Jo).call(this)})};return{reset:n,invoke_onerror:()=>{var s,o;try{i=!0,(o=(s=O(this,zt)).onerror)==null||o.call(s,t,n),i=!1}catch(u){Pr(u,O(this,ht)&&O(this,ht).parent)}}}},Qw=function(){const t=O(this,zt).pending;t&&(this.is_pending=!0,fe(this,lt,_t(()=>t(O(this,Ct)))),lr(()=>{var r=fe(this,gr,document.createDocumentFragment()),i=xr();r.append(i),fe(this,At,Ie(this,Me,Ga).call(this,()=>_t(()=>O(this,ui).call(this,i)))),O(this,Mr)===0&&(O(this,Ct).before(r),fe(this,gr,null),hi(O(this,lt),()=>{fe(this,lt,null)}),Ie(this,Me,Wa).call(this,ue))}))},Jo=function(){try{if(this.is_pending=this.has_pending_snippet(),fe(this,Mr,0),fe(this,li,0),fe(this,At,_t(()=>{O(this,ui).call(this,O(this,Ct))})),O(this,Mr)>0){var t=fe(this,gr,document.createDocumentFragment());Gu(O(this,At),t);const r=O(this,zt).pending;fe(this,lt,_t(()=>r(O(this,Ct))))}else Ie(this,Me,Wa).call(this,ue)}catch(r){this.error(r)}},Wa=function(t){this.is_pending=!1,t.transfer_effects(O(this,Yn),O(this,Qn))},Ga=function(t){var r=be,i=we,n=Ue;Nt(O(this,ht)),Rt(O(this,ht)),Xi(O(this,ht).ctx);try{return vi.ensure(),t()}catch(a){return km(a),null}finally{Nt(r),Rt(i),Xi(n)}},eu=function(t,r){var i;if(!this.has_pending_snippet()){this.parent&&Ie(i=this.parent,Me,eu).call(i,t,r);return}fe(this,Mr,O(this,Mr)+t),O(this,Mr)===0&&(Ie(this,Me,Wa).call(this,r),O(this,lt)&&hi(O(this,lt),()=>{fe(this,lt,null)}),O(this,gr)&&(O(this,Ct).before(O(this,gr)),fe(this,gr,null)))},tu=function(t){O(this,At)&&(tt(O(this,At)),fe(this,At,null)),O(this,lt)&&(tt(O(this,lt)),fe(this,lt,null)),O(this,$t)&&(tt(O(this,$t)),fe(this,$t,null));let r=O(this,zt).failed;const i=n=>{const{reset:a,invoke_onerror:s}=Ie(this,Me,Qo).call(this,n);s(),r&&fe(this,$t,Ie(this,Me,Ga).call(this,()=>{try{return _t(()=>{var o=be;o.b=this,o.f|=Zo,r(O(this,Ct),()=>n,()=>a)})}catch(o){return Pr(o,O(this,ht).parent),null}}))};lr(()=>{var n;try{n=this.transform_error(t)}catch(a){Pr(a,O(this,ht)&&O(this,ht).parent);return}n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(i,a=>Pr(a,O(this,ht)&&O(this,ht).parent)):i(n)})};function Em(e,t,r,i){const n=na()?Yi:Ru;var a=e.filter(m=>!m.settled),s=t.map(n);if(r.length===0&&a.length===0){i(s);return}var o=be,u=Jw(),d=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(m=>m.promise)):null;function p(m){if((o.f&kt)===0){u();try{i([...s,...m])}catch(_){Pr(_,o)}Ja()}}var h=Cm();if(r.length===0){d.then(()=>p([])).finally(h);return}function f(){Promise.all(r.map(m=>e$(m))).then(p).catch(m=>Pr(m,o)).finally(h)}d?d.then(()=>{u(),f(),Ja()}):f()}function Jw(){var e=be,t=we,r=Ue,i=ue;return function(a=!0){Nt(e),Rt(t),Xi(r),a&&(e.f&kt)===0&&(i==null||i.activate(),i==null||i.apply())}}function Ja(e=!0){Nt(null),Rt(null),Xi(null),e&&(ue==null||ue.deactivate())}function Cm(){var e=be,t=e.b,r=ue,i=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(i,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(i,e)}}function Yi(e){var t=Ye|Ve;return be!==null&&(be.f|=sn),{ctx:Ue,deps:null,effects:null,equals:xm,f:t,fn:e,reactions:null,rv:0,v:qe,wv:0,parent:be,ac:null}}const Nn=Symbol("obsolete");function e$(e,t,r){let i=be;i===null&&cw();var n=void 0,a=Wr(qe),s=!we,o=new Set;return m$(()=>{var m,_;var u=be,d=_m();n=d.promise;try{Promise.resolve(e()).then(d.resolve,b=>{b!==ia&&d.reject(b)}).finally(Ja)}catch(b){d.reject(b),Ja()}var p=ue;if(s){if((u.f&an)!==0)var h=Cm();if((m=i.b)!=null&&m.is_rendered())(_=p.async_deriveds.get(u))==null||_.reject(Nn);else for(const b of o.values())b.reject(Nn);o.add(d),p.async_deriveds.set(u,d)}const f=(b,$=void 0)=>{h==null||h(),o.delete(d),$!==Nn&&(p.activate(),$?(a.f|=Lr,Qi(a,$)):((a.f&Lr)!==0&&(a.f^=Lr),Qi(a,b)),p.deactivate())};d.promise.then(f,b=>f(null,b||"unknown"))}),Uu(()=>{for(const u of o)u.reject(Nn)}),new Promise(u=>{function d(p){function h(){p===n?u(a):d(n)}p.then(h,h)}d(n)})}function t$(e){const t=Yi(e);return Ym(t),t}function Ru(e){const t=Yi(e);return t.equals=Sm,t}function r$(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)tt(t[r])}}function Nu(e){var t,r=be,i=e.parent;if(!kr&&i!==null&&e.v!==qe&&(i.f&(kt|dt))!==0)return Rw(),e.v;Nt(i);try{e.f&=~bi,r$(e),t=tg(e)}finally{Nt(r)}return t}function zm(e){var t=Nu(e);if(!e.equals(t)&&(e.wv=Jm(),(!(ue!=null&&ue.is_fork)||e.deps===null)&&(ue!==null?(ue.capture(e,t,!0),qn==null||qn.capture(e,t,!0)):e.v=t,e.deps===null))){We(e,Fe);return}kr||(Je!==null?(Pu()||ue!=null&&ue.is_fork)&&Je.set(e,t):Bu(e))}function i$(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&un(()=>{r.ac.abort(ia),r.ac=null}),r.fn!==null&&(r.teardown=aw),jn(r,0),Wu(r))}function Am(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&en(t)}let Gs=null,zi=null,ue=null,qn=null,Je=null,ru=null,qs=!1,Di=null,qa=null;var dc=0;let n$=1;var qi,Dr,di,Vi,Fi,Hi,yr,ji,mt,Jn,br,Ft,sr,Ki,ci,Be,iu,Mn,nu,Om,Bm,Ri,a$,Dn;const ps=class ps{constructor(){ge(this,Be);pt(this,"id",n$++);ge(this,qi,!1);pt(this,"linked",!0);ge(this,Dr,null);ge(this,di,null);pt(this,"async_deriveds",new Map);pt(this,"current",new Map);pt(this,"previous",new Map);ge(this,Vi,new Set);ge(this,Fi,new Set);ge(this,Hi,0);ge(this,yr,new Map);ge(this,ji,null);ge(this,mt,[]);ge(this,Jn,[]);ge(this,br,new Set);ge(this,Ft,new Set);ge(this,sr,new Map);ge(this,Ki,new Set);pt(this,"is_fork",!1);ge(this,ci,!1);zi===null?Gs=zi=this:(fe(zi,di,this),fe(this,Dr,zi)),zi=this}skip_effect(t){O(this,sr).has(t)||O(this,sr).set(t,{d:[],m:[]}),O(this,Ki).delete(t)}unskip_effect(t,r=i=>this.schedule(i)){var i=O(this,sr).get(t);if(i){O(this,sr).delete(t);for(var n of i.d)We(n,Ve),r(n);for(n of i.m)We(n,Xt),r(n)}O(this,Ki).add(t)}capture(t,r,i=!1){t.v!==qe&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Lr)===0&&(this.current.set(t,[r,i]),Je==null||Je.set(t,r)),this.is_fork||(t.v=r)}activate(){ue=this}deactivate(){ue=null,Je=null}flush(){try{qs=!0,ue=this,Ie(this,Be,Mn).call(this)}finally{dc=0,ru=null,Di=null,qa=null,qs=!1,ue=null,Je=null,fi.clear()}}discard(){var t;for(const r of O(this,Fi))r(this);O(this,Fi).clear();for(const r of this.async_deriveds.values())r.reject(Nn);Ie(this,Be,Dn).call(this),(t=O(this,ji))==null||t.resolve()}register_created_effect(t){O(this,Jn).push(t)}increment(t,r){if(fe(this,Hi,O(this,Hi)+1),t){let i=O(this,yr).get(r)??0;O(this,yr).set(r,i+1)}}decrement(t,r){if(fe(this,Hi,O(this,Hi)-1),t){let i=O(this,yr).get(r)??0;i===1?O(this,yr).delete(r):O(this,yr).set(r,i-1)}O(this,ci)||(fe(this,ci,!0),lr(()=>{fe(this,ci,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const i of t)O(this,br).add(i);for(const i of r)O(this,Ft).add(i);t.clear(),r.clear()}oncommit(t){O(this,Vi).add(t)}ondiscard(t){O(this,Fi).add(t)}settled(){return(O(this,ji)??fe(this,ji,_m())).promise}static ensure(){if(ue===null){const t=ue=new ps;qs||lr(()=>{O(t,qi)||t.flush()})}return ue}apply(){{Je=null;return}}schedule(t){var n;if(ru=t,(n=t.b)!=null&&n.is_pending&&(t.f&(Zi|ra|Cu))!==0&&(t.f&an)===0){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var i=r.f;if(Di!==null&&r===be&&(we===null||(we.f&Ye)===0))return;if((i&(Sr|Bt))!==0){if((i&Fe)===0)return;r.f^=Fe}}O(this,mt).push(r)}};qi=new WeakMap,Dr=new WeakMap,di=new WeakMap,Vi=new WeakMap,Fi=new WeakMap,Hi=new WeakMap,yr=new WeakMap,ji=new WeakMap,mt=new WeakMap,Jn=new WeakMap,br=new WeakMap,Ft=new WeakMap,sr=new WeakMap,Ki=new WeakMap,ci=new WeakMap,Be=new WeakSet,iu=function(){if(this.is_fork)return!0;for(const i of O(this,yr).keys()){for(var t=i,r=!1;t.parent!==null;){if(O(this,sr).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Mn=function(){var u,d,p,h;fe(this,qi,!0),dc++>1e3&&(Ie(this,Be,Dn).call(this),s$());for(const f of O(this,br))O(this,Ft).delete(f),We(f,Ve),this.schedule(f);for(const f of O(this,Ft))We(f,Xt),this.schedule(f);const t=O(this,mt);fe(this,mt,[]),this.apply();var r=Di=[],i=[],n=qa=[];for(const f of t)try{Ie(this,Be,nu).call(this,f,r,i)}catch(m){throw Mm(f),Ie(this,Be,iu).call(this)||this.discard(),m}if(ue=null,n.length>0){var a=ps.ensure();for(const f of n)a.schedule(f)}if(Di=null,qa=null,Ie(this,Be,iu).call(this)){Ie(this,Be,Ri).call(this,i),Ie(this,Be,Ri).call(this,r);for(const[f,m]of O(this,sr))Nm(f,m);n.length>0&&Ie(u=ue,Be,Mn).call(u);return}const s=Ie(this,Be,Om).call(this);if(s){Ie(this,Be,Ri).call(this,i),Ie(this,Be,Ri).call(this,r),Ie(d=s,Be,Bm).call(d,this);return}O(this,br).clear(),O(this,Ft).clear();for(const f of O(this,Vi))f(this);O(this,Vi).clear(),qn=this,cc(i),cc(r),qn=null,(p=O(this,ji))==null||p.resolve();var o=ue;if(O(this,Hi)===0&&(O(this,mt).length===0||o!==null)&&Ie(this,Be,Dn).call(this),O(this,mt).length>0)if(o!==null){const f=o;O(f,mt).push(...O(this,mt).filter(m=>!O(f,mt).includes(m)))}else o=this;o!==null&&Ie(h=o,Be,Mn).call(h)},nu=function(t,r,i){t.f^=Fe;for(var n=t.first;n!==null;){var a=n.f,s=(a&(Bt|Sr))!==0,o=s&&(a&Fe)!==0,u=o||(a&dt)!==0||O(this,sr).has(n);if(!u&&n.fn!==null){s?n.f^=Fe:(a&Zi)!==0?r.push(n):sa(n)&&((a&Kt)!==0&&O(this,Ft).add(n),en(n));var d=n.first;if(d!==null){n=d;continue}}for(;n!==null;){var p=n.next;if(p!==null){n=p;break}n=n.parent}}},Om=function(){for(var t=O(this,Dr);t!==null;){if(!t.is_fork){for(const[r,[,i]]of this.current)if(t.current.has(r)&&!i)return t}t=O(t,Dr)}return null},Bm=function(t){var i;for(const[n,a]of t.current)!this.previous.has(n)&&t.previous.has(n)&&this.previous.set(n,t.previous.get(n)),this.current.set(n,a);for(const[n,a]of t.async_deriveds){const s=this.async_deriveds.get(n);s&&a.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(O(t,br),O(t,Ft));const r=n=>{var a=n.reactions;if(a!==null&&!((n.f&Ye)!==0&&(n.f&(Ve|Xt))===0))for(const u of a){var s=u.f;if((s&Ye)!==0)r(u);else{var o=u;s&(Li|Kt)&&!this.async_deriveds.has(o)&&(O(this,Ft).delete(o),We(o,Ve),this.schedule(o))}}};for(const n of this.current.keys())r(n);this.oncommit(()=>t.discard()),Ie(i=t,Be,Dn).call(i),ue=this,Ie(this,Be,Mn).call(this)},Ri=function(t){for(var r=0;r<t.length;r+=1)Tm(t[r],O(this,br),O(this,Ft))},a$=function(){var h;for(let f=Gs;f!==null;f=O(f,di)){var t=f.id<this.id,r=[];for(const[m,[_,b]]of this.current){if(f.current.has(m)){var i=f.current.get(m)[0];if(t&&_!==i)f.current.set(m,[_,b]);else continue}r.push(m)}if(t)for(const[m,_]of this.async_deriveds){const b=f.async_deriveds.get(m);b&&_.promise.then(b.resolve).catch(b.reject)}var n=[...f.current.keys()].filter(m=>!f.current.get(m)[1]);if(!(!O(f,qi)||n.length===0)){var a=n.filter(m=>!this.current.has(m));if(a.length===0)t&&f.discard();else if(r.length>0){if(t)for(const m of O(this,Ki))f.unskip_effect(m,_=>{var b;(_.f&(Kt|Li))!==0?f.schedule(_):Ie(b=f,Be,Ri).call(b,[_])});f.activate();var s=new Set,o=new Map;for(var u of r)Rm(u,a,s,o);o=new Map;var d=[...f.current].filter(([m,_])=>{const b=this.current.get(m);return b?b[0]!==_[0]||b[1]!==_[1]:!0}).map(([m])=>m);if(d.length>0)for(const m of O(this,Jn))(m.f&(kt|dt|Ya))===0&&Mu(m,d,o)&&((m.f&(Li|Kt))!==0?(We(m,Ve),f.schedule(m)):O(f,br).add(m));if(O(f,mt).length>0&&!O(f,ci)){f.apply();for(var p of O(f,mt))Ie(h=f,Be,nu).call(h,p,[],[]);fe(f,mt,[])}f.deactivate()}}}},Dn=function(){if(this.linked){var t=O(this,Dr),r=O(this,di);t===null?Gs=r:fe(t,di,r),r===null?zi=t:fe(r,Dr,t),this.linked=!1}};let vi=ps;function s$(){try{gw()}catch(e){Pr(e,ru)}}let Vt=null;function cc(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var i=e[r++];if((i.f&(kt|dt))===0&&sa(i)&&(Vt=new Set,en(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&Km(i),(Vt==null?void 0:Vt.size)>0)){fi.clear();for(const n of Vt){if((n.f&(kt|dt))!==0)continue;const a=[n];let s=n.parent;for(;s!==null;)Vt.has(s)&&(Vt.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const u=a[o];(u.f&(kt|dt))===0&&en(u)}}Vt.clear()}}Vt=null}}function Rm(e,t,r,i){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const n of e.reactions){const a=n.f;(a&Ye)!==0?Rm(n,t,r,i):(a&(Li|Kt))!==0&&(a&Ve)===0&&Mu(n,t,i)&&(We(n,Ve),Du(n))}}function Mu(e,t,r){const i=r.get(e);if(i!==void 0)return i;if(e.deps!==null)for(const n of e.deps){if(Xa.call(t,n))return!0;if((n.f&Ye)!==0&&Mu(n,t,r))return r.set(n,!0),!0}return r.set(e,!1),!1}function Du(e){ue.schedule(e)}function Nm(e,t){if(!((e.f&Bt)!==0&&(e.f&Fe)!==0)){(e.f&Ve)!==0?t.d.push(e):(e.f&Xt)!==0&&t.m.push(e),We(e,Fe);for(var r=e.first;r!==null;)Nm(r,t),r=r.next}}function Mm(e){We(e,Fe);for(var t=e.first;t!==null;)Mm(t),t=t.next}let es=new Set;const fi=new Map;let Dm=!1;function Wr(e,t){var r={f:0,v:e,reactions:null,equals:xm,rv:0,wv:0};return r}function Ze(e,t){const r=Wr(e);return Ym(r),r}function o$(e,t=!1,r=!0){var n;const i=Wr(e);return t||(i.equals=Sm),on&&r&&Ue!==null&&Ue.l!==null&&((n=Ue.l).s??(n.s=[])).push(i),i}function ae(e,t,r=!1){we!==null&&(!Zt||(we.f&Ya)!==0)&&na()&&(we.f&(Ye|Kt|Li|Ya))!==0&&(dr===null||!dr.has(e))&&vw();let i=r?ai(t):t;return Qi(e,i,qa)}function Qi(e,t,r=null){if(!e.equals(t)){fi.set(e,kr?t:e.v);var i=vi.ensure();if(i.capture(e,t),(e.f&Ye)!==0){const n=e;(e.f&Ve)!==0&&Nu(n),Je===null&&Bu(n)}e.wv=Jm(),Pm(e,Ve,r),na()&&be!==null&&(be.f&Fe)!==0&&(be.f&(Bt|Sr))===0&&(Et===null?b$([e]):Et.push(e)),!i.is_fork&&es.size>0&&!Dm&&u$()}return t}function u$(){Dm=!1;for(const e of es){(e.f&Fe)!==0&&We(e,Xt);let t;try{t=sa(e)}catch{t=!0}t&&en(e)}es.clear()}function pc(e,t=1){var r=q(e),i=t===1?r++:r--;return ae(e,r),i}function Vn(e){ae(e,e.v+1)}function Pm(e,t,r){var i=e.reactions;if(i!==null)for(var n=na(),a=i.length,s=0;s<a;s++){var o=i[s],u=o.f;if(!(!n&&o===be)){var d=(u&Ve)===0;if(d&&We(o,t),(u&Ya)!==0)es.add(o);else if((u&Ye)!==0){var p=o;Je==null||Je.delete(p),(u&bi)===0&&(u&Ot&&(be===null||(be.f&Qa)===0)&&(o.f|=bi),Pm(p,Xt,r))}else if(d){var h=o;(u&Kt)!==0&&Vt!==null&&Vt.add(h),r!==null?r.push(h):Du(h)}}}}function ai(e){if(typeof e!="object"||e===null||$r in e)return e;const t=Eu(e);if(t!==iw&&t!==nw)return e;var r=new Map,i=Tu(e),n=Ze(0),a=mi,s=o=>{if(mi===a)return o();var u=we,d=mi;Rt(null),gc(a);var p=o();return Rt(u),gc(d),p};return i&&r.set("length",Ze(e.length)),new Proxy(e,{defineProperty(o,u,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&yw();var p=r.get(u);return p===void 0?s(()=>{var h=Ze(d.value);return r.set(u,h),h}):ae(p,d.value,!0),!0},deleteProperty(o,u){var d=r.get(u);if(d===void 0){if(u in o){const p=s(()=>Ze(qe));r.set(u,p),Vn(n)}}else ae(d,qe),Vn(n);return!0},get(o,u,d){var m;if(u===$r)return e;var p=r.get(u),h=u in o;if(p===void 0&&(!h||(m=Ur(o,u))!=null&&m.writable)&&(p=s(()=>{var _=ai(h?o[u]:qe),b=Ze(_);return b}),r.set(u,p)),p!==void 0){var f=q(p);return f===qe?void 0:f}return Reflect.get(o,u,d)},getOwnPropertyDescriptor(o,u){var d=Reflect.getOwnPropertyDescriptor(o,u);if(d&&"value"in d){var p=r.get(u);p&&(d.value=q(p))}else if(d===void 0){var h=r.get(u),f=h==null?void 0:h.v;if(h!==void 0&&f!==qe)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return d},has(o,u){var f;if(u===$r)return!0;var d=r.get(u),p=d!==void 0&&d.v!==qe||Reflect.has(o,u);if(d!==void 0||be!==null&&(!p||(f=Ur(o,u))!=null&&f.writable)){d===void 0&&(d=s(()=>{var m=p?ai(o[u]):qe,_=Ze(m);return _}),r.set(u,d));var h=q(d);if(h===qe)return!1}return p},set(o,u,d,p){var I;var h=r.get(u),f=u in o;if(i&&u==="length")for(var m=d;m<h.v;m+=1){var _=r.get(m+"");_!==void 0?ae(_,qe):m in o&&(_=s(()=>Ze(qe)),r.set(m+"",_))}if(h===void 0)(!f||(I=Ur(o,u))!=null&&I.writable)&&(h=s(()=>Ze(void 0)),ae(h,ai(d)),r.set(u,h));else{f=h.v!==qe;var b=s(()=>ai(d));ae(h,b)}var $=Reflect.getOwnPropertyDescriptor(o,u);if($!=null&&$.set&&$.set.call(p,d),!f){if(i&&typeof u=="string"){var v=r.get("length"),w=Number(u);Number.isInteger(w)&&w>=v.v&&ae(v,w+1)}Vn(n)}return!0},ownKeys(o){q(n);var u=Reflect.ownKeys(o).filter(h=>{var f=r.get(h);return f===void 0||f.v!==qe});for(var[d,p]of r)p.v!==qe&&!(d in o)&&u.push(d);return u},setPrototypeOf(){bw()}})}function fc(e){try{if(e!==null&&typeof e=="object"&&$r in e)return e[$r]}catch{}return e}function l$(e,t){return Object.is(fc(e),fc(t))}var hc,Um,Lm,Wm;function d$(){if(hc===void 0){hc=window,Um=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Lm=Ur(t,"firstChild").get,Wm=Ur(t,"nextSibling").get,oc(e)&&(e[Xo]=void 0,e[Ua]=null,e[Yo]=void 0,e.__e=void 0),oc(r)&&(r[Rn]=void 0)}}function xr(e=""){return document.createTextNode(e)}function Ji(e){return Lm.call(e)}function aa(e){return Wm.call(e)}function ze(e,t){return Ji(e)}function ln(e,t=!1){{var r=Ji(e);return r instanceof Comment&&r.data===""?aa(r):r}}function nt(e,t=1,r=!1){let i=e;for(;t--;)i=aa(i);return i}function c$(e){e.textContent=""}function Gm(){return!1}function qm(e,t,r){return t==null||t===$m?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function Vm(e){be===null&&(we===null&&mw(),hw()),kr&&fw()}function p$(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Qt(e,t){var r=be;r!==null&&(r.f&dt)!==0&&(e|=dt);var i={ctx:Ue,deps:null,nodes:null,f:e|Ve|Ot,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};ue==null||ue.register_created_effect(i);var n=i;if((e&Zi)!==0)Di!==null?Di.push(i):vi.ensure().schedule(i);else if(t!==null){try{en(i)}catch(s){throw tt(i),s}n.deps===null&&n.teardown===null&&n.nodes===null&&n.first===n.last&&(n.f&sn)===0&&(n=n.first,(e&Kt)!==0&&(e&yi)!==0&&n!==null&&(n.f|=yi))}if(n!==null&&(n.parent=r,r!==null&&p$(n,r),we!==null&&(we.f&Ye)!==0&&(e&Sr)===0)){var a=we;(a.effects??(a.effects=[])).push(n)}return i}function Pu(){return we!==null&&!Zt}function Uu(e){const t=Qt(ra,null);return We(t,Fe),t.teardown=e,t}function au(e){Vm();var t=be.f,r=!we&&(t&Bt)!==0&&Ue!==null&&!Ue.i;if(r){var i=Ue;(i.e??(i.e=[])).push(e)}else return Fm(e)}function Fm(e){return Qt(Zi|ym,e)}function f$(e){return Vm(),Qt(ra|ym,e)}function h$(e){vi.ensure();const t=Qt(Sr|sn,e);return(r={})=>new Promise(i=>{r.outro?hi(t,()=>{tt(t),i(void 0)}):(tt(t),i(void 0))})}function Lu(e){return Qt(Zi,e)}function m$(e){return Qt(Li|sn,e)}function g$(e,t=0){return Qt(ra|t,e)}function bn(e,t=[],r=[],i=[]){Em(i,t,r,n=>{Qt(ra,()=>{e(...n.map(q))})})}function ms(e,t=0){var r=Qt(Kt|t,e);return r}function Hm(e,t=0){var r=Qt(Cu|t,e);return r}function _t(e){return Qt(Bt|sn,e)}function jm(e){var t=e.teardown;if(t!==null){const r=kr,i=we;mc(!0),Rt(null);try{t.call(null)}finally{mc(r),Rt(i)}}}function Wu(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const n=r.ac;n!==null&&un(()=>{n.abort(ia)});var i=r.next;(r.f&Sr)!==0?r.parent=null:tt(r,t),r=i}}function _$(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Bt)===0&&tt(t),t=r}}function tt(e,t=!0){var r=!1;(t||(e.f&uw)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(y$(e.nodes.start,e.nodes.end),r=!0),e.f|=uc,Wu(e,t&&!r),jn(e,0);var i=e.nodes&&e.nodes.t;if(i!==null)for(const a of i)a.stop();jm(e),e.f^=uc,e.f|=kt;var n=e.parent;n!==null&&n.first!==null&&Km(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function y$(e,t){for(;e!==null;){var r=e===t?null:aa(e);e.remove(),e=r}}function Km(e){var t=e.parent,r=e.prev,i=e.next;r!==null&&(r.next=i),i!==null&&(i.prev=r),t!==null&&(t.first===e&&(t.first=i),t.last===e&&(t.last=r))}function hi(e,t,r=!0){var i=[];Zm(e,i,!0);var n=()=>{r&&tt(e),t&&t()},a=i.length;if(a>0){var s=()=>--a||n();for(var o of i)o.out(s)}else n()}function Zm(e,t,r){if((e.f&dt)===0){e.f^=dt;var i=e.nodes&&e.nodes.t;if(i!==null)for(const o of i)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var a=n.next;if((n.f&Sr)===0){var s=(n.f&yi)!==0||(n.f&Bt)!==0&&(e.f&Kt)!==0;Zm(n,t,s?r:!1)}n=a}}}function ts(e){Xm(e,!0)}function Xm(e,t){if((e.f&dt)!==0){e.f^=dt,(e.f&Fe)===0&&(We(e,Ve),vi.ensure().schedule(e));for(var r=e.first;r!==null;){var i=r.next,n=(r.f&yi)!==0||(r.f&Bt)!==0;Xm(r,n?t:!1),r=i}var a=e.nodes&&e.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function Gu(e,t){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end;r!==null;){var n=r===i?null:aa(r);t.append(r),r=n}}let Va=!1,kr=!1;function mc(e){kr=e}let we=null,Zt=!1;function Rt(e){we=e}let be=null;function Nt(e){be=e}let dr=null;function Ym(e){we!==null&&(dr??(dr=new Set)).add(e)}let gt=null,wt=0,Et=null;function b$(e){Et=e}let Qm=1,si=0,mi=si;function gc(e){mi=e}function Jm(){return++Qm}function sa(e){var t=e.f;if((t&Ve)!==0)return!0;if(t&Ye&&(e.f&=~bi),(t&Xt)!==0){for(var r=e.deps,i=r.length,n=0;n<i;n++){var a=r[n];if(sa(a)&&zm(a),a.wv>e.wv)return!0}(t&Ot)!==0&&Je===null&&We(e,Fe)}return!1}function eg(e,t,r=!0){var i=e.reactions;if(i!==null&&!(dr!==null&&dr.has(e)))for(var n=0;n<i.length;n++){var a=i[n];(a.f&Ye)!==0?eg(a,t,!1):t===a&&(r?We(a,Ve):(a.f&Fe)!==0&&We(a,Xt),Du(a))}}function tg(e){var b;var t=gt,r=wt,i=Et,n=we,a=dr,s=Ue,o=Zt,u=mi,d=e.f;gt=null,wt=0,Et=null,we=(d&(Bt|Sr))===0?e:null,dr=null,Xi(e.ctx),Zt=!1,mi=++si,e.ac!==null&&(un(()=>{e.ac.abort(ia)}),e.ac=null);try{e.f|=Qa;var p=e.fn,h=p();e.f|=an;var f=e.deps,m=ue==null?void 0:ue.is_fork;if(gt!==null){var _;if(m||jn(e,wt),f!==null&&wt>0)for(f.length=wt+gt.length,_=0;_<gt.length;_++)f[wt+_]=gt[_];else e.deps=f=gt;if(Pu()&&(e.f&Ot)!==0)for(_=wt;_<f.length;_++)((b=f[_]).reactions??(b.reactions=[])).push(e)}else!m&&f!==null&&wt<f.length&&(jn(e,wt),f.length=wt);if(na()&&Et!==null&&!Zt&&f!==null&&(e.f&(Ye|Xt|Ve))===0)for(_=0;_<Et.length;_++)eg(Et[_],e);if(n!==null&&n!==e){if(si++,n.deps!==null)for(let $=0;$<r;$+=1)n.deps[$].rv=si;if(t!==null)for(const $ of t)$.rv=si;Et!==null&&(i===null?i=Et:i.push(...Et))}return(e.f&Lr)!==0&&(e.f^=Lr),h}catch($){return km($)}finally{e.f^=Qa,gt=t,wt=r,Et=i,we=n,dr=a,Xi(s),Zt=o,mi=u}}function v$(e,t){let r=t.reactions;if(r!==null){var i=tw.call(r,e);if(i!==-1){var n=r.length-1;n===0?r=t.reactions=null:(r[i]=r[n],r.pop())}}if(r===null&&(t.f&Ye)!==0&&(gt===null||!Xa.call(gt,t))){var a=t;(a.f&Ot)!==0&&(a.f^=Ot,a.f&=~bi),a.v!==qe&&Bu(a),a.ac!==null&&un(()=>{a.ac.abort(ia),a.ac=null,We(a,Ve)}),i$(a),jn(a,0)}}function jn(e,t){var r=e.deps;if(r!==null)for(var i=t;i<r.length;i++)v$(e,r[i])}function en(e){var t=e.f;if((t&kt)===0){We(e,Fe);var r=be,i=Va;be=e,Va=(t&(Bt|Sr))===0;try{(t&(Kt|Cu))!==0?_$(e):Wu(e),jm(e);var n=tg(e);e.teardown=typeof n=="function"?n:null,e.wv=Qm;var a;mm&&Pw&&(e.f&Ve)!==0&&e.deps}finally{Va=i,be=r}}}function q(e){var t=e.f,r=(t&Ye)!==0;if(we!==null&&!Zt){var i=be!==null&&(be.f&kt)!==0;if(!i&&(dr===null||!dr.has(e))){var n=we.deps;if((we.f&Qa)!==0)e.rv<si&&(e.rv=si,gt===null&&n!==null&&n[wt]===e?wt++:gt===null?gt=[e]:gt.push(e));else{we.deps??(we.deps=[]),Xa.call(we.deps,e)||we.deps.push(e);var a=e.reactions;a===null?e.reactions=[we]:Xa.call(a,we)||a.push(we)}}}if(kr&&fi.has(e))return fi.get(e);if(r){var s=e;if(kr){var o=s.v;return((s.f&Fe)===0&&s.reactions!==null||ig(s))&&(o=Nu(s)),fi.set(s,o),o}var u=(s.f&Ot)===0&&!Zt&&we!==null&&(Va||(we.f&Ot)!==0),d=(s.f&an)===0;sa(s)&&(u&&(s.f|=Ot),zm(s)),u&&!d&&(Am(s),rg(s))}if(Je!=null&&Je.has(e))return Je.get(e);if((e.f&Lr)!==0)throw e.v;return e.v}function rg(e){if(e.f|=Ot,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Ye)!==0&&(t.f&Ot)===0&&(Am(t),rg(t))}function ig(e){if(e.v===qe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(fi.has(t)||(t.f&Ye)!==0&&ig(t))return!0;return!1}function tn(e){var t=Zt;try{return Zt=!0,e()}finally{Zt=t}}function Ni(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if($r in e)su(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&$r in r&&su(r)}}}function su(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let i in e)try{su(e[i],t)}catch{}const r=Eu(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const i=gm(r);for(let n in i){const a=i[n].get;if(a)try{a.call(e)}catch{}}}}}function w$(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const $$=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function x$(e){return $$.includes(e)}const S$={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function k$(e){return e=e.toLowerCase(),S$[e]??e}const I$=["touchstart","touchmove"];function T$(e){return I$.includes(e)}const oi=Symbol("events"),ng=new Set,ou=new Set;function E$(e,t,r,i={}){function n(a){if(i.capture||uu.call(t,a),!a.cancelBubble)return un(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?lr(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function Fa(e,t,r){(t[oi]??(t[oi]={}))[e]=r}function ag(e){for(var t=0;t<e.length;t++)ng.add(e[t]);for(var r of ou)r(e)}let _c=null;function uu(e){var b,$;var t=this,r=t.ownerDocument,i=e.type,n=((b=e.composedPath)==null?void 0:b.call(e))||[],a=n[0]||e.target;_c=e;var s=0,o=_c===e&&e[oi];if(o){var u=n.indexOf(o);if(u!==-1&&(t===document||t===window)){e[oi]=t;return}var d=n.indexOf(t);if(d===-1)return;u<=d&&(s=u)}if(a=n[s]||e.target,a!==t){rw(e,"currentTarget",{configurable:!0,get(){return a||r}});var p=we,h=be;Rt(null),Nt(null);try{for(var f,m=[];a!==null&&a!==t;){try{var _=($=a[oi])==null?void 0:$[i];_!=null&&(!a.disabled||e.target===a)&&_.call(a,e)}catch(v){f?m.push(v):f=v}if(e.cancelBubble)break;s++,a=s<n.length?n[s]:null}if(f){for(let v of m)queueMicrotask(()=>{throw v});throw f}}finally{e[oi]=t,delete e.currentTarget,Rt(p),Nt(h)}}}var fm;const Vs=((fm=globalThis==null?void 0:globalThis.window)==null?void 0:fm.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function C$(e){return(Vs==null?void 0:Vs.createHTML(e))??e}function sg(e){var t=qm("template");return t.innerHTML=C$(e.replaceAll("<!>","<!---->")),t.content}function Kn(e,t){var r=be;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function pr(e,t){var r=(t&zw)!==0,i=(t&Aw)!==0,n,a=!e.startsWith("<!>");return()=>{n===void 0&&(n=sg(a?e:"<!>"+e),r||(n=Ji(n)));var s=i||Um?document.importNode(n,!0):n.cloneNode(!0);if(r){var o=Ji(s),u=s.lastChild;Kn(o,u)}else Kn(s,s);return s}}function z$(e,t,r="svg"){var i=!e.startsWith("<!>"),n=`<${r}>${i?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var s=sg(n),o=Ji(s);a=Ji(o)}var u=a.cloneNode(!0);return Kn(u,u),u}}function A$(e,t){return z$(e,t,"svg")}function dn(){var e=document.createDocumentFragment(),t=document.createComment(""),r=xr();return e.append(t,r),Kn(t,r),e}function Ke(e,t){e!==null&&e.before(t)}function Ai(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Rn]??(e[Rn]=e.nodeValue))&&(e[Rn]=r,e.nodeValue=`${r}`)}function O$(e,t){return B$(e,t)}const Sa=new Map;function B$(e,{target:t,anchor:r,props:i={},events:n,context:a,intro:s=!0,transformError:o}){d$();var u=void 0,d=h$(()=>{var p=r??t.appendChild(xr());Kw(p,{pending:()=>{}},m=>{Au({});var _=Ue;a&&(_.c=a),n&&(i.$$events=n),u=e(m,i)||{},Ou()},o);var h=new Set,f=m=>{for(var _=0;_<m.length;_++){var b=m[_];if(!h.has(b)){h.add(b);var $=T$(b);for(const I of[t,document]){var v=Sa.get(I);v===void 0&&(v=new Map,Sa.set(I,v));var w=v.get(b);w===void 0?(I.addEventListener(b,uu,{passive:$}),v.set(b,1)):v.set(b,w+1)}}}};return f(hs(ng)),ou.add(f),()=>{var $;for(var m of h)for(const v of[t,document]){var _=Sa.get(v),b=_.get(m);--b==0?(v.removeEventListener(m,uu),_.delete(m),_.size===0&&Sa.delete(v)):_.set(m,b)}ou.delete(f),p!==r&&(($=p.parentNode)==null||$.removeChild(p))}});return R$.set(u,d),u}let R$=new WeakMap;var Ht,or,xt,pi,ea,ta,fs;class og{constructor(t,r=!0){pt(this,"anchor");ge(this,Ht,new Map);ge(this,or,new Map);ge(this,xt,new Map);ge(this,pi,new Set);ge(this,ea,!0);ge(this,ta,t=>{if(O(this,Ht).has(t)){var r=O(this,Ht).get(t),i=O(this,or).get(r);if(i)ts(i),O(this,pi).delete(r);else{var n=O(this,xt).get(r);n&&(ts(n.effect),O(this,or).set(r,n.effect),O(this,xt).delete(r),n.fragment.lastChild.remove(),this.anchor.before(n.fragment),i=n.effect)}for(const[a,s]of O(this,Ht)){if(O(this,Ht).delete(a),a===t)break;const o=O(this,xt).get(s);o&&(tt(o.effect),O(this,xt).delete(s))}for(const[a,s]of O(this,or)){if(a===r||O(this,pi).has(a))continue;const o=()=>{if(Array.from(O(this,Ht).values()).includes(a)){var d=document.createDocumentFragment();Gu(s,d),d.append(xr()),O(this,xt).set(a,{effect:s,fragment:d})}else tt(s);O(this,pi).delete(a),O(this,or).delete(a)};O(this,ea)||!i?(O(this,pi).add(a),hi(s,o,!1)):o()}}});ge(this,fs,t=>{O(this,Ht).delete(t);const r=Array.from(O(this,Ht).values());for(const[i,n]of O(this,xt))r.includes(i)||(tt(n.effect),O(this,xt).delete(i))});this.anchor=t,fe(this,ea,r)}ensure(t,r){var i=ue,n=Gm();if(r&&!O(this,or).has(t)&&!O(this,xt).has(t))if(n){var a=document.createDocumentFragment(),s=xr();a.append(s),O(this,xt).set(t,{effect:_t(()=>r(s)),fragment:a})}else O(this,or).set(t,_t(()=>r(this.anchor)));if(O(this,Ht).set(i,t),n){for(const[o,u]of O(this,or))o===t?i.unskip_effect(u):i.skip_effect(u);for(const[o,u]of O(this,xt))o===t?i.unskip_effect(u.effect):i.skip_effect(u.effect);i.oncommit(O(this,ta)),i.ondiscard(O(this,fs))}else O(this,ta).call(this,i)}}Ht=new WeakMap,or=new WeakMap,xt=new WeakMap,pi=new WeakMap,ea=new WeakMap,ta=new WeakMap,fs=new WeakMap;function Fs(e,t,r=!1){var i=new og(e),n=r?yi:0;function a(s,o){i.ensure(s,o)}ms(()=>{var s=!1;t((o,u=0)=>{s=!0,a(u,o)}),s||a(-1,null)},n)}function Ha(e,t){return t}function N$(e,t,r){for(var i=[],n=t.length,a,s=t.length,o=0;o<n;o++){let h=t[o];hi(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var f=e.outrogroups;lu(e,hs(a.done)),f.delete(a),f.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var u=i.length===0&&r!==null;if(u){var d=r,p=d.parentNode;c$(p),p.append(d),e.items.clear()}lu(e,t,!u)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function lu(e,t,r=!0){var i;if(e.pending.size>0){i=new Set;for(const s of e.pending.values())for(const o of s)i.add(e.items.get(o).e)}for(var n=0;n<t.length;n++){var a=t[n];if(i!=null&&i.has(a)){a.f|=ur;const s=document.createDocumentFragment();Gu(a,s)}else tt(t[n],r)}}var yc;function ja(e,t,r,i,n,a=null){var s=e,o=new Map,u=(t&vm)!==0;if(u){var d=e;s=d.appendChild(xr())}var p=null,h=Ru(()=>{var I=r();return Tu(I)?I:I==null?[]:hs(I)}),f,m=new Map,_=!0;function b(I){(w.effect.f&kt)===0&&(w.pending.delete(I),w.fallback=p,M$(w,f,s,t,i),p!==null&&(f.length===0?(p.f&ur)===0?ts(p):(p.f^=ur,Pn(p,null,s)):hi(p,()=>{p=null})))}function $(I){w.pending.delete(I)}var v=ms(()=>{f=q(h);for(var I=f.length,k=new Set,T=ue,C=Gm(),z=0;z<I;z+=1){var x=f[z],N=i(x,z),P=_?null:o.get(N);P?(P.v&&Qi(P.v,x),P.i&&Qi(P.i,z),C&&T.unskip_effect(P.e)):(P=D$(o,_?s:yc??(yc=xr()),x,N,z,n,t,r),_||(P.e.f|=ur),o.set(N,P)),k.add(N)}if(I===0&&a&&!p&&(_?p=_t(()=>a(s)):(p=_t(()=>a(yc??(yc=xr()))),p.f|=ur)),I>k.size&&pw(),!_)if(m.set(T,k),C){for(const[F,j]of o)k.has(F)||T.skip_effect(j.e);T.oncommit(b),T.ondiscard($)}else b(T);q(h)}),w={effect:v,items:o,pending:m,outrogroups:null,fallback:p};_=!1}function vn(e){for(;e!==null&&(e.f&Bt)===0;)e=e.next;return e}function M$(e,t,r,i,n){var P,F,j,Y,B,Z,K,J,he;var a=(i&Sw)!==0,s=t.length,o=e.items,u=vn(e.effect.first),d,p=null,h,f=[],m=[],_,b,$,v;if(a)for(v=0;v<s;v+=1)_=t[v],b=n(_,v),$=o.get(b).e,($.f&ur)===0&&((F=(P=$.nodes)==null?void 0:P.a)==null||F.measure(),(h??(h=new Set)).add($));for(v=0;v<s;v+=1){if(_=t[v],b=n(_,v),$=o.get(b).e,e.outrogroups!==null)for(const L of e.outrogroups)L.pending.delete($),L.done.delete($);if(($.f&dt)!==0&&(ts($),a&&((Y=(j=$.nodes)==null?void 0:j.a)==null||Y.unfix(),(h??(h=new Set)).delete($))),($.f&ur)!==0)if($.f^=ur,$===u)Pn($,null,r);else{var w=p?p.next:u;$===e.effect.last&&(e.effect.last=$.prev),$.prev&&($.prev.next=$.next),$.next&&($.next.prev=$.prev),Ar(e,p,$),Ar(e,$,w),Pn($,w,r),p=$,f=[],m=[],u=vn(p.next);continue}if($!==u){if(d!==void 0&&d.has($)){if(f.length<m.length){var I=m[0],k;p=I.prev;var T=f[0],C=f[f.length-1];for(k=0;k<f.length;k+=1)Pn(f[k],I,r);for(k=0;k<m.length;k+=1)d.delete(m[k]);Ar(e,T.prev,C.next),Ar(e,p,T),Ar(e,C,I),u=I,p=C,v-=1,f=[],m=[]}else d.delete($),Pn($,u,r),Ar(e,$.prev,$.next),Ar(e,$,p===null?e.effect.first:p.next),Ar(e,p,$),p=$;continue}for(f=[],m=[];u!==null&&u!==$;)(d??(d=new Set)).add(u),m.push(u),u=vn(u.next);if(u===null)continue}($.f&ur)===0&&f.push($),p=$,u=vn($.next)}if(e.outrogroups!==null){for(const L of e.outrogroups)L.pending.size===0&&(lu(e,hs(L.done)),(B=e.outrogroups)==null||B.delete(L));e.outrogroups.size===0&&(e.outrogroups=null)}if(u!==null||d!==void 0){var z=[];if(d!==void 0)for($ of d)($.f&dt)===0&&z.push($);for(;u!==null;)(u.f&dt)===0&&u!==e.fallback&&z.push(u),u=vn(u.next);var x=z.length;if(x>0){var N=(i&vm)!==0&&s===0?r:null;if(a){for(v=0;v<x;v+=1)(K=(Z=z[v].nodes)==null?void 0:Z.a)==null||K.measure();for(v=0;v<x;v+=1)(he=(J=z[v].nodes)==null?void 0:J.a)==null||he.fix()}N$(e,z,N)}}a&&lr(()=>{var L,de;if(h!==void 0)for($ of h)(de=(L=$.nodes)==null?void 0:L.a)==null||de.apply()})}function D$(e,t,r,i,n,a,s,o){var u=(s&$w)!==0?(s&kw)===0?o$(r,!1,!1):Wr(r):null,d=(s&xw)!==0?Wr(n):null;return{v:u,i:d,e:_t(()=>(a(t,u??r,d??n,o),()=>{e.delete(i)}))}}function Pn(e,t,r){if(e.nodes)for(var i=e.nodes.start,n=e.nodes.end,a=t&&(t.f&ur)===0?t.nodes.start:r;i!==null;){var s=aa(i);if(a.before(i),i===n)return;i=s}}function Ar(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function cn(e,t,r,i,n){var o;var a=(o=t.$$slots)==null?void 0:o[r],s=!1;a===!0&&(a=t.children,s=!0),a===void 0||a(e,s?()=>i:i)}function P$(e,t,r,i,n,a){var s=null,o=e,u=new og(o,!1);ms(()=>{const d=t()||null;var p=Ow;if(d===null){u.ensure(null,null);return}return u.ensure(d,h=>{if(d){if(s=qm(d,p),Kn(s,s),i){var f=null,m=s.appendChild(xr());i(s,m),f==null||f.remove()}be.nodes.end=s,h.before(s)}}),()=>{}},yi),Uu(()=>{})}function U$(e,t){var r=void 0,i;Hm(()=>{r!==(r=t())&&(i&&(tt(i),i=null),r&&(i=_t(()=>{Lu(()=>r(e))})))})}function ug(e){var t,r,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(r=ug(e[t]))&&(i&&(i+=" "),i+=r)}else for(r in e)e[r]&&(i&&(i+=" "),i+=r);return i}function L$(){for(var e,t,r=0,i="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=ug(e))&&(i&&(i+=" "),i+=t);return i}function lg(e){return typeof e=="object"?L$(e):e??""}const bc=[...` 	
\r\f \v\uFEFF`];function W$(e,t,r){var i=e==null?"":""+e;if(r){for(var n of Object.keys(r))if(r[n])i=i?i+" "+n:n;else if(i.length)for(var a=n.length,s=0;(s=i.indexOf(n,s))>=0;){var o=s+a;(s===0||bc.includes(i[s-1]))&&(o===i.length||bc.includes(i[o]))?i=(s===0?"":i.substring(0,s))+i.substring(o+1):s=o}}return i===""?null:i}function vc(e,t=!1){var r=t?" !important;":";",i="";for(var n of Object.keys(e)){var a=e[n];a!=null&&a!==""&&(i+=" "+n+": "+a+r)}return i}function Hs(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function G$(e,t){if(t){var r="",i,n;if(Array.isArray(t)?(i=t[0],n=t[1]):i=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,s=0,o=!1,u=[];i&&u.push(...Object.keys(i).map(Hs)),n&&u.push(...Object.keys(n).map(Hs));var d=0,p=-1;const b=e.length;for(var h=0;h<b;h++){var f=e[h];if(o?f==="/"&&e[h-1]==="*"&&(o=!1):a?a===f&&(a=!1):f==="/"&&e[h+1]==="*"?o=!0:f==='"'||f==="'"?a=f:f==="("?s++:f===")"&&s--,!o&&a===!1&&s===0){if(f===":"&&p===-1)p=h;else if(f===";"||h===b-1){if(p!==-1){var m=Hs(e.substring(d,p).trim());if(!u.includes(m)){f!==";"&&h++;var _=e.substring(d,h).trim();r+=" "+_+";"}}d=h+1,p=-1}}}}return i&&(r+=vc(i)),n&&(r+=vc(n,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Nr(e,t,r,i,n,a){var s=e[Xo];if(s!==r||s===void 0){var o=W$(r,i,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[Xo]=r}else if(a&&n!==a)for(var u in a){var d=!!a[u];(n==null||d!==!!n[u])&&e.classList.toggle(u,d)}return a}function js(e,t={},r,i){for(var n in r){var a=r[n];t[n]!==a&&(r[n]==null?e.style.removeProperty(n):e.style.setProperty(n,a,i))}}function q$(e,t,r,i){var n=e[Yo];if(n!==t){var a=G$(t,i);a==null?e.removeAttribute("style"):e.style.cssText=a,e[Yo]=t}else i&&(Array.isArray(i)?(js(e,r==null?void 0:r[0],i[0]),js(e,r==null?void 0:r[1],i[1],"important")):js(e,r,i));return i}function rs(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Tu(t))return Nw();for(var i of e.options)i.selected=t.includes(Fn(i));return}for(i of e.options){var n=Fn(i);if(l$(n,t)){i.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function dg(e){var t=new MutationObserver(()=>{"__value"in e&&rs(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Uu(()=>{t.disconnect()})}function wc(e,t,r=t){var i=new WeakSet,n=!0;Fw(e,"change",a=>{var s=a?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(s),Fn);else{var u=e.querySelector(s)??e.querySelector("option:not([disabled])");o=u&&Fn(u)}r(o),e.__value=o,ue!==null&&i.add(ue)}),Lu(()=>{var a=t();if(e===document.activeElement){var s=ue;if(i.has(s))return}if(rs(e,a,n),n&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=Fn(o),r(a))}e.__value=a,n=!1}),dg(e)}function Fn(e){return"__value"in e?e.__value:e.value}const wn=Symbol("class"),$n=Symbol("style"),cg=Symbol("is custom element"),pg=Symbol("is html"),V$=zu?"input":"INPUT",F$=zu?"option":"OPTION",H$=zu?"select":"SELECT";function j$(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ks(e,t,r,i){var n=fg(e);n[t]!==(n[t]=r)&&(t==="loading"&&(e[lw]=r),r==null?e.removeAttribute(t):typeof r!="string"&&hg(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function K$(e,t,r,i,n=!1,a=!1){var s=fg(e),o=s[cg],u=!s[pg],d=t||{},p=e.nodeName===F$;for(var h in t)h in r||(r[h]=null);r.class?r.class=lg(r.class):r[wn]&&(r.class=null),r[$n]&&(r.style??(r.style=null));var f=hg(e);if(e.nodeName===V$&&"type"in r&&("value"in r||"__value"in r)){var m=r.type;(m!==d.type||m===void 0&&e.hasAttribute("type"))&&(d.type=m,Ks(e,"type",m))}for(const k in r){let T=r[k];if(p&&k==="value"&&T==null){e.value=e.__value="",d[k]=T;continue}if(k==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";Nr(e,_,T,i,t==null?void 0:t[wn],r[wn]),d[k]=T,d[wn]=r[wn];continue}if(k==="style"){q$(e,T,t==null?void 0:t[$n],r[$n]),d[k]=T,d[$n]=r[$n];continue}var b=d[k];if(!(T===b&&!(T===void 0&&e.hasAttribute(k)))){d[k]=T;var $=k[0]+k[1];if($!=="$$")if($==="on"){const C={},z="$$"+k;let x=k.slice(2);var v=x$(x);if(w$(x)&&(x=x.slice(0,-7),C.capture=!0),!v&&b){if(T!=null)continue;e.removeEventListener(x,d[z],C),d[z]=null}if(v)Fa(x,e,T),ag([x]);else if(T!=null){let N=function(P){d[k].call(this,P)};d[z]=E$(x,e,N,C)}}else if(k==="style")Ks(e,k,T);else if(k==="autofocus")qw(e,!!T);else if(!o&&(k==="__value"||k==="value"&&T!=null))e.value=e.__value=T;else if(k==="selected"&&p)j$(e,T);else{var w=k;u||(w=k$(w));var I=w==="defaultValue"||w==="defaultChecked";if(T==null&&!o&&!I)if(s[k]=null,w==="value"||w==="checked"){let C=e;const z=t===void 0;if(w==="value"){let x=C.defaultValue;C.removeAttribute(w),C.defaultValue=x,C.value=C.__value=z?x:null}else{let x=C.defaultChecked;C.removeAttribute(w),C.defaultChecked=x,C.checked=z?x:!1}}else e.removeAttribute(k);else I||f.includes(w)&&(o||typeof T!="string")?(e[w]=T,w in s&&(s[w]=qe)):typeof T!="function"&&Ks(e,w,T)}}}return d}function $c(e,t,r=[],i=[],n=[],a,s=!1,o=!1){Em(n,r,i,u=>{var d=void 0,p={},h=e.nodeName===H$,f=!1;if(Hm(()=>{var _=t(...u.map(q)),b=K$(e,d,_,a,s,o);f&&h&&"value"in _&&rs(e,_.value);for(let v of Object.getOwnPropertySymbols(p))_[v]||tt(p[v]);for(let v of Object.getOwnPropertySymbols(_)){var $=_[v];v.description===Bw&&(!d||$!==d[v])&&(p[v]&&tt(p[v]),p[v]=_t(()=>U$(e,()=>$))),b[v]=$}d=b}),h){var m=e;Lu(()=>{rs(m,d.value,!0),dg(m)})}f=!0})}function fg(e){return e[Ua]??(e[Ua]={[cg]:e.nodeName.includes("-"),[pg]:e.namespaceURI===$m})}var xc=new Map;function hg(e){var t=e.getAttribute("is")||e.nodeName,r=xc.get(t);if(r)return r;xc.set(t,r=[]);for(var i,n=e,a=Element.prototype;a!==n;){i=gm(n);for(var s in i)i[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&r.push(s);n=Eu(n)}return r}function Z$(e=!1){const t=Ue,r=t.l.u;if(!r)return;let i=()=>Ni(t.s);if(e){let n=0,a={};const s=Yi(()=>{let o=!1;const u=t.s;for(const d in u)u[d]!==a[d]&&(a[d]=u[d],o=!0);return o&&n++,n});i=()=>q(s)}r.b.length&&f$(()=>{Sc(t,i),Ko(r.b)}),au(()=>{const n=tn(()=>r.m.map(sw));return()=>{for(const a of n)typeof a=="function"&&a()}}),r.a.length&&au(()=>{Sc(t,i),Ko(r.a)})}function Sc(e,t){if(e.l.s)for(const r of e.l.s)q(r);t()}const X$={get(e,t){if(!e.exclude.includes(t))return q(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var i=be;try{Nt(e.parent_effect),e.special[t]=ti({get[t](){return e.props[t]}},t,wm)}finally{Nt(i)}}return e.special[t](r),pc(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),pc(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function wi(e,t){return new Proxy({props:e,exclude:t,special:{},version:Wr(0),parent_effect:be},X$)}const Y$={get(e,t){let r=e.props.length;for(;r--;){let i=e.props[r];if(yn(i)&&(i=i()),typeof i=="object"&&i!==null&&t in i)return i[t]}},set(e,t,r){let i=e.props.length;for(;i--;){let n=e.props[i];yn(n)&&(n=n());const a=Ur(n,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let i=e.props[r];if(yn(i)&&(i=i()),typeof i=="object"&&i!==null&&t in i){const n=Ur(i,t);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,t){if(t===$r||t===bm)return!1;for(let r of e.props)if(yn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(yn(r)&&(r=r()),!!r){for(const i in r)t.includes(i)||t.push(i);for(const i of Object.getOwnPropertySymbols(r))t.includes(i)||t.push(i)}return t}};function oa(...e){return new Proxy({props:e},Y$)}function ti(e,t,r,i){var k;var n=!on||(r&Tw)!==0,a=(r&Ew)!==0,s=(r&Cw)!==0,o=i,u=!0,d=void 0,p=()=>s&&n?(d??(d=Yi(i)),q(d)):(u&&(u=!1,o=s?tn(i):i),o);let h;if(a){var f=$r in e||bm in e;h=((k=Ur(e,t))==null?void 0:k.set)??(f&&t in e?T=>e[t]=T:void 0)}var m,_=!1;a?[m,_]=Gw(()=>e[t]):m=e[t],m===void 0&&i!==void 0&&(m=p(),h&&(n&&_w(),h(m)));var b;if(n?b=()=>{var T=e[t];return T===void 0?p():(u=!0,T)}:b=()=>{var T=e[t];return T!==void 0&&(o=void 0),T===void 0?o:T},n&&(r&wm)===0)return b;if(h){var $=e.$$legacy;return(function(T,C){return arguments.length>0?((!n||!C||$||_)&&h(C?b():T),T):b()})}var v=!1,w=((r&Iw)!==0?Yi:Ru)(()=>(v=!1,b()));a&&q(w);var I=be;return(function(T,C){if(arguments.length>0){const z=C?q(w):n&&a?ai(T):T;return ae(w,z),v=!0,o!==void 0&&(o=z),T}return kr&&v||(I.f&kt)!==0?w.v:q(w)})}function Q$(e){Ue===null&&dw(),on&&Ue.l!==null?J$(Ue).m.push(e):au(()=>{const t=tn(e);if(typeof t=="function")return t})}function J$(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const e1="5";var hm;typeof window<"u"&&((hm=window.__svelte??(window.__svelte={})).v??(hm.v=new Set)).add(e1);Uw();/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const t1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var r1=A$("<svg><!><!></svg>");function ua(e,t){const r=wi(t,["children","$$slots","$$events","$$legacy"]),i=wi(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Au(t,!1);let n=ti(t,"name",8,void 0),a=ti(t,"color",8,"currentColor"),s=ti(t,"size",8,24),o=ti(t,"strokeWidth",8,2),u=ti(t,"absoluteStrokeWidth",8,!1),d=ti(t,"iconNode",24,()=>[]);const p=(..._)=>_.filter((b,$,v)=>!!b&&v.indexOf(b)===$).join(" ");Z$();var h=r1();$c(h,(_,b)=>({...t1,...i,width:s(),height:s(),stroke:a(),"stroke-width":_,class:b}),[()=>(Ni(u()),Ni(o()),Ni(s()),tn(()=>u()?Number(o())*24/Number(s()):o())),()=>(Ni(n()),Ni(r),tn(()=>p("lucide-icon","lucide",n()?`lucide-${n()}`:"",r.class)))]);var f=ze(h);ja(f,1,d,Ha,(_,b)=>{var $=t$(()=>ow(q(b),2));let v=()=>q($)[0],w=()=>q($)[1];var I=dn(),k=ln(I);P$(k,v,!0,(T,C)=>{$c(T,()=>({...w()}))}),Ke(_,I)});var m=nt(f);cn(m,t,"default",{}),Ke(e,h),Ou()}function i1(e,t){const r=wi(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const i=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];ua(e,oa({name:"mic-off"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=dn(),o=ln(s);cn(o,t,"default",{}),Ke(n,s)},$$slots:{default:!0}}))}function kc(e,t){const r=wi(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const i=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];ua(e,oa({name:"mic"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=dn(),o=ln(s);cn(o,t,"default",{}),Ke(n,s)},$$slots:{default:!0}}))}function n1(e,t){const r=wi(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const i=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]];ua(e,oa({name:"sparkles"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=dn(),o=ln(s);cn(o,t,"default",{}),Ke(n,s)},$$slots:{default:!0}}))}function a1(e,t){const r=wi(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const i=[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]];ua(e,oa({name:"terminal"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=dn(),o=ln(s);cn(o,t,"default",{}),Ke(n,s)},$$slots:{default:!0}}))}function s1(e,t){const r=wi(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const i=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];ua(e,oa({name:"volume-2"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=dn(),o=ln(s);cn(o,t,"default",{}),Ke(n,s)},$$slots:{default:!0}}))}function o1(e){const t=new Int16Array(e.length);for(let r=0;r<e.length;r++){const i=Math.max(-1,Math.min(1,e[r]));t[r]=i<0?i*32768:i*32767}return t}function u1(e){const t=new Uint8Array(e.buffer);let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return btoa(r)}async function l1(e,t=()=>{}){t("capture:start");const r=await navigator.mediaDevices.getUserMedia({audio:{sampleRate:16e3,channelCount:1,echoCancellation:!0,noiseSuppression:!0}});t(`capture:permission-ok tracks=${r.getAudioTracks().length}`);const i=new AudioContext({sampleRate:16e3});await i.resume(),t(`capture:context state=${i.state} rate=${i.sampleRate}`);const n="/jarvis/pcm-worklet.js";await i.audioWorklet.addModule(n),t(`capture:worklet-loaded url=${n}`);const a=i.createMediaStreamSource(r),s=new AudioWorkletNode(i,"pcm-processor"),o=i.createGain();o.gain.value=0;let u=!0;return s.port.onmessage=d=>{u&&(u=!1,t(`capture:first-chunk samples=${d.data.length}`));const p=o1(d.data);e(u1(p))},a.connect(s),s.connect(o),o.connect(i.destination),t("capture:graph-connected"),()=>{try{a.disconnect(),s.disconnect(),o.disconnect(),r.getTracks().forEach(d=>d.stop()),i.close()}catch{}}}function Ic(e){const t=atob(e),r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r.buffer}function d1(e){if(e.length<4)return!1;const t=atob(e.slice(0,4)),r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r[0]===73&&r[1]===68&&r[2]===51||r[0]===255&&(r[1]&224)===224}function c1(){let e=null,t=0,r=!1;function i(){return(!e||e.state==="closed")&&(e=new AudioContext),e.state==="suspended"&&e.resume(),e}async function n(u){const d=i();if(d1(u)){const p=Ic(u),h=await d.decodeAudioData(p),f=d.createBufferSource();f.buffer=h,f.connect(d.destination);const m=d.currentTime;t<m&&(t=m),f.start(t),t+=h.duration,r=!0}else{const p=new Int16Array(Ic(u)),h=new Float32Array(p.length);for(let b=0;b<p.length;b++)h[b]=p[b]/32768;const f=d.createBuffer(1,h.length,24e3);f.copyToChannel(h,0);const m=d.createBufferSource();m.buffer=f,m.connect(d.destination);const _=d.currentTime;t<_&&(t=_),m.start(t),t+=f.duration,r=!0}}function a(){t=0,r=!1,e&&(e.close().catch(()=>{}),e=null)}function s(){return r}function o(){a()}return{play:n,stop:a,close:o,isPlaying:s}}/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var qu=Object.defineProperty,p1=Object.getOwnPropertyDescriptor,f1=Object.getOwnPropertyNames,h1=Object.prototype.hasOwnProperty,m1=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),U=(e,t)=>()=>(e&&(t=e(e=0)),t),pn=(e,t)=>{for(var r in t)qu(e,r,{get:t[r],enumerable:!0})},g1=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of f1(t))!h1.call(e,n)&&n!==r&&qu(e,n,{get:()=>t[n],enumerable:!(i=p1(t,n))||i.enumerable});return e},Zn=e=>g1(qu({},"__esModule",{value:!0}),e),xn,Or,Pi,Tc,mg,gg=U(()=>{xn=new Map,Or=[],Pi=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=xn.get(e);if(i===void 0)xn.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=Or.indexOf(e);n!==-1&&Or.splice(n,1);for(let a=0;a<Or.length;a++)if(xn.get(Or[a]).priority<=r){Or.splice(a,0,e);return}Or.push(e)}return}throw new TypeError("not a valid backend")},Tc=async e=>{let t=xn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},mg=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),i=r.length===0?Or:r,n,a=[],s=new Set;for(let u of i){let d=await Tc(u);typeof d=="string"?a.push({name:u,err:d}):(n||(n=d),n===d&&s.add(u))}if(!n)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of a)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[n,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]}}),_1=U(()=>{gg()}),_g,y1=U(()=>{_g="1.27.0"}),Zs,je,yg=U(()=>{y1(),Zs="warning",je={wasm:{},webgl:{},webgpu:{},versions:{common:_g},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Zs=e}},get logLevel(){return Zs}},Object.defineProperty(je,"logLevel",{enumerable:!0})}),ke,b1=U(()=>{yg(),ke=je}),bg,vg,v1=U(()=>{bg=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[3]):(n=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let p=a*n,h=0,f=p,m=p*2,_=-1;s==="RGBA"?(h=0,f=p,m=p*2,_=p*3):s==="RGB"?(h=0,f=p,m=p*2):s==="RBG"&&(h=0,m=p,f=p*2);for(let b=0;b<a;b++)for(let $=0;$<n;$++){let v=(e.data[h++]-d[0])*u[0],w=(e.data[f++]-d[1])*u[1],I=(e.data[m++]-d[2])*u[2],k=_===-1?255:(e.data[_++]-d[3])*u[3];i.fillStyle="rgba("+v+","+w+","+I+","+k+")",i.fillRect($,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},vg=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[1],s=e.dims[3]):(n=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,d,p;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let h=a*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,m=0,_=1,b=2,$=3,v=0,w=h,I=h*2,k=-1;o==="RGBA"?(v=0,w=h,I=h*2,k=h*3):o==="RGB"?(v=0,w=h,I=h*2):o==="RBG"&&(v=0,I=h,w=h*2),i=r.createImageData(n,a);for(let T=0;T<a*n;m+=f,_+=f,b+=f,$+=f,T++)i.data[m]=(e.data[v++]-p[0])*d[0],i.data[_]=(e.data[w++]-p[1])*d[1],i.data[b]=(e.data[I++]-p[2])*d[2],i.data[$]=k===-1?255:(e.data[k++]-p[3])*d[3]}else throw new Error("Can not access image data");return i}}),ka,wg,$g,xg,Sg,kg,w1=U(()=>{Vu(),ka=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},a,s;typeof n.mean=="number"?a=[n.mean,n.mean,n.mean,n.mean]:a=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,p=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),h=4,f=0,m=1,_=2,b=3,$=0,v=d,w=d*2,I=-1;o==="RGB"&&(h=3,f=0,m=1,_=2,b=-1),u==="RGBA"?I=d*3:u==="RBG"?($=0,w=d,v=d*2):u==="BGR"&&(w=0,v=d,$=d*2);for(let k=0;k<d;k++,f+=h,_+=h,m+=h,b+=h)p[$++]=(e[f]+s[0])/a[0],p[v++]=(e[m]+s[1])/a[1],p[w++]=(e[_]+s[2])/a[2],I!==-1&&b!==-1&&(p[I++]=(e[b]+s[3])/a[3]);return u==="RGBA"?new St("float32",p,[1,4,r,i]):new St("float32",p,[1,3,r,i])},wg=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(r){let p=u();p.width=e.width,p.height=e.height;let h=d(p);if(h!=null){let f=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=m}else o.tensorFormat="RGBA",o.height=f,o.width=m;h.drawImage(e,0,0),s=h.getImageData(0,0,m,f).data}else throw new Error("Can not access image data")}else if(i){let p,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,h=t.resizedWidth):(p=e.height,h=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=h,t!==void 0){let f=u();f.width=h,f.height=p;let m=d(f);if(m!=null)m.putImageData(e,0,0),s=m.getImageData(0,0,h,p).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=u();p.width=e.width,p.height=e.height;let h=d(p);if(h!=null){let f=e.height,m=e.width;return h.drawImage(e,0,0,m,f),s=h.getImageData(0,0,m,f).data,o.height=f,o.width=m,ka(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((p,h)=>{let f=u(),m=d(f);if(!e||!m)return h();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{f.width=_.width,f.height=_.height,m.drawImage(_,0,0,f.width,f.height);let b=m.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,p(ka(b.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return ka(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},$g=(e,t)=>{let{width:r,height:i,download:n,dispose:a}=t,s=[1,i,r,4];return new St({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:a})},xg=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new St({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:a})},Sg=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new St({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:a})},kg=(e,t,r)=>new St({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),ri,Un,Xs,Ig,$1=U(()=>{ri=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Un=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Xs=!1,Ig=()=>{if(!Xs){Xs=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(ri.set("int64",BigInt64Array),Un.set(BigInt64Array,"int64")),t&&(ri.set("uint64",BigUint64Array),Un.set(BigUint64Array,"uint64")),i?(ri.set("float16",r),Un.set(r,"float16")):ri.set("float16",Uint16Array)}}}),Tg,Eg,x1=U(()=>{Vu(),Tg=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Eg=(e,t)=>{switch(e.location){case"cpu":return new St(e.type,e.data,t);case"cpu-pinned":return new St({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new St({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new St({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new St({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),St,Vu=U(()=>{v1(),w1(),$1(),x1(),St=class{constructor(e,t,r){Ig();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=ri.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=ri.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")i="string",s=e;else if(u==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let u=Un.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");n=o,this.cpuData=s,this.dataLocation="cpu"}let a=Tg(n);if(this.cpuData&&a!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=a}static async fromImage(e,t){return wg(e,t)}static fromTexture(e,t){return $g(e,t)}static fromGpuBuffer(e,t){return xg(e,t)}static fromMLTensor(e,t){return Sg(e,t)}static fromPinnedBuffer(e,t,r){return kg(e,t,r)}toDataURL(e){return bg(this,e)}toImageData(e){return vg(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Eg(this,e)}}}),et,Cg=U(()=>{Vu(),et=St}),is,Ys,cr,Yt,gi,_i,zg=U(()=>{yg(),is=(e,t)=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ys=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),is("CPU",s);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},cr=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||Ys("BEGIN",e)},Yt=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||Ys("END",e)},gi=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||console.time(`ORT::${e}`)},_i=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||console.timeEnd(`ORT::${e}`)}}),Ag,S1=U(()=>{gg(),Cg(),zg(),Ag=class Og{constructor(t){this.handler=t}async run(t,r,i){cr(),gi("InferenceSession.run");let n={},a={};if(typeof t!="object"||t===null||t instanceof et||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof et)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,p=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(p.indexOf(h)!==-1){let f=r[h];(f===null||f instanceof et)&&(d=!0,s=!1,n[h]=f)}if(d){if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)n[d]=null;let o=await this.handler.run(t,n,a),u={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let p=o[d];p instanceof et?u[d]=p:u[d]=new et(p.type,p.data,p.dims)}return _i("InferenceSession.run"),Yt(),u}async release(){return this.handler.dispose()}static async create(t,r,i,n){cr(),gi("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,h=0,f=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(f=t.byteLength-h,typeof i=="number"){if(f=i,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||h+f>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-h}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(p,h,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await mg(s),d=await o.createInferenceSessionHandler(a,u);return _i("InferenceSession.create"),Yt(),new Og(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Wi,k1=U(()=>{S1(),Wi=Ag}),I1=U(()=>{}),T1=U(()=>{}),E1=U(()=>{}),C1=U(()=>{}),z1={};pn(z1,{InferenceSession:()=>Wi,TRACE:()=>is,TRACE_EVENT_BEGIN:()=>gi,TRACE_EVENT_END:()=>_i,TRACE_FUNC_BEGIN:()=>cr,TRACE_FUNC_END:()=>Yt,Tensor:()=>et,env:()=>ke,registerBackend:()=>Pi});var Mt=U(()=>{_1(),b1(),k1(),Cg(),I1(),T1(),zg(),E1(),C1()}),Fu=U(()=>{}),Bg={};pn(Bg,{default:()=>Rg});var Qs,Js,Rg,A1=U(()=>{var e;Uy(),ki(),Hu(),Qs="ort-wasm-proxy-worker",Js=((e=globalThis.self)==null?void 0:e.name)===Qs,Js&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":ju(i.wasm).then(()=>{dl(i).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:a}=i;cl(a,n).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:n}=i,a=ds(n);postMessage({type:r,out:a});break}case"create":{let{model:n,options:a}=i;pl(n,a).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":fl(i),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:a,inputs:s,outputIndices:o,options:u}=i;hl(n,a,s,o,new Array(o.length).fill(null),u).then(d=>{d.some(p=>p[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},gl([...s,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":ml(i),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),Rg=Js?null:t=>new Worker(t??vt,{type:"module",name:Qs})}),Ng={};pn(Ng,{default:()=>Mg});async function Ec(e={}){var nc,ac;var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&((nc=self.name)==null?void 0:nc.startsWith("em-pthread"));t.mountExternalData=(l,c)=>{l.startsWith("./")&&(l=l.substring(2)),(t.Xc||(t.Xc=new Map)).set(l,c)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=l=>async(...c)=>{var y;try{if(t.Yc)throw Error("Session already started");let g=t.Yc={Kd:c[0],errors:[]},S=await l(...c);if(t.Yc!==g)throw Error("Session mismatch");(y=t.dd)==null||y.flush();let E=g.errors;if(0<E.length){let A=await Promise.all(E);if(A=A.filter(M=>M),0<A.length)throw Error(A.join(`
`))}return S}finally{t.Yc=null}};t.jsepInit=(l,c)=>{if(l==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=c;let y=t.dd;t.jsepRegisterBuffer=(g,S,E,A)=>y.registerBuffer(g,S,E,A),t.jsepGetBuffer=g=>y.getBuffer(g),t.jsepCreateDownloader=(g,S,E)=>y.createDownloader(g,S,E),t.jsepOnCreateSession=g=>{y.onCreateSession(g)},t.jsepOnReleaseSession=g=>{y.onReleaseSession(g)},t.jsepOnRunStart=g=>y.onRunStart(g),t.Id=(g,S)=>{y.upload(g,S)}}else if(l==="webnn"){let y=c[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=c.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=g=>y.onRunStart(g),t.webnnOnRunEnd=y.onRunEnd.bind(y),t.webnnOnReleaseSession=g=>{y.onReleaseSession(g)},t.webnnCreateMLTensorDownloader=(g,S)=>y.createMLTensorDownloader(g,S),t.webnnRegisterMLTensor=(g,S,E,A)=>y.registerMLTensor(g,S,E,A),t.webnnCreateMLContext=g=>y.createMLContext(g),t.webnnRegisterMLConstant=(g,S,E,A,M,V)=>y.registerMLConstant(g,S,E,A,M,t.Xc,V),t.webnnRegisterGraphInput=y.registerGraphInput.bind(y),t.webnnIsGraphInput=y.isGraphInput.bind(y),t.webnnRegisterGraphOutput=y.registerGraphOutput.bind(y),t.webnnIsGraphOutput=y.isGraphOutput.bind(y),t.webnnCreateTemporaryTensor=y.createTemporaryTensor.bind(y),t.webnnIsGraphInputOutputTypeSupported=y.isGraphInputOutputTypeSupported.bind(y)}};let s=()=>{let l=c=>(...y)=>{let g=ir;return y=c(...y),ir!=g?new Promise((S,E)=>{Es={resolve:S,reject:E}}):y};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[c]=l(t[c])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,u,d=(l,c)=>{throw c},p=import.meta.url,h="";if(r||i){try{h=new URL(".",p).href}catch{}i&&(u=l=>{var c=new XMLHttpRequest;return c.open("GET",l,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),o=async l=>{if(z(l))return new Promise((y,g)=>{var S=new XMLHttpRequest;S.open("GET",l,!0),S.responseType="arraybuffer",S.onload=()=>{S.status==200||S.status==0&&S.response?y(S.response):g(S.status)},S.onerror=g,S.send(null)});var c=await fetch(l,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var f,m,_,b,$,v,w=console.log.bind(console),I=console.error.bind(console),k=w,T=I,C=!1,z=l=>l.startsWith("file://");function x(){tr.buffer!=P.buffer&&H()}if(n){let l=function(c){try{var y=c.data,g=y.Sc;if(g==="load"){let S=[];self.onmessage=E=>S.push(E),v=()=>{postMessage({Sc:"loaded"});for(let E of S)l(E);self.onmessage=l};for(let E of y.xd)t[E]&&!t[E].proxy||(t[E]=(...A)=>{postMessage({Sc:"callHandler",wd:E,args:A})},E=="print"&&(k=t[E]),E=="printErr"&&(T=t[E]));tr=y.Od,H(),m=y.Pd,ct(),$a()}else if(g==="run"){(function(S){var E=(x(),Z)[S+52>>>2>>>0];S=(x(),Z)[S+56>>>2>>>0],hd(E,E-S),me(E)})(y.Rc),Bs(y.Rc,0,0,1,0,0),ca(),ks(y.Rc),N||(ud(),N=!0);try{_s(y.Md,y.bd)}catch(S){if(S!="unwind")throw S}}else y.target!=="setimmediate"&&(g==="checkMailbox"?N&&ma():g&&(T(`worker: received unknown command ${g}`),T(y)))}catch(S){throw ld(),S}};var N=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=l}var P,F,j,Y,B,Z,K,J,he,L,de,W=!1;function H(){var l=tr.buffer;t.HEAP8=P=new Int8Array(l),j=new Int16Array(l),t.HEAPU8=F=new Uint8Array(l),Y=new Uint16Array(l),t.HEAP32=B=new Int32Array(l),t.HEAPU32=Z=new Uint32Array(l),K=new Float32Array(l),J=new Float64Array(l),he=new BigInt64Array(l),L=new BigUint64Array(l)}function Q(){W=!0,n?v():hr.sb()}function G(l){throw T(l="Aborted("+l+")"),C=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),$==null||$(l),l}function xe(){return{a:{ma:hv,gb:fv,g:ys,J:re,f:hn,o:bs,h:vs,ha:Yy,b:Qy,T:Jy,Ha:wl,n:eb,$:kl,Xa:Il,Da:Tl,Fa:El,Ya:Cl,Va:zl,Oa:Al,Ua:Ol,ka:Bl,Ea:Rl,Ba:Nl,Wa:Ml,Ca:Dl,bb:tb,ea:rb,wa:ib,ua:ab,da:ob,O:ub,H:lb,va:db,_:_b,xa:yb,Ra:bb,za:wb,Ia:$b,sa:xb,fa:Sb,Qa:ks,_a:kb,R:Cb,r:Rb,c:xs,hb:Nb,y:Mb,M:Db,D:Pb,l:Ub,s:Fl,ib:Lb,I:Wb,S:Gb,j:qb,u:Vb,q:Fb,k:Hb,La:jb,Ma:Kb,Na:Zb,Ja:Zl,Ka:Xl,ta:Yl,db:Yb,ab:Jb,v:ev,aa:tv,ga:rv,$a:Qb,W:iv,Za:nv,Aa:av,F:Xb,U:sv,la:va,ya:uv,fb:ov,eb:lv,Sa:td,Ta:rd,Ga:Vr,V:id,ja:nd,Pa:ad,ia:sd,kb:Xv,na:Fv,lb:Zv,oa:Vv,G:Nv,e:yv,t:gv,w:mv,B:Ev,mb:Wv,K:Ov,x:wv,pa:Gv,Y:Hv,ba:Lv,nb:Uv,ob:Pv,P:Cv,qa:Dv,pb:Mv,N:Bv,Z:qv,d:_v,A:vv,m:bv,jb:Yv,p:xv,z:Sv,C:$v,E:kv,L:zv,qb:Rv,Q:jv,ca:Av,X:Kv,rb:Tv,ra:Iv,i:cv,a:tr,cb:ot}}}async function ct(){function l(g,S){var E=hr=g.exports;g={};for(let[A,M]of Object.entries(E))typeof M=="function"?(E=Ib(M),g[A]=E):g[A]=M;return hr=g,hr=(function(){var A=hr,M=X=>ce=>X(ce)>>>0,V=X=>()=>X()>>>0;return(A=Object.assign({},A)).tb=M(A.tb),A.Xb=V(A.Xb),A.Zb=M(A.Zb),A.lc=M(A.lc),A.mc=V(A.mc),A.qc=M(A.qc),A})(),la.push(hr._b),od=(g=hr).tb,ud=g.ub,t._OrtInit=g.vb,t._OrtGetLastError=g.wb,t._OrtCreateSessionOptions=g.xb,t._OrtAppendExecutionProvider=g.yb,t._OrtAddFreeDimensionOverride=g.zb,t._OrtAddSessionConfigEntry=g.Ab,t._OrtReleaseSessionOptions=g.Bb,t._OrtCreateSession=g.Cb,t._OrtReleaseSession=g.Db,t._OrtGetInputOutputCount=g.Eb,t._OrtGetInputOutputMetadata=g.Fb,t._OrtFree=g.Gb,t._OrtCreateTensor=g.Hb,t._OrtGetTensorData=g.Ib,t._OrtReleaseTensor=g.Jb,t._OrtCreateRunOptions=g.Kb,t._OrtAddRunConfigEntry=g.Lb,t._OrtReleaseRunOptions=g.Mb,t._OrtCreateBinding=g.Nb,t._OrtBindInput=g.Ob,t._OrtBindOutput=g.Pb,t._OrtClearBoundOutputs=g.Qb,t._OrtReleaseBinding=g.Rb,t._OrtRunWithBinding=g.Sb,t._OrtRun=g.Tb,t._OrtEndProfiling=g.Ub,t._JsepOutput=g.Vb,t._JsepGetNodeName=g.Wb,wa=g.Xb,nr=t._free=g.Yb,gn=t._malloc=g.Zb,Bs=g.ac,ld=g.bc,dd=g.cc,cd=g.dc,Rs=g.ec,pd=g.fc,fd=g.gc,ye=g.hc,_n=g.ic,hd=g.jc,me=g.kc,Ns=g.lc,_e=g.mc,md=g.nc,Ms=g.oc,gd=g.pc,_d=g.qc,yd=g.rc,Ds=g.sc,bd=g.tc,vd=g.uc,wd=g.vc,$d=g.wc,xd=g.xc,Sd=g.yc,kd=g.zc,Id=g.Ac,Td=g.Bc,Ed=g.Cc,Cd=g.Dc,zd=g.Ec,Ad=g.Fc,Od=g.Gc,Bd=g.Hc,Rd=g.Ic,Nd=g.Jc,Md=g.Kc,Dd=g.Lc,Pd=g.Mc,Ud=g.Nc,Ld=g.Pc,Wd=g.Qc,Gd=g.$c,qd=g.ad,Vd=g.fd,Fd=g.jd,Hd=g.kd,jd=g.ld,Kd=g.md,Zd=g.nd,Xd=g.od,Yd=g.pd,Qd=g.qd,Jd=g.vd,ec=g.Td,tc=g.Ud,rc=g.Vd,ic=g.Wd,m=S,hr}var c,y=xe();return t.instantiateWasm?new Promise(g=>{t.instantiateWasm(y,(S,E)=>{g(l(S,E))})}):n?l(new WebAssembly.Instance(m,xe()),m):(de??(de=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",h):h+"ort-wasm-simd-threaded.jsep.wasm":new URL("/jarvis/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href),c=await(async function(g){var S=de;if(!f&&!z(S))try{var E=fetch(S,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,g)}catch(A){T(`wasm streaming compile failed: ${A}`),T("falling back to ArrayBuffer instantiation")}return(async function(A,M){try{var V=await(async function(X){if(!f)try{var ce=await o(X);return new Uint8Array(ce)}catch{}if(X==de&&f)X=new Uint8Array(f);else{if(!u)throw"both async and sync fetching of the wasm failed";X=u(X)}return X})(A);return await WebAssembly.instantiate(V,M)}catch(X){T(`failed to asynchronously prepare wasm: ${X}`),G(X)}})(S,g)})(y),l(c.instance,c.module))}class Pe{constructor(c){pt(this,"name","ExitStatus");this.message=`Program terminated with exit(${c})`,this.status=c}}var rt=l=>{l.terminate(),l.onmessage=()=>{}},it=[],st=0,Qe=null,Dt=l=>{Jt.length==0&&(pa(),fn(Jt[0]));var c=Jt.pop();if(!c)return 6;Fr.push(c),er[l.Rc]=c,c.Rc=l.Rc;var y={Sc:"run",Md:l.Ld,bd:l.bd,Rc:l.Rc};return c.postMessage(y,l.rd),0},Ae=0,se=(l,c,...y)=>{var g,S=16*y.length,E=_e(),A=Ns(S),M=A>>>3;for(g of y)typeof g=="bigint"?((x(),he)[M++>>>0]=1n,(x(),he)[M++>>>0]=g):((x(),he)[M++>>>0]=0n,(x(),J)[M++>>>0]=g);return l=dd(l,0,S,A,c),me(E),l};function ot(l){if(n)return se(0,1,l);if(_=l,!(0<Ae)){for(var c of Fr)rt(c);for(c of Jt)rt(c);Jt=[],Fr=[],er={},C=!0}d(0,new Pe(l))}function Ti(l){if(n)return se(1,0,l);Vr(l)}var Vr=l=>{if(_=l,n)throw Ti(l),"unwind";ot(l)},Jt=[],Fr=[],la=[],er={},da=l=>{var c=l.Rc;delete er[c],Jt.push(l),Fr.splice(Fr.indexOf(l),1),l.Rc=0,cd(c)};function ca(){la.forEach(l=>l())}var fn=l=>new Promise(c=>{l.onmessage=S=>{var E=S.data;if(S=E.Sc,E.Zc&&E.Zc!=wa()){var A=er[E.Zc];A?A.postMessage(E,E.rd):T(`Internal error! Worker sent a message "${S}" to target pthread ${E.Zc}, but that thread no longer exists!`)}else S==="checkMailbox"?ma():S==="spawnThread"?Dt(E):S==="cleanupThread"?ha(()=>{da(er[E.Nd])}):S==="loaded"?(l.loaded=!0,c(l)):E.target==="setimmediate"?l.postMessage(E):S==="uncaughtException"?l.onerror(E.error):S==="callHandler"?t[E.wd](...E.args):S&&T(`worker sent an unknown command ${S}`)},l.onerror=S=>{throw T(`worker sent an error! ${S.filename}:${S.lineno}: ${S.message}`),S};var y,g=[];for(y of[])t.propertyIsEnumerable(y)&&g.push(y);l.postMessage({Sc:"load",xd:g,Od:tr,Pd:m})});function pa(){var l=new Worker((()=>{let c=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new c("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Jt.push(l)}var tr,_s=(l,c)=>{Ae=0,l=Ds(l,c),0<Ae?_=l:Rs(l)},Hr=[],Ei=0;function ys(l){var c=new yt(l>>>=0);return(x(),P)[c.Tc+12>>>0]==0&&(pe(c,!0),Ei--),ve(c,!1),Hr.push(c),_d(l)}var Tr=0,re=()=>{ye(0,0);var l=Hr.pop();md(l.cd),Tr=0};function pe(l,c){c=c?1:0,(x(),P)[l.Tc+12>>>0]=c}function ve(l,c){c=c?1:0,(x(),P)[l.Tc+13>>>0]=c}class yt{constructor(c){this.cd=c,this.Tc=c-24}}var bt=l=>{var c=Tr;if(!c)return _n(0),0;var y=new yt(c);(x(),Z)[y.Tc+16>>>2>>>0]=c;var g=(x(),Z)[y.Tc+4>>>2>>>0];if(!g)return _n(0),c;for(var S of l){if(S===0||S===g)break;if(gd(S,g,y.Tc+16))return _n(S),c}return _n(g),c};function hn(){return bt([])}function bs(l){return bt([l>>>0])}function vs(l,c,y,g){return bt([l>>>0,c>>>0,y>>>0,g>>>0])}var Yy=()=>{var l=Hr.pop();l||G("no exception to throw");var c=l.cd;throw(x(),P)[l.Tc+13>>>0]==0&&(Hr.push(l),ve(l,!0),pe(l,!1),Ei++),Ms(c),Tr=c};function Qy(l,c,y){var g=new yt(l>>>=0);throw c>>>=0,y>>>=0,(x(),Z)[g.Tc+16>>>2>>>0]=0,(x(),Z)[g.Tc+4>>>2>>>0]=c,(x(),Z)[g.Tc+8>>>2>>>0]=y,Ms(l),Ei++,Tr=l}var Jy=()=>Ei;function vl(l,c,y,g){return n?se(2,1,l,c,y,g):wl(l,c,y,g)}function wl(l,c,y,g){if(l>>>=0,c>>>=0,y>>>=0,g>>>=0,!globalThis.SharedArrayBuffer)return 6;var S=[];return n&&S.length===0?vl(l,c,y,g):(l={Ld:y,Rc:l,bd:g,rd:S},n?(l.Sc="spawnThread",postMessage(l,S),0):Dt(l))}function eb(l){throw Tr||(Tr=l>>>0),Tr}var $l=globalThis.TextDecoder&&new TextDecoder,xl=(l,c,y,g)=>{if(y=c+y,g)return y;for(;l[c]&&!(c>=y);)++c;return c},Sl=(l,c=0,y,g)=>{if(16<(y=xl(l,c>>>=0,y,g))-c&&l.buffer&&$l)return $l.decode(l.buffer instanceof ArrayBuffer?l.subarray(c,y):l.slice(c,y));for(g="";c<y;){var S=l[c++];if(128&S){var E=63&l[c++];if((224&S)==192)g+=String.fromCharCode((31&S)<<6|E);else{var A=63&l[c++];65536>(S=(240&S)==224?(15&S)<<12|E<<6|A:(7&S)<<18|E<<12|A<<6|63&l[c++])?g+=String.fromCharCode(S):(S-=65536,g+=String.fromCharCode(55296|S>>10,56320|1023&S))}}else g+=String.fromCharCode(S)}return g},Ge=(l,c,y)=>(l>>>=0)?Sl((x(),F),l,c,y):"";function kl(l,c,y){return n?se(3,1,l,c,y):0}function Il(l,c){if(n)return se(4,1,l,c)}function Tl(l,c){if(n)return se(5,1,l,c)}function El(l,c,y){if(n)return se(6,1,l,c,y)}function Cl(l,c,y){return n?se(7,1,l,c,y):0}function zl(l,c){if(n)return se(8,1,l,c)}function Al(l,c,y){if(n)return se(9,1,l,c,y)}function Ol(l,c,y,g){if(n)return se(10,1,l,c,y,g)}function Bl(l,c,y,g){if(n)return se(11,1,l,c,y,g)}function Rl(l,c,y,g){if(n)return se(12,1,l,c,y,g)}function Nl(l){if(n)return se(13,1,l)}function Ml(l,c){if(n)return se(14,1,l,c)}function Dl(l,c,y){if(n)return se(15,1,l,c,y)}var tb=()=>G(""),rr=l=>{l>>>=0;for(var c="";;){var y=(x(),F)[l++>>>0];if(!y)return c;c+=String.fromCharCode(y)}},ws={},$s={},Ci=class extends Error{constructor(l){super(l),this.name="BindingError"}};function fr(l,c,y={}){return(function(g,S,E={}){var A=S.name;if(!g)throw new Ci(`type "${A}" must have a positive integer typeid pointer`);if($s.hasOwnProperty(g)){if(E.yd)return;throw new Ci(`Cannot register type '${A}' twice`)}$s[g]=S,ws.hasOwnProperty(g)&&(S=ws[g],delete ws[g],S.forEach(M=>M()))})(l,c,y)}var Pl=(l,c,y)=>{switch(c){case 1:return y?g=>(x(),P)[g>>>0]:g=>(x(),F)[g>>>0];case 2:return y?g=>(x(),j)[g>>>1>>>0]:g=>(x(),Y)[g>>>1>>>0];case 4:return y?g=>(x(),B)[g>>>2>>>0]:g=>(x(),Z)[g>>>2>>>0];case 8:return y?g=>(x(),he)[g>>>3>>>0]:g=>(x(),L)[g>>>3>>>0];default:throw new TypeError(`invalid integer width (${c}): ${l}`)}};function rb(l,c,y,g,S){l>>>=0,y>>>=0,c=rr(c>>>0);let E=A=>A;if(g=g===0n){let A=8*y;E=M=>BigInt.asUintN(A,M),S=E(S)}fr(l,{name:c,Oc:E,Vc:(A,M)=>(typeof M=="number"&&(M=BigInt(M)),M),Uc:Pl(c,y,!g),Wc:null})}function ib(l,c,y,g){fr(l>>>=0,{name:c=rr(c>>>0),Oc:function(S){return!!S},Vc:function(S,E){return E?y:g},Uc:function(S){return this.Oc((x(),F)[S>>>0])},Wc:null})}var Ul=[],jr=[0,1,,1,null,1,!0,1,!1,1];function xs(l){9<(l>>>=0)&&--jr[l+1]===0&&(jr[l]=void 0,Ul.push(l))}var Tt=l=>{if(!l)throw new Ci(`Cannot use deleted val. handle = ${l}`);return jr[l]},Pt=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=Ul.pop()||jr.length;return jr[c]=l,jr[c+1]=1,c}};function Ss(l){return this.Oc((x(),Z)[l>>>2>>>0])}var nb={name:"emscripten::val",Oc:l=>{var c=Tt(l);return xs(l),c},Vc:(l,c)=>Pt(c),Uc:Ss,Wc:null};function ab(l){return fr(l>>>0,nb)}var sb=(l,c)=>{switch(c){case 4:return function(y){return this.Oc((x(),K)[y>>>2>>>0])};case 8:return function(y){return this.Oc((x(),J)[y>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${l}`)}};function ob(l,c,y){y>>>=0,fr(l>>>=0,{name:c=rr(c>>>0),Oc:g=>g,Vc:(g,S)=>S,Uc:sb(c,y),Wc:null})}function ub(l,c,y,g,S){l>>>=0,y>>>=0,c=rr(c>>>0);let E=M=>M;if(g===0){var A=32-8*y;E=M=>M<<A>>>A,S=E(S)}fr(l,{name:c,Oc:E,Vc:(M,V)=>V,Uc:Pl(c,y,g!==0),Wc:null})}function lb(l,c,y){function g(E){var A=(x(),Z)[E>>>2>>>0];return E=(x(),Z)[E+4>>>2>>>0],new S((x(),P).buffer,E,A)}var S=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];fr(l>>>=0,{name:y=rr(y>>>0),Oc:g,Uc:g},{yd:!0})}var Er=(l,c,y)=>{var g=(x(),F);if(c>>>=0,0<y){var S=c;y=c+y-1;for(var E=0;E<l.length;++E){var A=l.codePointAt(E);if(127>=A){if(c>=y)break;g[c++>>>0]=A}else if(2047>=A){if(c+1>=y)break;g[c++>>>0]=192|A>>6,g[c++>>>0]=128|63&A}else if(65535>=A){if(c+2>=y)break;g[c++>>>0]=224|A>>12,g[c++>>>0]=128|A>>6&63,g[c++>>>0]=128|63&A}else{if(c+3>=y)break;g[c++>>>0]=240|A>>18,g[c++>>>0]=128|A>>12&63,g[c++>>>0]=128|A>>6&63,g[c++>>>0]=128|63&A,E++}}g[c>>>0]=0,l=c-S}else l=0;return l},fa=l=>{for(var c=0,y=0;y<l.length;++y){var g=l.charCodeAt(y);127>=g?c++:2047>=g?c+=2:55296<=g&&57343>=g?(c+=4,++y):c+=3}return c};function db(l,c){fr(l>>>=0,{name:c=rr(c>>>0),Oc(y){var g=(x(),Z)[y>>>2>>>0];return g=Ge(y+4,g,!0),nr(y),g},Vc(y,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var S=typeof g=="string";if(!(S||ArrayBuffer.isView(g)&&g.BYTES_PER_ELEMENT==1))throw new Ci("Cannot pass non-string to std::string");var E=S?fa(g):g.length,A=gn(4+E+1),M=A+4;return(x(),Z)[A>>>2>>>0]=E,S?Er(g,M,E+1):(x(),F).set(g,M>>>0),y!==null&&y.push(nr,A),A},Uc:Ss,Wc(y){nr(y)}})}var Ll=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,cb=(l,c,y)=>{if(l>>>=1,16<(c=xl((x(),Y),l,c/2,y))-l&&Ll)return Ll.decode((x(),Y).slice(l,c));for(y="";l<c;++l){var g=(x(),Y)[l>>>0];y+=String.fromCharCode(g)}return y},pb=(l,c,y)=>{if(y??(y=2147483647),2>y)return 0;var g=c;y=(y-=2)<2*l.length?y/2:l.length;for(var S=0;S<y;++S){var E=l.charCodeAt(S);(x(),j)[c>>>1>>>0]=E,c+=2}return(x(),j)[c>>>1>>>0]=0,c-g},fb=l=>2*l.length,hb=(l,c,y)=>{var g="";l>>>=2;for(var S=0;!(S>=c/4);S++){var E=(x(),Z)[l+S>>>0];if(!E&&!y)break;g+=String.fromCodePoint(E)}return g},mb=(l,c,y)=>{if(c>>>=0,y??(y=2147483647),4>y)return 0;var g=c;y=g+y-4;for(var S=0;S<l.length;++S){var E=l.codePointAt(S);if(65535<E&&S++,(x(),B)[c>>>2>>>0]=E,(c+=4)+4>y)break}return(x(),B)[c>>>2>>>0]=0,c-g},gb=l=>{for(var c=0,y=0;y<l.length;++y)65535<l.codePointAt(y)&&y++,c+=4;return c};function _b(l,c,y){if(l>>>=0,c>>>=0,y=rr(y>>>=0),c===2)var g=cb,S=pb,E=fb;else g=hb,S=mb,E=gb;fr(l,{name:y,Oc:A=>{var M=(x(),Z)[A>>>2>>>0];return M=g(A+4,M*c,!0),nr(A),M},Vc:(A,M)=>{if(typeof M!="string")throw new Ci(`Cannot pass non-string to C++ string type ${y}`);var V=E(M),X=gn(4+V+c);return(x(),Z)[X>>>2>>>0]=V/c,S(M,X+4,V+c),A!==null&&A.push(nr,X),X},Uc:Ss,Wc(A){nr(A)}})}function yb(l,c){fr(l>>>=0,{zd:!0,name:c=rr(c>>>0),Oc:()=>{},Vc:()=>{}})}function bb(l){Bs(l>>>0,!i,1,!r,131072,!1),ca()}var ha=l=>{if(!C)try{if(l(),!(0<Ae))try{n?wa()&&Rs(_):Vr(_)}catch(c){c instanceof Pe||c=="unwind"||d(0,c)}}catch(c){c instanceof Pe||c=="unwind"||d(0,c)}},vb=!Atomics.waitAsync||((ac=globalThis.navigator)==null?void 0:ac.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ks(l){l>>>=0,vb||(Atomics.waitAsync((x(),B),l>>>2,l).value.then(ma),l+=128,Atomics.store((x(),B),l>>>2,1))}var ma=()=>ha(()=>{var l=wa();l&&(ks(l),fd())});function wb(l,c){(l>>>=0)==c>>>0?setTimeout(ma):n?postMessage({Zc:l,Sc:"checkMailbox"}):(l=er[l])&&l.postMessage({Sc:"checkMailbox"})}var Is=[];function $b(l,c,y,g,S){for(c>>>=0,S>>>=0,Is.length=0,y=S>>>3,g=S+g>>>3;y<g;){var E;E=(x(),he)[y++>>>0]?(x(),he)[y++>>>0]:(x(),J)[y++>>>0],Is.push(E)}return(c?Ps[c]:pv[l])(...Is)}var xb=()=>{Ae=0};function Sb(l){l>>>=0,n?postMessage({Sc:"cleanupThread",Nd:l}):da(er[l])}function kb(l){}var ga=l=>{try{l()}catch(c){G(c)}};function Ib(l){var c=(...y)=>{_a.push(l);try{return l(...y)}finally{C||(_a.pop(),ir&&Cr===1&&_a.length===0&&(Cr=0,Ae+=1,ga(tc),typeof Fibers<"u"&&Fibers.Zd()))}};return ql.set(l,c),c}var Cr=0,ir=null,Wl=0,_a=[],Ts=new Map,Gl=new Map,ql=new Map,Tb=0,Es=null,Eb=[],Vl=l=>(function(c){if(!C){if(Cr===0){var y=!1,g=!1;c((S=0)=>{if(!C&&(Wl=S,y=!0,g)){Cr=2,ga(()=>rc(ir)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),S=!1;try{var E=(function(){var V=(x(),B)[ir+8>>>2>>>0];return V=Gl.get(V),V=ql.get(V),--Ae,V()})()}catch(V){E=V,S=!0}var A=!1;if(!ir){var M=Es;M&&(Es=null,(S?M.reject:M.resolve)(E),A=!0)}if(S&&!A)throw E}}),g=!0,y||(Cr=1,ir=(function(){var S=gn(65548),E=S+12;if((x(),Z)[S>>>2>>>0]=E,(x(),Z)[S+4>>>2>>>0]=E+65536,E=_a[0],!Ts.has(E)){var A=Tb++;Ts.set(E,A),Gl.set(A,E)}return E=Ts.get(E),(x(),B)[S+8>>>2>>>0]=E,S})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),ga(()=>ec(ir)))}else Cr===2?(Cr=0,ga(ic),nr(ir),ir=null,Eb.forEach(ha)):G(`invalid state: ${Cr}`);return Wl}})(c=>{l().then(c)});function Cb(l){return l>>>=0,Vl(async()=>{var c=await Tt(l);return Pt(c)})}var Cs=[],zb=l=>{var c=Cs.length;return Cs.push(l),c},Ab=(l,c)=>{for(var y=Array(l),g=0;g<l;++g){var S=g,E=(x(),Z)[c+4*g>>>2>>>0],A=$s[E];if(A===void 0)throw l=`parameter ${g}`,E=od(E),c=rr(E),nr(E),new Ci(`${l} has unknown type ${c}`);y[S]=A}return y},Ob=(l,c,y)=>{var g=[];return l=l(g,y),g.length&&((x(),Z)[c>>>2>>>0]=Pt(g)),l},Bb={},ya=l=>{var c=Bb[l];return c===void 0?rr(l):c};function Rb(l,c,y){var[g,...S]=Ab(l,c>>>0);c=g.Vc.bind(g);var E=S.map(V=>V.Uc.bind(V));l--;var A={toValue:Tt};switch(l=E.map((V,X)=>{var ce=`argFromPtr${X}`;return A[ce]=V,`${ce}(args${X?"+"+8*X:""})`}),y){case 0:var M="toValue(handle)";break;case 2:M="new (toValue(handle))";break;case 3:M="";break;case 1:A.getStringOrSymbol=ya,M="toValue(handle)[getStringOrSymbol(methodName)]"}return M+=`(${l})`,g.zd||(A.toReturnWire=c,A.emval_returnValue=Ob,M=`return emval_returnValue(toReturnWire, destructorsRef, ${M})`),M=`return function (handle, methodName, destructorsRef, args) {
  ${M}
  }`,y=new Function(Object.keys(A),M)(...Object.values(A)),M=`methodCaller<(${S.map(V=>V.name)}) => ${g.name}>`,zb(Object.defineProperty(y,"name",{value:M}))}function Nb(l,c){return c>>>=0,(l=Tt(l>>>0))==Tt(c)}function Mb(l){return(l>>>=0)?(l=ya(l),Pt(globalThis[l])):Pt(globalThis)}function Db(l){return l=ya(l>>>0),Pt(t[l])}function Pb(l,c){return c>>>=0,l=Tt(l>>>0),c=Tt(c),Pt(l[c])}function Ub(l){9<(l>>>=0)&&(jr[l+1]+=1)}function Fl(l,c,y,g,S){return Cs[l>>>0](c>>>0,y>>>0,g>>>0,S>>>0)}function Lb(l,c,y,g,S){return Fl(l>>>0,c>>>0,y>>>0,g>>>0,S>>>0)}function Wb(){return Pt([])}function Gb(l){l=Tt(l>>>0);for(var c=Array(l.length),y=0;y<l.length;y++)c[y]=l[y];return Pt(c)}function qb(l){return Pt(ya(l>>>0))}function Vb(){return Pt({})}function Fb(l){for(var c=Tt(l>>>=0);c.length;){var y=c.pop();c.pop()(y)}xs(l)}function Hb(l,c,y){c>>>=0,y>>>=0,l=Tt(l>>>0),c=Tt(c),y=Tt(y),l[c]=y}function jb(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),(x(),B)[c>>>2>>>0]=l.getUTCSeconds(),(x(),B)[c+4>>>2>>>0]=l.getUTCMinutes(),(x(),B)[c+8>>>2>>>0]=l.getUTCHours(),(x(),B)[c+12>>>2>>>0]=l.getUTCDate(),(x(),B)[c+16>>>2>>>0]=l.getUTCMonth(),(x(),B)[c+20>>>2>>>0]=l.getUTCFullYear()-1900,(x(),B)[c+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(x(),B)[c+28>>>2>>>0]=l}var Hl=l=>l%4==0&&(l%100!=0||l%400==0),jl=[0,31,60,91,121,152,182,213,244,274,305,335],Kl=[0,31,59,90,120,151,181,212,243,273,304,334];function Kb(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),(x(),B)[c>>>2>>>0]=l.getSeconds(),(x(),B)[c+4>>>2>>>0]=l.getMinutes(),(x(),B)[c+8>>>2>>>0]=l.getHours(),(x(),B)[c+12>>>2>>>0]=l.getDate(),(x(),B)[c+16>>>2>>>0]=l.getMonth(),(x(),B)[c+20>>>2>>>0]=l.getFullYear()-1900,(x(),B)[c+24>>>2>>>0]=l.getDay();var y=(Hl(l.getFullYear())?jl:Kl)[l.getMonth()]+l.getDate()-1|0;(x(),B)[c+28>>>2>>>0]=y,(x(),B)[c+36>>>2>>>0]=-60*l.getTimezoneOffset(),y=new Date(l.getFullYear(),6,1).getTimezoneOffset();var g=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(y!=g&&l.getTimezoneOffset()==Math.min(g,y)),(x(),B)[c+32>>>2>>>0]=l}function Zb(l){l>>>=0;var c=new Date((x(),B)[l+20>>>2>>>0]+1900,(x(),B)[l+16>>>2>>>0],(x(),B)[l+12>>>2>>>0],(x(),B)[l+8>>>2>>>0],(x(),B)[l+4>>>2>>>0],(x(),B)[l>>>2>>>0],0),y=(x(),B)[l+32>>>2>>>0],g=c.getTimezoneOffset(),S=new Date(c.getFullYear(),6,1).getTimezoneOffset(),E=new Date(c.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(E,S);return 0>y?(x(),B)[l+32>>>2>>>0]=+(S!=E&&A==g):0<y!=(A==g)&&(S=Math.max(E,S),c.setTime(c.getTime()+6e4*((0<y?A:S)-g))),(x(),B)[l+24>>>2>>>0]=c.getDay(),y=(Hl(c.getFullYear())?jl:Kl)[c.getMonth()]+c.getDate()-1|0,(x(),B)[l+28>>>2>>>0]=y,(x(),B)[l>>>2>>>0]=c.getSeconds(),(x(),B)[l+4>>>2>>>0]=c.getMinutes(),(x(),B)[l+8>>>2>>>0]=c.getHours(),(x(),B)[l+12>>>2>>>0]=c.getDate(),(x(),B)[l+16>>>2>>>0]=c.getMonth(),(x(),B)[l+20>>>2>>>0]=c.getYear(),l=c.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function Zl(l,c,y,g,S,E,A){return n?se(16,1,l,c,y,g,S,E,A):-52}function Xl(l,c,y,g,S,E){if(n)return se(17,1,l,c,y,g,S,E)}var mn={},Xb=()=>performance.timeOrigin+performance.now();function Yl(l,c){if(n)return se(18,1,l,c);if(mn[l]&&(clearTimeout(mn[l].id),delete mn[l]),!c)return 0;var y=setTimeout(()=>{delete mn[l],ha(()=>pd(l,performance.timeOrigin+performance.now()))},c);return mn[l]={id:y,Yd:c},0}function Yb(l,c,y,g){l>>>=0,c>>>=0,y>>>=0,g>>>=0;var S=new Date().getFullYear(),E=new Date(S,0,1).getTimezoneOffset();S=new Date(S,6,1).getTimezoneOffset();var A=Math.max(E,S);(x(),Z)[l>>>2>>>0]=60*A,(x(),B)[c>>>2>>>0]=+(E!=S),l=(c=M=>{var V=Math.abs(M);return`UTC${0<=M?"-":"+"}${String(Math.floor(V/60)).padStart(2,"0")}${String(V%60).padStart(2,"0")}`})(E),c=c(S),S<E?(Er(l,y,17),Er(c,g,17)):(Er(l,g,17),Er(c,y,17))}var Qb=()=>Date.now();function Jb(l,c,y){return y>>>=0,0<=l&&3>=l?(l===0?l=Date.now():l=performance.timeOrigin+performance.now(),l=Math.round(1e6*l),(x(),he)[y>>>3>>>0]=BigInt(l),0):28}var zs=[],Ql=(l,c)=>{zs.length=0;for(var y;y=(x(),F)[l++>>>0];){var g=y!=105;c+=(g&=y!=112)&&c%8?4:0,zs.push(y==112?(x(),Z)[c>>>2>>>0]:y==106?(x(),he)[c>>>3>>>0]:y==105?(x(),B)[c>>>2>>>0]:(x(),J)[c>>>3>>>0]),c+=g?8:4}return zs};function ev(l,c,y){return l>>>=0,c=Ql(c>>>0,y>>>0),Ps[l](...c)}function tv(l,c,y){return l>>>=0,c=Ql(c>>>0,y>>>0),Ps[l](...c)}var rv=()=>{};function iv(l,c){return T(Ge(l>>>0,c>>>0))}var nv=()=>{throw Ae+=1,"unwind"};function av(){return 4294901760}var sv=()=>navigator.hardwareConcurrency,Kr={},ba=l=>{var c;return(c=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(l))?+c[1]:(c=/:(\d+):\d+(?:\)|$)/.exec(l))?2147483648|+c[1]:0},Jl=l=>{for(var c of l)(l=ba(c))&&(Kr[l]=c)};function ov(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),Jl(l),Kr.gd=ba(l[3]),Kr.Jd=l,Kr.gd}function va(l){if(!(l=Kr[l>>>0]))return 0;var c;if(c=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(l))l=c[1];else if(c=/^\s+at (.*) \(.*\)$/.exec(l))l=c[1];else{if(!(c=/^(.+?)@/.exec(l)))return 0;l=c[1]}nr(va.hd??0),c=fa(l)+1;var y=gn(c);return y&&Er(l,y,c),va.hd=y,va.hd}function uv(l){l>>>=0;var c=(x(),F).length;if(l<=c||4294901760<l)return!1;for(var y=1;4>=y;y*=2){var g=c*(1+.2/y);g=Math.min(g,l+100663296);e:{g=(Math.min(4294901760,65536*Math.ceil(Math.max(l,g)/65536))-tr.buffer.byteLength+65535)/65536|0;try{tr.grow(g),H();var S=1;break e}catch{}S=void 0}if(S)return!0}return!1}function lv(l,c,y){if(l>>>=0,c>>>=0,Kr.gd==l)var g=Kr.Jd;else(g=Error().stack.toString().split(`
`))[0]=="Error"&&g.shift(),Jl(g);for(var S=3;g[S]&&ba(g[S])!=l;)++S;for(l=0;l<y&&g[l+S];++l)(x(),B)[c+4*l>>>2>>>0]=ba(g[l+S]);return l}var As,Os={},ed=()=>{var g;if(!As){var l,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((g=globalThis.navigator)==null?void 0:g.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in Os)Os[l]===void 0?delete c[l]:c[l]=Os[l];var y=[];for(l in c)y.push(`${l}=${c[l]}`);As=y}return As};function td(l,c){if(n)return se(19,1,l,c);l>>>=0,c>>>=0;var y,g=0,S=0;for(y of ed()){var E=c+g;(x(),Z)[l+S>>>2>>>0]=E,g+=Er(y,E,1/0)+1,S+=4}return 0}function rd(l,c){if(n)return se(20,1,l,c);l>>>=0,c>>>=0;var y=ed();for(var g of((x(),Z)[l>>>2>>>0]=y.length,l=0,y))l+=fa(g)+1;return(x(),Z)[c>>>2>>>0]=l,0}function id(l){return n?se(21,1,l):52}function nd(l,c,y,g){return n?se(22,1,l,c,y,g):52}function ad(l,c,y,g){return n?se(23,1,l,c,y,g):70}var dv=[null,[],[]];function sd(l,c,y,g){if(n)return se(24,1,l,c,y,g);c>>>=0,y>>>=0,g>>>=0;for(var S=0,E=0;E<y;E++){var A=(x(),Z)[c>>>2>>>0],M=(x(),Z)[c+4>>>2>>>0];c+=8;for(var V=0;V<M;V++){var X=l,ce=(x(),F)[A+V>>>0],Se=dv[X];ce===0||ce===10?((X===1?k:T)(Sl(Se)),Se.length=0):Se.push(ce)}S+=M}return(x(),Z)[g>>>2>>>0]=S,0}function cv(l){return l>>>0}n||(function(){for(var l=t.numThreads-1;l--;)pa();it.push(async()=>{var c=(async function(){if(!n)return Promise.all(Jt.map(fn))})();st++,await c,--st==0&&Qe&&(c=Qe,Qe=null,c())})})(),n||(tr=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),H()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>_e(),t.stackRestore=l=>me(l),t.stackAlloc=l=>Ns(l),t.setValue=function(l,c,y="i8"){switch(y.endsWith("*")&&(y="*"),y){case"i1":case"i8":(x(),P)[l>>>0]=c;break;case"i16":(x(),j)[l>>>1>>>0]=c;break;case"i32":(x(),B)[l>>>2>>>0]=c;break;case"i64":(x(),he)[l>>>3>>>0]=BigInt(c);break;case"float":(x(),K)[l>>>2>>>0]=c;break;case"double":(x(),J)[l>>>3>>>0]=c;break;case"*":(x(),Z)[l>>>2>>>0]=c;break;default:G(`invalid type for setValue: ${y}`)}},t.getValue=function(l,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return(x(),P)[l>>>0];case"i16":return(x(),j)[l>>>1>>>0];case"i32":return(x(),B)[l>>>2>>>0];case"i64":return(x(),he)[l>>>3>>>0];case"float":return(x(),K)[l>>>2>>>0];case"double":return(x(),J)[l>>>3>>>0];case"*":return(x(),Z)[l>>>2>>>0];default:G(`invalid type for getValue: ${c}`)}},t.UTF8ToString=Ge,t.stringToUTF8=Er,t.lengthBytesUTF8=fa;var od,ud,wa,nr,gn,Bs,ld,dd,cd,Rs,pd,fd,ye,_n,hd,me,Ns,_e,md,Ms,gd,_d,yd,Ds,bd,vd,wd,$d,xd,Sd,kd,Id,Td,Ed,Cd,zd,Ad,Od,Bd,Rd,Nd,Md,Dd,Pd,Ud,Ld,Wd,Gd,qd,Vd,Fd,Hd,jd,Kd,Zd,Xd,Yd,Qd,Jd,ec,tc,rc,ic,hr,pv=[ot,Ti,vl,kl,Il,Tl,El,Cl,zl,Al,Ol,Bl,Rl,Nl,Ml,Dl,Zl,Xl,Yl,td,rd,id,nd,ad,sd],Ps={1003524:(l,c,y,g,S)=>{if(t===void 0||!t.Xc)return 1;if((l=Ge(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=t.Xc.get(l)))return 2;if(c=Number(c>>>0),y=Number(y>>>0),g=Number(g>>>0),c+y>l.byteLength)return 3;try{let E=l.subarray(c,c+y);switch(S){case 0:(x(),F).set(E,g>>>0);break;case 1:t.Qd?t.Qd(g,E):t.Id(g,E);break;default:return 4}return 0}catch{return 4}},1004348:(l,c,y)=>{t.td(l,(x(),F).subarray(c>>>0,c+y>>>0))},1004412:()=>t.Sd(),1004454:l=>{t.sd(l)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:l=>t.Ad(l),1004609:l=>t.Ed(l),1004641:(l,c,y)=>{t.ed(Number(l),Number(c),Number(y),!0)},1004704:(l,c,y)=>{t.ed(Number(l),Number(c),Number(y))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:l=>{t.$b("Abs",l,void 0)},1004869:l=>{t.$b("Neg",l,void 0)},1004920:l=>{t.$b("Floor",l,void 0)},1004973:l=>{t.$b("Ceil",l,void 0)},1005025:l=>{t.$b("Reciprocal",l,void 0)},1005083:l=>{t.$b("Sqrt",l,void 0)},1005135:l=>{t.$b("Exp",l,void 0)},1005186:l=>{t.$b("Erf",l,void 0)},1005237:l=>{t.$b("Sigmoid",l,void 0)},1005292:(l,c,y)=>{t.$b("HardSigmoid",l,{alpha:c,beta:y})},1005371:l=>{t.$b("Log",l,void 0)},1005422:l=>{t.$b("Sin",l,void 0)},1005473:l=>{t.$b("Cos",l,void 0)},1005524:l=>{t.$b("Tan",l,void 0)},1005575:l=>{t.$b("Asin",l,void 0)},1005627:l=>{t.$b("Acos",l,void 0)},1005679:l=>{t.$b("Atan",l,void 0)},1005731:l=>{t.$b("Sinh",l,void 0)},1005783:l=>{t.$b("Cosh",l,void 0)},1005835:l=>{t.$b("Asinh",l,void 0)},1005888:l=>{t.$b("Acosh",l,void 0)},1005941:l=>{t.$b("Atanh",l,void 0)},1005994:l=>{t.$b("Tanh",l,void 0)},1006046:l=>{t.$b("Not",l,void 0)},1006097:(l,c,y)=>{t.$b("Clip",l,{min:c,max:y})},1006166:l=>{t.$b("Clip",l,void 0)},1006218:(l,c)=>{t.$b("Elu",l,{alpha:c})},1006276:l=>{t.$b("Gelu",l,void 0)},1006328:l=>{t.$b("Relu",l,void 0)},1006380:(l,c)=>{t.$b("LeakyRelu",l,{alpha:c})},1006444:(l,c)=>{t.$b("ThresholdedRelu",l,{alpha:c})},1006514:(l,c)=>{t.$b("Cast",l,{to:c})},1006572:l=>{t.$b("Add",l,void 0)},1006623:l=>{t.$b("Sub",l,void 0)},1006674:l=>{t.$b("Mul",l,void 0)},1006725:l=>{t.$b("Div",l,void 0)},1006776:l=>{t.$b("Pow",l,void 0)},1006827:l=>{t.$b("Equal",l,void 0)},1006880:l=>{t.$b("Greater",l,void 0)},1006935:l=>{t.$b("GreaterOrEqual",l,void 0)},1006997:l=>{t.$b("Less",l,void 0)},1007049:l=>{t.$b("LessOrEqual",l,void 0)},1007108:(l,c,y,g,S)=>{t.$b("ReduceMean",l,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007283:(l,c,y,g,S)=>{t.$b("ReduceMax",l,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007457:(l,c,y,g,S)=>{t.$b("ReduceMin",l,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007631:(l,c,y,g,S)=>{t.$b("ReduceProd",l,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007806:(l,c,y,g,S)=>{t.$b("ReduceSum",l,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007980:(l,c,y,g,S)=>{t.$b("ReduceL1",l,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008153:(l,c,y,g,S)=>{t.$b("ReduceL2",l,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008326:(l,c,y,g,S)=>{t.$b("ReduceLogSum",l,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008503:(l,c,y,g,S)=>{t.$b("ReduceSumSquare",l,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008683:(l,c,y,g,S)=>{t.$b("ReduceLogSumExp",l,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008863:l=>{t.$b("Where",l,void 0)},1008916:(l,c,y)=>{t.$b("Transpose",l,{perm:c?Array.from((x(),B).subarray(Number(c)>>>0,Number(y)>>>0)):[]})},1009040:(l,c,y,g)=>{t.$b("DepthToSpace",l,{blocksize:c,mode:Ge(y),format:g?"NHWC":"NCHW"})},1009173:(l,c,y,g)=>{t.$b("DepthToSpace",l,{blocksize:c,mode:Ge(y),format:g?"NHWC":"NCHW"})},1009306:(l,c,y,g,S,E,A,M,V,X,ce,Se,Oe,Ne,zr)=>{t.$b("ConvTranspose",l,{format:V?"NHWC":"NCHW",autoPad:c,dilations:[y],group:g,kernelShape:[S],pads:[E,A],strides:[M],wIsConst:()=>!!(x(),P)[X>>>0],outputPadding:ce?Array.from((x(),B).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],outputShape:Oe?Array.from((x(),B).subarray(Number(Oe)>>>0,Number(Ne)>>>0)):[],activation:Ge(zr)})},1009739:(l,c,y,g,S,E,A,M,V,X,ce,Se,Oe,Ne)=>{t.$b("ConvTranspose",l,{format:M?"NHWC":"NCHW",autoPad:c,dilations:Array.from((x(),B).subarray(Number(y)>>>0,(Number(y)>>>0)+2>>>0)),group:g,kernelShape:Array.from((x(),B).subarray(Number(S)>>>0,(Number(S)>>>0)+2>>>0)),pads:Array.from((x(),B).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((x(),B).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(x(),P)[V>>>0],outputPadding:X?Array.from((x(),B).subarray(Number(X)>>>0,Number(ce)>>>0)):[],outputShape:Se?Array.from((x(),B).subarray(Number(Se)>>>0,Number(Oe)>>>0)):[],activation:Ge(Ne)})},1010400:(l,c,y,g,S,E,A,M,V,X,ce,Se,Oe,Ne,zr)=>{t.$b("ConvTranspose",l,{format:V?"NHWC":"NCHW",autoPad:c,dilations:[y],group:g,kernelShape:[S],pads:[E,A],strides:[M],wIsConst:()=>!!(x(),P)[X>>>0],outputPadding:ce?Array.from((x(),B).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],outputShape:Oe?Array.from((x(),B).subarray(Number(Oe)>>>0,Number(Ne)>>>0)):[],activation:Ge(zr)})},1010833:(l,c,y,g,S,E,A,M,V,X,ce,Se,Oe,Ne)=>{t.$b("ConvTranspose",l,{format:M?"NHWC":"NCHW",autoPad:c,dilations:Array.from((x(),B).subarray(Number(y)>>>0,(Number(y)>>>0)+2>>>0)),group:g,kernelShape:Array.from((x(),B).subarray(Number(S)>>>0,(Number(S)>>>0)+2>>>0)),pads:Array.from((x(),B).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((x(),B).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(x(),P)[V>>>0],outputPadding:X?Array.from((x(),B).subarray(Number(X)>>>0,Number(ce)>>>0)):[],outputShape:Se?Array.from((x(),B).subarray(Number(Se)>>>0,Number(Oe)>>>0)):[],activation:Ge(Ne)})},1011494:(l,c)=>{t.$b("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},1011585:(l,c,y,g,S,E,A,M,V,X,ce,Se,Oe,Ne)=>{t.$b("AveragePool",l,{format:Ne?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),B).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from((x(),B).subarray(Number(M)>>>0,Number(V)>>>0)):[],pads:X?Array.from((x(),B).subarray(Number(X)>>>0,Number(ce)>>>0)):[],strides:Se?Array.from((x(),B).subarray(Number(Se)>>>0,Number(Oe)>>>0)):[]})},1012064:(l,c)=>{t.$b("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},1012155:(l,c,y,g,S,E,A,M,V,X,ce,Se,Oe,Ne)=>{t.$b("AveragePool",l,{format:Ne?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),B).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from((x(),B).subarray(Number(M)>>>0,Number(V)>>>0)):[],pads:X?Array.from((x(),B).subarray(Number(X)>>>0,Number(ce)>>>0)):[],strides:Se?Array.from((x(),B).subarray(Number(Se)>>>0,Number(Oe)>>>0)):[]})},1012634:(l,c)=>{t.$b("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},1012721:(l,c,y,g,S,E,A,M,V,X,ce,Se,Oe,Ne)=>{t.$b("MaxPool",l,{format:Ne?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),B).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from((x(),B).subarray(Number(M)>>>0,Number(V)>>>0)):[],pads:X?Array.from((x(),B).subarray(Number(X)>>>0,Number(ce)>>>0)):[],strides:Se?Array.from((x(),B).subarray(Number(Se)>>>0,Number(Oe)>>>0)):[]})},1013196:(l,c)=>{t.$b("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},1013283:(l,c,y,g,S,E,A,M,V,X,ce,Se,Oe,Ne)=>{t.$b("MaxPool",l,{format:Ne?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),B).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from((x(),B).subarray(Number(M)>>>0,Number(V)>>>0)):[],pads:X?Array.from((x(),B).subarray(Number(X)>>>0,Number(ce)>>>0)):[],strides:Se?Array.from((x(),B).subarray(Number(Se)>>>0,Number(Oe)>>>0)):[]})},1013758:(l,c,y,g,S)=>{t.$b("Gemm",l,{alpha:c,beta:y,transA:g,transB:S})},1013862:l=>{t.$b("MatMul",l,void 0)},1013916:(l,c,y,g)=>{t.$b("ArgMax",l,{keepDims:!!c,selectLastIndex:!!y,axis:g})},1014024:(l,c,y,g)=>{t.$b("ArgMin",l,{keepDims:!!c,selectLastIndex:!!y,axis:g})},1014132:(l,c)=>{t.$b("Softmax",l,{axis:c})},1014195:(l,c)=>{t.$b("Concat",l,{axis:c})},1014255:(l,c,y,g,S)=>{t.$b("Split",l,{axis:c,numOutputs:y,splitSizes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1014411:l=>{t.$b("Expand",l,void 0)},1014465:(l,c)=>{t.$b("Gather",l,{axis:Number(c)})},1014536:(l,c)=>{t.$b("GatherElements",l,{axis:Number(c)})},1014615:(l,c)=>{t.$b("GatherND",l,{batch_dims:Number(c)})},1014694:(l,c,y,g,S,E,A,M,V,X,ce)=>{t.$b("Resize",l,{antialias:c,axes:y?Array.from((x(),B).subarray(Number(y)>>>0,Number(g)>>>0)):[],coordinateTransformMode:Ge(S),cubicCoeffA:E,excludeOutside:A,extrapolationValue:M,keepAspectRatioPolicy:Ge(V),mode:Ge(X),nearestMode:Ge(ce)})},1015056:(l,c,y,g,S,E,A)=>{t.$b("Slice",l,{starts:c?Array.from((x(),B).subarray(Number(c)>>>0,Number(y)>>>0)):[],ends:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[],axes:E?Array.from((x(),B).subarray(Number(E)>>>0,Number(A)>>>0)):[]})},1015320:l=>{t.$b("Tile",l,void 0)},1015372:(l,c,y)=>{t.$b("InstanceNormalization",l,{epsilon:c,format:y?"NHWC":"NCHW"})},1015486:(l,c,y)=>{t.$b("InstanceNormalization",l,{epsilon:c,format:y?"NHWC":"NCHW"})},1015600:l=>{t.$b("Range",l,void 0)},1015653:(l,c)=>{t.$b("Einsum",l,{equation:Ge(c)})},1015734:(l,c,y,g,S)=>{t.$b("Pad",l,{mode:c,value:y,pads:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1015877:(l,c,y,g,S,E)=>{t.$b("BatchNormalization",l,{epsilon:c,momentum:y,spatial:!!S,trainingMode:!!g,format:E?"NHWC":"NCHW"})},1016046:(l,c,y,g,S,E)=>{t.$b("BatchNormalization",l,{epsilon:c,momentum:y,spatial:!!S,trainingMode:!!g,format:E?"NHWC":"NCHW"})},1016215:(l,c,y)=>{t.$b("CumSum",l,{exclusive:Number(c),reverse:Number(y)})},1016312:(l,c,y)=>{t.$b("DequantizeLinear",l,{axis:c,blockSize:y})},1016402:(l,c,y,g,S)=>{t.$b("GridSample",l,{align_corners:c,mode:Ge(y),padding_mode:Ge(g),format:S?"NHWC":"NCHW"})},1016572:(l,c,y,g,S)=>{t.$b("GridSample",l,{align_corners:c,mode:Ge(y),padding_mode:Ge(g),format:S?"NHWC":"NCHW"})},1016742:(l,c)=>{t.$b("ScatterND",l,{reduction:Ge(c)})},1016827:(l,c,y,g,S,E,A,M,V)=>{t.$b("Attention",l,{numHeads:c,isUnidirectional:y,maskFilterValue:g,scale:S,doRotary:E,qkvHiddenSizes:A?Array.from((x(),B).subarray(Number(M)>>>0,Number(M)+A>>>0)):[],pastPresentShareBuffer:!!V})},1017099:l=>{t.$b("BiasAdd",l,void 0)},1017154:l=>{t.$b("BiasSplitGelu",l,void 0)},1017215:l=>{t.$b("FastGelu",l,void 0)},1017271:(l,c,y,g,S,E,A,M,V,X,ce,Se,Oe,Ne,zr,Us)=>{t.$b("Conv",l,{format:Se?"NHWC":"NCHW",auto_pad:c,dilations:y?Array.from((x(),B).subarray(Number(y)>>>0,Number(g)>>>0)):[],group:S,kernel_shape:E?Array.from((x(),B).subarray(Number(E)>>>0,Number(A)>>>0)):[],pads:M?Array.from((x(),B).subarray(Number(M)>>>0,Number(V)>>>0)):[],strides:X?Array.from((x(),B).subarray(Number(X)>>>0,Number(ce)>>>0)):[],w_is_const:()=>!!(x(),P)[Number(Oe)>>>0],activation:Ge(Ne),activation_params:zr?Array.from((x(),K).subarray(Number(zr)>>>0,Number(Us)>>>0)):[]})},1017855:l=>{t.$b("Gelu",l,void 0)},1017907:(l,c,y,g,S,E,A,M,V)=>{t.$b("GroupQueryAttention",l,{numHeads:c,kvNumHeads:y,scale:g,softcap:S,doRotary:E,rotaryInterleaved:A,smoothSoftmax:M,localWindowSize:V})},1018124:(l,c,y,g)=>{t.$b("LayerNormalization",l,{axis:c,epsilon:y,simplified:!!g})},1018235:(l,c,y,g)=>{t.$b("LayerNormalization",l,{axis:c,epsilon:y,simplified:!!g})},1018346:(l,c,y,g,S,E)=>{t.$b("MatMulNBits",l,{k:c,n:y,accuracyLevel:g,bits:S,blockSize:E})},1018473:(l,c,y,g,S,E)=>{t.$b("MultiHeadAttention",l,{numHeads:c,isUnidirectional:y,maskFilterValue:g,scale:S,doRotary:E})},1018632:(l,c)=>{t.$b("QuickGelu",l,{alpha:c})},1018696:(l,c,y,g,S)=>{t.$b("RotaryEmbedding",l,{interleaved:!!c,numHeads:y,rotaryEmbeddingDim:g,scale:S})},1018835:(l,c,y)=>{t.$b("SkipLayerNormalization",l,{epsilon:c,simplified:!!y})},1018937:(l,c,y)=>{t.$b("SkipLayerNormalization",l,{epsilon:c,simplified:!!y})},1019039:(l,c,y,g)=>{t.$b("GatherBlockQuantized",l,{gatherAxis:c,quantizeAxis:y,blockSize:g})},1019160:l=>{t.Fd(l)},1019194:(l,c)=>t.Hd(Number(l),Number(c),t.Yc.Kd,t.Yc.errors)};function fv(l,c,y){return Vl(async()=>{await t.Dd(Number(l),Number(c),Number(y))})}function hv(){return typeof wasmOffsetConverter<"u"}function mv(l,c,y,g){var S=_e();try{return Id(l,c,y,g)}catch(E){if(me(S),E!==E+0)throw E;ye(1,0)}}function gv(l,c,y){var g=_e();try{return $d(l,c,y)}catch(S){if(me(g),S!==S+0)throw S;ye(1,0)}}function _v(l){var c=_e();try{bd(l)}catch(y){if(me(c),y!==y+0)throw y;ye(1,0)}}function yv(l,c){var y=_e();try{return Ds(l,c)}catch(g){if(me(y),g!==g+0)throw g;ye(1,0)}}function bv(l,c,y){var g=_e();try{yd(l,c,y)}catch(S){if(me(g),S!==S+0)throw S;ye(1,0)}}function vv(l,c){var y=_e();try{Td(l,c)}catch(g){if(me(y),g!==g+0)throw g;ye(1,0)}}function wv(l,c,y,g,S,E,A){var M=_e();try{return Sd(l,c,y,g,S,E,A)}catch(V){if(me(M),V!==V+0)throw V;ye(1,0)}}function $v(l,c,y,g,S,E){var A=_e();try{vd(l,c,y,g,S,E)}catch(M){if(me(A),M!==M+0)throw M;ye(1,0)}}function xv(l,c,y,g){var S=_e();try{kd(l,c,y,g)}catch(E){if(me(S),E!==E+0)throw E;ye(1,0)}}function Sv(l,c,y,g,S){var E=_e();try{wd(l,c,y,g,S)}catch(A){if(me(E),A!==A+0)throw A;ye(1,0)}}function kv(l,c,y,g,S,E,A){var M=_e();try{Cd(l,c,y,g,S,E,A)}catch(V){if(me(M),V!==V+0)throw V;ye(1,0)}}function Iv(l,c,y,g,S,E,A){var M=_e();try{zd(l,c,y,g,S,E,A)}catch(V){if(me(M),V!==V+0)throw V;ye(1,0)}}function Tv(l,c,y,g,S,E,A,M){var V=_e();try{Rd(l,c,y,g,S,E,A,M)}catch(X){if(me(V),X!==X+0)throw X;ye(1,0)}}function Ev(l,c,y,g,S){var E=_e();try{return Ed(l,c,y,g,S)}catch(A){if(me(E),A!==A+0)throw A;ye(1,0)}}function Cv(l,c,y){var g=_e();try{return Nd(l,c,y)}catch(S){if(me(g),S!==S+0)throw S;ye(1,0)}}function zv(l,c,y,g,S,E,A,M){var V=_e();try{Md(l,c,y,g,S,E,A,M)}catch(X){if(me(V),X!==X+0)throw X;ye(1,0)}}function Av(l,c,y,g,S,E,A,M,V,X,ce,Se){var Oe=_e();try{Ad(l,c,y,g,S,E,A,M,V,X,ce,Se)}catch(Ne){if(me(Oe),Ne!==Ne+0)throw Ne;ye(1,0)}}function Ov(l,c,y,g,S,E){var A=_e();try{return Od(l,c,y,g,S,E)}catch(M){if(me(A),M!==M+0)throw M;ye(1,0)}}function Bv(l,c,y){var g=_e();try{return Dd(l,c,y)}catch(S){if(me(g),S!==S+0)throw S;return ye(1,0),0n}}function Rv(l,c,y,g,S,E,A,M,V){var X=_e();try{xd(l,c,y,g,S,E,A,M,V)}catch(ce){if(me(X),ce!==ce+0)throw ce;ye(1,0)}}function Nv(l){var c=_e();try{return Pd(l)}catch(y){if(me(c),y!==y+0)throw y;ye(1,0)}}function Mv(l,c){var y=_e();try{return Jd(l,c)}catch(g){if(me(y),g!==g+0)throw g;return ye(1,0),0n}}function Dv(l){var c=_e();try{return Ud(l)}catch(y){if(me(c),y!==y+0)throw y;return ye(1,0),0n}}function Pv(l,c,y,g){var S=_e();try{return Fd(l,c,y,g)}catch(E){if(me(S),E!==E+0)throw E;ye(1,0)}}function Uv(l,c,y,g,S){var E=_e();try{return Hd(l,c,y,g,S)}catch(A){if(me(E),A!==A+0)throw A;ye(1,0)}}function Lv(l,c,y,g,S,E){var A=_e();try{return jd(l,c,y,g,S,E)}catch(M){if(me(A),M!==M+0)throw M;ye(1,0)}}function Wv(l,c,y,g,S,E){var A=_e();try{return Kd(l,c,y,g,S,E)}catch(M){if(me(A),M!==M+0)throw M;ye(1,0)}}function Gv(l,c,y,g,S,E,A,M){var V=_e();try{return Bd(l,c,y,g,S,E,A,M)}catch(X){if(me(V),X!==X+0)throw X;ye(1,0)}}function qv(l,c,y,g,S){var E=_e();try{return Zd(l,c,y,g,S)}catch(A){if(me(E),A!==A+0)throw A;return ye(1,0),0n}}function Vv(l,c,y,g){var S=_e();try{return Xd(l,c,y,g)}catch(E){if(me(S),E!==E+0)throw E;ye(1,0)}}function Fv(l,c,y,g){var S=_e();try{return Yd(l,c,y,g)}catch(E){if(me(S),E!==E+0)throw E;ye(1,0)}}function Hv(l,c,y,g,S,E,A,M,V,X,ce,Se){var Oe=_e();try{return Qd(l,c,y,g,S,E,A,M,V,X,ce,Se)}catch(Ne){if(me(Oe),Ne!==Ne+0)throw Ne;ye(1,0)}}function jv(l,c,y,g,S,E,A,M,V,X,ce){var Se=_e();try{qd(l,c,y,g,S,E,A,M,V,X,ce)}catch(Oe){if(me(Se),Oe!==Oe+0)throw Oe;ye(1,0)}}function Kv(l,c,y,g,S,E,A,M,V,X,ce,Se,Oe,Ne,zr,Us){var Qv=_e();try{Vd(l,c,y,g,S,E,A,M,V,X,ce,Se,Oe,Ne,zr,Us)}catch(Ls){if(me(Qv),Ls!==Ls+0)throw Ls;ye(1,0)}}function Zv(l,c,y){var g=_e();try{return Ld(l,c,y)}catch(S){if(me(g),S!==S+0)throw S;ye(1,0)}}function Xv(l,c,y){var g=_e();try{return Wd(l,c,y)}catch(S){if(me(g),S!==S+0)throw S;ye(1,0)}}function Yv(l,c,y,g){var S=_e();try{Gd(l,c,y,g)}catch(E){if(me(S),E!==E+0)throw E;ye(1,0)}}function $a(){if(0<st)Qe=$a;else if(n)b==null||b(t),Q();else{for(var l=it;0<l.length;)l.shift()(t);0<st?Qe=$a:(t.calledRun=!0,C||(Q(),b==null||b(t)))}}return n||(hr=await ct(),$a()),t.PTR_SIZE=4,W?t:new Promise((l,c)=>{b=l,$=c})}var Mg,Cc,O1=U(()=>{var e,t;Mg=Ec,Cc=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Cc&&Ec()}),eo,du,zc,vt,Dg,Ia,Ac,Oc,to,Bc,ro,Pg,io,Ug,Hu=U(()=>{Fu(),eo=typeof location>"u"?void 0:location.origin,du=import.meta.url>"file:"&&import.meta.url<"file;",zc=()=>{{if(du){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,eo).href}return import.meta.url}},vt=zc(),Dg=()=>{if(vt&&!vt.startsWith("blob:"))return vt.substring(0,vt.lastIndexOf("/")+1)},Ia=(e,t)=>{try{let r=t??vt;return(r?new URL(e,r):new URL(e)).origin===eo}catch{return!1}},Ac=(e,t)=>{let r=t??vt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Oc=(e,t)=>`${t??"./"}${e}`,to=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Bc=async e=>(await import(e)).default,ro=(A1(),Zn(Bg)).default,Pg=async()=>{if(!vt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ia(vt))return[void 0,ro()];let e=await to(vt);return[e,ro(e)]},io=(O1(),Zn(Ng)).default,Ug=async(e,t,r,i)=>{let n=io&&!(e||t);if(n)if(vt)n=Ia(vt)||i&&!r;else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,io];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??Ac(a,t),o=r&&s&&!Ia(s,t),u=o?await to(s):s??Oc(a,t);return[o?u:void 0,await Bc(u)]}}}),no,Ta,Sn,ao,Rc,Nc,Mc,ju,Re,ki=U(()=>{Hu(),Ta=!1,Sn=!1,ao=!1,Rc=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Nc=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Mc=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},ju=async e=>{if(Ta)return Promise.resolve();if(Sn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ao)throw new Error("previous call to 'initializeWebAssembly()' failed.");Sn=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Mc())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Nc())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Rc();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,a=typeof n=="string"?n:void 0,s=n==null?void 0:n.mjs,o=(s==null?void 0:s.href)??s,u=n==null?void 0:n.wasm,d=(u==null?void 0:u.href)??u,p=e.wasmBinary,[h,f]=await Ug(o,a,r>1,!!p||!!d),m=!1,_=[];if(t>0&&_.push(new Promise(b=>{setTimeout(()=>{m=!0,b()},t)})),_.push(new Promise((b,$)=>{let v={numThreads:r};if(p)v.wasmBinary=p,v.locateFile=w=>w;else if(d||a)v.locateFile=w=>d??a+w;else if(o&&o.indexOf("blob:")!==0)v.locateFile=w=>new URL(w,o).href;else if(h){let w=Dg();w&&(v.locateFile=I=>w+I)}f(v).then(w=>{Sn=!1,Ta=!0,no=w,b(),h&&URL.revokeObjectURL(h)},w=>{Sn=!1,ao=!0,$(w)})})),await Promise.race(_),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Re=()=>{if(Ta&&no)return no;throw new Error("WebAssembly is not initialized yet.")}}),jt,ns,Ce,Ku=U(()=>{ki(),jt=(e,t)=>{let r=Re(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},ns=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,a])=>{let s=t?t+n:n;if(typeof a=="object")ns(a,s+".",r,i);else if(typeof a=="string"||typeof a=="number")i(s,a.toString());else if(typeof a=="boolean")i(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Ce=e=>{let t=Re(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let a=Number(t.getValue(n,i===4?"i32":"i64")),s=t.getValue(n+i,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Lg,B1=U(()=>{ki(),Ku(),Lg=e=>{let t=Re(),r=0,i=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=jt(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,a),r===0&&Ce("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&ns(e.extra,"",new WeakSet,(s,o)=>{let u=jt(s,i),d=jt(o,i);t._OrtAddRunConfigEntry(r,u,d)!==0&&Ce(`Can't set a run config entry: ${s} - ${o}.`)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),a}}}),Dc,Pc,Uc,Zr,Lc,Wg,R1=U(()=>{ki(),Ku(),Dc=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Pc=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Uc=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Zr=(e,t,r,i)=>{let n=jt(t,i),a=jt(r,i);Re()._OrtAddSessionConfigEntry(e,n,a)!==0&&Ce(`Can't set a session config entry: ${t} - ${r}.`)},Lc=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let a=typeof n=="string"?n:n.name,s=[];switch(a){case"webnn":if(a="WEBNN",Zr(e,"session.disable_quant_qdq","1",r),Zr(e,"session.disable_qdq_constant_folding","1",r),typeof n!="string"){let h=n==null?void 0:n.deviceType;h&&Zr(e,"deviceType",h,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let h=n;if(h!=null&&h.preferredLayout){if(h.preferredLayout!=="NCHW"&&h.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${h.preferredLayout}`);Zr(e,"preferredLayout",h.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=jt(a,r),u=s.length,d=0,p=0;if(u>0){d=Re()._malloc(u*Re().PTR_SIZE),r.push(d),p=Re()._malloc(u*Re().PTR_SIZE),r.push(p);for(let h=0;h<u;h++)Re().setValue(d+h*Re().PTR_SIZE,s[h][0],"*"),Re().setValue(p+h*Re().PTR_SIZE,s[h][1],"*")}await Re()._OrtAppendExecutionProvider(e,o,d,p,u)!==0&&Ce(`Can't append execution provider: ${a}.`)}},Wg=async e=>{let t=Re(),r=0,i=[],n=e||{};Uc(n);try{let a=Dc(n.graphOptimizationLevel??"all"),s=Pc(n.executionMode??"sequential"),o=typeof n.logId=="string"?jt(n.logId,i):0,u=n.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let p=typeof n.optimizedModelFilePath=="string"?jt(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(a,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,o,u,d,p),r===0&&Ce("Can't create session options."),n.executionProviders&&await Lc(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);Zr(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[h,f]of Object.entries(n.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let m=jt(h,i);t._OrtAddFreeDimensionOverride(r,m,f)!==0&&Ce(`Can't set a free dimension override: ${h} - ${f}.`)}return n.extra!==void 0&&ns(n.extra,"",new WeakSet,(h,f)=>{Zr(r,h,f,i)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Ce("Can't release session options."),i.forEach(s=>t._free(s)),a}}}),ii,vr,ni,gs,as,Zu,Xu,cu,ne=U(()=>{ii=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},vr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},ni=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,a)=>n*a,1);return r>0?Math.ceil(i*r):void 0},gs=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},as=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Zu=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Xu=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",cu=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Yu,Gg=U(()=>{Fu(),Yu=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),a;try{a=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let u=Math.ceil(i/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await n.read();if(o)break;let d=u.byteLength;new Uint8Array(a,s,d).set(u),s+=d}return new Uint8Array(a,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Wc,Gc,qc,Vc,Qu,Fc,$e,Ir=U(()=>{ne(),Wc=["V","I","W","E","F"],Gc=(e,t)=>{console.log(`[${Wc[e]},${new Date().toISOString()}]${t}`)},Qu=(e,t)=>{qc=e,Vc=t},Fc=(e,t)=>{let r=as(e),i=as(qc);r>=i&&Gc(r,typeof t=="function"?t():t)},$e=(...e)=>{Vc&&Fc(...e)}}),Hc,rn,R,ss,qg,Vg,Fg,oe=U(()=>{Hc=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},rn=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(i<2||n<2)return;let o=Hc.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=r?3:1;o<=a;o++){let u=i-o<0?1:e[i-o],d=n-o<0?1:t[n-o];if(u!==d&&u>1&&d>1)return;let p=Math.max(u,d);if(u&&d)s[a-o]=Math.max(u,d);else{if(p>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},R=class Ka{static size(t){return Ka.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),a=i-1;for(;a>=0;){if(t[a]%r===0){n[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");n[a]=1,r/=t[a],a--}for(a--;a>=0;a--)n[a]=t[a];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Ka.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Ka.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let a=r;a<i;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[a])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,a)=>n+r[a]+r[a+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},ss=class Ln{static adjustPoolAttributes(t,r,i,n,a,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<i.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=i[o]||s[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Ln.adjustPadAndReturnShape(t[u+(s?1:2)],r[u],i[u],n[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,i,n,a,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return Ln.computeShapeHelper(t,r,u,i,n,a,s,o),u}static computeConvOutputShape(t,r,i,n,a,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return Ln.computeShapeHelper(!1,t,u,i,n,a,s,o),u}static computeShapeHelper(t,r,i,n,a,s,o,u){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(Ln.adjustPadAndReturnShape(r[d+2],n[d],a[d],s[d],o,d,d+r.length-2,u))}static adjustPadAndReturnShape(t,r,i,n,a,s,o,u){let d=i*(n-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=((t+r-1)/r-1)*r+n-t;return a[s]=Math.floor(u==="SAME_LOWER"?(p+1)/2:p/2),a[o]=p-a[s],Math.floor((t+p-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-d)/r+1)}},qg=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(i?(o=r[0],u=1):(o=r[1],u=0),r[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(n&&!rn.isValidBroadcast(n,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},Vg=-34028234663852886e22,Fg=34028234663852886e22}),Ju,Hg=U(()=>{ne(),Ju=(e,t)=>new(gs(t))(e)}),so,pu,oo,jc,uo,Kc,lo,co,po,Zc,jg,N1=U(()=>{ne(),Ir(),so=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),pu=(e,t)=>{if(t==="int32")return e;let r=so.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,a=new(gs(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let s=new Int32Array(n);for(let o=0;o<n;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},oo=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},jc=1,uo=()=>jc++,Kc=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),lo=(e,t)=>{let r=so.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},co=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return lo(this.dataType,this.tensorShape)}destroy(){$e("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=oo(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},po=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=Kc.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);$e("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==lo(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=pu(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else $e("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let i=(t=this.wrapper)!=null&&t.isDataConverted?oo(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(i):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Zc=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=uo();return this.tensorTrackersById.set(e,new po(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){$e("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){$e("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),a=uo(),s=new co({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new po(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,i,n,a,s){let o=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,r)){$e("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let h=this.freeTensors.splice(d,1)[0];return h.sessionId=e,h}$e("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let u=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:n,readable:a});return new co({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},jg=(...e)=>new Zc(...e)}),kn,Xc,Kg,M1=U(()=>{ne(),ki(),Hg(),N1(),Ir(),kn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Xc=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,a)=>n===i[a]&&e[n]===t[n])},Kg=class{constructor(e){this.tensorManager=jg(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Qu(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){$e("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){$e("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)$e("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Xc(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){$e("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let a=kn.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,i,n)}async createTemporaryTensor(e,t,r){$e("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=kn.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!Re().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");$e("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Ju(r,t)}}registerMLTensor(e,t,r,i){let n=kn.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,n,i);return $e("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,i,n,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+r).buffer,p;switch(n.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":if(s){let h=pu(new Uint8Array(d),"int64");p=new Int32Array(h.buffer),n.dataType="int32"}else p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return $e("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(n,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=kn.get(ii(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!(n!=null&&n.input.dataTypes.includes(i)):!!(n!=null&&n.output.dataTypes.includes(i))}flush(){}}}),el=U(()=>{}),fo,Ea,Ca,Yc,Qc,ho,fu,Jc,Zg,D1=U(()=>{Ir(),el(),fo=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ea=[],Ca=e=>Math.ceil(Number(e)/16)*16,Yc=e=>{for(let t=0;t<Ea.length;t++){let r=Ea[t];if(e<=r)return r}return Math.ceil(e/16)*16},Qc=1,ho=()=>Qc++,fu=async(e,t,r,i)=>{let n=Ca(r),a=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,n),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(i){let u=i();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{a.destroy()}},Jc=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of fo)Ea.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,a=Ca(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,i,n)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([d.finish()]),o.destroy(),$e("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Ca(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return $e("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=ho();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),$e("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),$e("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Yc(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||a){let o=(n?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:ho(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),$e("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return $e("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await fu(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=fo.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&($e("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Zg=(...e)=>new Jc(...e)}),ep,Ee,Le=U(()=>{ep=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ee=e=>new ep(e)}),nn,za,He,at,ie,De,hu,Ui,Gr,te,In,D,ee,Xg,tl,tp,Yg,le=U(()=>{ne(),oe(),nn=64,za=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},He=(e,t=1)=>{let r=za(e,t);return typeof r=="string"?r:r[0]},at=(e,t=1)=>{let r=za(e,t);return typeof r=="string"?r:r[1]},ie=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:R.computeStrides(r)})}),t},De=e=>e%4===0?4:e%2===0?2:1,hu=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Ui=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Gr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,te=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,In=(e,t,r,i,n)=>{let a=typeof r=="number",s=a?r:r.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=za(t,n),p=typeof d=="string"?d:d[1],h=typeof d=="string"?d:d[0],f={indices:u,value:p,storage:h,tensor:t},m=W=>typeof W=="string"?W:`${W}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=a?"uniforms.":"",$=`${b}${e}_shape`,v=`${b}${e}_strides`,w="";for(let W=0;W<s-1;W++)w+=`
    let dim${W} = current / ${te(v,W,s)};
    let rest${W} = current % ${te(v,W,s)};
    indices[${W}] = dim${W};
    current = rest${W};
    `;w+=`indices[${s-1}] = current;`;let I=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${w}
    return indices;
  }`,k=W=>(_.offsetToIndices=!0,s<2?W:`o2i_${e}(${W})`),T=[];if(s>=2)for(let W=s-1;W>=0;W--)T.push(`${te(v,W,s)} * (indices[${W}])`);let C=s<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${T.join("+")};
  }`,z=W=>(_.indicesToOffset=!0,s<2?W:`i2o_${e}(${W})`),x=(...W)=>s===0?"0u":`${f.indices}(${W.map(m).join(",")})`,N=(W,H)=>s<2?`${W}`:`${te(W,H,s)}`,P=(W,H,Q)=>s<2?`${W}=${Q};`:`${te(W,H,s)}=${Q};`,F={},j=(W,H)=>{_.broadcastedIndicesToOffset=!0;let Q=`${H.name}broadcastedIndicesTo${e}Offset`;if(Q in F)return`${Q}(${W})`;let G=[];for(let xe=s-1;xe>=0;xe--){let ct=H.indicesGet("outputIndices",xe+H.rank-s);G.push(`${N(v,xe)} * (${ct} % ${N($,xe)})`)}return F[Q]=`fn ${Q}(outputIndices: ${H.type.indices}) -> u32 {
             return ${G.length>0?G.join("+"):"0u"};
           }`,`${Q}(${W})`},Y=(W,H)=>(()=>{if(f.storage===f.value)return`${e}[${W}]=${H};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${W}]=vec2<u32>(u32(${H}), select(0u, 0xFFFFFFFFu, ${H} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${W}]=vec2<u32>(u32(${H}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${W}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${H}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),B=W=>(()=>{if(f.storage===f.value)return`${e}[${W}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${W}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${W}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${W}] & 0xFFu), bool(${e}[${W}] & 0xFF00u), bool(${e}[${W}] & 0xFF0000u), bool(${e}[${W}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),Z=s<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${p} {
    return ${B(`i2o_${e}(indices)`)};
  }`,K=s<2?"":(()=>{let W=o.map(Q=>`d${Q}: u32`).join(", "),H=o.map(Q=>`d${Q}`).join(", ");return`
  fn get_${e}(${W}) -> ${p} {
    return get_${e}ByIndices(${x(H)});
  }`})(),J=(...W)=>{if(W.length!==s)throw new Error(`indices length must be ${s}`);let H=W.map(m).join(",");return s===0?B("0u"):s===1?B(H[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${H})`)},he=W=>s<2?B(W):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${W})`),L=s<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${p}) {
    ${Y(`i2o_${e}(indices)`,"value")}
  }`,de=s<2?"":(()=>{let W=o.map(Q=>`d${Q}: u32`).join(", "),H=o.map(Q=>`d${Q}`).join(", ");return`
  fn set_${e}(${W}, value: ${p}) {
    set_${e}ByIndices(${x(H)}, value);
  }`})();return{impl:()=>{let W=[],H=!1;return _.offsetToIndices&&(W.push(I),H=!0),_.indicesToOffset&&(W.push(C),H=!0),_.broadcastedIndicesToOffset&&(Object.values(F).forEach(Q=>W.push(Q)),H=!0),_.set&&(W.push(de),H=!0),_.setByIndices&&(W.push(L),H=!0),_.get&&(W.push(K),H=!0),_.getByIndices&&(W.push(Z),H=!0),!a&&H&&W.unshift(`const ${$} = ${f.indices}(${r.join(",")});`,`const ${v} = ${f.indices}(${R.computeStrides(r).join(",")});`),W.join(`
`)},type:f,offsetToIndices:k,indicesToOffset:z,broadcastedIndicesToOffset:j,indices:x,indicesGet:N,indicesSet:P,set:(...W)=>{if(W.length!==s+1)throw new Error(`indices length must be ${s}`);let H=W[s];if(typeof H!="string")throw new Error("value must be string");let Q=W.slice(0,s).map(m).join(",");return s===0?Y("0u",H):s===1?Y(Q[0],H):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${Q}, ${H})`)},setByOffset:Y,setByIndices:(W,H)=>s<2?Y(W,H):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${W}, ${H});`),get:J,getByOffset:B,getByIndices:he,usage:i,name:e,strides:v,shape:$,rank:s}},D=(e,t,r,i=1)=>In(e,t,r,"input",i),ee=(e,t,r,i=1)=>In(e,t,r,"output",i),Xg=(e,t,r)=>In(e,t,r,"atomicOutput",1),tl=(e,t,r,i=1)=>In(e,t,r,"internal",i),tp=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=nn){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Yg=(e,t)=>new tp(e,t)}),rp,mo,ip,np,ap,sp,It,Qg,Jg,qr=U(()=>{ne(),oe(),Le(),le(),rp=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},mo=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),ip=(e,t)=>R.sortBasedOnPerm(e,mo(e.length,t)),np=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)n+=`a[${e[a]}]=i[${a}];`;return n+="return a;}"},ap=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},sp=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},It=(e,t)=>{let r=e.dataType,i=e.dims.length,n=mo(i,t),a=ip(e.dims,n),s=e.dims,o=a,u=i<2||sp(n,e.dims),d;if(u)return d=_=>{let b=D("input",r,s,4),$=ee("output",r,o,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,$)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:p,newPerm:h}=ap(e.dims,n),f=R.areEqual(h,[2,3,1]),m=R.areEqual(h,[3,1,2]);if(p.length===2||f||m){s=f?[p[0],p[1]*p[2]]:m?[p[0]*p[1],p[2]]:p,o=[s[1],s[0]];let _=16;return d=b=>{let $=D("a",r,s.length),v=ee("output",r,o.length);return`
  ${b.registerUniform("output_size","u32").declareVariables($,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
  ${b.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${$.getByIndices(`${$.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/_),y:Math.ceil(o[0]/_)},programUniforms:[{type:12,data:b},...ie(s,o)]}},getShaderSource:d}}return d=_=>{let b=D("a",r,s.length),$=ee("output",r,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,$)}

  ${np(n,i,b,$)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ie(s,o)]}},getShaderSource:d}},Qg=(e,t)=>{rp(e.inputs,t.perm),e.compute(It(e.inputs[0],t.perm))},Jg=e=>Ee({perm:e.perm})}),op,up,lp,dp,cp,pp,fp,hp,mp,gp,Ut,e0,t0,r0,i0,n0,a0,s0,o0,u0,l0,P1=U(()=>{ne(),oe(),le(),rl(),qr(),op={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},up={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},lp={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},dp={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},cp=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},pp=(e,t)=>{let r=[],i=e.length;for(let a=0;a<i;a++)t.indexOf(a)===-1&&r.push(e[a]);let n=t.map(a=>e[a]);return[r,n]},fp=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?i.push(e[n++]):i.push(1);return i},hp=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},mp=(e,t)=>{let r=[];if(!hp(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},gp=(e,t,r,i,n,a,s)=>{let o=r[0].dims,u=R.size(a),d=R.size(s),p=D("_A",r[0].dataType,o),h=ee("output",n,a),f=64;u===1&&(f=256);let m=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `,_=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(p,h)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${lp[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${op[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${up[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${i==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${dp[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},Ut=(e,t,r,i)=>{let n=e.inputs.length===1?r:mu(e.inputs,r),a=n.axes;a.length===0&&!n.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,_)=>_));let s=R.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],d=mp(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(It(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=cp(o.length,u.dims.length));let[p,h]=pp(u.dims,o),f=p;n.keepDims&&(f=fp(p,s)),e.compute(gp(t,n.cacheKey,[u],i,e.inputs[0].dataType,f,h),{inputs:[u]})},e0=(e,t)=>{Ut(e,"ReduceMeanShared",t,"mean")},t0=(e,t)=>{Ut(e,"ReduceL1Shared",t,"l1")},r0=(e,t)=>{Ut(e,"ReduceL2Shared",t,"l2")},i0=(e,t)=>{Ut(e,"ReduceLogSumExpShared",t,"logSumExp")},n0=(e,t)=>{Ut(e,"ReduceMaxShared",t,"max")},a0=(e,t)=>{Ut(e,"ReduceMinShared",t,"min")},s0=(e,t)=>{Ut(e,"ReduceProdShared",t,"prod")},o0=(e,t)=>{Ut(e,"ReduceSumShared",t,"sum")},u0=(e,t)=>{Ut(e,"ReduceSumSquareShared",t,"sumSquare")},l0=(e,t)=>{Ut(e,"ReduceLogSumShared",t,"logSum")}}),Lt,_p,os,mu,Wt,yp,bp,vp,wp,$p,xp,Sp,kp,Ip,Tp,Gt,d0,c0,p0,f0,h0,m0,g0,_0,y0,b0,rl=U(()=>{ne(),oe(),Le(),le(),P1(),Lt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},_p=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],os=(e,t,r,i,n,a,s=!1,o=!1)=>{let u=[],d=r[0].dims,p=d.length,h=R.normalizeAxes(n,p),f=!o&&h.length===0;d.forEach((b,$)=>{f||h.indexOf($)>=0?s&&u.push(1):u.push(b)});let m=u.length,_=R.size(u);return{name:e,shaderCache:t,getShaderSource:b=>{let $=[],v=D("_A",r[0].dataType,p),w=ee("output",a,m),I=i(v,w,h),k=I[2];for(let T=0,C=0;T<p;T++)f||h.indexOf(T)>=0?(s&&C++,k=`for(var j${T}: u32 = 0; j${T} < ${d[T]}; j${T}++) {
                  ${I[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${v.indicesSet("input_indices",T,`j${T}`)}
                  ${k}
                }`):($.push(`${v.indicesSet("input_indices",T,w.indicesGet("output_indices",C))};`),C++);return`

        ${b.registerUniform("output_size","u32").declareVariables(v,w)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${$.join(`
`)}
          ${I[0]}       // init ops for reduce max/min
          ${I[1]}
          ${k}
          ${I[3]}
          ${I.length===4?w.setByOffset("global_idx","value"):I.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ie(d,u)]})}},mu=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),Ee({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Wt=(e,t,r,i)=>{let n=e.inputs,a=n.length===1?r:mu(n,r);e.compute(os(t,{hint:a.cacheKey,inputDependencies:["rank"]},[n[0]],a.noopWithEmptyAxes&&a.axes.length===0?_p:i,a.axes,n[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},yp=(e,t)=>{Lt(e.inputs),Wt(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},bp=(e,t)=>{Lt(e.inputs),Wt(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},vp=(e,t)=>{Lt(e.inputs),Wt(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},wp=(e,t)=>{Lt(e.inputs),Wt(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},$p=(e,t)=>{Lt(e.inputs),Wt(e,"ReduceMax",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},xp=(e,t)=>{Lt(e.inputs),Wt(e,"ReduceMean",t,(r,i,n)=>{let a=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},Sp=(e,t)=>{Lt(e.inputs),Wt(e,"ReduceMin",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},kp=(e,t)=>{Lt(e.inputs),Wt(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Ip=(e,t)=>{Lt(e.inputs),Wt(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Tp=(e,t)=>{Lt(e.inputs),Wt(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Gt=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?i*=e[a]:n*=e[a];return n<32&&i>1024},d0=(e,t)=>{Gt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xp(e,t):e0(e,t)},c0=(e,t)=>{Gt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bp(e,t):t0(e,t)},p0=(e,t)=>{Gt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vp(e,t):r0(e,t)},f0=(e,t)=>{Gt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wp(e,t):i0(e,t)},h0=(e,t)=>{Gt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$p(e,t):n0(e,t)},m0=(e,t)=>{Gt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sp(e,t):a0(e,t)},g0=(e,t)=>{Gt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kp(e,t):s0(e,t)},_0=(e,t)=>{Gt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ip(e,t):o0(e,t)},y0=(e,t)=>{Gt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tp(e,t):u0(e,t)},b0=(e,t)=>{Gt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yp(e,t):l0(e,t)}}),go,v0,w0,gu,U1=U(()=>{ne(),Le(),rl(),go=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},v0=(e,t)=>{go(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(os("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},w0=(e,t)=>{go(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(os("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},gu=e=>Ee(e)}),Ep,Aa,Cp,zp,Ap,Xn,Op,$0,il=U(()=>{ne(),oe(),el(),le(),Ep=(e,t)=>{let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],d=r.dims[1],p=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=n.dims[0]/3,f=h,m=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let _=d;if(h!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==h+f+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(s){if(f!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=s.dims[3])}let $=_+b,v=-1,w=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:$,maxSequenceLength:v,inputHiddenSize:p,hiddenSize:h,vHiddenSize:m,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Aa=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Cp=(e,t,r,i,n,a,s,o)=>{let u=De(s?1:a),d=64,p=a/u;p<d&&(d=32);let h=Math.ceil(a/u/d),f=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:p},{type:12,data:h}],m=He(e.dataType,u),_=at(1,u),b=["type"];s&&b.push("type"),o&&b.push("type");let $=v=>{let w=ee("x",e.dataType,e.dims,u),I=[w],k=s?D("seq_lens",s.dataType,s.dims):void 0;k&&I.push(k);let T=o?D("total_sequence_length_input",o.dataType,o.dims):void 0;T&&I.push(T);let C=at(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(z).declareVariables(...I)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Aa(k,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${C}(1.0) / ${C}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${C}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${m};${u}`,inputDependencies:b},getShaderSource:$,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:f})}},zp=(e,t,r,i,n,a,s,o,u)=>{let d=s+a.kvSequenceLength,p=[a.batchSize,a.numHeads,a.sequenceLength,d],h=e>1&&i,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=h?[a.batchSize,f,d,a.headSize]:void 0,_=a.nReps?a.nReps:1,b=a.scale===0?1/Math.sqrt(a.headSize):a.scale,$=De(a.headSize),v=a.headSize/$,w=12,I={x:Math.ceil(d/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},k=[{type:12,data:a.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:b},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:_}],T=h&&i&&R.size(i.dims)>0,C=["type","type"];T&&C.push("type"),n&&C.push("type"),o&&C.push("type"),u&&C.push("type");let z=[{dims:p,dataType:t.dataType,gpuDataType:0}];h&&z.push({dims:m,dataType:t.dataType,gpuDataType:0});let x=N=>{let P=D("q",t.dataType,t.dims,$),F=D("key",r.dataType,r.dims,$),j=[P,F];if(T){let L=D("past_key",i.dataType,i.dims,$);j.push(L)}n&&j.push(D("attention_bias",n.dataType,n.dims));let Y=o?D("seq_lens",o.dataType,o.dims):void 0;Y&&j.push(Y);let B=u?D("total_sequence_length_input",u.dataType,u.dims):void 0;B&&j.push(B);let Z=ee("output",t.dataType,p),K=[Z];h&&K.push(ee("present_key",t.dataType,m,$));let J=at(1,$),he=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${P.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${P.type.storage}, ${w*w}>;
  ${N.registerUniforms(he).declareVariables(...j,...K)}
  ${N.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Aa(Y,B,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${J}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${J}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch($){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${$}`)}})()};
        output[outputIdx] = ${Z.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${$};${n!==void 0};${i!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:z,dispatchGroup:I,programUniforms:k}),getShaderSource:x}},Ap=(e,t,r,i,n,a,s=void 0,o=void 0)=>{let u=a+n.kvSequenceLength,d=n.nReps?n.nReps:1,p=n.vHiddenSize*d,h=e>1&&i,f=n.kvNumHeads?n.kvNumHeads:n.numHeads,m=h?[n.batchSize,f,u,n.headSize]:void 0,_=[n.batchSize,n.sequenceLength,p],b=12,$={x:Math.ceil(n.vHeadSize/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},v=[{type:12,data:n.sequenceLength},{type:12,data:u},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:p},{type:12,data:a},{type:12,data:n.kvSequenceLength},{type:12,data:d}],w=h&&i&&R.size(i.dims)>0,I=["type","type"];w&&I.push("type"),s&&I.push("type"),o&&I.push("type");let k=[{dims:_,dataType:t.dataType,gpuDataType:0}];h&&k.push({dims:m,dataType:t.dataType,gpuDataType:0});let T=C=>{let z=D("probs",t.dataType,t.dims),x=D("v",r.dataType,r.dims),N=[z,x];w&&N.push(D("past_value",i.dataType,i.dims));let P=s?D("seq_lens",s.dataType,s.dims):void 0;s&&N.push(P);let F=o?D("total_sequence_length_input",o.dataType,o.dims):void 0;o&&N.push(F);let j=[ee("output",t.dataType,_)];h&&j.push(ee("present_value",t.dataType,m));let Y=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${z.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${z.type.value}, ${b*b}>;
  ${C.registerUniforms(Y).declareVariables(...N,...j)}
  ${C.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Aa(P,F,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:k,dispatchGroup:$,programUniforms:v}),getShaderSource:T}},Xn=(e,t,r,i,n,a,s,o,u,d,p=void 0,h=void 0)=>{let f=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),m=f>1?s:void 0,_=f>1?o:void 0,b=f>1?d.pastSequenceLength:0,$=b+d.kvSequenceLength,v=u&&R.size(u.dims)>0?u:void 0,w=[t,r];m&&R.size(m.dims)>0&&w.push(m),v&&w.push(v),p&&w.push(p),h&&w.push(h);let I=e.compute(zp(f,t,r,m,v,d,b,p,h),{inputs:w,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Cp(I,d.batchSize,d.numHeads,b,d.sequenceLength,$,p,h),{inputs:p&&h?[I,p,h]:[I],outputs:[]});let k=[I,i];_&&R.size(_.dims)>0&&k.push(_),p&&k.push(p),h&&k.push(h),e.compute(Ap(f,I,i,_,d,b,p,h),{inputs:k,outputs:f>1?[0,2]:[0]})},Op=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=h=>{let f=ee("output_q",u[0].dataType,r),m=ee("output_k",u[0].dataType,r),_=ee("output_v",u[0].dataType,r),b=D("input",u[0].dataType,u[0].dims),$=D("weight",u[1].dataType,u[1].dims),v=D("bias",u[2].dataType,u[2].dims),w=b.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${h.registerUniforms(I).declareVariables(b,$,v,f,m,_)}
  ${h.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:p},{inputs:u,outputs:[-1,-1,-1]})},$0=(e,t)=>{let r=Ep(e.inputs,t),[i,n,a]=Op(e,r);return Xn(e,i,n,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Bp,Rp,Np,x0,L1=U(()=>{Mt(),ne(),oe(),Le(),le(),Bp=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,a)=>{let s=n.length;if(s!==i.length)throw new Error(`${a}: num dimensions != ${s}`);n.forEach((o,u)=>{if(o!==i[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Rp=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,a=e[0].dims,s=i?De(a[a.length-1]):1,o=n==="NHWC"&&a.length>1?s:1,u=R.size(a)/s,d=i,p=d?a.length:a,h=D("x",e[0].dataType,e[0].dims,s),f=D("scale",e[1].dataType,e[1].dims,o),m=D("bias",e[2].dataType,e[2].dims,o),_=D("inputMean",e[3].dataType,e[3].dims,o),b=D("inputVar",e[4].dataType,e[4].dims,o),$=ee("y",e[0].dataType,p,s),v=()=>{let I="";if(i)I=`let cOffset = ${a.length===1?"0u":n==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")I=`
            ${$.indicesSet("outputIndices","0","0")}
            let cOffset = ${$.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let k=1;k<f.rank;k++)I+=`cIndices[${k}] = outputIndices[${k}];`;I+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return I},w=I=>`
  const epsilon = ${r};
  ${I.registerUniform("outputSize","u32").declareVariables(h,f,m,_,b,$)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${$.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${$.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...ie(a)]:[{type:12,data:u}]})}},Np=e=>Ee(e),x0=(e,t)=>{let{inputs:r,outputCount:i}=e,n=Np({...t,outputCount:i});if(ke.webgpu.validateInputContent&&Bp(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Rp(r,n))}}),Mp,Dp,S0,W1=U(()=>{oe(),le(),Mp=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Dp=e=>{let t=e[0].dims,r=e[0].dims[2],i=R.size(t)/4,n=e[0].dataType,a=D("input",n,t,4),s=D("bias",n,[r],4),o=D("residual",n,t,4),u=ee("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(a,s,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},S0=e=>{Mp(e.inputs),e.compute(Dp(e.inputs))}}),Pp,Te,k0,I0,T0,E0,C0,z0,A0,O0,B0,Up,R0,N0,M0,D0,Wn,P0,Za,U0,L0,W0,G0,q0,V0,F0,H0,j0,K0,Z0,X0,Y0,Q0,J0,e_,_o,t_,_u,yu,r_,i_,n_,Lp,Wp,a_,nl=U(()=>{ne(),oe(),Le(),le(),Pp=(e,t,r,i,n,a,s)=>{let o=Math.ceil(t/4),u="";typeof n=="string"?u=`${n}(a)`:u=n("a");let d=D("inputData",r,[o],4),p=ee("outputData",i,[o],4),h=[{name:"vec_size",type:"u32"}];return s&&h.push(...s),`
      ${e.registerUniforms(h).declareVariables(d,p)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",u)}
  }`},Te=(e,t,r,i,n,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(R.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>Pp(d,R.size(e.dims),e.dataType,a,r,i,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(R.size(d[0].dims)/64/4)},programUniforms:u})}},k0=e=>{e.compute(Te(e.inputs[0],"Abs","abs"))},I0=e=>{e.compute(Te(e.inputs[0],"Acos","acos"))},T0=e=>{e.compute(Te(e.inputs[0],"Acosh","acosh"))},E0=e=>{e.compute(Te(e.inputs[0],"Asin","asin"))},C0=e=>{e.compute(Te(e.inputs[0],"Asinh","asinh"))},z0=e=>{e.compute(Te(e.inputs[0],"Atan","atan"))},A0=e=>{e.compute(Te(e.inputs[0],"Atanh","atanh"))},O0=e=>Ee(e),B0=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Te(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Up=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ee({min:t,max:r})},R0=(e,t)=>{let r=t||Up(e.inputs),i=at(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},N0=e=>{e.compute(Te(e.inputs[0],"Ceil","ceil"))},M0=e=>{e.compute(Te(e.inputs[0],"Cos","cos"))},D0=e=>{e.compute(Te(e.inputs[0],"Cosh","cosh"))},Wn=e=>Ee(e),P0=(e,t)=>{let r=at(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Za=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,U0=e=>{let t=at(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Za(t)))},L0=e=>{e.compute(Te(e.inputs[0],"Exp","exp"))},W0=e=>{e.compute(Te(e.inputs[0],"Floor","floor"))},G0=e=>{let t=at(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Za(t)))},q0=(e,t)=>{let r=at(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},V0=e=>{e.compute(Te(e.inputs[0],"Not",t=>`!${t}`))},F0=e=>{e.compute(Te(e.inputs[0],"Neg",t=>`-${t}`))},H0=e=>{e.compute(Te(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},j0=e=>{let t=at(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},K0=e=>{e.compute(Te(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Z0=e=>Ee(e),X0=(e,t)=>{let r=at(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Y0=e=>{e.compute(Te(e.inputs[0],"Sin","sin"))},Q0=e=>{e.compute(Te(e.inputs[0],"Sinh","sinh"))},J0=e=>{e.compute(Te(e.inputs[0],"Sqrt","sqrt"))},e_=e=>{e.compute(Te(e.inputs[0],"Tan","tan"))},_o=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,t_=e=>{e.compute(Te(e.inputs[0],"Tanh",_o))},_u=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${_o("v")};
}
`,yu=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,r_=e=>{let t=at(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"FastGelu",yu,_u(t),void 0,e.inputs[0].dataType))},i_=(e,t)=>{let r=at(e.inputs[0].dataType);return e.compute(Te(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},n_=e=>{e.compute(Te(e.inputs[0],"Log","log"))},Lp=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Wp=e=>`quick_gelu_impl(${e})`,a_=(e,t)=>{let r=at(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"QuickGelu",Wp,Lp(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Gp,qp,s_,G1=U(()=>{oe(),le(),nl(),Gp=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},qp=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=D("input",e[0].dataType,e[0].dims,4),i=D("bias",e[0].dataType,[e[0].dims[2]],4),n=ee("output",e[0].dataType,t,4),a=R.size(t)/4,s=He(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,n)}

  ${Za(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},s_=e=>{Gp(e.inputs),e.compute(qp(e.inputs))}}),Vp,Fp,qt,o_,u_,l_,d_,c_,p_,f_,h_,m_,g_,q1=U(()=>{ne(),oe(),le(),Vp=(e,t,r,i,n,a,s,o,u,d,p,h)=>{let f,m;typeof o=="string"?f=m=(w,I)=>`${o}((${w}),(${I}))`:typeof o=="function"?f=m=o:(f=o.scalar,m=o.vector);let _=ee("outputData",p,i.length,4),b=D("aData",u,t.length,4),$=D("bData",d,r.length,4),v;if(n)if(a){let w=R.size(t)===1,I=R.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,T=r.length>0&&r[r.length-1]%4===0;w||I?v=_.setByOffset("global_idx",m(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),I?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${$.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",m(s||k?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||T?$.getByOffset("offsetB / 4u"):`${$.type.value}(${$.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",m(b.getByOffset("global_idx"),$.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(I,k,T="")=>{let C=`aData[indexA${k}][componentA${k}]`,z=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${_.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${b.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let offsetB${k} = ${$.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${I}[${k}] = ${T}(${f(C,z)});
          `};p===9?v=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,$,_)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Fp=(e,t,r,i,n,a,s=r.dataType)=>{let o=r.dims.map(Number),u=i.dims.map(Number),d=!R.areEqual(o,u),p=o,h=R.size(o),f=!1,m=!1,_=[d];if(d){let b=rn.calcShape(o,u,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");p=b.slice(),h=R.size(p);let $=R.size(o)===1,v=R.size(u)===1,w=o.length>0&&o[o.length-1]%4===0,I=u.length>0&&u[u.length-1]%4===0;_.push($),_.push(v),_.push(w),_.push(I);let k=1;for(let T=1;T<p.length;T++){let C=o[o.length-T],z=u[u.length-T];if(C===z)k*=C;else break}k%4===0?(m=!0,f=!0):($||v||w||I)&&(f=!0)}else f=!0;return _.push(f),{name:e,shaderCache:{hint:t+_.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>Vp(b,o,u,p,f,d,m,n,r.dataType,i.dataType,s,a),getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(R.size(p)/4)},...ie(o,u,p)]})}},qt=(e,t,r,i,n,a)=>{e.compute(Fp(t,n??"",e.inputs[0],e.inputs[1],r,i,a))},o_=e=>{qt(e,"Add",(t,r)=>`${t}+${r}`)},u_=e=>{qt(e,"Div",(t,r)=>`${t}/${r}`)},l_=e=>{qt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},d_=e=>{qt(e,"Mul",(t,r)=>`${t}*${r}`)},c_=e=>{let t=D("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;qt(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},p_=e=>{qt(e,"Sub",(t,r)=>`${t}-${r}`)},f_=e=>{qt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},h_=e=>{qt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},m_=e=>{qt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},g_=e=>{qt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Hp,jp,Kp,Zp,__,y_,V1=U(()=>{ne(),oe(),Le(),le(),Hp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,a=i.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,d)=>{if(d!==t&&u!==i.dims[d])throw new Error("non concat dimensions must match")})}})},jp=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Kp=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let a=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(a):n===0?i.push(`if (inputIndex == ${n}u) { ${a} }`):n===r-1?i.push(`else { ${a} }`):i.push(`else if (inputIndex == ${n}) { ${a} }`)}return i.join(`
`)},Zp=(e,t,r,i)=>{let n=R.size(r),a=new Array(e.length),s=new Array(e.length),o=0,u=[],d=[],p=[{type:12,data:n}];for(let b=0;b<e.length;++b)o+=e[b].dims[t],a[b]=o,d.push(e[b].dims.length),s[b]=D(`input${b}`,i,d[b]),u.push("rank"),p.push({type:12,data:a[b]});for(let b=0;b<e.length;++b)p.push(...ie(e[b].dims));p.push(...ie(r));let h=ee("output",i,r.length),f=h.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),_=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let $=0;$<e.length;$++)b.registerUniform(`sizeInConcatAxis${$}`,"u32");return b.declareVariables(...s,h)})()}

  ${jp(a.length,m)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Kp(s,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}),getShaderSource:_}},__=(e,t)=>{let r=e.inputs,i=r[0].dims,n=R.normalizeAxis(t.axis,i.length);Hp(r,n);let a=i.slice();a[n]=r.reduce((o,u)=>o+(u.dims.length>n?u.dims[n]:0),0);let s=r.filter(o=>R.size(o.dims)>0);e.compute(Zp(s,n,a,r[0].dataType),{inputs:s})},y_=e=>Ee({axis:e.axis})}),$i,xi,Si,al,Ii=U(()=>{ne(),oe(),$i=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},xi=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Si=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},al=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[Vg,Fg];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Xe,b_,sl=U(()=>{Xe=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},b_=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),v_,F1=U(()=>{v_=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Hn,ol,ul=U(()=>{ne(),oe(),le(),Ii(),Hn=(e,t,r,i,n)=>{let a=i-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${te(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,te(n,o+a,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},ol=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],d=o[o.length-1],p=s[s.length-1],h=De(d),f=De(p),m=De(u),_=R.size(r)/h/m,b=e.length>2,$=i?i.slice(0,-2):r.slice(0,-2),v=[R.size($),u,d],w=[{type:12,data:_},{type:12,data:u},{type:12,data:d},{type:12,data:p}];xi(t,w),w.push(...ie($,s,o)),b&&w.push(...ie(e[2].dims)),w.push(...ie(v));let I=k=>{let T=tl("batch_dims",e[0].dataType,$.length),C=D("a",e[0].dataType,s.length,f),z=D("b",e[1].dataType,o.length,h),x=ee("output",e[0].dataType,v.length,h),N=He(x.type.tensor),P=$i(t,x.type.value,N),F=[C,z],j="";if(b){let Z=n?h:1;F.push(D("bias",e[2].dataType,e[2].dims.length,Z)),j=`${n?`value += bias[col / ${Z}];`:`value += ${x.type.value}(bias[row + i]);`}`}let Y=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Si(t,Y);let B=()=>{let Z=`var a_data: ${C.type.value};`;for(let K=0;K<f;K++)Z+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${h}];`;for(let K=0;K<m;K++){Z+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${f}];`;for(let J=0;J<f;J++)Z+=`
            values[${K}] = fma(${z.type.value}(a_data${f===1?"":`[${J}]`}), b_data${J}, values[${K}]);
`}return Z};return`
  ${k.registerUniforms(Y).registerInternalVariables(T).declareVariables(...F,x)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${C.type.indices};
    ${Hn("a_indices",C,C.rank-2,T.rank,"batch_indices")}
    ${C.indicesSet("a_indices",C.rank-2,0)}
    ${C.indicesSet("a_indices",C.rank-1,0)}
    let a_offset = ${C.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${Hn("b_indices",z,z.rank-2,T.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${x.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${B()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${j}
      ${P}
      let cur_indices = ${x.type.indices}(batch, row + i, col);
      let offset = ${x.indicesToOffset("cur_indices")};
      ${x.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${f};${m};${n}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:I}}}),Xp,Yp,bu,yo,Qp,vu,Jp,us,ll=U(()=>{ne(),oe(),le(),Ii(),ul(),sl(),Xp=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Yp=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,bu=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],p=n?u:a,h=n?a:u,f=p/t[0],m=a/t[1];if(!((n&&f===4&&e[1]===4||!n&&(f===3||f===4))&&p%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${r}>, ${p/f}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Xp(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Yp(n,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},yo=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Qp=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",vu=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32,u=!1)=>{let d=e[1]*t[1],p=e[0]*t[0],h=n?d:a,f=n?a:d;if(!(f%t[1]===0&&h%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=f/t[1],_=h/t[0],b=a/t[1],$=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${yo(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${m};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${yo(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Qp(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${p}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${$}
  }
`},Jp=(e,t,r,i,n=!1)=>{let[a,s,o,u]=i,d=He(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Xe(e,d)} {
      var value = ${Xe(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Hn("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Xe(e,d)} {
      var value = ${Xe(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Hn("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Xe(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Xe(e,d)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},us=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),d=o.slice(0,-2),p=i?i.slice(0,-2):r.slice(0,-2),h=R.size(p),f=s[s.length-2],m=s[s.length-1],_=o[o.length-1],b=m%4===0&&_%4===0,$=f<=8?[4,1,1]:[4,4,1],v=[8,8,1],w=[Math.ceil(_/v[0]/$[0]),Math.ceil(f/v[1]/$[1]),Math.ceil(h/v[2]/$[2])],I=b?4:1,k=[...u,f,m/I],T=k.length,C=[...d,m,_/I],z=C.length,x=[h,f,_/I],N=[{type:6,data:f},{type:6,data:_},{type:6,data:m}];xi(t,N),N.push(...ie(p,k,C));let P=["rank","rank"],F=e.length>2;F&&(N.push(...ie(e[2].dims)),P.push("rank")),N.push(...ie(x));let j=Y=>{let B=p.length,Z=tl("batchDims",e[0].dataType,B,1),K=He(e[0].dataType),J=D("a",e[0].dataType,T,I),he=D("b",e[1].dataType,z,I),L=ee("result",e[0].dataType,x.length,I),de=[J,he];if(F){let xe=n?I:1;de.push(D("bias",e[2].dataType,e[2].dims.length,xe))}let W=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Si(t,W);let H=He(L.type.tensor),Q=$i(t,L.type.value,H),G=Jp(I,F,Q,[Z,J,he,L],n);return`
  ${Y.registerUniforms(W).registerInternalVariables(Z).declareVariables(...de,L)}
  ${G}
  ${b?bu($,v,K,Z):vu($,v,K,Z)}
                   `};return{name:"MatMul",shaderCache:{hint:`${$};${t.activation};${b};${n}`,inputDependencies:P},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:N}),getShaderSource:j}}}),ef,w_,H1=U(()=>{ne(),Ir(),le(),Ii(),sl(),F1(),ll(),ef=(e,t,r,i,n=!1,a,s=4,o=4,u=4,d="f32")=>{let p=N=>{switch(N){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},h=N=>{switch(N){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,m=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",$=e?"row":"col",v=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${$} / outWidth;
    let outCol = ${$} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Xe(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${b}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(s)}
    }
    return resData;`,I=e?t&&i?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Xe(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Xe(s,d)}(0.0);`,k=e?i&&r?h(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(o)}
    }
    return ${Xe(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(o)}
    }
    return ${Xe(o,d)}(0.0);`,T=Xe(u,d),C=Xe(e?s:o,d),z=Xe(e?o:s,d),x=$i(a,T,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?I:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?k:I}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${b_(n)}
      ${x}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},w_=(e,t,r,i,n,a,s,o,u)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],h=r[0],f=d?r[2]:r[3],m=d?r[1]:r[2],_=d?r[3]:r[1],b=d&&(p%4===0||p%3===0)&&_%4===0,$=d?_:f*m,v=d?f*m:_,w=[8,8,1],I=i<=8?[4,1,1]:[4,4,1],k=[Math.ceil($/w[0]/I[0]),Math.ceil(v/w[1]/I[1]),Math.ceil(h/w[2]/I[2])];$e("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let T=b?d&&p%4!==0?3:4:1,C=w[1]*I[1],z=w[0]*I[0],x=Math.max(w[0]*T,w[1]),N=i%C===0,P=n%z===0,F=a%x===0,j=b?[T,4,4]:[1,1,1],Y=[{type:6,data:i},{type:6,data:n},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];xi(t,Y),Y.push(...ie(e[0].dims,e[1].dims));let B=["rank","rank"];s&&(Y.push(...ie(e[2].dims)),B.push("rank")),Y.push(...ie(r));let Z=K=>{let J=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Si(t,J);let he=b?4:1,L=He(e[0].dataType),de=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${L}>`:L}) {
        result[flatIndex] = ${b?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,W=D("x",e[0].dataType,e[0].dims.length,T===3?1:T),H=D("w",e[1].dataType,e[1].dims.length,he),Q=[W,H],G=ee("result",e[0].dataType,r.length,he);if(s){let xe=D("bias",e[2].dataType,e[2].dims.length,he);Q.push(xe),de+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${L}>`:L} {
          return bias[coords.${d?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${v_("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(J).declareVariables(...Q,G)}
        ${de}
        ${ef(d,N,P,F,s,t,j[0],j[1],j[2],L)}
        ${b?bu(I,w,L,void 0,!d,x):vu(I,w,L,void 0,!d,x,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${b};${N};${P};${F};${C};${z};${x}`,inputDependencies:B},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:Y}),getShaderSource:Z}}}),tf,bo,Tn,rf,vo,nf,$_,x_,j1=U(()=>{ne(),Ir(),oe(),le(),Ii(),sl(),tf=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},bo=e=>typeof e=="number"?[e,e,e]:e,Tn=(e,t)=>t<=1?e:e+(e-1)*(t-1),rf=(e,t,r,i=1)=>{let n=Tn(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},vo=(e,t,r,i,n)=>{n==null&&(n=rf(e,t[0],i[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*n)/i[s]+1));return a},nf=(e,t,r,i,n,a,s,o,u,d)=>{let p,h,f,m;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=vo([t,r,i,1],[o,u,d],1,[n,a,s],e);h=_[0],f=_[1],m=_[2]}else if(Array.isArray(e)){if(!e.every((b,$,v)=>b===v[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=vo([t,r,i,1],[o,u,d],1,[n,a,s],e[0]);h=_[0],f=_[1],m=_[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/n),f=Math.ceil(r/a),m=Math.ceil(i/s);let _=(h-1)*n+o-t,b=(f-1)*a+u-r,$=(m-1)*s+d-i,v=Math.floor(_/2),w=_-v,I=Math.floor(b/2),k=b-I,T=Math.floor($/2),C=$-T;p={top:I,bottom:k,left:T,right:C,front:v,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:h,outHeight:f,outWidth:m}},$_=(e,t,r,i,n,a=!1,s="channelsLast")=>{let o,u,d,p,h;if(s==="channelsLast")[o,u,d,p,h]=e;else if(s==="channelsFirst")[o,h,u,d,p]=e;else throw new Error(`Unknown dataFormat ${s}`);let[f,,m,_,b]=t,[$,v,w]=bo(r),[I,k,T]=bo(i),C=Tn(m,I),z=Tn(_,k),x=Tn(b,T),{padInfo:N,outDepth:P,outHeight:F,outWidth:j}=nf(n,u,d,p,$,v,w,C,z,x),Y=a?f*h:f,B=[0,0,0,0,0];return s==="channelsFirst"?B=[o,Y,P,F,j]:s==="channelsLast"&&(B=[o,P,F,j,Y]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:d,inWidth:p,inChannels:h,outDepth:P,outHeight:F,outWidth:j,outChannels:Y,padInfo:N,strideDepth:$,strideHeight:v,strideWidth:w,filterDepth:m,filterHeight:_,filterWidth:b,effectiveFilterDepth:C,effectiveFilterHeight:z,effectiveFilterWidth:x,dilationDepth:I,dilationHeight:k,dilationWidth:T,inShape:e,outShape:B,filterShape:t}},x_=(e,t,r,i,n,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:r.map(($,v)=>v)},d=[Math.ceil(tf(u.x.map($=>r[$]))/o[0]),1,1];$e("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let p=1,h=R.size(r),f=[{type:12,data:h},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];xi(t,f),f.push(...ie(e[0].dims,e[1].dims));let m=["rank","rank"],_=e.length===3;_&&(f.push(...ie(e[2].dims)),m.push("rank")),f.push(...ie(r));let b=$=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Si(t,v);let w=1,I=He(e[0].dataType),k=D("x",e[0].dataType,e[0].dims.length,p),T=D("W",e[1].dataType,e[1].dims.length,w),C=[k,T],z=ee("result",e[0].dataType,r.length,w),x="";if(_){let F=D("bias",e[2].dataType,e[2].dims.length,w);C.push(F),x+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${I} {
          return bias[${s?te("coords",4,5):te("coords",1,5)}];
        }`}let N=Xe(p,I),P=$i(t,N,I);return`
            ${x}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${$.registerUniforms(v).declareVariables(...C,z)}
          ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${z.offsetToIndices("global_idx")};
              let batch = ${te("coords",0,k.rank)};
              let d2 = ${s?te("coords",k.rank-1,k.rank):te("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${s?te("coords",1,k.rank):te("coords",2,k.rank)},
              ${s?te("coords",2,k.rank):te("coords",3,k.rank)},
              ${s?te("coords",3,k.rank):te("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?te("uniforms.x_shape",1,k.rank):te("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${s?te("uniforms.x_shape",2,k.rank):te("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${s?te("uniforms.x_shape",3,k.rank):te("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${s?te("uniforms.x_shape",4,k.rank):te("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${P}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${p};${_}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:f}),getShaderSource:b}}}),S_,k_,K1=U(()=>{ne(),oe(),le(),Ii(),S_=(e,t,r,i)=>{let n=e.length>2,a=n?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?r[3]:r[1],p=d/t.group,h=u&&p>=4?De(d):1,f=R.size(r)/h,m=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];xi(t,m),m.push(...ie(s,[o[0],o[1],o[2],o[3]/h]));let _=n?["rank","rank","rank"]:["rank","rank"];m.push(...ie([r[0],r[1],r[2],r[3]/h]));let b=$=>{let v=ee("output",e[0].dataType,r.length,h),w=He(v.type.tensor),I=$i(t,v.type.value,w),k=D("x",e[0].dataType,s.length),T=D("w",e[1].dataType,o.length,h),C=[k,T];n&&C.push(D("b",e[2].dataType,e[2].dims,h));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Si(t,z);let x=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${T.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${T.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${$.registerUniforms(z).declareVariables(...C,v)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${x}
    ${a}
    ${I}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:b}},k_=(e,t,r,i)=>{let n=e.length>2,a=De(r[3]),s=De(r[2]),o=R.size(r)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],p=[r[0],r[1],r[2],r[3]/a],h=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];xi(t,h),h.push(...ie(u,d,p));let f=(s-1)*t.strides[1]+d[1],m=_=>{let b=ee("output",e[0].dataType,p.length,a),$=He(b.type.tensor),v=$i(t,b.type.value,$),w=D("x",e[0].dataType,u.length,a),I=D("w",e[1].dataType,d.length,a),k=[w,I];n&&k.push(D("b",e[2].dataType,e[2].dims,a));let T=n?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Si(t,C),`
  ${_.registerUniforms(C).declareVariables(...k,b)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${f}>;
    var values: array<${b.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${I.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${T}
      ${v}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${f};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:h}),getShaderSource:m}}}),af,Oa,sf,Ba,wu,wo,of,uf,$u,Z1=U(()=>{oe(),H1(),j1(),ll(),K1(),Ii(),ul(),qr(),af=(e,t,r,i,n,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,d=t[0],p=t.slice(2).map((f,m)=>f+(f-1)*(r[m]-1)),h=o.map((f,m)=>f+i[m]+i[m+u]).map((f,m)=>Math.floor((f-p[m]+n[m])/n[m]));return h.splice(0,0,s),h.splice(a?3:1,0,d),h},Oa=[2,3,1,0],sf=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Ba=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let i=e.pads.slice();ss.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},wu=e=>{let t=al(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},wo=(e,t,r,i)=>{let n=r.format==="NHWC",a=af(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let C=[t[0]];if(n){let z=e.kernelCustomData.wT??e.compute(It(t[1],Oa),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),C.push(z)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(k_(C,r,a,i),{inputs:C}):e.compute(S_(C,r,a,i),{inputs:C});return}let s=t.length===3,o=t[0].dims[n?1:2],u=t[0].dims[n?2:3],d=t[0].dims[n?3:1],p=t[1].dims[2],h=t[1].dims[3],f=a[n?1:2],m=a[n?2:3],_=a[n?3:1],b=n&&p===o&&h===u&&r.pads[0]===0&&r.pads[1]===0;if(b||p===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let C=a[0],z,x,N,P=[];if(n){let Y=e.kernelCustomData.wT??e.compute(It(t[1],Oa),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Y),b){let B=o*u*d;z=t[0].reshape([1,C,B]),x=Y.reshape([1,B,_]),N=[1,C,_]}else z=t[0].reshape([C,o*u,d]),x=Y.reshape([1,d,_]),N=[C,f*m,_];P.push(z),P.push(x)}else z=t[0].reshape([C,d,o*u]),x=t[1].reshape([1,_,d]),N=[C,_,f*m],P.push(x),P.push(z);s&&P.push(t[2]);let F=N[2],j=P[0].dims[P[0].dims.length-1];F<8&&j<8?e.compute(ol(P,r,a,N,n,i),{inputs:P}):e.compute(us(P,r,a,N,n,i),{inputs:P});return}let $=!0,v=e.kernelCustomData.wT??e.compute(It(t[1],Oa),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let w=[t[0],v];s&&w.push(t[2]);let I=n?f*m:_,k=n?_:f*m,T=p*h*d;e.compute(w_(w,r,a,I,k,T,s,$,i),{inputs:w})},of=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Ba({...t,pads:n,strides:a,dilations:s,kernelShape:o},i);wo(e,i,u,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},uf=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Ba(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=$_(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,i);e.compute(x_(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},$u=(e,t)=>{if(sf(e.inputs,t),e.inputs[0].dims.length===3)of(e,t);else if(e.inputs[0].dims.length===5)uf(e,e.inputs,t);else{let r=Ba(t,e.inputs);wo(e,e.inputs,r)}}}),I_,X1=U(()=>{ne(),Ir(),oe(),le(),I_=(e,t,r)=>{let i=e.length>2,n=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,d=o[3],p=a?De(u):1,h=a&&d===1&&u>=4,f=h?Math.floor(u/4)*4:Math.floor(u/p)*p,m=u-f,_=a?De(d):1,b=a?d===1?p:_:1,$=R.size(n)/_,v=[Math.ceil($/64),1,1];$e("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let w=["rank","rank"],I=[t.strides[0],t.strides[1]],k=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],T=[t.dilations[0],t.dilations[1]],C=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],z=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:$},{type:12,data:I},{type:12,data:k},{type:12,data:T},{type:12,data:C},{type:6,data:z},{type:12,data:f},{type:12,data:u},{type:12,data:d},...ie(e[0].dims,e[1].dims)];i&&(x.push(...ie(e[2].dims)),w.push("rank")),x.push(...ie(n));let N=P=>{let F=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:z.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],j=He(e[0].dataType),Y=a?1:2,B=a?2:3,Z=a?3:1,K=D("W",e[1].dataType,e[1].dims.length,b),J=D("Dy",e[0].dataType,e[0].dims.length,p),he=[J,K];i&&he.push(D("bias",e[2].dataType,[n[Z]].length,_));let L=ee("result",e[0].dataType,n.length,_),de=()=>{let Q="";if(h)p===4?Q+=`
        let xValue = ${J.getByOffset("x_offset")};
        let wValue = ${K.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?Q+=`
          dotProd = dotProd + dot(vec4<${j}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}), vec4<${j}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(Q+=`
          dotProd = dotProd + dot(vec4<${j}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}, ${J.getByOffset("x_offset + 2u")}, ${J.getByOffset("x_offset + 3u")}), vec4<${j}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}, ${K.getByOffset("w_offset + 2u")}, ${K.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Q+=`
                  let xValue = ${a?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):J.get("batch","inputChannel","idyR","idyC")};
        `,p===1)Q+=`
          let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${K.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let G=0;G<p;G++)Q+=`
            let wValue${G} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${G}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${G}] * wValue${G};`;return Q},W=()=>{if(m===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let Q="";if(p===1){Q+="dotProd = dotProd";for(let G=0;G<m;G++)Q+=`
            + ${J.getByOffset(`x_offset + ${G}`)} * ${K.getByOffset(`w_offset + ${G}`)}`;Q+=";"}else if(p===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);Q+=`
          let xValue = ${J.getByOffset("x_offset")};
          let wValue = ${K.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Q},H=`
            let outputIndices = ${L.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${L.indicesGet("outputIndices",0)};
            let d1 = ${L.indicesGet("outputIndices",Z)};
            let r = ${L.indicesGet("outputIndices",Y)};
            let c = ${L.indicesGet("outputIndices",B)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${L.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${j}(dyRCorner) + ${j}(wR)) / ${j}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${j}(uniforms.Dy_shape[${Y}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${j}(dyCCorner) + ${j}(wC)) / ${j}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${j}(uniforms.Dy_shape[${B}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${K.indicesToOffset(`${K.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:p}) {
                  ${de()}
                  inputChannel = inputChannel + ${h?4:p};
                }
                ${W()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${L.setByOffset("global_idx","value")};
          `;return`
    ${P.registerUniforms(F).declareVariables(...he,L)}
      ${P.mainStart()}
      ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${H}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${b}${_}${h}${m}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:N}}}),lf,df,cf,$o,T_,pf,xo,ff,E_,Y1=U(()=>{X1(),Ii(),qr(),lf=(e,t,r,i,n,a)=>(e-1)*t+r+(i-1)*n+1-a,df=(e,t,r,i,n)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=a,r[n]=e-a):t==="SAME_LOWER"&&(r[i]=e-a,r[n]=a)},cf=(e,t,r,i,n,a,s,o,u,d)=>{let p=e.length-2,h=d.length===0;u.length<p&&u.push(...Array(p-u.length).fill(0));let f=e[0],m=t[o?3:1]*n;for(let _=0,b=e.length-p-(o?1:0);_<p;++_,++b){let $=e[b],v=h?$*s[_]:d[_],w=lf($,s[_],a[_],t[b],r[_],v);df(w,i,a,_,_+p),h&&d.push(s[_]*($-1)+u[_]+(t[b]-1)*r[_]+1-a[_]-a[_+p])}d.splice(0,0,f),d.splice(o?3:1,0,m)},$o=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,f)=>h*f,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((h,f)=>h+f,0)===0){let h=t[0].dims.length-2;u=new Array(h).fill(1)}let d=e.strides.slice();if(d.reduce((h,f)=>h+f,0)===0){let h=t[0].dims.length-2;d=new Array(h).fill(1)}cf(o,r,u,e.autoPad,e.group,n,d,i,s,a);let p=Object.assign({},e);return Object.assign(p,{kernelShape:r,pads:n,outputPadding:s,outputShape:a,dilations:u,strides:d}),p},T_=e=>{let t=al(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),p=e.outputPadding,h=e.outputShape;return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,outputPadding:p,outputShape:h,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},pf=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},xo=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(It(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let a=[t[0],n];t.length===3&&a.push(t[2]),e.compute(I_(a,r,i),{inputs:a})},ff=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),n=[1].concat(n);let u=t.outputPadding;u=[0].concat(u);let d=$o({...t,pads:o,strides:s,dilations:a,kernelShape:n,outputPadding:u},i);xo(e,i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},E_=(e,t)=>{if(pf(e.inputs,t),e.inputs[0].dims.length===3)ff(e,t);else{let r=$o(t,e.inputs);xo(e,e.inputs,r)}}}),hf,C_,z_,Q1=U(()=>{ne(),oe(),Le(),le(),hf=(e,t,r,i)=>{let n=R.size(t),a=t.length,s=D("input",e,a),o=ee("output",e,a),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=R.normalizeAxis(u,a),p=h=>{let f=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,m=te("uniforms.input_shape","uniforms.axis",a),_=i.reverse?f+(i.exclusive?" + 1":""):"0",b=i.reverse?m:f+(i.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...ie(t,t)]}),getShaderSource:p}},C_=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(hf(i,r,n,t),{inputs:[0]})},z_=e=>{let t=e.exclusive===1,r=e.reverse===1;return Ee({exclusive:t,reverse:r})}}),mf,gf,_f,A_,O_,J1=U(()=>{ne(),oe(),Le(),le(),mf=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},gf=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)n.push(r.indicesSet("a",e[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)},_f=(e,t)=>{let r,i,n,a,s,o,u=t.format==="NHWC",d=t.blocksize,p=t.mode==="DCR";u?([r,i,n,a]=e.dims,s=p?[r,i,n,d,d,a/d**2]:[r,i,n,a/d**2,d,d],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[r,d,d,a/d**2,i,n]:[r,a/d**2,d,d,i,n],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(s),f=h.dims.length,m=e.dataType,_=D("a",m,f),b=ee("output",m,f),$=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,b)}

  ${gf(o,f,_,b)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let w=u?[r,i*d,n*d,a/d**2]:[r,a/d**2,i*d,n*d],I=R.size(w),k=h.dims,T=R.sortBasedOnPerm(k,o);return{outputs:[{dims:w,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...ie(k,T)]}},getShaderSource:$}},A_=(e,t)=>{mf(e.inputs),e.compute(_f(e.inputs[0],t))},O_=e=>Ee({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ra,En,So,yf,bf,vf,wf,ko,$f,B_,R_,e2=U(()=>{ne(),oe(),Le(),le(),Ra="[a-zA-Z]|\\.\\.\\.",En="("+Ra+")+",So="^"+En+"$",yf="("+En+",)*"+En,bf="^"+yf+"$",vf=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},wf=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(bf)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(So)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,o,s);this.lhs.push(u)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(En)))throw new Error("Invalid RHS");(n=i.match(RegExp(Ra,"g")))==null||n.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,a=!1,s=[],o=0;if(!e.match(RegExp(So))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Ra,"g")),d=new vf(i);return u==null||u.forEach((p,h)=>{if(p==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let f=n-u.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<s.length;m++){let _=String.fromCharCode(48+m);d.addSymbol(_,h+m),this.addSymbol(_,r[o++],i)}}else d.addSymbol(p,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,r[o++],i)}),d}},ko=e=>e+"_max",$f=(e,t,r,i)=>{let n=e.map(d=>d.length).map((d,p)=>D(`input${p}`,t,d)),a=R.size(i),s=ee("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),u=d=>{let p=[],h="var prod = 1.0;",f="var sum = 0.0;",m="sum += prod;",_=[],b=[],$=[],v=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,T)=>{var C;if(r.rhs.symbolToIndices.has(T)){let z=(C=r.rhs.symbolToIndices.get(T))==null?void 0:C[0];z!==void 0&&r.lhs.forEach((x,N)=>{if(k.inputIndices.includes(N)){let P=x.symbolToIndices.get(T);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(F=>{p.push(`${n[N].indicesSet(`input${N}Indices`,F,s.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,x)=>{if(k.inputIndices.includes(x)){let N=z.symbolToIndices.get(T);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(P=>{_.push(`${n[x].indicesSet(`input${x}Indices`,P,`${T}`)}`)}),v.push(`prod *= ${n[x].getByIndices(`input${x}Indices`)};`)}}),b.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${ko(T)}; ${T}++) {`),$.push("}")});let I=w?[...p,`let sum = ${n.map((k,T)=>k.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...p,f,...b,..._,h,...v,m,...$];return`
            ${d.registerUniforms(o.map(k=>({name:`${ko(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((k,T)=>`var input${T}Indices: ${n[T].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(h=>r.symbolToInfo.has(h)).map(h=>{var f;return{type:12,data:((f=r.symbolToInfo.get(h))==null?void 0:f.dimValue)||0}});d.push({type:12,data:a});let p=e.map((h,f)=>[...ie(h)]).reduce((h,f)=>h.concat(f),d);return p.push(...ie(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}},getShaderSource:u}},B_=(e,t)=>{let r=new wf(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((a,s)=>a.dims);e.compute($f(n,e.inputs[0].dataType,r,i))},R_=e=>{let t=e.equation.replace(/\s+/g,"");return Ee({equation:t})}}),xf,Io,Sf,kf,N_,t2=U(()=>{ne(),oe(),le(),xf=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Io=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},Sf=(e,t)=>e.length>t.length?Io(e,t):Io(t,e),kf=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Sf(t,r),n=e[0].dataType,a=n===9||R.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||i.length>0&&i[i.length-1]%4===0?4:1,u=Math.ceil(R.size(i)/o),d=h=>{let f=D("input",n,t.length,s),m=ee("output",n,i.length,o),_;if(n===9){let b=($,v,w="")=>`
          let outputIndices${v} = ${m.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${f.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${$}[${v}] = ${w}(${f.getByOffset(`index${v}`)}[component${v}]);
        `;_=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${f.getByOffset(`inputOffset / ${s}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(f,m)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},p=[{type:12,data:u},...ie(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p})}},N_=e=>{xf(e.inputs),e.compute(kf(e.inputs),{inputs:[0]})}}),If,M_,r2=U(()=>{ne(),oe(),le(),nl(),If=e=>{let t=e[0].dataType,r=R.size(e[0].dims),i=R.size(e[1].dims),n=i%4===0,a=s=>{let o=D("x",t,[1],4),u=D("bias",t,[1],4),d=ee("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,f=n?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(p).declareVariables(o,u,d)}

    ${_u(at(t))}

    ${s.mainStart(nn)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",yu("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/nn/4)}})}},M_=e=>{e.inputs.length<2||R.size(e.inputs[1].dims)===0?r_(e):e.compute(If(e.inputs))}}),Tf,Ef,D_,P_,i2=U(()=>{ne(),oe(),Le(),le(),Tf=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Ef=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=R.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(a,1,...i);let o=r[a],u=e[0].dataType===9?4:1,d=Math.ceil(R.size(s)/u),p=[{type:12,data:d},{type:6,data:o},{type:12,data:a},...ie(e[0].dims,e[1].dims,s)],h=f=>{let m=D("data",e[0].dataType,e[0].dims.length,u),_=D("inputIndices",e[1].dataType,e[1].dims.length),b=ee("output",e[0].dataType,s.length,u),$=w=>{let I=i.length,k=`var indicesIndices${w}  = ${_.type.indices}(0);`;for(let T=0;T<I;T++)k+=`${I>1?`indicesIndices${w}[${T}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${T}]`:`outputIndices${w}`};`;k+=`
          var idx${w} = ${_.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${m.type.indices};
        `;for(let T=0,C=0;T<n;T++)T===a?(k+=`${n>1?`dataIndices${w}[${T}]`:`dataIndices${w}`} = u32(idx${w});`,C+=I):(k+=`${n>1?`dataIndices${w}[${T}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${C}]`:`outputIndices${w}`};`,C++);return k},v;if(e[0].dataType===9){let w=(I,k,T="")=>`
          let outputIndices${k} = ${b.offsetToIndices(`outputOffset + ${k}u`)};
          ${$(k)};
          let offset${k} = ${m.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${I}[${k}] = ${T}(${m.getByOffset(`index${k}`)}[component${k}]);
        `;v=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${$("")};
      let value = ${m.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,_,b)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:h}},D_=e=>Ee({axis:e.axis}),P_=(e,t)=>{let r=e.inputs;Tf(r),e.compute(Ef(e.inputs,t))}}),Cf,U_,L_,n2=U(()=>{ne(),oe(),le(),Cf=(e,t,r,i,n,a,s,o,u)=>{let d=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:u}],p=[a];d.push(...ie(t.dims,p));let h=f=>{let m=D("indices_data",t.dataType,t.dims.length),_=ee("input_slice_offsets_data",12,1,1),b=[m,_],$=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${f.registerUniforms($).declareVariables(...b)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},U_=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,a=r[1].dims,s=a[a.length-1],o=R.sizeToDimension(a,a.length-1),u=R.sizeFromDimension(i,t.batchDims+s),d=R.sizeToDimension(i,t.batchDims),p=R.sizeFromDimension(i,t.batchDims),h=o/d,f=new Array(s),m=u;for(let k=0;k<s;++k)f[s-1-k]=m,m*=i[t.batchDims+s-1-k];let _=Cf(e,r[1],f,t.batchDims,i,o,h,p,s),b=t.batchDims+s;if(b>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let $=a.slice(0,-1).concat(i.slice(b)),v=R.size($),w=[{type:12,data:v},{type:12,data:u},...ie(r[0].dims,_.dims,$)],I=k=>{let T=D("data",r[0].dataType,r[0].dims.length),C=D("slice_offsets",12,_.dims.length),z=ee("output",r[0].dataType,$.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,C,z)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:$,dataType:n}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:w}),getShaderSource:I},{inputs:[r[0],_]})},L_=e=>({batchDims:e.batch_dims,cacheKey:""})}),zf,Af,W_,G_,a2=U(()=>{ne(),oe(),Le(),le(),zf=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=R.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==n.dims.length||!n.dims.map((o,u)=>u===r?Math.ceil(o/i)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Af=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=R.normalizeAxis(t.gatherAxis,n),s=R.normalizeAxis(t.quantizeAxis,n),o=r.slice(0);o.splice(a,1,...i);let u=R.size(o),d=e[2].dataType,p=e[0].dataType===22,h=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...ie(...e.map((m,_)=>m.dims),o)],f=m=>{let _=D("data",e[0].dataType,e[0].dims.length),b=D("inputIndices",e[1].dataType,e[1].dims.length),$=D("scales",e[2].dataType,e[2].dims.length),v=e.length>3?D("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=ee("output",d,o.length),I=[_,b,$];v&&I.push(v);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(k).declareVariables(...I,w)}
        ${m.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${$.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${$.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${$.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${at(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,_)=>_!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,_)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:f}},W_=(e,t)=>{let r=e.inputs;zf(r,t),e.compute(Af(e.inputs,t))},G_=e=>Ee({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Of,Bf,q_,V_,s2=U(()=>{ne(),oe(),Le(),le(),Of=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Bf=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,a=e[1].dims,s=e[1].dataType,o=R.normalizeAxis(t.axis,n),u=r[o],d=a.slice(0),p=R.size(d),h=D("input",i,n),f=D("indicesInput",s,a.length),m=ee("output",i,d.length),_=[{type:12,data:p},{type:6,data:u},{type:12,data:o}];return _.push(...ie(r,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:_}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,f,m)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},q_=e=>Ee({axis:e.axis}),V_=(e,t)=>{let r=e.inputs;Of(r),e.compute(Bf(e.inputs,t))}}),Rf,Nf,F_,H_,o2=U(()=>{ne(),oe(),le(),Rf=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Nf=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,a,s]=qg.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[n,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(a/u),p=Math.ceil(n/u),h=!0,f=R.size(o),m=[{type:12,data:h?d:f},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(m.push(...ie(e[2].dims)),_.push("rank")),m.push(...ie(o));let b=v=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",k=D("a",e[0].dataType,e[0].dims),T=D("b",e[1].dataType,e[1].dims),C=k.type.value,z=null,x=[k,T];e.length===3&&(z=D("c",e[2].dataType,e[2].dims.length),x.push(z));let N=ee("output",e[0].dataType,o.length);x.push(N);let P=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(P).declareVariables(...x)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${C}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${I}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",N)}; value += ${C}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},$=v=>{let w=D("a",e[0].dataType,e[0].dims),I=D("b",e[1].dataType,e[1].dims),k=null,T=[w,I];e.length===3&&(k=D("c",e[2].dataType,e[2].dims.length),T.push(k));let C=ee("output",e[0].dataType,o.length);T.push(C);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],x="",N="";t.transA&&t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,x="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,x="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,x="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,x="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let P=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(z).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${I.type.storage}, ${u}>, ${u}>;
  ${v.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${C.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${N}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${x}
      }
      workgroupBarrier();
    }

    ${P}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${C.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*p},programUniforms:m}),getShaderSource:$}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:b}},F_=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},H_=(e,t)=>{Rf(e.inputs),e.compute(Nf(e.inputs,t))}}),ar,mr,Xr,Yr,Mf,Df,Pf,Uf,Lf,Wf,Gf,qf,j_,K_,u2=U(()=>{ne(),oe(),Le(),le(),[ar,mr,Xr,Yr]=[0,1,2,3],Mf=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Df=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Pf=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Uf=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Lf=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Wf=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${ar}] = batch;
     indices[${mr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Xr}] = u32(r);
            indices[${Yr}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Xr}] = u32(clamp(r, 0, H - 1));
          indices[${Yr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Xr}] = gs_reflect(r, border[1], border[3]);
          indices[${Yr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Gf=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ar}], indices[${mr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ar}], indices[${mr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ar}], indices[${mr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ar}], indices[${mr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ar}], indices[${mr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ar}], indices[${mr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,qf=(e,t)=>{let r=D("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=D("grid",e[1].dataType,i.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ar,mr,Xr,Yr]=[0,3,1,2]);let s=ee("output",e[0].dataType,a.length),o=r.type.value,u=R.size(a),d=[{type:12,data:u},...ie(e[0].dims,i,a)],p=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${Df}
  ${Pf(o)}
  ${Uf(t)}
  ${Lf(t)}
  ${Wf(r,o,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Xr}]);
      let W_in = i32(uniforms.x_shape[${Yr}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${ar}], indices[${Xr}], indices[${Yr}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Gf(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let f=R.size(a);return{outputs:[{dims:a,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d}},getShaderSource:p}},j_=(e,t)=>{Mf(e.inputs),e.compute(qf(e.inputs,t))},K_=e=>Ee({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ut,Vf,Z_,To,Ff,Gn,X_,Y_=U(()=>{ne(),oe(),Le(),el(),il(),le(),qr(),ut=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Vf=(e,t)=>{let r=e[0],i=ut(e,1),n=ut(e,2),a=ut(e,3),s=ut(e,4),o=ut(e,5),u=ut(e,6),d=ut(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=r.dims[0],h=r.dims[1],f=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],m=h,_=0,b=0,$=Math.floor(f/t.numHeads);if(u&&d&&R.size(u.dims)&&R.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==p||u.dims[1]!==t.numHeads||u.dims[3]!==$)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[3]!==$)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=u.dims[2],b=u.dims[2]}else if(u&&R.size(u.dims)||d&&R.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&R.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,m=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,m=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,m=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(a&&R.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=_+m,I=0;if(s&&R.size(s.dims)>0){I=8;let z=s.dims;throw z.length===1?z[0]===p?I=1:z[0]===3*p+2&&(I=3):z.length===2&&z[0]===p&&z[1]===w&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,T=f;if(n&&R.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(m!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=n.dims[2]}else{if(m!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=n.dims[1]*n.dims[3],k=!0}}let C=!1;if(s&&R.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&R.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==h||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:h,pastSequenceLength:_,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:f,vHiddenSize:T,headSize:$,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:C,passPastInKv:k,qkvFormat:v}},Z_=e=>Ee({...e}),To=Ee({perm:[0,2,1,3]}),Ff=(e,t,r,i,n,a,s)=>{let o=[i,n,a],u=R.size(o),d=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],p=h=>{let f=ee("qkv_with_bias",t.dataType,o),m=D("qkv",t.dataType,o),_=D("bias",r.dataType,o),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(b).declareVariables(m,_,f)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:p},{inputs:[t,r],outputs:[-1]})[0]},Gn=(e,t,r,i,n,a,s,o)=>{let u=a;if(s&&R.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Ff(e,a,s,t,i,r*n,o),u=u.reshape([t,i,r,n]),r===1||i===1?u:e.compute(It(u,To.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,i,r,n])),r===1||i===1?u:e.compute(It(u,To.perm),{inputs:[u],outputs:[-1]})[0]},X_=(e,t)=>{let r=Vf(e.inputs,t),i=e.inputs[0],n=ut(e.inputs,1),a=ut(e.inputs,2),s=ut(e.inputs,3),o=ut(e.inputs,4),u=ut(e.inputs,5),d=ut(e.inputs,6),p=ut(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let h=n&&a&&n.dims.length===4&&a.dims.length===4,f=Gn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(h)return Xn(e,f,n,a,o,void 0,d,p,u,r);if(!n||!a)throw new Error("key and value must be provided");let m=Gn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),_=Gn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);Xn(e,f,m,_,o,void 0,d,p,u,r)}}),Hf,jf,Kf,Zf,xu,Q_,J_,ey=U(()=>{ne(),oe(),Le(),le(),Hf=e=>{if(!e||e.length<1)throw new Error("too few inputs")},jf=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),Ee({numOutputs:i,axis:t.axis,splitSizes:r})},Kf=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${te("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Zf=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},xu=(e,t)=>{let r=e[0].dims,i=R.size(r),n=e[0].dataType,a=R.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=D("input",n,r.length),u=new Array(t.numOutputs),d=[],p=[],h=0,f=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){h+=t.splitSizes[_],u[_]=h;let b=r.slice();b[a]=t.splitSizes[_],p.push(b),s[_]=ee(`output${_}`,n,b.length),d.push({dims:p[_],dataType:e[0].dataType})}f.push({type:12,data:u},...ie(r,...p));let m=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${Kf(u.length)}
  ${Zf(s)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${te("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f})}},Q_=(e,t)=>{Hf(e.inputs);let r=e.inputs.length===1?t:jf(e.inputs,t);e.compute(xu(e.inputs,r),{inputs:[0]})},J_=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return Ee({axis:t,numOutputs:i,splitSizes:r})}}),Xf,ls,ty,ry=U(()=>{ne(),oe(),Le(),le(),Xf=(e,t)=>{let[r,i,n,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!R.areEqual(i.dims,[])&&!R.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!R.areEqual(n.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],d=r.dims[r.dims.length-2],p=n.dims[0],h=R.sizeFromDimension(r.dims,1)/d,f=o===0?n.dims[1]*2:h/s;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(u!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(f/2!==n.dims[1]&&o/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`)},ls=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:a}=t,s=e[0].dims[0],o=R.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,p=e[2].dims[1],h=n===0?p*2:d/i,f=new Array(s,u,d/h,h-p),m=R.computeStrides(f),_=[{type:1,data:a},{type:12,data:f},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,d,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,h,u*h,1]}):[],...ie(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=$=>{let v=D("input",e[0].dataType,e[0].dims.length),w=D("position_ids",e[1].dataType,e[1].dims.length),I=D("cos_cache",e[2].dataType,e[2].dims.length),k=D("sin_cache",e[3].dataType,e[3].dims.length),T=ee("output",e[0].dataType,e[0].dims.length);return $.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${$.declareVariables(v,w,I,k,T)}

        ${$.mainStart(nn)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",ee("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ee({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(f)/nn)},programUniforms:_})}},ty=(e,t)=>{Xf(e.inputs,t),e.compute(ls(e.inputs,t))}}),Yf,Qf,Eo,Jf,iy,l2=U(()=>{Le(),ne(),il(),Y_(),ey(),qr(),ry(),le(),Yf=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=r.dims[0],d=r.dims[1],p=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=d,f=0,m=!i||i.dims.length===0,_=Math.floor(m?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);m&&(p=_*t.numHeads);let b=a&&a.dims.length!==0,$=s&&s.dims.length!==0;if(b&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&$){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=a.dims[2]}else if(b||$)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');h=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let w=0,I=!1,k=t.kvNumHeads?_*t.kvNumHeads:p;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(h!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=n.dims[2]}else{if(h!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=n.dims[1]*n.dims[3],I=!0}}let T=e.length>4?e[5]:void 0;if(T){if(T.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=T.dims.reduce((z,x)=>z*x,1);if(C!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${C}.`);for(let z=0;z<T.dims.length;z++)if(T.dims[z]!==1&&T.dims[z]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${z}] = ${T.dims[z]}.`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:k,headSize:_,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:v}},Qf=Ee({perm:[0,2,1,3]}),Eo=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(It(i,Qf.perm),{inputs:[i],outputs:[-1]})[0]),i},Jf=(e,t,r,i)=>{let n=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=p=>{let h=D("seq_lens",r.dataType,r.dims),f=D("total_seq_lens",i.dataType,i.dims),m=ee("pos_ids",n,s),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${p.registerUniforms(_).declareVariables(h,f,m)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${f.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${h.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${m.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${m.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${m.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},iy=(e,t)=>{var k;let r=Yf(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((k=e.inputs[1])==null?void 0:k.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,p=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=Ee({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,p*r.headSize,p*r.headSize]}),[f,m,_]=!n&&!a?e.compute(xu([i],h),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,a],b,$;if(t.doRotary){let T=e.compute(Jf(r.batchSize,r.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],C=e.inputs[7],z=e.inputs[8],x=Ee({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),N=[f,T,C,z],P=[-1];b=e.compute(ls(N,x),{inputs:N,outputs:P})[0],N.splice(0,1,m);let F=Ee({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});$=e.compute(ls(N,F),{inputs:N,outputs:P})[0]}let v=Gn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?b:f,void 0,0),w=Eo(e,t.doRotary?$:m,r),I=Eo(e,_,r);Xn(e,v,w,I,void 0,void 0,s,o,void 0,r,u,d)}}),Co,eh,th,ny,d2=U(()=>{ne(),oe(),qr(),le(),Co=(e,t,r,i,n,a,s,o)=>{let u=De(a),d=u===1?"f32":`vec${u}f`,p=u===1?"vec2f":`mat2x${u}f`,h=n*s,f=64;h===1&&(f=256);let m=[n,s,a/u],_=[n,s,2],b=["rank","type","type"],$=[];$.push(...ie(m,_));let v=w=>{let I=D("x",t.dataType,3,u),k=D("scale",r.dataType,r.dims),T=D("bias",i.dataType,i.dims),C=ee("output",1,3,2),z=[I,k,T,C];return`
  var<workgroup> workgroup_shared : array<${p}, ${f}>;
  const workgroup_size = ${f}u;
  ${w.declareVariables(...z)}
  ${w.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${I.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Gr("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Gr("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${f}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:h},programUniforms:$}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},eh=(e,t,r)=>{let i=t[0].dims,n=i,a=2,s=i[0],o=i[1],u=R.sizeFromDimension(i,a),d=De(u),p=R.size(n)/d,h=Co(e,t[0],t[1],t[2],s,u,o,r.epsilon),f=[s,o,u/d],m=[s,o],_=["type","none"],b=$=>{let v=D("x",t[0].dataType,f.length,d),w=D("scale_shift",1,m.length,2),I=ee("output",t[0].dataType,f.length,d),k=[v,w,I];return`
  ${$.registerUniform("output_size","u32").declareVariables(...k)}
  ${$.mainStart()}
  ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...ie(f,m,f)]}),getShaderSource:b},{inputs:[t[0],h]})},th=(e,t,r)=>{let i=t[0].dims,n=i,a=i[0],s=i[i.length-1],o=R.sizeFromDimension(i,1)/s,u=De(s),d=R.size(n)/u,p=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],h=["type","type"],f=!1,m=[0,i.length-1];for(let v=0;v<i.length-2;v++)f=f||i[v+1]!==1,m.push(v+1);f=f&&i[i.length-1]!==1;let _=f?e.compute(It(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,w)=>i[m[w]])),b=Co(e,_,t[1],t[2],a,o,s,r.epsilon),$=v=>{let w=He(t[0].dataType),I=u===1?"vec2f":`mat${u}x2f`,k=z=>{let x=z===0?"x":"y",N=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${w}(${N}(scale.${x}))`;case 2:return`vec2<${w}>(${N}(scale[0].${x}, scale[1].${x}))`;case 4:return`vec4<${w}>(${N}(scale[0].${x}, scale[1].${x}, scale[2].${x}, scale[3].${x}))`;default:throw new Error(`Not supported compoents ${u}`)}},T=D("input",t[0].dataType,t[0].dims,u),C=ee("output",t[0].dataType,n,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${I}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${C.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:$},{inputs:[t[0],b]})},ny=(e,t)=>{t.format==="NHWC"?th(e,e.inputs,t):eh(e,e.inputs,t)}}),rh,ih,ay,c2=U(()=>{ne(),oe(),le(),rh=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},ih=(e,t,r)=>{let i=t.simplified,n=e[0].dims,a=e[1],s=!i&&e[2],o=n,u=R.normalizeAxis(t.axis,n.length),d=R.sizeToDimension(n,u),p=R.sizeFromDimension(n,u),h=R.size(a.dims),f=s?R.size(s.dims):0;if(h!==p||s&&f!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${f}`);let m=[];for(let T=0;T<n.length;++T)T<u?m.push(n[T]):m.push(1);let _=De(p),b=["type","type"],$=[{type:12,data:d},{type:1,data:p},{type:12,data:Math.floor(p/_)},{type:1,data:t.epsilon}];s&&b.push("type");let v=r>1,w=r>2,I=T=>{let C=He(e[0].dataType),z=[D("x",e[0].dataType,e[0].dims,_),D("scale",a.dataType,a.dims,_)];s&&z.push(D("bias",s.dataType,s.dims,_)),z.push(ee("output",e[0].dataType,o,_)),v&&z.push(ee("mean_data_output",1,m)),w&&z.push(ee("inv_std_output",1,m));let x=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(x).declareVariables(...z)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${hu("f32",_)};
    var mean_square_vector = ${hu("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ui(C,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Gr("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Gr("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ui(C,_,"x[j + offset]")};
      let f32scale = ${Ui(C,_,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Ui(C,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:o,dataType:e[0].dataType}];return v&&k.push({dims:m,dataType:1}),w&&k.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:b},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:$}),getShaderSource:I}},ay=(e,t)=>{rh(e.inputs),e.compute(ih(e.inputs,t,e.outputCount))}}),nh,sy,p2=U(()=>{oe(),ul(),ll(),nh=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},sy=e=>{nh(e.inputs);let t=rn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(ol(e.inputs,{activation:""},t));else{let n=t[t.length-2],a=R.size(e.inputs[0].dims.slice(0,-2)),s=R.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&n===1&&s===1){let o=e.inputs[0].reshape([1,a,i]),u=e.inputs[1].reshape([1,i,r]),d=[1,a,r],p=[o,u];e.compute(us(p,{activation:""},t,d),{inputs:p})}else e.compute(us(e.inputs,{activation:""},t))}}}),ah,sh,oh,oy,uy,f2=U(()=>{ne(),oe(),Le(),le(),ah=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!R.areEqual(s.dims,[t.n,n,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(R.size(o)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(R.size(u)!==d)throw new Error("zeroPoints input size error.")}},sh=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),u=R.size(o),d=e[1].dims[2]/4,p=e[0].dataType,h=De(t.k),f=De(d),m=De(s),_=o.concat([n,s]),b=n>1&&s/m%2===0?2:1,$=R.size(_)/m/b,v=64,w=[],I=[u,n,a/h],k=R.convertShape(e[1].dims).slice();k.splice(-1,1,d/f),w.push(...ie(I)),w.push(...ie(k)),w.push(...ie(e[2].dims)),e.length===4&&w.push(...ie(R.convertShape(e[3].dims)));let T=[u,n,s/m];w.push(...ie(T));let C=z=>{let x=I.length,N=D("a",e[0].dataType,x,h),P=D("b",12,k.length,f),F=D("scales",e[2].dataType,e[2].dims.length),j=[N,P,F],Y=e.length===4?D("zero_points",12,e[3].dims.length):void 0;Y&&j.push(Y);let B=T.length,Z=ee("output",e[0].dataType,B,m),K=He(e[0].dataType),J=(()=>{switch(h){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${h}-component is not supported.`)}})(),he=Math.floor(32/t.bits),L=Math.floor(he/8),de=()=>{let Q="";for(let G=0;G<L;G++){let xe=G*t.bits*4,ct=xe+t.bits;Q+=`
          // reuse a data (pass ${G})
            var input_offset${G>0?G:""} = ${G===0?N.indicesToOffset(`${N.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${G>0?G:""}: ${J};
            for (var j${G>0?G:""}: u32 = 0; j${G>0?G:""} < ${8/h}; j${G>0?G:""}++) {
              a_data${G>0?G:""}[j${G>0?G:""}] = ${N.getByOffset(`input_offset${G>0?G:""}`)};
              input_offset${G>0?G:""}++;
            }
          `;for(let Pe=0;Pe<m*b;Pe++)Q+=`
            b_value = ${f===1?`b${Pe}_data`:`b${Pe}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${G*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${xe}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ct}u) & b_mask);`}
            b_quantized_values = ${J}(${Array.from({length:4},(rt,it)=>`${K}(b_value_lower[${it}]), ${K}(b_value_upper[${it}])`).join(", ")});
            b_dequantized_values = ${h===1?`${J}(${Array.from({length:8},(rt,it)=>`(b_quantized_values[${it}] - ${Y?`zero_point${Pe}`:"zero_point"}) * scale${Pe}`).join(", ")});`:`(b_quantized_values - ${J}(${Array(8).fill(`${Y?`zero_point${Pe}`:"zero_point"}`).join(",")})) * scale${Pe};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(Pe/m)}]${m>1?`[${Pe%m}]`:""} += ${Array.from({length:8/h},(rt,it)=>`${h===1?`a_data${G>0?G:""}[${it}] * b_dequantized_values[${it}]`:`dot(a_data${G>0?G:""}[${it}], b_dequantized_values[${it}])`}`).join(" + ")};
          `}return Q},W=()=>{let Q=`
            var col_index = col * ${m};
            ${Y?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${K}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let G=0;G<m*b;G++)Q+=`
            let scale${G} = ${F.getByOffset("col_index * nBlocksPerCol + block")};
            ${Y?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${Y.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${G} = ${K}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Q},H=()=>{let Q=`col_index = col * ${m};`;for(let G=0;G<m*b;G++)Q+=`
            let b${G}_data = ${P.getByIndices(`${P.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Q+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${J};
            var b_dequantized_values: ${J};`,Q};return`
        var<workgroup> workgroup_shared: array<${Z.type.value}, ${b*v}>;
        ${z.declareVariables(...j,Z)}
        ${z.mainStart([v,1,1])}
          let output_indices = ${Z.offsetToIndices(`(global_idx / ${v}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${W()}
            for (var word: u32 = 0; word < ${d}; word += ${f}) {
              ${H()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${de()}
                word_offset += ${he/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${Z.type.value} = ${Z.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${Z.setByIndices(`${Z.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${f};${m};${b};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:p}],dispatchGroup:{x:$},programUniforms:w}),getShaderSource:C}},oh=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),u=R.size(o),d=e[1].dims[2]/4,p=e[0].dataType,h=De(t.k),f=De(d),m=o.concat([n,s]),_=128,b=s%8===0?8:s%4===0?4:1,$=_/b,v=Math.floor(32/t.bits),w=$*f*v,I=w/h,k=w/t.blockSize,T=R.size(m)/b,C=[],z=[u,n,a/h],x=R.convertShape(e[1].dims).slice();x.splice(-1,1,d/f),C.push(...ie(z)),C.push(...ie(x)),C.push(...ie(e[2].dims)),e.length===4&&C.push(...ie(R.convertShape(e[3].dims)));let N=[u,n,s];C.push(...ie(N));let P=F=>{let j=z.length,Y=D("a",e[0].dataType,j,h),B=D("b",12,x.length,f),Z=D("scales",e[2].dataType,e[2].dims.length),K=[Y,B,Z],J=e.length===4?D("zero_points",12,e[3].dims.length):void 0;J&&K.push(J);let he=N.length,L=ee("output",e[0].dataType,he),de=He(e[0].dataType),W=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${de}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${de}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${de}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${de}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${Y.type.value}, ${I}>;
        var<workgroup> inter_results: array<array<${L.type.value}, ${$}>, ${b}>;
        ${F.declareVariables(...K,L)}
        ${F.mainStart([$,b,1])}
          let output_indices = ${L.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${I};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${I}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${Y.getByIndices(`${Y.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${Y.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${J?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${J.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${de}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${de}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${Z.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${B.getByIndices(`${B.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?"b_data":"b_data[i]"};
              ${(()=>{let H=Math.floor(v/8),Q="";for(let G=0;G<H;G++){let xe=G*t.bits*4,ct=xe+t.bits;Q+=`
              ${W()}
              {${t.bits===2?`
                let half_word = b_value >> ${G*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${xe}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ct}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${de}>(${Array.from({length:4},(Pe,rt)=>`${de}(b_value_lower[${rt}]), ${de}(b_value_upper[${rt}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${de}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Pe,rt)=>`${`dot(a_data${rt}, b_dequantized_values[${rt}])`}`).join(" + ")};
              }
              word_offset += ${8/h};`}return Q})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${L.type.value} = ${L.type.value}(0);
            for (var b = 0u; b < ${$}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${L.setByIndices(`${L.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${f};${$};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:p}],dispatchGroup:{x:T},programUniforms:C}),getShaderSource:P}},oy=(e,t)=>{ah(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(oh(e.inputs,t)):e.compute(sh(e.inputs,t))},uy=e=>Ee(e)}),uh,lh,dh,ch,ph,fh,hh,mh,ly,h2=U(()=>{ne(),oe(),le(),uh=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},lh=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${te("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${te("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${te("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},dh=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${te("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${te("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${te("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${te("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},ch=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${te("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${te("uniforms.x_shape",n,t)})) {
                  k = i32(${te("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${te("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},ph=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${te("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${te("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${te("uniforms.x_shape",n,t)})) {
                  k -= i32(${te("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${te("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},fh=(e,t,r)=>{switch(r.mode){case 0:return lh(e,t,r.pads.length);case 1:return dh(e,t,r.pads.length);case 2:return ch(e,t,r.pads.length);case 3:return ph(e,t,r.pads.length);default:throw new Error("Invalid mode")}},hh=(e,t)=>{let r=R.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=R.size(r),a=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...ie(e[0].dims,r));let o=["rank"],u=d=>{let p=ee("output",e[0].dataType,r.length),h=D("x",e[0].dataType,i.length),f=h.type.value,m=fh(p,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:s?f:"f32"}),`
            ${d.registerUniforms(_).declareVariables(h,p)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(r)/64)},programUniforms:a}),getShaderSource:u}},mh=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,a=new Int32Array(2*n).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(r[u]),a[Number(o[u])+n]=Number(r[u+o.length])}else r.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:i,pads:s}}else return t},ly=(e,t)=>{uh(e.inputs);let r=mh(e.inputs,t);e.compute(hh(e.inputs,r),{inputs:[0]})}}),Cn,zo,Ao,Oo,Bo,gh,_h,Ro,No,dy,cy,Mo,py,fy,Do,hy,my,gy,_y,m2=U(()=>{Mt(),ne(),oe(),le(),Cn=e=>{if(ke.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},zo=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],d=t.pads.slice();ss.adjustPoolAttributes(r,n,s,o,u,d);let p=ss.computePoolOutputShape(r,n,o,u,s,d,t.autoPad),h=Object.assign({},t);a?Object.assign(h,{kernelShape:s,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let f=p.slice();return f.push(f.splice(1,1)[0]),[h,i?f:p]},Ao=(e,t)=>{let r=t.format==="NHWC",i=R.size(e),n=R.size(t.kernelShape),a=[{type:12,data:i},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],h=!!(d+p);a.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:p}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],$=t.pads[t.pads.length-2];f=!!(b+$),a.push({type:12,data:m},{type:12,data:_},{type:12,data:b},{type:12,data:$}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,h,f]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=R.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,p)=>d+p);return[a,s,!!u,!1,!1]}},Oo=(e,t,r,i,n,a,s,o,u,d,p,h)=>{let f=n.format==="NHWC",m=t.type.value,_=ee("output",t.type.tensor,i);if(n.kernelShape.length<=2){let b="",$="",v="",w=r-(f?2:1);if(p?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,n.kernelShape.length===2){let I=r-(f?3:2);h?$=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${I}] < 0 || xIndices[${I}] >= uniforms.x_shape[${I}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:$=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${m}(${o});
              var pad = 0;
              ${$}
              ${b}
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=n.kernelShape.length,$=n.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(u).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${m}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${te("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${te("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${te("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${te("uniforms.pads","j - 2u",$)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},Bo=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,gh=e=>`${Bo(e)};${e.countIncludePad}`,_h=e=>`${Bo(e)};${e.storageOrder};${e.dilations}`,Ro=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),No=(e,t,r,i)=>{let[n,a]=zo(t,i,r),s=D("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",d="";n.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,h,f,m,_]=Ao(a,n);p.push(...ie(t.dims,a));let b=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${f};${m};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:p}),getShaderSource:$=>Oo($,s,t.dims.length,a.length,n,u,d,0,h,f,m,_)}},dy=e=>{let t=e.count_include_pad!==0,r=Ro(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:gh(i)}},cy=(e,t)=>{Cn(e.inputs),e.compute(No("AveragePool",e.inputs[0],!1,t))},Mo={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},py=e=>{let t=e.format;return{format:t,...Mo,cacheKey:t}},fy=(e,t)=>{Cn(e.inputs),e.compute(No("GlobalAveragePool",e.inputs[0],!0,t))},Do=(e,t,r,i)=>{let[n,a]=zo(t,i,r),s=`
      value = max(x_val, value);
    `,o="",u=D("x",t.dataType,t.dims.length),d=["rank"],[p,h,f,m,_]=Ao(a,n);return p.push(...ie(t.dims,a)),{name:e,shaderCache:{hint:`${i.cacheKey};${f};${m};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:p}),getShaderSource:b=>Oo(b,u,t.dims.length,a.length,n,s,o,t.dataType===10?-65504:-1e5,h,f,m,_)}},hy=(e,t)=>{Cn(e.inputs),e.compute(Do("MaxPool",e.inputs[0],!1,t))},my=e=>{let t=e.storage_order,r=e.dilations,i=Ro(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:_h(n)}},gy=e=>{let t=e.format;return{format:t,...Mo,cacheKey:t}},_y=(e,t)=>{Cn(e.inputs),e.compute(Do("GlobalMaxPool",e.inputs[0],!0,t))}}),yh,bh,yy,by,g2=U(()=>{ne(),oe(),Le(),le(),yh=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,a)=>a===t.axis||n===e[0].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},bh=(e,t)=>{let r=R.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,a=e[0].dims,s=e[1].dataType,o=R.size(a),u=i===3||i===2,d=u?[Math.ceil(R.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,h=e.length>2?e[2]:void 0,f=h?u?[Math.ceil(R.size(h.dims)/4)]:h.dims:void 0,m=p.length===0||p.length===1&&p[0]===1,_=m===!1&&p.length===1,b=De(o),$=m&&(!u||b===4),v=$?b:1,w=$&&!u?b:1,I=D("input",u?12:i,d.length,w),k=D("scale",s,p.length),T=h?D("zero_point",u?12:i,f.length):void 0,C=ee("output",s,a.length,v),z=[I,k];T&&z.push(T);let x=[d,p];h&&x.push(f);let N=[{type:12,data:o/v},{type:12,data:r},{type:12,data:t.blockSize},...ie(...x,a)],P=F=>{let j=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${F.registerUniforms(j).declareVariables(...z,C)}
      ${F.mainStart()}
          ${F.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${I.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${I.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${k.getByOffset("0")}`:_?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?m?u?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:_?u?`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${u?n?"i32":"u32":I.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:P,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/v/64),y:1,z:1},programUniforms:N})}},yy=(e,t)=>{yh(e.inputs,t),e.compute(bh(e.inputs,t))},by=e=>Ee({axis:e.axis,blockSize:e.blockSize})}),vh,wh,vy,_2=U(()=>{Mt(),ne(),le(),vh=(e,t,r)=>{let i=e===t,n=e<t&&r<0,a=e>t&&r>0;if(i||n||a)throw new Error("Range these inputs' contents are invalid.")},wh=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),a=[n],s=n,o=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...ie(a)],u=d=>{let p=ee("output",i,a.length),h=p.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${d.registerUniforms(f).declareVariables(p)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},vy=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ke.webgpu.validateInputContent&&vh(t,r,i),e.compute(wh(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),$h,xh,wy,$y,y2=U(()=>{ne(),oe(),Le(),le(),$h=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${a}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${a}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},xh=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,a=1,s=Math.ceil(R.sizeToDimension(i,i.length-1)/a),o=i[i.length-1],u=R.sizeFromDimension(r,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...ie(e[1].dims,e[2].dims,n)],p=h=>{let f=D("indices",e[1].dataType,e[1].dims.length),m=D("updates",e[2].dataType,e[2].dims.length,a),_=t.reduction!=="none"&&t.reduction!==""?Xg("output",e[0].dataType,n.length):ee("output",e[0].dataType,n.length,a);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(f,m,_)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${$h(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p}},wy=e=>Ee({reduction:e.reduction}),$y=(e,t)=>{e.compute(xh(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Sh,kh,Ih,Po,Th,Eh,Ch,zh,Ah,Oh,Bh,Rh,Uo,Nh,Mh,Dh,Ph,Uh,xy,Sy,b2=U(()=>{ne(),oe(),Le(),le(),Sh=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},kh=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,a)=>i[n]=e[a]),i},Ih=(e,t,r,i,n,a)=>{let[s,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(p=>a.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>i.push(p)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Sh(i,t),t.axes.length>0&&kh(i,t.axes,d).forEach((p,h)=>i[h]=p)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(p=>n.push(Number(p))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Po=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,Th=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Po("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Po("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Eh=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Ch=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((a,s)=>{i[a]=n[s],i[s+r]=n[t.length+s]}),i):n},zh=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(a=>n.push(a)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((a,s)=>n[a]=r[s])}else r.forEach(a=>n.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((a,s)=>Math.round(a*t[s]))}return n},Ah=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=i),r.axes.forEach(a=>n[a]=Math.round(e[a]*t[a]))):(t.fill(i,0,t.length),n.forEach((a,s)=>n[s]=Math.round(a*t[s]))),n},Oh=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${te("uniforms.scales","i",i)};
        var roi_low = ${te("uniforms.roi","i",n)};
        var roi_hi = ${te("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${te("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${te("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Bh=(e,t,r,i,n,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${te("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${te("uniforms.roi","i",a)};
          var roi_hi = ${te("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${te("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${te("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Rh=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${te("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Uo=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Nh=(e,t,r,i,n)=>{let[a,s,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Uo(e,u,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Mh=(e,t,r,i,n,a,s,o,u,d)=>{let p=r.length===2,[h,f]=p?[0,1]:[2,3],m=e.type.value,_=b=>{let $=b===h?"row":"col";return`
      fn ${$}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[b]},
        ${i[b]}, ${r[b]}, ${a[b]}, ${a[b]} + ${r.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${u};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${$}: ${m} = originalIdx + ${m}(i);
          if (${$} < 0 || ${$} >= ${r[b]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${$} = max(0, min(${$}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${$})`)};
          data[i + 1] = ${b===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(h)};
    ${_(f)};
  fn getCubicInterpolationCoefs(s: ${m}) -> array<${m}, 4> {
    var absS = abs(s);
    var coeffs: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${m} = 1.0 - absS;
    var twoMinusAbsS: ${m} = 2.0 - absS;
    var onePlusAbsS: ${m} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${m}, 4>, coefs: array<${m}, 4>) -> ${m} {
    var coefsSum: ${m} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${m} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Dh=(e,t,r,i,n)=>{let[a,s,o,u,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${Uo(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${s}];
      var height:${p} = originalIndices[${o}];
      var width:${p} = originalIndices[${u}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Ph=(e,t,r,i,n,a)=>{let s=e.dims,o=Ch(a,t.axes,s.length),u=zh(s,i,n,t.axes),d=i.slice();i.length===0&&(d=s.map((w,I)=>w===0?1:u[I]/w),t.keepAspectRatioPolicy!=="stretch"&&(u=Ah(s,d,t)));let p=ee("output",e.dataType,u.length),h=D("input",e.dataType,s.length),f=R.size(u),m=s.length===u.length&&s.every((w,I)=>w===u[I]),_=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,$=h.type.value,v=w=>`
      ${m?"":`
      ${Th(t.coordinateTransformMode,$)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Rh(h,s)};
              ${Eh(t.nearestMode,r,$)};
              ${Bh(h,p,s,u,d.length,o.length,_)};
              `;case"linear":return`
              ${Oh(p,s,u,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Nh(h,p,s,_,b)}`;if(s.length===3||s.length===5)return`${Dh(h,p,s,_,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Mh(h,p,s,u,d,o,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(h,p)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:d},{type:1,data:o},...ie(s,u)]})}},Uh=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},xy=(e,t)=>{let r=[],i=[],n=[],a=Uh(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Ih(e.inputs,t,a,r,i,n),e.compute(Ph(e.inputs[0],t,a,r,i,n),{inputs:[0]})},Sy=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return Ee({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),Lh,Wh,ky,v2=U(()=>{ne(),oe(),le(),Lh=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},Wh=(e,t,r,i)=>{let n=t.simplified,a=e[0].dims,s=R.size(a),o=a,u=s,d=a.slice(-1)[0],p=i?a.slice(0,-1).concat(1):[],h=!n&&e.length>3,f=e.length>4,m=i&&r>1,_=i&&r>2,b=r>3,$=64,v=De(d),w=[{type:12,data:u},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],I=T=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[D("x",e[0].dataType,e[0].dims,v),D("skip",e[1].dataType,e[1].dims,v),D("gamma",e[2].dataType,e[2].dims,v)];h&&z.push(D("beta",e[3].dataType,e[3].dims,v)),f&&z.push(D("bias",e[4].dataType,e[4].dims,v)),z.push(ee("output",e[0].dataType,o,v)),m&&z.push(ee("mean_output",1,p)),_&&z.push(ee("inv_std_output",1,p)),b&&z.push(ee("input_skip_bias_sum",e[0].dataType,o,v));let x=He(e[0].dataType),N=He(1,v);return`

      ${T.registerUniforms(C).declareVariables(...z)}
      var<workgroup> sum_shared : array<${N}, ${$}>;
      var<workgroup> sum_squared_shared : array<${N}, ${$}>;

      ${T.mainStart([$,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${$};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${$};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${$-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?"bias[offset1d + i]":x+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Ui(x,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${$};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Gr("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Gr("square_sum",v)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${x}(mean)`}) *
            ${x}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:o,dataType:e[0].dataType}];return r>1&&k.push({dims:p,dataType:1}),r>2&&k.push({dims:p,dataType:1}),r>3&&k.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${m};${_};${b}`,inputDependencies:e.map((T,C)=>"type")},getShaderSource:I,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:w})}},ky=(e,t)=>{Lh(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Wh(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Gh,zn,qh,Lo,Vh,Fh,Iy,Ty,w2=U(()=>{ne(),oe(),Le(),le(),Gh=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},zn=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},qh=(e,t)=>{if(e.length>1){let r=zn(e,1),i=zn(e,2),n=zn(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),Ee({starts:r,ends:i,axes:n})}else return t},Lo=(e,t,r,i,n)=>{let a=e;return e<0&&(a+=r[i[t]]),n[t]<0?Math.max(0,Math.min(a,r[i[t]]-1)):Math.max(0,Math.min(a,r[i[t]]))},Vh=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${te("uniforms.input_shape","i",r.length)};
            let steps_i = ${te("uniforms.steps","i",r.length)};
            let signs_i = ${te("uniforms.signs","i",r.length)};
            let starts_i = ${te("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Fh=(e,t)=>{let r=e[0].dims,i=R.size(r),n=t.axes.length>0?R.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=zn(e,4);a.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(n.length).fill(1));let s=t.starts.map((v,w)=>Lo(v,w,r,n,a)),o=t.ends.map((v,w)=>Lo(v,w,r,n,a));if(n.length!==s.length||n.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let v=0;v<r.length;++v)n.includes(v)||(s.splice(v,0,0),o.splice(v,0,r[v]),a.splice(v,0,1));let u=a.map(v=>Math.sign(v));a.forEach((v,w,I)=>{if(v<0){let k=(o[w]-s[w])/v,T=s[w],C=T+k*a[w];s[w]=C,o[w]=T,I[w]=-v}});let d=r.slice(0);n.forEach((v,w)=>{d[v]=Math.ceil((o[v]-s[v])/a[v])});let p={dims:d,dataType:e[0].dataType},h=ee("output",e[0].dataType,d.length),f=D("input",e[0].dataType,e[0].dims.length),m=R.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],b=[{type:12,data:m},{type:12,data:s},{type:6,data:u},{type:12,data:a},...ie(e[0].dims,d)],$=v=>`
      ${v.registerUniforms(_).declareVariables(f,h)}
        ${Vh(f,h,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:b})}},Iy=(e,t)=>{Gh(e.inputs,t);let r=qh(e.inputs,t);e.compute(Fh(e.inputs,r),{inputs:[0]})},Ty=e=>{let t=e.starts,r=e.ends,i=e.axes;return Ee({starts:t,ends:r,axes:i})}}),Hh,jh,Ey,Cy,$2=U(()=>{ne(),oe(),Le(),qr(),le(),Hh=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},jh=(e,t)=>{let r=e.inputs[0],i=r.dims,n=R.size(i),a=i.length,s=R.normalizeAxis(t.axis,a),o=s<i.length-1,u,d=[];o?(d=Array.from({length:a},(z,x)=>x),d[s]=a-1,d[a-1]=s,u=e.compute(It(r,d),{inputs:[r],outputs:[-1]})[0]):u=r;let p=u.dims,h=p[a-1],f=n/h,m=De(h),_=h/m,b=64;f===1&&(b=256);let $=(z,x)=>x===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:x===2?`max(${z}.x, ${z}.y)`:x===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,v=D("x",u.dataType,u.dims,m),w=ee("result",u.dataType,u.dims,m),I=v.type.value,k=He(u.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,T=z=>`
      var<workgroup> rowMaxShared : ${I};
      var<workgroup> rowSumShared : ${I};
      var<workgroup> threadShared : array<${I}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${I} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${I}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables(v,w)}
      ${z.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${I}(${$("threadShared[0]",m)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${I}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${I}(${Gr("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${m};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:u.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:_}]}),getShaderSource:T},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(It(C,d),{inputs:[C]})},Ey=(e,t)=>{Hh(e.inputs),jh(e,t)},Cy=e=>Ee({axis:e.axis})}),Wo,Kh,Zh,Xh,zy,x2=U(()=>{ne(),oe(),le(),Wo=e=>Array.from(e.getBigInt64Array(),Number),Kh=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Wo(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Zh=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Xh=(e,t)=>{let r=e[0].dims,i=t??Wo(e[1]),n=Zh(r,i),a=R.size(n),s=e[0].dataType,o=D("input",s,r.length),u=ee("output",s,n.length),d=p=>`
      const inputShape = ${o.indices(...r)};
      ${p.registerUniform("output_size","u32").declareVariables(o,u)}
      ${p.mainStart()}
      ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ie(e[0].dims,n)]}),getShaderSource:d}},zy=e=>{Kh(e.inputs),e.compute(Xh(e.inputs),{inputs:[0]})}}),Yh,Qh,Ay,S2=U(()=>{ne(),oe(),le(),Yh=(e,t,r,i,n)=>{let a=ee("output_data",n,r.length,4),s=D("a_data",t[1].dataType,t[1].dims.length,4),o=D("b_data",t[2].dataType,t[2].dims.length,4),u=D("c_data",t[0].dataType,t[0].dims.length,4),d,p=(h,f,m)=>`select(${f}, ${h}, ${m})`;if(!i)d=a.setByOffset("global_idx",p(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let h=(f,m,_="")=>{let b=`a_data[index_a${m}][component_a${m}]`,$=`b_data[index_b${m}][component_b${m}]`,v=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
            let output_indices${m} = ${a.offsetToIndices(`global_idx * 4u + ${m}u`)};
            let offset_a${m} = ${s.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let offset_b${m} = ${o.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let offset_c${m} = ${u.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let index_a${m} = offset_a${m} / 4u;
            let index_b${m} = offset_b${m} / 4u;
            let index_c${m} = offset_c${m} / 4u;
            let component_a${m} = offset_a${m} % 4u;
            let component_b${m} = offset_b${m} % 4u;
            let component_c${m} = offset_c${m} % 4u;
            ${f}[${m}] = ${_}(${p(b,$,v)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Qh=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,a=!(R.areEqual(t,r)&&R.areEqual(r,i)),s=t,o=R.size(t);if(a){let d=rn.calcShape(rn.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=R.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Yh(d,e,s,a,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...ie(i,t,r,s)]})}},Ay=e=>{e.compute(Qh(e.inputs))}}),Oy,k2=U(()=>{U1(),il(),L1(),W1(),G1(),q1(),V1(),Z1(),Y1(),Q1(),J1(),e2(),t2(),r2(),i2(),n2(),a2(),s2(),o2(),u2(),l2(),d2(),c2(),p2(),f2(),Y_(),h2(),m2(),g2(),_2(),y2(),rl(),b2(),ry(),v2(),w2(),$2(),ey(),x2(),qr(),nl(),S2(),Oy=new Map([["Abs",[k0]],["Acos",[I0]],["Acosh",[T0]],["Add",[o_]],["ArgMax",[w0,gu]],["ArgMin",[v0,gu]],["Asin",[E0]],["Asinh",[C0]],["Atan",[z0]],["Atanh",[A0]],["Attention",[$0]],["AveragePool",[cy,dy]],["BatchNormalization",[x0]],["BiasAdd",[S0]],["BiasSplitGelu",[s_]],["Cast",[B0,O0]],["Ceil",[N0]],["Clip",[R0]],["Concat",[__,y_]],["Conv",[$u,wu]],["ConvTranspose",[E_,T_]],["Cos",[M0]],["Cosh",[D0]],["CumSum",[C_,z_]],["DepthToSpace",[A_,O_]],["DequantizeLinear",[yy,by]],["Div",[u_]],["Einsum",[B_,R_]],["Elu",[P0,Wn]],["Equal",[l_]],["Erf",[U0]],["Exp",[L0]],["Expand",[N_]],["FastGelu",[M_]],["Floor",[W0]],["FusedConv",[$u,wu]],["Gather",[P_,D_]],["GatherElements",[V_,q_]],["GatherBlockQuantized",[W_,G_]],["GatherND",[U_,L_]],["Gelu",[G0]],["Gemm",[H_,F_]],["GlobalAveragePool",[fy,py]],["GlobalMaxPool",[_y,gy]],["Greater",[f_]],["GreaterOrEqual",[m_]],["GridSample",[j_,K_]],["GroupQueryAttention",[iy]],["HardSigmoid",[X0,Z0]],["InstanceNormalization",[ny]],["LayerNormalization",[ay]],["LeakyRelu",[q0,Wn]],["Less",[h_]],["LessOrEqual",[g_]],["Log",[n_]],["MatMul",[sy]],["MatMulNBits",[oy,uy]],["MaxPool",[hy,my]],["Mul",[d_]],["MultiHeadAttention",[X_,Z_]],["Neg",[F0]],["Not",[V0]],["Pad",[ly]],["Pow",[c_]],["QuickGelu",[a_,Wn]],["Range",[vy]],["Reciprocal",[H0]],["ReduceMin",[m0]],["ReduceMean",[d0]],["ReduceMax",[h0]],["ReduceSum",[_0]],["ReduceProd",[g0]],["ReduceL1",[c0]],["ReduceL2",[p0]],["ReduceLogSum",[b0]],["ReduceLogSumExp",[f0]],["ReduceSumSquare",[y0]],["Relu",[j0]],["Resize",[xy,Sy]],["RotaryEmbedding",[ty]],["ScatterND",[$y,wy]],["Sigmoid",[K0]],["Sin",[Y0]],["Sinh",[Q0]],["Slice",[Iy,Ty]],["SkipLayerNormalization",[ky]],["Split",[Q_,J_]],["Sqrt",[J0]],["Softmax",[Ey,Cy]],["Sub",[p_]],["Tan",[e_]],["Tanh",[t_]],["ThresholdedRelu",[i_,Wn]],["Tile",[zy]],["Transpose",[Qg,Jg]],["Where",[Ay]]])}),By,I2=U(()=>{Mt(),Ir(),le(),By=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){cr(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});n&&o.push({binding:o.length,resource:n});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Yt(e.programInfo.name)}dispose(){}build(e,t){cr(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let n=Yg(t,this.backend.device.limits),a=e.getShaderSource(n),s=`${i.join(`
`)}
${n.additionalImplementations}
${a}`,o=r.createShaderModule({code:s,label:e.name});$e("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Yt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let a=t*r*i,s=Math.ceil(Math.sqrt(a));if(s>n){if(s=Math.ceil(Math.cbrt(a)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Ry={};pn(Ry,{WebGpuBackend:()=>Ny});var Jh,em,tm,Ny,T2=U(()=>{Mt(),ne(),Ir(),Hg(),D1(),k2(),I2(),Jh=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let a=e[i].dims.length;r.push(`${n};${a}`);break}case"dims":{let a=e[i].dims.join(",");r.push(`${n};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},em=(e,t,r)=>{var n,a;let i=e.name;return(n=e.shaderCache)!=null&&n.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Jh(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,i},tm=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Ny=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=o=>t.features.has(o)&&r.push(o)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new tm(s),this.gpuDataManager=Zg(this),this.programManager=new By(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Qu(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;cr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let a=r[n],s=a.kernelId,o=this.kernels.get(s),u=o.kernelType,d=o.kernelName,p=a.programName,h=a.inputTensorViews,f=a.outputTensorViews,m=t[n*2],_=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let b=Number(m-this.queryTimeBase),$=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger($))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(v=>({dims:v.dims,dataType:vr(v.dataType)})),outputsMetadata:f.map(v=>({dims:v.dims,dataType:vr(v.dataType)})),kernelId:s,kernelType:u,kernelName:d,programName:p,startTime:b,endTime:$});else{let v="";h.forEach((I,k)=>{v+=`input[${k}]: [${I.dims}] | ${vr(I.dataType)}, `});let w="";f.forEach((I,k)=>{w+=`output[${k}]: [${I.dims}] | ${vr(I.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${d}|${p}" ${v}${w}start time: ${b} ns, execution time: ${$-b} ns`)}is("GPU",`${p}::${m}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Yt()}run(e,t,r,i,n,a){cr(e.name);let s=[];for(let w=0;w<t.length;++w){let I=t[w].data;if(I===0)continue;let k=this.gpuDataManager.get(I);if(!k)throw new Error(`no GPU data for input: ${I}`);s.push(k)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),p=r.length===0?o.map((w,I)=>I):r;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let h=[],f=[];for(let w=0;w<o.length;++w){if(!Number.isInteger(p[w])||p[w]<-3||p[w]>=a)throw new Error(`Invalid output index: ${p[w]}`);if(p[w]===-3)continue;let I=p[w]===-1,k=p[w]===-2,T=I||k?n(o[w].dataType,o[w].dims):i(p[w],o[w].dataType,o[w].dims);if(h.push(T),T.data===0)continue;let C=this.gpuDataManager.get(T.data);if(!C)throw new Error(`no GPU data for output: ${T.data}`);if(I&&this.temporaryData.push(C),k){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(C)}f.push(C)}if(s.length!==t.length||f.length!==h.length){if(f.length===0)return Yt(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(d){let w=0,I=[];d.forEach(z=>{let x=typeof z.data=="number"?[z.data]:z.data;if(x.length===0)return;let N=z.type===10?2:4,P,F;z.type===10?(F=x.length>4?16:x.length>2?8:x.length*N,P=x.length>4?16:N*x.length):(F=x.length<=2?x.length*N:16,P=16),w=Math.ceil(w/F)*F,I.push(w);let j=z.type===10?8:4;w+=x.length>4?Math.ceil(x.length/j)*P:x.length*N});let k=16;w=Math.ceil(w/k)*k;let T=new ArrayBuffer(w);d.forEach((z,x)=>{let N=I[x],P=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(T,N,P.length).set(P);else if(z.type===12)new Uint32Array(T,N,P.length).set(P);else if(z.type===10)new Uint16Array(T,N,P.length).set(P);else if(z.type===1)new Float32Array(T,N,P.length).set(P);else throw new Error(`Unsupported uniform type: ${vr(z.type)}`)});let C=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,T,0,w),this.gpuDataManager.release(C.id),m={offset:0,size:w,buffer:C.buffer}}let _=this.programManager.normalizeDispatchGroupSize(u),b=_[1]===1&&_[2]===1,$=em(e,t,b),v=this.programManager.getArtifact($);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact($,v),$e("info",()=>`[artifact] key: ${$}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let w=0;w<d.length;w++){let I=d[w],k=I.type,T=typeof I.data=="number"?1:I.data.length,[C,z]=v.uniformVariablesInfo[w];if(k!==C||T!==z)throw new Error(`Uniform variable ${w} mismatch: expect type ${C} with size ${z}, got type ${k} with size ${T} in program "${v.programInfo.name}".`)}}if($e("info",()=>`[ProgramManager] run "${e.name}" (key=${$}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(v,s,f,_,m),Yt(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=Oy.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,a=i.kernelName,s=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),$e("info",()=>`[WebGPU] Start to run kernel "[${n}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${a}" failed. ${d}`)),1}finally{u&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let a=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,a);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await fu(this,e,t);return Ju(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){$e("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){$e("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){$e("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),a=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(a.computePipeline),n.setBindGroup(0,a.bindGroup),n.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),My={};pn(My,{init:()=>Dy});var Na,rm,Dy,E2=U(()=>{ne(),Ir(),oe(),M1(),Na=class Py{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(R.size(t)!==R.size(this.dims))throw new Error("Invalid new shape");return new Py(this.module,this.dataType,this.data,t)}},rm=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,a=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,a));let s=Number(e.getValue(i*n++,a));this.outputCount=Number(e.getValue(i*n++,a)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,a));let o=[];for(let u=0;u<s;u++){let d=Number(e.getValue(i*n++,a)),p=Number(e.getValue(i*n++,"*")),h=Number(e.getValue(i*n++,a)),f=[];for(let m=0;m<h;m++)f.push(Number(e.getValue(i*n++,a)));o.push(new Na(e,d,p,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,i=(t==null?void 0:t.outputs)??[],n=(o,u,d)=>new Na(this.module,u,this.output(o,d),d),a=(o,u)=>{let d=ni(o,u);if(!d)throw new Error(`Unsupported data type: ${o}`);let p=d>0?this.backend.gpuDataManager.create(d).id:0;return new Na(this.module,o,p,u)};return this.backend.run(e,r,i,n,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*i);this.module.setValue(a,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(a+i*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Dy=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(T2(),Zn(Ry)).WebGpuBackend,s=new a;await s.initialize(r,i),n("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,d,p=!1)=>{if(p)$e("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),s.memcpy(Number(o),Number(u));else{$e("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let h=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(u),h)}},async(o,u,d)=>{$e("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>s.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,d,p)=>{$e("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let h=new rm(t,s,Number(u));return s.computeKernel(Number(o),h,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new Kg(r);n("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,d,p)=>a.ensureTensor(s,o,u,d,p),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!r.trace])}}}),im,dl,cl,Br,nm,Go,ds,pl,fl,qo,hl,ml,gl,Uy=U(()=>{Mt(),B1(),R1(),ne(),ki(),Ku(),Gg(),im=(e,t)=>{Re()._OrtInit(e,t)!==0&&Ce("Can't initialize onnxruntime.")},dl=async e=>{im(e.wasm.numThreads,as(e.logLevel))},cl=async(e,t)=>{var i,n;(n=(i=Re()).asyncInit)==null||n.call(i);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(E2(),Zn(My)).init;t==="webgpu"&&await a("webgpu",Re(),e,r),t==="webnn"&&await a("webnn",Re(),e)}},Br=new Map,nm=e=>{let t=Re(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&Ce("Can't get session input/output count.");let a=i===4?"i32":"i64";return[Number(t.getValue(n,a)),Number(t.getValue(n+i,a))]}finally{t.stackRestore(r)}},Go=(e,t)=>{let r=Re(),i=r.stackSave(),n=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&Ce("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));n=Number(r.getValue(s+a,"*"));let u=r.HEAP32[n/4];if(u===0)return[o,0];let d=r.HEAPU32[n/4+1],p=[];for(let h=0;h<d;h++){let f=Number(r.getValue(n+8+h*a,"*"));p.push(f!==0?r.UTF8ToString(f):Number(r.getValue(n+8+(h+d)*a,"*")))}return[o,u,p]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},ds=e=>{let t=Re(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},pl=async(e,t)=>{var h,f,m,_;let r,i,n=Re();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=ds(e);let a=0,s=0,o=0,u=[],d=[],p=[];try{if([s,u]=await Wg(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let x=[];for(let N of t.externalData){let P=typeof N=="string"?N:N.path;x.push(Yu(typeof N=="string"?N:N.data).then(F=>{n.mountExternalData(P,F)}))}await Promise.all(x)}for(let x of(t==null?void 0:t.executionProviders)??[])if((typeof x=="string"?x:x.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof x!="string"){let N=x,P=N==null?void 0:N.context,F=N==null?void 0:N.gpuDevice,j=N==null?void 0:N.deviceType,Y=N==null?void 0:N.powerPreference;P?n.currentContext=P:F?n.currentContext=await n.webnnCreateMLContext(F):n.currentContext=await n.webnnCreateMLContext({deviceType:j,powerPreference:Y})}else n.currentContext=await n.webnnCreateMLContext();break}a=await n._OrtCreateSession(r,i,s),(h=n.webgpuOnCreateSession)==null||h.call(n,a),a===0&&Ce("Can't create a session."),(f=n.jsepOnCreateSession)==null||f.call(n),n.currentContext&&(n.webnnRegisterMLContext(a,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[b,$]=nm(a),v=!!(t!=null&&t.enableGraphCapture),w=[],I=[],k=[],T=[],C=[];for(let x=0;x<b;x++){let[N,P,F]=Go(a,x);N===0&&Ce("Can't get an input name."),d.push(N);let j=n.UTF8ToString(N);w.push(j),k.push(P===0?{name:j,isTensor:!1}:{name:j,isTensor:!0,type:vr(P),shape:F})}for(let x=0;x<$;x++){let[N,P,F]=Go(a,x+b);N===0&&Ce("Can't get an output name."),p.push(N);let j=n.UTF8ToString(N);I.push(j),T.push(P===0?{name:j,isTensor:!1}:{name:j,isTensor:!0,type:vr(P),shape:F});{if(v&&(t==null?void 0:t.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let Y=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[j])??"cpu",B=n.webnnIsGraphOutput;if(Y==="cpu"&&B&&B(a,j)){C.push("ml-tensor-cpu-output");continue}if(Y!=="cpu"&&Y!=="cpu-pinned"&&Y!=="gpu-buffer"&&Y!=="ml-tensor")throw new Error(`Not supported preferred output location: ${Y}.`);if(v&&Y!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${Y}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(Y)}}let z=null;return C.some(x=>x==="gpu-buffer"||x==="ml-tensor"||x==="ml-tensor-cpu-output")&&(o=n._OrtCreateBinding(a),o===0&&Ce("Can't create IO binding."),z={handle:o,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(x=>x==="ml-tensor-cpu-output"?"ml-tensor":x).map(x=>cu(x))}),Br.set(a,[a,d,p,z,v,!1]),[a,w,I,k,T]}catch(b){throw d.forEach($=>n._OrtFree($)),p.forEach($=>n._OrtFree($)),o!==0&&n._OrtReleaseBinding(o)!==0&&Ce("Can't release IO binding."),a!==0&&n._OrtReleaseSession(a)!==0&&Ce("Can't release session."),b}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&Ce("Can't release session options."),u.forEach(b=>n._free(b)),(_=n.unmountExternalData)==null||_.call(n)}},fl=e=>{var u,d,p;let t=Re(),r=Br.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,a,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Ce("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Ce("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(p=t.webgpuOnReleaseSession)==null||p.call(t,e),n.forEach(h=>t._OrtFree(h)),a.forEach(h=>t._OrtFree(h)),t._OrtReleaseSession(i)!==0&&Ce("Can't release session."),Br.delete(e)},qo=async(e,t,r,i,n,a,s=!1)=>{if(!e){t.push(0);return}let o=Re(),u=o.PTR_SIZE,d=e[0],p=e[1],h=e[3],f=h,m,_;if(d==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let v=e[2].gpuBuffer;_=ni(ii(d),p);{let w=o.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=w(i,a,v,_)}}else if(h==="ml-tensor"){let v=e[2].mlTensor;_=ni(ii(d),p);let w=o.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=w(i,v,ii(d),p)}else{let v=e[2];if(Array.isArray(v)){_=u*v.length,m=o._malloc(_),r.push(m);for(let w=0;w<v.length;w++){if(typeof v[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);o.setValue(m+w*u,jt(v[w],r),"*")}}else{let w=o.webnnIsGraphInput,I=o.webnnIsGraphOutput;if(d!=="string"&&w&&I){let k=o.UTF8ToString(n);if(w(i,k)||I(i,k)){let T=ii(d);_=ni(T,p),f="ml-tensor";let C=o.webnnCreateTemporaryTensor,z=o.webnnUploadTensor;if(!C||!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let x=await C(i,T,p);z(x,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),m=x}else _=v.byteLength,m=o._malloc(_),r.push(m),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),m)}else _=v.byteLength,m=o._malloc(_),r.push(m),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),m)}}let b=o.stackSave(),$=o.stackAlloc(4*p.length);try{p.forEach((w,I)=>o.setValue($+I*u,w,u===4?"i32":"i64"));let v=o._OrtCreateTensor(ii(d),m,_,$,p.length,cu(f));v===0&&Ce(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(v)}finally{o.stackRestore(b)}},hl=async(e,t,r,i,n,a)=>{var j,Y,B,Z;let s=Re(),o=s.PTR_SIZE,u=Br.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],p=u[1],h=u[2],f=u[3],m=u[4],_=u[5],b=t.length,$=i.length,v=0,w=[],I=[],k=[],T=[],C=[],z=s.stackSave(),x=s.stackAlloc(b*o),N=s.stackAlloc(b*o),P=s.stackAlloc($*o),F=s.stackAlloc($*o);try{[v,w]=Lg(a),gi("wasm prepareInputOutputTensor");for(let L=0;L<b;L++)await qo(r[L],I,T,e,p[t[L]],t[L],m);for(let L=0;L<$;L++)await qo(n[L],k,T,e,h[i[L]],b+i[L],m);_i("wasm prepareInputOutputTensor");for(let L=0;L<b;L++)s.setValue(x+L*o,I[L],"*"),s.setValue(N+L*o,p[t[L]],"*");for(let L=0;L<$;L++)s.setValue(P+L*o,k[L],"*"),s.setValue(F+L*o,h[i[L]],"*");if(f&&!_){let{handle:L,outputPreferredLocations:de,outputPreferredLocationsEncoded:W}=f;if(p.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${p.length}).`);gi("wasm bindInputsOutputs");for(let H=0;H<b;H++){let Q=t[H];await s._OrtBindInput(L,p[Q],I[H])!==0&&Ce(`Can't bind input[${H}] for session=${e}.`)}for(let H=0;H<$;H++){let Q=i[H];(j=n[H])!=null&&j[3]?(C.push(k[H]),s._OrtBindOutput(L,h[Q],k[H],0)!==0&&Ce(`Can't bind pre-allocated output[${H}] for session=${e}.`)):s._OrtBindOutput(L,h[Q],0,W[Q])!==0&&Ce(`Can't bind output[${H}] to ${de[H]} for session=${e}.`)}_i("wasm bindInputsOutputs"),Br.set(e,[d,p,h,f,m,!0])}(Y=s.jsepOnRunStart)==null||Y.call(s,d),(B=s.webnnOnRunStart)==null||B.call(s,d);let K;f?K=await s._OrtRunWithBinding(d,f.handle,$,P,v):K=await s._OrtRun(d,N,x,b,F,$,P,v),K!==0&&Ce("failed to call OrtRun().");let J=[],he=[];gi("wasm ProcessOutputTensor");for(let L=0;L<$;L++){let de=Number(s.getValue(P+L*o,"*"));if(de===k[L]||C.includes(k[L])){J.push(n[L]),de!==k[L]&&s._OrtReleaseTensor(de)!==0&&Ce("Can't release tensor.");continue}let W=s.stackSave(),H=s.stackAlloc(4*o),Q=!1,G,xe=0;try{s._OrtGetTensorData(de,H,H+o,H+2*o,H+3*o)!==0&&Ce(`Can't access output tensor data on index ${L}.`);let ct=o===4?"i32":"i64",Pe=Number(s.getValue(H,ct));xe=s.getValue(H+o,"*");let rt=s.getValue(H+o*2,"*"),it=Number(s.getValue(H+o*3,ct)),st=[];for(let Ae=0;Ae<it;Ae++)st.push(Number(s.getValue(rt+Ae*o,ct)));s._OrtFree(rt)!==0&&Ce("Can't free memory for tensor dims.");let Qe=st.reduce((Ae,se)=>Ae*se,1);G=vr(Pe);let Dt=f==null?void 0:f.outputPreferredLocations[i[L]];if(G==="string"){if(Dt==="gpu-buffer"||Dt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ae=[];for(let se=0;se<Qe;se++){let ot=s.getValue(xe+se*o,"*"),Ti=s.getValue(xe+(se+1)*o,"*"),Vr=se===Qe-1?void 0:Ti-ot;Ae.push(s.UTF8ToString(ot,Vr))}J.push([G,st,Ae,"cpu"])}else if(Dt==="gpu-buffer"&&Qe>0){let Ae=s.jsepGetBuffer;if(!Ae)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let se=Ae(xe),ot=ni(Pe,Qe);if(ot===void 0||!Zu(G))throw new Error(`Unsupported data type: ${G}`);Q=!0,J.push([G,st,{gpuBuffer:se,download:s.jsepCreateDownloader(se,ot,G),dispose:()=>{s._OrtReleaseTensor(de)!==0&&Ce("Can't release tensor.")}},"gpu-buffer"])}else if(Dt==="ml-tensor"&&Qe>0){let Ae=s.webnnEnsureTensor,se=s.webnnIsGraphInputOutputTypeSupported;if(!Ae||!se)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(ni(Pe,Qe)===void 0||!Xu(G))throw new Error(`Unsupported data type: ${G}`);if(!se(e,G,!1))throw new Error(`preferredLocation "ml-tensor" for ${G} output is not supported by current WebNN Context.`);let ot=await Ae(e,xe,Pe,st,!1);Q=!0,J.push([G,st,{mlTensor:ot,download:s.webnnCreateMLTensorDownloader(xe,G),dispose:()=>{s.webnnReleaseTensorId(xe),s._OrtReleaseTensor(de)}},"ml-tensor"])}else if(Dt==="ml-tensor-cpu-output"&&Qe>0){let Ae=s.webnnCreateMLTensorDownloader(xe,G)(),se=J.length;Q=!0,he.push((async()=>{let ot=[se,await Ae];return s.webnnReleaseTensorId(xe),s._OrtReleaseTensor(de),ot})()),J.push([G,st,[],"cpu"])}else{let Ae=gs(G),se=new Ae(Qe);new Uint8Array(se.buffer,se.byteOffset,se.byteLength).set(s.HEAPU8.subarray(xe,xe+se.byteLength)),J.push([G,st,se,"cpu"])}}finally{s.stackRestore(W),G==="string"&&xe&&s._free(xe),Q||s._OrtReleaseTensor(de)}}f&&!m&&(s._OrtClearBoundOutputs(f.handle)!==0&&Ce("Can't clear bound outputs."),Br.set(e,[d,p,h,f,m,!1]));for(let[L,de]of await Promise.all(he))J[L][2]=de;return _i("wasm ProcessOutputTensor"),J}finally{(Z=s.webnnOnRunEnd)==null||Z.call(s,d),s.stackRestore(z),I.forEach(K=>s._OrtReleaseTensor(K)),k.forEach(K=>s._OrtReleaseTensor(K)),T.forEach(K=>s._free(K)),v!==0&&s._OrtReleaseRunOptions(v),w.forEach(K=>s._free(K))}},ml=e=>{let t=Re(),r=Br.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&Ce("Can't get an profile file name."),t._OrtFree(n)},gl=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),Rr,ft,Oi,An,On,Ma,Vo,Da,Qr,Jr,am,Ly,Wy,Gy,qy,Vy,Fy,Hy,jy=U(()=>{Mt(),Uy(),ki(),Hu(),Rr=()=>!!ke.wasm.proxy&&typeof document<"u",Oi=!1,An=!1,On=!1,Da=new Map,Qr=(e,t)=>{let r=Da.get(e);r?r.push(t):Da.set(e,[t])},Jr=()=>{if(Oi||!An||On||!ft)throw new Error("worker not ready")},am=e=>{switch(e.data.type){case"init-wasm":Oi=!1,e.data.err?(On=!0,Vo[1](e.data.err)):(An=!0,Vo[0]()),Ma&&(URL.revokeObjectURL(Ma),Ma=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Da.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Ly=async()=>{if(!An){if(Oi)throw new Error("multiple calls to 'initWasm()' detected.");if(On)throw new Error("previous call to 'initWasm()' failed.");if(Oi=!0,Rr())return new Promise((e,t)=>{ft==null||ft.terminate(),Pg().then(([r,i])=>{try{ft=i,ft.onerror=a=>t(a),ft.onmessage=am,Vo=[e,t];let n={type:"init-wasm",in:ke};!n.in.wasm.wasmPaths&&(r||du)&&(n.in.wasm.wasmPaths={wasm:new URL("/jarvis/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href}),ft.postMessage(n),Ma=r}catch(n){t(n)}},t)});try{await ju(ke.wasm),await dl(ke),An=!0}catch(e){throw On=!0,e}finally{Oi=!1}}},Wy=async e=>{if(Rr())return Jr(),new Promise((t,r)=>{Qr("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ke}};ft.postMessage(i)});await cl(ke,e)},Gy=async e=>Rr()?(Jr(),new Promise((t,r)=>{Qr("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};ft.postMessage(i,[e.buffer])})):ds(e),qy=async(e,t)=>{if(Rr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Jr(),new Promise((r,i)=>{Qr("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),ft.postMessage(n,a)})}else return pl(e,t)},Vy=async e=>{if(Rr())return Jr(),new Promise((t,r)=>{Qr("release",[t,r]);let i={type:"release",in:e};ft.postMessage(i)});fl(e)},Fy=async(e,t,r,i,n,a)=>{if(Rr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Jr(),new Promise((s,o)=>{Qr("run",[s,o]);let u=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:i,options:a}};ft.postMessage(d,gl(u))})}else return hl(e,t,r,i,n,a)},Hy=async e=>{if(Rr())return Jr(),new Promise((t,r)=>{Qr("end-profiling",[t,r]);let i={type:"end-profiling",in:e};ft.postMessage(i)});ml(e)}}),Fo,sm,Ky,C2=U(()=>{Mt(),jy(),ne(),Fu(),Gg(),Fo=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},sm=e=>{switch(e[3]){case"cpu":return new et(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Zu(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return et.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!Xu(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return et.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Ky=class{async fetchModelAndCopyToWasmMemory(e){return Gy(await Yu(e))}async loadModel(e,t){cr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await qy(r,t),Yt()}async dispose(){return Vy(this.sessionId)}async run(e,t,r){cr();let i=[],n=[];Object.entries(e).forEach(h=>{let f=h[0],m=h[1],_=this.inputNames.indexOf(f);if(_===-1)throw new Error(`invalid input '${f}'`);i.push(m),n.push(_)});let a=[],s=[];Object.entries(t).forEach(h=>{let f=h[0],m=h[1],_=this.outputNames.indexOf(f);if(_===-1)throw new Error(`invalid output '${f}'`);a.push(m),s.push(_)});let o=i.map((h,f)=>Fo(h,()=>`input "${this.inputNames[n[f]]}"`)),u=a.map((h,f)=>h?Fo(h,()=>`output "${this.outputNames[s[f]]}"`):null),d=await Fy(this.sessionId,n,o,s,u,r),p={};for(let h=0;h<d.length;h++)p[this.outputNames[s[h]]]=a[h]??sm(d[h]);return Yt(),p}startProfiling(){}endProfiling(){Hy(this.sessionId)}}}),Zy={};pn(Zy,{OnnxruntimeWebAssemblyBackend:()=>ku,initializeFlags:()=>Su,wasmBackend:()=>Xy});var Su,ku,Xy,z2=U(()=>{Mt(),jy(),C2(),Su=()=>{(typeof ke.wasm.initTimeout!="number"||ke.wasm.initTimeout<0)&&(ke.wasm.initTimeout=0);let e=ke.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ke.wasm.simd=!1),typeof ke.wasm.proxy!="boolean"&&(ke.wasm.proxy=!1),typeof ke.wasm.trace!="boolean"&&(ke.wasm.trace=!1),typeof ke.wasm.numThreads!="number"||!Number.isInteger(ke.wasm.numThreads)||ke.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ke.wasm.numThreads=1;else{let t=typeof navigator>"u"?m1("node:os").cpus().length:navigator.hardwareConcurrency;ke.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},ku=class{async init(e){Su(),await Ly(),await Wy(e)}async createInferenceSessionHandler(e,t){let r=new Ky;return await r.loadModel(e,t),r}},Xy=new ku});Mt();Mt();Mt();var A2="1.27.0";{let e=(z2(),Zn(Zy)).wasmBackend;Pi("webgpu",e,5),Pi("webnn",e,5),Pi("cpu",e,10),Pi("wasm",e,10)}Object.defineProperty(ke.versions,"web",{value:A2,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pa=32,Bi=96,ei=76,Ho=8,wr=1280;class O2{constructor(t,r,{sampleRate:i=16e3}={}){this.melspecSession=t,this.embeddingSession=r,this.sampleRate=i,this.melspecInputName=t.inputNames[0],this.embeddingInputName=r.inputNames[0],this.rawDataMaxLen=i*10,this.melspectrogramMaxLen=970,this.featureBufferMaxLen=120,this.reset(!0)}reset(t=!1){this.rawDataBuffer=[],this.rawDataRemainder=new Int16Array(0),this.accumulatedSamples=0,this.melBuffer=[];for(let r=0;r<ei;r++)this.melBuffer.push(new Float32Array(Pa).fill(1));this.featureBuffer=[]}async warmup(){const t=new Int16Array(this.sampleRate*4);for(let r=0;r<t.length;r++)t[r]=Math.floor(Math.random()*2e3-1e3);this.featureBuffer=await this._getEmbeddings(t)}async _getMelspectrogram(t){const r=Float32Array.from(t),i=new et("float32",r,[1,r.length]),a=(await this.melspecSession.run({[this.melspecInputName]:i}))[this.melspecSession.outputNames[0]],s=a.dims,o=s[s.length-1],u=s[s.length-2],d=a.data,p=[];for(let h=0;h<u;h++){const f=new Float32Array(o),m=h*o;for(let _=0;_<o;_++)f[_]=d[m+_]/10+2;p.push(f)}return p}async _embedWindows(t){const r=t.length;if(r===0)return[];const i=new Float32Array(r*ei*Pa);let n=0;for(const p of t)for(let h=0;h<ei;h++)i.set(p[h],n),n+=Pa;const a=new et("float32",i,[r,ei,Pa,1]),u=(await this.embeddingSession.run({[this.embeddingInputName]:a}))[this.embeddingSession.outputNames[0]].data,d=[];for(let p=0;p<r;p++)d.push(u.slice(p*Bi,p*Bi+Bi));return d}async _getEmbeddings(t){const r=await this._getMelspectrogram(t),i=[];for(let n=0;n<r.length;n+=Ho){const a=r.slice(n,n+ei);a.length===ei&&i.push(a)}return this._embedWindows(i)}_bufferRawData(t){for(let r=0;r<t.length;r++)this.rawDataBuffer.push(t[r]);this.rawDataBuffer.length>this.rawDataMaxLen&&(this.rawDataBuffer=this.rawDataBuffer.slice(-this.rawDataMaxLen))}async _streamingMelspectrogram(t){if(this.rawDataBuffer.length<400)throw new Error("The number of input frames must be at least 400 samples @ 16khz (25 ms)!");const r=Math.max(0,this.rawDataBuffer.length-(t+480)),i=Int16Array.from(this.rawDataBuffer.slice(r)),n=await this._getMelspectrogram(i);for(const a of n)this.melBuffer.push(a);this.melBuffer.length>this.melspectrogramMaxLen&&(this.melBuffer=this.melBuffer.slice(-this.melspectrogramMaxLen))}async streamingFeatures(t){let r=0;if(this.rawDataRemainder.length!==0){const i=new Int16Array(this.rawDataRemainder.length+t.length);i.set(this.rawDataRemainder,0),i.set(t,this.rawDataRemainder.length),t=i,this.rawDataRemainder=new Int16Array(0)}if(this.accumulatedSamples+t.length>=wr){const i=(this.accumulatedSamples+t.length)%wr;if(i!==0){const n=t.subarray(0,t.length-i);this._bufferRawData(n),this.accumulatedSamples+=n.length,this.rawDataRemainder=t.slice(t.length-i)}else this._bufferRawData(t),this.accumulatedSamples+=t.length,this.rawDataRemainder=new Int16Array(0)}else this.accumulatedSamples+=t.length,this._bufferRawData(t);if(this.accumulatedSamples>=wr&&this.accumulatedSamples%wr===0){await this._streamingMelspectrogram(this.accumulatedSamples);for(let i=this.accumulatedSamples/wr-1;i>=0;i--){const n=-Ho*i===0?this.melBuffer.length:-Ho*i,a=n<0?this.melBuffer.length+n:n,s=a-ei;if(s>=0){const o=this.melBuffer.slice(s,a),[u]=await this._embedWindows([o]);this.featureBuffer.push(u)}}r=this.accumulatedSamples,this.accumulatedSamples=0}return this.featureBuffer.length>this.featureBufferMaxLen&&(this.featureBuffer=this.featureBuffer.slice(-this.featureBufferMaxLen)),r!==0?r:this.accumulatedSamples}getFeatures(t=16,r=-1){let i;if(r!==-1){const s=r+t===0?void 0:r+t;i=this.featureBuffer.slice(r,s)}else i=this.featureBuffer.slice(-t);const n=i.length,a=new Float32Array(n*Bi);for(let s=0;s<n;s++)a.set(i[s],s*Bi);return{data:a,dims:[1,n,Bi]}}}const om={melspectrogram:"melspectrogram.onnx",embedding:"embedding_model.onnx"},B2={silero_vad:"silero_vad.onnx"},um={alexa:"alexa_v0.1.onnx",hey_mycroft:"hey_mycroft_v0.1.onnx",hey_jarvis:"hey_jarvis_v0.1.onnx",hey_rhasspy:"hey_rhasspy_v0.1.onnx",timer:"timer_v0.1.onnx",weather:"weather_v0.1.onnx"},lm={timer:{1:"1_minute_timer",2:"5_minute_timer",3:"10_minute_timer",4:"20_minute_timer",5:"30_minute_timer",6:"1_hour_timer"}},Bn=480;class _l{constructor(t){this._session=t,this._inName=t.inputNames[0],this._hName=t.inputNames.find(r=>r==="h")??t.inputNames[1],this._cName=t.inputNames.find(r=>r==="c")??t.inputNames[2],this._srName=t.inputNames.find(r=>r==="sr")??t.inputNames[3],this._outName=t.outputNames[0],this._hnName=t.outputNames[1],this._cnName=t.outputNames[2],this._sr=new et("int64",BigInt64Array.from([BigInt(16e3)]),[]),this.reset()}static async create(t,r={}){const i=await Wi.create(t,r);return new _l(i)}reset(){this._h=new Float32Array(128),this._c=new Float32Array(128)}async predict(t){const r=[];for(let i=0;i+Bn<=t.length;i+=Bn){const n=new Float32Array(Bn);for(let s=0;s<Bn;s++)n[s]=t[i+s]/32767;const a=await this._session.run({[this._inName]:new et("float32",n,[1,Bn]),[this._hName]:new et("float32",this._h.slice(),[2,1,64]),[this._cName]:new et("float32",this._c.slice(),[2,1,64]),[this._srName]:this._sr});r.push(a[this._outName].data[0]),this._h=Float32Array.from(a[this._hnName].data),this._c=Float32Array.from(a[this._cnName].data)}return r.length===0?0:r.reduce((i,n)=>i+n)/r.length}}const R2=16;function N2(e={}){e.wasmPaths!==void 0&&(ke.wasm.wasmPaths=e.wasmPaths),e.numThreads!==void 0&&(ke.wasm.numThreads=e.numThreads),e.simd!==void 0&&(ke.wasm.simd=e.simd)}function dm(e,t,r){var s,o;const i=t==="input"?(s=e.inputMetadata)==null?void 0:s[0]:(o=e.outputMetadata)==null?void 0:o[0],n=(i==null?void 0:i.shape)??(i==null?void 0:i.dimensions),a=n==null?void 0:n[r];return typeof a=="number"&&a>0?a:null}class yl{constructor(){this.models={},this.features=null,this.predictionBuffer={},this.threshold=.5,this.onDetection=null,this.onUtterance=null,this.vadStopThreshold=.5,this.vadStopFrames=6,this.maxCaptureDuration=10,this._vad=null,this._captureState="idle",this._captureBuffer=[],this._captureLabel=null,this._vadSilenceCount=0,this._captureMinFrames=0}static async create(t={}){const{baseUrl:r="./models/",wakewordModels:i=Object.keys(um),executionProviders:n=["wasm"],ort:a,threshold:s=.5,onDetection:o=null,onUtterance:u=null,vadStopThreshold:d=.5,vadStopFrames:p=6,maxCaptureDuration:h=10}=t;a&&N2(a);const f=I=>/^https?:|^\.|^\//.test(I)?I:r+I,m={executionProviders:n},_=t.melspectrogramUrl?t.melspectrogramUrl:f(om.melspectrogram),b=t.embeddingUrl?t.embeddingUrl:f(om.embedding),$=new yl,[v,w]=await Promise.all([Wi.create(_,m),Wi.create(b,m)]);$.features=new O2(v,w);for(const I of i){let k,T,C,z;if(typeof I=="string"){k=I;const F=um[I]||I;T=f(F),z=lm[I]}else k=I.name,T=/^https?:|^\.|^\//.test(I.url)?I.url:f(I.url),C=I.inputFrames,z=I.classMapping||lm[k];const x=await Wi.create(T,m),N=dm(x,"input",1),P=dm(x,"output",1)??1;$.models[k]={session:x,inputName:x.inputNames[0],inputFrames:C??N??R2,outputClasses:P,classMapping:z||null}}if($.threshold=s,$.onDetection=o,$.onUtterance=u,$.vadStopThreshold=d,$.vadStopFrames=p,$.maxCaptureDuration=h,u){const I=t.vadUrl?t.vadUrl:f(B2.silero_vad);$._vad=await _l.create(I,m)}return await $.features.warmup(),$}get modelNames(){return Object.keys(this.models)}async reset(){var t;this.features.reset(!0),await this.features.warmup(),this.predictionBuffer={},this._captureState="idle",this._captureBuffer=[],this._captureLabel=null,this._vadSilenceCount=0,this._captureMinFrames=0,(t=this._vad)==null||t.reset()}async _runModel(t,r){const i=new et("float32",r.data,r.dims),a=(await t.session.run({[t.inputName]:i}))[t.session.outputNames[0]].data;return Array.from(a)}_pushPrediction(t,r){this.predictionBuffer[t]||(this.predictionBuffer[t]=[]),this.predictionBuffer[t].push(r),this.predictionBuffer[t].length>30&&this.predictionBuffer[t].shift()}_concatCapture(){const t=this._captureBuffer.reduce((n,a)=>n+a.length,0),r=new Int16Array(t);let i=0;for(const n of this._captureBuffer)r.set(n,i),i+=n.length;return r}async predict(t){if(!(t instanceof Int16Array))throw new TypeError("Input audio (x) must be an Int16Array of 16 kHz PCM.");const r=await this.features.streamingFeatures(t),i={};for(const[a,s]of Object.entries(this.models)){let o;if(r>wr){const u=[];for(let d=Math.floor(r/wr)-1;d>=0;d--){const p=this.features.getFeatures(s.inputFrames,-s.inputFrames-d);u.push(await this._runModel(s,p))}o=u.reduce((d,p)=>d.map((h,f)=>Math.max(h,p[f])))}else if(r===wr){const u=this.features.getFeatures(s.inputFrames);o=await this._runModel(s,u)}else if(s.outputClasses===1){const u=this.predictionBuffer[a];o=[u&&u.length>0?u[u.length-1]:0]}else o=new Array(s.outputClasses).fill(0);if(s.outputClasses===1)i[a]=o[0];else if(s.classMapping)for(const[u,d]of Object.entries(s.classMapping))i[d]=o[Number.parseInt(u,10)];else for(let u=0;u<s.outputClasses;u++)i[`${a}_${u}`]=o[u]}for(const a of Object.keys(i))(!this.predictionBuffer[a]||this.predictionBuffer[a].length<5)&&(i[a]=0);for(const a of Object.keys(i))this._pushPrediction(a,i[a]);let n=null;for(const[a,s]of Object.entries(i))s>=this.threshold&&(this.onDetection&&this.onDetection({label:a,score:s}),n===null&&(n=a));if(this.onUtterance&&this._vad)if(this._captureState==="idle")n!==null&&(this._captureState="capturing",this._captureLabel=n,this._captureBuffer=[t.slice()],this._vadSilenceCount=0,this._captureMinFrames=3,this._vad.reset());else{this._captureBuffer.push(t.slice());const a=await this._vad.predict(t);n!==null?this._vadSilenceCount=0:a<this.vadStopThreshold?this._vadSilenceCount++:this._vadSilenceCount=0;const s=Math.ceil(this.maxCaptureDuration*16e3/wr),o=this._captureMinFrames<=0&&this._vadSilenceCount>=this.vadStopFrames,u=this._captureBuffer.length>=s;if(this._captureMinFrames>0&&this._captureMinFrames--,o||u){const d=this._concatCapture(),p=this._captureLabel;this._captureState="idle",this._captureBuffer=[],this._captureLabel=null,this._vadSilenceCount=0,this._captureMinFrames=0,this.onUtterance({label:p,audio:d})}}return i}}class M2{constructor(t,r={}){this.onFrame=t,this.workletUrl=r.workletUrl??new URL("data:text/javascript;base64,Ly8gQXVkaW9Xb3JrbGV0IHByb2Nlc3NvciB0aGF0IGNvbnZlcnRzIHRoZSBtaWNyb3Bob25lIHN0cmVhbSBpbnRvIDE2LWJpdCBQQ00KLy8gZnJhbWVzIG9mIDEyODAgc2FtcGxlcyAoODAgbXMgQCAxNiBrSHopIGFuZCBwb3N0cyB0aGVtIHRvIHRoZSBtYWluIHRocmVhZC4KLy8KLy8gSXQgcmVzYW1wbGVzIGZyb20gdGhlIEF1ZGlvQ29udGV4dCdzIG5hdGl2ZSByYXRlICh0aGUgZ2xvYmFsIGBzYW1wbGVSYXRlYAovLyBpbnNpZGUgdGhlIHdvcmtsZXQgc2NvcGUpIGRvd24vdXAgdG8gMTYga0h6IHVzaW5nIGxpbmVhciBpbnRlcnBvbGF0aW9uLCBzbwovLyBpdCB3b3JrcyBldmVuIHdoZW4gdGhlIGJyb3dzZXIgaWdub3JlcyB0aGUgcmVxdWVzdGVkIDE2IGtIeiBjb250ZXh0IHJhdGUuCgpjb25zdCBUQVJHRVRfUkFURSA9IDE2MDAwOwpjb25zdCBGUkFNRSA9IDEyODA7CgpjbGFzcyBQQ01Xb3JrbGV0IGV4dGVuZHMgQXVkaW9Xb3JrbGV0UHJvY2Vzc29yIHsKICBjb25zdHJ1Y3RvcigpIHsKICAgIHN1cGVyKCk7CiAgICB0aGlzLl9yYXRpbyA9IHNhbXBsZVJhdGUgLyBUQVJHRVRfUkFURTsgLy8gaW5wdXQgc2FtcGxlcyBwZXIgb3V0cHV0IHNhbXBsZQogICAgdGhpcy5fYnVmID0gbmV3IEludDE2QXJyYXkoRlJBTUUpOwogICAgdGhpcy5fbiA9IDA7CiAgICB0aGlzLl90YWlsID0gbmV3IEZsb2F0MzJBcnJheSgwKTsgLy8gbGVmdG92ZXIgaW5wdXQgc2FtcGxlcyBiZXR3ZWVuIGJsb2NrcwogICAgdGhpcy5fZnJhYyA9IDA7IC8vIGZyYWN0aW9uYWwgcmVhZCBwb3NpdGlvbiB3aXRoaW4gdGhlIGN1cnJlbnQgZGF0YSBidWZmZXIKICB9CgogIHByb2Nlc3MoaW5wdXRzKSB7CiAgICBjb25zdCBjaGFubmVsID0gaW5wdXRzWzBdPy5bMF07CiAgICBpZiAoIWNoYW5uZWwpIHJldHVybiB0cnVlOwoKICAgIC8vIFByZXBlbmQgYW55IGxlZnRvdmVyIHNhbXBsZXMgbmVlZGVkIGZvciBjcm9zcy1ibG9jayBpbnRlcnBvbGF0aW9uLgogICAgbGV0IGRhdGEgPSBjaGFubmVsOwogICAgaWYgKHRoaXMuX3RhaWwubGVuZ3RoKSB7CiAgICAgIGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuX3RhaWwubGVuZ3RoICsgY2hhbm5lbC5sZW5ndGgpOwogICAgICBkYXRhLnNldCh0aGlzLl90YWlsLCAwKTsKICAgICAgZGF0YS5zZXQoY2hhbm5lbCwgdGhpcy5fdGFpbC5sZW5ndGgpOwogICAgfQoKICAgIGNvbnN0IHJhdGlvID0gdGhpcy5fcmF0aW87CiAgICBsZXQgdCA9IHRoaXMuX2ZyYWM7CiAgICB3aGlsZSAoTWF0aC5mbG9vcih0KSArIDEgPCBkYXRhLmxlbmd0aCkgewogICAgICBjb25zdCBpID0gTWF0aC5mbG9vcih0KTsKICAgICAgY29uc3QgZnJhYyA9IHQgLSBpOwogICAgICBjb25zdCBzID0gZGF0YVtpXSArIChkYXRhW2kgKyAxXSAtIGRhdGFbaV0pICogZnJhYzsgLy8gbGluZWFyIGludGVycAogICAgICBsZXQgdiA9IE1hdGguZmxvb3IoMzI3NjcgKiBzKTsKICAgICAgaWYgKHYgPiAzMjc2NykgdiA9IDMyNzY3OwogICAgICBlbHNlIGlmICh2IDwgLTMyNzY4KSB2ID0gLTMyNzY4OwogICAgICB0aGlzLl9idWZbdGhpcy5fbisrXSA9IHY7CiAgICAgIGlmICh0aGlzLl9uID09PSBGUkFNRSkgewogICAgICAgIHRoaXMucG9ydC5wb3N0TWVzc2FnZSh0aGlzLl9idWYuc2xpY2UoKSk7CiAgICAgICAgdGhpcy5fbiA9IDA7CiAgICAgIH0KICAgICAgdCArPSByYXRpbzsKICAgIH0KCiAgICBjb25zdCBrZWVwRnJvbSA9IE1hdGguZmxvb3IodCk7CiAgICB0aGlzLl90YWlsID0gZGF0YS5zbGljZShrZWVwRnJvbSk7CiAgICB0aGlzLl9mcmFjID0gdCAtIGtlZXBGcm9tOwogICAgcmV0dXJuIHRydWU7CiAgfQp9CgpyZWdpc3RlclByb2Nlc3NvcigicGNtLXdvcmtsZXQiLCBQQ01Xb3JrbGV0KTsK",import.meta.url).href,this.context=null,this.stream=null,this.node=null,this.source=null}async start(){if(this.context)return;this.stream=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}});const t=globalThis.AudioContext||globalThis.webkitAudioContext;try{this.context=new t({sampleRate:16e3})}catch{this.context=new t}this.context.state==="suspended"&&await this.context.resume(),await this.context.audioWorklet.addModule(this.workletUrl),this.source=this.context.createMediaStreamSource(this.stream),this.node=new AudioWorkletNode(this.context,"pcm-worklet"),this.node.port.onmessage=i=>this.onFrame(i.data),this.source.connect(this.node);const r=this.context.createGain();r.gain.value=0,this.node.connect(r),r.connect(this.context.destination),this._sink=r}get sampleRate(){return this.context?this.context.sampleRate:null}async stop(){var t,r,i;this.node&&(this.node.port.onmessage=null);try{(t=this.source)==null||t.disconnect(),(r=this.node)==null||r.disconnect(),(i=this._sink)==null||i.disconnect()}catch{}this.stream&&this.stream.getTracks().forEach(n=>n.stop()),this.context&&await this.context.close(),this.context=null,this.stream=null,this.node=null,this.source=null}}const bl="/jarvis/",jo=`${bl}wakeword/`,D2=`${bl}ort/`,P2=`${bl}wakeword/mic-worklet.js`,U2=2500;async function L2(e,t=()=>{}){let r=null,i=null,n=0;try{(await navigator.mediaDevices.getUserMedia({audio:!0}).catch(u=>{throw t(`Microphone permission denied: ${u.message}`),u})).getTracks().forEach(u=>u.stop()),ke.wasm.wasmPaths=D2,ke.wasm.numThreads=1,ke.wasm.simd=!1,ke.wasm&&(ke.webgpu=!1,ke.webgl=!1),r=await yl.create({baseUrl:jo,wakewordModels:["hey_jarvis"],melspecModelPath:`${jo}melspectrogram.onnx`,embeddingModelPath:`${jo}embedding_model.onnx`,threshold:.5,onDetection:()=>{const u=Date.now();u-n<U2||(n=u,e())}}),i=new M2(async u=>{try{await r.predict(u)}catch(d){const p=d instanceof Error?`${d.name}: ${d.message}`:String(d);t(`wakeword:predict-error ${p}`)}},{workletUrl:P2}),await i.start()}catch(o){const u=o instanceof Error?`${o.name}: ${o.message}`:String(o);if(t(`wakeword:init-error ${u}`),i)try{await i.stop()}catch{}if(r)try{await r.reset()}catch{}return async()=>{}}const a=i,s=r;return async()=>{try{await a.stop()}catch{}try{await s.reset()}catch{}}}var cm=pr("<option> </option>"),W2=pr('<div class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div> <span class="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Listening</span>',1),G2=pr('<div class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div> <span class="text-[11px] font-mono text-blue-400 uppercase tracking-wider">Speaking</span>',1),q2=pr('<div class="w-2 h-2 rounded-full bg-emerald-400"></div> <span class="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">Standby</span>',1),V2=pr('<div class="w-2 h-2 rounded-full bg-slate-600"></div> <span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Offline</span>',1),F2=pr('<div class="relative"><!> <div class="absolute inset-0 bg-cyan-400 blur-xl opacity-40 animate-pulse"></div></div>'),H2=pr('<div class="relative"><!> <div class="absolute inset-0 bg-blue-400 blur-xl opacity-40 animate-pulse"></div></div>'),j2=pr('<div class="mb-3 px-4 py-3 bg-emerald-900/20 rounded-xl border border-emerald-700/50 animate-fadeIn"><div class="flex items-start gap-2 justify-center"><span class="text-[10px] font-mono text-emerald-400 bg-emerald-900/30 px-2 py-0.5 rounded border border-emerald-700/50 shrink-0"> </span> <p class="text-sm text-emerald-200 font-medium whitespace-pre-wrap flex-1 text-left"> </p></div></div>'),K2=pr('<div class="py-1.5 border-b border-slate-800/30 break-words"><span class="text-slate-600 mr-2">›</span> <span> </span></div>'),Z2=pr('<main class="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black relative overflow-hidden"><div class="fixed inset-0 pointer-events-none"><div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]"></div> <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div></div> <header class="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md px-6 py-4 flex items-center justify-between z-10"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20"><!></div> <div><h1 class="font-bold tracking-wider text-base uppercase text-slate-100 flex items-center gap-2">Shorekeeper <span class="text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 tracking-widest">DEEPGRAM STT</span></h1> <p class="text-[11px] text-slate-500 font-mono tracking-wide mt-0.5">Tethys Voice Core</p></div></div> <div class="md:hidden"><select class="bg-slate-900/80 border border-slate-700 rounded-lg px-2 py-1 text-[11px] text-slate-300 focus:outline-none focus:border-cyan-500/50"></select></div> <div class="hidden md:flex items-center gap-3 text-xs font-mono text-slate-400"><select class="bg-slate-900/80 border border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-300 focus:outline-none focus:border-cyan-500/50"></select> <div class="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800/60 bg-slate-900/40"><div></div> <span class="text-slate-300">Bridge</span></div> <div class="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800/60 bg-slate-900/40"><div></div> <span class="text-slate-300">Gemini</span></div></div></header> <div class="flex-1 max-w-5xl w-full mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 z-10 items-start"><div class="lg:col-span-6 flex flex-col items-center justify-center min-h-[400px] border border-slate-800/60 rounded-3xl bg-slate-900/20 backdrop-blur-xl p-8 relative overflow-hidden shadow-2xl"><div class="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800/60 bg-slate-950/50 backdrop-blur-md"><!></div> <div class="relative my-8 flex items-center justify-center"><div></div> <div></div> <button><!></button></div> <div class="w-full text-center mt-6"><!> <div class="min-h-[80px] w-full flex items-center justify-center bg-slate-950/50 rounded-2xl border border-slate-800/80 p-5 shadow-inner"><p> </p></div></div></div> <div class="lg:col-span-6 flex flex-col gap-6 w-full"><div class="bg-slate-900/30 border border-slate-800/60 rounded-3xl p-6 backdrop-blur-xl flex flex-col flex-1 min-h-[400px] relative"><div class="flex items-center justify-between mb-4 border-b border-slate-800/50 pb-4"><h3 class="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2"><!> System Logs</h3> <div class="flex items-center gap-2"><span class="text-[10px] font-mono text-emerald-500/70 border border-emerald-900/50 bg-emerald-950/20 px-2 py-0.5 rounded-md">Deepgram Nova-3</span> <span class="text-[10px] font-mono text-slate-500 border border-slate-800 bg-slate-900 px-2 py-0.5 rounded-md">v2.0</span></div></div> <div class="flex-1 overflow-y-auto space-y-2 font-mono text-xs pr-2 custom-scrollbar flex flex-col-reverse" style="max-height: 400px;"></div></div></div></div></main>');function X2(e,t){Au(t,!0);let r=Ze("off"),i=null,n=Ze("idle"),a=Ze(""),s=Ze("Schnee... welcome back. Shorekeeper JARVIS core is active."),o=Ze(""),u=Ze("en");const d=[{name:"Aoede",desc:"Breezy"},{name:"Kore",desc:"Firm"},{name:"Leda",desc:"Youthful"},{name:"Zephyr",desc:"Bright"},{name:"Callirrhoe",desc:"Easy-going"},{name:"Autonoe",desc:"Bright"},{name:"Despina",desc:"Smooth"},{name:"Erinome",desc:"Clear"},{name:"Laomedeia",desc:"Upbeat"},{name:"Achernar",desc:"Soft"},{name:"Gacrux",desc:"Mature"},{name:"Pulcherrima",desc:"Forward"},{name:"Vindemiatrix",desc:"Gentle"},{name:"Sulafat",desc:"Warm"}];let p=Ze("Achernar");function h(re){const pe=re.target;ae(p,pe.value,!0),ae(f,[...q(f),`[Voice] Switching to: ${q(p)}`],!0),b&&b.readyState===WebSocket.OPEN&&b.send(JSON.stringify({type:"voiceChange",voice:q(p)}))}let f=Ze(ai(["[System] Tethys Core Initialized (Bun + Elysia.js + Svelte 5)","[Network] WebSocket Bridge endpoint /jarvis/ws","[Voice] Gemini Live Engine Ready"])),m=Ze(!1),_=Ze(!1),b=null,$=null,v=null;const w=c1();Q$(()=>{I()});function I(){try{const re=location.protocol==="https:"?"wss":"ws";b=new WebSocket(`${re}://${location.host}/jarvis/ws`),b.onopen=()=>{ae(m,!0),ae(f,[...q(f),"[WS] Connected to Elysia.js server (/jarvis/ws)"],!0)},b.onmessage=pe=>{let ve;try{ve=JSON.parse(pe.data)}catch{return}switch(ve.type){case"audio":w.play(ve.data),ae(n,"speaking");break;case"subtitle":ae(o,ve.text||"",!0),ae(u,ve.language||"en",!0);break;case"transcript":ve.role==="assistant"||ve.role==="model"?ae(s,ve.text,!0):ve.role==="user"&&ae(a,ve.text,!0);break;case"status":ve.state==="processing"?(ae(n,"processing"),ae(f,[...q(f),"[Hermes] Processing..."],!0)):ve.state==="ready"&&(ae(_,!0),ve.log&&ae(f,[...q(f),ve.log],!0));break;case"turnComplete":w.stop(),ae(o,""),q(r)==="active"?(ae(n,"listening"),void 0):ae(n,"idle");break;case"error":ae(f,[...q(f),`[Error] ${ve.error}`],!0);break}},b.onclose=()=>{ae(m,!1),ae(_,!1),v&&(v(),v=null),q(r)==="active"&&ae(r,i?"standby":"off",!0),ae(n,"idle"),ae(f,[...q(f),"[WS] Disconnected — reconnecting in 1s..."],!0),$&&clearTimeout($),$=setTimeout(I,1e3)},b.onerror=()=>{ae(f,[...q(f),"[WS] Connection error — retrying..."],!0)}}catch(re){console.error("WS Error:",re)}}function k(){}function T(){}async function C(){if(!i){ae(f,[...q(f),"[WakeWord] Initializing microphone..."],!0);try{(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(pe=>pe.stop()),ae(f,[...q(f),"[WakeWord] Mic permission granted"],!0)}catch(re){ae(f,[...q(f),`[Error] Mic Access Denied: ${re instanceof Error?re.message:String(re)}`],!0),ae(n,"error");return}i=await L2(()=>z(),re=>{ae(f,[...q(f),`[WakeWord] ${re}`],!0)}),ae(f,[...q(f),'[WakeWord] Standby — ucapkan "Hey Jarvis" untuk mulai'],!0)}}async function z(){q(r)==="standby"&&(ae(f,[...q(f),"[WakeWord] Terpicu — mengaktifkan sesi suara"],!0),i&&(await i(),i=null),await x())}async function x(){if(!b||b.readyState!==WebSocket.OPEN||!q(_)){ae(f,[...q(f),"[Voice] Tunggu sampai Gemini Live berstatus Ready"],!0),ae(r,"standby"),await C();return}try{v=await l1(re=>{b&&b.readyState===WebSocket.OPEN&&b.send(JSON.stringify({type:"audio",data:re}))},re=>{ae(f,[...q(f),`[Diag] ${re}`],!0),b&&b.readyState===WebSocket.OPEN&&b.send(JSON.stringify({type:"diagnostic",message:re}))}),ae(r,"active"),ae(n,"listening"),ae(f,[...q(f),"[Mic] Capture started (PCM 16kHz → Gemini Live)"],!0)}catch(re){const pe=re instanceof Error?`${re.name}: ${re.message}`:String(re);ae(f,[...q(f),`[Mic] Error: ${pe}`],!0),b&&b.readyState===WebSocket.OPEN&&b.send(JSON.stringify({type:"diagnostic",message:`capture:error ${pe}`})),ae(r,"standby"),await C()}}async function N(){q(r)==="off"?(ae(f,[...q(f),"[Voice] Tap-to-talk: langsung aktif"],!0),await x()):(v&&(v(),v=null),i&&(await i(),i=null),ae(r,"off"),ae(n,"idle"),ae(f,[...q(f),"[Voice] Dimatikan"],!0))}var P=Z2(),F=nt(ze(P),2),j=ze(F),Y=ze(j),B=ze(Y);n1(B,{class:"w-5 h-5 text-white"});var Z=nt(j,2),K=ze(Z);ja(K,21,()=>d,Ha,(re,pe)=>{var ve=cm(),yt=ze(ve),bt={};bn(()=>{Ai(yt,q(pe).name),bt!==(bt=q(pe).name)&&(ve.value=(ve.__value=q(pe).name)??"")}),Ke(re,ve)});var J=nt(Z,2),he=ze(J);ja(he,21,()=>d,Ha,(re,pe)=>{var ve=cm(),yt=ze(ve),bt={};bn(()=>{Ai(yt,`${q(pe).name??""} — ${q(pe).desc??""}`),bt!==(bt=q(pe).name)&&(ve.value=(ve.__value=q(pe).name)??"")}),Ke(re,ve)});var L=nt(he,2),de=ze(L),W=nt(L,2),H=ze(W),Q=nt(F,2),G=ze(Q),xe=ze(G),ct=ze(xe);{var Pe=re=>{var pe=W2();Ke(re,pe)},rt=re=>{var pe=G2();Ke(re,pe)},it=re=>{var pe=q2();Ke(re,pe)},st=re=>{var pe=V2();Ke(re,pe)};Fs(ct,re=>{q(r)==="active"&&q(n)==="listening"?re(Pe):q(r)==="active"&&q(n)==="speaking"?re(rt,1):q(r)==="standby"?re(it,2):re(st,-1)})}var Qe=nt(xe,2),Dt=ze(Qe),Ae=nt(Dt,2),se=nt(Ae,2),ot=ze(se);{var Ti=re=>{var pe=F2(),ve=ze(pe);kc(ve,{class:"w-10 h-10 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,1)]"}),Ke(re,pe)},Vr=re=>{var pe=H2(),ve=ze(pe);s1(ve,{class:"w-10 h-10 text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,1)]"}),Ke(re,pe)},Jt=re=>{kc(re,{class:"w-10 h-10 text-emerald-400/80 group-hover/btn:text-emerald-400 transition-colors"})},Fr=re=>{i1(re,{class:"w-10 h-10 text-slate-600 group-hover/btn:text-slate-400 transition-colors"})};Fs(ot,re=>{q(r)==="active"&&q(n)==="listening"?re(Ti):q(r)==="active"&&q(n)==="speaking"?re(Vr,1):q(r)==="standby"?re(Jt,2):re(Fr,-1)})}var la=nt(Qe,2),er=ze(la);{var da=re=>{var pe=j2(),ve=ze(pe),yt=ze(ve),bt=ze(yt),hn=nt(yt,2),bs=ze(hn);bn(vs=>{Ai(bt,vs),Ai(bs,q(o))},[()=>q(u).toUpperCase()]),Ke(re,pe)};Fs(er,re=>{q(o)&&q(n)==="speaking"&&re(da)})}var ca=nt(er,2),fn=ze(ca),pa=ze(fn),tr=nt(G,2),_s=ze(tr),Hr=ze(_s),Ei=ze(Hr),ys=ze(Ei);a1(ys,{class:"w-4 h-4"});var Tr=nt(Hr,2);ja(Tr,21,()=>[...q(f)].reverse(),Ha,(re,pe)=>{var ve=K2(),yt=nt(ze(ve),2),bt=ze(yt);bn(hn=>{Nr(yt,1,hn),Ai(bt,q(pe))},[()=>lg(q(pe).includes("[Error]")?"text-rose-400":q(pe).includes("[Wake]")?"text-emerald-400":q(pe).includes("Deepgram")?"text-emerald-300":q(pe).includes("[Gemini]")?"text-cyan-400":"text-slate-400")]),Ke(re,ve)}),bn(()=>{Nr(de,1,`w-2 h-2 rounded-full ${q(m)?"bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]":"bg-amber-400"}`),Nr(H,1,`w-2 h-2 rounded-full ${q(_)?"bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]":"bg-slate-600"}`),Nr(Dt,1,`absolute w-64 h-64 rounded-full border border-cyan-500/10 transition-all duration-1000 ${q(r)==="active"&&q(n)==="listening"?"scale-150 opacity-50":q(r)==="standby"?"scale-110 opacity-30 border-emerald-500/20":"scale-90 opacity-0"}`),Nr(Ae,1,`absolute w-52 h-52 rounded-full border border-blue-500/20 transition-all duration-700 ${q(r)==="active"&&q(n)==="speaking"?"scale-125 opacity-70 animate-pulse":"scale-95 opacity-0"}`),Nr(se,1,`w-40 h-40 rounded-full flex flex-col items-center justify-center transition-all duration-500 relative z-10 group/btn outline-none ${q(r)==="active"&&q(n)==="listening"?"bg-gradient-to-b from-cyan-900 to-slate-900 border border-cyan-500/50 shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)] scale-105":q(r)==="active"&&q(n)==="speaking"?"bg-gradient-to-b from-blue-900 to-slate-900 border border-blue-500/50 shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)]":q(r)==="standby"?"bg-slate-900 border border-emerald-500/40 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] hover:scale-105":"bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-800"}`),Nr(fn,1,`text-[15px] font-medium leading-relaxed transition-colors duration-300 ${q(a)?"text-emerald-100":"text-slate-600 italic"}`),Ai(pa,q(a)||(q(r)==="standby"?'Menunggu "Hey Jarvis"...':q(r)==="active"?"Mendengarkan suara...":"Ketuk orb untuk memulai."))}),Fa("change",K,h),wc(K,()=>q(p),re=>ae(p,re)),Fa("change",he,h),wc(he,()=>q(p),re=>ae(p,re)),Fa("click",se,N),Ke(e,P),Ou()}ag(["change","click"]);O$(X2,{target:document.getElementById("app")});
