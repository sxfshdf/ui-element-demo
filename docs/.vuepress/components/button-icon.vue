<template>
  <div>
    <g-button icon="edit">编辑</g-button>
    <g-button icon="search" ></g-button>
    <g-button type="primary" icon="edit">编辑</g-button>
    <g-button type="primary" icon="search" ></g-button>
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