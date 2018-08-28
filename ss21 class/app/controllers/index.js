"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sep_1 = require("../models/Sep");
var QuanLy_1 = require("../models/QuanLy");
var NhanVienThuong_1 = require("../models/NhanVienThuong");
var NhanVien_1 = require("../models/NhanVien");
var DanhSachNhanVien_1 = require("../models/DanhSachNhanVien");
var dsNhanVien = new DanhSachNhanVien_1.DanhSachNhanVien();
function ThemNhanVien() {
    // Lay thong tin tu nguoi dung
    var maNV = Number(document.getElementById("MaNhanVien").value);
    var hoTen = document.getElementById("HoTen").value;
    var luongCB = Number(document.getElementById("LuongCB").value);
    var loaiNhanvien = 'NhanVienThuong';
    var lstLoaiNhanVien = document.getElementsByName("LoaiNV");
    for (var _i = 0, lstLoaiNhanVien_1 = lstLoaiNhanVien; _i < lstLoaiNhanVien_1.length; _i++) {
        var rdbLoaiNhanVien = lstLoaiNhanVien_1[_i];
        if (rdbLoaiNhanVien.checked) {
            loaiNhanvien = rdbLoaiNhanVien.value;
        }
    }
    // Khai bao doi tuong nhan vien
    var nhanVien = new NhanVien_1.NhanVien(maNV, hoTen, luongCB, loaiNhanvien);
    switch (nhanVien.LoaiNhanVien) {
        case "Sep":
            {
                nhanVien = new Sep_1.Sep(maNV, hoTen, luongCB, loaiNhanvien, "ABC");
            }
            break;
        case "QuanLy":
            {
                var DanhSachCuaHang = ["Mystep", "MyI"];
                nhanVien = new QuanLy_1.QuanLy(maNV, hoTen, luongCB, loaiNhanvien, DanhSachCuaHang);
            }
            ;
            break;
        default: {
            nhanVien = new NhanVienThuong_1.NhanVienThuong(maNV, hoTen, luongCB, loaiNhanvien);
        }
    }
    dsNhanVien.ThemNhanVien(nhanVien);
    // console.log(nhanVien.TinhLuong);
    // console.log(dsNhanVien);
    LoadDanhSachNhanVien();
}
//gan phuong thuc cho nut button btnthemNhanVien
//(<HTMLInputElement>document.getElementById("btnThemNhanVien")).addEventListener("click", ThemNhanVien);
document.getElementById("btnThemNhanVien").addEventListener("click", ThemNhanVien);
function LoadDanhSachNhanVien() {
    var noiDungTblNhanVien = "";
    for (var _i = 0, _a = dsNhanVien.DSNV; _i < _a.length; _i++) {
        var nv = _a[_i];
        var thuoctinhDacTruong = void 0;
        switch (nv.LoaiNhanVien) {
            // neu LoaiNv la Sep thi ep kieu nv ve Sep de lay thuoc tinh chu ky
            case "Sep":
                {
                    var sep = nv;
                    thuoctinhDacTruong = sep.ChuKy;
                }
                ;
                break;
            case "QuanLy": {
                var ql = nv;
                // neu LoaiNV la QuanLy thi ep kieu nv ve Quan ly de lay thuoc tinh dac trung
                thuoctinhDacTruong = "Danh sach cua hang";
                for (var _b = 0, _c = ql.DanhSachCuaHang; _b < _c.length; _b++) {
                    var tenCuaHang = _c[_b];
                    thuoctinhDacTruong += tenCuaHang + " ";
                }
                ;
                break;
            }
        }
        noiDungTblNhanVien += "\n        <tr>\n            <td>" + nv.MaNV + "</td>\n            <td>" + nv.HoTen + "</td>\n            <td>" + nv.LuongCB + "</td>\n            <td>" + nv.TinhLuong + "</td>\n        </tr>\n    ";
    }
    document.getElementById("tblNhanVien").innerHTML = noiDungTblNhanVien;
}
