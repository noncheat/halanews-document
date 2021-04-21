---
id: android-deploy
title: Android Deploy
sidebar_label: Deploy
---

Run everytime before you build want to build app in Android Studio when have changed code in `/src`

```
ionic cordova prepare android --prod
```

If building debug version then you should not use `--prod` for save time

## Opening a Project in Android Studio

### Import Project

1. Launch Android Studio.

2. Select `Import Project (Eclipse ADT, Gradle, etc)`

3. Select the Android platform directory in your project `/platforms/android`.

4. If have the Gradle Sync question you can simply answer `Yes`

![](/docs/assets/build-android-import-android-studio.png)

![](/docs/assets/build-android-gradle-sync.png)

### Verifying Gradle Sync

You need make sure that all working fine before continue Deploy Android application.

When Gradle Sync process completed, make sure it show `Project setup: successful` and have no any `WARNING` with RED color

Otherwise, please try [Do Refactor Gradle](android-deploy.md#do-refactor-gradle) first before contact support.

![](/docs/assets/build-android-gradle-good.png)

### Do Refactor Gradle

If your Gralde Sync process have `WARNING` with RED color and failed, can not build application then try Do Refactor:

1. Select `Build` panel and hide `Event Log` panel if it showing

1. Expand `Gradle Sync Issues`

1. Select each issue have `WARNING` icon

1. Check if Android Studio suggest Refactor then click and `Do Refactor`, else select other issue in above step

![](/docs/assets/build-android-refactor.png)

> After check and `Do Refactor` all issues in `Gradle Sync Issues` still not get `Project setup: successful` at [Verifying Gradle Sync](android-deploy.md#verifying-gradle-sync) then you can contact us with screenshot of issues

## Build and Run your app

There are too many documents about Build and Run application in Android Studio. You can easy search and read [Official Android Studio document](https://developer.android.com/studio/run/index.html)

1. Import project to Android Studio

1. Wait to gradle sync, deamon start,..

1. Build -> Build Bundle(s) / APK(s)

![](/docs/assets/build-android-android-studio.png)

## Publish android app to Google Play

Read [Official Android Studio document](https://developer.android.com/studio/publish/upload-bundle)

1. Register Google Play Console developer account

1. In Android Studio, Build -> Generate Signed Bundle / APK

1. Upload app to Google Play Console
