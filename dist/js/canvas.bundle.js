var lib =
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

/***/ "./src/img/Jump_Up_Right.png":
/*!***********************************!*\
  !*** ./src/img/Jump_Up_Right.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0498fcce18b61d57b0a910b5392c9c32.png");

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

/***/ "./src/img/alien.png":
/*!***************************!*\
  !*** ./src/img/alien.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b309d89443189b1033e3adef94b7ca7b.png");

/***/ }),

/***/ "./src/img/boss.png":
/*!**************************!*\
  !*** ./src/img/boss.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a47b4e60a0a964110426db0e9978785a.png");

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
/*! exports provided: StartGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartGame", function() { return StartGame; });
/* harmony import */ var _img_plattform3_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/plattform3.png */ "./src/img/plattform3.png");
/* harmony import */ var _img_flowers_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/flowers.png */ "./src/img/flowers.png");
/* harmony import */ var _img_mountain1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/mountain1.png */ "./src/img/mountain1.png");
/* harmony import */ var _img_boss_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/boss.png */ "./src/img/boss.png");
/* harmony import */ var _img_alien_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/alien.png */ "./src/img/alien.png");
/* harmony import */ var _img_trees_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/trees.png */ "./src/img/trees.png");
/* harmony import */ var _img_grass_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/grass.png */ "./src/img/grass.png");
/* harmony import */ var _img_IdleRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/IdleRight.png */ "./src/img/IdleRight.png");
/* harmony import */ var _img_Run2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/Run2.png */ "./src/img/Run2.png");
/* harmony import */ var _img_RunBack_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/RunBack.png */ "./src/img/RunBack.png");
/* harmony import */ var _img_Jump_Up_Right_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/Jump_Up_Right.png */ "./src/img/Jump_Up_Right.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












function StartGame() {
  /*=============================================================*/

  /*                      SET VARS                                |
  /*=============================================================*/
  var startButton = document.querySelector('button');
  startButton.style.display = 'none';
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = 1024;
  canvas.height = 576;
  var playerOffsetY = 20;
  var enemyOffsetX = 20;
  var gravity = 0.5;
  var isJumping = false;
  var currentKey = 'none';
  var lastTime = 0;
  var keyBeforeJump = 'none';
  var enemySpeed = 5;
  var plattformImage = createImage(_img_plattform3_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  var bossImage = createImage(_img_boss_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var alienImage = createImage(_img_alien_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var player = new Player();
  var plattforms = [];
  var enemies = [];
  var scenery = [];
  var scrollOffset = 0;
  var keys = {
    right: {
      pressed: false
    },
    left: {
      pressed: false
    },
    up: {
      pressed: false
    }
  };
  /*=============================================================*/

  /*                     PLAYER CLASS                             |
  /*=============================================================*/

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
      this.height = 220;
      this.image = createImage(_img_IdleRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
      this.frames = 0;
      this.sprites = {
        stand: {
          right: createImage(_img_IdleRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
          cropwidth: 350
        },
        run: {
          left: createImage(_img_RunBack_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
          right: createImage(_img_Run2_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
          cropwidth: 250
        },
        jump: {
          right: createImage(_img_Jump_Up_Right_png__WEBPACK_IMPORTED_MODULE_10__["default"]),
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
        } else if (this.frames > 14 && this.currentSprite === this.sprites.jump.right) {
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
  /*=============================================================*/

  /*                     PLATTFORM CLASS                          |
  /*=============================================================*/


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
  /*=============================================================*/

  /*                     SCENERY CLASS                            |
  /*=============================================================*/


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
  /*=============================================================*/

  /*                     ENEMY CLASS                              |
  /*=============================================================*/


  var Enemies = /*#__PURE__*/function () {
    function Enemies(_ref3) {
      var x = _ref3.x,
          y = _ref3.y,
          image = _ref3.image;

      _classCallCheck(this, Enemies);

      this.position = {
        x: x,
        y: y
      };
      this.image = image;
      this.width = 180;
      this.height = 210;
    }

    _createClass(Enemies, [{
      key: "draw",
      value: function draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
      }
    }, {
      key: "update",
      value: function update() {
        this.position.x -= enemySpeed;

        if (this.position.x < -this.width) {
          this.position.x = canvas.width + this.width;
        }
      }
    }]);

    return Enemies;
  }();
  /*=============================================================*/

  /*                     CORE FUNCTIONS                           |
  /*=============================================================*/


  function createImage(imgSrc) {
    var image = new Image();
    image.src = imgSrc;
    return image;
  }

  function init() {
    currentKey = 'none';
    keys.right.pressed = false;
    keys.left.pressed = false;
    plattformImage = createImage(_img_plattform3_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
    bossImage = createImage(_img_boss_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
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
    enemies = [new Enemies({
      x: 800,
      y: 300,
      image: alienImage
    }), new Enemies({
      x: 1500,
      y: 100,
      image: bossImage
    })];
    scenery = [new Scenery({
      x: 0,
      y: 0,
      image: createImage(_img_mountain1_png__WEBPACK_IMPORTED_MODULE_2__["default"])
    }), new Scenery({
      x: 0,
      y: 250,
      image: createImage(_img_trees_png__WEBPACK_IMPORTED_MODULE_5__["default"])
    }), new Scenery({
      x: 0,
      y: 350,
      image: createImage(_img_grass_png__WEBPACK_IMPORTED_MODULE_6__["default"])
    })];
    scrollOffset = 0;
  }

  function animate(timeStamp) {
    var deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    console.log(deltaTime);
    requestAnimationFrame(animate);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    scenery.forEach(function (scenery) {
      scenery.draw();
    });
    plattforms.forEach(function (plattform) {
      plattform.draw();
    });
    enemies.forEach(function (enemy) {
      enemy.draw();
      enemy.update();
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
        enemies.forEach(function (enemy) {
          enemy.position.x -= player.speed;
        });
      } else if (keys.left.pressed && scrollOffset > 0) {
        scrollOffset -= 5;
        plattforms.forEach(function (plattform) {
          plattform.position.x += player.speed;
        });
        scenery.forEach(function (scenery) {
          scenery.position.x += player.speed * 0.66;
        });
        enemies.forEach(function (enemy) {
          enemy.position.x += player.speed;
        });
      }
    }

    plattforms.forEach(function (plattform) {
      if (player.position.y + player.height <= plattform.position.y + playerOffsetY && player.position.y + player.height + player.velocity.y >= plattform.position.y + playerOffsetY && player.position.x + player.width >= plattform.position.x && player.position.x <= plattform.position.x + plattform.width) {
        player.velocity.y = 0;

        if (isJumping) {
          isJumping = false;

          if (keyBeforeJump === 'right') {
            keyBeforeJump = 'none';
          } else {
            keys.up.pressed = false;
            currentKey = 'none';
          }
        }
      }
    });
    enemies.forEach(function (enemy) {
      if (player.position.x >= enemy.position.x - enemy.width && player.position.y + player.height >= enemy.position.y && player.position.y <= enemy.position.y) {
        player.velocity.y = 0;
        init();
        alert("You lose!");
      }
    });

    if (currentKey == 'right' && player.currentSprite !== player.sprites.run.right) {
      player.frames = 1;
      player.currentSprite = player.sprites.run.right;
    } else if (currentKey === 'left' && player.currentSprite !== player.sprites.run.left) {
      player.frames = 1;
      player.currentSprite = player.sprites.run.left;
    } else if (currentKey === 'up' && player.currentSprite !== player.sprites.jump.right) {
      player.currentSprite = player.sprites.jump.right;
    } else if (currentKey === 'none') {
      player.currentSprite = player.sprites.stand.right;
    }

    if (scrollOffset > 2000) {
      init();
      alert("Congratulations, you win!");
    }

    if (player.position.y > canvas.height) {
      init();
      alert("You lose!");
    }
  }
  /*=============================================================*/

  /*                     EVENT LISTENERS                          |
  /*=============================================================*/


  addEventListener('keydown', function (_ref4) {
    var keyCode = _ref4.keyCode;

    switch (keyCode) {
      case 65:
        console.log('left');
        keys.left.pressed = true;
        currentKey = 'left';
        break;

      case 83:
        console.log('down');
        break;

      case 68:
        console.log('right');
        keys.right.pressed = true;
        currentKey = 'right';
        break;

      case 87:
        if (!isJumping) {
          if (currentKey != 'none') {
            keyBeforeJump = currentKey;
          }

          keys.up.pressed = true;
          currentKey = 'up';
          console.log('up');
          player.velocity.y -= 15;
          isJumping = true;
          break;
        } else {
          break;
        }

    }
  });
  addEventListener('keyup', function (_ref5) {
    var keyCode = _ref5.keyCode;

    switch (keyCode) {
      case 65:
        keys.left.pressed = false;
        currentKey = 'none';
        console.log('left');
        break;

      case 83:
        console.log('down');
        break;

      case 68:
        console.log('right');
        keys.right.pressed = false;
        currentKey = 'none';
        break;

      case 87:
        console.log('up');
        break;
    }
  });
  /*=============================================================*/

  /*                  SCENE INITIALIZATION                        |
  /*=============================================================*/

  init();
  animate();
}

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map