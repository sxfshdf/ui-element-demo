<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "g-collapse",
    props: {
      selected: {
        type: Array,
      },
      single: {
        type: Boolean,
        default: false
      },
    },
    data(){
      return {
        eventBus: new Vue()
      }
    },
    provide(){
      return {
        eventBus: this.eventBus
      }
    },

    mounted(){
      this.eventBus.$emit('update:selected', this.selected)
      let selectedCpoy = JSON.parse(JSON.stringify(this.selected))
      this.eventBus.$on('update:removeSelected',name => {
        let index = selectedCpoy.indexOf(name)
        selectedCpoy.splice(index,1)
        this.eventBus.$emit('update:selected',selectedCpoy)
        this.$emit('update:selected', selectedCpoy)
      })
      this.eventBus.$on('update:addSelected', name => {
        if(this.single){
          selectedCpoy = [name]
          this.eventBus.$emit('update:selected',selectedCpoy)
          this.$emit('update:selected', selectedCpoy)
        }else{
          selectedCpoy.push(name)
          this.eventBus.$emit('update:selected',selectedCpoy)
          this.$emit('update:selected', selectedCpoy)
        }
      })
    }
  }
</script>

<style scoped lang="scss">

</style>