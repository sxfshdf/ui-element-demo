<template>
  <div class="col" :class="colClass" :style="colStyle">
      <slot></slot>
  </div>
</template>

<script>

  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach( key => {
      if(!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }

  export default {
    name: "g-col",
    props: {
      span: [Number, String],
      offset: [Number, String],
      ipad: {
        type: Object,
        validator
      },
      narrowPc: {
        type: Object,
        validator
      },
      pc: {
        type: Object,
        validator
      },
      widePc: {
        type: Object,
        validator
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    methods: {
      createClass(obj,str = '') {
        if(!obj) return []
        let array = []
        if(obj.span) {
          array.push(`col-${str}${obj.span}`)
        }
        if(obj.offset) {
          array.push(`col-${str}${obj.offset}`)
        }
        return array
      }
    },
    computed: {
      colClass() {
        let {span, offset, ipad, narrowPc, pc, widePc} = this
        return [
          ...this.createClass({span,offset}),
          ...this.createClass(ipad, 'ipad-'),
          ...this.createClass(narrowPc, 'narrow-pc-'),
          ...this.createClass(pc, 'pc-'),
          ...this.createClass(widePc, 'wide-pc-')
        ]
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

    @media (min-width: 577px){
      $class: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n/24) * 100%;
        }
      }
      $class: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n/24) * 100%;
        }
      }
    }

    @media (min-width: 769px) {
      $class: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n/24) * 100%;
        }
      }
      $class: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n/24) * 100%;
        }
      }
    }

    @media (min-width: 993px) {
      $class: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n/24) * 100%;
        }
      }
      $class: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n/24) * 100%;
        }
      }
    }

    @media (min-width: 1201px) {
      $class: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n/24) * 100%;
        }
      }
      $class: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n/24) * 100%;
        }
      }
    }
  }
</style>