import{d as S,R as A,S as K,e as F,r as h,U as G,o as t,c,H,V as W,i as k,a as f,m as I,h as w,F as U,D,t as N,x as R,q as B,_ as L,W as J,k as Q,z as X,f as V,w as E,g as C,s as Y,T as Z,n as j}from"./index-D3EYEC8C.js";import{P as T}from"./PrimaryBtn-CiGxLtIi.js";import ee from"./CircleBtn-ComZOAK7.js";const oe=["type","placeholder"],se={key:0,class:"input-box__icon-container"},ne={key:1,class:"input-box__error-list"},ae={class:"input-box__error"},re={key:3,class:"input-box__btn-close"},te=S({__name:"AppInput",props:A({modelValue:{},placeholder:{default:""},appearance:{default:"form"},inputIconName:{},type:{default:"text"},focus:{type:Boolean},errors:{}},{modelValue:{},modelModifiers:{}}),emits:A(["input"],["update:modelValue"]),setup(e,{emit:n}){const o=e,u=n,i=K(e,"modelValue"),p=F(()=>({"input-box--search":o.appearance==="search","input-box--form":o.appearance==="form","input-box--error":o.errors,"input-box--password":o.type==="password"})),g=h(!1),r=F(()=>o.type==="password"&&g.value===!0?"text":o.type);function _(){g.value=!g.value}return(s,l)=>{const a=G("focus");return t(),c("div",{class:R(["input-box",p.value])},[H(k("input",{class:"input-box__input",type:r.value,placeholder:s.placeholder,onInput:l[0]||(l[0]=d=>u("input")),"onUpdate:modelValue":l[1]||(l[1]=d=>i.value=d)},null,40,oe),[[a,s.focus||!1],[W,i.value,void 0,{trim:!0}]]),s.inputIconName?(t(),c("div",se,[f(I,{"icon-name":s.inputIconName},null,8,["icon-name"])])):w("",!0),s.errors&&s.errors.length?(t(),c("ul",ne,[(t(!0),c(U,null,D(s.errors,(d,v)=>(t(),c("li",{class:"input-box__error-item",key:v},[k("span",ae,N(d),1)]))),128))])):w("",!0),s.type==="password"?(t(),c("button",{key:2,class:R(["input-box__btn-eye",{"input-box__btn-eye--checked":g.value}]),type:"button",onClick:B(_,["prevent"])},[f(I,{"icon-name":"IconEye"})],2)):w("",!0),s.appearance==="search"?(t(),c("button",re,[f(I,{"icon-name":"IconClose"})])):w("",!0)],2)}}}),ie=L(te,[["__scopeId","data-v-4f57589c"]]),le={class:"form__list"},ue=S({__name:"AppForm",props:{inputs:{},btnName:{},rules:{},formName:{},showSpinner:{type:Boolean},serverErrors:{}},emits:["submitForm"],setup(e,{emit:n}){const o=e,u=n,i=h({}),p=h({});o.inputs.forEach(s=>{i.value[s.name]=s.value||""});function g(s){var a;const l={};return(a=o.rules)==null||a.forEach(d=>{const v=d.validate(s);if(v){const[y,x]=Object.entries(v)[0];y in l?l[y].push(x):l[y]=[x]}}),l}function r(s){delete p.value[s]}function _(){if((!o.serverErrors||o.serverErrors&&!Object.keys(o.serverErrors).length)&&(p.value=g(i.value)),!Object.keys(p.value).length){const s={formData:i.value,formName:o.formName};u("submitForm",s)}}return J(()=>o.serverErrors,s=>{s&&(p.value=s)}),(s,l)=>(t(),c("form",{class:"form",onSubmit:B(_,["prevent"])},[k("ul",le,[(t(!0),c(U,null,D(s.inputs,(a,d)=>(t(),c("li",{class:"form__item",key:d},[f(ie,{"input-icon-name":a.iconName,placeholder:a.placeholder,type:a.type,focus:a==null?void 0:a.focus,errors:p.value[a.name],onInput:v=>r(a.name),modelValue:i.value[a.name],"onUpdate:modelValue":v=>i.value[a.name]=v},null,8,["input-icon-name","placeholder","type","focus","errors","onInput","modelValue","onUpdate:modelValue"])]))),128))]),f(T,{class:"form__btn-submit",type:"sumbit","bg-color":"light","show-spinner":s.showSpinner,"btn-name":s.btnName},null,8,["show-spinner","btn-name"])],32))}}),M=L(ue,[["__scopeId","data-v-844437a1"]]);function ce(e){return typeof e=="object"&&e!==null&&typeof e.email=="string"&&typeof e.password=="string"&&Object.keys(e).length===2}function me(e){return typeof e=="object"&&e!==null&&typeof e.email=="string"&&typeof e.password=="string"&&typeof e.name=="string"&&typeof e.surname=="string"&&typeof e.confirmPassword=="string"&&Object.keys(e).length===5}function b(e,n){if(e in n)return n[e];throw new TypeError(`Field ${e} not found`)}const pe={required:e=>n=>b(e,n).length?null:{[e]:"This field is required"},minLength:(e,n)=>o=>{const u=b(e,o);return u&&u.length>=n?null:{[e]:`Cannot be shorter than ${n} characters`}},email:e=>n=>{const o=b(e,n);return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)?null:{[e]:"Invalid email"}},sameAs:(e,n)=>o=>{const u=b(e,o),i=b(n,o);return u===i?null:{[e]:"Passwords do not match"}}},de={class:"modal-box__title"},fe={key:0,class:"modal-box__message"},ve=S({__name:"LoginModal",setup(e){const n=Q(),o=X(),{email:u,minLength:i,required:p,sameAs:g}=pe,r=h("authorization"),_=F(()=>r.value==="authorization"?"Authorization":"Registration"),s=F(()=>r.value==="authorization"?"Registration":"Authorization"),l=h(null),a=h(null),d=[{name:"email",iconName:"IconEmail",placeholder:"E-mail",focus:!0},{name:"password",iconName:"IconKey",placeholder:"Password",type:"password"}],v=[{name:"email",iconName:"IconEmail",placeholder:"E-mail",focus:!0},{name:"name",iconName:"IconUser",placeholder:"Name"},{name:"surname",iconName:"IconUser",placeholder:"Surname"},{name:"password",iconName:"IconKey",placeholder:"Password",type:"password"},{name:"confirmPassword",iconName:"IconKey",placeholder:"Confirm password",type:"password"}],y=[{validate:u("email")},{validate:p("password")}],x=[{validate:u("email")},{validate:i("name",2)},{validate:i("surname",2)},{validate:i("password",6)},{validate:p("confirmPassword")},{validate:g("confirmPassword","password")}];async function P(){n.toggleLoginModal(!1)}function $(){r.value==="authorization"?r.value="registration":(r.value==="registration"||r.value==="success")&&(r.value="authorization")}async function O(m){await o.fetchLogin(m),o.isLogin?n.toggleLoginModal(!1):l.value={email:["Incorrect E-mail or password"],password:["Incorrect E-mail or password"]}}async function q(m){await o.fetchRegistration(m),o.isRegistrationSuccess?r.value="success":a.value={email:["This email address is already registered"]}}function z(m){m.formName==="signIn"&&ce(m.formData)?O(m.formData):m.formName==="signUp"&&me(m.formData)&&q(m.formData)}return(m,ge)=>(t(),V(j,{color:"light",onClose:P},{default:E(()=>[f(C(Y),null,{default:E(()=>[k("div",{class:R(["modal-box",{"modal-box--success":!0}])},[f(ee,{class:"modal-box__btn-close",appearance:"modal",onClick:P},{default:E(()=>[f(I,{"icon-name":"IconClose"})]),_:1}),f(I,{class:"modal-box__logo","icon-name":"IconLogo"}),k("h2",de,N(_.value),1),f(Z,{name:"flip",mode:"out-in"},{default:E(()=>[r.value==="success"?(t(),c("p",fe," Registration successful! Please use your email to log in. ")):r.value==="authorization"?(t(),V(M,{key:1,class:"modal-box__form","btn-name":"Sign in",inputs:d,rules:y,"server-errors":l.value,"show-spinner":C(o).isLoginLoading,"form-name":"signIn",onSubmitForm:z},null,8,["server-errors","show-spinner"])):r.value==="registration"?(t(),V(M,{key:2,class:"modal-box__form","btn-name":"Sign up",inputs:v,rules:x,"server-errors":a.value,"show-spinner":C(o).isRegistrationLoading,"form-name":"signUp",onSubmitForm:z},null,8,["server-errors","show-spinner"])):w("",!0)]),_:1}),r.value==="success"?(t(),V(T,{key:0,"btn-name":s.value,"bg-color":"light",onClick:$},null,8,["btn-name"])):(t(),c("button",{key:1,class:"modal-box__text-btn",onClick:$},N(s.value),1))])]),_:1})]),_:1}))}}),be=L(ve,[["__scopeId","data-v-96feb97a"]]);export{be as default};
