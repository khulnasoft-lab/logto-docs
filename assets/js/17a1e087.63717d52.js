"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[59038],{17146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(11527),o=t(17279),l=t(64810),a=t(57101);const s={sidebar_position:1},i="Install Logto",c={id:"docs/references/using-cli/install-logto",title:"Install Logto",description:"Interactive",source:"@site/docs/docs/references/using-cli/install-logto.mdx",sourceDirName:"docs/references/using-cli",slug:"/docs/references/using-cli/install-logto",permalink:"/docs/references/using-cli/install-logto",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/using-cli/install-logto.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83d\udda5 Using Logto CLI",permalink:"/docs/references/using-cli/"},next:{title:"Manage connectors",permalink:"/docs/references/using-cli/manage-connectors"}},u={},d=[{value:"Interactive",id:"interactive",level:2},{value:"Options and silent installation",id:"options-and-silent-installation",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"install-logto",children:"Install Logto"}),"\n",(0,r.jsx)(n.h2,{id:"interactive",children:"Interactive"}),"\n",(0,r.jsx)(n.p,{children:"Run the command below to proceed an interactive installation in your terminal:"}),"\n",(0,r.jsxs)(a.Z,{groupId:"cmd",children:[(0,r.jsx)(l.Z,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto init\n"})})}),(0,r.jsx)(l.Z,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm init @logto@latest\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"options-and-silent-installation",children:"Options and silent installation"}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, you can add the options below to skip some questions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# All these options are optional\n--db-url      The Postgres URL to Logto database\n-p, --path    Path to your Logto instance, must be a non-existing path\n--ss          Skip Logto database seeding\n--oc          Add official connectors after installation\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"logto init --help"})," for full help info."]}),"\n",(0,r.jsx)(n.p,{children:"Here's an example for performing a silent installation (e.g., in CI):"}),"\n",(0,r.jsxs)(a.Z,{groupId:"cmd",children:[(0,r.jsx)(l.Z,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto init -p ./logto --db-url postgresql://your-postgres-dsn:5432/logto --oc\n"})})}),(0,r.jsx)(l.Z,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli init -p ./logto --db-url postgresql://your-postgres-dsn:5432/logto --oc\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"It will do the following things in order:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Download and extract Logto into ",(0,r.jsx)(n.code,{children:"./logto"})]}),"\n",(0,r.jsxs)(n.li,{children:["Try to init and seed database with URL ",(0,r.jsx)(n.code,{children:"postgresql://your-postgres-dsn:5432/logto"})]}),"\n",(0,r.jsxs)(n.li,{children:["Add Logto official connectors to ",(0,r.jsx)(n.code,{children:"./logto/packages/core/connectors"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},64810:(e,n,t)=>{t.d(n,{Z:()=>a});t(50959);var r=t(5341);const o={tabItem:"tabItem_AcYP"};var l=t(11527);function a(e){let{children:n,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,a),hidden:t,children:n})}},57101:(e,n,t)=>{t.d(n,{Z:()=>I});var r=t(50959),o=t(5341),l=t(78182),a=t(28903),s=t(6746),i=t(4070),c=t(78578),u=t(78195);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(o.location.search);n.set(l,e),o.replace({...o.location,search:n.toString()})}),[l,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,l=p(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=g({queryString:t,groupId:o}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,l]=(0,u.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:o}),m=(()=>{const e=c??f;return h({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(78538);const m={tabList:"tabList_dgOp",tabItem:"tabItem_x6F_"};var v=t(11527);function x(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),o=s[t].value;o!==r&&(c(n),a(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,o.Z)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function I(e){const n=(0,b.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},17279:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(50959);const o={},l=r.createContext(o);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);