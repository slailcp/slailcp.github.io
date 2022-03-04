
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
    我是一个图标哦: <lan-icon-select />
</template>

<script lang="ts">
import { IconSelect } from 'lanli-ui';
...
components:{LanIconSelect: IconSelect},
setup(){ ... }
</script>
```




