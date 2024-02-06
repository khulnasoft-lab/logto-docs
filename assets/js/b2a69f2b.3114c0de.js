"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[80482],{64050:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=i(11527),a=i(17279);const s={slug:"typescript-all-in-one",authors:"gao",tags:["typescript","monorepo"]},o="TypeScript all-in-one: Monorepo with its pains and gains",r={permalink:"/blog/typescript-all-in-one",source:"@site/blog/2022-08-07-typescript-all-in-one.md",title:"TypeScript all-in-one: Monorepo with its pains and gains",description:"Intro",date:"2022-08-07T00:00:00.000Z",formattedDate:"August 7, 2022",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"monorepo",permalink:"/blog/tags/monorepo"}],readingTime:8.93,hasTruncateMarker:!0,authors:[{name:"Gao",title:"Founder of Silverhand",url:"https://github.com/gao-sun",imageURL:"https://github.com/gao-sun.png",key:"gao"}],frontMatter:{slug:"typescript-all-in-one",authors:"gao",tags:["typescript","monorepo"]},unlisted:!1,prevItem:{title:"Logto x Hasura: How to use open-source auth + GraphQL solution to boost your project",permalink:"/blog/logto-x-hasura"}},c={authorsImageUrls:[void 0]},l=[{value:"Intro",id:"intro",level:2},{value:"Why TypeScript?",id:"why-typescript",level:2},{value:"Choosing package manager",id:"choosing-package-manager",level:2},{value:"The pain of inertia",id:"the-pain-of-inertia",level:3},{value:"It just works",id:"it-just-works",level:3},{value:"Defining package scopes",id:"defining-package-scopes",level:2},{value:"Tech stack for fullstack",id:"tech-stack-for-fullstack",level:2},{value:"How about schemas?",id:"how-about-schemas",level:3},{value:"General v.s. opinionated",id:"general-vs-opinionated",level:4},{value:"SQL &lt;-&gt; TypeScript",id:"sql---typescript",level:4},{value:"Result",id:"result",level:3},{value:"Dev experience",id:"dev-experience",level:2},{value:"Package and config sharing",id:"package-and-config-sharing",level:3},{value:"Internal dependencies",id:"internal-dependencies",level:4},{value:"Config sharing",id:"config-sharing",level:4},{value:"Code, lint, and commit",id:"code-lint-and-commit",level:3},{value:"Compiler and proxy",id:"compiler-and-proxy",level:3},{value:"Watch mode",id:"watch-mode",level:3},{value:"Summary",id:"summary",level:3},{value:"Closing notes",id:"closing-notes",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,t.jsx)(n.p,{children:"I always had a dream of monorepo."}),"\n",(0,t.jsx)(n.p,{children:"I saw the monorepo approach while working for Airbnb, but it was for the frontend only. With a deep love of the JavaScript ecosystem and the \u201chappy\u201d TypeScript developing experience, I started to align frontend and backend code in the same language from ~three years ago. It was great (for hiring) but not that great for developing since our projects were still scattered across multiple repos."}),"\n",(0,t.jsx)(n.admonition,{title:"FYI",type:"info",children:(0,t.jsx)(n.p,{children:"There are quotes around the word \u201chappy\u201d since TypeScript did bring me a lot of fun and a-ha moments, but it also let me think \u201chow could this doesn\u2019t work\u201d sometimes."})}),"\n",(0,t.jsx)(n.p,{children:"As it says, \u201cthe best way of refactoring a project is to start a new one\u201d. So when I was starting my startup about one year ago, I decided to use a total monorepo strategy: put frontend and backend projects, even database schemas, into one repo."}),"\n",(0,t.jsx)(n.p,{children:"In this article, I won\u2019t compare monorepo and polyrepo since it\u2019s all about philosophy. Instead, I\u2019ll focus on the building and evolving experience and assume you are familiar with the JS/TS ecosystem."}),"\n",(0,t.jsxs)(n.p,{children:["The final result is available on ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto",children:"GitHub"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"why-typescript",children:"Why TypeScript?"}),"\n",(0,t.jsxs)(n.p,{children:["Frankly speaking, I\u2019m a fan of JavaScript and TypeScript. I love the compatibility of its flexibility and rigorousness: you can fall back to ",(0,t.jsx)(n.code,{children:"unknown"})," or ",(0,t.jsx)(n.code,{children:"any"})," (although we banned any form of ",(0,t.jsx)(n.code,{children:"any"})," in our codebase), or use a super-strict lint rule set to align the code style across the team."]}),"\n",(0,t.jsx)(n.p,{children:"When we were talking about the concept of \u201cfullstack\u201d before, we usually imagine at least two ecosystems and programming languages: one for frontend and one for backend."}),"\n",(0,t.jsx)(n.p,{children:"One day, I suddenly realized it could be simpler: Node.js is fast enough (believe me, in most cases, code quality is more important than running speed), TypeScript is mature enough (works well in big frontend projects), and the monorepo concept has been practiced by a bunch of famous teams (React, Babel, etc.) - so why don\u2019t we combine all the code together, from frontend to backend? This can make engineers do the jobs without context switch in one repo and implement a complete feature in (almost) one language."}),"\n",(0,t.jsx)(n.h2,{id:"choosing-package-manager",children:"Choosing package manager"}),"\n",(0,t.jsx)(n.p,{children:"As a developer, and as usual, I couldn\u2019t wait to start coding. But this time, things were different."}),"\n",(0,t.jsx)(n.p,{children:"The choice of the package manager is critical to the dev experience in a monorepo."}),"\n",(0,t.jsx)(n.admonition,{title:"\ud83d\udd28 TL; DR",type:"info",children:(0,t.jsx)(n.p,{children:"We chose lerna with pnpm."})}),"\n",(0,t.jsx)(n.h3,{id:"the-pain-of-inertia",children:"The pain of inertia"}),"\n",(0,t.jsxs)(n.p,{children:["It was July 2021. I started with ",(0,t.jsx)(n.code,{children:"yarn@1.x"})," since I\u2019ve been using it for a long time. Yarn was fast, but soon I met several issues with Yarn Workspaces. E.g., ",(0,t.jsx)(n.a,{href:"https://github.com/yarnpkg/yarn/issues/7572",children:"not hoisting dependencies correctly"}),", and tons of issues are tagged with \u201c",(0,t.jsx)(n.a,{href:"https://github.com/yarnpkg/yarn/issues?q=label%3Afixed-in-modern+",children:"fixed in modern"}),"\u201d, which redirects me to the v2 (",(0,t.jsx)(n.a,{href:"https://github.com/yarnpkg/berry",children:"berry"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["\u201cOkay fine I\u2019m upgrading now.\u201d I stopped struggling with v1 and started to migrate. But the long ",(0,t.jsx)(n.a,{href:"https://yarnpkg.com/getting-started/migration",children:"migration guide"})," of berry frightened me, and I gave up after several failed tries."]}),"\n",(0,t.jsx)(n.h3,{id:"it-just-works",children:"It just works"}),"\n",(0,t.jsxs)(n.p,{children:["So the research about package managers began. I was absorbed by ",(0,t.jsx)(n.code,{children:"pnpm"})," after a trial: fast as yarn, native monorepo support, similar commands to ",(0,t.jsx)(n.code,{children:"npm"}),", hard links, etc. Most importantly, it just works. As a developer who wants to get started with a product but NOT develop a package manager, I just wanted to add some dependencies and start the project without knowing how a package manager works or any other fancy concepts."]}),"\n",(0,t.jsxs)(n.p,{children:["Based on the same idea, we chose an old friend ",(0,t.jsx)(n.code,{children:"lerna"})," for executing commands across the packages and publishing workspace packages."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Now pnpm has a -w option to run commands in the workspace root and --filter for filtering. Thus you can probably replace lerna with a more dedicated package publishing CLI."})}),"\n",(0,t.jsx)(n.h2,{id:"defining-package-scopes",children:"Defining package scopes"}),"\n",(0,t.jsx)(n.p,{children:"It\u2019s hard to clearly figure out the final scope of each package in the beginning. Just start with your best try according to the status quo, and remember you can always refactor during development."}),"\n",(0,t.jsxs)(n.p,{children:["Our ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/af7e6ccd83723d623555dafa4650e115fa795838/packages",children:"initial structure"})," contains four packages:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"core"}),": the backend monolith service."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"phrases"}),": i18n key \u2192 phrase resources."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"schemas"}),": the database and shared TypeScript schemas."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ui"}),": a web SPA that interacts with ",(0,t.jsx)(n.code,{children:"core"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tech-stack-for-fullstack",children:"Tech stack for fullstack"}),"\n",(0,t.jsx)(n.p,{children:"Since we are embracing the JavaScript ecosystem and using TypeScript as our main programming language, a lot of choices are straightforward (based on my preference \ud83d\ude0a):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"koajs"})," for the backend service (core): I had a hard experience using ",(0,t.jsx)(n.code,{children:"async/await"})," in ",(0,t.jsx)(n.code,{children:"express"}),", so I decided to use something with native support."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"i18next/react-i18next"})," for i18n (phrases/ui): like its simplicity of APIs and good TypeScript support."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"react"})," for SPA (ui): Just personal preference."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"how-about-schemas",children:"How about schemas?"}),"\n",(0,t.jsx)(n.p,{children:"Something is still missing here: database system and schema <-> TypeScript definition mapping."}),"\n",(0,t.jsx)(n.h4,{id:"general-vs-opinionated",children:"General v.s. opinionated"}),"\n",(0,t.jsx)(n.p,{children:"At that point, I tried two popular approaches:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use ORM with a lot of decorators."}),"\n",(0,t.jsx)(n.li,{children:"Use a query builder like Knex.js."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"But both of them produce a strange feeling during previous development:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For ORM: I\u2019m not a fan of decorators, and another abstract layer of the database causes more learning effort and uncertainty for the team."}),"\n",(0,t.jsxs)(n.li,{children:["For query builder: It\u2019s like writing SQL with some restrictions (in a good way), but it\u2019s not actual SQL. Thus we need to use ",(0,t.jsx)(n.code,{children:".raw()"})," for raw queries in many scenarios."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Then I saw this article: \u201c",(0,t.jsx)(n.a,{href:"https://gajus.medium.com/stop-using-knex-js-and-earn-30-bf410349856c",children:"Stop using Knex.js: Using SQL query builder is an anti-pattern"}),"\u201d. The title looks aggressive, but the content is great. It strongly reminds me that \u201cSQL is a programming language\u201d, and I realized I could write SQL directly (just like CSS, how could I miss this!) to leverage the native language and database features instead of adding another layer and reducing the power."]}),"\n",(0,t.jsxs)(n.p,{children:["In conclusion, I decided to stick with Postgres and ",(0,t.jsx)(n.a,{href:"https://github.com/gajus/slonik",children:"Slonik"})," (an open-source Postgres client), as the article states:"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u2026the benefit of allowing user to choose between the different database dialects is marginal and the overhead of developing for multiple databases at once is significant."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"sql---typescript",children:"SQL <-> TypeScript"}),"\n",(0,t.jsxs)(n.p,{children:["Another advantage of writing SQL is we can easily use it as the single source of truth of TypeScript definitions. I wrote a ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/af7e6ccd83723d623555dafa4650e115fa795838/packages/schemas/src/gen",children:"code generator"})," to transpile SQL schemas to TypeScript code that we\u2019ll use in our backend, and the result looks not bad:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.\n\nimport { OidcClientMetadata } from '../foundations';\n\nexport type OidcClient = {\n  clientId: string;\n  metadata: OidcClientMetadata;\n  createdAt: number;\n};\n// ...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We can even connect ",(0,t.jsx)(n.code,{children:"jsonb"})," with a TypeScript type and process type validation in the backend service if needed."]}),"\n",(0,t.jsx)(n.admonition,{title:"\ud83e\udd14 Why not use TypeScript as the SSOT?",type:"note",children:(0,t.jsx)(n.p,{children:"It\u2019s a plan I\u2019ve thought of. It sounds attractive initially, but SQL will precisely describe database schemas and keep the flow in one direction (see the following section) instead of using TypeScript and then \u201ctranspile back\u201d to SQL."})}),"\n",(0,t.jsx)(n.h3,{id:"result",children:"Result"}),"\n",(0,t.jsx)(n.p,{children:"The final dependency structure looks like:"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD\n  database[Postgres Database] --\x3e Schemas\n  subgraph Monorepo\n\t  Phrases --\x3e Core\n\t  Phrases --\x3e UI\n\t  Schemas --\x3e Core\n\t  Schemas --\x3e UI\n  end"}),"\n",(0,t.jsx)(n.p,{children:"You may notice it\u2019s a one-direction diagram, which greatly helped us to keep a clear architecture and the ability to expand while the project grows. Plus, the code is (basically) all in TypeScript."}),"\n",(0,t.jsx)(n.h2,{id:"dev-experience",children:"Dev experience"}),"\n",(0,t.jsx)(n.h3,{id:"package-and-config-sharing",children:"Package and config sharing"}),"\n",(0,t.jsx)(n.h4,{id:"internal-dependencies",children:"Internal dependencies"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pnpm"})," and ",(0,t.jsx)(n.code,{children:"lerna"})," are doing an awesome job on internal workspace dependencies. We use the command below in the project root to add sibling packages:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"lerna add --scope=@logto/core @logto/schemas\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It will add ",(0,t.jsx)(n.code,{children:"@logto/schemas"})," as a dependency to ",(0,t.jsx)(n.code,{children:"@logto/core"}),". While keeping the semantic version in ",(0,t.jsx)(n.code,{children:"package.json"})," of your internal dependencies, ",(0,t.jsx)(n.code,{children:"pnpm"})," can also correctly link them in ",(0,t.jsx)(n.code,{children:"pnpm-lock.yaml"}),". The result will look like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'// packages/core/pacakge.json\n{\n  "dependencies": {\n    "@logto/schemas": "^1.0.0-beta.3"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# pnpm-lock.yaml\npackages/core:\n  dependencies:\n    '@logto/schemas': link:../schemas\n"})}),"\n",(0,t.jsx)(n.h4,{id:"config-sharing",children:"Config sharing"}),"\n",(0,t.jsxs)(n.p,{children:["We treat every package in monorepo \u201cindependent\u201d. Thus we can use the standard approach for config sharing, which covers ",(0,t.jsx)(n.code,{children:"tsconfig"}),", ",(0,t.jsx)(n.code,{children:"eslintConfig"}),", ",(0,t.jsx)(n.code,{children:"prettier"}),", ",(0,t.jsx)(n.code,{children:"stlyelint"}),", and ",(0,t.jsx)(n.code,{children:"jest-config"}),". See ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/6327eb6c577cdf36c8f44b55bac8195f7d6a6335/packages/console",children:"this project"})," for example."]}),"\n",(0,t.jsx)(n.h3,{id:"code-lint-and-commit",children:"Code, lint, and commit"}),"\n",(0,t.jsx)(n.p,{children:"I use VSCode for daily development, and in short, nothing is different when the project is configured properly:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ESLint and Stylelint work normally."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you are using VSCode ESLint plugin, add the VSCode settings below to make it honors the per-package ESLint config (replace the value of ",(0,t.jsx)(n.code,{children:"pattern"})," with your own):"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\t"eslint.workingDirectories": [\n\t  {\n\t    "pattern": "./packages/*"\n\t  }\n\t]\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"husky, commitlint, and lint-staged work as expected."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"compiler-and-proxy",children:"Compiler and proxy"}),"\n",(0,t.jsxs)(n.p,{children:["We are using different compilers for frontend and backend: ",(0,t.jsx)(n.code,{children:"parceljs"})," for UI (React) and ",(0,t.jsx)(n.code,{children:"tsc"})," for all other pure TypeScript packages. I strongly recommend you to try ",(0,t.jsx)(n.code,{children:"parceljs"})," if you haven\u2019t. It\u2019s a real \u201czero-config\u201d compiler that gracefully handles different file types."]}),"\n",(0,t.jsx)(n.p,{children:"Parcel hosts its own frontend dev server, and the production output is just static files. Since we\u2019d like to mount APIs and SPA under the same origin to avoid CORS issues, the strategy below works:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In dev environment, use a simple HTTP proxy to redirect the traffic to the Parcel dev server."}),"\n",(0,t.jsx)(n.li,{children:"In production, serve static files directly."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can find the frontend middleware function implementation ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/blob/6327eb6c577cdf36c8f44b55bac8195f7d6a6335/packages/core/src/middleware/koa-spa-proxy.ts",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"watch-mode",children:"Watch mode"}),"\n",(0,t.jsxs)(n.p,{children:["We have a ",(0,t.jsx)(n.code,{children:"dev"})," script in ",(0,t.jsx)(n.code,{children:"package.json"})," for each package that watches the file changes and re-compile when needed. Thanks to ",(0,t.jsx)(n.code,{children:"lerna"}),", things become easy using ",(0,t.jsx)(n.code,{children:"lerna exec"})," to run package scripts in parallel. The root script will look like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'"dev": "lerna --scope=@logto/{core,phrases,schemas,ui} exec -- pnpm dev"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"Ideally, only two steps for a new engineer/contributor to get started:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Clone the repo"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"pnpm i && pnpm dev"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"closing-notes",children:"Closing notes"}),"\n",(0,t.jsxs)(n.p,{children:["Our team has been developing under this approach for one year, and we are pretty happy with it. Visit our ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto",children:"GitHub repo"})," to see the latest shape of the project. To wrap up:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Pains"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Need to be familiar with the JS/TS ecosystem"}),"\n",(0,t.jsx)(n.li,{children:"Need to choose the right package manager"}),"\n",(0,t.jsx)(n.li,{children:"Require some additional one-time setup"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Gains"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Develop and maintain the whole project in one repo"}),"\n",(0,t.jsx)(n.li,{children:"Simplified coding skill requirements"}),"\n",(0,t.jsx)(n.li,{children:"Shared code styles, schemas, phrases, and utilities"}),"\n",(0,t.jsxs)(n.li,{children:["Improved communication efficiency","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"No more questions like: What\u2019s the API definition?"}),"\n",(0,t.jsx)(n.li,{children:"All engineers are talking in the same programming language"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["CI/CD with ease","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use the same toolchain for building, testing, and publishing"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This article remains several topics uncovered: Setting up the repo from scratch, adding a new package, leveraging GitHub Actions for CI/CD, etc. It\u2019ll be too long for this article if I expand each of them. Feel free to comment and let me know which topic you\u2019d like to see in the future."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},17279:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(50959);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);