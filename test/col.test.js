

const expect = chai.expect
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('存在.', () => {
    expect(Col).to.be.ok

  })

  it('可以设置 span', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData:{
        span: 12
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-12')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('可以设置 offset', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData:{
        offset: 12
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('offset-12')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('可以设置 ipad', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData:{
        ipad: {
          span: 1,
          offset: 2
        }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-ipad-1')).to.eq(true)
    expect(element.classList.contains('offset-ipad-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('可以设置 narrowPc', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData:{
        narrowPc: {
          span: 1,
          offset: 2
        }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-narrow-pc-1')).to.eq(true)
    expect(element.classList.contains('offset-narrow-pc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('可以设置 pc', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData:{
        pc: {
          span: 1,
          offset: 2
        }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-pc-1')).to.eq(true)
    expect(element.classList.contains('offset-pc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('可以设置 widePc', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData:{
        widePc: {
          span: 1,
          offset: 2
        }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-wide-pc-1')).to.eq(true)
    expect(element.classList.contains('offset-wide-pc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
})