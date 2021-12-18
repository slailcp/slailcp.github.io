[TOC]
# 简介
react-tv-focusable 是适用于在 TV 端进行网页开发时管理焦点移动的框架，以简洁的 Api 让前端网页开发就像 android 开发一样自动管理焦点。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201016100758392.gif#pic_center)
[vue-tv-focusable](https://blog.csdn.net/sllailcp/article/details/109044265)
[ng-tv-focusable](https://blog.csdn.net/sllailcp/article/details/109445268)

# 安装
```
npm i -S react-tv-focusable          
```
# 使用

```js
// 全局使用:
// index.js
import { $tv } from 'react-tv-focusable';
$tv.itemAttrname = 'focusable';
window.$tv = $tv; // 设置全局变量
// page.js
<div focusable="">可获取焦点的元素</div>

// page.js
// 1.给可以获取焦点的dom添加focusable属性
// 2.不设置itemAttrname，也可以通过配置focusableClassName 
window.$tv.focusableClassName = 'config-focusable-classname'
<div focusable="">可获取焦点的元素</div>
<div class="config-focusable-classname">可获取焦点的元素</div>

// 不可以获取焦点的div
<div>不可获取焦点的元素</div>
```
## 设置焦点的样式
聚焦的元素会被加上一个 `class="focus"` (你可以自己定义 className，默认为 focus)
现在你应该知道要做什么了，给 focus 设置个独特的样式就好了。
例如这样：
```js
  <div class="demo">
    <div class="item" focusable ></div>
    <div class="item" focusable ></div>
    <div class="item" focusable ></div>
    ...
  </div>
...
.focus {
  transform: scale(1.1);
  border: 2px solid red;
  box-shadow: 0 0 20px red;
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201013104506375.gif#pic_center)
好了，这样就设置完了，现在你按方向键时焦点就会自动移动到下一个目标元素上了，很简洁吧~
## 指定焦点移到到某一个元素上
上面的演示中最开始时第一个元素获取了焦点，实际上你在使用时，需要你自己来指定让哪个元素聚焦，这个由用户自己来指定似乎更加合适，你可以用下面的方法来指定焦点移动到某个元素上（如果不想要滚动的动画，则添加一个参数 默认为true需要动画，false则是不需要动画）：
```js
window.$tv.requestFocus(Element,bool); // Element;必填 bool非必填。默认为true
```
例如：
```js
<div className="item" ref="myDiv">s</div>
...

window.$tv.requestFocus(this.$refs.myDiv)
window.$tv.requestFocus(document.querySelector('.item'))
```
至于如何获取 Element 就不再展开了，你可以用上面示例中 的 $refs 方式，也可以用 xpath 等很多方式：
```js
// 让第2个div 聚焦
window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="demo"]/div[2]'));
```
一般 TV 端的页面在刚加载完成时，产品都会要求让某一个元素聚焦的，这时你就用上这条 api 了。
**注意：** 进入页面时想让某个元素聚焦，要在 nextTick 回调中进行，否则会因页面未加载完全而导致焦点移动并不如你所愿。

## XPath获取DOM---getElementByPath(string)
获取 Element的,react-tv-focusable提供了xPath的方式获取
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
## 根据DOM反向获取XPth路径 ---readXPath(el)
react-tv-focusable根据DOM反向获取XPth路径 
```js
<body>
    <div class="content">
        <span class="item1" focusable>1</span>
        <span class="item2" focusable>2</span>
        <span class="item3" focusable>3</span>
    </div>
</body>
window.$tv.readXPath(document.querySelector('.item2')) 
window.$tv.readXPath(window.$tv.getElementByPath('//div[@class="content"]/span[2]');) 
//结果: "/html/body/div[1]/span[2]"
```


## requestFocus(el, isAnimation);
框架有自己的一套找焦点算法，但有时产品要求你在某个元素上按遥控器右方向键时，让屏幕左下角的某个该死的元素聚焦，那你就要根据产品需求文档来自定义焦点移动了。
可以使用 up，right，down，left 这几个自定义事件来指定按遥控器对应方向键时调用的方法，然后自己在方法里通过 requestFocus 让目标元素聚焦，如果你在自己的方法里调用了 requestFocus 方法，该库将不再执行默认的焦点移动操作，否则依然帮你执行默认的焦点移动。
```js
 componentDidMount() {
     window.$tv.focusableClassName = 'r-focusable', 
     window.$tv.getElementByPath('//div[@class="wrapper"]/div[2]').addEventListener("down", this.down);
 }
skip15() {
	window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="wrapper"]/div[15]'));
}
skip20() {
	// 第二个参数设置为false的时候,不会产生动画效果.
	window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="wrapper"]/div[20]'), false);
}

// 添加down自定义事件
down() {
    //在第2个div上按下方向键时，焦点直接移动到第30个div上
	window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="wrapper"]/div[30]'));
 }
render() {
	return(
		<div class="wrapper">
			<div  class="r-focusable">1</div>
			<div focusable>2向下移到第30个div</div>
			...
			<div focusable>50</div>
			<div class="r-focusable">50</div>
		</div>
	)
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201030164802454.gif#pic_center)
##  setScrollEl(el) / resetScrollEl(); 
- setScrollEl div局部滚动
- resetScrollEl浏览器滚动

TV 端网页大多是整个页面滚动，滚动条在浏览器窗口上，如果你的滚动内容是在整个页面的局部某一块，需要指定一下滚动容器。
**setScrollEl(Element): 设置滚动的el
**resetScrollEl()： 重置el，即滚动浏览器的滚动条
举个例子
```js
<div class="demo">
	... // 可focusable的div
</div>
// 页面渲染完的时候,设置成div.demo滚动, 调用window.$tv.setScrollEl
window.$tv.scrollEl = window.$tv.getElementByPath('//div[@class="demo"]');
// window.$tv.setScrollEl(window.$tv.getElementByPath('//div[@class="demo"]'));
// 页面销毁的时候重置成浏览器滚动, 调用window.$tv.resetScrollEl
window.$tv.resetScrollEl();
<style>
  .demo {overflow: hidden;} // 一定要设置overflow哦
</style>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201013104345818.gif#pic_center)
## 表单控件，按确定键进行填写,
```js
// formAutofocus：默认true
 window.$tv.formAutofocus=false；// 不可以输入
 window.$tv.formAutofocus=true；// 可以输入 
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/6221fa03b653411f9d5a91e37bd2aa6f.gif)

# 其它
## 1.提一下初始化
您可以设置全局设置或单页设置
```js
  // init的所有配置项可以在最后面的表格中查看
  window.$tv.init({
    focusClassName: "on-focus", // 聚焦元素的className （默认focus）
     KEYS: {
      KEY_LEFT: [37, 21], 
      KEY_UP: [38, 19], 
      KEY_RIGHT: [39, 22], 
      KEY_DOWN: [40, 20]，
      KEY_ENTER: [40, 20]
     }, // 自定义键值
     longPressTime: 800, // 长按响应时间（单位：毫秒），默认500ms
     distanceToCenter: false // 是焦点始终在可是范围的中间部分， 默认false
  });

// 单页面单独配置，例如配置在home.js
  componentDidMount(){
    window.$tv.KEYS=  {
      KEY_LEFT: [37, 21], 
      KEY_UP: [38, 19], 
      KEY_RIGHT: [39, 22], 
      KEY_DOWN: [40, 20]，
      KEY_ENTER: [40, 20]
     };  
    window.$tv.longPressTime= 800;  
  }
```
警告：为了不影响全局配置，如果对页面进行了一些配置，请记住在销毁页面时重置它
```js
componentDidMount(){
    window.$tv.findFocusType  = 0;
}
componentWillUnmount() {
    window.$tv.resetFindFocusType(); //window.$tv.findFocusType  = 1;
}
```
如果你有定制一些参数的需求，可以通过初始化设置一下这些参数，否则无须初始化。
下面是参数的一些说明：


 - **1.自定义焦点 class（focusClassName）** 
你接手了别的组的项目，他们已经把 `focus` 这个词作为普通 className 给用了，而且很多地方都用到了，你一定不愿意把他们的代码里的 focus 改成 focus1,focus2 什么的，以使你可以正常使用该库的 focus 这个名字作为焦点样式。
那就通过初始化里的 focusClassName 属性重新定义一下该库的焦点样式名吧。

 - **2.自定义键值（KEYS）**
不同厂家的遥控器键值可能不一样，有些并未按照 android 键值来实现，而且产品可能要求同时支持遥控器和键盘操作，这时你就需要指定上下左右方向键值了，例如上面配置的 KEY_LEFT: [37, 21] 就是支持键盘上的左箭头键和遥控器左方向键。

 - **3.自定义找焦点方式（findFocusType，initDis）**
findFocusType=1，即默认找最近焦点方式，用默认方式时实际上用不到 initDis 参数
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201013104411514.gif#pic_center)

findFocusType=0，initDis = 49
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201013104423300.gif#pic_center)

initDis 为何是 49？只要下一个 div 的横向中心线和当前焦点元素的中心线距离大于 initDis 值，就认为它和当前焦点不在同一水平线上，现在 div2 的横向中心线比 div1 高了 50px，所以如果你不想让用户在 div1 上按右方向键时焦点跑到 div2 上，就可以设置找焦点方式为直线模式，并通过 initDis 来控制偏差范围。
**4.边缘距离（offsetDistance）**
到达边缘的时候,给焦点和边缘一个距离.
```js
window.$tv.offsetDistance = 50 // 到达边缘的时候距离边缘50像素
window.$tv.offsetDistance:250 // 到达边缘的时候距离边缘250像素
```
如图:
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201110110738158.gif#pic_center)





## 重置单个配置/重置
```js
// 重置成插件默认值，reset+属性名()，例如
window.$tv.resetScrollEl();
window.$tv.resetFocusClassName();
window.$tv.resetFindFocusType();
window.$tv.resetInitDis();
window.$tv.resetKEYS();
window.$tv.resetLimitingEl();
...

window.$tv.reset();// 重置所有

// 独立配置init里面的每一项，$tv.属性名=xx, 如下：
window.$tv.focusClassName = XX;
window.$tv.KEYS = {
      KEY_LEFT: [XX,XX,XX],
      KEY_UP: [XX],
      KEY_RIGHT: [XX, XX],
      KEY_DOWN: [XX],
      KEY_ENTER:[XX]
  };
window.$tv.offsetDistance = XX;
window.$tv.longPressTime = XX;
...
	
```

## 自定义事件（上下左右，获取失去焦点，enter事件，长按事件）
```js
// 自定义事件的名字如下:
// react中需要手动绑定如下所示,(自定义事件的名字一定要是下面固定的这几个)
el.addEventListener("left", this.left);
el.addEventListener("right", this.right);
el.addEventListener("up", this.up);
el.addEventListener("down", this.down);
el.addEventListener("onBlur", this.onBlur);
el.addEventListener("onFocus", this.focus);
el.addEventListener("longPress", this.longPress); // 长按，可以通过longPressTime配置响应时间
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
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201030171835643.gif#pic_center)
# 注意事项
## 1.需要等到页面渲染完,才能获取到element
```js
// 例如: window.$tv.requestFocus,需要放到下面的钩子中
componentDidMount() {
	window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="demo"]/span[18]'))
}
```
## 2. $tv.resetXXX();
```js
/*
当某个页面特别设置了init里面的配置,或者scrollEl,此时会更改插件默认的配置.
所以页面销毁的时候,需要调用 window.$tv.reset();方法,还原系统默认的配置
*/
// scroll.js
componentDidMount(){
// 默认是滚动浏览器的滚动条,scroll.js中我们想滚动div.scroll-demo, (scroll-demo一定要设置overflow哦)
  window.$tv.setScrollEl(window.$tv.getElementByPath('//div[@class="scroll-demo"]'));  
}
componentWillUnmount() {
   window.$tv.resetScrollEl(); // 销毁的时候,重置成滚动浏览的滚动条
}

```


# 所有可配置项

init(...)
| name            | 描述                                                       | 默认值                                                                                                                                    | 是否必须 |
|----------------|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| focusableClassName |可聚焦的classname,(设置了focusable的时候不需要设置此项)  |空字符串  | no |
| focusClassName | 指定焦点元素类名。默认为“焦点” "focus" | focus                                                                                                                                        | no             |
| initDis        | 差值                                                | 20                                                                                                                                                | no             |
| findFocusType  | 移动类型，1：就近查找  0：直线 查找                                            | 1                                                                                                                                                 | no             |
| KEYS           | 上下左右的键值                                                  | {         KEY_LEFT: [37, 21],         KEY_UP: [38, 19],         KEY_RIGHT: [39, 22],         KEY_DOWN: [40, 20],         KEY_ENTER:[13, 23]     } | no             |
| offsetDistance | 边缘距离                                        | 50 | no             |
| longPressTime | 长按响应时间                                     | 500 | no             |
| distanceToCenter| 焦点是否在滚动区域保持剧中显示           | false | no             |
| limitingEl| 整个界面，只有limitingEl内的焦点可以聚焦            | null| no             |
| formAutofocus| 表单控件是否可以输入或者编辑  | true| |


独立设置每一项

| name          | 描述          | 使用     | 
|---------------|---------------|----------|---------|---------------------------|
| itemAttrname |可聚焦的属性名  | tv.itemAttrname= XX; <br/>```获取所有可聚焦的dom属性 console.log($tv.itemAttrname)```| 
| focusableClassName |可聚焦的classname,(设置了itemAttrname的时候不需要设置此项)  | $tv.focusableClassName= XX;  | 
| focusClassName  | 指定焦点元素类名。默认为“焦点” “focus”  | $tv.focusClassName = XX; | 
| findFocusType  | 移动类型，1：就近查找 0：直线 查找 | $tv.findFocusType = XX; | 
| initDis  | 差值  | $tv.initDis = XX; | 
| KEYS  | 上下左右的键值  | $tv.KEYS = {...}; | 
| offsetDistance  | 边缘距离 | $tv.offsetDistance = XX; | 
| longPressTime  | 长按响应时间  | $tv.longPressTime = XX; | 
| scrollEl  | 设置可以滚动的el  | $tv.scrollEl = XX; | 
| limitingEl  | 整个界面，只有limitingEl内的焦点可以聚焦  | $tv.limitingEl = XX; | 
| distanceToCenter  | 焦点是否在滚动区域保持剧中显示  | $tv.distanceToCenter = XX; | 
| formAutofocus| 表单控件是否可以输入或者编辑  | $tv.formAutofocus= XX; | 
| formAutofocus| 表单控件是否可以输入或者编辑  | $tv.formAutofocus= XX; | 
| smoothTime| 动画时间  | $tv.smoothTime= 200; | 
| spacingTime| 动画流畅度(数值越小动画越流畅,但是越耗性能) ,当smoothTime设置为40时,spacingTime=20和spacingTime=1的效果是不一样的 | $tv.spacingTime = 20| 
| scrollSpeedX|当按键按下不抬起时水平方向上多少毫秒滚动一次，值越大越节省能，默认0，单位毫秒 | $tv.scrollSpeedX = 200| 
| scrollSpeedY|当按键按下不抬起时垂直方向上多少毫秒滚动一次，值越大越节省能，默认0，单位毫秒 | $tv.scrollSpeedY = 200| 
| scrollSpeed|当按键按下不抬起时水平/垂直多少毫秒滚动一次，值越大越节省能，默认0，单位毫秒 | $tv.scrollSpeed = 200| 


scrollEl

| name          | 描述          | 类型     | 参数     | 参数是否必填 |
|---------------|---------------|----------|---------|---------------------------|
|  $tv.setScrollEl(el) /   $tv.scrollEl = el  | 设置滚动的el   | Function /el| Element /无| 是                       |
| $tv.resetScrollEl | 重置成浏览器滚动 | Function | 没有参数   | --                        |

reset

| name                 | 描述                    | 类型      | 参数    |
|----------------------|------------------------|-----------|--------|
| $tv.resetFocusableClassName()    | 重置 focusableClassName | Function   | 无    |
| $tv.resetFocusClassName()  | 重置 focusClassName   | Function  | 无  |
| $tv.resetInitDis()         | 重置 initDis          | Function  | 无    |
| $tv.resetFindFocusType()   | 重置 findFocusType    | Function  | 无    |
| $tv.resetKEYS()            | 重置 KEYS             | Function  | 无    |
| $tv.resetOffsetDistance()            | 重置 offsetDistance| Function  | 无    |
| $tv.resetLongPressTime()            | 重置 longPressTime| Function  | 无    |
| $tv.resetDistanceToCenter()            | 重置 distanceToCenter| Function  | 无    |
| $tv.resetScrollEl()            | 重置 scrollEl             | Function  | 无    |
| $tv.resetLimitingEl()            | 重置 limitingEl             | Function  | 无    |
| $tv.resetFormAutofocus()            | 重置 formAutofocus| Function  | 无    |
| $tv.reset()                | r重置 所有              | Function  | 无    |


other

| name             | 描述                 | 类型    | 参数             | 参数是否必填 |
|------------------|----------------------|----------|-----------------|---------------------------|
| requestFocus     | 直接调指定的el | Function | Element:跳转的el, bool:是否启用动画 | Element:是,bool:否       |
| getElementByPath | 使用xPath获取el    | Function | str         | 是                       |
| readXPath| 根据DOM反向获取XPth路径    | Function | el         | 是                       |

事件

| name             | 描述                 |
|------------------|----------------------|
| up     | 上移 (可配置KEY_UP修改键值)  | 
| right | 右移  (可配置KEY_RIGHT修改键值)  |
| down | 下移 (可配置KEY_DOWN修改键值)   |
| left | 左移 (可配置KEY_LEFT修改键值)   |
| onFocus | 获取焦点  |
| onBlur | 失去焦点  |
| longPress | 长按 (可配置KEY_ENTER修改键值)， $tv.init.longPressTime可配置长按的时间，默认500ms  |
| click | 按enter时可触发click(可配置KEY_ENTER修改键值)   |


## [案例源码请戳这里](https://github.com/slailcp/tv-focusable-example/tree/master/react-tv-focusable-example)






















