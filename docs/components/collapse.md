---
title: Collapse
---

# Collapse
#### 基本用法
<p style="font-size: 14px; color: #666; margin-bottom: 2em" >collapse 基本用法, 每个 item 需要设置 title 和 name。</p>
<collapse-demo/>

``` html
data:{
  selected: []
}

<g-collapse :selected="selected">
  <g-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </g-collapse-item>
  <g-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </g-collapse-item>
  <g-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </g-collapse-item>
  <g-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </g-collapse-item>
</g-collapse>
```
<br>

#### 设置默认展开项
<p style="font-size: 14px; color: #666; margin-bottom: 2em" >设置 selected 参数，选择默认打开项，selected 为一个数组。</p>
<collapse-demo2/>

``` html
data:{
  selected: ['1','3']
}

<g-collapse :selected="selected">
  <g-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </g-collapse-item>
  <g-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </g-collapse-item>
  <g-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </g-collapse-item>
  <g-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </g-collapse-item>
</g-collapse>
```
<br>

#### 设置只打开单个
<p style="font-size: 14px; color: #666; margin-bottom: 2em" >设置 single 参数，只打开点击项，其他关闭，默认为false。</p>
<collapse-demo3/>

``` html
data:{
  selected: ['1']
}

<g-collapse :selected="selected" single>
  <g-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </g-collapse-item>
  <g-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </g-collapse-item>
  <g-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </g-collapse-item>
  <g-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </g-collapse-item>
</g-collapse>
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
      <td style=" ">single</td>
      <td style=" ">设置是否只能打开一个item，默认为 false。</td>
      <td style=" "></td>
      <td style=" ">false</td>
    </tr>
    </tbody>
  </table>