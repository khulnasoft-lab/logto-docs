"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[60706],{74770:(e,n,t)=>{t.d(n,{ZP:()=>r});var i=t(11527),s=t(17279);function o(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"create-your-oidc-app",children:"Create your OIDC app"}),"\n",(0,i.jsx)(n.p,{children:"When you open this page, we believe you already know which social identity provider you want to connect to. The first thing to do is to confirm that the identity provider supports the OIDC protocol, which is a prerequisite for configuring a valid connector. Then, follow the identity provider's instructions to register and create the relevant app for OIDC authorization."}),"\n",(0,i.jsx)(n.h3,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsx)(n.p,{children:'We ONLY support "Authorization Code" grant type for security consideration and it can perfectly fit Logto\'s scenario.'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"clientId"})," and ",(0,i.jsx)(n.code,{children:"clientSecret"})," can be found at your OIDC apps details page."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"clientId"}),": The client ID is a unique identifier that identifies the client application during registration with the authorization server. This ID is used by the authorization server to verify the identity of the client application and to associate any authorized access tokens with that specific client application."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"clientSecret"}),": The client secret is a confidential key that is issued to the client application by the authorization server during registration. The client application uses this secret key to authenticate itself with the authorization server when requesting access tokens. The client secret is considered confidential information and should be kept secure at all times."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"scope"}),': The scope parameter is used to specify the set of resources and permissions that the client application is requesting access to. The scope parameter is typically defined as a space-separated list of values that represent specific permissions. For example, a scope value of "read write" might indicate that the client application is requesting read and write access to a user\'s data.']}),"\n",(0,i.jsxs)(n.p,{children:["You are expected to find ",(0,i.jsx)(n.code,{children:"authorizationEndpoint"}),", ",(0,i.jsx)(n.code,{children:"tokenEndpoint"}),", ",(0,i.jsx)(n.code,{children:"jwksUri"})," and ",(0,i.jsx)(n.code,{children:"issuer"})," as OpenID Provider's configuration information. They should be available in social vendor's documentation."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"authenticationEndpoint"}),": This endpoint is used to initiate the authentication process. The authentication process typically involves the user logging in and granting authorization for the client application to access their resources."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"tokenEndpoint"}),": This endpoint is used by the client application to obtain an id token that can be used to access the requested resources. The client application typically sends a request to the token endpoint with a grant type and authorization code to receive an id token."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"jwksUri"}),": This is the URL endpoint where the JSON Web Key Set (JWKS) of the social identity provider (IdP for short) can be obtained. The JWKS is a set of cryptographic keys that the IdP uses to sign and verify JSON Web Tokens (JWTs) that are issued during the authentication process. The ",(0,i.jsx)(n.code,{children:"jwksUri"})," is used by the relying party (RP) to obtain the public keys used by the IdP to sign the JWTs, so the RP can verify the authenticity and integrity of the JWTs received from the IdP."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"issuer"}),": This is the unique identifier of the IdP that is used by the RP to verify the JWTs received from the IdP. It is included in the JWTs as the ",(0,i.jsx)(n.code,{children:"iss"})," ",(0,i.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7519#section-4",children:"claim"})," (Id token is always a JWT). The issuer value should match the URL of the IdP's authorization server, and it should be a URI that the RP trusts. When the RP receives a JWT, it checks the ",(0,i.jsx)(n.code,{children:"iss"})," claim to ensure that it was issued by a trusted IdP, and that the JWT is intended for use with the RP."]}),"\n",(0,i.jsxs)(n.p,{children:["Together, ",(0,i.jsx)(n.code,{children:"jwksUri"})," and ",(0,i.jsx)(n.code,{children:"issuer"})," provide a secure mechanism for the RP to verify the identity of the end-user during the authentication process. By using the public keys obtained from the ",(0,i.jsx)(n.code,{children:"jwksUri"}),", the RP can verify the authenticity and integrity of the JWTs issued by the IdP. The issuer value ensures that the RP only accepts JWTs that were issued by a trusted IdP, and that the JWTs are intended for use with the RP."]}),"\n",(0,i.jsxs)(n.p,{children:["Since an authentication request is always required, an ",(0,i.jsx)(n.code,{children:"authRequestOptionalConfig"})," is provided to wrap all optional configs, you can find details on ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"OIDC Authentication Request"}),". You may also find that ",(0,i.jsx)(n.code,{children:"nonce"})," is missing in this config. Since ",(0,i.jsx)(n.code,{children:"nonce"})," should identical for each request, we put the generation of ",(0,i.jsx)(n.code,{children:"nonce"})," in code implementation. So do not worry about it! Previously mentioned ",(0,i.jsx)(n.code,{children:"jwksUri"})," and ",(0,i.jsx)(n.code,{children:"issuer"})," are also included in ",(0,i.jsx)(n.code,{children:"idTokenVerificationConfig"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You may be curious as to why a standard OIDC protocol supports both the implicit and hybrid flows, yet the Logto connector only supports the authorization flow. It has been determined that the implicit and hybrid flows are less secure than the authorization flow. Due to Logto's focus on security, it only supports the authorization flow for the highest level of security for its users, despite its slightly less convenient nature."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"responseType"})," and ",(0,i.jsx)(n.code,{children:"grantType"}),' can ONLY be FIXED values with "Authorization Code" flow, so we make them optional and default values will be automatically filled.']}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["For all flow types, we provided an OPTIONAL ",(0,i.jsx)(n.code,{children:"customConfig"})," key to put your customize parameters.\nEach social identity provider could have their own variant on OIDC standard protocol. If your desired social identity provider strictly stick to OIDC standard protocol, the you do not need to care about ",(0,i.jsx)(n.code,{children:"customConfig"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scope"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"authorizationEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tokenEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"idTokenVerificationConfig"}),(0,i.jsx)(n.td,{children:"IdTokenVerificationConfig"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"authRequestOptionalConfig"}),(0,i.jsx)(n.td,{children:"AuthRequestOptionalConfig"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"customConfig"}),(0,i.jsx)(n.td,{children:"{ [key: string]: string }"}),(0,i.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"AuthRequestOptionalConfig properties"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"responseType"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tokenEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"responseMode"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"display"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"prompt"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxAge"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"uiLocales"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"idTokenHint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"loginHint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"acrValues"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"IdTokenVerificationConfig properties"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"jwksUri"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"issuer"}),(0,i.jsx)(n.td,{children:"string | string[]"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"audience"}),(0,i.jsx)(n.td,{children:"string | string[]"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"algorithms"}),(0,i.jsx)(n.td,{children:"string[]"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clockTolerance"}),(0,i.jsx)(n.td,{children:"string | number"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"crit"}),(0,i.jsx)(n.td,{children:"{ [key: string]: string | boolean }"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"currentDate"}),(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxTokenAge"}),(0,i.jsx)(n.td,{children:"string | number"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"subject"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"typ"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/panva/jose/blob/main/docs/interfaces/jwt_verify.JWTVerifyOptions.md",children:"here"})," to find more details about ",(0,i.jsx)(n.code,{children:"IdTokenVerificationConfig"}),"."]})]})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1759:(e,n,t)=>{t.d(n,{ZP:()=>h});var i=t(11527),s=t(17279),o=t(33369),r=t(9565),c=t(31085),d=t(27766),a=t(20807);function l(e){const n={h3:"h3",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"update-razor-pages",children:"Update Razor pages"}),"\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(a.ZP,{sdk:".NET Core (Blazor Server)"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},2936:(e,n,t)=>{t.d(n,{ZP:()=>r});var i=t(11527),s=t(17279);function o(e){const n={img:"img",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(10766).Z+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},43606:(e,n,t)=>{t.d(n,{ZP:()=>c});var i=t(11527),s=t(17279);const o=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png";function r(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(50554).Z+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(3108).Z+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:o,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},25735:(e,n,t)=>{t.d(n,{ZP:()=>r});var i=t(11527),s=t(17279);function o(e){const n={admonition:"admonition",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(65266).Z+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(79120).Z+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},25205:(e,n,t)=>{t.d(n,{ZP:()=>r});var i=t(11527),s=t(17279);function o(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},77041:(e,n,t)=>{t.d(n,{ZP:()=>r});var i=t(11527),s=t(17279);function o(e){const n={p:"p",...(0,s.a)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},20807:(e,n,t)=>{t.d(n,{ZP:()=>r});var i=t(11527),s=t(17279);function o(e){const n={admonition:"admonition",p:"p",...(0,s.a)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},63031:(e,n,t)=>{t.d(n,{ZP:()=>r});var i=t(11527),s=t(17279);function o(e){const n={p:"p",...(0,s.a)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},22275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,connector:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var i=t(11527),s=t(17279);t(25205),t(43606),t(2936),t(77041),t(25735),t(63031),t(1759),t(74770);const o={slug:"how-to-build-oidc-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","oidc","dotnet-core-blazor-webassembly","c#","social-sign-in","sign-in","login"],title:"How to build OIDC sign-in with .NET Core (Blazor WebAssembly) and Logto"},r=void 0,c={permalink:"/tutorial/how-to-build-oidc-sign-in-with-dotnet-core-blazor-webassembly-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-blazor-webassembly-oidc.mdx",title:"How to build OIDC sign-in with .NET Core (Blazor WebAssembly) and Logto",description:"\x3c!--",date:"2024-02-06T04:18:13.000Z",formattedDate:"February 6, 2024",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"oidc",permalink:"/tutorial/tags/oidc"},{label:"dotnet-core-blazor-webassembly",permalink:"/tutorial/tags/dotnet-core-blazor-webassembly"},{label:"c#",permalink:"/tutorial/tags/c"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.335,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-oidc-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","oidc","dotnet-core-blazor-webassembly","c#","social-sign-in","sign-in","login"],title:"How to build OIDC sign-in with .NET Core (Blazor WebAssembly) and Logto"},unlisted:!1,prevItem:{title:"How to build OAuth2 sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-oauth2-sign-in-with-dotnet-core-blazor-webassembly-and-logto"},nextItem:{title:"How to build SAML sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-saml-sign-in-with-dotnet-core-blazor-webassembly-and-logto"}},d={authorsImageUrls:[void 0]},a=[],l="OIDC";function h(e){return(0,i.jsx)(i.Fragment,{})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h()}},33369:(e,n,t)=>{t.d(n,{ZP:()=>r});var i=t(11527),s=t(17279);function o(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The following demonstration is built on .NET Core 8.0 and ",(0,i.jsx)(n.a,{href:"https://github.com/WildGums/Blorc.OpenIdConnect",children:"Blorc.OpenIdConnect"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},9565:(e,n,t)=>{t.d(n,{ZP:()=>r});var i=t(11527),s=t(17279);function o(e){const n={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dotnet add package Blorc.OpenIdConnect\n"})})]})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},31085:(e,n,t)=>{t.d(n,{ZP:()=>r});var i=t(11527),s=t(17279);function o(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"add-script-references",children:"Add script references"}),"\n",(0,i.jsxs)(n.p,{children:["Include ",(0,i.jsx)(n.code,{children:"Blorc.Core/injector.js"})," the ",(0,i.jsx)(n.code,{children:"index.html"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<head>\n  \x3c!-- ... --\x3e\n  <script src="_content/Blorc.Core/injector.js"><\/script>\n  \x3c!-- ... --\x3e\n</head>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"register-services",children:"Register services"}),"\n",(0,i.jsxs)(n.p,{children:["Add the following code to the ",(0,i.jsx)(n.code,{children:"Program.cs"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'using Blorc.OpenIdConnect;\nusing Blorc.Services;\n\nbuilder.Services.AddBlorcCore();\nbuilder.Services.AddAuthorizationCore();\nbuilder.Services.AddBlorcOpenIdConnect(\n    options =>\n    {\n        builder.Configuration.Bind("IdentityServer", options);\n    });\n\nvar webAssemblyHost = builder.Build();\n\nawait webAssemblyHost\n    .ConfigureDocumentAsync(async documentService =>\n    {\n        await documentService.InjectBlorcCoreJsAsync();\n        await documentService.InjectOpenIdConnectAsync();\n    });\n\nawait webAssemblyHost.RunAsync();\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["There's no need to use the ",(0,i.jsx)(n.code,{children:"Microsoft.AspNetCore.Components.WebAssembly.Authentication"})," package. The ",(0,i.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package will take care of the authentication process."]})}),"\n",(0,i.jsx)(n.h3,{id:"configure-application",children:"Configure application"}),"\n",(0,i.jsxs)(n.p,{children:["Add the following code to the ",(0,i.jsx)(n.code,{children:"appsettings.json"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json5",children:"{\n  // ...\n  IdentityServer: {\n    Authority: 'https://<your-logto-endpoint>/oidc',\n    ClientId: '<your-logto-app-id>',\n    PostLogoutRedirectUri: '<your-app-url>',\n    RedirectUri: '<your-app-url>',\n    ResponseType: 'code',\n    Scope: 'openid profile', // Add more scopes if needed\n  },\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Remember to add the ",(0,i.jsx)(n.code,{children:"RedirectUri"})," and ",(0,i.jsx)(n.code,{children:"PostLogoutRedirectUri"})," to the list of allowed redirect URIs in the Logto application settings. They are both the URL of your WASM application."]})]})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},27766:(e,n,t)=>{t.d(n,{ZP:()=>r});var i=t(11527),s=t(17279);function o(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h3,{id:"add-authorizeview-component",children:["Add ",(0,i.jsx)(n.code,{children:"AuthorizeView"})," component"]}),"\n",(0,i.jsxs)(n.p,{children:["In the Razor pages that require authentication, add the ",(0,i.jsx)(n.code,{children:"AuthorizeView"})," component. Let's assume it's the ",(0,i.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cshtml",children:'@using Microsoft.AspNetCore.Components.Authorization\n@page "/"\n\n<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        <button @onclick="OnLogoutButtonClickAsync">\n            Sign out\n        </button>\n    </Authorized>\n    <NotAuthorized>\n        @* Unauthenticated view *@\n        <button @onclick="OnLoginButtonClickAsync">\n            Sign in\n        </button>\n    </NotAuthorized>\n</AuthorizeView>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"set-up-authentication",children:"Set up authentication"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"Home.razor.cs"})," file (create it if it doesn't exist), add the following code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"using Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Components;\nusing Microsoft.AspNetCore.Components.Web;\nusing Blorc.OpenIdConnect;\nusing Microsoft.AspNetCore.Components.Authorization;\n\n[Authorize]\npublic partial class Home : ComponentBase\n{\n    [Inject]\n    public required IUserManager UserManager { get; set; }\n\n    public User<Profile>? User { get; set; }\n\n    [CascadingParameter]\n    protected Task<AuthenticationState>? AuthenticationStateTask { get; set; }\n\n    protected override async Task OnInitializedAsync()\n    {\n        User = await UserManager.GetUserAsync<User<Profile>>(AuthenticationStateTask!);\n    }\n\n    private async Task OnLoginButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignInRedirectAsync();\n    }\n\n    private async Task OnLogoutButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignOutRedirectAsync();\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once the user is authenticated, the ",(0,i.jsx)(n.code,{children:"User"})," property will be populated with the user information."]}),"\n",(0,i.jsx)(n.h3,{id:"display-user-information",children:"Display user information"}),"\n",(0,i.jsxs)(n.p,{children:["Here are some examples of how to display user information in the ",(0,i.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cshtml",children:'<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        @* ... *@\n        <p>You are signed in as @(@User?.Profile?.Name ?? "(unknown name)").</p>\n    </Authorized>\n    @* ... *@\n</AuthorizeView>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For more properties and claims, check the ",(0,i.jsx)(n.code,{children:"User"})," and ",(0,i.jsx)(n.code,{children:"Profile"})," classes in the ",(0,i.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package."]})]})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},10766:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},3108:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},50554:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},79120:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},65266:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(50959);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);