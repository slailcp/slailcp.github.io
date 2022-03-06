
# Layer

## 全局安装
setup中只能导入使用
```js
import { createApp } from 'vue';
import { Layer } from 'lanli-ui';

const app = createApp();
app.use(Layer); // this.$layer(...)
```

## 按需引用 / 演示
```html
<script lang="ts">
import { Layer } from 'lanli-ui';
...
setup(){
    const fn1 = () => {
        Layer({message:"你好"}) // Layer.alert({message:"你好"})
    }

    const fn2 = () => {
        Layer.confirm({
            title:"警告!!!",
            message: "<span style='color:orange'>真的要删除吗?</span>",
            className: "app-home-confirm",
            allowHtml: true,
            lockScroll: true,
            beforeClose: (action) => {
                if (action === "confirm") { return false; } // 点击确认按钮的时候,阻止弹出层关闭
            },
            cancelButtonText: "取消",
            confirmButtonText: "点错了啊",
        })
        .then((ret) => {
          console.log(ret); // 点击确定按钮
        })
        .catch((ret) => {
          console.log(ret); // 点击取消按钮
        });
    }

    const fn3 = () => {
        Layer.confirm({
            message: "真的要删除吗?",
            beforeClose: (action) => {
                // 返回Promise
                return new Promise((resolve) => {
                setTimeout(() => {
                    if (action === "confirm") {
                    resolve(true);
                    } else {
                    resolve(false);
                    }
                }, 1000);
                });
            }
        })
    }

    return {
        fn1, fn2, fn3
    }
}
</script>
```


## API
### Props
|参数|说明|类型|默认值|
|--|--|--|--|
|title|标题|string|提示|
|width|宽度| string/number |''|
|message|文案| string |''|
|className|toast的classname| string |''|
|allowHtml|是否允许传入html标签| boolean |false|
|lockScroll|是否锁定滚动条| boolean |false|
|cancelButtonText|取消按钮文字| string |取消|
|confirmButtonText|确定按钮文字| string |确认|
|showConfirmButton|确定按钮是否显示| boolean |true|
|showCancelButton|取消按钮是否显示| boolean |false|

### Event
|参数|说明|默认值|
|--|--|--|
|beforeClose|弹出之前的回调|null|


