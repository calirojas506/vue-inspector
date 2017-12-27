/*
  vue-inspector v0.4.0
  Vue.js Inspector for Mobile Devices

  Released under MIT License
  Copyright (c) 2017 Cali Rojas
  https://github.com/calirojas506/vue-inspector
*/

/* eslint no-eval: 0 */
/* eslint no-undef: 0 */

Vue.component('vue-inspector', {
  name: 'vue-inspector',
  props: {
    isVisible: {
      type: Boolean,
      required: false,
      default: true
    },
    isMinimized: {
      type: Boolean,
      required: false,
      default: false
    },
    hideLines: {
      type: Boolean,
      required: false,
      default: false
    },
    hideVuex: {
      type: Boolean,
      required: false,
      default: false
    },
    hideComponents: {
      type: Boolean,
      required: false,
      default: false
    },
    hideRouter: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    'vue-inspector-details': {
      name: 'vue-inspector-details',
      props: {
        summary: {
          required: true
        },
        data: {
          default: () => {}
        },
        context: {
          required: false,
          default: null
        },
        open: {
          required: false,
          default: true,
          type: Boolean
        },
        hideLines: {
          required: false,
          type: Boolean,
          default: true
        }
      },
      methods: {
        realTypeOf (theObject) {
          return ({}).toString.call(theObject).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }
      },
      template: `
        <details :open="open" v-if="data">
          <summary :class="{'show-lines': !hideLines}">
            {{summary}}
            <span class="label label-info pull-right">
              {{realTypeOf(data)}}
            </span>
          </summary>
          <div class="details-content">
            <ul class="list-unstyled" v-for="(value, key) in data" v-if="data">
              <li v-if="typeof(value) == 'object'">
                <vue-inspector-details :summary="key" :data="value"
                class="details-children" :open="false" :hide-lines="hideLines"/>
              </li>
              <li v-else :class="{'show-lines': (typeof(value) === 'function' && context ? (typeof(value.call(context)) == 'object' ? false : !hideLines) : !hideLines)}">
                <template v-if="typeof(value) === 'function' && context">
                  <template v-if="typeof(value.call(context)) == 'object'">
                    <vue-inspector-details :data="value.call(context)" :summary="key"
                    :hide-lines="hideLines" :open="false" class="details-children"/>
                  </template>
                  <template v-else>
                    {{key}}<span>:</span>
                    <code>
                      {{context !== null ? JSON.stringify(value.call(context)) :
                        (JSON.stringify(value) || typeof(value))
                      }}
                    </code>
                  </template>
                </template>
                <template v-else-if="typeof(value) === 'function' && !context">
                  {{key}}
                </template>
                <template v-else>
                  {{key}}<span>:</span>
                  <code>
                    {{context !== null ? JSON.stringify(value.call(context)) :
                      (JSON.stringify(value) || typeof(value))
                    }}
                  </code>
                </template>
                <span v-if="!context" class="label label-info pull-right">
                    {{realTypeOf(value)}}
                </span>
              </li>
            </ul>
          </div>
        </details>
      `
    }
  },
  template: `
    <div :class="thisComponent.name">
      <div class="container-fluid" :class="{hidden: !isVisible}">
        <div class="vue-inspector__header row">
          <div class="col-xs-12">
            <div class="panel panel-primary" ref="panelRef">
              <div class="panel-heading" @click="togglePanels"
              :class="{'small': panel.minimized}">
                <img
                  src="data:image/gif;base64,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" align="left"
                :alt="thisComponent.name" class="cursor-pointer">
                <h3 class="panel-title cursor-pointer">
                  {{thisComponent.name}} <span class="small">v{{thisComponent.version}}</span>

                  <span class="pull-right console-indicator" v-show="panel.minimized">&#9660;</span>
                  <span class="pull-right console-indicator" v-show="!panel.minimized">&#9650;</span>
                </h3>
                <p class="cursor-pointer">
                  {{thisComponent.description}}
                  <span class="pull-right console-indicator blinking-animation" v-show="panel.minimized && newOutputCount"
                  @click="changeTab(2)">
                    &#9888;
                  </span>
                </p>

                <ul class="nav nav-tabs vue-inspector__tabs" v-show="!panel.minimized">
                  <li :class="{'active': panel.activeTab === 1}" v-if="!hideComponents">
                    <a href="#" @click.prevent.stop="changeTab(1)">Components</a>
                  </li>
                  <li :class="{'active': panel.activeTab === 3}" v-if="!hideVuex">
                    <a href="#" @click.prevent.stop="changeTab(3)">Vuex</a>
                  </li>
                  <li :class="{'active': panel.activeTab === 4}" v-if="!hideRouter">
                    <a href="#" @click.prevent.stop="changeTab(4)">Router</a>
                  </li>
                  <li class="pull-right vue-inspector__header-refresh"
                  v-show="panel.activeTab === 1" v-if="!hideComponents">
                    <a href="#" @click.prevent.stop="refresh">&olarr;</a>
                  </li>
                  <li class="pull-right vue-inspector__header-back" v-if="!hideComponents"
                  v-show="panel.activeTab === 1 && parentFilter !== rootInstance._uid">
                    <a href="#" @click.prevent.stop="displayComponent(activeComponent.$parent._uid)">&lt;</a>
                  </li>
                  <li class="pull-right vue-inspector__header-clear"
                  v-show="panel.activeTab === 2">
                    <a href="#" @click.prevent.stop="consoleClear">&#10005;</a>
                  </li>
                </ul>
              </div>
              <div class="panel-body panel-content smalls" v-show="!panel.minimized"
              :style="{'height': panel.height + 'px', 'min-height': panel.minHeight + 'px'}">
                <div class="alert alert-warning alert-dismissable" v-if="newOutputCount && panel.activeTab !== 2">
                  <a href="#" class="close" @click.prevent="resetNewOutputCount">&times;</a>
                  <p class="small" v-if="newOutputCount">
                    &#9888;
                    <span v-show="newOutputCount > maxOutoutMessages">
                      Are you sure everything is OK? You have more than
                    </span>
                    <a href="#" @click.prevent=" changeTab(2)" class="alert-link">{{newOutputCount >= maxOutoutMessages ? maxOutoutMessages : newOutputCount}}
                    message<span v-show="newOutputCount > 1">s</span></a>
                    in the JavaScript console.
                  </p>
                </div>
                <div v-show="panel.activeTab === 1 && panel.minimized == false" v-if="!hideComponents">
                  <details open>
                    <summary>&lt;{{
                        (
                          activeComponent.$parent == undefined ? 'root':
                              (
                                  activeComponent.$options.el ||
                                  activeComponent.$options._componentTag ||
                                  activeComponent.$options.name ||
                                  'anonymous'
                              )
                          )
                      }}&gt;
                      <a href="#" class="pull-right label label-success"
                      @click.prevent="displayComponent(activeComponent.$parent._uid)"
                      v-if="activeComponent.$parent">
                        &lt;{{
                          activeComponent.$parent.$options._componentTag ||
                          activeComponent.$parent.$options.name ||
                          (activeComponent.$parent._uid == rootInstance._uid ? 'root' : 'anonymous')
                        }}&gt;
                      </a>
                    </summary>

                    <vue-inspector-details summary="data" :data="activeComponent.$data" v-if="activeComponent.$data"
                    :hide-lines="hideLines"/>
                    <vue-inspector-details summary="computed" :hide-lines="hideLines"
                    :data="(activeComponent.$options ? activeComponent.$options.computed : activeComponent.options.computed)"
                    :context="activeComponent"/>

                    <vue-inspector-details summary="props" :data="activeComponent._props" :hide-lines="hideLines"/>

                    <template v-for="component in filteredComponents">
                      <details open v-if="component.$children">
                        <summary :class="{'show-lines': !hideLines}">
                          children
                          <span class="label label-info pull-right">
                            {{typeof(component.$children)}}
                          </span>
                        </summary>
                        <div class="details-content">
                          <ul class="list-unstyled">
                            <li v-for="children in component.$children" :key="children._uid"
                            v-if="children.$options._componentTag !== thisComponent.name" :class="{'show-lines': !hideLines}">
                              <a href="#" @click.prevent="displayComponent(children._uid)">
                                &lt;{{
                                  children.$options._componentTag || children.$options.el
                                  || children.$options.name || 'anonymous'
                                }}&gt;
                              </a>
                              <router-link class="label label-warning pull-right cursor-pointer"
                              v-if="children.$options._componentTag === 'router-link'" :to="children._props.to">to:
                                {{children._props.to.name || children._props.to.path || children._props.to || '?'}}
                              </router-link>
                            </li>
                          </ul>
                        </div>
                      </details>
                    </template>
                  </details>
                </div>

                <div v-show="panel.activeTab === 2 && panel.minimized === false">
                  <p class="text-muted">
                    <strong>{{thisComponent.name}}</strong> v{{thisComponent.version}}
                    <br>
                    {{thisComponent.description}}
                  </p>
                  <p class="text-muted"><strong>Last update:</strong> {{thisComponent.lastUpdate}}</p>
                  <p class="text-muted">
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
                      <span v-if="log.isHTML">
                        <span class="label label-danger">Syntax not supported yet. Raw output:</span>
                        <code v-text="log.message"></code>
                      </span>
                      <span v-else>{{log.message}}</span>
                    </li>
                  </ul>
                </div>
                <div v-show="panel.activeTab === 3 && panel.minimized === false" v-if="!hideVuex">
                  <p v-if="!rootInstance.$store" class="text-muted small">
                    Vuex store not detected
                  </p>
                  <div v-else>
                    <details open>
                      <summary>store</summary>
                      <vue-inspector-details :hide-lines="hideLines" summary="state" :data="rootInstance.$store.state"/>
                      <vue-inspector-details :hide-lines="hideLines" summary="getters" :data="rootInstance.$store.getters"/>
                    </details>
                  </div>
                </div>
                <div v-show="panel.activeTab === 4 && panel.minimized === false" v-if="!hideRouter">
                  <p v-if="!rootInstance.$router" class="text-muted small">
                    Router not detected
                  </p>
                  <div v-else>
                    <details open>
                      <summary>router</summary>
                      <ul class="list-unstyled">
                        <li :class="{'show-lines': !hideLines}">mode: <code>{{rootInstance.$router.mode}}</code></li>
                      </ul>
                      <vue-inspector-details :hide-lines="hideLines" :data="rootInstance.$router.options.routes"
                      v-if="rootInstance.$router.options" summary="routes" :open="false"/>
                      <details open>
                        <summary :class="{'show-lines': !hideLines}">current route</summary>
                        <ul class="list-unstyled">
                          <li :class="{'show-lines': !hideLines}">
                            path:
                            <code>{{JSON.stringify(rootInstance.$route.path) || typeof(rootInstance.$route.path)}}</code>
                            <span class="label label-info pull-right">{{typeof(rootInstance.$route.path)}}</span>
                          </li>
                          <li :class="{'show-lines': !hideLines}">
                            fullPath:
                            <code>{{JSON.stringify(rootInstance.$route.fullPath) || typeof(rootInstance.$route.fullPath)}}</code>
                            <span class="label label-info pull-right">{{typeof(rootInstance.$route.fullPath)}}</span>
                          </li>
                          <li :class="{'show-lines': !hideLines}">
                            meta:
                            <code>{{JSON.stringify(rootInstance.$route.meta) || typeof(rootInstance.$route.meta)}}</code>
                            <span class="label label-info pull-right">{{typeof(rootInstance.$route.meta)}}</span>
                          </li>
                          <li :class="{'show-lines': !hideLines}">
                            params:
                            <code>{{JSON.stringify(rootInstance.$route.params) || typeof(rootInstance.$route.params)}}</code>
                            <span class="label label-info pull-right">{{typeof(rootInstance.$route.params)}}</span>
                          </li>
                          <li :class="{'show-lines': !hideLines}">
                            query:
                            <code>{{JSON.stringify(rootInstance.$route.query) || typeof(rootInstance.$route.query) }}</code>
                            <span class="label label-info pull-right">{{typeof(rootInstance.$route.query)}}</span>
                          </li>
                          <li :class="{'show-lines': !hideLines}">
                            hash:
                            <code>{{JSON.stringify(rootInstance.$route.hash) || typeof(rootInstance.$route.hash)}}</code>
                            <span class="label label-info pull-right">{{typeof(rootInstance.$route.hash)}}</span>
                          </li>
                          <li :class="{'show-lines': !hideLines}">
                            name:
                            <code>{{JSON.stringify(rootInstance.$route.name) || typeof(rootInstance.$route.name)}}</code>
                            <span class="label label-info pull-right">{{typeof(rootInstance.$route.name)}}</span>
                          </li>
                        </ul>
                      </details>
                      <details open>
                        <summary :class="{'show-lines': !hideLines}">[navigate]</summary>
                        <ul class="list-unstyled">
                          <li :class="{'show-lines': !hideLines}" v-for="route in rootInstance.$router.options.routes">
                            <router-link :to="route.path" class="no-active-route">{{route.path}}</router-link>
                            <router-link :to="route.path" class="label label-warning pull-right">
                              &lt;{{route.component.name || 'anonymous'}}&gt;
                            </router-link>
                          </li>
                        </ul>
                      </details>
                    </details>
                  </div>
                </div>

                <div class="panel-sizes">
                  <hr>
                  <div class="pull-left" v-if="parentFilter !== rootInstance._uid && panel.activeTab === 1">
                    <div>
                      <button type="button" class="btn btn-md btn-empty text-muted"
                      @click.prevent.stop="displayComponent(activeComponent.$parent._uid)">
                        &lt;
                      </button>
                    </div>
                  </div>
                  <div class="pull-right text-right">
                    <div>
                      <button type="button" class="btn btn-md btn-empty text-muted"
                      @click="decreasePanelSize"
                      :disabled="panel.height <= panel.minHeight">&#8722;</button>
                      <button type="button" class="btn btn-md btn-empty text-muted"
                      @click="increasePanelSize"
                      :disabled="panel.height >= panel.maxHeight">&#43;</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel-footer" v-show="!panel.minimized">
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
                        <button class="btn btn-danger btn-md" type="button"
                        :class="{active: panel.activeTab == 2}"
                        @click="toggleJSConsole" v-if="!allComponentsHidden">
                          <span v-if="panel.activeTab == 2">&#8690;</span>
                          <span v-else :class="{'blinking-animation': !panel.minimized && newOutputCount}">&#8689;</span>
                        </button>
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
  data () {
    return {
      rootInstance: this.$root,
      panel: {
        height: 300,
        minHeight: 250,
        maxHeight: 600,
        step: 50,
        minimized: this.isMinimized,
        activeTab: 1
      },
      parentFilter: 0,
      filteredComponents: {},
      activeComponent: {},
      logs: [],
      newOutputCount: 0,
      maxOutoutMessages: 200,
      commandInput: '',
      thisComponent: {
        name: 'vue-inspector',
        description: 'Vue.js Inspector for Mobile Devices',
        version: '0.4.0',
        lastUpdate: 'December 22th, 2017',
        author: {
          name: 'Cali Rojas',
          email: 'calirojas@outlook.com',
          country: 'Costa Rica'
        }
      },
      allComponentsHidden: false
    }
  },
  computed: {
    getNewOutPutCountFormatted () {
      if (this.newOutputCount > 20) {
        return '20+'
      } else {
        return this.newOutputCount
      }
    }
  },
  methods: {
    toggleJSConsole () {
      if (this.panel.activeTab == 2) {
        this.changeTab(1)
      } else {
        this.changeTab(2)
      }
    },
    navigateTo (route) {
      this.$router.push(route)
    },
    realTypeOf (theObject) {
        return ({}).toString.call(theObject).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    },
    displayComponent (componentId) {
      this.filteredComponents = {}
      this.parentFilter = componentId
      this.loadComponent(this.rootInstance)
    },
    loadComponent (element) {
      if (element._uid === this.parentFilter) {
        this.filteredComponents[element._uid] = element
        this.activeComponent = element
      }

      if (element.$children) {
        for (let children of element.$children) {
          this.loadComponent(children)
        }
      }
    },
    togglePanels () {
      this.panel.minimized = !this.panel.minimized
      if (this.panel.minimized && this.panel.activeTab === 2) {
        this.newOutputCount = 0
      }
    },
    increasePanelSize () {
      this.panel.height += this.panel.step
    },
    decreasePanelSize () {
      this.panel.height -= this.panel.step
    },
    changeTab (tabId) {
      if (this.panel.activeTab === 2 && tabId !== this.panel.activeTab) {
        this.newOutputCount = 0
      }
      this.panel.activeTab = tabId
    },
    incrementOutputCounter () {
      if (this.panel.activeTab === 2) {
        if (this.panel.minimized) {
          this.newOutputCount++
        } else {
          this.newOutputCount = 0
        }
      } else {
        this.newOutputCount++
      }
    },
    resetNewOutputCount () {
      this.newOutputCount = 0
    },
    consoleLog (...message) {
      this.appendLog({
        message: message.join(' '),
        style: 'primary'
      })
    },
    consoleError (...message) {
      this.appendLog({
        message: message.join(' '),
        style: 'danger'
      })
    },
    consoleInfo (...message) {
      this.appendLog({
        message: message.join(' '),
        style: 'info'
      })
    },
    consoleWarn (...message) {
      this.appendLog({
        message: message.join(' '),
        style: 'warning'
      })
    },
    consoleClear () {
      this.newOutputCount = 0
      this.logs = []
    },
    appendLog (options) {
      let isHTML = false
      let msg = JSON.stringify(options.message)

      isHTML = (msg.indexOf('%c') !== -1 || msg.indexOf('%s') !== -1) || false

      this.logs.push({
        message: options.message,
        isHTML,
        style: options.style
      })
      this.incrementOutputCounter()
    },
    initConsole () {
      console.log = this.consoleLog
      console.error = this.consoleError
      console.warn = this.consoleWarn
      console.clear = this.consoleClear
      console.info = this.consoleInfo

      window.onerror = null
      let _this = this
      window.onerror = function (message, url, line, column, errObject) {
        _this.consoleError(message, url, line + ':' + column)
        _this.selectCommandInput()
      }
    },
    selectCommandInput () {
      let input = this.$refs.commandInput

      input.setSelectionRange(0, input.value.length)
    },
    resetForm () {
      this.commandInput = ''
      this.$refs.commandInput.focus()
    },
    execute () {
      if (this.commandInput.trim() === '') return false

      if (!this.commandInput.startsWith('console.')) {
        this.appendLog({
          message: (window.eval(this.commandInput) ? eval(this.commandInput) : 'undefined'),
          style: 'primary',
          isHTML: false
        })
      } else {
        window.eval(this.commandInput)
      }

      this.selectCommandInput()
    },
    refresh () {
      this.parentFilter = this.rootInstance._uid
      this.filteredComponents = {}
      this.loadComponent(this.rootInstance)
    }
  },
  created () {
    if (this.hideComponents && this.hideRouter && this.hideVuex) {
      this.allComponentsHidden = true
      this.panel.activeTab = 2
    } else if (this.hideComponents || this.hideRouter || this.hideVuex) {
      this.panel.activeTab = 2
    }
    this.refresh()
    this.initConsole()
  },
  mounted () {
    console.log(`You are using Vue ${Vue.version}`)
  },
  watch: {
    '$route' () {
      this.refresh()
    }
  }
})
