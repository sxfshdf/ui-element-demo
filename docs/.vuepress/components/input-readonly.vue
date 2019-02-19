<template>
  <div>
    <g-input value="你好" placeholder="请输入内容" readonly></g-input>
  </div>
</template>

<script>

  import Input from '../../../src/input'


  export default {
    components: {
      'g-input': Input,
    }
  }
</script>

<style scoped>
  .wrapper {
    margin-right: 0.5em;
    margin-bottom: 1em
  }
</style>