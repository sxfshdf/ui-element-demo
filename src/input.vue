<template>
    <div class="wrapper" :class="{'error':error, 'info':tip}">
        <g-icon v-if="prefix" class="prefix" :name="icon"></g-icon>
        <g-icon v-if="suffix" class="suffix" :name="icon"></g-icon>
        <div v-if="addonbefore || preicon" :class="{'addonbefore':addonbefore || preicon}">
            <g-icon :name="preicon" v-if="preicon"></g-icon>
            <span v-else>{{addonbefore}}</span>
        </div>
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly" :placeholder="placeholder"
               :class="{prefix, suffix, 'addonbefore':addonbefore || preicon, 'addonafter':addonafter || suficon}">
        <div v-if="addonafter" :class="{'addonafter': addonafter || suficon}">
            <g-icon :name="suficon" v-if="addonafter && suficon"></g-icon>
            <span v-else>{{addonafter}}</span>
        </div>

        <g-icon v-if="error" name="exclamation"></g-icon>
        <span v-if="error">{{error}}</span>
        <g-icon v-if="tip" name="info"></g-icon>
        <span v-if="tip">{{tip}}</span>
    </div>
</template>

<script>

    import Icon from './icon.vue'
    import Button from './button.vue'
    export default {
        name: "g-input",
        components: {'g-icon': Icon, 'g-button': Button},
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
                type: String,
            },
            tip: {
                type: String,
            },
            prefix: {
                type: Boolean,
                default: false
            },
            suffix: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String
            },
            placeholder: {
                type: String
            },
            addonbefore: {
                type: String
            },
            addonafter: {
                type: String
            },
            preicon: {
                type: String
            },
            suficon: {
                type: String
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
    $red: #F94E63;
    $disabled-bg: #f5f5f5;
    $disabled-color: rgba(0,0,0,0.25);
    $disabled-border: #ccc;
    $info-gray: #bbb;
    $addon-color: #999;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        position: relative;
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
                background: $disabled-bg;
                border: 1px solid $disabled-border;
                color: $disabled-color;
                cursor: not-allowed;
            }
            &[readonly]:focus {
                box-shadow: 0 0 0 2px rgba(80,80,80,0.1);
            }
            &::placeholder {
                color: $info-gray;
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
            > .g-icon {
                fill: $red;
            }
            > span {
                font-size: 12px;
                color: $red;
            }
        }
        &.info {
            > .g-icon {
                fill: $info-gray;
            }
            > span {
                font-size: 12px;
                color: $info-gray;
            }
        }
        > .g-icon.prefix {
            position: absolute;
            left: 0.6em;
            fill: $info-gray;
        }
        > input.prefix {
            padding-left: 2.2em;
        }
        > .g-icon.suffix {
            position: absolute;
            right: 0.6em;
            fill: $info-gray;
        }
        > input.suffix {
            padding-right: 2.2em;
        }
        > input.addonbefore {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        > input.addonafter {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            margin-right: -1px;
            z-index: 1;
        }
        > input.addonbefore.addonafter {
            -webkit-border-radius: 0;
            -moz-border-radius: 0;
            border-radius: 0;
        }
        > div.addonbefore {
            height: 32px;
            background: $disabled-bg;
            color: $addon-color;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            border: 1px solid $disabled-border;
            padding: 0 1em;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: -1px;
            > .g-icon {
                fill: $addon-color;
            }
        }
        > div.addonafter {
            height: 32px;
            background: $disabled-bg;
            color: $addon-color;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            border: 1px solid $disabled-border;
            padding: 0 1em;
            display: flex;
            align-items: center;
            justify-content: center;
            > .g-icon {
                fill: $addon-color;
            }
        }
    }
</style>