const MainMenu = {
	template: `
		<div class="c-menu">
			<ul class="nav nav-pills nav-justified">
				<li v-for="view in views" :class="{active: $route.path == view.path}">
					<router-link :to="view.path">{{view.text}}</router-link>
				</li>
			</ul>
		</div>
	`,
	data(){
		return {
			views: [
				{path: '/', text: 'Start'},
				{path: '/second', text: 'Second'},
				{path: '/third', text: 'Third'}
			]
		}
	}
};