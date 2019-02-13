<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="line-bg"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "g-tabs-head",
    inject: ['eventBus'],
    mounted(){
      this.eventBus.$on('update:selected',(item, vm)=>{
        if(vm.disabled) return
        let {width} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${vm.$el.offsetLeft}px`
      })
    }
  }
</script>

<style scoped lang="scss">
  $tab-height: 40px;
  $line-selected-color: #0080ff;
  $line-bg-color: #eee;

  .tabs-head {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: $tab-height;
    position: relative;
    > .line {
      position: absolute;
      bottom: 0;
      height: 2px;
      background: $line-selected-color;
      z-index: 1;
      border-radius: 1px;
      transition: all 0.3s;
    }
    > .line-bg {
      position: absolute;
      bottom: 0;
      height: 2px;
      width: 100%;
      background: $line-bg-color;
    }
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>