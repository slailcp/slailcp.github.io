/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 89:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

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
  Puzzle1: function() { return /* reexport */ Puzzle1; }
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

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/puzzle1/puzzle1.vue?vue&type=script&setup=true&lang=js


var _withScopeId = function _withScopeId(n) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.pushScopeId)("data-v-28fc4b5d"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.popScopeId)(), n;
};
var _hoisted_1 = ["filter"];
var _hoisted_2 = ["d", "fill", "stroke", "stroke-width"];
var _hoisted_3 = ["id"];
var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("rect", {
    width: "100%",
    height: "100%",
    fill: "black"
  }, null, -1);
});
var _hoisted_5 = ["d", "stroke", "stroke-width"];
var _hoisted_6 = ["href", "mask"];
var _hoisted_7 = ["id"];
var _hoisted_8 = ["offset", "stop-color", "stop-opacity"];
var _hoisted_9 = ["id"];
var _hoisted_10 = ["offset", "stop-color", "stop-opacity"];
var _hoisted_11 = ["id"];
var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix"
  }, null, -1);
});
var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }, null, -1);
});
var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }, null, -1);
});
var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("feOffset", {
    dx: "20",
    dy: "20"
  }, null, -1);
});
var _hoisted_16 = ["stdDeviation"];
var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1"
  }, null, -1);
});
var _hoisted_18 = ["values"];
var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("feBlend", {
    mode: "normal",
    in2: "shape",
    result: "effect1_innerShadow_5_2"
  }, null, -1);
});
var _hoisted_20 = {
  class: "content"
};

/* harmony default export */ var puzzle1vue_type_script_setup_true_lang_js = ({
  __name: 'puzzle1',
  props: {
    // type: {
    //   type: String,
    //   default: "", // fill,shadow
    // },
    bgColor: {
      type: String,
      default: "#F2F2F3"
    },
    borderColor: {
      type: String,
      default: "#3E5185"
    },
    borderWidth: {
      type: [Number, String],
      default: 2
    },
    index: {
      type: [Number, String],
      default: 0
    },
    shadowColor: {
      type: String,
      default: ""
    },
    // 向内阴影
    shadowRatio: {
      type: [Number, String],
      default: 0.2
    },
    // 扩散
    shadowSpread: {
      type: [Number, String],
      default: 125
    },
    colors: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    total: {
      // 一共多少个
      type: [Number, String],
      default: 0
    },
    linenum: {
      // 一行多少个
      type: [Number, String],
      default: 6
    },
    size: {
      type: String,
      default: "100px"
    },
    style: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // 当前拼图的标识，防止重复
    mark: {
      type: String,
      default: "one"
    },
    imgpath: {
      type: String,
      default: ""
    },
    gradient: {
      type: Object,
      default: function _default(e, q) {
        return {};
      }
    }
  },
  setup: function setup(__props) {
    var props = __props;
    var gradientobj = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)({
      type: props.gradient.type || "linear",
      // type = radial,point = cx="50%" cy="50%" r="50%" fx="50%" fy="50%"
      point: props.gradient.point || {
        x1: "362.5",
        y1: "725",
        x2: "362.5",
        y2: "0"
      },
      // type = line,point= x1="362.5" y1="725" x2="362.5" y2="0"
      opacity: props.gradient.opacity || 1
    });
    var path = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)("M375 75C375 94.2089 367.779 111.731 355.903 125H600V373.097C613.269 361.221 630.791 354 650 354C691.421 354 725 387.579 725 429C725 470.421 691.421 504 650 504C630.791 504 613.269 496.779 600 484.903V725H359.903C371.779 711.731 379 694.209 379 675C379 633.579 345.421 600 304 600C262.579 600 229 633.579 229 675C229 694.209 236.221 711.731 248.097 725H0V484.903C13.2689 496.779 30.7911 504 50 504C91.4214 504 125 470.421 125 429C125 387.579 91.4214 354 50 354C30.7911 354 13.2689 361.221 0 373.097V125H244.097C232.221 111.731 225 94.2089 225 75C225 33.5786 258.579 0 300 0C341.421 0 375 33.5786 375 75Z");
    if (props.index >= props.total - props.linenum && props.total) {
      path.value = "M375 75C375 94.2089 367.779 111.731 355.903 125H600V369.097C613.269 357.221 630.791 350 650 350C691.421 350 725 383.579 725 425C725 466.421 691.421 500 650 500C630.791 500 613.269 492.779 600 480.903V725H0V480.903C13.2689 492.779 30.7911 500 50 500C91.4214 500 125 466.421 125 425C125 383.579 91.4214 350 50 350C30.7911 350 13.2689 357.221 0 369.097V125H244.097C232.221 111.731 225 94.2089 225 75C225 33.5786 258.579 0 300 0C341.421 0 375 33.5786 375 75Z";
    }
    if (props.index % props.linenum == 0 && props.total) {
      path.value = "M355.903 125C367.779 111.731 375 94.2089 375 75C375 33.5786 341.421 0 300 0C258.579 0 225 33.5786 225 75C225 94.2089 232.221 111.731 244.097 125H0V725H244.097C232.221 711.731 225 694.209 225 675C225 633.579 258.579 600 300 600C341.421 600 375 633.579 375 675C375 694.209 367.779 711.731 355.903 725H600V480.903C613.269 492.779 630.791 500 650 500C691.421 500 725 466.421 725 425C725 383.579 691.421 350 650 350C630.791 350 613.269 357.221 600 369.097V125H355.903Z";
    }
    if (props.index >= props.total - props.linenum && props.index % props.linenum == 0 && props.total) {
      path.value = "M375 75C375 94.2089 367.779 111.731 355.903 125H600V369.097C613.269 357.221 630.791 350 650 350C691.421 350 725 383.579 725 425C725 466.421 691.421 500 650 500C630.791 500 613.269 492.779 600 480.903V725H0V125H244.097C232.221 111.731 225 94.2089 225 75C225 33.5786 258.579 0 300 0C341.421 0 375 33.5786 375 75Z";
    }

    // const gradientobj = ref({
    //   x1: "362.5",
    //   y1: "725",
    //   x2: "362.5",
    //   y2: "0",
    // });

    var itemstyle = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(_objectSpread2(_objectSpread2({}, props.style), {}, {
      width: props.size,
      height: props.size
    }));
    0.666 * 0.208333 + 0.666;
    // const re = new RegExp(props.unit, "g");
    // const w = Number(itemstyle.value.width.replace(re, ""));
    var unit = props.size.replace(/\d+|\./g, "");
    var w = Number(props.size.replace(/[^\-?\d\.]/g, ""));
    var svgtyle = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)({
      width: (w * (125 / 600) + w).toFixed(4) + unit,
      height: (w * (125 / 600) + w).toFixed(4) + unit,
      top: -(w * (125 / 600).toFixed(4)) + unit
    });
    function generateColorMatrixValues(colorHex) {
      // 将十六进制颜色转换为RGB数组
      var r = parseInt(colorHex.slice(1, 3), 16) / 255;
      var g = parseInt(colorHex.slice(3, 5), 16) / 255;
      var b = parseInt(colorHex.slice(5, 7), 16) / 255;

      // 返回对应的feColorMatrix values
      return "0 0 0 0 ".concat(r, " 0 0 0 0 ").concat(g, " 0 0 0 0 ").concat(b, " 0 0 0 ").concat(props.shadowRatio, " 0");
    }
    return function (_ctx, _cache) {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
        class: "p-item p-bg",
        style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)(itemstyle.value)
      }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", {
        style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)(svgtyle.value),
        width: "725",
        height: "725",
        viewBox: "0 0 725 725",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("g", {
        filter: "url(#".concat(__props.shadowColor ? 'filter0_i_5_2_' + __props.mark + __props.index : '', ")")
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(path),
        fill: __props.colors.length ? "url(#paint0_linear_3_18_".concat(__props.mark + __props.index, ")") : __props.bgColor,
        stroke: __props.borderColor,
        "stroke-width": __props.borderWidth
      }, null, 8, _hoisted_2)], 8, _hoisted_1), __props.imgpath ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("mask", {
        key: 0,
        id: "myMask_".concat(__props.mark + __props.index)
      }, [_hoisted_4, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(path),
        fill: "white",
        stroke: __props.borderColor,
        "stroke-width": __props.borderWidth
      }, null, 8, _hoisted_5)], 8, _hoisted_3)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), __props.imgpath ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("image", {
        key: 1,
        x: "0",
        y: "0",
        width: "725",
        height: "725",
        href: __props.imgpath,
        mask: "url(#myMask_".concat(__props.mark + __props.index, ")")
      }, null, 8, _hoisted_6)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("defs", null, [__props.colors.length && gradientobj.value.type == 'linear' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("linearGradient", (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.mergeProps)({
        key: 0,
        id: "paint0_linear_3_18_".concat(__props.mark + __props.index)
      }, gradientobj.value.point, {
        gradientUnits: "userSpaceOnUse"
      }), [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)(__props.colors, function (f, fi) {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("stop", {
          offset: fi / __props.colors.length,
          "stop-color": f,
          "stop-opacity": gradientobj.value.opacity,
          key: fi,
          style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)(gradientobj.value.style)
        }, null, 12, _hoisted_8);
      }), 128))], 16, _hoisted_7)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), __props.colors.length && gradientobj.value.type == 'radial' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("radialGradient", (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.mergeProps)({
        key: 1,
        id: "paint0_linear_3_18_".concat(__props.mark + __props.index)
      }, gradientobj.value.point), [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)(__props.colors, function (f, fi) {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("stop", {
          offset: fi / __props.colors.length,
          "stop-color": f,
          "stop-opacity": gradientobj.value.opacity,
          key: fi,
          style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)(gradientobj.value.style)
        }, null, 12, _hoisted_10);
      }), 128))], 16, _hoisted_9)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), __props.shadowColor ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("filter", {
        key: 2,
        id: "filter0_i_5_2_".concat(__props.mark + __props.index),
        x: "0",
        y: "0",
        width: "745",
        height: "745",
        filterUnits: "userSpaceOnUse",
        "color-interpolation-filters": "sRGB"
      }, [_hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("feGaussianBlur", {
        stdDeviation: __props.shadowSpread
      }, null, 8, _hoisted_16), _hoisted_17, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("feColorMatrix", {
        type: "matrix",
        values: generateColorMatrixValues(__props.shadowColor)
      }, null, 8, _hoisted_18), _hoisted_19], 8, _hoisted_11)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)])], 4)), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_20, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default")])], 4);
    };
  }
});
;// CONCATENATED MODULE: ./packages/puzzle1/puzzle1.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-32.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-32.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-32.use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-32.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/puzzle1/puzzle1.vue?vue&type=style&index=0&id=28fc4b5d&lang=less&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/puzzle1/puzzle1.vue?vue&type=style&index=0&id=28fc4b5d&lang=less&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(89);
;// CONCATENATED MODULE: ./packages/puzzle1/puzzle1.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(puzzle1vue_type_script_setup_true_lang_js, [['__scopeId',"data-v-28fc4b5d"]])

/* harmony default export */ var puzzle1 = (__exports__);
;// CONCATENATED MODULE: ./packages/utils/format.js
var camelizeRE = /-(\w)/g;
var camelize = function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
};
;// CONCATENATED MODULE: ./packages/utils/with-install.js

function withInstall(options) {
  options.install = function (app) {
    var name = options.name;
    app.component(name, options);
    app.component(camelize("-".concat(name)), options);
  };
  return options;
}
;// CONCATENATED MODULE: ./packages/puzzle1/index.js



var Puzzle1 = withInstall(puzzle1);
/* harmony default export */ var packages_puzzle1 = ((/* unused pure expression or super */ null && (Puzzle1)));
;// CONCATENATED MODULE: ./packages/index.js

// export * from "./puzzle2/index.js"
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=puzzle.common.js.map