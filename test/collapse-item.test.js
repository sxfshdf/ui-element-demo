

const expect = chai.expect
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'
import Icon from '../src/icon'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('CollapseItem', () => {
  it('存在.', () => {
    expect(CollapseItem).to.be.ok
  })

  it('接受 name', ()=>{
    const Constructor = Vue.extend(CollapseItem)
    const vm = new Constructor({
      propsData: {
        name: '22'
      }
    }).$mount()
    let element = vm.$el.querySelector('.title')
    expect(element.getAttribute('data-name')).to.be.eq('22')
  })

  it('接受 title', ()=>{
    const Constructor = Vue.extend(CollapseItem)
    const vm = new Constructor({
      propsData: {
        title: '标题1'
      }
    }).$mount()
    let element = vm.$el.querySelector('.title')
    expect(element.innerText.trim()).to.be.eq('标题1')
  })

  it('接受 arrow', ()=>{
    const Constructor = Vue.extend(CollapseItem)
    const vm = new Constructor({
      propsData: {
        title: '标题1',
        arrow: false
      }
    }).$mount()
    let element = vm.$el.querySelector('.g-icon')
    expect(element).to.not.exist
  })
})