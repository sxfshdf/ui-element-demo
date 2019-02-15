<template>
  <div class="popover" @click.stop="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
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
      onClick(){
        this.visible = !this.visible
        if(this.visible){
          this.$nextTick(()=>{
            // 将popover内容放到body最后，解决父元素有overflow时不显示的bug
            document.body.appendChild(this.$refs.contentWrapper)

            // 获取 trigger 位置信息
            let {height, width, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()

            // 设置 popover 浮层位置
            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            this.$refs.contentWrapper.style.left = left+ window.scrollX + 'px'
            let eventHandler = ()=>{
              this.visible = false
              document.removeEventListener('click', eventHandler)
            }
            document.addEventListener('click', eventHandler)
          })
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