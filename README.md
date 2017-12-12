# vue-inspector
Vue.js Inspector for Mobile Devices.

![](/images/vue-inspector-1.jpg)
![](/images/vue-inspector-2.jpg)


## What is vue-inspector?
**vue-inspector** is a basic inspector for Vue.js, focused only in mobile devices. It could work in a desktop environment, but I do not recommend that; use Vue.js devtools instead.

With **vue-inspector** is possible to execute JavaScript code directly in your mobile browser and get error messages generated at run-time. Also, inspect the data and computed properties inside the components.

This is a (global) component created using Vue.js, so you need Vue.js in order to use it. Also, the tiny "UI" uses Bootstrap, but it's included in the CSS file. Don't worry, it's namespaced so won't affect your styles.

**vue-inspector** overrides some methods (log, error, warn, clear & info) part of the **console** object and uses **eval** to run the code entered by the user.

## How to use vue-inspector?
Simple. Add it to your page using a script tag, add the CSS file and, finally, place the &lt;vue-inspector/&gt; component inside your code.

```html
<!-- add vue-inspector -->
<script src="js/vue-inspector.js"></script>
```
The script should be added before creating the instance. Remember this is a global component. So that's the Vue.js way.

```html
<link rel="stylesheet" href="css/vue-inspector.css">
```
This file basically contains a copy of Bootstrap namespaced and some styles related to the UI.

```html
<div id="app">
  <!-- add the component to your view -->
  <vue-inspector
    :is-visible="true"
    :inspect-components="['component-one', 'my-component']"
    :is-expanded="true"/>
</div>
```
## Properties
The following properties are available:

|Property|Required|Default value|Description|
|--------|--------|-------------|-----------|
|is-visible|false|true|Displays|
|inspect-components|false|[]|Displays|
|is-expanded|false|true|Displays|

## Important
Use **vue-inspector** only in development mode. Do not forget to remove the script and style files before sending to production.

This script is intended only for browsers, running on Mobile Devices, that lacks of JavaScript console.

## Stay In Touch

- [Twitter](https://twitter.com/calirojas506)
- [Facebook](https://www.facebook.com/calirojas506)
- [LinkedIn](https://www.linkedin.com/in/cali-rojas-17403334/)
- [YouTube](https://youtube.com/calirojas506)


## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017, Cali Rojas