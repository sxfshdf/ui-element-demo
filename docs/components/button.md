---
title: Button
---
# Button
#### 基本用法
<p style="font-size: 14px; color: #666">默认和primary两种按钮类型，通过shape可以设置按钮形状。</p>
<hr style="margin-bottom: 1.5em;">
<ClientOnly>
<button-default/>
</ClientOnly>

``` html
<g-button @click="onClick">默认按钮</g-button>
<g-button shape="round">默认按钮</g-button>
<g-button shape="circle" icon="setting"></g-button>
<g-button type="primary">默认按钮</g-button>
<g-button type="primary" shape="round">默认按钮</g-button>
<g-button type="primary" shape="circle" icon="setting"></g-button>
```
<br>

#### 禁用状态
<p style="font-size: 14px; color: #666">通过 disabled 设置按钮禁用状态。</p>
<hr style="margin-bottom: 1.5em;">
<ClientOnly>
<button-disable/>
</ClientOnly>

``` html
<g-button disabled>默认按钮</g-button>
<g-button shape="round" disabled>默认按钮</g-button>
<g-button shape="circle" icon="setting" disabled></g-button>
```
<br>

#### 图标按钮
<p style="font-size: 14px; color: #666">通过 icon 设置按钮是否添加图标。</p>
<hr style="margin-bottom: 1.5em;">
<ClientOnly>
<button-icon/>
</ClientOnly>

``` html
<g-button icon="edit">编辑</g-button>
<g-button icon="search" ></g-button>
<g-button type="primary" icon="edit">编辑</g-button>
<g-button type="primary" icon="search" ></g-button>
```
<br>

#### 加载中
<p style="font-size: 14px; color: #666">通过 loading 设置按钮是否加载中状态。</p>
<hr style="margin-bottom: 1.5em;">
<ClientOnly>
<button-loading/>
</ClientOnly>

``` html
<g-button icon="edit">编辑</g-button>
<g-button icon="search" ></g-button>
<g-button type="primary" icon="edit">编辑</g-button>
<g-button type="primary" icon="search" ></g-button>
```
<br>

#### 按钮组合
<p style="font-size: 14px; color: #666">通过  g-button-group 标签设置按钮组合，icon-position 可以设置按钮左右位置，默认 left。</p>
<hr style="margin-bottom: 1.5em;">
<ClientOnly>
<button-groups/>
</ClientOnly>

``` html
<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
<g-button-group>
  <g-button  type="primary">L</g-button>
  <g-button  type="primary">M</g-button>
  <g-button  type="primary">R</g-button>
</g-button-group>
<g-button-group>
  <g-button icon="edit" type="primary"></g-button>
  <g-button icon="share" type="primary"></g-button>
  <g-button icon="delete" icon-position="right" type="primary"></g-button>
</g-button-group>
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
        <td style=" ">icon</td>
        <td style=" ">设置图标名称</td>
        <td style=" ">String</td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">disabled</td>
        <td style=" ">设置按钮失效状态</td>
        <td style=" ">boolean</td>
        <td style=" ">false</td>
      </tr>
      <tr>
        <td style=" ">shape</td>
        <td style=" ">设置按钮的形状，可选值为round，circle或者不设</td>
        <td style=" ">String</td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">loading</td>
        <td style=" ">设置是否加载中状态</td>
        <td style=" ">boolean</td>
        <td style=" ">false</td>
      </tr>
      <tr>
        <td style=" ">type</td>
        <td style=" ">设置按钮类型，可选值为primary或者不设</td>
        <td style=" ">String</td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">icon-position</td>
        <td style=" ">设置按钮位置，可选值为right或者不设</td>
        <td style=" ">String</td>
        <td style=" ">left</td>
      </tr>
      </tbody>
    </table>



