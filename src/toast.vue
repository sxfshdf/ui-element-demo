<template>
  <div class="toast" ref="wrapper" :class="toastClass">
    <div class="msg">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default"></div>
    </div>
    <span class="line" ref="line"></span>
    <span v-if="closeButton" class="close" @click="clickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
  export default {
    name: "g-totast",
    props: {
      autoClose: {
        type: Boolean,
        default: false
      },
      autoCloseDelay: {
        type: Number,
        default: 5
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
      }
    },
    mounted(){
      this.updateStyles()
      this.autoCloseToast()
    },
    computed: {
      toastClass(){
        return [`position-${this.position}`]
      }
    },
    methods: {
      autoCloseToast(){
        if(this.autoClose){
          setTimeout(()=>{
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      updateStyles(){
        this.$nextTick(()=>{
          this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
      },
      close(){
        this.$el.remove()
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
  .toast {
    font-size: $font-size;
    line-height: 1.6;
    background: $toast-bg;
    color: #fff;
    min-height: $toast-min-height;
    position: fixed;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 0 16px;
    &.position-top {
      top: 0;
      transform: translateX(-50%);
    }
    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &.position-bottom {
      bottom: 0;
      transform: translateX(-50%);
    }
    .close {
      flex-shrink: 0;
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