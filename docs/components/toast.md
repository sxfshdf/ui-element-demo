---
title: Toast
---

# Toast
#### 基本用法
<p style="font-size: 14px; color: #666">toast 基本用法,通过设置 position调整toast显示位置。</p>
<hr style="margin-bottom: 1.5em;">
<toast-demo/>

``` html
<g-button @click="$toast('我是弹窗')">Top</g-button>
<g-button @click="$toast('我是弹窗',({position: 'middle'}))">Middle</g-button>
<g-button @click="$toast('我是弹窗',({position: 'bottom'}))">Bottom</g-button>
```
```js
import Vue from 'vue'
import ToastPlugin from 'ui-element-demo'
Vue.use(ToastPlugin)
```
<br>

#### 设置关闭按钮
<p style="font-size: 14px; color: #666">通过 closeButton 设置关闭按钮。</p>
<hr style="margin-bottom: 1.5em;">
<toast-clousebutton/>

``` html
<g-button @click="showToast">设置关闭按钮</g-button>
```

```js

methods: {
  showToast(){
    this.$toast('弹窗显示了',{
      autoClose: 2,
      closeButton: {
        text: '点我关闭',
        callback: ()=>{
          console.log('close toast')
        }
      },
    })
  }
}
```
<br>

#### 支持 html
<p style="font-size: 14px; color: #666">通过 enableHtml 设置是否支持 html，默认false。</p>
<hr style="margin-bottom: 1.5em;">
<toast-html/>

``` html
<g-button @click="showToast">支持html</g-button>

methods: {
  showToast(){
    this.$toast('<strong style="color: red">红色加粗的提示</strong>',{
      autoClose: 2,
      closeButton: {
        text: '点我关闭',
        callback: ()=>{
          console.log('close toast')
        }
      },
      enableHtml: true
    })
  }
}
```
<br>

#### 去除关闭按钮，自动关闭
<p style="font-size: 14px; color: #666">把clouseButton 设为 false可以去除button，弹窗自动关闭。</p>
<hr style="margin-bottom: 1.5em;">
<toast-noclose/>

``` html
<g-button @click="showToast">支持html</g-button>

methods: {
  showToast(){
    this.$toast('弹窗显示了',{
      autoClose: 2,
      closeButton: false
    })
  }
}
```
<br>

#### API
  <table>
    <thead style="font-size: 14px; text-align: left;" >
    <th style="width: 20%;  ">属性</th>
    <th style="width: 56%;  ">说明</th>
    <th style="width: 14%;  ">类型</th>
    <th style="width: 20%;  ">默认值</th>
    </thead>
    <tbody >
    <tr>
      <td style=" ">positon</td>
      <td style=" ">设置弹窗出现位置，可以设置top，middle，bottom三个值，默认top。</td>
      <td style=" ">String</td>
      <td style=" ">top</td>
    </tr>
    <tr>
      <td style=" ">enableHtml</td>
      <td style=" ">设置弹窗是否支持html,默认为false。</td>
      <td style=" ">boolean</td>
      <td style=" ">false</td>
    </tr>
    <tr>
      <td style=" ">autoClose</td>
      <td style=" ">设置弹窗的自动关闭，默认为3s</td>
      <td style=" ">Number,Boolean</td>
      <td style=" ">3</td>
    </tr>
    <tr>
      <td style=" ">closeButton</td>
      <td style=" ">设置弹窗关闭图标,设置为false时，不显示关闭按钮，默认({text: '关闭',
        callback: undefined}),可以设置按钮内容和回调函数。</td>
      <td style=" ">Object,Boolean</td>
      <td style=" ">{text: '关闭',
        callback: undefined}</td>
    </tr>
    </tbody>
  </table>