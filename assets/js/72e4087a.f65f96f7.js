(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{171:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/build-android-sdk-platform-84285fd1dc0388b00317b45fcf90b3aa.png"},172:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/build-android-sdk-tools-3ebb5b83fddac280a8a9578789444195.png"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=(n(0),n(97));const a={id:"android-installation",title:"Android Installation",sidebar_label:"Installation"},i={unversionedId:"android-installation",id:"android-installation",isDocsHomePage:!1,title:"Android Installation",description:"This guide shows how to set up your SDK environment to deploy apps for Android devices. You need to install the Android SDK regardless of whether you want to use these platform-centered shell tools or cross-platform Cordova CLI for development. For detail more please read Official document",source:"@site/docs/android-installation.md",sourceDirName:".",slug:"/android-installation",permalink:"/halanews-document/docs/android-installation",version:"current",sidebar_label:"Installation",frontMatter:{id:"android-installation",title:"Android Installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Build Notes",permalink:"/halanews-document/docs/build"},next:{title:"Android Prepare",permalink:"/halanews-document/docs/android-prepare"}},l=[{value:"Install Android Studio",id:"install-android-studio",children:[]},{value:"Adding SDK Packages",id:"adding-sdk-packages",children:[]}],d={toc:l};function s({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide shows how to set up your SDK environment to deploy apps for Android devices. You need to install the Android SDK regardless of whether you want to use these platform-centered shell tools or cross-platform Cordova CLI for development. For detail more please read ",Object(o.b)("a",{parentName:"p",href:"https://cordova.apache.org/docs/en/9.x/guide/platforms/android/index.html"},"Official document")),Object(o.b)("h2",{id:"install-android-studio"},"Install Android Studio"),Object(o.b)("p",null,"Install ",Object(o.b)("a",{parentName:"p",href:"https://developer.android.com/studio/index.html"},"Android Studio"),". Follow the instructions at the linked Android Developer site to get started. Opening Android Studio for the first time will guide you through the process of installing the Android SDK."),Object(o.b)("h2",{id:"adding-sdk-packages"},"Adding SDK Packages"),Object(o.b)("p",null,"After installing the Android SDK, you must also install the packages for whatever API level you wish to target. It is ",Object(o.b)("inlineCode",{parentName:"p"},"recommended that you install the highest SDK version")," that your version of cordova-android supports (see ",Object(o.b)("a",{parentName:"p",href:"https://cordova.apache.org/docs/en/9.x/guide/platforms/android/index.html#requirements-and-support"},"Requirements and Support"),")."),Object(o.b)("p",null,"Example, cordova-android@9 support Android API 29. So you need install SDK Platform for API Level 29"),Object(o.b)("p",null,"Open the Android SDK Manager by click Configure -> SDK Manager"),Object(o.b)("p",null,"(if you are openning project then it should be Tools > SDK Manager)"),Object(o.b)("p",null,"and make sure the following are installed:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In tab ",Object(o.b)("inlineCode",{parentName:"p"},"SDK Platforms")," install Android Platform SDK for your targeted version of Android")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In tab ",Object(o.b)("inlineCode",{parentName:"p"},"SDK Tools")," install/update follow:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Android SDK Build-Tools version 19.1.0 or higher"),Object(o.b)("li",{parentName:"ul"},"Android SDK Platform-Tools"),Object(o.b)("li",{parentName:"ul"},"Android SDK Tools"),Object(o.b)("li",{parentName:"ul"},"Google Play Services")))),Object(o.b)("p",null,Object(o.b)("img",{src:n(171).default})),Object(o.b)("p",null,Object(o.b)("img",{src:n(172).default})),Object(o.b)("p",null,"See Android's documentation on ",Object(o.b)("a",{parentName:"p",href:"https://developer.android.com/studio/intro/update#sdk-manager"},"Installing SDK Packages")," for more details."))}s.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return n?o.a.createElement(f,l(l({ref:t},s),{},{components:n})):o.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);