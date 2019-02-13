<template>
  <div class="tabs-item" @click="changeTab" :class="itemClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-tabs-item",
    inject: ['eventBus'],
    data(){
      return {
        active: false,
        direction: ''
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
      this.eventBus.$on('update:selected',(name,vm,direction)=>{
        this.active = this.name === name
        this.direction = direction
      })
    },
    computed: {
      itemClass(){
        return {
          active: this.active,
          disabled: this.disabled,
          [`${this.direction}`]: true
        }
      }
    },
    methods: {
      changeTab(){
        if(this.disabled) return
        this.eventBus.$emit('update:selected',this.name, this, this.direction)
      }
    }

  }
</script>

<style scoped lang="scss">
  $default-color: #333;
  $active-color: #0080ff;
  $hover-color: #399cff;
  $disabled-color: rgba(0,0,0,0.25);
  $tab-height: 40px;
  *{transition: all 0.3s}
  .tabs-item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: $default-color;
    /*border: 1px solid red;*/
    &.horizontal {
      padding: 0 1em;
      margin-right: 1em;
      height: 100%;
    }
    &.vertical {
      height: $tab-height;
      padding: 0 2em;
      margin-bottom: 1em;
    }
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
    &.disabled {
      color: $disabled-color;
      cursor: not-allowed;
      > .g-icon {
        fill: $disabled-color
      }
    }
  }
</style>