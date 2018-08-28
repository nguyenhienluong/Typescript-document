import {NhanVien} from './NhanVien'

export class Sep extends NhanVien {
    public ChuKy: string;
    constructor(MaNV: number, HoTen: string, LuongCB: number, LoaiNhanVien: string, ChuKy:string) {

        // Ke thua tu lop cha NhanVien
        super(MaNV, HoTen,LuongCB,LoaiNhanVien);
        this.ChuKy = ChuKy;
    }
    public TinhLuong(): number {
        return this.LuongCB * 3;
    }
}