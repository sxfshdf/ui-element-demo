<template>
  <div>
    <g-button @click="onClick">默认按钮</g-button>
    <g-button shape="round">默认按钮</g-button>
    <g-button shape="circle" icon="setting"></g-button>
    <g-button type="primary" >主要按钮</g-button>
    <g-button type="primary" shape="round" >主要按钮</g-button>
    <g-button type="primary" shape="circle" icon="setting"></g-button>
  </div>


</template>

<script>

  import Button from '../../../src/button'

  export default {
    components: {
      'g-button': Button,
    },
    methods:{
      onClick(){
        console.log('click')
      }
    }
  }
</script>

<style scoped>
  .g-button {
    margin-right: 0.5em;
    margin-bottom: 1em
  }
</style>