(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{183:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/build-android-add-platform-e689b9a23ef789e0f7672b748554ce4f.png"},184:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/build-android-add-platform-complete-c4bb3f8a3f7497b531c91d6e721d064d.png"},185:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/build-android-notification-icon-1f863b781139410bbd028c63052dc686.png"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(97)),i={id:"android-prepare",title:"Android Prepare",sidebar_label:"Prepare"},c={unversionedId:"android-prepare",id:"android-prepare",isDocsHomePage:!1,title:"Android Prepare",description:"Add Android platform",source:"@site/docs/android-prepare.md",sourceDirName:".",slug:"/android-prepare",permalink:"/halanews-document/docs/android-prepare",version:"current",sidebar_label:"Prepare",frontMatter:{id:"android-prepare",title:"Android Prepare",sidebar_label:"Prepare"},sidebar:"docs",previous:{title:"Android Installation",permalink:"/halanews-document/docs/android-installation"},next:{title:"Android Deploy",permalink:"/halanews-document/docs/android-deploy"}},d=[{value:"Add Android platform",id:"add-android-platform",children:[]},{value:"Change Icons and Splash screens",id:"change-icons-and-splash-screens",children:[]},{value:"Android notifications Icon",id:"android-notifications-icon",children:[]}],l={toc:d};function p(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"add-android-platform"},"Add Android platform"),Object(o.b)("p",null,"For build Ionic/Cordova sources to Android project simple run follow command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ionic cordova platform add android\n")),Object(o.b)("p",null,"After run command, it will create ",Object(o.b)("inlineCode",{parentName:"p"},"/platforms/android")),Object(o.b)("p",null,Object(o.b)("img",{src:t(183).default})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This add platform step need complete without any problem!")),Object(o.b)("p",null,Object(o.b)("img",{src:t(184).default})),Object(o.b)("h2",{id:"change-icons-and-splash-screens"},"Change Icons and Splash screens"),Object(o.b)("p",null,"Icons means that the image represents your application, while the splash screens is the image that shows when you open the application."),Object(o.b)("p",null,"In essence you just change the image in the ",Object(o.b)("inlineCode",{parentName:"p"},"/resources/android")," folder."),Object(o.b)("p",null,"It\u2019s great that Ionic offers a tool for creating icons and splash screens automatically."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install cordova-res IF not installed yet by run ",Object(o.b)("inlineCode",{parentName:"p"},"npm i -g cordova-res"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Replace ",Object(o.b)("inlineCode",{parentName:"p"},"/resources/icon.png")," and ",Object(o.b)("inlineCode",{parentName:"p"},"/resources/splash.png")," by your image.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run ",Object(o.b)("inlineCode",{parentName:"p"},"ionic cordova resources android")," create image assets")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run ",Object(o.b)("inlineCode",{parentName:"p"},"cordova prepare android")," update image assets to Android platform"))),Object(o.b)("h2",{id:"android-notifications-icon"},"Android notifications Icon"),Object(o.b)("p",null,"You can change the Android notifications icon of application in ",Object(o.b)("inlineCode",{parentName:"p"},"/resources/stionic")),Object(o.b)("p",null,'"ic_onesignal_large_icon_default" is large left icon show in notifications when you dropdown.'),Object(o.b)("p",null,"images in res folder is icon show in statusbar when get notifications."),Object(o.b)("p",null,'Make sure your image has only "one layer" to support entire device, including the low version Android.'),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also use the ",Object(o.b)("a",{parentName:"p",href:"http://romannurik.github.io/AndroidAssetStudio/icons-notification.html#source.type=image&source.space.trim=1&source.space.pad=0&name=ic_stat_onesignal_default"},"Android assets studio tools"),", after downloading the .zip file, extract to ",Object(o.b)("inlineCode",{parentName:"p"},"/resources/stionic")," folder.")),Object(o.b)("p",null,Object(o.b)("img",{src:t(185).default})))}p.isMDXComponent=!0},97:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,m=s["".concat(i,".").concat(b)]||s[b]||u[b]||o;return t?a.a.createElement(m,c(c({ref:n},l),{},{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);