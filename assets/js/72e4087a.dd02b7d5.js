"use strict";(self.webpackChunkhalanews_document=self.webpackChunkhalanews_document||[]).push([[830],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=r,m=c["".concat(d,".").concat(f)]||c[f]||u[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7749:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"android-installation",title:"Android Installation",sidebar_label:"Installation"},d=void 0,s={unversionedId:"android-installation",id:"android-installation",isDocsHomePage:!1,title:"Android Installation",description:"This guide shows how to set up your SDK environment to deploy apps for Android devices. You need to install the Android SDK regardless of whether you want to use these platform-centered shell tools or cross-platform Cordova CLI for development. For detail more please read Official document",source:"@site/docs/android-installation.md",sourceDirName:".",slug:"/android-installation",permalink:"/halanews-document/docs/android-installation",tags:[],version:"current",frontMatter:{id:"android-installation",title:"Android Installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Notes",permalink:"/halanews-document/docs/build"},next:{title:"Prepare",permalink:"/halanews-document/docs/android-prepare"}},p=[{value:"Install Android Studio",id:"install-android-studio",children:[]},{value:"Adding SDK Packages",id:"adding-sdk-packages",children:[]}],u={toc:p};function c(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide shows how to set up your SDK environment to deploy apps for Android devices. You need to install the Android SDK regardless of whether you want to use these platform-centered shell tools or cross-platform Cordova CLI for development. For detail more please read ",(0,a.kt)("a",{parentName:"p",href:"https://cordova.apache.org/docs/en/9.x/guide/platforms/android/index.html"},"Official document")),(0,a.kt)("h2",{id:"install-android-studio"},"Install Android Studio"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/index.html"},"Android Studio"),". Follow the instructions at the linked Android Developer site to get started. Opening Android Studio for the first time will guide you through the process of installing the Android SDK."),(0,a.kt)("h2",{id:"adding-sdk-packages"},"Adding SDK Packages"),(0,a.kt)("p",null,"After installing the Android SDK, you must also install the packages for whatever API level you wish to target. It is ",(0,a.kt)("inlineCode",{parentName:"p"},"recommended that you install the highest SDK version")," that your version of cordova-android supports (see ",(0,a.kt)("a",{parentName:"p",href:"https://cordova.apache.org/docs/en/9.x/guide/platforms/android/index.html#requirements-and-support"},"Requirements and Support"),")."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Example, cordova-android@10 support Android API 30. So you need install SDK Platform for API Level 30")),(0,a.kt)("p",null,"Open the Android SDK Manager by click Configure -> SDK Manager"),(0,a.kt)("p",null,"(if you are openning project then it should be Tools > SDK Manager)"),(0,a.kt)("p",null,"and make sure the following are installed:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In tab ",(0,a.kt)("inlineCode",{parentName:"p"},"SDK Platforms")," install Android Platform SDK for your targeted version of Android")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In tab ",(0,a.kt)("inlineCode",{parentName:"p"},"SDK Tools")," install/update follow:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Android SDK Build-Tools version 19.1.0 or higher"),(0,a.kt)("li",{parentName:"ul"},"Android SDK Platform-Tools"),(0,a.kt)("li",{parentName:"ul"},"Android SDK Tools"),(0,a.kt)("li",{parentName:"ul"},"Google Play Services")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9853).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8326).Z})),(0,a.kt)("p",null,"See Android's documentation on ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/intro/update#sdk-manager"},"Installing SDK Packages")," for more details."))}c.isMDXComponent=!0},9853:function(e,t,n){t.Z=n.p+"assets/images/build-android-sdk-platform-84285fd1dc0388b00317b45fcf90b3aa.png"},8326:function(e,t,n){t.Z=n.p+"assets/images/build-android-sdk-tools-3ebb5b83fddac280a8a9578789444195.png"}}]);