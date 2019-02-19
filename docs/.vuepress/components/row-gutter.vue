<template>
<div style="">
  <g-row class="demoRow" gutter="10">
    <g-col span="8"><div class="demoCol-dark">col-8</div></g-col>
    <g-col span="8"><div class="demoCol-light">col-8</div></g-col>
    <g-col span="8"><div class="demoCol-dark">col-8</div></g-col>
  </g-row>
  <g-row class="demoRow" gutter="10">
    <g-col span="6"><div class="demoCol-dark">col-6</div></g-col>
    <g-col span="6"><div class="demoCol-light">col-6</div></g-col>
    <g-col span="6"><div class="demoCol-dark">col-6</div></g-col>
    <g-col span="6"><div class="demoCol-light">col-6</div></g-col>
  </g-row>
</div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
    color: #999
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol-dark {
    border-radius: 4px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e5e5e5;
  }
  .demoCol-light {
    border-radius: 4px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0f0f0;
  }
</style>
<script>
  import GRow from '../../../src/row'
  import GCol from '../../../src/col'
  export default {
    components: {GRow, GCol},
  }
</script>