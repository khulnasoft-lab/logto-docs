"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3887],{98608:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return h}});var i=n(11527),s=n(17279);const o={sidebar_label:"WebAuthn (Passkey)",sidebar_position:3},a="WebAuthn (Passkey)",r={id:"docs/recipes/multi-factor-auth/webauthn",title:"WebAuthn (Passkey)",description:"Added in v1.11.0",source:"@site/docs/docs/recipes/multi-factor-auth/webauthn.md",sourceDirName:"docs/recipes/multi-factor-auth",slug:"/docs/recipes/multi-factor-auth/webauthn",permalink:"/next/docs/recipes/multi-factor-auth/webauthn",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/multi-factor-auth/webauthn.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"WebAuthn (Passkey)",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Authenticator app OTP",permalink:"/next/docs/recipes/multi-factor-auth/authenticator-app-otp"},next:{title:"Backup code",permalink:"/next/docs/recipes/multi-factor-auth/backup-code"}},c={},h=[{value:"Concepts",id:"concepts",level:2},{value:"Pay attention to limitations",id:"pay-attention-to-limitations",level:2},{value:"Auth flows",id:"auth-flows",level:2}];function l(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"webauthn-passkey",children:"WebAuthn (Passkey)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Added in v1.11.0"})}),"\n",(0,i.jsx)(t.p,{children:"WebAuthn provides a more secure and user-friendly alternative to traditional passwords. By using public-key cryptography, WebAuthn enhances security by linking the user's device, the service domain, and the user ID, effectively countering phishing and password attacks. Compatible with various devices or browsers, and allows users to employ biometrics and hardware security features for convenient authentication. Logto now supports WebAuthn for Multi-Factor Authentication (MFA)."}),"\n",(0,i.jsx)(t.h2,{id:"concepts",children:"Concepts"}),"\n",(0,i.jsx)(t.p,{children:"Customers always know Passkey rather than WebAuthn, so what\u2019s the relationship between them, and how to use them? Let's explore these concepts:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Passkey"}),': A passkey is a FIDO-based, phishing-resistant credential to replace passwords. It utilizes asymmetric public-key cryptography for enhanced security. It can be hardware tokens or security keys, such as USB or Bluetooth devices. Since "Passkey" is the authentication method displayed to users, it should be used within your product client.']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"WebAuthn"}),': It is a JavaScript API developed by the W3C and FIDO Alliance, that empowers web applications authentication with FIDO2 standards. Passkey is one of the authentication methods WebAuthn supports. In the Logto Console, we professionally refer to this integration as "WebAuthn.\u201d']}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"WebAuthn provides diverse authenticators for users to choose from, available in two types for local and cloud usage:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Platform authenticator (Internal authenticator)"}),": It is tied to a single and specific device OS, such as a computer, laptop, phone, or tablet, which the user signs in with. It works exclusively on the device for authorization using methods like biometrics or a device passcode, so it's a quick way to authenticate. E,g,. iCloud Keychain verified by Touch ID, Face ID, or device passcode on macOS or iOS; Windows Hello verified by facial recognition, fingerprint, or friendly PIN."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Roaming authenticator (External authenticator, Cross-platform authenticator)"}),": It is a separate, portable device or software application, such as a hardware security key or a smartphone. It should link the device using USB or keeping NFC or Bluetooth on. The roaming authenticator is not limited to a single device or browser, providing greater flexibility."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To delve deeper into the principles and processes of WebAuthn, you can refer to our blog posts: ",(0,i.jsx)(t.a,{href:"https://blog.logto.io/web-authn-and-passkey-101/",children:"WebAuthn and Passkey 101"})," and ",(0,i.jsx)(t.a,{href:"https://blog.logto.io/webauthn-base-knowledge/",children:"Things you should know before integrating WebAuthn"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"pay-attention-to-limitations",children:"Pay attention to limitations"}),"\n",(0,i.jsx)(t.p,{children:"It's essential to be aware of some limitations when implementing WebAuthn:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Platform and browser limitation"}),": It's important to note that Logto does not currently offer WebAuthn support for native applications. Additionally, the availability of WebAuthn authenticators depends on browser and device capabilities (",(0,i.jsx)(t.a,{href:"https://caniuse.com/?search=webauthn",children:"Check the list"}),"). Therefore, WebAuthn is always not the sole option for implementing Multi-Factor Authentication (MFA), otherwise, you can control which browsers and devices can access your product."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Domain limitation"}),": Changing the domain can hinder user verification through their existing WebAuthn accounts. Passkeys are bound to the specific domain of the current web page and cannot be used across different domains."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Device limitation"}),': Losing the device can result in a loss of access to their accounts, especially for those relying on "This device" Platform Authenticators. To enhance authentication access, it\'s advisable to provide users with more than one authentication factor.']}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"auth-flows",children:"Auth flows"}),"\n",(0,i.jsx)(t.p,{children:"The Passkey specification requires users to actively click the button on the current page to initiate the authentication component. This means that in both the setup and verification flows, users should be redirected to the landing page to initiate WebAuthn."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Setup flows"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"WebAuthn setup flow",src:n(24076).Z+"",width:"3052",height:"1552"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Verification flows"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"WebAuthn verification flow",src:n(43032).Z+"",width:"3052",height:"1552"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},24076:function(e,t,n){t.Z=n.p+"assets/images/webauthn-setup-flow-6d031c36372538dbc3e670d5f9b89640.webp"},43032:function(e,t,n){t.Z=n.p+"assets/images/webauthn-verification-flow-936695104f11695858ed158cd9b518c0.webp"},17279:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return a}});var i=n(50959);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);