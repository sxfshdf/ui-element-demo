<template>
  <div>
    <g-button disabled>默认按钮</g-button>
    <g-button shape="round" disabled>默认按钮</g-button>
    <g-button shape="circle" icon="setting" disabled></g-button>
  </div>
</template>

<script>

  import Button from '../../../src/button'

  export default {
    components: {
      'g-button': Button,
    }
  }
</script>

<style scoped>
  .g-button {
    margin-right: 0.5em;
    margin-bottom: 1em
  }
</style>