# vue-inspector 0.3.1
_Last update: December 22th, 2017_

Vue.js Inspector for Mobile Devices

![](/images/header.png)

## What is vue-inspector?
[![NPM](https://nodei.co/npm/vue-inspector.png?compact=true)](https://npmjs.org/package/vue-inspector)

**vue-inspector** is a basic inspector for Vue.js that works with mobile devices. It could work in a desktop environment, but I do not recommend that; use **Vue.js devtools** instead.

With **vue-inspector** is possible to execute JavaScript code directly in your mobile browser and get error messages generated at run-time. Also inspect the data, props, router links, views/components, computed properties, routes and more... inside your Vue.js project.

![](/images/screenshots/desktop/vue-inspector-01.png)


## Features
- Works with Vue.js 2
- Reactive (of course)
- Instance routes, data and computed properties inspection
- Integrated JavaScript (basic) console for code execution and messages/errors logging
- Navigation inside components and their children (with inspection)
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

## How to use vue-inspector?
Install using npm or Yarn, then add **vue-inspector** (CSS and JavaScript files) to your project. Last step is adding the **&lt;vue-inspector/&gt;** component inside your app wrapper (**el**).

```html
<div id="app">
  <!-- add the component to your view -->
  <vue-inspector
    :is-visible="true"
    :is-minimized="false"/>
</div>
```
Make sure **vue-inspector** is the last component added.

If you're having issues with the installation, please see any of the available demos in this repository. Currently **vue-inspector** does not support Nuxt, but I'm working on it :)


## Properties
The following properties are available:

|Property|Required|Default value|Description|
|--------|--------|-------------|-----------|
|is-visible|false|true|Start visible|
|is-minimized|false|true|Start minimized|


## Important
Use **vue-inspector** only in development mode. Do not forget to remove the script and style files before sending to production.

This script is intended only for browsers running on Mobile Devices, that lacks of JavaScript console.

## Screenshots
![](/images/screenshots/mobile/simple/vue-inspector-01.png)
![](/images/screenshots/mobile/simple/vue-inspector-02.png)
![](/images/screenshots/mobile/simple/vue-inspector-03.png)
![](/images/screenshots/mobile/simple/vue-inspector-04.png)
![](/images/screenshots/mobile/simple/vue-inspector-05.png)

## vue-router
![](/images/screenshots/mobile/router/vue-inspector-router-00.png)
![](/images/screenshots/mobile/router/vue-inspector-router-01.png)
![](/images/screenshots/mobile/router/vue-inspector-router-02.png)
![](/images/screenshots/mobile/router/vue-inspector-router-03.png)
![](/images/screenshots/mobile/router/vue-inspector-router-04.png)

## Demos
Download or clone this repo and open the folder **demos**, or open the following links using your mobile browser:
- [Simple demo](http://calirojas1.000webhostapp.com/vue-inspector/demos/simple)
- [vue-router demo](http://calirojas1.000webhostapp.com/vue-inspector/demos/vue-router)
- webpack demo (download the project)

## Compatibility
I have tested this tool only with Android phones and tablets. If you have information about the compatibility with iOS, or/and other mobile browsers, please let me know to update this list. I will appreciate any collaboration with compatibility testing. Currently tested/compatible with:

- Firefox for Android
- Google Chrome for Android

## Pending / In Progress
- Events logging
- Vuex support (state management) _(In progress)_
- Support for Nuxt _(In progress)_
- Add CDN _(the project needs at least 200 stars on GitHub)_
- ~~Component rewrite~~ _(Done)_
- ~~Support for vue-router~~ _(Done)_
- ~~Publish npm module~~ _(Done)_
- ~~Update screenshots to version 0.3.1~~ _(Done)_

## Changelog
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

[![HitCount](http://hits.dwyl.io/calirojas506/vue-inspector.svg)](http://hits.dwyl.io/calirojas506/vue-inspector)


Copyright (c) 2017, Cali Rojas