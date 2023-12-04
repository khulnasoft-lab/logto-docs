"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[74310],{60486:function(n,e,t){t.d(e,{ZP:function(){return a}});var o=t(11527),i=t(17279);function r(n){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u2139\ufe0f ",(0,o.jsx)(e.strong,{children:"Note"})]}),"\n",(0,o.jsx)(e.p,{children:"Apple sign-in is required for AppStore if you have other social sign-in methods in your app.\nHaving Apple sign-in on Android devices is great if you also provide an Android app."}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["You need to enroll ",(0,o.jsx)(e.a,{href:"https://developer.apple.com/programs/",children:"Apple Developer Program"})," before continuing."]}),"\n",(0,o.jsx)(e.h3,{id:"enable-sign-in-with-apple-for-your-app",children:"Enable Sign in with Apple for your app"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u26a0\ufe0f ",(0,o.jsx)(e.strong,{children:"Caution"})]}),"\n",(0,o.jsx)(e.p,{children:"Even if you want to implement Sign in with Apple on a web app only, you still need to have an existing app that embraces the AppStore ecosystem (i.e., have a valid App ID)."}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["You can do it via Xcode -> Project settings -> Signing & Capabilities, or visit ",(0,o.jsx)(e.a,{href:"https://developer.apple.com/account/resources/identifiers/list/bundleId",children:"Certificates, Identifiers & Profiles"}),"."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Enable Sign in with Apple",src:t(16330).Z+"",width:"1220",height:"398"})}),"\n",(0,o.jsxs)(e.p,{children:['See the "Enable an App ID" section in ',(0,o.jsx)(e.a,{href:"https://developer.apple.com/documentation/sign_in_with_apple/configuring_your_environment_for_sign_in_with_apple",children:"Apple official docs"})," for more info."]}),"\n",(0,o.jsx)(e.h3,{id:"create-an-identifier",children:"Create an identifier"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["Visit ",(0,o.jsx)(e.a,{href:"https://developer.apple.com/account/resources/identifiers/list/serviceId",children:"Certificates, Identifiers & Profiles"}),', then click the "+" button next to "Identifier".']}),"\n",(0,o.jsx)(e.li,{children:'In the "Register a new identifier" page, choose "Services IDs" and click "Continue".'}),"\n",(0,o.jsxs)(e.li,{children:['Fill out "Description" and "Identifier" (E.g., ',(0,o.jsx)(e.code,{children:"Logto Test"})," and ",(0,o.jsx)(e.code,{children:"io.logto.test"}),'), then click "Continue".']}),"\n",(0,o.jsx)(e.li,{children:'Double-check the info and click "Register".'}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"enable-sign-in-with-apple-for-your-identifier",children:"Enable Sign in with Apple for your identifier"}),"\n",(0,o.jsx)(e.p,{children:'Click the identifier you just created. Check "Sign in with Apple" on the details page and click "Configure".'}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Enable Sign in with Apple",src:t(61831).Z+"",width:"1170",height:"186"})}),"\n",(0,o.jsx)(e.p,{children:"In the opening modal, select the App ID you just enabled Sign in with Apple."}),"\n",(0,o.jsxs)(e.p,{children:["Enter the domain of your Logto instance without protocol and port, e.g., ",(0,o.jsx)(e.code,{children:"your.logto.domain"}),'; then enter the "Return URL" (i.e., Redirect URI), which is the Logto URL with ',(0,o.jsx)(e.code,{children:"/callback/${connector_id}"}),", e.g., ",(0,o.jsx)(e.code,{children:"https://your.logto.domain/callback/apple-universal"}),". You can get the randomly generated ",(0,o.jsx)(e.code,{children:"connector_id"})," after creating Apple connector in Admin Console."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"domain-and-url",src:t(88255).Z+"",width:"988",height:"668"})}),"\n",(0,o.jsx)(e.p,{children:'Click "Next" then "Done" to close the modal. Click "Continue" on the top-right corner, then click "Save" to save your configuration.'}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u26a0\ufe0f ",(0,o.jsx)(e.strong,{children:"Caution"})]}),"\n",(0,o.jsxs)(e.p,{children:["Apple does NOT allow Return URLs with HTTP protocol and ",(0,o.jsx)(e.code,{children:"localhost"})," domain."]}),"\n",(0,o.jsxs)(e.p,{children:["If you want to test locally, you need to edit ",(0,o.jsx)(e.code,{children:"/etc/hosts"})," file to map localhost to a custom domain and set up a local HTTPS environment. ",(0,o.jsx)(e.a,{href:"https://github.com/FiloSottile/mkcert",children:"mkcert"})," can help you for setting up local HTTPS."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,o.jsxs)(e.p,{children:["You need to use the identifier that fills in the ",(0,o.jsx)(e.a,{href:"#create-an-identifier",children:"Create an identifier"})," section to compose the JSON:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n  "clientId": "io.logto.test"\n}\n'})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u2139\ufe0f ",(0,o.jsx)(e.strong,{children:"Note"})]}),"\n",(0,o.jsxs)(e.p,{children:["This connector doesn't support customizing ",(0,o.jsx)(e.code,{children:"scope"})," (e.g., name, email) yet since Apple requires ",(0,o.jsx)(e.code,{children:"form_post"})," response mode when ",(0,o.jsx)(e.code,{children:"scope"})," is not empty, which is incompatible with the current connector design."]}),"\n",(0,o.jsx)(e.p,{children:"We'll figure out this later."}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},44263:function(n,e,t){t.d(e,{ZP:function(){return h}});var o=t(11527),i=t(17279),r=t(45610),a=t(80302),s=t(73544),c=t(87739),l=t(36618),d=t(74976),u=t(13994);function p(n){const e={h2:"h2",h3:"h3",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"add-logto-sdk-as-a-dependency",children:"Add Logto SDK as a dependency"}),"\n",(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(e.h2,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,o.jsx)(c.ZP,{}),"\n",(0,o.jsx)(e.h2,{id:"sign-in",children:"Sign in"}),"\n",(0,o.jsx)(e.h3,{id:"configure-redirect-uri",children:"Configure Redirect URI"}),"\n",(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(d.ZP,{figureSrc:l.Z,redirectUri:"io.logto.android://io.logto.sample/callback"}),"\n",(0,o.jsx)(e.h3,{id:"sign-in-1",children:"Sign in"}),"\n",(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(u.ZP,{sdk:"Android"})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},55458:function(n,e,t){t.d(e,{ZP:function(){return a}});var o=t(11527),i=t(17279);function r(n){const e={img:"img",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Connector tab",src:t(10766).Z+"",width:"3352",height:"1226"})}),"\n",(0,o.jsxs)("p",{children:['In the openning modal, select "',n.connector,'" and click "Next".']}),"\n",(0,o.jsx)(e.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,o.jsx)(e.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},32778:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279),r=t.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png";function a(n){const e={h3:"h3",img:"img",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Create application",src:t(95561).Z+"",width:"2368",height:"226"})}),"\n",(0,o.jsx)(e.p,{children:'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'}),"\n",(0,o.jsx)(e.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,o.jsxs)("p",{children:['In the opening modal, select the "',n.type,'" option as the application type.']}),"\n",(0,o.jsx)("img",{src:r,alt:"Create Application modal",width:"700"}),"\n",(0,o.jsx)(e.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,o.jsx)(e.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,o.jsx)(e.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},81057:function(n,e,t){t.d(e,{ZP:function(){return a}});var o=t(11527),i=t(17279);function r(n){const e={admonition:"admonition",img:"img",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Sign-in Experience tab",src:t(65266).Z+"",width:"3160",height:"1822"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',n.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',n.connector,'". Then\nyou should be able to see a button with text "Continue with ',n.connector,'" in the preview\nsection.']})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Save changes",src:t(79120).Z+"",width:"2474",height:"188"})}),"\n",(0,o.jsx)(e.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},10444:function(n,e,t){t.d(e,{ZP:function(){return a}});var o=t(11527),i=t(17279);function r(n){const e={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.admonition,{title:"For our new friends",type:"info",children:(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://logto.io",children:"Logto"})," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control."]})}),"\n",(0,o.jsxs)("p",{children:[(0,o.jsxs)(e.p,{children:["In this article, we will go through the steps to quickly build the ",n.connector," sign-in\nexperience (user authentication) with"," "]}),(0,o.jsx)("a",{href:n.link,target:"_blank",rel:"noopener",children:n.sdk}),(0,o.jsx)("span",{children:" and "}),(0,o.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:(0,o.jsx)(e.p,{children:"Logto"})}),(0,o.jsx)(e.p,{children:"."})]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Prerequisites"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["A running Logto instance. Check out the ",(0,o.jsx)(e.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)("span",{children:[(0,o.jsxs)(e.p,{children:["Basic knowledge of"," "]}),(0,o.jsx)("a",{href:n.link,target:"_blank",rel:"noopener",children:n.sdk}),(0,o.jsx)(e.p,{children:"."})]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)("span",{children:["A usable ",n.connector," account."]}),"\n"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},69441:function(n,e,t){t.d(e,{ZP:function(){return a}});var o=t(11527),i=t(17279);function r(n){const e={p:"p",...(0,i.a)(),...n.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."]})})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},13994:function(n,e,t){t.d(e,{ZP:function(){return a}});var o=t(11527),i=t(17279);function r(n){const e={admonition:"admonition",p:"p",...(0,i.a)(),...n.components};return(0,o.jsx)(e.admonition,{title:"Test your integration",type:"info",children:(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},93974:function(n,e,t){t.d(e,{ZP:function(){return a}});var o=t(11527),i=t(17279);function r(n){const e={p:"p",...(0,i.a)(),...n.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"]})})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},61109:function(n,e,t){t.r(e),t.d(e,{assets:function(){return f},connector:function(){return j},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return h},metadata:function(){return x},toc:function(){return m}});var o=t(11527),i=t(17279),r=t(10444),a=t(32778),s=t(55458),c=t(69441),l=t(81057),d=t(93974),u=t(44263),p=t(60486);const h={slug:"how-to-build-apple-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","apple","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with Android and Logto"},g=void 0,x={permalink:"/tutorial/how-to-build-apple-sign-in-with-android-and-logto",source:"@site/tutorial/build-with-logto/generated-android-apple.mdx",title:"How to build Apple sign-in with Android and Logto",description:"\x3c!--",date:"2023-12-04T08:45:35.875Z",formattedDate:"December 4, 2023",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"apple",permalink:"/tutorial/tags/apple"},{label:"android",permalink:"/tutorial/tags/android"},{label:"kotlin/java",permalink:"/tutorial/tags/kotlin-java"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.275,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-apple-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","apple","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with Android and Logto"},unlisted:!1,prevItem:{title:"How to build SAML sign-in with Express and Logto",permalink:"/tutorial/how-to-build-saml-sign-in-with-express-and-logto"},nextItem:{title:"How to build Azure AD sign-in with Android and Logto",permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-android-and-logto"}},f={authorsImageUrls:[void 0]},m=[{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},{value:"Add Apple connector",id:"add-apple-connector",level:2},{value:"Set up Apple Sign-in",id:"set-up-apple-sign-in",level:2},{value:"Save your configuraiton",id:"save-your-configuraiton",level:2},{value:"Enable Apple connector in Sign-in Experience",id:"enable-apple-connector-in-sign-in-experience",level:2},{value:"Testing and Validation",id:"testing-and-validation",level:2},{value:"Further readings",id:"further-readings",level:2}],j="Apple";function b(n){const e={a:"a",h2:"h2",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.ZP,{connector:j,sdk:"Android",link:"https://developer.android.com/"}),"\n",(0,o.jsx)(e.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,o.jsx)(a.ZP,{type:"Native App"}),"\n",(0,o.jsx)(e.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,o.jsx)(u.ZP,{}),"\n",(0,o.jsx)(e.h2,{id:"add-apple-connector",children:"Add Apple connector"}),"\n",(0,o.jsx)(s.ZP,{connector:j}),"\n",(0,o.jsx)(e.h2,{id:"set-up-apple-sign-in",children:"Set up Apple Sign-in"}),"\n",(0,o.jsx)(p.ZP,{}),"\n",(0,o.jsx)(e.h2,{id:"save-your-configuraiton",children:"Save your configuraiton"}),"\n",(0,o.jsx)(c.ZP,{connector:j}),"\n",(0,o.jsx)(e.h2,{id:"enable-apple-connector-in-sign-in-experience",children:"Enable Apple connector in Sign-in Experience"}),"\n",(0,o.jsx)(l.ZP,{connector:j}),"\n",(0,o.jsx)(e.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,o.jsx)(d.ZP,{connector:j,sdk:"Android"}),"\n",(0,o.jsx)(e.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,o.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,o.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,o.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function v(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(b,{...n})}):b(n)}},45610:function(n,e,t){t.d(e,{ZP:function(){return c}});var o=t(11527),i=t(17279),r=t(75268),a=t(67234);function s(n){const e={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"The minimum supported Android API level of Logto Andorid SDK is level 24."})}),"\n",(0,o.jsxs)(e.p,{children:["Add the ",(0,o.jsx)(e.code,{children:"mavenCentral()"})," repository to your Gradle project build file:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:"repositories {\n    mavenCentral()\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"Add Logto Android SDK to your dependencies:"}),"\n",(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(r.Z,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:'dependencies {\n    implementation("io.logto.sdk:android:1.0.0-alpha.0")\n}\n'})})}),(0,o.jsx)(r.Z,{value:"groovy",label:"Groovy",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-groovy",children:"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0-alpha.0'\n}\n"})})})]})]})}function c(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(s,{...n})}):s(n)}},80302:function(n,e,t){t.d(e,{ZP:function(){return a}});var o=t(11527),i=t(17279);function r(n){const e={admonition:"admonition",br:"br",code:"code",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["In Android, the Redirect URI follows the pattern: ",(0,o.jsx)(e.code,{children:"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"}),"."]}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"LOGTO_REDIRECT_SCHEME"})," should be a custom scheme in the reverse domain format.",(0,o.jsx)(e.br,{}),"\n","The ",(0,o.jsx)(e.code,{children:"YOUR_APP_PACKAGE"})," is your app package name."]})}),"\n",(0,o.jsxs)(e.p,{children:["Assuming you treat ",(0,o.jsx)(e.code,{children:"io.logto.android"})," as the custom ",(0,o.jsx)(e.code,{children:"LOGTO_REDIRECT_SCHEME"}),", and ",(0,o.jsx)(e.code,{children:"io.logto.sample"})," is your app package name, the Redirect URI should be ",(0,o.jsx)(e.code,{children:"io.logto.android://io.logto.sample/callback"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["Now you can configure the Redirect URI in the admin console (Take ",(0,o.jsx)(e.code,{children:"io.logto.android://io.logto.sample/callback"})," as an example)."]})]})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},73544:function(n,e,t){t.d(e,{ZP:function(){return h}});var o=t(11527),i=t(17279),r=t(75268),a=t(67234),s=t(45969);function c(n){const e={code:"code",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // User signed in successfully if `logtoException` is null.\n});\n'})})}function l(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}function d(n){const e={code:"code",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // User signed in successfully if `logtoException` is null.\n}\n'})})}function u(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}function p(n){const e={code:"code",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.ZP,{calling:".signIn(context, redirectUri, completion)"}),"\n",(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(r.Z,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(u,{})}),(0,o.jsx)(r.Z,{value:"java",label:"Java",children:(0,o.jsx)(l,{})})]}),"\n",(0,o.jsxs)(e.p,{children:["After signing in successfully, ",(0,o.jsx)(e.code,{children:"logtoClient.isAuthenticated"})," will be ",(0,o.jsx)(e.code,{children:"true"}),"."]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},87739:function(n,e,t){t.d(e,{ZP:function(){return p}});var o=t(11527),i=t(17279),r=t(75268),a=t(67234);function s(n){const e={code:"code",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n'})})}function c(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(s,{...n})}):s(n)}function l(n){const e={code:"code",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n'})})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}function u(n){const e={admonition:"admonition",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"Ensure the Application object has been initialized before creating a LogtoClient."})}),"\n",(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(r.Z,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(d,{})}),(0,o.jsx)(r.Z,{value:"java",label:"Java",children:(0,o.jsx)(c,{})})]})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},74976:function(n,e,t){t.d(e,{ZP:function(){return a}});var o=t(11527),i=t(17279);function r(n){const e={a:"a",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Let's switch to the Application details page of Admin Console in this section. Add a Redirect\nURI ",(0,o.jsx)("code",{children:n.redirectUri}),' and click "Save Changes".']})}),"\n",(0,o.jsx)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},45969:function(n,e,t){t.d(e,{ZP:function(){return a}});var o=t(11527),i=t(17279);function r(n){const e={admonition:"admonition",p:"p",...(0,i.a)(),...n.components};return(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Before calling ",(0,o.jsx)("code",{children:n.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},75268:function(n,e,t){t.d(e,{Z:function(){return a}});t(50959);var o=t(45924),i={tabItem:"tabItem_zBCg"},r=t(11527);function a(n){let{children:e,hidden:t,className:a}=n;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,a),hidden:t,children:e})}},67234:function(n,e,t){t.d(e,{Z:function(){return y}});var o=t(50959),i=t(45924),r=t(58748),a=t(28903),s=t(88137),c=t(70670),l=t(91391),d=t(47841);function u(n){return o.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,o.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(n){const{values:e,children:t}=n;return(0,o.useMemo)((()=>{const n=e??function(n){return u(n).map((n=>{let{props:{value:e,label:t,attributes:o,default:i}}=n;return{value:e,label:t,attributes:o,default:i}}))}(t);return function(n){const e=(0,l.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function h(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function g(n){let{queryString:e=!1,groupId:t}=n;const i=(0,a.k6)(),r=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,c._X)(r),(0,o.useCallback)((n=>{if(!r)return;const e=new URLSearchParams(i.location.search);e.set(r,n),i.replace({...i.location,search:e.toString()})}),[r,i])]}function x(n){const{defaultValue:e,queryString:t=!1,groupId:i}=n,r=p(n),[a,c]=(0,o.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const o=t.find((n=>n.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:e,tabValues:r}))),[l,u]=g({queryString:t,groupId:i}),[x,f]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[i,r]=(0,d.Nk)(t);return[i,(0,o.useCallback)((n=>{t&&r.set(n)}),[t,r])]}({groupId:i}),m=(()=>{const n=l??x;return h({value:n,tabValues:r})?n:null})();(0,s.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:a,selectValue:(0,o.useCallback)((n=>{if(!h({value:n,tabValues:r}))throw new Error(`Can't select invalid tab value=${n}`);c(n),u(n),f(n)}),[u,f,r]),tabValues:r}}var f=t(77691),m={tabList:"tabList_nHxI",tabItem:"tabItem_BSGW"},j=t(11527);function b(n){let{className:e,block:t,selectedValue:o,selectValue:a,tabValues:s}=n;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),d=n=>{const e=n.currentTarget,t=c.indexOf(e),i=s[t].value;i!==o&&(l(e),a(i))},u=n=>{let e=null;switch(n.key){case"Enter":d(n);break;case"ArrowRight":{const t=c.indexOf(n.currentTarget)+1;e=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(n.currentTarget)-1;e=c[t]??c[c.length-1];break}}e?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},e),children:s.map((n=>{let{value:e,label:t,attributes:r}=n;return(0,j.jsx)("li",{role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,ref:n=>c.push(n),onKeyDown:u,onClick:d,...r,className:(0,i.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":o===e}),children:t??e},e)}))})}function v(n){let{lazy:e,children:t,selectedValue:i}=n;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=r.find((n=>n.props.value===i));return n?(0,o.cloneElement)(n,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((n,e)=>(0,o.cloneElement)(n,{key:e,hidden:n.props.value!==i})))})}function w(n){const e=x(n);return(0,j.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function y(n){const e=(0,f.Z)();return(0,j.jsx)(w,{...n,children:u(n.children)},String(e))}},36618:function(n,e,t){e.Z=t.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png"},10766:function(n,e,t){e.Z=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},95561:function(n,e,t){e.Z=t.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},88255:function(n,e,t){e.Z=t.p+"assets/images/domain-and-url-f8f432e8a15c2c1cdf9e59b1a2b72049.png"},16330:function(n,e,t){e.Z=t.p+"assets/images/enable-sign-in-with-apple-in-xcode-26680889a51468c3671f3011fd44b5f1.png"},61831:function(n,e,t){e.Z=t.p+"assets/images/enable-sign-in-with-apple-42664e79db1a8966b1fc626a4bb67269.png"},79120:function(n,e,t){e.Z=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},65266:function(n,e,t){e.Z=t.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"},17279:function(n,e,t){t.d(e,{Z:function(){return s},a:function(){return a}});var o=t(50959);const i={},r=o.createContext(i);function a(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);