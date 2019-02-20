<template>
  <div>
    <g-button @click="showToast">支持 html</g-button>
  </div>
</template>

<script>
  import Toast from '../../../src/toast'
  import Plugin from '../../../src/plugin.js'
  import Button from '../../../src/button'
  import Vue from 'vue'

  Vue.use(Plugin)

  export default {
    name: "toast-demo",
    components: {
      'g-toast': Toast,
      'g-button': Button
    },
    methods: {
      showToast(){
        this.$toast('<strong style="color: red">红色加粗的提示</strong>',{
          autoClose: 2,
          closeButton: {
            text: '点我关闭',
            callback: ()=>{
              console.log('close toast')
            }
          },
          enableHtml: true
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .g-button{
    margin-right: 0.5em;
  }
</style>