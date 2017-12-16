/*
	vue-inspector v0.2 beta
	Vue.js Inspector for Mobile Devices

	Released under MIT License
	Copyright (c) 2017 Cali Rojas
	https://github.com/calirojas506/vue-inspector
*/

Vue.component('vue-inspector', {
	name: 'vue-inspector',
	props: {
		isVisible: {
			required: false,
			default: true,
			type: Boolean
		},
		isExpanded: {
			type: Boolean,
			default: false,
			required: false
		},
		isMinimized: {
			required: false,
			type: Boolean,
			default: false
		}
	},
	components: {
		'vue-inspector-empty': {
			template: `
				<li class="text-muted">
					<slot>
						<span class="label label-info">Empty object</span>
					</slot>
				</li>
			`
		}
	},
	template: `
		<div class="vue-inspector">
			<div class="container-fluid" :class="{hidden: !isVisible}">
				<div class="vue-inspector__header row">
					<div class="col-xs-12">
						<div class="panel panel-primary" ref="panelRef">
							<div class="panel-heading" @click="togglePanels"
							:class="{'small': minimized}">
								<img
									src="data:image/gif;base64,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" align="left"
								alt="Vue.js">
								<h3 class="panel-title">
									{{componentName}} <span class="small">v{{componentVersion}}</span>
									<span class="pull-right" v-show="minimized">&#9660;</span>
									<span class="pull-right" v-show="!minimized">&#9650;</span>
								</h3>
								<p>
									{{componentDescription}}
									<span class="badge counter small pull-right" v-show="newOutputCount && minimized">
										<small>{{getNewOutPutCountFormatted}}</small>
									</span>
								</p>
								<ul class="nav nav-tabs vue-inspector__tabs" v-show="!minimized">
									<li :class="{'active': activeTab === 1}">
										<a href="#" @click.prevent.stop="changeTab(1)">Components</a>
									</li>
									<li :class="{'active': activeTab === 2}">
										<a href="#" @click.prevent.stop="changeTab(2)">
											Console
											<span class="badge counter" v-show="newOutputCount && activeTab !== 2">{{getNewOutPutCountFormatted}}</span>
										</a>
									</li>
									<li class="pull-right vue-inspector__header-refresh"
									v-show="activeTab === 1">
										<a href="#" @click.prevent.stop="refreshComponents">&olarr;</a>
									</li>
									<li class="pull-right vue-inspector__header-back"
									v-show="activeTab === 1 && parentFilter !== 0">
										<a href="#" @click.prevent.stop="displayComponent(theComponents[parentFilter].parent)">&lt;</a>
									</li>
									<li class="pull-right vue-inspector__header-clear"
									v-show="activeTab === 2">
										<a href="#" @click.prevent.stop="consoleClear">&#10005;</a>
									</li>
								</ul>
							</div>
							<div class="panel-body panel-content smalls" v-show="!minimized"
							:style="{'height': panelHeight + 'px', 'min-height': panelHeight + 'px'}">
								<div v-show="activeTab === 1 && minimized == false">
									<details :open="isExpanded" v-show="parentFilter === 0">
										<summary>
											&lt;root&gt;
											<div class="pull-right text-muted small" @click.prevent.stop="">
												{{instanceElement}}
											</div>
										</summary>
										<details :open="isExpanded">
											<summary>data</summary>
											<ul class="list-unstyled">
												<vue-inspector-empty v-if="!isObject(instanceData)" class="text-muted"/>
												<li v-for="(value, key) in instanceData">
													{{key}}: <code>{{value}}</code>
												</li>
											</ul>
										</details>
										<details :open="isExpanded">
											<summary>computed</summary>
											<ul class="list-unstyled">
												<vue-inspector-empty v-if="!isObject(instanceComputed)" class="text-muted"/>
												<li v-for="(computedValue, computedKey) in instanceComputed">
													{{computedKey}}: <code>{{computedValue.call($root)}}</code>
												</li>
											</ul>
										</details>
									</details>
									<details v-for="component in filterByParent(parentFilter)" :key="component.id" :open="isExpanded">
										<summary>
											&lt;{{component.tag || component.name}}&gt;
											<div class="pull-right text-muted small cursor-pointer"
											:class="{'cursor-pointer': parentFilter !== 0}"
											@click.prevent.stop="displayComponent(parentFilter === 0 ? 0 : theComponents[parentFilter].parent)">
												&nbsp;&lt;{{parentFilter === 0 ? 'root' : (theComponents[component.parent].tag || theComponents[component.parent].name)}}&gt;
											</div>
											<span class="pull-right small label label-warning cursor-pointer" v-if="component.route && !component.isRouterLink"
											@click.prevent.stop="displayComponent(parentFilter === 0 ? 0 : theComponents[parentFilter].parent)">
												{{component.path}}
											</span>
											<span class="pull-right small label label-warning cursor-pointer" v-if="component.isRouterLink"
											@click.prevent.stop="navigateToRoute(component.to)">
												to: {{component.to.path || component.to.name || component.to}}
											</span>
										</summary>
										<details :open="isExpanded" v-if="!component.isRouterLink">
											<summary>data</summary>
											<ul class="list-unstyled">
												<vue-inspector-empty v-if="!isObject(component.data)" class="text-muted"/>
												<li v-for="(dataValue, dataKey) in component.data" :key="dataKey">
													{{dataKey}}: <code>{{dataValue}}</code>
												</li>
											</ul>
										</details>
										<details :open="isExpanded" v-if="!component.isRouterLink && isObject(component.route)">
											<summary>route</summary>
											<ul class="list-unstyled">
												<vue-inspector-empty v-if="!isObject(component.route)" class="text-muted"/>
												<template v-else>
													<li>path: <code>{{component.route.path}}</code></li>
													<li>fullPath: <code>{{component.route.fullPath}}</code></li>
													<li>meta: <code>{{component.route.meta}}</code></li>
													<li>params: <code>{{component.route.params}}</code></li>
													<li>query: <code>{{component.route.query || '{}' }}</code></li>
													<li>hash: <code>{{component.route.hash || 'undefined'}}</code></li>
													<li>name: <code>{{component.route.name || 'undefined'}}</code></li>
												</template>
											</ul>
										</details>
										<details :open="isExpanded" v-if="!component.isRouterLink">
											<summary>computed</summary>
											<ul class="list-unstyled">
											<vue-inspector-empty v-if="!isObject(component.computed)" class="text-muted"/>
												<li v-for="(computedValue, computedKey) in component.computed">
													{{computedKey}}: <code>{{computedValue.call(component.data)}}</code>
												</li>
											</ul>
										</details>
										<details :open="isExpanded">
											<summary>props</summary>
											<ul class="list-unstyled">
												<vue-inspector-empty v-if="!isObject(component.props)" class="text-muted"/>
												<li v-for="(propsValue, propsKey) in component.props">
													{{propsKey}}: <code>{{propsValue}}</code>
												</li>
											</ul>
										</details>
										<details :open="isExpanded" v-if="!component.isRouterLink">
											<summary>childrens</summary>
											<ul class="list-unstyled">
												<vue-inspector-empty v-if="!isObject(filterByParent(component.id))" class="text-muted"/>
												<li v-for="component in filterByParent(component.id)">
													<a href="#" @click.prevent="displayComponent(component.parent)">
														&lt;{{component.tag}}&gt;
														<a href="#" v-if="component.isRouterLink"
														@click.prevent.stop="navigateToRoute(component.to)"
														class="pull-right small label label-warning">
															to: {{component.to.path || component.to.name || component.to}}
														</a>
													</a>
												</li>
											</ul>
										</details>
									</details>
								</div>
								<div v-show="activeTab === 2 && minimized === false">
									<p class="text-muted">
										<strong>{{componentName}}</strong>
										v{{componentVersion}}
										<br>
										{{componentDescription}}
									</p>
									<p><strong>Last update:</strong> {{componentLastUpdate}}</p>
									<p>
										<a href="http://opensource.org/licenses/MIT" target="_blank">MIT License</a>
										<br>
										Copyright &copy; 2017,
										<a href="https://github.com/calirojas506/vue-inspector" target="_blank">Cali Rojas</a>
										<span class="small pull-right">&hearts; Costa Rica</span>
									</p>
									<hr v-show="logs.length">
									<ul class="list-unstyled">
										<li v-for="log in logs" :class="{'text-muted': log.message == 'undefined'}">
											<span :class="'text-' + log.style">&#9679;</span>
											{{log.message}}
										</li>
									</ul>
								</div>
								<div class="panel-sizes">
									<hr>
									<div class="pull-left" v-if="parentFilter !== 0 && activeTab === 1">
										<div>
											<button type="button" class="btn btn-md btn-empty text-muted"
											@click.prevent.stop="displayComponent(theComponents[parentFilter].parent)">
												&lt;
											</button>
										</div>
									</div>
									<div class="pull-right text-right">
										<div>
											<button type="button" class="btn btn-md btn-empty text-muted"
											@click="decreasePanelSize"
											:disabled="panelHeight <= panelMinHeight">&#8722;</button>
											<button type="button" class="btn btn-md btn-empty text-muted"
											@click="increasePanelSize"
											:disabled="panelHeight >= panelMaxHeight">&#43;</button>
										</div>
									</div>
								</div>
							</div>
							<div class="panel-footer" v-show="!minimized">
								<form @submit.prevent="execute" @reset.prevent="resetForm">
									<div class="form-group">
										<div class="input-group">
											<span class="input-group-btn">
												<button class="btn btn-danger btn-md" type="reset">&times;</button>
											</span>
											<input type="text" class="form-control input-md"
											placeholder="code here" required
											autocapitalize="none" v-model="commandInput" ref="commandInput">
											<span class="input-group-btn">
												<button class="btn btn-primary btn-md" type="submit">&check;</button>
											</span>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
	data(){
		return {
			componentName: 'vue-inspector',
			componentDescription: 'Vue.js Inspector for Mobile Devices',
			componentVersion: '0.2 beta',
			componentLastUpdate: 'December 16th, 2017',
			commandInput: '',
			logs: [],
			instanceData: this.$root.$data,
			instanceComputed: this.$root.$options.computed,
			activeTab: 1,
			newOutputCount: 0,
			theComponents: {},
			parentFilter: 0,
			instanceElement: this.$root.$options.el,
			minimized: this.isMinimized,
			panelHeight: 300,
			panelMinHeight: 250,
			panelMaxHeight: 600,
			panelStep: 50
		}
	},
	mounted(){
		console.log(`You are using Vue.js ${Vue.version}`);
	},
	computed: {
		getNewOutPutCountFormatted(){
			if(this.newOutputCount > 9){
				return '9+';
			}else{
				return this.newOutputCount;
			}
		}
	},
	methods: {
		navigateToRoute(route){
			this.$router.push(route);
			this.refreshComponents();
		},
		isObject(theObject){
			return (theObject === undefined ? false : Object.keys(theObject).length);
		},
		changeTab(tabId){
			if(this.activeTab === 2 && tabId !== this.activeTab){
				this.newOutputCount = 0;
			}
			this.activeTab = tabId;
		},
		getComputedProperties(componentName, parentName){
			let component = this.$root.$options.components[componentName];

			if(component){
				return component.options.computed;
			}else{
				return {};
			}
		},
		displayComponent(componentId){
			this.parentFilter = componentId;
		},
		refreshComponents(){
			this.parentFilter = 0;
			this.theComponents = {};
			this.loadComponentsData();
		},
		filterByParent(parentId){
			let result = {};

			for(let comp in this.theComponents){
				if(this.theComponents[comp].parent === parentId){
					result[comp] = this.theComponents[comp];
				}
			}

			return result;
		},
		loadComponentsData(componentsList){
			let components = componentsList || this.$root.$children;
			let result = this.theComponents;

			for(let component of components){
				if(component.$options._componentTag !== this.componentName){
					let componentId = component._uid;
					let componentOptions = component.$options;

					result[componentId] = {};
					result[componentId].id = component._uid;
					result[componentId].data = component._data;
					result[componentId].isRouterLink = componentOptions._componentTag === 'router-link';
					result[componentId].to =  result[componentId].isRouterLink ? component.to : '';

					result[componentId].tag = componentOptions._componentTag;
					result[componentId].name = componentOptions.name || 'anonymous';
					result[componentId].route = component.$route;
					result[componentId].path = result[componentId].route ? component.$route.path : '';
					result[componentId].props = {};
					result[componentId].parent = component.$parent._uid;

					let props = component._props;
					if(props){
						for(let prop in props){
							let propValue = component[prop] === undefined ? 'undefined' : component[prop];

							result[componentId].props[prop] = propValue;
						}
					}

					result[componentId].computed = {};

					let optionsData = component.$options || component.options;
					for(let computed in optionsData.computed){
						result[componentId].computed[computed] = optionsData.computed[computed];
					}

					if(component.$children.length > 0){
						this.loadComponentsData(component.$children);
					}
				}
			}
		},
		getRouterPath(value){
			alert(value)

			if(value){
				if(value.to){
					if(value.to.path){
						return value.to.path;
					}else{
						return value.to;
					}
				}else{
					return value + ' esto';
				}
			}else{
				return '';
			}
		},
		togglePanels(){
			this.minimized = !this.minimized;
			if(this.minimized && this.activeTab === 2){
				this.newOutputCount = 0;
			}
		},
		increasePanelSize(){
			this.panelHeight += this.panelStep;
		},
		decreasePanelSize(){
			this.panelHeight -= this.panelStep;
		},
		execute(){
			if(this.commandInput.trim() == '') return false;

			if(!this.commandInput.startsWith('console.')){
				this.logs.push({
					message: (window.eval(this.commandInput) ? eval(this.commandInput) : 'undefined'),
					style: 'primary'
				});
				this.incrementOutputCounter();
			}else{
				window.eval(this.commandInput);
			}

			this.selectCommandInput();
		},
		incrementOutputCounter(){
			if(this.activeTab === 2){
				if(this.minimized){
					this.newOutputCount++;
				}else{
					this.newOutputCount = 0;
				}
			}else{
				this.newOutputCount++;
			}
		},
		consoleLog(...message){
			this.incrementOutputCounter();
			this.logs.push({
				message: message.join(' '),
				style: 'primary'
			});
		},
		consoleError(...message){
			this.incrementOutputCounter();
			this.logs.push({
				message: message.join(' '),
				style: 'danger'
			});
		},
		consoleInfo(...message){
			this.incrementOutputCounter();
			this.logs.push({
				message: message.join(' '),
				style: 'info'
			});
		},
		consoleWarn(...message){
			this.incrementOutputCounter();
			this.logs.push({
				message: message.join(' '),
				style: 'warning'
			});
		},
		consoleClear(){
			this.newOutputCount = 0;
			this.logs = [];
		},
		init(){
			console.log = this.consoleLog;
			console.error = this.consoleError;
			console.warn = this.consoleWarn;
			console.clear = this.consoleClear;
			console.info = this.consoleInfo;

			window.onerror = null;
			let _this = this;
			window.onerror = function(message, url, line, column, errObject){
				_this.consoleError(message, url, line + ':' + column);
				_this.selectCommandInput();
			}
		},
		resetForm(){
			this.commandInput = '';
			this.$refs.commandInput.focus();
		},
		selectCommandInput(){
			let input = this.$refs.commandInput;

			input.setSelectionRange(0, input.value.length);
		}
	},
	created(){
		this.loadComponentsData();
		this.init();
	},
	watch: {
		'$route'(){
			this.refreshComponents();
		}
	}
});