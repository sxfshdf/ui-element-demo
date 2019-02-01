<template>
    <button class="g-button" :disabled="disabled"
            :class="{[`icon-${iconPosition}`]: true, [`g-button-${type}`]: (type? true: false), 'g-button-animate': !disabled,
            [`g-button-${shape}`]:(shape ? true:false), 'g-button-loading': loading}"
            @click="$emit('click')">
        <g-icon :name="icon" class="icon" v-if="icon && !loading"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content" :class="{'left':(iconPosition==='right'), 'right':(iconPosition==='left'&&icon)}" v-show="isShow">
            <slot></slot>
        </div>
    </button>
</template>

<script>

    import Vue from 'vue'
    import Icon from './icon.vue'
    Vue.component('g-icon', Icon)

    export default {
        props: {
            icon: {
                type: String
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return  value === 'left' || value === 'right'
                }
            },
            loading: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: ''
            },
            shape: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            isShow() {
                return this.$slots.default
            }
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes spin {
        0%{ transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .g-button {
        height: var(--button-height);
        font-size: var(--font-size);
        color: var(--color);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex; justify-content: center; align-items: center;
        vertical-align: middle;
        overflow: hidden;
        position: relative;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
            border-color: var(--border-color-hover);
            color: var(--button-active-color);
            > .icon { fill: #0080ff;}
        }
        &:active {
            border-color: var(--border-color-hover);
            color: var(--button-active-color);
        }
        &:focus {
            outline: none;
            border-color: var(--border-color-hover);
            color: var(--button-active-color);
            > .icon { fill: #0080ff;}
        }
        &[disabled] {
            background: var(--button-disabled-bg);
            border: 1px solid var(--button-disabled-border);
            color: var(--button-disabled-color);
            cursor: not-allowed;
        }
        > .icon { order: 1; transition: all 0.3s; fill: var(--color)}
        > .content.right { order: 2; margin-left: 0.3em; margin-right:0; }
        > .content.left { order: 1; margin-right: 0.3em; margin-left:0; }
        &.icon-right {
            > .icon { order: 2;}
        }
        .loading {
            animation: spin 1s infinite linear;
        }
    }
    .g-button-round {
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
    }
    .g-button-circle {
        height: 32px;
        width: 32px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        padding: 0;
        > .icon {
            margin: 0;
        }
    }



    .g-button-primary {
        background: var(--button-primary-bg);
        color: var(--button-primary-color);
        border: var(--button-primary-border);
        cursor: pointer;
        &:focus {
            background: var(--button-primary-bg-focus);
            color: #fff;
            .icon {
                fill: #fff;
            }
        }
        &:hover {
            background: var(--button-primary-bg-focus);
            color: #fff;
            .icon {
                fill: #fff;
            }
        }
        &[disabled] {
            background: var(--button-disabled-bg);
            border: 1px solid var(--button-disabled-border);
            color: var(--button-disabled-color);
            cursor: not-allowed;
        }
        .icon {
            fill: #fff;
        }
    }
    .g-button-loading:before {
        position: absolute;
        display: block;
        content: '';
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;
        background: #fff;
        opacity: 0.4;
        z-index: 1;
    }
    .g-button-animate:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-image: radial-gradient(circle, #0080ff 12%, transparent 12%);
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(10, 10);
        opacity: 0;
        transition: transform .3s, opacity .5s;
    }
    .g-button-animate:active:after {
        transform: scale(0, 0);
        opacity: .3;
        transition: 0s;
    }
    .g-button-primary.g-button-animate:after {
        background-image: radial-gradient(circle, #fff 12%, transparent 12%);
    }
</style>