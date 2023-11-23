"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[11971],{94415:function(e,s,n){n.r(s),n.d(s,{assets:function(){return t},contentTitle:function(){return c},default:function(){return x},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return o}});var r=n(11527),i=n(17279);const l={},c=void 0,d={id:"sdk/JavaScript/client/classes/class.default",title:"class.default",description:"Constructors",source:"@site/docs/sdk/JavaScript/client/classes/class.default.md",sourceDirName:"sdk/JavaScript/client/classes",slug:"/sdk/JavaScript/client/classes/class.default",permalink:"/next/sdk/JavaScript/client/classes/class.default",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/JavaScript/client/classes/class.default.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"class.OidcError",permalink:"/next/sdk/JavaScript/client/classes/class.OidcError"},next:{title:"enumeration.CacheKey",permalink:"/next/sdk/JavaScript/client/enumerations/enumeration.CacheKey"}},t={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor()",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source",level:4},{value:"Properties",id:"properties",level:2},{value:"accessTokenMap",id:"accesstokenmap",level:3},{value:"Source",id:"source-1",level:4},{value:"adapter",id:"adapter",level:3},{value:"Source",id:"source-2",level:4},{value:"getJwtVerifyGetKey",id:"getjwtverifygetkey",level:3},{value:"Source",id:"source-3",level:4},{value:"getOidcConfig",id:"getoidcconfig",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source-4",level:4},{value:"logtoConfig",id:"logtoconfig",level:3},{value:"Source",id:"source-5",level:4},{value:"Methods",id:"methods",level:2},{value:"#getJwtVerifyGetKey()",id:"getjwtverifygetkey-1",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Source",id:"source-6",level:4},{value:"#getOidcConfig()",id:"getoidcconfig-1",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Source",id:"source-7",level:4},{value:"fetchUserInfo()",id:"fetchuserinfo",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Source",id:"source-8",level:4},{value:"getAccessToken()",id:"getaccesstoken",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Source",id:"source-9",level:4},{value:"getAccessTokenByRefreshToken()",id:"getaccesstokenbyrefreshtoken",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Source",id:"source-10",level:4},{value:"getAccessTokenClaims()",id:"getaccesstokenclaims",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Source",id:"source-11",level:4},{value:"getIdToken()",id:"getidtoken",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Source",id:"source-12",level:4},{value:"getIdTokenClaims()",id:"getidtokenclaims",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Source",id:"source-13",level:4},{value:"getRefreshToken()",id:"getrefreshtoken",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Source",id:"source-14",level:4},{value:"getSignInSession()",id:"getsigninsession",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Source",id:"source-15",level:4},{value:"handleSignInCallback()",id:"handlesignincallback",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Source",id:"source-16",level:4},{value:"isAuthenticated()",id:"isauthenticated",level:3},{value:"Returns",id:"returns-13",level:4},{value:"Source",id:"source-17",level:4},{value:"isSignInRedirected()",id:"issigninredirected",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-14",level:4},{value:"Source",id:"source-18",level:4},{value:"loadAccessTokenMap()",id:"loadaccesstokenmap",level:3},{value:"Returns",id:"returns-15",level:4},{value:"Source",id:"source-19",level:4},{value:"saveAccessTokenMap()",id:"saveaccesstokenmap",level:3},{value:"Returns",id:"returns-16",level:4},{value:"Source",id:"source-20",level:4},{value:"setIdToken()",id:"setidtoken",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-17",level:4},{value:"Source",id:"source-21",level:4},{value:"setRefreshToken()",id:"setrefreshtoken",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-18",level:4},{value:"Source",id:"source-22",level:4},{value:"setSignInSession()",id:"setsigninsession",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-19",level:4},{value:"Source",id:"source-23",level:4},{value:"signIn()",id:"signin",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-20",level:4},{value:"Source",id:"source-24",level:4},{value:"signOut()",id:"signout",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-21",level:4},{value:"Source",id:"source-25",level:4},{value:"verifyIdToken()",id:"verifyidtoken",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Returns",id:"returns-22",level:4},{value:"Source",id:"source-26",level:4}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(s.h3,{id:"constructor",children:"constructor()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"new default"}),"(",(0,r.jsx)(s.code,{children:"logtoConfig"}),", ",(0,r.jsx)(s.code,{children:"adapter"}),"): ",(0,r.jsx)(s.a,{href:"/next/sdk/JavaScript/client/classes/class.default",children:(0,r.jsx)(s.code,{children:"default"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"logtoConfig"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/next/sdk/JavaScript/client/type-aliases/type-alias.LogtoConfig",children:(0,r.jsx)(s.code,{children:"LogtoConfig"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"adapter"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/next/sdk/JavaScript/client/type-aliases/type-alias.ClientAdapter",children:(0,r.jsx)(s.code,{children:"ClientAdapter"})})})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/next/sdk/JavaScript/client/classes/class.default",children:(0,r.jsx)(s.code,{children:"default"})})}),"\n",(0,r.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L60",children:"src/index.ts:60"})}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(s.h3,{id:"accesstokenmap",children:"accessTokenMap"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"protected"})," ",(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"accessTokenMap"}),": ",(0,r.jsx)(s.code,{children:"Map"}),"< ",(0,r.jsx)(s.code,{children:"string"}),", ",(0,r.jsx)(s.a,{href:"/next/sdk/JavaScript/client/type-aliases/type-alias.AccessToken",children:(0,r.jsx)(s.code,{children:"AccessToken"})})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L58",children:"src/index.ts:58"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"adapter",children:"adapter"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"protected"})," ",(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"adapter"}),": ",(0,r.jsx)(s.code,{children:"ClientAdapterInstance"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L57",children:"src/index.ts:57"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getjwtverifygetkey",children:"getJwtVerifyGetKey"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"protected"})," ",(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"getJwtVerifyGetKey"}),": ",(0,r.jsx)(s.code,{children:"Procedure"}),"< ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"JWTVerifyGetKey"})," > >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L56",children:"src/index.ts:56"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getoidcconfig",children:"getOidcConfig"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"protected"})," ",(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"getOidcConfig"}),": (",(0,r.jsx)(s.code,{children:"this"}),", ...",(0,r.jsx)(s.code,{children:"args"}),") => ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"KeysToCamelCase"}),"< ",(0,r.jsx)(s.code,{children:"OidcConfigSnakeCaseResponse"})," > >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"this"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"unknown"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:["...",(0,r.jsx)(s.code,{children:"args"})]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"[]"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"KeysToCamelCase"}),"< ",(0,r.jsx)(s.code,{children:"OidcConfigSnakeCaseResponse"})," > >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L55",children:"src/index.ts:55"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"logtoconfig",children:"logtoConfig"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"protected"})," ",(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"logtoConfig"}),": ",(0,r.jsx)(s.a,{href:"/next/sdk/JavaScript/client/type-aliases/type-alias.LogtoConfig",children:(0,r.jsx)(s.code,{children:"LogtoConfig"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"source-5",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L54",children:"src/index.ts:54"})}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"getjwtverifygetkey-1",children:"#getJwtVerifyGetKey()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"private"})," ",(0,r.jsx)(s.strong,{children:"#getJwtVerifyGetKey"}),"(): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"JWTVerifyGetKey"})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"JWTVerifyGetKey"})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-6",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L364",children:"src/index.ts:364"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getoidcconfig-1",children:"#getOidcConfig()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"private"})," ",(0,r.jsx)(s.strong,{children:"#getOidcConfig"}),"(): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"KeysToCamelCase"}),"< ",(0,r.jsx)(s.code,{children:"OidcConfigSnakeCaseResponse"})," > >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"KeysToCamelCase"}),"< ",(0,r.jsx)(s.code,{children:"OidcConfigSnakeCaseResponse"})," > >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-7",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L355",children:"src/index.ts:355"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"fetchuserinfo",children:"fetchUserInfo()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"fetchUserInfo"}),"(): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.a,{href:"/next/sdk/JavaScript/client/type-aliases/type-alias.UserInfoResponse",children:(0,r.jsx)(s.code,{children:"UserInfoResponse"})})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.a,{href:"/next/sdk/JavaScript/client/type-aliases/type-alias.UserInfoResponse",children:(0,r.jsx)(s.code,{children:"UserInfoResponse"})})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-8",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L122",children:"src/index.ts:122"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getaccesstoken",children:"getAccessToken()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"getAccessToken"}),"(",(0,r.jsx)(s.code,{children:"resource"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"string"})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"resource"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"string"})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-9",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L83",children:"src/index.ts:83"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getaccesstokenbyrefreshtoken",children:"getAccessTokenByRefreshToken()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"private"})," ",(0,r.jsx)(s.strong,{children:"getAccessTokenByRefreshToken"}),"(",(0,r.jsx)(s.code,{children:"resource"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"string"})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"resource"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"string"})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-10",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L271",children:"src/index.ts:271"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getaccesstokenclaims",children:"getAccessTokenClaims()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"getAccessTokenClaims"}),"(",(0,r.jsx)(s.code,{children:"resource"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"AccessTokenClaims"})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"resource"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"AccessTokenClaims"})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-11",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L116",children:"src/index.ts:116"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getidtoken",children:"getIdToken()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"getIdToken"}),"(): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"Nullable"}),"< ",(0,r.jsx)(s.code,{children:"string"})," > >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-8",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"Nullable"}),"< ",(0,r.jsx)(s.code,{children:"string"})," > >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-12",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L79",children:"src/index.ts:79"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getidtokenclaims",children:"getIdTokenClaims()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"getIdTokenClaims"}),"(): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.a,{href:"/next/sdk/JavaScript/client/type-aliases/type-alias.IdTokenClaims",children:(0,r.jsx)(s.code,{children:"IdTokenClaims"})})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-9",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.a,{href:"/next/sdk/JavaScript/client/type-aliases/type-alias.IdTokenClaims",children:(0,r.jsx)(s.code,{children:"IdTokenClaims"})})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-13",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L106",children:"src/index.ts:106"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getrefreshtoken",children:"getRefreshToken()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"getRefreshToken"}),"(): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"Nullable"}),"< ",(0,r.jsx)(s.code,{children:"string"})," > >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-10",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"Nullable"}),"< ",(0,r.jsx)(s.code,{children:"string"})," > >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-14",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L75",children:"src/index.ts:75"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getsigninsession",children:"getSignInSession()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"protected"})," ",(0,r.jsx)(s.strong,{children:"getSignInSession"}),"(): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"Nullable"}),"< ",(0,r.jsx)(s.a,{href:"/next/sdk/JavaScript/client/type-aliases/type-alias.LogtoSignInSessionItem",children:(0,r.jsx)(s.code,{children:"LogtoSignInSessionItem"})})," > >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-11",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"Nullable"}),"< ",(0,r.jsx)(s.a,{href:"/next/sdk/JavaScript/client/type-aliases/type-alias.LogtoSignInSessionItem",children:(0,r.jsx)(s.code,{children:"LogtoSignInSessionItem"})})," > >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-15",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L243",children:"src/index.ts:243"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"handlesignincallback",children:"handleSignInCallback()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"handleSignInCallback"}),"(",(0,r.jsx)(s.code,{children:"callbackUri"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"callbackUri"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-12",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-16",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L171",children:"src/index.ts:171"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"isauthenticated",children:"isAuthenticated()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"isAuthenticated"}),"(): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"boolean"})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-13",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"boolean"})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-17",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L71",children:"src/index.ts:71"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"issigninredirected",children:"isSignInRedirected()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"isSignInRedirected"}),"(",(0,r.jsx)(s.code,{children:"url"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"boolean"})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"url"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-14",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"boolean"})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-18",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L159",children:"src/index.ts:159"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"loadaccesstokenmap",children:"loadAccessTokenMap()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"private"})," ",(0,r.jsx)(s.strong,{children:"loadAccessTokenMap"}),"(): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-15",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-19",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L332",children:"src/index.ts:332"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"saveaccesstokenmap",children:"saveAccessTokenMap()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"private"})," ",(0,r.jsx)(s.strong,{children:"saveAccessTokenMap"}),"(): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-16",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-20",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L321",children:"src/index.ts:321"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"setidtoken",children:"setIdToken()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"private"})," ",(0,r.jsx)(s.strong,{children:"setIdToken"}),"(",(0,r.jsx)(s.code,{children:"value"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"value"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"Nullable"}),"< ",(0,r.jsx)(s.code,{children:"string"})," >"]})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-17",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-21",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L263",children:"src/index.ts:263"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"setrefreshtoken",children:"setRefreshToken()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"private"})," ",(0,r.jsx)(s.strong,{children:"setRefreshToken"}),"(",(0,r.jsx)(s.code,{children:"value"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"value"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"Nullable"}),"< ",(0,r.jsx)(s.code,{children:"string"})," >"]})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-18",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-22",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L267",children:"src/index.ts:267"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"setsigninsession",children:"setSignInSession()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"protected"})," ",(0,r.jsx)(s.strong,{children:"setSignInSession"}),"(",(0,r.jsx)(s.code,{children:"value"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"value"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"Nullable"}),"< ",(0,r.jsx)(s.a,{href:"/next/sdk/JavaScript/client/type-aliases/type-alias.LogtoSignInSessionItem",children:(0,r.jsx)(s.code,{children:"LogtoSignInSessionItem"})})," >"]})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-19",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-23",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L259",children:"src/index.ts:259"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"signin",children:"signIn()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"signIn"}),"(",(0,r.jsx)(s.code,{children:"redirectUri"}),", ",(0,r.jsx)(s.code,{children:"interactionMode"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"redirectUri"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"interactionMode"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/next/sdk/JavaScript/client/type-aliases/type-alias.InteractionMode",children:(0,r.jsx)(s.code,{children:"InteractionMode"})})})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-20",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-24",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L133",children:"src/index.ts:133"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"signout",children:"signOut()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"signOut"}),"(",(0,r.jsx)(s.code,{children:"postLogoutRedirectUri"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-11",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"postLogoutRedirectUri"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-21",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-25",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L216",children:"src/index.ts:216"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"verifyidtoken",children:"verifyIdToken()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"private"})," ",(0,r.jsx)(s.strong,{children:"verifyIdToken"}),"(",(0,r.jsx)(s.code,{children:"idToken"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-12",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"idToken"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-22",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"< ",(0,r.jsx)(s.code,{children:"void"})," >"]}),"\n",(0,r.jsx)(s.h4,{id:"source-26",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L313",children:"src/index.ts:313"})})]})}function x(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},17279:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return c}});var r=n(50959);const i={},l=r.createContext(i);function c(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);