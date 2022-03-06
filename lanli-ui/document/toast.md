
# Toast
## 全局安装
setup中只能导入使用
```js
import { createApp } from 'vue';
import { Toast } from 'lanli-ui';

const app = createApp();
app.use(Toast); // this.$toast(...)
```

## 按需引用 / 演示
```html
<script lang="ts">
import { Toast } from 'lanli-ui';
...
setup(){
    const fn1 = () => {
        Toast({message:"你的校验不通过哦"})
    }

    const fn2 = () => {
        Toast({
            message:"你的校验不通过哦",
            duration: 5000,
            shade: false,
        })
    }

    const fn3 = () => {
        Toast({
            type:"success"
            message:"执行成功！",
            duration: 5000
        })
    }

    const fn4 = () => {
        Toast({
            type:"loading"
            message:"数据正在加载中"
        })
    }

    return {
        fn1, fn2, fn3, fn4
    }
}
</script>
```


## API
### Props
|参数|说明|类型|默认值|
|--|--|--|--|
|type|toast类型|('loading' / 'success' / 'fail' / 'text')|'text'|
|width|宽度| string/number |''|
|message|文案| string |''|
|duration|多少毫秒后关闭| number |2000|
|shade|背景mask是否展示| boolean |true|
|shadeClassName|背景mask的classname| string |''|
|className|toast的classname| string |''|
|allowHtml|是否允许传入html标签| boolean |false|
|position|展示的位置| 'top' / 'bottom' / 'center' |'center'|

### Event
|参数|说明|默认值|
|--|--|--|
|onOpened|弹出之前的回调|null|
|onClose|关闭时的回调|null|




