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
var core_1 = require('@angular/core');
var SignIn = (function () {
    function SignIn() {
    }
    SignIn.prototype.Signin = function (user, code) {
        if ((user.value !== '' && user.value != ' ') && (code.value !== '' && code.value != ' ')) {
            alert("Sign-In Successful!");
        }
        else {
            alert("Please enter details!");
        }
    };
    SignIn = __decorate([
        core_1.Component({
            selector: 'sign-in',
            templateUrl: './app/signin.component.html',
            styleUrls: ['./app/signin.component.css', './app/signin.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], SignIn);
    return SignIn;
}());
exports.SignIn = SignIn;
//# sourceMappingURL=signin.component.js.map