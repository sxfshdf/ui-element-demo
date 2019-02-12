<template>
  <div class="wrapper" :class="toastClass">
    <div class="toast" ref="toast">
      <div class="msg">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default"></div>
      </div>
      <span class="line" ref="line"></span>
      <span v-if="closeButton" class="close" @click="clickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "g-totast",
    props: {
      autoClose: {
        type: Boolean,
        default: 3,
        validator(value) {
          return value === false || typeof value === 'number'
        }
      },

      closeButton: {
        type: Object,
        default(){
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validate(value){
          return ['top','bottom','middle'].indexOf(vlaue) >= 0
        }
      },
    },
    mounted(){
      this.updateStyles()
      this.autoCloseToast()
    },
    computed: {
      toastClass(){
        return {[`position-${this.position}`]: true}
      }
    },
    methods: {
      autoCloseToast(){
        if(this.autoClose){
          setTimeout(()=>{
            this.close()
          }, this.autoClose * 1000)
        }
      },
      updateStyles(){
        this.$nextTick(()=>{
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      close(){
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      clickClose(){
        this.close()
        if(this.closeButton && typeof this.closeButton.callback === 'function'){
          this.closeButton.callback()
        }

      }
    }
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-bg: rgba(0,0,0,0.75);
  $toast-min-height: 40px;
  $animate-duration: 300ms;
  @keyframes fade-in-bottom {
    0% {opacity: 0; transform: translateY(100%)}
    100% {opacity: 1; transform: translateY(0)}
  }
  @keyframes fade-in-top {
    0% {opacity: 0; transform: translateY(-100%)}
    100% {opacity: 1; transform: translateY(0)}
  }
  @keyframes fade-out-top {
    0% {opacity: 1; transform: translateY(0)}
    100% {opacity: 0; transform: translateY(-100%)}
  }
  @keyframes fade-in-middle {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  .wrapper {
    left: 50%;
    position: fixed;
    transform: translateX(-50%);
    &.position-top {
      top: 0;
      .toast {
        animation: fade-in-top $animate-duration;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
      .toast {
        animation: fade-in-middle $animate-duration;
      }
    }
    &.position-bottom {
      bottom: 0;
      .toast {
        animation: fade-in-bottom $animate-duration;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  .toast {
    font-size: $font-size;
    line-height: 1.6;
    background: $toast-bg;
    color: #fff;
    min-height: $toast-min-height;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 0 16px;
    .close {
      flex-shrink: 0;
      cursor: pointer;
    }
    .line {
      /*border: 1px solid red;*/
      margin: 0 16px 0 12px;
      border-left: 1px solid rgba(255,255,255,0.2);
      height: 100%;
    }
    .msg {
      padding: 8px 0;
    }
  }
</style>