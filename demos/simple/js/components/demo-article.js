/*
	Demo article component
	---------------------------------------------
	vue-inspector
	Vue.js Inspector for Mobile Devices

	Released under MIT License
	Copyright (c) 2017 Cali Rojas
	https://github.com/calirojas506/vue-inspector
*/

Vue.component('demo-article', {
	props: {
		initialCounter: {
			type: Number,
			required: false,
			default: 5
		},
		authorEmails: {
			type: Array,
			required: false,
			default: () => ['calirojas@example.com', 'calirojas@test.com'],
		}
	},
	template: `
		<div class="c-demo-article">
			<h1>
				Article
				<small>
					by
					{{fullName}}
				</small>
				<span class="pull-right" v-if="!editMode">
					<button type="button" class="btn btn-xs btn-warning"
					@click="toggleEdit">
						Edit
					</button>
				</span>
			</h1>
			<div class="panel panel-default" v-if="editMode">
				<div class="panel-heading">
					<h2 class="panel-title">Edit author</h2>
				</div>
				<div class="panel-body">
					<form @submit.prevent="toggleEdit">
						<div class="form-group">
							<label class="control-label">First name:</label>
							<input type="text" class="form-control" v-model="author.firstName">
						</div>
						<div class="form-group">
							<label class="control-label">Last name:</label>
							<input type="text" class="form-control" v-model="author.lastName">
						</div>
						<div class="form-group">
							<label class="control-label">Username:</label>
							<input type="text" class="form-control" v-model="author.username">
						</div>
						<div class="form-group">
							<label class="control-label">Country:</label>
							<input type="text" class="form-control" v-model="author.country">
						</div>
						<div class="text-right">
							<button type="submit" class="btn btn-primary">Finish</button>
						</div>
					</form>
				</div>
			</div>
			<hr>
			<div class="article" v-show="!editMode">
				<p>{{article.text}}</p>
				<hr>
				<p>
					<strong>Contact me: </strong>
					{{authorEmails.join(', ')}}
				</p>
			</div>
			<demo-visits-counter :counter-start="initialCounter"/>
			<demo-footer/>
		</div>
	`,
	components: {
		'demo-visits-counter': {
			props: {
				counterStart: {
					default: 1,
					required: false,
					type: Number
				}
			},
			template: `
				<div class="c-demo-visits-counter">
					<div class="panel panel-info">
						<div class="panel-heading">
							<h2 class="panel-title text-center">Visits</h2>
						</div>
						<div class="panel-body">
							<h1 class="text-center">{{currentCounter}}</h1>
							<button type="button" class="btn btn-block btn-danger"
							@click="incrementCounter">
								Increment
							</button>
						</div>
					</div>
				</div>
			`,
			data(){
				return {
					currentCounter: this.counterStart
				}
			},
			computed: {
				counterText(){
					return `The counter is ${this.currentCounter}`;
				}
			},
			methods: {
				incrementCounter(){
					console.log(`Counter was ${this.currentCounter}, now is ${++this.currentCounter}`)
				}
			}
		}
	},
	data(){
		return {
			author: {
				firstName: 'John',
				lastName: 'Smith',
				country: 'Costa Rica',
				username: '@johny506'
			},
			article: {
				title: 'Article',
				text: `
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus
					sit amet purus quis varius. Phasellus lobortis non eros eu porta. Nullam a erat
					suscipit, rutrum est id, eleifend mauris. Orci varius natoque penatibus et
					magnis dis parturient montes, nascetur ridiculus mus. Etiam id dignissim
					purus, vel tristique ligula. Cras elementum nulla faucibus, euismod quam
					nec, cursus neque. In posuere nisl vitae risus molestie efficitur. Nulla a
					turpis bibendum, gravida odio et, sodales tortor.
				`
			},
			editMode: false
		}
	},
	computed: {
		fullName(){
			return `${this.author.firstName} ${this.author.lastName}`;
		}
	},
	methods: {
		toggleEdit(){
			this.editMode = !this.editMode;
		}
	},
	mounted(){
		console.info('Demo article component. Mounted.');
		console.log('Did you know? You can execute JavaScript code using the text input.')
	}
});