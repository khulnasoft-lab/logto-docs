"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[37765],{59453:function(e,i,n){n.r(i),n.d(i,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return h}});var t=n(11527),o=n(17279);function s(e){const i={li:"li",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Native App"})," is an app that runs in a native environment. E.g., iOS app, Android app."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Single Page App"})," is an app that runs in a web browser, which updates the page with the new data from the server without loading entire new pages. E.g., React DOM app, Vue app."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Traditional Web App"})," is an app that renders and updates pages by the web server alone. E.g., JSP, PHP."]}),"\n"]})}function r(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const a={},c="\ud83d\udcf1 Applications",d={id:"docs/references/applications/README",title:"\ud83d\udcf1 Applications",description:"Introduction",source:"@site/versioned_docs/version-1.x/docs/references/applications/README.mdx",sourceDirName:"docs/references/applications",slug:"/docs/references/applications/",permalink:"/docs/references/applications/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/references/applications/README.mdx",tags:[],version:"1.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Rotate signing keys",permalink:"/docs/references/using-cli/rotate-signing-keys"},next:{title:"\ud83d\udd0c Connectors",permalink:"/docs/references/connectors/"}},l={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Properties",id:"properties",level:2},{value:"Application ID",id:"application-id",level:3},{value:"Application Types",id:"application-types",level:3},{value:"Application Name",id:"application-name",level:3},{value:"Description",id:"description",level:3},{value:"Redirect URIs",id:"redirect-uris",level:3},{value:"Post Sign-out Redirect URIs",id:"post-sign-out-redirect-uris",level:3},{value:"CORS Allowed Origins",id:"cors-allowed-origins",level:3},{value:"OpenID Provider configuration endpoint",id:"openid-provider-configuration-endpoint",level:3},{value:"Authorization Endpoint",id:"authorization-endpoint",level:3},{value:"Token Endpoint",id:"token-endpoint",level:3},{value:"Userinfo Endpoint",id:"userinfo-endpoint",level:3},{value:"Always issue Refresh Token",id:"always-issue-refresh-token",level:3},{value:"Rotate Refresh Token",id:"rotate-refresh-token",level:3},{value:"Refresh Token Time to Live (TTL) in days",id:"refresh-token-time-to-live-ttl-in-days",level:3}];function p(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"-applications",children:"\ud83d\udcf1 Applications"}),"\n",(0,t.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(i.p,{children:["In Logto for OIDC, an ",(0,t.jsx)(i.em,{children:"Application"})," refers to a specific software program or service that is registered with the Logto platform and has been granted authorization to access user information or perform actions on behalf of a user. Applications are used to identify the source of requests made to the Logto API, as well as to manage the authentication and authorization process for users accessing those applications."]}),"\n",(0,t.jsx)(i.p,{children:"The use of applications in Logto's sign-in experience allows users to easily access and manage their authorized applications from a single location, with a consistent and secure authentication process. This helps to streamline the user experience and ensure that only authorized individuals are accessing sensitive information or performing actions on behalf of the organization."}),"\n",(0,t.jsxs)(i.p,{children:["Applications are also used in Logto's audit logs to track user activity and identify any potential security threats or breaches. By associating specific actions with a particular application, Logto can provide detailed insights into how data is being accessed and used, allowing organizations to better manage their security and compliance requirements.\nIf you want to integrate your application with Logto, see ",(0,t.jsx)(i.a,{href:"../../recipes/integrate-logto",children:"Integrate Logto in your application"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(i.h3,{id:"application-id",children:"Application ID"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"Application ID"})," is a unique auto-generated key to identify your application in Logto, and is referenced as ",(0,t.jsx)(i.a,{href:"https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/",children:"client id"})," in OAuth 2.0."]}),"\n",(0,t.jsx)(i.h3,{id:"application-types",children:"Application Types"}),"\n",(0,t.jsxs)(i.p,{children:["An ",(0,t.jsx)(i.em,{children:"Application"})," can be one of the following application types:"]}),"\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(i.h3,{id:"application-name",children:"Application Name"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"Application Name"})," is a human-readable name of the application and will be displayed in the admin console."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.em,{children:"Application Name"})," is an important component of managing applications in Logto, as it allows administrators to easily identify and track the activity of individual applications within the platform."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:" It's important to note that the _Application Name_ should be chosen carefully, as it will be visible to all users who have access to the admin console. It should accurately reflect the purpose and function of the application, while also being easy to understand and recognize.\n"})}),"\n",(0,t.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"A brief description of the application will be displayed on the admin console application details page. The description is intended to provide administrators with additional information about the application, such as its purpose, functionality, and any other relevant details."}),"\n",(0,t.jsx)(i.h3,{id:"redirect-uris",children:"Redirect URIs"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"Redirect URIs"})," that are a list of valid redirect URIs that have been pre-configured for an application. When a user signs in to Logto and attempts to access the application, they are redirected to one of the allowed URIs specified in the application settings."]}),"\n",(0,t.jsx)(i.p,{children:"The allowed URIs list is used to validate the redirect URI that is included in the authorization request sent by the application to Logto during the authentication process. If the redirect URI specified in the authorization request matches one of the allowed URIs in the application settings, the user is redirected to that URI after successful authentication. If the redirect URI is not on the allowed list, the user will not be redirected and the authentication process will fail."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"It is important to ensure that all valid redirect URIs are added to the allowed list for an application in Logto, in order to ensure that users can successfully access the application after authentication.\n"})}),"\n",(0,t.jsxs)(i.p,{children:["You can check out the ",(0,t.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-3.1.2",children:"Redirection Endpoint"})," for more information."]}),"\n",(0,t.jsx)(i.h3,{id:"post-sign-out-redirect-uris",children:"Post Sign-out Redirect URIs"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"Post Sign-out Redirect URIs"})," are a list of valid URIs that have been pre-configured for an application to redirect the user after they have signed out from Logto."]}),"\n",(0,t.jsxs)(i.p,{children:["The use of Allowed ",(0,t.jsx)(i.em,{children:"Post Sign-out Redirect URIs"})," for Logout is part of the RP-Initiated Logout specification in OIDC. This specification provides a standardized method for applications to initiate a logout request for a user, which includes redirecting the user to a pre-configured endpoint after they have signed out."]}),"\n",(0,t.jsx)(i.p,{children:"When a user signs out of Logto, their session is terminated and they are redirected to one of the allowed URIs specified in the application settings. This ensures that the user is directed only to authorized and valid endpoints after they have signed out, helping to prevent unauthorized access and security risks associated with redirecting users to unknown or unverified endpoints."}),"\n",(0,t.jsxs)(i.p,{children:["You can check out the ",(0,t.jsx)(i.a,{href:"https://openid.net/specs/openid-connect-rpinitiated-1_0.html#RPLogout",children:"RP-Initiated Logout"})," for more information."]}),"\n",(0,t.jsx)(i.h3,{id:"cors-allowed-origins",children:"CORS Allowed Origins"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.em,{children:"CORS (Cross-Origin Resource Sharing) Allowed Origins"})," are a list of permitted origins from which an application can make requests to the Logto service. Any origin that is not included in the allowed list will not be able to make requests to the Logto service."]}),"\n",(0,t.jsx)(i.p,{children:"The CORS Allowed Origins list is used to restrict access to the Logto service from unauthorized domains, and to help prevent cross-site request forgery (CSRF) attacks. By specifying the allowed origins for an application in Logto, the service can ensure that only authorized domains are able to make requests to the service."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"The allowed origins list should contain the origin where the application will be served. This ensures that requests from the application are allowed, while requests from unauthorized origins are blocked.\n"})}),"\n",(0,t.jsx)(i.h3,{id:"openid-provider-configuration-endpoint",children:"OpenID Provider configuration endpoint"}),"\n",(0,t.jsxs)(i.p,{children:["The endpoint for ",(0,t.jsx)(i.a,{href:"https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationRequest",children:"OpenID Connect Discovery"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"authorization-endpoint",children:"Authorization Endpoint"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"Authorization Endpoint"})," is an OIDC term, and it is a required endpoint that is used to initiate the authentication process for a user. When a user attempts to access a protected resource or application hat has been registered with the Logto platform, they will be redirected to the ",(0,t.jsx)(i.em,{children:"Authorization Endpoint"})," to authenticate their identity and obtain authorization to access the requested resource."]}),"\n",(0,t.jsxs)(i.p,{children:["You can check out the ",(0,t.jsx)(i.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint",children:"Authorization Endpoint"})," for more information."]}),"\n",(0,t.jsx)(i.h3,{id:"token-endpoint",children:"Token Endpoint"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"Token Endpoint"})," is an OIDC term, it is a web API endpoint that is used by an OIDC client to obtain an access token, an ID token, or a refresh token from an OIDC provider."]}),"\n",(0,t.jsx)(i.p,{children:"When an OIDC client needs to obtain an access token or ID token, it sends a request to the Token Endpoint with an authorization grant, which is typically an authorization code or a refresh token. The Token Endpoint then validates the authorization grant and issues an access token or ID token to the client if the grant is valid."}),"\n",(0,t.jsxs)(i.p,{children:["You can check out the ",(0,t.jsx)(i.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenEndpoint",children:"Token Endpoint"})," for more information."]}),"\n",(0,t.jsx)(i.h3,{id:"userinfo-endpoint",children:"Userinfo Endpoint"}),"\n",(0,t.jsxs)(i.p,{children:["The OpenID Connect ",(0,t.jsx)(i.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"UserInfo Endpoint"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"always-issue-refresh-token",children:"Always issue Refresh Token"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"Added in v1.4.0"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"Availability: Traditional Web, SPA"})}),"\n",(0,t.jsxs)(i.p,{children:["When enabled, Logto will always issue Refresh Tokens, regardless of whether ",(0,t.jsx)(i.code,{children:"prompt=consent"})," is presented in the authentication request, nor ",(0,t.jsx)(i.code,{children:"offline_access"})," is presented in the scopes."]}),"\n",(0,t.jsx)(i.p,{children:"However, this practice is discouraged unless necessary (usually it's useful for some third-party OAuth integrations that require Refresh Token), as it is not compatible with OpenID Connect and may potentially cause issues."}),"\n",(0,t.jsx)(i.h3,{id:"rotate-refresh-token",children:"Rotate Refresh Token"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"Added in v1.6.0"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsxs)(i.em,{children:["Availability: Traditional Web, Machine-to-machine; Default: ",(0,t.jsx)(i.code,{children:"true"})]})}),"\n",(0,t.jsx)(i.p,{children:"When enabled, Logto will issue a new Refresh Token for token requests under the following conditions:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"If the time elapsed since the refresh token was last rotated is less than 1 year; and"}),"\n",(0,t.jsx)(i.li,{children:"If 70% of the original Time to Live (TTL) has passed; or"}),"\n",(0,t.jsx)(i.li,{children:"If the client is a non-sender-constrained public client."}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"If the application type is not available for this switch, it means a new refresh token will be always issued for each token request."})}),"\n",(0,t.jsx)(i.h3,{id:"refresh-token-time-to-live-ttl-in-days",children:"Refresh Token Time to Live (TTL) in days"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"Added in v1.6.0"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"Availability: Not SPA; Default: 14 days"})}),"\n",(0,t.jsx)(i.p,{children:"The duration for which a Refresh Token can be used to request new access tokens before it expires and becomes invalid. Token requests will extend the TTL of the Refresh Token to this value."}),"\n",(0,t.jsx)(i.p,{children:"Typically, a lower value is preferred."}),"\n",(0,t.jsx)(i.p,{children:"Note: TTL refreshment is unavailable in SPA (Single Page Apps) for security reasons. This means Logto will not extend the TTL through token requests. To enhance the user experience, you can enable the Rotate Refresh Token feature, allowing Logto to issue a new Refresh Token when necessary."})]})}function u(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},17279:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return r}});var t=n(50959);const o={},s=t.createContext(o);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);