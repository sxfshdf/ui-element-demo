<template>
  <div class="collapseItem">
    <div class="title" @click="toggle" :class="{'is-active':show}">
      {{title}}
      <g-icon name="arrow-small" :class="{'is-active':show}" v-if="arrow"></g-icon>
    </div>
    <div class="contentWrapper" :class="{'is-active':show}" :data-name="name">
      <div class="content" v-show="show">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "g-collapse-item",
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      arrow: {
        type: Boolean,
        default: true
      }
    },
    data(){
      return {
        show: false
      }
    },
    inject: ['eventBus'],
    mounted(){
      this.eventBus.$on('update:selected', names=>{
        if(names.indexOf(this.name)>=0){
          this.open()
        }else{
          this.close()
        }
      })
    },
    methods: {
      toggle(){
        if(this.show){
          this.eventBus.$emit('update:removeSelected',this.name)
        }else{
          this.eventBus.$emit('update:addSelected',this.name)
        }
      },
      open(){
        this.show = true
      },
      close(){
        this.show = false
      }
    }
  }
</script>

<style scoped lang="scss">
  $border-color: #eee;

  .collapseItem {
    border-top: 1px solid $border-color;

    &:not(:first-child){
      margin-top: -1px;
    }
    > .title {
      height: 48px;
      display: flex;
      align-items: center;
      /*border-bottom: 1px solid #eee;*/
      color: #333;
      cursor: pointer;
      border-bottom: 1px solid;
      border-bottom-color: $border-color;
      &.is-active{
        border-bottom-color: transparent;
      }
      > .g-icon {
        margin-left: auto;
        margin-right: 1em;
        &.is-active {
          transform: rotate(90deg);
        }
      }
    }
    > .contentWrapper{
      overflow: hidden;
      transition: height 2s;
      .content {
        padding-bottom: 1em;
        color: #666;
        border-bottom: 1px solid;
        border-bottom-color: $border-color;
      }
    }

  }

</style>