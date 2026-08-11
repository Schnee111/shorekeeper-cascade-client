var Hv=Object.defineProperty;var Kd=e=>{throw TypeError(e)};var jv=(e,t,r)=>t in e?Hv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var lt=(e,t,r)=>jv(e,typeof t!="symbol"?t+"":t,r),zs=(e,t,r)=>t.has(e)||Kd("Cannot "+r);var O=(e,t,r)=>(zs(e,t,"read from private field"),r?r.call(e):t.get(e)),pe=(e,t,r)=>t.has(e)?Kd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),le=(e,t,r,i)=>(zs(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),xe=(e,t,r)=>(zs(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const em=!1;var gu=Array.isArray,Kv=Array.prototype.indexOf,La=Array.prototype.includes,is=Array.from,Zv=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,tm=Object.getOwnPropertyDescriptors,Xv=Object.prototype,Yv=Array.prototype,_u=Object.getPrototypeOf,Zd=Object.isExtensible;function cn(e){return typeof e=="function"}const Qv=()=>{};function Jv(e){return e()}function No(e){for(var t=0;t<e.length;t++)e[t]()}function rm(){var e,t,r=new Promise((i,n)=>{e=i,t=n});return{promise:r,resolve:e,reject:t}}function ew(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const i of e)if(r.push(i),r.length===t)break;return r}const Xe=2,Ki=4,Kn=8,yu=1<<24,Ht=16,zt=32,kr=64,Mo=128,Ct=512,Ve=1024,qe=2048,Kt=4096,ut=8192,wt=16384,rn=32768,Xd=1<<25,yi=65536,Wa=1<<17,tw=1<<18,nn=1<<19,im=1<<20,sr=1<<25,bi=65536,Ga=1<<21,Ui=1<<22,Gr=1<<23,xr=Symbol("$state"),nm=Symbol("legacy props"),rw=Symbol(""),Ra=Symbol("attributes"),Do=Symbol("class"),Po=Symbol("style"),In=Symbol("text"),Zn=new class extends Error{constructor(){super(...arguments);lt(this,"name","StaleReactionError");lt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var Yh;const bu=!!((Yh=globalThis.document)!=null&&Yh.contentType)&&globalThis.document.contentType.includes("xml");function iw(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function nw(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function aw(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function sw(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ow(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function uw(e){throw new Error("https://svelte.dev/e/effect_orphan")}function lw(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function dw(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function cw(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function pw(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function fw(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function hw(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const mw=1,gw=2,am=4,_w=8,yw=16,bw=1,vw=2,sm=4,ww=8,$w=16,xw=2,Ge=Symbol("uninitialized"),om="http://www.w3.org/1999/xhtml",Sw="http://www.w3.org/2000/svg",kw="@attach";function Iw(){console.warn("https://svelte.dev/e/derived_inert")}function Tw(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ew(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function um(e){return e===this.v}function Cw(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function lm(e){return!Cw(e,this.v)}let an=!1,zw=!1;function Aw(){an=!0}let De=null;function Zi(e){De=e}function vu(e,t=!1,r){De={p:De,i:!1,c:null,e:null,s:e,x:null,r:ge,l:an&&!t?{s:null,u:null,$:[]}:null}}function wu(e){var t=De,r=t.e;if(r!==null){t.e=null;for(var i of r)zm(i)}return t.i=!0,De=t.p,{}}function Xn(){return!an||De!==null&&De.l===null}let Ni=[];function Ow(){var e=Ni;Ni=[],No(e)}function or(e){if(Ni.length===0){var t=Ni;queueMicrotask(()=>{t===Ni&&Ow()})}Ni.push(e)}function dm(e){var t=ge;if(t===null)return _e.f|=Gr,e;if((t.f&rn)===0&&(t.f&Ki)===0)throw e;Lr(e,t)}function Lr(e,t){if(!(t!==null&&(t.f&wt)!==0)){for(;t!==null;){if((t.f&Mo)!==0){if((t.f&rn)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}const Rw=-7169;function Ue(e,t){e.f=e.f&Rw|t}function $u(e){(e.f&Ct)!==0||e.deps===null?Ue(e,Ve):Ue(e,Kt)}function cm(e){if(e!==null)for(const t of e)(t.f&Xe)===0||(t.f&bi)===0||(t.f^=bi,cm(t.deps))}function pm(e,t,r){(e.f&qe)!==0?t.add(e):(e.f&Kt)!==0&&r.add(e),cm(e.deps),Ue(e,Ve)}let _a=!1;function Bw(e){var t=_a;try{return _a=!1,[e(),_a]}finally{_a=t}}function Nw(e,t){if(t){const r=document.body;e.autofocus=!0,or(()=>{document.activeElement===r&&e.focus()})}}function Yn(e){var t=_e,r=ge;At(null),Ot(null);try{return e()}finally{At(t),Ot(r)}}function Mw(e){let t=0,r=qr(0),i;return()=>{Tu()&&(re(r),a$(()=>(t===0&&(i=Ji(()=>e(()=>Dn(r)))),t+=1,()=>{or(()=>{t-=1,t===0&&(i==null||i(),i=void 0,Dn(r))})})))}}var Dw=yi|nn;function Pw(e,t,r,i){new Uw(e,t,r,i)}var It,mu,Tt,ui,ct,Et,ot,yt,_r,li,Pr,Wi,qn,Vn,yr,es,Be,Lw,Ww,Uo,Gw,Lo,Ba,Na,Wo,Go;class Uw{constructor(t,r,i,n){pe(this,Be);lt(this,"parent");lt(this,"is_pending",!1);lt(this,"transform_error");pe(this,It);pe(this,mu,null);pe(this,Tt);pe(this,ui);pe(this,ct);pe(this,Et,null);pe(this,ot,null);pe(this,yt,null);pe(this,_r,null);pe(this,li,0);pe(this,Pr,0);pe(this,Wi,!1);pe(this,qn,new Set);pe(this,Vn,new Set);pe(this,yr,null);pe(this,es,Mw(()=>(le(this,yr,qr(O(this,li))),()=>{le(this,yr,null)})));var a;le(this,It,t),le(this,Tt,r),le(this,ui,s=>{var o=ge;o.b=this,o.f|=Mo,i(s)}),this.parent=ge.b,this.transform_error=n??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),le(this,ct,ns(()=>{xe(this,Be,Lo).call(this)},Dw))}defer_effect(t){pm(t,O(this,qn),O(this,Vn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!O(this,Tt).pending}update_pending_count(t,r){xe(this,Be,Wo).call(this,t,r),le(this,li,O(this,li)+t),!(!O(this,yr)||O(this,Wi))&&(le(this,Wi,!0),or(()=>{le(this,Wi,!1),O(this,yr)&&Yi(O(this,yr),O(this,li))}))}get_effect_pending(){return O(this,es).call(this),re(O(this,yr))}error(t){if(!O(this,Tt).onerror&&!O(this,Tt).failed)throw t;de!=null&&de.is_fork?(O(this,Et)&&de.skip_effect(O(this,Et)),O(this,ot)&&de.skip_effect(O(this,ot)),O(this,yt)&&de.skip_effect(O(this,yt)),de.oncommit(()=>{xe(this,Be,Go).call(this,t)})):xe(this,Be,Go).call(this,t)}}It=new WeakMap,mu=new WeakMap,Tt=new WeakMap,ui=new WeakMap,ct=new WeakMap,Et=new WeakMap,ot=new WeakMap,yt=new WeakMap,_r=new WeakMap,li=new WeakMap,Pr=new WeakMap,Wi=new WeakMap,qn=new WeakMap,Vn=new WeakMap,yr=new WeakMap,es=new WeakMap,Be=new WeakSet,Lw=function(){try{le(this,Et,mt(()=>O(this,ui).call(this,O(this,It))))}catch(t){this.error(t)}},Ww=function(t){const r=O(this,Tt).failed,{reset:i,invoke_onerror:n}=xe(this,Be,Uo).call(this,t);or(n),r&&le(this,yt,mt(()=>{r(O(this,It),()=>t,()=>i)}))},Uo=function(t){var r=!1,i=!1;const n=()=>{if(r){Ew();return}r=!0,i&&hw(),O(this,yt)!==null&&hi(O(this,yt),()=>{le(this,yt,null)}),xe(this,Be,Na).call(this,()=>{xe(this,Be,Lo).call(this)})};return{reset:n,invoke_onerror:()=>{var s,o;try{i=!0,(o=(s=O(this,Tt)).onerror)==null||o.call(s,t,n),i=!1}catch(l){Lr(l,O(this,ct)&&O(this,ct).parent)}}}},Gw=function(){const t=O(this,Tt).pending;t&&(this.is_pending=!0,le(this,ot,mt(()=>t(O(this,It)))),or(()=>{var r=le(this,_r,document.createDocumentFragment()),i=Sr();r.append(i),le(this,Et,xe(this,Be,Na).call(this,()=>mt(()=>O(this,ui).call(this,i)))),O(this,Pr)===0&&(O(this,It).before(r),le(this,_r,null),hi(O(this,ot),()=>{le(this,ot,null)}),xe(this,Be,Ba).call(this,de))}))},Lo=function(){try{if(this.is_pending=this.has_pending_snippet(),le(this,Pr,0),le(this,li,0),le(this,Et,mt(()=>{O(this,ui).call(this,O(this,It))})),O(this,Pr)>0){var t=le(this,_r,document.createDocumentFragment());zu(O(this,Et),t);const r=O(this,Tt).pending;le(this,ot,mt(()=>r(O(this,It))))}else xe(this,Be,Ba).call(this,de)}catch(r){this.error(r)}},Ba=function(t){this.is_pending=!1,t.transfer_effects(O(this,qn),O(this,Vn))},Na=function(t){var r=ge,i=_e,n=De;Ot(O(this,ct)),At(O(this,ct)),Zi(O(this,ct).ctx);try{return vi.ensure(),t()}catch(a){return dm(a),null}finally{Ot(r),At(i),Zi(n)}},Wo=function(t,r){var i;if(!this.has_pending_snippet()){this.parent&&xe(i=this.parent,Be,Wo).call(i,t,r);return}le(this,Pr,O(this,Pr)+t),O(this,Pr)===0&&(xe(this,Be,Ba).call(this,r),O(this,ot)&&hi(O(this,ot),()=>{le(this,ot,null)}),O(this,_r)&&(O(this,It).before(O(this,_r)),le(this,_r,null)))},Go=function(t){O(this,Et)&&(et(O(this,Et)),le(this,Et,null)),O(this,ot)&&(et(O(this,ot)),le(this,ot,null)),O(this,yt)&&(et(O(this,yt)),le(this,yt,null));let r=O(this,Tt).failed;const i=n=>{const{reset:a,invoke_onerror:s}=xe(this,Be,Uo).call(this,n);s(),r&&le(this,yt,xe(this,Be,Na).call(this,()=>{try{return mt(()=>{var o=ge;o.b=this,o.f|=Mo,r(O(this,It),()=>n,()=>a)})}catch(o){return Lr(o,O(this,ct).parent),null}}))};or(()=>{var n;try{n=this.transform_error(t)}catch(a){Lr(a,O(this,ct)&&O(this,ct).parent);return}n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(i,a=>Lr(a,O(this,ct)&&O(this,ct).parent)):i(n)})};function fm(e,t,r,i){const n=Xn()?Xi:xu;var a=e.filter(m=>!m.settled),s=t.map(n);if(r.length===0&&a.length===0){i(s);return}var o=ge,l=qw(),d=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(m=>m.promise)):null;function p(m){if((o.f&wt)===0){l();try{i([...s,...m])}catch(_){Lr(_,o)}qa()}}var f=hm();if(r.length===0){d.then(()=>p([])).finally(f);return}function h(){Promise.all(r.map(m=>Vw(m))).then(p).catch(m=>Lr(m,o)).finally(f)}d?d.then(()=>{l(),h(),qa()}):h()}function qw(){var e=ge,t=_e,r=De,i=de;return function(a=!0){Ot(e),At(t),Zi(r),a&&(e.f&wt)===0&&(i==null||i.activate(),i==null||i.apply())}}function qa(e=!0){Ot(null),At(null),Zi(null),e&&(de==null||de.deactivate())}function hm(){var e=ge,t=e.b,r=de,i=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(i,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(i,e)}}function Xi(e){var t=Xe|qe;return ge!==null&&(ge.f|=nn),{ctx:De,deps:null,effects:null,equals:um,f:t,fn:e,reactions:null,rv:0,v:Ge,wv:0,parent:ge,ac:null}}const Tn=Symbol("obsolete");function Vw(e,t,r){let i=ge;i===null&&nw();var n=void 0,a=qr(Ge),s=!_e,o=new Set;return n$(()=>{var m,_;var l=ge,d=rm();n=d.promise;try{Promise.resolve(e()).then(d.resolve,b=>{b!==Zn&&d.reject(b)}).finally(qa)}catch(b){d.reject(b),qa()}var p=de;if(s){if((l.f&rn)!==0)var f=hm();if((m=i.b)!=null&&m.is_rendered())(_=p.async_deriveds.get(l))==null||_.reject(Tn);else for(const b of o.values())b.reject(Tn);o.add(d),p.async_deriveds.set(l,d)}const h=(b,$=void 0)=>{f==null||f(),o.delete(d),$!==Tn&&(p.activate(),$?(a.f|=Gr,Yi(a,$)):((a.f&Gr)!==0&&(a.f^=Gr),Yi(a,b)),p.deactivate())};d.promise.then(h,b=>h(null,b||"unknown"))}),Eu(()=>{for(const l of o)l.reject(Tn)}),new Promise(l=>{function d(p){function f(){p===n?l(a):d(n)}p.then(f,f)}d(n)})}function qo(e){const t=Xi(e);return Dm(t),t}function xu(e){const t=Xi(e);return t.equals=lm,t}function Fw(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)et(t[r])}}function Su(e){var t,r=ge,i=e.parent;if(!Ir&&i!==null&&e.v!==Ge&&(i.f&(wt|ut))!==0)return Iw(),e.v;Ot(i);try{e.f&=~bi,Fw(e),t=Wm(e)}finally{Ot(r)}return t}function mm(e){var t=Su(e);if(!e.equals(t)&&(e.wv=Um(),(!(de!=null&&de.is_fork)||e.deps===null)&&(de!==null?(de.capture(e,t,!0),Mn==null||Mn.capture(e,t,!0)):e.v=t,e.deps===null))){Ue(e,Ve);return}Ir||(Qe!==null?(Tu()||de!=null&&de.is_fork)&&Qe.set(e,t):$u(e))}function Hw(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&Yn(()=>{r.ac.abort(Zn),r.ac=null}),r.fn!==null&&(r.teardown=Qv),Ln(r,0),Cu(r))}function gm(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Qi(t)}let As=null,Ci=null,de=null,Mn=null,Qe=null,Vo=null,Os=!1,Mi=null,Ma=null;var Yd=0;let jw=1;var Gi,Ur,di,qi,Vi,Fi,br,Hi,pt,Fn,vr,qt,nr,ji,ci,ze,Fo,En,Ho,_m,ym,Ri,Kw,Cn;const ts=class ts{constructor(){pe(this,ze);lt(this,"id",jw++);pe(this,Gi,!1);lt(this,"linked",!0);pe(this,Ur,null);pe(this,di,null);lt(this,"async_deriveds",new Map);lt(this,"current",new Map);lt(this,"previous",new Map);pe(this,qi,new Set);pe(this,Vi,new Set);pe(this,Fi,0);pe(this,br,new Map);pe(this,Hi,null);pe(this,pt,[]);pe(this,Fn,[]);pe(this,vr,new Set);pe(this,qt,new Set);pe(this,nr,new Map);pe(this,ji,new Set);lt(this,"is_fork",!1);pe(this,ci,!1);Ci===null?As=Ci=this:(le(Ci,di,this),le(this,Ur,Ci)),Ci=this}skip_effect(t){O(this,nr).has(t)||O(this,nr).set(t,{d:[],m:[]}),O(this,ji).delete(t)}unskip_effect(t,r=i=>this.schedule(i)){var i=O(this,nr).get(t);if(i){O(this,nr).delete(t);for(var n of i.d)Ue(n,qe),r(n);for(n of i.m)Ue(n,Kt),r(n)}O(this,ji).add(t)}capture(t,r,i=!1){t.v!==Ge&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Gr)===0&&(this.current.set(t,[r,i]),Qe==null||Qe.set(t,r)),this.is_fork||(t.v=r)}activate(){de=this}deactivate(){de=null,Qe=null}flush(){try{Os=!0,de=this,xe(this,ze,En).call(this)}finally{Yd=0,Vo=null,Mi=null,Ma=null,Os=!1,de=null,Qe=null,fi.clear()}}discard(){var t;for(const r of O(this,Vi))r(this);O(this,Vi).clear();for(const r of this.async_deriveds.values())r.reject(Tn);xe(this,ze,Cn).call(this),(t=O(this,Hi))==null||t.resolve()}register_created_effect(t){O(this,Fn).push(t)}increment(t,r){if(le(this,Fi,O(this,Fi)+1),t){let i=O(this,br).get(r)??0;O(this,br).set(r,i+1)}}decrement(t,r){if(le(this,Fi,O(this,Fi)-1),t){let i=O(this,br).get(r)??0;i===1?O(this,br).delete(r):O(this,br).set(r,i-1)}O(this,ci)||(le(this,ci,!0),or(()=>{le(this,ci,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const i of t)O(this,vr).add(i);for(const i of r)O(this,qt).add(i);t.clear(),r.clear()}oncommit(t){O(this,qi).add(t)}ondiscard(t){O(this,Vi).add(t)}settled(){return(O(this,Hi)??le(this,Hi,rm())).promise}static ensure(){if(de===null){const t=de=new ts;Os||or(()=>{O(t,Gi)||t.flush()})}return de}apply(){{Qe=null;return}}schedule(t){var n;if(Vo=t,(n=t.b)!=null&&n.is_pending&&(t.f&(Ki|Kn|yu))!==0&&(t.f&rn)===0){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var i=r.f;if(Mi!==null&&r===ge&&(_e===null||(_e.f&Xe)===0))return;if((i&(kr|zt))!==0){if((i&Ve)===0)return;r.f^=Ve}}O(this,pt).push(r)}};Gi=new WeakMap,Ur=new WeakMap,di=new WeakMap,qi=new WeakMap,Vi=new WeakMap,Fi=new WeakMap,br=new WeakMap,Hi=new WeakMap,pt=new WeakMap,Fn=new WeakMap,vr=new WeakMap,qt=new WeakMap,nr=new WeakMap,ji=new WeakMap,ci=new WeakMap,ze=new WeakSet,Fo=function(){if(this.is_fork)return!0;for(const i of O(this,br).keys()){for(var t=i,r=!1;t.parent!==null;){if(O(this,nr).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},En=function(){var l,d,p,f;le(this,Gi,!0),Yd++>1e3&&(xe(this,ze,Cn).call(this),Zw());for(const h of O(this,vr))O(this,qt).delete(h),Ue(h,qe),this.schedule(h);for(const h of O(this,qt))Ue(h,Kt),this.schedule(h);const t=O(this,pt);le(this,pt,[]),this.apply();var r=Mi=[],i=[],n=Ma=[];for(const h of t)try{xe(this,ze,Ho).call(this,h,r,i)}catch(m){throw wm(h),xe(this,ze,Fo).call(this)||this.discard(),m}if(de=null,n.length>0){var a=ts.ensure();for(const h of n)a.schedule(h)}if(Mi=null,Ma=null,xe(this,ze,Fo).call(this)){xe(this,ze,Ri).call(this,i),xe(this,ze,Ri).call(this,r);for(const[h,m]of O(this,nr))vm(h,m);n.length>0&&xe(l=de,ze,En).call(l);return}const s=xe(this,ze,_m).call(this);if(s){xe(this,ze,Ri).call(this,i),xe(this,ze,Ri).call(this,r),xe(d=s,ze,ym).call(d,this);return}O(this,vr).clear(),O(this,qt).clear();for(const h of O(this,qi))h(this);O(this,qi).clear(),Mn=this,Qd(i),Qd(r),Mn=null,(p=O(this,Hi))==null||p.resolve();var o=de;if(O(this,Fi)===0&&(O(this,pt).length===0||o!==null)&&xe(this,ze,Cn).call(this),O(this,pt).length>0)if(o!==null){const h=o;O(h,pt).push(...O(this,pt).filter(m=>!O(h,pt).includes(m)))}else o=this;o!==null&&xe(f=o,ze,En).call(f)},Ho=function(t,r,i){t.f^=Ve;for(var n=t.first;n!==null;){var a=n.f,s=(a&(zt|kr))!==0,o=s&&(a&Ve)!==0,l=o||(a&ut)!==0||O(this,nr).has(n);if(!l&&n.fn!==null){s?n.f^=Ve:(a&Ki)!==0?r.push(n):Jn(n)&&((a&Ht)!==0&&O(this,qt).add(n),Qi(n));var d=n.first;if(d!==null){n=d;continue}}for(;n!==null;){var p=n.next;if(p!==null){n=p;break}n=n.parent}}},_m=function(){for(var t=O(this,Ur);t!==null;){if(!t.is_fork){for(const[r,[,i]]of this.current)if(t.current.has(r)&&!i)return t}t=O(t,Ur)}return null},ym=function(t){var i;for(const[n,a]of t.current)!this.previous.has(n)&&t.previous.has(n)&&this.previous.set(n,t.previous.get(n)),this.current.set(n,a);for(const[n,a]of t.async_deriveds){const s=this.async_deriveds.get(n);s&&a.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(O(t,vr),O(t,qt));const r=n=>{var a=n.reactions;if(a!==null&&!((n.f&Xe)!==0&&(n.f&(qe|Kt))===0))for(const l of a){var s=l.f;if((s&Xe)!==0)r(l);else{var o=l;s&(Ui|Ht)&&!this.async_deriveds.has(o)&&(O(this,qt).delete(o),Ue(o,qe),this.schedule(o))}}};for(const n of this.current.keys())r(n);this.oncommit(()=>t.discard()),xe(i=t,ze,Cn).call(i),de=this,xe(this,ze,En).call(this)},Ri=function(t){for(var r=0;r<t.length;r+=1)pm(t[r],O(this,vr),O(this,qt))},Kw=function(){var f;for(let h=As;h!==null;h=O(h,di)){var t=h.id<this.id,r=[];for(const[m,[_,b]]of this.current){if(h.current.has(m)){var i=h.current.get(m)[0];if(t&&_!==i)h.current.set(m,[_,b]);else continue}r.push(m)}if(t)for(const[m,_]of this.async_deriveds){const b=h.async_deriveds.get(m);b&&_.promise.then(b.resolve).catch(b.reject)}var n=[...h.current.keys()].filter(m=>!h.current.get(m)[1]);if(!(!O(h,Gi)||n.length===0)){var a=n.filter(m=>!this.current.has(m));if(a.length===0)t&&h.discard();else if(r.length>0){if(t)for(const m of O(this,ji))h.unskip_effect(m,_=>{var b;(_.f&(Ht|Ui))!==0?h.schedule(_):xe(b=h,ze,Ri).call(b,[_])});h.activate();var s=new Set,o=new Map;for(var l of r)bm(l,a,s,o);o=new Map;var d=[...h.current].filter(([m,_])=>{const b=this.current.get(m);return b?b[0]!==_[0]||b[1]!==_[1]:!0}).map(([m])=>m);if(d.length>0)for(const m of O(this,Fn))(m.f&(wt|ut|Wa))===0&&ku(m,d,o)&&((m.f&(Ui|Ht))!==0?(Ue(m,qe),h.schedule(m)):O(h,vr).add(m));if(O(h,pt).length>0&&!O(h,ci)){h.apply();for(var p of O(h,pt))xe(f=h,ze,Ho).call(f,p,[],[]);le(h,pt,[])}h.deactivate()}}}},Cn=function(){if(this.linked){var t=O(this,Ur),r=O(this,di);t===null?As=r:le(t,di,r),r===null?Ci=t:le(r,Ur,t),this.linked=!1}};let vi=ts;function Zw(){try{lw()}catch(e){Lr(e,Vo)}}let Gt=null;function Qd(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var i=e[r++];if((i.f&(wt|ut))===0&&Jn(i)&&(Gt=new Set,Qi(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&Bm(i),(Gt==null?void 0:Gt.size)>0)){fi.clear();for(const n of Gt){if((n.f&(wt|ut))!==0)continue;const a=[n];let s=n.parent;for(;s!==null;)Gt.has(s)&&(Gt.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const l=a[o];(l.f&(wt|ut))===0&&Qi(l)}}Gt.clear()}}Gt=null}}function bm(e,t,r,i){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const n of e.reactions){const a=n.f;(a&Xe)!==0?bm(n,t,r,i):(a&(Ui|Ht))!==0&&(a&qe)===0&&ku(n,t,i)&&(Ue(n,qe),Iu(n))}}function ku(e,t,r){const i=r.get(e);if(i!==void 0)return i;if(e.deps!==null)for(const n of e.deps){if(La.call(t,n))return!0;if((n.f&Xe)!==0&&ku(n,t,r))return r.set(n,!0),!0}return r.set(e,!1),!1}function Iu(e){de.schedule(e)}function vm(e,t){if(!((e.f&zt)!==0&&(e.f&Ve)!==0)){(e.f&qe)!==0?t.d.push(e):(e.f&Kt)!==0&&t.m.push(e),Ue(e,Ve);for(var r=e.first;r!==null;)vm(r,t),r=r.next}}function wm(e){Ue(e,Ve);for(var t=e.first;t!==null;)wm(t),t=t.next}let Va=new Set;const fi=new Map;let $m=!1;function qr(e,t){var r={f:0,v:e,reactions:null,equals:um,rv:0,wv:0};return r}function ft(e,t){const r=qr(e);return Dm(r),r}function Xw(e,t=!1,r=!0){var n;const i=qr(e);return t||(i.equals=lm),an&&r&&De!==null&&De.l!==null&&((n=De.l).s??(n.s=[])).push(i),i}function ve(e,t,r=!1){_e!==null&&(!jt||(_e.f&Wa)!==0)&&Xn()&&(_e.f&(Xe|Ht|Ui|Wa))!==0&&(ur===null||!ur.has(e))&&fw();let i=r?ai(t):t;return Yi(e,i,Ma)}function Yi(e,t,r=null){if(!e.equals(t)){fi.set(e,Ir?t:e.v);var i=vi.ensure();if(i.capture(e,t),(e.f&Xe)!==0){const n=e;(e.f&qe)!==0&&Su(n),Qe===null&&$u(n)}e.wv=Um(),xm(e,qe,r),Xn()&&ge!==null&&(ge.f&Ve)!==0&&(ge.f&(zt|kr))===0&&(kt===null?u$([e]):kt.push(e)),!i.is_fork&&Va.size>0&&!$m&&Yw()}return t}function Yw(){$m=!1;for(const e of Va){(e.f&Ve)!==0&&Ue(e,Kt);let t;try{t=Jn(e)}catch{t=!0}t&&Qi(e)}Va.clear()}function Jd(e,t=1){var r=re(e),i=t===1?r++:r--;return ve(e,r),i}function Dn(e){ve(e,e.v+1)}function xm(e,t,r){var i=e.reactions;if(i!==null)for(var n=Xn(),a=i.length,s=0;s<a;s++){var o=i[s],l=o.f;if(!(!n&&o===ge)){var d=(l&qe)===0;if(d&&Ue(o,t),(l&Wa)!==0)Va.add(o);else if((l&Xe)!==0){var p=o;Qe==null||Qe.delete(p),(l&bi)===0&&(l&Ct&&(ge===null||(ge.f&Ga)===0)&&(o.f|=bi),xm(p,Kt,r))}else if(d){var f=o;(l&Ht)!==0&&Gt!==null&&Gt.add(f),r!==null?r.push(f):Iu(f)}}}}function ai(e){if(typeof e!="object"||e===null||xr in e)return e;const t=_u(e);if(t!==Xv&&t!==Yv)return e;var r=new Map,i=gu(e),n=ft(0),a=mi,s=o=>{if(mi===a)return o();var l=_e,d=mi;At(null),nc(a);var p=o();return At(l),nc(d),p};return i&&r.set("length",ft(e.length)),new Proxy(e,{defineProperty(o,l,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&cw();var p=r.get(l);return p===void 0?s(()=>{var f=ft(d.value);return r.set(l,f),f}):ve(p,d.value,!0),!0},deleteProperty(o,l){var d=r.get(l);if(d===void 0){if(l in o){const p=s(()=>ft(Ge));r.set(l,p),Dn(n)}}else ve(d,Ge),Dn(n);return!0},get(o,l,d){var m;if(l===xr)return e;var p=r.get(l),f=l in o;if(p===void 0&&(!f||(m=Wr(o,l))!=null&&m.writable)&&(p=s(()=>{var _=ai(f?o[l]:Ge),b=ft(_);return b}),r.set(l,p)),p!==void 0){var h=re(p);return h===Ge?void 0:h}return Reflect.get(o,l,d)},getOwnPropertyDescriptor(o,l){var d=Reflect.getOwnPropertyDescriptor(o,l);if(d&&"value"in d){var p=r.get(l);p&&(d.value=re(p))}else if(d===void 0){var f=r.get(l),h=f==null?void 0:f.v;if(f!==void 0&&h!==Ge)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return d},has(o,l){var h;if(l===xr)return!0;var d=r.get(l),p=d!==void 0&&d.v!==Ge||Reflect.has(o,l);if(d!==void 0||ge!==null&&(!p||(h=Wr(o,l))!=null&&h.writable)){d===void 0&&(d=s(()=>{var m=p?ai(o[l]):Ge,_=ft(m);return _}),r.set(l,d));var f=re(d);if(f===Ge)return!1}return p},set(o,l,d,p){var I;var f=r.get(l),h=l in o;if(i&&l==="length")for(var m=d;m<f.v;m+=1){var _=r.get(m+"");_!==void 0?ve(_,Ge):m in o&&(_=s(()=>ft(Ge)),r.set(m+"",_))}if(f===void 0)(!h||(I=Wr(o,l))!=null&&I.writable)&&(f=s(()=>ft(void 0)),ve(f,ai(d)),r.set(l,f));else{h=f.v!==Ge;var b=s(()=>ai(d));ve(f,b)}var $=Reflect.getOwnPropertyDescriptor(o,l);if($!=null&&$.set&&$.set.call(p,d),!h){if(i&&typeof l=="string"){var v=r.get("length"),w=Number(l);Number.isInteger(w)&&w>=v.v&&ve(v,w+1)}Dn(n)}return!0},ownKeys(o){re(n);var l=Reflect.ownKeys(o).filter(f=>{var h=r.get(f);return h===void 0||h.v!==Ge});for(var[d,p]of r)p.v!==Ge&&!(d in o)&&l.push(d);return l},setPrototypeOf(){pw()}})}function ec(e){try{if(e!==null&&typeof e=="object"&&xr in e)return e[xr]}catch{}return e}function Qw(e,t){return Object.is(ec(e),ec(t))}var tc,Sm,km,Im;function Jw(){if(tc===void 0){tc=window,Sm=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;km=Wr(t,"firstChild").get,Im=Wr(t,"nextSibling").get,Zd(e)&&(e[Do]=void 0,e[Ra]=null,e[Po]=void 0,e.__e=void 0),Zd(r)&&(r[In]=void 0)}}function Sr(e=""){return document.createTextNode(e)}function Un(e){return km.call(e)}function Qn(e){return Im.call(e)}function Re(e,t){return Un(e)}function dr(e,t=!1){{var r=Un(e);return r instanceof Comment&&r.data===""?Qn(r):r}}function je(e,t=1,r=!1){let i=e;for(;t--;)i=Qn(i);return i}function e$(e){e.textContent=""}function Tm(){return!1}function Em(e,t,r){return t==null||t===om?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function Cm(e){ge===null&&(_e===null&&uw(),ow()),Ir&&sw()}function t$(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Yt(e,t){var r=ge;r!==null&&(r.f&ut)!==0&&(e|=ut);var i={ctx:De,deps:null,nodes:null,f:e|qe|Ct,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};de==null||de.register_created_effect(i);var n=i;if((e&Ki)!==0)Mi!==null?Mi.push(i):vi.ensure().schedule(i);else if(t!==null){try{Qi(i)}catch(s){throw et(i),s}n.deps===null&&n.teardown===null&&n.nodes===null&&n.first===n.last&&(n.f&nn)===0&&(n=n.first,(e&Ht)!==0&&(e&yi)!==0&&n!==null&&(n.f|=yi))}if(n!==null&&(n.parent=r,r!==null&&t$(n,r),_e!==null&&(_e.f&Xe)!==0&&(e&kr)===0)){var a=_e;(a.effects??(a.effects=[])).push(n)}return i}function Tu(){return _e!==null&&!jt}function Eu(e){const t=Yt(Kn,null);return Ue(t,Ve),t.teardown=e,t}function jo(e){Cm();var t=ge.f,r=!_e&&(t&zt)!==0&&De!==null&&!De.i;if(r){var i=De;(i.e??(i.e=[])).push(e)}else return zm(e)}function zm(e){return Yt(Ki|im,e)}function r$(e){return Cm(),Yt(Kn|im,e)}function i$(e){vi.ensure();const t=Yt(kr|nn,e);return(r={})=>new Promise(i=>{r.outro?hi(t,()=>{et(t),i(void 0)}):(et(t),i(void 0))})}function Am(e){return Yt(Ki,e)}function n$(e){return Yt(Ui|nn,e)}function a$(e,t=0){return Yt(Kn|t,e)}function rc(e,t=[],r=[],i=[]){fm(i,t,r,n=>{Yt(Kn,()=>{e(...n.map(re))})})}function ns(e,t=0){var r=Yt(Ht|t,e);return r}function Om(e,t=0){var r=Yt(yu|t,e);return r}function mt(e){return Yt(zt|nn,e)}function Rm(e){var t=e.teardown;if(t!==null){const r=Ir,i=_e;ic(!0),At(null);try{t.call(null)}finally{ic(r),At(i)}}}function Cu(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const n=r.ac;n!==null&&Yn(()=>{n.abort(Zn)});var i=r.next;(r.f&kr)!==0?r.parent=null:et(r,t),r=i}}function s$(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&zt)===0&&et(t),t=r}}function et(e,t=!0){var r=!1;(t||(e.f&tw)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(o$(e.nodes.start,e.nodes.end),r=!0),e.f|=Xd,Cu(e,t&&!r),Ln(e,0);var i=e.nodes&&e.nodes.t;if(i!==null)for(const a of i)a.stop();Rm(e),e.f^=Xd,e.f|=wt;var n=e.parent;n!==null&&n.first!==null&&Bm(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function o$(e,t){for(;e!==null;){var r=e===t?null:Qn(e);e.remove(),e=r}}function Bm(e){var t=e.parent,r=e.prev,i=e.next;r!==null&&(r.next=i),i!==null&&(i.prev=r),t!==null&&(t.first===e&&(t.first=i),t.last===e&&(t.last=r))}function hi(e,t,r=!0){var i=[];Nm(e,i,!0);var n=()=>{r&&et(e),t&&t()},a=i.length;if(a>0){var s=()=>--a||n();for(var o of i)o.out(s)}else n()}function Nm(e,t,r){if((e.f&ut)===0){e.f^=ut;var i=e.nodes&&e.nodes.t;if(i!==null)for(const o of i)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var a=n.next;if((n.f&kr)===0){var s=(n.f&yi)!==0||(n.f&zt)!==0&&(e.f&Ht)!==0;Nm(n,t,s?r:!1)}n=a}}}function Fa(e){Mm(e,!0)}function Mm(e,t){if((e.f&ut)!==0){e.f^=ut,(e.f&Ve)===0&&(Ue(e,qe),vi.ensure().schedule(e));for(var r=e.first;r!==null;){var i=r.next,n=(r.f&yi)!==0||(r.f&zt)!==0;Mm(r,n?t:!1),r=i}var a=e.nodes&&e.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function zu(e,t){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end;r!==null;){var n=r===i?null:Qn(r);t.append(r),r=n}}let Da=!1,Ir=!1;function ic(e){Ir=e}let _e=null,jt=!1;function At(e){_e=e}let ge=null;function Ot(e){ge=e}let ur=null;function Dm(e){_e!==null&&(ur??(ur=new Set)).add(e)}let ht=null,_t=0,kt=null;function u$(e){kt=e}let Pm=1,si=0,mi=si;function nc(e){mi=e}function Um(){return++Pm}function Jn(e){var t=e.f;if((t&qe)!==0)return!0;if(t&Xe&&(e.f&=~bi),(t&Kt)!==0){for(var r=e.deps,i=r.length,n=0;n<i;n++){var a=r[n];if(Jn(a)&&mm(a),a.wv>e.wv)return!0}(t&Ct)!==0&&Qe===null&&Ue(e,Ve)}return!1}function Lm(e,t,r=!0){var i=e.reactions;if(i!==null&&!(ur!==null&&ur.has(e)))for(var n=0;n<i.length;n++){var a=i[n];(a.f&Xe)!==0?Lm(a,t,!1):t===a&&(r?Ue(a,qe):(a.f&Ve)!==0&&Ue(a,Kt),Iu(a))}}function Wm(e){var b;var t=ht,r=_t,i=kt,n=_e,a=ur,s=De,o=jt,l=mi,d=e.f;ht=null,_t=0,kt=null,_e=(d&(zt|kr))===0?e:null,ur=null,Zi(e.ctx),jt=!1,mi=++si,e.ac!==null&&(Yn(()=>{e.ac.abort(Zn)}),e.ac=null);try{e.f|=Ga;var p=e.fn,f=p();e.f|=rn;var h=e.deps,m=de==null?void 0:de.is_fork;if(ht!==null){var _;if(m||Ln(e,_t),h!==null&&_t>0)for(h.length=_t+ht.length,_=0;_<ht.length;_++)h[_t+_]=ht[_];else e.deps=h=ht;if(Tu()&&(e.f&Ct)!==0)for(_=_t;_<h.length;_++)((b=h[_]).reactions??(b.reactions=[])).push(e)}else!m&&h!==null&&_t<h.length&&(Ln(e,_t),h.length=_t);if(Xn()&&kt!==null&&!jt&&h!==null&&(e.f&(Xe|Kt|qe))===0)for(_=0;_<kt.length;_++)Lm(kt[_],e);if(n!==null&&n!==e){if(si++,n.deps!==null)for(let $=0;$<r;$+=1)n.deps[$].rv=si;if(t!==null)for(const $ of t)$.rv=si;kt!==null&&(i===null?i=kt:i.push(...kt))}return(e.f&Gr)!==0&&(e.f^=Gr),f}catch($){return dm($)}finally{e.f^=Ga,ht=t,_t=r,kt=i,_e=n,ur=a,Zi(s),jt=o,mi=l}}function l$(e,t){let r=t.reactions;if(r!==null){var i=Kv.call(r,e);if(i!==-1){var n=r.length-1;n===0?r=t.reactions=null:(r[i]=r[n],r.pop())}}if(r===null&&(t.f&Xe)!==0&&(ht===null||!La.call(ht,t))){var a=t;(a.f&Ct)!==0&&(a.f^=Ct,a.f&=~bi),a.v!==Ge&&$u(a),a.ac!==null&&Yn(()=>{a.ac.abort(Zn),a.ac=null,Ue(a,qe)}),Hw(a),Ln(a,0)}}function Ln(e,t){var r=e.deps;if(r!==null)for(var i=t;i<r.length;i++)l$(e,r[i])}function Qi(e){var t=e.f;if((t&wt)===0){Ue(e,Ve);var r=ge,i=Da;ge=e,Da=(t&(zt|kr))===0;try{(t&(Ht|yu))!==0?s$(e):Cu(e),Rm(e);var n=Wm(e);e.teardown=typeof n=="function"?n:null,e.wv=Pm;var a;em&&zw&&(e.f&qe)!==0&&e.deps}finally{Da=i,ge=r}}}function re(e){var t=e.f,r=(t&Xe)!==0;if(_e!==null&&!jt){var i=ge!==null&&(ge.f&wt)!==0;if(!i&&(ur===null||!ur.has(e))){var n=_e.deps;if((_e.f&Ga)!==0)e.rv<si&&(e.rv=si,ht===null&&n!==null&&n[_t]===e?_t++:ht===null?ht=[e]:ht.push(e));else{_e.deps??(_e.deps=[]),La.call(_e.deps,e)||_e.deps.push(e);var a=e.reactions;a===null?e.reactions=[_e]:La.call(a,_e)||a.push(_e)}}}if(Ir&&fi.has(e))return fi.get(e);if(r){var s=e;if(Ir){var o=s.v;return((s.f&Ve)===0&&s.reactions!==null||qm(s))&&(o=Su(s)),fi.set(s,o),o}var l=(s.f&Ct)===0&&!jt&&_e!==null&&(Da||(_e.f&Ct)!==0),d=(s.f&rn)===0;Jn(s)&&(l&&(s.f|=Ct),mm(s)),l&&!d&&(gm(s),Gm(s))}if(Qe!=null&&Qe.has(e))return Qe.get(e);if((e.f&Gr)!==0)throw e.v;return e.v}function Gm(e){if(e.f|=Ct,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Xe)!==0&&(t.f&Ct)===0&&(gm(t),Gm(t))}function qm(e){if(e.v===Ge)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(fi.has(t)||(t.f&Xe)!==0&&qm(t))return!0;return!1}function Ji(e){var t=jt;try{return jt=!0,e()}finally{jt=t}}function Bi(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(xr in e)Ko(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&xr in r&&Ko(r)}}}function Ko(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let i in e)try{Ko(e[i],t)}catch{}const r=_u(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const i=tm(r);for(let n in i){const a=i[n].get;if(a)try{a.call(e)}catch{}}}}}function d$(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const c$=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function p$(e){return c$.includes(e)}const f$={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function h$(e){return e=e.toLowerCase(),f$[e]??e}const m$=["touchstart","touchmove"];function g$(e){return m$.includes(e)}const oi=Symbol("events"),Vm=new Set,Zo=new Set;function _$(e,t,r,i={}){function n(a){if(i.capture||Xo.call(t,a),!a.cancelBubble)return Yn(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?or(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function Fm(e,t,r){(t[oi]??(t[oi]={}))[e]=r}function Hm(e){for(var t=0;t<e.length;t++)Vm.add(e[t]);for(var r of Zo)r(e)}let ac=null;function Xo(e){var b,$;var t=this,r=t.ownerDocument,i=e.type,n=((b=e.composedPath)==null?void 0:b.call(e))||[],a=n[0]||e.target;ac=e;var s=0,o=ac===e&&e[oi];if(o){var l=n.indexOf(o);if(l!==-1&&(t===document||t===window)){e[oi]=t;return}var d=n.indexOf(t);if(d===-1)return;l<=d&&(s=l)}if(a=n[s]||e.target,a!==t){Zv(e,"currentTarget",{configurable:!0,get(){return a||r}});var p=_e,f=ge;At(null),Ot(null);try{for(var h,m=[];a!==null&&a!==t;){try{var _=($=a[oi])==null?void 0:$[i];_!=null&&(!a.disabled||e.target===a)&&_.call(a,e)}catch(v){h?m.push(v):h=v}if(e.cancelBubble)break;s++,a=s<n.length?n[s]:null}if(h){for(let v of m)queueMicrotask(()=>{throw v});throw h}}finally{e[oi]=t,delete e.currentTarget,At(p),Ot(f)}}}var Qh;const Rs=((Qh=globalThis==null?void 0:globalThis.window)==null?void 0:Qh.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function y$(e){return(Rs==null?void 0:Rs.createHTML(e))??e}function jm(e){var t=Em("template");return t.innerHTML=y$(e.replaceAll("<!>","<!---->")),t.content}function as(e,t){var r=ge;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function Km(e,t){var r=(t&xw)!==0,i,n=!e.startsWith("<!>");return()=>{i===void 0&&(i=jm(n?e:"<!>"+e),i=Un(i));var a=r||Sm?document.importNode(i,!0):i.cloneNode(!0);return as(a,a),a}}function b$(e,t,r="svg"){var i=!e.startsWith("<!>"),n=`<${r}>${i?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var s=jm(n),o=Un(s);a=Un(o)}var l=a.cloneNode(!0);return as(l,l),l}}function v$(e,t){return b$(e,t,"svg")}function cr(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Sr();return e.append(t,r),as(t,r),e}function xt(e,t){e!==null&&e.before(t)}function zi(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[In]??(e[In]=e.nodeValue))&&(e[In]=r,e.nodeValue=`${r}`)}function w$(e,t){return $$(e,t)}const ya=new Map;function $$(e,{target:t,anchor:r,props:i={},events:n,context:a,intro:s=!0,transformError:o}){Jw();var l=void 0,d=i$(()=>{var p=r??t.appendChild(Sr());Pw(p,{pending:()=>{}},m=>{vu({});var _=De;a&&(_.c=a),n&&(i.$$events=n),l=e(m,i)||{},wu()},o);var f=new Set,h=m=>{for(var _=0;_<m.length;_++){var b=m[_];if(!f.has(b)){f.add(b);var $=g$(b);for(const I of[t,document]){var v=ya.get(I);v===void 0&&(v=new Map,ya.set(I,v));var w=v.get(b);w===void 0?(I.addEventListener(b,Xo,{passive:$}),v.set(b,1)):v.set(b,w+1)}}}};return h(is(Vm)),Zo.add(h),()=>{var $;for(var m of f)for(const v of[t,document]){var _=ya.get(v),b=_.get(m);--b==0?(v.removeEventListener(m,Xo),_.delete(m),_.size===0&&ya.delete(v)):_.set(m,b)}Zo.delete(h),p!==r&&(($=p.parentNode)==null||$.removeChild(p))}});return x$.set(l,d),l}let x$=new WeakMap;var Vt,ar,bt,pi,Hn,jn,rs;class Zm{constructor(t,r=!0){lt(this,"anchor");pe(this,Vt,new Map);pe(this,ar,new Map);pe(this,bt,new Map);pe(this,pi,new Set);pe(this,Hn,!0);pe(this,jn,t=>{if(O(this,Vt).has(t)){var r=O(this,Vt).get(t),i=O(this,ar).get(r);if(i)Fa(i),O(this,pi).delete(r);else{var n=O(this,bt).get(r);n&&(Fa(n.effect),O(this,ar).set(r,n.effect),O(this,bt).delete(r),n.fragment.lastChild.remove(),this.anchor.before(n.fragment),i=n.effect)}for(const[a,s]of O(this,Vt)){if(O(this,Vt).delete(a),a===t)break;const o=O(this,bt).get(s);o&&(et(o.effect),O(this,bt).delete(s))}for(const[a,s]of O(this,ar)){if(a===r||O(this,pi).has(a))continue;const o=()=>{if(Array.from(O(this,Vt).values()).includes(a)){var d=document.createDocumentFragment();zu(s,d),d.append(Sr()),O(this,bt).set(a,{effect:s,fragment:d})}else et(s);O(this,pi).delete(a),O(this,ar).delete(a)};O(this,Hn)||!i?(O(this,pi).add(a),hi(s,o,!1)):o()}}});pe(this,rs,t=>{O(this,Vt).delete(t);const r=Array.from(O(this,Vt).values());for(const[i,n]of O(this,bt))r.includes(i)||(et(n.effect),O(this,bt).delete(i))});this.anchor=t,le(this,Hn,r)}ensure(t,r){var i=de,n=Tm();if(r&&!O(this,ar).has(t)&&!O(this,bt).has(t))if(n){var a=document.createDocumentFragment(),s=Sr();a.append(s),O(this,bt).set(t,{effect:mt(()=>r(s)),fragment:a})}else O(this,ar).set(t,mt(()=>r(this.anchor)));if(O(this,Vt).set(i,t),n){for(const[o,l]of O(this,ar))o===t?i.unskip_effect(l):i.skip_effect(l);for(const[o,l]of O(this,bt))o===t?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(O(this,jn)),i.ondiscard(O(this,rs))}else O(this,jn).call(this,i)}}Vt=new WeakMap,ar=new WeakMap,bt=new WeakMap,pi=new WeakMap,Hn=new WeakMap,jn=new WeakMap,rs=new WeakMap;function S$(e,t,r=!1){var i=new Zm(e),n=r?yi:0;function a(s,o){i.ensure(s,o)}ns(()=>{var s=!1;t((o,l=0)=>{s=!0,a(l,o)}),s||a(-1,null)},n)}function Xm(e,t){return t}function k$(e,t,r){for(var i=[],n=t.length,a,s=t.length,o=0;o<n;o++){let f=t[o];hi(f,()=>{if(a){if(a.pending.delete(f),a.done.add(f),a.pending.size===0){var h=e.outrogroups;Yo(e,is(a.done)),h.delete(a),h.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=i.length===0&&r!==null;if(l){var d=r,p=d.parentNode;e$(p),p.append(d),e.items.clear()}Yo(e,t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function Yo(e,t,r=!0){var i;if(e.pending.size>0){i=new Set;for(const s of e.pending.values())for(const o of s)i.add(e.items.get(o).e)}for(var n=0;n<t.length;n++){var a=t[n];if(i!=null&&i.has(a)){a.f|=sr;const s=document.createDocumentFragment();zu(a,s)}else et(t[n],r)}}var sc;function Ym(e,t,r,i,n,a=null){var s=e,o=new Map,l=(t&am)!==0;if(l){var d=e;s=d.appendChild(Sr())}var p=null,f=xu(()=>{var I=r();return gu(I)?I:I==null?[]:is(I)}),h,m=new Map,_=!0;function b(I){(w.effect.f&wt)===0&&(w.pending.delete(I),w.fallback=p,I$(w,h,s,t,i),p!==null&&(h.length===0?(p.f&sr)===0?Fa(p):(p.f^=sr,zn(p,null,s)):hi(p,()=>{p=null})))}function $(I){w.pending.delete(I)}var v=ns(()=>{h=re(f);for(var I=h.length,k=new Set,T=de,C=Tm(),z=0;z<I;z+=1){var x=h[z],N=i(x,z),P=_?null:o.get(N);P?(P.v&&Yi(P.v,x),P.i&&Yi(P.i,z),C&&T.unskip_effect(P.e)):(P=T$(o,_?s:sc??(sc=Sr()),x,N,z,n,t,r),_||(P.e.f|=sr),o.set(N,P)),k.add(N)}if(I===0&&a&&!p&&(_?p=mt(()=>a(s)):(p=mt(()=>a(sc??(sc=Sr()))),p.f|=sr)),I>k.size&&aw(),!_)if(m.set(T,k),C){for(const[V,H]of o)k.has(V)||T.skip_effect(H.e);T.oncommit(b),T.ondiscard($)}else b(T);re(f)}),w={effect:v,items:o,pending:m,outrogroups:null,fallback:p};_=!1}function pn(e){for(;e!==null&&(e.f&zt)===0;)e=e.next;return e}function I$(e,t,r,i,n){var P,V,H,j,R,Z,X,Q,he;var a=(i&_w)!==0,s=t.length,o=e.items,l=pn(e.effect.first),d,p=null,f,h=[],m=[],_,b,$,v;if(a)for(v=0;v<s;v+=1)_=t[v],b=n(_,v),$=o.get(b).e,($.f&sr)===0&&((V=(P=$.nodes)==null?void 0:P.a)==null||V.measure(),(f??(f=new Set)).add($));for(v=0;v<s;v+=1){if(_=t[v],b=n(_,v),$=o.get(b).e,e.outrogroups!==null)for(const L of e.outrogroups)L.pending.delete($),L.done.delete($);if(($.f&ut)!==0&&(Fa($),a&&((j=(H=$.nodes)==null?void 0:H.a)==null||j.unfix(),(f??(f=new Set)).delete($))),($.f&sr)!==0)if($.f^=sr,$===l)zn($,null,r);else{var w=p?p.next:l;$===e.effect.last&&(e.effect.last=$.prev),$.prev&&($.prev.next=$.next),$.next&&($.next.prev=$.prev),Br(e,p,$),Br(e,$,w),zn($,w,r),p=$,h=[],m=[],l=pn(p.next);continue}if($!==l){if(d!==void 0&&d.has($)){if(h.length<m.length){var I=m[0],k;p=I.prev;var T=h[0],C=h[h.length-1];for(k=0;k<h.length;k+=1)zn(h[k],I,r);for(k=0;k<m.length;k+=1)d.delete(m[k]);Br(e,T.prev,C.next),Br(e,p,T),Br(e,C,I),l=I,p=C,v-=1,h=[],m=[]}else d.delete($),zn($,l,r),Br(e,$.prev,$.next),Br(e,$,p===null?e.effect.first:p.next),Br(e,p,$),p=$;continue}for(h=[],m=[];l!==null&&l!==$;)(d??(d=new Set)).add(l),m.push(l),l=pn(l.next);if(l===null)continue}($.f&sr)===0&&h.push($),p=$,l=pn($.next)}if(e.outrogroups!==null){for(const L of e.outrogroups)L.pending.size===0&&(Yo(e,is(L.done)),(R=e.outrogroups)==null||R.delete(L));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||d!==void 0){var z=[];if(d!==void 0)for($ of d)($.f&ut)===0&&z.push($);for(;l!==null;)(l.f&ut)===0&&l!==e.fallback&&z.push(l),l=pn(l.next);var x=z.length;if(x>0){var N=(i&am)!==0&&s===0?r:null;if(a){for(v=0;v<x;v+=1)(X=(Z=z[v].nodes)==null?void 0:Z.a)==null||X.measure();for(v=0;v<x;v+=1)(he=(Q=z[v].nodes)==null?void 0:Q.a)==null||he.fix()}k$(e,z,N)}}a&&or(()=>{var L,oe;if(f!==void 0)for($ of f)(oe=(L=$.nodes)==null?void 0:L.a)==null||oe.apply()})}function T$(e,t,r,i,n,a,s,o){var l=(s&mw)!==0?(s&yw)===0?Xw(r,!1,!1):qr(r):null,d=(s&gw)!==0?qr(n):null;return{v:l,i:d,e:mt(()=>(a(t,l??r,d??n,o),()=>{e.delete(i)}))}}function zn(e,t,r){if(e.nodes)for(var i=e.nodes.start,n=e.nodes.end,a=t&&(t.f&sr)===0?t.nodes.start:r;i!==null;){var s=Qn(i);if(a.before(i),i===n)return;i=s}}function Br(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function pr(e,t,r,i,n){var o;var a=(o=t.$$slots)==null?void 0:o[r],s=!1;a===!0&&(a=t.children,s=!0),a===void 0||a(e,s?()=>i:i)}function E$(e,t,r,i,n,a){var s=null,o=e,l=new Zm(o,!1);ns(()=>{const d=t()||null;var p=Sw;if(d===null){l.ensure(null,null);return}return l.ensure(d,f=>{if(d){if(s=Em(d,p),as(s,s),i){var h=null,m=s.appendChild(Sr());i(s,m),h==null||h.remove()}ge.nodes.end=s,f.before(s)}}),()=>{}},yi),Eu(()=>{})}function C$(e,t){var r=void 0,i;Om(()=>{r!==(r=t())&&(i&&(et(i),i=null),r&&(i=mt(()=>{Am(()=>r(e))})))})}function Qm(e){var t,r,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(r=Qm(e[t]))&&(i&&(i+=" "),i+=r)}else for(r in e)e[r]&&(i&&(i+=" "),i+=r);return i}function z$(){for(var e,t,r=0,i="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=Qm(e))&&(i&&(i+=" "),i+=t);return i}function Jm(e){return typeof e=="object"?z$(e):e??""}const oc=[...` 	
\r\f \v\uFEFF`];function A$(e,t,r){var i=e==null?"":""+e;if(r){for(var n of Object.keys(r))if(r[n])i=i?i+" "+n:n;else if(i.length)for(var a=n.length,s=0;(s=i.indexOf(n,s))>=0;){var o=s+a;(s===0||oc.includes(i[s-1]))&&(o===i.length||oc.includes(i[o]))?i=(s===0?"":i.substring(0,s))+i.substring(o+1):s=o}}return i===""?null:i}function uc(e,t=!1){var r=t?" !important;":";",i="";for(var n of Object.keys(e)){var a=e[n];a!=null&&a!==""&&(i+=" "+n+": "+a+r)}return i}function Bs(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function O$(e,t){if(t){var r="",i,n;if(Array.isArray(t)?(i=t[0],n=t[1]):i=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,s=0,o=!1,l=[];i&&l.push(...Object.keys(i).map(Bs)),n&&l.push(...Object.keys(n).map(Bs));var d=0,p=-1;const b=e.length;for(var f=0;f<b;f++){var h=e[f];if(o?h==="/"&&e[f-1]==="*"&&(o=!1):a?a===h&&(a=!1):h==="/"&&e[f+1]==="*"?o=!0:h==='"'||h==="'"?a=h:h==="("?s++:h===")"&&s--,!o&&a===!1&&s===0){if(h===":"&&p===-1)p=f;else if(h===";"||f===b-1){if(p!==-1){var m=Bs(e.substring(d,p).trim());if(!l.includes(m)){h!==";"&&f++;var _=e.substring(d,f).trim();r+=" "+_+";"}}d=f+1,p=-1}}}}return i&&(r+=uc(i)),n&&(r+=uc(n,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function An(e,t,r,i,n,a){var s=e[Do];if(s!==r||s===void 0){var o=A$(r,i,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[Do]=r}else if(a&&n!==a)for(var l in a){var d=!!a[l];(n==null||d!==!!n[l])&&e.classList.toggle(l,d)}return a}function Ns(e,t={},r,i){for(var n in r){var a=r[n];t[n]!==a&&(r[n]==null?e.style.removeProperty(n):e.style.setProperty(n,a,i))}}function R$(e,t,r,i){var n=e[Po];if(n!==t){var a=O$(t,i);a==null?e.removeAttribute("style"):e.style.cssText=a,e[Po]=t}else i&&(Array.isArray(i)?(Ns(e,r==null?void 0:r[0],i[0]),Ns(e,r==null?void 0:r[1],i[1],"important")):Ns(e,r,i));return i}function Qo(e,t,r=!1){if(e.multiple){if(t==null)return;if(!gu(t))return Tw();for(var i of e.options)i.selected=t.includes(lc(i));return}for(i of e.options){var n=lc(i);if(Qw(n,t)){i.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function B$(e){var t=new MutationObserver(()=>{"__value"in e&&Qo(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Eu(()=>{t.disconnect()})}function lc(e){return"__value"in e?e.__value:e.value}const fn=Symbol("class"),hn=Symbol("style"),eg=Symbol("is custom element"),tg=Symbol("is html"),N$=bu?"input":"INPUT",M$=bu?"option":"OPTION",D$=bu?"select":"SELECT";function P$(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ms(e,t,r,i){var n=rg(e);n[t]!==(n[t]=r)&&(t==="loading"&&(e[rw]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ig(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function U$(e,t,r,i,n=!1,a=!1){var s=rg(e),o=s[eg],l=!s[tg],d=t||{},p=e.nodeName===M$;for(var f in t)f in r||(r[f]=null);r.class?r.class=Jm(r.class):r[fn]&&(r.class=null),r[hn]&&(r.style??(r.style=null));var h=ig(e);if(e.nodeName===N$&&"type"in r&&("value"in r||"__value"in r)){var m=r.type;(m!==d.type||m===void 0&&e.hasAttribute("type"))&&(d.type=m,Ms(e,"type",m))}for(const k in r){let T=r[k];if(p&&k==="value"&&T==null){e.value=e.__value="",d[k]=T;continue}if(k==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";An(e,_,T,i,t==null?void 0:t[fn],r[fn]),d[k]=T,d[fn]=r[fn];continue}if(k==="style"){R$(e,T,t==null?void 0:t[hn],r[hn]),d[k]=T,d[hn]=r[hn];continue}var b=d[k];if(!(T===b&&!(T===void 0&&e.hasAttribute(k)))){d[k]=T;var $=k[0]+k[1];if($!=="$$")if($==="on"){const C={},z="$$"+k;let x=k.slice(2);var v=p$(x);if(d$(x)&&(x=x.slice(0,-7),C.capture=!0),!v&&b){if(T!=null)continue;e.removeEventListener(x,d[z],C),d[z]=null}if(v)Fm(x,e,T),Hm([x]);else if(T!=null){let N=function(P){d[k].call(this,P)};d[z]=_$(x,e,N,C)}}else if(k==="style")Ms(e,k,T);else if(k==="autofocus")Nw(e,!!T);else if(!o&&(k==="__value"||k==="value"&&T!=null))e.value=e.__value=T;else if(k==="selected"&&p)P$(e,T);else{var w=k;l||(w=h$(w));var I=w==="defaultValue"||w==="defaultChecked";if(T==null&&!o&&!I)if(s[k]=null,w==="value"||w==="checked"){let C=e;const z=t===void 0;if(w==="value"){let x=C.defaultValue;C.removeAttribute(w),C.defaultValue=x,C.value=C.__value=z?x:null}else{let x=C.defaultChecked;C.removeAttribute(w),C.defaultChecked=x,C.checked=z?x:!1}}else e.removeAttribute(k);else I||h.includes(w)&&(o||typeof T!="string")?(e[w]=T,w in s&&(s[w]=Ge)):typeof T!="function"&&Ms(e,w,T)}}}return d}function dc(e,t,r=[],i=[],n=[],a,s=!1,o=!1){fm(n,r,i,l=>{var d=void 0,p={},f=e.nodeName===D$,h=!1;if(Om(()=>{var _=t(...l.map(re)),b=U$(e,d,_,a,s,o);h&&f&&"value"in _&&Qo(e,_.value);for(let v of Object.getOwnPropertySymbols(p))_[v]||et(p[v]);for(let v of Object.getOwnPropertySymbols(_)){var $=_[v];v.description===kw&&(!d||$!==d[v])&&(p[v]&&et(p[v]),p[v]=mt(()=>C$(e,()=>$))),b[v]=$}d=b}),f){var m=e;Am(()=>{Qo(m,d.value,!0),B$(m)})}h=!0})}function rg(e){return e[Ra]??(e[Ra]={[eg]:e.nodeName.includes("-"),[tg]:e.namespaceURI===om})}var cc=new Map;function ig(e){var t=e.getAttribute("is")||e.nodeName,r=cc.get(t);if(r)return r;cc.set(t,r=[]);for(var i,n=e,a=Element.prototype;a!==n;){i=tm(n);for(var s in i)i[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&r.push(s);n=_u(n)}return r}function L$(e=!1){const t=De,r=t.l.u;if(!r)return;let i=()=>Bi(t.s);if(e){let n=0,a={};const s=Xi(()=>{let o=!1;const l=t.s;for(const d in l)l[d]!==a[d]&&(a[d]=l[d],o=!0);return o&&n++,n});i=()=>re(s)}r.b.length&&r$(()=>{pc(t,i),No(r.b)}),jo(()=>{const n=Ji(()=>r.m.map(Jv));return()=>{for(const a of n)typeof a=="function"&&a()}}),r.a.length&&jo(()=>{pc(t,i),No(r.a)})}function pc(e,t){if(e.l.s)for(const r of e.l.s)re(r);t()}const W$={get(e,t){if(!e.exclude.includes(t))return re(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var i=ge;try{Ot(e.parent_effect),e.special[t]=ti({get[t](){return e.props[t]}},t,sm)}finally{Ot(i)}}return e.special[t](r),Jd(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Jd(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Xt(e,t){return new Proxy({props:e,exclude:t,special:{},version:qr(0),parent_effect:ge},W$)}const G$={get(e,t){let r=e.props.length;for(;r--;){let i=e.props[r];if(cn(i)&&(i=i()),typeof i=="object"&&i!==null&&t in i)return i[t]}},set(e,t,r){let i=e.props.length;for(;i--;){let n=e.props[i];cn(n)&&(n=n());const a=Wr(n,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let i=e.props[r];if(cn(i)&&(i=i()),typeof i=="object"&&i!==null&&t in i){const n=Wr(i,t);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,t){if(t===xr||t===nm)return!1;for(let r of e.props)if(cn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(cn(r)&&(r=r()),!!r){for(const i in r)t.includes(i)||t.push(i);for(const i of Object.getOwnPropertySymbols(r))t.includes(i)||t.push(i)}return t}};function Tr(...e){return new Proxy({props:e},G$)}function ti(e,t,r,i){var k;var n=!an||(r&vw)!==0,a=(r&ww)!==0,s=(r&$w)!==0,o=i,l=!0,d=void 0,p=()=>s&&n?(d??(d=Xi(i)),re(d)):(l&&(l=!1,o=s?Ji(i):i),o);let f;if(a){var h=xr in e||nm in e;f=((k=Wr(e,t))==null?void 0:k.set)??(h&&t in e?T=>e[t]=T:void 0)}var m,_=!1;a?[m,_]=Bw(()=>e[t]):m=e[t],m===void 0&&i!==void 0&&(m=p(),f&&(n&&dw(),f(m)));var b;if(n?b=()=>{var T=e[t];return T===void 0?p():(l=!0,T)}:b=()=>{var T=e[t];return T!==void 0&&(o=void 0),T===void 0?o:T},n&&(r&sm)===0)return b;if(f){var $=e.$$legacy;return(function(T,C){return arguments.length>0?((!n||!C||$||_)&&f(C?b():T),T):b()})}var v=!1,w=((r&bw)!==0?Xi:xu)(()=>(v=!1,b()));a&&re(w);var I=ge;return(function(T,C){if(arguments.length>0){const z=C?re(w):n&&a?ai(T):T;return ve(w,z),v=!0,o!==void 0&&(o=z),T}return Ir&&v||(I.f&wt)!==0?w.v:re(w)})}function q$(e){De===null&&iw(),an&&De.l!==null?V$(De).m.push(e):jo(()=>{const t=Ji(e);if(typeof t=="function")return t})}function V$(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const F$="5";var Jh;typeof window<"u"&&((Jh=window.__svelte??(window.__svelte={})).v??(Jh.v=new Set)).add(F$);Aw();/**
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
 */const H$={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var j$=v$("<svg><!><!></svg>");function Er(e,t){const r=Xt(t,["children","$$slots","$$events","$$legacy"]),i=Xt(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);vu(t,!1);let n=ti(t,"name",8,void 0),a=ti(t,"color",8,"currentColor"),s=ti(t,"size",8,24),o=ti(t,"strokeWidth",8,2),l=ti(t,"absoluteStrokeWidth",8,!1),d=ti(t,"iconNode",24,()=>[]);const p=(..._)=>_.filter((b,$,v)=>!!b&&v.indexOf(b)===$).join(" ");L$();var f=j$();dc(f,(_,b)=>({...H$,...i,width:s(),height:s(),stroke:a(),"stroke-width":_,class:b}),[()=>(Bi(l()),Bi(o()),Bi(s()),Ji(()=>l()?Number(o())*24/Number(s()):o())),()=>(Bi(n()),Bi(r),Ji(()=>p("lucide-icon","lucide",n()?`lucide-${n()}`:"",r.class)))]);var h=Re(f);Ym(h,1,d,Xm,(_,b)=>{var $=qo(()=>ew(re(b),2));let v=()=>re($)[0],w=()=>re($)[1];var I=cr(),k=dr(I);E$(k,v,!0,(T,C)=>{dc(T,()=>({...w()}))}),xt(_,I)});var m=je(h);pr(m,t,"default",{}),xt(e,f),wu()}function K$(e,t){const r=Xt(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];Er(e,Tr({name:"activity"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=cr(),o=dr(s);pr(o,t,"default",{}),xt(n,s)},$$slots:{default:!0}}))}function Z$(e,t){const r=Xt(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];Er(e,Tr({name:"mic-off"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=cr(),o=dr(s);pr(o,t,"default",{}),xt(n,s)},$$slots:{default:!0}}))}function X$(e,t){const r=Xt(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];Er(e,Tr({name:"mic"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=cr(),o=dr(s);pr(o,t,"default",{}),xt(n,s)},$$slots:{default:!0}}))}function Y$(e,t){const r=Xt(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19"}]];Er(e,Tr({name:"radio"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=cr(),o=dr(s);pr(o,t,"default",{}),xt(n,s)},$$slots:{default:!0}}))}function Q$(e,t){const r=Xt(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];Er(e,Tr({name:"shield"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=cr(),o=dr(s);pr(o,t,"default",{}),xt(n,s)},$$slots:{default:!0}}))}function J$(e,t){const r=Xt(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]];Er(e,Tr({name:"sparkles"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=cr(),o=dr(s);pr(o,t,"default",{}),xt(n,s)},$$slots:{default:!0}}))}function e1(e,t){const r=Xt(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]];Er(e,Tr({name:"terminal"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=cr(),o=dr(s);pr(o,t,"default",{}),xt(n,s)},$$slots:{default:!0}}))}function t1(e,t){const r=Xt(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];Er(e,Tr({name:"volume-2"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=cr(),o=dr(s);pr(o,t,"default",{}),xt(n,s)},$$slots:{default:!0}}))}function r1(e,t){const r=Xt(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];Er(e,Tr({name:"zap"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=cr(),o=dr(s);pr(o,t,"default",{}),xt(n,s)},$$slots:{default:!0}}))}function i1(e){const t=new Int16Array(e.length);for(let r=0;r<e.length;r++){const i=Math.max(-1,Math.min(1,e[r]));t[r]=i<0?i*32768:i*32767}return t}function n1(e){const t=new Uint8Array(e.buffer);let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return btoa(r)}async function a1(e,t=()=>{}){t("capture:start");const r=await navigator.mediaDevices.getUserMedia({audio:{sampleRate:16e3,channelCount:1,echoCancellation:!0,noiseSuppression:!0}});t(`capture:permission-ok tracks=${r.getAudioTracks().length}`);const i=new AudioContext({sampleRate:16e3});await i.resume(),t(`capture:context state=${i.state} rate=${i.sampleRate}`);const n="/jarvis/pcm-worklet.js";await i.audioWorklet.addModule(n),t(`capture:worklet-loaded url=${n}`);const a=i.createMediaStreamSource(r),s=new AudioWorkletNode(i,"pcm-processor"),o=i.createGain();o.gain.value=0;let l=!0;return s.port.onmessage=d=>{l&&(l=!1,t(`capture:first-chunk samples=${d.data.length}`));const p=i1(d.data);e(n1(p))},a.connect(s),s.connect(o),o.connect(i.destination),t("capture:graph-connected"),()=>{try{a.disconnect(),s.disconnect(),o.disconnect(),r.getTracks().forEach(d=>d.stop()),i.close()}catch{}}}function s1(e){const t=atob(e),r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return new Int16Array(r.buffer)}function o1(e){const t=new Float32Array(e.length);for(let r=0;r<e.length;r++)t[r]=e[r]/32768;return t}function u1(){let e=null,t=0,r=!1;function i(){return(!e||e.state==="closed")&&(e=new AudioContext({sampleRate:24e3})),e.state==="suspended"&&e.resume(),e}function n(l){const d=i(),p=s1(l),f=o1(p),h=d.createBuffer(1,f.length,24e3);h.copyToChannel(f,0);const m=d.createBufferSource();m.buffer=h,m.connect(d.destination);const _=d.currentTime;t<_&&(t=_),m.start(t),t+=h.duration,r=!0}function a(){t=0,r=!1,e&&(e.close().catch(()=>{}),e=null)}function s(){return r}function o(){a()}return{play:n,stop:a,close:o,isPlaying:s}}/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Au=Object.defineProperty,l1=Object.getOwnPropertyDescriptor,d1=Object.getOwnPropertyNames,c1=Object.prototype.hasOwnProperty,p1=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),U=(e,t)=>()=>(e&&(t=e(e=0)),t),sn=(e,t)=>{for(var r in t)Au(e,r,{get:t[r],enumerable:!0})},f1=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of d1(t))!c1.call(e,n)&&n!==r&&Au(e,n,{get:()=>t[n],enumerable:!(i=l1(t,n))||i.enumerable});return e},Wn=e=>f1(Au({},"__esModule",{value:!0}),e),mn,Nr,Di,fc,ng,ag=U(()=>{mn=new Map,Nr=[],Di=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=mn.get(e);if(i===void 0)mn.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=Nr.indexOf(e);n!==-1&&Nr.splice(n,1);for(let a=0;a<Nr.length;a++)if(mn.get(Nr[a]).priority<=r){Nr.splice(a,0,e);return}Nr.push(e)}return}throw new TypeError("not a valid backend")},fc=async e=>{let t=mn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ng=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?Nr:r,n,a=[],s=new Set;for(let l of i){let d=await fc(l);typeof d=="string"?a.push({name:l,err:d}):(n||(n=d),n===d&&s.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${a.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of a)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),h1=U(()=>{ag()}),sg,m1=U(()=>{sg="1.27.0"}),Ds,Ke,og=U(()=>{m1(),Ds="warning",Ke={wasm:{},webgl:{},webgpu:{},versions:{common:sg},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ds=e}},get logLevel(){return Ds}},Object.defineProperty(Ke,"logLevel",{enumerable:!0})}),Ce,g1=U(()=>{og(),Ce=Ke}),ug,lg,_1=U(()=>{ug=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[3]):(n=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let p=a*n,f=0,h=p,m=p*2,_=-1;s==="RGBA"?(f=0,h=p,m=p*2,_=p*3):s==="RGB"?(f=0,h=p,m=p*2):s==="RBG"&&(f=0,m=p,h=p*2);for(let b=0;b<a;b++)for(let $=0;$<n;$++){let v=(e.data[f++]-d[0])*l[0],w=(e.data[h++]-d[1])*l[1],I=(e.data[m++]-d[2])*l[2],k=_===-1?255:(e.data[_++]-d[3])*l[3];i.fillStyle="rgba("+v+","+w+","+I+","+k+")",i.fillRect($,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},lg=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[1],s=e.dims[3]):(n=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let f=a*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,m=0,_=1,b=2,$=3,v=0,w=f,I=f*2,k=-1;o==="RGBA"?(v=0,w=f,I=f*2,k=f*3):o==="RGB"?(v=0,w=f,I=f*2):o==="RBG"&&(v=0,I=f,w=f*2),i=r.createImageData(n,a);for(let T=0;T<a*n;m+=h,_+=h,b+=h,$+=h,T++)i.data[m]=(e.data[v++]-p[0])*d[0],i.data[_]=(e.data[w++]-p[1])*d[1],i.data[b]=(e.data[I++]-p[2])*d[2],i.data[$]=k===-1?255:(e.data[k++]-p[3])*d[3]}else throw new Error("Can not access image data");return i}}),ba,dg,cg,pg,fg,hg,y1=U(()=>{Ou(),ba=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},a,s;typeof n.mean=="number"?a=[n.mean,n.mean,n.mean,n.mean]:a=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,p=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,h=0,m=1,_=2,b=3,$=0,v=d,w=d*2,I=-1;o==="RGB"&&(f=3,h=0,m=1,_=2,b=-1),l==="RGBA"?I=d*3:l==="RBG"?($=0,w=d,v=d*2):l==="BGR"&&(w=0,v=d,$=d*2);for(let k=0;k<d;k++,h+=f,_+=f,m+=f,b+=f)p[$++]=(e[h]+s[0])/a[0],p[v++]=(e[m]+s[1])/a[1],p[w++]=(e[_]+s[2])/a[2],I!==-1&&b!==-1&&(p[I++]=(e[b]+s[3])/a[3]);return l==="RGBA"?new vt("float32",p,[1,4,r,i]):new vt("float32",p,[1,3,r,i])},dg=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(r){let p=l();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let h=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=m}else o.tensorFormat="RGBA",o.height=h,o.width=m;f.drawImage(e,0,0),s=f.getImageData(0,0,m,h).data}else throw new Error("Can not access image data")}else if(i){let p,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,f=t.resizedWidth):(p=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=f,t!==void 0){let h=l();h.width=f,h.height=p;let m=d(h);if(m!=null)m.putImageData(e,0,0),s=m.getImageData(0,0,f,p).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=l();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let h=e.height,m=e.width;return f.drawImage(e,0,0,m,h),s=f.getImageData(0,0,m,h).data,o.height=h,o.width=m,ba(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((p,f)=>{let h=l(),m=d(h);if(!e||!m)return f();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{h.width=_.width,h.height=_.height,m.drawImage(_,0,0,h.width,h.height);let b=m.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,p(ba(b.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return ba(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},cg=(e,t)=>{let{width:r,height:i,download:n,dispose:a}=t,s=[1,i,r,4];return new vt({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:a})},pg=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new vt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:a})},fg=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new vt({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:a})},hg=(e,t,r)=>new vt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),ri,On,Ps,mg,b1=U(()=>{ri=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),On=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ps=!1,mg=()=>{if(!Ps){Ps=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(ri.set("int64",BigInt64Array),On.set(BigInt64Array,"int64")),t&&(ri.set("uint64",BigUint64Array),On.set(BigUint64Array,"uint64")),i?(ri.set("float16",r),On.set(r,"float16")):ri.set("float16",Uint16Array)}}}),gg,_g,v1=U(()=>{Ou(),gg=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},_g=(e,t)=>{switch(e.location){case"cpu":return new vt(e.type,e.data,t);case"cpu-pinned":return new vt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new vt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new vt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new vt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),vt,Ou=U(()=>{_1(),y1(),b1(),v1(),vt=class{constructor(e,t,r){mg();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=ri.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=ri.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=On.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");n=o,this.cpuData=s,this.dataLocation="cpu"}let a=gg(n);if(this.cpuData&&a!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=a}static async fromImage(e,t){return dg(e,t)}static fromTexture(e,t){return cg(e,t)}static fromGpuBuffer(e,t){return pg(e,t)}static fromMLTensor(e,t){return fg(e,t)}static fromPinnedBuffer(e,t,r){return hg(e,t,r)}toDataURL(e){return ug(this,e)}toImageData(e){return lg(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return _g(this,e)}}}),Je,yg=U(()=>{Ou(),Je=vt}),Ha,Us,lr,Zt,gi,_i,bg=U(()=>{og(),Ha=(e,t)=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||console.timeStamp(`${e}::ORT::${t}`)},Us=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Ha("CPU",s);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},lr=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||Us("BEGIN",e)},Zt=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||Us("END",e)},gi=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||console.time(`ORT::${e}`)},_i=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||console.timeEnd(`ORT::${e}`)}}),vg,w1=U(()=>{ag(),yg(),bg(),vg=class wg{constructor(t){this.handler=t}async run(t,r,i){lr(),gi("InferenceSession.run");let n={},a={};if(typeof t!="object"||t===null||t instanceof Je||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Je)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,p=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(p.indexOf(f)!==-1){let h=r[f];(h===null||h instanceof Je)&&(d=!0,s=!1,n[f]=h)}if(d){if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)n[d]=null;let o=await this.handler.run(t,n,a),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let p=o[d];p instanceof Je?l[d]=p:l[d]=new Je(p.type,p.data,p.dims)}return _i("InferenceSession.run"),Zt(),l}async release(){return this.handler.dispose()}static async create(t,r,i,n){lr(),gi("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,f=0,h=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(h=t.byteLength-f,typeof i=="number"){if(h=i,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||f+h>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-f}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(p,f,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await ng(s),d=await o.createInferenceSessionHandler(a,l);return _i("InferenceSession.create"),Zt(),new wg(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Li,$1=U(()=>{w1(),Li=vg}),x1=U(()=>{}),S1=U(()=>{}),k1=U(()=>{}),I1=U(()=>{}),T1={};sn(T1,{InferenceSession:()=>Li,TRACE:()=>Ha,TRACE_EVENT_BEGIN:()=>gi,TRACE_EVENT_END:()=>_i,TRACE_FUNC_BEGIN:()=>lr,TRACE_FUNC_END:()=>Zt,Tensor:()=>Je,env:()=>Ce,registerBackend:()=>Di});var Rt=U(()=>{h1(),g1(),$1(),yg(),x1(),S1(),bg(),k1(),I1()}),Ru=U(()=>{}),$g={};sn($g,{default:()=>xg});var Ls,Ws,xg,E1=U(()=>{var e;Ey(),Si(),Bu(),Ls="ort-wasm-proxy-worker",Ws=((e=globalThis.self)==null?void 0:e.name)===Ls,Ws&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":Nu(i.wasm).then(()=>{Qu(i).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:a}=i;Ju(a,n).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:n}=i,a=Ja(n);postMessage({type:r,out:a});break}case"create":{let{model:n,options:a}=i;el(n,a).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":tl(i),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:a,inputs:s,outputIndices:o,options:l}=i;rl(n,a,s,o,new Array(o.length).fill(null),l).then(d=>{d.some(p=>p[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},nl([...s,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":il(i),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),xg=Ws?null:t=>new Worker(t??gt,{type:"module",name:Ls})}),Sg={};sn(Sg,{default:()=>kg});async function hc(e={}){var Hd,jd;var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&((Hd=self.name)==null?void 0:Hd.startsWith("em-pthread"));t.mountExternalData=(u,c)=>{u.startsWith("./")&&(u=u.substring(2)),(t.Xc||(t.Xc=new Map)).set(u,c)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=u=>async(...c)=>{var y;try{if(t.Yc)throw Error("Session already started");let g=t.Yc={Kd:c[0],errors:[]},S=await u(...c);if(t.Yc!==g)throw Error("Session mismatch");(y=t.dd)==null||y.flush();let E=g.errors;if(0<E.length){let A=await Promise.all(E);if(A=A.filter(M=>M),0<A.length)throw Error(A.join(`
`))}return S}finally{t.Yc=null}};t.jsepInit=(u,c)=>{if(u==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=c;let y=t.dd;t.jsepRegisterBuffer=(g,S,E,A)=>y.registerBuffer(g,S,E,A),t.jsepGetBuffer=g=>y.getBuffer(g),t.jsepCreateDownloader=(g,S,E)=>y.createDownloader(g,S,E),t.jsepOnCreateSession=g=>{y.onCreateSession(g)},t.jsepOnReleaseSession=g=>{y.onReleaseSession(g)},t.jsepOnRunStart=g=>y.onRunStart(g),t.Id=(g,S)=>{y.upload(g,S)}}else if(u==="webnn"){let y=c[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=c.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=g=>y.onRunStart(g),t.webnnOnRunEnd=y.onRunEnd.bind(y),t.webnnOnReleaseSession=g=>{y.onReleaseSession(g)},t.webnnCreateMLTensorDownloader=(g,S)=>y.createMLTensorDownloader(g,S),t.webnnRegisterMLTensor=(g,S,E,A)=>y.registerMLTensor(g,S,E,A),t.webnnCreateMLContext=g=>y.createMLContext(g),t.webnnRegisterMLConstant=(g,S,E,A,M,q)=>y.registerMLConstant(g,S,E,A,M,t.Xc,q),t.webnnRegisterGraphInput=y.registerGraphInput.bind(y),t.webnnIsGraphInput=y.isGraphInput.bind(y),t.webnnRegisterGraphOutput=y.registerGraphOutput.bind(y),t.webnnIsGraphOutput=y.isGraphOutput.bind(y),t.webnnCreateTemporaryTensor=y.createTemporaryTensor.bind(y),t.webnnIsGraphInputOutputTypeSupported=y.isGraphInputOutputTypeSupported.bind(y)}};let s=()=>{let u=c=>(...y)=>{let g=tr;return y=c(...y),tr!=g?new Promise((S,E)=>{_s={resolve:S,reject:E}}):y};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[c]=u(t[c])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,l,d=(u,c)=>{throw c},p=import.meta.url,f="";if(r||i){try{f=new URL(".",p).href}catch{}i&&(l=u=>{var c=new XMLHttpRequest;return c.open("GET",u,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),o=async u=>{if(z(u))return new Promise((y,g)=>{var S=new XMLHttpRequest;S.open("GET",u,!0),S.responseType="arraybuffer",S.onload=()=>{S.status==200||S.status==0&&S.response?y(S.response):g(S.status)},S.onerror=g,S.send(null)});var c=await fetch(u,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var h,m,_,b,$,v,w=console.log.bind(console),I=console.error.bind(console),k=w,T=I,C=!1,z=u=>u.startsWith("file://");function x(){Bt.buffer!=P.buffer&&F()}if(n){let u=function(c){try{var y=c.data,g=y.Sc;if(g==="load"){let S=[];self.onmessage=E=>S.push(E),v=()=>{postMessage({Sc:"loaded"});for(let E of S)u(E);self.onmessage=u};for(let E of y.xd)t[E]&&!t[E].proxy||(t[E]=(...A)=>{postMessage({Sc:"callHandler",wd:E,args:A})},E=="print"&&(k=t[E]),E=="printErr"&&(T=t[E]));Bt=y.Od,F(),m=y.Pd,it(),ga()}else if(g==="run"){(function(S){var E=(x(),Z)[S+52>>>2>>>0];S=(x(),Z)[S+56>>>2>>>0],rd(E,E-S),ce(E)})(y.Rc),$s(y.Rc,0,0,1,0,0),ta(),hs(y.Rc),N||(Xl(),N=!0);try{os(y.Md,y.bd)}catch(S){if(S!="unwind")throw S}}else y.target!=="setimmediate"&&(g==="checkMailbox"?N&&la():g&&(T(`worker: received unknown command ${g}`),T(y)))}catch(S){throw Yl(),S}};var N=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=u}var P,V,H,j,R,Z,X,Q,he,L,oe,W=!1;function F(){var u=Bt.buffer;t.HEAP8=P=new Int8Array(u),H=new Int16Array(u),t.HEAPU8=V=new Uint8Array(u),j=new Uint16Array(u),t.HEAP32=R=new Int32Array(u),t.HEAPU32=Z=new Uint32Array(u),X=new Float32Array(u),Q=new Float64Array(u),he=new BigInt64Array(u),L=new BigUint64Array(u)}function Y(){W=!0,n?v():mr.sb()}function G(u){throw T(u="Aborted("+u+")"),C=!0,u=new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info."),$==null||$(u),u}function we(){return{a:{ma:ov,gb:sv,g:Nt,J:na,f:Wy,o:Gy,h:qy,ha:Vy,b:Fy,T:Hy,Ha:ll,n:jy,$:fl,Xa:hl,Da:ml,Fa:gl,Ya:_l,Va:yl,Oa:bl,Ua:vl,ka:wl,Ea:$l,Ba:xl,Wa:Sl,Ca:kl,bb:Ky,ea:Zy,wa:Xy,ua:Qy,da:eb,O:tb,H:rb,va:ib,_:db,xa:cb,Ra:pb,za:hb,Ia:mb,sa:gb,fa:_b,Qa:hs,_a:yb,R:$b,r:Tb,c:ps,hb:Eb,y:Cb,M:zb,D:Ab,l:Ob,s:Rl,ib:Rb,I:Bb,S:Nb,j:Mb,u:Db,q:Pb,k:Ub,La:Lb,Ma:Wb,Na:Gb,Ja:Dl,Ka:Pl,ta:Ul,db:Vb,ab:Hb,v:jb,aa:Kb,ga:Zb,$a:Fb,W:Xb,Za:Yb,Aa:Qb,F:qb,U:Jb,la:ha,ya:tv,fb:ev,eb:rv,Sa:ql,Ta:Vl,Ga:Hr,V:Fl,ja:Hl,Pa:jl,ia:Kl,kb:qv,na:Pv,lb:Gv,oa:Dv,G:Ev,e:cv,t:lv,w:uv,B:wv,mb:Bv,K:kv,x:hv,pa:Nv,Y:Uv,ba:Rv,nb:Ov,ob:Av,P:$v,qa:zv,pb:Cv,N:Iv,Z:Mv,d:dv,A:fv,m:pv,jb:Vv,p:gv,z:_v,C:mv,E:yv,L:xv,qb:Tv,Q:Lv,ca:Sv,X:Wv,rb:vv,ra:bv,i:nv,a:Bt,cb:at}}}async function it(){function u(g,S){var E=mr=g.exports;g={};for(let[A,M]of Object.entries(E))typeof M=="function"?(E=bb(M),g[A]=E):g[A]=M;return mr=g,mr=(function(){var A=mr,M=K=>ue=>K(ue)>>>0,q=K=>()=>K()>>>0;return(A=Object.assign({},A)).tb=M(A.tb),A.Xb=q(A.Xb),A.Zb=M(A.Zb),A.lc=M(A.lc),A.mc=q(A.mc),A.qc=M(A.qc),A})(),on.push(mr._b),Zl=(g=mr).tb,Xl=g.ub,t._OrtInit=g.vb,t._OrtGetLastError=g.wb,t._OrtCreateSessionOptions=g.xb,t._OrtAppendExecutionProvider=g.yb,t._OrtAddFreeDimensionOverride=g.zb,t._OrtAddSessionConfigEntry=g.Ab,t._OrtReleaseSessionOptions=g.Bb,t._OrtCreateSession=g.Cb,t._OrtReleaseSession=g.Db,t._OrtGetInputOutputCount=g.Eb,t._OrtGetInputOutputMetadata=g.Fb,t._OrtFree=g.Gb,t._OrtCreateTensor=g.Hb,t._OrtGetTensorData=g.Ib,t._OrtReleaseTensor=g.Jb,t._OrtCreateRunOptions=g.Kb,t._OrtAddRunConfigEntry=g.Lb,t._OrtReleaseRunOptions=g.Mb,t._OrtCreateBinding=g.Nb,t._OrtBindInput=g.Ob,t._OrtBindOutput=g.Pb,t._OrtClearBoundOutputs=g.Qb,t._OrtReleaseBinding=g.Rb,t._OrtRunWithBinding=g.Sb,t._OrtRun=g.Tb,t._OrtEndProfiling=g.Ub,t._JsepOutput=g.Vb,t._JsepGetNodeName=g.Wb,ma=g.Xb,rr=t._free=g.Yb,ln=t._malloc=g.Zb,$s=g.ac,Yl=g.bc,Ql=g.cc,Jl=g.dc,xs=g.ec,ed=g.fc,td=g.gc,me=g.hc,dn=g.ic,rd=g.jc,ce=g.kc,Ss=g.lc,fe=g.mc,id=g.nc,ks=g.oc,nd=g.pc,ad=g.qc,sd=g.rc,Is=g.sc,od=g.tc,ud=g.uc,ld=g.vc,dd=g.wc,cd=g.xc,pd=g.yc,fd=g.zc,hd=g.Ac,md=g.Bc,gd=g.Cc,_d=g.Dc,yd=g.Ec,bd=g.Fc,vd=g.Gc,wd=g.Hc,$d=g.Ic,xd=g.Jc,Sd=g.Kc,kd=g.Lc,Id=g.Mc,Td=g.Nc,Ed=g.Pc,Cd=g.Qc,zd=g.$c,Ad=g.ad,Od=g.fd,Rd=g.jd,Bd=g.kd,Nd=g.ld,Md=g.md,Dd=g.nd,Pd=g.od,Ud=g.pd,Ld=g.qd,Wd=g.vd,Gd=g.Td,qd=g.Ud,Vd=g.Vd,Fd=g.Wd,m=S,mr}var c,y=we();return t.instantiateWasm?new Promise(g=>{t.instantiateWasm(y,(S,E)=>{g(u(S,E))})}):n?u(new WebAssembly.Instance(m,we()),m):(oe??(oe=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",f):f+"ort-wasm-simd-threaded.jsep.wasm":new URL("/jarvis/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href),c=await(async function(g){var S=oe;if(!h&&!z(S))try{var E=fetch(S,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,g)}catch(A){T(`wasm streaming compile failed: ${A}`),T("falling back to ArrayBuffer instantiation")}return(async function(A,M){try{var q=await(async function(K){if(!h)try{var ue=await o(K);return new Uint8Array(ue)}catch{}if(K==oe&&h)K=new Uint8Array(h);else{if(!l)throw"both async and sync fetching of the wasm failed";K=l(K)}return K})(A);return await WebAssembly.instantiate(q,M)}catch(K){T(`failed to asynchronously prepare wasm: ${K}`),G(K)}})(S,g)})(y),u(c.instance,c.module))}class Ne{constructor(c){lt(this,"name","ExitStatus");this.message=`Program terminated with exit(${c})`,this.status=c}}var He=u=>{u.terminate(),u.onmessage=()=>{}},Ye=[],nt=0,tt=null,Qt=u=>{Jt.length==0&&(ia(),ra(Jt[0]));var c=Jt.pop();if(!c)return 6;zr.push(c),fr[u.Rc]=c,c.Rc=u.Rc;var y={Sc:"run",Md:u.Ld,bd:u.bd,Rc:u.Rc};return c.postMessage(y,u.rd),0},Te=0,ne=(u,c,...y)=>{var g,S=16*y.length,E=fe(),A=Ss(S),M=A>>>3;for(g of y)typeof g=="bigint"?((x(),he)[M++>>>0]=1n,(x(),he)[M++>>>0]=g):((x(),he)[M++>>>0]=0n,(x(),Q)[M++>>>0]=g);return u=Ql(u,0,S,A,c),ce(E),u};function at(u){if(n)return ne(0,1,u);if(_=u,!(0<Te)){for(var c of zr)He(c);for(c of Jt)He(c);Jt=[],zr=[],fr={},C=!0}d(0,new Ne(u))}function Ii(u){if(n)return ne(1,0,u);Hr(u)}var Hr=u=>{if(_=u,n)throw Ii(u),"unwind";at(u)},Jt=[],zr=[],on=[],fr={},ea=u=>{var c=u.Rc;delete fr[c],Jt.push(u),zr.splice(zr.indexOf(u),1),u.Rc=0,Jl(c)};function ta(){on.forEach(u=>u())}var ra=u=>new Promise(c=>{u.onmessage=S=>{var E=S.data;if(S=E.Sc,E.Zc&&E.Zc!=ma()){var A=fr[E.Zc];A?A.postMessage(E,E.rd):T(`Internal error! Worker sent a message "${S}" to target pthread ${E.Zc}, but that thread no longer exists!`)}else S==="checkMailbox"?la():S==="spawnThread"?Qt(E):S==="cleanupThread"?ua(()=>{ea(fr[E.Nd])}):S==="loaded"?(u.loaded=!0,c(u)):E.target==="setimmediate"?u.postMessage(E):S==="uncaughtException"?u.onerror(E.error):S==="callHandler"?t[E.wd](...E.args):S&&T(`worker sent an unknown command ${S}`)},u.onerror=S=>{throw T(`worker sent an error! ${S.filename}:${S.lineno}: ${S.message}`),S};var y,g=[];for(y of[])t.propertyIsEnumerable(y)&&g.push(y);u.postMessage({Sc:"load",xd:g,Od:Bt,Pd:m})});function ia(){var u=new Worker((()=>{let c=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new c("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Jt.push(u)}var Bt,os=(u,c)=>{Te=0,u=Is(u,c),0<Te?_=u:xs(u)},Ti=[],be=0;function Nt(u){var c=new us(u>>>=0);return(x(),P)[c.Tc+12>>>0]==0&&(aa(c,!0),be--),sa(c,!1),Ti.push(c),ad(u)}var Le=0,na=()=>{me(0,0);var u=Ti.pop();id(u.cd),Le=0};function aa(u,c){c=c?1:0,(x(),P)[u.Tc+12>>>0]=c}function sa(u,c){c=c?1:0,(x(),P)[u.Tc+13>>>0]=c}class us{constructor(c){this.cd=c,this.Tc=c-24}}var ls=u=>{var c=Le;if(!c)return dn(0),0;var y=new us(c);(x(),Z)[y.Tc+16>>>2>>>0]=c;var g=(x(),Z)[y.Tc+4>>>2>>>0];if(!g)return dn(0),c;for(var S of u){if(S===0||S===g)break;if(nd(S,g,y.Tc+16))return dn(S),c}return dn(g),c};function Wy(){return ls([])}function Gy(u){return ls([u>>>0])}function qy(u,c,y,g){return ls([u>>>0,c>>>0,y>>>0,g>>>0])}var Vy=()=>{var u=Ti.pop();u||G("no exception to throw");var c=u.cd;throw(x(),P)[u.Tc+13>>>0]==0&&(Ti.push(u),sa(u,!0),aa(u,!1),be++),ks(c),Le=c};function Fy(u,c,y){var g=new us(u>>>=0);throw c>>>=0,y>>>=0,(x(),Z)[g.Tc+16>>>2>>>0]=0,(x(),Z)[g.Tc+4>>>2>>>0]=c,(x(),Z)[g.Tc+8>>>2>>>0]=y,ks(u),be++,Le=u}var Hy=()=>be;function ul(u,c,y,g){return n?ne(2,1,u,c,y,g):ll(u,c,y,g)}function ll(u,c,y,g){if(u>>>=0,c>>>=0,y>>>=0,g>>>=0,!globalThis.SharedArrayBuffer)return 6;var S=[];return n&&S.length===0?ul(u,c,y,g):(u={Ld:y,Rc:u,bd:g,rd:S},n?(u.Sc="spawnThread",postMessage(u,S),0):Qt(u))}function jy(u){throw Le||(Le=u>>>0),Le}var dl=globalThis.TextDecoder&&new TextDecoder,cl=(u,c,y,g)=>{if(y=c+y,g)return y;for(;u[c]&&!(c>=y);)++c;return c},pl=(u,c=0,y,g)=>{if(16<(y=cl(u,c>>>=0,y,g))-c&&u.buffer&&dl)return dl.decode(u.buffer instanceof ArrayBuffer?u.subarray(c,y):u.slice(c,y));for(g="";c<y;){var S=u[c++];if(128&S){var E=63&u[c++];if((224&S)==192)g+=String.fromCharCode((31&S)<<6|E);else{var A=63&u[c++];65536>(S=(240&S)==224?(15&S)<<12|E<<6|A:(7&S)<<18|E<<12|A<<6|63&u[c++])?g+=String.fromCharCode(S):(S-=65536,g+=String.fromCharCode(55296|S>>10,56320|1023&S))}}else g+=String.fromCharCode(S)}return g},We=(u,c,y)=>(u>>>=0)?pl((x(),V),u,c,y):"";function fl(u,c,y){return n?ne(3,1,u,c,y):0}function hl(u,c){if(n)return ne(4,1,u,c)}function ml(u,c){if(n)return ne(5,1,u,c)}function gl(u,c,y){if(n)return ne(6,1,u,c,y)}function _l(u,c,y){return n?ne(7,1,u,c,y):0}function yl(u,c){if(n)return ne(8,1,u,c)}function bl(u,c,y){if(n)return ne(9,1,u,c,y)}function vl(u,c,y,g){if(n)return ne(10,1,u,c,y,g)}function wl(u,c,y,g){if(n)return ne(11,1,u,c,y,g)}function $l(u,c,y,g){if(n)return ne(12,1,u,c,y,g)}function xl(u){if(n)return ne(13,1,u)}function Sl(u,c){if(n)return ne(14,1,u,c)}function kl(u,c,y){if(n)return ne(15,1,u,c,y)}var Ky=()=>G(""),er=u=>{u>>>=0;for(var c="";;){var y=(x(),V)[u++>>>0];if(!y)return c;c+=String.fromCharCode(y)}},ds={},cs={},Ei=class extends Error{constructor(u){super(u),this.name="BindingError"}};function hr(u,c,y={}){return(function(g,S,E={}){var A=S.name;if(!g)throw new Ei(`type "${A}" must have a positive integer typeid pointer`);if(cs.hasOwnProperty(g)){if(E.yd)return;throw new Ei(`Cannot register type '${A}' twice`)}cs[g]=S,ds.hasOwnProperty(g)&&(S=ds[g],delete ds[g],S.forEach(M=>M()))})(u,c,y)}var Il=(u,c,y)=>{switch(c){case 1:return y?g=>(x(),P)[g>>>0]:g=>(x(),V)[g>>>0];case 2:return y?g=>(x(),H)[g>>>1>>>0]:g=>(x(),j)[g>>>1>>>0];case 4:return y?g=>(x(),R)[g>>>2>>>0]:g=>(x(),Z)[g>>>2>>>0];case 8:return y?g=>(x(),he)[g>>>3>>>0]:g=>(x(),L)[g>>>3>>>0];default:throw new TypeError(`invalid integer width (${c}): ${u}`)}};function Zy(u,c,y,g,S){u>>>=0,y>>>=0,c=er(c>>>0);let E=A=>A;if(g=g===0n){let A=8*y;E=M=>BigInt.asUintN(A,M),S=E(S)}hr(u,{name:c,Oc:E,Vc:(A,M)=>(typeof M=="number"&&(M=BigInt(M)),M),Uc:Il(c,y,!g),Wc:null})}function Xy(u,c,y,g){hr(u>>>=0,{name:c=er(c>>>0),Oc:function(S){return!!S},Vc:function(S,E){return E?y:g},Uc:function(S){return this.Oc((x(),V)[S>>>0])},Wc:null})}var Tl=[],jr=[0,1,,1,null,1,!0,1,!1,1];function ps(u){9<(u>>>=0)&&--jr[u+1]===0&&(jr[u]=void 0,Tl.push(u))}var St=u=>{if(!u)throw new Ei(`Cannot use deleted val. handle = ${u}`);return jr[u]},Mt=u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=Tl.pop()||jr.length;return jr[c]=u,jr[c+1]=1,c}};function fs(u){return this.Oc((x(),Z)[u>>>2>>>0])}var Yy={name:"emscripten::val",Oc:u=>{var c=St(u);return ps(u),c},Vc:(u,c)=>Mt(c),Uc:fs,Wc:null};function Qy(u){return hr(u>>>0,Yy)}var Jy=(u,c)=>{switch(c){case 4:return function(y){return this.Oc((x(),X)[y>>>2>>>0])};case 8:return function(y){return this.Oc((x(),Q)[y>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${u}`)}};function eb(u,c,y){y>>>=0,hr(u>>>=0,{name:c=er(c>>>0),Oc:g=>g,Vc:(g,S)=>S,Uc:Jy(c,y),Wc:null})}function tb(u,c,y,g,S){u>>>=0,y>>>=0,c=er(c>>>0);let E=M=>M;if(g===0){var A=32-8*y;E=M=>M<<A>>>A,S=E(S)}hr(u,{name:c,Oc:E,Vc:(M,q)=>q,Uc:Il(c,y,g!==0),Wc:null})}function rb(u,c,y){function g(E){var A=(x(),Z)[E>>>2>>>0];return E=(x(),Z)[E+4>>>2>>>0],new S((x(),P).buffer,E,A)}var S=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];hr(u>>>=0,{name:y=er(y>>>0),Oc:g,Uc:g},{yd:!0})}var Ar=(u,c,y)=>{var g=(x(),V);if(c>>>=0,0<y){var S=c;y=c+y-1;for(var E=0;E<u.length;++E){var A=u.codePointAt(E);if(127>=A){if(c>=y)break;g[c++>>>0]=A}else if(2047>=A){if(c+1>=y)break;g[c++>>>0]=192|A>>6,g[c++>>>0]=128|63&A}else if(65535>=A){if(c+2>=y)break;g[c++>>>0]=224|A>>12,g[c++>>>0]=128|A>>6&63,g[c++>>>0]=128|63&A}else{if(c+3>=y)break;g[c++>>>0]=240|A>>18,g[c++>>>0]=128|A>>12&63,g[c++>>>0]=128|A>>6&63,g[c++>>>0]=128|63&A,E++}}g[c>>>0]=0,u=c-S}else u=0;return u},oa=u=>{for(var c=0,y=0;y<u.length;++y){var g=u.charCodeAt(y);127>=g?c++:2047>=g?c+=2:55296<=g&&57343>=g?(c+=4,++y):c+=3}return c};function ib(u,c){hr(u>>>=0,{name:c=er(c>>>0),Oc(y){var g=(x(),Z)[y>>>2>>>0];return g=We(y+4,g,!0),rr(y),g},Vc(y,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var S=typeof g=="string";if(!(S||ArrayBuffer.isView(g)&&g.BYTES_PER_ELEMENT==1))throw new Ei("Cannot pass non-string to std::string");var E=S?oa(g):g.length,A=ln(4+E+1),M=A+4;return(x(),Z)[A>>>2>>>0]=E,S?Ar(g,M,E+1):(x(),V).set(g,M>>>0),y!==null&&y.push(rr,A),A},Uc:fs,Wc(y){rr(y)}})}var El=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,nb=(u,c,y)=>{if(u>>>=1,16<(c=cl((x(),j),u,c/2,y))-u&&El)return El.decode((x(),j).slice(u,c));for(y="";u<c;++u){var g=(x(),j)[u>>>0];y+=String.fromCharCode(g)}return y},ab=(u,c,y)=>{if(y??(y=2147483647),2>y)return 0;var g=c;y=(y-=2)<2*u.length?y/2:u.length;for(var S=0;S<y;++S){var E=u.charCodeAt(S);(x(),H)[c>>>1>>>0]=E,c+=2}return(x(),H)[c>>>1>>>0]=0,c-g},sb=u=>2*u.length,ob=(u,c,y)=>{var g="";u>>>=2;for(var S=0;!(S>=c/4);S++){var E=(x(),Z)[u+S>>>0];if(!E&&!y)break;g+=String.fromCodePoint(E)}return g},ub=(u,c,y)=>{if(c>>>=0,y??(y=2147483647),4>y)return 0;var g=c;y=g+y-4;for(var S=0;S<u.length;++S){var E=u.codePointAt(S);if(65535<E&&S++,(x(),R)[c>>>2>>>0]=E,(c+=4)+4>y)break}return(x(),R)[c>>>2>>>0]=0,c-g},lb=u=>{for(var c=0,y=0;y<u.length;++y)65535<u.codePointAt(y)&&y++,c+=4;return c};function db(u,c,y){if(u>>>=0,c>>>=0,y=er(y>>>=0),c===2)var g=nb,S=ab,E=sb;else g=ob,S=ub,E=lb;hr(u,{name:y,Oc:A=>{var M=(x(),Z)[A>>>2>>>0];return M=g(A+4,M*c,!0),rr(A),M},Vc:(A,M)=>{if(typeof M!="string")throw new Ei(`Cannot pass non-string to C++ string type ${y}`);var q=E(M),K=ln(4+q+c);return(x(),Z)[K>>>2>>>0]=q/c,S(M,K+4,q+c),A!==null&&A.push(rr,K),K},Uc:fs,Wc(A){rr(A)}})}function cb(u,c){hr(u>>>=0,{zd:!0,name:c=er(c>>>0),Oc:()=>{},Vc:()=>{}})}function pb(u){$s(u>>>0,!i,1,!r,131072,!1),ta()}var ua=u=>{if(!C)try{if(u(),!(0<Te))try{n?ma()&&xs(_):Hr(_)}catch(c){c instanceof Ne||c=="unwind"||d(0,c)}}catch(c){c instanceof Ne||c=="unwind"||d(0,c)}},fb=!Atomics.waitAsync||((jd=globalThis.navigator)==null?void 0:jd.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function hs(u){u>>>=0,fb||(Atomics.waitAsync((x(),R),u>>>2,u).value.then(la),u+=128,Atomics.store((x(),R),u>>>2,1))}var la=()=>ua(()=>{var u=ma();u&&(hs(u),td())});function hb(u,c){(u>>>=0)==c>>>0?setTimeout(la):n?postMessage({Zc:u,Sc:"checkMailbox"}):(u=fr[u])&&u.postMessage({Sc:"checkMailbox"})}var ms=[];function mb(u,c,y,g,S){for(c>>>=0,S>>>=0,ms.length=0,y=S>>>3,g=S+g>>>3;y<g;){var E;E=(x(),he)[y++>>>0]?(x(),he)[y++>>>0]:(x(),Q)[y++>>>0],ms.push(E)}return(c?Ts[c]:av[u])(...ms)}var gb=()=>{Te=0};function _b(u){u>>>=0,n?postMessage({Sc:"cleanupThread",Nd:u}):ea(fr[u])}function yb(u){}var da=u=>{try{u()}catch(c){G(c)}};function bb(u){var c=(...y)=>{ca.push(u);try{return u(...y)}finally{C||(ca.pop(),tr&&Or===1&&ca.length===0&&(Or=0,Te+=1,da(qd),typeof Fibers<"u"&&Fibers.Zd()))}};return Al.set(u,c),c}var Or=0,tr=null,Cl=0,ca=[],gs=new Map,zl=new Map,Al=new Map,vb=0,_s=null,wb=[],Ol=u=>(function(c){if(!C){if(Or===0){var y=!1,g=!1;c((S=0)=>{if(!C&&(Cl=S,y=!0,g)){Or=2,da(()=>Vd(tr)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),S=!1;try{var E=(function(){var q=(x(),R)[tr+8>>>2>>>0];return q=zl.get(q),q=Al.get(q),--Te,q()})()}catch(q){E=q,S=!0}var A=!1;if(!tr){var M=_s;M&&(_s=null,(S?M.reject:M.resolve)(E),A=!0)}if(S&&!A)throw E}}),g=!0,y||(Or=1,tr=(function(){var S=ln(65548),E=S+12;if((x(),Z)[S>>>2>>>0]=E,(x(),Z)[S+4>>>2>>>0]=E+65536,E=ca[0],!gs.has(E)){var A=vb++;gs.set(E,A),zl.set(A,E)}return E=gs.get(E),(x(),R)[S+8>>>2>>>0]=E,S})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),da(()=>Gd(tr)))}else Or===2?(Or=0,da(Fd),rr(tr),tr=null,wb.forEach(ua)):G(`invalid state: ${Or}`);return Cl}})(c=>{u().then(c)});function $b(u){return u>>>=0,Ol(async()=>{var c=await St(u);return Mt(c)})}var ys=[],xb=u=>{var c=ys.length;return ys.push(u),c},Sb=(u,c)=>{for(var y=Array(u),g=0;g<u;++g){var S=g,E=(x(),Z)[c+4*g>>>2>>>0],A=cs[E];if(A===void 0)throw u=`parameter ${g}`,E=Zl(E),c=er(E),rr(E),new Ei(`${u} has unknown type ${c}`);y[S]=A}return y},kb=(u,c,y)=>{var g=[];return u=u(g,y),g.length&&((x(),Z)[c>>>2>>>0]=Mt(g)),u},Ib={},pa=u=>{var c=Ib[u];return c===void 0?er(u):c};function Tb(u,c,y){var[g,...S]=Sb(u,c>>>0);c=g.Vc.bind(g);var E=S.map(q=>q.Uc.bind(q));u--;var A={toValue:St};switch(u=E.map((q,K)=>{var ue=`argFromPtr${K}`;return A[ue]=q,`${ue}(args${K?"+"+8*K:""})`}),y){case 0:var M="toValue(handle)";break;case 2:M="new (toValue(handle))";break;case 3:M="";break;case 1:A.getStringOrSymbol=pa,M="toValue(handle)[getStringOrSymbol(methodName)]"}return M+=`(${u})`,g.zd||(A.toReturnWire=c,A.emval_returnValue=kb,M=`return emval_returnValue(toReturnWire, destructorsRef, ${M})`),M=`return function (handle, methodName, destructorsRef, args) {
  ${M}
  }`,y=new Function(Object.keys(A),M)(...Object.values(A)),M=`methodCaller<(${S.map(q=>q.name)}) => ${g.name}>`,xb(Object.defineProperty(y,"name",{value:M}))}function Eb(u,c){return c>>>=0,(u=St(u>>>0))==St(c)}function Cb(u){return(u>>>=0)?(u=pa(u),Mt(globalThis[u])):Mt(globalThis)}function zb(u){return u=pa(u>>>0),Mt(t[u])}function Ab(u,c){return c>>>=0,u=St(u>>>0),c=St(c),Mt(u[c])}function Ob(u){9<(u>>>=0)&&(jr[u+1]+=1)}function Rl(u,c,y,g,S){return ys[u>>>0](c>>>0,y>>>0,g>>>0,S>>>0)}function Rb(u,c,y,g,S){return Rl(u>>>0,c>>>0,y>>>0,g>>>0,S>>>0)}function Bb(){return Mt([])}function Nb(u){u=St(u>>>0);for(var c=Array(u.length),y=0;y<u.length;y++)c[y]=u[y];return Mt(c)}function Mb(u){return Mt(pa(u>>>0))}function Db(){return Mt({})}function Pb(u){for(var c=St(u>>>=0);c.length;){var y=c.pop();c.pop()(y)}ps(u)}function Ub(u,c,y){c>>>=0,y>>>=0,u=St(u>>>0),c=St(c),y=St(y),u[c]=y}function Lb(u,c){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),c>>>=0,u=new Date(1e3*u),(x(),R)[c>>>2>>>0]=u.getUTCSeconds(),(x(),R)[c+4>>>2>>>0]=u.getUTCMinutes(),(x(),R)[c+8>>>2>>>0]=u.getUTCHours(),(x(),R)[c+12>>>2>>>0]=u.getUTCDate(),(x(),R)[c+16>>>2>>>0]=u.getUTCMonth(),(x(),R)[c+20>>>2>>>0]=u.getUTCFullYear()-1900,(x(),R)[c+24>>>2>>>0]=u.getUTCDay(),u=(u.getTime()-Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(x(),R)[c+28>>>2>>>0]=u}var Bl=u=>u%4==0&&(u%100!=0||u%400==0),Nl=[0,31,60,91,121,152,182,213,244,274,305,335],Ml=[0,31,59,90,120,151,181,212,243,273,304,334];function Wb(u,c){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),c>>>=0,u=new Date(1e3*u),(x(),R)[c>>>2>>>0]=u.getSeconds(),(x(),R)[c+4>>>2>>>0]=u.getMinutes(),(x(),R)[c+8>>>2>>>0]=u.getHours(),(x(),R)[c+12>>>2>>>0]=u.getDate(),(x(),R)[c+16>>>2>>>0]=u.getMonth(),(x(),R)[c+20>>>2>>>0]=u.getFullYear()-1900,(x(),R)[c+24>>>2>>>0]=u.getDay();var y=(Bl(u.getFullYear())?Nl:Ml)[u.getMonth()]+u.getDate()-1|0;(x(),R)[c+28>>>2>>>0]=y,(x(),R)[c+36>>>2>>>0]=-60*u.getTimezoneOffset(),y=new Date(u.getFullYear(),6,1).getTimezoneOffset();var g=new Date(u.getFullYear(),0,1).getTimezoneOffset();u=0|(y!=g&&u.getTimezoneOffset()==Math.min(g,y)),(x(),R)[c+32>>>2>>>0]=u}function Gb(u){u>>>=0;var c=new Date((x(),R)[u+20>>>2>>>0]+1900,(x(),R)[u+16>>>2>>>0],(x(),R)[u+12>>>2>>>0],(x(),R)[u+8>>>2>>>0],(x(),R)[u+4>>>2>>>0],(x(),R)[u>>>2>>>0],0),y=(x(),R)[u+32>>>2>>>0],g=c.getTimezoneOffset(),S=new Date(c.getFullYear(),6,1).getTimezoneOffset(),E=new Date(c.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(E,S);return 0>y?(x(),R)[u+32>>>2>>>0]=+(S!=E&&A==g):0<y!=(A==g)&&(S=Math.max(E,S),c.setTime(c.getTime()+6e4*((0<y?A:S)-g))),(x(),R)[u+24>>>2>>>0]=c.getDay(),y=(Bl(c.getFullYear())?Nl:Ml)[c.getMonth()]+c.getDate()-1|0,(x(),R)[u+28>>>2>>>0]=y,(x(),R)[u>>>2>>>0]=c.getSeconds(),(x(),R)[u+4>>>2>>>0]=c.getMinutes(),(x(),R)[u+8>>>2>>>0]=c.getHours(),(x(),R)[u+12>>>2>>>0]=c.getDate(),(x(),R)[u+16>>>2>>>0]=c.getMonth(),(x(),R)[u+20>>>2>>>0]=c.getYear(),u=c.getTime(),BigInt(isNaN(u)?-1:u/1e3)}function Dl(u,c,y,g,S,E,A){return n?ne(16,1,u,c,y,g,S,E,A):-52}function Pl(u,c,y,g,S,E){if(n)return ne(17,1,u,c,y,g,S,E)}var un={},qb=()=>performance.timeOrigin+performance.now();function Ul(u,c){if(n)return ne(18,1,u,c);if(un[u]&&(clearTimeout(un[u].id),delete un[u]),!c)return 0;var y=setTimeout(()=>{delete un[u],ua(()=>ed(u,performance.timeOrigin+performance.now()))},c);return un[u]={id:y,Yd:c},0}function Vb(u,c,y,g){u>>>=0,c>>>=0,y>>>=0,g>>>=0;var S=new Date().getFullYear(),E=new Date(S,0,1).getTimezoneOffset();S=new Date(S,6,1).getTimezoneOffset();var A=Math.max(E,S);(x(),Z)[u>>>2>>>0]=60*A,(x(),R)[c>>>2>>>0]=+(E!=S),u=(c=M=>{var q=Math.abs(M);return`UTC${0<=M?"-":"+"}${String(Math.floor(q/60)).padStart(2,"0")}${String(q%60).padStart(2,"0")}`})(E),c=c(S),S<E?(Ar(u,y,17),Ar(c,g,17)):(Ar(u,g,17),Ar(c,y,17))}var Fb=()=>Date.now();function Hb(u,c,y){return y>>>=0,0<=u&&3>=u?(u===0?u=Date.now():u=performance.timeOrigin+performance.now(),u=Math.round(1e6*u),(x(),he)[y>>>3>>>0]=BigInt(u),0):28}var bs=[],Ll=(u,c)=>{bs.length=0;for(var y;y=(x(),V)[u++>>>0];){var g=y!=105;c+=(g&=y!=112)&&c%8?4:0,bs.push(y==112?(x(),Z)[c>>>2>>>0]:y==106?(x(),he)[c>>>3>>>0]:y==105?(x(),R)[c>>>2>>>0]:(x(),Q)[c>>>3>>>0]),c+=g?8:4}return bs};function jb(u,c,y){return u>>>=0,c=Ll(c>>>0,y>>>0),Ts[u](...c)}function Kb(u,c,y){return u>>>=0,c=Ll(c>>>0,y>>>0),Ts[u](...c)}var Zb=()=>{};function Xb(u,c){return T(We(u>>>0,c>>>0))}var Yb=()=>{throw Te+=1,"unwind"};function Qb(){return 4294901760}var Jb=()=>navigator.hardwareConcurrency,Kr={},fa=u=>{var c;return(c=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(u))?+c[1]:(c=/:(\d+):\d+(?:\)|$)/.exec(u))?2147483648|+c[1]:0},Wl=u=>{for(var c of u)(u=fa(c))&&(Kr[u]=c)};function ev(){var u=Error().stack.toString().split(`
`);return u[0]=="Error"&&u.shift(),Wl(u),Kr.gd=fa(u[3]),Kr.Jd=u,Kr.gd}function ha(u){if(!(u=Kr[u>>>0]))return 0;var c;if(c=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(u))u=c[1];else if(c=/^\s+at (.*) \(.*\)$/.exec(u))u=c[1];else{if(!(c=/^(.+?)@/.exec(u)))return 0;u=c[1]}rr(ha.hd??0),c=oa(u)+1;var y=ln(c);return y&&Ar(u,y,c),ha.hd=y,ha.hd}function tv(u){u>>>=0;var c=(x(),V).length;if(u<=c||4294901760<u)return!1;for(var y=1;4>=y;y*=2){var g=c*(1+.2/y);g=Math.min(g,u+100663296);e:{g=(Math.min(4294901760,65536*Math.ceil(Math.max(u,g)/65536))-Bt.buffer.byteLength+65535)/65536|0;try{Bt.grow(g),F();var S=1;break e}catch{}S=void 0}if(S)return!0}return!1}function rv(u,c,y){if(u>>>=0,c>>>=0,Kr.gd==u)var g=Kr.Jd;else(g=Error().stack.toString().split(`
`))[0]=="Error"&&g.shift(),Wl(g);for(var S=3;g[S]&&fa(g[S])!=u;)++S;for(u=0;u<y&&g[u+S];++u)(x(),R)[c+4*u>>>2>>>0]=fa(g[u+S]);return u}var vs,ws={},Gl=()=>{var g;if(!vs){var u,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((g=globalThis.navigator)==null?void 0:g.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(u in ws)ws[u]===void 0?delete c[u]:c[u]=ws[u];var y=[];for(u in c)y.push(`${u}=${c[u]}`);vs=y}return vs};function ql(u,c){if(n)return ne(19,1,u,c);u>>>=0,c>>>=0;var y,g=0,S=0;for(y of Gl()){var E=c+g;(x(),Z)[u+S>>>2>>>0]=E,g+=Ar(y,E,1/0)+1,S+=4}return 0}function Vl(u,c){if(n)return ne(20,1,u,c);u>>>=0,c>>>=0;var y=Gl();for(var g of((x(),Z)[u>>>2>>>0]=y.length,u=0,y))u+=oa(g)+1;return(x(),Z)[c>>>2>>>0]=u,0}function Fl(u){return n?ne(21,1,u):52}function Hl(u,c,y,g){return n?ne(22,1,u,c,y,g):52}function jl(u,c,y,g){return n?ne(23,1,u,c,y,g):70}var iv=[null,[],[]];function Kl(u,c,y,g){if(n)return ne(24,1,u,c,y,g);c>>>=0,y>>>=0,g>>>=0;for(var S=0,E=0;E<y;E++){var A=(x(),Z)[c>>>2>>>0],M=(x(),Z)[c+4>>>2>>>0];c+=8;for(var q=0;q<M;q++){var K=u,ue=(x(),V)[A+q>>>0],$e=iv[K];ue===0||ue===10?((K===1?k:T)(pl($e)),$e.length=0):$e.push(ue)}S+=M}return(x(),Z)[g>>>2>>>0]=S,0}function nv(u){return u>>>0}n||(function(){for(var u=t.numThreads-1;u--;)ia();Ye.push(async()=>{var c=(async function(){if(!n)return Promise.all(Jt.map(ra))})();nt++,await c,--nt==0&&tt&&(c=tt,tt=null,c())})})(),n||(Bt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),F()),t.wasmBinary&&(h=t.wasmBinary),t.stackSave=()=>fe(),t.stackRestore=u=>ce(u),t.stackAlloc=u=>Ss(u),t.setValue=function(u,c,y="i8"){switch(y.endsWith("*")&&(y="*"),y){case"i1":case"i8":(x(),P)[u>>>0]=c;break;case"i16":(x(),H)[u>>>1>>>0]=c;break;case"i32":(x(),R)[u>>>2>>>0]=c;break;case"i64":(x(),he)[u>>>3>>>0]=BigInt(c);break;case"float":(x(),X)[u>>>2>>>0]=c;break;case"double":(x(),Q)[u>>>3>>>0]=c;break;case"*":(x(),Z)[u>>>2>>>0]=c;break;default:G(`invalid type for setValue: ${y}`)}},t.getValue=function(u,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return(x(),P)[u>>>0];case"i16":return(x(),H)[u>>>1>>>0];case"i32":return(x(),R)[u>>>2>>>0];case"i64":return(x(),he)[u>>>3>>>0];case"float":return(x(),X)[u>>>2>>>0];case"double":return(x(),Q)[u>>>3>>>0];case"*":return(x(),Z)[u>>>2>>>0];default:G(`invalid type for getValue: ${c}`)}},t.UTF8ToString=We,t.stringToUTF8=Ar,t.lengthBytesUTF8=oa;var Zl,Xl,ma,rr,ln,$s,Yl,Ql,Jl,xs,ed,td,me,dn,rd,ce,Ss,fe,id,ks,nd,ad,sd,Is,od,ud,ld,dd,cd,pd,fd,hd,md,gd,_d,yd,bd,vd,wd,$d,xd,Sd,kd,Id,Td,Ed,Cd,zd,Ad,Od,Rd,Bd,Nd,Md,Dd,Pd,Ud,Ld,Wd,Gd,qd,Vd,Fd,mr,av=[at,Ii,ul,fl,hl,ml,gl,_l,yl,bl,vl,wl,$l,xl,Sl,kl,Dl,Pl,Ul,ql,Vl,Fl,Hl,jl,Kl],Ts={1003524:(u,c,y,g,S)=>{if(t===void 0||!t.Xc)return 1;if((u=We(Number(u>>>0))).startsWith("./")&&(u=u.substring(2)),!(u=t.Xc.get(u)))return 2;if(c=Number(c>>>0),y=Number(y>>>0),g=Number(g>>>0),c+y>u.byteLength)return 3;try{let E=u.subarray(c,c+y);switch(S){case 0:(x(),V).set(E,g>>>0);break;case 1:t.Qd?t.Qd(g,E):t.Id(g,E);break;default:return 4}return 0}catch{return 4}},1004348:(u,c,y)=>{t.td(u,(x(),V).subarray(c>>>0,c+y>>>0))},1004412:()=>t.Sd(),1004454:u=>{t.sd(u)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:u=>t.Ad(u),1004609:u=>t.Ed(u),1004641:(u,c,y)=>{t.ed(Number(u),Number(c),Number(y),!0)},1004704:(u,c,y)=>{t.ed(Number(u),Number(c),Number(y))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:u=>{t.$b("Abs",u,void 0)},1004869:u=>{t.$b("Neg",u,void 0)},1004920:u=>{t.$b("Floor",u,void 0)},1004973:u=>{t.$b("Ceil",u,void 0)},1005025:u=>{t.$b("Reciprocal",u,void 0)},1005083:u=>{t.$b("Sqrt",u,void 0)},1005135:u=>{t.$b("Exp",u,void 0)},1005186:u=>{t.$b("Erf",u,void 0)},1005237:u=>{t.$b("Sigmoid",u,void 0)},1005292:(u,c,y)=>{t.$b("HardSigmoid",u,{alpha:c,beta:y})},1005371:u=>{t.$b("Log",u,void 0)},1005422:u=>{t.$b("Sin",u,void 0)},1005473:u=>{t.$b("Cos",u,void 0)},1005524:u=>{t.$b("Tan",u,void 0)},1005575:u=>{t.$b("Asin",u,void 0)},1005627:u=>{t.$b("Acos",u,void 0)},1005679:u=>{t.$b("Atan",u,void 0)},1005731:u=>{t.$b("Sinh",u,void 0)},1005783:u=>{t.$b("Cosh",u,void 0)},1005835:u=>{t.$b("Asinh",u,void 0)},1005888:u=>{t.$b("Acosh",u,void 0)},1005941:u=>{t.$b("Atanh",u,void 0)},1005994:u=>{t.$b("Tanh",u,void 0)},1006046:u=>{t.$b("Not",u,void 0)},1006097:(u,c,y)=>{t.$b("Clip",u,{min:c,max:y})},1006166:u=>{t.$b("Clip",u,void 0)},1006218:(u,c)=>{t.$b("Elu",u,{alpha:c})},1006276:u=>{t.$b("Gelu",u,void 0)},1006328:u=>{t.$b("Relu",u,void 0)},1006380:(u,c)=>{t.$b("LeakyRelu",u,{alpha:c})},1006444:(u,c)=>{t.$b("ThresholdedRelu",u,{alpha:c})},1006514:(u,c)=>{t.$b("Cast",u,{to:c})},1006572:u=>{t.$b("Add",u,void 0)},1006623:u=>{t.$b("Sub",u,void 0)},1006674:u=>{t.$b("Mul",u,void 0)},1006725:u=>{t.$b("Div",u,void 0)},1006776:u=>{t.$b("Pow",u,void 0)},1006827:u=>{t.$b("Equal",u,void 0)},1006880:u=>{t.$b("Greater",u,void 0)},1006935:u=>{t.$b("GreaterOrEqual",u,void 0)},1006997:u=>{t.$b("Less",u,void 0)},1007049:u=>{t.$b("LessOrEqual",u,void 0)},1007108:(u,c,y,g,S)=>{t.$b("ReduceMean",u,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),R).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007283:(u,c,y,g,S)=>{t.$b("ReduceMax",u,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),R).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007457:(u,c,y,g,S)=>{t.$b("ReduceMin",u,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),R).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007631:(u,c,y,g,S)=>{t.$b("ReduceProd",u,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),R).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007806:(u,c,y,g,S)=>{t.$b("ReduceSum",u,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),R).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007980:(u,c,y,g,S)=>{t.$b("ReduceL1",u,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),R).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008153:(u,c,y,g,S)=>{t.$b("ReduceL2",u,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),R).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008326:(u,c,y,g,S)=>{t.$b("ReduceLogSum",u,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),R).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008503:(u,c,y,g,S)=>{t.$b("ReduceSumSquare",u,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),R).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008683:(u,c,y,g,S)=>{t.$b("ReduceLogSumExp",u,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),R).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008863:u=>{t.$b("Where",u,void 0)},1008916:(u,c,y)=>{t.$b("Transpose",u,{perm:c?Array.from((x(),R).subarray(Number(c)>>>0,Number(y)>>>0)):[]})},1009040:(u,c,y,g)=>{t.$b("DepthToSpace",u,{blocksize:c,mode:We(y),format:g?"NHWC":"NCHW"})},1009173:(u,c,y,g)=>{t.$b("DepthToSpace",u,{blocksize:c,mode:We(y),format:g?"NHWC":"NCHW"})},1009306:(u,c,y,g,S,E,A,M,q,K,ue,$e,Ee,Oe,Rr)=>{t.$b("ConvTranspose",u,{format:q?"NHWC":"NCHW",autoPad:c,dilations:[y],group:g,kernelShape:[S],pads:[E,A],strides:[M],wIsConst:()=>!!(x(),P)[K>>>0],outputPadding:ue?Array.from((x(),R).subarray(Number(ue)>>>0,Number($e)>>>0)):[],outputShape:Ee?Array.from((x(),R).subarray(Number(Ee)>>>0,Number(Oe)>>>0)):[],activation:We(Rr)})},1009739:(u,c,y,g,S,E,A,M,q,K,ue,$e,Ee,Oe)=>{t.$b("ConvTranspose",u,{format:M?"NHWC":"NCHW",autoPad:c,dilations:Array.from((x(),R).subarray(Number(y)>>>0,(Number(y)>>>0)+2>>>0)),group:g,kernelShape:Array.from((x(),R).subarray(Number(S)>>>0,(Number(S)>>>0)+2>>>0)),pads:Array.from((x(),R).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((x(),R).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(x(),P)[q>>>0],outputPadding:K?Array.from((x(),R).subarray(Number(K)>>>0,Number(ue)>>>0)):[],outputShape:$e?Array.from((x(),R).subarray(Number($e)>>>0,Number(Ee)>>>0)):[],activation:We(Oe)})},1010400:(u,c,y,g,S,E,A,M,q,K,ue,$e,Ee,Oe,Rr)=>{t.$b("ConvTranspose",u,{format:q?"NHWC":"NCHW",autoPad:c,dilations:[y],group:g,kernelShape:[S],pads:[E,A],strides:[M],wIsConst:()=>!!(x(),P)[K>>>0],outputPadding:ue?Array.from((x(),R).subarray(Number(ue)>>>0,Number($e)>>>0)):[],outputShape:Ee?Array.from((x(),R).subarray(Number(Ee)>>>0,Number(Oe)>>>0)):[],activation:We(Rr)})},1010833:(u,c,y,g,S,E,A,M,q,K,ue,$e,Ee,Oe)=>{t.$b("ConvTranspose",u,{format:M?"NHWC":"NCHW",autoPad:c,dilations:Array.from((x(),R).subarray(Number(y)>>>0,(Number(y)>>>0)+2>>>0)),group:g,kernelShape:Array.from((x(),R).subarray(Number(S)>>>0,(Number(S)>>>0)+2>>>0)),pads:Array.from((x(),R).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((x(),R).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(x(),P)[q>>>0],outputPadding:K?Array.from((x(),R).subarray(Number(K)>>>0,Number(ue)>>>0)):[],outputShape:$e?Array.from((x(),R).subarray(Number($e)>>>0,Number(Ee)>>>0)):[],activation:We(Oe)})},1011494:(u,c)=>{t.$b("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},1011585:(u,c,y,g,S,E,A,M,q,K,ue,$e,Ee,Oe)=>{t.$b("AveragePool",u,{format:Oe?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),R).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from((x(),R).subarray(Number(M)>>>0,Number(q)>>>0)):[],pads:K?Array.from((x(),R).subarray(Number(K)>>>0,Number(ue)>>>0)):[],strides:$e?Array.from((x(),R).subarray(Number($e)>>>0,Number(Ee)>>>0)):[]})},1012064:(u,c)=>{t.$b("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},1012155:(u,c,y,g,S,E,A,M,q,K,ue,$e,Ee,Oe)=>{t.$b("AveragePool",u,{format:Oe?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),R).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from((x(),R).subarray(Number(M)>>>0,Number(q)>>>0)):[],pads:K?Array.from((x(),R).subarray(Number(K)>>>0,Number(ue)>>>0)):[],strides:$e?Array.from((x(),R).subarray(Number($e)>>>0,Number(Ee)>>>0)):[]})},1012634:(u,c)=>{t.$b("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},1012721:(u,c,y,g,S,E,A,M,q,K,ue,$e,Ee,Oe)=>{t.$b("MaxPool",u,{format:Oe?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),R).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from((x(),R).subarray(Number(M)>>>0,Number(q)>>>0)):[],pads:K?Array.from((x(),R).subarray(Number(K)>>>0,Number(ue)>>>0)):[],strides:$e?Array.from((x(),R).subarray(Number($e)>>>0,Number(Ee)>>>0)):[]})},1013196:(u,c)=>{t.$b("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},1013283:(u,c,y,g,S,E,A,M,q,K,ue,$e,Ee,Oe)=>{t.$b("MaxPool",u,{format:Oe?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),R).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from((x(),R).subarray(Number(M)>>>0,Number(q)>>>0)):[],pads:K?Array.from((x(),R).subarray(Number(K)>>>0,Number(ue)>>>0)):[],strides:$e?Array.from((x(),R).subarray(Number($e)>>>0,Number(Ee)>>>0)):[]})},1013758:(u,c,y,g,S)=>{t.$b("Gemm",u,{alpha:c,beta:y,transA:g,transB:S})},1013862:u=>{t.$b("MatMul",u,void 0)},1013916:(u,c,y,g)=>{t.$b("ArgMax",u,{keepDims:!!c,selectLastIndex:!!y,axis:g})},1014024:(u,c,y,g)=>{t.$b("ArgMin",u,{keepDims:!!c,selectLastIndex:!!y,axis:g})},1014132:(u,c)=>{t.$b("Softmax",u,{axis:c})},1014195:(u,c)=>{t.$b("Concat",u,{axis:c})},1014255:(u,c,y,g,S)=>{t.$b("Split",u,{axis:c,numOutputs:y,splitSizes:g?Array.from((x(),R).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1014411:u=>{t.$b("Expand",u,void 0)},1014465:(u,c)=>{t.$b("Gather",u,{axis:Number(c)})},1014536:(u,c)=>{t.$b("GatherElements",u,{axis:Number(c)})},1014615:(u,c)=>{t.$b("GatherND",u,{batch_dims:Number(c)})},1014694:(u,c,y,g,S,E,A,M,q,K,ue)=>{t.$b("Resize",u,{antialias:c,axes:y?Array.from((x(),R).subarray(Number(y)>>>0,Number(g)>>>0)):[],coordinateTransformMode:We(S),cubicCoeffA:E,excludeOutside:A,extrapolationValue:M,keepAspectRatioPolicy:We(q),mode:We(K),nearestMode:We(ue)})},1015056:(u,c,y,g,S,E,A)=>{t.$b("Slice",u,{starts:c?Array.from((x(),R).subarray(Number(c)>>>0,Number(y)>>>0)):[],ends:g?Array.from((x(),R).subarray(Number(g)>>>0,Number(S)>>>0)):[],axes:E?Array.from((x(),R).subarray(Number(E)>>>0,Number(A)>>>0)):[]})},1015320:u=>{t.$b("Tile",u,void 0)},1015372:(u,c,y)=>{t.$b("InstanceNormalization",u,{epsilon:c,format:y?"NHWC":"NCHW"})},1015486:(u,c,y)=>{t.$b("InstanceNormalization",u,{epsilon:c,format:y?"NHWC":"NCHW"})},1015600:u=>{t.$b("Range",u,void 0)},1015653:(u,c)=>{t.$b("Einsum",u,{equation:We(c)})},1015734:(u,c,y,g,S)=>{t.$b("Pad",u,{mode:c,value:y,pads:g?Array.from((x(),R).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1015877:(u,c,y,g,S,E)=>{t.$b("BatchNormalization",u,{epsilon:c,momentum:y,spatial:!!S,trainingMode:!!g,format:E?"NHWC":"NCHW"})},1016046:(u,c,y,g,S,E)=>{t.$b("BatchNormalization",u,{epsilon:c,momentum:y,spatial:!!S,trainingMode:!!g,format:E?"NHWC":"NCHW"})},1016215:(u,c,y)=>{t.$b("CumSum",u,{exclusive:Number(c),reverse:Number(y)})},1016312:(u,c,y)=>{t.$b("DequantizeLinear",u,{axis:c,blockSize:y})},1016402:(u,c,y,g,S)=>{t.$b("GridSample",u,{align_corners:c,mode:We(y),padding_mode:We(g),format:S?"NHWC":"NCHW"})},1016572:(u,c,y,g,S)=>{t.$b("GridSample",u,{align_corners:c,mode:We(y),padding_mode:We(g),format:S?"NHWC":"NCHW"})},1016742:(u,c)=>{t.$b("ScatterND",u,{reduction:We(c)})},1016827:(u,c,y,g,S,E,A,M,q)=>{t.$b("Attention",u,{numHeads:c,isUnidirectional:y,maskFilterValue:g,scale:S,doRotary:E,qkvHiddenSizes:A?Array.from((x(),R).subarray(Number(M)>>>0,Number(M)+A>>>0)):[],pastPresentShareBuffer:!!q})},1017099:u=>{t.$b("BiasAdd",u,void 0)},1017154:u=>{t.$b("BiasSplitGelu",u,void 0)},1017215:u=>{t.$b("FastGelu",u,void 0)},1017271:(u,c,y,g,S,E,A,M,q,K,ue,$e,Ee,Oe,Rr,Es)=>{t.$b("Conv",u,{format:$e?"NHWC":"NCHW",auto_pad:c,dilations:y?Array.from((x(),R).subarray(Number(y)>>>0,Number(g)>>>0)):[],group:S,kernel_shape:E?Array.from((x(),R).subarray(Number(E)>>>0,Number(A)>>>0)):[],pads:M?Array.from((x(),R).subarray(Number(M)>>>0,Number(q)>>>0)):[],strides:K?Array.from((x(),R).subarray(Number(K)>>>0,Number(ue)>>>0)):[],w_is_const:()=>!!(x(),P)[Number(Ee)>>>0],activation:We(Oe),activation_params:Rr?Array.from((x(),X).subarray(Number(Rr)>>>0,Number(Es)>>>0)):[]})},1017855:u=>{t.$b("Gelu",u,void 0)},1017907:(u,c,y,g,S,E,A,M,q)=>{t.$b("GroupQueryAttention",u,{numHeads:c,kvNumHeads:y,scale:g,softcap:S,doRotary:E,rotaryInterleaved:A,smoothSoftmax:M,localWindowSize:q})},1018124:(u,c,y,g)=>{t.$b("LayerNormalization",u,{axis:c,epsilon:y,simplified:!!g})},1018235:(u,c,y,g)=>{t.$b("LayerNormalization",u,{axis:c,epsilon:y,simplified:!!g})},1018346:(u,c,y,g,S,E)=>{t.$b("MatMulNBits",u,{k:c,n:y,accuracyLevel:g,bits:S,blockSize:E})},1018473:(u,c,y,g,S,E)=>{t.$b("MultiHeadAttention",u,{numHeads:c,isUnidirectional:y,maskFilterValue:g,scale:S,doRotary:E})},1018632:(u,c)=>{t.$b("QuickGelu",u,{alpha:c})},1018696:(u,c,y,g,S)=>{t.$b("RotaryEmbedding",u,{interleaved:!!c,numHeads:y,rotaryEmbeddingDim:g,scale:S})},1018835:(u,c,y)=>{t.$b("SkipLayerNormalization",u,{epsilon:c,simplified:!!y})},1018937:(u,c,y)=>{t.$b("SkipLayerNormalization",u,{epsilon:c,simplified:!!y})},1019039:(u,c,y,g)=>{t.$b("GatherBlockQuantized",u,{gatherAxis:c,quantizeAxis:y,blockSize:g})},1019160:u=>{t.Fd(u)},1019194:(u,c)=>t.Hd(Number(u),Number(c),t.Yc.Kd,t.Yc.errors)};function sv(u,c,y){return Ol(async()=>{await t.Dd(Number(u),Number(c),Number(y))})}function ov(){return typeof wasmOffsetConverter<"u"}function uv(u,c,y,g){var S=fe();try{return hd(u,c,y,g)}catch(E){if(ce(S),E!==E+0)throw E;me(1,0)}}function lv(u,c,y){var g=fe();try{return dd(u,c,y)}catch(S){if(ce(g),S!==S+0)throw S;me(1,0)}}function dv(u){var c=fe();try{od(u)}catch(y){if(ce(c),y!==y+0)throw y;me(1,0)}}function cv(u,c){var y=fe();try{return Is(u,c)}catch(g){if(ce(y),g!==g+0)throw g;me(1,0)}}function pv(u,c,y){var g=fe();try{sd(u,c,y)}catch(S){if(ce(g),S!==S+0)throw S;me(1,0)}}function fv(u,c){var y=fe();try{md(u,c)}catch(g){if(ce(y),g!==g+0)throw g;me(1,0)}}function hv(u,c,y,g,S,E,A){var M=fe();try{return pd(u,c,y,g,S,E,A)}catch(q){if(ce(M),q!==q+0)throw q;me(1,0)}}function mv(u,c,y,g,S,E){var A=fe();try{ud(u,c,y,g,S,E)}catch(M){if(ce(A),M!==M+0)throw M;me(1,0)}}function gv(u,c,y,g){var S=fe();try{fd(u,c,y,g)}catch(E){if(ce(S),E!==E+0)throw E;me(1,0)}}function _v(u,c,y,g,S){var E=fe();try{ld(u,c,y,g,S)}catch(A){if(ce(E),A!==A+0)throw A;me(1,0)}}function yv(u,c,y,g,S,E,A){var M=fe();try{_d(u,c,y,g,S,E,A)}catch(q){if(ce(M),q!==q+0)throw q;me(1,0)}}function bv(u,c,y,g,S,E,A){var M=fe();try{yd(u,c,y,g,S,E,A)}catch(q){if(ce(M),q!==q+0)throw q;me(1,0)}}function vv(u,c,y,g,S,E,A,M){var q=fe();try{$d(u,c,y,g,S,E,A,M)}catch(K){if(ce(q),K!==K+0)throw K;me(1,0)}}function wv(u,c,y,g,S){var E=fe();try{return gd(u,c,y,g,S)}catch(A){if(ce(E),A!==A+0)throw A;me(1,0)}}function $v(u,c,y){var g=fe();try{return xd(u,c,y)}catch(S){if(ce(g),S!==S+0)throw S;me(1,0)}}function xv(u,c,y,g,S,E,A,M){var q=fe();try{Sd(u,c,y,g,S,E,A,M)}catch(K){if(ce(q),K!==K+0)throw K;me(1,0)}}function Sv(u,c,y,g,S,E,A,M,q,K,ue,$e){var Ee=fe();try{bd(u,c,y,g,S,E,A,M,q,K,ue,$e)}catch(Oe){if(ce(Ee),Oe!==Oe+0)throw Oe;me(1,0)}}function kv(u,c,y,g,S,E){var A=fe();try{return vd(u,c,y,g,S,E)}catch(M){if(ce(A),M!==M+0)throw M;me(1,0)}}function Iv(u,c,y){var g=fe();try{return kd(u,c,y)}catch(S){if(ce(g),S!==S+0)throw S;return me(1,0),0n}}function Tv(u,c,y,g,S,E,A,M,q){var K=fe();try{cd(u,c,y,g,S,E,A,M,q)}catch(ue){if(ce(K),ue!==ue+0)throw ue;me(1,0)}}function Ev(u){var c=fe();try{return Id(u)}catch(y){if(ce(c),y!==y+0)throw y;me(1,0)}}function Cv(u,c){var y=fe();try{return Wd(u,c)}catch(g){if(ce(y),g!==g+0)throw g;return me(1,0),0n}}function zv(u){var c=fe();try{return Td(u)}catch(y){if(ce(c),y!==y+0)throw y;return me(1,0),0n}}function Av(u,c,y,g){var S=fe();try{return Rd(u,c,y,g)}catch(E){if(ce(S),E!==E+0)throw E;me(1,0)}}function Ov(u,c,y,g,S){var E=fe();try{return Bd(u,c,y,g,S)}catch(A){if(ce(E),A!==A+0)throw A;me(1,0)}}function Rv(u,c,y,g,S,E){var A=fe();try{return Nd(u,c,y,g,S,E)}catch(M){if(ce(A),M!==M+0)throw M;me(1,0)}}function Bv(u,c,y,g,S,E){var A=fe();try{return Md(u,c,y,g,S,E)}catch(M){if(ce(A),M!==M+0)throw M;me(1,0)}}function Nv(u,c,y,g,S,E,A,M){var q=fe();try{return wd(u,c,y,g,S,E,A,M)}catch(K){if(ce(q),K!==K+0)throw K;me(1,0)}}function Mv(u,c,y,g,S){var E=fe();try{return Dd(u,c,y,g,S)}catch(A){if(ce(E),A!==A+0)throw A;return me(1,0),0n}}function Dv(u,c,y,g){var S=fe();try{return Pd(u,c,y,g)}catch(E){if(ce(S),E!==E+0)throw E;me(1,0)}}function Pv(u,c,y,g){var S=fe();try{return Ud(u,c,y,g)}catch(E){if(ce(S),E!==E+0)throw E;me(1,0)}}function Uv(u,c,y,g,S,E,A,M,q,K,ue,$e){var Ee=fe();try{return Ld(u,c,y,g,S,E,A,M,q,K,ue,$e)}catch(Oe){if(ce(Ee),Oe!==Oe+0)throw Oe;me(1,0)}}function Lv(u,c,y,g,S,E,A,M,q,K,ue){var $e=fe();try{Ad(u,c,y,g,S,E,A,M,q,K,ue)}catch(Ee){if(ce($e),Ee!==Ee+0)throw Ee;me(1,0)}}function Wv(u,c,y,g,S,E,A,M,q,K,ue,$e,Ee,Oe,Rr,Es){var Fv=fe();try{Od(u,c,y,g,S,E,A,M,q,K,ue,$e,Ee,Oe,Rr,Es)}catch(Cs){if(ce(Fv),Cs!==Cs+0)throw Cs;me(1,0)}}function Gv(u,c,y){var g=fe();try{return Ed(u,c,y)}catch(S){if(ce(g),S!==S+0)throw S;me(1,0)}}function qv(u,c,y){var g=fe();try{return Cd(u,c,y)}catch(S){if(ce(g),S!==S+0)throw S;me(1,0)}}function Vv(u,c,y,g){var S=fe();try{zd(u,c,y,g)}catch(E){if(ce(S),E!==E+0)throw E;me(1,0)}}function ga(){if(0<nt)tt=ga;else if(n)b==null||b(t),Y();else{for(var u=Ye;0<u.length;)u.shift()(t);0<nt?tt=ga:(t.calledRun=!0,C||(Y(),b==null||b(t)))}}return n||(mr=await it(),ga()),t.PTR_SIZE=4,W?t:new Promise((u,c)=>{b=u,$=c})}var kg,mc,C1=U(()=>{var e,t;kg=hc,mc=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),mc&&hc()}),Gs,Jo,gc,gt,Ig,va,_c,yc,qs,bc,Vs,Tg,Fs,Eg,Bu=U(()=>{Ru(),Gs=typeof location>"u"?void 0:location.origin,Jo=import.meta.url>"file:"&&import.meta.url<"file;",gc=()=>{{if(Jo){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Gs).href}return import.meta.url}},gt=gc(),Ig=()=>{if(gt&&!gt.startsWith("blob:"))return gt.substring(0,gt.lastIndexOf("/")+1)},va=(e,t)=>{try{let r=t??gt;return(r?new URL(e,r):new URL(e)).origin===Gs}catch{return!1}},_c=(e,t)=>{let r=t??gt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},yc=(e,t)=>`${t??"./"}${e}`,qs=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},bc=async e=>(await import(e)).default,Vs=(E1(),Wn($g)).default,Tg=async()=>{if(!gt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(va(gt))return[void 0,Vs()];let e=await qs(gt);return[e,Vs(e)]},Fs=(C1(),Wn(Sg)).default,Eg=async(e,t,r,i)=>{let n=Fs&&!(e||t);if(n)if(gt)n=va(gt)||i&&!r;else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,Fs];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??_c(a,t),o=r&&s&&!va(s,t),l=o?await qs(s):s??yc(a,t);return[o?l:void 0,await bc(l)]}}}),Hs,wa,gn,js,vc,wc,$c,Nu,Ae,Si=U(()=>{Bu(),wa=!1,gn=!1,js=!1,vc=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},wc=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},$c=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Nu=async e=>{if(wa)return Promise.resolve();if(gn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(js)throw new Error("previous call to 'initializeWebAssembly()' failed.");gn=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!$c())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!wc())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=vc();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,a=typeof n=="string"?n:void 0,s=n==null?void 0:n.mjs,o=(s==null?void 0:s.href)??s,l=n==null?void 0:n.wasm,d=(l==null?void 0:l.href)??l,p=e.wasmBinary,[f,h]=await Eg(o,a,r>1,!!p||!!d),m=!1,_=[];if(t>0&&_.push(new Promise(b=>{setTimeout(()=>{m=!0,b()},t)})),_.push(new Promise((b,$)=>{let v={numThreads:r};if(p)v.wasmBinary=p,v.locateFile=w=>w;else if(d||a)v.locateFile=w=>d??a+w;else if(o&&o.indexOf("blob:")!==0)v.locateFile=w=>new URL(w,o).href;else if(f){let w=Ig();w&&(v.locateFile=I=>w+I)}h(v).then(w=>{gn=!1,wa=!0,Hs=w,b(),f&&URL.revokeObjectURL(f)},w=>{gn=!1,js=!0,$(w)})})),await Promise.race(_),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ae=()=>{if(wa&&Hs)return Hs;throw new Error("WebAssembly is not initialized yet.")}}),Ft,ja,Ie,Mu=U(()=>{Si(),Ft=(e,t)=>{let r=Ae(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},ja=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,a])=>{let s=t?t+n:n;if(typeof a=="object")ja(a,s+".",r,i);else if(typeof a=="string"||typeof a=="number")i(s,a.toString());else if(typeof a=="boolean")i(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Ie=e=>{let t=Ae(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let a=Number(t.getValue(n,i===4?"i32":"i64")),s=t.getValue(n+i,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Cg,z1=U(()=>{Si(),Mu(),Cg=e=>{let t=Ae(),r=0,i=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=Ft(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,a),r===0&&Ie("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&ja(e.extra,"",new WeakSet,(s,o)=>{let l=Ft(s,i),d=Ft(o,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&Ie(`Can't set a run config entry: ${s} - ${o}.`)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),a}}}),xc,Sc,kc,Zr,Ic,zg,A1=U(()=>{Si(),Mu(),xc=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Sc=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},kc=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Zr=(e,t,r,i)=>{let n=Ft(t,i),a=Ft(r,i);Ae()._OrtAddSessionConfigEntry(e,n,a)!==0&&Ie(`Can't set a session config entry: ${t} - ${r}.`)},Ic=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let a=typeof n=="string"?n:n.name,s=[];switch(a){case"webnn":if(a="WEBNN",Zr(e,"session.disable_quant_qdq","1",r),Zr(e,"session.disable_qdq_constant_folding","1",r),typeof n!="string"){let f=n==null?void 0:n.deviceType;f&&Zr(e,"deviceType",f,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let f=n;if(f!=null&&f.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);Zr(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=Ft(a,r),l=s.length,d=0,p=0;if(l>0){d=Ae()._malloc(l*Ae().PTR_SIZE),r.push(d),p=Ae()._malloc(l*Ae().PTR_SIZE),r.push(p);for(let f=0;f<l;f++)Ae().setValue(d+f*Ae().PTR_SIZE,s[f][0],"*"),Ae().setValue(p+f*Ae().PTR_SIZE,s[f][1],"*")}await Ae()._OrtAppendExecutionProvider(e,o,d,p,l)!==0&&Ie(`Can't append execution provider: ${a}.`)}},zg=async e=>{let t=Ae(),r=0,i=[],n=e||{};kc(n);try{let a=xc(n.graphOptimizationLevel??"all"),s=Sc(n.executionMode??"sequential"),o=typeof n.logId=="string"?Ft(n.logId,i):0,l=n.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let p=typeof n.optimizedModelFilePath=="string"?Ft(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(a,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,o,l,d,p),r===0&&Ie("Can't create session options."),n.executionProviders&&await Ic(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);Zr(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[f,h]of Object.entries(n.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let m=Ft(f,i);t._OrtAddFreeDimensionOverride(r,m,h)!==0&&Ie(`Can't set a free dimension override: ${f} - ${h}.`)}return n.extra!==void 0&&ja(n.extra,"",new WeakSet,(f,h)=>{Zr(r,f,h,i)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Ie("Can't release session options."),i.forEach(s=>t._free(s)),a}}}),ii,wr,ni,ss,Ka,Du,Pu,eu,ie=U(()=>{ii=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},wr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},ni=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,a)=>n*a,1);return r>0?Math.ceil(i*r):void 0},ss=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Ka=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Du=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Pu=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",eu=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Uu,Ag=U(()=>{Ru(),Uu=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),a;try{a=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let l=Math.ceil(i/65536);a=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let s=0;for(;;){let{done:o,value:l}=await n.read();if(o)break;let d=l.byteLength;new Uint8Array(a,s,d).set(l),s+=d}return new Uint8Array(a,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Tc,Ec,Cc,zc,Lu,Ac,ye,Cr=U(()=>{ie(),Tc=["V","I","W","E","F"],Ec=(e,t)=>{console.log(`[${Tc[e]},${new Date().toISOString()}]${t}`)},Lu=(e,t)=>{Cc=e,zc=t},Ac=(e,t)=>{let r=Ka(e),i=Ka(Cc);r>=i&&Ec(r,typeof t=="function"?t():t)},ye=(...e)=>{zc&&Ac(...e)}}),Oc,en,B,Za,Og,Rg,Bg,ae=U(()=>{Oc=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},en=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(i<2||n<2)return;let o=Oc.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=r?3:1;o<=a;o++){let l=i-o<0?1:e[i-o],d=n-o<0?1:t[n-o];if(l!==d&&l>1&&d>1)return;let p=Math.max(l,d);if(l&&d)s[a-o]=Math.max(l,d);else{if(p>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},B=class Pa{static size(t){return Pa.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),a=i-1;for(;a>=0;){if(t[a]%r===0){n[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");n[a]=1,r/=t[a],a--}for(a--;a>=0;a--)n[a]=t[a];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Pa.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Pa.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let a=r;a<i;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[a])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,a)=>n+r[a]+r[a+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},Za=class Rn{static adjustPoolAttributes(t,r,i,n,a,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<i.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=i[o]||s[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)Rn.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],n[l],a,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,i,n,a,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return Rn.computeShapeHelper(t,r,l,i,n,a,s,o),l}static computeConvOutputShape(t,r,i,n,a,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return Rn.computeShapeHelper(!1,t,l,i,n,a,s,o),l}static computeShapeHelper(t,r,i,n,a,s,o,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(Rn.adjustPadAndReturnShape(r[d+2],n[d],a[d],s[d],o,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,n,a,s,o,l){let d=i*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=((t+r-1)/r-1)*r+n-t;return a[s]=Math.floor(l==="SAME_LOWER"?(p+1)/2:p/2),a[o]=p-a[s],Math.floor((t+p-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-d)/r+1)}},Og=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let l=-1;if(i?(o=r[0],l=1):(o=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(n&&!en.isValidBroadcast(n,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},Rg=-34028234663852886e22,Bg=34028234663852886e22}),Wu,Ng=U(()=>{ie(),Wu=(e,t)=>new(ss(t))(e)}),Ks,tu,Zs,Rc,Xs,Bc,Ys,Qs,Js,Nc,Mg,O1=U(()=>{ie(),Cr(),Ks=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),tu=(e,t)=>{if(t==="int32")return e;let r=Ks.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,a=new(ss(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let s=new Int32Array(n);for(let o=0;o<n;o++){let l=a[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Zs=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Rc=1,Xs=()=>Rc++,Bc=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Ys=(e,t)=>{let r=Ks.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},Qs=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Ys(this.dataType,this.tensorShape)}destroy(){ye("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Zs(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},Js=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=Bc.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);ye("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Ys(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=tu(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ye("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let i=(t=this.wrapper)!=null&&t.isDataConverted?Zs(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(i):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Nc=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Xs();return this.tensorTrackersById.set(e,new Js(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){ye("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){ye("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),a=Xs(),s=new Qs({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new Js(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,i,n,a,s){let o=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,r)){ye("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}ye("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:n,readable:a});return new Qs({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Mg=(...e)=>new Nc(...e)}),_n,Mc,Dg,R1=U(()=>{ie(),Si(),Ng(),O1(),Cr(),_n=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Mc=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,a)=>n===i[a]&&e[n]===t[n])},Dg=class{constructor(e){this.tensorManager=Mg(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Lu(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ye("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ye("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)ye("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Mc(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ye("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let a=_n.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,i,n)}async createTemporaryTensor(e,t,r){ye("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=_n.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!Ae().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ye("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Wu(r,t)}}registerMLTensor(e,t,r,i){let n=_n.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,n,i);return ye("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,i,n,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=a.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,p;switch(n.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":if(s){let f=tu(new Uint8Array(d),"int64");p=new Int32Array(f.buffer),n.dataType="int32"}else p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return ye("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(n,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=_n.get(ii(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!(n!=null&&n.input.dataTypes.includes(i)):!!(n!=null&&n.output.dataTypes.includes(i))}flush(){}}}),Gu=U(()=>{}),eo,$a,xa,Dc,Pc,to,ru,Uc,Pg,B1=U(()=>{Cr(),Gu(),eo=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),$a=[],xa=e=>Math.ceil(Number(e)/16)*16,Dc=e=>{for(let t=0;t<$a.length;t++){let r=$a[t];if(e<=r)return r}return Math.ceil(e/16)*16},Pc=1,to=()=>Pc++,ru=async(e,t,r,i)=>{let n=xa(r),a=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,n),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{a.destroy()}},Uc=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of eo)$a.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,a=xa(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,n)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([d.finish()]),o.destroy(),ye("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=xa(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return ye("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=to();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),ye("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ye("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Dc(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||a){let o=(n?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:to(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),ye("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ye("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await ru(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=eo.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ye("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Pg=(...e)=>new Uc(...e)}),Lc,ke,Pe=U(()=>{Lc=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ke=e=>new Lc(e)}),tn,Sa,Fe,rt,te,Me,iu,Pi,Vr,ee,yn,D,J,Ug,qu,Wc,Lg,se=U(()=>{ie(),ae(),tn=64,Sa=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Fe=(e,t=1)=>{let r=Sa(e,t);return typeof r=="string"?r:r[0]},rt=(e,t=1)=>{let r=Sa(e,t);return typeof r=="string"?r:r[1]},te=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:B.computeStrides(r)})}),t},Me=e=>e%4===0?4:e%2===0?2:1,iu=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Pi=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Vr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ee=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,yn=(e,t,r,i,n)=>{let a=typeof r=="number",s=a?r:r.length,o=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Sa(t,n),p=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],h={indices:l,value:p,storage:f,tensor:t},m=W=>typeof W=="string"?W:`${W}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=a?"uniforms.":"",$=`${b}${e}_shape`,v=`${b}${e}_strides`,w="";for(let W=0;W<s-1;W++)w+=`
    let dim${W} = current / ${ee(v,W,s)};
    let rest${W} = current % ${ee(v,W,s)};
    indices[${W}] = dim${W};
    current = rest${W};
    `;w+=`indices[${s-1}] = current;`;let I=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${w}
    return indices;
  }`,k=W=>(_.offsetToIndices=!0,s<2?W:`o2i_${e}(${W})`),T=[];if(s>=2)for(let W=s-1;W>=0;W--)T.push(`${ee(v,W,s)} * (indices[${W}])`);let C=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${T.join("+")};
  }`,z=W=>(_.indicesToOffset=!0,s<2?W:`i2o_${e}(${W})`),x=(...W)=>s===0?"0u":`${h.indices}(${W.map(m).join(",")})`,N=(W,F)=>s<2?`${W}`:`${ee(W,F,s)}`,P=(W,F,Y)=>s<2?`${W}=${Y};`:`${ee(W,F,s)}=${Y};`,V={},H=(W,F)=>{_.broadcastedIndicesToOffset=!0;let Y=`${F.name}broadcastedIndicesTo${e}Offset`;if(Y in V)return`${Y}(${W})`;let G=[];for(let we=s-1;we>=0;we--){let it=F.indicesGet("outputIndices",we+F.rank-s);G.push(`${N(v,we)} * (${it} % ${N($,we)})`)}return V[Y]=`fn ${Y}(outputIndices: ${F.type.indices}) -> u32 {
             return ${G.length>0?G.join("+"):"0u"};
           }`,`${Y}(${W})`},j=(W,F)=>(()=>{if(h.storage===h.value)return`${e}[${W}]=${F};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${W}]=vec2<u32>(u32(${F}), select(0u, 0xFFFFFFFFu, ${F} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${W}]=vec2<u32>(u32(${F}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${W}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${F}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),R=W=>(()=>{if(h.storage===h.value)return`${e}[${W}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${W}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${W}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${W}] & 0xFFu), bool(${e}[${W}] & 0xFF00u), bool(${e}[${W}] & 0xFF0000u), bool(${e}[${W}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),Z=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${p} {
    return ${R(`i2o_${e}(indices)`)};
  }`,X=s<2?"":(()=>{let W=o.map(Y=>`d${Y}: u32`).join(", "),F=o.map(Y=>`d${Y}`).join(", ");return`
  fn get_${e}(${W}) -> ${p} {
    return get_${e}ByIndices(${x(F)});
  }`})(),Q=(...W)=>{if(W.length!==s)throw new Error(`indices length must be ${s}`);let F=W.map(m).join(",");return s===0?R("0u"):s===1?R(F[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${F})`)},he=W=>s<2?R(W):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${W})`),L=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${p}) {
    ${j(`i2o_${e}(indices)`,"value")}
  }`,oe=s<2?"":(()=>{let W=o.map(Y=>`d${Y}: u32`).join(", "),F=o.map(Y=>`d${Y}`).join(", ");return`
  fn set_${e}(${W}, value: ${p}) {
    set_${e}ByIndices(${x(F)}, value);
  }`})();return{impl:()=>{let W=[],F=!1;return _.offsetToIndices&&(W.push(I),F=!0),_.indicesToOffset&&(W.push(C),F=!0),_.broadcastedIndicesToOffset&&(Object.values(V).forEach(Y=>W.push(Y)),F=!0),_.set&&(W.push(oe),F=!0),_.setByIndices&&(W.push(L),F=!0),_.get&&(W.push(X),F=!0),_.getByIndices&&(W.push(Z),F=!0),!a&&F&&W.unshift(`const ${$} = ${h.indices}(${r.join(",")});`,`const ${v} = ${h.indices}(${B.computeStrides(r).join(",")});`),W.join(`
`)},type:h,offsetToIndices:k,indicesToOffset:z,broadcastedIndicesToOffset:H,indices:x,indicesGet:N,indicesSet:P,set:(...W)=>{if(W.length!==s+1)throw new Error(`indices length must be ${s}`);let F=W[s];if(typeof F!="string")throw new Error("value must be string");let Y=W.slice(0,s).map(m).join(",");return s===0?j("0u",F):s===1?j(Y[0],F):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${Y}, ${F})`)},setByOffset:j,setByIndices:(W,F)=>s<2?j(W,F):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${W}, ${F});`),get:Q,getByOffset:R,getByIndices:he,usage:i,name:e,strides:v,shape:$,rank:s}},D=(e,t,r,i=1)=>yn(e,t,r,"input",i),J=(e,t,r,i=1)=>yn(e,t,r,"output",i),Ug=(e,t,r)=>yn(e,t,r,"atomicOutput",1),qu=(e,t,r,i=1)=>yn(e,t,r,"internal",i),Wc=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=tn){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Lg=(e,t)=>new Wc(e,t)}),Gc,ro,qc,Vc,Fc,Hc,$t,Wg,Gg,Fr=U(()=>{ie(),ae(),Pe(),se(),Gc=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ro=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),qc=(e,t)=>B.sortBasedOnPerm(e,ro(e.length,t)),Vc=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)n+=`a[${e[a]}]=i[${a}];`;return n+="return a;}"},Fc=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},Hc=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},$t=(e,t)=>{let r=e.dataType,i=e.dims.length,n=ro(i,t),a=qc(e.dims,n),s=e.dims,o=a,l=i<2||Hc(n,e.dims),d;if(l)return d=_=>{let b=D("input",r,s,4),$=J("output",r,o,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,$)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:p,newPerm:f}=Fc(e.dims,n),h=B.areEqual(f,[2,3,1]),m=B.areEqual(f,[3,1,2]);if(p.length===2||h||m){s=h?[p[0],p[1]*p[2]]:m?[p[0]*p[1],p[2]]:p,o=[s[1],s[0]];let _=16;return d=b=>{let $=D("a",r,s.length),v=J("output",r,o.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/_),y:Math.ceil(o[0]/_)},programUniforms:[{type:12,data:b},...te(s,o)]}},getShaderSource:d}}return d=_=>{let b=D("a",r,s.length),$=J("output",r,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,$)}

  ${Vc(n,i,b,$)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...te(s,o)]}},getShaderSource:d}},Wg=(e,t)=>{Gc(e.inputs,t.perm),e.compute($t(e.inputs[0],t.perm))},Gg=e=>ke({perm:e.perm})}),jc,Kc,Zc,Xc,Yc,Qc,Jc,ep,tp,rp,Dt,qg,Vg,Fg,Hg,jg,Kg,Zg,Xg,Yg,Qg,N1=U(()=>{ie(),ae(),se(),Vu(),Fr(),jc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Kc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Zc={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Xc={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Yc=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Qc=(e,t)=>{let r=[],i=e.length;for(let a=0;a<i;a++)t.indexOf(a)===-1&&r.push(e[a]);let n=t.map(a=>e[a]);return[r,n]},Jc=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?i.push(e[n++]):i.push(1);return i},ep=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},tp=(e,t)=>{let r=[];if(!ep(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},rp=(e,t,r,i,n,a,s)=>{let o=r[0].dims,l=B.size(a),d=B.size(s),p=D("_A",r[0].dataType,o),f=J("output",n,a),h=64;l===1&&(h=256);let m=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,_=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(p,f)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Zc[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${jc[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Kc[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${i==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Xc[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Dt=(e,t,r,i)=>{let n=e.inputs.length===1?r:nu(e.inputs,r),a=n.axes;a.length===0&&!n.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,_)=>_));let s=B.normalizeAxes(a,e.inputs[0].dims.length),o=s,l=e.inputs[0],d=tp(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute($t(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Yc(o.length,l.dims.length));let[p,f]=Qc(l.dims,o),h=p;n.keepDims&&(h=Jc(p,s)),e.compute(rp(t,n.cacheKey,[l],i,e.inputs[0].dataType,h,f),{inputs:[l]})},qg=(e,t)=>{Dt(e,"ReduceMeanShared",t,"mean")},Vg=(e,t)=>{Dt(e,"ReduceL1Shared",t,"l1")},Fg=(e,t)=>{Dt(e,"ReduceL2Shared",t,"l2")},Hg=(e,t)=>{Dt(e,"ReduceLogSumExpShared",t,"logSumExp")},jg=(e,t)=>{Dt(e,"ReduceMaxShared",t,"max")},Kg=(e,t)=>{Dt(e,"ReduceMinShared",t,"min")},Zg=(e,t)=>{Dt(e,"ReduceProdShared",t,"prod")},Xg=(e,t)=>{Dt(e,"ReduceSumShared",t,"sum")},Yg=(e,t)=>{Dt(e,"ReduceSumSquareShared",t,"sumSquare")},Qg=(e,t)=>{Dt(e,"ReduceLogSumShared",t,"logSum")}}),Pt,ip,Xa,nu,Ut,np,ap,sp,op,up,lp,dp,cp,pp,fp,Lt,Jg,e0,t0,r0,i0,n0,a0,s0,o0,u0,Vu=U(()=>{ie(),ae(),Pe(),se(),N1(),Pt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},ip=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Xa=(e,t,r,i,n,a,s=!1,o=!1)=>{let l=[],d=r[0].dims,p=d.length,f=B.normalizeAxes(n,p),h=!o&&f.length===0;d.forEach((b,$)=>{h||f.indexOf($)>=0?s&&l.push(1):l.push(b)});let m=l.length,_=B.size(l);return{name:e,shaderCache:t,getShaderSource:b=>{let $=[],v=D("_A",r[0].dataType,p),w=J("output",a,m),I=i(v,w,f),k=I[2];for(let T=0,C=0;T<p;T++)h||f.indexOf(T)>=0?(s&&C++,k=`for(var j${T}: u32 = 0; j${T} < ${d[T]}; j${T}++) {
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
        }`},getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...te(d,l)]})}},nu=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),ke({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ut=(e,t,r,i)=>{let n=e.inputs,a=n.length===1?r:nu(n,r);e.compute(Xa(t,{hint:a.cacheKey,inputDependencies:["rank"]},[n[0]],a.noopWithEmptyAxes&&a.axes.length===0?ip:i,a.axes,n[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},np=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},ap=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},sp=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},op=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},up=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceMax",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},lp=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceMean",t,(r,i,n)=>{let a=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},dp=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceMin",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},cp=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},pp=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},fp=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Lt=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?i*=e[a]:n*=e[a];return n<32&&i>1024},Jg=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lp(e,t):qg(e,t)},e0=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ap(e,t):Vg(e,t)},t0=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?sp(e,t):Fg(e,t)},r0=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?op(e,t):Hg(e,t)},i0=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?up(e,t):jg(e,t)},n0=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dp(e,t):Kg(e,t)},a0=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cp(e,t):Zg(e,t)},s0=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pp(e,t):Xg(e,t)},o0=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fp(e,t):Yg(e,t)},u0=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?np(e,t):Qg(e,t)}}),io,l0,d0,au,M1=U(()=>{ie(),Pe(),Vu(),io=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},l0=(e,t)=>{io(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Xa("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},d0=(e,t)=>{io(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Xa("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},au=e=>ke(e)}),hp,ka,mp,gp,_p,Gn,yp,c0,Fu=U(()=>{ie(),ae(),Gu(),se(),hp=(e,t)=>{let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],p=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=n.dims[0]/3,h=f,m=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let _=d;if(f!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==f+h+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(s){if(h!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=s.dims[3])}let $=_+b,v=-1,w=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:$,maxSequenceLength:v,inputHiddenSize:p,hiddenSize:f,vHiddenSize:m,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ka=(e,t,r)=>t&&e?`
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
    `,mp=(e,t,r,i,n,a,s,o)=>{let l=Me(s?1:a),d=64,p=a/l;p<d&&(d=32);let f=Math.ceil(a/l/d),h=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:p},{type:12,data:f}],m=Fe(e.dataType,l),_=rt(1,l),b=["type"];s&&b.push("type"),o&&b.push("type");let $=v=>{let w=J("x",e.dataType,e.dims,l),I=[w],k=s?D("seq_lens",s.dataType,s.dims):void 0;k&&I.push(k);let T=o?D("total_sequence_length_input",o.dataType,o.dims):void 0;T&&I.push(T);let C=rt(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(z).declareVariables(...I)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${ka(k,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
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
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${m};${l}`,inputDependencies:b},getShaderSource:$,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:h})}},gp=(e,t,r,i,n,a,s,o,l)=>{let d=s+a.kvSequenceLength,p=[a.batchSize,a.numHeads,a.sequenceLength,d],f=e>1&&i,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=f?[a.batchSize,h,d,a.headSize]:void 0,_=a.nReps?a.nReps:1,b=a.scale===0?1/Math.sqrt(a.headSize):a.scale,$=Me(a.headSize),v=a.headSize/$,w=12,I={x:Math.ceil(d/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},k=[{type:12,data:a.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:b},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:_}],T=f&&i&&B.size(i.dims)>0,C=["type","type"];T&&C.push("type"),n&&C.push("type"),o&&C.push("type"),l&&C.push("type");let z=[{dims:p,dataType:t.dataType,gpuDataType:0}];f&&z.push({dims:m,dataType:t.dataType,gpuDataType:0});let x=N=>{let P=D("q",t.dataType,t.dims,$),V=D("key",r.dataType,r.dims,$),H=[P,V];if(T){let L=D("past_key",i.dataType,i.dims,$);H.push(L)}n&&H.push(D("attention_bias",n.dataType,n.dims));let j=o?D("seq_lens",o.dataType,o.dims):void 0;j&&H.push(j);let R=l?D("total_sequence_length_input",l.dataType,l.dims):void 0;R&&H.push(R);let Z=J("output",t.dataType,p),X=[Z];f&&X.push(J("present_key",t.dataType,m,$));let Q=rt(1,$),he=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${P.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${P.type.storage}, ${w*w}>;
  ${N.registerUniforms(he).declareVariables(...H,...X)}
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
    ${ka(j,R,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Q}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Q}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch($){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${$}`)}})()};
        output[outputIdx] = ${Z.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${$};${n!==void 0};${i!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:z,dispatchGroup:I,programUniforms:k}),getShaderSource:x}},_p=(e,t,r,i,n,a,s=void 0,o=void 0)=>{let l=a+n.kvSequenceLength,d=n.nReps?n.nReps:1,p=n.vHiddenSize*d,f=e>1&&i,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,m=f?[n.batchSize,h,l,n.headSize]:void 0,_=[n.batchSize,n.sequenceLength,p],b=12,$={x:Math.ceil(n.vHeadSize/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},v=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:p},{type:12,data:a},{type:12,data:n.kvSequenceLength},{type:12,data:d}],w=f&&i&&B.size(i.dims)>0,I=["type","type"];w&&I.push("type"),s&&I.push("type"),o&&I.push("type");let k=[{dims:_,dataType:t.dataType,gpuDataType:0}];f&&k.push({dims:m,dataType:t.dataType,gpuDataType:0});let T=C=>{let z=D("probs",t.dataType,t.dims),x=D("v",r.dataType,r.dims),N=[z,x];w&&N.push(D("past_value",i.dataType,i.dims));let P=s?D("seq_lens",s.dataType,s.dims):void 0;s&&N.push(P);let V=o?D("total_sequence_length_input",o.dataType,o.dims):void 0;o&&N.push(V);let H=[J("output",t.dataType,_)];f&&H.push(J("present_value",t.dataType,m));let j=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${z.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${z.type.value}, ${b*b}>;
  ${C.registerUniforms(j).declareVariables(...N,...H)}
  ${C.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${ka(P,V,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:k,dispatchGroup:$,programUniforms:v}),getShaderSource:T}},Gn=(e,t,r,i,n,a,s,o,l,d,p=void 0,f=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),m=h>1?s:void 0,_=h>1?o:void 0,b=h>1?d.pastSequenceLength:0,$=b+d.kvSequenceLength,v=l&&B.size(l.dims)>0?l:void 0,w=[t,r];m&&B.size(m.dims)>0&&w.push(m),v&&w.push(v),p&&w.push(p),f&&w.push(f);let I=e.compute(gp(h,t,r,m,v,d,b,p,f),{inputs:w,outputs:h>1?[-1,1]:[-1]})[0];e.compute(mp(I,d.batchSize,d.numHeads,b,d.sequenceLength,$,p,f),{inputs:p&&f?[I,p,f]:[I],outputs:[]});let k=[I,i];_&&B.size(_.dims)>0&&k.push(_),p&&k.push(p),f&&k.push(f),e.compute(_p(h,I,i,_,d,b,p,f),{inputs:k,outputs:h>1?[0,2]:[0]})},yp=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=f=>{let h=J("output_q",l[0].dataType,r),m=J("output_k",l[0].dataType,r),_=J("output_v",l[0].dataType,r),b=D("input",l[0].dataType,l[0].dims),$=D("weight",l[1].dataType,l[1].dims),v=D("bias",l[2].dataType,l[2].dims),w=b.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${f.registerUniforms(I).declareVariables(b,$,v,h,m,_)}
  ${f.mainStart([s,s,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:p},{inputs:l,outputs:[-1,-1,-1]})},c0=(e,t)=>{let r=hp(e.inputs,t),[i,n,a]=yp(e,r);return Gn(e,i,n,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),bp,vp,wp,p0,D1=U(()=>{Rt(),ie(),ae(),Pe(),se(),bp=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,a)=>{let s=n.length;if(s!==i.length)throw new Error(`${a}: num dimensions != ${s}`);n.forEach((o,l)=>{if(o!==i[l])throw new Error(`${a}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},vp=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,a=e[0].dims,s=i?Me(a[a.length-1]):1,o=n==="NHWC"&&a.length>1?s:1,l=B.size(a)/s,d=i,p=d?a.length:a,f=D("x",e[0].dataType,e[0].dims,s),h=D("scale",e[1].dataType,e[1].dims,o),m=D("bias",e[2].dataType,e[2].dims,o),_=D("inputMean",e[3].dataType,e[3].dims,o),b=D("inputVar",e[4].dataType,e[4].dims,o),$=J("y",e[0].dataType,p,s),v=()=>{let I="";if(i)I=`let cOffset = ${a.length===1?"0u":n==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")I=`
            ${$.indicesSet("outputIndices","0","0")}
            let cOffset = ${$.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let k=1;k<h.rank;k++)I+=`cIndices[${k}] = outputIndices[${k}];`;I+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return I},w=I=>`
  const epsilon = ${r};
  ${I.registerUniform("outputSize","u32").declareVariables(f,h,m,_,b,$)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${$.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${$.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...te(a)]:[{type:12,data:l}]})}},wp=e=>ke(e),p0=(e,t)=>{let{inputs:r,outputCount:i}=e,n=wp({...t,outputCount:i});if(Ce.webgpu.validateInputContent&&bp(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(vp(r,n))}}),$p,xp,f0,P1=U(()=>{ae(),se(),$p=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},xp=e=>{let t=e[0].dims,r=e[0].dims[2],i=B.size(t)/4,n=e[0].dataType,a=D("input",n,t,4),s=D("bias",n,[r],4),o=D("residual",n,t,4),l=J("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(a,s,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},f0=e=>{$p(e.inputs),e.compute(xp(e.inputs))}}),Sp,Se,h0,m0,g0,_0,y0,b0,v0,w0,$0,kp,x0,S0,k0,I0,Bn,T0,Ua,E0,C0,z0,A0,O0,R0,B0,N0,M0,D0,P0,U0,L0,W0,G0,q0,no,V0,su,ou,F0,H0,j0,Ip,Tp,K0,Hu=U(()=>{ie(),ae(),Pe(),se(),Sp=(e,t,r,i,n,a,s)=>{let o=Math.ceil(t/4),l="";typeof n=="string"?l=`${n}(a)`:l=n("a");let d=D("inputData",r,[o],4),p=J("outputData",i,[o],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(d,p)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",l)}
  }`},Se=(e,t,r,i,n,a=e.dataType,s,o)=>{let l=[{type:12,data:Math.ceil(B.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>Sp(d,B.size(e.dims),e.dataType,a,r,i,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(B.size(d[0].dims)/64/4)},programUniforms:l})}},h0=e=>{e.compute(Se(e.inputs[0],"Abs","abs"))},m0=e=>{e.compute(Se(e.inputs[0],"Acos","acos"))},g0=e=>{e.compute(Se(e.inputs[0],"Acosh","acosh"))},_0=e=>{e.compute(Se(e.inputs[0],"Asin","asin"))},y0=e=>{e.compute(Se(e.inputs[0],"Asinh","asinh"))},b0=e=>{e.compute(Se(e.inputs[0],"Atan","atan"))},v0=e=>{e.compute(Se(e.inputs[0],"Atanh","atanh"))},w0=e=>ke(e),$0=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Se(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},kp=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ke({min:t,max:r})},x0=(e,t)=>{let r=t||kp(e.inputs),i=rt(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},S0=e=>{e.compute(Se(e.inputs[0],"Ceil","ceil"))},k0=e=>{e.compute(Se(e.inputs[0],"Cos","cos"))},I0=e=>{e.compute(Se(e.inputs[0],"Cosh","cosh"))},Bn=e=>ke(e),T0=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ua=(e="f32")=>`
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
}`,E0=e=>{let t=rt(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Ua(t)))},C0=e=>{e.compute(Se(e.inputs[0],"Exp","exp"))},z0=e=>{e.compute(Se(e.inputs[0],"Floor","floor"))},A0=e=>{let t=rt(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Ua(t)))},O0=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},R0=e=>{e.compute(Se(e.inputs[0],"Not",t=>`!${t}`))},B0=e=>{e.compute(Se(e.inputs[0],"Neg",t=>`-${t}`))},N0=e=>{e.compute(Se(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},M0=e=>{let t=rt(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},D0=e=>{e.compute(Se(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},P0=e=>ke(e),U0=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},L0=e=>{e.compute(Se(e.inputs[0],"Sin","sin"))},W0=e=>{e.compute(Se(e.inputs[0],"Sinh","sinh"))},G0=e=>{e.compute(Se(e.inputs[0],"Sqrt","sqrt"))},q0=e=>{e.compute(Se(e.inputs[0],"Tan","tan"))},no=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,V0=e=>{e.compute(Se(e.inputs[0],"Tanh",no))},su=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${no("v")};
}
`,ou=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,F0=e=>{let t=rt(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"FastGelu",ou,su(t),void 0,e.inputs[0].dataType))},H0=(e,t)=>{let r=rt(e.inputs[0].dataType);return e.compute(Se(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},j0=e=>{e.compute(Se(e.inputs[0],"Log","log"))},Ip=(e,t)=>`
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
`,Tp=e=>`quick_gelu_impl(${e})`,K0=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"QuickGelu",Tp,Ip(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Ep,Cp,Z0,U1=U(()=>{ae(),se(),Hu(),Ep=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Cp=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=D("input",e[0].dataType,e[0].dims,4),i=D("bias",e[0].dataType,[e[0].dims[2]],4),n=J("output",e[0].dataType,t,4),a=B.size(t)/4,s=Fe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,n)}

  ${Ua(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Z0=e=>{Ep(e.inputs),e.compute(Cp(e.inputs))}}),zp,Ap,Wt,X0,Y0,Q0,J0,e_,t_,r_,i_,n_,a_,L1=U(()=>{ie(),ae(),se(),zp=(e,t,r,i,n,a,s,o,l,d,p,f)=>{let h,m;typeof o=="string"?h=m=(w,I)=>`${o}((${w}),(${I}))`:typeof o=="function"?h=m=o:(h=o.scalar,m=o.vector);let _=J("outputData",p,i.length,4),b=D("aData",l,t.length,4),$=D("bData",d,r.length,4),v;if(n)if(a){let w=B.size(t)===1,I=B.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,T=r.length>0&&r[r.length-1]%4===0;w||I?v=_.setByOffset("global_idx",m(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),I?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"))):v=`
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
            ${I}[${k}] = ${T}(${h(C,z)});
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

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Ap=(e,t,r,i,n,a,s=r.dataType)=>{let o=r.dims.map(Number),l=i.dims.map(Number),d=!B.areEqual(o,l),p=o,f=B.size(o),h=!1,m=!1,_=[d];if(d){let b=en.calcShape(o,l,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");p=b.slice(),f=B.size(p);let $=B.size(o)===1,v=B.size(l)===1,w=o.length>0&&o[o.length-1]%4===0,I=l.length>0&&l[l.length-1]%4===0;_.push($),_.push(v),_.push(w),_.push(I);let k=1;for(let T=1;T<p.length;T++){let C=o[o.length-T],z=l[l.length-T];if(C===z)k*=C;else break}k%4===0?(m=!0,h=!0):($||v||w||I)&&(h=!0)}else h=!0;return _.push(h),{name:e,shaderCache:{hint:t+_.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>zp(b,o,l,p,h,d,m,n,r.dataType,i.dataType,s,a),getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(B.size(p)/4)},...te(o,l,p)]})}},Wt=(e,t,r,i,n,a)=>{e.compute(Ap(t,n??"",e.inputs[0],e.inputs[1],r,i,a))},X0=e=>{Wt(e,"Add",(t,r)=>`${t}+${r}`)},Y0=e=>{Wt(e,"Div",(t,r)=>`${t}/${r}`)},Q0=e=>{Wt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},J0=e=>{Wt(e,"Mul",(t,r)=>`${t}*${r}`)},e_=e=>{let t=D("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Wt(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
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
      `)},t_=e=>{Wt(e,"Sub",(t,r)=>`${t}-${r}`)},r_=e=>{Wt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},i_=e=>{Wt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},n_=e=>{Wt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},a_=e=>{Wt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Op,Rp,Bp,Np,s_,o_,W1=U(()=>{ie(),ae(),Pe(),se(),Op=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,a=i.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},Rp=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Bp=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let a=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(a):n===0?i.push(`if (inputIndex == ${n}u) { ${a} }`):n===r-1?i.push(`else { ${a} }`):i.push(`else if (inputIndex == ${n}) { ${a} }`)}return i.join(`
`)},Np=(e,t,r,i)=>{let n=B.size(r),a=new Array(e.length),s=new Array(e.length),o=0,l=[],d=[],p=[{type:12,data:n}];for(let b=0;b<e.length;++b)o+=e[b].dims[t],a[b]=o,d.push(e[b].dims.length),s[b]=D(`input${b}`,i,d[b]),l.push("rank"),p.push({type:12,data:a[b]});for(let b=0;b<e.length;++b)p.push(...te(e[b].dims));p.push(...te(r));let f=J("output",i,r.length),h=f.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),_=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let $=0;$<e.length;$++)b.registerUniform(`sizeInConcatAxis${$}`,"u32");return b.declareVariables(...s,f)})()}

  ${Rp(a.length,m)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Bp(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}),getShaderSource:_}},s_=(e,t)=>{let r=e.inputs,i=r[0].dims,n=B.normalizeAxis(t.axis,i.length);Op(r,n);let a=i.slice();a[n]=r.reduce((o,l)=>o+(l.dims.length>n?l.dims[n]:0),0);let s=r.filter(o=>B.size(o.dims)>0);e.compute(Np(s,n,a,r[0].dataType),{inputs:s})},o_=e=>ke({axis:e.axis})}),wi,$i,xi,ju,ki=U(()=>{ie(),ae(),wi=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},$i=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},xi=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ju=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[Rg,Bg];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ze,u_,Ku=U(()=>{Ze=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},u_=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),l_,G1=U(()=>{l_=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Pn,Zu,Xu=U(()=>{ie(),ae(),se(),ki(),Pn=(e,t,r,i,n)=>{let a=i-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${ee(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ee(n,o+a,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Zu=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,l=s[s.length-2],d=o[o.length-1],p=s[s.length-1],f=Me(d),h=Me(p),m=Me(l),_=B.size(r)/f/m,b=e.length>2,$=i?i.slice(0,-2):r.slice(0,-2),v=[B.size($),l,d],w=[{type:12,data:_},{type:12,data:l},{type:12,data:d},{type:12,data:p}];$i(t,w),w.push(...te($,s,o)),b&&w.push(...te(e[2].dims)),w.push(...te(v));let I=k=>{let T=qu("batch_dims",e[0].dataType,$.length),C=D("a",e[0].dataType,s.length,h),z=D("b",e[1].dataType,o.length,f),x=J("output",e[0].dataType,v.length,f),N=Fe(x.type.tensor),P=wi(t,x.type.value,N),V=[C,z],H="";if(b){let Z=n?f:1;V.push(D("bias",e[2].dataType,e[2].dims.length,Z)),H=`${n?`value += bias[col / ${Z}];`:`value += ${x.type.value}(bias[row + i]);`}`}let j=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];xi(t,j);let R=()=>{let Z=`var a_data: ${C.type.value};`;for(let X=0;X<h;X++)Z+=`
              let b_data${X} = b[(b_offset + (k + ${X}) * uniforms.N + col) / ${f}];`;for(let X=0;X<m;X++){Z+=`a_data = a[(a_offset + (row + ${X}) * uniforms.K + k) / ${h}];`;for(let Q=0;Q<h;Q++)Z+=`
            values[${X}] = fma(${z.type.value}(a_data${h===1?"":`[${Q}]`}), b_data${Q}, values[${X}]);
`}return Z};return`
  ${k.registerUniforms(j).registerInternalVariables(T).declareVariables(...V,x)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${C.type.indices};
    ${Pn("a_indices",C,C.rank-2,T.rank,"batch_indices")}
    ${C.indicesSet("a_indices",C.rank-2,0)}
    ${C.indicesSet("a_indices",C.rank-1,0)}
    let a_offset = ${C.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${Pn("b_indices",z,z.rank-2,T.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${x.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${R()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${H}
      ${P}
      let cur_indices = ${x.type.indices}(batch, row + i, col);
      let offset = ${x.indicesToOffset("cur_indices")};
      ${x.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${h};${m};${n}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:I}}}),Mp,Dp,uu,ao,Pp,lu,Up,Ya,Yu=U(()=>{ie(),ae(),se(),ki(),Xu(),Ku(),Mp=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Dp=(e,t)=>e?`
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
        }`,uu=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],p=n?l:a,f=n?a:l,h=p/t[0],m=a/t[1];if(!((n&&h===4&&e[1]===4||!n&&(h===3||h===4))&&p%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${p/h}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
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
  let globalRowStart = i32(workgroupId.y) * ${l};

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
          ${Mp(n,i)}
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
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Dp(n,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ao=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Pp=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",lu=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32,l=!1)=>{let d=e[1]*t[1],p=e[0]*t[0],f=n?d:a,h=n?a:d;if(!(h%t[1]===0&&f%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=h/t[1],_=f/t[0],b=a/t[1],$=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${ao(n,i)}
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
      ${ao(n,i)}
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
      ${Pp(n)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${h}>;
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
`},Up=(e,t,r,i,n=!1)=>{let[a,s,o,l]=i,d=Fe(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ze(e,d)} {
      var value = ${Ze(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Pn("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ze(e,d)} {
      var value = ${Ze(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Pn("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ze(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Ze(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Ya=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,l=s.slice(0,-2),d=o.slice(0,-2),p=i?i.slice(0,-2):r.slice(0,-2),f=B.size(p),h=s[s.length-2],m=s[s.length-1],_=o[o.length-1],b=m%4===0&&_%4===0,$=h<=8?[4,1,1]:[4,4,1],v=[8,8,1],w=[Math.ceil(_/v[0]/$[0]),Math.ceil(h/v[1]/$[1]),Math.ceil(f/v[2]/$[2])],I=b?4:1,k=[...l,h,m/I],T=k.length,C=[...d,m,_/I],z=C.length,x=[f,h,_/I],N=[{type:6,data:h},{type:6,data:_},{type:6,data:m}];$i(t,N),N.push(...te(p,k,C));let P=["rank","rank"],V=e.length>2;V&&(N.push(...te(e[2].dims)),P.push("rank")),N.push(...te(x));let H=j=>{let R=p.length,Z=qu("batchDims",e[0].dataType,R,1),X=Fe(e[0].dataType),Q=D("a",e[0].dataType,T,I),he=D("b",e[1].dataType,z,I),L=J("result",e[0].dataType,x.length,I),oe=[Q,he];if(V){let we=n?I:1;oe.push(D("bias",e[2].dataType,e[2].dims.length,we))}let W=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];xi(t,W);let F=Fe(L.type.tensor),Y=wi(t,L.type.value,F),G=Up(I,V,Y,[Z,Q,he,L],n);return`
  ${j.registerUniforms(W).registerInternalVariables(Z).declareVariables(...oe,L)}
  ${G}
  ${b?uu($,v,X,Z):lu($,v,X,Z)}
                   `};return{name:"MatMul",shaderCache:{hint:`${$};${t.activation};${b};${n}`,inputDependencies:P},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:N}),getShaderSource:H}}}),Lp,d_,q1=U(()=>{ie(),Cr(),se(),ki(),Ku(),G1(),Yu(),Lp=(e,t,r,i,n=!1,a,s=4,o=4,l=4,d="f32")=>{let p=N=>{switch(N){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},f=N=>{switch(N){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},h=e?`
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
    var resData = ${Ze(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${b}) {
      ${h}
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
    return ${Ze(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Ze(s,d)}(0.0);`,k=e?i&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${Ze(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${Ze(o,d)}(0.0);`,T=Ze(l,d),C=Ze(e?s:o,d),z=Ze(e?o:s,d),x=wi(a,T,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?I:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?k:I}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${u_(n)}
      ${x}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},d_=(e,t,r,i,n,a,s,o,l)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],f=r[0],h=d?r[2]:r[3],m=d?r[1]:r[2],_=d?r[3]:r[1],b=d&&(p%4===0||p%3===0)&&_%4===0,$=d?_:h*m,v=d?h*m:_,w=[8,8,1],I=i<=8?[4,1,1]:[4,4,1],k=[Math.ceil($/w[0]/I[0]),Math.ceil(v/w[1]/I[1]),Math.ceil(f/w[2]/I[2])];ye("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let T=b?d&&p%4!==0?3:4:1,C=w[1]*I[1],z=w[0]*I[0],x=Math.max(w[0]*T,w[1]),N=i%C===0,P=n%z===0,V=a%x===0,H=b?[T,4,4]:[1,1,1],j=[{type:6,data:i},{type:6,data:n},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];$i(t,j),j.push(...te(e[0].dims,e[1].dims));let R=["rank","rank"];s&&(j.push(...te(e[2].dims)),R.push("rank")),j.push(...te(r));let Z=X=>{let Q=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];xi(t,Q);let he=b?4:1,L=Fe(e[0].dataType),oe=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${L}>`:L}) {
        result[flatIndex] = ${b?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,W=D("x",e[0].dataType,e[0].dims.length,T===3?1:T),F=D("w",e[1].dataType,e[1].dims.length,he),Y=[W,F],G=J("result",e[0].dataType,r.length,he);if(s){let we=D("bias",e[2].dataType,e[2].dims.length,he);Y.push(we),oe+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${L}>`:L} {
          return bias[coords.${d?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${l_("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${X.registerUniforms(Q).declareVariables(...Y,G)}
        ${oe}
        ${Lp(d,N,P,V,s,t,H[0],H[1],H[2],L)}
        ${b?uu(I,w,L,void 0,!d,x):lu(I,w,L,void 0,!d,x,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${b};${N};${P};${V};${C};${z};${x}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:j}),getShaderSource:Z}}}),Wp,so,bn,Gp,oo,qp,c_,p_,V1=U(()=>{ie(),Cr(),ae(),se(),ki(),Ku(),Wp=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},so=e=>typeof e=="number"?[e,e,e]:e,bn=(e,t)=>t<=1?e:e+(e-1)*(t-1),Gp=(e,t,r,i=1)=>{let n=bn(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},oo=(e,t,r,i,n)=>{n==null&&(n=Gp(e,t[0],i[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*n)/i[s]+1));return a},qp=(e,t,r,i,n,a,s,o,l,d)=>{let p,f,h,m;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=oo([t,r,i,1],[o,l,d],1,[n,a,s],e);f=_[0],h=_[1],m=_[2]}else if(Array.isArray(e)){if(!e.every((b,$,v)=>b===v[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=oo([t,r,i,1],[o,l,d],1,[n,a,s],e[0]);f=_[0],h=_[1],m=_[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/n),h=Math.ceil(r/a),m=Math.ceil(i/s);let _=(f-1)*n+o-t,b=(h-1)*a+l-r,$=(m-1)*s+d-i,v=Math.floor(_/2),w=_-v,I=Math.floor(b/2),k=b-I,T=Math.floor($/2),C=$-T;p={top:I,bottom:k,left:T,right:C,front:v,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:f,outHeight:h,outWidth:m}},c_=(e,t,r,i,n,a=!1,s="channelsLast")=>{let o,l,d,p,f;if(s==="channelsLast")[o,l,d,p,f]=e;else if(s==="channelsFirst")[o,f,l,d,p]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,m,_,b]=t,[$,v,w]=so(r),[I,k,T]=so(i),C=bn(m,I),z=bn(_,k),x=bn(b,T),{padInfo:N,outDepth:P,outHeight:V,outWidth:H}=qp(n,l,d,p,$,v,w,C,z,x),j=a?h*f:h,R=[0,0,0,0,0];return s==="channelsFirst"?R=[o,j,P,V,H]:s==="channelsLast"&&(R=[o,P,V,H,j]),{batchSize:o,dataFormat:s,inDepth:l,inHeight:d,inWidth:p,inChannels:f,outDepth:P,outHeight:V,outWidth:H,outChannels:j,padInfo:N,strideDepth:$,strideHeight:v,strideWidth:w,filterDepth:m,filterHeight:_,filterWidth:b,effectiveFilterDepth:C,effectiveFilterHeight:z,effectiveFilterWidth:x,dilationDepth:I,dilationHeight:k,dilationWidth:T,inShape:e,outShape:R,filterShape:t}},p_=(e,t,r,i,n,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],l={x:r.map(($,v)=>v)},d=[Math.ceil(Wp(l.x.map($=>r[$]))/o[0]),1,1];ye("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let p=1,f=B.size(r),h=[{type:12,data:f},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];$i(t,h),h.push(...te(e[0].dims,e[1].dims));let m=["rank","rank"],_=e.length===3;_&&(h.push(...te(e[2].dims)),m.push("rank")),h.push(...te(r));let b=$=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];xi(t,v);let w=1,I=Fe(e[0].dataType),k=D("x",e[0].dataType,e[0].dims.length,p),T=D("W",e[1].dataType,e[1].dims.length,w),C=[k,T],z=J("result",e[0].dataType,r.length,w),x="";if(_){let V=D("bias",e[2].dataType,e[2].dims.length,w);C.push(V),x+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${I} {
          return bias[${s?ee("coords",4,5):ee("coords",1,5)}];
        }`}let N=Ze(p,I),P=wi(t,N,I);return`
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
              let batch = ${ee("coords",0,k.rank)};
              let d2 = ${s?ee("coords",k.rank-1,k.rank):ee("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${s?ee("coords",1,k.rank):ee("coords",2,k.rank)},
              ${s?ee("coords",2,k.rank):ee("coords",3,k.rank)},
              ${s?ee("coords",3,k.rank):ee("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?ee("uniforms.x_shape",1,k.rank):ee("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${s?ee("uniforms.x_shape",2,k.rank):ee("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${s?ee("uniforms.x_shape",3,k.rank):ee("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${s?ee("uniforms.x_shape",4,k.rank):ee("uniforms.x_shape",1,k.rank)};
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${p};${_}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:h}),getShaderSource:b}}}),f_,h_,F1=U(()=>{ie(),ae(),se(),ki(),f_=(e,t,r,i)=>{let n=e.length>2,a=n?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],p=d/t.group,f=l&&p>=4?Me(d):1,h=B.size(r)/f,m=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];$i(t,m),m.push(...te(s,[o[0],o[1],o[2],o[3]/f]));let _=n?["rank","rank","rank"]:["rank","rank"];m.push(...te([r[0],r[1],r[2],r[3]/f]));let b=$=>{let v=J("output",e[0].dataType,r.length,f),w=Fe(v.type.tensor),I=wi(t,v.type.value,w),k=D("x",e[0].dataType,s.length),T=D("w",e[1].dataType,o.length,f),C=[k,T];n&&C.push(D("b",e[2].dataType,e[2].dims,f));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];xi(t,z);let x=l?`
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
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${x}
    ${a}
    ${I}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:b}},h_=(e,t,r,i)=>{let n=e.length>2,a=Me(r[3]),s=Me(r[2]),o=B.size(r)/a/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],p=[r[0],r[1],r[2],r[3]/a],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];$i(t,f),f.push(...te(l,d,p));let h=(s-1)*t.strides[1]+d[1],m=_=>{let b=J("output",e[0].dataType,p.length,a),$=Fe(b.type.tensor),v=wi(t,b.type.value,$),w=D("x",e[0].dataType,l.length,a),I=D("w",e[1].dataType,d.length,a),k=[w,I];n&&k.push(D("b",e[2].dataType,e[2].dims,a));let T=n?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return xi(t,C),`
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

    var x_vals: array<${w.type.value}, ${h}>;
    var values: array<${b.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${h};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:m}}}),Vp,Ia,Fp,Ta,du,uo,Hp,jp,cu,H1=U(()=>{ae(),q1(),V1(),Yu(),F1(),ki(),Xu(),Fr(),Vp=(e,t,r,i,n,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),l=o.length,d=t[0],p=t.slice(2).map((h,m)=>h+(h-1)*(r[m]-1)),f=o.map((h,m)=>h+i[m]+i[m+l]).map((h,m)=>Math.floor((h-p[m]+n[m])/n[m]));return f.splice(0,0,s),f.splice(a?3:1,0,d),f},Ia=[2,3,1,0],Fp=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Ta=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let i=e.pads.slice();Za.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},du=e=>{let t=ju(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},uo=(e,t,r,i)=>{let n=r.format==="NHWC",a=Vp(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let C=[t[0]];if(n){let z=e.kernelCustomData.wT??e.compute($t(t[1],Ia),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),C.push(z)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(h_(C,r,a,i),{inputs:C}):e.compute(f_(C,r,a,i),{inputs:C});return}let s=t.length===3,o=t[0].dims[n?1:2],l=t[0].dims[n?2:3],d=t[0].dims[n?3:1],p=t[1].dims[2],f=t[1].dims[3],h=a[n?1:2],m=a[n?2:3],_=a[n?3:1],b=n&&p===o&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(b||p===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let C=a[0],z,x,N,P=[];if(n){let j=e.kernelCustomData.wT??e.compute($t(t[1],Ia),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=j),b){let R=o*l*d;z=t[0].reshape([1,C,R]),x=j.reshape([1,R,_]),N=[1,C,_]}else z=t[0].reshape([C,o*l,d]),x=j.reshape([1,d,_]),N=[C,h*m,_];P.push(z),P.push(x)}else z=t[0].reshape([C,d,o*l]),x=t[1].reshape([1,_,d]),N=[C,_,h*m],P.push(x),P.push(z);s&&P.push(t[2]);let V=N[2],H=P[0].dims[P[0].dims.length-1];V<8&&H<8?e.compute(Zu(P,r,a,N,n,i),{inputs:P}):e.compute(Ya(P,r,a,N,n,i),{inputs:P});return}let $=!0,v=e.kernelCustomData.wT??e.compute($t(t[1],Ia),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let w=[t[0],v];s&&w.push(t[2]);let I=n?h*m:_,k=n?_:h*m,T=p*f*d;e.compute(d_(w,r,a,I,k,T,s,$,i),{inputs:w})},Hp=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=Ta({...t,pads:n,strides:a,dilations:s,kernelShape:o},i);uo(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},jp=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Ta(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=c_(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,i);e.compute(p_(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},cu=(e,t)=>{if(Fp(e.inputs,t),e.inputs[0].dims.length===3)Hp(e,t);else if(e.inputs[0].dims.length===5)jp(e,e.inputs,t);else{let r=Ta(t,e.inputs);uo(e,e.inputs,r)}}}),m_,j1=U(()=>{ie(),Cr(),ae(),se(),m_=(e,t,r)=>{let i=e.length>2,n=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,l=o[2]/s,d=o[3],p=a?Me(l):1,f=a&&d===1&&l>=4,h=f?Math.floor(l/4)*4:Math.floor(l/p)*p,m=l-h,_=a?Me(d):1,b=a?d===1?p:_:1,$=B.size(n)/_,v=[Math.ceil($/64),1,1];ye("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let w=["rank","rank"],I=[t.strides[0],t.strides[1]],k=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],T=[t.dilations[0],t.dilations[1]],C=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],z=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:$},{type:12,data:I},{type:12,data:k},{type:12,data:T},{type:12,data:C},{type:6,data:z},{type:12,data:h},{type:12,data:l},{type:12,data:d},...te(e[0].dims,e[1].dims)];i&&(x.push(...te(e[2].dims)),w.push("rank")),x.push(...te(n));let N=P=>{let V=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:z.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],H=Fe(e[0].dataType),j=a?1:2,R=a?2:3,Z=a?3:1,X=D("W",e[1].dataType,e[1].dims.length,b),Q=D("Dy",e[0].dataType,e[0].dims.length,p),he=[Q,X];i&&he.push(D("bias",e[2].dataType,[n[Z]].length,_));let L=J("result",e[0].dataType,n.length,_),oe=()=>{let Y="";if(f)p===4?Y+=`
        let xValue = ${Q.getByOffset("x_offset")};
        let wValue = ${X.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?Y+=`
          dotProd = dotProd + dot(vec4<${H}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}), vec4<${H}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(Y+=`
          dotProd = dotProd + dot(vec4<${H}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}, ${Q.getByOffset("x_offset + 2u")}, ${Q.getByOffset("x_offset + 3u")}), vec4<${H}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}, ${X.getByOffset("w_offset + 2u")}, ${X.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Y+=`
                  let xValue = ${a?Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):Q.get("batch","inputChannel","idyR","idyC")};
        `,p===1)Y+=`
          let w_offset = ${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${X.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let G=0;G<p;G++)Y+=`
            let wValue${G} = ${X.getByOffset(`${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${G}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${G}] * wValue${G};`;return Y},W=()=>{if(m===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let Y="";if(p===1){Y+="dotProd = dotProd";for(let G=0;G<m;G++)Y+=`
            + ${Q.getByOffset(`x_offset + ${G}`)} * ${X.getByOffset(`w_offset + ${G}`)}`;Y+=";"}else if(p===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);Y+=`
          let xValue = ${Q.getByOffset("x_offset")};
          let wValue = ${X.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Y},F=`
            let outputIndices = ${L.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${L.indicesGet("outputIndices",0)};
            let d1 = ${L.indicesGet("outputIndices",Z)};
            let r = ${L.indicesGet("outputIndices",j)};
            let c = ${L.indicesGet("outputIndices",R)};
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
              let dyR = (${H}(dyRCorner) + ${H}(wR)) / ${H}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${H}(uniforms.Dy_shape[${j}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${H}(dyCCorner) + ${H}(wC)) / ${H}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${H}(uniforms.Dy_shape[${R}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${X.indicesToOffset(`${X.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:p}) {
                  ${oe()}
                  inputChannel = inputChannel + ${f?4:p};
                }
                ${W()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${L.setByOffset("global_idx","value")};
          `;return`
    ${P.registerUniforms(V).declareVariables(...he,L)}
      ${P.mainStart()}
      ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${F}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${b}${_}${f}${m}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:N}}}),Kp,Zp,Xp,lo,g_,Yp,co,Qp,__,K1=U(()=>{j1(),ki(),Fr(),Kp=(e,t,r,i,n,a)=>(e-1)*t+r+(i-1)*n+1-a,Zp=(e,t,r,i,n)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=a,r[n]=e-a):t==="SAME_LOWER"&&(r[i]=e-a,r[n]=a)},Xp=(e,t,r,i,n,a,s,o,l,d)=>{let p=e.length-2,f=d.length===0;l.length<p&&l.push(...Array(p-l.length).fill(0));let h=e[0],m=t[o?3:1]*n;for(let _=0,b=e.length-p-(o?1:0);_<p;++_,++b){let $=e[b],v=f?$*s[_]:d[_],w=Kp($,s[_],a[_],t[b],r[_],v);Zp(w,i,a,_,_+p),f&&d.push(s[_]*($-1)+l[_]+(t[b]-1)*r[_]+1-a[_]-a[_+p])}d.splice(0,0,h),d.splice(o?3:1,0,m)},lo=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,h)=>f*h,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}Xp(o,r,l,e.autoPad,e.group,n,d,i,s,a);let p=Object.assign({},e);return Object.assign(p,{kernelShape:r,pads:n,outputPadding:s,outputShape:a,dilations:l,strides:d}),p},g_=e=>{let t=ju(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),p=e.outputPadding,f=e.outputShape;return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,outputPadding:p,outputShape:f,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Yp=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},co=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute($t(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let a=[t[0],n];t.length===3&&a.push(t[2]),e.compute(m_(a,r,i),{inputs:a})},Qp=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),n=[1].concat(n);let l=t.outputPadding;l=[0].concat(l);let d=lo({...t,pads:o,strides:s,dilations:a,kernelShape:n,outputPadding:l},i);co(e,i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},__=(e,t)=>{if(Yp(e.inputs,t),e.inputs[0].dims.length===3)Qp(e,t);else{let r=lo(t,e.inputs);co(e,e.inputs,r)}}}),Jp,y_,b_,Z1=U(()=>{ie(),ae(),Pe(),se(),Jp=(e,t,r,i)=>{let n=B.size(t),a=t.length,s=D("input",e,a),o=J("output",e,a),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=B.normalizeAxis(l,a),p=f=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,m=ee("uniforms.input_shape","uniforms.axis",a),_=i.reverse?h+(i.exclusive?" + 1":""):"0",b=i.reverse?m:h+(i.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...te(t,t)]}),getShaderSource:p}},y_=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(Jp(i,r,n,t),{inputs:[0]})},b_=e=>{let t=e.exclusive===1,r=e.reverse===1;return ke({exclusive:t,reverse:r})}}),ef,tf,rf,v_,w_,X1=U(()=>{ie(),ae(),Pe(),se(),ef=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},tf=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)n.push(r.indicesSet("a",e[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)},rf=(e,t)=>{let r,i,n,a,s,o,l=t.format==="NHWC",d=t.blocksize,p=t.mode==="DCR";l?([r,i,n,a]=e.dims,s=p?[r,i,n,d,d,a/d**2]:[r,i,n,a/d**2,d,d],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[r,d,d,a/d**2,i,n]:[r,a/d**2,d,d,i,n],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),h=f.dims.length,m=e.dataType,_=D("a",m,h),b=J("output",m,h),$=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,b)}

  ${tf(o,h,_,b)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let w=l?[r,i*d,n*d,a/d**2]:[r,a/d**2,i*d,n*d],I=B.size(w),k=f.dims,T=B.sortBasedOnPerm(k,o);return{outputs:[{dims:w,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...te(k,T)]}},getShaderSource:$}},v_=(e,t)=>{ef(e.inputs),e.compute(rf(e.inputs[0],t))},w_=e=>ke({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ea,vn,po,nf,af,sf,of,fo,uf,$_,x_,Y1=U(()=>{ie(),ae(),Pe(),se(),Ea="[a-zA-Z]|\\.\\.\\.",vn="("+Ea+")+",po="^"+vn+"$",nf="("+vn+",)*"+vn,af="^"+nf+"$",sf=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},of=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(af)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(po)))throw new Error("Invalid LHS term");let l=this.processTerm(a,!0,o,s);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(vn)))throw new Error("Invalid RHS");(n=i.match(RegExp(Ea,"g")))==null||n.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,a=!1,s=[],o=0;if(!e.match(RegExp(po))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Ea,"g")),d=new sf(i);return l==null||l.forEach((p,f)=>{if(p==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let h=n-l.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<s.length;m++){let _=String.fromCharCode(48+m);d.addSymbol(_,f+m),this.addSymbol(_,r[o++],i)}}else d.addSymbol(p,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,r[o++],i)}),d}},fo=e=>e+"_max",uf=(e,t,r,i)=>{let n=e.map(d=>d.length).map((d,p)=>D(`input${p}`,t,d)),a=B.size(i),s=J("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let p=[],f="var prod = 1.0;",h="var sum = 0.0;",m="sum += prod;",_=[],b=[],$=[],v=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,T)=>{var C;if(r.rhs.symbolToIndices.has(T)){let z=(C=r.rhs.symbolToIndices.get(T))==null?void 0:C[0];z!==void 0&&r.lhs.forEach((x,N)=>{if(k.inputIndices.includes(N)){let P=x.symbolToIndices.get(T);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(V=>{p.push(`${n[N].indicesSet(`input${N}Indices`,V,s.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,x)=>{if(k.inputIndices.includes(x)){let N=z.symbolToIndices.get(T);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(P=>{_.push(`${n[x].indicesSet(`input${x}Indices`,P,`${T}`)}`)}),v.push(`prod *= ${n[x].getByIndices(`input${x}Indices`)};`)}}),b.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${fo(T)}; ${T}++) {`),$.push("}")});let I=w?[...p,`let sum = ${n.map((k,T)=>k.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...p,h,...b,..._,f,...v,m,...$];return`
            ${d.registerUniforms(o.map(k=>({name:`${fo(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((k,T)=>`var input${T}Indices: ${n[T].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(f=>r.symbolToInfo.has(f)).map(f=>{var h;return{type:12,data:((h=r.symbolToInfo.get(f))==null?void 0:h.dimValue)||0}});d.push({type:12,data:a});let p=e.map((f,h)=>[...te(f)]).reduce((f,h)=>f.concat(h),d);return p.push(...te(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}},getShaderSource:l}},$_=(e,t)=>{let r=new of(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((a,s)=>a.dims);e.compute(uf(n,e.inputs[0].dataType,r,i))},x_=e=>{let t=e.equation.replace(/\s+/g,"");return ke({equation:t})}}),lf,ho,df,cf,S_,Q1=U(()=>{ie(),ae(),se(),lf=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ho=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},df=(e,t)=>e.length>t.length?ho(e,t):ho(t,e),cf=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=df(t,r),n=e[0].dataType,a=n===9||B.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(B.size(i)/o),d=f=>{let h=D("input",n,t.length,s),m=J("output",n,i.length,o),_;if(n===9){let b=($,v,w="")=>`
          let outputIndices${v} = ${m.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${h.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${$}[${v}] = ${w}(${h.getByOffset(`index${v}`)}[component${v}]);
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
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${h.getByOffset(`inputOffset / ${s}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(h,m)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},p=[{type:12,data:l},...te(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p})}},S_=e=>{lf(e.inputs),e.compute(cf(e.inputs),{inputs:[0]})}}),pf,k_,J1=U(()=>{ie(),ae(),se(),Hu(),pf=e=>{let t=e[0].dataType,r=B.size(e[0].dims),i=B.size(e[1].dims),n=i%4===0,a=s=>{let o=D("x",t,[1],4),l=D("bias",t,[1],4),d=J("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${l.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,h=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(p).declareVariables(o,l,d)}

    ${su(rt(t))}

    ${s.mainStart(tn)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",ou("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/tn/4)}})}},k_=e=>{e.inputs.length<2||B.size(e.inputs[1].dims)===0?F0(e):e.compute(pf(e.inputs))}}),ff,hf,I_,T_,e2=U(()=>{ie(),ae(),Pe(),se(),ff=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},hf=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=B.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(a,1,...i);let o=r[a],l=e[0].dataType===9?4:1,d=Math.ceil(B.size(s)/l),p=[{type:12,data:d},{type:6,data:o},{type:12,data:a},...te(e[0].dims,e[1].dims,s)],f=h=>{let m=D("data",e[0].dataType,e[0].dims.length,l),_=D("inputIndices",e[1].dataType,e[1].dims.length),b=J("output",e[0].dataType,s.length,l),$=w=>{let I=i.length,k=`var indicesIndices${w}  = ${_.type.indices}(0);`;for(let T=0;T<I;T++)k+=`${I>1?`indicesIndices${w}[${T}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${T}]`:`outputIndices${w}`};`;k+=`
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
        let outputOffset = global_idx * ${l};
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
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,_,b)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:f}},I_=e=>ke({axis:e.axis}),T_=(e,t)=>{let r=e.inputs;ff(r),e.compute(hf(e.inputs,t))}}),mf,E_,C_,t2=U(()=>{ie(),ae(),se(),mf=(e,t,r,i,n,a,s,o,l)=>{let d=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:l}],p=[a];d.push(...te(t.dims,p));let f=h=>{let m=D("indices_data",t.dataType,t.dims.length),_=J("input_slice_offsets_data",12,1,1),b=[m,_],$=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms($).declareVariables(...b)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},E_=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,a=r[1].dims,s=a[a.length-1],o=B.sizeToDimension(a,a.length-1),l=B.sizeFromDimension(i,t.batchDims+s),d=B.sizeToDimension(i,t.batchDims),p=B.sizeFromDimension(i,t.batchDims),f=o/d,h=new Array(s),m=l;for(let k=0;k<s;++k)h[s-1-k]=m,m*=i[t.batchDims+s-1-k];let _=mf(e,r[1],h,t.batchDims,i,o,f,p,s),b=t.batchDims+s;if(b>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let $=a.slice(0,-1).concat(i.slice(b)),v=B.size($),w=[{type:12,data:v},{type:12,data:l},...te(r[0].dims,_.dims,$)],I=k=>{let T=D("data",r[0].dataType,r[0].dims.length),C=D("slice_offsets",12,_.dims.length),z=J("output",r[0].dataType,$.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,C,z)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:$,dataType:n}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:w}),getShaderSource:I},{inputs:[r[0],_]})},C_=e=>({batchDims:e.batch_dims,cacheKey:""})}),gf,_f,z_,A_,r2=U(()=>{ie(),ae(),Pe(),se(),gf=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=B.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==n.dims.length||!n.dims.map((o,l)=>l===r?Math.ceil(o/i)===a.dims[l]:o===a.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,l)=>o===a.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},_f=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=B.normalizeAxis(t.gatherAxis,n),s=B.normalizeAxis(t.quantizeAxis,n),o=r.slice(0);o.splice(a,1,...i);let l=B.size(o),d=e[2].dataType,p=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...te(...e.map((m,_)=>m.dims),o)],h=m=>{let _=D("data",e[0].dataType,e[0].dims.length),b=D("inputIndices",e[1].dataType,e[1].dims.length),$=D("scales",e[2].dataType,e[2].dims.length),v=e.length>3?D("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=J("output",d,o.length),I=[_,b,$];v&&I.push(v);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
        let dequantized_data = ${rt(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,_)=>_!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,_)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:h}},z_=(e,t)=>{let r=e.inputs;gf(r,t),e.compute(_f(e.inputs,t))},A_=e=>ke({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),yf,bf,O_,R_,i2=U(()=>{ie(),ae(),Pe(),se(),yf=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},bf=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,a=e[1].dims,s=e[1].dataType,o=B.normalizeAxis(t.axis,n),l=r[o],d=a.slice(0),p=B.size(d),f=D("input",i,n),h=D("indicesInput",s,a.length),m=J("output",i,d.length),_=[{type:12,data:p},{type:6,data:l},{type:12,data:o}];return _.push(...te(r,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:_}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,h,m)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},O_=e=>ke({axis:e.axis}),R_=(e,t)=>{let r=e.inputs;yf(r),e.compute(bf(e.inputs,t))}}),vf,wf,B_,N_,n2=U(()=>{ie(),ae(),se(),vf=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},wf=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,a,s]=Og.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[n,a];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(a/l),p=Math.ceil(n/l),f=!0,h=B.size(o),m=[{type:12,data:f?d:h},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(m.push(...te(e[2].dims)),_.push("rank")),m.push(...te(o));let b=v=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",k=D("a",e[0].dataType,e[0].dims),T=D("b",e[1].dataType,e[1].dims),C=k.type.value,z=null,x=[k,T];e.length===3&&(z=D("c",e[2].dataType,e[2].dims.length),x.push(z));let N=J("output",e[0].dataType,o.length);x.push(N);let P=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
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
  }`},$=v=>{let w=D("a",e[0].dataType,e[0].dims),I=D("b",e[1].dataType,e[1].dims),k=null,T=[w,I];e.length===3&&(k=D("c",e[2].dataType,e[2].dims.length),T.push(k));let C=J("output",e[0].dataType,o.length);T.push(C);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],x="",N="";t.transA&&t.transB?(N=`
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
  var<workgroup> tile_a: array<array<${w.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${I.type.storage}, ${l}>, ${l}>;
  ${v.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${C.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${N}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
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
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*p},programUniforms:m}),getShaderSource:$}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:b}},B_=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},N_=(e,t)=>{vf(e.inputs),e.compute(wf(e.inputs,t))}}),ir,gr,Xr,Yr,$f,xf,Sf,kf,If,Tf,Ef,Cf,M_,D_,a2=U(()=>{ie(),ae(),Pe(),se(),[ir,gr,Xr,Yr]=[0,1,2,3],$f=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},xf=`
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
`,Sf=e=>`
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
`,kf=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,If=e=>`
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
`,Tf=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${ir}] = batch;
     indices[${gr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
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
`,Ef=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ir}], indices[${gr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ir}], indices[${gr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ir}], indices[${gr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ir}], indices[${gr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ir}], indices[${gr}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ir}], indices[${gr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Cf=(e,t)=>{let r=D("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=D("grid",e[1].dataType,i.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ir,gr,Xr,Yr]=[0,3,1,2]);let s=J("output",e[0].dataType,a.length),o=r.type.value,l=B.size(a),d=[{type:12,data:l},...te(e[0].dims,i,a)],p=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${xf}
  ${Sf(o)}
  ${kf(t)}
  ${If(t)}
  ${Tf(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
      var grid_indices = vec3<u32>(indices[${ir}], indices[${Xr}], indices[${Yr}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Ef(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let h=B.size(a);return{outputs:[{dims:a,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:d}},getShaderSource:p}},M_=(e,t)=>{$f(e.inputs),e.compute(Cf(e.inputs,t))},D_=e=>ke({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),st,zf,P_,mo,Af,Nn,U_,L_=U(()=>{ie(),ae(),Pe(),Gu(),Fu(),se(),Fr(),st=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,zf=(e,t)=>{let r=e[0],i=st(e,1),n=st(e,2),a=st(e,3),s=st(e,4),o=st(e,5),l=st(e,6),d=st(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=r.dims[0],f=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],m=f,_=0,b=0,$=Math.floor(h/t.numHeads);if(l&&d&&B.size(l.dims)&&B.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==p||l.dims[1]!==t.numHeads||l.dims[3]!==$)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[3]!==$)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],b=l.dims[2]}else if(l&&B.size(l.dims)||d&&B.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&B.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,m=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,m=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,m=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(a&&B.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=_+m,I=0;if(s&&B.size(s.dims)>0){I=8;let z=s.dims;throw z.length===1?z[0]===p?I=1:z[0]===3*p+2&&(I=3):z.length===2&&z[0]===p&&z[1]===w&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,T=h;if(n&&B.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(m!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=n.dims[2]}else{if(m!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=n.dims[1]*n.dims[3],k=!0}}let C=!1;if(s&&B.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&B.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:h,vHiddenSize:T,headSize:$,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:C,passPastInKv:k,qkvFormat:v}},P_=e=>ke({...e}),mo=ke({perm:[0,2,1,3]}),Af=(e,t,r,i,n,a,s)=>{let o=[i,n,a],l=B.size(o),d=[{type:12,data:l},{type:12,data:s},{type:12,data:a}],p=f=>{let h=J("qkv_with_bias",t.dataType,o),m=D("qkv",t.dataType,o),_=D("bias",r.dataType,o),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(b).declareVariables(m,_,h)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p},{inputs:[t,r],outputs:[-1]})[0]},Nn=(e,t,r,i,n,a,s,o)=>{let l=a;if(s&&B.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Af(e,a,s,t,i,r*n,o),l=l.reshape([t,i,r,n]),r===1||i===1?l:e.compute($t(l,mo.perm),{inputs:[l],outputs:[-1]})[0]}else return a.dims.length===3&&(l=a.reshape([t,i,r,n])),r===1||i===1?l:e.compute($t(l,mo.perm),{inputs:[l],outputs:[-1]})[0]},U_=(e,t)=>{let r=zf(e.inputs,t),i=e.inputs[0],n=st(e.inputs,1),a=st(e.inputs,2),s=st(e.inputs,3),o=st(e.inputs,4),l=st(e.inputs,5),d=st(e.inputs,6),p=st(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let f=n&&a&&n.dims.length===4&&a.dims.length===4,h=Nn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(f)return Gn(e,h,n,a,o,void 0,d,p,l,r);if(!n||!a)throw new Error("key and value must be provided");let m=Nn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),_=Nn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);Gn(e,h,m,_,o,void 0,d,p,l,r)}}),Of,Rf,Bf,Nf,pu,W_,G_,q_=U(()=>{ie(),ae(),Pe(),se(),Of=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Rf=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),ke({numOutputs:i,axis:t.axis,splitSizes:r})},Bf=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ee("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Nf=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},pu=(e,t)=>{let r=e[0].dims,i=B.size(r),n=e[0].dataType,a=B.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=D("input",n,r.length),l=new Array(t.numOutputs),d=[],p=[],f=0,h=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){f+=t.splitSizes[_],l[_]=f;let b=r.slice();b[a]=t.splitSizes[_],p.push(b),s[_]=J(`output${_}`,n,b.length),d.push({dims:p[_],dataType:e[0].dataType})}h.push({type:12,data:l},...te(r,...p));let m=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...s)}
  ${Bf(l.length)}
  ${Nf(s)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ee("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h})}},W_=(e,t)=>{Of(e.inputs);let r=e.inputs.length===1?t:Rf(e.inputs,t);e.compute(pu(e.inputs,r),{inputs:[0]})},G_=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return ke({axis:t,numOutputs:i,splitSizes:r})}}),Mf,Qa,V_,F_=U(()=>{ie(),ae(),Pe(),se(),Mf=(e,t)=>{let[r,i,n,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!B.areEqual(i.dims,[])&&!B.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!B.areEqual(n.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],p=n.dims[0],f=B.sizeFromDimension(r.dims,1)/d,h=o===0?n.dims[1]*2:f/s;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==n.dims[1]&&o/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`)},Qa=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:a}=t,s=e[0].dims[0],o=B.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,p=e[2].dims[1],f=n===0?p*2:d/i,h=new Array(s,l,d/f,f-p),m=B.computeStrides(h),_=[{type:1,data:a},{type:12,data:h},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,l*f,1]}):[],...te(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=$=>{let v=D("input",e[0].dataType,e[0].dims.length),w=D("position_ids",e[1].dataType,e[1].dims.length),I=D("cos_cache",e[2].dataType,e[2].dims.length),k=D("sin_cache",e[3].dataType,e[3].dims.length),T=J("output",e[0].dataType,e[0].dims.length);return $.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${$.declareVariables(v,w,I,k,T)}

        ${$.mainStart(tn)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",J("",w.type.tensor,2))};
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
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ke({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(h)/tn)},programUniforms:_})}},V_=(e,t)=>{Mf(e.inputs,t),e.compute(Qa(e.inputs,t))}}),Df,Pf,go,Uf,H_,s2=U(()=>{Pe(),ie(),Fu(),L_(),q_(),Fr(),F_(),se(),Df=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],p=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,h=0,m=!i||i.dims.length===0,_=Math.floor(m?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);m&&(p=_*t.numHeads);let b=a&&a.dims.length!==0,$=s&&s.dims.length!==0;if(b&&a.dims.length===4&&a.dims[0]===l&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&$){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=a.dims[2]}else if(b||$)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let w=0,I=!1,k=t.kvNumHeads?_*t.kvNumHeads:p;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(f!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=n.dims[2]}else{if(f!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=n.dims[1]*n.dims[3],I=!0}}let T=e.length>4?e[5]:void 0;if(T){if(T.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=T.dims.reduce((z,x)=>z*x,1);if(C!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${C}.`);for(let z=0;z<T.dims.length;z++)if(T.dims[z]!==1&&T.dims[z]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${z}] = ${T.dims[z]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:h,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:k,headSize:_,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:v}},Pf=ke({perm:[0,2,1,3]}),go=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute($t(i,Pf.perm),{inputs:[i],outputs:[-1]})[0]),i},Uf=(e,t,r,i)=>{let n=7,a=["type","type"],s=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=p=>{let f=D("seq_lens",r.dataType,r.dims),h=D("total_seq_lens",i.dataType,i.dims),m=J("pos_ids",n,s),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${p.registerUniforms(_).declareVariables(f,h,m)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},H_=(e,t)=>{var k;let r=Df(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((k=e.inputs[1])==null?void 0:k.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,p=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=ke({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,p*r.headSize,p*r.headSize]}),[h,m,_]=!n&&!a?e.compute(pu([i],f),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,a],b,$;if(t.doRotary){let T=e.compute(Uf(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],C=e.inputs[7],z=e.inputs[8],x=ke({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),N=[h,T,C,z],P=[-1];b=e.compute(Qa(N,x),{inputs:N,outputs:P})[0],N.splice(0,1,m);let V=ke({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});$=e.compute(Qa(N,V),{inputs:N,outputs:P})[0]}let v=Nn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?b:h,void 0,0),w=go(e,t.doRotary?$:m,r),I=go(e,_,r);Gn(e,v,w,I,void 0,void 0,s,o,void 0,r,l,d)}}),_o,Lf,Wf,j_,o2=U(()=>{ie(),ae(),Fr(),se(),_o=(e,t,r,i,n,a,s,o)=>{let l=Me(a),d=l===1?"f32":`vec${l}f`,p=l===1?"vec2f":`mat2x${l}f`,f=n*s,h=64;f===1&&(h=256);let m=[n,s,a/l],_=[n,s,2],b=["rank","type","type"],$=[];$.push(...te(m,_));let v=w=>{let I=D("x",t.dataType,3,l),k=D("scale",r.dataType,r.dims),T=D("bias",i.dataType,i.dims),C=J("output",1,3,2),z=[I,k,T,C];return`
  var<workgroup> workgroup_shared : array<${p}, ${h}>;
  const workgroup_size = ${h}u;
  ${w.declareVariables(...z)}
  ${w.mainStart(h)}
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
      let sum_final = ${Vr("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${Vr("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${h}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:f},programUniforms:$}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},Lf=(e,t,r)=>{let i=t[0].dims,n=i,a=2,s=i[0],o=i[1],l=B.sizeFromDimension(i,a),d=Me(l),p=B.size(n)/d,f=_o(e,t[0],t[1],t[2],s,l,o,r.epsilon),h=[s,o,l/d],m=[s,o],_=["type","none"],b=$=>{let v=D("x",t[0].dataType,h.length,d),w=D("scale_shift",1,m.length,2),I=J("output",t[0].dataType,h.length,d),k=[v,w,I];return`
  ${$.registerUniform("output_size","u32").declareVariables(...k)}
  ${$.mainStart()}
  ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...te(h,m,h)]}),getShaderSource:b},{inputs:[t[0],f]})},Wf=(e,t,r)=>{let i=t[0].dims,n=i,a=i[0],s=i[i.length-1],o=B.sizeFromDimension(i,1)/s,l=Me(s),d=B.size(n)/l,p=[{type:12,data:o},{type:12,data:Math.floor(s/l)}],f=["type","type"],h=!1,m=[0,i.length-1];for(let v=0;v<i.length-2;v++)h=h||i[v+1]!==1,m.push(v+1);h=h&&i[i.length-1]!==1;let _=h?e.compute($t(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,w)=>i[m[w]])),b=_o(e,_,t[1],t[2],a,o,s,r.epsilon),$=v=>{let w=Fe(t[0].dataType),I=l===1?"vec2f":`mat${l}x2f`,k=z=>{let x=z===0?"x":"y",N=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${w}(${N}(scale.${x}))`;case 2:return`vec2<${w}>(${N}(scale[0].${x}, scale[1].${x}))`;case 4:return`vec4<${w}>(${N}(scale[0].${x}, scale[1].${x}, scale[2].${x}, scale[3].${x}))`;default:throw new Error(`Not supported compoents ${l}`)}},T=D("input",t[0].dataType,t[0].dims,l),C=J("output",t[0].dataType,n,l);return`
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
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:$},{inputs:[t[0],b]})},j_=(e,t)=>{t.format==="NHWC"?Wf(e,e.inputs,t):Lf(e,e.inputs,t)}}),Gf,qf,K_,u2=U(()=>{ie(),ae(),se(),Gf=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},qf=(e,t,r)=>{let i=t.simplified,n=e[0].dims,a=e[1],s=!i&&e[2],o=n,l=B.normalizeAxis(t.axis,n.length),d=B.sizeToDimension(n,l),p=B.sizeFromDimension(n,l),f=B.size(a.dims),h=s?B.size(s.dims):0;if(f!==p||s&&h!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${h}`);let m=[];for(let T=0;T<n.length;++T)T<l?m.push(n[T]):m.push(1);let _=Me(p),b=["type","type"],$=[{type:12,data:d},{type:1,data:p},{type:12,data:Math.floor(p/_)},{type:1,data:t.epsilon}];s&&b.push("type");let v=r>1,w=r>2,I=T=>{let C=Fe(e[0].dataType),z=[D("x",e[0].dataType,e[0].dims,_),D("scale",a.dataType,a.dims,_)];s&&z.push(D("bias",s.dataType,s.dims,_)),z.push(J("output",e[0].dataType,o,_)),v&&z.push(J("mean_data_output",1,m)),w&&z.push(J("inv_std_output",1,m));let x=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(x).declareVariables(...z)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${iu("f32",_)};
    var mean_square_vector = ${iu("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Pi(C,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Vr("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Vr("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Pi(C,_,"x[j + offset]")};
      let f32scale = ${Pi(C,_,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Pi(C,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:o,dataType:e[0].dataType}];return v&&k.push({dims:m,dataType:1}),w&&k.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:b},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:$}),getShaderSource:I}},K_=(e,t)=>{Gf(e.inputs),e.compute(qf(e.inputs,t,e.outputCount))}}),Vf,Z_,l2=U(()=>{ae(),Xu(),Yu(),Vf=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Z_=e=>{Vf(e.inputs);let t=en.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(Zu(e.inputs,{activation:""},t));else{let n=t[t.length-2],a=B.size(e.inputs[0].dims.slice(0,-2)),s=B.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&n===1&&s===1){let o=e.inputs[0].reshape([1,a,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,a,r],p=[o,l];e.compute(Ya(p,{activation:""},t,d),{inputs:p})}else e.compute(Ya(e.inputs,{activation:""},t))}}}),Ff,Hf,jf,X_,Y_,d2=U(()=>{ie(),ae(),Pe(),se(),Ff=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!B.areEqual(s.dims,[t.n,n,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(B.size(o)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(B.size(l)!==d)throw new Error("zeroPoints input size error.")}},Hf=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),l=B.size(o),d=e[1].dims[2]/4,p=e[0].dataType,f=Me(t.k),h=Me(d),m=Me(s),_=o.concat([n,s]),b=n>1&&s/m%2===0?2:1,$=B.size(_)/m/b,v=64,w=[],I=[l,n,a/f],k=B.convertShape(e[1].dims).slice();k.splice(-1,1,d/h),w.push(...te(I)),w.push(...te(k)),w.push(...te(e[2].dims)),e.length===4&&w.push(...te(B.convertShape(e[3].dims)));let T=[l,n,s/m];w.push(...te(T));let C=z=>{let x=I.length,N=D("a",e[0].dataType,x,f),P=D("b",12,k.length,h),V=D("scales",e[2].dataType,e[2].dims.length),H=[N,P,V],j=e.length===4?D("zero_points",12,e[3].dims.length):void 0;j&&H.push(j);let R=T.length,Z=J("output",e[0].dataType,R,m),X=Fe(e[0].dataType),Q=(()=>{switch(f){case 1:return`array<${X}, 8>`;case 2:return`mat4x2<${X}>`;case 4:return`mat2x4<${X}>`;default:throw new Error(`${f}-component is not supported.`)}})(),he=Math.floor(32/t.bits),L=Math.floor(he/8),oe=()=>{let Y="";for(let G=0;G<L;G++){let we=G*t.bits*4,it=we+t.bits;Y+=`
          // reuse a data (pass ${G})
            var input_offset${G>0?G:""} = ${G===0?N.indicesToOffset(`${N.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${G>0?G:""}: ${Q};
            for (var j${G>0?G:""}: u32 = 0; j${G>0?G:""} < ${8/f}; j${G>0?G:""}++) {
              a_data${G>0?G:""}[j${G>0?G:""}] = ${N.getByOffset(`input_offset${G>0?G:""}`)};
              input_offset${G>0?G:""}++;
            }
          `;for(let Ne=0;Ne<m*b;Ne++)Y+=`
            b_value = ${h===1?`b${Ne}_data`:`b${Ne}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${G*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${we}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${it}u) & b_mask);`}
            b_quantized_values = ${Q}(${Array.from({length:4},(He,Ye)=>`${X}(b_value_lower[${Ye}]), ${X}(b_value_upper[${Ye}])`).join(", ")});
            b_dequantized_values = ${f===1?`${Q}(${Array.from({length:8},(He,Ye)=>`(b_quantized_values[${Ye}] - ${j?`zero_point${Ne}`:"zero_point"}) * scale${Ne}`).join(", ")});`:`(b_quantized_values - ${Q}(${Array(8).fill(`${j?`zero_point${Ne}`:"zero_point"}`).join(",")})) * scale${Ne};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(Ne/m)}]${m>1?`[${Ne%m}]`:""} += ${Array.from({length:8/f},(He,Ye)=>`${f===1?`a_data${G>0?G:""}[${Ye}] * b_dequantized_values[${Ye}]`:`dot(a_data${G>0?G:""}[${Ye}], b_dequantized_values[${Ye}])`}`).join(" + ")};
          `}return Y},W=()=>{let Y=`
            var col_index = col * ${m};
            ${j?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${X}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let G=0;G<m*b;G++)Y+=`
            let scale${G} = ${V.getByOffset("col_index * nBlocksPerCol + block")};
            ${j?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${j.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${G} = ${X}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Y},F=()=>{let Y=`col_index = col * ${m};`;for(let G=0;G<m*b;G++)Y+=`
            let b${G}_data = ${P.getByIndices(`${P.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Y+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Q};
            var b_dequantized_values: ${Q};`,Y};return`
        var<workgroup> workgroup_shared: array<${Z.type.value}, ${b*v}>;
        ${z.declareVariables(...H,Z)}
        ${z.mainStart([v,1,1])}
          let output_indices = ${Z.offsetToIndices(`(global_idx / ${v}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${W()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${F()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${oe()}
                word_offset += ${he/f};
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
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${h};${m};${b};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:p}],dispatchGroup:{x:$},programUniforms:w}),getShaderSource:C}},jf=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),l=B.size(o),d=e[1].dims[2]/4,p=e[0].dataType,f=Me(t.k),h=Me(d),m=o.concat([n,s]),_=128,b=s%8===0?8:s%4===0?4:1,$=_/b,v=Math.floor(32/t.bits),w=$*h*v,I=w/f,k=w/t.blockSize,T=B.size(m)/b,C=[],z=[l,n,a/f],x=B.convertShape(e[1].dims).slice();x.splice(-1,1,d/h),C.push(...te(z)),C.push(...te(x)),C.push(...te(e[2].dims)),e.length===4&&C.push(...te(B.convertShape(e[3].dims)));let N=[l,n,s];C.push(...te(N));let P=V=>{let H=z.length,j=D("a",e[0].dataType,H,f),R=D("b",12,x.length,h),Z=D("scales",e[2].dataType,e[2].dims.length),X=[j,R,Z],Q=e.length===4?D("zero_points",12,e[3].dims.length):void 0;Q&&X.push(Q);let he=N.length,L=J("output",e[0].dataType,he),oe=Fe(e[0].dataType),W=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${oe}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${oe}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${oe}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${oe}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${j.type.value}, ${I}>;
        var<workgroup> inter_results: array<array<${L.type.value}, ${$}>, ${b}>;
        ${V.declareVariables(...X,L)}
        ${V.mainStart([$,b,1])}
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
                sub_a[a_offset] = ${j.getByIndices(`${j.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${j.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${Q?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${oe}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${oe}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${Z.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${R.getByIndices(`${R.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let F=Math.floor(v/8),Y="";for(let G=0;G<F;G++){let we=G*t.bits*4,it=we+t.bits;Y+=`
              ${W()}
              {${t.bits===2?`
                let half_word = b_value >> ${G*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${we}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${it}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${oe}>(${Array.from({length:4},(Ne,He)=>`${oe}(b_value_lower[${He}]), ${oe}(b_value_upper[${He}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${oe}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Ne,He)=>`${`dot(a_data${He}, b_dequantized_values[${He}])`}`).join(" + ")};
              }
              word_offset += ${8/f};`}return Y})()}
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${h};${$};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:p}],dispatchGroup:{x:T},programUniforms:C}),getShaderSource:P}},X_=(e,t)=>{Ff(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(jf(e.inputs,t)):e.compute(Hf(e.inputs,t))},Y_=e=>ke(e)}),Kf,Zf,Xf,Yf,Qf,Jf,eh,th,Q_,c2=U(()=>{ie(),ae(),se(),Kf=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Zf=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${ee("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ee("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${ee("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Xf=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${ee("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ee("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ee("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ee("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Yf=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${ee("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ee("uniforms.x_shape",n,t)})) {
                  k = i32(${ee("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${ee("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Qf=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${ee("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${ee("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${ee("uniforms.x_shape",n,t)})) {
                  k -= i32(${ee("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${ee("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Jf=(e,t,r)=>{switch(r.mode){case 0:return Zf(e,t,r.pads.length);case 1:return Xf(e,t,r.pads.length);case 2:return Yf(e,t,r.pads.length);case 3:return Qf(e,t,r.pads.length);default:throw new Error("Invalid mode")}},eh=(e,t)=>{let r=B.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=B.size(r),a=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...te(e[0].dims,r));let o=["rank"],l=d=>{let p=J("output",e[0].dataType,r.length),f=D("x",e[0].dataType,i.length),h=f.type.value,m=Jf(p,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:s?h:"f32"}),`
            ${d.registerUniforms(_).declareVariables(f,p)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(r)/64)},programUniforms:a}),getShaderSource:l}},th=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,a=new Int32Array(2*n).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)a[Number(o[l])]=Number(r[l]),a[Number(o[l])+n]=Number(r[l+o.length])}else r.forEach((o,l)=>a[Number(l)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:i,pads:s}}else return t},Q_=(e,t)=>{Kf(e.inputs);let r=th(e.inputs,t);e.compute(eh(e.inputs,r),{inputs:[0]})}}),wn,yo,bo,vo,wo,rh,ih,$o,xo,J_,ey,So,ty,ry,ko,iy,ny,ay,sy,p2=U(()=>{Rt(),ie(),ae(),se(),wn=e=>{if(Ce.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},yo=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),l=a?t.dilations.slice():[],d=t.pads.slice();Za.adjustPoolAttributes(r,n,s,o,l,d);let p=Za.computePoolOutputShape(r,n,o,l,s,d,t.autoPad),f=Object.assign({},t);a?Object.assign(f,{kernelShape:s,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let h=p.slice();return h.push(h.splice(1,1)[0]),[f,i?h:p]},bo=(e,t)=>{let r=t.format==="NHWC",i=B.size(e),n=B.size(t.kernelShape),a=[{type:12,data:i},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],f=!!(d+p);a.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:p}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],$=t.pads[t.pads.length-2];h=!!(b+$),a.push({type:12,data:m},{type:12,data:_},{type:12,data:b},{type:12,data:$}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,f,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=B.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,p)=>d+p);return[a,s,!!l,!1,!1]}},vo=(e,t,r,i,n,a,s,o,l,d,p,f)=>{let h=n.format==="NHWC",m=t.type.value,_=J("output",t.type.tensor,i);if(n.kernelShape.length<=2){let b="",$="",v="",w=r-(h?2:1);if(p?b=`
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
                }`,n.kernelShape.length===2){let I=r-(h?3:2);f?$=`
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
            ${e.registerUniforms(l).declareVariables(t,_)}

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
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=n.kernelShape.length,$=n.pads.length,v="";return d?v=`
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
            ${e.registerUniforms(l).declareVariables(t,_)}

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
                  offsets[j] = offset / ${ee("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${ee("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${ee("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${ee("uniforms.pads","j - 2u",$)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},wo=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,rh=e=>`${wo(e)};${e.countIncludePad}`,ih=e=>`${wo(e)};${e.storageOrder};${e.dilations}`,$o=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),xo=(e,t,r,i)=>{let[n,a]=yo(t,i,r),s=D("x",t.dataType,t.dims.length),o=s.type.value,l="value += x_val;",d="";n.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,f,h,m,_]=bo(a,n);p.push(...te(t.dims,a));let b=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${h};${m};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(a)/64)},programUniforms:p}),getShaderSource:$=>vo($,s,t.dims.length,a.length,n,l,d,0,f,h,m,_)}},J_=e=>{let t=e.count_include_pad!==0,r=$o(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:rh(i)}},ey=(e,t)=>{wn(e.inputs),e.compute(xo("AveragePool",e.inputs[0],!1,t))},So={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},ty=e=>{let t=e.format;return{format:t,...So,cacheKey:t}},ry=(e,t)=>{wn(e.inputs),e.compute(xo("GlobalAveragePool",e.inputs[0],!0,t))},ko=(e,t,r,i)=>{let[n,a]=yo(t,i,r),s=`
      value = max(x_val, value);
    `,o="",l=D("x",t.dataType,t.dims.length),d=["rank"],[p,f,h,m,_]=bo(a,n);return p.push(...te(t.dims,a)),{name:e,shaderCache:{hint:`${i.cacheKey};${h};${m};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(a)/64)},programUniforms:p}),getShaderSource:b=>vo(b,l,t.dims.length,a.length,n,s,o,t.dataType===10?-65504:-1e5,f,h,m,_)}},iy=(e,t)=>{wn(e.inputs),e.compute(ko("MaxPool",e.inputs[0],!1,t))},ny=e=>{let t=e.storage_order,r=e.dilations,i=$o(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:ih(n)}},ay=e=>{let t=e.format;return{format:t,...So,cacheKey:t}},sy=(e,t)=>{wn(e.inputs),e.compute(ko("GlobalMaxPool",e.inputs[0],!0,t))}}),nh,ah,oy,uy,f2=U(()=>{ie(),ae(),Pe(),se(),nh=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,a)=>a===t.axis||n===e[0].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},ah=(e,t)=>{let r=B.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,a=e[0].dims,s=e[1].dataType,o=B.size(a),l=i===3||i===2,d=l?[Math.ceil(B.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,f=e.length>2?e[2]:void 0,h=f?l?[Math.ceil(B.size(f.dims)/4)]:f.dims:void 0,m=p.length===0||p.length===1&&p[0]===1,_=m===!1&&p.length===1,b=Me(o),$=m&&(!l||b===4),v=$?b:1,w=$&&!l?b:1,I=D("input",l?12:i,d.length,w),k=D("scale",s,p.length),T=f?D("zero_point",l?12:i,h.length):void 0,C=J("output",s,a.length,v),z=[I,k];T&&z.push(T);let x=[d,p];f&&x.push(h);let N=[{type:12,data:o/v},{type:12,data:r},{type:12,data:t.blockSize},...te(...x,a)],P=V=>{let H=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${V.registerUniforms(H).declareVariables(...z,C)}
      ${V.mainStart()}
          ${V.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
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
          ${T?m?l?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:_?l?`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":I.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:P,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/v/64),y:1,z:1},programUniforms:N})}},oy=(e,t)=>{nh(e.inputs,t),e.compute(ah(e.inputs,t))},uy=e=>ke({axis:e.axis,blockSize:e.blockSize})}),sh,oh,ly,h2=U(()=>{Rt(),ie(),se(),sh=(e,t,r)=>{let i=e===t,n=e<t&&r<0,a=e>t&&r>0;if(i||n||a)throw new Error("Range these inputs' contents are invalid.")},oh=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),a=[n],s=n,o=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...te(a)],l=d=>{let p=J("output",i,a.length),f=p.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(h).declareVariables(p)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},ly=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),Ce.webgpu.validateInputContent&&sh(t,r,i),e.compute(oh(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),uh,lh,dy,cy,m2=U(()=>{ie(),ae(),Pe(),se(),uh=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
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
                ${n}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${a}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},lh=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,a=1,s=Math.ceil(B.sizeToDimension(i,i.length-1)/a),o=i[i.length-1],l=B.sizeFromDimension(r,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:l},...te(e[1].dims,e[2].dims,n)],p=f=>{let h=D("indices",e[1].dataType,e[1].dims.length),m=D("updates",e[2].dataType,e[2].dims.length,a),_=t.reduction!=="none"&&t.reduction!==""?Ug("output",e[0].dataType,n.length):J("output",e[0].dataType,n.length,a);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,m,_)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
    ${uh(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p}},dy=e=>ke({reduction:e.reduction}),cy=(e,t)=>{e.compute(lh(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),dh,ch,ph,Io,fh,hh,mh,gh,_h,yh,bh,vh,To,wh,$h,xh,Sh,kh,py,fy,g2=U(()=>{ie(),ae(),Pe(),se(),dh=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},ch=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,a)=>i[n]=e[a]),i},ph=(e,t,r,i,n,a)=>{let[s,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(p=>a.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>i.push(p)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");dh(i,t),t.axes.length>0&&ch(i,t.axes,d).forEach((p,f)=>i[f]=p)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(p=>n.push(Number(p))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Io=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,fh=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Io("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Io("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",hh=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",mh=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((a,s)=>{i[a]=n[s],i[s+r]=n[t.length+s]}),i):n},gh=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(a=>n.push(a)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((a,s)=>n[a]=r[s])}else r.forEach(a=>n.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((a,s)=>Math.round(a*t[s]))}return n},_h=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=i),r.axes.forEach(a=>n[a]=Math.round(e[a]*t[a]))):(t.fill(i,0,t.length),n.forEach((a,s)=>n[s]=Math.round(a*t[s]))),n},yh=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ee("uniforms.scales","i",i)};
        var roi_low = ${ee("uniforms.roi","i",n)};
        var roi_hi = ${ee("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ee("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ee("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,bh=(e,t,r,i,n,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ee("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ee("uniforms.roi","i",a)};
          var roi_hi = ${ee("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${ee("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ee("uniforms.output_shape","i",i.length)};
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
    }`,vh=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ee("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,To=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",wh=(e,t,r,i,n)=>{let[a,s,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${To(e,l,a,2)}
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
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
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
    }`},$h=(e,t,r,i,n,a,s,o,l,d)=>{let p=r.length===2,[f,h]=p?[0,1]:[2,3],m=e.type.value,_=b=>{let $=b===f?"row":"col";return`
      fn ${$}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[b]},
        ${i[b]}, ${r[b]}, ${a[b]}, ${a[b]} + ${r.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${l};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${$}: ${m} = originalIdx + ${m}(i);
          if (${$} < 0 || ${$} >= ${r[b]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${$} = max(0, min(${$}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${$})`)};
          data[i + 1] = ${b===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(f)};
    ${_(h)};
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
    `},xh=(e,t,r,i,n)=>{let[a,s,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${To(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${s}];
      var height:${p} = originalIndices[${o}];
      var width:${p} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
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
    }`},Sh=(e,t,r,i,n,a)=>{let s=e.dims,o=mh(a,t.axes,s.length),l=gh(s,i,n,t.axes),d=i.slice();i.length===0&&(d=s.map((w,I)=>w===0?1:l[I]/w),t.keepAspectRatioPolicy!=="stretch"&&(l=_h(s,d,t)));let p=J("output",e.dataType,l.length),f=D("input",e.dataType,s.length),h=B.size(l),m=s.length===l.length&&s.every((w,I)=>w===l[I]),_=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,$=f.type.value,v=w=>`
      ${m?"":`
      ${fh(t.coordinateTransformMode,$)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${vh(f,s)};
              ${hh(t.nearestMode,r,$)};
              ${bh(f,p,s,l,d.length,o.length,_)};
              `;case"linear":return`
              ${yh(p,s,l,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${wh(f,p,s,_,b)}`;if(s.length===3||s.length===5)return`${xh(f,p,s,_,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${$h(f,p,s,l,d,o,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(f,p)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:o},...te(s,l)]})}},kh=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},py=(e,t)=>{let r=[],i=[],n=[],a=kh(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");ph(e.inputs,t,a,r,i,n),e.compute(Sh(e.inputs[0],t,a,r,i,n),{inputs:[0]})},fy=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return ke({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),Ih,Th,hy,_2=U(()=>{ie(),ae(),se(),Ih=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},Th=(e,t,r,i)=>{let n=t.simplified,a=e[0].dims,s=B.size(a),o=a,l=s,d=a.slice(-1)[0],p=i?a.slice(0,-1).concat(1):[],f=!n&&e.length>3,h=e.length>4,m=i&&r>1,_=i&&r>2,b=r>3,$=64,v=Me(d),w=[{type:12,data:l},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],I=T=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[D("x",e[0].dataType,e[0].dims,v),D("skip",e[1].dataType,e[1].dims,v),D("gamma",e[2].dataType,e[2].dims,v)];f&&z.push(D("beta",e[3].dataType,e[3].dims,v)),h&&z.push(D("bias",e[4].dataType,e[4].dims,v)),z.push(J("output",e[0].dataType,o,v)),m&&z.push(J("mean_output",1,p)),_&&z.push(J("inv_std_output",1,p)),b&&z.push(J("input_skip_bias_sum",e[0].dataType,o,v));let x=Fe(e[0].dataType),N=Fe(1,v);return`

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
          let bias_value = ${h?"bias[offset1d + i]":x+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Pi(x,v,"value")};
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
        let mean = ${Vr("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Vr("square_sum",v)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${x}(mean)`}) *
            ${x}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:o,dataType:e[0].dataType}];return r>1&&k.push({dims:p,dataType:1}),r>2&&k.push({dims:p,dataType:1}),r>3&&k.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${m};${_};${b}`,inputDependencies:e.map((T,C)=>"type")},getShaderSource:I,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:w})}},hy=(e,t)=>{Ih(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Th(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Eh,$n,Ch,Eo,zh,Ah,my,gy,y2=U(()=>{ie(),ae(),Pe(),se(),Eh=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},$n=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Ch=(e,t)=>{if(e.length>1){let r=$n(e,1),i=$n(e,2),n=$n(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),ke({starts:r,ends:i,axes:n})}else return t},Eo=(e,t,r,i,n)=>{let a=e;return e<0&&(a+=r[i[t]]),n[t]<0?Math.max(0,Math.min(a,r[i[t]]-1)):Math.max(0,Math.min(a,r[i[t]]))},zh=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${ee("uniforms.input_shape","i",r.length)};
            let steps_i = ${ee("uniforms.steps","i",r.length)};
            let signs_i = ${ee("uniforms.signs","i",r.length)};
            let starts_i = ${ee("uniforms.starts","i",r.length)};
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
      }`,Ah=(e,t)=>{let r=e[0].dims,i=B.size(r),n=t.axes.length>0?B.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=$n(e,4);a.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(n.length).fill(1));let s=t.starts.map((v,w)=>Eo(v,w,r,n,a)),o=t.ends.map((v,w)=>Eo(v,w,r,n,a));if(n.length!==s.length||n.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let v=0;v<r.length;++v)n.includes(v)||(s.splice(v,0,0),o.splice(v,0,r[v]),a.splice(v,0,1));let l=a.map(v=>Math.sign(v));a.forEach((v,w,I)=>{if(v<0){let k=(o[w]-s[w])/v,T=s[w],C=T+k*a[w];s[w]=C,o[w]=T,I[w]=-v}});let d=r.slice(0);n.forEach((v,w)=>{d[v]=Math.ceil((o[v]-s[v])/a[v])});let p={dims:d,dataType:e[0].dataType},f=J("output",e[0].dataType,d.length),h=D("input",e[0].dataType,e[0].dims.length),m=B.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:a.length}],b=[{type:12,data:m},{type:12,data:s},{type:6,data:l},{type:12,data:a},...te(e[0].dims,d)],$=v=>`
      ${v.registerUniforms(_).declareVariables(h,f)}
        ${zh(h,f,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:b})}},my=(e,t)=>{Eh(e.inputs,t);let r=Ch(e.inputs,t);e.compute(Ah(e.inputs,r),{inputs:[0]})},gy=e=>{let t=e.starts,r=e.ends,i=e.axes;return ke({starts:t,ends:r,axes:i})}}),Oh,Rh,_y,yy,b2=U(()=>{ie(),ae(),Pe(),Fr(),se(),Oh=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Rh=(e,t)=>{let r=e.inputs[0],i=r.dims,n=B.size(i),a=i.length,s=B.normalizeAxis(t.axis,a),o=s<i.length-1,l,d=[];o?(d=Array.from({length:a},(z,x)=>x),d[s]=a-1,d[a-1]=s,l=e.compute($t(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let p=l.dims,f=p[a-1],h=n/f,m=Me(f),_=f/m,b=64;h===1&&(b=256);let $=(z,x)=>x===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:x===2?`max(${z}.x, ${z}.y)`:x===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,v=D("x",l.dataType,l.dims,m),w=J("result",l.dataType,l.dims,m),I=v.type.value,k=Fe(l.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,T=z=>`
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
          rowSumShared = ${I}(${Vr("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${m};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:l.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:_}]}),getShaderSource:T},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute($t(C,d),{inputs:[C]})},_y=(e,t)=>{Oh(e.inputs),Rh(e,t)},yy=e=>ke({axis:e.axis})}),Co,Bh,Nh,Mh,by,v2=U(()=>{ie(),ae(),se(),Co=e=>Array.from(e.getBigInt64Array(),Number),Bh=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Co(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Nh=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Mh=(e,t)=>{let r=e[0].dims,i=t??Co(e[1]),n=Nh(r,i),a=B.size(n),s=e[0].dataType,o=D("input",s,r.length),l=J("output",s,n.length),d=p=>`
      const inputShape = ${o.indices(...r)};
      ${p.registerUniform("output_size","u32").declareVariables(o,l)}
      ${p.mainStart()}
      ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...te(e[0].dims,n)]}),getShaderSource:d}},by=e=>{Bh(e.inputs),e.compute(Mh(e.inputs),{inputs:[0]})}}),Dh,Ph,vy,w2=U(()=>{ie(),ae(),se(),Dh=(e,t,r,i,n)=>{let a=J("output_data",n,r.length,4),s=D("a_data",t[1].dataType,t[1].dims.length,4),o=D("b_data",t[2].dataType,t[2].dims.length,4),l=D("c_data",t[0].dataType,t[0].dims.length,4),d,p=(f,h,m)=>`select(${h}, ${f}, ${m})`;if(!i)d=a.setByOffset("global_idx",p(s.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(h,m,_="")=>{let b=`a_data[index_a${m}][component_a${m}]`,$=`b_data[index_b${m}][component_b${m}]`,v=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
            let output_indices${m} = ${a.offsetToIndices(`global_idx * 4u + ${m}u`)};
            let offset_a${m} = ${s.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let offset_b${m} = ${o.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let offset_c${m} = ${l.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let index_a${m} = offset_a${m} / 4u;
            let index_b${m} = offset_b${m} / 4u;
            let index_c${m} = offset_c${m} / 4u;
            let component_a${m} = offset_a${m} % 4u;
            let component_b${m} = offset_b${m} % 4u;
            let component_c${m} = offset_c${m} % 4u;
            ${h}[${m}] = ${_}(${p(b,$,v)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Ph=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,a=!(B.areEqual(t,r)&&B.areEqual(r,i)),s=t,o=B.size(t);if(a){let d=en.calcShape(en.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=B.size(s)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Dh(d,e,s,a,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...te(i,t,r,s)]})}},vy=e=>{e.compute(Ph(e.inputs))}}),wy,$2=U(()=>{M1(),Fu(),D1(),P1(),U1(),L1(),W1(),H1(),K1(),Z1(),X1(),Y1(),Q1(),J1(),e2(),t2(),r2(),i2(),n2(),a2(),s2(),o2(),u2(),l2(),d2(),L_(),c2(),p2(),f2(),h2(),m2(),Vu(),g2(),F_(),_2(),y2(),b2(),q_(),v2(),Fr(),Hu(),w2(),wy=new Map([["Abs",[h0]],["Acos",[m0]],["Acosh",[g0]],["Add",[X0]],["ArgMax",[d0,au]],["ArgMin",[l0,au]],["Asin",[_0]],["Asinh",[y0]],["Atan",[b0]],["Atanh",[v0]],["Attention",[c0]],["AveragePool",[ey,J_]],["BatchNormalization",[p0]],["BiasAdd",[f0]],["BiasSplitGelu",[Z0]],["Cast",[$0,w0]],["Ceil",[S0]],["Clip",[x0]],["Concat",[s_,o_]],["Conv",[cu,du]],["ConvTranspose",[__,g_]],["Cos",[k0]],["Cosh",[I0]],["CumSum",[y_,b_]],["DepthToSpace",[v_,w_]],["DequantizeLinear",[oy,uy]],["Div",[Y0]],["Einsum",[$_,x_]],["Elu",[T0,Bn]],["Equal",[Q0]],["Erf",[E0]],["Exp",[C0]],["Expand",[S_]],["FastGelu",[k_]],["Floor",[z0]],["FusedConv",[cu,du]],["Gather",[T_,I_]],["GatherElements",[R_,O_]],["GatherBlockQuantized",[z_,A_]],["GatherND",[E_,C_]],["Gelu",[A0]],["Gemm",[N_,B_]],["GlobalAveragePool",[ry,ty]],["GlobalMaxPool",[sy,ay]],["Greater",[r_]],["GreaterOrEqual",[n_]],["GridSample",[M_,D_]],["GroupQueryAttention",[H_]],["HardSigmoid",[U0,P0]],["InstanceNormalization",[j_]],["LayerNormalization",[K_]],["LeakyRelu",[O0,Bn]],["Less",[i_]],["LessOrEqual",[a_]],["Log",[j0]],["MatMul",[Z_]],["MatMulNBits",[X_,Y_]],["MaxPool",[iy,ny]],["Mul",[J0]],["MultiHeadAttention",[U_,P_]],["Neg",[B0]],["Not",[R0]],["Pad",[Q_]],["Pow",[e_]],["QuickGelu",[K0,Bn]],["Range",[ly]],["Reciprocal",[N0]],["ReduceMin",[n0]],["ReduceMean",[Jg]],["ReduceMax",[i0]],["ReduceSum",[s0]],["ReduceProd",[a0]],["ReduceL1",[e0]],["ReduceL2",[t0]],["ReduceLogSum",[u0]],["ReduceLogSumExp",[r0]],["ReduceSumSquare",[o0]],["Relu",[M0]],["Resize",[py,fy]],["RotaryEmbedding",[V_]],["ScatterND",[cy,dy]],["Sigmoid",[D0]],["Sin",[L0]],["Sinh",[W0]],["Slice",[my,gy]],["SkipLayerNormalization",[hy]],["Split",[W_,G_]],["Sqrt",[G0]],["Softmax",[_y,yy]],["Sub",[t_]],["Tan",[q0]],["Tanh",[V0]],["ThresholdedRelu",[H0,Bn]],["Tile",[by]],["Transpose",[Wg,Gg]],["Where",[vy]]])}),$y,x2=U(()=>{Rt(),Cr(),se(),$y=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){lr(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});n&&o.push({binding:o.length,resource:n});let l=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Zt(e.programInfo.name)}dispose(){}build(e,t){lr(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let n=Lg(t,this.backend.device.limits),a=e.getShaderSource(n),s=`${i.join(`
`)}
${n.additionalImplementations}
${a}`,o=r.createShaderModule({code:s,label:e.name});ye("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Zt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let a=t*r*i,s=Math.ceil(Math.sqrt(a));if(s>n){if(s=Math.ceil(Math.cbrt(a)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),xy={};sn(xy,{WebGpuBackend:()=>Sy});var Uh,Lh,Wh,Sy,S2=U(()=>{Rt(),ie(),Cr(),Ng(),B1(),$2(),x2(),Uh=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let a=e[i].dims.length;r.push(`${n};${a}`);break}case"dims":{let a=e[i].dims.join(",");r.push(`${n};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Lh=(e,t,r)=>{var n,a;let i=e.name;return(n=e.shaderCache)!=null&&n.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Uh(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,i},Wh=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Sy=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=o=>t.features.has(o)&&r.push(o)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new Wh(s),this.gpuDataManager=Pg(this),this.programManager=new $y(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Lu(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;lr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let a=r[n],s=a.kernelId,o=this.kernels.get(s),l=o.kernelType,d=o.kernelName,p=a.programName,f=a.inputTensorViews,h=a.outputTensorViews,m=t[n*2],_=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let b=Number(m-this.queryTimeBase),$=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger($))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(v=>({dims:v.dims,dataType:wr(v.dataType)})),outputsMetadata:h.map(v=>({dims:v.dims,dataType:wr(v.dataType)})),kernelId:s,kernelType:l,kernelName:d,programName:p,startTime:b,endTime:$});else{let v="";f.forEach((I,k)=>{v+=`input[${k}]: [${I.dims}] | ${wr(I.dataType)}, `});let w="";h.forEach((I,k)=>{w+=`output[${k}]: [${I.dims}] | ${wr(I.dataType)}, `}),console.log(`[profiling] kernel "${s}|${l}|${d}|${p}" ${v}${w}start time: ${b} ns, execution time: ${$-b} ns`)}Ha("GPU",`${p}::${m}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Zt()}run(e,t,r,i,n,a){lr(e.name);let s=[];for(let w=0;w<t.length;++w){let I=t[w].data;if(I===0)continue;let k=this.gpuDataManager.get(I);if(!k)throw new Error(`no GPU data for input: ${I}`);s.push(k)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),p=r.length===0?o.map((w,I)=>I):r;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let f=[],h=[];for(let w=0;w<o.length;++w){if(!Number.isInteger(p[w])||p[w]<-3||p[w]>=a)throw new Error(`Invalid output index: ${p[w]}`);if(p[w]===-3)continue;let I=p[w]===-1,k=p[w]===-2,T=I||k?n(o[w].dataType,o[w].dims):i(p[w],o[w].dataType,o[w].dims);if(f.push(T),T.data===0)continue;let C=this.gpuDataManager.get(T.data);if(!C)throw new Error(`no GPU data for output: ${T.data}`);if(I&&this.temporaryData.push(C),k){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(C)}h.push(C)}if(s.length!==t.length||h.length!==f.length){if(h.length===0)return Zt(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(d){let w=0,I=[];d.forEach(z=>{let x=typeof z.data=="number"?[z.data]:z.data;if(x.length===0)return;let N=z.type===10?2:4,P,V;z.type===10?(V=x.length>4?16:x.length>2?8:x.length*N,P=x.length>4?16:N*x.length):(V=x.length<=2?x.length*N:16,P=16),w=Math.ceil(w/V)*V,I.push(w);let H=z.type===10?8:4;w+=x.length>4?Math.ceil(x.length/H)*P:x.length*N});let k=16;w=Math.ceil(w/k)*k;let T=new ArrayBuffer(w);d.forEach((z,x)=>{let N=I[x],P=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(T,N,P.length).set(P);else if(z.type===12)new Uint32Array(T,N,P.length).set(P);else if(z.type===10)new Uint16Array(T,N,P.length).set(P);else if(z.type===1)new Float32Array(T,N,P.length).set(P);else throw new Error(`Unsupported uniform type: ${wr(z.type)}`)});let C=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,T,0,w),this.gpuDataManager.release(C.id),m={offset:0,size:w,buffer:C.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),b=_[1]===1&&_[2]===1,$=Lh(e,t,b),v=this.programManager.getArtifact($);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact($,v),ye("info",()=>`[artifact] key: ${$}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let w=0;w<d.length;w++){let I=d[w],k=I.type,T=typeof I.data=="number"?1:I.data.length,[C,z]=v.uniformVariablesInfo[w];if(k!==C||T!==z)throw new Error(`Uniform variable ${w} mismatch: expect type ${C} with size ${z}, got type ${k} with size ${T} in program "${v.programInfo.name}".`)}}if(ye("info",()=>`[ProgramManager] run "${e.name}" (key=${$}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(v,s,h,_,m),Zt(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=wy.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,a=i.kernelName,s=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),ye("info",()=>`[WebGPU] Start to run kernel "[${n}] ${a}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${a}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let a=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,a);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await ru(this,e,t);return Wu(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ye("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ye("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ye("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),a=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(a.computePipeline),n.setBindGroup(0,a.bindGroup),n.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),ky={};sn(ky,{init:()=>Iy});var Ca,Gh,Iy,k2=U(()=>{ie(),Cr(),ae(),R1(),Ca=class Ty{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(B.size(t)!==B.size(this.dims))throw new Error("Invalid new shape");return new Ty(this.module,this.dataType,this.data,t)}},Gh=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,a=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,a));let s=Number(e.getValue(i*n++,a));this.outputCount=Number(e.getValue(i*n++,a)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,a));let o=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*n++,a)),p=Number(e.getValue(i*n++,"*")),f=Number(e.getValue(i*n++,a)),h=[];for(let m=0;m<f;m++)h.push(Number(e.getValue(i*n++,a)));o.push(new Ca(e,d,p,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,i=(t==null?void 0:t.outputs)??[],n=(o,l,d)=>new Ca(this.module,l,this.output(o,d),d),a=(o,l)=>{let d=ni(o,l);if(!d)throw new Error(`Unsupported data type: ${o}`);let p=d>0?this.backend.gpuDataManager.create(d).id:0;return new Ca(this.module,o,p,l)};return this.backend.run(e,r,i,n,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*i);this.module.setValue(a,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(a+i*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Iy=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(S2(),Wn(xy)).WebGpuBackend,s=new a;await s.initialize(r,i),n("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,l,d,p=!1)=>{if(p)ye("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(o),Number(l));else{ye("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(l),f)}},async(o,l,d)=>{ye("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>s.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>s.releaseKernel(o),(o,l,d,p)=>{ye("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let f=new Gh(t,s,Number(l));return s.computeKernel(Number(o),f,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new Dg(r);n("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,l,d,p)=>a.ensureTensor(s,o,l,d,p),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!r.trace])}}}),qh,Qu,Ju,Mr,Vh,zo,Ja,el,tl,Ao,rl,il,nl,Ey=U(()=>{Rt(),z1(),A1(),ie(),Si(),Mu(),Ag(),qh=(e,t)=>{Ae()._OrtInit(e,t)!==0&&Ie("Can't initialize onnxruntime.")},Qu=async e=>{qh(e.wasm.numThreads,Ka(e.logLevel))},Ju=async(e,t)=>{var i,n;(n=(i=Ae()).asyncInit)==null||n.call(i);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(k2(),Wn(ky)).init;t==="webgpu"&&await a("webgpu",Ae(),e,r),t==="webnn"&&await a("webnn",Ae(),e)}},Mr=new Map,Vh=e=>{let t=Ae(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&Ie("Can't get session input/output count.");let a=i===4?"i32":"i64";return[Number(t.getValue(n,a)),Number(t.getValue(n+i,a))]}finally{t.stackRestore(r)}},zo=(e,t)=>{let r=Ae(),i=r.stackSave(),n=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&Ie("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));n=Number(r.getValue(s+a,"*"));let l=r.HEAP32[n/4];if(l===0)return[o,0];let d=r.HEAPU32[n/4+1],p=[];for(let f=0;f<d;f++){let h=Number(r.getValue(n+8+f*a,"*"));p.push(h!==0?r.UTF8ToString(h):Number(r.getValue(n+8+(f+d)*a,"*")))}return[o,l,p]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},Ja=e=>{let t=Ae(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},el=async(e,t)=>{var f,h,m,_;let r,i,n=Ae();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Ja(e);let a=0,s=0,o=0,l=[],d=[],p=[];try{if([s,l]=await zg(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let x=[];for(let N of t.externalData){let P=typeof N=="string"?N:N.path;x.push(Uu(typeof N=="string"?N:N.data).then(V=>{n.mountExternalData(P,V)}))}await Promise.all(x)}for(let x of(t==null?void 0:t.executionProviders)??[])if((typeof x=="string"?x:x.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof x!="string"){let N=x,P=N==null?void 0:N.context,V=N==null?void 0:N.gpuDevice,H=N==null?void 0:N.deviceType,j=N==null?void 0:N.powerPreference;P?n.currentContext=P:V?n.currentContext=await n.webnnCreateMLContext(V):n.currentContext=await n.webnnCreateMLContext({deviceType:H,powerPreference:j})}else n.currentContext=await n.webnnCreateMLContext();break}a=await n._OrtCreateSession(r,i,s),(f=n.webgpuOnCreateSession)==null||f.call(n,a),a===0&&Ie("Can't create a session."),(h=n.jsepOnCreateSession)==null||h.call(n),n.currentContext&&(n.webnnRegisterMLContext(a,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[b,$]=Vh(a),v=!!(t!=null&&t.enableGraphCapture),w=[],I=[],k=[],T=[],C=[];for(let x=0;x<b;x++){let[N,P,V]=zo(a,x);N===0&&Ie("Can't get an input name."),d.push(N);let H=n.UTF8ToString(N);w.push(H),k.push(P===0?{name:H,isTensor:!1}:{name:H,isTensor:!0,type:wr(P),shape:V})}for(let x=0;x<$;x++){let[N,P,V]=zo(a,x+b);N===0&&Ie("Can't get an output name."),p.push(N);let H=n.UTF8ToString(N);I.push(H),T.push(P===0?{name:H,isTensor:!1}:{name:H,isTensor:!0,type:wr(P),shape:V});{if(v&&(t==null?void 0:t.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let j=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[H])??"cpu",R=n.webnnIsGraphOutput;if(j==="cpu"&&R&&R(a,H)){C.push("ml-tensor-cpu-output");continue}if(j!=="cpu"&&j!=="cpu-pinned"&&j!=="gpu-buffer"&&j!=="ml-tensor")throw new Error(`Not supported preferred output location: ${j}.`);if(v&&j!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${j}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(j)}}let z=null;return C.some(x=>x==="gpu-buffer"||x==="ml-tensor"||x==="ml-tensor-cpu-output")&&(o=n._OrtCreateBinding(a),o===0&&Ie("Can't create IO binding."),z={handle:o,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(x=>x==="ml-tensor-cpu-output"?"ml-tensor":x).map(x=>eu(x))}),Mr.set(a,[a,d,p,z,v,!1]),[a,w,I,k,T]}catch(b){throw d.forEach($=>n._OrtFree($)),p.forEach($=>n._OrtFree($)),o!==0&&n._OrtReleaseBinding(o)!==0&&Ie("Can't release IO binding."),a!==0&&n._OrtReleaseSession(a)!==0&&Ie("Can't release session."),b}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&Ie("Can't release session options."),l.forEach(b=>n._free(b)),(_=n.unmountExternalData)==null||_.call(n)}},tl=e=>{var l,d,p;let t=Ae(),r=Mr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,a,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Ie("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Ie("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(p=t.webgpuOnReleaseSession)==null||p.call(t,e),n.forEach(f=>t._OrtFree(f)),a.forEach(f=>t._OrtFree(f)),t._OrtReleaseSession(i)!==0&&Ie("Can't release session."),Mr.delete(e)},Ao=async(e,t,r,i,n,a,s=!1)=>{if(!e){t.push(0);return}let o=Ae(),l=o.PTR_SIZE,d=e[0],p=e[1],f=e[3],h=f,m,_;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let v=e[2].gpuBuffer;_=ni(ii(d),p);{let w=o.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=w(i,a,v,_)}}else if(f==="ml-tensor"){let v=e[2].mlTensor;_=ni(ii(d),p);let w=o.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=w(i,v,ii(d),p)}else{let v=e[2];if(Array.isArray(v)){_=l*v.length,m=o._malloc(_),r.push(m);for(let w=0;w<v.length;w++){if(typeof v[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);o.setValue(m+w*l,Ft(v[w],r),"*")}}else{let w=o.webnnIsGraphInput,I=o.webnnIsGraphOutput;if(d!=="string"&&w&&I){let k=o.UTF8ToString(n);if(w(i,k)||I(i,k)){let T=ii(d);_=ni(T,p),h="ml-tensor";let C=o.webnnCreateTemporaryTensor,z=o.webnnUploadTensor;if(!C||!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let x=await C(i,T,p);z(x,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),m=x}else _=v.byteLength,m=o._malloc(_),r.push(m),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),m)}else _=v.byteLength,m=o._malloc(_),r.push(m),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),m)}}let b=o.stackSave(),$=o.stackAlloc(4*p.length);try{p.forEach((w,I)=>o.setValue($+I*l,w,l===4?"i32":"i64"));let v=o._OrtCreateTensor(ii(d),m,_,$,p.length,eu(h));v===0&&Ie(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(v)}finally{o.stackRestore(b)}},rl=async(e,t,r,i,n,a)=>{var H,j,R,Z;let s=Ae(),o=s.PTR_SIZE,l=Mr.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],p=l[1],f=l[2],h=l[3],m=l[4],_=l[5],b=t.length,$=i.length,v=0,w=[],I=[],k=[],T=[],C=[],z=s.stackSave(),x=s.stackAlloc(b*o),N=s.stackAlloc(b*o),P=s.stackAlloc($*o),V=s.stackAlloc($*o);try{[v,w]=Cg(a),gi("wasm prepareInputOutputTensor");for(let L=0;L<b;L++)await Ao(r[L],I,T,e,p[t[L]],t[L],m);for(let L=0;L<$;L++)await Ao(n[L],k,T,e,f[i[L]],b+i[L],m);_i("wasm prepareInputOutputTensor");for(let L=0;L<b;L++)s.setValue(x+L*o,I[L],"*"),s.setValue(N+L*o,p[t[L]],"*");for(let L=0;L<$;L++)s.setValue(P+L*o,k[L],"*"),s.setValue(V+L*o,f[i[L]],"*");if(h&&!_){let{handle:L,outputPreferredLocations:oe,outputPreferredLocationsEncoded:W}=h;if(p.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${p.length}).`);gi("wasm bindInputsOutputs");for(let F=0;F<b;F++){let Y=t[F];await s._OrtBindInput(L,p[Y],I[F])!==0&&Ie(`Can't bind input[${F}] for session=${e}.`)}for(let F=0;F<$;F++){let Y=i[F];(H=n[F])!=null&&H[3]?(C.push(k[F]),s._OrtBindOutput(L,f[Y],k[F],0)!==0&&Ie(`Can't bind pre-allocated output[${F}] for session=${e}.`)):s._OrtBindOutput(L,f[Y],0,W[Y])!==0&&Ie(`Can't bind output[${F}] to ${oe[F]} for session=${e}.`)}_i("wasm bindInputsOutputs"),Mr.set(e,[d,p,f,h,m,!0])}(j=s.jsepOnRunStart)==null||j.call(s,d),(R=s.webnnOnRunStart)==null||R.call(s,d);let X;h?X=await s._OrtRunWithBinding(d,h.handle,$,P,v):X=await s._OrtRun(d,N,x,b,V,$,P,v),X!==0&&Ie("failed to call OrtRun().");let Q=[],he=[];gi("wasm ProcessOutputTensor");for(let L=0;L<$;L++){let oe=Number(s.getValue(P+L*o,"*"));if(oe===k[L]||C.includes(k[L])){Q.push(n[L]),oe!==k[L]&&s._OrtReleaseTensor(oe)!==0&&Ie("Can't release tensor.");continue}let W=s.stackSave(),F=s.stackAlloc(4*o),Y=!1,G,we=0;try{s._OrtGetTensorData(oe,F,F+o,F+2*o,F+3*o)!==0&&Ie(`Can't access output tensor data on index ${L}.`);let it=o===4?"i32":"i64",Ne=Number(s.getValue(F,it));we=s.getValue(F+o,"*");let He=s.getValue(F+o*2,"*"),Ye=Number(s.getValue(F+o*3,it)),nt=[];for(let Te=0;Te<Ye;Te++)nt.push(Number(s.getValue(He+Te*o,it)));s._OrtFree(He)!==0&&Ie("Can't free memory for tensor dims.");let tt=nt.reduce((Te,ne)=>Te*ne,1);G=wr(Ne);let Qt=h==null?void 0:h.outputPreferredLocations[i[L]];if(G==="string"){if(Qt==="gpu-buffer"||Qt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Te=[];for(let ne=0;ne<tt;ne++){let at=s.getValue(we+ne*o,"*"),Ii=s.getValue(we+(ne+1)*o,"*"),Hr=ne===tt-1?void 0:Ii-at;Te.push(s.UTF8ToString(at,Hr))}Q.push([G,nt,Te,"cpu"])}else if(Qt==="gpu-buffer"&&tt>0){let Te=s.jsepGetBuffer;if(!Te)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ne=Te(we),at=ni(Ne,tt);if(at===void 0||!Du(G))throw new Error(`Unsupported data type: ${G}`);Y=!0,Q.push([G,nt,{gpuBuffer:ne,download:s.jsepCreateDownloader(ne,at,G),dispose:()=>{s._OrtReleaseTensor(oe)!==0&&Ie("Can't release tensor.")}},"gpu-buffer"])}else if(Qt==="ml-tensor"&&tt>0){let Te=s.webnnEnsureTensor,ne=s.webnnIsGraphInputOutputTypeSupported;if(!Te||!ne)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(ni(Ne,tt)===void 0||!Pu(G))throw new Error(`Unsupported data type: ${G}`);if(!ne(e,G,!1))throw new Error(`preferredLocation "ml-tensor" for ${G} output is not supported by current WebNN Context.`);let at=await Te(e,we,Ne,nt,!1);Y=!0,Q.push([G,nt,{mlTensor:at,download:s.webnnCreateMLTensorDownloader(we,G),dispose:()=>{s.webnnReleaseTensorId(we),s._OrtReleaseTensor(oe)}},"ml-tensor"])}else if(Qt==="ml-tensor-cpu-output"&&tt>0){let Te=s.webnnCreateMLTensorDownloader(we,G)(),ne=Q.length;Y=!0,he.push((async()=>{let at=[ne,await Te];return s.webnnReleaseTensorId(we),s._OrtReleaseTensor(oe),at})()),Q.push([G,nt,[],"cpu"])}else{let Te=ss(G),ne=new Te(tt);new Uint8Array(ne.buffer,ne.byteOffset,ne.byteLength).set(s.HEAPU8.subarray(we,we+ne.byteLength)),Q.push([G,nt,ne,"cpu"])}}finally{s.stackRestore(W),G==="string"&&we&&s._free(we),Y||s._OrtReleaseTensor(oe)}}h&&!m&&(s._OrtClearBoundOutputs(h.handle)!==0&&Ie("Can't clear bound outputs."),Mr.set(e,[d,p,f,h,m,!1]));for(let[L,oe]of await Promise.all(he))Q[L][2]=oe;return _i("wasm ProcessOutputTensor"),Q}finally{(Z=s.webnnOnRunEnd)==null||Z.call(s,d),s.stackRestore(z),I.forEach(X=>s._OrtReleaseTensor(X)),k.forEach(X=>s._OrtReleaseTensor(X)),T.forEach(X=>s._free(X)),v!==0&&s._OrtReleaseRunOptions(v),w.forEach(X=>s._free(X))}},il=e=>{let t=Ae(),r=Mr.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&Ie("Can't get an profile file name."),t._OrtFree(n)},nl=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),Dr,dt,Ai,xn,Sn,za,Oo,Aa,Qr,Jr,Fh,Cy,zy,Ay,Oy,Ry,By,Ny,My=U(()=>{Rt(),Ey(),Si(),Bu(),Dr=()=>!!Ce.wasm.proxy&&typeof document<"u",Ai=!1,xn=!1,Sn=!1,Aa=new Map,Qr=(e,t)=>{let r=Aa.get(e);r?r.push(t):Aa.set(e,[t])},Jr=()=>{if(Ai||!xn||Sn||!dt)throw new Error("worker not ready")},Fh=e=>{switch(e.data.type){case"init-wasm":Ai=!1,e.data.err?(Sn=!0,Oo[1](e.data.err)):(xn=!0,Oo[0]()),za&&(URL.revokeObjectURL(za),za=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Aa.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Cy=async()=>{if(!xn){if(Ai)throw new Error("multiple calls to 'initWasm()' detected.");if(Sn)throw new Error("previous call to 'initWasm()' failed.");if(Ai=!0,Dr())return new Promise((e,t)=>{dt==null||dt.terminate(),Tg().then(([r,i])=>{try{dt=i,dt.onerror=a=>t(a),dt.onmessage=Fh,Oo=[e,t];let n={type:"init-wasm",in:Ce};!n.in.wasm.wasmPaths&&(r||Jo)&&(n.in.wasm.wasmPaths={wasm:new URL("/jarvis/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href}),dt.postMessage(n),za=r}catch(n){t(n)}},t)});try{await Nu(Ce.wasm),await Qu(Ce),xn=!0}catch(e){throw Sn=!0,e}finally{Ai=!1}}},zy=async e=>{if(Dr())return Jr(),new Promise((t,r)=>{Qr("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:Ce}};dt.postMessage(i)});await Ju(Ce,e)},Ay=async e=>Dr()?(Jr(),new Promise((t,r)=>{Qr("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};dt.postMessage(i,[e.buffer])})):Ja(e),Oy=async(e,t)=>{if(Dr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Jr(),new Promise((r,i)=>{Qr("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),dt.postMessage(n,a)})}else return el(e,t)},Ry=async e=>{if(Dr())return Jr(),new Promise((t,r)=>{Qr("release",[t,r]);let i={type:"release",in:e};dt.postMessage(i)});tl(e)},By=async(e,t,r,i,n,a)=>{if(Dr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Jr(),new Promise((s,o)=>{Qr("run",[s,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:a}};dt.postMessage(d,nl(l))})}else return rl(e,t,r,i,n,a)},Ny=async e=>{if(Dr())return Jr(),new Promise((t,r)=>{Qr("end-profiling",[t,r]);let i={type:"end-profiling",in:e};dt.postMessage(i)});il(e)}}),Ro,Hh,Dy,I2=U(()=>{Rt(),My(),ie(),Ru(),Ag(),Ro=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Hh=e=>{switch(e[3]){case"cpu":return new Je(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Du(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return Je.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!Pu(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return Je.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Dy=class{async fetchModelAndCopyToWasmMemory(e){return Ay(await Uu(e))}async loadModel(e,t){lr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Oy(r,t),Zt()}async dispose(){return Ry(this.sessionId)}async run(e,t,r){lr();let i=[],n=[];Object.entries(e).forEach(f=>{let h=f[0],m=f[1],_=this.inputNames.indexOf(h);if(_===-1)throw new Error(`invalid input '${h}'`);i.push(m),n.push(_)});let a=[],s=[];Object.entries(t).forEach(f=>{let h=f[0],m=f[1],_=this.outputNames.indexOf(h);if(_===-1)throw new Error(`invalid output '${h}'`);a.push(m),s.push(_)});let o=i.map((f,h)=>Ro(f,()=>`input "${this.inputNames[n[h]]}"`)),l=a.map((f,h)=>f?Ro(f,()=>`output "${this.outputNames[s[h]]}"`):null),d=await By(this.sessionId,n,o,s,l,r),p={};for(let f=0;f<d.length;f++)p[this.outputNames[s[f]]]=a[f]??Hh(d[f]);return Zt(),p}startProfiling(){}endProfiling(){Ny(this.sessionId)}}}),Py={};sn(Py,{OnnxruntimeWebAssemblyBackend:()=>hu,initializeFlags:()=>fu,wasmBackend:()=>Uy});var fu,hu,Uy,T2=U(()=>{Rt(),My(),I2(),fu=()=>{(typeof Ce.wasm.initTimeout!="number"||Ce.wasm.initTimeout<0)&&(Ce.wasm.initTimeout=0);let e=Ce.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ce.wasm.simd=!1),typeof Ce.wasm.proxy!="boolean"&&(Ce.wasm.proxy=!1),typeof Ce.wasm.trace!="boolean"&&(Ce.wasm.trace=!1),typeof Ce.wasm.numThreads!="number"||!Number.isInteger(Ce.wasm.numThreads)||Ce.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ce.wasm.numThreads=1;else{let t=typeof navigator>"u"?p1("node:os").cpus().length:navigator.hardwareConcurrency;Ce.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},hu=class{async init(e){fu(),await Cy(),await zy(e)}async createInferenceSessionHandler(e,t){let r=new Dy;return await r.loadModel(e,t),r}},Uy=new hu});Rt();Rt();Rt();var E2="1.27.0";{let e=(T2(),Wn(Py)).wasmBackend;Di("webgpu",e,5),Di("webnn",e,5),Di("cpu",e,10),Di("wasm",e,10)}Object.defineProperty(Ce.versions,"web",{value:E2,enumerable:!0});/**
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
 */const Oa=32,Oi=96,ei=76,Bo=8,$r=1280;class C2{constructor(t,r,{sampleRate:i=16e3}={}){this.melspecSession=t,this.embeddingSession=r,this.sampleRate=i,this.melspecInputName=t.inputNames[0],this.embeddingInputName=r.inputNames[0],this.rawDataMaxLen=i*10,this.melspectrogramMaxLen=970,this.featureBufferMaxLen=120,this.reset(!0)}reset(t=!1){this.rawDataBuffer=[],this.rawDataRemainder=new Int16Array(0),this.accumulatedSamples=0,this.melBuffer=[];for(let r=0;r<ei;r++)this.melBuffer.push(new Float32Array(Oa).fill(1));this.featureBuffer=[]}async warmup(){const t=new Int16Array(this.sampleRate*4);for(let r=0;r<t.length;r++)t[r]=Math.floor(Math.random()*2e3-1e3);this.featureBuffer=await this._getEmbeddings(t)}async _getMelspectrogram(t){const r=Float32Array.from(t),i=new Je("float32",r,[1,r.length]),a=(await this.melspecSession.run({[this.melspecInputName]:i}))[this.melspecSession.outputNames[0]],s=a.dims,o=s[s.length-1],l=s[s.length-2],d=a.data,p=[];for(let f=0;f<l;f++){const h=new Float32Array(o),m=f*o;for(let _=0;_<o;_++)h[_]=d[m+_]/10+2;p.push(h)}return p}async _embedWindows(t){const r=t.length;if(r===0)return[];const i=new Float32Array(r*ei*Oa);let n=0;for(const p of t)for(let f=0;f<ei;f++)i.set(p[f],n),n+=Oa;const a=new Je("float32",i,[r,ei,Oa,1]),l=(await this.embeddingSession.run({[this.embeddingInputName]:a}))[this.embeddingSession.outputNames[0]].data,d=[];for(let p=0;p<r;p++)d.push(l.slice(p*Oi,p*Oi+Oi));return d}async _getEmbeddings(t){const r=await this._getMelspectrogram(t),i=[];for(let n=0;n<r.length;n+=Bo){const a=r.slice(n,n+ei);a.length===ei&&i.push(a)}return this._embedWindows(i)}_bufferRawData(t){for(let r=0;r<t.length;r++)this.rawDataBuffer.push(t[r]);this.rawDataBuffer.length>this.rawDataMaxLen&&(this.rawDataBuffer=this.rawDataBuffer.slice(-this.rawDataMaxLen))}async _streamingMelspectrogram(t){if(this.rawDataBuffer.length<400)throw new Error("The number of input frames must be at least 400 samples @ 16khz (25 ms)!");const r=Math.max(0,this.rawDataBuffer.length-(t+480)),i=Int16Array.from(this.rawDataBuffer.slice(r)),n=await this._getMelspectrogram(i);for(const a of n)this.melBuffer.push(a);this.melBuffer.length>this.melspectrogramMaxLen&&(this.melBuffer=this.melBuffer.slice(-this.melspectrogramMaxLen))}async streamingFeatures(t){let r=0;if(this.rawDataRemainder.length!==0){const i=new Int16Array(this.rawDataRemainder.length+t.length);i.set(this.rawDataRemainder,0),i.set(t,this.rawDataRemainder.length),t=i,this.rawDataRemainder=new Int16Array(0)}if(this.accumulatedSamples+t.length>=$r){const i=(this.accumulatedSamples+t.length)%$r;if(i!==0){const n=t.subarray(0,t.length-i);this._bufferRawData(n),this.accumulatedSamples+=n.length,this.rawDataRemainder=t.slice(t.length-i)}else this._bufferRawData(t),this.accumulatedSamples+=t.length,this.rawDataRemainder=new Int16Array(0)}else this.accumulatedSamples+=t.length,this._bufferRawData(t);if(this.accumulatedSamples>=$r&&this.accumulatedSamples%$r===0){await this._streamingMelspectrogram(this.accumulatedSamples);for(let i=this.accumulatedSamples/$r-1;i>=0;i--){const n=-Bo*i===0?this.melBuffer.length:-Bo*i,a=n<0?this.melBuffer.length+n:n,s=a-ei;if(s>=0){const o=this.melBuffer.slice(s,a),[l]=await this._embedWindows([o]);this.featureBuffer.push(l)}}r=this.accumulatedSamples,this.accumulatedSamples=0}return this.featureBuffer.length>this.featureBufferMaxLen&&(this.featureBuffer=this.featureBuffer.slice(-this.featureBufferMaxLen)),r!==0?r:this.accumulatedSamples}getFeatures(t=16,r=-1){let i;if(r!==-1){const s=r+t===0?void 0:r+t;i=this.featureBuffer.slice(r,s)}else i=this.featureBuffer.slice(-t);const n=i.length,a=new Float32Array(n*Oi);for(let s=0;s<n;s++)a.set(i[s],s*Oi);return{data:a,dims:[1,n,Oi]}}}const jh={melspectrogram:"melspectrogram.onnx",embedding:"embedding_model.onnx"},z2={silero_vad:"silero_vad.onnx"},Kh={alexa:"alexa_v0.1.onnx",hey_mycroft:"hey_mycroft_v0.1.onnx",hey_jarvis:"hey_jarvis_v0.1.onnx",hey_rhasspy:"hey_rhasspy_v0.1.onnx",timer:"timer_v0.1.onnx",weather:"weather_v0.1.onnx"},Zh={timer:{1:"1_minute_timer",2:"5_minute_timer",3:"10_minute_timer",4:"20_minute_timer",5:"30_minute_timer",6:"1_hour_timer"}},kn=480;class al{constructor(t){this._session=t,this._inName=t.inputNames[0],this._hName=t.inputNames.find(r=>r==="h")??t.inputNames[1],this._cName=t.inputNames.find(r=>r==="c")??t.inputNames[2],this._srName=t.inputNames.find(r=>r==="sr")??t.inputNames[3],this._outName=t.outputNames[0],this._hnName=t.outputNames[1],this._cnName=t.outputNames[2],this._sr=new Je("int64",BigInt64Array.from([BigInt(16e3)]),[]),this.reset()}static async create(t,r={}){const i=await Li.create(t,r);return new al(i)}reset(){this._h=new Float32Array(128),this._c=new Float32Array(128)}async predict(t){const r=[];for(let i=0;i+kn<=t.length;i+=kn){const n=new Float32Array(kn);for(let s=0;s<kn;s++)n[s]=t[i+s]/32767;const a=await this._session.run({[this._inName]:new Je("float32",n,[1,kn]),[this._hName]:new Je("float32",this._h.slice(),[2,1,64]),[this._cName]:new Je("float32",this._c.slice(),[2,1,64]),[this._srName]:this._sr});r.push(a[this._outName].data[0]),this._h=Float32Array.from(a[this._hnName].data),this._c=Float32Array.from(a[this._cnName].data)}return r.length===0?0:r.reduce((i,n)=>i+n)/r.length}}const A2=16;function Ly(e={}){e.wasmPaths!==void 0&&(Ce.wasm.wasmPaths=e.wasmPaths),e.numThreads!==void 0&&(Ce.wasm.numThreads=e.numThreads),e.simd!==void 0&&(Ce.wasm.simd=e.simd)}function Xh(e,t,r){var s,o;const i=t==="input"?(s=e.inputMetadata)==null?void 0:s[0]:(o=e.outputMetadata)==null?void 0:o[0],n=(i==null?void 0:i.shape)??(i==null?void 0:i.dimensions),a=n==null?void 0:n[r];return typeof a=="number"&&a>0?a:null}class sl{constructor(){this.models={},this.features=null,this.predictionBuffer={},this.threshold=.5,this.onDetection=null,this.onUtterance=null,this.vadStopThreshold=.5,this.vadStopFrames=6,this.maxCaptureDuration=10,this._vad=null,this._captureState="idle",this._captureBuffer=[],this._captureLabel=null,this._vadSilenceCount=0,this._captureMinFrames=0}static async create(t={}){const{baseUrl:r="./models/",wakewordModels:i=Object.keys(Kh),executionProviders:n=["wasm"],ort:a,threshold:s=.5,onDetection:o=null,onUtterance:l=null,vadStopThreshold:d=.5,vadStopFrames:p=6,maxCaptureDuration:f=10}=t;a&&Ly(a);const h=I=>/^https?:|^\.|^\//.test(I)?I:r+I,m={executionProviders:n},_=t.melspectrogramUrl?t.melspectrogramUrl:h(jh.melspectrogram),b=t.embeddingUrl?t.embeddingUrl:h(jh.embedding),$=new sl,[v,w]=await Promise.all([Li.create(_,m),Li.create(b,m)]);$.features=new C2(v,w);for(const I of i){let k,T,C,z;if(typeof I=="string"){k=I;const V=Kh[I]||I;T=h(V),z=Zh[I]}else k=I.name,T=/^https?:|^\.|^\//.test(I.url)?I.url:h(I.url),C=I.inputFrames,z=I.classMapping||Zh[k];const x=await Li.create(T,m),N=Xh(x,"input",1),P=Xh(x,"output",1)??1;$.models[k]={session:x,inputName:x.inputNames[0],inputFrames:C??N??A2,outputClasses:P,classMapping:z||null}}if($.threshold=s,$.onDetection=o,$.onUtterance=l,$.vadStopThreshold=d,$.vadStopFrames=p,$.maxCaptureDuration=f,l){const I=t.vadUrl?t.vadUrl:h(z2.silero_vad);$._vad=await al.create(I,m)}return await $.features.warmup(),$}get modelNames(){return Object.keys(this.models)}async reset(){var t;this.features.reset(!0),await this.features.warmup(),this.predictionBuffer={},this._captureState="idle",this._captureBuffer=[],this._captureLabel=null,this._vadSilenceCount=0,this._captureMinFrames=0,(t=this._vad)==null||t.reset()}async _runModel(t,r){const i=new Je("float32",r.data,r.dims),a=(await t.session.run({[t.inputName]:i}))[t.session.outputNames[0]].data;return Array.from(a)}_pushPrediction(t,r){this.predictionBuffer[t]||(this.predictionBuffer[t]=[]),this.predictionBuffer[t].push(r),this.predictionBuffer[t].length>30&&this.predictionBuffer[t].shift()}_concatCapture(){const t=this._captureBuffer.reduce((n,a)=>n+a.length,0),r=new Int16Array(t);let i=0;for(const n of this._captureBuffer)r.set(n,i),i+=n.length;return r}async predict(t){if(!(t instanceof Int16Array))throw new TypeError("Input audio (x) must be an Int16Array of 16 kHz PCM.");const r=await this.features.streamingFeatures(t),i={};for(const[a,s]of Object.entries(this.models)){let o;if(r>$r){const l=[];for(let d=Math.floor(r/$r)-1;d>=0;d--){const p=this.features.getFeatures(s.inputFrames,-s.inputFrames-d);l.push(await this._runModel(s,p))}o=l.reduce((d,p)=>d.map((f,h)=>Math.max(f,p[h])))}else if(r===$r){const l=this.features.getFeatures(s.inputFrames);o=await this._runModel(s,l)}else if(s.outputClasses===1){const l=this.predictionBuffer[a];o=[l&&l.length>0?l[l.length-1]:0]}else o=new Array(s.outputClasses).fill(0);if(s.outputClasses===1)i[a]=o[0];else if(s.classMapping)for(const[l,d]of Object.entries(s.classMapping))i[d]=o[Number.parseInt(l,10)];else for(let l=0;l<s.outputClasses;l++)i[`${a}_${l}`]=o[l]}for(const a of Object.keys(i))(!this.predictionBuffer[a]||this.predictionBuffer[a].length<5)&&(i[a]=0);for(const a of Object.keys(i))this._pushPrediction(a,i[a]);let n=null;for(const[a,s]of Object.entries(i))s>=this.threshold&&(this.onDetection&&this.onDetection({label:a,score:s}),n===null&&(n=a));if(this.onUtterance&&this._vad)if(this._captureState==="idle")n!==null&&(this._captureState="capturing",this._captureLabel=n,this._captureBuffer=[t.slice()],this._vadSilenceCount=0,this._captureMinFrames=3,this._vad.reset());else{this._captureBuffer.push(t.slice());const a=await this._vad.predict(t);n!==null?this._vadSilenceCount=0:a<this.vadStopThreshold?this._vadSilenceCount++:this._vadSilenceCount=0;const s=Math.ceil(this.maxCaptureDuration*16e3/$r),o=this._captureMinFrames<=0&&this._vadSilenceCount>=this.vadStopFrames,l=this._captureBuffer.length>=s;if(this._captureMinFrames>0&&this._captureMinFrames--,o||l){const d=this._concatCapture(),p=this._captureLabel;this._captureState="idle",this._captureBuffer=[],this._captureLabel=null,this._vadSilenceCount=0,this._captureMinFrames=0,this.onUtterance({label:p,audio:d})}}return i}}class O2{constructor(t,r={}){this.onFrame=t,this.workletUrl=r.workletUrl??new URL("data:text/javascript;base64,Ly8gQXVkaW9Xb3JrbGV0IHByb2Nlc3NvciB0aGF0IGNvbnZlcnRzIHRoZSBtaWNyb3Bob25lIHN0cmVhbSBpbnRvIDE2LWJpdCBQQ00KLy8gZnJhbWVzIG9mIDEyODAgc2FtcGxlcyAoODAgbXMgQCAxNiBrSHopIGFuZCBwb3N0cyB0aGVtIHRvIHRoZSBtYWluIHRocmVhZC4KLy8KLy8gSXQgcmVzYW1wbGVzIGZyb20gdGhlIEF1ZGlvQ29udGV4dCdzIG5hdGl2ZSByYXRlICh0aGUgZ2xvYmFsIGBzYW1wbGVSYXRlYAovLyBpbnNpZGUgdGhlIHdvcmtsZXQgc2NvcGUpIGRvd24vdXAgdG8gMTYga0h6IHVzaW5nIGxpbmVhciBpbnRlcnBvbGF0aW9uLCBzbwovLyBpdCB3b3JrcyBldmVuIHdoZW4gdGhlIGJyb3dzZXIgaWdub3JlcyB0aGUgcmVxdWVzdGVkIDE2IGtIeiBjb250ZXh0IHJhdGUuCgpjb25zdCBUQVJHRVRfUkFURSA9IDE2MDAwOwpjb25zdCBGUkFNRSA9IDEyODA7CgpjbGFzcyBQQ01Xb3JrbGV0IGV4dGVuZHMgQXVkaW9Xb3JrbGV0UHJvY2Vzc29yIHsKICBjb25zdHJ1Y3RvcigpIHsKICAgIHN1cGVyKCk7CiAgICB0aGlzLl9yYXRpbyA9IHNhbXBsZVJhdGUgLyBUQVJHRVRfUkFURTsgLy8gaW5wdXQgc2FtcGxlcyBwZXIgb3V0cHV0IHNhbXBsZQogICAgdGhpcy5fYnVmID0gbmV3IEludDE2QXJyYXkoRlJBTUUpOwogICAgdGhpcy5fbiA9IDA7CiAgICB0aGlzLl90YWlsID0gbmV3IEZsb2F0MzJBcnJheSgwKTsgLy8gbGVmdG92ZXIgaW5wdXQgc2FtcGxlcyBiZXR3ZWVuIGJsb2NrcwogICAgdGhpcy5fZnJhYyA9IDA7IC8vIGZyYWN0aW9uYWwgcmVhZCBwb3NpdGlvbiB3aXRoaW4gdGhlIGN1cnJlbnQgZGF0YSBidWZmZXIKICB9CgogIHByb2Nlc3MoaW5wdXRzKSB7CiAgICBjb25zdCBjaGFubmVsID0gaW5wdXRzWzBdPy5bMF07CiAgICBpZiAoIWNoYW5uZWwpIHJldHVybiB0cnVlOwoKICAgIC8vIFByZXBlbmQgYW55IGxlZnRvdmVyIHNhbXBsZXMgbmVlZGVkIGZvciBjcm9zcy1ibG9jayBpbnRlcnBvbGF0aW9uLgogICAgbGV0IGRhdGEgPSBjaGFubmVsOwogICAgaWYgKHRoaXMuX3RhaWwubGVuZ3RoKSB7CiAgICAgIGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuX3RhaWwubGVuZ3RoICsgY2hhbm5lbC5sZW5ndGgpOwogICAgICBkYXRhLnNldCh0aGlzLl90YWlsLCAwKTsKICAgICAgZGF0YS5zZXQoY2hhbm5lbCwgdGhpcy5fdGFpbC5sZW5ndGgpOwogICAgfQoKICAgIGNvbnN0IHJhdGlvID0gdGhpcy5fcmF0aW87CiAgICBsZXQgdCA9IHRoaXMuX2ZyYWM7CiAgICB3aGlsZSAoTWF0aC5mbG9vcih0KSArIDEgPCBkYXRhLmxlbmd0aCkgewogICAgICBjb25zdCBpID0gTWF0aC5mbG9vcih0KTsKICAgICAgY29uc3QgZnJhYyA9IHQgLSBpOwogICAgICBjb25zdCBzID0gZGF0YVtpXSArIChkYXRhW2kgKyAxXSAtIGRhdGFbaV0pICogZnJhYzsgLy8gbGluZWFyIGludGVycAogICAgICBsZXQgdiA9IE1hdGguZmxvb3IoMzI3NjcgKiBzKTsKICAgICAgaWYgKHYgPiAzMjc2NykgdiA9IDMyNzY3OwogICAgICBlbHNlIGlmICh2IDwgLTMyNzY4KSB2ID0gLTMyNzY4OwogICAgICB0aGlzLl9idWZbdGhpcy5fbisrXSA9IHY7CiAgICAgIGlmICh0aGlzLl9uID09PSBGUkFNRSkgewogICAgICAgIHRoaXMucG9ydC5wb3N0TWVzc2FnZSh0aGlzLl9idWYuc2xpY2UoKSk7CiAgICAgICAgdGhpcy5fbiA9IDA7CiAgICAgIH0KICAgICAgdCArPSByYXRpbzsKICAgIH0KCiAgICBjb25zdCBrZWVwRnJvbSA9IE1hdGguZmxvb3IodCk7CiAgICB0aGlzLl90YWlsID0gZGF0YS5zbGljZShrZWVwRnJvbSk7CiAgICB0aGlzLl9mcmFjID0gdCAtIGtlZXBGcm9tOwogICAgcmV0dXJuIHRydWU7CiAgfQp9CgpyZWdpc3RlclByb2Nlc3NvcigicGNtLXdvcmtsZXQiLCBQQ01Xb3JrbGV0KTsK",import.meta.url).href,this.context=null,this.stream=null,this.node=null,this.source=null}async start(){if(this.context)return;this.stream=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}});const t=globalThis.AudioContext||globalThis.webkitAudioContext;try{this.context=new t({sampleRate:16e3})}catch{this.context=new t}this.context.state==="suspended"&&await this.context.resume(),await this.context.audioWorklet.addModule(this.workletUrl),this.source=this.context.createMediaStreamSource(this.stream),this.node=new AudioWorkletNode(this.context,"pcm-worklet"),this.node.port.onmessage=i=>this.onFrame(i.data),this.source.connect(this.node);const r=this.context.createGain();r.gain.value=0,this.node.connect(r),r.connect(this.context.destination),this._sink=r}get sampleRate(){return this.context?this.context.sampleRate:null}async stop(){var t,r,i;this.node&&(this.node.port.onmessage=null);try{(t=this.source)==null||t.disconnect(),(r=this.node)==null||r.disconnect(),(i=this._sink)==null||i.disconnect()}catch{}this.stream&&this.stream.getTracks().forEach(n=>n.stop()),this.context&&await this.context.close(),this.context=null,this.stream=null,this.node=null,this.source=null}}const ol="/jarvis/",R2=`${ol}wakeword/`,B2=`${ol}ort/`,N2=`${ol}wakeword/mic-worklet.js`,M2=2500;async function D2(e,t=()=>{}){let r=null,i=null,n=0;try{Ly({wasmPaths:B2,numThreads:1}),r=await sl.create({baseUrl:R2,wakewordModels:["hey_jarvis"],threshold:.5,onDetection:()=>{const o=Date.now();o-n<M2||(n=o,e())}}),i=new O2(async o=>{try{await r.predict(o)}catch(l){const d=l instanceof Error?`${l.name}: ${l.message}`:String(l);t(`wakeword:predict-error ${d}`)}},{workletUrl:N2}),await i.start()}catch(o){const l=o instanceof Error?`${o.name}: ${o.message}`:String(o);if(t(`wakeword:init-error ${l}`),i)try{await i.stop()}catch{}if(r)try{await r.reset()}catch{}return async()=>{}}const a=i,s=r;return async()=>{try{await a.stop()}catch{}try{await s.reset()}catch{}}}var P2=Km('<div class="flex gap-2"><span class="text-slate-400 select-none">&gt;</span> <span> </span></div>'),U2=Km('<main class="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black relative overflow-hidden"><div class="fixed inset-0 pointer-events-none"><div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]"></div> <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div></div> <header class="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md px-6 py-4 flex items-center justify-between z-10"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20"><!></div> <div><h1 class="font-bold tracking-wider text-base uppercase bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2">SHOREKEEPER <span class="text-cyan-400 text-xs font-mono px-1.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-500/10">SVELTE 5 + BUN</span></h1> <p class="text-xs text-slate-400 font-mono">Tethys Realtime Voice Interface</p></div></div> <div class="flex items-center gap-4 text-xs font-mono text-slate-400"><div class="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50"><!> <span> </span></div> <div class="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50"><!> <span> </span></div></div></header> <div class="flex-1 max-w-6xl w-full mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6 z-10"><div class="md:col-span-7 flex flex-col items-center justify-center border border-slate-800/80 rounded-2xl bg-slate-900/40 backdrop-blur-md p-8 relative overflow-hidden"><div class="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono text-slate-400"><!> <span>STELLAREALM VOICE CORE (SVELTE 5)</span></div> <div class="relative my-12 flex items-center justify-center"><div></div> <div></div> <button><!> <span class="text-xs font-mono mt-2 font-medium tracking-wider text-slate-200"> </span></button></div> <div class="w-full text-center space-y-2 max-w-lg"><p class="text-xs font-mono text-slate-400 uppercase tracking-widest">Live Transcript</p> <p class="text-sm font-medium text-slate-300 italic min-h-[40px] flex items-center justify-center"> </p></div></div> <div class="md:col-span-5 flex flex-col gap-6"><div class="border border-slate-800/80 rounded-2xl bg-slate-900/40 backdrop-blur-md p-6 flex flex-col gap-3"><div class="flex items-center justify-between text-xs font-mono text-slate-400"><span class="flex items-center gap-1.5 text-cyan-400"><!> SHOREKEEPER RESPONSE</span> <span class="text-slate-400">Spectro Mode</span></div> <p class="text-sm text-slate-200 leading-relaxed font-sans bg-slate-950/40 p-4 rounded-xl border border-slate-800/60"> </p></div> <div class="flex-1 border border-slate-800/80 rounded-2xl bg-slate-950/80 backdrop-blur-md p-5 flex flex-col font-mono text-xs overflow-hidden"><div class="flex items-center gap-2 pb-3 border-b border-slate-800 text-slate-400 mb-3"><!> <span>Realtime Execution Log</span></div> <div class="flex-1 overflow-y-auto space-y-2 text-slate-300 pr-2"></div></div></div></div></main>');function L2(e,t){vu(t,!0);let r=ft("idle"),i=ft(""),n=ft("Schnee... welcome back. Shorekeeper JARVIS core is active.");const a=8e3;let s=ft(ai(["[System] Tethys Core Initialized (Bun + Elysia.js + Svelte 5)","[Network] WebSocket Bridge endpoint /jarvis/ws","[Voice] Gemini Live Engine Ready"])),o=ft(!1),l=ft(!1),d=null,p=null,f=null,h=null,m=null;const _=u1();q$(()=>{b()});function b(){try{const be=location.protocol==="https:"?"wss":"ws";d=new WebSocket(`${be}://${location.host}/jarvis/ws`),d.onopen=()=>{ve(o,!0),ve(s,[...re(s),"[WS] Connected to Elysia.js server (/jarvis/ws)"],!0)},d.onmessage=Nt=>{let Le;try{Le=JSON.parse(Nt.data)}catch{return}switch(Le.type){case"audio":_.play(Le.data),ve(r,"speaking");break;case"transcript":Le.role==="model"?ve(n,Le.text,!0):Le.role==="user"&&ve(i,Le.text,!0);break;case"turnComplete":_.stop(),mode==="active"?(ve(r,"listening"),v()):ve(r,"idle");break;case"status":Le.state==="ready"&&(ve(l,!0),Le.log&&ve(s,[...re(s),Le.log],!0));break;case"error":ve(s,[...re(s),`[Error] ${Le.error}`],!0);break}},d.onclose=()=>{ve(o,!1),ve(l,!1),f&&(f(),f=null),$(),mode==="active"&&(mode=h?"standby":"off"),ve(r,"idle"),ve(s,[...re(s),"[WS] Disconnected — reconnecting in 1s..."],!0),p&&clearTimeout(p),p=setTimeout(b,1e3)},d.onerror=()=>{ve(s,[...re(s),"[WS] Connection error — retrying..."],!0)}}catch(be){console.error("WS Error:",be)}}function $(){m&&(clearTimeout(m),m=null)}function v(){$(),m=setTimeout(()=>{mode==="active"&&w()},a)}async function w(){$(),f&&(f(),f=null),mode="standby",ve(r,"idle"),ve(s,[...re(s),"[Voice] Idle — kembali standby, dengar wake word"],!0),await I()}async function I(){h||(h=await D2(()=>k(),be=>{ve(s,[...re(s),`[WakeWord] ${be}`],!0)}),ve(s,[...re(s),'[WakeWord] Standby — ucapkan "Jarvis" untuk mulai'],!0))}async function k(){mode==="standby"&&(ve(s,[...re(s),"[WakeWord] Terpicu — mengaktifkan sesi suara"],!0),h&&(await h(),h=null),await T())}async function T(){if(!d||d.readyState!==WebSocket.OPEN||!re(l)){ve(s,[...re(s),"[Voice] Tunggu sampai Gemini Live berstatus Ready"],!0),mode="standby",await I();return}try{f=await a1(be=>{d&&d.readyState===WebSocket.OPEN&&d.send(JSON.stringify({type:"audio",data:be}))},be=>{ve(s,[...re(s),`[Diag] ${be}`],!0),d&&d.readyState===WebSocket.OPEN&&d.send(JSON.stringify({type:"diagnostic",message:be}))}),mode="active",ve(r,"listening"),v(),ve(s,[...re(s),"[Mic] Capture started (PCM 16kHz → Gemini Live)"],!0)}catch(be){const Nt=be instanceof Error?`${be.name}: ${be.message}`:String(be);ve(s,[...re(s),`[Mic] Error: ${Nt}`],!0),d&&d.readyState===WebSocket.OPEN&&d.send(JSON.stringify({type:"diagnostic",message:`capture:error ${Nt}`})),mode="standby",await I()}}async function C(){mode==="off"?(await I(),mode="standby"):($(),f&&(f(),f=null),h&&(await h(),h=null),mode="off",ve(r,"idle"),ve(s,[...re(s),"[Voice] Hands-free dimatikan"],!0))}var z=U2(),x=je(Re(z),2),N=Re(x),P=Re(N),V=Re(P);J$(V,{class:"w-5 h-5 text-white"});var H=je(N,2),j=Re(H),R=Re(j);{let be=qo(()=>`w-3.5 h-3.5 ${re(o)?"text-emerald-400 animate-pulse":"text-amber-400"}`);Y$(R,{get class(){return re(be)}})}var Z=je(R,2),X=Re(Z),Q=je(j,2),he=Re(Q);{let be=qo(()=>`w-3.5 h-3.5 ${re(l)?"text-emerald-400":"text-cyan-400"}`);Q$(he,{get class(){return re(be)}})}var L=je(he,2),oe=Re(L),W=je(x,2),F=Re(W),Y=Re(F),G=Re(Y);K$(G,{class:"w-4 h-4 text-cyan-400"});var we=je(Y,2),it=Re(we),Ne=je(it,2),He=je(Ne,2),Ye=Re(He);{var nt=be=>{X$(be,{class:"w-12 h-12 text-white animate-bounce"})},tt=be=>{t1(be,{class:"w-12 h-12 text-white animate-pulse"})},Qt=be=>{Z$(be,{class:"w-12 h-12 text-slate-400 group-hover/btn:text-cyan-400 transition-colors"})};S$(Ye,be=>{re(r)==="listening"?be(nt):re(r)==="speaking"?be(tt,1):be(Qt,-1)})}var Te=je(Ye,2),ne=Re(Te),at=je(we,2),Ii=je(Re(at),2),Hr=Re(Ii),Jt=je(F,2),zr=Re(Jt),on=Re(zr),fr=Re(on),ea=Re(fr);r1(ea,{class:"w-4 h-4"});var ta=je(on,2),ra=Re(ta),ia=je(zr,2),Bt=Re(ia),os=Re(Bt);e1(os,{class:"w-4 h-4 text-cyan-400"});var Ti=je(Bt,2);Ym(Ti,21,()=>re(s),Xm,(be,Nt)=>{var Le=P2(),na=je(Re(Le),2),aa=Re(na);rc(sa=>{An(na,1,sa),zi(aa,re(Nt))},[()=>Jm(re(Nt).includes("Executing")?"text-cyan-400":re(Nt).includes("Voice")||re(Nt).includes("WS")?"text-emerald-400":"text-slate-300")]),xt(be,Le)}),rc(()=>{zi(X,`Elysia Bridge: ${re(o)?"Online":"Connecting..."}`),zi(oe,`Gemini Live: ${re(l)?"Ready":"Standby"}`),An(it,1,`absolute w-72 h-72 rounded-full border border-cyan-500/20 transition-all duration-700 ${re(r)==="listening"?"scale-125 border-cyan-400/50 animate-ping":re(r)==="speaking"?"scale-110 border-blue-400/40 animate-pulse":"scale-100"}`),An(Ne,1,`absolute w-60 h-60 rounded-full border border-blue-500/30 transition-all duration-500 ${re(r)==="processing"?"rotate-180 scale-105 border-dashed":""}`),An(He,1,`w-44 h-44 rounded-full flex flex-col items-center justify-center transition-all duration-500 shadow-2xl relative z-10 group/btn ${re(r)==="listening"?"bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/50 scale-105":re(r)==="processing"?"bg-gradient-to-br from-indigo-600 to-purple-600 shadow-purple-500/50 animate-pulse":re(r)==="speaking"?"bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-600 shadow-blue-500/50":mode==="standby"?"bg-slate-900 border-2 border-cyan-500/50 shadow-cyan-500/20 animate-pulse":"bg-slate-900 border-2 border-slate-700/80 hover:border-cyan-500/80 hover:shadow-cyan-500/20"}`),zi(ne,re(r)==="listening"?"LISTENING":re(r)==="speaking"?"SPEAKING":mode==="standby"?'STANDBY — "JARVIS"':"TAP TO ARM"),zi(Hr,`"${(re(i)||"Press the orb or speak to initiate realtime dialogue...")??""}"`),zi(ra,re(n))}),Fm("click",He,C),xt(e,z),wu()}Hm(["click"]);w$(L2,{target:document.getElementById("app")});
