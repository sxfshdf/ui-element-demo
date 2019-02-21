<template>
  <div class="collapseItem">
    <div class="title" @click="toggle" :class="{'is-active':show}" :data-name="name">
      {{title}}
      <g-icon name="arrow-small" :class="{'is-active':show}" v-if="arrow"></g-icon>
    </div>
    <div class="contentWrapper" :class="{'is-active':show}" :data-name="name">
      <div class="g-collapse-content" v-if="show">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from './icon'

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
    components:{
      'g-icon': Icon
    },
    data(){
      return {
        show: false
      }
    },
    inject: ['eventBus'],
    mounted(){

      this.eventBus && this.eventBus.$on('update:selected', names =>{
        if(names.indexOf(this.name)>=0){
          this.show = true
        }else{
          this.show = false
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
      line-height: 1.6em;
      .g-collapse-content {
        padding-bottom: 1em;
        color: #888;
        border-bottom: 1px solid;
        border-bottom-color: $border-color;
      }
    }

  }

</style>