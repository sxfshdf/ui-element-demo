<template>
  <div class="tabs-pane" :class="paneClass" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-tabs-pane",
    inject: ['eventBus'],
    props: {
      name: {
        type: [String, Number],
        required: true
      }
    },
    data(){
      return {
        active: false,
        direction: ''
      }
    },
    created(){
      this.eventBus.$on('update:selected',(name, vm, direction)=>{
        this.active = this.name === name
        this.direction = direction
      })
    },
    computed: {
      paneClass(){
        return {
          active: this.active,
          [`${this.direction}`]: true
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabs-pane {

    &.horizontal {
      padding: 1em;
    }
    &.vertical {
      padding: 0.5em 2em;
    }
  }
</style>