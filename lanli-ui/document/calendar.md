
# calendar

## 全局安装
```js
import { createApp } from 'vue';
import { Calendar } from 'lanli-ui';

const app = createApp();
app.use(Calendar);
```
## 按需引用
```html
<lan-calendar
    minDate="2022-03-09"
    maxDate="2022-03-19"
    :defaultDate="defaultDate1"
    monthFormatter="YYYY-MM"
    dateFormatter="DD"
    :startWeek="0"
    @choose="choose"
/>
<script lang="ts">
import { Calendar } from 'lanli-ui';
...
components:{lanCalendar: Calendar},
setup(){}
</script>
```

## 演示
```html
选择的时间
<lan-calendar
    minDate="2021-03-09"
    maxDate="2021-03-19"
    :defaultDate="defaultDate1"
    monthFormatter="YYYY-MM"
    dateFormatter="DD"
    :startWeek="0"
    @choose="choose"
  />

弹窗选择的区间
<lan-popup v-model:show="toggle1" position="down"  :style="{ height: '60%'}"> 
  <lan-calendar
      minDate="2021-03-09"
      maxDate="2021-05-19"
      :defaultDate="defaultDate2"
      :isShowSectionBg="true"
      monthFormatter="YYYY月MM日"
      dateFormatter="DD日"
      @choose="dChoose"
    />
</lan-popup>

<script>
 setup() {
    const state = reactive({
      defaultDate1: ["2022-03-09"],
      defaultDate2: [],
      toggle1: false,
    })
    const choose = (date) => {
      state.defaultDate1 = [date];
    }
    const dChoose = (date) => {
      let arr = state.defaultDate2;
      if (arr.length >= 2) { arr = []; }
      arr.push(date);
      if (arr.length == 2 && moment(arr[0]).diff(moment(arr[1])) >= 0) {
        arr.shift();
      }
      state.defaultDate2 = arr;
      if (arr.length === 2) {
        state.toggle1 = false;
      }
    }
    return {
      ...toRefs(state),
      choose,
      dChoose
    }
 }
</script>
```

## API
|参数|说明|类型|默认值|
|--|--|--|--|
|show|展示|boolean|false|
|minDate|最小日期|string|today|
|maxDate|最大日期|string|从今天起,往后一个月|
|isShowSectionBg|选择区间是否显示背景色|boolean|true|
|style|弹出层的样式|object|{}|
|monthFormatter|月份的格式化方式|string|YYYY年MM月|
|dateFormatter|月份的格式化方式|string|DD|
|startWeek|从周几开始,0:周日/1:周一|number|1|
|className|类名字|string|""|


## event
|参数|说明|默认值|
|--|--|--|--|
|choose|选择日期|null|



