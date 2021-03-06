"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var header_component_1 = require('./header/header.component');
var footer_component_1 = require('./footer/footer.component');
var context_menu_component_1 = require("../../core/menu/context-menu.component");
var context_menu_service_1 = require("../../core/services/context-menu.service");
var template_component_1 = require("./template/template.component");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule
            ],
            declarations: [
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                template_component_1.TemplateComponent,
                context_menu_component_1.ContextMenuComponent
            ],
            providers: [
                context_menu_service_1.ContextMenuService
            ],
            exports: [
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                template_component_1.TemplateComponent,
                context_menu_component_1.ContextMenuComponent
            ],
            entryComponents: [context_menu_component_1.ContextMenuComponent]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
