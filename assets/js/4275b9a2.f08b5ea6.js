"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[7297],{35109:function(e,n,i){i.r(n),i.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return d}});var t=i(11527),s=i(17279);const o={slug:"ciam-101-intro-authn-sso",authors:"gao",tags:["ciam","auth","authentication"]},a="CIAM 101: Authentication, Identity, SSO",r={permalink:"/blog/ciam-101-intro-authn-sso",source:"@site/blog/2022-11-28-ciam-101-authn-identity-sso/index.mdx",title:"CIAM 101: Authentication, Identity, SSO",description:"Background",date:"2022-11-28T00:00:00.000Z",formattedDate:"November 28, 2022",tags:[{label:"ciam",permalink:"/blog/tags/ciam"},{label:"auth",permalink:"/blog/tags/auth"},{label:"authentication",permalink:"/blog/tags/authentication"}],readingTime:12.76,hasTruncateMarker:!0,authors:[{name:"Gao",title:"Founder of Silverhand",url:"https://github.com/gao-sun",imageURL:"https://github.com/gao-sun.png",key:"gao"}],frontMatter:{slug:"ciam-101-intro-authn-sso",authors:"gao",tags:["ciam","auth","authentication"]},unlisted:!1,prevItem:{title:"The design considerations for a seamless sign-in experience (Second Chapter)",permalink:"/blog/design-for-seamless-sie-2"},nextItem:{title:"The design considerations for a seamless sign-in experience (First Chapter)",permalink:"/blog/design-for-seamless-sie-1"}},l={authorsImageUrls:[void 0]},d=[{value:"Background",id:"background",level:2},{value:"The basics of CIAM",id:"the-basics-of-ciam",level:2},{value:"Authentication and authorization",id:"authentication-and-authorization",level:3},{value:"Identity and Tenant",id:"identity-and-tenant",level:3},{value:"App and Tenant",id:"app-and-tenant",level:3},{value:"Identity Provider (IdP) and Service Provider (SP)",id:"identity-provider-idp-and-service-provider-sp",level:3},{value:"Quiz",id:"quiz",level:4},{value:"Case study: A tech solution company",id:"case-study-a-tech-solution-company",level:2},{value:"What we talk about when we talk about SSO",id:"what-we-talk-about-when-we-talk-about-sso",level:2},{value:"SSO Case 1",id:"sso-case-1",level:3},{value:"SSO Case 2",id:"sso-case-2",level:3},{value:"SSO Case 3",id:"sso-case-3",level:3},{value:"SSO mapping",id:"sso-mapping",level:2},{value:"Organization",id:"organization",level:2},{value:"Quiz",id:"quiz-1",level:3},{value:"Questions remain",id:"questions-remain",level:2},{value:"Closing notes",id:"closing-notes",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,t.jsx)(n.p,{children:"I began the build Logto because I noticed that Identity and Access Management (IAM) had become increasingly complex and expansive over time. The concept of IAM is even large enough to give rise to new concepts, such as WIAM (Workforce IAM) and CIAM (Customer IAM)."}),"\n",(0,t.jsx)(n.p,{children:"While WIAM and CIAM share the same foundation, they have distinct use cases: WIAM is typically used for internal users, while CIAM is used for external customers. Some examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"WIAM"})," Your company has a unified identity system for employees, thus every one can use the same account to access company resources, such as software subscriptions, cloud computing services, etc."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CIAM"})," Your online bookstore requires a user identity system for customers and sellers. The sign-in experience is a critical part of onboarding, as it is located at the top of the conversion funnel."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Logto started with the CIAM for various reasons (we\u2019ll have another article talking about this). During development, we realized that building a unified understanding across the team would be beneficial before taking our product to the next level. We hope this will also help you gain a better grasp of the IAM landscape."}),"\n",(0,t.jsx)(n.p,{children:"Let\u2019s get started!"}),"\n",(0,t.jsx)(n.h2,{id:"the-basics-of-ciam",children:"The basics of CIAM"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Regardless of their differences, WIAM and CIAM both have the same foundation: authentication and authorization. These two concepts are at the core of their features."})}),"\n",(0,t.jsx)(n.p,{children:"In this article, we'll focus on the fundamental concepts of CIAM and problems we may meet during or after the authentication flow. We\u2019ll also discuss Single Sign-On (SSO) and its related scenarios."}),"\n",(0,t.jsx)(n.h3,{id:"authentication-and-authorization",children:"Authentication and authorization"}),"\n",(0,t.jsx)(n.admonition,{title:"Definition",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Authentication (AuthN) answers the question \u201cWhich identity do you own?\u201d"}),"\n",(0,t.jsx)(n.li,{children:"Authorization (AuthZ) answers the question \u201cWhat can you do?\u201d"}),"\n"]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:['\ud83d\udca1 Authentication is initially defined as "Who are you?". However, when discussing digital identities, it is more accurate to demonstrate authentication by "proving ownership of identity". (Credit to ',(0,t.jsx)(n.a,{href:"https://www.reddit.com/r/programming/comments/10uycg0/comment/j7eyhrb/",children:"Calm-Card-2424"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you discover something that does not fit into either of these two categories, it is likely not essential to the identity business."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Examples for authentication"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Password sign-in, passwordless sign-in, social sign-in, etc."}),"\n",(0,t.jsx)(n.li,{children:"Machine-to-Machine authentication"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Examples for authorization"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Role-based Access Control"}),"\n",(0,t.jsx)(n.li,{children:"Attribute-based Access Control"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Examples for exceptions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Non-identity data"}),"\n",(0,t.jsx)(n.li,{children:"Web hooks"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"identity-and-tenant",children:"Identity and Tenant"}),"\n",(0,t.jsx)(n.p,{children:"Identity typically represents either a user or a machine. Upon successful authentication, an ID Token is issued as an Identity."}),"\n",(0,t.jsx)(n.p,{children:"In other words, the main purpose of authentication is to obtain an Identity."}),"\n",(0,t.jsx)(n.p,{children:"A Tenant is a group of identities:"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD\n  Tenant --- A[Identity: User 1]\n  Tenant --- B[Identity: User 2]\n  Tenant --- C[Identity: Machine 1]"}),"\n",(0,t.jsx)(n.p,{children:'When we discuss "Multi-tenant", we are referring to multiple Logto instances that are identity-isolated from one another. In other words, multiple Logto instances.'}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD\n  T1[Tenant 1] --- A[Identity: User 1]\n  T2[Tenant 2] --- B[Identity: User 1]\n  T2[Tenant 2] --- C[Identity: Machine 1]\n  subgraph IS2[Identity system 2]\n    T2\n\t  B\n    C\n  end\n  subgraph IS1[Identity system 1]\n    T1\n    A\n  end"}),"\n",(0,t.jsxs)(n.p,{children:["Note it has two ",(0,t.jsx)(n.strong,{children:"isolated"})," identity systems, i.e. you cannot use the Identity of Tenant 1 in Tenant 2, even for the same identifier (email,  phone, etc.). It's like your Costco membership not being valid at Whole Foods."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\ud83e\uddf1 In short, there are \u201cphysical walls\u201d between Tenants."})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:'The definition of "Tenant" varies across CIAM products. Some refer to the term "Organization" in Logto, which will be introduced later.'})}),"\n",(0,t.jsx)(n.h3,{id:"app-and-tenant",children:"App and Tenant"}),"\n",(0,t.jsx)(n.p,{children:"Just like Identity, an App also belongs to a Tenant. Several things to remember:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["There is typically no direct relationship between an App and an Identity.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"An Identity can represent an App, but there is no direct connection between them."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Like users, apps are also Tenant-level."}),"\n",(0,t.jsx)(n.li,{children:"Apps are code, while users are human."}),"\n",(0,t.jsx)(n.li,{children:"The sole purpose of Apps are to complete authentication, i.e. to obtain an Identity."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"identity-provider-idp-and-service-provider-sp",children:"Identity Provider (IdP) and Service Provider (SP)"}),"\n",(0,t.jsx)(n.p,{children:"The difference between these two providers is tricky but important."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Identity Provider"})," is a service that provides authentication (AuthN) and issues identities."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can find various explanations about Service Provider from Google, though they may not be satisfactory. In my mind, Service Provider is a relative concept:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["Service Provider (or Relying Party in ",(0,t.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OIDC"}),")"]})," is a service or client that initiates authentication (AuthN) and requests the result from Identity Providers."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"quiz",children:"Quiz"}),"\n",(0,t.jsx)(n.p,{children:"Consider a typical social sign-in scenario:"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph LR\n  A[iOS App] --\x3e |Invoke sign-in| Logto --\x3e |Redirect| GitHub\n  GitHub --\x3e |Return GitHub ID| Logto --\x3e |Return Logto ID| A"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u2753 How many Service Providers and Identity Providers in this graph?"})}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)(n.p,{children:"Both have two.\niOS App is a service provider to Logto, while Logto is an identity provider.\nLogto is also a service provider to GitHub, while GitHub is an identity provider.\nThus, Logto is a Service Provider also a Identity Provider."})]}),"\n",(0,t.jsx)(n.h2,{id:"case-study-a-tech-solution-company",children:"Case study: A tech solution company"}),"\n",(0,t.jsx)(n.p,{children:"You are a CTO of a tech solution company, you have over 100 business partners and you have delivered over 300 projects."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Each project is either a web app or a mobile app with a backend service."}),"\n",(0,t.jsx)(n.li,{children:"For each business partner, you want to refactor the user system to provide SSO across its projects."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u2753 How can Logto (or a CIAM product) help?"})}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)(n.p,{children:'Create a Logto instance for each business partner. Each partner holds a Tenant. Projects are mapped to "Apps" in Logto.'}),(0,t.jsx)(n.mermaid,{value:"graph TD\n  T1[Tenant 1] --- A[App 1]\n  T1 --- B[App 2]\n  T1 --- C[App 3]\n  T1 --- U1[User 1]\n  T1 --- U2[User 2]\n  T2[Tenant 2] --- D[App 1]\n  T2 --- E[App 2]\n  T2 --- U21[User 1]\n  T2 --- U22[User 2]"}),(0,t.jsx)(n.p,{children:"Logto offers a universal sign-in experience (i.e. SSO) within a Tenant, so users don\u2019t need to sign in again when accessing another app in the same Tenant if they already signed in."})]}),"\n",(0,t.jsx)(n.h2,{id:"what-we-talk-about-when-we-talk-about-sso",children:"What we talk about when we talk about SSO"}),"\n",(0,t.jsx)(n.p,{children:"We found the term \u201cSSO\u201d often causes confusion. We consider Single Sign-On(In) to be a behavior, not a business concept. Therefore, SSO does not equate to \u201cSSO in WIAM\u201d."}),"\n",(0,t.jsx)(n.p,{children:"When we say \u201cit needs SSO\u201d, it can refer to one of the following cases:"}),"\n",(0,t.jsx)(n.h3,{id:"sso-case-1",children:"SSO Case 1"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\ud83d\udc49\ud83c\udffd In a big corp, employees use the same credentials to sign in to all company-licensed resources (e.g. email, IM, cloud services)."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"It is the typical WIAM scenario. In this case, only one Identity Provider is involved. We don\u2019t care for now."}),"\n",(0,t.jsx)(n.h3,{id:"sso-case-2",children:"SSO Case 2"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\ud83d\udc49\ud83c\udffd End-users use the same credentials to sign in to all services developed by the same company (e.g. GSuite)."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Logto is currently focusing on the approach outlined above. Multiple external identity providers, such as a third-party social sign-in provider, may exist independently and without connection."}),"\n",(0,t.jsx)(n.p,{children:'Despite this, Logto remains the single source of truth for Identities, simply "borrowing" them from other providers. In this case, Logto acts as both an Identity Provider (to GSuite apps) and a Service Provider (to external Identity Providers).'}),"\n",(0,t.jsx)(n.h3,{id:"sso-case-3",children:"SSO Case 3"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\ud83d\udc49\ud83c\udffd End-users can only use the specific Identity Provider within the corresponding email domain to complete authentication. For example, signing in to Figma with Google Workspace."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This is the most common use case for SSO in CIAM. Let\u2019s take a closer look."}),"\n",(0,t.jsx)(n.p,{children:"If we want to sign in to Figma using our @silverhand.io email, we can use either Social sign-in or SSO. The figures below illustrate the difference between the two:"}),"\n",(0,t.jsxs)("div",{style:{padding:"2rem",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem"},children:[(0,t.jsx)("div",{children:(0,t.jsxs)("center",{children:[(0,t.jsx)(n.mermaid,{value:'graph TD\n  A(Figma home) --\x3e |"Click &quot;Sign in&quot;"| B(Sign-in page) --\x3e |"Click &quot;Sign in with Google&quot;"| C(Google)\n  C --\x3e |Redirect when finish| A'}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Social sign-in"})})]})}),(0,t.jsx)("div",{children:(0,t.jsxs)("center",{children:[(0,t.jsx)(n.mermaid,{value:'graph TD\n  A(Figma home) --\x3e |"Click &quot;Sign in&quot;"| S(Sign-in page) --\x3e |"Click &quot;Use SSO&quot;"| B(SSO page) --\x3e |"Enter email address"| C("X (explain later)") --\x3e |Redirect| D(Google Workspace)\n\tD --\x3e |Redirect when finish| A'}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"SSO"})})]})})]}),"\n",(0,t.jsx)(n.p,{children:"In words:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"After social sign-in, users are free to set a password or change the email address in Figma"}),"\n",(0,t.jsx)(n.li,{children:"After SSO, users cannot set password or change any personal info including email address, since their Identities are managed by Google Workspace"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this case, Logto is both an Identity Provider and a Service Provider. It appears that SSO is more complex than a normal sign-in process. What are the benefits for the identity owner?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Centralized control:"})," Keep identity information and authentication processes in one place, and ensure user information is always up-to-date. There is no need to add and remove licenses across different applications for changes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Improved user experience:"})," Identity owners who require SSO are usually corporations. Their employees can use the same credentials and shared session for cross-company applications, such as Figma, Zoom, Slack, etc."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Enhanced security:"})," You may have noticed that some corporations require specific sign-in methods, such as dynamic verification codes. Using SSO can ensure that every employee uses the same sign-in method combination for accessing all resources."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\ud83e\udd14 Smart like you must have noticed that this is actually ",(0,t.jsx)(n.strong,{children:"SSO Case 1"})," from the SaaS perspective."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'It\u2019s time to discuss the "X" in the SSO graph. This represents the process of Figma connecting the email domain to a specific Identity Provider. But, how does it work?'}),"\n",(0,t.jsx)(n.h2,{id:"sso-mapping",children:"SSO mapping"}),"\n",(0,t.jsx)(n.p,{children:'Since the request often comes from enterprise clients, we refer to the process of "SSO Case 3" from the previous section as "Enterprise SSO" for clarity.'}),"\n",(0,t.jsx)(n.p,{children:"We can easily devise a naive solution: create a mapping between email domains and SSO methods, then manually update it."}),"\n",(0,t.jsx)(n.p,{children:"The action of process \u201cX\u201d is now clear:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd0d ",(0,t.jsx)(n.strong,{children:"Find the mapped Enterprise SSO method of the given email domain"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Thus, if you configure ",(0,t.jsx)(n.code,{children:"silverhand.io"})," as a valid email domain that connects with a Google Workspace SSO URL, users who try to sign in with an ",(0,t.jsx)(n.code,{children:"@silverhand.io"})," email will be redirected to the corresponding Google Workspace sign-in page, instead of being processed in-place."]}),"\n",(0,t.jsx)(n.p,{children:"When you only have a few dozen clients that need Enterprise SSO, manually managing the mapping is okay. However, there are more considerations to take into account:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"What if there are hundreds or thousands Enterprise SSO clients?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"What\u2019s the relationship between \u201cnormal users\u201d and \u201cEnterprise SSO users\u201d?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"Should data be isolated between different Enterprise SSO clients?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"Is there a need to provide a dashboard for the Enterprise SSO admins to view active users, audit logs, etc.?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"How can accounts be automatically deactivated when a user is removed from the Enterprise SSO Identity Provider?"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"And a lot more. Since almost all Enterprise SSO are email-domain-based, we can quickly figure out a better solution:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the user can prove ownership of that domain, they can set up the enterprise SSO of that domain in a self-serve manner."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This solution addresses the first two questions:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"1. What if there are hundreds or thousands Enterprise SSO clients?"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"They can configure Enterprise SSO in a self-serve way."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"2. What\u2019s the relationship between \u201cnormal users\u201d and \u201cEnterprise SSO users\u201d?"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"We open all possible sign-in methods to normal users except Enterprise SSO; While we limit the sign-in method to Enterprise SSO only to the users who are trying to sign in with the configured domains."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As for the third question:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"3. Should I isolate data between different Enterprise SSO clients?"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Yes and no. It\u2018s time to introduce organization."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"organization",children:"Organization"}),"\n",(0,t.jsx)(n.p,{children:"We mentioned using email domains to recognize the specific Enterprise SSO method to use; in other words, applying a specific treatment for a specific batch of users."}),"\n",(0,t.jsx)(n.p,{children:"However, the client requirements are often more than just Enterprise SSO; for example, questions 4 and 5 in the previous section. Over the years, a mature model have been developed by outstanding SaaS companies to address these kinds of problems: Organizations."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Organizations rules"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"An organization is a group of identities, typically smaller than a Tenant."}),"\n",(0,t.jsx)(n.li,{children:"All organizations are associated with a Tenant."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'You may see other terms, such as "Workspace", \u201cTeam\u201d, or even "Tenant" in the software. To identify if it is the concept we are discussing, just check if it represents \u201ca group of Identities\u201d.'}),"\n",(0,t.jsx)(n.p,{children:'In this article, we will use the term "Organization" for consistency.'}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:['\ud83e\udd39\ud83c\udffd\u200d\u2640\ufe0f In most cases, "a group of Identities" is equivalent to "a group of users". However, ',(0,t.jsx)(n.strong,{children:"the same Identity can exist in multiple Organizations"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"In Notion, you can create and join multiple workspaces (i.e. Organizations) with the same email address and switch between them easily."}),"\n",(0,t.jsx)(n.p,{children:"For Slack, it appears to be the same, but we suspect it uses different Identities behind the scenes since we need to create a new account for each workspace."}),"\n",(0,t.jsxs)("div",{style:{padding:"2rem 3rem",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem"},children:[(0,t.jsxs)("center",{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Slack workspaces",src:i(70711).Z+"",width:"416",height:"354"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Slack workspaces"})})]}),(0,t.jsxs)("center",{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Notion workspaces",src:i(8906).Z+"",width:"526",height:"212"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Notion workspaces"})})]})]}),"\n",(0,t.jsx)(n.p,{children:"Notion has a \u201cPersonal Plan\u201d available, which is normally an Organization under the hood, with the sole user (you) inside. We don't know the exact implementation of Notion, but this explanation is reasonable and archivable for our model."}),"\n",(0,t.jsx)(n.p,{children:"Each Organization also has an identifier, usually referred to as the \u201cOrganization domain\u201d."}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:'An "Organization domain" is an internal identifier used to distinguish Organizations. It may differ from the "email domain", as the former is managed by the Service Provider, while the latter is usually provided by an external Identity Provider.'}),(0,t.jsxs)(n.p,{children:["For example, you can use ",(0,t.jsx)(n.code,{children:"foo"})," as the Organization domain in Slack, but use ",(0,t.jsx)(n.code,{children:"@bar.io"})," as the email domain for this Organization."]})]}),"\n",(0,t.jsx)(n.h3,{id:"quiz-1",children:"Quiz"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u2753 Can an app be associated with an Organization?"})}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)(n.p,{children:"Yes yes. As we discussed in the beginning, an app can have an Identity. Can you elaborate a business scenario of this?"})]}),"\n",(0,t.jsx)(n.h2,{id:"questions-remain",children:"Questions remain"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"3. Should data be isolated between different Enterprise SSO clients?"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Yes:"})," Isolate business data, such as messages and documents, at the Organization level."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"No:"})," Keep Identities independent, since they do not need to be associated with an Organization."]}),"\n",(0,t.jsx)(n.li,{children:"Note there are three distinct entities involved here: Identities, Organizations, and Enterprise SSO configurations; which notably increased the complexity. The question itself is not specific enough."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"4. Is there a need to provide a dashboard for the Enterprise SSO admins to view active users, audit logs, etc.?"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"5. How to automatically deactivate account when user is removed for the Enterprise SSO Identity Provider?"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"These demands are more business-oriented and can be implemented at Organization level. We'll leave them open here."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"closing-notes",children:"Closing notes"}),"\n",(0,t.jsx)(n.p,{children:"We've introduced several concepts: Authentication (AuthN), Authorization (AuthZ), Identity, Tenant, Application, Identity Provider (IdP), Service Provider (SP), Single Sign-On (SSO), and Enterprise SSO (Organization). It may take some time to understand them all."}),"\n",(0,t.jsx)(n.p,{children:"As I wrote this article, I noticed that interestingly, the most expensive plans of online services often include exclusive features related to authorization, which is totally unmentioned in this article. You may already have some questions about authorization, such as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"How can we assign permissions to a user and verify them?"}),"\n",(0,t.jsx)(n.li,{children:"What authorization model should I use?"}),"\n",(0,t.jsx)(n.li,{children:"What is the best practice for applying an authorization model?"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\ud83d\udd25 Take a break, and see you in CIAM 102!"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8906:function(e,n,i){n.Z=i.p+"assets/images/notion-workspaces-efa7827b5c42175d1babf17ab105f6f2.png"},70711:function(e,n,i){n.Z=i.p+"assets/images/slack-workspaces-a6c6ca44a1802582a796ed59969c73cc.png"},17279:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return a}});var t=i(50959);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);