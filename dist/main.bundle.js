webpackJsonp([1,5],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ds_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(dsService) {
        this.dsService = dsService;
        this.albums = [
            {
                id: 1,
                title: 'The Chief',
                category: 'Hip/Hop',
                year: '2017',
                artist: 'Jidenna'
            },
            {
                id: 2,
                title: 'The Playmaker',
                category: 'Afro Hip/Hop',
                year: '2016',
                artist: 'Phyno'
            }
        ];
        this.tracks = [
            {
                title: 'Bambi',
                number: 4,
                duration: '4:10',
                albumId: 1
            },
            {
                title: 'Little Bit More',
                number: 11,
                duration: '3:26',
                albumId: 1
            },
            {
                title: 'The Let Out',
                number: 8,
                duration: '3:43',
                albumId: 1
            },
            {
                title: 'Mistakes',
                number: 14,
                duration: '4:15',
                albumId: 2
            },
            {
                title: 'So Far So Good (SFSG)',
                number: 12,
                duration: '4:03',
                albumId: 2
            }
        ];
    }
    DataService.prototype.getTracks = function () {
        return this.tracks.sort(function (a, b) {
            if (a.number < b.number)
                return -1;
            if (a.number > b.number)
                return 1;
            return 0;
        });
    };
    DataService.prototype.getAlbums = function () {
        return this.albums.sort(function (a, b) {
            if (a.title < b.title)
                return -1;
            if (a.title > b.title)
                return 1;
            return 0;
        });
    };
    DataService.prototype.addAlbum = function (album) {
        this.albums.push(album);
    };
    DataService.prototype.updateAlbum = function (album) {
        var index = this.albums.findIndex(function (a) { return a.id === album.id; });
        this.albums[index] = album;
    };
    DataService.prototype.getTracksByAlbumId = function (id) {
        return this.tracks.filter(function (track) { return track.albumId == id; });
    };
    DataService.prototype.addTrack = function (tracks) {
        var _this = this;
        tracks.forEach(function (v) {
            _this.tracks.push(v);
        });
    };
    DataService.prototype.updateTrack = function (tracks) {
        var _this = this;
        tracks.forEach(function (v, i) {
            var index = tracks.findIndex(function (t) { return t.number === v.number; });
            debugger;
            _this.tracks[index] = v;
            debugger;
        });
    };
    DataService.prototype.deleteAlbumTracks = function (id) {
        var _this = this;
        var albumIndex = this.albums.findIndex(function (a) { return a.id === id; });
        this.albums.splice(albumIndex, 1);
        this.tracks.forEach(function (v, i) {
            if (v.albumId == id) {
                _this.tracks.splice(i, 1);
            }
        });
        if (this.albums[albumIndex - 1]) {
            this.dsService.dsInstance.event.emit('update-tracklist', this.albums[albumIndex - 1].id);
        }
        else {
            this.dsService.dsInstance.event.emit('update-tracklist', this.albums[albumIndex].id);
        }
    };
    DataService.prototype.getAlbumTracks = function (albumId) {
        var album = this.albums.filter(function (album) { return album.id == albumId; })[0];
        var tracks = this.tracks.filter(function (track) { return track.albumId == albumId; });
        var albumTracks = Object.assign({}, album, { tracks: tracks });
        console.debug('new state', albumTracks);
        return albumTracks;
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ds_service__["a" /* DsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ds_service__["a" /* DsService */]) === 'function' && _a) || Object])
    ], DataService);
    return DataService;
    var _a;
}());
//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/data.service.js.map

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/data.js.map

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 358;


/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(471);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/main.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_data__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbumItemComponent = (function () {
    function AlbumItemComponent() {
        this.albumClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
    }
    AlbumItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data__["Album"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_data__["Album"]) === 'function' && _a) || Object)
    ], AlbumItemComponent.prototype, "album", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(), 
        __metadata('design:type', Object)
    ], AlbumItemComponent.prototype, "albumClick", void 0);
    AlbumItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-album-item',
            template: __webpack_require__(656),
            styles: [__webpack_require__(650)]
        }), 
        __metadata('design:paramtypes', [])
    ], AlbumItemComponent);
    return AlbumItemComponent;
    var _a;
}());
//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/album-item.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ds_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumListComponent = (function () {
    function AlbumListComponent(dsService, dataService) {
        this.dsService = dsService;
        this.dataService = dataService;
    }
    AlbumListComponent.prototype.ngOnInit = function () {
        this.albums = this.dataService.getAlbums();
    };
    AlbumListComponent.prototype.updateTrackList = function (id) {
        this.dsService.dsInstance.event.emit('update-tracklist', id);
    };
    AlbumListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-album-list',
            template: __webpack_require__(657),
            styles: [__webpack_require__(651)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_ds_service__["a" /* DsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_ds_service__["a" /* DsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === 'function' && _b) || Object])
    ], AlbumListComponent);
    return AlbumListComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/album-list.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__album_list_album_list_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__album_item_album_item_component__ = __webpack_require__(467);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumModule = (function () {
    function AlbumModule() {
    }
    AlbumModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__album_list_album_list_component__["a" /* AlbumListComponent */],
                __WEBPACK_IMPORTED_MODULE_3__album_item_album_item_component__["a" /* AlbumItemComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__album_list_album_list_component__["a" /* AlbumListComponent */],
                __WEBPACK_IMPORTED_MODULE_3__album_item_album_item_component__["a" /* AlbumItemComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AlbumModule);
    return AlbumModule;
}());
//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/album.module.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ds_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(dataService, dsService) {
        this.dataService = dataService;
        this.dsService = dsService;
        this.showModalInfo = {
            showModal: false,
            payload: {}
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dsService.dsInstance.event.subscribe('update-tracklist', function (id) {
            _this.albumTracks = _this.dataService.getTracksByAlbumId(id);
        });
    };
    AppComponent.prototype.showModal = function (payload) {
        // debugger
        this.showModalInfo = { showModal: true, payload: payload };
    };
    AppComponent.prototype.add = function () {
        this.showModal();
    };
    AppComponent.prototype.edit = function (id) {
        this.showModal({ editing: true });
        this.dsService.event.emit('edit-album', id);
    };
    AppComponent.prototype.deleteAlbum = function (id) {
        this.dsService.event.emit('delete-album', id);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(658),
            styles: [__webpack_require__(652)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_ds_service__["a" /* DsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_ds_service__["a" /* DsService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/app.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__album_album_module__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__track_track_module__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__ = __webpack_require__(473);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__album_album_module__["a" /* AlbumModule */],
                __WEBPACK_IMPORTED_MODULE_6__track_track_module__["a" /* TrackModule */],
                __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["a" /* ModalModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/app.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ds_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalComponent = (function () {
    function ModalComponent(fb, dsService, dataService) {
        this.fb = fb;
        this.dsService = dsService;
        this.dataService = dataService;
        this.editing = this.showModalInfo && this.showModalInfo.payload && this.showModalInfo.payload.editing;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modalForm = this.fb.group({
            id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            title: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            category: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            artist: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            tracks: this.fb.array([
                this.initTracks(),
            ])
        });
        this.tracksControls = this.modalForm.controls['tracks'];
        this.dsService.event.subscribe('edit-album', function (id) {
            _this.defaults = _this.dataService.getAlbumTracks(id);
            var tracks = _this.defaults.tracks;
            if (tracks) {
                console.log(tracks);
                tracks.forEach(function () {
                    _this.tracksControls.controls.push(_this.initTracks());
                });
                _this.tracksControls.patchValue(tracks);
            }
        });
        this.dsService.dsInstance.event.subscribe('update-album', function (album) {
            _this.dataService.updateAlbum(album);
        });
        this.dsService.dsInstance.event.subscribe('new-album', function (album) {
            _this.dataService.addAlbum(album);
        });
        this.dsService.dsInstance.event.subscribe('update-tracks', function (tracks) {
            _this.dataService.updateTrack(tracks);
        });
        this.dsService.dsInstance.event.subscribe('new-tracks', function (tracks) {
            _this.dataService.addTrack(tracks);
        });
        this.dsService.dsInstance.event.subscribe('delete-album', function (id) {
            _this.dataService.deleteAlbumTracks(id);
        });
    };
    ModalComponent.prototype.initTracks = function () {
        return this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            number: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            duration: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            albumId: ['']
        });
    };
    ModalComponent.prototype.addTrack = function () {
        var control = this.modalForm.controls['tracks'];
        control.push(this.initTracks());
    };
    ModalComponent.prototype.removeTrack = function (i) {
        var control = this.modalForm.controls['tracks'];
        control.removeAt(i);
    };
    ModalComponent.prototype.save = function (values) {
        this.saveAlbum(values).saveTracks(values).hideModal();
    };
    ModalComponent.prototype.saveAlbum = function (values) {
        var clonedValues = Object.assign({}, values);
        delete clonedValues.tracks;
        if (this.editing) {
            this.dsService.dsInstance.event.emit('update-album', clonedValues);
        }
        else {
            this.dsService.dsInstance.event.emit('new-album', clonedValues);
        }
        return this;
    };
    ModalComponent.prototype.saveTracks = function (values) {
        if (this.editing) {
            this.dsService.dsInstance.event.emit('update-tracks', values.tracks);
        }
        else {
            this.dsService.dsInstance.event.emit('new-tracks', values.tracks);
        }
        return this;
    };
    ModalComponent.prototype.hideModal = function () {
        this.showModalInfo.showModal = false;
        for (var i = 0; i <= this.tracksControls.length; i++) {
            this.tracksControls.removeAt(i);
        }
        this.modalForm.reset();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(), 
        __metadata('design:type', Object)
    ], ModalComponent.prototype, "showModalInfo", void 0);
    ModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-modal',
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* trigger */])('modal', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* style */])({
                        'transform': 'translateY(-100%)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* transition */])('* => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* animate */])(500))
                ])
            ],
            template: __webpack_require__(659),
            styles: [__webpack_require__(653)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_ds_service__["a" /* DsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_ds_service__["a" /* DsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* DataService */]) === 'function' && _c) || Object])
    ], ModalComponent);
    return ModalComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/modal.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(190);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalModule);
    return ModalModule;
}());
//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/modal.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ds_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__ds_service__["a" /* DsService */]]
        };
    };
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: []
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/shared.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_data__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackItemComponent = (function () {
    function TrackItemComponent() {
    }
    TrackItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data__["Track"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_data__["Track"]) === 'function' && _a) || Object)
    ], TrackItemComponent.prototype, "track", void 0);
    TrackItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-track-item',
            template: __webpack_require__(660),
            styles: [__webpack_require__(654)]
        }), 
        __metadata('design:paramtypes', [])
    ], TrackItemComponent);
    return TrackItemComponent;
    var _a;
}());
//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/track-item.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ds_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrackListComponent = (function () {
    function TrackListComponent(dataService, dsService) {
        this.dataService = dataService;
        this.dsService = dsService;
    }
    TrackListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tracks = this.dataService.getTracks();
        this.dsService.dsInstance.event.subscribe('update-tracklist', function (id) {
            _this.tracks = _this.dataService.getTracksByAlbumId(id);
        });
    };
    TrackListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-track-list',
            template: __webpack_require__(661),
            styles: [__webpack_require__(655)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_ds_service__["a" /* DsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_ds_service__["a" /* DsService */]) === 'function' && _b) || Object])
    ], TrackListComponent);
    return TrackListComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/track-list.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__track_list_track_list_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__track_item_track_item_component__ = __webpack_require__(475);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrackModule = (function () {
    function TrackModule() {
    }
    TrackModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__track_list_track_list_component__["a" /* TrackListComponent */],
                __WEBPACK_IMPORTED_MODULE_3__track_item_track_item_component__["a" /* TrackItemComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__track_list_track_list_component__["a" /* TrackListComponent */],
                __WEBPACK_IMPORTED_MODULE_3__track_item_track_item_component__["a" /* TrackItemComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TrackModule);
    return TrackModule;
}());
//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/track.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/environment.js.map

/***/ }),

/***/ 650:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 651:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 652:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 653:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 654:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 655:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 656:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" (click)=\"albumClick.emit(album.id)\">\n  <div class=\"col-md-4 col-lg-4 col-sm-4 card__image\">\n    <img src=\"http://placehold.it/500x500\" alt=\"\" class=\"img-responsive\">\n  </div>\n  <div class=\"col-md-8 col-lg-8 col-sm-8 card__content\">\n    <h4>{{album.title}}</h4>\n    <h6>{{album.artist}}</h6>\n    <p>{{album.category}} | {{album.year}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 657:
/***/ (function(module, exports) {

module.exports = "<app-album-item\n  *ngFor=\"let album of albums\"\n  [album]=\"album\"\n  (albumClick)=\"updateTrackList($event)\"\n></app-album-item>\n"

/***/ }),

/***/ 658:
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  <div class=\"container\">\n    <h1>Our Album Manager</h1>\n    <div class=\"col-md-4 cards\">\n      <!-- Albums -->\n      <app-album-list></app-album-list>\n    </div>\n    <div class=\"col-md-8 tracks\">\n      <h3>Short Album Title</h3>\n      <h4>Artist Name</h4>\n      <p>hip/hop | 2017</p>\n      <div class=\"album__options\">\n        <button id=\"new\" (click)=\"add()\"><span class=\"glyphicon glyphicon-file\"></span> New Album</button>\n        <button *ngIf=\"albumTracks\" (click)=\"edit(albumTracks[0].albumId)\"><span class=\"glyphicon glyphicon-edit\"></span> Edit </button>\n        <button *ngIf=\"albumTracks\" (click)=\"deleteAlbum(albumTracks[0].albumId)\"><span class=\"glyphicon glyphicon-trash\"></span> Delete </button>\n      </div>\n      <!-- Tracks -->\n      <app-track-list></app-track-list>\n    </div>\n  </div>\n</div>\n\n<app-modal [showModalInfo]=\"showModalInfo\"></app-modal>\n"

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"showModalInfo.showModal\" (click)=\"hideModal()\"></div>\n\n<div class=\"md animate slideInDown\" [@modal]=\"modal\" *ngIf=\"showModalInfo.showModal\">\n  <div class=\"container\">\n    <form [formGroup]=\"modalForm\" (ngSubmit)=\"save(modalForm.value)\">\n    <div class=\"col-md-4\">\n      <h3>Add Albums</h3>\n        <div class=\"form-group\">\n          <label>#</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"id\" placeholder=\"ID\" [ngModel]=\"defaults?.id\">\n          <small *ngIf=\"!modalForm.controls.id.valid && !modalForm.controls.id.pristine\" class=\"text-danger\">\n            Title is required.\n          </small>\n        </div>\n        <div class=\"form-group\">\n          <label>Title</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"title\" placeholder=\"Title\" [ngModel]=\"defaults?.title\">\n          <small *ngIf=\"!modalForm.controls.title.valid && !modalForm.controls.title.pristine\" class=\"text-danger\">\n            Title is required.\n          </small>\n        </div>\n        <div class=\"form-group\">\n          <label>Artist</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"artist\" placeholder=\"Artist\" [ngModel]=\"defaults?.artist\">\n          <small *ngIf=\"!modalForm.controls.artist.valid && !modalForm.controls.artist.pristine\" class=\"text-danger\">\n            Artist name is required.\n          </small>\n        </div>\n        <div class=\"form-group\">\n          <label>Category</label>\n          <select formControlName=\"category\" class=\"form-control\" [ngModel]=\"defaults?.category\">\n            <option value=\"Hip/Hop\">Hip/Hop</option>\n            <option value=\"RnB\">RnB</option>\n            <option value=\"Afro Hip/Hop\">Afro Hip/Hop</option>\n          </select>\n          <small *ngIf=\"!modalForm.controls.category.valid && !modalForm.controls.category.pristine\" class=\"text-danger\">\n            Category is required.\n          </small>\n        </div>\n        <div class=\"form-group\">\n          <label>Year</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"year\" placeholder=\"Year\" [ngModel]=\"defaults?.year\">\n          <small *ngIf=\"!modalForm.controls.year.valid && !modalForm.controls.year.pristine\" class=\"text-danger\">\n            Year is required.\n          </small>\n        </div>\n    </div>\n    <div class=\"col-md-8\" formArrayName=\"tracks\" class=\"tracks__form\">\n      <h3>Add Album Tracks</h3>\n        <div *ngFor=\"let track of modalForm.controls.tracks.controls; let i = index\">\n          <div>\n            <span>Track {{i + 1}}</span>\n            <a *ngIf=\"modalForm.controls.tracks.controls.length > 1\"\n                  (click)=\"removeTrack(i)\" class=\"text-danger\"> Remove\n            </a>\n          </div>\n          <div [formGroupName]=\"i\">\n            <input type=\"hidden\" formControlName=\"albumId\" [ngModel]=\"modalForm.controls.id.value\">\n            <div class=\"form-group\">\n              <label>Number</label>\n              <input type=\"number\" class=\"form-control\" formControlName=\"number\" placeholder=\"Number\">\n              <small\n                *ngIf=\"!modalForm.controls.tracks.controls[i].controls.number.valid && !modalForm.controls.tracks.controls[i].controls.number.pristine\"\n                class=\"text-danger\"\n              >\n                Number is required\n              </small>\n            </div>\n            <div class=\"form-group\">\n              <label>Title</label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"title\" placeholder=\"Title\">\n              <small\n                *ngIf=\"!modalForm.controls.tracks.controls[i].controls.title.valid && !modalForm.controls.tracks.controls[i].controls.title.pristine\"\n                class=\"text-danger\">\n                Title is required\n              </small>\n            </div>\n            <div class=\"form-group\">\n              <label>Duration</label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"duration\" placeholder=\"Duration\">\n              <small\n                *ngIf=\"!modalForm.controls.tracks.controls[i].controls.duration.valid && !modalForm.controls.tracks.controls[i].controls.duration.pristine\"\n                class=\"text-danger\">\n                Duration\n              </small>\n            </div>\n          </div>\n        </div>\n      {{modalForm.value | json}}\n        <a (click)=\"addTrack()\">\n          Add another address +\n        </a>\n        <div class=\"form-group\">\n          <button type=\"submit\" [disabled]=\"!modalForm.valid\" class=\"btn btn-primary\">Submit</button>\n        </div>\n    </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = "<a class=\"track\">\n  <span class=\"track__number\">{{track.number}}. </span>\n  <span class=\"track__title\"> {{track.title}} </span>\n  <span class=\"track__duration\">{{track.duration}}</span>\n</a>\n\n"

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

module.exports = "<div class=\"tracks__item\">\n  <app-track-item *ngFor=\"let track of tracks\" [track]=\"track\"></app-track-item>\n</div>\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(359);


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_deepstream_io_client_js__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_deepstream_io_client_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_deepstream_io_client_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DsService = (function () {
    function DsService() {
    }
    Object.defineProperty(DsService.prototype, "dsInstance", {
        get: function () {
            // return deepstream('wss://154.deepstreamhub.com?apiKey=97a397bd-ccd2-498f-a520-aacc9f67373c').login()
            return __WEBPACK_IMPORTED_MODULE_1_deepstream_io_client_js__('localhost:6020').login();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DsService.prototype, "event", {
        get: function () {
            return this.dsInstance.event;
        },
        enumerable: true,
        configurable: true
    });
    DsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], DsService);
    return DsService;
}());
//# sourceMappingURL=/Users/chrisnwamba/Projects/DS/example-apps/album-collection/src/ds.service.js.map

/***/ })

},[679]);
//# sourceMappingURL=main.bundle.map