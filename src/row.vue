<template>
  <div class="g-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-row",
    props: {
      gutter: [Number,String],
      justify: {
        type: String,
        validate(value) {
          return ['start','end','center','space-between','space-around'].indexOf(value) >= 0
        }
      },
      align: {
        type: String,
        validate(value) {
          return ['top','middle','bottom'].indexOf(value) >= 0
        }
      }
    },
    computed: {
      rowStyle() {
        return {
          marginRight: -this.gutter/2 +'px',
          marginLeft: -this.gutter/2 +'px'
        }
      },
      rowClass() {
        let {justify, align} = this
        return [ justify && `row-flex-${justify}`, align && `row-flex-${align}`]
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style scoped lang="scss">
  .g-row {
    display: flex;
    flex-wrap: wrap;
    &.row-flex-start {
      justify-content: flex-start;
    }
    &.row-flex-end {
      justify-content: flex-end;
    }
    &.row-flex-space-between {
      justify-content: space-between;
    }
    &.row-flex-space-around {
      justify-content: space-around;
    }
    &.row-flex-top {
      align-items: flex-start;
    }
    &.row-flex-middle {
      align-items: center;
    }
    &.row-flex-bottom {
      align-items: flex-end;
    }
  }
</style>