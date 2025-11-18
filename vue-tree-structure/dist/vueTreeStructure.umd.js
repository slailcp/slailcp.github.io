(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueTreeStructure"] = factory(require("vue"));
	else
		root["vueTreeStructure"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; },
  treeMenu: function() { return /* reexport */ Index; },
  treeSelector: function() { return /* reexport */ tree_selector_Index; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/tree-menu/TreeNode.vue?vue&type=script&setup=true&lang=js

const _hoisted_1 = {
  class: "te-tree-node"
};
const _hoisted_2 = {
  key: 0,
  class: "iconfont icon-a-xiangxialunkuohua"
};
const _hoisted_3 = {
  key: 1,
  class: "iconfont icon-a-xiangyoulunkuohua"
};
const _hoisted_4 = {
  key: 1,
  class: "te-tree-expand-placeholder"
};
const _hoisted_5 = {
  key: 2,
  class: "te-checkbox"
};
const _hoisted_6 = {
  key: 0,
  class: "iconfont icon-weixuanzhong1"
};
const _hoisted_7 = {
  key: 1,
  class: "iconfont icon-xuanzhong2"
};
const _hoisted_8 = {
  class: "te-tree-node-icon"
};
const _hoisted_9 = {
  key: 0,
  class: "iconfont icon-bumen"
};
const _hoisted_10 = {
  key: 1,
  class: "iconfont icon-yuangong"
};
const _hoisted_11 = ["title"];
const _hoisted_12 = {
  key: 0
};
const _hoisted_13 = {
  class: "te-tree-iconchecked"
};
const _hoisted_14 = {
  key: 0,
  class: "te-tree-load-more"
};
const _hoisted_15 = {
  key: 0
};
const _hoisted_16 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-tree-animation-loading"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-loading"
})], -1);
const _hoisted_17 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-a-xiangxialunkuohua"
}, null, -1);
const _hoisted_18 = {
  key: 1,
  class: "te-tree-loading-node"
};
const _hoisted_19 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-tree-animation-loading"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-loading"
})]), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" 正在加载,请稍后..")], -1);
const _hoisted_20 = [_hoisted_19];
const _hoisted_21 = {
  key: 2,
  class: "te-tree-empty-node"
};
const _hoisted_22 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, "已无下级部门", -1);
const _hoisted_23 = [_hoisted_22];


// 定义组件属性

/* harmony default export */ var TreeNodevue_type_script_setup_true_lang_js = ({
  __name: 'TreeNode',
  props: {
    // 1:无checkbox模式单选，2:有checkbox模式单选， 3:有checkbox模式 多选
    mode: {
      type: Number,
      default: 1
    },
    // 1:选择部门，2 可以选择员工，3 部门+员工都可以选择
    chooseType: {
      type: Number,
      default: 1
    },
    propnode: {
      type: Object,
      required: true
    },
    expandedNodes: {
      type: Object,
      required: true
    },
    loadingNodes: {
      type: Object,
      required: true
    },
    selectedNodes: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      required: true
    },
    searchKey: {
      type: String,
      default: ""
    },
    depth: {
      type: Number,
      default: 0
    },
    // 更新目录数据，平铺
    treeUpdateData: {
      type: Array,
      default: () => []
    }
  },
  emits: ["toggle-node", "load-more-nodes", "update:selected"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const props = __props;

    // 定义事件
    const emit = __emit;
    const node = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)({
      ...props.propnode
    });
    // 判断节点是否已选中
    const isNodeSelected = node => {
      return props.selectedNodes.some(item => item.PK_Guid === node.PK_Guid);
    };

    // 判断节点是否可以展开(有子节点)
    const canExpand = node => {
      // 搜索模式下不允许展开
      // if (props.searchKey.trim()) return false;
      // 有子节点或者未加载过的部门节点可以展开
      return node.ChildNode && node.ChildNode.length > 0 || node.Level <= 1;
    };

    // 选择节点
    const toggleNode = (node, e) => {
      if (props.chooseType == 1 && node.Level !== 2 || props.chooseType == 2 && node.Level === 2 || props.chooseType == 3) {
        // 通知父组件选中数据变化
        emit("update:selected", node);
      }
    };

    // 处理节点展开/收起
    const handleToggleNode = (node, event) => {
      emit("toggle-node", node, event);
    };

    // 处理加载更多
    const handleLoadMore = (event, node) => {
      emit("load-more-nodes", event, node);
    };

    // 监听初始数据变化
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.treeUpdateData, val => {
      const curnode = props.treeUpdateData.find(item => item.PK_Guid === node.value.PK_Guid) || {};
      const newnode = {
        ...node.value,
        ...curnode
      };
      newnode.ChildNode = node.value.ChildNode;
      if (!newnode.ChildNode) {
        newnode.ChildNode = [];
      }
      if (node.value.DelIdList && (!curnode.DelIdList || !curnode.DelIdList.length)) {
        delete newnode.DelIdList;
      }

      /* 数据说明--新增接口getParentsApi 调用新接口获取当前部门(员工)+所有父部门，按从内到外依次平铺的数据赋值给props.treeUpdateData，在props.treeUpdateData里面查找 正在操作的当前部门(员工)+所有父部门，查到了就用treeUpdateData里面查找里面的数据覆盖(除了ChildNode)，数据结构 {parent:[node1,node2,node3], newParent:[node1,node2,node3]}
       * 当前部门(员工)的父部门没有更改 取parent中的数据
       ** 编辑-编辑部门(员工)成功的时候,传参(当前部门(员工)id)，后端识别到当前部门(员工)的父部门没有更改,则返回当前部门(员工)+所有父部门
       ** 新增-当前部门新增子部门(员工)成功的时候，传参(当前部门id,新增成功的子部门(员工)id)，后端返回当前部门+所有父部门，当前部门下ChildNode包含新增的子部门(员工)
       ** 删除-删除当前部门(员工)的时候，传参(当前部门(员工)id)，后端返回所有父部门,后端会识别到当前部门(员工)不存在于父部门中，则在当前直接父部门delIdList字段里面添加删除的PK_Guid，
       * 当前部门(员工)的父部门被更改(移动了部门)
       ** 移动-移动部门(员工)，传参(当前部门(员工)id)，老部门(员工)按照删除的流程，新部门(员工)按照新增的流程{parent:旧父部门,newParent:新父部门} ，依次赋值给treeUpdateData，然后节点进行更新
       */
      // 删除
      if (newnode.DelIdList && newnode.DelIdList.length) {
        newnode.ChildNode = newnode.ChildNode.filter(item => newnode.DelIdList.indexOf(item.PK_Guid) === -1);
        if (!(newnode.ChildNode || []).length) {
          handleLoadMore({}, newnode);
        }
      } else if (curnode.ChildNode && curnode.ChildNode.length) {
        curnode.ChildNode.forEach(item => {
          const idlist = newnode.ChildNode.map(f => f.PK_Guid);
          const i = idlist.indexOf(item.PK_Guid);
          if (i !== -1) {
            // 编辑
            newnode.ChildNode[i] = {
              ...item,
              ChildNode: newnode.ChildNode[i].ChildNode || null
            };
          } else {
            //新增
            newnode.ChildNode.unshift(item);
          }
        });
      }
      // 新加
      if (!(node.value.ChildNode || []).length) {
        newnode.ChildNode = null;
      }
      node.value = newnode;
    }, {
      deep: true
    });

    // 对外暴露方法
    __expose({});
    return (_ctx, _cache) => {
      const _component_tree_node = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("tree-node", true);
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["te-tree-node-content", {
          'te-selected': isNodeSelected(node.value)
        }]),
        onClick: _cache[1] || (_cache[1] = $event => toggleNode(node.value))
      }, [canExpand(node.value) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", {
        key: 0,
        class: "te-tree-expand-icon",
        onClick: _cache[0] || (_cache[0] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withModifiers)($event => handleToggleNode(node.value, $event), ["stop"]))
      }, [__props.expandedNodes.has(node.value.PK_Guid) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("i", _hoisted_2)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("i", _hoisted_3))])) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", _hoisted_4)), __props.mode !== 1 && (__props.chooseType == 1 && node.value.Level !== 2 || __props.chooseType == 2 && node.value.Level === 2 || __props.chooseType == 3) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", _hoisted_5, [!isNodeSelected(node.value) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", _hoisted_6)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", _hoisted_7))])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "nodename", {
        node: node.value
      }, () => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", _hoisted_8, [node.value.Level !== 2 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", _hoisted_9)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", _hoisted_10))]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
        class: "te-tree-node-name",
        title: `${node.value.Name} (${node.value.UserCount || 0})`
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(node.value.Name) + " ", 1), node.value.Level !== 2 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", _hoisted_12, "(" + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(node.value.UserCount || 0) + ")", 1)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 8, _hoisted_11), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", _hoisted_13, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, isNodeSelected(node.value)]])]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "append", {
        node: node.value
      })], 2), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["te-tree-child-nodes", {
          nodeconpamy: node.value.Level === 0
        }])
      }, [node.value.ChildNode && node.value.ChildNode.length > 0 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, {
        key: 0
      }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(node.value.ChildNode, childNode => {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_tree_node, {
          key: childNode.PK_Guid,
          propnode: childNode,
          mode: __props.mode,
          chooseType: __props.chooseType,
          "expanded-nodes": __props.expandedNodes,
          "tree-update-data": __props.treeUpdateData,
          "loading-nodes": __props.loadingNodes,
          "selected-nodes": __props.selectedNodes,
          "page-size": __props.pageSize,
          "search-key": __props.searchKey,
          depth: __props.depth + 1,
          onToggleNode: handleToggleNode,
          onLoadMoreNodes: handleLoadMore,
          "onUpdate:selected": toggleNode
        }, {
          nodename: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(scope => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "nodename", (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.guardReactiveProps)(scope)))]),
          append: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(scope => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "append", (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.guardReactiveProps)(scope)))]),
          _: 2
        }, 1032, ["propnode", "mode", "chooseType", "expanded-nodes", "tree-update-data", "loading-nodes", "selected-nodes", "page-size", "search-key", "depth"]);
      }), 128)), node.value.HasMore ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_14, [__props.loadingNodes.has(node.value.PK_Guid) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", _hoisted_15, [_hoisted_16, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" 正在加载,请稍后..")])) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        key: 1,
        onClick: _cache[2] || (_cache[2] = $event => handleLoadMore($event, node.value))
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("加载部门 "), _hoisted_17]))])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 64)) : __props.loadingNodes.has(node.value.PK_Guid) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_18, _hoisted_20)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_21, _hoisted_23))], 2), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, __props.expandedNodes.has(node.value.PK_Guid)]])]);
    };
  }
});
;// CONCATENATED MODULE: ./packages/tree-menu/TreeNode.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./packages/tree-menu/TreeNode.vue



const __exports__ = TreeNodevue_type_script_setup_true_lang_js;

/* harmony default export */ var TreeNode = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/tree-menu/Index.vue?vue&type=script&setup=true&lang=js

const Indexvue_type_script_setup_true_lang_js_hoisted_1 = {
  class: "te-tree"
};
const Indexvue_type_script_setup_true_lang_js_hoisted_2 = {
  class: "te-tree-search-box"
};
const Indexvue_type_script_setup_true_lang_js_hoisted_3 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-tree-search-icon"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-a-sousuolunkuohua"
})], -1);
const Indexvue_type_script_setup_true_lang_js_hoisted_4 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-a-guanbilunkuohua"
}, null, -1);
const Indexvue_type_script_setup_true_lang_js_hoisted_5 = [Indexvue_type_script_setup_true_lang_js_hoisted_4];
const Indexvue_type_script_setup_true_lang_js_hoisted_6 = {
  class: "te-tree-list"
};
const Indexvue_type_script_setup_true_lang_js_hoisted_7 = {
  key: 0,
  class: "te-tree-empty-data"
};
const Indexvue_type_script_setup_true_lang_js_hoisted_8 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-tree-loading-node"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-tree-animation-loading"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-loading"
})]), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" 正在加载,请稍后..")], -1);
const Indexvue_type_script_setup_true_lang_js_hoisted_9 = [Indexvue_type_script_setup_true_lang_js_hoisted_8];
const Indexvue_type_script_setup_true_lang_js_hoisted_10 = {
  key: 1,
  class: "te-tree-empty-data"
};
const Indexvue_type_script_setup_true_lang_js_hoisted_11 = {
  class: "col00a0e9"
};
const Indexvue_type_script_setup_true_lang_js_hoisted_12 = {
  key: 2
};
const Indexvue_type_script_setup_true_lang_js_hoisted_13 = {
  key: 0,
  class: "te-tree-load-more"
};
const Indexvue_type_script_setup_true_lang_js_hoisted_14 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-tree-animation-loading"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-loading"
})], -1);
const Indexvue_type_script_setup_true_lang_js_hoisted_15 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-a-xiangxialunkuohua"
}, null, -1);
const Indexvue_type_script_setup_true_lang_js_hoisted_16 = {
  key: 0,
  class: "te-tree-empty-data"
};
const Indexvue_type_script_setup_true_lang_js_hoisted_17 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-tree-loading-node"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-tree-animation-loading"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-loading"
})]), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" 正在加载,请稍后..")], -1);
const Indexvue_type_script_setup_true_lang_js_hoisted_18 = [Indexvue_type_script_setup_true_lang_js_hoisted_17];
const Indexvue_type_script_setup_true_lang_js_hoisted_19 = {
  key: 1,
  class: "te-tree-empty-data"
};
const Indexvue_type_script_setup_true_lang_js_hoisted_20 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-tree-loading-node"
}, "暂无数据", -1);
const Indexvue_type_script_setup_true_lang_js_hoisted_21 = [Indexvue_type_script_setup_true_lang_js_hoisted_20];
const Indexvue_type_script_setup_true_lang_js_hoisted_22 = {
  key: 0,
  class: "te-tree-load-more"
};
const Indexvue_type_script_setup_true_lang_js_hoisted_23 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-tree-animation-loading"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-loading"
})], -1);
const _hoisted_24 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-a-xiangxialunkuohua"
}, null, -1);
const _hoisted_25 = {
  key: 3,
  class: "te-tree-empty-data"
};
const _hoisted_26 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-tree-loading-node"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-tree-animation-loading"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-loading"
})]), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" 正在加载,请稍后..")], -1);
const _hoisted_27 = [_hoisted_26];



// 定义组件属性

/* harmony default export */ var Indexvue_type_script_setup_true_lang_js = ({
  __name: 'Index',
  props: {
    // 1:无checkbox模式单选，2:有checkbox模式单选， 3:有checkbox模式 多选
    mode: {
      type: Number,
      default: 1
    },
    // 0:都不能选择 1:选择部门，2 可以选择员工，3 部门+员工都可以选择
    chooseType: {
      type: Number,
      default: 1
    },
    // 初始选中数据
    initData: {
      type: Array,
      default: () => []
    },
    // 更新目录数据，平铺
    treeUpdateData: {
      type: Array,
      default: () => []
    },
    // 请求的函数
    getDepListApi: {
      type: Function,
      default: () => {}
    },
    // 只展示当前部门下的数据
    scopeNode: {
      type: Object,
      default: () => null
    },
    pageSize: {
      type: Number,
      default: 15
    },
    // 显示几级，0：只展示企业，1，展示企业+企业下面一级，2以此类推，默认展开第一个企业下的第一条数据，如果想要展开具体id数据，则需要配置levelList，需要按规则配置，
    showLevel: {
      type: Number,
      default: 0
    },
    // 需要展开的部门id,["企业A-id','企业A的下一级部门B-id",部门B部门的下一级部门C-id",...],这里面的个数要和showLevel保持一致
    levelList: {
      type: Array,
      default: []
    }
  },
  emits: ["update:selected"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const props = __props;

    // 定义事件
    const emit = __emit;
    const LevelNodeIndex = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);
    // 搜索关键字
    const searchKey = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)("");
    // 搜索出来的数据
    const searchData = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    const searchHasMore = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
    const searchLoadingNodes = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
    // 组织架构数据
    const orgData = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    const orgHasMore = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
    const orgLoadingNodes = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
    // 企业信息
    // const companyInfo = ref(null);
    // 已展开的节点ID
    const expandedNodes = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(new Set());
    // 已加载的节点数据缓存
    const loadedNodesCache = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)({});
    // 搜索结果-已展开的节点ID
    const expandedNodesSerach = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(new Set());
    // 搜索结果-已加载的节点数据缓存
    const loadedNodesCacheSerach = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)({});
    // 选中的节点
    const selectedNodes = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([...props.initData]);
    // 节点加载状态
    const loadingNodes = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(new Set());

    // 初始化加载企业数据
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(async () => {
      await loadCompanyData();
    });

    // 添加防抖函数
    const debounce = (fn, delay) => {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, args);
        }, delay);
      };
    };
    const isSearchMode = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => !!searchKey.value.trim());
    const apiFetch = params => props.getDepListApi(params);
    const getExpandedSet = () => isSearchMode.value ? expandedNodesSerach.value : expandedNodes.value;
    const getLoadedCache = () => isSearchMode.value ? loadedNodesCacheSerach.value : loadedNodesCache.value;
    const loadList = async ({
      dataRef,
      hasMoreRef,
      loadingRef,
      deptName
    }) => {
      const PageIndex = Math.floor((dataRef.value || []).length / props.pageSize) + 1;
      const response = await apiFetch({
        PageIndex,
        PageSize: props.pageSize,
        DeptId: (props.scopeNode || {}).PK_Guid || "",
        DeptName: deptName || ""
      });
      loadingRef && (loadingRef.value = false);
      if (response.Data && response.Data.length > 0) {
        dataRef.value = [...(dataRef.value || []), ...response.Data];
        hasMoreRef.value = response.HasMore;
      } else {
        dataRef.value = dataRef.value || [];
        hasMoreRef.value = false;
      }
      return response;
    };

    // 加载企业数据
    const loadCompanyData = async () => {
      try {
        orgLoadingNodes.value = true;
        const response = await loadList({
          dataRef: orgData,
          hasMoreRef: orgHasMore,
          loadingRef: orgLoadingNodes,
          deptName: ""
        });
        const PageIndex = 1;
        if (props.showLevel > 0 && (orgData.value || []).length <= props.pageSize) {
          const newid = props.levelList[LevelNodeIndex.value];
          let newnode = (response.Data || []).find(f => f.PK_Guid === newid);
          const nodeparams = newnode || (response.Data || [])[0] || {};
          if (nodeparams && (nodeparams.Level === 0 || nodeparams.Level === 1)) {
            toggleNode(nodeparams);
          } else {
            LevelNodeIndex.value = props.showLevel;
          }
        }
      } catch (error) {
        orgLoadingNodes.value = false;
        console.error("加载企业数据失败:", error);
      }
    };
    const loadMoreOrg = () => {
      orgLoadingNodes.value = true;
      loadCompanyData();
    };

    // 搜索部门
    const searchDepartment = async () => {
      if (!searchKey.value.trim()) return;
      expandedNodesSerach.value.clear();
      loadedNodesCacheSerach.value = {};
      try {
        await loadList({
          dataRef: searchData,
          hasMoreRef: searchHasMore,
          loadingRef: searchLoadingNodes,
          deptName: searchKey.value
        });
      } catch (error) {
        searchLoadingNodes.value = false;
        console.error("搜索部门失败:", error);
      }
    };
    const loadMoreSearch = () => {
      searchLoadingNodes.value = true;
      searchDepartment();
    };

    // 搜索防抖
    const debouncedSearch = debounce(() => {
      searchData.value = null;
      searchDepartment();
    }, 300);
    const clearFn = () => {
      searchData.value = null;
      searchKey.value = "";
    };

    // 展开/收起节点
    const toggleNode = async (node, event) => {
      event && event.stopPropagation();
      const nodeId = node.PK_Guid;
      const expanded = getExpandedSet();
      const cache = getLoadedCache();
      if (expanded.has(nodeId)) {
        expanded.delete(nodeId);
        return;
      }
      expanded.add(nodeId);
      if (!cache[nodeId]) {
        await loadChildNodes(node);
      }
    };

    // 加载子节点
    const loadChildNodes = async node => {
      const nodeId = node.PK_Guid;
      if (loadingNodes.value.has(nodeId)) return;
      loadingNodes.value.add(nodeId);
      try {
        const response = await apiFetch({
          PageIndex: 1,
          PageSize: props.pageSize,
          DeptId: nodeId || (props.scopeNode || {}).PK_Guid || "",
          DeptName: ""
        });
        node.ChildNode = response.Data || [];
        const cache = getLoadedCache();
        cache[nodeId] = true;
        node.HasMore = response.HasMore;
        LevelNodeIndex.value++;
        if (!response.Data.length) {
          LevelNodeIndex.value = props.showLevel;
        }
        if (response.Data.length && LevelNodeIndex.value < props.showLevel) {
          const newid = props.levelList[LevelNodeIndex.value];
          let newnode = node.ChildNode.find(f => f.PK_Guid === newid);
          const nodeparams = newnode || response.Data[0] || {};
          if (nodeparams.Level === 0 || nodeparams.Level === 1) {
            await toggleNode(nodeparams);
          } else {
            LevelNodeIndex.value = props.showLevel;
          }
        }
      } catch (error) {
        console.error("加载子节点失败:", error);
      } finally {
        loadingNodes.value.delete(nodeId);
      }
    };

    // 加载更多子节点
    const loadMoreChildNodes = async (event, parentNode) => {
      const nodeId = parentNode.PK_Guid;
      if (loadingNodes.value.has(nodeId)) return;
      loadingNodes.value.add(nodeId);
      try {
        // 计算当前页码
        const currentChildCount = parentNode.ChildNode ? parentNode.ChildNode.length : 0;
        const PageIndex = Math.floor(currentChildCount / props.pageSize) + 1;
        const response = await apiFetch({
          PageIndex: PageIndex,
          PageSize: props.pageSize,
          DeptId: nodeId || (props.scopeNode || {}).PK_Guid || "",
          DeptName: ""
        });
        parentNode.HasMore = response.HasMore;
        if (response.Data && response.Data.length > 0) {
          // 追加新的子节点数据
          if (!parentNode.ChildNode) {
            parentNode.ChildNode = [];
          }
          parentNode.ChildNode = [...parentNode.ChildNode, ...response.Data];
        }
      } catch (error) {
        console.error("加载更多子节点失败:", error);
      } finally {
        loadingNodes.value.delete(nodeId);
      }
    };

    // 确认选择
    const toggleSelectItem = node => {
      const index = selectedNodes.value.findIndex(selected => selected.PK_Guid === node.PK_Guid);
      if (props.mode !== 3) {
        if (index !== -1) {
          selectedNodes.value = [];
          return;
        } else {
          selectedNodes.value = [];
        }
      }
      if (index === -1) {
        // 添加到已选择列表
        selectedNodes.value.push(JSON.parse(JSON.stringify(node)));
      } else {
        // 从已选择列表中移除
        selectedNodes.value.splice(index, 1);
      }
      emit("update:selected", selectedNodes.value && selectedNodes.value.length ? selectedNodes.value : null);
    };

    // 监听初始数据变化
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.initData, newVal => {
      selectedNodes.value = [...newVal];
    }, {
      deep: true
    });

    // 对外暴露方法
    __expose({});
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Indexvue_type_script_setup_true_lang_js_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Indexvue_type_script_setup_true_lang_js_hoisted_2, [Indexvue_type_script_setup_true_lang_js_hoisted_3, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
        type: "text",
        class: "te-tree-search-input",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => searchKey.value = $event),
        placeholder: "搜索部门",
        onInput: _cache[1] || (_cache[1] = (...args) => (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(debouncedSearch) && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(debouncedSearch)(...args))
      }, null, 544), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vModelText, searchKey.value, void 0, {
        trim: true
      }]]), searchKey.value ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", {
        key: 0,
        class: "te-tree-search-close-icon",
        onClick: clearFn
      }, Indexvue_type_script_setup_true_lang_js_hoisted_5)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Indexvue_type_script_setup_true_lang_js_hoisted_6, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", null, [!searchData.value ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", Indexvue_type_script_setup_true_lang_js_hoisted_7, Indexvue_type_script_setup_true_lang_js_hoisted_9)) : searchData.value.length === 0 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", Indexvue_type_script_setup_true_lang_js_hoisted_10, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" 没有查询到"), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", Indexvue_type_script_setup_true_lang_js_hoisted_11, "“" + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(searchKey.value) + "”", 1)])) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", Indexvue_type_script_setup_true_lang_js_hoisted_12, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(searchData.value, node => {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(TreeNode, {
          key: node.PK_Guid,
          propnode: node,
          mode: __props.mode,
          chooseType: __props.chooseType,
          "expanded-nodes": expandedNodesSerach.value,
          "tree-update-data": __props.treeUpdateData,
          "loading-nodes": loadingNodes.value,
          "selected-nodes": selectedNodes.value,
          "page-size": __props.pageSize,
          "search-key": searchKey.value,
          onToggleNode: toggleNode,
          onLoadMoreNodes: loadMoreChildNodes,
          "onUpdate:selected": toggleSelectItem
        }, {
          nodename: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(scope => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "nodename", (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.guardReactiveProps)(scope)))]),
          append: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(scope => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "append", (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.guardReactiveProps)(scope)))]),
          _: 2
        }, 1032, ["propnode", "mode", "chooseType", "expanded-nodes", "tree-update-data", "loading-nodes", "selected-nodes", "page-size", "search-key"]);
      }), 128)), searchLoadingNodes.value ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", Indexvue_type_script_setup_true_lang_js_hoisted_13, [Indexvue_type_script_setup_true_lang_js_hoisted_14, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" 正在加载,请稍后.. ")])) : searchHasMore.value ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        key: 1,
        onClick: loadMoreSearch,
        class: "te-tree-load-more"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("加载更多"), Indexvue_type_script_setup_true_lang_js_hoisted_15])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)]))], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, searchKey.value]]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", null, [orgData.value === null ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", Indexvue_type_script_setup_true_lang_js_hoisted_16, Indexvue_type_script_setup_true_lang_js_hoisted_18)) : orgData.value.length === 0 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", Indexvue_type_script_setup_true_lang_js_hoisted_19, Indexvue_type_script_setup_true_lang_js_hoisted_21)) : LevelNodeIndex.value >= __props.showLevel ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, {
        key: 2
      }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(orgData.value, node => {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(TreeNode, {
          key: node.PK_Guid,
          propnode: node,
          mode: __props.mode,
          chooseType: __props.chooseType,
          "expanded-nodes": expandedNodes.value,
          "tree-update-data": __props.treeUpdateData,
          "loading-nodes": loadingNodes.value,
          "selected-nodes": selectedNodes.value,
          "page-size": __props.pageSize,
          "search-key": searchKey.value,
          onToggleNode: toggleNode,
          onLoadMoreNodes: loadMoreChildNodes,
          "onUpdate:selected": toggleSelectItem
        }, {
          nodename: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(scope => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "nodename", (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.guardReactiveProps)(scope)))]),
          append: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(scope => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "append", (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.guardReactiveProps)(scope)))]),
          _: 2
        }, 1032, ["propnode", "mode", "chooseType", "expanded-nodes", "tree-update-data", "loading-nodes", "selected-nodes", "page-size", "search-key"]);
      }), 128)), orgLoadingNodes.value ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", Indexvue_type_script_setup_true_lang_js_hoisted_22, [Indexvue_type_script_setup_true_lang_js_hoisted_23, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" 正在加载,请稍后.. ")])) : orgHasMore.value ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        key: 1,
        onClick: loadMoreOrg,
        class: "te-tree-load-more"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("加载更多"), _hoisted_24])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 64)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_25, _hoisted_27))], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, !searchKey.value]])])])]);
    };
  }
});
;// CONCATENATED MODULE: ./packages/tree-menu/Index.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-74.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-74.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-74.use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-74.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/tree-menu/Index.vue?vue&type=style&index=0&id=22c5aebc&lang=less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/tree-menu/Index.vue?vue&type=style&index=0&id=22c5aebc&lang=less

;// CONCATENATED MODULE: ./packages/tree-menu/Index.vue



;

const Index_exports_ = Indexvue_type_script_setup_true_lang_js;

/* harmony default export */ var Index = (Index_exports_);
;// CONCATENATED MODULE: ./packages/utils/breadcrum.js
const UseBreadcrum = () => {
  var depItems = [];
  var depIds = [];

  /**
   * 获取部门路径
   * @param {Array} data 原始数据
   * @param {String} deptId 部门ID
   * @returns {Promise<Array>} 部门路径数组，从根部门到当前部门
   */
  function getDepartmentPath(currentDept, companyItem) {
    // 初始加载
    if (!currentDept) {
      depIds = [""];
      depItems = [{
        Name: companyItem.Name,
        PK_Guid: ""
      }];
      return depItems;
    }

    // 存在路径中
    var index = depIds.indexOf(currentDept.PK_Guid);
    if (currentDept && index !== -1) {
      depIds = depIds.slice(0, index + 1);
      depItems = depItems.slice(0, index + 1);
    } else {
      depIds.push(currentDept.PK_Guid);
      depItems.push({
        ...currentDept
      });
    }
    return depItems;
  }

  /**
   * 清除部门路径缓存
   */
  function clearDepartmentPathCache() {
    depItems = [];
    depIds = [];
  }
  return {
    getDepartmentPath,
    clearDepartmentPathCache
  };
};
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/tree-selector/DepartmentList.vue?vue&type=script&setup=true&lang=js

const DepartmentListvue_type_script_setup_true_lang_js_hoisted_1 = {
  class: "te-deep-dep-list"
};
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_2 = {
  key: 0,
  class: "te-deep-breadcrumb-nav"
};
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_3 = ["onClick"];
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_4 = {
  key: 0
};
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_5 = {
  key: 1,
  class: "te-deep-load-tree-node"
};
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_6 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-deep-animation-loading"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-loading"
})], -1);
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_7 = {
  key: 2,
  class: "te-deep-empty-tip"
};
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_8 = {
  key: 3,
  class: "te-deep-deplistcon"
};
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_9 = {
  key: 0,
  class: "te-deep-dept-row"
};
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_10 = ["onClick"];
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_11 = ["onClick"];
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_12 = {
  key: 0,
  class: "iconfont icon-weixuanzhong1"
};
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_13 = {
  key: 1,
  class: "iconfont icon-xuanzhong2"
};
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_14 = ["onClick"];
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_15 = {
  key: 0,
  class: "iconfont icon-bumen"
};
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_16 = {
  key: 1,
  class: "iconfont icon-bumen2"
};
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_17 = {
  key: 1,
  class: "te-deep-employee-row"
};
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_18 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-deep-placeholder-icon"
}, null, -1);
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_19 = ["onClick"];
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_20 = {
  key: 0,
  class: "iconfont icon-weixuanzhong1"
};
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_21 = {
  key: 1,
  class: "iconfont icon-xuanzhong2"
};
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_22 = ["onClick"];
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_23 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-yuangong"
}, null, -1);
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_24 = {
  key: 0,
  class: "te-deep-load-more"
};
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_25 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-deep-animation-loading"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-loading"
})], -1);
const DepartmentListvue_type_script_setup_true_lang_js_hoisted_26 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-a-xiangxialunkuohua"
}, null, -1);



// 定义组件属性

/* harmony default export */ var DepartmentListvue_type_script_setup_true_lang_js = ({
  __name: 'DepartmentList',
  props: {
    // 选择类型：0-都不可选择，只能查看，1-只能选择部门，2-只能选择员工，3-员工部门都可以选择
    chooseType: {
      type: Number,
      default: 2
    },
    // 已选择的数据
    selectedItems: {
      type: Array,
      required: true
    },
    scopeNode: {
      type: Object,
      default: () => null
    },
    // 请求的函数
    getDepListApi: {
      type: Function,
      default: () => {}
    },
    // 根面包屑名称()
    rootNodeName: {
      type: String,
      default: ""
    },
    pageSize: {
      type: Number,
      default: 15
    }
  },
  emits: ["toggle-select", "dept-click", "breadcrumb-click"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const props = __props;

    // 定义事件
    const emit = __emit;
    const useBreadcrum = UseBreadcrum();

    // 当前部门ID
    const currentDeptId = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    // 当前部门
    const currentDept = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);

    // 分页参数
    const pagination = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)({
      PageIndex: 1,
      PageSize: props.pageSize,
      HasMore: true
    });

    // 组织架构数据
    const deptList = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]);

    // 加载状态
    const loading = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);

    // 面包屑导航数据
    const breadcrumb = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]);

    // 计算属性：根据propstype判断是否可以选择部门
    const canSelectDept = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => props.chooseType === 1 || props.chooseType === 3);

    // 计算属性：根据propstype判断是否可以选择员工
    const canSelectEmployee = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => props.chooseType === 2 || props.chooseType === 3);

    // 加载部门数据
    const loadDeptData = async () => {
      try {
        loading.value = true;

        // 调用API获取部门和用户列表
        const result = await props.getDepListApi({
          PageIndex: pagination.value.PageIndex,
          PageSize: pagination.value.PageSize,
          DeptId: currentDept.value ? currentDept.value.PK_Guid : (props.scopeNode || {}).PK_Guid
        });
        const {
          Data,
          HasMore
        } = result;
        pagination.value.HasMore = HasMore;
        // console.log(Data);
        // console.log(breadcrumb.value);

        // 更新数据列表
        if (pagination.value.PageIndex === 1) {
          deptList.value = Data;
        } else {
          deptList.value = [...deptList.value, ...Data];
        }
        let companyItem = null;
        if ((Data || []).length && Data[0].Level === 0) {
          companyItem = Data[0];
        }
        const rootname = {
          Name: props.rootNodeName,
          PK_Guid: null,
          Level: 0
        }; //props.rootNodeName?{Name:props.rootNodeName,PK_Guid:null, Level:0 } : companyItem

        // 更新面包屑导航
        const BreadcrumbData = useBreadcrum.getDepartmentPath(currentDept.value || props.scopeNode || null, rootname);
        if (BreadcrumbData) {
          breadcrumb.value = BreadcrumbData;
        }

        // 更新是否有更多数据
        // pagination.value.HasMore = data.length === pagination.value.PageSize;
      } catch (error) {
        console.error("加载部门数据失败:", error);
        alert("加载部门数据失败");
      } finally {
        loading.value = false;
      }
    };

    // 加载更多数据
    const loadMore = () => {
      pagination.value.PageIndex++;
      loadDeptData();
    };

    // 点击部门，加载子部门
    const handleDeptClick = dept => {
      currentDeptId.value = dept.PK_Guid;
      currentDept.value = dept;
      pagination.value.PageIndex = 1;
      // pagination.value.HasMore = true;
      deptList.value = [];
      loadDeptData();

      // 通知父组件部门点击事件
      emit("dept-click", dept);
    };

    // 判断项目是否已选中
    const isItemSelected = item => {
      return props.selectedItems.some(selected => selected.PK_Guid === item.PK_Guid);
    };

    // 选择或取消选择项目
    const toggleSelectItem = item => {
      if (canSelectDept.value || canSelectEmployee.value) emit("toggle-select", item);
    };

    // 处理面包屑点击
    const handleBreadcrumbClick = (dept, index) => {
      if (breadcrumb.value.length - 1 === index) return;
      //if (breadcrumb.value.length - 1 === index && dept.Level !== 0 && (!dept.ChildNode || !dept.ChildNode.length)) {
      //    return
      //}

      currentDeptId.value = dept ? dept.PK_Guid : null;
      currentDept.value = dept || null;
      pagination.value.PageIndex = 1;
      //pagination.value.HasMore = true;
      deptList.value = [];
      loadDeptData();

      // 通知父组件面包屑点击事件
      emit("breadcrumb-click", currentDeptId.value);
    };

    // 初始化加载数据
    const initLoad = () => {
      deptList.value = [];
      currentDeptId.value = null;
      currentDept.value = null;
      pagination.value.PageIndex = 1;
      breadcrumb.value = [];
      useBreadcrum.clearDepartmentPathCache();
      loadDeptData();
    };

    // 对外暴露方法
    __expose({
      initLoad,
      loadDeptData
    });
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", DepartmentListvue_type_script_setup_true_lang_js_hoisted_1, [breadcrumb.value.length > 0 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", DepartmentListvue_type_script_setup_true_lang_js_hoisted_2, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(breadcrumb.value, (item, index) => {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", {
          class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["te-deep-navitem", {
            col00a0e9: index !== breadcrumb.value.length - 1
          }]),
          key: index,
          onClick: $event => handleBreadcrumbClick(item, index)
        }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item.Name), 1), index !== breadcrumb.value.length - 1 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", DepartmentListvue_type_script_setup_true_lang_js_hoisted_4, " > ")) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 10, DepartmentListvue_type_script_setup_true_lang_js_hoisted_3);
      }), 128))])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), loading.value && deptList.value.length === 0 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", DepartmentListvue_type_script_setup_true_lang_js_hoisted_5, [DepartmentListvue_type_script_setup_true_lang_js_hoisted_6, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" 正在加载,请稍后.. ")])) : deptList.value.length === 0 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", DepartmentListvue_type_script_setup_true_lang_js_hoisted_7, "暂无数据")) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", DepartmentListvue_type_script_setup_true_lang_js_hoisted_8, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(deptList.value, item => {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
          key: item.PK_Guid,
          class: "te-deep-dept-item"
        }, [item.Level === 0 || item.Level === 1 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", DepartmentListvue_type_script_setup_true_lang_js_hoisted_9, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
          class: "iconfont icon-a-xiangyoulunkuohua expand-icon",
          onClick: $event => handleDeptClick(item)
        }, null, 8, DepartmentListvue_type_script_setup_true_lang_js_hoisted_10), canSelectDept.value ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", {
          key: 0,
          class: "te-checkbox",
          onClick: $event => toggleSelectItem(item)
        }, [!isItemSelected(item) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", DepartmentListvue_type_script_setup_true_lang_js_hoisted_12)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", DepartmentListvue_type_script_setup_true_lang_js_hoisted_13))], 8, DepartmentListvue_type_script_setup_true_lang_js_hoisted_11)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
          class: "te-deep-dept-name",
          onClick: $event => canSelectDept.value ? toggleSelectItem(item) : handleDeptClick(item)
        }, [item.Level === 0 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("i", DepartmentListvue_type_script_setup_true_lang_js_hoisted_15)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), item.Level === 1 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("i", DepartmentListvue_type_script_setup_true_lang_js_hoisted_16)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" " + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item.Name), 1)], 8, DepartmentListvue_type_script_setup_true_lang_js_hoisted_14)])) : item.Level === 2 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", DepartmentListvue_type_script_setup_true_lang_js_hoisted_17, [DepartmentListvue_type_script_setup_true_lang_js_hoisted_18, canSelectEmployee.value ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", {
          key: 0,
          class: "te-checkbox",
          onClick: $event => toggleSelectItem(item)
        }, [!isItemSelected(item) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", DepartmentListvue_type_script_setup_true_lang_js_hoisted_20)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", DepartmentListvue_type_script_setup_true_lang_js_hoisted_21))], 8, DepartmentListvue_type_script_setup_true_lang_js_hoisted_19)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
          class: "te-deep-employee-name",
          onClick: $event => toggleSelectItem(item)
        }, [DepartmentListvue_type_script_setup_true_lang_js_hoisted_23, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item.Name), 1)], 8, DepartmentListvue_type_script_setup_true_lang_js_hoisted_22)])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)]);
      }), 128)), pagination.value.HasMore ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", DepartmentListvue_type_script_setup_true_lang_js_hoisted_24, [loading.value ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, {
        key: 0
      }, [DepartmentListvue_type_script_setup_true_lang_js_hoisted_25, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" 正在加载,请稍后.. ")], 64)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        key: 1,
        onClick: loadMore
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("查看更多 "), DepartmentListvue_type_script_setup_true_lang_js_hoisted_26]))])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)]))]);
    };
  }
});
;// CONCATENATED MODULE: ./packages/tree-selector/DepartmentList.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./packages/tree-selector/DepartmentList.vue



const DepartmentList_exports_ = DepartmentListvue_type_script_setup_true_lang_js;

/* harmony default export */ var DepartmentList = (DepartmentList_exports_);
;// CONCATENATED MODULE: ./packages/utils/index.js
// 防抖
function debounce(fn, delay) {
  var timeout = null;
  return function () {
    var args = arguments;
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null;
        fn.apply(this, args);
      }, delay);
    }
  };
}
function deepclone(target) {
  target = target; //  || {}
  if (typeof target !== 'object' || target == null || target instanceof Date) {
    return target;
  }
  var ret;
  if (target instanceof Array) {
    ret = [];
  } else {
    ret = {};
  }
  for (var key in target) {
    if (target.hasOwnProperty(key)) {
      ret[key] = deepclone(target[key]);
    }
  }
  return ret;
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/tree-selector/SearchBar.vue?vue&type=script&setup=true&lang=js

const SearchBarvue_type_script_setup_true_lang_js_hoisted_1 = {
  class: "te-search"
};
const SearchBarvue_type_script_setup_true_lang_js_hoisted_2 = {
  class: "te-deep-search-box"
};
const SearchBarvue_type_script_setup_true_lang_js_hoisted_3 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-deep-search-icon"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-a-sousuolunkuohua"
})], -1);
const SearchBarvue_type_script_setup_true_lang_js_hoisted_4 = ["disabled"];
const SearchBarvue_type_script_setup_true_lang_js_hoisted_5 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-a-guanbilunkuohua"
}, null, -1);
const SearchBarvue_type_script_setup_true_lang_js_hoisted_6 = [SearchBarvue_type_script_setup_true_lang_js_hoisted_5];
const SearchBarvue_type_script_setup_true_lang_js_hoisted_7 = {
  key: 0,
  class: "te-search-search-popover"
};
const SearchBarvue_type_script_setup_true_lang_js_hoisted_8 = {
  key: 0,
  class: "te-search-load-tree-node"
};
const SearchBarvue_type_script_setup_true_lang_js_hoisted_9 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "te-deep-animation-loading"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
  class: "iconfont icon-loading"
})], -1);
const SearchBarvue_type_script_setup_true_lang_js_hoisted_10 = {
  key: 1,
  class: "te-search-search-result-list"
};
const SearchBarvue_type_script_setup_true_lang_js_hoisted_11 = {
  key: 0,
  class: "te-search-dept-result-row"
};
const SearchBarvue_type_script_setup_true_lang_js_hoisted_12 = ["onClick"];
const SearchBarvue_type_script_setup_true_lang_js_hoisted_13 = {
  key: 0,
  class: "iconfont icon-weixuanzhong1"
};
const SearchBarvue_type_script_setup_true_lang_js_hoisted_14 = {
  key: 1,
  class: "iconfont icon-xuanzhong2"
};
const SearchBarvue_type_script_setup_true_lang_js_hoisted_15 = ["onClick"];
const SearchBarvue_type_script_setup_true_lang_js_hoisted_16 = ["onClick"];
const SearchBarvue_type_script_setup_true_lang_js_hoisted_17 = ["onClick"];
const SearchBarvue_type_script_setup_true_lang_js_hoisted_18 = {
  key: 0,
  class: "iconfont icon-weixuanzhong1"
};
const SearchBarvue_type_script_setup_true_lang_js_hoisted_19 = {
  key: 1,
  class: "iconfont icon-xuanzhong2"
};
const SearchBarvue_type_script_setup_true_lang_js_hoisted_20 = ["onClick"];
const SearchBarvue_type_script_setup_true_lang_js_hoisted_21 = {
  key: 2,
  style: {
    "padding": "20px",
    "text-align": "center"
  }
};
const SearchBarvue_type_script_setup_true_lang_js_hoisted_22 = {
  class: "col00a0e9"
};



// 定义组件属性

/* harmony default export */ var SearchBarvue_type_script_setup_true_lang_js = ({
  __name: 'SearchBar',
  props: {
    chooseType: {
      type: Number,
      default: 2
    },
    // 是否禁用搜索
    disabled: {
      type: Boolean,
      default: false
    },
    selectedItems: {
      type: Object,
      default: () => []
    },
    scopeNode: {
      type: Object,
      default: () => null
    },
    // 请求的函数
    getDepListApi: {
      type: Function,
      default: () => {}
    },
    pageSize: {
      type: Number,
      default: 15
    }
  },
  emits: ["select-item"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const props = __props;

    // 定义事件
    const emit = __emit;

    // 搜索关键词
    const searchKey = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)("");
    const searchPopoverVisible = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
    const searchResults = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]);

    // 搜索相关的响应式变量
    const searchLoading = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);

    // 处理搜索（原始函数，将被防抖包装）
    const doSearch = async () => {
      if (!searchKey.value.trim()) {
        searchResults.value = [];
        searchPopoverVisible.value = false;
        return;
      }
      try {
        searchLoading.value = true;
        searchPopoverVisible.value = true;

        // 调用API获取搜索结果
        const result = await props.getDepListApi({
          PageIndex: 1,
          PageSize: props.pageSize,
          DeptId: (props.scopeNode || {}).PK_Guid,
          // TODO  id
          DeptName: searchKey.value.trim() // TODO  searchKey
        });

        // 根据选择类型过滤搜索结果
        let filteredResults = result.Data || [];
        //if (props.chooseType === 1) { // 只能选择部门
        //  filteredResults = filteredResults.filter(item => item.Level === 1);
        //} else if (props.chooseType === 2) { // 只能选择员工
        //  filteredResults = filteredResults.filter(item => item.Level === 2);
        //}
        console.log(filteredResults);
        searchResults.value = filteredResults;
      } catch (error) {
        ElMessage.error("搜索失败");
        searchResults.value = [];
      } finally {
        searchLoading.value = false;
      }
    };

    // 使用防抖包装搜索函数，300ms延迟
    const handleSearch = debounce(doSearch, 300);

    // 清空搜索
    const clearSearch = () => {
      searchKey.value = "";
      searchPopoverVisible.value = false;
      searchResults.value = [];
    };

    // 选择或取消选择项目
    const toggleSelectItem = item => {
      if (props.chooseType === 0) return;
      emit("select-item", item);
    };

    // 关闭搜索浮层
    const closeSearchPopover = () => {
      searchPopoverVisible.value = false;
    };

    // 监听搜索关键词变化
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(searchKey, newVal => {
      if (newVal === "") {
        searchPopoverVisible.value = false;
        searchResults.value = [];
      }
    });
    // 对外暴露方法
    __expose({
      clearSearch
    });
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", SearchBarvue_type_script_setup_true_lang_js_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", SearchBarvue_type_script_setup_true_lang_js_hoisted_2, [SearchBarvue_type_script_setup_true_lang_js_hoisted_3, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
        type: "text",
        class: "te-deep-search-input",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => searchKey.value = $event),
        placeholder: "姓名/手机号码/部门",
        onInput: _cache[1] || (_cache[1] = (...args) => (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(handleSearch) && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(handleSearch)(...args)),
        disabled: __props.disabled
      }, null, 40, SearchBarvue_type_script_setup_true_lang_js_hoisted_4), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vModelText, searchKey.value, void 0, {
        trim: true
      }]]), searchKey.value ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", {
        key: 0,
        class: "te-deep-search-close-icon",
        onClick: _cache[2] || (_cache[2] = $event => searchKey.value = '')
      }, SearchBarvue_type_script_setup_true_lang_js_hoisted_6)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "search-results"), searchPopoverVisible.value ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", SearchBarvue_type_script_setup_true_lang_js_hoisted_7, [searchLoading.value ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", SearchBarvue_type_script_setup_true_lang_js_hoisted_8, [SearchBarvue_type_script_setup_true_lang_js_hoisted_9, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" 正在加载,请稍后.. ")])) : searchResults.value.length > 0 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", SearchBarvue_type_script_setup_true_lang_js_hoisted_10, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(searchResults.value, item => {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
          key: item.PK_Guid,
          class: "te-search-search-result-item"
        }, [item.Level === 1 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", SearchBarvue_type_script_setup_true_lang_js_hoisted_11, [__props.chooseType === 1 || __props.chooseType === 3 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", {
          key: 0,
          class: "te-checkbox",
          onClick: $event => toggleSelectItem(item)
        }, [!__props.selectedItems.some(selected => selected.PK_Guid === item.PK_Guid) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", SearchBarvue_type_script_setup_true_lang_js_hoisted_13)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", SearchBarvue_type_script_setup_true_lang_js_hoisted_14))], 8, SearchBarvue_type_script_setup_true_lang_js_hoisted_12)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
          class: "te-search-dept-name",
          onClick: $event => toggleSelectItem(item)
        }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item.Name), 9, SearchBarvue_type_script_setup_true_lang_js_hoisted_15)])) : item.Level === 2 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
          key: 1,
          class: "te-search-employee-result-row",
          onClick: $event => toggleSelectItem(item)
        }, [__props.chooseType === 2 || __props.chooseType === 3 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", {
          key: 0,
          class: "te-checkbox",
          onClick: $event => toggleSelectItem(item)
        }, [!__props.selectedItems.some(selected => selected.PK_Guid === item.PK_Guid) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", SearchBarvue_type_script_setup_true_lang_js_hoisted_18)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", SearchBarvue_type_script_setup_true_lang_js_hoisted_19))], 8, SearchBarvue_type_script_setup_true_lang_js_hoisted_17)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
          class: "te-search-employee-name",
          onClick: $event => toggleSelectItem(item)
        }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item.Name), 9, SearchBarvue_type_script_setup_true_lang_js_hoisted_20)], 8, SearchBarvue_type_script_setup_true_lang_js_hoisted_16)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)]);
      }), 128))])) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", SearchBarvue_type_script_setup_true_lang_js_hoisted_21, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" 没有搜索到"), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", SearchBarvue_type_script_setup_true_lang_js_hoisted_22, "“" + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(searchKey.value) + "”", 1)]))])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), searchPopoverVisible.value ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        key: 1,
        onClick: _cache[3] || (_cache[3] = $event => closeSearchPopover()),
        class: "te-search-search-popover-bg"
      })) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)]);
    };
  }
});
;// CONCATENATED MODULE: ./packages/tree-selector/SearchBar.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./packages/tree-selector/SearchBar.vue



const SearchBar_exports_ = SearchBarvue_type_script_setup_true_lang_js;

/* harmony default export */ var SearchBar = (SearchBar_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/tree-selector/SelectedList.vue?vue&type=script&setup=true&lang=js

const SelectedListvue_type_script_setup_true_lang_js_hoisted_1 = {
  class: "te-deep-right-panel"
};
const SelectedListvue_type_script_setup_true_lang_js_hoisted_2 = {
  class: "te-deep-panel-title"
};
const SelectedListvue_type_script_setup_true_lang_js_hoisted_3 = {
  class: "te-deep-selected-list"
};
const SelectedListvue_type_script_setup_true_lang_js_hoisted_4 = {
  key: 0,
  class: "te-deep-empty-data",
  style: {
    "margin-top": "0"
  }
};
const SelectedListvue_type_script_setup_true_lang_js_hoisted_5 = {
  key: 1
};
const SelectedListvue_type_script_setup_true_lang_js_hoisted_6 = {
  key: 0,
  class: "te-deep-select-title"
};
const SelectedListvue_type_script_setup_true_lang_js_hoisted_7 = {
  key: 0,
  class: "iconfont icon-bumen2"
};
const SelectedListvue_type_script_setup_true_lang_js_hoisted_8 = {
  key: 1,
  class: "iconfont icon-yuangong"
};
const SelectedListvue_type_script_setup_true_lang_js_hoisted_9 = {
  class: "te-deep-select-item-name"
};
const SelectedListvue_type_script_setup_true_lang_js_hoisted_10 = ["onClick"];


// 定义组件属性

/* harmony default export */ var SelectedListvue_type_script_setup_true_lang_js = ({
  __name: 'SelectedList',
  props: {
    chooseType: {
      type: Number,
      default: 2
    },
    // 已选择的数据
    selectedItems: {
      type: Array,
      required: true
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["remove-item"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const props = __props;

    // 定义事件
    const emit = __emit;

    // 计算属性：根据类型过滤已选择的项目
    const filteredSelectedItems = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
      let data = [];
      if (props.chooseType === 1) {
        // 只显示部门
        data = props.selectedItems.filter(item => item.Level === 0 || item.Level === 1);
      } else if (props.chooseType === 2) {
        // 只显示员工
        data = props.selectedItems.filter(item => item.Level === 2);
      } else {
        // 显示所有
        data = props.selectedItems;
      }
      const bm = props.selectedItems.filter(item => item.Level === 0 || item.Level === 1);
      const yg = props.selectedItems.filter(item => item.Level === 2);
      return [{
        title: "部门",
        showtit: yg.length && bm.length,
        list: bm,
        alltotal: props.selectedItems.length
      }, {
        title: "员工",
        showtit: yg.length && bm.length,
        list: yg,
        alltotal: props.selectedItems.length
      }];
    });

    // 移除已选择的项目
    const removeSelectedItem = item => {
      if (props.disabled) return;
      emit("remove-item", item);
    };

    // 获取项目类型标签
    const getItemTypeTag = item => {
      return item.Level === 1 ? "部门" : "员工";
    };
    // 对外暴露方法
    __expose({});
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", SelectedListvue_type_script_setup_true_lang_js_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", SelectedListvue_type_script_setup_true_lang_js_hoisted_2, "已选择(" + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(filteredSelectedItems.value.length ? filteredSelectedItems.value[0].alltotal : 0) + ")", 1), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", SelectedListvue_type_script_setup_true_lang_js_hoisted_3, [filteredSelectedItems.value.length === 0 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", SelectedListvue_type_script_setup_true_lang_js_hoisted_4)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", SelectedListvue_type_script_setup_true_lang_js_hoisted_5, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(filteredSelectedItems.value, filter => {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
          key: filter.PK_Guid
        }, [filter.showtit ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", SelectedListvue_type_script_setup_true_lang_js_hoisted_6, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(filter.title), 1)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(filter.list, item => {
          return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
            key: item.PK_Guid,
            class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["te-deep-selected-item", {
              'te-deep-margin-left-20': filter.showtit
            }])
          }, [item.Level === 0 || item.Level === 1 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("i", SelectedListvue_type_script_setup_true_lang_js_hoisted_7)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("i", SelectedListvue_type_script_setup_true_lang_js_hoisted_8)), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", SelectedListvue_type_script_setup_true_lang_js_hoisted_9, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item.Name), 1), !__props.disabled ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("i", {
            key: 2,
            class: "iconfont icon-a-guanbilunkuohua te-deep-remove-btn",
            onClick: $event => removeSelectedItem(item)
          }, null, 8, SelectedListvue_type_script_setup_true_lang_js_hoisted_10)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 2);
        }), 128))]);
      }), 128))]))])]);
    };
  }
});
;// CONCATENATED MODULE: ./packages/tree-selector/SelectedList.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./packages/tree-selector/SelectedList.vue



const SelectedList_exports_ = SelectedListvue_type_script_setup_true_lang_js;

/* harmony default export */ var SelectedList = (SelectedList_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/tree-selector/Index.vue?vue&type=script&setup=true&lang=js

const tree_selector_Indexvue_type_script_setup_true_lang_js_hoisted_1 = {
  class: "te-deep"
};
const tree_selector_Indexvue_type_script_setup_true_lang_js_hoisted_2 = {
  class: "te-deep-content"
};
const tree_selector_Indexvue_type_script_setup_true_lang_js_hoisted_3 = {
  class: "te-deep-left-panel"
};
const tree_selector_Indexvue_type_script_setup_true_lang_js_hoisted_4 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "te-deep-panel-title"
}, "请选择", -1);
const tree_selector_Indexvue_type_script_setup_true_lang_js_hoisted_5 = {
  class: "te-deep-list-container"
};





// 定义组件属性

/* harmony default export */ var tree_selector_Indexvue_type_script_setup_true_lang_js = ({
  __name: 'Index',
  props: {
    // 选择类型：0-都不能选择 1-只能选择部门，2-只能选择员工，3-员工部门都可以选择
    chooseType: {
      type: Number,
      default: 2
    },
    // 只展示当前部门下的数据
    scopeNode: {
      type: Object,
      default: () => null
    },
    // 初始选中数据
    initData: {
      type: Array,
      default: () => []
    },
    // 是否单选
    singleChoice: {
      type: Boolean,
      default: false
    },
    // 请求的函数
    getDepListApi: {
      type: Function,
      default: () => {}
    },
    // 根面包屑名称()
    rootNodeName: {
      type: String,
      default: "全部"
    },
    pageSize: {
      type: Number,
      default: 15
    }
  },
  emits: ["confirm", "cancel"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const props = __props;

    // 定义事件
    const emit = __emit;

    // 已选择的数据
    const selectedItems = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]);

    // 子组件引用
    const searchBarRef = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    const departmentListRef = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);

    // 计算属性：是否禁用操作
    const isDisabled = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => false);
    const deepClone = obj => JSON.parse(JSON.stringify(obj));
    const indexOfItem = (listRef, item) => listRef.value.findIndex(selected => selected.PK_Guid === item.PK_Guid);
    const setSelected = items => {
      selectedItems.value = deepClone(items);
    };
    const clearSearchIfNeeded = () => {
      if (searchBarRef.value) {
        searchBarRef.value.clearSearch();
      }
    };
    const initChildComponents = () => {
      if (departmentListRef.value) {
        departmentListRef.value.initLoad();
      }
      clearSearchIfNeeded();
    };
    const applySingleChoiceBehavior = index => {
      if (props.singleChoice) {
        if (index !== -1) {
          selectedItems.value = [];
          return true;
        } else {
          selectedItems.value = [];
        }
      }
      return false;
    };

    // 初始化已选择数据
    const initSelectedItems = () => {
      setSelected(props.initData);
    };

    // 打开弹窗
    const openDialog = () => {
      initSelectedItems();
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_.nextTick)(() => {
        initChildComponents();
      });
    };

    // 选择或取消选择项目
    const toggleSelectItem = item => {
      const index = indexOfItem(selectedItems, item);
      if (applySingleChoiceBehavior(index)) return;
      if (index === -1) {
        selectedItems.value.push(deepClone(item));
      } else {
        selectedItems.value.splice(index, 1);
      }
    };

    // 从已选择列表中移除项目
    const removeSelectedItem = item => {
      const index = indexOfItem(selectedItems, item);
      if (index !== -1) {
        selectedItems.value.splice(index, 1);
      }
    };

    // 确认选择
    const handleConfirm = () => {
      emit("confirm", selectedItems.value);
    };

    // 取消选择
    const handleCancel = () => {
      emit("cancel");
    };

    // 处理部门点击事件
    const handleDeptClick = dept => {
      clearSearchIfNeeded();
    };

    // 处理面包屑点击事件
    const handleBreadcrumbClick = DeptId => {
      clearSearchIfNeeded();
    };
    // 组件挂载时初始化已选择数据
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      initSelectedItems();
    });
    // 对外暴露方法
    __expose({
      openDialog
    });
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", tree_selector_Indexvue_type_script_setup_true_lang_js_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", tree_selector_Indexvue_type_script_setup_true_lang_js_hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", tree_selector_Indexvue_type_script_setup_true_lang_js_hoisted_3, [tree_selector_Indexvue_type_script_setup_true_lang_js_hoisted_4, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", tree_selector_Indexvue_type_script_setup_true_lang_js_hoisted_5, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(SearchBar, {
        ref_key: "searchBarRef",
        ref: searchBarRef,
        chooseType: __props.chooseType,
        disabled: isDisabled.value,
        "selected-items": selectedItems.value,
        "scope-node": __props.scopeNode,
        "page-size": __props.pageSize,
        getDepListApi: __props.getDepListApi,
        onSelectItem: toggleSelectItem
      }, {
        "search-results": (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => []),
        _: 1
      }, 8, ["chooseType", "disabled", "selected-items", "scope-node", "page-size", "getDepListApi"]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(DepartmentList, {
        ref_key: "departmentListRef",
        ref: departmentListRef,
        chooseType: __props.chooseType,
        selectedItems: selectedItems.value,
        getDepListApi: __props.getDepListApi,
        "scope-node": __props.scopeNode,
        "root-node-name": __props.rootNodeName,
        "page-size": __props.pageSize,
        onToggleSelect: toggleSelectItem,
        onDeptClick: handleDeptClick,
        onBreadcrumbClick: handleBreadcrumbClick
      }, null, 8, ["chooseType", "selectedItems", "getDepListApi", "scope-node", "root-node-name", "page-size"])])]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(SelectedList, {
        chooseType: __props.chooseType,
        selectedItems: selectedItems.value,
        disabled: isDisabled.value,
        onRemoveItem: removeSelectedItem
      }, null, 8, ["chooseType", "selectedItems", "disabled"])]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
        class: "te-deep-em-footer"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
        onClick: handleCancel,
        class: "te-deep-button te-deep-button-cancel"
      }, "取消"), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
        onClick: handleConfirm,
        class: "te-deep-button te-deep-button-enter"
      }, "确定")])])]);
    };
  }
});
;// CONCATENATED MODULE: ./packages/tree-selector/Index.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-74.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-74.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-74.use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-74.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/tree-selector/Index.vue?vue&type=style&index=0&id=78a60fed&lang=less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/tree-selector/Index.vue?vue&type=style&index=0&id=78a60fed&lang=less

;// CONCATENATED MODULE: ./packages/tree-selector/Index.vue



;

const tree_selector_Index_exports_ = tree_selector_Indexvue_type_script_setup_true_lang_js;

/* harmony default export */ var tree_selector_Index = (tree_selector_Index_exports_);
;// CONCATENATED MODULE: ./packages/index.js



/* harmony default export */ var packages_0 = ({
  treeMenu: Index,
  treeSelector: tree_selector_Index
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vueTreeStructure.umd.js.map