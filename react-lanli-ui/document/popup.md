
# Popup

## 引用
```js
class App extends Component {
    state = {
        toggle1: false,
        toggle2: false,
        toggle3: false,
        toggle4: false,
        toggle5: false,
    }
    open1() {
        this.setState({ toggle1: true })
    }
    open2(type) {
        if (type === 'up') this.setState({ toggle2: true })
        if (type === 'down') this.setState({ toggle3: true })
        if (type === 'left') this.setState({ toggle4: true })
        if (type === 'right') this.setState({ toggle5: true })
    }


    render() {
        return (
            <div className="btn-box">
                <div className="popup-show">
                    <button className="btn" onClick={() => { this.open1() }}>普通使用</button><br />
                    <button className="btn" onClick={() => { this.open2("up") }}>顶部</button><br />
                    <button className="btn" onClick={() => { this.open2("down") }}>底部</button><br />
                    <button className="btn" onClick={() => { this.open2("left") }}>left</button><br />
                    <button className="btn" onClick={() => { this.open2("right") }}>right</button><br />


                    <Popup show={this.state.toggle1} onMaskClick={() => { this.setState({ toggle1: false }) }} position="center">
                        <div ><h4>你好</h4></div>
                    </Popup>

                    <Popup show={this.state.toggle2} onMaskClick={() => { this.setState({ toggle2: false }) }} position="up">
                        <h4>你好</h4>
                    </Popup>
                    <Popup show={this.state.toggle3} onMaskClick={() => { this.setState({ toggle3: false }) }} position="down">
                        <h4>你好</h4>
                    </Popup>
                    <Popup show={this.state.toggle4} onMaskClick={() => { this.setState({ toggle4: false }) }} position="left" popupStyle={{ width: "60%" }}>
                        <h4>你好</h4>
                    </Popup>
                    <Popup show={this.state.toggle5} onMaskClick={() => { this.setState({ toggle5: false }) }} position="right" popupStyle={{ width: "60%" }}>
                        <h4>你好</h4>
                    </Popup>
                </div>
            </div>
        )
    }

}
```

## API
### Props
|参数|说明|类型|默认值|
|--|--|--|--|
|show|展示|boolean|false|
|position|弹出出来的位置，up,down,left,right|string|'center'|
|popupStyle|弹出层的样式|object|{}|
|className|class名字|object|{}|


### Event
|参数|说明|默认值|
|--|--|--|
|onMaskClick|mask点击事件|null|





