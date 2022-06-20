
# Toast
## 全局安装
setup中只能导入使用
```js
import { createApp } from 'vue';
import { Rate } from 'lanli-ui';

const app = createApp();
app.use(Rate); // this.$toast(...)
```

## 按需引用 / 演示
```html
<script>
import { Rate } from 'lanli-ui';
components: {lanRate: Rate}

</script>
<template>
  >默认用法:
  <lan-rate v-model="value1" />
  

  更改颜色
  <lan-rate v-model="value2" color="green" initColor="#999" />
  
  间距
  <lan-rate v-model="value2" color="green" initColor="#999" space="50px" />

  更改尺寸
  <lan-rate v-model="value3" size="10px" color="pink" initColor="#999" />
  <lan-rate v-model="value4" size="20px" color="red" initColor="#999" />
  <lan-rate v-model="value5" size="30px" color="green" initColor="#999" />

  更改图标
  <lan-rate
    v-model="value6"
    color="green"
    initColor="#999"
    icon="DrillFilled"
  />
  
  图标为图片地址
  <lan-rate
    v-model="value6"
    color="green"
    initColor="#999"
    initIcon="https://fanjiaxing.com/favicon.ico"
    :icon="require('@/assets/logo.png')"
  />

  disable
  <lan-rate v-model="value8" disabled disabledColor="#d8d8d8" />

  readonly 1分
  <lan-rate v-model="value9" color="green" readonly />

  拖动：
  <lan-rate
    v-model="value5"
    ismove
    color="green"
    initColor="#999"
    space="30px"
  />
  
  拖动下禁用：
  <lan-rate
    v-model="value3"
    ismove
    color="pink"
    initColor="#999"
    disabled
    disabled-color="orange"
  />
  
  拖动下只读：
  <lan-rate
    v-model="value4"
    ismove
    color="red"
    initColor="#999"
    readonly
  />
  
  半星
  <lan-rate
    v-model="value12"
    size="40px"
    ismove
    color="red"
    initColor="#999"
    allowHalf
    space="10px"
  />
  
  半心
  <lan-rate
    v-model="value13"
    size="30px"
    ismove
    color="green"
    initColor="#999"
    allowHalf
    space="39px"
    icon="heart"
  />
  

  <div>小数(只支持只读状态)</div>
  <lan-rate
    v-model="process"
    size="20px"
    readonly
    icon="star"
    decimal
    initColor="#bbb"
  />
 
  <lan-rate
    v-model="process1"
    size="50px"
    decimal
    color="orange"
    readonly
  />
  
  <lan-rate
    v-model="process2" size="50px"
    decimal icon="heart"
    color="blue"
    readonly
  />
</template>
<script lang="ts">
import { Rate } from 'lanli-ui';
...

</script>
```


## API
### Props
|参数|说明|类型|默认值|
|--|--|--|--|
|modelValue| v-model双向绑定 |0|
|count|图标个数|number |5|
|size|宽度| string |20px|
|space|间距| string |5px|
|initColor|颜色-未选中| string |#999|
|color|颜色-选中| string |#ff6600|
|disabledColor|禁用颜色| string |#c8c9cc|
|initIcon|图标-未选中| string |""|
|icon|图标-选中| string |"star-filled"|
|disabled|是否禁用| Boolean |false|
|readonly|只读状态,可以设置小数| Boolean |false|
|ismove|拖动| Boolean |false|
|allowHalf|半星| Boolean |false|
|decimal|小数| Boolean |false|


### Event
|参数|说明|默认值|
|--|--|--|
|click|rate点击事件|null|




