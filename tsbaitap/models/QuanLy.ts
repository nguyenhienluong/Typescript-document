class QuanLy extends NhanVien {
   
    constructor(hoTen:string,luong:number,loaiNhanVien:string) {
        super(hoTen,luong,loaiNhanVien)
    }
    public TinhLuong():number
    {
        return this.LuongCB * 1.5;
    }
}