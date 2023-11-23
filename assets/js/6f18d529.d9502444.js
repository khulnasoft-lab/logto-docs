"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[93557],{12483:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return a}});var r=t(11527),s=t(17279);const i={},c=void 0,o={id:"sdk/JavaScript/vue/functions/function.useHandleSignInCallback",title:"function.useHandleSignInCallback",description:"useHandleSignInCallback(callback?): object",source:"@site/versioned_docs/version-1.x/sdk/JavaScript/vue/functions/function.useHandleSignInCallback.md",sourceDirName:"sdk/JavaScript/vue/functions",slug:"/sdk/JavaScript/vue/functions/function.useHandleSignInCallback",permalink:"/sdk/JavaScript/vue/functions/function.useHandleSignInCallback",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/sdk/JavaScript/vue/functions/function.useHandleSignInCallback.md",tags:[],version:"1.x",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"enumeration.UserScope",permalink:"/sdk/JavaScript/vue/enumerations/enumeration.UserScope"},next:{title:"function.useLogto",permalink:"/sdk/JavaScript/vue/functions/function.useLogto"}},l={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"error",id:"error",level:3},{value:"isAuthenticated",id:"isauthenticated",level:3},{value:"isLoading",id:"isloading",level:3},{value:"Source",id:"source",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"useHandleSignInCallback"}),"(",(0,r.jsx)(n.code,{children:"callback"}),"?): ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsx)(n.p,{children:"A Vue composable method that watches browser navigation and automatically handles the sign-in callback"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { useLogto } from '@logto/vue';\nimport { useHandleSignInCallback } from '@logto/vue';\n\nexport default {\n  setup() {\n    useHandleSignInCallback();\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Use this in the setup script of your Callback page to make sure the injection works"}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"callback"}),"?"]}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["() => ",(0,r.jsx)(n.code,{children:"void"})]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.h3,{id:"error",children:"error"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"error"}),": ",(0,r.jsx)(n.code,{children:"Readonly"}),"< ",(0,r.jsx)(n.code,{children:"Ref"}),"< ",(0,r.jsx)(n.code,{children:"undefined"})," | ",(0,r.jsx)(n.code,{children:"Error"})," > >"]}),"\n",(0,r.jsx)(n.h3,{id:"isauthenticated",children:"isAuthenticated"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"isAuthenticated"}),": ",(0,r.jsx)(n.code,{children:"Readonly"}),"< ",(0,r.jsx)(n.code,{children:"Ref"}),"< ",(0,r.jsx)(n.code,{children:"boolean"})," > >"]}),"\n",(0,r.jsx)(n.h3,{id:"isloading",children:"isLoading"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"isLoading"}),": ",(0,r.jsx)(n.code,{children:"Readonly"}),"< ",(0,r.jsx)(n.code,{children:"Ref"}),"< ",(0,r.jsx)(n.code,{children:"boolean"})," > >"]}),"\n",(0,r.jsx)(n.h2,{id:"source",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/logto-io/js/blob/54d7193/packages/vue/src/index.ts#L127",children:"src/index.ts:127"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},17279:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var r=t(50959);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);