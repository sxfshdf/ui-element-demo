<template>
  <div class="g-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-layout",
    data() {
      return {
        layoutClass: {
          'has-sider': false
        }
      }
    },
    mounted() {
      this.$children.forEach( vm => {
        if(vm.$options.name === 'g-sider') {
          this.layoutClass['has-sider'] = true
        }
      })
    }
  }
</script>

<style scoped lang="scss">
  .g-layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.has-sider {
      flex-direction: row;
    }
  }
</style>