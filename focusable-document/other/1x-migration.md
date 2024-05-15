1.x 升级到 2.x 只有一项需要检查现有业务代码并修改的地方
#### vue
如果你之前注册了@left,@right,@up,@down事件监听，却没有在监听的方法里执行焦点聚焦(requestFocus)操作，例如
```js
<div class="wrapper">
    <div class="focus-item" v-focusable @right="right">
</div>
...
right() {
    console.log("right")
    // this.$tv.requestFocus(element);
}
```
这种写法在 1.x 里的意思是你仅仅是想监听按右键的操作，但是依然希望库帮你执行此次按右键的聚焦操作；而在 2.x 只要注册了 @right，库就不会帮你主动执行此次按右键的聚焦操作了，如果你希望像 1.x 那样，可做如下修改：
```js
right() {
    console.log("right")
    this.$tv.next("right") //主动触发库默认的向右聚焦操作
}
```
其它方向键同理。

#### angular
同 vue

#### react
如果你之前注册了@left,@right,@up,@down事件监听，却没有在监听的方法里执行焦点聚焦(requestFocus)操作，例如
```js
element.addEventListener("right", this.right);
right(index) {
    console.log("right")
    // window.$tv.requestFocus(element)
}
```
这种写法在 1.x 里的意思是你仅仅是想监听按右键的操作，但是依然希望库帮你执行此次按右键的聚焦操作；而在 2.x 只要注册了 @right，库就不会帮你主动执行此次按右键的聚焦操作了，如果你希望像 1.x 那样，可做如下修改：
```js
$tv.addFocusableListener(element, "right", this.right);
right(index) {
    console.log("right")
    window.$tv.next("right")
}
```
其它方向键同理。

#### js
同 react