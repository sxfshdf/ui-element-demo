const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs.vue'
import TabsHead from '../src/tabs-head.vue'
import TabsItem from '../src/tabs-item.vue'
import TabsBody from '../src/tabs-body.vue'
import TabsPane from '../src/tabs-pane.vue'
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接收 selected', (done)=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-tabs selected="sport">
        <g-tabs-head>
            <g-tabs-item name="sport">体育</g-tabs-item>
            <g-tabs-item name="women">美女</g-tabs-item>
            <g-tabs-item name="finance">财经</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
            <g-tabs-pane name="sport">
                体育相关内容
            </g-tabs-pane>
            <g-tabs-pane name="women">
                美女相关内容
            </g-tabs-pane>
            <g-tabs-pane name="finance">
                财经相关内容
            </g-tabs-pane>
        </g-tabs-body>
    </g-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(()=>{
      let element = vm.$el.querySelector('.tabs-item[data-name="sport"]')
      expect(element.classList.contains('active')).to.be.eq(true)
      done()
    })
  })

  it('接收 direction', (done)=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-tabs selected="sport" direction="vertical">
        <g-tabs-head>
            <g-tabs-item name="sport">体育</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
            <g-tabs-pane name="sport">
                体育相关内容
            </g-tabs-pane>
        </g-tabs-body>
    </g-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(()=>{
      let tabs = vm.$el.querySelector('.tabs')
      expect(tabs.classList.contains('vertical')).to.be.eq(true)
      let head = vm.$el.querySelector('.tabs-head')
      expect(head.classList.contains('vertical')).to.be.eq(true)
      let item = vm.$el.querySelector('.tabs-item')
      expect(item.classList.contains('vertical')).to.be.eq(true)
      let pane = vm.$el.querySelector('.tabs-pane')
      expect(pane.classList.contains('vertical')).to.be.eq(true)
      done()
    })
  })
})