(function(t){function e(e){for(var r,i,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0e76c28a"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(t);var c=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0f64":function(t,e,a){"use strict";var r=a("ed11"),n=a.n(r);n.a},"1f7b":function(t,e,a){"use strict";var r=a("3a39"),n=a.n(r);n.a},"21bb":function(t,e,a){"use strict";var r=a("7a98"),n=a.n(r);n.a},"3a39":function(t,e,a){},"3b98":function(t,e,a){},"44e3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("div",{staticClass:"content"},[a("router-view")],1),a("Footer"),a("BackToTop")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{attrs:{id:"header"}},[a("div",{staticClass:"h_wrap"},[a("div",{staticClass:"logo"},[a("router-link",{staticClass:"navbarLink",attrs:{to:"/"}},[a("span",[t._v("My")]),a("strong",[t._v("IMDB")])])],1),a("div",{staticClass:"menu"},[a("div",{staticClass:"main_nav desktop"},[a("router-link",{attrs:{to:"/"}},[t._v("\n          HOME\n        ")]),a("router-link",{attrs:{to:"/movies"}},[t._v("\n          Movies\n        ")]),a("router-link",{attrs:{to:"/series"}},[t._v("\n          Series\n        ")])],1),a("font-awesome-icon",{ref:"menuBar",attrs:{icon:"bars"}})],1)]),a("div",{ref:"mobile",staticClass:"mobile"},[a("div",{ref:"mobile_block",staticClass:"mobile_block"}),a("div",{staticClass:"mobile_menu"},[a("div",{staticClass:"main_nav"},[a("router-link",{staticClass:"navbarLink",attrs:{to:"/"}},[t._v("\n            HOME\n        ")]),a("router-link",{staticClass:"navbarLink",attrs:{to:"/movies"}},[t._v("\n          Movies\n        ")]),a("router-link",{staticClass:"navbarLink",attrs:{to:"/series"}},[t._v("\n          Series\n        ")])],1)])])])},o=[],l={mounted:function(){var t=this;document.body.clientWidth>991&&document.addEventListener("scroll",(function(){window.pageYOffset>0?document.getElementById("header").classList.add("onScrolled"):document.getElementById("header").classList.remove("onScrolled")}));var e=!1;this.$refs.menuBar.addEventListener("click",(function(){switch(e=!e,e){case!0:t.$refs.mobile.classList.add("draw_in");break;case!1:t.$refs.mobile.classList.remove("draw_in");break}})),this.$refs.mobile_block.addEventListener("click",(function(){t.$refs.mobile.classList.remove("draw_in"),e=!1}));for(var a=document.getElementsByClassName("navbarLink"),r=0;r<a.length;r++)a[r].addEventListener("click",(function(){t.$refs.mobile.classList.remove("draw_in"),e=!1}))}},c=l,u=(a("1f7b"),a("2877")),d=Object(u["a"])(c,i,o,!1,null,"cfcf625e",null),f=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container"},[a("div",{staticClass:"social"},[a("div",{staticClass:"facebook"},[a("a",{attrs:{href:"https://www.facebook.com/haochiang.chien",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","facebook-square"]}})],1)]),a("div",{staticClass:"github"},[a("a",{attrs:{href:"https://github.com/potter80511",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)]),a("div",{staticClass:"youtube"},[a("a",{attrs:{href:"https://www.youtube.com/channel/UCzQj08-n95D_aftgctWYdng",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","youtube"]}})],1)]),a("div",{staticClass:"instagram"},[a("a",{attrs:{href:"https://www.instagram.com/johnny19910511/",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]),a("div",{staticClass:"line"},[a("a",{attrs:{href:"",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","line"]}})],1)])])]),t._m(0)])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"copy_right"},[a("div",{staticClass:"container"},[a("span",[t._v("Copyright ©  2019 All Rights Reserved by Johnny Chien")])])])}],p={},_=p,b=(a("fd13"),Object(u["a"])(_,m,v,!1,null,"f2a65622",null)),y=b.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{show:t.isShowBackTop},attrs:{id:"back_to_top"},on:{click:function(e){return t.BackToTop()}}},[a("font-awesome-icon",{attrs:{icon:"chevron-up"}})],1)},w=[],k={data:function(){return{isShowBackTop:!1}},mounted:function(){var t=this,e=document.getElementById("header").clientHeight;document.addEventListener("scroll",(function(){window.pageYOffset>e?t.isShowBackTop=!0:t.isShowBackTop=!1}))},methods:{BackToTop:function(){var t=0,e=function(e){window.pageYOffset<=0?clearInterval(t):window.scrollBy(0,-30)};t=setInterval(e,.5)}}},g=k,C=(a("74e2"),Object(u["a"])(g,h,w,!1,null,"77966972",null)),D=C.exports,S={name:"App",components:{Header:f,Footer:y,BackToTop:D},data:function(){return{}}},x=S,B=(a("5c0b"),Object(u["a"])(x,n,s,!1,null,null,null)),O=B.exports,E=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("BannerSlide",{attrs:{bannerData:t.indexBannerData,paginationOn:!0}}),a("IndexList",{attrs:{blockId:"series",type:"series",blockClass:"series_list",sectionTitle:"最愛影集",subTitle:"Favorite Series",filmsData:t.seriesData}}),a("IndexList",{attrs:{blockId:"movies",type:"movies",blockClass:"movies_list",sectionTitle:"最愛電影",subTitle:"Favorite Movies",filmsData:t.moviesData}})],1)},T=[],$=(a("55dd"),a("ac6a"),a("456d"),function(t){for(var e=t,a=[],r=5;r>0;r--)e>=2?a.push("star"):e>=1?a.push("half"):a.push("empty"),e-=2;return a}),M=function(t){for(var e=t,a=[],r=10;r>0;r--)e>=1?a.push("star"):e>=.5?a.push("half"):a.push("empty"),e-=1;return a},F=function(t){if(t){var e=[],a=Object.keys(t);return a.forEach((function(a){e.push(t[a])})),e}console.log("no_data")},I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"lists "+t.blockClass,attrs:{id:t.blockId}},[a("div",{staticClass:"container"},["series"===t.type?a("router-link",{staticClass:"more",attrs:{to:"/"+t.type}},[t._v("\n      更多影集\n      "),a("font-awesome-icon",{attrs:{icon:"angle-double-right"}})],1):"movies"===t.type?a("router-link",{staticClass:"more",attrs:{to:"/"+t.type}},[t._v("\n      更多電影\n      "),a("font-awesome-icon",{attrs:{icon:"angle-double-right"}})],1):t._e(),a("div",{staticClass:"section-header"},[a("h2",[t._v(t._s(t.sectionTitle)),a("span",[t._v(t._s(t.subTitle))])])]),t.filmsData.length>0?a("swiper",{attrs:{options:t.swiperOpitons}},t._l(t.filmsData,(function(t,e){return a("swiper-slide",{key:e},[a("IndexListSwiperSlide",{attrs:{imdbId:t.imdb_id,wallpaper:t.wallpaper,rates:t.rates,name:t.tw_name,brief:t.brief,id:t.id}})],1)})),1):t._e()],1),a("div",{staticClass:"swiper-button-prev swiper-button",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next swiper-button",attrs:{slot:"button-next"},slot:"button-next"})])},N=[],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("router-link",{attrs:{to:{name:"film details",params:{id:t.imdbId}}}},[a("img",{attrs:{src:t.wallpaper}})])],1),a("div",{staticClass:"list_content"},[a("div",{staticStyle:{display:"none"}},[t._v(t._s(t.id))]),a("div",{staticClass:"rates"},[t._l(t.rateStarWithEmpty(t.rates),(function(e,r){return a("span",{key:r},["star"===e?a("font-awesome-icon",{attrs:{icon:"star"}}):t._e(),"half"===e?a("font-awesome-icon",{attrs:{icon:"star-half-alt"}}):t._e(),"empty"===e?a("font-awesome-icon",{attrs:{icon:["far","star"]}}):t._e()],1)})),a("b",[t._v(t._s(t.rates.toFixed(1)))])],2),a("div",{staticClass:"film_title"},[a("h2",[t._v(t._s(t.name))])]),a("div",{staticClass:"discription"},[a("p",[t._v(t._s(t.brief))])])])])},A=[],P=(a("c5f6"),{props:{id:{type:String,default:0},imdbId:{type:String,default:""},wallpaper:{type:String,default:""},rates:{type:Number,default:0},name:{type:String,default:""},brief:{type:String,default:""}},methods:{rateStarWithEmpty:function(t){return $(t)}}}),Y=P,R=Object(u["a"])(Y,L,A,!1,null,null,null),q=R.exports,H={props:{blockId:{type:String,default:""},blockClass:{type:String,default:""},sectionTitle:{type:String,default:"",required:!0},subTitle:{type:String,default:""},type:{type:String,default:"/"},filmsData:{type:Array,default:[],required:!0}},components:{IndexListSwiperSlide:q},data:function(){return{swiperOpitons:{slidesPerView:5,spaceBetween:30,speed:800,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{1199:{slidesPerView:4},768:{slidesPerView:3},575:{slidesPerView:2}},navigation:{nextEl:"#"+this.blockId+" .swiper-button-next",prevEl:"#"+this.blockId+" .swiper-button-prev"}}}}},V=H,W=Object(u["a"])(V,I,N,!1,null,null,null),z=W.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"bannerSlide",staticClass:"banner"},[t.bannerData.length>0&&!0===t.background?a("swiper",{attrs:{options:t.swiperBanner}},t._l(t.bannerData,(function(t,e){return a("swiper-slide",{key:e,style:{backgroundImage:"url("+t+")",height:"500px"}})})),1):t.bannerData.length>0?a("swiper",{attrs:{options:t.swiperBanner}},t._l(t.bannerData,(function(t,e){return a("swiper-slide",{key:e},[a("img",{attrs:{src:t}})])})),1):t._e(),a("div",{staticClass:"swiper-button-prev swiper-button",attrs:{slot:"button-prev"},slot:"button-prev"},[a("font-awesome-icon",{attrs:{icon:"chevron-left"}})],1),a("div",{staticClass:"swiper-button-next swiper-button",attrs:{slot:"button-next"},slot:"button-next"},[a("font-awesome-icon",{attrs:{icon:"chevron-right"}})],1),t.paginationOn?a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):t._e()],1)},U=[],K={props:{bannerData:{type:Array},paginationOn:{type:Boolean,default:!1},background:{default:!1}},data:function(){return{swiperBanner:{speed:800,loop:!0,effect:"fade",autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".banner .swiper-button-next",prevEl:".banner .swiper-button-prev"},pagination:{el:".banner .swiper-pagination",clickable:!0}}}}},X=K,G=Object(u["a"])(X,J,U,!1,null,null,null),Q=G.exports,Z={components:{IndexList:z,BannerSlide:Q},computed:{moviesData:function(){return this.$store.getters.filterFavoriteMovies.sort((function(t,e){return e.rates-t.rates}))},seriesData:function(){return this.$store.getters.filterFavoriteSeries.sort((function(t,e){return e.rates-t.rates}))},indexBannerData:function(){return this.$store.getters.filterIndexBanner}},methods:{}},tt=Z,et=(a("21bb"),Object(u["a"])(tt,j,T,!1,null,null,null)),at=et.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"films"}},[a("BannerSlide",{attrs:{bannerData:t.bannerData,background:!0}}),a("div",{staticClass:"film_list"},[a("div",{staticClass:"container"},[a("FilterTools",{attrs:{currentSelectedArea:t.currentSelectedArea,currentSelectedCategory:t.currentSelectedCategory,currentSelectedYear:t.currentSelectedYear,sortBy:t.sortBy,filterAreaMethod:t.filterAreaMethod,filterCategory:t.filterCategory,filterYearMethod:t.filterYearMethod},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),a("div",{staticClass:"section-header"},["movies"===t.$route.name?a("h2",[t._v("電影列表"),a("span",[t._v("Movies")])]):"series"===t.$route.name?a("h2",[t._v("影集列表"),a("span",[t._v("Series")])]):t._e()]),t.filmsData.length>0?a("div",{staticClass:"row list_content"},t._l(t.filmsData,(function(e,r){return a("div",{key:r,staticClass:"item col-lg-4 col-sm-6"},[a("router-link",{attrs:{to:{name:"film details",params:{id:e.imdb_id}}}},[a("div",{staticClass:"image"},[a("router-link",{attrs:{to:{name:"film details",params:{id:e.imdb_id}}}},[a("img",{attrs:{src:e.wallpaper}})])],1),a("div",{staticClass:"film_content"},[a("div",{staticStyle:{display:"none"}},[t._v(t._s(e.id))]),a("h3",{staticClass:"name"},[t._v(t._s(e.tw_name))]),"imdbRates"===t.sortBy?a("div",{staticClass:"rates"},[a("b",{staticClass:"title"},[t._v("IMDB：")]),t._l(t.rateStarWithEmpty(e.rates),(function(e,r){return a("span",{key:r},["star"===e?a("font-awesome-icon",{attrs:{icon:"star"}}):t._e(),"half"===e?a("font-awesome-icon",{attrs:{icon:"star-half-alt"}}):t._e(),"empty"===e?a("font-awesome-icon",{attrs:{icon:["far","star"]}}):t._e()],1)})),a("b",[t._v(t._s(e.rates.toFixed(1)))])],2):a("div",{staticClass:"rates"},[a("b",{staticClass:"title"},[t._v("我的評分：")]),t._l(t.rateStarWithEmpty(e.my_rate),(function(e,r){return a("span",{key:r},["star"===e?a("font-awesome-icon",{attrs:{icon:"star"}}):t._e(),"half"===e?a("font-awesome-icon",{attrs:{icon:"star-half-alt"}}):t._e(),"empty"===e?a("font-awesome-icon",{attrs:{icon:["far","star"]}}):t._e()],1)})),e.my_rate?a("b",[t._v(t._s(e.my_rate.toFixed(1)))]):t._e()],2),a("div",{staticClass:"area"},[a("b",[t._v("地區：")]),t._v(t._s(e.area)+"\n              ")]),a("div",{staticClass:"categories"},[a("b",[t._v("種類")]),a("div",t._l(t.objToArray(e.categories),(function(e,r){return a("span",{key:r},[t._v("\n                  "+t._s(e)+"\n                  ")])})),0)]),"movies"===e.type&&e.director?a("div",{staticClass:"director"},[a("b",[t._v("導演：")]),a("div",[a("span",[t._v(t._s(e.director))])])]):"series"===e.type&&e.writers?a("div",{staticClass:"writers"},[a("b",[t._v("編劇：")]),a("div",[t._l(t.objToArray(e.writers).slice(0,3),(function(e,r){return a("span",{key:r},[t._v("\n                  "+t._s(e)+"\n                  ")])})),t.objToArray(e.writers).length>3?a("span",[t._v("...")]):t._e()],2)]):t._e(),t.objToArray(e.cast)?a("div",{staticClass:"cast"},[a("b",[t._v("主演：")]),a("div",t._l(t.objToArray(e.cast).slice(0,3),(function(e,r){return a("span",{key:r},[t._v("\n                  "+t._s(e)+"\n                  ")])})),0)]):t._e()])])],1)})),0):a("div",{staticClass:"row list_content"},[a("p",[t._v("沒有篩選結果")])])],1)])],1)},nt=[],st=(a("6762"),a("2fdb"),a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tools"},[a("div",{staticClass:"filter"},[a("div",{staticClass:"conditions"},[a("div",{staticClass:"label"},[a("span",[t._v("地區")]),a("font-awesome-icon",{attrs:{icon:"angle-double-right"}})],1),a("div",{staticClass:"contents"},[a("span",t._l(t.filterAreas,(function(e){return a("span",{key:e.index,class:{active:t.currentSelectedArea===e.keyName},on:{click:function(a){return t.filterAreaMethod(e.keyName)}}},[t._v(t._s(e.keyName))])})),0)])]),a("div",{staticClass:"conditions"},[a("div",{staticClass:"label"},[a("span",[t._v("種類")]),a("font-awesome-icon",{attrs:{icon:"angle-double-right"}})],1),a("div",{staticClass:"contents"},t._l(t.filterCates,(function(e){return a("span",{key:e.id},[a("span",{class:{active:t.currentSelectedCategory===e.key},on:{click:function(a){return t.filterCategory(e.key)}}},[t._v(t._s(e.keyName))])])})),0)]),a("div",{staticClass:"conditions"},[a("div",{staticClass:"label"},[a("span",[t._v("年份")]),a("font-awesome-icon",{attrs:{icon:"angle-double-right"}})],1),a("div",{staticClass:"contents"},t._l(t.filterYears,(function(e){return a("span",{key:e.index},[a("span",{class:{active:t.currentSelectedYear===e},on:{click:function(a){return t.filterYearMethod(e)}}},[t._v(t._s(e))])])})),0)])]),a("div",{staticClass:"sort"},[a("select",{domProps:{value:t.sortBy},on:{input:function(e){return t.$emit("input",e.target.value)}}},[a("option",{attrs:{value:"imdbRates"}},[t._v("以IMDB評分排序")]),a("option",{attrs:{value:"myRates"}},[t._v("以我的評分排序")])]),a("font-awesome-icon",{attrs:{icon:"chevron-down"}})],1)])}),it=[],ot={props:{currentSelectedArea:{type:String},currentSelectedCategory:{type:String},currentSelectedYear:{type:[Number,String]},sortBy:{type:String},filterAreaMethod:{type:Function},filterCategory:{type:Function},filterYearMethod:{type:Function}},data:function(){return{filterAreas:[{keyName:"全部",key:"00"},{keyName:"美國",key:"01"},{keyName:"英國"},{keyName:"韓國"},{keyName:"泰國"},{keyName:"日本"},{keyName:"印度"},{keyName:"西班牙"}],filterCates:[{keyName:"全部",key:"00"},{keyName:"動作",key:"01"},{keyName:"犯罪",key:"02"},{keyName:"愛情",key:"03"},{keyName:"科幻",key:"04"},{keyName:"驚悚",key:"05"},{keyName:"恐怖",key:"06"},{keyName:"劇情",key:"07"},{keyName:"喜劇",key:"08"},{keyName:"家庭",key:"09"},{keyName:"戰爭",key:"10"},{keyName:"傳記",key:"11"},{keyName:"動畫",key:"12"},{keyName:"音樂",key:"13"},{keyName:"奇幻",key:"14"},{keyName:"溫馨",key:"15"}],filterYears:["全部",2019,2018,2017,2016,2015,2014,2013,1994]}}},lt=ot,ct=(a("aea1"),Object(u["a"])(lt,st,it,!1,null,"f998f3f2",null)),ut=ct.exports,dt={data:function(){return{swiperBanner:{speed:800,loop:!0,effect:"fade",autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".banner .swiper-button-next",prevEl:".banner .swiper-button-prev"}},directorData:[],currentSelectedArea:"全部",currentSelectedCategory:"00",currentSelectedYear:"全部",sortBy:"imdbRates"}},components:{BannerSlide:Q,FilterTools:ut},computed:{filmsData:function(){var t=this.$route.name,e=[],a=this.sortBy;"movies"===t?e=this.$store.state.movies.sort((function(t,e){return"imdbRates"===a?e.rates-t.rates:e.my_rate-t.my_rate})):"series"===t&&(e=this.$store.state.series.sort((function(t,e){return"imdbRates"===a?e.rates-t.rates:e.my_rate-t.my_rate})));var r=this.currentSelectedArea,n=this.currentSelectedCategory,s=this.currentSelectedYear;if("全部"!==r&&"00"!==n&&"全部"!==s){var i=e.filter((function(t){return t.area===r})).filter((function(t){var e=Object.keys(t.categories||{});return e.includes(n)})).filter((function(t){return t.year===s}));return i}if("全部"===r&&"00"!==n&&"全部"!==s){var o=e.filter((function(t){var e=Object.keys(t.categories||{});return e.includes(n)})).filter((function(t){return t.year===s}));return o}if("全部"!==r&&"00"===n&&"全部"!==s){var l=e.filter((function(t){return t.area===r})).filter((function(t){return t.year===s}));return l}if("全部"!==r&&"00"!==n&&"全部"===s){var c=e.filter((function(t){return t.area===r})).filter((function(t){var e=Object.keys(t.categories||{});return e.includes(n)}));return c}if("全部"!==r&&"00"===n&&"全部"===s){var u=e.filter((function(t){return t.area===r}));return u}if("全部"===r&&"00"!==n&&"全部"===s){var d=e.filter((function(t){var e=Object.keys(t.categories||{});return e.includes(n)}));return d}if("全部"===r&&"00"===n&&"全部"!==s){var f=e.filter((function(t){return t.year===s}));return f}return e},bannerData:function(){var t=this.$route.name;return"movies"===t?this.$store.getters.moviesBanner:"series"===t?this.$store.getters.seriesBanner:[]}},methods:{rateStarWithEmpty:function(t){return $(t)},objToArray:function(t){return F(t)},filterAreaMethod:function(t){this.currentSelectedArea=t},filterCategory:function(t){this.currentSelectedCategory=t},filterYearMethod:function(t){this.currentSelectedYear=t}}},ft=dt,mt=(a("bc7f"),Object(u["a"])(ft,rt,nt,!1,null,null,null)),vt=mt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"film_details"},[a("BannerSlide",{attrs:{bannerData:t.bannerData}}),a("div",{staticClass:"container"},[a("div",{staticClass:"main"},[a("div",{staticClass:"row main_info"},[a("div",{staticClass:"row"},[a("div",{staticClass:"wallpaper col-md-4"},[a("div",{staticClass:"film_title mobile"},[a("h1",[t.filmData.favorite?a("div",{staticClass:"favorite_crown"},[a("font-awesome-icon",{attrs:{icon:"crown"}})],1):t._e(),t._v("\n                "+t._s(t.filmData.name)+"\n              ")]),t.filmData.tw_name?a("h2",{staticClass:"tw_name"},[a("b",[t._v("中文片名：")]),a("span",[t._v(t._s(t.filmData.tw_name))])]):t._e()]),a("img",{attrs:{src:t.filmData.wallpaper}})]),a("div",{staticClass:"words col-md-8"},[a("div",{staticClass:"film_title desktop"},[a("h1",[t.filmData.favorite?a("div",{staticClass:"favorite_crown"},[a("font-awesome-icon",{attrs:{icon:"crown"}})],1):t._e(),t._v("\n                "+t._s(t.filmData.name)+"\n              ")]),t.filmData.tw_name?a("h2",{staticClass:"tw_name"},[a("b",[t._v("中文片名：")]),a("span",[t._v(t._s(t.filmData.tw_name))])]):t._e()]),a("div",{staticClass:"film_info"},[a("div",{staticClass:"rates"},[a("b",[t._v("IMDB 評分：")]),t._l(t.rateTenStar(t.filmData.rates),(function(e,r){return a("span",{key:r},["star"===e?a("font-awesome-icon",{attrs:{icon:"star"}}):t._e(),"half"===e?a("font-awesome-icon",{attrs:{icon:"star-half-alt"}}):t._e(),"empty"===e?a("font-awesome-icon",{attrs:{icon:["far","star"]}}):t._e()],1)})),a("b",[t._v(t._s(t.filmData.rates.toFixed(1))+" 分")]),a("a",{staticClass:"go_imdb",attrs:{href:"https://www.imdb.com/title/"+t.filmData.imdb_id,target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:"arrow-right"}}),a("font-awesome-icon",{attrs:{icon:["fab","imdb"]}})],1)],2),t.filmData.my_rate?a("div",{staticClass:"my_rate"},[a("font-awesome-icon",{attrs:{icon:"check"}}),a("b",[t._v("我的評分：")]),t._l(t.rateTenStar(t.filmData.my_rate),(function(e,r){return a("span",{key:r},["star"===e?a("font-awesome-icon",{attrs:{icon:"star"}}):t._e(),"half"===e?a("font-awesome-icon",{attrs:{icon:"star-half-alt"}}):t._e(),"empty"===e?a("font-awesome-icon",{attrs:{icon:["far","star"]}}):t._e()],1)})),a("b",[t._v(t._s(t.filmData.my_rate.toFixed(1))+" 分")])],2):t._e(),a("div",{staticClass:"type"},[a("b",[t._v("類型：")]),"series"===t.filmData.type?a("router-link",{attrs:{to:"/series"}},[t._v("影集")]):"movies"===t.filmData.type?a("router-link",{attrs:{to:"/movies"}},[t._v("電影")]):t._e()],1),"movies"===t.filmData.type&&t.filmData.director?a("div",{staticClass:"director"},[a("b",[t._v("導演：")]),a("div",[a("span",[t._v(t._s(t.filmData.director))])])]):"series"===t.filmData.type&&t.writersData.length>0?a("div",{staticClass:"writers"},[a("b",[t._v("編劇：")]),a("div",t._l(t.writersData,(function(e,r){return a("span",{key:r},[t._v(t._s(e))])})),0)]):t._e(),t.cateData.length>0?a("div",{staticClass:"categories"},[a("b",[t._v("種類：")]),a("div",t._l(t.cateData,(function(e,r){return a("span",{key:r},[t._v(t._s(e))])})),0)]):t._e(),t.castData?a("div",{staticClass:"casts"},[a("b",[t._v("主演：")]),a("div",t._l(t.castData,(function(e,r){return a("span",{key:r},[t._v(t._s(e))])})),0)]):t._e(),t.filmData.year?a("div",{staticClass:"year"},[a("b",[t._v("年份：")]),a("span",[t._v(t._s(t.filmData.year)+" 年")])]):t._e(),"series"===t.filmData.type?a("div",{staticClass:"end"},[t.filmData.still?a("span",{staticClass:"still"},[t._v("\n                  未完結\n                  "),t.seasonsData.length>0?a("span",{staticClass:"total"},[t._v("，目前季數 "),a("b",[t._v(t._s(t.seasonsData.length))]),t._v(" 季")]):t._e()]):a("span",[t._v("\n                  已完結\n                  "),t.seasonsData.length>0?a("span",{staticClass:"total"},[t._v("，共 "),a("b",[t._v(t._s(t.seasonsData.length))]),t._v(" 季")]):t._e()])]):t._e(),t.filmData.brief?a("div",{staticClass:"brief"},[a("b",[t._v("簡述：")]),a("p",[t._v(t._s(t.filmData.brief))])]):t._e(),t.filmData.favorite?a("div",{staticClass:"favorite"},["movies"===t.filmData.type?a("span",[t._v("最愛電影")]):"series"===t.filmData.type?a("span",[t._v("最愛影集")]):t._e()]):t._e()])])])]),a("div",{staticClass:"main_intro"},[a("div",{staticClass:"blocks"},[t._m(0),a("div",{domProps:{innerHTML:t._s(t.filmData.summary)}})]),t.relatedData.length>0?a("div",{staticClass:"blocks related"},[t._m(1),a("div",{staticClass:"content"},[a("RelatedFilmsSwiper",{attrs:{relatedData:t.relatedData,blockClass:"related"}})],1)]):t._e(),t.sameDirectorData.length>0?a("div",{staticClass:"blocks related"},[a("h3",[a("span",{staticClass:"circle"}),t._v(t._s(t.filmData.director)+" 執導相關作品")]),a("div",{staticClass:"content"},[a("RelatedFilmsSwiper",{attrs:{relatedData:t.sameDirectorData,blockClass:"related"}})],1)]):t._e()])])])],1)},_t=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("span",{staticClass:"circle"}),t._v("劇情介紹")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("span",{staticClass:"circle"}),t._v("相關續作")])}],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.relatedData.length>0?a("swiper",{attrs:{options:t.relatedSwiperOpitons}},[t._l(t.relatedData,(function(e,r){return a("swiper-slide",{key:r,staticClass:"item"},[a("img",{attrs:{src:e.wallpaper}}),a("a",{attrs:{href:"/film_details/"+e.imdb_id}},[a("span",[t._v(t._s(e.tw_name))])])])})),a("div",{staticClass:"swiper-button-prev swiper-button",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next swiper-button",attrs:{slot:"button-next"},slot:"button-next"})],2):t._e()},yt=[],ht={props:{relatedData:{type:Array},blockClass:{type:String}},data:function(){return{relatedSwiperOpitons:{slidesPerView:6,spaceBetween:30,speed:800,breakpoints:{1199:{slidesPerView:5},768:{slidesPerView:3}},navigation:{nextEl:"."+this.blockClass+" .swiper-button-next",prevEl:"."+this.blockClass+" .swiper-button-prev"}}}}},wt=ht,kt=Object(u["a"])(wt,bt,yt,!1,null,null,null),gt=kt.exports,Ct={components:{BannerSlide:Q,RelatedFilmsSwiper:gt},data:function(){return{filmData:{brief:"",categories:{},cast:{},director:"",favorite:!1,imdb_id:"",my_rate:0,name:"",page_banners:{},rates:0,related:"",still:!1,summary:"",tw_name:"",type:"",wallpaper:"",year:0},bannerData:[],writersData:[],castData:[],cateData:[],relatedData:[],sameDirectorData:[],seasonsData:[]}},computed:{getFilmData:function(){return this.$store.state.currentFilm},getRelatedMData:function(){}},methods:{rateTenStar:function(t){return M(t)}},created:function(){this.$store.dispatch("loadedFilm",this.$route.params.id)},watch:{getFilmData:function(t){if(t){t.page_banners&&(this.bannerData=F(t.page_banners)),t.writers&&(this.writersData=F(t.writers)),t.categories&&(this.cateData=F(t.categories)),this.castData=F(t.cast),t.seasons&&(this.seasonsData=F(t.seasons)),this.filmData=t;var e=this.$store.state.movies,a=t.related,r=e.filter((function(e){return e.related&&e.related===a&&e.name!==t.name}));this.relatedData=r.sort((function(t,e){return t.year-e.year}));var n=t.director,s=e.filter((function(e){return e.director&&e.director===n&&e.name!==t.name}));this.sameDirectorData=s.sort((function(t,e){return e.year-t.year}))}}}},Dt=Ct,St=(a("0f64"),Object(u["a"])(Dt,pt,_t,!1,null,null,null)),xt=St.exports;r["a"].use(E["a"]);var Bt=new E["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:at},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/film_details/:id",name:"film details",component:xt},{path:"/movies",name:"movies",component:vt},{path:"/series",name:"series",component:vt}]}),Ot=a("2f62"),Et=a("8aa5");r["a"].use(Ot["a"]);var jt=new Ot["a"].Store({state:{movies:[],series:[],currentFilm:null},mutations:{setLoadedMovies:function(t,e){t.movies=e},setLoadedSeries:function(t,e){t.series=e},setCurrentFilm:function(t,e){t.currentFilm=e}},actions:{loadedMovies:function(t){var e=t.commit;Et["database"]().ref("movies").orderByChild("type").equalTo("movies").once("value").then((function(t){var a=[],r=t.val();for(var n in r)a.push({id:n,area:r[n].area,name:r[n].name,brief:r[n].brief,categories:r[n].categories,cast:r[n].cast,director:r[n].director,wallpaper:r[n].wallpaper,rates:r[n].rates,related:r[n].related,favorite:r[n].favorite,my_rate:r[n].my_rate,imdb_id:r[n].imdb_id,tw_name:r[n].tw_name,type:r[n].type,list_banner:r[n].list_banner,year:r[n].year});e("setLoadedMovies",a)}))},loadedSeries:function(t){var e=t.commit;Et["database"]().ref("movies").orderByChild("type").equalTo("series").once("value").then((function(t){var a=[],r=t.val();for(var n in r)a.push({id:n,name:r[n].name,area:r[n].area,brief:r[n].brief,categories:r[n].categories,cast:r[n].cast,wallpaper:r[n].wallpaper,rates:r[n].rates,favorite:r[n].favorite,my_rate:r[n].my_rate,index_banner:r[n].index_banner,banner:r[n].banner,imdb_id:r[n].imdb_id,tw_name:r[n].tw_name,type:r[n].type,list_banner:r[n].list_banner,writers:r[n].writers,year:r[n].year});e("setLoadedSeries",a)}))},loadedFilm:function(t,e){var a=t.commit;Et["database"]().ref("movies").orderByChild("imdb_id").equalTo(e).once("value").then((function(t){var e=t.val(),r=e[Object.keys(e)[0]];a("setCurrentFilm",r)}))}},getters:{filterFavoriteMovies:function(t){var e=t.movies.filter((function(t){return!0===t.favorite}));return e},filterFavoriteSeries:function(t){var e=t.series.filter((function(t){return!0===t.favorite}));return e},filterIndexBanner:function(t){var e=t.series.filter((function(t){return!0===t.index_banner})),a=e.map((function(t){return t.banner}));return a},moviesBanner:function(t){var e=t.movies.filter((function(t){return void 0!==t.list_banner})),a=e.map((function(t){return t.list_banner}));return a},seriesBanner:function(t){var e=t.series.filter((function(t){return void 0!==t.list_banner})),a=e.map((function(t){return t.list_banner}));return a}}}),Tt=a("7212"),$t=a.n(Tt),Mt=(a("dfa4"),a("ecee")),Ft=a("ad3d"),It=a("b702"),Nt=a("c074"),Lt=a("f2d1");Mt["c"].add(Nt["k"],It["a"],Nt["l"],Nt["g"],Nt["b"],Nt["f"],Lt["c"],Nt["j"],Nt["i"],Nt["d"],Nt["a"],Lt["a"],Lt["e"],Lt["f"],Lt["b"],Lt["d"],Nt["h"],Nt["e"],Nt["c"]),r["a"].use($t.a),r["a"].component("font-awesome-icon",Ft["a"]),r["a"].config.productionTip=!1,new r["a"]({router:Bt,store:jt,render:function(t){return t(O)},created:function(){Object(Et["initializeApp"])({apiKey:"AIzaSyDitZDXRiRvRKcG8HoUzD9x7bX2t27FOME",authDomain:"movies-a4f0a.firebaseapp.com",databaseURL:"https://movies-a4f0a.firebaseio.com",projectId:"movies-a4f0a",storageBucket:"movies-a4f0a.appspot.com"}),this.$store.dispatch("loadedMovies"),this.$store.dispatch("loadedSeries")}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("e332"),n=a.n(r);n.a},"5c26":function(t,e,a){},"747d":function(t,e,a){},"74e2":function(t,e,a){"use strict";var r=a("44e3"),n=a.n(r);n.a},"7a98":function(t,e,a){},aea1:function(t,e,a){"use strict";var r=a("5c26"),n=a.n(r);n.a},bc7f:function(t,e,a){"use strict";var r=a("3b98"),n=a.n(r);n.a},e332:function(t,e,a){},ed11:function(t,e,a){},fd13:function(t,e,a){"use strict";var r=a("747d"),n=a.n(r);n.a}});
//# sourceMappingURL=app.d83575e4.js.map