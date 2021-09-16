(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/customize-run-on-browser-3b55a037fb4b13d2ad8a785863be44a9.png"},142:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/customize-active-intro-68f4b0d619b0d40753b931a4e56c075f.png"},143:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/customize-change-intro-a2040538b0aa8295fa084041ec904a33.png"},144:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/customize-change-colors-d710ef542b9e6a84d0132a7c7cfca681.png"},145:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/customize-multiple-languages-config-15df5dce8e598e8d7dbb032610a30b3d.png"},146:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/customize-multiple-languages-translate-bc30422834a72ba6235cb263478fb520.png"},147:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/customize-rtl-support-1ed8b5c11b6279b40c973154f7ca6590.png"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),i=(n(0),n(97)),r={id:"customize",title:"Customize",sidebar_label:"Customize your app"},l={unversionedId:"customize",id:"customize",isDocsHomePage:!1,title:"Customize",description:"Having many of the same interface applications is not good, we highly recommend that you make certain customizations to create different applications.",source:"@site/docs/getting-started-customize.md",sourceDirName:".",slug:"/customize",permalink:"/halanews-document/docs/customize",version:"current",sidebar_label:"Customize your app",frontMatter:{id:"customize",title:"Customize",sidebar_label:"Customize your app"},sidebar:"docs",previous:{title:"Config",permalink:"/halanews-document/docs/config"},next:{title:"Build Notes",permalink:"/halanews-document/docs/build"}},c=[{value:"Run on browser",id:"run-on-browser",children:[]},{value:"Customize intro slide",id:"customize-intro-slide",children:[]},{value:"Login &amp; Social login",id:"login--social-login",children:[]},{value:"Change images",id:"change-images",children:[]},{value:"Change colors",id:"change-colors",children:[]},{value:"Multiple languages &amp; Translate app",id:"multiple-languages--translate-app",children:[]},{value:"RTL support",id:"rtl-support",children:[]}],s={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Having many of the same interface applications is not good, we highly recommend that you make certain customizations to create different applications."),Object(i.b)("h2",{id:"run-on-browser"},"Run on browser"),Object(i.b)("p",null,"Ionic can run the application on your computer browser. It\u2019s so easy to customize."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: Almost native functions from ",Object(i.b)("a",{parentName:"p",href:"https://cordova.apache.org/plugins/"},"Cordova plugin")," will not work when run in web browser.")),Object(i.b)("p",null,"Run ",Object(i.b)("a",{parentName:"p",href:"https://ionicframework.com/docs/v3/cli/serve/"},Object(i.b)("inlineCode",{parentName:"a"},"ionic serve"))," to start a local dev server for app dev/testing:"),Object(i.b)("p",null,Object(i.b)("img",{src:n(141).default})),Object(i.b)("p",null,"Then you can enable Simulate Mobile Devices with Device Mode in your Browser Dev Tools (F12) to have good view."),Object(i.b)("h2",{id:"customize-intro-slide"},"Customize intro slide"),Object(i.b)("p",null,"Intro slide image show only first time when users open app after installed. You can use it for show Tips, Guides, Introduction your company,..."),Object(i.b)("p",null,"Default it will not show, for active intro slide image in your app you need active in ",Object(i.b)("inlineCode",{parentName:"p"},"/src/app/app.component.ts")," like image below"),Object(i.b)("p",null,Object(i.b)("img",{src:n(142).default})),Object(i.b)("p",null,"Default intro slide will have 3 images locate in ",Object(i.b)("inlineCode",{parentName:"p"},"assets/imgs/intro")," you can replace it."),Object(i.b)("p",null,"For remove or add more images you need edit ",Object(i.b)("inlineCode",{parentName:"p"},"/src/app/app.html"),". In ",Object(i.b)("inlineCode",{parentName:"p"},"ion-slides")," tag each ",Object(i.b)("inlineCode",{parentName:"p"},"ion-slide")," is one image, just duplicate then change ",Object(i.b)("inlineCode",{parentName:"p"},"<img src")," or remove if you want"),Object(i.b)("p",null,Object(i.b)("img",{src:n(143).default})),Object(i.b)("h2",{id:"login--social-login"},"Login & Social login"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Do this customize if you want your app have a login function.")),Object(i.b)("p",null,"First install the required plugins:"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://wordpress.org/plugins/stionic-users/"},"Stionic Users")," \u2013 extend API endpoint for manager users"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/"},"JWT Authentication for WP REST API")," \u2013 allow authentication with token"),Object(i.b)("p",null,"Make sure you have configured JWT."),Object(i.b)("p",null,"Add to end of .htaccess"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'#BEGIN JWT\nRewriteEngine on\nRewriteCond %{HTTP:Authorization} ^(.*)\nRewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]\nSetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1\n# END JWT\n')),Object(i.b)("p",null,"Add to wp-config.php after ",Object(i.b)("inlineCode",{parentName:"p"},"<?php")," (line 2)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"define('JWT_AUTH_SECRET_KEY', 'your-top-secrect-key');\ndefine('JWT_AUTH_CORS_ENABLE', true);\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u2018your-top-secrect-key\u2019 should change to any secret random string. Let your cat jump on keyboard :)")),Object(i.b)("h2",{id:"change-images"},"Change images"),Object(i.b)("p",null,"All images of the application locate at ",Object(i.b)("inlineCode",{parentName:"p"},"/src/assets/imgs")),Object(i.b)("p",null,"You can replace any image you want (like menu image, nodata image, thumbnail post, avatar user, etc\u2026)"),Object(i.b)("h2",{id:"change-colors"},"Change colors"),Object(i.b)("p",null,"To change the color of the application please edit at ",Object(i.b)("inlineCode",{parentName:"p"},"/src/theme/variables.scss")),Object(i.b)("p",null,"Open it with a text editor and edit value"),Object(i.b)("p",null,"Change the hex color and all corresponding colors in the application will change."),Object(i.b)("p",null,"You can use ",Object(i.b)("a",{href:"https://ionicframework.com/docs/theming/colors#new-color-creator",target:"_blank"},"Ionic colors tool")," if want to add new color"),Object(i.b)("p",null,Object(i.b)("img",{src:n(144).default})),Object(i.b)("h2",{id:"multiple-languages--translate-app"},"Multiple languages & Translate app"),Object(i.b)("p",null,"The application support multiple languages, archived at ",Object(i.b)("inlineCode",{parentName:"p"},"/src/assets/i18n")),Object(i.b)("p",null,"Include config file (languages.json) and translated files (en.json, vi.json,\u2026)"),Object(i.b)("p",null,Object(i.b)("img",{src:n(145).default})),Object(i.b)("p",null,"To add multiple languages, duplicate any translated file and rename it to the language identifier. Then declarations in ",Object(i.b)("inlineCode",{parentName:"p"},"languages.json"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Example: duplicate ",Object(i.b)("inlineCode",{parentName:"p"},"en.json")," and rename to ",Object(i.b)("inlineCode",{parentName:"p"},"vi.json"),". Then declarations in ",Object(i.b)("inlineCode",{parentName:"p"},"languages.json")," as image above.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"IMPORTANT: language file name can not have special characters (just a-z). We highly recommend search your ",Object(i.b)("a",{href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes",target:"_blank"},"language code ISO 639-1 two-letter")," if you want to auto detect device language.")),Object(i.b)("p",null,"[language]"," below is a replacement for translated file (en.json, vi.json,\u2026)"),Object(i.b)("p",null,"To translate the application, simply edit the ",Object(i.b)("inlineCode",{parentName:"p"},"/src/assets/i18n/[language].json")," file."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Data in JSON format, just edit the value, never modify the key and the value of key start with character ",Object(i.b)("inlineCode",{parentName:"p"},'"_"')," if you don\u2019t understand what it is.")),Object(i.b)("p",null,Object(i.b)("img",{src:n(146).default})),Object(i.b)("h2",{id:"rtl-support"},"RTL support"),Object(i.b)("p",null,"Default app showing follow LTR language, if you want make RTL then simple change ",Object(i.b)("inlineCode",{parentName:"p"},"/src/index.html")," line 2 set ",Object(i.b)("inlineCode",{parentName:"p"},'dir="rtl"')),Object(i.b)("p",null,"Incase your app have multiple languages and need both LTR and RTL, you can config RTL dynamic depend user language in ",Object(i.b)("inlineCode",{parentName:"p"},"/src/assets/i18n/languages.json")),Object(i.b)("p",null,"It will override dir attribute you setted in index.html file above."),Object(i.b)("p",null,Object(i.b)("img",{src:n(147).default})))}u.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||b[d]||i;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);