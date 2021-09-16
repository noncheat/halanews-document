---
id: help-problems
title: Problems
sidebar_label: Problems
---

All problems will update here. Please try find your problems before [contact us](contact.md)

> Make sure you have same error message and platform

## Android

### Gradle minimium required

Reason: your Android Studio/Gradle version not match minimium required of latest application sources version

Solution:

* Close Android Studio
* Delete gradle cache:
    - All inside C:\Users\\[username]\\.gradle\wrapper\dists\
    - All inside C:\Users\\[username]\\.gradle\caches\
    - On Macos, Linux location replace `C:\Users\[username]\` by `~/.gradle`
* Update Android Studio to latest version
* Run command

    ```
    ionic cordova platform rm android
    ionic cordova platform add android
    ```
* Open project in Android Studio again

### Android Studio build-tools 31 not work

Reason: current cordova-android platform version not support latest build-tools version

Solution: install old version of build-tools android sdk

* Open Android Studio SDK manager select tab `SDK Tools`
* Check "Show Package Details" and expand `Android SDK Build-Tools...`
* Install build-tools version required in error message (Example: 30.0.3)

![](/docs/assets/problems-android-build-tools.png)

## iOS

### An error occurred while running subprocess cordova

#### Failed to install 'onesignal-cordova-plugin': Error: pod: Command failed with exit code 31

![](/docs/assets/problems-pod-install-code-31.png)

Reason: your Mac don't have Cocoapods or need update Cocoapods

Solution:

* Run
    ```
    pod repo update
    ```
* If you get error `pod: command not found` then you need [install Cocoapods](ios-installation.md#install-cocoapods) first
* Remove iOS platform and add again

    ```
    ionic cordova platform rm ios
    ionic cordova platform add ios
    ```