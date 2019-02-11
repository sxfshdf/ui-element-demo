<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-totast"
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-bg: rgba(0,0,0,0.75);
  $toast-height: 40px;
  .toast {
    font-size: $font-size;
    line-height: 1.6;
    background: $toast-bg;
    color: #fff;
    height: $toast-height;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 0 16px;
  }
</style>