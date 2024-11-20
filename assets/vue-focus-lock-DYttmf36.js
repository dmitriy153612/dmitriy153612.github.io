import{d as Q,k as _n,e as x,Q as Z,a3 as J,o as w,c as M,H as X,s as xn,n as wn,a1 as Mn,_ as Sn,a4 as An,r as V,Z as Tn,g as W,h as j,i as kn,a5 as Cn,a6 as q}from"./index-BiWpUK1j.js";const In=Q({__name:"AppOverlay",props:{color:{default:"light"},disabled:{type:Boolean,default:!1},type:{default:"defoult"},isHeaderVisible:{type:Boolean,default:!1}},emits:["close"],setup(n,{emit:e}){const t=_n(),o=n,r=e,u=x(()=>o.disabled?{}:{"overlay--active":!o.disabled,"overlay--dark":o.color==="dark","overlay--light":o.color==="light","overlay--mobile-search":o.type==="search","overlay--video":o.type==="video","overlay--header":o.isHeaderVisible});function i(){r("close")}function c(a){a.key==="Escape"&&i()}function m(){const a=t.buttonOpenModal;a&&Mn(()=>{a.focus(),t.clearBtnOpenModal()})}return Z(()=>o.disabled,a=>{a?document.removeEventListener("keydown",c):document.addEventListener("keydown",c)},{immediate:!0}),J(()=>{document.body.style.overflowY="auto",document.removeEventListener("keydown",c),m()}),(a,h)=>(w(),M("div",{class:xn(["overlay",u.value]),onMousedown:wn(i,["self"])},[X(a.$slots,"default",{},void 0,!0)],34))}}),be=Sn(In,[["__scopeId","data-v-08f62432"]]);var F="data-focus-lock",nn="data-focus-lock-disabled",en="data-no-focus-lock",tn="data-autofocus-inside",on="data-no-autofocus";const Un=Object.freeze(Object.defineProperty({__proto__:null,FOCUS_ALLOW:en,FOCUS_AUTO:tn,FOCUS_DISABLED:nn,FOCUS_GROUP:F,FOCUS_NO_AUTOFOCUS:on},Symbol.toStringTag,{value:"Module"}));var p=function(n){for(var e=Array(n.length),t=0;t<n.length;++t)e[t]=n[t];return e},S=function(n){return Array.isArray(n)?n:[n]},rn=function(n){return Array.isArray(n)?n[0]:n},Fn=function(n){if(n.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(n,null);return!e||!e.getPropertyValue?!1:e.getPropertyValue("display")==="none"||e.getPropertyValue("visibility")==="hidden"},un=function(n){return n.parentNode&&n.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?n.parentNode.host:n.parentNode},an=function(n){return n===document||n&&n.nodeType===Node.DOCUMENT_NODE},Ln=function(n){return n.hasAttribute("inert")},Bn=function(n,e){return!n||an(n)||!Fn(n)&&!Ln(n)&&e(un(n))},cn=function(n,e){var t=n.get(e);if(t!==void 0)return t;var o=Bn(e,cn.bind(void 0,n));return n.set(e,o),o},Dn=function(n,e){return n&&!an(n)?Gn(n)?e(un(n)):!1:!0},dn=function(n,e){var t=n.get(e);if(t!==void 0)return t;var o=Dn(e,dn.bind(void 0,n));return n.set(e,o),o},fn=function(n){return n.dataset},Pn=function(n){return n.tagName==="BUTTON"},ln=function(n){return n.tagName==="INPUT"},sn=function(n){return ln(n)&&n.type==="radio"},Rn=function(n){return!((ln(n)||Pn(n))&&(n.type==="hidden"||n.disabled))},Gn=function(n){var e=n.getAttribute(on);return![!0,"true",""].includes(e)},vn=function(n){var e;return!!(n&&!((e=fn(n))===null||e===void 0)&&e.focusGuard)},H=function(n){return!vn(n)},Vn=function(n){return!!n},Wn=function(n,e){var t=Math.max(0,n.tabIndex),o=Math.max(0,e.tabIndex),r=t-o,u=n.index-e.index;if(r){if(!t)return 1;if(!o)return-1}return r||u},jn=function(n){return n.tabIndex<0&&!n.hasAttribute("tabindex")?0:n.tabIndex},qn=function(n,e,t){return p(n).map(function(o,r){var u=jn(o);return{node:o,index:r,tabIndex:u}}).filter(function(o){return!e}).sort(Wn)},Hn=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],mn=Hn.join(","),pn=function(n,e){return p((n.shadowRoot||n).children).reduce(function(t,o){return t.concat(o.matches(mn)?[o]:[],pn(o))},[])},zn=function(n,e){var t;return n instanceof HTMLIFrameElement&&!((t=n.contentDocument)===null||t===void 0)&&t.body?D([n.contentDocument.body]):[n]},D=function(n,e){return n.reduce(function(t,o){var r,u=pn(o),i=(r=[]).concat.apply(r,u.map(function(c){return zn(c)}));return t.concat(i,o.parentNode?p(o.parentNode.querySelectorAll(mn)).filter(function(c){return c===o}):[])},[])},Yn=function(n){var e=n.querySelectorAll("[".concat(tn,"]"));return p(e).map(function(t){return D([t])}).reduce(function(t,o){return t.concat(o)},[])},bn=function(n,e){return p(n).filter(function(t){return cn(e,t)}).filter(function(t){return Rn(t)})},z=function(n,e){return e===void 0&&(e=new Map),p(n).filter(function(t){return dn(e,t)})},Y=function(n,e){return qn(bn(D(n),e),!1)},$n=function(n,e){return bn(Yn(n),e)},g=function(n,e){return n.shadowRoot?g(n.shadowRoot,e):Object.getPrototypeOf(n).contains!==void 0&&Object.getPrototypeOf(n).contains.call(n,e)?!0:p(n.children).some(function(t){var o;if(t instanceof HTMLIFrameElement){var r=(o=t.contentDocument)===null||o===void 0?void 0:o.body;return r?g(r,e):!1}return g(t,e)})},Kn=function(n){for(var e=new Set,t=n.length,o=0;o<t;o+=1)for(var r=o+1;r<t;r+=1){var u=n[o].compareDocumentPosition(n[r]);(u&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&e.add(r),(u&Node.DOCUMENT_POSITION_CONTAINS)>0&&e.add(o)}return n.filter(function(i,c){return!e.has(c)})},yn=function(n){return n.parentNode?yn(n.parentNode):n},hn=function(n){var e=S(n);return e.filter(Boolean).reduce(function(t,o){var r=o.getAttribute(F);return t.push.apply(t,r?Kn(p(yn(o).querySelectorAll("[".concat(F,'="').concat(r,'"]:not([').concat(nn,'="disabled"])')))):[o]),t},[])},Qn=function(n){try{return n()}catch{return}},N=function(n){if(n===void 0&&(n=document),!(!n||!n.activeElement)){var e=n.activeElement;return e.shadowRoot?N(e.shadowRoot):e instanceof HTMLIFrameElement&&Qn(function(){return e.contentWindow.document})?N(e.contentWindow.document):e}},Zn=function(n,e){return n===e},Jn=function(n,e){return!!p(n.querySelectorAll("iframe")).some(function(t){return Zn(t,e)})},Xn=function(n,e){return e===void 0&&(e=N(rn(n).ownerDocument)),!e||e.dataset&&e.dataset.focusGuard?!1:hn(n).some(function(t){return g(t,e)||Jn(t,e)})},ne=function(n){n===void 0&&(n=document);var e=N(n);return e?p(n.querySelectorAll("[".concat(en,"]"))).some(function(t){return g(t,e)}):!1},ee=function(n,e){return e.filter(sn).filter(function(t){return t.name===n.name}).filter(function(t){return t.checked})[0]||n},P=function(n,e){return sn(n)&&n.name?ee(n,e):n},te=function(n){var e=new Set;return n.forEach(function(t){return e.add(P(t,n))}),n.filter(function(t){return e.has(t)})},$=function(n){return n[0]&&n.length>1?P(n[0],n):n[0]},K=function(n,e){return n.indexOf(P(e,n))},L="NEW_FOCUS",oe=function(n,e,t,o,r){var u=n.length,i=n[0],c=n[u-1],m=vn(o);if(!(o&&n.indexOf(o)>=0)){var a=o!==void 0?t.indexOf(o):-1,h=r?t.indexOf(r):a,s=r?n.indexOf(r):-1;if(a===-1)return s!==-1?s:L;if(s===-1)return L;var v=a-h,b=t.indexOf(i),f=t.indexOf(c),l=te(t),E=o!==void 0?l.indexOf(o):-1,A=E-(r?l.indexOf(r):a);if(!v&&s>=0||e.length===0)return s;var _=K(n,e[0]),y=K(n,e[e.length-1]);if(a<=b&&m&&Math.abs(v)>1)return y;if(a>=f&&m&&Math.abs(v)>1)return _;if(v&&Math.abs(A)>1)return s;if(a<=b)return y;if(a>f)return _;if(v)return Math.abs(v)>1?s:(u+s+v)%u}},re=function(n){return function(e){var t,o=(t=fn(e))===null||t===void 0?void 0:t.autofocus;return e.autofocus||o!==void 0&&o!=="false"||n.indexOf(e)>=0}},ue=function(n,e,t){var o=n.map(function(u){var i=u.node;return i}),r=z(o.filter(re(t)));return r&&r.length?$(r):$(z(e))},B=function(n,e){return e===void 0&&(e=[]),e.push(n),n.parentNode&&B(n.parentNode.host||n.parentNode,e),e},C=function(n,e){for(var t=B(n),o=B(e),r=0;r<t.length;r+=1){var u=t[r];if(o.indexOf(u)>=0)return u}return!1},ae=function(n,e,t){var o=S(n),r=S(e),u=o[0],i=!1;return r.filter(Boolean).forEach(function(c){i=C(i||c,c)||i,t.filter(Boolean).forEach(function(m){var a=C(u,m);a&&(!i||g(a,i)?i=a:i=C(a,i))})}),i},ie=function(n,e){return n.reduce(function(t,o){return t.concat($n(o,e))},[])},ce=function(n,e){var t=new Map;return e.forEach(function(o){return t.set(o.node,o)}),n.map(function(o){return t.get(o)}).filter(Vn)},de=function(n,e){var t=N(S(n).length>0?document:rn(n).ownerDocument),o=hn(n).filter(H),r=ae(t||n,n,o),u=new Map,i=Y(o,u),c=i.filter(function(f){var l=f.node;return H(l)});if(c[0]){var m=Y([r],u).map(function(f){var l=f.node;return l}),a=ce(m,c),h=a.map(function(f){var l=f.node;return l}),s=a.filter(function(f){var l=f.tabIndex;return l>=0}).map(function(f){var l=f.node;return l}),v=oe(h,s,m,t,e);if(v===L){var b=ue(i,s,ie(o,u));if(b)return{node:b};console.warn("focus-lock: cannot find any node to move focus into");return}return v===void 0?v:a[v]}},fe=function(n,e){n&&("focus"in n&&n.focus(e),"contentWindow"in n&&n.contentWindow&&n.contentWindow.focus())},I=0,U=!1,le=function(n,e,t){t===void 0&&(t={});var o=de(n,e);if(!U&&o){if(I>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),U=!0,setTimeout(function(){U=!1},1);return}I++,fe(o.node,t.focusOptions),I--}},se=Un;const ve=["tabIndex"],me=["tabIndex"],ye=Q({__name:"FocusLock",props:{returnFocus:{type:Boolean},disabled:{type:Boolean},noFocusGuards:{type:[Boolean,String]},group:{}},setup(n){let e=[],t;const o=n,{returnFocus:r,disabled:u,noFocusGuards:i,group:c}=An(o),m=V(null),a=V({disabled:!0,onActivation:()=>{}}),h=x(()=>({[se.FOCUS_GROUP]:c.value})),s=x(()=>i.value!==!0),v=x(()=>s.value&&i.value!=="tail");Z(u,()=>{a.value.disabled=u.value,T()}),Tn(()=>{const d=q();d&&(a.value={instance:d.proxy,observed:m.value.querySelector("[data-lock]"),disabled:u.value,onActivation:()=>{t=t||document&&document.activeElement}},e.length||En(),e.push(a.value),T())}),J(()=>{const d=q();d&&(e=e.filter(({instance:O})=>O!==d.proxy),e.length||Nn(),r.value&&t&&t.focus&&t.focus(),T())});function b(d){setTimeout(d,0)}let f=null,l=null,E=!1;const A=()=>document&&document.activeElement===document.body,_=()=>A()||ne(),y=()=>{if(f){const{observed:d,onActivation:O}=f;(E||!_()||!l)&&(d&&!Xn(d)&&(O(),le(d,l)),E=!1,l=document&&document.activeElement)}},On=d=>d.filter(({disabled:O})=>!O).slice(-1)[0],gn=d=>{f!==d&&(f=null),f=d,d&&(y(),b(y))},T=()=>{gn(On(e))},R=()=>{y()},k=()=>{b(y)},G=()=>{E=!0,l=null},En=()=>{document.addEventListener("focusin",R,!0),document.addEventListener("focusout",k),window.addEventListener("blur",G)},Nn=()=>{document.removeEventListener("focusin",R,!0),document.removeEventListener("focusout",k),window.removeEventListener("blur",G)};return(d,O)=>(w(),M("div",{ref_key:"rootEl",ref:m},[s.value?(w(),M("div",{key:0,tabIndex:W(u)?-1:0,"aria-hidden":"true"},null,8,ve)):j("",!0),kn("div",Cn({onFocusout:k},h.value,{"data-lock":""}),[X(d.$slots,"default")],16),v.value?(w(),M("div",{key:1,tabIndex:W(u)?-1:0,"aria-hidden":"true"},null,8,me)):j("",!0)],512))}});export{be as A,ye as s};
