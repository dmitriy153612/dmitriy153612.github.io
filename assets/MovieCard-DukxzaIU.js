const __vite__fileDeps=["assets/CircleBtn-C6qRaw7G.js","assets/index-C0ETv5Xh.js","assets/index-uxRmNWQw.css","assets/CircleBtn-CA49ejG1.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as k,C,r as b,e as h,E as M,o,c as t,t as i,h as r,i as s,a as c,w as d,B as l,f as g,s as y,y as F,g as B,Q as w,R as D,_ as E}from"./index-C0ETv5Xh.js";const I={key:0,class:"card__number"},S={class:"card__img-wrapper"},V={key:0},N=["src","alt"],P=k({__name:"MovieCard",props:{movie:{},appearance:{default:"only-foto"},index:{}},setup(p){const _=w(()=>D(()=>import("./CircleBtn-C6qRaw7G.js"),__vite__mapDeps([0,1,2,3]))),a=p,n=C(),m=b({"card--numbered":a.appearance==="numbered","card--buttoned":a.appearance==="buttoned"}),v=h(()=>({name:"MovieDetailPage",params:{id:a.movie.id}}));function u(){const e=a.movie.id.toString();n.delMovieFromFavorites(e),n.fetchDelMovieFromFavorites(e)}return(e,U)=>{const f=M("router-link");return o(),t("div",{class:l(["card",m.value])},[e.appearance==="numbered"?(o(),t("div",I,i(e.index||1),1)):r("",!0),s("div",S,[e.movie.posterUrl?(o(),t("picture",V,[s("img",{class:"card__img",src:e.movie.posterUrl,alt:e.movie.title||"no name"},null,8,N)])):r("",!0)]),c(f,{class:"card__link",to:v.value},{default:d(()=>[s("span",{class:l(["card__link-text",{"card__link-text--transparent":e.movie.posterUrl}])},i(e.movie.title),3)]),_:1},8,["to"]),e.appearance==="buttoned"?(o(),g(B(_),{key:1,class:"card__btn-close",appearance:"card",onClick:F(u,["prevent"])},{default:d(()=>[c(y,{"icon-name":"IconClose"})]),_:1})):r("",!0)],2)}}}),L=E(P,[["__scopeId","data-v-6308e3f1"]]);export{L as M};