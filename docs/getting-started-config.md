---
id: config
title: Config
sidebar_label: Config your app
---

## Connect to WordPress website

Sure, you need to let the app know the URL of your website so that the app can connect.

Very easy, you just need to edit “one line” in `/src/assets/i18n/en.json`

Open en.json file with a text editor and edit `general.config.url` into your URL (line 4)

> Make sure it is final url, after all rediects if have (like forcing HTTPS, www,..)

Tips: you can open your website in browser and wait all load done then copy url in Address bar

![](/docs/assets/config-website-url.png)

## Terms and Conditions page

Default you simple create page in WordPress with slug `app-terms` then app will open this page first time users open app or when click Terms and Conditions in Login.

If you want to change slug just edit in `/src/assets/i18n/en.json`

Open en.json file with a text editor and edit `general.config._terms` and `general.config._terms_login` (line 5-11)

If `slug` is empty then app will hidden all terms alert.

## App Information

The application should be unique, so you need to provide application information such as ID, version, application name to make sure it is unique.

Just open `/config.xml` file with a text editor and edit

Package name (id) normal is reverse of your website domain. Example hala.noncheat.com -> com.noncheat.hala

> You need config `Application *` in `WordPress admin -> Stionic -> General`<br/>
Package name (id) in config.xml, Apple App ID can config later after you Adding a New App in AppStore Connect

![](/docs/assets/config-application-information.png)

## Google Firebase Analytics

Our app support Google Firebase Analytics and it `REQUIRED` config or remove, otherwise will lead to problem when build.

If want to use, You can read [Guide Googgle Firebase Analytics](guides-google-analytics.md) document.

Else, you do not want use this function then need remove config follow below:

1. Open `/config.xml` file with a text editor and remove 3 line

```
<preference name="GradlePluginGoogleServicesEnabled" value="true" />
...
<resource-file src="google-services.json" target="app/google-services.json" />
...
<resource-file src="GoogleService-Info.plist" />
```

![](/docs/assets/config-remove-google-analytics.png)

2. Open `/package.json` file with a text editor and remove `cordova.plugins.cordova-plugin-firebase-analytics`

![](/docs/assets/config-remove-google-analytics-package.png)

3. Remove folder `/plugins`, `/platforms` if it exists.

## Deeplinks (optional)

<a href="https://github.com/ionic-team/ionic-plugin-deeplinks" target="_blank">Ionic Deeplinks Plugin</a> makes it easy to respond to deeplinks through custom URL schemes and Universal/App Links on iOS and Android.

That means instead of opening your WordPress website in a browser, your device will open the app.

We have pre-configured the application, you just change it so deeplinks can work well.

Open `/package.json` file with a text editor and edit `cordova.plugins.ionic-plugin-deeplinks`

`URL_SCHEME` – the custom URL scheme you’d like to use for your app. This lets your app respond to links like myapp://blah

`DEEPLINK_SCHEME` – the scheme to use for universal/app links. Defaults to ‘https’ in 1.0.13. 99% of the time you’ll use https here as iOS and Android require SSL for app links domains.

`DEEPLINK_HOST` – the host that will respond to deeplinks. For example, if we want example.com/product/cool-beans to open in our app, we’d use example.com here.

`ANDROID_PATH_PREFIX` – (optional): specify which path prefix our Android app should open from <a href="https://developer.android.com/guide/topics/manifest/data-element.html" target="_blank">more info</a>

Example:

change urlscheme to myapp, then every time the device open myapp:// will open your application.

change yourdomain.com to example.com, then every time browser open `http://example.com` will open your application.

![](/docs/assets/config-deeplinks.png)

You also need config in `WordPress admin -> Stionic -> DeepLinks`, and now your app will support deeplinks open app from website by click Application button.

In case you want phone automatic open app when open url (without users action) then you need config App/Universal link in your website.

Each website/app will have different config, you can read Offical document here:

- Android (App link): <a href="https://developer.android.com/training/app-links/verify-site-associations#web-assoc" target="_blank">Declare website associations</a>

- iOS (Universal link): <a href="https://developer.apple.com/documentation/safariservices/supporting_associated_domains_in_your_app#3001215" target="_blank">Add the Apple App Site Association File</a>

## Google AdMob ads (optional)

If you want to show [AdMob ads](guides-admob-ads.md) in your app then need to config AdMob App ID as <a href="https://developers.google.com/admob/ios/quick-start#update_your_infoplist" target="_blank">AdMob</a> <a href="https://developers.google.com/admob/android/quick-start#update_your_androidmanifestxml" target="_blank">required</a>

Open `/package.json` file and edit AdMob App ID `cordova.plugins.com-stionic-admob-free`

Read document <a href="https://support.google.com/admob/answer/7356431?hl=en" target="_blank">Find your app IDs</a>.

![](/docs/assets/config-admob-app-id.png)

## Facebook native SDK (removed)

<a href="https://developer.apple.com/app-store/review/guidelines/#sign-in-with-apple" target="_blank">Apple required Apple sign in</a> if your app have other social login. If not they will reject your app in Store. So Facebook login current temp removed.

<!-- 
> You need config it if want to use/customize Facebook native SDK in application (like Social login, App events,..)

Open `/package.json` file and edit `cordova.plugins.cordova-plugin-facebook4`

![](/docs/assets/config-facebook-native-sdk.png) -->