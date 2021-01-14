function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<dglib-engine id=\"webgl_test\" [inlineStyle]=\"{'width': '100%', 'height': '100%'}\" [world]=\"mainWorld\">\n\n</dglib-engine>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".MAIN-WORLD {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXERvY3VtZW50b3NcXFBvcnRmw7NsaW9cXGljb25vZnNpblxcYW5ndWxhci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk1BSU4tV09STERcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iLCIuTUFJTi1XT1JMRCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _world_MainWorld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./world/MainWorld */
    "./src/app/world/MainWorld.ts"); // == IMPORTS
    // ==================================================================================================
    // == CLASS
    // ==================================================================================================

    /**
     *
     *  Main component of the application.
     *
     *  @author Henrique Fantini
     *
     */


    var AppComponent = /*#__PURE__*/function () {
      // == CLASS
      // ==================================================================================================

      /**
       *
       *  Main component of the application.
       *
       *  @author Henrique Fantini
       *
       */
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        // == DECLARATIONS
        // ==============================================================================================
        // -- CONST -------------------------------------------------------------------------------------
        // -- VAR ---------------------------------------------------------------------------------------
        this.mainWorld = new _world_MainWorld__WEBPACK_IMPORTED_MODULE_2__["MainWorld"]("mainWorld"); // == EVENTS(S)
        // ==============================================================================================	
        // == GETTER(S) & SETTER(S)
        // ==============================================================================================		
      } // == CONSTRUCTOR
      // ==============================================================================================
      // == METHOD(S)
      // ==============================================================================================
      //OVERRIDED


      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // LOADS THE WORLD ASYNC
          this.mainWorld.loadContentAsync(this.mainWorld, null);
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./routing.module */
    "./src/app/routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var dographics_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! dographics-library */
    "./node_modules/dographics-library/fesm2015/dographics-library.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"], dographics_library__WEBPACK_IMPORTED_MODULE_5__["DglibModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/routing.module.ts":
  /*!***********************************!*\
    !*** ./src/app/routing.module.ts ***!
    \***********************************/

  /*! exports provided: RoutingModule */

  /***/
  function srcAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutingModule", function () {
      return RoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var RoutingModule = function RoutingModule() {
      _classCallCheck(this, RoutingModule);
    };

    RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RoutingModule);
    /***/
  },

  /***/
  "./src/app/world/MainWorld.ts":
  /*!************************************!*\
    !*** ./src/app/world/MainWorld.ts ***!
    \************************************/

  /*! exports provided: MainWorld */

  /***/
  function srcAppWorldMainWorldTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainWorld", function () {
      return MainWorld;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var dographics_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dographics-library */
    "./node_modules/dographics-library/fesm2015/dographics-library.js");
    /* harmony import */


    var _object_Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./object/Background */
    "./src/app/world/object/Background.ts");
    /* harmony import */


    var _object_enemies_FormerHuman__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./object/enemies/FormerHuman */
    "./src/app/world/object/enemies/FormerHuman.ts");
    /* harmony import */


    var _object_enemies_Enemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./object/enemies/Enemy */
    "./src/app/world/object/enemies/Enemy.ts");
    /* harmony import */


    var _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./strucutures/EnemyState */
    "./src/app/world/strucutures/EnemyState.ts");
    /* harmony import */


    var _object_enemies_FormerSergeant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./object/enemies/FormerSergeant */
    "./src/app/world/object/enemies/FormerSergeant.ts");
    /* harmony import */


    var _object_enemies_HeavyWeaponDude__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./object/enemies/HeavyWeaponDude */
    "./src/app/world/object/enemies/HeavyWeaponDude.ts"); // == IMPORTS
    // ==================================================================================================
    // == CLASS
    // ==================================================================================================


    var MainWorld = /*#__PURE__*/function (_dographics_library__) {
      _inherits(MainWorld, _dographics_library__);

      var _super = _createSuper(MainWorld);

      function MainWorld() {
        var _this;

        _classCallCheck(this, MainWorld);

        // == DECLARATIONS
        // ==============================================================================================
        _this = _super.apply(this, arguments);
        _this._currentEnemyIndex = 0; // == GETTER(S) & SETTER(S)
        // ==============================================================================================		

        return _this;
      } // == CONSTRUCTOR
      // ==============================================================================================
      // == METHOD(S)
      // ==============================================================================================


      _createClass(MainWorld, [{
        key: "resetFrame",
        value: function resetFrame(self, target) {
          _get(_getPrototypeOf(MainWorld.prototype), "resetFrame", this).call(this, self, target);
        } // == EVENTS(S)
        // ==============================================================================================	
        // OVERRIDED

      }, {
        key: "onInit",
        value: function onInit() {
          _get(_getPrototypeOf(MainWorld.prototype), "onInit", this).call(this);

          this._enemyList = new Array(); // CAMERA

          var camera1 = new dographics_library__WEBPACK_IMPORTED_MODULE_1__["Camera2D"]("camera1");
          this.addChild(camera1); // AUDIO

          var audioContent = new dographics_library__WEBPACK_IMPORTED_MODULE_1__["AudioContent"]("ac_bgmusic", "/assets/bgmusic.mp3");
          this._music = new dographics_library__WEBPACK_IMPORTED_MODULE_1__["AudioPlayer"]("music", audioContent);
          this.addChild(this._music); // SPRITES

          var background = new _object_Background__WEBPACK_IMPORTED_MODULE_2__["Background"]("background");
          this.addChild(background); // ENEMY: Forman Human

          var enemyFormerHuman = new _object_enemies_FormerHuman__WEBPACK_IMPORTED_MODULE_3__["FormerHuman"]("formerHuman");
          enemyFormerHuman.updatable = false;
          enemyFormerHuman.drawable = false;
          this.addChild(enemyFormerHuman); // ENEMY: Forman Sergeant

          var enemyFormerSergeant = new _object_enemies_FormerSergeant__WEBPACK_IMPORTED_MODULE_6__["FormerSergeant"]("formerSergeant");
          enemyFormerSergeant.updatable = false;
          enemyFormerSergeant.drawable = false;
          this.addChild(enemyFormerSergeant); // ENEMY: Heavy Weapon Dude

          var enemyHeavyWeaponDude = new _object_enemies_HeavyWeaponDude__WEBPACK_IMPORTED_MODULE_7__["HeavyWeaponDude"]("enemyHeavyWeaponDude");
          enemyHeavyWeaponDude.updatable = false;
          enemyHeavyWeaponDude.drawable = false;
          this.addChild(enemyHeavyWeaponDude);
        } // OVERRIDED

      }, {
        key: "onLoadContent",
        value: function onLoadContent(self) {
          _get(_getPrototypeOf(MainWorld.prototype), "onLoadContent", this).call(this, self); // SPRITES


          this._enemyList = this.getChildrenByType(_object_enemies_Enemy__WEBPACK_IMPORTED_MODULE_4__["Enemy"]); // AUDIO

          this._music.volume = 40;
          self._backgroundColor = new dographics_library__WEBPACK_IMPORTED_MODULE_1__["RGBA32Color"]("#800e06");
        } // OVERRIDED

      }, {
        key: "onUpdate",
        value: function onUpdate(self, timing) {
          if (this.state == dographics_library__WEBPACK_IMPORTED_MODULE_1__["EngineObjectState"].RUNNING) {
            _get(_getPrototypeOf(MainWorld.prototype), "onUpdate", this).call(this, self, timing);

            if (this._music.playerState != dographics_library__WEBPACK_IMPORTED_MODULE_1__["AudioPlayerState"].PLAYING) {
              this._music.play();
            } // ENEMIES


            if (this._currentEnemyIndex < this._enemyList.length) {
              var enemy = this._enemyList[this._currentEnemyIndex];
              enemy.drawable = true;
              enemy.updatable = true;

              if (enemy.enemyState == _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_5__["EnemyState"].STATE_NEXT) {
                enemy.reset();
                enemy.updatable = false;
                enemy.drawable = false;
                this._currentEnemyIndex++;
              }
            } else {
              this._currentEnemyIndex = 0;
            }
          }
        }
      }]);

      return MainWorld;
    }(dographics_library__WEBPACK_IMPORTED_MODULE_1__["World2D"]);
    /***/

  },

  /***/
  "./src/app/world/object/Background.ts":
  /*!********************************************!*\
    !*** ./src/app/world/object/Background.ts ***!
    \********************************************/

  /*! exports provided: Background */

  /***/
  function srcAppWorldObjectBackgroundTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Background", function () {
      return Background;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var dographics_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dographics-library */
    "./node_modules/dographics-library/fesm2015/dographics-library.js"); // == IMPORTS
    // ==================================================================================================
    // == CLASS
    // ==================================================================================================


    var Background = /*#__PURE__*/function (_dographics_library__2) {
      _inherits(Background, _dographics_library__2);

      var _super2 = _createSuper(Background);

      function Background() {
        _classCallCheck(this, Background);

        return _super2.apply(this, arguments);
      }

      _createClass(Background, [{
        key: "onInit",
        // == DECLARATIONS
        // ==============================================================================================
        // -- CONST -------------------------------------------------------------------------------------
        // -- VAR ---------------------------------------------------------------------------------------
        // == CONSTRUCTOR
        // ==============================================================================================
        // == METHOD(S)
        // ==============================================================================================
        // == EVENTS(S)
        // ==============================================================================================	
        // OVERRIDED
        value: function onInit() {
          _get(_getPrototypeOf(Background.prototype), "onInit", this).call(this);

          var spriteImage = new dographics_library__WEBPACK_IMPORTED_MODULE_1__["SpriteImage"]("si_background", "/assets/iconofsin.jpg");
          this.addChild(spriteImage);
        } // OVERRIDED

      }, {
        key: "onLoadContent",
        value: function onLoadContent(self) {
          _get(_getPrototypeOf(Background.prototype), "onLoadContent", this).call(this, self); // == OPTIONS


          this._dynamicSpriteSize = false;
          var engine = this.getParentRecursively(dographics_library__WEBPACK_IMPORTED_MODULE_1__["DoGraphicsEngine"]);
          var transform = this.getChildByType(dographics_library__WEBPACK_IMPORTED_MODULE_1__["GeometricalTransform"]);

          if (transform != null) {
            transform.origin.X = 0;
            transform.origin.Y = 0;
            transform.size.X = engine.size.X;
            transform.size.Y = engine.size.Y;
          }
        }
      }]);

      return Background;
    }(dographics_library__WEBPACK_IMPORTED_MODULE_1__["Sprite"]);
    /***/

  },

  /***/
  "./src/app/world/object/enemies/Enemy.ts":
  /*!***********************************************!*\
    !*** ./src/app/world/object/enemies/Enemy.ts ***!
    \***********************************************/

  /*! exports provided: Enemy */

  /***/
  function srcAppWorldObjectEnemiesEnemyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Enemy", function () {
      return Enemy;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var dographics_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dographics-library */
    "./node_modules/dographics-library/fesm2015/dographics-library.js");
    /* harmony import */


    var _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../strucutures/EnemyState */
    "./src/app/world/strucutures/EnemyState.ts"); // == IMPORTS
    // ==================================================================================================
    // == CLASS
    // ==================================================================================================

    /**
     *
     *  Generic enemy class.
     *
     *  @author Henrique Fantini
     *
     */


    var Enemy = /*#__PURE__*/function (_dographics_library__3) {
      _inherits(Enemy, _dographics_library__3);

      var _super3 = _createSuper(Enemy);

      function Enemy() {
        var _this2;

        _classCallCheck(this, Enemy);

        // == DECLARATIONS
        // ==============================================================================================
        _this2 = _super3.apply(this, arguments); // -- CONST -------------------------------------------------------------------------------------

        _this2.MAX_WALKING_LOOP = 1;
        _this2.MAX_ATTACK_LOOP = 1;
        _this2.DELAY_NEXT_ENEMY = 1000; // -- VAR ---------------------------------------------------------------------------------------

        _this2._enemyState = _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_WALKING;
        _this2._loopCount = 0;
        _this2._currentAttack = 1;
        _this2._timeOfDeath = null;
        return _this2;
      } // == CONSTRUCTOR
      // ==============================================================================================
      // == METHOD(S)
      // ==============================================================================================


      _createClass(Enemy, [{
        key: "reset",
        value: function reset() {
          this._enemyState = _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_WALKING;
        } // == EVENTS(S)
        // ==============================================================================================	
        // OVERRIDED

      }, {
        key: "onInit",
        value: function onInit() {
          _get(_getPrototypeOf(Enemy.prototype), "onInit", this).call(this);

          this.drawable = false; // AUDIO CONTROLLER

          var audioController = new dographics_library__WEBPACK_IMPORTED_MODULE_1__["AudioController"]("audioController");
          this.addChild(audioController); // SEQUENCE CONTROLLER

          var sequenceController = new dographics_library__WEBPACK_IMPORTED_MODULE_1__["SpriteSequenceController"]("sequenceController");
          this.addChild(sequenceController);
        } // OVERRIDED

      }, {
        key: "onLoadContent",
        value: function onLoadContent(self) {
          _get(_getPrototypeOf(Enemy.prototype), "onLoadContent", this).call(this, self);

          this._dynamicSpriteSize = true;
          var engine = self.getParentRecursively(dographics_library__WEBPACK_IMPORTED_MODULE_1__["DoGraphicsEngine"]);
          self._inputMouse = engine.inputMouse;
          self._transform = self.getChildByType(dographics_library__WEBPACK_IMPORTED_MODULE_1__["GeometricalTransform"]);
          self._transform.origin.X = 0.5;
          self._transform.origin.Y = 1;
          self._transform.position.X = engine.size.X / 2;
          self._transform.position.Y = engine.size.Y / 2 + 300;
          self._transform.scale.X = 4;
          self._transform.scale.Y = 4;
        } // OVERRIDED

      }, {
        key: "onUpdate",
        value: function onUpdate(self, timing) {
          _get(_getPrototypeOf(Enemy.prototype), "onUpdate", this).call(this, self, timing);

          var audioController = self.getChildByType(dographics_library__WEBPACK_IMPORTED_MODULE_1__["AudioController"]);
          var seqController = self.getChildByType(dographics_library__WEBPACK_IMPORTED_MODULE_1__["SpriteSequenceController"]);

          if (this._inputMouse.isButtonPressed(dographics_library__WEBPACK_IMPORTED_MODULE_1__["MouseButton"].LEFT)) {
            if (self.enemyState == _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_WALKING || self.enemyState == _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_ATTACKING) {
              self._enemyState = _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_DYING;
            }
          }

          if (self._enemyState == _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_WALKING) {
            if (seqController.currentActiveSequence.id != "walk") {
              seqController.changeCurrentSequence("walk");
            }

            if (this._loopCount < self.MAX_WALKING_LOOP) {
              if (seqController.currentActiveSequence.sequenceFinished) {
                self._loopCount++;
              }
            } else {
              if (seqController.hasSequence("attack_" + (this._currentAttack + 1))) {
                this._currentAttack++;
                seqController.changeCurrentSequence("attack_" + this._currentAttack);
              } else {
                this._currentAttack = 1;
              }

              self._loopCount = 0;
              self._enemyState = _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_ATTACKING;
            }
          } else if (self._enemyState == _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_ATTACKING) {
            if (seqController.currentActiveSequence.id != "attack_" + this._currentAttack) {
              seqController.changeCurrentSequence("attack_" + this._currentAttack);

              if (audioController.getState("attack") != dographics_library__WEBPACK_IMPORTED_MODULE_1__["AudioPlayerState"].PLAYING) {
                audioController.play("attack");
              }
            }

            if (seqController.currentActiveSequence.sequenceFinished) {
              if (seqController.currentActiveSequence.loopCounter >= this.MAX_ATTACK_LOOP) {
                self._enemyState = _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_WALKING;
              }
            }
          } else if (self._enemyState == _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_DYING) {
            if (seqController.currentActiveSequence.id != "death") {
              seqController.changeCurrentSequence("death");

              if (audioController.getState("death") != dographics_library__WEBPACK_IMPORTED_MODULE_1__["AudioPlayerState"].PLAYING) {
                audioController.play("death");
              }
            }

            if (seqController.currentActiveSequence.sequenceFinished) {
              if (this._timeOfDeath == null) {
                this._timeOfDeath = timing.elapsedTime;
              }

              if (timing.elapsedTime - this._timeOfDeath > this.DELAY_NEXT_ENEMY) {
                this._timeOfDeath = null;
                self._enemyState = _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_NEXT;
              }
            }
          }
        } // == GETTER(S) & SETTER(S)
        // ==============================================================================================

      }, {
        key: "enemyState",
        get: function get() {
          return this._enemyState;
        }
      }]);

      return Enemy;
    }(dographics_library__WEBPACK_IMPORTED_MODULE_1__["Sprite"]);
    /***/

  },

  /***/
  "./src/app/world/object/enemies/FormerHuman.ts":
  /*!*****************************************************!*\
    !*** ./src/app/world/object/enemies/FormerHuman.ts ***!
    \*****************************************************/

  /*! exports provided: FormerHuman */

  /***/
  function srcAppWorldObjectEnemiesFormerHumanTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormerHuman", function () {
      return FormerHuman;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Enemy */
    "./src/app/world/object/enemies/Enemy.ts");
    /* harmony import */


    var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dographics-library */
    "./node_modules/dographics-library/fesm2015/dographics-library.js"); // == IMPORTS
    // ==================================================================================================
    // == CLASS
    // ==================================================================================================

    /**
     *
     *  Define the Forman Human sprite class.
     *
     *  @author Henrique Fantini
     *
     */


    var FormerHuman = /*#__PURE__*/function (_Enemy__WEBPACK_IMPOR) {
      _inherits(FormerHuman, _Enemy__WEBPACK_IMPOR);

      var _super4 = _createSuper(FormerHuman);

      function FormerHuman() {
        _classCallCheck(this, FormerHuman);

        return _super4.apply(this, arguments);
      }

      _createClass(FormerHuman, [{
        key: "onInit",
        // == DECLARATIONS
        // ==============================================================================================
        // -- CONST -------------------------------------------------------------------------------------
        // -- VAR ---------------------------------------------------------------------------------------
        // == CONSTRUCTOR
        // ==============================================================================================
        // == METHOD(S)
        // ==============================================================================================
        //OVERRIDED
        value: function onInit() {
          _get(_getPrototypeOf(FormerHuman.prototype), "onInit", this).call(this); // == AUDIO ================


          var audioController = this.getChildByName("audioController"); // == AUDIO: Attack

          var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/formerhuman/attack.wav");
          audioController.addChild(sndAttack); // == AUDIO: Death

          var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/formerhuman/death.wav");
          audioController.addChild(sndDeath);
          this.addChild(audioController); // == SOUNDS ===============

          var sequenceController = this.getChildByName("sequenceController"); // == SPRITES: Walking

          var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
          spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/formerhuman/walk_01.png"));
          spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/formerhuman/walk_02.png"));
          spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_03", "/assets/enemies/formerhuman/walk_03.png"));
          spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_04", "/assets/enemies/formerhuman/walk_04.png"));
          spriteSequenceWalk.imageUpdateRate = 20;
          spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
          sequenceController.addChild(spriteSequenceWalk); // == SPRITES: Attack 1

          var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
          spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/formerhuman/attack_01.png"));
          spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/formerhuman/attack_02.png"));
          spriteSequenceAttack.imageUpdateRate = 15;
          spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].BOOMERANG;
          sequenceController.addChild(spriteSequenceAttack); // == SPRITES: Death

          var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/formerhuman/death_01.png"));
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/formerhuman/death_02.png"));
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/formerhuman/death_03.png"));
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/formerhuman/death_04.png"));
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/formerhuman/death_05.png"));
          spriteSequenceDeath.imageUpdateRate = 15;
          spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
          spriteSequenceDeath.loop = false;
          sequenceController.addChild(spriteSequenceDeath);
        }
      }]);

      return FormerHuman;
    }(_Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"]);
    /***/

  },

  /***/
  "./src/app/world/object/enemies/FormerSergeant.ts":
  /*!********************************************************!*\
    !*** ./src/app/world/object/enemies/FormerSergeant.ts ***!
    \********************************************************/

  /*! exports provided: FormerSergeant */

  /***/
  function srcAppWorldObjectEnemiesFormerSergeantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormerSergeant", function () {
      return FormerSergeant;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Enemy */
    "./src/app/world/object/enemies/Enemy.ts");
    /* harmony import */


    var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dographics-library */
    "./node_modules/dographics-library/fesm2015/dographics-library.js"); // == IMPORTS
    // ==================================================================================================
    // == CLASS
    // ==================================================================================================

    /**
     *
     *  Define the Forman Sergeant sprite class.
     *
     *  @author Henrique Fantini
     *
     */


    var FormerSergeant = /*#__PURE__*/function (_Enemy__WEBPACK_IMPOR2) {
      _inherits(FormerSergeant, _Enemy__WEBPACK_IMPOR2);

      var _super5 = _createSuper(FormerSergeant);

      function FormerSergeant() {
        _classCallCheck(this, FormerSergeant);

        return _super5.apply(this, arguments);
      }

      _createClass(FormerSergeant, [{
        key: "onInit",
        // == DECLARATIONS
        // ==============================================================================================
        // -- CONST -------------------------------------------------------------------------------------
        // -- VAR ---------------------------------------------------------------------------------------
        // == CONSTRUCTOR
        // ==============================================================================================
        // == METHOD(S)
        // ==============================================================================================
        //OVERRIDED
        value: function onInit() {
          _get(_getPrototypeOf(FormerSergeant.prototype), "onInit", this).call(this); // == AUDIO ================


          var audioController = this.getChildByName("audioController"); // == AUDIO: Attack

          var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/formersergeant/attack.wav");
          audioController.addChild(sndAttack); // == AUDIO: Death

          var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/formersergeant/death.wav");
          audioController.addChild(sndDeath);
          this.addChild(audioController); // == SOUNDS ===============

          var sequenceController = this.getChildByName("sequenceController"); // == SPRITES: Walking

          var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
          spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/formersergeant/walk_01.png"));
          spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/formersergeant/walk_02.png"));
          spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_03", "/assets/enemies/formersergeant/walk_03.png"));
          spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_04", "/assets/enemies/formersergeant/walk_04.png"));
          spriteSequenceWalk.imageUpdateRate = 20;
          spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
          sequenceController.addChild(spriteSequenceWalk); // == SPRITES: Attack 1

          var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
          spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/formersergeant/attack_01.png"));
          spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/formersergeant/attack_02.png"));
          spriteSequenceAttack.imageUpdateRate = 15;
          spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].BOOMERANG;
          sequenceController.addChild(spriteSequenceAttack); // == SPRITES: Death

          var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/formersergeant/death_01.png"));
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/formersergeant/death_02.png"));
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/formersergeant/death_03.png"));
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/formersergeant/death_04.png"));
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/formersergeant/death_05.png"));
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_06", "/assets/enemies/formersergeant/death_06.png"));
          spriteSequenceDeath.imageUpdateRate = 15;
          spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
          spriteSequenceDeath.loop = false;
          sequenceController.addChild(spriteSequenceDeath);
        }
      }]);

      return FormerSergeant;
    }(_Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"]);
    /***/

  },

  /***/
  "./src/app/world/object/enemies/HeavyWeaponDude.ts":
  /*!*********************************************************!*\
    !*** ./src/app/world/object/enemies/HeavyWeaponDude.ts ***!
    \*********************************************************/

  /*! exports provided: HeavyWeaponDude */

  /***/
  function srcAppWorldObjectEnemiesHeavyWeaponDudeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeavyWeaponDude", function () {
      return HeavyWeaponDude;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Enemy */
    "./src/app/world/object/enemies/Enemy.ts");
    /* harmony import */


    var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dographics-library */
    "./node_modules/dographics-library/fesm2015/dographics-library.js"); // == IMPORTS
    // ==================================================================================================
    // == CLASS
    // ==================================================================================================

    /**
     *
     *  Define the Heavy Weapons Dude sprite class.
     *
     *  @author Henrique Fantini
     *
     */


    var HeavyWeaponDude = /*#__PURE__*/function (_Enemy__WEBPACK_IMPOR3) {
      _inherits(HeavyWeaponDude, _Enemy__WEBPACK_IMPOR3);

      var _super6 = _createSuper(HeavyWeaponDude);

      function HeavyWeaponDude() {
        _classCallCheck(this, HeavyWeaponDude);

        return _super6.apply(this, arguments);
      }

      _createClass(HeavyWeaponDude, [{
        key: "onInit",
        // == DECLARATIONS
        // ==============================================================================================
        // -- CONST -------------------------------------------------------------------------------------
        // -- VAR ---------------------------------------------------------------------------------------
        // == CONSTRUCTOR
        // ==============================================================================================
        // == METHOD(S)
        // ==============================================================================================
        //OVERRIDED
        value: function onInit() {
          _get(_getPrototypeOf(HeavyWeaponDude.prototype), "onInit", this).call(this); // == AUDIO ================


          var audioController = this.getChildByName("audioController"); // == AUDIO: Attack

          var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/heavyweapondude/attack.wav");
          audioController.addChild(sndAttack); // == AUDIO: Death

          var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/heavyweapondude/death.wav");
          audioController.addChild(sndDeath);
          this.addChild(audioController); // == SOUNDS ===============

          var sequenceController = this.getChildByName("sequenceController"); // == SPRITES: Walking

          var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
          spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/heavyweapondude/walk_01.png"));
          spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/heavyweapondude/walk_02.png"));
          spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_03", "/assets/enemies/heavyweapondude/walk_03.png"));
          spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_04", "/assets/enemies/heavyweapondude/walk_04.png"));
          spriteSequenceWalk.imageUpdateRate = 20;
          spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
          sequenceController.addChild(spriteSequenceWalk); // == SPRITES: Attack 1

          var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
          spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/heavyweapondude/attack_01.png"));
          spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/heavyweapondude/attack_02.png"));
          spriteSequenceAttack.imageUpdateRate = 15;
          spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].BOOMERANG;
          sequenceController.addChild(spriteSequenceAttack); // == SPRITES: Death

          var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/heavyweapondude/death_01.png"));
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/heavyweapondude/death_02.png"));
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/heavyweapondude/death_03.png"));
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/heavyweapondude/death_04.png"));
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/heavyweapondude/death_05.png"));
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_06", "/assets/enemies/heavyweapondude/death_06.png"));
          spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_07", "/assets/enemies/heavyweapondude/death_07.png"));
          spriteSequenceDeath.imageUpdateRate = 15;
          spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
          spriteSequenceDeath.loop = false;
          sequenceController.addChild(spriteSequenceDeath);
        } // OVERRIDED

      }, {
        key: "onLoadContent",
        value: function onLoadContent(self) {
          _get(_getPrototypeOf(HeavyWeaponDude.prototype), "onLoadContent", this).call(this, self);

          this.MAX_ATTACK_LOOP = 5;
        }
      }]);

      return HeavyWeaponDude;
    }(_Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"]);
    /***/

  },

  /***/
  "./src/app/world/strucutures/EnemyState.ts":
  /*!*************************************************!*\
    !*** ./src/app/world/strucutures/EnemyState.ts ***!
    \*************************************************/

  /*! exports provided: EnemyState */

  /***/
  function srcAppWorldStrucuturesEnemyStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnemyState", function () {
      return EnemyState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // == IMPORTS
    // ==================================================================================================
    // == ENUM
    // ==================================================================================================

    /**
     *
     *  Define the possible states of an enemy.
     *
     *  @author Henrique Fantini
     *
     */


    var EnemyState;

    (function (EnemyState) {
      EnemyState[EnemyState["STATE_WALKING"] = 0] = "STATE_WALKING";
      EnemyState[EnemyState["STATE_ATTACKING"] = 1] = "STATE_ATTACKING";
      EnemyState[EnemyState["STATE_DYING"] = 2] = "STATE_DYING";
      EnemyState[EnemyState["STATE_NEXT"] = 3] = "STATE_NEXT";
    })(EnemyState || (EnemyState = {}));
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Documentos\Portfólio\iconofsin\angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map