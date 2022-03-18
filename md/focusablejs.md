
[TOC]
### 简介
tv-focusable 是适用于在 TV 端进行网页开发时管理焦点移动的框架，以最简洁的 Api 让前端网页开发就像 android 开发一样自动管理焦点。

### 下载
下载[focusable.js](https://github.com/slailcp/tv-focusable-example/blob/master/js-focusable-example/js/tv-focusable.js)文件


### [案例展示](https://slailcp.github.io/focusable/example/index.html)
[案例展示](https://slailcp.github.io/focusable/example/index.html)


### 注意:
uni-app项目打包成APP端的时候,由于uni-app不支持window,Event等,所以打包的时候会出现Cannot read property 'CustomEvent' of undefined等报错                            
**解决方法**:可以使用uni-app将项目打包成h5,然后使用hbuilder将h5项目转成APP,这样就可以啦!     
步骤如下: 
manifest.json修改基础路径(确保能本地运行)
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
最后将打包出来的文件用hbuilder转成apk就可以啦
如何打包成APP包可以参考[这里](https://blog.csdn.net/sllailcp/article/details/118397743)

如果是hubilder创建的项目，可以参考下面这篇文章
[在uni-app里使用tv-focusable打包apk时报错如何解决](https://blog.csdn.net/sllailcp/article/details/119939974)


**效果示例**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201016100758392.gif#pic_center)

### 使用
#### 1.如何集成
把上面下载好的 tv-focusable.js 放到 项目 js 目录下
```html
<head>
...
    <script src="js/tv-focusable.js"></script>
</head>
```

#### 2.设置元素可获取焦点
```html
<div focusable>可获取焦点的元素</div>
<div>不可获取焦点的元素</div>
```
跟 android 的很相似了吧~
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

#### 2.设置焦点的样式
聚焦的元素会被加上一个 `class="focus"` (你可以自己定义 className，默认为 focus)
现在你应该知道要做什么了，给 focus 设置个独特的样式就好了。
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
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210619161510478.gif)

好了，这样就设置完了，现在你按方向键时焦点就会自动移动到下一个目标元素上了，很简洁吧~

#### 3.指定焦点移到到某一个元素上
上面的演示中最开始时第一个元素获取了焦点，实际上你在使用时，需要你自己来指定页面渲染完成后让哪个元素聚焦，如果你不指定任何元素，页面初始状态是没有任何一个元素聚焦的，你得按一次方向键才会聚焦；不过这个操作由用户自己来指定似乎更加合适，你可以用下面的方法来指定焦点移动到某个元素上：
```js
// Element: 想要聚焦的元素，必填
// anim: 聚焦时是否需要滚动动画，非必填，默认true; 当你的元素多到超出了父元素时，你直接设置让视野外面的某元素聚焦时，可能需要用到这个，试一下看看吧
tvCore.requestFocus(Element, anim);
```
例如(html和上例一样，除了多出一个 id 属性)：
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
 tvCore.requestFocus(this.$tv.getElementByPath('//div[@class="demo"]/div[2]'));
```
一般 TV 端的页面在刚加载完成时，产品都会要求让某一个元素聚焦的，这时你就用上这条 api 了。
**注意：** 进入页面时想让某个元素聚焦，要在页面元素加载完成后进行，否则会因页面未加载完全而导致焦点移动并不如你所愿。

##### XPath获取DOM---getElementByPath(string)
获取 Element的,focusablejs提供了xPath的方式获取
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
##### 根据DOM反向获取XPth路径 ---readXPath(el)
focusablejs根据DOM反向获取XPth路径 
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


#### 4.自定义焦点移动
框架有自己的一套找焦点算法，但有时产品要求你在某个元素上按遥控器右方向键时，反而让屏幕左下角的某个该死的元素聚焦，那你就要根据产品需求文档来自定义焦点移动了。
可以使用 up，right，down，left 这几个名称通过自定义事件来指定按遥控器对应方向键时调用的方法，然后自己在方法里通过 requestFocus 让目标元素聚焦，如果你在自己的方法里调用了 requestFocus 方法，该库将不再执行默认的焦点移动操作，否则依然帮你执行默认的焦点移动。
示例：
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
焦点在 id1 上时，按右键让 id2 聚焦；
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210619161656667.gif)

#### 5.点击和长按点击
点击：
```js
...
<div class="item" id="id1" focusable onclick="myClick()">2</div>
...
    function myClick() {
        console.log("click");
    }
```
长按：
```js
...
    document.querySelector("#id1").addEventListener("longPress", function () {
        console.log('longClick');
    });
```
手指触摸点击、鼠标左键单击、键盘按Enter键、遥控器按OK键，这四种操作可认为是不同交互方式的同一操作，长按点击同理。

#### 6.表单控件，按确定键进行填写,
```js
// formAutofocus：默认true
 tvCore.formAutofocus=false；// 不可以输入
 tvCore.formAutofocus=true；// 可以输入 
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/6221fa03b653411f9d5a91e37bd2aa6f.gif)

好啦，到这里应该能满足基本所有的 TV 焦点需求了。


你还在看？？？
好吧，或许你还有一些别的需求~
### 其它
#### 1.提一下初始化
```js
    // 1.初始化init配置(init的所有配置项可以在最后面的表格中查看)
    tvCore.init({
        focusClassName: "on-focus", // 聚焦元素的className （默认focus）
        KEYS: { KEY_LEFT: [37, 21], KEY_UP: [38, 19], KEY_RIGHT: [39, 22], KEY_DOWN: [40, 20] }, // 自定义键值
        longPressTime: 800, // 长按响应时间（单位：毫秒），默认500ms
        distanceToCenter: false // 是焦点始终在可是范围的中间部分， 默认false
        ...
    });
    // 2.初始化独立配置
	tvCore.KEYS =  {
      KEY_LEFT: [37, 21], 
      KEY_UP: [38, 19], 
      KEY_RIGHT: [39, 22], 
      KEY_DOWN: [40, 20]，
      KEY_ENTER: [40, 20]
     };  
    tvCore.longPressTime = 800;  
```
如果你有定制一些参数的需求，可以通过初始化设置一下这些参数，否则无须初始化。
下面是参数的一些说明：
**1.自定义焦点 class（focusClassName）** 
你接手了别的组的项目，他们已经把 `focus` 这个词作为普通 className 给用了，而且很多地方都用到了，你一定不愿意把他们的代码里的 focus 改成 focus1,focus2 什么的，以使你可以正常使用该库的 focus 这个名字作为焦点样式。
那就通过初始化里的 focusClassName 属性重新定义一下该库的焦点样式名吧。

**2.自定义键值（KEYS）**
不同厂家的遥控器键值可能不一样，有些并未按照 android 标准键值来实现，而且产品可能要求同时支持遥控器和键盘操作，这时你就需要指定上下左右方向键值了，例如上面配置的 KEY_LEFT: [37, 21] 就是支持键盘上的左箭头键和遥控器左方向键。

**3.自定义找焦点方式（findFocusType，initDis）**
findFocusType=1，即默认找最近焦点方式，用默认方式时实际上用不到 initDis 参数
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201013104411514.gif#pic_center)

findFocusType=0，initDis = 49
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201013104423300.gif#pic_center)

initDis 为何是 49？只要下一个 div 的横向中心线和当前焦点元素的横向中心线距离大于 initDis 值，就认为它和当前焦点不在同一水平线上，现在 div2 的横向中心线比 div1 高了 50px，所以如果你不想让用户在 div1 上按右方向键时焦点跑到 div2 上，就可以设置找焦点方式为直线模式，并通过 initDis 来控制偏差范围。

**4.边缘距离（offsetDistance）
到达边缘的时候，给聚焦元素到边缘一个距离.
```js
tvCore.offsetDistance = 50 // 到达边缘的时候距离边缘50像素
tvCore.offsetDistance = 250 // 到达边缘的时候距离边缘250像素
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201110110738158.gif#pic_center)

**5.重置单个配置/重置**
```js
// 重置成插件默认值，reset+属性名()，例如
tvCore.resetScrollEl();
tvCore.resetFocusClassName();
tvCore.resetFindFocusType();
tvCore.resetInitDis();
tvCore.resetKEYS();
tvCore.resetLimitingEl();
...

// 独立配置init里面的每一项，$tv.属性名=xx, 如下：
tvCore.focusClassName = XX;
tvCore.KEYS = {
      KEY_LEFT: [XX,XX,XX],
      KEY_UP: [XX],
      KEY_RIGHT: [XX, XX],
      KEY_DOWN: [XX],
      KEY_ENTER:[XX]
  };
tvCore.offsetDistance = XX;
tvCore.longPressTime = XX;
...
```
**6.清除所有自定义配置**
```
tvCore.reset()
```

#### 2.局部滚动（scrollEl）
TV 端网页大多是整个页面滚动，滚动条在浏览器窗口上，如果你的滚动内容是在整个页面的局部某一块，那么你需要指定一下滚动容器。
`setScrollEl(Element)`  设置滚动的el
`resetScrollEl()` 重置el，即滚动浏览器的滚动条 (你在当前页面上设置了某一块区域滚动，当进入一个新页面之前，不管新页面是否整页滚动，都建议重置一下 scrollEl，如果新的页面是整个页面滚动，那么就必须重置了)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201013104345818.gif#pic_center)

#### 3.监听焦点状态
onFocus：获得焦点
onBlur：失去焦点
```js
    document.querySelector("#id1").addEventListener("onFocus", function (e) {
        console.log("onFocus", e);
    });
    document.querySelector("#id1").addEventListener("onBlur", function (e) {
        console.log("onBlur", e);
    });
```
不需要获取当前元素就不用传 e 了。

#### 4.弹出 dialog 相关处理
h5 没有 android 那样 api 自带的 dialog 可用，android 的 api 弹出 dialog 后，其下面的元素就自动变成不可聚焦状态了，只有 dialog 上的元素能聚焦，网页上想弹出 dialog 就需要开发者用普通的标签来模拟实现，那么不让 dialog 下面的元素聚焦也就需要自己处理，幸运的是 tv-focusable 提供了相应的设置可以很方便的实现这一操作； 
`tvCore.limitingEl = XX`
当 dialog 弹出来后，把 dialog 根元素设置为 tvCore.limitingEl即可，当 dialog 关闭时，记得 tvCore.resetLimitingEl() 重置它，可参考 [demo](https://github.com/slailcp/tv-focusable-example/blob/master/js-focusable-example/example4.html)，

#### 5.所有可配置项
初始化配置init

init(...)

| name            | 描述                                                       | 默认值                                                                                                                                    | 是否必须 |
|----------------|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| ~~focusableClassName~~ |~~可聚焦的classname,(设置了focusable的时候不需要设置此项)~~  |~~空字符串~~  | no |
| focusClassName | 指定焦点元素类名。默认为“焦点” "focus" | focus                                                                                                                                        | no             |
| initDis        | 差值                                                | 20                                                                                                                                                | no             |
| findFocusType  | 移动类型，1：就近查找  0：直线 查找                                            | 1                                                                                                                                                 | no             |
| KEYS           | 上下左右的键值                                                  | {         KEY_LEFT: [37, 21],         KEY_UP: [38, 19],         KEY_RIGHT: [39, 22],         KEY_DOWN: [40, 20],         KEY_ENTER:[13, 23]     } | no             |
| offsetDistance | 边缘距离                                        | 50 | no             |
| longPressTime | 长按响应时间                                     | 500 | no             |
| distanceToCenter| 焦点是否在滚动区域保持剧中显示           | false | no             |
| limitingEl| 整个界面，只有limitingEl内的焦点可以聚焦            | null| no             |
| formAutofocus| 表单控件是否可以输入或者编辑  |true | |


独立设置每一项

| name          | 描述          | 使用     | 
|---------------|---------------|----------|---------|---------------------------|
| ~~focusableClassName~~ |~~可聚焦的classname,(设置了focusable的时候不需要设置此项)~~  | ~~$tv.focusableClassName= XX;~~  | 
| focusClassName  | 指定焦点元素类名。默认为“焦点” “focus”  | this.$tv.focusClassName = XX; | 
| itemAttrname |可聚焦的属性名  | tv.itemAttrname= XX; <br/>```获取所有可聚焦的dom属性 console.log($tv.itemAttrname)```| 
| findFocusType  | 移动类型，1：就近查找 0：直线 查找 | this.$tv.findFocusType = XX; | 
| initDis  | 差值  | this.$tv.initDis = XX; | 
| KEYS  | 上下左右的键值  | this.$tv.KEYS = {...}; | 
| offsetDistance  | 边缘距离 | this.$tv.offsetDistance = XX; | 
| longPressTime  | 长按响应时间  | this.$tv.longPressTime = XX; | 
| scrollEl  | 设置可以滚动的el  | this.$tv.scrollEl = XX; | 
| limitingEl  | 整个界面，只有limitingEl内的焦点可以聚焦  | this.$tv.limitingEl = XX; | 
| distanceToCenter  | 焦点是否在滚动区域保持剧中显示  | this.$tv.distanceToCenter = XX; | 
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
| ~~$tv.resetFocusableClassName()~~    | ~~重置 focusableClassName~~ | Function   | 无    |
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

# 常见问题
请查阅[vue-tv-focusable文档](https://slailcp.github.io/?type=vue-tv-focusable)

## 如果你还有问题，可加入群聊交流讨论
Q群 377202993  备注: focusable   


# 版本升级日志

2021-12-18 1.0.4更新日志：
当一直按键不抬起时，控制每一次焦点的获取时间，从而达到控制滚屏速度

2021-10-28 1.0.3更新日志：
1、禁止隐藏元素聚焦；
2、开放滚动动画执行时间自定义，默认 200ms；
3、开放滚动动画循环的次数，默认 20次(注意:数值越小越耗性能)； 
4、优化其它不影响使用的小逻辑；

2021-09-27 1.0.2更新日志：
修复 vue3.x 延时加载元素的情况下，自定义事件不触发的问题；

2021-09-10 1.0.1更新日志：
1、防止和三方 UI 库类命名冲突，导出自定义 itemAttrname；
2、优化聚焦逻辑，禁止 svg 元素聚焦；
3、禁止焦点嵌套情况，父子元素同时设置可聚焦时只允许父元素聚焦；

2021-07-24 1.0.0更新日志：
1、优化对 angular 的支持；
2、稳定版本。

2021-07-24 0.0.6更新日志：
1、增加 formAutofocus 配置指定表单是否可执行原生聚焦（输入状态）；
2、开放 focusableClassName 的配置（原则上是开放给react用的），如果不明白这个是做什么用的，说明你不需要用到这个；

2021-07-16 0.0.5更新日志：
增加 readXPath 接口，便于读取目标元素的 xpath 路径，可用于需要序列化标签存储的场景；

2021-04-09 0.0.4更新日志：
1、增加 init 属性的独立配置项，可单独设置某个属性值；
2、增加 limitingEl 逻辑，可限制页面上只有某个容器内的元素可聚焦；

2020-12-24 0.0.3更新日志：
1、增加滚动 center 模式，通过 distanceToCenter 控制；
2、优化聚焦算法；

2020-12-11 0.0.2更新日志：
增加 TV 端长按事件的支持；

2020-12-09  0.0.1更新日志：
第一次发版.
