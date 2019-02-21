## 一个 Vue UI 组件

###  安装

```sh
npm install ui-element-demo
yarn add ui-element-demo
```

### 使用

<strong>注意:样式文件需要单独引入。</strong>

```js
import {Button} from ui-element-demo
import 'ui-element-demo/dist/index.css'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'g-button': Button
  }
})
```
<strong>使用本框架前，请在 CSS 中开启 border-box </strong>
```
* , *::before, *::after { box-sizing: border-box;}
```
