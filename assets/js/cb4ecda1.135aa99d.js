"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[57589],{7540:(e,n,t)=>{t.d(n,{ZP:()=>a});var o=t(11527),s=t(17279);function i(e){const n={admonition:"admonition",p:"p",...(0,s.a)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:['This guide assumes you have created an Application of type "',e.type,'" in Admin\nConsole.']})})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},43459:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>h,toc:()=>p});var o=t(11527),s=t(17279);const i=t.p+"assets/images/api-identifier-ee920efff60f2af5efc6c726244393c1.png",a=t.p+"assets/images/app-id-secret-af29845d7768be05909995293bef45d9.png";var c=t(7540);const r={slug:"/sdk/m2m",sidebar_label:"General guide"},d="Machine-to-machine: Auth with Logto",h={id:"sdk/machine-to-machine/general/README",title:"Machine-to-machine: Auth with Logto",description:"Intro",source:"@site/docs/sdk/machine-to-machine/general/README.mdx",sourceDirName:"sdk/machine-to-machine/general",slug:"/sdk/m2m",permalink:"/sdk/m2m",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/machine-to-machine/general/README.mdx",tags:[],version:"current",frontMatter:{slug:"/sdk/m2m",sidebar_label:"General guide"},sidebar:"sdkSidebar",previous:{title:"iOS (Swift)",permalink:"/sdk/swift"}},l={},p=[{value:"Intro",id:"intro",level:2},{value:"Fetch an Access Token",id:"fetch-an-access-token",level:2},{value:"Locate the App ID and App Secret",id:"locate-the-app-id-and-app-secret",level:3},{value:"Locate the API Resource",id:"locate-the-api-resource",level:3},{value:"Access Logto Management API",id:"access-logto-management-api",level:4},{value:"Compose and send the request",id:"compose-and-send-the-request",level:3},{value:"Token response",id:"token-response",level:3},{value:"Access resource using Access Token",id:"access-resource-using-access-token",level:2},{value:"Authentication",id:"authentication",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"machine-to-machine-auth-with-logto",children:"Machine-to-machine: Auth with Logto"}),"\n",(0,o.jsx)(c.ZP,{type:"Machine-to-machine"}),"\n",(0,o.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,o.jsx)(n.p,{children:"Machine-to-machine (M2M) is a common practice to authenticate if you have an app that needs to directly talks to resources. E.g., an API service that updates users' custom data in Logto, a statistic service that pulls daily orders, etc."}),"\n",(0,o.jsx)(n.p,{children:"Usually, an M2M app doesn't need user interactions, i.e., it has no UI."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Logto does not currently support the M2M app to represent a user. The ",(0,o.jsx)(n.code,{children:"sub"})," of the Access Token will be the App ID."]})}),"\n",(0,o.jsx)(n.p,{children:"This recipe assumes you have already created a machine-to-machine app in Logto."}),"\n",(0,o.jsx)(n.h2,{id:"fetch-an-access-token",children:"Fetch an Access Token"}),"\n",(0,o.jsx)(n.h3,{id:"locate-the-app-id-and-app-secret",children:"Locate the App ID and App Secret"}),"\n",(0,o.jsx)(n.p,{children:"On the application details page, locate the App ID and App Secret."}),"\n",(0,o.jsx)("img",{alt:"App ID and App Secret",src:a,width:"600px"}),"\n",(0,o.jsx)(n.h3,{id:"locate-the-api-resource",children:"Locate the API Resource"}),"\n",(0,o.jsxs)(n.p,{children:["In the API Resource tab, find the API identifier that the app needs to access. If you haven't added the API Resource in Logto or don't know what API Resource is, see ",(0,o.jsx)(n.a,{href:"/docs/references/resources",children:"API Resource"}),"."]}),"\n",(0,o.jsx)("img",{alt:"API identifier",src:i,width:"600px",style:{paddingBottom:"12px"}}),"\n",(0,o.jsx)(n.h4,{id:"access-logto-management-api",children:"Access Logto Management API"}),"\n",(0,o.jsxs)(n.p,{children:["If you want to use this app for accessing ",(0,o.jsx)(n.a,{href:"/docs/references/core/#management-api",children:"Management API"}),", remember to create a role with the Management API access and assign the role to the app. See ",(0,o.jsx)(n.a,{href:"/docs/recipes/rbac/manage-permissions-and-roles",children:"Manage permissions and roles"})," to learn more."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Logto Management API is a built-in resource with the fixed identifier ",(0,o.jsx)(n.code,{children:"https://[your-tenant-id].logto.app/api"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"compose-and-send-the-request",children:"Compose and send the request"}),"\n",(0,o.jsxs)(n.p,{children:["Then compose them into a request (",(0,o.jsx)(n.strong,{children:"all mandatory"}),"):"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Use Token Endpoint (",(0,o.jsx)(n.code,{children:"https://your.logto.endpoint/oidc/token"}),") as the request endpoint, and use ",(0,o.jsx)(n.code,{children:"POST"})," as the method."]}),"\n",(0,o.jsxs)(n.li,{children:["Set header ",(0,o.jsx)(n.code,{children:"Content-Type: application/x-www-form-urlencoded"})]}),"\n",(0,o.jsxs)(n.li,{children:["Use ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization#basic_authentication",children:"Basic authentication"}),", where username is the App ID, and password is the App Secret."]}),"\n",(0,o.jsx)(n.li,{children:"Carry the body data:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "grant_type": "client_credentials",\n  "resource": "https://shopping.api", // Replace with your API identitfier\n  "scope": "scope_1 scope_2" // Replace with your desired scope(s) if you\'re using RBAC\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"If you are using cURL:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request POST 'https://your.logto.endpoint/oidc/token' \\\n  --header 'Authorization: Basic eW91ci1hcHAtaWQ6eW91ci1hcHAtc2VjcmV0' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'grant_type=client_credentials' \\\n  --data-urlencode 'resource=https://shopping.api' \\\n  --data-urlencode 'scope=scope_1 scope_2'\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Replace ",(0,o.jsx)(n.code,{children:"https://your.logto.endpoint"})," with the Logto endpoint you are targeting. For Logto Cloud, it will be ",(0,o.jsx)(n.code,{children:"https://[tenant-id].logto.app"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"token-response",children:"Token response"}),"\n",(0,o.jsx)(n.p,{children:"A successful response body would be like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "access_token": "eyJhbG...2g", // Use this token for accessing the resource\n  "expires_in": 3600, // Token expiration in seconds\n  "token_type": "Bearer" // Auth type for your request when using the Access Token\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"access-resource-using-access-token",children:"Access resource using Access Token"}),"\n",(0,o.jsxs)(n.p,{children:["You may notice the token response has a ",(0,o.jsx)(n.code,{children:"token_type"})," field, which it's fixed to ",(0,o.jsx)(n.code,{children:"Bearer"}),". Thus you should put the Access Token in the ",(0,o.jsx)(n.code,{children:"Authorization"})," field of HTTP headers with the Bearer format (",(0,o.jsx)(n.code,{children:"Bearer YOUR_TOKEN"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if you have requested an Access Token with the resource ",(0,o.jsx)(n.code,{children:"https://[your-tenant-id].logto.app/api"}),", to get all applications in Logto:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request GET 'https://your.logto.endpoint/api/applications' \\\n  --header 'Authorization: Bearer eyJhbG...2g' # Access Token\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Replace ",(0,o.jsx)(n.code,{children:"https://your.logto.endpoint"})," with the Logto endpoint you are targeting. For Logto Cloud, it will be ",(0,o.jsx)(n.code,{children:"https://[tenant-id].logto.app"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,o.jsxs)(n.p,{children:["If you are protecting your own API Resources other than Logto Management API, remember to implement the authentication in your resource. See ",(0,o.jsx)(n.a,{href:"/docs/recipes/protect-your-api#validate-the-api-requests-authorization-token",children:"Protect your API"})," for details."]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},17279:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var o=t(50959);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);