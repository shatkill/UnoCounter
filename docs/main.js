"use strict";
(self["webpackChunkUnoCounter"] = self["webpackChunkUnoCounter"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _main_main_frame_main_frame_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main-frame/main-frame.component */ 171);
/* harmony import */ var _main_main_landing_main_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main-landing/main-landing.component */ 3970);
/* harmony import */ var _main_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/game-page/game-page.component */ 7950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






const routes = [{
  path: "",
  component: _main_main_frame_main_frame_component__WEBPACK_IMPORTED_MODULE_0__.MainFrameComponent,
  children: [{
    path: "",
    component: _main_main_landing_main_landing_component__WEBPACK_IMPORTED_MODULE_1__.MainLandingComponent
  }, {
    path: "game",
    component: _main_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_2__.GamePageComponent
  }]
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _main_main_frame_main_frame_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main-frame/main-frame.component */ 171);
/* harmony import */ var _main_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main-header/main-header.component */ 4769);



class AppComponent {
  constructor() {
    this.title = 'UnoCounter';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["uc-root"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "uc-main-header")(1, "uc-main-frame");
      }
    },
    dependencies: [_main_main_frame_main_frame_component__WEBPACK_IMPORTED_MODULE_0__.MainFrameComponent, _main_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_1__.MainHeaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.module */ 1679);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _main_main_module__WEBPACK_IMPORTED_MODULE_2__.MainModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _main_main_module__WEBPACK_IMPORTED_MODULE_2__.MainModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 7950:
/*!*******************************************************!*\
  !*** ./src/app/main/game-page/game-page.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamePageComponent: () => (/* binding */ GamePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_shared_data_save_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data-save.service */ 3417);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);





function GamePageComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.shufflePlayer === player_r4 ? "\u2022 " + player_r4 : player_r4, " ");
  }
}
function GamePageComponent_tr_5_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r8 = ctx.$implicit;
    const round_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.scores[player_r8][round_r6], " ");
  }
}
function GamePageComponent_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GamePageComponent_tr_5_td_1_Template, 2, 1, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.players);
  }
}
function GamePageComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r2.getPlayerControl(player_r10));
  }
}
function GamePageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GamePageComponent_div_8_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.addScores());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return [];
};
class GamePageComponent {
  constructor(dataSaveService) {
    this.dataSaveService = dataSaveService;
    this.isFinished = false;
    this.halvePointsActivated = false;
    this.scores = {};
    this.players = this.dataSaveService.players;
    this.maxScore = this.dataSaveService.maxScore;
    this.halvePointsActivated = this.dataSaveService.halvePointsActivated;
    this.formGroup = this.createFormGroup();
    this.rounds = 1;
    this.changeShufflePlayerTurn();
    this.players?.forEach(player => {
      if (!this.scores[player]) {
        this.scores[player] = [0];
      }
    });
  }
  addScores() {
    this.players?.forEach(player => {
      this.scores[player].push(this.getCurrentScoreOfPlayer(player) + this.getPlayerControl(player).value);
      if (this.halvePointsActivated && this.getCurrentScoreOfPlayer(player) % 100 === 0) {
        this.scores[player][this.scores[player].length - 1] /= 2;
      }
      this.getPlayerControl(player).setValue(null);
    });
    this.rounds++;
    this.determineLoser();
    this.changeShufflePlayerTurn();
  }
  determineLoser() {
    this.players?.forEach(player => {
      if (this.getCurrentScoreOfPlayer(player) >= this.maxScore) {
        this.isFinished = true;
      }
    });
  }
  getCurrentScoreOfPlayer(player) {
    return this.scores[player][this.scores[player].length - 1];
  }
  getPlayerControl(player) {
    return this.formGroup.controls[player];
  }
  changeShufflePlayerTurn() {
    this.shufflePlayer = this.players ? this.players[(this.rounds - 1) % this.players.length] : '';
  }
  createFormGroup() {
    const group = {};
    this.players?.forEach(player => {
      group[player] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null);
    });
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup(group);
  }
  static #_ = this.ɵfac = function GamePageComponent_Factory(t) {
    return new (t || GamePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_data_save_service__WEBPACK_IMPORTED_MODULE_0__.DataSaveService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GamePageComponent,
    selectors: [["uc-game-page"]],
    decls: 9,
    vars: 5,
    consts: [[1, "uc-table-header-row"], [4, "ngFor", "ngForOf"], ["class", "uc-button-container", 4, "ngIf"], ["type", "number", 1, "uc-score-counter", 3, "formControl"], [1, "uc-button-container"], [1, "uc-default-button", 3, "click"]],
    template: function GamePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GamePageComponent_th_3_Template, 2, 1, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GamePageComponent_tr_5_Template, 2, 1, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, GamePageComponent_td_7_Template, 2, 1, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GamePageComponent_div_8_Template, 3, 0, "div", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0).constructor(ctx.rounds));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isFinished);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective],
    styles: [".uc-table-cell[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: left;\n  font-size: large;\n  padding: 0.5rem;\n}\n\n.uc-maxscore-container[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: bold;\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n}\n\n.uc-theader[_ngcontent-%COMP%] {\n  display: flex;\n  font-weight: bold;\n}\n\n\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 20px;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ecd407;\n  padding: 8px;\n  text-align: end;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 40px;\n  font-weight: bold;\n  text-align: end;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: black;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(n) {\n  background-color: #d72600;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: #ecd407;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3n) {\n  background-color: #379711;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4n) {\n  background-color: #0956bf;\n}\n\ndiv[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\ndiv[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\ndiv[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9nYW1lLXBhZ2UvZ2FtZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUpGOztBQVFBLDhCQUFBO0FBRUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQU5GO0FBUUU7O0VBRUUseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQU5KO0FBUUk7O0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUxOO0FBVUk7RUFDRSxZQUFBO0FBUk47QUFXSTtFQUNFLHlCQ3RESztBRDZDWDtBQVdJO0VBQ0UseUJDeERRO0FEK0NkO0FBV0k7RUFDRSx5QkMxRE87QURpRGI7QUFXSTtFQUNFLHlCQzVETTtBRG1EWjs7QUFjQTtFQUNFLGdCQUFBO0FBWEY7QUFhRTtFQUNFLGtCQUFBO0FBWEo7QUFjRTs7O0VBR0Usa0JBQUE7QUFaSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsaW5ncy5zY3NzXCI7XHJcblxyXG4udWMtdGFibGUtY2VsbCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi51Yy1tYXhzY29yZS1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi51Yy1idXR0b24tY29udGFpbmVyIHtcclxufVxyXG5cclxuLnVjLXRoZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqXHJcbi8qIHNjb3JlYm9hcmQuY29tcG9uZW50LnNjc3MgKi9cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIHRoLFxyXG4gIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRiYXNlLXllbGxvdztcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51Yy10YWJsZS1oZWFkZXItcm93IHtcclxuICAgIHRoIHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIDpudGgtY2hpbGQobikge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1yZWQ7XHJcbiAgICB9XHJcbiAgICA6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLXllbGxvdztcclxuICAgIH1cclxuICAgIDpudGgtY2hpbGQoM24pIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtZ3JlZW47XHJcbiAgICB9XHJcbiAgICA6bnRoLWNoaWxkKDRuKSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWJsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5kaXYge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIHNlbGVjdCxcclxuICBpbnB1dCxcclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxufVxyXG4iLCIkYmFzZS1yZWQ6ICNkNzI2MDA7IC8vIHJlZFxyXG4kYmFzZS15ZWxsb3c6ICNlY2Q0MDc7IC8vIHllbGxvd1xyXG4kYmFzZS1ncmVlbjogIzM3OTcxMTsgLy8gZ3JlZW5cclxuJGJhc2UtYmx1ZTogIzA5NTZiZjsgLy8gYmx1ZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 171:
/*!*********************************************************!*\
  !*** ./src/app/main/main-frame/main-frame.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainFrameComponent: () => (/* binding */ MainFrameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class MainFrameComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function MainFrameComponent_Factory(t) {
    return new (t || MainFrameComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MainFrameComponent,
    selectors: [["uc-main-frame"]],
    decls: 2,
    vars: 0,
    consts: [[1, "uc-main-frame"]],
    template: function MainFrameComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: [".uc-main-frame[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9tYWluLWZyYW1lL21haW4tZnJhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnVjLW1haW4tZnJhbWUge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4769:
/*!***********************************************************!*\
  !*** ./src/app/main/main-header/main-header.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainHeaderComponent: () => (/* binding */ MainHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class MainHeaderComponent {
  constructor(appRouter) {
    this.appRouter = appRouter;
  }
  ngOnInit() {}
  goToHome() {
    this.appRouter.navigate([""]);
  }
  static #_ = this.ɵfac = function MainHeaderComponent_Factory(t) {
    return new (t || MainHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MainHeaderComponent,
    selectors: [["uc-main-header"]],
    decls: 4,
    vars: 0,
    consts: [[1, "uc-main-header", 3, "click"], ["src", "https://upload.wikimedia.org/wikipedia/commons/f/f9/UNO_Logo.svg"], [1, "uc-title"]],
    template: function MainHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHeaderComponent_Template_div_click_0_listener() {
          return ctx.goToHome();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Score Counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".uc-main-header[_ngcontent-%COMP%] {\n  height: 4rem;\n  display: flex;\n  cursor: pointer;\n}\n\n.uc-title[_ngcontent-%COMP%] {\n  line-height: 4rem;\n  font-size: x-large;\n  font-weight: bold;\n  padding-left: 0.5rem;\n}\n\n.uc-main-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi51Yy1tYWluLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udWMtdGl0bGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG4udWMtbWFpbi1oZWFkZXIgaW1nIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3970:
/*!*************************************************************!*\
  !*** ./src/app/main/main-landing/main-landing.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainLandingComponent: () => (/* binding */ MainLandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_shared_data_save_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data-save.service */ 3417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);






function MainLandingComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Add players below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MainLandingComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", player_r2, " ");
  }
}
class MainLandingComponent {
  constructor(dataSaveService, appRouter) {
    this.dataSaveService = dataSaveService;
    this.appRouter = appRouter;
    this.selectedPlayers = [];
    this.addPlayerControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
    this.scoreControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(400);
    this.halveControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(false);
  }
  ngOnInit() {}
  addPlayer() {
    if (this.addPlayerControl.value === '' || this.addPlayerControl.value === null) {
      return;
    }
    this.selectedPlayers.push(this.addPlayerControl.value);
    this.addPlayerControl.reset();
  }
  startGame() {
    if (this.selectedPlayers.length === 0) {
      return;
    }
    this.dataSaveService.players = this.selectedPlayers;
    this.dataSaveService.maxScore = this.scoreControl.value ?? 400;
    this.dataSaveService.halvePointsActivated = this.halveControl.value ?? false;
    this.appRouter.navigate(['/game']);
  }
  static #_ = this.ɵfac = function MainLandingComponent_Factory(t) {
    return new (t || MainLandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_data_save_service__WEBPACK_IMPORTED_MODULE_0__.DataSaveService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MainLandingComponent,
    selectors: [["uc-main-landing"]],
    decls: 24,
    vars: 6,
    consts: [[1, "uc-rules"], [1, "uc-rules-form"], ["type", "checkbox", 3, "formControl"], ["type", "number", "placeholder", "Max. Score", 3, "formControl"], [1, "uc-players-table"], ["class", "uc-player", 4, "ngIf"], [1, "uc-players"], ["class", "uc-player", 4, "ngFor", "ngForOf"], [1, "uc-add-player-form"], ["type", "text", "placeholder", "Name", 3, "formControl"], [1, "uc-default-button", 3, "click"], [1, "uc-accent-button", 3, "click"], [1, "uc-player"]],
    template: function MainLandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1)(4, "div")(5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Halve points at full hundreds?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Max Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4)(13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MainLandingComponent_div_15_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MainLandingComponent_div_17_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLandingComponent_Template_div_click_20_listener() {
          return ctx.addPlayer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Add player");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLandingComponent_Template_div_click_22_listener() {
          return ctx.startGame();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Start Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.halveControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.scoreControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Players: ", ctx.selectedPlayers.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedPlayers.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedPlayers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.addPlayerControl);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective],
    styles: [".uc-rules[_ngcontent-%COMP%] {\n  border: 2px solid #ecd407;\n  border-radius: 8px;\n  padding: 10px;\n  margin-bottom: 1rem;\n}\n\n.uc-rules-form[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.uc-add-player-form[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.uc-add-player-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: calc(100% - 10px);\n  margin-bottom: 1rem;\n}\n\n.uc-players-table[_ngcontent-%COMP%] {\n  border: 2px solid #ecd407;\n  border-radius: 8px;\n  padding: 10px;\n  margin-bottom: 1rem;\n}\n\n.uc-players[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(n) {\n  color: #d72600;\n}\n.uc-players[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2n) {\n  color: #ecd407;\n}\n.uc-players[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3n) {\n  color: #379711;\n}\n.uc-players[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4n) {\n  color: #0956bf;\n}\n\n.uc-player[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: 30px;\n  padding: 5px;\n}\n\nh4[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9tYWluLWxhbmRpbmcvbWFpbi1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGO0FBR0U7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBTUU7RUFDRSxjQ2pDTztBRDhCWDtBQUtFO0VBQ0UsY0NuQ1U7QURnQ2Q7QUFLRTtFQUNFLGNDckNTO0FEa0NiO0FBS0U7RUFDRSxjQ3ZDUTtBRG9DWjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0E7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FBSkYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGluZ3Muc2Nzc1wiO1xyXG5cclxuLnVjLXJ1bGVzIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkYmFzZS15ZWxsb3c7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnVjLXJ1bGVzLWZvcm0gKiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnVjLWFkZC1wbGF5ZXItZm9ybSB7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnVjLXBsYXllcnMtdGFibGUge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRiYXNlLXllbGxvdztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4udWMtcGxheWVycyB7XHJcbiAgOm50aC1jaGlsZChuKSB7XHJcbiAgICBjb2xvcjogJGJhc2UtcmVkO1xyXG4gIH1cclxuICA6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICBjb2xvcjogJGJhc2UteWVsbG93O1xyXG4gIH1cclxuICA6bnRoLWNoaWxkKDNuKSB7XHJcbiAgICBjb2xvcjogJGJhc2UtZ3JlZW47XHJcbiAgfVxyXG4gIDpudGgtY2hpbGQoNG4pIHtcclxuICAgIGNvbG9yOiAkYmFzZS1ibHVlO1xyXG4gIH1cclxufVxyXG5cclxuLnVjLXBsYXllciB7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4iLCIkYmFzZS1yZWQ6ICNkNzI2MDA7IC8vIHJlZFxyXG4kYmFzZS15ZWxsb3c6ICNlY2Q0MDc7IC8vIHllbGxvd1xyXG4kYmFzZS1ncmVlbjogIzM3OTcxMTsgLy8gZ3JlZW5cclxuJGJhc2UtYmx1ZTogIzA5NTZiZjsgLy8gYmx1ZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1679:
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainModule: () => (/* binding */ MainModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _main_frame_main_frame_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-frame/main-frame.component */ 171);
/* harmony import */ var _main_landing_main_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-landing/main-landing.component */ 3970);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-routing.module */ 3966);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-header/main-header.component */ 4769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _game_page_game_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-page/game-page.component */ 7950);
/* harmony import */ var _player_score_item_player_score_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-score-item/player-score-item.component */ 3841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);











class MainModule {
  static #_ = this.ɵfac = function MainModule_Factory(t) {
    return new (t || MainModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: MainModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MainModule, {
    declarations: [_main_frame_main_frame_component__WEBPACK_IMPORTED_MODULE_0__.MainFrameComponent, _main_landing_main_landing_component__WEBPACK_IMPORTED_MODULE_1__.MainLandingComponent, _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_3__.MainHeaderComponent, _game_page_game_page_component__WEBPACK_IMPORTED_MODULE_4__.GamePageComponent, _player_score_item_player_score_item_component__WEBPACK_IMPORTED_MODULE_5__.PlayerScoreItemComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule],
    exports: [_main_frame_main_frame_component__WEBPACK_IMPORTED_MODULE_0__.MainFrameComponent, _main_landing_main_landing_component__WEBPACK_IMPORTED_MODULE_1__.MainLandingComponent, _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_3__.MainHeaderComponent]
  });
})();

/***/ }),

/***/ 3841:
/*!***********************************************************************!*\
  !*** ./src/app/main/player-score-item/player-score-item.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerScoreItemComponent: () => (/* binding */ PlayerScoreItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);


class PlayerScoreItemComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PlayerScoreItemComponent_Factory(t) {
    return new (t || PlayerScoreItemComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PlayerScoreItemComponent,
    selectors: [["uc-player-score-item"]],
    inputs: {
      player: "player",
      scoreControl: "scoreControl"
    },
    decls: 7,
    vars: 3,
    consts: [[1, "uc-table-row"], [1, "uc-table-cell"], ["type", "number", 1, "uc-score-counter", 3, "formControl"]],
    template: function PlayerScoreItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player == null ? null : ctx.player.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player == null ? null : ctx.player.score);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.scoreControl);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
    styles: [".uc-score-input[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.uc-table-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.uc-table-cell[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: left;\n  font-size: large;\n  padding: 0.5rem;\n}\n\n.uc-score-counter[_ngcontent-%COMP%] {\n  font-size: large;\n  width: 80px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9wbGF5ZXItc2NvcmUtaXRlbS9wbGF5ZXItc2NvcmUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi51Yy1zY29yZS1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi51Yy10YWJsZS1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnVjLXRhYmxlLWNlbGwge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi51Yy1zY29yZS1jb3VudGVyIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3417:
/*!*********************************************!*\
  !*** ./src/app/shared/data-save.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSaveService: () => (/* binding */ DataSaveService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class DataSaveService {
  set players(players) {
    localStorage.setItem('players', JSON.stringify(players));
  }
  get players() {
    let localStoragePlayers = localStorage.getItem('players');
    if (localStoragePlayers !== null) {
      return JSON.parse(localStoragePlayers);
    }
    return [];
  }
  set maxScore(maxScore) {
    localStorage.setItem('maxScore', maxScore.toString());
  }
  get maxScore() {
    let localStorageMaxScore = localStorage.getItem('maxScore');
    if (localStorageMaxScore !== null) {
      return +localStorageMaxScore;
    }
    return 0;
  }
  set halvePointsActivated(halvePointsActivated) {
    localStorage.setItem('halvePointsActivated', halvePointsActivated.toString());
  }
  get halvePointsActivated() {
    let halvePointsActivated = localStorage.getItem('halvePointsActivated');
    if (halvePointsActivated !== null) {
      return halvePointsActivated === 'true';
    }
    return false;
  }
  constructor() {}
  static #_ = this.ɵfac = function DataSaveService_Factory(t) {
    return new (t || DataSaveService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DataSaveService,
    factory: DataSaveService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map