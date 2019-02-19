---
title: Input
---
# Input
#### 基本用法
<br>
<input-default/>

``` html
<g-input value="" placeholder="请输入内容"></g-input>
```
<br>

#### 禁用状态
<br>
<input-disabled/>

``` html
<g-input value="" placeholder="请输入内容" disabled></g-input>
```
<br>

#### 只读状态
<br>
<input-readonly/>

``` html
<g-input value="" placeholder="请输入内容" readonly></g-input>
```
<br>

#### 带 icon 的输入框
<br>
<input-icon/>

``` html
<g-input  prefix="setting" placeholder="请输入用户名"></g-input>
<g-input  suffix="setting" placeholder="请输入用户名"></g-input>
```
<br>

#### 带前置/后置的输入框
<br>
<input-addon/>

``` html
<g-input addonbefore="http://" addonafter=".com" placeholder="请输入网址"></g-input>
<g-input addonafter=".com" placeholder="请输入网址"></g-input>
<g-input preicon="left" suficon="setting" placeholder="请输入网址"></g-input>
```
<br>

#### 带错误/提示的输入框
<br>
<input-recomend/>

``` html
<g-input value="张三" error="输入有误"></g-input>
<g-input value="张三" tip="请输入用户名"></g-input>
```
<br>

#### 搜索框
<br>
<input-search/>

``` html
<g-input icon="search" suffix placeholder="请输入用户名" @search="onSearch"></g-input>
<g-input searchbutton="搜索" placeholder="请输入用户名" @search="onSearch"></g-input>
<g-input searchbutton placeholder="请输入用户名" @search="onSearch"></g-input>
```
<br>

#### API
<br>
   <table>
      <thead style="font-size: 14px; text-align: left;" >
      <th style="width: 20%;  ">属性</th>
      <th style="width: 56%;  ">说明</th>
      <th style="width: 14%;  ">类型</th>
      <th style="width: 20%;  ">默认值</th>
      </thead>
      <tbody >
      <tr>
        <td style=" ">disabled</td>
        <td style=" ">设置是否为禁用状态</td>
        <td style=" ">Boolean</td>
        <td style=" ">false</td>
      </tr>
      <tr>
        <td style=" ">readonly</td>
        <td style=" ">设置是否为只读状态</td>
        <td style=" ">boolean</td>
        <td style=" ">false</td>
      </tr>
      <tr>
        <td style=" ">prefix</td>
        <td style=" ">设置前置图标</td>
        <td style=" ">String</td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">suffix</td>
        <td style=" ">设置后置图标</td>
        <td style=" ">String</td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">addonbefore</td>
        <td style=" ">设置输入框前置</td>
        <td style=" ">String</td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">addonafter</td>
        <td style=" ">设置输入框后置</td>
        <td style=" ">String</td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">preicon</td>
        <td style=" ">设置输入框前置图标</td>
        <td style=" ">String</td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">suficon</td>
        <td style=" ">设置输入框后置图标</td>
        <td style=" ">String</td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">error</td>
        <td style=" ">设置错误信息提示</td>
        <td style=" ">String</td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">tip</td>
        <td style=" ">设置输入框提示内容</td>
        <td style=" ">String</td>
        <td style=" ">-</td>
      </tr>
      <tr>
        <td style=" ">searchbutton</td>
        <td style=" ">设置搜索框</td>
        <td style=" ">String|</td>
        <td style=" ">-</td>
      </tr>
      </tbody>
    </table>
