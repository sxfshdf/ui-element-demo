<template>
  <div>
    <g-popover trigger="hover">
      <template slot="content"><div>我是Popover</div></template>
      <g-button>Top</g-button>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <template slot="content"><div>我是 Popover</div></template>
      <g-button>Bottom</g-button>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <template slot="content"><div>我是 Popover</div></template>
      <g-button>Left</g-button>
    </g-popover>
    <g-popover position="right" trigger="hover">
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