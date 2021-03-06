System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WelcomeComponent = (function () {
                function WelcomeComponent() {
                    this.moreInfo = false;
                }
                WelcomeComponent.prototype.showMoreInfo = function (moreInfo) {
                    this.moreInfo = !moreInfo;
                };
                WelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'welcome-component',
                        template: "\n\t\t<div class=\"jumbotron\">\n\t\t\t<h1>Welcome to MyMusic app</h1>\n\t\t\t<p></p>\n\t\t\t<p><a class=\"btn btn-primary btn-lg\" role=\"button\" (click)=\"showMoreInfo(moreInfo)\" *ngIf=\"!moreInfo\">Learn more</a></p>\n\t\t\t<div *ngIf=\"moreInfo\">\n\t\t\t\t<p>Applicatin made with Angular 2</p>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});
//# sourceMappingURL=welcome.component.js.map