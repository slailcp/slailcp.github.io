
# Modal

## 引用 / 演示
```js
import {Modal} from 'react-lanli-ui'
 class App extends React.Component {
    open1() {
      lanliUiNew.Modal.alert({ message: "你好" })
    }
    open2() {
      lanliUiNew.Modal.confirm({
        title: "小提示",
        message: "你好",
        beforeClose: (type) => {
          if (type === 'cancel') {
            return false;
          }
        }
      }).then((ret) => {
        console.log(ret);
      }).catch((ret) => {
        console.log(ret);
      })
    }
    open3() {
      lanliUiNew.Modal.confirm({
        title: "小提示",
        message: "你好",
        beforeClose: (type) => {
          if (type === 'cancel') {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(false)
              }, 500)
            })
          }
        }
      }).then((ret) => {
        console.log(ret);
      }).catch((ret) => {
        console.log(ret);
      })
    }
    render() {
      return (
        <div>
          <button className="btn" onClick={() => { this.open1('center') }}>普通使用</button><br />
          <button className="btn" onClick={() => { this.open2() }} > 按钮阻止关闭</button ><br />
          <button className="btn" onClick={() => { this.open3() }} > 按钮异步</button > <br />
        </div >
      )
    }
  }
```


## API
### Props
|参数|说明|类型|默认值|
|--|--|--|--|
|title|标题|string|提示|
|message|文案| string |''|
|btnEnterMessage|确定按钮文字| string |'确定'|
|cancelEnterMessage|取消按钮文字| string |取消|

### Event
|参数|说明|默认值|
|--|--|--|
|beforeClose|弹出之前的回调，支持异步promise|null|
|compelete|关闭之后|null|
