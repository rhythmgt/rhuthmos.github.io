(function(t){function e(e){for(var n,i,l=e[0],o=e[1],c=e[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0025":function(t,e,a){},"08d5":function(t,e,a){},"1dcd":function(t,e,a){t.exports=a.p+"img/rhythm.6a08ecdc.jpg"},"30db":function(t,e,a){"use strict";var n=a("0025"),s=a.n(n);s.a},4459:function(t,e,a){},"4c1c":function(t,e,a){t.exports=a.p+"img/sardar.c89a1ef6.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"material-kit"}},[a("div",{class:{"nav-open":t.NavbarStore.showNavbar}},[a("router-view",{attrs:{name:"header"}}),a("div",[a("router-view")],1)],1)])},r=[],i=a("2877"),l={},o=Object(i["a"])(l,s,r,!1,null,null,null),c=o.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("parallax",{staticClass:"section page-header header-filter",style:t.headerStyle},[a("div",{staticClass:"container"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"},[a("h1",{staticClass:"title"},[t._v("Projects")]),a("h4",[t._v(" Coming Soon... ")])])])])]),t._m(0)],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main main-raised"},[a("div",{staticClass:"section section-contacts"},[a("div",{staticClass:"container"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-66 md-xsmall-size-100 mx-auto"})])])])])}],f={bodyClass:"landing-page",props:{header:{type:String,default:a("d4b8")}},data:function(){return{name:null,email:null,message:null}},computed:{headerStyle:function(){return{backgroundImage:"url(".concat(this.header,")")}}}},m=f,h=(a("73c6"),Object(i["a"])(m,d,p,!1,null,"79ba12f3",null)),v=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("parallax",{staticClass:"section page-header header-filter",style:t.headerStyle}),a("div",{staticClass:"main main-raised"},[a("div",{staticClass:"section profile-content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-50 mx-auto"},[a("div",{staticClass:"profile"},[a("div",{staticClass:"avatar"},[a("img",{staticClass:"img-raised rounded-circle img-fluid",attrs:{src:t.img,alt:"Circle Image"}})]),t._m(0)])])]),t._m(1)])])])],1)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"name"},[a("h3",{staticClass:"title"},[t._v("Rhythm Gupta")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"description text-center"},[a("p",[t._v(" I am a Computer Science undergraduate student at Indraprastha Institute of Information Technology, Delhi. ")])])}],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDown,expression:"closeDropDown"}],class:[{open:t.isOpen},{dropdown:"down"===t.direction},{dropup:"up"===t.direction}],on:{click:t.toggleDropDown}},[t._t("title",[a("a",{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown",href:"javascript:void(0)"}},[a("i",{class:t.icon}),a("p",[t._v(t._s(t.title))])])]),t._t("default")],2)},C=[],_={name:"drop-down",props:{direction:{type:String,default:"down"},multiLevel:{type:Boolean,default:!1},title:String,icon:String},data:function(){return{isOpen:!1}},methods:{toggleDropDown:function(){this.multiLevel?this.isOpen=!0:this.isOpen=!this.isOpen},closeDropDown:function(){this.isOpen=!1}}},w=_,x=Object(i["a"])(w,y,C,!1,null,null,null),P=x.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.styles},[t._t("default")],2)},S=[];function j(t,e,a){var n;return function(){var s=this,r=arguments;clearTimeout(n),n=setTimeout((function(){n=null,a||t.apply(s,r)}),e),a&&!n&&t.apply(s,r)}}var N={name:"parallax",data:function(){return{styles:{},debounceTimeout:6}},methods:{handleScroll:function(t){var e=t/3;this.styles={transform:"translate3d(0, ".concat(e,"px,0)")}},checkForParallax:function(t){var e=this,a=j((function(){return e.handleScroll(t)}),this.debounceTimeout);a()}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){if(window.innerWidth>991){var e=this.scrollY;t.checkForParallax(e)}}))}},k=N,$=Object(i["a"])(k,O,S,!1,null,null,null),E=$.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"pagination",class:t.paginationClass},[a("li",{staticClass:"page-item prev-page",class:{disabled:1===t.value,"no-arrows":t.noArrows}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:t.prevPage}},[t.withText?[t._v("Prev")]:a("i",{staticClass:"fas fa-angle-double-left"})],2)]),t._l(t.range(t.minPage,t.maxPage),(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.value===e}},[a("a",{staticClass:"page-link",on:{click:function(a){return t.changePage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item page-pre next-page",class:{disabled:t.value===t.totalPages,"no-arrows":t.noArrows}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:t.nextPage}},[t.withText?[t._v("Next")]:a("i",{staticClass:"fas fa-angle-double-right"})],2)])],2)},D=[],B=(a("caad"),a("a9e3"),{name:"pagination",props:{type:{type:String,default:"primary",validator:function(t){return["default","primary","danger","success","warning","info","rose"].includes(t)}},withText:Boolean,noArrows:Boolean,pageCount:{type:Number,default:0},perPage:{type:Number,default:10},total:{type:Number,default:0},value:{type:Number,default:1}},computed:{paginationClass:function(){return"pagination-".concat(this.type)},totalPages:function(){return this.pageCount>0?this.pageCount:this.total>0?Math.ceil(this.total/this.perPage):1},pagesToDisplay:function(){return this.totalPages>0&&this.totalPages<this.defaultPagesToDisplay?this.totalPages:this.defaultPagesToDisplay},minPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e>this.totalPages?this.totalPages-this.pagesToDisplay+1:this.value-t}return 1},maxPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e<this.totalPages?e:this.totalPages}return this.pagesToDisplay}},data:function(){return{defaultPagesToDisplay:5}},methods:{range:function(t,e){for(var a=[],n=t;n<=e;n++)a.push(n);return a},changePage:function(t){this.$emit("input",t)},nextPage:function(){this.value<this.totalPages&&this.$emit("input",this.value+1)},prevPage:function(){this.value>1&&this.$emit("input",this.value-1)}},watch:{perPage:function(){this.$emit("input",1)},total:function(){this.$emit("input",1)}}}),M=B,A=Object(i["a"])(M,T,D,!1,null,null,null),I=(A.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider",class:["slider-"+t.type],attrs:{disabled:t.disabled}})}),L=[],z=(a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),H=a("e9fa"),F=a.n(H);function J(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function U(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?J(Object(a),!0).forEach((function(e){Object(z["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var V,q={name:"slider",props:{value:[String,Array,Number],disabled:Boolean,start:{type:[Number,Array],default:0},connect:{type:[Boolean,Array],default:function(){return[!0,!1]}},range:{type:Object,default:function(){return{min:0,max:100}}},type:{type:String,default:""},options:{type:Object,default:function(){return{}}}},data:function(){return{slider:null}},methods:{createSlider:function(){var t=this;F.a.create(this.$el,U({start:this.value||this.start,connect:this.connect,range:this.range},this.options));var e=this.$el.noUiSlider;e.on("slide",(function(){var a=e.get();a!==t.value&&t.$emit("input",a)}))}},mounted:function(){this.createSlider()},watch:{value:function(t,e){var a=this.$el.noUiSlider,n=a.get();t!==e&&n!==t&&(Array.isArray(n)&&Array.isArray(t)?e.length===t.length&&e.every((function(e,a){return e===t[a]}))&&a.set(t):a.set(t))}}},G=q,R=Object(i["a"])(G,I,L,!1,null,null,null),W=(R.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",staticClass:"badge",class:"badge-"+t.type},[t._t("default")],2)}),Y=[],K=(a("c975"),{name:"badge",props:{tag:{type:String,default:"span"},type:{type:String,default:"default",validator:function(t){var e=["primary","info","success","warning","danger","rose","default"];return-1!==e.indexOf(t)}}}}),Q=K,X=Object(i["a"])(Q,W,Y,!1,null,null,null),Z=(X.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"md-card-nav-tabs",class:{"no-label":t.noLabel,"md-card-plain":t.tabsPlain}},[a("md-card-content",[t._t("content")],2)],1)}),tt=[],et={name:"nav-tabs-card",props:{noLabel:Boolean,tabsPlain:Boolean}},at=et,nt=Object(i["a"])(at,Z,tt,!1,null,null,null),st=(nt.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"md-card-login",class:{"md-card-hidden":t.cardHidden}},[a("md-card-header",{class:t.getClass(t.headerColor)},[t._t("title"),a("div",{staticClass:"social-line"},[t._t("buttons")],2)],2),a("md-card-content",[t._t("description"),t._t("inputs")],2),a("md-card-actions",[t._t("footer")],2)],1)}),rt=[],it={name:"login-card",props:{headerColor:{type:String,default:""}},data:function(){return{cardHidden:!0}},beforeMount:function(){setTimeout(this.showCard,400)},methods:{showCard:function(){this.cardHidden=!1},getClass:function(t){return"md-card-header-"+t}}},lt=it,ot=Object(i["a"])(lt,st,rt,!1,null,null,null),ct=(ot.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"md-card-tabs",class:[{"flex-column":t.flexColumn},{"nav-pills-icons":t.navPillsIcons},{"md-card-plain":t.plain}]},[a("md-card-header",{attrs:{slot:"header-title"},slot:"header-title"}),a("md-card-content",[a("md-list",{staticClass:"nav-tabs"},t._l(t.tabName,(function(e,n){var s;return a("md-list-item",{key:e,class:[{active:t.isActivePanel(t.tabName[n])},(s={},s[t.getColorButton(t.colorButton)]=t.isActivePanel(t.tabName[n]),s)],on:{click:function(e){return t.switchPanel(t.tabName[n])}}},[t._v(" "+t._s(t.tabName[n])+" "),t.navPillsIcons?a("md-icon",[t._v(t._s(t.tabIcon[n]))]):t._e()],1)})),1),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{staticClass:"tab-content"},t._l(t.tabName,(function(e,n){return t.isActivePanel(t.tabName[n])?a("div",{key:e,class:t.getTabContent(n+1)},[t._t(t.getTabContent(n+1),[t._v(" This is the default text! ")])],2):t._e()})),0)])],1)],1)}),ut=[],dt={props:{flexColumn:Boolean,navPillsIcons:Boolean,plain:Boolean,tabName:Array,tabIcon:Array,colorButton:{type:String,default:""}},data:function(){return{activePanel:this.tabName[0]}},methods:{switchPanel:function(t){this.activePanel=t},isActivePanel:function(t){return this.activePanel==t},getColorButton:function(t){return"md-"+t},getTabContent:function(t){return"tab-pane-"+t}}},pt=dt,ft=Object(i["a"])(pt,ct,ut,!1,null,null,null),mt=(ft.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeModal,expression:"closeModal"}],staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[t._t("header")],2),a("div",{staticClass:"modal-body text-center"},[t._t("body")],2),a("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])])}),ht=[],vt={name:"modal",methods:{closeModal:function(){this.$emit("close")}}},gt=vt,bt=(a("30db"),Object(i["a"])(gt,mt,ht,!1,null,null,null)),yt=(bt.exports,{components:{},bodyClass:"profile-page",data:function(){return{}},props:{header:{type:String,default:a("4c1c")},img:{type:String,default:a("1dcd")}},computed:{headerStyle:function(){return{backgroundImage:"url(".concat(this.header,")")}}}}),Ct=yt,_t=(a("a9e5"),Object(i["a"])(Ct,g,b,!1,null,"2bddef6e",null)),wt=_t.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-toolbar",{staticClass:"md-transparent md-absolute",class:t.extraNavClasses,attrs:{id:"toolbar","md-elevation":"0","color-on-scroll":t.colorOnScroll}},[a("div",{staticClass:"md-toolbar-row md-collapse-lateral"},[a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{staticClass:"md-just-icon md-simple md-toolbar-toggle",class:{toggled:t.toggledClass},on:{click:function(e){return t.toggleNavbarMobile()}}},[a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})]),a("div",{staticClass:"md-collapse"},[a("div",{staticClass:"md-collapse-wrapper"},[a("mobile-menu",{attrs:{"nav-mobile-section-start":"false"}}),a("md-list",[a("md-list-item",{attrs:{href:"#/profile",target:"_self"}},[a("p",[t._v("Home")])]),a("md-list-item",{attrs:{href:"#/landing",target:"_self"}},[a("p",[t._v("Projects")])])],1)],1)])],1)])])},Pt=[],Ot=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return"true"===t.navMobileSectionStart?a("md-list",{staticClass:"nav-mobile-menu nav-mobile-section-start"},[t._t("default")],2):t._e()}),St=[],jt={name:"mobile-menu",props:{navMobileSectionStart:{type:String,default:"false"}}},Nt=jt,kt=Object(i["a"])(Nt,Ot,St,!1,null,null,null),$t=kt.exports;function Et(t){V||(V=setTimeout((function(){V=null,t()}),66))}var Tt={components:{MobileMenu:$t},props:{type:{type:String,default:"white",validator:function(t){return["white","default","primary","danger","success","warning","info"].includes(t)}},colorOnScroll:{type:Number,default:0}},data:function(){return{extraNavClasses:"",toggledClass:!1}},computed:{showDownload:function(){var t=this,e=["login","landing","profile"];return e.every((function(e){return e!==t.$route.name}))}},methods:{bodyClick:function(){var t=document.getElementById("bodyClick");if(null===t){var e=document.querySelector("body"),a=document.createElement("div");a.setAttribute("id","bodyClick"),e.appendChild(a);var n=document.getElementById("bodyClick");n.addEventListener("click",this.toggleNavbarMobile)}else t.remove()},toggleNavbarMobile:function(){this.NavbarStore.showNavbar=!this.NavbarStore.showNavbar,this.toggledClass=!this.toggledClass,this.bodyClick()},handleScroll:function(){var t=document.body.scrollTop||document.documentElement.scrollTop,e=document.getElementById("toolbar");this.currentScrollValue=t,this.colorOnScroll>0&&t>this.colorOnScroll?(this.extraNavClasses="md-".concat(this.type),e.classList.remove("md-transparent")):this.extraNavClasses&&(this.extraNavClasses="",e.classList.add("md-transparent"))},scrollListener:function(){Et(this.handleScroll)},scrollToElement:function(){var t=document.getElementById("downloadSection");t&&t.scrollIntoView({block:"end",behavior:"smooth"})}},mounted:function(){document.addEventListener("scroll",this.scrollListener)},beforeDestroy:function(){document.removeEventListener("scroll",this.scrollListener)}},Dt=Tt,Bt=Object(i["a"])(Dt,xt,Pt,!1,null,null,null),Mt=Bt.exports;n["default"].use(u["a"]);var At=new u["a"]({routes:[{path:"/",name:"index",components:{default:wt,header:Mt},props:{header:{colorOnScroll:400}}},{path:"/landing",name:"landing",components:{default:v,header:Mt},props:{header:{colorOnScroll:400}}},{path:"/profile",name:"profile",components:{default:wt,header:Mt},props:{header:{colorOnScroll:400}}}],scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}}}),It=a("43f9"),Lt=a.n(It),zt=(a("51de"),a("60b6"),a("4459"),a("c7db")),Ht={install:function(t){t.directive("click-outside",zt["directive"])}},Ft=Ht,Jt={install:function(t){t.mixin({mounted:function(){var t=this.$options.bodyClass;t&&document.body.classList.add(t)},beforeDestroy:function(){var t=this.$options.bodyClass;t&&document.body.classList.remove(t)}})}},Ut=Jt,Vt=a("e37d"),qt={install:function(t){t.component("drop-down",P),t.component(E.name,E),t.component("v-popover",Vt["a"])}},Gt=qt,Rt=a("caf9"),Wt=a("0a63"),Yt=a.n(Wt),Kt={install:function(t){t.use(Lt.a),t.use(Ft),t.use(Ut),t.use(Gt),t.use(Yt.a),t.use(Rt["a"],{observer:!0,observerOptions:{rootMargin:"0px",threshold:.1}})}};n["default"].config.productionTip=!1,n["default"].use(Kt);var Qt={showNavbar:!1};n["default"].mixin({data:function(){return{NavbarStore:Qt}}}),new n["default"]({router:At,render:function(t){return t(c)}}).$mount("#app")},"60b6":function(t,e,a){},"73c6":function(t,e,a){"use strict";var n=a("e1b7"),s=a.n(n);s.a},a9e5:function(t,e,a){"use strict";var n=a("08d5"),s=a.n(n);s.a},d4b8:function(t,e,a){t.exports=a.p+"img/bg7.2be2ff95.jpg"},e1b7:function(t,e,a){}});
//# sourceMappingURL=app.ccf92c52.js.map