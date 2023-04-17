"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5010],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74258:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],u={slug:"do-you-need-to-build-auth",authors:"gao",tags:["auth","dev","authentication","authorization"]},l="Do you need to build your own auth for apps?",c={permalink:"/blog/do-you-need-to-build-auth",source:"@site/blog/2023-02-16-do-you-need-to-build-auth/index.md",title:"Do you need to build your own auth for apps?",description:"Although article is inspired from personal dev experience and I tried my best to keep things objective, it's still non-negligible that I'm one of the creators of Logto (an auth product).",date:"2023-02-16T00:00:00.000Z",formattedDate:"February 16, 2023",tags:[{label:"auth",permalink:"/blog/tags/auth"},{label:"dev",permalink:"/blog/tags/dev"},{label:"authentication",permalink:"/blog/tags/authentication"},{label:"authorization",permalink:"/blog/tags/authorization"}],readingTime:6.18,hasTruncateMarker:!0,authors:[{name:"Gao",title:"Founder of Silverhand",url:"https://github.com/gao-sun",imageURL:"https://github.com/gao-sun.png",key:"gao"}],frontMatter:{slug:"do-you-need-to-build-auth",authors:"gao",tags:["auth","dev","authentication","authorization"]},prevItem:{title:"Logto 2023 February Update (Extended)",permalink:"/blog/releases/2023-feb-extended"},nextItem:{title:"CIAM 102: Authorization & Role-based Access Control",permalink:"/blog/ciam-102-authz-and-rbac"}},p={authorsImageUrls:[void 0]},s=[],d={toc:s};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Prologue",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Although article is inspired from personal dev experience and I tried my best to keep things objective, it's still non-negligible that I'm one of the creators of Logto (an auth product)."),(0,a.kt)("p",{parentName:"admonition"},"I would like to point out this first for a better reading experience.")),(0,a.kt)("p",null,'I\u2019ve seen a lot of developers asking questions like \u201cShould I build my own auth for my app?\u201d. While the answer cannot be a simple "Yes" or "No", I\u2019d like to write an article to breakdown the implementation and demonstrate the pros and cons to help you decide.'))}f.isMDXComponent=!0}}]);