<template>
  <div class="raw" :style="rawStyle" :class="rawClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-raw",
    props: {
      gutter: [Number,String],
      justify: {
        type: String,
        validate(value) {
          return ['start','end','center','space-between','space-around'].includes(value)
        }
      },
      align: {
        type: String,
        validate(value) {
          return ['top','middle','bottom'].includes(value)
        }
      }
    },
    computed: {
      rawStyle() {
        return {
          marginRight: -this.gutter/2 +'px',
          marginLeft: -this.gutter/2 +'px'
        }
      },
      rawClass() {
        let {justify, align} = this
        return [ justify && `raw-flex-${justify}`, align && `raw-flex-${align}`]
      }
    },
    mounted() {
      console.log(this.$children)
      this.$children.forEach(vm => {
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style scoped lang="scss">
  .raw {
    display: flex;
    flex-wrap: wrap;
    /*position: relative;*/
    &.raw-flex-start {
      justify-content: flex-start;
    }
    &.raw-flex-end {
      justify-content: flex-end;
    }
    &.raw-flex-space-between {
      justify-content: space-between;
    }
    &.raw-flex-space-around {
      justify-content: space-around;
    }
    &.raw-flex-top {
      align-items: flex-start;
    }
    &.raw-flex-middle {
      align-items: center;
    }
    &.raw-flex-bottom {
      align-items: flex-end;
    }
  }
</style>