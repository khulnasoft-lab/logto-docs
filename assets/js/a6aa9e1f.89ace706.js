(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[93089],{42125:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});n(59496);var a=n(45924),i=n(35526),r=n(82621),o=n(79701),s=n(55398),l=n(36001),c=n(99575),d=n(56010),u=n(4637);function g(e){var t=e.metadata,n=(0,i.Z)().siteConfig.title,a=t.blogDescription,o=t.blogTitle,s="/"===t.permalink?n:o;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.d,{title:s,description:a}),(0,u.jsx)(c.Z,{tag:"blog_posts_list"})]})}function p(e){var t=e.metadata,n=e.items,a=e.sidebar;return(0,u.jsxs)(s.Z,{sidebar:a,children:[(0,u.jsx)(d.Z,{items:n}),(0,u.jsx)(l.Z,{metadata:t})]})}function h(e){return(0,u.jsxs)(r.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage),children:[(0,u.jsx)(g,Object.assign({},e)),(0,u.jsx)(p,Object.assign({},e))]})}},36001:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});n(59496);var a=n(80991),i=n(79551),r=n(4637);function o(e){var t=e.metadata,n=t.previousPage,o=t.nextPage;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(i.Z,{permalink:n,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(i.Z,{permalink:o,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},56010:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});n(59496);var a=n(21456),i=n(37842),r=n(4637);function o(e){var t=e.items,n=e.component,o=void 0===n?i.Z:n;return(0,r.jsx)(r.Fragment,{children:t.map((function(e){var t=e.content;return(0,r.jsx)(a.n,{content:t,children:(0,r.jsx)(o,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},14719:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(78792),i=n(68445),r=n(21456),o=n(51626),s=n(59496),l="title_xvU1",c="listTitle_ozbw",d=n(4637),u=function(e){var t=e.className,n=(0,r.C)(),u=n.metadata,g=n.isBlogPostPage,p=u.permalink,h=u.title,f=g?"h1":"h2";return(0,s.useEffect)((function(){if(window.location.pathname.startsWith("/blog")){for(var e,t=new URL(g?window.location.pathname.replace(/^\/blog/,""):"/","https://blog.logto.io"),n=new URLSearchParams(window.location.search),i=(0,a.Z)(n.entries());!(e=i()).done;){var r=e.value,o=r[0],s=r[1];t.searchParams.append(o,s)}window.location.href=t.href}}),[g]),(0,d.jsx)(f,{className:(0,o.Z)(l,!g&&c,t),itemProp:"headline",children:g?h:(0,d.jsx)(i.Z,{itemProp:"url",to:p,children:h})})}},37319:function(e,t,n){var a={"./locale":62642,"./locale.js":62642};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=37319}}]);