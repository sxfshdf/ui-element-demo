<template>
  <div>
    <g-input value="张三" error="输入有误"></g-input>
    <g-input value="张三" tip="请输入用户名"></g-input>
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