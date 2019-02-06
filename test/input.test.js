

const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input.vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
    expect(Button).to.be.ok
  })
  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach( function () {
      vm.$destroy()
    })
    it('接收 value', ()=> {
      vm = new Constructor({
        propsData: {
          value: '张三'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('张三')
    })

    it('接收 disabled', ()=> {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })

    it('接收 readonly', ()=> {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })

    it('接收 error', ()=> {
      vm = new Constructor({
        propsData: {
          error: '输入有误'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-exclamation')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerHTML).to.equal('输入有误')
    })

    it('接收 tip', ()=> {
      vm = new Constructor({
        propsData: {
          tip: '请输入用户名'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-info')
      const tipMessage = vm.$el.querySelector('.tipMessage')
      expect(tipMessage.innerHTML).to.equal('请输入用户名')
    })

    it('接收 prefix', ()=> {
      vm = new Constructor({
        propsData: {
          prefix: true,
          icon: 'setting'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting')
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.className).to.equal('prefix')
    })

    it('接收 suffix', ()=> {
      vm = new Constructor({
        propsData: {
          suffix: true,
          icon: 'setting'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting')
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.className).to.equal('suffix')
    })

    it('接收placeholder', ()=> {
      vm = new Constructor({
        propsData: {
          placeholder: '请输入用户名'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.placeholder).to.equal('请输入用户名')
    })

    it('接收 addonbefore', ()=> {
      vm = new Constructor({
        propsData: {
          addonbefore: 'http://'
        }
      }).$mount()
      const spanElement = vm.$el.querySelector('.addonbefore > span')
      expect(spanElement.innerHTML).to.equal('http://')
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.className).to.equal('addonbefore')
    })

    it('接收 addonafter', ()=> {
      vm = new Constructor({
        propsData: {
          addonafter: 'http://'
        }
      }).$mount()
      const spanElement = vm.$el.querySelector('.addonafter > span')
      expect(spanElement.innerHTML).to.equal('http://')
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.className).to.equal('addonafter')
    })

    it('接收 addonafter addonbefore', ()=> {
      vm = new Constructor({
        propsData: {
          addonbefore: 'http://',
          addonafter: '.com'
        }
      }).$mount()
      const spanElementPre = vm.$el.querySelector('.addonbefore > span')
      expect(spanElementPre.innerHTML).to.equal('http://')
      const spanElementSuf = vm.$el.querySelector('.addonafter > span')
      expect(spanElementSuf.innerHTML).to.equal('.com')
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.className).to.equal('addonbefore addonafter')
    })

    it('接收 preIcon', ()=> {
      vm = new Constructor({
        propsData: {
          preicon: 'setting'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting')
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.className).to.equal('addonbefore')
    })

    it('接收 sufIcon', ()=> {
      vm = new Constructor({
        propsData: {
          suficon: 'setting'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting')
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.className).to.equal('addonafter')
    })

    it('接收 sufIcon preIcon', ()=> {
      vm = new Constructor({
        propsData: {
          preicon: 'left',
          suficon: 'setting'
        }
      }).$mount()
      const useElement = vm.$el.querySelectorAll('use')
      // console.log(useElement)
      expect(useElement[0].getAttribute('xlink:href')).to.equal('#icon-left')
      expect(useElement[1].getAttribute('xlink:href')).to.equal('#icon-setting')
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.className).to.equal('addonbefore addonafter')
    })

    it('接收 searchbutton', ()=> {
      vm = new Constructor({
        propsData: {
          searchbutton: true
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-search')
      const buttonElement = vm.$el.querySelector('button')
      let callback = sinon.fake()
      buttonElement.addEventListener('click',callback)
      buttonElement.click()
      expect(callback).to.have.been.called
    })

    it('接收 searchbutton', ()=> {
      vm = new Constructor({
        propsData: {
          searchbutton: 'search'
        }
      }).$mount()
      const divElement = vm.$el.querySelector('button > .content')
      expect(divElement.innerHTML).to.equal('search')
      const buttonElement = vm.$el.querySelector('button')
      let callback = sinon.fake()
      buttonElement.addEventListener('click',callback)
      buttonElement.click()
      expect(callback).to.have.been.called
    })
  })

  describe('事件', ()=> {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach( function () {
      vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件', () => {
      ['change','input','focus','blur'].forEach(eventName => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        let event = new Event(eventName)
        Object.defineProperty(
          event, 'target', {
            value: {value: 'hi'}, enumerable: true
          }
        )
        let inputElement = vm.$el.querySelector('input')
        vm.$on(eventName,callback)
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi')
      })
    })
  })
})


