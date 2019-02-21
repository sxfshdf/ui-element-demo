---
title: Popover
---

# Popover
#### 点击出现弹窗
<p style="font-size: 14px; color: #666">popover 基本用法,通过设置 position 调整 popover 显示位置，默认top。</p>
<hr style="margin-bottom: 1.5em;">
<popover-demo/>

``` html
<g-popover>
  <template slot="content"><div>我是Popover</div></template>
  <g-button>Top</g-button>
</g-popover>
<g-popover position="bottom">
  <template slot="content"><div>我是 Popover</div></template>
  <g-button>Bottom</g-button>
</g-popover>
<g-popover position="left">
  <template slot="content"><div>我是 Popover</div></template>
  <g-button>Left</g-button>
</g-popover>
<g-popover position="right">
  <template slot="content"><div>我是 Popover</div></template>
  <g-button>Right</g-button>
</g-popover>
```
<br>

#### hover 出现弹窗
<p style="font-size: 14px; color: #666">通过 trigger 设置触发弹窗的方式，默认click。</p>
<hr style="margin-bottom: 1.5em;">
<popover-demo2/>

``` html
<g-popover trigger="hover">
  <template slot="content"><div>我是Popover</div></template>
  <g-button>Top</g-button>
</g-popover>
<g-popover position="bottom" trigger="hover">
  <template slot="content"><div>我是 Popover</div></template>
  <g-button>Bottom</g-button>
</g-popover>
<g-popover position="left" trigger="hover">
  <template slot="content"><div>我是 Popover</div></template>
  <g-button>Left</g-button>
</g-popover>
<g-popover position="right" trigger="hover">
  <template slot="content"><div>我是 Popover</div></template>
  <g-button>Right</g-button>
</g-popover>
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
      <td style=" ">设置弹窗出现位置，可以设置top，bottom，left, right四个值，默认top。</td>
      <td style=" ">String</td>
      <td style=" ">top</td>
    </tr>
    <tr>
      <td style=" ">trigger</td>
      <td style=" ">设置弹窗触发方式，可以设置 click，hover两个值，默认 click。</td>
      <td style=" ">String</td>
      <td style=" ">click</td>
    </tr>
    </tbody>
  </table>