(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/config-website-url-d6bc46ebb7fe5e0ad8eb6b52c35232c0.png"},154:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/config-application-information-037510eb2ccab8444be03cb074e43964.png"},155:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/config-remove-google-analytics-415cf88517dfe493e1fd81535edc5f64.png"},156:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/config-remove-google-analytics-package-3b78d5bdb870f80c8130abff83e34972.png"},157:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/config-deeplinks-8d067056fe7040f1db0fdf38df7bff0d.png"},158:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/config-admob-app-id-b551f76a0a4162d78ec3052026f4d286.png"},76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var o=t(3),i=(t(0),t(97));const a={id:"config",title:"Config",sidebar_label:"Config your app"},r={unversionedId:"config",id:"config",isDocsHomePage:!1,title:"Config",description:"Connect to WordPress website",source:"@site/docs/getting-started-config.md",sourceDirName:".",slug:"/config",permalink:"/halanews-document/docs/config",version:"current",sidebar_label:"Config your app",frontMatter:{id:"config",title:"Config",sidebar_label:"Config your app"},sidebar:"docs",previous:{title:"Installation",permalink:"/halanews-document/docs/installation"},next:{title:"Customize",permalink:"/halanews-document/docs/customize"}},l=[{value:"Connect to WordPress website",id:"connect-to-wordpress-website",children:[]},{value:"Terms and Conditions page",id:"terms-and-conditions-page",children:[]},{value:"App Information",id:"app-information",children:[]},{value:"Google Firebase Analytics",id:"google-firebase-analytics",children:[]},{value:"Deeplinks (optional)",id:"deeplinks-optional",children:[]},{value:"Google AdMob ads (optional)",id:"google-admob-ads-optional",children:[]},{value:"Facebook native SDK (removed)",id:"facebook-native-sdk-removed",children:[]}],p={toc:l};function c({components:e,...n}){return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"connect-to-wordpress-website"},"Connect to WordPress website"),Object(i.b)("p",null,"Sure, you need to let the app know the URL of your website so that the app can connect."),Object(i.b)("p",null,"Very easy, you just need to edit \u201cone line\u201d in ",Object(i.b)("inlineCode",{parentName:"p"},"/src/assets/i18n/en.json")),Object(i.b)("p",null,"Open en.json file with a text editor and edit ",Object(i.b)("inlineCode",{parentName:"p"},"general.config.url")," into your URL (line 4)"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Make sure it is final url, after all rediects if have (like forcing HTTPS, www,..)")),Object(i.b)("p",null,"Tips: you can open your website in browser and wait all load done then copy url in Address bar"),Object(i.b)("p",null,Object(i.b)("img",{src:t(153).default})),Object(i.b)("h2",{id:"terms-and-conditions-page"},"Terms and Conditions page"),Object(i.b)("p",null,"Default you simple create page in WordPress with slug ",Object(i.b)("inlineCode",{parentName:"p"},"app-terms")," then app will open this page first time users open app or when click Terms and Conditions in Login."),Object(i.b)("p",null,"If you want to change slug just edit in ",Object(i.b)("inlineCode",{parentName:"p"},"/src/assets/i18n/en.json")),Object(i.b)("p",null,"Open en.json file with a text editor and edit ",Object(i.b)("inlineCode",{parentName:"p"},"general.config._terms")," and ",Object(i.b)("inlineCode",{parentName:"p"},"general.config._terms_login")," (line 5-11)"),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"slug")," is empty then app will hidden all terms alert."),Object(i.b)("h2",{id:"app-information"},"App Information"),Object(i.b)("p",null,"The application should be unique, so you need to provide application information such as ID, version, application name to make sure it is unique."),Object(i.b)("p",null,"Just open ",Object(i.b)("inlineCode",{parentName:"p"},"/config.xml")," file with a text editor and edit"),Object(i.b)("p",null,"Package name (id) normal is reverse of your website domain. Example hala.noncheat.com -> com.noncheat.hala"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You need config ",Object(i.b)("inlineCode",{parentName:"p"},"Application *")," in ",Object(i.b)("inlineCode",{parentName:"p"},"WordPress admin -> Stionic -> General"),Object(i.b)("br",null),"\nPackage name (id) in config.xml, Apple App ID can config later after you Adding a New App in AppStore Connect")),Object(i.b)("p",null,Object(i.b)("img",{src:t(154).default})),Object(i.b)("h2",{id:"google-firebase-analytics"},"Google Firebase Analytics"),Object(i.b)("p",null,"Our app support Google Firebase Analytics and it ",Object(i.b)("inlineCode",{parentName:"p"},"REQUIRED")," config or remove, otherwise will lead to problem when build."),Object(i.b)("p",null,"If want to use, You can read ",Object(i.b)("a",{parentName:"p",href:"/halanews-document/docs/guides-google-analytics"},"Guide Googgle Firebase Analytics")," document."),Object(i.b)("p",null,"Else, you do not want use this function then need remove config follow below:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open ",Object(i.b)("inlineCode",{parentName:"li"},"/config.xml")," file with a text editor and remove 3 line")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'<preference name="GradlePluginGoogleServicesEnabled" value="true" />\n...\n<resource-file src="google-services.json" target="app/google-services.json" />\n...\n<resource-file src="GoogleService-Info.plist" />\n')),Object(i.b)("p",null,Object(i.b)("img",{src:t(155).default})),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Open ",Object(i.b)("inlineCode",{parentName:"li"},"/package.json")," file with a text editor and remove ",Object(i.b)("inlineCode",{parentName:"li"},"cordova.plugins.cordova-plugin-firebase-analytics"))),Object(i.b)("p",null,Object(i.b)("img",{src:t(156).default})),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Remove folder ",Object(i.b)("inlineCode",{parentName:"li"},"/plugins"),", ",Object(i.b)("inlineCode",{parentName:"li"},"/platforms")," if it exists.")),Object(i.b)("h2",{id:"deeplinks-optional"},"Deeplinks (optional)"),Object(i.b)("a",{href:"https://github.com/ionic-team/ionic-plugin-deeplinks",target:"_blank"},"Ionic Deeplinks Plugin")," makes it easy to respond to deeplinks through custom URL schemes and Universal/App Links on iOS and Android.",Object(i.b)("p",null,"That means instead of opening your WordPress website in a browser, your device will open the app."),Object(i.b)("p",null,"We have pre-configured the application, you just change it so deeplinks can work well."),Object(i.b)("p",null,"Open ",Object(i.b)("inlineCode",{parentName:"p"},"/package.json")," file with a text editor and edit ",Object(i.b)("inlineCode",{parentName:"p"},"cordova.plugins.ionic-plugin-deeplinks")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"URL_SCHEME")," \u2013 the custom URL scheme you\u2019d like to use for your app. This lets your app respond to links like myapp://blah"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"DEEPLINK_SCHEME")," \u2013 the scheme to use for universal/app links. Defaults to \u2018https\u2019 in 1.0.13. 99% of the time you\u2019ll use https here as iOS and Android require SSL for app links domains."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"DEEPLINK_HOST")," \u2013 the host that will respond to deeplinks. For example, if we want example.com/product/cool-beans to open in our app, we\u2019d use example.com here."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ANDROID_PATH_PREFIX")," \u2013 (optional): specify which path prefix our Android app should open from ",Object(i.b)("a",{href:"https://developer.android.com/guide/topics/manifest/data-element.html",target:"_blank"},"more info")),Object(i.b)("p",null,"Example:"),Object(i.b)("p",null,"change urlscheme to myapp, then every time the device open myapp:// will open your application."),Object(i.b)("p",null,"change yourdomain.com to example.com, then every time browser open ",Object(i.b)("inlineCode",{parentName:"p"},"http://example.com")," will open your application."),Object(i.b)("p",null,Object(i.b)("img",{src:t(157).default})),Object(i.b)("p",null,"You also need config in ",Object(i.b)("inlineCode",{parentName:"p"},"WordPress admin -> Stionic -> DeepLinks"),", and now your app will support deeplinks open app from website by click Application button."),Object(i.b)("p",null,"In case you want phone automatic open app when open url (without users action) then you need config App/Universal link in your website."),Object(i.b)("p",null,"Each website/app will have different config, you can read Offical document here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Android (App link): ",Object(i.b)("a",{href:"https://developer.android.com/training/app-links/verify-site-associations#web-assoc",target:"_blank"},"Declare website associations"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"iOS (Universal link): ",Object(i.b)("a",{href:"https://developer.apple.com/documentation/safariservices/supporting_associated_domains_in_your_app#3001215",target:"_blank"},"Add the Apple App Site Association File")))),Object(i.b)("h2",{id:"google-admob-ads-optional"},"Google AdMob ads (optional)"),Object(i.b)("p",null,"If you want to show ",Object(i.b)("a",{parentName:"p",href:"/halanews-document/docs/guides-admob"},"AdMob ads")," in your app then need to config AdMob App ID as ",Object(i.b)("a",{href:"https://developers.google.com/admob/ios/quick-start#update_your_infoplist",target:"_blank"},"AdMob")," ",Object(i.b)("a",{href:"https://developers.google.com/admob/android/quick-start#update_your_androidmanifestxml",target:"_blank"},"required")),Object(i.b)("p",null,"Open ",Object(i.b)("inlineCode",{parentName:"p"},"/package.json")," file and edit AdMob App ID ",Object(i.b)("inlineCode",{parentName:"p"},"cordova.plugins.com-stionic-admob-free")),Object(i.b)("p",null,"Read document ",Object(i.b)("a",{href:"https://support.google.com/admob/answer/7356431?hl=en",target:"_blank"},"Find your app IDs"),"."),Object(i.b)("p",null,Object(i.b)("img",{src:t(158).default})),Object(i.b)("h2",{id:"facebook-native-sdk-removed"},"Facebook native SDK (removed)"),Object(i.b)("a",{href:"https://developer.apple.com/app-store/review/guidelines/#sign-in-with-apple",target:"_blank"},"Apple required Apple sign in")," if your app have other social login. If not they will reject your app in Store. So Facebook login current temp removed.")}c.isMDXComponent=!0},97:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var o=t(0),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),s=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(t),u=o,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||a;return t?i.a.createElement(m,l(l({ref:n},c),{},{components:t})):i.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=t[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);