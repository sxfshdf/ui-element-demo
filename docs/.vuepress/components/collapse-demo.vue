<template>
  <div class="collapse-wrapper">
    <g-collapse :selected="selected">
      <g-collapse-item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </g-collapse-item>
      <g-collapse-item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </g-collapse-item>
      <g-collapse-item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </g-collapse-item>
      <g-collapse-item title="可控 Controllability" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </g-collapse-item>
    </g-collapse>
  </div>
</template>
<script>
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item'
  import Icon from '../../../src/icon'

  export default {
    components: {
      'g-collapse': Collapse,
      'g-collapse-item': CollapseItem
    },
    data(){
      return {
        selected: []
      }
    }
  }
</script>
<style scoped lang="scss">
  .collapse-wrapper {
    margin-bottom: 2em;
    font-size: 14px;
  }
</style>
