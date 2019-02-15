<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "popover",
    data(){
      return {
        visible: false
      }
    },
    methods:{
      positionContent(){
        // 将popover内容放到body最后，解决父元素有overflow时不显示的bug
        document.body.appendChild(this.$refs.contentWrapper)
        // 获取 trigger 位置信息
        let {height, width, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
        // 设置 popover 浮层位置
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
        this.$refs.contentWrapper.style.left = left+ window.scrollX + 'px'
      },
      clickDocument(e){
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {return}
        this.close()
        console.log('关闭')
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
  .popover {
    display: inline-block;
    vertical-align: top;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid red;
    transform: translateY(-100%)
  }
</style>