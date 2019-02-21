---
title: Tabs
---

# Tabs
#### 横向tabs
<p style="font-size: 14px; color: #666">popover 基本用法,通过设置 position 调整 popover 显示位置，默认top。</p>
<hr style="margin-bottom: 1.5em;">
<tabs-demo/>

``` html
data:{
  selectedTab: '1'
}
<g-tabs :selected="selectedTab">
  <g-tabs-head>
    <g-tabs-item name="1">Tab1</g-tabs-item>
    <g-tabs-item name="2">Tab2</g-tabs-item>
    <g-tabs-item name="3">Tab3</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">Tab1相关内容</g-tabs-pane>
    <g-tabs-pane name="2">Tab2相关内容</g-tabs-pane>
    <g-tabs-pane name="3">Tab3相关内容</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```
<br>

#### 垂直tabs
<p style="font-size: 14px; color: #666">设置 direction 调整 tabs 方向，可以设置 horizontal，vertical，默认 horizontal。</p>
<hr style="margin-bottom: 1.5em;">
<tabs-demo2/>

``` html
<g-tabs :selected="selectedTab" direction="vertical">
  <g-tabs-head>
    <g-tabs-item name="1">Tab1</g-tabs-item>
    <g-tabs-item name="2">Tab2</g-tabs-item>
    <g-tabs-item name="3">Tab3</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">Tab1相关内容</g-tabs-pane>
    <g-tabs-pane name="2">Tab2相关内容</g-tabs-pane>
    <g-tabs-pane name="3">Tab3相关内容</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```
<br>

#### 禁用某个tab
<p style="font-size: 14px; color: #666">设置 disabled 可以禁用某个 tab 。</p>
<hr style="margin-bottom: 1.5em;">
<tabs-demo3/>

``` html
<g-tabs :selected="selectedTab">
  <g-tabs-head>
    <g-tabs-item name="1">Tab1</g-tabs-item>
    <g-tabs-item name="2" disabled>Tab2</g-tabs-item>
    <g-tabs-item name="3">Tab3</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">Tab1相关内容</g-tabs-pane>
    <g-tabs-pane name="2">Tab2相关内容</g-tabs-pane>
    <g-tabs-pane name="3">Tab3相关内容</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
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
      <td style=" ">direction</td>
      <td style=" ">设置 tabs 方向，可以设置 horizontal，vertical两个值可以不设置，默认 horizontal。</td>
      <td style=" ">String</td>
      <td style=" ">horizontal</td>
    </tr>
    <tr>
      <td style=" ">disabled</td>
      <td style=" ">设置弹窗触发方式，可以设置 click，hover两个值，默认 click。</td>
      <td style=" ">String</td>
      <td style=" ">click</td>
    </tr>
    </tbody>
  </table>