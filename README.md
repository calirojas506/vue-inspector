# vue-inspector 0.4.2
Vue.js Inspector for Mobile Devices


![](/images/header.png)

## What is vue-inspector?
[![NPM](https://nodei.co/npm/vue-inspector.png?compact=true)](https://npmjs.org/package/vue-inspector)

**vue-inspector** is a basic inspector for Vue.js that works with mobile devices. It could work in a desktop environment, but I do not recommend that; use **Vue.js devtools** instead.

With **vue-inspector** is possible to execute JavaScript code directly in your mobile browser and get error messages generated at run-time. Also inspect the data, props, router links, views/components, computed properties, routes, Vuex and more... inside your Vue.js project.

![](/images/screenshots/desktop/vue-inspector-01.png)


## Features
- Works with Vue.js 2
- Reactive _(of course)_
- Instance routes, data and computed properties inspection
- Integrated JavaScript _(basic)_ console for code execution and messages/errors logging
- Navigation inside components and their children _(with inspection)_
- Responsive and simple UI
- Supports vue-router

## Installing vue-inspector via Yarn or npm
Installing with npm:

```shell
npm install --save-dev vue-inspector
```

[![NPM](https://nodei.co/npm/vue-inspector.png?mini=true)](https://npmjs.org/package/vue-inspector)

Using Yarn:
```shell
yarn add --dev vue-inspector
```

## Using vue-inspector from jsDelivr CDN

JavaScript:
```html
<script src="https://cdn.jsdelivr.net/npm/vue-inspector@0.4.2/dist/js/vue-inspector.min.js"></script>
```

CSS:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-inspector@0.4.2/dist/css/vue-inspector.min.css">
```
## How to use vue-inspector?
Install using npm or Yarn, then add **vue-inspector** _(CSS and JavaScript files)_ to your project. Last step is adding the **&lt;vue-inspector/&gt;** component inside your app wrapper _(**el**)_.

```html
<div id="app">
  <!-- add the component to your view -->
  <vue-inspector :hide-lines="true"/>
</div>
```
Make sure **vue-inspector** is the last component added.

If you're having issues with the installation, please see any of the available demos in this repository. Currently **vue-inspector** does not support Nuxt, but I'm working on it :)

## Properties
The following properties are available _(all of them are Boolean and optional)_:

|Property|Type|Required|Default value|Description|
|--------|----|--------|-------------|-----------|
|is-visible|Boolean|false|true|Start visible|
|is-minimized|Boolean|false|false|Start minimized|
|hide-vuex|Boolean|false|false|Hide **Vuex** tab from UI|
|hide-components|Boolean|false|false|Hide **Components** tab from UI|
|hide-router|Boolean|false|false|Hide **Router** tab from UI|
|hide-lines|Boolean|false|false|Hide separator lines _(keeping this option in false improves readability)_|

If you hide any of the tabs _(Components, Vuex or Router)_ the console will be shown by default. The console can not be hidden or disabled.


## Screenshots
**Important:** these screenshots are not updated. Check the demos, so you can see the latest version running ;)

![](/images/screenshots/mobile/simple/vue-inspector-01.png)
![](/images/screenshots/mobile/simple/vue-inspector-02.png)
![](/images/screenshots/mobile/simple/vue-inspector-03.png)
![](/images/screenshots/mobile/simple/vue-inspector-04.png)
![](/images/screenshots/mobile/simple/vue-inspector-05.png)
![](/images/screenshots/mobile/router/vue-inspector-router-00.png)
![](/images/screenshots/mobile/router/vue-inspector-router-01.png)
![](/images/screenshots/mobile/router/vue-inspector-router-02.png)
![](/images/screenshots/mobile/router/vue-inspector-router-03.png)
![](/images/screenshots/mobile/router/vue-inspector-router-04.png)

## Demos
All the demos are available for download from this repository. Clone the repository or download the folder **demos**. Also, I've uploaded them to a temporary free hosting account which you can access with your mobile device:
- [Simple demo](http://calirojas1.000webhostapp.com/vue-inspector/demos/simple)
- [vue-router demo](http://calirojas1.000webhostapp.com/vue-inspector/demos/vue-router)
- [webpack demo](http://calirojas1.000webhostapp.com/vue-inspector/demos/webpack)
- [webpack + Vuex demo](http://calirojas1.000webhostapp.com/vue-inspector/demos/webpack-vuex)

**webpack users:** the property **assetsPublicPath** _(in config/index.js)_ were changed to '/vue-inspector/demos/webpack-vuex/'. Only for build. It's because I'm deploying the demo to a different directory instead server's root.


## Compatibility
I have tested this tool only with Android phones and tablets. If you have information about the compatibility with iOS, or/and other mobile browsers, please let me know to update this list. I will appreciate any collaboration with compatibility testing. Currently tested/compatible with:

- Firefox for Android
- Google Chrome for Android

## Pending / In Progress
- Events logging
- Vuex support _(state management)_ _(In progress / Basic support: Done)_
- Support for Nuxt _(In progress)_

## Changelog
- **December 26th, 2017**
  - Improved variable type detection
  - **Console** tab removed _(now appears at the bottom)_
  - Basic support for Vuex added _(new tab Vuex)_
  - vue-router support improved _(new tab Router)_
  - JavaScript console improvements
  - UI changes and performance improvements
  - Recursive components
  - New props added: hide-lines, hide-vuex, hide-components, hide-router
  - Optional separator lines to improve readability in devices with small screens _(prop **hide-lines**, by default = false)_
  - New webpack demo using Vuex
  - npm package released, version 0.4.0
  - jsDelivr CDN added
  - Fixed small issue with "lastUpdate" property (patched to 0.4.1 / 0.4.2)
  - Released version 0.4.2
- **December 22th, 2017**
  - Improved support for vue-router
  - Fixed issue with Vuex
  - Version 0.3.1 released
  - npm package updated to 0.3.1 _(please, update your vue-inspector version)_
  - Screenshots updated to 0.3.1
- **December 21th, 2017**
  - UI updates
  - Component rewrite
  - Component prop **is-expanded** removed
  - Project's structure changed
  - New demos added
  - Version 0.3.0 released :)
- **December 19th, 2017**
  - New demo added for webpack integration.
- **December 16th, 2017**
    - **vue-inspector**, beta 0.2 released.
    - Added support for vue-router.
    - New demo created/added, using vue-router to demonstrate how the integration works.
    - Tested in Mozilla Firefox for Android. It works :)
- **December 14th, 2017**
  - **vue-inspector**, beta 0.1 released.

## Stay In Touch

- [Twitter](https://twitter.com/calirojas506)
- [Facebook](https://www.facebook.com/calirojas506)
- [LinkedIn](https://www.linkedin.com/in/cali-rojas-17403334/)
- [YouTube](https://youtube.com/calirojas506)


## License
[MIT](http://opensource.org/licenses/MIT)


Copyright (c) 2017, Cali Rojas