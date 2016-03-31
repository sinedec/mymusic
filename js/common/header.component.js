System.register(['angular2/core', 'angular2/router', '../user/services/user.srv', './search.component'], function(exports_1, context_1) {
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
    var core_1, router_1, user_srv_1, search_component_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_srv_1_1) {
                user_srv_1 = user_srv_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(userService, router) {
                    var _this = this;
                    this.userService = userService;
                    this.router = router;
                    this.userService.getUser()
                        .subscribe(function (user) {
                        _this.user = user;
                    });
                }
                HeaderComponent.prototype.search = function ($event) {
                    this.router.navigate(["Albums", { query: $event, page: 0 }]);
                };
                HeaderComponent.prototype.logout = function () {
                    var _this = this;
                    this.userService.logout()
                        .subscribe(function () {
                        _this.router.navigateByUrl("/");
                    });
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header-component',
                        template: "\n\t\t<nav class=\"navbar navbar-inverse header-component\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"navbar-header\">\n\t              <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n\t                <span class=\"sr-only\">Toggle navigation</span>\n\t                <span class=\"icon-bar\"></span>\n\t                <span class=\"icon-bar\"></span>\n\t                <span class=\"icon-bar\"></span>\n\t              </button>\n\t              <a class=\"navbar-brand\" href=\"#\">MyMusic</a>\n            \t</div>\n\n\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\t              <form class=\"navbar-form navbar-left\" role=\"search\">\n\t                <search-component (searchChange)=\"search($event)\"></search-component>\n\t              </form>\n\t              <ul class=\"nav navbar-nav navbar-right\">\n\t                <li><button type=\"button\" class=\"btn btn-info navbar-btn\" *ngIf=\"!user\" [routerLink]=\"['Login']\">Login</button></li>\n\t                <li><button type=\"button\" class=\"btn btn-success navbar-btn\" *ngIf=\"!user\" [routerLink]=\"['Register']\">Register</button></li>\n\t                <li><a href=\"#\" *ngIf=\"user\">{{ user.email }}</a></li>\n\t                <li><a href=\"#\" *ngIf=\"user\" (click)=\"logout()\">Logout</a></li>\n\t              </ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t",
                        providers: [user_srv_1.UserService],
                        directives: [router_1.ROUTER_DIRECTIVES, search_component_1.SearchComponent],
                        styles: ["\n\t\t.header-component .navbar-nav .btn {\n\t\t\tmargin-left: 1em;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [user_srv_1.UserService, router_1.Router])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map