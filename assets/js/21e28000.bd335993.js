"use strict";(self.webpackChunkhalanews_document=self.webpackChunkhalanews_document||[]).push([[603],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6861:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={id:"customize",title:"Customize",sidebar_label:"Customize your app"},s=void 0,p={unversionedId:"customize",id:"customize",isDocsHomePage:!1,title:"Customize",description:"Having many of the same interface applications is not good, we highly recommend that you make certain customizations to create different applications.",source:"@site/docs/getting-started-customize.md",sourceDirName:".",slug:"/customize",permalink:"/halanews-document/docs/customize",tags:[],version:"current",frontMatter:{id:"customize",title:"Customize",sidebar_label:"Customize your app"},sidebar:"docs",previous:{title:"Config your app",permalink:"/halanews-document/docs/config"},next:{title:"Notes",permalink:"/halanews-document/docs/build"}},u=[{value:"Run on browser",id:"run-on-browser",children:[]},{value:"Customize intro slide",id:"customize-intro-slide",children:[]},{value:"Login &amp; Social login",id:"login--social-login",children:[]},{value:"Change images",id:"change-images",children:[]},{value:"Change colors",id:"change-colors",children:[]},{value:"Multiple languages &amp; Translate app",id:"multiple-languages--translate-app",children:[]},{value:"RTL support",id:"rtl-support",children:[]}],c={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Having many of the same interface applications is not good, we highly recommend that you make certain customizations to create different applications."),(0,i.kt)("h2",{id:"run-on-browser"},"Run on browser"),(0,i.kt)("p",null,"Ionic can run the application on your computer browser. It\u2019s so easy to customize."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Almost native functions from ",(0,i.kt)("a",{parentName:"p",href:"https://cordova.apache.org/plugins/"},"Cordova plugin")," will not work when run in web browser.")),(0,i.kt)("p",null,"Run ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/v3/cli/serve/"},(0,i.kt)("inlineCode",{parentName:"a"},"ionic serve"))," to start a local dev server for app dev/testing:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2213).Z})),(0,i.kt)("p",null,"Then you can enable Simulate Mobile Devices with Device Mode in your Browser Dev Tools (F12) to have good view."),(0,i.kt)("h2",{id:"customize-intro-slide"},"Customize intro slide"),(0,i.kt)("p",null,"Intro slide image show only first time when users open app after installed. You can use it for show Tips, Guides, Introduction your company,..."),(0,i.kt)("p",null,"Default it will not show, for active intro slide image in your app you need active in ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/app/app.component.ts")," like image below"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9094).Z})),(0,i.kt)("p",null,"Default intro slide will have 3 images locate in ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/imgs/intro")," you can replace it."),(0,i.kt)("p",null,"For remove or add more images you need edit ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/app/app.html"),". In ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-slides")," tag each ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-slide")," is one image, just duplicate then change ",(0,i.kt)("inlineCode",{parentName:"p"},"<img src")," or remove if you want"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3974).Z})),(0,i.kt)("h2",{id:"login--social-login"},"Login & Social login"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Do this customize if you want your app have a login function.")),(0,i.kt)("p",null,"First install the required plugins:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://wordpress.org/plugins/stionic-users/"},"Stionic Users")," (",(0,i.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1zAB_PnuPGNW7zKlF_3ZjKxE3u4bPXpsA/view?usp=sharing"},"Google Drive link"),") \u2013 extend API endpoint for manager users"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/"},"JWT Authentication for WP REST API")," \u2013 allow authentication with token"),(0,i.kt)("p",null,"Make sure you have configured JWT."),(0,i.kt)("p",null,"Add to end of .htaccess"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#BEGIN JWT\nRewriteEngine on\nRewriteCond %{HTTP:Authorization} ^(.*)\nRewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]\nSetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1\n# END JWT\n')),(0,i.kt)("p",null,"Add to wp-config.php after ",(0,i.kt)("inlineCode",{parentName:"p"},"<?php")," (line 2)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"define('JWT_AUTH_SECRET_KEY', 'your-top-secrect-key');\ndefine('JWT_AUTH_CORS_ENABLE', true);\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2018your-top-secrect-key\u2019 should change to any secret random string. Let your cat jump on keyboard :)")),(0,i.kt)("h2",{id:"change-images"},"Change images"),(0,i.kt)("p",null,"All images of the application locate at ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/assets/imgs")),(0,i.kt)("p",null,"You can replace any image you want (like menu image, nodata image, thumbnail post, avatar user, etc\u2026)"),(0,i.kt)("h2",{id:"change-colors"},"Change colors"),(0,i.kt)("p",null,"To change the color of the application please edit at ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/theme/variables.scss")),(0,i.kt)("p",null,"Open it with a text editor and edit value"),(0,i.kt)("p",null,"Change the hex color and all corresponding colors in the application will change."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{href:"https://ionicframework.com/docs/theming/colors#new-color-creator",target:"_blank"},"Ionic colors tool")," if want to add new color"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1867).Z})),(0,i.kt)("h2",{id:"multiple-languages--translate-app"},"Multiple languages & Translate app"),(0,i.kt)("p",null,"The application support multiple languages, archived at ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/assets/i18n")),(0,i.kt)("p",null,"Include config file (languages.json) and translated files (en.json, vi.json,\u2026)"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3510).Z})),(0,i.kt)("p",null,"To add multiple languages, duplicate any translated file and rename it to the language identifier. Then declarations in ",(0,i.kt)("inlineCode",{parentName:"p"},"languages.json"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example: duplicate ",(0,i.kt)("inlineCode",{parentName:"p"},"en.json")," and rename to ",(0,i.kt)("inlineCode",{parentName:"p"},"vi.json"),". Then declarations in ",(0,i.kt)("inlineCode",{parentName:"p"},"languages.json")," as image above.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"IMPORTANT: language file name can not have special characters (just a-z). We highly recommend search your ",(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes",target:"_blank"},"language code ISO 639-1 two-letter")," if you want to auto detect device language.")),(0,i.kt)("p",null,"[language]"," below is a replacement for translated file (en.json, vi.json,\u2026)"),(0,i.kt)("p",null,"To translate the application, simply edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/assets/i18n/[language].json")," file."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Data in JSON format, just edit the value, never modify the key and the value of key start with character ",(0,i.kt)("inlineCode",{parentName:"p"},'"_"')," if you don\u2019t understand what it is.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5903).Z})),(0,i.kt)("h2",{id:"rtl-support"},"RTL support"),(0,i.kt)("p",null,"Default app showing follow LTR language, if you want make RTL then simple change ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/index.html")," line 2 set ",(0,i.kt)("inlineCode",{parentName:"p"},'dir="rtl"')),(0,i.kt)("p",null,"Incase your app have multiple languages and need both LTR and RTL, you can config RTL dynamic depend user language in ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/assets/i18n/languages.json")),(0,i.kt)("p",null,"It will override dir attribute you setted in index.html file above."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8710).Z})))}d.isMDXComponent=!0},9094:function(e,t,n){t.Z=n.p+"assets/images/customize-active-intro-68f4b0d619b0d40753b931a4e56c075f.png"},1867:function(e,t,n){t.Z=n.p+"assets/images/customize-change-colors-d710ef542b9e6a84d0132a7c7cfca681.png"},3974:function(e,t,n){t.Z=n.p+"assets/images/customize-change-intro-a2040538b0aa8295fa084041ec904a33.png"},3510:function(e,t,n){t.Z=n.p+"assets/images/customize-multiple-languages-config-15df5dce8e598e8d7dbb032610a30b3d.png"},5903:function(e,t,n){t.Z=n.p+"assets/images/customize-multiple-languages-translate-bc30422834a72ba6235cb263478fb520.png"},8710:function(e,t,n){t.Z=n.p+"assets/images/customize-rtl-support-1ed8b5c11b6279b40c973154f7ca6590.png"},2213:function(e,t,n){t.Z=n.p+"assets/images/customize-run-on-browser-3b55a037fb4b13d2ad8a785863be44a9.png"}}]);