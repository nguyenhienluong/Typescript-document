export class NhanVien {
    public MaNV: number;
    public HoTen: string;
    public LuongCB: number;
    public LoaiNhanVien: string;
    constructor(MaNV: number, HoTen: string, LuongCB: number, LoaiNhanVien: string ) {
            this.MaNV = MaNV;
            this.HoTen = HoTen;
            this.LuongCB = LuongCB;
            this.LoaiNhanVien = LoaiNhanVien;
    }
    public TinhLuong():number {
        switch(this.LoaiNhanVien) {
            case 'NhanVienThuong':{return this.LuongCB *1};
            case 'QuanLy':{return this.LuongCB *1.5};
            case 'Sep':{return this.LuongCB *3};
            default:return 0;
        }
    }
}