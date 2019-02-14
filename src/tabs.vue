<template>
  <div class="tabs" :class="tabsClass">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "g-tabs",
    data(){
      return {
        eventBus: new Vue()
      }
    },
    provide(){
      return {
        eventBus: this.eventBus
      }
    },
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value){
          return ['horizontal','vertical'].indexOf(value) >= 0
        }
      }
    },
    mounted(){
      if(this.$children.length === 0){
        console && console.warn && console.warn('tabs的子组件应该是tabs-head和tabs-body，但你没有写子组件')
      }
      this.$children.forEach(child=>{
        if(child.$options.name === 'g-tabs-head'){
          child.$children.forEach(item=>{
            if(item.$options.name === 'g-tabs-item' && item.name === this.selected){
              this.eventBus.$emit('update:selected',this.selected, item, this.direction)
            }
          })
        }
      })
    },
    computed: {
      tabsClass(){
        return [this.direction]
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabs{
    &.vertical{
      display: flex;
    }
  }
</style>