### 简介
tv-focusable 是适用于在 TV 端进行网页开发时管理焦点移动的框架，以最简洁的 Api 让前端网页开发就像 android 开发一样自动管理焦点。
![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/20201016100758392.gif#pic_center)  
[更多案例展示](https://slailcp.github.io/focusable/example/index.html)  

### 安装
下载[focusable.js](https://github.com/slailcp/tv-focusable-example/blob/master/js-focusable-example/js/tv-focusable.js)文件


### 使用
#### 如何集成
把上面下载好的 tv-focusable.js 放到项目 js 目录下
```html
<head>
...
    <script src="js/tv-focusable.js"></script>
</head>
```

#### 设置元素可获取焦点
```html
<div focusable>可获取焦点的元素</div>
<div>不可获取焦点的元素</div>
```
跟 android 很相似了吧~
给非 android 开发的同学普及一下，在进行 android 的 TV 端开发时，系统是会自动给 focusable=true 的元素分发焦点的，例如：
```xml
    <TextView
        android:id="@+id/text1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:focusable="true" />
    <TextView
        android:id="@+id/text2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:focusable="true" />
```
假设这两个元素是左右排列的，当焦点在前面一个 text1 上时，按遥控器的右键，焦点会自动跑到 text2 上。  
现在在网页标签上设置 focusable 就相当于 android 上设置了 android:focusable="true"，当用户按遥控器时，该库会像 android 那样自动把焦点移动到下一个焦点上，无需开发者处理。  
别急，现在还看不到焦点效果，因为你还没设置聚焦的样式呢。

#### 设置焦点的样式
聚焦的元素会被加上一个 `class="focus"` (你可以自己定义 className，默认为 focus)，现在你应该知道要做什么了，给 focus 设置个独特的样式就好了。  
例如这样：
```js
<head>
    <script src="js/tv-focusable.js"></script>
    <style>
        .focus {
            transform: scale(1.1);
            border: 2px solid red;
            box-shadow: 0 0 20px red;
        }
        .demo { width: 500px; margin: 50px auto; }
        .item{ display: inline-block; width: 100px; height: 100px; margin: 10px; text-align: center; line-height: 100px; background-color: bisque; box-sizing: border-box; vertical-align: top; }
    </style>
</head>
<body>
    <div class="demo">
        <div class="item" focusable>1</div>
        <div class="item" focusable>2</div>
        <div class="item" focusable>3</div>
    </div>
    <div class="item" focusable style="margin-left: 300px;">4</div>
</body>
```
![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/20210619161510478.gif)  
好了，这样就设置完了，现在你按方向键时焦点就会自动移动到下一个目标元素上了，很简洁吧~

#### 指定焦点移到到某一个元素上
上面的演示中，最开始时第一个元素获取了焦点，实际上你在使用时，库并不会在页面渲染完成后主动帮你聚焦到第一个或某个元素上，这个由你自己来指定似乎更加合适，你可以用下面的方法来指定焦点移动到某个元素上：
```js
// Element: 想要聚焦的元素，必填
// anim: 聚焦时是否需要滚动动画，非必填，默认true带动画; 
tvCore.requestFocus(Element, anim);
```
关于第二个参数，设置聚焦时是否需要滚动动画，默认 true 带动画，如果指定的聚焦元素不在窗口可视区域内或未完全显示，聚焦后就会被滚动到可视区域内，有些场景下你可能并不想要动画，例如类似 “回到顶部” 的场景，就需要用到这个了，试一下看看吧~  

例如：(html和上例一样，除了多出一个 id 属性)：
```js
...
<div class="item" id="id1" focusable>2</div>
...
<script>
    tvCore.requestFocus(document.getElementById('id1'))
</script>
```
>为了让文档看起来不那么长，只写出了核心代码，在你自己创建的项目中，应该使用完整的 html 文档。

至于如何获取 Element 就不再展开了，你可以用 `document.getElementById` 方式，也可以用 xpath 等很多方式：
```js
// 让第2个div 聚焦
 tvCore.requestFocus(tvCore.getElementByPath('//div[@class="demo"]/div[2]'));
```
一般 TV 端的页面在刚加载完成时，产品都会要求让某一个元素聚焦的，这时你就用上这条 api 了。
**注意：** 进入页面时想让某个元素聚焦，要在页面元素加载完成后进行，否则会因页面未加载完全而导致焦点移动并不如你所愿。

##### XPath 获取 DOM—getElementByPath(string)
focusablejs 提供了 xPath 的方式获取
```js
<body>
    <div class="content">
        <span class="item1">1</span>
        <span class="item2">2</span>
        <span class="item3">3</span>
    </div>
</body>
tvCore.getElementByPath('//div[@class="content"]/span[2]');
tvCore.getElementByPath(tvCore.readXPath(document.querySelector('.item2')));
//结果: <span class="item2">2</span>
```
##### 根据 DOM 反向获取 XPath 路径  —readXPath(el)
focusablejs 根据 DOM 反向获取 XPath路径 
```js
<body>
    <div class="content">
        <span class="item1">1</span>
        <span class="item2">2</span>
        <span class="item3">3</span>
    </div>
</body>
tvCore.readXPath(document.querySelector('.item2')) 
tvCore.readXPath(tvCore.getElementByPath('//div[@class="content"]/span[2]');) 
//结果: "/html/body/div[1]/span[2]"
```


#### 自定义焦点移动
框架有自己的一套找焦点算法，但有时产品会要求你在某个元素上按遥控器右方向键时让屏幕左下角的某个该死的元素聚焦，那你就要根据产品需求文档来自定义焦点移动了。  
可以使用 @up，@right，@down，@left 这几个属性来指定按遥控器对应方向键时调用的方法，然后自己在方法里通过 next 或 requestFocus（1.x只支持此方法） 让目标元素聚焦;  
**1.x写法**
如果你在自己的方法里调用了 requestFocus 方法，该库将不再执行默认的焦点移动操作，否则依然帮你执行默认的焦点移动。
示例：焦点在 id1 上时，按右键让 id2 聚焦；  
![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/20210619161656667.gif)
```js
...
<body>
    <div class="demo">
        <div class="item" focusable>1</div>
        <div class="item" id="id1" focusable>2</div>
        <div class="item" focusable>3</div>
    </div>
    <div class="item" id="id2" focusable style="margin-left: 300px;">4</div>
</body>
...
document.querySelector("#id1").addEventListener("right", function () {
    tvCore.requestFocus(document.getElementById('id2'))
});
```
**2.x写法**
只要你给某个标签定义了方向键监听例如 right 事件，那么在此标签上按左键时该库将不会再执行默认的向左焦点移动操作，你可以通过如下用法来移动焦点：
```js
let el = document.querySelector("#id1");
tvCore.addFocusableListener(el, "right", left);
...
function right(index) {
    //和requestFocus功能是一样的,推荐使用next
    tvCore.next(document.getElementById('id2'))
    //或者如果你想在处理一些事情之后再执行库的默认移动
    setTimeout(() => {
        tvCore.next("right")
    }, 500);
}
```
推荐使用 2.x 的监听，可同时支持同步和异步流程，1.x只支持同步流程。


#### 表单控件，按确定键进行填写
```js
// formAutofocus：默认true
    tvCore.formAutofocus=false；// 不可以输入
    tvCore.formAutofocus=true；// 可以输入 
```
![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/6221fa03b653411f9d5a91e37bd2aa6f.gif)


好啦，到这里应该能满足基本所有的 TV 焦点需求了。  


你还在看？？？  
好吧，或许你还有一些别的需求~  


### 其它
#### 初始化
```js
    // 1.使用init同时配置多个属性
    tvCore.init({
        focusClassName: "on-focus", // 聚焦元素的className （默认focus）
        KEYS: { KEY_LEFT: [37, 21], KEY_UP: [38, 19], KEY_RIGHT: [39, 22], KEY_DOWN: [40, 20] }, // 自定义键值
        longPressTime: 800, // 长按响应时间（单位：毫秒），默认500ms
        distanceToCenter: false // 使焦点始终在可视范围的中间部分，默认false
        ...
    });
    // 2.单独设置某个属性
	tvCore.KEYS =  {
      KEY_LEFT: [37, 21], 
      KEY_UP: [38, 19], 
      KEY_RIGHT: [39, 22], 
      KEY_DOWN: [40, 20],
      KEY_ENTER: [13, 23]
     };  
    tvCore.longPressTime = 800;  
```
上面列举了几个常用且一般设置成整个项目所有页面通用的属性，可在文档最下方查看所有可配置属性，如果不需要定制属性，无须初始化。  
通常情况下，默认属性就能满足大部分项目的需求。  

下面是几个常用参数使用场景的举例说明：
**自定义焦点 class（focusClassName）** 
你接手了别的组的项目，他们已经把 `focus` 这个词作为普通 className 给用了，而且很多地方都用到了，你一定不愿意把他们的代码里的 focus 改成 focus1,focus2 什么的，以使你可以正常使用该库的 focus 这个名字作为焦点样式。
那就通过初始化里的 focusClassName 属性重新定义一下该库的焦点样式名吧。

**自定义键值（KEYS-配置上下左右，enter键值）**
不同厂家的遥控器键值可能不一样，有些并未按照 android 标准键值来实现，而且产品可能要求同时支持遥控器和键盘操作，这时你就需要指定上下左右方向键值了，例如上面配置的 KEY_LEFT: [37, 21] 就是支持键盘上的左箭头键和遥控器左方向键。

**自定义找焦点方式（findFocusType，initDis）**
findFocusType=1，即默认找最近焦点方式，用默认方式时实际上用不到 initDis 参数  
![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/20201013104411514.gif#pic_center)

findFocusType=0，initDis = 49  
![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/20201013104423300.gif#pic_center)

initDis 为何是 49？只要下一个 div 的横向中心线和当前焦点元素的横向中心线距离大于 initDis 值，就认为它和当前焦点不在同一水平线上，现在 div2 的横向中心线比 div1 高了 50px，所以如果你不想让用户在 div1 上按右方向键时焦点跑到 div2 上，就可以设置找焦点方式为直线模式，并通过 initDis 来控制偏差范围。

**4.边缘距离（offsetDistance）
到达边缘的时候,给焦点和边缘一个距离.  
当某个未完全显示在窗口可视区域内的元素聚焦时，该库会自动帮你将这个元素滚动到窗口内完全显示，不过默认状态是贴着边缘的，如果你想让它离这个边缘有一个距离，就可以通过这个属性实现了。
```js
tvCore.offsetDistance = 50 // 完全显示出来后再距离边缘50像素
```
![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/20201110110738158.gif#pic_center)


#### 局部滚动（scrollEl）
TV 端网页大多是整个页面滚动，滚动条在浏览器窗口上，如果你的滚动内容是在整个页面的局部某一块，那么你需要指定一下滚动容器。
`setScrollEl(Element)`  设置滚动的el
`resetScrollEl()` 重置el，即滚动浏览器的滚动条 (你在当前页面上设置了某一块区域滚动，当进入一个新页面之前，不管新页面是否整页滚动，都建议重置一下 scrollEl，如果新的页面是整个页面滚动，那么就必须重置了)
![在这里插入图片描述](//images.weserv.nl/?url=https://img-blog.csdnimg.cn/20201013104345818.gif#pic_center)

#### 自定义事件
##### 监听焦点状态
onFocus：获得焦点  
onBlur：失去焦点
```js
    tvCore.addFocusableListener(document.querySelector("#id1"), "onFocus", function (e) {
        console.log("onFocus", e);
    });
    tvCore.addFocusableListener(document.querySelector("#id1"), "onBlur", function (e) {
        console.log("onBlur", e);
    });
```
不需要获取当前元素就不用传 e 了。

##### 点击
click
按遥控器 OK 键（相当于手机上手指点击按钮，PC 上鼠标点击按钮）
```js
tvCore.addFocusableListener(document.querySelector("#id1"), "click", function () {
    console.log("click");
});
```
**Tip：** 如果上例中的 div 是一个 component，需要写成 @click.native

##### 长按
longPress
按下遥控器 OK 键超过 500ms 会触发长按事件，可通过 $tv.longPressTime 自定义这个时间  
```js
tvCore.addFocusableListener(document.querySelector("#id1"), "longPress", function () {
    console.log("longPress");
});
```

##### 方向按键
left,right,up,down  
TV 端依靠遥控器按上下左右方向键来操作界面，可自定义方向事件监听,例如监听右键按键事件
```js
tvCore.addFocusableListener(document.querySelector("#id1"), "right", function () {
    console.log("right");
});
```

#### 设置属性/重置属性
```js
// 独立配置init里面的每一项，$tv.属性名=xx, 如下：
tvCore.focusClassName = XX;
tvCore.offsetDistance = XX;

//清除所有配置并恢复到插件的默认配置
tvCore.reset()
...

// 重置成插件默认值，reset+属性名()，例如
tvCore.resetScrollEl();
tvCore.resetFocusClassName();
...

```


#### 弹出 dialog 相关处理
h5 没有 android 那样 api 自带的 dialog 可用，android 的 api 弹出 dialog 后，其下面的元素就自动变成不可聚焦状态了，只有 dialog 上的元素能聚焦，网页上想弹出 dialog 就需要开发者用普通的标签来模拟实现，那么不让 dialog 下面的元素聚焦也就需要自己处理，幸运的是 tv-focusable 提供了相应的设置可以很方便的实现这一操作； 
`tvCore.limitingEl = XX`
当 dialog 弹出来后，把 dialog 根元素设置为 tvCore.limitingEl 即可，当 dialog 关闭时，记得 tvCore.resetLimitingEl() 重置它，可参考 [demo](https://github.com/slailcp/tv-focusable-example/blob/master/js-focusable-example/example4.html)，


#### 其它可能用到的方法
**元素聚焦状态的全局监听- setOnFocusChangeListener**
```js
tvCore.setOnFocusChangeListener((element, focus)=>{
    console.log("焦点状态改变的元素：" + element, "聚焦或失去焦点：" + focus)
})
```

**让页面滚动到某个元素的位置**
```js
tvCore.scrollTo({targetEl: document.querySelector("#page1")})
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
| itemAttrname |可聚焦的属性名<br>$tv.itemAttrname= "myFocusable"; | focusable |
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
