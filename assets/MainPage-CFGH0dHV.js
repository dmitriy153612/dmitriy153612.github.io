import{d as m,o as t,c as u,a,w as s,A as v,b as _,t as g,_ as p,u as f,e as n,f as r,g as l,h as c}from"./index-DceWAf_E.js";import{S as M}from"./SectionMovie-DAGSJj0-.js";import{A as b}from"./AppTitle-ZSFpul__.js";import{A as h}from"./AdaptedCardList-BGRfjhqM.js";import"./PrimaryBtn-D8dZNqTP.js";import"./CircleBtn-ChY5qrt3.js";const R={class:"movies-top"},T=m({__name:"SectionTopRatingMovies",props:{title:{},movies:{}},setup(d){return(o,e)=>(t(),u("section",R,[a(v,null,{default:s(()=>[a(b,{class:"movies-top__title",size:"m",component:"h2"},{default:s(()=>[_(g(o.title),1)]),_:1})]),_:1}),a(h,{movies:o.movies,"card-appearance":"numbered"},null,8,["movies"])]))}}),k=p(T,[["__scopeId","data-v-2e65d40b"]]),A={class:"main-page"},S=m({__name:"MainPage",setup(d){const o=f(),e=n(()=>o.movieRandom),i=n(()=>o.moviesTopRaiting);return(x,y)=>(t(),u("main",A,[e.value?(t(),r(M,{key:0,class:"main-page__section main-page__section--movie",id:e.value.id,title:e.value.title,rating:e.value.tmdbRating,year:e.value.releaseYear,genres:e.value.genres,duration:e.value.runtime,text:e.value.plot,trailerYouTubeId:e.value.trailerYouTubeId,backgroundUrl:e.value.backdropUrl,isMovieLoading:l(o).isMovieRandomLoading,showBtnReload:!0,showBtnAbout:!0,onReload:l(o).fetchGetMovieRandom},null,8,["id","title","rating","year","genres","duration","text","trailerYouTubeId","backgroundUrl","isMovieLoading","onReload"])):c("",!0),i.value.length?(t(),r(k,{key:1,class:"main-page__section main-page__section--top-movie",title:"Top 10 Movies",movies:i.value},null,8,["movies"])):c("",!0)]))}}),N=p(S,[["__scopeId","data-v-0c8efc0b"]]);export{N as default};
