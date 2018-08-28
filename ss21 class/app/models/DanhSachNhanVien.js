"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DanhSachNhanVien = /** @class */ (function () {
    function DanhSachNhanVien() {
        this.DSNV = [];
    }
    DanhSachNhanVien.prototype.ThemNhanVien = function (nhanVien) {
        this.DSNV.push(nhanVien);
    };
    return DanhSachNhanVien;
}());
exports.DanhSachNhanVien = DanhSachNhanVien;
