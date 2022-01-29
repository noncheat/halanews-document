"use strict";(self.webpackChunkhalanews_document=self.webpackChunkhalanews_document||[]).push([[694],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4817:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],l={id:"installation",title:"Installation",sidebar_label:"Installation"},s=void 0,c={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"You need to connect to the network",source:"@site/docs/getting-started-installation.md",sourceDirName:".",slug:"/installation",permalink:"/halanews-document/docs/installation",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"About Hala News project",permalink:"/halanews-document/docs/introduction"},next:{title:"Config your app",permalink:"/halanews-document/docs/config"}},p=[{value:"New to the Command Line?",id:"new-to-the-command-line",children:[]},{value:"Install Cordova and Ionic framework",id:"install-cordova-and-ionic-framework",children:[]},{value:"Install WordPress plugin",id:"install-wordpress-plugin",children:[]},{value:"Install Node modules",id:"install-node-modules",children:[]},{value:"Verifying Installation",id:"verifying-installation",children:[]}],u={toc:p};function d(e){var n=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You need to connect to the network")),(0,a.kt)("h2",{id:"new-to-the-command-line"},"New to the Command Line?"),(0,a.kt)("p",null,"This product was developed based on the Ionic framework, so you need to know about command-line tools. Something like Windows Command Prompt, Terminal,\u2026"),(0,a.kt)("p",null,"If you\u2019re new to the command line, please read ",(0,a.kt)("a",{href:"http://blog.ionicframework.com/new-to-the-command-line/",target:"_blank"},"Ionic Command line tutorial")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In Windows, please do not use PowerShell for this project, Command Prompt (cmd) recommended.")),(0,a.kt)("h2",{id:"install-cordova-and-ionic-framework"},"Install Cordova and Ionic framework"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Goto ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Download page Node.js")," get LTS version (make sure is LTS version).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once the download is complete, open Node.js installer.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Simply follow the prompts in the installer.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the Terminal installation script: ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i -g cordova @ionic/cli")))),(0,a.kt)("h2",{id:"install-wordpress-plugin"},"Install WordPress plugin"),(0,a.kt)("p",null,"As you know, our news application was designed for WordPress. If you already have a WordPress website, it is too simple! Otherwise, take a moment to learn about ",(0,a.kt)("a",{parentName:"p",href:"https://wordpress.org/"},"WordPress"),"."),(0,a.kt)("p",null,"Then just install plugin ",(0,a.kt)("a",{parentName:"p",href:"https://wordpress.org/plugins/stionic-core/"},"Stionic core")," (",(0,a.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/13_Euw8lsziMESizL7q7u47kGKKfkiuru/view?usp=sharing"},"Google Drive link"),") to complete Backend process."),(0,a.kt)("h2",{id:"install-node-modules"},"Install Node modules"),(0,a.kt)("p",null,"Extract Sources folder in .zip you get when purchase to wherever you want, you also can change Sources folder name."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(7930).Z})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"All Terminal commands from now should run in Sources folder")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cd Sources"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the Node modules initialization script ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install"),"."))),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6259).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ignore all ",(0,a.kt)("inlineCode",{parentName:"li"},"WARN")," and NEVER run audit fix if you dont know what it is.")),(0,a.kt)("h2",{id:"verifying-installation"},"Verifying Installation"),(0,a.kt)("p",null,"After installation process you need check and verify that all working fine by run ",(0,a.kt)("inlineCode",{parentName:"p"},"ionic info")),(0,a.kt)("p",null,"(Version information maybe different, higher no problems)"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1250).Z})),(0,a.kt)("p",null,"Along with previously existing files and directories, your root project directory will now contain a structure similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 config\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 resources\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app\n\u2502   \u2502   \u251c\u2500\u2500 classes\n\u2502   \u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u251c\u2500\u2500 const\n\u2502   \u2502   \u251c\u2500\u2500 directives\n\u2502   \u2502   \u251c\u2500\u2500 home\n\u2502   \u2502   \u251c\u2500\u2500 pages\n\u2502   \u2502   \u251c\u2500\u2500 pipes\n\u2502   \u2502   \u251c\u2500\u2500 services\n\u2502   \u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 environments\n\u2502   \u251c\u2500\u2500 theme\n\u2502   \u251c\u2500\u2500 global.scss\n\u2502   \u251c\u2500\u2500 index.html\n\u2502   \u251c\u2500\u2500 main.ts\n\u2502   \u2514\u2500\u2500 test.ts\n\u251c\u2500\u2500 config.xml\n\u251c\u2500\u2500 ionic.config.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 tsconfig.json\n\u2514\u2500\u2500 tslint.json\n")))}d.isMDXComponent=!0},7930:function(e,n,t){n.Z=t.p+"assets/images/extract-sources-2c39885b7bc81caf9c32d20a5c48415c.png"},6259:function(e,n,t){n.Z=t.p+"assets/images/node-modules-install-4b3e7dbf5c2f6541656386850cc00516.png"},1250:function(e,n,t){n.Z=t.p+"assets/images/verifying-installation-3ca59e70b1060dda3faba3bed5c4551a.png"}}]);