(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[276],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},23646:function(e,t,r){var n=r(67228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},69100:function(e,t,r){var n=r(99489),a=r(57067);function l(t,r,o){return a()?(e.exports=l=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=l=function(e,t,r){var a=[null];a.push.apply(a,t);var l=new(Function.bind.apply(e,a));return r&&n(l,r.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports),l.apply(null,arguments)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},57067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(23646),a=r(46860),l=r(60379),o=r(98206);e.exports=function(e){return n(e)||a(e)||l(e)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},60379:function(e,t,r){var n=r(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},21274:function(e,t,r){var n=r(41048);e.exports={MDXRenderer:n}},41048:function(e,t,r){var n=r(69100),a=r(319),l=r(59713),o=r(37316),u=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(67294),m=r(64983).mdx,p=r(93191).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=o(e,u),c=p(t),d=i.useMemo((function(){if(!r)return null;var e=s({React:i,mdx:m},c),t=Object.keys(e),l=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(l)))}),[r,t]);return i.createElement(d,s({},l))}},60955:function(e,t,r){"use strict";var n=r(67294),a=function(e){var t=e.h,r=e.children,a=e.id,l="h"+t;return n.createElement(l,{id:a,className:"pgn-doc__heading"},r)};a.defaultProps={},t.Z=a},58053:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(67294),a=r(21274),l=r(41902),o=function(e){return e.isRequired?n.createElement(n.Fragment,null," ",n.createElement(l.Z,{variant:"light"},"Required")):null};o.defaultProps={isRequired:!1};var u=function(e){var t=e.name,r=e.isRequired;return n.createElement("span",null,n.createElement("code",null,t),n.createElement(o,{isRequired:r}))};u.defaultProps={isRequired:!1};var c=function(e){var t=e.name,r=e.value,a=e.isRequired;return n.createElement("span",null,n.createElement("code",null,t),n.createElement(o,{isRequired:a}),n.createElement("span",{className:"text-monospace small ml-2"},r.map?r.map((function(e){return e.value})).join(" | "):JSON.stringify(r)))};c.defaultProps={isRequired:!1};var s=function(e){var t=e.value,r=e.isRequired;return n.createElement("span",null,t.map((function(e){return n.createElement(b,Object.assign({key:e.name},e))})).reduce((function(e,t){return[e," | ",t]})),n.createElement(o,{isRequired:r}))};s.defaultProps={isRequired:!1};var i=function(e){var t=e.value,r=e.isRequired;return n.createElement("span",null,n.createElement("code",null,t),n.createElement(o,{isRequired:r}))};i.defaultProps={isRequired:!1};var m=function(e){var t=e.value,r=e.isRequired;return n.createElement("span",null,n.createElement(b,t),n.createElement("code",null,"[]"),n.createElement(o,{isRequired:r}))};m.defaultProps={isRequired:!1};var p=function(e){var t=e.value,r=e.isRequired;return n.createElement("span",null,n.createElement("code",null,"Object.","<",n.createElement(b,t),">"),n.createElement(o,{isRequired:r}))};p.defaultProps={isRequired:!1};var d=function(e){var t=e.name,r=e.value,a=e.isRequired;return n.createElement("span",{className:"small"},n.createElement("code",null,t),n.createElement(o,{isRequired:a})," {",Object.entries(r).map((function(e){var t=e[0],r=e[1];return n.createElement("div",{className:"text-monospace pl-3",key:t},t,": ",n.createElement(b,r),",")})),"}")};d.defaultProps={isRequired:!1};var f=function(e){var t=e.name,r=e.value,a=e.isRequired;return n.createElement("span",{className:"small"},n.createElement("code",null,t),n.createElement(o,{isRequired:a})," {",Object.entries(r).map((function(e){var t=e[0],r=e[1];return n.createElement("div",{className:"text-monospace pl-3"},t,": ",n.createElement(b,r),",")})),"}")};f.defaultProps={isRequired:!1};var v=function(e){var t=e.raw,r=e.isRequired;return n.createElement("span",null,n.createElement("code",null,t),n.createElement(o,{isRequired:r}))};v.defaultProps={isRequired:!1,raw:""};var E={array:u,bool:u,func:u,number:u,object:u,string:u,any:u,element:u,node:u,symbol:u,elementType:u,enum:c,union:s,instanceOf:i,arrayOf:m,objectOf:p,shape:d,exact:f,custom:v},b=function(e){var t=e.name,r=e.value,a=e.required,l=e.raw,o=E[t];return o?n.createElement(o,{value:r,name:t,isRequired:a,raw:l}):"unknown type"},y=b,x=r(76532),h=function(e){var t=e.value;return t&&"undefined"!==t?n.createElement(n.Fragment,null,n.createElement(l.Z,{variant:"light"},"Default"),n.createElement("span",{className:"small text-monospace ml-2"},t)):null};h.defaultProps={value:void 0};var g=function(e){var t=e.name,r=e.type,o=e.required,u=e.defaultValue,c=e.description;return n.createElement("li",{className:"px-4 border-top border-light-300"},n.createElement("div",{className:"my-3"},n.createElement("div",{className:"mb-2"},n.createElement("h5",{className:"d-inline mb-0 mr-1"},t+" "),n.createElement(y,r),o&&n.createElement(n.Fragment,null," ",n.createElement(l.Z,{variant:"light"},"Required"))),n.createElement("div",{className:"x-small"},c?n.createElement(a.MDXRenderer,null,c.childMdx.body):null),n.createElement(h,u)))};g.defaultProps={required:!1,defaultValue:{},description:void 0};var R=function(e){var t=e.props,r=e.displayName,a=e.content;return n.createElement(x.ZP,{className:"mb-5",id:"props-api-table-"+r},n.createElement(x.ZP.Header,{as:"h3",title:r+" Props API",className:"pb-1"}),a&&n.createElement("div",{className:"small mb-3"},a),t.length>0?n.createElement("ul",{className:"list-unstyled"},t.map((function(e){return n.createElement(g,Object.assign({key:e.name},e))}))):n.createElement("div",{className:"pb-3 pl-4"},"This component does not receive any props."))};R.defaultProps={props:[],content:void 0,displayName:void 0};var O=R},92854:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n=r(63366),a=r(67294),l=r(25444),o=r(64983),u=r(21274),c=r(82298),s=r(30004),i=r(18973),m=r(58053),p=r(56965),d=r(14959),f=r(60955),v=["displayName"];function E(e){var t,r,E,b=e.data,y=b.mdx,x=b.components,h=e.pageContext.cssVariables,g=x.nodes.reduce((function(e,t){return e[t.displayName]=t,e}),{}),R=a.useMemo((function(){return{h2:function(e){return a.createElement(f.Z,Object.assign({h:"2"},e))},h3:function(e){return a.createElement(f.Z,Object.assign({h:"3"},e))},h4:function(e){return a.createElement(f.Z,Object.assign({h:"4"},e))},h5:function(e){return a.createElement(f.Z,Object.assign({h:"5"},e))},h6:function(e){return a.createElement(f.Z,Object.assign({h:"6"},e))},pre:function(e){return a.createElement("div",e)},code:i.Z,Link:l.Link,PropsTable:function(e){var t=e.displayName,r=(0,n.Z)(e,v);return g[t]?a.createElement(m.Z,Object.assign({},g[t],r)):null}}}),[g]),O="Theme Variables (SCSS)",q="theme-variables-scss",N=(null===(t=y.frontmatter)||void 0===t?void 0:t.components)||[],_=(null===(r=y.frontmatter)||void 0===r||null===(E=r.status)||void 0===E?void 0:E.toLowerCase().includes("deprecate"))||!1;return a.createElement(p.Z,{isMdx:!0,tocData:function(){var e,t,r=JSON.parse(JSON.stringify(y.tableOfContents));!h||null!==(e=r.items)&&void 0!==e&&e.includes()||(null===(t=r.items)||void 0===t||t.push({title:O,url:"#"+q}));return r}()},a.createElement(d.Z,{title:y.frontmatter.title}),a.createElement(c.Z,{size:"md",className:"py-5"},_&&a.createElement(s.Z,{variant:"warning"},a.createElement(s.Z.Heading,null,"This component will be removed soon."),a.createElement("p",{className:"small mb-0"},y.frontmatter.notes)),a.createElement("h1",{className:"mb-4"},y.frontmatter.title),a.createElement(o.MDXProvider,{components:R},a.createElement(u.MDXRenderer,null,y.body)),h&&a.createElement("div",{className:"mb-5"},a.createElement("h3",{className:"mb-4 pgn-doc__heading",id:q},O,a.createElement("a",{href:"#"+q,"aria-label":"Jump to SCSS variables"},a.createElement("span",{className:"pgn-doc__anchor"},"#"))),a.createElement(i.Z,{className:"language-scss"},h)),N.map((function(e){var t=g[e];return t?a.createElement(m.Z,Object.assign({key:t.displayName},t)):null}))))}}}]);
//# sourceMappingURL=component---src-templates-component-page-template-jsx-c7a147380b893d2ed3ae.js.map