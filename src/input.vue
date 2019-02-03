<template>
    <div class="wrapper" :class="{'error':error, 'info':tip, 'search':icon==='search'}" >
        <div v-if="prefix" class="prefix">
            <g-icon :name="icon"></g-icon>
        </div>

        <template v-if="suffix" >
            <div v-if="icon==='search'" class="suffix" @click="onSearch($event)">
                <g-icon :name="icon" ></g-icon>
            </div>
            <div v-else class="suffix">
                <g-icon :name="icon"></g-icon>
            </div>
        </template>


        <div v-if="addonbefore || preicon" :class="{'addonbefore':addonbefore || preicon}">
            <g-icon :name="preicon" v-if="preicon"></g-icon>
            <span v-else>{{addonbefore}}</span>
        </div>

        <input v-if="icon==='search'|| searchbutton" :value="value" type="text" :disabled="disabled" :readonly="readonly" :placeholder="placeholder"
               :class="{prefix, suffix, 'search':searchbutton}"
               @keyup.enter="onSearch($event)">
        <input v-else :value="value" type="text" :disabled="disabled" :readonly="readonly" :placeholder="placeholder"
               :class="{prefix, suffix, 'addonbefore':addonbefore || preicon, 'addonafter':addonafter || suficon}"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)">

        <g-button v-if="searchbutton === true" type="primary" icon="search" @click="onSearch($event)"></g-button>
        <g-button v-if="searchbutton && searchbutton.length" type="primary" @click="onSearch($event)">{{searchbutton}}</g-button>

        <div v-if="addonafter || suficon" :class="{'addonafter': addonafter || suficon}">
            <g-icon :name="suficon" v-if="suficon"></g-icon>
            <span v-else>{{addonafter}}</span>
        </div>

        <g-icon v-if="error" name="exclamation"></g-icon>
        <span v-if="error" class="errorMessage">{{error}}</span>
        <g-icon v-if="tip" name="info"></g-icon>
        <span v-if="tip" class="tipMessage">{{tip}}</span>
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
            },
            searchbutton: [Boolean,String],
        },
        methods: {
            onSearch(e) {
                if(e.currentTarget.nodeName.toLowerCase()==='input'){
                    let value = e.currentTarget.value
                    this.$emit('search',value)
                }else if(e.currentTarget.nodeName.toLowerCase()==='button') {
                    let value = e.currentTarget.previousElementSibling.value
                    e.currentTarget.previousElementSibling.focus()
                    this.$emit('search',value)
                }else {
                    let value = e.currentTarget.nextElementSibling.value
                    e.currentTarget.nextElementSibling.focus()
                    this.$emit('search',value)
                }
            },
        },
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
        &:hover {
            > input {
                border-color: $border-color-hover;
            }
        }
        > * {
            transition: all 0.3s;
        }
        > input.search {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            margin-right: -1px;
        }
        .g-button {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
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
            > :not(:last-child) {
                margin-right: 0.2em;
            }
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
            > span.errorMessage {
                font-size: 12px;
                color: $red;
            }
        }
        &.info {
            > :not(:last-child) {
                margin-right: 0.2em;
            }
            > .g-icon {
                fill: $info-gray;
            }
            > span.tipMessage {
                font-size: 12px;
                color: $info-gray;
            }
        }
        &.search {
            .g-icon {
                cursor: pointer;
            }
             .g-icon:hover {
                fill: #333;
            }
        }
        > div.prefix {
            position: absolute;
            left: 0.6em;
            fill: $info-gray;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        > input.prefix {
            padding-left: 2.2em;
        }
        >div.suffix {
            position: absolute;
            right: 0.6em;
            fill: $info-gray;
            display: flex;
            align-items: center;
            justify-content: center;
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