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
var QuanLy = /** @class */ (function (_super) {
    __extends(QuanLy, _super);
    function QuanLy(hoTen, luong, loaiNhanVien) {
        return _super.call(this, hoTen, luong, loaiNhanVien) || this;
    }
    QuanLy.prototype.TinhLuong = function () {
        return this.LuongCB * 1.5;
    };
    return QuanLy;
}(NhanVien));
