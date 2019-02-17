<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        mounted() {
            for( let node of this.$el.children ){
                if( node.nodeName.toLowerCase() !== 'button') {
                    console.warn ( `g-button-group的子元素应该全是 button, 但是你写的是 ${node.nodeName.toLowerCase()}` )
                }
            }
        }
    }
</script>
<style lang="scss" scoped>

    $border-radius: 4px;

    .g-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .g-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:first-child {
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }
            &:last-child {
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
            &:hover {
                z-index: 1;
            }
            &:focus {
                z-index: 1;
            }
        }
        > .g-button-primary {
            border: 1px solid transparent;
            &:not(:first-child) {
                border-left-color: #71b8ff;
            }
        }
    }
</style>