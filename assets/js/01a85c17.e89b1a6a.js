"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[64013],{33782:function(e,t,s){s.d(t,{Z:function(){return f}});var a=s(50959),i=s(45924),n=s(224),r=s(28427),l=s(92504),c=s(77146),o=s(28903),d=s(69902);function m(e){const{pathname:t}=(0,o.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Mg)(e.permalink,t))}(e,t)))),[e,t])}var u={sidebar:"sidebar_o494",sidebarItemTitle:"sidebarItemTitle_NEi6",sidebarItemList:"sidebarItemList_yYnH",sidebarItem:"sidebarItem_WHx9",sidebarItemLink:"sidebarItemLink_yVZZ",sidebarItemLinkActive:"sidebarItemLinkActive_NTCt"},g=s(11527);function h(e){let{sidebar:t}=e;const s=m(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,i.Z)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var b=s(46461);function p(e){let{sidebar:t}=e;const s=m(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,g.jsx)(b.Zo,{component:p,props:e})}function x(e){let{sidebar:t}=e;const s=(0,r.i)();return t?.items.length?"mobile"===s?(0,g.jsx)(j,{sidebar:t}):(0,g.jsx)(h,{sidebar:t}):null}function f(e){const{sidebar:t,toc:s,children:a,...r}=e,l=t&&t.items.length>0;return(0,g.jsx)(n.Z,{...r,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(x,{sidebar:t}),(0,g.jsx)("main",{className:(0,i.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),s&&(0,g.jsx)("div",{className:"col col--2",children:s})]})})})}},50877:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});s(50959);var a=s(45924),i=s(77146);const n=()=>(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var r=s(90651),l=s(94843),c=s(33782),o=s(53932),d=s(71221),m={tag:"tag_NUTr"},u=s(11527);function g(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(d.Z,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:m.tag,children:(0,u.jsx)(o.Z,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function h(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,u.jsx)(g,{letterEntry:e},e.letter)))})}var b=s(6895);function p(e){let{tags:t,sidebar:s}=e;const i=n();return(0,u.jsxs)(r.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage),children:[(0,u.jsx)(r.d,{title:i}),(0,u.jsx)(b.Z,{tag:"blog_tags_list"}),(0,u.jsxs)(c.Z,{sidebar:s,children:[(0,u.jsx)(d.Z,{as:"h1",children:i}),(0,u.jsx)(h,{tags:t})]})]})}},53932:function(e,t,s){s.d(t,{Z:function(){return l}});s(50959);var a=s(45924),i=s(92504),n={tag:"tag_EE96",tagRegular:"tagRegular_XLwo",tagWithCount:"tagWithCount_h1fh"},r=s(11527);function l(e){let{permalink:t,label:s,count:l}=e;return(0,r.jsxs)(i.Z,{href:t,className:(0,a.Z)(n.tag,l?n.tagWithCount:n.tagRegular),children:[s,l&&(0,r.jsx)("span",{children:l})]})}}}]);