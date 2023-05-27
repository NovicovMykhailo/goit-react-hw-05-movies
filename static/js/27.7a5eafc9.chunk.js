"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[27],{9760:function(e,t,n){var r=n(184);t.Z=function(e){var t=e.message;return(0,r.jsxs)("div",{style:{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",gap:"20px"},children:[(0,r.jsx)("h1",{children:"Oops somethin went wrong..."}),t&&(0,r.jsxs)("p",{children:["\u2022\u2022\u2022 ",t,"\u2022\u2022\u2022"]})]})}},5228:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(5861),a=n(9439),c=n(4687),i=n.n(c),s=n(2791),u=n(6445),o=n(7689),l=n(3389),f=n(9760),p=n(705),h="ReviewCard_card__Hm-SI",d="ReviewCard_userAvatar__G76FK",v="ReviewCard_userInfo__UJyDf",m="ReviewCard_image__AviTK",x="ReviewCard_stats__+Zbc0",g="ReviewCard_content__qqmQX",w=n(184),j=function(e){var t=e.review,n=t.content,r=t.created_at,a=t.url,c=t.author_details,i=c.username,s=c.avatar_path,u=c.rating;return(0,w.jsxs)("li",{className:h,children:[(0,w.jsxs)("div",{className:d,children:[(0,w.jsxs)("h3",{children:[" ",i," "]}),(0,w.jsxs)("div",{className:v,children:[(0,w.jsx)("img",{className:m,src:(0,p.EH)(s),alt:"Avatar",width:"80"}),(0,w.jsxs)("ul",{className:x,children:[(0,w.jsx)("li",{children:null!==u&&"Rating: ".concat((0,p.Nq)(u))}),(0,w.jsxs)("li",{children:["Created: ",(0,p.t6)(r)]})]})]})]}),(0,w.jsx)("a",{href:(0,p.CN)(a),target:"blank",children:(0,w.jsx)("p",{className:g,children:n})})]})},y="Reviews_reviewsList__hDAQA",_="Reviews_title__t265C",Z=function(){var e=(0,s.useState)(null),t=(0,a.Z)(e,2),n=t[0],c=t[1],p=(0,s.useState)("idle"),h=(0,a.Z)(p,2),d=h[0],v=h[1],m=(0,s.useState)(""),x=(0,a.Z)(m,2),g=x[0],Z=x[1],b=(0,o.UO)().movieId;if((0,s.useEffect)((function(){(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v("pending"),e.prev=1,e.next=4,u.Jh(b).then((function(e){c(e),v("resolved")}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),Z(e.t0),v("rejected");case 10:case"end":return e.stop()}}),e,null,[[1,6]])})))()}),[b]),"pending"===d)return(0,w.jsx)(l.Z,{});if("rejected"===d)return(0,w.jsx)(f.Z,{message:g});if("resolved"===d){if(null!==n&&0===n.length)return(0,w.jsx)("h2",{style:{color:"white",textAlign:"center",marginTop:"20px"},children:"Sorry we can not find any reviews for this movie"});if(n)return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h3",{className:_,children:"Reviews"}),(0,w.jsx)(s.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading ..."}),children:(0,w.jsx)("ul",{className:y,children:n.map((function(e){return(0,w.jsx)(j,{review:e},e.id)}))})})]})}}},6445:function(e,t,n){n.d(t,{Df:function(){return s},Jh:function(){return v},Wd:function(){return h},s_:function(){return f},z1:function(){return o}});var r=n(5861),a=n(4687),c=n.n(a),i=n(1243).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{accept:"application/json","Accept-Language":"en-US,en;",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDcxODI0YzJjM2ZmM2FlZjExOGZjZjJhMWY4NmEwYyIsInN1YiI6IjY0NmM4MTEyMmJjZjY3MDBmZTYyMTZhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7t2sbFYyvcaDAtE0fXnZqWJkrF8c6YiesSuOdcaSKsk"}});function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/trending/movie/day");case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function o(e){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.prev=1,e.next=4,i.get("/search/movie?query=".concat(t.toLowerCase().trim(),"&include_adult=true&page=").concat(n));case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),l.apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/movie/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/movie/".concat(t,"/credits"));case 3:return n=e.sent,e.abrupt("return",n.data.cast.map((function(e){return e})));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return m=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.prev=1,e.next=4,i.get("/movie/".concat(t,"/reviews?page=").concat(n));case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),m.apply(this,arguments)}},705:function(e,t,n){n.d(t,{t6:function(){return c},Ly:function(){return s},EH:function(){return f},CN:function(){return o},E1:function(){return u},Nq:function(){return l},ty:function(){return i}});var r=n(8977),a=n.p+"static/media/placeholder_sq.157f088b56f86d22066e.png",c=function(e){return(0,r.Z)(new Date(e)," dd MMM yyyy")},i=function(e){return(0,r.Z)(new Date(e),"yyyy")},s=function(e){return String(e.map((function(e){return e.name}))).split(",").join(", ")},u=function(e){return Number.parseInt(e)},o=function(e){var t=Array.from(e);return"/"===t[0]&&t.shift(),t.join("")},l=function(e){for(var t="",n=0;n<e;n+=1)t+="\u272f";return t},f=function(e){if(null===e)return a;if(null!==e){var t=Array.from(e);return t.shift(),t.length<=31?"https://image.tmdb.org/t/p/w500/".concat(t.join("")):t.join("")}}}}]);
//# sourceMappingURL=27.7a5eafc9.chunk.js.map