<template>
  <div>
    <g-button @click="$toast('我是弹窗')">Top</g-button>
    <g-button @click="$toast('我是弹窗',({position: 'middle'}))">Middle</g-button>
    <g-button @click="$toast('我是弹窗',({position: 'bottom'}))">Bottom</g-button>
  </div>
</template>

<script>
  // import Toast from '../../../src/toast'
  import Plugin from '../../../src/plugin.js'
  import Button from '../../../src/button'
  import Vue from 'vue'

  Vue.use(Plugin)

  export default {
    name: "toast-demo",
    components: {
      // 'g-toast': Toast,
      'g-button': Button
    },
    methods: {
      // showToast1(){this.showToast('top')},
      // showToast2(){this.showToast('middle')},
      // showToast3(){this.showToast('bottom')},
      // showToast(position){
      //   this.$toast('我是Toast',{
      //     autoClose: 2,
      //     closeButton: {
      //       text: 'Close',
      //       callback: ()=>{
      //         console.log('close toast')
      //       }
      //     },
      //     enableHtml: true,
      //     position
      //   })
      // }
    }
  }
</script>

<style scoped lang="scss">
  .g-button{
    margin-right: 0.5em;
  }
</style>