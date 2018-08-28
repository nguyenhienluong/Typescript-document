var NhanVien = /** @class */ (function () {
    function NhanVien(hoTen, luong, loaiNhanVien) {
        this.HoTen = hoTen;
        this.LuongCB = luong;
        this.LoaiNhanVien = loaiNhanVien;
    }
    NhanVien.prototype.TinhLuong = function () {
        return 0;
    };
    return NhanVien;
}());
