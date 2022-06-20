
# Icon

## 全局安装
setup中只能导入使用
```js
import { createApp } from 'vue';
import { Icon } from 'lanli-ui';

const app = createApp();
app.use(Icon); // 界面上使用 <lan-icon-select />
```

## 按需引用 / 演示
```html
<template>
    普通用法: 
    <div class="icons">
        <lan-icon name="close" />
        <lan-icon name="user-filled" />
        <lan-icon name="star" />
    </div>

     设置尺寸size (px/rem/em)
    <div class="icons">
      <lan-icon name="WarningFilled" size="10px" />
      <lan-icon name="WarningFilled" size="20px" />
      <lan-icon name="WarningFilled" size="30px" />
    </div>

     设置颜色color 
    <div class="icons">
      <lan-icon name="WarningFilled" color="red" />
      <lan-icon name="WarningFilled" color="orange" />
      <lan-icon name="WarningFilled" color="green" />
    </div>

    设置标记
    <div class="icons">
      <div><lan-icon name="WarningFilled" dot /></div>
      <div><lan-icon name="WarningFilled" badge="30" /></div>
      <div><lan-icon name="WarningFilled" badge="999+" /></div>
    </div>

     设置图标 （图标名称、图片链接）
    <div class="icons">
      <lan-icon name="drill-filled" color="green" size="4rem" />
      <lan-icon name="https://fanjiaxing.com/favicon.ico" size="4rem" />
      <lan-icon :name="require('@/assets/logo.png')" size="4rem" />
    </div>

    事件
    <div class="icons">
      <lan-icon
        name="drill-filled"
        color="green"
        size="4rem"
        @click="() => {console.log('...')}"
      />
    </div>
</template>

<script lang="ts">
import { Icon } from 'lanli-ui';
...
components:{LanIcon: Icon},
setup(){ ... }
</script>
```





