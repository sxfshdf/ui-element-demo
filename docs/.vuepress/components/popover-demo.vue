<template>
  <div>
    <g-popover>
      <template slot="content"><div>我是Popover</div></template>
      <g-button>Top</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template slot="content"><div>我是 Popover</div></template>
      <g-button>Bottom</g-button>
    </g-popover>
    <g-popover position="left">
      <template slot="content"><div>我是 Popover</div></template>
      <g-button>Left</g-button>
    </g-popover>
    <g-popover position="right">
      <template slot="content"><div>我是 Popover</div></template>
      <g-button>Right</g-button>
    </g-popover>
  </div>
</template>

<script>
  import Popover from '../../../src/popover'
  import Button from '../../../src/button'
  export default {
    name: "popover-demo",
    components: {
      'g-popover': Popover,
      'g-button': Button
    }
  }
</script>

<style scoped lang="scss">
  .popover {
    &:not(:last-child){
      margin-right: 0.5em;
    }

  }
</style>