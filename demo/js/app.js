/*
	Demo App
	---------------------------------------------
	vue-inspector
	Vue.js Inspector for Mobile Devices

	Released under MIT License
	Copyright (c) 2017 Cali Rojas
	https://github.com/calirojas506/vue-inspector
*/

var app = new Vue({
	el: '#app',
	data: {
		componentAuthor: {
			firstName: 'Cali',
			lastName: 'Rojas',
			country: 'Costa Rica'
		},
		isThisFree: true,
		isOpenSource: true
	},
	computed: {
		fullName(){
			return `${this.componentAuthor.firstName} ${this.componentAuthor.lastName}`;
		},
		componentInfo(){
			return `Component created by ${this.fullName} from ${this.componentAuthor.country}`;
		}
	}
});