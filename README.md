# vue-inspector
Vue.js Inspector for Mobile Devices.

![](/logo/vue-inspector.gif)

## What is vue-inspector?
**vue-inspector** is a basic inspector for Vue.js, focused only in mobile devices. It could work in a desktop environment, but I do not recommend that; use Vue.js devtools instead.

With **vue-inspector** is possible to execute JavaScript code directly in your mobile browser and get error messages generated at run-time. Also, inspect the data and computed properties inside the components and the root instance.

![](/screenshots/vue-inspector-07.png)



## Features
- Works with Vue.js 2
- Reactive (of course)
- Instance data and computed properties inspection
- Integrated JavaScript (basic) console for code execution and messages/errors logging
- Navigation inside components and their children (with inspection)
- Responsive and simple UI

## How to use vue-inspector?
Simple. Add it to your page using a script tag, add the CSS file and, finally, place the &lt;vue-inspector/&gt; component inside your code.

```html
<!-- add vue-inspector -->
<script src="vue-inspector/dist/vue-inspector.min.js"></script>
```
The script should be added before creating the instance. Remember this is a global component. So that's the Vue.js way.

```html
<link rel="stylesheet" href="vue-inspector/dist/vue-inspector.min.css">
```
This file basically contains a copy of Bootstrap namespaced and some styles related to the UI.

```html
<div id="app">
  <!-- add the component to your view -->
  <vue-inspector
    :is-visible="true"
    :is-expanded="true"
    :is-minized="false"/>
</div>
```
Make sure **vue-inspector** is the last component added.

## Properties
The following properties are available:

|Property|Required|Default value|Description|
|--------|--------|-------------|-----------|
|is-visible|false|true|Start visible|
|is-expanded|false|false|Expand all the nodes automatically|
|is-minimized|false|true|Start minimized|

## Important
Use **vue-inspector** only in development mode. Do not forget to remove the script and style files before sending to production.

This script is intended only for browsers, running on Mobile Devices, that lacks of JavaScript console.

## Screenshots
![](/screenshots/vue-inspector-01.jpg)
![](/screenshots/vue-inspector-02.jpg)
![](/screenshots/vue-inspector-03.jpg)
![](/screenshots/vue-inspector-04.jpg)
![](/screenshots/vue-inspector-05.jpg)
![](/screenshots/vue-inspector-06.jpg)

## Demo
Download or clone this repo and open the **demo** folder,
or open [this URL](http://calirojas1.000webhostapp.com/vue-inspector/demo) with your mobile device.

## Compatibility
I have tested this tool only with Android phones and tablets, and it's compatible with Google Chrome. If you have information about the compatibility with iOS, or/and other mobile browsers, please let me know.

## Stay In Touch

- [Twitter](https://twitter.com/calirojas506)
- [Facebook](https://www.facebook.com/calirojas506)
- [LinkedIn](https://www.linkedin.com/in/cali-rojas-17403334/)
- [YouTube](https://youtube.com/calirojas506)


## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017, Cali Rojas