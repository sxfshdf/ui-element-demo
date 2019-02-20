<template>
  <g-layout>
    <g-header>Header</g-header>
    <g-layout>
      <g-sider>Sider</g-sider>
      <g-content>Content</g-content>
    </g-layout>
    <g-footer>Footer</g-footer>
  </g-layout>
</template>

<script>
  import Layout from '../../../src/layout.vue'
  import Content from '../../../src/content.vue'
  import Header from '../../../src/header.vue'
  import Sider from '../../../src/sider.vue'
  import Footer from '../../../src/footer.vue'

  export default {
    name: "layout-demo",
    components:{
      'g-layout': Layout,
      'g-header': Header,
      'g-content': Content,
      'g-sider': Sider,
      'g-footer': Footer
    }
  }
</script>

<style scoped lang="scss">
  *{box-sizing: border-box}
  .g-layout {
    color: #999;
    .g-header{
      height: 40px;
      background: #e5e5e5;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .g-sider {
      background: #eee;
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .g-content{
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .g-footer{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      background: #e5e5e5;
    }
  }
</style>