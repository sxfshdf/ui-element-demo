# 快速上手

#### 引入 Button 组件
```js
import {Button} from ui-element-demo
import 'ui-element-demo/dist/index.css'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'g-button': Button
  }
})
```

#### 引入所有组件
<p style="font-size: 14px; color: #666">再 main.js 中写入一下代码。</p>
<hr style="margin-bottom: 1.5em;">

```js
import Vue from 'vue'
import App from './App.vue'

import {
  Button,
  Icon,
  ButtonGroup,
  Input,
  Row,
  Col,
  Layout,
  Content,
  Header,
  Sider,
  Footer,
  Tabs,
  TabsHead,
  TabsItem,
  TabsBody,
  TabsPane,
  Popover,
  Collapse,
  CollapseItem,
  ToastPlugin,
} from 'ui-element-demo'
import 'ui-element-demo/dist/index.css'

Vue.config.productionTip = false

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

Vue.use(ToastPlugin)



new Vue({
  render: h => h(App),
}).$mount('#app')
```