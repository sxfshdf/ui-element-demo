

const expect = chai.expect
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('存在.', () => {
    expect(Col).to.be.ok

  })

  // it('可以设置icon.', () => {
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData: {
  //       icon: 'settings'
  //     }
  //   }).$mount()
  //   const useElement = vm.$el.querySelector('use')
  //   expect(useElement.getAttribute('xlink:href')).to.equal('#icon-settings')
  //   vm.$destroy()
  // })

})