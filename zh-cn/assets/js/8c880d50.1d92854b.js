"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3526],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22814:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(59496),a=n(45924),o="tabItem_UXuk";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},58198:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(665),a=n(59496),o=n(45924),l=n(21010),u=n(10061),i=n(41993),s=n(5671),c="tabList_ra65",p="tabItem_Xj8K";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,g=e.groupId,k=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),w=N.tabGroupChoices,E=N.setTabGroupChoices,O=(0,a.useState)(y),T=O[0],D=O[1],C=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var L=w[g];null!=L&&L!==T&&v.some((function(e){return e.value===L}))&&D(L)}var j=function(e){var t=e.currentTarget,n=C.indexOf(t),r=v[n].value;r!==T&&(x(t),D(r),null!=g&&E(g,String(r)))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=C.indexOf(e.currentTarget)+1;n=null!=(r=C[a])?r:C[0];break;case"ArrowLeft":var o,l=C.indexOf(e.currentTarget)-1;n=null!=(o=C[l])?o:C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return C.push(e)},onKeyDown:_,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},79149:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var r=n(665),a=n(40151),o=(n(59496),n(49613)),l=n(22814),u=n(58198),i=n.p+"assets/images/gitpod-running-b10e27a7c1a1dd8eb2202034cdfa7a1f.png",s=["components"],c={},p="\u26a1 \u5f00\u59cb\u4e0a\u624b",d={unversionedId:"docs/tutorials/get-started/README",id:"docs/tutorials/get-started/README",title:"\u26a1 \u5f00\u59cb\u4e0a\u624b",description:"\u542f\u52a8 Logto",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/tutorials/get-started/README.mdx",sourceDirName:"docs/tutorials/get-started",slug:"/docs/tutorials/get-started/",permalink:"/zh-cn/docs/tutorials/get-started/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/tutorials/get-started/README.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udc81 \u7b80\u4ecb",permalink:"/zh-cn/"},next:{title:"\u6765\u8bd5\u8bd5\u6f14\u793a\u5e94\u7528",permalink:"/zh-cn/docs/tutorials/get-started/check-out-demo"}},m={},f=[{value:"\u542f\u52a8 Logto",id:"\u542f\u52a8-logto",level:2},{value:"\u5728\u7ebf",id:"\u5728\u7ebf",level:3},{value:"\u672c\u5730",id:"\u672c\u5730",level:3},{value:"\u521b\u5efa\u4e00\u4e2a\u7ba1\u7406\u5458\u8d26\u6237",id:"\u521b\u5efa\u4e00\u4e2a\u7ba1\u7406\u5458\u8d26\u6237",level:2},{value:"\u300c\u5f00\u59cb\u4e0a\u624b\u300d\u6807\u7b7e\u9875",id:"\u5f00\u59cb\u4e0a\u624b\u6807\u7b7e\u9875",level:2}],g={toc:f};function k(e){var t=e.components,c=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-\u5f00\u59cb\u4e0a\u624b"},"\u26a1 \u5f00\u59cb\u4e0a\u624b"),(0,o.kt)("h2",{id:"\u542f\u52a8-logto"},"\u542f\u52a8 Logto"),(0,o.kt)("h3",{id:"\u5728\u7ebf"},"\u5728\u7ebf"),(0,o.kt)("p",null,"\u5728 Logto \u4ed3\u5e93\u5730\u5740\u7684\u524d\u9762\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"https://gitpod.io/#"),"\uff08\u6216 ",(0,o.kt)("a",{href:"https://gitpod.io/#https://github.com/logto-io/logto",target:"_blank",rel:"noreferrer"},"\u70b9\u6309\u6b64\u5904"),"\uff09\u5e76\u8bbf\u95ee\u8be5\u94fe\u63a5\u3002\u7a0d\u7b49\u7247\u523b\uff0c\u4f60\u4f1a\u5728\u5c4f\u5e55\u4e0b\u65b9\u7684\u7ec8\u7aef\u91cc\u770b\u5230\u7c7b\u4f3c\u5982\u4e0b\u4fe1\u606f\uff1a"),(0,o.kt)("img",{src:i,alt:"Gitpod \u6b63\u5728\u8fd0\u884c",width:"600px"}),(0,o.kt)("p",null,"\u6309\u4f4f Cmd (\u6216 Ctrl) \u5e76\u70b9\u6309\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"https://3001-...")," \u5f00\u5934\u7684\u94fe\u63a5\u5373\u53ef\u7ee7\u7eed\u4f60\u7684 Logto \u4e4b\u65c5\u3002\u73a9\u5f97\u5f00\u5fc3\uff01"),(0,o.kt)("h3",{id:"\u672c\u5730"},"\u672c\u5730"),(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"docker-compose",label:"Docker Compose",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop")," \u901a\u5e38\u81ea\u5e26 Docker Compose CLI\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5728\u7b2c\u4e00\u4e2a\u7a33\u5b9a\u7248\u672c\u4e4b\u524d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"prerelease")," \u4f5c\u4e3a Docker image \u7684 tag\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://raw.githubusercontent.com/logto-io/logto/HEAD/docker-compose.yml | TAG=prerelease docker compose -p logto -f - up\n")),(0,o.kt)("p",null,"\u5728\u6210\u529f\u7f16\u6392\u540e\uff0c\u4f60\u5c06\u770b\u5230\u7c7b\u4f3c\u5982\u4e0b\u7684\u4fe1\u606f\uff1a")),(0,o.kt)(l.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u51c6\u5907\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL"),"@^14.0 \u5b9e\u4f8b\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4ece ghcr.io \u62c9\u53d6\u955c\u50cf\uff1a")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5728\u7b2c\u4e00\u4e2a\u7a33\u5b9a\u7248\u672c\u4e4b\u524d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"prerelease")," \u4f5c\u4e3a Docker image \u7684 tag\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/logto-io/logto:prerelease\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u6620\u5c04\u5bb9\u5668\u7aef\u53e3\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"3001:3001"),"\uff1b\u5e76\u7ed9\u5bb9\u5668\u5982\u4e0b\u73af\u5883\u53d8\u91cf\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"ALL_YES: 1\nNO_INQUIRY: 0\nDB_URL_DEFAULT: postgres://username:password@your_postgres_url:5432 # \u66ff\u6362\u6210\u4f60\u7684 Postgres DSN\n")),(0,o.kt)("p",null,"\u6700\u7ec8\u8fd0\u884c\u8fd9\u4e2a\u5bb9\u5668\uff0c\u4f60\u5c06\u770b\u5230\u7c7b\u4f3c\u5982\u4e0b\u7684\u4fe1\u606f\uff1a")),(0,o.kt)(l.Z,{value:"script",label:"Download script",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u524d\u7f6e\u6761\u4ef6")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," ",(0,o.kt)("inlineCode",{parentName:"li"},"^16.13.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://postgresql.org/"},"PostgreSQL")," ",(0,o.kt)("inlineCode",{parentName:"li"},"^14.0"))),(0,o.kt)("p",null,"\u66f4\u9ad8\u7684\u7248\u672c\u901a\u5e38\u53ef\u4ee5\u5de5\u4f5c\uff0c\u4f46\u4e0d\u6253\u5305\u7968\u3002"),(0,o.kt)("p",null,"\u867d\u7136\u4e0d\u662f\u5f3a\u5236\u8981\u6c42\uff0c\u4f46\u6211\u4eec\u63a8\u8350\u7ed9 Logto \u63d0\u4f9b\u4e00\u4e2a\u4e13\u5c5e\u7684\u7a7a\u6570\u636e\u5e93\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d\u5e76\u5f00\u59cb")),(0,o.kt)("p",null,"\u5728\u4f60\u7684\u7ec8\u7aef\u4e2d\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'node -e "$(printf "%s" "$(curl -fsSL https://raw.githubusercontent.com/logto-io/logto/master/install.js)")"\n')),(0,o.kt)("p",null,"\u8fd9\u4e2a\u811a\u672c\u5c06\u4f1a\u4e0b\u8f7d Logto\uff0c\u5e76\u5728\u4f60\u6267\u884c\u7684\u4f4d\u7f6e\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"logto")," \u7684\u6587\u4ef6\u5939\u3002\u5728\u56de\u7b54\u5b8c\u4e00\u4e9b ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/references/core/configuration#questions"},"\u7b80\u5355\u7684\u95ee\u9898")," \u540e\uff0c\u4f60\u5c06\u770b\u5230\u7c7b\u4f3c\u5982\u4e0b\u7684\u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"App is running at http://localhost:3001\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"App is running at http://localhost:3001\n")),(0,o.kt)("p",null,"\u524d\u5f80 ",(0,o.kt)("a",{target:"_blank",href:"http://localhost:3001/"},"http://localhost:3001/")," \u4ee5\u7ee7\u7eed\u4f60\u7684 Logto \u4e4b\u65c5\u3002\u73a9\u5f97\u5f00\u5fc3\uff01"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u914d\u7f6e\uff08\u53ef\u8df3\u8fc7\uff09"),(0,o.kt)("p",null,"Logto \u4f7f\u7528\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u914d\u7f6e\uff0c\u5e76\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u3002\u4f7f\u7528\u7ec6\u8282\u4ee5\u53ca\u5b8c\u6574\u7684\u53d8\u91cf\u5217\u8868\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/references/core/configuration"},"\u914d\u7f6e")," \u9875\u9762\u3002")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u5982\u679c\u9700\u8981\u66f4\u591a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6216\u8005\u901a\u8fc7\u7a0b\u5e8f\u5316\u7684\u65b9\u5f0f\u8bbf\u95ee Logto\uff0c\u8bf7\u6d4f\u89c8 ",(0,o.kt)("a",{parentName:"em",href:"/zh-cn/docs/references/core/"},"\u6838\u5fc3\u670d\u52a1"),"\u3002")),(0,o.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2a\u7ba1\u7406\u5458\u8d26\u6237"},"\u521b\u5efa\u4e00\u4e2a\u7ba1\u7406\u5458\u8d26\u6237"),(0,o.kt)("p",null,"\u6253\u5f00\u94fe\u63a5\u540e\u4f60\u5c06\u770b\u5230\u4e00\u4e2a\u7b80\u5355\u4ecb\u7ecd\u4e86\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u7684\u6b22\u8fce\u9875\u3002\u70b9\u6309\u300c\u521b\u5efa\u8d26\u6237\u300d\u4ee5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7ba1\u7406\u5458\u8d26\u6237\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u4f60\u65e0\u6cd5\u901a\u8fc7\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u521b\u5efa\u591a\u4e2a\u7ba1\u7406\u5458\u8d26\u6237\uff0c\u5e76\u4e14\u53ea\u6709\u7b2c\u4e00\u4e2a\u8d26\u6237\u62e5\u6709\u7ba1\u7406\u5458\u6743\u9650\u3002\u5982\u679c\u4f60\u60f3\u521b\u5efa\u591a\u4e2a\u7ba1\u7406\u5458\u8d26\u6237\uff0c\u8bf7\u901a\u8fc7\u300c\u7ba1\u7406 API\u300d\u8fdb\u884c\u3002")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u4e00\u65e6\u521b\u5efa\u4e86\u7b2c\u4e00\u4e2a\u8d26\u6237\uff0c\u6b22\u8fce\u9875\u5c06\u4e0d\u518d\u53ef\u7528\u3002")),(0,o.kt)("p",null,"\u5728\u521b\u5efa\u8d26\u6237\u9875\u9762\uff0c\u8f93\u5165\u4f60\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u4ee5\u7ee7\u7eed\u3002"),(0,o.kt)("h2",{id:"\u5f00\u59cb\u4e0a\u624b\u6807\u7b7e\u9875"},"\u300c\u5f00\u59cb\u4e0a\u624b\u300d\u6807\u7b7e\u9875"),(0,o.kt)("p",null,"\u5728\u521b\u5efa\u4e86\u7ba1\u7406\u5458\u8d26\u6237\u540e\uff0c\u6d4f\u89c8\u5668\u5c06\u91cd\u5b9a\u5411\u81f3\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u4e2d\u7684\u300c\u5f00\u59cb\u4e0a\u624b\u300d\u6807\u7b7e\u9875\u3002\u8fd9\u4e2a\u9875\u9762\u5c55\u793a\u4e86\u4e00\u4e9b Logto \u53ef\u4ee5\u505a\u7684\u4e8b\u60c5\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u7684\u6559\u7a0b\u5c06\u6309\u4f60\u770b\u5230\u7684\u987a\u5e8f\u8fdb\u884c\u3002\u8ba9\u6211\u4eec\u5f00\u59cb\u5427\uff01"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5f00\u59cb\u4e0a\u624b",src:n(14799).Z,width:"1920",height:"1159"})))}k.isMDXComponent=!0},14799:function(e,t,n){t.Z=n.p+"assets/images/get-started-9c4233e0534ea363a129821affe94fdc.png"}}]);