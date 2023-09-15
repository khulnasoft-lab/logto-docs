"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[85427],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8316:function(e,t,n){n.r(t),n.d(t,{assets:function(){return B},contentTitle:function(){return I},default:function(){return x},frontMatter:function(){return T},metadata:function(){return w},toc:function(){return Z}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=n(50147),l=n(52076),p=n(47121),d=n(30622),u=["components"],s={toc:[]};function c(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Our flutter SDK package is published on ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/logto_dart_sdk"},"pub.dev"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"flutter pub get logto_dart_sdk\n")),(0,o.kt)("p",null,"Or you may directly get your own copy of the SDK from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/logto-io/dart"},"github")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/logto-io/dart\n")))}c.isMDXComponent=!0;var m=["components"],g={toc:[{value:"Config Android version:",id:"config-android-version",level:3}]};function k(e){var t=e.components,n=(0,r.Z)(e,m);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,"flutter_secure_storage"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/flutter_secure_storage"},"flutter_secure_storage")," to implement the cross-platform persistent secure token storage."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Keychain is used for iOS"),(0,o.kt)("li",{parentName:"ul"},"AES encryption is used for Android.")),(0,o.kt)("h3",{id:"config-android-version"},"Config Android version:"),(0,o.kt)("p",null,"In ","[project]","/android/app/build.gradle set minSdkVersion to >= 18."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gradle"},"android {\n    ...\n\n    defaultConfig {\n        ...\n        minSdkVersion 18\n        ...\n    }\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"By default Android backups data on Google Drive. It can cause exception java.security.InvalidKeyException:Failed to unwrap key. You will need to:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"disable autobackup,"),(0,o.kt)("li",{parentName:"ul"},"or exclude sharedprefs FlutterSecureStorage used by the plugin"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To disable auto backup, go to your app manifest file and set the boolean value android:allowBackup:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<manifest ... >\n    ...\n    <application\n      android:allowBackup="false"\n      android:fullBackupContent="false"\n      ...\n    >\n        ...\n    </application>\n</manifest>\n\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Exclude sharedprefs FlutterSecureStorage.")),(0,o.kt)("p",null,"If you need to enable the android:fullBackupContent for your app. Set up a backup rule to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/data/autobackup#IncludingFiles"},"exclude")," the prefs used by the plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<application ...\n  android:fullBackupContent="@xml/backup_rules">\n</application>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<full-backup-content>\n  <exclude domain="sharedpref" path="FlutterSecureStorage"/>\n</full-backup-content>\n')),(0,o.kt)("p",null,"Please check ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/flutter_secure_storage#configure-android-version"},"flutter_secure_storage")," for more details.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"flutter_web_auth"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/flutter_web_auth"},"flutter_web_auth")," is used behind Logto's flutter SDK. We rely on its webview-based interaction interface to open Logto's authorization pages."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Under the hood, this plugin uses ASWebAuthenticationSession on iOS 12+ and macOS 10.15+, SFAuthenticationSession on iOS 11, Chrome Custom Tabs on Android and opens a new window on Web. You can build it with iOS 8+, but it is currently only supported by iOS 11 or higher.")),(0,o.kt)("p",null,"Andorid:"),(0,o.kt)("p",null,"In order to capture the callback url from Logto's sign-in web page, you will need to register your sign-in redirectUri to the AndroidManifest.xml."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<activity android:name="com.linusu.flutter_web_auth.CallbackActivity" android:exported="true">\n    <intent-filter android:label="flutter_web_auth">\n        <action android:name="android.intent.action.VIEW"/>\n        <category android:name="android.intent.category.DEFAULT"/>\n        <category android:name="android.intent.category.BROWSABLE"/>\n        <data android:scheme="io.logto"/>\n    </intent-filter>\n</activity>\n'))))}k.isMDXComponent=!0;var f=n(51873),h=n(48997),A=n(31543),y=["components"],N={toc:[{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3}]};function v(e){var t=e.components,n=(0,r.Z)(e,y);return(0,o.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,o.kt)(h.ZP,{figureSrc:f.Z,redirectUri:"io.logto://callback",mdxType:"ConfigureRedirectUri"}),(0,o.kt)(A.ZP,{calling:".signIn(redirectUri)",mdxType:"SignInNote"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"void signIn() async {\n  await logtoClient.signIn(redirectUri);\n}\n")))}v.isMDXComponent=!0;var b=["components"],C={toc:[]};function E(e){var t=e.components,n=(0,r.Z)(e,b);return(0,o.kt)("wrapper",(0,a.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Calling ",(0,o.kt)("inlineCode",{parentName:"p"},".signOut()")," will clean all the Logto data in secret storage, if it has."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"void signOut() async {\n  await logtoClient.signOut();\n}\n")))}E.isMDXComponent=!0;var R=["components"],S={toc:[]};function D(e){var t=e.components,n=(0,r.Z)(e,R);return(0,o.kt)("wrapper",(0,a.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:logto_dart_sdk/logto_dart_sdk.dart';\nimport 'package:http/http.dart' as http;\n\n// ...\nlate LogtoClient logtoClient;\n\n// LogtoConfig\nfinal logtoConfig = const LogtoConfig(\n  endpoint: \"<your-logto-endpoint>\", // E.g. http://localhost:3001\n  appId: \"<your-app-id>\"\n  ...\n);\n\nvoid _init() async  {\n  logtoClient = LogtoClient(\n    config: logtoConfig,\n    httpClient: http.Client(), // Optional http client\n  );\n}\n\n")))}D.isMDXComponent=!0;var P=["components"],T={sidebar_label:"Flutter"},I="Flutter: Integrate Logto Dart SDK",w={unversionedId:"docs/recipes/integrate-logto/flutter/README",id:"version-1.x/docs/recipes/integrate-logto/flutter/README",title:"Flutter: Integrate Logto Dart SDK",description:"Add Logto SDK as a dependency",source:"@site/versioned_docs/version-1.x/docs/recipes/integrate-logto/flutter/README.mdx",sourceDirName:"docs/recipes/integrate-logto/flutter",slug:"/docs/recipes/integrate-logto/flutter/",permalink:"/docs/recipes/integrate-logto/flutter/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/integrate-logto/flutter/README.mdx",tags:[],version:"1.x",frontMatter:{sidebar_label:"Flutter"},sidebar:"docsSidebar",previous:{title:"Express",permalink:"/docs/recipes/integrate-logto/express/"},next:{title:"Go",permalink:"/docs/recipes/integrate-logto/go/"}},B={},Z=[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Dependency settings",id:"dependency-settings",level:2},{value:"Init <code>LogtoClient</code>",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"SignOut",id:"signout",level:2},{value:"Fetch user information",id:"fetch-user-information",level:2},{value:"Backend API authorization",id:"backend-api-authorization",level:2},{value:"Further readings",id:"further-readings",level:2}],L={toc:Z};function x(e){var t=e.components,n=(0,r.Z)(e,P);return(0,o.kt)("wrapper",(0,a.Z)({},L,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flutter-integrate-logto-dart-sdk"},"Flutter: Integrate Logto Dart SDK"),(0,o.kt)(i.ZP,{type:"Native App",mdxType:"AppNote"}),(0,o.kt)("h2",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,o.kt)(c,{mdxType:"AddSdk"}),(0,o.kt)("h2",{id:"dependency-settings"},"Dependency settings"),(0,o.kt)(k,{mdxType:"Dependency"}),(0,o.kt)("h2",{id:"init-logtoclient"},"Init ",(0,o.kt)("inlineCode",{parentName:"h2"},"LogtoClient")),(0,o.kt)(D,{mdxType:"InitClient"}),(0,o.kt)("h2",{id:"sign-in"},"Sign in"),(0,o.kt)(v,{mdxType:"ImplementSignIn"}),(0,o.kt)("h2",{id:"signout"},"SignOut"),(0,o.kt)(E,{mdxType:"ImplementSignOut"}),(0,o.kt)("h2",{id:"fetch-user-information"},"Fetch user information"),(0,o.kt)(p.ZP,{apiCodeFragment:"logtoClient.getUserInfo()",mdxType:"FetchUserInformation"}),(0,o.kt)("h2",{id:"backend-api-authorization"},"Backend API authorization"),(0,o.kt)("p",null,"Add your API resource indicators to the Logto SDK configs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"const config = LogtoConfig(\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  clientId: '<your-client-id>',\n  resources: ['<your-resource-indicators>'],\n  scopes: ['<your-resource-scopes>'],\n);\n\nlogtoClient = LogtoClient(config: config);\n")),(0,o.kt)("p",null,"Claim an authorization token from Logto before making your API request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"final accessToken = await logtoClient.getAccessToken(\n  resource: '<your-target-api-resource>',\n  scopes: ['<your-target-api-scopes>'],\n);\n")),(0,o.kt)(l.ZP,{mdxType:"ApplyAuthorizationToken"}),(0,o.kt)("h2",{id:"further-readings"},"Further readings"),(0,o.kt)(d.ZP,{mdxType:"FurtherReadings"}))}x.isMDXComponent=!0},50147:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",null,'This tutorial assumes you have created an Application of type "',n.type,'" in Admin Console. If you are not ready,'," ",(0,o.kt)("a",{href:"/docs/tutorials/get-started/create-and-integrate-the-first-app"},"read this")," before continuing.")))}p.isMDXComponent=!0},52076:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With the user's authorization status, a ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519"},"JWT")," format ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," will be granted and issued by Logto, specifically for the requested API resource. Encrypted and audience-restricted with an expiration time. The token carries all the necessary info to represent the authority of this request."),(0,o.kt)("p",null,"Put the token in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," field of HTTP headers with the Bearer format (",(0,o.kt)("inlineCode",{parentName:"p"},"Bearer YOUR_TOKEN"),"), and you are good to go."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The Bearer Token's integration flow may vary based on the framework or requester you are using. Choose your own way to apply the request ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header.")))}p.isMDXComponent=!0},48997:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,o.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,o.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}p.isMDXComponent=!0},47121:function(e,t,n){n.d(t,{ZP:function(){return d}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=n(10024),l=["components"],p={toc:[]};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Logto SDK helps you fetch the user information from the OIDC ",(0,o.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo"},"UserInfo Endpoint"),"."),(0,o.kt)("p",null,"You can get the user information by calling ",(0,o.kt)("code",null,n.apiCodeFragment)," after signing in."),(0,o.kt)(i.ZP,{mdxType:"UserInformationClaims"}))}d.isMDXComponent=!0},30622:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/recipes/customize-sie/"},"Customize sign-in experience")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/passwordless-sign-in-by-adding-connectors/"},"Enable SMS, email, or social passwordless sign-in")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/recipes/rbac/protect-resource/#client"},"Configure client to use RBAC"))))}p.isMDXComponent=!0},31543:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",null,"Before calling ",(0,o.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console.")))}p.isMDXComponent=!0},10024:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The user information response will vary based on the scopes used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"LogtoConfig")," while initializing the ",(0,o.kt)("inlineCode",{parentName:"p"},"LogtoClient"),"; and the following table lists the relations between user information and scopes:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required Scope"),(0,o.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sub"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"openid")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"openid")," scope is added by default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"profile")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"profile")," scope is added by default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"username"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"profile")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"profile")," scope is added by default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"picture"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"profile")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"profile")," scope is added by default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"email"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"email")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"email_verified"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"email")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"phone_number"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"phone")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"phone_number_verified"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"phone")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"custom_data"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"custom_data")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"identities"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"identities")),(0,o.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0},51873:function(e,t){t.Z="data:image/png;base64,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"}}]);