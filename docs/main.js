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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
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
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _main_main_module__WEBPACK_IMPORTED_MODULE_2__.MainModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _main_main_module__WEBPACK_IMPORTED_MODULE_2__.MainModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _statistics_dialog_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics-dialog/statistics-dialog.component */ 6039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_shared_data_save_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data-save.service */ 3417);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);








const _c0 = function (a0) {
  return {
    "uc-current-shuffler-cell": a0
  };
};
function GamePageComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r0.shufflePlayer === player_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", player_r4, " ");
  }
}
const _c1 = function (a0) {
  return {
    "uc-winner-cell": a0
  };
};
function GamePageComponent_tr_18_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r8 = ctx.$implicit;
    const round_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r7.scores[player_r8][round_r6].won));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r7.scores[player_r8][round_r6].sumScore, " ");
  }
}
function GamePageComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GamePageComponent_tr_18_td_1_Template, 2, 4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.players);
  }
}
function GamePageComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r2.getPlayerControl(player_r10));
  }
}
function GamePageComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GamePageComponent_div_21_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.addScores());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Save\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c2 = function () {
  return [];
};
class GamePageComponent {
  constructor(dataSaveService, dialog) {
    this.dataSaveService = dataSaveService;
    this.dialog = dialog;
    this.isFinished = false;
    this.halvePointsActivated = false;
    this.scores = {};
    this.players = this.dataSaveService.players;
    this.maxScore = this.dataSaveService.maxScore;
    this.halvePointsActivated = this.dataSaveService.halvePointsActivated;
    this.scores = this.dataSaveService.scores;
    this.formGroup = this.createFormGroup();
    this.changeShufflePlayerTurn();
  }
  addScores() {
    if (!this.thereIsOneWinner()) {
      return;
    }
    this.players?.forEach(player => {
      this.scores[player].push({
        scoreCurrentRound: this.getPlayerControl(player).value,
        sumScore: this.getPlayerControl(player).value + this.getCurrentScoreOfPlayer(player),
        won: this.getPlayerControl(player).value === null
      });
      if (this.halvePointsActivated && this.getCurrentScoreOfPlayer(player) % 100 === 0) {
        this.scores[player][this.scores[player].length - 1].sumScore /= 2;
      }
      this.getPlayerControl(player).setValue(null);
    });
    this.dataSaveService.scores = this.scores;
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
    return this.scores[player][this.scores[player].length - 1].sumScore;
  }
  getPlayerControl(player) {
    return this.formGroup.controls[player];
  }
  changeShufflePlayerTurn() {
    this.shufflePlayer = this.players ? this.players[(this.currentRound - 1) % this.players.length] : '';
  }
  createFormGroup() {
    const group = {};
    this.players?.forEach(player => {
      group[player] = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null);
    });
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup(group);
  }
  thereIsOneWinner() {
    let winners = 0;
    this.players?.forEach(player => {
      if (this.getPlayerControl(player).value === null) winners++;
    });
    return winners === 1;
  }
  editMaxScore() {}
  openStatistics() {
    const dialogRef = this.dialog.open(_statistics_dialog_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_0__.StatisticsDialogComponent, {
      data: {
        players: this.players,
        scores: this.scores,
        rounds: this.currentRound
      },
      maxWidth: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  get currentRound() {
    if (this.scores === null || this.players === null) return 0;
    return this.scores[this.players[0]].length;
  }
  undoLastScores() {
    if (this.currentRound < 2) return;
    this.players?.forEach(player => {
      this.getPlayerControl(player).setValue(this.scores[player].pop()?.scoreCurrentRound);
    });
  }
  static #_ = this.ɵfac = function GamePageComponent_Factory(t) {
    return new (t || GamePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_data_save_service__WEBPACK_IMPORTED_MODULE_1__.DataSaveService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: GamePageComponent,
    selectors: [["uc-game-page"]],
    decls: 22,
    vars: 6,
    consts: [[1, "uc-info-container"], [1, "uc-score-info"], [1, "uc-score"], [1, "uc-edit-button", 3, "click"], [1, "uc-info-button", 3, "click"], [1, "uc-table-header-row"], [3, "ngClass", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["class", "uc-default-button", 3, "click", 4, "ngIf"], [3, "ngClass"], ["type", "number", 1, "uc-score-counter", 3, "formControl"], [1, "uc-default-button", 3, "click"]],
    template: function GamePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GamePageComponent_Template_div_click_4_listener() {
          return ctx.editMaxScore();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GamePageComponent_Template_div_click_7_listener() {
          return ctx.undoLastScores();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GamePageComponent_Template_div_click_10_listener() {
          return ctx.openStatistics();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "table")(14, "thead")(15, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, GamePageComponent_th_16_Template, 2, 4, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, GamePageComponent_tr_18_Template, 2, 1, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, GamePageComponent_td_20_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, GamePageComponent_div_21_Template, 2, 0, "div", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Max Score: ", ctx.maxScore, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c2).constructor(ctx.currentRound));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isFinished);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
    styles: [".uc-table-cell[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: left;\n  font-size: large;\n  padding: 0.5rem;\n}\n\n.uc-score-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.uc-score[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.uc-info-container[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 0;\n}\n\n.uc-edit-button[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.uc-theader[_ngcontent-%COMP%] {\n  display: flex;\n  font-weight: bold;\n}\n\n.uc-winner-cell[_ngcontent-%COMP%] {\n  color: #379711;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.uc-current-shuffler-cell[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 20px;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ecd407;\n  padding: 8px;\n  text-align: end;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 40px;\n  font-weight: bold;\n  text-align: end;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: black;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(n) {\n  background-color: #d72600;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: #ecd407;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3n) {\n  background-color: #379711;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4n) {\n  background-color: #0956bf;\n}\n\ndiv[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\ndiv[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9nYW1lLXBhZ2UvZ2FtZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGNDbkNXO0VEb0NYLGlCQUFBO0VBQ0EsMEJBQUE7QUFERjs7QUFJQTtFQUNFLDBCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7O0VBRUUseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQURKO0FBR0k7O0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUFOO0FBS0k7RUFDRSxZQUFBO0FBSE47QUFNSTtFQUNFLHlCQ3pFSztBRHFFWDtBQU1JO0VBQ0UseUJDM0VRO0FEdUVkO0FBTUk7RUFDRSx5QkM3RU87QUR5RWI7QUFNSTtFQUNFLHlCQy9FTTtBRDJFWjs7QUFVRTtFQUNFLGtCQUFBO0FBUEo7QUFVRTs7O0VBR0Usa0JBQUE7QUFSSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsaW5ncy5zY3NzXCI7XHJcblxyXG4udWMtdGFibGUtY2VsbCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi51Yy1zY29yZS1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udWMtc2NvcmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udWMtaW5mby1jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4udWMtZWRpdC1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4udWMtdGhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnVjLXdpbm5lci1jZWxsIHtcclxuICBjb2xvcjogJGJhc2UtZ3JlZW47XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi51Yy1jdXJyZW50LXNodWZmbGVyLWNlbGwge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICB0aCxcclxuICB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYmFzZS15ZWxsb3c7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudWMtdGFibGUtaGVhZGVyLXJvdyB7XHJcbiAgICB0aCB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICA6bnRoLWNoaWxkKG4pIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtcmVkO1xyXG4gICAgfVxyXG4gICAgOm50aC1jaGlsZCgybikge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS15ZWxsb3c7XHJcbiAgICB9XHJcbiAgICA6bnRoLWNoaWxkKDNuKSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWdyZWVuO1xyXG4gICAgfVxyXG4gICAgOm50aC1jaGlsZCg0bikge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1ibHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZGl2IHtcclxuICBsYWJlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QsXHJcbiAgaW5wdXQsXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuIiwiJGJhc2UtcmVkOiAjZDcyNjAwOyAvLyByZWRcclxuJGJhc2UteWVsbG93OiAjZWNkNDA3OyAvLyB5ZWxsb3dcclxuJGJhc2UtZ3JlZW46ICMzNzk3MTE7IC8vIGdyZWVuXHJcbiRiYXNlLWJsdWU6ICMwOTU2YmY7IC8vIGJsdWVcclxuXHJcbiRtYWluLWJhY2tncm91bmQ6ICMxMjEyMTI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6039:
/*!*********************************************************************************!*\
  !*** ./src/app/main/game-page/statistics-dialog/statistics-dialog.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatisticId: () => (/* binding */ StatisticId),
/* harmony export */   StatisticsDialogComponent: () => (/* binding */ StatisticsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);




function StatisticsDialogComponent_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r2);
  }
}
function StatisticsDialogComponent_tr_9_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r5 = ctx.$implicit;
    const statisticType_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", statisticType_r3.calcFunction(player_r5), " ");
  }
}
function StatisticsDialogComponent_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StatisticsDialogComponent_tr_9_td_3_Template, 2, 1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const statisticType_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](statisticType_r3.id.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.data.players);
  }
}
var StatisticId;
(function (StatisticId) {
  StatisticId[StatisticId["AVG_SCORE"] = 0] = "AVG_SCORE";
  StatisticId[StatisticId["WINS"] = 1] = "WINS";
  StatisticId[StatisticId["WORST_SCORE"] = 2] = "WORST_SCORE";
  StatisticId[StatisticId["WINSTREAK"] = 3] = "WINSTREAK";
})(StatisticId || (StatisticId = {}));
class StatisticsDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onNoClick() {
    this.dialogRef.close();
  }
  get statisticTypes() {
    return [{
      id: {
        id: StatisticId.WINS,
        name: 'Wins'
      },
      calcFunction: player => {
        let count = 0;
        this.data.scores[player].forEach(score => {
          if (score.won) {
            count++;
          }
        });
        return count;
      }
    }, {
      id: {
        id: StatisticId.AVG_SCORE,
        name: 'AVG. Score'
      },
      calcFunction: player => {
        return (this.data.scores[player][this.data.rounds - 1].sumScore / (this.data.rounds - 1)).toFixed(2);
      }
    }, {
      id: {
        id: StatisticId.WORST_SCORE,
        name: 'Worst score'
      },
      calcFunction: player => {
        let worstScore = -Infinity;
        this.data.scores[player].forEach(score => {
          if (score.scoreCurrentRound > worstScore) {
            worstScore = score.scoreCurrentRound;
          }
        });
        return worstScore;
      }
    }, {
      id: {
        id: StatisticId.WINSTREAK,
        name: 'Win streak'
      },
      calcFunction: player => {
        let winStreak = 0;
        let currentStreak = 0;
        for (let i = 1; i < this.data.scores[player].length; i++) {
          if (this.data.scores[player][i].won) {
            currentStreak++;
            if (currentStreak > winStreak) {
              winStreak = currentStreak;
            }
          } else {
            currentStreak = 0;
          }
        }
        return winStreak;
      }
    }];
  }
  static #_ = this.ɵfac = function StatisticsDialogComponent_Factory(t) {
    return new (t || StatisticsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StatisticsDialogComponent,
    selectors: [["uc-statistics-dialog"]],
    decls: 10,
    vars: 2,
    consts: [[1, "uc-dialog-container"], [1, "uc-table-header-row"], [4, "ngFor", "ngForOf"]],
    template: function StatisticsDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table")(4, "thead")(5, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StatisticsDialogComponent_th_7_Template, 2, 1, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StatisticsDialogComponent_tr_9_Template, 4, 2, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statisticTypes);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: [".uc-dialog-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background-color: #121212;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ecd407;\n  padding: 8px;\n  text-align: end;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 40px;\n  font-weight: bold;\n  text-align: end;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: black;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(n) {\n  background-color: #0956bf;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: #d72600;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3n) {\n  background-color: #ecd407;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4n) {\n  background-color: #379711;\n}\ntable[_ngcontent-%COMP%]   .uc-table-header-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  background-color: #111111;\n}\n\ndiv[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\ndiv[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9nYW1lLXBhZ2Uvc3RhdGlzdGljcy1kaWFsb2cvc3RhdGlzdGljcy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSx5QkNDZ0I7QURGbEI7O0FBSUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFERjtBQUdFOztFQUVFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUdJOztFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBTjtBQUtJO0VBQ0UsWUFBQTtBQUhOO0FBTUk7RUFDRSx5QkM5Qk07QUQwQlo7QUFNSTtFQUNFLHlCQ3BDSztBRGdDWDtBQU1JO0VBQ0UseUJDdENRO0FEa0NkO0FBTUk7RUFDRSx5QkN4Q087QURvQ2I7QUFNSTtFQUNFLHlCQUFBO0FBSk47O0FBVUU7RUFDRSxrQkFBQTtBQVBKO0FBVUU7OztFQUdFLGtCQUFBO0FBUkoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGluZ3Muc2Nzc1wiO1xyXG5cclxuLnVjLWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYmFja2dyb3VuZDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblxyXG4gIHRoLFxyXG4gIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRiYXNlLXllbGxvdztcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51Yy10YWJsZS1oZWFkZXItcm93IHtcclxuICAgIHRoIHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIDpudGgtY2hpbGQobikge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1ibHVlO1xyXG4gICAgfVxyXG4gICAgOm50aC1jaGlsZCgybikge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1yZWQ7XHJcbiAgICB9XHJcbiAgICA6bnRoLWNoaWxkKDNuKSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLXllbGxvdztcclxuICAgIH1cclxuICAgIDpudGgtY2hpbGQoNG4pIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtZ3JlZW47XHJcbiAgICB9XHJcbiAgICA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZGl2IHtcclxuICBsYWJlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QsXHJcbiAgaW5wdXQsXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuIiwiJGJhc2UtcmVkOiAjZDcyNjAwOyAvLyByZWRcclxuJGJhc2UteWVsbG93OiAjZWNkNDA3OyAvLyB5ZWxsb3dcclxuJGJhc2UtZ3JlZW46ICMzNzk3MTE7IC8vIGdyZWVuXHJcbiRiYXNlLWJsdWU6ICMwOTU2YmY7IC8vIGJsdWVcclxuXHJcbiRtYWluLWJhY2tncm91bmQ6ICMxMjEyMTI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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






const _c0 = ["addPlayerInput"];
function MainLandingComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Add players below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MainLandingComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", player_r4, " ");
  }
}
function MainLandingComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLandingComponent_div_25_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.resumeGame());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Resume Game\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class MainLandingComponent {
  constructor(dataSaveService, appRouter) {
    this.dataSaveService = dataSaveService;
    this.appRouter = appRouter;
    this.selectedPlayers = [];
    this.addPlayerControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
    this.scoreControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(400);
    this.halveControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(true);
  }
  ngOnInit() {}
  addPlayer() {
    if (this.addPlayerControl.value === '' || this.addPlayerControl.value === null) {
      return;
    }
    this.selectedPlayers.push(this.addPlayerControl.value);
    this.addPlayerControl.reset();
    this.addPlayerInput?.nativeElement.focus();
  }
  startGame() {
    if (this.selectedPlayers.length === 0) {
      return;
    }
    this.dataSaveService.players = this.selectedPlayers;
    this.dataSaveService.maxScore = this.scoreControl.value ?? 400;
    this.dataSaveService.halvePointsActivated = this.halveControl.value ?? false;
    this.dataSaveService.scores = this.createScores();
    this.appRouter.navigate(['/game']);
  }
  createScores() {
    let scores = {};
    this.selectedPlayers?.forEach(player => {
      if (!scores[player]) {
        scores[player] = [{
          scoreCurrentRound: 0,
          sumScore: 0,
          won: false
        }];
      }
    });
    return scores;
  }
  resumeGame() {
    this.appRouter.navigate(['/game']);
  }
  get recentGameExists() {
    if (this.dataSaveService.players && this.dataSaveService.players.length > 0) {
      return true;
    } else return false;
  }
  static #_ = this.ɵfac = function MainLandingComponent_Factory(t) {
    return new (t || MainLandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_data_save_service__WEBPACK_IMPORTED_MODULE_0__.DataSaveService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MainLandingComponent,
    selectors: [["uc-main-landing"]],
    viewQuery: function MainLandingComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addPlayerInput = _t.first);
      }
    },
    decls: 26,
    vars: 7,
    consts: [[1, "uc-rules"], [1, "uc-rules-form"], ["type", "checkbox", 3, "formControl"], ["type", "number", "placeholder", "Max. Score", 3, "formControl"], [1, "uc-players-table"], ["class", "uc-player", 4, "ngIf"], [1, "uc-players"], ["class", "uc-player", 4, "ngFor", "ngForOf"], [1, "uc-add-player-form", "uc-space-bottom"], ["type", "text", "placeholder", "Name", 3, "formControl"], ["addPlayerInput", ""], [1, "uc-default-button", 3, "click"], [1, "uc-accent-button", "uc-space-bottom", 3, "click"], ["class", "uc-resume-game-form uc-accent-green-button uc-space-bottom", 3, "click", 4, "ngIf"], [1, "uc-player"], [1, "uc-resume-game-form", "uc-accent-green-button", "uc-space-bottom", 3, "click"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLandingComponent_Template_div_click_21_listener() {
          return ctx.addPlayer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Add player");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLandingComponent_Template_div_click_23_listener() {
          return ctx.startGame();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Start Game\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MainLandingComponent_div_25_Template, 2, 0, "div", 13);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.recentGameExists);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective],
    styles: [".uc-rules[_ngcontent-%COMP%] {\n  border: 2px solid #ecd407;\n  border-radius: 8px;\n  padding: 10px;\n  margin-bottom: 1rem;\n}\n\n.uc-rules-form[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.uc-add-player-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: calc(100% - 10px);\n  margin-bottom: 1rem;\n}\n\n.uc-players-table[_ngcontent-%COMP%] {\n  border: 2px solid #ecd407;\n  border-radius: 8px;\n  padding: 10px;\n  margin-bottom: 1rem;\n}\n\n.uc-players[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(n) {\n  color: #d72600;\n}\n.uc-players[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2n) {\n  color: #ecd407;\n}\n.uc-players[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3n) {\n  color: #379711;\n}\n.uc-players[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4n) {\n  color: #0956bf;\n}\n\n.uc-player[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: 30px;\n  padding: 5px;\n}\n\nh4[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9tYWluLWxhbmRpbmcvbWFpbi1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURGOztBQUtFO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU9FO0VBQ0UsY0MvQk87QUQyQlg7QUFNRTtFQUNFLGNDakNVO0FENkJkO0FBTUU7RUFDRSxjQ25DUztBRCtCYjtBQU1FO0VBQ0UsY0NyQ1E7QURpQ1o7O0FBUUE7RUFDRSxjQUFBO0FBTEY7O0FBUUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQUxGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxpbmdzLnNjc3NcIjtcclxuXHJcbi51Yy1ydWxlcyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGJhc2UteWVsbG93O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi51Yy1ydWxlcy1mb3JtICoge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi51Yy1hZGQtcGxheWVyLWZvcm0ge1xyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4udWMtcGxheWVycy10YWJsZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGJhc2UteWVsbG93O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi51Yy1wbGF5ZXJzIHtcclxuICA6bnRoLWNoaWxkKG4pIHtcclxuICAgIGNvbG9yOiAkYmFzZS1yZWQ7XHJcbiAgfVxyXG4gIDpudGgtY2hpbGQoMm4pIHtcclxuICAgIGNvbG9yOiAkYmFzZS15ZWxsb3c7XHJcbiAgfVxyXG4gIDpudGgtY2hpbGQoM24pIHtcclxuICAgIGNvbG9yOiAkYmFzZS1ncmVlbjtcclxuICB9XHJcbiAgOm50aC1jaGlsZCg0bikge1xyXG4gICAgY29sb3I6ICRiYXNlLWJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG4udWMtcGxheWVyIHtcclxuICBwYWRkaW5nOiA1cHggMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmg0IHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbiIsIiRiYXNlLXJlZDogI2Q3MjYwMDsgLy8gcmVkXHJcbiRiYXNlLXllbGxvdzogI2VjZDQwNzsgLy8geWVsbG93XHJcbiRiYXNlLWdyZWVuOiAjMzc5NzExOyAvLyBncmVlblxyXG4kYmFzZS1ibHVlOiAjMDk1NmJmOyAvLyBibHVlXHJcblxyXG4kbWFpbi1iYWNrZ3JvdW5kOiAjMTIxMjEyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _main_frame_main_frame_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-frame/main-frame.component */ 171);
/* harmony import */ var _main_landing_main_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-landing/main-landing.component */ 3970);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-routing.module */ 3966);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-header/main-header.component */ 4769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _game_page_game_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-page/game-page.component */ 7950);
/* harmony import */ var _player_score_item_player_score_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-score-item/player-score-item.component */ 3841);
/* harmony import */ var _game_page_statistics_dialog_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-page/statistics-dialog/statistics-dialog.component */ 6039);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);













class MainModule {
  static #_ = this.ɵfac = function MainModule_Factory(t) {
    return new (t || MainModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: MainModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MainModule, {
    declarations: [_main_frame_main_frame_component__WEBPACK_IMPORTED_MODULE_0__.MainFrameComponent, _main_landing_main_landing_component__WEBPACK_IMPORTED_MODULE_1__.MainLandingComponent, _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_3__.MainHeaderComponent, _game_page_game_page_component__WEBPACK_IMPORTED_MODULE_4__.GamePageComponent, _player_score_item_player_score_item_component__WEBPACK_IMPORTED_MODULE_5__.PlayerScoreItemComponent, _game_page_statistics_dialog_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_6__.StatisticsDialogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule],
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
  set scores(scores) {
    if (scores == null) return;
    localStorage.setItem('scores', JSON.stringify(scores));
  }
  get scores() {
    let scores = localStorage.getItem('scores');
    if (scores != null) {
      return JSON.parse(scores);
    }
    return {};
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