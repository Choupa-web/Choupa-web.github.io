(self["webpackChunkgarminPerformances2"] = self["webpackChunkgarminPerformances2"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 68263);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-angular */ 3863);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _components_activities_activity_add_activity_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/activities/activity-add/activity-add.component */ 53522);
/* harmony import */ var _components_activities_activities_list_activities_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/activities/activities-list/activities-list.component */ 51338);
/* harmony import */ var _components_activities_activity_edit_activity_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/activities/activity-edit/activity-edit.component */ 156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__.AuthGuard] },
    { path: 'activities', component: _components_activities_activities_list_activities_list_component__WEBPACK_IMPORTED_MODULE_3__.ActivitiesListComponent, canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__.AuthGuard] },
    { path: 'activity/add/:name', component: _components_activities_activity_add_activity_add_component__WEBPACK_IMPORTED_MODULE_2__.ActivityAddComponent, canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__.AuthGuard] },
    { path: 'activity/edit/:id', component: _components_activities_activity_edit_activity_edit_component__WEBPACK_IMPORTED_MODULE_4__.ActivityEditComponent, canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__.AuthGuard] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _models_responsive_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/responsive.model */ 77445);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ 39910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/general.service */ 21864);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ 55434);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ 13338);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shared/header/header.component */ 59546);
/* harmony import */ var _components_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shared/sidebar/sidebar.component */ 93206);
/* harmony import */ var _components_shared_aside_aside_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shared/aside/aside.component */ 89857);















const _c0 = ["sidenav"];
function AppComponent_mat_progress_bar_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-progress-bar", 9);
} }
const _c1 = function (a0, a1) { return { "container-big-screen": a0, "container-small-screen": a1 }; };
class AppComponent {
    constructor(generalService, breakpointObserver) {
        this.generalService = generalService;
        this.breakpointObserver = breakpointObserver;
        this.title = 'garminPerformances2';
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.displayNameMap = new Map([
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.Breakpoints.XSmall, 'XSmall'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.Breakpoints.Small, 'Small'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.Breakpoints.Medium, 'Medium'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.Breakpoints.Large, 'Large'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.Breakpoints.XLarge, 'XLarge'],
        ]);
        this.openCloseMenu = () => {
            this.menuOpened = !this.menuOpened;
            this.sidenav.toggle(this.menuOpened);
        };
        this.menuOpened = false;
        this.loading = false;
    }
    ngOnInit() {
        this.generalService.activityLoadingStatuschange.subscribe({
            next: (loadingStatus) => {
                this.loading = loadingStatus;
            }
        });
        this.screenDefinition = new _models_responsive_model__WEBPACK_IMPORTED_MODULE_0__.ResponsiveUi(this.breakpointObserver);
        this.screenDefinition.getScreensize().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroyed)).subscribe(result => {
            var _a;
            for (const query of Object.keys(result.breakpoints)) {
                if (result.breakpoints[query]) {
                    const currentScreenSize = (_a = this.displayNameMap.get(query)) !== null && _a !== void 0 ? _a : 'Unknown';
                    this.screenIsBig = this.screenDefinition.isScreenIsBig(currentScreenSize);
                }
            }
        });
    }
    ngAfterViewInit() {
        this.sidenav.toggle(false);
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_1__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.BreakpointObserver)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 12, vars: 7, consts: [[3, "menuOpened", "openCloseMenu"], [3, "ngClass"], ["mode", "side", 1, "left-sidenav", 3, "opened"], ["sidenav", ""], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "30px", 1, "main"], ["mode", "indeterminate", 4, "ngIf"], ["fxLayout", "row", "fxLayout.lt-lg", "column", "fxLayoutGap.lt-lg", "50px"], ["fxFlex", "80%", "fxFlex.lt-lg", "100"], ["fxFlex", "20%"], ["mode", "indeterminate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("openCloseMenu", function AppComponent_Template_app_header_openCloseMenu_0_listener() { return ctx.openCloseMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-sidenav-container", 1)(2, "mat-sidenav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-sidenav-content", 4)(6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AppComponent_mat_progress_bar_7_Template, 1, 0, "mat-progress-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "app-aside", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("menuOpened", ctx.menuOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c1, ctx.screenIsBig, !ctx.screenIsBig));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("opened", ctx.menuOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutGapDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavContent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBar, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__.DefaultClassDirective, _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _components_shared_aside_aside_component__WEBPACK_IMPORTED_MODULE_4__.AsideComponent], styles: [".container-big-screen[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: white;\n  z-index: 0;\n}\n\n.container-small-screen[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 120px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: white;\n  z-index: 0;\n}\n\n.btnCollapseMenu[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 5px;\n  z-index: 1000;\n}\n\n.mat-drawer-side[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n  border-right: none;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 10px 40px;\n  background-color: #fff;\n}\n\n.left-sidenav[_ngcontent-%COMP%] {\n  background-color: #004c6d !important;\n}\n\n.mat-progress-bar[_ngcontent-%COMP%] {\n  fill: #004c6d;\n}\n\n@media only screen and (max-width: 480px) {\n  .main[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n  }\n}\n\n@media only screen and (min-width: 481px) {\n  .main[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n  }\n}\n\n\n\n@media only screen and (min-width: 768px) {\n  .main[_ngcontent-%COMP%] {\n    padding: 0 5px 0 30px;\n  }\n}\n\n\n\n@media only screen and (min-width: 1024px) {\n  .main[_ngcontent-%COMP%] {\n    padding: 10px 5px 10px 30px;\n  }\n}\n\n\n\n@media only screen and (min-width: 1224px) {\n  .main[_ngcontent-%COMP%] {\n    padding: 10px 5px 10px 30px;\n  }\n}\n\n\n\n@media only screen and (min-width: 1824px) {\n  .main[_ngcontent-%COMP%] {\n    padding: 10px 5px 10px 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUxGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUpGOztBQU1BO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQUZGOztBQUlBO0VBQ0Usb0NBQUE7QUFERjs7QUFHQTtFQUNFLGFBM0NRO0FBMkNWOztBQUdBO0VBQ0U7SUFDRSxrQkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLGtCQUFBO0VBREY7QUFDRjs7QUFJQSx3Q0FBQTs7QUFDQTtFQUNFO0lBQ0UscUJBQUE7RUFGRjtBQUNGOztBQUtBLHVDQUFBOztBQUNBO0VBQ0U7SUFDRSwyQkFBQTtFQUhGO0FBQ0Y7O0FBTUEscUNBQUE7O0FBQ0E7RUFDRTtJQUNFLDJCQUFBO0VBSkY7QUFDRjs7QUFPQSw4QkFBQTs7QUFDQTtFQUNFO0lBQ0UsMkJBQUE7RUFMRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5OiAjMDA0YzZkO1xuJHNlY29uZGFyeTogIzNmNTc5MDtcbiRsaW5rczogI2ZmNzg0YztcbiR0ZXh0LWNvbG9yOiB3aGl0ZTtcbiRsaW5rLWFjdGl2ZTogI2ZmYTYwMDtcblxuLmNvbnRhaW5lci1iaWctc2NyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAwO1xufVxuLmNvbnRhaW5lci1zbWFsbC1zY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTIwcHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAwO1xufVxuXG4uYnRuQ29sbGFwc2VNZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6MDtcbiAgbGVmdDogNXB4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuLm1hdC1kcmF3ZXItc2lkZSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodCA6IG5vbmU7XG59XG4ubWFpbiB7XG4gIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5sZWZ0LXNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xufVxuLm1hdC1wcm9ncmVzcy1iYXIge1xuICBmaWxsOiAkcHJpbWFyeTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNDgwcHgpIHtcbiAgLm1haW4ge1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA0ODFweCkge1xuICAubWFpbiB7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICB9XG59XG5cbi8qIFNtYXJ0cGhvbmVzIChsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA3NjhweCkge1xuICAubWFpbiB7XG4gICAgcGFkZGluZzogMCA1cHggMCAzMHB4O1xuICB9XG59XG5cbi8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCkgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDEwMjRweCkge1xuICAubWFpbiB7XG4gICAgcGFkZGluZzogMTBweCA1cHggMTBweCAzMHB4O1xuICB9XG59XG5cbi8qIERlc2t0b3BzIGFuZCBsYXB0b3BzIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiAxMjI0cHgpIHtcbiAgLm1haW4ge1xuICAgIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMzBweDtcbiAgfVxufVxuXG4vKiBMYXJnZSBzY3JlZW5zIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiAxODI0cHgpIHtcbiAgLm1haW4ge1xuICAgIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNDBweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shared/header/header.component */ 59546);
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ 56562);
/* harmony import */ var _components_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shared/sidebar/sidebar.component */ 93206);
/* harmony import */ var _components_shared_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/aside/aside.component */ 89857);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ 68263);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @auth0/auth0-angular */ 3863);
/* harmony import */ var _components_shared_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/login-button/login-button.component */ 82993);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _components_shared_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shared/logout-button/logout-button.component */ 37966);
/* harmony import */ var _components_shared_signup_button_signup_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared/signup-button/signup-button.component */ 78083);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 43672);
/* harmony import */ var _components_auth_nav_auth_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/auth-nav/auth-nav.component */ 93863);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/flex-layout */ 55434);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/flex-layout */ 13338);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _components_activities_activity_add_activity_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/activities/activity-add/activity-add.component */ 53522);
/* harmony import */ var _components_activities_activities_list_activities_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/activities/activities-list/activities-list.component */ 51338);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _directives_replace_comma_bydot_in_ctrl_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/replace-comma-bydot-in-ctrl.directive */ 34889);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/locales/fr */ 58384);
/* harmony import */ var _components_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shared/alert/alert.component */ 58192);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _components_activities_activity_edit_activity_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/activities/activity-edit/activity-edit.component */ 156);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/fire/compat */ 11879);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var _components_activities_activities_dynamic_form_activities_dynamic_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/activities/activities-dynamic-form/activities-dynamic-form.component */ 99847);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/cdk/layout */ 39910);
/* harmony import */ var _components_best_average_speed_best_average_speed_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/best-average-speed/best-average-speed.component */ 95720);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ng2-charts */ 44195);
/* harmony import */ var _components_dashboard_activities_count_by_activity_name_activities_count_by_activity_name_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dashboard/activities-count-by-activity-name/activities-count-by-activity-name.component */ 20697);
/* harmony import */ var _components_dashboard_dashboard_container_dashboard_container_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/dashboard/dashboard-container/dashboard-container.component */ 49289);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/grid-list */ 63346);
/* harmony import */ var _components_dashboard_average_speed_evolution_average_speed_evolution_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/dashboard/average-speed-evolution/average-speed-evolution.component */ 38610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 3184);





























































(0,_angular_common__WEBPACK_IMPORTED_MODULE_23__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_24__["default"], 'fr');
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MAT_DATE_LOCALE, useValue: 'fr-FR' },
        {
            provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
            },
        },
        _angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule,
        _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_30__.AuthModule.forRoot(Object.assign({}, _environments_environment__WEBPACK_IMPORTED_MODULE_12__.environment.auth)),
        _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_33__.MatListModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__.FontAwesomeModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_36__.MatCardModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__.MatRadioModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_38__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_40__.FormsModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_41__.DragDropModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_42__.HttpClientModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_43__.MatToolbarModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_44__.MatBottomSheetModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_40__.ReactiveFormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_45__.FlexModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_46__.MatSidenavModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_47__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_48__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatNativeDateModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_49__.MatProgressBarModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBarModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_50__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_51__.MatSortModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_52__.MatDialogModule,
        _angular_fire_compat__WEBPACK_IMPORTED_MODULE_53__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__.environment.firebase),
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_54__.AngularFirestoreModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_55__.MatMenuModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_56__.LayoutModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_57__.ExtendedModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_36__.MatCardModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_58__.NgChartsModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_59__.MatGridListModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _components_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.SidebarComponent,
        _components_shared_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__.AsideComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent,
        _components_shared_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_7__.LoginButtonComponent,
        _components_shared_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_8__.LogoutButtonComponent,
        _components_shared_signup_button_signup_button_component__WEBPACK_IMPORTED_MODULE_9__.SignupButtonComponent,
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__.DashboardComponent,
        _components_auth_nav_auth_nav_component__WEBPACK_IMPORTED_MODULE_11__.AuthNavComponent,
        _components_activities_activity_add_activity_add_component__WEBPACK_IMPORTED_MODULE_13__.ActivityAddComponent,
        _components_activities_activities_list_activities_list_component__WEBPACK_IMPORTED_MODULE_14__.ActivitiesListComponent,
        _directives_replace_comma_bydot_in_ctrl_directive__WEBPACK_IMPORTED_MODULE_15__.ReplaceCommaByDotInCtrlDirective,
        _components_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__.AlertComponent,
        _components_activities_activity_edit_activity_edit_component__WEBPACK_IMPORTED_MODULE_17__.ActivityEditComponent,
        _components_activities_activities_dynamic_form_activities_dynamic_form_component__WEBPACK_IMPORTED_MODULE_18__.ActivitiesDynamicFormComponent,
        _components_best_average_speed_best_average_speed_component__WEBPACK_IMPORTED_MODULE_19__.BestAverageSpeedComponent,
        _components_dashboard_activities_count_by_activity_name_activities_count_by_activity_name_component__WEBPACK_IMPORTED_MODULE_20__.ActivitiesCountByActivityNameComponent,
        _components_dashboard_dashboard_container_dashboard_container_component__WEBPACK_IMPORTED_MODULE_21__.DashboardContainerComponent,
        _components_dashboard_average_speed_evolution_average_speed_evolution_component__WEBPACK_IMPORTED_MODULE_22__.AverageSpeedEvolutionComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_30__.AuthModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_33__.MatListModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__.FontAwesomeModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_36__.MatCardModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__.MatRadioModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_38__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_40__.FormsModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_41__.DragDropModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_42__.HttpClientModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_43__.MatToolbarModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_44__.MatBottomSheetModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_40__.ReactiveFormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_45__.FlexModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_46__.MatSidenavModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_47__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_48__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatNativeDateModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_49__.MatProgressBarModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBarModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_50__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_51__.MatSortModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_52__.MatDialogModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_53__.AngularFireModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_54__.AngularFirestoreModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_55__.MatMenuModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_56__.LayoutModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_57__.ExtendedModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_36__.MatCardModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_58__.NgChartsModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_59__.MatGridListModule] }); })();


/***/ }),

/***/ 99847:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/activities/activities-dynamic-form/activities-dynamic-form.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitiesDynamicFormComponent": () => (/* binding */ ActivitiesDynamicFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../enums/forms.enum */ 77186);
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/forms.service */ 76311);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 55434);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _directives_replace_comma_bydot_in_ctrl_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../directives/replace-comma-bydot-in-ctrl.directive */ 34889);












function ActivitiesDynamicFormComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "ctrl-" + ctx_r1.activityIcon.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.activityIcon.value, " ");
} }
function ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 15)(2, "mat-datepicker-toggle", 16)(3, "mat-datepicker", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const control_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r15)("formControlName", control_r5.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r15);
} }
function ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_div_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](control_r5.controlUnit);
} }
function ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_div_5_span_2_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControlName", control_r5.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r5.controlUnit);
} }
function ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_div_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](control_r5.controlUnit);
} }
function ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_div_6_span_2_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControlName", control_r5.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r5.controlUnit);
} }
function ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](control_r5.controlUnit);
} }
function ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_div_7_span_2_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControlName", control_r5.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r5.controlUnit);
} }
function ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", control_r5.label, " manquante");
} }
function ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Erreur dans le format de votre saisie");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "La valeur renseign\u00E9e est trop grande");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "La valeur renseign\u00E9e est trop petite");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "mat-form-field", 12)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_div_4_Template, 5, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_div_5_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_div_6_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_div_7_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_mat_error_8_Template, 2, 1, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_mat_error_9_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_mat_error_10_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_mat_error_11_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const control_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", control_r5.controlType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "ctrl-" + control_r5.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](control_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "textboxdate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "textboxtime");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "textbox-decimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "textbox-nodecimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.globalForm.get(control_r5.controlName).hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.globalForm.get(control_r5.controlName).hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.globalForm.get(control_r5.controlName).hasError("max"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.globalForm.get(control_r5.controlName).hasError("min"));
} }
function ActivitiesDynamicFormComponent_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ActivitiesDynamicFormComponent_div_0_ng_container_6_div_1_Template, 12, 11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const control_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r5.controlType !== ctx_r2.GRAPHICAL);
} }
function ActivitiesDynamicFormComponent_div_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivitiesDynamicFormComponent_div_0_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.saveForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ajouter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.globalForm.invalid);
} }
function ActivitiesDynamicFormComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivitiesDynamicFormComponent_div_0_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r30.updateForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mettre \u00E0 jour");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r4.globalForm.invalid);
} }
function ActivitiesDynamicFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ActivitiesDynamicFormComponent_div_0_div_1_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ActivitiesDynamicFormComponent_div_0_ng_container_6_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ActivitiesDynamicFormComponent_div_0_button_8_Template, 2, 1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ActivitiesDynamicFormComponent_div_0_button_9_Template, 2, 1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivitiesDynamicFormComponent_div_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r32.cancelForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.globalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.activityIcon.controlType == ctx_r0.GRAPHICAL);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.title, " ", ctx_r0.activityIcon.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.controlsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.formAction == ctx_r0.ADD);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.formAction == ctx_r0.EDIT);
} }
class ActivitiesDynamicFormComponent {
    constructor(formsService, fb) {
        this.formsService = formsService;
        this.fb = fb;
        this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.GRAPHICAL = _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.GRAPHICAL;
        this.ADD = _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.FormActions.ADD;
        this.EDIT = _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.FormActions.EDIT;
        this.saveForm = () => {
            this.submitForm.emit({ action: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.FormActions.ADD, activityForm: this.globalForm });
        };
        this.updateForm = () => {
            this.submitForm.emit({ action: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.FormActions.EDIT, activityForm: this.globalForm });
        };
        this.cancelForm = () => {
            this.submitForm.emit({ action: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.FormActions.CANCEL });
        };
    }
    ngOnInit() {
        this.activityIcon = this.controlsList.filter(element => element.controlType === _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.GRAPHICAL)[0];
        this.title = this.formAction === _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.FormActions.ADD ? 'Entrez les informations de votre nouvelle activité' : 'Modification de l\'activité';
        this.globalForm = this.formsService.toFormGroup(this.controlsList);
    }
    ngOnChanges(_changes) {
        this.globalForm = this.formsService.toFormGroup(this.controlsList);
        this.activityIcon = this.controlsList.filter(element => element.controlType === _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.GRAPHICAL)[0];
    }
}
ActivitiesDynamicFormComponent.ɵfac = function ActivitiesDynamicFormComponent_Factory(t) { return new (t || ActivitiesDynamicFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_forms_service__WEBPACK_IMPORTED_MODULE_1__.FormsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
ActivitiesDynamicFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ActivitiesDynamicFormComponent, selectors: [["app-activities-dynamic-form"]], inputs: { controlsList: "controlsList", formAction: "formAction" }, outputs: { submitForm: "submitForm" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["id", "container", "fxLayout", "row", 3, "formGroup", 4, "ngIf"], ["id", "container", "fxLayout", "row", 3, "formGroup"], ["class", "left", "fxLayoutAlign", "center center", "fxFlex", "30", 3, "id", 4, "ngIf"], ["fxLayout", "column", 1, "right"], ["fxLayout", "row wrap", "fxLayoutGap", "20px", "fxLayoutAlign", "start"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start", "fxLayoutGap", "20px"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["fxLayoutAlign", "center center", "fxFlex", "30", 1, "left", 3, "id"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], ["appearance", "outline", 3, "id"], [4, "ngSwitchCase"], [4, "ngIf"], ["matInput", "", 3, "matDatepicker", "formControlName"], ["matSuffix", "", 3, "for"], ["picker", ""], ["type", "time", "matInput", "", 3, "formControlName"], ["class", "unitColor", "matSuffix", "", 4, "ngIf"], ["matSuffix", "", 1, "unitColor"], ["appReplaceCommaByDotInCtrl", "", "matInput", "", 3, "formControlName"], ["matInput", "", 3, "formControlName"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"]], template: function ActivitiesDynamicFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ActivitiesDynamicFormComponent_div_0_Template, 12, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.controlsList.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _directives_replace_comma_bydot_in_ctrl_directive__WEBPACK_IMPORTED_MODULE_2__.ReplaceCommaByDotInCtrlDirective], styles: [".unitColor[_ngcontent-%COMP%] {\n  color: #ff784c !important;\n}\n\n.left[_ngcontent-%COMP%] {\n  background-color: #004c6d;\n  color: #ff784c;\n  writing-mode: vertical-lr;\n  text-orientation: mixed;\n  min-width: 50px;\n  padding: 30px 10px;\n}\n\n#container[_ngcontent-%COMP%] {\n  border: 2px solid #004c6d;\n  border-radius: 20px;\n}\n\n#container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 20px;\n  border-top-left-radius: 20px;\n}\n\n#container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 20px;\n  border-top-right-radius: 20px;\n  padding: 20px 50px;\n}\n\n@media only screen and (max-width: 480px) {\n  #container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n\n@media only screen and (min-width: 481px) {\n  #container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n\n\n\n@media only screen and (min-width: 768px) {\n  #container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    font-size: 100px;\n  }\n}\n\n\n\n@media only screen and (min-width: 1024px) {\n  #container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    font-size: 100px;\n  }\n}\n\n\n\n@media only screen and (min-width: 1224px) {\n  #container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    font-size: 100px;\n  }\n}\n\n\n\n@media only screen and (min-width: 1824px) {\n  #container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    font-size: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXRpZXMtZHluYW1pYy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0kseUJBQUE7QUFKSjs7QUFPQTtFQUNFLHlCQVZRO0VBV1IsY0FWVTtFQVdWLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsbUJBakJPO0FBYVQ7O0FBS0U7RUFDRSwrQkFuQks7RUFvQkwsNEJBcEJLO0FBaUJUOztBQUtFO0VBQ0UsZ0NBdkJLO0VBd0JMLDZCQXhCSztFQXlCTCxrQkFBQTtBQUhKOztBQU9BO0VBRUk7SUFDRSxlQUFBO0VBTEo7QUFDRjs7QUFTQTtFQUVJO0lBQ0UsZUFBQTtFQVJKO0FBQ0Y7O0FBWUEsd0NBQUE7O0FBQ0E7RUFFSTtJQUNFLGdCQUFBO0VBWEo7QUFDRjs7QUFlQSx1Q0FBQTs7QUFDQTtFQUVJO0lBQ0UsZ0JBQUE7RUFkSjtBQUNGOztBQWtCQSxxQ0FBQTs7QUFDQTtFQUVJO0lBQ0UsZ0JBQUE7RUFqQko7QUFDRjs7QUFxQkEsOEJBQUE7O0FBQ0E7RUFFSTtJQUNFLGdCQUFBO0VBcEJKO0FBQ0YiLCJmaWxlIjoiYWN0aXZpdGllcy1keW5hbWljLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeTogIzAwNGM2ZDtcbiRzZWNvbmRhcnk6ICNmZjc4NGM7XG4kdGV4dC1jb2xvcjogd2hpdGU7XG4kcmFkaXVzOiAyMHB4O1xuXG4udW5pdENvbG9yIHtcbiAgICBjb2xvcjogJHNlY29uZGFyeSAhaW1wb3J0YW50O1xufVxuXG4ubGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICBjb2xvcjogJHNlY29uZGFyeTtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgdGV4dC1vcmllbnRhdGlvbjogbWl4ZWQ7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgcGFkZGluZzogMzBweCAxMHB4O1xufVxuXG4jY29udGFpbmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgJHByaW1hcnk7XG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gIC5sZWZ0IHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG4gIH1cbiAgLnJpZ2h0IHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNDgwcHgpIHtcbiAgI2NvbnRhaW5lciB7XG4gICAgLmxlZnQge1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA0ODFweCkge1xuICAjY29udGFpbmVyIHtcbiAgICAubGVmdCB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuICB9XG59XG5cbi8qIFNtYXJ0cGhvbmVzIChsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA3NjhweCkge1xuICAjY29udGFpbmVyIHtcbiAgICAubGVmdCB7XG4gICAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIH1cbiAgfVxufVxuXG4vKiBTbWFydHBob25lcyAocG9ydHJhaXQpIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiAxMDI0cHgpIHtcbiAgI2NvbnRhaW5lciB7XG4gICAgLmxlZnQge1xuICAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICB9XG4gIH1cbn1cblxuLyogRGVza3RvcHMgYW5kIGxhcHRvcHMgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDEyMjRweCkge1xuICAjY29udGFpbmVyIHtcbiAgICAubGVmdCB7XG4gICAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIH1cbiAgfVxufVxuXG4vKiBMYXJnZSBzY3JlZW5zIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiAxODI0cHgpIHtcbiAgI2NvbnRhaW5lciB7XG4gICAgLmxlZnQge1xuICAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 51338:
/*!************************************************************************************!*\
  !*** ./src/app/components/activities/activities-list/activities-list.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitiesListComponent": () => (/* binding */ ActivitiesListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../enums/activity.enum */ 35355);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ 39910);
/* harmony import */ var _models_responsive_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/responsive.model */ 77445);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _utils_Datas_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/Datas.utils */ 16730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_activities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/activities.service */ 29633);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/general.service */ 21864);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/auth0-angular */ 3863);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/notification.service */ 12013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout */ 55434);























function ActivitiesListComponent_table_4_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 19);
} }
function ActivitiesListComponent_table_4_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ActivitiesListComponent_table_4_td_3_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const element_r22 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.deleteActivity(element_r22.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function ActivitiesListComponent_table_4_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Activit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ActivitiesListComponent_table_4_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r25.activityName);
} }
function ActivitiesListComponent_table_4_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ActivitiesListComponent_table_4_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r26.activityDate);
} }
function ActivitiesListComponent_table_4_ng_container_10_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Dur\u00E9e ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ActivitiesListComponent_table_4_ng_container_10_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r29.duration);
} }
function ActivitiesListComponent_table_4_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ActivitiesListComponent_table_4_ng_container_10_th_1_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ActivitiesListComponent_table_4_ng_container_10_td_2_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function ActivitiesListComponent_table_4_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Distance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ActivitiesListComponent_table_4_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", element_r30.distance, " ", ctx_r10.DISTANCE, " ");
} }
function ActivitiesListComponent_table_4_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " A\u00E9robie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ActivitiesListComponent_table_4_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r31.aerobie);
} }
function ActivitiesListComponent_table_4_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ana\u00E9robique ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ActivitiesListComponent_table_4_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r32.anaerobique);
} }
function ActivitiesListComponent_table_4_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " FC moyenne ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ActivitiesListComponent_table_4_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r33.averageFc);
} }
function ActivitiesListComponent_table_4_ng_container_23_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " FC max ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ActivitiesListComponent_table_4_ng_container_23_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r36.maxFc);
} }
function ActivitiesListComponent_table_4_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ActivitiesListComponent_table_4_ng_container_23_th_1_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ActivitiesListComponent_table_4_ng_container_23_td_2_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function ActivitiesListComponent_table_4_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 19);
} }
function ActivitiesListComponent_table_4_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ActivitiesListComponent_table_4_td_26_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39); const element_r37 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r38.editActivity(element_r37.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function ActivitiesListComponent_table_4_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 26);
} }
function ActivitiesListComponent_table_4_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 27);
} }
function ActivitiesListComponent_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ActivitiesListComponent_table_4_th_2_Template, 1, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ActivitiesListComponent_table_4_td_3_Template, 4, 0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ActivitiesListComponent_table_4_th_5_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ActivitiesListComponent_table_4_td_6_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ActivitiesListComponent_table_4_th_8_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ActivitiesListComponent_table_4_td_9_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ActivitiesListComponent_table_4_ng_container_10_Template, 3, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ActivitiesListComponent_table_4_th_12_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ActivitiesListComponent_table_4_td_13_Template, 2, 2, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ActivitiesListComponent_table_4_th_15_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ActivitiesListComponent_table_4_td_16_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ActivitiesListComponent_table_4_th_18_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ActivitiesListComponent_table_4_td_19_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ActivitiesListComponent_table_4_th_21_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ActivitiesListComponent_table_4_td_22_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ActivitiesListComponent_table_4_ng_container_23_Template, 3, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](24, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ActivitiesListComponent_table_4_th_25_Template, 1, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ActivitiesListComponent_table_4_td_26_Template, 4, 0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ActivitiesListComponent_table_4_tr_27_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ActivitiesListComponent_table_4_tr_28_Template, 1, 0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.screenIsBig);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.screenIsBig);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumnsBigScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumnsBigScreen);
} }
function ActivitiesListComponent_table_5_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 19);
} }
function ActivitiesListComponent_table_5_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ActivitiesListComponent_table_5_td_3_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59); const element_r57 = restoredCtx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r58.deleteActivity(element_r57.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function ActivitiesListComponent_table_5_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Activit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ActivitiesListComponent_table_5_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r60.activityName);
} }
function ActivitiesListComponent_table_5_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ActivitiesListComponent_table_5_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r61.activityDate);
} }
function ActivitiesListComponent_table_5_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Distance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ActivitiesListComponent_table_5_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r62 = ctx.$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", element_r62.distance, " ", ctx_r48.DISTANCE, " ");
} }
function ActivitiesListComponent_table_5_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " A\u00E9robie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ActivitiesListComponent_table_5_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r63.aerobie);
} }
function ActivitiesListComponent_table_5_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " FC moyenne ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ActivitiesListComponent_table_5_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r64.averageFc);
} }
function ActivitiesListComponent_table_5_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 19);
} }
function ActivitiesListComponent_table_5_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ActivitiesListComponent_table_5_td_21_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r67); const element_r65 = restoredCtx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r66.editActivity(element_r65.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function ActivitiesListComponent_table_5_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 26);
} }
function ActivitiesListComponent_table_5_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 27);
} }
function ActivitiesListComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ActivitiesListComponent_table_5_th_2_Template, 1, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ActivitiesListComponent_table_5_td_3_Template, 4, 0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ActivitiesListComponent_table_5_th_5_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ActivitiesListComponent_table_5_td_6_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ActivitiesListComponent_table_5_th_8_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ActivitiesListComponent_table_5_td_9_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ActivitiesListComponent_table_5_th_11_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ActivitiesListComponent_table_5_td_12_Template, 2, 2, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](13, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ActivitiesListComponent_table_5_th_14_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ActivitiesListComponent_table_5_td_15_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](16, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ActivitiesListComponent_table_5_th_17_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ActivitiesListComponent_table_5_td_18_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](19, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ActivitiesListComponent_table_5_th_20_Template, 1, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ActivitiesListComponent_table_5_td_21_Template, 4, 0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ActivitiesListComponent_table_5_tr_22_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ActivitiesListComponent_table_5_tr_23_Template, 1, 0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumnsSmallScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumnsSmallScreen);
} }
const _c0 = function () { return [5, 10, 20]; };
class ActivitiesListComponent {
    constructor(activitiesService, generalService, auth, notificationService, route, datePipe, breakpointObserver) {
        this.activitiesService = activitiesService;
        this.generalService = generalService;
        this.auth = auth;
        this.notificationService = notificationService;
        this.route = route;
        this.datePipe = datePipe;
        this.breakpointObserver = breakpointObserver;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.displayedColumnsBigScreen = [
            'action1',
            'activityName',
            'activityDate',
            'duration',
            'distance',
            'aerobie',
            'anaerobique',
            'averageFc',
            'maxFc',
            'action2',
        ];
        this.displayedColumnsSmallScreen = [
            'action1',
            'activityName',
            'activityDate',
            'distance',
            'aerobie',
            'averageFc',
            'action2',
        ];
        this.DISTANCE = _enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.ActivityUnits.DISTANCE;
        this.displayNameMap = new Map([
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XSmall, 'XSmall'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Small, 'Small'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Medium, 'Medium'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Large, 'Large'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XLarge, 'XLarge'],
        ]);
        /**
         * Suppression d'une activité
         * @param id - id de l'activité à supprimer
         */
        this.deleteActivity = (id) => {
            this.generalService.sendLoadingActivityChangeInformation(true);
            this.activitiesService.deleteActivity(id).then(() => {
                this.generalService.sendLoadingActivityChangeInformation(false);
                this.notificationService.success(`L\'activité ${id} a été effacée avec succes !`);
            }).catch((err) => {
                this.generalService.sendLoadingActivityChangeInformation(false);
                this.notificationService.failure(err);
            });
        };
        /**
         * Modification d'une activité
         * @param id - id de l'activité à modifier
         */
        this.editActivity = (id) => {
            const activityToEdit = this.dataSource.data.filter(element => element.id === id);
            const url = '/activity/edit/' + activityToEdit[0].id;
            this.route.navigateByUrl(url);
        };
    }
    ngOnInit() {
        this.generalService.sendLoadingActivityChangeInformation(true);
        this.auth.user$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((userInfo) => {
            return this.activitiesService.getAllActivities(userInfo.email);
        }))
            .subscribe((response) => {
            const datas = (0,_utils_Datas_utils__WEBPACK_IMPORTED_MODULE_2__.firestoreDatasTransformation)(response);
            this.dataSource.data = datas.map((obj) => (Object.assign(Object.assign({}, obj), { date: new Date(obj.activityDate) })));
            this.dataSource.data.forEach((element) => (element.activityDate = this.datePipe.transform(element.activityDate, 'dd-MM-yyyy')));
            this.dataSource.data = this.dataSource.data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.generalService.sendLoadingActivityChangeInformation(false);
        });
        this.screenDefinition = new _models_responsive_model__WEBPACK_IMPORTED_MODULE_1__.ResponsiveUi(this.breakpointObserver);
        this.screenDefinition.getScreensize().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyed)).subscribe(result => {
            var _a;
            for (const query of Object.keys(result.breakpoints)) {
                if (result.breakpoints[query]) {
                    const currentScreenSize = (_a = this.displayNameMap.get(query)) !== null && _a !== void 0 ? _a : 'Unknown';
                    this.screenIsBig = this.screenDefinition.isScreenIsBig(currentScreenSize);
                }
            }
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
ActivitiesListComponent.ɵfac = function ActivitiesListComponent_Factory(t) { return new (t || ActivitiesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_activities_service__WEBPACK_IMPORTED_MODULE_3__.ActivitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_12__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.BreakpointObserver)); };
ActivitiesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ActivitiesListComponent, selectors: [["app-activities-list"]], viewQuery: function ActivitiesListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 6, vars: 4, consts: [["fxLayout", "column"], ["pageSize", "10", "showFirstLastButtons", "", "aria-label", "Choisissez une page", 3, "pageSizeOptions"], ["mat-table", "", "matSort", "", "class", "mat-elevation-z2", "aria-label", "Liste des activit\u00E9s", "aria-describedby", "Choupa", 3, "dataSource", 4, "ngIf"], ["mat-table", "", "matSort", "", "aria-label", "Liste des activit\u00E9s", "aria-describedby", "Choupa", 1, "mat-elevation-z2", 3, "dataSource"], ["matColumnDef", "action1"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "activityName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "activityDate"], ["matColumnDef", "duration", 4, "ngIf"], ["matColumnDef", "distance"], ["matColumnDef", "aerobie"], ["matColumnDef", "anaerobique"], ["matColumnDef", "averageFc"], ["matColumnDef", "maxFc", 4, "ngIf"], ["matColumnDef", "action2"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "aria-label", "Supprimer une activit\u00E9", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["matColumnDef", "duration"], ["matColumnDef", "maxFc"], ["mat-icon-button", "", "aria-label", "Modifier une activit\u00E9", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ActivitiesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Liste de mes activit\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mat-paginator", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ActivitiesListComponent_table_4_Template, 29, 5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ActivitiesListComponent_table_5_Template, 24, 3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.screenIsBig);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.screenIsBig);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutDirective, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-column-activityDate[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\na[_ngcontent-%COMP%] {\n  color: #ff784c;\n}\n\n.mat-column-actions1[_ngcontent-%COMP%], .mat-column-action2[_ngcontent-%COMP%] {\n  width: 7%;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: #3f5790;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n@media only screen and (max-width: 480px) {\n  .mat-header-cell[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .mat-cell[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n\n@media only screen and (min-width: 481px) {\n  .mat-header-cell[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .mat-cell[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n\n\n\n@media only screen and (min-width: 768px) {\n  .mat-header-cell[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .mat-cell[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n\n\n@media only screen and (min-width: 1024px) {\n  .mat-header-cell[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n\n\n@media only screen and (min-width: 1224px) {\n  .mat-header-cell[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .mat-cell[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n\n\n@media only screen and (min-width: 1824px) {\n  .mat-header-cell[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .mat-cell[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXRpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLFdBQUE7QUFMRjs7QUFPQTtFQUNFLGlCQUFBO0FBSkY7O0FBTUE7RUFDRSxjQVhNO0FBUVI7O0FBS0E7RUFDRSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxjQW5CVTtFQW9CVixpQkFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBSUE7RUFDRTtJQUNFLGVBQUE7RUFERjs7RUFHQTtJQUNFLGVBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxlQUFBO0VBREY7O0VBR0E7SUFDRSxlQUFBO0VBQUY7QUFDRjs7QUFHQSx3Q0FBQTs7QUFDQTtFQUNFO0lBQ0UsZUFBQTtFQURGOztFQUdBO0lBQ0UsZUFBQTtFQUFGO0FBQ0Y7O0FBR0EsdUNBQUE7O0FBQ0E7RUFDRTtJQUNFLGVBQUE7RUFERjtBQUNGOztBQUlBLHFDQUFBOztBQUNBO0VBQ0U7SUFDRSxlQUFBO0VBRkY7O0VBSUE7SUFDRSxlQUFBO0VBREY7QUFDRjs7QUFJQSw4QkFBQTs7QUFDQTtFQUNFO0lBQ0UsZUFBQTtFQUZGOztFQUlBO0lBQ0UsZUFBQTtFQURGO0FBQ0YiLCJmaWxlIjoiYWN0aXZpdGllcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnk6ICMwMDRjNmQ7XG4kc2Vjb25kYXJ5OiAjM2Y1NzkwO1xuJGxpbmtzOiAjZmY3ODRjO1xuJHRleHQtY29sb3I6IHdoaXRlO1xuJGxpbmstYWN0aXZlOiAjZmZhNjAwO1xuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hdC1jb2x1bW4tYWN0aXZpdHlEYXRlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5hIHtcbiAgY29sb3I6ICRsaW5rcztcbn1cbi5tYXQtY29sdW1uLWFjdGlvbnMxLCAubWF0LWNvbHVtbi1hY3Rpb24yIHtcbiAgd2lkdGg6IDclO1xufVxuXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgY29sb3I6ICRzZWNvbmRhcnkgO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDQ4MHB4KSB7XG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAubWF0LWNlbGwge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA0ODFweCkge1xuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLm1hdC1jZWxsIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cblxuLyogU21hcnRwaG9uZXMgKGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDc2OHB4KSB7XG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAubWF0LWNlbGwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4vKiBTbWFydHBob25lcyAocG9ydHJhaXQpIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiAxMDI0cHgpIHtcbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi8qIERlc2t0b3BzIGFuZCBsYXB0b3BzIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiAxMjI0cHgpIHtcbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5tYXQtY2VsbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi8qIExhcmdlIHNjcmVlbnMgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDE4MjRweCkge1xuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLm1hdC1jZWxsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 53522:
/*!******************************************************************************!*\
  !*** ./src/app/components/activities/activity-add/activity-add.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityAddComponent": () => (/* binding */ ActivityAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material-moment-adapter */ 8441);
/* harmony import */ var moment_locale_fr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/locale/fr */ 63131);
/* harmony import */ var moment_locale_fr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_locale_fr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enums_forms_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../enums/forms.enum */ 77186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/auth0-angular */ 3863);
/* harmony import */ var _services_activities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/activities.service */ 29633);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/general.service */ 21864);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/notification.service */ 12013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/forms.service */ 76311);
/* harmony import */ var _activities_dynamic_form_activities_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../activities-dynamic-form/activities-dynamic-form.component */ 99847);














class ActivityAddComponent {
    constructor(fb, auth, activityService, adapter, generalService, notificationService, route, activatedRoute, formsService) {
        this.fb = fb;
        this.auth = auth;
        this.activityService = activityService;
        this.adapter = adapter;
        this.generalService = generalService;
        this.notificationService = notificationService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.formsService = formsService;
        this.ADD = _enums_forms_enum__WEBPACK_IMPORTED_MODULE_1__.FormActions.ADD;
        /**
         * Save new activity
         * @param $event - activity formgroup
         */
        this.addNewActivity = ($event) => {
            if ($event.action !== _enums_forms_enum__WEBPACK_IMPORTED_MODULE_1__.FormActions.CANCEL) {
                const activityDate = $event.activityForm.get('activityDate').value;
                const payload = $event.activityForm.getRawValue();
                payload.activityDate = activityDate.toISOString();
                payload.userEmail = this.userEmail;
                this.generalService.sendLoadingActivityChangeInformation(true);
                this.activityService.addActivity(payload).then((newActivity) => {
                    if (newActivity.id) {
                        this.generalService.sendLoadingActivityChangeInformation(false);
                        this.notificationService.success('Nouvelle activité ajoutée');
                        this.route.navigateByUrl('/activities');
                    }
                }).catch((err) => {
                    this.notificationService.failure(err);
                    this.generalService.sendLoadingActivityChangeInformation(false);
                });
            }
            else {
                this.route.navigateByUrl('activities');
            }
        };
    }
    ngOnInit() {
        this.adapter.setLocale('fr');
        this.auth.user$.subscribe((userInfo) => {
            if (userInfo) {
                this.userEmail = userInfo.email;
            }
        });
        this.activatedRoute.params.subscribe(activity => {
            this.controlsList = this.formsService.getControlsList(activity.name);
        });
    }
}
ActivityAddComponent.ɵfac = function ActivityAddComponent_Factory(t) { return new (t || ActivityAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_activities_service__WEBPACK_IMPORTED_MODULE_2__.ActivitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_forms_service__WEBPACK_IMPORTED_MODULE_5__.FormsService)); };
ActivityAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ActivityAddComponent, selectors: [["app-activity-add"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MAT_DATE_LOCALE, useValue: 'fr-FR' },
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.DateAdapter,
                useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__.MomentDateAdapter,
                deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MAT_DATE_LOCALE, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__.MAT_MOMENT_DATE_ADAPTER_OPTIONS],
            },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MAT_DATE_FORMATS, useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__.MAT_MOMENT_DATE_FORMATS },
        ])], decls: 2, vars: 2, consts: [[3, "controlsList", "formAction", "submitForm"]], template: function ActivityAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "app-activities-dynamic-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submitForm", function ActivityAddComponent_Template_app_activities_dynamic_form_submitForm_1_listener($event) { return ctx.addNewActivity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("controlsList", ctx.controlsList)("formAction", ctx.ADD, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_activities_dynamic_form_activities_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__.ActivitiesDynamicFormComponent], styles: ["div[_ngcontent-%COMP%] {\n  padding: 30px 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiYWN0aXZpdHktYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgcGFkZGluZzogMzBweCA1MHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 156:
/*!********************************************************************************!*\
  !*** ./src/app/components/activities/activity-edit/activity-edit.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityEditComponent": () => (/* binding */ ActivityEditComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../enums/forms.enum */ 77186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_activities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/activities.service */ 29633);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/notification.service */ 12013);
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/forms.service */ 76311);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/general.service */ 21864);
/* harmony import */ var _activities_dynamic_form_activities_dynamic_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../activities-dynamic-form/activities-dynamic-form.component */ 99847);









class ActivityEditComponent {
    constructor(activitiesService, route, notificationService, router, formsService, generalService) {
        this.activitiesService = activitiesService;
        this.route = route;
        this.notificationService = notificationService;
        this.router = router;
        this.formsService = formsService;
        this.generalService = generalService;
        this.EDIT = _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.FormActions.EDIT;
        this.controlsList = [];
        this.updateActivity = ($event) => {
            switch ($event.action) {
                case _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.FormActions.CANCEL:
                    this.router.navigateByUrl('activities');
                    break;
                case _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.FormActions.EDIT:
                    const activityDate = $event.activityForm.get('activityDate').value;
                    const payload = $event.activityForm.getRawValue();
                    payload.activityDate = activityDate.toISOString();
                    payload.userEmail = this.activityToEdit.userEmail;
                    this.generalService.sendLoadingActivityChangeInformation(true);
                    this.activitiesService.updateActivity(this.activityToEdit.id, payload).then(() => {
                        this.generalService.sendLoadingActivityChangeInformation(false);
                        this.notificationService.success('Activité ' + this.activityToEdit.id + ' mise à jour');
                        this.router.navigateByUrl('/activities');
                    }).catch((err) => {
                        this.notificationService.failure(err);
                        this.generalService.sendLoadingActivityChangeInformation(false);
                    });
                    break;
                default:
                    this.notificationService.failure('L\'action transmise n\'est pas valide');
                    break;
            }
        };
    }
    ngOnInit() {
        this.route.paramMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), 
        // retrieve the recommendation from WS if it exists, otherwise a new recommendation instance
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(params => this.activitiesService.getActivity(params.get('id'))))
            .subscribe({
            next: activityFromWS => {
                this.activityToEdit = Object.assign({ id: activityFromWS.id }, activityFromWS.data());
                this.controlsList = this.formsService.getControlsList(this.activityToEdit.activityName, this.activityToEdit);
            }
        });
    }
}
ActivityEditComponent.ɵfac = function ActivityEditComponent_Factory(t) { return new (t || ActivityEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_activities_service__WEBPACK_IMPORTED_MODULE_1__.ActivitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_forms_service__WEBPACK_IMPORTED_MODULE_3__.FormsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService)); };
ActivityEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ActivityEditComponent, selectors: [["app-activity-edit"]], decls: 2, vars: 2, consts: [[3, "controlsList", "formAction", "submitForm"]], template: function ActivityEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "app-activities-dynamic-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submitForm", function ActivityEditComponent_Template_app_activities_dynamic_form_submitForm_1_listener($event) { return ctx.updateActivity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("controlsList", ctx.controlsList)("formAction", ctx.EDIT, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_activities_dynamic_form_activities_dynamic_form_component__WEBPACK_IMPORTED_MODULE_5__.ActivitiesDynamicFormComponent], styles: ["#common-info[_ngcontent-%COMP%], #activity-info[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  border-radius: 8px;\n  padding: 10px;\n  margin-bottom: 20px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.1411764706), 0 1px 5px rgba(0, 0, 0, 0.1215686275);\n}\n\n.mat-form-field-suffix[_ngcontent-%COMP%] {\n  color: #E9527E !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkhBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0YiLCJmaWxlIjoiYWN0aXZpdHktZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb21tb24taW5mbywgI2FjdGl2aXR5LWluZm8ge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4ICMwMDAzLCAwIDJweCAycHggIzAwMDAwMDI0LCAwIDFweCA1cHggIzAwMDAwMDFmO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgY29sb3I6ICNFOTUyN0UgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 93863:
/*!***********************************************************!*\
  !*** ./src/app/components/auth-nav/auth-nav.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthNavComponent": () => (/* binding */ AuthNavComponent)
/* harmony export */ });
/* harmony import */ var _enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/activity.enum */ 35355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-angular */ 3863);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ 55434);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _shared_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/login-button/login-button.component */ 82993);
/* harmony import */ var _shared_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/logout-button/logout-button.component */ 37966);
/* harmony import */ var _shared_signup_button_signup_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/signup-button/signup-button.component */ 78083);












function AuthNavComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-login-button")(2, "app-signup-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function AuthNavComponent_ng_container_3_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuthNavComponent_ng_container_3_button_6_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const activityLabel_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.navigateTo(activityLabel_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activityLabel_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](activityLabel_r4);
} }
function AuthNavComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 2)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "add_task");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-menu", null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AuthNavComponent_ng_container_3_button_6_Template, 2, 1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-logout-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.activitiesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.userName);
} }
class AuthNavComponent {
    constructor(auth, route) {
        this.auth = auth;
        this.route = route;
        this.activitiesList = [];
    }
    ngOnInit() {
        this.activitiesList = Object.values(_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.ActivitiesNameLabel);
        this.auth.user$.subscribe((userInfo) => {
            if (userInfo) {
                this.userName = userInfo.given_name;
            }
        });
    }
    /*addNewActivity(): void {
      this.route.navigateByUrl('/activity/add');
    }*/
    navigateTo(activityLabel) {
        this.route.navigateByUrl('/activity/add/' + activityLabel);
    }
}
AuthNavComponent.ɵfac = function AuthNavComponent_Factory(t) { return new (t || AuthNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
AuthNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AuthNavComponent, selectors: [["app-auth-nav"]], decls: 5, vars: 6, consts: [["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayoutAlign.xs", "end center", "fxLayoutAlign.sm", "end center", "fxLayoutGap", "20px"], [4, "ngIf"], ["mat-icon-button", "", "aria-label", "Ajouter nouvelle activit\u00E9", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "user-name"], ["mat-menu-item", "", 3, "click"]], template: function AuthNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthNavComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AuthNavComponent_ng_container_3_Template, 10, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx.auth.isAuthenticated$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, ctx.auth.isAuthenticated$));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutGapDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _shared_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_1__.LoginButtonComponent, _shared_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_2__.LogoutButtonComponent, _shared_signup_button_signup_button_component__WEBPACK_IMPORTED_MODULE_3__.SignupButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], styles: [".user-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJhdXRoLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLW5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 95720:
/*!*******************************************************************************!*\
  !*** ./src/app/components/best-average-speed/best-average-speed.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BestAverageSpeedComponent": () => (/* binding */ BestAverageSpeedComponent)
/* harmony export */ });
/* harmony import */ var _enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/activity.enum */ 35355);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var _utils_Datas_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Datas.utils */ 16730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_activities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/activities.service */ 29633);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 55434);








function BestAverageSpeedComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "VTT:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r0.bestAverageSpeed == null ? null : ctx_r0.bestAverageSpeed.vtt, " ", ctx_r0.unit, "");
} }
function BestAverageSpeedComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "HT:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r1.bestAverageSpeed == null ? null : ctx_r1.bestAverageSpeed.ht, " ", ctx_r1.unit, "");
} }
function BestAverageSpeedComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Rameur:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r2.bestAverageSpeed == null ? null : ctx_r2.bestAverageSpeed.rower, " ", ctx_r2.unit, "");
} }
function BestAverageSpeedComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Marche:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r3.bestAverageSpeed == null ? null : ctx_r3.bestAverageSpeed.walk, " ", ctx_r3.unit, "");
} }
class BestAverageSpeedComponent {
    constructor(activitiesService) {
        this.activitiesService = activitiesService;
        this.bestAverageSpeed = { vtt: undefined, rower: undefined, ht: undefined, walk: undefined };
        this.unit = _enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.ActivityUnits.SPEED;
        this.vttAverageSpeedDatas = [];
        this.htAverageSpeedDatas = [];
        this.rowerAverageSpeedDatas = [];
        this.walkAverageSpeedDatas = [];
        this.vtt$ = this.activitiesService.getAverageSpeed(_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.ActivitiesNameLabel.VTT);
        this.ht$ = this.activitiesService.getAverageSpeed(_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.ActivitiesNameLabel.VELO_INSIDE);
        this.rower$ = this.activitiesService.getAverageSpeed(_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.ActivitiesNameLabel.ROWER);
        this.walk$ = this.activitiesService.getAverageSpeed(_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.ActivitiesNameLabel.WALK);
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([
            this.activitiesService.getAverageSpeed(_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.ActivitiesNameLabel.VTT),
            this.activitiesService.getAverageSpeed(_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.ActivitiesNameLabel.ROWER),
            this.activitiesService.getAverageSpeed(_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.ActivitiesNameLabel.VELO_INSIDE),
            this.activitiesService.getAverageSpeed(_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.ActivitiesNameLabel.WALK)
        ]).subscribe({
            next: ([vtt, rower, ht, walk]) => {
                this.vttAverageSpeedDatas = this.getActivityAverageSpeedTransformedDatas(vtt);
                this.rowerAverageSpeedDatas = this.getActivityAverageSpeedTransformedDatas(rower);
                this.htAverageSpeedDatas = this.getActivityAverageSpeedTransformedDatas(ht);
                this.walkAverageSpeedDatas = this.getActivityAverageSpeedTransformedDatas(walk);
                this.bestAverageSpeed.vtt =
                    this.vttAverageSpeedDatas.length > 0
                        ? (0,_utils_Datas_utils__WEBPACK_IMPORTED_MODULE_1__.getMaximumValue)(this.vttAverageSpeedDatas)
                        : 0;
                this.bestAverageSpeed.ht =
                    this.htAverageSpeedDatas.length > 0
                        ? (0,_utils_Datas_utils__WEBPACK_IMPORTED_MODULE_1__.getMaximumValue)(this.htAverageSpeedDatas)
                        : 0;
                this.bestAverageSpeed.rower =
                    this.rowerAverageSpeedDatas.length > 0
                        ? (0,_utils_Datas_utils__WEBPACK_IMPORTED_MODULE_1__.getMaximumValue)(this.rowerAverageSpeedDatas)
                        : 0;
                this.bestAverageSpeed.walk =
                    this.walkAverageSpeedDatas.length > 0
                        ? (0,_utils_Datas_utils__WEBPACK_IMPORTED_MODULE_1__.getMaximumValue)(this.walkAverageSpeedDatas)
                        : 0;
            }
        });
    }
    /**
     * Transform result of firebase query into an array of numbers
     * @param source - result of firebase query
     */
    getActivityAverageSpeedTransformedDatas(source) {
        const transformedData = source.map(item => Object.assign({ id: item.payload.doc.id }, item.payload.doc.data()));
        return transformedData.map(value => Number(value.averageSpeed));
    }
}
BestAverageSpeedComponent.ɵfac = function BestAverageSpeedComponent_Factory(t) { return new (t || BestAverageSpeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_activities_service__WEBPACK_IMPORTED_MODULE_2__.ActivitiesService)); };
BestAverageSpeedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BestAverageSpeedComponent, selectors: [["app-best-average-speed"]], decls: 10, vars: 4, consts: [["id", "subtitle"], ["id", "content"], ["fxLayout", "column", "fxLayoutGap", "10px", "fxLayoutAlign", "space-between"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", "space-between center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", "space-between center"]], template: function BestAverageSpeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card")(1, "div", 0)(2, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Meilleure vitesse moyenne");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1)(5, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BestAverageSpeedComponent_div_6_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, BestAverageSpeedComponent_div_7_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, BestAverageSpeedComponent_div_8_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, BestAverageSpeedComponent_div_9_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bestAverageSpeed.vtt !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bestAverageSpeed.ht !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bestAverageSpeed.rower !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bestAverageSpeed.walk !== 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutGapDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective], styles: [".mat-card[_ngcontent-%COMP%] {\n  border: 2px solid #004c6d;\n  border-radius: 22px;\n  padding: 0;\n}\n\n#subtitle[_ngcontent-%COMP%] {\n  padding: 16px 16px 8px 16px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  background-color: #004c6d;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\n\n#content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlc3QtYXZlcmFnZS1zcGVlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBTkY7O0FBUUE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFmUTtBQVVWOztBQU9BO0VBQ0UsWUFmVztFQWdCWCxpQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtBQUpGIiwiZmlsZSI6ImJlc3QtYXZlcmFnZS1zcGVlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJHByaW1hcnk6ICMwMDRjNmQ7XG4kc2Vjb25kYXJ5OiAjM2Y1NzkwO1xuJGxpbmtzOiAjZmY3ODRjO1xuJHRleHQtY29sb3I6IHdoaXRlO1xuJGxpbmstYWN0aXZlOiAjZmZhNjAwO1xuXG4ubWF0LWNhcmQge1xuICBib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgcGFkZGluZzogMDtcbn1cbiNzdWJ0aXRsZSB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCA4cHggMTZweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xufVxuLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2NvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 20697:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/activities-count-by-activity-name/activities-count-by-activity-name.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitiesCountByActivityNameComponent": () => (/* binding */ ActivitiesCountByActivityNameComponent)
/* harmony export */ });
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/dashboard.model */ 63460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ 44195);



class ActivitiesCountByActivityNameComponent {
    ngOnChanges(_CHANGES) {
        var _a, _b;
        this.labels = (_a = this.activitiesData) === null || _a === void 0 ? void 0 : _a.map((item) => item.activityName);
        const chartData = (_b = this.activitiesData) === null || _b === void 0 ? void 0 : _b.map((item) => item.count);
        this.chart1 = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_0__.ActivitiesPieChart(this.labels, chartData);
    }
}
ActivitiesCountByActivityNameComponent.ɵfac = function ActivitiesCountByActivityNameComponent_Factory(t) { return new (t || ActivitiesCountByActivityNameComponent)(); };
ActivitiesCountByActivityNameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ActivitiesCountByActivityNameComponent, selectors: [["app-activities-count-by-activity-name"]], inputs: { activitiesData: "activitiesData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 3, consts: [["baseChart", "", 3, "data", "type", "options"]], template: function ActivitiesCountByActivityNameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.chart1 == null ? null : ctx.chart1.activitiesChartDataset)("type", ctx.chart1 == null ? null : ctx.chart1.activitiesChartType)("options", ctx.chart1 == null ? null : ctx.chart1.activitiesChartOptions);
    } }, dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__.BaseChartDirective], styles: ["canvas[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXRpZXMtY291bnQtYnktYWN0aXZpdHktbmFtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7QUFBRiIsImZpbGUiOiJhY3Rpdml0aWVzLWNvdW50LWJ5LWFjdGl2aXR5LW5hbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeTogIzAwNGM2ZDtcbmNhbnZhcyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 38610:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/dashboard/average-speed-evolution/average-speed-evolution.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AverageSpeedEvolutionComponent": () => (/* binding */ AverageSpeedEvolutionComponent)
/* harmony export */ });
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/dashboard.model */ 63460);
/* harmony import */ var _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../enums/activity.enum */ 35355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ 44195);




class AverageSpeedEvolutionComponent {
    constructor() {
        this.chartDatas = [];
    }
    ngOnChanges(_CHANGES) {
        var _a, _b;
        const distinctActivity = [...new Set((_a = this.activitiesData) === null || _a === void 0 ? void 0 : _a.map(item => item.activityName))];
        distinctActivity.forEach(a => {
            const averageSpeedValues = this.activitiesData.filter(d => d.activityName === a).map(item => {
                if (item.activityName === a) {
                    return item.averageSpeed;
                }
            });
            this.chartDatas.push({
                label: a,
                data: averageSpeedValues
            });
        });
        this.labels = [...new Set((_b = this.activitiesData) === null || _b === void 0 ? void 0 : _b.map(item => item.monthName))];
        this.chart1 = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_0__.ActivitiesLineChart(this.labels, this.chartDatas, _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivitiesNameLabel.VTT);
    }
}
AverageSpeedEvolutionComponent.ɵfac = function AverageSpeedEvolutionComponent_Factory(t) { return new (t || AverageSpeedEvolutionComponent)(); };
AverageSpeedEvolutionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AverageSpeedEvolutionComponent, selectors: [["app-average-speed-evolution"]], inputs: { activitiesData: "activitiesData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 3, consts: [["id", "average-speed-evolution"], ["baseChart", "", 3, "data", "type", "options"]], template: function AverageSpeedEvolutionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.chart1 == null ? null : ctx.chart1.activitiesChartDataset)("type", ctx.chart1 == null ? null : ctx.chart1.activitiesChartType)("options", ctx.chart1 == null ? null : ctx.chart1.activitiesChartOptions);
    } }, dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective], styles: ["#average-speed-evolution[_ngcontent-%COMP%] {\n  max-width: 90%;\n  border: 1px solid #004c6d;\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2ZXJhZ2Utc3BlZWQtZXZvbHV0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUFGIiwiZmlsZSI6ImF2ZXJhZ2Utc3BlZWQtZXZvbHV0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnk6ICMwMDRjNmQ7XG4jYXZlcmFnZS1zcGVlZC1ldm9sdXRpb24ge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnk7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 49289:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-container/dashboard-container.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardContainerComponent": () => (/* binding */ DashboardContainerComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 39910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ 63346);










function DashboardContainerComponent_mat_grid_tile_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 4)(1, "mat-card", 5)(2, "mat-card-header")(3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 7, 8)(10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Expand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content", 10)(15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Card Content Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", card_r1.cols)("rowspan", card_r1.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
} }
class DashboardContainerComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({ matches }) => {
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
}
DashboardContainerComponent.ɵfac = function DashboardContainerComponent_Factory(t) { return new (t || DashboardContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver)); };
DashboardContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardContainerComponent, selectors: [["app-dashboard-container"]], decls: 6, vars: 3, consts: [[1, "grid-container"], [1, "mat-h1"], ["cols", "2", "rowHeight", "350px"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], [1, "dashboard-card"], ["mat-icon-button", "", "aria-label", "Toggle menu", 1, "more-button", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "dashboard-card-content"]], template: function DashboardContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardContainerComponent_mat_grid_tile_4_Template, 17, 4, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.cards));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__.MatGridTile, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJkYXNoYm9hcmQtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xufVxuXG4ubW9yZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ 619:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var _utils_Datas_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Datas.utils */ 16730);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/notification.service */ 12013);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/general.service */ 21864);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/auth0-angular */ 3863);
/* harmony import */ var _services_activities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/activities.service */ 29633);
/* harmony import */ var _services_charts_data_computation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/charts-data-computation.service */ 27944);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 55434);
/* harmony import */ var _activities_count_by_activity_name_activities_count_by_activity_name_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activities-count-by-activity-name/activities-count-by-activity-name.component */ 20697);
/* harmony import */ var _average_speed_evolution_average_speed_evolution_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./average-speed-evolution/average-speed-evolution.component */ 38610);














function DashboardComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-activities-count-by-activity-name", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("activitiesData", ctx_r0.allActivitiesCount);
} }
function DashboardComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Aucune donn\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-average-speed-evolution", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("activitiesData", ctx_r2.allActivitiesAverageSpeedProgress);
} }
function DashboardComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Aucune donn\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(notification, generalService, auth, activitiesService, chartComputationService) {
        this.notification = notification;
        this.generalService = generalService;
        this.auth = auth;
        this.activitiesService = activitiesService;
        this.chartComputationService = chartComputationService;
    }
    ngOnInit() {
        this.generalService.sendLoadingActivityChangeInformation(true);
        this.auth.user$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)((userInfo) => {
            return this.activitiesService.getAllActivities(userInfo.email);
        }))
            .subscribe((response) => {
            this.allActivitiesUserList = (0,_utils_Datas_utils__WEBPACK_IMPORTED_MODULE_0__.firestoreDatasTransformation)(response);
            this.allActivitiesCount = this.chartComputationService.getCountByActivity(this.allActivitiesUserList);
            const sortedActivities = this.allActivitiesUserList.sort((a, b) => Number((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(a.activityDate, 'M', 'fr')) - Number((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(b.activityDate, 'M', 'fr')));
            this.allActivitiesAverageSpeedProgress = this.chartComputationService.getAverageSpeedProgress(sortedActivities);
            this.generalService.sendLoadingActivityChangeInformation(false);
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_activities_service__WEBPACK_IMPORTED_MODULE_3__.ActivitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_charts_data_computation_service__WEBPACK_IMPORTED_MODULE_4__.ChartsDataComputationService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 53, vars: 4, consts: [["fxLayout", "column", 1, "dashboard"], ["fxLayout", "row", "fxLayoutAlign", "space-between stretch", "fxLayoutGap", "20px"], ["fxFlex", "25", 1, "mat-elevation-z3", "dashboard-card"], [1, "dashboard-card-content"], ["fxFlex", "35", 1, "mat-elevation-z3", "dashboard-card"], [4, "ngIf"], ["fxFlex", "65", 1, "mat-elevation-z3", "dashboard-card"], ["fxLayout", "row"], [1, "dashboard-card"], [3, "activitiesData"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-header")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " title1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-card-content", 3)(7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-card", 2)(10, "mat-card-header")(11, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " title2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-card-content", 3)(14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-card", 2)(17, "mat-card-header")(18, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " title3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-card-content", 3)(21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-card", 2)(24, "mat-card-header")(25, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, " title4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-card-content", 3)(28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 1)(31, "mat-card", 4)(32, "mat-card-header")(33, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " R\u00E9partition des activit\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, DashboardComponent_div_36_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, DashboardComponent_div_37_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "mat-card", 6)(39, "mat-card-header")(40, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " Evolution de la vitesse moyenne ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, DashboardComponent_div_43_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, DashboardComponent_div_44_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 7)(46, "mat-card", 8)(47, "mat-card-header")(48, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, " titre 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "mat-card-content", 3)(51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "--");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.allActivitiesCount && ctx.allActivitiesCount.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.allActivitiesCount && ctx.allActivitiesCount.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.allActivitiesAverageSpeedProgress && ctx.allActivitiesAverageSpeedProgress.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.allActivitiesAverageSpeedProgress && ctx.allActivitiesAverageSpeedProgress.length == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutGapDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _activities_count_by_activity_name_activities_count_by_activity_name_component__WEBPACK_IMPORTED_MODULE_5__.ActivitiesCountByActivityNameComponent, _average_speed_evolution_average_speed_evolution_component__WEBPACK_IMPORTED_MODULE_6__.AverageSpeedEvolutionComponent], styles: [".dashboard-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  border-color: #004c6d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFOUTtBQU1WIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5OiAjMDA0YzZkO1xuLmRhc2hib2FyZC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1hdC1jYXJkIHtcbiAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 68263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, consts: [[1, "home-content"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis augue. Vestibulum lacinia, justo quis posuere euismod, augue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".home-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRlbnQge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 58192:
/*!************************************************************!*\
  !*** ./src/app/components/shared/alert/alert.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _models_alerts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/alerts.model */ 20153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 13338);





class AlertComponent {
    constructor(data) {
        this.data = data;
        this.isSuccess = data.alertType === _models_alerts_model__WEBPACK_IMPORTED_MODULE_0__.AlertType.SUCCESS;
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MAT_SNACK_BAR_DATA)); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], decls: 2, vars: 2, consts: [[3, "ngClass"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isSuccess ? "success" : "failure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.message);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultClassDirective], styles: [".success[_ngcontent-%COMP%] {\n  color: #3F51B5;\n}\n\n.failure[_ngcontent-%COMP%] {\n  color: darkred;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6ImFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Y2Nlc3Mge1xuICBjb2xvcjogIzNGNTFCNTtcbn1cblxuLmZhaWx1cmUge1xuICBjb2xvcjogZGFya3JlZDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 89857:
/*!************************************************************!*\
  !*** ./src/app/components/shared/aside/aside.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsideComponent": () => (/* binding */ AsideComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ 3863);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 55434);
/* harmony import */ var _best_average_speed_best_average_speed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../best-average-speed/best-average-speed.component */ 95720);





function AsideComponent_app_best_average_speed_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-best-average-speed");
} }
class AsideComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.auth.user$.subscribe((userInfo) => {
            if (userInfo) {
                this.userEmail = userInfo.email;
            }
        });
    }
}
AsideComponent.ɵfac = function AsideComponent_Factory(t) { return new (t || AsideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
AsideComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AsideComponent, selectors: [["app-aside"]], decls: 2, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "space-around center"], [4, "ngIf"]], template: function AsideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AsideComponent_app_best_average_speed_1_Template, 1, 0, "app-best-average-speed", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userEmail);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _best_average_speed_best_average_speed_component__WEBPACK_IMPORTED_MODULE_0__.BestAverageSpeedComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lkZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 56562:
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hopla le pied de page !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 0;\n  background-color: #3f5790;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNFLHlCQVJRO0VBU1YsWUFQVztBQUViIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5OiAjMDA0YzZkO1xuJHNlY29uZGFyeTogIzNmNTc5MDtcbiRsaW5rczogI2ZmNzg0YztcbiR0ZXh0LWNvbG9yOiB3aGl0ZTtcbiRsaW5rLWFjdGl2ZTogI2ZmYTYwMDtcblxuZm9vdGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 59546:
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 39910);
/* harmony import */ var _models_responsive_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/responsive.model */ 77445);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ 13338);
/* harmony import */ var _auth_nav_auth_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth-nav/auth-nav.component */ 93863);













function HeaderComponent_mat_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 1)(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_mat_toolbar_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.openMenu()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "The Garmin Experience...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 4)(7, "app-auth-nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderComponent_mat_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 1)(1, "mat-toolbar-row")(2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_mat_toolbar_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.openMenu()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "The Garmin Experience...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-toolbar-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-auth-nav", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass.xs", "full-width")("ngClass.sm", "full-width");
} }
class HeaderComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.openCloseMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.displayNameMap = new Map([
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.XSmall, 'XSmall'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Small, 'Small'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Medium, 'Medium'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Large, 'Large'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.XLarge, 'XLarge'],
        ]);
        this.openMenu = () => {
            this.openCloseMenu.emit(!this.menuOpened);
        };
    }
    ngOnInit() {
        this.screenDefinition = new _models_responsive_model__WEBPACK_IMPORTED_MODULE_0__.ResponsiveUi(this.breakpointObserver);
        this.screenDefinition.getScreensize().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroyed)).subscribe(result => {
            var _a;
            for (const query of Object.keys(result.breakpoints)) {
                if (result.breakpoints[query]) {
                    const currentScreenSize = (_a = this.displayNameMap.get(query)) !== null && _a !== void 0 ? _a : 'Unknown';
                    this.screenIsBig = this.screenDefinition.isScreenIsBig(currentScreenSize);
                }
            }
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { menuOpened: "menuOpened" }, outputs: { openCloseMenu: "openCloseMenu" }, decls: 3, vars: 2, consts: [["class", "header-content", 4, "ngIf"], [1, "header-content"], ["mat-icon-button", "", "aria-label", "Ouvrir/Fermer Menu", 3, "click"], [1, "title"], [1, "spacer"], [1, "right-align"], [3, "ngClass.xs", "ngClass.sm"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderComponent_mat_toolbar_1_Template, 8, 0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HeaderComponent_mat_toolbar_2_Template, 9, 2, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.screenIsBig);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.screenIsBig);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarRow, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.DefaultClassDirective, _auth_nav_auth_nav_component__WEBPACK_IMPORTED_MODULE_1__.AuthNavComponent], styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.header-content[_ngcontent-%COMP%] {\n  background-color: #004c6d;\n  color: white;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQVRRO0VBVVIsWUFSVztBQUtiOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0FBRkYiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnk6ICMwMDRjNmQ7XG4kbGlua3M6ICNmZjc4NGM7XG4kdGV4dC1jb2xvcjogd2hpdGU7XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmhlYWRlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbn1cbi50aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ 82993:
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/login-button/login-button.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginButtonComponent": () => (/* binding */ LoginButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ 3863);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 87317);



class LoginButtonComponent {
    constructor(auth) {
        this.auth = auth;
    }
    loginWithRedirect() {
        this.auth.loginWithRedirect();
    }
}
LoginButtonComponent.ɵfac = function LoginButtonComponent_Factory(t) { return new (t || LoginButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
LoginButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginButtonComponent, selectors: [["app-login-button"]], decls: 2, vars: 0, consts: [["mat-raised-button", "", "color", "accent", 3, "click"]], template: function LoginButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginButtonComponent_Template_button_click_0_listener() { return ctx.loginWithRedirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Se connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 37966:
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/logout-button/logout-button.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutButtonComponent": () => (/* binding */ LogoutButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ 3863);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 87317);




class LogoutButtonComponent {
    constructor(auth, doc) {
        this.auth = auth;
        this.doc = doc;
    }
    logout() {
        this.auth.logout({ returnTo: this.doc.location.origin });
    }
}
LogoutButtonComponent.ɵfac = function LogoutButtonComponent_Factory(t) { return new (t || LogoutButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
LogoutButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutButtonComponent, selectors: [["app-logout-button"]], decls: 2, vars: 0, consts: [["mat-raised-button", "", "color", "accent", 3, "click"]], template: function LogoutButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoutButtonComponent_Template_button_click_0_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Se d\u00E9connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 93206:
/*!****************************************************************!*\
  !*** ./src/app/components/shared/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 70655);
/* harmony import */ var _models_menus_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/menus.model */ 9964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);







class SidebarComponent {
    constructor() {
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faUserCog;
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faHome;
        this.faImport = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCogs;
        this.faDataField = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faServer;
        this.faImportActivity = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faUpload;
        this.faDashboard = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faChartPie;
        this.faActivityView = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTable;
        this.faAdminUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faUserFriends;
        this.faBiking = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faBiking;
        this.menu = _models_menus_model__WEBPACK_IMPORTED_MODULE_0__.MAINMENU;
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 9, vars: 2, consts: [["mat-line", "", "mat-list-item", "", "routerLink", "dashboard", "routerLinkActive", "active", "href", "#"], [3, "icon"], ["mat-line", "", "mat-list-item", "", "routerLink", "activities", "routerLinkActive", "active", "href", "#"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list")(1, "mat-list-item")(2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-list-item")(6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Mes activit\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faDashboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faBiking);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatLine, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent], styles: ["#sidebar[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 500 !important;\n  color: white !important;\n  text-transform: uppercase;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: #ff784c;\n  border-left: 10px solid #c23e14;\n}\n\nfa-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\nmat-list[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-list-item-content[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxpQkFBQTtBQU5GOztBQVNBO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFORjs7QUFVQTtFQUNFLHVCQUFBO0VBQ0EseUJBbkJNO0VBb0JOLCtCQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7QUFQRjs7QUFTQTtFQUNFLHFCQUFBO0FBTkYiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5OiAjMDA0YzZkO1xuJHNlY29uZGFyeTogIzNmNTc5MDtcbiRsaW5rczogI2ZmNzg0YztcbiRkYXJrZXItbGlua3M6ICNjMjNlMTQ7XG4kdGV4dC1jb2xvcjogd2hpdGU7XG4kbGluay1hY3RpdmU6ICNmZmE2MDA7XG5cbiNzaWRlYmFyIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlua3M7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICRkYXJrZXItbGlua3MgO1xufVxuXG5mYS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5tYXQtbGlzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cblxuXG4iXX0= */"] });


/***/ }),

/***/ 78083:
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/signup-button/signup-button.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupButtonComponent": () => (/* binding */ SignupButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ 3863);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 87317);



class SignupButtonComponent {
    constructor(auth) {
        this.auth = auth;
    }
    loginWithRedirect() {
        this.auth.loginWithRedirect({ screen_hint: 'signup' });
    }
}
SignupButtonComponent.ɵfac = function SignupButtonComponent_Factory(t) { return new (t || SignupButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
SignupButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupButtonComponent, selectors: [["app-signup-button"]], decls: 2, vars: 0, consts: [["mat-raised-button", "", "color", "accent", 3, "click"]], template: function SignupButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupButtonComponent_Template_button_click_0_listener() { return ctx.loginWithRedirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "S'enregistrer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 34889:
/*!*********************************************************************!*\
  !*** ./src/app/directives/replace-comma-bydot-in-ctrl.directive.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaceCommaByDotInCtrlDirective": () => (/* binding */ ReplaceCommaByDotInCtrlDirective),
/* harmony export */   "replaceCommaByDot": () => (/* binding */ replaceCommaByDot)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);


class ReplaceCommaByDotInCtrlDirective {
    constructor(ngControl) {
        this.ngControl = ngControl;
    }
    ngAfterViewInit() {
        if (this.ngControl && this.ngControl.valueChanges) {
            this.subscription$ = this.ngControl.valueChanges.subscribe({
                next: (value) => {
                    /**
                     * On control value change, we check if the user submitted value is considered valid by the form control validators
                     * and contains any amount of comma
                     * Then we replace it with a dot
                     */
                    if (value && this.ngControl.valid && `${value}`.includes(',')) {
                        this.ngControl.control.setValue(replaceCommaByDot(value));
                    }
                }
            });
        }
    }
    ngOnDestroy() {
        // destroy the subscription
        if (this.subscription$) {
            this.subscription$.unsubscribe();
        }
    }
}
ReplaceCommaByDotInCtrlDirective.ɵfac = function ReplaceCommaByDotInCtrlDirective_Factory(t) { return new (t || ReplaceCommaByDotInCtrlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl)); };
ReplaceCommaByDotInCtrlDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ReplaceCommaByDotInCtrlDirective, selectors: [["", "appReplaceCommaByDotInCtrl", ""]] });
/**
 * Replace by a dot any comma contained the value passed in param
 * @param value - value to treat
 */
function replaceCommaByDot(value) {
    return value ? `${value}`.replace(/[^0-9-.]/g, '.') : undefined;
}


/***/ }),

/***/ 35355:
/*!****************************************!*\
  !*** ./src/app/enums/activity.enum.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitiesNameLabel": () => (/* binding */ ActivitiesNameLabel),
/* harmony export */   "ActivityFieldsLabel": () => (/* binding */ ActivityFieldsLabel),
/* harmony export */   "ActivityFieldsMax": () => (/* binding */ ActivityFieldsMax),
/* harmony export */   "ActivityFieldsMin": () => (/* binding */ ActivityFieldsMin),
/* harmony export */   "ActivityUnits": () => (/* binding */ ActivityUnits),
/* harmony export */   "FirebaseCollections": () => (/* binding */ FirebaseCollections)
/* harmony export */ });
/**
 * Nom des activités
 */
var ActivitiesNameLabel;
(function (ActivitiesNameLabel) {
    ActivitiesNameLabel["VTT"] = "VTT";
    ActivitiesNameLabel["VTTAE"] = "VTTAE";
    ActivitiesNameLabel["VELO_INSIDE"] = "HOME TRAINER";
    ActivitiesNameLabel["ROWER"] = "RAMEUR";
    ActivitiesNameLabel["WALK"] = "WALK";
})(ActivitiesNameLabel || (ActivitiesNameLabel = {}));
/**
 * Nom des activités dans el tableau
 */
var ActivityFieldsLabel;
(function (ActivityFieldsLabel) {
    ActivityFieldsLabel["userEmail"] = "Utilisateur";
    ActivityFieldsLabel["activityDate"] = "Date de l'activit\u00E9";
    ActivityFieldsLabel["activityName"] = "Activit\u00E9";
    ActivityFieldsLabel["duration"] = "Dur\u00E9e";
    ActivityFieldsLabel["distance"] = "Distance";
    ActivityFieldsLabel["maxSpeed"] = "Vitesse max";
    ActivityFieldsLabel["averageSpeed"] = "Vitesse moy";
    ActivityFieldsLabel["averageFc"] = "FC moy";
    ActivityFieldsLabel["maxFc"] = "FC max";
    ActivityFieldsLabel["aerobie"] = "A\u00E9robie";
    ActivityFieldsLabel["anaerobique"] = "Ana\u00E9robique";
    ActivityFieldsLabel["exerciceLoad"] = "Exercice load";
    ActivityFieldsLabel["averagePower"] = "Puissance moy";
    ActivityFieldsLabel["maxPower"] = "Puissance max";
    ActivityFieldsLabel["averageCadence"] = "Cadence moy";
    ActivityFieldsLabel["maxCadence"] = "Cadence max";
    ActivityFieldsLabel["maxAveragePower"] = "Puissance moy max(20mn)";
})(ActivityFieldsLabel || (ActivityFieldsLabel = {}));
var FirebaseCollections;
(function (FirebaseCollections) {
    FirebaseCollections["ACTIVITY"] = "activities";
})(FirebaseCollections || (FirebaseCollections = {}));
var ActivityFieldsMax;
(function (ActivityFieldsMax) {
    ActivityFieldsMax[ActivityFieldsMax["DISTANCE"] = 30] = "DISTANCE";
    ActivityFieldsMax[ActivityFieldsMax["AVERAGE_SPEED"] = 40] = "AVERAGE_SPEED";
    ActivityFieldsMax[ActivityFieldsMax["MAX_SPEED"] = 60] = "MAX_SPEED";
    ActivityFieldsMax[ActivityFieldsMax["AVERAGE_FC"] = 140] = "AVERAGE_FC";
    ActivityFieldsMax[ActivityFieldsMax["MAX_FC"] = 210] = "MAX_FC";
    ActivityFieldsMax[ActivityFieldsMax["AEROBIE"] = 5] = "AEROBIE";
    ActivityFieldsMax[ActivityFieldsMax["ANAEROBIQUE"] = 5] = "ANAEROBIQUE";
    ActivityFieldsMax[ActivityFieldsMax["CONSTANCE"] = 40] = "CONSTANCE";
    ActivityFieldsMax[ActivityFieldsMax["DIFFICULTY"] = 60] = "DIFFICULTY";
})(ActivityFieldsMax || (ActivityFieldsMax = {}));
var ActivityFieldsMin;
(function (ActivityFieldsMin) {
    ActivityFieldsMin[ActivityFieldsMin["DISTANCE"] = 1] = "DISTANCE";
    ActivityFieldsMin[ActivityFieldsMin["SPEED"] = 1] = "SPEED";
    ActivityFieldsMin[ActivityFieldsMin["CADENCE"] = 1] = "CADENCE";
    ActivityFieldsMin[ActivityFieldsMin["AEROBIE"] = 0] = "AEROBIE";
    ActivityFieldsMin[ActivityFieldsMin["ANAEROBIQUE"] = 0] = "ANAEROBIQUE";
    ActivityFieldsMin[ActivityFieldsMin["CONSTANCE"] = 0] = "CONSTANCE";
    ActivityFieldsMin[ActivityFieldsMin["DIFFICULTY"] = 0] = "DIFFICULTY";
    ActivityFieldsMin[ActivityFieldsMin["POWER"] = 0] = "POWER";
})(ActivityFieldsMin || (ActivityFieldsMin = {}));
var ActivityUnits;
(function (ActivityUnits) {
    ActivityUnits["DISTANCE"] = "km";
    ActivityUnits["SPEED"] = "km/h";
    ActivityUnits["FC"] = "bpm";
    ActivityUnits["CADENCE"] = "rpm";
    ActivityUnits["POWER"] = "w";
    ActivityUnits["ALLURE"] = "mn/500m";
    ActivityUnits["FREQUENCE_COUPS"] = "cps/mn";
    ActivityUnits["STROKES"] = "cps";
})(ActivityUnits || (ActivityUnits = {}));
/*export enum ActivityFormScope {
  COMMON = 'COMMON',
  SPECIFIC = 'SPECIFIC'
}*/


/***/ }),

/***/ 68901:
/*!***************************************!*\
  !*** ./src/app/enums/charts.enums.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitiesChartType": () => (/* binding */ ActivitiesChartType)
/* harmony export */ });
var ActivitiesChartType;
(function (ActivitiesChartType) {
    ActivitiesChartType["PIE"] = "pie";
    ActivitiesChartType["LINE"] = "line";
    ActivitiesChartType["BAR"] = "bar";
})(ActivitiesChartType || (ActivitiesChartType = {}));


/***/ }),

/***/ 77186:
/*!*************************************!*\
  !*** ./src/app/enums/forms.enum.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlType": () => (/* binding */ ControlType),
/* harmony export */   "FormActions": () => (/* binding */ FormActions)
/* harmony export */ });
var ControlType;
(function (ControlType) {
    ControlType["DROPDOWN"] = "dropdown";
    ControlType["TEXTBOXDATE"] = "textboxdate";
    ControlType["TEXTBOXTIME"] = "textboxtime";
    ControlType["TEXTBOX_NODECIMAL"] = "textbox-nodecimal";
    ControlType["TEXTBOX_DECIMAL"] = "textbox-decimal";
    ControlType["GRAPHICAL"] = "graphical";
})(ControlType || (ControlType = {}));
var FormActions;
(function (FormActions) {
    FormActions["ADD"] = "ADD";
    FormActions["EDIT"] = "EDIT";
    FormActions["CANCEL"] = "CANCEL";
})(FormActions || (FormActions = {}));


/***/ }),

/***/ 71176:
/*!******************************************!*\
  !*** ./src/app/enums/responsive.enum.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenSize": () => (/* binding */ ScreenSize)
/* harmony export */ });
var ScreenSize;
(function (ScreenSize) {
    ScreenSize["XLARGE"] = "XLarge";
    ScreenSize["LARGE"] = "Large";
    ScreenSize["MEDIUM"] = "Medium";
    ScreenSize["SMALL"] = "Small";
    ScreenSize["XSMALL"] = "XSmall";
})(ScreenSize || (ScreenSize = {}));


/***/ }),

/***/ 20153:
/*!****************************************!*\
  !*** ./src/app/models/alerts.model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertType": () => (/* binding */ AlertType)
/* harmony export */ });
var AlertType;
(function (AlertType) {
    AlertType["SUCCESS"] = "success";
    AlertType["FAILURE"] = "failure";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ 63460:
/*!*******************************************!*\
  !*** ./src/app/models/dashboard.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitiesBarChart": () => (/* binding */ ActivitiesBarChart),
/* harmony export */   "ActivitiesChart": () => (/* binding */ ActivitiesChart),
/* harmony export */   "ActivitiesLineChart": () => (/* binding */ ActivitiesLineChart),
/* harmony export */   "ActivitiesPieChart": () => (/* binding */ ActivitiesPieChart)
/* harmony export */ });
/* harmony import */ var _enums_charts_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/charts.enums */ 68901);
/* harmony import */ var _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/activity.enum */ 35355);


class ActivitiesChart {
    constructor() {
        this.chartColors = [
            {
                activity: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivitiesNameLabel.VTT,
                color: '#004c6d'
            },
            {
                activity: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivitiesNameLabel.VELO_INSIDE,
                color: '#a8b6c3'
            },
            {
                activity: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivitiesNameLabel.ROWER,
                color: '#fecab8'
            },
            {
                activity: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivitiesNameLabel.VTTAE,
                color: '#ffa281'
            }
        ];
    }
}
class ActivitiesPieChart extends ActivitiesChart {
    constructor(labels, datas, title) {
        super();
        this.activitiesChartType = _enums_charts_enums__WEBPACK_IMPORTED_MODULE_0__.ActivitiesChartType.PIE;
        this.activitiesChartLabels = labels;
        this.activitiesChartDatas = datas;
        this.titleChartConfig = {
            display: true,
            position: 'top',
            text: title ? title : '',
            color: '#004c6d'
        };
        this.activitiesChartOptions = {
            responsive: true,
            plugins: {
                title: this.titleChartConfig,
                legend: {
                    display: true,
                    position: 'right'
                }
            }
        };
        this.activitiesChartDataset = {
            labels: this.activitiesChartLabels,
            datasets: [{
                    data: this.activitiesChartDatas,
                    backgroundColor: ['#a8b6c3', '#fecab8', '#f1f1f1'],
                    hoverBackgroundColor: ['#004c6d', '#ff784c', '#607f97'],
                    hoverBorderColor: ['#004c6d', '#ff784c', '#607f97']
                }]
        };
    }
}
class ActivitiesBarChart extends ActivitiesChart {
    constructor() {
        super(...arguments);
        this.activitiesChartType = _enums_charts_enums__WEBPACK_IMPORTED_MODULE_0__.ActivitiesChartType.BAR;
    }
}
class ActivitiesLineChart extends ActivitiesChart {
    constructor(labels, datas, title) {
        super();
        this.activitiesChartType = _enums_charts_enums__WEBPACK_IMPORTED_MODULE_0__.ActivitiesChartType.LINE;
        this.activitiesChartLabels = labels;
        this.activitiesChartDatas = datas;
        this.titleChartConfig = {
            display: true,
            position: 'top',
            text: title ? title : '',
            color: '#004c6d'
        };
        this.activitiesChartOptions = {
            elements: {
                line: {
                    tension: 0.5
                }
            },
            scales: {
                // We use this empty structure as a placeholder for dynamic theming.
                x: {},
                'y-axis-0': {
                    position: 'left',
                }
            },
            responsive: true,
            plugins: {
                title: this.titleChartConfig,
                legend: {
                    display: true,
                    position: 'right'
                }
            }
        };
        const constructedDatasets = [];
        this.activitiesChartDatas.forEach(dataset => {
            const lineColor = this.chartColors.filter(color => color.activity === dataset.label);
            constructedDatasets.push({
                label: dataset.label,
                data: dataset.data,
                borderColor: lineColor[0].color,
                backgroundColor: lineColor[0].color
            });
        });
        this.activitiesChartDataset = {
            labels: this.activitiesChartLabels,
            datasets: constructedDatasets
        };
    }
}


/***/ }),

/***/ 9964:
/*!***************************************!*\
  !*** ./src/app/models/menus.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAINMENU": () => (/* binding */ MAINMENU)
/* harmony export */ });
const MAINMENU = [
    { label: 'Dashboard',
        routerLink: 'dashboard',
        icon: 'faDashboard'
    },
    {
        label: 'Mes activités',
        routerLink: 'activities',
        icon: 'biking'
    }
];


/***/ }),

/***/ 77445:
/*!********************************************!*\
  !*** ./src/app/models/responsive.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponsiveUi": () => (/* binding */ ResponsiveUi)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 39910);
/* harmony import */ var _enums_responsive_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/responsive.enum */ 71176);


class ResponsiveUi {
    constructor(bpo) {
        /**
         * Return the screen size as Breakpoints
         */
        this.getScreensize = () => {
            return this.breakpointObserver.observe([
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.XSmall,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Small,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Medium,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Large,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.XLarge,
            ]);
        };
        /**
         * Define if screen is big or small
         * @param currentScreenSize - size of the screen
         */
        this.isScreenIsBig = (currentScreenSize) => {
            return currentScreenSize === _enums_responsive_enum__WEBPACK_IMPORTED_MODULE_0__.ScreenSize.XLARGE || currentScreenSize === _enums_responsive_enum__WEBPACK_IMPORTED_MODULE_0__.ScreenSize.LARGE || currentScreenSize === _enums_responsive_enum__WEBPACK_IMPORTED_MODULE_0__.ScreenSize.MEDIUM;
        };
        this.breakpointObserver = bpo;
    }
}


/***/ }),

/***/ 29633:
/*!************************************************!*\
  !*** ./src/app/services/activities.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitiesService": () => (/* binding */ ActivitiesService)
/* harmony export */ });
/* harmony import */ var _enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/activity.enum */ 35355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);




class ActivitiesService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
    }
    getAllActivities(user) {
        return this.store.collection(_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.ACTIVITY, ref => ref.where('userEmail', '==', user)).snapshotChanges();
    }
    getActivity(idActivity) {
        return this.store.collection(_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.ACTIVITY).doc(idActivity).get({ source: 'server' });
    }
    addActivity(activity) {
        return this.store.collection(_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.ACTIVITY).add(activity);
    }
    deleteActivity(id) {
        return this.store.collection(_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.ACTIVITY).doc(id).delete();
    }
    updateActivity(id, updatedActivity) {
        return this.store.collection(_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.ACTIVITY).doc(id).set(updatedActivity);
    }
    getAverageSpeed(activity) {
        return this.store.collection(_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__.FirebaseCollections.ACTIVITY, ref => ref.where('activityName', '==', activity)).snapshotChanges();
    }
}
ActivitiesService.ɵfac = function ActivitiesService_Factory(t) { return new (t || ActivitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore)); };
ActivitiesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ActivitiesService, factory: ActivitiesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 27944:
/*!*************************************************************!*\
  !*** ./src/app/services/charts-data-computation.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsDataComputationService": () => (/* binding */ ChartsDataComputationService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ChartsDataComputationService {
    constructor() {
        /**
         * Format list of all activites to be ready for pie chart
         * @param data - array of all user activities
         */
        this.getCountByActivity = (data) => {
            const distinctActivities = [...new Set(data.map(item => item.activityName))];
            const arrayResults = [];
            distinctActivities.forEach((name) => {
                const mySum = data.reduce((acc, cur) => cur.activityName === name ? ++acc : acc, 0);
                arrayResults.push({ activityName: name, count: mySum });
            });
            return arrayResults;
        };
        /**
         * Format list of all activites to be ready for linechart
         * @param data - - array of all user activities
         */
        this.getAverageSpeedProgress = (data) => {
            const distinctActivities = [...new Set(data.map(item => item.activityName))];
            const arrayResults = data.map(item => {
                const activityMonthName = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(item.activityDate, 'MMM', 'fr');
                return {
                    activityName: item.activityName,
                    averageSpeed: Number(item.averageSpeed),
                    monthName: activityMonthName
                };
            });
            const distinctMonths = [...new Set(arrayResults.map(item => item.monthName))];
            const averageSpeedDatas = [];
            distinctActivities.forEach(a => {
                distinctMonths.forEach(m => {
                    const filteredItems = arrayResults.filter(element => element.monthName === m && element.activityName === a);
                    const filteredLength = filteredItems.length;
                    const mySum = arrayResults.reduce((acc, cur) => cur.monthName === m && cur.activityName === a ? acc += cur.averageSpeed : acc, 0);
                    averageSpeedDatas.push({
                        activityName: a,
                        averageSpeed: filteredLength > 0 ? mySum / filteredLength : 0,
                        monthName: m
                    });
                });
            });
            return averageSpeedDatas;
        };
    }
}
ChartsDataComputationService.ɵfac = function ChartsDataComputationService_Factory(t) { return new (t || ChartsDataComputationService)(); };
ChartsDataComputationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChartsDataComputationService, factory: ChartsDataComputationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 76311:
/*!*******************************************!*\
  !*** ./src/app/services/forms.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsService": () => (/* binding */ FormsService)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/forms.enum */ 77186);
/* harmony import */ var _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/activity.enum */ 35355);
/* harmony import */ var _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Regex.utils */ 43921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class FormsService {
    constructor() {
        /**
         * Return a form group from a list of ActivityFormControl
         * @param controlsList - list of controls
         */
        this.toFormGroup = (controlsList) => {
            const group = {};
            controlsList.forEach((question) => {
                const controlValidators = [];
                if (question.validationPattern) {
                    controlValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(question.validationPattern));
                }
                if (question.required) {
                    controlValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
                }
                if (question.max) {
                    controlValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(question.max));
                }
                if (question.min) {
                    controlValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(question.min));
                }
                group[question.controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(question.value || '', controlValidators);
            });
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup(group);
        };
        this.getControlsList = (activityName, activityInfo) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            this.controlsList = [
                {
                    controlName: 'activityDate',
                    required: true,
                    label: 'Date de l\'activité',
                    controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOXDATE,
                    order: 1,
                    value: (activityInfo === null || activityInfo === void 0 ? void 0 : activityInfo.activityDate)
                        ? new Date(activityInfo === null || activityInfo === void 0 ? void 0 : activityInfo.activityDate)
                        : new Date(),
                    disabled: false,
                },
                {
                    controlName: 'duration',
                    required: true,
                    label: 'Durée de l\'activité',
                    controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOXTIME,
                    order: 2,
                    value: (_a = activityInfo === null || activityInfo === void 0 ? void 0 : activityInfo.duration) !== null && _a !== void 0 ? _a : '',
                    disabled: false,
                },
                {
                    controlName: 'averageSpeed',
                    required: true,
                    validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.twoDecimalsRegex,
                    max: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMax.AVERAGE_SPEED,
                    label: 'Vitesse moyenne',
                    controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_DECIMAL,
                    order: 4,
                    value: (_b = activityInfo === null || activityInfo === void 0 ? void 0 : activityInfo.averageSpeed) !== null && _b !== void 0 ? _b : '',
                    disabled: false,
                    controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.SPEED,
                },
                {
                    controlName: 'maxSpeed',
                    required: true,
                    validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.twoDecimalsRegex,
                    max: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMax.MAX_SPEED,
                    label: 'Vitesse maximum',
                    controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_DECIMAL,
                    order: 5,
                    value: (_c = activityInfo === null || activityInfo === void 0 ? void 0 : activityInfo.maxSpeed) !== null && _c !== void 0 ? _c : '',
                    disabled: false,
                    controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.SPEED,
                },
                {
                    controlName: 'distance',
                    required: true,
                    validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.threeDecimalsRegex,
                    max: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMax.DISTANCE,
                    label: 'Distance',
                    controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_DECIMAL,
                    order: 3,
                    value: (_d = activityInfo === null || activityInfo === void 0 ? void 0 : activityInfo.distance) !== null && _d !== void 0 ? _d : '',
                    disabled: false,
                    controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.DISTANCE,
                },
                {
                    controlName: 'averageFc',
                    required: true,
                    validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.numberWithNoDecimals,
                    max: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMax.AVERAGE_FC,
                    label: 'Fréquence moyenne',
                    controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_NODECIMAL,
                    order: 6,
                    value: (_e = activityInfo === null || activityInfo === void 0 ? void 0 : activityInfo.averageFc) !== null && _e !== void 0 ? _e : '',
                    disabled: false,
                    controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.FC,
                },
                {
                    controlName: 'exerciceLoad',
                    required: true,
                    validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.numberWithNoDecimals,
                    label: 'Exercice load',
                    controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_NODECIMAL,
                    order: 10,
                    value: (_f = activityInfo === null || activityInfo === void 0 ? void 0 : activityInfo.exerciceLoad) !== null && _f !== void 0 ? _f : '',
                    disabled: false,
                },
                {
                    controlName: 'maxFc',
                    required: true,
                    validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.numberWithNoDecimals,
                    max: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMax.MAX_FC,
                    label: 'Fréquence maximum',
                    controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_NODECIMAL,
                    order: 7,
                    value: (_g = activityInfo === null || activityInfo === void 0 ? void 0 : activityInfo.maxFc) !== null && _g !== void 0 ? _g : '',
                    disabled: false,
                    controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.FC,
                },
                {
                    controlName: 'aerobie',
                    required: true,
                    validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.twoDecimalsRegex,
                    max: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMax.AEROBIE,
                    min: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMin.AEROBIE,
                    label: 'Aérobie',
                    controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_DECIMAL,
                    order: 8,
                    value: (_h = activityInfo === null || activityInfo === void 0 ? void 0 : activityInfo.aerobie) !== null && _h !== void 0 ? _h : '',
                    disabled: false,
                },
                {
                    controlName: 'anaerobique',
                    required: true,
                    validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.twoDecimalsRegex,
                    max: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMax.ANAEROBIQUE,
                    min: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMin.ANAEROBIQUE,
                    label: 'Anaérobique',
                    controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_DECIMAL,
                    order: 9,
                    value: (_j = activityInfo === null || activityInfo === void 0 ? void 0 : activityInfo.anaerobique) !== null && _j !== void 0 ? _j : '',
                    disabled: false,
                },
            ];
            this.addLastContolsFromActvitiyName(activityName, activityInfo);
            this.controlsList.push({
                controlName: 'activityName',
                required: true,
                label: 'Activité',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.GRAPHICAL,
                order: 0,
                value: activityName,
                disabled: true,
            });
            this.controlsList.sort((a, b) => a.order - b.order);
            return this.controlsList;
        };
        this.addVttControls = (activity) => {
            var _a, _b;
            this.controlsList.push({
                controlName: 'constance',
                validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.twoDecimalsRegex,
                max: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMax.CONSTANCE,
                min: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMin.CONSTANCE,
                required: true,
                label: 'Constance',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_DECIMAL,
                order: 11,
                value: (_a = activity === null || activity === void 0 ? void 0 : activity.constance) !== null && _a !== void 0 ? _a : '',
                disabled: false,
            });
            this.controlsList.push({
                controlName: 'difficulty',
                required: true,
                validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.twoDecimalsRegex,
                max: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMax.DIFFICULTY,
                min: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMin.DIFFICULTY,
                label: 'Difficulté',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_DECIMAL,
                order: 12,
                value: (_b = activity === null || activity === void 0 ? void 0 : activity.difficulty) !== null && _b !== void 0 ? _b : '',
                disabled: false,
            });
        };
        this.addVttaeControls = (activity) => {
            var _a, _b, _c, _d;
            this.controlsList.push({
                controlName: 'constance',
                validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.twoDecimalsRegex,
                max: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMax.CONSTANCE,
                min: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMin.CONSTANCE,
                required: true,
                label: 'Constance',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_DECIMAL,
                order: 11,
                value: (_a = activity === null || activity === void 0 ? void 0 : activity.constance) !== null && _a !== void 0 ? _a : '',
                disabled: false,
            });
            this.controlsList.push({
                controlName: 'difficulty',
                required: true,
                validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.twoDecimalsRegex,
                max: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMax.DIFFICULTY,
                min: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMin.DIFFICULTY,
                label: 'Difficulté',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_DECIMAL,
                order: 12,
                value: (_b = activity === null || activity === void 0 ? void 0 : activity.difficulty) !== null && _b !== void 0 ? _b : '',
                disabled: false,
            });
            this.controlsList.push({
                controlName: 'averageCadence',
                required: true,
                validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.numberWithNoDecimals,
                min: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMin.CADENCE,
                label: 'Cadence moyenne',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_NODECIMAL,
                order: 13,
                value: (_c = activity === null || activity === void 0 ? void 0 : activity.averageCadence) !== null && _c !== void 0 ? _c : '',
                disabled: false,
                controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.CADENCE,
            });
            this.controlsList.push({
                controlName: 'maxCadence',
                required: true,
                validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.numberWithNoDecimals,
                min: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMin.CADENCE,
                label: 'Cadence maximum',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_NODECIMAL,
                order: 14,
                value: (_d = activity === null || activity === void 0 ? void 0 : activity.maxCadence) !== null && _d !== void 0 ? _d : '',
                disabled: false,
                controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.CADENCE,
            });
        };
        this.addHometrainercontrols = (activity) => {
            var _a, _b, _c, _d, _e;
            this.controlsList.push({
                controlName: 'averagePower',
                required: true,
                validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.numberWithNoDecimals,
                min: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMin.POWER,
                label: 'Puissance moyenne',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_NODECIMAL,
                order: 11,
                value: (_a = activity === null || activity === void 0 ? void 0 : activity.averagePower) !== null && _a !== void 0 ? _a : '',
                disabled: false,
                controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.POWER,
            });
            this.controlsList.push({
                controlName: 'maxPower',
                required: true,
                validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.numberWithNoDecimals,
                min: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMin.POWER,
                label: 'Puissance maximum',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_NODECIMAL,
                order: 12,
                value: (_b = activity === null || activity === void 0 ? void 0 : activity.maxPower) !== null && _b !== void 0 ? _b : '',
                disabled: false,
                controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.POWER,
            });
            this.controlsList.push({
                controlName: 'averageCadence',
                required: true,
                validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.numberWithNoDecimals,
                min: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMin.CADENCE,
                label: 'Cadence moyenne',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_NODECIMAL,
                order: 13,
                value: (_c = activity === null || activity === void 0 ? void 0 : activity.averageCadence) !== null && _c !== void 0 ? _c : '',
                disabled: false,
                controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.CADENCE,
            });
            this.controlsList.push({
                controlName: 'maxCadence',
                required: true,
                validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.numberWithNoDecimals,
                min: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMin.CADENCE,
                label: 'Cadence maximum',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_NODECIMAL,
                order: 14,
                value: (_d = activity === null || activity === void 0 ? void 0 : activity.maxCadence) !== null && _d !== void 0 ? _d : '',
                disabled: false,
                controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.CADENCE,
            });
            this.controlsList.push({
                controlName: 'maxAveragePower',
                required: true,
                validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.numberWithNoDecimals,
                min: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityFieldsMin.POWER,
                label: 'Puissance moyenne maximum',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_NODECIMAL,
                order: 15,
                value: (_e = activity === null || activity === void 0 ? void 0 : activity.maxAveragePower) !== null && _e !== void 0 ? _e : '',
                disabled: false,
                controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.POWER,
            });
        };
        this.addRameurControls = (activity) => {
            var _a, _b, _c, _d;
            this.controlsList.push({
                controlName: 'averageStrokesfrequency',
                required: true,
                validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.numberWithNoDecimals,
                label: 'Fréquence moyenne de coups',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_NODECIMAL,
                order: 11,
                value: (_a = activity === null || activity === void 0 ? void 0 : activity.averageStrokesfrequency) !== null && _a !== void 0 ? _a : '',
                disabled: false,
                controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.FREQUENCE_COUPS,
            });
            this.controlsList.push({
                controlName: 'maxStrokesFrequency',
                required: true,
                validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.numberWithNoDecimals,
                label: 'Fréquence max de coups',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_NODECIMAL,
                order: 12,
                value: (_b = activity === null || activity === void 0 ? void 0 : activity.maxStrokesFrequency) !== null && _b !== void 0 ? _b : '',
                disabled: false,
                controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.FREQUENCE_COUPS,
            });
            this.controlsList.push({
                controlName: 'averagePace',
                required: true,
                validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.twoDecimalsRegex,
                label: 'Allure moyenne',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_DECIMAL,
                order: 13,
                value: (_c = activity === null || activity === void 0 ? void 0 : activity.averagePace) !== null && _c !== void 0 ? _c : '',
                disabled: false,
                controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.ALLURE,
            });
            this.controlsList.push({
                controlName: 'strokes',
                required: true,
                validationPattern: _utils_Regex_utils__WEBPACK_IMPORTED_MODULE_2__.numberWithNoDecimals,
                label: 'Nombre de coups ',
                controlType: _enums_forms_enum__WEBPACK_IMPORTED_MODULE_0__.ControlType.TEXTBOX_NODECIMAL,
                order: 14,
                value: (_d = activity === null || activity === void 0 ? void 0 : activity.strokes) !== null && _d !== void 0 ? _d : '',
                disabled: false,
                controlUnit: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivityUnits.STROKES,
            });
        };
        this.addLastContolsFromActvitiyName = (activityName, activityInfo) => {
            switch (activityName) {
                case _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivitiesNameLabel.VTT:
                    this.addVttControls(activityInfo);
                    break;
                case _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivitiesNameLabel.ROWER:
                    this.addRameurControls(activityInfo);
                    break;
                case _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivitiesNameLabel.VELO_INSIDE:
                    this.addHometrainercontrols(activityInfo);
                    break;
                case _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__.ActivitiesNameLabel.VTTAE:
                    this.addVttaeControls(activityInfo);
                    break;
                default:
                    break;
            }
        };
    }
}
FormsService.ɵfac = function FormsService_Factory(t) { return new (t || FormsService)(); };
FormsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: FormsService, factory: FormsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 21864:
/*!*********************************************!*\
  !*** ./src/app/services/general.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralService": () => (/* binding */ GeneralService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class GeneralService {
    constructor() {
        this.loadingActivityDetected = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.activityLoadingStatuschange = this.loadingActivityDetected.asObservable();
        /**
         * Send the change loading status information
         * @param status - is loading or is not loading
         */
        this.sendLoadingActivityChangeInformation = (status) => {
            this.loadingActivityDetected.next(status);
        };
    }
}
GeneralService.ɵfac = function GeneralService_Factory(t) { return new (t || GeneralService)(); };
GeneralService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GeneralService, factory: GeneralService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 12013:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _components_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/shared/alert/alert.component */ 58192);
/* harmony import */ var _models_alerts_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/alerts.model */ 20153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);




class NotificationService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.alertConfig = {
            data: {},
            duration: 6000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
        };
        this.success = (textToDisplay) => {
            this.alertConfig.data = { message: textToDisplay, alertType: _models_alerts_model__WEBPACK_IMPORTED_MODULE_1__.AlertType.SUCCESS };
            this.snackBar.openFromComponent(_components_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, this.alertConfig);
        };
        this.failure = (textToDisplay) => {
            this.alertConfig.data = { message: textToDisplay, alertType: _models_alerts_model__WEBPACK_IMPORTED_MODULE_1__.AlertType.FAILURE };
            this.snackBar.openFromComponent(_components_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, this.alertConfig);
        };
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 16730:
/*!**************************************!*\
  !*** ./src/app/utils/Datas.utils.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firestoreDatasTransformation": () => (/* binding */ firestoreDatasTransformation),
/* harmony export */   "getMaximumValue": () => (/* binding */ getMaximumValue)
/* harmony export */ });
/**
 * Transform result of firebase query into an array of numbers
 * @param source - result of firebase query
 */
function firestoreDatasTransformation(source) {
    return source.map(item => Object.assign({ id: item.payload.doc.id }, item.payload.doc.data()));
}
/**
 * get maximum value of numbers array
 * @param values - array of numbers
 */
function getMaximumValue(values) {
    return values.reduce((a, b) => (a > b ? a : b));
}


/***/ }),

/***/ 43921:
/*!**************************************!*\
  !*** ./src/app/utils/Regex.utils.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numberWithNoDecimals": () => (/* binding */ numberWithNoDecimals),
/* harmony export */   "threeDecimalsRegex": () => (/* binding */ threeDecimalsRegex),
/* harmony export */   "twoDecimalsRegex": () => (/* binding */ twoDecimalsRegex)
/* harmony export */ });
/**
 * see explanation field on https://regex101.com/
 */
const twoDecimalsRegex = /^(?:\d+(?:[.]|,)*)?\d{1,2}$/;
/**
 * see explanation field on https://regex101.com/
 */
const threeDecimalsRegex = /^(?:\d+(?:[.]|,)*)?\d{1,3}$/;
/**
 * see explanation field on https://regex101.com/
 */
const numberWithNoDecimals = /^[1-9][\d]*$/;


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _auth_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth_config.json */ 7287);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const domain = _auth_config_json__WEBPACK_IMPORTED_MODULE_0__.domain;
const clientId = _auth_config_json__WEBPACK_IMPORTED_MODULE_0__.clientId;
const environment = {
    production: false,
    serverUrl: 'http://localhost:8081',
    auth: {
        domain,
        clientId,
        redirectUri: window.location.origin
    },
    firebase: {
        apiKey: 'AIzaSyCpxVNI6UOKaznCamucwLnuu9VQJDhe9s0',
        authDomain: 'the-garmin-experience.firebaseapp.com',
        projectId: 'the-garmin-experience',
        storageBucket: 'the-garmin-experience.appspot.com',
        messagingSenderId: '976001018044',
        appId: '1:976001018044:web:6ef062e821f18b1b82c8b9'
    }
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 74169,
	"./me.js": 74169,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 7287:
/*!**************************!*\
  !*** ./auth_config.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"domain":"dev-poesl-su.eu.auth0.com","clientId":"BtyiRBtgbc7aY9PwoyOISOTFhKePQVr7"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map