"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[46103],{42493:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});t(50959);var a=t(45924),o=t(90651),i=t(94843),r=t(20749),s=t(33782),l=t(94949),c=t(77146),d=t(11968),u=t(11527);function m(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:n}=(0,r.C)(),{title:t,description:a,date:i,tags:s,authors:l,frontMatter:c}=n,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(o.d,{title:t,description:a,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:i}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")})]})}var f=t(61420),g=t(2036);function p(e){let{sidebar:n,children:t}=e;const{metadata:a,toc:o}=(0,r.C)(),{nextItem:i,prevItem:c,frontMatter:d,unlisted:h}=a,{hide_table_of_contents:p,toc_min_heading_level:v,toc_max_heading_level:x}=d;return(0,u.jsxs)(s.Z,{sidebar:n,toc:!p&&o.length>0?(0,u.jsx)(f.Z,{toc:o,minHeadingLevel:v,maxHeadingLevel:x}):void 0,children:[h&&(0,u.jsx)(g.Z,{}),(0,u.jsx)(l.Z,{children:t}),(i||c)&&(0,u.jsx)(m,{nextItem:i,prevItem:c})]})}function v(e){const n=e.content;return(0,u.jsx)(r.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(o.FG,{className:(0,a.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(p,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},61420:function(e,n,t){t.d(n,{Z:function(){return c}});t(50959);var a=t(45924),o=t(27915),i={tableOfContents:"tableOfContents_ZIoQ",docItemContainer:"docItemContainer__C1l"},r=t(11527);const s="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,a.Z)(i.tableOfContents,"thin-scrollbar",n),children:(0,r.jsx)(o.Z,{...t,linkClassName:s,linkActiveClassName:l})})}},27915:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(50959),o=t(83290);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):a.push(o)})),a}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>s(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let o=n;o<=t;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),c=l(s,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}var u=t(92504),m=t(11527);function h(e){let{toc:n,className:t,linkClassName:a,isChild:o}=e;return n.length?(0,m.jsx)("ul",{className:o?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}var f=a.memo(h);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const g=(0,o.L)(),p=c??g.tableOfContents.minHeadingLevel,v=u??g.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return(0,a.useMemo)((()=>r({toc:i(n),minHeadingLevel:t,maxHeadingLevel:o})),[n,t,o])}({toc:n,minHeadingLevel:p,maxHeadingLevel:v});return d((0,a.useMemo)((()=>{if(s&&l)return{linkClassName:s,linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:v}}),[s,l,p,v])),(0,m.jsx)(f,{toc:x,className:t,linkClassName:s,...h})}},2036:function(e,n,t){t.d(n,{Z:function(){return h}});t(50959);var a=t(45924),o=t(77146),i=t(7614),r=t(11527);function s(){return(0,r.jsx)(o.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(o.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(94843),u=t(38140);function m(e){let{className:n}=e;return(0,r.jsx)(u.Z,{type:"caution",title:(0,r.jsx)(s,{}),className:(0,a.Z)(n,d.k.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(m,{...e})]})}},70864:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(54763),o=t(92504),i=t(20749),r=t(38140),s=t(51626),l=t(50959),c="title_xvU1",d="listTitle_ozbw",u=t(11527);const m=e=>{let{className:n}=e;const{metadata:t,isBlogPostPage:a}=(0,i.C)(),{permalink:m,title:h}=t,f=a?"h1":"h2",g=window.location.pathname.startsWith("/blog"),p=(0,l.useCallback)((()=>{const e=new URL(a?window.location.pathname.replace(/^\/blog/,""):"/","https://blog.logto.io"),n=new URLSearchParams(window.location.search);for(const[t,a]of n.entries())e.searchParams.append(t,a);return e.pathname.endsWith("/")||(e.pathname+="/"),e}),[a]);return(0,l.useEffect)((()=>{if(!g)return;for(const n of document.head.querySelectorAll("link"))["canonical","alternate"].includes(n.getAttribute("rel")??"")&&n.parentNode?.removeChild(n);const e=document.createElement("link");e.setAttribute("rel","canonical"),e.href=p().href,document.head.append(e)}),[p,g]),(0,u.jsxs)(u.Fragment,{children:[g&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(r.Z,{type:"tip",children:["Logto Blog has been moved to the new place!"," ",(0,u.jsx)("a",{href:p().href,children:"Click here"})," to see this article in the new blog."]}),(0,u.jsx)("hr",{})]}),(0,u.jsx)(f,{className:(0,s.Z)(c,!a&&d,n),itemProp:"headline",children:a?h:(0,u.jsx)(o.Z,{itemProp:"url",to:m,children:h})})]})};var h=()=>(0,u.jsx)(a.Z,{children:()=>(0,u.jsx)(m,{})})}}]);