"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[46673],{775:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=s(11527),t=s(17279);const i={date:new Date("2023-01-01T00:00:00.000Z"),authors:"gao",tags:["release"]},r="Logto 2023 New Year Update",a={permalink:"/blog/releases/2023-jan",source:"@site/blog/releases/2023-jan.md",title:"Logto 2023 New Year Update",description:"\ud83d\ude4b Hey folks!",date:"2023-01-01T00:00:00.000Z",formattedDate:"January 1, 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:3.295,hasTruncateMarker:!0,authors:[{name:"Gao",title:"Founder of Silverhand",url:"https://github.com/gao-sun",imageURL:"https://github.com/gao-sun.png",key:"gao"}],frontMatter:{date:"2023-01-01T00:00:00.000Z",authors:"gao",tags:["release"]},unlisted:!1,prevItem:{title:"Logto 2023 February Update",permalink:"/blog/releases/2023-feb"},nextItem:{title:"The design considerations for a seamless sign-in experience (Second Chapter)",permalink:"/blog/design-for-seamless-sie-2"}},c={authorsImageUrls:[void 0]},d=[{value:"\ud83d\udca5 Breaking change \ud83d\udca5",id:"-breaking-change-",level:2},{value:"Migration",id:"migration",level:2},{value:"Feature updates",id:"feature-updates",level:2},{value:"\ud83e\ude9d Web hooks",id:"-web-hooks",level:3},{value:"\u2699\ufe0f Advanced search API",id:"\ufe0f-advanced-search-api",level:3},{value:"\ud83d\udd17 Connectors",id:"-connectors",level:3},{value:"Enhancement",id:"enhancement",level:2},{value:"\ud83d\udcbb Admin Console enhancement to streamline the set up process",id:"-admin-console-enhancement-to-streamline-the-set-up-process",level:3},{value:"\ud83e\uddd1\u200d\ud83d\ude80 Refactored Interaction APIs and Audit logs",id:"-refactored-interaction-apis-and-audit-logs",level:3},{value:"Blog posts",id:"blog-posts",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"\ud83d\ude4b Hey folks!"}),"\n",(0,o.jsx)(n.p,{children:"For the first day of 2023, we shipped a few things for everybody:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Web hooks, Advanced search API, New connectors"}),"\n",(0,o.jsx)(n.li,{children:"Admin console enhancement, Refactored Interaction APIs and Audit logs"}),"\n",(0,o.jsx)(n.li,{children:"New blog posts"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"We are currently busy working on the general availability version which includes User profile, RBAC (Role-based access control), and much more!"})}),"\n",(0,o.jsx)(n.h2,{id:"-breaking-change-",children:"\ud83d\udca5 Breaking change \ud83d\udca5"}),"\n",(0,o.jsxs)(n.p,{children:["If you want to perform the original fuzzy user search via Management API, adding ",(0,o.jsx)(n.code,{children:"%"})," around the keyword is required. E.g.:"]}),"\n",(0,o.jsxs)(n.p,{children:["Original: ",(0,o.jsx)(n.code,{children:"GET /users?search=foo"}),"\nNow: ",(0,o.jsx)(n.code,{children:"GET /users?search=%foo%"})]}),"\n",(0,o.jsx)(n.h2,{id:"migration",children:"Migration"}),"\n",(0,o.jsxs)(n.p,{children:["If you are upgrading from an older version of logto, make sure to go through our ",(0,o.jsx)(n.a,{href:"https://docs.logto.io/docs/references/using-cli/database-alteration",children:"Database alteration"})," tutorial."]}),"\n",(0,o.jsx)(n.h2,{id:"feature-updates",children:"Feature updates"}),"\n",(0,o.jsx)(n.h3,{id:"-web-hooks",children:"\ud83e\ude9d Web hooks"}),"\n",(0,o.jsx)(n.p,{children:"With hooks, Logto can enable the next-level extensibility for you to interact with other services in an event-based manner. E.g., do some async jobs after a new user registered."}),"\n",(0,o.jsxs)(n.p,{children:["We support three events in this version: ",(0,o.jsx)(n.code,{children:"PostRegister"}),", ",(0,o.jsx)(n.code,{children:"PostSignIn"})," and ",(0,o.jsx)(n.code,{children:"PostResetPassword"}),". Check out ",(0,o.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/webhooks/",children:"\ud83e\ude9d Web hooks"})," for the concept explained and detailed usage."]}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-advanced-search-api",children:"\u2699\ufe0f Advanced search API"}),"\n",(0,o.jsx)(n.p,{children:"Management API is a programmatic way to communicate with Logto. We redesigned the user search API to make it powerful for advanced search requests."}),"\n",(0,o.jsx)(n.p,{children:"Now you can designate one or multiple search fields as well as the match mode. For example, you can search users that:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Name starts with \u201cAlice\u201d, case-sensitive; or"}),"\n",(0,o.jsx)(n.li,{children:"Email includes \u201cAlice\u201d, case-insensitive."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Exact search is also supported, e.g., search users that name is exactly \u201cJohn Wick\u201d. See ",(0,o.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/interact-with-management-api/advanced-user-search",children:"Advanced user search"})," for details."]}),"\n",(0,o.jsx)(n.h3,{id:"-connectors",children:"\ud83d\udd17 Connectors"}),"\n",(0,o.jsxs)(n.p,{children:["Logto is built on open standards, and we believe they can eliminate enormous gaps in software development. From this version, Logto supports creating multiple connectors based on the same open standard: ",(0,o.jsx)(n.strong,{children:"OAuth 2.0"})," or ",(0,o.jsx)(n.strong,{children:"OpenID Connect"}),"; We call them \u201cstandard connectors\u201d."]}),"\n",(0,o.jsx)(n.p,{children:"We are developing more standard connectors like SAML and LDAP. Feel free to let us know your needs!"}),"\n",(0,o.jsx)(n.p,{children:"Besides, we\u2019d like to highlight our community contributors:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/kentio",children:"@kentio"})," contributed AWS SES connector"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/StringKe",children:"@StringKe"})," contributed Tencent SMS and Feishu (Lark) connector"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Thank you!"}),"\n",(0,o.jsx)(n.h2,{id:"enhancement",children:"Enhancement"}),"\n",(0,o.jsx)(n.h3,{id:"-admin-console-enhancement-to-streamline-the-set-up-process",children:"\ud83d\udcbb Admin Console enhancement to streamline the set up process"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"We revisited the Logto admin console UI and give it a fresh look! The goal of this is to make the admin console more intuitive and aesthetically pleasing, which ends up helping developers more efficiently perform the tasks."})}),"\n",(0,o.jsx)(n.p,{children:"Now you can feel the following enhancement as follows:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Responsive design improvement"})," We optimized responsive design to ensure that the interface looks great on different screen sizes."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Simplification of the layout"})," We have streamlined the layout of the interface, organizing the content in a more logical and intuitive way. This makes it easier for our developers to navigate the interface and find what they are looking for."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Fixed the non-intuitive interaction behaviors"})," we changed the saving interaction and make it a section-level behavior, which avoiding seeing too many double check alerts. We wish to provide a more secure developer experience when making configuration."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Please check it out and explore, and let us know how you feel! \ud83d\ude09"}),"\n",(0,o.jsx)(n.h3,{id:"-refactored-interaction-apis-and-audit-logs",children:"\ud83e\uddd1\u200d\ud83d\ude80 Refactored Interaction APIs and Audit logs"}),"\n",(0,o.jsx)(n.p,{children:"Due to the increased flexibility and complexity of Sign-in experience, and to provide even more auditable and structured logs for user interactions, we decided to refactor our Interaction APIs with the logging mechanism; The original session APIs are deprecated from now."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"This API change does not affect the end-user Sign-in experience."})}),"\n",(0,o.jsx)(n.p,{children:"Audit logs become fine-categorized by the new key definitions, and payloads are optimized for behavior tracing. Check out the \u201cAudit logs\u201d tab in Admin console to feel the change."}),"\n",(0,o.jsx)(n.h2,{id:"blog-posts",children:"Blog posts"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://silverhand.substack.com/p/the-design-considerations-for-a-seamless-2d4?utm_source=github-release",children:"The design considerations for a seamless sign-in experience (Second Chapter)"})," Learn more about our design thinking and decision making philosophies"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://dev.to/gaosun/series/21132?utm_source=github-release",children:"Migrate a 60k LOC TypeScript (NodeJS) repo to ESM and testing become 4x faster"})," A practical series of our engineering efforts on module system migration"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},17279:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var o=s(50959);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);