(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[966],{92102:function(e,t,r){const n=r(92632);e.exports={MDXRenderer:n}},92632:function(e,t,r){var n=r(3515),a=r(861),l=r(38416),s=r(70215);const o=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const i=r(67294),{mdx:m}=r(3905),{useMDXScope:p}=r(76948);e.exports=function(e){let{scope:t,children:r}=e,l=s(e,o);const c=p(t),d=i.useMemo((()=>{if(!r)return null;const e=u({React:i,mdx:m},c),t=Object.keys(e),l=t.map((t=>e[t]));return n(Function,["_fn"].concat(a(t),[`${r}`])).apply(void 0,[{}].concat(a(l)))}),[r,t]);return i.createElement(d,u({},l))}},45094:function(e,t,r){"use strict";var n=r(67294);t.Z=e=>{let{h:t,children:r,id:a}=e;const l=`h${t}`;return n.createElement(l,{id:a,className:"pgn-doc__heading"},r)}},62690:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var n=r(67294),a=r(92102),l=r(92210);const s=e=>{let{isRequired:t}=e;return t?n.createElement(n.Fragment,null," ",n.createElement(l.Z,{variant:"light"},"Required")):null};s.defaultProps={isRequired:!1};const o=e=>{let{name:t,value:r,required:a,raw:l}=e;const s=v[t];return s?n.createElement(s,{value:r,name:t,isRequired:a,raw:l}):n.createElement(n.Fragment,null,"unknown type")};o.defaultProps={name:"any",value:null,raw:"",required:!0};const c=e=>{let{name:t,isRequired:r}=e;return n.createElement("span",null,n.createElement("code",null,t),n.createElement(s,{isRequired:r}))};c.defaultProps={isRequired:!1};const u=e=>{let{name:t,value:r,isRequired:a}=e;return n.createElement("span",null,n.createElement("code",null,t),n.createElement(s,{isRequired:a}),n.createElement("span",{className:"text-monospace small ml-2"},r.map?r.map((e=>{let{value:t}=e;return t})).join(" | "):JSON.stringify(r)))};u.defaultProps={isRequired:!1};const i=e=>{let{value:t,isRequired:r}=e;return n.createElement("span",null,t.map((e=>n.createElement(o,Object.assign({key:e.name},e)))).reduce(((e,t)=>[e," | ",t])),n.createElement(s,{isRequired:r}))};i.defaultProps={isRequired:!1};const m=e=>{let{value:t,isRequired:r}=e;return n.createElement("span",null,n.createElement("code",null,t),n.createElement(s,{isRequired:r}))};m.defaultProps={isRequired:!1};const p=e=>{let{value:t,isRequired:r}=e;return n.createElement("span",null,n.createElement(o,t),n.createElement("code",null,"[]"),n.createElement(s,{isRequired:r}))};p.defaultProps={isRequired:!1};const d=e=>{let{value:t,isRequired:r}=e;return n.createElement("span",null,n.createElement("code",null,"Object.","<",n.createElement(o,t),">"),n.createElement(s,{isRequired:r}))};d.defaultProps={isRequired:!1};const f=e=>{let{name:t,value:r,isRequired:a}=e;return n.createElement("span",{className:"small"},n.createElement("code",null,t),n.createElement(s,{isRequired:a})," {",Object.entries(r).map((e=>{let[t,r]=e;return n.createElement("div",{className:"text-monospace pl-3",key:t},t,": ",n.createElement(o,r),",")})),"}")};f.defaultProps={isRequired:!1};const E=e=>{let{name:t,value:r,isRequired:a}=e;return n.createElement("span",{className:"small"},n.createElement("code",null,t),n.createElement(s,{isRequired:a})," {",Object.entries(r).map((e=>{let[t,r]=e;return n.createElement("div",{className:"text-monospace pl-3"},t,": ",n.createElement(o,r),",")})),"}")};E.defaultProps={isRequired:!1};const b=e=>{let{raw:t,isRequired:r}=e;return n.createElement("span",null,n.createElement("code",null,t),n.createElement(s,{isRequired:r}))};b.defaultProps={isRequired:!1,raw:""};const v={array:c,bool:c,func:c,number:c,object:c,string:c,any:c,element:c,node:c,symbol:c,elementType:c,enum:u,union:i,instanceOf:m,arrayOf:p,objectOf:d,shape:f,exact:E,custom:b};var y=o,x=r(90379);const g=["intl"],h=e=>{let{value:t}=e;return t&&"undefined"!==t?n.createElement(n.Fragment,null,n.createElement(l.Z,{variant:"light"},"Default"),n.createElement("span",{className:"small text-monospace ml-2"},t)):null};h.defaultProps={value:void 0};const O=e=>{let{name:t,type:r,required:s,defaultValue:o,description:c}=e;return n.createElement("li",{className:"px-4 border-top border-light-300"},n.createElement("div",{className:"my-3"},n.createElement("div",{className:"mb-2"},n.createElement("span",{className:"mr-2 font-weight-bold"},`${t} `),n.createElement(y,r),s&&n.createElement(n.Fragment,null," ",n.createElement(l.Z,{variant:"light"},"Required"))),n.createElement("div",{className:"x-small"},c?n.createElement(a.MDXRenderer,null,c.childMdx.body):null),n.createElement(h,o)))};O.defaultProps={required:!1,defaultValue:{},description:void 0};const R=e=>{let{props:t,displayName:r,content:a}=e;return n.createElement(x.ZP,{className:"mb-5",id:`props-api-table-${r}`},n.createElement(x.ZP.Header,{as:"h3",title:`${r} Props API`,className:"pb-1"}),a&&n.createElement("p",{className:"px-4 small"},a),t.length>0?n.createElement("ul",{className:"list-unstyled"},t.filter((e=>!g.includes(e.name))).map((e=>n.createElement(O,Object.assign({key:e.name},e))))):n.createElement("div",{className:"pb-3 pl-4"},"This component does not receive any props."))};R.defaultProps={props:[],content:void 0,displayName:void 0};var _=R},70777:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(45987),a=r(67294),l=r(1597),s=r(3905),o=r(92102),c=r(71134),u=r(63541),i=r(50770),m=r(14250),p=r(60888),d=r(57613),f=r(91271),E=r(62690),b=r(17071),v=r(93400),y=r(45094);const x=["displayName"];function g(e){var t,r,g;let{data:{mdx:h,components:O},pageContext:{scssVariablesData:R}}=e;const _=(0,c.useMediaQuery)({maxWidth:u.Z.large.maxWidth}),{0:q,1:j}=(0,a.useState)(!1),{settings:N}=(0,a.useContext)(p.SettingsContext),{theme:P}=N,w=R[P]||R[d.DEFAULT_THEME],M=O.nodes.reduce(((e,t)=>(e[t.displayName]=t,e)),{}),Z=a.useMemo((()=>({h2:e=>a.createElement(y.Z,Object.assign({h:"2"},e)),h3:e=>a.createElement(y.Z,Object.assign({h:"3"},e)),h4:e=>a.createElement(y.Z,Object.assign({h:"4"},e)),h5:e=>a.createElement(y.Z,Object.assign({h:"5"},e)),h6:e=>a.createElement(y.Z,Object.assign({h:"6"},e)),pre:e=>a.createElement("div",e),code:f.Z,Link:l.Link,PropsTable:e=>{let{displayName:t}=e,r=(0,n.Z)(e,x);return M[t]?a.createElement(E.Z,Object.assign({},M[t],r)):null}})),[M]),S="Theme Variables (SCSS)",k="theme-variables-scss",D=(null===(t=h.frontmatter)||void 0===t?void 0:t.components)||[],C=(null===(r=h.frontmatter)||void 0===r||null===(g=r.status)||void 0===g?void 0:g.toLowerCase().includes("deprecate"))||!1;return(0,a.useEffect)((()=>j(!!_)),[_]),a.createElement(b.Z,{showMinimizedTitle:q,isMdx:!0,tocData:(()=>{var e;const t=JSON.parse(JSON.stringify(h.tableOfContents));var r;!Object.values(R).some((e=>e))||null!==(e=t.items)&&void 0!==e&&e.includes()||(null===(r=t.items)||void 0===r||r.push({title:S,url:`#${k}`}));return t})()},a.createElement(v.Z,{title:h.frontmatter.title}),a.createElement(i.Z,{size:"md",className:"py-5"},C&&a.createElement(m.Z,{variant:"warning"},a.createElement(m.Z.Heading,null,"This component will be removed soon."),a.createElement("p",{className:"small mb-0"},h.frontmatter.notes)),a.createElement("h1",{className:"mb-4"},h.frontmatter.title),a.createElement(s.MDXProvider,{components:Z},a.createElement(o.MDXRenderer,null,h.body)),w&&a.createElement("div",{className:"mb-5"},a.createElement("h2",{className:"mb-4 pgn-doc__heading",id:k},S,a.createElement("a",{href:`#${k}`,"aria-label":"Jump to SCSS variables"},a.createElement("span",{className:"pgn-doc__anchor"},"#"))),a.createElement(f.Z,{className:"language-scss"},w)),"string"!=typeof D&&(null==D?void 0:D.map((e=>{const t=M[e];return t?a.createElement(E.Z,Object.assign({key:t.displayName},t)):null})))))}g.defaultProps={pageContext:null}},73897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},63405:function(e,t,r){var n=r(73897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var n=r(6015),a=r(69617);function l(t,r,s){return a()?(e.exports=l=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=l=function(e,t,r){var a=[null];a.push.apply(a,t);var l=new(Function.bind.apply(e,a));return r&&n(l,r.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports),l.apply(null,arguments)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},38416:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},69617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},79498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},42281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},70215:function(e,t,r){var n=r(7071);e.exports=function(e,t){if(null==e)return{};var r,a,l=n(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(63405),a=r(79498),l=r(5304),s=r(42281);e.exports=function(e){return n(e)||a(e)||l(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},5304:function(e,t,r){var n=r(73897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-component-page-template-tsx-710a3557cc651bcd13ee.js.map