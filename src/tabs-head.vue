<template>
  <div class="tabs-head" :class="headClass">
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
    data(){
      return {
        direction: ''
      }
    },
    mounted(){
      this.eventBus.$on('update:selected',(item, vm, direction)=>{
        this.direction = direction
        if(vm.disabled) return
        if(direction === 'vertical') {
          this.$refs.line.style.top = `${vm.$el.offsetTop}px`
        }else{
          let {width} = vm.$el.getBoundingClientRect()
          this.$refs.line.style.width = `${width}px`
          this.$refs.line.style.left = `${vm.$el.offsetLeft}px`
        }

      })
    },
    computed: {
      headClass(){
        return [this.direction]
      }
    }
  }
</script>

<style scoped lang="scss">
  $tab-height: 40px;
  $line-selected-color: #0080ff;
  $line-bg-color: #eee;

  .tabs-head {
    display: flex;
    justify-content: flex-start;
    position: relative;
    /*border: 1px solid green;*/
    &.horizontal {
      height: $tab-height;
      > .actions-wrapper {
        margin-left: auto;
      }
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
    }
    &.vertical{
      flex-direction: column;
      align-items: center;
      > .line {
        position: absolute;
        right: 0;
        height: $tab-height;
        width: 2px;
        background: $line-selected-color;
        z-index: 1;
        border-radius: 1px;
        transition: all 0.3s;
      }
      > .line-bg {
        position: absolute;
        right: 0;
        height: 100%;
        width: 2px;
        background: $line-bg-color;
      }
    }


  }
</style>