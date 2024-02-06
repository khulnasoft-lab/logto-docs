"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[66992],{67934:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(11527),t=n(17279);const o={sidebar_label:"Social identities",sidebar_position:1},r="Social identities",c={id:"docs/references/users/social-identities",title:"Social identities",description:"identities contains the user info retrieved from social sign-in",source:"@site/docs/docs/references/users/social-identities.md",sourceDirName:"docs/references/users",slug:"/docs/references/users/social-identities",permalink:"/docs/references/users/social-identities",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/users/social-identities.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Social identities",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Users",permalink:"/docs/references/users/"},next:{title:"Custom data",permalink:"/docs/references/users/custom-data"}},a={},d=[];function l(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"social-identities",children:"Social identities"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"identities"})," contains the user info retrieved from social sign-in\n(i.e., sign-in with a social connector).\nEach user's ",(0,s.jsx)(i.em,{children:"identities"})," is stored in an individual JSON object."]}),"\n",(0,s.jsx)(i.p,{children:"The user info varies by social identity provider (i.e., social network platform), and it typically includes the following:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/docs/references/connectors/#target",children:(0,s.jsx)(i.em,{children:"target"})}),' of the identity provider, such as "facebook", "google", or "wechat"']}),"\n",(0,s.jsx)(i.li,{children:"User's unique identifier for this provider"}),"\n",(0,s.jsx)(i.li,{children:"User's name"}),"\n",(0,s.jsx)(i.li,{children:"User's verified email"}),"\n",(0,s.jsx)(i.li,{children:"User's avatar"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The user's account may be linked to multiple social identity providers via social sign-in;\nthe corresponding user info retrieved from these providers will be stored in the ",(0,s.jsx)(i.em,{children:"identities"})," object."]}),"\n",(0,s.jsxs)(i.p,{children:["Sample ",(0,s.jsx)(i.em,{children:"identities"})," from a user who signed in with both WeChat and Facebook:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n  "facebook": {\n    "userId": "5110888888888888",\n    "details": {\n      "id": "5110888888888888",\n      "name": "John Joe",\n      "email": "johnjoe@logto.io",\n      "avatar": "https://example.com/avatar.png"\n    }\n  },\n  "wechat": {\n    "userId": "O8sU-6JWMMNZzuXo6-xaEjouyQZ8",\n    "details": {\n      "id": "O8sU-6JWMMNZzuXo6-xaEjouyQZ8",\n      "name": "John Joe",\n      "avatar": "https://example.com/avatar.png"\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(i.admonition,{type:"info",children:[(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.em,{children:"identities"}),' can NOT be updated using "Admin Console" or "Management API".']}),(0,s.jsxs)(i.p,{children:["Every time the user signs in with a social connector,\ntheir ",(0,s.jsx)(i.em,{children:"identities"})," will be automatically imported or updated from the identity provider."]})]})]})}function u(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},17279:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>r});var s=n(50959);const t={},o=s.createContext(t);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);