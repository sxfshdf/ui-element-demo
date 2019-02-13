<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "g-tabs-head"
  }
</script>

<style scoped lang="scss">
  $tab-height: 40px;
  .tabs-head {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid red;
    height: $tab-height;
    > .actions {
      margin-left: auto;
    }
  }
</style>