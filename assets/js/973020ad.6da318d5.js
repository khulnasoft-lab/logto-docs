"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[21310],{26473:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return d}});var o=t(11527),r=t(17279);const s={sidebar_position:4},i="Common practice: you don't need a user table",a={id:"docs/recipes/manage-users/you-dont-need-a-user-table",title:"Common practice: you don't need a user table",description:"Identify user",source:"@site/versioned_docs/version-1.x/docs/recipes/manage-users/you-dont-need-a-user-table.md",sourceDirName:"docs/recipes/manage-users",slug:"/docs/recipes/manage-users/you-dont-need-a-user-table",permalink:"/docs/recipes/manage-users/you-dont-need-a-user-table",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/manage-users/you-dont-need-a-user-table.md",tags:[],version:"1.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Advanced user search",permalink:"/docs/recipes/manage-users/advanced-user-search"},next:{title:"\ud83c\udfe2 Organizations (Multi-tenancy)",permalink:"/docs/recipes/organizations/"}},c={},d=[{value:"Identify user",id:"identify-user",level:2},{value:"Why skip preparing a user table?",id:"why-skip-preparing-a-user-table",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"common-practice-you-dont-need-a-user-table",children:"Common practice: you don't need a user table"}),"\n",(0,o.jsx)(n.h2,{id:"identify-user",children:"Identify user"}),"\n",(0,o.jsxs)(n.p,{children:["We suggest utilizing the ",(0,o.jsx)(n.code,{children:"user.id"})," property to identify a user, as we ensure each user has a distinct and non-null ",(0,o.jsx)(n.code,{children:"id"}),". Additionally, the ",(0,o.jsx)(n.code,{children:"username"}),", ",(0,o.jsx)(n.code,{children:"primary_email"}),", and ",(0,o.jsx)(n.code,{children:"primary_phone"})," properties are unique but may be empty. Therefore, it is important to handle ",(0,o.jsx)(n.code,{children:"null"})," values appropriately if you intend to use these properties as identifiers for a user."]}),"\n",(0,o.jsx)(n.h2,{id:"why-skip-preparing-a-user-table",children:"Why skip preparing a user table?"}),"\n",(0,o.jsx)(n.p,{children:"When using Logto as an identity solution, it is important to consider how to organize user information and related data. This involves defining a user schema to determine the structure and properties of a user object and deciding how to store and manage user-related data."}),"\n",(0,o.jsxs)(n.p,{children:["In the past, it was common for developers to create a user table in a SQL database to store a user's profile and related information. They would then establish a many-to-one relationship in other tables using a ",(0,o.jsx)(n.code,{children:"user"})," column that pointed back to the user table. Other identity providers, such as Google, would require the creation of a ",(0,o.jsx)(n.code,{children:"google_id"}),' column to enable "sign in with Google" functionality. However, this approach is not appropriate for Logto since it is not just a service provider, but also an identity provider. Logto is a comprehensive solution that can manage all user-related information, including identifiers, social connections, custom data, and more. Therefore, creating a ',(0,o.jsx)(n.code,{children:"logto_id"})," column is not an effective strategy."]}),"\n",(0,o.jsx)(n.p,{children:"Using Logto eliminates the need for a user table."}),"\n",(0,o.jsx)(n.p,{children:"Forget the user table, store user info in Logto. Here is a common practice:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Create a ",(0,o.jsx)(n.code,{children:"user_id"})," column in other tables and save the user's user.id value from Logto. You can refer to the previous chapter on ",(0,o.jsx)(n.a,{href:"#identify-user",children:"Identify User"})," for more information."]}),"\n",(0,o.jsxs)(n.li,{children:["Use ",(0,o.jsx)(n.a,{href:"/docs/recipes/manage-users/management-api",children:"Logto's Management API"})," f for CRUD operations, such as creating and updating users, getting user details, and listing users."]}),"\n",(0,o.jsxs)(n.li,{children:["Store any additional user information in custom data. You can refer to the ",(0,o.jsx)(n.a,{href:"/docs/references/users/custom-data",children:"User Custom Data"})," for more information."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'By utilizing these methods, Logto essentially takes on the role of a "user table".'}),"\n",(0,o.jsx)(n.p,{children:'For example, let\'s consider an "Online Store" application that uses Logto as its identity service. If you want to implement two features'}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Storing user preference data in the cloud"}),"\n",(0,o.jsx)(n.li,{children:"Implementing access control for different groups of users"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Logto can facilitate both of these tasks."}),"\n",(0,o.jsxs)(n.p,{children:["With the help of ",(0,o.jsx)(n.em,{children:"customData"}),", we can quickly implement this, and the data object will be like:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "appearenceMode": "DarkMode",\n  "role": "customer"\n}\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:'You cannot do "join" or other complex queries on Logto\'s user storage. In this circumstance, you should use a cache layer or your own user table.'})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},17279:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var o=t(50959);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);