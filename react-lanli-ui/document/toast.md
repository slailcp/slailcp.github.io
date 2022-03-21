
# Toast

## 引用
```html
<script lang="ts">
import {Toast} from 'react-lanli-ui'
let toastindex = null;
function App(){
    function open1(){
      Toast.show({
        message: "你好",
      })
    }
    function open2(){
      Toast.show({
        message: "此toast需要5秒后关闭",
        duration: 5000
      })
    }
    function open3(){
      toastindex = lanliUiNew.Toast.show({
        type: 'loading',
        message: "此toast需要手动关闭哦",
      })
    }
    function close3(){
     Toast.close(toastindex)
    }
    function open4(){
      Toast.show({
        message: "你好",
        shade: true
      })
    }
    return <div>
        <button onClick={() => { open1() }}>普通使用</button><br />
          <button onClick={() => { open2() }}>5秒后关闭</button><br />
          <button onClick={() => { open3() }}>你好</button>
          <button onClick={() => { close3() }}>手动关闭</button><br />
          <button onClick={() => { open4() }}>加上mask层</button><br />
    </div>
}

</script>
```


## API




