<template>
  <div>
    <g-input  prefix="setting" placeholder="请输入用户名"></g-input>
    <g-input  suffix="setting" placeholder="请输入用户名"></g-input>
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