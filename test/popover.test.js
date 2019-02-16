

const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })

  it('可以设置 position', (done)=>{
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML=`
      <g-popover position="bottom" ref="a">
            <template slot="content">
                <div>我是 Popover <a href="http://qq.com">QQ</a></div>
            </template>
            <button>点击</button>
        </g-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(()=>{
      let {contentWrapper} = vm.$refs.a.$refs
      expect(contentWrapper.classList.contains('position-bottom')).to.be.true
      done()
    })
  })

  it('可以设置 trigger', (done)=>{
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML=`
      <g-popover trigger="hover" ref="a">
            <template slot="content">
                <div>我是 Popover <a href="http://qq.com">QQ</a></div>
            </template>
            <button>点击</button>
        </g-popover>
    `
    const vm = new Vue({
      el: div
    })
    let event = new Event('mouseenter')
    vm.$el.dispatchEvent(event)
    vm.$nextTick(()=>{
      const {contentWrapper} = vm.$refs.a.$refs
      
    })
  })
})