"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NhanVien = /** @class */ (function () {
    function NhanVien(MaNV, HoTen, LuongCB, LoaiNhanVien) {
        this.MaNV = MaNV;
        this.HoTen = HoTen;
        this.LuongCB = LuongCB;
        this.LoaiNhanVien = LoaiNhanVien;
    }
    NhanVien.prototype.TinhLuong = function () {
        switch (this.LoaiNhanVien) {
            case 'NhanVienThuong':
                {
                    return this.LuongCB * 1;
                }
                ;
            case 'QuanLy':
                {
                    return this.LuongCB * 1.5;
                }
                ;
            case 'Sep':
                {
                    return this.LuongCB * 3;
                }
                ;
            default: return 0;
        }
    };
    return NhanVien;
}());
exports.NhanVien = NhanVien;
