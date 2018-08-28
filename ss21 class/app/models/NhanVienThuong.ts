import {NhanVien} from "./NhanVien"

export class NhanVienThuong extends NhanVien {
    
    constructor(MaNV: number, HoTen: string, LuongCB: number, LoaiNhanVien: string) {

        // Ke thua tu lop cha NhanVien
        super(MaNV, HoTen,LuongCB,LoaiNhanVien);
       
    }
    public TinhLuong(): number {
        return this.LuongCB * 1;
    }
}