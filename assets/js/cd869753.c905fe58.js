(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),i=(n(0),n(97)),a={id:"ios-deploy",title:"iOS Deploy",sidebar_label:"Deploy"},p={unversionedId:"ios-deploy",id:"ios-deploy",isDocsHomePage:!1,title:"iOS Deploy",description:"Run everytime before you build want to build app in XCode when have changed code in /src",source:"@site/docs/ios-deploy.md",sourceDirName:".",slug:"/ios-deploy",permalink:"/halanews-document/docs/ios-deploy",version:"current",sidebar_label:"Deploy",frontMatter:{id:"ios-deploy",title:"iOS Deploy",sidebar_label:"Deploy"},sidebar:"docs",previous:{title:"iOS Prepare",permalink:"/halanews-document/docs/ios-prepare"},next:{title:"Guides Setting",permalink:"/halanews-document/docs/guides-setting"}},l=[{value:"Opening a Project in XCode",id:"opening-a-project-in-xcode",children:[]},{value:"Build and Run your app",id:"build-and-run-your-app",children:[]},{value:"OneSignal iOS Service Extensions (Optional)",id:"onesignal-ios-service-extensions-optional",children:[]},{value:"Publish iOS app to Apple Store",id:"publish-ios-app-to-apple-store",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Run everytime before you build want to build app in XCode when have changed code in ",Object(i.b)("inlineCode",{parentName:"p"},"/src")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"ionic cordova prepare ios --prod\n")),Object(i.b)("p",null,"If building debug version then you should not use ",Object(i.b)("inlineCode",{parentName:"p"},"--prod")," for save time"),Object(i.b)("h2",{id:"opening-a-project-in-xcode"},"Opening a Project in XCode"),Object(i.b)("p",null,"Simple open ",Object(i.b)("inlineCode",{parentName:"p"},".xcworkspace")," file in ",Object(i.b)("inlineCode",{parentName:"p"},"/platforms/ios/")," with Xcode."),Object(i.b)("h2",{id:"build-and-run-your-app"},"Build and Run your app"),Object(i.b)("p",null,"There are too many documents about Build and Run application in XCode. You can easy search and read ",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/ToolsLanguages/Conceptual/Xcode_Overview/BuildingYourApp.html"},"Official XCode document")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open project in XCode")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select test device")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click build button"))),Object(i.b)("h2",{id:"onesignal-ios-service-extensions-optional"},"OneSignal iOS Service Extensions (Optional)"),Object(i.b)("p",null,"Our app support send notifications to users mobile device using ",Object(i.b)("a",{parentName:"p",href:"/halanews-document/docs/guides-notification"},"OneSignal"),"."),Object(i.b)("p",null,"It already setup and working fine, but in iOS if you want support more advanced notification features then need config more by yourself."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Setup ",Object(i.b)("a",{href:"https://documentation.onesignal.com/docs/cordova-sdk-setup#ios-service-extensions",target:"_blank"},"iOS Service Extensions")," (from 4.3 to 4.10). Make sure to use ",Object(i.b)("inlineCode",{parentName:"p"},"Objective-C")," language.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"After done above, continue setup ",Object(i.b)("a",{href:"https://documentation.onesignal.com/docs/ios-sdk-app-groups-setup#2-enable-app-groups-capability",target:"_blank"},"iOS SDK App Groups")," (only step 2)"))),Object(i.b)("h2",{id:"publish-ios-app-to-apple-store"},"Publish iOS app to Apple Store"),Object(i.b)("p",null,"Read ",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/ios/submit/"},"Official XCode document")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Register Apple developer account")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Build and test app with XCode")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In XCode, Product -> Archive")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Upload app to Apple Store"))))}u.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=o,O=b["".concat(a,".").concat(d)]||b[d]||s[d]||i;return n?r.a.createElement(O,p(p({ref:t},c),{},{components:n})):r.a.createElement(O,p({ref:t},c))}));function O(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);