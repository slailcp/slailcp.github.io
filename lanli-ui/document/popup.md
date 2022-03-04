
# Popup

## 全局安装
```js
import { createApp } from 'vue';
import { Popup } from 'lanli-ui';

const app = createApp();
app.use(Popup);
```
## 按需引用
```html
<lan-popup v-model:show="toggle" :position="position"> 
    <h1>你是个大傻子</h1>
</lan-popup>
<script lang="ts">
import { Popup } from 'lanli-ui';
...
components:{lanPopup: Popup},
setup(){}
</script>
```

## 演示
```html
<lan-popup v-model:show="toggle" :position="position"> 
    <h1>你是个大傻子</h1>
</lan-popup>

<script lang="ts">
    setup(){
        const state = reactive({
            toggle:false,
            position: "up" // up | down | left | right | center default:center
        })
        return {
        ...toRefs(state)
        }
    }
</script>
```

## API
|参数|说明|类型|默认值|
|--|--|--|--|
|show|展示|boolean|false|
|position|弹出出来的位置|string|'center'|
|style|弹出层的样式|object|{}|










