import{j as B,_ as H,r as j,o as Y,c as W,a as o,d as tt,b as P,e as Tt,k as Nt,F as ft,l as $t,q as ht}from"./index-5f165e8f.js";import{C as Rt}from"./CanvasFun-23f88854.js";var dt={},Bt={get exports(){return dt},set exports(r){dt=r}},J={},Vt={get exports(){return J},set exports(r){J=r}};/*!
  * Bootstrap index.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var mt;function U(){return mt||(mt=1,function(r,y){(function(e,i){i(y)})(B,function(e){const s="transitionend",n=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),f=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},u=t=>{let c=t.getAttribute("data-bs-target");if(!c||c==="#"){let p=t.getAttribute("href");if(!p||!p.includes("#")&&!p.startsWith("."))return null;p.includes("#")&&!p.startsWith("#")&&(p=`#${p.split("#")[1]}`),c=p&&p!=="#"?p.trim():null}return c},w=t=>{const c=u(t);return c&&document.querySelector(c)?c:null},A=t=>{const c=u(t);return c?document.querySelector(c):null},g=t=>{if(!t)return 0;let{transitionDuration:c,transitionDelay:p}=window.getComputedStyle(t);const $=Number.parseFloat(c),C=Number.parseFloat(p);return!$&&!C?0:(c=c.split(",")[0],p=p.split(",")[0],(Number.parseFloat(c)+Number.parseFloat(p))*1e3)},S=t=>{t.dispatchEvent(new Event(s))},_=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),v=t=>_(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(t):null,b=t=>{if(!_(t)||t.getClientRects().length===0)return!1;const c=getComputedStyle(t).getPropertyValue("visibility")==="visible",p=t.closest("details:not([open])");if(!p)return c;if(p!==t){const $=t.closest("summary");if($&&$.parentNode!==p||$===null)return!1}return c},h=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",k=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const c=t.getRootNode();return c instanceof ShadowRoot?c:null}return t instanceof ShadowRoot?t:t.parentNode?k(t.parentNode):null},V=()=>{},T=t=>{t.offsetHeight},I=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,M=[],a=t=>{document.readyState==="loading"?(M.length||document.addEventListener("DOMContentLoaded",()=>{for(const c of M)c()}),M.push(t)):t()},l=()=>document.documentElement.dir==="rtl",m=t=>{a(()=>{const c=I();if(c){const p=t.NAME,$=c.fn[p];c.fn[p]=t.jQueryInterface,c.fn[p].Constructor=t,c.fn[p].noConflict=()=>(c.fn[p]=$,t.jQueryInterface)}})},E=t=>{typeof t=="function"&&t()},N=(t,c,p=!0)=>{if(!p){E(t);return}const $=5,C=g(c)+$;let O=!1;const R=({target:q})=>{q===c&&(O=!0,c.removeEventListener(s,R),E(t))};c.addEventListener(s,R),setTimeout(()=>{O||S(c)},C)},x=(t,c,p,$)=>{const C=t.length;let O=t.indexOf(c);return O===-1?!p&&$?t[C-1]:t[0]:(O+=p?1:-1,$&&(O=(O+C)%C),t[Math.max(0,Math.min(O,C-1))])};e.defineJQueryPlugin=m,e.execute=E,e.executeAfterTransition=N,e.findShadowRoot=k,e.getElement=v,e.getElementFromSelector=A,e.getNextActiveElement=x,e.getSelectorFromElement=w,e.getTransitionDurationFromElement=g,e.getUID=f,e.getjQuery=I,e.isDisabled=h,e.isElement=_,e.isRTL=l,e.isVisible=b,e.noop=V,e.onDOMContentLoaded=a,e.reflow=T,e.toType=n,e.triggerTransitionEnd=S,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(Vt,J)),J}var et={},Ft={get exports(){return et},set exports(r){et=r}};/*!
  * Bootstrap event-handler.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var gt;function Z(){return gt||(gt=1,function(r,y){(function(e,i){r.exports=i(U())})(B,function(e){const i=/[^.]*(?=\..*)\.|.*/,d=/\..*/,s=/::\d+$/,n={};let f=1;const u={mouseenter:"mouseover",mouseleave:"mouseout"},w=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function A(a,l){return l&&`${l}::${f++}`||a.uidEvent||f++}function g(a){const l=A(a);return a.uidEvent=l,n[l]=n[l]||{},n[l]}function S(a,l){return function m(E){return M(E,{delegateTarget:a}),m.oneOff&&I.off(a,E.type,l),l.apply(a,[E])}}function _(a,l,m){return function E(N){const x=a.querySelectorAll(l);for(let{target:t}=N;t&&t!==this;t=t.parentNode)for(const c of x)if(c===t)return M(N,{delegateTarget:t}),E.oneOff&&I.off(a,N.type,l,m),m.apply(t,[N])}}function v(a,l,m=null){return Object.values(a).find(E=>E.callable===l&&E.delegationSelector===m)}function b(a,l,m){const E=typeof l=="string",N=E?m:l||m;let x=T(a);return w.has(x)||(x=a),[E,N,x]}function h(a,l,m,E,N){if(typeof l!="string"||!a)return;let[x,t,c]=b(l,m,E);l in u&&(t=(ut=>function(K){if(!K.relatedTarget||K.relatedTarget!==K.delegateTarget&&!K.delegateTarget.contains(K.relatedTarget))return ut.call(this,K)})(t));const p=g(a),$=p[c]||(p[c]={}),C=v($,t,x?m:null);if(C){C.oneOff=C.oneOff&&N;return}const O=A(t,l.replace(i,"")),R=x?_(a,m,t):S(a,t);R.delegationSelector=x?m:null,R.callable=t,R.oneOff=N,R.uidEvent=O,$[O]=R,a.addEventListener(c,R,x)}function k(a,l,m,E,N){const x=v(l[m],E,N);x&&(a.removeEventListener(m,x,Boolean(N)),delete l[m][x.uidEvent])}function V(a,l,m,E){const N=l[m]||{};for(const x of Object.keys(N))if(x.includes(E)){const t=N[x];k(a,l,m,t.callable,t.delegationSelector)}}function T(a){return a=a.replace(d,""),u[a]||a}const I={on(a,l,m,E){h(a,l,m,E,!1)},one(a,l,m,E){h(a,l,m,E,!0)},off(a,l,m,E){if(typeof l!="string"||!a)return;const[N,x,t]=b(l,m,E),c=t!==l,p=g(a),$=p[t]||{},C=l.startsWith(".");if(typeof x<"u"){if(!Object.keys($).length)return;k(a,p,t,x,N?m:null);return}if(C)for(const O of Object.keys(p))V(a,p,O,l.slice(1));for(const O of Object.keys($)){const R=O.replace(s,"");if(!c||l.includes(R)){const q=$[O];k(a,p,t,q.callable,q.delegationSelector)}}},trigger(a,l,m){if(typeof l!="string"||!a)return null;const E=e.getjQuery(),N=T(l),x=l!==N;let t=null,c=!0,p=!0,$=!1;x&&E&&(t=E.Event(l,m),E(a).trigger(t),c=!t.isPropagationStopped(),p=!t.isImmediatePropagationStopped(),$=t.isDefaultPrevented());let C=new Event(l,{bubbles:c,cancelable:!0});return C=M(C,m),$&&C.preventDefault(),p&&a.dispatchEvent(C),C.defaultPrevented&&t&&t.preventDefault(),C}};function M(a,l){for(const[m,E]of Object.entries(l||{}))try{a[m]=E}catch{Object.defineProperty(a,m,{configurable:!0,get(){return E}})}return a}return I})}(Ft)),et}var nt={},jt={get exports(){return nt},set exports(r){nt=r}};/*!
  * Bootstrap selector-engine.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var bt;function _t(){return bt||(bt=1,function(r,y){(function(e,i){r.exports=i(U())})(B,function(e){return{find(d,s=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(s,d))},findOne(d,s=document.documentElement){return Element.prototype.querySelector.call(s,d)},children(d,s){return[].concat(...d.children).filter(n=>n.matches(s))},parents(d,s){const n=[];let f=d.parentNode.closest(s);for(;f;)n.push(f),f=f.parentNode.closest(s);return n},prev(d,s){let n=d.previousElementSibling;for(;n;){if(n.matches(s))return[n];n=n.previousElementSibling}return[]},next(d,s){let n=d.nextElementSibling;for(;n;){if(n.matches(s))return[n];n=n.nextElementSibling}return[]},focusableChildren(d){const s=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(s,d).filter(n=>!e.isDisabled(n)&&e.isVisible(n))}}})}(jt)),nt}var st={},Pt={get exports(){return st},set exports(r){st=r}},ot={},qt={get exports(){return ot},set exports(r){ot=r}};/*!
  * Bootstrap manipulator.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Et;function Ct(){return Et||(Et=1,function(r,y){(function(e,i){r.exports=i()})(B,function(){function e(s){if(s==="true")return!0;if(s==="false")return!1;if(s===Number(s).toString())return Number(s);if(s===""||s==="null")return null;if(typeof s!="string")return s;try{return JSON.parse(decodeURIComponent(s))}catch{return s}}function i(s){return s.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}return{setDataAttribute(s,n,f){s.setAttribute(`data-bs-${i(n)}`,f)},removeDataAttribute(s,n){s.removeAttribute(`data-bs-${i(n)}`)},getDataAttributes(s){if(!s)return{};const n={},f=Object.keys(s.dataset).filter(u=>u.startsWith("bs")&&!u.startsWith("bsConfig"));for(const u of f){let w=u.replace(/^bs/,"");w=w.charAt(0).toLowerCase()+w.slice(1,w.length),n[w]=e(s.dataset[u])}return n},getDataAttribute(s,n){return e(s.getAttribute(`data-bs-${i(n)}`))}}})}(qt)),ot}/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var vt;function Kt(){return vt||(vt=1,function(r,y){(function(e,i){r.exports=i(_t(),Ct(),U())})(B,function(e,i,d){const s=_=>_&&typeof _=="object"&&"default"in _?_:{default:_},n=s(e),f=s(i),u=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",w=".sticky-top",A="padding-right",g="margin-right";class S{constructor(){this._element=document.body}getWidth(){const v=document.documentElement.clientWidth;return Math.abs(window.innerWidth-v)}hide(){const v=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,A,b=>b+v),this._setElementAttributes(u,A,b=>b+v),this._setElementAttributes(w,g,b=>b-v)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,A),this._resetElementAttributes(u,A),this._resetElementAttributes(w,g)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(v,b,h){const k=this.getWidth(),V=T=>{if(T!==this._element&&window.innerWidth>T.clientWidth+k)return;this._saveInitialAttribute(T,b);const I=window.getComputedStyle(T).getPropertyValue(b);T.style.setProperty(b,`${h(Number.parseFloat(I))}px`)};this._applyManipulationCallback(v,V)}_saveInitialAttribute(v,b){const h=v.style.getPropertyValue(b);h&&f.default.setDataAttribute(v,b,h)}_resetElementAttributes(v,b){const h=k=>{const V=f.default.getDataAttribute(k,b);if(V===null){k.style.removeProperty(b);return}f.default.removeDataAttribute(k,b),k.style.setProperty(b,V)};this._applyManipulationCallback(v,h)}_applyManipulationCallback(v,b){if(d.isElement(v)){b(v);return}for(const h of n.default.find(v,this._element))b(h)}}return S})}(Pt)),st}var it={},Ht={get exports(){return it},set exports(r){it=r}},rt={},Yt={get exports(){return rt},set exports(r){rt=r}};/*!
  * Bootstrap data.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var yt;function Wt(){return yt||(yt=1,function(r,y){(function(e,i){r.exports=i()})(B,function(){const e=new Map;return{set(d,s,n){e.has(d)||e.set(d,new Map);const f=e.get(d);if(!f.has(s)&&f.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(f.keys())[0]}.`);return}f.set(s,n)},get(d,s){return e.has(d)&&e.get(d).get(s)||null},remove(d,s){if(!e.has(d))return;const n=e.get(d);n.delete(s),n.size===0&&e.delete(d)}}})}(Yt)),rt}var at={},Ut={get exports(){return at},set exports(r){at=r}};/*!
  * Bootstrap config.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var At;function pt(){return At||(At=1,function(r,y){(function(e,i){r.exports=i(U(),Ct())})(B,function(e,i){const s=(f=>f&&typeof f=="object"&&"default"in f?f:{default:f})(i);class n{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(u){return u=this._mergeConfigObj(u),u=this._configAfterMerge(u),this._typeCheckConfig(u),u}_configAfterMerge(u){return u}_mergeConfigObj(u,w){const A=e.isElement(w)?s.default.getDataAttribute(w,"config"):{};return{...this.constructor.Default,...typeof A=="object"?A:{},...e.isElement(w)?s.default.getDataAttributes(w):{},...typeof u=="object"?u:{}}}_typeCheckConfig(u,w=this.constructor.DefaultType){for(const A of Object.keys(w)){const g=w[A],S=u[A],_=e.isElement(S)?"element":e.toType(S);if(!new RegExp(g).test(_))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${A}" provided type "${_}" but expected type "${g}".`)}}}return n})}(Ut)),at}/*!
  * Bootstrap base-component.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var wt;function zt(){return wt||(wt=1,function(r,y){(function(e,i){r.exports=i(Wt(),U(),Z(),pt())})(B,function(e,i,d,s){const n=S=>S&&typeof S=="object"&&"default"in S?S:{default:S},f=n(e),u=n(d),w=n(s),A="5.2.3";class g extends w.default{constructor(_,v){super(),_=i.getElement(_),_&&(this._element=_,this._config=this._getConfig(v),f.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){f.default.remove(this._element,this.constructor.DATA_KEY),u.default.off(this._element,this.constructor.EVENT_KEY);for(const _ of Object.getOwnPropertyNames(this))this[_]=null}_queueCallback(_,v,b=!0){i.executeAfterTransition(_,v,b)}_getConfig(_){return _=this._mergeConfigObj(_,this._element),_=this._configAfterMerge(_),this._typeCheckConfig(_),_}static getInstance(_){return f.default.get(i.getElement(_),this.DATA_KEY)}static getOrCreateInstance(_,v={}){return this.getInstance(_)||new this(_,typeof v=="object"?v:null)}static get VERSION(){return A}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(_){return`${_}${this.EVENT_KEY}`}}return g})}(Ht)),it}var lt={},Qt={get exports(){return lt},set exports(r){lt=r}};/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Dt;function Gt(){return Dt||(Dt=1,function(r,y){(function(e,i){r.exports=i(Z(),U(),pt())})(B,function(e,i,d){const s=b=>b&&typeof b=="object"&&"default"in b?b:{default:b},n=s(e),f=s(d),u="backdrop",w="fade",A="show",g=`mousedown.bs.${u}`,S={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},_={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class v extends f.default{constructor(h){super(),this._config=this._getConfig(h),this._isAppended=!1,this._element=null}static get Default(){return S}static get DefaultType(){return _}static get NAME(){return u}show(h){if(!this._config.isVisible){i.execute(h);return}this._append();const k=this._getElement();this._config.isAnimated&&i.reflow(k),k.classList.add(A),this._emulateAnimation(()=>{i.execute(h)})}hide(h){if(!this._config.isVisible){i.execute(h);return}this._getElement().classList.remove(A),this._emulateAnimation(()=>{this.dispose(),i.execute(h)})}dispose(){this._isAppended&&(n.default.off(this._element,g),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const h=document.createElement("div");h.className=this._config.className,this._config.isAnimated&&h.classList.add(w),this._element=h}return this._element}_configAfterMerge(h){return h.rootElement=i.getElement(h.rootElement),h}_append(){if(this._isAppended)return;const h=this._getElement();this._config.rootElement.append(h),n.default.on(h,g,()=>{i.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(h){i.executeAfterTransition(h,this._getElement(),this._config.isAnimated)}}return v})}(Qt)),lt}var ct={},Jt={get exports(){return ct},set exports(r){ct=r}};/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var St;function Xt(){return St||(St=1,function(r,y){(function(e,i){r.exports=i(Z(),_t(),pt())})(B,function(e,i,d){const s=I=>I&&typeof I=="object"&&"default"in I?I:{default:I},n=s(e),f=s(i),u=s(d),w="focustrap",g=".bs.focustrap",S=`focusin${g}`,_=`keydown.tab${g}`,v="Tab",b="forward",h="backward",k={autofocus:!0,trapElement:null},V={autofocus:"boolean",trapElement:"element"};class T extends u.default{constructor(M){super(),this._config=this._getConfig(M),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return k}static get DefaultType(){return V}static get NAME(){return w}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),n.default.off(document,g),n.default.on(document,S,M=>this._handleFocusin(M)),n.default.on(document,_,M=>this._handleKeydown(M)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,n.default.off(document,g))}_handleFocusin(M){const{trapElement:a}=this._config;if(M.target===document||M.target===a||a.contains(M.target))return;const l=f.default.focusableChildren(a);l.length===0?a.focus():this._lastTabNavDirection===h?l[l.length-1].focus():l[0].focus()}_handleKeydown(M){M.key===v&&(this._lastTabNavDirection=M.shiftKey?h:b)}}return T})}(Jt)),ct}var X={},Zt={get exports(){return X},set exports(r){X=r}};/*!
  * Bootstrap component-functions.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var xt;function te(){return xt||(xt=1,function(r,y){(function(e,i){i(y,Z(),U())})(B,function(e,i,d){const n=(u=>u&&typeof u=="object"&&"default"in u?u:{default:u})(i),f=(u,w="hide")=>{const A=`click.dismiss${u.EVENT_KEY}`,g=u.NAME;n.default.on(document,A,`[data-bs-dismiss="${g}"]`,function(S){if(["A","AREA"].includes(this.tagName)&&S.preventDefault(),d.isDisabled(this))return;const _=d.getElementFromSelector(this)||this.closest(`.${g}`);u.getOrCreateInstance(_)[w]()})};e.enableDismissTrigger=f,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(Zt,X)),X}/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(r,y){(function(e,i){r.exports=i(U(),Z(),_t(),Kt(),zt(),Gt(),Xt(),te())})(B,function(e,i,d,s,n,f,u,w){const A=Q=>Q&&typeof Q=="object"&&"default"in Q?Q:{default:Q},g=A(i),S=A(d),_=A(s),v=A(n),b=A(f),h=A(u),k="modal",T=".bs.modal",I=".data-api",M="Escape",a=`hide${T}`,l=`hidePrevented${T}`,m=`hidden${T}`,E=`show${T}`,N=`shown${T}`,x=`resize${T}`,t=`click.dismiss${T}`,c=`mousedown.dismiss${T}`,p=`keydown.dismiss${T}`,$=`click${T}${I}`,C="modal-open",O="fade",R="show",q="modal-static",ut=".modal.show",K=".modal-dialog",kt=".modal-body",Ot='[data-bs-toggle="modal"]',Lt={backdrop:!0,focus:!0,keyboard:!0},It={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class z extends v.default{constructor(D,L){super(D,L),this._dialog=S.default.findOne(K,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new _.default,this._addEventListeners()}static get Default(){return Lt}static get DefaultType(){return It}static get NAME(){return k}toggle(D){return this._isShown?this.hide():this.show(D)}show(D){this._isShown||this._isTransitioning||g.default.trigger(this._element,E,{relatedTarget:D}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(C),this._adjustDialog(),this._backdrop.show(()=>this._showElement(D)))}hide(){!this._isShown||this._isTransitioning||g.default.trigger(this._element,a).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(R),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const D of[window,this._dialog])g.default.off(D,T);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new b.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new h.default({trapElement:this._element})}_showElement(D){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const L=S.default.findOne(kt,this._dialog);L&&(L.scrollTop=0),e.reflow(this._element),this._element.classList.add(R);const F=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,g.default.trigger(this._element,N,{relatedTarget:D})};this._queueCallback(F,this._dialog,this._isAnimated())}_addEventListeners(){g.default.on(this._element,p,D=>{if(D.key===M){if(this._config.keyboard){D.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),g.default.on(window,x,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),g.default.on(this._element,c,D=>{g.default.one(this._element,t,L=>{if(!(this._element!==D.target||this._element!==L.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(C),this._resetAdjustments(),this._scrollBar.reset(),g.default.trigger(this._element,m)})}_isAnimated(){return this._element.classList.contains(O)}_triggerBackdropTransition(){if(g.default.trigger(this._element,l).defaultPrevented)return;const L=this._element.scrollHeight>document.documentElement.clientHeight,F=this._element.style.overflowY;F==="hidden"||this._element.classList.contains(q)||(L||(this._element.style.overflowY="hidden"),this._element.classList.add(q),this._queueCallback(()=>{this._element.classList.remove(q),this._queueCallback(()=>{this._element.style.overflowY=F},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const D=this._element.scrollHeight>document.documentElement.clientHeight,L=this._scrollBar.getWidth(),F=L>0;if(F&&!D){const G=e.isRTL()?"paddingLeft":"paddingRight";this._element.style[G]=`${L}px`}if(!F&&D){const G=e.isRTL()?"paddingRight":"paddingLeft";this._element.style[G]=`${L}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(D,L){return this.each(function(){const F=z.getOrCreateInstance(this,D);if(typeof D=="string"){if(typeof F[D]>"u")throw new TypeError(`No method named "${D}"`);F[D](L)}})}}return g.default.on(document,$,Ot,function(Q){const D=e.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&Q.preventDefault(),g.default.one(D,E,G=>{G.defaultPrevented||g.default.one(D,m,()=>{e.isVisible(this)&&this.focus()})});const L=S.default.findOne(ut);L&&z.getInstance(L).hide(),z.getOrCreateInstance(D).toggle(this)}),w.enableDismissTrigger(z),e.defineJQueryPlugin(z),z})})(Bt);const Mt=dt;const ee={components:{CanvasDraw:Rt}},ne=o("ul",{class:"nav nav-pills mb-3",id:"pills-tab",role:"tablist"},[o("li",{class:"nav-item",role:"presentation"},[o("button",{class:"nav-link active",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}," 輸入 ")]),o("li",{class:"nav-item",role:"presentation"},[o("button",{class:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}," 手寫 ")]),o("li",{class:"nav-item",role:"presentation"},[o("button",{class:"nav-link",id:"pills-contact-tab","data-bs-toggle":"pill","data-bs-target":"#pills-contact",type:"button",role:"tab","aria-controls":"pills-contact","aria-selected":"false"}," 上傳 ")])],-1),se={class:"tab-content",id:"pills-tabContent"},oe=o("div",{class:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab"},[o("div",{class:"mb-3"},[o("button",{type:"button",class:"fontSelect notoSans"},"思源黑體"),o("button",{type:"button",class:"fontSelect notoSerif"},"思源宋體"),o("button",{type:"button",class:"fontSelect chenYuluoyan"}," 辰於落燕體 ")]),o("div",{class:"mb-1"},[o("input",{type:"text",class:"inputName text-center",placeholder:"請在這裡輸入您的簽名"})]),o("div",{class:"d-flex justify-content-end"},[o("button",{type:"button",class:"colorPicker black"}),o("button",{type:"button",class:"colorPicker blue"}),o("button",{type:"button",class:"colorPicker red"})])],-1),ie={class:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab"},re=o("div",{class:"mb-3"},[o("button",{type:"button"},"清除")],-1),ae={class:"mb-1"},le=o("div",{class:"tab-pane fade",id:"pills-contact",role:"tabpanel","aria-labelledby":"pills-contact-tab"}," 上傳的內容 ",-1);function ce(r,y,e,i,d,s){const n=j("canvas-draw");return Y(),W("div",null,[ne,o("div",se,[oe,o("div",ie,[tt(" 手寫的內容 "),re,o("div",ae,[P(n),tt(">")])]),le])])}const ue=H(ee,[["render",ce]]);const de={components:{SignTabs:ue},setup(){const r=Tt(null);let y;return Nt(()=>{y=new Mt(r.value)}),{modalRef:r,deleteModal:y,openModal:()=>{y.show()}}}},fe={class:"modal fade show",ref:"modalRef",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},_e={class:"modal-dialog modal-dialog-centered"},pe={class:"modal-content"},he=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),me={class:"modal-body d-flex flex-column"},ge=o("div",{class:"modal-footer d-flex flex-column"},[o("p",null,"我了解這是一個具法律效力的本人簽名"),o("button",{type:"button",class:"btn btn-secondary px-5","data-bs-dismiss":"modal"}," 儲存 ")],-1);function be(r,y,e,i,d,s){const n=j("font-awesome-icon"),f=j("sign-tabs");return Y(),W(ft,null,[o("button",{type:"button",onClick:y[0]||(y[0]=(...u)=>i.openModal&&i.openModal(...u)),class:"w-300 bg-white guestBorder p-3"},[P(n,{class:"px-2",icon:"fa-solid fa-plus"}),tt("創建簽名檔 ")]),o("div",fe,[o("div",_e,[o("div",pe,[he,o("div",me,[P(f)]),ge])])],512)],64)}const Ee=H(de,[["render",be]]),ve={components:{ModalMySigning:Ee},setup(){}},ye={class:"mb-5"},Ae=o("h4",null,"我的簽名",-1);function we(r,y,e,i,d,s){const n=j("modal-my-signing");return Y(),W("div",ye,[Ae,P(n)])}const De=H(ve,[["render",we]]);const Se={},xe={class:"mb-5"},Te=o("h4",null,"基本資料",-1),Ne=o("input",{type:"text",class:"basicInfo w-300 guestBorder",placeholder:"請輸入您的姓名"},null,-1),$e=o("input",{type:"email",class:"basicInfo w-300 guestBorder",placeholder:"請輸入您的電子信箱"},null,-1),Ce=[Te,Ne,$e];function Me(r,y){return Y(),W("div",xe,Ce)}const ke=H(Se,[["render",Me]]);const Oe={setup(){const r=Tt(null);let y;return Nt(()=>{y=new Mt(r.value)}),{modalRef:r,deleteModal:y,openModal:()=>{y.show()}}}},Le={class:"modal fade show",ref:"modalRef",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ie=$t('<div class="modal-dialog modal-dialog-centered"><div class="modal-content"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button><div class="modal-header border-bottom border-success"><h5 class="modal-title text-success">邀請簽署人</h5></div><div class="modal-body d-flex flex-column"><label for="othersEmail">簽署人信箱*</label><input id="othersEmail" type="email" class="basicInfo guestBorder" placeholder="請輸入您的電子信箱"><div class="d-flex"><div><label for="othersFirstName">姓氏*</label><input id="othersFirstName" type="text" class="basicInfo guestBorder" placeholder="請輸入簽署人姓氏"></div><div><label for="othersLastName">名字</label><input id="othersLastName" type="email" class="basicInfo othersName" placeholder="請輸入簽署人名字"></div></div></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> 儲存 </button></div></div></div>',1),Re=[Ie];function Be(r,y,e,i,d,s){const n=j("font-awesome-icon");return Y(),W(ft,null,[o("button",{type:"button",class:"wh-50 bg-white guestBorder",onClick:y[0]||(y[0]=f=>i.openModal())},[P(n,{icon:"fa-solid fa-user-plus"})]),o("div",Le,Re,512)],64)}const Ve=H(Oe,[["render",Be]]);const Fe={components:{ModalInviteOthers:Ve},setup(){}},je={class:"w-300 mb-5 d-flex justify-content-between"},Pe=o("div",null,[o("h4",null,"邀請簽署人"),o("div",{class:"form-check form-switch"},[o("div",{class:"d-flex justify-content-between"},[o("span",{class:"px-1"},"無簽署順序"),o("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),o("span",{class:"px-1"},"有簽署順序")]),o("div",{class:"d-flex justify-content-between"},[o("span",null,"無期限"),o("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),o("span",null,"指定簽署期限")])])],-1);function qe(r,y,e,i,d,s){const n=j("modal-invite-others");return Y(),W("div",je,[Pe,P(n)])}const Ke=H(Fe,[["render",qe]]),He=""+new URL("FakeInvoice-401a6e0b.svg",import.meta.url).href;const Ye={},We={class:"fakeImg",src:He,alt:""};function Ue(r,y){return Y(),W("img",We)}const ze=H(Ye,[["render",Ue]]);const Qe={components:{MySigning:De,BasicInfo:ke,InviteOthers:Ke,PdfPreview:ze}},Ge={class:"navbar navbar-light bg-light"},Je={class:"container-fluid d-flex"},Xe=o("ul",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},[o("li",null,[o("a",{class:"dropdown-item",href:"#"},"個人與偏好設定")]),o("li",null,[o("a",{class:"dropdown-item",href:"#"},"簽屬人清單")]),o("li",null,[o("a",{class:"dropdown-item",href:"#"},"登出")])],-1),Ze={class:"bannerStep border border-2 my-4"},tn={class:"m-3 mx-auto d-flex justify-content-between w-60"},en={class:"mx-2 p-1 text-success"},nn=$t('<hr class="separateLine"><li><span class="mx-2 text-secondary border border-2 rounded-circle border-secondary px-2">2</span>加入簽名檔 </li><hr class="separateLine"><li><span class="mx-2 text-secondary border border-2 rounded-circle border-secondary px-2">3</span>確認檔案 </li><hr class="separateLine"><li><span class="mx-2 text-secondary border border-2 rounded-circle border-secondary px-2">4</span>下載檔案 </li>',6),sn={class:"d-flex"},on={class:"w-70"},rn={class:"pdfpreview"},an={class:"w-30"},ln={class:"w-60 mx-0"};function cn(r,y,e,i,d,s){const n=j("font-awesome-icon"),f=j("pdf-preview"),u=j("basic-info"),w=j("my-signing"),A=j("invite-others");return Y(),W(ft,null,[o("nav",Ge,[o("div",Je,[ht(r.$slots,"guest"),ht(r.$slots,"memember"),Xe])]),o("div",Ze,[o("ul",tn,[o("li",null,[o("span",en,[P(n,{icon:"fa-solid fa-circle-check",size:"xl"})]),tt(" 成功上傳檔案 ")]),nn])]),o("div",sn,[o("div",on,[o("div",rn,[P(f)])]),o("div",an,[o("aside",null,[o("div",ln,[P(u),P(w),P(A)])])])])],64)}const fn=H(Qe,[["render",cn]]);export{fn as R};
