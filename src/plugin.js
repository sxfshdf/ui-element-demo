import Toast from './toast.vue'



let currentToast
export default {
  install (Vue, options) {
    Vue.prototype.$toast = function(msg, toastOptions){
      if(currentToast){
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        msg,
        propsData:toastOptions,
        onClose:()=>{
          currentToast = null
        }
      })
    }
  }
}


function createToast({Vue, msg, propsData, onClose}){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$slots.default = msg
  toast.$mount()
  this.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}