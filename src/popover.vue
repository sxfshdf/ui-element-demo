<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper"
         :class="{[`position-${position}`]:true}" v-if="visible">
      <slot name="content"></slot>
    </div>
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
      }
    },
    data(){
      return {
        visible: false
      }
    },
    methods:{
      positionContent(){
        let{contentWrapper, triggerWrapper, } = this.$refs
        // 将popover内容放到body最后，解决父元素有overflow时不显示的bug
        document.body.appendChild(contentWrapper)
        // 获取 trigger 位置信息
        let {height, width, left, top} = triggerWrapper.getBoundingClientRect()
        // 设置 popover 浮层位置
        if(this.position === 'top') {
          contentWrapper.style.top = top + window.scrollY + 'px'
          contentWrapper.style.left = left+ window.scrollX + 'px'
        }else if(this.position === 'bottom') {
          contentWrapper.style.top = top + height + window.scrollY + 'px'
          contentWrapper.style.left = left+ window.scrollX + 'px'
        }else if(this.position === 'left') {
          let {height: height2} = contentWrapper.getBoundingClientRect()
          contentWrapper.style.top = top + (height-height2)/2 + window.scrollY + 'px'
          contentWrapper.style.left = left + window.scrollX + 'px'
        }else if(this.position === 'right') {
          let {height: height2} = contentWrapper.getBoundingClientRect()
          contentWrapper.style.top = top + (height-height2)/2 + window.scrollY + 'px'
          contentWrapper.style.left = left + width + window.scrollX + 'px'
        }

      },
      clickDocument(e){
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {return}
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {return}
        this.close()
      },
      close(){
        this.visible = false
        document.removeEventListener('click', this.clickDocument)
      },
      onShowPopover(){
        this.visible = true
        this.$nextTick(()=>{
          this.positionContent()
          document.addEventListener('click', this.clickDocument)
        })
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
        top: 100%;
      }
      &::after {
        border-top: 6px solid #fff;
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
        bottom: 100%;
      }
      &::after {
        border-bottom: 6px solid #fff;
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
        bottom: 100%;
      }
      &::after {
        border-left: 6px solid #fff;
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
        bottom: 100%;
      }
      &::after {
        border-right: 6px solid #fff;
        bottom: calc(100% - 1px);
      }
    }
  }
</style>