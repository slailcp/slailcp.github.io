
# Button
## 全局安装
setup中只能导入使用
```js
import { createApp } from 'vue';
import { Button } from 'lanli-ui';

const app = createApp();
app.use(Button);
```

## 按需引用 / 演示
```html
<script lang="ts">
import { Button } from 'lanli-ui';
components:{Button}

</script>
<template>
<lan-button type="success">success</lan-button>
    <lan-button type="warning">warning</lan-button>
    <lan-button type="danger">danger</lan-button>
    <lan-button>default</lan-button>
    <lan-button type="primary">primary</lan-button>
    <hr />
    <div>size:</div>
    <lan-button type="primary" size="large">warning</lan-button>
    <lan-button type="primary">warning</lan-button>
    <lan-button type="primary" size="small">danger</lan-button>
    <lan-button type="primary" size="mini">default</lan-button>
    <hr />
    <div>radius:</div>
    <lan-button type="primary" radius="40px">radius</lan-button>
    <hr />
    <div>disabled:</div>
    <lan-button type="primary" disabled>disabled</lan-button>
    <hr />
    <div>bgColor:</div>
    <lan-button type="primary" :disabled="false" bgcolor="linear-gradient(to right,blue, orange)">2</lan-button>
    <hr />
    <div>borderColor:</div>
    <lan-button border-color="#000" radius="20px" color="#000" bg-color="linear-gradient(to bottom,red, orange)">2</lan-button>
    <hr />
    <div>icon:</div>
    <lan-button type="danger" icon="arrow-down">arrow-down</lan-button>
    <lan-button type="primary" icon="warning">icon-warning</lan-button>
    <lan-button type="primary" icon="WarningFilled">icon-WarningFilled</lan-button>
    <lan-button type="primary" icon="trigTop">icon-trigTop</lan-button>
    <lan-button type="primary" icon="select">icon-select</lan-button>
    <hr />
    <div>width:</div>
    <lan-button type="danger" width="300px">width</lan-button>
    <hr />
    <div>event:</div>
    <lan-button type="success" @click="bunclick">click</lan-button>
</template>
```



 type: { default: "default", type: String as PropType<ButtonType> },
  icon: { default: "", type: String },
  size: { default: "normal", type: String as PropType<ButtonSize> },
  text: { default: "", type: String },
  bgColor: { default: "", type: String },
  borderColor: { default: "", type: String },
  color: { default: "", type: String },
  disabled: { default: false, type: Boolean },
  radius: { default: "", type: String },
  width: { default: "", type: String },
  style: { default() { return {} }, type: Object },

## API
### Props
|参数|说明|类型|默认值|
|--|--|--|--|
|type|类型|("primary" / "success" / "warning" / "danger" / "default")|'default'|
|icon|图标| string |''|
|size|尺寸| string /"large" / "small" / "mini"/ "normal"| "normal"|
|text|文字| string |''|
|bgColor|背景色| string |''|
|borderColor|边框色| string |''|
|color|文字颜色| string |''|
|disabled|是否禁用| Boolean |false|
|radius|圆角| string |""|
|width|宽| string |""|
|style|样式| object |{}|

### Event
|参数|说明|默认值|
|--|--|--|
|click|点击事件|null|




