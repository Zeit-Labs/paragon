(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[280],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},23646:function(e,t,n){var r=n(67228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},69100:function(e,t,n){var r=n(99489),o=n(57067);function a(t,n,i){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},59713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},57067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,n){var r=n(23646),o=n(46860),a=n(60379),i=n(98206);e.exports=function(e){return r(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},60379:function(e,t,n){var r=n(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},56842:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return f},default:function(){return v}});var r=n(63366),o=n(67294),a=n(64983),i=n(21379),u=n(25444),c=(n(27361),n(47499)),s=n(32837);var l=function(){return o.createElement("div",null,Object.keys(s).map((function(e){return o.createElement("div",{key:e,className:"d-flex mb-3 align-items-center"},o.createElement(c.Z,{className:"mr-3",key:e,src:s[e]}),o.createElement("h3",{className:"mb-0 mr-3 flex-grow-1 h5"},e),o.createElement("code",{className:"bg-light px-2 py-1 rounded"},o.createElement("small",null,"import { "+e+" } from '@edx/paragon/icons';")))})))},p=(n(58053),["components"]),f={},d={_frontmatter:f},m=i.Z;function v(e){var t=e.components,n=(0,r.Z)(e,p);return(0,a.mdx)(m,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"title: Icons"),(0,a.mdx)("h2",{id:"icons"},"Icons",(0,a.mdx)("a",{parentName:"h2","aria-hidden":"true",tabIndex:-1,href:"#icons"},(0,a.mdx)("span",{parentName:"a",className:"pgn-doc__anchor"},"#"))),(0,a.mdx)("p",null,"Displays an svg icon from ",(0,a.mdx)("inlineCode",{parentName:"p"},"@edx/paragon/icons"),". See the ",(0,a.mdx)(u.Link,{to:"/components/icon",mdxType:"Link"},"Icon Component")," for more information."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// Included in this live jsx scope:\n// import { Add, AddCircle } from '@edx/paragon/icons';\n<Icon src={Add} />\n")),(0,a.mdx)("p",null,"Many of the icons below are sourced from ",(0,a.mdx)("a",{href:"https://material.io/resources/icons/"},"Material Design Sharp Icons"),". They are designed to be sharp at 24px by 24px."),(0,a.mdx)("br",null),(0,a.mdx)(l,{mdxType:"IconsTable"}))}v.isMDXComponent=!0},21274:function(e,t,n){var r=n(41048);e.exports={MDXRenderer:r}},41048:function(e,t,n){var r=n(69100),o=n(319),a=n(59713),i=n(37316),u=["scope","children"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=n(67294),p=n(64983).mdx,f=n(93191).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=i(e,u),c=f(t),d=l.useMemo((function(){if(!n)return null;var e=s({React:l,mdx:p},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return l.createElement(d,s({},a))}},60955:function(e,t,n){"use strict";var r=n(67294),o=function(e){var t=e.h,n=e.children,o=e.id,a="h"+t;return r.createElement(a,{id:o,className:"pgn-doc__heading"},n)};o.defaultProps={},t.Z=o},58053:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(67294),o=n(21274),a=n(41902),i=function(e){return e.isRequired?r.createElement(r.Fragment,null," ",r.createElement(a.Z,{variant:"light"},"Required")):null};i.defaultProps={isRequired:!1};var u=function(e){var t=e.name,n=e.isRequired;return r.createElement("span",null,r.createElement("code",null,t),r.createElement(i,{isRequired:n}))};u.defaultProps={isRequired:!1};var c=function(e){var t=e.name,n=e.value,o=e.isRequired;return r.createElement("span",null,r.createElement("code",null,t),r.createElement(i,{isRequired:o}),r.createElement("span",{className:"text-monospace small ml-2"},n.map?n.map((function(e){return e.value})).join(" | "):JSON.stringify(n)))};c.defaultProps={isRequired:!1};var s=function(e){var t=e.value,n=e.isRequired;return r.createElement("span",null,t.map((function(e){return r.createElement(x,Object.assign({key:e.name},e))})).reduce((function(e,t){return[e," | ",t]})),r.createElement(i,{isRequired:n}))};s.defaultProps={isRequired:!1};var l=function(e){var t=e.value,n=e.isRequired;return r.createElement("span",null,r.createElement("code",null,t),r.createElement(i,{isRequired:n}))};l.defaultProps={isRequired:!1};var p=function(e){var t=e.value,n=e.isRequired;return r.createElement("span",null,r.createElement(x,t),r.createElement("code",null,"[]"),r.createElement(i,{isRequired:n}))};p.defaultProps={isRequired:!1};var f=function(e){var t=e.value,n=e.isRequired;return r.createElement("span",null,r.createElement("code",null,"Object.","<",r.createElement(x,t),">"),r.createElement(i,{isRequired:n}))};f.defaultProps={isRequired:!1};var d=function(e){var t=e.name,n=e.value,o=e.isRequired;return r.createElement("span",{className:"small"},r.createElement("code",null,t),r.createElement(i,{isRequired:o})," {",Object.entries(n).map((function(e){var t=e[0],n=e[1];return r.createElement("div",{className:"text-monospace pl-3",key:t},t,": ",r.createElement(x,n),",")})),"}")};d.defaultProps={isRequired:!1};var m=function(e){var t=e.name,n=e.value,o=e.isRequired;return r.createElement("span",{className:"small"},r.createElement("code",null,t),r.createElement(i,{isRequired:o})," {",Object.entries(n).map((function(e){var t=e[0],n=e[1];return r.createElement("div",{className:"text-monospace pl-3"},t,": ",r.createElement(x,n),",")})),"}")};m.defaultProps={isRequired:!1};var v=function(e){var t=e.raw,n=e.isRequired;return r.createElement("span",null,r.createElement("code",null,t),r.createElement(i,{isRequired:n}))};v.defaultProps={isRequired:!1,raw:""};var h={array:u,bool:u,func:u,number:u,object:u,string:u,any:u,element:u,node:u,symbol:u,elementType:u,enum:c,union:s,instanceOf:l,arrayOf:p,objectOf:f,shape:d,exact:m,custom:v},x=function(e){var t=e.name,n=e.value,o=e.required,a=e.raw,i=h[t];return i?r.createElement(i,{value:n,name:t,isRequired:o,raw:a}):"unknown type"},y=x,_=n(76532),b=["intl"],g=function(e){var t=e.value;return t&&"undefined"!==t?r.createElement(r.Fragment,null,r.createElement(a.Z,{variant:"light"},"Default"),r.createElement("span",{className:"small text-monospace ml-2"},t)):null};g.defaultProps={value:void 0};var E=function(e){var t=e.name,n=e.type,i=e.required,u=e.defaultValue,c=e.description;return r.createElement("li",{className:"px-4 border-top border-light-300"},r.createElement("div",{className:"my-3"},r.createElement("div",{className:"mb-2"},r.createElement("span",{className:"mr-2 font-weight-bold"},t+" "),r.createElement(y,n),i&&r.createElement(r.Fragment,null," ",r.createElement(a.Z,{variant:"light"},"Required"))),r.createElement("div",{className:"x-small"},c?r.createElement(o.MDXRenderer,null,c.childMdx.body):null),r.createElement(g,u)))};E.defaultProps={required:!1,defaultValue:{},description:void 0};var j=function(e){var t=e.props,n=e.displayName,o=e.content;return r.createElement(_.ZP,{className:"mb-5",id:"props-api-table-"+n},r.createElement(_.ZP.Header,{as:"h3",title:n+" Props API",className:"pb-1"}),o&&r.createElement("div",{className:"small mb-3"},o),t.length>0?r.createElement("ul",{className:"list-unstyled"},t.filter((function(e){return!b.includes(e.name)})).map((function(e){return r.createElement(E,Object.assign({key:e.name},e))}))):r.createElement("div",{className:"pb-3 pl-4"},"This component does not receive any props."))};j.defaultProps={props:[],content:void 0,displayName:void 0};var O=j},21379:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(67294),o=n(64983),a=n(25444),i=n(82298),u=n(51030),c=n(79032),s=n(14959),l=n(60955),p={h1:function(e){return r.createElement(l.Z,Object.assign({h:"1"},e))},h2:function(e){return r.createElement(l.Z,Object.assign({h:"2"},e))},h3:function(e){return r.createElement(l.Z,Object.assign({h:"3"},e))},h4:function(e){return r.createElement(l.Z,Object.assign({h:"4"},e))},h5:function(e){return r.createElement(l.Z,Object.assign({h:"5"},e))},h6:function(e){return r.createElement(l.Z,Object.assign({h:"6"},e))},pre:function(e){return r.createElement("div",e)},code:u.Z,Link:a.Link};function f(e){var t,n=e.children,a=e.pageContext;return r.createElement(c.Z,null,r.createElement(s.Z,{title:null==a||null===(t=a.frontmatter)||void 0===t?void 0:t.title}),r.createElement(i.Z,{size:"md",className:"py-5"},r.createElement(o.MDXProvider,{components:p},n)))}},1989:function(e,t,n){var r=n(51789),o=n(80401),a=n(57667),i=n(21327),u=n(81866);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,e.exports=c},38407:function(e,t,n){var r=n(27040),o=n(14125),a=n(82117),i=n(67518),u=n(13399);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,e.exports=c},57071:function(e,t,n){var r=n(10852)(n(55639),"Map");e.exports=r},83369:function(e,t,n){var r=n(24785),o=n(11285),a=n(96e3),i=n(49916),u=n(95265);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,e.exports=c},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},29932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},18470:function(e,t,n){var r=n(77813);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},97786:function(e,t,n){var r=n(71811),o=n(40327);e.exports=function(e,t){for(var n=0,a=(t=r(t,e)).length;null!=e&&n<a;)e=e[o(t[n++])];return n&&n==a?e:void 0}},44239:function(e,t,n){var r=n(62705),o=n(89607),a=n(2333),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},28458:function(e,t,n){var r=n(23560),o=n(15346),a=n(13218),i=n(80346),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,l=c.toString,p=s.hasOwnProperty,f=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?f:u).test(i(e))}},80531:function(e,t,n){var r=n(62705),o=n(29932),a=n(1469),i=n(33448),u=r?r.prototype:void 0,c=u?u.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(i(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},71811:function(e,t,n){var r=n(1469),o=n(15403),a=n(55514),i=n(79833);e.exports=function(e,t){return r(e)?e:o(e,t)?[e]:a(i(e))}},14429:function(e,t,n){var r=n(55639)["__core-js_shared__"];e.exports=r},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},45050:function(e,t,n){var r=n(37019);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},10852:function(e,t,n){var r=n(28458),o=n(47801);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},89607:function(e,t,n){var r=n(62705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(c){}var o=i.call(e);return r&&(t?e[u]=n:delete e[u]),o}},47801:function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},51789:function(e,t,n){var r=n(94536);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},80401:function(e){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},57667:function(e,t,n){var r=n(94536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(t,e)?t[e]:void 0}},21327:function(e,t,n){var r=n(94536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},81866:function(e,t,n){var r=n(94536);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},15403:function(e,t,n){var r=n(1469),o=n(33448),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(i.test(e)||!a.test(e)||null!=t&&e in Object(t))}},37019:function(e){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},15346:function(e,t,n){var r,o=n(14429),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},27040:function(e){e.exports=function(){this.__data__=[],this.size=0}},14125:function(e,t,n){var r=n(18470),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0)&&(n==t.length-1?t.pop():o.call(t,n,1),--this.size,!0)}},82117:function(e,t,n){var r=n(18470);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},67518:function(e,t,n){var r=n(18470);e.exports=function(e){return r(this.__data__,e)>-1}},13399:function(e,t,n){var r=n(18470);e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},24785:function(e,t,n){var r=n(1989),o=n(38407),a=n(57071);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},11285:function(e,t,n){var r=n(45050);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},96e3:function(e,t,n){var r=n(45050);e.exports=function(e){return r(this,e).get(e)}},49916:function(e,t,n){var r=n(45050);e.exports=function(e){return r(this,e).has(e)}},95265:function(e,t,n){var r=n(45050);e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},24523:function(e,t,n){var r=n(88306);e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},94536:function(e,t,n){var r=n(10852)(Object,"create");e.exports=r},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},55514:function(e,t,n){var r=n(24523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,n,r,o){t.push(r?o.replace(a,"$1"):n||e)})),t}));e.exports=i},40327:function(e,t,n){var r=n(33448);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},80346:function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(n){}try{return e+""}catch(n){}}return""}},77813:function(e){e.exports=function(e,t){return e===t||e!=e&&t!=t}},27361:function(e,t,n){var r=n(97786);e.exports=function(e,t,n){var o=null==e?void 0:r(e,t);return void 0===o?n:o}},1469:function(e){var t=Array.isArray;e.exports=t},23560:function(e,t,n){var r=n(44239),o=n(13218);e.exports=function(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},88306:function(e,t,n){var r=n(83369);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},79833:function(e,t,n){var r=n(80531);e.exports=function(e){return null==e?"":r(e)}}}]);
//# sourceMappingURL=component---src-pages-foundations-icons-mdx-cfb082b04cff7d5ba2e1.js.map