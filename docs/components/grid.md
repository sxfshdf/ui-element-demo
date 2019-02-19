---
title: Grid
---
# Grid
#### 基本用法
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
<br>
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