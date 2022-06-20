
# Picker
## 全局安装
setup中只能导入使用
```js
import { createApp } from 'vue';
import { Picker } from 'lanli-ui';

const app = createApp();
app.use(Picker);
```

## 按需引用 / 演示
```html
<template>
  <lan-button type="success" @click="dateshow = !dateshow">选择时间</lan-button>
  <lan-button type="success" @click="cityShow = !cityShow">选择城市</lan-button>

 <Popup v-model:show="cityShow">
    <lan-picker
      mode="selector"
      :value="0"
      :range="cityObj"
      range-key="value"
      @change="cityChange"
      @confirm="cityConfirm"
      @cancel="cityShow = false"
    />
  </Popup>

  <Popup v-model:show="dateshow">
    <div class="loading" v-show="!dateTimeArray.length">加载中...</div>
    <lan-picker
      v-show="dateTimeArray.length"
      mode="multiSelector"
      :value="dateTimeIndex"
      :range="dateTimeArray"
      range-key="name"
      @change="dateTimeChange"
      @confirm="dateTimeConfirm"
      @cancel="dateshow = false;"
    />
  </Popup>

</template>
<script lang="ts">
import { Picker, Popup } from 'lanli-ui';
@Options({
  components: {
    lanPicker: Picker,
    Popup,
    lanButton: Button,
    lanIcon: Icon,
  },
})
export default class PickerPage extends Vue {
  dateshow = false;
  cityShow = false;
  chooseCityData = "";
  chooseDateData = "";

  cityObj: any = [
    { name: 1, value: "北京" },
    { name: 2, value: "上海" },
    { name: 3, value: "广州" },
    { name: 4, value: "深圳" },
    { name: 6, value: "杭州" },
    { name: 8, value: "厦门" },
  ];
  dateTimeObj = this.setDate();
  dateTimeArray: any = []; //二维数组，长度是多少是几列
  dateTimeIndex = [0, 4, 7];

  cityChange(e: any) {
    console.log(e);
  }
  cityConfirm(e: any) {
    this.chooseCityData = this.cityObj[e].value;
    this.cityShow = false;
  }
  dateTimeChange(e: any) {
    console.log(e);
  }
  dateTimeConfirm(e: any) {
    const d = this.dateTimeObj.dateArr[e[0]].value;
    const h = this.dateTimeObj.timeHHArr[e[1]].value;
    const m = this.dateTimeObj.timeMMArr[e[2]].value;
    this.chooseDateData = `${d} ${h}:${m}`;

    this.dateshow = false;
  }

  created() {
    setTimeout(() => {
      this.dateTimeArray = [
        this.dateTimeObj.dateArr,
        this.dateTimeObj.timeHHArr,
        this.dateTimeObj.timeMMArr,
      ]; //二维数组，长度是多少是几列
    }, 3000);
  }

  setDate() {
    const dateArr = [];
    for (let i = 0; i < 50; i++) {
      // 默认50天
      const itemDate = moment().add(i, "day");
      const d = itemDate.day();
      let week = "";
      if (d === 0) {
        week = "日";
      }
      if (d === 1) {
        week = "一";
      }
      if (d === 2) {
        week = "二";
      }
      if (d === 3) {
        week = "三";
      }
      if (d === 4) {
        week = "四";
      }
      if (d === 5) {
        week = "五";
      }
      if (d === 6) {
        week = "六";
      }
      dateArr.push({
        name: `${itemDate.format("MM月DD日")}  周${week}`,
        value: itemDate.format("YYYY-MM-DD"),
      });
    }
    const timeHHArr = [];
    for (let i = 0; i < 24; i++) {
      let str = i < 10 ? `0${i}` : `${i}`;
      timeHHArr.push({ name: str, value: str });
    }

    const timeMMArr = [];
    for (let i = 0; i < 60; i++) {
      let str = i < 10 ? `0${i}` : `${i}`;
      timeMMArr.push({ name: str, value: str });
    }

    return {
      dateArr,
      timeHHArr,
      timeMMArr,
    };
  }
}
</script>
```


## API
### Props
|参数|说明|类型|默认值|
|--|--|--|--|
|show|显示 |false|
|title|标题 |'请选择'|
|mode|单列或者多列 selector/multiSelector |selector |
|range|数组,如果mode=multiSelector,range则是多维数组| Array |[]|
|range-key|需要显示的关键字| string |''|
|value|默认选中,如果mode=multiSelector,value则是数组| number/string/Array[number/string] ||
|className|设置的class|string|''|


### Event
|参数|说明|默认值|
|--|--|--|
|change|change事件|null|
|confirm|confirm事件|null|
|cancel|cancel事件|null|




