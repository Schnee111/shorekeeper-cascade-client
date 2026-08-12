var Qv=Object.defineProperty;var rc=e=>{throw TypeError(e)};var Jv=(e,t,r)=>t in e?Qv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ct=(e,t,r)=>Jv(e,typeof t!="symbol"?t+"":t,r),Ds=(e,t,r)=>t.has(e)||rc("Cannot "+r);var O=(e,t,r)=>(Ds(e,t,"read from private field"),r?r.call(e):t.get(e)),me=(e,t,r)=>t.has(e)?rc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),pe=(e,t,r,i)=>(Ds(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),ke=(e,t,r)=>(Ds(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const cm=!1;var $u=Array.isArray,ew=Array.prototype.indexOf,ja=Array.prototype.includes,cs=Array.from,tw=Object.defineProperty,Pr=Object.getOwnPropertyDescriptor,pm=Object.getOwnPropertyDescriptors,rw=Object.prototype,iw=Array.prototype,xu=Object.getPrototypeOf,ic=Object.isExtensible;function hn(e){return typeof e=="function"}const nw=()=>{};function aw(e){return e()}function qo(e){for(var t=0;t<e.length;t++)e[t]()}function fm(){var e,t,r=new Promise((i,n)=>{e=i,t=n});return{promise:r,resolve:e,reject:t}}function sw(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const i of e)if(r.push(i),r.length===t)break;return r}const Ze=2,Fi=4,Yn=8,Su=1<<24,jt=16,Bt=32,xr=64,Vo=128,Ot=512,Fe=1024,Ve=2048,Zt=4096,lt=8192,St=16384,en=32768,nc=1<<25,gi=65536,Ka=1<<17,ow=1<<18,tn=1<<19,hm=1<<20,sr=1<<25,_i=65536,Za=1<<21,Mi=1<<22,Ur=1<<23,wr=Symbol("$state"),mm=Symbol("legacy props"),uw=Symbol(""),Ma=Symbol("attributes"),Fo=Symbol("class"),Ho=Symbol("style"),Cn=Symbol("text"),Da=Symbol("form reset"),Qn=new class extends Error{constructor(){super(...arguments);ct(this,"name","StaleReactionError");ct(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var um;const ku=!!((um=globalThis.document)!=null&&um.contentType)&&globalThis.document.contentType.includes("xml");function lw(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function dw(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function cw(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function pw(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function fw(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function hw(e){throw new Error("https://svelte.dev/e/effect_orphan")}function mw(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function gw(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function _w(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function yw(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function bw(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function vw(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ww=1,$w=2,gm=4,xw=8,Sw=16,kw=1,Iw=2,_m=4,Tw=8,Ew=16,Cw=1,zw=2,qe=Symbol("uninitialized"),ym="http://www.w3.org/1999/xhtml",Aw="http://www.w3.org/2000/svg",Ow="@attach";function Bw(){console.warn("https://svelte.dev/e/derived_inert")}function Rw(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Nw(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function bm(e){return e===this.v}function Mw(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function vm(e){return!Mw(e,this.v)}let rn=!1,Dw=!1;function Pw(){rn=!0}let Ue=null;function Hi(e){Ue=e}function Iu(e,t=!1,r){Ue={p:Ue,i:!1,c:null,e:null,s:e,x:null,r:ye,l:rn&&!t?{s:null,u:null,$:[]}:null}}function Tu(e){var t=Ue,r=t.e;if(r!==null){t.e=null;for(var i of r)Wm(i)}return t.i=!0,Ue=t.p,{}}function Jn(){return!rn||Ue!==null&&Ue.l===null}let Oi=[];function Uw(){var e=Oi;Oi=[],qo(e)}function or(e){if(Oi.length===0){var t=Oi;queueMicrotask(()=>{t===Oi&&Uw()})}Oi.push(e)}function wm(e){var t=ye;if(t===null)return ve.f|=Ur,e;if((t.f&en)===0&&(t.f&Fi)===0)throw e;Dr(e,t)}function Dr(e,t){if(!(t!==null&&(t.f&St)!==0)){for(;t!==null;){if((t.f&Vo)!==0){if((t.f&en)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}const Lw=-7169;function We(e,t){e.f=e.f&Lw|t}function Eu(e){(e.f&Ot)!==0||e.deps===null?We(e,Fe):We(e,Zt)}function $m(e){if(e!==null)for(const t of e)(t.f&Ze)===0||(t.f&_i)===0||(t.f^=_i,$m(t.deps))}function xm(e,t,r){(e.f&Ve)!==0?t.add(e):(e.f&Zt)!==0&&r.add(e),$m(e.deps),We(e,Fe)}let ya=!1;function Ww(e){var t=ya;try{return ya=!1,[e(),ya]}finally{ya=t}}function Gw(e,t){if(t){const r=document.body;e.autofocus=!0,or(()=>{document.activeElement===r&&e.focus()})}}let ac=!1;function qw(){ac||(ac=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r[Da])==null||t.call(r)})},{capture:!0}))}function nn(e){var t=ve,r=ye;Rt(null),Nt(null);try{return e()}finally{Rt(t),Nt(r)}}function Vw(e,t,r,i=r){e.addEventListener(t,()=>nn(r));const n=e[Da];n?e[Da]=()=>{n(),i(!0)}:e[Da]=()=>i(!0),qw()}function Fw(e){let t=0,r=Lr(0),i;return()=>{Bu()&&(q(r),m$(()=>(t===0&&(i=Yi(()=>e(()=>Un(r)))),t+=1,()=>{or(()=>{t-=1,t===0&&(i==null||i(),i=void 0,Un(r))})})))}}var Hw=gi|tn;function jw(e,t,r,i){new Kw(e,t,r,i)}var Ct,wu,zt,si,ht,At,ut,wt,mr,oi,Nr,Pi,Hn,jn,gr,us,Me,Zw,Xw,jo,Yw,Ko,Pa,Ua,Zo,Xo;class Kw{constructor(t,r,i,n){me(this,Me);ct(this,"parent");ct(this,"is_pending",!1);ct(this,"transform_error");me(this,Ct);me(this,wu,null);me(this,zt);me(this,si);me(this,ht);me(this,At,null);me(this,ut,null);me(this,wt,null);me(this,mr,null);me(this,oi,0);me(this,Nr,0);me(this,Pi,!1);me(this,Hn,new Set);me(this,jn,new Set);me(this,gr,null);me(this,us,Fw(()=>(pe(this,gr,Lr(O(this,oi))),()=>{pe(this,gr,null)})));var a;pe(this,Ct,t),pe(this,zt,r),pe(this,si,s=>{var o=ye;o.b=this,o.f|=Vo,i(s)}),this.parent=ye.b,this.transform_error=n??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),pe(this,ht,ps(()=>{ke(this,Me,Ko).call(this)},Hw))}defer_effect(t){xm(t,O(this,Hn),O(this,jn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!O(this,zt).pending}update_pending_count(t,r){ke(this,Me,Zo).call(this,t,r),pe(this,oi,O(this,oi)+t),!(!O(this,gr)||O(this,Pi))&&(pe(this,Pi,!0),or(()=>{pe(this,Pi,!1),O(this,gr)&&Ki(O(this,gr),O(this,oi))}))}get_effect_pending(){return O(this,us).call(this),q(O(this,gr))}error(t){if(!O(this,zt).onerror&&!O(this,zt).failed)throw t;ue!=null&&ue.is_fork?(O(this,At)&&ue.skip_effect(O(this,At)),O(this,ut)&&ue.skip_effect(O(this,ut)),O(this,wt)&&ue.skip_effect(O(this,wt)),ue.oncommit(()=>{ke(this,Me,Xo).call(this,t)})):ke(this,Me,Xo).call(this,t)}}Ct=new WeakMap,wu=new WeakMap,zt=new WeakMap,si=new WeakMap,ht=new WeakMap,At=new WeakMap,ut=new WeakMap,wt=new WeakMap,mr=new WeakMap,oi=new WeakMap,Nr=new WeakMap,Pi=new WeakMap,Hn=new WeakMap,jn=new WeakMap,gr=new WeakMap,us=new WeakMap,Me=new WeakSet,Zw=function(){try{pe(this,At,_t(()=>O(this,si).call(this,O(this,Ct))))}catch(t){this.error(t)}},Xw=function(t){const r=O(this,zt).failed,{reset:i,invoke_onerror:n}=ke(this,Me,jo).call(this,t);or(n),r&&pe(this,wt,_t(()=>{r(O(this,Ct),()=>t,()=>i)}))},jo=function(t){var r=!1,i=!1;const n=()=>{if(r){Nw();return}r=!0,i&&vw(),O(this,wt)!==null&&pi(O(this,wt),()=>{pe(this,wt,null)}),ke(this,Me,Ua).call(this,()=>{ke(this,Me,Ko).call(this)})};return{reset:n,invoke_onerror:()=>{var s,o;try{i=!0,(o=(s=O(this,zt)).onerror)==null||o.call(s,t,n),i=!1}catch(u){Dr(u,O(this,ht)&&O(this,ht).parent)}}}},Yw=function(){const t=O(this,zt).pending;t&&(this.is_pending=!0,pe(this,ut,_t(()=>t(O(this,Ct)))),or(()=>{var r=pe(this,mr,document.createDocumentFragment()),i=$r();r.append(i),pe(this,At,ke(this,Me,Ua).call(this,()=>_t(()=>O(this,si).call(this,i)))),O(this,Nr)===0&&(O(this,Ct).before(r),pe(this,mr,null),pi(O(this,ut),()=>{pe(this,ut,null)}),ke(this,Me,Pa).call(this,ue))}))},Ko=function(){try{if(this.is_pending=this.has_pending_snippet(),pe(this,Nr,0),pe(this,oi,0),pe(this,At,_t(()=>{O(this,si).call(this,O(this,Ct))})),O(this,Nr)>0){var t=pe(this,mr,document.createDocumentFragment());Du(O(this,At),t);const r=O(this,zt).pending;pe(this,ut,_t(()=>r(O(this,Ct))))}else ke(this,Me,Pa).call(this,ue)}catch(r){this.error(r)}},Pa=function(t){this.is_pending=!1,t.transfer_effects(O(this,Hn),O(this,jn))},Ua=function(t){var r=ye,i=ve,n=Ue;Nt(O(this,ht)),Rt(O(this,ht)),Hi(O(this,ht).ctx);try{return yi.ensure(),t()}catch(a){return wm(a),null}finally{Nt(r),Rt(i),Hi(n)}},Zo=function(t,r){var i;if(!this.has_pending_snippet()){this.parent&&ke(i=this.parent,Me,Zo).call(i,t,r);return}pe(this,Nr,O(this,Nr)+t),O(this,Nr)===0&&(ke(this,Me,Pa).call(this,r),O(this,ut)&&pi(O(this,ut),()=>{pe(this,ut,null)}),O(this,mr)&&(O(this,Ct).before(O(this,mr)),pe(this,mr,null)))},Xo=function(t){O(this,At)&&(tt(O(this,At)),pe(this,At,null)),O(this,ut)&&(tt(O(this,ut)),pe(this,ut,null)),O(this,wt)&&(tt(O(this,wt)),pe(this,wt,null));let r=O(this,zt).failed;const i=n=>{const{reset:a,invoke_onerror:s}=ke(this,Me,jo).call(this,n);s(),r&&pe(this,wt,ke(this,Me,Ua).call(this,()=>{try{return _t(()=>{var o=ye;o.b=this,o.f|=Vo,r(O(this,Ct),()=>n,()=>a)})}catch(o){return Dr(o,O(this,ht).parent),null}}))};or(()=>{var n;try{n=this.transform_error(t)}catch(a){Dr(a,O(this,ht)&&O(this,ht).parent);return}n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(i,a=>Dr(a,O(this,ht)&&O(this,ht).parent)):i(n)})};function Sm(e,t,r,i){const n=Jn()?ji:Cu;var a=e.filter(m=>!m.settled),s=t.map(n);if(r.length===0&&a.length===0){i(s);return}var o=ye,u=Qw(),d=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(m=>m.promise)):null;function c(m){if((o.f&St)===0){u();try{i([...s,...m])}catch(_){Dr(_,o)}Xa()}}var f=km();if(r.length===0){d.then(()=>c([])).finally(f);return}function h(){Promise.all(r.map(m=>Jw(m))).then(c).catch(m=>Dr(m,o)).finally(f)}d?d.then(()=>{u(),h(),Xa()}):h()}function Qw(){var e=ye,t=ve,r=Ue,i=ue;return function(a=!0){Nt(e),Rt(t),Hi(r),a&&(e.f&St)===0&&(i==null||i.activate(),i==null||i.apply())}}function Xa(e=!0){Nt(null),Rt(null),Hi(null),e&&(ue==null||ue.deactivate())}function km(){var e=ye,t=e.b,r=ue,i=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(i,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(i,e)}}function ji(e){var t=Ze|Ve;return ye!==null&&(ye.f|=tn),{ctx:Ue,deps:null,effects:null,equals:bm,f:t,fn:e,reactions:null,rv:0,v:qe,wv:0,parent:ye,ac:null}}const zn=Symbol("obsolete");function Jw(e,t,r){let i=ye;i===null&&dw();var n=void 0,a=Lr(qe),s=!ve,o=new Set;return h$(()=>{var m,_;var u=ye,d=fm();n=d.promise;try{Promise.resolve(e()).then(d.resolve,b=>{b!==Qn&&d.reject(b)}).finally(Xa)}catch(b){d.reject(b),Xa()}var c=ue;if(s){if((u.f&en)!==0)var f=km();if((m=i.b)!=null&&m.is_rendered())(_=c.async_deriveds.get(u))==null||_.reject(zn);else for(const b of o.values())b.reject(zn);o.add(d),c.async_deriveds.set(u,d)}const h=(b,$=void 0)=>{f==null||f(),o.delete(d),$!==zn&&(c.activate(),$?(a.f|=Ur,Ki(a,$)):((a.f&Ur)!==0&&(a.f^=Ur),Ki(a,b)),c.deactivate())};d.promise.then(h,b=>h(null,b||"unknown"))}),Ru(()=>{for(const u of o)u.reject(zn)}),new Promise(u=>{function d(c){function f(){c===n?u(a):d(n)}c.then(f,f)}d(n)})}function e$(e){const t=ji(e);return jm(t),t}function Cu(e){const t=ji(e);return t.equals=vm,t}function t$(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)tt(t[r])}}function zu(e){var t,r=ye,i=e.parent;if(!Sr&&i!==null&&e.v!==qe&&(i.f&(St|lt))!==0)return Bw(),e.v;Nt(i);try{e.f&=~_i,t$(e),t=Ym(e)}finally{Nt(r)}return t}function Im(e){var t=zu(e);if(!e.equals(t)&&(e.wv=Zm(),(!(ue!=null&&ue.is_fork)||e.deps===null)&&(ue!==null?(ue.capture(e,t,!0),Pn==null||Pn.capture(e,t,!0)):e.v=t,e.deps===null))){We(e,Fe);return}Sr||(Je!==null?(Bu()||ue!=null&&ue.is_fork)&&Je.set(e,t):Eu(e))}function r$(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&nn(()=>{r.ac.abort(Qn),r.ac=null}),r.fn!==null&&(r.teardown=nw),Gn(r,0),Mu(r))}function Tm(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Xi(t)}let Ps=null,Ti=null,ue=null,Pn=null,Je=null,Yo=null,Us=!1,Bi=null,La=null;var sc=0;let i$=1;var Ui,Mr,ui,Li,Wi,Gi,_r,qi,mt,Kn,yr,Vt,nr,Vi,li,Oe,Qo,An,Jo,Em,Cm,zi,n$,On;const ls=class ls{constructor(){me(this,Oe);ct(this,"id",i$++);me(this,Ui,!1);ct(this,"linked",!0);me(this,Mr,null);me(this,ui,null);ct(this,"async_deriveds",new Map);ct(this,"current",new Map);ct(this,"previous",new Map);me(this,Li,new Set);me(this,Wi,new Set);me(this,Gi,0);me(this,_r,new Map);me(this,qi,null);me(this,mt,[]);me(this,Kn,[]);me(this,yr,new Set);me(this,Vt,new Set);me(this,nr,new Map);me(this,Vi,new Set);ct(this,"is_fork",!1);me(this,li,!1);Ti===null?Ps=Ti=this:(pe(Ti,ui,this),pe(this,Mr,Ti)),Ti=this}skip_effect(t){O(this,nr).has(t)||O(this,nr).set(t,{d:[],m:[]}),O(this,Vi).delete(t)}unskip_effect(t,r=i=>this.schedule(i)){var i=O(this,nr).get(t);if(i){O(this,nr).delete(t);for(var n of i.d)We(n,Ve),r(n);for(n of i.m)We(n,Zt),r(n)}O(this,Vi).add(t)}capture(t,r,i=!1){t.v!==qe&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Ur)===0&&(this.current.set(t,[r,i]),Je==null||Je.set(t,r)),this.is_fork||(t.v=r)}activate(){ue=this}deactivate(){ue=null,Je=null}flush(){try{Us=!0,ue=this,ke(this,Oe,An).call(this)}finally{sc=0,Yo=null,Bi=null,La=null,Us=!1,ue=null,Je=null,ci.clear()}}discard(){var t;for(const r of O(this,Wi))r(this);O(this,Wi).clear();for(const r of this.async_deriveds.values())r.reject(zn);ke(this,Oe,On).call(this),(t=O(this,qi))==null||t.resolve()}register_created_effect(t){O(this,Kn).push(t)}increment(t,r){if(pe(this,Gi,O(this,Gi)+1),t){let i=O(this,_r).get(r)??0;O(this,_r).set(r,i+1)}}decrement(t,r){if(pe(this,Gi,O(this,Gi)-1),t){let i=O(this,_r).get(r)??0;i===1?O(this,_r).delete(r):O(this,_r).set(r,i-1)}O(this,li)||(pe(this,li,!0),or(()=>{pe(this,li,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const i of t)O(this,yr).add(i);for(const i of r)O(this,Vt).add(i);t.clear(),r.clear()}oncommit(t){O(this,Li).add(t)}ondiscard(t){O(this,Wi).add(t)}settled(){return(O(this,qi)??pe(this,qi,fm())).promise}static ensure(){if(ue===null){const t=ue=new ls;Us||or(()=>{O(t,Ui)||t.flush()})}return ue}apply(){{Je=null;return}}schedule(t){var n;if(Yo=t,(n=t.b)!=null&&n.is_pending&&(t.f&(Fi|Yn|Su))!==0&&(t.f&en)===0){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var i=r.f;if(Bi!==null&&r===ye&&(ve===null||(ve.f&Ze)===0))return;if((i&(xr|Bt))!==0){if((i&Fe)===0)return;r.f^=Fe}}O(this,mt).push(r)}};Ui=new WeakMap,Mr=new WeakMap,ui=new WeakMap,Li=new WeakMap,Wi=new WeakMap,Gi=new WeakMap,_r=new WeakMap,qi=new WeakMap,mt=new WeakMap,Kn=new WeakMap,yr=new WeakMap,Vt=new WeakMap,nr=new WeakMap,Vi=new WeakMap,li=new WeakMap,Oe=new WeakSet,Qo=function(){if(this.is_fork)return!0;for(const i of O(this,_r).keys()){for(var t=i,r=!1;t.parent!==null;){if(O(this,nr).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},An=function(){var u,d,c,f;pe(this,Ui,!0),sc++>1e3&&(ke(this,Oe,On).call(this),a$());for(const h of O(this,yr))O(this,Vt).delete(h),We(h,Ve),this.schedule(h);for(const h of O(this,Vt))We(h,Zt),this.schedule(h);const t=O(this,mt);pe(this,mt,[]),this.apply();var r=Bi=[],i=[],n=La=[];for(const h of t)try{ke(this,Oe,Jo).call(this,h,r,i)}catch(m){throw Om(h),ke(this,Oe,Qo).call(this)||this.discard(),m}if(ue=null,n.length>0){var a=ls.ensure();for(const h of n)a.schedule(h)}if(Bi=null,La=null,ke(this,Oe,Qo).call(this)){ke(this,Oe,zi).call(this,i),ke(this,Oe,zi).call(this,r);for(const[h,m]of O(this,nr))Am(h,m);n.length>0&&ke(u=ue,Oe,An).call(u);return}const s=ke(this,Oe,Em).call(this);if(s){ke(this,Oe,zi).call(this,i),ke(this,Oe,zi).call(this,r),ke(d=s,Oe,Cm).call(d,this);return}O(this,yr).clear(),O(this,Vt).clear();for(const h of O(this,Li))h(this);O(this,Li).clear(),Pn=this,oc(i),oc(r),Pn=null,(c=O(this,qi))==null||c.resolve();var o=ue;if(O(this,Gi)===0&&(O(this,mt).length===0||o!==null)&&ke(this,Oe,On).call(this),O(this,mt).length>0)if(o!==null){const h=o;O(h,mt).push(...O(this,mt).filter(m=>!O(h,mt).includes(m)))}else o=this;o!==null&&ke(f=o,Oe,An).call(f)},Jo=function(t,r,i){t.f^=Fe;for(var n=t.first;n!==null;){var a=n.f,s=(a&(Bt|xr))!==0,o=s&&(a&Fe)!==0,u=o||(a&lt)!==0||O(this,nr).has(n);if(!u&&n.fn!==null){s?n.f^=Fe:(a&Fi)!==0?r.push(n):ta(n)&&((a&jt)!==0&&O(this,Vt).add(n),Xi(n));var d=n.first;if(d!==null){n=d;continue}}for(;n!==null;){var c=n.next;if(c!==null){n=c;break}n=n.parent}}},Em=function(){for(var t=O(this,Mr);t!==null;){if(!t.is_fork){for(const[r,[,i]]of this.current)if(t.current.has(r)&&!i)return t}t=O(t,Mr)}return null},Cm=function(t){var i;for(const[n,a]of t.current)!this.previous.has(n)&&t.previous.has(n)&&this.previous.set(n,t.previous.get(n)),this.current.set(n,a);for(const[n,a]of t.async_deriveds){const s=this.async_deriveds.get(n);s&&a.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(O(t,yr),O(t,Vt));const r=n=>{var a=n.reactions;if(a!==null&&!((n.f&Ze)!==0&&(n.f&(Ve|Zt))===0))for(const u of a){var s=u.f;if((s&Ze)!==0)r(u);else{var o=u;s&(Mi|jt)&&!this.async_deriveds.has(o)&&(O(this,Vt).delete(o),We(o,Ve),this.schedule(o))}}};for(const n of this.current.keys())r(n);this.oncommit(()=>t.discard()),ke(i=t,Oe,On).call(i),ue=this,ke(this,Oe,An).call(this)},zi=function(t){for(var r=0;r<t.length;r+=1)xm(t[r],O(this,yr),O(this,Vt))},n$=function(){var f;for(let h=Ps;h!==null;h=O(h,ui)){var t=h.id<this.id,r=[];for(const[m,[_,b]]of this.current){if(h.current.has(m)){var i=h.current.get(m)[0];if(t&&_!==i)h.current.set(m,[_,b]);else continue}r.push(m)}if(t)for(const[m,_]of this.async_deriveds){const b=h.async_deriveds.get(m);b&&_.promise.then(b.resolve).catch(b.reject)}var n=[...h.current.keys()].filter(m=>!h.current.get(m)[1]);if(!(!O(h,Ui)||n.length===0)){var a=n.filter(m=>!this.current.has(m));if(a.length===0)t&&h.discard();else if(r.length>0){if(t)for(const m of O(this,Vi))h.unskip_effect(m,_=>{var b;(_.f&(jt|Mi))!==0?h.schedule(_):ke(b=h,Oe,zi).call(b,[_])});h.activate();var s=new Set,o=new Map;for(var u of r)zm(u,a,s,o);o=new Map;var d=[...h.current].filter(([m,_])=>{const b=this.current.get(m);return b?b[0]!==_[0]||b[1]!==_[1]:!0}).map(([m])=>m);if(d.length>0)for(const m of O(this,Kn))(m.f&(St|lt|Ka))===0&&Au(m,d,o)&&((m.f&(Mi|jt))!==0?(We(m,Ve),h.schedule(m)):O(h,yr).add(m));if(O(h,mt).length>0&&!O(h,li)){h.apply();for(var c of O(h,mt))ke(f=h,Oe,Jo).call(f,c,[],[]);pe(h,mt,[])}h.deactivate()}}}},On=function(){if(this.linked){var t=O(this,Mr),r=O(this,ui);t===null?Ps=r:pe(t,ui,r),r===null?Ti=t:pe(r,Mr,t),this.linked=!1}};let yi=ls;function a$(){try{mw()}catch(e){Dr(e,Yo)}}let qt=null;function oc(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var i=e[r++];if((i.f&(St|lt))===0&&ta(i)&&(qt=new Set,Xi(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&Vm(i),(qt==null?void 0:qt.size)>0)){ci.clear();for(const n of qt){if((n.f&(St|lt))!==0)continue;const a=[n];let s=n.parent;for(;s!==null;)qt.has(s)&&(qt.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const u=a[o];(u.f&(St|lt))===0&&Xi(u)}}qt.clear()}}qt=null}}function zm(e,t,r,i){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const n of e.reactions){const a=n.f;(a&Ze)!==0?zm(n,t,r,i):(a&(Mi|jt))!==0&&(a&Ve)===0&&Au(n,t,i)&&(We(n,Ve),Ou(n))}}function Au(e,t,r){const i=r.get(e);if(i!==void 0)return i;if(e.deps!==null)for(const n of e.deps){if(ja.call(t,n))return!0;if((n.f&Ze)!==0&&Au(n,t,r))return r.set(n,!0),!0}return r.set(e,!1),!1}function Ou(e){ue.schedule(e)}function Am(e,t){if(!((e.f&Bt)!==0&&(e.f&Fe)!==0)){(e.f&Ve)!==0?t.d.push(e):(e.f&Zt)!==0&&t.m.push(e),We(e,Fe);for(var r=e.first;r!==null;)Am(r,t),r=r.next}}function Om(e){We(e,Fe);for(var t=e.first;t!==null;)Om(t),t=t.next}let Ya=new Set;const ci=new Map;let Bm=!1;function Lr(e,t){var r={f:0,v:e,reactions:null,equals:bm,rv:0,wv:0};return r}function at(e,t){const r=Lr(e);return jm(r),r}function s$(e,t=!1,r=!0){var n;const i=Lr(e);return t||(i.equals=vm),rn&&r&&Ue!==null&&Ue.l!==null&&((n=Ue.l).s??(n.s=[])).push(i),i}function ae(e,t,r=!1){ve!==null&&(!Kt||(ve.f&Ka)!==0)&&Jn()&&(ve.f&(Ze|jt|Mi|Ka))!==0&&(ur===null||!ur.has(e))&&bw();let i=r?ii(t):t;return Ki(e,i,La)}function Ki(e,t,r=null){if(!e.equals(t)){ci.set(e,Sr?t:e.v);var i=yi.ensure();if(i.capture(e,t),(e.f&Ze)!==0){const n=e;(e.f&Ve)!==0&&zu(n),Je===null&&Eu(n)}e.wv=Zm(),Rm(e,Ve,r),Jn()&&ye!==null&&(ye.f&Fe)!==0&&(ye.f&(Bt|xr))===0&&(Et===null?y$([e]):Et.push(e)),!i.is_fork&&Ya.size>0&&!Bm&&o$()}return t}function o$(){Bm=!1;for(const e of Ya){(e.f&Fe)!==0&&We(e,Zt);let t;try{t=ta(e)}catch{t=!0}t&&Xi(e)}Ya.clear()}function uc(e,t=1){var r=q(e),i=t===1?r++:r--;return ae(e,r),i}function Un(e){ae(e,e.v+1)}function Rm(e,t,r){var i=e.reactions;if(i!==null)for(var n=Jn(),a=i.length,s=0;s<a;s++){var o=i[s],u=o.f;if(!(!n&&o===ye)){var d=(u&Ve)===0;if(d&&We(o,t),(u&Ka)!==0)Ya.add(o);else if((u&Ze)!==0){var c=o;Je==null||Je.delete(c),(u&_i)===0&&(u&Ot&&(ye===null||(ye.f&Za)===0)&&(o.f|=_i),Rm(c,Zt,r))}else if(d){var f=o;(u&jt)!==0&&qt!==null&&qt.add(f),r!==null?r.push(f):Ou(f)}}}}function ii(e){if(typeof e!="object"||e===null||wr in e)return e;const t=xu(e);if(t!==rw&&t!==iw)return e;var r=new Map,i=$u(e),n=at(0),a=fi,s=o=>{if(fi===a)return o();var u=ve,d=fi;Rt(null),pc(a);var c=o();return Rt(u),pc(d),c};return i&&r.set("length",at(e.length)),new Proxy(e,{defineProperty(o,u,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&_w();var c=r.get(u);return c===void 0?s(()=>{var f=at(d.value);return r.set(u,f),f}):ae(c,d.value,!0),!0},deleteProperty(o,u){var d=r.get(u);if(d===void 0){if(u in o){const c=s(()=>at(qe));r.set(u,c),Un(n)}}else ae(d,qe),Un(n);return!0},get(o,u,d){var m;if(u===wr)return e;var c=r.get(u),f=u in o;if(c===void 0&&(!f||(m=Pr(o,u))!=null&&m.writable)&&(c=s(()=>{var _=ii(f?o[u]:qe),b=at(_);return b}),r.set(u,c)),c!==void 0){var h=q(c);return h===qe?void 0:h}return Reflect.get(o,u,d)},getOwnPropertyDescriptor(o,u){var d=Reflect.getOwnPropertyDescriptor(o,u);if(d&&"value"in d){var c=r.get(u);c&&(d.value=q(c))}else if(d===void 0){var f=r.get(u),h=f==null?void 0:f.v;if(f!==void 0&&h!==qe)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return d},has(o,u){var h;if(u===wr)return!0;var d=r.get(u),c=d!==void 0&&d.v!==qe||Reflect.has(o,u);if(d!==void 0||ye!==null&&(!c||(h=Pr(o,u))!=null&&h.writable)){d===void 0&&(d=s(()=>{var m=c?ii(o[u]):qe,_=at(m);return _}),r.set(u,d));var f=q(d);if(f===qe)return!1}return c},set(o,u,d,c){var I;var f=r.get(u),h=u in o;if(i&&u==="length")for(var m=d;m<f.v;m+=1){var _=r.get(m+"");_!==void 0?ae(_,qe):m in o&&(_=s(()=>at(qe)),r.set(m+"",_))}if(f===void 0)(!h||(I=Pr(o,u))!=null&&I.writable)&&(f=s(()=>at(void 0)),ae(f,ii(d)),r.set(u,f));else{h=f.v!==qe;var b=s(()=>ii(d));ae(f,b)}var $=Reflect.getOwnPropertyDescriptor(o,u);if($!=null&&$.set&&$.set.call(c,d),!h){if(i&&typeof u=="string"){var v=r.get("length"),w=Number(u);Number.isInteger(w)&&w>=v.v&&ae(v,w+1)}Un(n)}return!0},ownKeys(o){q(n);var u=Reflect.ownKeys(o).filter(f=>{var h=r.get(f);return h===void 0||h.v!==qe});for(var[d,c]of r)c.v!==qe&&!(d in o)&&u.push(d);return u},setPrototypeOf(){yw()}})}function lc(e){try{if(e!==null&&typeof e=="object"&&wr in e)return e[wr]}catch{}return e}function u$(e,t){return Object.is(lc(e),lc(t))}var dc,Nm,Mm,Dm;function l$(){if(dc===void 0){dc=window,Nm=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Mm=Pr(t,"firstChild").get,Dm=Pr(t,"nextSibling").get,ic(e)&&(e[Fo]=void 0,e[Ma]=null,e[Ho]=void 0,e.__e=void 0),ic(r)&&(r[Cn]=void 0)}}function $r(e=""){return document.createTextNode(e)}function Zi(e){return Mm.call(e)}function ea(e){return Dm.call(e)}function Ne(e,t){return Zi(e)}function an(e,t=!1){{var r=Zi(e);return r instanceof Comment&&r.data===""?ea(r):r}}function ft(e,t=1,r=!1){let i=e;for(;t--;)i=ea(i);return i}function d$(e){e.textContent=""}function Pm(){return!1}function Um(e,t,r){return t==null||t===ym?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function Lm(e){ye===null&&(ve===null&&hw(),fw()),Sr&&pw()}function c$(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Yt(e,t){var r=ye;r!==null&&(r.f&lt)!==0&&(e|=lt);var i={ctx:Ue,deps:null,nodes:null,f:e|Ve|Ot,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};ue==null||ue.register_created_effect(i);var n=i;if((e&Fi)!==0)Bi!==null?Bi.push(i):yi.ensure().schedule(i);else if(t!==null){try{Xi(i)}catch(s){throw tt(i),s}n.deps===null&&n.teardown===null&&n.nodes===null&&n.first===n.last&&(n.f&tn)===0&&(n=n.first,(e&jt)!==0&&(e&gi)!==0&&n!==null&&(n.f|=gi))}if(n!==null&&(n.parent=r,r!==null&&c$(n,r),ve!==null&&(ve.f&Ze)!==0&&(e&xr)===0)){var a=ve;(a.effects??(a.effects=[])).push(n)}return i}function Bu(){return ve!==null&&!Kt}function Ru(e){const t=Yt(Yn,null);return We(t,Fe),t.teardown=e,t}function eu(e){Lm();var t=ye.f,r=!ve&&(t&Bt)!==0&&Ue!==null&&!Ue.i;if(r){var i=Ue;(i.e??(i.e=[])).push(e)}else return Wm(e)}function Wm(e){return Yt(Fi|hm,e)}function p$(e){return Lm(),Yt(Yn|hm,e)}function f$(e){yi.ensure();const t=Yt(xr|tn,e);return(r={})=>new Promise(i=>{r.outro?pi(t,()=>{tt(t),i(void 0)}):(tt(t),i(void 0))})}function Nu(e){return Yt(Fi,e)}function h$(e){return Yt(Mi|tn,e)}function m$(e,t=0){return Yt(Yn|t,e)}function ba(e,t=[],r=[],i=[]){Sm(i,t,r,n=>{Yt(Yn,()=>{e(...n.map(q))})})}function ps(e,t=0){var r=Yt(jt|t,e);return r}function Gm(e,t=0){var r=Yt(Su|t,e);return r}function _t(e){return Yt(Bt|tn,e)}function qm(e){var t=e.teardown;if(t!==null){const r=Sr,i=ve;cc(!0),Rt(null);try{t.call(null)}finally{cc(r),Rt(i)}}}function Mu(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const n=r.ac;n!==null&&nn(()=>{n.abort(Qn)});var i=r.next;(r.f&xr)!==0?r.parent=null:tt(r,t),r=i}}function g$(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Bt)===0&&tt(t),t=r}}function tt(e,t=!0){var r=!1;(t||(e.f&ow)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(_$(e.nodes.start,e.nodes.end),r=!0),e.f|=nc,Mu(e,t&&!r),Gn(e,0);var i=e.nodes&&e.nodes.t;if(i!==null)for(const a of i)a.stop();qm(e),e.f^=nc,e.f|=St;var n=e.parent;n!==null&&n.first!==null&&Vm(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function _$(e,t){for(;e!==null;){var r=e===t?null:ea(e);e.remove(),e=r}}function Vm(e){var t=e.parent,r=e.prev,i=e.next;r!==null&&(r.next=i),i!==null&&(i.prev=r),t!==null&&(t.first===e&&(t.first=i),t.last===e&&(t.last=r))}function pi(e,t,r=!0){var i=[];Fm(e,i,!0);var n=()=>{r&&tt(e),t&&t()},a=i.length;if(a>0){var s=()=>--a||n();for(var o of i)o.out(s)}else n()}function Fm(e,t,r){if((e.f&lt)===0){e.f^=lt;var i=e.nodes&&e.nodes.t;if(i!==null)for(const o of i)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var a=n.next;if((n.f&xr)===0){var s=(n.f&gi)!==0||(n.f&Bt)!==0&&(e.f&jt)!==0;Fm(n,t,s?r:!1)}n=a}}}function Qa(e){Hm(e,!0)}function Hm(e,t){if((e.f&lt)!==0){e.f^=lt,(e.f&Fe)===0&&(We(e,Ve),yi.ensure().schedule(e));for(var r=e.first;r!==null;){var i=r.next,n=(r.f&gi)!==0||(r.f&Bt)!==0;Hm(r,n?t:!1),r=i}var a=e.nodes&&e.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function Du(e,t){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end;r!==null;){var n=r===i?null:ea(r);t.append(r),r=n}}let Wa=!1,Sr=!1;function cc(e){Sr=e}let ve=null,Kt=!1;function Rt(e){ve=e}let ye=null;function Nt(e){ye=e}let ur=null;function jm(e){ve!==null&&(ur??(ur=new Set)).add(e)}let gt=null,vt=0,Et=null;function y$(e){Et=e}let Km=1,ni=0,fi=ni;function pc(e){fi=e}function Zm(){return++Km}function ta(e){var t=e.f;if((t&Ve)!==0)return!0;if(t&Ze&&(e.f&=~_i),(t&Zt)!==0){for(var r=e.deps,i=r.length,n=0;n<i;n++){var a=r[n];if(ta(a)&&Im(a),a.wv>e.wv)return!0}(t&Ot)!==0&&Je===null&&We(e,Fe)}return!1}function Xm(e,t,r=!0){var i=e.reactions;if(i!==null&&!(ur!==null&&ur.has(e)))for(var n=0;n<i.length;n++){var a=i[n];(a.f&Ze)!==0?Xm(a,t,!1):t===a&&(r?We(a,Ve):(a.f&Fe)!==0&&We(a,Zt),Ou(a))}}function Ym(e){var b;var t=gt,r=vt,i=Et,n=ve,a=ur,s=Ue,o=Kt,u=fi,d=e.f;gt=null,vt=0,Et=null,ve=(d&(Bt|xr))===0?e:null,ur=null,Hi(e.ctx),Kt=!1,fi=++ni,e.ac!==null&&(nn(()=>{e.ac.abort(Qn)}),e.ac=null);try{e.f|=Za;var c=e.fn,f=c();e.f|=en;var h=e.deps,m=ue==null?void 0:ue.is_fork;if(gt!==null){var _;if(m||Gn(e,vt),h!==null&&vt>0)for(h.length=vt+gt.length,_=0;_<gt.length;_++)h[vt+_]=gt[_];else e.deps=h=gt;if(Bu()&&(e.f&Ot)!==0)for(_=vt;_<h.length;_++)((b=h[_]).reactions??(b.reactions=[])).push(e)}else!m&&h!==null&&vt<h.length&&(Gn(e,vt),h.length=vt);if(Jn()&&Et!==null&&!Kt&&h!==null&&(e.f&(Ze|Zt|Ve))===0)for(_=0;_<Et.length;_++)Xm(Et[_],e);if(n!==null&&n!==e){if(ni++,n.deps!==null)for(let $=0;$<r;$+=1)n.deps[$].rv=ni;if(t!==null)for(const $ of t)$.rv=ni;Et!==null&&(i===null?i=Et:i.push(...Et))}return(e.f&Ur)!==0&&(e.f^=Ur),f}catch($){return wm($)}finally{e.f^=Za,gt=t,vt=r,Et=i,ve=n,ur=a,Hi(s),Kt=o,fi=u}}function b$(e,t){let r=t.reactions;if(r!==null){var i=ew.call(r,e);if(i!==-1){var n=r.length-1;n===0?r=t.reactions=null:(r[i]=r[n],r.pop())}}if(r===null&&(t.f&Ze)!==0&&(gt===null||!ja.call(gt,t))){var a=t;(a.f&Ot)!==0&&(a.f^=Ot,a.f&=~_i),a.v!==qe&&Eu(a),a.ac!==null&&nn(()=>{a.ac.abort(Qn),a.ac=null,We(a,Ve)}),r$(a),Gn(a,0)}}function Gn(e,t){var r=e.deps;if(r!==null)for(var i=t;i<r.length;i++)b$(e,r[i])}function Xi(e){var t=e.f;if((t&St)===0){We(e,Fe);var r=ye,i=Wa;ye=e,Wa=(t&(Bt|xr))===0;try{(t&(jt|Su))!==0?g$(e):Mu(e),qm(e);var n=Ym(e);e.teardown=typeof n=="function"?n:null,e.wv=Km;var a;cm&&Dw&&(e.f&Ve)!==0&&e.deps}finally{Wa=i,ye=r}}}function q(e){var t=e.f,r=(t&Ze)!==0;if(ve!==null&&!Kt){var i=ye!==null&&(ye.f&St)!==0;if(!i&&(ur===null||!ur.has(e))){var n=ve.deps;if((ve.f&Za)!==0)e.rv<ni&&(e.rv=ni,gt===null&&n!==null&&n[vt]===e?vt++:gt===null?gt=[e]:gt.push(e));else{ve.deps??(ve.deps=[]),ja.call(ve.deps,e)||ve.deps.push(e);var a=e.reactions;a===null?e.reactions=[ve]:ja.call(a,ve)||a.push(ve)}}}if(Sr&&ci.has(e))return ci.get(e);if(r){var s=e;if(Sr){var o=s.v;return((s.f&Fe)===0&&s.reactions!==null||Jm(s))&&(o=zu(s)),ci.set(s,o),o}var u=(s.f&Ot)===0&&!Kt&&ve!==null&&(Wa||(ve.f&Ot)!==0),d=(s.f&en)===0;ta(s)&&(u&&(s.f|=Ot),Im(s)),u&&!d&&(Tm(s),Qm(s))}if(Je!=null&&Je.has(e))return Je.get(e);if((e.f&Ur)!==0)throw e.v;return e.v}function Qm(e){if(e.f|=Ot,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Ze)!==0&&(t.f&Ot)===0&&(Tm(t),Qm(t))}function Jm(e){if(e.v===qe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(ci.has(t)||(t.f&Ze)!==0&&Jm(t))return!0;return!1}function Yi(e){var t=Kt;try{return Kt=!0,e()}finally{Kt=t}}function Ai(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(wr in e)tu(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&wr in r&&tu(r)}}}function tu(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let i in e)try{tu(e[i],t)}catch{}const r=xu(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const i=pm(r);for(let n in i){const a=i[n].get;if(a)try{a.call(e)}catch{}}}}}function v$(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const w$=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function $$(e){return w$.includes(e)}const x$={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function S$(e){return e=e.toLowerCase(),x$[e]??e}const k$=["touchstart","touchmove"];function I$(e){return k$.includes(e)}const ai=Symbol("events"),eg=new Set,ru=new Set;function T$(e,t,r,i={}){function n(a){if(i.capture||iu.call(t,a),!a.cancelBubble)return nn(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?or(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function Ga(e,t,r){(t[ai]??(t[ai]={}))[e]=r}function tg(e){for(var t=0;t<e.length;t++)eg.add(e[t]);for(var r of ru)r(e)}let fc=null;function iu(e){var b,$;var t=this,r=t.ownerDocument,i=e.type,n=((b=e.composedPath)==null?void 0:b.call(e))||[],a=n[0]||e.target;fc=e;var s=0,o=fc===e&&e[ai];if(o){var u=n.indexOf(o);if(u!==-1&&(t===document||t===window)){e[ai]=t;return}var d=n.indexOf(t);if(d===-1)return;u<=d&&(s=u)}if(a=n[s]||e.target,a!==t){tw(e,"currentTarget",{configurable:!0,get(){return a||r}});var c=ve,f=ye;Rt(null),Nt(null);try{for(var h,m=[];a!==null&&a!==t;){try{var _=($=a[ai])==null?void 0:$[i];_!=null&&(!a.disabled||e.target===a)&&_.call(a,e)}catch(v){h?m.push(v):h=v}if(e.cancelBubble)break;s++,a=s<n.length?n[s]:null}if(h){for(let v of m)queueMicrotask(()=>{throw v});throw h}}finally{e[ai]=t,delete e.currentTarget,Rt(c),Nt(f)}}}var lm;const Ls=((lm=globalThis==null?void 0:globalThis.window)==null?void 0:lm.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function E$(e){return(Ls==null?void 0:Ls.createHTML(e))??e}function rg(e){var t=Um("template");return t.innerHTML=E$(e.replaceAll("<!>","<!---->")),t.content}function qn(e,t){var r=ye;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function kr(e,t){var r=(t&Cw)!==0,i=(t&zw)!==0,n,a=!e.startsWith("<!>");return()=>{n===void 0&&(n=rg(a?e:"<!>"+e),r||(n=Zi(n)));var s=i||Nm?document.importNode(n,!0):n.cloneNode(!0);if(r){var o=Zi(s),u=s.lastChild;qn(o,u)}else qn(s,s);return s}}function C$(e,t,r="svg"){var i=!e.startsWith("<!>"),n=`<${r}>${i?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var s=rg(n),o=Zi(s);a=Zi(o)}var u=a.cloneNode(!0);return qn(u,u),u}}function z$(e,t){return C$(e,t,"svg")}function sn(){var e=document.createDocumentFragment(),t=document.createComment(""),r=$r();return e.append(t,r),qn(t,r),e}function Qe(e,t){e!==null&&e.before(t)}function va(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Cn]??(e[Cn]=e.nodeValue))&&(e[Cn]=r,e.nodeValue=`${r}`)}function A$(e,t){return O$(e,t)}const wa=new Map;function O$(e,{target:t,anchor:r,props:i={},events:n,context:a,intro:s=!0,transformError:o}){l$();var u=void 0,d=f$(()=>{var c=r??t.appendChild($r());jw(c,{pending:()=>{}},m=>{Iu({});var _=Ue;a&&(_.c=a),n&&(i.$$events=n),u=e(m,i)||{},Tu()},o);var f=new Set,h=m=>{for(var _=0;_<m.length;_++){var b=m[_];if(!f.has(b)){f.add(b);var $=I$(b);for(const I of[t,document]){var v=wa.get(I);v===void 0&&(v=new Map,wa.set(I,v));var w=v.get(b);w===void 0?(I.addEventListener(b,iu,{passive:$}),v.set(b,1)):v.set(b,w+1)}}}};return h(cs(eg)),ru.add(h),()=>{var $;for(var m of f)for(const v of[t,document]){var _=wa.get(v),b=_.get(m);--b==0?(v.removeEventListener(m,iu),_.delete(m),_.size===0&&wa.delete(v)):_.set(m,b)}ru.delete(h),c!==r&&(($=c.parentNode)==null||$.removeChild(c))}});return B$.set(u,d),u}let B$=new WeakMap;var Ft,ar,$t,di,Zn,Xn,ds;class ig{constructor(t,r=!0){ct(this,"anchor");me(this,Ft,new Map);me(this,ar,new Map);me(this,$t,new Map);me(this,di,new Set);me(this,Zn,!0);me(this,Xn,t=>{if(O(this,Ft).has(t)){var r=O(this,Ft).get(t),i=O(this,ar).get(r);if(i)Qa(i),O(this,di).delete(r);else{var n=O(this,$t).get(r);n&&(Qa(n.effect),O(this,ar).set(r,n.effect),O(this,$t).delete(r),n.fragment.lastChild.remove(),this.anchor.before(n.fragment),i=n.effect)}for(const[a,s]of O(this,Ft)){if(O(this,Ft).delete(a),a===t)break;const o=O(this,$t).get(s);o&&(tt(o.effect),O(this,$t).delete(s))}for(const[a,s]of O(this,ar)){if(a===r||O(this,di).has(a))continue;const o=()=>{if(Array.from(O(this,Ft).values()).includes(a)){var d=document.createDocumentFragment();Du(s,d),d.append($r()),O(this,$t).set(a,{effect:s,fragment:d})}else tt(s);O(this,di).delete(a),O(this,ar).delete(a)};O(this,Zn)||!i?(O(this,di).add(a),pi(s,o,!1)):o()}}});me(this,ds,t=>{O(this,Ft).delete(t);const r=Array.from(O(this,Ft).values());for(const[i,n]of O(this,$t))r.includes(i)||(tt(n.effect),O(this,$t).delete(i))});this.anchor=t,pe(this,Zn,r)}ensure(t,r){var i=ue,n=Pm();if(r&&!O(this,ar).has(t)&&!O(this,$t).has(t))if(n){var a=document.createDocumentFragment(),s=$r();a.append(s),O(this,$t).set(t,{effect:_t(()=>r(s)),fragment:a})}else O(this,ar).set(t,_t(()=>r(this.anchor)));if(O(this,Ft).set(i,t),n){for(const[o,u]of O(this,ar))o===t?i.unskip_effect(u):i.skip_effect(u);for(const[o,u]of O(this,$t))o===t?i.unskip_effect(u.effect):i.skip_effect(u.effect);i.oncommit(O(this,Xn)),i.ondiscard(O(this,ds))}else O(this,Xn).call(this,i)}}Ft=new WeakMap,ar=new WeakMap,$t=new WeakMap,di=new WeakMap,Zn=new WeakMap,Xn=new WeakMap,ds=new WeakMap;function hc(e,t,r=!1){var i=new ig(e),n=r?gi:0;function a(s,o){i.ensure(s,o)}ps(()=>{var s=!1;t((o,u=0)=>{s=!0,a(u,o)}),s||a(-1,null)},n)}function qa(e,t){return t}function R$(e,t,r){for(var i=[],n=t.length,a,s=t.length,o=0;o<n;o++){let f=t[o];pi(f,()=>{if(a){if(a.pending.delete(f),a.done.add(f),a.pending.size===0){var h=e.outrogroups;nu(e,cs(a.done)),h.delete(a),h.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var u=i.length===0&&r!==null;if(u){var d=r,c=d.parentNode;d$(c),c.append(d),e.items.clear()}nu(e,t,!u)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function nu(e,t,r=!0){var i;if(e.pending.size>0){i=new Set;for(const s of e.pending.values())for(const o of s)i.add(e.items.get(o).e)}for(var n=0;n<t.length;n++){var a=t[n];if(i!=null&&i.has(a)){a.f|=sr;const s=document.createDocumentFragment();Du(a,s)}else tt(t[n],r)}}var mc;function Va(e,t,r,i,n,a=null){var s=e,o=new Map,u=(t&gm)!==0;if(u){var d=e;s=d.appendChild($r())}var c=null,f=Cu(()=>{var I=r();return $u(I)?I:I==null?[]:cs(I)}),h,m=new Map,_=!0;function b(I){(w.effect.f&St)===0&&(w.pending.delete(I),w.fallback=c,N$(w,h,s,t,i),c!==null&&(h.length===0?(c.f&sr)===0?Qa(c):(c.f^=sr,Bn(c,null,s)):pi(c,()=>{c=null})))}function $(I){w.pending.delete(I)}var v=ps(()=>{h=q(f);for(var I=h.length,k=new Set,T=ue,C=Pm(),z=0;z<I;z+=1){var x=h[z],N=i(x,z),P=_?null:o.get(N);P?(P.v&&Ki(P.v,x),P.i&&Ki(P.i,z),C&&T.unskip_effect(P.e)):(P=M$(o,_?s:mc??(mc=$r()),x,N,z,n,t,r),_||(P.e.f|=sr),o.set(N,P)),k.add(N)}if(I===0&&a&&!c&&(_?c=_t(()=>a(s)):(c=_t(()=>a(mc??(mc=$r()))),c.f|=sr)),I>k.size&&cw(),!_)if(m.set(T,k),C){for(const[F,j]of o)k.has(F)||T.skip_effect(j.e);T.oncommit(b),T.ondiscard($)}else b(T);q(f)}),w={effect:v,items:o,pending:m,outrogroups:null,fallback:c};_=!1}function mn(e){for(;e!==null&&(e.f&Bt)===0;)e=e.next;return e}function N$(e,t,r,i,n){var P,F,j,Z,B,Y,K,J,be;var a=(i&xw)!==0,s=t.length,o=e.items,u=mn(e.effect.first),d,c=null,f,h=[],m=[],_,b,$,v;if(a)for(v=0;v<s;v+=1)_=t[v],b=n(_,v),$=o.get(b).e,($.f&sr)===0&&((F=(P=$.nodes)==null?void 0:P.a)==null||F.measure(),(f??(f=new Set)).add($));for(v=0;v<s;v+=1){if(_=t[v],b=n(_,v),$=o.get(b).e,e.outrogroups!==null)for(const L of e.outrogroups)L.pending.delete($),L.done.delete($);if(($.f&lt)!==0&&(Qa($),a&&((Z=(j=$.nodes)==null?void 0:j.a)==null||Z.unfix(),(f??(f=new Set)).delete($))),($.f&sr)!==0)if($.f^=sr,$===u)Bn($,null,r);else{var w=c?c.next:u;$===e.effect.last&&(e.effect.last=$.prev),$.prev&&($.prev.next=$.next),$.next&&($.next.prev=$.prev),zr(e,c,$),zr(e,$,w),Bn($,w,r),c=$,h=[],m=[],u=mn(c.next);continue}if($!==u){if(d!==void 0&&d.has($)){if(h.length<m.length){var I=m[0],k;c=I.prev;var T=h[0],C=h[h.length-1];for(k=0;k<h.length;k+=1)Bn(h[k],I,r);for(k=0;k<m.length;k+=1)d.delete(m[k]);zr(e,T.prev,C.next),zr(e,c,T),zr(e,C,I),u=I,c=C,v-=1,h=[],m=[]}else d.delete($),Bn($,u,r),zr(e,$.prev,$.next),zr(e,$,c===null?e.effect.first:c.next),zr(e,c,$),c=$;continue}for(h=[],m=[];u!==null&&u!==$;)(d??(d=new Set)).add(u),m.push(u),u=mn(u.next);if(u===null)continue}($.f&sr)===0&&h.push($),c=$,u=mn($.next)}if(e.outrogroups!==null){for(const L of e.outrogroups)L.pending.size===0&&(nu(e,cs(L.done)),(B=e.outrogroups)==null||B.delete(L));e.outrogroups.size===0&&(e.outrogroups=null)}if(u!==null||d!==void 0){var z=[];if(d!==void 0)for($ of d)($.f&lt)===0&&z.push($);for(;u!==null;)(u.f&lt)===0&&u!==e.fallback&&z.push(u),u=mn(u.next);var x=z.length;if(x>0){var N=(i&gm)!==0&&s===0?r:null;if(a){for(v=0;v<x;v+=1)(K=(Y=z[v].nodes)==null?void 0:Y.a)==null||K.measure();for(v=0;v<x;v+=1)(be=(J=z[v].nodes)==null?void 0:J.a)==null||be.fix()}R$(e,z,N)}}a&&or(()=>{var L,de;if(f!==void 0)for($ of f)(de=(L=$.nodes)==null?void 0:L.a)==null||de.apply()})}function M$(e,t,r,i,n,a,s,o){var u=(s&ww)!==0?(s&Sw)===0?s$(r,!1,!1):Lr(r):null,d=(s&$w)!==0?Lr(n):null;return{v:u,i:d,e:_t(()=>(a(t,u??r,d??n,o),()=>{e.delete(i)}))}}function Bn(e,t,r){if(e.nodes)for(var i=e.nodes.start,n=e.nodes.end,a=t&&(t.f&sr)===0?t.nodes.start:r;i!==null;){var s=ea(i);if(a.before(i),i===n)return;i=s}}function zr(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function on(e,t,r,i,n){var o;var a=(o=t.$$slots)==null?void 0:o[r],s=!1;a===!0&&(a=t.children,s=!0),a===void 0||a(e,s?()=>i:i)}function D$(e,t,r,i,n,a){var s=null,o=e,u=new ig(o,!1);ps(()=>{const d=t()||null;var c=Aw;if(d===null){u.ensure(null,null);return}return u.ensure(d,f=>{if(d){if(s=Um(d,c),qn(s,s),i){var h=null,m=s.appendChild($r());i(s,m),h==null||h.remove()}ye.nodes.end=s,f.before(s)}}),()=>{}},gi),Ru(()=>{})}function P$(e,t){var r=void 0,i;Gm(()=>{r!==(r=t())&&(i&&(tt(i),i=null),r&&(i=_t(()=>{Nu(()=>r(e))})))})}function ng(e){var t,r,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(r=ng(e[t]))&&(i&&(i+=" "),i+=r)}else for(r in e)e[r]&&(i&&(i+=" "),i+=r);return i}function U$(){for(var e,t,r=0,i="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=ng(e))&&(i&&(i+=" "),i+=t);return i}function ag(e){return typeof e=="object"?U$(e):e??""}const gc=[...` 	
\r\f \v\uFEFF`];function L$(e,t,r){var i=e==null?"":""+e;if(r){for(var n of Object.keys(r))if(r[n])i=i?i+" "+n:n;else if(i.length)for(var a=n.length,s=0;(s=i.indexOf(n,s))>=0;){var o=s+a;(s===0||gc.includes(i[s-1]))&&(o===i.length||gc.includes(i[o]))?i=(s===0?"":i.substring(0,s))+i.substring(o+1):s=o}}return i===""?null:i}function _c(e,t=!1){var r=t?" !important;":";",i="";for(var n of Object.keys(e)){var a=e[n];a!=null&&a!==""&&(i+=" "+n+": "+a+r)}return i}function Ws(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function W$(e,t){if(t){var r="",i,n;if(Array.isArray(t)?(i=t[0],n=t[1]):i=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,s=0,o=!1,u=[];i&&u.push(...Object.keys(i).map(Ws)),n&&u.push(...Object.keys(n).map(Ws));var d=0,c=-1;const b=e.length;for(var f=0;f<b;f++){var h=e[f];if(o?h==="/"&&e[f-1]==="*"&&(o=!1):a?a===h&&(a=!1):h==="/"&&e[f+1]==="*"?o=!0:h==='"'||h==="'"?a=h:h==="("?s++:h===")"&&s--,!o&&a===!1&&s===0){if(h===":"&&c===-1)c=f;else if(h===";"||f===b-1){if(c!==-1){var m=Ws(e.substring(d,c).trim());if(!u.includes(m)){h!==";"&&f++;var _=e.substring(d,f).trim();r+=" "+_+";"}}d=f+1,c=-1}}}}return i&&(r+=_c(i)),n&&(r+=_c(n,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Rr(e,t,r,i,n,a){var s=e[Fo];if(s!==r||s===void 0){var o=L$(r,i,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[Fo]=r}else if(a&&n!==a)for(var u in a){var d=!!a[u];(n==null||d!==!!n[u])&&e.classList.toggle(u,d)}return a}function Gs(e,t={},r,i){for(var n in r){var a=r[n];t[n]!==a&&(r[n]==null?e.style.removeProperty(n):e.style.setProperty(n,a,i))}}function G$(e,t,r,i){var n=e[Ho];if(n!==t){var a=W$(t,i);a==null?e.removeAttribute("style"):e.style.cssText=a,e[Ho]=t}else i&&(Array.isArray(i)?(Gs(e,r==null?void 0:r[0],i[0]),Gs(e,r==null?void 0:r[1],i[1],"important")):Gs(e,r,i));return i}function Ja(e,t,r=!1){if(e.multiple){if(t==null)return;if(!$u(t))return Rw();for(var i of e.options)i.selected=t.includes(Ln(i));return}for(i of e.options){var n=Ln(i);if(u$(n,t)){i.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function sg(e){var t=new MutationObserver(()=>{"__value"in e&&Ja(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ru(()=>{t.disconnect()})}function yc(e,t,r=t){var i=new WeakSet,n=!0;Vw(e,"change",a=>{var s=a?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(s),Ln);else{var u=e.querySelector(s)??e.querySelector("option:not([disabled])");o=u&&Ln(u)}r(o),e.__value=o,ue!==null&&i.add(ue)}),Nu(()=>{var a=t();if(e===document.activeElement){var s=ue;if(i.has(s))return}if(Ja(e,a,n),n&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=Ln(o),r(a))}e.__value=a,n=!1}),sg(e)}function Ln(e){return"__value"in e?e.__value:e.value}const gn=Symbol("class"),_n=Symbol("style"),og=Symbol("is custom element"),ug=Symbol("is html"),q$=ku?"input":"INPUT",V$=ku?"option":"OPTION",F$=ku?"select":"SELECT";function H$(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function qs(e,t,r,i){var n=lg(e);n[t]!==(n[t]=r)&&(t==="loading"&&(e[uw]=r),r==null?e.removeAttribute(t):typeof r!="string"&&dg(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function j$(e,t,r,i,n=!1,a=!1){var s=lg(e),o=s[og],u=!s[ug],d=t||{},c=e.nodeName===V$;for(var f in t)f in r||(r[f]=null);r.class?r.class=ag(r.class):r[gn]&&(r.class=null),r[_n]&&(r.style??(r.style=null));var h=dg(e);if(e.nodeName===q$&&"type"in r&&("value"in r||"__value"in r)){var m=r.type;(m!==d.type||m===void 0&&e.hasAttribute("type"))&&(d.type=m,qs(e,"type",m))}for(const k in r){let T=r[k];if(c&&k==="value"&&T==null){e.value=e.__value="",d[k]=T;continue}if(k==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";Rr(e,_,T,i,t==null?void 0:t[gn],r[gn]),d[k]=T,d[gn]=r[gn];continue}if(k==="style"){G$(e,T,t==null?void 0:t[_n],r[_n]),d[k]=T,d[_n]=r[_n];continue}var b=d[k];if(!(T===b&&!(T===void 0&&e.hasAttribute(k)))){d[k]=T;var $=k[0]+k[1];if($!=="$$")if($==="on"){const C={},z="$$"+k;let x=k.slice(2);var v=$$(x);if(v$(x)&&(x=x.slice(0,-7),C.capture=!0),!v&&b){if(T!=null)continue;e.removeEventListener(x,d[z],C),d[z]=null}if(v)Ga(x,e,T),tg([x]);else if(T!=null){let N=function(P){d[k].call(this,P)};d[z]=T$(x,e,N,C)}}else if(k==="style")qs(e,k,T);else if(k==="autofocus")Gw(e,!!T);else if(!o&&(k==="__value"||k==="value"&&T!=null))e.value=e.__value=T;else if(k==="selected"&&c)H$(e,T);else{var w=k;u||(w=S$(w));var I=w==="defaultValue"||w==="defaultChecked";if(T==null&&!o&&!I)if(s[k]=null,w==="value"||w==="checked"){let C=e;const z=t===void 0;if(w==="value"){let x=C.defaultValue;C.removeAttribute(w),C.defaultValue=x,C.value=C.__value=z?x:null}else{let x=C.defaultChecked;C.removeAttribute(w),C.defaultChecked=x,C.checked=z?x:!1}}else e.removeAttribute(k);else I||h.includes(w)&&(o||typeof T!="string")?(e[w]=T,w in s&&(s[w]=qe)):typeof T!="function"&&qs(e,w,T)}}}return d}function bc(e,t,r=[],i=[],n=[],a,s=!1,o=!1){Sm(n,r,i,u=>{var d=void 0,c={},f=e.nodeName===F$,h=!1;if(Gm(()=>{var _=t(...u.map(q)),b=j$(e,d,_,a,s,o);h&&f&&"value"in _&&Ja(e,_.value);for(let v of Object.getOwnPropertySymbols(c))_[v]||tt(c[v]);for(let v of Object.getOwnPropertySymbols(_)){var $=_[v];v.description===Ow&&(!d||$!==d[v])&&(c[v]&&tt(c[v]),c[v]=_t(()=>P$(e,()=>$))),b[v]=$}d=b}),f){var m=e;Nu(()=>{Ja(m,d.value,!0),sg(m)})}h=!0})}function lg(e){return e[Ma]??(e[Ma]={[og]:e.nodeName.includes("-"),[ug]:e.namespaceURI===ym})}var vc=new Map;function dg(e){var t=e.getAttribute("is")||e.nodeName,r=vc.get(t);if(r)return r;vc.set(t,r=[]);for(var i,n=e,a=Element.prototype;a!==n;){i=pm(n);for(var s in i)i[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&r.push(s);n=xu(n)}return r}function K$(e=!1){const t=Ue,r=t.l.u;if(!r)return;let i=()=>Ai(t.s);if(e){let n=0,a={};const s=ji(()=>{let o=!1;const u=t.s;for(const d in u)u[d]!==a[d]&&(a[d]=u[d],o=!0);return o&&n++,n});i=()=>q(s)}r.b.length&&p$(()=>{wc(t,i),qo(r.b)}),eu(()=>{const n=Yi(()=>r.m.map(aw));return()=>{for(const a of n)typeof a=="function"&&a()}}),r.a.length&&eu(()=>{wc(t,i),qo(r.a)})}function wc(e,t){if(e.l.s)for(const r of e.l.s)q(r);t()}const Z$={get(e,t){if(!e.exclude.includes(t))return q(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var i=ye;try{Nt(e.parent_effect),e.special[t]=Jr({get[t](){return e.props[t]}},t,_m)}finally{Nt(i)}}return e.special[t](r),uc(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),uc(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function bi(e,t){return new Proxy({props:e,exclude:t,special:{},version:Lr(0),parent_effect:ye},Z$)}const X$={get(e,t){let r=e.props.length;for(;r--;){let i=e.props[r];if(hn(i)&&(i=i()),typeof i=="object"&&i!==null&&t in i)return i[t]}},set(e,t,r){let i=e.props.length;for(;i--;){let n=e.props[i];hn(n)&&(n=n());const a=Pr(n,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let i=e.props[r];if(hn(i)&&(i=i()),typeof i=="object"&&i!==null&&t in i){const n=Pr(i,t);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,t){if(t===wr||t===mm)return!1;for(let r of e.props)if(hn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(hn(r)&&(r=r()),!!r){for(const i in r)t.includes(i)||t.push(i);for(const i of Object.getOwnPropertySymbols(r))t.includes(i)||t.push(i)}return t}};function ra(...e){return new Proxy({props:e},X$)}function Jr(e,t,r,i){var k;var n=!rn||(r&Iw)!==0,a=(r&Tw)!==0,s=(r&Ew)!==0,o=i,u=!0,d=void 0,c=()=>s&&n?(d??(d=ji(i)),q(d)):(u&&(u=!1,o=s?Yi(i):i),o);let f;if(a){var h=wr in e||mm in e;f=((k=Pr(e,t))==null?void 0:k.set)??(h&&t in e?T=>e[t]=T:void 0)}var m,_=!1;a?[m,_]=Ww(()=>e[t]):m=e[t],m===void 0&&i!==void 0&&(m=c(),f&&(n&&gw(),f(m)));var b;if(n?b=()=>{var T=e[t];return T===void 0?c():(u=!0,T)}:b=()=>{var T=e[t];return T!==void 0&&(o=void 0),T===void 0?o:T},n&&(r&_m)===0)return b;if(f){var $=e.$$legacy;return(function(T,C){return arguments.length>0?((!n||!C||$||_)&&f(C?b():T),T):b()})}var v=!1,w=((r&kw)!==0?ji:Cu)(()=>(v=!1,b()));a&&q(w);var I=ye;return(function(T,C){if(arguments.length>0){const z=C?q(w):n&&a?ii(T):T;return ae(w,z),v=!0,o!==void 0&&(o=z),T}return Sr&&v||(I.f&St)!==0?w.v:q(w)})}function Y$(e){Ue===null&&lw(),rn&&Ue.l!==null?Q$(Ue).m.push(e):eu(()=>{const t=Yi(e);if(typeof t=="function")return t})}function Q$(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const J$="5";var dm;typeof window<"u"&&((dm=window.__svelte??(window.__svelte={})).v??(dm.v=new Set)).add(J$);Pw();/**
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
 */const e1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var t1=z$("<svg><!><!></svg>");function ia(e,t){const r=bi(t,["children","$$slots","$$events","$$legacy"]),i=bi(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Iu(t,!1);let n=Jr(t,"name",8,void 0),a=Jr(t,"color",8,"currentColor"),s=Jr(t,"size",8,24),o=Jr(t,"strokeWidth",8,2),u=Jr(t,"absoluteStrokeWidth",8,!1),d=Jr(t,"iconNode",24,()=>[]);const c=(..._)=>_.filter((b,$,v)=>!!b&&v.indexOf(b)===$).join(" ");K$();var f=t1();bc(f,(_,b)=>({...e1,...i,width:s(),height:s(),stroke:a(),"stroke-width":_,class:b}),[()=>(Ai(u()),Ai(o()),Ai(s()),Yi(()=>u()?Number(o())*24/Number(s()):o())),()=>(Ai(n()),Ai(r),Yi(()=>c("lucide-icon","lucide",n()?`lucide-${n()}`:"",r.class)))]);var h=Ne(f);Va(h,1,d,qa,(_,b)=>{var $=e$(()=>sw(q(b),2));let v=()=>q($)[0],w=()=>q($)[1];var I=sn(),k=an(I);D$(k,v,!0,(T,C)=>{bc(T,()=>({...w()}))}),Qe(_,I)});var m=ft(h);on(m,t,"default",{}),Qe(e,f),Tu()}function r1(e,t){const r=bi(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];ia(e,ra({name:"mic-off"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=sn(),o=an(s);on(o,t,"default",{}),Qe(n,s)},$$slots:{default:!0}}))}function $c(e,t){const r=bi(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];ia(e,ra({name:"mic"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=sn(),o=an(s);on(o,t,"default",{}),Qe(n,s)},$$slots:{default:!0}}))}function i1(e,t){const r=bi(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]];ia(e,ra({name:"sparkles"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=sn(),o=an(s);on(o,t,"default",{}),Qe(n,s)},$$slots:{default:!0}}))}function n1(e,t){const r=bi(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]];ia(e,ra({name:"terminal"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=sn(),o=an(s);on(o,t,"default",{}),Qe(n,s)},$$slots:{default:!0}}))}function a1(e,t){const r=bi(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];ia(e,ra({name:"volume-2"},()=>r,{get iconNode(){return i},children:(n,a)=>{var s=sn(),o=an(s);on(o,t,"default",{}),Qe(n,s)},$$slots:{default:!0}}))}function s1(e){const t=new Int16Array(e.length);for(let r=0;r<e.length;r++){const i=Math.max(-1,Math.min(1,e[r]));t[r]=i<0?i*32768:i*32767}return t}function o1(e){const t=new Uint8Array(e.buffer);let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return btoa(r)}async function u1(e,t=()=>{}){t("capture:start");const r=await navigator.mediaDevices.getUserMedia({audio:{sampleRate:16e3,channelCount:1,echoCancellation:!0,noiseSuppression:!0}});t(`capture:permission-ok tracks=${r.getAudioTracks().length}`);const i=new AudioContext({sampleRate:16e3});await i.resume(),t(`capture:context state=${i.state} rate=${i.sampleRate}`);const n="/jarvis/pcm-worklet.js";await i.audioWorklet.addModule(n),t(`capture:worklet-loaded url=${n}`);const a=i.createMediaStreamSource(r),s=new AudioWorkletNode(i,"pcm-processor"),o=i.createGain();o.gain.value=0;let u=!0;return s.port.onmessage=d=>{u&&(u=!1,t(`capture:first-chunk samples=${d.data.length}`));const c=s1(d.data);e(o1(c))},a.connect(s),s.connect(o),o.connect(i.destination),t("capture:graph-connected"),()=>{try{a.disconnect(),s.disconnect(),o.disconnect(),r.getTracks().forEach(d=>d.stop()),i.close()}catch{}}}function l1(e){const t=atob(e),r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return new Int16Array(r.buffer)}function d1(e){const t=new Float32Array(e.length);for(let r=0;r<e.length;r++)t[r]=e[r]/32768;return t}function c1(){let e=null,t=0,r=!1;function i(){return(!e||e.state==="closed")&&(e=new AudioContext({sampleRate:24e3})),e.state==="suspended"&&e.resume(),e}function n(u){const d=i(),c=l1(u),f=d1(c),h=d.createBuffer(1,f.length,24e3);h.copyToChannel(f,0);const m=d.createBufferSource();m.buffer=h,m.connect(d.destination);const _=d.currentTime;t<_&&(t=_),m.start(t),t+=h.duration,r=!0}function a(){t=0,r=!1,e&&(e.close().catch(()=>{}),e=null)}function s(){return r}function o(){a()}return{play:n,stop:a,close:o,isPlaying:s}}/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Pu=Object.defineProperty,p1=Object.getOwnPropertyDescriptor,f1=Object.getOwnPropertyNames,h1=Object.prototype.hasOwnProperty,m1=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),U=(e,t)=>()=>(e&&(t=e(e=0)),t),un=(e,t)=>{for(var r in t)Pu(e,r,{get:t[r],enumerable:!0})},g1=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of f1(t))!h1.call(e,n)&&n!==r&&Pu(e,n,{get:()=>t[n],enumerable:!(i=p1(t,n))||i.enumerable});return e},Vn=e=>g1(Pu({},"__esModule",{value:!0}),e),yn,Ar,Ri,xc,cg,pg=U(()=>{yn=new Map,Ar=[],Ri=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=yn.get(e);if(i===void 0)yn.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=Ar.indexOf(e);n!==-1&&Ar.splice(n,1);for(let a=0;a<Ar.length;a++)if(yn.get(Ar[a]).priority<=r){Ar.splice(a,0,e);return}Ar.push(e)}return}throw new TypeError("not a valid backend")},xc=async e=>{let t=yn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},cg=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),i=r.length===0?Ar:r,n,a=[],s=new Set;for(let u of i){let d=await xc(u);typeof d=="string"?a.push({name:u,err:d}):(n||(n=d),n===d&&s.add(u))}if(!n)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of a)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[n,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]}}),_1=U(()=>{pg()}),fg,y1=U(()=>{fg="1.27.0"}),Vs,je,hg=U(()=>{y1(),Vs="warning",je={wasm:{},webgl:{},webgpu:{},versions:{common:fg},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Vs=e}},get logLevel(){return Vs}},Object.defineProperty(je,"logLevel",{enumerable:!0})}),xe,b1=U(()=>{hg(),xe=je}),mg,gg,v1=U(()=>{mg=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[3]):(n=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let c=a*n,f=0,h=c,m=c*2,_=-1;s==="RGBA"?(f=0,h=c,m=c*2,_=c*3):s==="RGB"?(f=0,h=c,m=c*2):s==="RBG"&&(f=0,m=c,h=c*2);for(let b=0;b<a;b++)for(let $=0;$<n;$++){let v=(e.data[f++]-d[0])*u[0],w=(e.data[h++]-d[1])*u[1],I=(e.data[m++]-d[2])*u[2],k=_===-1?255:(e.data[_++]-d[3])*u[3];i.fillStyle="rgba("+v+","+w+","+I+","+k+")",i.fillRect($,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},gg=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[1],s=e.dims[3]):(n=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,d,c;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let f=a*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,m=0,_=1,b=2,$=3,v=0,w=f,I=f*2,k=-1;o==="RGBA"?(v=0,w=f,I=f*2,k=f*3):o==="RGB"?(v=0,w=f,I=f*2):o==="RBG"&&(v=0,I=f,w=f*2),i=r.createImageData(n,a);for(let T=0;T<a*n;m+=h,_+=h,b+=h,$+=h,T++)i.data[m]=(e.data[v++]-c[0])*d[0],i.data[_]=(e.data[w++]-c[1])*d[1],i.data[b]=(e.data[I++]-c[2])*d[2],i.data[$]=k===-1?255:(e.data[k++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),$a,_g,yg,bg,vg,wg,w1=U(()=>{Uu(),$a=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},a,s;typeof n.mean=="number"?a=[n.mean,n.mean,n.mean,n.mean]:a=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,h=0,m=1,_=2,b=3,$=0,v=d,w=d*2,I=-1;o==="RGB"&&(f=3,h=0,m=1,_=2,b=-1),u==="RGBA"?I=d*3:u==="RBG"?($=0,w=d,v=d*2):u==="BGR"&&(w=0,v=d,$=d*2);for(let k=0;k<d;k++,h+=f,_+=f,m+=f,b+=f)c[$++]=(e[h]+s[0])/a[0],c[v++]=(e[m]+s[1])/a[1],c[w++]=(e[_]+s[2])/a[2],I!==-1&&b!==-1&&(c[I++]=(e[b]+s[3])/a[3]);return u==="RGBA"?new xt("float32",c,[1,4,r,i]):new xt("float32",c,[1,3,r,i])},_g=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=u();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let h=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=m}else o.tensorFormat="RGBA",o.height=h,o.width=m;f.drawImage(e,0,0),s=f.getImageData(0,0,m,h).data}else throw new Error("Can not access image data")}else if(i){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=c,o.width=f,t!==void 0){let h=u();h.width=f,h.height=c;let m=d(h);if(m!=null)m.putImageData(e,0,0),s=m.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=u();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let h=e.height,m=e.width;return f.drawImage(e,0,0,m,h),s=f.getImageData(0,0,m,h).data,o.height=h,o.width=m,$a(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((c,f)=>{let h=u(),m=d(h);if(!e||!m)return f();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{h.width=_.width,h.height=_.height,m.drawImage(_,0,0,h.width,h.height);let b=m.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,c($a(b.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return $a(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},yg=(e,t)=>{let{width:r,height:i,download:n,dispose:a}=t,s=[1,i,r,4];return new xt({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:a})},bg=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new xt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:a})},vg=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new xt({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:a})},wg=(e,t,r)=>new xt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),ei,Rn,Fs,$g,$1=U(()=>{ei=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Rn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Fs=!1,$g=()=>{if(!Fs){Fs=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(ei.set("int64",BigInt64Array),Rn.set(BigInt64Array,"int64")),t&&(ei.set("uint64",BigUint64Array),Rn.set(BigUint64Array,"uint64")),i?(ei.set("float16",r),Rn.set(r,"float16")):ei.set("float16",Uint16Array)}}}),xg,Sg,x1=U(()=>{Uu(),xg=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Sg=(e,t)=>{switch(e.location){case"cpu":return new xt(e.type,e.data,t);case"cpu-pinned":return new xt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new xt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new xt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new xt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),xt,Uu=U(()=>{v1(),w1(),$1(),x1(),xt=class{constructor(e,t,r){$g();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=ei.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=ei.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")i="string",s=e;else if(u==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let u=Rn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");n=o,this.cpuData=s,this.dataLocation="cpu"}let a=xg(n);if(this.cpuData&&a!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=a}static async fromImage(e,t){return _g(e,t)}static fromTexture(e,t){return yg(e,t)}static fromGpuBuffer(e,t){return bg(e,t)}static fromMLTensor(e,t){return vg(e,t)}static fromPinnedBuffer(e,t,r){return wg(e,t,r)}toDataURL(e){return mg(this,e)}toImageData(e){return gg(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Sg(this,e)}}}),et,kg=U(()=>{Uu(),et=xt}),es,Hs,lr,Xt,hi,mi,Ig=U(()=>{hg(),es=(e,t)=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||console.timeStamp(`${e}::ORT::${t}`)},Hs=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),es("CPU",s);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},lr=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||Hs("BEGIN",e)},Xt=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||Hs("END",e)},hi=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||console.time(`ORT::${e}`)},mi=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||console.timeEnd(`ORT::${e}`)}}),Tg,S1=U(()=>{pg(),kg(),Ig(),Tg=class Eg{constructor(t){this.handler=t}async run(t,r,i){lr(),hi("InferenceSession.run");let n={},a={};if(typeof t!="object"||t===null||t instanceof et||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof et)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let h=r[f];(h===null||h instanceof et)&&(d=!0,s=!1,n[f]=h)}if(d){if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)n[d]=null;let o=await this.handler.run(t,n,a),u={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let c=o[d];c instanceof et?u[d]=c:u[d]=new et(c.type,c.data,c.dims)}return mi("InferenceSession.run"),Xt(),u}async release(){return this.handler.dispose()}static async create(t,r,i,n){lr(),hi("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,h=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(h=t.byteLength-f,typeof i=="number"){if(h=i,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||f+h>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(c,f,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await cg(s),d=await o.createInferenceSessionHandler(a,u);return mi("InferenceSession.create"),Xt(),new Eg(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Di,k1=U(()=>{S1(),Di=Tg}),I1=U(()=>{}),T1=U(()=>{}),E1=U(()=>{}),C1=U(()=>{}),z1={};un(z1,{InferenceSession:()=>Di,TRACE:()=>es,TRACE_EVENT_BEGIN:()=>hi,TRACE_EVENT_END:()=>mi,TRACE_FUNC_BEGIN:()=>lr,TRACE_FUNC_END:()=>Xt,Tensor:()=>et,env:()=>xe,registerBackend:()=>Ri});var Mt=U(()=>{_1(),b1(),k1(),kg(),I1(),T1(),Ig(),E1(),C1()}),Lu=U(()=>{}),Cg={};un(Cg,{default:()=>zg});var js,Ks,zg,A1=U(()=>{var e;Ny(),xi(),Wu(),js="ort-wasm-proxy-worker",Ks=((e=globalThis.self)==null?void 0:e.name)===js,Ks&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":Gu(i.wasm).then(()=>{al(i).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:a}=i;sl(a,n).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:n}=i,a=os(n);postMessage({type:r,out:a});break}case"create":{let{model:n,options:a}=i;ol(n,a).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":ul(i),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:a,inputs:s,outputIndices:o,options:u}=i;ll(n,a,s,o,new Array(o.length).fill(null),u).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},cl([...s,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":dl(i),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),zg=Ks?null:t=>new Worker(t??bt,{type:"module",name:js})}),Ag={};un(Ag,{default:()=>Og});async function Sc(e={}){var ec,tc;var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&((ec=self.name)==null?void 0:ec.startsWith("em-pthread"));t.mountExternalData=(l,p)=>{l.startsWith("./")&&(l=l.substring(2)),(t.Xc||(t.Xc=new Map)).set(l,p)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=l=>async(...p)=>{var y;try{if(t.Yc)throw Error("Session already started");let g=t.Yc={Kd:p[0],errors:[]},S=await l(...p);if(t.Yc!==g)throw Error("Session mismatch");(y=t.dd)==null||y.flush();let E=g.errors;if(0<E.length){let A=await Promise.all(E);if(A=A.filter(M=>M),0<A.length)throw Error(A.join(`
`))}return S}finally{t.Yc=null}};t.jsepInit=(l,p)=>{if(l==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=p;let y=t.dd;t.jsepRegisterBuffer=(g,S,E,A)=>y.registerBuffer(g,S,E,A),t.jsepGetBuffer=g=>y.getBuffer(g),t.jsepCreateDownloader=(g,S,E)=>y.createDownloader(g,S,E),t.jsepOnCreateSession=g=>{y.onCreateSession(g)},t.jsepOnReleaseSession=g=>{y.onReleaseSession(g)},t.jsepOnRunStart=g=>y.onRunStart(g),t.Id=(g,S)=>{y.upload(g,S)}}else if(l==="webnn"){let y=p[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=g=>y.onRunStart(g),t.webnnOnRunEnd=y.onRunEnd.bind(y),t.webnnOnReleaseSession=g=>{y.onReleaseSession(g)},t.webnnCreateMLTensorDownloader=(g,S)=>y.createMLTensorDownloader(g,S),t.webnnRegisterMLTensor=(g,S,E,A)=>y.registerMLTensor(g,S,E,A),t.webnnCreateMLContext=g=>y.createMLContext(g),t.webnnRegisterMLConstant=(g,S,E,A,M,V)=>y.registerMLConstant(g,S,E,A,M,t.Xc,V),t.webnnRegisterGraphInput=y.registerGraphInput.bind(y),t.webnnIsGraphInput=y.isGraphInput.bind(y),t.webnnRegisterGraphOutput=y.registerGraphOutput.bind(y),t.webnnIsGraphOutput=y.isGraphOutput.bind(y),t.webnnCreateTemporaryTensor=y.createTemporaryTensor.bind(y),t.webnnIsGraphInputOutputTypeSupported=y.isGraphInputOutputTypeSupported.bind(y)}};let s=()=>{let l=p=>(...y)=>{let g=tr;return y=p(...y),tr!=g?new Promise((S,E)=>{Ss={resolve:S,reject:E}}):y};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=l(t[p])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,u,d=(l,p)=>{throw p},c=import.meta.url,f="";if(r||i){try{f=new URL(".",c).href}catch{}i&&(u=l=>{var p=new XMLHttpRequest;return p.open("GET",l,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),o=async l=>{if(z(l))return new Promise((y,g)=>{var S=new XMLHttpRequest;S.open("GET",l,!0),S.responseType="arraybuffer",S.onload=()=>{S.status==200||S.status==0&&S.response?y(S.response):g(S.status)},S.onerror=g,S.send(null)});var p=await fetch(l,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var h,m,_,b,$,v,w=console.log.bind(console),I=console.error.bind(console),k=w,T=I,C=!1,z=l=>l.startsWith("file://");function x(){Jt.buffer!=P.buffer&&H()}if(n){let l=function(p){try{var y=p.data,g=y.Sc;if(g==="load"){let S=[];self.onmessage=E=>S.push(E),v=()=>{postMessage({Sc:"loaded"});for(let E of S)l(E);self.onmessage=l};for(let E of y.xd)t[E]&&!t[E].proxy||(t[E]=(...A)=>{postMessage({Sc:"callHandler",wd:E,args:A})},E=="print"&&(k=t[E]),E=="printErr"&&(T=t[E]));Jt=y.Od,H(),m=y.Pd,dt(),_a()}else if(g==="run"){(function(S){var E=(x(),Y)[S+52>>>2>>>0];S=(x(),Y)[S+56>>>2>>>0],dd(E,E-S),he(E)})(y.Rc),Cs(y.Rc,0,0,1,0,0),aa(),ws(y.Rc),N||(nd(),N=!0);try{hs(y.Md,y.bd)}catch(S){if(S!="unwind")throw S}}else y.target!=="setimmediate"&&(g==="checkMailbox"?N&&da():g&&(T(`worker: received unknown command ${g}`),T(y)))}catch(S){throw ad(),S}};var N=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=l}var P,F,j,Z,B,Y,K,J,be,L,de,W=!1;function H(){var l=Jt.buffer;t.HEAP8=P=new Int8Array(l),j=new Int16Array(l),t.HEAPU8=F=new Uint8Array(l),Z=new Uint16Array(l),t.HEAP32=B=new Int32Array(l),t.HEAPU32=Y=new Uint32Array(l),K=new Float32Array(l),J=new Float64Array(l),be=new BigInt64Array(l),L=new BigUint64Array(l)}function Q(){W=!0,n?v():fr.sb()}function G(l){throw T(l="Aborted("+l+")"),C=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),$==null||$(l),l}function Se(){return{a:{ma:fv,gb:pv,g:Ee,J:cr,f:jy,o:Ky,h:Zy,ha:Xy,b:Yy,T:Qy,Ha:_l,n:Jy,$:wl,Xa:$l,Da:xl,Fa:Sl,Ya:kl,Va:Il,Oa:Tl,Ua:El,ka:Cl,Ea:zl,Ba:Al,Wa:Ol,Ca:Bl,bb:eb,ea:tb,wa:rb,ua:nb,da:sb,O:ob,H:ub,va:lb,_:gb,xa:_b,Ra:yb,za:vb,Ia:wb,sa:$b,fa:xb,Qa:ws,_a:Sb,R:Eb,r:Bb,c:bs,hb:Rb,y:Nb,M:Mb,D:Db,l:Pb,s:Wl,ib:Ub,I:Lb,S:Wb,j:Gb,u:qb,q:Vb,k:Fb,La:Hb,Ma:jb,Na:Kb,Ja:Fl,Ka:Hl,ta:jl,db:Xb,ab:Qb,v:Jb,aa:ev,ga:tv,$a:Yb,W:rv,Za:iv,Aa:nv,F:Zb,U:av,la:ma,ya:ov,fb:sv,eb:uv,Sa:Yl,Ta:Ql,Ga:qr,V:Jl,ja:ed,Pa:td,ia:rd,kb:Zv,na:Vv,lb:Kv,oa:qv,G:Rv,e:_v,t:mv,w:hv,B:Tv,mb:Lv,K:Av,x:vv,pa:Wv,Y:Fv,ba:Uv,nb:Pv,ob:Dv,P:Ev,qa:Mv,pb:Nv,N:Ov,Z:Gv,d:gv,A:bv,m:yv,jb:Xv,p:$v,z:xv,C:wv,E:Sv,L:Cv,qb:Bv,Q:Hv,ca:zv,X:jv,rb:Iv,ra:kv,i:dv,a:Jt,cb:st}}}async function dt(){function l(g,S){var E=fr=g.exports;g={};for(let[A,M]of Object.entries(E))typeof M=="function"?(E=kb(M),g[A]=E):g[A]=M;return fr=g,fr=(function(){var A=fr,M=X=>ce=>X(ce)>>>0,V=X=>()=>X()>>>0;return(A=Object.assign({},A)).tb=M(A.tb),A.Xb=V(A.Xb),A.Zb=M(A.Zb),A.lc=M(A.lc),A.mc=V(A.mc),A.qc=M(A.qc),A})(),ln.push(fr._b),id=(g=fr).tb,nd=g.ub,t._OrtInit=g.vb,t._OrtGetLastError=g.wb,t._OrtCreateSessionOptions=g.xb,t._OrtAppendExecutionProvider=g.yb,t._OrtAddFreeDimensionOverride=g.zb,t._OrtAddSessionConfigEntry=g.Ab,t._OrtReleaseSessionOptions=g.Bb,t._OrtCreateSession=g.Cb,t._OrtReleaseSession=g.Db,t._OrtGetInputOutputCount=g.Eb,t._OrtGetInputOutputMetadata=g.Fb,t._OrtFree=g.Gb,t._OrtCreateTensor=g.Hb,t._OrtGetTensorData=g.Ib,t._OrtReleaseTensor=g.Jb,t._OrtCreateRunOptions=g.Kb,t._OrtAddRunConfigEntry=g.Lb,t._OrtReleaseRunOptions=g.Mb,t._OrtCreateBinding=g.Nb,t._OrtBindInput=g.Ob,t._OrtBindOutput=g.Pb,t._OrtClearBoundOutputs=g.Qb,t._OrtReleaseBinding=g.Rb,t._OrtRunWithBinding=g.Sb,t._OrtRun=g.Tb,t._OrtEndProfiling=g.Ub,t._JsepOutput=g.Vb,t._JsepGetNodeName=g.Wb,ga=g.Xb,rr=t._free=g.Yb,pn=t._malloc=g.Zb,Cs=g.ac,ad=g.bc,sd=g.cc,od=g.dc,zs=g.ec,ud=g.fc,ld=g.gc,_e=g.hc,fn=g.ic,dd=g.jc,he=g.kc,As=g.lc,ge=g.mc,cd=g.nc,Os=g.oc,pd=g.pc,fd=g.qc,hd=g.rc,Bs=g.sc,md=g.tc,gd=g.uc,_d=g.vc,yd=g.wc,bd=g.xc,vd=g.yc,wd=g.zc,$d=g.Ac,xd=g.Bc,Sd=g.Cc,kd=g.Dc,Id=g.Ec,Td=g.Fc,Ed=g.Gc,Cd=g.Hc,zd=g.Ic,Ad=g.Jc,Od=g.Kc,Bd=g.Lc,Rd=g.Mc,Nd=g.Nc,Md=g.Pc,Dd=g.Qc,Pd=g.$c,Ud=g.ad,Ld=g.fd,Wd=g.jd,Gd=g.kd,qd=g.ld,Vd=g.md,Fd=g.nd,Hd=g.od,jd=g.pd,Kd=g.qd,Zd=g.vd,Xd=g.Td,Yd=g.Ud,Qd=g.Vd,Jd=g.Wd,m=S,fr}var p,y=Se();return t.instantiateWasm?new Promise(g=>{t.instantiateWasm(y,(S,E)=>{g(l(S,E))})}):n?l(new WebAssembly.Instance(m,Se()),m):(de??(de=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",f):f+"ort-wasm-simd-threaded.jsep.wasm":new URL("/jarvis/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href),p=await(async function(g){var S=de;if(!h&&!z(S))try{var E=fetch(S,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,g)}catch(A){T(`wasm streaming compile failed: ${A}`),T("falling back to ArrayBuffer instantiation")}return(async function(A,M){try{var V=await(async function(X){if(!h)try{var ce=await o(X);return new Uint8Array(ce)}catch{}if(X==de&&h)X=new Uint8Array(h);else{if(!u)throw"both async and sync fetching of the wasm failed";X=u(X)}return X})(A);return await WebAssembly.instantiate(V,M)}catch(X){T(`failed to asynchronously prepare wasm: ${X}`),G(X)}})(S,g)})(y),l(p.instance,p.module))}class Pe{constructor(p){ct(this,"name","ExitStatus");this.message=`Program terminated with exit(${p})`,this.status=p}}var rt=l=>{l.terminate(),l.onmessage=()=>{}},Xe=[],it=0,Ye=null,It=l=>{Qt.length==0&&(sa(),dn(Qt[0]));var p=Qt.pop();if(!p)return 6;Vr.push(p),dr[l.Rc]=p,p.Rc=l.Rc;var y={Sc:"run",Md:l.Ld,bd:l.bd,Rc:l.Rc};return p.postMessage(y,l.rd),0},ze=0,se=(l,p,...y)=>{var g,S=16*y.length,E=ge(),A=As(S),M=A>>>3;for(g of y)typeof g=="bigint"?((x(),be)[M++>>>0]=1n,(x(),be)[M++>>>0]=g):((x(),be)[M++>>>0]=0n,(x(),J)[M++>>>0]=g);return l=sd(l,0,S,A,p),he(E),l};function st(l){if(n)return se(0,1,l);if(_=l,!(0<ze)){for(var p of Vr)rt(p);for(p of Qt)rt(p);Qt=[],Vr=[],dr={},C=!0}d(0,new Pe(l))}function ki(l){if(n)return se(1,0,l);qr(l)}var qr=l=>{if(_=l,n)throw ki(l),"unwind";st(l)},Qt=[],Vr=[],ln=[],dr={},na=l=>{var p=l.Rc;delete dr[p],Qt.push(l),Vr.splice(Vr.indexOf(l),1),l.Rc=0,od(p)};function aa(){ln.forEach(l=>l())}var dn=l=>new Promise(p=>{l.onmessage=S=>{var E=S.data;if(S=E.Sc,E.Zc&&E.Zc!=ga()){var A=dr[E.Zc];A?A.postMessage(E,E.rd):T(`Internal error! Worker sent a message "${S}" to target pthread ${E.Zc}, but that thread no longer exists!`)}else S==="checkMailbox"?da():S==="spawnThread"?It(E):S==="cleanupThread"?la(()=>{na(dr[E.Nd])}):S==="loaded"?(l.loaded=!0,p(l)):E.target==="setimmediate"?l.postMessage(E):S==="uncaughtException"?l.onerror(E.error):S==="callHandler"?t[E.wd](...E.args):S&&T(`worker sent an unknown command ${S}`)},l.onerror=S=>{throw T(`worker sent an error! ${S.filename}:${S.lineno}: ${S.message}`),S};var y,g=[];for(y of[])t.propertyIsEnumerable(y)&&g.push(y);l.postMessage({Sc:"load",xd:g,Od:Jt,Pd:m})});function sa(){var l=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Qt.push(l)}var Jt,hs=(l,p)=>{ze=0,l=Bs(l,p),0<ze?_=l:zs(l)},re=[],fe=0;function Ee(l){var p=new ms(l>>>=0);return(x(),P)[p.Tc+12>>>0]==0&&(oa(p,!0),fe--),ml(p,!1),re.push(p),fd(l)}var yt=0,cr=()=>{_e(0,0);var l=re.pop();cd(l.cd),yt=0};function oa(l,p){p=p?1:0,(x(),P)[l.Tc+12>>>0]=p}function ml(l,p){p=p?1:0,(x(),P)[l.Tc+13>>>0]=p}class ms{constructor(p){this.cd=p,this.Tc=p-24}}var gs=l=>{var p=yt;if(!p)return fn(0),0;var y=new ms(p);(x(),Y)[y.Tc+16>>>2>>>0]=p;var g=(x(),Y)[y.Tc+4>>>2>>>0];if(!g)return fn(0),p;for(var S of l){if(S===0||S===g)break;if(pd(S,g,y.Tc+16))return fn(S),p}return fn(g),p};function jy(){return gs([])}function Ky(l){return gs([l>>>0])}function Zy(l,p,y,g){return gs([l>>>0,p>>>0,y>>>0,g>>>0])}var Xy=()=>{var l=re.pop();l||G("no exception to throw");var p=l.cd;throw(x(),P)[l.Tc+13>>>0]==0&&(re.push(l),ml(l,!0),oa(l,!1),fe++),Os(p),yt=p};function Yy(l,p,y){var g=new ms(l>>>=0);throw p>>>=0,y>>>=0,(x(),Y)[g.Tc+16>>>2>>>0]=0,(x(),Y)[g.Tc+4>>>2>>>0]=p,(x(),Y)[g.Tc+8>>>2>>>0]=y,Os(l),fe++,yt=l}var Qy=()=>fe;function gl(l,p,y,g){return n?se(2,1,l,p,y,g):_l(l,p,y,g)}function _l(l,p,y,g){if(l>>>=0,p>>>=0,y>>>=0,g>>>=0,!globalThis.SharedArrayBuffer)return 6;var S=[];return n&&S.length===0?gl(l,p,y,g):(l={Ld:y,Rc:l,bd:g,rd:S},n?(l.Sc="spawnThread",postMessage(l,S),0):It(l))}function Jy(l){throw yt||(yt=l>>>0),yt}var yl=globalThis.TextDecoder&&new TextDecoder,bl=(l,p,y,g)=>{if(y=p+y,g)return y;for(;l[p]&&!(p>=y);)++p;return p},vl=(l,p=0,y,g)=>{if(16<(y=bl(l,p>>>=0,y,g))-p&&l.buffer&&yl)return yl.decode(l.buffer instanceof ArrayBuffer?l.subarray(p,y):l.slice(p,y));for(g="";p<y;){var S=l[p++];if(128&S){var E=63&l[p++];if((224&S)==192)g+=String.fromCharCode((31&S)<<6|E);else{var A=63&l[p++];65536>(S=(240&S)==224?(15&S)<<12|E<<6|A:(7&S)<<18|E<<12|A<<6|63&l[p++])?g+=String.fromCharCode(S):(S-=65536,g+=String.fromCharCode(55296|S>>10,56320|1023&S))}}else g+=String.fromCharCode(S)}return g},Ge=(l,p,y)=>(l>>>=0)?vl((x(),F),l,p,y):"";function wl(l,p,y){return n?se(3,1,l,p,y):0}function $l(l,p){if(n)return se(4,1,l,p)}function xl(l,p){if(n)return se(5,1,l,p)}function Sl(l,p,y){if(n)return se(6,1,l,p,y)}function kl(l,p,y){return n?se(7,1,l,p,y):0}function Il(l,p){if(n)return se(8,1,l,p)}function Tl(l,p,y){if(n)return se(9,1,l,p,y)}function El(l,p,y,g){if(n)return se(10,1,l,p,y,g)}function Cl(l,p,y,g){if(n)return se(11,1,l,p,y,g)}function zl(l,p,y,g){if(n)return se(12,1,l,p,y,g)}function Al(l){if(n)return se(13,1,l)}function Ol(l,p){if(n)return se(14,1,l,p)}function Bl(l,p,y){if(n)return se(15,1,l,p,y)}var eb=()=>G(""),er=l=>{l>>>=0;for(var p="";;){var y=(x(),F)[l++>>>0];if(!y)return p;p+=String.fromCharCode(y)}},_s={},ys={},Ii=class extends Error{constructor(l){super(l),this.name="BindingError"}};function pr(l,p,y={}){return(function(g,S,E={}){var A=S.name;if(!g)throw new Ii(`type "${A}" must have a positive integer typeid pointer`);if(ys.hasOwnProperty(g)){if(E.yd)return;throw new Ii(`Cannot register type '${A}' twice`)}ys[g]=S,_s.hasOwnProperty(g)&&(S=_s[g],delete _s[g],S.forEach(M=>M()))})(l,p,y)}var Rl=(l,p,y)=>{switch(p){case 1:return y?g=>(x(),P)[g>>>0]:g=>(x(),F)[g>>>0];case 2:return y?g=>(x(),j)[g>>>1>>>0]:g=>(x(),Z)[g>>>1>>>0];case 4:return y?g=>(x(),B)[g>>>2>>>0]:g=>(x(),Y)[g>>>2>>>0];case 8:return y?g=>(x(),be)[g>>>3>>>0]:g=>(x(),L)[g>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${l}`)}};function tb(l,p,y,g,S){l>>>=0,y>>>=0,p=er(p>>>0);let E=A=>A;if(g=g===0n){let A=8*y;E=M=>BigInt.asUintN(A,M),S=E(S)}pr(l,{name:p,Oc:E,Vc:(A,M)=>(typeof M=="number"&&(M=BigInt(M)),M),Uc:Rl(p,y,!g),Wc:null})}function rb(l,p,y,g){pr(l>>>=0,{name:p=er(p>>>0),Oc:function(S){return!!S},Vc:function(S,E){return E?y:g},Uc:function(S){return this.Oc((x(),F)[S>>>0])},Wc:null})}var Nl=[],Fr=[0,1,,1,null,1,!0,1,!1,1];function bs(l){9<(l>>>=0)&&--Fr[l+1]===0&&(Fr[l]=void 0,Nl.push(l))}var Tt=l=>{if(!l)throw new Ii(`Cannot use deleted val. handle = ${l}`);return Fr[l]},Dt=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=Nl.pop()||Fr.length;return Fr[p]=l,Fr[p+1]=1,p}};function vs(l){return this.Oc((x(),Y)[l>>>2>>>0])}var ib={name:"emscripten::val",Oc:l=>{var p=Tt(l);return bs(l),p},Vc:(l,p)=>Dt(p),Uc:vs,Wc:null};function nb(l){return pr(l>>>0,ib)}var ab=(l,p)=>{switch(p){case 4:return function(y){return this.Oc((x(),K)[y>>>2>>>0])};case 8:return function(y){return this.Oc((x(),J)[y>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${l}`)}};function sb(l,p,y){y>>>=0,pr(l>>>=0,{name:p=er(p>>>0),Oc:g=>g,Vc:(g,S)=>S,Uc:ab(p,y),Wc:null})}function ob(l,p,y,g,S){l>>>=0,y>>>=0,p=er(p>>>0);let E=M=>M;if(g===0){var A=32-8*y;E=M=>M<<A>>>A,S=E(S)}pr(l,{name:p,Oc:E,Vc:(M,V)=>V,Uc:Rl(p,y,g!==0),Wc:null})}function ub(l,p,y){function g(E){var A=(x(),Y)[E>>>2>>>0];return E=(x(),Y)[E+4>>>2>>>0],new S((x(),P).buffer,E,A)}var S=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];pr(l>>>=0,{name:y=er(y>>>0),Oc:g,Uc:g},{yd:!0})}var Tr=(l,p,y)=>{var g=(x(),F);if(p>>>=0,0<y){var S=p;y=p+y-1;for(var E=0;E<l.length;++E){var A=l.codePointAt(E);if(127>=A){if(p>=y)break;g[p++>>>0]=A}else if(2047>=A){if(p+1>=y)break;g[p++>>>0]=192|A>>6,g[p++>>>0]=128|63&A}else if(65535>=A){if(p+2>=y)break;g[p++>>>0]=224|A>>12,g[p++>>>0]=128|A>>6&63,g[p++>>>0]=128|63&A}else{if(p+3>=y)break;g[p++>>>0]=240|A>>18,g[p++>>>0]=128|A>>12&63,g[p++>>>0]=128|A>>6&63,g[p++>>>0]=128|63&A,E++}}g[p>>>0]=0,l=p-S}else l=0;return l},ua=l=>{for(var p=0,y=0;y<l.length;++y){var g=l.charCodeAt(y);127>=g?p++:2047>=g?p+=2:55296<=g&&57343>=g?(p+=4,++y):p+=3}return p};function lb(l,p){pr(l>>>=0,{name:p=er(p>>>0),Oc(y){var g=(x(),Y)[y>>>2>>>0];return g=Ge(y+4,g,!0),rr(y),g},Vc(y,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var S=typeof g=="string";if(!(S||ArrayBuffer.isView(g)&&g.BYTES_PER_ELEMENT==1))throw new Ii("Cannot pass non-string to std::string");var E=S?ua(g):g.length,A=pn(4+E+1),M=A+4;return(x(),Y)[A>>>2>>>0]=E,S?Tr(g,M,E+1):(x(),F).set(g,M>>>0),y!==null&&y.push(rr,A),A},Uc:vs,Wc(y){rr(y)}})}var Ml=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,db=(l,p,y)=>{if(l>>>=1,16<(p=bl((x(),Z),l,p/2,y))-l&&Ml)return Ml.decode((x(),Z).slice(l,p));for(y="";l<p;++l){var g=(x(),Z)[l>>>0];y+=String.fromCharCode(g)}return y},cb=(l,p,y)=>{if(y??(y=2147483647),2>y)return 0;var g=p;y=(y-=2)<2*l.length?y/2:l.length;for(var S=0;S<y;++S){var E=l.charCodeAt(S);(x(),j)[p>>>1>>>0]=E,p+=2}return(x(),j)[p>>>1>>>0]=0,p-g},pb=l=>2*l.length,fb=(l,p,y)=>{var g="";l>>>=2;for(var S=0;!(S>=p/4);S++){var E=(x(),Y)[l+S>>>0];if(!E&&!y)break;g+=String.fromCodePoint(E)}return g},hb=(l,p,y)=>{if(p>>>=0,y??(y=2147483647),4>y)return 0;var g=p;y=g+y-4;for(var S=0;S<l.length;++S){var E=l.codePointAt(S);if(65535<E&&S++,(x(),B)[p>>>2>>>0]=E,(p+=4)+4>y)break}return(x(),B)[p>>>2>>>0]=0,p-g},mb=l=>{for(var p=0,y=0;y<l.length;++y)65535<l.codePointAt(y)&&y++,p+=4;return p};function gb(l,p,y){if(l>>>=0,p>>>=0,y=er(y>>>=0),p===2)var g=db,S=cb,E=pb;else g=fb,S=hb,E=mb;pr(l,{name:y,Oc:A=>{var M=(x(),Y)[A>>>2>>>0];return M=g(A+4,M*p,!0),rr(A),M},Vc:(A,M)=>{if(typeof M!="string")throw new Ii(`Cannot pass non-string to C++ string type ${y}`);var V=E(M),X=pn(4+V+p);return(x(),Y)[X>>>2>>>0]=V/p,S(M,X+4,V+p),A!==null&&A.push(rr,X),X},Uc:vs,Wc(A){rr(A)}})}function _b(l,p){pr(l>>>=0,{zd:!0,name:p=er(p>>>0),Oc:()=>{},Vc:()=>{}})}function yb(l){Cs(l>>>0,!i,1,!r,131072,!1),aa()}var la=l=>{if(!C)try{if(l(),!(0<ze))try{n?ga()&&zs(_):qr(_)}catch(p){p instanceof Pe||p=="unwind"||d(0,p)}}catch(p){p instanceof Pe||p=="unwind"||d(0,p)}},bb=!Atomics.waitAsync||((tc=globalThis.navigator)==null?void 0:tc.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ws(l){l>>>=0,bb||(Atomics.waitAsync((x(),B),l>>>2,l).value.then(da),l+=128,Atomics.store((x(),B),l>>>2,1))}var da=()=>la(()=>{var l=ga();l&&(ws(l),ld())});function vb(l,p){(l>>>=0)==p>>>0?setTimeout(da):n?postMessage({Zc:l,Sc:"checkMailbox"}):(l=dr[l])&&l.postMessage({Sc:"checkMailbox"})}var $s=[];function wb(l,p,y,g,S){for(p>>>=0,S>>>=0,$s.length=0,y=S>>>3,g=S+g>>>3;y<g;){var E;E=(x(),be)[y++>>>0]?(x(),be)[y++>>>0]:(x(),J)[y++>>>0],$s.push(E)}return(p?Rs[p]:cv[l])(...$s)}var $b=()=>{ze=0};function xb(l){l>>>=0,n?postMessage({Sc:"cleanupThread",Nd:l}):na(dr[l])}function Sb(l){}var ca=l=>{try{l()}catch(p){G(p)}};function kb(l){var p=(...y)=>{pa.push(l);try{return l(...y)}finally{C||(pa.pop(),tr&&Er===1&&pa.length===0&&(Er=0,ze+=1,ca(Yd),typeof Fibers<"u"&&Fibers.Zd()))}};return Ul.set(l,p),p}var Er=0,tr=null,Dl=0,pa=[],xs=new Map,Pl=new Map,Ul=new Map,Ib=0,Ss=null,Tb=[],Ll=l=>(function(p){if(!C){if(Er===0){var y=!1,g=!1;p((S=0)=>{if(!C&&(Dl=S,y=!0,g)){Er=2,ca(()=>Qd(tr)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),S=!1;try{var E=(function(){var V=(x(),B)[tr+8>>>2>>>0];return V=Pl.get(V),V=Ul.get(V),--ze,V()})()}catch(V){E=V,S=!0}var A=!1;if(!tr){var M=Ss;M&&(Ss=null,(S?M.reject:M.resolve)(E),A=!0)}if(S&&!A)throw E}}),g=!0,y||(Er=1,tr=(function(){var S=pn(65548),E=S+12;if((x(),Y)[S>>>2>>>0]=E,(x(),Y)[S+4>>>2>>>0]=E+65536,E=pa[0],!xs.has(E)){var A=Ib++;xs.set(E,A),Pl.set(A,E)}return E=xs.get(E),(x(),B)[S+8>>>2>>>0]=E,S})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),ca(()=>Xd(tr)))}else Er===2?(Er=0,ca(Jd),rr(tr),tr=null,Tb.forEach(la)):G(`invalid state: ${Er}`);return Dl}})(p=>{l().then(p)});function Eb(l){return l>>>=0,Ll(async()=>{var p=await Tt(l);return Dt(p)})}var ks=[],Cb=l=>{var p=ks.length;return ks.push(l),p},zb=(l,p)=>{for(var y=Array(l),g=0;g<l;++g){var S=g,E=(x(),Y)[p+4*g>>>2>>>0],A=ys[E];if(A===void 0)throw l=`parameter ${g}`,E=id(E),p=er(E),rr(E),new Ii(`${l} has unknown type ${p}`);y[S]=A}return y},Ab=(l,p,y)=>{var g=[];return l=l(g,y),g.length&&((x(),Y)[p>>>2>>>0]=Dt(g)),l},Ob={},fa=l=>{var p=Ob[l];return p===void 0?er(l):p};function Bb(l,p,y){var[g,...S]=zb(l,p>>>0);p=g.Vc.bind(g);var E=S.map(V=>V.Uc.bind(V));l--;var A={toValue:Tt};switch(l=E.map((V,X)=>{var ce=`argFromPtr${X}`;return A[ce]=V,`${ce}(args${X?"+"+8*X:""})`}),y){case 0:var M="toValue(handle)";break;case 2:M="new (toValue(handle))";break;case 3:M="";break;case 1:A.getStringOrSymbol=fa,M="toValue(handle)[getStringOrSymbol(methodName)]"}return M+=`(${l})`,g.zd||(A.toReturnWire=p,A.emval_returnValue=Ab,M=`return emval_returnValue(toReturnWire, destructorsRef, ${M})`),M=`return function (handle, methodName, destructorsRef, args) {
  ${M}
  }`,y=new Function(Object.keys(A),M)(...Object.values(A)),M=`methodCaller<(${S.map(V=>V.name)}) => ${g.name}>`,Cb(Object.defineProperty(y,"name",{value:M}))}function Rb(l,p){return p>>>=0,(l=Tt(l>>>0))==Tt(p)}function Nb(l){return(l>>>=0)?(l=fa(l),Dt(globalThis[l])):Dt(globalThis)}function Mb(l){return l=fa(l>>>0),Dt(t[l])}function Db(l,p){return p>>>=0,l=Tt(l>>>0),p=Tt(p),Dt(l[p])}function Pb(l){9<(l>>>=0)&&(Fr[l+1]+=1)}function Wl(l,p,y,g,S){return ks[l>>>0](p>>>0,y>>>0,g>>>0,S>>>0)}function Ub(l,p,y,g,S){return Wl(l>>>0,p>>>0,y>>>0,g>>>0,S>>>0)}function Lb(){return Dt([])}function Wb(l){l=Tt(l>>>0);for(var p=Array(l.length),y=0;y<l.length;y++)p[y]=l[y];return Dt(p)}function Gb(l){return Dt(fa(l>>>0))}function qb(){return Dt({})}function Vb(l){for(var p=Tt(l>>>=0);p.length;){var y=p.pop();p.pop()(y)}bs(l)}function Fb(l,p,y){p>>>=0,y>>>=0,l=Tt(l>>>0),p=Tt(p),y=Tt(y),l[p]=y}function Hb(l,p){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),p>>>=0,l=new Date(1e3*l),(x(),B)[p>>>2>>>0]=l.getUTCSeconds(),(x(),B)[p+4>>>2>>>0]=l.getUTCMinutes(),(x(),B)[p+8>>>2>>>0]=l.getUTCHours(),(x(),B)[p+12>>>2>>>0]=l.getUTCDate(),(x(),B)[p+16>>>2>>>0]=l.getUTCMonth(),(x(),B)[p+20>>>2>>>0]=l.getUTCFullYear()-1900,(x(),B)[p+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(x(),B)[p+28>>>2>>>0]=l}var Gl=l=>l%4==0&&(l%100!=0||l%400==0),ql=[0,31,60,91,121,152,182,213,244,274,305,335],Vl=[0,31,59,90,120,151,181,212,243,273,304,334];function jb(l,p){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),p>>>=0,l=new Date(1e3*l),(x(),B)[p>>>2>>>0]=l.getSeconds(),(x(),B)[p+4>>>2>>>0]=l.getMinutes(),(x(),B)[p+8>>>2>>>0]=l.getHours(),(x(),B)[p+12>>>2>>>0]=l.getDate(),(x(),B)[p+16>>>2>>>0]=l.getMonth(),(x(),B)[p+20>>>2>>>0]=l.getFullYear()-1900,(x(),B)[p+24>>>2>>>0]=l.getDay();var y=(Gl(l.getFullYear())?ql:Vl)[l.getMonth()]+l.getDate()-1|0;(x(),B)[p+28>>>2>>>0]=y,(x(),B)[p+36>>>2>>>0]=-60*l.getTimezoneOffset(),y=new Date(l.getFullYear(),6,1).getTimezoneOffset();var g=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(y!=g&&l.getTimezoneOffset()==Math.min(g,y)),(x(),B)[p+32>>>2>>>0]=l}function Kb(l){l>>>=0;var p=new Date((x(),B)[l+20>>>2>>>0]+1900,(x(),B)[l+16>>>2>>>0],(x(),B)[l+12>>>2>>>0],(x(),B)[l+8>>>2>>>0],(x(),B)[l+4>>>2>>>0],(x(),B)[l>>>2>>>0],0),y=(x(),B)[l+32>>>2>>>0],g=p.getTimezoneOffset(),S=new Date(p.getFullYear(),6,1).getTimezoneOffset(),E=new Date(p.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(E,S);return 0>y?(x(),B)[l+32>>>2>>>0]=+(S!=E&&A==g):0<y!=(A==g)&&(S=Math.max(E,S),p.setTime(p.getTime()+6e4*((0<y?A:S)-g))),(x(),B)[l+24>>>2>>>0]=p.getDay(),y=(Gl(p.getFullYear())?ql:Vl)[p.getMonth()]+p.getDate()-1|0,(x(),B)[l+28>>>2>>>0]=y,(x(),B)[l>>>2>>>0]=p.getSeconds(),(x(),B)[l+4>>>2>>>0]=p.getMinutes(),(x(),B)[l+8>>>2>>>0]=p.getHours(),(x(),B)[l+12>>>2>>>0]=p.getDate(),(x(),B)[l+16>>>2>>>0]=p.getMonth(),(x(),B)[l+20>>>2>>>0]=p.getYear(),l=p.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function Fl(l,p,y,g,S,E,A){return n?se(16,1,l,p,y,g,S,E,A):-52}function Hl(l,p,y,g,S,E){if(n)return se(17,1,l,p,y,g,S,E)}var cn={},Zb=()=>performance.timeOrigin+performance.now();function jl(l,p){if(n)return se(18,1,l,p);if(cn[l]&&(clearTimeout(cn[l].id),delete cn[l]),!p)return 0;var y=setTimeout(()=>{delete cn[l],la(()=>ud(l,performance.timeOrigin+performance.now()))},p);return cn[l]={id:y,Yd:p},0}function Xb(l,p,y,g){l>>>=0,p>>>=0,y>>>=0,g>>>=0;var S=new Date().getFullYear(),E=new Date(S,0,1).getTimezoneOffset();S=new Date(S,6,1).getTimezoneOffset();var A=Math.max(E,S);(x(),Y)[l>>>2>>>0]=60*A,(x(),B)[p>>>2>>>0]=+(E!=S),l=(p=M=>{var V=Math.abs(M);return`UTC${0<=M?"-":"+"}${String(Math.floor(V/60)).padStart(2,"0")}${String(V%60).padStart(2,"0")}`})(E),p=p(S),S<E?(Tr(l,y,17),Tr(p,g,17)):(Tr(l,g,17),Tr(p,y,17))}var Yb=()=>Date.now();function Qb(l,p,y){return y>>>=0,0<=l&&3>=l?(l===0?l=Date.now():l=performance.timeOrigin+performance.now(),l=Math.round(1e6*l),(x(),be)[y>>>3>>>0]=BigInt(l),0):28}var Is=[],Kl=(l,p)=>{Is.length=0;for(var y;y=(x(),F)[l++>>>0];){var g=y!=105;p+=(g&=y!=112)&&p%8?4:0,Is.push(y==112?(x(),Y)[p>>>2>>>0]:y==106?(x(),be)[p>>>3>>>0]:y==105?(x(),B)[p>>>2>>>0]:(x(),J)[p>>>3>>>0]),p+=g?8:4}return Is};function Jb(l,p,y){return l>>>=0,p=Kl(p>>>0,y>>>0),Rs[l](...p)}function ev(l,p,y){return l>>>=0,p=Kl(p>>>0,y>>>0),Rs[l](...p)}var tv=()=>{};function rv(l,p){return T(Ge(l>>>0,p>>>0))}var iv=()=>{throw ze+=1,"unwind"};function nv(){return 4294901760}var av=()=>navigator.hardwareConcurrency,Hr={},ha=l=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(l))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(l))?2147483648|+p[1]:0},Zl=l=>{for(var p of l)(l=ha(p))&&(Hr[l]=p)};function sv(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),Zl(l),Hr.gd=ha(l[3]),Hr.Jd=l,Hr.gd}function ma(l){if(!(l=Hr[l>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(l))l=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(l))l=p[1];else{if(!(p=/^(.+?)@/.exec(l)))return 0;l=p[1]}rr(ma.hd??0),p=ua(l)+1;var y=pn(p);return y&&Tr(l,y,p),ma.hd=y,ma.hd}function ov(l){l>>>=0;var p=(x(),F).length;if(l<=p||4294901760<l)return!1;for(var y=1;4>=y;y*=2){var g=p*(1+.2/y);g=Math.min(g,l+100663296);e:{g=(Math.min(4294901760,65536*Math.ceil(Math.max(l,g)/65536))-Jt.buffer.byteLength+65535)/65536|0;try{Jt.grow(g),H();var S=1;break e}catch{}S=void 0}if(S)return!0}return!1}function uv(l,p,y){if(l>>>=0,p>>>=0,Hr.gd==l)var g=Hr.Jd;else(g=Error().stack.toString().split(`
`))[0]=="Error"&&g.shift(),Zl(g);for(var S=3;g[S]&&ha(g[S])!=l;)++S;for(l=0;l<y&&g[l+S];++l)(x(),B)[p+4*l>>>2>>>0]=ha(g[l+S]);return l}var Ts,Es={},Xl=()=>{var g;if(!Ts){var l,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((g=globalThis.navigator)==null?void 0:g.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in Es)Es[l]===void 0?delete p[l]:p[l]=Es[l];var y=[];for(l in p)y.push(`${l}=${p[l]}`);Ts=y}return Ts};function Yl(l,p){if(n)return se(19,1,l,p);l>>>=0,p>>>=0;var y,g=0,S=0;for(y of Xl()){var E=p+g;(x(),Y)[l+S>>>2>>>0]=E,g+=Tr(y,E,1/0)+1,S+=4}return 0}function Ql(l,p){if(n)return se(20,1,l,p);l>>>=0,p>>>=0;var y=Xl();for(var g of((x(),Y)[l>>>2>>>0]=y.length,l=0,y))l+=ua(g)+1;return(x(),Y)[p>>>2>>>0]=l,0}function Jl(l){return n?se(21,1,l):52}function ed(l,p,y,g){return n?se(22,1,l,p,y,g):52}function td(l,p,y,g){return n?se(23,1,l,p,y,g):70}var lv=[null,[],[]];function rd(l,p,y,g){if(n)return se(24,1,l,p,y,g);p>>>=0,y>>>=0,g>>>=0;for(var S=0,E=0;E<y;E++){var A=(x(),Y)[p>>>2>>>0],M=(x(),Y)[p+4>>>2>>>0];p+=8;for(var V=0;V<M;V++){var X=l,ce=(x(),F)[A+V>>>0],$e=lv[X];ce===0||ce===10?((X===1?k:T)(vl($e)),$e.length=0):$e.push(ce)}S+=M}return(x(),Y)[g>>>2>>>0]=S,0}function dv(l){return l>>>0}n||(function(){for(var l=t.numThreads-1;l--;)sa();Xe.push(async()=>{var p=(async function(){if(!n)return Promise.all(Qt.map(dn))})();it++,await p,--it==0&&Ye&&(p=Ye,Ye=null,p())})})(),n||(Jt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),H()),t.wasmBinary&&(h=t.wasmBinary),t.stackSave=()=>ge(),t.stackRestore=l=>he(l),t.stackAlloc=l=>As(l),t.setValue=function(l,p,y="i8"){switch(y.endsWith("*")&&(y="*"),y){case"i1":case"i8":(x(),P)[l>>>0]=p;break;case"i16":(x(),j)[l>>>1>>>0]=p;break;case"i32":(x(),B)[l>>>2>>>0]=p;break;case"i64":(x(),be)[l>>>3>>>0]=BigInt(p);break;case"float":(x(),K)[l>>>2>>>0]=p;break;case"double":(x(),J)[l>>>3>>>0]=p;break;case"*":(x(),Y)[l>>>2>>>0]=p;break;default:G(`invalid type for setValue: ${y}`)}},t.getValue=function(l,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return(x(),P)[l>>>0];case"i16":return(x(),j)[l>>>1>>>0];case"i32":return(x(),B)[l>>>2>>>0];case"i64":return(x(),be)[l>>>3>>>0];case"float":return(x(),K)[l>>>2>>>0];case"double":return(x(),J)[l>>>3>>>0];case"*":return(x(),Y)[l>>>2>>>0];default:G(`invalid type for getValue: ${p}`)}},t.UTF8ToString=Ge,t.stringToUTF8=Tr,t.lengthBytesUTF8=ua;var id,nd,ga,rr,pn,Cs,ad,sd,od,zs,ud,ld,_e,fn,dd,he,As,ge,cd,Os,pd,fd,hd,Bs,md,gd,_d,yd,bd,vd,wd,$d,xd,Sd,kd,Id,Td,Ed,Cd,zd,Ad,Od,Bd,Rd,Nd,Md,Dd,Pd,Ud,Ld,Wd,Gd,qd,Vd,Fd,Hd,jd,Kd,Zd,Xd,Yd,Qd,Jd,fr,cv=[st,ki,gl,wl,$l,xl,Sl,kl,Il,Tl,El,Cl,zl,Al,Ol,Bl,Fl,Hl,jl,Yl,Ql,Jl,ed,td,rd],Rs={1003524:(l,p,y,g,S)=>{if(t===void 0||!t.Xc)return 1;if((l=Ge(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=t.Xc.get(l)))return 2;if(p=Number(p>>>0),y=Number(y>>>0),g=Number(g>>>0),p+y>l.byteLength)return 3;try{let E=l.subarray(p,p+y);switch(S){case 0:(x(),F).set(E,g>>>0);break;case 1:t.Qd?t.Qd(g,E):t.Id(g,E);break;default:return 4}return 0}catch{return 4}},1004348:(l,p,y)=>{t.td(l,(x(),F).subarray(p>>>0,p+y>>>0))},1004412:()=>t.Sd(),1004454:l=>{t.sd(l)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:l=>t.Ad(l),1004609:l=>t.Ed(l),1004641:(l,p,y)=>{t.ed(Number(l),Number(p),Number(y),!0)},1004704:(l,p,y)=>{t.ed(Number(l),Number(p),Number(y))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:l=>{t.$b("Abs",l,void 0)},1004869:l=>{t.$b("Neg",l,void 0)},1004920:l=>{t.$b("Floor",l,void 0)},1004973:l=>{t.$b("Ceil",l,void 0)},1005025:l=>{t.$b("Reciprocal",l,void 0)},1005083:l=>{t.$b("Sqrt",l,void 0)},1005135:l=>{t.$b("Exp",l,void 0)},1005186:l=>{t.$b("Erf",l,void 0)},1005237:l=>{t.$b("Sigmoid",l,void 0)},1005292:(l,p,y)=>{t.$b("HardSigmoid",l,{alpha:p,beta:y})},1005371:l=>{t.$b("Log",l,void 0)},1005422:l=>{t.$b("Sin",l,void 0)},1005473:l=>{t.$b("Cos",l,void 0)},1005524:l=>{t.$b("Tan",l,void 0)},1005575:l=>{t.$b("Asin",l,void 0)},1005627:l=>{t.$b("Acos",l,void 0)},1005679:l=>{t.$b("Atan",l,void 0)},1005731:l=>{t.$b("Sinh",l,void 0)},1005783:l=>{t.$b("Cosh",l,void 0)},1005835:l=>{t.$b("Asinh",l,void 0)},1005888:l=>{t.$b("Acosh",l,void 0)},1005941:l=>{t.$b("Atanh",l,void 0)},1005994:l=>{t.$b("Tanh",l,void 0)},1006046:l=>{t.$b("Not",l,void 0)},1006097:(l,p,y)=>{t.$b("Clip",l,{min:p,max:y})},1006166:l=>{t.$b("Clip",l,void 0)},1006218:(l,p)=>{t.$b("Elu",l,{alpha:p})},1006276:l=>{t.$b("Gelu",l,void 0)},1006328:l=>{t.$b("Relu",l,void 0)},1006380:(l,p)=>{t.$b("LeakyRelu",l,{alpha:p})},1006444:(l,p)=>{t.$b("ThresholdedRelu",l,{alpha:p})},1006514:(l,p)=>{t.$b("Cast",l,{to:p})},1006572:l=>{t.$b("Add",l,void 0)},1006623:l=>{t.$b("Sub",l,void 0)},1006674:l=>{t.$b("Mul",l,void 0)},1006725:l=>{t.$b("Div",l,void 0)},1006776:l=>{t.$b("Pow",l,void 0)},1006827:l=>{t.$b("Equal",l,void 0)},1006880:l=>{t.$b("Greater",l,void 0)},1006935:l=>{t.$b("GreaterOrEqual",l,void 0)},1006997:l=>{t.$b("Less",l,void 0)},1007049:l=>{t.$b("LessOrEqual",l,void 0)},1007108:(l,p,y,g,S)=>{t.$b("ReduceMean",l,{keepDims:!!p,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007283:(l,p,y,g,S)=>{t.$b("ReduceMax",l,{keepDims:!!p,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007457:(l,p,y,g,S)=>{t.$b("ReduceMin",l,{keepDims:!!p,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007631:(l,p,y,g,S)=>{t.$b("ReduceProd",l,{keepDims:!!p,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007806:(l,p,y,g,S)=>{t.$b("ReduceSum",l,{keepDims:!!p,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007980:(l,p,y,g,S)=>{t.$b("ReduceL1",l,{keepDims:!!p,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008153:(l,p,y,g,S)=>{t.$b("ReduceL2",l,{keepDims:!!p,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008326:(l,p,y,g,S)=>{t.$b("ReduceLogSum",l,{keepDims:!!p,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008503:(l,p,y,g,S)=>{t.$b("ReduceSumSquare",l,{keepDims:!!p,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008683:(l,p,y,g,S)=>{t.$b("ReduceLogSumExp",l,{keepDims:!!p,noopWithEmptyAxes:!!y,axes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008863:l=>{t.$b("Where",l,void 0)},1008916:(l,p,y)=>{t.$b("Transpose",l,{perm:p?Array.from((x(),B).subarray(Number(p)>>>0,Number(y)>>>0)):[]})},1009040:(l,p,y,g)=>{t.$b("DepthToSpace",l,{blocksize:p,mode:Ge(y),format:g?"NHWC":"NCHW"})},1009173:(l,p,y,g)=>{t.$b("DepthToSpace",l,{blocksize:p,mode:Ge(y),format:g?"NHWC":"NCHW"})},1009306:(l,p,y,g,S,E,A,M,V,X,ce,$e,Ae,Re,Cr)=>{t.$b("ConvTranspose",l,{format:V?"NHWC":"NCHW",autoPad:p,dilations:[y],group:g,kernelShape:[S],pads:[E,A],strides:[M],wIsConst:()=>!!(x(),P)[X>>>0],outputPadding:ce?Array.from((x(),B).subarray(Number(ce)>>>0,Number($e)>>>0)):[],outputShape:Ae?Array.from((x(),B).subarray(Number(Ae)>>>0,Number(Re)>>>0)):[],activation:Ge(Cr)})},1009739:(l,p,y,g,S,E,A,M,V,X,ce,$e,Ae,Re)=>{t.$b("ConvTranspose",l,{format:M?"NHWC":"NCHW",autoPad:p,dilations:Array.from((x(),B).subarray(Number(y)>>>0,(Number(y)>>>0)+2>>>0)),group:g,kernelShape:Array.from((x(),B).subarray(Number(S)>>>0,(Number(S)>>>0)+2>>>0)),pads:Array.from((x(),B).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((x(),B).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(x(),P)[V>>>0],outputPadding:X?Array.from((x(),B).subarray(Number(X)>>>0,Number(ce)>>>0)):[],outputShape:$e?Array.from((x(),B).subarray(Number($e)>>>0,Number(Ae)>>>0)):[],activation:Ge(Re)})},1010400:(l,p,y,g,S,E,A,M,V,X,ce,$e,Ae,Re,Cr)=>{t.$b("ConvTranspose",l,{format:V?"NHWC":"NCHW",autoPad:p,dilations:[y],group:g,kernelShape:[S],pads:[E,A],strides:[M],wIsConst:()=>!!(x(),P)[X>>>0],outputPadding:ce?Array.from((x(),B).subarray(Number(ce)>>>0,Number($e)>>>0)):[],outputShape:Ae?Array.from((x(),B).subarray(Number(Ae)>>>0,Number(Re)>>>0)):[],activation:Ge(Cr)})},1010833:(l,p,y,g,S,E,A,M,V,X,ce,$e,Ae,Re)=>{t.$b("ConvTranspose",l,{format:M?"NHWC":"NCHW",autoPad:p,dilations:Array.from((x(),B).subarray(Number(y)>>>0,(Number(y)>>>0)+2>>>0)),group:g,kernelShape:Array.from((x(),B).subarray(Number(S)>>>0,(Number(S)>>>0)+2>>>0)),pads:Array.from((x(),B).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((x(),B).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(x(),P)[V>>>0],outputPadding:X?Array.from((x(),B).subarray(Number(X)>>>0,Number(ce)>>>0)):[],outputShape:$e?Array.from((x(),B).subarray(Number($e)>>>0,Number(Ae)>>>0)):[],activation:Ge(Re)})},1011494:(l,p)=>{t.$b("GlobalAveragePool",l,{format:p?"NHWC":"NCHW"})},1011585:(l,p,y,g,S,E,A,M,V,X,ce,$e,Ae,Re)=>{t.$b("AveragePool",l,{format:Re?"NHWC":"NCHW",auto_pad:p,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),B).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from((x(),B).subarray(Number(M)>>>0,Number(V)>>>0)):[],pads:X?Array.from((x(),B).subarray(Number(X)>>>0,Number(ce)>>>0)):[],strides:$e?Array.from((x(),B).subarray(Number($e)>>>0,Number(Ae)>>>0)):[]})},1012064:(l,p)=>{t.$b("GlobalAveragePool",l,{format:p?"NHWC":"NCHW"})},1012155:(l,p,y,g,S,E,A,M,V,X,ce,$e,Ae,Re)=>{t.$b("AveragePool",l,{format:Re?"NHWC":"NCHW",auto_pad:p,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),B).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from((x(),B).subarray(Number(M)>>>0,Number(V)>>>0)):[],pads:X?Array.from((x(),B).subarray(Number(X)>>>0,Number(ce)>>>0)):[],strides:$e?Array.from((x(),B).subarray(Number($e)>>>0,Number(Ae)>>>0)):[]})},1012634:(l,p)=>{t.$b("GlobalMaxPool",l,{format:p?"NHWC":"NCHW"})},1012721:(l,p,y,g,S,E,A,M,V,X,ce,$e,Ae,Re)=>{t.$b("MaxPool",l,{format:Re?"NHWC":"NCHW",auto_pad:p,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),B).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from((x(),B).subarray(Number(M)>>>0,Number(V)>>>0)):[],pads:X?Array.from((x(),B).subarray(Number(X)>>>0,Number(ce)>>>0)):[],strides:$e?Array.from((x(),B).subarray(Number($e)>>>0,Number(Ae)>>>0)):[]})},1013196:(l,p)=>{t.$b("GlobalMaxPool",l,{format:p?"NHWC":"NCHW"})},1013283:(l,p,y,g,S,E,A,M,V,X,ce,$e,Ae,Re)=>{t.$b("MaxPool",l,{format:Re?"NHWC":"NCHW",auto_pad:p,ceil_mode:y,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),B).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from((x(),B).subarray(Number(M)>>>0,Number(V)>>>0)):[],pads:X?Array.from((x(),B).subarray(Number(X)>>>0,Number(ce)>>>0)):[],strides:$e?Array.from((x(),B).subarray(Number($e)>>>0,Number(Ae)>>>0)):[]})},1013758:(l,p,y,g,S)=>{t.$b("Gemm",l,{alpha:p,beta:y,transA:g,transB:S})},1013862:l=>{t.$b("MatMul",l,void 0)},1013916:(l,p,y,g)=>{t.$b("ArgMax",l,{keepDims:!!p,selectLastIndex:!!y,axis:g})},1014024:(l,p,y,g)=>{t.$b("ArgMin",l,{keepDims:!!p,selectLastIndex:!!y,axis:g})},1014132:(l,p)=>{t.$b("Softmax",l,{axis:p})},1014195:(l,p)=>{t.$b("Concat",l,{axis:p})},1014255:(l,p,y,g,S)=>{t.$b("Split",l,{axis:p,numOutputs:y,splitSizes:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1014411:l=>{t.$b("Expand",l,void 0)},1014465:(l,p)=>{t.$b("Gather",l,{axis:Number(p)})},1014536:(l,p)=>{t.$b("GatherElements",l,{axis:Number(p)})},1014615:(l,p)=>{t.$b("GatherND",l,{batch_dims:Number(p)})},1014694:(l,p,y,g,S,E,A,M,V,X,ce)=>{t.$b("Resize",l,{antialias:p,axes:y?Array.from((x(),B).subarray(Number(y)>>>0,Number(g)>>>0)):[],coordinateTransformMode:Ge(S),cubicCoeffA:E,excludeOutside:A,extrapolationValue:M,keepAspectRatioPolicy:Ge(V),mode:Ge(X),nearestMode:Ge(ce)})},1015056:(l,p,y,g,S,E,A)=>{t.$b("Slice",l,{starts:p?Array.from((x(),B).subarray(Number(p)>>>0,Number(y)>>>0)):[],ends:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[],axes:E?Array.from((x(),B).subarray(Number(E)>>>0,Number(A)>>>0)):[]})},1015320:l=>{t.$b("Tile",l,void 0)},1015372:(l,p,y)=>{t.$b("InstanceNormalization",l,{epsilon:p,format:y?"NHWC":"NCHW"})},1015486:(l,p,y)=>{t.$b("InstanceNormalization",l,{epsilon:p,format:y?"NHWC":"NCHW"})},1015600:l=>{t.$b("Range",l,void 0)},1015653:(l,p)=>{t.$b("Einsum",l,{equation:Ge(p)})},1015734:(l,p,y,g,S)=>{t.$b("Pad",l,{mode:p,value:y,pads:g?Array.from((x(),B).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1015877:(l,p,y,g,S,E)=>{t.$b("BatchNormalization",l,{epsilon:p,momentum:y,spatial:!!S,trainingMode:!!g,format:E?"NHWC":"NCHW"})},1016046:(l,p,y,g,S,E)=>{t.$b("BatchNormalization",l,{epsilon:p,momentum:y,spatial:!!S,trainingMode:!!g,format:E?"NHWC":"NCHW"})},1016215:(l,p,y)=>{t.$b("CumSum",l,{exclusive:Number(p),reverse:Number(y)})},1016312:(l,p,y)=>{t.$b("DequantizeLinear",l,{axis:p,blockSize:y})},1016402:(l,p,y,g,S)=>{t.$b("GridSample",l,{align_corners:p,mode:Ge(y),padding_mode:Ge(g),format:S?"NHWC":"NCHW"})},1016572:(l,p,y,g,S)=>{t.$b("GridSample",l,{align_corners:p,mode:Ge(y),padding_mode:Ge(g),format:S?"NHWC":"NCHW"})},1016742:(l,p)=>{t.$b("ScatterND",l,{reduction:Ge(p)})},1016827:(l,p,y,g,S,E,A,M,V)=>{t.$b("Attention",l,{numHeads:p,isUnidirectional:y,maskFilterValue:g,scale:S,doRotary:E,qkvHiddenSizes:A?Array.from((x(),B).subarray(Number(M)>>>0,Number(M)+A>>>0)):[],pastPresentShareBuffer:!!V})},1017099:l=>{t.$b("BiasAdd",l,void 0)},1017154:l=>{t.$b("BiasSplitGelu",l,void 0)},1017215:l=>{t.$b("FastGelu",l,void 0)},1017271:(l,p,y,g,S,E,A,M,V,X,ce,$e,Ae,Re,Cr,Ns)=>{t.$b("Conv",l,{format:$e?"NHWC":"NCHW",auto_pad:p,dilations:y?Array.from((x(),B).subarray(Number(y)>>>0,Number(g)>>>0)):[],group:S,kernel_shape:E?Array.from((x(),B).subarray(Number(E)>>>0,Number(A)>>>0)):[],pads:M?Array.from((x(),B).subarray(Number(M)>>>0,Number(V)>>>0)):[],strides:X?Array.from((x(),B).subarray(Number(X)>>>0,Number(ce)>>>0)):[],w_is_const:()=>!!(x(),P)[Number(Ae)>>>0],activation:Ge(Re),activation_params:Cr?Array.from((x(),K).subarray(Number(Cr)>>>0,Number(Ns)>>>0)):[]})},1017855:l=>{t.$b("Gelu",l,void 0)},1017907:(l,p,y,g,S,E,A,M,V)=>{t.$b("GroupQueryAttention",l,{numHeads:p,kvNumHeads:y,scale:g,softcap:S,doRotary:E,rotaryInterleaved:A,smoothSoftmax:M,localWindowSize:V})},1018124:(l,p,y,g)=>{t.$b("LayerNormalization",l,{axis:p,epsilon:y,simplified:!!g})},1018235:(l,p,y,g)=>{t.$b("LayerNormalization",l,{axis:p,epsilon:y,simplified:!!g})},1018346:(l,p,y,g,S,E)=>{t.$b("MatMulNBits",l,{k:p,n:y,accuracyLevel:g,bits:S,blockSize:E})},1018473:(l,p,y,g,S,E)=>{t.$b("MultiHeadAttention",l,{numHeads:p,isUnidirectional:y,maskFilterValue:g,scale:S,doRotary:E})},1018632:(l,p)=>{t.$b("QuickGelu",l,{alpha:p})},1018696:(l,p,y,g,S)=>{t.$b("RotaryEmbedding",l,{interleaved:!!p,numHeads:y,rotaryEmbeddingDim:g,scale:S})},1018835:(l,p,y)=>{t.$b("SkipLayerNormalization",l,{epsilon:p,simplified:!!y})},1018937:(l,p,y)=>{t.$b("SkipLayerNormalization",l,{epsilon:p,simplified:!!y})},1019039:(l,p,y,g)=>{t.$b("GatherBlockQuantized",l,{gatherAxis:p,quantizeAxis:y,blockSize:g})},1019160:l=>{t.Fd(l)},1019194:(l,p)=>t.Hd(Number(l),Number(p),t.Yc.Kd,t.Yc.errors)};function pv(l,p,y){return Ll(async()=>{await t.Dd(Number(l),Number(p),Number(y))})}function fv(){return typeof wasmOffsetConverter<"u"}function hv(l,p,y,g){var S=ge();try{return $d(l,p,y,g)}catch(E){if(he(S),E!==E+0)throw E;_e(1,0)}}function mv(l,p,y){var g=ge();try{return yd(l,p,y)}catch(S){if(he(g),S!==S+0)throw S;_e(1,0)}}function gv(l){var p=ge();try{md(l)}catch(y){if(he(p),y!==y+0)throw y;_e(1,0)}}function _v(l,p){var y=ge();try{return Bs(l,p)}catch(g){if(he(y),g!==g+0)throw g;_e(1,0)}}function yv(l,p,y){var g=ge();try{hd(l,p,y)}catch(S){if(he(g),S!==S+0)throw S;_e(1,0)}}function bv(l,p){var y=ge();try{xd(l,p)}catch(g){if(he(y),g!==g+0)throw g;_e(1,0)}}function vv(l,p,y,g,S,E,A){var M=ge();try{return vd(l,p,y,g,S,E,A)}catch(V){if(he(M),V!==V+0)throw V;_e(1,0)}}function wv(l,p,y,g,S,E){var A=ge();try{gd(l,p,y,g,S,E)}catch(M){if(he(A),M!==M+0)throw M;_e(1,0)}}function $v(l,p,y,g){var S=ge();try{wd(l,p,y,g)}catch(E){if(he(S),E!==E+0)throw E;_e(1,0)}}function xv(l,p,y,g,S){var E=ge();try{_d(l,p,y,g,S)}catch(A){if(he(E),A!==A+0)throw A;_e(1,0)}}function Sv(l,p,y,g,S,E,A){var M=ge();try{kd(l,p,y,g,S,E,A)}catch(V){if(he(M),V!==V+0)throw V;_e(1,0)}}function kv(l,p,y,g,S,E,A){var M=ge();try{Id(l,p,y,g,S,E,A)}catch(V){if(he(M),V!==V+0)throw V;_e(1,0)}}function Iv(l,p,y,g,S,E,A,M){var V=ge();try{zd(l,p,y,g,S,E,A,M)}catch(X){if(he(V),X!==X+0)throw X;_e(1,0)}}function Tv(l,p,y,g,S){var E=ge();try{return Sd(l,p,y,g,S)}catch(A){if(he(E),A!==A+0)throw A;_e(1,0)}}function Ev(l,p,y){var g=ge();try{return Ad(l,p,y)}catch(S){if(he(g),S!==S+0)throw S;_e(1,0)}}function Cv(l,p,y,g,S,E,A,M){var V=ge();try{Od(l,p,y,g,S,E,A,M)}catch(X){if(he(V),X!==X+0)throw X;_e(1,0)}}function zv(l,p,y,g,S,E,A,M,V,X,ce,$e){var Ae=ge();try{Td(l,p,y,g,S,E,A,M,V,X,ce,$e)}catch(Re){if(he(Ae),Re!==Re+0)throw Re;_e(1,0)}}function Av(l,p,y,g,S,E){var A=ge();try{return Ed(l,p,y,g,S,E)}catch(M){if(he(A),M!==M+0)throw M;_e(1,0)}}function Ov(l,p,y){var g=ge();try{return Bd(l,p,y)}catch(S){if(he(g),S!==S+0)throw S;return _e(1,0),0n}}function Bv(l,p,y,g,S,E,A,M,V){var X=ge();try{bd(l,p,y,g,S,E,A,M,V)}catch(ce){if(he(X),ce!==ce+0)throw ce;_e(1,0)}}function Rv(l){var p=ge();try{return Rd(l)}catch(y){if(he(p),y!==y+0)throw y;_e(1,0)}}function Nv(l,p){var y=ge();try{return Zd(l,p)}catch(g){if(he(y),g!==g+0)throw g;return _e(1,0),0n}}function Mv(l){var p=ge();try{return Nd(l)}catch(y){if(he(p),y!==y+0)throw y;return _e(1,0),0n}}function Dv(l,p,y,g){var S=ge();try{return Wd(l,p,y,g)}catch(E){if(he(S),E!==E+0)throw E;_e(1,0)}}function Pv(l,p,y,g,S){var E=ge();try{return Gd(l,p,y,g,S)}catch(A){if(he(E),A!==A+0)throw A;_e(1,0)}}function Uv(l,p,y,g,S,E){var A=ge();try{return qd(l,p,y,g,S,E)}catch(M){if(he(A),M!==M+0)throw M;_e(1,0)}}function Lv(l,p,y,g,S,E){var A=ge();try{return Vd(l,p,y,g,S,E)}catch(M){if(he(A),M!==M+0)throw M;_e(1,0)}}function Wv(l,p,y,g,S,E,A,M){var V=ge();try{return Cd(l,p,y,g,S,E,A,M)}catch(X){if(he(V),X!==X+0)throw X;_e(1,0)}}function Gv(l,p,y,g,S){var E=ge();try{return Fd(l,p,y,g,S)}catch(A){if(he(E),A!==A+0)throw A;return _e(1,0),0n}}function qv(l,p,y,g){var S=ge();try{return Hd(l,p,y,g)}catch(E){if(he(S),E!==E+0)throw E;_e(1,0)}}function Vv(l,p,y,g){var S=ge();try{return jd(l,p,y,g)}catch(E){if(he(S),E!==E+0)throw E;_e(1,0)}}function Fv(l,p,y,g,S,E,A,M,V,X,ce,$e){var Ae=ge();try{return Kd(l,p,y,g,S,E,A,M,V,X,ce,$e)}catch(Re){if(he(Ae),Re!==Re+0)throw Re;_e(1,0)}}function Hv(l,p,y,g,S,E,A,M,V,X,ce){var $e=ge();try{Ud(l,p,y,g,S,E,A,M,V,X,ce)}catch(Ae){if(he($e),Ae!==Ae+0)throw Ae;_e(1,0)}}function jv(l,p,y,g,S,E,A,M,V,X,ce,$e,Ae,Re,Cr,Ns){var Yv=ge();try{Ld(l,p,y,g,S,E,A,M,V,X,ce,$e,Ae,Re,Cr,Ns)}catch(Ms){if(he(Yv),Ms!==Ms+0)throw Ms;_e(1,0)}}function Kv(l,p,y){var g=ge();try{return Md(l,p,y)}catch(S){if(he(g),S!==S+0)throw S;_e(1,0)}}function Zv(l,p,y){var g=ge();try{return Dd(l,p,y)}catch(S){if(he(g),S!==S+0)throw S;_e(1,0)}}function Xv(l,p,y,g){var S=ge();try{Pd(l,p,y,g)}catch(E){if(he(S),E!==E+0)throw E;_e(1,0)}}function _a(){if(0<it)Ye=_a;else if(n)b==null||b(t),Q();else{for(var l=Xe;0<l.length;)l.shift()(t);0<it?Ye=_a:(t.calledRun=!0,C||(Q(),b==null||b(t)))}}return n||(fr=await dt(),_a()),t.PTR_SIZE=4,W?t:new Promise((l,p)=>{b=l,$=p})}var Og,kc,O1=U(()=>{var e,t;Og=Sc,kc=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),kc&&Sc()}),Zs,au,Ic,bt,Bg,xa,Tc,Ec,Xs,Cc,Ys,Rg,Qs,Ng,Wu=U(()=>{Lu(),Zs=typeof location>"u"?void 0:location.origin,au=import.meta.url>"file:"&&import.meta.url<"file;",Ic=()=>{{if(au){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Zs).href}return import.meta.url}},bt=Ic(),Bg=()=>{if(bt&&!bt.startsWith("blob:"))return bt.substring(0,bt.lastIndexOf("/")+1)},xa=(e,t)=>{try{let r=t??bt;return(r?new URL(e,r):new URL(e)).origin===Zs}catch{return!1}},Tc=(e,t)=>{let r=t??bt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Ec=(e,t)=>`${t??"./"}${e}`,Xs=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Cc=async e=>(await import(e)).default,Ys=(A1(),Vn(Cg)).default,Rg=async()=>{if(!bt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(xa(bt))return[void 0,Ys()];let e=await Xs(bt);return[e,Ys(e)]},Qs=(O1(),Vn(Ag)).default,Ng=async(e,t,r,i)=>{let n=Qs&&!(e||t);if(n)if(bt)n=xa(bt)||i&&!r;else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,Qs];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??Tc(a,t),o=r&&s&&!xa(s,t),u=o?await Xs(s):s??Ec(a,t);return[o?u:void 0,await Cc(u)]}}}),Js,Sa,bn,eo,zc,Ac,Oc,Gu,Be,xi=U(()=>{Wu(),Sa=!1,bn=!1,eo=!1,zc=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Ac=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Oc=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Gu=async e=>{if(Sa)return Promise.resolve();if(bn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(eo)throw new Error("previous call to 'initializeWebAssembly()' failed.");bn=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Oc())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Ac())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=zc();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,a=typeof n=="string"?n:void 0,s=n==null?void 0:n.mjs,o=(s==null?void 0:s.href)??s,u=n==null?void 0:n.wasm,d=(u==null?void 0:u.href)??u,c=e.wasmBinary,[f,h]=await Ng(o,a,r>1,!!c||!!d),m=!1,_=[];if(t>0&&_.push(new Promise(b=>{setTimeout(()=>{m=!0,b()},t)})),_.push(new Promise((b,$)=>{let v={numThreads:r};if(c)v.wasmBinary=c,v.locateFile=w=>w;else if(d||a)v.locateFile=w=>d??a+w;else if(o&&o.indexOf("blob:")!==0)v.locateFile=w=>new URL(w,o).href;else if(f){let w=Bg();w&&(v.locateFile=I=>w+I)}h(v).then(w=>{bn=!1,Sa=!0,Js=w,b(),f&&URL.revokeObjectURL(f)},w=>{bn=!1,eo=!0,$(w)})})),await Promise.race(_),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Be=()=>{if(Sa&&Js)return Js;throw new Error("WebAssembly is not initialized yet.")}}),Ht,ts,Ce,qu=U(()=>{xi(),Ht=(e,t)=>{let r=Be(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},ts=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,a])=>{let s=t?t+n:n;if(typeof a=="object")ts(a,s+".",r,i);else if(typeof a=="string"||typeof a=="number")i(s,a.toString());else if(typeof a=="boolean")i(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Ce=e=>{let t=Be(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let a=Number(t.getValue(n,i===4?"i32":"i64")),s=t.getValue(n+i,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Mg,B1=U(()=>{xi(),qu(),Mg=e=>{let t=Be(),r=0,i=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=Ht(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,a),r===0&&Ce("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&ts(e.extra,"",new WeakSet,(s,o)=>{let u=Ht(s,i),d=Ht(o,i);t._OrtAddRunConfigEntry(r,u,d)!==0&&Ce(`Can't set a run config entry: ${s} - ${o}.`)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),a}}}),Bc,Rc,Nc,jr,Mc,Dg,R1=U(()=>{xi(),qu(),Bc=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Rc=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Nc=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},jr=(e,t,r,i)=>{let n=Ht(t,i),a=Ht(r,i);Be()._OrtAddSessionConfigEntry(e,n,a)!==0&&Ce(`Can't set a session config entry: ${t} - ${r}.`)},Mc=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let a=typeof n=="string"?n:n.name,s=[];switch(a){case"webnn":if(a="WEBNN",jr(e,"session.disable_quant_qdq","1",r),jr(e,"session.disable_qdq_constant_folding","1",r),typeof n!="string"){let f=n==null?void 0:n.deviceType;f&&jr(e,"deviceType",f,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let f=n;if(f!=null&&f.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);jr(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=Ht(a,r),u=s.length,d=0,c=0;if(u>0){d=Be()._malloc(u*Be().PTR_SIZE),r.push(d),c=Be()._malloc(u*Be().PTR_SIZE),r.push(c);for(let f=0;f<u;f++)Be().setValue(d+f*Be().PTR_SIZE,s[f][0],"*"),Be().setValue(c+f*Be().PTR_SIZE,s[f][1],"*")}await Be()._OrtAppendExecutionProvider(e,o,d,c,u)!==0&&Ce(`Can't append execution provider: ${a}.`)}},Dg=async e=>{let t=Be(),r=0,i=[],n=e||{};Nc(n);try{let a=Bc(n.graphOptimizationLevel??"all"),s=Rc(n.executionMode??"sequential"),o=typeof n.logId=="string"?Ht(n.logId,i):0,u=n.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof n.optimizedModelFilePath=="string"?Ht(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(a,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,o,u,d,c),r===0&&Ce("Can't create session options."),n.executionProviders&&await Mc(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);jr(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[f,h]of Object.entries(n.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let m=Ht(f,i);t._OrtAddFreeDimensionOverride(r,m,h)!==0&&Ce(`Can't set a free dimension override: ${f} - ${h}.`)}return n.extra!==void 0&&ts(n.extra,"",new WeakSet,(f,h)=>{jr(r,f,h,i)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Ce("Can't release session options."),i.forEach(s=>t._free(s)),a}}}),ti,br,ri,fs,rs,Vu,Fu,su,ne=U(()=>{ti=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},br=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},ri=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,a)=>n*a,1);return r>0?Math.ceil(i*r):void 0},fs=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},rs=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Vu=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Fu=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",su=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Hu,Pg=U(()=>{Lu(),Hu=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),a;try{a=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let u=Math.ceil(i/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await n.read();if(o)break;let d=u.byteLength;new Uint8Array(a,s,d).set(u),s+=d}return new Uint8Array(a,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Dc,Pc,Uc,Lc,ju,Wc,we,Ir=U(()=>{ne(),Dc=["V","I","W","E","F"],Pc=(e,t)=>{console.log(`[${Dc[e]},${new Date().toISOString()}]${t}`)},ju=(e,t)=>{Uc=e,Lc=t},Wc=(e,t)=>{let r=rs(e),i=rs(Uc);r>=i&&Pc(r,typeof t=="function"?t():t)},we=(...e)=>{Lc&&Wc(...e)}}),Gc,Qi,R,is,Ug,Lg,Wg,oe=U(()=>{Gc=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Qi=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(i<2||n<2)return;let o=Gc.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=r?3:1;o<=a;o++){let u=i-o<0?1:e[i-o],d=n-o<0?1:t[n-o];if(u!==d&&u>1&&d>1)return;let c=Math.max(u,d);if(u&&d)s[a-o]=Math.max(u,d);else{if(c>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},R=class Fa{static size(t){return Fa.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),a=i-1;for(;a>=0;){if(t[a]%r===0){n[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");n[a]=1,r/=t[a],a--}for(a--;a>=0;a--)n[a]=t[a];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Fa.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Fa.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let a=r;a<i;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[a])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,a)=>n+r[a]+r[a+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},is=class Nn{static adjustPoolAttributes(t,r,i,n,a,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<i.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=i[o]||s[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Nn.adjustPadAndReturnShape(t[u+(s?1:2)],r[u],i[u],n[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,i,n,a,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return Nn.computeShapeHelper(t,r,u,i,n,a,s,o),u}static computeConvOutputShape(t,r,i,n,a,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return Nn.computeShapeHelper(!1,t,u,i,n,a,s,o),u}static computeShapeHelper(t,r,i,n,a,s,o,u){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(Nn.adjustPadAndReturnShape(r[d+2],n[d],a[d],s[d],o,d,d+r.length-2,u))}static adjustPadAndReturnShape(t,r,i,n,a,s,o,u){let d=i*(n-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+n-t;return a[s]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),a[o]=c-a[s],Math.floor((t+c-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-d)/r+1)}},Ug=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(i?(o=r[0],u=1):(o=r[1],u=0),r[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(n&&!Qi.isValidBroadcast(n,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},Lg=-34028234663852886e22,Wg=34028234663852886e22}),Ku,Gg=U(()=>{ne(),Ku=(e,t)=>new(fs(t))(e)}),to,ou,ro,qc,io,Vc,no,ao,so,Fc,qg,N1=U(()=>{ne(),Ir(),to=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),ou=(e,t)=>{if(t==="int32")return e;let r=to.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,a=new(fs(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let s=new Int32Array(n);for(let o=0;o<n;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},ro=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},qc=1,io=()=>qc++,Vc=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),no=(e,t)=>{let r=to.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},ao=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return no(this.dataType,this.tensorShape)}destroy(){we("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=ro(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},so=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=Vc.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);we("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==no(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=ou(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else we("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let i=(t=this.wrapper)!=null&&t.isDataConverted?ro(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(i):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Fc=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=io();return this.tensorTrackersById.set(e,new so(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){we("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){we("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),a=io(),s=new ao({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new so(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,i,n,a,s){let o=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(o,t,r)){we("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}we("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let u=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:n,readable:a});return new ao({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},qg=(...e)=>new Fc(...e)}),vn,Hc,Vg,M1=U(()=>{ne(),xi(),Gg(),N1(),Ir(),vn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Hc=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,a)=>n===i[a]&&e[n]===t[n])},Vg=class{constructor(e){this.tensorManager=qg(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,ju(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){we("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){we("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)we("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Hc(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){we("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let a=vn.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,i,n)}async createTemporaryTensor(e,t,r){we("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=vn.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!Be().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");we("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Ku(r,t)}}registerMLTensor(e,t,r,i){let n=vn.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,n,i);return we("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,i,n,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+r).buffer,c;switch(n.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(s){let f=ou(new Uint8Array(d),"int64");c=new Int32Array(f.buffer),n.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return we("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(n,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=vn.get(ti(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!(n!=null&&n.input.dataTypes.includes(i)):!!(n!=null&&n.output.dataTypes.includes(i))}flush(){}}}),Zu=U(()=>{}),oo,ka,Ia,jc,Kc,uo,uu,Zc,Fg,D1=U(()=>{Ir(),Zu(),oo=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),ka=[],Ia=e=>Math.ceil(Number(e)/16)*16,jc=e=>{for(let t=0;t<ka.length;t++){let r=ka[t];if(e<=r)return r}return Math.ceil(e/16)*16},Kc=1,uo=()=>Kc++,uu=async(e,t,r,i)=>{let n=Ia(r),a=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,n),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(i){let u=i();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{a.destroy()}},Zc=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of oo)ka.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,a=Ia(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,i,n)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([d.finish()]),o.destroy(),we("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Ia(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return we("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=uo();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),we("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),we("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=jc(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||a){let o=(n?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:uo(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),we("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return we("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await uu(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=oo.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(we("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Fg=(...e)=>new Zc(...e)}),Xc,Te,Le=U(()=>{Xc=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Te=e=>new Xc(e)}),Ji,Ta,He,nt,ie,De,lu,Ni,Wr,te,wn,D,ee,Hg,Xu,Yc,jg,le=U(()=>{ne(),oe(),Ji=64,Ta=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},He=(e,t=1)=>{let r=Ta(e,t);return typeof r=="string"?r:r[0]},nt=(e,t=1)=>{let r=Ta(e,t);return typeof r=="string"?r:r[1]},ie=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:R.computeStrides(r)})}),t},De=e=>e%4===0?4:e%2===0?2:1,lu=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Ni=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Wr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,te=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,wn=(e,t,r,i,n)=>{let a=typeof r=="number",s=a?r:r.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Ta(t,n),c=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],h={indices:u,value:c,storage:f,tensor:t},m=W=>typeof W=="string"?W:`${W}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=a?"uniforms.":"",$=`${b}${e}_shape`,v=`${b}${e}_strides`,w="";for(let W=0;W<s-1;W++)w+=`
    let dim${W} = current / ${te(v,W,s)};
    let rest${W} = current % ${te(v,W,s)};
    indices[${W}] = dim${W};
    current = rest${W};
    `;w+=`indices[${s-1}] = current;`;let I=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${w}
    return indices;
  }`,k=W=>(_.offsetToIndices=!0,s<2?W:`o2i_${e}(${W})`),T=[];if(s>=2)for(let W=s-1;W>=0;W--)T.push(`${te(v,W,s)} * (indices[${W}])`);let C=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${T.join("+")};
  }`,z=W=>(_.indicesToOffset=!0,s<2?W:`i2o_${e}(${W})`),x=(...W)=>s===0?"0u":`${h.indices}(${W.map(m).join(",")})`,N=(W,H)=>s<2?`${W}`:`${te(W,H,s)}`,P=(W,H,Q)=>s<2?`${W}=${Q};`:`${te(W,H,s)}=${Q};`,F={},j=(W,H)=>{_.broadcastedIndicesToOffset=!0;let Q=`${H.name}broadcastedIndicesTo${e}Offset`;if(Q in F)return`${Q}(${W})`;let G=[];for(let Se=s-1;Se>=0;Se--){let dt=H.indicesGet("outputIndices",Se+H.rank-s);G.push(`${N(v,Se)} * (${dt} % ${N($,Se)})`)}return F[Q]=`fn ${Q}(outputIndices: ${H.type.indices}) -> u32 {
             return ${G.length>0?G.join("+"):"0u"};
           }`,`${Q}(${W})`},Z=(W,H)=>(()=>{if(h.storage===h.value)return`${e}[${W}]=${H};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${W}]=vec2<u32>(u32(${H}), select(0u, 0xFFFFFFFFu, ${H} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${W}]=vec2<u32>(u32(${H}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${W}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${H}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),B=W=>(()=>{if(h.storage===h.value)return`${e}[${W}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${W}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${W}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${W}] & 0xFFu), bool(${e}[${W}] & 0xFF00u), bool(${e}[${W}] & 0xFF0000u), bool(${e}[${W}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),Y=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${c} {
    return ${B(`i2o_${e}(indices)`)};
  }`,K=s<2?"":(()=>{let W=o.map(Q=>`d${Q}: u32`).join(", "),H=o.map(Q=>`d${Q}`).join(", ");return`
  fn get_${e}(${W}) -> ${c} {
    return get_${e}ByIndices(${x(H)});
  }`})(),J=(...W)=>{if(W.length!==s)throw new Error(`indices length must be ${s}`);let H=W.map(m).join(",");return s===0?B("0u"):s===1?B(H[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${H})`)},be=W=>s<2?B(W):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${W})`),L=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${c}) {
    ${Z(`i2o_${e}(indices)`,"value")}
  }`,de=s<2?"":(()=>{let W=o.map(Q=>`d${Q}: u32`).join(", "),H=o.map(Q=>`d${Q}`).join(", ");return`
  fn set_${e}(${W}, value: ${c}) {
    set_${e}ByIndices(${x(H)}, value);
  }`})();return{impl:()=>{let W=[],H=!1;return _.offsetToIndices&&(W.push(I),H=!0),_.indicesToOffset&&(W.push(C),H=!0),_.broadcastedIndicesToOffset&&(Object.values(F).forEach(Q=>W.push(Q)),H=!0),_.set&&(W.push(de),H=!0),_.setByIndices&&(W.push(L),H=!0),_.get&&(W.push(K),H=!0),_.getByIndices&&(W.push(Y),H=!0),!a&&H&&W.unshift(`const ${$} = ${h.indices}(${r.join(",")});`,`const ${v} = ${h.indices}(${R.computeStrides(r).join(",")});`),W.join(`
`)},type:h,offsetToIndices:k,indicesToOffset:z,broadcastedIndicesToOffset:j,indices:x,indicesGet:N,indicesSet:P,set:(...W)=>{if(W.length!==s+1)throw new Error(`indices length must be ${s}`);let H=W[s];if(typeof H!="string")throw new Error("value must be string");let Q=W.slice(0,s).map(m).join(",");return s===0?Z("0u",H):s===1?Z(Q[0],H):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${Q}, ${H})`)},setByOffset:Z,setByIndices:(W,H)=>s<2?Z(W,H):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${W}, ${H});`),get:J,getByOffset:B,getByIndices:be,usage:i,name:e,strides:v,shape:$,rank:s}},D=(e,t,r,i=1)=>wn(e,t,r,"input",i),ee=(e,t,r,i=1)=>wn(e,t,r,"output",i),Hg=(e,t,r)=>wn(e,t,r,"atomicOutput",1),Xu=(e,t,r,i=1)=>wn(e,t,r,"internal",i),Yc=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Ji){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},jg=(e,t)=>new Yc(e,t)}),Qc,lo,Jc,ep,tp,rp,kt,Kg,Zg,Gr=U(()=>{ne(),oe(),Le(),le(),Qc=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},lo=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Jc=(e,t)=>R.sortBasedOnPerm(e,lo(e.length,t)),ep=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)n+=`a[${e[a]}]=i[${a}];`;return n+="return a;}"},tp=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},rp=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},kt=(e,t)=>{let r=e.dataType,i=e.dims.length,n=lo(i,t),a=Jc(e.dims,n),s=e.dims,o=a,u=i<2||rp(n,e.dims),d;if(u)return d=_=>{let b=D("input",r,s,4),$=ee("output",r,o,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,$)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:c,newPerm:f}=tp(e.dims,n),h=R.areEqual(f,[2,3,1]),m=R.areEqual(f,[3,1,2]);if(c.length===2||h||m){s=h?[c[0],c[1]*c[2]]:m?[c[0]*c[1],c[2]]:c,o=[s[1],s[0]];let _=16;return d=b=>{let $=D("a",r,s.length),v=ee("output",r,o.length);return`
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

  ${ep(n,i,b,$)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ie(s,o)]}},getShaderSource:d}},Kg=(e,t)=>{Qc(e.inputs,t.perm),e.compute(kt(e.inputs[0],t.perm))},Zg=e=>Te({perm:e.perm})}),ip,np,ap,sp,op,up,lp,dp,cp,pp,Pt,Xg,Yg,Qg,Jg,e0,t0,r0,i0,n0,a0,P1=U(()=>{ne(),oe(),le(),Yu(),Gr(),ip={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},np={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},ap={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},sp={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},op=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},up=(e,t)=>{let r=[],i=e.length;for(let a=0;a<i;a++)t.indexOf(a)===-1&&r.push(e[a]);let n=t.map(a=>e[a]);return[r,n]},lp=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?i.push(e[n++]):i.push(1);return i},dp=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},cp=(e,t)=>{let r=[];if(!dp(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},pp=(e,t,r,i,n,a,s)=>{let o=r[0].dims,u=R.size(a),d=R.size(s),c=D("_A",r[0].dataType,o),f=ee("output",n,a),h=64;u===1&&(h=256);let m=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,_=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${ap[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${ip[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${np[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${i==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${sp[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},Pt=(e,t,r,i)=>{let n=e.inputs.length===1?r:du(e.inputs,r),a=n.axes;a.length===0&&!n.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,_)=>_));let s=R.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],d=cp(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(kt(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=op(o.length,u.dims.length));let[c,f]=up(u.dims,o),h=c;n.keepDims&&(h=lp(c,s)),e.compute(pp(t,n.cacheKey,[u],i,e.inputs[0].dataType,h,f),{inputs:[u]})},Xg=(e,t)=>{Pt(e,"ReduceMeanShared",t,"mean")},Yg=(e,t)=>{Pt(e,"ReduceL1Shared",t,"l1")},Qg=(e,t)=>{Pt(e,"ReduceL2Shared",t,"l2")},Jg=(e,t)=>{Pt(e,"ReduceLogSumExpShared",t,"logSumExp")},e0=(e,t)=>{Pt(e,"ReduceMaxShared",t,"max")},t0=(e,t)=>{Pt(e,"ReduceMinShared",t,"min")},r0=(e,t)=>{Pt(e,"ReduceProdShared",t,"prod")},i0=(e,t)=>{Pt(e,"ReduceSumShared",t,"sum")},n0=(e,t)=>{Pt(e,"ReduceSumSquareShared",t,"sumSquare")},a0=(e,t)=>{Pt(e,"ReduceLogSumShared",t,"logSum")}}),Ut,fp,ns,du,Lt,hp,mp,gp,_p,yp,bp,vp,wp,$p,xp,Wt,s0,o0,u0,l0,d0,c0,p0,f0,h0,m0,Yu=U(()=>{ne(),oe(),Le(),le(),P1(),Ut=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},fp=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ns=(e,t,r,i,n,a,s=!1,o=!1)=>{let u=[],d=r[0].dims,c=d.length,f=R.normalizeAxes(n,c),h=!o&&f.length===0;d.forEach((b,$)=>{h||f.indexOf($)>=0?s&&u.push(1):u.push(b)});let m=u.length,_=R.size(u);return{name:e,shaderCache:t,getShaderSource:b=>{let $=[],v=D("_A",r[0].dataType,c),w=ee("output",a,m),I=i(v,w,f),k=I[2];for(let T=0,C=0;T<c;T++)h||f.indexOf(T)>=0?(s&&C++,k=`for(var j${T}: u32 = 0; j${T} < ${d[T]}; j${T}++) {
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
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ie(d,u)]})}},du=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),Te({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Lt=(e,t,r,i)=>{let n=e.inputs,a=n.length===1?r:du(n,r);e.compute(ns(t,{hint:a.cacheKey,inputDependencies:["rank"]},[n[0]],a.noopWithEmptyAxes&&a.axes.length===0?fp:i,a.axes,n[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},hp=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},mp=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},gp=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},_p=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},yp=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceMax",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},bp=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceMean",t,(r,i,n)=>{let a=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},vp=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceMin",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},wp=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},$p=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},xp=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Wt=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?i*=e[a]:n*=e[a];return n<32&&i>1024},s0=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bp(e,t):Xg(e,t)},o0=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mp(e,t):Yg(e,t)},u0=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gp(e,t):Qg(e,t)},l0=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_p(e,t):Jg(e,t)},d0=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yp(e,t):e0(e,t)},c0=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vp(e,t):t0(e,t)},p0=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wp(e,t):r0(e,t)},f0=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$p(e,t):i0(e,t)},h0=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xp(e,t):n0(e,t)},m0=(e,t)=>{Wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hp(e,t):a0(e,t)}}),co,g0,_0,cu,U1=U(()=>{ne(),Le(),Yu(),co=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},g0=(e,t)=>{co(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(ns("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},_0=(e,t)=>{co(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(ns("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},cu=e=>Te(e)}),Sp,Ea,kp,Ip,Tp,Fn,Ep,y0,Qu=U(()=>{ne(),oe(),Zu(),le(),Sp=(e,t)=>{let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],d=r.dims[1],c=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=n.dims[0]/3,h=f,m=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let _=d;if(f!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==f+h+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(s){if(h!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=s.dims[3])}let $=_+b,v=-1,w=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:$,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:f,vHiddenSize:m,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ea=(e,t,r)=>t&&e?`
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
    `,kp=(e,t,r,i,n,a,s,o)=>{let u=De(s?1:a),d=64,c=a/u;c<d&&(d=32);let f=Math.ceil(a/u/d),h=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:c},{type:12,data:f}],m=He(e.dataType,u),_=nt(1,u),b=["type"];s&&b.push("type"),o&&b.push("type");let $=v=>{let w=ee("x",e.dataType,e.dims,u),I=[w],k=s?D("seq_lens",s.dataType,s.dims):void 0;k&&I.push(k);let T=o?D("total_sequence_length_input",o.dataType,o.dims):void 0;T&&I.push(T);let C=nt(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(z).declareVariables(...I)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ea(k,T,!1)}
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
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${m};${u}`,inputDependencies:b},getShaderSource:$,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:h})}},Ip=(e,t,r,i,n,a,s,o,u)=>{let d=s+a.kvSequenceLength,c=[a.batchSize,a.numHeads,a.sequenceLength,d],f=e>1&&i,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=f?[a.batchSize,h,d,a.headSize]:void 0,_=a.nReps?a.nReps:1,b=a.scale===0?1/Math.sqrt(a.headSize):a.scale,$=De(a.headSize),v=a.headSize/$,w=12,I={x:Math.ceil(d/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},k=[{type:12,data:a.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:b},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:_}],T=f&&i&&R.size(i.dims)>0,C=["type","type"];T&&C.push("type"),n&&C.push("type"),o&&C.push("type"),u&&C.push("type");let z=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&z.push({dims:m,dataType:t.dataType,gpuDataType:0});let x=N=>{let P=D("q",t.dataType,t.dims,$),F=D("key",r.dataType,r.dims,$),j=[P,F];if(T){let L=D("past_key",i.dataType,i.dims,$);j.push(L)}n&&j.push(D("attention_bias",n.dataType,n.dims));let Z=o?D("seq_lens",o.dataType,o.dims):void 0;Z&&j.push(Z);let B=u?D("total_sequence_length_input",u.dataType,u.dims):void 0;B&&j.push(B);let Y=ee("output",t.dataType,c),K=[Y];f&&K.push(ee("present_key",t.dataType,m,$));let J=nt(1,$),be=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${P.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${P.type.storage}, ${w*w}>;
  ${N.registerUniforms(be).declareVariables(...j,...K)}
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
    ${Ea(Z,B,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${J}(0);
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
          value += ${J}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch($){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${$}`)}})()};
        output[outputIdx] = ${Y.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${$};${n!==void 0};${i!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:z,dispatchGroup:I,programUniforms:k}),getShaderSource:x}},Tp=(e,t,r,i,n,a,s=void 0,o=void 0)=>{let u=a+n.kvSequenceLength,d=n.nReps?n.nReps:1,c=n.vHiddenSize*d,f=e>1&&i,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,m=f?[n.batchSize,h,u,n.headSize]:void 0,_=[n.batchSize,n.sequenceLength,c],b=12,$={x:Math.ceil(n.vHeadSize/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},v=[{type:12,data:n.sequenceLength},{type:12,data:u},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:c},{type:12,data:a},{type:12,data:n.kvSequenceLength},{type:12,data:d}],w=f&&i&&R.size(i.dims)>0,I=["type","type"];w&&I.push("type"),s&&I.push("type"),o&&I.push("type");let k=[{dims:_,dataType:t.dataType,gpuDataType:0}];f&&k.push({dims:m,dataType:t.dataType,gpuDataType:0});let T=C=>{let z=D("probs",t.dataType,t.dims),x=D("v",r.dataType,r.dims),N=[z,x];w&&N.push(D("past_value",i.dataType,i.dims));let P=s?D("seq_lens",s.dataType,s.dims):void 0;s&&N.push(P);let F=o?D("total_sequence_length_input",o.dataType,o.dims):void 0;o&&N.push(F);let j=[ee("output",t.dataType,_)];f&&j.push(ee("present_value",t.dataType,m));let Z=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${z.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${z.type.value}, ${b*b}>;
  ${C.registerUniforms(Z).declareVariables(...N,...j)}
  ${C.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ea(P,F,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:k,dispatchGroup:$,programUniforms:v}),getShaderSource:T}},Fn=(e,t,r,i,n,a,s,o,u,d,c=void 0,f=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),m=h>1?s:void 0,_=h>1?o:void 0,b=h>1?d.pastSequenceLength:0,$=b+d.kvSequenceLength,v=u&&R.size(u.dims)>0?u:void 0,w=[t,r];m&&R.size(m.dims)>0&&w.push(m),v&&w.push(v),c&&w.push(c),f&&w.push(f);let I=e.compute(Ip(h,t,r,m,v,d,b,c,f),{inputs:w,outputs:h>1?[-1,1]:[-1]})[0];e.compute(kp(I,d.batchSize,d.numHeads,b,d.sequenceLength,$,c,f),{inputs:c&&f?[I,c,f]:[I],outputs:[]});let k=[I,i];_&&R.size(_.dims)>0&&k.push(_),c&&k.push(c),f&&k.push(f),e.compute(Tp(h,I,i,_,d,b,c,f),{inputs:k,outputs:h>1?[0,2]:[0]})},Ep=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let h=ee("output_q",u[0].dataType,r),m=ee("output_k",u[0].dataType,r),_=ee("output_v",u[0].dataType,r),b=D("input",u[0].dataType,u[0].dims),$=D("weight",u[1].dataType,u[1].dims),v=D("bias",u[2].dataType,u[2].dims),w=b.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:c},{inputs:u,outputs:[-1,-1,-1]})},y0=(e,t)=>{let r=Sp(e.inputs,t),[i,n,a]=Ep(e,r);return Fn(e,i,n,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Cp,zp,Ap,b0,L1=U(()=>{Mt(),ne(),oe(),Le(),le(),Cp=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,a)=>{let s=n.length;if(s!==i.length)throw new Error(`${a}: num dimensions != ${s}`);n.forEach((o,u)=>{if(o!==i[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},zp=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,a=e[0].dims,s=i?De(a[a.length-1]):1,o=n==="NHWC"&&a.length>1?s:1,u=R.size(a)/s,d=i,c=d?a.length:a,f=D("x",e[0].dataType,e[0].dims,s),h=D("scale",e[1].dataType,e[1].dims,o),m=D("bias",e[2].dataType,e[2].dims,o),_=D("inputMean",e[3].dataType,e[3].dims,o),b=D("inputVar",e[4].dataType,e[4].dims,o),$=ee("y",e[0].dataType,c,s),v=()=>{let I="";if(i)I=`let cOffset = ${a.length===1?"0u":n==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")I=`
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
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...ie(a)]:[{type:12,data:u}]})}},Ap=e=>Te(e),b0=(e,t)=>{let{inputs:r,outputCount:i}=e,n=Ap({...t,outputCount:i});if(xe.webgpu.validateInputContent&&Cp(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(zp(r,n))}}),Op,Bp,v0,W1=U(()=>{oe(),le(),Op=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Bp=e=>{let t=e[0].dims,r=e[0].dims[2],i=R.size(t)/4,n=e[0].dataType,a=D("input",n,t,4),s=D("bias",n,[r],4),o=D("residual",n,t,4),u=ee("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(a,s,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},v0=e=>{Op(e.inputs),e.compute(Bp(e.inputs))}}),Rp,Ie,w0,$0,x0,S0,k0,I0,T0,E0,C0,Np,z0,A0,O0,B0,Mn,R0,Ha,N0,M0,D0,P0,U0,L0,W0,G0,q0,V0,F0,H0,j0,K0,Z0,X0,po,Y0,pu,fu,Q0,J0,e_,Mp,Dp,t_,Ju=U(()=>{ne(),oe(),Le(),le(),Rp=(e,t,r,i,n,a,s)=>{let o=Math.ceil(t/4),u="";typeof n=="string"?u=`${n}(a)`:u=n("a");let d=D("inputData",r,[o],4),c=ee("outputData",i,[o],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(d,c)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",u)}
  }`},Ie=(e,t,r,i,n,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(R.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>Rp(d,R.size(e.dims),e.dataType,a,r,i,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(R.size(d[0].dims)/64/4)},programUniforms:u})}},w0=e=>{e.compute(Ie(e.inputs[0],"Abs","abs"))},$0=e=>{e.compute(Ie(e.inputs[0],"Acos","acos"))},x0=e=>{e.compute(Ie(e.inputs[0],"Acosh","acosh"))},S0=e=>{e.compute(Ie(e.inputs[0],"Asin","asin"))},k0=e=>{e.compute(Ie(e.inputs[0],"Asinh","asinh"))},I0=e=>{e.compute(Ie(e.inputs[0],"Atan","atan"))},T0=e=>{e.compute(Ie(e.inputs[0],"Atanh","atanh"))},E0=e=>Te(e),C0=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ie(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Np=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Te({min:t,max:r})},z0=(e,t)=>{let r=t||Np(e.inputs),i=nt(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},A0=e=>{e.compute(Ie(e.inputs[0],"Ceil","ceil"))},O0=e=>{e.compute(Ie(e.inputs[0],"Cos","cos"))},B0=e=>{e.compute(Ie(e.inputs[0],"Cosh","cosh"))},Mn=e=>Te(e),R0=(e,t)=>{let r=nt(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ha=(e="f32")=>`
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
}`,N0=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Ha(t)))},M0=e=>{e.compute(Ie(e.inputs[0],"Exp","exp"))},D0=e=>{e.compute(Ie(e.inputs[0],"Floor","floor"))},P0=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Ha(t)))},U0=(e,t)=>{let r=nt(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},L0=e=>{e.compute(Ie(e.inputs[0],"Not",t=>`!${t}`))},W0=e=>{e.compute(Ie(e.inputs[0],"Neg",t=>`-${t}`))},G0=e=>{e.compute(Ie(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},q0=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},V0=e=>{e.compute(Ie(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},F0=e=>Te(e),H0=(e,t)=>{let r=nt(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},j0=e=>{e.compute(Ie(e.inputs[0],"Sin","sin"))},K0=e=>{e.compute(Ie(e.inputs[0],"Sinh","sinh"))},Z0=e=>{e.compute(Ie(e.inputs[0],"Sqrt","sqrt"))},X0=e=>{e.compute(Ie(e.inputs[0],"Tan","tan"))},po=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Y0=e=>{e.compute(Ie(e.inputs[0],"Tanh",po))},pu=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${po("v")};
}
`,fu=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Q0=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"FastGelu",fu,pu(t),void 0,e.inputs[0].dataType))},J0=(e,t)=>{let r=nt(e.inputs[0].dataType);return e.compute(Ie(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},e_=e=>{e.compute(Ie(e.inputs[0],"Log","log"))},Mp=(e,t)=>`
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
`,Dp=e=>`quick_gelu_impl(${e})`,t_=(e,t)=>{let r=nt(e.inputs[0].dataType);e.compute(Ie(e.inputs[0],"QuickGelu",Dp,Mp(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Pp,Up,r_,G1=U(()=>{oe(),le(),Ju(),Pp=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Up=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=D("input",e[0].dataType,e[0].dims,4),i=D("bias",e[0].dataType,[e[0].dims[2]],4),n=ee("output",e[0].dataType,t,4),a=R.size(t)/4,s=He(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,n)}

  ${Ha(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},r_=e=>{Pp(e.inputs),e.compute(Up(e.inputs))}}),Lp,Wp,Gt,i_,n_,a_,s_,o_,u_,l_,d_,c_,p_,q1=U(()=>{ne(),oe(),le(),Lp=(e,t,r,i,n,a,s,o,u,d,c,f)=>{let h,m;typeof o=="string"?h=m=(w,I)=>`${o}((${w}),(${I}))`:typeof o=="function"?h=m=o:(h=o.scalar,m=o.vector);let _=ee("outputData",c,i.length,4),b=D("aData",u,t.length,4),$=D("bData",d,r.length,4),v;if(n)if(a){let w=R.size(t)===1,I=R.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,T=r.length>0&&r[r.length-1]%4===0;w||I?v=_.setByOffset("global_idx",m(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),I?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"))):v=`
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
          `};c===9?v=`
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
      }`},Wp=(e,t,r,i,n,a,s=r.dataType)=>{let o=r.dims.map(Number),u=i.dims.map(Number),d=!R.areEqual(o,u),c=o,f=R.size(o),h=!1,m=!1,_=[d];if(d){let b=Qi.calcShape(o,u,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");c=b.slice(),f=R.size(c);let $=R.size(o)===1,v=R.size(u)===1,w=o.length>0&&o[o.length-1]%4===0,I=u.length>0&&u[u.length-1]%4===0;_.push($),_.push(v),_.push(w),_.push(I);let k=1;for(let T=1;T<c.length;T++){let C=o[o.length-T],z=u[u.length-T];if(C===z)k*=C;else break}k%4===0?(m=!0,h=!0):($||v||w||I)&&(h=!0)}else h=!0;return _.push(h),{name:e,shaderCache:{hint:t+_.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>Lp(b,o,u,c,h,d,m,n,r.dataType,i.dataType,s,a),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(R.size(c)/4)},...ie(o,u,c)]})}},Gt=(e,t,r,i,n,a)=>{e.compute(Wp(t,n??"",e.inputs[0],e.inputs[1],r,i,a))},i_=e=>{Gt(e,"Add",(t,r)=>`${t}+${r}`)},n_=e=>{Gt(e,"Div",(t,r)=>`${t}/${r}`)},a_=e=>{Gt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},s_=e=>{Gt(e,"Mul",(t,r)=>`${t}*${r}`)},o_=e=>{let t=D("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Gt(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
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
      `)},u_=e=>{Gt(e,"Sub",(t,r)=>`${t}-${r}`)},l_=e=>{Gt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},d_=e=>{Gt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},c_=e=>{Gt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},p_=e=>{Gt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Gp,qp,Vp,Fp,f_,h_,V1=U(()=>{ne(),oe(),Le(),le(),Gp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,a=i.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,d)=>{if(d!==t&&u!==i.dims[d])throw new Error("non concat dimensions must match")})}})},qp=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Vp=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let a=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(a):n===0?i.push(`if (inputIndex == ${n}u) { ${a} }`):n===r-1?i.push(`else { ${a} }`):i.push(`else if (inputIndex == ${n}) { ${a} }`)}return i.join(`
`)},Fp=(e,t,r,i)=>{let n=R.size(r),a=new Array(e.length),s=new Array(e.length),o=0,u=[],d=[],c=[{type:12,data:n}];for(let b=0;b<e.length;++b)o+=e[b].dims[t],a[b]=o,d.push(e[b].dims.length),s[b]=D(`input${b}`,i,d[b]),u.push("rank"),c.push({type:12,data:a[b]});for(let b=0;b<e.length;++b)c.push(...ie(e[b].dims));c.push(...ie(r));let f=ee("output",i,r.length),h=f.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),_=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let $=0;$<e.length;$++)b.registerUniform(`sizeInConcatAxis${$}`,"u32");return b.declareVariables(...s,f)})()}

  ${qp(a.length,m)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Vp(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}),getShaderSource:_}},f_=(e,t)=>{let r=e.inputs,i=r[0].dims,n=R.normalizeAxis(t.axis,i.length);Gp(r,n);let a=i.slice();a[n]=r.reduce((o,u)=>o+(u.dims.length>n?u.dims[n]:0),0);let s=r.filter(o=>R.size(o.dims)>0);e.compute(Fp(s,n,a,r[0].dataType),{inputs:s})},h_=e=>Te({axis:e.axis})}),vi,wi,$i,el,Si=U(()=>{ne(),oe(),vi=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},wi=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},$i=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},el=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[Lg,Wg];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ke,m_,tl=U(()=>{Ke=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},m_=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),g_,F1=U(()=>{g_=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Wn,rl,il=U(()=>{ne(),oe(),le(),Si(),Wn=(e,t,r,i,n)=>{let a=i-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${te(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,te(n,o+a,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},rl=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],d=o[o.length-1],c=s[s.length-1],f=De(d),h=De(c),m=De(u),_=R.size(r)/f/m,b=e.length>2,$=i?i.slice(0,-2):r.slice(0,-2),v=[R.size($),u,d],w=[{type:12,data:_},{type:12,data:u},{type:12,data:d},{type:12,data:c}];wi(t,w),w.push(...ie($,s,o)),b&&w.push(...ie(e[2].dims)),w.push(...ie(v));let I=k=>{let T=Xu("batch_dims",e[0].dataType,$.length),C=D("a",e[0].dataType,s.length,h),z=D("b",e[1].dataType,o.length,f),x=ee("output",e[0].dataType,v.length,f),N=He(x.type.tensor),P=vi(t,x.type.value,N),F=[C,z],j="";if(b){let Y=n?f:1;F.push(D("bias",e[2].dataType,e[2].dims.length,Y)),j=`${n?`value += bias[col / ${Y}];`:`value += ${x.type.value}(bias[row + i]);`}`}let Z=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];$i(t,Z);let B=()=>{let Y=`var a_data: ${C.type.value};`;for(let K=0;K<h;K++)Y+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${f}];`;for(let K=0;K<m;K++){Y+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${h}];`;for(let J=0;J<h;J++)Y+=`
            values[${K}] = fma(${z.type.value}(a_data${h===1?"":`[${J}]`}), b_data${J}, values[${K}]);
`}return Y};return`
  ${k.registerUniforms(Z).registerInternalVariables(T).declareVariables(...F,x)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${C.type.indices};
    ${Wn("a_indices",C,C.rank-2,T.rank,"batch_indices")}
    ${C.indicesSet("a_indices",C.rank-2,0)}
    ${C.indicesSet("a_indices",C.rank-1,0)}
    let a_offset = ${C.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${Wn("b_indices",z,z.rank-2,T.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${x.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${B()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${j}
      ${P}
      let cur_indices = ${x.type.indices}(batch, row + i, col);
      let offset = ${x.indicesToOffset("cur_indices")};
      ${x.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${h};${m};${n}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:I}}}),Hp,jp,hu,fo,Kp,mu,Zp,as,nl=U(()=>{ne(),oe(),le(),Si(),il(),tl(),Hp=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,jp=(e,t)=>e?`
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
        }`,hu=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],c=n?u:a,f=n?a:u,h=c/t[0],m=a/t[1];if(!((n&&h===4&&e[1]===4||!n&&(h===3||h===4))&&c%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${c/h}>, ${f}>;
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
          ${Hp(n,i)}
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

          ${jp(n,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},fo=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Kp=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",mu=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32,u=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],f=n?d:a,h=n?a:d;if(!(h%t[1]===0&&f%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=h/t[1],_=f/t[0],b=a/t[1],$=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${fo(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
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
      ${fo(n,i)}
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
      ${Kp(n)}
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
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${a}>;
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
`},Zp=(e,t,r,i,n=!1)=>{let[a,s,o,u]=i,d=He(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ke(e,d)} {
      var value = ${Ke(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Wn("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ke(e,d)} {
      var value = ${Ke(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Wn("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ke(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Ke(e,d)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},as=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),d=o.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),f=R.size(c),h=s[s.length-2],m=s[s.length-1],_=o[o.length-1],b=m%4===0&&_%4===0,$=h<=8?[4,1,1]:[4,4,1],v=[8,8,1],w=[Math.ceil(_/v[0]/$[0]),Math.ceil(h/v[1]/$[1]),Math.ceil(f/v[2]/$[2])],I=b?4:1,k=[...u,h,m/I],T=k.length,C=[...d,m,_/I],z=C.length,x=[f,h,_/I],N=[{type:6,data:h},{type:6,data:_},{type:6,data:m}];wi(t,N),N.push(...ie(c,k,C));let P=["rank","rank"],F=e.length>2;F&&(N.push(...ie(e[2].dims)),P.push("rank")),N.push(...ie(x));let j=Z=>{let B=c.length,Y=Xu("batchDims",e[0].dataType,B,1),K=He(e[0].dataType),J=D("a",e[0].dataType,T,I),be=D("b",e[1].dataType,z,I),L=ee("result",e[0].dataType,x.length,I),de=[J,be];if(F){let Se=n?I:1;de.push(D("bias",e[2].dataType,e[2].dims.length,Se))}let W=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];$i(t,W);let H=He(L.type.tensor),Q=vi(t,L.type.value,H),G=Zp(I,F,Q,[Y,J,be,L],n);return`
  ${Z.registerUniforms(W).registerInternalVariables(Y).declareVariables(...de,L)}
  ${G}
  ${b?hu($,v,K,Y):mu($,v,K,Y)}
                   `};return{name:"MatMul",shaderCache:{hint:`${$};${t.activation};${b};${n}`,inputDependencies:P},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:N}),getShaderSource:j}}}),Xp,__,H1=U(()=>{ne(),Ir(),le(),Si(),tl(),F1(),nl(),Xp=(e,t,r,i,n=!1,a,s=4,o=4,u=4,d="f32")=>{let c=N=>{switch(N){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},f=N=>{switch(N){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},h=e?`
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
    var resData = ${Ke(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${b}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,I=e?t&&i?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Ke(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Ke(s,d)}(0.0);`,k=e?i&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${Ke(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${Ke(o,d)}(0.0);`,T=Ke(u,d),C=Ke(e?s:o,d),z=Ke(e?o:s,d),x=vi(a,T,d);return`
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
      ${m_(n)}
      ${x}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},__=(e,t,r,i,n,a,s,o,u)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],f=r[0],h=d?r[2]:r[3],m=d?r[1]:r[2],_=d?r[3]:r[1],b=d&&(c%4===0||c%3===0)&&_%4===0,$=d?_:h*m,v=d?h*m:_,w=[8,8,1],I=i<=8?[4,1,1]:[4,4,1],k=[Math.ceil($/w[0]/I[0]),Math.ceil(v/w[1]/I[1]),Math.ceil(f/w[2]/I[2])];we("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let T=b?d&&c%4!==0?3:4:1,C=w[1]*I[1],z=w[0]*I[0],x=Math.max(w[0]*T,w[1]),N=i%C===0,P=n%z===0,F=a%x===0,j=b?[T,4,4]:[1,1,1],Z=[{type:6,data:i},{type:6,data:n},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];wi(t,Z),Z.push(...ie(e[0].dims,e[1].dims));let B=["rank","rank"];s&&(Z.push(...ie(e[2].dims)),B.push("rank")),Z.push(...ie(r));let Y=K=>{let J=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];$i(t,J);let be=b?4:1,L=He(e[0].dataType),de=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${L}>`:L}) {
        result[flatIndex] = ${b?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,W=D("x",e[0].dataType,e[0].dims.length,T===3?1:T),H=D("w",e[1].dataType,e[1].dims.length,be),Q=[W,H],G=ee("result",e[0].dataType,r.length,be);if(s){let Se=D("bias",e[2].dataType,e[2].dims.length,be);Q.push(Se),de+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${L}>`:L} {
          return bias[coords.${d?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${g_("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(J).declareVariables(...Q,G)}
        ${de}
        ${Xp(d,N,P,F,s,t,j[0],j[1],j[2],L)}
        ${b?hu(I,w,L,void 0,!d,x):mu(I,w,L,void 0,!d,x,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${b};${N};${P};${F};${C};${z};${x}`,inputDependencies:B},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:Z}),getShaderSource:Y}}}),Yp,ho,$n,Qp,mo,Jp,y_,b_,j1=U(()=>{ne(),Ir(),oe(),le(),Si(),tl(),Yp=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},ho=e=>typeof e=="number"?[e,e,e]:e,$n=(e,t)=>t<=1?e:e+(e-1)*(t-1),Qp=(e,t,r,i=1)=>{let n=$n(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},mo=(e,t,r,i,n)=>{n==null&&(n=Qp(e,t[0],i[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*n)/i[s]+1));return a},Jp=(e,t,r,i,n,a,s,o,u,d)=>{let c,f,h,m;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=mo([t,r,i,1],[o,u,d],1,[n,a,s],e);f=_[0],h=_[1],m=_[2]}else if(Array.isArray(e)){if(!e.every((b,$,v)=>b===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=mo([t,r,i,1],[o,u,d],1,[n,a,s],e[0]);f=_[0],h=_[1],m=_[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/n),h=Math.ceil(r/a),m=Math.ceil(i/s);let _=(f-1)*n+o-t,b=(h-1)*a+u-r,$=(m-1)*s+d-i,v=Math.floor(_/2),w=_-v,I=Math.floor(b/2),k=b-I,T=Math.floor($/2),C=$-T;c={top:I,bottom:k,left:T,right:C,front:v,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:h,outWidth:m}},y_=(e,t,r,i,n,a=!1,s="channelsLast")=>{let o,u,d,c,f;if(s==="channelsLast")[o,u,d,c,f]=e;else if(s==="channelsFirst")[o,f,u,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,m,_,b]=t,[$,v,w]=ho(r),[I,k,T]=ho(i),C=$n(m,I),z=$n(_,k),x=$n(b,T),{padInfo:N,outDepth:P,outHeight:F,outWidth:j}=Jp(n,u,d,c,$,v,w,C,z,x),Z=a?h*f:h,B=[0,0,0,0,0];return s==="channelsFirst"?B=[o,Z,P,F,j]:s==="channelsLast"&&(B=[o,P,F,j,Z]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:d,inWidth:c,inChannels:f,outDepth:P,outHeight:F,outWidth:j,outChannels:Z,padInfo:N,strideDepth:$,strideHeight:v,strideWidth:w,filterDepth:m,filterHeight:_,filterWidth:b,effectiveFilterDepth:C,effectiveFilterHeight:z,effectiveFilterWidth:x,dilationDepth:I,dilationHeight:k,dilationWidth:T,inShape:e,outShape:B,filterShape:t}},b_=(e,t,r,i,n,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:r.map(($,v)=>v)},d=[Math.ceil(Yp(u.x.map($=>r[$]))/o[0]),1,1];we("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,f=R.size(r),h=[{type:12,data:f},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];wi(t,h),h.push(...ie(e[0].dims,e[1].dims));let m=["rank","rank"],_=e.length===3;_&&(h.push(...ie(e[2].dims)),m.push("rank")),h.push(...ie(r));let b=$=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];$i(t,v);let w=1,I=He(e[0].dataType),k=D("x",e[0].dataType,e[0].dims.length,c),T=D("W",e[1].dataType,e[1].dims.length,w),C=[k,T],z=ee("result",e[0].dataType,r.length,w),x="";if(_){let F=D("bias",e[2].dataType,e[2].dims.length,w);C.push(F),x+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${I} {
          return bias[${s?te("coords",4,5):te("coords",1,5)}];
        }`}let N=Ke(c,I),P=vi(t,N,I);return`
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${_}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:h}),getShaderSource:b}}}),v_,w_,K1=U(()=>{ne(),oe(),le(),Si(),v_=(e,t,r,i)=>{let n=e.length>2,a=n?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?r[3]:r[1],c=d/t.group,f=u&&c>=4?De(d):1,h=R.size(r)/f,m=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];wi(t,m),m.push(...ie(s,[o[0],o[1],o[2],o[3]/f]));let _=n?["rank","rank","rank"]:["rank","rank"];m.push(...ie([r[0],r[1],r[2],r[3]/f]));let b=$=>{let v=ee("output",e[0].dataType,r.length,f),w=He(v.type.tensor),I=vi(t,v.type.value,w),k=D("x",e[0].dataType,s.length),T=D("w",e[1].dataType,o.length,f),C=[k,T];n&&C.push(D("b",e[2].dataType,e[2].dims,f));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];$i(t,z);let x=u?`
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
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${x}
    ${a}
    ${I}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:b}},w_=(e,t,r,i)=>{let n=e.length>2,a=De(r[3]),s=De(r[2]),o=R.size(r)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],c=[r[0],r[1],r[2],r[3]/a],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];wi(t,f),f.push(...ie(u,d,c));let h=(s-1)*t.strides[1]+d[1],m=_=>{let b=ee("output",e[0].dataType,c.length,a),$=He(b.type.tensor),v=vi(t,b.type.value,$),w=D("x",e[0].dataType,u.length,a),I=D("w",e[1].dataType,d.length,a),k=[w,I];n&&k.push(D("b",e[2].dataType,e[2].dims,a));let T=n?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return $i(t,C),`
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${h};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:m}}}),ef,Ca,tf,za,gu,go,rf,nf,_u,Z1=U(()=>{oe(),H1(),j1(),nl(),K1(),Si(),il(),Gr(),ef=(e,t,r,i,n,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,d=t[0],c=t.slice(2).map((h,m)=>h+(h-1)*(r[m]-1)),f=o.map((h,m)=>h+i[m]+i[m+u]).map((h,m)=>Math.floor((h-c[m]+n[m])/n[m]));return f.splice(0,0,s),f.splice(a?3:1,0,d),f},Ca=[2,3,1,0],tf=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},za=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let i=e.pads.slice();is.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},gu=e=>{let t=el(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},go=(e,t,r,i)=>{let n=r.format==="NHWC",a=ef(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let C=[t[0]];if(n){let z=e.kernelCustomData.wT??e.compute(kt(t[1],Ca),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),C.push(z)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(w_(C,r,a,i),{inputs:C}):e.compute(v_(C,r,a,i),{inputs:C});return}let s=t.length===3,o=t[0].dims[n?1:2],u=t[0].dims[n?2:3],d=t[0].dims[n?3:1],c=t[1].dims[2],f=t[1].dims[3],h=a[n?1:2],m=a[n?2:3],_=a[n?3:1],b=n&&c===o&&f===u&&r.pads[0]===0&&r.pads[1]===0;if(b||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let C=a[0],z,x,N,P=[];if(n){let Z=e.kernelCustomData.wT??e.compute(kt(t[1],Ca),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Z),b){let B=o*u*d;z=t[0].reshape([1,C,B]),x=Z.reshape([1,B,_]),N=[1,C,_]}else z=t[0].reshape([C,o*u,d]),x=Z.reshape([1,d,_]),N=[C,h*m,_];P.push(z),P.push(x)}else z=t[0].reshape([C,d,o*u]),x=t[1].reshape([1,_,d]),N=[C,_,h*m],P.push(x),P.push(z);s&&P.push(t[2]);let F=N[2],j=P[0].dims[P[0].dims.length-1];F<8&&j<8?e.compute(rl(P,r,a,N,n,i),{inputs:P}):e.compute(as(P,r,a,N,n,i),{inputs:P});return}let $=!0,v=e.kernelCustomData.wT??e.compute(kt(t[1],Ca),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let w=[t[0],v];s&&w.push(t[2]);let I=n?h*m:_,k=n?_:h*m,T=c*f*d;e.compute(__(w,r,a,I,k,T,s,$,i),{inputs:w})},rf=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=za({...t,pads:n,strides:a,dilations:s,kernelShape:o},i);go(e,i,u,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},nf=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=za(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=y_(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,i);e.compute(b_(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},_u=(e,t)=>{if(tf(e.inputs,t),e.inputs[0].dims.length===3)rf(e,t);else if(e.inputs[0].dims.length===5)nf(e,e.inputs,t);else{let r=za(t,e.inputs);go(e,e.inputs,r)}}}),$_,X1=U(()=>{ne(),Ir(),oe(),le(),$_=(e,t,r)=>{let i=e.length>2,n=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,d=o[3],c=a?De(u):1,f=a&&d===1&&u>=4,h=f?Math.floor(u/4)*4:Math.floor(u/c)*c,m=u-h,_=a?De(d):1,b=a?d===1?c:_:1,$=R.size(n)/_,v=[Math.ceil($/64),1,1];we("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let w=["rank","rank"],I=[t.strides[0],t.strides[1]],k=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],T=[t.dilations[0],t.dilations[1]],C=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],z=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:$},{type:12,data:I},{type:12,data:k},{type:12,data:T},{type:12,data:C},{type:6,data:z},{type:12,data:h},{type:12,data:u},{type:12,data:d},...ie(e[0].dims,e[1].dims)];i&&(x.push(...ie(e[2].dims)),w.push("rank")),x.push(...ie(n));let N=P=>{let F=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:z.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],j=He(e[0].dataType),Z=a?1:2,B=a?2:3,Y=a?3:1,K=D("W",e[1].dataType,e[1].dims.length,b),J=D("Dy",e[0].dataType,e[0].dims.length,c),be=[J,K];i&&be.push(D("bias",e[2].dataType,[n[Y]].length,_));let L=ee("result",e[0].dataType,n.length,_),de=()=>{let Q="";if(f)c===4?Q+=`
        let xValue = ${J.getByOffset("x_offset")};
        let wValue = ${K.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?Q+=`
          dotProd = dotProd + dot(vec4<${j}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}), vec4<${j}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(Q+=`
          dotProd = dotProd + dot(vec4<${j}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}, ${J.getByOffset("x_offset + 2u")}, ${J.getByOffset("x_offset + 3u")}), vec4<${j}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}, ${K.getByOffset("w_offset + 2u")}, ${K.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Q+=`
                  let xValue = ${a?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):J.get("batch","inputChannel","idyR","idyC")};
        `,c===1)Q+=`
          let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${K.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let G=0;G<c;G++)Q+=`
            let wValue${G} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${G}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${G}] * wValue${G};`;return Q},W=()=>{if(m===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let Q="";if(c===1){Q+="dotProd = dotProd";for(let G=0;G<m;G++)Q+=`
            + ${J.getByOffset(`x_offset + ${G}`)} * ${K.getByOffset(`w_offset + ${G}`)}`;Q+=";"}else if(c===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);Q+=`
          let xValue = ${J.getByOffset("x_offset")};
          let wValue = ${K.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Q},H=`
            let outputIndices = ${L.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${L.indicesGet("outputIndices",0)};
            let d1 = ${L.indicesGet("outputIndices",Y)};
            let r = ${L.indicesGet("outputIndices",Z)};
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
              if (dyR < 0.0 || dyR >= ${j}(uniforms.Dy_shape[${Z}]) || fract(dyR) > 0.0 ||
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
                ${f?`
                var x_offset = ${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${K.indicesToOffset(`${K.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:c}) {
                  ${de()}
                  inputChannel = inputChannel + ${f?4:c};
                }
                ${W()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${L.setByOffset("global_idx","value")};
          `;return`
    ${P.registerUniforms(F).declareVariables(...be,L)}
      ${P.mainStart()}
      ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${H}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${b}${_}${f}${m}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:N}}}),af,sf,of,_o,x_,uf,yo,lf,S_,Y1=U(()=>{X1(),Si(),Gr(),af=(e,t,r,i,n,a)=>(e-1)*t+r+(i-1)*n+1-a,sf=(e,t,r,i,n)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=a,r[n]=e-a):t==="SAME_LOWER"&&(r[i]=e-a,r[n]=a)},of=(e,t,r,i,n,a,s,o,u,d)=>{let c=e.length-2,f=d.length===0;u.length<c&&u.push(...Array(c-u.length).fill(0));let h=e[0],m=t[o?3:1]*n;for(let _=0,b=e.length-c-(o?1:0);_<c;++_,++b){let $=e[b],v=f?$*s[_]:d[_],w=af($,s[_],a[_],t[b],r[_],v);sf(w,i,a,_,_+c),f&&d.push(s[_]*($-1)+u[_]+(t[b]-1)*r[_]+1-a[_]-a[_+c])}d.splice(0,0,h),d.splice(o?3:1,0,m)},_o=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,h)=>f*h,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;u=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}of(o,r,u,e.autoPad,e.group,n,d,i,s,a);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:n,outputPadding:s,outputShape:a,dilations:u,strides:d}),c},x_=e=>{let t=el(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,outputPadding:c,outputShape:f,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},uf=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},yo=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(kt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let a=[t[0],n];t.length===3&&a.push(t[2]),e.compute($_(a,r,i),{inputs:a})},lf=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),n=[1].concat(n);let u=t.outputPadding;u=[0].concat(u);let d=_o({...t,pads:o,strides:s,dilations:a,kernelShape:n,outputPadding:u},i);yo(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},S_=(e,t)=>{if(uf(e.inputs,t),e.inputs[0].dims.length===3)lf(e,t);else{let r=_o(t,e.inputs);yo(e,e.inputs,r)}}}),df,k_,I_,Q1=U(()=>{ne(),oe(),Le(),le(),df=(e,t,r,i)=>{let n=R.size(t),a=t.length,s=D("input",e,a),o=ee("output",e,a),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=R.normalizeAxis(u,a),c=f=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,m=te("uniforms.input_shape","uniforms.axis",a),_=i.reverse?h+(i.exclusive?" + 1":""):"0",b=i.reverse?m:h+(i.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...ie(t,t)]}),getShaderSource:c}},k_=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(df(i,r,n,t),{inputs:[0]})},I_=e=>{let t=e.exclusive===1,r=e.reverse===1;return Te({exclusive:t,reverse:r})}}),cf,pf,ff,T_,E_,J1=U(()=>{ne(),oe(),Le(),le(),cf=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},pf=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)n.push(r.indicesSet("a",e[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)},ff=(e,t)=>{let r,i,n,a,s,o,u=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";u?([r,i,n,a]=e.dims,s=c?[r,i,n,d,d,a/d**2]:[r,i,n,a/d**2,d,d],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,d,d,a/d**2,i,n]:[r,a/d**2,d,d,i,n],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),h=f.dims.length,m=e.dataType,_=D("a",m,h),b=ee("output",m,h),$=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,b)}

  ${pf(o,h,_,b)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let w=u?[r,i*d,n*d,a/d**2]:[r,a/d**2,i*d,n*d],I=R.size(w),k=f.dims,T=R.sortBasedOnPerm(k,o);return{outputs:[{dims:w,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...ie(k,T)]}},getShaderSource:$}},T_=(e,t)=>{cf(e.inputs),e.compute(ff(e.inputs[0],t))},E_=e=>Te({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Aa,xn,bo,hf,mf,gf,_f,vo,yf,C_,z_,e2=U(()=>{ne(),oe(),Le(),le(),Aa="[a-zA-Z]|\\.\\.\\.",xn="("+Aa+")+",bo="^"+xn+"$",hf="("+xn+",)*"+xn,mf="^"+hf+"$",gf=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},_f=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(mf)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(bo)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,o,s);this.lhs.push(u)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(xn)))throw new Error("Invalid RHS");(n=i.match(RegExp(Aa,"g")))==null||n.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,a=!1,s=[],o=0;if(!e.match(RegExp(bo))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Aa,"g")),d=new gf(i);return u==null||u.forEach((c,f)=>{if(c==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let h=n-u.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<s.length;m++){let _=String.fromCharCode(48+m);d.addSymbol(_,f+m),this.addSymbol(_,r[o++],i)}}else d.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[o++],i)}),d}},vo=e=>e+"_max",yf=(e,t,r,i)=>{let n=e.map(d=>d.length).map((d,c)=>D(`input${c}`,t,d)),a=R.size(i),s=ee("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),u=d=>{let c=[],f="var prod = 1.0;",h="var sum = 0.0;",m="sum += prod;",_=[],b=[],$=[],v=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,T)=>{var C;if(r.rhs.symbolToIndices.has(T)){let z=(C=r.rhs.symbolToIndices.get(T))==null?void 0:C[0];z!==void 0&&r.lhs.forEach((x,N)=>{if(k.inputIndices.includes(N)){let P=x.symbolToIndices.get(T);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(F=>{c.push(`${n[N].indicesSet(`input${N}Indices`,F,s.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,x)=>{if(k.inputIndices.includes(x)){let N=z.symbolToIndices.get(T);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(P=>{_.push(`${n[x].indicesSet(`input${x}Indices`,P,`${T}`)}`)}),v.push(`prod *= ${n[x].getByIndices(`input${x}Indices`)};`)}}),b.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${vo(T)}; ${T}++) {`),$.push("}")});let I=w?[...c,`let sum = ${n.map((k,T)=>k.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...c,h,...b,..._,f,...v,m,...$];return`
            ${d.registerUniforms(o.map(k=>({name:`${vo(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((k,T)=>`var input${T}Indices: ${n[T].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(f=>r.symbolToInfo.has(f)).map(f=>{var h;return{type:12,data:((h=r.symbolToInfo.get(f))==null?void 0:h.dimValue)||0}});d.push({type:12,data:a});let c=e.map((f,h)=>[...ie(f)]).reduce((f,h)=>f.concat(h),d);return c.push(...ie(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}},getShaderSource:u}},C_=(e,t)=>{let r=new _f(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((a,s)=>a.dims);e.compute(yf(n,e.inputs[0].dataType,r,i))},z_=e=>{let t=e.equation.replace(/\s+/g,"");return Te({equation:t})}}),bf,wo,vf,wf,A_,t2=U(()=>{ne(),oe(),le(),bf=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},wo=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},vf=(e,t)=>e.length>t.length?wo(e,t):wo(t,e),wf=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=vf(t,r),n=e[0].dataType,a=n===9||R.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||i.length>0&&i[i.length-1]%4===0?4:1,u=Math.ceil(R.size(i)/o),d=f=>{let h=D("input",n,t.length,s),m=ee("output",n,i.length,o),_;if(n===9){let b=($,v,w="")=>`
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
    ${_}`},c=[{type:12,data:u},...ie(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c})}},A_=e=>{bf(e.inputs),e.compute(wf(e.inputs),{inputs:[0]})}}),$f,O_,r2=U(()=>{ne(),oe(),le(),Ju(),$f=e=>{let t=e[0].dataType,r=R.size(e[0].dims),i=R.size(e[1].dims),n=i%4===0,a=s=>{let o=D("x",t,[1],4),u=D("bias",t,[1],4),d=ee("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,h=n?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(o,u,d)}

    ${pu(nt(t))}

    ${s.mainStart(Ji)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",fu("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Ji/4)}})}},O_=e=>{e.inputs.length<2||R.size(e.inputs[1].dims)===0?Q0(e):e.compute($f(e.inputs))}}),xf,Sf,B_,R_,i2=U(()=>{ne(),oe(),Le(),le(),xf=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Sf=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=R.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(a,1,...i);let o=r[a],u=e[0].dataType===9?4:1,d=Math.ceil(R.size(s)/u),c=[{type:12,data:d},{type:6,data:o},{type:12,data:a},...ie(e[0].dims,e[1].dims,s)],f=h=>{let m=D("data",e[0].dataType,e[0].dims.length,u),_=D("inputIndices",e[1].dataType,e[1].dims.length),b=ee("output",e[0].dataType,s.length,u),$=w=>{let I=i.length,k=`var indicesIndices${w}  = ${_.type.indices}(0);`;for(let T=0;T<I;T++)k+=`${I>1?`indicesIndices${w}[${T}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${T}]`:`outputIndices${w}`};`;k+=`
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
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,_,b)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:f}},B_=e=>Te({axis:e.axis}),R_=(e,t)=>{let r=e.inputs;xf(r),e.compute(Sf(e.inputs,t))}}),kf,N_,M_,n2=U(()=>{ne(),oe(),le(),kf=(e,t,r,i,n,a,s,o,u)=>{let d=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:u}],c=[a];d.push(...ie(t.dims,c));let f=h=>{let m=D("indices_data",t.dataType,t.dims.length),_=ee("input_slice_offsets_data",12,1,1),b=[m,_],$=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},N_=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,a=r[1].dims,s=a[a.length-1],o=R.sizeToDimension(a,a.length-1),u=R.sizeFromDimension(i,t.batchDims+s),d=R.sizeToDimension(i,t.batchDims),c=R.sizeFromDimension(i,t.batchDims),f=o/d,h=new Array(s),m=u;for(let k=0;k<s;++k)h[s-1-k]=m,m*=i[t.batchDims+s-1-k];let _=kf(e,r[1],h,t.batchDims,i,o,f,c,s),b=t.batchDims+s;if(b>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let $=a.slice(0,-1).concat(i.slice(b)),v=R.size($),w=[{type:12,data:v},{type:12,data:u},...ie(r[0].dims,_.dims,$)],I=k=>{let T=D("data",r[0].dataType,r[0].dims.length),C=D("slice_offsets",12,_.dims.length),z=ee("output",r[0].dataType,$.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,C,z)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:$,dataType:n}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:w}),getShaderSource:I},{inputs:[r[0],_]})},M_=e=>({batchDims:e.batch_dims,cacheKey:""})}),If,Tf,D_,P_,a2=U(()=>{ne(),oe(),Le(),le(),If=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=R.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==n.dims.length||!n.dims.map((o,u)=>u===r?Math.ceil(o/i)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Tf=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=R.normalizeAxis(t.gatherAxis,n),s=R.normalizeAxis(t.quantizeAxis,n),o=r.slice(0);o.splice(a,1,...i);let u=R.size(o),d=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...ie(...e.map((m,_)=>m.dims),o)],h=m=>{let _=D("data",e[0].dataType,e[0].dims.length),b=D("inputIndices",e[1].dataType,e[1].dims.length),$=D("scales",e[2].dataType,e[2].dims.length),v=e.length>3?D("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=ee("output",d,o.length),I=[_,b,$];v&&I.push(v);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
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
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${nt(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,_)=>_!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,_)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:h}},D_=(e,t)=>{let r=e.inputs;If(r,t),e.compute(Tf(e.inputs,t))},P_=e=>Te({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Ef,Cf,U_,L_,s2=U(()=>{ne(),oe(),Le(),le(),Ef=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Cf=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,a=e[1].dims,s=e[1].dataType,o=R.normalizeAxis(t.axis,n),u=r[o],d=a.slice(0),c=R.size(d),f=D("input",i,n),h=D("indicesInput",s,a.length),m=ee("output",i,d.length),_=[{type:12,data:c},{type:6,data:u},{type:12,data:o}];return _.push(...ie(r,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:b=>`
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
  }`}},U_=e=>Te({axis:e.axis}),L_=(e,t)=>{let r=e.inputs;Ef(r),e.compute(Cf(e.inputs,t))}}),zf,Af,W_,G_,o2=U(()=>{ne(),oe(),le(),zf=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Af=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,a,s]=Ug.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[n,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(a/u),c=Math.ceil(n/u),f=!0,h=R.size(o),m=[{type:12,data:f?d:h},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(m.push(...ie(e[2].dims)),_.push("rank")),m.push(...ie(o));let b=v=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",k=D("a",e[0].dataType,e[0].dims),T=D("b",e[1].dataType,e[1].dims),C=k.type.value,z=null,x=[k,T];e.length===3&&(z=D("c",e[2].dataType,e[2].dims.length),x.push(z));let N=ee("output",e[0].dataType,o.length);x.push(N);let P=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
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
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:m}),getShaderSource:$}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:b}},W_=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},G_=(e,t)=>{zf(e.inputs),e.compute(Af(e.inputs,t))}}),ir,hr,Kr,Zr,Of,Bf,Rf,Nf,Mf,Df,Pf,Uf,q_,V_,u2=U(()=>{ne(),oe(),Le(),le(),[ir,hr,Kr,Zr]=[0,1,2,3],Of=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Bf=`
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
`,Rf=e=>`
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
`,Nf=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Mf=e=>`
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
`,Df=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${ir}] = batch;
     indices[${hr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Kr}] = u32(r);
            indices[${Zr}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Kr}] = u32(clamp(r, 0, H - 1));
          indices[${Zr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Kr}] = gs_reflect(r, border[1], border[3]);
          indices[${Zr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Pf=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ir}], indices[${hr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ir}], indices[${hr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ir}], indices[${hr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ir}], indices[${hr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ir}], indices[${hr}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ir}], indices[${hr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Uf=(e,t)=>{let r=D("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=D("grid",e[1].dataType,i.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ir,hr,Kr,Zr]=[0,3,1,2]);let s=ee("output",e[0].dataType,a.length),o=r.type.value,u=R.size(a),d=[{type:12,data:u},...ie(e[0].dims,i,a)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${Bf}
  ${Rf(o)}
  ${Nf(t)}
  ${Mf(t)}
  ${Df(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Kr}]);
      let W_in = i32(uniforms.x_shape[${Zr}]);

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
      var grid_indices = vec3<u32>(indices[${ir}], indices[${Kr}], indices[${Zr}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Pf(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let h=R.size(a);return{outputs:[{dims:a,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:d}},getShaderSource:c}},q_=(e,t)=>{Of(e.inputs),e.compute(Uf(e.inputs,t))},V_=e=>Te({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ot,Lf,F_,$o,Wf,Dn,H_,j_=U(()=>{ne(),oe(),Le(),Zu(),Qu(),le(),Gr(),ot=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Lf=(e,t)=>{let r=e[0],i=ot(e,1),n=ot(e,2),a=ot(e,3),s=ot(e,4),o=ot(e,5),u=ot(e,6),d=ot(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],m=f,_=0,b=0,$=Math.floor(h/t.numHeads);if(u&&d&&R.size(u.dims)&&R.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[3]!==$)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==$)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=u.dims[2],b=u.dims[2]}else if(u&&R.size(u.dims)||d&&R.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&R.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,m=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,m=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,m=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(a&&R.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=_+m,I=0;if(s&&R.size(s.dims)>0){I=8;let z=s.dims;throw z.length===1?z[0]===c?I=1:z[0]===3*c+2&&(I=3):z.length===2&&z[0]===c&&z[1]===w&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,T=h;if(n&&R.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(m!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=n.dims[2]}else{if(m!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=n.dims[1]*n.dims[3],k=!0}}let C=!1;if(s&&R.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&R.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:h,vHiddenSize:T,headSize:$,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:C,passPastInKv:k,qkvFormat:v}},F_=e=>Te({...e}),$o=Te({perm:[0,2,1,3]}),Wf=(e,t,r,i,n,a,s)=>{let o=[i,n,a],u=R.size(o),d=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],c=f=>{let h=ee("qkv_with_bias",t.dataType,o),m=D("qkv",t.dataType,o),_=D("bias",r.dataType,o),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(b).declareVariables(m,_,h)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},Dn=(e,t,r,i,n,a,s,o)=>{let u=a;if(s&&R.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Wf(e,a,s,t,i,r*n,o),u=u.reshape([t,i,r,n]),r===1||i===1?u:e.compute(kt(u,$o.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,i,r,n])),r===1||i===1?u:e.compute(kt(u,$o.perm),{inputs:[u],outputs:[-1]})[0]},H_=(e,t)=>{let r=Lf(e.inputs,t),i=e.inputs[0],n=ot(e.inputs,1),a=ot(e.inputs,2),s=ot(e.inputs,3),o=ot(e.inputs,4),u=ot(e.inputs,5),d=ot(e.inputs,6),c=ot(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let f=n&&a&&n.dims.length===4&&a.dims.length===4,h=Dn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(f)return Fn(e,h,n,a,o,void 0,d,c,u,r);if(!n||!a)throw new Error("key and value must be provided");let m=Dn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),_=Dn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);Fn(e,h,m,_,o,void 0,d,c,u,r)}}),Gf,qf,Vf,Ff,yu,K_,Z_,X_=U(()=>{ne(),oe(),Le(),le(),Gf=e=>{if(!e||e.length<1)throw new Error("too few inputs")},qf=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),Te({numOutputs:i,axis:t.axis,splitSizes:r})},Vf=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${te("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ff=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},yu=(e,t)=>{let r=e[0].dims,i=R.size(r),n=e[0].dataType,a=R.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=D("input",n,r.length),u=new Array(t.numOutputs),d=[],c=[],f=0,h=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){f+=t.splitSizes[_],u[_]=f;let b=r.slice();b[a]=t.splitSizes[_],c.push(b),s[_]=ee(`output${_}`,n,b.length),d.push({dims:c[_],dataType:e[0].dataType})}h.push({type:12,data:u},...ie(r,...c));let m=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${Vf(u.length)}
  ${Ff(s)}

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
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h})}},K_=(e,t)=>{Gf(e.inputs);let r=e.inputs.length===1?t:qf(e.inputs,t);e.compute(yu(e.inputs,r),{inputs:[0]})},Z_=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return Te({axis:t,numOutputs:i,splitSizes:r})}}),Hf,ss,Y_,Q_=U(()=>{ne(),oe(),Le(),le(),Hf=(e,t)=>{let[r,i,n,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!R.areEqual(i.dims,[])&&!R.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!R.areEqual(n.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],d=r.dims[r.dims.length-2],c=n.dims[0],f=R.sizeFromDimension(r.dims,1)/d,h=o===0?n.dims[1]*2:f/s;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(u!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==n.dims[1]&&o/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`)},ss=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:a}=t,s=e[0].dims[0],o=R.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,c=e[2].dims[1],f=n===0?c*2:d/i,h=new Array(s,u,d/f,f-c),m=R.computeStrides(h),_=[{type:1,data:a},{type:12,data:h},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,u*f,1]}):[],...ie(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=$=>{let v=D("input",e[0].dataType,e[0].dims.length),w=D("position_ids",e[1].dataType,e[1].dims.length),I=D("cos_cache",e[2].dataType,e[2].dims.length),k=D("sin_cache",e[3].dataType,e[3].dims.length),T=ee("output",e[0].dataType,e[0].dims.length);return $.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${$.declareVariables(v,w,I,k,T)}

        ${$.mainStart(Ji)}
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
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Te({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(h)/Ji)},programUniforms:_})}},Y_=(e,t)=>{Hf(e.inputs,t),e.compute(ss(e.inputs,t))}}),jf,Kf,xo,Zf,J_,l2=U(()=>{Le(),ne(),Qu(),j_(),X_(),Gr(),Q_(),le(),jf=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=r.dims[0],d=r.dims[1],c=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,h=0,m=!i||i.dims.length===0,_=Math.floor(m?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);m&&(c=_*t.numHeads);let b=a&&a.dims.length!==0,$=s&&s.dims.length!==0;if(b&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&$){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=a.dims[2]}else if(b||$)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let w=0,I=!1,k=t.kvNumHeads?_*t.kvNumHeads:c;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(f!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=n.dims[2]}else{if(f!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=n.dims[1]*n.dims[3],I=!0}}let T=e.length>4?e[5]:void 0;if(T){if(T.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=T.dims.reduce((z,x)=>z*x,1);if(C!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${C}.`);for(let z=0;z<T.dims.length;z++)if(T.dims[z]!==1&&T.dims[z]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${z}] = ${T.dims[z]}.`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:h,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:k,headSize:_,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:v}},Kf=Te({perm:[0,2,1,3]}),xo=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(kt(i,Kf.perm),{inputs:[i],outputs:[-1]})[0]),i},Zf=(e,t,r,i)=>{let n=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=c=>{let f=D("seq_lens",r.dataType,r.dims),h=D("total_seq_lens",i.dataType,i.dims),m=ee("pos_ids",n,s),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(_).declareVariables(f,h,m)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},J_=(e,t)=>{var k;let r=jf(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((k=e.inputs[1])==null?void 0:k.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=Te({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[h,m,_]=!n&&!a?e.compute(yu([i],f),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,a],b,$;if(t.doRotary){let T=e.compute(Zf(r.batchSize,r.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],C=e.inputs[7],z=e.inputs[8],x=Te({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),N=[h,T,C,z],P=[-1];b=e.compute(ss(N,x),{inputs:N,outputs:P})[0],N.splice(0,1,m);let F=Te({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});$=e.compute(ss(N,F),{inputs:N,outputs:P})[0]}let v=Dn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?b:h,void 0,0),w=xo(e,t.doRotary?$:m,r),I=xo(e,_,r);Fn(e,v,w,I,void 0,void 0,s,o,void 0,r,u,d)}}),So,Xf,Yf,ey,d2=U(()=>{ne(),oe(),Gr(),le(),So=(e,t,r,i,n,a,s,o)=>{let u=De(a),d=u===1?"f32":`vec${u}f`,c=u===1?"vec2f":`mat2x${u}f`,f=n*s,h=64;f===1&&(h=256);let m=[n,s,a/u],_=[n,s,2],b=["rank","type","type"],$=[];$.push(...ie(m,_));let v=w=>{let I=D("x",t.dataType,3,u),k=D("scale",r.dataType,r.dims),T=D("bias",i.dataType,i.dims),C=ee("output",1,3,2),z=[I,k,T,C];return`
  var<workgroup> workgroup_shared : array<${c}, ${h}>;
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
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Wr("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Wr("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${h}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:f},programUniforms:$}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},Xf=(e,t,r)=>{let i=t[0].dims,n=i,a=2,s=i[0],o=i[1],u=R.sizeFromDimension(i,a),d=De(u),c=R.size(n)/d,f=So(e,t[0],t[1],t[2],s,u,o,r.epsilon),h=[s,o,u/d],m=[s,o],_=["type","none"],b=$=>{let v=D("x",t[0].dataType,h.length,d),w=D("scale_shift",1,m.length,2),I=ee("output",t[0].dataType,h.length,d),k=[v,w,I];return`
  ${$.registerUniform("output_size","u32").declareVariables(...k)}
  ${$.mainStart()}
  ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...ie(h,m,h)]}),getShaderSource:b},{inputs:[t[0],f]})},Yf=(e,t,r)=>{let i=t[0].dims,n=i,a=i[0],s=i[i.length-1],o=R.sizeFromDimension(i,1)/s,u=De(s),d=R.size(n)/u,c=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],f=["type","type"],h=!1,m=[0,i.length-1];for(let v=0;v<i.length-2;v++)h=h||i[v+1]!==1,m.push(v+1);h=h&&i[i.length-1]!==1;let _=h?e.compute(kt(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,w)=>i[m[w]])),b=So(e,_,t[1],t[2],a,o,s,r.epsilon),$=v=>{let w=He(t[0].dataType),I=u===1?"vec2f":`mat${u}x2f`,k=z=>{let x=z===0?"x":"y",N=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${w}(${N}(scale.${x}))`;case 2:return`vec2<${w}>(${N}(scale[0].${x}, scale[1].${x}))`;case 4:return`vec4<${w}>(${N}(scale[0].${x}, scale[1].${x}, scale[2].${x}, scale[3].${x}))`;default:throw new Error(`Not supported compoents ${u}`)}},T=D("input",t[0].dataType,t[0].dims,u),C=ee("output",t[0].dataType,n,u);return`
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
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:$},{inputs:[t[0],b]})},ey=(e,t)=>{t.format==="NHWC"?Yf(e,e.inputs,t):Xf(e,e.inputs,t)}}),Qf,Jf,ty,c2=U(()=>{ne(),oe(),le(),Qf=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Jf=(e,t,r)=>{let i=t.simplified,n=e[0].dims,a=e[1],s=!i&&e[2],o=n,u=R.normalizeAxis(t.axis,n.length),d=R.sizeToDimension(n,u),c=R.sizeFromDimension(n,u),f=R.size(a.dims),h=s?R.size(s.dims):0;if(f!==c||s&&h!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${h}`);let m=[];for(let T=0;T<n.length;++T)T<u?m.push(n[T]):m.push(1);let _=De(c),b=["type","type"],$=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/_)},{type:1,data:t.epsilon}];s&&b.push("type");let v=r>1,w=r>2,I=T=>{let C=He(e[0].dataType),z=[D("x",e[0].dataType,e[0].dims,_),D("scale",a.dataType,a.dims,_)];s&&z.push(D("bias",s.dataType,s.dims,_)),z.push(ee("output",e[0].dataType,o,_)),v&&z.push(ee("mean_data_output",1,m)),w&&z.push(ee("inv_std_output",1,m));let x=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(x).declareVariables(...z)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${lu("f32",_)};
    var mean_square_vector = ${lu("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ni(C,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Wr("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Wr("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ni(C,_,"x[j + offset]")};
      let f32scale = ${Ni(C,_,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Ni(C,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:o,dataType:e[0].dataType}];return v&&k.push({dims:m,dataType:1}),w&&k.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:b},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:$}),getShaderSource:I}},ty=(e,t)=>{Qf(e.inputs),e.compute(Jf(e.inputs,t,e.outputCount))}}),eh,ry,p2=U(()=>{oe(),il(),nl(),eh=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},ry=e=>{eh(e.inputs);let t=Qi.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(rl(e.inputs,{activation:""},t));else{let n=t[t.length-2],a=R.size(e.inputs[0].dims.slice(0,-2)),s=R.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&n===1&&s===1){let o=e.inputs[0].reshape([1,a,i]),u=e.inputs[1].reshape([1,i,r]),d=[1,a,r],c=[o,u];e.compute(as(c,{activation:""},t,d),{inputs:c})}else e.compute(as(e.inputs,{activation:""},t))}}}),th,rh,ih,iy,ny,f2=U(()=>{ne(),oe(),Le(),le(),th=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!R.areEqual(s.dims,[t.n,n,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(R.size(o)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(R.size(u)!==d)throw new Error("zeroPoints input size error.")}},rh=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),u=R.size(o),d=e[1].dims[2]/4,c=e[0].dataType,f=De(t.k),h=De(d),m=De(s),_=o.concat([n,s]),b=n>1&&s/m%2===0?2:1,$=R.size(_)/m/b,v=64,w=[],I=[u,n,a/f],k=R.convertShape(e[1].dims).slice();k.splice(-1,1,d/h),w.push(...ie(I)),w.push(...ie(k)),w.push(...ie(e[2].dims)),e.length===4&&w.push(...ie(R.convertShape(e[3].dims)));let T=[u,n,s/m];w.push(...ie(T));let C=z=>{let x=I.length,N=D("a",e[0].dataType,x,f),P=D("b",12,k.length,h),F=D("scales",e[2].dataType,e[2].dims.length),j=[N,P,F],Z=e.length===4?D("zero_points",12,e[3].dims.length):void 0;Z&&j.push(Z);let B=T.length,Y=ee("output",e[0].dataType,B,m),K=He(e[0].dataType),J=(()=>{switch(f){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${f}-component is not supported.`)}})(),be=Math.floor(32/t.bits),L=Math.floor(be/8),de=()=>{let Q="";for(let G=0;G<L;G++){let Se=G*t.bits*4,dt=Se+t.bits;Q+=`
          // reuse a data (pass ${G})
            var input_offset${G>0?G:""} = ${G===0?N.indicesToOffset(`${N.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${G>0?G:""}: ${J};
            for (var j${G>0?G:""}: u32 = 0; j${G>0?G:""} < ${8/f}; j${G>0?G:""}++) {
              a_data${G>0?G:""}[j${G>0?G:""}] = ${N.getByOffset(`input_offset${G>0?G:""}`)};
              input_offset${G>0?G:""}++;
            }
          `;for(let Pe=0;Pe<m*b;Pe++)Q+=`
            b_value = ${h===1?`b${Pe}_data`:`b${Pe}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${G*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${Se}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${dt}u) & b_mask);`}
            b_quantized_values = ${J}(${Array.from({length:4},(rt,Xe)=>`${K}(b_value_lower[${Xe}]), ${K}(b_value_upper[${Xe}])`).join(", ")});
            b_dequantized_values = ${f===1?`${J}(${Array.from({length:8},(rt,Xe)=>`(b_quantized_values[${Xe}] - ${Z?`zero_point${Pe}`:"zero_point"}) * scale${Pe}`).join(", ")});`:`(b_quantized_values - ${J}(${Array(8).fill(`${Z?`zero_point${Pe}`:"zero_point"}`).join(",")})) * scale${Pe};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(Pe/m)}]${m>1?`[${Pe%m}]`:""} += ${Array.from({length:8/f},(rt,Xe)=>`${f===1?`a_data${G>0?G:""}[${Xe}] * b_dequantized_values[${Xe}]`:`dot(a_data${G>0?G:""}[${Xe}], b_dequantized_values[${Xe}])`}`).join(" + ")};
          `}return Q},W=()=>{let Q=`
            var col_index = col * ${m};
            ${Z?`
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
            ${Z?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${Z.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
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
        var<workgroup> workgroup_shared: array<${Y.type.value}, ${b*v}>;
        ${z.declareVariables(...j,Y)}
        ${z.mainStart([v,1,1])}
          let output_indices = ${Y.offsetToIndices(`(global_idx / ${v}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${W()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${H()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${de()}
                word_offset += ${be/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${Y.type.value} = ${Y.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${Y.setByIndices(`${Y.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${h};${m};${b};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:$},programUniforms:w}),getShaderSource:C}},ih=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),u=R.size(o),d=e[1].dims[2]/4,c=e[0].dataType,f=De(t.k),h=De(d),m=o.concat([n,s]),_=128,b=s%8===0?8:s%4===0?4:1,$=_/b,v=Math.floor(32/t.bits),w=$*h*v,I=w/f,k=w/t.blockSize,T=R.size(m)/b,C=[],z=[u,n,a/f],x=R.convertShape(e[1].dims).slice();x.splice(-1,1,d/h),C.push(...ie(z)),C.push(...ie(x)),C.push(...ie(e[2].dims)),e.length===4&&C.push(...ie(R.convertShape(e[3].dims)));let N=[u,n,s];C.push(...ie(N));let P=F=>{let j=z.length,Z=D("a",e[0].dataType,j,f),B=D("b",12,x.length,h),Y=D("scales",e[2].dataType,e[2].dims.length),K=[Z,B,Y],J=e.length===4?D("zero_points",12,e[3].dims.length):void 0;J&&K.push(J);let be=N.length,L=ee("output",e[0].dataType,be),de=He(e[0].dataType),W=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${de}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${de}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${de}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${de}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${Z.type.value}, ${I}>;
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
                sub_a[a_offset] = ${Z.getByIndices(`${Z.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${Z.type.value}(0);
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
            let scale = ${Y.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${B.getByIndices(`${B.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let H=Math.floor(v/8),Q="";for(let G=0;G<H;G++){let Se=G*t.bits*4,dt=Se+t.bits;Q+=`
              ${W()}
              {${t.bits===2?`
                let half_word = b_value >> ${G*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${Se}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${dt}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${de}>(${Array.from({length:4},(Pe,rt)=>`${de}(b_value_lower[${rt}]), ${de}(b_value_upper[${rt}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${de}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Pe,rt)=>`${`dot(a_data${rt}, b_dequantized_values[${rt}])`}`).join(" + ")};
              }
              word_offset += ${8/f};`}return Q})()}
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${h};${$};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:T},programUniforms:C}),getShaderSource:P}},iy=(e,t)=>{th(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(ih(e.inputs,t)):e.compute(rh(e.inputs,t))},ny=e=>Te(e)}),nh,ah,sh,oh,uh,lh,dh,ch,ay,h2=U(()=>{ne(),oe(),le(),nh=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},ah=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
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
      `},sh=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
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
          `},oh=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
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
          `},uh=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
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
          `},lh=(e,t,r)=>{switch(r.mode){case 0:return ah(e,t,r.pads.length);case 1:return sh(e,t,r.pads.length);case 2:return oh(e,t,r.pads.length);case 3:return uh(e,t,r.pads.length);default:throw new Error("Invalid mode")}},dh=(e,t)=>{let r=R.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=R.size(r),a=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...ie(e[0].dims,r));let o=["rank"],u=d=>{let c=ee("output",e[0].dataType,r.length),f=D("x",e[0].dataType,i.length),h=f.type.value,m=lh(c,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:s?h:"f32"}),`
            ${d.registerUniforms(_).declareVariables(f,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(r)/64)},programUniforms:a}),getShaderSource:u}},ch=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,a=new Int32Array(2*n).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(r[u]),a[Number(o[u])+n]=Number(r[u+o.length])}else r.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:i,pads:s}}else return t},ay=(e,t)=>{nh(e.inputs);let r=ch(e.inputs,t);e.compute(dh(e.inputs,r),{inputs:[0]})}}),Sn,ko,Io,To,Eo,ph,fh,Co,zo,sy,oy,Ao,uy,ly,Oo,dy,cy,py,fy,m2=U(()=>{Mt(),ne(),oe(),le(),Sn=e=>{if(xe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},ko=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],d=t.pads.slice();is.adjustPoolAttributes(r,n,s,o,u,d);let c=is.computePoolOutputShape(r,n,o,u,s,d,t.autoPad),f=Object.assign({},t);a?Object.assign(f,{kernelShape:s,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let h=c.slice();return h.push(h.splice(1,1)[0]),[f,i?h:c]},Io=(e,t)=>{let r=t.format==="NHWC",i=R.size(e),n=R.size(t.kernelShape),a=[{type:12,data:i},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(d+c);a.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],$=t.pads[t.pads.length-2];h=!!(b+$),a.push({type:12,data:m},{type:12,data:_},{type:12,data:b},{type:12,data:$}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,f,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=R.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,c)=>d+c);return[a,s,!!u,!1,!1]}},To=(e,t,r,i,n,a,s,o,u,d,c,f)=>{let h=n.format==="NHWC",m=t.type.value,_=ee("output",t.type.tensor,i);if(n.kernelShape.length<=2){let b="",$="",v="",w=r-(h?2:1);if(c?b=`
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
            }`}},Eo=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,ph=e=>`${Eo(e)};${e.countIncludePad}`,fh=e=>`${Eo(e)};${e.storageOrder};${e.dilations}`,Co=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),zo=(e,t,r,i)=>{let[n,a]=ko(t,i,r),s=D("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",d="";n.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,f,h,m,_]=Io(a,n);c.push(...ie(t.dims,a));let b=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${h};${m};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:c}),getShaderSource:$=>To($,s,t.dims.length,a.length,n,u,d,0,f,h,m,_)}},sy=e=>{let t=e.count_include_pad!==0,r=Co(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:ph(i)}},oy=(e,t)=>{Sn(e.inputs),e.compute(zo("AveragePool",e.inputs[0],!1,t))},Ao={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},uy=e=>{let t=e.format;return{format:t,...Ao,cacheKey:t}},ly=(e,t)=>{Sn(e.inputs),e.compute(zo("GlobalAveragePool",e.inputs[0],!0,t))},Oo=(e,t,r,i)=>{let[n,a]=ko(t,i,r),s=`
      value = max(x_val, value);
    `,o="",u=D("x",t.dataType,t.dims.length),d=["rank"],[c,f,h,m,_]=Io(a,n);return c.push(...ie(t.dims,a)),{name:e,shaderCache:{hint:`${i.cacheKey};${h};${m};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:c}),getShaderSource:b=>To(b,u,t.dims.length,a.length,n,s,o,t.dataType===10?-65504:-1e5,f,h,m,_)}},dy=(e,t)=>{Sn(e.inputs),e.compute(Oo("MaxPool",e.inputs[0],!1,t))},cy=e=>{let t=e.storage_order,r=e.dilations,i=Co(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:fh(n)}},py=e=>{let t=e.format;return{format:t,...Ao,cacheKey:t}},fy=(e,t)=>{Sn(e.inputs),e.compute(Oo("GlobalMaxPool",e.inputs[0],!0,t))}}),hh,mh,hy,my,g2=U(()=>{ne(),oe(),Le(),le(),hh=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,a)=>a===t.axis||n===e[0].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},mh=(e,t)=>{let r=R.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,a=e[0].dims,s=e[1].dataType,o=R.size(a),u=i===3||i===2,d=u?[Math.ceil(R.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,h=f?u?[Math.ceil(R.size(f.dims)/4)]:f.dims:void 0,m=c.length===0||c.length===1&&c[0]===1,_=m===!1&&c.length===1,b=De(o),$=m&&(!u||b===4),v=$?b:1,w=$&&!u?b:1,I=D("input",u?12:i,d.length,w),k=D("scale",s,c.length),T=f?D("zero_point",u?12:i,h.length):void 0,C=ee("output",s,a.length,v),z=[I,k];T&&z.push(T);let x=[d,c];f&&x.push(h);let N=[{type:12,data:o/v},{type:12,data:r},{type:12,data:t.blockSize},...ie(...x,a)],P=F=>{let j=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:P,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/v/64),y:1,z:1},programUniforms:N})}},hy=(e,t)=>{hh(e.inputs,t),e.compute(mh(e.inputs,t))},my=e=>Te({axis:e.axis,blockSize:e.blockSize})}),gh,_h,gy,_2=U(()=>{Mt(),ne(),le(),gh=(e,t,r)=>{let i=e===t,n=e<t&&r<0,a=e>t&&r>0;if(i||n||a)throw new Error("Range these inputs' contents are invalid.")},_h=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),a=[n],s=n,o=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...ie(a)],u=d=>{let c=ee("output",i,a.length),f=c.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(h).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},gy=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),xe.webgpu.validateInputContent&&gh(t,r,i),e.compute(_h(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),yh,bh,_y,yy,y2=U(()=>{ne(),oe(),Le(),le(),yh=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
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
                ${n}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${a}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},bh=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,a=1,s=Math.ceil(R.sizeToDimension(i,i.length-1)/a),o=i[i.length-1],u=R.sizeFromDimension(r,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...ie(e[1].dims,e[2].dims,n)],c=f=>{let h=D("indices",e[1].dataType,e[1].dims.length),m=D("updates",e[2].dataType,e[2].dims.length,a),_=t.reduction!=="none"&&t.reduction!==""?Hg("output",e[0].dataType,n.length):ee("output",e[0].dataType,n.length,a);return`
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
    ${yh(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:c}},_y=e=>Te({reduction:e.reduction}),yy=(e,t)=>{e.compute(bh(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),vh,wh,$h,Bo,xh,Sh,kh,Ih,Th,Eh,Ch,zh,Ro,Ah,Oh,Bh,Rh,Nh,by,vy,b2=U(()=>{ne(),oe(),Le(),le(),vh=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},wh=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,a)=>i[n]=e[a]),i},$h=(e,t,r,i,n,a)=>{let[s,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>a.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");vh(i,t),t.axes.length>0&&wh(i,t.axes,d).forEach((c,f)=>i[f]=c)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(c=>n.push(Number(c))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Bo=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,xh=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Bo("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Bo("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Sh=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",kh=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((a,s)=>{i[a]=n[s],i[s+r]=n[t.length+s]}),i):n},Ih=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(a=>n.push(a)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((a,s)=>n[a]=r[s])}else r.forEach(a=>n.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((a,s)=>Math.round(a*t[s]))}return n},Th=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=i),r.axes.forEach(a=>n[a]=Math.round(e[a]*t[a]))):(t.fill(i,0,t.length),n.forEach((a,s)=>n[s]=Math.round(a*t[s]))),n},Eh=(e,t,r,i,n)=>`
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
    }`,Ch=(e,t,r,i,n,a,s)=>`
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
    }`,zh=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${te("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ro=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Ah=(e,t,r,i,n)=>{let[a,s,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Ro(e,u,a,2)}
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
    }`},Oh=(e,t,r,i,n,a,s,o,u,d)=>{let c=r.length===2,[f,h]=c?[0,1]:[2,3],m=e.type.value,_=b=>{let $=b===f?"row":"col";return`
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
    `},Bh=(e,t,r,i,n)=>{let[a,s,o,u,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${Ro(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${o}];
      var width:${c} = originalIndices[${u}];
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

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
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
    }`},Rh=(e,t,r,i,n,a)=>{let s=e.dims,o=kh(a,t.axes,s.length),u=Ih(s,i,n,t.axes),d=i.slice();i.length===0&&(d=s.map((w,I)=>w===0?1:u[I]/w),t.keepAspectRatioPolicy!=="stretch"&&(u=Th(s,d,t)));let c=ee("output",e.dataType,u.length),f=D("input",e.dataType,s.length),h=R.size(u),m=s.length===u.length&&s.every((w,I)=>w===u[I]),_=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,$=f.type.value,v=w=>`
      ${m?"":`
      ${xh(t.coordinateTransformMode,$)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${zh(f,s)};
              ${Sh(t.nearestMode,r,$)};
              ${Ch(f,c,s,u,d.length,o.length,_)};
              `;case"linear":return`
              ${Eh(c,s,u,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Ah(f,c,s,_,b)}`;if(s.length===3||s.length===5)return`${Bh(f,c,s,_,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Oh(f,c,s,u,d,o,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(f,c)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:o},...ie(s,u)]})}},Nh=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},by=(e,t)=>{let r=[],i=[],n=[],a=Nh(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");$h(e.inputs,t,a,r,i,n),e.compute(Rh(e.inputs[0],t,a,r,i,n),{inputs:[0]})},vy=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return Te({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),Mh,Dh,wy,v2=U(()=>{ne(),oe(),le(),Mh=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},Dh=(e,t,r,i)=>{let n=t.simplified,a=e[0].dims,s=R.size(a),o=a,u=s,d=a.slice(-1)[0],c=i?a.slice(0,-1).concat(1):[],f=!n&&e.length>3,h=e.length>4,m=i&&r>1,_=i&&r>2,b=r>3,$=64,v=De(d),w=[{type:12,data:u},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],I=T=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[D("x",e[0].dataType,e[0].dims,v),D("skip",e[1].dataType,e[1].dims,v),D("gamma",e[2].dataType,e[2].dims,v)];f&&z.push(D("beta",e[3].dataType,e[3].dims,v)),h&&z.push(D("bias",e[4].dataType,e[4].dims,v)),z.push(ee("output",e[0].dataType,o,v)),m&&z.push(ee("mean_output",1,c)),_&&z.push(ee("inv_std_output",1,c)),b&&z.push(ee("input_skip_bias_sum",e[0].dataType,o,v));let x=He(e[0].dataType),N=He(1,v);return`

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
          let f32_value = ${Ni(x,v,"value")};
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
        let mean = ${Wr("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Wr("square_sum",v)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${x}(mean)`}) *
            ${x}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:o,dataType:e[0].dataType}];return r>1&&k.push({dims:c,dataType:1}),r>2&&k.push({dims:c,dataType:1}),r>3&&k.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${m};${_};${b}`,inputDependencies:e.map((T,C)=>"type")},getShaderSource:I,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:w})}},wy=(e,t)=>{Mh(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Dh(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Ph,kn,Uh,No,Lh,Wh,$y,xy,w2=U(()=>{ne(),oe(),Le(),le(),Ph=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},kn=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Uh=(e,t)=>{if(e.length>1){let r=kn(e,1),i=kn(e,2),n=kn(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),Te({starts:r,ends:i,axes:n})}else return t},No=(e,t,r,i,n)=>{let a=e;return e<0&&(a+=r[i[t]]),n[t]<0?Math.max(0,Math.min(a,r[i[t]]-1)):Math.max(0,Math.min(a,r[i[t]]))},Lh=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,Wh=(e,t)=>{let r=e[0].dims,i=R.size(r),n=t.axes.length>0?R.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=kn(e,4);a.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(n.length).fill(1));let s=t.starts.map((v,w)=>No(v,w,r,n,a)),o=t.ends.map((v,w)=>No(v,w,r,n,a));if(n.length!==s.length||n.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let v=0;v<r.length;++v)n.includes(v)||(s.splice(v,0,0),o.splice(v,0,r[v]),a.splice(v,0,1));let u=a.map(v=>Math.sign(v));a.forEach((v,w,I)=>{if(v<0){let k=(o[w]-s[w])/v,T=s[w],C=T+k*a[w];s[w]=C,o[w]=T,I[w]=-v}});let d=r.slice(0);n.forEach((v,w)=>{d[v]=Math.ceil((o[v]-s[v])/a[v])});let c={dims:d,dataType:e[0].dataType},f=ee("output",e[0].dataType,d.length),h=D("input",e[0].dataType,e[0].dims.length),m=R.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],b=[{type:12,data:m},{type:12,data:s},{type:6,data:u},{type:12,data:a},...ie(e[0].dims,d)],$=v=>`
      ${v.registerUniforms(_).declareVariables(h,f)}
        ${Lh(h,f,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:b})}},$y=(e,t)=>{Ph(e.inputs,t);let r=Uh(e.inputs,t);e.compute(Wh(e.inputs,r),{inputs:[0]})},xy=e=>{let t=e.starts,r=e.ends,i=e.axes;return Te({starts:t,ends:r,axes:i})}}),Gh,qh,Sy,ky,$2=U(()=>{ne(),oe(),Le(),Gr(),le(),Gh=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},qh=(e,t)=>{let r=e.inputs[0],i=r.dims,n=R.size(i),a=i.length,s=R.normalizeAxis(t.axis,a),o=s<i.length-1,u,d=[];o?(d=Array.from({length:a},(z,x)=>x),d[s]=a-1,d[a-1]=s,u=e.compute(kt(r,d),{inputs:[r],outputs:[-1]})[0]):u=r;let c=u.dims,f=c[a-1],h=n/f,m=De(f),_=f/m,b=64;h===1&&(b=256);let $=(z,x)=>x===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:x===2?`max(${z}.x, ${z}.y)`:x===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,v=D("x",u.dataType,u.dims,m),w=ee("result",u.dataType,u.dims,m),I=v.type.value,k=He(u.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,T=z=>`
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
          rowSumShared = ${I}(${Wr("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${m};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:u.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:_}]}),getShaderSource:T},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(kt(C,d),{inputs:[C]})},Sy=(e,t)=>{Gh(e.inputs),qh(e,t)},ky=e=>Te({axis:e.axis})}),Mo,Vh,Fh,Hh,Iy,x2=U(()=>{ne(),oe(),le(),Mo=e=>Array.from(e.getBigInt64Array(),Number),Vh=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Mo(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Fh=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Hh=(e,t)=>{let r=e[0].dims,i=t??Mo(e[1]),n=Fh(r,i),a=R.size(n),s=e[0].dataType,o=D("input",s,r.length),u=ee("output",s,n.length),d=c=>`
      const inputShape = ${o.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(o,u)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ie(e[0].dims,n)]}),getShaderSource:d}},Iy=e=>{Vh(e.inputs),e.compute(Hh(e.inputs),{inputs:[0]})}}),jh,Kh,Ty,S2=U(()=>{ne(),oe(),le(),jh=(e,t,r,i,n)=>{let a=ee("output_data",n,r.length,4),s=D("a_data",t[1].dataType,t[1].dims.length,4),o=D("b_data",t[2].dataType,t[2].dims.length,4),u=D("c_data",t[0].dataType,t[0].dims.length,4),d,c=(f,h,m)=>`select(${h}, ${f}, ${m})`;if(!i)d=a.setByOffset("global_idx",c(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let f=(h,m,_="")=>{let b=`a_data[index_a${m}][component_a${m}]`,$=`b_data[index_b${m}][component_b${m}]`,v=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
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
            ${h}[${m}] = ${_}(${c(b,$,v)});
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
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Kh=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,a=!(R.areEqual(t,r)&&R.areEqual(r,i)),s=t,o=R.size(t);if(a){let d=Qi.calcShape(Qi.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=R.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>jh(d,e,s,a,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...ie(i,t,r,s)]})}},Ty=e=>{e.compute(Kh(e.inputs))}}),Ey,k2=U(()=>{U1(),Qu(),L1(),W1(),G1(),q1(),V1(),Z1(),Y1(),Q1(),J1(),e2(),t2(),r2(),i2(),n2(),a2(),s2(),o2(),u2(),l2(),d2(),c2(),p2(),f2(),j_(),h2(),m2(),g2(),_2(),y2(),Yu(),b2(),Q_(),v2(),w2(),$2(),X_(),x2(),Gr(),Ju(),S2(),Ey=new Map([["Abs",[w0]],["Acos",[$0]],["Acosh",[x0]],["Add",[i_]],["ArgMax",[_0,cu]],["ArgMin",[g0,cu]],["Asin",[S0]],["Asinh",[k0]],["Atan",[I0]],["Atanh",[T0]],["Attention",[y0]],["AveragePool",[oy,sy]],["BatchNormalization",[b0]],["BiasAdd",[v0]],["BiasSplitGelu",[r_]],["Cast",[C0,E0]],["Ceil",[A0]],["Clip",[z0]],["Concat",[f_,h_]],["Conv",[_u,gu]],["ConvTranspose",[S_,x_]],["Cos",[O0]],["Cosh",[B0]],["CumSum",[k_,I_]],["DepthToSpace",[T_,E_]],["DequantizeLinear",[hy,my]],["Div",[n_]],["Einsum",[C_,z_]],["Elu",[R0,Mn]],["Equal",[a_]],["Erf",[N0]],["Exp",[M0]],["Expand",[A_]],["FastGelu",[O_]],["Floor",[D0]],["FusedConv",[_u,gu]],["Gather",[R_,B_]],["GatherElements",[L_,U_]],["GatherBlockQuantized",[D_,P_]],["GatherND",[N_,M_]],["Gelu",[P0]],["Gemm",[G_,W_]],["GlobalAveragePool",[ly,uy]],["GlobalMaxPool",[fy,py]],["Greater",[l_]],["GreaterOrEqual",[c_]],["GridSample",[q_,V_]],["GroupQueryAttention",[J_]],["HardSigmoid",[H0,F0]],["InstanceNormalization",[ey]],["LayerNormalization",[ty]],["LeakyRelu",[U0,Mn]],["Less",[d_]],["LessOrEqual",[p_]],["Log",[e_]],["MatMul",[ry]],["MatMulNBits",[iy,ny]],["MaxPool",[dy,cy]],["Mul",[s_]],["MultiHeadAttention",[H_,F_]],["Neg",[W0]],["Not",[L0]],["Pad",[ay]],["Pow",[o_]],["QuickGelu",[t_,Mn]],["Range",[gy]],["Reciprocal",[G0]],["ReduceMin",[c0]],["ReduceMean",[s0]],["ReduceMax",[d0]],["ReduceSum",[f0]],["ReduceProd",[p0]],["ReduceL1",[o0]],["ReduceL2",[u0]],["ReduceLogSum",[m0]],["ReduceLogSumExp",[l0]],["ReduceSumSquare",[h0]],["Relu",[q0]],["Resize",[by,vy]],["RotaryEmbedding",[Y_]],["ScatterND",[yy,_y]],["Sigmoid",[V0]],["Sin",[j0]],["Sinh",[K0]],["Slice",[$y,xy]],["SkipLayerNormalization",[wy]],["Split",[K_,Z_]],["Sqrt",[Z0]],["Softmax",[Sy,ky]],["Sub",[u_]],["Tan",[X0]],["Tanh",[Y0]],["ThresholdedRelu",[J0,Mn]],["Tile",[Iy]],["Transpose",[Kg,Zg]],["Where",[Ty]]])}),Cy,I2=U(()=>{Mt(),Ir(),le(),Cy=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){lr(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});n&&o.push({binding:o.length,resource:n});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Xt(e.programInfo.name)}dispose(){}build(e,t){lr(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let n=jg(t,this.backend.device.limits),a=e.getShaderSource(n),s=`${i.join(`
`)}
${n.additionalImplementations}
${a}`,o=r.createShaderModule({code:s,label:e.name});we("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Xt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let a=t*r*i,s=Math.ceil(Math.sqrt(a));if(s>n){if(s=Math.ceil(Math.cbrt(a)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),zy={};un(zy,{WebGpuBackend:()=>Ay});var Zh,Xh,Yh,Ay,T2=U(()=>{Mt(),ne(),Ir(),Gg(),D1(),k2(),I2(),Zh=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let a=e[i].dims.length;r.push(`${n};${a}`);break}case"dims":{let a=e[i].dims.join(",");r.push(`${n};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Xh=(e,t,r)=>{var n,a;let i=e.name;return(n=e.shaderCache)!=null&&n.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Zh(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,i},Yh=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Ay=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=o=>t.features.has(o)&&r.push(o)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new Yh(s),this.gpuDataManager=Fg(this),this.programManager=new Cy(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ju(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;lr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let a=r[n],s=a.kernelId,o=this.kernels.get(s),u=o.kernelType,d=o.kernelName,c=a.programName,f=a.inputTensorViews,h=a.outputTensorViews,m=t[n*2],_=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let b=Number(m-this.queryTimeBase),$=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger($))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(v=>({dims:v.dims,dataType:br(v.dataType)})),outputsMetadata:h.map(v=>({dims:v.dims,dataType:br(v.dataType)})),kernelId:s,kernelType:u,kernelName:d,programName:c,startTime:b,endTime:$});else{let v="";f.forEach((I,k)=>{v+=`input[${k}]: [${I.dims}] | ${br(I.dataType)}, `});let w="";h.forEach((I,k)=>{w+=`output[${k}]: [${I.dims}] | ${br(I.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${d}|${c}" ${v}${w}start time: ${b} ns, execution time: ${$-b} ns`)}es("GPU",`${c}::${m}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Xt()}run(e,t,r,i,n,a){lr(e.name);let s=[];for(let w=0;w<t.length;++w){let I=t[w].data;if(I===0)continue;let k=this.gpuDataManager.get(I);if(!k)throw new Error(`no GPU data for input: ${I}`);s.push(k)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),c=r.length===0?o.map((w,I)=>I):r;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let f=[],h=[];for(let w=0;w<o.length;++w){if(!Number.isInteger(c[w])||c[w]<-3||c[w]>=a)throw new Error(`Invalid output index: ${c[w]}`);if(c[w]===-3)continue;let I=c[w]===-1,k=c[w]===-2,T=I||k?n(o[w].dataType,o[w].dims):i(c[w],o[w].dataType,o[w].dims);if(f.push(T),T.data===0)continue;let C=this.gpuDataManager.get(T.data);if(!C)throw new Error(`no GPU data for output: ${T.data}`);if(I&&this.temporaryData.push(C),k){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(C)}h.push(C)}if(s.length!==t.length||h.length!==f.length){if(h.length===0)return Xt(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(d){let w=0,I=[];d.forEach(z=>{let x=typeof z.data=="number"?[z.data]:z.data;if(x.length===0)return;let N=z.type===10?2:4,P,F;z.type===10?(F=x.length>4?16:x.length>2?8:x.length*N,P=x.length>4?16:N*x.length):(F=x.length<=2?x.length*N:16,P=16),w=Math.ceil(w/F)*F,I.push(w);let j=z.type===10?8:4;w+=x.length>4?Math.ceil(x.length/j)*P:x.length*N});let k=16;w=Math.ceil(w/k)*k;let T=new ArrayBuffer(w);d.forEach((z,x)=>{let N=I[x],P=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(T,N,P.length).set(P);else if(z.type===12)new Uint32Array(T,N,P.length).set(P);else if(z.type===10)new Uint16Array(T,N,P.length).set(P);else if(z.type===1)new Float32Array(T,N,P.length).set(P);else throw new Error(`Unsupported uniform type: ${br(z.type)}`)});let C=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,T,0,w),this.gpuDataManager.release(C.id),m={offset:0,size:w,buffer:C.buffer}}let _=this.programManager.normalizeDispatchGroupSize(u),b=_[1]===1&&_[2]===1,$=Xh(e,t,b),v=this.programManager.getArtifact($);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact($,v),we("info",()=>`[artifact] key: ${$}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let w=0;w<d.length;w++){let I=d[w],k=I.type,T=typeof I.data=="number"?1:I.data.length,[C,z]=v.uniformVariablesInfo[w];if(k!==C||T!==z)throw new Error(`Uniform variable ${w} mismatch: expect type ${C} with size ${z}, got type ${k} with size ${T} in program "${v.programInfo.name}".`)}}if(we("info",()=>`[ProgramManager] run "${e.name}" (key=${$}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(v,s,h,_,m),Xt(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=Ey.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,a=i.kernelName,s=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),we("info",()=>`[WebGPU] Start to run kernel "[${n}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${a}" failed. ${d}`)),1}finally{u&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let a=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,a);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await uu(this,e,t);return Ku(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){we("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){we("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){we("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),a=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(a.computePipeline),n.setBindGroup(0,a.bindGroup),n.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Oy={};un(Oy,{init:()=>By});var Oa,Qh,By,E2=U(()=>{ne(),Ir(),oe(),M1(),Oa=class Ry{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(R.size(t)!==R.size(this.dims))throw new Error("Invalid new shape");return new Ry(this.module,this.dataType,this.data,t)}},Qh=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,a=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,a));let s=Number(e.getValue(i*n++,a));this.outputCount=Number(e.getValue(i*n++,a)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,a));let o=[];for(let u=0;u<s;u++){let d=Number(e.getValue(i*n++,a)),c=Number(e.getValue(i*n++,"*")),f=Number(e.getValue(i*n++,a)),h=[];for(let m=0;m<f;m++)h.push(Number(e.getValue(i*n++,a)));o.push(new Oa(e,d,c,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,i=(t==null?void 0:t.outputs)??[],n=(o,u,d)=>new Oa(this.module,u,this.output(o,d),d),a=(o,u)=>{let d=ri(o,u);if(!d)throw new Error(`Unsupported data type: ${o}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Oa(this.module,o,c,u)};return this.backend.run(e,r,i,n,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*i);this.module.setValue(a,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(a+i*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},By=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(T2(),Vn(zy)).WebGpuBackend,s=new a;await s.initialize(r,i),n("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,d,c=!1)=>{if(c)we("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),s.memcpy(Number(o),Number(u));else{we("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(u),f)}},async(o,u,d)=>{we("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>s.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,d,c)=>{we("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let f=new Qh(t,s,Number(u));return s.computeKernel(Number(o),f,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new Vg(r);n("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,d,c)=>a.ensureTensor(s,o,u,d,c),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!r.trace])}}}),Jh,al,sl,Or,em,Do,os,ol,ul,Po,ll,dl,cl,Ny=U(()=>{Mt(),B1(),R1(),ne(),xi(),qu(),Pg(),Jh=(e,t)=>{Be()._OrtInit(e,t)!==0&&Ce("Can't initialize onnxruntime.")},al=async e=>{Jh(e.wasm.numThreads,rs(e.logLevel))},sl=async(e,t)=>{var i,n;(n=(i=Be()).asyncInit)==null||n.call(i);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(E2(),Vn(Oy)).init;t==="webgpu"&&await a("webgpu",Be(),e,r),t==="webnn"&&await a("webnn",Be(),e)}},Or=new Map,em=e=>{let t=Be(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&Ce("Can't get session input/output count.");let a=i===4?"i32":"i64";return[Number(t.getValue(n,a)),Number(t.getValue(n+i,a))]}finally{t.stackRestore(r)}},Do=(e,t)=>{let r=Be(),i=r.stackSave(),n=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&Ce("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));n=Number(r.getValue(s+a,"*"));let u=r.HEAP32[n/4];if(u===0)return[o,0];let d=r.HEAPU32[n/4+1],c=[];for(let f=0;f<d;f++){let h=Number(r.getValue(n+8+f*a,"*"));c.push(h!==0?r.UTF8ToString(h):Number(r.getValue(n+8+(f+d)*a,"*")))}return[o,u,c]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},os=e=>{let t=Be(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},ol=async(e,t)=>{var f,h,m,_;let r,i,n=Be();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=os(e);let a=0,s=0,o=0,u=[],d=[],c=[];try{if([s,u]=await Dg(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let x=[];for(let N of t.externalData){let P=typeof N=="string"?N:N.path;x.push(Hu(typeof N=="string"?N:N.data).then(F=>{n.mountExternalData(P,F)}))}await Promise.all(x)}for(let x of(t==null?void 0:t.executionProviders)??[])if((typeof x=="string"?x:x.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof x!="string"){let N=x,P=N==null?void 0:N.context,F=N==null?void 0:N.gpuDevice,j=N==null?void 0:N.deviceType,Z=N==null?void 0:N.powerPreference;P?n.currentContext=P:F?n.currentContext=await n.webnnCreateMLContext(F):n.currentContext=await n.webnnCreateMLContext({deviceType:j,powerPreference:Z})}else n.currentContext=await n.webnnCreateMLContext();break}a=await n._OrtCreateSession(r,i,s),(f=n.webgpuOnCreateSession)==null||f.call(n,a),a===0&&Ce("Can't create a session."),(h=n.jsepOnCreateSession)==null||h.call(n),n.currentContext&&(n.webnnRegisterMLContext(a,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[b,$]=em(a),v=!!(t!=null&&t.enableGraphCapture),w=[],I=[],k=[],T=[],C=[];for(let x=0;x<b;x++){let[N,P,F]=Do(a,x);N===0&&Ce("Can't get an input name."),d.push(N);let j=n.UTF8ToString(N);w.push(j),k.push(P===0?{name:j,isTensor:!1}:{name:j,isTensor:!0,type:br(P),shape:F})}for(let x=0;x<$;x++){let[N,P,F]=Do(a,x+b);N===0&&Ce("Can't get an output name."),c.push(N);let j=n.UTF8ToString(N);I.push(j),T.push(P===0?{name:j,isTensor:!1}:{name:j,isTensor:!0,type:br(P),shape:F});{if(v&&(t==null?void 0:t.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let Z=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[j])??"cpu",B=n.webnnIsGraphOutput;if(Z==="cpu"&&B&&B(a,j)){C.push("ml-tensor-cpu-output");continue}if(Z!=="cpu"&&Z!=="cpu-pinned"&&Z!=="gpu-buffer"&&Z!=="ml-tensor")throw new Error(`Not supported preferred output location: ${Z}.`);if(v&&Z!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${Z}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(Z)}}let z=null;return C.some(x=>x==="gpu-buffer"||x==="ml-tensor"||x==="ml-tensor-cpu-output")&&(o=n._OrtCreateBinding(a),o===0&&Ce("Can't create IO binding."),z={handle:o,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(x=>x==="ml-tensor-cpu-output"?"ml-tensor":x).map(x=>su(x))}),Or.set(a,[a,d,c,z,v,!1]),[a,w,I,k,T]}catch(b){throw d.forEach($=>n._OrtFree($)),c.forEach($=>n._OrtFree($)),o!==0&&n._OrtReleaseBinding(o)!==0&&Ce("Can't release IO binding."),a!==0&&n._OrtReleaseSession(a)!==0&&Ce("Can't release session."),b}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&Ce("Can't release session options."),u.forEach(b=>n._free(b)),(_=n.unmountExternalData)==null||_.call(n)}},ul=e=>{var u,d,c;let t=Be(),r=Or.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,a,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Ce("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Ce("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),n.forEach(f=>t._OrtFree(f)),a.forEach(f=>t._OrtFree(f)),t._OrtReleaseSession(i)!==0&&Ce("Can't release session."),Or.delete(e)},Po=async(e,t,r,i,n,a,s=!1)=>{if(!e){t.push(0);return}let o=Be(),u=o.PTR_SIZE,d=e[0],c=e[1],f=e[3],h=f,m,_;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let v=e[2].gpuBuffer;_=ri(ti(d),c);{let w=o.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=w(i,a,v,_)}}else if(f==="ml-tensor"){let v=e[2].mlTensor;_=ri(ti(d),c);let w=o.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=w(i,v,ti(d),c)}else{let v=e[2];if(Array.isArray(v)){_=u*v.length,m=o._malloc(_),r.push(m);for(let w=0;w<v.length;w++){if(typeof v[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);o.setValue(m+w*u,Ht(v[w],r),"*")}}else{let w=o.webnnIsGraphInput,I=o.webnnIsGraphOutput;if(d!=="string"&&w&&I){let k=o.UTF8ToString(n);if(w(i,k)||I(i,k)){let T=ti(d);_=ri(T,c),h="ml-tensor";let C=o.webnnCreateTemporaryTensor,z=o.webnnUploadTensor;if(!C||!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let x=await C(i,T,c);z(x,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),m=x}else _=v.byteLength,m=o._malloc(_),r.push(m),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),m)}else _=v.byteLength,m=o._malloc(_),r.push(m),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),m)}}let b=o.stackSave(),$=o.stackAlloc(4*c.length);try{c.forEach((w,I)=>o.setValue($+I*u,w,u===4?"i32":"i64"));let v=o._OrtCreateTensor(ti(d),m,_,$,c.length,su(h));v===0&&Ce(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(v)}finally{o.stackRestore(b)}},ll=async(e,t,r,i,n,a)=>{var j,Z,B,Y;let s=Be(),o=s.PTR_SIZE,u=Or.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],c=u[1],f=u[2],h=u[3],m=u[4],_=u[5],b=t.length,$=i.length,v=0,w=[],I=[],k=[],T=[],C=[],z=s.stackSave(),x=s.stackAlloc(b*o),N=s.stackAlloc(b*o),P=s.stackAlloc($*o),F=s.stackAlloc($*o);try{[v,w]=Mg(a),hi("wasm prepareInputOutputTensor");for(let L=0;L<b;L++)await Po(r[L],I,T,e,c[t[L]],t[L],m);for(let L=0;L<$;L++)await Po(n[L],k,T,e,f[i[L]],b+i[L],m);mi("wasm prepareInputOutputTensor");for(let L=0;L<b;L++)s.setValue(x+L*o,I[L],"*"),s.setValue(N+L*o,c[t[L]],"*");for(let L=0;L<$;L++)s.setValue(P+L*o,k[L],"*"),s.setValue(F+L*o,f[i[L]],"*");if(h&&!_){let{handle:L,outputPreferredLocations:de,outputPreferredLocationsEncoded:W}=h;if(c.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${c.length}).`);hi("wasm bindInputsOutputs");for(let H=0;H<b;H++){let Q=t[H];await s._OrtBindInput(L,c[Q],I[H])!==0&&Ce(`Can't bind input[${H}] for session=${e}.`)}for(let H=0;H<$;H++){let Q=i[H];(j=n[H])!=null&&j[3]?(C.push(k[H]),s._OrtBindOutput(L,f[Q],k[H],0)!==0&&Ce(`Can't bind pre-allocated output[${H}] for session=${e}.`)):s._OrtBindOutput(L,f[Q],0,W[Q])!==0&&Ce(`Can't bind output[${H}] to ${de[H]} for session=${e}.`)}mi("wasm bindInputsOutputs"),Or.set(e,[d,c,f,h,m,!0])}(Z=s.jsepOnRunStart)==null||Z.call(s,d),(B=s.webnnOnRunStart)==null||B.call(s,d);let K;h?K=await s._OrtRunWithBinding(d,h.handle,$,P,v):K=await s._OrtRun(d,N,x,b,F,$,P,v),K!==0&&Ce("failed to call OrtRun().");let J=[],be=[];hi("wasm ProcessOutputTensor");for(let L=0;L<$;L++){let de=Number(s.getValue(P+L*o,"*"));if(de===k[L]||C.includes(k[L])){J.push(n[L]),de!==k[L]&&s._OrtReleaseTensor(de)!==0&&Ce("Can't release tensor.");continue}let W=s.stackSave(),H=s.stackAlloc(4*o),Q=!1,G,Se=0;try{s._OrtGetTensorData(de,H,H+o,H+2*o,H+3*o)!==0&&Ce(`Can't access output tensor data on index ${L}.`);let dt=o===4?"i32":"i64",Pe=Number(s.getValue(H,dt));Se=s.getValue(H+o,"*");let rt=s.getValue(H+o*2,"*"),Xe=Number(s.getValue(H+o*3,dt)),it=[];for(let ze=0;ze<Xe;ze++)it.push(Number(s.getValue(rt+ze*o,dt)));s._OrtFree(rt)!==0&&Ce("Can't free memory for tensor dims.");let Ye=it.reduce((ze,se)=>ze*se,1);G=br(Pe);let It=h==null?void 0:h.outputPreferredLocations[i[L]];if(G==="string"){if(It==="gpu-buffer"||It==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ze=[];for(let se=0;se<Ye;se++){let st=s.getValue(Se+se*o,"*"),ki=s.getValue(Se+(se+1)*o,"*"),qr=se===Ye-1?void 0:ki-st;ze.push(s.UTF8ToString(st,qr))}J.push([G,it,ze,"cpu"])}else if(It==="gpu-buffer"&&Ye>0){let ze=s.jsepGetBuffer;if(!ze)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let se=ze(Se),st=ri(Pe,Ye);if(st===void 0||!Vu(G))throw new Error(`Unsupported data type: ${G}`);Q=!0,J.push([G,it,{gpuBuffer:se,download:s.jsepCreateDownloader(se,st,G),dispose:()=>{s._OrtReleaseTensor(de)!==0&&Ce("Can't release tensor.")}},"gpu-buffer"])}else if(It==="ml-tensor"&&Ye>0){let ze=s.webnnEnsureTensor,se=s.webnnIsGraphInputOutputTypeSupported;if(!ze||!se)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(ri(Pe,Ye)===void 0||!Fu(G))throw new Error(`Unsupported data type: ${G}`);if(!se(e,G,!1))throw new Error(`preferredLocation "ml-tensor" for ${G} output is not supported by current WebNN Context.`);let st=await ze(e,Se,Pe,it,!1);Q=!0,J.push([G,it,{mlTensor:st,download:s.webnnCreateMLTensorDownloader(Se,G),dispose:()=>{s.webnnReleaseTensorId(Se),s._OrtReleaseTensor(de)}},"ml-tensor"])}else if(It==="ml-tensor-cpu-output"&&Ye>0){let ze=s.webnnCreateMLTensorDownloader(Se,G)(),se=J.length;Q=!0,be.push((async()=>{let st=[se,await ze];return s.webnnReleaseTensorId(Se),s._OrtReleaseTensor(de),st})()),J.push([G,it,[],"cpu"])}else{let ze=fs(G),se=new ze(Ye);new Uint8Array(se.buffer,se.byteOffset,se.byteLength).set(s.HEAPU8.subarray(Se,Se+se.byteLength)),J.push([G,it,se,"cpu"])}}finally{s.stackRestore(W),G==="string"&&Se&&s._free(Se),Q||s._OrtReleaseTensor(de)}}h&&!m&&(s._OrtClearBoundOutputs(h.handle)!==0&&Ce("Can't clear bound outputs."),Or.set(e,[d,c,f,h,m,!1]));for(let[L,de]of await Promise.all(be))J[L][2]=de;return mi("wasm ProcessOutputTensor"),J}finally{(Y=s.webnnOnRunEnd)==null||Y.call(s,d),s.stackRestore(z),I.forEach(K=>s._OrtReleaseTensor(K)),k.forEach(K=>s._OrtReleaseTensor(K)),T.forEach(K=>s._free(K)),v!==0&&s._OrtReleaseRunOptions(v),w.forEach(K=>s._free(K))}},dl=e=>{let t=Be(),r=Or.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&Ce("Can't get an profile file name."),t._OrtFree(n)},cl=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),Br,pt,Ei,In,Tn,Ba,Uo,Ra,Xr,Yr,tm,My,Dy,Py,Uy,Ly,Wy,Gy,qy=U(()=>{Mt(),Ny(),xi(),Wu(),Br=()=>!!xe.wasm.proxy&&typeof document<"u",Ei=!1,In=!1,Tn=!1,Ra=new Map,Xr=(e,t)=>{let r=Ra.get(e);r?r.push(t):Ra.set(e,[t])},Yr=()=>{if(Ei||!In||Tn||!pt)throw new Error("worker not ready")},tm=e=>{switch(e.data.type){case"init-wasm":Ei=!1,e.data.err?(Tn=!0,Uo[1](e.data.err)):(In=!0,Uo[0]()),Ba&&(URL.revokeObjectURL(Ba),Ba=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Ra.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},My=async()=>{if(!In){if(Ei)throw new Error("multiple calls to 'initWasm()' detected.");if(Tn)throw new Error("previous call to 'initWasm()' failed.");if(Ei=!0,Br())return new Promise((e,t)=>{pt==null||pt.terminate(),Rg().then(([r,i])=>{try{pt=i,pt.onerror=a=>t(a),pt.onmessage=tm,Uo=[e,t];let n={type:"init-wasm",in:xe};!n.in.wasm.wasmPaths&&(r||au)&&(n.in.wasm.wasmPaths={wasm:new URL("/jarvis/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href}),pt.postMessage(n),Ba=r}catch(n){t(n)}},t)});try{await Gu(xe.wasm),await al(xe),In=!0}catch(e){throw Tn=!0,e}finally{Ei=!1}}},Dy=async e=>{if(Br())return Yr(),new Promise((t,r)=>{Xr("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:xe}};pt.postMessage(i)});await sl(xe,e)},Py=async e=>Br()?(Yr(),new Promise((t,r)=>{Xr("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};pt.postMessage(i,[e.buffer])})):os(e),Uy=async(e,t)=>{if(Br()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Yr(),new Promise((r,i)=>{Xr("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),pt.postMessage(n,a)})}else return ol(e,t)},Ly=async e=>{if(Br())return Yr(),new Promise((t,r)=>{Xr("release",[t,r]);let i={type:"release",in:e};pt.postMessage(i)});ul(e)},Wy=async(e,t,r,i,n,a)=>{if(Br()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Yr(),new Promise((s,o)=>{Xr("run",[s,o]);let u=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:i,options:a}};pt.postMessage(d,cl(u))})}else return ll(e,t,r,i,n,a)},Gy=async e=>{if(Br())return Yr(),new Promise((t,r)=>{Xr("end-profiling",[t,r]);let i={type:"end-profiling",in:e};pt.postMessage(i)});dl(e)}}),Lo,rm,Vy,C2=U(()=>{Mt(),qy(),ne(),Lu(),Pg(),Lo=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},rm=e=>{switch(e[3]){case"cpu":return new et(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Vu(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return et.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!Fu(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return et.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Vy=class{async fetchModelAndCopyToWasmMemory(e){return Py(await Hu(e))}async loadModel(e,t){lr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Uy(r,t),Xt()}async dispose(){return Ly(this.sessionId)}async run(e,t,r){lr();let i=[],n=[];Object.entries(e).forEach(f=>{let h=f[0],m=f[1],_=this.inputNames.indexOf(h);if(_===-1)throw new Error(`invalid input '${h}'`);i.push(m),n.push(_)});let a=[],s=[];Object.entries(t).forEach(f=>{let h=f[0],m=f[1],_=this.outputNames.indexOf(h);if(_===-1)throw new Error(`invalid output '${h}'`);a.push(m),s.push(_)});let o=i.map((f,h)=>Lo(f,()=>`input "${this.inputNames[n[h]]}"`)),u=a.map((f,h)=>f?Lo(f,()=>`output "${this.outputNames[s[h]]}"`):null),d=await Wy(this.sessionId,n,o,s,u,r),c={};for(let f=0;f<d.length;f++)c[this.outputNames[s[f]]]=a[f]??rm(d[f]);return Xt(),c}startProfiling(){}endProfiling(){Gy(this.sessionId)}}}),Fy={};un(Fy,{OnnxruntimeWebAssemblyBackend:()=>vu,initializeFlags:()=>bu,wasmBackend:()=>Hy});var bu,vu,Hy,z2=U(()=>{Mt(),qy(),C2(),bu=()=>{(typeof xe.wasm.initTimeout!="number"||xe.wasm.initTimeout<0)&&(xe.wasm.initTimeout=0);let e=xe.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),xe.wasm.simd=!1),typeof xe.wasm.proxy!="boolean"&&(xe.wasm.proxy=!1),typeof xe.wasm.trace!="boolean"&&(xe.wasm.trace=!1),typeof xe.wasm.numThreads!="number"||!Number.isInteger(xe.wasm.numThreads)||xe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)xe.wasm.numThreads=1;else{let t=typeof navigator>"u"?m1("node:os").cpus().length:navigator.hardwareConcurrency;xe.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},vu=class{async init(e){bu(),await My(),await Dy(e)}async createInferenceSessionHandler(e,t){let r=new Vy;return await r.loadModel(e,t),r}},Hy=new vu});Mt();Mt();Mt();var A2="1.27.0";{let e=(z2(),Vn(Fy)).wasmBackend;Ri("webgpu",e,5),Ri("webnn",e,5),Ri("cpu",e,10),Ri("wasm",e,10)}Object.defineProperty(xe.versions,"web",{value:A2,enumerable:!0});/**
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
 */const Na=32,Ci=96,Qr=76,Wo=8,vr=1280;class O2{constructor(t,r,{sampleRate:i=16e3}={}){this.melspecSession=t,this.embeddingSession=r,this.sampleRate=i,this.melspecInputName=t.inputNames[0],this.embeddingInputName=r.inputNames[0],this.rawDataMaxLen=i*10,this.melspectrogramMaxLen=970,this.featureBufferMaxLen=120,this.reset(!0)}reset(t=!1){this.rawDataBuffer=[],this.rawDataRemainder=new Int16Array(0),this.accumulatedSamples=0,this.melBuffer=[];for(let r=0;r<Qr;r++)this.melBuffer.push(new Float32Array(Na).fill(1));this.featureBuffer=[]}async warmup(){const t=new Int16Array(this.sampleRate*4);for(let r=0;r<t.length;r++)t[r]=Math.floor(Math.random()*2e3-1e3);this.featureBuffer=await this._getEmbeddings(t)}async _getMelspectrogram(t){const r=Float32Array.from(t),i=new et("float32",r,[1,r.length]),a=(await this.melspecSession.run({[this.melspecInputName]:i}))[this.melspecSession.outputNames[0]],s=a.dims,o=s[s.length-1],u=s[s.length-2],d=a.data,c=[];for(let f=0;f<u;f++){const h=new Float32Array(o),m=f*o;for(let _=0;_<o;_++)h[_]=d[m+_]/10+2;c.push(h)}return c}async _embedWindows(t){const r=t.length;if(r===0)return[];const i=new Float32Array(r*Qr*Na);let n=0;for(const c of t)for(let f=0;f<Qr;f++)i.set(c[f],n),n+=Na;const a=new et("float32",i,[r,Qr,Na,1]),u=(await this.embeddingSession.run({[this.embeddingInputName]:a}))[this.embeddingSession.outputNames[0]].data,d=[];for(let c=0;c<r;c++)d.push(u.slice(c*Ci,c*Ci+Ci));return d}async _getEmbeddings(t){const r=await this._getMelspectrogram(t),i=[];for(let n=0;n<r.length;n+=Wo){const a=r.slice(n,n+Qr);a.length===Qr&&i.push(a)}return this._embedWindows(i)}_bufferRawData(t){for(let r=0;r<t.length;r++)this.rawDataBuffer.push(t[r]);this.rawDataBuffer.length>this.rawDataMaxLen&&(this.rawDataBuffer=this.rawDataBuffer.slice(-this.rawDataMaxLen))}async _streamingMelspectrogram(t){if(this.rawDataBuffer.length<400)throw new Error("The number of input frames must be at least 400 samples @ 16khz (25 ms)!");const r=Math.max(0,this.rawDataBuffer.length-(t+480)),i=Int16Array.from(this.rawDataBuffer.slice(r)),n=await this._getMelspectrogram(i);for(const a of n)this.melBuffer.push(a);this.melBuffer.length>this.melspectrogramMaxLen&&(this.melBuffer=this.melBuffer.slice(-this.melspectrogramMaxLen))}async streamingFeatures(t){let r=0;if(this.rawDataRemainder.length!==0){const i=new Int16Array(this.rawDataRemainder.length+t.length);i.set(this.rawDataRemainder,0),i.set(t,this.rawDataRemainder.length),t=i,this.rawDataRemainder=new Int16Array(0)}if(this.accumulatedSamples+t.length>=vr){const i=(this.accumulatedSamples+t.length)%vr;if(i!==0){const n=t.subarray(0,t.length-i);this._bufferRawData(n),this.accumulatedSamples+=n.length,this.rawDataRemainder=t.slice(t.length-i)}else this._bufferRawData(t),this.accumulatedSamples+=t.length,this.rawDataRemainder=new Int16Array(0)}else this.accumulatedSamples+=t.length,this._bufferRawData(t);if(this.accumulatedSamples>=vr&&this.accumulatedSamples%vr===0){await this._streamingMelspectrogram(this.accumulatedSamples);for(let i=this.accumulatedSamples/vr-1;i>=0;i--){const n=-Wo*i===0?this.melBuffer.length:-Wo*i,a=n<0?this.melBuffer.length+n:n,s=a-Qr;if(s>=0){const o=this.melBuffer.slice(s,a),[u]=await this._embedWindows([o]);this.featureBuffer.push(u)}}r=this.accumulatedSamples,this.accumulatedSamples=0}return this.featureBuffer.length>this.featureBufferMaxLen&&(this.featureBuffer=this.featureBuffer.slice(-this.featureBufferMaxLen)),r!==0?r:this.accumulatedSamples}getFeatures(t=16,r=-1){let i;if(r!==-1){const s=r+t===0?void 0:r+t;i=this.featureBuffer.slice(r,s)}else i=this.featureBuffer.slice(-t);const n=i.length,a=new Float32Array(n*Ci);for(let s=0;s<n;s++)a.set(i[s],s*Ci);return{data:a,dims:[1,n,Ci]}}}const im={melspectrogram:"melspectrogram.onnx",embedding:"embedding_model.onnx"},B2={silero_vad:"silero_vad.onnx"},nm={alexa:"alexa_v0.1.onnx",hey_mycroft:"hey_mycroft_v0.1.onnx",hey_jarvis:"hey_jarvis_v0.1.onnx",hey_rhasspy:"hey_rhasspy_v0.1.onnx",timer:"timer_v0.1.onnx",weather:"weather_v0.1.onnx"},am={timer:{1:"1_minute_timer",2:"5_minute_timer",3:"10_minute_timer",4:"20_minute_timer",5:"30_minute_timer",6:"1_hour_timer"}},En=480;class pl{constructor(t){this._session=t,this._inName=t.inputNames[0],this._hName=t.inputNames.find(r=>r==="h")??t.inputNames[1],this._cName=t.inputNames.find(r=>r==="c")??t.inputNames[2],this._srName=t.inputNames.find(r=>r==="sr")??t.inputNames[3],this._outName=t.outputNames[0],this._hnName=t.outputNames[1],this._cnName=t.outputNames[2],this._sr=new et("int64",BigInt64Array.from([BigInt(16e3)]),[]),this.reset()}static async create(t,r={}){const i=await Di.create(t,r);return new pl(i)}reset(){this._h=new Float32Array(128),this._c=new Float32Array(128)}async predict(t){const r=[];for(let i=0;i+En<=t.length;i+=En){const n=new Float32Array(En);for(let s=0;s<En;s++)n[s]=t[i+s]/32767;const a=await this._session.run({[this._inName]:new et("float32",n,[1,En]),[this._hName]:new et("float32",this._h.slice(),[2,1,64]),[this._cName]:new et("float32",this._c.slice(),[2,1,64]),[this._srName]:this._sr});r.push(a[this._outName].data[0]),this._h=Float32Array.from(a[this._hnName].data),this._c=Float32Array.from(a[this._cnName].data)}return r.length===0?0:r.reduce((i,n)=>i+n)/r.length}}const R2=16;function N2(e={}){e.wasmPaths!==void 0&&(xe.wasm.wasmPaths=e.wasmPaths),e.numThreads!==void 0&&(xe.wasm.numThreads=e.numThreads),e.simd!==void 0&&(xe.wasm.simd=e.simd)}function sm(e,t,r){var s,o;const i=t==="input"?(s=e.inputMetadata)==null?void 0:s[0]:(o=e.outputMetadata)==null?void 0:o[0],n=(i==null?void 0:i.shape)??(i==null?void 0:i.dimensions),a=n==null?void 0:n[r];return typeof a=="number"&&a>0?a:null}class fl{constructor(){this.models={},this.features=null,this.predictionBuffer={},this.threshold=.5,this.onDetection=null,this.onUtterance=null,this.vadStopThreshold=.5,this.vadStopFrames=6,this.maxCaptureDuration=10,this._vad=null,this._captureState="idle",this._captureBuffer=[],this._captureLabel=null,this._vadSilenceCount=0,this._captureMinFrames=0}static async create(t={}){const{baseUrl:r="./models/",wakewordModels:i=Object.keys(nm),executionProviders:n=["wasm"],ort:a,threshold:s=.5,onDetection:o=null,onUtterance:u=null,vadStopThreshold:d=.5,vadStopFrames:c=6,maxCaptureDuration:f=10}=t;a&&N2(a);const h=I=>/^https?:|^\.|^\//.test(I)?I:r+I,m={executionProviders:n},_=t.melspectrogramUrl?t.melspectrogramUrl:h(im.melspectrogram),b=t.embeddingUrl?t.embeddingUrl:h(im.embedding),$=new fl,[v,w]=await Promise.all([Di.create(_,m),Di.create(b,m)]);$.features=new O2(v,w);for(const I of i){let k,T,C,z;if(typeof I=="string"){k=I;const F=nm[I]||I;T=h(F),z=am[I]}else k=I.name,T=/^https?:|^\.|^\//.test(I.url)?I.url:h(I.url),C=I.inputFrames,z=I.classMapping||am[k];const x=await Di.create(T,m),N=sm(x,"input",1),P=sm(x,"output",1)??1;$.models[k]={session:x,inputName:x.inputNames[0],inputFrames:C??N??R2,outputClasses:P,classMapping:z||null}}if($.threshold=s,$.onDetection=o,$.onUtterance=u,$.vadStopThreshold=d,$.vadStopFrames=c,$.maxCaptureDuration=f,u){const I=t.vadUrl?t.vadUrl:h(B2.silero_vad);$._vad=await pl.create(I,m)}return await $.features.warmup(),$}get modelNames(){return Object.keys(this.models)}async reset(){var t;this.features.reset(!0),await this.features.warmup(),this.predictionBuffer={},this._captureState="idle",this._captureBuffer=[],this._captureLabel=null,this._vadSilenceCount=0,this._captureMinFrames=0,(t=this._vad)==null||t.reset()}async _runModel(t,r){const i=new et("float32",r.data,r.dims),a=(await t.session.run({[t.inputName]:i}))[t.session.outputNames[0]].data;return Array.from(a)}_pushPrediction(t,r){this.predictionBuffer[t]||(this.predictionBuffer[t]=[]),this.predictionBuffer[t].push(r),this.predictionBuffer[t].length>30&&this.predictionBuffer[t].shift()}_concatCapture(){const t=this._captureBuffer.reduce((n,a)=>n+a.length,0),r=new Int16Array(t);let i=0;for(const n of this._captureBuffer)r.set(n,i),i+=n.length;return r}async predict(t){if(!(t instanceof Int16Array))throw new TypeError("Input audio (x) must be an Int16Array of 16 kHz PCM.");const r=await this.features.streamingFeatures(t),i={};for(const[a,s]of Object.entries(this.models)){let o;if(r>vr){const u=[];for(let d=Math.floor(r/vr)-1;d>=0;d--){const c=this.features.getFeatures(s.inputFrames,-s.inputFrames-d);u.push(await this._runModel(s,c))}o=u.reduce((d,c)=>d.map((f,h)=>Math.max(f,c[h])))}else if(r===vr){const u=this.features.getFeatures(s.inputFrames);o=await this._runModel(s,u)}else if(s.outputClasses===1){const u=this.predictionBuffer[a];o=[u&&u.length>0?u[u.length-1]:0]}else o=new Array(s.outputClasses).fill(0);if(s.outputClasses===1)i[a]=o[0];else if(s.classMapping)for(const[u,d]of Object.entries(s.classMapping))i[d]=o[Number.parseInt(u,10)];else for(let u=0;u<s.outputClasses;u++)i[`${a}_${u}`]=o[u]}for(const a of Object.keys(i))(!this.predictionBuffer[a]||this.predictionBuffer[a].length<5)&&(i[a]=0);for(const a of Object.keys(i))this._pushPrediction(a,i[a]);let n=null;for(const[a,s]of Object.entries(i))s>=this.threshold&&(this.onDetection&&this.onDetection({label:a,score:s}),n===null&&(n=a));if(this.onUtterance&&this._vad)if(this._captureState==="idle")n!==null&&(this._captureState="capturing",this._captureLabel=n,this._captureBuffer=[t.slice()],this._vadSilenceCount=0,this._captureMinFrames=3,this._vad.reset());else{this._captureBuffer.push(t.slice());const a=await this._vad.predict(t);n!==null?this._vadSilenceCount=0:a<this.vadStopThreshold?this._vadSilenceCount++:this._vadSilenceCount=0;const s=Math.ceil(this.maxCaptureDuration*16e3/vr),o=this._captureMinFrames<=0&&this._vadSilenceCount>=this.vadStopFrames,u=this._captureBuffer.length>=s;if(this._captureMinFrames>0&&this._captureMinFrames--,o||u){const d=this._concatCapture(),c=this._captureLabel;this._captureState="idle",this._captureBuffer=[],this._captureLabel=null,this._vadSilenceCount=0,this._captureMinFrames=0,this.onUtterance({label:c,audio:d})}}return i}}class M2{constructor(t,r={}){this.onFrame=t,this.workletUrl=r.workletUrl??new URL("data:text/javascript;base64,Ly8gQXVkaW9Xb3JrbGV0IHByb2Nlc3NvciB0aGF0IGNvbnZlcnRzIHRoZSBtaWNyb3Bob25lIHN0cmVhbSBpbnRvIDE2LWJpdCBQQ00KLy8gZnJhbWVzIG9mIDEyODAgc2FtcGxlcyAoODAgbXMgQCAxNiBrSHopIGFuZCBwb3N0cyB0aGVtIHRvIHRoZSBtYWluIHRocmVhZC4KLy8KLy8gSXQgcmVzYW1wbGVzIGZyb20gdGhlIEF1ZGlvQ29udGV4dCdzIG5hdGl2ZSByYXRlICh0aGUgZ2xvYmFsIGBzYW1wbGVSYXRlYAovLyBpbnNpZGUgdGhlIHdvcmtsZXQgc2NvcGUpIGRvd24vdXAgdG8gMTYga0h6IHVzaW5nIGxpbmVhciBpbnRlcnBvbGF0aW9uLCBzbwovLyBpdCB3b3JrcyBldmVuIHdoZW4gdGhlIGJyb3dzZXIgaWdub3JlcyB0aGUgcmVxdWVzdGVkIDE2IGtIeiBjb250ZXh0IHJhdGUuCgpjb25zdCBUQVJHRVRfUkFURSA9IDE2MDAwOwpjb25zdCBGUkFNRSA9IDEyODA7CgpjbGFzcyBQQ01Xb3JrbGV0IGV4dGVuZHMgQXVkaW9Xb3JrbGV0UHJvY2Vzc29yIHsKICBjb25zdHJ1Y3RvcigpIHsKICAgIHN1cGVyKCk7CiAgICB0aGlzLl9yYXRpbyA9IHNhbXBsZVJhdGUgLyBUQVJHRVRfUkFURTsgLy8gaW5wdXQgc2FtcGxlcyBwZXIgb3V0cHV0IHNhbXBsZQogICAgdGhpcy5fYnVmID0gbmV3IEludDE2QXJyYXkoRlJBTUUpOwogICAgdGhpcy5fbiA9IDA7CiAgICB0aGlzLl90YWlsID0gbmV3IEZsb2F0MzJBcnJheSgwKTsgLy8gbGVmdG92ZXIgaW5wdXQgc2FtcGxlcyBiZXR3ZWVuIGJsb2NrcwogICAgdGhpcy5fZnJhYyA9IDA7IC8vIGZyYWN0aW9uYWwgcmVhZCBwb3NpdGlvbiB3aXRoaW4gdGhlIGN1cnJlbnQgZGF0YSBidWZmZXIKICB9CgogIHByb2Nlc3MoaW5wdXRzKSB7CiAgICBjb25zdCBjaGFubmVsID0gaW5wdXRzWzBdPy5bMF07CiAgICBpZiAoIWNoYW5uZWwpIHJldHVybiB0cnVlOwoKICAgIC8vIFByZXBlbmQgYW55IGxlZnRvdmVyIHNhbXBsZXMgbmVlZGVkIGZvciBjcm9zcy1ibG9jayBpbnRlcnBvbGF0aW9uLgogICAgbGV0IGRhdGEgPSBjaGFubmVsOwogICAgaWYgKHRoaXMuX3RhaWwubGVuZ3RoKSB7CiAgICAgIGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuX3RhaWwubGVuZ3RoICsgY2hhbm5lbC5sZW5ndGgpOwogICAgICBkYXRhLnNldCh0aGlzLl90YWlsLCAwKTsKICAgICAgZGF0YS5zZXQoY2hhbm5lbCwgdGhpcy5fdGFpbC5sZW5ndGgpOwogICAgfQoKICAgIGNvbnN0IHJhdGlvID0gdGhpcy5fcmF0aW87CiAgICBsZXQgdCA9IHRoaXMuX2ZyYWM7CiAgICB3aGlsZSAoTWF0aC5mbG9vcih0KSArIDEgPCBkYXRhLmxlbmd0aCkgewogICAgICBjb25zdCBpID0gTWF0aC5mbG9vcih0KTsKICAgICAgY29uc3QgZnJhYyA9IHQgLSBpOwogICAgICBjb25zdCBzID0gZGF0YVtpXSArIChkYXRhW2kgKyAxXSAtIGRhdGFbaV0pICogZnJhYzsgLy8gbGluZWFyIGludGVycAogICAgICBsZXQgdiA9IE1hdGguZmxvb3IoMzI3NjcgKiBzKTsKICAgICAgaWYgKHYgPiAzMjc2NykgdiA9IDMyNzY3OwogICAgICBlbHNlIGlmICh2IDwgLTMyNzY4KSB2ID0gLTMyNzY4OwogICAgICB0aGlzLl9idWZbdGhpcy5fbisrXSA9IHY7CiAgICAgIGlmICh0aGlzLl9uID09PSBGUkFNRSkgewogICAgICAgIHRoaXMucG9ydC5wb3N0TWVzc2FnZSh0aGlzLl9idWYuc2xpY2UoKSk7CiAgICAgICAgdGhpcy5fbiA9IDA7CiAgICAgIH0KICAgICAgdCArPSByYXRpbzsKICAgIH0KCiAgICBjb25zdCBrZWVwRnJvbSA9IE1hdGguZmxvb3IodCk7CiAgICB0aGlzLl90YWlsID0gZGF0YS5zbGljZShrZWVwRnJvbSk7CiAgICB0aGlzLl9mcmFjID0gdCAtIGtlZXBGcm9tOwogICAgcmV0dXJuIHRydWU7CiAgfQp9CgpyZWdpc3RlclByb2Nlc3NvcigicGNtLXdvcmtsZXQiLCBQQ01Xb3JrbGV0KTsK",import.meta.url).href,this.context=null,this.stream=null,this.node=null,this.source=null}async start(){if(this.context)return;this.stream=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}});const t=globalThis.AudioContext||globalThis.webkitAudioContext;try{this.context=new t({sampleRate:16e3})}catch{this.context=new t}this.context.state==="suspended"&&await this.context.resume(),await this.context.audioWorklet.addModule(this.workletUrl),this.source=this.context.createMediaStreamSource(this.stream),this.node=new AudioWorkletNode(this.context,"pcm-worklet"),this.node.port.onmessage=i=>this.onFrame(i.data),this.source.connect(this.node);const r=this.context.createGain();r.gain.value=0,this.node.connect(r),r.connect(this.context.destination),this._sink=r}get sampleRate(){return this.context?this.context.sampleRate:null}async stop(){var t,r,i;this.node&&(this.node.port.onmessage=null);try{(t=this.source)==null||t.disconnect(),(r=this.node)==null||r.disconnect(),(i=this._sink)==null||i.disconnect()}catch{}this.stream&&this.stream.getTracks().forEach(n=>n.stop()),this.context&&await this.context.close(),this.context=null,this.stream=null,this.node=null,this.source=null}}const hl="/jarvis/",Go=`${hl}wakeword/`,D2=`${hl}ort/`,P2=`${hl}wakeword/mic-worklet.js`,U2=2500;async function L2(e,t=()=>{}){let r=null,i=null,n=0;try{(await navigator.mediaDevices.getUserMedia({audio:!0}).catch(u=>{throw t(`Microphone permission denied: ${u.message}`),u})).getTracks().forEach(u=>u.stop()),xe.wasm.wasmPaths=D2,xe.wasm.numThreads=1,xe.wasm.simd=!1,xe.wasm&&(xe.webgpu=!1,xe.webgl=!1),r=await fl.create({baseUrl:Go,wakewordModels:["hey_jarvis"],melspecModelPath:`${Go}melspectrogram.onnx`,embeddingModelPath:`${Go}embedding_model.onnx`,threshold:.5,onDetection:()=>{const u=Date.now();u-n<U2||(n=u,e())}}),i=new M2(async u=>{try{await r.predict(u)}catch(d){const c=d instanceof Error?`${d.name}: ${d.message}`:String(d);t(`wakeword:predict-error ${c}`)}},{workletUrl:P2}),await i.start()}catch(o){const u=o instanceof Error?`${o.name}: ${o.message}`:String(o);if(t(`wakeword:init-error ${u}`),i)try{await i.stop()}catch{}if(r)try{await r.reset()}catch{}return async()=>{}}const a=i,s=r;return async()=>{try{await a.stop()}catch{}try{await s.reset()}catch{}}}var om=kr("<option> </option>"),W2=kr('<div class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div> <span class="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Listening</span>',1),G2=kr('<div class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div> <span class="text-[11px] font-mono text-blue-400 uppercase tracking-wider">Speaking</span>',1),q2=kr('<div class="w-2 h-2 rounded-full bg-emerald-400"></div> <span class="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">Standby</span>',1),V2=kr('<div class="w-2 h-2 rounded-full bg-slate-600"></div> <span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Offline</span>',1),F2=kr('<div class="relative"><!> <div class="absolute inset-0 bg-cyan-400 blur-xl opacity-40 animate-pulse"></div></div>'),H2=kr('<div class="relative"><!> <div class="absolute inset-0 bg-blue-400 blur-xl opacity-40 animate-pulse"></div></div>'),j2=kr('<div class="py-1.5 border-b border-slate-800/30 break-words"><span class="text-slate-600 mr-2">›</span> <span> </span></div>'),K2=kr('<main class="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black relative overflow-hidden"><div class="fixed inset-0 pointer-events-none"><div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]"></div> <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div></div> <header class="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md px-6 py-4 flex items-center justify-between z-10"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20"><!></div> <div><h1 class="font-bold tracking-wider text-base uppercase text-slate-100 flex items-center gap-2">Shorekeeper <span class="text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 tracking-widest">DEEPGRAM STT</span></h1> <p class="text-[11px] text-slate-500 font-mono tracking-wide mt-0.5">Tethys Voice Core</p></div></div> <div class="md:hidden"><select class="bg-slate-900/80 border border-slate-700 rounded-lg px-2 py-1 text-[11px] text-slate-300 focus:outline-none focus:border-cyan-500/50"></select></div> <div class="hidden md:flex items-center gap-3 text-xs font-mono text-slate-400"><select class="bg-slate-900/80 border border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-300 focus:outline-none focus:border-cyan-500/50"></select> <div class="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800/60 bg-slate-900/40"><div></div> <span class="text-slate-300">Bridge</span></div> <div class="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800/60 bg-slate-900/40"><div></div> <span class="text-slate-300">Gemini</span></div></div></header> <div class="flex-1 max-w-5xl w-full mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 z-10 items-start"><div class="lg:col-span-6 flex flex-col items-center justify-center min-h-[400px] border border-slate-800/60 rounded-3xl bg-slate-900/20 backdrop-blur-xl p-8 relative overflow-hidden shadow-2xl"><div class="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800/60 bg-slate-950/50 backdrop-blur-md"><!></div> <div class="relative my-8 flex items-center justify-center"><div></div> <div></div> <button><!></button></div> <div class="w-full text-center mt-6"><div class="min-h-[80px] w-full flex items-center justify-center bg-slate-950/50 rounded-2xl border border-slate-800/80 p-5 shadow-inner"><p> </p></div></div></div> <div class="lg:col-span-6 flex flex-col gap-6 w-full"><div class="bg-slate-900/30 border border-slate-800/60 rounded-3xl p-6 backdrop-blur-xl flex flex-col flex-1 min-h-[400px] relative"><div class="flex items-center justify-between mb-4 border-b border-slate-800/50 pb-4"><h3 class="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2"><!> System Logs</h3> <div class="flex items-center gap-2"><span class="text-[10px] font-mono text-emerald-500/70 border border-emerald-900/50 bg-emerald-950/20 px-2 py-0.5 rounded-md">Deepgram Nova-3</span> <span class="text-[10px] font-mono text-slate-500 border border-slate-800 bg-slate-900 px-2 py-0.5 rounded-md">v2.0</span></div></div> <div class="flex-1 overflow-y-auto space-y-2 font-mono text-xs pr-2 custom-scrollbar flex flex-col-reverse" style="max-height: 400px;"></div></div></div></div></main>');function Z2(e,t){Iu(t,!0);let r=at("off"),i=null,n=at("idle"),a=at(""),s=at("Schnee... welcome back. Shorekeeper JARVIS core is active.");const o=[{name:"Aoede",desc:"Breezy"},{name:"Kore",desc:"Firm"},{name:"Leda",desc:"Youthful"},{name:"Zephyr",desc:"Bright"},{name:"Callirrhoe",desc:"Easy-going"},{name:"Autonoe",desc:"Bright"},{name:"Despina",desc:"Smooth"},{name:"Erinome",desc:"Clear"},{name:"Laomedeia",desc:"Upbeat"},{name:"Achernar",desc:"Soft"},{name:"Gacrux",desc:"Mature"},{name:"Pulcherrima",desc:"Forward"},{name:"Vindemiatrix",desc:"Gentle"},{name:"Sulafat",desc:"Warm"}];let u=at("Achernar");function d(re){const fe=re.target;ae(u,fe.value,!0),ae(c,[...q(c),`[Voice] Switching to: ${q(u)}`],!0),m&&m.readyState===WebSocket.OPEN&&m.send(JSON.stringify({type:"voiceChange",voice:q(u)}))}let c=at(ii(["[System] Tethys Core Initialized (Bun + Elysia.js + Svelte 5)","[Network] WebSocket Bridge endpoint /jarvis/ws","[Voice] Gemini Live Engine Ready"])),f=at(!1),h=at(!1),m=null,_=null,b=null;const $=c1();Y$(()=>{v()});function v(){try{const re=location.protocol==="https:"?"wss":"ws";m=new WebSocket(`${re}://${location.host}/jarvis/ws`),m.onopen=()=>{ae(f,!0),ae(c,[...q(c),"[WS] Connected to Elysia.js server (/jarvis/ws)"],!0)},m.onmessage=fe=>{let Ee;try{Ee=JSON.parse(fe.data)}catch{return}switch(Ee.type){case"audio":$.play(Ee.data),ae(n,"speaking");break;case"transcript":Ee.role==="assistant"||Ee.role==="model"?ae(s,Ee.text,!0):Ee.role==="user"&&ae(a,Ee.text,!0);break;case"status":Ee.state==="processing"?(ae(n,"processing"),ae(c,[...q(c),"[Hermes] Processing..."],!0)):Ee.state==="ready"&&(ae(h,!0),Ee.log&&ae(c,[...q(c),Ee.log],!0));break;case"turnComplete":$.stop(),q(r)==="active"?(ae(n,"listening"),void 0):ae(n,"idle");break;case"error":ae(c,[...q(c),`[Error] ${Ee.error}`],!0);break}},m.onclose=()=>{ae(f,!1),ae(h,!1),b&&(b(),b=null),q(r)==="active"&&ae(r,i?"standby":"off",!0),ae(n,"idle"),ae(c,[...q(c),"[WS] Disconnected — reconnecting in 1s..."],!0),_&&clearTimeout(_),_=setTimeout(v,1e3)},m.onerror=()=>{ae(c,[...q(c),"[WS] Connection error — retrying..."],!0)}}catch(re){console.error("WS Error:",re)}}function w(){}function I(){}async function k(){if(!i){ae(c,[...q(c),"[WakeWord] Initializing microphone..."],!0);try{(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(fe=>fe.stop()),ae(c,[...q(c),"[WakeWord] Mic permission granted"],!0)}catch(re){ae(c,[...q(c),`[Error] Mic Access Denied: ${re instanceof Error?re.message:String(re)}`],!0),ae(n,"error");return}i=await L2(()=>T(),re=>{ae(c,[...q(c),`[WakeWord] ${re}`],!0)}),ae(c,[...q(c),'[WakeWord] Standby — ucapkan "Hey Jarvis" untuk mulai'],!0)}}async function T(){q(r)==="standby"&&(ae(c,[...q(c),"[WakeWord] Terpicu — mengaktifkan sesi suara"],!0),i&&(await i(),i=null),await C())}async function C(){if(!m||m.readyState!==WebSocket.OPEN||!q(h)){ae(c,[...q(c),"[Voice] Tunggu sampai Gemini Live berstatus Ready"],!0),ae(r,"standby"),await k();return}try{b=await u1(re=>{m&&m.readyState===WebSocket.OPEN&&m.send(JSON.stringify({type:"audio",data:re}))},re=>{ae(c,[...q(c),`[Diag] ${re}`],!0),m&&m.readyState===WebSocket.OPEN&&m.send(JSON.stringify({type:"diagnostic",message:re}))}),ae(r,"active"),ae(n,"listening"),ae(c,[...q(c),"[Mic] Capture started (PCM 16kHz → Gemini Live)"],!0)}catch(re){const fe=re instanceof Error?`${re.name}: ${re.message}`:String(re);ae(c,[...q(c),`[Mic] Error: ${fe}`],!0),m&&m.readyState===WebSocket.OPEN&&m.send(JSON.stringify({type:"diagnostic",message:`capture:error ${fe}`})),ae(r,"standby"),await k()}}async function z(){q(r)==="off"?(ae(c,[...q(c),"[Voice] Tap-to-talk: langsung aktif"],!0),await C()):(b&&(b(),b=null),i&&(await i(),i=null),ae(r,"off"),ae(n,"idle"),ae(c,[...q(c),"[Voice] Dimatikan"],!0))}var x=K2(),N=ft(Ne(x),2),P=Ne(N),F=Ne(P),j=Ne(F);i1(j,{class:"w-5 h-5 text-white"});var Z=ft(P,2),B=Ne(Z);Va(B,21,()=>o,qa,(re,fe)=>{var Ee=om(),yt=Ne(Ee),cr={};ba(()=>{va(yt,q(fe).name),cr!==(cr=q(fe).name)&&(Ee.value=(Ee.__value=q(fe).name)??"")}),Qe(re,Ee)});var Y=ft(Z,2),K=Ne(Y);Va(K,21,()=>o,qa,(re,fe)=>{var Ee=om(),yt=Ne(Ee),cr={};ba(()=>{va(yt,`${q(fe).name??""} — ${q(fe).desc??""}`),cr!==(cr=q(fe).name)&&(Ee.value=(Ee.__value=q(fe).name)??"")}),Qe(re,Ee)});var J=ft(K,2),be=Ne(J),L=ft(J,2),de=Ne(L),W=ft(N,2),H=Ne(W),Q=Ne(H),G=Ne(Q);{var Se=re=>{var fe=W2();Qe(re,fe)},dt=re=>{var fe=G2();Qe(re,fe)},Pe=re=>{var fe=q2();Qe(re,fe)},rt=re=>{var fe=V2();Qe(re,fe)};hc(G,re=>{q(r)==="active"&&q(n)==="listening"?re(Se):q(r)==="active"&&q(n)==="speaking"?re(dt,1):q(r)==="standby"?re(Pe,2):re(rt,-1)})}var Xe=ft(Q,2),it=Ne(Xe),Ye=ft(it,2),It=ft(Ye,2),ze=Ne(It);{var se=re=>{var fe=F2(),Ee=Ne(fe);$c(Ee,{class:"w-10 h-10 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,1)]"}),Qe(re,fe)},st=re=>{var fe=H2(),Ee=Ne(fe);a1(Ee,{class:"w-10 h-10 text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,1)]"}),Qe(re,fe)},ki=re=>{$c(re,{class:"w-10 h-10 text-emerald-400/80 group-hover/btn:text-emerald-400 transition-colors"})},qr=re=>{r1(re,{class:"w-10 h-10 text-slate-600 group-hover/btn:text-slate-400 transition-colors"})};hc(ze,re=>{q(r)==="active"&&q(n)==="listening"?re(se):q(r)==="active"&&q(n)==="speaking"?re(st,1):q(r)==="standby"?re(ki,2):re(qr,-1)})}var Qt=ft(Xe,2),Vr=Ne(Qt),ln=Ne(Vr),dr=Ne(ln),na=ft(H,2),aa=Ne(na),dn=Ne(aa),sa=Ne(dn),Jt=Ne(sa);n1(Jt,{class:"w-4 h-4"});var hs=ft(dn,2);Va(hs,21,()=>[...q(c)].reverse(),qa,(re,fe)=>{var Ee=j2(),yt=ft(Ne(Ee),2),cr=Ne(yt);ba(oa=>{Rr(yt,1,oa),va(cr,q(fe))},[()=>ag(q(fe).includes("[Error]")?"text-rose-400":q(fe).includes("[Wake]")?"text-emerald-400":q(fe).includes("Deepgram")?"text-emerald-300":q(fe).includes("[Gemini]")?"text-cyan-400":"text-slate-400")]),Qe(re,Ee)}),ba(()=>{Rr(be,1,`w-2 h-2 rounded-full ${q(f)?"bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]":"bg-amber-400"}`),Rr(de,1,`w-2 h-2 rounded-full ${q(h)?"bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]":"bg-slate-600"}`),Rr(it,1,`absolute w-64 h-64 rounded-full border border-cyan-500/10 transition-all duration-1000 ${q(r)==="active"&&q(n)==="listening"?"scale-150 opacity-50":q(r)==="standby"?"scale-110 opacity-30 border-emerald-500/20":"scale-90 opacity-0"}`),Rr(Ye,1,`absolute w-52 h-52 rounded-full border border-blue-500/20 transition-all duration-700 ${q(r)==="active"&&q(n)==="speaking"?"scale-125 opacity-70 animate-pulse":"scale-95 opacity-0"}`),Rr(It,1,`w-40 h-40 rounded-full flex flex-col items-center justify-center transition-all duration-500 relative z-10 group/btn outline-none ${q(r)==="active"&&q(n)==="listening"?"bg-gradient-to-b from-cyan-900 to-slate-900 border border-cyan-500/50 shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)] scale-105":q(r)==="active"&&q(n)==="speaking"?"bg-gradient-to-b from-blue-900 to-slate-900 border border-blue-500/50 shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)]":q(r)==="standby"?"bg-slate-900 border border-emerald-500/40 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] hover:scale-105":"bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-800"}`),Rr(ln,1,`text-[15px] font-medium leading-relaxed transition-colors duration-300 ${q(a)?"text-emerald-100":"text-slate-600 italic"}`),va(dr,q(a)||(q(r)==="standby"?'Menunggu "Hey Jarvis"...':q(r)==="active"?"Mendengarkan suara...":"Ketuk orb untuk memulai."))}),Ga("change",B,d),yc(B,()=>q(u),re=>ae(u,re)),Ga("change",K,d),yc(K,()=>q(u),re=>ae(u,re)),Ga("click",It,z),Qe(e,x),Tu()}tg(["change","click"]);A$(Z2,{target:document.getElementById("app")});
