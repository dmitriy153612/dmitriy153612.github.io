import{d as l,e as g,E as d,o as n,c as t,i as r,z as u,t as h,a as o,_ as m,w as i,A as v,b as f,F as k,G as C,u as G,f as U,h as w}from"./index-DMOYL4hK.js";import{A as S}from"./AppTitle-BZC6fpZm.js";const $={class:"genre-card"},A={class:"genre-card__inner"},B=["src","alt"],N={class:"genre-card__title-wrapper"},P={class:"genre-card__title"},V=l({__name:"GenreCard",props:{genre:{},imgUrl:{},toParams:{}},setup(c){const s=c,a=g(()=>s.imgUrl?s.imgUrl:"/img/logo.svg");return(e,_)=>{const p=d("router-link");return n(),t("div",$,[r("div",A,[r("div",{class:u(["genre-card__img-wrapper",{"genre-card__img-wrapper--no-img":!e.imgUrl}])},[r("img",{class:"genre-card__img",src:a.value,alt:e.genre},null,8,B)],2),r("div",N,[r("h2",P,h(e.genre),1)]),o(p,{class:"genre-card__link",to:e.toParams},null,8,["to"])])])}}}),y=m(V,[["__scopeId","data-v-38c9f4ac"]]),z={class:"genres-sec"},I={class:"genres-sec__card-list"},b=l({__name:"SectionGenres",props:{genres:{}},setup(c){return(s,a)=>(n(),t("section",z,[o(v,null,{default:i(()=>[o(S,{class:"genres-sec__title",component:"h1",size:"l"},{default:i(()=>[f(" Movie genres ")]),_:1}),r("ul",I,[(n(!0),t(k,null,C(s.genres,(e,_)=>(n(),t("li",{class:"genres-sec__item",key:_},[o(y,{genre:e.genre,"img-url":e.imgUrl,"to-params":{name:"GenrePage",params:{genre:e.genre}}},null,8,["genre","img-url","to-params"])]))),128))])]),_:1})]))}}),x=m(b,[["__scopeId","data-v-c2324eb5"]]),E={class:"genres-page"},T=l({__name:"GenresPage",setup(c){const s=G(),a=g(()=>s.genres);return(e,_)=>(n(),t("main",E,[a.value?(n(),U(x,{key:0,genres:a.value},null,8,["genres"])):w("",!0)]))}});export{T as default};
