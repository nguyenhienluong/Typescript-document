class NhanVien {
    public HoTen:string;
    public LuongCB:number;
    public LoaiNhanVien:string;
    constructor(hoTen:string,luong:number,loaiNhanVien:string) {
        this.HoTen=hoTen;
        this.LuongCB = luong;
        this.LoaiNhanVien = loaiNhanVien;
    }
    public TinhLuong():number
    {
        return 0;
    }
}