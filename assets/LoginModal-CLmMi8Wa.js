import{d as R,L as $,M as K,e as F,r as h,O as G,o as t,c,G as Q,P as H,i as k,a as f,m as I,h as w,F as D,D as U,t as N,s as L,n as B,_ as S,Q as J,k as W,z as X,f as V,w as E,g as C,T as Y}from"./index-DYUd0Jcw.js";import{s as Z,A as j}from"./vue-focus-lock-BugZ-RO3.js";import{P as O}from"./PrimaryBtn-DpXZh9Jz.js";import ee from"./CircleBtn-cPfVn6OZ.js";const oe=["type","placeholder"],se={key:0,class:"input-box__icon-container"},ne={key:1,class:"input-box__error-list"},ae={class:"input-box__error"},re={key:3,class:"input-box__btn-close"},te=R({__name:"AppInput",props:$({modelValue:{},placeholder:{default:""},appearance:{default:"form"},inputIconName:{},type:{default:"text"},focus:{type:Boolean},errors:{}},{modelValue:{},modelModifiers:{}}),emits:$(["input"],["update:modelValue"]),setup(e,{emit:n}){const o=e,u=n,l=K(e,"modelValue"),p=F(()=>({"input-box--search":o.appearance==="search","input-box--form":o.appearance==="form","input-box--error":o.errors,"input-box--password":o.type==="password"})),g=h(!1),r=F(()=>o.type==="password"&&g.value===!0?"text":o.type);function _(){g.value=!g.value}return(s,i)=>{const a=G("focus");return t(),c("div",{class:L(["input-box",p.value])},[Q(k("input",{class:"input-box__input",type:r.value,placeholder:s.placeholder,onInput:i[0]||(i[0]=d=>u("input")),"onUpdate:modelValue":i[1]||(i[1]=d=>l.value=d)},null,40,oe),[[a,s.focus||!1],[H,l.value,void 0,{trim:!0}]]),s.inputIconName?(t(),c("div",se,[f(I,{"icon-name":s.inputIconName},null,8,["icon-name"])])):w("",!0),s.errors&&s.errors.length?(t(),c("ul",ne,[(t(!0),c(D,null,U(s.errors,(d,v)=>(t(),c("li",{class:"input-box__error-item",key:v},[k("span",ae,N(d),1)]))),128))])):w("",!0),s.type==="password"?(t(),c("button",{key:2,class:L(["input-box__btn-eye",{"input-box__btn-eye--checked":g.value}]),"aria-label":"show password",type:"button",onClick:B(_,["prevent"])},[f(I,{"icon-name":"IconEye"})],2)):w("",!0),s.appearance==="search"?(t(),c("button",re,[f(I,{"icon-name":"IconClose"})])):w("",!0)],2)}}}),le=S(te,[["__scopeId","data-v-98d796e0"]]),ie={class:"form__list"},ue=R({__name:"AppForm",props:{inputs:{},btnName:{},rules:{},formName:{},showSpinner:{type:Boolean},serverErrors:{}},emits:["submitForm"],setup(e,{emit:n}){const o=e,u=n,l=h({}),p=h({});o.inputs.forEach(s=>{l.value[s.name]=s.value||""});function g(s){var a;const i={};return(a=o.rules)==null||a.forEach(d=>{const v=d.validate(s);if(v){const[y,x]=Object.entries(v)[0];y in i?i[y].push(x):i[y]=[x]}}),i}function r(s){delete p.value[s]}function _(){if((!o.serverErrors||o.serverErrors&&!Object.keys(o.serverErrors).length)&&(p.value=g(l.value)),!Object.keys(p.value).length){const s={formData:l.value,formName:o.formName};u("submitForm",s)}}return J(()=>o.serverErrors,s=>{s&&(p.value=s)}),(s,i)=>(t(),c("form",{class:"form",onSubmit:B(_,["prevent"])},[k("ul",ie,[(t(!0),c(D,null,U(s.inputs,(a,d)=>(t(),c("li",{class:"form__item",key:d},[f(le,{"input-icon-name":a.iconName,placeholder:a.placeholder,type:a.type,focus:a==null?void 0:a.focus,errors:p.value[a.name],onInput:v=>r(a.name),modelValue:l.value[a.name],"onUpdate:modelValue":v=>l.value[a.name]=v},null,8,["input-icon-name","placeholder","type","focus","errors","onInput","modelValue","onUpdate:modelValue"])]))),128))]),f(O,{class:"form__btn-submit",type:"sumbit","bg-color":"light","show-spinner":s.showSpinner,"btn-name":s.btnName},null,8,["show-spinner","btn-name"])],32))}}),z=S(ue,[["__scopeId","data-v-844437a1"]]);function ce(e){return typeof e=="object"&&e!==null&&typeof e.email=="string"&&typeof e.password=="string"&&Object.keys(e).length===2}function me(e){return typeof e=="object"&&e!==null&&typeof e.email=="string"&&typeof e.password=="string"&&typeof e.name=="string"&&typeof e.surname=="string"&&typeof e.confirmPassword=="string"&&Object.keys(e).length===5}function b(e,n){if(e in n)return n[e];throw new TypeError(`Field ${e} not found`)}const pe={required:e=>n=>b(e,n).length?null:{[e]:"This field is required"},minLength:(e,n)=>o=>{const u=b(e,o);return u&&u.length>=n?null:{[e]:`Cannot be shorter than ${n} characters`}},email:e=>n=>{const o=b(e,n);return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)?null:{[e]:"Invalid email"}},sameAs:(e,n)=>o=>{const u=b(e,o),l=b(n,o);return u===l?null:{[e]:"Passwords do not match"}}},de={class:"modal-box__title"},fe={key:0,class:"modal-box__message"},ve=R({__name:"LoginModal",setup(e){const n=W(),o=X(),{email:u,minLength:l,required:p,sameAs:g}=pe,r=h("authorization"),_=F(()=>r.value==="authorization"?"Authorization":"Registration"),s=F(()=>r.value==="authorization"?"Registration":"Authorization"),i=h(null),a=h(null),d=[{name:"email",iconName:"IconEmail",placeholder:"E-mail",focus:!0},{name:"password",iconName:"IconKey",placeholder:"Password",type:"password"}],v=[{name:"email",iconName:"IconEmail",placeholder:"E-mail",focus:!0},{name:"name",iconName:"IconUser",placeholder:"Name"},{name:"surname",iconName:"IconUser",placeholder:"Surname"},{name:"password",iconName:"IconKey",placeholder:"Password",type:"password"},{name:"confirmPassword",iconName:"IconKey",placeholder:"Confirm password",type:"password"}],y=[{validate:u("email")},{validate:p("password")}],x=[{validate:u("email")},{validate:l("name",2)},{validate:l("surname",2)},{validate:l("password",6)},{validate:p("confirmPassword")},{validate:g("confirmPassword","password")}];async function P(){n.toggleLoginModal(!1)}function A(){r.value==="authorization"?r.value="registration":(r.value==="registration"||r.value==="success")&&(r.value="authorization")}async function T(m){await o.fetchLogin(m),o.isLogin?n.toggleLoginModal(!1):i.value={email:["Incorrect E-mail or password"],password:["Incorrect E-mail or password"]}}async function q(m){await o.fetchRegistration(m),o.isRegistrationSuccess?r.value="success":a.value={email:["This email address is already registered"]}}function M(m){m.formName==="signIn"&&ce(m.formData)?T(m.formData):m.formName==="signUp"&&me(m.formData)&&q(m.formData)}return(m,ge)=>(t(),V(j,{color:"light",onClose:P},{default:E(()=>[f(C(Z),null,{default:E(()=>[k("div",{class:L(["modal-box",{"modal-box--success":!0}])},[f(ee,{class:"modal-box__btn-close","aria-label":"close",appearance:"modal",onClick:P},{default:E(()=>[f(I,{"icon-name":"IconClose"})]),_:1}),f(I,{class:"modal-box__logo","icon-name":"IconLogo"}),k("h2",de,N(_.value),1),f(Y,{name:"flip",mode:"out-in"},{default:E(()=>[r.value==="success"?(t(),c("p",fe," Registration successful! Please use your email to log in. ")):r.value==="authorization"?(t(),V(z,{key:1,class:"modal-box__form","btn-name":"Sign in",inputs:d,rules:y,"server-errors":i.value,"show-spinner":C(o).isLoginLoading,"form-name":"signIn",onSubmitForm:M},null,8,["server-errors","show-spinner"])):r.value==="registration"?(t(),V(z,{key:2,class:"modal-box__form","btn-name":"Sign up",inputs:v,rules:x,"server-errors":a.value,"show-spinner":C(o).isRegistrationLoading,"form-name":"signUp",onSubmitForm:M},null,8,["server-errors","show-spinner"])):w("",!0)]),_:1}),r.value==="success"?(t(),V(O,{key:0,"btn-name":s.value,"bg-color":"light",onClick:A},null,8,["btn-name"])):(t(),c("button",{key:1,class:"modal-box__text-btn",onClick:A},N(s.value),1))])]),_:1})]),_:1}))}}),we=S(ve,[["__scopeId","data-v-56126101"]]);export{we as default};
