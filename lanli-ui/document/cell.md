
# Cell
## 全局安装
setup中只能导入使用
```js
import { createApp } from 'vue';
import { Cell } from 'lanli-ui';

const app = createApp();
app.use(Cell);
```

## 按需引用 / 演示
```html
<template>
<div class="box">
  <lan-cell title="姓名" value="张三" @click="clickfn"></lan-cell>
  <lan-cell title="性别" value="女"  @click="clickfn"></lan-cell>
  <lan-cell title="年龄" value="20"  @click="clickfn"></lan-cell>
  <lan-cell title="身高" value="180" valueIcon="ArrowRight" @click="clickfn"></lan-cell>
  <lan-cell title="详细介绍" :label="contetn1" @click="clickfn"></lan-cell>
</div>

<div class="box">
  <lan-cell type="1" title="城市" titleWidth="50px" value="杭州" :label="contetn" :alowHtml="true"></lan-cell>
  <lan-cell type="1" title="城市" titleWidth="50px" value="杭州" :label="contetn" :alowHtml="true"></lan-cell>
</div>

<div class="box">
  <lan-cell type="val-tit" value="内容标题" :label="contetn1" titleIcon="select"></lan-cell>
  <lan-cell type="val-tit" value="内容标题" :label="contetn1" valueIcon="select"></lan-cell>
  <lan-cell type="val-tit" :label="contetn1" valueIcon="select"></lan-cell>
</div>

<div class="box">
  <lan-cell
    type="1"
    value="内容标题"
    :label="contetn1"
    valueIcon="CirclePlus"
    titleIcon="CircleCheck"
    class="cleesorange"
  ></lan-cell>
  <lan-cell
    type="1"
    :label="contetn1"
    valueIcon="CirclePlus"
    titleIcon="WarningFilled"
    class="cleesgreen"
  ></lan-cell>
</div>

<div class="box">
  <lan-cell
    type="tit-val"
    title="我是标题"
    value="内容"
    :label="contetn"
    :alowHtml="true"
    valueIcon="select"
  ></lan-cell>
</div>

</template>
<script lang="ts">
import { Cell } from 'lanli-ui';
components:{Cell}
...
setup(){
  const contetn = reactive('你好你好<span style="color:#f60">100</span>你好你好你好你好你好你好你好你好');
  const contetn1 =reactive("发的发神经发的开发商的发少得可怜房间数接口了发斯蒂芬可接受的泛嘉胜");
  clickfn() {
    alert(0);
  }
    return {
      contetn,
      contetn1,
      clickfn
    };
}
</script>
```




