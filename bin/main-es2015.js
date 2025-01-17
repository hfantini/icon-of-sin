(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<dglib-engine id=\"webgl_test\" [inlineStyle]=\"{'width': '100%', 'height': '100%'}\" [world]=\"mainWorld\">\n\n</dglib-engine>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".MAIN-WORLD {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXERvY3VtZW50b3NcXFBvcnRmw7NsaW9cXGljb25vZnNpblxcYW5ndWxhci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk1BSU4tV09STERcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iLCIuTUFJTi1XT1JMRCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _world_MainWorld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world/MainWorld */ "./src/app/world/MainWorld.ts");
// == IMPORTS
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
let AppComponent = class AppComponent {
    // == CLASS
    // ==================================================================================================
    /**
     *
     *  Main component of the application.
     *
     *  @author Henrique Fantini
     *
     */
    constructor() {
        // == DECLARATIONS
        // ==============================================================================================
        // -- CONST -------------------------------------------------------------------------------------
        // -- VAR ---------------------------------------------------------------------------------------
        this.mainWorld = new _world_MainWorld__WEBPACK_IMPORTED_MODULE_2__["MainWorld"]("mainWorld");
        // == EVENTS(S)
        // ==============================================================================================	
        // == GETTER(S) & SETTER(S)
        // ==============================================================================================		
    }
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    //OVERRIDED
    ngOnInit() {
        // LOADS THE WORLD ASYNC
        this.mainWorld.loadContentAsync(this.mainWorld, null);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"],
            dographics_library__WEBPACK_IMPORTED_MODULE_5__["DglibModule"]
        ],
        providers: [],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let RoutingModule = class RoutingModule {
};
RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RoutingModule);



/***/ }),

/***/ "./src/app/world/MainWorld.ts":
/*!************************************!*\
  !*** ./src/app/world/MainWorld.ts ***!
  \************************************/
/*! exports provided: MainWorld */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWorld", function() { return MainWorld; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
/* harmony import */ var _object_Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/Background */ "./src/app/world/object/Background.ts");
/* harmony import */ var _object_enemies_FormerHuman__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object/enemies/FormerHuman */ "./src/app/world/object/enemies/FormerHuman.ts");
/* harmony import */ var _object_enemies_Enemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object/enemies/Enemy */ "./src/app/world/object/enemies/Enemy.ts");
/* harmony import */ var _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./strucutures/EnemyState */ "./src/app/world/strucutures/EnemyState.ts");
/* harmony import */ var _object_enemies_FormerSergeant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object/enemies/FormerSergeant */ "./src/app/world/object/enemies/FormerSergeant.ts");
/* harmony import */ var _object_enemies_HeavyWeaponDude__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./object/enemies/HeavyWeaponDude */ "./src/app/world/object/enemies/HeavyWeaponDude.ts");
/* harmony import */ var _object_enemies_Imp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object/enemies/Imp */ "./src/app/world/object/enemies/Imp.ts");
/* harmony import */ var _object_enemies_Pink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./object/enemies/Pink */ "./src/app/world/object/enemies/Pink.ts");
/* harmony import */ var _object_enemies_LostSoul__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./object/enemies/LostSoul */ "./src/app/world/object/enemies/LostSoul.ts");
/* harmony import */ var _object_enemies_Cacodemon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./object/enemies/Cacodemon */ "./src/app/world/object/enemies/Cacodemon.ts");
/* harmony import */ var _object_enemies_HellKnight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./object/enemies/HellKnight */ "./src/app/world/object/enemies/HellKnight.ts");
/* harmony import */ var _object_enemies_BaronOfHell__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./object/enemies/BaronOfHell */ "./src/app/world/object/enemies/BaronOfHell.ts");
/* harmony import */ var _object_enemies_Arachnotron__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./object/enemies/Arachnotron */ "./src/app/world/object/enemies/Arachnotron.ts");
/* harmony import */ var _object_enemies_PainElemental__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./object/enemies/PainElemental */ "./src/app/world/object/enemies/PainElemental.ts");
/* harmony import */ var _object_enemies_Revenant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/enemies/Revenant */ "./src/app/world/object/enemies/Revenant.ts");
/* harmony import */ var _object_enemies_Mancubus__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/enemies/Mancubus */ "./src/app/world/object/enemies/Mancubus.ts");
/* harmony import */ var _object_enemies_Archville__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/enemies/Archville */ "./src/app/world/object/enemies/Archville.ts");
// == IMPORTS
// ==================================================================================================



















// == CLASS
// ==================================================================================================
class MainWorld extends dographics_library__WEBPACK_IMPORTED_MODULE_1__["World2D"] {
    constructor() {
        // == DECLARATIONS
        // ==============================================================================================
        super(...arguments);
        this._currentEnemyIndex = 0;
        // == GETTER(S) & SETTER(S)
        // ==============================================================================================		
    }
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    resetFrame(self, target) {
        super.resetFrame(self, target);
    }
    // == EVENTS(S)
    // ==============================================================================================	
    // OVERRIDED
    onInit() {
        super.onInit();
        this._enemyList = new Array();
        // CAMERA
        var camera1 = new dographics_library__WEBPACK_IMPORTED_MODULE_1__["Camera2D"]("camera1");
        this.addChild(camera1);
        // AUDIO
        var audioContent = new dographics_library__WEBPACK_IMPORTED_MODULE_1__["AudioContent"]("ac_bgmusic", "/assets/bgmusic.mp3");
        this._music = new dographics_library__WEBPACK_IMPORTED_MODULE_1__["AudioPlayer"]("music", audioContent);
        this.addChild(this._music);
        // SPRITES
        var background = new _object_Background__WEBPACK_IMPORTED_MODULE_2__["Background"]("background");
        this.addChild(background);
        // ENEMY: Forman Human
        var enemyFormerHuman = new _object_enemies_FormerHuman__WEBPACK_IMPORTED_MODULE_3__["FormerHuman"]("formerHuman");
        enemyFormerHuman.updatable = false;
        enemyFormerHuman.drawable = false;
        this.addChild(enemyFormerHuman);
        // ENEMY: Forman Sergeant
        var enemyFormerSergeant = new _object_enemies_FormerSergeant__WEBPACK_IMPORTED_MODULE_6__["FormerSergeant"]("formerSergeant");
        enemyFormerSergeant.updatable = false;
        enemyFormerSergeant.drawable = false;
        this.addChild(enemyFormerSergeant);
        // ENEMY: Heavy Weapon Dude
        var enemyHeavyWeaponDude = new _object_enemies_HeavyWeaponDude__WEBPACK_IMPORTED_MODULE_7__["HeavyWeaponDude"]("enemyHeavyWeaponDude");
        enemyHeavyWeaponDude.updatable = false;
        enemyHeavyWeaponDude.drawable = false;
        this.addChild(enemyHeavyWeaponDude);
        // ENEMY: Imp
        var enemyImp = new _object_enemies_Imp__WEBPACK_IMPORTED_MODULE_8__["Imp"]("enemyImp");
        enemyImp.updatable = false;
        enemyImp.drawable = false;
        this.addChild(enemyImp);
        // ENEMY: Pink
        var enemyPink = new _object_enemies_Pink__WEBPACK_IMPORTED_MODULE_9__["Pink"]("enemyPink");
        enemyPink.updatable = false;
        enemyPink.drawable = false;
        this.addChild(enemyPink);
        // ENEMY: Lost Soul
        var enemyLostSoul = new _object_enemies_LostSoul__WEBPACK_IMPORTED_MODULE_10__["LostSoul"]("enemyLostSoul");
        enemyLostSoul.updatable = false;
        enemyLostSoul.drawable = false;
        this.addChild(enemyLostSoul);
        // ENEMY: Cacodemon
        var enemyCacodemon = new _object_enemies_Cacodemon__WEBPACK_IMPORTED_MODULE_11__["Cacodemon"]("enemyCacodemon");
        enemyCacodemon.updatable = false;
        enemyCacodemon.drawable = false;
        this.addChild(enemyCacodemon);
        // ENEMY: Hell Knight
        var enemyHellKnight = new _object_enemies_HellKnight__WEBPACK_IMPORTED_MODULE_12__["HellKnight"]("enemyHellKnight");
        enemyHellKnight.updatable = false;
        enemyHellKnight.drawable = false;
        this.addChild(enemyHellKnight);
        // ENEMY: Baron of Hell
        var enemyBaronOfHell = new _object_enemies_BaronOfHell__WEBPACK_IMPORTED_MODULE_13__["BaronOfHell"]("enemyBaronOfHell");
        enemyBaronOfHell.updatable = false;
        enemyBaronOfHell.drawable = false;
        this.addChild(enemyBaronOfHell);
        // ENEMY: Arachnotron
        var enemyArachnotron = new _object_enemies_Arachnotron__WEBPACK_IMPORTED_MODULE_14__["Arachnotron"]("enemyArachnotron");
        enemyArachnotron.updatable = false;
        enemyArachnotron.drawable = false;
        this.addChild(enemyArachnotron);
        // ENEMY: Pain Elemental
        var enemyPainElemental = new _object_enemies_PainElemental__WEBPACK_IMPORTED_MODULE_15__["PainElemental"]("enemyPainElemental");
        enemyPainElemental.updatable = false;
        enemyPainElemental.drawable = false;
        this.addChild(enemyPainElemental);
        // ENEMY: Revenant
        var enemyRevenant = new _object_enemies_Revenant__WEBPACK_IMPORTED_MODULE_16__["Revenant"]("enemyRevenant");
        enemyRevenant.updatable = false;
        enemyRevenant.drawable = false;
        this.addChild(enemyRevenant);
        // ENEMY: Mancubus
        var enemyMancubus = new _object_enemies_Mancubus__WEBPACK_IMPORTED_MODULE_17__["Mancubus"]("enemyMancubus");
        enemyMancubus.updatable = false;
        enemyMancubus.drawable = false;
        this.addChild(enemyMancubus);
        // ENEMY: Archville
        var enemyArchville = new _object_enemies_Archville__WEBPACK_IMPORTED_MODULE_18__["Archville"]("enemyArchville");
        enemyArchville.updatable = false;
        enemyArchville.drawable = false;
        this.addChild(enemyArchville);
    }
    // OVERRIDED
    onLoadContent(self) {
        super.onLoadContent(self);
        // SPRITES
        this._enemyList = this.getChildrenByType(_object_enemies_Enemy__WEBPACK_IMPORTED_MODULE_4__["Enemy"]);
        // AUDIO
        this._music.volume = 40;
        self._backgroundColor = new dographics_library__WEBPACK_IMPORTED_MODULE_1__["RGBA32Color"]("#800e06");
    }
    // OVERRIDED
    onUpdate(self, timing) {
        if (this.state == dographics_library__WEBPACK_IMPORTED_MODULE_1__["EngineObjectState"].RUNNING) {
            super.onUpdate(self, timing);
            if (this._music.playerState != dographics_library__WEBPACK_IMPORTED_MODULE_1__["AudioPlayerState"].PLAYING) {
                this._music.play();
            }
            // ENEMIES
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
            }
            else {
                this._currentEnemyIndex = 0;
            }
        }
    }
}


/***/ }),

/***/ "./src/app/world/object/Background.ts":
/*!********************************************!*\
  !*** ./src/app/world/object/Background.ts ***!
  \********************************************/
/*! exports provided: Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
// == IMPORTS
// ==================================================================================================


// == CLASS
// ==================================================================================================
class Background extends dographics_library__WEBPACK_IMPORTED_MODULE_1__["Sprite"] {
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
    onInit() {
        super.onInit();
        var spriteImage = new dographics_library__WEBPACK_IMPORTED_MODULE_1__["SpriteImage"]("si_background", "/assets/iconofsin.jpg");
        this.addChild(spriteImage);
    }
    // OVERRIDED
    onLoadContent(self) {
        super.onLoadContent(self);
        // == OPTIONS
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
}


/***/ }),

/***/ "./src/app/world/object/enemies/Arachnotron.ts":
/*!*****************************************************!*\
  !*** ./src/app/world/object/enemies/Arachnotron.ts ***!
  \*****************************************************/
/*! exports provided: Arachnotron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arachnotron", function() { return Arachnotron; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./src/app/world/object/enemies/Enemy.ts");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
// == IMPORTS
// ==================================================================================================



// == CLASS
// ==================================================================================================
/**
 *
 *  Define the Arachnotron sprite class.
 *
 *  @author Henrique Fantini
 *
 */
class Arachnotron extends _Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"] {
    // == DECLARATIONS
    // ==============================================================================================
    // -- CONST -------------------------------------------------------------------------------------
    // -- VAR ---------------------------------------------------------------------------------------
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    //OVERRIDED
    onInit() {
        super.onInit();
        // == AUDIO ================
        var audioController = this.getChildByName("audioController");
        // == AUDIO: Sight
        var sndSight = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("sight", "/assets/enemies/arachnotron/sight.wav");
        audioController.addChild(sndSight);
        // == AUDIO: Attack
        var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/arachnotron/attack.mp3");
        audioController.addChild(sndAttack);
        // == AUDIO: Death
        var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/arachnotron/death.wav");
        audioController.addChild(sndDeath);
        this.addChild(audioController);
        // == SOUNDS ===============
        var sequenceController = this.getChildByName("sequenceController");
        // == SPRITES: Walking
        var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/arachnotron/walk_01.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/arachnotron/walk_02.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_03", "/assets/enemies/arachnotron/walk_03.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_04", "/assets/enemies/arachnotron/walk_04.png"));
        spriteSequenceWalk.imageUpdateRate = 40;
        spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceWalk);
        // == SPRITES: Attack 1
        var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/arachnotron/attack_01.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/arachnotron/attack_02.png"));
        spriteSequenceAttack.imageUpdateRate = 30;
        spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceAttack);
        // == SPRITES: Death
        var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/arachnotron/death_01.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/arachnotron/death_02.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/arachnotron/death_03.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/arachnotron/death_04.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/arachnotron/death_05.png"));
        spriteSequenceDeath.imageUpdateRate = 40;
        spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        spriteSequenceDeath.loop = false;
        sequenceController.addChild(spriteSequenceDeath);
    }
    // == EVENTS(S)
    // ==============================================================================================	
    // OVERRIDED
    onLoadContent(self) {
        super.onLoadContent(self);
        this.MAX_WALKING_LOOP = 2;
        this.MAX_ATTACK_LOOP = 3;
    }
}


/***/ }),

/***/ "./src/app/world/object/enemies/Archville.ts":
/*!***************************************************!*\
  !*** ./src/app/world/object/enemies/Archville.ts ***!
  \***************************************************/
/*! exports provided: Archville */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Archville", function() { return Archville; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./src/app/world/object/enemies/Enemy.ts");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
// == IMPORTS
// ==================================================================================================



// == CLASS
// ==================================================================================================
/**
 *
 *  Define the Archville sprite class.
 *
 *  @author Henrique Fantini
 *
 */
class Archville extends _Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"] {
    // == DECLARATIONS
    // ==============================================================================================
    // -- CONST -------------------------------------------------------------------------------------
    // -- VAR ---------------------------------------------------------------------------------------
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    //OVERRIDED
    onInit() {
        super.onInit();
        // == AUDIO ================
        var audioController = this.getChildByName("audioController");
        // == AUDIO: Sight
        var sndSight = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("sight", "/assets/enemies/archville/sight.wav");
        audioController.addChild(sndSight);
        // == AUDIO: Attack
        var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/archville/attack.wav");
        audioController.addChild(sndAttack);
        // == AUDIO: Death
        var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/archville/death.wav");
        audioController.addChild(sndDeath);
        this.addChild(audioController);
        // == SOUNDS ===============
        var sequenceController = this.getChildByName("sequenceController");
        // == SPRITES: Walking
        var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/archville/walk_01.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/archville/walk_02.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_03", "/assets/enemies/archville/walk_03.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_04", "/assets/enemies/archville/walk_04.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_05", "/assets/enemies/archville/walk_05.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_06", "/assets/enemies/archville/walk_06.png"));
        spriteSequenceWalk.imageUpdateRate = 30;
        spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceWalk);
        // == SPRITES: Attack 1
        var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/archville/attack_01.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/archville/attack_02.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_03", "/assets/enemies/archville/attack_03.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_04", "/assets/enemies/archville/attack_04.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_05", "/assets/enemies/archville/attack_05.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_06", "/assets/enemies/archville/attack_06.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_07", "/assets/enemies/archville/attack_07.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_08", "/assets/enemies/archville/attack_08.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_09", "/assets/enemies/archville/attack_09.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_10", "/assets/enemies/archville/attack_10.png"));
        spriteSequenceAttack.imageUpdateRate = 30;
        spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceAttack);
        // == SPRITES: Death
        var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/archville/death_01.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/archville/death_02.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/archville/death_03.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/archville/death_04.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/archville/death_05.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_06", "/assets/enemies/archville/death_06.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_07", "/assets/enemies/archville/death_07.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_08", "/assets/enemies/archville/death_08.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_09", "/assets/enemies/archville/death_09.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_10", "/assets/enemies/archville/death_10.png"));
        spriteSequenceDeath.imageUpdateRate = 40;
        spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        spriteSequenceDeath.loop = false;
        sequenceController.addChild(spriteSequenceDeath);
    }
    // == EVENTS(S)
    // ==============================================================================================	
    // OVERRIDED
    onLoadContent(self) {
        super.onLoadContent(self);
        //this.MAX_ATTACK_LOOP = 3;
    }
}


/***/ }),

/***/ "./src/app/world/object/enemies/BaronOfHell.ts":
/*!*****************************************************!*\
  !*** ./src/app/world/object/enemies/BaronOfHell.ts ***!
  \*****************************************************/
/*! exports provided: BaronOfHell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaronOfHell", function() { return BaronOfHell; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./src/app/world/object/enemies/Enemy.ts");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
// == IMPORTS
// ==================================================================================================



// == CLASS
// ==================================================================================================
/**
 *
 *  Define the BaronOfHell sprite class.
 *
 *  @author Henrique Fantini
 *
 */
class BaronOfHell extends _Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"] {
    // == DECLARATIONS
    // ==============================================================================================
    // -- CONST -------------------------------------------------------------------------------------
    // -- VAR ---------------------------------------------------------------------------------------
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    //OVERRIDED
    onInit() {
        super.onInit();
        // == AUDIO ================
        var audioController = this.getChildByName("audioController");
        // == AUDIO: Sight
        var sndSight = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("sight", "/assets/enemies/baronofhell/sight.wav");
        audioController.addChild(sndSight);
        // == AUDIO: Attack
        var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/baronofhell/attack.wav");
        audioController.addChild(sndAttack);
        // == AUDIO: Death
        var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/baronofhell/death.wav");
        audioController.addChild(sndDeath);
        this.addChild(audioController);
        // == SOUNDS ===============
        var sequenceController = this.getChildByName("sequenceController");
        // == SPRITES: Walking
        var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/baronofhell/walk_01.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/baronofhell/walk_02.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_03", "/assets/enemies/baronofhell/walk_03.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_04", "/assets/enemies/baronofhell/walk_04.png"));
        spriteSequenceWalk.imageUpdateRate = 40;
        spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].BOOMERANG;
        sequenceController.addChild(spriteSequenceWalk);
        // == SPRITES: Attack 1
        var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/baronofhell/attack_01.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/baronofhell/attack_02.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_03", "/assets/enemies/baronofhell/attack_03.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_04", "/assets/enemies/baronofhell/attack_04.png"));
        spriteSequenceAttack.imageUpdateRate = 30;
        spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceAttack);
        // == SPRITES: Death
        var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/baronofhell/death_01.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/baronofhell/death_02.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/baronofhell/death_03.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/baronofhell/death_04.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/baronofhell/death_05.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_06", "/assets/enemies/baronofhell/death_06.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_07", "/assets/enemies/baronofhell/death_07.png"));
        spriteSequenceDeath.imageUpdateRate = 40;
        spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        spriteSequenceDeath.loop = false;
        sequenceController.addChild(spriteSequenceDeath);
    }
    // == EVENTS(S)
    // ==============================================================================================	
    // OVERRIDED
    onLoadContent(self) {
        super.onLoadContent(self);
        this.MAX_WALKING_LOOP = 75;
    }
}


/***/ }),

/***/ "./src/app/world/object/enemies/Cacodemon.ts":
/*!***************************************************!*\
  !*** ./src/app/world/object/enemies/Cacodemon.ts ***!
  \***************************************************/
/*! exports provided: Cacodemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cacodemon", function() { return Cacodemon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./src/app/world/object/enemies/Enemy.ts");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
// == IMPORTS
// ==================================================================================================



// == CLASS
// ==================================================================================================
/**
 *
 *  Define the Cacodemon sprite class.
 *
 *  @author Henrique Fantini
 *
 */
class Cacodemon extends _Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"] {
    // == DECLARATIONS
    // ==============================================================================================
    // -- CONST -------------------------------------------------------------------------------------
    // -- VAR ---------------------------------------------------------------------------------------
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    //OVERRIDED
    onInit() {
        super.onInit();
        // == AUDIO ================
        var audioController = this.getChildByName("audioController");
        // == AUDIO: Sight
        var sndSight = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("sight", "/assets/enemies/cacodemon/sight.wav");
        audioController.addChild(sndSight);
        // == AUDIO: Attack
        var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/cacodemon/attack.wav");
        audioController.addChild(sndAttack);
        // == AUDIO: Death
        var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/cacodemon/death.wav");
        audioController.addChild(sndDeath);
        this.addChild(audioController);
        // == SOUNDS ===============
        var sequenceController = this.getChildByName("sequenceController");
        // == SPRITES: Walking
        var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/cacodemon/walk_01.png"));
        spriteSequenceWalk.imageUpdateRate = 10;
        spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceWalk);
        // == SPRITES: Attack 1
        var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/cacodemon/attack_01.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/cacodemon/attack_02.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_03", "/assets/enemies/cacodemon/attack_03.png"));
        spriteSequenceAttack.imageUpdateRate = 30;
        spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceAttack);
        // == SPRITES: Death
        var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/cacodemon/death_01.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/cacodemon/death_02.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/cacodemon/death_03.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/cacodemon/death_04.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/cacodemon/death_05.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_06", "/assets/enemies/cacodemon/death_06.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_07", "/assets/enemies/cacodemon/death_07.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_08", "/assets/enemies/cacodemon/death_08.png"));
        spriteSequenceDeath.imageUpdateRate = 40;
        spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        spriteSequenceDeath.loop = false;
        sequenceController.addChild(spriteSequenceDeath);
    }
}


/***/ }),

/***/ "./src/app/world/object/enemies/Enemy.ts":
/*!***********************************************!*\
  !*** ./src/app/world/object/enemies/Enemy.ts ***!
  \***********************************************/
/*! exports provided: Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return Enemy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
/* harmony import */ var _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../strucutures/EnemyState */ "./src/app/world/strucutures/EnemyState.ts");
// == IMPORTS
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
class Enemy extends dographics_library__WEBPACK_IMPORTED_MODULE_1__["Sprite"] {
    constructor() {
        // == DECLARATIONS
        // ==============================================================================================
        super(...arguments);
        // -- CONST -------------------------------------------------------------------------------------
        this.MAX_WALKING_LOOP = 1;
        this.MAX_ATTACK_LOOP = 1;
        this.DELAY_NEXT_ENEMY = 1000;
        // -- VAR ---------------------------------------------------------------------------------------
        this._enemyState = _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_WALKING;
        this._loopCount = 0;
        this._currentAttack = 0;
        this._timeOfDeath = null;
    }
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    reset() {
        this._enemyState = _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_WALKING;
    }
    // == EVENTS(S)
    // ==============================================================================================	
    // OVERRIDED
    onInit() {
        super.onInit();
        this.drawable = false;
        // AUDIO CONTROLLER
        var audioController = new dographics_library__WEBPACK_IMPORTED_MODULE_1__["AudioController"]("audioController");
        this.addChild(audioController);
        // SEQUENCE CONTROLLER
        var sequenceController = new dographics_library__WEBPACK_IMPORTED_MODULE_1__["SpriteSequenceController"]("sequenceController");
        this.addChild(sequenceController);
    }
    // OVERRIDED
    onLoadContent(self) {
        super.onLoadContent(self);
        this._dynamicSpriteSize = true;
        var engine = self.getParentRecursively(dographics_library__WEBPACK_IMPORTED_MODULE_1__["DoGraphicsEngine"]);
        self._inputMouse = engine.inputMouse;
        self._transform = self.getChildByType(dographics_library__WEBPACK_IMPORTED_MODULE_1__["GeometricalTransform"]);
        self._transform.origin.X = 0.5;
        self._transform.origin.Y = 1;
        self._transform.position.X = (engine.size.X / 2);
        self._transform.position.Y = (engine.size.Y / 2) + 300;
        self._transform.scale.X = 4;
        self._transform.scale.Y = 4;
    }
    // OVERRIDED
    onUpdate(self, timing) {
        super.onUpdate(self, timing);
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
            }
            else {
                if (seqController.hasSequence("attack_" + (this._currentAttack + 1))) {
                    this._currentAttack++;
                }
                else {
                    this._currentAttack = 1;
                }
                self._loopCount = 0;
                self._enemyState = _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_ATTACKING;
            }
        }
        else if (self._enemyState == _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_ATTACKING) {
            if (seqController.currentActiveSequence.id != "attack_" + this._currentAttack) {
                seqController.changeCurrentSequence("attack_" + this._currentAttack);
                if (this._currentAttack == 1) {
                    if (audioController.getState("attack") != dographics_library__WEBPACK_IMPORTED_MODULE_1__["AudioPlayerState"].PLAYING) {
                        audioController.play("attack");
                    }
                }
                else {
                    if (audioController.getState("attack" + this._currentAttack) != dographics_library__WEBPACK_IMPORTED_MODULE_1__["AudioPlayerState"].PLAYING) {
                        audioController.play("attack" + this._currentAttack);
                    }
                }
            }
            if (seqController.currentActiveSequence.loopCounter > 0) {
                if (seqController.currentActiveSequence.loopCounter >= this.MAX_ATTACK_LOOP) {
                    self._enemyState = _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_WALKING;
                }
            }
        }
        else if (self._enemyState == _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_DYING) {
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
                    this._currentAttack = 0;
                    this._timeOfDeath = null;
                    self._enemyState = _strucutures_EnemyState__WEBPACK_IMPORTED_MODULE_2__["EnemyState"].STATE_NEXT;
                }
            }
        }
    }
    // == GETTER(S) & SETTER(S)
    // ==============================================================================================
    get enemyState() {
        return this._enemyState;
    }
}


/***/ }),

/***/ "./src/app/world/object/enemies/FormerHuman.ts":
/*!*****************************************************!*\
  !*** ./src/app/world/object/enemies/FormerHuman.ts ***!
  \*****************************************************/
/*! exports provided: FormerHuman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormerHuman", function() { return FormerHuman; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./src/app/world/object/enemies/Enemy.ts");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
// == IMPORTS
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
class FormerHuman extends _Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"] {
    // == DECLARATIONS
    // ==============================================================================================
    // -- CONST -------------------------------------------------------------------------------------
    // -- VAR ---------------------------------------------------------------------------------------
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    //OVERRIDED
    onInit() {
        super.onInit();
        // == AUDIO ================
        var audioController = this.getChildByName("audioController");
        // == AUDIO: Attack
        var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/formerhuman/attack.wav");
        audioController.addChild(sndAttack);
        // == AUDIO: Death
        var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/formerhuman/death.wav");
        audioController.addChild(sndDeath);
        this.addChild(audioController);
        // == SOUNDS ===============
        var sequenceController = this.getChildByName("sequenceController");
        // == SPRITES: Walking
        var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/formerhuman/walk_01.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/formerhuman/walk_02.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_03", "/assets/enemies/formerhuman/walk_03.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_04", "/assets/enemies/formerhuman/walk_04.png"));
        spriteSequenceWalk.imageUpdateRate = 60;
        spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceWalk);
        // == SPRITES: Attack 1
        this.MAX_WALKING_LOOP = 4;
        var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/formerhuman/attack_01.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/formerhuman/attack_02.png"));
        spriteSequenceAttack.imageUpdateRate = 70;
        spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].BOOMERANG;
        sequenceController.addChild(spriteSequenceAttack);
        // == SPRITES: Death
        var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/formerhuman/death_01.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/formerhuman/death_02.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/formerhuman/death_03.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/formerhuman/death_04.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/formerhuman/death_05.png"));
        spriteSequenceDeath.imageUpdateRate = 40;
        spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        spriteSequenceDeath.loop = false;
        sequenceController.addChild(spriteSequenceDeath);
    }
}


/***/ }),

/***/ "./src/app/world/object/enemies/FormerSergeant.ts":
/*!********************************************************!*\
  !*** ./src/app/world/object/enemies/FormerSergeant.ts ***!
  \********************************************************/
/*! exports provided: FormerSergeant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormerSergeant", function() { return FormerSergeant; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./src/app/world/object/enemies/Enemy.ts");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
// == IMPORTS
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
class FormerSergeant extends _Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"] {
    // == DECLARATIONS
    // ==============================================================================================
    // -- CONST -------------------------------------------------------------------------------------
    // -- VAR ---------------------------------------------------------------------------------------
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    //OVERRIDED
    onInit() {
        super.onInit();
        // == AUDIO ================
        var audioController = this.getChildByName("audioController");
        // == AUDIO: Attack
        var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/formersergeant/attack.wav");
        audioController.addChild(sndAttack);
        // == AUDIO: Death
        var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/formersergeant/death.wav");
        audioController.addChild(sndDeath);
        this.addChild(audioController);
        // == SOUNDS ===============
        var sequenceController = this.getChildByName("sequenceController");
        // == SPRITES: Walking
        var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/formersergeant/walk_01.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/formersergeant/walk_02.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_03", "/assets/enemies/formersergeant/walk_03.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_04", "/assets/enemies/formersergeant/walk_04.png"));
        spriteSequenceWalk.imageUpdateRate = 60;
        spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceWalk);
        // == SPRITES: Attack 1
        var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/formersergeant/attack_01.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/formersergeant/attack_02.png"));
        spriteSequenceAttack.imageUpdateRate = 60;
        spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].BOOMERANG;
        sequenceController.addChild(spriteSequenceAttack);
        // == SPRITES: Death
        var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/formersergeant/death_01.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/formersergeant/death_02.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/formersergeant/death_03.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/formersergeant/death_04.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/formersergeant/death_05.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_06", "/assets/enemies/formersergeant/death_06.png"));
        spriteSequenceDeath.imageUpdateRate = 60;
        spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        spriteSequenceDeath.loop = false;
        sequenceController.addChild(spriteSequenceDeath);
    }
    // == EVENTS(S)
    // ==============================================================================================	
    // OVERRIDED
    onLoadContent(self) {
        super.onLoadContent(self);
        this.MAX_WALKING_LOOP = 5;
    }
}


/***/ }),

/***/ "./src/app/world/object/enemies/HeavyWeaponDude.ts":
/*!*********************************************************!*\
  !*** ./src/app/world/object/enemies/HeavyWeaponDude.ts ***!
  \*********************************************************/
/*! exports provided: HeavyWeaponDude */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeavyWeaponDude", function() { return HeavyWeaponDude; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./src/app/world/object/enemies/Enemy.ts");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
// == IMPORTS
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
class HeavyWeaponDude extends _Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"] {
    // == DECLARATIONS
    // ==============================================================================================
    // -- CONST -------------------------------------------------------------------------------------
    // -- VAR ---------------------------------------------------------------------------------------
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    //OVERRIDED
    onInit() {
        super.onInit();
        // == AUDIO ================
        var audioController = this.getChildByName("audioController");
        // == AUDIO: Attack
        var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/heavyweapondude/attack.mp3");
        audioController.addChild(sndAttack);
        // == AUDIO: Death
        var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/heavyweapondude/death.wav");
        audioController.addChild(sndDeath);
        this.addChild(audioController);
        // == SOUNDS ===============
        var sequenceController = this.getChildByName("sequenceController");
        // == SPRITES: Walking
        this.MAX_WALKING_LOOP = 4;
        var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/heavyweapondude/walk_01.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/heavyweapondude/walk_02.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_03", "/assets/enemies/heavyweapondude/walk_03.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_04", "/assets/enemies/heavyweapondude/walk_04.png"));
        spriteSequenceWalk.imageUpdateRate = 40;
        spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceWalk);
        // == SPRITES: Attack 1
        var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/heavyweapondude/attack_01.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/heavyweapondude/attack_02.png"));
        spriteSequenceAttack.imageUpdateRate = 45;
        spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceAttack);
        // == SPRITES: Death
        var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/heavyweapondude/death_01.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/heavyweapondude/death_02.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/heavyweapondude/death_03.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/heavyweapondude/death_04.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/heavyweapondude/death_05.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_06", "/assets/enemies/heavyweapondude/death_06.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_07", "/assets/enemies/heavyweapondude/death_07.png"));
        spriteSequenceDeath.imageUpdateRate = 40;
        spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        spriteSequenceDeath.loop = false;
        sequenceController.addChild(spriteSequenceDeath);
    }
    // == EVENTS(S)
    // ==============================================================================================	
    // OVERRIDED
    onLoadContent(self) {
        super.onLoadContent(self);
        this.MAX_ATTACK_LOOP = 5;
    }
}


/***/ }),

/***/ "./src/app/world/object/enemies/HellKnight.ts":
/*!****************************************************!*\
  !*** ./src/app/world/object/enemies/HellKnight.ts ***!
  \****************************************************/
/*! exports provided: HellKnight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HellKnight", function() { return HellKnight; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./src/app/world/object/enemies/Enemy.ts");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
// == IMPORTS
// ==================================================================================================



// == CLASS
// ==================================================================================================
/**
 *
 *  Define the HellKnight sprite class.
 *
 *  @author Henrique Fantini
 *
 */
class HellKnight extends _Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"] {
    // == DECLARATIONS
    // ==============================================================================================
    // -- CONST -------------------------------------------------------------------------------------
    // -- VAR ---------------------------------------------------------------------------------------
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    //OVERRIDED
    onInit() {
        super.onInit();
        // == AUDIO ================
        var audioController = this.getChildByName("audioController");
        // == AUDIO: Sight
        var sndSight = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("sight", "/assets/enemies/hellknight/sight.wav");
        audioController.addChild(sndSight);
        // == AUDIO: Attack
        var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/hellknight/attack.wav");
        audioController.addChild(sndAttack);
        // == AUDIO: Death
        var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/hellknight/death.wav");
        audioController.addChild(sndDeath);
        this.addChild(audioController);
        // == SOUNDS ===============
        var sequenceController = this.getChildByName("sequenceController");
        // == SPRITES: Walking
        var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/hellknight/walk_01.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/hellknight/walk_02.png"));
        spriteSequenceWalk.imageUpdateRate = 40;
        spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].BOOMERANG;
        sequenceController.addChild(spriteSequenceWalk);
        // == SPRITES: Attack 1
        var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/hellknight/attack_01.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/hellknight/attack_02.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_03", "/assets/enemies/hellknight/attack_03.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_04", "/assets/enemies/hellknight/attack_04.png"));
        spriteSequenceAttack.imageUpdateRate = 30;
        spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceAttack);
        // == SPRITES: Death
        var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/hellknight/death_01.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/hellknight/death_02.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/hellknight/death_03.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/hellknight/death_04.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/hellknight/death_05.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_06", "/assets/enemies/hellknight/death_06.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_07", "/assets/enemies/hellknight/death_07.png"));
        spriteSequenceDeath.imageUpdateRate = 40;
        spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        spriteSequenceDeath.loop = false;
        sequenceController.addChild(spriteSequenceDeath);
    }
    // == EVENTS(S)
    // ==============================================================================================	
    // OVERRIDED
    onLoadContent(self) {
        super.onLoadContent(self);
        this.MAX_WALKING_LOOP = 75;
    }
}


/***/ }),

/***/ "./src/app/world/object/enemies/Imp.ts":
/*!*********************************************!*\
  !*** ./src/app/world/object/enemies/Imp.ts ***!
  \*********************************************/
/*! exports provided: Imp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Imp", function() { return Imp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./src/app/world/object/enemies/Enemy.ts");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
// == IMPORTS
// ==================================================================================================



// == CLASS
// ==================================================================================================
/**
 *
 *  Define the Imp sprite class.
 *
 *  @author Henrique Fantini
 *
 */
class Imp extends _Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"] {
    // == DECLARATIONS
    // ==============================================================================================
    // -- CONST -------------------------------------------------------------------------------------
    // -- VAR ---------------------------------------------------------------------------------------
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    //OVERRIDED
    onInit() {
        super.onInit();
        // == AUDIO ================
        var audioController = this.getChildByName("audioController");
        // == AUDIO: Sight
        var sndSight = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("sight", "/assets/enemies/imp/sight.wav");
        audioController.addChild(sndSight);
        // == AUDIO: Attack
        var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/imp/attack.wav");
        audioController.addChild(sndAttack);
        // == AUDIO: Death
        var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/imp/death.wav");
        audioController.addChild(sndDeath);
        this.addChild(audioController);
        // == SOUNDS ===============
        var sequenceController = this.getChildByName("sequenceController");
        // == SPRITES: Walking
        var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/imp/walk_01.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/imp/walk_02.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_03", "/assets/enemies/imp/walk_03.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_04", "/assets/enemies/imp/walk_04.png"));
        spriteSequenceWalk.imageUpdateRate = 40;
        spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceWalk);
        // == SPRITES: Attack 1
        var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/imp/attack_01.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/imp/attack_02.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_03", "/assets/enemies/imp/attack_03.png"));
        spriteSequenceAttack.imageUpdateRate = 30;
        spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceAttack);
        // == SPRITES: Death
        var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/imp/death_01.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/imp/death_02.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/imp/death_03.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/imp/death_04.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/imp/death_05.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_06", "/assets/enemies/imp/death_06.png"));
        spriteSequenceDeath.imageUpdateRate = 40;
        spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        spriteSequenceDeath.loop = false;
        sequenceController.addChild(spriteSequenceDeath);
    }
}


/***/ }),

/***/ "./src/app/world/object/enemies/LostSoul.ts":
/*!**************************************************!*\
  !*** ./src/app/world/object/enemies/LostSoul.ts ***!
  \**************************************************/
/*! exports provided: LostSoul */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostSoul", function() { return LostSoul; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./src/app/world/object/enemies/Enemy.ts");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
// == IMPORTS
// ==================================================================================================



// == CLASS
// ==================================================================================================
/**
 *
 *  Define the LostSoul sprite class.
 *
 *  @author Henrique Fantini
 *
 */
class LostSoul extends _Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"] {
    // == DECLARATIONS
    // ==============================================================================================
    // -- CONST -------------------------------------------------------------------------------------
    // -- VAR ---------------------------------------------------------------------------------------
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    //OVERRIDED
    onInit() {
        super.onInit();
        // == AUDIO ================
        var audioController = this.getChildByName("audioController");
        // == AUDIO: Attack
        var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/lostsoul/attack.wav");
        audioController.addChild(sndAttack);
        // == AUDIO: Death
        var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/lostsoul/death.wav");
        audioController.addChild(sndDeath);
        this.addChild(audioController);
        // == SOUNDS ===============
        var sequenceController = this.getChildByName("sequenceController");
        // == SPRITES: Walking
        var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/lostsoul/walk_01.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/lostsoul/walk_02.png"));
        spriteSequenceWalk.imageUpdateRate = 40;
        spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceWalk);
        // == SPRITES: Attack 1
        var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/lostsoul/attack_01.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/lostsoul/attack_02.png"));
        spriteSequenceAttack.imageUpdateRate = 30;
        spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceAttack);
        // == SPRITES: Death
        var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/lostsoul/death_01.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/lostsoul/death_02.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/lostsoul/death_03.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/lostsoul/death_04.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/lostsoul/death_05.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_06", "/assets/enemies/lostsoul/death_06.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_07", "/assets/enemies/lostsoul/death_07.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_08", "/assets/enemies/lostsoul/death_08.png"));
        spriteSequenceDeath.imageUpdateRate = 50;
        spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        spriteSequenceDeath.loop = false;
        sequenceController.addChild(spriteSequenceDeath);
    }
    // == EVENTS(S)
    // ==============================================================================================	
    // OVERRIDED
    onLoadContent(self) {
        super.onLoadContent(self);
        this.MAX_WALKING_LOOP = 200;
    }
}


/***/ }),

/***/ "./src/app/world/object/enemies/Mancubus.ts":
/*!**************************************************!*\
  !*** ./src/app/world/object/enemies/Mancubus.ts ***!
  \**************************************************/
/*! exports provided: Mancubus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mancubus", function() { return Mancubus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./src/app/world/object/enemies/Enemy.ts");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
// == IMPORTS
// ==================================================================================================



// == CLASS
// ==================================================================================================
/**
 *
 *  Define the Mancubus sprite class.
 *
 *  @author Henrique Fantini
 *
 */
class Mancubus extends _Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"] {
    // == DECLARATIONS
    // ==============================================================================================
    // -- CONST -------------------------------------------------------------------------------------
    // -- VAR ---------------------------------------------------------------------------------------
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    //OVERRIDED
    onInit() {
        super.onInit();
        // == AUDIO ================
        var audioController = this.getChildByName("audioController");
        // == AUDIO: Sight
        var sndSight = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("sight", "/assets/enemies/mancubus/sight.wav");
        audioController.addChild(sndSight);
        // == AUDIO: Attack
        var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/mancubus/attack.wav");
        audioController.addChild(sndAttack);
        // == AUDIO: Death
        var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/mancubus/death.wav");
        audioController.addChild(sndDeath);
        this.addChild(audioController);
        // == SOUNDS ===============
        var sequenceController = this.getChildByName("sequenceController");
        // == SPRITES: Walking
        var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/mancubus/walk_01.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/mancubus/walk_02.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_03", "/assets/enemies/mancubus/walk_03.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_04", "/assets/enemies/mancubus/walk_04.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_05", "/assets/enemies/mancubus/walk_05.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_06", "/assets/enemies/mancubus/walk_06.png"));
        spriteSequenceWalk.imageUpdateRate = 30;
        spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceWalk);
        // == SPRITES: Attack 1
        var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/mancubus/attack_01.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/mancubus/attack_02.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_03", "/assets/enemies/mancubus/attack_03.png"));
        spriteSequenceAttack.imageUpdateRate = 30;
        spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceAttack);
        // == SPRITES: Death
        var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/mancubus/death_01.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/mancubus/death_02.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/mancubus/death_03.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/mancubus/death_04.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/mancubus/death_05.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_06", "/assets/enemies/mancubus/death_06.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_07", "/assets/enemies/mancubus/death_07.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_08", "/assets/enemies/mancubus/death_08.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_09", "/assets/enemies/mancubus/death_09.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_10", "/assets/enemies/mancubus/death_10.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_11", "/assets/enemies/mancubus/death_11.png"));
        spriteSequenceDeath.imageUpdateRate = 40;
        spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        spriteSequenceDeath.loop = false;
        sequenceController.addChild(spriteSequenceDeath);
    }
    // == EVENTS(S)
    // ==============================================================================================	
    // OVERRIDED
    onLoadContent(self) {
        super.onLoadContent(self);
        this.MAX_ATTACK_LOOP = 3;
    }
}


/***/ }),

/***/ "./src/app/world/object/enemies/PainElemental.ts":
/*!*******************************************************!*\
  !*** ./src/app/world/object/enemies/PainElemental.ts ***!
  \*******************************************************/
/*! exports provided: PainElemental */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainElemental", function() { return PainElemental; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./src/app/world/object/enemies/Enemy.ts");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
// == IMPORTS
// ==================================================================================================



// == CLASS
// ==================================================================================================
/**
 *
 *  Define the PainElemental sprite class.
 *
 *  @author Henrique Fantini
 *
 */
class PainElemental extends _Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"] {
    // == DECLARATIONS
    // ==============================================================================================
    // -- CONST -------------------------------------------------------------------------------------
    // -- VAR ---------------------------------------------------------------------------------------
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    //OVERRIDED
    onInit() {
        super.onInit();
        // == AUDIO ================
        var audioController = this.getChildByName("audioController");
        // == AUDIO: Sight
        var sndSight = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("sight", "/assets/enemies/painelemental/sight.wav");
        audioController.addChild(sndSight);
        // == AUDIO: Attack
        var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/painelemental/attack.wav");
        audioController.addChild(sndAttack);
        // == AUDIO: Death
        var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/painelemental/death.wav");
        audioController.addChild(sndDeath);
        this.addChild(audioController);
        // == SOUNDS ===============
        var sequenceController = this.getChildByName("sequenceController");
        // == SPRITES: Walking
        var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/painelemental/walk_01.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/painelemental/walk_02.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_03", "/assets/enemies/painelemental/walk_03.png"));
        spriteSequenceWalk.imageUpdateRate = 40;
        spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceWalk);
        // == SPRITES: Attack 1
        var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/painelemental/attack_01.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/painelemental/attack_02.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_03", "/assets/enemies/painelemental/attack_03.png"));
        spriteSequenceAttack.imageUpdateRate = 30;
        spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceAttack);
        // == SPRITES: Death
        var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/painelemental/death_01.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/painelemental/death_02.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/painelemental/death_03.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/painelemental/death_04.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/painelemental/death_05.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_06", "/assets/enemies/painelemental/death_06.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_07", "/assets/enemies/painelemental/death_07.png"));
        spriteSequenceDeath.imageUpdateRate = 40;
        spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        spriteSequenceDeath.loop = false;
        sequenceController.addChild(spriteSequenceDeath);
    }
    // == EVENTS(S)
    // ==============================================================================================	
    // OVERRIDED
    onLoadContent(self) {
        super.onLoadContent(self);
        this.MAX_WALKING_LOOP = 2;
        this.MAX_ATTACK_LOOP = 1;
    }
}


/***/ }),

/***/ "./src/app/world/object/enemies/Pink.ts":
/*!**********************************************!*\
  !*** ./src/app/world/object/enemies/Pink.ts ***!
  \**********************************************/
/*! exports provided: Pink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pink", function() { return Pink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./src/app/world/object/enemies/Enemy.ts");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
// == IMPORTS
// ==================================================================================================



// == CLASS
// ==================================================================================================
/**
 *
 *  Define the Pink sprite class.
 *
 *  @author Henrique Fantini
 *
 */
class Pink extends _Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"] {
    // == DECLARATIONS
    // ==============================================================================================
    // -- CONST -------------------------------------------------------------------------------------
    // -- VAR ---------------------------------------------------------------------------------------
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    //OVERRIDED
    onInit() {
        super.onInit();
        // == AUDIO ================
        var audioController = this.getChildByName("audioController");
        // == AUDIO: Sight
        var sndSight = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("sight", "/assets/enemies/pink/sight.wav");
        audioController.addChild(sndSight);
        // == AUDIO: Attack
        var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/pink/attack.wav");
        audioController.addChild(sndAttack);
        // == AUDIO: Death
        var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/pink/death.wav");
        audioController.addChild(sndDeath);
        this.addChild(audioController);
        // == SOUNDS ===============
        var sequenceController = this.getChildByName("sequenceController");
        // == SPRITES: Walking
        var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/pink/walk_01.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/pink/walk_02.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_03", "/assets/enemies/pink/walk_03.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_04", "/assets/enemies/pink/walk_04.png"));
        spriteSequenceWalk.imageUpdateRate = 40;
        spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceWalk);
        // == SPRITES: Attack 1
        var spriteSequenceAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/pink/attack_01.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/pink/attack_02.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_03", "/assets/enemies/pink/attack_03.png"));
        spriteSequenceAttack.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_04", "/assets/enemies/pink/attack_04.png"));
        spriteSequenceAttack.imageUpdateRate = 30;
        spriteSequenceAttack.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceAttack);
        // == SPRITES: Death
        var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/pink/death_01.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/pink/death_02.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/pink/death_03.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/pink/death_04.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/pink/death_05.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_06", "/assets/enemies/pink/death_06.png"));
        spriteSequenceDeath.imageUpdateRate = 40;
        spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        spriteSequenceDeath.loop = false;
        sequenceController.addChild(spriteSequenceDeath);
    }
}


/***/ }),

/***/ "./src/app/world/object/enemies/Revenant.ts":
/*!**************************************************!*\
  !*** ./src/app/world/object/enemies/Revenant.ts ***!
  \**************************************************/
/*! exports provided: Revenant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Revenant", function() { return Revenant; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./src/app/world/object/enemies/Enemy.ts");
/* harmony import */ var dographics_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dographics-library */ "./node_modules/dographics-library/fesm2015/dographics-library.js");
// == IMPORTS
// ==================================================================================================



// == CLASS
// ==================================================================================================
/**
 *
 *  Define the Revenant sprite class.
 *
 *  @author Henrique Fantini
 *
 */
class Revenant extends _Enemy__WEBPACK_IMPORTED_MODULE_1__["Enemy"] {
    // == DECLARATIONS
    // ==============================================================================================
    // -- CONST -------------------------------------------------------------------------------------
    // -- VAR ---------------------------------------------------------------------------------------
    // == CONSTRUCTOR
    // ==============================================================================================
    // == METHOD(S)
    // ==============================================================================================
    //OVERRIDED
    onInit() {
        super.onInit();
        // == AUDIO ================
        var audioController = this.getChildByName("audioController");
        // == AUDIO: Sight
        var sndSight = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("sight", "/assets/enemies/revenant/sight.wav");
        audioController.addChild(sndSight);
        // == AUDIO: Attack 1
        var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack", "/assets/enemies/revenant/attack.wav");
        audioController.addChild(sndAttack);
        // == AUDIO: Attack 2
        var sndAttack = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("attack2", "/assets/enemies/revenant/attack2.mp3");
        audioController.addChild(sndAttack);
        // == AUDIO: Death
        var sndDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["AudioContent"]("death", "/assets/enemies/revenant/death.wav");
        audioController.addChild(sndDeath);
        this.addChild(audioController);
        // == SOUNDS ===============
        var sequenceController = this.getChildByName("sequenceController");
        // == SPRITES: Walking
        var spriteSequenceWalk = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("walk");
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_01", "/assets/enemies/revenant/walk_01.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_02", "/assets/enemies/revenant/walk_02.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_03", "/assets/enemies/revenant/walk_03.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_04", "/assets/enemies/revenant/walk_04.png"));
        spriteSequenceWalk.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("walk_05", "/assets/enemies/revenant/walk_05.png"));
        spriteSequenceWalk.imageUpdateRate = 40;
        spriteSequenceWalk.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceWalk);
        // == SPRITES: Attack 1
        var spriteSequenceAttack1 = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_1");
        spriteSequenceAttack1.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_01", "/assets/enemies/revenant/attack_01_01.png"));
        spriteSequenceAttack1.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02", "/assets/enemies/revenant/attack_01_02.png"));
        spriteSequenceAttack1.imageUpdateRate = 20;
        spriteSequenceAttack1.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceAttack1);
        // == SPRITES: Attack 2
        var spriteSequenceAttack2 = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("attack_2");
        spriteSequenceAttack2.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02_01", "/assets/enemies/revenant/attack_02_01.png"));
        spriteSequenceAttack2.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02_02", "/assets/enemies/revenant/attack_02_02.png"));
        spriteSequenceAttack2.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("attack_02_03", "/assets/enemies/revenant/attack_02_03.png"));
        spriteSequenceAttack2.imageUpdateRate = 30;
        spriteSequenceAttack2.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        sequenceController.addChild(spriteSequenceAttack2);
        // == SPRITES: Death
        var spriteSequenceDeath = new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequence"]("death");
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_01", "/assets/enemies/revenant/death_01.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_02", "/assets/enemies/revenant/death_02.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_03", "/assets/enemies/revenant/death_03.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_04", "/assets/enemies/revenant/death_04.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_05", "/assets/enemies/revenant/death_05.png"));
        spriteSequenceDeath.addChild(new dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteImage"]("death_06", "/assets/enemies/revenant/death_06.png"));
        spriteSequenceDeath.imageUpdateRate = 40;
        spriteSequenceDeath.strategy = dographics_library__WEBPACK_IMPORTED_MODULE_2__["SpriteSequenceStrategy"].CONTINOUS;
        spriteSequenceDeath.loop = false;
        sequenceController.addChild(spriteSequenceDeath);
    }
}


/***/ }),

/***/ "./src/app/world/strucutures/EnemyState.ts":
/*!*************************************************!*\
  !*** ./src/app/world/strucutures/EnemyState.ts ***!
  \*************************************************/
/*! exports provided: EnemyState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyState", function() { return EnemyState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// == IMPORTS
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


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Documentos\Portfólio\iconofsin\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map