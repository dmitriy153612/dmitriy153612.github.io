import{d as y,k as S,o as r,c as h,a as t,M as F,w as d,b as I,t as k,i as s,f as b,h as v,n as _,q as A,r as T,_ as B,s as C,v as D,e as w,A as L,x as V,g as $,p as R,j as Y}from"./index-BfTxmqvZ.js";import{P as u}from"./PrimaryBtn-CAI_RELy.js";import{A as N}from"./AppTitle-DIzbSxP6.js";const U={class:"movie-content__text"},P={class:"movie-content__buttons-box"},z=y({__name:"MovieContent",props:{id:{},rating:{},year:{},genres:{},duration:{},title:{},text:{},trailerYouTubeId:{},isMovieLoading:{type:Boolean,default:!1},showBtnLike:{type:Boolean,default:!1},showBtnReload:{type:Boolean,default:!1},showBtnAbout:{type:Boolean,default:!0},isFavoriteMovie:{type:Boolean}},emits:["reload","toggleFavorite"],setup(a,{emit:m}){const n=a,i=S(),l=m;function g(){l("toggleFavorite",n.id)}function p(){i.openVideoModal(n.trailerYouTubeId,n.title)}return(o,c)=>(r(),h("div",{class:T(["movie-content",{"movie-content--section-descr":!o.showBtnAbout}])},[t(F,{class:"movie-content__detail",rating:o.rating,year:o.year,genres:o.genres,duration:o.duration},null,8,["rating","year","genres","duration"]),t(N,{class:"movie-content__title",size:"l",component:"h1"},{default:d(()=>[I(k(o.title),1)]),_:1}),s("p",U,k(o.text),1),s("div",P,[t(u,{class:"movie-content__btn-trailer",component:"button","btn-name":"Trailer","bg-color":"light",onClick:p}),o.showBtnAbout?(r(),b(u,{key:0,class:"movie-content__btn-about","btn-name":"About",component:"router-link","bg-color":"dark",to:{name:"MovieDetailPage",params:{id:n.id}}},null,8,["to"])):v("",!0),o.showBtnLike?(r(),b(u,{key:1,class:"movie-content__btn-like",checked:o.isFavoriteMovie,onClick:g},{replacedIcon:d(()=>[t(_,{"icon-name":"IconHeartFilled"})]),default:d(()=>[t(_,{"icon-name":"IconHeart"})]),_:1},8,["checked"])):v("",!0),o.showBtnReload?(r(),b(u,{key:2,class:"movie-content__btn-reload","show-spinner":o.isMovieLoading,"bg-color":"dark","aria-label":"show random movie",onClick:c[0]||(c[0]=A(e=>l("reload"),["prevent"]))},{default:d(()=>[t(_,{"icon-name":"IconReload"})]),_:1},8,["show-spinner"])):v("",!0)])],2))}}),G=B(z,[["__scopeId","data-v-28aee92e"]]),M=a=>(R("data-v-bc3492da"),a=a(),Y(),a),H={class:"movie"},O={class:"movie__inner"},j={class:"movie__background"},q={class:"movie__background-inner"},E={key:0,class:"movie__background-inner-text"},J=M(()=>s("div",{class:"movie__min-height"},null,-1)),K=M(()=>s("div",{style:{"background-color":"red"}},null,-1)),Q=y({__name:"SectionMovie",props:{id:{},title:{},rating:{},year:{},genres:{},duration:{},text:{},trailerYouTubeId:{},backgroundUrl:{},isMovieLoading:{type:Boolean,default:!1},showBtnReload:{type:Boolean},showBtnAbout:{type:Boolean}},emits:["reload"],setup(a,{emit:m}){V(e=>({"41cfdcbe":p.value}));const n=C(),i=D(),l=a,g=m,p=w(()=>`url(${l.backgroundUrl})`),o=w(()=>i.isFavoriteMovie(l.id));async function c(e){o.value?(i.addOrDelFavorite(e.toString()),await n.fetchDelMovieFromFavorites(e.toString())):(i.addOrDelFavorite(e.toString()),await n.fetchAddMovieToFavorite(e.toString())),i.fetchGetUserData()}return(e,f)=>(r(),h("section",H,[s("div",O,[s("div",j,[s("div",q,[e.backgroundUrl?v("",!0):(r(),h("span",E," No Poster "))])]),J,t(L,{class:"movie__container"},{default:d(()=>[t(G,{id:e.id,rating:e.rating,year:e.year,genres:e.genres,duration:e.duration,title:e.title,text:e.text,trailerYouTubeId:e.trailerYouTubeId,isMovieLoading:e.isMovieLoading,"show-btn-like":$(i).userData!==null,"show-btn-reload":e.showBtnReload,"show-btn-about":e.showBtnAbout,"is-favorite-movie":o.value,onReload:f[0]||(f[0]=W=>g("reload")),onToggleFavorite:c},null,8,["id","rating","year","genres","duration","title","text","trailerYouTubeId","isMovieLoading","show-btn-like","show-btn-reload","show-btn-about","is-favorite-movie"]),K]),_:1})])]))}}),ee=B(Q,[["__scopeId","data-v-bc3492da"]]);export{ee as S};
