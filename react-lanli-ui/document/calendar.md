
# Calendar

## 引用 / 演示
```js
import { Component } from "react";
import  { Calendar, Popup } from 'react-lanli-ui';
import moment from 'moment';

export default class App extends Component {
    state = {
        defaultDate2: ["2022-03-11", "2022-03-15"],
        defaultDate1: ["2022-03-11"],
        show: false,
        arr: []
    }

    dChoose(date: string) {
        let arr = [...this.state.defaultDate2];
        // 重新选择区间
        if (arr.length >= 2) {
            arr = [];
        }

        arr.push(date);

        // 后面的日期大于前面的日期就移除前面的日期
        if (arr.length == 2 && moment(arr[0]).diff(moment(arr[1])) > 0) {
            arr.shift();
        }

        this.setState({
            defaultDate2: arr,
        })
    };
    dChoose1(date) {

        this.setState({ defaultDate1: [date] })
    }
    close() {
        console.log(this.state.defaultDate2);

        this.setState({ arr: this.state.defaultDate2 })
        this.setState({ show: false })
    }
    render() {
        return (
            <div className="btn-box">

                <div className="calendar-show">
                    <button className="btn" onClick={() => { this.setState({ show: true }) }}>区间日历{this.state.arr.join(',')}</button><br /><br /><br />

                    单选日历：{this.state.defaultDate1}
                    <Calendar minDate="2022-03-09"
                        maxDate="2022-05-19"
                        defaultDate={this.state.defaultDate1}
                        isShowSectionBg={true}
                        monthFormatter="YYYY-MM"
                        dateFormatter="DD日"
                        startWeek={1}
                        onChoose={(data) => { this.dChoose1(data) }} />

                    <Popup show={this.state.show} onMaskClick={() => { this.setState({ show: false }) }} position="down" popupStyle={{ height: "60%" }}>
                        {this.state.show ?
                            <div style={{ paddingBottom: '40px' }}>
                                <Calendar minDate="2022-03-09"
                                    maxDate="2022-05-19"
                                    defaultDate={this.state.defaultDate2}
                                    isShowSectionBg={true}
                                    monthFormatter="YYYY-MM"
                                    dateFormatter="DD"
                                    startWeek={1}
                                    onChoose={(data) => { this.dChoose(data) }} />
                                <div className="bottom-btn" onClick={() => { this.close() }}>确定</div>
                            </div>
                            : ""}

                    </Popup>
                </div>

            </div>
        )
    }

}
```


## API

|参数|说明|类型|默认值|
|--|--|--|--|
|show|展示|boolean|false|
|minDate|最小日期|string|today|
|maxDate|最大日期|string|从今天起,往后一个月|
|defaultDate|默认选中的日期|array|[]|
|isShowSectionBg|选择区间是否显示背景色|boolean|true|
|style|弹出层的样式|object|{}|
|monthFormatter|月份的格式化方式|string|YYYY年MM月|
|dateFormatter|月份的格式化方式|string|DD|
|startWeek|从周几开始,0:周日/1:周一|number|1|
|className|类名字|string|""|


## event
|参数|说明|默认值|
|--|--|--|--|
|onChoose|选择日期|null|

