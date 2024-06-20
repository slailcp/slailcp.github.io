# 常见问题 
## vite 报错 define is not defined
1.0.8以及以上版本兼容vite

## uni-app 打包的项目报 Cannot read property 'CustomEvent' of undefined
uni-app 项目打包成 APP 端的时候，由于 uni-app 不支持 window, Event 等，所以打包的时候会出现 `Cannot read property 'CustomEvent' of undefined` 等报错                            
**解决方法**:可以使用 uni-app 将项目打包成 h5，然后使用 hbuilder 将 h5 项目转成 APP，这样就没问题啦!     
步骤如下: 
manifest.json 修改基础路径(确保能本地运行)
```json
	"name": "..",
	"appid": "..",
	...
	"h5":{
		"router":{
			"base":"./"
		}
	},
	...
```
然后npm run build:h5
最后将打包出来的文件用 hbuilder 转成 apk 就可以啦
如何打包成 APP 可以参考[这里](https://blog.csdn.net/sllailcp/article/details/118397743)

如果是 hubilder 创建的项目，可以参考下面这篇文章
[在uni-app里使用tv-focusable打包apk时报错如何解决](https://blog.csdn.net/sllailcp/article/details/119939974)

## 如何控制滚动速度
当遥控器按键一直按着不松手，默认请情况下会滚动很快，想要控制滚动速度，这个时候可以设置scrollSpeed来控制滚动速度，scrollSpeed是以毫秒为单位，越大滚动越慢
```js
$tv.scrollSpeedX = 200; // 不设置的话，默认为0
$tv.scrollSpeedY = 500; // 不设置的话，默认为0

当水平和垂直方向速度一样的时候，可以这么设置
$tv.scrollSpeed = 200;
```
**注：当页面上的标签非常多的情况下，长按上下左右键时会因为机顶盒性能问题而出现不同程度的卡顿，这时将 scrollSpeed 设置一个合适的值能在一定程度上缓解卡顿问题**

## 如何阻止焦点移动
当遥控器按下上下左右键的时候，事件会有一个 event.target 参数.这个 event.target 就是自身的意思。可以调用 $tv.requestFocus(event.target);方法，指定让自己获取焦点来达到目的。  
拿 vue 举例，其它平台同理：
```vue
<div v-focusable class="div_item" @down="testDown($event)" >a</div>
<div v-focusable class="div_item" @down="testDown($event)" >b</div>
testDown(event){ // 按下时阻止焦点移动，其它方向同理
    this.$tv.requestFocus(event.target); 
};
```
## 监听返回键问题
可以看下这篇文章：[移动端网页监听返回键](https://blog.csdn.net/Aislli/article/details/81178562)

## uniapp开发相关问题
uni-app 在非 h5 端开发时，会去掉浏览器自带的一些对象,所以需要先将项目打包成 h5，然后再将 h5 转成 apk 才行，否则会报错，参考链接如下：                     
[在uni-app里使用tv-focusable打包apk时报错如何解决](https://blog.csdn.net/sllailcp/article/details/119939974)
[h5打包成apk](https://blog.csdn.net/sllailcp/article/details/118397743)

## 返回上一页，记录上一个页面已经聚焦的容器
可以使用 `$tv.readXPath(focusableEl);` 获取当前聚焦的 el 的 xpath 路径,如下：
```js
// 跳转页面的时候调用下面的方法保存当前焦点。
var xpathstr = this.$tv.readXPath(document.querySelector("[focused]"));
sessionStorage.setItem('xpath',xpathstr)

// 结果是类似  '//*[@id="app"]/div[2]/div[1]'  的字符串，返回到上一个页面，让记录的焦点恢复聚焦状态
this.$tv.requestFocus(this.$tv.getElementByPath(sessionStorage.getItem('xpath')))
```
**此处只是提供一个思路，你还可以根据自己的业务使用其它方案来实现；**

## keepalive 返回缓存的页面,调用 requestFocus 无效的解决方案
先去掉页面上已经聚焦的 focused,然后再调用 requestFocus; 如下:
```js
  beforeRouteLeave(to, from, next) {
    if(!document.querySelector("[focused]")) return;
    sessionStorage.setItem(
      "focusXpath",
      this.$tv.readXPath(document.querySelector("[focused]"))
    );

    // 去掉焦点,如果requestFocus(el)的这个el上存在焦点,则不会再次触发requestFocus
    document.querySelector("[focused]").removeAttribute("focused");
    next();
  },
  activated() {
    this.$nextTick(() => {
      this.$tv.distanceToCenter = true;
      this.$tv.scrollEl = document.querySelector(".wraper");

      // 设置焦点
      const focusXpath = sessionStorage.getItem("focusXpath");
      if (focusXpath && this.$tv.getElementByPath(focusXpath)) {
        this.$tv.requestFocus(this.$tv.getElementByPath(focusXpath),false); 
        sessionStorage.removeItem("focusXpath")
      }
    });
  },
```

## 如果你还有问题，可加入群聊交流讨论
Q群 377202993  备注: focusable  