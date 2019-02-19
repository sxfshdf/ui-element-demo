<template>
  <div>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
    <g-button-group>
      <g-button  type="primary">L</g-button>
      <g-button  type="primary">M</g-button>
      <g-button  type="primary">R</g-button>
    </g-button-group>
    <g-button-group>
      <g-button icon="edit" type="primary"></g-button>
      <g-button icon="share" type="primary"></g-button>
      <g-button icon="delete" icon-position="right" type="primary"></g-button>
    </g-button-group>
  </div>
</template>

<script>

  import ButtonGroup from '../../../src/buttonGroup.vue'
  import Button from '../../../src/button'
  import Icon from '../../../src//icon'

  export default {
    components: {
      'g-button-group': ButtonGroup,
      'g-button': Button,
      'g-icon': Icon
    }
  }
</script>

<style scoped>
  .g-button-group {
    margin-right: 0.5em;
    margin-bottom: 1em
  }
</style>