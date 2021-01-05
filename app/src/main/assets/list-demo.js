// { "framework": "Weex" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/f1bcd7b5aaec713041de85509efecf5c', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/f1bcd7b5aaec713041de85509efecf5c',undefined,undefined)

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "list",
	  "attr": {
	    "loadmoreoffset": "10"
	  },
	  "children": [
	    {
	      "type": "cell",
	      "append": "tree",
	      "repeat": function () {return this.listData},
	      "attr": {
	        "scope": "1",
	        "rownumber": function () {return this.id}
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.url}
	          },
	          "style": {
	            "width": 750,
	            "height": 220
	          }
	        },
	        {
	          "type": "text",
	          "style": {
	            "fontSize": 25,
	            "margin": 10
	          },
	          "attr": {
	            "value": function () {return this.title}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {
	  "refresh-view": {
	    "height": 120,
	    "width": 750,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center"
	  }
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _stringify = __webpack_require__(4);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  data: function () {return {
	    refresh_display: 'hide',
	    loading_display: 'hide',
	    listData: [{
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",
	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",
	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",
	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",
	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",
	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",
	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",
	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",
	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",
	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",
	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",

	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",
	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",

	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",

	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",

	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",
	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",
	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",
	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",
	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",
	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",
	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",
	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",

	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",
	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",
	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",
	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",
	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",
	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",
	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",
	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",
	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",
	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",

	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vcover_hz_pic/0/h66vl2frbmcwq161509935962/750",
	      "title": "胡歌演绎狼性职场悍将"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i05348991fm.png/0",
	      "title": "欧美电影里的女神都在这里了 你认识几个"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/b03579notob.png/0",
	      "title": "没想到成龙还有这段镜头 全程笑点不断"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/d0504ccvu7d.png/0",
	      "title": "要不是有人拍下了视频，你就是说破天也没人相信这是真的"
	    }, {
	      "cellType": "contentPoster",
	      "url": "http://puui.qpic.cn/vpic/0/i0549lql5qf.png/0",
	      "title": "超能对决，雷神大战超人，雷神高傲被痛扁"
	    }, {
	      "cellType": "contentPoster",
	      "title": "虎鲸用尾巴抽打鱼群",
	      "url": "http://puui.qpic.cn/tv/0/16040532_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "伪虎鲸群围猎海豚",
	      "url": "http://puui.qpic.cn/tv/0/16040565_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "总是吃不饱的海参",
	      "url": "http://puui.qpic.cn/tv/0/16070266_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "这种鱼长着长着变性了",
	      "url": "http://puui.qpic.cn/tv/0/16040505_498280/0"
	    }, {
	      "cellType": "contentPoster",
	      "title": "大鱼跃出水面捕食飞鸟",
	      "url": "http://puui.qpic.cn/tv/0/16040463_498280/0"
	    }]
	  }},
	  methods: {
	    onloading: function onloading(e) {
	      this.loading_display = "show";
	      setTimeout(function () {
	        this.loading_display = 'hide';
	      }.bind(this), 1000);
	    },

	    fetch: function fetch(event) {
	      this.loading_display = "show";
	      setTimeout(function () {
	        this.loading_display = 'hide';
	      }.bind(this), 1000);

	      var length = this.shopList.length;
	      for (var i = 0; i < 10; ++i) {
	        var item = JSON.parse((0, _stringify2.default)(this.shopList[i]));
	        item.id = length + i + 1;
	        this.shopList.push(item);
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(6);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ })
/******/ ]);