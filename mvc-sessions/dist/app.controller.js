"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const login_guard_1 = require("./common/guards/login.guard");
const authenticated_guard_1 = require("./common/guards/authenticated.guard");
const auth_exceptions_filter_1 = require("./common/filters/auth-exceptions.filter");
let AppController = class AppController {
    index(req) {
        return { message: req.flash('loginError') };
    }
    login(res) {
        res.redirect('/home');
    }
    getHome(req) {
        return { user: req.user };
    }
    getProfile(req) {
        return { user: req.user };
    }
    logout(req, res) {
        req.logout();
        res.redirect('/');
    }
};
__decorate([
    common_1.Get('/'),
    common_1.Render('login.html'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "index", null);
__decorate([
    common_1.UseGuards(login_guard_1.LoginGuard),
    common_1.Post('/login'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "login", null);
__decorate([
    common_1.UseGuards(authenticated_guard_1.AuthenticatedGuard),
    common_1.Get('/home'),
    common_1.Render('home.html'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHome", null);
__decorate([
    common_1.UseGuards(authenticated_guard_1.AuthenticatedGuard),
    common_1.Get('/profile'),
    common_1.Render('profile.html'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
__decorate([
    common_1.Get('/logout'),
    __param(0, common_1.Request()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "logout", null);
AppController = __decorate([
    common_1.Controller(),
    common_1.UseFilters(auth_exceptions_filter_1.AuthExceptionFilter)
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map