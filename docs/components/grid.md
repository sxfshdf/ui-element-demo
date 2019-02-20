---
title: Grid
---
# Grid
#### 基本用法
<p style="font-size: 14px; color: #666">将整体宽度设置24份，通过 span 随意设置需要的宽度。</p>
<hr style="margin-bottom: 1.5em;">
<row-demo/>

``` html
<g-row class="row-demo">
  <g-col span="24"><div class="bg-dark"></div></g-col>
</g-row>
<g-row class="row-demo">
  <g-col span="12"><div class="bg-dark"></div></g-col>
  <g-col span="12"><div class="bg-light"></div></g-col>
</g-row>
<g-row class="row-demo">
  <g-col span="8"><div class="bg-dark"></div></g-col>
  <g-col span="8"><div class="bg-light"></div></g-col>
  <g-col span="8"><div class="bg-dark"></div></g-col>
</g-row>
```
<br>

#### 添加间隔gutter
<p style="font-size: 14px; color: #666">通过 gutter 设置相邻模块之前的间隙。</p>
<hr style="margin-bottom: 1.5em;">
<row-gutter/>

``` html
<g-row class="demoRow" gutter="10">
  <g-col span="8"><div class="demoCol-dark">col-8</div></g-col>
  <g-col span="8"><div class="demoCol-light">col-8</div></g-col>
  <g-col span="8"><div class="demoCol-dark">col-8</div></g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="6"><div class="demoCol-dark">col-6</div></g-col>
  <g-col span="6"><div class="demoCol-light">col-6</div></g-col>
  <g-col span="6"><div class="demoCol-dark">col-6</div></g-col>
  <g-col span="6"><div class="demoCol-light">col-6</div></g-col>
</g-row>
```
#### 设置offset
<p style="font-size: 14px; color: #666">通过 offset 设置相邻模块之间的偏移。</p>
<hr style="margin-bottom: 1.5em;">
<row-offset/>

``` html
<g-row class="demoRow">
  <g-col span="6"><div class="demoCol-dark">col-6</div></g-col>
  <g-col span="6"><div class="demoCol-light">col-6</div></g-col>
  <g-col span="6" offset="6"><div class="demoCol-dark">col-6</div></g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="4"><div class="demoCol-dark">col-4</div></g-col>
  <g-col span="4" offset="4"><div class="demoCol-light">col-4</div></g-col>
  <g-col span="4" offset="4"><div class="demoCol-dark">col-4</div></g-col>
  <g-col span="4"><div class="demoCol-light">col-4</div></g-col>
</g-row>
```
#### 设置水平对齐方式 justify
<p style="font-size: 14px; color: #666">通过 justify 设置模块之间水平对齐方式。</p>
<hr style="margin-bottom: 1.5em;">
<row-justify/>

``` html
<g-row class="demoRow" justify="start">
  <g-col span="6"><div class="demoCol-dark">col-6</div></g-col>
  <g-col span="6"><div class="demoCol-light">col-6</div></g-col>
  <g-col span="6"><div class="demoCol-dark">col-6</div></g-col>
</g-row>
<g-row class="demoRow" justify="center">
  <g-col span="6"><div class="demoCol-dark">col-6</div></g-col>
  <g-col span="6"><div class="demoCol-light">col-6</div></g-col>
  <g-col span="6"><div class="demoCol-dark">col-6</div></g-col>
</g-row>
<g-row class="demoRow" justify="space-between">
  <g-col span="6"><div class="demoCol-dark">col-6</div></g-col>
  <g-col span="6"><div class="demoCol-light">col-6</div></g-col>
  <g-col span="6"><div class="demoCol-dark">col-6</div></g-col>
</g-row>
<g-row class="demoRow" justify="space-around">
  <g-col span="6"><div class="demoCol-dark">col-6</div></g-col>
  <g-col span="6"><div class="demoCol-light">col-6</div></g-col>
  <g-col span="6"><div class="demoCol-dark">col-6</div></g-col>
</g-row>
<g-row class="demoRow" justify="end">
  <g-col span="6"><div class="demoCol-dark">col-6</div></g-col>
  <g-col span="6"><div class="demoCol-light">col-6</div></g-col>
  <g-col span="6"><div class="demoCol-dark">col-6</div></g-col>
</g-row>
```
#### 响应式设置
<p style="font-size: 14px; color: #666">通过 ipad,narrow-pc,pc,wide-pc参数设置响应式尺寸。</p>
<hr style="margin-bottom: 1.5em;">
<row-change/>

```html
<g-row class="demoRow" gutter="20">
  <g-col span="24"
         :ipad="{'span': 8}"
         :pc="{'span': 4}"
         :narrow-pc="{'span':6}"
  ><div class="demoCol-dark">col</div></g-col>
  <g-col span="24"
         :ipad="{'span': 16}"
         :pc="{'span': 20}"
         :narrow-pc="{'span':18}"
  ><div class="demoCol-light">col</div></g-col>
</g-row>
<g-row class="demoRow" gutter="20">
  <g-col span="12"
         :ipad="{'span': 10}"
         :pc="{'span': 8}"
         :narrow-pc="{'span':2}"
  ><div class="demoCol-dark">col</div></g-col>
  <g-col span="12"
         :ipad="{'span': 14}"
         :pc="{'span': 16}"
         :narrow-pc="{'span':22}"
  ><div class="demoCol-light">col</div></g-col>
</g-row>
```
#### API
<br>
<strong>Row属性</strong>
<hr>
<table>
    <thead style="font-size: 14px; text-align: left;" >
    <th style="width: 20%;  ">属性</th>
    <th style="width: 56%;  ">说明</th>
    <th style="width: 14%;  ">类型</th>
    <th style="width: 20%;  ">默认值</th>
    </thead>
    <tbody >
    <tr>
      <td style=" ">gutter</td>
      <td style=" ">设置栅格之间间隙</td>
      <td style=" ">Number</td>
      <td style=" ">-</td>
    </tr>
    <tr>
      <td style=" ">justify</td>
      <td style=" ">设置栅格水平排列方式</td>
      <td style=" ">String</td>
      <td style=" ">-</td>
    </tr>
    <tr>
      <td style=" ">align</td>
      <td style=" ">设置栅格垂直排列方式</td>
      <td style=" ">String</td>
      <td style=" ">-</td>
    </tr>
    </tbody>
  </table>
  <strong>Col属性</strong>
  <hr>
    <table>
      <thead style="font-size: 14px; text-align: left;" >
      <th style="width: 20%;  ">属性</th>
      <th style="width: 56%;  ">说明</th>
      <th style="width: 14%;  ">类型</th>
      <th style="width: 20%;  ">默认值</th>
      </thead>
      <tbody >
      <tr>
        <td style=" ">span</td>
        <td style=" ">设置栅格占据的列数</td>
        <td style=" ">Number,String </td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">offset</td>
        <td style=" ">设置栅格左侧偏移数</td>
        <td style=" ">String,Number</td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">ipad</td>
        <td style=" "><768px 响应式栅格数或者栅格属性对象</td>
        <td style=" ">Object(例如:{span: 4, offset: 4})</td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">narrow-pc</td>
        <td style=" ">>=768px 响应式栅格数或者栅格属性对象</td>
        <td style=" ">Object(例如:{span: 4, offset: 4})</td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">pc</td>
        <td style=" ">>=992px 响应式栅格数或者栅格属性对象</td>
        <td style=" ">Object(例如:{span: 4, offset: 4})</td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">wide-pc</td>
        <td style=" ">>=1200px 响应式栅格数或者栅格属性对象</td>
        <td style=" ">Object(例如:{span: 4, offset: 4})</td>
        <td style=" ">-</td>
      </tr>
      </tbody>
    </table>