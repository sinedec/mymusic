System.register(['angular2/core', 'angular2/router', './models/ialbum', './services/music.srv', '../common/pagination.component', '../common/directive/highlight.directive'], function(exports_1, context_1) {
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
    var core_1, router_1, ialbum_1, music_srv_1, pagination_component_1, highlight_directive_1;
    var AlbumsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ialbum_1_1) {
                ialbum_1 = ialbum_1_1;
            },
            function (music_srv_1_1) {
                music_srv_1 = music_srv_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            AlbumsComponent = (function () {
                function AlbumsComponent(musicService, routeParams) {
                    this.musicService = musicService;
                    this.routeParams = routeParams;
                    this.albumImageSize = ialbum_1.AlbumImageSize.MEDIUM;
                    this.albums = [];
                    this.albumsSearch(this.routeParams.get("query"), this.routeParams.get("page"));
                }
                AlbumsComponent.prototype.albumsSearch = function (query, page) {
                    var _this = this;
                    this.musicService.albumsSearch(query, page)
                        .subscribe(function (results) {
                        _this.albums = results.albums;
                        _this.pager = results.pager;
                    });
                };
                AlbumsComponent = __decorate([
                    core_1.Component({
                        selector: 'albums-component',
                        template: "\n\t\t<div class=\"container\">\n\t\t\t<ul class=\"media-list\">\n\t              <li class=\"media\" *ngFor=\"#album of albums\" [routerLink]=\"['Album', { id : album.id }]\" highlight [hoverColor]=\"'whitesmoke'\" [activeColor]=\"'gray'\">\n\t                <div class=\"media-left\">\n\t                  <a href=\"#\">\n\t                    <img class=\"media-object\" [src]=\"album.getImage(albumImageSize)\" >\n\t                  </a>\n\t                </div>\n\t                <div class=\"media-body\">\n\t                  <h4 class=\"media-heading\">{{album.name}}</h4>\n\t                  {{album.artist}}\n\t                </div>\n\t              </li>\n\t        </ul>\n\t        <pagination-component [pager]=\"pager\" [pathName]=\"'Albums'\"></pagination-component>\n        </div>\n\t",
                        providers: [music_srv_1.MusicService],
                        directives: [router_1.ROUTER_DIRECTIVES, highlight_directive_1.HighlightDirective, pagination_component_1.PaginationComponent],
                        styles: ["\n\t\t.container {\n\t\t\tmargin-bottom: 60px;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [music_srv_1.MusicService, router_1.RouteParams])
                ], AlbumsComponent);
                return AlbumsComponent;
            }());
            exports_1("AlbumsComponent", AlbumsComponent);
        }
    }
});
//# sourceMappingURL=albums.component.js.map