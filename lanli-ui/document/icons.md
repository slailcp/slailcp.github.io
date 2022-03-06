
# Icons

## 全局安装
setup中只能导入使用
```js
import { createApp } from 'vue';
import { Icons } from 'lanli-ui';

const app = createApp();
app.use(Icons); // 界面上使用 <lan-icon-select />
```

## 按需引用 / 演示
```html
<template>
    我是图标哦:
    <lan-icon-arrow-down class="icon" />
    <lan-icon-arrow-down-bold class="icon" />
    <lan-icon-arrow-left class="icon" />
    <lan-icon-arrow-left-bold class="icon" />
    <lan-icon-arrow-right class="icon" />
    <lan-icon-arrow-right-bold class="icon" />
    <lan-icon-arrow-up class="icon" />
    <lan-icon-arrow-up-bold class="icon" />
    <lan-icon-back class="icon" />
    <lan-icon-bottom class="icon" />
    <lan-icon-circle class="icon" />
    <lan-icon-circle-check class="icon" />
    <lan-icon-circle-check-filled class="icon" />
    <lan-icon-circle-close class="icon" />
    <lan-icon-circle-close-filled class="icon" />
    <lan-icon-circle-plus class="icon" />
    <lan-icon-circle-plus-filled class="icon" />
    <lan-icon-close class="icon" />
    <lan-icon-close-bold class="icon" />
    <lan-icon-minus class="icon" />
    <lan-icon-plus class="icon" />
    <lan-icon-remove class="icon" />
    <lan-icon-remove-filled class="icon" />
    <lan-icon-select class="icon" />
    <lan-icon-top class="icon" />
    <lan-icon-trig-bottom class="icon" />
    <lan-icon-trig-left class="icon" />
    <lan-icon-trig-right class="icon" />
    <lan-icon-trig-top class="icon" />
    <lan-icon-warning class="icon" />
    <lan-icon-warning-filled />
</template>

<script lang="ts">
import { IconSelect } from 'lanli-ui';
...
components:{LanIconSelect: IconSelect},
setup(){ ... }
</script>
```




