'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Common data service
var DataSvc = (function () {
    function DataSvc() {
        this._products = ['Widget', 'Gadget', 'Doohickey'];
        this._countries = ['US', 'Germany', 'UK', 'Japan', 'Italy', 'Greece'];
    }
    Object.defineProperty(DataSvc.prototype, "products", {
        get: function () {
            return this._products;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSvc.prototype, "countries", {
        get: function () {
            return this._countries;
        },
        enumerable: true,
        configurable: true
    });
    // get matches for a search term
    DataSvc.prototype.getData = function (count) {
        var data = [], i = 0, countryId, productId;
        for (var i = 0; i < count; i++) {
            countryId = Math.floor(Math.random() * this._countries.length);
            productId = Math.floor(Math.random() * this._products.length);
            data.push({
                id: i,
                countryId: countryId,
                productId: productId,
                date: new Date(2014, i % 12, i % 28),
                amount: Math.random() * 10000,
                active: i % 4 === 0
            });
        }
        return data;
    };
    return DataSvc;
}());
DataSvc = __decorate([
    core_1.Injectable()
], DataSvc);
exports.DataSvc = DataSvc;
//# sourceMappingURL=DataSvc.js.map