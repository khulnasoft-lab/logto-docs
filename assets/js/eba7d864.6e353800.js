"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[51679],{43001:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return l}});var i=t(11527),o=t(17279);const s={sidebar_position:12},r="\ud83d\udd11 Signing keys",a={id:"docs/recipes/signing-keys-rotation/README",title:"\ud83d\udd11 Signing keys",description:"What are signing keys in Logto?",source:"@site/docs/docs/recipes/signing-keys-rotation/README.md",sourceDirName:"docs/recipes/signing-keys-rotation",slug:"/docs/recipes/signing-keys-rotation/",permalink:"/next/docs/recipes/signing-keys-rotation/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/signing-keys-rotation/README.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"docsSidebar",previous:{title:"\ud83d\uddc4\ufe0f Enable central cache",permalink:"/next/docs/recipes/enable-central-cache/"},next:{title:"\ud83c\udff7\ufe0f Tenant type",permalink:"/next/docs/recipes/tenant-type/"}},c={},l=[{value:"What are signing keys in Logto?",id:"what-are-signing-keys-in-logto",level:2},{value:"How it works?",id:"how-it-works",level:2},{value:"Signing keys rotation",id:"signing-keys-rotation",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"-signing-keys",children:"\ud83d\udd11 Signing keys"}),"\n",(0,i.jsx)(n.h2,{id:"what-are-signing-keys-in-logto",children:"What are signing keys in Logto?"}),"\n",(0,i.jsx)(n.p,{children:"Logto OIDC signing keys, as known as \u201cOIDC private keys\u201d and \u201cOIDC cookie keys\u201d, are the signing keys used to encrypt JWT tokens (access tokens and ID tokens) and browser cookies in Logto sign-in sessions. These signing keys are generated when seeding Logto database (open-source) or creating a new tenant (Cloud)."}),"\n",(0,i.jsx)(n.p,{children:"The signing keys are applied to the entire Logto instance (a Logto open-source instance or a Cloud tenant). Different Logto instances hold their own set of private keys and cookie keys, which can be managed through CLI (open-source), management APIs or Console UI (Cloud)."}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How it works?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OIDC private key"}),": When initializing a Logto instance, a pair of public key and private key are automatically generated and are registered in the underlying OIDC provider. Thereby, when Logto issues a new JWT token (access token or ID token), the token is signed with the private key. In the meantime, any client application that receives a JWT token can use the paired public key to verify the token signature, in order to ensure the token is not tampered by any third-party. The private key is protected on the Logto server. The public key, however, as the name suggests, are public to everyone, and can be accessed through the ",(0,i.jsx)(n.code,{children:"/oidc/jwks"})," interface of the OIDC endpoint.\nA signing key algorithm can be specified when generating the private key, and Logto uses EC (Elliptic Curve) algorithm by default. The admin users can change the default algorithm to RSA (Rivest\u2013Shamir\u2013Adleman) by rotating the private keys."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OIDC cookie key"}),": When user initiate a sign-in or sign-up flow, an \u201cOIDC session\u201d will be created on the server, as well as a set of browser cookies. With the help of the cookies, the users do not have to provide the sign-in credentials every time they launch Logto or other client applications protected by Logto. This feature is called \u201cauto consent\u201d in Logto terminology. The OIDC cookie key is used to sign these browser cookies.\nHowever, unlike the JWT tokens, the cookies are only signed and verified by Logto OIDC service itself, asymmetric cryptography measures are not required. Thus we don\u2019t have paired public keys for cookie signing keys, nor asymmetric encryption algorithms."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"signing-keys-rotation",children:"Signing keys rotation"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If you are Logto open source user, please refer to ",(0,i.jsx)(n.a,{href:"/next/docs/references/using-cli/rotate-signing-keys",children:"this tutorial"})," to generate new signing keys using CLI."]})}),"\n",(0,i.jsx)(n.p,{children:"Logto Cloud introduces a \u201cSigning Keys Rotation\u201d feature, which allows you to create a new OIDC private key and cookie key in your tenant."}),"\n",(0,i.jsx)(n.p,{children:'Navigate to the tenant settings page and find the "Signing keys" section. From there, you can manage both OIDC private keys and OIDC cookie keys.'}),"\n",(0,i.jsx)(n.p,{children:"In this section, you'll find a table that lists all the signing keys in use."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Status"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Current"}),(0,i.jsx)(n.td,{children:"This indicates that this key is currently in active use within your applications and APIs."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Previous"}),(0,i.jsx)(n.td,{children:"It refers to a key that was previously used but has been rotated out. Existing tokens with this signing key remain valid."})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Console UI",src:t(67130).Z+"",width:"2336",height:"874"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"You can delete the previous key, but you cannot delete the current one."})}),"\n",(0,i.jsx)(n.p,{children:'To rotate the signing key, go to the appropriate tab. Click the "Rotate private keys" or "Rotate cookie keys" button. When rotating private keys, you have the option to change the signing algorithm.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Rotate keys dialog UI",src:t(26127).Z+"",width:"2640",height:"784"})}),"\n",(0,i.jsx)(n.p,{children:"Please remember that rotation involves the following three actions:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Creating a new signing key: This will require all your applications and APIs to adopt the new signing key."}),"\n",(0,i.jsx)(n.li,{children:'Rotating the current key: The existing key will be designated as "previous" after the rotation and will not be utilized by newly created applications and APIs. However, tokens signed with this key will still remain valid.'}),"\n",(0,i.jsx)(n.li,{children:'Removing your previous key: Keys labeled as "previous" will be revoked and removed from the table.'}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},67130:function(e,n,t){n.Z=t.p+"assets/images/console-rotate-keys-991618289a34be5bd3b7ba7d8cb5d904.webp"},26127:function(e,n,t){n.Z=t.p+"assets/images/rotate-keys-66e729708a657330cabb804f0cf3202d.webp"},17279:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(50959);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);