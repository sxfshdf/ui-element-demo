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
    mounted() {
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
        this.eventBus.$emit('update:selected',this.name, this)
      }
    }

  }
</script>

<style scoped lang="scss">
  $default-color: #333;
  $active-color: #0080ff;
  $hover-color: #399cff;
  *{transition: all 0.3s}
  .tabs-item {
    padding: 0 1em;
    margin-right: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    color: $default-color;
    &.active {
      color: $active-color;
      > .g-icon {
        fill: $active-color
      }
    }
    &:hover {
      color: $hover-color;
      > .g-icon{
        fill: $hover-color
      }
    }
    > .g-icon{
      margin-right: 0.2em;
      fill: $default-color
    }
  }
</style>