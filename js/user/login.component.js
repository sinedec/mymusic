System.register(['angular2/core', 'angular2/router', './services/user.srv'], function(exports_1, context_1) {
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
    var core_1, router_1, user_srv_1;
    var LoginComponent;
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
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(userService, router) {
                    this.userService = userService;
                    this.router = router;
                }
                LoginComponent.prototype.login = function (email, password) {
                    var _this = this;
                    this.userService.login(email, password)
                        .subscribe(function (user) {
                        _this.router.navigateByUrl("/");
                    }, function (error) {
                        _this.error = error;
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login-component',
                        template: "\n\t\t<form #loginForm=\"ngForm\">\n\t\t\t<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">{{error}}</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"emailInput\">Email address</label>\n\t\t\t\t<input type=\"email\" id=\"emailInput\" placeholder=\"Email\" class=\"form-control\" required ngControl=\"userName\" #email=\"ngForm\"/>\n\t\t\t\t<div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">Email required</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t<input type=\"password\" placeholder=\"Password\" class=\"form-control\" required ngControl=\"password\" #password=\"ngForm\"/>\n\t\t\t\t<div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">Password required</div>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn btn-devault\" (click)=\"login(email.value, password.value)\" [disabled]=\"!loginForm.form.valid\">Login</button>\n\t\t</form>\n\t",
                        providers: [user_srv_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_srv_1.UserService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map