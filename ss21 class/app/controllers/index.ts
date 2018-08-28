import {Sep} from '../models/Sep'
import {QuanLy} from '../models/QuanLy'
import {NhanVienThuong} from '../models/NhanVienThuong'
import {NhanVien} from '../models/NhanVien'
import {DanhSachNhanVien} from '../models/DanhSachNhanVien'


let dsNhanVien = new DanhSachNhanVien();

function ThemNhanVien() {
    // Lay thong tin tu nguoi dung
    let maNV: number = Number((<HTMLInputElement>document.getElementById("MaNhanVien")).value);
    let hoTen: string = (<HTMLInputElement>document.getElementById("HoTen")).value;
    let luongCB: number = Number((<HTMLInputElement>document.getElementById("LuongCB")).value);
    let loaiNhanvien = 'NhanVienThuong';

    let lstLoaiNhanVien:any = document.getElementsByName("LoaiNV");
    for (let rdbLoaiNhanVien of lstLoaiNhanVien) {
        if (rdbLoaiNhanVien.checked) {

            loaiNhanvien = rdbLoaiNhanVien.value;

        }
    }
    // Khai bao doi tuong nhan vien
    let nhanVien = new NhanVien(maNV, hoTen, luongCB, loaiNhanvien);
    switch(nhanVien.LoaiNhanVien) {
        case "Sep": {nhanVien = new Sep(maNV, hoTen, luongCB, loaiNhanvien, "ABC");} break;
        case "QuanLy": {
            let DanhSachCuaHang:Array<string> = ["Mystep","MyI"];
            nhanVien = new QuanLy(maNV, hoTen, luongCB, loaiNhanvien, DanhSachCuaHang);
        }; break;
        default: { nhanVien = new NhanVienThuong(maNV, hoTen, luongCB, loaiNhanvien)}

    }

    dsNhanVien.ThemNhanVien(nhanVien);
    // console.log(nhanVien.TinhLuong);
    // console.log(dsNhanVien);
    LoadDanhSachNhanVien();

}
//gan phuong thuc cho nut button btnthemNhanVien
//(<HTMLInputElement>document.getElementById("btnThemNhanVien")).addEventListener("click", ThemNhanVien);
(<HTMLElement>document.getElementById("btnThemNhanVien")).addEventListener("click", ThemNhanVien);

function LoadDanhSachNhanVien() {
    let noiDungTblNhanVien ="";
    for( let nv of dsNhanVien.DSNV) {
        let thuoctinhDacTruong:any;
        switch(nv.LoaiNhanVien) {
            // neu LoaiNv la Sep thi ep kieu nv ve Sep de lay thuoc tinh chu ky
            case "Sep": {
                let sep:Sep = <Sep> nv;
                thuoctinhDacTruong = sep.ChuKy;
            }; break;
            case "QuanLy": {
                let ql:QuanLy = <QuanLy> nv;
                // neu LoaiNV la QuanLy thi ep kieu nv ve Quan ly de lay thuoc tinh dac trung
                thuoctinhDacTruong = "Danh sach cua hang";
                for(let tenCuaHang of ql.DanhSachCuaHang) {
                    thuoctinhDacTruong += tenCuaHang + " ";
                }; break;
            }
        }
        noiDungTblNhanVien +=`
        <tr>
            <td>${nv.MaNV}</td>
            <td>${nv.HoTen}</td>
            <td>${nv.LuongCB}</td>
            <td>${nv.TinhLuong}</td>
        </tr>
    `;
    }
    document.getElementById("tblNhanVien").innerHTML = noiDungTblNhanVien;
}