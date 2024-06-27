import{d as k,k as S,e as g,r as y,m as F,n as A,o as n,f as m,w as s,a as o,i,q as h,s as $,g as C,v as V,_ as M,c as w,M as D,b as L,t as I,h as b,x as Y,T as R,y as N,z as O,B as U,C as P,A as W,D as z,p as E,j as G}from"./index-DMOYL4hK.js";import{P as f}from"./PrimaryBtn-DT_0zQxz.js";import{A as H}from"./AppTitle-BZC6fpZm.js";import j from"./CircleBtn-CBSfOJDU.js";const q=["src"],J=k({__name:"VideoModal",props:{trailerYouTubeId:{}},emits:["close"],setup(t,{emit:p}){const r=t,a=p,l=S(),d=g(()=>`https://www.youtube.com/embed/${r.trailerYouTubeId}?&autoplay=1&rel=0`),_=y(void 0),c=y(0),u=g(()=>l.screenWidth);g(()=>`${(u.value-c.value)/2}px`);function e(){a("close")}function v(){}return F(()=>{}),A(()=>u.value,()=>void 0),(B,le)=>(n(),m(C(V),null,{default:s(()=>[o($,{color:"dark",type:"video",onClose:e},{default:s(()=>[i("div",{class:"video-box",ref_key:"modalEl",ref:_},[o(j,{class:"video-box__btn-close",appearance:"video",onClick:e},{default:s(()=>[o(h,{"icon-name":"IconClose"})]),_:1}),i("iframe",{class:"video-box__video",src:d.value,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,q)],512)]),_:1})]),_:1}))}}),K=M(J,[["__scopeId","data-v-cef4fdd1"]]),Q={class:"movie-content__text"},X={class:"movie-content__buttons-box"},Z=k({__name:"MovieContent",props:{id:{},rating:{},year:{},genres:{},duration:{},title:{},text:{},trailerYouTubeId:{},isMovieLoading:{type:Boolean,default:!1},showBtnLike:{type:Boolean,default:!1},showBtnReload:{type:Boolean,default:!1},showBtnAbout:{type:Boolean,default:!0},isFavoriteMovie:{type:Boolean}},emits:["reload","toggleFavorite"],setup(t,{emit:p}){const r=t,a=S(),l=p,d=y(!1);function _(){l("toggleFavorite",r.id)}function c(e){a.setBtnOpenModal(e),d.value=!0}function u(){d.value=!1}return(e,v)=>(n(),w("div",{class:O(["movie-content",{"movie-content--section-descr":!e.showBtnAbout}])},[o(D,{class:"movie-content__detail",rating:e.rating,year:e.year,genres:e.genres,duration:e.duration},null,8,["rating","year","genres","duration"]),o(H,{class:"movie-content__title",size:"l",component:"h1"},{default:s(()=>[L(I(e.title),1)]),_:1}),i("p",Q,I(e.text),1),i("div",X,[o(f,{class:"movie-content__btn-trailer",component:"button","btn-name":"Trailer","bg-color":"light",onClick:c}),e.showBtnAbout?(n(),m(f,{key:0,class:"movie-content__btn-about","btn-name":"About",component:"router-link","bg-color":"dark",to:{name:"MovieDetailPage",params:{id:r.id}}},null,8,["to"])):b("",!0),e.showBtnLike?(n(),m(f,{key:1,class:"movie-content__btn-like",checked:e.isFavoriteMovie,onClick:_},{replacedIcon:s(()=>[o(h,{"icon-name":"IconHeartFilled"})]),default:s(()=>[o(h,{"icon-name":"IconHeart"})]),_:1},8,["checked"])):b("",!0),e.showBtnReload?(n(),m(f,{key:2,class:"movie-content__btn-reload","show-spinner":e.isMovieLoading,"bg-color":"dark","aria-label":"show random movie",onClick:v[0]||(v[0]=Y(B=>l("reload"),["prevent"]))},{default:s(()=>[o(h,{"icon-name":"IconReload"})]),_:1},8,["show-spinner"])):b("",!0)]),(n(),m(N,{to:"body"},[o(R,{name:"fade"},{default:s(()=>[d.value?(n(),m(K,{key:0,"trailer-you-tube-id":e.trailerYouTubeId,onClose:u},null,8,["trailer-you-tube-id"])):b("",!0)]),_:1})]))],2))}}),x=M(Z,[["__scopeId","data-v-442b2447"]]),T=t=>(E("data-v-05ea068d"),t=t(),G(),t),ee={class:"movie-sec"},oe={class:"movie-sec__inner"},te={class:"movie-sec__background"},ae={class:"movie-sec__background-inner"},ne={key:0,class:"movie-sec__background-inner-text"},se=T(()=>i("div",{class:"movie-sec__min-height"},null,-1)),ie=T(()=>i("div",{style:{"background-color":"red"}},null,-1)),re=k({__name:"SectionMovie",props:{id:{},title:{},rating:{},year:{},genres:{},duration:{},text:{},trailerYouTubeId:{},backgroundUrl:{},isMovieLoading:{type:Boolean,default:!1},showBtnReload:{type:Boolean},showBtnAbout:{type:Boolean}},emits:["reload"],setup(t,{emit:p}){z(e=>({"4f7603b4":_.value}));const r=U(),a=P(),l=t,d=p,_=g(()=>`url(${l.backgroundUrl})`),c=g(()=>a.isFavoriteMovie(l.id));async function u(e){c.value?(a.addOrDelFavorite(e.toString()),await r.fetchDelMovieFromFavorites(e.toString())):(a.addOrDelFavorite(e.toString()),await r.fetchAddMovieToFavorite(e.toString())),a.fetchGetUserData()}return(e,v)=>(n(),w("section",ee,[i("div",oe,[i("div",te,[i("div",ae,[e.backgroundUrl?b("",!0):(n(),w("span",ne," No Poster "))])]),se,o(W,{class:"movie-sec__container"},{default:s(()=>[o(x,{class:"movie-sec__content",id:e.id,rating:e.rating,year:e.year,genres:e.genres,duration:e.duration,title:e.title,text:e.text,trailerYouTubeId:e.trailerYouTubeId,isMovieLoading:e.isMovieLoading,"show-btn-like":C(a).userData!==null,"show-btn-reload":e.showBtnReload,"show-btn-about":e.showBtnAbout,"is-favorite-movie":c.value,onReload:v[0]||(v[0]=B=>d("reload")),onToggleFavorite:u},null,8,["id","rating","year","genres","duration","title","text","trailerYouTubeId","isMovieLoading","show-btn-like","show-btn-reload","show-btn-about","is-favorite-movie"]),ie]),_:1})])]))}}),me=M(re,[["__scopeId","data-v-05ea068d"]]);export{me as S};