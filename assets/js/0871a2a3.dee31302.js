"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[53291],{37959:function(e,i,n){n.r(i),n.d(i,{assets:function(){return l},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return h}});var s=n(11527),t=n(17279);function o(e){const i={admonition:"admonition",p:"p",...(0,t.a)(),...e.components};return(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:'Don\'t forget to click "Save changes" to make your customization go live.'})})}function r(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}const a={sidebar_label:"Configure sign-in methods",sidebar_position:1},d="Configure sign-in methods",c={id:"docs/recipes/customize-sie/configure-sign-in-methods",title:"Configure sign-in methods",description:"Join forces with the Console to set up an end-to-end sign-in experience for your customers.",source:"@site/versioned_docs/version-1.x/docs/recipes/customize-sie/configure-sign-in-methods.mdx",sourceDirName:"docs/recipes/customize-sie",slug:"/docs/recipes/customize-sie/configure-sign-in-methods",permalink:"/docs/recipes/customize-sie/configure-sign-in-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/customize-sie/configure-sign-in-methods.mdx",tags:[],version:"1.x",sidebarPosition:1,frontMatter:{sidebar_label:"Configure sign-in methods",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83c\udfa8 Customize sign-in experience",permalink:"/docs/recipes/customize-sie/"},next:{title:"Match your brand",permalink:"/docs/recipes/customize-sie/match-your-brand"}},l={},h=[{value:"Sign-up method",id:"sign-up-method",level:2},{value:"Sign-up identifier",id:"sign-up-identifier",level:3},{value:"Sign-up authentication",id:"sign-up-authentication",level:3},{value:"Sign-in method",id:"sign-in-method",level:2},{value:"Sign-in identifier and authentication",id:"sign-in-identifier-and-authentication",level:3},{value:"Social sign-in",id:"social-sign-in",level:2},{value:"Forget password",id:"forget-password",level:2},{value:"Disable User Registration",id:"disable-user-registration",level:2}];function u(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"configure-sign-in-methods",children:"Configure sign-in methods"}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(i.p,{children:"Join forces with the Console to set up an end-to-end sign-in experience for your customers."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Sign-in Experience dashboard",src:n(47031).Z+"",width:"2752",height:"2534"})}),"\n",(0,s.jsx)(i.h2,{id:"sign-up-method",children:"Sign-up method"}),"\n",(0,s.jsx)(i.h3,{id:"sign-up-identifier",children:"Sign-up identifier"}),"\n",(0,s.jsx)(i.p,{children:"The sign-up identification is the handle used to identify who you are and what information is required to register for the product. It is required information for account creation and must be included in the sign-in process. We offer four types of identifiers in the Sign-in Experience configuration,"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Email address"}),"\n",(0,s.jsx)(i.li,{children:"Phone number"}),"\n",(0,s.jsx)(i.li,{children:"Username"}),"\n",(0,s.jsx)(i.li,{children:"Email or Phone"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:'End users can create an account and access the product using any of these four methods. Furthermore, we support "none," which is appropriate for social-only account creation. In this instance, the only way to establish an account and sign in to the product is through social sign-in.'}),"\n",(0,s.jsx)(i.h3,{id:"sign-up-authentication",children:"Sign-up authentication"}),"\n",(0,s.jsx)(i.p,{children:"We require not just identifiers, but also authentication factors to specify the sign-up. By associating authentication factors with identifiers, you will lay a solid foundation for a successful and frictionless sign-up flow.\nWe presently support end-user authentication as follows,"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Verification code (password-less)"}),"\n",(0,s.jsx)(i.li,{children:"Password"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"However, the verification criteria cannot be combined in any isolated way with the identifiers given above. There are several restrictions to allow for real-world conditions."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"If you identifier is\u2026"}),(0,s.jsx)(i.th,{children:"Password"}),(0,s.jsx)(i.th,{children:"Verification code (password-less)"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Username"}),(0,s.jsx)(i.td,{children:"Required"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"N/A"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Email address"}),(0,s.jsx)(i.td,{children:"Optional"}),(0,s.jsx)(i.td,{children:"Required"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Phone"}),(0,s.jsx)(i.td,{children:"Optional"}),(0,s.jsx)(i.td,{children:"Required"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Email or Phone"}),(0,s.jsx)(i.td,{children:"Optional"}),(0,s.jsx)(i.td,{children:"Required"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"None"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"N/A"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"N/A"})})]})]})]}),"\n",(0,s.jsx)(i.p,{children:"For example, if you sign up with your email address, you must authenticate your account. We do not currently support unverified email at sign-up, but it will be added soon."}),"\n",(0,s.jsx)(i.p,{children:"Another example: if you choose username as your sign-up identifier, you must also choose password as one of your authentication factors."}),"\n",(0,s.jsx)(i.p,{children:'The checkboxes here form a "and" logic, which indicates that your sign-up procedure will include all of the ticked options as needed steps.'}),"\n",(0,s.jsx)(i.p,{children:"Here are two examples:"}),"\n",(0,s.jsx)(i.p,{children:"Sign-up method: Email address. Sign-up authentication: Password & Verification code."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Set sign-up methods 01",src:n(19238).Z+"",width:"3036",height:"1292"})}),"\n",(0,s.jsx)(i.p,{children:"Sign-up method: Email address or phone number. Sign-up authentication: Verification code."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Set sign-up methods 02",src:n(48928).Z+"",width:"3036",height:"1300"})}),"\n",(0,s.jsx)(i.h2,{id:"sign-in-method",children:"Sign-in method"}),"\n",(0,s.jsx)(i.h3,{id:"sign-in-identifier-and-authentication",children:"Sign-in identifier and authentication"}),"\n",(0,s.jsxs)(i.p,{children:["As previously stated, users may enter and complete additional information as they explore and utilize the product. Some of them should be accepted as ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.em,{children:"sign-in methods"})}),". That is why sign-in procedures differ from ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.em,{children:"sign-up methods"})}),'. Sign-in identifiers are the same as sign-up identifiers, except they form a "or" logic, which means users can use any of them to sign in.']}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Username"}),"\n",(0,s.jsx)(i.li,{children:"Phone number"}),"\n",(0,s.jsx)(i.li,{children:"Email address"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"You can add as many as you like and then drag and drop to determine who is at the top of the layout."}),"\n",(0,s.jsx)(i.p,{children:"In terms of authentication factors, you can activate either a password or a verification code for each identifier in your sign-in flow. Your sign-up identities and authentication factors also limited the capability. Here are some broad guidelines for creating a successful user flow for your consideration:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"If password is used as an authentication factor in sign-up\u2192 sign-in should also support it, and all other identifiers should as well. We don't want end users to waste time registering or neglecting their security intents. The requirement of a password for username sign-up but not for email/phone password sign-in makes no sense and confuses the user."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"If you simply use your username as your identifier during sign-up, you will need to create a password. This is because of the constraints and limitations of a username as a form of identification."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"In order to sign in, at least two of the sign-in choices that users choose when they registered must be active. If a user signs up with their email address but can only sign in with their phone number, they will be unable to utilize the product."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"If the username is the only identification used during registration, a password is required. Because of the restrictions and peculiarities of utilizing a username as an identification, this is the case."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:'If you choose "email", "phone number", or "phone number or email address" as sign-up identifiers, you must verify those identifiers at sign-up, and if you do not choose password as the sign-up authentication factor, you must activate verification code at sign-in. After selecting a password, the sign-in password must be enabled, and the verification code at sign-in can be unchecked.'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Although these guidelines may initially appear daunting, they quickly begin to feel like second nature as you experiment with them on your own. The hidden reasoning will save you from making mistakes that will have a detrimental effect on your user acquisition funnel."}),"\n",(0,s.jsx)(i.p,{children:"Here are two examples:"}),"\n",(0,s.jsx)(i.p,{children:"Sign-in identifier: Email address. Sign-in authentication: Password."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Set sign-in methods 01",src:n(19264).Z+"",width:"3036",height:"1316"})}),"\n",(0,s.jsx)(i.p,{children:"Sign-in identifier: Email address / Phone number. Sign-in authentication: Password / Verification code."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Set sign-in methods 02",src:n(79194).Z+"",width:"3036",height:"1300"})}),"\n",(0,s.jsx)(i.h2,{id:"social-sign-in",children:"Social sign-in"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Social sign-in"})," is a method of logging into third-party services using credentials from your existing social networking profiles. Signing up and logging in is simplified and hastened by using social sign-in due to the use of already established, trusted identifiers."]}),"\n",(0,s.jsx)(i.p,{children:"Your user may be requested to supply additional information when joining up with social accounts, depending on the sign-up identifiers you selected."}),"\n",(0,s.jsx)(i.p,{children:'For example, if you choose "email address" as the sign-up identifier, the social sign-up flow will also request users to fill out a new one, or link an existing account, depending on whether the account exists. But for faster sign-in, if the social account carries an unregistered \u201ctrusted email\u201d which is verified by trusted third-party social identity providers, like Gmail, GitHub, etc., the email address will be automatically filled in the user\u2019s profile.'}),"\n",(0,s.jsx)(i.p,{children:"You can also use drag and drop to change the order of how it appears on the UI, and if you add a lot of social sign-in, which we don't encourage, it will be hidden in the collapsed view."}),"\n",(0,s.jsx)(i.h2,{id:"forget-password",children:"Forget password"}),"\n",(0,s.jsx)(i.p,{children:"When you configure the Email or SMS connector, the forget password feature is automatically enabled. Passwords can be reset using a verified email address or phone number."}),"\n",(0,s.jsx)(i.p,{children:"You cannot currently use the old password when creating a new one. The restriction occurs only once."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Forgot your password",src:n(81508).Z+"",width:"3036",height:"1292"})}),"\n",(0,s.jsx)(i.h2,{id:"disable-user-registration",children:"Disable User Registration"}),"\n",(0,s.jsx)(i.p,{children:"In some circumstances, account creation must be restricted. Navigate to Sign-in Experience > Sign-up and sign-in > Advanced options. Turn the toggle off, and you're done. The account creation button will disappear from the sample page, and you will be unable to establish an account through social media."})]})}function p(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},47031:function(e,i,n){i.Z=n.p+"assets/images/sie-set-configure-method-d6295346abb9d1108379d07f5a6f2b2e.png"},81508:function(e,i,n){i.Z=n.p+"assets/images/sie-set-forgot-password-6871569c041b9aa31198e55585a2399f.png"},19264:function(e,i,n){i.Z=n.p+"assets/images/sie-set-sign-in-method-one-0084c5ced3d6b9e4bedef37b4cf88b42.png"},79194:function(e,i,n){i.Z=n.p+"assets/images/sie-set-sign-in-method-two-a6902c405d92a919cf0f2d65bcbba531.png"},19238:function(e,i,n){i.Z=n.p+"assets/images/sie-set-sign-up-method-one-3207c67e7912bdcb417edcd02db8e952.png"},48928:function(e,i,n){i.Z=n.p+"assets/images/sie-set-sign-up-method-two-7619546d6e4f1239b571b0420f490dfe.png"},17279:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return r}});var s=n(50959);const t={},o=s.createContext(t);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);