<template>
  <div class="tabs-item" @click="xxx" :class="itemClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-tabs-item",
    inject: ['eventBus'],
    data(){
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String, Number],
        required: true
      }
    },
    created() {
      this.eventBus.$on('update:selected',(name)=>{
        this.active = this.name === name
      })
    },
    computed: {
      itemClass(){
        return {
          active: this.active
        }
      }
    },
    methods: {
      xxx(){
        this.eventBus.$emit('update:selected',this.name)
      }
    }

  }
</script>

<style scoped lang="scss">
  .tabs-item {
    padding: 0 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    height: 100%;
    cursor: pointer;
    &.active {
      background: #999;
    }
  }
</style>