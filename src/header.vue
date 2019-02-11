<template>
  <transition>
    <div class="header">
      <!--<g-button v-if="collapsible" @click="closeSider" shape="circle" :icon="icon"></g-button>-->
      <slot></slot>
    </div>
  </transition>
</template>

<script>

  export default {
    name: "g-header",
    props: {
      // buttonMsg: {
      //   type: String,
      //   default: '关闭'
      // },
      // collapsible: {
      //   type: Boolean,
      //   default: false
      // },
    },
    data(){
      return {
        icon: 'left'
      }
    },
    methods: {
      // closeSider(){
      //   this.icon = this.icon === 'left'? 'right':'left'
      //
      // }
    }
  }
</script>


<style scoped lang="scss">
  .g-button {
    margin: 10px;
  }
</style>