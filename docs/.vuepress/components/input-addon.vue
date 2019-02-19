<template>
  <div>
    <g-input addonbefore="http://" addonafter=".com" placeholder="请输入网址"></g-input>
    <g-input addonafter=".com" placeholder="请输入网址"></g-input>
    <g-input preicon="left" suficon="setting" placeholder="请输入网址"></g-input>
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