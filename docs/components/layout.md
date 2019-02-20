---
title: Layout
---

# Layout
#### 基本用法
<p style="font-size: 14px; color: #666">layout 基本用法。</p>
<hr style="margin-bottom: 1.5em;">
<layout-demo/>

``` html
<g-layout>
  <g-header>Header</g-header>
  <g-layout>
    <g-sider>Sider</g-sider>
    <g-content>Content</g-content>
  </g-layout>
  <g-footer>Footer</g-footer>
</g-layout>
```
<hr style="margin: 1.5em 0;">
<layout-demo2/>

``` html
<g-layout>
  <g-sider>sider</g-sider>
  <g-layout>
    <g-header>header</g-header>
    <g-content>content</g-content>
    <g-footer>footer</g-footer>
  </g-layout>
</g-layout>
```
<hr style="margin: 1.5em 0;">
<layout-demo3/>

``` html
<g-layout>
  <g-header>header</g-header>
  <g-content>content</g-content>
  <g-footer>footer</g-footer>
</g-layout>
```