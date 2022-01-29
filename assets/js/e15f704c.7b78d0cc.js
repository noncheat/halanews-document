"use strict";(self.webpackChunkhalanews_document=self.webpackChunkhalanews_document||[]).push([[757],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7646:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={id:"ios-prepare",title:"iOS Prepare",sidebar_label:"Prepare"},l=void 0,s={unversionedId:"ios-prepare",id:"ios-prepare",isDocsHomePage:!1,title:"iOS Prepare",description:"Add iOS platform",source:"@site/docs/ios-prepare.md",sourceDirName:".",slug:"/ios-prepare",permalink:"/halanews-document/docs/ios-prepare",tags:[],version:"current",frontMatter:{id:"ios-prepare",title:"iOS Prepare",sidebar_label:"Prepare"},sidebar:"docs",previous:{title:"Installation",permalink:"/halanews-document/docs/ios-installation"},next:{title:"Deploy",permalink:"/halanews-document/docs/ios-deploy"}},c=[{value:"Add iOS platform",id:"add-ios-platform",children:[]},{value:"Change Icons and Splash screens",id:"change-icons-and-splash-screens",children:[]}],u={toc:c};function d(e){var t=e.components,p=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"add-ios-platform"},"Add iOS platform"),(0,o.kt)("p",null,"For build Ionic/Cordova sources to iOS XCode project simple run follow command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pod repo update\nionic cordova platform add ios\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"First time add ios platform maybe take long time for install cocoapods, so please wait...and make sure it complete without any problem")),(0,o.kt)("p",null,"After run command, it will create ",(0,o.kt)("inlineCode",{parentName:"p"},"/platforms/ios"),", like image below is good!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5617).Z})),(0,o.kt)("h2",{id:"change-icons-and-splash-screens"},"Change Icons and Splash screens"),(0,o.kt)("p",null,"Icons means that the image represents your application, while the splash screens is the image that shows when you open the application."),(0,o.kt)("p",null,"In essence you just change the image in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/resources/ios")," folder."),(0,o.kt)("p",null,"It\u2019s great that Ionic offers a tool for creating icons and splash screens automatically."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install cordova-res IF not installed yet by run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i -g cordova-res"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"/resources/ios/icon.png")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/resources/splash.png")," by your image."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"IMPORTANT! icon in iOS need ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/"},(0,o.kt)("inlineCode",{parentName:"a"},"avoid transparency")),", so replace icon.png in ",(0,o.kt)("inlineCode",{parentName:"p"},"/resources/ios"))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"ionic cordova resources ios")," create image assets")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova prepare ios")," update image assets to iOS platform"))))}d.isMDXComponent=!0},5617:function(e,t,n){t.Z=n.p+"assets/images/build-ios-add-platform-cefde3aa38fe70d037dd43e186229646.png"}}]);