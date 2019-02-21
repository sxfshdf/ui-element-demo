<template>
  <div class="popover" ref="popover">
    <transition name="slide-fade">
    <div ref="contentWrapper" class="content-wrapper"
         :class="{[`position-${position}`]:true}" v-if="visible">
      <slot name="content"></slot>
    </div>
    </transition>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>

  export default {
    name: "popover",
    props : {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click','hover'].indexOf(value) >= 0
        }
      }
    },
    data(){
      return {
        visible: false,
        timeout: ''
      }
    },
    mounted(){
      if(this.trigger === 'click'){
        this.$refs.popover.addEventListener('click',this.onClick)
      }
      if(this.trigger === 'hover') {
        this.$refs.popover.addEventListener('mouseenter', this.onShowPopover)
        this.$refs.popover.addEventListener('mouseleave', this.setTime)
      }
    },
    destroyed(){
      if(this.trigger === 'click'){
        this.$refs.popover && this.$refs.popover.addEventListener('click',this.onClick)
      }else{
        this.$refs.popover && this.$refs.popover.removeEventListener('mouseenter', this.onShowPopover)
        this.$refs.popover && this.$refs.popover.removeEventListener('mouseleave', this.setTime)
        this.$refs.contentWrapper && this.$refs.contentWrapper.removeEventListener('mouseenter',this.clearTimeout)
        this.$refs.contentWrapper && this.$refs.contentWrapper.removeEventListener('mouseleave',this.setTime)
      }
    },
    methods:{
      positionContent(){
        let{contentWrapper, triggerWrapper, } = this.$refs
        // 将popover内容放到body最后，解决父元素有overflow时不显示的bug
        document.body.appendChild(contentWrapper)
        let {height: height2} = contentWrapper.getBoundingClientRect()
        // 获取 trigger 位置信息
        let {height, width, left, top} = triggerWrapper.getBoundingClientRect()
        let positions = {
          top: {
            top: top + window.scrollY,
            left: left+ window.scrollX
          },
          bottom: {
            top: top + height + window.scrollY,
            left: left+ window.scrollX
          },
          left: {
            top: top + (height-height2)/2 + window.scrollY,
            left: left + window.scrollX
          },
          right: {
            top: top + (height-height2)/2 + window.scrollY,
            left: left + width + window.scrollX
          }
        }
        contentWrapper.style.top = positions[this.position].top + 'px'
        contentWrapper.style.left = positions[this.position].left + 'px'
      },
      clickDocument(event){
        if (this.$refs.popover &&
          (this.$refs.popover === event.target || this.$refs.popover.contains(event.target))) {return}
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === event.target || this.$refs.contentWrapper.contains(event.target))) {return}
        this.close()
      },
      setTime(){
        this.timeout= setTimeout(()=>{
          this.close()
        },200)
      },
      clearTimeout(){
        if(this.timeout){
          window.clearTimeout(this.timeout)
          this.timeout = ''
        }
      },
      close(){
        this.visible = false
        document.removeEventListener('click', this.clickDocument)
      },
      onShowPopover(){
        this.visible = true
        if(this.trigger === 'click'){
          this.$nextTick(()=>{
            this.positionContent()
            document.addEventListener('click', this.clickDocument)
          })
        }
        if(this.trigger === 'hover'){
          this.clearTimeout()
          this.$nextTick(()=>{
            this.positionContent()
            this.$refs.contentWrapper.addEventListener('mouseenter',this.clearTimeout)
            this.$refs.contentWrapper.addEventListener('mouseleave', this.setTime)
          })
        }

      },
      onClick(event){
        if(this.$refs.triggerWrapper.contains(event.target)){
          if(this.visible){
            this.close()
          }else{
            this.onShowPopover()
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $popover-border: #eee;
  $font-color: #333;

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    opacity: 0;
  }
  .popover {
    display: inline-block;
    vertical-align: top;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid $popover-border;
    padding: 0.5em 1em;
    border-radius: 4px;
    word-break: break-all;
    max-width: 20em;
    background: #fff;
    color: $font-color;
    z-index: 100;
    filter: drop-shadow(0 0px 4px rgba(0,0,0,0.15));
    &::after, &::before {
      content: '';
      display: block;
      border: 6px solid transparent;
      position: absolute;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -8px;
      &::after, &::before {
        left: 10px;
      }
      &::before {
        border-top: 6px solid $popover-border;
        border-bottom: none;
        top: 100%;
      }
      &::after {
        border-top: 6px solid #fff;
        border-bottom: none;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom {
      margin-top: 8px;
      &::after, &::before {
        left: 10px;
      }
      &::before {
        border-bottom: 6px solid $popover-border;
        border-top: none;
        bottom: 100%;
      }
      &::after {
        border-bottom: 6px solid #fff;
        border-top: none;
        bottom: calc(100% - 1px);
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -8px;
      &::after, &::before {
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        border-left: 6px solid $popover-border;
        border-right: none;
        bottom: 100%;
      }
      &::after {
        border-left: 6px solid #fff;
        border-right: none;
        bottom: calc(100% - 1px);
      }
    }
    &.position-right {
      margin-left: 8px;
      &::after, &::before {
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        border-right: 6px solid $popover-border;
        border-left: none;
        bottom: 100%;
      }
      &::after {
        border-right: 6px solid #fff;
        border-left: none;
        bottom: calc(100% - 1px);
      }
    }
  }
</style>