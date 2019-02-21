<template>
  <g-tabs :selected="selectedTab">
    <g-tabs-head>
      <g-tabs-item name="1">Tab1</g-tabs-item>
      <g-tabs-item name="2">Tab2</g-tabs-item>
      <g-tabs-item name="3">Tab3</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
      <g-tabs-pane name="1">Tab1相关内容</g-tabs-pane>
      <g-tabs-pane name="2">Tab2相关内容</g-tabs-pane>
      <g-tabs-pane name="3">Tab3相关内容</g-tabs-pane>
    </g-tabs-body>
  </g-tabs>
</template>

<script>
  import Tabs from '../../../src/tabs.vue'
  import TabsHead from '../../../src/tabs-head.vue'
  import TabsItem from '../../../src/tabs-item.vue'
  import TabsBody from '../../../src/tabs-body.vue'
  import TabsPane from '../../../src/tabs-pane.vue'

  export default {
    name: "tabs-demo",
    data(){
      return {selectedTab: '2'}
    },
    components: {
      'g-tabs': Tabs,
      'g-tabs-head': TabsHead,
      'g-tabs-item': TabsItem,
      'g-tabs-body': TabsBody,
      'g-tabs-pane': TabsPane
    }
  }
</script>

<style scoped lang="scss">
  *{box-sizing: border-box;}
  .tabs-pane{
    height: 100px;
  }

</style>