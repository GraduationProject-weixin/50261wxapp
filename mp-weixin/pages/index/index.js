(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"074a":function(t,n,e){"use strict";e.r(n);var i=e("bf0d"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},"0c97":function(t,n,e){"use strict";e.r(n);var i=e("8aee"),r=e("074a");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("87f3");var o,u=e("f0c5"),l=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);n["default"]=l.exports},"87f3":function(t,n,e){"use strict";var i=e("caab"),r=e.n(i);r.a},"8aee":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.ziliaoList1,(function(n,e){var i=t.__get_orig(n),r=n.ziliaoPhoto?n.ziliaoPhoto.split(","):null;return{$orig:i,g0:r}}))),i=t.__map(t.ziliaoList,(function(n,e){var i=t.__get_orig(n),r=n.ziliaoPhoto?n.ziliaoPhoto.split(","):null;return{$orig:i,g1:r}}));t.$mp.data=Object.assign({},{$root:{l0:e,l1:i}})},a=[]},bf0d:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,n){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=o(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return u=t.done,t},e:function(t){l=!0,a=t},f:function(){try{u||null==e.return||e.return()}finally{if(l)throw a}}}}function o(t,n){if(t){if("string"===typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function l(t,n,e,i,r,a,o){try{var u=t[a](o),l=u.value}catch(c){return void e(c)}u.done?n(l):Promise.resolve(l).then(i,r)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(i,r){var a=t.apply(n,e);function o(t){l(a,i,r,o,u,"next",t)}function u(t){l(a,i,r,o,u,"throw",t)}o(void 0)}))}}e("c5e9");var s=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("8a4b"))}.bind(null,e)).catch(e.oe)},f={components:{uniIcons:s},data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,swiperList:[],newsList:[],ziliaoList:[],ziliaoList1:[]}},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var t=this;return c(i.default.mark((function n(){var e,r,o,u,l,c,s,f;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e=[],n.next=3,t.$api.page("config",{page:1,limit:5});case 3:r=n.sent,o=a(r.data.list);try{for(o.s();!(u=o.n()).done;)l=u.value,l.value&&""!=l.value&&null!=l.value&&e.push({img:l.value})}catch(i){o.e(i)}finally{o.f()}return e&&(t.swiperList=e),n.next=9,t.$api.list("news",{page:1,limit:6});case 9:return c=n.sent,t.newsList=c.data.list,n.next=13,t.$api.list("ziliao",{page:1,limit:6,ziliaoYesnoTypes:2});case 13:return s=n.sent,t.ziliaoList=s.data.list,n.next=17,t.$api.list("ziliao",{page:1,limit:6,ziliaoYesnoTypes:2,orderBy:"ziliao_click_number"});case 17:f=n.sent,t.ziliaoList1=f.data.list;case 19:case"end":return n.stop()}}),n)})))()},methods:{onSwiperTap:function(t){},onNewsDetailTap:function(t){this.$utils.jump("../news/detail?id=".concat(t))},onDetailTap:function(t,n){this.$utils.jump("../".concat(t,"/detail?id=").concat(n))},onPageTap:function(n){t.navigateTo({url:"../".concat(n,"/list"),fail:function(){t.switchTab({url:"../".concat(n,"/list")})}})}}};n.default=f}).call(this,e("543d")["default"])},caab:function(t,n,e){},e0d4:function(t,n,e){"use strict";(function(t){e("48e8");i(e("66fd"));var n=i(e("0c97"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])}},[["e0d4","common/runtime","common/vendor"]]]);