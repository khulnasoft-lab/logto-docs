"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[35431],{44255:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"create-your-oidc-app",children:"Create your OIDC app"}),"\n",(0,i.jsx)(n.p,{children:"When you open this page, we believe you already know which social identity provider you want to connect to. The first thing to do is to confirm that the identity provider supports the OIDC protocol, which is a prerequisite for configuring a valid connector. Then, follow the identity provider's instructions to register and create the relevant app for OIDC authorization."}),"\n",(0,i.jsx)(n.h3,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsx)(n.p,{children:'We ONLY support "Authorization Code" grant type for security consideration and it can perfectly fit Logto\'s scenario.'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"clientId"})," and ",(0,i.jsx)(n.code,{children:"clientSecret"})," can be found at your OIDC apps details page."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"clientId"}),": The client ID is a unique identifier that identifies the client application during registration with the authorization server. This ID is used by the authorization server to verify the identity of the client application and to associate any authorized access tokens with that specific client application."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"clientSecret"}),": The client secret is a confidential key that is issued to the client application by the authorization server during registration. The client application uses this secret key to authenticate itself with the authorization server when requesting access tokens. The client secret is considered confidential information and should be kept secure at all times."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"scope"}),': The scope parameter is used to specify the set of resources and permissions that the client application is requesting access to. The scope parameter is typically defined as a space-separated list of values that represent specific permissions. For example, a scope value of "read write" might indicate that the client application is requesting read and write access to a user\'s data.']}),"\n",(0,i.jsxs)(n.p,{children:["You are expected to find ",(0,i.jsx)(n.code,{children:"authorizationEndpoint"}),", ",(0,i.jsx)(n.code,{children:"tokenEndpoint"}),", ",(0,i.jsx)(n.code,{children:"jwksUri"})," and ",(0,i.jsx)(n.code,{children:"issuer"})," as OpenID Provider's configuration information. They should be available in social vendor's documentation."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"authenticationEndpoint"}),": This endpoint is used to initiate the authentication process. The authentication process typically involves the user logging in and granting authorization for the client application to access their resources."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"tokenEndpoint"}),": This endpoint is used by the client application to obtain an id token that can be used to access the requested resources. The client application typically sends a request to the token endpoint with a grant type and authorization code to receive an id token."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"jwksUri"}),": This is the URL endpoint where the JSON Web Key Set (JWKS) of the social identity provider (IdP for short) can be obtained. The JWKS is a set of cryptographic keys that the IdP uses to sign and verify JSON Web Tokens (JWTs) that are issued during the authentication process. The ",(0,i.jsx)(n.code,{children:"jwksUri"})," is used by the relying party (RP) to obtain the public keys used by the IdP to sign the JWTs, so the RP can verify the authenticity and integrity of the JWTs received from the IdP."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"issuer"}),": This is the unique identifier of the IdP that is used by the RP to verify the JWTs received from the IdP. It is included in the JWTs as the ",(0,i.jsx)(n.code,{children:"iss"})," ",(0,i.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7519#section-4",children:"claim"})," (Id token is always a JWT). The issuer value should match the URL of the IdP's authorization server, and it should be a URI that the RP trusts. When the RP receives a JWT, it checks the ",(0,i.jsx)(n.code,{children:"iss"})," claim to ensure that it was issued by a trusted IdP, and that the JWT is intended for use with the RP."]}),"\n",(0,i.jsxs)(n.p,{children:["Together, ",(0,i.jsx)(n.code,{children:"jwksUri"})," and ",(0,i.jsx)(n.code,{children:"issuer"})," provide a secure mechanism for the RP to verify the identity of the end-user during the authentication process. By using the public keys obtained from the ",(0,i.jsx)(n.code,{children:"jwksUri"}),", the RP can verify the authenticity and integrity of the JWTs issued by the IdP. The issuer value ensures that the RP only accepts JWTs that were issued by a trusted IdP, and that the JWTs are intended for use with the RP."]}),"\n",(0,i.jsxs)(n.p,{children:["Since an authentication request is always required, an ",(0,i.jsx)(n.code,{children:"authRequestOptionalConfig"})," is provided to wrap all optional configs, you can find details on ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"OIDC Authentication Request"}),". You may also find that ",(0,i.jsx)(n.code,{children:"nonce"})," is missing in this config. Since ",(0,i.jsx)(n.code,{children:"nonce"})," should identical for each request, we put the generation of ",(0,i.jsx)(n.code,{children:"nonce"})," in code implementation. So do not worry about it! Previously mentioned ",(0,i.jsx)(n.code,{children:"jwksUri"})," and ",(0,i.jsx)(n.code,{children:"issuer"})," are also included in ",(0,i.jsx)(n.code,{children:"idTokenVerificationConfig"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You may be curious as to why a standard OIDC protocol supports both the implicit and hybrid flows, yet the Logto connector only supports the authorization flow. It has been determined that the implicit and hybrid flows are less secure than the authorization flow. Due to Logto's focus on security, it only supports the authorization flow for the highest level of security for its users, despite its slightly less convenient nature."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"responseType"})," and ",(0,i.jsx)(n.code,{children:"grantType"}),' can ONLY be FIXED values with "Authorization Code" flow, so we make them optional and default values will be automatically filled.']}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["For all flow types, we provided an OPTIONAL ",(0,i.jsx)(n.code,{children:"customConfig"})," key to put your customize parameters.\nEach social identity provider could have their own variant on OIDC standard protocol. If your desired social identity provider strictly stick to OIDC standard protocol, the you do not need to care about ",(0,i.jsx)(n.code,{children:"customConfig"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scope"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"authorizationEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tokenEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"idTokenVerificationConfig"}),(0,i.jsx)(n.td,{children:"IdTokenVerificationConfig"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"authRequestOptionalConfig"}),(0,i.jsx)(n.td,{children:"AuthRequestOptionalConfig"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"customConfig"}),(0,i.jsx)(n.td,{children:"{ [key: string]: string }"}),(0,i.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"AuthRequestOptionalConfig properties"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"responseType"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tokenEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"responseMode"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"display"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"prompt"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxAge"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"uiLocales"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"idTokenHint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"loginHint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"acrValues"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"IdTokenVerificationConfig properties"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"jwksUri"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"issuer"}),(0,i.jsx)(n.td,{children:"string | string[]"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"audience"}),(0,i.jsx)(n.td,{children:"string | string[]"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"algorithms"}),(0,i.jsx)(n.td,{children:"string[]"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clockTolerance"}),(0,i.jsx)(n.td,{children:"string | number"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"crit"}),(0,i.jsx)(n.td,{children:"{ [key: string]: string | boolean }"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"currentDate"}),(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxTokenAge"}),(0,i.jsx)(n.td,{children:"string | number"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"subject"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"typ"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/panva/jose/blob/main/docs/interfaces/jwt_verify.JWTVerifyOptions.md",children:"here"})," to find more details about ",(0,i.jsx)(n.code,{children:"IdTokenVerificationConfig"}),"."]})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},44263:function(e,n,t){t.d(n,{ZP:function(){return p}});var i=t(11527),o=t(17279),r=t(45610),s=t(80302),c=t(73544),a=t(87739),d=t(36618),l=t(74976),h=t(13994);function u(e){const n={h2:"h2",h3:"h3",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"add-logto-sdk-as-a-dependency",children:"Add Logto SDK as a dependency"}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"sign-in",children:"Sign in"}),"\n",(0,i.jsx)(n.h3,{id:"configure-redirect-uri",children:"Configure Redirect URI"}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(l.ZP,{figureSrc:d.Z,redirectUri:"io.logto.android://io.logto.sample/callback"}),"\n",(0,i.jsx)(n.h3,{id:"sign-in-1",children:"Sign in"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(h.ZP,{sdk:"Android"})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},55458:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(10766).Z+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},32778:function(e,n,t){t.d(n,{ZP:function(){return c}});var i=t(11527),o=t(17279),r=t.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png";function s(e){const n={h3:"h3",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create application",src:t(95561).Z+"",width:"2368",height:"226"})}),"\n",(0,i.jsx)(n.p,{children:'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsxs)("p",{children:['In the opening modal, select the "',e.type,'" option as the application type.']}),"\n",(0,i.jsx)("img",{src:r,alt:"Create Application modal",width:"700"}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},81057:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(65266).Z+"",width:"3160",height:"1822"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(79120).Z+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},10444:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control."]})}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with"," "]}),(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),(0,i.jsx)("span",{children:" and "}),(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:(0,i.jsx)(n.p,{children:"Logto"})}),(0,i.jsx)(n.p,{children:"."})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:[(0,i.jsxs)(n.p,{children:["Basic knowledge of"," "]}),(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),(0,i.jsx)(n.p,{children:"."})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},69441:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},13994:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},93974:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},16096:function(e,n,t){t.r(n),t.d(n,{assets:function(){return a},connector:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return d}});var i=t(11527),o=t(17279);t(10444),t(32778),t(55458),t(69441),t(81057),t(93974),t(44263),t(44255);const r={slug:"how-to-build-oidc-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","oidc","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build OIDC sign-in with Android and Logto"},s=void 0,c={permalink:"/tutorial/how-to-build-oidc-sign-in-with-android-and-logto",source:"@site/tutorial/build-with-logto/generated-android-oidc.mdx",title:"How to build OIDC sign-in with Android and Logto",description:"\x3c!--",date:"2023-11-23T06:39:45.652Z",formattedDate:"November 23, 2023",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"oidc",permalink:"/tutorial/tags/oidc"},{label:"android",permalink:"/tutorial/tags/android"},{label:"kotlin/java",permalink:"/tutorial/tags/kotlin-java"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.28,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-oidc-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","oidc","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build OIDC sign-in with Android and Logto"},unlisted:!1,prevItem:{title:"How to build OAuth2 sign-in with Android and Logto",permalink:"/tutorial/how-to-build-oauth2-sign-in-with-android-and-logto"},nextItem:{title:"How to build SAML sign-in with Android and Logto",permalink:"/tutorial/how-to-build-saml-sign-in-with-android-and-logto"}},a={authorsImageUrls:[void 0]},d=[],l="OIDC";function h(e){return(0,i.jsx)(i.Fragment,{})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h()}},45610:function(e,n,t){t.d(n,{ZP:function(){return a}});var i=t(11527),o=t(17279),r=t(75268),s=t(67234);function c(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The minimum supported Android API level of Logto Andorid SDK is level 24."})}),"\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.code,{children:"mavenCentral()"})," repository to your Gradle project build file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"repositories {\n    mavenCentral()\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add Logto Android SDK to your dependencies:"}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(r.Z,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'dependencies {\n    implementation("io.logto.sdk:android:1.0.0-alpha.0")\n}\n'})})}),(0,i.jsx)(r.Z,{value:"groovy",label:"Groovy",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0-alpha.0'\n}\n"})})})]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},80302:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={admonition:"admonition",br:"br",code:"code",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In Android, the Redirect URI follows the pattern: ",(0,i.jsx)(n.code,{children:"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"LOGTO_REDIRECT_SCHEME"})," should be a custom scheme in the reverse domain format.",(0,i.jsx)(n.br,{}),"\n","The ",(0,i.jsx)(n.code,{children:"YOUR_APP_PACKAGE"})," is your app package name."]})}),"\n",(0,i.jsxs)(n.p,{children:["Assuming you treat ",(0,i.jsx)(n.code,{children:"io.logto.android"})," as the custom ",(0,i.jsx)(n.code,{children:"LOGTO_REDIRECT_SCHEME"}),", and ",(0,i.jsx)(n.code,{children:"io.logto.sample"})," is your app package name, the Redirect URI should be ",(0,i.jsx)(n.code,{children:"io.logto.android://io.logto.sample/callback"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Now you can configure the Redirect URI in the admin console (Take ",(0,i.jsx)(n.code,{children:"io.logto.android://io.logto.sample/callback"})," as an example)."]})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},73544:function(e,n,t){t.d(n,{ZP:function(){return p}});var i=t(11527),o=t(17279),r=t(75268),s=t(67234),c=t(45969);function a(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // User signed in successfully if `logtoException` is null.\n});\n'})})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function l(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // User signed in successfully if `logtoException` is null.\n}\n'})})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function u(e){const n={code:"code",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.ZP,{calling:".signIn(context, redirectUri, completion)"}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(r.Z,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(h,{})}),(0,i.jsx)(r.Z,{value:"java",label:"Java",children:(0,i.jsx)(d,{})})]}),"\n",(0,i.jsxs)(n.p,{children:["After signing in successfully, ",(0,i.jsx)(n.code,{children:"logtoClient.isAuthenticated"})," will be ",(0,i.jsx)(n.code,{children:"true"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},87739:function(e,n,t){t.d(n,{ZP:function(){return u}});var i=t(11527),o=t(17279),r=t(75268),s=t(67234);function c(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n'})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function d(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n'})})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function h(e){const n={admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Ensure the Application object has been initialized before creating a LogtoClient."})}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(r.Z,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(l,{})}),(0,i.jsx)(r.Z,{value:"java",label:"Java",children:(0,i.jsx)(a,{})})]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},74976:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={a:"a",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Let's switch to the Application details page of Admin Console in this section. Add a Redirect\nURI ",(0,i.jsx)("code",{children:e.redirectUri}),' and click "Save Changes".']})}),"\n",(0,i.jsx)("img",{alt:"Redirect URI in Admin Console",src:e.figureSrc,width:"600px"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},45969:function(e,n,t){t.d(n,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(e){const n={admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Before calling ",(0,i.jsx)("code",{children:e.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},75268:function(e,n,t){t.d(n,{Z:function(){return s}});t(50959);var i=t(45924),o={tabItem:"tabItem_zBCg"},r=t(11527);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,s),hidden:t,children:n})}},67234:function(e,n,t){t.d(n,{Z:function(){return w}});var i=t(50959),o=t(45924),r=t(58748),s=t(28903),c=t(88137),a=t(70670),d=t(91391),l=t(47841);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=u(e),[s,a]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[d,h]=x({queryString:t,groupId:o}),[j,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,l.Nk)(t);return[o,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),f=(()=>{const e=d??j;return p({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{f&&a(f)}),[f]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=t(77691),f={tabList:"tabList_nHxI",tabItem:"tabItem_BSGW"},m=t(11527);function b(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),l=e=>{const n=e.currentTarget,t=a.indexOf(n),o=c[t].value;o!==i&&(d(n),s(o))},h=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>a.push(e),onKeyDown:h,onClick:l,...r,className:(0,o.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function v(e){const n=j(e);return(0,m.jsxs)("div",{className:(0,o.Z)("tabs-container",f.tabList),children:[(0,m.jsx)(b,{...e,...n}),(0,m.jsx)(y,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,m.jsx)(v,{...e,children:h(e.children)},String(n))}},36618:function(e,n,t){n.Z=t.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png"},10766:function(e,n,t){n.Z=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},95561:function(e,n,t){n.Z=t.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},79120:function(e,n,t){n.Z=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},65266:function(e,n,t){n.Z=t.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"},17279:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var i=t(50959);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);