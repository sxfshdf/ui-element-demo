<template>
    <div class="wrapper" :class="{'error':error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
        <g-icon v-if="error" name="setting"></g-icon>
        <span v-if="error">{{error}}</span>
    </div>
</template>

<script>

    import Icon from './icon.vue'
    export default {
        name: "g-input",
        components: {'g-icon': Icon},
        props: {
            value: {
                type: String,
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                value: String,
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #ccc;
    $border-radius: 4px;
    $font-size: 14px;
    $border-color-hover: #0080ff;
    $red: #FE647B;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        > :not(:last-child) {
            margin-right: 0.2em;
        }
        > input{
            font-size: inherit;
            padding: 0 12px;
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                border-color: $border-color-hover;
                outline: none;
                box-shadow: 0 0 0 2px rgba(0,128,255,0.2);
            }
            &[disabled], &[readonly] {
                background: var(--button-disabled-bg);
                border: 1px solid var(--button-disabled-border);
                color: var(--button-disabled-color);
                cursor: not-allowed;
            }
        }
        &.error {
            > input {
                border-color: $red;
                color: $red;
                &:focus {
                    box-shadow: 0 0 0 2px rgba(249,58,95,.2);
                }
            }
        }
        > .g-icon {
            fill: $red;
        }
        > span {
            font-size: 12px;
            color: $red;
        }
    }
</style>