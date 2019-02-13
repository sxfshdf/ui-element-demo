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
        active: false
      }
    },
    created(){
      this.eventBus.$on('update:selected',(name)=>{
        this.active = this.name === name
      })
    },
    computed: {
      paneClass(){
        return {
          active: this.active
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabs-pane {
    padding: 1em;
    &.active {

    }
  }
</style>