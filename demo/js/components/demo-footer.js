/*
	Demo footer component
	---------------------------------------------
	vue-inspector
	Vue.js Inspector for Mobile Devices

	Released under MIT License
	Copyright (c) 2017 Cali Rojas
	https://github.com/calirojas506/vue-inspector
*/

Vue.component('demo-footer', {
	template: `
		<div class="c-demo-footer">
			<h4 class="text-center">Stay in Touch</h4>
			<ul class="list-group">
				<li v-for="link in links" class="list-group-item">
					<a :href="link.url" target="_blank">{{link.text}}</a>
				</li>
			</ul>
			<p class="text-center">Copyright &copy; 2017</p>
		</div>
	`,
	data(){
		return {
			links: [
				{text: 'GitHub', url: 'https://github.com/calirojas506/'},
				{text: 'LinkedIn', url: 'https://www.linkedin.com/in/cali-rojas-17403334'},
				{text: 'YouTube', url: 'https://www.youtube.com/calirojas506'},
				{text: 'Twitter', url: 'https://twitter.com/calirojas506'},
				{text: 'Facebook', url: 'https://www.facebook.com/calirojas506/'},
			]
		}
	}
});