"use strict";(self.webpackChunkhalanews_document=self.webpackChunkhalanews_document||[]).push([[14],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var s=2;s<l;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4806:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var i=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],r={id:"guides-setting",title:"Guides Setting",sidebar_label:"Setting on Website"},p=void 0,s={unversionedId:"guides-setting",id:"guides-setting",isDocsHomePage:!1,title:"Guides Setting",description:"The application is built for easy configuration and flexibility, settings on the website will sync with the application.",source:"@site/docs/guides-setting.md",sourceDirName:".",slug:"/guides-setting",permalink:"/halanews-document/docs/guides-setting",tags:[],version:"current",frontMatter:{id:"guides-setting",title:"Guides Setting",sidebar_label:"Setting on Website"},sidebar:"docs",previous:{title:"Deploy",permalink:"/halanews-document/docs/ios-deploy"},next:{title:"Show AdMob ads",permalink:"/halanews-document/docs/guides-admob"}},c=[{value:"General Setting",id:"general-setting",children:[]},{value:"Categories Setting",id:"categories-setting",children:[]},{value:"Media Setting",id:"media-setting",children:[]},{value:"Deeplinks Setting",id:"deeplinks-setting",children:[]},{value:"OneSignal Setting",id:"onesignal-setting",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The application is built for easy configuration and flexibility, settings on the website will sync with the application."),(0,l.kt)("p",null,"Login to the WordPress Dashboard, then choose Stionic menu"),(0,l.kt)("h2",{id:"general-setting"},"General Setting"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Maintenance: show alert maintenance and disable endpoint WP REST API")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/halanews-document/docs/guides-admob"},"Google Admob"),": config Google Admob Ad Unit ID will display in the application")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Testing Ads: check to show Testing ads")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ads after: After how many views the post will display ads (for Interstitial)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/halanews-document/docs/guides-google-analytics"},"Google Analytics"),": Tracking ID tracks customer usage of the app")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Application: configuration Android package and Apple app id, for Rate App, Update application and DeepLinks.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Request timeout: maximum time per request in application (ms). The application canceled the request and notifies the user if the requested time is up to the limit.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Root endpoint: useful in case you change website but don't want to update website in translated file ","[language]",".json")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Share: content when using the Share application function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Version: the latest version of the app, older versions will display an update prompt.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Header Allow Origin: customize Origin header, if empty will be request origin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Extended Config: Other config in JSON format can get in application for easy customize"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"import { CoreProvider } from '../../providers/core/core';\n\nconstructor(core: CoreProvider) {\n  let extended = core.getConfig('extended') || {}\n}\n")),(0,l.kt)("h2",{id:"categories-setting"},"Categories Setting"),(0,l.kt)("p",null,"Allow control categories page in application"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Show all categories in categories page")," option, if check it categories page in application will list all categories included all parents and all childs. Else show parents only.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Selected categories below will show in application")," option, if check it only categories selected in list below will show in categories page. Else will hide all categories checked in categories list.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Drag and drop then Update to sort the categories shown in the app")," you can drag and drop list categories for sorting in categories page. Sorting by users in application will override it."),(0,l.kt)("p",{parentName:"li"},"  Check on checkbox categories will affect by ",(0,l.kt)("inlineCode",{parentName:"p"},"Selected categories below will show in application")," option above."))),(0,l.kt)("h2",{id:"media-setting"},"Media Setting"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Thumbnail size")," size of thumbnail image for list posts in application. Template ",(0,l.kt)("inlineCode",{parentName:"p"},"Column"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Card"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Thumbnail square size")," size of thumbnail image for list posts in application. Template ",(0,l.kt)("inlineCode",{parentName:"p"},"List"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Reverse")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Small size for performance, Big size for quality. After change need ",(0,l.kt)("a",{parentName:"p",href:"https://www.google.com/search?q=wordpress+regenerate+thumbnails"},"regenerate thumbnail")," old images")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Disable featured images in application detail page")," option, if check it will default hide Thumbnail image on top of Detail posts page in application. Setting in posts will override it.")),(0,l.kt)("h2",{id:"deeplinks-setting"},"Deeplinks Setting"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Required ",(0,l.kt)("a",{parentName:"p",href:"/halanews-document/docs/guides-setting#general-setting"},"General setting")," Application package or App ID")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"URL SCHEME")," (required) which you define in ",(0,l.kt)("a",{parentName:"p",href:"/halanews-document/docs/config#deeplinks-optional"},"Config Deeplinks"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},'Show button "Application" on bottom screen')," option, if check will show deeplinks button in your website")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Auto open application")," option, if check when open your website in browser, will auto open your application"))),(0,l.kt)("h2",{id:"onesignal-setting"},"OneSignal Setting"),(0,l.kt)("p",null,"Configure OneSignal to send notifications when saving posts."),(0,l.kt)("p",null,"To get Keys and IDs, you need login to ",(0,l.kt)("a",{parentName:"p",href:"https://onesignal.com/"},"OneSignal"),". Then select your app -> App Settings -> Keys & IDs."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Message format")," is message when send notification, use ",(0,l.kt)("inlineCode",{parentName:"p"},"{{title}}")," for placeholder post title. If empty message will be post title."),(0,l.kt)("p",{parentName:"li"},"  Example you want default add ",(0,l.kt)("inlineCode",{parentName:"p"},"New post added:")," prefix to message when send notification then setting it to ",(0,l.kt)("inlineCode",{parentName:"p"},"New post added: {{title}}")),(0,l.kt)("p",{parentName:"li"},"  Setting when add/edit post will override it.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Include Player IDs")," use for Testing only, when publishing need to delete this field. Player Id get in the OneSignal ",(0,l.kt)("inlineCode",{parentName:"p"},"App Dashboard -> Audience -> VIEW ALL USERS"),', separated by ","'),(0,l.kt)("p",{parentName:"li"},"  When setting it, notification will only send to users match Player ID."))))}u.isMDXComponent=!0}}]);