"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[84],{9760:function(e,t,n){var r=n(184);t.Z=function(e){var t=e.message;return(0,r.jsxs)("div",{style:{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",gap:"20px"},children:[(0,r.jsx)("h1",{children:"Oops somethin went wrong..."}),t&&(0,r.jsxs)("p",{children:["\u2022\u2022\u2022 ",t,"\u2022\u2022\u2022"]})]})}},952:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(5861),s=n(9439),a=n(4687),i=n.n(a),c=n(2791),o=n(6445),u="MovieDetails_poster__Gw9Qy",l="MovieDetails_BG__uzrsp",p="MovieDetails_posterContainer__Z1yht",d="MovieDetails_posterLink__NBZGD",h="MovieDetails_posterImage__VZLT9",f="MovieDetails_companies__aNOk2",v="MovieDetails_companiesLogo__XPCAR",m="MovieDetails_locations__l+FKi",_="MovieDetails_stats__Xbiuj",x="MovieDetails_overview__EVogb",g="MovieDetails_topAside__2+kTf",j="MovieDetails_bottomAside__Uvity",y="MovieDetails_buttonContainer__IPmkr",w="MovieDetails_Links__pMviO",Z="MovieDetails_linkItem__y+sni",b="MovieDetails_additional__EaCvI",N="MovieDetails_outletContainer__S1aQW",M="MovieDetails_goBackBtn__EIQ+S",D=n(3389),k=n(9760),I=n(7689),C=n(1087),J=n.p+"static/media/poster_bg.eb176c82354851a4f4c1.jpg",S=n(705),O=n(184),A=function(e){var t=e.info,n=t.title,r=t.genres,s=t.poster_path,a=t.original_title,i=t.homepage,c=t.overview,o=t.popularity,u=t.vote_average,l=t.release_date,N=t.tagline,M=t.production_countries,D=t.production_companies;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)("div",{className:p,children:[(0,O.jsx)("a",{rel:"stylesheet",href:i,className:d,children:(0,O.jsx)("img",{className:h,src:"https://image.tmdb.org/t/p/w500/".concat(s),alt:a,loading:"lazy",width:"400","max-height":"709"})}),(0,O.jsx)("p",{className:m,children:(0,S.Ly)(M)})]}),(0,O.jsxs)("aside",{children:[(0,O.jsxs)("div",{className:g,children:[(0,O.jsxs)("h2",{children:[n," ( ",(0,S.ty)(l)," )"]}),(0,O.jsx)("p",{children:N}),(0,O.jsxs)("div",{children:[(0,O.jsx)("h4",{children:"Genres: "}),(0,O.jsx)("p",{children:(0,S.Ly)(r)})]}),(0,O.jsx)("h4",{children:"Overview: "}),(0,O.jsx)("p",{className:x,children:c})]}),(0,O.jsxs)("div",{className:j,children:[D.length>=1&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("h4",{children:"Production Companies:"}),(0,O.jsx)("ul",{className:f,"data-list":!0,children:D.map((function(e){var t=e.name,n=e.logo_path,r=e.origin_country,s=e.id;return null!==n?(0,O.jsx)("li",{className:"company",children:(0,O.jsx)("img",{className:v,src:"https://image.tmdb.org/t/p/w500/".concat(n),alt:t,title:"".concat(t,", ").concat(r),loading:"lazy"})},s):""}))})]}),(0,O.jsx)("h4",{children:"Statistics: "}),(0,O.jsxs)("ul",{className:_,children:[(0,O.jsxs)("li",{children:["Release Date:",(0,O.jsx)("p",{children:(0,S.t6)(l)})]}),(0,O.jsxs)("li",{children:["Vote Average:",(0,O.jsx)("p",{children:Number.parseFloat(u).toFixed(1)})]}),(0,O.jsxs)("li",{children:["User Score:",(0,O.jsx)("p",{children:Number.parseFloat(o).toFixed(1)})]})]})]}),(0,O.jsxs)("div",{className:b,children:[(0,O.jsx)("h3",{style:{textAlign:"center"},children:"Additional Information"}),(0,O.jsxs)("ul",{className:y,children:[(0,O.jsx)("li",{className:w,children:(0,O.jsx)(C.rU,{to:"cast",className:Z,children:"Cast"})}),(0,O.jsx)("li",{className:w,children:(0,O.jsx)(C.rU,{to:"reviews",className:Z,children:"Reviews"})})]})]})]})]})},E=function(){var e=(0,I.UO)().movieId,t=(0,c.useState)(""),n=(0,s.Z)(t,2),a=n[0],p=n[1],d=(0,c.useState)("idle"),h=(0,s.Z)(d,2),f=h[0],v=h[1],m=(0,c.useState)(null),_=(0,s.Z)(m,2),x=_[0],g=_[1],j=(0,I.TH)(),y=(0,c.useState)((function(){return null===j.state?"/movies":j.state.from})),w=(0,s.Z)(y,2),Z=w[0],b=w[1];(0,c.useEffect)((function(){(0,r.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v("pending"),t.prev=1,t.next=4,o.s_(e).then((function(e){p(e),v("resolved")}));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),g(t.t0),v("rejected");case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()}),[e]),(0,c.useEffect)((function(){null!==j.state&&b(j.state.from),null===j.state&&b("/")}),[j.state]);var S;if("pending"===f)return(0,O.jsx)(D.Z,{});if("rejected"===f)return(0,O.jsx)(k.Z,{message:x});if("resolved"===f){var E=a.backdrop_path;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)("article",{className:u,children:[(0,O.jsx)(C.rU,{className:M,to:Z}),(0,O.jsx)("div",{className:l,style:{backgroundImage:(S=E,null===S?"url( ".concat(J,")"):S?"url(https://image.tmdb.org/t/p/original/".concat(S,")"):void 0)}}),(0,O.jsx)(A,{info:a})]}),(0,O.jsx)("div",{className:N,children:(0,O.jsx)(c.Suspense,{children:(0,O.jsx)(I.j3,{})})})]})}}},6445:function(e,t,n){n.d(t,{Df:function(){return c},Jh:function(){return v},Ov:function(){return _},Wd:function(){return h},au:function(){return g},s_:function(){return p},z1:function(){return u}});var r=n(5861),s=n(4687),a=n.n(s),i=n(1243).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{accept:"application/json","Accept-Language":"en-US,en;",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDcxODI0YzJjM2ZmM2FlZjExOGZjZjJhMWY4NmEwYyIsInN1YiI6IjY0NmM4MTEyMmJjZjY3MDBmZTYyMTZhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7t2sbFYyvcaDAtE0fXnZqWJkrF8c6YiesSuOdcaSKsk"}});function c(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/trending/movie/day");case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function u(e){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(a().mark((function e(t){var n,r,s=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,e.prev=1,e.next=4,i.get("/search/movie?query=".concat(t.toLowerCase().trim(),"&include_adult=true&page=").concat(n));case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),l.apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/movie/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/movie/".concat(t,"/credits"));case 3:return n=e.sent,e.abrupt("return",n.data.cast.map((function(e){return e})));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return m=(0,r.Z)(a().mark((function e(t){var n,r,s=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,e.prev=1,e.next=4,i.get("/movie/".concat(t,"/reviews?page=").concat(n));case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),m.apply(this,arguments)}function _(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/person/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/person/".concat(t,"/movie_credits"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},705:function(e,t,n){n.d(t,{t6:function(){return i},Ly:function(){return o},vX:function(){return f},EH:function(){return d},Co:function(){return h},CN:function(){return l},E1:function(){return u},Nq:function(){return p},ty:function(){return c}});var r=n(8683),s=n(8977),a=n.p+"static/media/placeholder_sq.157f088b56f86d22066e.png",i=function(e){return(0,s.Z)(new Date(e)," dd MMM yyyy")},c=function(e){return(0,s.Z)(new Date(e),"yyyy")},o=function(e){return String(e.map((function(e){return e.name}))).split(",").join(", ")},u=function(e){return Number.parseInt(e)},l=function(e){var t=Array.from(e);return"/"===t[0]&&t.shift(),t.join("")},p=function(e){for(var t="",n=0;n<e;n+=1)t+="\u272f";return t},d=function(e){if(null===e)return a;if(null!==e){var t=Array.from(e);return t.shift(),t.length<=31?"https://image.tmdb.org/t/p/w500/".concat(t.join("")):t.join("")}},h=function(e){return null===e?a:null!==e?"https://image.tmdb.org/t/p/w500/".concat(e):void 0},f=function(e){var t=/[^a-zA-Z\s]+/,n=e.filter((function(e){return!e.match(t)})),s=(0,r.Z)({},n);return String(Object.values(s)).split(",").join(", ")}}}]);
//# sourceMappingURL=84.991edd9f.chunk.js.map