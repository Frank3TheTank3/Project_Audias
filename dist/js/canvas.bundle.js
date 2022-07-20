/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/IdleRight.png":
/*!*******************************!*\
  !*** ./src/img/IdleRight.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "44ba5b9cca64e75c78638734bbb13459.png");

/***/ }),

/***/ "./src/img/Run2.png":
/*!**************************!*\
  !*** ./src/img/Run2.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1d04895e3995b148cad389c82ad058ef.png");

/***/ }),

/***/ "./src/img/RunBack.png":
/*!*****************************!*\
  !*** ./src/img/RunBack.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "61ca5aec459a6d0ea0aae29419551665.png");

/***/ }),

/***/ "./src/img/flowers.png":
/*!*****************************!*\
  !*** ./src/img/flowers.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4cfe8479dc42c65450b400ed18f8fbd1.png");

/***/ }),

/***/ "./src/img/grass.png":
/*!***************************!*\
  !*** ./src/img/grass.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d317322fae47c6a33677d0fc81211928.png");

/***/ }),

/***/ "./src/img/mountain1.png":
/*!*******************************!*\
  !*** ./src/img/mountain1.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1ab7ffb15409292d30c971aa704781e8.png");

/***/ }),

/***/ "./src/img/plattform3.png":
/*!********************************!*\
  !*** ./src/img/plattform3.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1228142d0a303c259b1ae32d694e4ef6.png");

/***/ }),

/***/ "./src/img/trees.png":
/*!***************************!*\
  !*** ./src/img/trees.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5d01fdd1a27466dcaf2fe26e9a0f1bc5.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_plattform3_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/plattform3.png */ "./src/img/plattform3.png");
/* harmony import */ var _img_flowers_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/flowers.png */ "./src/img/flowers.png");
/* harmony import */ var _img_mountain1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/mountain1.png */ "./src/img/mountain1.png");
/* harmony import */ var _img_trees_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/trees.png */ "./src/img/trees.png");
/* harmony import */ var _img_grass_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/grass.png */ "./src/img/grass.png");
/* harmony import */ var _img_IdleRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/IdleRight.png */ "./src/img/IdleRight.png");
/* harmony import */ var _img_Run2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/Run2.png */ "./src/img/Run2.png");
/* harmony import */ var _img_RunBack_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/RunBack.png */ "./src/img/RunBack.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









console.log(_img_plattform3_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var playerOffsetY = 20;
var gravity = 0.5;
var isJumping = false;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 10;
    this.position = {
      x: 30,
      y: 30
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 250;
    this.height = 250;
    this.image = createImage(_img_IdleRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_IdleRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        cropwidth: 350
      },
      run: {
        left: createImage(_img_RunBack_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        right: createImage(_img_Run2_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropwidth: 250
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.currentSprite, 510 * this.frames, 0, 350, 261, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;

      if (this.frames > 15 && this.currentSprite === this.sprites.stand.right) {
        this.frames = 0;
      } else if (this.frames > 12 && this.currentSprite === this.sprites.run.right) {
        this.frames = 0;
      } else if (this.frames > 12 && this.currentSprite === this.sprites.run.left) {
        this.frames = 0;
      }

      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Player;
}();

var Plattform = /*#__PURE__*/function () {
  function Plattform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Plattform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = 500;
    this.height = 232;
  }

  _createClass(Plattform, [{
    key: "draw",
    value: function draw() {
      //ctx.fillStyle = 'green'
      //ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
      ctx.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Plattform;
}();

var Scenery = /*#__PURE__*/function () {
  function Scenery(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, Scenery);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = 500;
    this.height = 232;
  }

  _createClass(Scenery, [{
    key: "draw",
    value: function draw() {
      //ctx.fillStyle = 'green'
      //ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
      ctx.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Scenery;
}();

function createImage(imgSrc) {
  var image = new Image();
  image.src = imgSrc;
  return image;
}

var plattformImage = createImage(_img_plattform3_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new Player();
var plattforms = [];
var scenery = [];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  plattformImage = createImage(_img_plattform3_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  plattforms = [new Plattform({
    x: 0,
    y: 500,
    image: plattformImage
  }), new Plattform({
    x: 600,
    y: 300,
    image: plattformImage
  }), new Plattform({
    x: 1200,
    y: 250,
    image: plattformImage
  }), new Plattform({
    x: 2000,
    y: 500,
    image: plattformImage
  })];
  scenery = [new Scenery({
    x: 0,
    y: 0,
    image: createImage(_img_mountain1_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new Scenery({
    x: 0,
    y: 250,
    image: createImage(_img_trees_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Scenery({
    x: 0,
    y: 350,
    image: createImage(_img_grass_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  })];
  scrollOffset = 0;
}

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  scenery.forEach(function (scenery) {
    scenery.draw();
  });
  plattforms.forEach(function (plattform) {
    plattform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      plattforms.forEach(function (plattform) {
        plattform.position.x -= player.speed;
      });
      scenery.forEach(function (scenery) {
        scenery.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= 5;
      plattforms.forEach(function (plattform) {
        plattform.position.x += player.speed;
      });
      scenery.forEach(function (scenery) {
        scenery.position.x += player.speed * 0.66;
      });
    }
  }

  plattforms.forEach(function (plattform) {
    if (player.position.y + player.height <= plattform.position.y + playerOffsetY && player.position.y + player.height + player.velocity.y >= plattform.position.y + playerOffsetY && player.position.x + player.width >= plattform.position.x && player.position.x <= plattform.position.x + plattform.width) {
      player.velocity.y = 0;
      isJumping = false;
    }
  });

  if (scrollOffset > 2000) {
    init();
    alert("Congratulations, you win!");
  }

  if (player.position.y > canvas.height) {
    init();
    alert("You lose!");
  }
}

addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = true;
      player.currentSprite = player.sprites.run.left;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      break;

    case 87:
      if (!isJumping) {
        console.log('up');
        player.velocity.y -= 15;
        isJumping = true;
        break;
      } else {
        break;
      }

  }
});
addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 65:
      keys.left.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      console.log('left');
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      break;

    case 87:
      console.log('up');
      break;
  }
});
init();
animate();

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map