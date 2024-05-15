### 简介
react-tv-focusable 是适用于在 TV 端进行网页开发时管理焦点移动的框架，以简洁的 Api 让前端网页开发就像 android 开发一样自动管理焦点。  
![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/20201016100758392.gif#pic_center)  
[更多案例展示](https://slailcp.github.io/focusable/example/index.html)  
[vue-tv-focusable](https://blog.csdn.net/sllailcp/article/details/109044265)
[ng-tv-focusable](https://blog.csdn.net/sllailcp/article/details/109445268)

### 安装
```
npm i -S react-tv-focusable          
```


### 如何使用
```js
<div focusable="">可获取焦点的元素</div>
<div>不可获取焦点的元素</div>
```
别急，现在还看不到焦点效果，因为你还没设置聚焦的样式呢。

#### 设置焦点的样式
聚焦的元素会被加上一个 `class="focus"` (你可以自己定义 className，默认为 focus)，现在你应该知道要做什么了，给 focus 设置个独特的样式就好了。
例如这样：
```js
  <div class="demo">
    <div class="item" focusable=""></div>
    <div class="item" focusable=""></div>
    <div class="item" focusable=""></div>
    ...
  </div>
...
.focus {
  transform: scale(1.1);
  border: 2px solid red;
  box-shadow: 0 0 20px red;
}
```
![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/20201013104506375.gif#pic_center)  
好了，这样就设置完了，现在你按方向键时焦点就会自动移动到下一个目标元素上了，很简洁吧~

#### 获取 focusable 的引用
如何在 react 里获取库的引用以使你能调用库提供的相关 api
```js
// page.js
import { $tv } from 'react-tv-focusable';

// 也可以设置成一个全局变量
// index.js
import { $tv } from 'react-tv-focusable';
window.$tv = $tv;
```

#### 指定焦点移到到某一个元素上
上面的演示中，最开始时第一个元素获取了焦点，实际上你在使用时，库并不会在页面渲染完成后主动帮你聚焦到第一个或某个元素上，这个由你自己来指定似乎更加合适，你可以用下面的方法来指定焦点移动到某个元素上：
```js
window.$tv.requestFocus(Element,bool); // Element 必填； bool非必填，默认为true
```
关于第二个参数，设置聚焦时是否需要滚动动画，默认 true 带动画，如果指定的聚焦元素不在窗口可视区域内或未完全显示，聚焦后就会被滚动到可视区域内，有些场景下你可能并不想要动画，例如类似 “回到顶部” 的场景，就需要用到这个了，试一下看看吧~    
例如：
```js
<div className="item" ref="myDiv">s</div>
...
componentDidMount() {
  window.$tv.next(this.$refs.myDiv)
  window.$tv.requestFocus(document.querySelector('.item'))
}
```
至于如何获取 Element 就不再展开了，你可以用上面示例中 的 $refs 方式，也可以用 xpath 等很多方式：
```js
// 让第2个div 聚焦
window.$tv.next(window.$tv.getElementByPath('//div[@class="demo"]/div[2]'));
```
一般 TV 端的页面在刚加载完成时，产品都会要求让某一个元素聚焦的，这时你就用上这条 api 了。  
**注意：** 进入页面时想让某个元素聚焦，要在 componentDidMount 回调中进行，否则会因页面未加载完全而导致焦点移动并不如你所愿。

##### XPath 获取 DOM—getElementByPath(string)
react-tv-focusable 提供了 xPath 的方式获取
```js
<body>
    <div class="content">
        <span class="item1" focusable>1</span>
        <span class="item2" focusable>2</span>
        <span class="item3" focusable>3</span>
    </div>
</body>
window.$tv.getElementByPath('//div[@class="content"]/span[2]');
window.$tv.getElementByPath(window.$tv.readXPath(document.querySelector('.item2')));
//结果: <span class="item2">2</span>
```
##### 根据 DOM 反向获取 XPath 路径  —readXPath(el)
react-tv-focusable 根据 DOM 反向获取 XPath 路径 
```js
<body>
    <div class="content">
        <span class="item1" focusable="">1</span>
        <span class="item2" focusable="">2</span>
        <span class="item3" focusable="">3</span>
    </div>
</body>
window.$tv.readXPath(document.querySelector('.item2')) 
window.$tv.readXPath(window.$tv.getElementByPath('//div[@class="content"]/span[2]');) 
//结果: "/html/body/div[1]/span[2]"
```


#### 自定义焦点移动
框架有自己的一套找焦点算法，但有时产品会要求你在某个元素上按遥控器右方向键时让屏幕左下角的某个该死的元素聚焦，那你就要根据产品需求文档来自定义焦点移动了。  
可以使用 @up，@right，@down，@left 这几个属性来指定按遥控器对应方向键时调用的方法，然后自己在方法里通过 next 或 requestFocus（1.x只支持此方法）让目标元素聚焦;

**1.x写法**
如果你在自己的方法里调用了 requestFocus 方法，该库将不再执行默认的焦点移动操作，否则依然帮你执行默认的焦点移动。
示例：
```js
 componentDidMount() {
     window.$tv.getElementByPath('//div[@class="wrapper"]/div[2]').addEventListener("down", this.down);
 }

// 添加down自定义事件
down() {
  //在第2个div上按下方向键时，焦点直接移动到第30个div上
	window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="wrapper"]/div[30]'));
 }
render() {
	return(
		<div class="wrapper">
			<div focusable="">1</div>
			<div focusable="">2向下移到第30个div</div>
			...
			<div focusable="">50</div>
		</div>
	)
}
```
**2.x写法**
只要你给某个标签定义了方向键监听例如 left 事件，那么在此标签上按左键时该库将不会再执行默认的向左焦点移动操作，你可以通过如下用法来移动焦点：
```js
componentDidMount() {
  let el = window.$tv.getElementByPath('//div[@class="wrapper"]/div[2]');
  window.$tv.addFocusableListener(el, "left", this.left);
}
...
left(index: number) {
    if (index === 2) { 
        //和requestFocus功能是一样的,推荐使用next
        window.$tv.next(window.$tv.getElementByPath('//div[@class="wrapper"]/div[30]'))
        //或者如果你想在处理一些事情之后再执行库的默认移动
        setTimeout(() => {
            window.$tv.next("left")
        }, 500);
    }
}
```

![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/20201030164802454.gif#pic_center)  
推荐使用 2.x 的监听，可同时支持同步和异步流程，1.x只支持同步流程。

#### 表单控件，按确定键进行填写
```js
// formAutofocus：默认true
 window.$tv.formAutofocus=false；// 不可以输入
 window.$tv.formAutofocus=true；// 可以输入 
```
![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/6221fa03b653411f9d5a91e37bd2aa6f.gif)


好啦，到这里应该能满足基本所有的 TV 焦点需求了。  





你还在看？？？  
好吧，或许你还有一些别的需求~  


### 其它
#### 初始化
可以在全局或某个页面上配置属性
```js
  // 1.使用init同时配置多个属性
  window.$tv.init({
    focusClassName: "on-focus", // 聚焦元素的className （默认focus）
     KEYS: {
      KEY_LEFT: [37, 21], 
      KEY_UP: [38, 19], 
      KEY_RIGHT: [39, 22], 
      KEY_DOWN: [40, 20],
      KEY_ENTER: [13, 23]
     }, // 自定义键值
     longPressTime: 800, // 长按响应时间（单位：毫秒），默认500ms
     distanceToCenter: false // 使焦点始终在可视范围的中间部分，默认false
  });

  // 2.单独设置某个属性
  componentDidMount(){
    window.$tv.KEYS=  {...};  
    window.$tv.longPressTime= 800;  
  }
```
**警告：**为了不影响通用配置，如果对某页面进行了一些特殊配置，请记住在销毁页面时重置它
```js
componentDidMount(){
    window.$tv.findFocusType  = 0;
}
componentWillUnmount() {
    window.$tv.resetFindFocusType(); //window.$tv.findFocusType  = 1;
}
```
上面列举了几个常用且一般设置成整个项目所有页面通用的属性，可在文档最下方查看所有可配置属性，如果不需要定制属性，无须初始化。  
通常情况下，默认属性就能满足大部分项目的需求。  

下面是几个常用参数使用场景的举例说明：
##### 自定义焦点 class（focusClassName）
你接手了别的组的项目，他们已经把 `focus` 这个词作为普通 className 给用了，而且很多地方都用到了，你一定不愿意把他们的代码里的 focus 改成 focus1,focus2 什么的，以使你可以正常使用该库的 focus 这个名字作为焦点样式。
那就通过初始化里的 focusClassName 属性重新定义一下该库的焦点样式名吧。

##### 自定义键值（KEYS-配置上下左右，enter键值）
不同厂家的遥控器键值可能不一样，有些并未按照 android 键值来实现，而且产品可能要求同时支持遥控器和键盘操作，这时你就需要指定上下左右方向键值了，例如上面配置的 KEY_LEFT: [37, 21] 就是支持键盘上的左箭头键和遥控器左方向键。

##### 自定义找焦点方式（findFocusType，initDis）
findFocusType=1，即默认找最近焦点方式，用默认方式时实际上用不到 initDis 参数  
![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/20201013104411514.gif#pic_center)

findFocusType=0，initDis = 49  
![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/20201013104423300.gif#pic_center)

initDis 为何是 49？只要下一个 div 的横向中心线和当前焦点元素的中心线距离大于 initDis 值，就认为它和当前焦点不在同一水平线上，现在 div2 的横向中心线比 div1 高了 50px，所以如果你不想让用户在 div1 上按右方向键时焦点跑到 div2 上，就可以设置找焦点方式为直线模式，并通过 initDis 来控制偏差范围。

##### 边缘距离（offsetDistance）
到达边缘的时候,给焦点和边缘一个距离.  
当某个未完全显示在窗口可视区域内的元素聚焦时，该库会自动帮你将这个元素滚动到窗口内完全显示，不过默认状态是贴着边缘的，如果你想让它离这个边缘有一个距离，就可以通过这个属性实现了。
```js
window.$tv.offsetDistance = 50 // 完全显示出来后再距离边缘50像素
```
如图:
![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/20201110110738158.gif#pic_center)

#### 局部滚动（setScrollEl/resetScrollEl）   
TV 端网页大多是整个页面滚动，滚动条在浏览器窗口上，如果你的滚动内容是在整个页面的局部某一块，需要指定滚动容器。
**setScrollEl(Element):** 设置滚动的el
**resetScrollEl()：** 重置el，即滚动浏览器的滚动条
举个例子：
```js
<div class="demo">
	... // 可聚焦的div
</div>
// 页面渲染完的时候,设置成div.demo滚动, 调用window.$tv.setScrollEl
window.$tv.scrollEl = window.$tv.getElementByPath('//div[@class="demo"]');
// window.$tv.setScrollEl(window.$tv.getElementByPath('//div[@class="demo"]'));

componentWillUnmount() {
   window.$tv.resetScrollEl(); // 销毁的时候,重置成滚动浏览的滚动条
}
<style>
  .demo {overflow: hidden; width: 400px; height: 400px;}
</style>
```
![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/20201013104345818.gif#pic_center)


#### 自定义事件（上下左右，获取失去焦点，点击事件，长按事件）
```js
// 自定义事件的名字如下:
// react中需要手动绑定如下所示,(自定义事件的名字一定要是下面固定的这几个)
window.$tv.addFocusableListener(el, "left", this.left);
window.$tv.addFocusableListener(el, "right", this.right);
window.$tv.addFocusableListener(el, "up", this.up);
window.$tv.addFocusableListener(el, "down", this.down);
window.$tv.addFocusableListener(el, "onBlur", this.onBlur);
window.$tv.addFocusableListener(el, "onFocus", this.focus);
window.$tv.addFocusableListener(el, "click", this.enter);
window.$tv.addFocusableListener(el, "longPress", this.longPress); // 长按，可以通过longPressTime配置响应时间
```
举例:
```js
  left(index) {
    if(index === 9) {
      console.log('left');
      window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="demo"]/span[18]'))
    }
  }

  up(index) {
    if(index === 6) {
      console.log('up')
      window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="demo"]/span[18]'))
    }
  }

  right(index) {
    if(index === 10) {
      console.log('right')
      window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="demo"]/span[18]'))
    }
  }

  down(index) {
    if(index === 5) {
      console.log('down')
      window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="demo"]/span[18]'))
    }
  }

  enter(index) {
    if(index === 3) {
      console.log('click');
    }
  }

  focus(index, $event) {
    if(index === 27) {
      console.log(`第${28}个将要获取焦点了哦！`)
      console.log($event.detail.el);
    }
  }

  blur(index, $event) {
    if(index === 22) {
      console.log(`第${23}个将要失去焦点了哦！`)
      console.log($event.detail.el);
    }
  }
  longPress() { 
  	console.log('longPress-longPress');
  }
```
注意:
 在react-tv-focusable@2.x版本中必须调用$tv.next('left'|'up'|'right'|'down') ,才能进行获取下一个最近的焦点

![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/20201030171835643.gif#pic_center)


#### 设置属性/重置属性
```js
// 独立配置init里面的每一项，$tv.属性名=xx, 如下：
window.$tv.focusClassName = XX;
window.$tv.offsetDistance = XX;
...

// 重置成插件默认值，reset+属性名()，例如
window.$tv.resetScrollEl();
window.$tv.resetFocusClassName();

//清除所有配置并恢复到插件的默认配置
window.$tv.reset();
...
```

#### 其它可能用到的方法
**元素聚焦状态的全局监听- setOnFocusChangeListener**
```js
window.$tv.setOnFocusChangeListener((element, focus)=>{
    console.log("焦点状态改变的元素：" + element, "聚焦或失去焦点：" + focus)
})
```

**让页面滚动到某个元素的位置**
```js
window.$tv.scrollTo({targetEl: document.querySelector("#page1")})
```
参数说明：  
scrollEl：滚动区域，默认为 document,  
targetEl：需要滚动到哪个元素,  
isCenter：targetEl 是否滚动到屏幕居中的位置,  
offset：距离滚动边界上下左右的偏移,  
smooth：是否开启滚动动画,  
duration：动画耗时，默认200毫秒

#### 所有可配置项
##### 属性
| name | 描述 | 默认值 |
|-|-|---|
| focusableClassName  | 指定可聚焦元素类名(使用class的方式指定)<br>$tv.focusableClassName = "focusable-el";| '' |
| itemAttrname |指定可聚焦元素的属性名(使用属性的方式指定)<br>和上一属性只用其一即可<br>$tv.itemAttrname= "myFocusable"; | focusable |
| focusClassName  | 指定焦点元素类名<br>$tv.focusClassName = "myFocus";| focus |
| findFocusType  | 移动类型，1：就近查找 0：直线查找<br>$tv.findFocusType = 1; | 1 | 
| initDis  | 差值<br>$tv.initDis = 20;  |20| 
| KEYS  | 上下左右的键值<br>$tv.KEYS = {...};  | { KEY_LEFT: [37, 21], KEY_UP: [38, 19], KEY_RIGHT: [39, 22], KEY_DOWN: [40, 20], KEY_ENTER:[13, 23] } | 
| offsetDistance  | 边缘距离（单位px）<br>$tv.offsetDistance = 50; | 50 | 
| longPressTime  | 长按响应时间（单位毫秒）<br>$tv.longPressTime = 500;  | 500 | 
| scrollEl  | 设置可以滚动的el<br>$tv.scrollEl = <element>;  | null | 
| limitingEl  | 整个界面，只有limitingEl内的焦点可以聚焦<br>$tv.limitingEl = <element>;  | null | 
| distanceToCenter  | 焦点是否在滚动区域保持居中显示<br>$tv.distanceToCenter = true;  | false | 
| formAutofocus| 表单控件是否可以输入或者编辑<br>$tv.formAutofocus= false;  | true | 
| smoothTime| 滚动的动画时间<br>$tv.smoothTime= 200;  | 200 | 
| spacingTime| 滚动的动画帧数(数值越小，滚动动画帧数越多，动画更细腻，也会更耗性能)<br>$tv.spacingTime = 20; | 20 | 
| scrollSpeedX|控制水平方向按键速度（单位毫秒）,例如200ms内只执行一次按键事件<br>$tv.scrollSpeedX = 200; | 0 | 
| scrollSpeedY|控制垂直方向按键速度（单位毫秒）<br>$tv.scrollSpeedY = 200; | 0 | 
| scrollSpeed|控制水平和垂直方向按键速度（单位毫秒）<br>$tv.scrollSpeed = 200; | 0 | 

##### 方法
| name | 描述 | 参数类型  |
|-|---|--|
| next(el\|str)  | 执行聚焦操作，可传期望的目标元素或方向标识 | Element 或 string |
| requestFocus(el)  | 执行聚焦操作，已在2.x被next取代 | Element |
| getElementByPath(str) | 使用xPath获取element | string |
| scrollTo(scrollToOption) | 滚动到指定的Dom处 | Object |
| readXPath(el) | 根据DOM反向获取XPath路径 | Element |
| resetScrollEl() | 重置成浏览器滚动 |--|
| resetFocusClassName()  | 重置 focusClassName| --  |
| resetInitDis()| 重置 initDis | -- |
| resetFindFocusType()| 重置 findFocusType | -- |
| resetKEYS()| 重置 KEYS | -- |
| resetOffsetDistance()| 重置 offsetDistance| -- |
| resetLongPressTime()| 重置 longPressTime| -- |
| resetDistanceToCenter()| 重置 distanceToCenter| -- |
| resetScrollEl()| 重置 scrollEl | -- |
| resetLimitingEl()| 重置 limitingEl | -- |
| resetFormAutofocus()| 重置 formAutofocus| -- |
| reset() | 重置所有配置  | -- |

#### 参数描述
| name | 描述 |
|-|:---|
|scrollToOption| scrollEl：滚动区域，默认为 document,<br/>targetEl：需要滚动到哪个元素,<br/>isCenter：targetEl 是否滚动到屏幕居中的位置,<br/>offset：距离滚动边界上下左右的偏移,<br/>smooth：是否开启滚动动画,<br/>duration：动画耗时，默认200毫秒  |


##### 事件
| name | 描述  |
|----|-|
| up  | 上移 (可配置KEY_UP修改键值)  | 
| right | 右移  (可配置KEY_RIGHT修改键值)  |
| down | 下移 (可配置KEY_DOWN修改键值)|
| left | 左移 (可配置KEY_LEFT修改键值)|
| onFocus | 获取焦点  |
| onBlur | 失去焦点  |
| longPress | 长按 (可配置KEY_ENTER修改键值)， $tv.init.longPressTime可配置长按的时间，默认500ms  |
| click | 按enter时可触发click(可配置KEY_ENTER修改键值)|


#### [案例源码请戳这里](https://github.com/slailcp/tv-focusable-example/tree/master/react-tv-focusable-example)