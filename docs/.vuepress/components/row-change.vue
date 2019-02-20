<template>
<div style="">
  <g-row class="demoRow" gutter="10">
    <g-col span="24"
           :ipad="{'span': 8}"
           :pc="{'span': 4}"
           :narrow-pc="{'span':6}"
    ><div class="demoCol-dark">col</div></g-col>
    <g-col span="24"
           :ipad="{'span': 16}"
           :pc="{'span': 20}"
           :narrow-pc="{'span':18}"
    ><div class="demoCol-light">col</div></g-col>
  </g-row>
  <g-row class="demoRow" gutter="10">
    <g-col span="12"
           :ipad="{'span': 10}"
           :pc="{'span': 8}"
           :narrow-pc="{'span':2}"
    ><div class="demoCol-dark">col</div></g-col>
    <g-col span="12"
           :ipad="{'span': 14}"
           :pc="{'span': 16}"
           :narrow-pc="{'span':22}"
    ><div class="demoCol-light">col</div></g-col>
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
    background: #fafafa;
    padding: 10px;
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