<template>
  <div class="gridWrapper">
    <g-row class="row-demo">
      <g-col span="24"><div class="bg-dark">col-24</div></g-col>
    </g-row>
    <g-row class="row-demo">
      <g-col span="12"><div class="bg-dark">col-12</div></g-col>
      <g-col span="12"><div class="bg-light">col-12</div></g-col>
    </g-row>
    <g-row class="row-demo">
      <g-col span="8"><div class="bg-dark">col-8</div></g-col>
      <g-col span="8"><div class="bg-light">col-8</div></g-col>
      <g-col span="8"><div class="bg-dark">col-8</div></g-col>
    </g-row>
  </div>
</template>

<script>

  import Row from '../../../src/row'
  import Col from '../../../src/col'


  export default {
    components: {
      'g-row': Row,
      'g-col': Col
    },
  }
</script>

<style scoped lang="scss">
  *{ box-sizing: border-box}
  .gridWrapper {
    margin-top: 1em;
    color: #999;
    .row-demo {
      margin-top: 0.5em;
      .bg-dark{
        background: #e5e5e5;
        border-radius: 4px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bg-light{
        background: #f0f0f0;
        border-radius: 4px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

</style>