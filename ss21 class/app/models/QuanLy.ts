import {NhanVien} from './NhanVien'

export class QuanLy extends NhanVien {
    public DanhSachCuaHang:Array<string> = [];
    constructor(MaNV: number, HoTen: string, LuongCB: number, LoaiNhanVien: string, DanhSachCuaHang:string[]) {

        // Ke thua tu lop cha NhanVien
        super(MaNV, HoTen,LuongCB,LoaiNhanVien);
        this.DanhSachCuaHang = DanhSachCuaHang;
    }
    public TinhLuong(): number {
        return this.LuongCB * 1.5;
    }
}