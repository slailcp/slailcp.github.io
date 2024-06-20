
@[TOC](vuePuzzle文档)


# 文档地址

[vuePuzzle-文档地址1](https://slailcp.github.io/vuePuzzle-document/index.html)
[vuePuzzle-文档地址2](https://blog.csdn.net/sllailcp/article/details/139597472?spm=1001.2014.3001.5502)

# 案例地址

[vuePuzzle-案例地址](https://slailcp.github.io/vuePuzzle/index.html)

# 源码地址

[vuePuzzle-源码地址](https://github.com/slailcp/puzzle/blob/main/puzzle1.vue)



# npm 安装
npm i --save vuePuzzle

# 引入
import {Puzzle1} from 'vuePuzzle'
import 'vuePuzzle/vuePuzzle.css'
# 使用

## 单个拼图

```js
<Puzzle1 />
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/2aee8a9829ea4baeb735cc480ac80ea8.png)




## 设置大小（默认100px）

```js
<Puzzle1 size="150px" />

<Puzzle1 size="1.5rem" />
```

## 设置背景色，边框粗细，边框颜色

```js
<Puzzle1 bg-color="#88fb92" border-color="#FF0000" borderWidth="10" />

/**背景色可以设置透明度 */
<Puzzle1 bg-color="rgba(0,0,0,0.5)" border-color="#FF0000" borderWidth="10" />
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/c86425a76a254861b89c4e63031edfb8.png)




## 设置阴影,阴影程度，阴影扩散大小,

```js
// 注意：需要设置index或者mark唯一标识
<Puzzle1 mark="10" shadowColor="#FF0000" shadowRatio="0.4" shadowSpread="100" />
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/6e062539a74748a0945c35c7529c1ec4.png)

## 设置渐变

```js
// 注意：需要设置index或者mark唯一标识
/**默认线性从上倒下渐变， */
<Puzzle1 mark="0" :colors="['#ffff00', '#88fb92', '#ff0000', '#ffff00']">默认<br />线性渐变<br />从上到下</Puzzle1>

/**线性渐变设置渐变方向和渐变透明度 */
<Puzzle1 mark="1" :colors="['#ffff00', '#88fb92', '#ff0000', '#ffff00']" 
:gradient="{ type: 'linear', opacity: 0.8, point: { x1: `725`, y1: `725`, x2: `0`, y2: `0` } }"
>渐变角度</Puzzle1>

/**径向渐变 */
<Puzzle1 mark="2" :colors="['#ffff00', '#88fb92', '#ff0000', '#ffff00']" 
:gradient="{ type: 'radial', opacity: 0.9, point: { cx: '40%', cy: '60%', r: '50%', fx: '50%', fy: '50%' } }"
>径向渐变</Puzzle1>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/ea3690420529408da128e67a16d7abc3.png)


## 蒙版-裁切图片

```js
// 注意：需要设置index或者mark唯一标识
 <Puzzle1 mark="2" :imgpath="require('@/assets/hw.png')" />
 <Puzzle1 mark="2" imgpath="../../assets/hw.png" />
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/b65a4c4c0dec4aafae6614b62de54bfc.png)

## 列表（左侧和底部完全填充）

```js
/*
注意：根据单个拼图的大小(size)和每一行的个数，需要设置父节点的宽高,并设置overflow:hidden,隐藏上边和右边凸出的部分。 
*/
<div style="width: 600px; height: 600px; font-size: 0; overflow: hidden; border-radius: 12px">
  <div v-for="(f, fi) of hightlist1" :key="fi">
    <Puzzle1 mark="mark36" :index="fi" :total="hightlist1.length" linenum="6" style="float: left"/>
    <div>
</div>

const hightlist1 = ref([...Array(36).keys()]); // 36组数据
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/ab3011e0448c428da6eaca595b3c2d43.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/fda2707ed5d649268e22ef084d0a6f39.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/899e89fe658e4c06830324f9e4464583.png)

# slot

```js
<Puzzle1>张三</Puzzle1>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/4993414cf0c94f04908ad3ed9e9b7888.png)


# props

| name | 描述 | 类型  | 默认值 |
|-|---|--|--|
| bgColor  | 背景色 | String | "#F2F2F3" |
| borderColor  | 背景色 | String | "#3E5185" |
| borderWidth  | 背景色 | [Number, String] | 2 |
| index  | 背景色 | [Number, String] | 0 |
| shadowColor  | 背景色 | String | 无 |
| shadowRatio  | 阴影明显程度 | [Number, String] | 0.2 |
| shadowSpread  | 阴影扩散程度 | [Number, String] | 125 |
| colors  | 渐变色数组 | Array | [] |
| total  | 如果是一个列表的话，一共多少个 | [Number, String] | 0 |
| linenum  | 如果是一个列表的话，一行多少个 | [Number, String] | 6 |
| size  | 拼图大小 | String | 100px |
| mark  | 当前拼图的标识，防止内部使用特效重复 | String | 'one' |
| imgpath  | 背景图片 | String | '' |
| gradient  | 渐变配置 | gradientObj | - |


## gradientObj

| name | 描述 | 类型  | 默认值 | 备注|
|-|---|--|--|--|
| type (linear/radial)  | 渐变类型 | String | linear |linear:线性渐变， radial:径向渐变 |
| opacity  | 渐变透明度 | [Number, String] | 1 | - |
| point  | 渐变起始点 | Object | {  x1: "362.5",y1: "725",x2: "362.5",y2: "0" } |  |

```
注意：
线性渐变格式类型：{x1: "362.5", y1: "725", x2: "362.5", y2: "0"}
径向渐变格式类型：{ cx: '40%', cy: '60%', r: '50%', fx: '50%', fy: '50%' }
```


