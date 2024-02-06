"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[49616],{81846:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=o(11527),s=o(17279);const t={date:new Date("2023-03-27T00:00:00.000Z"),authors:"gao",tags:["release"]},r="Logto 2023 March Update",a={permalink:"/blog/releases/2023-mar",source:"@site/blog/releases/2023-mar.md",title:"Logto 2023 March Update",description:"Did you know?",date:"2023-03-27T00:00:00.000Z",formattedDate:"March 27, 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:3.97,hasTruncateMarker:!0,authors:[{name:"Gao",title:"Founder of Silverhand",url:"https://github.com/gao-sun",imageURL:"https://github.com/gao-sun.png",key:"gao"}],frontMatter:{date:"2023-03-27T00:00:00.000Z",authors:"gao",tags:["release"]},unlisted:!1,nextItem:{title:"Announcing Logto Cloud (Preview) and OSS General Availability",permalink:"/blog/announcing-logto-cloud-preview"}},l={authorsImageUrls:[void 0]},c=[{value:"\ud83d\udca5 BREAKING CHANGE \ud83d\udca5",id:"-breaking-change-",level:2},{value:"New features",id:"new-features",level:2},{value:"Custom CSS editor",id:"custom-css-editor",level:3},{value:"Image uploader",id:"image-uploader",level:3},{value:"Console profile page",id:"console-profile-page",level:3},{value:"Sign-in experience",id:"sign-in-experience",level:3},{value:"CLI",id:"cli",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Add parameter to specify showing sign-in or sign-up",id:"add-parameter-to-specify-showing-sign-in-or-sign-up",level:3},{value:"Country code selector",id:"country-code-selector",level:3},{value:"Custom favicon",id:"custom-favicon",level:3},{value:"Dynamic HTML titles",id:"dynamic-html-titles",level:3},{value:"Enhanced password policy",id:"enhanced-password-policy",level:3},{value:"Implement a lite version of set password form",id:"implement-a-lite-version-of-set-password-form",level:3},{value:"Support Privacy Policy URL",id:"support-privacy-policy-url",level:3},{value:"Simplify the Terms of Use and Privacy Policy manual agreement for the sign-in flow",id:"simplify-the-terms-of-use-and-privacy-policy-manual-agreement-for-the-sign-in-flow",level:3},{value:"New Contributors",id:"new-contributors",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Did you know?"})}),"\nWe have refreshed the Logto logo! We simplified the gradients but made our brand color stronger, resulting in improved recognizability."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We are grateful for your participation in testing Logto OSS, and we're excited to announce our first general availability version. In this version, we have delivered numerous improvements to the sign-in experience, making it more delightful for your end-users. This new release also includes several new practical features."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),"\nIn case you missed it, please see the letter from Gao: ",(0,i.jsx)(n.a,{href:"https://docs.logto.io/blog/announcing-logto-cloud-preview",children:"Announcing Logto Cloud (Preview) and OSS General Availability"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let's take a look at what's new!"}),"\n",(0,i.jsx)(n.h2,{id:"-breaking-change-",children:"\ud83d\udca5 BREAKING CHANGE \ud83d\udca5"}),"\n",(0,i.jsxs)(n.p,{children:["Rename the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/api/phrase"})})," API to ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"/api/.well-known/phrases"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"new-features",children:"New features"}),"\n",(0,i.jsx)(n.h3,{id:"custom-css-editor",children:"Custom CSS editor"}),"\n",(0,i.jsx)(n.p,{children:"The console now has a custom CSS code editor in the \u201cSign-in experience\u201d tab that allows you to apply advanced UI customization to your application. You can preview your changes in real-time via the sign-in experience preview on the right side."}),"\n",(0,i.jsx)("img",{width:"593",alt:"image",src:"https://user-images.githubusercontent.com/14722250/227727339-d8e284d0-30af-493e-957a-ebacd45e1c09.png"}),"\n",(0,i.jsx)(n.h3,{id:"image-uploader",children:"Image uploader"}),"\n",(0,i.jsxs)(n.p,{children:["The console now supports a drag-and-drop image uploader for multiple scenarios. If a storage provider is configured in the system, you can upload images directly from your local file system. The first version of the uploader supports AWS S3 and Azure Blob Storage. For more information, please refer to the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/configure-storage-providers/",children:"File storage provider"})})," documentation."]}),"\n",(0,i.jsx)("img",{width:"579",alt:"image",src:"https://user-images.githubusercontent.com/14722250/227727364-7b8e1c92-72e6-4383-b633-087581edfc4f.png"}),"\n",(0,i.jsx)(n.h3,{id:"console-profile-page",children:"Console profile page"}),"\n",(0,i.jsx)(n.p,{children:"We have removed the previous profile component and moved it to the user profile page. You can access the page by clicking your user avatar in the top right corner. From there, you can also change your language or theme directly from the popover menu."}),"\n",(0,i.jsx)("img",{width:"350",alt:"image",src:"https://user-images.githubusercontent.com/14722250/227727413-cf90c33f-84bf-4635-91ca-9703e95f8a0d.png"}),"\n",(0,i.jsx)(n.p,{children:"On the profile page, you can update your avatar, name, and username, as well as change your password. For cloud users, it is now possible to link your email address and social accounts (Google and GitHub at first launch)."}),"\n",(0,i.jsx)(n.h3,{id:"sign-in-experience",children:"Sign-in experience"}),"\n",(0,i.jsx)(n.p,{children:'Added "Powered by Logto" to the sign-in experience.'}),"\n",(0,i.jsx)("img",{width:"153",alt:"image",src:"https://user-images.githubusercontent.com/14722250/227727454-267509ba-d6fb-4dd2-927d-2dcbe1a7e81a.png"}),"\n",(0,i.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,i.jsxs)(n.p,{children:["We have added a new CLI command ",(0,i.jsx)(n.code,{children:"db system"})," that allows you to get/set the system table value for your database. Enter ",(0,i.jsx)(n.code,{children:"logto db system --help"})," in your terminal for details."]}),"\n",(0,i.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,i.jsx)(n.h3,{id:"add-parameter-to-specify-showing-sign-in-or-sign-up",children:"Add parameter to specify showing sign-in or sign-up"}),"\n",(0,i.jsx)(n.p,{children:"A new parameter have been added to our JavaScript SDKs which allows users to specify their desired user interaction experience. For instance, in our React SDK:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const { signIn } = useLogto();\n\n// Shows the sign-in page\nvoid signIn('https://some-callback-url');\n\n// Shows the sign-up page\nvoid signIn('https://some-callback-url', 'signUp');\n"})}),"\n",(0,i.jsx)(n.p,{children:"Other SDKs will be updated soon."}),"\n",(0,i.jsx)(n.h3,{id:"country-code-selector",children:"Country code selector"}),"\n",(0,i.jsx)(n.p,{children:"A new country code selector dropdown component with a search box has been added to sign-in experience, allowing users to quickly search for a country code by typing in the search box."}),"\n",(0,i.jsx)("img",{width:"430",alt:"image",src:"https://user-images.githubusercontent.com/14722250/227727560-4da65476-a8f9-4534-84b1-0b6876584ccd.png"}),"\n",(0,i.jsx)(n.h3,{id:"custom-favicon",children:"Custom favicon"}),"\n",(0,i.jsx)(n.p,{children:"Users can now upload their own favicon in the sign-in-experience branding settings. A local logto icon will be used as a fallback."}),"\n",(0,i.jsx)("img",{width:"550",alt:"image",src:"https://user-images.githubusercontent.com/14722250/227727577-87fd8d13-e450-445d-9020-e26a00191b04.png"}),"\n",(0,i.jsx)(n.h3,{id:"dynamic-html-titles",children:"Dynamic HTML titles"}),"\n",(0,i.jsx)(n.p,{children:"Instead of showing \u201cLogto\u201d, now sign-in experience will change the page title based on the current context, for example, \u201cCreate account\u201d."}),"\n",(0,i.jsx)(n.h3,{id:"enhanced-password-policy",children:"Enhanced password policy"}),"\n",(0,i.jsx)(n.p,{children:"The password policy has been updated to require a minimum of 8 characters and contain a mix of letters, numbers, and symbols. The allowed characters now include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Digits: ",(0,i.jsx)(n.code,{children:"0-9"})]}),"\n",(0,i.jsxs)(n.li,{children:["Letters: ",(0,i.jsx)(n.code,{children:"a-z"}),", ",(0,i.jsx)(n.code,{children:"A-Z"})]}),"\n",(0,i.jsxs)(n.li,{children:["Symbols: ",(0,i.jsx)(n.code,{children:"!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Users must now use at least two out of three types of characters."}),"\n",(0,i.jsx)(n.p,{children:"Note the new password policy only applies to new users or new passwords. Existing users can continue to use their old password to sign in."}),"\n",(0,i.jsx)(n.h3,{id:"implement-a-lite-version-of-set-password-form",children:"Implement a lite version of set password form"}),"\n",(0,i.jsx)(n.p,{children:"The new lite version only contains one field for the password and will be used only if the forgot-password feature is enabled (password can be reset either by email and phone). If you don't have any email or SMS service enabled, the old version of set password form containing two fields (password and confirm password) will still be used."}),"\n",(0,i.jsx)(n.h3,{id:"support-privacy-policy-url",children:"Support Privacy Policy URL"}),"\n",(0,i.jsx)(n.p,{children:"A new Privacy Policy URL field has been added to the sign-in-experience settings to support end-users' privacy declaration needs."}),"\n",(0,i.jsx)(n.h3,{id:"simplify-the-terms-of-use-and-privacy-policy-manual-agreement-for-the-sign-in-flow",children:"Simplify the Terms of Use and Privacy Policy manual agreement for the sign-in flow"}),"\n",(0,i.jsx)(n.p,{children:"The Terms of Use and Privacy Policy manual agreement steps have been removed from the sign-in flow. The agreement checkbox in sign-in pages has been replaced with links to the Terms of Use and Privacy Policy."}),"\n",(0,i.jsx)(n.p,{children:"Users can still read the agreements before signing in. However, the manual agreement is still mandatory for the sign-up flow, including sign-up with new social identities."}),"\n",(0,i.jsx)(n.h2,{id:"new-contributors",children:"New Contributors"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["@Eengineer1 made their first contribution in ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/logto/pull/3431",children:"https://github.com/logto-io/logto/pull/3431"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},17279:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var i=o(50959);const s={},t=i.createContext(s);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);