<template>
  <div class="col" :class="colClass" :style="colStyle">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-col",
    props: {
      span: [Number, String],
      offset: [Number, String],
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colClass() {
        let {span, offset} = this
        return [span && `col-${span}`, offset && `offset-${offset}`]
      },
      colStyle() {
        return {
          paddingLeft: this.gutter/2 + 'px',
          paddingRight: this.gutter/2 + 'px'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .col {
    /*height: 50px;*/
    /*width: 50%;*/
    /*background: #399CFF;*/
    $class: col-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $class: offset-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }

  }
</style>