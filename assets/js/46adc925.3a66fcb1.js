"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[88691],{25233:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var i=t(11527),o=t(17279),s=t(22548);const a={sidebar_position:7.1},r="\ud83c\udfe2 Organizations (Multi-tenancy)",c={id:"docs/recipes/organizations/README",title:"\ud83c\udfe2 Organizations (Multi-tenancy)",description:"Organization is particularly effective in business-to-business (B2B) apps. In addition to individual users, your clients can also consist of teams, organizations, or entire companies. Logto introduces Organizations as a foundational element for B2B authentication and authorization.",source:"@site/versioned_docs/version-1.x/docs/recipes/organizations/README.mdx",sourceDirName:"docs/recipes/organizations",slug:"/docs/recipes/organizations/",permalink:"/docs/recipes/organizations/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/organizations/README.mdx",tags:[],version:"1.x",sidebarPosition:7.1,frontMatter:{sidebar_position:7.1},sidebar:"docsSidebar",previous:{title:"Common practice: you don't need a user table",permalink:"/docs/recipes/manage-users/you-dont-need-a-user-table"},next:{title:"Understand how organizations work",permalink:"/docs/recipes/organizations/understand-how-it-works"}},l={},u=[{value:"Before we start",id:"before-we-start",level:2}];function d(n){const e={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"-organizations-multi-tenancy",children:"\ud83c\udfe2 Organizations (Multi-tenancy)"}),"\n",(0,i.jsx)(s.Z,{cloud:!0,oss:"comingSoon"}),"\n",(0,i.jsx)(e.p,{children:"Organization is particularly effective in business-to-business (B2B) apps. In addition to individual users, your clients can also consist of teams, organizations, or entire companies. Logto introduces Organizations as a foundational element for B2B authentication and authorization."}),"\n",(0,i.jsx)(e.p,{children:"Even if your product is consumer-facing, organization can still be useful for collaboration features, such as sharing resources with other users."}),"\n",(0,i.jsx)(e.p,{children:"With this fundamental element, you can build the must-have features for multi-tenancy apps, such as:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"A product that can be used by multiple organizations."}),"\n",(0,i.jsx)(e.li,{children:"Organization member provision on an invitation or just-in-time basis."}),"\n",(0,i.jsx)(e.li,{children:"Access controls that defined by roles assigned to members within an organization."}),"\n",(0,i.jsx)(e.li,{children:"Link organizations with Enterprise SSO (single sign-on) experience."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:'The term "organization" is also used in other forms, such as "workspace", "team", "company", etc. In Logto, we use "organization" as the generic term to represent the concept of multi-tenancy.'}),"\n",(0,i.jsx)(e.h2,{id:"before-we-start",children:"Before we start"}),"\n",(0,i.jsx)(e.p,{children:'Hold on, you may heard of some products use the term "multi-tenancy" to represent the identity isolation: each tenant has its own set of users, permissions, and data.'}),"\n",(0,i.jsx)(e.p,{children:'It may be counterintuitive, but in fact, "multi-tenancy" indicates the contrary: multiple tenants are sharing resources in a single instance. For example, in Notion (a popular collaboration tool):'}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"You can create and join multiple workspaces with one account, instead of sign up for each workspace with different accounts."}),"\n",(0,i.jsxs)(e.li,{children:["For each workspace, Notion defines a ",(0,i.jsx)(e.strong,{children:"same set"}),' of access levels: "Worksapce owner" and "member", while you may expect different access levels for different workspaces.']}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["For more information, see our ",(0,i.jsx)(e.a,{href:"https://blog.logto.io/tenancy-models/",children:"blog post about tenancy models"}),"."]})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},22548:function(n,e,t){t.d(e,{Z:function(){return a}});var i="availability_kRMk",o=t(11527);const s=n=>"comingSoon"===n?"coming soon-blue":"boolean"==typeof n?n?"\u2713 available-4EA254":"not applicable-78767F":`since v${n.major}.${n.minor}-4EA254`;var a=n=>{let{cloud:e,oss:t}=n;return(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${s(e)}`}),(0,o.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${s(t)}`})]})}},17279:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return a}});var i=t(50959);const o={},s=i.createContext(o);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);