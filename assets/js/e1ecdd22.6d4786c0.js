"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[54190],{75443:function(e,n,i){i.r(n),i.d(n,{assets:function(){return d},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c}});var s=i(11527),t=i(17279),o=i(60537);const r={slug:"design-for-seamless-sie-1",authors:["guamian","rany"],tags:["design","sign-in","ux"]},a="The design considerations for a seamless sign-in experience (First Chapter)",l={permalink:"/blog/design-for-seamless-sie-1",source:"@site/blog/2022-11-15-design-for-seamless-sie-1/index.mdx",title:"The design considerations for a seamless sign-in experience (First Chapter)",description:"We are thrilled to announce the release of the newest version of the Sign-in Experience, which includes more ways to sign-in and sign-up, as well as a framework that is easier to understand and more flexible to configure in the Admin Console. When compared to Sign-in Experience V1, this version's capability was expanded so that it could support a greater variety of flexible use cases. We hope that this will be able to assist developers in delivering a successful sign-in flow, which will also be appreciated by the end users.",date:"2022-11-15T00:00:00.000Z",formattedDate:"November 15, 2022",tags:[{label:"design",permalink:"/blog/tags/design"},{label:"sign-in",permalink:"/blog/tags/sign-in"},{label:"ux",permalink:"/blog/tags/ux"}],readingTime:15.065,hasTruncateMarker:!0,authors:[{name:"Guamian",title:"Product & Design at Silverhand",url:"https://github.com/fleuraly",imageURL:"https://github.com/fleuraly.png",key:"guamian"},{name:"Ran",title:"Product & Design at Silverhand",url:"https://github.com/Rany0101",imageURL:"https://github.com/Rany0101.png",key:"rany"}],frontMatter:{slug:"design-for-seamless-sie-1",authors:["guamian","rany"],tags:["design","sign-in","ux"]},unlisted:!1,prevItem:{title:"CIAM 101: Authentication, Identity, SSO",permalink:"/blog/ciam-101-intro-authn-sso"},nextItem:{title:"Logto x Hasura: How to use open-source auth + GraphQL solution to boost your project",permalink:"/blog/logto-x-hasura"}},d={authorsImageUrls:[void 0,void 0]},c=[{value:"Why do we design an end-to-end Sign-in Experience?",id:"why-do-we-design-an-end-to-end-sign-in-experience",level:2},{value:"Painpoints",id:"painpoints",level:3},{value:"Developer, Team (Builders)",id:"developer-team-builders",level:4},{value:"Business stakeholders",id:"business-stakeholders",level:4},{value:"End customers",id:"end-customers",level:4},{value:"Similar solutions in the market",id:"similar-solutions-in-the-market",level:4},{value:"Our solutions so far",id:"our-solutions-so-far",level:2},{value:"Modularize Sign-in Experience like LEGO blocks, atomic but scalable",id:"modularize-sign-in-experience-like-lego-blocks-atomic-but-scalable",level:2},{value:"Step 1: Define methods",id:"step-1-define-methods",level:3},{value:"Identifier",id:"identifier",level:4},{value:"Authentication Factor",id:"authentication-factor",level:4},{value:"Third-party connector",id:"third-party-connector",level:4},{value:"Personal information",id:"personal-information",level:4},{value:"Step 2: Design an ideal flow",id:"step-2-design-an-ideal-flow",level:3},{value:"Step 3: Guide by UX design strategies",id:"step-3-guide-by-ux-design-strategies",level:3},{value:"Step 4: Brand and look and feel",id:"step-4-brand-and-look-and-feel",level:3},{value:"Closing notes",id:"closing-notes",level:2}];function h(e){const n={em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"We are thrilled to announce the release of the newest version of the Sign-in Experience, which includes more ways to sign-in and sign-up, as well as a framework that is easier to understand and more flexible to configure in the Admin Console. When compared to Sign-in Experience V1, this version's capability was expanded so that it could support a greater variety of flexible use cases. We hope that this will be able to assist developers in delivering a successful sign-in flow, which will also be appreciated by the end users."}),"\n",(0,s.jsx)(n.p,{children:"In this article, we'll go over the history of Sign-in Experience, including its conception, design decisions, and product tradeoffs. You will also gain a better grasp of how to construct a successful and frictionless sign-in or sign-up experience."}),"\n",(0,s.jsx)(n.p,{children:"If you're unfamiliar with Logto, let me back up a bit and define it, as well as the connection between Logto and the Sign-in Experience."}),"\n",(0,s.jsx)(n.p,{children:"As an OIDC-based identity service, Logto is available as open source software allowing professionals, groups, and companies to set up the necessary sign-in and identity infrastructure in a matter of minutes."}),"\n",(0,s.jsxs)("center",{style:{margin:"2rem"},children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:o.Z,alt:"Architecture",width:"640"})}),(0,s.jsx)("div",{children:(0,s.jsx)("i",{children:"Our portfolio and key components of Logto"})})]}),"\n",(0,s.jsx)(n.p,{children:"Providing a straightforward sign-up process forms one of our top priorities. The sign-in process can be quickly customized by developers using the Admin Console without the need for any custom coding."}),"\n",(0,s.jsx)(n.h2,{id:"why-do-we-design-an-end-to-end-sign-in-experience",children:"Why do we design an end-to-end Sign-in Experience?"}),"\n",(0,s.jsx)(n.p,{children:"We saw a lot of challenges and problems in the market before we started Logto, and that's why we spent tonnes of time researching and talking to customers, developers, and businesses that were having trouble with their sign-up processes."}),"\n",(0,s.jsx)(n.h3,{id:"painpoints",children:"Painpoints"}),"\n",(0,s.jsx)(n.h4,{id:"developer-team-builders",children:"Developer, Team (Builders)"}),"\n",(0,s.jsx)(n.p,{children:"Creating a smooth sign-up process is a mundane but intricate endeavor. Tasks like composing 0-1 front-end code and ensuring platform consistency is a challenging problem. Unfortunately, this problem is exacerbated for the early-stage startup or for individual developers because there is no professional design or product team to help them. If developers didn't have to deal with and manage the chore, they could put more effort into the main product and other impactful priorities."}),"\n",(0,s.jsx)(n.h4,{id:"business-stakeholders",children:"Business stakeholders"}),"\n",(0,s.jsx)(n.p,{children:"A self-serve Sign-up flow is a standard tactic for user acquisition. It takes into account the requirements of multiple disciplines and data growth. Building a Sign-in and sign-up process that has everyone happy requires a lot of back-and-forth because of all the decisions that need to be made."}),"\n",(0,s.jsx)(n.h4,{id:"end-customers",children:"End customers"}),"\n",(0,s.jsx)(n.p,{children:"Quick and smooth is the key and a single blocker can ruin the whole game. For example, multiple unnecessary accounts, blocked by terribly designed flow are definitely huge concerns for the end users. Security and privacy are seriously taken care of too. An untrusted flow or sign-in UI can prevent users from moving forwards and end up dropping off the product."}),"\n",(0,s.jsx)(n.h4,{id:"similar-solutions-in-the-market",children:"Similar solutions in the market"}),"\n",(0,s.jsx)(n.p,{children:"We're not naive; we know there are other open-source sign-in flow solutions out there. However,\nfew authentication and identification options are supported."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Their user interface lacks polish and personalization and neglects user experience and accessibility."}),"\n",(0,s.jsx)(n.li,{children:'The latest trends, such as supporting localization and a "dark mode," are rarely implemented.'}),"\n",(0,s.jsx)(n.li,{children:"There is a lack of end-user testing and verification of the entire process."}),"\n",(0,s.jsx)(n.li,{children:"There are only a handful of industry-tested solutions, and they are prohibitively expensive, making them unattainable for most individuals, small teams, and startups."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Furthermore, the final user experience between consumer-facing apps and B2B SaaS products is very different. Focusing on customer identity first and being business and industry-agnostic \u2014 taking on the Sign-in Experience happening in our daily lives, such as e-commerce, food delivery, and entertainment \u2014 is important to us because it will allow us to make an accessible product and build the strong foundation step by step. In the meantime, think ahead and keep exploring extensive user cases of sign-in for different verticals that can be simply applied to many types of businesses in the near future."}),"\n",(0,s.jsx)(n.p,{children:"With that in mind, we aim to make this step so easy that even those with no prior experience with programming may set up a self-serve sign-up process. Logto V1 was released in July 2022 and has since had a lot of positive feedback from users all across the world, helping us reach 4.4k stars in just two months with limited promotional resources. This motivates us to keep going! It was important to us to make sure that our global audience could use our service, therefore we added support for additional sign-in methods in version 2. Compare Version 1 to Version 2 and see what we backed first."}),"\n",(0,s.jsx)(n.h2,{id:"our-solutions-so-far",children:"Our solutions so far"}),"\n",(0,s.jsxs)("center",{style:{margin:"2rem"},children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"New sign-in experience preview",src:i(14282).Z+"",width:"2880",height:"2388"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Logto Sign-in Experience v2 Preview"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Compare v1 and v2",src:i(65612).Z+"",width:"2158",height:"1382"})}),"\n",(0,s.jsx)(n.p,{children:"Now that you know what we brought to the table in V2, let's examine the road we took to get there and the backstory that led us here."}),"\n",(0,s.jsx)(n.h2,{id:"modularize-sign-in-experience-like-lego-blocks-atomic-but-scalable",children:"Modularize Sign-in Experience like LEGO blocks, atomic but scalable"}),"\n",(0,s.jsx)(n.p,{children:"Our difficulty as an open-source project is that Logto should be flexible enough to meet the needs of developers working on a wide range of products and with varying degrees of customization. That said, our product might inevitably become a complex monster devoid of special opinions if we aim to cover every possible circumstance."}),"\n",(0,s.jsx)(n.p,{children:"Our strategic solution to the above is to base ourselves in the actual world while approaching Sign-in Experience as though it were a LEGO set\u2014individual pieces that may be combined to become something larger."}),"\n",(0,s.jsx)(n.p,{children:"As a first step, we surveyed the login procedures of over a hundred apps in various industries and held one-on-one discussions with app creators and end users in the Logto Discord Community. We organized the product challenges into four pillars after considering many viewpoints; they are also the most common issues encountered by construction professionals."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Define methods"}),"\n",(0,s.jsx)(n.li,{children:"Design an ideal flow"}),"\n",(0,s.jsx)(n.li,{children:"Guided by UX strategies"}),"\n",(0,s.jsx)(n.li,{children:"Customize the look and feel"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The market's validation of usage frequency and popularity was used to determine the priority of certain features under each pillar."}),"\n",(0,s.jsx)(n.p,{children:"We seek to provide the best practices within the scope of fundamental functions (both universal and extensible), bridge the gap between scenarios, and make it easy for developers to grasp Admin Console's complicated logic in the critical 0-1 window. Whether a developer is highly experimental and has no ideas at all, or highly targeted and has a precise UI design in hand, Sign-in Experience may be configured seamlessly in any case."}),"\n",(0,s.jsx)(n.p,{children:"So, let's take a closer look at these four cornerstones:"}),"\n",(0,s.jsx)(n.h3,{id:"step-1-define-methods",children:"Step 1: Define methods"}),"\n",(0,s.jsx)(n.p,{children:"We break down the example sign-in into four categories: identifier, authentication factor, third-party connector, and personal information. Components like these make up the sign-in process for thousands of users. The final user experience, however, varies widely depending on the specifics of each situation. There are benefits to each approach; developers should consider their needs before settling on one."}),"\n",(0,s.jsx)(n.h4,{id:"identifier",children:"Identifier"}),"\n",(0,s.jsx)(n.p,{children:"Let's first take a look at the popular identifiers and their pros and cons:"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Username"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"A user's username is frequently disclosed anonymously as a unique identifier. It is\nappropriate for social products such as content, games, instant messaging, and so on. It\ncan be configured by the user or selected by the system."})}),(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"When registering, a username can be used in conjunction with an email address or a phone\nnumber to offer users one more reminder information. A username is also a secure\nidentifier that does not reveal too much personal information."})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Email"})}),(0,s.jsx)("td",{children:(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"In the long run, users can simply recall their email addresses, and there are no device\nrestrictions for getting verification emails. Subscriptions or win-back campaigns can also\nbe sent to users' email addresses for marketing objectives."})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Phone"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"The use of a phone number as an identity is more mobile and accessible to the elderly. Its\nadvantages include real-name authentication, timely interaction with the user, and access\nto the user's contacts list for connection."})}),(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"However, there are issues like changing mobile phone numbers, using used numbers, leaking\ncontact information, and requiring devices to be present while signing in or signing up."})})]})]})]})}),"\n",(0,s.jsx)(n.h4,{id:"authentication-factor",children:"Authentication Factor"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Password"})}),(0,s.jsx)("td",{children:(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"Password sign-in is convenient, but users sometimes forget it. Low-complexity password is\nat risk of theft."})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Email verification"})}),(0,s.jsx)("td",{children:(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"Email Verification Codes or Magic links are the most popular ways for verification. It has\nhigher security but is cheaper than SMS."})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"SMS"})}),(0,s.jsx)("td",{children:(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"SMS is also more secure. The autofill feature of the keyboard facilitates mobile input.\nHowever, it may result in additional SMS charges."})})})]})]})}),"\n",(0,s.jsx)(n.h4,{id:"third-party-connector",children:"Third-party connector"}),"\n",(0,s.jsx)("table",{children:(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Social Connector"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"According to Google Account and Facebook data, implementing Social Sign-in can strengthen\nthe acquisition funnel and raise registration rates. Users may sign in with a single\nclick, synchronize personal information with a more convenient and confident sense, and\navoid forgetting passwords or email addresses used to sign up."})}),(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"The drawback is that third-party service quality and product life will limit the Sign-in\nExperience. If the social connector does not give trustworthy contact information, the\nuser must provide the necessary contact information; otherwise, the user cannot be\ncontacted."})})]})]})})}),"\n",(0,s.jsx)(n.h4,{id:"personal-information",children:"Personal information"}),"\n",(0,s.jsx)("table",{children:(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Personal information"})}),(0,s.jsx)("td",{children:(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"Contact information, name, gender, age, region, address, user preferences, and other\npersonal information provided by users can be used for display, account recovery,\npersonalized recommendations, product data analysis, and other purposes. It is a standard\naffiliate and business-neutral component of the sign-up process."})})})]})})}),"\n",(0,s.jsx)(n.h3,{id:"step-2-design-an-ideal-flow",children:"Step 2: Design an ideal flow"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"What does flow mean in Sign-in Experience\uff1f"})}),"\n",(0,s.jsx)(n.p,{children:'There is more to the Sign-in Experience than just the layout. The layout is simple, and a preview may be seen on the left while you work on it. In this context, "flow" refers to the entire sign-up process that a user would go through. We intend to handle the entire trip, which has traditionally been a difficult job for developers.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Atomized the flow"})}),"\n",(0,s.jsx)(n.p,{children:"Developers can utilize the Logto Sign-in Experience in a flexible manner by breaking down the full process into its component parts. With this mental modal, you will then develop a mindmap like below, which is all you need to consider when you design an end-to-end sign-in experience for your end customer."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Mind map",src:i(68164).Z+"",width:"2722",height:"1670"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Standardized the flow and guard by carefully considered product logic"})}),"\n",(0,s.jsx)(n.p,{children:"To establish the framework, we have to provide the best practice for each individual flow mentioned above. Those best practices were based on well-considered product logic, user-center design principles, and business objectives. We keep generality and inclusiveness at the same time."}),"\n",(0,s.jsx)(n.p,{children:"A lot of Logto competitor treats the flow like an easy permutation and combination task but it is definitely not true. Let\u2019s talk about the constraints and laws between them:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Sign in \u2260 Create Account"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'Methods of sign-in and registration are neither equal nor inclusive. Some programs, for example, request "Email+Password+Email Verification code" when signing up but only support "Email+Password" as a sign-in method.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Mobile sign-in",src:i(90867).Z+"",width:"3600",height:"2040"})}),"\n",(0,s.jsx)(n.p,{children:"In another case, requiring to enter a username when registering, but there is no option for Username sign-in."}),"\n",(0,s.jsx)(n.p,{children:"Distinct scenarios have different goals, resulting in various product logic. We will not only examine the variety of logic but also delve deeper into why. In summary, the difference between creating an account and sign-in is listed below:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Purpose"})}),(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Flow"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Create account"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"The purpose of creating an account is to ask consumers for identifying information while\nalso acquiring users with the least amount of effort from a commercial standpoint."})}),(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"There is a trade-off between doing the fewest steps and gathering more information from\nend users. Fewer steps indicate higher conversion rates, but they may result in\nlow-quality targeted users and leads, which could harm future customer support and product\ngrowth."})}),(0,s.jsx)("p",{children:"Simultaneously, the registration rate might be increased."})]}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:'Between various IDs, the logic is "and." Because this is a product requirement, consumers\nmust fill all of them at the same time (some factors can be skipped).'})}),(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:'There is just one exception, "Phone or Email," because consumers validating two pieces of\ncontact information at the same time is time-consuming and unneeded.'})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Sign in"})}),(0,s.jsx)("td",{children:(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"Sign-purpose is to allow users to access the product quickly, securely, and successfully."})})}),(0,s.jsx)("td",{children:(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:'Between various IDs, the logic is "or." That implies consumers can use whichever sign-in\ntechnique they like. The less complicated, the better. (Multi-factor authentication\ninstances are excluded here)'})})})]})]})]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Sign in + Create an account \u2264 Profile"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"All sign-in and registration information is stored in a profile. However, don't feel rushed to obtain all of the information during registration. Allow users to register successfully first and then access user information incrementally in specified instances. The contact information that the user enters proactively in the Profile may be used in the sign-in procedures. As a result, sign-in methods may be more than just sign-up methods."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Restrictions between Sign-in, Registration, and Authentication Factors, for example:"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If password is used as an authentication factor \u2192 sign-in should support it as well, and all other identifiers must support password as well. We don't want consumers to complete pointless efforts or to disregard their security intentions while registering. The fact that a password is necessary for sign-up with a username but not for email or phone password sign-in makes no sense and confuses the user."}),"\n",(0,s.jsx)(n.li,{children:"If users enabled multiple identifiers during registration, such as email or phone number, both of those identifiers must be available for sign-in. For example, if a person signs up using their email address but only founds phone number sign-in option, they will be unable to use the product in the end."}),"\n",(0,s.jsx)(n.li,{children:"A password is necessary if the username is the only identifier used during registration. This is owing to the limitations and characteristics of using a username as an identifier."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"step-3-guide-by-ux-design-strategies",children:"Step 3: Guide by UX design strategies"}),"\n",(0,s.jsx)(n.p,{children:"Logto delivers flows that are governed by a few end-user-centered tactics to enable the finest end-user experience. You can get a sense of what we insist on in terms of UX design by looking at the examples below."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Security first"})}),"\n",(0,s.jsx)(n.p,{children:"Security is unquestionably crucial in terms of sign-in experience and user identity. We took this approach seriously and put it into action. For example, when a user wants to verify an email address, we only alert the user that the account already exists until the user enters the verification code and verifies. In this strategy, we prevent someone from hacking a list of emails that do not exist."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Mobile sign-in",src:i(42453).Z+"",width:"5400",height:"3060"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Anticipate user needs and avoid meaningless attempts"})}),"\n",(0,s.jsx)(n.p,{children:"This is done to prevent pointless efforts at creating a successful outcome. The login process is convoluted and full of edge cases. When an account is found, for instance, the user is prompted to log in. When a person attempts to sign in and their account already does not exist, we will ask them if they would want to create an account."}),"\n",(0,s.jsx)(n.p,{children:"This foresight allows customers to get up and running with the product with minimal delay."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Mobile sign-in",src:i(9558).Z+"",width:"5400",height:"3060"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Consider account upgrades"})}),"\n",(0,s.jsx)(n.p,{children:"Account upgrades may also result in a change in the sign-in or sign-up flow. This will also have an influence on our end-user engagement. This scenario should also be considered. For example, if the administrator makes some modifications and adds new sign-in methods in the admin dashboard, existing end users will be required to sign in to the app."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Mobile sign-in",src:i(5772).Z+"",width:"5400",height:"3060"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Making the choice easier for users"})}),"\n",(0,s.jsx)(n.p,{children:"For example, we advise developers not to use too many social sign-in methods and if they are too many they will be hidden in another view because this would result in a poorer conversion. We don't include everything equally in the UI layout of the sign-in experience, but we do have a focus. This is to adhere to general design principles of usability and a better acquisition approach. At the same time, this is done to reduce users\u2019 cognitive load."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"step-4-brand-and-look-and-feel",children:"Step 4: Brand and look and feel"}),"\n",(0,s.jsx)(n.p,{children:"Last but not least, we provide users with lots of flexibility to customize their look and feel."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Modification of Brand elements, such as the selection of theme color, the replacement of a logo image, changes to component settings, and the selection of standard layouts, can all be accomplished with just one click when working with developers."}),"\n",(0,s.jsx)(n.li,{children:"Maintain as much uniformity as possible across all multi-end design plans in order to make it easier for developers to intuitively comprehend and adjust UI. Mobile and web, for instance, use layouts, processes, components, and styles that are equivalent to one another."}),"\n",(0,s.jsx)(n.li,{children:"In comparison to more conventional business tools, we put in a lot of work to ensure that the design is elegant. We came up with the formulas for calculating the brand colors, the dark mode, the internationalization of languages, and the barrier-free strategy."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"closing-notes",children:"Closing notes"}),"\n",(0,s.jsx)(n.p,{children:"Thank you for spending time reading about our Logto Sign-in Experience. You might have the following questions:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"How can this be accomplished with the least amount of work in Logto Admin Console?"}),"\n",(0,s.jsx)(n.li,{children:"How does your configuration experience vary from existing market solutions? Why is it the greatest option for my company?"}),"\n",(0,s.jsx)(n.li,{children:"How can the success of sign-ups be measured from a business standpoint? Have you thought about it yet?"}),"\n",(0,s.jsx)(n.li,{children:"What is Logto\u2019s upcoming plan for supporting you and your product?"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},60537:function(e,n,i){n.Z=i.p+"assets/images/architecture-65c09e8d0706b7221a824f9178da3aa0.png"},65612:function(e,n,i){n.Z=i.p+"assets/images/compare-v1-v2-e05a3f39b20df29379659ed74becbe1d.png"},68164:function(e,n,i){n.Z=i.p+"assets/images/mind-map-6cf4022c50c379a0a562756d9ff2705b.png"},42453:function(e,n,i){n.Z=i.p+"assets/images/mobile-sign-in-2-5d234179b74f90533ecba03d0c7bd86f.png"},9558:function(e,n,i){n.Z=i.p+"assets/images/mobile-sign-in-3-82d41c2d749f3c0881ce934964f5380e.png"},5772:function(e,n,i){n.Z=i.p+"assets/images/mobile-sign-in-4-46a09f3e07aca529316270f7104c9946.png"},90867:function(e,n,i){n.Z=i.p+"assets/images/mobile-sign-in-a22462848fc3adbe9e8a68c75b7fa238.png"},14282:function(e,n,i){n.Z=i.p+"assets/images/sie-preview-7a951b0edbaedf5c3eafae65b520d2db.png"},17279:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return r}});var s=i(50959);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);