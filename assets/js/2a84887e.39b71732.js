"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[20866],{87208:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=a(11527),r=a(17279),s=a(64810),o=a(57101);const l={sidebar_position:4},i="Manage database configs",c={id:"docs/references/using-cli/manage-database-configs",title:"Manage database configs",description:"Logto helps to maintain some technical configs, such as OIDC and Cookie keys. Before we can managing them via Admin Console or Management API, you can use CLI to achieve the goal.",source:"@site/docs/docs/references/using-cli/manage-database-configs.mdx",sourceDirName:"docs/references/using-cli",slug:"/docs/references/using-cli/manage-database-configs",permalink:"/docs/references/using-cli/manage-database-configs",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/using-cli/manage-database-configs.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Database alteration",permalink:"/docs/references/using-cli/database-alteration"},next:{title:"Translation",permalink:"/docs/references/using-cli/translation"}},u={},d=[{value:"Get config by key",id:"get-config-by-key",level:2},{value:"Set config by key",id:"set-config-by-key",level:2}];function g(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"manage-database-configs",children:"Manage database configs"}),"\n",(0,t.jsx)(n.p,{children:"Logto helps to maintain some technical configs, such as OIDC and Cookie keys. Before we can managing them via Admin Console or Management API, you can use CLI to achieve the goal."}),"\n",(0,t.jsx)(n.h2,{id:"get-config-by-key",children:"Get config by key"}),"\n",(0,t.jsx)(n.p,{children:"Usage:"}),"\n",(0,t.jsxs)(o.Z,{groupId:"cmd",children:[(0,t.jsx)(s.Z,{value:"cli",label:"CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"logto db config get <key> [keys...]\n"})})}),(0,t.jsx)(s.Z,{value:"npx",label:"npx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config get <key> [keys...]\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Say you want to get the OIDC private keys:"}),"\n",(0,t.jsxs)(o.Z,{groupId:"cmd",children:[(0,t.jsx)(s.Z,{value:"cli",label:"CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"logto db config get oidc.privateKeys\n"})})}),(0,t.jsx)(s.Z,{value:"npx",label:"npx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config get oidc.privateKeys\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"The output will be like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'oidc.privateKeys=["\\n-----BEGIN PRIVATE KEY-----\\nMIIJRAIBA..."]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"logto db config get --help"})," for all available keys, or see ",(0,t.jsx)(n.a,{href:"/docs/references/core/configuration#database-configs",children:"Configuration"})," for detailed explanation."]}),"\n",(0,t.jsx)(n.h2,{id:"set-config-by-key",children:"Set config by key"}),"\n",(0,t.jsxs)(o.Z,{groupId:"cmd",children:[(0,t.jsx)(s.Z,{value:"cli",label:"CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"logto db config set <key> [keys...]\n"})})}),(0,t.jsx)(s.Z,{value:"npx",label:"npx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config set <key> [keys...]\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Say you want to set the OIDC Cookie keys:"}),"\n",(0,t.jsxs)(o.Z,{groupId:"cmd",children:[(0,t.jsx)(s.Z,{value:"cli",label:"CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'logto db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n'})})}),(0,t.jsx)(s.Z,{value:"npx",label:"npx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'npx @logto/cli db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Normally, the value to set should be a valid JSON string, and follows the pre-defined type definition. Run ",(0,t.jsx)(n.code,{children:"logto db config set --help"})," for all available keys, or see ",(0,t.jsx)(n.a,{href:"/docs/references/core/configuration#database-configs",children:"Configuration"})," for detailed explanation."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},64810:(e,n,a)=>{a.d(n,{Z:()=>o});a(50959);var t=a(5341);const r={tabItem:"tabItem_AcYP"};var s=a(11527);function o(e){let{children:n,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,o),hidden:a,children:n})}},57101:(e,n,a)=>{a.d(n,{Z:()=>k});var t=a(50959),r=a(5341),s=a(78182),o=a(28903),l=a(6746),i=a(4070),c=a(78578),u=a(78195);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:a}=e;const r=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function b(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=g(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=f({queryString:a,groupId:r}),[b,p]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),m=(()=>{const e=c??b;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),p(e)}),[d,p,s]),tabValues:s}}var p=a(78538);const m={tabList:"tabList_dgOp",tabItem:"tabItem_x6F_"};var x=a(11527);function y(e){let{className:n,block:a,selectedValue:t,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,a=i.indexOf(n),r=l[a].value;r!==t&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,x.jsx)(y,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function k(e){const n=(0,p.Z)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},17279:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>o});var t=a(50959);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);