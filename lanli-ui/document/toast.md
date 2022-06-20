
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
    const open1 = (type) => { Toast({ position: type, message: "你的校验不通过哦", }) }
    const open2 = () => {
      Toast({
        message: "<span style='color:orange'>你的校验不通过哦</span>",
        allowHtml: true,
        duration: 5000,
        shade: true,
      })
    }
    const open3 = (str) => {
      Toast({
        type: str,
        message: `执行${str === 'fail' ? '失败' : '成功'}！`,
        duration: 5000
      })
    }

    const open4 = () => {
      var i = Toast({
        type: "loading",
        message: "数据正在加载中"
      })

      setTimeout(() => {
        Toast.close(i)
      }, 3000)

    }
    return {
      open1,
      open2,
      open3,
      open4,
    };
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




