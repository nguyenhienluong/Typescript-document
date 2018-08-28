"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NhanVien_1 = require("./NhanVien");
var Sep = /** @class */ (function (_super) {
    __extends(Sep, _super);
    function Sep(MaNV, HoTen, LuongCB, LoaiNhanVien, ChuKy) {
        var _this = 
        // Ke thua tu lop cha NhanVien
        _super.call(this, MaNV, HoTen, LuongCB, LoaiNhanVien) || this;
        _this.ChuKy = ChuKy;
        return _this;
    }
    Sep.prototype.TinhLuong = function () {
        return this.LuongCB * 3;
    };
    return Sep;
}(NhanVien_1.NhanVien));
exports.Sep = Sep;
