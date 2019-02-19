<template>
  <div>
    <g-input suffix="search" placeholder="请输入用户名" @search="onSearch"></g-input>
    <g-input searchbutton="搜索" placeholder="请输入用户名" @search="onSearch"></g-input>
    <g-input searchbutton placeholder="请输入用户名" @search="onSearch"></g-input>
  </div>
</template>

<script>

  import Input from '../../../src/input'


  export default {
    components: {
      'g-input': Input,
    },
    methods: {
      onSearch(value){
        console.log(value)
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    margin-right: 0.5em;
    margin-bottom: 1em
  }
</style>