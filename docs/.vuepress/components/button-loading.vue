<template>
  <div>
    <g-button icon="loading" shape="circle" loading></g-button>
    <g-button icon="loading" loading >加载中</g-button>
    <g-button type="primary" icon="loading" loading>加载中</g-button>
    <g-button type="primary" shape="circle" icon="loading" loading></g-button>
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