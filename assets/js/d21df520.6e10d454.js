"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[39386],{53235:function(e,n,s){s.r(n),s.d(n,{assets:function(){return c},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return l}});var t=s(11527),i=s(17279);const r={sidebar_label:"Manage in Console",sidebar_position:1},a="Manage users in Console",o={id:"docs/recipes/manage-users/admin-console",title:"Manage users in Console",description:"Browse and search users",source:"@site/docs/docs/recipes/manage-users/admin-console.md",sourceDirName:"docs/recipes/manage-users",slug:"/docs/recipes/manage-users/admin-console",permalink:"/next/docs/recipes/manage-users/admin-console",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/manage-users/admin-console.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Manage in Console",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users",permalink:"/next/docs/recipes/manage-users/"},next:{title:"Manage via Management API",permalink:"/next/docs/recipes/manage-users/management-api"}},c={},l=[{value:"Browse and search users",id:"browse-and-search-users",level:2},{value:"Add user",id:"add-user",level:2},{value:"View and update user profile",id:"view-and-update-user-profile",level:2},{value:"View user activities",id:"view-user-activities",level:2},{value:"Suspend user",id:"suspend-user",level:2},{value:"Delete user",id:"delete-user",level:2},{value:"Reset user password",id:"reset-user-password",level:2},{value:"Mange roles of users",id:"mange-roles-of-users",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"manage-users-in-console",children:"Manage users in Console"}),"\n",(0,t.jsx)(n.h2,{id:"browse-and-search-users",children:"Browse and search users"}),"\n",(0,t.jsx)(n.p,{children:'To access the user management functionality in the Admin Console, navigate to the "User Management" tab on the left-hand side of the screen. Once there, you will see a table view of all the users on the right-hand side of the screen.'}),"\n",(0,t.jsx)(n.p,{children:"The table consists of three columns:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"User", which displays information about the user, such as their avatar, full name, username, phone number, and email'}),"\n",(0,t.jsx)(n.li,{children:'"From application", which displays the name of the application that the user initially registered with'}),"\n",(0,t.jsx)(n.li,{children:'"Latest sign-in", which displays the timestamp of the user\'s most recent sign-in.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'To search for a specific user, enter a keyword related to their name, username, email, or phone number in the search box above the user table. Once you have entered your keyword, click the "Search" button. The search is partial, meaning it will match any user property that contains the keyword you entered.'}),"\n",(0,t.jsx)(n.p,{children:'After clicking the "Search" button, the table will display all users matching the keyword you entered. You can then view their information in the table, including their avatar, full name, username, phone number, email, the application they registered with, and the timestamp of their latest sign-in.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"List and search users",src:s(49074).Z+"",width:"2890",height:"1482"})}),"\n",(0,t.jsx)(n.h2,{id:"add-user",children:"Add user"}),"\n",(0,t.jsx)(n.p,{children:'Using the Admin Console, administrators can create new accounts for end-users. To do so, click on the "+ Add User" button in the screen\'s upper right corner. A modal window will appear, where you can enter the username and full name of the new user. Once you\'ve filled out the required fields, click on the "Add User" button to confirm.'}),"\n",(0,t.jsxs)(n.p,{children:["After the new user has been created, you can copy their ",(0,t.jsx)(n.strong,{children:"username"})," and ",(0,t.jsx)(n.strong,{children:"initial password"})," to send to them. This will allow them to log in to the system and start using it."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:['If you fail to retain the password after closing the "Add User" modal, you will not be able to view it again. If you forget to keep it, you can ',(0,t.jsx)(n.a,{href:"#reset-user-password",children:"reset the password"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"view-and-update-user-profile",children:"View and update user profile"}),"\n",(0,t.jsxs)(n.p,{children:['To view the details of a user, simply click on the corresponding row in the user table. This will take you to the "',(0,t.jsx)(n.strong,{children:"User details"}),'" page where you can find the user\'s profile information, such as their avatar, full name, user ID, email, phone number, username, and social connections. The "Social connections" section displays a list of social connectors that the user has linked to their account. For example, if the user has signed in using their Facebook account, you will see a "Facebook" item in the list. You can refer to the ',(0,t.jsx)(n.a,{href:"https://docs.logto.io/docs/references/users/social-identities",children:"identities"})," documentation for more information."]}),"\n",(0,t.jsx)(n.p,{children:"Please note that while the full name, avatar image URL, and custom data can be edited, the social connections can be removed, and the other properties are read-only."}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"It is important to confirm that the user has an alternative sign-in method before removing a social connection, such as another social connection, phone number, email, or username-with-password. If the user does not have any other sign-in method, they will not be able to access their account again once the social connection is removed."})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:'Don\'t forget to click "Save changes" after updating.'})}),"\n",(0,t.jsx)(n.h2,{id:"view-user-activities",children:"View user activities"}),"\n",(0,t.jsx)(n.p,{children:'To view the recent activities of a user, navigate to the "User logs" sub-tab on the "User details" page. Here, you can find a table that displays the user\'s recent activities, including the action performed, the result of the action, the related application, and the time that the user acted.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"User logs",src:s(29150).Z+"",width:"2424",height:"1098"})}),"\n",(0,t.jsx)(n.p,{children:"Click the table row to see more details in the user log, e.g., IP address, user agent, raw data, etc."}),"\n",(0,t.jsx)(n.h2,{id:"suspend-user",children:"Suspend user"}),"\n",(0,t.jsx)(n.p,{children:'On the "User details" page, click "Three Dots" -> "Suspend User" button.'}),"\n",(0,t.jsx)(n.p,{children:"Once a user is suspended, the user will be unable to sign in to your app and won't be able to obtain a new access token after the current one expires. Additionally, any API requests made by this user will fail."}),"\n",(0,t.jsx)(n.p,{children:'If you want to reactive this user, you can do so by clicking "Three Dots" -> "Reactivate User" button.'}),"\n",(0,t.jsx)(n.h2,{id:"delete-user",children:"Delete user"}),"\n",(0,t.jsx)(n.p,{children:'On the "User details" page, click "Three Dots" -> "Delete" button.'}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Be careful! The user data deletion CANNOT be undone."})}),"\n",(0,t.jsx)(n.h2,{id:"reset-user-password",children:"Reset user password"}),"\n",(0,t.jsx)(n.p,{children:'On the "User details" page, click "Three Dots" -> "Reset password" button.'}),"\n",(0,t.jsx)(n.p,{children:"After you reset the password, copy and send it to the end-user."}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:'Once the "Reset password" modal is closed, you can no longer view the password.\nIf you forget to keep it, you can reset it again.'})}),"\n",(0,t.jsx)(n.h2,{id:"mange-roles-of-users",children:"Mange roles of users"}),"\n",(0,t.jsx)(n.p,{children:'In the "Roles" tab of the user details page, you can easily assign or remove roles to meet your desired outcome. Check RBAC - Manage a user\'s roles to learn more'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Manage roles of users",src:s(88306).Z+"",width:"2812",height:"1272"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},49074:function(e,n,s){n.Z=s.p+"assets/images/list-and-search-users-834aca51aaab05ddbac3b1fb4651deb8.png"},88306:function(e,n,s){n.Z=s.p+"assets/images/manage-roles-users-e419cc99d96bd9dd998fe01d257aee5e.png"},29150:function(e,n,s){n.Z=s.p+"assets/images/user-logs-2fe316237216c080e627b48c6f34cec7.png"},17279:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var t=s(50959);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);