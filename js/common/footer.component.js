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
    var FooterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FooterComponent = (function () {
                function FooterComponent() {
                    this.year = (new Date()).getFullYear();
                }
                FooterComponent = __decorate([
                    core_1.Component({
                        selector: 'footer-component',
                        template: "\n\t\t<footer class=\"footer\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<a class=\"text-muted\" href=\"/\">Denis Vasiliev {{year}}</a>\n\t\t\t\t<a class=\"text-muted\" href=\"https://www.facebook.com/denismagician\" target=\"_blank\"><i class=\"fa fa-facebook\"></i>Facebook</a>\n\t\t\t</div>\n\t\t</footer>\n\t",
                        styles: ["\n\t\tfooter {\n\n\t\t\tposition: absolute;\n\t\t\tbottom: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 60px;\n\t\t\tbackground-color: #f5f5f5;\n\t\t}\n\t\t.container{\n\t\t\theight: 60px;\n\t\t}\n\t\ta {\n\t\t\theight: 60px;\n\t\t\tline-height: 60px;\n\t\t\tmargin-right: 5em;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FooterComponent);
                return FooterComponent;
            }());
            exports_1("FooterComponent", FooterComponent);
        }
    }
});
//# sourceMappingURL=footer.component.js.map