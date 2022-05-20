"use strict";(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[173],{47699:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return i},default:function(){return l}});var t=a(63366),r=(a(67294),a(64983)),o=a(21379),s=["components"],i={},m={_frontmatter:i},c=o.Z;function l(e){var n=e.components,a=(0,t.Z)(e,s);return(0,r.mdx)(c,Object.assign({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"installation-and-usage"},"Installation and usage",(0,r.mdx)("a",{parentName:"h1","aria-hidden":"true",tabIndex:-1,href:"#installation-and-usage"},(0,r.mdx)("span",{parentName:"a",className:"pgn-doc__anchor"},"#"))),(0,r.mdx)("p",null,"Paragon components require React 16 or higher. To install Paragon into your project:"),(0,r.mdx)("p",null,"In terminal:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"npm i --save @edx/paragon\n")),(0,r.mdx)("p",null,"In your React project:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { ComponentName } from '@edx/paragon';\n")),(0,r.mdx)("h4",{id:"scss-foundation"},"SCSS Foundation",(0,r.mdx)("a",{parentName:"h4","aria-hidden":"true",tabIndex:-1,href:"#scss-foundation"},(0,r.mdx)("span",{parentName:"a",className:"pgn-doc__anchor"},"#"))),(0,r.mdx)("p",null,"Usage with no theme:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},'@import "@edx/paragon/scss/core/core.scss";\n')),(0,r.mdx)("p",null,"Usage with a theme:"),(0,r.mdx)("p",null,"When working with a theme the order of imports is important: if you need to override Paragon's variables you must import theme's variables before Paragon core (that's because all variables in Paragon use ",(0,r.mdx)("inlineCode",{parentName:"p"},"!default")," flag which allows you to override them before importing, you can read more ",(0,r.mdx)("a",{parentName:"p",href:"https://sass-lang.com/documentation/variables#default-values"},"here"),"), while to override Paragon's styles, the theme's style overrides must be imported after."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},'@import "@my-brand/fonts.scss";\n@import "@my-brand/variables.scss";\n// Import the Paragon core after setting brand-themed variables.\n@import "@edx/paragon/scss/core/core.scss";\n// Import brand overrides after the Paragon core.\n@import "@my-brand/overrides.scss";\n')),(0,r.mdx)("p",null,"Note that including fonts will affect load performance.  In some pages you may choose not to load the custom font."))}l.isMDXComponent=!0},60955:function(e,n,a){var t=a(67294),r=function(e){var n=e.h,a=e.children,r=e.id,o="h"+n;return t.createElement(o,{id:r,className:"pgn-doc__heading"},a)};r.defaultProps={},n.Z=r},21379:function(e,n,a){a.d(n,{Z:function(){return u}});var t=a(67294),r=a(64983),o=a(25444),s=a(82298),i=a(18973),m=a(56965),c=a(14959),l=a(60955),d={h1:function(e){return t.createElement(l.Z,Object.assign({h:"1"},e))},h2:function(e){return t.createElement(l.Z,Object.assign({h:"2"},e))},h3:function(e){return t.createElement(l.Z,Object.assign({h:"3"},e))},h4:function(e){return t.createElement(l.Z,Object.assign({h:"4"},e))},h5:function(e){return t.createElement(l.Z,Object.assign({h:"5"},e))},h6:function(e){return t.createElement(l.Z,Object.assign({h:"6"},e))},pre:function(e){return t.createElement("div",e)},code:i.Z,Link:o.Link};function u(e){var n,a=e.children,o=e.pageContext;return t.createElement(m.Z,null,t.createElement(c.Z,{title:null==o||null===(n=o.frontmatter)||void 0===n?void 0:n.title}),t.createElement(s.Z,{size:"md",className:"py-5"},t.createElement(r.MDXProvider,{components:d},a)))}}}]);
//# sourceMappingURL=component---src-pages-guides-installation-and-usage-mdx-cdf3761ef059e543fa33.js.map